## Testing Checklist

- Validate that the worker responds with the expected HTML message:
  - HTTP Method: GET
  - Expected HTML body: '<h1>Hello, Cloudflare Worker!</h1>'
  - Status Code: 200
- Ensure the worker correctly handles other HTTP methods (POST, PUT, DELETE) by returning appropriate responses in future phases.
- Test for varying headers and query parameters in requests to observe any behavioral changes.
