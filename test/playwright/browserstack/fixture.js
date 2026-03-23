// With the BrowserStack Node SDK (@browserstack-node-sdk), the SDK intercepts
// the Playwright runner and handles all BrowserStack session routing automatically —
// including real mobile devices via @browserstack-mobile project names.
// No manual CDP WebSocket connection or BrowserStack Local management required.
export { test, expect } from '@playwright/test';
