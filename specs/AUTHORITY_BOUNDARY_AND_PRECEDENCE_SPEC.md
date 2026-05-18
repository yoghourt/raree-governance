# AUTHORITY_BOUNDARY_AND_PRECEDENCE_SPEC

Version: `v1`
Status: `Architecture Approved`
Type: `Governance Authority Clarification Specification`

Depends on:

* `GOVERNANCE_TOPOLOGY_SPEC.md`
* `GOVERNANCE_BOOTSTRAP_SPEC.md`
* `GOVERNANCE_INTEGRATION_SPEC.md`

Audience:

* Architect AI
* Keeper
* Cursor / execution agents
* repository maintainers
* future governance tooling maintainers

---

# 1. Purpose

This specification defines authority boundaries and precedence semantics within the Raree governance system.

The goal is to eliminate governance ambiguity across:

* governance authority artifacts
* repository adapters
* repository-local implementation artifacts

This specification establishes:

* authority layer hierarchy
* artifact ownership boundaries
* generated transport adapter semantics
* propagation topology and drift invalidation semantics
* integrity expectations between governance source and generated adapters
* interpretation precedence
* conflict semantics
* operational invalidation rules

This specification intentionally does NOT define:

* governance constitution wording
* CI enforcement implementation
* automation tooling
* retrieval semantics
* navigation semantics
* streaming semantics

---

# 2. Governance Layer Topology

Raree governance is organized into three operational authority layers:

```text id="h7n2pk"
Constitutional Layer
        ↓
Adapter Layer
        ↓
Implementation Layer
```

Authority always flows downward.

Lower layers MUST NOT redefine higher-layer authority.

---

## 2.1 Adapter Family Sub-Topology

Within the Adapter Layer, three operational roles exist.
All are **operational bridges**, not governance authority sources:

```text id="a8f3km"
entry adapter          → governance entrypoint exposure (AGENTS.md)
sync propagation       → deterministic authority-to-surface propagation
transport surface      → generated transport mirrors on consumer repositories
```

Canonical propagation within the adapter family:

```text id="b2n7qp"
governance authority
        ↓
sync adapter (propagation role)
        ↓
consumer transport surface (generated transport mirrors)
```

Governance owns semantics.
Adapters own platform integration only.

---

# 3. Constitutional Layer

## 3.1 Purpose

The Constitutional Layer defines shared governance authority.

This layer represents the canonical governance source for the Raree ecosystem.

---

## 3.2 Location

The Constitutional Layer resides in:

```txt id="q4v8rb"
/governance/*
```

including:

```txt id="k1m5hf"
FOUNDATION.md
RETRIEVAL.md
NAVIGATION.md
STREAMING.md
ADR_RULES.md
```

---

## 3.3 Responsibilities

The Constitutional Layer owns:

```text id="w8m3pk"
- shared governance rules
- deterministic execution principles
- architecture authority
- retrieval governance
- navigation governance
- streaming governance
- ADR governance
```

---

## 3.4 Restrictions

The Constitutional Layer MUST NOT contain:

```text id="x6v7rb"
- repository-specific runtime details
- application implementation logic
- local operational exceptions
```

Reason:

Constitutional authority must remain globally reusable and repository-independent.

---

# 4. Adapter Layer

## 4.1 Purpose

The Adapter Layer bridges governance authority into a specific repository runtime context.

This layer includes:

* **entry adapters** — thin governance bootstrap (`AGENTS.md`)
* **generated transport mirrors** — platform-integration artifacts propagated from governance authority

This layer exists to:

```text id="y2q4nt"
- expose governance entrypoints
- propagate governance into platform-specific transport surfaces
- define repository-local bootstrap expectations
- provide repository-local runtime notes
```

---

## 4.2 Location

### 4.2.1 Entry Adapter

The entry adapter resides in:

```txt id="z5w8zb"
AGENTS.md
```

within each consumer repository.

---

### 4.2.2 Generated Transport Mirrors

Generated transport mirrors reside on consumer repositories at platform-specific paths.

Examples include (non-exhaustive):

```txt id="c9m4hf"
.cursor/rules/
commitlint configuration
.github/pull_request_template.md (copied from governance/templates/)
editor automation presets derived from governance authority
```

Path enumeration is illustrative only.
This specification does not close the set of valid transport surfaces.

---

## 4.3 Responsibilities

### 4.3.1 Entry Adapter Responsibilities

The entry adapter MAY define:

```text id="a1n5pk"
- governance entrypoint references
- repository-local tooling workflows
- bootstrap instructions
- repository-local runtime constraints
```

---

### 4.3.2 Generated Transport Mirror Responsibilities

Generated transport mirrors MAY define:

