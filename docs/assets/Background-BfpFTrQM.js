import{r as H,j as R,c as Ge}from"./index-vvC-ORtX.js";import{V as O,M as U,T as Z,S as Ae,Q as xe,O as re,a as T,P as le,R as qe,b as Qe,u as k,c as _e,C as $e}from"./Experience-BF94XTaE.js";function ce(){return ce=Object.assign?Object.assign.bind():function(h){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var e in l)({}).hasOwnProperty.call(l,e)&&(h[e]=l[e])}return h},ce.apply(null,arguments)}var Je=Object.defineProperty,et=(h,i,l)=>i in h?Je(h,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):h[i]=l,tt=(h,i,l)=>(et(h,i+"",l),l);class nt{constructor(){tt(this,"_listeners")}addEventListener(i,l){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[i]===void 0&&(e[i]=[]),e[i].indexOf(l)===-1&&e[i].push(l)}hasEventListener(i,l){if(this._listeners===void 0)return!1;const e=this._listeners;return e[i]!==void 0&&e[i].indexOf(l)!==-1}removeEventListener(i,l){if(this._listeners===void 0)return;const y=this._listeners[i];if(y!==void 0){const g=y.indexOf(l);g!==-1&&y.splice(g,1)}}dispatchEvent(i){if(this._listeners===void 0)return;const e=this._listeners[i.type];if(e!==void 0){i.target=this;const y=e.slice(0);for(let g=0,N=y.length;g<N;g++)y[g].call(this,i);i.target=null}}}var ot=Object.defineProperty,at=(h,i,l)=>i in h?ot(h,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):h[i]=l,o=(h,i,l)=>(at(h,typeof i!="symbol"?i+"":i,l),l);const J=new qe,Le=new Qe,it=Math.cos(70*(Math.PI/180)),De=(h,i)=>(h%i+i)%i;let st=class extends nt{constructor(i,l){super(),o(this,"object"),o(this,"domElement"),o(this,"enabled",!0),o(this,"target",new O),o(this,"minDistance",0),o(this,"maxDistance",1/0),o(this,"minZoom",0),o(this,"maxZoom",1/0),o(this,"minPolarAngle",0),o(this,"maxPolarAngle",Math.PI),o(this,"minAzimuthAngle",-1/0),o(this,"maxAzimuthAngle",1/0),o(this,"enableDamping",!1),o(this,"dampingFactor",.05),o(this,"enableZoom",!0),o(this,"zoomSpeed",1),o(this,"enableRotate",!0),o(this,"rotateSpeed",1),o(this,"enablePan",!0),o(this,"panSpeed",1),o(this,"screenSpacePanning",!0),o(this,"keyPanSpeed",7),o(this,"zoomToCursor",!1),o(this,"autoRotate",!1),o(this,"autoRotateSpeed",2),o(this,"reverseOrbit",!1),o(this,"reverseHorizontalOrbit",!1),o(this,"reverseVerticalOrbit",!1),o(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),o(this,"mouseButtons",{LEFT:U.ROTATE,MIDDLE:U.DOLLY,RIGHT:U.PAN}),o(this,"touches",{ONE:Z.ROTATE,TWO:Z.DOLLY_PAN}),o(this,"target0"),o(this,"position0"),o(this,"zoom0"),o(this,"_domElementKeyEvents",null),o(this,"getPolarAngle"),o(this,"getAzimuthalAngle"),o(this,"setPolarAngle"),o(this,"setAzimuthalAngle"),o(this,"getDistance"),o(this,"getZoomScale"),o(this,"listenToKeyEvents"),o(this,"stopListenToKeyEvents"),o(this,"saveState"),o(this,"reset"),o(this,"update"),o(this,"connect"),o(this,"dispose"),o(this,"dollyIn"),o(this,"dollyOut"),o(this,"getScale"),o(this,"setScale"),this.object=i,this.domElement=l,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>p.phi,this.getAzimuthalAngle=()=>p.theta,this.setPolarAngle=t=>{let n=De(t,2*Math.PI),a=p.phi;a<0&&(a+=2*Math.PI),n<0&&(n+=2*Math.PI);let r=Math.abs(n-a);2*Math.PI-r<r&&(n<a?n+=2*Math.PI:a+=2*Math.PI),b.phi=n-a,e.update()},this.setAzimuthalAngle=t=>{let n=De(t,2*Math.PI),a=p.theta;a<0&&(a+=2*Math.PI),n<0&&(n+=2*Math.PI);let r=Math.abs(n-a);2*Math.PI-r<r&&(n<a?n+=2*Math.PI:a+=2*Math.PI),b.theta=n-a,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",ie),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(y),e.update(),u=s.NONE},this.update=(()=>{const t=new O,n=new O(0,1,0),a=new xe().setFromUnitVectors(i.up,n),r=a.clone().invert(),f=new O,_=new xe,Y=2*Math.PI;return function(){const ve=e.object.position;a.setFromUnitVectors(i.up,n),r.copy(a).invert(),t.copy(ve).sub(e.target),t.applyQuaternion(a),p.setFromVector3(t),e.autoRotate&&u===s.NONE&&ee(Se()),e.enableDamping?(p.theta+=b.theta*e.dampingFactor,p.phi+=b.phi*e.dampingFactor):(p.theta+=b.theta,p.phi+=b.phi);let S=e.minAzimuthAngle,I=e.maxAzimuthAngle;isFinite(S)&&isFinite(I)&&(S<-Math.PI?S+=Y:S>Math.PI&&(S-=Y),I<-Math.PI?I+=Y:I>Math.PI&&(I-=Y),S<=I?p.theta=Math.max(S,Math.min(I,p.theta)):p.theta=p.theta>(S+I)/2?Math.max(S,p.theta):Math.min(I,p.theta)),p.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,p.phi)),p.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(C,e.dampingFactor):e.target.add(C),e.zoomToCursor&&j||e.object.isOrthographicCamera?p.radius=oe(p.radius):p.radius=oe(p.radius*E),t.setFromSpherical(p),t.applyQuaternion(r),ve.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(b.theta*=1-e.dampingFactor,b.phi*=1-e.dampingFactor,C.multiplyScalar(1-e.dampingFactor)):(b.set(0,0,0),C.set(0,0,0));let V=!1;if(e.zoomToCursor&&j){let W=null;if(e.object instanceof le&&e.object.isPerspectiveCamera){const B=t.length();W=oe(B*E);const $=B-W;e.object.position.addScaledVector(X,$),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const B=new O(P.x,P.y,0);B.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/E)),e.object.updateProjectionMatrix(),V=!0;const $=new O(P.x,P.y,0);$.unproject(e.object),e.object.position.sub($).add(B),e.object.updateMatrixWorld(),W=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;W!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(W).add(e.object.position):(J.origin.copy(e.object.position),J.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(J.direction))<it?i.lookAt(e.target):(Le.setFromNormalAndCoplanarPoint(e.object.up,e.target),J.intersectPlane(Le,e.target))))}else e.object instanceof re&&e.object.isOrthographicCamera&&(V=E!==1,V&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/E)),e.object.updateProjectionMatrix()));return E=1,j=!1,V||f.distanceToSquared(e.object.position)>G||8*(1-_.dot(e.object.quaternion))>G?(e.dispatchEvent(y),f.copy(e.object.position),_.copy(e.object.quaternion),V=!1,!0):!1}})(),this.connect=t=>{e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",je),e.domElement.addEventListener("pointerdown",Te),e.domElement.addEventListener("pointercancel",K),e.domElement.addEventListener("wheel",Me)},this.dispose=()=>{var t,n,a,r,f,_;e.domElement&&(e.domElement.style.touchAction="auto"),(t=e.domElement)==null||t.removeEventListener("contextmenu",je),(n=e.domElement)==null||n.removeEventListener("pointerdown",Te),(a=e.domElement)==null||a.removeEventListener("pointercancel",K),(r=e.domElement)==null||r.removeEventListener("wheel",Me),(f=e.domElement)==null||f.ownerDocument.removeEventListener("pointermove",ae),(_=e.domElement)==null||_.ownerDocument.removeEventListener("pointerup",K),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",ie)};const e=this,y={type:"change"},g={type:"start"},N={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=s.NONE;const G=1e-6,p=new Ae,b=new Ae;let E=1;const C=new O,w=new T,v=new T,A=new T,x=new T,L=new T,D=new T,M=new T,m=new T,d=new T,X=new O,P=new T;let j=!1;const c=[],q={};function Se(){return 2*Math.PI/60/60*e.autoRotateSpeed}function z(){return Math.pow(.95,e.zoomSpeed)}function ee(t){e.reverseOrbit||e.reverseHorizontalOrbit?b.theta+=t:b.theta-=t}function ue(t){e.reverseOrbit||e.reverseVerticalOrbit?b.phi+=t:b.phi-=t}const he=(()=>{const t=new O;return function(a,r){t.setFromMatrixColumn(r,0),t.multiplyScalar(-a),C.add(t)}})(),de=(()=>{const t=new O;return function(a,r){e.screenSpacePanning===!0?t.setFromMatrixColumn(r,1):(t.setFromMatrixColumn(r,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(a),C.add(t)}})(),F=(()=>{const t=new O;return function(a,r){const f=e.domElement;if(f&&e.object instanceof le&&e.object.isPerspectiveCamera){const _=e.object.position;t.copy(_).sub(e.target);let Y=t.length();Y*=Math.tan(e.object.fov/2*Math.PI/180),he(2*a*Y/f.clientHeight,e.object.matrix),de(2*r*Y/f.clientHeight,e.object.matrix)}else f&&e.object instanceof re&&e.object.isOrthographicCamera?(he(a*(e.object.right-e.object.left)/e.object.zoom/f.clientWidth,e.object.matrix),de(r*(e.object.top-e.object.bottom)/e.object.zoom/f.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function te(t){e.object instanceof le&&e.object.isPerspectiveCamera||e.object instanceof re&&e.object.isOrthographicCamera?E=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Q(t){te(E/t)}function ne(t){te(E*t)}function pe(t){if(!e.zoomToCursor||!e.domElement)return;j=!0;const n=e.domElement.getBoundingClientRect(),a=t.clientX-n.left,r=t.clientY-n.top,f=n.width,_=n.height;P.x=a/f*2-1,P.y=-(r/_)*2+1,X.set(P.x,P.y,1).unproject(e.object).sub(e.object.position).normalize()}function oe(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function me(t){w.set(t.clientX,t.clientY)}function Ie(t){pe(t),M.set(t.clientX,t.clientY)}function fe(t){x.set(t.clientX,t.clientY)}function Re(t){v.set(t.clientX,t.clientY),A.subVectors(v,w).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(ee(2*Math.PI*A.x/n.clientHeight),ue(2*Math.PI*A.y/n.clientHeight)),w.copy(v),e.update()}function Ne(t){m.set(t.clientX,t.clientY),d.subVectors(m,M),d.y>0?Q(z()):d.y<0&&ne(z()),M.copy(m),e.update()}function Ce(t){L.set(t.clientX,t.clientY),D.subVectors(L,x).multiplyScalar(e.panSpeed),F(D.x,D.y),x.copy(L),e.update()}function Ye(t){pe(t),t.deltaY<0?ne(z()):t.deltaY>0&&Q(z()),e.update()}function ke(t){let n=!1;switch(t.code){case e.keys.UP:F(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:F(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:F(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:F(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function be(){if(c.length==1)w.set(c[0].pageX,c[0].pageY);else{const t=.5*(c[0].pageX+c[1].pageX),n=.5*(c[0].pageY+c[1].pageY);w.set(t,n)}}function ge(){if(c.length==1)x.set(c[0].pageX,c[0].pageY);else{const t=.5*(c[0].pageX+c[1].pageX),n=.5*(c[0].pageY+c[1].pageY);x.set(t,n)}}function Ee(){const t=c[0].pageX-c[1].pageX,n=c[0].pageY-c[1].pageY,a=Math.sqrt(t*t+n*n);M.set(0,a)}function ze(){e.enableZoom&&Ee(),e.enablePan&&ge()}function He(){e.enableZoom&&Ee(),e.enableRotate&&be()}function ye(t){if(c.length==1)v.set(t.pageX,t.pageY);else{const a=se(t),r=.5*(t.pageX+a.x),f=.5*(t.pageY+a.y);v.set(r,f)}A.subVectors(v,w).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(ee(2*Math.PI*A.x/n.clientHeight),ue(2*Math.PI*A.y/n.clientHeight)),w.copy(v)}function Pe(t){if(c.length==1)L.set(t.pageX,t.pageY);else{const n=se(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);L.set(a,r)}D.subVectors(L,x).multiplyScalar(e.panSpeed),F(D.x,D.y),x.copy(L)}function Oe(t){const n=se(t),a=t.pageX-n.x,r=t.pageY-n.y,f=Math.sqrt(a*a+r*r);m.set(0,f),d.set(0,Math.pow(m.y/M.y,e.zoomSpeed)),Q(d.y),M.copy(m)}function Fe(t){e.enableZoom&&Oe(t),e.enablePan&&Pe(t)}function Ue(t){e.enableZoom&&Oe(t),e.enableRotate&&ye(t)}function Te(t){var n,a;e.enabled!==!1&&(c.length===0&&((n=e.domElement)==null||n.ownerDocument.addEventListener("pointermove",ae),(a=e.domElement)==null||a.ownerDocument.addEventListener("pointerup",K)),We(t),t.pointerType==="touch"?Ke(t):Ze(t))}function ae(t){e.enabled!==!1&&(t.pointerType==="touch"?Ve(t):Xe(t))}function K(t){var n,a,r;Be(t),c.length===0&&((n=e.domElement)==null||n.releasePointerCapture(t.pointerId),(a=e.domElement)==null||a.ownerDocument.removeEventListener("pointermove",ae),(r=e.domElement)==null||r.ownerDocument.removeEventListener("pointerup",K)),e.dispatchEvent(N),u=s.NONE}function Ze(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case U.DOLLY:if(e.enableZoom===!1)return;Ie(t),u=s.DOLLY;break;case U.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;fe(t),u=s.PAN}else{if(e.enableRotate===!1)return;me(t),u=s.ROTATE}break;case U.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;me(t),u=s.ROTATE}else{if(e.enablePan===!1)return;fe(t),u=s.PAN}break;default:u=s.NONE}u!==s.NONE&&e.dispatchEvent(g)}function Xe(t){if(e.enabled!==!1)switch(u){case s.ROTATE:if(e.enableRotate===!1)return;Re(t);break;case s.DOLLY:if(e.enableZoom===!1)return;Ne(t);break;case s.PAN:if(e.enablePan===!1)return;Ce(t);break}}function Me(t){e.enabled===!1||e.enableZoom===!1||u!==s.NONE&&u!==s.ROTATE||(t.preventDefault(),e.dispatchEvent(g),Ye(t),e.dispatchEvent(N))}function ie(t){e.enabled===!1||e.enablePan===!1||ke(t)}function Ke(t){switch(we(t),c.length){case 1:switch(e.touches.ONE){case Z.ROTATE:if(e.enableRotate===!1)return;be(),u=s.TOUCH_ROTATE;break;case Z.PAN:if(e.enablePan===!1)return;ge(),u=s.TOUCH_PAN;break;default:u=s.NONE}break;case 2:switch(e.touches.TWO){case Z.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ze(),u=s.TOUCH_DOLLY_PAN;break;case Z.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;He(),u=s.TOUCH_DOLLY_ROTATE;break;default:u=s.NONE}break;default:u=s.NONE}u!==s.NONE&&e.dispatchEvent(g)}function Ve(t){switch(we(t),u){case s.TOUCH_ROTATE:if(e.enableRotate===!1)return;ye(t),e.update();break;case s.TOUCH_PAN:if(e.enablePan===!1)return;Pe(t),e.update();break;case s.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Fe(t),e.update();break;case s.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ue(t),e.update();break;default:u=s.NONE}}function je(t){e.enabled!==!1&&t.preventDefault()}function We(t){c.push(t)}function Be(t){delete q[t.pointerId];for(let n=0;n<c.length;n++)if(c[n].pointerId==t.pointerId){c.splice(n,1);return}}function we(t){let n=q[t.pointerId];n===void 0&&(n=new T,q[t.pointerId]=n),n.set(t.pageX,t.pageY)}function se(t){const n=t.pointerId===c[0].pointerId?c[1]:c[0];return q[n.pointerId]}this.dollyIn=(t=z())=>{ne(t),e.update()},this.dollyOut=(t=z())=>{Q(t),e.update()},this.getScale=()=>E,this.setScale=t=>{te(t),e.update()},this.getZoomScale=()=>z(),l!==void 0&&this.connect(l),this.update()}};const rt=H.forwardRef(({makeDefault:h,camera:i,regress:l,domElement:e,enableDamping:y=!0,keyEvents:g=!1,onChange:N,onStart:s,onEnd:u,...G},p)=>{const b=k(d=>d.invalidate),E=k(d=>d.camera),C=k(d=>d.gl),w=k(d=>d.events),v=k(d=>d.setEvents),A=k(d=>d.set),x=k(d=>d.get),L=k(d=>d.performance),D=i||E,M=e||w.connected||C.domElement,m=H.useMemo(()=>new st(D),[D]);return _e(()=>{m.enabled&&m.update()},-1),H.useEffect(()=>(g&&m.connect(g===!0?M:g),m.connect(M),()=>void m.dispose()),[g,M,l,m,b]),H.useEffect(()=>{const d=j=>{b(),l&&L.regress(),N&&N(j)},X=j=>{s&&s(j)},P=j=>{u&&u(j)};return m.addEventListener("change",d),m.addEventListener("start",X),m.addEventListener("end",P),()=>{m.removeEventListener("start",X),m.removeEventListener("end",P),m.removeEventListener("change",d)}},[N,s,u,m,b,v]),H.useEffect(()=>{if(h){const d=x().controls;return A({controls:m}),()=>A({controls:d})}},[h,m]),H.createElement("primitive",ce({ref:p,object:m,enableDamping:y},G))});function dt(){const h=H.useRef(null);return _e(()=>{h.current&&(h.current.rotateX(.01),h.current.rotateY(.01))}),R.jsxs(R.Fragment,{children:[R.jsx(rt,{makeDefault:!0}),R.jsx("ambientLight",{position:[2.94,-1.06,5.36],intensity:1}),R.jsx("directionalLight",{intensity:1.5,position:[0,2.22,-5.5],castShadow:!0}),R.jsx("directionalLight",{intensity:1.02,position:[0,2.32,7.2],castShadow:!0}),R.jsxs("mesh",{position:[0,.57,0],ref:h,children:[R.jsx("boxGeometry",{args:[2,2,2]}),R.jsx("meshStandardMaterial",{color:new $e(Ge.secondary500.hex)})]})]})}export{dt as default};
