# Open Ethics Standard (OES)

**A reference catalog of unethical software, technology, and business practices.**

**Version:** 2026.1.0
**Date:** May 2026

---

## About This Standard

The Open Ethics Standard (OES) is a structured, citable catalog of unethical
practices observed across software, technology, and consumer-facing
industries. It exists so that anyone — a journalist, a regulator, a customer,
an employee, a competitor, an analyst — can point to a specific behavior and
say, *"that practice has a name, a definition, and a number, and it is
listed in the Open Ethics Standard."*

The OES is **not**:

- a law or regulation,
- a certification or seal of approval,
- a compliance checklist,
- an enforcement program,
- a list of commitments a company is asked to make.

The OES **is** a shared vocabulary. Many harmful corporate behaviors persist
because they are difficult to name precisely. *"They tricked me into a
subscription"* is easier to dismiss than *"the cancellation flow violates
OES § 2.1.3 (Roach Motel Friction)."* Naming a practice is the first step in
holding it accountable, whether through public criticism, consumer choice,
investigative reporting, or eventual regulation.

The catalog draws on documented patterns of corporate malfeasance (including
the phenomenon of "enshittification" coined by Cory Doctorow), academic dark
pattern taxonomies, regulatory frameworks (GDPR, CCPA, FTC Act, COPPA,
Click-to-Cancel, ADA, Fair Housing Act, FCRA, FDCPA, OSHA, the FTC Funeral
Rule, EU Digital Services Act, and others), investigative journalism, and
the lived experiences of users, workers, and communities harmed by these
practices.

---

## How to Cite

Each practice has a unique identifier of the form `N.M.K` (category, then
subsection, then row). Cite as **OES § 4.10.1** or **Open Ethics Standard
§ 4.10.1**.

Examples:

> "The retention flow uses guilt-tripping language — see OES § 3.3.1
> (Confirmshaming)."

> "This company's ad targeting infers pregnancy from browsing behavior
> (OES § 4.7.2) and sells the inferred attribute to insurers (OES § 4.10.1)."

> "Multiple cross-cutting violations: OES § 1.1.4 (drip pricing),
> § 2.1.3 (roach motel friction), § 5.4.1 (hidden policies), § 9.5.2
> (inaccessible cancel flow)."

A reference to the OES does not assert legal liability — many cataloged
practices are perfectly legal in many jurisdictions. It asserts that the
behavior is recognizable, named, and documented as ethically harmful.

---

## How This Catalog Is Organized

The catalog has fifteen top-level categories. Within each category,
subsections group related practices, and each row describes one practice
in domain-agnostic language. An **Examples** column lists concrete
manifestations — the industries and contexts in which the practice has been
observed. The Examples column is illustrative, not exhaustive: most
practices recur in industries beyond those listed.

The fifteen categories are:

1. Pricing, Billing & Monetization Manipulation
2. Subscription, Contract & Lock-In Practices
3. Dark Patterns & Interface Manipulation
4. Data Collection, Privacy & Surveillance
5. Consent, Disclosure & Transparency Failures
6. Algorithmic & Automated-Decision Harms
7. Marketing, Advertising & Capability Misrepresentation
8. Service Quality, Safety & Recall Practices
9. Access, Equity & Discrimination
10. Exploitation of Vulnerable Populations
11. Worker, Labor & Workplace Conduct
12. Anti-Competitive Behavior & Market Power
13. Supply Chain & Sourcing Ethics
14. Environmental Conduct
15. Governance, Whistleblowing & Corporate Accountability

A **Quick Reference Index** of commonly cited practices appears after the
catalog, followed by a **Glossary**, a **Regulatory Reference**, and a
**Domain Index** mapping industries to relevant section numbers.

---

# Part I — Taxonomy of Unethical Practices

## 1. Pricing, Billing & Monetization Manipulation

### 1.1 Hidden Costs & Drip Pricing

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.1.1 | **Drip Pricing**                  | Advertising a base price while progressively revealing mandatory fees during checkout, so the final total far exceeds the price the user committed to.            | Airlines (baggage, seat fees), hotels (resort fees), event ticketing, e-commerce, travel     |
| 1.1.2 | **Hidden Mandatory Fees**         | Adding non-optional service, facility, processing, regulatory, or "amenity" fees not disclosed alongside the headline price.                                      | Hospitality, ride-hailing, telecom, fitness, real estate (junk fees), wedding planning       |
| 1.1.3 | **Sneak-into-Basket**             | Auto-adding items, insurance, warranties, donations, or services to a cart that the user must explicitly remove.                                                  | E-commerce, travel booking, ticketing, financial services                                    |
| 1.1.4 | **Hidden Surcharges & Stacking**  | Layering numerous small fees (fuel, residential, peak, accessorial) so the final invoice is opaque even to attentive customers.                                   | Shipping & freight, food delivery, logistics, waste management, energy utilities             |
| 1.1.5 | **Foreign Transaction Opacity**   | Burying currency-conversion markups or international fees in fine print rather than disclosing at point of sale.                                                  | Financial services, travel & tourism                                                         |
| 1.1.6 | **Dynamic-Currency Conversion Markup** | Offering on-the-fly currency conversion at unfavorable rates without disclosing the markup, so users unwittingly pay above-market exchange.                  | Travel & tourism, payment processing                                                         |

### 1.2 Surge & Crisis Pricing

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.2.1 | **Crisis-Period Price Gouging**   | Algorithmically raising prices on essential goods or services during emergencies, weather events, or supply shocks when consumers cannot defer purchase.          | Grocery, e-commerce, ride-hailing, food delivery, plumbing/home repair, pest control         |
| 1.2.2 | **Emergency-Markup Exploitation** | Charging premium rates for after-hours, urgent, or emergency service when the customer has no time to compare alternatives.                                       | Plumbing, automotive towing, veterinary, healthcare, funeral services, cybersecurity (ransomware response) |
| 1.2.3 | **Last-Minute Price Inflation**   | Raising prices dramatically as the deadline (travel date, event, deadline) approaches, exploiting urgency.                                                        | Travel, ticketing, gambling, betting                                                         |
| 1.2.4 | **Algorithmic Personalized Pricing** | Adjusting prices in real time based on browsing history, device, location, or perceived willingness to pay without disclosure.                                | Hospitality, e-commerce, ride-hailing, grocery, fashion, ticketing                           |
| 1.2.5 | **Tourist-Targeted Overcharging** | Charging higher prices to visibly identifiable visitors who lack local knowledge of fair prices, sometimes refusing meters or quoting opaque flat rates.          | Taxi services, retail in tourist zones, hospitality, currency exchange                       |

### 1.3 Bait-and-Switch Pricing

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.3.1 | **Bait Pricing**                    | Advertising a price or product that is unavailable, then steering the customer to a more expensive alternative.                                                   | Real estate, automotive sales, e-commerce, cleaning services, home services                  |
| 1.3.2 | **Yo-Yo Financing**                 | Letting a customer take possession after a sale, then claiming financing fell through to impose worse terms.                                                      | Automotive                                                                                   |
| 1.3.3 | **Underbid-and-Inflate**            | Submitting a low bid to win a contract, then recovering margin through change orders, "unforeseen conditions," or scope creep.                                    | Construction, home services, plumbing, consulting                                            |
| 1.3.4 | **Allowance Underspecification**    | Setting unrealistically low material or service allowances in a quote, knowing the customer will exceed them and pay the difference.                              | Construction, home services, wedding planning                                                |
| 1.3.5 | **Diagnostic-to-Repair Conversion** | Advertising free or low-cost diagnostics that convert into expensive repair commitments without re-quoting.                                                       | Plumbing, automotive repair, pest control                                                    |
| 1.3.6 | **Vendor Substitution**             | Replacing the contracted vendor or specified material with a lower-cost alternative while charging the original rate.                                             | Wedding planning, construction, dental (lab work), beauty (formulation)                      |
| 1.3.7 | **Renewal-Time Feature Downgrade**  | Removing or restricting features included in the prior term and offering them only at a higher tier upon renewal.                                                 | Cloud / SaaS, streaming, mobile carriers, fitness                                            |

### 1.4 Markup Concealment & Junk Fees

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.4.1 | **Material/Parts Markup Concealment** | Charging retail or inflated prices for materials, parts, or supplies while presenting prices as "at cost" or omitting markup disclosure.                       | Plumbing, home services, dental (lab work), veterinary, cleaning, automotive repair          |
| 1.4.2 | **Apprentice-at-Journeyman Rate** | Billing senior-level rates while assigning the work to junior, unqualified, or apprentice personnel.                                                              | Consulting, legal services, plumbing, accounting & auditing                                  |
| 1.4.3 | **Billable-Hour Inflation**       | Padding hours through unnecessary meetings, redundant research, or rounded entries.                                                                               | Consulting, legal services, accounting & auditing                                            |
| 1.4.4 | **Expense Padding**               | Inflating travel, accommodation, and operational expenses passed through to clients beyond actual cost.                                                           | Consulting, legal services                                                                   |
| 1.4.5 | **Flat-Rate Pricing Opacity**     | Quoting flat rates that vastly exceed the time-and-materials cost without disclosing the calculation, hiding effective hourly rates.                              | Plumbing, home services, automotive repair                                                   |
| 1.4.6 | **Mini-Bar / Incidentals Gouging** | Charging extreme markups (often 300–800%) on captive in-room or in-venue items, sometimes with sensor-based auto-billing for items merely moved.                 | Hotels, event venues, hospitality, pet industry (in-clinic prescriptions)                    |
| 1.4.7 | **Wedding/Occasion Tax**          | Charging more for identical services when labeled with a high-emotion event (wedding, funeral) than for an ordinary "event."                                      | Wedding planning, funeral services                                                           |
| 1.4.8 | **MSRP Inflation for Discount Illusion** | Setting artificially high "manufacturer suggested retail prices" so retailers can advertise large but illusory discounts.                                  | Home appliances, fashion, e-commerce                                                         |
| 1.4.9 | **Outlet-Store Deception**        | Manufacturing lower-quality goods specifically for outlet channels while implying they are excess or overstock from the main line.                                | Fashion & apparel                                                                            |
| 1.4.10 | **Captive-Venue Concession Markup** | Charging extreme markups on essential items (food, water, basic snacks) inside venues where consumers cannot leave and return, often selling commodity items at 5–10× retail. | Theme parks, sports stadiums, concert venues, cinemas, airports (post-security), cruise ships |
| 1.4.11 | **Outside-Food / Drink Prohibition** | Banning patrons from bringing essential items (water, food, baby formula) into a venue specifically to channel demand into overpriced concessions, sometimes confiscating items at entry. | Theme parks, sports stadiums, concert venues, cinemas                                        |
| 1.4.12 | **Cultural-Practice Pricing-Out** | Inflating prices on items central to a society's customary rituals (shared meals, gathering venues, holiday foods) well beyond cost basis, making the cultural practice economically inaccessible while continuing to market the venue or product as part of that ritual. | Restaurants (American social-eating culture), event venues, holiday-food retail, "third place" cafes |

### 1.5 Loyalty Penalty & Incumbency Pricing

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.5.1 | **Price Creep**                   | Gradual, repeated price increases above inflation, exploiting customer inertia and switching costs.                                                               | SaaS, streaming, insurance, mobile carriers, cleaning services                               |
| 1.5.2 | **Loyalty Penalty**               | Charging long-term customers more than new customers for identical coverage or service.                                                                           | Insurance, mobile carriers, energy utilities                                                 |
| 1.5.3 | **Teaser-Rate Trap**              | Offering low introductory pricing that escalates dramatically after the first renewal cycle.                                                                      | Insurance, mobile carriers, cosmetics (subscription), gym memberships                        |
| 1.5.4 | **Auto-Renewal Price Hike**       | Renewing a subscription at a higher price than the prior term without explicit consent or prominent advance notice.                                               | Cloud/SaaS, streaming, cybersecurity, fitness, dating, telecom                               |
| 1.5.5 | **Mile / Point Devaluation**      | Unilaterally reducing the value, redemption availability, or expiration window of accumulated loyalty points or miles.                                            | Airlines, hotels, retail loyalty programs, credit-card rewards                               |

### 1.6 Quantity & Quality Manipulation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.6.1 | **Shrinkflation**                 | Reducing product quantity, weight, or volume while keeping price (and often packaging) the same, without conspicuous disclosure.                                  | Grocery, food/beverage manufacturing, cosmetics, personal care                                |
| 1.6.2 | **Silent Quality Degradation**    | Reducing fabric weight, material grade, ingredient quality, or build standard while maintaining or increasing price without disclosure.                           | Fashion, food manufacturing, dental (material grade), home appliances                        |
| 1.6.3 | **Substitute Ingredient Swap**    | Quietly replacing a higher-quality ingredient with a cheaper alternative without updating packaging or notifying consumers.                                       | Food/beverage manufacturing, beauty, supplements                                              |
| 1.6.4 | **Unit-Price Manipulation**       | Displaying unit prices in inconsistent units (per ounce vs. per pound, per use vs. per package) so cross-product comparison is impractical.                       | Grocery, e-commerce                                                                          |
| 1.6.5 | **Serving-Size Manipulation**     | Defining unrealistically small serving sizes so per-serving nutritional or alcohol-content figures appear favorable.                                              | Food/beverage manufacturing, alcohol & spirits                                                |
| 1.6.6 | **Glazing / Weight-Padding**      | Over-glazing frozen products with ice or otherwise inflating sale weight beyond accepted limits.                                                                  | Seafood/fisheries, food retail                                                               |
| 1.6.7 | **Checkout-Scanner Discrepancy**  | Shelf and scanned prices disagree, consistently in the seller's favor.                                                                                            | Grocery, retail                                                                              |

### 1.7 Predatory Lending & Consumer Finance

| §     | Practice                              | Description                                                                                                                                                       | Example domains                                                                              |
|-------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.7.1 | **Overdraft Reordering**              | Processing transactions largest-first to maximize overdraft fees, cascading charges from small purchases.                                                         | Financial services                                                                           |
| 1.7.2 | **Payday-Loan / Refund-Advance Trap** | Offering short-term loans at effective APRs above 100–300%, designed for rollover rather than repayment, often disguised as "instant refunds."                    | Financial services, tax preparation                                                          |
| 1.7.3 | **Penalty-APR Weaponization**         | Applying penalty rates to entire balances after a single late payment, including new purchases.                                                                   | Financial services                                                                           |
| 1.7.4 | **Minimum-Payment Illusion**          | Displaying minimum payments prominently while burying total interest cost and time-to-payoff.                                                                     | Financial services, retail credit                                                            |
| 1.7.5 | **Negative-Equity Rolling**           | Rolling negative equity from a previous loan into a new loan without clearly disclosing the increased total obligation.                                           | Automotive                                                                                   |
| 1.7.6 | **Debt-Trap Lending**                 | Extending credit, leases, or input loans with terms designed to create perpetual financial dependency.                                                            | Agriculture (farmer debt), cannabis (grower lending), debt collection, prison commissary    |
| 1.7.7 | **Refund-Advance APR Concealment**    | Marketing refund anticipation loans as "instant refunds" while obscuring effective interest rates that often exceed 100% APR.                                     | Tax preparation                                                                              |
| 1.7.8 | **Pre-Need Investment Misrepresentation** | Marketing pre-paid funeral or cemetery products as appreciating financial investments rather than prepaid services.                                          | Funeral & death care                                                                         |
| 1.7.9 | **Payment-Plan Predatory Terms**      | Offering high-interest installment plans for essential expenditures without disclosing total interest paid.                                                       | Veterinary, dental, healthcare, mental health                                                |

### 1.8 Billing Errors & Unauthorized Charges

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.8.1 | **Bill Cramming**                   | Adding unauthorized charges — third-party services, premium SMS, mystery fees — to invoices without explicit consent.                                             | Telecom, utilities, hospitality                                                              |
| 1.8.2 | **Estimated-Billing Overcharge**    | Systematically estimating bills on the high side rather than from actual meter or usage data, requiring customers to identify and dispute.                        | Energy utilities, water utilities                                                            |
| 1.8.3 | **Damage-Claim Fabrication**        | Charging customers for pre-existing damage, normal wear, or fabricated incidents after departure without dispute opportunity.                                     | Hospitality, automotive (lease return), real estate (security deposits)                      |
| 1.8.4 | **Inactivity / Maintenance Drain**  | Charging maintenance or inactivity fees that slowly drain dormant accounts to zero.                                                                               | Financial services, gift cards, fashion (gift balances)                                      |
| 1.8.5 | **Zombie Subscription Charging**    | Continuing to bill after cancellation or account deletion by retaining payment tokens and citing "billing-cycle completion."                                      | Fitness, dating, cleaning services, cosmetics, financial services                            |
| 1.8.6 | **Coordination-of-Benefits Fraud**  | Billing multiple insurers for the full allowed amount rather than coordinating, resulting in overpayment or balance billing.                                      | Dental, healthcare                                                                           |
| 1.8.7 | **Insurance Code Upcoding**         | Coding procedures at higher reimbursement levels than clinically warranted to inflate insurance billing.                                                          | Healthcare, dental                                                                           |

### 1.9 Tipping Manipulation

| §     | Practice                                  | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1.9.1 | **Pre-Selected Default Tip Percentages**  | POS terminals defaulting to high tip percentages (often 18–30%), placing the no-tip option in a smaller, lower-contrast, or extra-tap location, or pre-highlighting the largest amount. | Counter-service food, retail, mobile POS systems, ride-hailing apps                          |
| 1.9.2 | **Tip Solicitation Outside Service Contexts** | Soliciting tips in transactions historically not tipped — self-checkout, take-out, retail, automated kiosks — exploiting social pressure and unfamiliarity to extract gratuities for services that involve no traditional service component. | Retail, self-checkout, automated kiosks, take-out food, airport concessions                  |
| 1.9.3 | **Tip-on-Tax / Tip-on-Pre-Discount Total** | Calculating suggested tip percentages on the tax-inclusive total or pre-discount price, inflating the displayed "suggested" amount above the cost of the underlying service.    | Restaurants, food delivery, hospitality                                                      |

---

## 2. Subscription, Contract & Lock-In Practices

### 2.1 Cancellation Friction (Roach Motel)

| §     | Practice                         | Description                                                                                                                                                       | Example domains                                                                              |
|-------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.1.1 | **Asymmetric Signup/Cancel**     | Allowing instant online signup while requiring phone calls, certified mail, or in-person visits to cancel.                                                        | Fitness/gyms, dating, gambling, cosmetics, cleaning, mental health, telecom                  |
| 2.1.2 | **Cancellation Maze**            | Designing multi-step cancellation flows with confusing portals, hidden links, or repeated confirmation steps.                                                     | Fitness, dating, mobile carriers, food delivery, streaming, dental insurance                 |
| 2.1.3 | **Retention Dark Patterns**      | Mandatory retention calls, guilt-tripping prompts, repeated "are you sure?" friction, or hidden cancel buttons that pressure users to stay.                       | Streaming, fitness, cybersecurity, mental health, news subscriptions                         |
| 2.1.4 | **Zombie Billing Post-Cancel**   | Continuing to charge after a cancellation has been requested, citing "processing periods" or "billing-cycle completion."                                          | Fitness, dating, cleaning, telecom                                                           |
| 2.1.5 | **Cooling-Off Period Removal**   | Eliminating any post-sale cancellation window even when the user has not yet used the service.                                                                    | Telecom, fitness, real estate (leases), wedding planning                                     |

### 2.2 Auto-Renewal Manipulation

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.2.1 | **Hidden Renewal**                  | Auto-renewing subscriptions or contracts without prominent advance notice, banking on user inattention.                                                           | Streaming, telecom, fitness, dating, supplements, pest control, waste management             |
| 2.2.2 | **Free-Trial Conversion Trap**      | Collecting payment information for "free" trials and silently converting to paid at the end of the trial without notification.                                    | Streaming, cosmetics, supplements, software, dating                                           |
| 2.2.3 | **Auto-Renewal with Escalation**    | Automatically renewing into a new long-term commitment at a higher price or expanded scope without affirmative consent.                                           | Cleaning services, waste management, fitness, telecom                                        |
| 2.2.4 | **Renewal Pressure Tactics**        | Using urgency, fear messaging, or artificial deadlines at renewal to upgrade or rebind.                                                                            | Insurance, cybersecurity, supplements                                                        |
| 2.2.5 | **Silent Coverage Erosion**         | Renewing policies or contracts with reduced coverage at the same or higher price without highlighting the changes.                                                | Insurance, cloud/SaaS, telecom                                                               |

### 2.3 Tier Degradation & Feature Gating

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.3.1 | **Tier Degradation**              | Moving features previously included in a tier to a higher-priced tier (or removing them altogether).                                                              | Streaming, SaaS, gaming, home appliances                                                     |
| 2.3.2 | **Feature Gating of Existing Hardware** | Software-disabling capabilities present in already-purchased hardware to justify a premium tier.                                                            | Home appliances, automotive (over-the-air feature removal), connected devices               |
| 2.3.3 | **Subscription Requirements for Core Functions** | Requiring ongoing payment for features that were one-time purchases or that cost nothing to deliver.                                                | Home appliances, automotive (heated seats subscription), gaming (always-online DRM)         |
| 2.3.4 | **Ad Injection into Paid Tiers**  | Adding advertising to previously ad-free tiers, then offering ad removal at a higher price.                                                                       | Streaming, gaming, smart-TV manufacturers                                                    |
| 2.3.5 | **Ad-Tier Bait-and-Switch**       | Introducing a low-cost ad-supported tier whose ad load progressively increases over time.                                                                         | Streaming, podcasting                                                                        |
| 2.3.6 | **Quality Throttling of Free Tier** | Deliberately degrading the free or low-tier experience to manufacture urgency for upgrade.                                                                      | Dating (match visibility), gaming, e-commerce search, social media reach                     |
| 2.3.7 | **Microtransaction Fatigue**      | Requiring per-action payments (super likes, boosts, premium reactions) that accumulate beyond the advertised subscription cost.                                   | Dating, gaming (loot boxes), social media                                                    |
| 2.3.8 | **Grind-or-Pay Design**           | Intentionally slowing free progression to push players or users toward paid shortcuts.                                                                            | Gaming, dating                                                                               |

### 2.4 Vendor Lock-In

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.4.1 | **Proprietary-Format Lock-In**    | Storing user data in proprietary formats with no documented open alternative, making migration prohibitively costly.                                              | Cloud/SaaS, healthcare (EHR), automotive (telematics), cybersecurity, music industry         |
| 2.4.2 | **Data-Export Obstruction**       | Imposing technical or bureaucratic obstacles — throttled exports, mandatory tickets, complex transformations — that make leaving impractical.                     | Cloud/SaaS, healthcare, freelance/gig platforms (portfolio export)                          |
| 2.4.3 | **Egress / Data-Out Fees**        | Setting data-export or transfer fees far exceeding actual cost, financially penalizing departure.                                                                 | Cloud infrastructure, telecom (number porting fees)                                          |
| 2.4.4 | **Punitive Early-Termination Fees** | Imposing exit penalties that exceed the cost of staying, including full remaining-contract payment.                                                             | Mobile carriers, cloud/SaaS, real estate, fitness, gym, waste management                     |
| 2.4.5 | **API Deprecation Without Migration** | Deprecating APIs critical to customer integrations without providing migration paths, replacements, or adequate notice.                                       | Cloud/SaaS, social media, payment platforms                                                  |
| 2.4.6 | **Ecosystem Identity Lock-In**    | Requiring use of the provider's identity, authentication, or management services across all products, making partial migration infeasible.                        | Cloud/SaaS, search engines, AI platforms                                                     |
| 2.4.7 | **Parts Pairing / Component DRM** | Using software locks or serialization that prevent third-party or self-installed parts from functioning even when physically compatible.                          | Automotive, home appliances, agriculture (tractors), medical devices                         |
| 2.4.8 | **Carrier Unlock Obstruction**    | Maintaining device locks beyond the contract period or imposing fees / bureaucracy to unlock paid-off devices.                                                    | Mobile carriers                                                                              |
| 2.4.9 | **Number Porting Obstruction**    | Delaying, gating, or routing number-port requests through retention pressure to discourage carrier switching.                                                     | Mobile carriers                                                                              |
| 2.4.10 | **Open-Source Bait-and-Switch**  | Building market position on open-source releases, then transitioning core capabilities to proprietary or closed licenses once dominant.                            | AI platforms, cloud/SaaS                                                                     |

### 2.5 Forced Bundling & Tying

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.5.1 | **Tying of Unwanted Products**    | Requiring purchase of unrelated products or services as a condition of obtaining the desired one.                                                                 | Insurance, financial services, e-commerce, agriculture (seed-herbicide bundling)            |
| 2.5.2 | **Mandatory Bundle Pricing**      | Offering only bundled packages that mix essential and optional items so individual costs cannot be compared.                                                      | Funeral services, wedding planning, event ticketing, cable/internet                          |
| 2.5.3 | **Bundle Obfuscation**            | Bundling multiple services so individual pricing and partial cancellation are obscured.                                                                           | Streaming, telecom                                                                           |
| 2.5.4 | **Cloud-Service Bundling**        | Bundling infrastructure, platform, and SaaS products to foreclose competitors of any single layer.                                                                | Cloud/SaaS                                                                                   |

### 2.6 Forced Arbitration & Class-Action Waivers

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.6.1 | **Mandatory Arbitration Clause**  | Requiring arbitration in EULAs, employment contracts, or service terms that strips users or workers of access to courts and class actions.                        | Financial services, gaming (EULAs), tobacco, internal company ethics, gig economy           |
| 2.6.2 | **Operator-Friendly Forum Selection** | Forcing arbitration in jurisdictions chosen for operator advantage, with short complaint windows and limited discovery.                                       | Gambling, mobile carriers, financial services                                                |
| 2.6.3 | **EULA Retroactive Modification** | Unilaterally changing EULAs or terms after purchase to reduce user rights or expand data collection.                                                              | Gaming, software, social media                                                               |

