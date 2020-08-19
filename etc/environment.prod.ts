import { BadgrEnvironment } from './badgr-environment';

export const environment: BadgrEnvironment = {
		production: true,
		config: {
			api: {
				baseUrl: "//badgr-api.ocf.berkeley.edu",
			},
			help: {
				email: "help@ocf.berkeley.edu"
			},
			features: {
				alternateLandingRedirect: false
			},
			googleAnalytics: {
				trackingId: null
			},
			theme: {
				serviceName: "Badges", /* lol */
				welcomeMessage: `### Welcome!`,
				alternateLandingUrl: null,
				showPoweredByBadgr: false,
				showApiDocsLink: true,
				termsOfServiceLink: null,
				termsHelpLink: null,
				privacyPolicyLink: null,
				providedBy: {
					name: "Open Computing Facility",
					url: "https://ocf.berkeley.edu/"
				},
				logoImg: {
					small: require("../../../node_modules/@concentricsky/badgr-style/dist/images/logo.svg") as string,
					desktop: require("../../../node_modules/@concentricsky/badgr-style/dist/images/logo.svg") as string,
				},
				favicons: [],
				useColorNavbar: true,
				cssCustomProps: {
					'--color-interactive1' : '#134074',
					'--color-interactive2' : 'rgb(20,20,20)',
					'--color-interactive2alpha50' : 'rgba(20,20,20,0.5)',
				}
			}
		}
	}
;