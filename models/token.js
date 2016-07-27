module.exports = function(sequelize, DataTypes) {
	return sequelize.define('token', {
		tokenId: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 250]
			}
		},
		users: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: false
		}
	});
};