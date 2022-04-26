const { Sequelize, Op, Model, DataTypes } = require('sequelize');
// console.log('Sequelize:', Sequelize);
// console.log('Op:', Op);
// console.log('Model:', Model);
// console.log('DataTypes:', DataTypes);

const sequelize = new Sequelize('sqlite::memory:');

console.log('sequelize:', sequelize);
