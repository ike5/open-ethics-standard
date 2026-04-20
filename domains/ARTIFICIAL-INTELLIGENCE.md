# Artificial Intelligence — Domain-Specific Ethics Standards

**Domain:** Artificial Intelligence (Foundation Models, Deployers, Tooling Platforms)  
**Version:** 2026.0.1  
**Date:** January 2026

---

## Purpose

This document extends the Open Ethics Standard (OES) to organizations that develop, deploy, or commercialize artificial intelligence systems. AI systems shape decisions affecting billions of people in employment, justice, health, and information access, and unethical practices in this domain amplify harm at unprecedented scale and speed.

---

## Category 1: Training Data Ethics

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| AI-1.1 | **Scraping Without Consent**      | Collecting personal data, creative works, or proprietary content from the internet for model training without the knowledge or permission of data subjects | Consent violation; data theft        |
| AI-1.2 | **Copyright Infringement**        | Incorporating copyrighted text, images, code, or media into training corpora without licensing or attribution, then competing with the original creators | Intellectual property violation; creator displacement |
| AI-1.3 | **Bias in Training Data**         | Building models on historically biased datasets without auditing or mitigation, producing outputs that perpetuate discrimination in hiring, lending, or law enforcement | Systemic harm amplification          |
| AI-1.4 | **Synthetic Data Contamination**  | Training successive models on AI-generated outputs without disclosure, creating quality degradation and hallucination loops while claiming improved performance | Data provenance fraud                |
| AI-1.5 | **Data Labeling Exploitation**    | Outsourcing data labeling to workers in low-wage regions under poor conditions, including exposure to traumatic content without adequate support | Labor exploitation; psychological harm |

---

## Category 2: Model Deployment

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| AI-2.1 | **Unexplained Decisions in Critical Domains** | Deploying AI in healthcare, criminal justice, housing, or employment without providing interpretable explanations for decisions affecting individuals | Opacity in life-impacting decisions   |
| AI-2.2 | **Capability Misrepresentation**  | Marketing AI systems as more capable, reliable, or autonomous than evidence supports, including claiming general intelligence for narrow systems | Deceptive marketing; misallocation of trust |
| AI-2.3 | **Red-Teaming Avoidance**         | Releasing models without rigorous adversarial testing, or conducting only superficial safety evaluations that fail to surface real-world harms | Negligent deployment                 |
| AI-2.4 | **Emergency Override Suppression** | Building autonomous systems without kill switches, human override mechanisms, or fail-safe defaults | Removing human control               |

---

## Category 3: Surveillance Applications

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| AI-3.1 | **Facial Recognition for Oppression** | Providing facial recognition or biometric surveillance technology to entities known to use it for political suppression, ethnic targeting, or mass monitoring | Enabling human rights violations     |
| AI-3.2 | **Predictive Policing Bias**      | Deploying crime prediction systems trained on historically biased policing data, directing over-policing to already targeted communities | Discriminatory enforcement           |
| AI-3.3 | **Worker Monitoring AI**          | Using AI to track keystrokes, movement, bathroom breaks, and productivity metrics to create constant surveillance environments for employees | Workplace privacy violation; coercion |
| AI-3.4 | **Emotion Recognition Pseudoscience** | Deploying affect recognition or emotion detection systems as if they are scientifically validated for hiring, security screening, or border control | Pseudoscientific discrimination      |

---

## Category 4: Environmental Impact

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| AI-4.1 | **Compute Energy Concealment**    | Failing to disclose the energy consumption, water usage, or carbon emissions associated with training and operating large AI models | Environmental accountability avoidance |
| AI-4.2 | **E-Waste from Hardware Churn**   | Cycling through GPU and accelerator hardware at rapid pace to maintain competitive advantage, without responsible recycling or lifecycle planning | Resource waste; toxic disposal       |
| AI-4.3 | **Carbon Offset Greenwashing**    | Claiming carbon neutrality through low-quality offsets while continuing to increase absolute energy consumption for model training | Misleading sustainability claims     |

---

## Category 5: Market Power

| Ref   | Practice                          | Description                                                        | Ethical Violation                     |
|-------|-----------------------------------|---------------------------------------------------------------------|---------------------------------------|
| AI-5.1 | **Ecosystem Lock-In**             | Designing AI platforms that make it technically or contractually difficult to migrate models, data, or workflows to competitors | Anti-competitive lock-in; user captivity |
| AI-5.2 | **Model-as-Service Extraction**   | Offering powerful models via API with terms that grant the provider ownership of user inputs, outputs, or fine-tuned derivatives | Data appropriation; extraction      |
| AI-5.3 | **Startup Acquisition to Kill Competition** | Acquiring AI startups solely to shutter their products, absorb their talent, or prevent competitive alternatives from reaching market | Anti-competitive elimination         |
| AI-5.4 | **Open Source Bait-and-Switch**   | Building market position on open-source releases, then transitioning core capabilities to proprietary, closed licenses once dominant | Community exploitation; trust betrayal |
| AI-5.5 | **Benchmark Gaming**              | Optimizing models for public benchmark leaderboards while degrading real-world performance, creating a false perception of superiority | Deceptive performance claims        |

---

## Compliance Guidelines

Organizations adopting this domain standard shall:

1. **Respect data rights** — obtain meaningful consent before using personal or copyrighted data in training; publish data provenance documentation; offer opt-out mechanisms.
2. **Ensure deployment accountability** — provide interpretable explanations for AI decisions in critical domains; conduct and publish red-team evaluations before release; maintain human override capabilities.
3. **Reject harmful surveillance** — refuse contracts where AI will be used for political suppression; audit predictive systems for discriminatory bias; prohibit emotion recognition in consequential decisions.
4. **Disclose environmental impact** — publish training energy consumption and carbon data; commit to efficiency targets; use verifiable rather than speculative offsets.
5. **Promote fair competition** — provide data and model portability; cease acquisitions designed to eliminate competition; honor open-source commitments.

---

*This domain standard is released under CC BY 4.0, consistent with the Open Ethics Standard.*
