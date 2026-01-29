# Open Ethics Standard (OES)

## A Comprehensive Framework for Ethical Software Business Practices

**Document Type:** Public-Facing Ethical Commitment with Enforceable Standards  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Executive Summary

This document establishes a comprehensive framework for categorizing, describing, and preventing unethical business
practices in software-as-a-service (SaaS). The Open Ethics Standard (OES) is designed to be a **binding commitment**
with accountability mechanisms.

The framework draws from documented patterns of corporate malfeasance (including the phenomenon of "enshittification" as
coined by Cory Doctorow), established regulatory frameworks (GDPR, FTC Click-to-Cancel, COPPA), certification
standards (B Corp), and dark pattern taxonomies developed by UX researchers.

**Referencing This Standard:** Each provision in this document has a unique identifier (e.g., `1.2.7`, `2.4.1`,
`5.10.3`) enabling precise citation. References should use the format: "OES [section number]" (e.g., "OES 1.2.5" or "
violates OES 1.2.5, 2.4.1, and 5.10.3").

---

## Part I: Taxonomy of Unethical Business Practices

### Category 1: Pricing & Monetization Manipulation

#### 1.1 Enshittification Pattern

**Definition:** A deliberate, staged degradation of service quality designed to extract maximum value from locked-in
users.

**Stages:**

| Stage                | Description                                                                       |
|----------------------|-----------------------------------------------------------------------------------|
| **Attraction Phase** | Offer high-quality service at low/no cost to build user base                      |
| **Lock-in Phase**    | Create switching costs through data silos, network effects, or habit formation    |
| **Extraction Phase** | Systematically degrade service quality, increase prices, or introduce advertising |
| **Terminal Phase**   | Service becomes barely usable; users trapped by switching costs                   |

**Examples:**

- Company A: Introduced ad tier, then raised ad-free tier prices repeatedly
- Company B: Continuous price increases with degrading search quality
- Company C: Forced subscription model making cancellation prohibitively difficult

**Subcategories:**

| Ref   | Practice                | Description                                       | Ethical Violation                   |
|-------|-------------------------|---------------------------------------------------|-------------------------------------|
| 1.1.1 | **Tier Degradation**    | Features previously included become premium-only  | Breach of implied contract          |
| 1.1.2 | **Price Creep**         | Gradual, repeated price increases above inflation | Exploitation of lock-in             |
| 1.1.3 | **Ad Injection**        | Adding advertisements to previously ad-free tiers | Service quality degradation         |
| 1.1.4 | **Feature Gating**      | Moving existing features behind new paywalls      | Value extraction from captive users |
| 1.1.5 | **Artificial Scarcity** | Creating false limitations to force upgrades      | Manufactured urgency                |

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

#### Ethical Evaluation Framework

The following criteria help distinguish manipulative design from legitimate persuasion:

| Criterion                   | Ethical                                                   | Unethical                                            |
|-----------------------------|-----------------------------------------------------------|------------------------------------------------------|
| **User Interest Alignment** | Pattern serves user's stated goals                        | Pattern serves platform at user's expense            |
| **Transparency**            | User is aware technique is being used                     | Technique is hidden or deliberately obscured         |
| **Consent & Exit**          | User can opt out without friction                         | Opting out is difficult, punitive, or impossible     |
| **Autonomy**                | Supports informed decision-making; includes stopping cues | Undermines judgment; removes natural stopping points |
| **Vulnerability**           | Avoids targeting susceptible populations                  | Exploits addiction, FOMO, or targets children        |
| **Harm Potential**          | Minimal or positive downstream consequences               | Risk of financial, time, or mental health harm       |

A pattern becomes a "dark pattern" when it fails multiple criteria — particularly when there is asymmetric benefit (
platform gains while user loses) and deliberate obfuscation of the technique being employed.

#### Deceptive Design Taxonomy

Based on the Princeton/University of Chicago research identifying 15 distinct dark pattern types:

#### 2.1 Sneaking Patterns

| Ref   | Pattern               | Description                     | Example                                       |
|-------|-----------------------|---------------------------------|-----------------------------------------------|
| 2.1.1 | **Hidden Costs**      | Revealing fees only at checkout | 0.99 cents per month becomes $14.99 with fees |
| 2.1.2 | **Sneak into Basket** | Auto-adding items to cart       | Pre-selected insurance, warranties            |
| 2.1.3 | **Bait & Switch**     | Different outcome than expected | "Free download" requires subscription         |

#### 2.2 Urgency Patterns

| Ref   | Pattern             | Description                | Example                      |
|-------|---------------------|----------------------------|------------------------------|
| 2.1.4 | **Countdown Timer** | Fake time pressure         | "Sale ends in 5:00" (resets) |
| 2.1.5 | **Limited Stock**   | False scarcity claims      | "Only 2 left!" (always)      |
| 2.1.6 | **High Demand**     | Fake social proof pressure | "47 people viewing this"     |

#### 2.3 Misdirection Patterns

| Ref    | Pattern                 | Description                               | Example                                |
|--------|-------------------------|-------------------------------------------|----------------------------------------|
| 2.1.7  | **Confirmshaming**      | Emotionally manipulative opt-out language | "No thanks, I don't like saving money" |
| 2.1.8  | **Visual Interference** | Using design to obscure options           | Tiny, gray "decline" link              |
| 2.1.9  | **Trick Questions**     | Confusing double-negatives                | "Uncheck to not receive newsletters"   |
| 2.1.10 | **Disguised Ads**       | Ads that look like content/navigation     | "Download" button that's an ad         |

#### 2.4 Obstruction Patterns

| Ref    | Pattern                         | Description                 | Example                          |
|--------|---------------------------------|-----------------------------|----------------------------------|
| 2.1.11 | **Roach Motel**                 | Easy in, hard out           | One-click signup, 12-step cancel |
| 2.1.12 | **Privacy Zuckering**           | Confusing privacy settings  | Default to maximum data sharing  |
| 2.1.13 | **Price Comparison Prevention** | Making comparison difficult | Complex, incomparable tiers      |

#### 2.5 Forced Action Patterns

| Ref    | Pattern                 | Description                           | Example                       |
|--------|-------------------------|---------------------------------------|-------------------------------|
| 2.1.14 | **Forced Registration** | Requiring account for basic functions | Login to view prices          |
| 2.1.15 | **Forced Continuity**   | Automatic paid conversion             | Trial to paid without warning |
| 2.1.16 | **Friend Spam**         | Requiring contact list access         | "Invite friends to continue"  |

#### 2.6 Emotional Manipulation Techniques

| Ref   | Technique            | Description                         | Psychological Exploit         |
|-------|----------------------|-------------------------------------|-------------------------------|
| 2.2.1 | **Fear Appeals**     | Scaring users into action           | "Your data is at risk!"       |
| 2.2.2 | **Guilt Induction**  | Making users feel bad for declining | "You'll miss out..."          |
| 2.2.3 | **Social Pressure**  | Implying others' judgment           | "Your friends already joined" |
| 2.2.4 | **Loss Framing**     | Emphasizing what you'll lose        | "Don't lose your progress!"   |
| 2.2.5 | **Authority Claims** | False expert endorsements           | "Recommended by 9/10 doctors" |

#### 2.7 Behavioral Reinforcement Patterns

| Ref   | Pattern                       | Description                                  | Example                                       |
|-------|-------------------------------|----------------------------------------------|-----------------------------------------------|
| 2.4.1 | **Variable Reward Schedules** | Unpredictable rewards to maximize engagement | Slot machine mechanics, loot boxes            |
| 2.4.2 | **Infinite Scroll**           | Eliminating natural stopping points          | Endless social media feeds                    |
| 2.4.3 | **Autoplay**                  | Automatic continuation without user action   | Next episode starts in 5 seconds              |
| 2.4.4 | **Notification Manipulation** | Strategic alerts to trigger re-engagement    | "You have unseen activity!" (nothing new)     |
| 2.4.5 | **Streak Mechanics**          | Punishing breaks in usage                    | "Don't lose your 30-day streak!"              |
| 2.4.6 | **Artificial Progress**       | Exploiting completion bias                   | Profile "87% complete" indefinitely           |
| 2.4.7 | **Pull-to-Refresh**           | Mimicking slot machine gestures              | Social feed refresh with variable new content |

---

**Note:** Some behavioral reinforcement techniques listed in section 2.4 are context-dependent rather than inherently
unethical. Variable reward schedules and streak mechanics, for example, can be harmful when used in gambling or
attention-harvesting applications, but serve positive purposes in educational software (motivating difficult learning
tasks), fitness apps (encouraging healthy habits), or therapeutic tools (reinforcing beneficial behaviors). The ethical
distinction lies in whether the technique serves the user's genuine interests or exploits psychological vulnerabilities
for the platform's benefit. See the evaluation criteria.

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

## Part II

### Article 1: Foundational Principles

**1.1 User Primacy**  
The interests of users shall be prioritized over short-term revenue extraction. Users are partners in our mission, not
resources to be exploited.

**1.2 Transparency**  
All material terms, limitations, and changes shall be communicated clearly and proactively. No information that would
affect a reasonable user's decision shall be hidden or obscured.

**1.3 Reversibility**  
Any action a user can take to engage with our service must be equally easy to reverse.

**1.4 Data Stewardship**  
User data is held in trust, not owned. Users retain ultimate control over their data and can export or delete it at any
time.

**1.5 Fair Value Exchange**  
Pricing changes must be justified by genuine value additions. Degradation of existing services to force upgrades is
____.

## Part III: Evolution & Amendment Process

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

This Open Ethics Standard represents a frameworks for building software that respects users as
partners rather than resources. By categorizing unethical practices explicitly and committing to specific standards, 
adopting organizations demonstrate that ethical business practices and commercial success are not mutually
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
