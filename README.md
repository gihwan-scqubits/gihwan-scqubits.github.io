# gihwan-scqubits.github.io

Personal website of Gihwan Kim, built with [Jekyll](https://jekyllrb.com) and deployed to
GitHub Pages by the workflow in `.github/workflows/jekyll.yml`.

## Editing

| What | Where |
|---|---|
| Bio, section order | `index.md` |
| Publications | `_data/publications.yml` (thumbnails in `assets/img/pubs/`) |
| Talks | `_data/talks.yml` |
| Positions and degrees | `_data/experience.yml` |
| Profile links, email | `_config.yml` under `author:` |
| Blog posts | `_posts/YYYY-MM-DD-slug.md` (set `math: true` for KaTeX) |
| Styles | `assets/css/main.css` |
| CV | `assets/cv/Gihwan_Kim_CV.pdf` |

## Local preview

```sh
brew install ruby                      # once; Homebrew Ruby, not the system one
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install                         # once
bundle exec jekyll serve --livereload  # http://localhost:4000
```

## License

Code (layouts, CSS, scripts) is MIT licensed, see `LICENSE`. Text, figures, and the CV are
© Gihwan Kim; publication figures are reproduced from the author's own papers.
