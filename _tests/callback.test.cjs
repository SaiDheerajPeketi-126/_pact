const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'auth/callback.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1);
function mount(href) {
  const nodes = Object.fromEntries(['open', 'title', 'message'].map(id => [id, {
    hidden: true, disabled: false, textContent: '', handlers: {},
    addEventListener(kind, handler) { this.handlers[kind] = handler; }
  }]));
  const navigations = [], erased = [], events = {};
  const location = { pathname: new URL(href).pathname };
  Object.defineProperty(location, 'href', { get: () => href, set: value => navigations.push(value) });
  const context = vm.createContext({ URL, URLSearchParams, Set, location,
    history: { replaceState: (...args) => erased.push(args) },
    document: { getElementById: id => nodes[id] },
    addEventListener: (kind, handler) => events[kind] = handler,
    fetch: () => { throw new Error('Browser authentication/network forbidden'); }
  });
  vm.runInContext(scripts[0][1], context, { timeout: 100 });
  return { context, nodes, navigations, erased, events };
}
const base = 'https://pact.blackandblue.co.in/auth/callback';
test('PKCE recovery forwards only to the exact app after one explicit click', () => {
  const page = mount(base + '?code=synthetic-code&pact_flow=recovery');
  assert.equal(page.nodes.open.hidden, false);
  assert.deepEqual(page.navigations, []);
  assert.deepEqual(page.erased[0], [null, '', '/auth/callback']);
  assert.ok(!page.nodes.message.textContent.includes('synthetic-code'));
  page.nodes.open.handlers.click();
  assert.equal(page.navigations[0], 'intent://pact.blackandblue.co.in/auth/callback?code=synthetic-code&pact_flow=recovery#Intent;scheme=https;package=com.blackandblue.pact;end');
  page.nodes.open.handlers.click();
  assert.equal(page.navigations.length, 1);
});
test('known OTP email types are forwarded for native verification', () => {
  for (const type of ['signup', 'magiclink', 'invite', 'recovery', 'email_change', 'email']) {
    const page = mount(base + '?token_hash=synthetic-hash&type=' + type);
    page.nodes.open.handlers.click();
    assert.ok(page.navigations[0].includes('token_hash=synthetic-hash&type=' + type));
  }
});
test('malformed, ambiguous, foreign and error links cannot launch an app', () => {
  const links = [base, base + '?code=', base + '?code=a&code=b', base + '?code=a&token_hash=b&type=email',
    base + '?token_hash=a', base + '?token_hash=a&type=unknown', base + '?code=a&pact_flow=unknown',
    base + '?error=expired&code=a', base + '?error_code=expired', base + '?code=a&next=https://other.test',
    base + '?code=a#access_token=synthetic', base + '?code=%0A', base + '?code=' + 'a'.repeat(4097),
    base + '/?code=a', 'https://foreign.test/auth/callback?code=a', 'http://pact.blackandblue.co.in/auth/callback?code=a'];
  for (const href of links) {
    const page = mount(href);
    assert.equal(page.nodes.open.hidden, true, href);
    page.nodes.open.handlers.click();
    assert.deepEqual(page.navigations, []);
  }
});
test('intent syntax in opaque data remains encoded and page exit discards the handoff', () => {
  const page = mount(base + '?code=' + encodeURIComponent('a#Intent;package=foreign;end'));
  page.nodes.open.handlers.click();
  assert.equal(page.navigations[0].split('#Intent').length, 2);
  assert.ok(page.navigations[0].endsWith('package=com.blackandblue.pact;end'));
  const exited = mount(base + '?code=synthetic');
  exited.events.pagehide(); exited.nodes.open.handlers.click();
  assert.deepEqual(exited.navigations, []);
});
test('public contact, conditional four tiers and unchanged app-link certificate', () => {
  const policy = fs.readFileSync(path.join(root, 'index.md'), 'utf8');
  assert.ok(policy.includes('US $1, $10, $100, and $999'));
  assert.ok(policy.includes('they do not unlock Premium'));
  assert.ok(!policy.includes('Sparks'));
  for (const name of ['index.md', 'auth-complete.html', 'auth/callback.html']) {
    const content = fs.readFileSync(path.join(root, name), 'utf8');
    assert.ok(content.includes('contact@blackandblue.co.in'));
    assert.ok(!content.includes('developer@blackandblue.co.in'));
  }
  const links = JSON.parse(fs.readFileSync(path.join(root, '.well-known/assetlinks.json'), 'utf8'));
  assert.equal(links.length, 1);
  assert.equal(links[0].target.package_name, 'com.blackandblue.pact');
  assert.deepEqual(links[0].target.sha256_cert_fingerprints, ['C1:60:A4:6F:5F:35:C3:39:DD:AD:3F:3E:12:64:81:3A:9C:DA:BA:30:1E:CC:97:86:E4:A8:28:CF:5F:4F:26:00']);
  assert.ok(html.includes('permalink: /auth/callback\n'));
  assert.ok(html.includes("connect-src 'none'"));
});
