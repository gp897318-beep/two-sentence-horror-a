// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253).
// Writes one original two-sentence horror story (126 characters) to /output/entry.txt.
// The gate requires UTF-8 text of 1-400 characters, not only whitespace; the judge
// requires exactly two sentences. Verify both before writing, and fail loudly if
// either ever stops holding, so a bad file is never produced silently.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "The library book was due back in 1974, and the card inside still has my name on it, in my own handwriting. I was born in 1998.";

const chars = [...STORY].length;
const sentences = STORY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (chars < 1 || chars > 400) throw new Error(`story is ${chars} chars, must be 1-400`);
if (sentences.length !== 2) throw new Error(`story has ${sentences.length} sentences, must be 2`);
if (STORY.trim().length === 0) throw new Error("story is only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
