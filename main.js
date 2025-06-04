import Apify from 'apify';

const { log } = Apify;

Apify.main(async () => {
    const input = await Apify.getInput();

    log.info('Input received:', input);

    if (!input.apifyApiToken) {
        throw new Error('Apify API Token is required!');
    }

    // Example: Check LinkedIn actor1
    if (input.linkedin?.actor1?.enabled) {
        log.info('LinkedIn Actor 1 is enabled');
        log.info('Input for LinkedIn Actor 1:', input.linkedin.actor1.input);
        // Here you would start the actual LinkedIn scraping logic
    }

    // Example: Check LinkedIn actor2
    if (input.linkedin?.actor2?.enabled) {
        log.info('LinkedIn Actor 2 is enabled');
        log.info('Input for LinkedIn Actor 2:', input.linkedin.actor2.input);
        // Start LinkedIn actor 2 scraping logic here
    }

    // Example: Check Indeed actor1
    if (input.indeed?.actor1?.enabled) {
        log.info('Indeed Actor 1 is enabled');
        log.info('Input for Indeed Actor 1:', input.indeed.actor1.input);
        // Start Indeed actor 1 scraping logic here
    }

    log.info('Actor run finished.');
});