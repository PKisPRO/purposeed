# Media assets

## University logos → `public/logos/universities/` — ✅ all real

Cropped directly from purposeed's own "Acceptances" deck slide, so these are exactly the
real assets, not third-party approximations.

| File | University |
|---|---|
| `harvard.png` | Harvard University |
| `upenn.png` | University of Pennsylvania |
| `cornell.png` | Cornell University |
| `ubc.png` | The University of British Columbia |
| `toronto.png` | University of Toronto |
| `mcgill.png` | McGill University |
| `york.png` | York University |
| `warwick.png` | University of Warwick |
| `western.png` | Western University |
| `uq.png` | University of Queensland |
| `alberta.png` | University of Alberta |
| `azim-premji.png` | Azim Premji University |
| `ashoka.png` | Ashoka University |
| `aiims.png` | All India Institute of Medical Sciences |
| `mnit-jaipur.png` | Malaviya National Institute of Technology Jaipur |

`University of Alberta`, `AIIMS`, and `MNIT Jaipur` weren't in the original list — the
deck's actual acceptances slide has 15 universities, not 12, so `lib/data.ts` was updated
to match the source of truth.

## Partner / organisation logos → `public/logos/partners/` — ✅ 17 of 18 real

Also cropped directly from purposeed's own "Partnerships & Experiences" deck slide.

| File | Organisation |
|---|---|
| `lumiere-education.png` | Lumiere Education |
| `global-spark.png` | Global Spark |
| `tie.png` | TiE |
| `digital-dx-ventures.png` | Digital Dx Ventures |
| `ignitexl-ventures.png` | igniteXL Ventures |
| `united-nations.png` | United Nations |
| `wfuna.png` | WFUNA (World Federation of UN Associations) |
| `tedx.png` | TEDx |
| `unleash.png` | UNLEASH |
| `indian-army.png` | Indian Army |
| `govt-haryana.png` | Government of Haryana |
| `govt-india.png` | Government of India |
| `dalberg.png` | Dalberg |
| `accenture.png` | Accenture |
| `shes-the-first.png` | She's the First |
| `jivam-foundation.png` | JIVAM Foundation |
| `girl-up.png` | Girl Up |

The deck revealed several partners not in the original list (igniteXL Ventures, WFUNA,
Indian Army, Government of India, She's the First, Girl Up) — added to `lib/data.ts`.
It also clarified that the "Government" logo was actually two distinct emblems (Indian
Army + Govt. of Haryana) plus the national emblem, not one generic mark.

| File | Organisation | Status |
|---|---|---|
| `nikore-associates.svg` | Nikore Associates | ⬜ Needed — not shown in the deck; pull from nikoreassociates.com. `LogoMarquee` shows a clean initials badge in the meantime. |

## Founder photos → `public/founders/` — ✅ all real

Cropped from purposeed's own "Founders" deck slide.

| File | Founder |
|---|---|
| `abhijeet.png` | Abhijeet Godara |
| `isha.png` | Isha Godara |
| `michelle.png` | Michelle Kim-Rissi |

## Hero background video → `public/videos/hero.mp4`

Replaces the old four-clip watermarked-stock-footage playlist. `Hero.tsx` now plays a
single local file on native `loop`. Source was a 364MB/57s screen recording (H.264,
3024×1564) — too large to commit (GitHub rejects files over 100MB) and too heavy for a
hero background regardless, so it was re-encoded with ffmpeg to exactly 55 seconds,
1920×994, 30fps, ~22MB, no audio track.

There's currently no `poster` image configured — the section shows the gradient/dot-pattern
background until the video loads, which is fine, but if you want a poster, generate one as
a still frame from `hero.mp4` and wire it back into the `<video>` element in `Hero.tsx`.

## Real purposeed logo file → `public/logos/purposeed-logo.svg` (optional)

Confirmed against the Branding Kit PDF: the real logo is a pure wordmark — "purpose" in
cream, "ed" in coral, Poppins bold, lowercase, normally set on an indigo background —
which is exactly what `components/layout/Header.tsx` and `components/layout/Footer.tsx`
already render as styled text. No visual change needed.

If you'd rather use the exported master file, pull it from the Branding Kit's Drive
(`https://drive.google.com/file/d/1vJAq-5RL7IJA3dr3BQbI7jUaRXzN_rJU/view`) or Canva
(`https://canva.link/o1slobqu1xlwce5`) links — both need manual export since they
require an authenticated session — save an SVG/PNG to the path above, and swap the text
markup for an `<Image>` in both files.
