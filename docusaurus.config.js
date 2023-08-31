// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spring Boot Migration Workshop',
  tagline: 'Spring Boot 3 is here. where are you?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://moderneinc.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/springboot-migration-workshop/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'moderneinc', // Usually your GitHub org/user name.
  projectName: 'springboot-migration-workshop', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/moderneinc/springboot-migration-workshop/edit/main',
        },
        blog: false,
        theme: {
          //customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/moderne-poster-logo.svg',
      navbar: {
        title: 'Start',
        logo: {
          alt: 'Moderne Logo',
          src: 'img/moderne-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'autogenSidebar',
            position: 'left',
            label: 'Spring Boot Migration Workshop',
          },
          {
            href: 'https://github.com/moderneinc/springboot-migration-workshop',
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
                label: 'OpenRewrite',
                href: 'https://docs.openrewrite.org/',
              },
              {
                label: 'Moderne',
                href: 'https://docs.moderne.io/',
              },
              {
                label: 'Spring Boot',
                href: 'https://spring.io/projects/spring-boot',
              },
              {
                label: 'Spring Boot 3.0 Migration Guide',
                href: 'https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide',
              }
            ],
          },
          {
            title: 'OpenRewrite Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/openrewrite',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/xk3ZKrhWAb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OpenRewrite',
              },
            ],
          },
          {
            title: 'Moderne',
            items: [
              {
                label: 'Moderne.io',
                href: 'https://moderne.io',
              },
              {
                label: 'Marketplace',
                href: 'https://app.moderne.io/marketplace',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ModerneInc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Moderne, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
