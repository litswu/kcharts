/*!build time : 2015-03-31 1:06:08 PM*/
KISSY.add("kg/kcharts/6.0.0/tools/htmlpaper/index",function(a){var b=a.all,c=(window,function(a,c){var d=this;if(a)return d.$tgt=b(a),d._init(c)});return a.augment(c,{_init:function(b){var c=this;c._cfg=a.mix({clsName:"ks-charts-container",prependTo:!0,width:void 0,height:void 0,left:0,top:0,css:{}},b),c.$paper=c._createPaper()},_createPaper:function(){var a=this,c=a.$tgt,d=a._cfg,e=b("<div></div>").addClass(d.clsName).css({width:d.width||c.width(),height:d.height||c.height(),position:"absolute",left:d.left||0,top:d.top||0}).css(d.css);return d.prependTo?e.prependTo(c):e.appendTo(c),e},text:function(a,c,d,e,f){var g,h,i=this,j=0,k=0,a=a-i._cfg.left,c=c-i._cfg.top,l=b("<div></div>").html(d).css({display:"block",position:"absolute"});switch(l.appendTo(i.$paper),g=l.outerWidth(),h=l.outerHeight(),e){case"right":j=-g;break;case"center":j=-g/2}switch(f){case"middle":k=-h/2;break;case"bottom":k=-h}return l.css({left:a,top:c,marginLeft:j,marginTop:k}),l},rect:function(a,c,d,e){var f=this,a=a-f._cfg.left,c=c-f._cfg.top,g=b("<div></div>").css({left:a,top:c,width:d,height:e,"font-size":"1px",display:"block",position:"absolute"});return g.appendTo(f.$paper)},lineX:function(a,c,d){var e=this,a=a-e._cfg.left,c=c-e._cfg.top,f=b("<div></div>").css({left:a,top:c,display:"block",position:"absolute",width:d,height:0,borderTop:"1px solid"});return f.appendTo(e.$paper)},lineY:function(a,c,d){var e=this,a=a-e._cfg.left,c=c-e._cfg.top,f=b("<div></div>").css({left:a,top:c,display:"block",position:"absolute",width:0,height:d,borderLeft:"1px solid"});return f.appendTo(e.$paper)},clear:function(){var a=this;return a.$paper.html(""),a.$paper}}),c});