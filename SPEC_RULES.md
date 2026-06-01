# SPEC_RULES.md — Raree Governance Specification Lifecycle Law

## Status

V1

## Purpose

This document defines:

* SPEC authority boundaries
* SPEC lifecycle semantics
* SPEC numbering rules
* SPEC authority topology within the Raree governance chain

The purpose of this law is to ensure that implementation work is always traceable to an approved specification, and that specifications are always traceable to an approved ADR.

This document governs all SPEC behavior across Raree governance repositories and consumer repositories.

---

# 1. Spec Purpose

## ADR vs SPEC Division of Responsibility

ADR and SPEC answer different governance questions and MUST NOT be conflated.

| Artifact | Answers          | Does NOT Answer |
| -------- | ---------------- | --------------- |
| ADR      | What and Why     | How, Validation |
| SPEC     | How, Validation  | What, Why       |

An ADR MUST NOT contain implementation topology detail that belongs in a SPEC.

A SPEC MUST NOT restate architectural rationale that belongs in an ADR.

---

# 2. Lifecycle

## Allowed Statuses

All SPECs MUST use exactly one of the following status values:

```text
Draft
Approved
Implemented
Deprecated
Superseded
```

No other status values are permitted.

## Status Definitions

### Draft

The SPEC is under active authorship.

A Draft SPEC MUST NOT be used to authorize implementation work.

### Approved

The SPEC has passed governance review and is authorized for implementation.

Implementation MUST NOT begin before a SPEC reaches Approved status.

### Implemented

All acceptance criteria defined in the SPEC have been verified in production.

A SPEC MUST NOT be marked Implemented without evidence of acceptance criteria completion.

### Deprecated

The SPEC is no longer the governing specification for its domain.

Deprecated SPECs MUST retain their identifiers permanently.

Deprecated SPECs MUST NOT be deleted.

### Superseded

The SPEC has been replaced by a newer SPEC.

A Superseded SPEC MUST reference the superseding SPEC identifier in its metadata.

Superseded SPECs MUST retain their identifiers permanently.

## Lifecycle Transitions

```text
Draft → Approved       requires: governance review completion
Approved → Implemented requires: all acceptance criteria verified
Approved → Deprecated  requires: explicit deprecation decision
Approved → Superseded  requires: new SPEC approved as replacement
Implemented → Deprecated requires: explicit deprecation decision
```

No other lifecycle transitions are permitted without explicit governance authorization.

---

# 3. Numbering

## Format

```text
SPEC-{DOMAIN}-{NNN}
```

Where:

* `{DOMAIN}` is an uppercase domain identifier (e.g. `D1`, `D2`, `CORE`, `AUTH`)
* `{NNN}` is a zero-padded three-digit sequence number starting at `001`

## Examples

```text
SPEC-D1-001
SPEC-D2-001
SPEC-D2-002
SPEC-CORE-001
```

## Numbering Rules

SPEC identifiers MUST be assigned sequentially within each domain.

SPEC identifiers MUST NOT be reused, regardless of status.

Deprecated and Superseded SPECs MUST retain their original identifiers.

New SPECs that replace deprecated SPECs MUST receive new identifiers.

---

# 4. Authority

## Required Topology

The Raree governance chain MUST follow this ordering:

```text
ADR
→ SPEC
→ Implementation
→ Audit
```

This ordering is binding for all consumer repositories.

## Topology Rules

A SPEC MUST derive from at least one Accepted ADR.

A SPEC MUST reference its parent ADR(s) in the `Derived From` metadata field.

Implementation MUST NOT begin from an ADR alone.

Implementation MUST reference at least one SPEC with Approved status.

Audit artifacts MUST reference the SPEC that governed the implementation being audited.

## Prohibited Paths

The following derivation paths are explicitly prohibited:

```text
ADR → Implementation           (prohibited: no approved SPEC)
ADR → Audit                    (prohibited: no SPEC or Implementation)
Draft SPEC → Implementation    (prohibited: SPEC not yet Approved)
```

Any implementation work that cannot be traced to an Approved SPEC is a governance violation.

---

# 5. Required Metadata

All SPECs MUST contain the following metadata fields:

| Field        | Required | Notes                                    |
| ------------ | -------- | ---------------------------------------- |
| Title        | YES      |                                          |
| Status       | YES      | MUST be one of the values defined in §2  |
| Version      | YES      |                                          |
| Owner        | YES      |                                          |
| Last Updated | YES      |                                          |
| Derived From | YES      | MUST reference at least one ADR          |

---

# 6. Required Sections

All SPECs MUST contain the following sections in the order listed:

1. Purpose
2. Scope
3. Runtime Contracts
4. Data Contracts
5. State Transitions
6. Error Handling
7. Security Constraints
8. Acceptance Criteria
9. Non-Goals
10. Validation
11. Refs

SPECs MUST use the canonical template defined in `templates/SPEC_TEMPLATE.md`.

---

# 7. Governance Legitimacy

A SPEC does not acquire authority through narrative repetition or implementation detail alone.

SPEC legitimacy requires:

* derivation from an Accepted ADR
* formal status of Approved or higher
* all required metadata fields populated
* all required sections present

A SPEC that does not satisfy these requirements MUST NOT be used to authorize implementation.
