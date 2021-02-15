const $ = require('jquery');

/**
 * Toggles module
 *
 * Progressive content reveal.
 *
 * Usage:
<a href="#target" data-toggle>Trigger</a>
<div id="target">Target content</div>
 *
 * Options:
<a href="#target" data-toggle data-toggle-text-selector=".text" data-toggle-text-open="Close">
  <span class="text">Open</span>
</a>
<div id="target">Target content</div>
 */
/* eslint-disable */
(function () {
  window.Coop = window.Coop || { Modules: {} };

  const selector = '[data-toggle], .toggle-trigger';

  const Toggles = function ($el, options) {
    this.init($el, options);
    return this;
  };

  Toggles.prototype = {
    init($el, options) {
      this.$trigger = $el;
      this.$target = $($el.attr('href'));
      this.$textContainer = $($el.data('toggle-text-selector') || $el).eq(0);

      $el.data('toggle-target', this.$target);
      $el.data('toggle-text-container', this.$textContainer);

      if ($el.attr('data-toggle-text-closed')) {
        $el.data('toggle-text-open', this.$textContainer.text());
      }
      if ($el.attr('data-toggle-text-open')) {
        $el.data('toggle-text-closed', this.$textContainer.text());
      }

      this.addARIA();
      this.bindEvents();

      $el.add(this.$target).addClass('init');
    },
    addARIA() {
      if (!this.$trigger.is('button')) {
        this.$trigger.attr('role', 'button');
      }
      this.$trigger
        .attr('aria-controls', this.$target.attr('id'))
        .attr('aria-expanded', 'false');

      this.$target
        .attr('aria-hidden', 'true')
        .attr('tabindex', '-1')
        .attr('aria-live', 'polite');
    },
    bindEvents() {
      const self = this;

      this.$trigger
        .off('click.Toggles')
        .on('click.Toggles', function (e) {
          e.preventDefault();
          self.toggle($(this));
        });
    },
    getTarget($el) {
      return $el.data('toggle-target');
    },
    toggle() {
      if (this.$trigger.hasClass('is--open')) {
        this.close(this.$trigger);
      } else {
        this.open();
      }
    },
    open() {
      const self = this;

      this.$trigger.add(this.$target).addClass('is--open');

      this.$trigger.attr('aria-expanded', 'true');
      this.$target.attr('aria-hidden', 'false');

      if (this.$trigger.data('toggle-text-open')) {
        this.$textContainer.text(this.$trigger.data('toggle-text-open'));
      }

      if (this.$trigger.parent().hasClass('accordion')) {
        this.$trigger.siblings(selector).each(function () {
          self.close($(this));
        });
      }
    },
    close($el) {
      const $target = this.getTarget($el);
      $el.add($target).removeClass('is--open');

      $el.attr('aria-expanded', 'false');
      $target.attr('aria-hidden', 'true');

      if ($el.data('toggle-text-closed')) {
        $el.data('toggle-text-container').text($el.data('toggle-text-closed'));
      }
    },
  };

  Coop.Modules._Toggles = Toggles;

  Coop.Modules.Toggles = {
    init() {
      return $(selector).each(function () {
        $(this).data('Toggles', new Toggles($(this), $(this).data()));
      });
    },
  };
}());
/* eslint-enable */
