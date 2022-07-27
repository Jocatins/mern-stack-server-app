const config = {
    mongo: {
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            // poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: 'mongodb+srv://blog-db:$phinx_mongo_1618@sphinxdb.gwd8s.mongodb.net/sphinx-blog'
    },
    server: {
        host: 'localhost',
        port: 1618
    }
};
export default config;
