# Feed Reader Testing
This is a test suite for Udacity's [Feed Reader](https://github.com/udacity/frontend-nanodegree-feedreader)

## Dependencies
  * [Jasmine 2.1.2](https://jasmine.github.io/) - for running the tests.
  * An internet connection for the RSS Feeds.

## Running the Tests
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