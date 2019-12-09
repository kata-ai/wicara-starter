module.exports = {
  webpack: {
    configure: (config, { env, paths }) => {
      // Add `webpack-bundle-analyzer` if `ANALYZE` env is set.
      if (env === 'production' && process.env.ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: path.join(
              __dirname,
              '../webpack-bundle-analyzer/report.html'
            )
          })
        );
      }

      // Setup proper chunk path names for production
      if (env === 'production') {
        config.optimization.splitChunks.name = true;
      }

      return config;
    }
  },
  eslint: {
    // We still use tslint, so disable this for now.
    enable: false
  },
  babel: {
    plugins: ['babel-plugin-styled-components']
  }
};
