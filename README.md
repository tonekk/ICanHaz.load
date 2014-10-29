ICanHaz.load
============

Little extension for loading templates asynchronously with [ICanHaz.js](https://github.com/HenrikJoreteg/ICanHaz.js) and [jQuery](http://www.jquery.com)

## Usage

```javascript

// Global config
ich.templatePath('/assets/templates');
// optionally, set a special extension (.mustache is standard)
ich.templateExtension = 'tpl';

ich.load('template', function() {
  // Called when template has been loaded
  ich.template({
    foo: 'bar'
  });
});

```

Call `ich.load` as many times as you want, the template will be only requested once.

## Installation

Just load `ICanHaz.load.js` somewhere after `ICanHaz.js` and `jQuery` and you're good to go.

## Testing

Tests are written using `jasmine` and can be executed in the browser, by browsing `test/index.html`.
This project is too tiny for continuous integration imo.
