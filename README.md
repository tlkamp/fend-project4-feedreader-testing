# Feed Reader Testing
This is a test suite for Udacity's [Feed Reader](https://github.com/udacity/frontend-nanodegree-feedreader)

## Dependencies
  * [Jasmine 2.1.2](https://jasmine.github.io/) - for running the tests.
  * [NodeJS](https://nodejs.org/en/) 
  * [NPM](https://www.npmjs.com/)
  * [GulpJS](https://gulpjs.com/) - for the automated workflow.
    * [gulp-eslint](https://www.npmjs.com/package/gulp-eslint) - for linting with Gulp. 
    * [browser-sync](https://browsersync.io/) - to load and auto-reload the feed reader and tests.
* An internet connection for the RSS Feeds.

## Running the Feed Reader / Tests
To use the Feed Reader and run/view the tests:

1. Clone or download this repository.
    * Note the location where it is saved!
2. Open [`index.html`](index.html) in your favorite browser.
    * All tests will run when the page loads. The Jasmine test summary can
    be viewed at the bottom of the page, below the loaded feeds.
    * Individual tests can be run by clicking on the description.

### Test Cases
1. RSS Feeds
    * The `allFeeds` variable is defined.
    * The `feeds` within `allFeeds` have a `url` property that is not `undefined` and is not empty.
2. The Menu
    * Is hidden when the page loads.
    * Can be toggled appropriately.
3. Initial Entries
    * There is at least 1 entry when the page loads.
4. News Feed Selection
    * The content changes when a new feed loads.
5. Loading Feeds
    * The `id` of the feed specified must be:
        * Defined.
        * Greater than or equal to zero.
        * Less than the total number of entries.
        * Must convert to a `number` type.

## Using the Automated Workflow
To use the automated workflow defined in [`gulpfile.js`](gulpfile.js):

1. Clone this repository. 
    * Note the location where it is stored!
2. Ensure `npm` and `nodejs` are installed, and install them if they are not.
3. Install this project with `npm`:
    ```shell
    $ cd project4_feedreader
    $ npm install .
    ```
4. Inspect the `gulp --tasks` exposed by [`gulpfile.js`](gulpfile.js):
    ```shell
    $ gulp --tasks
    [19:30:56] Tasks for project4_feedreader/gulpfile.js
    [19:30:56] ├── default
    [19:30:56] └─┬ run
    [19:30:56]   └─┬ <series>
    [19:30:56]     ├── lint
    [19:30:56]     └─┬ <parallel>
    [19:30:56]       ├── watch
    [19:30:56]       └── initServer
    ```
5. Run the desired task:
    ```shell
    # for code style / format checking, run gulp
    $ gulp

    # for browser auto-reloading when your javascript changes, run gulp run
    $ gulp run
    ```