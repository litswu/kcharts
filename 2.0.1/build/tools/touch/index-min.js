/*!build time : 2014-08-04 11:25:20 AM*/
KISSY.add("kg/kcharts/2.0.1/tools/touch/index",function(a){function b(a,b){if(!(a.touches.length>1)){var c=a.changedTouches,d=c[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(e)}}function c(a){var c=f(a);g||c||(g=!0,b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))}function d(a){g&&(b(a,"mousemove"),h=!0)}function e(a){g&&(b(a,"mouseup"),h&&b(a,"mouseout"),h=!1,g=!1)}function f(a){return"INPUT"==a.target.tagName.toUpperCase()?!0:!1}if(!a.UA.ie){var g,h=!1;document.addEventListener("touchstart",c,!0),document.addEventListener("touchmove",d,!0),document.addEventListener("touchend",e,!0)}});