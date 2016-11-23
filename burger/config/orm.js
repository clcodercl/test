/*var connection = require('./connection.js');
var orm = {
	selectAll: function (tableInput, cb) {
		var queryString = 'SELECT * FROM burgers';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (tableInput, nameInput, cb) {
		var queryString = ('INSERT INTO burgers (burger_name, devoured) VALUES (?,?');
		connection.query(queryString, [nameInput], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (tableInput, idInput, cb) {
		var queryString = 'UPDATE ' + tableInput + 'SET updateOne = 1 WHERE burger_name = ?';
		connection.query(queryString, [idInput], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};
module.exports = orm; */