# FOUNDATION.md — Raree Governance Constitutional Kernel

## Status

V1

## Purpose

This document defines the minimal constitutional kernel of the Raree governance system.

It establishes:

* authority hierarchy
* runtime supremacy
* constitutional invariant legitimacy
* governance reconciliation principles

This document intentionally avoids implementation detail.

---

# 1. Runtime Supremacy Law

Runtime-enforced behavior is the highest operational authority in the system.

When written governance artifacts conflict with production-enforced runtime reality:

* runtime truth prevails
* contradictory narrative loses authority automatically

This applies to:

* README
* ADRs
* rollout documents
* implementation plans
* transport mirrors

Narrative authority may describe runtime behavior,
but may not override runtime enforcement.

---

# 2. Constitutional Invariant Principle

A constitutional invariant is a runtime constraint that is:

* production-enforced
* governance-binding
* cross-boundary
* catastrophic if violated

Constitutional invariants define the physical safety boundaries of the system.

Examples may include:

* Zero-Trust Ingress
* Physical Truncation
* Semantic Lock
* Pre-Lock Fallback Boundary
* SHA-256 Production Oracle

---

# 3. Governance Hierarchy

Raree governance operates under the following authority structure:

```text id="efmnpy"
Constitutional Layer
    ↓
Governance Architecture Layer
    ↓
Adapter Layer
    ↓
Implementation Layer
    ↓
Narrative Layer
```

---

## Layer Definitions

### Constitutional Layer

Defines non-negotiable system laws and invariant legitimacy.

### Governance Architecture Layer

Defines lifecycle rules, escalation procedures, and governance structure.

### Adapter Layer

Distributes governance intent into execution environments.

### Implementation Layer

Contains runtime systems and local repository implementations.

### Narrative Layer

Provides explanation, onboarding, and human-readable summaries.

Narrative layers are informational, not authoritative.

---

## Layer Artifact Classification

The following classification formally assigns all current governance artifacts to their authoritative layer.

### Constitutional Layer Artifacts

The following root-level files constitute the Constitutional Layer of this repository:

```text id="cla7f2"
FOUNDATION.md        — constitutional kernel (this document)
ADR_RULES.md         — ADR lifecycle law
RETRIEVAL.md         — retrieval governance
NAVIGATION.md        — navigation governance
STREAMING.md         — streaming governance
```

These files define shared governance law binding on all consumer repositories.

### Governance Architecture Layer Artifacts

The following specifications constitute the Governance Architecture Layer:

```text id="gal9k4"
specs/AUTHORITY_BOUNDARY_AND_PRECEDENCE_SPEC.md  — PRIMARY governance architecture document
specs/CHANGE_TELEMETRY_SPEC.md                   — telemetry contracts and PR enforcement
specs/GOVERNANCE_TOPOLOGY_SPEC.md                — repository structure and topology
specs/GOVERNANCE_INTEGRATION_SPEC.md             — consumer repository integration contracts
specs/GOVERNANCE_BOOTSTRAP_SPEC.md               — bootstrap and validation semantics
```

`specs/AUTHORITY_BOUNDARY_AND_PRECEDENCE_SPEC.md` is the primary Governance Architecture Layer document.
It defines operational precedence mechanics, conflict resolution semantics, and adapter topology.
It is authoritative within the Governance Architecture Layer and binding on lower layers.
It does not supersede the Constitutional Layer.

### Narrative Layer Artifacts

```text id="nla3p8"
README.md  — onboarding and operational guidance (informational, not authoritative)
```

---

# 4. Drift Reconciliation Principle

Governance drift occurs when:

* runtime behavior
* governance artifacts
* narrative layers

diverge materially.

When drift is detected:

* reconciliation toward runtime reality is mandatory
* authority confusion must be clarified explicitly
* materially incorrect governance narrative must be corrected

Mechanical reconciliation is preferred over interpretive reconciliation whenever possible.

---

# 5. Constitutional Escalation Principle

Runtime constraints that become:

* system-wide
* runtime-enforced
* governance-critical

must be escalated into constitutional recognition.

No downstream implementation document may independently establish constitutional authority.

Constitutional legitimacy requires:

* runtime enforcement
* governance recognition
* escalation approval

---

# 6. Zero-Trust Governance Principle

Governance validity must never depend solely on:

* narrative claims
* prompt obedience
* undocumented convention
* assumed alignment

The system must prefer:

* inspectable enforcement
* physical boundaries
* deterministic validation
* fail-fast governance

over interpretive trust.

---

# 7. Audit Continuity Principle

Governance evolution must remain reconstructable.

Material governance changes SHOULD preserve:

* supersession history
* correction rationale
* reconciliation records
* invariant evolution lineage

Silent constitutional mutation is prohibited.

---

# 8. Constitutional Minimalism Principle

The constitutional layer should remain:

* minimal
* stable
* difficult to mutate

Implementation detail belongs outside the constitutional kernel unless escalation criteria are satisfied.

The constitution defines legitimacy boundaries,
not feature behavior.
