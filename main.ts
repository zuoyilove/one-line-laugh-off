import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Laugh-Off: exactly one funny line, written to /output/entry.txt.
// The line is a single joke, no setup notes, no explanation.
const joke =
  "My smart fridge texted me 'we need to talk,' so now I eat dinner standing in the dark, hoping it thinks I moved out.";

// The gate seals it: 1 to 200 characters, not only white space. Fail loudly
// locally rather than shipping an invalid line.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry is ${joke.length} characters, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
