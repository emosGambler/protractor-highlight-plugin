import { ProtractorPlugin, ProtractorBrowser } from 'protractor';

declare var module: any;

let color;

let myPlugin: ProtractorPlugin = {
    setup() {
        color = this.config.options.color;
    },
    onPageLoad(browser: ProtractorBrowser) {
        browser.executeScript(`
                var focusTime = 500;
                var events = ['click', 'mousedown', 'mouseup', 'focus', 'blur', 'keydown', 'change', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout', 'mousewheel', 'keydown', 'keyup', 'keypress', 'textInput', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'resize', 'scroll', 'zoom', 'focus', 'blur', 'select', 'change', 'submit', 'reset'];
                
                events.forEach(event => {
                    document.addEventListener(event, function(e) {
                        e = e || window.event;
                        var target = e.target || e.srcElement;
                        styling = window.getComputedStyle(target).getPropertyValue('background-color');
                        demo(target, styling);
                    }, false);
                });

                function before(target) {
                    target.setAttribute("style", "background-color: ${color}");
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