import { ProtractorPlugin, ProtractorBrowser } from 'protractor';

declare var module: any;

// options
let style: string;
let focusTime: number;
let includeEvents: string[];

// other
let styleValue;
let events;

let myPlugin: ProtractorPlugin = {
    setup() {
        let defaultColor: string = "#a8d1ff";
        let defaultOpacity: string = "0.6";
        let defaultEvents: string[] = ['click', 'textInput'];
        let defaultFocusTime: number = 500;
        
        if (this.config.options) {
            focusTime = this.config.options.focusTime;
            style = this.config.options.style;
            includeEvents = this.config.options.includeEvents;
        }
        
        switch (style) {
            case "blue":
                styleValue = `background-color: #a8d1ff; opacity: ${defaultOpacity};`;
                break;
            case "green":
                styleValue = `background-color: #b3ffcc; opacity: ${defaultOpacity};`;
                break;
            default:
                styleValue = `background-color: ${defaultColor}; opacity: ${defaultOpacity};`;
        }

        if (focusTime === undefined) {
            focusTime = defaultFocusTime;
        }

        if (includeEvents === undefined) {
            includeEvents = defaultEvents;
        }

        events = includeEvents.map((event) => {
            return `"${event}"`;
        });
    },
    onPageLoad(browser: ProtractorBrowser) {
        browser.executeScript(`
            var focusTime = ${focusTime};
            var events = [${events}];

            events.forEach(event => {
                document.addEventListener(event, function(e) {
                    e = e || window.event;
                    var target = e.target || e.srcElement;
                    styling = window.getComputedStyle(target).getPropertyValue('background-color');
                    demo(target, styling);
                }, false);
            });

            function before(target) {
                target.setAttribute("style", "${styleValue}");
            }

            function after(target, defaultStyle) {
                target.setAttribute("style", "background-color: defaultStyle");
            }

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        
            async function demo(target, defaultStyle) {
                before(target);
                await sleep(focusTime);
                after(target, defaultStyle);
            }

        `);
    }
};

module.exports = myPlugin;