#! /usr/bin/env node
import express from "express"
import fs from "fs"
import fsp from "fs/promises"
import inquirer from "inquirer"
import path from "path"
const app = express()
const port = 3000

let input = await inquirer.prompt({
   type: "input",
   name: "dir",
   message: "Enter The Directory of your Folder: ",
})
let dir = input.dir

let items = await fsp.readdir(dir)

items.forEach(element => {
   if(element.includes(".")){
      let ext =  path.extname(element).split(".")[1]
      if(fs.existsSync(dir+"/"+ext)){
         fsp.rename(dir+"/"+element,dir+"/"+ext+"/"+element)
      }
      else if(!fs.existsSync(dir+"/"+ext)){
         fsp.mkdir(dir+"/"+ext)
         fsp.rename(dir+"/"+element,dir+"/"+ext+"/"+element)
      }  
   }
});

app.listen(port)