### 2.7 Contract Imbalance

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 2.7.1 | **Unilateral Contract Changes**   | Modifying agreement terms (commission, fees, scope) with minimal notice, forcing take-it-or-leave-it acceptance.                                                  | E-commerce platforms, food delivery, gig economy, app stores                                |
| 2.7.2 | **Force-Majeure Asymmetry**       | Drafting force-majeure clauses that protect the vendor but not the customer.                                                                                      | Wedding planning, event venues, hospitality                                                  |
| 2.7.3 | **Punitive Cancellation Penalty** | Imposing cancellation penalties disproportionate to actual lost revenue.                                                                                          | Wedding, hospitality, real estate, fitness                                                   |
| 2.7.4 | **Non-Refundable Trap**           | Defaulting to non-refundable bookings while making refundable options hard to find or significantly more expensive.                                               | Hospitality, travel, ticketing                                                               |
| 2.7.5 | **Concession Clawback**           | Offering "first month free" promotions whose cost is recovered through inflated base rent or fees over the lease term.                                            | Real estate                                                                                  |
| 2.7.6 | **Lien Threats**                  | Filing or threatening mechanic's liens to coerce payment for disputed or incomplete work.                                                                         | Construction, plumbing, home services                                                        |

---

## 3. Dark Patterns & Interface Manipulation

### 3.1 Sneaking Patterns

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.1.1 | **Hidden Costs at Checkout**      | Revealing fees only on the final step of checkout, after the user has invested time in the flow.                                                                  | E-commerce, hospitality, ticketing, food delivery                                            |
| 3.1.2 | **Sneak into Basket**             | Pre-selecting or auto-adding items, insurance, donations, or services to a cart.                                                                                  | E-commerce, travel, financial services                                                       |
| 3.1.3 | **Disguised Ads**                 | Designing ads to look like content, navigation, or organic recommendations.                                                                                       | Search engines, e-commerce, social media, news                                               |
| 3.1.4 | **Bait & Switch (Outcome)**       | Promising one outcome (free download, simple signup) and delivering a different one (subscription, account creation).                                             | Software, dating, e-commerce, fitness                                                        |

### 3.2 Urgency & Scarcity Patterns

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.2.1 | **Fake Countdown Timer**          | Displaying a countdown that resets, has no real consequence, or is decorative.                                                                                    | E-commerce, ticketing, education enrollment funnels                                          |
| 3.2.2 | **False Scarcity**                | Showing inventory levels ("only 2 left") or claims of scarcity ("limited release") that are fabricated or manufactured.                                           | Hospitality, e-commerce, ticketing, fashion                                                  |
| 3.2.3 | **Fake Social Proof**             | Showing "47 people viewing this" or similar figures that are randomized or fabricated.                                                                            | Hospitality, e-commerce, dating                                                              |
| 3.2.4 | **Manufactured Emotional Urgency** | Notifications like "Someone special is waiting" or "Your match expires soon" designed to provoke immediate action.                                              | Dating, gambling                                                                             |
| 3.2.5 | **In-Play Bet Time-Pressure**     | Countdown windows on in-play betting that rush bettors into rapid wagers without deliberation.                                                                    | Gambling                                                                                     |

### 3.3 Misdirection Patterns

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.3.1 | **Confirmshaming**                | Using guilt-inducing or self-deprecating language for the opt-out option ("No thanks, I don't want to save money").                                               | E-commerce, fitness, nonprofits, supplements                                                 |
| 3.3.2 | **Visual Interference**           | Using contrast, size, or position to obscure the option that disadvantages the platform (tiny gray "decline" links, prominent "Yes" buttons).                     | E-commerce, cookie banners, software installers                                              |
| 3.3.3 | **Trick Questions**               | Confusing double negatives or unclear toggle states ("Uncheck to not receive newsletters").                                                                       | E-commerce, account settings, advertising preferences                                        |
| 3.3.4 | **Pre-Checked Boxes**             | Defaulting to opt-in for marketing, data sharing, or ancillary purchases.                                                                                         | E-commerce, nonprofits, financial services, advertising                                      |

### 3.4 Obstruction Patterns

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.4.1 | **Roach Motel**                   | Easy entry, hard exit (see also § 2.1).                                                                                                                           | Subscriptions, gym memberships, dating, mental health, gambling                              |
| 3.4.2 | **Privacy Zuckering**             | Defaulting privacy controls to maximum data sharing and burying granular controls in obscure menus.                                                               | Social media, search engines, mobile OSes                                                    |
| 3.4.3 | **Price-Comparison Prevention**   | Designing tiers, features, or measurements so cross-product or cross-vendor comparison is impractical.                                                            | Telecom plans, insurance, energy tariffs, hospitality (resort fees)                          |
| 3.4.4 | **Cookie-Consent Dark Patterns**  | Pre-selected options, hidden reject buttons, confusing toggle UIs, or bury-the-decline patterns.                                                                  | Media/journalism, e-commerce, advertising                                                    |

### 3.5 Forced Action

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.5.1 | **Forced Registration**           | Requiring account creation for actions that don't need persistent identity (viewing prices, completing a one-time purchase).                                      | E-commerce, news/media, software downloads                                                   |
| 3.5.2 | **Forced Continuity**             | Automatic conversion of a free trial to paid without a clear pre-charge prompt.                                                                                   | Streaming, supplements, software                                                             |
| 3.5.3 | **Friend Spam / Contact Upload**  | Requiring contact-list access or social-graph permissions as a condition of basic functionality.                                                                  | Social media, productivity apps                                                              |
| 3.5.4 | **Forced Ad Targeting**           | Making personalized ad targeting a non-negotiable condition of using the service, even in paid tiers.                                                             | Social media, streaming                                                                      |
| 3.5.5 | **Aggressive In-Person Solicitation** | Verbal solicitation, shouting, harassment, or physical blocking of potential customers in transit hubs and tourist zones to coerce a transaction before they can compare alternatives. | Taxi services at airports/stations, timeshare reps, street vendors                            |

### 3.6 Behavioral Reinforcement

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.6.1 | **Variable Reward Scheduling**    | Unpredictable rewards (likes, matches, drops) tuned to maximize engagement, mirroring slot-machine mechanics.                                                     | Social media, dating, gaming, gambling                                                       |
| 3.6.2 | **Infinite Scroll**               | Eliminating natural stopping cues by paginating endlessly.                                                                                                        | Social media, news feeds, e-commerce                                                         |
| 3.6.3 | **Autoplay**                      | Auto-advancing to the next video, episode, or content item without user action.                                                                                   | Streaming, social media, gaming                                                              |
| 3.6.4 | **Notification Manipulation**     | Strategic alerts ("You have unseen activity!") designed to trigger re-engagement when nothing new is present.                                                     | Social media, dating, gambling                                                               |
| 3.6.5 | **Streak Mechanics**              | Punishing breaks in usage with public streak loss and reminders.                                                                                                  | Social media, fitness apps, language-learning                                                |
| 3.6.6 | **Artificial Progress Bars**      | Profile or task completeness indicators that exploit completion bias and never quite reach 100%.                                                                  | Social media, e-commerce loyalty, fitness                                                    |
| 3.6.7 | **Pull-to-Refresh as Slot Lever** | Gesture-based feed refresh that mimics slot-machine pulls with variable new content.                                                                              | Social media, news feeds                                                                     |
| 3.6.8 | **Loss-Disguised-as-Win Cues**    | Celebrating near-misses or partial returns with winning sounds, animations, or visual cues that neurologically mimic actual wins.                                | Gambling, gaming (loot boxes)                                                                |
| 3.6.9 | **Time-Distortion Design**        | Removing clocks, windows, or natural time cues to obscure session duration.                                                                                       | Gambling (casinos, apps), social media                                                       |

### 3.7 Emotional Manipulation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.7.1 | **Fear Appeals**                  | Marketing that exaggerates risks ("Your data is at risk!") to drive action.                                                                                       | Cybersecurity, supplements, baby products, insurance, pet industry, home services            |
| 3.7.2 | **Guilt Induction**               | Implying the user is letting someone down by declining ("You'll regret this," "Don't you care?").                                                                 | Nonprofits (fundraising), retail, dating                                                     |
| 3.7.3 | **Social-Pressure Framing**       | Implying social judgment ("Your friends already joined").                                                                                                         | Social media, e-commerce                                                                     |
| 3.7.4 | **Loss Framing**                  | Emphasizing what the user will lose ("Don't lose your progress!").                                                                                                | Subscription services, fitness, gaming                                                       |
| 3.7.5 | **False Authority Claims**        | Fabricated or unsubstantiated expert endorsements ("Recommended by 9/10 doctors").                                                                                | Supplements, beauty, food, dental                                                            |
| 3.7.6 | **Dignity-Language Exploitation** | Steering grieving or vulnerable customers toward expensive options through implied judgments about love, respect, or duty.                                        | Funeral services, senior care, wedding planning                                              |

### 3.8 Engagement-Addiction Optimization

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 3.8.1 | **Outrage Amplification**         | Algorithmically prioritizing anger-inducing or divisive content because it maximizes engagement.                                                                  | Social media, search/news, podcasting                                                        |
| 3.8.2 | **Polarization Optimization**     | Optimizing recommendations to reinforce existing beliefs and suppress cross-cutting perspectives.                                                                 | Social media                                                                                 |
| 3.8.3 | **Calm-Content Demotion**         | Down-ranking informational content that does not provoke strong emotional responses.                                                                              | Social media, search engines                                                                 |
| 3.8.4 | **Fringe-Content Amplification**  | Promoting extreme, conspiratorial, or sensational content because it generates longer sessions.                                                                   | Social media, streaming recommendations                                                      |
| 3.8.5 | **Self-Harm Content Clustering**  | Algorithmically recommending or clustering self-harm, eating-disorder, or suicide content to vulnerable users.                                                    | Social media                                                                                 |

---

## 4. Data Collection, Privacy & Surveillance

### 4.1 Over-Collection

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.1.1 | **Excessive Data Collection**       | Gathering more data than is necessary for the stated purpose.                                                                                                     | Cross-domain (mobile apps, automotive infotainment, smart appliances, fitness, gaming)       |
| 4.1.2 | **Purpose Creep**                   | Using data collected for one purpose ("service improvement") for unrelated purposes (ad targeting, employee evaluation, partner deals) without renewed consent.   | Internal company ethics, social media, telecom, healthcare                                   |
| 4.1.3 | **Cloud-Dependency Coercion**       | Requiring cloud connectivity for core product functionality so data collection becomes a precondition of operation.                                               | Home appliances, automotive, gaming                                                          |
| 4.1.4 | **Phoning Home Without Purpose**    | Software transmitting telemetry to company servers when no cloud feature is needed for the product to function.                                                   | Operating systems, productivity software, smart appliances                                   |
| 4.1.5 | **Infotainment / Synced-Phone Harvesting** | Collecting contacts, calendar entries, text messages, or media from a connected phone without clear disclosure.                                            | Automotive infotainment, smart TVs                                                           |

### 4.2 Shadow Profiling of Non-Users

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.2.1 | **Shadow Profiling**                | Building behavioral, demographic, or social-graph profiles of individuals who have never created accounts, via pixels, contact uploads, or third-party data.      | Social media, advertising, data brokers, internal company ethics                             |
| 4.2.2 | **Public-Records Aggregation Profiling** | Combining disparate public records — court filings, deeds, voter rolls — into invasive composite profiles.                                                  | Data brokers, credit reporting                                                               |
| 4.2.3 | **Inferred-Attribute Profiling**    | Using algorithms to infer protected or sensitive characteristics (health conditions, sexuality, religion, immigration status) from behavioral data.               | Data brokers, advertising, insurance                                                         |

### 4.3 Cross-Device & Cross-Platform Tracking

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.3.1 | **Cross-Site Tracking Without Consent** | Following users across sites and apps via tracking pixels, device graphs, or identifier sharing.                                                              | Digital advertising, social media                                                            |
| 4.3.2 | **Browser & Canvas Fingerprinting** | Using browser, canvas, or device fingerprinting to circumvent cookie restrictions and re-identify users who have cleared cookies.                                 | Digital advertising                                                                          |
| 4.3.3 | **Cross-Device Identity Stitching** | Linking activity across a user's phone, tablet, and desktop into unified profiles without explicit consent.                                                       | Digital advertising, search engines                                                          |
| 4.3.4 | **Cross-Product Data Fusion**       | Merging data across multiple products of the same vendor into unified profiles without product-specific consent.                                                  | Internal company ethics, large platforms                                                     |
| 4.3.5 | **Cross-Service Data Sharing**      | Using customer data from one service to benefit another service in the provider's portfolio without explicit consent.                                             | Cloud/SaaS, streaming, telecom                                                               |

### 4.4 Location Tracking Beyond Necessity

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.4.1 | **Background Location Tracking**    | Continuing to collect precise location when the app is closed or backgrounded, beyond what is needed.                                                             | Dating, ride-hailing, food delivery, social media                                            |
| 4.4.2 | **Vehicle Location Sale**           | Selling or sharing real-time or historical vehicle location data with data brokers.                                                                               | Automotive, ride-hailing                                                                     |
| 4.4.3 | **Logistics Recipient Tracking**    | Continuing to track delivery worker or recipient location after order completion.                                                                                 | Food delivery, ride-hailing, shipping/logistics                                              |
| 4.4.4 | **Visit-Frequency Profiling**       | Tracking physical-venue check-in frequency for behavioral profiling or targeted advertising.                                                                      | Fitness, retail, hospitality                                                                 |
| 4.4.5 | **Worker Off-Hours Location**       | Requiring devices or software that track employee location outside work hours or in private spaces.                                                               | Internal company ethics, gig economy                                                         |

### 4.5 Biometric Collection Without Consent

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.5.1 | **Biometric Boarding/Entry Coercion** | Defaulting to facial recognition, fingerprint, or iris scans for boarding or venue entry, with opt-out paths intentionally burdensome.                         | Airlines, ticketing/venues, government services                                              |
| 4.5.2 | **Always-On Microphone**            | Voice-activated features that retain microphone access without clear status indication or user control.                                                           | Home appliances, smart speakers, gaming                                                      |
| 4.5.3 | **Biometric Storage Beyond Verification** | Retaining identity documents, faceprints, or fingerprints beyond the verification event.                                                                    | Tobacco/vaping (age verification), financial onboarding, gambling                            |
| 4.5.4 | **Public-Space Biometric Surveillance** | Operating facial recognition in public space without informed, specific, revocable consent.                                                                   | Government, retail (loss prevention), transit                                                |
| 4.5.5 | **Wearable Biometric Sale**         | Collecting heart rate, body composition, recovery, or fitness assessment data and selling to insurers, employers, or brokers.                                     | Fitness, sports, healthcare wearables                                                        |

### 4.6 Worker / Workplace Surveillance

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.6.1 | **Keystroke / Screen Monitoring**   | Recording keystrokes, screenshots, or screen contents continuously or at random intervals without meaningful notice.                                              | Internal company ethics, surveillance technology, staffing/temp agencies                     |
| 4.6.2 | **Behavioral Analytics on Staff**   | Using AI to analyze employee communication patterns, tone, sentiment, or social graph to score, rank, or flag workers.                                            | Internal company ethics, HR                                                                  |
| 4.6.3 | **Productivity Score Quantification** | Assigning numerical scores based on mouse movement, idle time, or app switching, then using them in performance, termination, or promotion decisions.          | Internal company ethics, surveillance technology                                             |
| 4.6.4 | **Covert Meeting Recording**        | Recording, transcribing, or analyzing internal meetings or calls without the contemporaneous knowledge of all participants.                                       | Internal company ethics                                                                      |
| 4.6.5 | **Personal-Device MDM Intrusion**   | Requiring monitoring or MDM software on personally owned devices as a condition of employment.                                                                    | Internal company ethics                                                                      |
| 4.6.6 | **Union-Busting Surveillance**      | Tools or services designed to identify, track, or undermine labor organizing.                                                                                     | Surveillance technology                                                                      |
| 4.6.7 | **AI-Driven Worker Monitoring**     | Tracking keystrokes, bathroom breaks, movement, or productivity to create constant surveillance environments.                                                     | AI vendors, warehousing, call centers, ride-hailing, food delivery                            |

### 4.7 Sensitive-Attribute Inference

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.7.1 | **Mental-Health Inference for Targeting** | Inferring depression, anxiety, grief, or emotional vulnerability from posting patterns and using it for ad targeting or feature manipulation.               | Social media, advertising                                                                    |
| 4.7.2 | **Pregnancy / Health-Condition Inference** | Inferring pregnancy, chronic illness, or health condition from browsing behavior for targeting.                                                              | Digital advertising, retail, insurance                                                       |
| 4.7.3 | **Sexual-Orientation Inference / Disclosure** | Inferring or exposing sexual orientation through ad targeting or data sharing without explicit consent, creating outing risk.                            | Dating, social media, advertising                                                            |
| 4.7.4 | **Financial-Distress Inference**    | Identifying financially vulnerable users for predatory ad targeting (high-interest loans, debt-relief schemes).                                                   | Digital advertising, financial services                                                      |
| 4.7.5 | **Emotion-Recognition Pseudoscience** | Deploying affect-detection systems for hiring, security, or border control as if scientifically validated.                                                     | AI, HR/recruitment, government                                                               |

### 4.8 Children's Data Collection

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.8.1 | **Identifier Collection from Minors** | Collecting identifying information from users under 13 in violation of COPPA-equivalent rules.                                                                  | Baby/children's products, gaming, social media, podcasting (kids' content)                   |
| 4.8.2 | **Inadequate Age Verification**     | Using self-reported age with no verification, enabling minors to access age-restricted features.                                                                  | Social media, gambling, alcohol, tobacco/vaping, cannabis                                    |
| 4.8.3 | **Engagement-Maximizing Features for Minors** | Streaks, likes, infinite-scroll, push notifications targeted at or disproportionately affecting under-18 users.                                          | Social media, gaming                                                                         |
| 4.8.4 | **Educational-App Surveillance**    | Selling or sharing student learning data, engagement metrics, or personal information to third parties.                                                           | Education, EdTech                                                                            |
| 4.8.5 | **Childcare Behavioral-Data Sale**  | Selling developmental assessments, behavioral records, or learning data from childcare programs.                                                                  | Childcare/daycare                                                                            |
| 4.8.6 | **Smart-Monitor Infant Data**       | Collecting sleep patterns, vital signs, and movement from baby monitors beyond device function.                                                                   | Baby/children's products                                                                     |
| 4.8.7 | **AI-Proctoring Bias on Students**  | Requiring AI exam monitoring that flags students of color at higher rates and collects biometrics without safeguards.                                             | Education                                                                                    |

### 4.9 Indefinite Retention

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.9.1 | **Indefinite Personal-Data Retention** | Storing personal data beyond functional need, with no retention schedule or deletion mechanism.                                                                | Cross-domain (search engines, social media, government, telecom, retail)                     |
| 4.9.2 | **Post-Cancellation Data Retention** | Retaining customer data beyond contract termination without justification, sometimes contingent on additional fees for deletion.                                | Cloud/SaaS                                                                                   |
| 4.9.3 | **Crisis-Hotline Caller Retention** | Retaining caller data, transcripts, or metadata from crisis hotlines beyond the immediate crisis.                                                                 | Mental health                                                                                |
| 4.9.4 | **Background-Check Result Retention** | Conducting more extensive background or credit checks than required and retaining results indefinitely.                                                        | Staffing/temp, HR                                                                            |
| 4.9.5 | **Customs / Logistics Metadata Retention** | Retaining shipment, customs, or routing data beyond operational, legal, or service-required windows.                                                       | Logistics, shipping                                                                          |

### 4.10 Data Sale to Brokers / Third Parties

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.10.1 | **Data Sale to Brokers**           | Selling user, customer, patient, or worker data — including behavioral, demographic, and inferred attributes — to data brokers or downstream resellers.           | Cross-domain (healthcare, retail, telecom, social media, automotive, real estate, search, fitness, mental health, dating, education, music, entertainment, ride-hailing, food delivery, banking, advertising, dental, veterinary, alcohol, tobacco, supplements, prison, wedding, funeral, wedding, baby/children, senior care, firearms, etc.) |
| 4.10.2 | **Sensitive-Health Data Sale**     | Selling mental health, reproductive, addiction, or therapy session data — including AI chatbot conversations — to advertisers or third parties.                   | Mental health, pharma/biotech, dental, healthcare                                            |
| 4.10.3 | **Therapy-Conversation Harvesting** | Using AI mental health chatbot conversations for training, profiling, or sale without explicit consent.                                                          | Mental health, AI                                                                            |
| 4.10.4 | **Clinical-Trial Genetic Data Sale** | Selling or licensing genetic data collected from trial participants for secondary commercial use.                                                                | Pharma/biotech                                                                               |
| 4.10.5 | **Inmate Communication-Data Sale**  | Selling or sharing inmate call records, purchases, or location data — extending surveillance to family members.                                                  | Prison/corrections                                                                           |
| 4.10.6 | **Loyalty-Program Data Sale**       | Selling frequent-customer data — travel patterns, purchase histories, demographics — to insurers, marketers, or analytics firms.                                  | Airlines, hotels, retail, financial services                                                 |
| 4.10.7 | **Government-Agency Data Sale**     | Providing personal data to law enforcement without warrants, exploiting commercial channels to bypass constitutional protections.                                | Data brokers, surveillance technology                                                        |
| 4.10.8 | **Authoritarian-Regime Sales**      | Providing data, analytics, surveillance, or imagery to governments with documented human rights abuses.                                                           | Data brokers, AI, surveillance technology, space/aerospace (satellite imagery)               |

### 4.11 Smart-Device & IoT Harvesting

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.11.1 | **Smart-Appliance Surveillance**   | Gathering household composition, usage patterns, and behavioral data from connected appliances.                                                                   | Home appliances                                                                              |
| 4.11.2 | **Firmware-Update Data Tunneling** | Bundling new data collection or terms changes into mandatory security updates.                                                                                    | Home appliances, automotive, IoT                                                             |
| 4.11.3 | **Connected-Vape Data Harvesting** | Collecting puff frequency, duration, and location from smart vaping devices without meaningful consent.                                                           | Tobacco/vaping                                                                               |
| 4.11.4 | **Smart-Meter Granular Surveillance** | Collecting fine-grained energy or water usage data that reveals occupancy and appliance use, without governance.                                              | Energy utilities, water utilities                                                            |
| 4.11.5 | **In-Room IoT Surveillance**       | Using in-room cameras, smart-TV cameras, voice assistants, or sensor-based mini-bars in private spaces (hotels, rentals).                                         | Hospitality, real estate                                                                     |
| 4.11.6 | **Cross-Device Household Profiling** | Correlating data across multiple connected devices to build household behavioral profiles.                                                                     | Home appliances                                                                              |
| 4.11.7 | **In-Vehicle Telematics Sale**     | Using driving data — speed, braking, location — for insurance scoring or advertising without explicit opt-in.                                                     | Automotive, insurance                                                                        |

### 4.12 Breach Notification Failures

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.12.1 | **Breach Notification Delay**      | Delaying disclosure of data breaches beyond legally required timelines to manage PR or assess liability.                                                          | Cross-domain (financial services, cloud, credit reporting, telecom, data brokers, retail)    |
| 4.12.2 | **Breach Severity Downplaying**    | Minimizing the scope, data types, or number of affected individuals in public disclosures, providing technically accurate but materially misleading statements.   | Cybersecurity, healthcare                                                                    |
| 4.12.3 | **Breach Insurance Upselling**     | Using a breach event as an opportunity to sell identity-theft monitoring rather than improving baseline security.                                                 | Credit reporting, financial services                                                         |
| 4.12.4 | **Breach-Insurance Vacuum for Affected** | Carrying no provision or insurance to compensate data subjects harmed by breaches, leaving victims without recourse.                                        | Data brokers                                                                                 |

### 4.13 Insider & Access Abuse

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 4.13.1 | **Insider Access Without Need-to-Know** | Allowing broad, unmonitored employee or contractor access to consumer data, leading to unauthorized lookups, theft, or stalking.                            | Data brokers, technology platforms                                                           |
| 4.13.2 | **Inadequate Encryption of Sensitive Data** | Storing or transmitting financial, health, or location data without encryption at rest or in transit.                                                    | Data brokers, tax preparation                                                                |
| 4.13.3 | **Third-Party API Without Controls** | Exposing bulk data via APIs without rate limiting, usage auditing, or purpose restrictions.                                                                     | Data brokers, social media                                                                   |

---

## 5. Consent, Disclosure & Transparency Failures

### 5.1 Consent Manipulation

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 5.1.1 | **Bundled Consent**                 | Requiring users to accept broad data collection, tracking, and analytics as a single all-or-nothing package rather than granular choices.                         | Internal company ethics, social media, mobile apps                                            |
| 5.1.2 | **Coerced Consent**                 | "Accept or leave" ultimatums that make refusal impractical even when refusal should be a viable option.                                                           | Social media, telecom, healthcare (data sharing in treatment forms)                          |
| 5.1.3 | **Consent Fatigue**                 | Overwhelming users with repeated or fragmented consent requests so that meaningful choice degrades into reflexive acceptance.                                     | Cookie banners, mobile permissions                                                           |
| 5.1.4 | **Opt-Out Friction / Burial**       | Burying tracking opt-outs in obscure settings, requiring admin privileges, resetting preferences after updates, or requiring account creation to opt out.         | Internal company ethics, advertising, social media                                            |
| 5.1.5 | **Opt-Out Expiration**              | Setting time limits on opt-out requests, automatically re-enrolling consumers in data collection after a period.                                                  | Data brokers                                                                                 |
| 5.1.6 | **Coerced Wearable / Telematics Sharing** | Conditioning meaningful discounts on sharing of wearable, driving, or other behavioral data, penalizing privacy-conscious customers.                       | Insurance, automotive                                                                        |
| 5.1.7 | **Genetic Data Coercion**           | Using or requesting genetic testing data for underwriting decisions or as a condition of service.                                                                 | Insurance                                                                                    |

