import{r as a,j as n,c as Y}from"./index-DAbA4Prm.js";import{R as ie,S as ne,V as P,N as oe,U as h,W as L,H as J,L as O,a as se,C as le,B as ue,b as G,M as he,c as fe,e as me,u as N,P as ce,d as R,f as q,g as X,h as ve,D as de,i as pe,j as xe,k as K,l as Q}from"./Experience-CLYNwW1L.js";function H(){return H=Object.assign?Object.assign.bind():function(f){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(f[r]=t[r])}return f},H.apply(null,arguments)}const ge=()=>parseInt(ie.replace(/\D+/g,"")),_e=ge();class De extends ne{constructor(e=new P){super({uniforms:{inputBuffer:new h(null),depthBuffer:new h(null),resolution:new h(new P),texelSize:new h(new P),halfTexelSize:new h(new P),kernel:new h(0),scale:new h(1),cameraNear:new h(0),cameraFar:new h(1),minDepthThreshold:new h(0),maxDepthThreshold:new h(1),depthScale:new h(0),depthToBlurRatioBias:new h(.25)},fragmentShader:`#include <common>
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
          #include <${_e>=154?"colorspace_fragment":"encodings_fragment"}>
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
        }`,blending:oe,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class Se{constructor({gl:e,resolution:t,width:r=500,height:v=500,minDepthThreshold:p=0,maxDepthThreshold:x=1,depthScale:g=0,depthToBlurRatioBias:T=.25}){this.renderToScreen=!1,this.renderTargetA=new L(t,t,{minFilter:O,magFilter:O,stencilBuffer:!1,depthBuffer:!1,type:J}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new De,this.convolutionMaterial.setTexelSize(1/r,1/v),this.convolutionMaterial.setResolution(new P(r,v)),this.scene=new se,this.camera=new le,this.convolutionMaterial.uniforms.minDepthThreshold.value=p,this.convolutionMaterial.uniforms.maxDepthThreshold.value=x,this.convolutionMaterial.uniforms.depthScale.value=g,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=T,this.convolutionMaterial.defines.USE_DEPTH=g>0;const c=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),_=new Float32Array([0,0,2,0,0,2]),m=new ue;m.setAttribute("position",new G(c,3)),m.setAttribute("uv",new G(_,2)),this.screen=new he(m,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){const v=this.scene,p=this.camera,x=this.renderTargetA,g=this.renderTargetB;let T=this.convolutionMaterial,c=T.uniforms;c.depthBuffer.value=t.depthTexture;const _=T.kernel;let m=t,M,D,E;for(D=0,E=_.length-1;D<E;++D)M=(D&1)===0?x:g,c.kernel.value=_[D],c.inputBuffer.value=m.texture,e.setRenderTarget(M),e.render(v,p),m=M;c.kernel.value=_[D],c.inputBuffer.value=m.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(v,p)}}let Te=class extends fe{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}};const Be=a.forwardRef(({mixBlur:f=0,mixStrength:e=1,resolution:t=256,blur:r=[0,0],minDepthThreshold:v=.9,maxDepthThreshold:p=1,depthScale:x=0,depthToBlurRatioBias:g=.25,mirror:T=0,distortion:c=1,mixContrast:_=1,distortionMap:m,reflectorOffset:M=0,...D},E)=>{me({MeshReflectorMaterialImpl:Te});const o=N(({gl:l})=>l),F=N(({camera:l})=>l),Z=N(({scene:l})=>l);r=Array.isArray(r)?r:[r,r];const A=r[0]+r[1]>0,U=a.useRef(null);a.useImperativeHandle(E,()=>U.current,[]);const[w]=a.useState(()=>new ce),[S]=a.useState(()=>new R),[B]=a.useState(()=>new R),[V]=a.useState(()=>new R),[b]=a.useState(()=>new q),[z]=a.useState(()=>new R(0,0,-1)),[d]=a.useState(()=>new X),[j]=a.useState(()=>new R),[k]=a.useState(()=>new R),[C]=a.useState(()=>new X),[y]=a.useState(()=>new q),[u]=a.useState(()=>new ve),ee=a.useCallback(()=>{var l;const i=U.current.parent||((l=U.current)==null?void 0:l.__r3f.parent);if(!i||(B.setFromMatrixPosition(i.matrixWorld),V.setFromMatrixPosition(F.matrixWorld),b.extractRotation(i.matrixWorld),S.set(0,0,1),S.applyMatrix4(b),B.addScaledVector(S,M),j.subVectors(B,V),j.dot(S)>0))return;j.reflect(S).negate(),j.add(B),b.extractRotation(F.matrixWorld),z.set(0,0,-1),z.applyMatrix4(b),z.add(V),k.subVectors(B,z),k.reflect(S).negate(),k.add(B),u.position.copy(j),u.up.set(0,1,0),u.up.applyMatrix4(b),u.up.reflect(S),u.lookAt(k),u.far=F.far,u.updateMatrixWorld(),u.projectionMatrix.copy(F.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(u.projectionMatrix),y.multiply(u.matrixWorldInverse),y.multiply(i.matrixWorld),w.setFromNormalAndCoplanarPoint(S,B),w.applyMatrix4(u.matrixWorldInverse),d.set(w.normal.x,w.normal.y,w.normal.z,w.constant);const s=u.projectionMatrix;C.x=(Math.sign(d.x)+s.elements[8])/s.elements[0],C.y=(Math.sign(d.y)+s.elements[9])/s.elements[5],C.z=-1,C.w=(1+s.elements[10])/s.elements[14],d.multiplyScalar(2/d.dot(C)),s.elements[2]=d.x,s.elements[6]=d.y,s.elements[10]=d.z+1,s.elements[14]=d.w},[F,M]),[$,te,re,I]=a.useMemo(()=>{const l={minFilter:O,magFilter:O,type:J},i=new L(t,t,l);i.depthBuffer=!0,i.depthTexture=new de(t,t),i.depthTexture.format=pe,i.depthTexture.type=xe;const s=new L(t,t,l),W=new Se({gl:o,resolution:t,width:r[0],height:r[1],minDepthThreshold:v,maxDepthThreshold:p,depthScale:x,depthToBlurRatioBias:g}),ae={mirror:T,textureMatrix:y,mixBlur:f,tDiffuse:i.texture,tDepth:i.depthTexture,tDiffuseBlur:s.texture,hasBlur:A,mixStrength:e,minDepthThreshold:v,maxDepthThreshold:p,depthScale:x,depthToBlurRatioBias:g,distortion:c,distortionMap:m,mixContrast:_,"defines-USE_BLUR":A?"":void 0,"defines-USE_DEPTH":x>0?"":void 0,"defines-USE_DISTORTION":m?"":void 0};return[i,s,W,ae]},[o,r,y,t,T,A,f,e,v,p,x,g,c,m,_]);return K(()=>{var l;const i=U.current.parent||((l=U.current)==null?void 0:l.__r3f.parent);if(!i)return;i.visible=!1;const s=o.xr.enabled,W=o.shadowMap.autoUpdate;ee(),o.xr.enabled=!1,o.shadowMap.autoUpdate=!1,o.setRenderTarget($),o.state.buffers.depth.setMask(!0),o.autoClear||o.clear(),o.render(Z,u),A&&re.render(o,$,te),o.xr.enabled=s,o.shadowMap.autoUpdate=W,i.visible=!0,o.setRenderTarget(null)}),a.createElement("meshReflectorMaterialImpl",H({attach:"material",key:"key"+I["defines-USE_BLUR"]+I["defines-USE_DEPTH"]+I["defines-USE_DISTORTION"],ref:U},I,D))});function Me(){return n.jsx(n.Fragment,{children:n.jsxs("mesh",{rotation:[Math.PI/-2,0,0],position:[0,-2,-7.5],children:[n.jsx("circleGeometry",{args:[4,40]}),n.jsx(Be,{blur:[20,20],mixBlur:0,mixStrength:1.1,mixContrast:1.6,resolution:1024,mirror:.3,depthScale:0,minDepthThreshold:.8,maxDepthThreshold:1,depthToBlurRatioBias:.25,reflectorOffset:.2,color:new Q(Y.surface300.hex)})]})})}function Ue(){const f=a.useRef(null);return K(()=>{f.current&&f.current.rotateY(.01)}),n.jsx(n.Fragment,{children:n.jsxs("mesh",{position:[0,-.5,-7.5],ref:f,children:[n.jsx("boxGeometry",{args:[2,2,2]}),n.jsx("meshStandardMaterial",{color:new Q(Y.secondary500.hex)})]})})}function Fe(){return n.jsxs(n.Fragment,{children:[n.jsx("directionalLight",{position:[0,1.5,0],rotation:[Math.PI/-6,0,0],intensity:2}),n.jsx("ambientLight",{position:[0,0,0],intensity:1}),n.jsx(Ue,{}),n.jsx(Me,{})]})}export{Fe as default};
