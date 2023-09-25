# Mathematical Analysis 2 - University of Rome Tor Vergata, 2023-24

This "book" contains all practical information related to the course and also the lecture notes.

## Technical details

The webpage is built using [mdbook](https://rust-lang.github.io/mdBook/) with plugin in order to format mathematics. 
In order to preview locally, make sure that mdbook and the extensions are installed and run 
```sh
mdbook serve
``` 
to provide a local version which updates when source files are edited. 
A github action deploys a new production version of the site when commits are made to the `main` branch.

### Installing mdbook and mdbook-katex

Make sure that `rust` and `cargo` are installed. Then
```sh
cargo install mdbook
cargo install mdbook-katex
cargo install mdbook-admonish
```