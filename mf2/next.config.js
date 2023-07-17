const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "mf2",
        remotes: {
          mf1: `mf1@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          mf3: `mf3@http://localhost:3002/_next/static/${
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
