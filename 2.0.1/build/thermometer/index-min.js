/*!build time : 2014-08-04 11:25:20 AM*/
KISSY.add("kg/kcharts/2.0.0/thermometer/index",function(a,b){function c(c){this.set(c);var d,e=a.get(c.renderTo);if(!e)throw Error("\u5bb9\u5668\u4e0d\u80fd\u4e3a\u7a7a");d=b(e,c.width,c.height),this.set("paper",d);var f=d.path("M 11 1 a 10 10 0 0 1 -10 10 l 0 218 a 10 10 0 0 1 10 10 l 58 0 a 10 10 0 0 1 10 -10 l 0 -218 a 10 10 0 0 1 -10 -10z");f.attr("fill","#F4A460");var g=d.path("M 34 181 l 0 -151 a 5 5 0 1 1 12 0 l 0 151z");g.attr("stroke-width","0"),g.attr("fill","0-#feaa66:50-#ddd:70-#f5a561:100");var h=30,i=d.rect(35,180-h,10,h);i.attr("stroke-width","0"),i.attr("fill","0-#f00:50-#fdd:75-#f00:100");var j=d.circle(40,200,20);j.attr("stroke-width","0"),j.attr("fill","r(0.75,0.25)#ffffff-#ff0000");for(var k=0;150>=k;k+=15){var l=180-k;d.path("M 47 "+l+" l 10 0z"),d.text(65,l,k/1.5)}}return a.extend(c,a.Base),c},{requires:["gallery/kcharts/1.1/raphael/index"]});