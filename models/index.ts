const Sequelize = require('sequelize');

let sequelize = new Sequelize('postgres://hunter@localhost:8000/budgetly', {
    dialect: 'postgres',
});

const models = {
    Category: sequelize.import('./category'),
    SubCategory: sequelize.import('./subCategory'),
}

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };

export default models;