const $ = require('jquery');

/* eslint-disable */
(function () {
  window.Coop = window.Coop || { Modules: {} };

  Coop.Modules.feedbackForm = {
    toggles: null,
    toggleContent: null,
    formPosition: null,
    init() {
      if ($('#FeedbackForm .error').length) // don't run if form-error
      { return; }
      this.toggles = $('#FeedbackForm #js-toggle');
      this.toggleContent = $('#FeedbackForm .ds-c-toggle');
      this.toggleContent.addClass('init').removeClass('open').attr({ tabindex: '-1', 'aria-hidden': 'true', 'aria-live': 'polite' });
      this.bindEvents();
    },
    bindEvents() {
      const self = this;

      this.toggles.click(() => {
        self.formPosition = $('#FeedbackForm').offset().top;
        if (self.toggles.hasClass('is--open')) {
          $('#js-toggle').removeClass('is--open').text('Is there anything wrong with this page?');
          self.toggleContent.slideUp(300).removeClass('open').attr('aria-hidden', 'true');
          // $('html, body').animate({scrollTop:self.formPosition}, 300);
        } else {
          $('#js-toggle').addClass('is--open').text('Close');
          self.toggleContent.slideDown(300).addClass('open').attr('aria-hidden', 'false');
          $('html, body').animate({ scrollTop: self.formPosition }, 300);
        }
        return false;
      });
    },
  };
}());
/* eslint-enable */
