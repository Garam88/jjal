const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/')
            }
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: "[name].js",
            sourceMapFilename: "[name].js.map"
        },
        devtool: "source-map"
    },
}
