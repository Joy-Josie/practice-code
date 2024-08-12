/*
 * @Author: WangZhuoYi 13317149311@163.com
 * @Date: 2023-06-08 17:25:13
 * @LastEditors: WangZhuoYi 13317149311@163.com
 * @LastEditTime: 2023-07-04 18:09:25
 * @FilePath: /practice-code/Node/mysql/index.js
 * @Description:
 */
const mysql = require('mysql')
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'demo',
})

// 连接数据库
connection.connect(err => {
	if (err) {
		console.log(err)
	} else {
		console.log('connection success!')
	}
})

// 执行查询语句
connection.query('SELECT * FROM users', (err, res, field) => {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log(field)
	}
})