### 5.2 Disclosure Failures

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 5.2.1 | **Hidden Policies in Long Documents** | Burying material terms, data uses, or surveillance practices in long EULAs or terms of service.                                                                 | Internal company ethics, social media, software, gaming                                       |
| 5.2.2 | **Fragrance / Trade-Secret Loophole Abuse** | Using fragrance, formulation, or trade-secret labels to hide chemical identities from consumers.                                                          | Beauty, personal care, chemical manufacturing                                                |
| 5.2.3 | **Ingredient / Component Opacity**  | Listing additives, ingredients, or components under unfamiliar names or omitting them from packaging.                                                             | Food/beverage manufacturing, cannabis/CBD, supplements, alcohol, tobacco/vaping              |
| 5.2.4 | **Undisclosed Subprocessors**       | Engaging third-party subprocessors to access or process customer data without transparent disclosure or right to object.                                          | Cloud/SaaS, legal services                                                                   |
| 5.2.5 | **Undisclosed Offshore Processing** | Sending sensitive data (tax returns, medical records) to offshore operations without informing the user.                                                          | Tax preparation, healthcare                                                                  |
| 5.2.6 | **Conflict-of-Interest Concealment** | Failing to disclose financial interests, referral fees, kickbacks, or vendor relationships when recommending products or services.                              | Legal services, consulting, financial services, healthcare, accounting, wedding planning     |

### 5.3 Misleading Privacy Claims

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 5.3.1 | **Deceptive De-Identification Claims** | Claiming telemetry or shared data is "anonymous," "aggregated," or "crash-only" when it is sufficient to identify or re-identify individuals.                | Internal company ethics, healthcare                                                          |
| 5.3.2 | **Re-Identifiable Anonymized Sharing** | Sharing supposedly anonymized datasets that can be cross-referenced to re-identify subjects.                                                                  | Prison/corrections, healthcare                                                               |
| 5.3.3 | **Selective Transparency Reporting** | Publishing transparency or data-request reports that omit proprietary surveillance, internal monitoring, or shadow profiling volumes.                          | Internal company ethics, social media                                                        |
| 5.3.4 | **Security-Veiled Surveillance**    | Justifying invasive tracking under the pretense of "security," "fraud prevention," or "integrity" when the primary use is behavioral analytics.                  | Internal company ethics, financial services                                                  |

### 5.4 Algorithmic Decision Opacity

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 5.4.1 | **Black-Box Decisioning**           | Using AI-driven scoring for credit, insurance, hiring, or benefits decisions without disclosing factors or allowing appeal.                                       | Financial services, insurance, HR/recruitment, government                                    |
| 5.4.2 | **Adverse-Action Notice Inadequacy** | Providing vague adverse-action explanations that fail to identify the specific factor or report item that drove denial.                                         | Credit reporting, financial services                                                         |
| 5.4.3 | **Hidden Attractiveness / Desirability Scoring** | Assigning users internal desirability or risk scores based on observed behavior without disclosure.                                                  | Dating, gig economy, ride-hailing                                                            |
| 5.4.4 | **Score Opacity**                   | Providing a credit, risk, or behavioral score without explaining how specific behaviors affect it, preventing informed improvement.                               | Credit reporting, insurance, gig economy                                                     |

### 5.5 Misleading Authority Claims

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 5.5.1 | **Doctor-Endorsement Purchase**     | Paying licensed professionals to endorse products without disclosing the financial relationship.                                                                  | Supplements, beauty, pharma                                                                  |
| 5.5.2 | **Key-Opinion-Leader Capture**      | Cultivating and compensating influential physicians as de facto spokespeople while obscuring financial relationships.                                             | Pharma/biotech                                                                               |
| 5.5.3 | **Ghostwritten Studies**            | Commissioning ghostwritten clinical or review articles attributed to academic authors to lend credibility.                                                        | Pharma/biotech, supplements                                                                  |
| 5.5.4 | **Third-Party Endorsement Laundering** | Securing endorsements, certifications, or rankings from organizations the company funds or controls.                                                          | PR/marketing, supplements                                                                    |
| 5.5.5 | **Fake Compliance Certification**   | Offering or promoting compliance certifications, badges, or attestations that require minimal verification, creating false security signals.                      | Cybersecurity                                                                                |

---

## 6. Algorithmic & Automated-Decision Harms

### 6.1 Bias in Critical Decisions

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 6.1.1 | **Discriminatory Training Data**    | Building decision systems on historically biased datasets without auditing or mitigation, perpetuating discrimination in hiring, lending, or law enforcement.     | AI, HR/recruitment, credit reporting, insurance, healthcare                                  |
| 6.1.2 | **Proxy Discrimination**            | Using seemingly neutral inputs (ZIP code, occupation, shopping patterns) that correlate with race, income, or other protected attributes to set rates or scores.  | Insurance, credit reporting, financial services                                              |
| 6.1.3 | **Algorithmic Triage Bias**         | Deploying clinical AI tools trained on non-representative populations, producing disparate care allocation.                                                       | Healthcare, mental health                                                                    |
| 6.1.4 | **Predictive Policing Bias**        | Deploying crime-prediction systems trained on biased policing data, directing over-policing to already-targeted communities.                                      | AI, government, surveillance technology                                                      |
| 6.1.5 | **Therapist-Matching Bias**         | Algorithmic matching that systematically steers marginalized patients to less experienced or lower-rated providers.                                               | Mental health                                                                                |
| 6.1.6 | **Recommendation Pop-Bias**         | Recommendation systems that reinforce already-dominant artists, products, or content, suppressing emerging or underrepresented voices.                            | Music, podcasting, e-commerce                                                                |
| 6.1.7 | **Facial-Recognition Bias**         | Deploying facial recognition with documented demographic error disparities, leading to wrongful identification.                                                   | Surveillance technology, law enforcement                                                     |

### 6.2 Automated Termination & Deactivation

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 6.2.1 | **Algorithmic Deactivation Without Appeal** | Terminating or suspending worker accounts based on automated metrics (ratings, acceptance rates, fraud signals) without human review or meaningful appeal.  | Ride-hailing, food delivery, freelance/gig, e-commerce sellers                              |
| 6.2.2 | **Account Suspension Without Recourse** | Suspending seller, creator, or user accounts without transparent explanation or human review, freezing inventory or funds.                                    | E-commerce platforms, social media, podcasting                                               |
| 6.2.3 | **Debanking Without Transparency**  | Closing financial accounts based on internal risk models without specific reasons or remediation paths.                                                           | Financial services                                                                           |
| 6.2.4 | **Return-Fraud Algorithmic Banning** | Flagging or banning loyal customers for "return fraud" via opaque thresholds without human review or appeal.                                                    | E-commerce                                                                                   |

### 6.3 Algorithmic Wage & Earnings Manipulation

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 6.3.1 | **Algorithmic Pay Adjustment**      | Using opaque algorithms to adjust per-task pay based on predicted worker acceptance, systematically suppressing earnings.                                         | Ride-hailing, food delivery, freelance/gig                                                   |
| 6.3.2 | **Surge / Demand Capture**          | Implementing surge pricing where the platform captures a disproportionate share of the increase rather than passing it to workers.                                | Ride-hailing, freelance                                                                      |
| 6.3.3 | **Behavioral-Nudge Penalties**      | Designing penalty structures (acceptance rate, response time) that coerce workers into unsafe or undesirable conditions.                                          | Gig economy, ride-hailing, food delivery                                                     |
| 6.3.4 | **Opaque Worker Reliability Scores** | Internal performance/reliability scores that gate placement opportunities without disclosed criteria or appeal.                                                  | Staffing/temp, gig economy, freelance                                                        |

### 6.4 AI Misrepresentation

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 6.4.1 | **AI Capability Misrepresentation** | Marketing AI as more capable, reliable, or autonomous than evidence supports, including claiming general intelligence for narrow systems.                         | AI                                                                                           |
| 6.4.2 | **Benchmark Gaming**                | Optimizing models for public benchmarks while degrading real-world performance.                                                                                   | AI                                                                                           |
| 6.4.3 | **AI Hallucination Without Uncertainty Indicators** | Presenting AI-generated answers with unwarranted confidence even when fabricated, without indicators of uncertainty or verification.                  | AI, search engines                                                                           |
| 6.4.4 | **Synthetic-Data Provenance Fraud** | Training successive models on AI-generated outputs without disclosure, creating quality degradation while claiming improvements.                                  | AI                                                                                           |
| 6.4.5 | **Autonomy Marketing for Driver-Required Systems** | Marketing vehicles as "self-driving" while burying disclaimers requiring full driver attention.                                                       | Automotive                                                                                   |
| 6.4.6 | **AI Diagnostic Opacity**           | Deploying AI diagnostic tools without explainability or physician oversight in life-critical decisions.                                                           | Healthcare, mental health                                                                    |
| 6.4.7 | **Red-Teaming Avoidance**           | Releasing models without rigorous adversarial testing or with only superficial safety evaluations.                                                                | AI                                                                                           |
| 6.4.8 | **Emergency-Override Suppression**  | Building autonomous systems without kill switches, human override mechanisms, or fail-safe defaults.                                                              | AI, robotics, automotive                                                                     |

### 6.5 Algorithmic Content Suppression

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 6.5.1 | **Self-Preferencing on Owned Platforms** | Designing recommendation, search, or marketplace algorithms to prefer the platform's own products or content over superior third-party alternatives.       | Search engines, e-commerce, streaming, music, AI platforms                                  |
| 6.5.2 | **Competitor Content Suppression**  | Deliberately reducing visibility of content from competing services or platforms in organic results.                                                              | Search engines, social media                                                                 |
| 6.5.3 | **Pay-for-Visibility**              | Reducing organic reach to force creators or sellers into paid promotion or boosted posts.                                                                         | Social media, food delivery, e-commerce                                                      |
| 6.5.4 | **Engagement-Optimized Matching Over Compatibility** | Ranking matches, trades, or pairings to maximize platform engagement rather than user-stated goals.                                                  | Dating, job platforms                                                                        |

### 6.6 Algorithmic Governance Failures

| §     | Practice                            | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 6.6.1 | **Government Algorithm Opacity**    | Deploying automated systems for benefits, risk scoring, or policing without publishing decision logic, training data, or audit results.                           | Government services, surveillance technology                                                 |
| 6.6.2 | **Algorithmic Service Cuts Spiral** | Using ridership or usage data to justify cutting routes or service, creating a downward spiral of service and demand.                                             | Public transit, healthcare                                                                   |
| 6.6.3 | **Algorithmic Risk Scoring for Liberty** | Risk scores used in parole, sentencing, or classification based on biased or opaque models.                                                                  | Prison/corrections, government                                                               |

---

## 7. Marketing, Advertising & Capability Misrepresentation

### 7.1 Capability & Outcome Misrepresentation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.1.1 | **Outcome Misrepresentation**     | Advertising inflated job placement, success rates, or salary outcomes without disclosing methodology or sample bias.                                              | Education, legal services, fitness                                                           |
| 7.1.2 | **Coverage Map Overstatement**    | Publishing coverage maps based on aspirational rather than actual measurement data.                                                                               | Mobile carriers, internet service providers                                                  |
| 7.1.3 | **Service-Level Optimism**        | Marketing service speeds or reliability achievable only under ideal conditions that do not reflect typical experience.                                            | Mobile carriers, cloud/SaaS                                                                  |
| 7.1.4 | **Accreditation Ambiguity**       | Failing to clearly disclose accreditation status or presenting unaccredited programs as equivalent to accredited ones.                                            | Education                                                                                    |
| 7.1.5 | **Comparative-Advertising Inaccuracy** | Comparative claims about firm capabilities, results, or qualifications that are not verifiable.                                                              | Legal services, professional services                                                        |

### 7.2 Health & Safety Claim Misrepresentation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.2.1 | **Disease-Cure Claims Without Approval** | Marketing supplements, products, or services as treatments, cures, or preventatives without FDA-equivalent evidence.                                       | Supplements, cannabis/CBD, beauty, baby products                                              |
| 7.2.2 | **Structure-Function Stretching** | Exaggerating legitimate structure-function claims to imply disease treatment through implication, imagery, or context.                                            | Supplements, beauty                                                                          |
| 7.2.3 | **Reduced-Risk Without Authorization** | Marketing products as reduced-risk or modified-risk without regulatory authorization.                                                                        | Tobacco/vaping                                                                               |
| 7.2.4 | **Cessation / Quit Claims Without Evidence** | Implying products help users quit (smoking, drinking) without clinical evidence.                                                                       | Tobacco/vaping, supplements                                                                  |
| 7.2.5 | **Direct-to-Consumer Disease Awareness** | Running ads that medicalize normal conditions to drive demand for branded treatments.                                                                     | Pharma/biotech, healthcare                                                                   |
| 7.2.6 | **Pet Health Halo Claims**        | Unverified therapeutic or developmental claims on pet supplements, baby products, or food.                                                                        | Pet industry, baby/children's products, food                                                 |
| 7.2.7 | **Health Halo on Junk Food**      | Highlighting a single positive attribute ("whole grains," "no artificial flavors") on otherwise nutritionally poor products.                                      | Food/beverage manufacturing                                                                  |
| 7.2.8 | **Anti-Aging Fear Marketing**     | Positioning normal aging as a problem to be solved with fear-based messaging.                                                                                     | Beauty, cosmetics                                                                            |
| 7.2.9 | **Developmental-Milestone Claims** | Unsubstantiated claims that products accelerate cognitive or physical development in children.                                                                  | Baby products, education                                                                     |
| 7.2.10 | **Lifestyle Health Branding**    | Associating addictive products with fitness, wellness, or self-care to recast addiction as health.                                                                | Tobacco/vaping, alcohol                                                                      |

### 7.3 Greenwashing & Sustainability Misrepresentation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.3.1 | **Vague Eco Claims**              | Marketing products as "natural," "clean," "eco-friendly," "sustainable," or "non-toxic" without standardized definitions or verification.                          | Beauty, food, fashion, baby products, cleaning, personal care                                |
| 7.3.2 | **Carbon-Offset Greenwashing**    | Claiming carbon neutrality through low-quality, non-additional, or unverifiable offsets while absolute emissions continue to rise.                                | AI, crypto, airlines, oil/gas, logistics, shipping, travel                                   |
| 7.3.3 | **REC / Renewable Double-Counting** | Counting the same renewable certificates toward both regulatory compliance and voluntary customer claims.                                                       | Energy utilities, renewable energy, crypto                                                   |
| 7.3.4 | **Greenhouse-Pledge Without Plan** | Announcing distant net-zero or sustainability targets without interim milestones, accountability, or capital allocation.                                         | Renewable energy, oil/gas, food manufacturing                                                |
| 7.3.5 | **Deadstock Destruction**         | Incinerating or landfilling unsold inventory to protect brand prestige, while marketing sustainability.                                                           | Fashion, luxury goods                                                                        |
| 7.3.6 | **Recycling Program Greenwashing** | Promoting take-back, refill, or recycling programs that divert minimal waste while claiming environmental leadership.                                            | Beauty, home appliances, e-commerce, waste management                                        |
| 7.3.7 | **Process-Claim Inflation**       | Marketing as "artisanal," "small-batch," or "handcrafted" without defined standards or third-party verification.                                                  | Food, alcohol, beauty                                                                        |
| 7.3.8 | **Certification Logo Misuse**     | Displaying certifications (organic, non-GMO, humane, fair-trade) that have lapsed, are scoped narrowly, or come from shell certifiers.                            | Food, agriculture, beauty                                                                    |
| 7.3.9 | **Energy-Rating Manipulation**    | Configuring devices for testing conditions that do not reflect real-world energy consumption.                                                                     | Home appliances, automotive                                                                  |
| 7.3.10 | **Cruelty-Free Misrepresentation** | Using cruelty-free claims without independent verification, or selling in markets that require animal testing while claiming cruelty-free elsewhere.            | Beauty, personal care                                                                        |

### 7.4 Cause-Washing & Purpose-Washing

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.4.1 | **Purpose-Washing**               | Aligning brands with social causes through campaigns while core business practices contradict those values.                                                       | PR/marketing, fashion, food                                                                  |
| 7.4.2 | **Charity-Markup Capture**        | Marketing tickets or products with charity add-ons while directing the majority of inflated prices to platform or promoter fees.                                  | Event ticketing, e-commerce                                                                  |
| 7.4.3 | **Virtue Signaling Without Action** | Awareness campaigns or public commitments not backed by measurable, time-bound operational changes.                                                             | PR/marketing                                                                                 |
| 7.4.4 | **Selective Impact Reporting**    | Disclosing favorable sustainability or diversity metrics while withholding unfavorable ones.                                                                      | PR/marketing, nonprofits                                                                     |
| 7.4.5 | **Diversity Quota Theater**       | Implementing superficial diversity in background or minor roles while reserving lead and creative positions for dominant groups.                                  | Film/television, hiring                                                                      |
| 7.4.6 | **Savior-Complex Marketing**      | Portraying communities as helpless and the organization as sole rescuer rather than amplifying community agency.                                                  | Nonprofits                                                                                   |

### 7.5 Origin & Authenticity Fraud

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.5.1 | **Geographic-Origin Misrepresentation** | Implying products originate from a specific region, distillery, or tradition when they do not.                                                              | Alcohol, food, fashion, cannabis                                                              |
| 7.5.2 | **Wild-vs.-Farmed Misrepresentation** | Marketing farmed seafood as wild-caught to command price premiums.                                                                                            | Seafood/fisheries                                                                            |
| 7.5.3 | **Country-of-Origin Fraud**       | Falsifying country of origin to bypass tariffs, avoid health-inspection flags, or command premium pricing.                                                        | Seafood, fashion, food                                                                       |
| 7.5.4 | **Synthetic-as-Natural**          | Marketing synthetic or lab-derived products as "natural" or "full-spectrum."                                                                                      | Cannabis/CBD, beauty                                                                          |
| 7.5.5 | **Heritage Distortion at Tourist Sites** | Revising historical narratives at heritage sites to satisfy tourist expectations over accuracy.                                                              | Travel/tourism                                                                               |
| 7.5.6 | **Cultural Appropriation in Branding** | Co-opting traditional practices, designs, or aesthetics from marginalized communities without attribution, compensation, or collaboration.                  | Beauty, fashion, film/television, travel                                                     |

### 7.6 Astroturfing & Fake Reviews

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.6.1 | **Astroturfing**                  | Creating fake grassroots campaigns, front groups, or paid "independent" voices to simulate public support.                                                        | PR/marketing, lobbying                                                                       |
| 7.6.2 | **Fake-Review Generation**        | Coordinating, incentivizing, or fabricating reviews, testimonials, or endorsements.                                                                               | E-commerce, podcasting, mental health, dental, fitness                                       |
| 7.6.3 | **Review Suppression**            | Selective follow-up, review-gating, or legal threats to suppress negative reviews.                                                                                | Hospitality, dental, mental health                                                           |
| 7.6.4 | **Wash Trading / Volume Fabrication** | Executing trades between controlled accounts to create artificial volume on exchanges.                                                                       | Crypto, financial markets                                                                    |
| 7.6.5 | **Stream-Count Manipulation**     | Allowing or failing to detect inflated stream counts via bots or play farms that distort royalty pools.                                                           | Music industry                                                                               |
| 7.6.6 | **Ghost-Profile Inflation**       | Creating or maintaining fake user profiles to simulate platform activity and inflate match rates.                                                                  | Dating                                                                                       |

