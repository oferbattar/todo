module.exports = function(sequelize, DataTypes) {
	return sequelize.define('token', {
		registration_ids: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			validate: {
				len: [1, 500]
			}
		},
		notification: {
			
				type: DataTypes.VIRTUAL,
				allowNull: false,
				defaultValue: false
			
			}
		
	});
};