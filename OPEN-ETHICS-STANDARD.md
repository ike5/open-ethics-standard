# Open Ethics Standard (OES)

## A Comprehensive Framework for Ethical Software Business Practices

**Document Type:** Public-Facing Ethical Commitment with Enforceable Standards  
**Version:** 1.0 Draft  
**Date:** January 2026

---

## Executive Summary

This document establishes a comprehensive framework for categorizing, describing, and preventing unethical business
practices in software-as-a-service (SaaS) and educational technology (EdTech) companies. Unlike aspirational slogans
such as Google's former "Don't Be Evil," this Open Ethics Standard (OES) is designed to be a **binding commitment** with
real accountability mechanisms.

The framework draws from documented patterns of corporate malfeasance (including the phenomenon of "enshittification" as
coined by Cory Doctorow), established regulatory frameworks (GDPR, FTC Click-to-Cancel, COPPA), certification
standards (B Corp), and dark pattern taxonomies developed by UX researchers.

**Referencing This Standard:** Each provision in this document has a unique identifier (e.g., `1.2.7`, `2.4.1`,
`5.10.3`) enabling precise citation. References should use the format: "OES [section number]" (e.g., "OES 1.2.5" or "
violates OES 1.2.5, 2.4.1, and 5.10.3").

---

## Part I: Taxonomy of Unethical Business Practices

### 1. Pricing & Monetization Manipulation

#### 1.1 Enshittification Pattern

**Definition:** A deliberate, staged degradation of service quality designed to extract maximum value from locked-in
users.

**Stages:**

| Ref   | Stage                | Description                                                                       |
|-------|----------------------|-----------------------------------------------------------------------------------|
| 1.1.1 | **Attraction Phase** | Offer high-quality service at low/no cost to build user base                      |
| 1.1.2 | **Lock-in Phase**    | Create switching costs through data silos, network effects, or habit formation    |
| 1.1.3 | **Extraction Phase** | Systematically degrade service quality, increase prices, or introduce advertising |
| 1.1.4 | **Terminal Phase**   | Service becomes barely usable; users trapped by switching costs                   |

**Real-World Examples:**

- Netflix: Introduced ad tier, then raised ad-free tier prices repeatedly
- Amazon Prime: Continuous price increases with degrading search quality
- Adobe: Forced subscription model making cancellation prohibitively difficult

**Subcategories:**

| Ref   | Practice                | Description                                       | Ethical Violation                   |
|-------|-------------------------|---------------------------------------------------|-------------------------------------|
| 1.1.5 | **Tier Degradation**    | Features previously included become premium-only  | Breach of implied contract          |
| 1.1.6 | **Price Creep**         | Gradual, repeated price increases above inflation | Exploitation of lock-in             |
| 1.1.7 | **Ad Injection**        | Adding advertisements to previously ad-free tiers | Service quality degradation         |
| 1.1.8 | **Feature Gating**      | Moving existing features behind new paywalls      | Value extraction from captive users |
| 1.1.9 | **Artificial Scarcity** | Creating false limitations to force upgrades      | Manufactured urgency                |

#### 1.2 Subscription Manipulation

**Definition:** Practices that exploit the subscription model to extract revenue through deception or friction.

| Ref   | Practice                    | Description                                                | Regulatory Status                       |
|-------|-----------------------------|------------------------------------------------------------|-----------------------------------------|
| 1.2.1 | **Roach Motel**             | Easy to subscribe, difficult to cancel                     | Violates FTC Click-to-Cancel principles |
| 1.2.2 | **Hidden Renewal**          | Auto-renewal without clear notice                          | Violates state auto-renewal laws        |
| 1.2.3 | **Free Trial Traps**        | Collecting payment info for "free" trials, auto-converting | Potentially unfair trade practice       |
| 1.2.4 | **Zombie Subscriptions**    | Continuing to charge after service discontinued            | Fraud                                   |
| 1.2.5 | **Cancellation Mazes**      | Multi-step, confusing cancellation processes               | Violates Click-to-Cancel rule           |
| 1.2.6 | **Retention Dark Patterns** | Guilt-tripping, hiding cancel buttons, forced calls        | Deceptive design                        |

#### 1.3 Hidden Cost Practices

| Ref   | Practice            | Description                                    |
|-------|---------------------|------------------------------------------------|
| 1.3.1 | **Drip Pricing**    | Revealing costs incrementally during checkout  |
| 1.3.2 | **Bait-and-Switch** | Advertising one price, charging another        |
| 1.3.3 | **Processing Fees** | Adding unexpected fees at final checkout stage |
| 1.3.4 | **Forced Bundling** | Requiring purchase of unwanted items/services  |

---

### 2. Dark Patterns in User Interface Design

#### 2.1 Deceptive Design Taxonomy

Based on the Princeton/University of Chicago research identifying 15 distinct dark pattern types:

**Sneaking Patterns:**

| Ref   | Pattern               | Description                     | Example                                  |
|-------|-----------------------|---------------------------------|------------------------------------------|
| 2.1.1 | **Hidden Costs**      | Revealing fees only at checkout | "$0.99/month" becomes "$14.99 with fees" |
| 2.1.2 | **Sneak into Basket** | Auto-adding items to cart       | Pre-selected insurance, warranties       |
| 2.1.3 | **Bait & Switch**     | Different outcome than expected | "Free download" requires subscription    |

**Urgency Patterns:**

| Ref   | Pattern             | Description                | Example                      |
|-------|---------------------|----------------------------|------------------------------|
| 2.1.4 | **Countdown Timer** | Fake time pressure         | "Sale ends in 5:00" (resets) |
| 2.1.5 | **Limited Stock**   | False scarcity claims      | "Only 2 left!" (always)      |
| 2.1.6 | **High Demand**     | Fake social proof pressure | "47 people viewing this"     |

**Misdirection Patterns:**

| Ref    | Pattern                 | Description                               | Example                                |
|--------|-------------------------|-------------------------------------------|----------------------------------------|
| 2.1.7  | **Confirmshaming**      | Emotionally manipulative opt-out language | "No thanks, I don't like saving money" |
| 2.1.8  | **Visual Interference** | Using design to obscure options           | Tiny, gray "decline" link              |
| 2.1.9  | **Trick Questions**     | Confusing double-negatives                | "Uncheck to not receive newsletters"   |
| 2.1.10 | **Disguised Ads**       | Ads that look like content/navigation     | "Download" button that's an ad         |

**Obstruction Patterns:**

| Ref    | Pattern                         | Description                 | Example                          |
|--------|---------------------------------|-----------------------------|----------------------------------|
| 2.1.11 | **Roach Motel**                 | Easy in, hard out           | One-click signup, 12-step cancel |
| 2.1.12 | **Privacy Zuckering**           | Confusing privacy settings  | Default to maximum data sharing  |
| 2.1.13 | **Price Comparison Prevention** | Making comparison difficult | Complex, incomparable tiers      |

**Forced Action Patterns:**

| Ref    | Pattern                 | Description                           | Example                       |
|--------|-------------------------|---------------------------------------|-------------------------------|
| 2.1.14 | **Forced Registration** | Requiring account for basic functions | Login to view prices          |
| 2.1.15 | **Forced Continuity**   | Automatic paid conversion             | Trial to paid without warning |
| 2.1.16 | **Friend Spam**         | Requiring contact list access         | "Invite friends to continue"  |

#### 2.2 Emotional Manipulation Techniques

| Ref   | Technique            | Description                         | Psychological Exploit         |
|-------|----------------------|-------------------------------------|-------------------------------|
| 2.2.1 | **Fear Appeals**     | Scaring users into action           | "Your data is at risk!"       |
| 2.2.2 | **Guilt Induction**  | Making users feel bad for declining | "You'll miss out..."          |
| 2.2.3 | **Social Pressure**  | Implying others' judgment           | "Your friends already joined" |
| 2.2.4 | **Loss Framing**     | Emphasizing what you'll lose        | "Don't lose your progress!"   |
| 2.2.5 | **Authority Claims** | False expert endorsements           | "Recommended by 9/10 doctors" |

---

### 3. Data & Privacy Violations

#### 3.1 Data Collection Abuses

| Ref   | Practice                    | Description                         | Regulatory Violation             |
|-------|-----------------------------|-------------------------------------|----------------------------------|
| 3.1.1 | **Over-Collection**         | Gathering more data than necessary  | GDPR data minimization principle |
| 3.1.2 | **Purpose Creep**           | Using data for undisclosed purposes | GDPR purpose limitation          |
| 3.1.3 | **Indefinite Retention**    | Keeping data forever "just in case" | GDPR storage limitation          |
| 3.1.4 | **Shadow Profiles**         | Collecting data on non-users        | Privacy violations               |
| 3.1.5 | **Behavioral Surveillance** | Tracking beyond stated purposes     | GDPR, CCPA violations            |

#### 3.2 Consent Manipulation

| Ref   | Practice              | Description                              | Standard Violated                     |
|-------|-----------------------|------------------------------------------|---------------------------------------|
| 3.2.1 | **Bundled Consent**   | All-or-nothing data consent              | GDPR granular consent requirement     |
| 3.2.2 | **Pre-Checked Boxes** | Default opt-in to data collection        | GDPR affirmative consent              |
| 3.2.3 | **Consent Fatigue**   | Overwhelming users with consent requests | Undermines meaningful consent         |
| 3.2.4 | **Coercive Consent**  | "Accept or leave" ultimatums             | GDPR freely-given consent             |
| 3.2.5 | **Hidden Policies**   | Burying terms in long documents          | GDPR clear/plain language requirement |

#### 3.3 Data Portability Obstruction

| Ref   | Practice                | Description                           | Right Violated                 |
|-------|-------------------------|---------------------------------------|--------------------------------|
| 3.3.1 | **Proprietary Formats** | Exporting data in unusable formats    | GDPR Art. 20 portability right |
| 3.3.2 | **Export Limitations**  | Restricting what data can be exported | Data portability principles    |
| 3.3.3 | **Export Fees**         | Charging for data export              | Arguably violates GDPR         |
| 3.3.4 | **Deletion Theater**    | Claiming deletion but retaining data  | GDPR right to erasure          |

---

### 4. Service Quality Manipulation

#### 4.1 Artificial Degradation

| Ref   | Practice                 | Description                                 | Impact                    |
|-------|--------------------------|---------------------------------------------|---------------------------|
| 4.1.1 | **Planned Obsolescence** | Deliberately shortening product lifespan    | Waste, forced upgrades    |
| 4.1.2 | **Update Sabotage**      | Updates that slow/break older versions      | Forced hardware purchases |
| 4.1.3 | **Feature Removal**      | Removing working features to sell them back | Value extraction          |
| 4.1.4 | **Quality Throttling**   | Providing worse service to free/lower tiers | Coercive upgrades         |

#### 4.2 Support Manipulation

| Ref   | Practice                 | Description                                |
|-------|--------------------------|--------------------------------------------|
| 4.2.1 | **Support Gatekeeping**  | Hiding contact information                 |
| 4.2.2 | **Tiered Support**       | Basic tier = no human support              |
| 4.2.3 | **Resolution Avoidance** | Designed to frustrate users into giving up |
| 4.2.4 | **Ticket Closing**       | Auto-closing without resolution            |

---

### 5. EdTech-Specific Ethical Concerns

#### 5.1 Student Data Protection (COPPA/FERPA Compliance)

| Ref   | Requirement               | Description                                           | Enforcement          |
|-------|---------------------------|-------------------------------------------------------|----------------------|
| 5.1.1 | **Minimal Collection**    | Only collect data necessary for educational purpose   | FTC enforcement      |
| 5.1.2 | **No Commercial Use**     | Student data cannot be used for advertising/marketing | FTC Policy Statement |
| 5.1.3 | **Limited Retention**     | Delete data when no longer needed for education       | COPPA Rule           |
| 5.1.4 | **Security Requirements** | Appropriate safeguards for children's data            | COPPA Rule           |
| 5.1.5 | **Parental Rights**       | Parents can review and delete data                    | COPPA, FERPA         |

#### 5.2 Educational Integrity

| Ref   | Practice to Avoid         | Description                                    |
|-------|---------------------------|------------------------------------------------|
| 5.2.1 | **Learning Manipulation** | Designing to maximize engagement over learning |
| 5.2.2 | **Assessment Gaming**     | Encouraging teaching to the test               |
| 5.2.3 | **Credential Inflation**  | Awarding meaningless certificates              |
| 5.2.4 | **Dependency Creation**   | Making learners dependent on the platform      |

---

### 6. Market & Competition Manipulation

#### 6.1 Anti-Competitive Practices

| Ref   | Practice                       | Description                               | Legal Status                |
|-------|--------------------------------|-------------------------------------------|-----------------------------|
| 6.1.1 | **Predatory Pricing**          | Below-cost pricing to destroy competitors | Illegal under antitrust law |
| 6.1.2 | **Exclusive Dealing**          | Forcing exclusivity arrangements          | Potentially illegal         |
| 6.1.3 | **Tying Arrangements**         | Forcing purchase of unwanted products     | Sherman Act violation       |
| 6.1.4 | **Platform Self-Preferencing** | Favoring own products on marketplace      | Under regulatory scrutiny   |

#### 6.2 Vendor Lock-in Tactics

| Ref   | Practice                  | Description                              |
|-------|---------------------------|------------------------------------------|
| 6.2.1 | **Proprietary Standards** | Creating incompatible ecosystems         |
| 6.2.2 | **API Restrictions**      | Limiting interoperability                |
| 6.2.3 | **Data Hostage**          | Making data export difficult/impossible  |
| 6.2.4 | **Contract Traps**        | Long-term contracts with high exit costs |

---

## Part II: Ethical Commitments

### 7. Foundational Principles

| Ref | Principle               | Description                                                                                                                                                                            |
|-----|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 7.1 | **User Primacy**        | The interests of users shall be prioritized over short-term revenue extraction. Users are partners in our mission, not resources to be exploited.                                      |
| 7.2 | **Transparency**        | All material terms, limitations, and changes shall be communicated clearly and proactively. No information that would affect a reasonable user's decision shall be hidden or obscured. |
| 7.3 | **Reversibility**       | Any action a user can take to engage with our service must be equally easy to reverse. "Click to Cancel" is not just compliance—it's a core principle.                                 |
| 7.4 | **Data Stewardship**    | User data is held in trust, not owned. Users retain ultimate control over their data and can export or delete it at any time.                                                          |
| 7.5 | **Fair Value Exchange** | Pricing changes must be justified by genuine value additions. Degradation of existing services to force upgrades is prohibited.                                                        |

---

### 8. Pricing Commitments

#### 8.1 Price Stability Guarantee

| Ref   | Commitment                                                                                                                      |
|-------|---------------------------------------------------------------------------------------------------------------------------------|
| 8.1.1 | Existing users shall not experience price increases exceeding inflation (CPI) for their current tier within any 24-month period |
| 8.1.2 | Any price increase shall be announced at least 90 days in advance                                                               |
| 8.1.3 | Users may lock in current pricing for 12 months after any announced increase                                                    |

#### 8.2 Feature Protection Guarantee

| Ref   | Commitment                                                                                       |
|-------|--------------------------------------------------------------------------------------------------|
| 8.2.1 | Features available at time of subscription shall not be removed from that tier                   |
| 8.2.2 | If features must be deprecated for technical reasons, equivalent functionality shall be provided |
| 8.2.3 | No feature shall be moved to a higher tier that was previously available in a lower tier         |

#### 8.3 No Forced Advertising

| Ref   | Commitment                                                                                             |
|-------|--------------------------------------------------------------------------------------------------------|
| 8.3.1 | If a tier is advertised as "ad-free," it shall remain ad-free permanently                              |
| 8.3.2 | Sponsored content or partnerships shall be clearly labeled                                             |
| 8.3.3 | Users shall never be required to view advertisements as a condition of using features they've paid for |

#### 8.4 Transparent Pricing

| Ref   | Commitment                                                                                  |
|-------|---------------------------------------------------------------------------------------------|
| 8.4.1 | All costs shall be displayed upfront before any payment information is collected            |
| 8.4.2 | No hidden fees, processing charges, or surprise costs                                       |
| 8.4.3 | International users shall see prices in their local currency with no hidden conversion fees |

---

### 9. Cancellation & Data Rights

#### 9.1 Easy Cancellation

| Ref   | Commitment                                               |
|-------|----------------------------------------------------------|
| 9.1.1 | Cancellation shall require no more steps than signup     |
| 9.1.2 | No "retention flows" or guilt-inducing language          |
| 9.1.3 | Cancellation shall be completable within 3 clicks/taps   |
| 9.1.4 | Phone calls shall never be required to cancel            |
| 9.1.5 | Cancellation shall be effective immediately upon request |

#### 9.2 Post-Cancellation Data Rights

| Ref   | Commitment                                                                                 |
|-------|--------------------------------------------------------------------------------------------|
| 9.2.1 | Users shall have 30 days after cancellation to export all their data                       |
| 9.2.2 | Data export shall be in standard, machine-readable formats (JSON, CSV, PDF)                |
| 9.2.3 | All personal data shall be permanently deleted within 90 days of cancellation upon request |
| 9.2.4 | A deletion confirmation shall be provided                                                  |

#### 9.3 Data Portability

| Ref   | Commitment                                                              |
|-------|-------------------------------------------------------------------------|
| 9.3.1 | Users may export all their data and content at any time                 |
| 9.3.2 | Export shall be available in formats compatible with competing services |
| 9.3.3 | No fees shall be charged for data export                                |
| 9.3.4 | Export shall include all user-generated content and associated metadata |

---

### 10. Privacy & Data Protection

#### 10.1 Data Minimization

| Ref    | Commitment                                                  |
|--------|-------------------------------------------------------------|
| 10.1.1 | We shall collect only data necessary to provide the service |
| 10.1.2 | Each data point collected shall have a documented purpose   |
| 10.1.3 | Data collection practices shall be auditable                |

#### 10.2 Purpose Limitation

| Ref    | Commitment                                                                |
|--------|---------------------------------------------------------------------------|
| 10.2.1 | Data shall only be used for disclosed purposes                            |
| 10.2.2 | No secondary monetization of user data (selling, sharing for advertising) |
| 10.2.3 | No behavioral profiles shall be sold to third parties                     |

#### 10.3 Consent Standards

| Ref    | Commitment                                                    |
|--------|---------------------------------------------------------------|
| 10.3.1 | Consent shall be granular (separate consent for each purpose) |
| 10.3.2 | Consent shall be freely given (no coercion or bundling)       |
| 10.3.3 | Consent shall be easily withdrawn                             |
| 10.3.4 | Pre-checked boxes are prohibited                              |

#### 10.4 Security Commitment

| Ref    | Commitment                                                   |
|--------|--------------------------------------------------------------|
| 10.4.1 | Industry-standard encryption for data at rest and in transit |
| 10.4.2 | Regular security audits                                      |
| 10.4.3 | Breach notification within 72 hours of discovery             |
| 10.4.4 | No passwords stored in plain text                            |

---

### 11. User Interface Ethics

#### 11.1 No Dark Patterns

We shall not employ any of the following:

| Ref    | Prohibited Practice                                 |
|--------|-----------------------------------------------------|
| 11.1.1 | Confirmshaming or emotionally manipulative language |
| 11.1.2 | Fake urgency (countdown timers, false scarcity)     |
| 11.1.3 | Visual tricks to hide unfavorable options           |
| 11.1.4 | Trick questions or confusing double-negatives       |
| 11.1.5 | Forced continuity without clear warning             |
| 11.1.6 | Disguised advertisements                            |
| 11.1.7 | Roach motel designs (easy in, hard out)             |

#### 11.2 Design for User Agency

| Ref    | Commitment                                                        |
|--------|-------------------------------------------------------------------|
| 11.2.1 | Default settings shall favor user privacy and control             |
| 11.2.2 | Users shall be able to customize their experience without penalty |
| 11.2.3 | Important choices shall be presented clearly and without bias     |
| 11.2.4 | "No" shall be as easy to say as "Yes"                             |

#### 11.3 Accessibility Commitment

| Ref    | Commitment                                            |
|--------|-------------------------------------------------------|
| 11.3.1 | Interface shall meet WCAG 2.1 AA standards            |
| 11.3.2 | No information shall be conveyed solely through color |
| 11.3.3 | All functionality shall be keyboard-accessible        |
| 11.3.4 | Screen reader compatibility shall be maintained       |

---

### 12. Service Quality Standards

#### 12.1 No Planned Degradation

| Ref    | Commitment                                                                    |
|--------|-------------------------------------------------------------------------------|
| 12.1.1 | We shall not intentionally degrade service quality                            |
| 12.1.2 | Updates shall improve or maintain functionality, never deliberately worsen it |
| 12.1.3 | Free tier users shall receive genuine value, not a crippled experience        |

#### 12.2 Support Standards

| Ref    | Commitment                                                                 |
|--------|----------------------------------------------------------------------------|
| 12.2.1 | Human support shall be accessible within reasonable timeframes             |
| 12.2.2 | Contact information shall be easy to find (maximum 2 clicks from any page) |
| 12.2.3 | Support requests shall receive acknowledgment within 24 hours              |
| 12.2.4 | No AI shall impersonate human support staff                                |

#### 12.3 Uptime & Reliability

| Ref    | Commitment                                                               |
|--------|--------------------------------------------------------------------------|
| 12.3.1 | Target uptime: 99.5% (measured monthly, excluding scheduled maintenance) |
| 12.3.2 | Scheduled maintenance shall be announced 48 hours in advance             |
| 12.3.3 | Users shall be compensated for extended outages (>4 hours)               |

---

### 13. Educational Technology Standards

#### 13.1 Learning-First Design

| Ref    | Commitment                                                                       |
|--------|----------------------------------------------------------------------------------|
| 13.1.1 | Features shall be designed to maximize learning outcomes, not engagement metrics |
| 13.1.2 | We shall not employ addictive design patterns                                    |
| 13.1.3 | Progress shall reflect genuine skill development                                 |

#### 13.2 Child Safety (if applicable)

| Ref    | Commitment                                                                       |
|--------|----------------------------------------------------------------------------------|
| 13.2.1 | Full COPPA compliance if serving users under 13                                  |
| 13.2.2 | No collection of personal information from children beyond educational necessity |
| 13.2.3 | No advertising to children                                                       |
| 13.2.4 | Parental controls and visibility                                                 |

#### 13.3 Content Integrity

| Ref    | Commitment                                                        |
|--------|-------------------------------------------------------------------|
| 13.3.1 | User-generated content shall remain user-owned                    |
| 13.3.2 | We shall not claim intellectual property rights over user content |
| 13.3.3 | Attribution shall be preserved for shared content                 |

---

## Part III: Enforcement & Accountability Mechanisms

### 14. Internal Enforcement

#### 14.1 Ethics Review Board

| Ref    | Requirement                                                      |
|--------|------------------------------------------------------------------|
| 14.1.1 | Quarterly review of all pricing, feature, and policy changes     |
| 14.1.2 | Any change affecting user rights requires Ethics Review approval |
| 14.1.3 | Board shall include at least one external advisor                |

#### 14.2 Pre-Implementation Review

All of the following require documented ethics review:

| Ref    | Review Required For                 |
|--------|-------------------------------------|
| 14.2.1 | Pricing changes                     |
| 14.2.2 | New data collection                 |
| 14.2.3 | UI/UX changes affecting user choice |
| 14.2.4 | Terms of service modifications      |
| 14.2.5 | New third-party integrations        |

#### 14.3 Employee Reporting

| Ref    | Requirement                                          |
|--------|------------------------------------------------------|
| 14.3.1 | Employees may report ethics concerns anonymously     |
| 14.3.2 | No retaliation for good-faith ethics reports         |
| 14.3.3 | Ethics concerns shall be investigated within 30 days |

### 15. External Accountability

#### 15.1 Public Transparency Reports

Annual publication of:

| Ref    | Report Component                          |
|--------|-------------------------------------------|
| 15.1.1 | Pricing change history                    |
| 15.1.2 | Data practices audit                      |
| 15.1.3 | Dark pattern audit (by external reviewer) |
| 15.1.4 | Cancellation rate and ease metrics        |
| 15.1.5 | Support response time statistics          |

#### 15.2 User Recourse

Users who believe this OES has been violated may:

| Ref    | Recourse Option                                      |
|--------|------------------------------------------------------|
| 15.2.1 | Submit a formal complaint through documented process |
| 15.2.2 | Receive written response within 30 days              |
| 15.2.3 | Request mediation for unresolved disputes            |
| 15.2.4 | Seek remedies as specified in 15.3                   |

#### 15.3 Remedies for Violation

| Ref    | Violation Type              | User Remedy                                             |
|--------|-----------------------------|---------------------------------------------------------|
| 15.3.1 | Undisclosed price increase  | Refund of excess charges + 1 month free                 |
| 15.3.2 | Feature removal             | Restoration or equivalent value credit                  |
| 15.3.3 | Data portability failure    | Free premium support + expedited export                 |
| 15.3.4 | Dark pattern identification | Public acknowledgment + correction                      |
| 15.3.5 | Privacy violation           | Full data audit + deletion option                       |
| 15.3.6 | Cancellation obstruction    | Immediate cancellation + full refund of disputed period |

#### 15.4 Legal Enforceability Mechanisms

To give this OES legal weight beyond a policy statement:

| Ref    | Mechanism                                                                                                                                       |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 15.4.1 | **Terms of Service Integration**: This OES shall be incorporated by reference into the Terms of Service, making violations a breach of contract |
| 15.4.2 | **Warranty Provisions**: Specific commitments (price stability, feature protection) shall be structured as express warranties                   |
| 15.4.3 | **Arbitration Carve-Out**: Users retain the right to pursue claims for OES violations in small claims court                                     |
| 15.4.4 | **Class Action Preservation**: OES violation claims shall not be subject to class action waiver                                                 |
| 15.4.5 | **Liquidated Damages**: Pre-set remedy amounts for specific violations (as detailed in 15.3) shall be deemed reasonable liquidated damages      |

### 16. Certification & Third-Party Verification

#### 16.1 Voluntary Certifications

Adopting organizations commit to pursuing and maintaining:

| Ref    | Certification                                       |
|--------|-----------------------------------------------------|
| 16.1.1 | B Corp Certification (when eligible)                |
| 16.1.2 | SOC 2 Type II compliance                            |
| 16.1.3 | Privacy certification (e.g., TrustArc, PrivacyMark) |

#### 16.2 Annual Audits

| Ref    | Audit Type                     |
|--------|--------------------------------|
| 16.2.1 | Independent dark pattern audit |
| 16.2.2 | Privacy practices audit        |
| 16.2.3 | Accessibility audit            |
| 16.2.4 | Publication of audit summaries |

---

## Part IV: Evolution & Amendment Process

### 17. Amendment Procedures

#### 17.1 User Notification

Any material amendment to this OES requires:

| Ref    | Requirement                                               |
|--------|-----------------------------------------------------------|
| 17.1.1 | 60 days advance notice                                    |
| 17.1.2 | Clear explanation of changes                              |
| 17.1.3 | User ability to provide feedback                          |
| 17.1.4 | Existing users may continue under prior OES for 12 months |

#### 17.2 Prohibited Amendments

The following may never be amended to users' detriment:

| Ref    | Protected Provision                        |
|--------|--------------------------------------------|
| 17.2.1 | Cancellation ease (Section 9.1)            |
| 17.2.2 | Data portability rights (Section 9.3)      |
| 17.2.3 | No dark patterns commitment (Section 11.1) |
| 17.2.4 | Remedy provisions (Section 15.3)           |

#### 17.3 Version Control

| Ref    | Requirement                                                                 |
|--------|-----------------------------------------------------------------------------|
| 17.3.1 | All versions of this OES shall be archived and publicly accessible          |
| 17.3.2 | Current version shall include effective date and version number             |
| 17.3.3 | Users shall be able to view the OES that was in effect when they subscribed |

---

## Appendices

### Appendix A: Glossary of Terms

| Term                 | Definition                                                                      |
|----------------------|---------------------------------------------------------------------------------|
| **Dark Pattern**     | A user interface design intended to trick users into actions they didn't intend |
| **Enshittification** | Deliberate platform degradation to extract value from locked-in users           |
| **Data Portability** | The right to receive personal data in a structured, machine-readable format     |
| **Consent**          | Freely given, specific, informed, and unambiguous agreement                     |
| **Roach Motel**      | A design where entry is easy but exit is difficult                              |
| **Confirmshaming**   | Using guilt-inducing language to discourage opt-outs                            |
| **Feature Gating**   | Moving previously-available features behind paywalls                            |
| **Tier Degradation** | Reducing the value of existing subscription tiers                               |

### Appendix B: Regulatory Reference

| Regulation      | Jurisdiction  | Key Requirements                                 |
|-----------------|---------------|--------------------------------------------------|
| GDPR            | EU/EEA        | Data minimization, consent, portability, erasure |
| CCPA/CPRA       | California    | Consumer rights, opt-out of sale                 |
| COPPA           | United States | Parental consent for children under 13           |
| FTC Act         | United States | Prohibition on unfair/deceptive practices        |
| Click-to-Cancel | United States | Easy cancellation matching signup ease           |

### Appendix C: Implementation Checklist

**Pricing & Monetization**

- [ ] Price increase notification system (90 days)
- [ ] Price lock option for existing users
- [ ] Feature protection tracking
- [ ] Transparent pricing display (all costs upfront)

**Cancellation & Data**

- [ ] 3-click cancellation flow
- [ ] Data export in JSON/CSV/PDF
- [ ] 30-day post-cancellation access
- [ ] 90-day deletion confirmation

**Privacy & Consent**

- [ ] Granular consent mechanism
- [ ] No pre-checked boxes
- [ ] Clear withdrawal process
- [ ] Data audit documentation

**User Interface**

- [ ] Dark pattern audit completed
- [ ] WCAG 2.1 AA compliance check
- [ ] Default settings favor user
- [ ] Clear "No" options

**Enforcement**

- [ ] Ethics Review Board established
- [ ] Employee reporting channel
- [ ] User complaint process documented
- [ ] Transparency report template

---

## Conclusion

This Open Ethics Standard represents more than a policy—it's a commitment to building software that respects users as
partners rather than resources. By categorizing unethical practices explicitly and committing to specific, enforceable
standards, adopting organizations demonstrate that ethical business practices and commercial success are not mutually
exclusive.

We invite software companies to adopt, adapt, and improve upon this framework. The goal is not competitive advantage but
industry-wide improvement in how software companies treat their users.

---

## Quick Reference Index

For convenience, here are commonly referenced violations:

| Category                    | Key References |
|-----------------------------|----------------|
| Subscription Manipulation   | 1.2.1–1.2.6    |
| Cancellation Mazes          | 1.2.5          |
| Dark Patterns (UI)          | 2.1.1–2.1.16   |
| Data Privacy Violations     | 3.1.1–3.3.4    |
| Easy Cancellation Rights    | 9.1.1–9.1.5    |
| No Dark Patterns Commitment | 11.1.1–11.1.7  |
| User Remedies               | 15.3.1–15.3.6  |

---

**Document Control**

| Version   | Date         | Changes           |
|-----------|--------------|-------------------|
| 1.0 Draft | January 2026 | Initial framework |

---

*This document is released under Creative Commons Attribution 4.0 (CC BY 4.0). Other companies are encouraged to use,
adapt, and build upon this framework with attribution.*