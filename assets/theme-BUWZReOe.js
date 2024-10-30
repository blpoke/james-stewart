(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var D,h,Ot,Tt,P,vt,Ut,tt,_t,et,nt,j={},Nt=[],Yt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ft=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function Lt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function E(e,t,n){var i,o,r,f={};for(r in t)r=="key"?i=t[r]:r=="ref"?o=t[r]:f[r]=t[r];if(arguments.length>2&&(f.children=arguments.length>3?D.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)f[r]===void 0&&(f[r]=e.defaultProps[r]);return A(e,f,i,o,null)}function A(e,t,n,i,o){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Ot,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(r),r}function I(e){return e.children}function M(e,t){this.props=e,this.context=t}function O(e,t){if(t==null)return e.__?O(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?O(e):null}function At(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return At(e)}}function dt(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!G.__r++||vt!==h.debounceRendering)&&((vt=h.debounceRendering)||Ut)(G)}function G(){var e,t,n,i,o,r,f,s;for(P.sort(tt);e=P.shift();)e.__d&&(t=P.length,i=void 0,r=(o=(n=e).__v).__e,f=[],s=[],n.__P&&((i=x({},o)).__v=o.__v+1,h.vnode&&h.vnode(i),st(n.__P,i,o,n.__n,n.__P.namespaceURI,32&o.__u?[r]:null,f,r??O(o),!!(32&o.__u),s),i.__v=o.__v,i.__.__k[i.__i]=i,jt(f,i,s),i.__e!=r&&At(i)),P.length>t&&P.sort(tt));G.__r=0}function Mt(e,t,n,i,o,r,f,s,l,u,a){var _,$,c,m,k,g=i&&i.__k||Nt,v=t.length;for(n.__d=l,Zt(n,t,g),l=n.__d,_=0;_<v;_++)(c=n.__k[_])!=null&&($=c.__i===-1?j:g[c.__i]||j,c.__i=_,st(e,c,$,o,r,f,s,l,u,a),m=c.__e,c.ref&&$.ref!=c.ref&&($.ref&&ut($.ref,null,c),a.push(c.ref,c.__c||m,c)),k==null&&m!=null&&(k=m),65536&c.__u||$.__k===c.__k?l=Ft(c,l,e):typeof c.type=="function"&&c.__d!==void 0?l=c.__d:m&&(l=m.nextSibling),c.__d=void 0,c.__u&=-196609);n.__d=l,n.__e=k}function Zt(e,t,n){var i,o,r,f,s,l=t.length,u=n.length,a=u,_=0;for(e.__k=[],i=0;i<l;i++)(o=t[i])!=null&&typeof o!="boolean"&&typeof o!="function"?(f=i+_,(o=e.__k[i]=typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?A(null,o,null,null,null):ft(o)?A(I,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?A(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,r=null,(s=o.__i=te(o,n,f,a))!==-1&&(a--,(r=n[s])&&(r.__u|=131072)),r==null||r.__v===null?(s==-1&&_--,typeof o.type!="function"&&(o.__u|=65536)):s!==f&&(s==f-1?_--:s==f+1?_++:(s>f?_--:_++,o.__u|=65536))):o=e.__k[i]=null;if(a)for(i=0;i<u;i++)(r=n[i])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=O(r)),Dt(r,r))}function Ft(e,t,n){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=Ft(i[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=O(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function te(e,t,n,i){var o=e.key,r=e.type,f=n-1,s=n+1,l=t[n];if(l===null||l&&o==l.key&&r===l.type&&!(131072&l.__u))return n;if(i>(l!=null&&!(131072&l.__u)?1:0))for(;f>=0||s<t.length;){if(f>=0){if((l=t[f])&&!(131072&l.__u)&&o==l.key&&r===l.type)return f;f--}if(s<t.length){if((l=t[s])&&!(131072&l.__u)&&o==l.key&&r===l.type)return s;s++}}return-1}function yt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Yt.test(t)?n:n+"px"}function z(e,t,n,i,o){var r;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||yt(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||yt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i?n.u=i.u:(n.u=_t,e.addEventListener(t,r?nt:et,r)):e.removeEventListener(t,r?nt:et,r);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function mt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=_t++;else if(t.t<n.u)return;return n(h.event?h.event(t):t)}}}function st(e,t,n,i,o,r,f,s,l,u){var a,_,$,c,m,k,g,v,d,N,C,R,L,pt,q,X,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),r=[s=t.__e=n.__e]),(a=h.__b)&&a(t);t:if(typeof S=="function")try{if(v=t.props,d="prototype"in S&&S.prototype.render,N=(a=S.contextType)&&i[a.__c],C=a?N?N.props.value:a.__:i,n.__c?g=(_=t.__c=n.__c).__=_.__E:(d?t.__c=_=new S(v,C):(t.__c=_=new M(v,C),_.constructor=S,_.render=ne),N&&N.sub(_),_.props=v,_.state||(_.state={}),_.context=C,_.__n=i,$=_.__d=!0,_.__h=[],_._sb=[]),d&&_.__s==null&&(_.__s=_.state),d&&S.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,S.getDerivedStateFromProps(v,_.__s))),c=_.props,m=_.state,_.__v=t,$)d&&S.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),d&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(d&&S.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,C),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(_.props=v,_.state=_.__s,_.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t)}),R=0;R<_._sb.length;R++)_.__h.push(_._sb[R]);_._sb=[],_.__h.length&&f.push(_);break t}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,C),d&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,m,k)})}if(_.context=C,_.props=v,_.__P=e,_.__e=!1,L=h.__r,pt=0,d){for(_.state=_.__s,_.__d=!1,L&&L(t),a=_.render(_.props,_.state,_.context),q=0;q<_._sb.length;q++)_.__h.push(_._sb[q]);_._sb=[]}else do _.__d=!1,L&&L(t),a=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++pt<25);_.state=_.__s,_.getChildContext!=null&&(i=x(x({},i),_.getChildContext())),d&&!$&&_.getSnapshotBeforeUpdate!=null&&(k=_.getSnapshotBeforeUpdate(c,m)),Mt(e,ft(X=a!=null&&a.type===I&&a.key==null?a.props.children:a)?X:[X],t,n,i,o,r,f,s,l,u),_.base=t.__e,t.__u&=-161,_.__h.length&&f.push(_),g&&(_.__E=_.__=null)}catch(B){if(t.__v=null,l||r!=null){for(t.__u|=l?160:128;s&&s.nodeType===8&&s.nextSibling;)s=s.nextSibling;r[r.indexOf(s)]=null,t.__e=s}else t.__e=n.__e,t.__k=n.__k;h.__e(B,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ee(n.__e,t,n,i,o,r,f,l,u);(a=h.diffed)&&a(t)}function jt(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)ut(n[i],n[++i],n[++i]);h.__c&&h.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){h.__e(r,o.__v)}})}function ee(e,t,n,i,o,r,f,s,l){var u,a,_,$,c,m,k,g=n.props,v=t.props,d=t.type;if(d==="svg"?o="http://www.w3.org/2000/svg":d==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((c=r[u])&&"setAttribute"in c==!!d&&(d?c.localName===d:c.nodeType===3)){e=c,r[u]=null;break}}if(e==null){if(d===null)return document.createTextNode(v);e=document.createElementNS(o,d,v.is&&v),s&&(h.__m&&h.__m(t,r),s=!1),r=null}if(d===null)g===v||s&&e.data===v||(e.data=v);else{if(r=r&&D.call(e.childNodes),g=n.props||j,!s&&r!=null)for(g={},u=0;u<e.attributes.length;u++)g[(c=e.attributes[u]).name]=c.value;for(u in g)if(c=g[u],u!="children"){if(u=="dangerouslySetInnerHTML")_=c;else if(!(u in v)){if(u=="value"&&"defaultValue"in v||u=="checked"&&"defaultChecked"in v)continue;z(e,u,null,c,o)}}for(u in v)c=v[u],u=="children"?$=c:u=="dangerouslySetInnerHTML"?a=c:u=="value"?m=c:u=="checked"?k=c:s&&typeof c!="function"||g[u]===c||z(e,u,c,g[u],o);if(a)s||_&&(a.__html===_.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),t.__k=[];else if(_&&(e.innerHTML=""),Mt(e,ft($)?$:[$],t,n,i,d==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:n.__k&&O(n,0),s,l),r!=null)for(u=r.length;u--;)Lt(r[u]);s||(u="value",d==="progress"&&m==null?e.removeAttribute("value"):m!==void 0&&(m!==e[u]||d==="progress"&&!m||d==="option"&&m!==g[u])&&z(e,u,m,g[u],o),u="checked",k!==void 0&&k!==e[u]&&z(e,u,k,g[u],o))}return e}function ut(e,t,n){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(o){h.__e(o,n)}}function Dt(e,t,n){var i,o;if(h.unmount&&h.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||ut(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){h.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Dt(i[o],t,n||typeof e.type!="function");n||Lt(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function ne(e,t,n){return this.constructor(e,n)}function Q(e,t,n){var i,o,r,f;h.__&&h.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],f=[],st(t,e=(!i&&n||t).__k=E(I,null,[e]),o||j,j,t.namespaceURI,!i&&n?[n]:o?null:t.firstChild?D.call(t.childNodes):null,r,!i&&n?n:o?o.__e:t.firstChild,i,f),jt(r,e,f)}function It(e,t){Q(e,t,It)}function Wt(e,t,n){var i,o,r,f,s=x({},e.props);for(r in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)r=="key"?i=t[r]:r=="ref"?o=t[r]:s[r]=t[r]===void 0&&f!==void 0?f[r]:t[r];return arguments.length>2&&(s.children=arguments.length>3?D.call(arguments,2):n),A(e.type,s,i||e.key,o||e.ref,null)}D=Nt.slice,h={__e:function(e,t,n,i){for(var o,r,f;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),f=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,i||{}),f=o.__d),f)return o.__E=o}catch(s){e=s}throw e}},Ot=0,Tt=function(e){return e!=null&&e.constructor==null},M.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),dt(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),dt(this))},M.prototype.render=I,P=[],Ut=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,tt=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,_t=0,et=mt(!1),nt=mt(!0);var ie=0;function gt(e,t,n,i,o,r){t||(t={});var f,s,l=t;"ref"in t&&(f=t.ref,delete t.ref);var u={type:e,props:l,key:n,ref:f,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ie,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(f=e.defaultProps))for(s in f)l[s]===void 0&&(l[s]=f[s]);return h.vnode&&h.vnode(u),u}var it,w,Y,bt,$t=0,Rt=[],y=h,wt=y.__b,kt=y.__r,St=y.diffed,xt=y.__c,Ct=y.unmount,Pt=y.__;function oe(e,t){y.__h&&y.__h(w,e,$t||t),$t=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function qt(e,t){var n=oe(it++,7);return fe(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function re(){for(var e;e=Rt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(V),e.__H.__h.forEach(ot),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){w=null,wt&&wt(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Pt&&Pt(e,t)},y.__r=function(e){kt&&kt(e),it=0;var t=(w=e.__c).__H;t&&(Y===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(V),t.__h.forEach(ot),t.__h=[],it=0)),Y=w},y.diffed=function(e){St&&St(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Rt.push(t)!==1&&bt===y.requestAnimationFrame||((bt=y.requestAnimationFrame)||_e)(re)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),Y=w=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(V),n.__h=n.__h.filter(function(i){return!i.__||ot(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],y.__e(i,n.__v)}}),xt&&xt(e,t)},y.unmount=function(e){Ct&&Ct(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{V(i)}catch(o){t=o}}),n.__H=void 0,t&&y.__e(t,n.__v))};var Et=typeof requestAnimationFrame=="function";function _e(e){var t,n=function(){clearTimeout(i),Et&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);Et&&(t=requestAnimationFrame(n))}function V(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function ot(e){var t=w;e.__c=e.__(),w=t}function fe(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}var se=Symbol.for("preact-signals");function lt(){if(H>1)H--;else{for(var e,t=!1;F!==void 0;){var n=F;for(F=void 0,rt++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Vt(n))try{n.c()}catch(o){t||(e=o,t=!0)}n=i}}if(rt=0,H--,t)throw e}}var p=void 0,F=void 0,H=0,rt=0,J=0;function Bt(e){if(p!==void 0){var t=e.n;if(t===void 0||t.t!==p)return t={i:0,S:e,p:p.s,n:void 0,t:p,e:void 0,x:void 0,r:t},p.s!==void 0&&(p.s.n=t),p.s=t,e.n=t,32&p.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=p.s,t.n=void 0,p.s.n=t,p.s=t),t}}function b(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}b.prototype.brand=se;b.prototype.h=function(){return!0};b.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};b.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};b.prototype.subscribe=function(e){var t=this;return at(function(){var n=t.value,i=p;p=void 0;try{e(n)}finally{p=i}})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){var e=p;p=void 0;try{return this.value}finally{p=e}};Object.defineProperty(b.prototype,"value",{get:function(){var e=Bt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(rt>100)throw new Error("Cycle detected");this.v=e,this.i++,J++,H++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{lt()}}}});function zt(e){return new b(e)}function Vt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Gt(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Jt(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function T(e){b.call(this,void 0),this.x=e,this.s=void 0,this.g=J-1,this.f=4}(T.prototype=new b).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===J))return!0;if(this.g=J,this.f|=1,this.i>0&&!Vt(this))return this.f&=-2,!0;var e=p;try{Gt(this),p=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return p=e,Jt(this),this.f&=-2,!0};T.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}b.prototype.S.call(this,e)};T.prototype.U=function(e){if(this.t!==void 0&&(b.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};T.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(T.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Bt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ue(e){return new T(e)}function Kt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){H++;var n=p;p=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,ct(e),i}finally{p=n,lt()}}}function ct(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Kt(e)}function le(e){if(p!==this)throw new Error("Out-of-order effect");Jt(this),p=e,this.f&=-2,8&this.f&&ct(this),lt()}function W(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}W.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};W.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Kt(this),Gt(this),H++;var e=p;return p=this,le.bind(this,e)};W.prototype.N=function(){2&this.f||(this.f|=2,this.o=F,F=this)};W.prototype.d=function(){this.f|=8,1&this.f||ct(this)};function at(e){var t=new W(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var Z;function U(e,t){h[e]=t.bind(null,h[e]||function(){})}function K(e){Z&&Z(),Z=e&&e.S()}function Qt(e){var t=this,n=e.data,i=ae(n);i.value=n;var o=qt(function(){for(var r=t.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return t.__$u.c=function(){var f;!Tt(o.peek())&&((f=t.base)==null?void 0:f.nodeType)===3?t.base.data=o.peek():(t.__$f|=1,t.setState({}))},ue(function(){var f=i.value.value;return f===0?0:f===!0?"":f||""})},[]);return o.value}Qt.displayName="_st";Object.defineProperties(b.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Qt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});U("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var o in i)if(o!=="children"){var r=i[o];r instanceof b&&(n||(t.__np=n={}),n[o]=r,i[o]=r.peek())}}e(t)});U("__r",function(e,t){K();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(o){var r;return at(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r}())),K(n),e(t)});U("__e",function(e,t,n,i){K(),e(t,n,i)});U("diffed",function(e,t){K();var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,o=t.props;if(i){var r=n.U;if(r)for(var f in r){var s=r[f];s!==void 0&&!(f in i)&&(s.d(),r[f]=void 0)}else n.U=r={};for(var l in i){var u=r[l],a=i[l];u===void 0?(u=ce(n,l,a,o),r[l]=u):u.o(a,o)}}}e(t)});function ce(e,t,n,i){var o=t in e&&e.ownerSVGElement===void 0,r=zt(n);return{o:function(f,s){r.value=f,i=s},d:at(function(){var f=r.value.value;i[t]!==f&&(i[t]=f,o?e[t]=f:f?e.setAttribute(t,f):e.removeAttribute(t))})}}U("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var o in i){var r=i[o];r&&r.d()}}}}else{var f=t.__c;if(f){var s=f.__$u;s&&(f.__$u=void 0,s.d())}}e(t)});U("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});M.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in t)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var r in this.props)if(!(r in e))return!0;return!1};function ae(e){return qt(function(){return zt(e)},[])}function ht(){return(ht=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var he=["context","children"];function pe(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(i,o){if(i==null)return{};var r,f,s={},l=Object.keys(i);for(f=0;f<l.length;f++)o.indexOf(r=l[f])>=0||(s[r]=i[r]);return s}(e,he);return Wt(t,n)}function ve(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=E(pe,ht({},this._props,{context:e.detail.context}),function t(n,i){if(n.nodeType===3)return n.data;if(n.nodeType!==1)return null;var o=[],r={},f=0,s=n.attributes,l=n.childNodes;for(f=s.length;f--;)s[f].name!=="slot"&&(r[s[f].name]=s[f].value,r[Xt(s[f].name)]=s[f].value);for(f=l.length;f--;){var u=t(l[f],null),a=l[f].slot;a?r[a]=E(Ht,{name:a},u):o[f]=u}var _=i?E(Ht,null,o):o;return E(i||n.nodeName.toLowerCase(),r,_)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?It:Q)(this._vdom,this._root)}function Xt(e){return e.replace(/-(\w)/g,function(t,n){return n?n.toUpperCase():""})}function de(e,t,n){if(this._vdom){var i={};i[e]=n=n??void 0,i[Xt(e)]=n,this._vdom=Wt(this._vdom,i),Q(this._vdom,this._root)}}function ye(){Q(this._vdom=null,this._root)}function Ht(e,t){var n=this;return E("slot",ht({},e,{ref:function(i){i?(n.ref=i,n._listener||(n._listener=function(o){o.stopPropagation(),o.detail.context=t},i.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}function me(e,t,n,i){function o(){var r=Reflect.construct(HTMLElement,[],o);return r._vdomComponent=e,r._root=r,r}return(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=ve,o.prototype.attributeChangedCallback=de,o.prototype.disconnectedCallback=ye,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),o.observedAttributes=n,n.forEach(function(r){Object.defineProperty(o.prototype,r,{get:function(){return this._vdom.props[r]},set:function(f){this._vdom?this.attributeChangedCallback(r,null,f):(this._props||(this._props={}),this._props[r]=f,this.connectedCallback());var s=typeof f;f!=null&&s!=="string"&&s!=="boolean"&&s!=="number"||this.setAttribute(r,f)}})}),customElements.define(t,o)}function ge(){return gt(I,{children:gt("div",{class:"relative w-screen h-screen",children:"Home Hero"})})}me(ge,"home-hero");
