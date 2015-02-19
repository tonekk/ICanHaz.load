ICanHaz.load
============

[![License](http://img.shields.io/:license-mit-blue.svg)](http://tonekk.mit-license.org)
[![Bower version](https://badge.fury.io/bo/icanhaz.load.svg)](http://badge.fury.io/bo/icanhaz.load)

Little extension for loading templates asynchronously with [ICanHaz.js](https://github.com/HenrikJoreteg/ICanHaz.js) and [jQuery](http://www.jquery.com)

## Usage

```javascript

// Global config
ich.templatePath = '/assets/templates';
// optionally, set a special extension (.mustache is standard)
ich.templateExtension = 'tpl';

ich.load('template', function() {
  // Called when template has been loaded
  var content = ich.template({
    foo: 'bar'
  });
  
  $element.html(content);
});

```

Call `ich.load` as many times as you want, the template will be only requested once.

**But wait**, there is an even shorter method:

```javascript

ich.loadTemplate('template', { foo: 'bar' }, function($content) {
  $element.html($content);
});

```

## Installation

Just load `ICanHaz.load.js` somewhere after `ICanHaz.js` and `jQuery` and you're good to go.

## Testing

Tests are written using `jasmine` and can be executed in the browser, by browsing `test/index.html`.
This project is too tiny for continuous integration imo.
