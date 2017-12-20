
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    burger: {
    type: DataTypes.STRING,
    allowNull: false,
    
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return burger;
};


 