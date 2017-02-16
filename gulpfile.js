var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var staticTransform = require('connect-static-transform');
var buildDirectory = 'dist';
var pkg = require('./package.json');

gulp.task('build', function() {

    gulp.src('jquery.tkDropdown.js')
        .pipe(gulp.dest(buildDirectory));

    return gulp.src('jquery.tkDropdown.js')
        .pipe(uglify({ output: { max_line_len: 500 } }))
        .pipe(rename({ suffix: '-min' }))
        .pipe(gulp.dest(buildDirectory));
});

gulp.task('lint', function() {
    return gulp.src(pkg.main)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


var emulateIEMiddlewareFactory = function(version) {
    return staticTransform({
        root: __dirname,
        match: /(.+)\.html/,
        transform: function (path, text, send) {
            send(text.replace('content="IE=edge,chrome=1"', 'content="IE=' + version + '"'));
        }
    });
};

var emulateIEMiddleware = {
    'ie8': emulateIEMiddlewareFactory(8),
    'ie9': emulateIEMiddlewareFactory(9),
    'ie10': emulateIEMiddlewareFactory(10)
};

var shell = function(command, callback) {
    var args = process.argv.slice(3).join(' '),
        proc = exec(command + ' ' + args, function(err) {
            callback(err);
        });

    proc.stdout.on('data', function(data) {
        process.stdout.write(data);
    });

    proc.stderr.on('data', function(data) {
        process.stderr.write(data);
    });
};
