# ADR_RULES.md — Raree Governance Decision Lifecycle Law

## Status

V1

## Purpose

This document defines:

* ADR authority boundaries
* lifecycle semantics
* constitutional escalation rules
* drift reconciliation procedures
* metadata governance requirements

The purpose of this law is to prevent:

* governance drift
* constitutional authority leakage
* downstream overreach
* narrative/runtime divergence

This document governs all ADR behavior across Raree governance repositories and consumer repositories.

---

# 1. Authority Hierarchy

The canonical governance authority hierarchy is defined in `FOUNDATION.md §3`.

In the context of ADR governance, the precedence ordering relevant to ADR authors is:

```text id="kyscxc"
FOUNDATION.md  (Constitutional Layer)
    ↓
ADR_RULES.md   (Constitutional Layer — this document)
    ↓
Adapter Layer
(AGENTS.md / generated mirrors / transport contracts)
    ↓
Local ADRs and Specs  (Implementation Layer)
    ↓
README / Narrative Documents  (Narrative Layer)
```

Lower layers may:

* describe
* specialize
* operationalize

Higher-layer constraints.

Lower layers may NOT:

* redefine
* weaken
* contradict

higher-layer governance rules.

---

# 2. Runtime Supremacy Constraint

Runtime supremacy is a constitutional kernel principle.

See `FOUNDATION.md §1` for the canonical definition.

In the context of ADR governance: when an ADR conflicts with production-enforced runtime reality, the ADR loses authority and MUST be corrected toward runtime truth. See §8 (Drift Reconciliation Law) for reconciliation procedure.

---

# 3. ADR Classification Model

All ADRs MUST declare one of the following categories:

| Category         | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| Architecture ADR | Defines approved architecture direction                |
| Runtime ADR      | Documents runtime-enforced behavior                    |
| Rollout ADR      | Describes migration or deployment sequencing           |
| Historical ADR   | Records superseded or archival decisions               |
| Invariant Annex  | Documents already-authorized constitutional invariants |

Consumer repositories may NOT create new constitutional invariants directly through local ADRs.

---

# 4. Constitutional Escalation Rule

Constitutional escalation criteria are defined in `FOUNDATION.md §5`.

ADRs that introduce a runtime constraint satisfying all four escalation criteria in `FOUNDATION.md §5` MUST trigger a Constitutional Escalation Review.

Once escalated:

* the invariant becomes constitution-governed
* downstream ADRs may reference but may not redefine it

Consumer repository ADRs may NOT independently create constitutional invariants. See §5 (ADR Authority Boundary) for the full boundary definition.

---

# 5. ADR Authority Boundary

Consumer repository ADRs MAY:

* describe runtime implementation
* describe rollout sequencing
* describe local architectural specialization
* document implementation rationale

Consumer repository ADRs MAY NOT:

* redefine constitutional hierarchy
* override runtime supremacy
* weaken constitutional invariants
* independently create system-wide governance laws

If a local ADR introduces a governance-binding invariant,
the ADR MUST trigger Constitutional Escalation Review.

---

# 6. Lifecycle Enumeration

All governance artifacts MUST use standardized lifecycle states.

## Standard Lifecycle

```text id="yilvfc"
Draft
→ Proposed
→ Accepted
→ Runtime-Enforced
→ Deprecated
→ Superseded
→ Historical
```

---

## Lifecycle Definitions

### Draft

Work-in-progress governance artifact.

### Proposed

Candidate governance rule under review.

### Accepted

Approved governance direction or specification.

### Runtime-Enforced

Constraint physically enforced by runtime behavior.

### Deprecated

Still present but no longer recommended.

### Superseded

Replaced by newer governance artifact.

### Historical

Archived reference retained for audit continuity.

---

# 7. Runtime-Enforced Promotion Rule

A governance artifact may only enter Runtime-Enforced state when:

* enforcement exists in production runtime
* violation causes runtime blocking, fail-fast, or invariant failure
* enforcement behavior is inspectable
* authority source is documented

Narrative-only constraints may NOT claim Runtime-Enforced status.

---

# 8. Drift Reconciliation Law

This section applies `FOUNDATION.md §4` (Drift Reconciliation Principle) to ADR governance.

When governance drift is detected between:

* runtime
* ADR
* spec
* README
* transport mirrors

the system MUST reconcile toward runtime truth.

Drift reconciliation MUST include:

* explicit correction
* historical note if prior narrative was materially inaccurate
* authority clarification when hierarchy confusion occurred

Silent contradiction is prohibited.

---

# 9. Required Metadata Fields

All ADRs MUST contain:

| Field        | Required |
| ------------ | -------- |
| Title        | YES      |
| Status       | YES      |
| Type         | YES      |
| Version      | YES      |
| Last Updated | YES      |
| Owner        | YES      |

Optional:

* Related ADR
* Supersedes
* Historical Note

---

# 10. Invariant Annex Rule

Constitution-level runtime constraints SHOULD be documented separately from rollout ADRs.

Recommended pattern:

```text id="svffli"
ADR
    +
Invariant Specification
```

instead of embedding constitutional constraints inside:

* rollout plans
* migration documents
* implementation notes

This prevents constitutional authority leakage.

---

# 11. Historical Correction Principle

This section implements `FOUNDATION.md §7` (Audit Continuity Principle) in the context of ADR governance.

Incorrect governance narratives MUST NOT be silently rewritten.

Material governance corrections SHOULD include:

* correction rationale
* historical clarification
* runtime reconciliation explanation

This preserves audit continuity.

---

# 12. Governance Legitimacy Principle

Governance legitimacy principles are defined in `FOUNDATION.md §6`.

In the context of ADR governance: an ADR does not acquire constitutional authority through narrative repetition or implementation detail alone. ADR legitimacy requires enforcement, escalation approval (where applicable), and formal governance recognition within the lifecycle defined in §6 (Lifecycle Enumeration).

---

# 13. ADR ↔ SPEC Relationship

This section formally defines the required derivation topology between ADRs and SPECs, and the prohibited implementation paths.

## Required Topology

The Raree governance chain MUST follow this ordering for all implementation work:

```text
ADR
→ SPEC
→ Implementation
→ Audit
```

This topology is binding for all consumer repositories.

## Topology Rules

An ADR MUST be Accepted before a SPEC may derive from it.

A SPEC MUST derive from at least one Accepted ADR.

A SPEC MUST reach Approved status before implementation may begin.

Implementation artifacts MUST reference at least one SPEC with Approved status.

Audit artifacts MUST reference the SPEC that governed the implementation being audited.

## Prohibited Paths

The following derivation paths are explicitly prohibited:

```text
ADR → Implementation    (prohibited: no approved SPEC exists)
ADR → Audit             (prohibited: no SPEC or Implementation)
```

Implementation work that cannot be traced to an Approved SPEC is a governance violation.

Implementation work that cannot be traced to an Accepted ADR through a SPEC chain is a governance violation.

## Enforcement

Governance violations of the ADR → SPEC → Implementation topology MUST be corrected before the relevant implementation artifact may be merged, deployed, or promoted.

Silent violation is prohibited.

See `SPEC_RULES.md §4` for the canonical SPEC authority topology definition.
