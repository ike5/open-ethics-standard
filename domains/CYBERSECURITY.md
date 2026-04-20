# Cybersecurity — Domain-Specific Ethics Standards

**Domain:** Cybersecurity (Vendors, MSSPs, Consultants, Incident Responders)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to cybersecurity companies, managed security service providers, consultants, and incident response firms. Cybersecurity is a trust-dependent discipline where unethical practices exploit fear, leverage asymmetric information, and can directly harm organizations and individuals during their most vulnerable moments.

---

## Category 1: Vulnerability Disclosure

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| CY-1.1 | **Bug Bounty Underpayment**       | Offering disproportionately low rewards for critical vulnerabilities, exploiting researchers who lack bargaining power or face legal threats if they disclose elsewhere | Exploiting security researchers; discouraging responsible disclosure |
| CY-1.2 | **Delayed Patching**               | Acknowledging vulnerabilities but delaying patches for months or years due to commercial priorities, leaving users exposed in the interim | Negligent risk management; user endangerment |
| CY-1.3 | **Silent Patching Without Credit** | Fixing reported vulnerabilities in updates without crediting the researcher, changelog entry, or CVE assignment, erasing their contribution | Researcher erasure; attribution theft |
| CY-1.4 | **Legal Threats Against Researchers** | Using cease-and-desist letters, DMCA claims, or legal intimidation against researchers who discover and responsibly report vulnerabilities | Chilling security research; abuse of legal process |

---

## Category 2: Pricing & Contracts

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| CY-2.1 | **Fear-Based Upselling**          | Exaggerating threat landscapes, inventing risk scenarios, or presenting routine threats as existential dangers to sell premium services or expanded contracts | Exploiting fear; misleading risk assessment |
| CY-2.2 | **Ransomware Response Price Gouging** | Charging emergency or crisis premiums on incident response engagements when organizations are under active ransomware attack and cannot negotiate | Exploiting crisis; emergency profiteering |
| CY-2.3 | **Auto-Renewal Traps on Critical Services** | Burying auto-renewal clauses with steep price increases in security service contracts, relying on switching costs and organizational inertia to prevent cancellation | Contract entrapment; captive market exploitation |
| CY-2.4 | **Proprietary Format Lock-In**    | Delivering reports, assessments, or tool outputs in proprietary formats that cannot be easily migrated, creating artificial dependency | Data hostage-taking; competitive lock-in |

---

## Category 3: Data Practices

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| CY-3.1 | **Retaining Scanned Data Unnecessarily** | Keeping vulnerability scan results, network maps, and system configurations beyond the engagement period without client consent, building an intelligence archive | Data over-retention; scope creep    |
| CY-3.2 | **Sharing Breach Data with Insurers Without Consent** | Providing breach incident details, attack data, or security posture information to cyber insurance partners without client authorization | Consent violation; data sharing abuse |
| CY-3.3 | **Threat Intelligence From Questionable Sources** | Sourcing indicators of compromise, stolen credentials, or underground intelligence from illicit forums, data brokers, or state-affiliated actors without transparency | Ethical sourcing violation; opacity |
| CY-3.4 | **Client Data Cross-Pollination**  | Using data, configurations, or vulnerabilities discovered during one client engagement to benefit other clients or build products without the original client's knowledge | Conflict of interest; data misuse    |

---

## Category 4: Marketing

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| CY-4.1 | **Overstating Threat Levels**      | Publishing threat reports, attack statistics, or risk scores that exaggerate the prevalence or severity of threats to drive product sales | Fear amplification; market manipulation |
| CY-4.2 | **Fake Compliance Certification**  | Offering or promoting compliance certifications, badges, or attestation frameworks that require minimal verification, creating a false sense of security | Certification fraud; false assurance |
| CY-4.3 | **FUD Marketing**                  | Systematically using fear, uncertainty, and doubt in advertising, conference presentations, and sales materials rather than evidence-based risk communication | Manipulative marketing; trust erosion |
| CY-4.4 | **Competitor Disparagement**       | Publicizing competitor vulnerabilities or breaches as marketing opportunities rather than coordinated disclosure, using others' incidents as sales tools | Exploiting security incidents; professionalism failure |

---

## Category 5: Incident Response

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| CY-5.1 | **Conflict of Interest in Breach Investigation** | Providing both breach investigation and remediation services, creating incentive to inflate severity or recommend the investigator's own follow-on services | Conflict of interest; inflated scope  |
| CY-5.2 | **Breach Notification Delay**      | Withholding or delaying breach notification to affected individuals, regulators, or business partners to manage messaging, limit liability, or protect the client's reputation | Regulatory violation; individual harm |
| CY-5.3 | **Downplay Breach Severity**        | Minimizing the scope, data types, or number of affected individuals in public breach disclosures, providing technically accurate but materially misleading statements | Deceptive disclosure; trust violation |
| CY-5.4 | **Ransom Payment Facilitation Without Transparency** | Facilitating or recommending ransom payments without disclosing conflicts (such as commission relationships with ransom negotiation firms) or without exhausting alternative recovery options | Conflict of interest; transparency failure |
| CY-5.5 | **Evidence Spoliation**            | Failing to preserve digital evidence, altering logs, or reconstructing timelines in ways that prevent forensic verification or legal proceedings | Obstruction; accountability avoidance |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Respect researchers** — pay fair bug bounty rewards proportional to impact; credit researchers in changelogs and CVEs; commit to legal safe harbor for good-faith disclosure.
2. **Price transparently** — publish pricing frameworks; eliminate emergency premiums for incident response; provide clear auto-renewal terms with easy cancellation.
3. **Protect client data** — retain engagement data only for the contracted period; require explicit consent before any data sharing; disclose threat intelligence sourcing practices.
4. **Market honestly** — base threat reporting on verifiable data; cease FUD-based campaigns; do not exploit competitor breaches for commercial gain.
5. **Maintain incident integrity** — separate investigation and remediation roles; disclose breach scope honestly and promptly; declare conflicts of interest before ransom negotiation engagement.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
