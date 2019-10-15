
/* PINT ADVENT | David Sargent | PINT (www.pint.com) */

/* BASIC ELEMENTS
------------------------------------------------------------------------------------- */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption { margin:0; padding:0; }
table, th, td { margin:0; }
html { min-height:100%; padding:0 0 1px; }

body { min-width:1024px; color:#333; font-size:14px; line-height:18px; font-family:helvetica,sans-serif; text-align:center; background:#393637 url(http://html5advent.com/assets/images/bg-body.jpg) repeat-y 50% 0; }

a:link { color:#02bab5; text-decoration:none; }
a:visited { color:#02bab5; text-decoration:none; }
a:hover, a:active { color:#02bab5; text-decoration:underline; }
a img { border:0; }

/* Headlines: @font-face : This is called at the top of this stylesheet */
h1 { margin:0 0 10px; color:#b2b2b2; font:normal 30px/30px "FranklinGothicMedCondensed",helvetica,sans-serif; text-shadow:1px 1px 4px #000; }
h1.headline { margin:0; font-size:41px; line-height:41px;float:left; }
h1.headline span { display:inline-block; }
h2 { margin:0 0 2px; color:#000; font:normal 18px/20px helvetica,sans-serif; }
h2.headline { clear:both; margin:5px 0 15px; color:#a8a8a8; font:normal 14px/16px "FranklinGothicBook",helvetica,sans-serif; text-shadow:1px 1px 2px #000; }
h3 { margin:0 0 4px; color:#666; font:normal 16px/18px helvetica,sans-serif; }
h4{ margin:0 0 2px; color:#000; font:normal 18px/20px helvetica,sans-serif; }

.color1 { color:#b2e205; }
.color2 { color:#ff3301; }
.color3 { color:#b70000; }
.color4 { color:#02bab5; }


/* WRAPPER
------------------------------------------------------------------------------------- */
.wrap { background:url(http://html5advent.com/assets/images/bg-wrap.jpg) no-repeat 50% 0; }
.wrap .wrap { background:url(http://html5advent.com/assets/images/bg-container.jpg) no-repeat 50% 0; }
#container { position:relative; margin:0 auto; padding:0 71px; width:882px; height:660px; text-align:left; }


/* HEADER
------------------------------------------------------------------------------------- */
#header { padding:27px .5% 0; width:99%; height:93px; display:block; color:#a8a8a8; font:normal 12px/14px "FranklinGothicBook",helvetica,sans-serif; }
#header p { font:normal 12px/14px "FranklinGothicBook",helvetica,sans-serif; text-shadow:1px 1px 2px #000; }

#share { position:absolute; top:-147px; right:132px; padding:5px 0 0; width:53px; height:184px; background:url(http://html5advent.com/assets/images/bg-sprite-24.png) no-repeat 0 -371px; z-index:30; }
#share p { position:absolute; bottom:19px; left:0; margin:0; width:100%; color:#520000; font:bold 10px/10px helvetica,sans-serif; text-align:center; text-transform:uppercase; text-shadow:0 1px 1px #e56e69; }
#share ul { margin-left:8px; }
#share li { margin:0; display:block; }
#share a, #share span { position:relative; width:35px; height:36px; display:block; overflow:hidden; background:url(http://html5advent.com/assets/images/bg-sprite.png) no-repeat 0 100px; }
#share a:hover { background:url(http://html5advent.com/assets/images/bg-sprite.jpg) no-repeat 0 100px; text-decoration:none; }
#share span { position:absolute; top:0; left:0; }
#share .icon-bookmark, #share .icon-bookmark span { background-position:0 -72px; }
#share .icon-bookmark:hover, #share .icon-bookmark:hover span { background-position:-35px -72px; }
#share .icon-facebook, #share .icon-facebook span { background-position:0 0; }
#share .icon-facebook:hover, #share .icon-facebook:hover span { background-position:-35px 0; }
#share .icon-share, #share .icon-share span { height:35px; background-position:0 -108px; }
#share .icon-share:hover, #share .icon-share:hover span { height:35px; background-position:-35px -108px; }
#share .icon-twitter, #share .icon-twitter span { background-position:0 -36px; }
#share .icon-twitter:hover, #share .icon-twitter:hover span { background-position:-35px -36px; }


/* CONTENT
------------------------------------------------------------------------------------- */
#calendar { position:relative; width:100%; height:480px; display:block; z-index:10; }


/* COMPONENTS - [ .component- ]
------------------------------------------------------------------------------------- */
/* Overlay Box */
.component-box { position:relative; padding:0 0 13px; display:inline-block; visibility:hidden; background:url(http://html5advent.com/assets/images/bg-box-arrow.png) no-repeat 0 100%; z-index:100; }

.arrow-left { background-position:20% 100%; }
.arrow-center { background-position:50% 100%; }
.arrow-right { background-position:80% 100%; }
.component-box .inner { position:relative; padding:21px 15px; /*display:inline-block;*/ background:#121212; box-shadow:0 0 9px #121212; -moz-box-shadow:0 0 9px #121212; -webkit-box-shadow:0 0 9px #121212; }
.component-box .close { position:absolute; top:6px; right:5px; width:10px; height:10px; overflow:hidden; background:url(http://html5advent.com/assets/images/bg-sprite.png) no-repeat 0 -180px; cursor:pointer; }
.component-box .close span { position:absolute; top:0; left:0; width:10px; height:10px; overflow:hidden; background:url(http://html5advent.com/assets/images/bg-sprite.png) no-repeat 0 -180px; cursor:pointer; }

/* Date Calendar */
.component-calendar { margin:0; }
.component-calendar li { position:relative; width:126px; height:120px; float:left; display:inline; overflow:hidden; list-style:none; color:#4f4f4f; z-index:10; }
.component-calendar .active:hover { box-shadow:0 0 9px #222; -moz-box-shadow:0 0 9px #222; -webkit-box-shadow:0 0 9px #222; }
.component-calendar .remove-css:hover { box-shadow:0 0 0; -moz-box-shadow:0 0 0; -webkit-box-shadow:0 0 0; }
.component-calendar .indent-3 { margin-left:378px; }
.component-calendar a { position:relative; width:126px; height:120px; display:block; color:#4f4f4f; cursor:default; }
.component-calendar a:hover { opacity:.14; text-decoration:none; background:#000 url(http://html5advent.com/assets/images/bg-sprite-24.png) no-repeat 0 -120px; }
.component-calendar .active a:hover { opacity:1; background:none; cursor:pointer; }
.component-calendar .active a:hover .day { -moz-border-radius:5px; border-radius:5px; }

/* 'Day' element */
.component-calendar .day { position:absolute; top:0; left:0; width:126px; height:120px; display:block; font:bold 56px/58px helvetica,sans-serif; z-index:20; }
.component-calendar .day strong{ position:absolute; top:0; left:0; padding:29px 6px 0; width:114px; height:91px; color:#4f4f4f; font:bold 56px/58px helvetica,sans-serif; z-index:20; }
.component-calendar .active a:hover .day strong { background:url(http://html5advent.com/assets/images/bg-sprite-24.png) no-repeat 0 0; }
.component-calendar .day span { position:absolute; top:0; left:0; width:126px; height:120px; opacity:0; z-index:15; -moz-border-radius:5px; border-radius:5px; }

/* Normal, JS-disabled Hover */
.component-calendar .color1 a:hover .day, .component-calendar .color1 .day-active { background-color:#b2e205; background:-moz-linear-gradient(100% 100% 90deg, #8dbb01, #b2e205); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#b2e205), to(#8dbb01)); }
.component-calendar .color2 a:hover .day, .component-calendar .color2 .day-active { background-color:#ffd427; background:-moz-linear-gradient(100% 100% 90deg, #ffa800, #ffd427); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffd427), to(#ffa800)); }
.component-calendar .color3 a:hover .day, .component-calendar .color3 .day-active { background-color:#00cccc; background:-moz-linear-gradient(100% 100% 90deg, #01a09c, #00cccc); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#00cccc), to(#01a09c)); }
.component-calendar .color4 a:hover .day, .component-calendar .color4 .day-active { background-color:#ff5a2e; background:-moz-linear-gradient(100% 100% 90deg, #ff3301, #ff5a2e); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ff5a2e), to(#ff3301)); }

/* JS 'Fade in/out' Hover */
.component-calendar .hover { background:none !important; }
.component-calendar .hover span { background:#000 url(http://html5advent.com/assets/images/bg-sprite-24.png) no-repeat 0 -120px; }
.component-calendar .active span { background:none; }
.component-calendar .color1 .hover span { background-color:#b2e205; background:-moz-linear-gradient(100% 100% 90deg, #8dbb01, #b2e205); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#b2e205), to(#8dbb01)); }
.component-calendar .color2 .hover span { background-color:#ffd427; background:-moz-linear-gradient(100% 100% 90deg, #ffa800, #ffd427); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ffd427), to(#ffa800)); }
.component-calendar .color3 .hover span { background-color:#00cccc; background:-moz-linear-gradient(100% 100% 90deg, #01a09c, #00cccc); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#00cccc), to(#01a09c)); }
.component-calendar .color4 .hover span { background-color:#ff5a2e; background:-moz-linear-gradient(100% 100% 90deg, #ff3301, #ff5a2e); background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#ff5a2e), to(#ff3301)); }

/* Content element */
.component-calendar .content { position:relative; margin:0 0 0 126px; width:126px; height:120px; display:block; background:#332f30; z-index:30; }
.component-calendar img { margin:0 0 8px; display:block; }
.component-calendar small { position:absolute; top:4px; left:7px; color:#fff; font-size:24px; line-height:24px; z-index:40; }
.component-calendar strong { padding:0 0 0 7px; display:block; color:#fff; font:normal 12px/12px helvetica,sans-serif; }


/* MAIN OVERLAY **********/
/* Overlay Box */
#overlay-mask { position:absolute;z-index:999;background-color:#000;display:none;top:0px;left:0px; }
#overlay-main { position:absolute; top:0; left:0; margin:0 auto; padding:10px; width:666px; height:410px; text-align:left; background:#d9d9d9 url(http://html5advent.com/assets/images/bg-overlay-main.png) repeat-x 0 0; box-shadow:0 0 19px #000; -moz-box-shadow:0 0 19px #000; -webkit-box-shadow:0 0 19px #000; z-index:1000; }
#overlay-body { position:absolute; top:0;left:0; margin:0 auto; padding:10px; }
#overlay-close { position:absolute; top:10px; right:10px; width:30px; height:30px; overflow:hidden; background:url(http://html5advent.com/assets/images/bg-sprite.png) no-repeat 0 -210px; cursor:pointer; }
#overlay-close span { position:absolute; top:0; left:0; width:30px; height:30px; display:block; background:url(http://html5advent.com/assets/images/bg-sprite.png) no-repeat 0 -210px; cursor:pointer; }
#overlay-main .left { width:356px; float:left; display:inline; }
#overlay-main .right { margin-left:20px; padding:19px 0 0; width:264px; float:right; display:inline; word-wrap:break-word;}
#overlay-main p { margin:0 0 20px; }
#overlay-main .caption { margin:4px 0 0; }

/* Day 'Detail' Ajax content */
.daydetail { margin:150px 0 0; }
.js-enabled .daydetail { display:none; }
.daydetail-list { margin:0 auto; width:686px; }
.daydetail-list li { margin:0 0 25px; list-style:none; }
.daydetail-list .top { margin:8px 0 0; width:100%; text-align:right; }
.daydetail-content { padding:10px; width:666px; background:#d9d9d9 url(http://html5advent.com/assets/images/bg-overlay-main.png) repeat-x 0 0; }
.daydetail-content .left { width:356px; float:left; display:inline; }
.daydetail-content .right { margin-right:27px; padding:19px 0 0; width:264px; float:right; display:inline; }
.caption { margin:4px 0 0; color:#666; }
.caption strong { color:#000; font-size:16px; }

/* COMPONENTS - [ .component- ]
------------------------------------------------------------------------------------- */
.list-margin { margin:0; }
.list-margin li { list-style:none; margin:0 0 10px; }

.list-nobull { margin:0; }
.list-nobull li { list-style:none; }

/* MISC. CLASSES & IDS
------------------------------------------------------------------------------------- */
.clearfix:after, .component-calendar:after, .daydetail-content:after { content:"."; display:block; height:0; clear:both; visibility:hidden; }
/* PLEASE LEAVE BOTH THESE LINES, FIX FOR IE7 */
.clearfix, .component-calendar, .daydetail-content { display:inline-block; }
.clearfix, .component-calendar, .daydetail-content { /*\*/display:block;/**/ }
.nomargin { margin:0; }
