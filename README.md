# raree-governance

## Purpose

This repository is the canonical governance authority for the Raree Show ecosystem. It holds governance documents, topology specifications, and operational bootstrap entrypoints used by consumer repositories.

## Governance authority

All architecture constraints, governance protocols, and shared execution philosophy MUST originate from this repository. Consumer repositories MUST NOT fork or duplicate governance authority locally.

## Consumer repositories

Consumer repositories integrate governance as a git submodule mounted at `/governance` relative to the repository root.

After cloning or updating a consumer repository, initialize governance with:

```bash
git submodule update --init --recursive
```

Repository-level `AGENTS.md` files act as thin adapters only; they declare entrypoints and local paths but do not redefine shared governance rules.

## Deterministic local governance

AI tooling and validation MUST read governance from the local filesystem at `/governance/*`. Governance discovery MUST NOT depend on remote URLs, implicit IDE state, or environment-specific path heuristics.

The locally mounted governance tree is the operational source of truth for assisted development workflows.
