const {src, dest,  parallel} = require("gulp");

// Imagenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function imagenes(callback) {
    const opciones = {
        optimizationLevel: 3
    }
    src('img-input/**/*.{jpg,png}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('img-output'));
    callback();
}
function versionWebp(callback) {
    const opciones = {
        quality: 50,
    };

    src('img-input/**/*.{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('img-output'));
    callback();
}

function versionAvif(callback) {
    const opciones = {
        quality: 50,
    };

    src('img-input/**/*.{jpg,png}')
        .pipe(avif(opciones))
        .pipe(dest('img-output'));
    callback();
}

exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif);