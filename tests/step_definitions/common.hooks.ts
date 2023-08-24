import { ICustomWorld } from "./custom.world";
import {
	ChromiumBrowser,
	chromium,
	BrowserContext,
	FirefoxBrowser,
	webkit,
	WebKitBrowser,
	firefox,
} from '@playwright/test'
import {After, AfterAll, Before, BeforeAll, ITestCaseHookParameter, setDefaultTimeout, Status} from '@cucumber/cucumber'
import * as process from "process";

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
let context: BrowserContext

setDefaultTimeout(60 * 1000);

BeforeAll(async function() {
	switch (process.env.BROWSER) {
		case 'firefox':
			browser = await firefox.launch({
				headless: false,
				args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
				firefoxUserPrefs: {
					'media.navigator.streams.fake': true,
					'media.navigator.permission.disabled': true,
				},
			});
			break;
		case 'webkit':
			browser = await webkit.launch({headless: false});
			break;
		default:
			browser = await chromium.launch({ headless: false,
				args:['--start-maximized']});
	}

	context = await browser.newContext({ viewport: null})
  });
  
Before(async function(this: ICustomWorld) {
  this.context = await browser.newContext({
		acceptDownloads: true,
		recordVideo: { dir: 'tests/reports/videos' },
		viewport: null
	});
  this.page = await this.context.newPage();
})

After(async function(this: ICustomWorld) {
  await this.page?.close();
  await this.context?.close()
});
  
AfterAll(async function() {
  await browser.close()
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
	if (result) {
		if (result.status !== Status.PASSED) {
			const image = await this.page?.screenshot()
			image && (await this.attach(image, 'image/png'))
		}
	}

	await this.page?.close()
	await this.context?.close()
})

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
	if (result) {
		if (result.status !== Status.PASSED) {
			const video = await this.page?.video()?.path()
			const videoName = video?.split('/').pop()
			var videoHtmlTag='<video src="videos/' + videoName + '" style="max-width: 100%; height: auto;" controls=""></video>';
			video && (await this.attach(videoHtmlTag, 'text/html'))

		} else if (result.status === Status.PASSED) {
			this.page?.video()?.delete()
		}
	}
})