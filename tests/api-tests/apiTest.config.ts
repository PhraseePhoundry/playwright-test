import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    // All requests we send go to this API endpoint.
    baseURL: '',
    extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'Accept': '',
        'X-Requested-With': 'XMLHttpRequest',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': `token ${process.env.API_TOKEN}`,
    },
  }
});