import webpack = require('webpack');
import AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const compiler = webpack({
    plugins: [
        new AntdDayjsWebpackPlugin(),
    ],
});
