import { mkdirSync, writeFileSync } from 'node:fs';

// The entry: one dad joke, written verbatim to /output/entry.txt.
// Deterministic by construction: no clock, no randomness, no network, no secrets.
const JOKE =
  "I told my son to be the change he wants to see in the world. " +
  "He got up and changed the TV channel.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, 'utf8');
