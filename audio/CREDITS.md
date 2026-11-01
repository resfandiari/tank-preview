# Audio credits

**There are no audio files in this project.**

Every sound in Tank.io is synthesised at runtime with the Web Audio API (oscillators, filtered
white noise, gain envelopes). Nothing is sampled, so there is nothing to license and no binary
assets to ship.

| Sound            | How it is made                                                | Source      |
| ---------------- | ------------------------------------------------------------- | ----------- |
| shot             | square oscillator 190 to 55 Hz plus a high-passed noise burst | synthesised |
| hit              | triangle thump 150 to 70 Hz                                   | synthesised |
| explosion        | low-pass swept noise plus a 70 Hz sub sine                    | synthesised |
| crush (per tier) | low-pass noise; cutoff and length scale with the object tier  | synthesised |
| pickup           | sine blip whose pitch climbs with rapid combos                | synthesised |
| tier-up          | four-note triangle arpeggio                                   | synthesised |
| death            | descending sawtooth through a low-pass                        | synthesised |
| music            | four-oscillator pad with a slow filter LFO                    | synthesised |

If we later replace these with recorded samples they must be CC0 or otherwise licensed for
commercial use, and every file must be listed above with its licence and author.
