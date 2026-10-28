# VowToDo — website

Public pages for VowToDo, served from **vowtodo.com** (Cloudflare Pages).
Static HTML and CSS. No build step. The marketing pages share `/site.css`.

- `/` home
- `/features`, `/pricing`, `/download`
- `/blog` and `/blog/<slug>` articles
- `/guide/<slug>` articles (the `/guide` index redirects to `/blog`)
- `/support`, `/privacy`, `/terms`
- `/app` the web app, `/join` crew invites, `/r` guest RSVPs

## Adding a guide or a blog post

Copy `blog/_post-template.html` to `blog/<slug>/index.html` or `guide/<slug>/index.html`.
The comment at the top of the template lists the four edits: the copy, a row on `/blog`, a line in `sitemap.xml`, and removing `noindex`.
Styles for posts live in `/site.css`. A new post should not need its own stylesheet.
