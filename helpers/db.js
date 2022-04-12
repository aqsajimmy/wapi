const mysql = require('mysql2/promise');

const createConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wa'
  });
}

const getNumberx = async () => {
  const connection = await createConnection();
  const [rows] = await connection.execute('SELECT number FROM member');
  if (rows.length > 0) return rows[0].number;
  return false;
}

module.exports = {
  createConnection,
  getNumberx
}
