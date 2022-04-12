import { rejects } from 'assert'
import fs from 'fs'
import { resolve } from 'path'
function getFile(fpath){
    //1、创建一个异步对象 此时还只是一个形式上的异步对象 并没有什么用处
    //2、return给调用者
    return new Promise(function(resolve,reject){ //3、在异步对象的构造函数中添加一个处理具体逻辑的函数
        //4、resolve是成功的回调函数，reject是失败的回调函数
        fs.readFile(fpath,'utf8',(err,dataStr)=>{
            if(err) return reject(err) //如果读取失败，则调用失败的回调用函数
            resolve(dataStr) //如果读取成功 则调用成功的回调函数
        })

    })
}


// getFile('./files/2.txt').then((r1)=>{console.log(r1)},(err)=>{console.log(err.message)})
getFile('./files/22.txt').then((r1)=>{console.log(r1)}).catch(err=>console.log(err))