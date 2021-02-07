var gulp = require("gulp");
var less = require("gulp-less");
var rename = require('gulp-rename');
const rm = require("rimraf");
const cssmin = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');


const {watch, task, series, parallel} = gulp;

var lessGlob = ["src/**.less","!**/tool.less"];


function swallowError(error){
    console.error("已捕获错误:",error.toString());
}

gulp.task("build-less",async function(){
    await new Promise(resolve=> rm("dist", resolve));
    await gulp
        .src("src/dist-index.less")
        .pipe(less({

        }))
        .pipe(rename(file=>{
            file.basename = "index.uncompressed";
        }))
        .pipe(
            gulp.dest("dist")
        )
        .pipe(
            cleanCSS({
                backgroundClipMerging: true, // controls background-clip merging into shorthand
                backgroundOriginMerging: true, // controls background-origin merging into shorthand
                backgroundSizeMerging: true, // controls background-size merging into shorthand
                colors: true, // controls color optimizations
                ieBangHack: false, // controls keeping IE bang hack
                ieFilters: false, // controls keeping IE `filter` / `-ms-filter`
                iePrefixHack: false, // controls keeping IE prefix hack
                ieSuffixHack: false, // controls keeping IE suffix hack
                merging: true, // controls property merging based on understandability
                shorterLengthUnits: false, // controls shortening pixel units into `pc`, `pt`, or `in` units
                spaceAfterClosingBrace: true, // controls keeping space after closing brace - `url() no-repeat` into `url()no-repeat`
                urlQuotes: true, // controls keeping quoting inside `url()`
                zeroUnits: true // controls removal of units `0` value
            })
        )
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



