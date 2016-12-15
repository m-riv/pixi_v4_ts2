var path = require("path");

module.exports = {
    entry: {
        app: "./src/app/main"
    },

    output: {
        path: path.join(__dirname, "public", "js"),
        filename: "[name].bundle.js"
    },

    resolve: {
        root: [path.join(__dirname, "node_modules")],
        extensions: ["", ".ts", ".webpack.js", ".web.js", ".js"]
    },

    devtool: "source-map",

    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader?configFileName=src/tsconfig.json" }
        ]
    }
};