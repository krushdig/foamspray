!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){"use strict";window.showThumb=function(e){lazyload_video_settings.vimeo.loadthumbnail&&(jQuery("#"+e[0].id).css("background-image","url("+e[0].thumbnail_large+")").css("background-color","#000").css("background-position","center center").css("background-repeat","no-repeat"),lazyload_video_settings.vimeo.show_title&&jQuery("#"+e[0].id).children().children(".titletext.vimeo").text(e[0].title))},function(e,t){var o,n=".preview-vimeo",i="js-lazyload--not-loaded";function a(){t(n).parent().removeClass(i)}e.init=function(e){r(e),t(document).ready(l()).ajaxStop(function(){l()}),"function"==typeof g.init&&!0===o.responsive?g.init():a(),"function"==typeof o.callback&&o.callback()};var r=function(e){o=t.extend({buttonstyle:"",playercolour:"",videoseo:!1,responsive:!0,displayBranding:!1,loadthumbnail:!0,callback:null},e)};function l(){v(),c(),d()}var c=function(){if(!0===o.displayBranding&&0===t(n).siblings(".lazyload-info-icon").length){var e=t(n),i=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(i)}},d=function(){t(n).on("click",function(){var e=b(this);s(this),u(this);var n="";o.playercolour!==n&&(o.playercolour=f(o.playercolour),n="&color="+o.playercolour),t(this).html('<iframe src="'+p(e)+"?autoplay=1"+n+'" style="height:'+parseInt(t("#"+e).css("height"))+'px;width:100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen autoPlay allowFullScreen></iframe>'),"function"==typeof g.resize&&!0===o.responsive&&g.resize()})},s=function(e){t(e).removeClass("preview-vimeo")},u=function(e){t(e).prev(".lazyload-info-icon").remove()},p=function(e){return"//player.vimeo.com/video/"+e},f=function(e){return e.toString().replace(/[.#]/g,"")},v=function(){t(n).each(function(){var e=b(this);t(this).empty(),m(e)})},m=function(e){var n,i=t("#"+e);lazyload_video_settings.vimeo.loadthumbnail&&((n=document.createElement("script")).type="text/javascript",n.src=y(e)+".json?callback=showThumb",i.prepend(n));var a="";!0===o.videoseo&&(a=' itemprop="name"'),i.prepend('<div style="height:'+parseInt(t("#"+e).css("height"))+"px;width:"+parseInt(t("#"+e).css("width"))+'px;" class="lazy-load-vimeo-div"><span class="titletext vimeo"'+a+"></span></div>").addClass(o.buttonstyle),h(e)},h=function(e){!0===o.videoseo&&t.getJSON(y(e)+"?callback=?",{format:"json"},function(o){t("#"+e).append('<meta itemprop="contentLocation" content="'+o[0].url+'" />'),t("#"+e).append('<meta itemprop="embedUrl" content="'+p(e)+'" />'),t("#"+e).append('<meta itemprop="thumbnail" content="'+o[0].thumbnail_large+'" />'),t("#"+e).append('<meta itemprop="datePublished" content="'+o[0].upload_date+'" />'),t("#"+e).append('<meta itemprop="duration" content="'+o[0].duration+'" />'),t("#"+e).append('<meta itemprop="aggregateRating" content="'+o.data.rating+'" />')})},y=function(e){return"//vimeo.com/api/v2/video/"+e+".json"},b=function(e){return t(e).attr("id")};t.fn.bindFirst=function(e,o){var n=t(this);n.unbind(e,o),n.bind(e,o);var i=t._data(n[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var g={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){g.config.container.length>0&&(t(window).on("resize",g.resize),t(window).bindFirst("load",function(){g.resize()}),t(window).on("load",function(){g.resize(),a()}))},resize:function(){t(g.config.selector,g.config.container).each(function(){var e=t(this),o=e.parent().width(),n=Math.round(.5625*o);e.attr("height",n),e.attr("width",o),e.css({height:n,width:o})})}};t(function(){e.init(lazyload_video_settings.vimeo)})}(window.lazyload_vimeo=window.lazyload_vimeo||{},jQuery)},function(e,t,o){"use strict";!function(e,t,o){var n,i=".preview-youtube",a="js-lazyload--not-loaded",r="";function l(){t(i).parent().removeClass(a)}e.init=function(e){c(e),t(document).ready(d()).ajaxStop(function(){d()}),"function"==typeof s.init&&!0===n.responsive?s.init():l(),"function"==typeof n.callback&&n.callback()};var c=function(e){n=t.extend({theme:"dark",colour:"red",controls:!0,loadpolicy:!0,showinfo:!0,relations:!0,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0",displaybranding:!1,loadthumbnail:!0,callback:null},e)},d=function(){t("a.lazy-load-youtube").each(function(e){var o,i=t(this),a=i.attr("href"),l="";(o=a.split("/embed/")[1])||(o=a.split("://youtu.be/")[1]),o||(o=a.split("v=")[1].replace(/&/,"?"));var c=o.split("?")[0].split("#")[0],d="//www.youtube.com/embed/"+(l=void 0!==n.preroll&&n.preroll!==l?n.preroll:o);!function(){if(!0===n.displaybranding&&0===i.siblings(".lazyload-info-icon").length){var e=i,o=t('<a class="lazyload-info-icon" href="//kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>');e.before(o)}}();var u=function(e){return"//www.youtube.com/watch?v="+e},p=function(e){return parseInt(e.css("width"))-4},f=0,v=[3600,60,1],m=o.match(/[#&?]t=(?:(\d+)(?:h))?(?:(\d+)(?:m))?(?:(\d+)(?:s))?/);if(m)for(var h=1;h<m.length;h++)void 0!==m[h]&&(f+=parseInt(m[h])*v[h-1]);0===f&&(m=o.match(/[#&?](?:t|start)=(\d+)/))&&(f=m[1]),o=o.split("#")[0];var y="";f&&0!==f&&-1===o.indexOf("start=")&&(y=(-1===o.indexOf("?")?"?":"&")+"start="+f);var b="";!0===n.videoseo&&(b=' itemprop="name"'),-1!==o.indexOf("showinfo=0")?i.html(""):i.html('<div class="lazy-load-youtube-info"><span class="titletext youtube"'+b+">"+(void 0!==i.attr("video-title")?i.attr("video-title"):void 0!==i.attr("data-video-title")?i.attr("data-video-title"):void 0!==i.html()&&""!==i.html()?i.html():"")+"</span></div>"),i.prepend('<div style="height:'+function(e){var t=0;if(!1===n.responsive)t=parseInt(e.css("height"))-4;else{var o=p(e);t=Math.round(.5625*o)}return t}(i)+"px;width:"+p(i)+'px;" class="lazy-load-youtube-div"></div>').addClass(n.buttonstyle);!function(e){var t="//i2.ytimg.com/vi/"+e+"/"+n.thumbnailquality+".jpg";r=t}(c);var g=function(){return r};n.loadthumbnail&&function(e){var o=g(),n=t('<img style="display:none" src="'+o+'"/>');n.load(function(){120===n.width()&&(o=o.replace("maxresdefault","0")),"none"===e.css("background-image")&&(e.css("background-image","url("+o+")"),e.css("background-color","#000"),e.css("background-position","center center"),e.css("background-repeat","no-repeat")),n.remove()}),t("body").append(n)}(i),!0===n.videoseo&&(i.append('<meta itemprop="contentLocation" content="'+u(c)+'" />'),i.append('<meta itemprop="embedUrl" content="'+d+'" />'),i.append('<meta itemprop="thumbnail" content="'+g()+'" />'),t.getJSON("//gdata.youtube.com/feeds/api/videos/"+c+"?v=2&alt=jsonc&callback=?",function(e){i.append('<meta itemprop="datePublished" content="'+e.data.uploaded+'" />'),i.append('<meta itemprop="duration" content="'+e.data.duration+'" />'),i.append('<meta itemprop="aggregateRating" content="'+e.data.rating+'" />')})),i.attr("id",c+e),i.attr("href",u(c)+(f?"#t="+f+"s":"")),function(){var e,t,o,i,a="",r="",s="",u="";void 0!==n.theme&&n.theme!==a&&"dark"!==n.theme&&(a="&theme="+n.theme),void 0!==n.colour&&n.colour!==r&&"red"!==n.colour&&(r="&color="+n.colour),e=n.showinfo?"":"&showinfo=0",t=n.relations?"":"&rel=0",o=n.controls?"":"&controls=0",i=n.loadpolicy?"":"&iv_load_policy=3",l=l!==c?c+",":"",void 0!==n.postroll&&n.postroll!==s&&(s=n.postroll),""===l&&""===s||(u="&playlist="+l+s),d+=(-1===d.indexOf("?")?"?":"&")+"autoplay=1"+a+r+o+i+e+t+u+y}();var w='<iframe width="'+parseInt(i.css("width"))+'" height="'+parseInt(i.css("height"))+'" style="vertical-align:top;" src="'+d+'" frameborder="0" allowfullscreen></iframe>';t(this).on("click",function(){return z(this),_(this),t("#"+c+e).replaceWith(w),"function"==typeof s.resize&&!0===n.responsive&&s.resize(),!1});var z=function(e){t(e).removeClass("preview-youtube")},_=function(e){t(e).prev(".lazyload-info-icon").remove()}})};t.fn.bindFirst=function(e,o){var n=t(this);n.unbind(e,o),n.bind(e,o);var i=t._data(n[0]).events,a=i[e];a.unshift(a.pop()),i[e]=a};var s={config:{container:t(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){s.config.container.length>0&&(t(window).on("resize",s.resize),t(window).bindFirst("load",function(){s.resize()}),t(window).on("load",function(){s.resize(),l()}))},resize:function(){t(s.config.selector,s.config.container).each(function(){var e=t(this),o=e.parent().width(),n=Math.round(.5625*o);e.attr("height",n),e.attr("width",o),e.css({height:n,width:o})})}};t(function(){e.init(lazyload_video_settings.youtube)})}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery)},,function(e,t,o){},function(e,t,o){"use strict";o(3),o(1),o(0)}]);
//# sourceMappingURL=lazyload-all.js.map