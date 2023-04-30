import{w as O,ao as X,ah as J,D as K,ap as Q,al as S,an as C,aq as U,ar as W,l as j,a as x,as as Z,at as ee,b as re,au as te,av as ne,_ as oe,u as ae,aw as ie,ax as se,s as ce,ay as le}from"./OrbitControls-7d9e17f6.js";import{r as h}from"./index-f9e63f0d.js";const ue=r=>r&&r.isCubeTexture;class de extends O{constructor(a,i){var u,d;const o=ue(a),_=((u=o?(d=a.image[0])===null||d===void 0?void 0:d.width:a.image.width)!=null?u:1024)/4,p=Math.floor(Math.log2(_)),v=Math.pow(2,p),I=3*Math.max(v,16*7),T=4*v,k=[o?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/I}`,`#define CUBEUV_TEXEL_HEIGHT ${1/T}`,`#define CUBEUV_MAX_MIP ${p}.0`],P=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,L=k.join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <encodings_fragment>
        }
        `,G={map:{value:a},height:{value:(i==null?void 0:i.height)||15},radius:{value:(i==null?void 0:i.radius)||100}},M=new X(1,16),R=new J({uniforms:G,fragmentShader:L,vertexShader:P,side:K});super(M,R)}set radius(a){this.material.uniforms.radius.value=a}get radius(){return this.material.uniforms.radius.value}set height(a){this.material.uniforms.height.value=a}get height(){return this.material.uniforms.height.value}}class me extends Q{constructor(a){super(a),this.type=S}parse(a){const _=function(e,s){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(s||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(s||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(s||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(s||""))}return-1},T=`
`,k=function(e,s,g){s=s||1024;let m=e.pos,c=-1,t=0,E="",n=String.fromCharCode.apply(null,new Uint16Array(e.subarray(m,m+128)));for(;0>(c=n.indexOf(T))&&t<s&&m<e.byteLength;)E+=n,t+=n.length,m+=128,n+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(m,m+128)));return-1<c?(g!==!1&&(e.pos+=t+c+1),E+n.slice(0,c)):!1},P=function(e){const s=/^#\?(\S+)/,g=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,l=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,m=/^\s*FORMAT=(\S+)\s*$/,c=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,t={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let E,n;if(e.pos>=e.byteLength||!(E=k(e)))return _(1,"no header found");if(!(n=E.match(s)))return _(3,"bad initial token");for(t.valid|=1,t.programtype=n[1],t.string+=E+`
`;E=k(e),E!==!1;){if(t.string+=E+`
`,E.charAt(0)==="#"){t.comments+=E+`
`;continue}if((n=E.match(g))&&(t.gamma=parseFloat(n[1])),(n=E.match(l))&&(t.exposure=parseFloat(n[1])),(n=E.match(m))&&(t.valid|=2,t.format=n[1]),(n=E.match(c))&&(t.valid|=4,t.height=parseInt(n[1],10),t.width=parseInt(n[2],10)),t.valid&2&&t.valid&4)break}return t.valid&2?t.valid&4?t:_(3,"missing image size specifier"):_(3,"missing format specifier")},L=function(e,s,g){const l=s;if(l<8||l>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);if(l!==(e[2]<<8|e[3]))return _(3,"wrong scanline width");const m=new Uint8Array(4*s*g);if(!m.length)return _(4,"unable to allocate buffer space");let c=0,t=0;const E=4*l,n=new Uint8Array(4),F=new Uint8Array(E);let z=g;for(;z>0&&t<e.byteLength;){if(t+4>e.byteLength)return _(1);if(n[0]=e[t++],n[1]=e[t++],n[2]=e[t++],n[3]=e[t++],n[0]!=2||n[1]!=2||(n[2]<<8|n[3])!=l)return _(3,"bad rgbe scanline format");let A=0,w;for(;A<E&&t<e.byteLength;){w=e[t++];const y=w>128;if(y&&(w-=128),w===0||A+w>E)return _(3,"bad scanline data");if(y){const B=e[t++];for(let H=0;H<w;H++)F[A++]=B}else F.set(e.subarray(t,t+w),A),A+=w,t+=w}const Y=l;for(let y=0;y<Y;y++){let B=0;m[c]=F[y+B],B+=l,m[c+1]=F[y+B],B+=l,m[c+2]=F[y+B],B+=l,m[c+3]=F[y+B],c+=4}z--}return m},G=function(e,s,g,l){const m=e[s+3],c=Math.pow(2,m-128)/255;g[l+0]=e[s+0]*c,g[l+1]=e[s+1]*c,g[l+2]=e[s+2]*c,g[l+3]=1},M=function(e,s,g,l){const m=e[s+3],c=Math.pow(2,m-128)/255;g[l+0]=U.toHalfFloat(Math.min(e[s+0]*c,65504)),g[l+1]=U.toHalfFloat(Math.min(e[s+1]*c,65504)),g[l+2]=U.toHalfFloat(Math.min(e[s+2]*c,65504)),g[l+3]=U.toHalfFloat(1)},R=new Uint8Array(a);R.pos=0;const b=P(R);if(b!==-1){const e=b.width,s=b.height,g=L(R.subarray(R.pos),e,s);if(g!==-1){let l,m,c;switch(this.type){case C:c=g.length/4;const t=new Float32Array(c*4);for(let n=0;n<c;n++)G(g,n*4,t,n*4);l=t,m=C;break;case S:c=g.length/4;const E=new Uint16Array(c*4);for(let n=0;n<c;n++)M(g,n*4,E,n*4);l=E,m=S;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:e,height:s,data:l,header:b.string,gamma:b.gamma,exposure:b.exposure,type:m}}}return null}setDataType(a){return this.type=a,this}load(a,i,u,d){function o(f,_){switch(f.type){case C:case S:f.encoding=W,f.minFilter=j,f.magFilter=j,f.generateMipmaps=!1,f.flipY=!0;break}i&&i(f,_)}return super.load(a,o,u,d)}}const D={sunset:"venice/venice_sunset_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",night:"dikhololo/dikhololo_night_1k.hdr",warehouse:"empty-wharehouse/empty_warehouse_01_1k.hdr",forest:"forrest-slope/forest_slope_1k.hdr",apartment:"lebombo/lebombo_1k.hdr",studio:"studio-small-3/studio_small_03_1k.hdr",city:"potsdamer-platz/potsdamer_platz_1k.hdr",park:"rooitou/rooitou_park_1k.hdr",lobby:"st-fagans/st_fagans_interior_1k.hdr"},he="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/",_e=r=>r.current&&r.current.isScene,ge=r=>_e(r)?r.current:r;function V(r,a,i,u,d=0){const o=ge(a||i),f=o.background,_=o.environment,p=o.backgroundBlurriness||0;return r!=="only"&&(o.environment=u),r&&(o.background=u),r&&o.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=d),()=>{r!=="only"&&(o.environment=_),r&&(o.background=f),r&&o.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=p)}}function N({scene:r,background:a=!1,blur:i,map:u}){const d=x(o=>o.scene);return h.useLayoutEffect(()=>{if(u)return V(a,r,d,u,i)},[d,r,u,a,i]),null}function $({files:r=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:a="",preset:i=void 0,encoding:u=void 0,extensions:d}){if(i){if(!(i in D))throw new Error("Preset must be one of: "+Object.keys(D).join(", "));r=D[i],a=he}const o=Array.isArray(r),_=ae(o?le:me,o?[r]:r,v=>{v.setPath(a),d&&d(v)}),p=o?_[0]:_;return p.mapping=o?ie:se,p.encoding=u??o?ce:W,p}function q({background:r=!1,scene:a,blur:i,...u}){const d=$(u),o=x(f=>f.scene);return h.useLayoutEffect(()=>V(r,a,o,d,i),[d,r,a,o,i]),null}function Ee({children:r,near:a=1,far:i=1e3,resolution:u=256,frames:d=1,map:o,background:f=!1,blur:_,scene:p,files:v,path:I,preset:T=void 0,extensions:k}){const P=x(e=>e.gl),L=x(e=>e.scene),G=h.useRef(null),[M]=h.useState(()=>new Z),R=h.useMemo(()=>{const e=new ee(u);return e.texture.type=S,e},[u]);h.useLayoutEffect(()=>(d===1&&G.current.update(P,M),V(f,p,L,R.texture,_)),[r,M,R.texture,p,L,f,d,P]);let b=1;return re(()=>{(d===1/0||b<d)&&(G.current.update(P,M),b++)}),h.createElement(h.Fragment,null,te(h.createElement(h.Fragment,null,r,h.createElement("cubeCamera",{ref:G,args:[a,i,R]}),v||T?h.createElement(q,{background:!0,files:v,preset:T,path:I,extensions:k}):o?h.createElement(N,{background:!0,map:o,extensions:k}):null),M))}function fe(r){var a,i,u,d;const o=$(r),f=r.map||o;h.useMemo(()=>ne({GroundProjectedEnvImpl:de}),[]);const _=h.useMemo(()=>[f],[f]),p=(a=r.ground)==null?void 0:a.height,v=(i=r.ground)==null?void 0:i.radius,I=(u=(d=r.ground)==null?void 0:d.scale)!==null&&u!==void 0?u:1e3;return h.createElement(h.Fragment,null,h.createElement(N,oe({},r,{map:f})),h.createElement("groundProjectedEnvImpl",{args:_,scale:I,height:p,radius:v}))}function Re(r){return r.ground?h.createElement(fe,r):r.map?h.createElement(N,r):r.children?h.createElement(Ee,r):h.createElement(q,r)}export{Re as E};
