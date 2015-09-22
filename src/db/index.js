import sequelize from './init.js';
export { sequelize };

sequelize.sync();
