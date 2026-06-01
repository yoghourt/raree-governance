# DOCUMENT_NAMING_CONVENTION.md — Raree Governance Document Naming Law

## Status

V1

## Applicability

This document defines naming conventions for **consumer repositories** of the Raree governance system.

Consumer repositories subject to this convention:

* `raree-show-admin`
* `raree-show-web`

This convention does NOT apply to `raree-governance` itself.

Reason: `raree-governance` is the governance authority source. Its internal document naming is determined by governance authorship requirements, not consumer naming conventions.

---

# 1. General Rules

All document filenames MUST use lowercase letters.

All document filenames MUST use hyphens (`-`) as word separators.

All document filenames MUST end with the `.md` extension.

Document filenames MUST NOT use underscores, spaces, or mixed case.

Document filenames MUST NOT be reused within the same document category, even after the original document is deprecated or archived.

---

# 2. ADR Naming

## Format

```text
NNN-short-kebab-name.md
```

Where:

* `NNN` is a zero-padded three-digit sequence number starting at `001`
* `short-kebab-name` is a concise lowercase hyphen-separated description of the decision

## Rules

ADR filenames MUST follow the format `NNN-short-kebab-name.md` exactly.

The sequence number `NNN` MUST be unique within the repository's ADR collection.

The sequence number `NNN` MUST NOT be reused, regardless of the ADR's lifecycle status.

The `short-kebab-name` MUST NOT exceed 5 hyphen-separated words.

## Examples

```text
001-provider-isolation.md
002-runtime-truth-freeze.md
003-bootstrap-pipeline.md
```

---

# 3. SPEC Naming

## Format

```text
spec-{domain}-{number}-{slug}.md
```

Where:

* `{domain}` is a lowercase domain identifier (e.g. `d1`, `d2`, `core`, `auth`)
* `{number}` is a zero-padded three-digit sequence number starting at `001`
* `{slug}` is a concise lowercase hyphen-separated description of the specification

## Rules

SPEC filenames MUST follow the format `spec-{domain}-{number}-{slug}.md` exactly.

The combination of `{domain}` and `{number}` MUST be unique within the repository's SPEC collection.

The combination of `{domain}` and `{number}` MUST NOT be reused, regardless of the SPEC's lifecycle status.

The `{slug}` MUST NOT exceed 5 hyphen-separated words.

SPEC filename domains MUST correspond to the domain identifier used in the SPEC identifier (e.g. `SPEC-D2-001` maps to filename prefix `spec-d2-001-`).

## Examples

```text
spec-d1-001-provider-isolation.md
spec-d2-001-bootstrap-pipeline.md
spec-d2-002-runtime-audit.md
spec-core-001-invariant-freeze.md
```

---

# 4. Archive Document Naming

## Format

```text
day{n}-{slug}.md
```

Where:

* `{n}` is an integer representing the project day of the archive entry (no zero-padding, no leading zeros)
* `{slug}` is a concise lowercase hyphen-separated description of the archive content

## Rules

Archive document filenames MUST follow the format `day{n}-{slug}.md` exactly.

The `{n}` value MUST be a positive integer.

The `{n}` value MUST NOT be zero-padded.

The `{slug}` MUST NOT exceed 5 hyphen-separated words.

Archive documents MUST NOT be renamed after creation.

## Examples

```text
day28-status-panorama.md
day50-governance-pivot.md
day100-audit-summary.md
```

---

# 5. Naming Violation Handling

A document that does not conform to the naming rules defined in this document is a governance violation.

Governance violations MUST be corrected before the document is referenced in any ADR, SPEC, or implementation artifact.

Silent violation is prohibited.
