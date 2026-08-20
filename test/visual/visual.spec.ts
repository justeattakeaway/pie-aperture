import { registerVisualTests } from '../../playwright-helpers/visual-helper';
import { getVisualPages, type App } from '../../playwright-helpers/visual-pages';

const appName = process.env.APP_NAME as App;

registerVisualTests(appName, getVisualPages(appName));
