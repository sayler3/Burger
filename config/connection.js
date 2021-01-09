const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "burgers_db",
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
