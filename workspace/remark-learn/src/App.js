"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var react_markdown_1 = __importDefault(require("react-markdown"));
exports.App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_markdown_1.default, { source: md })));
};
var md = "\n# Post!\n\nIt is normal text.\n\n```javascript\nconsole.log(\"It is Code Highlight\");\n```\n";
//# sourceMappingURL=App.js.map