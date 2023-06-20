import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        // your rudderstack write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        //NOTE: Do not commit this to git. Process from env.
        prodKey: `RUDDERSTACK_PRODUCTION_WRITE_KEY`,
        // prodKey: `1lgCItJ0FN5qSusbvZVESHjEHLq`,
        // if you have a development env for your rudderstack account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        //NOTE: Do not commit this to git. Process from env.
        devKey: `RUDDERSTACK_DEV_WRITE_KEY`,
        // devKey: `1lgCItJ0FN5qSusbvZVESHjEHLq`,
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: false,
        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 50,
        // If you need to proxy events through a custom data plane,
        // add a `dataPlaneUrl` property (defaults to https://hosted.rudderlabs.com )
        // RudderStack docs:
        //   - https://rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/#31-load
        dataPlaneUrl: `https://aixp-rudder-api-aks.digitallab.id/6405dcdc-0812-4eb0-83e7-eb79d81b6a1f/ae0bb15d-bbc8-4c01-82dd-eb832b75cc14`,
        // Add a `controlPlaneUrl` property if you are self-hosting the Control Plane
        // RudderStack docs:
          // - https://rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/#311-self-hosted-control-plane
        controlPlaneUrl: `https://aixp-rudder-api-aks.digitallab.id/6405dcdc-0812-4eb0-83e7-eb79d81b6a1f/ae0bb15d-bbc8-4c01-82dd-eb832b75cc14`,
        // boolean (defaults to false); whether to delay loading (add SDK script and load the SDK) of RudderStack JS SDK.
        // This feature will force RudderStack to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // RudderStack will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing RudderStack
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: false,
        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000,
        // Whether to completely skip calling `analytics.load()`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load()` manually
        // elsewhere in your code or are using a library
        // that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        // *Another use case is if you want to add callbacks to the methods at load time.
        manualLoad: false,
        // Can be used to override where the SDK should be loaded from. This is useful
        // if you want to serve the SDK from a custom domain other than RudderStack to tackle ad-blockers
        // By default, the plugin will use the latest JS SDK from RudderStack's CDN
        // sdkURL: `https://subdomain.yourdomain.com/v1.1/rudder-analytics.min.js`,
        // sdkURL: `https://unpkg.com/aixp-js-sdk@1.0.5/dist/aixp-sdk-js.min.js`,
        // string ('async' or 'defer'); whether to load the RudderStack SDK async or defer. Anything else
        // will load normally.
        // 'async' will load the SDK as <script async></script>
        // 'defer' will load the SDK as <script defer></script>
        loadType: 'default',
        // Options to the `load` API
        // Note: The above `controlPlaneUrl` overrides the `configUrl` field in this object
        // You can find the loadOptions for JS SDK here:
        // https://www.rudderstack.com/docs/sources/event-streams/sdks/rudderstack-javascript-sdk/load-js-sdk/#loading-options
        // loadOptions: {
        //   ...
        // }
      }
    }
  
]
};

export default config;
