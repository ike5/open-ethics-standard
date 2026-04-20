# Search Engines & AI Assistants — Domain-Specific Ethics Standards

**Domain:** Search Engines & AI Assistants (Web Search, AI-Powered Answer Engines, Voice Assistants)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to search engines and AI assistants that serve as primary gateways to information for billions of people. These platforms shape what users see, believe, and decide; unethical practices—result manipulation, misinformation amplification, privacy violations, and monopolistic exclusion—distort knowledge access, undermine democratic discourse, and exploit user trust at civilization-scale.

---

## Category 1: Result Manipulation

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SE-1.1 | **Preferencing Own Services in Results** | Ranking the platform's own products, services, or content above superior third-party alternatives, leveraging search dominance to capture adjacent markets | Self-preferencing; market distortion  |
| SE-1.2 | **Paid Ranking Without Clear Disclosure** | Displaying paid or sponsored results in positions and formats that make them indistinguishable from organic results, deceiving users about result neutrality | Deceptive advertising; trust exploitation |
| SE-1.3 | **Political Bias in Ranking**     | Systematically demoting or elevating political content based on editorial preferences rather than relevance or authority, shaping public discourse without accountability | Democratic manipulation; viewpoint discrimination |
| SE-1.4 | **Suppressing Competitor Content** | Deliberately reducing the visibility of content from competing services, news outlets, or platforms in organic results | Anti-competitive suppression; censorship |
| SE-1.5 | **AI Answer Sourced Without Attribution** | Generating AI assistant answers by extracting and summarizing publisher content without visible attribution, depriving creators of traffic and recognition | Content appropriation; creator disintermediation |

---

## Category 2: Misinformation

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SE-2.1 | **Amplifying Conspiracy Theories for Engagement** | Algorithmically promoting sensational, conspiratorial, or emotionally charged content because it generates clicks, regardless of factual accuracy | Truth distortion; engagement exploitation |
| SE-2.2 | **Slow Response to Coordinated Disinformation** | Taking days or weeks to identify and reduce the reach of coordinated disinformation campaigns while they actively cause real-world harm | Negligence; harm amplification          |
| SE-2.3 | **AI Hallucination in Assistant Responses** | Presenting AI-generated answers with unwarranted confidence even when fabricated, without clear indicators of uncertainty or verification mechanisms | False authority; misinformation by automation |
| SE-2.4 | **Authoritative Source Demotion** | Algorithmically ranking engagement metrics over source authority, causing established, fact-checked sources to appear below less reliable alternatives | Epistemic degradation; authority erosion |
| SE-2.5 | **Health and Safety Misinformation** | Failing to prioritize authoritative health information—medical guidelines, emergency procedures—over user-generated or commercially motivated alternatives | Public health endangerment            |

---

## Category 3: Privacy

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SE-3.1 | **Search History Retention Beyond Necessity** | Storing detailed search histories for years or indefinitely to build advertising profiles, far beyond what is needed for service improvement | Surveillance accumulation; purpose creep |
| SE-3.2 | **Location Query Tracking**       | Recording and associating location-specific search queries with user identities to build detailed geographic behavior profiles | Location privacy violation; spatial surveillance |
| SE-3.3 | **Cross-Device Search Linking**   | Linking search activity across a user's devices—phone, tablet, desktop—into unified profiles without explicit, informed consent | Identity stitching; consent bypass    |
| SE-3.4 | **AI Conversation Data Harvesting** | Retaining and using AI assistant conversation data—including sensitive personal disclosures—for model training, profiling, or advertising without clear opt-in | Conversational exploitation; intimacy violation |

---

## Category 4: Market Power

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SE-4.1 | **Search Monopoly Leveraging into Adjacent Markets** | Using dominant search position to force adoption of complementary services—maps, shopping, travel—undermining competition through default placement | Monopoly leveraging; market foreclosure |
| SE-4.2 | **Ad Market Manipulation**        | Operating the dominant search ad marketplace while also being the largest buyer, creating conflicts of interest that inflate costs for advertisers | Market manipulation; conflict of interest |
| SE-4.3 | **Publisher Dependency Exploitation** | Leveraging the necessity of search traffic to impose unilateral terms on publishers—revoking ad revenue shares, requiring specific formatting, mandating free content access | Coercive dependence; extractive terms |
| SE-4.4 | **Default Search Payment for Exclusivity** | Paying device manufacturers, browsers, or operating systems to set the platform as the default search engine, foreclosing competition through financial rather than merit-based means | Anti-competitive exclusivity; market foreclosure |
| SE-4.5 | **Ad Pricing Opacity**            | Providing insufficient transparency into how ad pricing, minimum bids, and quality scores are determined, leaving advertisers unable to evaluate value or detect manipulation | Pricing deception; market opacity     |

---

## Category 5: Access

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| SE-5.1 | **Search Quality Degradation for Non-Premium Users** | Providing lower-quality, ad-saturated results to non-logged-in or non-paying users while reserving cleaner results for premium subscribers | Information inequality; tiered truth  |
| SE-5.2 | **AI Feature Paywalling Essential Information** | Placing AI-powered answers for essential queries—health, legal, emergency—behind a paywall, restricting access to life-critical information | Information access denial; paywall on necessity |
| SE-5.3 | **Regional Content Censorship**   | Complying with government censorship demands to suppress search results in specific regions without disclosing the scope of suppression to affected users | Censorship complicity; transparency failure |
| SE-5.4 | **Accessibility Gaps for Disabled Users** | Failing to ensure search interfaces and AI assistant interactions are fully accessible to users with visual, motor, or cognitive disabilities | Digital exclusion; accessibility discrimination |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Maintain result integrity** — clearly label all paid and sponsored results, rank organic results by relevance and authority rather than commercial interest, and audit algorithms for self-preferencing bias quarterly.
2. **Combat misinformation** — prioritize authoritative sources for health, safety, and civic information, implement rapid-response protocols for coordinated disinformation, and clearly indicate AI response uncertainty.
3. **Protect user privacy** — allow users to delete search history on demand, default to minimal retention periods, require explicit opt-in for AI conversation data use, and provide clear cross-device linking controls.
4. **Exercise market power responsibly** — provide transparent ad pricing and quality score methodologies, refrain from default search exclusivity payments, and offer publishers fair, negotiated revenue terms.
5. **Ensure equitable access** — provide consistent search quality regardless of user tier, keep essential health and safety information freely accessible, disclose government-mandated result suppression, and maintain WCAG 2.1 AA compliance across all interfaces.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
