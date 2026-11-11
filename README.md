# selene.games

The website of [Selene Launcher](https://github.com/LunixSudo/selene-launcher), served by
GitHub Pages from the `main` branch.

Plain HTML and CSS with no build step: `index.html` is the English page, `ru/index.html` the
Russian one, and both share `assets/`. The download buttons point at the releases page and
`assets/site.js` swaps in the newest release's files when GitHub answers.

`discord/` and `telegram/` are short links: selene.games/discord and selene.games/telegram
forward to the community server and the news channel.

`assets/screens/` holds screenshots of the launcher in each language. The fonts in
`assets/fonts/` are Onest and Pixelify Sans under the SIL Open Font License, served from the
site itself so no page asks a third party for them.

To preview locally:

```sh
python3 -m http.server 8000
```

`pnpm install && pnpm lint` checks the pages the way CI does. Problems with the launcher
itself go to its [issue tracker](https://github.com/LunixSudo/selene-launcher/issues).

The site is licensed under the [GPL-3.0](LICENSE), like the launcher.
