# NAVIGATION — Governance Document Index

Purpose: canonical map of governance authority and document discovery paths.

---

## Governance hierarchy

```text
Constitution.md              — Constitutional Authority
        ↓
Governance Model             — FOUNDATION.md, ADR_RULES.md, SPEC_RULES.md, specs/
        ↓
ADR                          — architectural decisions (consumer and governance repos)
        ↓
Specifications               — specs/ and consumer SPECs
        ↓
Implementation               — code, scripts, runtime enforcement
        ↓
Runtime                      — production-enforced behavior (supreme operational truth)
```

Authority flows downward. Lower layers MUST remain compatible with higher layers.

Every ADR derives its authority from `Constitution.md` and MUST remain compatible with its principles.

---

## Terminology

**Constitution** — `Constitution.md`. Defines permanent constitutional principles for Raree Show.

**ADR** — Architecture Decision Record. Records architectural decisions that MUST remain compatible with the Constitution.

**Governance Model** — the shared governance framework (`FOUNDATION.md`, lifecycle laws, and architecture specifications) that operationalizes constitutional principles.

**Specification** — implementation-boundary documents derived from Accepted ADRs.

---

## Document map

Read in precedence order (highest authority first):

| Order | Document | Role |
| ----- | -------- | ---- |
| 1 | [`Constitution.md`](Constitution.md) | Constitutional Authority |
| 2 | [`FOUNDATION.md`](FOUNDATION.md) | Governance constitutional kernel |
| 3 | [`ADR_RULES.md`](ADR_RULES.md) | ADR lifecycle law |
| 4 | [`SPEC_RULES.md`](SPEC_RULES.md) | SPEC lifecycle law |
| 5 | [`DOCUMENT_NAMING_CONVENTION.md`](DOCUMENT_NAMING_CONVENTION.md) | Document naming law |
| 6 | [`RETRIEVAL.md`](RETRIEVAL.md) | Retrieval governance |
| 7 | [`NAVIGATION.md`](NAVIGATION.md) | Navigation governance (this index) |
| 8 | [`STREAMING.md`](STREAMING.md) | Streaming governance |
| 9 | [`specs/AUTHORITY_BOUNDARY_AND_PRECEDENCE_SPEC.md`](specs/AUTHORITY_BOUNDARY_AND_PRECEDENCE_SPEC.md) | Primary governance architecture specification |
| 10 | [`specs/GOVERNANCE_TOPOLOGY_SPEC.md`](specs/GOVERNANCE_TOPOLOGY_SPEC.md) | Repository topology |
| 11 | [`specs/GOVERNANCE_INTEGRATION_SPEC.md`](specs/GOVERNANCE_INTEGRATION_SPEC.md) | Consumer integration contracts |
| 12 | [`specs/GOVERNANCE_BOOTSTRAP_SPEC.md`](specs/GOVERNANCE_BOOTSTRAP_SPEC.md) | Bootstrap semantics |
| 13 | [`specs/CHANGE_TELEMETRY_SPEC.md`](specs/CHANGE_TELEMETRY_SPEC.md) | Change telemetry contracts |

---

## Templates

| Template | Path |
| -------- | ---- |
| ADR | [`templates/ADR_TEMPLATE.md`](templates/ADR_TEMPLATE.md) |
| SPEC | [`templates/SPEC_TEMPLATE.md`](templates/SPEC_TEMPLATE.md) |
| PR | [`templates/PR_TEMPLATE.md`](templates/PR_TEMPLATE.md) |
| Spike | [`templates/SPIKE_TEMPLATE.md`](templates/SPIKE_TEMPLATE.md) |
| Debug | [`templates/DEBUG_TEMPLATE.md`](templates/DEBUG_TEMPLATE.md) |

---

## Entry points

| Audience | Start here |
| -------- | ---------- |
| New contributor | [`README.md`](README.md) → [`Constitution.md`](Constitution.md) → this index |
| ADR author | [`Constitution.md`](Constitution.md) → [`ADR_RULES.md`](ADR_RULES.md) → [`templates/ADR_TEMPLATE.md`](templates/ADR_TEMPLATE.md) |
| Consumer repo integrator | [`specs/GOVERNANCE_INTEGRATION_SPEC.md`](specs/GOVERNANCE_INTEGRATION_SPEC.md) |
