import { Config } from 'protractor';
import * as JasmineConsoleReporter from 'jasmine-console-reporter';

export let config: Config = {
    baseUrl: 'https://angularjs.org/',
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    specs: ['specs/**/*.spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    onPrepare: () => {
        jasmine.getEnv().addReporter(new JasmineConsoleReporter({
            colors: 1,
            cleanStack: 1,
            verbosity: 4,
            listStyle: 'indent',
            activity: false
        }));
    },
    plugins: [{
        package: 'protractor-highlight-plugin',
        options: {
            style: 'green',
            //focusTime: 400,
            includeEvents: ['click', 'textInput', 'change'], //['mousedown', 'focus', 'change', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout', 'mousewheel', 'keydown', 'keyup', 'keypress', 'textInput', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'resize', 'scroll', 'zoom', 'blur', 'select', 'change', 'submit', 'reset'];
        }
    }],
};