/*
 * File: app/controller/PersonalPageController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('qrunch.controller.PersonalPageController', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      personalPageContent: '#personal-page-content',
      personalSegment: '#personal-segment'
    },

    control: {
      "button#stream-button": {
        tap: 'showStreamContent'
      },
      "#likes-button": {
        tap: 'showLikesContent'
      },
      "#community-button": {
        tap: 'showCommunityContent'
      },
      "#personal-page-content": {
        activeitemchange: 'changePressedButton'
      },
      "carousel": {
        move: 'onCarouselMove'
      },
      "InfCarousel": {
        dragstart: 'preventMassSwipe',
        dragend: 'enableMassSwipe'
      }
    }
  },

  showStreamContent: function(button, e, options) {
    this.getPersonalPageContent().setActiveItem(0);
  },

  showLikesContent: function(button, e, options) {
    this.getPersonalPageContent().setActiveItem(1);
  },

  showCommunityContent: function(button, e, options) {
    this.getPersonalPageContent().setActiveItem(2);
  },

  changePressedButton: function(container, value, oldValue, options) {
    segment = this.getPersonalSegment();
    segment.setPressedButtons(segment.getItems().items[container.indexOf(value)-1]);
  },

  onCarouselMove: function(container, item, toIndex, fromIndex, options) {

  },

  preventMassSwipe: function(target) {
    var carousel = this.getPersonalPageContent();
    element  = carousel.element;

    element.un({
      dragstart : 'onDragStart',
      drag      : 'onDrag',
      dragend   : 'onDragEnd',
      scope     : carousel
    });
  },

  enableMassSwipe: function(target) {
    var carousel = this.getPersonalPageContent();
    element  = carousel.element;

    element.on({
      dragstart : 'onDragStart',
      drag      : 'onDrag',
      dragend   : 'onDragEnd',
      scope     : carousel
    });
  }

});