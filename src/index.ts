// Cloudflare Worker script

/**
 * Handle incoming requests to the Cloudflare Worker.
 * Responds with a greeting message and handles various errors.
 *
 * @param {Request} request - The incoming HTTP request.
 * @returns {Promise<Response>} - The HTTP response.
 */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

/**
 * Handle the request and respond with an appropriate message.
 *
 * @param {Request} request - The incoming HTTP request.
 * @returns {Promise<Response>} - The HTTP response.
 */
async function handleRequest(request: Request): Promise<Response> {
    try {
        if (request.method !== 'GET') {
            return new Response('Method Not Allowed', { status: 405 });
        }
        return new Response('<h1>Hello, Cloudflare Worker!</h1>', { status: 200 });
    } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
    }
}