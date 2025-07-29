import{c as Ce,a as pe,b as Qn,r as ie,j as L,g as Hr,R as Kn,O as Wr}from"./index-BNcpYhhE.js";const Zn="/picto/assets/logo-BZuaoNYZ.png";var R={},Ie={},Me={},Ne={},ot,Zt;function qr(){if(Zt)return ot;Zt=1;var e="Expected a function",t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,i=parseInt,c=typeof Ce=="object"&&Ce&&Ce.Object===Object&&Ce,l=typeof self=="object"&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),d=Object.prototype,p=d.toString,u=Math.max,m=Math.min,S=function(){return f.Date.now()};function g(P,_,I){var M,A,x,h,C,O,z=0,W=!1,q=!1,ne=!0;if(typeof P!="function")throw new TypeError(e);_=T(_)||0,w(I)&&(W=!!I.leading,q="maxWait"in I,x=q?u(T(I.maxWait)||0,_):x,ne="trailing"in I?!!I.trailing:ne);function ge(F){var U=M,ae=A;return M=A=void 0,z=F,h=P.apply(ae,U),h}function Te(F){return z=F,C=setTimeout(Q,_),W?ge(F):h}function ce(F){var U=F-O,ae=F-z,ye=_-U;return q?m(ye,x-ae):ye}function re(F){var U=F-O,ae=F-z;return O===void 0||U>=_||U<0||q&&ae>=x}function Q(){var F=S();if(re(F))return ve(F);C=setTimeout(Q,ce(F))}function ve(F){return C=void 0,ne&&M?ge(F):(M=A=void 0,h)}function at(){C!==void 0&&clearTimeout(C),z=0,M=O=A=C=void 0}function Ae(){return C===void 0?h:ve(S())}function K(){var F=S(),U=re(F);if(M=arguments,A=this,O=F,U){if(C===void 0)return Te(O);if(q)return C=setTimeout(Q,_),ge(O)}return C===void 0&&(C=setTimeout(Q,_)),h}return K.cancel=at,K.flush=Ae,K}function y(P,_,I){var M=!0,A=!0;if(typeof P!="function")throw new TypeError(e);return w(I)&&(M="leading"in I?!!I.leading:M,A="trailing"in I?!!I.trailing:A),g(P,_,{leading:M,maxWait:_,trailing:A})}function w(P){var _=typeof P;return!!P&&(_=="object"||_=="function")}function b(P){return!!P&&typeof P=="object"}function E(P){return typeof P=="symbol"||b(P)&&p.call(P)==n}function T(P){if(typeof P=="number")return P;if(E(P))return t;if(w(P)){var _=typeof P.valueOf=="function"?P.valueOf():P;P=w(_)?_+"":_}if(typeof P!="string")return P===0?P:+P;P=P.replace(r,"");var I=o.test(P);return I||s.test(P)?i(P.slice(2),I?2:8):a.test(P)?t:+P}return ot=y,ot}var be={},Jt;function jt(){if(Jt)return be;Jt=1,Object.defineProperty(be,"__esModule",{value:!0}),be.addPassiveEventListener=function(n,r,a){var o=a.name;o||(o=r,console.warn("Listener must be a named function.")),e.has(r)||e.set(r,new Set);var s=e.get(r);if(!s.has(o)){var i=function(){var c=!1;try{var l=Object.defineProperty({},"passive",{get:function(){c=!0}});window.addEventListener("test",null,l)}catch{}return c}();n.addEventListener(r,a,i?{passive:!0}:!1),s.add(o)}},be.removePassiveEventListener=function(n,r,a){n.removeEventListener(r,a),e.get(r).delete(a.name||r)};var e=new Map;return be}var en;function Rt(){if(en)return Ne;en=1,Object.defineProperty(Ne,"__esModule",{value:!0});var e=qr(),t=r(e),n=jt();function r(s){return s&&s.__esModule?s:{default:s}}var a=function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(i,c)},o={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(i,c){if(i){var l=a(function(f){o.scrollHandler(i)},c);return o.scrollSpyContainers.push(i),(0,n.addPassiveEventListener)(i,"scroll",l),function(){(0,n.removePassiveEventListener)(i,"scroll",l),o.scrollSpyContainers.splice(o.scrollSpyContainers.indexOf(i),1)}}return function(){}},isMounted:function(i){return o.scrollSpyContainers.indexOf(i)!==-1},currentPositionX:function(i){if(i===document){var c=window.scrollY!==void 0,l=(document.compatMode||"")==="CSS1Compat";return c?window.scrollX:l?document.documentElement.scrollLeft:document.body.scrollLeft}else return i.scrollLeft},currentPositionY:function(i){if(i===document){var c=window.scrollX!==void 0,l=(document.compatMode||"")==="CSS1Compat";return c?window.scrollY:l?document.documentElement.scrollTop:document.body.scrollTop}else return i.scrollTop},scrollHandler:function(i){var c=o.scrollSpyContainers[o.scrollSpyContainers.indexOf(i)].spyCallbacks||[];c.forEach(function(l){return l(o.currentPositionX(i),o.currentPositionY(i))})},addStateHandler:function(i){o.spySetState.push(i)},addSpyHandler:function(i,c){var l=o.scrollSpyContainers[o.scrollSpyContainers.indexOf(c)];l.spyCallbacks||(l.spyCallbacks=[]),l.spyCallbacks.push(i)},updateStates:function(){o.spySetState.forEach(function(i){return i()})},unmount:function(i,c){o.scrollSpyContainers.forEach(function(l){return l.spyCallbacks&&l.spyCallbacks.length&&l.spyCallbacks.indexOf(c)>-1&&l.spyCallbacks.splice(l.spyCallbacks.indexOf(c),1)}),o.spySetState&&o.spySetState.length&&o.spySetState.indexOf(i)>-1&&o.spySetState.splice(o.spySetState.indexOf(i),1),document.removeEventListener("scroll",o.scrollHandler)},update:function(){return o.scrollSpyContainers.forEach(function(i){return o.scrollHandler(i)})}};return Ne.default=o,Ne}var Le={},je={},tn;function Ke(){if(tn)return je;tn=1,Object.defineProperty(je,"__esModule",{value:!0});var e=function(i,c){var l=i.indexOf("#")===0?i.substring(1):i,f=l?"#"+l:"",d=window&&window.location,p=f?d.pathname+d.search+f:d.pathname+d.search;c?history.pushState(history.state,"",p):history.replaceState(history.state,"",p)},t=function(){return window.location.hash.replace(/^#/,"")},n=function(i){return function(c){return i.contains?i!=c&&i.contains(c):!!(i.compareDocumentPosition(c)&16)}},r=function(i){return getComputedStyle(i).position!=="static"},a=function(i,c){for(var l=i.offsetTop,f=i.offsetParent;f&&!c(f);)l+=f.offsetTop,f=f.offsetParent;return{offsetTop:l,offsetParent:f}},o=function(i,c,l){if(l)return i===document?c.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(i).position!=="static"?c.offsetLeft:c.offsetLeft-i.offsetLeft;if(i===document)return c.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(i)){if(c.offsetParent!==i){var f=function(g){return g===i||g===document},d=a(c,f),p=d.offsetTop,u=d.offsetParent;if(u!==i)throw new Error("Seems containerElement is not an ancestor of the Element");return p}return c.offsetTop}if(c.offsetParent===i.offsetParent)return c.offsetTop-i.offsetTop;var m=function(g){return g===document};return a(c,m).offsetTop-a(i,m).offsetTop};return je.default={updateHash:e,getHash:t,filterElementInContainer:n,scrollOffset:o},je}var Re={},Fe={},nn;function Ur(){return nn||(nn=1,Object.defineProperty(Fe,"__esModule",{value:!0}),Fe.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),Fe}var De={},rn;function Br(){if(rn)return De;rn=1,Object.defineProperty(De,"__esModule",{value:!0});var e=jt(),t=["mousedown","wheel","touchmove","keydown"];return De.default={subscribe:function(r){return typeof document<"u"&&t.forEach(function(a){return(0,e.addPassiveEventListener)(document,a,r)})}},De}var ze={},an;function Ft(){if(an)return ze;an=1,Object.defineProperty(ze,"__esModule",{value:!0});var e={registered:{},scrollEvent:{register:function(n,r){e.registered[n]=r},remove:function(n){e.registered[n]=null}}};return ze.default=e,ze}var on;function Jn(){if(on)return Re;on=1,Object.defineProperty(Re,"__esModule",{value:!0});var e=Object.assign||function(A){for(var x=1;x<arguments.length;x++){var h=arguments[x];for(var C in h)Object.prototype.hasOwnProperty.call(h,C)&&(A[C]=h[C])}return A},t=Ke();c(t);var n=Ur(),r=c(n),a=Br(),o=c(a),s=Ft(),i=c(s);function c(A){return A&&A.__esModule?A:{default:A}}var l=function(x){return r.default[x.smooth]||r.default.defaultEasing},f=function(x){return typeof x=="function"?x:function(){return x}},d=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},p=function(){return d()||function(A,x,h){window.setTimeout(A,h||1e3/60,new Date().getTime())}}(),u=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},m=function(x){var h=x.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollLeft;var C=window.pageXOffset!==void 0,O=(document.compatMode||"")==="CSS1Compat";return C?window.pageXOffset:O?document.documentElement.scrollLeft:document.body.scrollLeft},S=function(x){var h=x.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollTop;var C=window.pageXOffset!==void 0,O=(document.compatMode||"")==="CSS1Compat";return C?window.pageYOffset:O?document.documentElement.scrollTop:document.body.scrollTop},g=function(x){var h=x.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollWidth-h.offsetWidth;var C=document.body,O=document.documentElement;return Math.max(C.scrollWidth,C.offsetWidth,O.clientWidth,O.scrollWidth,O.offsetWidth)},y=function(x){var h=x.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollHeight-h.offsetHeight;var C=document.body,O=document.documentElement;return Math.max(C.scrollHeight,C.offsetHeight,O.clientHeight,O.scrollHeight,O.offsetHeight)},w=function A(x,h,C){var O=h.data;if(!h.ignoreCancelEvents&&O.cancel){i.default.registered.end&&i.default.registered.end(O.to,O.target,O.currentPositionY);return}if(O.delta=Math.round(O.targetPosition-O.startPosition),O.start===null&&(O.start=C),O.progress=C-O.start,O.percent=O.progress>=O.duration?1:x(O.progress/O.duration),O.currentPosition=O.startPosition+Math.ceil(O.delta*O.percent),O.containerElement&&O.containerElement!==document&&O.containerElement!==document.body?h.horizontal?O.containerElement.scrollLeft=O.currentPosition:O.containerElement.scrollTop=O.currentPosition:h.horizontal?window.scrollTo(O.currentPosition,0):window.scrollTo(0,O.currentPosition),O.percent<1){var z=A.bind(null,x,h);p.call(window,z);return}i.default.registered.end&&i.default.registered.end(O.to,O.target,O.currentPosition)},b=function(x){x.data.containerElement=x?x.containerId?document.getElementById(x.containerId):x.container&&x.container.nodeType?x.container:document:null},E=function(x,h,C,O){h.data=h.data||u(),window.clearTimeout(h.data.delayTimeout);var z=function(){h.data.cancel=!0};if(o.default.subscribe(z),b(h),h.data.start=null,h.data.cancel=!1,h.data.startPosition=h.horizontal?m(h):S(h),h.data.targetPosition=h.absolute?x:x+h.data.startPosition,h.data.startPosition===h.data.targetPosition){i.default.registered.end&&i.default.registered.end(h.data.to,h.data.target,h.data.currentPosition);return}h.data.delta=Math.round(h.data.targetPosition-h.data.startPosition),h.data.duration=f(h.duration)(h.data.delta),h.data.duration=isNaN(parseFloat(h.data.duration))?1e3:parseFloat(h.data.duration),h.data.to=C,h.data.target=O;var W=l(h),q=w.bind(null,W,h);if(h&&h.delay>0){h.data.delayTimeout=window.setTimeout(function(){i.default.registered.begin&&i.default.registered.begin(h.data.to,h.data.target),p.call(window,q)},h.delay);return}i.default.registered.begin&&i.default.registered.begin(h.data.to,h.data.target),p.call(window,q)},T=function(x){return x=e({},x),x.data=x.data||u(),x.absolute=!0,x},P=function(x){E(0,T(x))},_=function(x,h){E(x,T(h))},I=function(x){x=T(x),b(x),E(x.horizontal?g(x):y(x),x)},M=function(x,h){h=T(h),b(h);var C=h.horizontal?m(h):S(h);E(x+C,h)};return Re.default={animateTopScroll:E,getAnimationType:l,scrollToTop:P,scrollToBottom:I,scrollTo:_,scrollMore:M},Re}var sn;function Ze(){if(sn)return Le;sn=1,Object.defineProperty(Le,"__esModule",{value:!0});var e=Object.assign||function(f){for(var d=1;d<arguments.length;d++){var p=arguments[d];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(f[u]=p[u])}return f},t=Ke(),n=i(t),r=Jn(),a=i(r),o=Ft(),s=i(o);function i(f){return f&&f.__esModule?f:{default:f}}var c={},l=void 0;return Le.default={unmount:function(){c={}},register:function(d,p){c[d]=p},unregister:function(d){delete c[d]},get:function(d){return c[d]||document.getElementById(d)||document.getElementsByName(d)[0]||document.getElementsByClassName(d)[0]},setActiveLink:function(d){return l=d},getActiveLink:function(){return l},scrollTo:function(d,p){var u=this.get(d);if(!u){console.warn("target Element not found");return}p=e({},p,{absolute:!1});var m=p.containerId,S=p.container,g=void 0;m?g=document.getElementById(m):S&&S.nodeType?g=S:g=document,p.absolute=!0;var y=p.horizontal,w=n.default.scrollOffset(g,u,y)+(p.offset||0);if(!p.smooth){s.default.registered.begin&&s.default.registered.begin(d,u),g===document?p.horizontal?window.scrollTo(w,0):window.scrollTo(0,w):g.scrollTop=w,s.default.registered.end&&s.default.registered.end(d,u);return}a.default.animateTopScroll(w,p,d,u)}},Le}var it={exports:{}},st,ln;function Yr(){if(ln)return st;ln=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return st=e,st}var lt,cn;function Xr(){if(cn)return lt;cn=1;var e=Yr();function t(){}function n(){}return n.resetWarningCache=t,lt=function(){function r(s,i,c,l,f,d){if(d!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},lt}var fn;function Ee(){return fn||(fn=1,it.exports=Xr()()),it.exports}var He={},un;function er(){if(un)return He;un=1,Object.defineProperty(He,"__esModule",{value:!0}),jt();var e=Ke(),t=n(e);function n(a){return a&&a.__esModule?a:{default:a}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(o){this.scroller=o,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(o,s){this.containers[o]=s},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var o=this,s=this.getHash();s?window.setTimeout(function(){o.scrollTo(s,!0),o.initialized=!0},10):this.initialized=!0},scrollTo:function(o,s){var i=this.scroller,c=i.get(o);if(c&&(s||o!==i.getActiveLink())){var l=this.containers[o]||document;i.scrollTo(o,{container:l})}},getHash:function(){return t.default.getHash()},changeHash:function(o,s){this.isInitialized()&&t.default.getHash()!==o&&t.default.updateHash(o,s)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return He.default=r,He}var dn;function Dt(){if(dn)return Me;dn=1,Object.defineProperty(Me,"__esModule",{value:!0});var e=Object.assign||function(y){for(var w=1;w<arguments.length;w++){var b=arguments[w];for(var E in b)Object.prototype.hasOwnProperty.call(b,E)&&(y[E]=b[E])}return y},t=function(){function y(w,b){for(var E=0;E<b.length;E++){var T=b[E];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(w,T.key,T)}}return function(w,b,E){return b&&y(w.prototype,b),E&&y(w,E),w}}(),n=pe(),r=p(n),a=Rt(),o=p(a),s=Ze(),i=p(s),c=Ee(),l=p(c),f=er(),d=p(f);function p(y){return y&&y.__esModule?y:{default:y}}function u(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")}function m(y,w){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:y}function S(y,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);y.prototype=Object.create(w&&w.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(y,w):y.__proto__=w)}var g={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};return Me.default=function(y,w){var b=w||i.default,E=function(P){S(_,P);function _(I){u(this,_);var M=m(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,I));return T.call(M),M.state={active:!1},M.beforeUnmountCallbacks=[],M}return t(_,[{key:"getScrollSpyContainer",value:function(){var M=this.props.containerId,A=this.props.container;return M&&!A?document.getElementById(M):A&&A.nodeType?A:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var M=this.getScrollSpyContainer();if(!o.default.isMounted(M)){var A=o.default.mount(M,this.props.spyThrottle);this.beforeUnmountCallbacks.push(A)}this.props.hashSpy&&(d.default.isMounted()||d.default.mount(b),d.default.mapContainer(this.props.to,M)),o.default.addSpyHandler(this.spyHandler,M),this.setState({container:M})}}},{key:"componentWillUnmount",value:function(){o.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(M){return M()})}},{key:"render",value:function(){var M="";this.state&&this.state.active?M=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():M=this.props.className;var A={};this.state&&this.state.active?A=e({},this.props.style,this.props.activeStyle):A=e({},this.props.style);var x=e({},this.props);for(var h in g)x.hasOwnProperty(h)&&delete x[h];return x.className=M,x.style=A,x.onClick=this.handleClick,r.default.createElement(y,x)}}]),_}(r.default.PureComponent),T=function(){var _=this;this.scrollTo=function(I,M){b.scrollTo(I,e({},_.state,M))},this.handleClick=function(I){_.props.onClick&&_.props.onClick(I),I.stopPropagation&&I.stopPropagation(),I.preventDefault&&I.preventDefault(),_.scrollTo(_.props.to,_.props)},this.spyHandler=function(I,M){var A=_.getScrollSpyContainer();if(!(d.default.isMounted()&&!d.default.isInitialized())){var x=_.props.horizontal,h=_.props.to,C=null,O=void 0,z=void 0;if(x){var W=0,q=0,ne=0;if(A.getBoundingClientRect){var ge=A.getBoundingClientRect();ne=ge.left}if(!C||_.props.isDynamic){if(C=b.get(h),!C)return;var Te=C.getBoundingClientRect();W=Te.left-ne+I,q=W+Te.width}var ce=I-_.props.offset;O=ce>=Math.floor(W)&&ce<Math.floor(q),z=ce<Math.floor(W)||ce>=Math.floor(q)}else{var re=0,Q=0,ve=0;if(A.getBoundingClientRect){var at=A.getBoundingClientRect();ve=at.top}if(!C||_.props.isDynamic){if(C=b.get(h),!C)return;var Ae=C.getBoundingClientRect();re=Ae.top-ve+M,Q=re+Ae.height}var K=M-_.props.offset;O=K>=Math.floor(re)&&K<Math.floor(Q),z=K<Math.floor(re)||K>=Math.floor(Q)}var F=b.getActiveLink();if(z){if(h===F&&b.setActiveLink(void 0),_.props.hashSpy&&d.default.getHash()===h){var U=_.props.saveHashHistory,ae=U===void 0?!1:U;d.default.changeHash("",ae)}_.props.spy&&_.state.active&&(_.setState({active:!1}),_.props.onSetInactive&&_.props.onSetInactive(h,C))}if(O&&(F!==h||_.state.active===!1)){b.setActiveLink(h);var ye=_.props.saveHashHistory,zr=ye===void 0?!1:ye;_.props.hashSpy&&d.default.changeHash(h,zr),_.props.spy&&(_.setState({active:!0}),_.props.onSetActive&&_.props.onSetActive(h,C))}}}};return E.propTypes=g,E.defaultProps={offset:0},E},Me}var mn;function $r(){if(mn)return Ie;mn=1,Object.defineProperty(Ie,"__esModule",{value:!0});var e=pe(),t=a(e),n=Dt(),r=a(n);function a(l){return l&&l.__esModule?l:{default:l}}function o(l,f){if(!(l instanceof f))throw new TypeError("Cannot call a class as a function")}function s(l,f){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:l}function i(l,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);l.prototype=Object.create(f&&f.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(l,f):l.__proto__=f)}var c=function(l){i(f,l);function f(){var d,p,u,m;o(this,f);for(var S=arguments.length,g=Array(S),y=0;y<S;y++)g[y]=arguments[y];return m=(p=(u=s(this,(d=f.__proto__||Object.getPrototypeOf(f)).call.apply(d,[this].concat(g))),u),u.render=function(){return t.default.createElement("a",u.props,u.props.children)},p),s(u,m)}return f}(t.default.Component);return Ie.default=(0,r.default)(c),Ie}var We={},pn;function Gr(){if(pn)return We;pn=1,Object.defineProperty(We,"__esModule",{value:!0});var e=function(){function f(d,p){for(var u=0;u<p.length;u++){var m=p[u];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(d,m.key,m)}}return function(d,p,u){return p&&f(d.prototype,p),u&&f(d,u),d}}(),t=pe(),n=o(t),r=Dt(),a=o(r);function o(f){return f&&f.__esModule?f:{default:f}}function s(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function i(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function c(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var l=function(f){c(d,f);function d(){return s(this,d),i(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return e(d,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),d}(n.default.Component);return We.default=(0,a.default)(l),We}var qe={},Ue={},hn;function tr(){if(hn)return Ue;hn=1,Object.defineProperty(Ue,"__esModule",{value:!0});var e=Object.assign||function(u){for(var m=1;m<arguments.length;m++){var S=arguments[m];for(var g in S)Object.prototype.hasOwnProperty.call(S,g)&&(u[g]=S[g])}return u},t=function(){function u(m,S){for(var g=0;g<S.length;g++){var y=S[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,S,g){return S&&u(m.prototype,S),g&&u(m,g),m}}(),n=pe(),r=l(n),a=Qn();l(a);var o=Ze(),s=l(o),i=Ee(),c=l(i);function l(u){return u&&u.__esModule?u:{default:u}}function f(u,m){if(!(u instanceof m))throw new TypeError("Cannot call a class as a function")}function d(u,m){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:u}function p(u,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);u.prototype=Object.create(m&&m.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(u,m):u.__proto__=m)}return Ue.default=function(u){var m=function(S){p(g,S);function g(y){f(this,g);var w=d(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,y));return w.childBindings={domNode:null},w}return t(g,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(w){this.props.name!==w.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;s.default.unregister(this.props.name)}},{key:"registerElems",value:function(w){s.default.register(w,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(u,e({},this.props,{parentBindings:this.childBindings}))}}]),g}(r.default.Component);return m.propTypes={name:c.default.string,id:c.default.string},m},Ue}var gn;function Vr(){if(gn)return qe;gn=1,Object.defineProperty(qe,"__esModule",{value:!0});var e=Object.assign||function(u){for(var m=1;m<arguments.length;m++){var S=arguments[m];for(var g in S)Object.prototype.hasOwnProperty.call(S,g)&&(u[g]=S[g])}return u},t=function(){function u(m,S){for(var g=0;g<S.length;g++){var y=S[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,S,g){return S&&u(m.prototype,S),g&&u(m,g),m}}(),n=pe(),r=c(n),a=tr(),o=c(a),s=Ee(),i=c(s);function c(u){return u&&u.__esModule?u:{default:u}}function l(u,m){if(!(u instanceof m))throw new TypeError("Cannot call a class as a function")}function f(u,m){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:u}function d(u,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);u.prototype=Object.create(m&&m.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(u,m):u.__proto__=m)}var p=function(u){d(m,u);function m(){return l(this,m),f(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return t(m,[{key:"render",value:function(){var g=this,y=e({},this.props);return delete y.name,y.parentBindings&&delete y.parentBindings,r.default.createElement("div",e({},y,{ref:function(b){g.props.parentBindings.domNode=b}}),this.props.children)}}]),m}(r.default.Component);return p.propTypes={name:i.default.string,id:i.default.string},qe.default=(0,o.default)(p),qe}var ct,vn;function Qr(){if(vn)return ct;vn=1;var e=Object.assign||function(p){for(var u=1;u<arguments.length;u++){var m=arguments[u];for(var S in m)Object.prototype.hasOwnProperty.call(m,S)&&(p[S]=m[S])}return p},t=function(){function p(u,m){for(var S=0;S<m.length;S++){var g=m[S];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(u,g.key,g)}}return function(u,m,S){return m&&p(u.prototype,m),S&&p(u,S),u}}();function n(p,u){if(!(p instanceof u))throw new TypeError("Cannot call a class as a function")}function r(p,u){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:p}function a(p,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);p.prototype=Object.create(u&&u.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(p,u):p.__proto__=u)}var o=pe();Qn(),Ke();var s=Rt(),i=Ze(),c=Ee(),l=er(),f={to:c.string.isRequired,containerId:c.string,container:c.object,activeClass:c.string,spy:c.bool,smooth:c.oneOfType([c.bool,c.string]),offset:c.number,delay:c.number,isDynamic:c.bool,onClick:c.func,duration:c.oneOfType([c.number,c.func]),absolute:c.bool,onSetActive:c.func,onSetInactive:c.func,ignoreCancelEvents:c.bool,hashSpy:c.bool,spyThrottle:c.number},d={Scroll:function(u,m){console.warn("Helpers.Scroll is deprecated since v1.7.0");var S=m||i,g=function(w){a(b,w);function b(E){n(this,b);var T=r(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,E));return y.call(T),T.state={active:!1},T}return t(b,[{key:"getScrollSpyContainer",value:function(){var T=this.props.containerId,P=this.props.container;return T?document.getElementById(T):P&&P.nodeType?P:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var T=this.getScrollSpyContainer();s.isMounted(T)||s.mount(T,this.props.spyThrottle),this.props.hashSpy&&(l.isMounted()||l.mount(S),l.mapContainer(this.props.to,T)),this.props.spy&&s.addStateHandler(this.stateHandler),s.addSpyHandler(this.spyHandler,T),this.setState({container:T})}}},{key:"componentWillUnmount",value:function(){s.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var T="";this.state&&this.state.active?T=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():T=this.props.className;var P=e({},this.props);for(var _ in f)P.hasOwnProperty(_)&&delete P[_];return P.className=T,P.onClick=this.handleClick,o.createElement(u,P)}}]),b}(o.Component),y=function(){var b=this;this.scrollTo=function(E,T){S.scrollTo(E,e({},b.state,T))},this.handleClick=function(E){b.props.onClick&&b.props.onClick(E),E.stopPropagation&&E.stopPropagation(),E.preventDefault&&E.preventDefault(),b.scrollTo(b.props.to,b.props)},this.stateHandler=function(){S.getActiveLink()!==b.props.to&&(b.state!==null&&b.state.active&&b.props.onSetInactive&&b.props.onSetInactive(),b.setState({active:!1}))},this.spyHandler=function(E){var T=b.getScrollSpyContainer();if(!(l.isMounted()&&!l.isInitialized())){var P=b.props.to,_=null,I=0,M=0,A=0;if(T.getBoundingClientRect){var x=T.getBoundingClientRect();A=x.top}if(!_||b.props.isDynamic){if(_=S.get(P),!_)return;var h=_.getBoundingClientRect();I=h.top-A+E,M=I+h.height}var C=E-b.props.offset,O=C>=Math.floor(I)&&C<Math.floor(M),z=C<Math.floor(I)||C>=Math.floor(M),W=S.getActiveLink();if(z)return P===W&&S.setActiveLink(void 0),b.props.hashSpy&&l.getHash()===P&&l.changeHash(),b.props.spy&&b.state.active&&(b.setState({active:!1}),b.props.onSetInactive&&b.props.onSetInactive()),s.updateStates();if(O&&W!==P)return S.setActiveLink(P),b.props.hashSpy&&l.changeHash(P),b.props.spy&&(b.setState({active:!0}),b.props.onSetActive&&b.props.onSetActive(P)),s.updateStates()}}};return g.propTypes=f,g.defaultProps={offset:0},g},Element:function(u){console.warn("Helpers.Element is deprecated since v1.7.0");var m=function(S){a(g,S);function g(y){n(this,g);var w=r(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,y));return w.childBindings={domNode:null},w}return t(g,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(w){this.props.name!==w.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;i.unregister(this.props.name)}},{key:"registerElems",value:function(w){i.register(w,this.childBindings.domNode)}},{key:"render",value:function(){return o.createElement(u,e({},this.props,{parentBindings:this.childBindings}))}}]),g}(o.Component);return m.propTypes={name:c.string,id:c.string},m}};return ct=d,ct}var yn;function Kr(){if(yn)return R;yn=1,Object.defineProperty(R,"__esModule",{value:!0}),R.Helpers=R.ScrollElement=R.ScrollLink=R.animateScroll=R.scrollSpy=R.Events=R.scroller=R.Element=R.Button=R.Link=void 0;var e=$r(),t=E(e),n=Gr(),r=E(n),a=Vr(),o=E(a),s=Ze(),i=E(s),c=Ft(),l=E(c),f=Rt(),d=E(f),p=Jn(),u=E(p),m=Dt(),S=E(m),g=tr(),y=E(g),w=Qr(),b=E(w);function E(T){return T&&T.__esModule?T:{default:T}}return R.Link=t.default,R.Button=r.default,R.Element=o.default,R.scroller=i.default,R.Events=l.default,R.scrollSpy=d.default,R.animateScroll=u.default,R.ScrollLink=S.default,R.ScrollElement=y.default,R.Helpers=b.default,R.default={Link:t.default,Button:r.default,Element:o.default,scroller:i.default,Events:l.default,scrollSpy:d.default,animateScroll:u.default,ScrollLink:S.default,ScrollElement:y.default,Helpers:b.default},R}var zt=Kr();const Zr=[{id:1,name:"Home",url:"introduction"},{id:2,name:"About",url:"profile"},{id:3,name:"Process",url:"work-process"},{id:4,name:"Portfolio",url:"portfolio"},{id:5,name:"Blog",url:"blog"},{id:6,name:"Services",url:"services"}],bn=Zr.map(e=>L.jsx("li",{onMouseDown:t=>t.preventDefault(),children:L.jsx(zt.Link,{to:e.url.toLowerCase(),smooth:!0,duration:1e3,spy:!0,offset:-140,activeStyle:{backgroundColor:"#9929fb",color:"white"},className:"hover:text-picto-primary px-5 py-3 mx-1",children:e.name})},e.id)),Jr=()=>{const[e,t]=ie.useState(0);return ie.useEffect(()=>{const n=()=>{t(window.scrollY)};window.addEventListener("scroll",n)},[]),L.jsx("div",{className:`sticky top-0 ${e>50?"bg-soft-white border-b border-gray-300":"bg-white border-white"} z-50 transition-all duration-1000`,children:L.jsxs("div",{className:"navbar flex justify-between mx-auto content",children:[L.jsxs("div",{className:"flex items-center justify-between",children:[L.jsxs("div",{className:"dropdown",children:[L.jsx("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:L.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),L.jsx("ul",{tabIndex:0,className:"menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black",children:bn})]}),L.jsxs("div",{className:"flex items-center border-0 ",children:[L.jsx("img",{src:Zn,className:"h-8 sm:h-14 rounded-2xl",alt:"logo"}),L.jsx("p",{className:"text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold",children:"Brooklyn"})]})]}),L.jsxs("div",{className:"lg:flex items-center",children:[L.jsx("ul",{className:"hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0",children:bn}),L.jsx("p",{className:"",children:L.jsx(zt.Link,{className:"btn btn-md sm:btn-lg btn-primary",href:"#contact",to:"contact",smooth:!0,duration:900,children:"Contact"})})]})]})})},ea=[{id:1,name:"Home",url:"Home"},{id:2,name:"About",url:"About"},{id:3,name:"Process",url:"Process"},{id:4,name:"Portfolio",url:"Portfolio"},{id:5,name:"Blog",url:"Blog"},{id:6,name:"Services",url:"Services"},{id:7,name:"Contact",url:"Contact"}],ta=()=>{const e=new Date().getFullYear();return L.jsxs("div",{className:"bg-[#2A374A] mt-4 h-[320px] flex justify-between relative",children:[L.jsxs("div",{className:"flex max-md:flex-col justify-between mx-0 lg:px-[2%] xl:px-[10%] 2xl:px-[15%] items-center h-full w-full text-neutral-200 absolute",children:[L.jsxs("div",{className:"flex bg-whit border-0 gap-3 lg:me-10 shrink-0",children:[L.jsx("img",{src:Zn,className:"h-14 rounded-2xl",alt:"logo"}),L.jsx("p",{className:"text-4xl font-semibold my-auto",children:"Brooklyn"})]}),L.jsx("div",{className:"mx-3 grid grid-flow-row grid-cols-3 lg:grid-flow-col lg:grid-rows-1",children:ea.map(t=>L.jsxs("a",{className:"mx-3 group inline-block relative w-fit",href:`#${t.url.toLowerCase()}`,children:[t.name,L.jsx("span",{className:"absolute left-0 bottom-0 h-0.5 w-full bg-picto-primary scale-x-0 duration-300 group-hover:scale-x-100"})]},t.id))}),L.jsxs("p",{children:["Copyright © ",e," Picto."]})]}),L.jsxs("p",{className:"text-white absolute bottom-0 left-0 text-center w-full pb-5",children:["Made by ❤️ ThemeWagon"," "]})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Oi={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Ei={prefix:"fas",iconName:"hard-drive",icon:[512,512,[128436,"hdd"],"f0a0","M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 184.4c-17-15.2-39.4-24.4-64-24.4L64 256c-24.6 0-47 9.2-64 24.4L0 96zM64 288l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Pi={prefix:"fas",iconName:"calendar-plus",icon:[448,512,[],"f271","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272zM224 248c13.3 0 24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-56c0-13.3 10.7-24 24-24z"]},na={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},ki={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ra(e,t,n){return(t=oa(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wn(Object(n),!0).forEach(function(r){ra(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aa(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oa(e){var t=aa(e,"string");return typeof t=="symbol"?t:t+""}const Sn=()=>{};let Ht={},nr={},rr=null,ar={mark:Sn,measure:Sn};try{typeof window<"u"&&(Ht=window),typeof document<"u"&&(nr=document),typeof MutationObserver<"u"&&(rr=MutationObserver),typeof performance<"u"&&(ar=performance)}catch{}const{userAgent:xn=""}=Ht.navigator||{},J=Ht,j=nr,_n=rr,Be=ar;J.document;const V=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",or=~xn.indexOf("MSIE")||~xn.indexOf("Trident/");var ia=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ir={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},la={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D="classic",Je="duotone",ca="sharp",fa="sharp-duotone",lr=[D,Je,ca,fa],ua={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},da={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ma=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),pa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ha=["fak","fa-kit","fakd","fa-kit-duotone"],On={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ga=["kit"],va={kit:{"fa-kit":"fak"}},ya=["fak","fakd"],ba={kit:{fak:"fa-kit"}},En={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ye={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Sa=["fak","fa-kit","fakd","fa-kit-duotone"],xa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_a={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Oa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},gt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ea=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],vt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...wa,...Ea],Pa=["solid","regular","light","thin","duotone","brands"],cr=[1,2,3,4,5,6,7,8,9,10],ka=cr.concat([11,12,13,14,15,16,17,18,19,20]),Ta=[...Object.keys(Oa),...Pa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ye.GROUP,Ye.SWAP_OPACITY,Ye.PRIMARY,Ye.SECONDARY].concat(cr.map(e=>"".concat(e,"x"))).concat(ka.map(e=>"w-".concat(e))),Aa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $="___FONT_AWESOME___",yt=16,fr="fa",ur="svg-inline--fa",se="data-fa-i2svg",bt="data-fa-pseudo-element",Ca="data-fa-pseudo-element-pending",Wt="data-prefix",qt="data-icon",Pn="fontawesome-i2svg",Ia="async",Ma=["HTML","HEAD","STYLE","SCRIPT"],dr=(()=>{try{return!0}catch{return!1}})();function Pe(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[D]}})}const mr=v({},ir);mr[D]=v(v(v(v({},{"fa-duotone":"duotone"}),ir[D]),On.kit),On["kit-duotone"]);const Na=Pe(mr),wt=v({},pa);wt[D]=v(v(v(v({},{duotone:"fad"}),wt[D]),En.kit),En["kit-duotone"]);const kn=Pe(wt),St=v({},gt);St[D]=v(v({},St[D]),ba.kit);const Ut=Pe(St),xt=v({},_a);xt[D]=v(v({},xt[D]),va.kit);Pe(xt);const La=ia,pr="fa-layers-text",ja=sa,Ra=v({},ua);Pe(Ra);const Fa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft=la,Da=[...ga,...Ta],Se=J.FontAwesomeConfig||{};function za(e){var t=j.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ha(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}j&&typeof j.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Ha(za(n));a!=null&&(Se[r]=a)});const hr={styleDefault:"solid",familyDefault:D,cssPrefix:fr,replacementClass:ur,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Se.familyPrefix&&(Se.cssPrefix=Se.familyPrefix);const me=v(v({},hr),Se);me.autoReplaceSvg||(me.observeMutations=!1);const k={};Object.keys(hr).forEach(e=>{Object.defineProperty(k,e,{enumerable:!0,set:function(t){me[e]=t,xe.forEach(n=>n(k))},get:function(){return me[e]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(e){me.cssPrefix=e,xe.forEach(t=>t(k))},get:function(){return me.cssPrefix}});J.FontAwesomeConfig=k;const xe=[];function Wa(e){return xe.push(e),()=>{xe.splice(xe.indexOf(e),1)}}const Z=yt,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qa(e){if(!e||!V)return;const t=j.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=j.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return j.head.insertBefore(t,r),e}const Ua="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _e(){let e=12,t="";for(;e-- >0;)t+=Ua[Math.random()*62|0];return t}function he(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Bt(e){return e.classList?he(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function gr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ba(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(gr(e[n]),'" '),"").trim()}function et(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Yt(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function Ya(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),i="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(i)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Xa(e){let{transform:t,width:n=yt,height:r=yt,startCentered:a=!1}=e,o="";return a&&or?o+="translate(".concat(t.x/Z-n/2,"em, ").concat(t.y/Z-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(t.x/Z,"em), calc(-50% + ").concat(t.y/Z,"em)) "):o+="translate(".concat(t.x/Z,"em, ").concat(t.y/Z,"em) "),o+="scale(".concat(t.size/Z*(t.flipX?-1:1),", ").concat(t.size/Z*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var $a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function vr(){const e=fr,t=ur,n=k.cssPrefix,r=k.replacementClass;let a=$a;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(r))}return a}let Tn=!1;function ut(){k.autoAddCss&&!Tn&&(qa(vr()),Tn=!0)}var Ga={mixout(){return{dom:{css:vr,insertCss:ut}}},hooks(){return{beforeDOMElementCreation(){ut()},beforeI2svg(){ut()}}}};const G=J||{};G[$]||(G[$]={});G[$].styles||(G[$].styles={});G[$].hooks||(G[$].hooks={});G[$].shims||(G[$].shims=[]);var X=G[$];const yr=[],br=function(){j.removeEventListener("DOMContentLoaded",br),Ge=1,yr.map(e=>e())};let Ge=!1;V&&(Ge=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),Ge||j.addEventListener("DOMContentLoaded",br));function Va(e){V&&(Ge?setTimeout(e,0):yr.push(e))}function ke(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?gr(e):"<".concat(t," ").concat(Ba(n),">").concat(r.map(ke).join(""),"</").concat(t,">")}function An(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var dt=function(t,n,r,a){var o=Object.keys(t),s=o.length,i=n,c,l,f;for(r===void 0?(c=1,f=t[o[0]]):(c=0,f=r);c<s;c++)l=o[c],f=i(f,t[l],l,t);return f};function Qa(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((a&1023)<<10)+(o&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function _t(e){const t=Qa(e);return t.length===1?t[0].toString(16):null}function Ka(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Cn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ot(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Cn(t);typeof X.hooks.addPack=="function"&&!r?X.hooks.addPack(e,Cn(t)):X.styles[e]=v(v({},X.styles[e]||{}),a),e==="fas"&&Ot("fa",t)}const{styles:Oe,shims:Za}=X,wr=Object.keys(Ut),Ja=wr.reduce((e,t)=>(e[t]=Object.keys(Ut[t]),e),{});let Xt=null,Sr={},xr={},_r={},Or={},Er={};function eo(e){return~Da.indexOf(e)}function to(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!eo(a)?a:null}const Pr=()=>{const e=r=>dt(Oe,(a,o,s)=>(a[s]=dt(o,r,{}),a),{});Sr=e((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=o}),r)),xr=e((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=o}),r)),Er=e((r,a,o)=>{const s=a[2];return r[o]=o,s.forEach(i=>{r[i]=o}),r});const t="far"in Oe||k.autoFetchSvg,n=dt(Za,(r,a)=>{const o=a[0];let s=a[1];const i=a[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:i}),r},{names:{},unicodes:{}});_r=n.names,Or=n.unicodes,Xt=tt(k.styleDefault,{family:k.familyDefault})};Wa(e=>{Xt=tt(e.styleDefault,{family:k.familyDefault})});Pr();function $t(e,t){return(Sr[e]||{})[t]}function no(e,t){return(xr[e]||{})[t]}function oe(e,t){return(Er[e]||{})[t]}function kr(e){return _r[e]||{prefix:null,iconName:null}}function ro(e){const t=Or[e],n=$t("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return Xt}const Tr=()=>({prefix:null,iconName:null,rest:[]});function ao(e){let t=D;const n=wr.reduce((r,a)=>(r[a]="".concat(k.cssPrefix,"-").concat(a),r),{});return lr.forEach(r=>{(e.includes(n[r])||e.some(a=>Ja[r].includes(a)))&&(t=r)}),t}function tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=D}=t,r=Na[n][e];if(n===Je&&!e)return"fad";const a=kn[n][e]||kn[n][r],o=e in X.styles?e:null;return a||o||null}function oo(e){let t=[],n=null;return e.forEach(r=>{const a=to(k.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function In(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=vt.concat(Sa),o=In(e.filter(d=>a.includes(d))),s=In(e.filter(d=>!vt.includes(d))),i=o.filter(d=>(r=d,!sr.includes(d))),[c=null]=i,l=ao(o),f=v(v({},oo(s)),{},{prefix:tt(c,{family:l})});return v(v(v({},f),co({values:e,family:l,styles:Oe,config:k,canonical:f,givenPrefix:r})),io(n,r,f))}function io(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const o=t==="fa"?kr(a):{},s=oe(r,a);return a=o.iconName||s||a,r=o.prefix||r,r==="far"&&!Oe.far&&Oe.fas&&!k.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const so=lr.filter(e=>e!==D||e!==Je),lo=Object.keys(gt).filter(e=>e!==D).map(e=>Object.keys(gt[e])).flat();function co(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:o={},config:s={}}=e,i=n===Je,c=t.includes("fa-duotone")||t.includes("fad"),l=s.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!i&&(c||l||f)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&so.includes(n)&&(Object.keys(o).find(p=>lo.includes(p))||s.autoFetchSvg)){const p=ma.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=oe(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=ee()||"fas"),r}class fo{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=v(v({},this.definitions[o]||{}),a[o]),Ot(o,a[o]);const s=Ut[D][o];s&&Ot(s,a[o]),Pr()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:s,icon:i}=r[a],c=i[2];t[o]||(t[o]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(t[o][l]=i)}),t[o][s]=i}),t}}let Mn=[],fe={};const de={},uo=Object.keys(de);function mo(e,t){let{mixoutsTo:n}=t;return Mn=e,fe={},Object.keys(de).forEach(r=>{uo.indexOf(r)===-1&&delete de[r]}),Mn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{fe[s]||(fe[s]=[]),fe[s].push(o[s])})}r.provides&&r.provides(de)}),n}function Et(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(fe[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(fe[e]||[]).forEach(o=>{o.apply(null,n)})}function te(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return de[e]?de[e].apply(null,t):void 0}function Pt(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||ee();if(t)return t=oe(n,t)||t,An(Ar.definitions,n,t)||An(X.styles,n,t)}const Ar=new fo,po=()=>{k.autoReplaceSvg=!1,k.observeMutations=!1,le("noAuto")},ho={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(le("beforeI2svg",e),te("pseudoElements2svg",e),te("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Va(()=>{vo({autoReplaceSvgRoot:t}),le("watch",e)})}},go={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:oe(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=tt(e[0]);return{prefix:n,iconName:oe(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(k.cssPrefix,"-"))>-1||e.match(La))){const t=nt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||ee(),iconName:oe(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=ee();return{prefix:t,iconName:oe(t,e)||e}}}},H={noAuto:po,config:k,dom:ho,parse:go,library:Ar,findIconDefinition:Pt,toHtml:ke},vo=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=j}=e;(Object.keys(X.styles).length>0||k.autoFetchSvg)&&V&&k.autoReplaceSvg&&H.dom.i2svg({node:t})};function rt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ke(n))}}),Object.defineProperty(e,"node",{get:function(){if(!V)return;const n=j.createElement("div");return n.innerHTML=e.html,n.children}}),e}function yo(e){let{children:t,main:n,mask:r,attributes:a,styles:o,transform:s}=e;if(Yt(s)&&n.found&&!r.found){const{width:i,height:c}=n,l={x:i/c/2,y:.5};a.style=et(v(v({},o),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function bo(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(k.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},a),{},{id:s}),children:r}]}]}function Gt(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:o,symbol:s,title:i,maskId:c,titleId:l,extra:f,watchable:d=!1}=e,{width:p,height:u}=n.found?n:t,m=ya.includes(r),S=[k.replacementClass,a?"".concat(k.cssPrefix,"-").concat(a):""].filter(T=>f.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(f.classes).join(" ");let g={children:[],attributes:v(v({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:S,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(u)})};const y=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/u*16*.0625,"em")}:{};d&&(g.attributes[se]=""),i&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||_e())},children:[i]}),delete g.attributes.title);const w=v(v({},g),{},{prefix:r,iconName:a,main:t,mask:n,maskId:c,transform:o,symbol:s,styles:v(v({},y),f.styles)}),{children:b,attributes:E}=n.found&&t.found?te("generateAbstractMask",w)||{children:[],attributes:{}}:te("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=b,w.attributes=E,s?bo(w):yo(w)}function Nn(e){const{content:t,width:n,height:r,transform:a,title:o,extra:s,watchable:i=!1}=e,c=v(v(v({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(c[se]="");const l=v({},s.styles);Yt(a)&&(l.transform=Xa({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const f=et(l);f.length>0&&(c.style=f);const d=[];return d.push({tag:"span",attributes:c,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function wo(e){const{content:t,title:n,extra:r}=e,a=v(v(v({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=et(r.styles);o.length>0&&(a.style=o);const s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:mt}=X;function kt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const So={found:!1,width:512,height:512};function xo(e,t){!dr&&!k.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Tt(e,t){let n=t;return t==="fa"&&k.styleDefault!==null&&(t=ee()),new Promise((r,a)=>{if(n==="fa"){const o=kr(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&mt[t]&&mt[t][e]){const o=mt[t][e];return r(kt(o))}xo(e,t),r(v(v({},So),{},{icon:k.showMissingIcons&&e?te("missingIconAbstract")||{}:{}}))})}const Ln=()=>{},At=k.measurePerformance&&Be&&Be.mark&&Be.measure?Be:{mark:Ln,measure:Ln},we='FA "6.7.2"',_o=e=>(At.mark("".concat(we," ").concat(e," begins")),()=>Cr(e)),Cr=e=>{At.mark("".concat(we," ").concat(e," ends")),At.measure("".concat(we," ").concat(e),"".concat(we," ").concat(e," begins"),"".concat(we," ").concat(e," ends"))};var Vt={begin:_o,end:Cr};const Xe=()=>{};function jn(e){return typeof(e.getAttribute?e.getAttribute(se):null)=="string"}function Oo(e){const t=e.getAttribute?e.getAttribute(Wt):null,n=e.getAttribute?e.getAttribute(qt):null;return t&&n}function Eo(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(k.replacementClass)}function Po(){return k.autoReplaceSvg===!0?$e.replace:$e[k.autoReplaceSvg]||$e.replace}function ko(e){return j.createElementNS("http://www.w3.org/2000/svg",e)}function To(e){return j.createElement(e)}function Ir(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ko:To}=t;if(typeof e=="string")return j.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ir(o,{ceFn:n}))}),r}function Ao(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const $e={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ir(n),t)}),t.getAttribute(se)===null&&k.keepOriginalSource){let n=j.createComment(Ao(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Bt(t).indexOf(k.replacementClass))return $e.replace(e);const r=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===k.replacementClass||i.match(r)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>ke(o)).join(`
`);t.setAttribute(se,""),t.innerHTML=a}};function Rn(e){e()}function Mr(e,t){const n=typeof t=="function"?t:Xe;if(e.length===0)n();else{let r=Rn;k.mutateApproach===Ia&&(r=J.requestAnimationFrame||Rn),r(()=>{const a=Po(),o=Vt.begin("mutate");e.map(a),o(),n()})}}let Qt=!1;function Nr(){Qt=!0}function Ct(){Qt=!1}let Ve=null;function Fn(e){if(!_n||!k.observeMutations)return;const{treeCallback:t=Xe,nodeCallback:n=Xe,pseudoElementsCallback:r=Xe,observeMutationsRoot:a=j}=e;Ve=new _n(o=>{if(Qt)return;const s=ee();he(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!jn(i.addedNodes[0])&&(k.searchPseudoElements&&r(i.target),t(i.target)),i.type==="attributes"&&i.target.parentNode&&k.searchPseudoElements&&r(i.target.parentNode),i.type==="attributes"&&jn(i.target)&&~Fa.indexOf(i.attributeName))if(i.attributeName==="class"&&Oo(i.target)){const{prefix:c,iconName:l}=nt(Bt(i.target));i.target.setAttribute(Wt,c||s),l&&i.target.setAttribute(qt,l)}else Eo(i.target)&&n(i.target)})}),V&&Ve.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Co(){Ve&&Ve.disconnect()}function Io(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const o=a.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(r[s]=i.join(":").trim()),r},{})),n}function Mo(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=nt(Bt(e));return a.prefix||(a.prefix=ee()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=no(a.prefix,e.innerText)||$t(a.prefix,_t(e.innerText))),!a.iconName&&k.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function No(e){const t=he(e.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return k.autoA11y&&(n?t["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(r||_e()):(t["aria-hidden"]="true",t.focusable="false")),t}function Lo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Mo(e),o=No(e),s=Et("parseNodeAttributes",{},e);let i=t.styleParser?Io(e):[];return v({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:i,attributes:o}},s)}const{styles:jo}=X;function Lr(e){const t=k.autoReplaceSvg==="nest"?Dn(e,{styleParser:!1}):Dn(e);return~t.extra.classes.indexOf(pr)?te("generateLayersText",e,t):te("generateSvgReplacementMutation",e,t)}function Ro(){return[...ha,...vt]}function zn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();const n=j.documentElement.classList,r=f=>n.add("".concat(Pn,"-").concat(f)),a=f=>n.remove("".concat(Pn,"-").concat(f)),o=k.autoFetchSvg?Ro():sr.concat(Object.keys(jo));o.includes("fa")||o.push("fa");const s=[".".concat(pr,":not([").concat(se,"])")].concat(o.map(f=>".".concat(f,":not([").concat(se,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=he(e.querySelectorAll(s))}catch{}if(i.length>0)r("pending"),a("complete");else return Promise.resolve();const c=Vt.begin("onTree"),l=i.reduce((f,d)=>{try{const p=Lr(d);p&&f.push(p)}catch(p){dr||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,d)=>{Promise.all(l).then(p=>{Mr(p,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),c(),f()})}).catch(p=>{c(),d(p)})})}function Fo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lr(e).then(n=>{n&&Mr([n],t)})}function Do(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Pt(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Pt(a||{})),e(r,v(v({},n),{},{mask:a}))}}const zo=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,symbol:r=!1,mask:a=null,maskId:o=null,title:s=null,titleId:i=null,classes:c=[],attributes:l={},styles:f={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:u}=e;return rt(v({type:"icon"},e),()=>(le("beforeDOMElementCreation",{iconDefinition:e,params:t}),k.autoA11y&&(s?l["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(i||_e()):(l["aria-hidden"]="true",l.focusable="false")),Gt({icons:{main:kt(u),mask:a?kt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:v(v({},Y),n),symbol:r,title:s,maskId:o,titleId:i,extra:{attributes:l,styles:f,classes:c}})))};var Ho={mixout(){return{icon:Do(zo)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=zn,e.nodeCallback=Fo,e}}},provides(e){e.i2svg=function(t){const{node:n=j,callback:r=()=>{}}=t;return zn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:o,prefix:s,transform:i,symbol:c,mask:l,maskId:f,extra:d}=n;return new Promise((p,u)=>{Promise.all([Tt(r,s),l.iconName?Tt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(m=>{let[S,g]=m;p([t,Gt({icons:{main:S,mask:g},prefix:s,iconName:r,transform:i,symbol:c,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(u)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:o,styles:s}=t;const i=et(s);i.length>0&&(r.style=i);let c;return Yt(o)&&(c=te("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},Wo={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return rt({type:"layer"},()=>{le("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},qo={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=t;return rt({type:"counter",content:e},()=>(le("beforeDOMElementCreation",{content:e,params:t}),wo({content:e.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(k.cssPrefix,"-layers-counter"),...r]}})))}}}},Uo={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,title:r=null,classes:a=[],attributes:o={},styles:s={}}=t;return rt({type:"text",content:e},()=>(le("beforeDOMElementCreation",{content:e,params:t}),Nn({content:e,transform:v(v({},Y),n),title:r,extra:{attributes:o,styles:s,classes:["".concat(k.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:o}=n;let s=null,i=null;if(or){const c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/c,i=l.height/c}return k.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Nn({content:t.innerHTML,width:s,height:i,transform:a,title:r,extra:o,watchable:!0})])}}};const Bo=new RegExp('"',"ug"),Hn=[1105920,1112319],Wn=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),da),Aa),xa),It=Object.keys(Wn).reduce((e,t)=>(e[t.toLowerCase()]=Wn[t],e),{}),Yo=Object.keys(It).reduce((e,t)=>{const n=It[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Xo(e){const t=e.replace(Bo,""),n=Ka(t,0),r=n>=Hn[0]&&n<=Hn[1],a=t.length===2?t[0]===t[1]:!1;return{value:_t(a?t[0]:t),isSecondary:r||a}}function $o(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(It[n]||{})[a]||Yo[n]}function qn(e,t){const n="".concat(Ca).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const s=he(e.children).filter(p=>p.getAttribute(bt)===t)[0],i=J.getComputedStyle(e,t),c=i.getPropertyValue("font-family"),l=c.match(ja),f=i.getPropertyValue("font-weight"),d=i.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){const p=i.getPropertyValue("content");let u=$o(c,f);const{value:m,isSecondary:S}=Xo(p),g=l[0].startsWith("FontAwesome");let y=$t(u,m),w=y;if(g){const b=ro(m);b.iconName&&b.prefix&&(y=b.iconName,u=b.prefix)}if(y&&!S&&(!s||s.getAttribute(Wt)!==u||s.getAttribute(qt)!==w)){e.setAttribute(n,w),s&&e.removeChild(s);const b=Lo(),{extra:E}=b;E.attributes[bt]=t,Tt(y,u).then(T=>{const P=Gt(v(v({},b),{},{icons:{main:T,mask:Tr()},prefix:u,iconName:w,extra:E,watchable:!0})),_=j.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(_,e.firstChild):e.appendChild(_),_.outerHTML=P.map(I=>ke(I)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Go(e){return Promise.all([qn(e,"::before"),qn(e,"::after")])}function Vo(e){return e.parentNode!==document.head&&!~Ma.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Un(e){if(V)return new Promise((t,n)=>{const r=he(e.querySelectorAll("*")).filter(Vo).map(Go),a=Vt.begin("searchPseudoElements");Nr(),Promise.all(r).then(()=>{a(),Ct(),t()}).catch(()=>{a(),Ct(),n()})})}var Qo={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Un,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=j}=t;k.searchPseudoElements&&Un(n)}}};let Bn=!1;var Ko={mixout(){return{dom:{unwatch(){Nr(),Bn=!0}}}},hooks(){return{bootstrap(){Fn(Et("mutationObserverCallbacks",{}))},noAuto(){Co()},watch(e){const{observeMutationsRoot:t}=e;Bn?Ct():Fn(Et("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Yn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let s=a.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var Zo={mixout(){return{parse:{transform:e=>Yn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Yn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:o}=t;const s={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(i," ").concat(c," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),p.path)}]}]}}}};const pt={x:0,y:0,width:"100%",height:"100%"};function Xn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Jo(e){return e.tag==="g"?e.children:[e]}var ei={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?nt(n.split(" ").map(a=>a.trim())):Tr();return r.prefix||(r.prefix=ee()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:o,maskId:s,transform:i}=t;const{width:c,icon:l}=a,{width:f,icon:d}=o,p=Ya({transform:i,containerWidth:f,iconWidth:c}),u={tag:"rect",attributes:v(v({},pt),{},{fill:"white"})},m=l.children?{children:l.children.map(Xn)}:{},S={tag:"g",attributes:v({},p.inner),children:[Xn(v({tag:l.tag,attributes:v(v({},l.attributes),p.path)},m))]},g={tag:"g",attributes:v({},p.outer),children:[S]},y="mask-".concat(s||_e()),w="clip-".concat(s||_e()),b={tag:"mask",attributes:v(v({},pt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Jo(d)},b]};return n.push(E,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(y,")")},pt)}),{children:n,attributes:r}}}},ti={provides(e){let t=!1;J.matchMedia&&(t=J.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=v(v({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:v(v({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ni={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},ri=[Ga,Ho,Wo,qo,Uo,Qo,Ko,Zo,ei,ti,ni];mo(ri,{mixoutsTo:H});H.noAuto;H.config;H.library;H.dom;const Mt=H.parse;H.findIconDefinition;H.toHtml;const ai=H.icon;H.layer;H.text;H.counter;var oi=Ee();const N=Hr(oi);function $n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$n(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$n(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qe(e){"@babel/helpers - typeof";return Qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qe(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ii(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function si(e,t){if(e==null)return{};var n=ii(e,t),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Nt(e){return li(e)||ci(e)||fi(e)||ui()}function li(e){if(Array.isArray(e))return Lt(e)}function ci(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fi(e,t){if(e){if(typeof e=="string")return Lt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lt(e,t)}}function Lt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ui(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function di(e){var t,n=e.beat,r=e.fade,a=e.beatFade,o=e.bounce,s=e.shake,i=e.flash,c=e.spin,l=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,u=e.inverse,m=e.border,S=e.listItem,g=e.flip,y=e.size,w=e.rotation,b=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":p,"fa-inverse":u,"fa-border":m,"fa-li":S,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},ue(t,"fa-".concat(y),typeof y<"u"&&y!==null),ue(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),ue(t,"fa-pull-".concat(b),typeof b<"u"&&b!==null),ue(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(T){return E[T]?T:null}).filter(function(T){return T})}function mi(e){return e=e-0,e===e}function jr(e){return mi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var pi=["style"];function hi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function gi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=jr(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?t[hi(a)]=o:t[a]=o,t},{})}function Rr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Rr(e,c)}),a=Object.keys(t.attributes||{}).reduce(function(c,l){var f=t.attributes[l];switch(l){case"class":c.attrs.className=f,delete t.attributes.class;break;case"style":c.attrs.style=gi(f);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=f:c.attrs[jr(l)]=f}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=si(n,pi);return a.attrs.style=B(B({},a.attrs.style),s),e.apply(void 0,[t.tag,B(B({},a.attrs),i)].concat(Nt(r)))}var Fr=!1;try{Fr=!0}catch{}function vi(){if(!Fr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gn(e){if(e&&Qe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Mt.icon)return Mt.icon(e);if(e===null)return null;if(e&&Qe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}var Vn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Kt=Kn.forwardRef(function(e,t){var n=B(B({},Vn),e),r=n.icon,a=n.mask,o=n.symbol,s=n.className,i=n.title,c=n.titleId,l=n.maskId,f=Gn(r),d=ht("classes",[].concat(Nt(di(n)),Nt((s||"").split(" ")))),p=ht("transform",typeof n.transform=="string"?Mt.transform(n.transform):n.transform),u=ht("mask",Gn(a)),m=ai(f,B(B(B(B({},d),p),u),{},{symbol:o,title:i,titleId:c,maskId:l}));if(!m)return vi("Could not find icon",f),null;var S=m.abstract,g={ref:t};return Object.keys(n).forEach(function(y){Vn.hasOwnProperty(y)||(g[y]=n[y])}),yi(S[0],g)});Kt.displayName="FontAwesomeIcon";Kt.propTypes={beat:N.bool,border:N.bool,beatFade:N.bool,bounce:N.bool,className:N.string,fade:N.bool,flash:N.bool,mask:N.oneOfType([N.object,N.array,N.string]),maskId:N.string,fixedWidth:N.bool,inverse:N.bool,flip:N.oneOf([!0,!1,"horizontal","vertical","both"]),icon:N.oneOfType([N.object,N.array,N.string]),listItem:N.bool,pull:N.oneOf(["right","left"]),pulse:N.bool,rotation:N.oneOf([0,90,180,270]),shake:N.bool,size:N.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:N.bool,spinPulse:N.bool,spinReverse:N.bool,symbol:N.oneOfType([N.bool,N.string]),title:N.string,titleId:N.string,transform:N.oneOfType([N.string,N.object]),swapOpacity:N.bool};var yi=Rr.bind(null,Kn.createElement);const bi=()=>{zt.animateScroll.scrollToTop(wi)},wi={duration:500,smooth:!0},Si=()=>{const[e,t]=ie.useState(0);return ie.useEffect(()=>{const n=()=>{t(window.scrollY)};window.addEventListener("scroll",n)},[]),L.jsx("div",{className:"flex justify-end relative  min-sm:me-10 z-10 transition-all",children:L.jsx("a",{onClick:bi,className:`fixed bottom-10 me-5 w-10 h-10 min-sm:w-12.5 min-sm:h-12.5 min-lg:w-15 min-lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white ${e<200&&"scale-0"}`,children:L.jsx(Kt,{icon:na,size:"2xl"})})})},Dr=ie.createContext("light"),xi=()=>{const[e,t]=ie.useState("");return ie.useEffect(()=>{const n=localStorage.getItem("dark")=="true"?"dark":"light";t(n)},[e]),L.jsx(Dr.Provider,{value:[e,t],children:L.jsxs("div",{"data-theme":e,className:"relative",children:[L.jsx(Jr,{}),L.jsx(Wr,{}),L.jsx(ta,{}),L.jsx(Si,{})]})})},Ti=Object.freeze(Object.defineProperty({__proto__:null,ThemeContext:Dr,default:xi},Symbol.toStringTag,{value:"Module"}));export{Kt as F,Ti as M,Pi as a,Oi as b,Ei as c,ki as f};
