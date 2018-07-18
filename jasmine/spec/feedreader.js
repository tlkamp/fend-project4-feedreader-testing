/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have a URL defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        it('have a name defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            })
        });
    });

    describe('The menu', function() {
        const body = document.getElementsByTagName('body')[0];

        it('is hidden by default', function(){
            expect(body.classList).toContain('menu-hidden');
        });

         it('can be toggled', function() {
            const button = $('.menu-icon-link');
            button.click();
            expect(body.classList).not.toContain('menu-hidden');

            button.click();
            expect(body.classList).toContain('menu-hidden');
         });
    });

    describe('Initial Entries', function() {

        const feed_container = $('.feed');
        
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('there is at least 1 entry', function(done){
            expect(feed_container.children().length).not.toBeLessThan(1);
            done();
        });
    });

    describe('New Feed Selection', function() {

        let first_feed;
        let second_feed;

        beforeEach(function(done){
            loadFeed(0, function () {
                first_feed = document.querySelector('.feed').innerHTML;

                /*
                    I tried several versions of this function. 
                    
                    Having the load calls as 2 separate blocks and calling done(); twice immediately 
                    invoked the 'it' below, so i was comparing HTML against 'undefined' and getting 
                    false positives/negatives.

                    Removing the done() call in one of the tests resulted in the test passing correctly
                    on first load, but would pass erroneously if the indicies of either load function were 
                    changed.

                    Adding the second loadFeed call into the callback of the first, and then calling done()
                    in the callback of the second loadFeed call produces the correct behavior.
                */
                loadFeed(1, function() {
                    second_feed = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('should not result in the same content', function(done){
            expect(first_feed).not.toEqual(second_feed);
            done();
        });
    });

    describe('Loading Feeds', function(){
        it('Requires a valid ID', function() {
            expect(() => loadFeed(-1)).toThrow();
            expect(() => loadFeed(99)).toThrow();
            expect(() => loadFeed(undefined)).toThrow();
            expect(() => loadFeed('0')).toThrow();
        });
    });
}());
