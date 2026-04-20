# Internal Company Ethics — Domain-Specific Ethics Standards

**Domain:** Internal Company Ethics (Proprietary Software Practices, User Tracking, Employee Surveillance, Corporate Conduct)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to the internal ethical conduct of companies—particularly how they use proprietary software, internal tools, and corporate power to surveil, track, and manipulate users, employees, and business partners. A company's obligations do not end at the boundary of its product; the internal practices, tools, and infrastructure it builds and deploys carry equal ethical weight. Tracking users through proprietary software without their full knowledge, surveilling employees beyond what is necessary, and weaponizing internal data are fundamental betrayals of trust that this standard addresses.

---

## Category 1: User Tracking via Proprietary Software

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| IC-1.1 | **Covert Telemetry in Proprietary Software** | Embedding background data collection, usage analytics, or device fingerprinting in software that the user has no way to detect, disable, or opt out of | Secret surveillance of users         |
| IC-1.2 | **Shadow Profiling**              | Building detailed behavioral, interest, or demographic profiles from proprietary software usage data—including users who have never created an account—without disclosure | Data harvesting without consent       |
| IC-1.3 | **Telemetry Misrepresentation**    | Claiming telemetry is "anonymous," "de-identified," or "crash-only" when the data collected is sufficient to identify, re-identify, or track individuals across sessions or devices | Deceptive data practices              |
| IC-1.4 | **Opt-Out Friction**              | Burying tracking opt-outs in obscure settings, requiring enterprise admin privileges, resetting preferences after updates, or requiring account creation to disable collection | Undermining user autonomy             |
| IC-1.5 | **Cross-Product Data Fusion**     | Using proprietary software across multiple products (apps, OS, hardware) to merge user data into unified profiles without clear, product-specific consent | Unauthorized data aggregation        |
| IC-1.6 | **Phoning Home Without Purpose**  | Software that transmits data to company servers when no cloud service is required for the product's core functionality—treating user devices as data collection endpoints | Purposeless data extraction          |

---

## Category 2: Employee & Workplace Surveillance

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| IC-2.1 | **Keystroke & Screen Monitoring** | Deploying software that records keystrokes, screenshots, or screen contents of employee devices continuously or at random intervals without meaningful notice | Panoptic workplace surveillance      |
| IC-2.2 | **Behavioral Analytics on Staff**  | Using AI or algorithmic tools to analyze employee communication patterns, tone, sentiment, or social graph to score, rank, or flag workers | Algorithmic management overreach     |
| IC-2.3 | **Location Tracking Beyond Necessity** | Requiring employees to carry devices or install software that tracks their physical location outside of work hours, on personal time, or in private spaces | Location privacy violation           |
| IC-2.4 | **Productivity Scoring**          | Assigning employees numerical productivity scores based on mouse movement, app switching, idle time, or other reductive metrics, then using those scores for performance reviews, termination, or promotion | Reductive quantification of labor    |
| IC-2.5 | **Covert Recording of Meetings**  | Recording, transcribing, or analyzing internal meetings, calls, or video conferences without the clear, contemporaneous knowledge of all participants | Unauthorized surveillance of colleagues |
| IC-2.6 | **Personal Device Intrusion**     | Requiring employees to install tracking, MDM, or monitoring software on personally owned devices as a condition of employment, granting the employer visibility into personal data | Boundary violation between work and personal life |

---

## Category 3: Data Stewardship & Secondary Use

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| IC-3.1 | **Purpose Creep**                 | Collecting data for a stated purpose (e.g., "service improvement") then using it for unrelated internal purposes—ad targeting, employee evaluation, partner deals—without renewed consent | Scope violation; data misuse         |
| IC-3.2 | **Indefinite Data Retention**     | Storing proprietary software telemetry, user behavior data, or employee records indefinitely with no retention schedule or deletion mechanism | Data hoarding beyond necessity       |
| IC-3.3 | **Internal Data Sharing Without Boundaries** | Permitting unrestricted internal access to user data across teams, departments, or subsidiaries with no access controls, audit logs, or need-to-know justification | Unauthorized internal data access    |
| IC-3.4 | **Training AI on Private User Data** | Using proprietary software logs, customer communications, or user-generated content to train internal or commercial AI models without explicit consent | Repurposing private data for model training |
| IC-3.5 | **Dark Data Silos**               | Maintaining internal databases of user behavior, crash reports, or support interactions that are not disclosed in privacy policies and are used for competitive advantage rather than user benefit | Hidden data accumulation             |

