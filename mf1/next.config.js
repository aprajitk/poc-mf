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
          // ...deps,
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          "react- dom": {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          "@jds/core": {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          "@jds/core-icons": {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          tailwindcss: {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          sass: {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          postcss: {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          autoprefixer: {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          webpack: {
              requiredVersion: false,
            singleton: true,
            eager: true,
          },
          '@module-federation/nextjs-mf':{
               requiredVersion: false,
            singleton: true,
            eager: true,
          }
        },
        extraOptions: {
          exposePages: true, // `false` by default
          automaticAsyncBoundary: true,
          //enableImageLoaderFix: true,
          // enableUrlLoaderFix: true,
          // skipSharingNextInternals: false,
           //automaticPageStitching: true,
        },
        // target: 'node',
        //      new AssetsPlugin({
        //   path: publicPathName
        // }),
        //publicPath: "auto",
      })
    );

    return config;
  },
};
