/*
 * @Author: WangZhuoYi 13317149311@163.com
 * @Date: 2023-06-08 17:25:13
 * @LastEditors: WangZhuoYi 13317149311@163.com
 * @LastEditTime: 2023-06-29 16:45:49
 * @FilePath: /practice-code/Node/fs/index.js
 * @Description:
 */

const path = require('path')
const fs = require('fs')
const xlsx = require('node-xlsx')

const xlsxPath = path.resolve(__dirname, '../assets')

const dataNames = ['department', 'person']
const dataPaths = {}

// 转换人员表方法
// const processFunc = arr => {
// 	const depts = getDepartments(arr)
// 	const deptsMap = new Map()
// 	depts.forEach((dept, index) => {
// 		const id = index + 12
// 		deptsMap.set(dept, id)
// 	})
// 	const res = arr
// 		.filter(row => row[2])
// 		.map(row => {
// 			return [
// 				row[0],
// 				row[0],
// 				'97193baf16afe0de4d07bd431272f5a1',
// 				deptsMap.get(row[2]),
// 				'',
// 				row[1],
// 				'0',
// 				'',
// 				'',
// 				'',
// 				'Doctor',
// 				'1',
// 			]
// 				.map(item => (typeof item === 'string' ? `'${item}'` : item))
// 				.join(',')
// 		})
// 	return res
// 		.map(values => {
// 			return `INSERT INTO biz_employee (emp_openid,emp_number,emp_password,emp_dept,emp_post,emp_name,emp_sex,emp_nickname,emp_idno,emp_telphone,emp_type,emp_switch) VALUES (${values});`
// 		})
// 		.join('\n')
// }

// 转换部门表方法
const processFunc = arr => {
	const depts = getDepartments(arr)
	const res = depts.map((dept, index) => {
		const id = index + 12
		const code = (index + 4).toString().padStart(4, '0')
		const parentId = getDeptParentId(dept)
		const arr = [code, dept, dept, '3', parentId]
		return id + ',' + arr.map(item => `'${item}'`).join(',')
	})
	return res
		.map(values => {
			return `INSERT INTO biz_department (id,dept_code,dept_name,dept_desc,dept_level,dept_parent_id) VALUES (${values});`
		})
		.join('\n')
}

function getDepartments(arr) {
	const depts = new Set()
	arr.forEach(item => {
		item[2] && depts.add(item[2])
	})
	return Array.from(depts)
}

function getDeptParentId(deptName) {
	if (deptName.includes('(网)')) {
		return '0003'
	} else if (deptName.includes('(东)')) {
		return '0002'
	}
	return '0001'
}

// 数据表名称和跟路名称对象
dataNames.forEach(name => {
	dataPaths[name] = {
		xlsx: path.resolve(xlsxPath, `./xlsx/${name}.xlsx`),
		txt: path.resolve(xlsxPath, `./txt/${name}.txt`),
		processFunc,
	}
})

// 读取数据表方法
const readFileData = filePath => {
	const xlsxData = xlsx.parse(fs.readFileSync(filePath))
	return xlsxData[0].data
}

// 写入txt文件方法
const writeTxt = (arr, path, processFunc) => {
	fs.writeFile(path, processFunc(arr), 'utf-8', err => {
		if (err) {
			console.log(err)
		} else {
			console.log(`写入成功`)
		}
	})
}

const transformXlsxToTxt = fileName => {
	const { txt, processFunc, xlsx } = dataPaths[fileName]
	const xlsxData = readFileData(xlsx)
	writeTxt(xlsxData, txt, processFunc)
}

transformXlsxToTxt('department')
