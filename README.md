# VowToDo — website

Public guest-facing pages for VowToDo, served from **vowtodo.com** (Cloudflare Pages).
Plain static HTML/CSS/JS, no build step. Pages call the Supabase Edge Function JSON APIs cross-origin.

- `index.html` — apex landing placeholder (`vowtodo.com/`)
- `r/index.html` — public RSVP page (`vowtodo.com/r?g=<token>,<token>,...`)
