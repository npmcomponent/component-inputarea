*This repository is a mirror of the [component](http://component.io) module [component/inputarea](http://github.com/component/inputarea). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/component-inputarea`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# inputarea

  Cross between a textarea and text input. The textarea behaves like
  a single-line input unless the return key is used. A "multiline" classname
  is added to aid styling, for example you may wish to expand the field height.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/inputarea

## Example

```js
var inputarea = require('inputarea');
var el = document.querySelector('textarea');

inputarea(el).on('input', function(str){
  console.log(str);
});
```

## License

  MIT
