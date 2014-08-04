/*!build time : 2014-08-04 11:25:20 AM*/
KISSY.add("kg/kcharts/2.0.1/radar/index",function(a,b,c,d,e,f){function g(a,b,c){return a+(b-a)*c}function h(a){for(var b,c=0,d=a.length;d>c;c++){var e=a[c],f=e.x,g=e.y;c?b.push("L",f,g):b=["M",f,g]}return b.push("Z"),b.join(",")}function i(a,b){var c;c=b?"show":"hide",k(a,function(a){a[c]()})}var j,k=(Math.PI,a.each),l=(a.map,a.filter,a.merge),m={text:{fill:"#222","max-chars":10,key:!0}},n={points:{fill:"#333","stroke-width":"0",size:4.5},text:{fill:"#222","text-anchor":"start"},lines:{"stroke-width":"1"}},o={easing:"linear",duration:800},p={initializer:function(b){b||(b=this.userConfig);var d=a.get(b.renderTo);b.anim=a.merge(o,b.anim),this.set("container",d),this.set(b),this._animationInstance=0,this.dochk(b);var e;if(!d)throw Error("\u5bb9\u5668\u4e0d\u80fd\u4e3a\u7a7a");e=c(d,b.width,b.height),this.set("paper",e),this.set("config",b),this.render(b)},dochk:function(a){var b=a.labels.length,c=d.width(this.get("container")),e=d.height(this.get("container"));this.set("sides",b),void 0==a.cx&&(a.cx=c/2),void 0==a.cy&&(a.cy=e/2);var f=this.get("scoreGroups");if(f[0]&&f[0].scores){var g=[];k(f,function(a){g=g.concat(a.scores)});var h=Math.max.apply(Math,g);a.max=h}if(void 0==a.r){var i=Math.min.apply(Math,[c,e]);a.r=i/2-30,a.r<0&&(a.r=i/2)}},drawPolygon:function(a){var b=this.get("paper"),c=h(a);return b.path(c)},drawFrame:function(a){var b=this.drawPolygon(a).attr({stroke:"#777"});this.set("framepath",b)},getOption:function(){var a=this.get("config"),b={text:{fill:"#222","max-chars":10,key:!0}},c=(a.options,l(b,a.options));return c},getGroupOption:function(b){var c={points:{fill:"#333","stroke-width":"0",size:4.5},text:{fill:"#222","text-anchor":"start"},lines:{"stroke-width":"1"}};return a.merge(c,b)},drawGroup:function(a,b,c){for(var d,e,f,h,i=this.get("config"),j=i.cx,k=i.cy,l=this.get("paper"),m=this.get("lines")||[],n=[],o=this.get("pts")||[],p=[],q=0;q<b.length;q++)d=g(j,b[q].x,a[q]),e=g(k,b[q].y,a[q]),p.push({x:d,y:e});f=this.drawPolygon(p),c&&c.lines&&f.attr(c.lines);for(var r=0;r<a.length;r++)d=g(j,b[r].x,a[r]),e=g(k,b[r].y,a[r]),h=l.circle(d,e,c.points.size).attr(c.points),n.push(h);o.push(n),m.push(f),this.get("lines")||(this.set("lines",m),this.set("pts",o))},getPoints:function(){for(var a,b,c=this.get("sides"),d=this.get("config"),e=-90,f=d.r,g=d.cx,h=d.cy,i=[],j=360/c,k=0;c>k;k++){var l=e/360*2*Math.PI;a=g+f*Math.cos(l),b=h+f*Math.sin(l),i.push({x:a,y:b}),e+=j}return i},getBBox:function(){var a=this.get("r"),b=2*a,c=2*a,d=this.get("cx"),e=this.get("cy");return{width:b,height:c,left:d-b/2,top:e-c/2}},drawLegend:function(a){var b=this.get("container"),c=this.getBBox(),d=this.get("legend")||{},e=l({interval:20,iconright:5,showicon:!0},d.globalConfig);delete d.globalConfig;var g=new f(l({container:b,paper:this.get("paper"),bbox:c,align:d.align||"bc",offset:d.offset||[0,20],globalConfig:e,config:a},d));g.on("click",function(a){if(!this.isRunning()){var b=a.index,c=(a.text,a.icon,a.el);1!=c.hide?(this.hideLine(b),c.hide=1,c.disable()):(this.showLine(b),c.hide=0,c.enable())}},this),this.set("legend",g)},hideLine:function(a){var b=this.get("lines"),c=this.get("pts");b[a]&&i([b[a]]),c[a]&&i(c[a])},showLine:function(a){var b=this.get("lines"),c=this.get("pts");b[a]&&i([b[a]],!0),c[a]&&i(c[a],!0)},drawLabels:function(b,c){for(var d,e,f=b,h=this.get("paper"),i=this.get("config"),j=i.cx,k=i.cy,l=(i.r,i.labels),m=0;m<f.length;m++){d=g(j,f[m].x,1.1),e=g(k,f[m].y,1.1);var n="middle";d>j&&(n="start"),j>d&&(n="end");var o=l[m];o.length>c.text["max-chars"]&&(o=o.replace(" ","\n"));{h.text(d,e,o).attr(a.merge(c.text,{"text-anchor":n}))}}},drawMeasureAndRuler:function(a){for(var b,c,d,e,f,h,i=this.get("paper"),j=this.get("config"),k=j.cx,l=j.cy,m=[],n=[],o=0;o<a.length;o++){b=a[o].x,c=a[o].y,m.push(i.path("M "+k+" "+l+" L "+b+" "+c).attr("stroke","#777"));for(var p=.025,q=1;5>q;q++){d=g(k,a[o].x,.2*q-p),e=g(l,a[o].y,.2*q-p),f=g(k,a[o].x,.2*q+p),h=g(l,a[o].y,.2*q+p);var r=i.path("M "+d+" "+e+" L "+f+" "+h).attr({stroke:"#777"});r.rotate(90),n.push(r)}}},getScoreFromGroup:function(a){var b=[],c=this.get("config"),d=c.max,e=c.labels;if(a.scores)for(var f=0;f<a.scores.length;f++)b.push(a.scores[f]/d);else for(var f=0;f<e.length;f++){var g=a[e[f]]||a[e[f].toLowerCase().replace(" ","_")];b.push(g/d)}return b},isRunning:function(){return this._animationInstance>0},render:function(b){b||(b=this.get("config"));var c=(this.get("paper"),this.get("cx")),d=this.get("cy"),e=(this.get("r"),this.get("labels"),this.get("max"),this.get("scoreGroups")),f=this.get("options"),i=this.get("anim"),j=this,o=a.merge(m,f),p=this.getPoints();if(this.drawMeasureAndRuler(p),this.drawFrame(p),this.get("lines")){for(var q,r,s=[],t=[],u=0;u<e.length;u++){for(var v=this.getScoreFromGroup(e[u]),w=[],x=0;x<v.length;x++)q=g(c,p[x].x,v[x]),r=g(d,p[x].y,v[x]),w.push({x:q,y:r});t.push(w);var y=h(w);s.push(y)}var z=this.get("lines"),A=this.get("pts");k(s,function(a,b){var c=A[b],d=t[b];k(c,function(a){a.hide()}),j._animationInstance+=1,z[b].animate({path:s[b]},i.duration,i.easing,function(){k(c,function(a,b){a.attr({cx:d[b].x,cy:d[b].y}),a.show()}),j._animationInstance-=1})})}else{for(var B=[],u=0;u<e.length;u++){var v=this.getScoreFromGroup(e[u]),C=e[u].title,D=(l(n,e[u].draw_options),this.getGroupOption(e[u].draw_options));this.drawGroup(v,p,D),B.push({text:C,DEFAULT:D.lines.stroke})}this.drawLabels(p,o),this.drawLegend(B)}}};return b.extend?j=b.extend(p):(j=function(a){this.set(a),this.userConfig=a,this.initializer()},a.extend(j,b,p)),j},{requires:["base","kg/kcharts/2.0.0/raphael/index","dom","event","kg/kcharts/2.0.0/legend/index"]});