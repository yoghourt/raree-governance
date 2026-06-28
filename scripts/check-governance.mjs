#!/usr/bin/env node
/**
 * v1 placeholder: verifies governance entrypoints are locally accessible.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const entrypoints = [
  "Constitution.md",
  "FOUNDATION.md",
  "RETRIEVAL.md",
  "STREAMING.md",
  "NAVIGATION.md",
  "ADR_RULES.md",
];

let failed = false;

for (const file of entrypoints) {
  const target = path.join(root, file);
  try {
    await readFile(target, "utf8");
    console.log(`readable: ${file}`);
  } catch {
    console.error(`unreadable: ${file}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("check:governance: entrypoints accessible (v1 placeholder).");