### 7.7 Undisclosed Sponsored Content

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.7.1 | **Undisclosed Influencer Promotion** | Paying influencers without requiring clear, FTC-compliant disclosure (#ad, #sponsored).                                                                        | Beauty, fashion, supplements, cannabis, alcohol, tobacco, gambling                            |
| 7.7.2 | **Native Ads Mimicking Editorial** | Producing advertising segments or articles that mimic editorial format without clear labeling.                                                                  | Podcasting, media/journalism                                                                 |
| 7.7.3 | **Host-Read Ad Disclosure Failure** | Failing to clearly distinguish host-read advertisements from organic editorial content.                                                                        | Podcasting, radio                                                                            |
| 7.7.4 | **Dynamic Ad Insertion Without Disclosure** | Inserting or replacing ads in archived episodes without disclosing that content has been altered.                                                       | Podcasting                                                                                   |
| 7.7.5 | **Sponsored Episode Concealment** | Producing entire episodes funded by a brand or interest group without disclosing the financial relationship.                                                      | Podcasting, media                                                                            |
| 7.7.6 | **Product Placement in Narrative Content** | Integrating branded products or messaging into narrative content without clear disclosure.                                                                | Film/television, gaming                                                                      |
| 7.7.7 | **Editorial Compromise from Advertiser Pressure** | Allowing advertiser, government, or owner pressure to influence content recommendations, visibility, or commissioning decisions.                       | Streaming, podcasting, media/journalism                                                      |
| 7.7.8 | **Paid Playlist Placement (Payola)** | Accepting payment or favors for playlist placement, editorial positioning, or algorithmic boosting without disclosure to listeners.                            | Music industry                                                                               |

### 7.8 Manipulative Imagery & Body Standards

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.8.1 | **Photoshopped Results Without Disclosure** | Displaying digitally altered before/after images or retouched model photography to exaggerate effectiveness.                                          | Beauty, cosmetics, fitness                                                                   |
| 7.8.2 | **Unrealistic Beauty Standards**  | Promoting unattainable appearance ideals through filters, editing, or selective casting.                                                                          | Beauty, fashion                                                                              |
| 7.8.3 | **Body-Shaming Hygiene Marketing** | Implying natural body features (odor, texture, appearance) are shameful and require correction.                                                                 | Personal care, hygiene products                                                              |
| 7.8.4 | **Survivor / Cherry-Picked Testimonials** | Showcasing only exceptional results while suppressing typical outcomes.                                                                                   | Fitness, supplements, education                                                              |

### 7.9 Political & Dark-Ad Practices

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.9.1 | **Dark Ads Without Public Archive** | Running political, issue, or commercial ads visible only to narrow audience segments with no public record of content or targeting.                            | Digital advertising                                                                          |
| 7.9.2 | **Political Ad Origin Concealment** | Allowing political ads to run without disclosing the true funder, using shell organizations to mask origin.                                                    | Digital advertising                                                                          |
| 7.9.3 | **Political Microtargeting Opacity** | Enabling granular political targeting without disclosing criteria, audience size, or demographic basis.                                                       | Digital advertising                                                                          |
| 7.9.4 | **Ad Library Inaccessibility**    | Maintaining ad transparency libraries that are incomplete, delayed, unsearchable, or omit targeting data.                                                         | Digital advertising                                                                          |
| 7.9.5 | **Psychographic Manipulation Targeting** | Using personality modeling to deliver messages designed to exploit individual psychological vulnerabilities.                                                | PR/marketing, advertising                                                                    |

### 7.10 Ad Fraud & Inventory Manipulation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.10.1 | **Bot-Traffic Selling**          | Selling impressions or clicks generated by bots, botnets, or scripts as if they represent genuine human audiences.                                                | Digital advertising, social media                                                            |
| 7.10.2 | **Made-for-Advertising Sites**   | Creating low-quality websites designed solely to generate ad revenue with no editorial value.                                                                     | Digital advertising                                                                          |
| 7.10.3 | **Viewability Manipulation**     | Stacked ads, auto-scroll, or 1×1 pixels that register impressions as "viewable" when never actually seen.                                                         | Digital advertising                                                                          |
| 7.10.4 | **Domain Spoofing**              | Misrepresenting the domain or app where an ad will appear, selling premium inventory that runs on low-value placements.                                           | Digital advertising                                                                          |
| 7.10.5 | **Attribution Fabrication**      | Manipulating last-click or view-through attribution to claim credit for conversions that occurred through other channels.                                         | Digital advertising                                                                          |

### 7.11 Vulnerability-Targeting Marketing

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 7.11.1 | **Targeting Self-Excluded Users** | Sending promotions, free bets, or outreach to individuals who have registered on self-exclusion lists.                                                            | Gambling                                                                                     |
| 7.11.2 | **Loss-Chasing Identification & Exploitation** | Identifying players who increase bets after losses and targeting them with reinforcement offers.                                                       | Gambling                                                                                     |
| 7.11.3 | **Mental-Health Distress Targeting** | Targeting users showing signs of depression, anxiety, or distress with predatory loans, gambling, or exploitative services.                                  | Digital advertising, financial services                                                      |
| 7.11.4 | **Vulnerable-Patient Symptom Upselling** | Online symptom assessments that invariably recommend the company's products regardless of symptoms.                                                       | Supplements, telehealth                                                                      |
| 7.11.5 | **Cessation-Sabotage Marketing** | Using data indicating a user is attempting to quit (smoking, gambling) to target them with re-engagement offers.                                                  | Tobacco/vaping, gambling                                                                     |

---

## 8. Service Quality, Safety & Recall Practices

### 8.1 Recall Delay & Safety Defect Concealment

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.1.1 | **Recall Delay**                  | Delaying recalls of known-defective products to avoid financial impact, even when defects are known to cause harm.                                                | Automotive, baby/children's products, firearms, food/beverage manufacturing, pet industry, pharma, home appliances |
| 8.1.2 | **Defect Concealment via Settlement** | Settling individual defect claims under NDA rather than issuing broader warnings.                                                                            | Automotive, consumer products                                                                |
| 8.1.3 | **Crash / Incident Data Opacity** | Collecting detailed safety data but not sharing it with safety researchers or regulators.                                                                         | Automotive, ride-hailing, airlines                                                           |
| 8.1.4 | **Emissions Defeat Devices**      | Using software or hardware to circumvent emissions or safety testing.                                                                                             | Automotive                                                                                   |
| 8.1.5 | **Sleep-Product Misrepresentation** | Marketing inclined sleepers, soft bedding, or bumper pads as safe despite contraindication from pediatric guidelines.                                            | Baby/children's products                                                                     |
| 8.1.6 | **Maintenance Deferral for Schedule** | Postponing required maintenance to preserve on-time performance metrics.                                                                                      | Airlines, public transit                                                                     |
| 8.1.7 | **Safety Defect NDA Settlement**  | Settling individual defect claims under NDAs that prevent broader public warnings.                                                                                | Automotive, healthcare, consumer products                                                    |
| 8.1.8 | **Test-Result Suppression**       | Suppressing internal test results that indicate safety failures (microbiological, chemical, contamination).                                                       | Food manufacturing, pharma, automotive, beauty                                               |

### 8.2 Planned Obsolescence

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.2.1 | **Limited-Lifespan Design**       | Engineering products with intentionally shortened lifespans through material or component choices.                                                                | Home appliances, electronics, consumer goods                                                 |
| 8.2.2 | **Software-Driven Slowdown**      | Withholding firmware updates or intentionally slowing devices via software to render hardware obsolete.                                                           | Home appliances, smartphones                                                                 |
| 8.2.3 | **Feature Removal via OTA**       | Remotely removing or degrading features the customer already purchased.                                                                                           | Automotive, smart appliances, gaming                                                         |
| 8.2.4 | **Cosmetic Redesign Obsolescence** | Releasing cosmetic updates that render accessories, cases, or peripherals incompatible.                                                                          | Home appliances, smartphones                                                                 |
| 8.2.5 | **Implantable / Critical-Device Lifespan Limits** | Designing implantable or critical devices with unnecessarily limited lifespans.                                                                       | Healthcare (medical devices)                                                                 |

### 8.3 Repair Restriction

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.3.1 | **Parts Pairing & Component DRM** | Software locks or serialization that prevent third-party or self-installed parts from functioning.                                                                | Automotive, home appliances, agriculture                                                     |
| 8.3.2 | **Schematic Withholding**         | Refusing to publish repair manuals, wiring diagrams, or service schematics.                                                                                       | Home appliances, automotive                                                                  |
| 8.3.3 | **Diagnostic Gatekeeping**        | Encrypting or restricting diagnostic codes / software to authorized technicians only.                                                                             | Automotive, home appliances                                                                  |
| 8.3.4 | **Specialized-Tool Requirements** | Designing products that require proprietary tools available only to authorized service providers.                                                                 | Home appliances, electronics                                                                 |
| 8.3.5 | **Void-if-Repaired Stickers**     | Labels falsely claiming warranties are voided by independent or self-repair.                                                                                      | Home appliances, electronics                                                                 |
| 8.3.6 | **Warranty Voiding by Association** | Threatening warranty voiding for any service performed outside the dealer network.                                                                              | Automotive                                                                                   |
| 8.3.7 | **Telematics Data Lock-In for Repair** | Restricting vehicle-generated diagnostic data to dealer networks.                                                                                            | Automotive                                                                                   |

### 8.4 Service Quality Throttling & Sunsetting

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.4.1 | **Sunsetting Without Refund**     | Shutting down online-only games or services and making purchased content permanently inaccessible without refund or offline mode.                                 | Gaming, IoT devices                                                                          |
| 8.4.2 | **Update Sabotage**               | Updates that slow or break older versions to force hardware purchases.                                                                                            | Home appliances, smartphones                                                                 |
| 8.4.3 | **Always-Online DRM**             | Requiring persistent internet connectivity for single-player or local-use products.                                                                               | Gaming, software                                                                             |
| 8.4.4 | **Anti-Cheat Kernel Access**      | Installing kernel-level anti-cheat with system-wide access to processes, files, and traffic.                                                                      | Gaming                                                                                       |
| 8.4.5 | **Deferred Infrastructure Maintenance** | Postponing track, signal, vehicle, or grid maintenance to balance budgets, increasing risk of outages or accidents.                                         | Public transit, energy utilities, water utilities                                            |
| 8.4.6 | **Safety Investment Deferment**   | Postponing infrastructure or operational safety upgrades to protect short-term financial returns.                                                                 | Energy utilities, mining, oil/gas                                                            |

### 8.5 Counterfeit & Substandard Materials

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.5.1 | **Substandard Material Substitution** | Replacing specified materials with cheaper alternatives without disclosure or engineering approval.                                                          | Construction, plumbing, dental, wedding planning, defense                                    |
| 8.5.2 | **Counterfeit Material Use**      | Installing counterfeit or uncertified building materials with falsified certifications.                                                                           | Construction, defense                                                                        |
| 8.5.3 | **Counterfeit Goods Tolerance**   | Failing to police third-party marketplace listings for counterfeits while profiting from fees and traffic.                                                        | E-commerce, fashion                                                                          |
| 8.5.4 | **Used-Part Installation as New** | Installing previously used, refurbished, or salvaged components while billing for new materials.                                                                  | Plumbing, automotive, dental                                                                 |
| 8.5.5 | **Lab Substitution Without Disclosure** | Using a different (often cheaper) dental laboratory or fabrication method than represented to the patient.                                                  | Dental                                                                                       |
| 8.5.6 | **Material Grade Downgrade**      | Placing lower-grade materials while billing for premium specifications.                                                                                           | Dental, jewelry, construction                                                                |

### 8.6 Contamination & Adulteration

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.6.1 | **Pesticide / Solvent Residue Concealment** | Selling products that fail residue standards by withholding test results or using unaccredited labs.                                                    | Cannabis/CBD, food manufacturing                                                              |
| 8.6.2 | **Heavy-Metal Contamination Concealment** | Distributing products contaminated with lead, arsenic, cadmium, or mercury without testing or disclosure.                                                | Cannabis/CBD, supplements, beauty, pharma                                                    |
| 8.6.3 | **Mold / Microbial Concealment**  | Failing to test for or disclose mold and microbial contamination.                                                                                                 | Cannabis, food, hospitality                                                                  |
| 8.6.4 | **Adulteration with Pharmaceuticals** | Adding active pharmaceutical ingredients to supplements without labeling.                                                                                     | Supplements                                                                                  |
| 8.6.5 | **Manufacturing Contamination Concealment** | Failing to promptly disclose manufacturing contamination or quality failures.                                                                              | Pharma/biotech, food manufacturing, beauty                                                   |
| 8.6.6 | **Allergen Cross-Contamination Concealment** | Failing to disclose shared facility or shared line allergen exposure despite known risk.                                                                  | Food manufacturing, grocery                                                                  |
| 8.6.7 | **Shelf-Life / Expiry Manipulation** | Extending stated shelf life beyond safety-supported windows or relabeling expired products.                                                                  | Food manufacturing, supplements, pet industry, alcohol, veterinary                            |
| 8.6.8 | **Cleaning Product Dilution / Substitution** | Using inferior or diluted products while charging for premium-grade supplies.                                                                            | Cleaning services                                                                            |

### 8.7 Inspection & Testing Evasion

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.7.1 | **Inspection Bribery**            | Offering payments, gifts, or favors to inspectors to overlook deficiencies.                                                                                       | Construction                                                                                 |
| 8.7.2 | **Lab Shopping for Favorable Results** | Sending products to multiple labs and selecting the most favorable certificate of analysis.                                                                  | Cannabis/CBD                                                                                 |
| 8.7.3 | **Code Compliance Shortcuts**     | Performing work that fails building or safety code, relying on overburdened inspectors or post-insulation concealment.                                            | Construction, plumbing                                                                       |
| 8.7.4 | **Inspection-Schedule Evasion**   | Using scheduling tactics, shell entities, or jurisdictional loopholes to evade inspections; providing advance notice that enables temporary compliance.            | Food manufacturing, prison/corrections, mining                                                |
| 8.7.5 | **Audit Theater**                 | Conducting pre-announced factory audits that allow temporary remediation, without follow-up.                                                                      | Fashion, food, beauty                                                                        |
| 8.7.6 | **Threshold Gaming**              | Formulating products to test just below regulatory contaminant or compositional limits.                                                                           | Food manufacturing, chemicals                                                                |

### 8.8 Refunds, Warranties & Returns

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.8.1 | **Return-Window Erosion**         | Shortening return windows or imposing arbitrary conditions (tags attached, original packaging) that defeat ordinary use.                                          | E-commerce, fashion                                                                          |
| 8.8.2 | **Restocking-Fee Abuse**          | Applying restocking fees to all returns regardless of condition, or inflating them beyond actual cost.                                                            | E-commerce                                                                                   |
| 8.8.3 | **Refund Delay Tactics**          | Delaying refunds through processing holds, repeated contacts, or store-credit substitution.                                                                       | E-commerce, food delivery, gaming                                                            |
| 8.8.4 | **Warranty-Claim Denial Patterns** | Vague warranty terms, narrow exclusions, or burdensome documentation that systematically deny valid claims.                                                     | Home appliances, plumbing, pet insurance, veterinary                                          |
| 8.8.5 | **Refund Gatekeeping in Software** | Imposing arbitrary play-time limits or opaque processes that prevent refunds for defective products.                                                            | Gaming                                                                                       |
| 8.8.6 | **Lost-Package Accountability Gaps** | Claim processes with short windows, burdensome proof, or liability caps that leave consumers uncompensated.                                                  | Logistics, shipping/freight                                                                  |

### 8.9 Crypto-Specific Irreversibility Harms

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 8.9.1 | **Wallet-UX Loss Through Negligent Design** | Wallet interfaces so unforgiving that ordinary user errors result in irrecoverable losses.                                                                | Crypto/blockchain                                                                            |
| 8.9.2 | **Irreversible-Transaction Refusal** | Refusing refunds, reversals, or corrections in cases of clear fraud, error, or theft, citing chain finality.                                                  | Crypto/blockchain                                                                            |
| 8.9.3 | **Smart-Contract Risk Opacity**   | Offering yield or lending products without disclosing audit status, known vulnerabilities, or possibility of total loss.                                          | Crypto/blockchain                                                                            |
| 8.9.4 | **Recovery Impossibility for Lost Keys** | No mechanism for account recovery when keys are lost, with no escalation path.                                                                              | Crypto/blockchain                                                                            |

---

## 9. Access, Equity & Discrimination

### 9.1 Service Desert Creation

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.1.1 | **Service Desert Creation**       | Consolidating facilities or service in affluent areas while withdrawing from rural, low-income, or minority areas.                                                | Healthcare, dental, veterinary, banking, grocery, telecom, mobile carriers, transit, government |
| 9.1.2 | **Insurance Redlining by Non-Renewal** | Systematically non-renewing policies in areas with higher claim rates, creating insurance deserts.                                                            | Insurance                                                                                    |
| 9.1.3 | **Last-Mile / Feeder Cuts**       | Discontinuing feeder routes and last-mile connections that complete trips for suburban or rural riders.                                                           | Public transit                                                                               |
| 9.1.4 | **Childcare Geographic Redlining** | Concentrating facilities in affluent areas while avoiding lower-income neighborhoods, creating childcare deserts.                                               | Childcare/daycare                                                                            |

### 9.2 Algorithmic Discrimination in Targeting & Decisioning

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.2.1 | **Digital Redlining**             | Using algorithms to show or hide listings based on neighborhood demographics.                                                                                     | Real estate, advertising                                                                     |
| 9.2.2 | **Steering**                      | Directing buyers or renters toward or away from neighborhoods based on protected-class characteristics.                                                            | Real estate                                                                                  |
| 9.2.3 | **Housing & Employment Ad Discrimination** | Allowing exclusion targeting (zip code, race proxy, income) on housing, credit, or employment ads.                                                          | Digital advertising, social media                                                            |
| 9.2.4 | **Reverse Redlining**             | Targeting minority neighborhoods for predatory loan products with unfavorable terms.                                                                              | Real estate, financial services                                                              |
| 9.2.5 | **Appraisal Manipulation**        | Systematically undervaluing properties in minority neighborhoods, depressing wealth-building.                                                                     | Real estate                                                                                  |

### 9.3 Source-of-Income & Demographic Discrimination

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.3.1 | **Source-of-Income Discrimination** | Refusing tenants or customers who use vouchers or subsidies despite ability to pay.                                                                            | Real estate                                                                                  |
| 9.3.2 | **Subsidy / Medicaid Refusal**    | Declining to accept government subsidy programs or creating administrative barriers for subsidized clients.                                                       | Childcare, dental, healthcare                                                                |
| 9.3.3 | **Funeral Pricing by Demographic** | Charging higher prices or providing inferior services based on race, ethnicity, neighborhood, or perceived class.                                                | Funeral & death care                                                                         |
| 9.3.4 | **Gendered Pricing**              | Pricing identical or substantially similar products differently based on gendered marketing or packaging.                                                         | Personal care, dating (subscriptions), fashion                                               |

### 9.4 Accessibility (ADA / WCAG) Failures

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.4.1 | **Digital Accessibility Failures** | Sites and apps that do not meet WCAG standards, preventing screen-reader, keyboard, or alternate-input use.                                                      | Education, streaming, podcasting, government, e-commerce, search                              |
| 9.4.2 | **Physical Accessibility Failures** | Failing to maintain elevators, ramps, or lift equipment for advertised routes; under-providing accessible seating.                                              | Public transit, ticketing/venues, sports                                                     |
| 9.4.3 | **Disability Accommodation Failure on Flights** | Damaged mobility aids, inadequate accommodations, or inconsistent service for passengers with disabilities.                                              | Airlines                                                                                     |
| 9.4.4 | **Accessibility Misrepresentation in Listings** | Advertising units as accessible that do not meet ADA or local accessibility codes.                                                                       | Real estate                                                                                  |
| 9.4.5 | **Captioning / Audio-Description Gaps** | Missing or delayed captions and audio descriptions; charging premium tiers for accessibility features.                                                       | Streaming, film/television, podcasting                                                       |
| 9.4.6 | **DRM Blocking Assistive Technology** | Applying DRM that prevents screen readers, text-to-speech, or accessibility tools from functioning.                                                          | Publishing, gaming                                                                           |
| 9.4.7 | **Wheelchair-Accessible Vehicle Delays** | Delaying compliance with accessibility requirements while claiming "innovation" flexibility.                                                                | Ride-hailing                                                                                 |

### 9.5 Language Access Barriers

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.5.1 | **Language Access Failures**      | Providing critical forms, notices, or services only in one language in multilingual communities.                                                                  | Government, public transit, water utilities, healthcare                                      |
| 9.5.2 | **Language-Barrier Exploitation in Tax Prep** | Inadequate multilingual support while charging premium prices for non-English speakers, or using complex English-only agreements.                       | Tax preparation                                                                              |
| 9.5.3 | **Boil-Notice Communication Gaps** | Issuing safety notices through channels that do not reach non-English speakers, elderly, or non-digital residents.                                              | Water utilities                                                                              |
| 9.5.4 | **Non-English Interpretation Absence in Legal Aid** | Failing to offer interpretation or translated materials, excluding non-English speakers from legal representation.                                  | Legal services                                                                               |

### 9.6 Administrative Burden as Exclusion

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.6.1 | **Means-Testing Complexity**      | Designing benefit applications with excessive documentation requirements that function as access barriers.                                                        | Government services, energy assistance, low-income utility programs                          |
| 9.6.2 | **Discount-Program Friction**     | Making reduced-fare or discount programs (seniors, students, low-income) difficult to apply for and maintain.                                                     | Public transit                                                                               |
| 9.6.3 | **Special-Needs Exclusion**       | Refusing enrollment or providing inadequate accommodations for children with disabilities or special needs.                                                       | Childcare, education                                                                         |
| 9.6.4 | **Schedule Rigidity**             | Requiring full-time enrollment without offering part-time or flexible schedules, excluding families that need partial care.                                       | Childcare, education                                                                         |
| 9.6.5 | **Pediatric Underinvestment**     | Allocating minimal appointment slots or inadequate staff for children, particularly under public insurance.                                                       | Dental, healthcare                                                                           |
| 9.6.6 | **Specialist-Referral Barriers**  | Failing to establish referral pathways for low-income patients beyond general-practice capability.                                                                | Dental, mental health                                                                        |

### 9.7 Cultural Appropriation & Disrespect

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.7.1 | **Cultural Appropriation in Branding** | Co-opting traditional practices, designs, or aesthetics from marginalized communities without attribution or compensation.                                  | Beauty, fashion, film/television, travel                                                     |
| 9.7.2 | **Religious Accommodation Failure** | Failing to accommodate religious, cultural, or spiritual practices in service delivery, or actively obstructing them.                                          | Funeral services, healthcare                                                                  |
| 9.7.3 | **Cultural-Practice Disrespect**  | Dismissing, ridiculing, or refusing to accommodate culturally specific mourning, body-preparation, or disposition preferences.                                    | Funeral & death care                                                                         |
| 9.7.4 | **Sacred-Site Tourism Without Consent** | Operating tours to indigenous or sacred sites without community permission or benefit sharing.                                                              | Travel/tourism                                                                               |
| 9.7.5 | **Cultural Commodification**      | Packaging sacred ceremonies, traditional dress, or rituals as entertainment for tourists.                                                                         | Travel/tourism                                                                               |
| 9.7.6 | **Indigent Burial Neglect**       | Providing minimal or disrespectful services for indigent or unclaimed remains.                                                                                    | Funeral & death care                                                                         |

### 9.8 Indigenous Rights Violations

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.8.1 | **FPIC Violation**                | Proceeding with extraction, infrastructure, or development on indigenous lands without free, prior, and informed consent.                                         | Mining, oil/gas, renewable energy                                                            |
| 9.8.2 | **Cultural Heritage Destruction** | Destroying or desecrating cultural and archaeological sites during extraction or development.                                                                     | Mining, construction                                                                         |
| 9.8.3 | **Forced Displacement**           | Acquiring land through coercion, inadequate compensation, or legal pressure to displace communities.                                                              | Oil/gas, mining, real estate, renewable energy                                                |
| 9.8.4 | **Community Benefit Agreement Failure** | Failing to deliver promised community investments, jobs, or infrastructure after project approval.                                                          | Renewable energy, oil/gas, mining, public transit, waste management                          |

### 9.9 Paywalling Public-Interest / Critical Information

| §     | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|-------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 9.9.1 | **Public-Interest Paywall**       | Placing critical reporting on emergencies, public health, or elections behind paywalls that block affected communities.                                           | Media/journalism, podcasting                                                                 |
| 9.9.2 | **Health-Emergency AI Paywalling** | Placing AI answers for health, legal, or emergency queries behind a paywall.                                                                                     | Search engines, AI assistants                                                                |
| 9.9.3 | **Taxpayer-Funded Research Paywall** | Charging exorbitant subscription fees for access to research funded by public grants.                                                                          | Academic publishing                                                                          |
| 9.9.4 | **Library Lending Restriction**   | Restrictive ebook licensing — checkout limits, per-use fees, or arbitrary expiration — that undermines libraries.                                                 | Publishing                                                                                   |

---

## 10. Exploitation of Vulnerable Populations

### 10.1 Predatory Targeting of Children & Minors

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.1.1 | **Marketing Addictive Products to Minors** | Designing flavors, mascots, packaging, or social-media campaigns that attract underage users to addictive or restricted products.                            | Tobacco/vaping, alcohol, cannabis (candy-style packaging), gambling                          |
| 10.1.2 | **Cartoon Characters on Unhealthy Food** | Using licensed characters or cartoons to market high-sugar, high-sodium, or low-nutrition products to children.                                              | Food/beverage manufacturing                                                                  |
| 10.1.3 | **Character Licensing on Unhealthy Products** | Using popular children's characters to market sugary foods, low-nutrition snacks, or excessive-screen-time apps.                                       | Food/beverage manufacturing, baby/children's products                                        |
| 10.1.4 | **In-App Purchase Targeting in Kids' Apps** | Designing children's apps with predatory microtransaction mechanics and manipulative UX.                                                                  | Baby/children's products, gaming                                                              |
| 10.1.5 | **Loot Boxes as Gambling Gateway** | Offering randomized purchasable rewards in gaming-adjacent products that mirror gambling without age verification or odds disclosure.                            | Gaming, gambling                                                                             |
| 10.1.6 | **Esports Betting Targeting Minors** | Marketing bets on events with youth-heavy audiences through influencer partnerships.                                                                         | Gambling                                                                                     |
| 10.1.7 | **Cartoon-Style Gambling Apps**   | Designing gambling-adjacent apps with cartoon aesthetics, bright colors, and gamified mechanics appealing to children.                                            | Gambling                                                                                     |
| 10.1.8 | **School-Sponsorship Product Placement** | Sponsoring school programs in exchange for product placement or exclusivity agreements.                                                                    | Food/beverage manufacturing                                                                  |
| 10.1.9 | **Reality-TV Minor Consent Gaps** | Featuring minors in reality television without adequate informed consent, oversight, or long-term psychological support.                                          | Film/television                                                                              |
| 10.1.10 | **Predator Contact Enablement**  | Designing discovery and messaging features that facilitate unsolicited contact between adults and minors.                                                          | Social media                                                                                 |
| 10.1.11 | **Toy & Premium Incentives**     | Including toys or collectibles with unhealthy meals to drive child demand.                                                                                        | Food/beverage manufacturing                                                                  |

### 10.2 Predatory Targeting of Financial Distress

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.2.1 | **Subprime / Distress Targeting** | Marketing high-interest or predatory financial products specifically to low-income, minority, or financially distressed communities.                              | Financial services, advertising                                                              |
| 10.2.2 | **Refund-Time Credit-Product Targeting** | Marketing refund advances or high-fee financial products at moments of maximum financial need.                                                              | Tax preparation                                                                              |
| 10.2.3 | **Financial-Product Targeting from Tax Returns** | Using tax-return data to target clients for high-interest loans, refund advances, or other financial products.                                          | Tax preparation                                                                              |
| 10.2.4 | **Family-Support Fee Extraction** | Imposing excessive fees on money transfers to incarcerated relatives.                                                                                             | Prison/corrections                                                                           |

### 10.3 Self-Exclusion Sabotage

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.3.1 | **VIP Programs for Problem Gamblers** | Extending VIP status, bonuses, and personalized hospitality to players whose loss patterns indicate addiction.                                                | Gambling                                                                                     |
| 10.3.2 | **Targeting Self-Excluded Users** | Sending promotions or outreach to individuals on self-exclusion lists.                                                                                            | Gambling                                                                                     |
| 10.3.3 | **Cessation-Sabotage Re-engagement** | Using data indicating a quit attempt to target users with re-engagement offers.                                                                               | Tobacco/vaping, gambling                                                                     |
| 10.3.4 | **Loyalty Programs for Addictive Products** | Rewards, points, or discounts for repeat purchases of addictive products.                                                                                  | Tobacco/vaping, alcohol, gambling                                                            |

### 10.4 Grief & End-of-Life Exploitation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.4.1 | **Upselling During Grief**        | Pressuring grieving families through implied judgments about love or respect for the deceased to upgrade caskets, vaults, or services.                            | Funeral & death care                                                                         |
| 10.4.2 | **Immediate-Need Premium Pricing** | Surge pricing or premium rates when families contact providers after a death.                                                                                   | Funeral & death care                                                                         |
| 10.4.3 | **Pre-Need Contract Opacity**     | Selling pre-need funeral contracts with unclear terms, hidden fees, and confusing cancellation.                                                                   | Funeral & death care                                                                         |
| 10.4.4 | **Grief-Counseling Upsell Data**  | Using information from vulnerable grief conversations to target additional sales or share with marketers.                                                         | Funeral & death care                                                                         |
| 10.4.5 | **Compassionate-Use Denial**      | Refusing expanded access for terminally ill patients with no treatment alternatives, particularly when safety data exists.                                        | Pharma/biotech                                                                               |

### 10.5 Senior & Cognitive Vulnerability

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.5.1 | **Level-of-Care Upselling**       | Reclassifying residents to higher care levels without corresponding service increases.                                                                            | Senior care/assisted living                                                                  |
| 10.5.2 | **Move-Out Cost Penalties**       | Excessive fees or forfeited deposits when residents transition to higher care or pass away.                                                                       | Senior care/assisted living                                                                  |
| 10.5.3 | **Cognitive-Assessment Data Misuse** | Using cognitive evaluations for marketing, insurance cross-selling, or level-of-care justification beyond care planning.                                       | Senior care                                                                                  |
| 10.5.4 | **Guardianship Overreach**        | Encouraging or facilitating guardianship arrangements that strip residents of decision-making autonomy beyond necessity.                                          | Senior care                                                                                  |
| 10.5.5 | **Communication Interception**    | Screening or restricting resident mail, phone calls, or digital communications.                                                                                   | Senior care, prison/corrections                                                              |
| 10.5.6 | **Visitor Restriction Without Justification** | Limiting family or advocate access without documented safety reasons.                                                                                       | Senior care                                                                                  |
| 10.5.7 | **Activity Restriction as Punishment** | Withholding activities, social engagement, or privileges as a behavioral management tool.                                                                    | Senior care                                                                                  |
| 10.5.8 | **Restraint Misuse**              | Using physical or chemical restraints beyond clinical necessity.                                                                                                  | Senior care                                                                                  |
| 10.5.9 | **Involuntary Discharge**         | Evicting residents without adequate notice, documented cause, or safe transition.                                                                                 | Senior care                                                                                  |

### 10.6 Crisis & Disaster Exploitation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.6.1 | **Disaster Price Gouging**        | Exploiting urgent situations (storm damage, water emergencies) to charge multiples of standard rates.                                                             | Plumbing, home services, ride-hailing, grocery                                               |
| 10.6.2 | **Ransomware Crisis Pricing**     | Charging emergency premiums on incident response when organizations are under active attack.                                                                      | Cybersecurity                                                                                |
| 10.6.3 | **Formula Pricing Exploitation**  | Increasing infant formula prices during shortages of medically necessary products.                                                                                | Baby/children's products                                                                     |
| 10.6.4 | **Surge Pricing on Essential Mobility** | Raising prices during natural disasters, mass shootings, or emergencies when people need transport.                                                          | Ride-hailing                                                                                 |
| 10.6.5 | **Surge Pricing on Essential Delivery** | Implementing dynamic delivery surges during storms, extreme heat, or emergencies when consumers most rely on delivery.                                       | Food delivery                                                                                |

### 10.7 Migrant & Visa-Dependent Coercion

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.7.1 | **Visa-Dependent Worker Coercion** | Recruiting workers under temporary visas with housing deductions, restricted mobility, or deportation threats if they complain.                                  | Hospitality, agriculture, travel/tourism, defense                                            |
| 10.7.2 | **Document Confiscation**         | Confiscating documents, charging recruitment fees, or imposing terms that leave workers indebted.                                                                 | Construction, agriculture, seafood                                                            |
| 10.7.3 | **H1-B Cost-Arbitrage Staffing**  | Structuring staffing around visa-dependent workers unable to negotiate or leave.                                                                                  | Consulting                                                                                   |
| 10.7.4 | **Undocumented Worker Threats**   | Employing undocumented workers at below-market wages with deportation threats if they report safety violations or wage theft.                                     | Construction, home services                                                                  |
| 10.7.5 | **Migrant Recruitment-Fee Brokering** | Hiring through labor brokers who charge fees, withhold wages, or impose contracts that create indebtedness.                                                  | Seafood, agriculture, construction                                                           |

### 10.8 Incarcerated Population Exploitation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.8.1 | **Inmate Communication Cost Gouging** | Charging far-above-market rates for phone, video, and messaging through exclusive provider contracts.                                                       | Prison/corrections                                                                           |
| 10.8.2 | **Commissary Price Inflation**    | Marking up essential goods (hygiene, food, clothing) above retail within facilities.                                                                              | Prison/corrections                                                                           |
| 10.8.3 | **Forced Labor Below Minimum Wage** | Assigning incarcerated workers to jobs paying far below minimum wage under threat of disciplinary action.                                                      | Prison/corrections                                                                           |
| 10.8.4 | **Inmate Medical Care Denial**    | Systematically understaffing medical units, delaying treatment, or denying specialist referrals.                                                                  | Prison/corrections                                                                           |
| 10.8.5 | **Inmate Medication Cost Inflation** | Charging above-market prices for prescriptions or substituting cheaper medications without clinical equivalence.                                              | Prison/corrections                                                                           |
| 10.8.6 | **Family Location Tracking via Inmate Metadata** | Using communication metadata to surveil, locate, or profile family members outside the facility.                                                       | Prison/corrections                                                                           |

### 10.9 Domestic-Violence Survivor Endangerment

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.9.1 | **Inadequate DV Survivor Protections** | Failing to offer profile hiding, location masking, or block-list portability for users fleeing abusers.                                                     | Dating, social media                                                                         |
| 10.9.2 | **Image-Abuse Enablement**        | Allowing screenshots, scraping, or unencrypted message storage that enables revenge porn or harassment.                                                           | Dating, social media                                                                         |

### 10.10 Patient Vulnerability During Treatment

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.10.1 | **Subscription Dark Patterns During Crisis** | Using difficult cancellation flows or retention prompts when users are in acute distress.                                                                | Mental health                                                                                |
| 10.10.2 | **Waitlist Exploitation for Premium Tiers** | Creating artificially long waitlists for standard service while offering immediate paid access.                                                            | Mental health                                                                                |
| 10.10.3 | **Therapist-Non-Compete Patient Disruption** | Enforcing non-competes that prevent continuity of therapy after a clinician leaves a platform.                                                            | Mental health                                                                                |
| 10.10.4 | **Crisis Response Failure**       | Failing to maintain adequate crisis protocols, response times, or escalation pathways for suicidal ideation.                                                      | Mental health                                                                                |
| 10.10.5 | **Patient Targeting via Treatment Data** | Sharing detailed treatment plans and financial assessments with healthcare credit companies for financing-product targeting.                              | Dental                                                                                       |
| 10.10.6 | **Vulnerable-Population Trial Recruitment** | Conducting trials in populations with limited capacity for informed consent or limited access to alternative care.                                       | Pharma/biotech                                                                               |
| 10.10.7 | **Placebo Use Where Effective Treatment Exists** | Using placebo controls when established effective treatment exists, exposing participants to unnecessary risk.                                       | Pharma/biotech                                                                               |
| 10.10.8 | **Genetic Counseling Data Exploitation** | Using or licensing genetic data for secondary commercial use without explicit consent.                                                                    | Pharma/biotech                                                                               |

### 10.11 Pet-Owner & Family Exploitation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 10.11.1 | **Veterinary Emergency Care Upcharging** | Inflated pricing tiers during after-hours or emergencies when owners have no alternative.                                                                | Veterinary, pet industry                                                                     |
| 10.11.2 | **Wellness-Plan Pressure**        | Bundling unnecessary services into prepaid wellness plans marketed as savings.                                                                                    | Veterinary                                                                                   |
| 10.11.3 | **Anthropomorphic Marketing for Inappropriate Products** | Using emotional bonds to sell products unsuited to animal needs (costumes, low-nutrition treats).                                                  | Pet industry                                                                                  |
| 10.11.4 | **Economic Euthanasia Pressure**  | Refusing payment plans for low-income clients, forcing euthanasia decisions financially.                                                                          | Veterinary                                                                                   |
| 10.11.5 | **Late Pick-Up Penalty Exploitation** | Disproportionate penalties for minor lateness in childcare without clear prior agreement.                                                                    | Childcare                                                                                    |
| 10.11.6 | **Deposit & Withdrawal Penalties** | Large non-refundable deposits or excessive notice-period penalties that trap families financially.                                                              | Childcare                                                                                    |

---

## 11. Worker, Labor & Workplace Conduct

### 11.1 Worker Misclassification

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.1.1 | **Forced Contractor Status**      | Classifying workers as independent contractors when the role meets the legal definition of employment.                                                            | Ride-hailing, food delivery, gig economy, cleaning, construction, plumbing, home services, logistics, gaming, oil/gas, waste management, wedding |
| 11.1.2 | **Permanent-Temp Classification** | Assigning workers to indefinite temporary or contract status to avoid benefits and protections.                                                                   | Staffing/temp agencies, gaming                                                                |
| 11.1.3 | **Perma-Lancer Loops**            | Cycling workers through successive contract terms or agencies to prevent conversion to permanent.                                                                  | Staffing/temp                                                                                |
| 11.1.4 | **Misclassification Feedback Loop** | Using industry-wide misclassification as a benchmark, pressuring competitors to follow.                                                                         | Gig economy                                                                                  |
| 11.1.5 | **Buyout-Fee Suppression**        | Setting prohibitively high temp-to-perm conversion fees to discourage clients from hiring directly.                                                               | Staffing/temp                                                                                |

### 11.2 Wage Theft

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.2.1 | **Off-the-Clock Work**            | Requiring setup, travel, or cleanup tasks without pay.                                                                                                            | Cleaning, construction, plumbing, retail                                                     |
| 11.2.2 | **Tip Appropriation**             | Redirecting customer tips to base pay or platform fees rather than passing them to workers.                                                                       | Food delivery, ride-hailing, hospitality                                                     |
| 11.2.3 | **Tip Withholding**               | Collecting mandatory gratuities from clients but not distributing full amounts to staff.                                                                          | Wedding planning, hospitality                                                                |
| 11.2.4 | **Tip-Credit Exploitation**       | Using tip-credit provisions to pay below minimum wage while assigning non-tipped duties that dilute tip income.                                                   | Hospitality, travel/tourism                                                                  |
| 11.2.5 | **Markup Wage Theft**             | Charging clients significantly more than worker pay rate while concealing markup, appropriating earned wages.                                                     | Staffing/temp agencies                                                                       |
| 11.2.6 | **Piece-Rate Sub-Minimum-Wage**   | Setting piece-rate or per-job pay at levels resulting in sub-minimum-wage earnings for typical work speed.                                                        | Plumbing, agriculture, gig economy                                                           |
| 11.2.7 | **Hidden Deductions**             | Subtracting uniform, background-check, training, or admin costs from paychecks without clear disclosure.                                                          | Staffing/temp                                                                                |
| 11.2.8 | **Wage Theft on Public Projects** | Failing to pay prevailing wages, withholding final paychecks, or unauthorized deductions on taxpayer-funded projects.                                             | Construction                                                                                 |
| 11.2.9 | **Stream-Threshold Wage Theft**   | Withholding payment for streams below an arbitrary minimum threshold, pocketing revenue from millions of micro-plays by smaller artists.                          | Music industry                                                                               |

### 11.3 Unpaid Overtime & Crunch

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.3.1 | **Overtime Denial**               | Requiring schedules above 40 hours while refusing overtime compensation.                                                                                          | Cleaning, construction, hospitality                                                          |
| 11.3.2 | **Crunch Culture**                | Sustaining mandatory or culturally expected 60–100+ hour weeks for months before launch.                                                                          | Gaming                                                                                       |
| 11.3.3 | **Up-or-Out Burnout**             | Maintaining promotion systems that demand unsustainable hours, normalizing burnout.                                                                               | Consulting, finance, law                                                                     |
| 11.3.4 | **Burnout-Industry Norm**         | Normalizing excessive hours, constant availability, and weekend work as industry expectations.                                                                    | PR/marketing, consulting                                                                     |
| 11.3.5 | **Forced Dispatch / Coerced Driving** | Pressuring drivers to operate beyond legal hours-of-service through dispatch practices.                                                                       | Shipping/freight                                                                             |

### 11.4 Benefits Denial

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.4.1 | **Benefits Denial Through Misclassification** | Structuring engagements to avoid health insurance, retirement, or paid leave.                                                                              | Gig economy, ride-hailing, food delivery, freelance, staffing/temp                            |
| 11.4.2 | **Benefits Two-Tier Denial**      | Excluding temp or contract workers from benefits available to permanent employees.                                                                                | Staffing/temp                                                                                |
| 11.4.3 | **Benefit Stripping Post-Acquisition** | Eliminating or reducing healthcare, retirement, or other benefits after acquiring portfolio companies.                                                       | Private equity                                                                               |
| 11.4.4 | **Pension Fund Underfunding**     | Reducing or suspending employer pension contributions to improve cash flow before exit.                                                                           | Private equity                                                                               |

### 11.5 Schedule Instability & Algorithmic Scheduling

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.5.1 | **On-Call / Just-in-Time Scheduling** | Publishing schedules with minimal notice, split shifts, or on-call requirements that prevent second jobs or childcare.                                       | Hospitality, retail, fast food                                                                |
| 11.5.2 | **Algorithmic Schedule Instability** | Assigning unpredictable schedules that prevent financial or personal planning.                                                                                | Gig economy, food delivery                                                                   |
| 11.5.3 | **Scheduling Practices Suppressing Wages** | Schedules designed to keep workers below full-time hours or prevent reliable second employment.                                                            | Grocery, retail                                                                               |

### 11.6 Hazardous Conditions & PPE

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.6.1 | **PPE Cost Shifting to Workers**  | Requiring workers to purchase their own respirators, gloves, or protective clothing.                                                                              | Cleaning, agriculture, pest control, chemical manufacturing                                  |
| 11.6.2 | **Hazardous Condition Exposure**  | Failing to provide protective equipment, shade, ventilation, or safe conditions for high-risk work.                                                               | Agriculture, cleaning, construction, mining                                                  |
| 11.6.3 | **Chemical Exposure Non-Disclosure** | Failing to inform workers about specific chemicals, exposure levels, or known health risks.                                                                  | Chemical manufacturing, oil/gas, cleaning, pest control                                      |
| 11.6.4 | **Reproductive-Hazard Concealment** | Failing to warn workers of documented reproductive hazards (mutagens, teratogens, endocrine disruptors).                                                      | Chemical manufacturing                                                                       |
| 11.6.5 | **Cancer-Cluster Non-Investigation** | Declining to investigate or acknowledge elevated cancer rates among workers when internal data suggests facility-related causation.                          | Chemical manufacturing                                                                       |
| 11.6.6 | **Heat / Fatigue Risk Neglect**   | Assigning extended outdoor or extreme-temperature shifts without mandated rest or hydration.                                                                      | Staffing/temp, agriculture, waste management                                                 |
| 11.6.7 | **Black-Lung / Dust-Exposure Concealment** | Suppressing or manipulating dust exposure data to avoid implementing required controls.                                                                  | Mining                                                                                       |
| 11.6.8 | **Fatigue-Risk Normalization**    | Scheduling that creates chronic fatigue in safety-critical operations without mitigation.                                                                         | Oil/gas, airlines, transit, shipping                                                         |
| 11.6.9 | **Pressure to Speed Causing Unsafe Driving** | Unrealistic delivery time estimates and late-arrival penalties that incentivize reckless driving.                                                          | Food delivery, ride-hailing, shipping                                                        |
| 11.6.10 | **Production Quotas Compromising Safety** | Pick-and-pack or daily-job quotas that force workers to skip breaks or compromise safety.                                                                | Logistics, warehousing, pest control, shipping                                                |
| 11.6.11 | **Housekeeper Workload**         | Excessive room counts per shift with piece-rate pay that incentivizes skipping safety protocols.                                                                  | Hospitality                                                                                  |

### 11.7 Safety Incident Underreporting

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.7.1 | **OSHA Violation Concealment**    | Hiding or failing to report workplace injuries, OSHA violations, or hazardous conditions.                                                                         | Construction, oil/gas                                                                        |
| 11.7.2 | **Injury Reporting Discouragement** | Discouraging temp/contractor injury reporting through retaliation or quota penalties.                                                                          | Staffing/temp, logistics, warehousing                                                        |
| 11.7.3 | **Contractor-Labor Risk Shifting** | Using contracted labor for the most hazardous operations to avoid direct employer liability and long-term health monitoring.                                    | Oil/gas, mining, chemical manufacturing                                                      |
| 11.7.4 | **Inadequate Worker Insurance**    | Providing minimal or no accident insurance for workers while on the job.                                                                                         | Food delivery, gig economy                                                                   |
| 11.7.5 | **Detention-Time Unpaid**         | Failing to compensate drivers for extended wait times at facilities beyond their control.                                                                         | Shipping/freight                                                                             |
| 11.7.6 | **Equipment Injury Training Absence** | Not training workers on safe operation of industrial cleaning, construction, or warehouse equipment.                                                          | Cleaning, construction                                                                       |

### 11.8 Retaliation Against Reporting

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.8.1 | **Retaliation Against Workers Reporting Safety** | Penalizing workers who report safety violations through reduced hours, termination, or blacklisting.                                                  | Cleaning, childcare, construction, hospitality                                                |
| 11.8.2 | **Whistleblower Retaliation**     | Demoting, terminating, blacklisting, or otherwise retaliating against employees who report fraud, safety failures, or unethical practices.                        | Internal company ethics, defense, government, mining, accounting, healthcare, pharma         |
| 11.8.3 | **Security-Clearance Coercion**   | Using security-clearance requirements to suppress employee complaints or limit job mobility.                                                                      | Defense                                                                                      |
| 11.8.4 | **NDAs Silencing Misconduct**     | Using NDAs or separation agreements to prevent employees from speaking publicly about unethical practices, surveillance, or safety concerns.                      | Internal company ethics, consulting, PR/marketing                                            |

### 11.9 Non-Compete Overreach

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.9.1 | **Overbroad Non-Compete**         | Imposing non-compete clauses that restrict career mobility beyond legitimate business interests.                                                                  | Consulting, gaming, legal, music, mental health                                              |
| 11.9.2 | **Non-Compete on Low-Wage Workers** | Imposing non-competes on hourly or low-wage workers to suppress turnover.                                                                                     | Private equity portfolio, staffing/temp                                                      |
| 11.9.3 | **Multi-App Penalty**             | Penalizing or deactivating gig workers who work for competing platforms.                                                                                          | Food delivery, ride-hailing                                                                  |
| 11.9.4 | **Therapist Non-Compete**         | Enforcing non-competes that prevent therapists from continuing care with patients after leaving a platform.                                                       | Mental health                                                                                |

### 11.10 Forced Labor & Child Labor in Operations

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.10.1 | **Forced Labor on Vessels / Sites** | Using debt bondage, confiscated documents, or coercion to retain workers without freedom to leave.                                                            | Seafood, agriculture, hospitality                                                            |
| 11.10.2 | **At-Sea / Remote Worker Abuse Concealment** | Physical violence, food withholding, or confinement of workers far from oversight.                                                                       | Seafood                                                                                      |
| 11.10.3 | **Isolation as Intimidation**     | Deliberately keeping workers in remote settings to prevent contact with authorities or complaint filing.                                                          | Seafood                                                                                      |
| 11.10.4 | **Child Labor in Operations / Supply Chain** | Sourcing from operations that employ underage workers, or using subcontracting to obscure child-labor involvement.                                       | Agriculture, fashion, mining, food                                                            |

### 11.11 Mass Layoffs After Profit & Disposable Workforce

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.11.1 | **Layoffs After Profitable Launch** | Terminating large portions of teams immediately after profitable launches to avoid sharing ongoing revenue.                                                  | Gaming                                                                                       |
| 11.11.2 | **Mass Layoffs Post-Acquisition** | Implementing significant workforce reductions immediately after acquisition to improve short-term financial metrics.                                              | Private equity                                                                               |
| 11.11.3 | **Layoffs to Service Debt**       | Cutting workforce primarily to meet debt service obligations imposed by acquisition structure.                                                                    | Private equity                                                                               |
| 11.11.4 | **Workforce Reduction Without Transition Support** | Eliminating positions without adequate severance, retraining, or job placement assistance.                                                              | Private equity                                                                               |

### 11.12 Performance & Quality Management Abuse

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.12.1 | **Performance-Review Weaponization** | Using opaque performance review processes to justify predetermined attrition rather than genuine development.                                                | Consulting                                                                                   |
| 11.12.2 | **Credit Suppression**            | Failing to provide references, performance documentation, or skill verification that would help workers transition.                                              | Staffing/temp                                                                                |
| 11.12.3 | **Credit / Byline Omission**      | Removing or omitting developer or creator credits from shipped products or published work for departing or freelance workers.                                     | Gaming, media/journalism, music                                                              |

### 11.13 Pay Disparity & Discrimination

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.13.1 | **Demographic Pay Gaps**         | Maintaining persistent pay disparities for women, people of color, or LGBTQ+ workers compared to peers in equivalent roles.                                      | Film/television, internal company                                                            |
| 11.13.2 | **Salary History Exploitation**  | Using prior salary to set compensation, perpetuating historical pay gaps.                                                                                         | HR/recruitment                                                                               |

### 11.14 Moderator & Worker Trauma

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.14.1 | **Moderator Mental-Health Neglect** | Exposing content moderators to graphic, violent, or traumatic material without adequate support.                                                              | Social media                                                                                 |
| 11.14.2 | **Data-Labeler Trauma**           | Outsourcing data labeling to workers exposed to traumatic content under poor conditions.                                                                          | AI                                                                                           |
| 11.14.3 | **Brain-Injury Concealment**      | Withholding or downplaying concussion diagnoses; pressuring athletes to return before recovery.                                                                   | Sports/athletics, film/television (stunts)                                                   |
| 11.14.4 | **Sexual-Assault Reporting Gaps** | Failing to promptly report assaults to law enforcement; settling claims privately with NDAs.                                                                      | Ride-hailing                                                                                 |
| 11.14.5 | **Unsafe Working Hours**          | Scheduling shoots exceeding 14 hours, mandating turnaround under 8 hours.                                                                                         | Film/television                                                                              |

### 11.15 Unpaid Labor & Career-Path Exploitation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.15.1 | **Unpaid-Internship Abuse**      | Using interns as free labor on billable client work without meaningful mentorship.                                                                                | PR/marketing, consulting, film/television                                                    |
| 11.15.2 | **Pitch-Work Without Compensation** | Requiring extensive creative work as part of competitive pitches without compensating finalists.                                                              | PR/marketing                                                                                 |
| 11.15.3 | **Freelancer Payment Delays**     | Systematically delaying payment to freelance creatives, consultants, or contractors beyond contract terms.                                                        | PR/marketing, media/journalism                                                               |
| 11.15.4 | **Unpaid Travel / Setup Time**    | Not compensating workers for travel, vehicle preparation, or job-site setup while billing clients for it.                                                         | Plumbing, home services                                                                      |
| 11.15.5 | **Unpaid Professional Development** | Requiring caregivers to complete continuing education on their own time without compensation.                                                                 | Childcare, healthcare                                                                        |
| 11.15.6 | **Training Cost Shifting to Worker** | Requiring workers to pay for certifications or training needed for placement.                                                                                 | Staffing/temp                                                                                |
| 11.15.7 | **Crew Replacement During Strikes** | Replacing striking workers with non-union or international crew to break collective bargaining.                                                               | Film/television                                                                              |
| 11.15.8 | **Peer-Review Free Labor**        | Relying on unpaid academic peer reviewers while generating substantial subscription revenue from their volunteer contributions.                                   | Academic publishing                                                                          |

### 11.16 Restrictions on Career Mobility

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 11.16.1 | **Profile Data Lock-In**         | Preventing workers from exporting reviews, portfolios, or professional history when leaving a platform.                                                          | Freelance/gig                                                                                |
| 11.16.2 | **Customer-Data Hoarding from Workers** | Preventing workers from accessing client contact information they need to build independent careers.                                                       | Freelance/gig, food delivery                                                                 |
| 11.16.3 | **Portfolio Rights Grab**         | Claiming ownership of employee or freelancer portfolio work beyond what is needed for delivery.                                                                  | PR/marketing                                                                                 |
| 11.16.4 | **Cross-Client Worker Profiling** | Sharing worker performance data between clients to create informal blacklists.                                                                                    | Staffing/temp                                                                                |

---

## 12. Anti-Competitive Behavior & Market Power

### 12.1 Predatory Pricing & Cross-Subsidy

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.1.1 | **Predatory Pricing**             | Below-cost pricing to drive competitors out of business before raising prices.                                                                                    | Cross-domain (PE-funded price wars, ride-hailing vs. transit, alcohol)                       |
| 12.1.2 | **Predatory Pricing vs. Public Infrastructure** | Subsidizing services below cost to draw users from public transit or other public services, then raising prices once those alternatives are weakened.    | Ride-hailing                                                                                 |

### 12.2 Acquisitions to Kill Competition

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.2.1 | **Killer Acquisitions**           | Acquiring competitors to shutter their products, absorb talent, or prevent alternatives from reaching market.                                                     | AI, cloud/SaaS, social media                                                                 |
| 12.2.2 | **Industry Roll-Up to Monopoly**  | Systematically acquiring small competitors to create local or regional monopolies.                                                                                | Private equity (dental, vet, funeral, dialysis, etc.)                                        |
| 12.2.3 | **Catalog Consolidation**         | Acquiring and consolidating catalogs to reduce diversity of ownership and concentrate market power.                                                               | Music industry                                                                               |
| 12.2.4 | **Imprint Opacity**               | Operating dozens of imprints under a single corporate parent while presenting them as independent.                                                                | Publishing                                                                                   |

### 12.3 Self-Preferencing on Owned Platforms

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.3.1 | **Buy-Box / Listing Self-Preferencing** | Designing buy-box or marketplace algorithms to favor private-label products over identical or superior third-party offerings.                                | E-commerce                                                                                   |
| 12.3.2 | **Cloud Self-Preferencing**       | Designing cloud platforms to give the provider's own SaaS or PaaS products performance, cost, or integration advantages competitors cannot replicate.             | Cloud/SaaS                                                                                   |
| 12.3.3 | **Ghost-Kitchen Data Cloning**    | Analyzing restaurant order data to launch competing ghost kitchens that replicate successful menu concepts.                                                       | Food delivery                                                                                |
| 12.3.4 | **Search Self-Preferencing**      | Ranking the platform's own products, services, or AI assistant content above superior third-party alternatives.                                                   | Search engines, AI platforms                                                                 |
| 12.3.5 | **Music Catalog Self-Preferencing** | Algorithmically promoting catalog owned or controlled by the platform's parent company.                                                                       | Music industry                                                                               |
| 12.3.6 | **Bandwidth Throttling of Competitors** | Deprioritizing or degrading network traffic from competing services while favoring owned content.                                                            | Streaming, telecom                                                                           |

### 12.4 Tying & Forced Bundling

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.4.1 | **Tying Arrangements**            | Forcing purchase of unwanted products as a condition of obtaining the desired one.                                                                                | Cloud/SaaS, agriculture (seed-herbicide), insurance                                          |
| 12.4.2 | **Default-Engine Payment for Exclusivity** | Paying device manufacturers, browsers, or operating systems to set the platform as default, foreclosing competition.                                       | Search engines                                                                               |
| 12.4.3 | **Search Monopoly Leverage into Adjacent Markets** | Using dominant search to force adoption of complementary services.                                                                                    | Search engines                                                                               |
| 12.4.4 | **GPS Critical-Infrastructure Hostage** | Leveraging society's dependence on positioning, navigation, and timing services to extract preferential terms or block redundancy.                          | Space/aerospace                                                                              |

### 12.5 Exclusive Dealing & Foreclosure

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.5.1 | **Price-Parity / MFN Enforcement** | Contractually prohibiting sellers from offering lower prices on other platforms, inflating consumer prices.                                                      | E-commerce, hospitality                                                                      |
| 12.5.2 | **Spectrum / Resource Hoarding**  | Filing for vast spectrum allocations beyond intended use to block competitor access.                                                                              | Space/aerospace, telecom                                                                     |
| 12.5.3 | **Launch Market Vertical Integration** | Using vertical integration, exclusive pad access, or predatory pricing to prevent new entrants.                                                              | Space/aerospace                                                                              |
| 12.5.4 | **Independent-Bookstore Disadvantage** | Negotiating exclusive terms or early-release windows with large retailers that independents cannot match.                                                    | Publishing                                                                                   |

### 12.6 Bid Rigging & Collusion

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.6.1 | **Bid Suppression / Rigging**     | Coordinating with competitors to refrain from bidding or to submit non-competitive proposals, ensuring a predetermined winner.                                    | Construction                                                                                 |
| 12.6.2 | **Algorithmic Rent-Setting Coordination** | Using shared data platforms to coordinate rent increases across competing landlords.                                                                       | Real estate                                                                                  |
| 12.6.3 | **Refinery Maintenance Coordination** | Coordinating maintenance shutdowns to create artificial supply constraints and raise prices.                                                                | Oil/gas                                                                                      |
| 12.6.4 | **Spoofing & Layering**           | Placing large orders with no intent of execution to create false impressions of supply or demand.                                                                 | Crypto/blockchain, financial markets                                                          |
| 12.6.5 | **Wash Trading**                  | Executing trades between controlled accounts to create artificial volume.                                                                                         | Crypto/blockchain                                                                            |
| 12.6.6 | **Operator-Cartel Pickup-Zone Exclusion** | Operator-level collusion (driver associations, not platforms) to block competitors from designated pickup zones at airports, train stations, or events, often through intimidation, vehicle blocking, or coordinated reporting to enforcement. | Taxi associations vs. rideshare drivers, airport curb monopolies                              |

### 12.7 Monopoly Rent Extraction

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.7.1 | **Commission / Fee Escalation**   | Progressively increasing platform commissions, license fees, or per-seat pricing without proportional value, exploiting switching costs.                          | Cloud/SaaS, food delivery, e-commerce, mobile carriers                                       |
| 12.7.2 | **Forced Advertising Participation** | Making seller advertising mandatory through reduced visibility for non-participants.                                                                          | E-commerce                                                                                   |
| 12.7.3 | **Search Ranking Pay-to-Play**    | Requiring sellers to purchase advertising for organic search visibility, blurring ads and results.                                                                | E-commerce, food delivery                                                                    |
| 12.7.4 | **Forced Promotion Participation** | Enrolling restaurants in discount or free-delivery campaigns without consent, with cost absorbed from margins.                                                  | Food delivery                                                                                |
| 12.7.5 | **Algorithmic Discovery Pay-to-Play** | Requiring payment for favorable algorithmic placement, chart positioning, or editorial featuring.                                                            | Podcasting, music                                                                            |
| 12.7.6 | **Phone Service Monopoly in Captive Markets** | Granting exclusive telecom contracts that eliminate competition.                                                                                          | Prison/corrections                                                                           |
| 12.7.7 | **Publisher Dependency Exploitation** | Leveraging traffic dominance to impose unilateral terms on publishers (revenue share, format, content access).                                                | Search engines                                                                               |

### 12.8 Open-Source / Standards Manipulation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.8.1 | **Open-Source Bait-and-Switch**   | Building market position on open-source releases, then transitioning core capabilities to proprietary licenses once dominant.                                     | AI, cloud/SaaS                                                                               |
| 12.8.2 | **Patent Thicket / Evergreening** | Using patent thickets and litigation to block generic or biosimilar entry beyond legitimate IP protection.                                                        | Pharma/biotech                                                                               |
| 12.8.3 | **Pay-for-Delay**                 | Paying generic manufacturers to delay market entry of affordable alternatives.                                                                                    | Pharma/biotech, healthcare                                                                   |
| 12.8.4 | **Public-Domain Misappropriation** | Repackaging public-domain works with minor additions and claiming new copyright protection.                                                                     | Publishing                                                                                   |
| 12.8.5 | **Public-Domain Extension Lobbying** | Lobbying to extend copyright terms beyond reasonable limits, restricting cultural reuse.                                                                     | Music industry                                                                               |
| 12.8.6 | **Sample Clearance Gatekeeping**  | Maintaining opaque, expensive sample clearance that favors established labels and blocks independent creators.                                                    | Music industry                                                                               |
| 12.8.7 | **Reversion Right Obstruction**   | Preventing copyright reversion to creators after the statutory window through contract clauses or procedural barriers.                                            | Music industry                                                                               |
| 12.8.8 | **Out-of-Print Suppression**      | Keeping books technically in print through token print-on-demand to prevent rights reversion.                                                                     | Publishing                                                                                   |
| 12.8.9 | **Editorial Board Replacement for Profit** | Replacing dissenting editorial boards advocating for open access with compliant boards.                                                                  | Academic publishing                                                                          |

### 12.9 Merchant / Seller Exploitation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 12.9.1 | **Seller Data Extraction**        | Requiring sellers to share detailed product, pricing, and sales data that the platform then uses to compete against them.                                         | E-commerce                                                                                   |
| 12.9.2 | **Restaurant Customer-Data Hoarding** | Preventing restaurants from accessing customer data for orders placed through the platform.                                                                  | Food delivery                                                                                |
| 12.9.3 | **Supplier Squeeze**              | Using market power to impose below-sustainability prices on farmers, suppliers, or smaller producers.                                                             | Grocery, food/beverage manufacturing                                                          |
| 12.9.4 | **Subcontractor Non-Payment**     | Withholding or delaying subcontractor payments to improve cash flow, using retainage as leverage.                                                                 | Construction                                                                                 |

---

## 13. Supply Chain & Sourcing Ethics

### 13.1 Supply Chain Opacity

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 13.1.1 | **Supply Chain Opacity**          | Constructing complex multi-tier supply chains with insufficient documentation, making it impossible to trace inputs from origin to consumer.                      | Seafood, fashion, agriculture, beauty, cannabis, food/beverage manufacturing                  |
| 13.1.2 | **Subcontractor Concealment**     | Hiding unauthorized subcontracting where workers face the worst conditions, claiming visibility only to Tier 1 suppliers.                                         | Fashion                                                                                      |
| 13.1.3 | **Audit Theater**                 | Conducting pre-announced audits that allow temporary remediation, without follow-up or worker-driven monitoring.                                                  | Fashion, food, beauty                                                                        |
| 13.1.4 | **Unannounced Carrier Substitution** | Handing shipments to undisclosed subcontractors with different service or liability standards.                                                                | Shipping/freight                                                                             |
| 13.1.5 | **Transshipment Concealment**     | Transferring catch or goods at sea between vessels to mix legal and illegal sources, obscuring origins.                                                           | Seafood                                                                                      |
| 13.1.6 | **Vessel-Tracking Avoidance**     | Disabling, tampering with, or failing to install AIS or VMS tracking to evade monitoring.                                                                         | Seafood                                                                                      |
| 13.1.7 | **Quota Shell Games**             | Transferring quotas between vessels, regions, or corporate entities to obscure true catch and evade limits.                                                       | Seafood                                                                                      |

### 13.2 Forced & Child Labor in Supply Chain

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 13.2.1 | **Forced-Labor Sourcing**         | Procuring inputs from regions or operations with documented forced labor.                                                                                          | Fashion (cotton), seafood, agriculture, food/beverage manufacturing                          |
| 13.2.2 | **Child-Labor Sourcing**          | Sourcing from suppliers that employ underage workers or using subcontracting structures to obscure child labor.                                                   | Agriculture, fashion, mining (rare earth, cobalt), food                                      |
| 13.2.3 | **Conflict-Mineral Sourcing**     | Failing to audit or disclose conflict-mineral sourcing despite known links to violence and human rights abuses.                                                   | Internal company ethics (hardware), electronics, automotive                                  |
| 13.2.4 | **Migrant-Recruitment Brokers**   | Hiring through labor brokers who charge recruitment fees, withhold wages, or impose contracts that create indebtedness.                                           | Seafood, agriculture, construction                                                           |
| 13.2.5 | **Cobalt / Lithium Source Opacity** | Purchasing battery materials without tracing origin or verifying compliance with labor and environmental standards.                                            | Renewable energy, electronics                                                                |
| 13.2.6 | **Rare-Earth Mining Abuse**       | Sourcing from mines with documented child labor, forced labor, or toxic environmental practices.                                                                  | Renewable energy, electronics                                                                |
| 13.2.7 | **Panel-Manufacturing Labor Conditions** | Procuring from factories with unsafe conditions, excessive hours, or wage theft.                                                                            | Renewable energy                                                                             |
| 13.2.8 | **Audit-Scope Restriction**       | Limiting audit scope, providing advance notice, or selecting auditors with conflicts of interest to undermine ethical-sourcing claims.                            | Renewable energy                                                                             |
| 13.2.9 | **At-Sea Worker Abuse Concealment** | Tolerating physical violence, food withholding, or confinement of crew far from oversight.                                                                    | Seafood                                                                                      |

### 13.3 Animal Cruelty in Supply Chain

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 13.3.1 | **Wildlife-Exploitation Tours**   | Selling animal-encounter experiences (elephant rides, dolphin swims, tiger photos) sourced from abusive facilities.                                               | Travel/tourism                                                                               |
| 13.3.2 | **Puppy-Mill Concealment**        | Sourcing from high-volume commercial breeders while marketing animals as ethically bred.                                                                          | Pet industry                                                                                 |
| 13.3.3 | **Foie Gras / Factory-Farm Sourcing** | Sourcing from intensive operations without disclosure of conditions; opposing welfare regulation.                                                            | Food, restaurants                                                                            |
| 13.3.4 | **Antibiotic Overuse in Livestock** | Administering antibiotics prophylactically at scale to compensate for crowded conditions, accelerating resistance.                                            | Agriculture                                                                                  |

### 13.4 Counterfeit & Sanctioned Goods

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 13.4.1 | **Counterfeit Goods Tolerance**   | Failing to police third-party listings for counterfeits while profiting from listing fees and traffic.                                                            | E-commerce, fashion                                                                          |
| 13.4.2 | **Sanctions Circumvention**       | Providing services to individuals, entities, or jurisdictions under sanctions, exploiting pseudonymity to bypass compliance.                                      | Crypto/blockchain                                                                            |
| 13.4.3 | **Mixing Service Money Laundering** | Operating or promoting mixing services that obscure transaction origins to facilitate laundering.                                                              | Crypto/blockchain                                                                            |
| 13.4.4 | **Restricted-Substance Export to Weak-Regulation Markets** | Exporting chemicals banned in producing nations to countries with weaker frameworks.                                                                  | Chemical manufacturing, tobacco                                                              |

### 13.5 Deforestation-Linked Sourcing

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 13.5.1 | **Deforestation-Linked Inputs**   | Sourcing palm oil, soy, cocoa, beef, or paper from suppliers linked to illegal or unsustainable deforestation without traceability.                               | Food/beverage manufacturing, beauty (palm oil), agriculture                                  |
| 13.5.2 | **Deforestation for Farmland**    | Clearing forested or ecologically significant land for agricultural expansion without environmental review.                                                       | Agriculture                                                                                  |

### 13.6 Supplier Squeeze & Contract Abuse

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 13.6.1 | **Below-Sustainability Pricing on Suppliers** | Imposing prices on farmers or raw-material suppliers that drive labor abuse and environmental shortcuts.                                              | Food manufacturing, grocery, fashion                                                          |
| 13.6.2 | **Contract Farming Exploitation** | Imposing one-sided contracts that transfer production risk to farmers while locking in below-market purchase prices.                                              | Agriculture                                                                                  |
| 13.6.3 | **Unfair Trade Practices**        | Bypassing fair-trade premiums, reneging on contracts, or imposing unilateral price changes on smallholder producers.                                              | Food manufacturing                                                                           |

---

## 14. Environmental Conduct

### 14.1 Emission Underreporting & Concealment

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.1.1 | **Emission Underreporting**       | Understating Scope 1, 2, or 3 emissions through selective measurement, offset double-counting, or excluded segments.                                              | Logistics, shipping, oil/gas, mining, energy utilities, waste management                     |
| 14.1.2 | **Methane Emission Underreporting** | Systematically underreporting methane through selective measurement or accounting.                                                                            | Oil/gas, waste management                                                                    |
| 14.1.3 | **Toxic Release Underreporting**  | Systematically underreporting toxic releases to TRI or equivalent reporting systems.                                                                              | Chemical manufacturing                                                                       |
| 14.1.4 | **Air Quality Monitoring Avoidance** | Locating fenceline monitors to avoid detection or disabling monitors during peak release periods.                                                             | Chemical manufacturing                                                                       |
| 14.1.5 | **Compute Energy Concealment**    | Failing to disclose energy, water, or carbon costs of training and operating large AI models.                                                                     | AI                                                                                           |
| 14.1.6 | **Programmatic Ad Carbon Footprint** | Operating massive computational infrastructure for real-time bidding without accounting for the resulting energy waste.                                       | Digital advertising                                                                          |
| 14.1.7 | **Launch Emission Non-Disclosure** | Failing to measure, report, or disclose atmospheric impact of launch emissions, including alumina, soot, and ozone-depleting compounds.                          | Space/aerospace                                                                              |
| 14.1.8 | **Reentry Risk to Populated Areas** | Planning uncontrolled or marginally controlled reentry trajectories without adequate notification.                                                            | Space/aerospace                                                                              |

### 14.2 Carbon-Offset Greenwashing

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.2.1 | **Carbon-Offset Greenwashing**    | Claiming carbon neutrality through low-quality, non-additional, or unverifiable offsets while absolute emissions rise.                                            | AI, crypto, airlines, oil/gas, logistics, shipping, travel, renewable energy                  |
| 14.2.2 | **REC Double-Counting**           | Counting the same renewable certificates toward both regulatory compliance and voluntary customer claims.                                                         | Renewable energy, energy utilities, crypto                                                   |
| 14.2.3 | **Renewable Without Additionality** | Claiming renewable operations while purchasing existing renewable credits rather than funding new capacity.                                                   | Crypto/blockchain                                                                            |
| 14.2.4 | **Carbon-Credit Misrepresentation** | Selling carbon credits from landfill gas or other capture that does not represent genuine additional reduction.                                                | Waste management                                                                             |
| 14.2.5 | **Curtailment Concealment**       | Failing to disclose when renewable generation is curtailed, overstating actual clean energy delivered.                                                            | Renewable energy                                                                             |

### 14.3 Pollution Concealment

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.3.1 | **Groundwater Contamination Concealment** | Detecting but not disclosing chemical migration into groundwater used for drinking, agriculture, or ecosystems.                                            | Chemical manufacturing, oil/gas, agriculture, mining                                          |
| 14.3.2 | **Sewer/Water Overflow Concealment** | Failing to report combined sewer overflows that release raw sewage into waterways.                                                                           | Water utilities                                                                              |
| 14.3.3 | **Acid Mine Drainage Neglect**    | Failing to prevent or treat acid drainage that contaminates waterways for decades.                                                                                | Mining                                                                                       |
| 14.3.4 | **Pesticide Drift onto Communities** | Applying broad-acre or aerial pesticides in conditions causing drift onto neighboring communities, schools, or organic farms.                                | Agriculture, pest control                                                                    |
| 14.3.5 | **Fertilizer-Runoff Concealment** | Concealing the extent of nutrient pollution (dead zones, algal blooms, groundwater contamination).                                                                | Agriculture                                                                                  |
| 14.3.6 | **Spill Response Delay**          | Delaying containment, cleanup, or notification after spills to minimize perceived liability.                                                                      | Oil/gas, chemical manufacturing                                                              |
| 14.3.7 | **Test-Frequency Reduction**      | Reducing water-quality testing frequency to cut costs, particularly in low-income service areas.                                                                  | Water utilities                                                                              |
| 14.3.8 | **PFAS Concealment**              | Failing to test for or disclose PFAS in drinking water or in products.                                                                                            | Water utilities, personal care, chemical manufacturing                                       |
| 14.3.9 | **Contamination Notice Delay**    | Delaying public notification of water-quality violations.                                                                                                         | Water utilities                                                                              |
| 14.3.10 | **Ground Water Contamination From Testing** | Allowing propellant, solvent, or chemical runoff to contaminate aquifers without remediation.                                                            | Space/aerospace                                                                              |

### 14.4 Environmental Justice Siting

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.4.1 | **Polluting-Facility Siting in Vulnerable Communities** | Concentrating new infrastructure (power plants, substations, pipelines, transfer stations, landfills) in low-income or minority communities.        | Energy utilities, waste management, public transit, oil/gas                                  |
| 14.4.2 | **Diesel Bus Retention in Polluted Areas** | Continuing to operate diesel buses in already-burdened communities while electrifying affluent routes.                                                    | Public transit                                                                               |
| 14.4.3 | **NIMBY Exploitation**            | Siting renewable or other projects in low-income or minority communities to avoid affluent opposition.                                                            | Renewable energy                                                                             |

### 14.5 Habitat & Ecosystem Destruction

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.5.1 | **Habitat Destruction Underreporting** | Minimizing the scope of ecological impact in environmental assessments to secure permits.                                                                    | Mining                                                                                       |
| 14.5.2 | **Biodiversity Monoculture Push** | Promoting or enforcing single-crop systems that destroy pollinator habitats and erode genetic diversity.                                                          | Agriculture                                                                                  |
| 14.5.3 | **Bottom Trawling on Sensitive Habitats** | Deploying bottom trawl gear in coral, sponge beds, or seamounts, causing irreversible damage.                                                              | Seafood                                                                                      |
| 14.5.4 | **Marine Protected Area Incursion** | Fishing within designated MPAs or no-take zones through boundary ambiguity or weak enforcement.                                                              | Seafood                                                                                      |
| 14.5.5 | **Coral Reef Damage Concealment** | Promoting reef activities (sunscreen, anchoring, trampling) without disclosing impact.                                                                            | Travel/tourism                                                                               |
| 14.5.6 | **Bycatch Non-Disclosure**        | Failing to report or disclose non-target species killed during fishing operations.                                                                                | Seafood                                                                                      |
| 14.5.7 | **Endangered-Species Mislabeling** | Selling endangered species under common or mislabeled names to circumvent awareness and trade protections.                                                      | Seafood                                                                                      |
| 14.5.8 | **Pollinator Impact Disregard**   | Using neonicotinoid or other pollinator-toxic chemicals without risk assessment or mitigation.                                                                    | Pest control, agriculture                                                                    |
| 14.5.9 | **Megaconstellation Astronomy Interference** | Deploying reflective satellites that degrade ground- and space-based astronomy without meaningful mitigation.                                            | Space/aerospace                                                                              |

### 14.6 Microplastics & Persistent Pollutants

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.6.1 | **Microplastic Ingredients**      | Formulating with microbeads, glitter, or synthetic polymers that enter waterways despite known damage.                                                            | Beauty, personal care                                                                        |
| 14.6.2 | **Microplastic Pollution Concealment** | Failing to disclose synthetic-fabric shedding or opposing labeling requirements about microplastic release.                                                  | Fashion                                                                                      |
| 14.6.3 | **Microplastic from Fishing Gear (Ghost Gear)** | Abandoning, losing, or discarding gear that degrades into microplastics and continues entangling marine life.                                          | Seafood                                                                                      |
| 14.6.4 | **PFAS Forever Chemicals**        | Continuing to manufacture PFAS or substituting structurally similar analogs while marketing PFAS-free.                                                             | Chemical manufacturing, personal care                                                        |
| 14.6.5 | **BPA Replacement With Equally Harmful Alternatives** | Substituting bisphenol-A with structurally similar bisphenol analogs that carry equivalent endocrine-disrupting properties.                          | Chemical manufacturing                                                                       |
| 14.6.6 | **Microplastic in Children's Feeding Products** | Manufacturing bottles, utensils, or plates from materials that shed microplastics during normal use.                                                    | Baby/children's products                                                                     |

### 14.7 E-Waste & Disposal

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.7.1 | **Designed-In E-Waste**           | Designing products that are difficult to disassemble, recycle, or dispose of responsibly.                                                                         | Home appliances, electronics                                                                 |
| 14.7.2 | **AI Hardware Churn**             | Cycling through GPU and accelerator hardware at rapid pace without responsible recycling or lifecycle planning.                                                   | AI                                                                                           |
| 14.7.3 | **Mining Hardware E-Waste**       | Generating e-waste through short-lived ASIC mining hardware without producer responsibility.                                                                      | Crypto/blockchain                                                                            |
| 14.7.4 | **Recycling Greenwashing**        | Reporting recycling rates that include waste sent to facilities that subsequently landfill it; marketing zero-waste claims without verification.                  | Waste management, fashion, beauty                                                            |
| 14.7.5 | **Returns Disposal**              | Routing returned goods to landfill or incineration rather than resale, donation, or recycling when reuse is feasible.                                             | Logistics, e-commerce                                                                        |
| 14.7.6 | **Solar Panel End-of-Life Failure** | Failing to plan for or fund recycling and safe disposal of decommissioned panels, blades, or batteries.                                                       | Renewable energy                                                                             |
| 14.7.7 | **Non-Recyclable Material Selection** | Choosing composite or non-recyclable materials when recyclable alternatives exist at comparable cost.                                                         | Home appliances                                                                              |
| 14.7.8 | **Packaging Excess**              | Using oversized or non-recyclable packaging that generates unnecessary waste.                                                                                     | Home appliances, beauty, e-commerce                                                          |

### 14.8 Pesticide & Antibiotic Overuse

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.8.1 | **Pesticide Application Beyond Label** | Applying chemicals at concentrations, frequencies, or locations exceeding label specifications.                                                              | Pest control                                                                                 |
| 14.8.2 | **Restricted-Use Chemicals to Uncertified Applicators** | Making restricted-use pesticides available outside proper licensing.                                                                                  | Pest control                                                                                 |
| 14.8.3 | **IPM Avoidance**                 | Defaulting to chemical treatment instead of Integrated Pest Management approaches that minimize pesticide use.                                                    | Pest control                                                                                 |
| 14.8.4 | **Antibiotic Overprescription in Veterinary** | Prescribing antibiotics without proper diagnostics, contributing to resistance.                                                                           | Veterinary, agriculture                                                                      |

### 14.9 Site Abandonment & Stranded Liabilities

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.9.1 | **Site Abandonment Without Remediation** | Decommissioning wells, mines, or facilities without adequate remediation, leaving costs to public entities.                                                | Oil/gas, mining                                                                              |
| 14.9.2 | **Reclamation Bond Underfunding** | Posting insufficient reclamation bonds, leaving taxpayers liable for cleanup.                                                                                     | Mining                                                                                       |
| 14.9.3 | **Stranded Asset Concealment**    | Failing to disclose climate-related financial risks and asset stranding in financial reporting.                                                                   | Oil/gas                                                                                      |
| 14.9.4 | **Superfund Cleanup Delay**       | Using litigation or jurisdictional arguments to delay or reduce remediation obligations.                                                                          | Chemical manufacturing                                                                       |
| 14.9.5 | **End-of-Life Orbital Disposal Failure** | Failing to deorbit defunct satellites within committed timelines, leaving derelict objects as collision hazards.                                            | Space/aerospace                                                                              |
| 14.9.6 | **Megaconstellation Debris Risk** | Deploying large constellations without adequate debris-mitigation planning.                                                                                       | Space/aerospace                                                                              |

### 14.10 Catastrophic Risk Concealment

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.10.1 | **Tailings Dam Risk Concealment** | Understating structural risk of tailings dams to avoid costly upgrades or closure.                                                                              | Mining                                                                                       |
| 14.10.2 | **Accident & Near-Miss Concealment** | Suppressing reports of chemical releases, fires, explosions, or near-miss events that could have been catastrophic.                                          | Chemical manufacturing                                                                       |
| 14.10.3 | **Community Notification Failure** | Failing to inform surrounding communities about chemical hazards or release events in a timely manner.                                                          | Chemical manufacturing                                                                       |
| 14.10.4 | **Battery / Storage Risk Opacity** | Underreporting or downplaying battery fire risks or thermal-runaway incidents at storage facilities.                                                           | Renewable energy                                                                             |
| 14.10.5 | **Conjunction-Data Opacity**      | Withholding satellite conjunction data, refusing to coordinate maneuvers, or concealing near-miss events.                                                         | Space/aerospace                                                                              |

### 14.11 Lobbying Against Environmental Regulation

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.11.1 | **Climate Policy Obstruction**   | Funding or directing lobbying to obstruct, weaken, or delay climate legislation while publicly claiming climate commitment.                                       | Oil/gas, energy utilities                                                                    |
| 14.11.2 | **Chemical Regulation Lobbying** | Funding campaigns to weaken, delay, or repeal chemical safety legislation including TSCA reforms.                                                                 | Chemical manufacturing                                                                       |
| 14.11.3 | **Anti-Distributed-Generation Lobbying** | Funding opposition to rooftop solar, battery storage, or net-metering policies.                                                                            | Energy utilities                                                                             |
| 14.11.4 | **Preemption Strategy**          | Supporting federal legislation that preempts stronger state-level chemical or environmental regulation.                                                           | Chemical manufacturing                                                                       |
| 14.11.5 | **Subsidy Reliance With Record Profits** | Accepting subsidies and tax breaks while distributing record shareholder returns and resisting fiscal reform.                                              | Oil/gas                                                                                      |
| 14.11.6 | **GMO Labeling Opposition**      | Lobbying against mandatory labeling or transparency requirements for genetically modified ingredients.                                                            | Agriculture                                                                                  |
| 14.11.7 | **Smart-Gun Technology Opposition** | Actively lobbying against or refusing to develop personalized firearm technology that prevents unauthorized use.                                              | Firearms                                                                                     |

### 14.12 Resource Hoarding

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 14.12.1 | **Water Rights Exploitation**    | Diverting or hoarding water beyond sustainable needs, depleting community supplies in drought-prone regions.                                                      | Agriculture, food/beverage manufacturing, oil/gas, mining                                    |
| 14.12.2 | **Soil Degradation Concealment** | Continuing intensive monoculture practices known to degrade topsoil while promoting sustainability.                                                              | Agriculture                                                                                  |
| 14.12.3 | **Agricultural Land Displacement for Energy** | Converting productive farmland to solar or wind installations without food-security assessment.                                                            | Renewable energy                                                                             |

---

## 15. Governance, Whistleblowing & Corporate Accountability

### 15.1 Whistleblower Suppression

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.1.1 | **Whistleblower Retaliation**     | Demoting, terminating, blacklisting, or otherwise retaliating against employees who report fraud, safety failures, or unethical practices.                        | Internal company ethics, defense, government, mining, accounting, healthcare, pharma, nonprofits, accounting, oil/gas |
| 15.1.2 | **NDAs Hiding Public Harm**       | Using NDAs to suppress information about environmental, health, or safety risks the public has a right to know.                                                   | PR/marketing, pharma/biotech, automotive (defects), film/television                          |
| 15.1.3 | **Hush Settlements**              | Settling individual claims under NDAs that prevent broader disclosure of misconduct or hazards.                                                                   | Cross-domain                                                                                 |
| 15.1.4 | **Inspector General Understaffing** | Underfunding oversight offices to render them ineffective, then citing "no findings" as evidence of compliance.                                                | Government services                                                                          |

### 15.2 Ethics Theater

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.2.1 | **Ethics Theater**                | Establishing internal AI ethics boards, privacy councils, or review teams with no decision-making authority and routinely overridden recommendations.            | Internal company ethics                                                                      |
| 15.2.2 | **Performative Audit Findings**   | Accepting audit recommendations publicly but failing to implement corrective actions, track progress, or report on remediation.                                   | Government services                                                                          |
| 15.2.3 | **Internal Report Suppression**   | Classifying internal security audits, privacy impact assessments, or ethical review findings as confidential to prevent scrutiny.                                 | Internal company ethics                                                                      |
| 15.2.4 | **Selective Transparency Reporting** | Publishing transparency or sustainability reports that omit unfavorable categories (proprietary surveillance, internal monitoring, fenceline emissions).      | Internal company ethics, PR/marketing                                                        |

### 15.3 Regulatory Capture & Lobbying

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.3.1 | **Lobbying Against Stricter Standards** | Funding industry lobbying to weaken accounting, audit, safety, or oversight standards.                                                                       | Accounting & auditing, food, chemical manufacturing, automotive                              |
| 15.3.2 | **Self-Regulatory Body Capture**  | Dominating professional self-regulatory bodies to set lenient standards or shield firms from accountability.                                                      | Accounting & auditing                                                                        |
| 15.3.3 | **Lobbying Against IRS Free Filing** | Spending millions to prevent expansion of IRS free filing.                                                                                                    | Tax preparation                                                                              |
| 15.3.4 | **Anti-Click-to-Cancel Lobbying** | Funding opposition to click-to-cancel rules and similar consumer protections.                                                                                     | Subscription industries                                                                      |
| 15.3.5 | **Lobbying Disclosure Gaps**      | Channeling influence through trade associations or indirect lobbying to avoid direct disclosure.                                                                  | Defense, pharma                                                                              |
| 15.3.6 | **Arms Lobbying Under Humanitarian Cover** | Lobbying for arms deals using framed national-security or humanitarian rationales obscuring commercial motivation.                                       | Defense                                                                                      |
| 15.3.7 | **Standard Narrowing**            | Advocating for narrow, rules-based standards that enable box-checking compliance while allowing material misstatements to persist.                                | Accounting & auditing                                                                        |

### 15.4 Revolving Door

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.4.1 | **Revolving Door with Regulators** | Hiring former regulators to lobby their former agencies or leveraging government relationships for client access.                                              | PR/marketing, defense, chemical manufacturing, tax preparation                               |
| 15.4.2 | **Revolving Door Contracting**    | Hiring former agency staff as consultants or contractors on the same programs they oversaw.                                                                       | Government services                                                                          |
| 15.4.3 | **Revolving Door with Audit Clients** | Partners or senior staff joining client companies in financial reporting roles, or hiring client personnel into audit leadership.                            | Accounting & auditing                                                                        |
| 15.4.4 | **Government Advisory to Regulated Industry** | Advising government on policy formulation while simultaneously advising regulated clients on navigating that policy.                                     | Consulting                                                                                   |

### 15.5 Audit Independence Failure

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.5.1 | **Non-Audit Service Conflicts**   | Providing lucrative non-audit services to audit clients, creating financial dependence that compromises objectivity.                                              | Accounting & auditing                                                                        |
| 15.5.2 | **Risk Assessment Shortcuts**     | Performing superficial risk assessments using prior-year templates without updating.                                                                              | Accounting & auditing                                                                        |
| 15.5.3 | **Documentation Gap Filling**     | Backdating or fabricating audit documentation after the fact to satisfy regulatory review.                                                                        | Accounting & auditing                                                                        |
| 15.5.4 | **Scope Limitation Acceptance**   | Accepting client-imposed audit scope limitations without qualifying the opinion or withdrawing.                                                                   | Accounting & auditing                                                                        |
| 15.5.5 | **Insider Trading on Privileged Access** | Using or sharing material non-public information obtained through audit engagements for trading or personal benefit.                                       | Accounting & auditing                                                                        |
| 15.5.6 | **Disciplinary Opacity**          | Handling disciplinary matters internally without transparency, allowing firms to conceal misconduct patterns.                                                     | Accounting & auditing                                                                        |

### 15.6 Conflict-of-Interest Concealment

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.6.1 | **Simultaneous Adverse Representation** | Representing parties with adverse interests in related matters without disclosure or consent.                                                                | Legal services, PR/marketing                                                                 |
| 15.6.2 | **Recommending Own Implementation Services** | Designing recommendations that require the firm's own implementation services.                                                                            | Consulting                                                                                   |
| 15.6.3 | **Equity Stakes in Recommended Vendors** | Holding undisclosed financial interests in vendors recommended to clients.                                                                                  | Consulting                                                                                   |
| 15.6.4 | **Vendor Kickback Concealment**   | Receiving undisclosed commissions from recommended vendors while presenting recommendations as impartial.                                                         | Wedding planning, financial services                                                         |
| 15.6.5 | **Preferred-Lender Kickbacks**    | Institutions receiving payments from lenders for steering students toward less favorable loan terms.                                                              | Education                                                                                    |
| 15.6.6 | **Class-Action Settlement Skimming** | Skimming disproportionate attorney fees while class members receive minimal compensation.                                                                     | Legal services                                                                               |
| 15.6.7 | **Investor / Portfolio Conflicts** | Recommending strategic actions that benefit the firm's investment arm or portfolio companies.                                                                   | Consulting                                                                                   |
| 15.6.8 | **Sportsbook Sponsorship Conflict** | Accepting sponsorship from sportsbooks while controlling integrity enforcement.                                                                              | Sports/athletics                                                                             |

### 15.7 Procurement Favoritism & Public-Fund Misuse

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.7.1 | **Procurement Favoritism**        | Tailoring bid specifications, using sole-source justifications, or fast-tracking contracts to favored vendors.                                                    | Government services, defense                                                                 |
| 15.7.2 | **Cost Overrun Tolerance**        | Treating chronic cost overruns as routine without enforcing penalties or termination.                                                                             | Government services, defense                                                                 |
| 15.7.3 | **Audit Failure on Public Funds** | Failing to achieve clean financial audits while expending billions in public funds, year after year.                                                              | Defense                                                                                      |
| 15.7.4 | **Classified Budget Opacity**     | Using classification to shield programs from oversight beyond legitimate security needs.                                                                          | Defense                                                                                      |
| 15.7.5 | **Cost-Plus Exploitation**        | Leveraging cost-plus contract structures to inflate costs, knowing higher spending yields higher profit.                                                          | Defense                                                                                      |
| 15.7.6 | **Sole-Source Manipulation**      | Engineering requirements or timelines to justify non-competitive sole-source contracts.                                                                           | Defense                                                                                      |
| 15.7.7 | **Emergency Authority Abuse**     | Bypassing competitive bidding under emergency declarations for non-emergency procurement.                                                                         | Government services                                                                          |
| 15.7.8 | **Small-Business Exclusion**      | Structuring requirements (bond thresholds, experience levels) that exclude small or minority-owned businesses.                                                    | Government services                                                                          |
| 15.7.9 | **Public-Stadium Financing Extraction** | Threatening team relocation to extract public stadium financing.                                                                                            | Sports/athletics                                                                             |
| 15.7.10 | **Public-Subsidy Privatized Profit** | Accepting public development funding while structuring operations for private profit without public return.                                                  | Space/aerospace                                                                              |
| 15.7.11 | **Strategic Bankruptcy**         | Using Chapter 11 to shed labor contracts, pension obligations, or environmental liabilities while preserving fund returns.                                        | Private equity                                                                               |
| 15.7.12 | **Asset Stripping Before Exit**  | Selling off valuable divisions, real estate, or IP from portfolio companies prior to sale or wind-down.                                                           | Private equity                                                                               |
| 15.7.13 | **Dividend Recapitalization**    | Loading portfolio companies with debt to fund special dividends to the fund.                                                                                      | Private equity                                                                               |
| 15.7.14 | **Royalty Evasion**              | Underreporting production volume or value to reduce royalty payments to host governments.                                                                         | Mining                                                                                       |
| 15.7.15 | **Transfer-Pricing Manipulation** | Shifting profits to low-tax jurisdictions through internal commodity pricing at below-market rates.                                                             | Mining                                                                                       |

### 15.8 Transparency Evasion

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.8.1 | **FOIA Delay Tactics**            | Using excessive redactions, inflated fee estimates, endless extensions, or "search and review" backlogs to deny FOIA requests.                                    | Government services                                                                          |
| 15.8.2 | **FOIA Exemption Overuse**        | Applying broad exemption claims to withhold information that would cause political embarrassment rather than genuine harm.                                        | Government services                                                                          |
| 15.8.3 | **Records Evasion via Private Channels** | Conducting substantive decision-making in private email or messaging apps to avoid public records requirements.                                              | Government services                                                                          |
| 15.8.4 | **Trade-Secret Overclaiming**     | Classifying chemical identities, formulations, or health studies as trade secrets to prevent mandatory disclosure.                                                | Chemical manufacturing                                                                       |
| 15.8.5 | **Facility Inspection / Condition Concealment** | Blocking independent inspection access, classifying condition reports, or suppressing evidence of overcrowding or neglect.                          | Prison/corrections                                                                           |
| 15.8.6 | **Recidivism / Outcome Data Manipulation** | Reporting selective metrics or redefining measurement windows to present favorable outcomes.                                                              | Prison/corrections, education                                                                |
| 15.8.7 | **Audit-Trail Prevention**        | Designing systems that prevent independent auditing, logging, or forensic review of surveillance operations.                                                      | Surveillance technology                                                                      |
| 15.8.8 | **Contract Opacity for Public Services** | Shielding private prison contracts, per-diem rates, and performance metrics from public disclosure.                                                       | Prison/corrections                                                                           |
| 15.8.9 | **AI Algorithmic Bias Non-Disclosure** | Failing to publish or disclose known bias, error rates, or demographic disparities in surveillance algorithms.                                              | Surveillance technology                                                                      |

### 15.9 Strategic Bankruptcy & Corporate Restructuring

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.9.1 | **Warranty Evasion Through Restructuring** | Using corporate restructuring, shell entities, or vague contract language to avoid honoring warranties.                                                  | Construction                                                                                 |
| 15.9.2 | **Project Abandonment**           | Walking away from projects after receiving substantial payments, leaving owners with unfinished structures and no recourse.                                       | Construction                                                                                 |
| 15.9.3 | **Corporate-Structure Opacity**   | Operating through shell companies or complex ownership to obscure surveillance product origins or other liabilities.                                              | Surveillance technology                                                                      |
| 15.9.4 | **Government Contract Opacity for Surveillance** | Classifying or concealing surveillance contracts to prevent public awareness.                                                                            | Surveillance technology                                                                      |

### 15.10 Boundary Misconduct

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.10.1 | **Match-Fixing Tolerance**        | Failing to investigate or sanction suspicious officiating or performance patterns when outcomes benefit league revenue.                                          | Sports/athletics                                                                             |
| 15.10.2 | **Therapeutic-Use Exemption Abuse** | Approving dubious medical exemptions that allow banned-substance use for competitive advantage.                                                              | Sports/athletics                                                                             |
| 15.10.3 | **Anti-Doping Inconsistency**     | Applying testing protocols unevenly, reducing scrutiny for commercially valuable competitors.                                                                     | Sports/athletics                                                                             |
| 15.10.4 | **Inspection Bribery**            | Offering payments, gifts, or favors to inspectors to overlook deficiencies.                                                                                       | Construction, food, public health inspection                                                 |
| 15.10.5 | **Political Interference in Operations** | Pressuring career staff to alter findings, delay enforcement, or prioritize politically favorable outcomes.                                                | Government services                                                                          |

### 15.11 Religious / Authoritarian Complicity

| §      | Practice                          | Description                                                                                                                                                       | Example domains                                                                              |
|--------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 15.11.1 | **Sales to Human Rights Violators** | Selling weapons, surveillance, or AI capabilities to governments or entities with documented human rights abuses.                                              | Defense, AI, surveillance technology, space/aerospace                                        |
| 15.11.2 | **Government Censorship Compliance** | Removing or suppressing content at government request without transparency or legal challenge.                                                                | Social media, search engines                                                                 |
| 15.11.3 | **Repressive Regime Customization** | Customizing surveillance features (language packs, target profiles, integration with local enforcement) for known repressive governments.                    | Surveillance technology                                                                      |
| 15.11.4 | **Dual-Use Export Evasion**       | Circumventing export controls by classifying surveillance tools as civilian or commercial.                                                                        | Surveillance technology                                                                      |

---

# Part II — Quick Reference & Appendices

## Quick Reference Index

A non-exhaustive index of practices that recur across many industries and
are commonly cited.

| If you encounter…                               | Cite                                                                                       |
|-------------------------------------------------|--------------------------------------------------------------------------------------------|
| Hidden fees revealed only at checkout           | OES § 1.1.1 (Drip Pricing), § 1.1.2 (Hidden Mandatory Fees)                                |
| Surge pricing during emergencies                | OES § 1.2.1 (Crisis-Period Price Gouging), § 10.6 (Crisis & Disaster Exploitation)          |
| Bait-and-switch quotes that inflate later       | OES § 1.3.3 (Underbid-and-Inflate)                                                         |
| Loyal customers paying more than new customers  | OES § 1.5.2 (Loyalty Penalty)                                                              |
| Shrinkflation                                   | OES § 1.6.1 (Shrinkflation)                                                                |
| Easy signup, hard cancel                        | OES § 2.1.1 (Asymmetric Signup/Cancel), § 2.1.2 (Cancellation Maze)                         |
| Hidden auto-renewal                             | OES § 2.2.1 (Hidden Renewal)                                                               |
| Free trial that converts without warning        | OES § 2.2.2 (Free-Trial Conversion Trap), § 3.5.2 (Forced Continuity)                       |
| Features removed from your product via update   | OES § 8.2.3 (Feature Removal via OTA), § 2.3.3 (Subscription Requirements for Core Functions) |
| Forced arbitration / class-action waiver        | OES § 2.6.1 (Mandatory Arbitration Clause)                                                  |
| Confirmshaming opt-outs                         | OES § 3.3.1 (Confirmshaming)                                                               |
| Pre-checked consent boxes                       | OES § 3.3.4 (Pre-Checked Boxes), § 5.1.1 (Bundled Consent)                                 |
| Fake countdown / scarcity                       | OES § 3.2.1 (Fake Countdown Timer), § 3.2.2 (False Scarcity)                                |
| Privacy Zuckering / dark privacy defaults       | OES § 3.4.2 (Privacy Zuckering)                                                            |
| Cookie banner dark patterns                     | OES § 3.4.4 (Cookie-Consent Dark Patterns)                                                 |
| Infinite scroll / autoplay engagement traps     | OES § 3.6.2, § 3.6.3, § 3.8 (Engagement-Addiction Optimization)                             |
| Selling user data to brokers                    | OES § 4.10.1 (Data Sale to Brokers)                                                        |
| Shadow profiling of non-users                   | OES § 4.2.1 (Shadow Profiling)                                                             |
| Covert workplace monitoring                     | OES § 4.6 (Worker / Workplace Surveillance)                                                |
| Children's data collection                      | OES § 4.8 (Children's Data Collection)                                                     |
| Breach notification delayed                     | OES § 4.12.1 (Breach Notification Delay)                                                   |
| Algorithmic firing without appeal               | OES § 6.2.1 (Algorithmic Deactivation Without Appeal)                                       |
| AI marketed as more capable than it is          | OES § 6.4.1 (AI Capability Misrepresentation)                                              |
| Misleading "natural / clean / eco" claims       | OES § 7.3.1 (Vague Eco Claims)                                                             |
| Carbon offset greenwashing                      | OES § 7.3.2 / § 14.2.1 (Carbon-Offset Greenwashing)                                         |
| Astroturfing / fake reviews                     | OES § 7.6.1 (Astroturfing), § 7.6.2 (Fake-Review Generation)                                |
| Undisclosed influencer / sponsored content      | OES § 7.7 (Undisclosed Sponsored Content)                                                  |
| Recall delayed despite known defect             | OES § 8.1.1 (Recall Delay)                                                                 |
| Planned obsolescence / repair restriction       | OES § 8.2 (Planned Obsolescence), § 8.3 (Repair Restriction)                                |
| Banking / healthcare / store closes in your area | OES § 9.1.1 (Service Desert Creation)                                                      |
| Algorithmic redlining / steering                | OES § 9.2 (Algorithmic Discrimination)                                                     |
| Inaccessible interface                          | OES § 9.4.1 (Digital Accessibility Failures)                                               |
| Marketing addictive products to minors          | OES § 10.1 (Predatory Targeting of Children & Minors)                                      |
| Targeting people on self-exclusion lists        | OES § 10.3 (Self-Exclusion Sabotage)                                                       |
| Worker misclassification                        | OES § 11.1.1 (Forced Contractor Status)                                                    |
| Wage theft / tip appropriation                  | OES § 11.2 (Wage Theft)                                                                    |
| Whistleblower retaliation                       | OES § 11.8.2 (Whistleblower Retaliation), § 15.1.1                                          |
| Predatory pricing or killer acquisition         | OES § 12.1 / § 12.2                                                                        |
| Self-preferencing on a platform                 | OES § 12.3 (Self-Preferencing on Owned Platforms)                                           |
| Forced labor in supply chain                    | OES § 13.2.1 (Forced-Labor Sourcing)                                                       |
| Polluting facility sited in vulnerable area     | OES § 14.4.1 (Polluting-Facility Siting)                                                   |
| NDAs hiding public harm                         | OES § 15.1.2 (NDAs Hiding Public Harm)                                                     |
| Ethics theater (boards without authority)       | OES § 15.2.1 (Ethics Theater)                                                              |
| Revolving door regulator-to-industry            | OES § 15.4 (Revolving Door)                                                                |
| Trade-secret claims to block disclosure         | OES § 15.8.4 (Trade-Secret Overclaiming)                                                   |
| Taxi quoting a tourist a flat rate above the meter | OES § 1.2.5 (Tourist-Targeted Overcharging)                                              |
| Taxi shouting at or blocking visitors at a station | OES § 3.5.5 (Aggressive In-Person Solicitation)                                          |
| Theme park selling $10 fountain drinks          | OES § 1.4.10 (Captive-Venue Concession Markup)                                              |
| Stadium banning outside water bottles           | OES § 1.4.11 (Outside-Food / Drink Prohibition)                                             |
| Restaurants pricing people out of social meals  | OES § 1.4.12 (Cultural-Practice Pricing-Out)                                                |
| POS terminal defaulting to 25% tip              | OES § 1.9.1 (Pre-Selected Default Tip Percentages)                                          |
| Tip prompt at self-checkout or retail           | OES § 1.9.2 (Tip Solicitation Outside Service Contexts)                                     |
| Suggested tip calculated on tax-inclusive total | OES § 1.9.3 (Tip-on-Tax / Tip-on-Pre-Discount Total)                                        |
| Taxi cartel blocking rideshare from airport curb | OES § 12.6.6 (Operator-Cartel Pickup-Zone Exclusion)                                       |

