// config ourselves craco
const path = require("path");
const CracoLessPlugin = require("craco-less")

const importUrl = dir => path.resolve(__dirname, dir)

module.exports = {
    // webpack file other name
    webpack: {
        alias: {
            "@": importUrl("src"),
            "components": importUrl("src/components"),
            "assets": importUrl("src/assets"),
            "base-ui": importUrl("src/base-ui"),
            "hooks": importUrl("src/hooks"),
            "router": importUrl("src/router"),
            "services": importUrl("src/services"),
            "store": importUrl("src/store"),
            "utils": importUrl("src/utils"),
            "views": importUrl("src/views")
        }
    },
    // less config: please observe ant-design-ui
    // github website you can look
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // 下面的配置可要可不要，是主题配置的
                        // modifyVars: {
                        //     "@primary-color": "#1DA57A",
                        //     "@link-color": "#1DA57A",
                        //     "@border-radius-base": "2px",
                        // },
                        javascriptEnabled: true,
                    }
                }
            }
        }
    ],
    resolve: {
        fallback: {
            fs: require.resolve("fs"),
        },
    },
}