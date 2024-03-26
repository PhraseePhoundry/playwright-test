import { test, expect, request, browser } from '@playwright/test';

const requestContext = await request.newContext({
        httpCredentials: {
            username: 'user',
            password: 'passwd'
        }
    });
    await requestContext.get(`https://api.example.com/login`);
    // Save storage state into the file.
    await requestContext.storageState({ path: 'state.json' });
    
    // Create a new context with the saved storage state.
    const context = await browser.newContext({ storageState: 'state.json' });
