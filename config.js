const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://a11yfirst.netlify.com/",
    gaTrackingId: null
  },
  header: {
    logo: "",
    logoLink: "https://a11yfirst.netlify.com/",
    title: "A11y First",
    githubUrl: "https://github.com/tpage99/a11yfirst",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/ind-fam-resources", "/web-dev-resources"],
    links: [{ text: "A11y First", link: "https://a11yfirst.netlify.com/" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "A11y First",
    description: "A project to promote accessibility and inclusion on the web",
    ogImage: null,
    docsLocation: "https://github.com/tpage99/a11yfirst",
    favicon: ""
  }
};

module.exports = config;
