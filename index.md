# Privacy Policy for Pact

**Effective date:** September 24, 2026  
**Developer:** Black and Blue

Pact is an Android habit and accountability app that lets people track habits, optionally connect with one accountability partner per habit, and optionally share live proof photos. This policy explains what Pact processes, why it is used, and the choices available to you.

Pact does not sell personal data or show third-party advertising.

## 1. Information you provide {#privacy}

To create and use an account, Pact processes your email address, authentication credentials or Google sign-in token, display name, account identifier, and optional profile image supplied by your sign-in provider. Passwords are handled by Supabase Auth and are not visible to Black and Blue.

Pact stores the content needed to provide the service, including habit names and settings, schedules, reminders, check-ins, streaks, partner invitations and pairings, partner activity, notification preferences, and account status. Connected partners can see the shared habit information, activity, and proof that the app identifies as shared with that pairing. Do not enter sensitive information that is not needed for the habit.

## 2. Live proof photos

If a habit requires proof, Pact asks for camera access only when you use the live proof feature. Gallery upload is not supported. A captured proof photo is uploaded to private Supabase Storage, linked to the relevant check-in, and made available to the active partner for that paired habit. Unrelated users cannot access it through the app.

Proof photos are scheduled for automatic deletion after 30 days. A temporary local copy may remain on your device until upload, retry, cleanup, account deletion, app-data clearing, or uninstall completes.

## 3. Notifications and reminders

Pact uses Firebase Cloud Messaging to deliver partner activity and service notifications. It processes a device push token and the account association needed to route a notification. Local habit reminders are scheduled on your device. Android may ask for notification and exact-alarm permission so reminders can arrive at the times you choose. You can change notification settings in Pact and Android settings.

## 4. Analytics and crash diagnostics

Pact uses Google Analytics for Firebase to understand product flows such as onboarding, habit creation, partner invitations, paywall interactions, and purchase outcomes. Firebase Crashlytics receives crash reports and non-fatal diagnostics used to improve reliability. These services may process app interaction events, app version, device and operating-system information, crash stack traces, relevant technical state, and installation identifiers.

Pact is designed not to send habit names, proof photos, passwords, email addresses, or private partner content as analytics event parameters. Firebase traffic is encrypted in transit. Google’s current information is available at [Firebase Privacy and Security](https://firebase.google.com/support/privacy).

## 5. Optional purchases

Pact may offer Premium subscriptions or other paid plans that unlock paid features. It may also offer optional, repeatable **Student Developer Support** purchases at locally displayed store prices corresponding to US $1, $10, $100, and $999 tiers. Support purchases are a way to support the student developer; they do not unlock Premium or another lasting entitlement, are not charitable donations, and are not tax-deductible.

Google Play processes payment. RevenueCat helps validate purchases, restore eligible entitlements, and synchronize subscription status. These services may process transaction and purchase history, product identifiers, subscription status, device or installation information, and Pact’s authenticated account identifier. Pact does not receive or store full payment-card details.

Deleting a Pact account does not cancel a Google Play subscription. Manage or cancel an active subscription in Google Play before deleting the account.

## 6. Service providers and international processing

Pact uses:

- **Supabase** for authentication, database records, server functions, and proof-photo storage.
- **Google Firebase** for push delivery, analytics, and crash diagnostics.
- **Google Play** for app distribution and payment processing.
- **RevenueCat** for purchase validation and subscription status.

These providers process data under their own terms and may process it in countries other than yours. Pact uses encrypted HTTPS connections for service traffic.

## 7. Retention and security

Account and service data remains while your account is active and for the limited period needed for synchronization, recovery, fraud prevention, security, backups, and legal obligations. Proof photos follow the 30-day deletion schedule described above. Analytics, crash, purchase, and store records are retained under the applicable provider’s settings and legal requirements.

Pact uses Android’s app sandbox, access-controlled Supabase records and storage, encrypted network connections, and account-scoped authorization. No storage or transmission method is completely risk-free. Keep your device, email account, and Google account secure.

## 8. Delete your account and data {#delete-data}

In Pact, open **Settings → Delete account**, review the warning, and confirm deletion. The deletion process blocks new writes, removes your profile, habits, check-ins, pairings, streaks, device push tokens, and proof photos, deletes the Supabase Auth account, clears local Pact data, and requests erasure of the associated RevenueCat customer record. Security, transaction, and legal records may be retained where required.

Account deletion does not cancel a Google Play subscription. Use **Settings → Manage subscription** or Google Play’s subscription page first if you need to stop future billing.

If you cannot access the app, email **contact@blackandblue.co.in** with the subject **Pact privacy request** from the email address associated with your Pact account. Do not send your password, payment-card details, Google Play purchase token, or proof photos.

## 9. Children

Pact is a general habit and accountability service and is not directed to children under 13. Users must be old enough to consent to account creation and data processing under the law that applies to them. A parent or guardian may contact us about an account they believe was created by a child who cannot lawfully consent.

## 10. Terms of use {#terms}

Use Pact only for lawful, consensual habit accountability. Do not use the service to harass, coerce, monitor, or endanger another person, and do not upload illegal, abusive, or sensitive proof content. You are responsible for information you share with a partner and for ending a pairing when access is no longer appropriate.

Pact is provided on an “as available” basis. Habit streaks, reminders, partner activity, and proof features are motivational tools, not medical, emergency, financial, or professional advice. Subscription prices, billing periods, trials, and renewal terms are shown by Google Play before purchase. Purchases are subject to Google Play’s billing and refund rules.

## 11. Support {#support}

For product help, billing questions, privacy requests, or safety concerns, email **contact@blackandblue.co.in**. Include the app name and a concise description, but do not send passwords, payment-card information, authentication links, raw purchase tokens, or private proof photos.

## 12. Changes

We may update this policy when Pact, its service providers, or legal requirements change. The current version will show its effective date above. Material changes will be reflected in the app or store listing when appropriate.

## 13. Contact

- **Developer:** Black and Blue
- **Email:** contact@blackandblue.co.in
- **Privacy page:** https://pact.blackandblue.co.in/

Users in India may send privacy questions or complaints to the email address above. This contact statement does not designate a statutory grievance officer or publish unverified legal or postal details.
