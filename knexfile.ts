import path from 'path';


module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'server', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'server', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'server', 'database', 'seeds')
    },
    useNullAsDefault: true
};