const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // Using path module for cross-platform compatibility
        filename: 'bundle.js',
    },
    mode: 'production', // Set to 'development' for development builds
    module: {
        rules: [
            {
                test: /\.js$/, // Use Babel to transpile JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // You can add more loaders here (e.g., for CSS, images, etc.)
        ],
    },
    plugins: [
        // You can add plugins here (e.g., HtmlWebpackPlugin for HTML generation)
    ],
};
