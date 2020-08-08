const { merge } = require('webpack-merge');
const commonConfig = require('./common.config.js');
const developmentConfig = require('./dev.config.js');
const productionConfig = require('./prod.config.js');

module.exports = (env, argv) => {
    console.log(env);

    if (!!env.development)
        return merge(commonConfig(env, argv), developmentConfig(env, argv));
    else if (!!env.production)
        return merge(commonConfig(env, argv), productionConfig(env, argv));
    else
        throw new Error('No matching configuration was found!');
}
