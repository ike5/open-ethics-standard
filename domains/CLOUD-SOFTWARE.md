# Cloud Computing & SaaS — Domain-Specific Ethics Standards

**Domain:** Cloud Computing & SaaS (Infrastructure-as-a-Service, Platform-as-a-Service, Software-as-a-Service)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to cloud computing platforms and SaaS providers that host the digital infrastructure of modern business and society. These providers serve as custodians of critical data and operational lifelines; unethical practices—vendor lock-in, hostage-taking of data, opaque pricing, and monopolistic bundling—trap customers in extractive relationships that undermine sovereignty, competition, and trust.

---

## Category 1: Vendor Lock-in

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SC-1.1 | **Data Export Barriers**           | Imposing technical or bureaucratic obstacles—proprietary export formats, throttled export speeds, mandatory support tickets—that make migrating data off the platform prohibitively difficult | Data hostage-taking; customer entrapment |
| SC-1.2 | **Proprietary Format Hostage-Taking** | Storing customer data in proprietary formats with no documented open alternative, ensuring that extraction requires costly transformation or specialized tooling | Interoperability sabotage; data imprisonment |
| SC-1.3 | **Contractual Exit Penalties**    | Imposing punitive early-termination fees or requiring full remaining contract payment upon exit, making the financial cost of leaving exceed the cost of staying | Coercive retention; penalty exploitation |
| SC-1.4 | **API Deprecation Without Migration Paths** | Deprecating or disabling APIs critical to customer integrations without providing migration documentation, replacement endpoints, or adequate transition timelines | Service continuity sabotage; integration destruction |
| SC-1.5 | **Egress Fee Exploitation**       | Setting data egress fees at levels far exceeding actual network costs, financially penalizing customers for exercising their right to leave | Rent extraction on data sovereignty   |

---

## Category 2: Pricing

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SC-2.1 | **Per-Seat Price Escalation**     | Progressively increasing per-user license fees at renewal, exploiting organizational switching costs to raise revenue without proportional product improvement | Rent extraction; loyalty penalty      |
| SC-2.2 | **Feature Downgrade During Renewal** | Removing or restricting features that were previously included in a tier, then offering them only at a higher price point upon renewal | Bait-and-switch; value erosion        |
| SC-2.3 | **Hidden API Call Charges**       | Failing to clearly disclose per-request API pricing or implementing metering methodologies that inflate billable events, resulting in surprise overage charges | Cost concealment; billing opacity     |
| SC-2.4 | **Auto-Renewal with Price Increases** | Automatically renewing subscriptions at higher prices than the prior term without explicit customer consent or advance notice of the price change | Unauthorized price increase; consent violation |
| SC-2.5 | **Free-Tier Bait-and-Switch**     | Offering generous free tiers to build dependency, then drastically reducing free-tier limits or converting previously free features to paid after lock-in | Dependency exploitation; false advertising |

---

## Category 3: Data Custody

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SC-3.1 | **Unclear Data Residency**        | Failing to disclose or honor the geographic region where customer data is stored and processed, exposing data to jurisdictions with weaker privacy protections | Sovereignty deception; regulatory evasion |
| SC-3.2 | **Subprocessor Opacity**          | Engaging third-party subprocessors to access or process customer data without transparent disclosure, explicit consent, or the right to object | Consent violation; custody chain break |
| SC-3.3 | **Government Access Without Customer Notification** | Complying with government data requests without promptly notifying the affected customer, denying them the opportunity to challenge or narrow the scope | Due process violation; surveillance complicity |
| SC-3.4 | **Data Retention After Termination** | Retaining customer data beyond contract termination without clear justification, or making deletion contingent on additional fees or support interactions | Data hostage-taking; custody violation |
| SC-3.5 | **Cross-Service Data Sharing**     | Using customer data from one service to benefit another service within the provider's portfolio without explicit, informed consent | Data misappropriation; consent bypass |

---

## Category 4: Security

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SC-4.1 | **Breach Notification Delay**     | Failing to notify affected customers of security breaches within a reasonable timeframe—often delaying disclosure to manage PR or assess liability | Concealment; endangering customer security response |
| SC-4.2 | **Shared Responsibility Model Confusion** | Marketing cloud security as comprehensive while contractually offloading critical responsibilities—patching, access management, encryption—to the customer through vague shared-responsibility frameworks | Deceptive security claims; liability shifting |
| SC-4.3 | **Security Feature Upselling on Base Tiers** | Withholding essential security capabilities—encryption at rest, MFA enforcement, audit logging—from base tiers and offering them only as premium add-ons | Ransom-like security pricing; negligence |
| SC-4.4 | **Inadequate Incident Transparency** | Providing minimal, delayed, or sanitized incident reports that omit root cause, scope of impact, or remediation details customers need to protect themselves | Transparency failure; accountability avoidance |

---

## Category 5: Market Power

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SC-5.1 | **Bundling to Eliminate Competition** | Bundling infrastructure, platform, and SaaS products so that competitors offering superior standalone services cannot compete on merit | Anti-competitive tying; market foreclosure |
| SC-5.2 | **Preferential Treatment of Own Services on Own Cloud** | Designing cloud platforms to give own SaaS or PaaS products performance, cost, or integration advantages that third-party competitors cannot replicate | Self-preferencing; platform discrimination |
| SC-5.3 | **Acquisition of Competitors to Shutter** | Acquiring competitive SaaS or cloud providers with the intent to discontinue their products and migrate customers to the acquirer's platform | Market elimination; consumer choice destruction |
| SC-5.4 | **Ecosystem Lock-in via Identity** | Requiring use of the provider's identity, authentication, or management services as a prerequisite for using any service, making partial migration infeasible | Compulsory ecosystem participation     |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Enable data portability** — support open data export formats, provide complete export tooling at no additional cost, and process export requests within 5 business days.
2. **Practice transparent pricing** — disclose all fees including per-request API charges before commitment, provide 60-day advance notice of price increases, and require explicit consent for auto-renewals at higher rates.
3. **Respect data custody** — honor data residency commitments, disclose all subprocessors, notify customers of government access requests within 3 business days, and delete customer data within 30 days of termination.
4. **Ensure security equity** — include encryption at rest, MFA enforcement, and audit logging in all tiers, notify customers of breaches within 72 hours, and publish complete incident reports.
5. **Maintain fair competition** — offer standalone services at fair market prices without forced bundling, provide equal platform access to third-party competitors, and commit to continuing acquired products for a minimum of 18 months.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