---

## Category 4: Transparency, Consent & Corporate Honesty

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| IC-4.1 | **Bundled Consent**               | Requiring users to accept broad data collection, tracking, and analytics as a single all-or-nothing package rather than offering granular, independent choices | Manufactured consent                 |
| IC-4.2 | **Forced Arbitration Clauses**     | Inserting mandatory arbitration provisions in software terms that prevent users from pursuing legal action over data misuse, tracking, or surveillance | Denial of legal recourse             |
| IC-4.3 | **EULA Privacy Burial**           | Hiding data collection, tracking, or surveillance practices deep in end-user license agreements or terms of service that no reasonable person reads | Concealment through obscurity        |
| IC-4.4 | **Security-Veiled Surveillance**  | Justifying invasive tracking, monitoring, or data collection under the pretense of "security," "fraud prevention," or "integrity" when the primary purpose is behavioral analytics or profiling | Pretextual data collection           |
| IC-4.5 | **Misleading Transparency Reports** | Publishing transparency or data request reports that omit proprietary software telemetry, internal surveillance, or shadow profiling volumes | Selective disclosure; transparency theater |
| IC-4.6 | **Feature as Trojan Horse**       | Shipping useful features (cloud sync, AI assistants, "personalization") whose primary architectural purpose is to justify persistent tracking that would otherwise be unacceptable | Deceptive feature design             |

---

## Category 5: Internal Accountability & Whistleblower Protection

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| IC-5.1 | **NDAs Silencing Ethical Concerns** | Using non-disclosure agreements, separation agreements, or employment contracts to prevent employees from speaking publicly about unethical data practices, surveillance, or safety concerns | Suppressing ethical accountability   |
| IC-5.2 | **Whistleblower Retaliation**     | Demoting, terminating, blacklisting, or otherwise retaliating against employees who report unethical internal practices to regulators, the press, or internal ethics channels | Retaliation; chilling effect on accountability |
| IC-5.3 | **Ethics Theater**                | Establishing internal AI ethics boards, privacy councils, or review teams with no decision-making authority, whose recommendations are routinely overridden by product or revenue teams | Performative governance              |
| IC-5.4 | **Internal Report Suppression**   | Classifying internal security audits, privacy impact assessments, or ethical review findings as confidential to prevent public or regulatory scrutiny rather than legitimate security need | Concealing known harms               |
| IC-5.5 | **Conflict Mineral & Labor Opacity** | Failing to audit or disclose labor conditions, conflict mineral sourcing, or environmental impact in proprietary hardware or data center supply chains while claiming corporate responsibility | Supply chain accountability avoidance |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Disclose all tracking comprehensively** — enumerate every form of data collection in plain language; provide a single, accessible control panel for users to disable non-essential telemetry; honor global privacy controls.
2. **Establish proportional workplace monitoring** — limit employee surveillance to what is strictly necessary for security and legal compliance; prohibit keystroke logging, random screenshots, and off-hours location tracking; notify employees of any monitoring in real time.
3. **Enforce data purpose limitations** — bind every collected data point to a specific, disclosed purpose; prohibit secondary use without renewed, informed consent; delete data within defined retention windows.
4. **Protect internal accountability** — guarantee whistleblower protections that exceed minimum legal requirements; void NDAs that restrict reporting of unethical practices; empower ethics teams with veto authority over product launches.
5. **Audit proprietary software practices** — commission annual independent audits of telemetry, tracking, and data practices in all proprietary software; publish summary findings publicly; remediate all identified violations within 90 days.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
