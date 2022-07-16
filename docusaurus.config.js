// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Assimbly',
  tagline: 'Open Source Integration',
  url: 'https://assimbly.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'ico/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'assimbly', // Usually your GitHub org/user name.
  projectName: 'assimbly', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Assimbly',
        logo: {
          alt: 'Assimbly',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Modules',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/assimbly',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                href: 'https://github.com/assimbly/gateway/wiki/tutorials',
              },
			  {
                label: 'User Guide',
                href: 'https://github.com/assimbly/gateway/wiki/user-guide',
              },
			  {
                label: 'Wiki',
                href: 'https://github.com/assimbly/gateway/wiki',
              },
			  {
                label: 'Design',
                href: 'https://github.com/assimbly/gateway/wiki/design',
              }		  
            ],
          },
          {
            title: 'Community',
            items: [              
              {
                label: 'Issues',
                href: 'https://github.com/assimbly/gateway/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/assimbly',
              },
            ],
          },
          {
            title: 'More',
            items: [                            
              {
                label: 'About',
                to: 'docs/about',
              },			                {
                label: 'Resources',
                to: 'docs/resources',
              },{
                label: 'Download',
                href: 'https://github.com/assimbly/gateway/releases',
              },
            ],
          },
        ],
        copyright: `Assimbly ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
