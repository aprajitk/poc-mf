const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "mf3",
        remotes: {
          mf1: `mf1@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          mf2: `mf2@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        shared: {
          // whatever else
        },
        extraOptions: {
          exposePages: true, // `false` by default
        },
      })
    );

    return config;
  },
};
