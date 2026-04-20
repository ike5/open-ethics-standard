# Data Brokers & Consumer Data Aggregation — Domain-Specific Ethics Standards

**Domain:** Data Brokers & Consumer Data Aggregation (Consumer Data Aggregators, Data Brokers, People-Search Services)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to data brokers and consumer data aggregation entities that collect, compile, and sell personal information. These largely invisible organizations construct detailed consumer profiles without knowledge or consent; unethical practices—invisible surveillance, selling data to enable discrimination, ignoring consumer rights, and concealing breaches—operate in shadows that erode autonomy, perpetuate harm, and evade accountability.

---

## Category 1: Collection

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DT-1.1 | **Scraping Without Consent**      | Systematically scraping public social media, forums, and websites to harvest personal information that individuals never intended to be aggregated or sold | Non-consensual surveillance; context violation |
| DT-1.2 | **Purchasing Data from Apps Without User Knowledge** | Buying user data from mobile apps, browser extensions, or connected devices where users are unaware their data is being sold to third-party brokers | Opaque data supply chain; consent laundering |
| DT-1.3 | **Combining Public Records into Invasive Profiles** | Merging disparate public records—court filings, property deeds, voter registrations—into comprehensive consumer profiles that far exceed what any single record reveals | Aggregation harm; privacy destruction through combination |
| DT-1.4 | **Inferring Sensitive Attributes** | Using algorithms to infer protected characteristics—health conditions, sexual orientation, political affiliation, religion—from behavioral data, then selling these inferences | Proxy discrimination; sensitive data exploitation |
| DT-1.5 | **Location Data Purchase and Aggregation** | Acquiring precise geolocation data from mobile apps and aggregating movement patterns to create detailed location profiles without user awareness | Location surveillance; movement privacy violation |

---

## Category 2: Accuracy

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DT-2.1 | **No Obligation to Correct Errors** | Operating with no legal or contractual obligation to verify or correct inaccurate data, allowing false information to persist and propagate | Reckless data handling; harm through inaccuracy |
| DT-2.2 | **Outdated Information Persistence** | Retaining and selling outdated data—old addresses, prior employers, stale financial indicators—long after it ceases to be accurate or relevant | Data rot; relevance deception          |
| DT-2.3 | **Mixed Identity Files**          | Conflating records of different individuals who share names or other identifiers, creating erroneous composite profiles that harm innocent people | Identity conflation; false attribution |
| DT-2.4 | **Failure to Verify Sourced Data** | Accepting data from upstream providers without verification, then propagating errors through the entire data supply chain without quality controls | Negligent sourcing; error amplification |
| DT-2.5 | **Scoring Without Validation**   | Generating consumer scores—credit, risk, reliability—using proprietary models without validating accuracy, transparency, or disparate impact | Opaque scoring; algorithmic bias       |

---

## Category 3: Sale & Use

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DT-3.1 | **Selling to Law Enforcement Without Warrants** | Providing personal data to law enforcement agencies without requiring a warrant or court order, enabling surveillance that bypasses constitutional protections | Enabling warrantless surveillance; due process circumvention |
| DT-3.2 | **Enabling Discrimination in Housing and Employment** | Selling consumer profiles that include inferred race, income, neighborhood, or other protected attributes used to discriminate in housing, employment, or credit decisions | Facilitating illegal discrimination    |
| DT-3.3 | **Political Targeting Without Disclosure** | Selling consumer segments for political micro-targeting without requiring disclosure of the data source, buyer identity, or targeting criteria | Democratic process manipulation; dark advertising |
| DT-3.4 | **Selling to Authoritarian Regimes** | Providing data, analytics, or scoring services to governments or entities in countries with documented human rights abuses | Complicity in repression; human rights endangerment |
| DT-3.5 | **Enabling Stalking and Harassment** | Selling people-search or location data products that facilitate stalking, domestic violence, or harassment without meaningful vetting of buyers | Enabling personal harm; buyer negligence |
| DT-3.6 | **Insurance Risk Profiling Without Consent** | Providing consumer lifestyle or behavioral data to insurance companies for risk scoring without the consumer's knowledge or consent | Unauthorized risk profiling; insurance discrimination |

---

## Category 4: Consumer Rights

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DT-4.1 | **No Meaningful Opt-Out**         | Making opt-out processes labyrinthine, requiring repeated requests, postal mail, or multiple form submissions that most consumers cannot complete | Right obstruction; consent bypass      |
| DT-4.2 | **Refusal to Show Consumers Their Profiles** | Declining to provide consumers access to the full profile held about them, including inferred attributes, scores, and data sources | Transparency violation; accountability avoidance |
| DT-4.3 | **Ignoring Deletion Requests**    | Failing to honor consumer deletion requests, or deleting from one product line while retaining data in others, then re-collecting deleted information | Right erosion; deletion circumvention |
| DT-4.4 | **Obscuring Data Sources**        | Refusing to disclose where consumer data originated, making it impossible for individuals to address the root cause of inaccurate or unwanted data collection | Source opacity; traceability denial    |
| DT-4.5 | **Opt-Out Expiration**            | Setting time limits on opt-out requests, automatically re-enrolling consumers in data collection after a period without renewed opt-out action | Consent expiration; consent fatigue exploitation |

---

## Category 5: Security

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| DT-5.1 | **Breach Concealment**            | Concealing or delaying disclosure of data breaches to avoid regulatory scrutiny, reputational damage, or civil liability | Concealment; endangering affected individuals |
| DT-5.2 | **Inadequate Encryption for Sensitive Data** | Storing or transmitting highly sensitive data—financial, health, location—without encryption at rest and in transit, exposing it to unauthorized access | Security negligence; data endangerment |
| DT-5.3 | **Insider Access Abuse**          | Allowing employees or contractors broad, unmonitored access to consumer data without need-to-know controls, leading to unauthorized lookups, data theft, or stalking | Access control failure; insider threat |
| DT-5.4 | **Lack of Breach Insurance for Data Subjects** | Carrying no financial provision or insurance to compensate data subjects harmed by breaches, leaving victims with no recourse for identity theft or other consequential harms | Victim abandonment; financial responsibility evasion |
| DT-5.5 | **Third-Party API Access Without Controls** | Providing bulk data access via APIs to downstream buyers without rate limiting, usage auditing, or purpose restrictions | Access negligence; downstream abuse enablement |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Obtain meaningful consent** — disclose all collection practices clearly, require affirmative consent before collecting or inferring sensitive attributes, and honor opt-out requests within 15 business days without expiration.
2. **Ensure data accuracy** — implement verification processes for sourced data, provide consumers access to their full profiles including inferred attributes, and correct errors within 10 business days of notification.
3. **Restrict harmful sales** — require warrants for law enforcement data access, refuse sales to entities in jurisdictions with documented human rights abuses, and prohibit sale of data that enables discrimination in housing, employment, or credit.
4. **Respect consumer rights** — provide a single, accessible opt-out mechanism, disclose all data sources upon request, and permanently delete consumer data upon verified deletion request.
5. **Secure held data** — encrypt all sensitive data at rest and in transit, implement strict need-to-know access controls with audit logging, notify affected individuals of breaches within 72 hours, and maintain breach insurance or equivalent compensation provisions.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
