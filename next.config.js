const path = require("path");
module.exports = {
  target: 'serverless',
  webpack: (config, { webpack }) => {
    config.node = {
      fs: 'empty',
      net: 'empty',
      child_process: 'empty',
      readline: 'empty',
    };
    
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.join(__dirname, "components"),
      "@pages": path.join(__dirname, "pages"),
      "@redux": path.join(__dirname, "redux"),
      "@api": path.join(__dirname, "api")
    };
    config.plugins.push(new webpack.IgnorePlugin(/^electron$/));

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};