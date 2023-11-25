import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {
    const [rows] = await connection.query('SELECT * FROM users')
    return rows
}

const users = await getUsers()
console.log(users)

export async function createUser(idusers, firstname, lastname) {
    const result = await connection.query(`
    INSERT INTO users (idusers, lastname, firstname)
    VALUES (?, ?, ?)
    `, [idusers, firstname, lastname])
    const id = result.insertId
    return getUsers(id)
}