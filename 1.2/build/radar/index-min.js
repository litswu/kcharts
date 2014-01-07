/*! kcharts - v1.2 - 2014-01-07 9:11:37 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/radar/xxyy",function(){function l(){for(this.epsilon=1;1!==1+this.epsilon/2;)this.epsilon/=2;return this}return l.prototype.ONE_OVER_LOG_10=1/Math.log(10),l.prototype.extended=function(l,e,t,i,r,n){var s,a,x,y,o,c,h,v,f,d,p,g,u,_,m,b,w,k,L,C,S,A,M,T,E,I,P,Y,z,X,R,N,G;if(null==i&&(i=!1),null==r&&(r=[1,5,2,2.5,4,3]),null==n&&(n={simplicity:.2,coverage:.25,density:.5,legibility:.05}),T=function(l,e,t,i){return n.simplicity*l+n.coverage*e+n.density*t+n.legibility*i},a=0,s=0,x=0,y=-2,f=this.epsilon,N=l>e?[e,l]:[l,e],L=N[0],w=N[1],f>e-l)return[L,w,t,-2];for(_=r.length,p=-1;Number.POSITIVE_INFINITY>p;){for(A=X=0,G=_-1;G>=0?G>=X:X>=G;A=G>=0?++X:--X)if(S=r[A],E=this.simplicityMax(A,_,p),y>T(E,1,1,1))p=Number.POSITIVE_INFINITY;else for(g=2;Number.POSITIVE_INFINITY>g;){if(v=this.densityMax(g,t),y>T(E,1,v,1))g=Number.POSITIVE_INFINITY;else for(h=(w-L)/(g+1)/p/S,z=Math.ceil(Math.log(h)*this.ONE_OVER_LOG_10);Number.POSITIVE_INFINITY>z;)if(P=p*S*Math.pow(10,z),c=this.coverageMax(L,w,P*(g-1)),y>T(E,c,v,1))z=Number.POSITIVE_INFINITY;else{if(C=Math.floor(w/P)*p-(g-1)*p,k=Math.ceil(L/P)*p,C>k);else for(I=R=C;k>=C?k>=R:R>=k;I=k>=C?++R:--R)b=I*(P/p),m=b+P*(g-1),(!i||L>=b&&m>=w)&&(M=this.simplicity(A,_,p,b,m,P),o=this.coverage(L,w,b,m),d=this.density(g,t,L,w,b,m),u=this.legibility(b,m,P),Y=T(M,o,d,u),Y>y&&(y=Y,a=b,s=m,x=P));z+=1}g+=1}p+=1}return[a,s,x,y]},l.prototype.simplicity=function(l,e,t,i,r,n){var s;return s=(this.epsilon>i%n||this.epsilon>n-i%n)&&0>=i&&r>=0?1:0,1-l/(e-1)-t+s},l.prototype.simplicityMax=function(l,e,t){return 1-l/(e-1)-t+1},l.prototype.coverage=function(l,e,t,i){var r;return r=e-l,1-.5*(Math.pow(e-i,2)+Math.pow(l-t,2))/Math.pow(.1*r,2)},l.prototype.coverageMax=function(l,e,t){var i,r;return r=e-l,t>r?(i=(t-r)/2,1-.5*(Math.pow(i,2)+Math.pow(i,2))/Math.pow(.1*r,2)):1},l.prototype.density=function(l,e,t,i,r,n){var s,a;return s=(l-1)/(n-r),a=(e-1)/(Math.max(n,i)-Math.min(t,r)),2-Math.max(s/a,a/s)},l.prototype.densityMax=function(l,e){return l>=e?2-(l-1)/(e-1):1},l.prototype.legibility=function(){return 1},l}),KISSY.add("gallery/kcharts/1.2/radar/index",function(l,e,t,i,r,n){function s(l,e,t){var i=l+(e-l)*t;return Math.round(100*i)/100}function a(l,e,i){c||(c=new t);var r,n=c.extended(l,e,i),s=[],a=n[0],x=n[1],y=n[2],o=(x-a)/y;e>x&&(o+=1,x+=y),r=x;for(var h=1;o>=h;h++)s.push(x),x-=y;return s=s.reverse(),{rullers:s,rullern:o,max:r}}function x(l){for(var e,t=0,i=l.length;i>t;t++){var r=l[t],n=r.x,s=r.y;t?e.push("L",n,s):e=["M",n,s]}return e.push("Z"),e.join(",")}function y(l,e){var t;t=e?"show":"hide",h(l,function(l){l[t]()})}function o(t){var i=l.get(t.renderTo);t.anim=l.merge(p,t.anim),this.set("container",i),this.set(t),this._animationInstance=0,this.dochk(t);var r;if(!i)throw Error("容器不能为空");r=e(i,t.width,t.height),this.set("paper",r),this.set("config",t),this.render(t)}Math.PI;var c,h=l.each,v=(l.map,l.filter,l.merge),f={text:{fill:"#222","max-chars":10,key:!0}},d={points:{fill:"#333","stroke-width":"0",size:4.5},text:{fill:"#222","text-anchor":"start"},lines:{"stroke-width":"1"}},p={easing:"linear",duration:800};return l.extend(o,l.Base,{dochk:function(l){var e=l.labels.length,t=i.width(this.get("container")),r=i.height(this.get("container"));this.set("sides",e),void 0==l.cx&&(l.cx=t/2),void 0==l.cy&&(l.cy=r/2);var n=this.get("scoreGroups"),s=[];n[0]&&n[0].scores&&h(n,function(l){s=s.concat(l.scores)});var x=Math.max.apply(Math,s);Math.min.apply(Math,s),l.min=0,(!l.max||x>l.max)&&(l.max=x);var y=l.ruller&&l.ruller.n||5,o=a(l.min,l.max,y);if(o.rullers,y=o.rullern,this.rullerresult=o,this.rullern=y,l.max=o.max,void 0==l.r){var c=Math.min.apply(Math,[t,r]);l.r=c/2-30,0>l.r&&(l.r=c/2)}},drawPolygon:function(l){var e=this.get("paper"),t=x(l);return e.path(t)},drawFrame:function(l){var e=this.drawPolygon(l).attr({stroke:"#777"});this.set("framepath",e)},getOption:function(){var l=this.get("config"),e={text:{fill:"#222","max-chars":10,key:!0}};l.options;var t=v(e,l.options);return t},getGroupOption:function(e){var t={points:{fill:"#333","stroke-width":"0",size:4.5},text:{fill:"#222","text-anchor":"start"},lines:{"stroke-width":"1"}};return l.merge(t,e)},drawGroup:function(l,e,t){for(var i,r,n,a,x=this.get("config"),y=x.cx,o=x.cy,c=this.get("paper"),h=this.get("lines")||[],v=[],f=this.get("pts")||[],d=[],p=0;e.length>p;p++)i=s(y,e[p].x,l[p]),r=s(o,e[p].y,l[p]),d.push({x:i,y:r});n=this.drawPolygon(d),t&&t.lines&&n.attr(t.lines);for(var g=0;l.length>g;g++){i=s(y,e[g].x,l[g]),r=s(o,e[g].y,l[g]);var u=t.points.size;a=c.circle(i,r,u).attr(t.points),v.push(a)}f.push(v),h.push(n),this.get("lines")||(this.set("lines",h),this.set("pts",f))},getPoints:function(){for(var l,e,t=this.get("sides"),i=this.get("config"),r=-90,n=i.r,s=i.cx,a=i.cy,x=[],y=360/t,o=0;t>o;o++){var c=r/360*2*Math.PI;l=s+n*Math.cos(c),e=a+n*Math.sin(c),x.push({x:l,y:e}),r+=y}return x},getBBox:function(){var l=this.get("r"),e=2*l,t=2*l,i=this.get("cx"),r=this.get("cy");return{width:e,height:t,left:i-e/2,top:r-t/2}},drawLegend:function(l){var e=this.get("container"),t=this.getBBox(),i=this.get("legend")||{},r=v({interval:20,iconright:5,showicon:!0},i.globalConfig);delete i.globalConfig;var s=new n(v({container:e,paper:this.get("paper"),bbox:t,align:i.align||"bc",offset:i.offset||[0,20],globalConfig:r,config:l},i));s.on("click",function(l){if(!this.isRunning()){var e=l.index,t=(l.text,l.icon,l.el);1!=t.hide?(this.hideLine(e),t.hide=1,t.disable()):(this.showLine(e),t.hide=0,t.enable())}},this),this.set("legend",s)},hideLine:function(l){var e=this.get("lines"),t=this.get("pts");e[l]&&y([e[l]]),t[l]&&y(t[l])},showLine:function(l){var e=this.get("lines"),t=this.get("pts");e[l]&&y([e[l]],!0),t[l]&&y(t[l],!0)},drawLabels:function(e,t){for(var i,r,n=e,a=this,x=this.get("paper"),y=this.get("config"),o=y.cx,c=y.cy,h=(y.r,y.labels),v=0;n.length>v;v++){i=s(o,n[v].x,1.1),r=s(c,n[v].y,1.1);var f="middle";i>o&&(f="start"),o>i&&(f="end");var d=h[v];d.length>t.text["max-chars"]&&(d=d.replace(" ","\n"));var p=x.text(i,r,d).attr(l.merge(t.text,{"text-anchor":f,cursor:"pointer"}));(function(l,e,t){l.click(function(){a.fire("labelclick",{index:e,x:t.x,y:t.y})}).mouseover(function(){a.fire("labelmouseover",{index:e,x:t.x,y:t.y})}).mouseout(function(){a.fire("labelmouseout",{index:e,x:t.x,y:t.y})})})(p,v,n[v])}},drawMeasureAndRuler:function(e){var t,i,r,n,a,x,y=this.get("paper"),o=this.get("config"),c=o.cx,h=o.cy,v=[],f=Math.PI/180,d=e.length,p=360/d,g=!1;o.labelfn&&l.isFunction(o.labelfn)&&(g=o.labelfn);for(var u=this.rullerresult,_=u.rullers,m=this.rullern,b=1/m,w=0;d>w;w++){t=e[w].x,i=e[w].y,v.push(y.path("M "+c+" "+h+" L "+t+" "+i).attr("stroke","#777"));for(var k=180-w*p,L=Math.cos(k*f),C=Math.sin(k*f),S=1;m>S;S++){var A=s(c,e[w].x,S*b),M=s(h,e[w].y,S*b),T=3;r=A+L*T,n=M-C*T,a=A-L*T,x=M+C*T;var E,I;E=A-5*L,I=M+5*C,y.path(["M",a,x,"L",r,n,"Z"]).attr({stroke:"#666"});var P=w*p;if(P>=270?P+=90:P>=90&&(P+=180),g&&g(w)){var Y;o.ruller&&o.ruller.template&&(Y=o.ruller.template(w,S,_[S-1])),y.text(E,I,Y).attr({"text-anchor":"start"}).rotate(P)}}}},getScoreFromGroup:function(l){var e=[],t=this.get("config"),i=t.max-t.min,r=t.labels;if(l.scores)for(var n=0;l.scores.length>n;n++)e.push(l.scores[n]/i);else for(var n=0;r.length>n;n++){var s=l[r[n]]||l[r[n].toLowerCase().replace(" ","_")];e.push(s/i)}return e},isRunning:function(){return this._animationInstance>0},render:function(e){e||(e=this.get("config"));var t=(this.get("paper"),this.get("cx")),i=this.get("cy"),r=(this.get("r"),this.get("labels"),this.get("max"),this.get("scoreGroups")),n=this.get("options"),a=this.get("anim"),y=this,o=l.merge(f,n),c=this.getPoints();if(this.drawMeasureAndRuler(c),this.drawFrame(c),this.get("lines")){for(var p,g,u=[],_=[],m=0;r.length>m;m++){for(var b=this.getScoreFromGroup(r[m]),w=[],k=0;b.length>k;k++)p=s(t,c[k].x,b[k]),g=s(i,c[k].y,b[k]),w.push({x:p,y:g});_.push(w);var L=x(w);u.push(L)}var C=this.get("lines"),S=this.get("pts");h(u,function(l,e){var t=S[e],i=_[e];h(t,function(l){l.hide()}),y._animationInstance+=1,C[e].animate({path:u[e]},a.duration,a.easing,function(){h(t,function(l,e){l.attr({cx:i[e].x,cy:i[e].y}),l.show()}),y._animationInstance-=1})})}else{for(var A=[],m=0;r.length>m;m++){var b=this.getScoreFromGroup(r[m]),M=r[m].title;v(d,r[m].draw_options);var T=this.getGroupOption(r[m].draw_options);this.drawGroup(b,c,T),A.push({text:M,DEFAULT:T.lines.stroke})}this.drawLabels(c,o),this.drawLegend(A)}}}),o},{requires:["gallery/kcharts/1.2/raphael/index","./xxyy","dom","event","gallery/kcharts/1.2/legend/index"]});