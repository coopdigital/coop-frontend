const $ = require('jquery');

// Adapted from https://github.com/Heisenbergjs/heisenberg/blob/master/app/app.js
/* eslint-disable */
(function () {
  window.Coop = window.Coop || {

    Modules: {},

    Events: $({}),

    init() {
      // Loop through all the modules added to the coop.Modules object. We check that the init function of each Module can be called.
      for (const x in Coop.Modules) {
        if (Coop.Modules[x].ModuleInitDone !== true && typeof Coop.Modules[x].init === 'function') {
          Coop.Modules[x].init();
          Coop.Modules[x].ModuleInitDone = true;
        }
      }

      Coop.Events.trigger('render');
    },
  };
}());
/* eslint-enable */
