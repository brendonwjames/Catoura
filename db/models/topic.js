'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
  };
  return Topic;
};