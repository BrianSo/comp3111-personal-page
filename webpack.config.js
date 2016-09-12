function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8000');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

var config = {
    entry:{
        //babel:"babel-polyfill",
        app: getEntrySources([
            './index.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8000/',
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=stage-0'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};

module.exports = config;