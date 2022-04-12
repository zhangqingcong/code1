import thenFs from 'then-fs'

//1、定义一个数组，存放3个读文件的异步操作
const promiseArr = [
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]

//2、将Promise的数组，作为Promise.all()的参数
Promise.all(promiseArr)
    .then(([r1, r2, r3]) => {//所有文件读取成功 等待机制
        console.log(r1,r2,r3)
    })
    .catch(err => {//2捕获Promise异步操作中的错误
        console.log(err.message)
    })

