module.exports = function(sequelize, DataTypes) {
	return sequelize.define('token', {
		tokenId: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}
		},
		message: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: false
		}
	});
};