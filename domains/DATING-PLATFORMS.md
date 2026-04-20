# Dating Platforms — Domain-Specific Ethics Standards

**Domain:** Dating Platforms (Apps, Websites, Matching Services)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to dating platforms, relationship apps, and online matching services. Dating platforms mediate intimate human connections; unethical practices exploit vulnerability, commodify loneliness, and endanger users—particularly marginalized groups and domestic violence survivors—who entrust these platforms with deeply personal information.

---

## Category 1: Pricing & Monetization

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DA-1.1 | **Gender-Based Pricing**         | Charging different subscription prices based on user gender, exploiting the willingness-to-pay differential between demographics | Discriminatory pricing                |
| DA-1.2 | **Invisible Like Paywalls**       | Requiring paid subscriptions to see who has already liked the user, withholding information that motivates the purchase until payment is made | Emotional coercion; paywall deception |
| DA-1.3 | **Subscription Tier Manipulation**| Offering multiple paid tiers where core matching features are progressively locked behind higher tiers, creating a degraded free experience | Dark pattern; functional deprivation |
| DA-1.4 | **Devalued Free Experience**     | Deliberately reducing match visibility and message delivery rates for non-paying users to manufacture urgency for subscription | Artificial scarcity; manipulation    |
| DA-1.5 | **Microtransaction Fatigue**     | Requiring per-action payments (super likes, boost visibility, read receipts) that accumulate far beyond the advertised subscription cost | Hidden total cost; exploitative pricing |

---

## Category 2: Algorithmic Manipulation

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DA-2.1 | **Attractiveness Scoring Hidden from Users** | Assigning internal desirability scores based on swipe patterns and profile attributes without disclosing this to users | Undisclosed profiling; secret ranking |
| DA-2.2 | **Engagement-Optimized Matching Over Compatibility** | Prioritizing matches that maximize session time and return visits rather than relationship compatibility | Manipulating loneliness for retention |
| DA-2.3 | **Ghost Profile Injection**       | Creating or maintaining fake profiles to simulate platform activity, inflate match rates, and encourage continued use | Deceptive platform inflation           |
| DA-2.4 | **Intermittent Reinforcement Scheduling** | Deliberately varying match delivery timing to create dopamine-driven dependency patterns similar to slot machine mechanics | Exploitative behavioral design         |
| DA-2.5 | **Selective Visibility Throttling** | Limiting the visibility of paying users' profiles to other paying users, creating an echo chamber that rewards spend rather than compatibility | Pay-to-be-seen manipulation           |

---

## Category 3: Data & Privacy

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DA-3.1 | **Location Tracking Beyond App Use** | Continuing to collect precise location data when the app is backgrounded or closed, beyond what is needed for matching | Surveillance overreach                |
| DA-3.2 | **Data Sale to Brokers**          | Selling user profile data—including preferences, messages, and behavioral patterns—to data brokers or advertising networks | Trafficking intimate data             |
| DA-3.3 | **Inadequate Protections for Domestic Violence Survivors** | Failing to offer robust profile hiding, location masking, or block-list portability for users fleeing abusive partners | Endangering vulnerable users          |
| DA-3.4 | **Sexual Orientation Disclosure** | Exposing or inferring users' sexual orientation through data sharing or ad targeting without explicit, granular consent | Outing risk; privacy violation         |
| DA-3.5 | **Screenshot & Data Export Exploitation** | Allowing screenshots, data scraping, or unencrypted message storage that enables revenge porn or harassment | Facilitating intimate image abuse      |

---

## Category 4: Safety & Moderation

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DA-4.1 | **Slow Response to Harassment Reports** | Taking days or weeks to act on reports of stalking, threats, or harassment, leaving victims exposed | Negligent user protection             |
| DA-4.2 | **Sex Offender Screening Failures** | Failing to screen new registrations against sex offender registries or ignoring flagged accounts | Public safety negligence              |
| DA-4.3 | **Failure to Verify Identity**    | Allowing anonymous or pseudonymous accounts without any identity verification option, enabling catfishing and fraud | Enabling impersonation and predation  |
| DA-4.4 | **Image Verification Avoidance**  | Declining to implement photo verification that could reduce catfishing, citing user friction | Prioritizing growth over safety       |
| DA-4.5 | **Inadequate Block Efficacy**     | Allowing blocked users to reappear through new accounts or secondary channels without escalation mechanisms | Circumventing user safety controls    |

---

## Category 5: Subscription Dark Patterns

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DA-5.1 | **Auto-Renewal Without Reminder** | Automatically renewing subscriptions without advance notice or reminder, banking on user forgetfulness | Financial exploitation through inertia |
| DA-5.2 | **Cancellation Friction**         | Hiding cancellation options behind multiple screens, phone calls, or retention pitches that make quitting harder than subscribing | Dark pattern; obstructing user choice  |
| DA-5.3 | **Zombie Charges After Account Deletion** | Continuing to bill users after account deletion by retaining payment tokens and obscuring the billing relationship | Unauthorized charging                 |
| DA-5.4 | **False Urgency Notifications**   | Sending notifications like "Someone special is waiting" or "Your match expires soon" to induce subscription purchase | Manufactured emotional urgency        |
| DA-5.5 | **Downgrade Penalty**             | Punishing users who downgrade from premium tiers by reducing their visibility or match quality below the original free baseline | Retaliatory feature restriction       |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Disclose all algorithmic criteria** — publish the factors that influence match visibility, desirability scoring, and feed ordering so users understand how their experience is shaped.
2. **Enforce identity verification options** — offer voluntary photo and identity verification badges; do not mandate but make them available and visible on profiles.
3. **Implement safety-first reporting** — act on harassment and safety reports within 24 hours; provide interim protections (profile hiding, match pause) during investigation.
4. **Provide pricing parity** — eliminate gender-based pricing differentials; display total cost of ownership including microtransactions before purchase.
5. **Strengthen survivor protections** — offer location masking, profile invisibility modes, and exportable block lists; never require visible profile to maintain an account.
6. **Guarantee cancellation equality** — make cancellation as simple as subscription; send renewal reminders at least 72 hours before charge; halt all billing within one billing cycle of account deletion.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
