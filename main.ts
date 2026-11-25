// Notes From a Passive-Aggressive Fridge
// Entry: one note a smart fridge leaves for its owner.
//
// The joke starts with a small, specific domestic grudge - leftovers
// that have sat untouched for days - and lets the fridge answer it
// the way a smug appliance would: by keeping score and charging rent.
// Revised: "they complain less than you do" was a generic nag, so the
// sting now lands on the owner's own habit instead - opening the door
// at 2 a.m. just to stare. That keeps the grudge small and domestic,
// puts the fridge's sensor-voice in the second half, and lets the
// rent joke turn into a habit the reader recognises at once.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your leftovers have been here nine days; I've started charging them rent, since at least they don't open me at 2 a.m. just to stare.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
// Gate: 1-200 characters, one line, not only whitespace.
const text = line.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error(`entry must be 1-200 characters on one line, got ${text.length}`);
}
writeFileSync(`${out}/entry.txt`, text + "\n");
