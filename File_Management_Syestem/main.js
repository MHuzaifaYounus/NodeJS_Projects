const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
const port = 3000

let items = fs.readdirSync(__dirname + "/files")
items.forEach(element => {
    if (path.extname(element) === ".png") {
        if (!fs.existsSync("files/PNG")) {
            fs.mkdirSync("files/PNG");
        }
        fs.renameSync(__dirname + "/files/" + element, __dirname + "/files/PNG/" + element);
    }
    else if (path.extname(element) === ".jpg") {
        if (!fs.existsSync("files/JPG")) {
            fs.mkdirSync("files/JPG");
        }
        fs.renameSync(__dirname + "/files/" + element, __dirname + "/files/JPG/" + element);
    }
    else if (path.extname(element) === ".pdf") {
        if (!fs.existsSync("files/PDF")) {
            fs.mkdirSync("files/PDF");
        }
        fs.renameSync(__dirname + "/files/" + element, __dirname + "/files/PDF/" + element);
    }
    else if (path.extname(element) === ".mp3") {
        if (!fs.existsSync("files/MP3")) {
            fs.mkdirSync("files/MP3");
        }
        fs.renameSync(__dirname + "/files/" + element, __dirname + "/files/MP3/" + element);
    }
    else if (path.extname(element) === ".svg") {
        if (!fs.existsSync("files/SVG")) {
            fs.mkdirSync("files/SVG");
        }
        fs.renameSync(__dirname + "/files/" + element, __dirname + "/files/SVG/" + element);
    }
    else {
        if (!fs.existsSync("files/Others")) {
            fs.mkdirSync("files/Others");
        }
        fs.renameSync(__dirname + "/files/" + element, __dirname + "/files/Others/" + element);
    }
});

app.listen(port)