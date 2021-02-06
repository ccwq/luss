var gulp = require("gulp");
var less = require("gulp-less");
var rename = require('gulp-rename');
const rm = require("rimraf");
const cssmin = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');

const {watch, task, series, parallel} = gulp;

var lessGlob = ["src/**.less","!**/tool.less"];


function swallowError(error){
    console.error("已捕获错误:",error.toString());
}

gulp.task("build-less",async function(){
    await new Promise(resolve=> rm("dist", resolve));
    return gulp
        .src("src/dist-index.less")
        .pipe(less({

        }))
        .pipe(rename(file=>{
            file.basename = "index.uncompressed";
        }))
        .pipe(
            gulp.dest("dist")
        )
        //兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
        .pipe(cssmin())
        .on("error",swallowError)
        .pipe(rename(function(file){
           file.basename = "index";
        }))
        .pipe(
            gulp.dest("dist")
        )
    ;
});



task("watch-less",function(){
    watch(lessGlob, series(["build-less"]));
})



