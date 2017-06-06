"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var config_1 = require("../config");
var view_1 = require("../config/view");
var app = express();
app.use('/static', express.static('./dist'));
app.get('*', function (req, res) {
    var sendProp = {
        title: '',
        content: '',
        __INITSTATE__: ''
    };
    res.send(view_1.layout(sendProp));
});
app.listen(config_1.serverPort, function () { return console.log("start server: http://localhost:" + config_1.serverPort); });
