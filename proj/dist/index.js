"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// options
var style;
var focusTime;
var includeEvents;
// other
var styleValue;
var events;
var myPlugin = {
    setup: function () {
        var defaultColor = "#a8d1ff";
        var defaultOpacity = "0.6";
        var defaultEvents = ['click', 'textInput'];
        var defaultFocusTime = 500;
        focusTime = this.config.options.focusTime;
        style = this.config.options.style;
        includeEvents = this.config.options.includeEvents;
        switch (style) {
            case "blue":
                styleValue = "background-color: #a8d1ff; opacity: " + defaultOpacity + ";";
                break;
            case "green":
                styleValue = "background-color: #b3ffcc; opacity: " + defaultOpacity + ";";
                break;
            default:
                styleValue = "background-color: " + defaultColor + "; opacity: " + defaultOpacity + ";";
        }
        if (focusTime === undefined) {
            focusTime = defaultFocusTime;
        }
        if (includeEvents === undefined) {
            includeEvents = defaultEvents;
        }
        events = includeEvents.map(function (event) {
            return "\"" + event + "\"";
        });
        console.log(events.toString());
    },
    onPageLoad: function (browser) {
        browser.executeScript("\n                var focusTime = " + focusTime + ";\n                var events = [" + events + "];\n\n                events.forEach(event => {\n                    document.addEventListener(event, function(e) {\n                        e = e || window.event;\n                        var target = e.target || e.srcElement;\n                        styling = window.getComputedStyle(target).getPropertyValue('background-color');\n                        demo(target, styling);\n                    }, false);\n                });\n\n                function before(target) {\n                    target.setAttribute(\"style\", \"" + styleValue + "\");\n                }\n\n                function after(target, defaultStyle) {\n                    target.setAttribute(\"style\", \"background-color: defaultStyle\");\n                }\n\n                function sleep(ms) {\n                    return new Promise(resolve => setTimeout(resolve, ms));\n                }\n            \n                async function demo(target, defaultStyle) {\n                    before(target);\n                    await sleep(focusTime);\n                    after(target, defaultStyle);\n                }\n\n            ");
    }
};
module.exports = myPlugin;
//# sourceMappingURL=index.js.map