# Next.js 15 API Route Error: 'req' is not defined

This repository demonstrates a common error encountered in Next.js 15 API routes where the request object ('req') is unexpectedly undefined, leading to runtime errors.  The solution showcases how to properly access and handle the request object within API routes.

## Problem

The provided `pages/api/hello.js` file attempts to access `req.body` without proper error handling. If the request method doesn't include a body (e.g., a GET request), this will result in a runtime error, since 'req' is undefined.

## Solution

The solution file (`bugSolution.js`) demonstrates how to safely access `req.body`. It checks if 'req' exists before attempting to access its properties and uses conditional logic to handle various scenarios.