"use strict";

$(document).ready(function() {

    // Variables
    var lang = $(".header__lang"),
        langItemCurrent = $('.header__lang-select_item.current'),
        langItemActive = $(".lang-active .header__lang-select_item"),
        langItemCommon = $(".header__lang-select_item:not(.current"),
        logoF = $(".logo__f"),
        logoL = $(".logo__l"),
        logoN = $(".logo__name"),
        menuP = $(".header__nav_min p"),
        bannerLine = $(".banner__title:before"),
        bannerTitle = $(".banner__title"),
        playIcon = $("#play_icon"),
        playText = $(".banner__play-text"),
        scrollIcon = $(".banner__scroll-down"),
        minMenu = $(".header__nav_min"),
        menuOpenText = $(".header__nav-open"),
        menuCloseText = $(".header__nav-close"),
        maxMenu = $(".header__nav_max"),
        menuItem =  $(".header__main-menu__item"),
        socials = $(".header__socials"),
        line1 = $(".header__nav-button_line1"),
        line2 = $(".header__nav-button_line2"),
        line3 = $(".header__nav-button_line3");

    /*var a = $('.banner__title').text().match(/^.*((\r\n|\n|\r)|$)/gm);
    console.log(a);*/

    // Start animation timeline begin
    var startTl = new TimelineLite();

        startTl.from(logoF, 0.7, {
            opacity:0, 
            y:25, 
            delay:0.2
        }).from(line3, 0.7, {
            y:25, 
            opacity:0
        }, "-=0.6"
        ).from(logoL, 0.7, {
            opacity:0, 
            x:10
        }, "-=0.2"
        ).from(line2, 0.2, {
            x:2, 
            opacity:0
        }).from(line1, 0.2, {
            x:2, 
            opacity:0
        }).from(logoN, 0.7, {
            opacity:0, 
            y:25
        }, "-=0.7"
        ).from(lang, 0.7, {
            opacity:0,
            y:25
        }, "-=0.7"
        ).from(menuP, 0.7, {
            opacity:0, 
            y:25
        }, "-=0.7"
        ).from(bannerLine, 0.5, {
            opacity:0, 
            y:25
        }).from(bannerTitle, 0.7, {
            opacity:0, 
            y:20
        }).from(playIcon, 0.7, {
            opacity:0, 
            rotation:360,  
            scale:0
        }).from(playText, 0.7, {
            opacity:0, 
            y:-25
        })
        TweenMax.from(scrollIcon, 1.1, {opacity:0, y:-15, repeat:-1})
    // Start animation timeline end

    // Menu button's hover timeline begin
    var menuHover = new TimelineLite({paused:true, reversed:true});
        menuHover.fromTo($(this).find(".header__nav-button_line3"), 0.5, 
            {y:0}, 
            {y:10}
        ).fromTo($(this).find(".header__nav-button_line1"), 0.5, 
            {y:0}, 
            {y:-10}, "-=0.5")
    // Menu button's hover timeline end

    // Menu button's hover handler begin
    $(minMenu).hover(buttonOver, buttonOut);
    function buttonOver(){
        menuHover.play();
    }
    function buttonOut(){
        menuHover.reverse();
    }
    // Menu button's hover handler end 

    // Main menu animation timeline begin
    var menuTl = new TimelineLite({paused:true, reversed:true});
        menuTl.fromTo(line3, 0.5, 
            {y:0}, 
            {y:10
        }).fromTo(line1, 0.5, 
            {y:0}, 
            {y:-10}, 
            "-=0.5"
        ).set('body', {
            className: "+=menu-active"
        }).set(lang, {
            clearProps:"all"
        }).set(langItemCommon, {
            clearProps:"all"
        }).to(menuOpenText, 0.7, {
            opacity:0
        }, "-=0.2"
        ).to(line1, 0.7, {
            rotation:"150deg", 
            y:0, 
            x:4
        }, "-=0.7"
        ).to(line2, 0.7, {
            opacity:0
        }, "-=0.7"
        ).to(line3, 0.7, {
            y:0, 
            x:"-10px", 
            rotation:"30deg"
        }, "-=0.7"
        ).to(menuCloseText, 0.7, {
            opacity:1
        }, "-=0.2"
        ).to(maxMenu, 0.5, {
            width:"100%"
        }, "-=0.7"
        ).fromTo(lang, 0.5, 
            {opacity:0, x:"-53%"}, 
            {opacity:1, x:"-50%"
        }).staggerTo(menuItem, 0.5, {
            opacity:1, 
            y:25
        }, 0.2
        ).to(socials, 0.5, {
            opacity:1, 
            x:25
        })
    // Main menu animation timeline end

    // Main menu handler begin
    $(minMenu).on("click", function() {
      if (menuTl.reversed()) {
        menuTl.play();
      } else {
        menuTl.reverse();
      }
    });
    // Main menu handler end

    // Language menu animation timeline begin
    var langTl = new TimelineLite({paused:true, reversed:true});
    var arrowDown = CSSRulePlugin.getRule(".header__lang-select_item.current:after");

        langTl.set("body", {
            className: "+=lang-active"
        }).set(langItemCommon, {
            y:-15
        }).to(langItemCommon, 0.5, {
            y:0, 
            opacity:1
        }).to(arrowDown, 0.5, {
            cssRule:{rotation:180}
        }, "-=0.5")
    // Language menu animation timeline end

    // Language menu handler begin
    $(langItemCurrent).on('click', function() {
        if (langTl.reversed()) {
            langTl.play();
        } else {
            langTl.reverse();
        }
    });
    // Language menu handler end

});