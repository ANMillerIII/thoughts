
module.exports = {
  title: 'Al Miller',
  tagline: 'Al Miller',
  url: 'https://almiller.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ANMillerIII', // Usually your GitHub org/user name.
  projectName: 'Al Miller', // Usually your repo name.
  themeConfig: {

    sidebarCollapsible: false,
    // hideableSidebar: true,

    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      disableSwitch: false,
    },
    navbar: {
      title: 'AM',
      // logo: {
      //   alt: '',
      //   src: 'img/logo.svg',
      // },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'directory',
        //   position: 'left',
        // },
        {to: 'blog', label: 'ledger', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: ' ',
        //   position: 'right',
        //   className: 'header-github-link',
        // },
        // {
        //   href: 'https://linkedin.com/in/al-miller',
        //   label: ' ',
        //   position: 'right',
        //   className: 'header-linkedin-link',
        // },
        // {
        //   href: 'https://stackoverflow.com/ANMillerIII',
        //   label: ' ',
        //   position: 'right',
        //   className: 'header-github-link',
        // },
      ],
    },
    footer: {

      style: 'light',
      links: [
        {
          title: 'Here',
          items: [
            {
              label: 'Directory',
              to: 'docs/',
            },
            {
              label: 'Ledger',
              to: 'blog/',
            },
            {
              label: 'Resume',
              href: './static/assets/Resume_ANM.pdf',
            },
          ],
        },
        {
          title: 'There',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/anmillerIII',
            },
            {
              label: 'Linkedin',
              href: 'https://linkedin.com/in/al-miller',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/anmillerIII',
            },
            {
              label: 'Mail',
              href: 'mailto:albert.miller@uconn.edu',
            },
          ],
        },
        // {
        //   title: 'Everywhere',
        //   items: [
        //   ],
        // },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/edit/master/website/',
            
        // },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // showEditUrl: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      },
    ],
  ],
};
