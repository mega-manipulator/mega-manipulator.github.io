/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mega Manipulator (m²)',
  tagline: 'Change everything',
  url: 'https://github.com/mega-manipulator/mega-manipulator',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'https://raw.githubusercontent.com/mega-manipulator/mega-manipulator/main/src/main/resources/META-INF/pluginIcon.svg',
  organizationName: 'mega-manipulator', // Usually your GitHub org/user name.
  projectName: 'mega-manipulator.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mega Manipulator',
      /*logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },*/
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/mega-manipulator/mega-manipulator',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Mega Manipulator. Built with Docusaurus.`
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mega-manipulator/mega-manipulator.github.io/tree/docsrc',
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
