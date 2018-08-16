# Plugin description

The plugin highlights elements on which actions are performed by protractor, so that QA (or developer) can see what element is protractor exactly working on.
# Installation

`npm install protractor-highlight-plugin` where your package.json is will add plugin to your node_modules

# Using

Add plugin to your protractor config file, like this:

```javascript
plugins: [{
     package: 'protractor-highlight-plugin'
}],
```

Now, after you run your tests, you will see that the elements on which actions are performed are highlighted:

![Ooops, something is not properly shown! Tell me about it, so I can fix it.](https://i.imgur.com/QR4xx2a.png)

If you do not like the color, you can easily change it by adding some additional options to the plugin:

```javascript
plugins: [{
     package: 'protractor-highlight-plugin',
     options: {
          style: 'green'
     }
}],
```

This way `protractor-highlight-plugin` can use various colors as a highlight color:

![Ooops, something is not properly shown! Tell me about it, so I can fix it.](https://i.imgur.com/W4rh6vy.png)
![Ooops, something is not properly shown! Tell me about it, so I can fix it.](https://i.imgur.com/nEdDIgi.png)
![Ooops, something is not properly shown! Tell me about it, so I can fix it.](https://i.imgur.com/0J4Fdw1.png)

You can find any color you like using [color pickers](https://www.w3schools.com/colors/colors_picker.asp)

# Options in details

| Option        | Description |Values           | Examples  |
| ------------- |-------------|-------------|-----|
| style      | Changes color of the highlight (default is Blue) | anything from [color picker](https://www.w3schools.com/colors/colors_picker.asp) | `Green`, `yellow`, `#ff66d9`, `LightGoldenRodYellow`  |
| focusTime     | Changes time of highlighting (default is 500ms) | any number in ms| 300, 400, 1000 etc. |
| includeEvents | Changes events for which element will be highlighted (defaults are 'click' and 'textInput' | anything from this list should work: `['mousedown', 'focus', 'change', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseover', 'mouseout', 'mousewheel', 'keydown', 'keyup', 'keypress', 'textInput', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'resize', 'scroll', 'zoom', 'blur', 'select', 'change', 'submit', 'reset'];`     | `click`, `change`, `mouseover`, `keydown` etc. |

# Example of options:

```javascript
plugins: [{
     package: 'protractor-highlight-plugin',
          options: {
               style: 'DarkSlateBlue',
               focusTime: 450,
               includeEvents: ['click', 'keydown', 'dblclick', 'textInput']
          }
}]
```