```text id="d6v2pk"
- platform-specific binding of governance contracts
- format mapping required by tools or hosts
- local paths to /governance/* entrypoints
```

Generated transport mirrors MUST NOT expand governance semantic scope beyond constitutional authority.

---

## 4.4 Restrictions

The Adapter Layer MUST NOT redefine:

```text id="b4q8rb"
- governance philosophy
- retrieval law
- navigation law
- streaming law
- ADR authority
- deterministic execution principles
```

Generated governance adapters are classified as **committed generated transport mirrors**, NOT constitutional authority artifacts.

Reason:

Adapters are operational bridges, not governance authorities.

---

## 4.5 Generated Transport Mirror Semantics

### 4.5.1 Generated Adapter Classification Law

Generated governance adapters are:

```text id="e3q8rb"
committed generated transport mirrors
```

NOT constitutional authority artifacts.

---

### 4.5.2 Authority Ownership Law

Governance semantic authority exists exclusively under:

```txt id="f7n1pk"
/governance/*
```

Generated adapters MUST NOT become semantic authority sources.

---

### 4.5.3 Drift Invalidation Law

Local modifications to generated adapters are:

```text id="g2w5hf"
non-authoritative
```

and MUST be invalidated by **deterministic sync propagation** from governance authority.

This is a logical governance requirement.
It does not mandate CI, automation tooling, or a specific implementation algorithm.

---

### 4.5.4 Propagation Law

The canonical propagation topology is:

```text id="h8m4zb"
governance authority
        ↓
sync adapter
        ↓
consumer transport surface
```

Where:

* **governance authority** — constitutional layer at `/governance/*`
* **sync adapter** — propagation role that deterministically projects authority into consumer surfaces (reserved in governance topology as `future/scripts`)
* **consumer transport surface** — generated transport mirrors on the consumer repository

Governance owns semantics.
Adapters own platform integration only.

---

## 4.6 Adapter Persistence Semantics

### 4.6.1 Adapter Persistence Law

Generated adapters:

```text id="i5q1nt"
MAY be committed for platform compatibility
```

without acquiring interpretive or constitutional authority.

Committing a generated transport mirror does not elevate it to governance authority.
Filesystem presence and version control history do not imply semantic authority.

---

# 5. Implementation Layer

## 5.1 Purpose

The Implementation Layer contains repository-local implementation artifacts.

These artifacts describe repository-specific implementation behavior.

---

## 5.2 Example Locations

Examples include:

```txt id="c7m2hf"
docs/specs/
docs/adr/
src/
scripts/
```

---

## 5.3 Responsibilities

The Implementation Layer MAY define:

```text id="d3v7pk"
- repository-specific architecture
- feature implementation details
- application runtime behavior
- local implementation ADRs
- operational implementation workflows
```

---

## 5.4 Restrictions

The Implementation Layer MUST NOT redefine:

```text id="e8q4rb"
- governance authority
- shared governance law
- constitutional precedence
```

---

# 6. Authority Ownership Model

## 6.1 Constitutional Authority

Shared governance authority belongs exclusively to the Constitutional Layer.

Only governance authority artifacts may define:

```text id="f2w8zb"
- ecosystem-wide governance rules
- deterministic execution principles
- shared architecture constraints
```

---

## 6.2 Repository Authority

Consumer repositories retain authority over:

```text id="g5n1pk"
- implementation details
- repository-local runtime behavior
- application-specific operational logic
```

provided they do not violate governance authority.

---

## 6.3 Integrity Expectations

Consumer repositories **SHOULD** perform integrity verification between:

```text id="j9v3pk"
governance source (/governance/*)
```

and:

```text id="k4n8zb"
generated transport mirrors
```

This specification sets constitutional expectation only.

It does NOT mandate:

```text id="l1q6hf"
- CI enforcement
- specific verification algorithms
- hash or schema requirements
- automated sync validation implementation
```

Integrity verification remains a repository operational concern aligned with governance semantics, not a tooling mandate.

---

# 7. Precedence Model

## 7.1 Precedence Ordering

Governance interpretation MUST follow:

```text id="h9q4rb"
Constitutional Layer
        >
Adapter Layer
        >
Implementation Layer
```

Higher layers always take interpretive precedence.

Within the Adapter Layer, interpretive precedence among adapter roles is:

```text id="m7w2pk"
entry adapter (AGENTS.md)
        >
generated transport mirrors
```

Entry adapters declare `/governance/*` entrypoints.
Generated transport mirrors MUST NOT reinterpret governance semantics beyond constitutional authority.

---

## 7.2 Interpretation Rule

If multiple artifacts provide conflicting guidance:

```text id="i4m8zb"
higher-layer authority wins
```

Lower-layer interpretation becomes operationally invalid.

---

