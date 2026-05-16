#!/usr/bin/env node
/**
 * v1 placeholder: ensures required filesystem structure exists.
 */
import { access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const requiredDirs = [
  "specs",
  "templates",
  "future/scripts",
  "future/ci",
  "future/skills",
  "future/adapters",
  "future/mcp",
];

let failed = false;

for (const dir of requiredDirs) {
  const target = path.join(root, dir);
  try {
    await access(target, constants.F_OK);
    console.log(`ok: ${dir}/`);
  } catch {
    console.error(`missing: ${dir}/`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("bootstrap: governance structure present (v1 placeholder).");
