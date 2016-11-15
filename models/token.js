module.exports = function(sequelize, DataTypes) {
	return sequelize.define('token', {
		data: {
			
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
				validate: {
				len: [1, 500]
			}
		}
		
	});
};