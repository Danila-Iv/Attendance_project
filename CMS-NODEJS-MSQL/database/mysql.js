const mysql = require('mysql8');

module.exports = class Mysql {
  static connect() {
    // establish connection
    const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '55555',
      database: 'attendance',
    });
    // connect to database
    db.connect((err) => {
      if (err) {
        throw err;
      }
      console.log('Mysql Connected');
    });
    return db;
  }
};
