// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    // Extend it as you need.

    // For example, add typescript loader:
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: require.resolve('awesome-typescript-loader')
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
