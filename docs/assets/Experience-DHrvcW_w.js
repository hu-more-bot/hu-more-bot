import{r as o,j as u}from"./index-ImwBOgvT.js";import{e as re,u as ne,a as oe,c as se,b as ie,i as ce,E as ue,B as le,d as ae,T as de}from"./events-776716bd.esm-BwXmtHZM.js";function D(e,t){let r;return(...s)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...s),t)}}function fe({debounce:e,scroll:t,polyfill:r,offsetSize:s}={debounce:0,scroll:!1,offsetSize:!1}){const i=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[l,a]=o.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),n=o.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:l,orientationHandler:null}),p=e?typeof e=="number"?e:e.scroll:null,m=e?typeof e=="number"?e:e.resize:null,w=o.useRef(!1);o.useEffect(()=>(w.current=!0,()=>void(w.current=!1)));const[R,g,f]=o.useMemo(()=>{const c=()=>{if(!n.current.element)return;const{left:z,top:j,width:P,height:x,bottom:L,right:H,x:M,y:B}=n.current.element.getBoundingClientRect(),d={left:z,top:j,width:P,height:x,bottom:L,right:H,x:M,y:B};n.current.element instanceof HTMLElement&&s&&(d.height=n.current.element.offsetHeight,d.width=n.current.element.offsetWidth),Object.freeze(d),w.current&&!me(n.current.lastBounds,d)&&a(n.current.lastBounds=d)};return[c,m?D(c,m):c,p?D(c,p):c]},[a,s,p,m]);function b(){n.current.scrollContainers&&(n.current.scrollContainers.forEach(c=>c.removeEventListener("scroll",f,!0)),n.current.scrollContainers=null),n.current.resizeObserver&&(n.current.resizeObserver.disconnect(),n.current.resizeObserver=null),n.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",n.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",n.current.orientationHandler))}function y(){n.current.element&&(n.current.resizeObserver=new i(f),n.current.resizeObserver.observe(n.current.element),t&&n.current.scrollContainers&&n.current.scrollContainers.forEach(c=>c.addEventListener("scroll",f,{capture:!0,passive:!0})),n.current.orientationHandler=()=>{f()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",n.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",n.current.orientationHandler))}const O=c=>{!c||c===n.current.element||(b(),n.current.element=c,n.current.scrollContainers=q(c),y())};return ve(f,!!t),pe(g),o.useEffect(()=>{b(),y()},[t,f,g]),o.useEffect(()=>b,[]),[O,l,R]}function pe(e){o.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function ve(e,t){o.useEffect(()=>{if(t){const r=e;return window.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",r,!0)}},[e,t])}function q(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:s,overflowY:i}=window.getComputedStyle(e);return[r,s,i].some(l=>l==="auto"||l==="scroll")&&t.push(e),[...t,...q(e.parentElement)]}const he=["x","y","top","bottom","left","right","width","height"],me=(e,t)=>he.every(r=>e[r]===t[r]);var we=Object.defineProperty,be=Object.defineProperties,Ee=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))ge.call(t,r)&&X(e,r,t[r]);if(N)for(var r of N(t))ye.call(t,r)&&X(e,r,t[r]);return e},xe=(e,t)=>be(e,Ee(t)),Y,V;typeof window<"u"&&((Y=window.document)!=null&&Y.createElement||((V=window.navigator)==null?void 0:V.product)==="ReactNative")?o.useLayoutEffect:o.useEffect;function G(e,t,r){if(!e)return;if(r(e)===!0)return e;let s=e.child;for(;s;){const i=G(s,t,r);if(i)return i;s=s.sibling}}function J(e){try{return Object.defineProperties(e,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return e}}const $=console.error;console.error=function(){const e=[...arguments].join("");if(e!=null&&e.startsWith("Warning:")&&e.includes("useContext")){console.error=$;return}return $.apply(this,arguments)};const S=J(o.createContext(null));class K extends o.Component{render(){return o.createElement(S.Provider,{value:this._reactInternals},this.props.children)}}function Ce(){const e=o.useContext(S);if(e===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const t=o.useId();return o.useMemo(()=>{for(const s of[e,e==null?void 0:e.alternate]){if(!s)continue;const i=G(s,!1,l=>{let a=l.memoizedState;for(;a;){if(a.memoizedState===t)return!0;a=a.next}});if(i)return i}},[e,t])}function _e(){const e=Ce(),[t]=o.useState(()=>new Map);t.clear();let r=e;for(;r;){if(r.type&&typeof r.type=="object"){const i=r.type._context===void 0&&r.type.Provider===r.type?r.type:r.type._context;i&&i!==S&&!t.has(i)&&t.set(i,o.useContext(J(i)))}r=r.return}return t}function Re(){const e=_e();return o.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>s=>o.createElement(t,null,o.createElement(r.Provider,xe(A({},s),{value:e.get(r)}))),t=>o.createElement(K,A({},t))),[e])}const Oe=o.forwardRef(function({children:t,fallback:r,resize:s,style:i,gl:l,events:a=ie,eventSource:n,eventPrefix:p,shadows:m,linear:w,flat:R,legacy:g,orthographic:f,frameloop:b,dpr:y,performance:O,raycaster:c,camera:z,scene:j,onPointerMissed:P,onCreated:x,...L},H){o.useMemo(()=>re(de),[]);const M=Re(),[B,d]=fe({scroll:!0,debounce:{scroll:50,resize:0},...s}),C=o.useRef(null),F=o.useRef(null);o.useImperativeHandle(H,()=>C.current);const I=ne(P),[k,Q]=o.useState(!1),[T,U]=o.useState(!1);if(k)throw k;if(T)throw T;const _=o.useRef(null);oe(()=>{const E=C.current;d.width>0&&d.height>0&&E&&(_.current||(_.current=se(E)),_.current.configure({gl:l,events:a,shadows:m,linear:w,flat:R,legacy:g,orthographic:f,frameloop:b,dpr:y,performance:O,raycaster:c,camera:z,scene:j,size:d,onPointerMissed:(...v)=>I.current==null?void 0:I.current(...v),onCreated:v=>{v.events.connect==null||v.events.connect(n?ce(n)?n.current:n:F.current),p&&v.setEvents({compute:(W,h)=>{const ee=W[p+"X"],te=W[p+"Y"];h.pointer.set(ee/h.size.width*2-1,-(te/h.size.height)*2+1),h.raycaster.setFromCamera(h.pointer,h.camera)}}),x==null||x(v)}}),_.current.render(u.jsx(M,{children:u.jsx(ue,{set:U,children:u.jsx(o.Suspense,{fallback:u.jsx(le,{set:Q}),children:t??null})})})))}),o.useEffect(()=>{const E=C.current;if(E)return()=>ae(E)},[]);const Z=n?"none":"auto";return u.jsx("div",{ref:F,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:Z,...i},...L,children:u.jsx("div",{ref:B,style:{width:"100%",height:"100%"},children:u.jsx("canvas",{ref:C,style:{display:"block"},children:r})})})}),ze=o.forwardRef(function(t,r){return u.jsx(K,{children:u.jsx(Oe,{...t,ref:r})})});function Le({className:e,offset:t,children:r,width:s,height:i}){return u.jsx(ze,{camera:{position:[0,2,0],rotation:[Math.PI/-8,0,0],fov:75},style:{width:s,height:i,maxWidth:"100vw",maxHeight:"100vh",translate:`0px ${(t||0)/-5}px`},className:e,shadows:!0,children:r})}export{Le as default};
