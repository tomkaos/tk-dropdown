!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){tkDropdown=e.fn.tkDropdown=function(i){var t=this,l=e.extend({id:"",caption:!0,captionText:!1,icon:!0,iconText:">",activeClass:!1,toggleMode:!1,toggleClass:"opened"},i);if(t.is("ul")&&t.find("li").length>0){var a=e("<div>",{addClass:"tk-dropdown"}).insertAfter(t);""!==l.id&&a.attr("id",l.id);var n=e("<div>",{addClass:"tk-toggler",
click:function(){e(this).toggleClass(l.toggleClass),"slide"===l.toggleMode?e(this).next().slideToggle():"fade"===l.toggleMode&&e(this).next().fadeToggle(),e(this).next().toggleClass(l.toggleClass)}}).appendTo(a),d=0;if(l.activeClass&&t.children("li").each(function(i,t){if(e(this).hasClass(l.activeClass))return void(d=i)}),l.caption){var o=l.captionText?l.captionText:t.find("li:eq("+d+")").text();e("<div>",{addClass:"tk-caption"}).html(o).appendTo(n)}if(l.icon){e("<div>",{addClass:"tk-icon"}).html(l.iconText).appendTo(n);
}var s=e("<ul>",{addClass:"tk-items-wrapper"}).css("display","none").appendTo(a);t.children("li").each(function(i,l){url=t.children("li").eq(i).children("a").attr("href"),label=t.children("li").eq(i).children("a").html(),active_class=i===d?' class="active"':"",new_item=e("<li"+active_class+'><a href="'+url+'">'+label+"</a></li>").appendTo(s)})}}});