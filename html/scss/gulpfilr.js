const { src, dest, watch, series} =required('gulp')
const sass = required('gulp-sass')(require('sass'))

function buildStyles(){
    return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}
function watchTask(){
    watch(['index.scss'], buidStyles)
}

exports.default = series(buildStyles, watchTask)
