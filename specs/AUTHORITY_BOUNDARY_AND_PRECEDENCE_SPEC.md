# AUTHORITY_BOUNDARY_AND_PRECEDENCE_SPEC

Version: `v1.1`
Status: `Architecture Approved`
Supersedes: `v1` (§7.2, §9, §11 conflict and enforcement semantics)
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

`FOUNDATION.md §3` defines the canonical five-layer governance hierarchy, subordinate to `Constitution.md`:

```text id="f5lyr1"
Constitution.md  (Constitutional Authority)
        ↓
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

This specification governs within the **Governance Architecture Layer**.
It defines operational precedence mechanics, conflict resolution semantics, and adapter topology.
It is authoritative within the Governance Architecture Layer and binding on lower layers.
It does not supersede the Constitutional Layer.

For operational purposes, this specification uses a condensed three-layer view that collapses layers not relevant to its subject matter:

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
Constitution.md
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

Supreme constitutional principles reside in `Constitution.md`.

Shared governance authority is operationalized exclusively through the Constitutional Layer.

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

When the conflict is limited to **PR narration structure** (topology mandated by `CHANGE_TELEMETRY_SPEC.md`), invalidation applies to the **conflicting structure only**, per §9.4. The remainder of the lower-layer artifact MUST NOT be treated as globally invalid solely because of that structural conflict.

Precedence MUST NOT be interpreted as permission to apply a **lower-priority** adapter PR topology alongside constitutional PR topology. Heuristic merging of adapter-layer PR narration structure with governance-required PR narration structure is **forbidden**. Under structural conflict, precedence means the conflicting structure MUST NOT be executed—not that both structures MAY be combined.

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

PR narration structure conflicts with change-telemetry topology are governed by §9.4.

---

## 9.2 Operational Invalidation

Once a governance conflict is established, the **identified conflicting structure** becomes operationally invalid as a **boolean** state: it MUST NOT be executed or merged into an operative interpretation.

Invalidation is not a soft override where lower-priority guidance remains partially applicable. Lower-layer artifacts MUST NOT retain operative conflicting structure under the label of lower priority.

For tool-adapter structural conflicts with governance-required PR topology, invalidation granularity is defined in §9.4.

Heuristic merging of adapter-layer PR narration topology with constitutional PR narration topology is **forbidden**.

---

## 9.3 Fail-fast Logical Model

AI-assisted workflows MUST treat governance conflicts as:

```text id="m4q7rb"
invalid operational state
```

Silent precedence ambiguity is forbidden.

---

## 9.4 Tool Adapter Structural Conflict

A **tool adapter structural conflict** exists when a tool adapter introduces PR narration structure that conflicts with governance-required topology defined in `CHANGE_TELEMETRY_SPEC.md` (including §6.2 Mandatory Pull Request Topology).

Tool adapters in scope include, without limitation:

```text id="u4s9pk"
- IDE rules and repository-global tool rules
- entry adapters (AGENTS.md) where they prescribe PR narration structure
- generated transport mirrors that prescribe PR section topology
```

### Partial Structural Invalidation

When a tool adapter structural conflict is established:

```text id="v1t6hf"
only the conflicting structural instruction becomes operationally invalid
```

Non-conflicting adapter semantics (for example git hygiene, branch naming, review checklists) **MAY remain active**.

Conflict MUST NOT be resolved by heuristic merging under "lower priority". Adapter-layer PR topology and governance-required PR topology MUST NOT be combined into a hybrid narration structure.

Conflict constitutes an **invalid operational state** for the conflicting structure. Workflows MUST fail-fast: do not merge conflicting PR narration structures.

### Restrictions

Conflict resolution MUST NOT treat the entire adapter artifact as globally invalid solely because one structural instruction conflicts with change-telemetry topology.

Precedence MUST NOT authorize retaining operative conflicting PR structure from the adapter layer.

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

## 11.1 Constitutional Scope

This specification defines:

```text id="p9q4rb"
logical governance semantics
```

and the fail-fast logical model for governance conflicts (§9.3).

only.

This specification intentionally does NOT define:

```text id="q5m8zb"
- CI workflow definitions
- automatic conflict detection algorithms
- linting systems
- runtime governance validator implementations
- IDE enforcement tooling implementations
- enforcement thresholds or numeric constants (for example character-length gates)
```

Algorithmic and tooling constants belong to implementation-layer artifacts in consumer repositories, not to constitutional authority.

## 11.2 Implementation Layer Transport Closure

The Implementation Layer in consumer repositories **MAY** implement **transport closure** by:

```text id="w2e7pk"
- exposing an open-pr class entrypoint that applies governance-required PR topology
- running CI validation that references CHANGE_TELEMETRY_SPEC.md contracts
```

Such enforcement realizes constitutional semantics; it does not become constitutional authority. CI workflows, scripts, and validator thresholds are implementation concerns aligned with—not superseding—governance specifications.

This specification does not mandate specific consumer filenames, workflow YAML, or prose-based PR type detection in governance text.

## 11.3 Non-Mandate Clarification

Permitting implementation-layer enforcement does not elevate CI, IDE tooling, or repository scripts to the Constitutional Layer. Consumer repositories MUST NOT treat implementation enforcement artifacts as sources of governance semantic authority.

---

## 11.4 Enforcement Chain Mapping

This section provides an inspectable mapping of the governance enforcement chain currently active in this repository, as required by `FOUNDATION.md §6` (Zero-Trust Governance Principle: prefer inspectable enforcement).

This table is a **descriptive mapping** of existing semantics. It does not define new enforcement semantics; those are defined in §9 (Conflict Semantics) and the referenced specifications.

| Law | Enforcement Point | Verification (Current State) | Failure Behavior |
| --- | ----------------- | ----------------------------- | ---------------- |
| `FOUNDATION.md §1` — Runtime Supremacy | §7.2, §8.1 of this specification: governance supersedes conflicting local interpretation | No mechanical verification currently exists. Enforcement is AI-agent-binding only. | §9.2: conflicting artifact becomes operationally invalid; AI workflows MUST treat as invalid operational state |
| `FOUNDATION.md §5` — Constitutional Escalation (via `ADR_RULES.md §4`) | ADR_RULES §4 routing: ADR introducing qualifying constraint MUST trigger Constitutional Escalation Review | No mechanical gate currently exists. Enforcement is governance-review-binding. | ADR may NOT proceed to `Accepted` state without escalation review completion |
| `CHANGE_TELEMETRY_SPEC.md §6.2` — Mandatory PR Topology | §9.4 of this specification: partial structural invalidation of conflicting tool adapter instructions | No CI enforcement currently exists. Target state: `future/ci` validation. | §9.2: conflicting PR narration structure is operationally invalid; fail-fast; heuristic merging forbidden |
| Governance file presence (`scripts/validate.mjs`) | `scripts/validate.mjs`: required file presence gate | File existence check (v1 placeholder — no semantic content verification) | `process.exit(1)` on missing required files; bootstrapping workflows fail deterministically |

**Verification gap**: The Verification column for the first three rows currently contains no mechanical enforcement. Semantic violations are AI-agent-binding only. Mechanical verification is reserved for `future/ci` implementation as defined in §11.1.

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

Structural invalidation (§9.4) invalidates only the conflicting instruction or structure. It does not require deleting or disregarding an entire adapter artifact when non-conflicting adapter semantics remain valid.

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
