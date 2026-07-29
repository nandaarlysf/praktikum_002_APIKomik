const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config.js').development;

let sequelize;
if (config.dialect === 'sqlite') {
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite'
    });
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
        logging: false
    });
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require('./user.js')(sequelize, DataTypes);
db.Genre = require('./genre.js')(sequelize, DataTypes);
db.Komik = require('./komik.js')(sequelize, DataTypes);

// Associations
db.Genre.hasMany(db.Komik, { foreignKey: 'genreId', as: 'komiks' });
db.Komik.belongsTo(db.Genre, { foreignKey: 'genreId', as: 'genre' });

module.exports = db;
