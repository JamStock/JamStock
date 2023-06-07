import mysql from 'mysql2'

export const DBInfo = mysql.createConnection({
  host:'192.168.100.77',
  database:'jamstock',
  user:'euni',
  password:'0000',
  port:3306
})