#!/usr/bin/env node
/**
 * v1 placeholder: verifies governance structure integrity.
 */
import { access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const requiredFiles = [
  "FOUNDATION.md",
  "RETRIEVAL.md",
  "STREAMING.md",
  "NAVIGATION.md",
  "ADR_RULES.md",
  "README.md",
  "package.json",
  ".gitignore",
  "specs/GOVERNANCE_TOPOLOGY_SPEC_V1.md",
  "specs/GOVERNANCE_BOOTSTRAP_SPEC_V1.md",
  "templates/ADR_TEMPLATE.md",
  "templates/PR_TEMPLATE.md",
  "templates/SPIKE_TEMPLATE.md",
];

let failed = false;

for (const file of requiredFiles) {
  const target = path.join(root, file);
  try {
    await access(target, constants.F_OK);
    console.log(`ok: ${file}`);
  } catch {
    console.error(`missing: ${file}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("validate: required files present (v1 placeholder).");
