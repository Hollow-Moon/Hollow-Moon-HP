# Hollow-Moon.github.io
The website of Hollow Moon over at [hollow-moon.org](https://hollow-moon.org).

## Development

### Local development environment

#### Option 1: Dev Container
1. Install [Docker](https://www.docker.com/).
2. Open the project with [Visual Studio Code](https://code.visualstudio.com/).
3. Install the [Remote - Containers extension](vscode:extension/ms-vscode-remote.remote-containers).
4. Use the `Remote-Containers: Open Folder in Container` action in Visual Studio Code to re-open the project within the development container.

#### Option 2: Manually
1. Install [Ruby](https://www.ruby-lang.org/en/). **You need Ruby 2**.
2. Install project dependencies:
   ```sh
   bundle install
   ```

Note that this option might straight up just not work on Windows, hence the existence of Option 1.

### Development server
Either within the dev container or locally, run:
```sh
bundle exec jekyll serve --livereload
```

If you're on Windows and or using a dev container, you might need to also append the `--force_polling` flag to get the development to watch for all file changes, including Sass.

### Contributing new pages
New blog posts need to be created under the `_posts` directory as Markdown files with the following file name pattern: `YYYY-MM-DD-text-here.md`.

Then, the blog post also needs Jekyll front matter, which is a block starting and ending with `---`. Specifically, `layout: post` should be specified, and a `title`, `excerpt` and `date` tag need to be added too. The `date` tag needs to be in the format of: `YYYY-MM-DD HH:MM:SS +TZ`.

Finally, currently the typography of the blog posts has been designed around having top level headings on each post start at Heading 3, so the top level headings need a `###` prefix. (Subject to change)

Please refer to existing pages for an example.
