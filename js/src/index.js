"use strict";
/**
 * https://ant.design/components/layout-cn/
 */
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var antd_1 = require("antd");
var Home = function () { return (React.createElement("div", null, "home")); };
ReactDOM.render(React.createElement("div", null,
    React.createElement(antd_1.Button, { type: "primary" }, "Primary"),
    React.createElement(Home, null),
    "1111"), document.getElementById('root'));
