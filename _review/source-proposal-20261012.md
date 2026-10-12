# Pact public callback and support proposal

Source-only isolated proposal based on `_pact` b054b99. The primary website and Pact app source4a49bfc remain unchanged. No pushes, Pages publication, DNS, auth settings, secret reads, functions, migrations, purchases or device actions performed.

## Existing public route and evidence

- Local public repository: `/Users/speketi/Projects/_pact`; origin `https://github.com/SaiDheerajPeketi/_pact.git`; unchanged CNAME `pact.blackandblue.co.in`.
- Root browser readback: `/auth/callback` is currently GitHub Pages404; root policy contains the old contact and only1/10/100 support tiers. Agent web-reader requests could not access the domain or public GitHub repository, so live state is root-reported, not independently verified.
- Existing `.well-known/assetlinks.json` and `_config.yml` are retained byte-for-byte. Root fresh Play Digital Asset Links readback confirms the exact existing package `com.blackandblue.pact` and C1:60:…:26:00 Play APP-SIGNING certificate. Do not replace it with an upload certificate.
- Root actual Supabase redirect allow-list already includes `https://pact.blackandblue.co.in/auth/callback` and the same URL with `?pact_flow=recovery`, plus the legacy scheme. No allow-list change proposed. Legacy site URL and legacy email confirmation are separate settings.

## Small public-source changes

- Policy and existing email-confirmation help link use `contact@blackandblue.co.in`; conditional Student Developer Support copy includes all four1/10/100/999 tiers. No activation or Sparks-counter claim: no Sparks counter was found in the frozen Pact billing source.
- Add `auth/callback.html` with Jekyll permalink `/auth/callback`, preserving the exact native callback path. A user-click-only, fixed-package HTTPS Android intent forwards PKCE code/recovery marker or known email OTP token/type to the app. It never exchanges tokens, fetches, saves browser storage, auto-launches, logs or displays link values. Query/fragment are removed from browser history; ambiguous/foreign/error/fragment links fail closed; handoff is consumed once and discarded on page exit.
- Existing `auth-complete.html` confirmation operation remains unchanged apart from the email address. Existing logo and policy/deletion/terms anchors remain unchanged.
- Five pure Node tests exercise the actual inline script with a synthetic DOM, including error/duplicate/foreign/injection/recovery/OTP/one-click/no-network cases and preserved certificate/copy. Browser/native delivery and Jekyll/Pages deployment remain UNRUN.

Jekyll3.10 `Page.destination` appends `.html` for the extensionless permalink, yielding `auth/callback.html`. Publication acceptance requires the actual host to serve **the exact extensionless URL as HTML**, preserving query and exact `/auth/callback`, with no cross-domain or trailing-slash redirect. If host routing does not meet that check, stop and review hosting routing; do not change the frozen app URL or claim the404 fixed merely from this source file.

Primary references: [Jekyll permalinks](https://jekyllrb.com/docs/permalinks/), [Jekyll3.10 page destination](https://github.com/jekyll/jekyll/blob/v3.10.0/lib/jekyll/page.rb#L144-L148), [Chrome explicit intent gestures](https://developer.chrome.com/docs/android/intents), [Android App Link verification](https://developer.android.com/training/app-links/verify-applinks).

## Current backend gaps: root-reported, no deployment credit

Root read-only inventories:23 applied migrations, highest `0023_restore_deleted_habit_sync_access`; six functions `delete-account`, `invite`, `purge-proof-photos`, `revenuecat-webhook`, `send-nudge`, `sync-revenuecat-entitlement`, each approximately two months old. `reconcile-revenuecat-entitlements` is absent. Visible deployed sync code is inline legacy RevenueCat logic; frozen local sync imports `_shared/revenuecat.ts`, `_shared/account_binding.ts` and `_shared/supabase_rpc.ts`. This is an actual deployed/local mismatch, not proof of current service correctness.

Root configured secret-name inventory contains only `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `ALLOW_TEST_PREMIUM_ACCESS`. Values were not viewed/copied. Built-in Supabase URL/service-role variables are platform-managed and are not inferred absent from this custom-secret list.

Bounded root-only next checklist, preserving current data and existing functions until reviewed:

1. Reconcile the exact23 applied migration names with local0001–0023, then stage/test the unapplied ordered0024–0033 set. These cover security/RLS hardening, habit resurrection, proof delivery, billing generation/entitlement integrity, intent sync, safe legacy rollout, account-bound mutations, deletion write barriers and auth profile provisioning. No blind reset/reapplication. Current source requires `claim_revenuecat_entitlement_refresh`, generation-bound `apply_revenuecat_entitlement`, webhook event claims and the account-binding/deletion/profile RPC contracts.
2. Configure own production environment and RevenueCat contracts privately: `PACT_DEPLOYMENT_ENVIRONMENT=production`, `REVENUECAT_ALLOWED_ENVIRONMENT=PRODUCTION`, own `REVENUECAT_APP_ID=app49ec5008a4`, `REVENUECAT_ENTITLEMENT_ID=premium`; required private names `REVENUECAT_SECRET_API_KEY`, `REVENUECAT_WEBHOOK_AUTH_TOKEN`, `REVENUECAT_WEBHOOK_SIGNING_SECRET`, `REVENUECAT_CUSTOMER_DELETE_API_KEY`, `REVENUECAT_PROJECT_ID`. Existing `ALLOW_TEST_PREMIUM_ACCESS` is not production entitlement proof; confirm test grants are disabled/fail closed in production. No key values belong in this repository.
3. Verify dedicated `PROOF_PURGE_CRON_SECRET`, `ACCOUNT_DELETION_CRON_SECRET`, `REVENUECAT_RECONCILIATION_CRON_SECRET` and matching Vault names (`proof_purge_cron_secret`, `account_deletion_cron_secret`, `revenuecat_reconciliation_cron_secret`), plus existing `project_url`/`publishable_key` Vault routing. Verify scheduled purge,15-minute reconciliation and deletion recovery jobs from migrated definitions; secret-name presence alone is not execution proof.
4. Deploy reviewed complete current bundles and helper closure, adding reconciliation and replacing the six stale functions only after staging validation. Respect `supabase/config.toml`: invite/delete-account/purge/reconciliation/webhook gatewayJWT=false with their own auth/token/HMAC guards; sync and send-nudge gatewayJWT=true. Do not paste one index file without its `_shared` and local worker imports.
5. Validate existing database regression suites and function tests against staged current source, then current signed auth/account binding, deletion retry/barrier, proof purge, nudge delivery, signed/replay/foreign-app/environment webhook rejection, generation races, scheduled recovery and ordinary purchase/restore/expiry/revoke/transfer behavior. Old September test totals and client SKU acceptance do not establish current backend readiness.
6. After separately authorized public publication, read back root/deletion/terms/support, exact callback and assetlinks HTTP status/content/certificate. Root then verifies real signed-device App Links and confirmation/magic-link/recovery/invite flows without recording real authentication-link values in public evidence.

Paid backend activation, current website404 resolution, current app SDK tests and billing purchases remain NOT VERIFIED.
