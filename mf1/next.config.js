const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "mf1",
        remotes: {
          mf2: `mf2@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          mf3: `mf3@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Header": "./src/components/Header.jsx",
          "./Footer": "./src/components/Footer.jsx",
          "./Nav": "./src/components/Nav.jsx",
        },
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
