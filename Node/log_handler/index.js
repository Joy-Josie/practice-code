/*
 * @Author: WangZhuoYi 13317149311@163.com
 * @Date: 2024-11-22 19:59:51
 * @LastEditors: WangZhuoYi 13317149311@163.com
 * @LastEditTime: 2024-12-13 12:21:34
 * @FilePath: /practice-code/Node/log_handler/index.js
 * @Description:
 */
const fs = require("fs");
const iconv = require("iconv-lite");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = new Set();

function question() {
  rl.question("请输入未上传的体检号: ", (name) => {
    if (name) {
      numbers.add(name);
      question();
    } else {
      rl.close();
    }
  });
}

function readFile() {
  // 创建可读流
  const readStream = fs.createReadStream("./ExtraLog.txt");

  // 假设文件编码为 GBK
  const encoding = "gbk";
  // 初始正则和结束正则
  const startRegex = /Body=/g;
  const endRegex = /"SerialNo": "CSM3100478"}/g;

  // 逐块读取并解码
  let buffer = Buffer.alloc(0);
  let tempStr = "";
  let recording = false;
  const tempObj = {};

  readStream.on("data", (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
    while (buffer.length > 0) {
      const decodedChunk = iconv.decode(buffer, encoding);
      const hasStart = startRegex.test(decodedChunk);
      const hasEnd = endRegex.test(decodedChunk);
      if (recording) {
        if (hasEnd) {
          recording = false;
          tempStr +=
            decodedChunk.split(endRegex)[0] + '"SerialNo": "CSM3100478"}';
          const serial = tempStr
            .match(/"PatientID":\s*"([^"]*)"/g)[0]
            .split('"')
            .at(-2);
          if (numbers.size && numbers.has(serial)) {
            tempObj[serial] = tempStr;
          } else if (!numbers.size) {
            tempObj[serial] = tempStr;
          }
          tempStr = "";
        } else {
          tempStr += decodedChunk;
        }
      }
      if (hasStart) {
        recording = true;
        tempStr += decodedChunk.split(startRegex)[1];
      }
      buffer = buffer.slice(iconv.encode(decodedChunk, encoding).length);
    }
  });

  readStream.on("end", () => {
    Object.keys(tempObj).map((key) => {
      const regex = /\\n\x00+/g;
      const item = tempObj[key];
      const content = item.replaceAll(regex, "");
      fs.writeFile(`log_${key}.txt`, content, (err) => {
        console.log(err || `${key}写入成功`);
      });
    });
  });
}

rl.on("close", () => {
  console.log("输入完成，开始处理。。。");
  readFile();
});

question();
