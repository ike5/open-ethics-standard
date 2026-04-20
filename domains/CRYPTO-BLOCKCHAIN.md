# Cryptocurrency & Blockchain — Domain-Specific Ethics Standards

**Domain:** Cryptocurrency & Blockchain (Digital Assets, Decentralized Finance, Token Platforms, Exchanges)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to cryptocurrency exchanges, token issuers, DeFi protocols, and blockchain platforms. These entities operate at the intersection of finance, technology, and regulatory uncertainty; unethical practices—investor exploitation, market manipulation, environmental harm, and regulatory evasion—cause devastating financial losses, enable illicit finance, and erode the social license upon which the industry's legitimacy depends.

---

## Category 1: Investor Protection

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| KY-1.1 | **Pump-and-Dump Schemes**         | Coordinating the artificial inflation of token prices through misleading promotions, then selling holdings at the peak, leaving retail investors with worthless assets | Securities fraud; market manipulation |
| KY-1.2 | **Rug Pulls and Exit Scams**      | Abandoning projects after raising funds through token sales, draining liquidity pools, or disabling smart contract functionality while retaining investor capital | Fraud; theft of investor funds         |
| KY-1.3 | **Unregistered Securities Disguised as Utilities** | Marketing tokens as utility tokens to avoid securities registration while their primary value proposition is speculative appreciation dependent on the efforts of others | Regulatory evasion; investor deception |
| KY-1.4 | **Celebrity Endorsement Without Disclosure** | Paying influencers or celebrities to promote tokens without requiring disclosure of paid endorsement, exploiting parasocial trust for financial gain | Undisclosed promotion; trust exploitation |
| KY-1.5 | **Unrealistic Yield Promises**   | Marketing unsustainable yield rates—often funded by new deposits—without disclosing the Ponzi-like mechanics that make returns dependent on continuous capital inflow | Fraudulent inducement; yield deception |

---

## Category 2: Market Manipulation

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| KY-2.1 | **Wash Trading on Exchanges**     | Executing trades between controlled accounts to create artificial volume, misleading investors about market liquidity and demand | Market manipulation; volume fabrication |
| KY-2.2 | **Spoofing and Layering**         | Placing large orders with no intention of execution to create false impressions of supply or demand, then canceling before fill | Market manipulation; price distortion |
| KY-2.3 | **Stablecoin Reserve Opacity**    | Failing to provide timely, independently audited proof that stablecoin reserves match issuance, creating systemic risk of depegging and collapse | Reserve fraud; systemic risk concealment |
| KY-2.4 | **Exchange-Insider Front-Running** | Using advance knowledge of large incoming orders—visible on the exchange's internal systems—to execute profitable trades ahead of client execution | Front-running; fiduciary breach        |
| KY-2.5 | **Oracle Manipulation**           | Exploiting or tampering with price oracle data feeds to trigger liquidations or manipulate DeFi protocol outcomes | Data manipulation; protocol exploitation |

---

## Category 3: Environmental

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| KY-3.1 | **Proof-of-Work Energy Consumption Concealment** | Downplaying or obscuring the massive electricity consumption of proof-of-work networks, avoiding transparency about environmental footprint | Environmental deception; accountability avoidance |
| KY-3.2 | **Carbon Offset Greenwashing**    | Purchasing low-quality or unverifiable carbon offsets to claim carbon neutrality while the underlying energy consumption remains unchanged | Misleading environmental claims; greenwashing |
| KY-3.3 | **E-Waste from Mining Hardware**  | Generating enormous electronic waste through short-lived ASIC mining hardware without producer responsibility for recycling or disposal | Environmental neglect; e-waste externalization |
| KY-3.4 | **Renewable Energy Claim Without Additionality** | Claiming operations run on renewable energy while purchasing existing renewable credits rather than funding new renewable capacity | Non-additional greenwashing; grid displacement |

---

## Category 4: Consumer Access

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| KY-4.1 | **Complex Wallet UX Leading to Loss** | Designing wallet interfaces that are so complex or unforgiving that user errors—wrong network sends, lost seed phrases—result in permanent, irrecoverable loss of funds | Usability negligence; harm through design |
| KY-4.2 | **Irreversible Transaction Exploitation** | Exploiting the irreversibility of blockchain transactions to refuse refunds, reversals, or corrections even in cases of clear fraud, error, or theft | Consumer remedy denial; finality abuse |
| KY-4.3 | **DeFi Smart Contract Risk Opacity** | Offering yield or lending products without clearly disclosing smart contract risk—audit status, known vulnerabilities, historical exploits—or the possibility of total loss | Risk concealment; informed consent violation |
| KY-4.4 | **Recovery Impossibility for Lost Keys** | Providing no mechanism for account recovery when private keys or seed phrases are lost, resulting in permanent loss of assets with no escalation path | Consumer protection failure; zero-fault loss |
| KY-4.5 | **Phishing and Social Engineering Vulnerability** | Failing to implement protective measures against phishing, address poisoning, or social engineering attacks that exploit the irreversible nature of transactions | Security negligence; scam enablement    |

---

## Category 5: Regulatory

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| KY-5.1 | **Exchange Regulatory Arbitrage** | Operating from jurisdictions with minimal oversight specifically to avoid anti-money laundering, know-your-customer, and investor protection requirements | Regulatory evasion; jurisdiction shopping |
| KY-5.2 | **Mixing Service Facilitation of Money Laundering** | Operating or promoting mixing services that obscure transaction origins with minimal or no KYC, facilitating laundering of proceeds from crime | Money laundering enablement; illicit finance facilitation |
| KY-5.3 | **Anonymity Coin Promotion for Illicit Use** | Marketing privacy coins specifically for evading law enforcement surveillance or financial monitoring, rather than legitimate privacy protection | Illicit use promotion; law enforcement evasion |
| KY-5.4 | **Tax Reporting Evasion Facilitation** | Designing platforms to avoid generating or reporting taxable transaction data, explicitly facilitating user tax evasion | Tax evasion facilitation; regulatory subversion |
| KY-5.5 | **Sanctions Circumvention**      | Providing services to individuals, entities, or jurisdictions subject to international sanctions, exploiting the pseudonymous nature of blockchain to bypass compliance | Sanctions evasion; national security risk |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Protect investors** — register tokens appropriately, disclose all material risks including smart contract vulnerabilities, prohibit undisclosed paid promotions, and implement fraud detection for pump-and-dump patterns.
2. **Prevent market manipulation** — monitor for wash trading and spoofing, provide independent audits of stablecoin reserves quarterly, prohibit front-running of client orders, and maintain fair oracle integrity standards.
3. **Address environmental impact** — disclose energy consumption transparently, require additionality for renewable energy claims, and implement hardware recycling programs for mining equipment.
4. **Safeguard consumers** — design wallet interfaces with loss-prevention safeguards, provide clear risk disclosures for DeFi products, and offer dispute resolution pathways for clear cases of fraud or error.
5. **Comply with regulation** — maintain KYC and AML programs commensurate with risk, report taxable transaction data as required, enforce sanctions screening, and operate under jurisdictions with meaningful oversight.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