# 8. Supersession Semantics

## 8.1 Governance Supersession Rule

If a repository-local artifact conflicts with governance authority:

```text id="j7n2pk"
governance supersedes local interpretation
```

The conflicting local rule MUST be treated as invalid.

---

## 8.2 Adapter Supersession Restriction

Adapter-layer artifacts MUST NOT supersede governance authority.

This restriction applies to:

```text id="n3q8rb"
- entry adapters (AGENTS.md)
- generated transport mirrors
- any adapter-family propagation artifact
```

Generated transport mirrors MUST NOT supersede governance-defined contracts, including change-telemetry contracts defined under constitutional authority.

Reason:

Adapters exist only to expose governance into repository runtime context.

---

# 9. Conflict Semantics

## 9.1 Conflict Definition

A governance conflict exists when a lower-layer artifact:

```text id="k1q5hf"
- contradicts governance authority
- weakens governance constraints
- redefines governance semantics
- introduces incompatible authority interpretation
- treats a locally modified generated transport mirror as authoritative over /governance/*
```

When a generated transport mirror has drifted from governance authority through local modification, the mirror becomes **operationally invalid** for governance interpretation until deterministic sync propagation restores alignment.

---

## 9.2 Operational Invalidation

Conflicting lower-layer artifacts become:

```text id="l8v3pk"
operationally invalid
```

once governance conflict is established.

---

## 9.3 Fail-fast Logical Model

AI-assisted workflows MUST treat governance conflicts as:

```text id="m4q7rb"
invalid operational state
```

Silent precedence ambiguity is forbidden.

---

# 10. Runtime Interpretation Rules

## 10.1 AI Interpretation Requirement

AI systems operating within Raree repositories MUST:

```text id="n2w8zb"
- interpret governance hierarchically
- respect precedence ordering
- avoid authority merging
- avoid hybrid interpretation models
```

---

## 10.2 Forbidden Interpretation Behavior

AI systems MUST NOT:

```text id="o6n1pk"
- treat all artifacts as equal authority
- merge governance and implementation law
- reinterpret governance locally
- infer authority from file proximity
```

Reason:

Filesystem locality does not imply governance authority.

---

# 11. Future Enforcement Boundary

This specification defines:

```text id="p9q4rb"
logical governance semantics
```

only.

This specification intentionally does NOT define:

```text id="q5m8zb"
- CI enforcement
- automatic conflict detection
- linting systems
- runtime governance validators
- IDE enforcement tooling
```

Those belong to future governance infrastructure phases.

---

# 12. Architectural Outcome

After adopting this specification:

Raree governance becomes:

```text id="r1v7pk"
hierarchically interpretable
authority-stable
precedence-deterministic
conflict-explicit
AI-readable
topology-consistent
```

without prematurely introducing governance automation infrastructure.

---

# 13. Language Notes

## Precedence

In governance context, **precedence** defines:

```text id="s8q4rb"
interpretation priority ordering
```

Example:

```text id="t3w8zb"
Governance authority takes precedence over local specifications.
```

Meaning:

Governance is interpreted first when resolving ambiguity.

Precedence does NOT automatically imply deletion or destruction of lower-layer artifacts.

---

## Supersede

In governance context, **supersede** defines:

```text id="u7n1pk"
operational replacement or invalidation
```

Example:

```text id="v2q5hf"
Governance rules supersede conflicting local rules.
```

Meaning:

The lower-layer conflicting rule becomes operationally invalid.

---

## Important Distinction

```text id="w6v3pk"
precedence
≠
supersession
```

Precedence determines interpretive priority.

Supersession determines operational validity.

---

## Drift

In governance context, **drift** defines:

```text id="o8m2pk"
operational divergence between governance authority and a lower-layer artifact
```

Example:

```text id="p4q7hf"
A locally edited generated transport mirror that contradicts /governance/* has drifted.
```

Meaning:

Drift does not create alternate governance authority.
Drift triggers invalidation under the Drift Invalidation Law (§4.5.3).

---

## Sync Propagation

In governance context, **sync propagation** defines:

```text id="q1v9zb"
deterministic projection of governance authority into adapter-family transport surfaces
```

Example:

```text id="r6n3pk"
Governance templates projected into a consumer PR template path.
```

Meaning:

Sync propagation restores alignment after drift.
This specification does not define propagation tooling.

---

## Transport Mirror

In governance context, **transport mirror** defines:

```text id="s2w8nt"
a committed generated transport artifact that mirrors governance contracts for platform compatibility
```

Example:

```text id="t7q4hf"
Cursor rules generated from governance authority and committed in a consumer repository.
```

Meaning:

Transport mirrors are adapter-layer integration artifacts.
They are not constitutional authority sources.
