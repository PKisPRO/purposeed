# Media assets

## University logos → `public/logos/universities/`

| File | University | Status |
|---|---|---|
| `harvard.svg` | Harvard University | ✅ Real (Wikimedia Commons) |
| `cornell.svg` | Cornell University | ✅ Real (Wikimedia Commons) |
| `upenn.svg` | University of Pennsylvania | ✅ Real wordmark (Wikimedia Commons) |
| `ubc.svg` | The University of British Columbia | ✅ Real coat of arms (Wikimedia Commons, embedded-raster SVG so the file is ~690KB — kept as-is rather than fake a lighter vector) |
| `york.svg` | York University | ✅ Real (Wikimedia Commons) |
| `warwick.svg` | University of Warwick | ✅ Real shield (Wikimedia Commons) |
| `toronto.svg` | University of Toronto | ⬜ Needed — no verified official asset found on Commons (only found Wikipedia-outreach-program logos, which are not the university's own mark) |
| `western.svg` | Western University | ⬜ Needed — no match found for the Canadian Western University (search only surfaced unrelated US "Western" schools) |
| `mcgill.svg` | McGill University | ⬜ Needed — only found a generic "Martlet" bird graphic shared across multiple unrelated logos, not confidently McGill's own mark |
| `uq.svg` | University of Queensland | ⬜ Needed — only found individual residential-college shields, not the university's own logo |
| `ashoka.svg` | Ashoka University | ⬜ Needed — not present on Wikimedia Commons |
| `azim-premji.svg` | Azim Premji University | ⬜ Needed — not present on Wikimedia Commons |

For the ⬜ ones: download the official logo from the university's brand/media page (links were provided in chat) and save at the path above. Until then, `LogoMarquee` shows a clean initials badge — never a broken image or a guessed/fake logo.

## Partner / organisation logos → `public/logos/partners/`

| File | Organisation | Status |
|---|---|---|
| `united-nations.svg` | United Nations | ✅ Real (Wikimedia Commons) |
| `accenture.svg` | Accenture | ✅ Real (Wikimedia Commons) |
| `govt-haryana.svg` | Government of Haryana | ✅ Real emblem (Wikimedia Commons) |
| `dalberg.svg` | Dalberg | ⬜ Needed — not on Commons; pull from dalberg.com |
| `digital-dx-ventures.svg` | Digital Dx Ventures | ⬜ Needed — pull from their site/LinkedIn |
| `lumiere-education.svg` | Lumiere Education | ⬜ Needed — pull from lumiere-education.com |
| `nikore-associates.svg` | Nikore Associates | ⬜ Needed — pull from nikoreassociates.com |
| `jivam-foundation.svg` | JIVAM Foundation | ⬜ Needed — pull from their LinkedIn/give.do page |
| `tie.svg` | TiE | ⬜ Needed — pull from tie.org |
| `global-spark.svg` | Global Spark | ⬜ Needed — pull from their site/LinkedIn |
| `unleash.svg` | UNLEASH | ⬜ Needed — not on Commons; pull from unleash.org |
| `tedx.svg` | TEDx | ⬜ Needed — only found event-specific TEDx logos (e.g. TEDxPortland) on Commons, not the generic TEDx mark; pull from the official brand guidelines page |

## Founder photos → `public/founders/`

| File | Founder | Status |
|---|---|---|
| `abhijeet.jpg` | Abhijeet Godara | ⬜ Needed |
| `isha.jpg` | Isha Godara | ⬜ Needed |
| `michelle.jpg` | Michelle Kim-Rissi | ⬜ Needed |

Until these exist, `FounderSection` falls back to a gradient circle with the founder's initials.

## Hero video → `public/videos/purposeed-hero-campus.mp4`

✅ Done — a real, licensed Coverr stock clip ("Boy and girl studying outdoors", free commercial license, no attribution required), ~4.8MB, verified as a complete, valid MP4.

## Hero poster fallback → `public/images/hero-poster.jpg`

✅ Done — a still frame extracted directly from the installed hero video, so it always matches.

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
