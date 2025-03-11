import{r as M,j as D,c as Ve}from"./index-_sQrt--0.js";import{R as ht,T as wt,a as Le,b as Ct,L as mt,c as le,F as Ee,M as k,V as X,C as Q,S as Ot,P as Pt,D as Kt,d as te,e as R,I as Nt,Q as pt,f as Qt,O as gt,g as kt,h as jt,B as $,i as Xt,j as Et,N as Yt,k as Wt,l as Zt,m as re,n as Vt,o as Je,p as zt,q as qt,r as $t,s as Ge,t as en,u as Pe,v as tn,w as Ae,x as nn,y as Ke,z as sn,A as Ne,E as rn,G as on,H as an,J as cn,K as Re,U as Mt,W as Ft,X as An,Y as ln,Z as un,_ as Bn,$ as dn,a0 as Dt,a1 as z,a2 as ze,a3 as qe,a4 as $e,a5 as et,a6 as fn,a7 as hn,a8 as Fe,a9 as Qe,aa as Cn,ab as tt,ac as Ue,ad as mn,ae as Gt,af as nt,ag as st,ah as Z,ai as pn,aj as ge,ak as gn,al as ke,am as En,an as _,ao as _e,ap as Rt,aq as Mn,ar as Fn,as as Dn,at as Gn,au as Rn,av as Tn,aw as In,ax as Tt}from"./Experience-ByPosONy.js";function ie(){return ie=Object.assign?Object.assign.bind():function(u){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(u[r]=t[r])}return u},ie.apply(null,arguments)}const je=parseInt(ht.replace(/\D+/g,"")),It=je>=125?"uv1":"uv2";function rt(u,e){if(e===wt)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),u;if(e===Le||e===Ct){let t=u.getIndex();if(t===null){const i=[],a=u.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)i.push(o);u.setIndex(i),t=u.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),u}const r=t.count-2,n=[];if(t)if(e===Le)for(let i=1;i<=r;i++)n.push(t.getX(0)),n.push(t.getX(i)),n.push(t.getX(i+1));else for(let i=0;i<r;i++)i%2===0?(n.push(t.getX(i)),n.push(t.getX(i+1)),n.push(t.getX(i+2))):(n.push(t.getX(i+2)),n.push(t.getX(i+1)),n.push(t.getX(i)));n.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=u.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),u}function Me(u){if(typeof TextDecoder<"u")return new TextDecoder().decode(u);let e="";for(let t=0,r=u.length;t<r;t++)e+=String.fromCharCode(u[t]);try{return decodeURIComponent(escape(e))}catch{return e}}const q="srgb",Y="srgb-linear",it=3001,vn=3e3;class Xe extends mt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yn(t)}),this.register(function(t){return new Ln(t)}),this.register(function(t){return new Qn(t)}),this.register(function(t){return new kn(t)}),this.register(function(t){return new jn(t)}),this.register(function(t){return new Un(t)}),this.register(function(t){return new _n(t)}),this.register(function(t){return new wn(t)}),this.register(function(t){return new On(t)}),this.register(function(t){return new Sn(t)}),this.register(function(t){return new Pn(t)}),this.register(function(t){return new Jn(t)}),this.register(function(t){return new Nn(t)}),this.register(function(t){return new Kn(t)}),this.register(function(t){return new Hn(t)}),this.register(function(t){return new Xn(t)}),this.register(function(t){return new Yn(t)})}load(e,t,r,n){const s=this;let i;if(this.resourcePath!=="")i=this.resourcePath;else if(this.path!==""){const c=le.extractUrlBase(e);i=le.resolveURL(c,this.path)}else i=le.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},o=new Ee(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{s.parse(c,i,function(l){t(l),s.manager.itemEnd(e)},a)}catch(l){a(l)}},r,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,n){let s;const i={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Me(new Uint8Array(e.slice(0,4)))===vt){try{i[F.KHR_BINARY_GLTF]=new Wn(e)}catch(l){n&&n(l);return}s=JSON.parse(i[F.KHR_BINARY_GLTF].content)}else s=JSON.parse(Me(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const o=new as(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});o.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const l=this.pluginCallbacks[c](o);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,i[l.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const l=s.extensionsUsed[c],A=s.extensionsRequired||[];switch(l){case F.KHR_MATERIALS_UNLIT:i[l]=new bn;break;case F.KHR_DRACO_MESH_COMPRESSION:i[l]=new Zn(s,this.dracoLoader);break;case F.KHR_TEXTURE_TRANSFORM:i[l]=new Vn;break;case F.KHR_MESH_QUANTIZATION:i[l]=new zn;break;default:A.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}o.setExtensions(i),o.setPlugins(a),o.parse(r,n)}parseAsync(e,t){const r=this;return new Promise(function(n,s){r.parse(e,t,n,s)})}}function xn(){let u={};return{get:function(e){return u[e]},add:function(e,t){u[e]=t},remove:function(e){delete u[e]},removeAll:function(){u={}}}}const F={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Hn{constructor(e){this.parser=e,this.name=F.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,n=t.length;r<n;r++){const s=t[r];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let n=t.cache.get(r);if(n)return n;const s=t.json,o=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const l=new Q(16777215);o.color!==void 0&&l.setRGB(o.color[0],o.color[1],o.color[2],Y);const A=o.range!==void 0?o.range:0;switch(o.type){case"directional":c=new Kt(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pt(l),c.distance=A;break;case"spot":c=new Ot(l),c.distance=A,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,c.angle=o.spot.outerConeAngle,c.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return c.position.set(0,0,0),c.decay=2,j(c,o),o.intensity!==void 0&&(c.intensity=o.intensity),c.name=t.createUniqueName(o.name||"light_"+e),n=Promise.resolve(c),t.cache.add(r,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,s=r.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(o){return r._getNodeRef(t.cache,a,o)})}}class bn{constructor(){this.name=F.KHR_MATERIALS_UNLIT}getMaterialType(){return Ae}extendParams(e,t,r){const n=[];e.color=new Q(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const i=s.baseColorFactor;e.color.setRGB(i[0],i[1],i[2],Y),e.opacity=i[3]}s.baseColorTexture!==void 0&&n.push(r.assignTexture(e,"map",s.baseColorTexture,q))}return Promise.all(n)}}class Sn{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class yn{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(r.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(r.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(r.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(a,a)}return Promise.all(s)}}class Ln{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_DISPERSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Jn{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(r.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(r.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class Un{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Q(0,0,0),t.sheenRoughness=0,t.sheen=1;const i=n.extensions[this.name];if(i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Y)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(r.assignTexture(t,"sheenColorMap",i.sheenColorTexture,q)),i.sheenRoughnessTexture!==void 0&&s.push(r.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class _n{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(r.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class wn{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(r.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new Q().setRGB(a[0],a[1],a[2],Y),Promise.all(s)}}class On{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Pn{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(r.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new Q().setRGB(a[0],a[1],a[2],Y),i.specularColorTexture!==void 0&&s.push(r.assignTexture(t,"specularColorMap",i.specularColorTexture,q)),Promise.all(s)}}class Kn{constructor(e){this.parser=e,this.name=F.EXT_MATERIALS_BUMP}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(r.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class Nn{constructor(e){this.parser=e,this.name=F.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:k}extendMaterialParams(e,t){const r=this.parser,n=r.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],i=n.extensions[this.name];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(r.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class Qn{constructor(e){this.parser=e,this.name=F.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,n=r.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],i=t.options.ktx2Loader;if(!i){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,i)}}class kn{constructor(e){this.parser=e,this.name=F.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,n=r.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const i=s.extensions[t],a=n.images[i.source];let o=r.textureLoader;if(a.uri){const c=r.options.manager.getHandler(a.uri);c!==null&&(o=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,i.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jn{constructor(e){this.parser=e,this.name=F.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,n=r.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const i=s.extensions[t],a=n.images[i.source];let o=r.textureLoader;if(a.uri){const c=r.options.manager.getHandler(a.uri);c!==null&&(o=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,i.source,o);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Xn{constructor(e){this.name=F.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const n=r.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const o=n.byteOffset||0,c=n.byteLength||0,l=n.count,A=n.byteStride,B=new Uint8Array(a,o,c);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(l,A,B,n.mode,n.filter).then(function(d){return d.buffer}):i.ready.then(function(){const d=new ArrayBuffer(l*A);return i.decodeGltfBuffer(new Uint8Array(d),l,A,B,n.mode,n.filter),d})})}else return null}}class Yn{constructor(e){this.name=F.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const n=t.meshes[r.mesh];for(const c of n.primitives)if(c.mode!==w.TRIANGLES&&c.mode!==w.TRIANGLE_STRIP&&c.mode!==w.TRIANGLE_FAN&&c.mode!==void 0)return null;const i=r.extensions[this.name].attributes,a=[],o={};for(const c in i)a.push(this.parser.getDependency("accessor",i[c]).then(l=>(o[c]=l,o[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const l=c.pop(),A=l.isGroup?l.children:[l],B=c[0].count,d=[];for(const f of A){const h=new te,C=new R,p=new pt,E=new R(1,1,1),m=new Nt(f.geometry,f.material,B);for(let g=0;g<B;g++)o.TRANSLATION&&C.fromBufferAttribute(o.TRANSLATION,g),o.ROTATION&&p.fromBufferAttribute(o.ROTATION,g),o.SCALE&&E.fromBufferAttribute(o.SCALE,g),m.setMatrixAt(g,h.compose(C,p,E));for(const g in o)if(g==="_COLOR_0"){const G=o[g];m.instanceColor=new Qt(G.array,G.itemSize,G.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&f.geometry.setAttribute(g,o[g]);gt.prototype.copy.call(m,f),this.parser.assignFinalMaterial(m),d.push(m)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}}const vt="glTF",ce=12,ot={JSON:1313821514,BIN:5130562};class Wn{constructor(e){this.name=F.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ce);if(this.header={magic:Me(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vt)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ce,n=new DataView(e,ce);let s=0;for(;s<r;){const i=n.getUint32(s,!0);s+=4;const a=n.getUint32(s,!0);if(s+=4,a===ot.JSON){const o=new Uint8Array(e,ce+s,i);this.content=Me(o)}else if(a===ot.BIN){const o=ce+s;this.body=e.slice(o,o+i)}s+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Zn{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=F.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,i=e.extensions[this.name].attributes,a={},o={},c={};for(const l in i){const A=we[l]||l.toLowerCase();a[A]=i[l]}for(const l in e.attributes){const A=we[l]||l.toLowerCase();if(i[l]!==void 0){const B=r.accessors[e.attributes[l]],d=se[B.componentType];c[A]=d.name,o[A]=B.normalized===!0}}return t.getDependency("bufferView",s).then(function(l){return new Promise(function(A,B){n.decodeDracoFile(l,function(d){for(const f in d.attributes){const h=d.attributes[f],C=o[f];C!==void 0&&(h.normalized=C)}A(d)},a,c,Y,B)})})}}class Vn{constructor(){this.name=F.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zn{constructor(){this.name=F.KHR_MESH_QUANTIZATION}}class xt extends hn{constructor(e,t,r,n){super(e,t,r,n)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let i=0;i!==n;i++)t[i]=r[s+i];return t}interpolate_(e,t,r,n){const s=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=a*2,c=a*3,l=n-t,A=(r-t)/l,B=A*A,d=B*A,f=e*c,h=f-c,C=-2*d+3*B,p=d-B,E=1-C,m=p-B+A;for(let g=0;g!==a;g++){const G=i[h+g+a],T=i[h+g+o]*l,b=i[f+g+a],O=i[f+g]*l;s[g]=E*G+m*T+C*b+p*O}return s}}const qn=new pt;class $n extends xt{interpolate_(e,t,r,n){const s=super.interpolate_(e,t,r,n);return qn.fromArray(s).normalize().toArray(s),s}}const w={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},se={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},at={9728:Vt,9729:re,9984:Zt,9985:Wt,9986:Yt,9987:Et},ct={33071:qt,33648:zt,10497:Je},Te={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},we={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",...je>=152?{TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3"}:{TEXCOORD_0:"uv",TEXCOORD_1:"uv2"},COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},W={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},es={CUBICSPLINE:void 0,LINEAR:Dt,STEP:dn},Ie={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ts(u){return u.DefaultMaterial===void 0&&(u.DefaultMaterial=new Pe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),u.DefaultMaterial}function V(u,e,t){for(const r in t.extensions)u[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function j(u,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(u.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ns(u,e,t){let r=!1,n=!1,s=!1;for(let c=0,l=e.length;c<l;c++){const A=e[c];if(A.POSITION!==void 0&&(r=!0),A.NORMAL!==void 0&&(n=!0),A.COLOR_0!==void 0&&(s=!0),r&&n&&s)break}if(!r&&!n&&!s)return Promise.resolve(u);const i=[],a=[],o=[];for(let c=0,l=e.length;c<l;c++){const A=e[c];if(r){const B=A.POSITION!==void 0?t.getDependency("accessor",A.POSITION):u.attributes.position;i.push(B)}if(n){const B=A.NORMAL!==void 0?t.getDependency("accessor",A.NORMAL):u.attributes.normal;a.push(B)}if(s){const B=A.COLOR_0!==void 0?t.getDependency("accessor",A.COLOR_0):u.attributes.color;o.push(B)}}return Promise.all([Promise.all(i),Promise.all(a),Promise.all(o)]).then(function(c){const l=c[0],A=c[1],B=c[2];return r&&(u.morphAttributes.position=l),n&&(u.morphAttributes.normal=A),s&&(u.morphAttributes.color=B),u.morphTargetsRelative=!0,u})}function ss(u,e){if(u.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)u.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(u.morphTargetInfluences.length===t.length){u.morphTargetDictionary={};for(let r=0,n=t.length;r<n;r++)u.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rs(u){let e;const t=u.extensions&&u.extensions[F.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ve(t.attributes):e=u.indices+":"+ve(u.attributes)+":"+u.mode,u.targets!==void 0)for(let r=0,n=u.targets.length;r<n;r++)e+=":"+ve(u.targets[r]);return e}function ve(u){let e="";const t=Object.keys(u).sort();for(let r=0,n=t.length;r<n;r++)e+=t[r]+":"+u[t[r]]+";";return e}function Oe(u){switch(u){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function is(u){return u.search(/\.jpe?g($|\?)/i)>0||u.search(/^data\:image\/jpeg/)===0?"image/jpeg":u.search(/\.webp($|\?)/i)>0||u.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const os=new te;class as{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xn,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,n=!1,s=-1;typeof navigator<"u"&&typeof navigator.userAgent<"u"&&(r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||r||n&&s<98?this.textureLoader=new kt(this.options.manager):this.textureLoader=new jt(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ee(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(i){return i._markDefs&&i._markDefs()}),Promise.all(this._invokeAll(function(i){return i.beforeRoot&&i.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(i){const a={scene:i[0][n.scene||0],scenes:i[0],animations:i[1],cameras:i[2],asset:n.asset,parser:r,userData:{}};return V(s,a,n),j(a,n),Promise.all(r._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(const o of a.scenes)o.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const i=t[n].joints;for(let a=0,o=i.length;a<o;a++)e[i[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const i=e[n];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(r[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const n=r.clone(),s=(i,a)=>{const o=this.associations.get(i);o!=null&&this.associations.set(a,o);for(const[c,l]of i.children.entries())s(l,a.children[c])};return s(r,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const n=e(t[r]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&r.push(s)}return r}getDependency(e,t){const r=e+":"+t;let n=this.cache.get(r);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(r,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,i){return r.getDependency(e,i)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[F.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,i){r.load(le.resolveURL(t.uri,n.path),s,void 0,function(){i(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const n=t.byteLength||0,s=t.byteOffset||0;return r.slice(s,s+n)})}loadAccessor(e){const t=this,r=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const i=Te[n.type],a=se[n.componentType],o=n.normalized===!0,c=new a(n.count*i);return Promise.resolve(new $(c,i,o))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(i){const a=i[0],o=Te[n.type],c=se[n.componentType],l=c.BYTES_PER_ELEMENT,A=l*o,B=n.byteOffset||0,d=n.bufferView!==void 0?r.bufferViews[n.bufferView].byteStride:void 0,f=n.normalized===!0;let h,C;if(d&&d!==A){const p=Math.floor(B/d),E="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let m=t.cache.get(E);m||(h=new c(a,p*d,n.count*d/l),m=new Xt(h,d/l),t.cache.add(E,m)),C=new z(m,o,B%d/l,f)}else a===null?h=new c(n.count*o):h=new c(a,B,n.count*o),C=new $(h,o,f);if(n.sparse!==void 0){const p=Te.SCALAR,E=se[n.sparse.indices.componentType],m=n.sparse.indices.byteOffset||0,g=n.sparse.values.byteOffset||0,G=new E(i[1],m,n.sparse.count*p),T=new c(i[2],g,n.sparse.count*o);a!==null&&(C=new $(C.array.slice(),C.itemSize,C.normalized));for(let b=0,O=G.length;b<O;b++){const L=G[b];if(C.setX(L,T[b*o]),o>=2&&C.setY(L,T[b*o+1]),o>=3&&C.setZ(L,T[b*o+2]),o>=4&&C.setW(L,T[b*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return C})}loadTexture(e){const t=this.json,r=this.options,s=t.textures[e].source,i=t.images[s];let a=this.textureLoader;if(i.uri){const o=r.manager.getHandler(i.uri);o!==null&&(a=o)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,r){const n=this,s=this.json,i=s.textures[e],a=s.images[t],o=(a.uri||a.bufferView)+":"+i.sampler;if(this.textureCache[o])return this.textureCache[o];const c=this.loadImageSource(t,r).then(function(l){l.flipY=!1,l.name=i.name||a.name||"",l.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(l.name=a.uri);const B=(s.samplers||{})[i.sampler]||{};return l.magFilter=at[B.magFilter]||re,l.minFilter=at[B.minFilter]||Et,l.wrapS=ct[B.wrapS]||Je,l.wrapT=ct[B.wrapT]||Je,n.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[o]=c,c}loadImageSource(e,t){const r=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(A=>A.clone());const i=n.images[e],a=self.URL||self.webkitURL;let o=i.uri||"",c=!1;if(i.bufferView!==void 0)o=r.getDependency("bufferView",i.bufferView).then(function(A){c=!0;const B=new Blob([A],{type:i.mimeType});return o=a.createObjectURL(B),o});else if(i.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const l=Promise.resolve(o).then(function(A){return new Promise(function(B,d){let f=B;t.isImageBitmapLoader===!0&&(f=function(h){const C=new ze(h);C.needsUpdate=!0,B(C)}),t.load(le.resolveURL(A,s.path),f,void 0,d)})}).then(function(A){return c===!0&&a.revokeObjectURL(o),j(A,i),A.userData.mimeType=i.mimeType||is(i.uri),A}).catch(function(A){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),A});return this.sourceCache[e]=l,l}assignTexture(e,t,r,n){const s=this;return this.getDependency("texture",r.index).then(function(i){if(!i)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(i=i.clone(),i.channel=r.texCoord),s.extensions[F.KHR_TEXTURE_TRANSFORM]){const a=r.extensions!==void 0?r.extensions[F.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const o=s.associations.get(i);i=s.extensions[F.KHR_TEXTURE_TRANSFORM].extendTexture(i,a),s.associations.set(i,o)}}return n!==void 0&&(typeof n=="number"&&(n=n===it?q:Y),"colorSpace"in i?i.colorSpace=n:i.encoding=n===q?it:vn),e[t]=i,i})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,i=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+r.uuid;let o=this.cache.get(a);o||(o=new $t,Ge.prototype.copy.call(o,r),o.color.copy(r.color),o.map=r.map,o.sizeAttenuation=!1,this.cache.add(a,o)),r=o}else if(e.isLine){const a="LineBasicMaterial:"+r.uuid;let o=this.cache.get(a);o||(o=new en,Ge.prototype.copy.call(o,r),o.color.copy(r.color),o.map=r.map,this.cache.add(a,o)),r=o}if(n||s||i){let a="ClonedMaterial:"+r.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),i&&(a+="flat-shading:");let o=this.cache.get(a);o||(o=r.clone(),s&&(o.vertexColors=!0),i&&(o.flatShading=!0),n&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(a,o),this.associations.set(o,this.associations.get(r))),r=o}e.material=r}getMaterialType(){return Pe}loadMaterial(e){const t=this,r=this.json,n=this.extensions,s=r.materials[e];let i;const a={},o=s.extensions||{},c=[];if(o[F.KHR_MATERIALS_UNLIT]){const A=n[F.KHR_MATERIALS_UNLIT];i=A.getMaterialType(),c.push(A.extendParams(a,s,t))}else{const A=s.pbrMetallicRoughness||{};if(a.color=new Q(1,1,1),a.opacity=1,Array.isArray(A.baseColorFactor)){const B=A.baseColorFactor;a.color.setRGB(B[0],B[1],B[2],Y),a.opacity=B[3]}A.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",A.baseColorTexture,q)),a.metalness=A.metallicFactor!==void 0?A.metallicFactor:1,a.roughness=A.roughnessFactor!==void 0?A.roughnessFactor:1,A.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",A.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",A.metallicRoughnessTexture))),i=this._invokeOne(function(B){return B.getMaterialType&&B.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(B){return B.extendMaterialParams&&B.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=tn);const l=s.alphaMode||Ie.OPAQUE;if(l===Ie.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===Ie.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&i!==Ae&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new X(1,1),s.normalTexture.scale!==void 0)){const A=s.normalTexture.scale;a.normalScale.set(A,A)}if(s.occlusionTexture!==void 0&&i!==Ae&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&i!==Ae){const A=s.emissiveFactor;a.emissive=new Q().setRGB(A[0],A[1],A[2],Y)}return s.emissiveTexture!==void 0&&i!==Ae&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,q)),Promise.all(c).then(function(){const A=new i(a);return s.name&&(A.name=s.name),j(A,s),t.associations.set(A,{materials:e}),s.extensions&&V(n,A,s),A})}createUniqueName(e){const t=nn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,n=this.primitiveCache;function s(a){return r[F.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(o){return At(o,a,t)})}const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a],l=rs(c),A=n[l];if(A)i.push(A.promise);else{let B;c.extensions&&c.extensions[F.KHR_DRACO_MESH_COMPRESSION]?B=s(c):B=At(new Ke,c,t),n[l]={primitive:c,promise:B},i.push(B)}}return Promise.all(i)}loadMesh(e){const t=this,r=this.json,n=this.extensions,s=r.meshes[e],i=s.primitives,a=[];for(let o=0,c=i.length;o<c;o++){const l=i[o].material===void 0?ts(this.cache):this.getDependency("material",i[o].material);a.push(l)}return a.push(t.loadGeometries(i)),Promise.all(a).then(function(o){const c=o.slice(0,o.length-1),l=o[o.length-1],A=[];for(let d=0,f=l.length;d<f;d++){const h=l[d],C=i[d];let p;const E=c[d];if(C.mode===w.TRIANGLES||C.mode===w.TRIANGLE_STRIP||C.mode===w.TRIANGLE_FAN||C.mode===void 0)p=s.isSkinnedMesh===!0?new sn(h,E):new Ne(h,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),C.mode===w.TRIANGLE_STRIP?p.geometry=rt(p.geometry,Ct):C.mode===w.TRIANGLE_FAN&&(p.geometry=rt(p.geometry,Le));else if(C.mode===w.LINES)p=new rn(h,E);else if(C.mode===w.LINE_STRIP)p=new on(h,E);else if(C.mode===w.LINE_LOOP)p=new an(h,E);else if(C.mode===w.POINTS)p=new cn(h,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+C.mode);Object.keys(p.geometry.morphAttributes).length>0&&ss(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),j(p,s),C.extensions&&V(n,p,C),t.assignFinalMaterial(p),A.push(p)}for(let d=0,f=A.length;d<f;d++)t.associations.set(A[d],{meshes:e,primitives:d});if(A.length===1)return s.extensions&&V(n,A[0],s),A[0];const B=new Re;s.extensions&&V(n,B,s),t.associations.set(B,{meshes:e});for(let d=0,f=A.length;d<f;d++)B.add(A[d]);return B})}loadCamera(e){let t;const r=this.json.cameras[e],n=r[r.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new Mt(Ft.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):r.type==="orthographic"&&(t=new An(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),j(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let n=0,s=t.joints.length;n<s;n++)r.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(n){const s=n.pop(),i=n,a=[],o=[];for(let c=0,l=i.length;c<l;c++){const A=i[c];if(A){a.push(A);const B=new te;s!==null&&B.fromArray(s.array,c*16),o.push(B)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ln(a,o)})}loadAnimation(e){const t=this.json,r=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,i=[],a=[],o=[],c=[],l=[];for(let A=0,B=n.channels.length;A<B;A++){const d=n.channels[A],f=n.samplers[d.sampler],h=d.target,C=h.node,p=n.parameters!==void 0?n.parameters[f.input]:f.input,E=n.parameters!==void 0?n.parameters[f.output]:f.output;h.node!==void 0&&(i.push(this.getDependency("node",C)),a.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",E)),c.push(f),l.push(h))}return Promise.all([Promise.all(i),Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(A){const B=A[0],d=A[1],f=A[2],h=A[3],C=A[4],p=[];for(let E=0,m=B.length;E<m;E++){const g=B[E],G=d[E],T=f[E],b=h[E],O=C[E];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();const L=r._createAnimationTracks(g,G,T,b,O);if(L)for(let J=0;J<L.length;J++)p.push(L[J])}return new un(s,void 0,p)})}createNodeMesh(e){const t=this.json,r=this,n=t.nodes[e];return n.mesh===void 0?null:r.getDependency("mesh",n.mesh).then(function(s){const i=r._getNodeRef(r.meshCache,n.mesh,s);return n.weights!==void 0&&i.traverse(function(a){if(a.isMesh)for(let o=0,c=n.weights.length;o<c;o++)a.morphTargetInfluences[o]=n.weights[o]}),i})}loadNode(e){const t=this.json,r=this,n=t.nodes[e],s=r._loadNodeShallow(e),i=[],a=n.children||[];for(let c=0,l=a.length;c<l;c++)i.push(r.getDependency("node",a[c]));const o=n.skin===void 0?Promise.resolve(null):r.getDependency("skin",n.skin);return Promise.all([s,Promise.all(i),o]).then(function(c){const l=c[0],A=c[1],B=c[2];B!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(B,os)});for(let d=0,f=A.length;d<f;d++)l.add(A[d]);return l})}_loadNodeShallow(e){const t=this.json,r=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],i=s.name?n.createUniqueName(s.name):"",a=[],o=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return o&&a.push(o),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let l;if(s.isBone===!0?l=new Bn:c.length>1?l=new Re:c.length===1?l=c[0]:l=new gt,l!==c[0])for(let A=0,B=c.length;A<B;A++)l.add(c[A]);if(s.name&&(l.userData.name=s.name,l.name=i),j(l,s),s.extensions&&V(r,l,s),s.matrix!==void 0){const A=new te;A.fromArray(s.matrix),l.applyMatrix4(A)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],n=this,s=new Re;r.name&&(s.name=n.createUniqueName(r.name)),j(s,r),r.extensions&&V(t,s,r);const i=r.nodes||[],a=[];for(let o=0,c=i.length;o<c;o++)a.push(n.getDependency("node",i[o]));return Promise.all(a).then(function(o){for(let l=0,A=o.length;l<A;l++)s.add(o[l]);const c=l=>{const A=new Map;for(const[B,d]of n.associations)(B instanceof Ge||B instanceof ze)&&A.set(B,d);return l.traverse(B=>{const d=n.associations.get(B);d!=null&&A.set(B,d)}),A};return n.associations=c(s),s})}_createAnimationTracks(e,t,r,n,s){const i=[],a=e.name?e.name:e.uuid,o=[];W[s.path]===W.weights?e.traverse(function(B){B.morphTargetInfluences&&o.push(B.name?B.name:B.uuid)}):o.push(a);let c;switch(W[s.path]){case W.weights:c=$e;break;case W.rotation:c=et;break;case W.position:case W.scale:c=qe;break;default:switch(r.itemSize){case 1:c=$e;break;case 2:case 3:default:c=qe;break}break}const l=n.interpolation!==void 0?es[n.interpolation]:Dt,A=this._getArrayFromAccessor(r);for(let B=0,d=o.length;B<d;B++){const f=new c(o[B]+"."+W[s.path],t.array,A,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),i.push(f)}return i}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=Oe(t.constructor),n=new Float32Array(t.length);for(let s=0,i=t.length;s<i;s++)n[s]=t[s]*r;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(r){const n=this instanceof et?$n:xt;return new n(this.times,this.values,this.getValueSize()/3,r)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cs(u,e,t){const r=e.attributes,n=new Fe;if(r.POSITION!==void 0){const a=t.json.accessors[r.POSITION],o=a.min,c=a.max;if(o!==void 0&&c!==void 0){if(n.set(new R(o[0],o[1],o[2]),new R(c[0],c[1],c[2])),a.normalized){const l=Oe(se[a.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new R,o=new R;for(let c=0,l=s.length;c<l;c++){const A=s[c];if(A.POSITION!==void 0){const B=t.json.accessors[A.POSITION],d=B.min,f=B.max;if(d!==void 0&&f!==void 0){if(o.setX(Math.max(Math.abs(d[0]),Math.abs(f[0]))),o.setY(Math.max(Math.abs(d[1]),Math.abs(f[1]))),o.setZ(Math.max(Math.abs(d[2]),Math.abs(f[2]))),B.normalized){const h=Oe(se[B.componentType]);o.multiplyScalar(h)}a.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}u.boundingBox=n;const i=new Qe;n.getCenter(i.center),i.radius=n.min.distanceTo(n.max)/2,u.boundingSphere=i}function At(u,e,t){const r=e.attributes,n=[];function s(i,a){return t.getDependency("accessor",i).then(function(o){u.setAttribute(a,o)})}for(const i in r){const a=we[i]||i.toLowerCase();a in u.attributes||n.push(s(r[i],a))}if(e.indices!==void 0&&!u.index){const i=t.getDependency("accessor",e.indices).then(function(a){u.setIndex(a)});n.push(i)}return j(u,e),cs(u,e,t),Promise.all(n).then(function(){return e.targets!==void 0?ns(u,e.targets,t):u})}const xe=new WeakMap;class As extends mt{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,n){const s=new Ee(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,i=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(i,a).then(t).catch(n)},r,n)}decodeDracoFile(e,t,r,n){const s={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!r};this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){for(const o in t.attributeTypes){const c=t.attributeTypes[o];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[o]=c.name)}const r=JSON.stringify(t);if(xe.has(e)){const o=xe.get(e);if(o.key===r)return o.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,i=e.byteLength,a=this._getWorker(s,i).then(o=>(n=o,new Promise((c,l)=>{n._callbacks[s]={resolve:c,reject:l},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(o=>this._createGeometry(o.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),xe.set(e,{key:r,promise:a}),a}_createGeometry(e){const t=new Ke;e.index&&t.setIndex(new $(e.index.array,1));for(let r=0;r<e.attributes.length;r++){const n=e.attributes[r],s=n.name,i=n.array,a=n.itemSize;t.setAttribute(s,new $(i,a))}return t}_loadLibrary(e,t){const r=new Ee(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise((n,s)=>{r.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(r=>{const n=r[0];e||(this.decoderConfig.wasmBinary=r[1]);const s=ls.toString(),i=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([i]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const i=s.data;switch(i.type){case"decode":n._callbacks[i.id].resolve(i);break;case"error":n._callbacks[i.id].reject(i);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+i.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function ls(){let u,e;onmessage=function(i){const a=i.data;switch(a.type){case"init":u=a.decoderConfig,e=new Promise(function(l){u.onModuleLoaded=function(A){l({draco:A})},DracoDecoderModule(u)});break;case"decode":const o=a.buffer,c=a.taskConfig;e.then(l=>{const A=l.draco,B=new A.Decoder,d=new A.DecoderBuffer;d.Init(new Int8Array(o),o.byteLength);try{const f=t(A,B,d,c),h=f.attributes.map(C=>C.array.buffer);f.index&&h.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},h)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{A.destroy(d),A.destroy(B)}});break}};function t(i,a,o,c){const l=c.attributeIDs,A=c.attributeTypes;let B,d;const f=a.GetEncodedGeometryType(o);if(f===i.TRIANGULAR_MESH)B=new i.Mesh,d=a.DecodeBufferToMesh(o,B);else if(f===i.POINT_CLOUD)B=new i.PointCloud,d=a.DecodeBufferToPointCloud(o,B);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||B.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const h={index:null,attributes:[]};for(const C in l){const p=self[A[C]];let E,m;if(c.useUniqueIDs)m=l[C],E=a.GetAttributeByUniqueId(B,m);else{if(m=a.GetAttributeId(B,i[l[C]]),m===-1)continue;E=a.GetAttribute(B,m)}h.attributes.push(n(i,a,B,C,p,E))}return f===i.TRIANGULAR_MESH&&(h.index=r(i,a,B)),i.destroy(B),h}function r(i,a,o){const l=o.num_faces()*3,A=l*4,B=i._malloc(A);a.GetTrianglesUInt32Array(o,A,B);const d=new Uint32Array(i.HEAPF32.buffer,B,l).slice();return i._free(B),{array:d,itemSize:1}}function n(i,a,o,c,l,A){const B=A.num_components(),f=o.num_points()*B,h=f*l.BYTES_PER_ELEMENT,C=s(i,l),p=i._malloc(h);a.GetAttributeDataArrayForAllPoints(o,A,C,h,p);const E=new l(i.HEAPF32.buffer,p,f).slice();return i._free(p),{name:c,array:E,itemSize:B}}function s(i,a){switch(a){case Float32Array:return i.DT_FLOAT32;case Int8Array:return i.DT_INT8;case Int16Array:return i.DT_INT16;case Int32Array:return i.DT_INT32;case Uint8Array:return i.DT_UINT8;case Uint16Array:return i.DT_UINT16;case Uint32Array:return i.DT_UINT32}}}const lt=new Fe,fe=new R;class Ye extends Cn{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new tt(e,3)),this.setAttribute("uv",new tt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new Ue(t,6,1);return this.setAttribute("instanceStart",new z(r,3,0)),this.setAttribute("instanceEnd",new z(r,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let r;e instanceof Float32Array?r=e:Array.isArray(e)&&(r=new Float32Array(e));const n=new Ue(r,t*2,1);return this.setAttribute("instanceColorStart",new z(n,t,0)),this.setAttribute("instanceColorEnd",new z(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new mn(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fe);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),lt.setFromBufferAttribute(t),this.boundingBox.union(lt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qe),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let n=0;for(let s=0,i=e.count;s<i;s++)fe.fromBufferAttribute(e,s),n=Math.max(n,r.distanceToSquared(fe)),fe.fromBufferAttribute(t,s),n=Math.max(n,r.distanceToSquared(fe));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Ht extends Ye{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,r=new Float32Array(2*t);for(let n=0;n<t;n+=3)r[2*n]=e[n],r[2*n+1]=e[n+1],r[2*n+2]=e[n+2],r[2*n+3]=e[n+3],r[2*n+4]=e[n+4],r[2*n+5]=e[n+5];return super.setPositions(r),this}setColors(e,t=3){const r=e.length-t,n=new Float32Array(2*r);if(t===3)for(let s=0;s<r;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];else for(let s=0;s<r;s+=t)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5],n[2*s+6]=e[s+6],n[2*s+7]=e[s+7];return super.setColors(n,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class We extends Gt{constructor(e){super({type:"LineMaterial",uniforms:nt.clone(nt.merge([st.common,st.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new X(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${je>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const He=new Z,ut=new R,Bt=new R,I=new Z,v=new Z,P=new Z,be=new R,Se=new te,x=new pn,dt=new R,he=new Fe,Ce=new Qe,K=new Z;let N,ee;function ft(u,e,t){return K.set(0,0,-e,1).applyMatrix4(u.projectionMatrix),K.multiplyScalar(1/K.w),K.x=ee/t.width,K.y=ee/t.height,K.applyMatrix4(u.projectionMatrixInverse),K.multiplyScalar(1/K.w),Math.abs(Math.max(K.x,K.y))}function us(u,e){const t=u.matrixWorld,r=u.geometry,n=r.attributes.instanceStart,s=r.attributes.instanceEnd,i=Math.min(r.instanceCount,n.count);for(let a=0,o=i;a<o;a++){x.start.fromBufferAttribute(n,a),x.end.fromBufferAttribute(s,a),x.applyMatrix4(t);const c=new R,l=new R;N.distanceSqToSegment(x.start,x.end,l,c),l.distanceTo(c)<ee*.5&&e.push({point:l,pointOnLine:c,distance:N.origin.distanceTo(l),object:u,face:null,faceIndex:a,uv:null,[It]:null})}}function Bs(u,e,t){const r=e.projectionMatrix,s=u.material.resolution,i=u.matrixWorld,a=u.geometry,o=a.attributes.instanceStart,c=a.attributes.instanceEnd,l=Math.min(a.instanceCount,o.count),A=-e.near;N.at(1,P),P.w=1,P.applyMatrix4(e.matrixWorldInverse),P.applyMatrix4(r),P.multiplyScalar(1/P.w),P.x*=s.x/2,P.y*=s.y/2,P.z=0,be.copy(P),Se.multiplyMatrices(e.matrixWorldInverse,i);for(let B=0,d=l;B<d;B++){if(I.fromBufferAttribute(o,B),v.fromBufferAttribute(c,B),I.w=1,v.w=1,I.applyMatrix4(Se),v.applyMatrix4(Se),I.z>A&&v.z>A)continue;if(I.z>A){const m=I.z-v.z,g=(I.z-A)/m;I.lerp(v,g)}else if(v.z>A){const m=v.z-I.z,g=(v.z-A)/m;v.lerp(I,g)}I.applyMatrix4(r),v.applyMatrix4(r),I.multiplyScalar(1/I.w),v.multiplyScalar(1/v.w),I.x*=s.x/2,I.y*=s.y/2,v.x*=s.x/2,v.y*=s.y/2,x.start.copy(I),x.start.z=0,x.end.copy(v),x.end.z=0;const h=x.closestPointToPointParameter(be,!0);x.at(h,dt);const C=Ft.lerp(I.z,v.z,h),p=C>=-1&&C<=1,E=be.distanceTo(dt)<ee*.5;if(p&&E){x.start.fromBufferAttribute(o,B),x.end.fromBufferAttribute(c,B),x.start.applyMatrix4(i),x.end.applyMatrix4(i);const m=new R,g=new R;N.distanceSqToSegment(x.start,x.end,g,m),t.push({point:g,pointOnLine:m,distance:N.origin.distanceTo(g),object:u,face:null,faceIndex:B,uv:null,[It]:null})}}}class bt extends Ne{constructor(e=new Ye,t=new We({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let i=0,a=0,o=t.count;i<o;i++,a+=2)ut.fromBufferAttribute(t,i),Bt.fromBufferAttribute(r,i),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+ut.distanceTo(Bt);const s=new Ue(n,2,1);return e.setAttribute("instanceDistanceStart",new z(s,1,0)),e.setAttribute("instanceDistanceEnd",new z(s,1,1)),this}raycast(e,t){const r=this.material.worldUnits,n=e.camera;n===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;N=e.ray;const i=this.matrixWorld,a=this.geometry,o=this.material;ee=o.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Ce.copy(a.boundingSphere).applyMatrix4(i);let c;if(r)c=ee*.5;else{const A=Math.max(n.near,Ce.distanceToPoint(N.origin));c=ft(n,A,o.resolution)}if(Ce.radius+=c,N.intersectsSphere(Ce)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),he.copy(a.boundingBox).applyMatrix4(i);let l;if(r)l=ee*.5;else{const A=Math.max(n.near,he.distanceToPoint(N.origin));l=ft(n,A,o.resolution)}he.expandByScalar(l),N.intersectsBox(he)!==!1&&(r?us(this,t):Bs(this,n,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(He),this.material.uniforms.resolution.value.set(He.z,He.w))}}class ds extends bt{constructor(e=new Ht,t=new We({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}let me;const ye=()=>{if(me)return me;const u="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",e="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",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,253,3,1,2,34,4,106,6,5,11,8,7,20,13,33,12,16,128,9,116,64,19,113,127,15,10,21,22,14,255,66,24,54,136,107,18,23,192,26,114,118,132,17,77,101,130,144,27,87,131,44,45,74,156,154,70,167]);if(typeof WebAssembly!="object")return{supported:!1};let n=u;WebAssembly.validate(t)&&(n=e);let s;const i=WebAssembly.instantiate(a(n),{}).then(A=>{s=A.instance,s.exports.__wasm_call_ctors()});function a(A){const B=new Uint8Array(A.length);for(let f=0;f<A.length;++f){const h=A.charCodeAt(f);B[f]=h>96?h-71:h>64?h-65:h>47?h+4:h>46?63:62}let d=0;for(let f=0;f<A.length;++f)B[d++]=B[f]<60?r[B[f]]:(B[f]-60)*64+B[++f];return B.buffer.slice(0,d)}function o(A,B,d,f,h,C){const p=s.exports.sbrk,E=d+3&-4,m=p(E*f),g=p(h.length),G=new Uint8Array(s.exports.memory.buffer);G.set(h,g);const T=A(m,d,f,g,h.length);if(T===0&&C&&C(m,E,f),B.set(G.subarray(m,m+d*f)),p(m-p(0)),T!==0)throw new Error(`Malformed buffer data: ${T}`)}const c={0:"",1:"meshopt_decodeFilterOct",2:"meshopt_decodeFilterQuat",3:"meshopt_decodeFilterExp",NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={0:"meshopt_decodeVertexBuffer",1:"meshopt_decodeIndexBuffer",2:"meshopt_decodeIndexSequence",ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"};return me={ready:i,supported:!0,decodeVertexBuffer(A,B,d,f,h){o(s.exports.meshopt_decodeVertexBuffer,A,B,d,f,s.exports[c[h]])},decodeIndexBuffer(A,B,d,f){o(s.exports.meshopt_decodeIndexBuffer,A,B,d,f)},decodeIndexSequence(A,B,d,f){o(s.exports.meshopt_decodeIndexSequence,A,B,d,f)},decodeGltfBuffer(A,B,d,f,h,C){o(s.exports[l[h]],A,B,d,f,s.exports[c[C]])}},me},fs=M.forwardRef(function({points:e,color:t=16777215,vertexColors:r,linewidth:n,lineWidth:s,segments:i,dashed:a,...o},c){var l,A;const B=ge(p=>p.size),d=M.useMemo(()=>i?new bt:new ds,[i]),[f]=M.useState(()=>new We),h=(r==null||(l=r[0])==null?void 0:l.length)===4?4:3,C=M.useMemo(()=>{const p=i?new Ye:new Ht,E=e.map(m=>{const g=Array.isArray(m);return m instanceof R||m instanceof Z?[m.x,m.y,m.z]:m instanceof X?[m.x,m.y,0]:g&&m.length===3?[m[0],m[1],m[2]]:g&&m.length===2?[m[0],m[1],0]:m});if(p.setPositions(E.flat()),r){t=16777215;const m=r.map(g=>g instanceof Q?g.toArray():g);p.setColors(m.flat(),h)}return p},[e,i,r,h]);return M.useLayoutEffect(()=>{d.computeLineDistances()},[e,d]),M.useLayoutEffect(()=>{a?f.defines.USE_DASH="":delete f.defines.USE_DASH,f.needsUpdate=!0},[a,f]),M.useEffect(()=>()=>{C.dispose(),f.dispose()},[C]),M.createElement("primitive",ie({object:d,ref:c},o),M.createElement("primitive",{object:C,attach:"geometry"}),M.createElement("primitive",ie({object:f,attach:"material",color:t,vertexColors:!!r,resolution:[B.width,B.height],linewidth:(A=n??s)!==null&&A!==void 0?A:1,dashed:a,transparent:h===4},o)))}),hs=()=>parseInt(ht.replace(/\D+/g,"")),Cs=hs(),ms=M.forwardRef(({threshold:u=15,geometry:e,...t},r)=>{const n=M.useRef(null);M.useImperativeHandle(r,()=>n.current,[]);const s=M.useMemo(()=>[0,0,0,1,0,0],[]),i=M.useRef(),a=M.useRef();return M.useLayoutEffect(()=>{const o=n.current.parent,c=e??(o==null?void 0:o.geometry);if(!c||i.current===c&&a.current===u)return;i.current=c,a.current=u;const A=new gn(c,u).attributes.position.array;n.current.geometry.setPositions(A),n.current.geometry.attributes.instanceStart.needsUpdate=!0,n.current.geometry.attributes.instanceEnd.needsUpdate=!0,n.current.computeLineDistances()}),M.createElement(fs,ie({segments:!0,points:s,ref:n,raycast:()=>null},t))});let pe=null,St="https://www.gstatic.com/draco/versioned/decoders/1.5.5/";function yt(u=!0,e=!0,t){return r=>{t&&t(r),u&&(pe||(pe=new As),pe.setDecoderPath(typeof u=="string"?u:St),r.setDRACOLoader(pe)),e&&r.setMeshoptDecoder(typeof ye=="function"?ye():ye)}}const ue=(u,e,t,r)=>ke(Xe,u,yt(e,t,r));ue.preload=(u,e,t,r)=>ke.preload(Xe,u,yt(e,t,r));ue.clear=u=>ke.clear(Xe,u);ue.setDecoderPath=u=>{St=u};class ps extends Gt{constructor(e=new X){super({uniforms:{inputBuffer:new _(null),depthBuffer:new _(null),resolution:new _(new X),texelSize:new _(new X),halfTexelSize:new _(new X),kernel:new _(0),scale:new _(1),cameraNear:new _(0),cameraFar:new _(1),minDepthThreshold:new _(0),maxDepthThreshold:new _(1),depthScale:new _(0),depthToBlurRatioBias:new _(.25)},fragmentShader:`#include <common>
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
          #include <${Cs>=154?"colorspace_fragment":"encodings_fragment"}>
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
        }`,blending:En,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class gs{constructor({gl:e,resolution:t,width:r=500,height:n=500,minDepthThreshold:s=0,maxDepthThreshold:i=1,depthScale:a=0,depthToBlurRatioBias:o=.25}){this.renderToScreen=!1,this.renderTargetA=new _e(t,t,{minFilter:re,magFilter:re,stencilBuffer:!1,depthBuffer:!1,type:Rt}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new ps,this.convolutionMaterial.setTexelSize(1/r,1/n),this.convolutionMaterial.setResolution(new X(r,n)),this.scene=new Mn,this.camera=new Fn,this.convolutionMaterial.uniforms.minDepthThreshold.value=s,this.convolutionMaterial.uniforms.maxDepthThreshold.value=i,this.convolutionMaterial.uniforms.depthScale.value=a,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=o,this.convolutionMaterial.defines.USE_DEPTH=a>0;const c=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),l=new Float32Array([0,0,2,0,0,2]),A=new Ke;A.setAttribute("position",new $(c,3)),A.setAttribute("uv",new $(l,2)),this.screen=new Ne(A,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){const n=this.scene,s=this.camera,i=this.renderTargetA,a=this.renderTargetB;let o=this.convolutionMaterial,c=o.uniforms;c.depthBuffer.value=t.depthTexture;const l=o.kernel;let A=t,B,d,f;for(d=0,f=l.length-1;d<f;++d)B=(d&1)===0?i:a,c.kernel.value=l[d],c.inputBuffer.value=A.texture,e.setRenderTarget(B),e.render(n,s),A=B;c.kernel.value=l[d],c.inputBuffer.value=A.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(n,s)}}let Es=class extends Pe{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;(t=e.defines)!=null&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
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
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}};const Ms=M.forwardRef(({mixBlur:u=0,mixStrength:e=1,resolution:t=256,blur:r=[0,0],minDepthThreshold:n=.9,maxDepthThreshold:s=1,depthScale:i=0,depthToBlurRatioBias:a=.25,mirror:o=0,distortion:c=1,mixContrast:l=1,distortionMap:A,reflectorOffset:B=0,...d},f)=>{Dn({MeshReflectorMaterialImpl:Es});const h=ge(({gl:y})=>y),C=ge(({camera:y})=>y),p=ge(({scene:y})=>y);r=Array.isArray(r)?r:[r,r];const E=r[0]+r[1]>0,m=M.useRef(null);M.useImperativeHandle(f,()=>m.current,[]);const[g]=M.useState(()=>new Gn),[G]=M.useState(()=>new R),[T]=M.useState(()=>new R),[b]=M.useState(()=>new R),[O]=M.useState(()=>new te),[L]=M.useState(()=>new R(0,0,-1)),[J]=M.useState(()=>new Z),[oe]=M.useState(()=>new R),[Be]=M.useState(()=>new R),[ae]=M.useState(()=>new Z),[ne]=M.useState(()=>new te),[U]=M.useState(()=>new Mt),Lt=M.useCallback(()=>{var y;const H=m.current.parent||((y=m.current)==null?void 0:y.__r3f.parent);if(!H||(T.setFromMatrixPosition(H.matrixWorld),b.setFromMatrixPosition(C.matrixWorld),O.extractRotation(H.matrixWorld),G.set(0,0,1),G.applyMatrix4(O),T.addScaledVector(G,B),oe.subVectors(T,b),oe.dot(G)>0))return;oe.reflect(G).negate(),oe.add(T),O.extractRotation(C.matrixWorld),L.set(0,0,-1),L.applyMatrix4(O),L.add(b),Be.subVectors(T,L),Be.reflect(G).negate(),Be.add(T),U.position.copy(oe),U.up.set(0,1,0),U.up.applyMatrix4(O),U.up.reflect(G),U.lookAt(Be),U.far=C.far,U.updateMatrixWorld(),U.projectionMatrix.copy(C.projectionMatrix),ne.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),ne.multiply(U.projectionMatrix),ne.multiply(U.matrixWorldInverse),ne.multiply(H.matrixWorld),g.setFromNormalAndCoplanarPoint(G,T),g.applyMatrix4(U.matrixWorldInverse),J.set(g.normal.x,g.normal.y,g.normal.z,g.constant);const S=U.projectionMatrix;ae.x=(Math.sign(J.x)+S.elements[8])/S.elements[0],ae.y=(Math.sign(J.y)+S.elements[9])/S.elements[5],ae.z=-1,ae.w=(1+S.elements[10])/S.elements[14],J.multiplyScalar(2/J.dot(ae)),S.elements[2]=J.x,S.elements[6]=J.y,S.elements[10]=J.z+1,S.elements[14]=J.w},[C,B]),[Ze,Jt,Ut,de]=M.useMemo(()=>{const y={minFilter:re,magFilter:re,type:Rt},H=new _e(t,t,y);H.depthBuffer=!0,H.depthTexture=new Rn(t,t),H.depthTexture.format=Tn,H.depthTexture.type=In;const S=new _e(t,t,y),De=new gs({gl:h,resolution:t,width:r[0],height:r[1],minDepthThreshold:n,maxDepthThreshold:s,depthScale:i,depthToBlurRatioBias:a}),_t={mirror:o,textureMatrix:ne,mixBlur:u,tDiffuse:H.texture,tDepth:H.depthTexture,tDiffuseBlur:S.texture,hasBlur:E,mixStrength:e,minDepthThreshold:n,maxDepthThreshold:s,depthScale:i,depthToBlurRatioBias:a,distortion:c,distortionMap:A,mixContrast:l,"defines-USE_BLUR":E?"":void 0,"defines-USE_DEPTH":i>0?"":void 0,"defines-USE_DISTORTION":A?"":void 0};return[H,S,De,_t]},[h,r,ne,t,o,E,u,e,n,s,i,a,c,A,l]);return Tt(()=>{var y;const H=m.current.parent||((y=m.current)==null?void 0:y.__r3f.parent);if(!H)return;H.visible=!1;const S=h.xr.enabled,De=h.shadowMap.autoUpdate;Lt(),h.xr.enabled=!1,h.shadowMap.autoUpdate=!1,h.setRenderTarget(Ze),h.state.buffers.depth.setMask(!0),h.autoClear||h.clear(),h.render(p,U),E&&Ut.render(h,Ze,Jt),h.xr.enabled=S,h.shadowMap.autoUpdate=De,H.visible=!0,h.setRenderTarget(null)}),M.createElement("meshReflectorMaterialImpl",ie({attach:"material",key:"key"+de["defines-USE_BLUR"]+de["defines-USE_DEPTH"]+de["defines-USE_DISTORTION"],ref:m},de,d))});function Fs(){return D.jsx(D.Fragment,{children:D.jsxs("mesh",{rotation:[Math.PI/-2,0,0],position:[0,-2,-7.5],children:[D.jsx("circleGeometry",{args:[4,100]}),D.jsx(Ms,{blur:300,mixBlur:10,mixStrength:1.1,mixContrast:1.6,resolution:300,mirror:.4,depthScale:0,minDepthThreshold:0,maxDepthThreshold:0,depthToBlurRatioBias:.25,reflectorOffset:-1,color:new Q(Ve.surface300.hex)}),D.jsx(ms,{lineWidth:3,color:new Q(Ve.surface50.hex)})]})})}const Ds=M.forwardRef((u,e)=>{const{nodes:t,materials:r}=ue("/low-poly-f1-car-transformed.glb");return D.jsxs("group",{ref:e,...u,dispose:null,children:[D.jsx("mesh",{geometry:t.Cube.geometry,material:r.PaletteMaterial001,position:[-1.843,1.745,0],scale:[.257,.027,1.507]}),D.jsxs("group",{position:[5.697,2.828,0],scale:[.371,.018,.961],children:[D.jsx("mesh",{geometry:t.Cube002_1.geometry,material:r.PaletteMaterial002}),D.jsx("mesh",{geometry:t.Cube002_2.geometry,material:r.PaletteMaterial003})]}),D.jsxs("group",{position:[-1.221,2.314,-.037],rotation:[0,Math.PI/2,0],scale:[.09,.09,.031],children:[D.jsx("mesh",{geometry:t.Cube005.geometry,material:r.PaletteMaterial004}),D.jsx("mesh",{geometry:t.Cube005_1.geometry,material:r.PaletteMaterial005})]})]})});ue.preload("/low-poly-f1-car-transformed.glb");function Gs(){const u=M.useRef(null);return Tt(()=>{u.current&&(u.current.rotation.y+=.01)}),D.jsx(D.Fragment,{children:D.jsx(Ds,{ref:u,position:[0,-2,-7.5],rotation:[0,0,0],scale:[.5,.5,.5]})})}function vs(){return D.jsxs(D.Fragment,{children:[D.jsx("directionalLight",{position:[0,1.5,0],rotation:[Math.PI/-6,0,0],intensity:2}),D.jsx("ambientLight",{position:[0,0,0],intensity:1}),D.jsx(Gs,{}),D.jsx(Fs,{})]})}export{vs as default};
