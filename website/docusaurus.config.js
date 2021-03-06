const { resolve } = require('path')
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          routeBasePath: '/',
          include: [
            '{api,introduction,using-react-redux}/*.{md,mdx}',
            'troubleshooting.md',
          ], // no other way to exclude node_modules
        },
        theme: {
          customCss: [
            require.resolve('./static/css/custom.css'),
            require.resolve('./static/css/404.css'),
            require.resolve('./static/css/codeblock.css'),
          ],
        },
      },
    ],
  ],
  title: 'React Redux', // Title for your website.
  onBrokenLinks: 'throw',
  tagline: 'Ligações oficiais do React para Redux',
  baseUrl: '/react-redux/', // Your website URL
  url: 'https://fernandobelotto.github.io',
  // Used for publishing and more
  projectName: 'react-redux',
  organizationName: 'fernandobelotto',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  /* path to images for header/footer */
  favicon: 'img/favicon/favicon.ico',

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/scripts/sidebarScroll.js',
    '/scripts/codeblock.js',
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
  ],

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  customFields: {
    repoUrl: 'https://github.com/reduxjs/react-redux',
  },
  /**
   * Note:
   * This will generate a link on the versioned docs page for "pre-release versions"
   * Once next version is released, run "yarn run version 7.x", and docusaurus will add 7.x to stable version
   * After that, 7.x will no longer appear in "pre-release" versions and we should remove this line
   * More info: https://docusaurus.io/docs/en/versioning
   */
  themeConfig: {
    metadatas: [{ name: 'twitter:card', content: 'summary' }],
    prism: {
      theme: require('./static/scripts/monokaiTheme.js'),
    },
    image: 'img/redux-logo-landscape.png',
    navbar: {
      title: 'React Redux',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          // Do not add the link active class when browsing docs.
        },
        {
          to: 'introduction/quick-start',
          label: 'Começo rápido',
          position: 'right',
        },
        {
          to: 'using-react-redux/connect-mapstate',
          label: 'Usando React Redux',
          position: 'right',
        },
        { to: 'api/connect', label: 'API', position: 'right' },
        {
          href: 'https://www.github.com/reduxjs/react-redux',
          label: 'GitHub',
          position: 'right',
          className: 'github',
        },
        {
          href: '/introduction/quick-start',
          label: 'Precisa de ajuda?',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux_white.svg',
      },
      copyright:
        'Direito autorais (c) 2015-presente Dan Abramov e os autores da documentação Redux.',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introdução',
              to: 'introduction/quick-start',
            },
            {
              label: 'Usando React Redux',
              to: 'using-react-redux/connect-mapstate',
            },
            {
              label: 'Referência da API',
              to: 'api/connect',
            },
            {
              label: 'Guias',
              to: 'troubleshooting',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-redux',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/0ZcbPKXt5bZ6au5t',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/reduxjs/react-redux',
            },
            {
              html: `
                <a
                  class="github-button"
                  href="https://github.com/reduxjs/react-redux"
                  data-icon="octicon-star"
                  data-count-href="/reduxjs/react-redux/stargazers"
                  data-show-count="true"
                  data-count-aria-label="# stargazers on GitHub"
                  aria-label="Star this project on GitHub"
                >
                  Star
                </a>
              `,
            },
          ],
        },
      ],
    },
    algolia: {
      apiKey: '2d058d216b7fd5d68d481fd48ee72c06',
      indexName: 'react-redux',
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: 'UA-130598673-2',
    },
  },
}

module.exports = siteConfig
