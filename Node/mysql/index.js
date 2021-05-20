const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3307',
  database: 'wang'
})

// 连接数据库
connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connection success!')
  }
})

// 执行查询语句
connection.query('SELECT * FROM student', (err, res, field) => {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    console.log(field)
  }
})

// 删除表
const sqlStr = 'drop table student'
connection.query(sqlStr, (err, res, fie) => {
  console.log(res)
})