---

## Appendix A — Glossary

| Term                                  | Definition                                                                                                                                                       |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Astroturfing**                      | Creating fake grassroots campaigns or paid "independent" voices to simulate public support.                                                                      |
| **Audit theater**                     | Conducting pre-announced or scope-restricted audits that allow temporary remediation without follow-up or worker-driven monitoring.                              |
| **Bait-and-switch**                   | Advertising one offering and substituting a different (typically inferior or more expensive) one after the user commits.                                          |
| **Bundled consent**                   | Combining unrelated permissions (e.g., basic functionality plus marketing tracking) into a single all-or-nothing choice.                                         |
| **Cancellation maze**                 | A multi-step or obstructive cancellation flow designed to discourage exit even after the user has decided to leave.                                              |
| **Capability misrepresentation**      | Marketing a product or AI system as more capable, autonomous, or reliable than the evidence supports.                                                            |
| **Captive-venue markup**              | Extreme markups on essentials inside a venue that prohibits outside alternatives, exploiting the inability to leave and return.                                  |
| **Carbon-offset greenwashing**        | Claiming carbon neutrality through low-quality, non-additional, or unverifiable offsets while absolute emissions continue to rise.                               |
| **Confirmshaming**                    | Using guilt-inducing language to discourage opt-outs ("No thanks, I don't want to save money").                                                                  |
| **Consent fatigue**                   | Overwhelming users with repeated or fragmented consent requests so that meaningful choice degrades into reflexive acceptance.                                    |
| **Cross-collateralization**           | Applying unrecouped balances from one project to withhold royalties earned from another, trapping artists in debt across their catalog.                          |
| **Cultural-practice pricing-out**     | Raising prices on items central to a society's cultural rituals beyond cost basis, making participation in those rituals economically inaccessible.              |
| **Dark pattern**                      | A user interface designed to trick users into actions they did not intend.                                                                                      |
| **Data minimization**                 | The principle that only data necessary for a specific stated purpose should be collected and retained.                                                            |
| **Deactivation without due process**  | Terminating or suspending a user's or worker's platform access based on automated signals without human review or meaningful appeal.                              |
| **Drip pricing**                      | Revealing fees incrementally during checkout so the headline price understates the total.                                                                         |
| **Engagement-addiction design**       | Engineering feeds, notifications, and rewards to maximize time-on-platform via variable reinforcement and the elimination of stopping cues.                      |
| **Enshittification**                  | Deliberate, staged platform degradation in which value is shifted from users, then from third parties, to the platform's owners (term coined by Cory Doctorow).  |
| **Ethics theater**                    | Establishing internal ethics boards or review teams with no decision-making authority, whose recommendations are routinely overridden.                            |
| **Evergreening**                      | Using minor patent modifications or patent thickets to extend monopoly protection beyond the original innovation.                                                |
| **Fingerprinting**                    | Identifying users via device or browser characteristics rather than cookies, often to circumvent privacy controls.                                               |
| **FPIC**                              | "Free, Prior, and Informed Consent" — the standard for engagement with indigenous communities on land-use and development decisions.                              |
| **Forced arbitration**                | Contract clauses requiring private arbitration and waiving access to courts or class actions.                                                                    |
| **Greenwashing**                      | Marketing products, services, or operations as environmentally responsible without substantiated, verifiable basis.                                              |
| **Junk fees**                         | Mandatory fees not disclosed alongside the headline price; sometimes labeled "service," "convenience," or "regulatory" fees.                                     |
| **Killer acquisition**                | Acquiring a competitor primarily to discontinue its product, absorb its talent, or prevent its alternative from reaching market.                                  |
| **Loss-disguised-as-win**             | Audio-visual cues that frame a partial loss as a win, exploiting cognitive bias in gambling and gaming.                                                          |
| **Microtransaction fatigue**          | Per-action paid features that accumulate well beyond the advertised subscription cost.                                                                            |
| **MFN / price-parity**                | Most-favored-nation contractual terms that prohibit a seller from offering lower prices on other channels.                                                       |
| **Misclassification**                 | Classifying a worker as an independent contractor when the role legally meets the definition of employment.                                                      |
| **NDAs hiding public harm**           | Use of non-disclosure agreements to suppress information about environmental, health, or safety risks the public has a right to know.                            |
| **Open-source bait-and-switch**       | Building market position on an open license, then transitioning to proprietary licensing once dominant.                                                          |
| **Parts pairing**                     | Software-locked component matching that prevents third-party or self-installed parts from functioning even when physically compatible.                            |
| **Payola**                            | Undisclosed payment for editorial placement, playlist position, or algorithmic boosting.                                                                          |
| **Predatory pricing**                 | Pricing below cost to drive competitors out of business before raising prices.                                                                                   |
| **Privacy Zuckering**                 | Defaulting privacy controls to maximum data sharing and burying granular controls.                                                                               |
| **Productivity scoring**              | Quantifying employee output via mouse activity, idle time, or app switching, and using the resulting score in employment decisions.                              |
| **Proxy discrimination**              | Using ostensibly neutral inputs (ZIP code, occupation, shopping patterns) that correlate with protected attributes to set rates, scores, or eligibility.          |
| **Purpose creep**                     | Using data for purposes beyond what the user consented to when the data was collected.                                                                            |
| **Recall delay**                      | Delaying a product recall despite internal knowledge of a defect to avoid financial impact.                                                                       |
| **Recoupment manipulation**           | Structuring royalty accounting to delay or avoid payment through inflated expense deductions or cross-collateralization.                                         |
| **Reverse redlining**                 | Targeting minority neighborhoods for predatory loan products with unfavorable terms.                                                                              |
| **Right to repair**                   | The principle that owners of products should have access to the parts, schematics, diagnostics, and tools needed to repair them.                                  |
| **Roach motel**                       | A pattern in which entry is easy and exit is deliberately difficult.                                                                                              |
| **Self-preferencing**                 | A platform giving its own products or services unfair advantages over third-party alternatives that compete on the same surface.                                  |
| **Service desert**                    | A geographic area abandoned by an essential service (banking, grocery, healthcare, transit) for reasons unrelated to genuine demand.                              |
| **Shadow profile**                    | A behavioral, demographic, or social-graph profile built about an individual who has never created an account.                                                    |
| **Shrinkflation**                     | Reducing product quantity, weight, or volume while keeping price (and often packaging) the same, without conspicuous disclosure.                                  |
| **SLAPP**                             | Strategic Lawsuit Against Public Participation — abusive litigation used to silence critics, journalists, or whistleblowers.                                      |
| **Steering (housing)**                | Directing buyers or renters toward or away from neighborhoods based on protected-class characteristics.                                                          |
| **Sunsetting without refund**         | Shutting down an online product and rendering purchased content permanently inaccessible without offering refund or offline alternative.                          |
| **Surge pricing on essentials**       | Algorithmically raising prices on essential goods or services (medicine, transport, formula) during demand or supply shocks.                                      |
| **Telemetry misrepresentation**       | Claiming software telemetry is "anonymous" or "crash-only" when the data is sufficient to identify or re-identify users.                                          |
| **Tier degradation**                  | Reducing the value of an existing subscription tier — moving features behind higher-priced tiers, adding ads, or throttling quality.                              |
| **Tip creep**                         | The migration of tip prompts into transaction contexts that historically did not involve tipping (counter pickup, retail, self-checkout, automated kiosks).      |
| **Tourist pricing**                   | Charging higher prices to identifiable visitors who lack local knowledge of fair value.                                                                          |
| **Tying**                             | Conditioning the sale of one product on the purchase of another.                                                                                                  |
| **Wage theft**                        | Underpayment in any form — off-the-clock work, tip appropriation, denied overtime, sub-minimum-wage piece rates, or unauthorized deductions.                      |
| **Wash trading**                      | Executing trades between controlled accounts to fabricate volume or price activity.                                                                               |
| **Whistleblower retaliation**         | Adverse action against an employee who reports misconduct, fraud, or safety hazards through internal or external channels.                                       |
| **Zombie subscription**               | A subscription that continues to bill after cancellation, account deletion, or service discontinuation.                                                           |

