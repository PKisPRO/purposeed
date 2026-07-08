# Media assets to add

No internet access was assumed while building this site, so no real logos, photos,
or video were fetched or bundled. Every image reference below has a graceful fallback
already coded in (initials badge for logos, gradient-initials avatar for founders), so
the site looks complete and premium right now — dropping in the real files below is a
pure upgrade, not a blocker.

## University logos → `public/logos/universities/`

Source official logos from each university's official media/brand page or Wikimedia.
Use SVG where possible; PNG/WebP with a transparent background otherwise. Keep files
under ~50KB each.

| File | University |
|---|---|
| `harvard.svg` | Harvard University |
| `cornell.svg` | Cornell University |
| `upenn.svg` | University of Pennsylvania |
| `ubc.svg` | The University of British Columbia |
| `toronto.svg` | University of Toronto |
| `western.svg` | Western University |
| `york.svg` | York University |
| `mcgill.svg` | McGill University |
| `uq.svg` | University of Queensland |
| `warwick.svg` | University of Warwick |
| `ashoka.svg` | Ashoka University |
| `azim-premji.svg` | Azim Premji University |

## Partner / organisation logos → `public/logos/partners/`

| File | Organisation |
|---|---|
| `united-nations.svg` | United Nations |
| `dalberg.svg` | Dalberg |
| `accenture.svg` | Accenture |
| `digital-dx-ventures.svg` | Digital Dx Ventures |
| `lumiere-education.svg` | Lumiere Education |
| `nikore-associates.svg` | Nikore Associates |
| `jivam-foundation.svg` | JIVAM Foundation |
| `govt-haryana.svg` | Government of Haryana |
| `tie.svg` | TiE |
| `global-spark.svg` | Global Spark |
| `unleash.svg` | UNLEASH |
| `tedx.svg` | TEDx |

Until these files exist, `LogoMarquee` (`components/ui/LogoMarquee.tsx`) automatically
renders a clean initials badge + name instead of a broken image — verified in the
running site.

## Founder photos → `public/founders/`

| File | Founder |
|---|---|
| `abhijeet.jpg` | Abhijeet Godara |
| `isha.jpg` | Isha Godara |
| `michelle.jpg` | Michelle Kim-Rissi |

Until these exist, `FounderSection` (`components/sections/FounderSection.tsx`) falls
back to a gradient circle with the founder's initials.

## Hero video → `public/videos/purposeed-hero-campus.mp4`

Source from a licensed stock platform (e.g. Artgrid, Storyblocks, Envato Elements) or
original footage — never copyrighted university/institutional footage. Suggested brief:
a global admissions-journey montage (campus walks, mentorship conversations, students
celebrating acceptance, essay/application planning). Spec: 1920×1080, autoplay-safe
(muted, no audio needed), 15–25s loop, under 15MB. Poster fallback below.

## Hero poster fallback → `public/images/hero-poster.jpg`

A single high-quality still (same visual direction as the video) shown before the video
loads and on connections that block autoplay.

## Real purposeed logo file → `public/logos/purposeed-logo.svg` (optional)

Confirmed against the Branding Kit PDF: the real logo is a pure wordmark — "purpose" in
cream, "ed" in coral, Poppins bold, lowercase, normally set on an indigo background —
which is exactly what `components/layout/Header.tsx` and `components/layout/Footer.tsx`
already render as styled text (with an inverted indigo-on-cream treatment for the
scrolled/light header state, since cream-on-cream would be invisible). No visual change
is needed.

If you'd rather use the exported master file instead of the recreated text lockup, pull
it from the Branding Kit's Drive (`https://drive.google.com/file/d/1vJAq-5RL7IJA3dr3BQbI7jUaRXzN_rJU/view`)
or Canva (`https://canva.link/o1slobqu1xlwce5`) links — both need manual export since
they require an authenticated session this build couldn't access — save an SVG/PNG to
the path above, and swap the text markup for an `<Image>` in both files.
