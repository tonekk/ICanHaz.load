(function($, ich) {

  /*
   * ICanHaz.load.js
   *
   * Usage:
   *
   * ich.load('template', function() {
   *   // Executed as soon as template loading has finished
   *   var $tpl = ich.template({
   *     foo: 'bar'
   *   });
   * });
   *
   *
   * by Finn-Lennart Heemeyer, License: MIT
   */

  var clearAll = ich.clearAll,
      templates = {};

  ich.load = function(templateName, cb, templatePath, templateExtension) {
    if (!templates[templateName]) {

      // Save template loading state und all callbacks here
      templates[templateName] = {
        ready: false,
        callbacks: [cb]
      };

      var path = [(templatePath || ich.templatePath), '/',
                 templateName, '.',
                 (templateExtension || ich.templateExtension || 'mustache')].join('');

      // Request template file async
      $.get(path, function(data) {

        // Add template to use in callbacks
        ich.addTemplate(templateName, data);

        // Mark template as loaded
        templates[templateName].ready = true;

        // Execute all callbacks
        for (var i = 0; i < templates[templateName].callbacks.length; i++) {
          templates[templateName].callbacks[i]();
        }
      });
    } else if (templates[templateName].ready) {
      // If template has been loaded before, execute callback
      cb();
    } else {
      // If template loading was started, add cb to callbacks
      templates[templateName].callbacks.push(cb);
    }
  };

  /*
   * Fast version: Do everything in one function
   */
  ich.loadTemplate = function(templateName, data, cb, templatePath, templateExtension) {
    ich.load(templateName, function() {
      // Compute template from data, execute callback
      var content = ich[templateName](data);
      cb(content);
    }, templatePath, templateExtension);
  };

  /*
   * Make sure to also clean up templates object when calling clearAll()
   */
  ich.clearAll = function() {
    templates = {};
    clearAll();
  };

})(window.jQuery, window.ich);