---

## Appendix B — Regulatory Reference

This appendix is **informational only**: it lists laws and regulations that
cover ground similar to OES practices. The OES is not a legal standard, and
nothing here should be read as legal advice.

| Regulation                          | Jurisdiction          | Key requirements                                                                                       |
|-------------------------------------|-----------------------|--------------------------------------------------------------------------------------------------------|
| **GDPR**                            | EU / EEA              | Data minimization, purpose limitation, granular consent, right of access, portability, and erasure.    |
| **CCPA / CPRA**                     | California (US)       | Consumer right to know, delete, and opt out of sale or sharing of personal information.                |
| **COPPA**                           | United States         | Parental consent for collection of data from children under 13.                                        |
| **FERPA**                           | United States         | Protection of student educational records.                                                             |
| **HIPAA**                           | United States         | Protected health information (PHI) handling, security, and breach notification.                        |
| **FTC Act § 5**                     | United States         | Prohibition on unfair or deceptive acts or practices.                                                  |
| **FTC Click-to-Cancel Rule**        | United States         | Cancellation must be at least as easy as signup.                                                       |
| **FTC Funeral Rule**                | United States         | General Price List, itemized pricing, prohibition on misrepresenting required services.                |
| **FCRA / FACTA**                    | United States         | Accuracy, dispute, and disclosure requirements for consumer reports.                                   |
| **FDCPA**                           | United States         | Limits on debt-collection contact, threats, and disclosure.                                            |
| **Truth in Lending Act**            | United States         | Disclosure of credit terms and APR.                                                                    |
| **ECOA**                            | United States         | Prohibits credit discrimination based on protected characteristics.                                    |
| **Fair Housing Act**                | United States         | Prohibits housing discrimination based on protected characteristics.                                   |
| **ADA / Section 508 / WCAG**        | US / Int'l            | Accessibility requirements for physical and digital services.                                          |
| **OSHA**                            | United States         | Workplace safety, hazard communication, injury reporting.                                              |
| **Sherman Act / Clayton Act**       | United States         | Antitrust: predatory pricing, tying, exclusive dealing, mergers.                                        |
| **Robinson-Patman Act**             | United States         | Price discrimination in commerce.                                                                       |
| **TSCA**                            | United States         | Toxic substance regulation, reporting, and risk management.                                            |
| **CWA / SDWA**                      | United States         | Clean Water and Safe Drinking Water acts.                                                              |
| **CAA**                             | United States         | Clean Air Act emissions limits and reporting.                                                          |
| **EPCRA / EPA TRI**                 | United States         | Emergency planning and toxic release inventory reporting.                                              |
| **NLRA**                            | United States         | Workers' rights to organize and engage in concerted activity.                                          |
| **FMLA / FLSA**                     | United States         | Family/medical leave; minimum wage and overtime.                                                       |
| **EU Digital Services Act (DSA)**   | EU                    | Platform transparency, illegal-content removal, algorithmic accountability.                            |
| **EU Digital Markets Act (DMA)**    | EU                    | Gatekeeper obligations, anti-self-preferencing, interoperability.                                      |
| **EU AI Act**                       | EU                    | Risk-tiered AI obligations, transparency, prohibited practices.                                        |
| **EU Right to Repair Directive**    | EU                    | Repair access, parts availability, repairability scoring.                                              |
| **UNGPs on Business & Human Rights** | International        | Corporate responsibility to respect human rights.                                                      |
| **ILO Core Conventions**            | International         | Forced labor, child labor, freedom of association, non-discrimination.                                 |
| **OECD Guidelines for MNEs**        | International         | Standards for responsible multinational corporate conduct.                                             |

