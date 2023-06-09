const path = require("path")

module.exports = {
    // mode: "development"
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    }
}