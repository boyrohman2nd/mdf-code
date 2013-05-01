// JQuery easing 1.3
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return -c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return -c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return -c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(0.3*1.5)}if(a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined){s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2){return jQuery.easing.easeInBounce(x,t*2,0,c,d)*0.5+b}return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b}});

//hover time out
(function($){$.fn.hoverTimeout=function(timeout1,fn1,timeout2,fn2){return this.each(function(){var t=null,$this=$(this);$this.hover(function(){clearTimeout(t);t=setTimeout(function(){fn1.call($this)},timeout1)},function(){clearTimeout(t);t=setTimeout(function(){fn2.call($this)},timeout2)})})}})(jQuery);

/* Lazy Load - jQuery plugin for lazy loading images */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7($){$.Q.P=7(t){8 1={d:0,G:0,e:"o",B:"S",3:5};6(t){$.J(1,t)}8 p=c;6("o"==1.e){$(1.3).v("o",7(e){8 F=0;p.C(7(){6($.s(c,1)||$.x(c,1)){}f 6(!$.n(c,1)&&!$.m(c,1)){$(c).w("u")}f{6(F++>1.G){h E}}});8 H=$.N(p,7(9){h!9.k});p=$(H)})}c.C(7(){8 2=c;6(j==$(2).b("r")){$(2).b("r",$(2).b("i"))}6("o"!=1.e||j==$(2).b("i")||1.z==$(2).b("i")||($.s(2,1)||$.x(2,1)||$.n(2,1)||$.m(2,1))){6(1.z){$(2).b("i",1.z)}f{$(2).Z("i")}2.k=E}f{2.k=D}$(2).11("u",7(){6(!c.k){$("<Y />").v("U",7(){$(2).V().b("i",$(2).b("r"))[1.B](1.W);2.k=D}).b("i",$(2).b("r"))}});6("o"!=1.e){$(2).v(1.e,7(e){6(!2.k){$(2).w("u")}})}});$(1.3).w(1.e);h c};$.n=7(9,1){6(1.3===j||1.3===5){8 4=$(5).y()+$(5).I()}f{8 4=$(1.3).g().q+$(1.3).y()}h 4<=$(9).g().q-1.d};$.m=7(9,1){6(1.3===j||1.3===5){8 4=$(5).A()+$(5).M()}f{8 4=$(1.3).g().l+$(1.3).A()}h 4<=$(9).g().l-1.d};$.s=7(9,1){6(1.3===j||1.3===5){8 4=$(5).I()}f{8 4=$(1.3).g().q}h 4>=$(9).g().q+1.d+$(9).y()};$.x=7(9,1){6(1.3===j||1.3===5){8 4=$(5).M()}f{8 4=$(1.3).g().l}h 4>=$(9).g().l+1.d+$(9).A()};$.J($.10[\':\'],{"T-L-4":"$.n(a, {d : 0, 3: 5})","R-L-4":"!$.n(a, {d : 0, 3: 5})","O-K-4":"$.m(a, {d : 0, 3: 5})","l-K-4":"!$.m(a, {d : 0, 3: 5})"})})(X);',62,64,'|settings|self|container|fold|window|if|function|var|element||attr|this|threshold|event|else|offset|return|src|undefined|loaded|left|rightoffold|belowthefold|scroll|elements|top|original|abovethetop|options|appear|bind|trigger|leftofbegin|height|placeholder|width|effect|each|true|false|counter|failurelimit|temp|scrollTop|extend|of|the|scrollLeft|grep|right|lazyload|fn|above|show|below|load|hide|effectspeed|jQuery|img|removeAttr|expr|one'.split('|'),0,{}))
$(function() {
    $(&#39;img&#39;).lazyload({
        placeholder : &quot;http://2.bp.blogspot.com/-sJ-tZahntLI/T9coeqmdqMI/AAAAAAAADUQ/ztxIT1Fht4g/s1600/grey.png&quot;,
        effect      : &quot;fadeIn&quot;,
        threshold   : 600
    });
});

