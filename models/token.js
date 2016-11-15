module.exports = function(sequelize, DataTypes) {
	return sequelize.define('token', {
		data: {
			
				type: DataTypes.VIRTUAL,
				allowNull: false,
				validate: {
				len: [1, 100000]
			}
		}
		
	});
};