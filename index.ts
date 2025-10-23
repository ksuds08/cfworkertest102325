// index.ts - Cloudflare Worker

/**
 * Fetch event handler for the Cloudflare Worker.
 * 
 * @param {FetchEvent} event - The fetch event that triggers the worker.
 */
addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

/**
 * Handles incoming requests and provides appropriate responses.
 * 
 * @param {Request} request - The incoming request.
 * @returns {Promise<Response>} - A promise that resolves to a Response.
 */
async function handleRequest(request: Request): Promise<Response> {
    try {
        // Validating the request method
        if (request.method !== 'GET') {
            return new Response('Method Not Allowed', { status: 405 });
        }

        // Additional input validation can go here
        const url = new URL(request.url);
        const param = url.searchParams.get('param');

        // Check if the required query parameter is present
        if (!param) {
            return new Response('Missing required query parameter: param', { status: 400 });
        }

        // Example Response
        return new Response(`Hello, ${param}!`);
    } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
    }
}
