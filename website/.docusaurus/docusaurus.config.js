export default {
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../docs",
          "sidebarPath": "C:\\traducoes\\react-redux\\website\\sidebars.json",
          "routeBasePath": "/",
          "include": [
            "{api,introduction,using-react-redux}/*.{md,mdx}",
            "troubleshooting.md"
          ]
        },
        "theme": {
          "customCss": [
            "C:\\traducoes\\react-redux\\website\\static\\css\\custom.css",
            "C:\\traducoes\\react-redux\\website\\static\\css\\404.css",
            "C:\\traducoes\\react-redux\\website\\static\\css\\codeblock.css"
          ]
        }
      }
    ]
  ],
  "title": "React Redux",
  "onBrokenLinks": "throw",
  "tagline": "Ligações oficiais do React para Redux",
  "url": "/react-redux/",
  "baseUrl": "https://fernandobelotto.github.io/",
  "projectName": "react-redux",
  "organizationName": "fernandobelotto",
  "favicon": "img/favicon/favicon.ico",
  "scripts": [
    "/scripts/sidebarScroll.js",
    "/scripts/codeblock.js",
    {
      "src": "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      "async": true
    }
  ],
  "customFields": {
    "repoUrl": "https://github.com/reduxjs/react-redux"
  },
  "themeConfig": {
    "metadatas": [
      {
        "name": "twitter:card",
        "content": "summary"
      }
    ],
    "prism": {
      "theme": {
        "plain": {
          "color": "#f8f8f2",
          "backgroundColor": "#272822"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#778090"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "style": {
              "color": "#F8F8F2"
            }
          },
          {
            "types": [
              "property",
              "tag",
              "constant",
              "symbol",
              "deleted"
            ],
            "style": {
              "color": "#F92672"
            }
          },
          {
            "types": [
              "boolean",
              "number"
            ],
            "style": {
              "color": "#AE81FF"
            }
          },
          {
            "types": [
              "selector",
              "attr-name",
              "string",
              "char",
              "builtin",
              "inserted"
            ],
            "style": {
              "color": "#a6e22e"
            }
          },
          {
            "types": [
              "operator",
              "entity",
              "url",
              "variable"
            ],
            "style": {
              "color": "#F8F8F2"
            }
          },
          {
            "types": [
              "atrule",
              "attr-value",
              "function"
            ],
            "style": {
              "color": "#E6D874"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "color": "#F92672"
            }
          },
          {
            "types": [
              "regex",
              "important"
            ],
            "style": {
              "color": "#FD971F"
            }
          }
        ]
      }
    },
    "image": "img/redux-logo-landscape.png",
    "navbar": {
      "title": "React Redux",
      "logo": {
        "alt": "Redux Logo",
        "src": "img/redux.svg"
      },
      "items": [
        {
          "type": "docsVersionDropdown",
          "position": "left"
        },
        {
          "to": "introduction/quick-start",
          "label": "Começo rápido",
          "position": "right"
        },
        {
          "to": "using-react-redux/connect-mapstate",
          "label": "Usando React Redux",
          "position": "right"
        },
        {
          "to": "api/connect",
          "label": "API",
          "position": "right"
        },
        {
          "href": "https://www.github.com/reduxjs/react-redux",
          "label": "GitHub",
          "position": "right",
          "className": "github"
        },
        {
          "href": "/introduction/quick-start#help-and-discussion",
          "label": "Preciso de ajuda?",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "logo": {
        "alt": "Redux Logo",
        "src": "img/redux_white.svg"
      },
      "copyright": "Direito autorais (c) 2015-presente Dan Abramov e os autores da documentação Redux.",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Introdução",
              "to": "introduction/quick-start"
            },
            {
              "label": "Usando React Redux",
              "to": "using-react-redux/connect-mapstate"
            },
            {
              "label": "Referência da API",
              "to": "api/connect"
            },
            {
              "label": "Guias",
              "to": "troubleshooting"
            }
          ]
        },
        {
          "title": "Comunidade",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/react-redux"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/0ZcbPKXt5bZ6au5t"
            }
          ]
        },
        {
          "title": "Mais",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/reduxjs/react-redux"
            },
            {
              "html": "\n                <a\n                  class=\"github-button\"\n                  href=\"https://github.com/reduxjs/react-redux\"\n                  data-icon=\"octicon-star\"\n                  data-count-href=\"/reduxjs/react-redux/stargazers\"\n                  data-show-count=\"true\"\n                  data-count-aria-label=\"# stargazers on GitHub\"\n                  aria-label=\"Star this project on GitHub\"\n                >\n                  Star\n                </a>\n              "
            },
            {
              "html": "\n                <a href=\"https://www.netlify.com\">\n                  <img\n                    src=\"https://www.netlify.com/img/global/badges/netlify-light.svg\"\n                    alt=\"Deploys by Netlify\"\n                  />\n                </a>\n              "
            }
          ]
        }
      ]
    },
    "algolia": {
      "apiKey": "2d058d216b7fd5d68d481fd48ee72c06",
      "indexName": "react-redux",
      "algoliaOptions": {},
      "appId": "BH4D9OD16A"
    },
    "googleAnalytics": {
      "trackingID": "UA-130598673-2"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};