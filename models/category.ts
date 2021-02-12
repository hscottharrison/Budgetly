const category = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Category.associate = models => {
        Category.hasMany(models.SubCategory);
    };

    Category.find = async (models) => {
        try {
            return await Category.findAll({include: [models.SubCategory]});
        } catch(e) {
            console.log(e);
        }
    }

    return Category;
};

export default category;