# Kraken [![Build Status](https://travis-ci.org/cferdinandi/kraken.svg)](https://travis-ci.org/cferdinandi/kraken)
Kraken is a lightweight, mobile-first boilerplate for front-end web developers. [View the demo and get started](http://cferdinandi.github.com/kraken/).


## How to Contribute

In lieu of a formal style guide, take care to maintain the existing coding style. Don't forget to update the version number, the changelog (in the `readme.md` file), and when applicable, the documentation.


## License

Kraken is free to use under the [MIT License](http://gomakethings.com/mit/).


## Changelog

Kraken uses [semantic versioning](http://semver.org/).

* v3.8.1 - August 24, 2014
    * Fixed unit tests path.
    * Added feature testing and main JS files to their own subfolders for concatenation.
* v3.8.0 - August 12, 2014
    * Added `@each` loop for icons and the grid for easier maintenance.
    * Switched from sasslib to Ruby Sass for compiling (more compatible with Sass 3.x features).
    * Added variable for container width property.
    * Added variable to bump font-size on xlarge screens.
* v3.7.0 - July 21, 2014
    * Added `[hidden]` attribute polyfill.
    * Converted to CSSDoc inline documentation.
    * Added nested media queries for better readability.
    * Added `:focus` and `:visited` styles for links and buttons.
* v3.6.1 - June 24, 2014
    * Removed italics from h4, h5, and h6 elements.
* v3.6.0 - June 23, 2014
    * Converted to gulp.js workflow.
    * Added unit testing.
    * Updated naming conventions.
    * Removed unused `_mixins.scss` function.
    * Added minified versions of files.
    * Converted to three number versioning.
    * [Replaced Google-hosted HTML5 shim with local version](https://github.com/cferdinandi/kraken/issues/60).
    * [Updated icon recommendations](https://github.com/cferdinandi/kraken/issues/59).
    * [Updated Google Analytics placeholder](https://github.com/cferdinandi/kraken/issues/66).
* v3.5 - March 26, 2014
    * Added `@font-face` feature test.
    * Added fallback text for icons.
* v3.4 - February 16, 2014
    * [Added fix for Firefox on Android button styling quirk.](https://github.com/cferdinandi/kraken/pull/36)
* v3.3 - February 4, 2014
    * [Added universal box-sizing.](https://github.com/cferdinandi/kraken/issues/32)
    * Redesigned grid with simple percentages (made possible with universal box-sizing).
    * Added `grid-margins` variable that let's users change the grid margins in the `config.scss` file.
* v3.2 - January 13, 2014
    * [Added word-break to long headings for better usability.](https://github.com/cferdinandi/kraken/issues/27)
* v3.1 - December 2, 2013
    * [Reorganized package structure for easier usability.](https://github.com/cferdinandi/kraken/issues/21)
* v3.0 - November 29, 2013
    * Added Sass integration.
    * Changed naming conventions from `*-blue` to `*-secondary` for better abstraction.
    * Updated typographic scale to a 16px base.
    * Redesigned grid uses fraction-based naming (`.grid-third` instead of  `.grid-2`).
    * Added `.active` and `.disabled` classes to buttons.
    * Dropped rounded corners from buttons, forms, etc.
* v2.6 - November 13, 2013
    * [Added definition list styling](https://github.com/cferdinandi/kraken/issues/14).
* v2.5 - October 21, 2013
    * [Added `tab-size` property to the `pre` element](https://github.com/cferdinandi/kraken/issues/12).
    * [Added `word-break` property to links](https://github.com/cferdinandi/kraken/issues/5) to fix convert overflow issues.
    * [Updated CSS Reset](https://github.com/cferdinandi/kraken/issues/8) to incorporate some improvements to Normalize.css.
    * [Removed IE7- hacks](https://github.com/cferdinandi/kraken/issues/7).
    * [Updated grid for better performance](https://github.com/cferdinandi/kraken/issues/9).
    * [Converted from spaces to tabs](https://github.com/cferdinandi/kraken/issues/11).
    * [Fixed `vertical-align` and `display: block` conflict for forms](https://github.com/cferdinandi/kraken/issues/13).
* v2.4 - October 18, 2013
    * Fixed [`input-inline`](https://github.com/cferdinandi/kraken/issues/6).
* v2.3 - August 24,2013
    * Minor styling update for Code section
* v2.2 - July 29, 2013
    * Removed iOS Rotation Zoom Bug Fix JS (bug fixed from iOS6 on).
* v2.1 - June 7, 2013
    * Switched to MIT license.
* v2.1 - June 2, 2013
    * Added version numbering.
* v2.1 - March 19,2013
    * Changed `.screen-reader` class to ems.
* v2.0 - March 18, 2013
    * Removed gradients on buttons.
    * Changed `.btn-color` to `.btn-blue`, breaking previous pattern.
* v2.0 - March 15, 2013
    * Changed `.unstyled` to `.list-unstyled`, breaking previous pattern.
* v1.1 - March 14, 2013
    * Added print styling.
* v1.0 - May 7, 2013
    * Initial release.