import { BadgrEnvironment } from './badgr-environment';

export const environment: BadgrEnvironment = {
		production: true,
		config: {
			api: {
				baseUrl: "//badgr-api.ocf.berkeley.edu",
			},
			features: {
				alternateLandingRedirect: false
			},
			help: {
				email: "help@ocf.berkeley.edu"
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
				loadingImg: {
					// Image is inlined here to avoid any external resource loading, at the expense of a larger initial file size. We only do this for the default theme.
					imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAMAAACrgNoQAAAAilBMVEXx8fH////9/f3z8/P19fX39/f5+fn19PTR0NHt7e2np6f7/Pvo6ejY2NjLy8vv7++urq7l5eXg4ODT09O3t7fExMTAwMC8vLzr6+u1tbXi4uKysrLe3t7W1tbGxsaKiorIyMirq6vc3Nzb29vV1dXPz8/d3d3Nzc29vb25ubmfn5+RkZHa2tp/f3+C+l03AAADIklEQVRIx41WiZKkIAwNkIB437atrX3Oufv/v7cIVG3RM1NjbCEBHknIKxtgVjjntgnV0HZiAR4UND+p4DQBijECSBgHQMYQgDMJIBkXgHaKu5VgW/xYL5ic18+ap59rn9C4fmiefa4Nh4+1pKRbPytO21owb6NBoALTIAAgCgCFKlC3KeouG4Cz+a+CXUJrxrgBlOek2AeYawsALWCfoD8lBTulkGzLQR+ePQj7WMWKV+jU2pAukYRdIqPYAuIAELh49jBYwGNG2CnSJS2+d/BVFHPU8OavMDy6wi03fFr5W9IPnzS6H2rLHvMqYV5Q9ASYGjuiDmeFj4qqYWgPAq83xOao8N52D/QbplVADRqPesLicqSXUtFrTtRnSN0fWdYeoUJqYDX0L0nWJ1qOxySKiLob0vlkLAcQWlkPaao8U4ZS4r0jTcOLASBugC7+ePVJUDOFlabmlURVSqkuWjY5528z0nKsB/kDNSjKZUHLGF0iBD2d8ndRyCXjkz93+tNZwMmHCMLyFuuoQgBVnLKtcgettI8ZgD9RQ1gNSYHrTRNwULhTSsCLc6QISGwW2l6QsiZY3zakPiO38q63iA7t2BcCMG1HU0Ch38dBq2+pgWOKAKLMoGlRpGVVVBpwaiCb0AMuFtCeyAEGA8DrwEGOVdI1SYEK65ZD0tboyHMwAMao8CG+p6KgZivc25W/1yKfMlN4Y7qgv1Jj0FJhNSVE5UGeF86zJUlLibJMrQdzxDakukKfQ3StAPt+bnOEoszr9kHYDfOw+ByaMqi0OkbRrADv5xqNBdGSbdtk5xl/oAYSbVMkPRMkgTf9/EtuAXOFsE8E3/2pDLhExdetwt4LXs//CyeCx9vBcJj0bxIc61tG+0ISGiw1pLOCx3XhcECNXR5UmtqQ7jV+/2H934eVbuN9f4pFUvYWQGsqLA1QSgUgvSpAyY0Vfsro4o5b0gaBeMobUFWep0pH+U2Iax5plb7mRwWn/G54mUfLLbE3AXfp6OI3yer4kjIc45yxKJ4UO5TxlSV93Cdsjqf4D+OeS5ztEb/u6b7EXePtUHX7/gP37yxIGVsXUQAAAABJRU5ErkJggg==',
					height: 48
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