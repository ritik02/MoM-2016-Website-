/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function()
{
    $("#social-links-icon").click(function()
    {
        var t=$("#sharing-buttons"),e=$(this).closest(".quick-float-section");
        t.hasClass("opened")?(e.removeClass("opened"),$(this).removeClass("opened"),t.removeClass("opened")):(e.addClass("opened"),$(this).addClass("opened"),t.addClass("opened"))}),$("#music-control").click(function(){$(this).find("span").toggleClass("play pause"),audio_elem=$("#back_music")[0],audio_elem.paused?(audio_elem.play(),cookies.remove("dontplay")):(audio_elem.pause(),cookies.set("dontplay",!0,24))})}),$(function(){var t=$("[rel~=tooltip]"),e=!1,o=!1;t.bind("mouseenter",function(){if(e=$(this),tip=e.attr("title"),o=$('<div id="tooltip"></div>'),!tip||""==tip)return!1;e.removeAttr("title"),o.css("opacity",0).html(tip).appendTo("body");var t=function(){$(window).width()<1.5*o.outerWidth()?o.css("max-width",$(window).width()/2):o.css("max-width",340);var t=e.offset().left+e.outerWidth()/2-o.outerWidth()/2,i=e.offset().top-o.outerHeight()-20;if(0>t?(t=e.offset().left+e.outerWidth()/2-20,o.addClass("left")):o.removeClass("left"),t+o.outerWidth()>$(window).width()?(t=e.offset().left-o.outerWidth()+e.outerWidth()/2+20,o.addClass("right")):o.removeClass("right"),0>i){var i=e.offset().top+e.outerHeight();o.addClass("top")}else o.removeClass("top");o.css({left:t,top:i}).animate({top:"+=10",opacity:1},50)};t(),$(window).resize(t);var i=function(){o.animate({top:"-=10",opacity:0},50,function(){$(this).remove()}),e.attr("title",tip)};e.bind("mouseleave",i),o.bind("click",i),e.bind("click",i)})});