---

## Appendix C — Domain Index

The domain-agnostic taxonomy above replaces the prior per-industry domain
files. This index maps each industry to the OES sections most relevant to
its known patterns of harm. The mapping is illustrative — many sections will
also apply outside the listed domains.

| Industry                                | Most relevant OES sections                                                                                       |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------|
| **Accounting & Auditing**               | § 15.5, § 15.3.1–.2, § 15.4.3, § 15.6                                                                            |
| **Agriculture & Farming**               | § 11.10.4, § 13.2, § 13.5, § 14.3.4–.5, § 14.5, § 14.8.4, § 14.12, § 1.7.6, § 14.11.6                            |
| **Airlines & Aviation**                 | § 1.1.1, § 1.5.5, § 4.5.1, § 7.3.2, § 8.1.6, § 9.4.3                                                             |
| **Alcohol & Spirits**                   | § 7.5.1, § 7.5.4, § 10.1.1, § 11.10 (hospitality service), § 1.6.5                                               |
| **Artificial Intelligence**             | § 4.1.5, § 6.4, § 7.3.2, § 11.14.2, § 12.2.1, § 12.8.1, § 14.1.5, § 14.7.2, § 15.11.1                            |
| **Automotive**                          | § 1.3.2, § 1.7.5, § 2.4.7, § 2.4.10, § 4.4.2, § 4.11.7, § 6.4.5, § 8.1.1–.4, § 8.2, § 8.3                       |
| **Baby & Children's Products**          | § 4.8, § 7.2.6, § 8.1.5, § 10.1.1–.3, § 14.6.6                                                                   |
| **Beauty & Cosmetics**                  | § 1.6.1, § 5.2.2, § 7.2.8, § 7.3.1, § 7.3.10, § 7.8, § 13.5.1, § 14.6.1                                          |
| **Cannabis & CBD**                      | § 7.2.1, § 7.5.4, § 8.6.1–.3, § 10.1.1, § 14.7.5 (testing/contamination)                                         |
| **Chemical Manufacturing**              | § 11.6.3–.5, § 13.4.4, § 14.1.3, § 14.3.1, § 14.6.4–.5, § 14.10.2–.3, § 14.11.2, § 15.8.4                        |
| **Childcare & Daycare**                 | § 9.1.4, § 9.6.3–.4, § 10.11.5–.6, § 11.8.1, § 11.15.5, § 4.8.5                                                  |
| **Cleaning Services**                   | § 1.3.1, § 7.3.1, § 11.1.1, § 11.2.1, § 11.6.1–.3, § 11.8.1                                                      |
| **Cloud / SaaS**                        | § 2.3, § 2.4.1–.6, § 2.4.10, § 4.9.2, § 4.12.1, § 12.3.2, § 12.7.1                                               |
| **Construction & Contracting**          | § 1.3.3, § 8.5.1–.2, § 8.7.1, § 8.7.3, § 11.1.1, § 11.2.8, § 12.6.1, § 15.9.1–.2                                |
| **Consulting & Management**             | § 1.4.2–.4, § 11.3.3, § 11.9.1, § 15.6.2–.3                                                                      |
| **Credit Reporting**                    | § 4.10.1, § 4.12.1, § 5.4, § 6.1.2                                                                              |
| **Crypto & Blockchain**                 | § 7.3.2, § 7.6.4, § 8.9, § 12.6.4–.5, § 13.4.2–.3, § 14.7.3                                                      |
| **Cybersecurity**                       | § 4.12, § 5.5.5, § 7.3.1, § 10.6.2, § 11.8 (research disclosure)                                                 |
| **Data Brokers**                        | § 4.2, § 4.10, § 4.13, § 5.4, § 9.2.3                                                                            |
| **Dating Platforms**                    | § 2.1, § 2.3.6, § 3.6.1, § 4.4.1, § 9.3.4, § 10.9                                                                |
| **Debt Collection**                     | § 1.7.6, § 5.4.2, § 11.8 (worker context limited), regulatory: FDCPA                                            |
| **Defense & Military**                  | § 8.5.2, § 10.7.1, § 11.8.2–.3, § 15.7.3–.6, § 15.11.1                                                           |
| **Dental & Oral Care**                  | § 1.4.1, § 1.4.6, § 1.8.6, § 8.5.5–.6, § 9.1.1, § 9.6.5                                                          |
| **Digital Advertising**                 | § 4.3, § 7.9, § 7.10, § 9.2.3                                                                                    |
| **E-commerce & Marketplaces**           | § 1.1.3, § 7.6.2, § 8.5.3, § 8.8, § 12.3.1, § 12.7.2–.3                                                          |
| **Education & EdTech**                  | § 4.8.4, § 4.8.7, § 7.1.4, § 9.4.1, § 15.6.5                                                                     |
| **Energy & Utilities**                  | § 1.1.4, § 1.5.2, § 9.1.1, § 11.6 (oil/gas overlap), § 14.4.1, § 14.11.3                                         |
| **Entertainment & Streaming**           | § 2.3, § 8.4.1, § 9.4.5, § 11.13                                                                                 |
| **Event Ticketing**                     | § 1.1.1, § 3.2.2, § 7.4.2, § 12.5 (resale lock-in)                                                               |
| **Fashion & Apparel**                   | § 1.6.2, § 7.3.5, § 7.5.6, § 13.1.2, § 13.2.1                                                                    |
| **Film & Television**                   | § 7.4.5, § 7.5.6, § 11.13.1, § 11.14.5, § 11.15.7, § 7.7.6                                                       |
| **Financial Services**                  | § 1.7, § 1.8, § 4.10, § 5.4, § 6.2.3, § 10.2                                                                     |
| **Firearms & Weapons**                  | § 8.1.1, § 10.1.1, § 14.11.7                                                                                     |
| **Fitness & Gyms**                      | § 2.1, § 2.2.1–.2, § 4.5.5, § 4.11 (wearables), § 7.8.1                                                          |
| **Food & Beverage Manufacturing**       | § 1.6.1, § 7.2.7, § 8.1.1, § 8.6.6–.7, § 8.7.4, § 10.1.2–.3, § 13.5.1                                            |
| **Food Delivery**                       | § 6.2.1, § 6.3.1, § 11.1.1, § 11.2.2, § 11.6.9, § 12.3.3, § 12.7.4                                              |
| **Freelance & Gig Economy**             | § 6.2.1, § 6.3, § 11.1, § 11.4.1, § 11.5.2, § 11.16                                                              |
| **Funeral & Death Care**                | § 1.4.7, § 1.7.8, § 9.3.3, § 10.4                                                                                |
| **Gambling & Betting**                  | § 3.6.8–.9, § 4.10, § 7.11.1–.2, § 10.1.5–.7, § 10.3.1–.2                                                        |
| **Gaming**                              | § 2.3.7–.8, § 3.6.1, § 4.8.1, § 8.4.1, § 8.4.3–.4, § 11.3.2, § 11.11.1, § 11.12.3                               |
| **Government & Public Services**        | § 6.6.1, § 9.1.1, § 9.5, § 9.6.1, § 11.8 (whistleblower), § 15.7, § 15.8.1–.3                                    |
| **Grocery Stores**                      | § 1.6.1, § 1.6.4, § 7.3.1, § 8.6.6, § 9.1.1                                                                      |
| **Healthcare**                          | § 1.1.2, § 1.4.6, § 1.8.7, § 4.10.2, § 6.1.3, § 6.4.6, § 8.2.5, § 9.1.1, § 9.6, § 12.8.2–.3                      |
| **Home Appliances & Electronics**       | § 8.2, § 8.3, § 4.11.1, § 4.11.6, § 14.7                                                                         |
| **Home Services & Contractors**         | § 1.2.2, § 1.3.3, § 1.4.5, § 8.5, § 11.1.1, § 11.6, § 15.9                                                       |
| **Hospitality & Hotels**                | § 1.1.2, § 1.2.5, § 1.4.6, § 1.8.3, § 4.11.5, § 11.5.1, § 11.6.11, § 12.5.1                                     |
| **HR & Recruitment**                    | § 4.6, § 4.7.5, § 6.1.1, § 11.13                                                                                  |
| **Insurance**                           | § 1.5.2–.3, § 5.1.6–.7, § 6.1.2, § 9.1.2                                                                         |
| **Internal Company Ethics**             | § 4.1.1–.4, § 4.6, § 5.1.1, § 5.1.4, § 5.3, § 11.8.4, § 15.1, § 15.2                                            |
| **Legal Services**                      | § 1.4.2–.3, § 5.2.6, § 9.5.4, § 15.6.1, § 15.6.6                                                                 |
| **Logistics & Shipping**                | § 1.1.4, § 11.1.1, § 14.1.1, § 14.7.5, § 8.8.6                                                                   |
| **Media & Journalism**                  | § 7.7.7, § 9.9.1, § 11.13, § 11.15.3                                                                              |
| **Mental Health**                       | § 4.10.2–.3, § 6.1.5, § 9.6.6, § 10.10.1–.4, § 10.10.7                                                           |
| **Mining & Extraction**                 | § 9.8, § 11.6.7, § 14.3.3, § 14.5.1, § 14.9.1–.2, § 14.10.1, § 15.7.14–.15                                       |
| **Mobile Carriers & Telecom**           | § 1.1.4, § 1.5.2, § 2.4.8–.9, § 4.11.4, § 12.7.1                                                                 |
| **Music Industry**                      | § 7.6.5, § 11.2.9, § 11.12.3, § 12.2.3, § 12.7.5, § 12.8.5–.7                                                    |
| **Nonprofits & Charities**              | § 7.4.6, § 15.6, § 11.8.2 (whistleblower)                                                                        |
| **Oil & Gas**                           | § 9.8, § 11.6.8, § 14.1.2, § 14.3.6, § 14.9.1, § 14.9.3, § 14.11.1, § 14.11.5                                    |
| **Personal Care & Hygiene**             | § 7.3.1, § 7.8.3, § 9.3.4, § 14.6.4                                                                              |
| **Pest Control**                        | § 8.7.4, § 14.3.4, § 14.8                                                                                        |
| **Pet Industry**                        | § 7.2.6, § 8.1.1, § 10.11, § 13.3.2                                                                              |
| **Pharma & Biotech**                    | § 7.2.5, § 8.1.1, § 8.6.5, § 10.10.6–.8, § 12.8.2–.3                                                             |
| **Plumbing & Home Repair**              | § 1.2.2, § 1.4.1, § 1.4.5, § 8.5.4, § 11.1.1                                                                     |
| **Podcasting & Media**                  | § 7.7.2–.5, § 9.4.5                                                                                              |
| **Prison & Corrections**                | § 4.10.5, § 10.8, § 12.7.6, § 15.8.5–.6, § 15.8.8                                                                |
| **Private Equity & Venture**            | § 11.4.3–.4, § 11.11.2–.4, § 12.2.2, § 15.7.11–.13                                                               |
| **PR & Marketing**                      | § 7.4, § 7.6.1, § 7.6.2, § 7.9.5, § 11.15.1–.3, § 15.4.1                                                         |
| **Public Transportation**               | § 8.4.5, § 9.1.1, § 9.1.3, § 9.4.2, § 14.4.2                                                                     |
| **Publishing**                          | § 9.9.3–.4, § 11.15.8, § 12.2.4, § 12.5.4, § 12.8.4, § 12.8.8                                                    |
| **Real Estate**                         | § 9.2.1–.5, § 9.3.1, § 9.4.4, § 1.8.3                                                                            |
| **Renewable Energy**                    | § 7.3.2, § 9.8, § 13.2.5–.8, § 14.7.6                                                                            |
| **Restaurants & Food Service**          | § 1.4.12, § 1.9.1, § 1.9.3, § 7.2.7, § 7.3.1, § 11.2.2–.4, § 13.3.3                                              |
| **Ride-Hailing & Mobility**             | § 6.2.1, § 6.3, § 9.4.7, § 11.1.1, § 11.6.9, § 11.14.4, § 12.1.2, § 12.6.6                                       |
| **Seafood & Fisheries**                 | § 1.6.6, § 7.5.2–.3, § 11.10.1–.3, § 13.1.5–.7, § 14.5.3–.4, § 14.5.6–.7                                         |
| **Search Engines**                      | § 6.4.3, § 9.9.2, § 12.3.4, § 12.4.2–.3                                                                          |
| **Senior Care & Assisted Living**       | § 1.1.2, § 10.5                                                                                                  |
| **Shipping & Freight**                  | § 1.1.4, § 11.1.1, § 11.3.5, § 11.7.5, § 14.1.1, § 14.7.5                                                        |
| **Social Media**                        | § 3.6, § 3.8, § 4.2.1, § 4.7.1–.3, § 4.8.1–.3, § 10.1.10, § 11.14.1                                              |
| **Space & Aerospace**                   | § 12.4.4, § 14.1.7–.8, § 14.5.9, § 14.9.5–.6, § 14.10.5, § 15.7.10                                              |
| **Sports & Athletics**                  | § 11.14.3, § 15.7.9, § 15.10.1–.3                                                                                |
| **Staffing & Temp Agencies**            | § 11.1.2–.5, § 11.2.5, § 11.7.2, § 11.7.4, § 11.16.4                                                             |
| **Supplements & Alternative Medicine**  | § 7.2.1–.2, § 7.7.1, § 8.6.4, § 10.2 (vulnerable patient targeting)                                              |
| **Surveillance Technology**             | § 4.6.6, § 6.1.4, § 6.1.7, § 15.8.7, § 15.8.9, § 15.9.3, § 15.11                                                |
| **Tax Preparation**                     | § 1.7.7, § 5.2.5, § 9.5.2, § 10.2.2–.3, § 15.3.3                                                                 |
| **Taxi & Curbside Ground Transport**    | § 1.2.5, § 3.5.5, § 12.6.6 (plus rows shared with Ride-Hailing)                                                  |
| **Theme Parks & Captive-Venue Entertainment** | § 1.4.10, § 1.4.11                                                                                          |
| **Tobacco & Vaping**                    | § 4.11.3, § 7.2.3–.4, § 7.2.10, § 10.1.1, § 10.3.3                                                               |
| **Travel & Tourism**                    | § 1.1.5–.6, § 1.2.5, § 3.5.5, § 7.5.5, § 9.7.4–.5, § 13.3.1                                                      |
| **Veterinary Medicine**                 | § 1.4.6, § 4.10.1, § 9.1.1, § 10.11.1, § 14.8.4                                                                  |
| **Waste Management**                    | § 1.8.1 (cramming), § 7.3.6, § 14.1.1, § 14.4.1, § 14.7.4                                                        |
| **Water & Sewage Utilities**            | § 9.1.1, § 9.5.3, § 14.3.2, § 14.3.7–.9                                                                          |
| **Wedding & Event Planning**            | § 1.4.7, § 8.5 (substitution), § 11.2.3, § 15.6.4                                                                |

