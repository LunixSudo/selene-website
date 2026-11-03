# selene.games

The website of [Selene Launcher](https://github.com/LunixSudo/selene-launcher), served by
GitHub Pages from the `main` branch.

Plain HTML and CSS with no build step: `index.html` is the English page, `ru/index.html` the
Russian one, and both share `assets/`. The download buttons point at the releases page and
`assets/site.js` swaps in the newest release's files when GitHub answers.

To preview locally:

```sh
python3 -m http.server 8000
```
