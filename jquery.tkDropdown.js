/**
* jQuery tkDropdown Plugin
* Author: Tamas Konya <konyatamas01@gmail.com>
* License: MIT
*/

(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Global
    factory(jQuery);
  }
})(function($) {

  tkDropdown = $.fn.tkDropdown = function(options) {
    var parent = this;

    //default options
    var opts = $.extend({
      id: '',
      caption: true,
      captionText: false,
      icon: true,
      iconText: '>',
      activeClass: false,
      toggleMode: false,
      toggleClass: 'opened'
    },options);

    //check if parent element is an unordered list and have elements
    if ((parent).is('ul') && (parent).find('li').length > 0) {

      //create wrapper element
      var wrapper = $('<div>', {
        addClass: 'tk-dropdown'
      }).insertAfter(parent);

      //set the id of wrapper
      if (opts.id !== '') wrapper.attr('id', opts.id);

      //create toggle div
      var toggleDiv = $('<div>', {
        addClass: 'tk-toggler',
        click: function(){
          $(this).toggleClass(opts.toggleClass);
          if (opts.toggleMode === 'slide') {
            $(this).next().slideToggle();
          } else if (opts.toggleMode === 'fade') {
            $(this).next().fadeToggle();
          }
          //default toggleclass
          $(this).next().toggleClass(opts.toggleClass);
        }
      }).appendTo(wrapper);

      //count activeIndex based on given class of old Menu
      var activeIndex = 0;
      if (opts.activeClass) {
        parent.children('li').each(function(index, value) {
          if ($(this).hasClass(opts.activeClass)) {
            activeIndex = index;
            return;
          }
        });
      }

      //create caption div from first li element
      if (opts.caption) {
        var caption_text = (!opts.captionText) ? parent.find('li:eq('+ activeIndex +')').text() : opts.captionText;
        var caption = $('<div>', {
          addClass: 'tk-caption'
        }).html(caption_text).appendTo(toggleDiv);
      }

      //create icon
      if (opts.icon) {
        var icon_elem = $('<div>', {
          addClass: 'tk-icon'
        }).html(opts.iconText).appendTo(toggleDiv);
      }

      //Create dropdown items wrapper
      var items_wrapper = $('<ul>', {
        addClass: 'tk-items-wrapper'
      }).css('display','none').appendTo(wrapper);

      //Create items tree
      parent.children('li').each(function(index, value){
        url = parent.children('li').eq(index).children('a').attr('href');
        label = parent.children('li').eq(index).children('a').html();
        active_class = (index === activeIndex ) ? ' class="active"' : '';
        new_item = $('<li'+ active_class +'><a href="'+ url +'">'+ label +'</a></li>').appendTo(items_wrapper);
      });
    }
  };

});
