const subCategory = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define('subCategory', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    SubCategory.associate = models => {
        SubCategory.belongsTo(models.Category);
    }

    return SubCategory;
};

export default subCategory;