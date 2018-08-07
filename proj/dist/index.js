"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color;
var myPlugin = {
    setup: function () {
        color = this.config.options.color;
    },
    onPageLoad: function (browser) {
        browser.executeScript("\n                var focusTime = 500;\n                var events = ['click', 'mousedown', 'mouseup', 'focus', 'blur', 'keydown', 'change', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout', 'mousewheel', 'keydown', 'keyup', 'keypress', 'textInput', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'resize', 'scroll', 'zoom', 'focus', 'blur', 'select', 'change', 'submit', 'reset'];\n                \n                events.forEach(event => {\n                    document.addEventListener(event, function(e) {\n                        e = e || window.event;\n                        var target = e.target || e.srcElement;\n                        styling = window.getComputedStyle(target).getPropertyValue('background-color');\n                        demo(target, styling);\n                    }, false);\n                });\n\n                function before(target) {\n                    target.setAttribute(\"style\", \"background-color: " + color + "\");\n                }\n\n                function after(target, defaultStyle) {\n                    target.setAttribute(\"style\", \"background-color: defaultStyle\");\n                }\n\n                function sleep(ms) {\n                    return new Promise(resolve => setTimeout(resolve, ms));\n                }\n            \n                async function demo(target, defaultStyle) {\n                    before(target);\n                    await sleep(focusTime);\n                    after(target, defaultStyle);\n                }\n\n            ");
    }
};
module.exports = myPlugin;
//# sourceMappingURL=index.js.map