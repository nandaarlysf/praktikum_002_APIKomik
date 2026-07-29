module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        genreId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'genres',
                key: 'id'
            }
        }
    }, {
        tableName: 'komiks',
        timestamps: true
    });
    return Komik;
};
 


