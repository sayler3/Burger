const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	port: 3306,
	user: "w58fq83f0tk8fjk3",
	password: "mg43ojery11kddnf",
	database: "pwmo347p02wpwc6x",
});

// Make connection.
connection.connect((err) => {
	if (err) {
		console.error(`error connecting: ${err.stack}`);
		return;
	}
	console.log(`connected as id ${connection.threadId}`);
});

// Exporting connection for ORM use.
module.exports = connection;