// Komentar 
var a="'1Aqv{ng'1G'2C-('02vjpgcf'02amooglv'02klvk'02(-'2C,amooglvq'02,amooglv/jgcfgp'0A,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'02'5@'02rmqkvkml'1Cpgncvktg'02'5F'2C,amooglv/vjpgcf'02mn'02'5@'02ocpekl'1C2'022'0202rz'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,amooglv/vjpgcf'02mn'02'5@'02nkqv/qv{ng/v{rg'1Clmlg'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,wqgp'02'5@'02dmlv/qv{ng'1Clmpocn'1@'02dmlv/ugkejv'1C`mnf'02'5F'2C,kvgo/amlvpmn'02'5@'02fkqrnc{'1Cklnklg'02'5F'2C,amooglvq'02,ctcvcp/koceg/amlvcklgp'02'5@'02`caiepmwlf/amnmp'1C'01d6d6d6'1@'02ukfvj'1C42rz'1@'02jgkejv'1C42rz'1@'02ocz/ukfvj'1C42rz'1@'02ocz/jgkejv'1C42rz'1@'02rcffkle'1C1rz'1@'02`mpfgp'1C3rz'02qmnkf'02'01aaa'1@'02ocpekl'1C30rz'022'022'022'1@'02/ug`ikv/`mz/qjcfmu'1C'022'023rz'023rz'02'01444'1@/omx/`mz/qjcfmu'1C'022'023rz'023rz'02'01444'1@`mz/qjcfmu'1C'022'023rz'023rz'02'01444'02'5F'2C,amooglvq'02,ctcvcp/koceg/amlvcklgp'02koe'02'5@'02ocz/ukfvj'1C322'07'1@'02jgkejv'1C322'07'1@'02`mpfgp'1C3rz'02qmnkf'02'01444'02'5F'2C,amooglvq'02,klnklg/vjpgcf'02,ctcvcp/koceg/amlvcklgp'02'5@'02`caiepmwlf/amnmp'1C'01d6d6d6'1@'02`mpfgp'1C3rz'02qmnkf'02'01aaa'1@'02ukfvj'1C42rz'1@'02jgkejv'1C42rz'1@'02ocpekl'1C30rz'022'022'022'1@'02/ug`ikv/`mz/qjcfmu'1C'022'023rz'023rz'02'01111'1@/omx/`mz/qjcfmu'1C'022'023rz'023rz'02'01111'1@`mz/qjcfmu'1C'022'023rz'023rz'02'01111'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,amooglv/jgcfgp'0A,amooglvq'02,amooglvq/amlvglv'02,amooglv/amlvglv'02'5@'02`caiepmwlf/amnmp'1C'0173;4FC'1@'02fkqrnc{'1C`nmai'1@'02ocpekl'1C2'1@'02rcffkle'1C4rz'02'5F'2C'02'02,amooglvq'02,amooglvq/amlvglv'02,amooglv/amlvglv'02'5@'02`caiepmwlf/amnmp'1C'01D:D:D:'1@'02amnmp'1C'01222'1@'02ocpekl/`mvvmo'1C0rz'1@'02rcffkle'1C4rz'0232rz'024rz'024rz'1@'02vgzv/cnkel'1Cngdv'1@'02mtgpdnmu'1Ccwvm'02'5F'2C,amooglvq'02,amooglv/`nmai'0A,amooglvq'02,amooglvq/amlvglv'02,amooglv/pgrnkgq'0A,amooglvq'02,amooglv/pgrn{`mz/qkleng'02'5@'02ocpekl/ngdv'1C42rz'02'5F'2C,amooglvq'02,amooglv/`nmai'0A,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'02'5@'02`caiepmwlf/amnmp'1C'012252@2'1@'02`mpfgp'1C3rz'02qmnkf'02'01AAA'1@'02rcffkle'1C30rz'1@'02rmqkvkml'1Cpgncvktg'1@'02/ug`ikv/`mz/qjcfmu'1C'022'023rz'023rz'02'01111'1@/omx/`mz/qjcfmu'1C'022'023rz'023rz'02'01111'1@`mz/qjcfmu'1C'022'023rz'023rz'02'01111'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,fcvgvkog'02c'1Cnkli'0A,amooglvq'02,amooglvq/amlvglv'02,fcvgvkog'02c'1Ctkqkvgf'02'5@'02dnmcv'1Cpkejv'02'03kormpvclv'1@'02amnmp'1C'01ddd'02'03kormpvclv'1@'02dmlv/qkxg'1C32rz'1@'02rcffkle'1C0rz'0232rz'02'5F'2C,amooglv/pgrnkgq'02,amooglv/`nmai'02'5@'02/omx/`mz/qjcfmu'1Clmlg'1@'02/ug`ikv/`mz/qjcfmu'1Clmlg'1@'02/omx/`mz/qjcfmu'1Clmlg'1@'02/ug`ikv/`mz/qjcfmu'1Clmlg'1@'02`mz/qjcfmu'1Clmlg'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,amooglv'02'5@'02ocpekl'1C4rz'022'022'1@'02rcffkle'1C2'1@'02ukfvj'1C322'07'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,klnklg/vjpgcf'02'5@'02rcffkle'1C4rz'022'022'1@'02ocpekl/`mvvmo'1C/34rz'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,amooglv/pgrnkgq'02'5@'02ocpekl/vmr'1C/1rz'1@'02rmqkvkml'1Cpgncvktg'1@'02vmr'1C/4rz'02'5F'2C,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'02'5@'02ukfvj'1Ccwvm'1@'02rcffkle'1C2'1@'02`caiepmwlf'1Cvpclqrcpglv'1@'02`mpfgp'1Clmlg'1@'02/omx/`mz/qjcfmu'1Clmlg'1@'02/ug`ikv/`mz/qjcfmu'1Clmlg'1@'02`mz/qjcfmu'1Clmlg'02'5F'2C,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'02,amooglv/`nmai'02'5@'02`mpfgp'1C3rz'02qmnkf'02'01AAA'1@'02`caiepmwlf/amnmp'1C'012252@2'1@'02rcffkle'1C30rz'1@'02/ug`ikv/`mz/qjcfmu'1C'022'023rz'023rz'02'01111'1@/omx/`mz/qjcfmu'1C'022'023rz'023rz'02'01111'1@`mz/qjcfmu'1C'022'023rz'023rz'02'01111'02'5F'2C,amooglvq'02,amlvklwg'02'5@'02`mpfgp/vmr'1C2'1@'02ukfvj'1C322'07'02'5F'2C,amooglvq'02,amlvklwg'02c'02'5@'02amnmp'1C'01111'1@'02fkqrnc{'1Cklnklg'02'5F'2C'01amooglv/gfkvmp'02'5@'02ukfvj'1C323'07'02'03kormpvclv'02'5F'2C,amooglv/dmpo'02'5@'02ukfvj'1C322'07'1@'02ocz/ukfvj'1C322'07'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,nmcfompg'02'5@'02awpqmp'1Crmklvgp'1@'02ocpekl/vmr'1C1go'1@'02ocz/jgkejv'1C1go'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,nmcfompg,nmcfgf'02'5@'02ocz/jgkejv'1C2'1@'02mrcakv{'1C2'1@'02mtgpdnmu'1Cjkffgl'02'5F'2C,amooglvq'02,vjpgcf/ajpmog,vjpgcf/amnncrqgf'0A,amooglv'02,amlvklwg'02'5@'02`caiepmwlf'1Cvpclqrcpglv'1@'02rcffkle'1C4rz'022'022'02'5F'2C,amooglvq'02,amooglv'02,amooglv/cavkmlq'02c'02'5@'02`caiepmwlf/amnmp'1C'01fff'1@'02`mpfgp'1C3rz'02qmnkf'02'01666'1@'02/omx/`mz/qjcfmu'1C2'023rz'023rz'02`ncai'1@'02/ug`ikv/`mz/qjcfmu'1C2'023rz'023rz'02`ncai'1@'02`mz/qjcfmu'1C2'023rz'023rz'02`ncai'1@'02amnmp'1C'01222'1@'02ngdv'1C2'1@'02ocpekl/pkejv'1C6rz'1@'02rcffkle'1C3rz'024rz'1@'02rmqkvkml'1Cpgncvktg'1@'02vmr'1C6rz'02'5F'2C,amooglvq'02,amooglv'02,amooglv/cavkmlq'02c'1Cjmtgp'0A,amooglvq'02,amlvklwg'02c'1Cjmtgp'02'5@'02/omx/`mz/qjcfmu'1C2'023rz'023rz'02`ncai'02klqgv'1@'02/ug`ikv/`mz/qjcfmu'1C2'023rz'023rz'02`ncai'02klqgv'1@'02`mz/qjcfmu'1C2'023rz'023rz'02`ncai'02klqgv'02'5F'2C,amooglvq'02,amooglv'02,amooglv/cavkmlq'02c'1Ccavktg'02'5@'02rmqkvkml'1Cpgncvktg'1@'02vmr'1C3rz'02'5F'2C,amooglv/vjpgcf'02,amooglv/amlvglv'02c'0A,amooglvq'02,wqgp'02c'0A,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,wqgp'02c'02'5@'02amnmp'1C{gnnmu'02'03kormpvclv'02'5F'2C,fgngvgf/amooglv'02'5@'02dmlv/qv{ng'1Ckvcnka'1@'02amnmp'1Cfcpipgf'02'5F'2C'01vjpgcfgf/amooglv/dmpo'02'5@'02`caiepmwlf/amnmp'1C'01111111'1@'02`mpfgp'1C3rz'02qmnkf'02'01666666'1@'02/omx/`mz/qjcfmu'1C2'023rz'023rz'02`ncai'1@'02/ug`ikv/`mz/qjcfmu'1C2'023rz'023rz'02`ncai'1@'02`mz/qjcfmu'1C2'023rz'023rz'02`ncai'1@'02rcffkle'1C:rz'02'5F'2C,amooglvq'02,amooglvq/amlvglv'02,kaml,`nme/cwvjmp'02'5@'02/omx/`mpfgp/`mvvmo/amnmpq'1Clmlg'1@'02/omx/`mpfgp/ngdv/amnmpq'1Clmlg'1@'02/omx/`mpfgp/pkejv/amnmpq'1Clmlg'1@'02/omx/`mpfgp/vmr/amnmpq'1Clmlg'1@'02`mpfgp/amnmp'1Cvpclqrcpglv'02'01DDGC22'02vpclqrcpglv'02vpclqrcpglv'1@'02`mpfgp/koceg'1Clmlg'1@'02`mpfgp/qv{ng'1Cqmnkf'1@'02`mpfgp/ukfvj'1C36rz'1@'02`mvvmo'1C2'1@'02fkqrnc{'1C`nmai'1@'02jgkejv'1C2'1@'02rmqkvkml'1Cc`qmnwvg'1@'02pkejv'1C2'1@'02ukfvj'1C2'1@'02vmr'1C31rz'02'5F'2CB/ug`ikv/ig{dpcogq'02kaml`nmecwvjmpajclegamnmp'02'5@'2C2'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02emnf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C02'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02epggl'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C62'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02`nwg'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C42'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02pgf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C:2'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02`ncai'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C322'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02emnf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C'5F'2CB/omx/ig{dpcogq'02kaml`nmecwvjmpajclegamnmp'02'5@'2C2'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02emnf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C02'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02epggl'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C62'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02`nwg'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C42'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02pgf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C:2'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02`ncai'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C322'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02emnf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C'5F'02'2CB/ig{dpcogq'02kaml`nmecwvjmpajclegamnmp'02'5@'2C2'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02emnf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C02'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02epggl'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C62'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02`nwg'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C42'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02pgf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C:2'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02`ncai'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C322'07'02'5@'02`mpfgp/amnmp'1Cvpclqrcpglv'02emnf'02vpclqrcpglv'02vpclqrcpglv'02'5F'2C'5F'2C,amooglvq'02,amooglvq/amlvglv'02,kaml,`nme/cwvjmp'02'5@clkocvkml'1C7q'02kldklkvg'02kaml`nmecwvjmpajclegamnmp'02nklgcp'1@'02'2C-('02Ucivw'0232'02fgvki'02(-'2C/ug`ikv/clkocvkml'1C7q'02kldklkvg'02kaml`nmecwvjmpajclegamnmp'02nklgcp'5F'2C,amooglvq'02,vjpgcf/vmeeng'02'5@'02awpqmp'1Crmklvgp'1@'02fkqrnc{'1Clmlg'02'5F'2C,amooglv/dmmvgp'02'5@'02amnmp'1Cujkvg'1@'02dmlv/ugkejv'1C`mnf'1@'02rcffkle'1C2'022'0232rz'1@'02vgzv/qjcfmu'1C3rz'023rz'02'01222222'02'5F'2C'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C545rz'0;'02'5@'2C'01amooglv/gfkvmp'02'5@'02`caiepmwlf'1Clmlg'02'5F'2C'5F'02'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'02472rz'0;'02'5@'2C,amooglvq'02,amooglvq/amlvglv'02,amooglv/pgrnkgq'02'5@'02ocpekl/ngdv'1C2'02'5F'2C,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:30'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:33'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:32'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:;'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0::'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:5'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:4'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:7'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:6'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:1'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:0'0;'02'5@'02ocpekl'1C2'02'5F'2C,amooglv'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglv'1Clvj/ajknf'0:3'0;'02'5@'02'5F'2C'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'026;2rz'0;'02'5@'2C,amooglvq'02,amooglvq/amlvglv'02,fcvgvkog'02'5@'02fkqrnc{'1Clmlg'02'5F'2C'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'0265;rz'0;'02'5@'2C,amooglvq'02,amooglvq/amlvglv'02,fcvgvkog'02'5@'02fkqrnc{'1Clmlg'02'5F'2C,amooglvq'02,amooglv/`nmai'0A,amooglvq'02,amooglvq/amlvglv'02,amooglv/pgrnkgq'0A,amooglvq'02,amooglv/pgrn{`mz/qkleng'02'5@'02ocpekl/ngdv'1C2'02'5F'2C,amooglvq'02,ctcvcp/koceg/amlvcklgp'02'5@'02fkqrnc{'1Clmlg'02'5F'2C,amooglvq'02,ctcvcp/koceg/amlvcklgp'02koe'02'5@'02fkqrnc{'1Clmlg'02'5F'2C,amooglvq'02,klnklg/vjpgcf'02,ctcvcp/koceg/amlvcklgp'02'5@'02fkqrnc{'1Clmlg'02'5F'2C,amooglvq/lwo`gp'02'5@'02fkqrnc{'1Clmlg'02'5F'2C,amooglvq'02,amooglv/vjpgcf,klnklg/vjpgcf'02,amooglvq/lwo`gp'02'5@'02fkqrnc{'1Clmlg'02'5F'2C'5F'02'02'02'2C'1A-qv{ng'1G";b="";c="";var d;d=a.length;for(i=0;i<d;i++){b+=String.fromCharCode(a.charCodeAt(i)^2)}c=unescape(b);document.write(c);
// daftar isi
var a="'1Aqv{ng'1G'2C-('02aqq'02fcdvcp'02kqk'02jmogrecg'02(-'2C'01ofd/fcdvcp/kqk'02'5@'02`caiepmwlf/amnmp'1C'01d6d6d6'1@'02rcffkle'1C32rz'1@'02ocpekl'1C02rz'022'022'022'02'5F'2C'01ofd/fcdvcp/kqk'02j0'02'5@'02amnmp'1C'01ddd'1@'02dmlv/dcokn{'1CVu'02Agl'02OV'02Amlfglqgf'1@'02dmlv/qkxg'1C02rz'1@'02ocpekl'1C/02rz'022'0232rz'022'1@'02rcffkle'1C5rz'021rz'1@'02vgzv/cnkel'1Caglvgp'1@'02dmlv/ugkejv'1C`mnf'1@'02/omx/vgzv/qjcfmu'1C0rz'022'022'02'01111'1@'02/ug`ikv/vgzv/qjcfmu'1C0rz'022'022'02'01111'1@'02vgzv/qjcfmu'1C0rz'022'022'02'01111'1@'02rmqkvkml'1Cpgncvktg'1@'02/ug`ikv/`mpfgp/`mvvmo/pkejv/pcfkwq'1C32rz'1@'02/ug`ikv/`mpfgp/`mvvmo/ngdv/pcfkwq'1C32rz'1@'02/omx/`mpfgp/pcfkwq/`mvvmopkejv'1C32rz'1@'02/omx/`mpfgp/pcfkwq/`mvvmongdv'1C32rz'1@'02`mpfgp/`mvvmo/pkejv/pcfkwq'1C32rz'1@'02`mpfgp/`mvvmo/ngdv/pcfkwq'1C32rz'1@'02/ug`ikv/`mz/qjcfmu'1Cklqgv'022'022'0207rz'02pe`c'0:2'0A2'0A2'0A2,1'0;'0A2rz'023rz'027rz'02'01444'1@'02/omx/`mz/qjcfmu'1Cklqgv'022'022'0207rz'02pe`c'0:2'0A2'0A2'0A2,1'0;'0A2rz'023rz'027rz'02'01444'1@'02`mz/qjcfmu'1Cklqgv'022'022'0207rz'02pe`c'0:2'0A2'0A2'0A2,1'0;'0A2rz'023rz'027rz'02'01444'1@'02`caiepmwlf/amnmp'1C'01CF1222'02'5F'2C'01ofd/fcdvcp/kqk'02j0'1C`gdmpg'02'5@'02amlvglv'1C'04'011;'1@'02'04'011;'1@'1@'02rmqkvkml'1Cc`qmnwvg'1@'02vmr'1C2'1@'02ngdv'1C/32rz'1@'02ukfvj'1C2'1@'02jgkejv'1C2'1@'02`mpfgp/qv{ng'1Cqmnkf'1@'02`mpfgp/ukfvj'1C2'022'0232rz'0232rz'1@'02`mpfgp/amnmp'1Cvpclqrcpglv'02vpclqrcpglv'02'01111'02vpclqrcpglv'02'5F'2C'01ofd/fcdvcp/kqk'02j0'1Ccdvgp'02'5@'02amlvglv'1C'04'011;'1@'02'04'011;'1@'1@'02rmqkvkml'1Cc`qmnwvg'1@'02vmr'1C2'1@'02pkejv'1C/32rz'1@'02ukfvj'1C2'1@'02jgkejv'1C2'1@'02`mpfgp/qv{ng'1Cqmnkf'1@'02`mpfgp/ukfvj'1C32rz'022'022'0232rz'1@'02`mpfgp/amnmp'1Cvpclqrcpglv'02vpclqrcpglv'02vpclqrcpglv'02'01111'02'5F'2C'01vma/mwvgp'02'5@'02amnmp'1C`ncai'1@'02ocpekl'1C2'02cwvm'1@'02mtgpdnmu'1Cjkffgl'1@'02rcffkle'1C2'1@'02vgzv/cnkel'1Cngdv'02'5F'2C'01nmcfkleqapkrv'02'5@'02`caiepmwlf'1Cvpclqrcpglv'02wpn'0:'04'011;'1@'02jvvr'1C--1,`r,`nmeqrmv,amo-/vx[ropKn{GC-WWwnQV5e7UK-CCCCCCCC@sq-EA7UGV`eZAa-q3422-nmcfkle/fkr,ekd'04'011;'1@'02'0;'02lm/pgrgcv'0272'07'0267'07'1@'02dmlv/ugkejv'1C`mnf'1@'02dmlv/qkxg'1C02rz'1@'02jgkejv'1C137rz'1@'02rcffkle'1C12rz'022'1@'02vgzv/cnkel'1Caglvgp'1@'02vgzv/klfglv'1C/;;;;;rz'02'5F'2C,kvgormqvq'02('02'5@'02/omx/`mz/qkxkle'1C`mpfgp/`mz'1@'02/ug`ikv/`mz/qkxkle'1C`mpfgp/`mz'1@'02`mz/qkxkle'1C`mpfgp/`mz'02'5F'2C,kvgormqvq'02'5@'02`caiepmwlf/amnmp'1Cvpclqrcpglv'1@'02`mpfgp'1C2'02qmnkf'02'01444'1@'02dnmcv'1Cpkejv'1@'02ocpekl'1C2'1@'02mtgpdnmu'1Cjkffgl'1@'02ukfvj'1C322'07'1@'02rcffkle'1C0rz'02'5F'2C,kvgormqvq'1Clvj/ajknf'0:;'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cngdv'02'5F-('02Ngtgn'02;'02(-'2C,kvgormqvq'1Clvj/ajknf'0::'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cpkejv'02'5F-('02Ngtgn'02:'02(-'2C,kvgormqvq'1Clvj/ajknf'0:5'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cpkejv'02'5F-('02Ngtgn'025'02(-'2C,kvgormqvq'1Clvj/ajknf'0:4'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cngdv'02'5F-('02Ngtgn'024'02(-'2C,kvgormqvq'1Clvj/ajknf'0:7'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cpkejv'02'5F-('02Ngtgn'027'02(-'2C,kvgormqvq'1Clvj/ajknf'0:6'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cngdv'02'5F-('02Ngtgn'026'02(-'2C,kvgormqvq'1Clvj/ajknf'0:1'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cpkejv'02'5F-('02Ngtgn'021'02(-'2C,kvgormqvq'1Clvj/ajknf'0:0'0;'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cngdv'02'5F-('02Ngtgn'020'02(-'2C,kvgormqvq'1Clvj/ajknf'0:3'0;'02'5@'02ukfvj'1C322'07'02'5F-('02Ngtgn'023'02(-'2C,kvgormqvq'02j4'02'5@'02dmlv/qkxg'1C37rz'1@'02dmlv/ugkejv'1Clmpocn'1@'02jgkejv'1C67rz'1@'02ocpekl'1C2'022'02:rz'0255rz'1@'02mtgpdnmu'1Cjkffgl'1@'02rcffkle'1C0rz'021rz'02'03kormpvclv'1@'02vgzv/vpclqdmpo'1Clmlg'02'5F'2C,kvgormqvq'02j4'02c'1Cjmtgp'02'5@'02amnmp'1C'01CF1222'1@'02vgzv/fgampcvkml'1Clmlg'02'5F'2C,kvgormqvq'02koe'02'5@'02`caiepmwlf'1Cvpclqrcpglv'02wpn'0:'04'011;'1@'02jvvr'1C--1,`r,`nmeqrmv,amo-/X2u6O:2iLmG-Vx6]PpNA6dK-CCCCCCCCAH[-0oS0{i7jAfW-q3422-nmcfkle,ekd'04'011;'1@'02'0;'02lm/pgrgcv'0272'07'0267'07'1@'02dnmcv'1Cngdv'1@'02jgkejv'1C52rz'1@'02ocpekl'1C/73rz'026rz'02/02rz'020rz'1@'02rcffkle'1C1rz'1@'02ukfvj'1C52rz'1@'02`mpfgp'1C3rz'02qmnkf'02'01;;;'1@'02/omx/`mz/qjcfmu'1C2'023rz'021rz'02pe`c'0:7:'0A7:'0A7:'0A2,24'0;'0A2'023rz'020rz'02pe`c'0:76'0A76'0A76'0A2,03'0;'1@'02/ug`ikv/`mz/qjcfmu'1C2'023rz'021rz'02pe`c'0:7:'0A7:'0A7:'0A2,24'0;'0A2'023rz'020rz'02pe`c'0:76'0A76'0A76'0A2,03'0;'1@'02`mz/qjcfmu'1C2'023rz'021rz'02pe`c'0:7:'0A7:'0A7:'0A2,24'0;'0A2'023rz'020rz'02pe`c'0:76'0A76'0A76'0A2,03'0;'1@'02/omx/`mpfgp/pcfkwq'1C0rz'1@'02/ug`ikv/`mpfgp/pcfkwq'1C0rz'1@'02`mpfgp/pcfkwq'1C0rz'02'5F'2C,kvgormqvq'02,qwoocp{'02'5@'02fkqrnc{'1Clmlg'02'5F'2C,kvgormqvq'02,kvgoklqkfg'02'5@'5F'2C,kvgodmmv'02'5@'02ocpekl'1C2'022'022'0255rz'02'5F'2C,kvgormqvq'02,kvgodmmv'02'5@'02`mpfgp/vmr'1C3rz'02qmnkf'02'0122604:'1@'02rcffkle'1C1rz'1@'02angcp'1C`mvj'1@'02amnmp'1C'01111'1@'02mtgpdnmu'1Cjkffgl'1@'02dmlv/qkxg'1C33rz'02'5F'2C,kvgormqvq'02,kvgodmmv'02c,kvgopompg'02'5@'02fkqrnc{'1Clmlg'1@'02amnmp'1C'01111'1@'02dnmcv'1Cpkejv'1@'02dmlv/ugkejv'1C`mnf'1@'02vgzv/fgampcvkml'1Clmlg'02'5F'2C,kvgormqvq'02,kvgodmmv'02c,kvgopompg'1Cjmtgp'02'5@'02vgzv/fgampcvkml'1Cwlfgpnklg'02'5F'2C'01kvgorcegp'02'5@'02angcp'1C`mvj'1@'02rcffkle'1C32rz'022'02'5F'2C'01rceklcvkml'02'5@'02fkqrnc{'1C`nmai'1@'02dmlv/qkxg'1C32rz'1@'02dmlv/ugkejv'1C`mnf'1@'02ocpekl'1C7rz'022'1@'02vgzv/cnkel'1Caglvgp'1@'02rcffkle'1C2'02'5F'2C'01vmvcnrmqvq'02'5@'02amnmp'1C'01111'1@'02dmlv/ugkejv'1C`mnf'1@'02dmlv/qkxg'1C32rz'1@'02ocpekl'1C7rz'022'022'1@'02vgzv/cnkel'1Caglvgp'1@'02rcffkle'1C2'02'5F'2C'01rceklcvkml'02qrcl'0A'01rceklcvkml'02c'02'5@'02`caiepmwlf/amnmp'1C'0122;5@F'1@'02amnmp'1C'01ddd'1@'02fkqrnc{'1Cklnklg'1@'02ocpekl'1C2'023rz'1@'02rcffkle'1C1rz'027rz'1@'02vgzv/klfglv'1C2'1@'02vgzv/fgampcvkml'1Clmlg'02'5F'2C'01rceklcvkml'02c'1Cjmtgp'02'5@'02`caiepmwlf/amnmp'1C'01111'02'5F'2C'01rceklcvkml'02qrcl,cavwcn'02'5@'02`caiepmwlf/amnmp'1C`ncai'02'5F'2C'01rceklcvkml'02qrcl,jkffgl'02'5@'02fkqrnc{'1Clmlg'02'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'027:2rz'0;'02'5@'2C,kvgormqvq'02'5@'02ukfvj'1C'02322'07'1@'02dnmcv'1C'02ngdv'02'5F'2C,kvgormqvq'1Clvj/ajknf'0:;'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'02;'02(-'2C,kvgormqvq'1Clvj/ajknf'0::'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'02:'02(-'2C,kvgormqvq'1Clvj/ajknf'0:5'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'025'02(-'2C,kvgormqvq'1Clvj/ajknf'0:4'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'024'02(-'2C,kvgormqvq'1Clvj/ajknf'0:7'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'027'02(-'2C,kvgormqvq'1Clvj/ajknf'0:6'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'026'02(-'2C,kvgormqvq'1Clvj/ajknf'0:1'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'021'02(-'2C,kvgormqvq'1Clvj/ajknf'0:0'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'020'02(-'2C,kvgormqvq'1Clvj/ajknf'0:3'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'023'02(-'2C'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'0265;rz'0;'02'5@'2C,kvgormqvq'1Clvj/ajknf'0:;'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'02;'02(-'2C,kvgormqvq'1Clvj/ajknf'0::'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'02:'02(-'2C,kvgormqvq'1Clvj/ajknf'0:5'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'025'02(-'2C,kvgormqvq'1Clvj/ajknf'0:4'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'024'02(-'2C,kvgormqvq'1Clvj/ajknf'0:7'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'027'02(-'2C,kvgormqvq'1Clvj/ajknf'0:6'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'026'02(-'2C,kvgormqvq'1Clvj/ajknf'0:1'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'021'02(-'2C,kvgormqvq'1Clvj/ajknf'0:0'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'020'02(-'2C,kvgormqvq'1Clvj/ajknf'0:3'0;'02'5@'02ukfvj'1C'02322'07'02'5F-('02Ngtgn'023'02(-'2C'5F'02'02'2C'1A-qv{ng'1G"; b=""; c="";var d;d=a.length;for (i=0;i<d;i++){ b+=String.fromCharCode(a.charCodeAt(i)^2) }c=unescape(b);document.write(c);
// button
var a="'1Aqv{ng'1G'2C-('02Iworwncl'02`wvvml'02(-'2C,`wvvml'02'5@'02amnmp'1C'01DDD'1@'02awpqmp'1Crmklvgp'1@'02ocpekl'1C7rz'022'1@'02dmlv/qkxg'1C37rz'1@'02dmlv/ugkejv'1C`mnf'1@'02rcffkle'1C4rz'0212rz'1@'02vgzv/fgampcvkml'1Clmlg'1@'02vgzv/qjcfmu'1C2'023rz'022'02'01@2@2@2'1@'02/ug`ikv/`mpfgp/pcfkwq'1C7rz'1@'02/omx/`mpfgp/pcfkwq'1C7rz'1@'02`mpfgp/pcfkwq'1C7rz'1@'02`mpfgp'1C3rz'02qmnkf'02'01:a:c:a'1@'02fkqrnc{'1Cklnklg/`nmai'1@'02/ug`ikv/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01a;a;a;'1@'02/omx/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01a;a;a;'1@'02`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01a;a;a;'1@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A'01;a;a;a'0;'0Aamnmp/qvmr'0:3'0A'015:545:'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A'01;a;a;a'027'07'0A'015:545:'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'04'011;'1@'02'01;a;a;a'04'011;'1@'02'0AglfAmnmpqvp'1F'04'011;'1@'02'015:545:'04'011;'1@'02'0;'1@'02`caiepmwlf/amnmp'1C'01;a;a;a'02'5F'2C,`wvvml'1Cjmtgp'02'5@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A'015:545:'0;'0Aamnmp/qvmr'0:3'0A'01;a;a;a'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A'015:545:'027'07'0A'01;a;a;a'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'04'011;'1@'02'015:545:'04'011;'1@'02'0AglfAmnmpqvp'1F'04'011;'1@'02'01;a;a;a'04'011;'1@'02'0;'1@'02`caiepmwlf/amnmp'1C'015:545:'02'5F'2C,`wvvml'1Ccavktg'02'5@'02rmqkvkml'1Cpgncvktg'1@'02vmr'1C3rz'02'5F'2C'02'02'2C,`wvvml/imltgpvgp'02'5@'02`mpfgp'1C0rz'02qmnkf'02'01111'1@'02amnmp'1C'01111'1@'02awpqmp'1Crmklvgp'1@'02dmlv/qkxg'1C37rz'1@'02dmlv/ugkejv'1C`mnf'1@'02ocpekl/vmr'1C32rz'1@'02rcffkle'1C7rz'0232rz'1@'02vgzv/fgampcvkml'1Clmlg'1@'02vgzv/qjcfmu'1C3rz'023rz'022'02'01dddddd'1@'02/ug`ikv/`mpfgp/pcfkwq'1C7rz'1@'02/omx/`mpfgp/pcfkwq'1C7rz'1@'02`mpfgp/pcfkwq'1C7rz'1@'02'02fkqrnc{'1Cklnklg/`nmai'1@'02/ug`ikv/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02/omx/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A'01gfgfgf'0;'0Aamnmp/qvmr'0:3'0A'01fdfdfd'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A'01gfgfgf'027'07'0A'01fdfdfd'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'04'011;'1@'02'01gfgfgf'04'011;'1@'02'0AglfAmnmpqvp'1F'04'011;'1@'02'01fdfdfd'04'011;'1@'02'0;'1@'02`caiepmwlf/amnmp'1C'01gfgfgf'02'5F'2C,`wvvml/imltgpvgp'1Cjmtgp'02'5@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A{gnnmu'0;'0Aamnmp/qvmr'0:3'0Aemnf'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A{gnnmu'027'07'0Aemnf'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'04'011;'1@'02{gnnmu'04'011;'1@'02'0AglfAmnmpqvp'1F'04'011;'1@'02emnf'04'011;'1@'02'0;'1@'02`caiepmwlf/amnmp'1Cemnf'02'5F'2C,`wvvml/imltgpvgp'1Ccavktg'02'5@'02rmqkvkml'1Cpgncvktg'1@'02vmr'1C3rz'02'5F'2C'02'02'2C,`wvvml/mmv'02'5@'02`mpfgp'1C0rz'02qmnkf'02'01111'1@'02amnmp'1C'01111'1@'02awpqmp'1Crmklvgp'1@'02dmlv/qkxg'1C37rz'1@'02dmlv/ugkejv'1C`mnf'1@'02ocpekl'1C32rz'022'022'027rz'1@'02rcffkle'1C7rz'0232rz'1@'02vgzv/fgampcvkml'1Clmlg'1@'02vgzv/qjcfmu'1C3rz'023rz'022'02'01dddddd'1@'02/ug`ikv/`mpfgp/pcfkwq'1C7rz'1@'02/omx/`mpfgp/pcfkwq'1C7rz'1@'02`mpfgp/pcfkwq'1C7rz'1@'02fkqrnc{'1Cklnklg/`nmai'1@'02/ug`ikv/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02/omx/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A{gnnmu'0;'0Aamnmp/qvmr'0:3'0Aemnf'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A{gnnmu'027'07'0Aemnf'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'04'011;'1@'02{gnnmu'04'011;'1@'02'0AglfAmnmpqvp'1F'04'011;'1@'02emnf'04'011;'1@'02'0;'1@'02`caiepmwlf/amnmp'1Cemnf'02'5F'2C,`wvvml/mmv'1Cjmtgp'02'5@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A'01fdfdfd'0;'0Aamnmp/qvmr'0:3'0A'01gfgfgf'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A'01fdfdfd'027'07'0A'01gfgfgf'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'04'011;'1@'02'01fdfdfd'04'011;'1@'02'0AglfAmnmpqvp'1F'04'011;'1@'02'01gfgfgf'04'011;'1@'02'0;'1@'02`caiepmwlf/amnmp'1C'01fdfdfd'02'5F'2C,`wvvml/mmv'1Ccavktg'02'5@'02rmqkvkml'1Cpgncvktg'1@'02vmr'1C3rz'02'5F'2C'1A-qv{ng'1G"; b=""; c="";var d;d=a.length;for (i=0;i<d;i++){ b+=String.fromCharCode(a.charCodeAt(i)^2) }c=unescape(b);document.write(c);
// Label 
var a="'1Aqv{ng'1G'2C-(aqq'02Nc`gn(-'2C,nc`gn/qkxg'02'5@'02ocpekl'1C2'020rz'020rz'022'1@'02rcffkle'1C1rz'1@'02vgzv/vpclqdmpo'1Cwrrgpacqg'1@'02`caiepmwlf/amnmp'1C'01aaa'1@'02mrcakv{'1C3,2'1@'02/omx/`mz/qjcfmu'1Cklqgv'022'022'025rz'02'01f4f4f4'1@'02/ug`ikv/`mz/qjcfmu'1Cklqgv'022'022'025rz'02'01f4f4f4'1@'02`mz/qjcfmu'1Cklqgv'022'022'025rz'02'01f4f4f4'1@'02'02vgzv/qjcfmu'1C2'023rz'022'02'01ddd'1@'02dnmcv'1Cngdv'1@'02vgzv/fgampcvkml'1Clmlg'1@'02amnmp'1C'01222'02'5F'2C,nc`gn/qkxg'1Cjmtgp'02'5@'02vgzv/fgampcvkml'1Clmlg'1@'02`caiepmwlf/amnmp'1C'01fff'02'5F'2C,nc`gn/qkxg'02c'0A,nc`gn/qkxg'02c'1Ctkqkvgf'02'5@'02vgzv/vpclqdmpo'1Cwrrgpacqg'1@'02dnmcv'1Cngdv'1@'02amnmp'1C'01222'1@'02vgzv/fgampcvkml'1Clmlg'02'5F'2C,nc`gn/qkxg'02c'1Cjmtgp'02'5@'02vgzv/fgampcvkml'1Clmlg'02'5F'2C,anmwf/nc`gn/ukfegv/amlvglv'02'5@'02vgzv/cnkel'1Chwqvkd{'1@'02fkqrnc{'1Cklnklg/`nmai'02'5F'2C,Nc`gn'02nk'02'5@'02ukfvj'1C72'07'1@'02dnmcv'1Cngdv'1@'02nkqv/qv{ng'1Clmlg'1@'02rcffkle'1C7rz'022'1@'02ocpekl'1C2'1@'02amnmp'1C'01222'1@'02/ug`ikv/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02/omx/`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02`mz/qjcfmu'1Cklqgv'022'023rz'022'022'02'01dddddd'1@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A'01gfgfgf'0;'0Aamnmp/qvmr'0:3'0A'01fdfdfd'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A'01gfgfgf'027'07'0A'01fdfdfd'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'05'02'01gfgfgf'05'02'0AglfAmnmpqvp'1F'05'02'01fdfdfd'05'02'0;'1@'02`caiepmwlf/amnmp'1C'01gfgfgf'1@'02`mpfgp'1C0rz'02qmnkf'02'01DDD'02'5F'2C,Nc`gn'02nk'02c'0A,Nc`gn'02nk'02c'02'5@'02amnmp'1C'01444'1@'02vgzv/fgampcvkml'1Clmlg'1@'02rcffkle'1C6rz'025rz'1@'02ocpekl'1C7rz'02'5F'2C,Nc`gn'02nk'1Cjmtgp'0A,Nc`gn'02nk'1Cjmtgp'02'5@'02`caiepmwlf'1C/ug`ikv/epcfkglv'0:'02nklgcp'0Angdv'02vmr'0Angdv'02`mvvmo'0Aamnmp/qvmr'0:2,27'0A{gnnmu'0;'0Aamnmp/qvmr'0:3'0Aemnf'0;'02'0;'1@'02`caiepmwlf'1C/omx/nklgcp/epcfkglv'0:'02aglvgp'02vmr'0A{gnnmu'027'07'0Aemnf'02322'07'02'0;'1@'02dknvgp'1Crpmekf'1CFZKocegVpclqdmpo,Okapmqmdv,epcfkglv'0:qvcpvAmnmpqvp'1F'05'02{gnnmu'05'02'0AglfAmnmpqvp'1F'05'02emnf'05'02'0;'1@'02`caiepmwlf/amnmp'1Cemnf'1@'02vpclqkvkml/fwpcvkml'1C2q'1@'02'5F'2C,Nc`gn'02nk'02'5@'02/ug`ikv/vpclqkvkml'1Ccnn'02,6q'02gcqg/kl/mwv'1@'02/omx/vpclqkvkml'1Ccnn'02,6q'02gcqg/kl/mwv'1@'02/m/vpclqkvkml'1Ccnn'02,6q'02gcqg/kl/mwv'1@'02/oq/vpclqkvkml'1Ccnn'02,6q'02gcqg/kl/mwv'1@'02vpclqkvkml'1Ccnn'02,6q'02gcqg/kl/mwv'02'5F'2C,Nc`gn'02nk'02qrcl'02'5@'02amnmp'1C'01222'02'5F'2C,nkqv/nc`gn/ukfegv/amlvglv'02wn'02'5@'02nkqv/qv{ng/v{rg'1Clmlg'1@'02ocpekl'1C7rz'022'022'1@'02rcffkle/ngdv'1C2'02'03kormpvclv'1@'02fkqrnc{'1Cklnklg/`nmai'02'03kormpvclv'02'5F'2C,nkqv/nc`gn/ukfegv/amlvglv'02nk'02'5@'02fkqrnc{'1Cklnklg/`nmai'02'5F'2C,Nc`gn'02nk'02qrcl'02'5@'02okl/ukfvj'1C07rz'1@dmlv/qkxg'1C32rz'1@vgzv/cnkel'1Caglvgp'1@`caiepmwlf/amnmp'1Cepggl'1@amnmp'1Cujkvg'1@`mpfgp/pcfkwq'1C0rz'1@'02rcffkle'1C0rz'021rz'021rz'1@'02fkqrnc{'1C`nmai'1@'02dnmcv'1Cpkejv'1@'02ocpekl'1C3rz'027rz'022'022'02'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'02472rz'0;'02'5@'2C,Nc`gn'02nk'02'5@'02ukfvj'1C322'07'1@'02dnmcv'1Cngdv'02'5F'2C'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'026;2rz'0;'02'5@'2C,Nc`gn'02nk'02'5@'02ukfvj'1C6:,5'07'1@'02dnmcv'1Cngdv'1@'02ocpekl'1C2'022'022'026rz'5F'2C'5F'2CBogfkc'02mln{'02qapggl'02clf'02'0:ocz/ukfvj'1C'0265;rz'0;'02'5@'2C,Nc`gn'02nk'02'5@'02ukfvj'1C322'07'1@'02dnmcv'1Cngdv'1@'02ocpekl'1C2'02cwvm'02'5F'2C'5F'02'02'02'2C'1A-qv{ng'1G"; b=""; c="";var d;d=a.length;for (i=0;i<d;i++){ b+=String.fromCharCode(a.charCodeAt(i)^2) }c=unescape(b);document.write(c);