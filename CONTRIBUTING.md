# Contributing to the Open Ethics Standard

Thank you for your interest in contributing to the Open Ethics Standard (OES). This framework is designed to be a living document that evolves through community input, real-world application, and ongoing refinement.

## Contribution Philosophy

The OES is built on the same principles it advocates: **transparency, user primacy, and thoughtful deliberation**. Contributions should enhance the standard's clarity, applicability, and enforceability while maintaining its core commitment to ethical software practices.

## Discussion Before Pull Requests

**All substantive changes must begin with a Discussion or Issue before submitting a Pull Request.**

This approach ensures:

1. **Community input** — Others may have valuable perspectives or identify unintended consequences
2. **Consensus building** — Major changes should reflect community agreement, not unilateral decisions
3. **Quality improvements** — Early feedback often leads to better final proposals
4. **Reduced wasted effort** — Discussing ideas first prevents rejected PRs after significant work

### When to Open a Discussion vs. Issue

| Use a **Discussion** when... | Use an **Issue** when... |
|------------------------------|--------------------------|
| Exploring a new idea or direction | Proposing a specific new provision |
| Seeking community feedback on a concept | Reporting a real-world OES violation |
| Asking questions about interpretation | Suggesting a concrete amendment |
| Discussing broad strategic direction | Identifying errors or inconsistencies |

## Types of Contributions

### 1. Proposing New Provisions

New provisions expand the OES to address practices not currently covered.

**Process:**
1. Open an issue using the **"Propose New Provision"** template
2. Include the proposed reference number, text, and rationale
3. Provide real-world examples demonstrating the need
4. Participate in discussion and refine based on feedback
5. Once consensus is reached, submit a PR with the new provision

**Criteria for new provisions:**
- Addresses a documented unethical practice not covered by existing provisions
- Is specific and enforceable, not vague or aspirational
- Includes clear examples and regulatory context where applicable
- Fits logically within the existing category structure

### 2. Suggesting Amendments

Amendments modify existing provisions for clarity, accuracy, or expanded scope.

**Process:**
1. Open an issue using the **"Suggest Amendment"** template
2. Specify the exact provision(s) affected (e.g., OES 1.2.5)
3. Provide both current and proposed text
4. Explain the rationale for the change
5. After discussion, submit a PR with the amendment

**Note:** Some provisions are protected under OES 17.2 and cannot be amended to users' detriment.

### 3. Reporting Violations

Documenting real-world violations helps establish the OES as a practical standard and creates a body of case studies.

**Process:**
1. Open an issue using the **"Report Violation"** template
2. Identify the company and specific practice
3. Cite the relevant OES provision(s) violated
4. Provide evidence (screenshots, documentation, links)
5. Suggest whether this reveals gaps in the current standard

**Important:** Violation reports should be factual and well-documented. Avoid speculation or unverifiable claims.

### 4. Documentation & Clarity Improvements

Typos, unclear language, formatting issues, and accessibility improvements are always welcome.

**Process:**
- For minor fixes (typos, formatting), you may submit a PR directly with a clear description
- For substantive rewrites or restructuring, open an issue first

### 5. Translations

Translating the OES into other languages expands its global reach.

**Process:**
1. Open a Discussion indicating the target language
2. Coordinate with other potential translators to avoid duplication
3. Submit translations in a new file: `OPEN-ETHICS-STANDARD.[language-code].md`
4. Include a note about translation date and translator

## Pull Request Guidelines

### Before Submitting

- [ ] An issue or discussion exists for this change (except minor fixes)
- [ ] The change has received community feedback
- [ ] You have read and followed the style guidelines below
- [ ] You have tested any reference number changes for consistency

### PR Format

**Title:** Use a clear, descriptive title
- `Add provision 1.2.7: Forced Account Linking`
- `Amend 3.1.2: Clarify purpose creep definition`
- `Fix: Correct typo in Section 5.2`

**Description:** Include:
- Link to the related issue/discussion
- Summary of the change
- Rationale for the approach taken
- Any open questions or alternatives considered

### Style Guidelines

**Reference Numbers:**
- Follow the existing hierarchical format (e.g., `1.2.7`, `5.10.3`)
- New provisions should use the next available number in their category
- Never reuse or reassign existing reference numbers

**Language:**
- Use clear, precise language
- Avoid jargon unless defined in the Glossary
- Write in present tense ("shall" not "will")
- Be specific and enforceable, not vague or aspirational

**Formatting:**
- Use Markdown tables consistently with existing format
- Include examples for new provisions
- Reference relevant regulations where applicable

## Versioning

The OES uses [Semantic Versioning](https://semver.org/):

| Version Change | When to Use | Example |
|----------------|-------------|---------|
| **Major** (X.0.0) | Breaking changes, significant restructuring, or removal of provisions | 1.0.0 → 2.0.0 |
| **Minor** (x.Y.0) | New provisions, non-breaking enhancements | 1.0.0 → 1.1.0 |
| **Patch** (x.y.Z) | Typos, clarifications, formatting fixes | 1.0.0 → 1.0.1 |

All changes must be documented in `CHANGELOG.md`.

## Review Process

1. **Initial Review** — Maintainers check for completeness and adherence to guidelines
2. **Community Feedback** — PR is open for community comment (minimum 7 days for substantive changes)
3. **Revision** — Author addresses feedback and makes necessary changes
4. **Final Review** — Maintainers verify all feedback has been addressed
5. **Merge** — Change is merged and version is updated

## Code of Conduct

All contributors must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and respectful environment for everyone.

## Questions?

If you're unsure how to contribute or where your idea fits, open a Discussion with the "Question" category. We're happy to help guide you through the process.

## Recognition

Contributors are recognized in:
- The `CHANGELOG.md` for their specific contributions
- The repository's contributor list

Thank you for helping build a more ethical software industry.

---

*This contribution guide is released under CC BY 4.0, consistent with the main OES document.*
