"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.get("/", function (req, res) {
    res.send("아주 화가 나");
}).listen(port, function () {
    console.log("서버 도는 중");
});