---

# Part III — Frequently Asked Questions

## What is the Open Ethics Standard?

The Open Ethics Standard (OES) is a structured catalog of unethical
practices in software, technology, and consumer-facing industries. It
provides:

- a **taxonomy** of practices, organized by harm category;
- **domain-agnostic descriptions** so the same practice can be recognized
  across industries;
- **example domains** showing where the practice has been observed;
- **stable reference numbers** so any specific practice can be cited
  precisely.

It exists so that ordinary descriptions like "they tricked me into a
subscription" can be replaced with precise, citable claims like "the
cancellation flow is a Roach Motel under OES § 2.1.1."

## Is the OES legally binding?

No. The OES is **not** a law, regulation, or legally enforceable contract.
It is a voluntary reference catalog. Many practices listed are perfectly
legal in many jurisdictions; others are already prohibited under existing
law (see Appendix B). The OES neither asserts nor presumes legal liability.

The point of the OES is to make practices **nameable and citable** —
useful to journalists, regulators, customers, employees, researchers, and
litigators alike — not to certify, license, or enforce.

## Why was the OES created?

Many harmful corporate behaviors persist because they are difficult to
describe with precision. Existing frameworks tend to be either too vague
("don't be evil") or too narrow (covering only privacy, only accessibility,
only one industry). The OES collects the full breadth of patterns into a
single shared vocabulary, drawn from regulatory frameworks, dark-pattern
research, investigative journalism, and lived experience across industries.

## How is the OES different from a certification like B Corp?

The OES is not a certification. There is no membership, no fee, no audit,
no badge, and no governing body that issues approval. Anyone can cite the
OES; companies cannot "be OES certified." If you are looking for a
certification with auditing and a membership process, consider B Corp,
ISO standards, or sector-specific equivalents — the OES is complementary,
not competitive, with those programs.

## Is the OES "anti-business"?

No. The OES describes specific practices that harm users, workers, or
communities. It does not condemn profit, scale, advertising, subscriptions,
or monetization in general. The catalog distinguishes carefully between
ordinary commercial behavior (transparent subscription pricing, tiered
plans with clear differences, paid features) and the specific manipulations
listed (hidden auto-renewal, cancellation mazes, surge pricing on essentials).

## How do I cite a specific practice?

Cite the section number with the prefix `OES §`. Examples:

> "The cancellation flow violates **OES § 2.1.2** (Cancellation Maze)."
>
> "This company sells health-inferred audience segments to advertisers
> (**OES § 4.7.2**) and to insurers (**OES § 4.10.1**)."

A single behavior often violates several sections. List them all separated
by commas.

## What's the right way to use the OES in writing or argument?

The OES is most useful as a **descriptive shorthand**. When you cite a
section, you are saying:

1. there is a recognized name for the behavior in question;
2. it is documented in a public reference;
3. anyone can look up the description and decide whether your application
   of the label is fair.

You are **not** saying the behavior is illegal, that the company has been
"convicted" of anything, or that the OES has authority to sanction. You
are saying that the behavior fits a published, reasoned description.

## Can I reuse or change the OES?

You may share the standard in its original form with attribution under
[CC BY-ND 4.0]. Modified versions may not be distributed. Changes to the
canonical standard are proposed by pull request and take effect when approved
and merged by a maintainer. See [the license](LICENSE-OPEN-ETHICS-STANDARD.md).

[CC BY-ND 4.0]: https://creativecommons.org/licenses/by-nd/4.0/

## How is the OES updated?

The OES uses semantic versioning:

- **Major** (X.0.0) — significant restructuring, removal or renumbering of
  categories.
- **Minor** (1.X.0) — new practices, new subsections, expanded definitions.
- **Patch** (1.0.X) — clarifications, typo fixes, expanded examples.

Reference numbers are intended to be **stable across patch and minor
versions**. If a number must change, the prior number is recorded in the
changelog and (where possible) preserved as an alias.

## Who maintains the OES?

The OES is maintained as an open, community-contributed reference. See the
**Contributing** section below for how to propose additions or amendments.

## What if the example for a practice doesn't match my industry?

The Examples column in each row is **illustrative, not exhaustive**. A
practice listed under "automotive" may also be common in software, and
vice versa. The domain-agnostic description is what governs; the examples
are there to help readers recognize the pattern, not to limit it.

## How do I report a practice the OES doesn't yet cover?

Open a discussion or pull request on the project repository describing the
practice, the harm, and at least one concrete example. See the
**Contributing** section below for the format expected for new practice
proposals.

---

# Part IV — Contributing

To propose a change, edit the relevant part of this file and open a pull
request. Do not replace the whole document. Sources for the reasoning are
welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the required format.

The canonical standard changes only when a maintainer approves and merges a
pull request. The standard text is licensed under [CC BY-ND 4.0]; see
[its license terms](LICENSE-OPEN-ETHICS-STANDARD.md).

[CC BY-ND 4.0]: https://creativecommons.org/licenses/by-nd/4.0/

# Part V — Code of Conduct

Project participation follows the [Code of Conduct](CODE_OF_CONDUCT.md).
