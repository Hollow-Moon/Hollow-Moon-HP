# Hollow-Moon.github.io

The website of Hollow Moon over at [hollow-moon.org](https://hollow-moon.org).

## Development

### Local development environment

#### Option 1: Dev Container

1. Install [Docker](https://www.docker.com/).
2. Open the project with [Visual Studio Code](https://code.visualstudio.com/).
3. Install the [Remote - Containers extension](vscode:extension/ms-vscode-remote.remote-containers).
4. Use the `Remote-Containers: Open Folder in Container` action in Visual Studio Code to re-open the project within the development container.
5. Install project dependencies:

    ```sh
    bundle install
    ```

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

If you're on Windows and / or using a dev container, you might need to also append the `--force_polling` flag to get the development to watch for all file changes, including Sass.

### Advanced: BrowserSync with Gulp v4

Tired of a full page reload every time CSS refreshes? You can use the provided `gulpfile` and a little help from Node.js to use BrowserSync and have instant CSS updates during development.

Follow the setup below and then run `gulp serve`.

Note: If you're on Windows and / or using the dev container, you might need to also set the env variable `POLL` to `1` to force file updates to be polling based. To customize the polling interval you can provide a value to the `POLLING_INTERVAL` env variable in ms.

#### Set up

0. When not using the dev container as the dev environment, install [Node.js](https://nodejs.org/en/).
1. Install the Gulp CLI:

    ```sh
    npm i -g gulp-cli
    ```

2. Install the dev dependencies:

    ```sh
    npm i -d
    ```

3. To run, use:

    ```sh
    gulp serve
    ```

### Contributing new pages

New blog posts need to be created under the `_posts` directory as Markdown files with the following file name pattern: `YYYY-MM-DD-text-here.md`.

Then, the blog post also needs Jekyll front matter, which is a block starting and ending with `---`. Specifically, `layout: post` should be specified, and a `title`, `excerpt` and `date` tag need to be added too. The `date` tag needs to be in the format of: `YYYY-MM-DD HH:MM:SS +TZ`.

Finally, currently the typography of the blog posts has been designed around having top level headings on each post start at Heading 3, so the top level headings need a `###` prefix. (Subject to change)

Please refer to existing pages for an example.
