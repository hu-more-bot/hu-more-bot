import{r as o,j as S,c as ae}from"./index-wDVW21gt.js";import{R as Ue,I as je,F as pe,a as le,b as N,W as Ie,B as fe,S as Be,V as w,c as De,U as ve,d as xe,e as I,M as Me,f as F,L as We,g as ue,h as He,u as Z,C as ee,E as Ne,N as Ve,i as M,j as ce,H as Ee,k as te,l as Ge,m as ke,n as $e,o as ge,p as qe,q as Xe,P as Je,r as Ye,D as Ke,s as Qe,t as Ze,v as Te}from"./Experience-BPX4IcAH.js";function V(){return V=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},V.apply(null,arguments)}const Ae=parseInt(Ue.replace(/\D+/g,"")),Le=Ae>=125?"uv1":"uv2",ye=new fe,Y=new w;class de extends je{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new pe(e,3)),this.setAttribute("uv",new pe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new le(t,6,1);return this.setAttribute("instanceStart",new N(i,3,0)),this.setAttribute("instanceEnd",new N(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new le(i,t*2,1);return this.setAttribute("instanceColorStart",new N(n,t,0)),this.setAttribute("instanceColorEnd",new N(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Ie(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fe);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ye.setFromBufferAttribute(t),this.boundingBox.union(ye))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Be),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,u=e.count;r<u;r++)Y.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Y)),Y.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Y));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Re extends de{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){const i=e.length-t,n=new Float32Array(2*i);if(t===3)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class he extends De{constructor(e){super({type:"LineMaterial",uniforms:ve.clone(ve.merge([xe.common,xe.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new I(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Ae>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const re=new F,Se=new w,_e=new w,x=new F,g=new F,A=new F,se=new w,oe=new ue,y=new We,we=new w,K=new fe,Q=new Be,L=new F;let R,W;function be(a,e,t){return L.set(0,0,-e,1).applyMatrix4(a.projectionMatrix),L.multiplyScalar(1/L.w),L.x=W/t.width,L.y=W/t.height,L.applyMatrix4(a.projectionMatrixInverse),L.multiplyScalar(1/L.w),Math.abs(Math.max(L.x,L.y))}function et(a,e){const t=a.matrixWorld,i=a.geometry,n=i.attributes.instanceStart,r=i.attributes.instanceEnd,u=Math.min(i.instanceCount,n.count);for(let s=0,d=u;s<d;s++){y.start.fromBufferAttribute(n,s),y.end.fromBufferAttribute(r,s),y.applyMatrix4(t);const f=new w,h=new w;R.distanceSqToSegment(y.start,y.end,h,f),h.distanceTo(f)<W*.5&&e.push({point:h,pointOnLine:f,distance:R.origin.distanceTo(h),object:a,face:null,faceIndex:s,uv:null,[Le]:null})}}function tt(a,e,t){const i=e.projectionMatrix,r=a.material.resolution,u=a.matrixWorld,s=a.geometry,d=s.attributes.instanceStart,f=s.attributes.instanceEnd,h=Math.min(s.instanceCount,d.count),c=-e.near;R.at(1,A),A.w=1,A.applyMatrix4(e.matrixWorldInverse),A.applyMatrix4(i),A.multiplyScalar(1/A.w),A.x*=r.x/2,A.y*=r.y/2,A.z=0,se.copy(A),oe.multiplyMatrices(e.matrixWorldInverse,u);for(let v=0,U=h;v<U;v++){if(x.fromBufferAttribute(d,v),g.fromBufferAttribute(f,v),x.w=1,g.w=1,x.applyMatrix4(oe),g.applyMatrix4(oe),x.z>c&&g.z>c)continue;if(x.z>c){const l=x.z-g.z,p=(x.z-c)/l;x.lerp(g,p)}else if(g.z>c){const l=g.z-x.z,p=(g.z-c)/l;g.lerp(x,p)}x.applyMatrix4(i),g.applyMatrix4(i),x.multiplyScalar(1/x.w),g.multiplyScalar(1/g.w),x.x*=r.x/2,x.y*=r.y/2,g.x*=r.x/2,g.y*=r.y/2,y.start.copy(x),y.start.z=0,y.end.copy(g),y.end.z=0;const m=y.closestPointToPointParameter(se,!0);y.at(m,we);const T=He.lerp(x.z,g.z,m),C=T>=-1&&T<=1,P=se.distanceTo(we)<W*.5;if(C&&P){y.start.fromBufferAttribute(d,v),y.end.fromBufferAttribute(f,v),y.start.applyMatrix4(u),y.end.applyMatrix4(u);const l=new w,p=new w;R.distanceSqToSegment(y.start,y.end,p,l),t.push({point:p,pointOnLine:l,distance:R.origin.distanceTo(p),object:a,face:null,faceIndex:v,uv:null,[Le]:null})}}}class Ce extends Me{constructor(e=new de,t=new he({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let u=0,s=0,d=t.count;u<d;u++,s+=2)Se.fromBufferAttribute(t,u),_e.fromBufferAttribute(i,u),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Se.distanceTo(_e);const r=new le(n,2,1);return e.setAttribute("instanceDistanceStart",new N(r,1,0)),e.setAttribute("instanceDistanceEnd",new N(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,n=e.camera;n===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;R=e.ray;const u=this.matrixWorld,s=this.geometry,d=this.material;W=d.linewidth+r,s.boundingSphere===null&&s.computeBoundingSphere(),Q.copy(s.boundingSphere).applyMatrix4(u);let f;if(i)f=W*.5;else{const c=Math.max(n.near,Q.distanceToPoint(R.origin));f=be(n,c,d.resolution)}if(Q.radius+=f,R.intersectsSphere(Q)===!1)return;s.boundingBox===null&&s.computeBoundingBox(),K.copy(s.boundingBox).applyMatrix4(u);let h;if(i)h=W*.5;else{const c=Math.max(n.near,K.distanceToPoint(R.origin));h=be(n,c,d.resolution)}K.expandByScalar(h),R.intersectsBox(K)!==!1&&(i?et(this,t):tt(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(re),this.material.uniforms.resolution.value.set(re.z,re.w))}}class nt extends Ce{constructor(e=new Re,t=new he({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const it=o.forwardRef(function({points:e,color:t=16777215,vertexColors:i,linewidth:n,lineWidth:r,segments:u,dashed:s,...d},f){var h,c;const v=Z(C=>C.size),U=o.useMemo(()=>u?new Ce:new nt,[u]),[E]=o.useState(()=>new he),m=(i==null||(h=i[0])==null?void 0:h.length)===4?4:3,T=o.useMemo(()=>{const C=u?new de:new Re,P=e.map(l=>{const p=Array.isArray(l);return l instanceof w||l instanceof F?[l.x,l.y,l.z]:l instanceof I?[l.x,l.y,0]:p&&l.length===3?[l[0],l[1],l[2]]:p&&l.length===2?[l[0],l[1],0]:l});if(C.setPositions(P.flat()),i){t=16777215;const l=i.map(p=>p instanceof ee?p.toArray():p);C.setColors(l.flat(),m)}return C},[e,u,i,m]);return o.useLayoutEffect(()=>{U.computeLineDistances()},[e,U]),o.useLayoutEffect(()=>{s?E.defines.USE_DASH="":delete E.defines.USE_DASH,E.needsUpdate=!0},[s,E]),o.useEffect(()=>()=>{T.dispose(),E.dispose()},[T]),o.createElement("primitive",V({object:U,ref:f},d),o.createElement("primitive",{object:T,attach:"geometry"}),o.createElement("primitive",V({object:E,attach:"material",color:t,vertexColors:!!i,resolution:[v.width,v.height],linewidth:(c=n??r)!==null&&c!==void 0?c:1,dashed:s,transparent:m===4},d)))}),rt=()=>parseInt(Ue.replace(/\D+/g,"")),st=rt(),ot=o.forwardRef(({threshold:a=15,geometry:e,...t},i)=>{const n=o.useRef(null);o.useImperativeHandle(i,()=>n.current,[]);const r=o.useMemo(()=>[0,0,0,1,0,0],[]),u=o.useRef(),s=o.useRef();return o.useLayoutEffect(()=>{const d=n.current.parent,f=e??(d==null?void 0:d.geometry);if(!f||u.current===f&&s.current===a)return;u.current=f,s.current=a;const c=new Ne(f,a).attributes.position.array;n.current.geometry.setPositions(c),n.current.geometry.attributes.instanceStart.needsUpdate=!0,n.current.geometry.attributes.instanceEnd.needsUpdate=!0,n.current.computeLineDistances()}),o.createElement(it,V({segments:!0,points:r,ref:n,raycast:()=>null},t))});class at extends De{constructor(e=new I){super({uniforms:{inputBuffer:new M(null),depthBuffer:new M(null),resolution:new M(new I),texelSize:new M(new I),halfTexelSize:new M(new I),kernel:new M(0),scale:new M(1),cameraNear:new M(0),cameraFar:new M(1),minDepthThreshold:new M(0),maxDepthThreshold:new M(1),depthScale:new M(0),depthToBlurRatioBias:new M(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${st>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:Ve,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class lt{constructor({gl:e,resolution:t,width:i=500,height:n=500,minDepthThreshold:r=0,maxDepthThreshold:u=1,depthScale:s=0,depthToBlurRatioBias:d=.25}){this.renderToScreen=!1,this.renderTargetA=new ce(t,t,{minFilter:te,magFilter:te,stencilBuffer:!1,depthBuffer:!1,type:Ee}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new at,this.convolutionMaterial.setTexelSize(1/i,1/n),this.convolutionMaterial.setResolution(new I(i,n)),this.scene=new Ge,this.camera=new ke,this.convolutionMaterial.uniforms.minDepthThreshold.value=r,this.convolutionMaterial.uniforms.maxDepthThreshold.value=u,this.convolutionMaterial.uniforms.depthScale.value=s,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=d,this.convolutionMaterial.defines.USE_DEPTH=s>0;const f=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),h=new Float32Array([0,0,2,0,0,2]),c=new $e;c.setAttribute("position",new ge(f,3)),c.setAttribute("uv",new ge(h,2)),this.screen=new Me(c,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,i){const n=this.scene,r=this.camera,u=this.renderTargetA,s=this.renderTargetB;let d=this.convolutionMaterial,f=d.uniforms;f.depthBuffer.value=t.depthTexture;const h=d.kernel;let c=t,v,U,E;for(U=0,E=h.length-1;U<E;++U)v=(U&1)===0?u:s,f.kernel.value=h[U],f.inputBuffer.value=c.texture,e.setRenderTarget(v),e.render(n,r),c=v;f.kernel.value=h[U],f.inputBuffer.value=c.texture,e.setRenderTarget(this.renderToScreen?null:i),e.render(n,r)}}let ut=class extends qe{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}};const ct=o.forwardRef(({mixBlur:a=0,mixStrength:e=1,resolution:t=256,blur:i=[0,0],minDepthThreshold:n=.9,maxDepthThreshold:r=1,depthScale:u=0,depthToBlurRatioBias:s=.25,mirror:d=0,distortion:f=1,mixContrast:h=1,distortionMap:c,reflectorOffset:v=0,...U},E)=>{Xe({MeshReflectorMaterialImpl:ut});const m=Z(({gl:B})=>B),T=Z(({camera:B})=>B),C=Z(({scene:B})=>B);i=Array.isArray(i)?i:[i,i];const P=i[0]+i[1]>0,l=o.useRef(null);o.useImperativeHandle(E,()=>l.current,[]);const[p]=o.useState(()=>new Je),[O]=o.useState(()=>new w),[j]=o.useState(()=>new w),[ne]=o.useState(()=>new w),[G]=o.useState(()=>new ue),[q]=o.useState(()=>new w(0,0,-1)),[z]=o.useState(()=>new F),[k]=o.useState(()=>new w),[X]=o.useState(()=>new w),[$]=o.useState(()=>new F),[H]=o.useState(()=>new ue),[D]=o.useState(()=>new Ye),ze=o.useCallback(()=>{var B;const _=l.current.parent||((B=l.current)==null?void 0:B.__r3f.parent);if(!_||(j.setFromMatrixPosition(_.matrixWorld),ne.setFromMatrixPosition(T.matrixWorld),G.extractRotation(_.matrixWorld),O.set(0,0,1),O.applyMatrix4(G),j.addScaledVector(O,v),k.subVectors(j,ne),k.dot(O)>0))return;k.reflect(O).negate(),k.add(j),G.extractRotation(T.matrixWorld),q.set(0,0,-1),q.applyMatrix4(G),q.add(ne),X.subVectors(j,q),X.reflect(O).negate(),X.add(j),D.position.copy(k),D.up.set(0,1,0),D.up.applyMatrix4(G),D.up.reflect(O),D.lookAt(X),D.far=T.far,D.updateMatrixWorld(),D.projectionMatrix.copy(T.projectionMatrix),H.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),H.multiply(D.projectionMatrix),H.multiply(D.matrixWorldInverse),H.multiply(_.matrixWorld),p.setFromNormalAndCoplanarPoint(O,j),p.applyMatrix4(D.matrixWorldInverse),z.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const b=D.projectionMatrix;$.x=(Math.sign(z.x)+b.elements[8])/b.elements[0],$.y=(Math.sign(z.y)+b.elements[9])/b.elements[5],$.z=-1,$.w=(1+b.elements[10])/b.elements[14],z.multiplyScalar(2/z.dot($)),b.elements[2]=z.x,b.elements[6]=z.y,b.elements[10]=z.z+1,b.elements[14]=z.w},[T,v]),[me,Pe,Oe,J]=o.useMemo(()=>{const B={minFilter:te,magFilter:te,type:Ee},_=new ce(t,t,B);_.depthBuffer=!0,_.depthTexture=new Ke(t,t),_.depthTexture.format=Qe,_.depthTexture.type=Ze;const b=new ce(t,t,B),ie=new lt({gl:m,resolution:t,width:i[0],height:i[1],minDepthThreshold:n,maxDepthThreshold:r,depthScale:u,depthToBlurRatioBias:s}),Fe={mirror:d,textureMatrix:H,mixBlur:a,tDiffuse:_.texture,tDepth:_.depthTexture,tDiffuseBlur:b.texture,hasBlur:P,mixStrength:e,minDepthThreshold:n,maxDepthThreshold:r,depthScale:u,depthToBlurRatioBias:s,distortion:f,distortionMap:c,mixContrast:h,"defines-USE_BLUR":P?"":void 0,"defines-USE_DEPTH":u>0?"":void 0,"defines-USE_DISTORTION":c?"":void 0};return[_,b,ie,Fe]},[m,i,H,t,d,P,a,e,n,r,u,s,f,c,h]);return Te(()=>{var B;const _=l.current.parent||((B=l.current)==null?void 0:B.__r3f.parent);if(!_)return;_.visible=!1;const b=m.xr.enabled,ie=m.shadowMap.autoUpdate;ze(),m.xr.enabled=!1,m.shadowMap.autoUpdate=!1,m.setRenderTarget(me),m.state.buffers.depth.setMask(!0),m.autoClear||m.clear(),m.render(C,D),P&&Oe.render(m,me,Pe),m.xr.enabled=b,m.shadowMap.autoUpdate=ie,_.visible=!0,m.setRenderTarget(null)}),o.createElement("meshReflectorMaterialImpl",V({attach:"material",key:"key"+J["defines-USE_BLUR"]+J["defines-USE_DEPTH"]+J["defines-USE_DISTORTION"],ref:l},J,U))});function ft(){return S.jsx(S.Fragment,{children:S.jsxs("mesh",{rotation:[Math.PI/-2,0,0],position:[0,-2,-7.5],children:[S.jsx("circleGeometry",{args:[4,40]}),S.jsx(ct,{blur:300,mixBlur:10,mixStrength:1.1,mixContrast:1.6,resolution:40,mirror:.3,depthScale:0,minDepthThreshold:.8,maxDepthThreshold:1,depthToBlurRatioBias:.25,reflectorOffset:.2,color:new ee(ae.surface300.hex)}),S.jsx(ot,{lineWidth:3,color:new ee(ae.surface50.hex)})]})})}function dt(){const a=o.useRef(null);return Te(()=>{a.current&&a.current.rotateY(.01)}),S.jsx(S.Fragment,{children:S.jsxs("mesh",{position:[0,-.5,-7.5],ref:a,children:[S.jsx("boxGeometry",{args:[2,2,2]}),S.jsx("meshStandardMaterial",{color:new ee(ae.secondary500.hex)})]})})}function vt(){return S.jsxs(S.Fragment,{children:[S.jsx("directionalLight",{position:[0,1.5,0],rotation:[Math.PI/-6,0,0],intensity:2}),S.jsx("ambientLight",{position:[0,0,0],intensity:1}),S.jsx(dt,{}),S.jsx(ft,{})]})}export{vt as default};
