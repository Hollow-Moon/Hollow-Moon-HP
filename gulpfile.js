const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const cp = require("child_process");
const frontMatter = require("gulp-front-matter");

const usePolling = process.env.POLL == "1";
const pollingInterval = parseInt(process.env.POLLING_INTERVAL) ?? 350;

function style() {
    return gulp.src("assets/style/main.scss")
        .pipe(frontMatter({
            property: "frontMatter",
            remove: true,
        }))
        .pipe(sass({
            includePaths: ["_sass"]
        }).on("error", sass.logError))
        .pipe(gulp.dest("_site/assets/style"))
        .pipe(browserSync.stream());
}

function jekyll(done) {
    return cp.spawn("bundle", ["exec", "jekyll", "build"], {stdio: "inherit"})
        .on("close", done)
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "_site"
        },
        port: 4000
    });
    console.log(`Polling: ${usePolling ? `ON (${pollingInterval}ms)` : "OFF"}`);
    gulp.watch(
        ["_sass/**/*.scss", "assets/style/main.scss"],
        {usePolling: usePolling, interval: 500},
        style
    );
    gulp.watch(
        ["index.html", "_posts/*.md", "_includes/*.html", "_layouts/*.html"],
        {usePolling: usePolling, interval: 500},
        gulp.series(jekyll, browserSyncReload)
    )
}

exports.style = style;
exports.serve = gulp.series(jekyll, watch);
exports.build = jekyll;