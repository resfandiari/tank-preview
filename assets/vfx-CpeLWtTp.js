import{i as e,l as t,x as n}from"./src-BE2yTG3E.js";import{n as r,o as i}from"./quality-DgMgzYb0.js";import{i as a}from"./skins-3cfGfNDx.js";import{$ as o,$t as s,A as c,An as l,B as u,Bn as d,C as f,D as p,Dn as m,E as h,En as g,F as _,Fn as v,G as y,Gn as b,Hn as x,I as S,In as C,J as w,K as T,Kn as E,L as D,Ln as O,M as k,Mn as ee,Nn as te,O as ne,On as re,Pn as ie,Q as ae,R as A,Rn as j,S as oe,Sn as se,T as M,U as N,Un as P,Vn as ce,W as le,Wn as ue,X as F,Xt as de,Y as I,Yt as fe,Z as L,Zt as pe,_ as me,_n as he,a as R,at as ge,b as _e,bn as ve,c as ye,cn as be,ct as xe,d as z,dt as Se,en as Ce,et as we,f as B,fn as Te,ft as Ee,g as De,gn as Oe,h as ke,hn as Ae,i as je,it as Me,j as Ne,jn as V,k as Pe,kn as Fe,l as Ie,ln as H,lt as Le,m as Re,mn as ze,mt as U,n as Be,nn as W,nt as G,o as Ve,p as He,pn as Ue,q as We,r as Ge,rt as Ke,sn as qe,st as Je,tn as Ye,tt as K,u as Xe,un as q,ut as Ze,v as Qe,vt as $e,w as et,wn as tt,x as nt,xn as rt,y as it,yn as at,yt as ot,zn as st}from"./three.core-DBW3OPms.js";function ct(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function lt(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new I},alphaMap:{value:null},alphaMapTransform:{value:new I},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new I}},envmap:{envMap:{value:null},envMapRotation:{value:new I},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new I}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new I}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new I},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new I},normalScale:{value:new l(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new I},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new I}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new I}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new I}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new I},alphaTest:{value:0},uvTransform:{value:new I}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new l(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new I},alphaMap:{value:null},alphaMapTransform:{value:new I},alphaTest:{value:0}}},ut={basic:{uniforms:P([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:P([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:P([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:P([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:P([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new z(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:P([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:P([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:P([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:P([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:P([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:P([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new I},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new I}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:P([Y.common,Y.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:P([Y.lights,Y.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};ut.physical={uniforms:P([ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new I},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new I},clearcoatNormalScale:{value:new l(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new I},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new I},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new I},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new I},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new I},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new I},transmissionSamplerSize:{value:new l},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new I},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new I},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new I},anisotropyVector:{value:new l},anisotropyMap:{value:null},anisotropyMapTransform:{value:new I}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var dt={r:0,b:0,g:0},ft=new F,pt=new I;pt.set(-1,0,0,0,1,0,0,0,1);function mt(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new L(new je(1,1,1),new q({name:`BackgroundCubeMaterial`,uniforms:C(ut.backgroundCube.uniforms),vertexShader:ut.backgroundCube.vertexShader,fragmentShader:ut.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ft.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pt),l.material.toneMapped=B.getTransfer(i.colorSpace)!==be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new L(new Ze(2,2),new q({name:`BackgroundMaterial`,uniforms:C(ut.background.uniforms),vertexShader:ut.background.vertexShader,fragmentShader:ut.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=B.getTransfer(i.colorSpace)!==be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(dt,ce(e)),n.buffers.color.setClear(dt.r,dt.g,dt.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ht(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function gt(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function _t(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(b(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&b(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:C}}function vt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Le,s=new I,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var yt=4,bt=6,xt=20,St=256,Ct=new Je,wt=new z,Tt=null,Et=0,Dt=0,Ot=!1,kt=new V,At=new V,jt=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=kt}=i;Tt=this._renderer.getRenderTarget(),Et=this._renderer.getActiveCubeFace(),Dt=this._renderer.getActiveMipmapLevel(),Ot=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tt,Et,Dt),this._renderer.xr.enabled=Ot,e.scissorTest=!1,Pt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tt=this._renderer.getRenderTarget(),Et=this._renderer.getActiveCubeFace(),Dt=this._renderer.getActiveMipmapLevel(),Ot=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:N,minFilter:N,generateMipmaps:!1,type:_,format:$e,colorSpace:T,depthBuffer:!1},r=Nt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nt(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mt(r)),this._blurMaterial=It(r,e,t),this._ggxMaterial=Ft(r,e,t)}return r}_compileMaterial(e){let t=new L(new Ve,e);this._renderer.compile(t,Ct)}_sceneToCubeUV(e,t,n,r,i){let a=new xe(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(wt),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new L(new je,new ae({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(wt),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Pt(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rt()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lt());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Pt(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ct)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-yt?n-d+yt:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Pt(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ct),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Pt(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ct)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Pt(t,3*l*(r>this._lodMax-yt?r-this._lodMax+yt:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ct)}};function Mt(e){let t=[],n=[],r=e,i=e-yt+1+bt;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?At.set(1,r,n):e===1?At.set(-n,1,-r):e===2?At.set(-n,r,1):e===3?At.set(-1,r,-n):e===4?At.set(-n,-1,r):At.set(n,r,-1),At.toArray(l,(e*6+t)*3)}}let u=new Ve;u.setAttribute(`position`,new R(c,3)),u.setAttribute(`outputDirection`,new R(l,3)),n.push(new L(u,null)),r>yt&&r--}return{lodMeshes:n,sizeLods:t}}function Nt(e,t,n){let r=new ie(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Pt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ft(e,t,n){return new q({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:St,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zt(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function It(e,t,n){return new q({name:`SphericalGaussianBlur`,defines:{SAMPLES:xt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zt(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lt(){return new q({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:zt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rt(){return new q({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zt(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bt=class extends ie{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new De(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new je(5,5,5),i=new q({name:`CubemapFromEquirect`,uniforms:C(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new L(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=N),new Re(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Vt(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Bt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new jt(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new jt(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ht(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&E(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ut(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ve:at)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Wt(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Gt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:st(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Kt(e,t,n){let r=new WeakMap,i=new ee;function a(a,o,s){let u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d===void 0?0:d.length,p=r.get(o);if(p===void 0||p.count!==f){p!==void 0&&p.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],d=o.morphAttributes.color||[],m=0;e===!0&&(m=1),n===!0&&(m=2),a===!0&&(m=3);let h=o.attributes.position.count*m,g=1;h>t.maxTextureSize&&(g=Math.ceil(h/t.maxTextureSize),h=t.maxTextureSize);let _=new Float32Array(h*g*4*f),v=new it(_,h,g,f);v.type=c,v.needsUpdate=!0;let y=m*4;for(let t=0;t<f;t++){let r=s[t],o=u[t],c=d[t],l=h*g*4*t;for(let t=0;t<r.count;t++){let s=t*y;e===!0&&(i.fromBufferAttribute(r,t),_[l+s+0]=i.x,_[l+s+1]=i.y,_[l+s+2]=i.z,_[l+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),_[l+s+4]=i.x,_[l+s+5]=i.y,_[l+s+6]=i.z,_[l+s+7]=0),a===!0&&(i.fromBufferAttribute(c,t),_[l+s+8]=i.x,_[l+s+9]=i.y,_[l+s+10]=i.z,_[l+s+11]=c.itemSize===4?i.w:1)}}p={count:f,texture:v,size:new l(h,g)},r.set(o,p);function b(){v.dispose(),r.delete(o),o.removeEventListener(`dispose`,b)}o.addEventListener(`dispose`,b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,u)}s.getUniforms().setValue(e,`morphTargetsTexture`,p.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,p.size)}return{update:a}}function qt(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Jt={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Yt(e,t,n,r,i,a){let o=new ie(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ve;l.setAttribute(`position`,new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Pe([0,2,0,0,2,0],2));let u=new pe({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new L(l,u),f=new Je(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new ie(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new ie(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},B.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Jt[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Xt=new Ae,Zt=new f(1,1),Qt=new it,$t=new Qe,en=new De,tn=[],nn=[],rn=new Float32Array(16),an=new Float32Array(9),on=new Float32Array(4);function sn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=tn[i];if(a===void 0&&(a=new Float32Array(i),tn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function cn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ln(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function un(e,t){let n=nn[t];n===void 0&&(n=new Int32Array(t),nn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function dn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function fn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2fv(this.addr,t),ln(n,t)}}function pn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(cn(n,t))return;e.uniform3fv(this.addr,t),ln(n,t)}}function mn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4fv(this.addr,t),ln(n,t)}}function hn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ln(n,t)}else{if(cn(n,r))return;on.set(r),e.uniformMatrix2fv(this.addr,!1,on),ln(n,r)}}function gn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ln(n,t)}else{if(cn(n,r))return;an.set(r),e.uniformMatrix3fv(this.addr,!1,an),ln(n,r)}}function _n(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(cn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ln(n,t)}else{if(cn(n,r))return;rn.set(r),e.uniformMatrix4fv(this.addr,!1,rn),ln(n,r)}}function vn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2iv(this.addr,t),ln(n,t)}}function bn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3iv(this.addr,t),ln(n,t)}}function xn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4iv(this.addr,t),ln(n,t)}}function Sn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Cn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(cn(n,t))return;e.uniform2uiv(this.addr,t),ln(n,t)}}function wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(cn(n,t))return;e.uniform3uiv(this.addr,t),ln(n,t)}}function Tn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(cn(n,t))return;e.uniform4uiv(this.addr,t),ln(n,t)}}function En(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Zt.compareFunction=n.isReversedDepthBuffer()?518:515,a=Zt):a=Xt,n.setTexture2D(t||a,i)}function Dn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||$t,i)}function On(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||en,i)}function kn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Qt,i)}function An(e){switch(e){case 5126:return dn;case 35664:return fn;case 35665:return pn;case 35666:return mn;case 35674:return hn;case 35675:return gn;case 35676:return _n;case 5124:case 35670:return vn;case 35667:case 35671:return yn;case 35668:case 35672:return bn;case 35669:case 35673:return xn;case 5125:return Sn;case 36294:return Cn;case 36295:return wn;case 36296:return Tn;case 35678:case 36198:case 36298:case 36306:case 35682:return En;case 35679:case 36299:case 36307:return Dn;case 35680:case 36300:case 36308:case 36293:return On;case 36289:case 36303:case 36311:case 36292:return kn}}function jn(e,t){e.uniform1fv(this.addr,t)}function Mn(e,t){let n=sn(t,this.size,2);e.uniform2fv(this.addr,n)}function Nn(e,t){let n=sn(t,this.size,3);e.uniform3fv(this.addr,n)}function Pn(e,t){let n=sn(t,this.size,4);e.uniform4fv(this.addr,n)}function Fn(e,t){let n=sn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function In(e,t){let n=sn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ln(e,t){let n=sn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Rn(e,t){e.uniform1iv(this.addr,t)}function zn(e,t){e.uniform2iv(this.addr,t)}function Bn(e,t){e.uniform3iv(this.addr,t)}function Vn(e,t){e.uniform4iv(this.addr,t)}function Hn(e,t){e.uniform1uiv(this.addr,t)}function Un(e,t){e.uniform2uiv(this.addr,t)}function Wn(e,t){e.uniform3uiv(this.addr,t)}function Gn(e,t){e.uniform4uiv(this.addr,t)}function Kn(e,t,n){let r=this.cache,i=t.length,a=un(n,i);cn(r,a)||(e.uniform1iv(this.addr,a),ln(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Zt:Xt;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function qn(e,t,n){let r=this.cache,i=t.length,a=un(n,i);cn(r,a)||(e.uniform1iv(this.addr,a),ln(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||$t,a[e])}function Jn(e,t,n){let r=this.cache,i=t.length,a=un(n,i);cn(r,a)||(e.uniform1iv(this.addr,a),ln(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||en,a[e])}function Yn(e,t,n){let r=this.cache,i=t.length,a=un(n,i);cn(r,a)||(e.uniform1iv(this.addr,a),ln(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Qt,a[e])}function Xn(e){switch(e){case 5126:return jn;case 35664:return Mn;case 35665:return Nn;case 35666:return Pn;case 35674:return Fn;case 35675:return In;case 35676:return Ln;case 5124:case 35670:return Rn;case 35667:case 35671:return zn;case 35668:case 35672:return Bn;case 35669:case 35673:return Vn;case 5125:return Hn;case 36294:return Un;case 36295:return Wn;case 36296:return Gn;case 35678:case 36198:case 36298:case 36306:case 35682:return Kn;case 35679:case 36299:case 36307:return qn;case 35680:case 36300:case 36308:case 36293:return Jn;case 36289:case 36303:case 36311:case 36292:return Yn}}var Zn=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=An(t.type)}},Qn=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xn(t.type)}},$n=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},er=/(\w+)(\])?(\[|\.)?/g;function tr(e,t){e.seq.push(t),e.map[t.id]=t}function nr(e,t,n){let r=e.name,i=r.length;for(er.lastIndex=0;;){let a=er.exec(r),o=er.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){tr(n,l===void 0?new Zn(s,e,t):new Qn(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new $n(s),tr(n,e)),n=e}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);nr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ir(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ar=37297,or=0;function sr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var cr=new I;function lr(e){B._getMatrix(cr,B.workingColorSpace,e);let t=`mat3( ${cr.elements.map(e=>e.toFixed(4))} )`;switch(B.getTransfer(e)){case We:return[t,`LinearTransferOETF`];case be:return[t,`sRGBTransferOETF`];default:return b(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ur(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+sr(e.getShaderSource(t),r)}return i}function dr(e,t){let n=lr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var fr={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function pr(e,t){let n=fr[t];return n===void 0?(b(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var mr=new V;function hr(){return B.getLuminanceCoefficients(mr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${mr.x.toFixed(4)}, ${mr.y.toFixed(4)}, ${mr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function gr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(yr).join(`
`)}function _r(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function vr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function yr(e){return e!==``}function br(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xr(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cr(e){return e.replace(Sr,Tr)}var wr=new Map;function Tr(e,t){let n=J[t];if(n===void 0){let e=wr.get(t);if(e!==void 0)n=J[e],b(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Cr(n)}var Er=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dr(e){return e.replace(Er,Or)}function Or(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function kr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ar={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function jr(e){return Ar[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Mr={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Nr(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Mr[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Pr={302:`ENVMAP_MODE_REFRACTION`};function Fr(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Pr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ir={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Lr(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ir[e.combine]||`ENVMAP_BLENDING_NONE`}function Rr(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function zr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=jr(n),l=Nr(n),u=Fr(n),d=Lr(n),f=Rr(n),p=gr(n),m=_r(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(yr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(yr).join(`
`),_.length>0&&(_+=`
`)):(g=[kr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(yr).join(`
`),_=[kr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:pr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,dr(`linearToOutputTexel`,n.outputColorSpace),hr(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(yr).join(`
`)),o=Cr(o),o=br(o,n),o=xr(o,n),s=Cr(s),s=br(s,n),s=xr(s,n),o=Dr(o),s=Dr(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,x=v+_+s,S=ir(i,i.VERTEX_SHADER,y),C=ir(i,i.FRAGMENT_SHADER,x);i.attachShader(h,S),i.attachShader(h,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(S)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,S,C);else{let e=ur(i,S,`vertex`),n=ur(i,C,`fragment`);st(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):b(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(S),i.deleteShader(C),T=new rr(i,h),E=vr(i,h)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(h,ar)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=or++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=C,this}var Br=0,Vr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hr(e),t.set(e,n)),n}},Hr=class{constructor(e){this.id=Br++,this.code=e,this.usedTimes=0}};function Ur(e){return e===1030||e===37490||e===36285}function Wr(e,t,n,r,i,a){let o=new u,s=new Vr,c=new Set,l=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return c.add(e),e===0?`uv`:`uv${e}`}function g(i,o,l,u,d,g){let _=u.fog,v=d.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||y,x),C=S&&S.mapping===306?S.image.height:null,w=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&b(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let T=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,E=T===void 0?0:T.length,D=0;v.morphAttributes.position!==void 0&&(D=1),v.morphAttributes.normal!==void 0&&(D=2),v.morphAttributes.color!==void 0&&(D=3);let O,k,ee,te;if(w){let e=ut[w];O=e.vertexShader,k=e.fragmentShader}else{O=i.vertexShader,k=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,te=t.id}let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),ie=d.isInstancedMesh===!0,ae=d.isBatchedMesh===!0,A=!!i.map,j=!!i.matcap,oe=!!S,se=!!i.aoMap,M=!!i.lightMap,N=!!i.bumpMap&&i.wireframe===!1,P=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,F=!!i.roughnessMap,de=i.anisotropy>0,I=i.clearcoat>0,fe=i.dispersion>0,L=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,R=de&&!!i.anisotropyMap,ge=I&&!!i.clearcoatMap,_e=I&&!!i.clearcoatNormalMap,ve=I&&!!i.clearcoatRoughnessMap,ye=pe&&!!i.iridescenceMap,be=pe&&!!i.iridescenceThicknessMap,xe=me&&!!i.sheenColorMap,z=me&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=he&&!!i.transmissionMap,Ee=he&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,ke=i.alphaTest>0,Ae=!!i.alphaHash,je=!!i.extensions,Me=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:k,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:ae,batchingColor:ae&&d._colorsTexture!==null,instancing:ie,instancingColor:ie&&d.instanceColor!==null,instancingMorph:ie&&d.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:B.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:A,matcap:j,envMap:oe,envMapMode:oe&&S.mapping,envMapCubeUVHeight:C,aoMap:se,lightMap:M,bumpMap:N,normalMap:P,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:P&&i.normalMapType===1,normalMapTangentSpace:P&&i.normalMapType===0,packedNormalMap:P&&i.normalMapType===0&&Ur(i.normalMap.format),metalnessMap:ue,roughnessMap:F,anisotropy:de,anisotropyMap:R,clearcoat:I,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:ve,dispersion:fe,retroreflection:L,iridescence:pe,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:me,sheenColorMap:xe,sheenRoughnessMap:z,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:he,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ke,alphaHash:Ae,combine:i.combine,mapUv:A&&h(i.map.channel),aoMapUv:se&&h(i.aoMap.channel),lightMapUv:M&&h(i.lightMap.channel),bumpMapUv:N&&h(i.bumpMap.channel),normalMapUv:P&&h(i.normalMap.channel),displacementMapUv:ce&&h(i.displacementMap.channel),emissiveMapUv:le&&h(i.emissiveMap.channel),metalnessMapUv:ue&&h(i.metalnessMap.channel),roughnessMapUv:F&&h(i.roughnessMap.channel),anisotropyMapUv:R&&h(i.anisotropyMap.channel),clearcoatMapUv:ge&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:z&&h(i.sheenRoughnessMap.channel),specularMapUv:Se&&h(i.specularMap.channel),specularColorMapUv:Ce&&h(i.specularColorMap.channel),specularIntensityMapUv:we&&h(i.specularIntensityMap.channel),transmissionMapUv:Te&&h(i.transmissionMap.channel),thicknessMapUv:Ee&&h(i.thicknessMap.channel),alphaMapUv:Oe&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(P||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!v.attributes.uv&&(A||Oe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&P===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:A&&i.map.isVideoTexture===!0&&B.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&B.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:je&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(je&&i.extensions.multiDraw===!0||ae)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function x(e){let t=m[e.type],n;if(t){let e=ut[t];n=rt.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r=d.get(n);return r===void 0?(r=new zr(e,n,t,i),l.push(r),d.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),d.delete(e.cacheKey),e.destroy()}}function w(e){s.remove(e)}function T(){s.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:T}}function Gr(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Kr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jr(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Kr),r.length>1&&r.sort(t||qr),i.length>1&&i.sort(t||qr)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Yr(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Jr,e.set(t,[i])):n>=r.length?(i=new Jr,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new z};break;case`SpotLight`:n={position:new V,direction:new V,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Zr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new l,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Qr=0;function $r(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ei(e){let t=new Xr,n=Zr(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new F,o=new F;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort($r);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Qr++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ti(e){let t=new ei(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ni(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ti(e),t.set(n,[a])):r>=i.length?(a=new ti(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ri=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ii=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ai=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],oi=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],si=new F,ci=new V,li=new V;function ui(e,t,n){let r=new k,i=new l,a=new l,s=new ee,u=new o,d=new we,p={},m=n.maxTextureSize,h={0:1,1:0,2:2},v=new q({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new l},radius:{value:4}},vertexShader:ri,fragmentShader:ii}),y=v.clone();y.defines.HORIZONTAL_PASS=1;let x=new Ve;x.setAttribute(`position`,new R(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new L(x,v),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(t,n,o){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||t.length===0)return;this.type===2&&(b(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let h=w!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],d=u.shadow;if(d===void 0){b(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let v=d.getFrameExtents();i.multiply(v),a.copy(d.mapSize),(i.x>m||i.y>m)&&(i.x>m&&(a.x=Math.floor(m/v.x),i.x=a.x*v.x,d.mapSize.x=a.x),i.y>m&&(a.y=Math.floor(m/v.y),i.y=a.y*v.y,d.mapSize.y=a.y));let y=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=y,d.map===null||h===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(u.isPointLight){b(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ie(i.x,i.y,{format:fe,type:_,minFilter:N,magFilter:N,generateMipmaps:!1}),d.map.texture.name=u.name+`.shadowMap`,d.map.depthTexture=new f(i.x,i.y,c),d.map.depthTexture.name=u.name+`.shadowMapDepth`,d.map.depthTexture.format=nt,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ke,d.map.depthTexture.magFilter=Ke}else u.isPointLight?(d.map=new Bt(i.x),d.map.depthTexture=new ke(i.x,g)):(d.map=new ie(i.x,i.y),d.map.depthTexture=new f(i.x,i.y,g)),d.map.depthTexture.name=u.name+`.shadowMap`,d.map.depthTexture.format=nt,this.type===1?(d.map.depthTexture.compareFunction=y?518:515,d.map.depthTexture.minFilter=N,d.map.depthTexture.magFilter=N):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Ke,d.map.depthTexture.magFilter=Ke);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let x=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();u.isPointLight!==!0&&d.updateMatrices(u,o);for(let t=0;t<x;t++){let i=d.getCamera(t);if(u.isPointLight){let e=d.camera,n=d.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ci.setFromMatrixPosition(u.matrixWorld),e.position.copy(ci),li.copy(e.position),li.add(ai[t]),e.up.copy(oi[t]),e.lookAt(li),e.updateMatrixWorld(),n.makeTranslation(-ci.x,-ci.y,-ci.z),si.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(si,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(s)}r=d.getFrustum(t),D(n,o,i,u,this.type)}d.isPointLightShadow!==!0&&this.type===3&&T(d,o),d.needsUpdate=!1}w=this.type,C.needsUpdate=!1,e.setRenderTarget(l,u,d)};function T(n,r){let a=t.update(S);v.defines.VSM_SAMPLES!==n.blurSamples&&(v.defines.VSM_SAMPLES=n.blurSamples,y.defines.VSM_SAMPLES=n.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),n.mapPass===null?n.mapPass=new ie(i.x,i.y,{format:fe,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),v.uniforms.shadow_pass.value=n.map.depthTexture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,v,S,null),y.uniforms.shadow_pass.value=n.mapPass.texture,y.uniforms.resolution.value.set(n.map.width,n.map.height),y.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,y,S,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?d:u,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=p[e];r===void 0&&(r={},p[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,O)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?h[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=E(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)D(c[e],i,a,o,s)}function O(e){e.target.removeEventListener(`dispose`,O);for(let t in p){let n=p[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function di(e,t){function n(){let t=!1,n=new ee,r=null,i=new ee(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ye[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,te=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,ae=0,A=e.getParameter(e.VERSION);A.indexOf(`WebGL`)===-1?A.indexOf(`OpenGL ES`)!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),ie=ae>=2):(ae=parseFloat(/^WebGL (\d)/.exec(A)[1]),ie=ae>=1);let j=null,oe={},se=e.getParameter(e.SCISSOR_BOX),M=e.getParameter(e.VIEWPORT),N=new ee().fromArray(se),P=new ee().fromArray(M);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),R(!1),ge(1),ue(e.CULL_FACE),me(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function I(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let L={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};L[103]=e.MIN,L[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(F(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:st(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:st(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:st(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:st(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(L[n],L[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?F(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),R(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function R(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?F(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(ie&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(te!==n||ne!==r)&&(te=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function ye(t){t?ue(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+re-1),j!==t&&(e.activeTexture(t),j=t)}function xe(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+re-1:j);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Se(){let t=oe[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){st(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){st(`WebGLState:`,e)}}function B(){try{e.texSubImage2D(...arguments)}catch(e){st(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){st(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){st(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){st(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){st(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){st(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){st(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){st(`WebGLState:`,e)}}function Me(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ne(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){N.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),N.copy(t))}function Pe(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function H(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,k=null,te=null,ne=null,N.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:F,bindFramebuffer:de,drawBuffers:I,useProgram:fe,setBlending:me,setMaterial:he,setFlipSided:R,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:Ae,texImage3D:je,pixelStorei:Ne,getParameter:Me,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:B,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:V,viewport:Pe,reset:H}}function fi(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new l,f=new WeakMap,p=new Set,m,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):j(`canvas`)}function v(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);m===void 0&&(m=_(n,a));let o=t?_(n,a):m;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),b(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&b(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function x(e){return e.generateMipmaps}function S(t){e.generateMipmap(t)}function C(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];b(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||b(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?We:B.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function T(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,b(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function E(e,t){return x(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),k(t),t.isVideoTexture&&f.delete(t),t.isHTMLTexture&&p.delete(t)}function O(e){let t=e.target;t.removeEventListener(`dispose`,O),te(t)}function k(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=h.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ee(e),Object.keys(i).length===0&&h.delete(n)}r.remove(e)}function ee(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=h.get(i);delete a[n.__cacheKey],o.memory.textures--}function te(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function A(){let e=ne;return e>=i.maxTextures&&b(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&ke(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)b(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)b(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?he(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?R(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let F={[Ce]:e.REPEAT,[Xe]:e.CLAMP_TO_EDGE,[G]:e.MIRRORED_REPEAT},de={[Ke]:e.NEAREST,[ge]:e.NEAREST_MIPMAP_NEAREST,[Me]:e.NEAREST_MIPMAP_LINEAR,[N]:e.LINEAR,[y]:e.LINEAR_MIPMAP_NEAREST,[le]:e.LINEAR_MIPMAP_LINEAR},I={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&b(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,F[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,F[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,F[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,I[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function L(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D));let i=n.source,a=h.get(i);a===void 0&&(a={},h.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ee(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=pe(n.start,r.width,4),c=pe(t.start,r.width,4);n.start<=i+1&&a===c&&pe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function he(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=L(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=B.getPrimaries(B.workingColorSpace),r=o.colorSpace===``?null:B.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=Ae(o,t);let r=a.convert(o.format,o.colorSpace),m=a.convert(o.type),h=w(o.internalFormat,r,m,o.normalized,o.colorSpace,o.isVideoTexture);fe(c,o);let g,_=o.mipmaps,y=o.isVideoTexture!==!0,C=f.__version===void 0||l===!0,D=u.dataReady,O=E(o,t);if(o.isDepthTexture)h=T(o.format===oe,o.type),C&&(y?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,null));else if(o.isDataTexture){if(_.length>0){y&&C&&n.texStorage2D(e.TEXTURE_2D,O,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],y?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,m,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,m,g.data);o.generateMipmaps=!1}else y?(C&&n.texStorage2D(e.TEXTURE_2D,O,h,t.width,t.height),D&&me(o,t,r,m)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,m,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){y&&C&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,h,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(g=_[i],o.format!==1023){if(r!==null){if(y){if(D){if(o.layerUpdates.size>0){let t=d(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,g.data,0,0)}else b(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,m,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,h,g.width,g.height,t.depth,0,r,m,g.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{y&&C&&n.texStorage2D(e.TEXTURE_2D,O,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],o.format===1023?y?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,m,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,m,g.data):r===null?b(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(o.isDataArrayTexture){if(y){if(C&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,h,t.width,t.height,t.depth),D){if(o.layerUpdates.size>0){let i=d(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,m,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,m,t.data)}else if(o.isData3DTexture)y?(C&&n.texStorage3D(e.TEXTURE_3D,O,h,t.width,t.height,t.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,m,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,m,t.data);else if(o.isFramebufferTexture){if(C){if(y)n.texStorage2D(e.TEXTURE_2D,O,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<O;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,m,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),p.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of p)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(y&&C){let t=je(_[0]);n.texStorage2D(e.TEXTURE_2D,O,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],y?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,m,g):n.texImage2D(e.TEXTURE_2D,t,h,r,m,g);o.generateMipmaps=!1}else if(y){if(C){let r=je(t);n.texStorage2D(e.TEXTURE_2D,O,h,r.width,r.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,m,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,m,t);x(o)&&S(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function R(t,o,s){if(o.image.length!==6)return;let c=L(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=B.getPrimaries(B.workingColorSpace),r=o.colorSpace===``?null:B.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ae(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),y=w(o.internalFormat,g,_,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,D=l.dataReady,O=E(o,h);fe(e.TEXTURE_CUBE_MAP,o);let k;if(f){C&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,y,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?C?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,g,_,i.data):g===null?b(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,C&&T){k.length>0&&O++;let t=je(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,y,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;C?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,i.width,i.height,0,g,_,i.data)}}else{C?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];C?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,g,_,i.image[t])}}}x(o)&&S(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=w(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,De(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=T(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=w(o.internalFormat,c,l,o.normalized,o.colorSpace);Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,D)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=De(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function z(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=w(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);x(i)&&S(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),fe(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),x(a)&&S(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),fe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);x(i)&&S(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Se(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(x(a)){let t=C(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),S(t),n.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(l),Te.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ke(e){let t=o.render.frame;f.get(e)!==t&&(f.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(B.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&b(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):st(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=A,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=M,this.setTexture2DArray=P,this.setTexture3D=ce,this.setTextureCube=ue,this.rebindTextures=xe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pi(e,t){function n(n,r=``){let i,a=B.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var mi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hi=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ne(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new q({vertexShader:mi,fragmentShader:hi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new L(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_i=class extends p{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,p=null,m=null,h=null,_=typeof XRWebGLBinding<`u`,y=new gi,x={},S=t.getContextAttributes(),C=null,w=null,T=[],E=[],D=new l,O=null,k=null,te=new xe;te.viewport=new ee;let re=new xe;re.viewport=new ee;let ae=[te,re],A=new Ge,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=T[e];return t===void 0&&(t=new v,T[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=T[e];return t===void 0&&(t=new v,T[e]=t),t.getGripSpace()},this.getHand=function(e){let t=T[e];return t===void 0&&(t=new v,T[e]=t),t.getHandSpace()};function N(e){let t=E.indexOf(e.inputSource);if(t===-1)return;let n=T[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,ce);for(let e=0;e<T.length;e++){let t=E[e];t!==null&&(E[e]=null,T[e].disconnect(t))}j=null,M=null,y.reset();for(let e in x)delete x[e];if(e.setRenderTarget(C),m=null,p=null,d=null,r=null,w=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&b(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&b(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(C=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,ce),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;S.depth&&(o=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=S.stencil?oe:nt,a=S.stencil?tt:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),p=d.createProjectionLayer(s),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new ie(p.textureWidth,p.textureHeight,{format:$e,type:se,depthTexture:new f(p.textureWidth,p.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let n={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:i};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new ie(m.framebufferWidth,m.framebufferHeight,{format:$e,type:se,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ce(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=E.indexOf(n);r>=0&&(E[r]=null,T[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=E.indexOf(n);if(r===-1){for(let e=0;e<T.length;e++)if(e>=E.length){E.push(n),r=e;break}else if(E[e]===null){E[e]=n,r=e;break}if(r===-1)break}let i=T[r];i&&i.connect(n)}}let le=new V,ue=new V;function F(e,t,n){le.setFromMatrixPosition(t.matrixWorld),ue.setFromMatrixPosition(n.matrixWorld);let r=le.distanceTo(ue),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;y.texture!==null&&(y.depthNear>0&&(t=y.depthNear),y.depthFar>0&&(n=y.depthFar)),A.near=re.near=te.near=t,A.far=re.far=te.far=n,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,re.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?F(A,te,re):A.projectionMatrix.copy(te.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),I(e,A,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=U*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(p!==null||m!==null)return s},this.setFoveation=function(e){s=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(A)},this.getCameraTexture=function(e){return x[e]};let fe=null;function L(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(m!==null)a=m.getViewport(r);else{let t=d.getViewSubImage(p,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(w,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(w))}let o=ae[n];o===void 0&&(o=new xe,o.layers.enable(n),o.viewport=new ee,ae[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&_){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&y.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&_){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=x[n];e||(e=new ne,x[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<T.length;e++){let t=E[e],n=T[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let pe=new ct;pe.setAnimationLoop(L),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},vi=new F,yi=new I;yi.set(-1,0,0,0,1,0,0,0,1);function bi(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ce(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(vi.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(yi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xi(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return st(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?b(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):b(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Si=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function wi(){return Ci===null&&(Ci=new _e(Si,16,16,fe,_),Ci.name=`DFG_LUT`,Ci.minFilter=N,Ci.magFilter=N,Ci.wrapS=Xe,Ci.wrapT=Xe,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Ti=class{constructor(e={}){let{canvas:t=O(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=se}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let v=p,y=new Set([ot,de,s]),S=new Set([se,g,Fe,tt,m,re]),C=new Uint32Array(4),w=new Int32Array(4),T=new V,E=null,D=null,ne=[],ae=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,oe=!1,M=null,N=null,P=null,ce=null;this._outputColorSpace=qe;let I=0,fe=0,L=null,pe=-1,me=null,he=new ee,R=new ee,ge=null,_e=new z(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new ee(0,0,ye,be),Te=new ee(0,0,ye,be),Ee=!1,De=new k,Oe=!1,ke=!1,Ae=new F,je=new V,Me=new ee,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Ie(){return L===null?xe:1}let H=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,U,Be,W,G,Ve,He,Ue,We,Ge,Ke,Je,Ye,K,Xe,q,Ze,Qe,$e,et,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,J,!1),t.addEventListener(`webglcontextrestored`,Y,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),H===null){let t=`webgl2`;if(H=Le(t,e),H===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,J,!1),t.removeEventListener(`webglcontextrestored`,Y,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),st(`WebGLRenderer: `+e.message),e}function it(){Re=new Ht(H),Re.init(),et=new pi(H,Re),ze=new _t(H,Re,e,et),U=new di(H,Re),ze.reversedDepthBuffer&&f&&U.buffers.depth.setReversed(!0),N=H.createFramebuffer(),P=H.createFramebuffer(),ce=H.createFramebuffer(),Be=new Gt(H),W=new Gr,G=new fi(H,Re,U,W,ze,et,Be),Ve=new Vt(j),He=new lt(H),nt=new ht(H,He),Ue=new Ut(H,He,Be,nt),We=new qt(H,Ue,He,nt,Be),Ze=new Kt(H,ze,G),K=new vt(W),Ge=new Wr(j,Ve,Re,ze,nt,K),Ke=new bi(j,W),Je=new Yr,Ye=new ni(Re),q=new mt(j,Ve,U,We,h,c),Xe=new ui(j,We,ze),rt=new xi(H,Be,ze,U),Qe=new gt(H,Re,Be),$e=new Wt(H,Re,Be),Be.programs=Ge.programs,j.capabilities=ze,j.extensions=Re,j.properties=W,j.renderLists=Je,j.shadowMap=Xe,j.state=U,j.info=Be}v!==1009&&(A=new Yt(v,t.width,t.height,o,r,i));let at=new _i(j,H);this.xr=at,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){at.isPresenting?b(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)st(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){b(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}A.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),U.viewport(he.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),U.scissor(R.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){U.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor(...arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=y.has(t)}if(e){let e=L.texture.type,t=S.has(e),n=q.getClearColor(),r=q.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(C[0]=i,C[1]=a,C[2]=o,C[3]=r,H.clearBufferuiv(H.COLOR,0,C)):(w[0]=i,w[1]=a,w[2]=o,w[3]=r,H.clearBufferiv(H.COLOR,0,w))}else r|=H.COLOR_BUFFER_BIT}t&&(r|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&H.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,J,!1),t.removeEventListener(`webglcontextrestored`,Y,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),q.dispose(),Je.dispose(),Ye.dispose(),W.dispose(),Ve.dispose(),We.dispose(),nt.dispose(),rt.dispose(),Ge.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,St),at.removeEventListener(`sessionend`,Ct),wt.stop()};function J(e){e.preventDefault(),x(`WebGLRenderer: Context Lost.`),oe=!0}function Y(){x(`WebGLRenderer: Context Restored.`),oe=!1;let e=Be.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;it(),Be.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ut(e){st(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),W.remove(e)}function pt(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Pt(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=He.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(U.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(H.LINES)):g.setMode(H.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(H.LINES):i.isLineLoop?g.setMode(H.LINE_LOOP):g.setMode(H.LINE_STRIP)}else i.isPoints?g.setMode(H.POINTS):i.isSprite&&g.setMode(H.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(H,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function yt(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),Oe===!0&&K.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,At(e,t,r),e.side=0,e.needsUpdate=!0,At(e,t,r),e.side=2):At(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),D=Ye.get(n),D.init(t),ae.push(D),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),D.setupLights(),M!==null&&M.updateLights(D.state.lightsArray),ke=this.localClippingEnabled,Oe=K.init(this.clippingPlanes,ke),Oe===!0&&K.setGlobalState(this.clippingPlanes,t),M!==null&&Xe.render(D.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];yt(o,n,t,e),r.add(o)}else yt(i,n,t,e),r.add(i)}}),D=ae.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=W.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let bt=null;function xt(e){bt&&bt(e)}function St(){wt.stop()}function Ct(){wt.start()}let wt=new ct;wt.setAnimationLoop(xt),typeof self<`u`&&wt.setContext(self),this.setAnimationLoop=function(e){bt=e,at.setAnimationLoop(e),e===null?wt.stop():wt.start()},at.addEventListener(`sessionstart`,St),at.addEventListener(`sessionend`,Ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){st(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(oe===!0)return;M!==null&&M.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=A!==null&&(L===null||n)&&A.begin(j,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,L),D=Ye.get(e,ae.length),D.init(t),D.state.textureUnits=G.getTextureUnits(),ae.push(D),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,te,t.reversedDepth),ke=this.localClippingEnabled,Oe=K.init(this.clippingPlanes,ke),E=Je.get(e,ne.length),E.init(),ne.push(E),at.enabled===!0&&at.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Tt(e,t,-1/0,j.sortObjects)}Tt(e,t,0,j.sortObjects),E.finish(),M!==null&&M.updateLights(D.state.lightsArray),j.sortObjects===!0&&E.sort(Se,Ce),Pe=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Pe&&q.addToRenderList(E,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&K.beginShadows();let i=D.state.shadowsArray;if(Xe.render(i,e,t),Oe===!0&&K.endShadows(),(r&&A.hasRenderPass())===!1){let n=E.opaque,r=E.transmissive;if(D.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Dt(n,r,e,a)}Pe&&q.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Et(E,e,n,n.viewport)}}else r.length>0&&Dt(n,r,e,t),Pe&&q.render(e),Et(E,e,t)}L!==null&&fe===0&&(G.updateMultisampleRenderTarget(L),G.updateRenderTargetMipmap(L)),r&&A.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),nt.resetDefaultState(),pe=-1,me=null,ae.pop(),ae.length>0?(D=ae[ae.length-1],G.setTextureUnits(D.state.textureUnits),Oe===!0&&K.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,ne.pop(),E=ne.length>0?ne[ne.length-1]:null,M!==null&&M.renderEnd()};function Tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)D.pushLightProbeGrid(e);else if(e.isLight)D.pushLight(e),e.castShadow&&D.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=We.update(e),a=e.material;a.visible&&E.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&E.push(e,i,c,n,Me.z,s,t)}}else a.visible&&E.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Tt(i[e],t,n,r)}function Et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;D.setupLightsView(n),Oe===!0&&K.setGlobalState(j.clippingPlanes,n),r&&U.viewport(he.copy(r)),i.length>0&&Ot(i,t,n),a.length>0&&Ot(a,t,n),o.length>0&&Ot(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Dt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);D.state.transmissionRenderTarget[r.id]=new ie(1,1,{generateMipmaps:!0,type:e?_:se,minFilter:le,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:B.workingColorSpace})}let a=D.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&q.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),D.setupLightsView(r),Oe===!0&&K.setGlobalState(j.clippingPlanes,r),Ot(e,n,r),G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,kt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(G.updateMultisampleRenderTarget(a),G.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Ot(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&kt(o,t,n,s,l,c)}}function kt(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function At(e,t,n){t.isScene!==!0&&(t=Ne);let r=W.get(e),i=D.state.lights,a=D.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,D.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=Ge.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=K.uniform),Mt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=D.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=rr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];T.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(T))return n}return null}function Pt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),G.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?j.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:B.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=W.get(r),y=D.state.lights;if(Oe===!0&&(ke===!0||e!==me)){let t=e===me&&r.id===pe;K.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==K.numPlanes||v.numIntersection!==K.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=D.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=At(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(U.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==pe&&(pe=r.id,C=!0),v.needsLights){let e=Nt(D.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||me!==e){U.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(H,`projectionMatrix`,e.projectionMatrix),T.setValue(H,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(H,je.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&T.setValue(H,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(H,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(H,`sunShadowMap`,y.state.sunShadowMap,G),y.state.directionalShadowMap.length>0&&T.setValue(H,`directionalShadowMap`,y.state.directionalShadowMap,G),y.state.spotShadowMap.length>0&&T.setValue(H,`spotShadowMap`,y.state.spotShadowMap,G),y.state.pointShadowMap.length>0&&T.setValue(H,`pointShadowMap`,y.state.pointShadowMap,G)),i.isSkinnedMesh){T.setOptional(H,i,`bindMatrix`),T.setOptional(H,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(H,`boneTexture`,e.boneTexture,G))}i.isBatchedMesh&&(T.setOptional(H,i,`batchingTexture`),T.setValue(H,`batchingTexture`,i._matricesTexture,G),T.setOptional(H,i,`batchingIdTexture`),T.setValue(H,`batchingIdTexture`,i._indirectTexture,G),T.setOptional(H,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(H,`batchingColorTexture`,i._colorsTexture,G));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(H,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=wi()),C){if(T.setValue(H,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ft(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,xe,be,D.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}rr.upload(H,jt(v),E,G)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(rr.upload(H,jt(v),E,G),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(H,`center`,i.center),T.setValue(H,`modelViewMatrix`,i.modelViewMatrix),T.setValue(H,`normalMatrix`,i.normalMatrix),T.setValue(H,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return fe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=W.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,I=t,fe=n;let r=null,i=!1,a=!1;if(e){let o=W.get(e);if(o.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(H.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),R.copy(e.scissor),ge=e.scissorTest,U.viewport(he),U.scissor(R),U.setScissorTest(ge),pe=-1;return}if(o.__webglFramebuffer===void 0)G.setupRenderTarget(e);else if(o.__hasExternalTextures)G.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);G.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&G.useMultisampledRTT(e)===!1?W.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),R.copy(e.scissor),ge=e.scissorTest}else he.copy(we).multiplyScalar(xe).floor(),R.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=N),U.bindFramebuffer(H.FRAMEBUFFER,r)&&U.drawBuffers(e,r),U.viewport(he),U.scissor(R),U.setScissorTest(ge),i){let r=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=W.get(e.textures[t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=W.get(e.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,t.__webglTexture,n)}pe=-1};function Lt(e){let t=W.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){st(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){U.bindFramebuffer(H.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let u=Lt(o);if(u.__formatReadable===!1){st(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){st(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&H.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=L===null?null:W.get(L).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(H.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+s);let d=Lt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.bufferData(H.PIXEL_PACK_BUFFER,a.byteLength,H.STREAM_READ),H.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let p=L===null?null:W.get(L).__webglFramebuffer;U.bindFramebuffer(H.FRAMEBUFFER,p);let m=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ue(H,m,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,f),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,a),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(f),H.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;G.setTexture2D(e,0),H.copyTexSubImage2D(H.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(G.setTexture3D(t,0),v=H.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(G.setTexture2DArray(t,0),v=H.TEXTURE_2D_ARRAY):(G.setTexture2D(t,0),v=H.TEXTURE_2D),U.activeTexture(H.TEXTURE0),U.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(H.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(H.UNPACK_ROW_LENGTH),b=U.getParameter(H.UNPACK_IMAGE_HEIGHT),x=U.getParameter(H.UNPACK_SKIP_PIXELS),S=U.getParameter(H.UNPACK_SKIP_ROWS),C=U.getParameter(H.UNPACK_SKIP_IMAGES);U.pixelStorei(H.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(H.UNPACK_SKIP_PIXELS,l),U.pixelStorei(H.UNPACK_SKIP_ROWS,u),U.pixelStorei(H.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(H.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),H.blitFramebuffer(l,u,o,s,f,p,o,s,H.DEPTH_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(H.READ_FRAMEBUFFER,P),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,n.__webglTexture,i),T?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,r.__webglTexture,a),i===0?T?H.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):H.copyTexSubImage2D(v,a,f,p,l,u,o,s):H.blitFramebuffer(l,u,o,s,f,p,o,s,H.COLOR_BUFFER_BIT,H.NEAREST);U.bindFramebuffer(H.READ_FRAMEBUFFER,null),U.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?H.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):H.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):H.texSubImage2D(H.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(H.UNPACK_ROW_LENGTH,y),U.pixelStorei(H.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(H.UNPACK_SKIP_PIXELS,x),U.pixelStorei(H.UNPACK_SKIP_ROWS,S),U.pixelStorei(H.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&H.generateMipmap(v),U.unbindTexture()},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&G.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?G.setTextureCube(e,0):e.isData3DTexture?G.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?G.setTexture2DArray(e,0):G.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){I=0,fe=0,L=null,U.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return te}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=B._getDrawingBufferColorSpace(e),t.unpackColorSpace=B._getUnpackColorSpace()}};function Ei(e,t,n,r,i=2){let a=r.x-n.x,o=r.z-n.z,s=a*a+o*o;if(s<1)return!1;let c=e.x+e.width/2,l=e.y+e.height/2,u=((c-n.x)*a+(l-n.z)*o)/s;u=Math.max(0,Math.min(1,u));let d=n.x+a*u,f=n.z+o*u,p=Math.hypot(e.width,e.height)/2;return Math.hypot(c-d,l-f)>p+1.2?!1:t>n.y+(i-n.y)*u}var Di=new z,Oi=new F,ki=new Ee,Ai=new h,ji=new V,Mi=new V;function Ni(e,t){let n=e.index?e.toNonIndexed():e.clone();n.getAttribute(`normal`)||n.computeVertexNormals();let r=n.getAttribute(`position`).count,i=new Float32Array(r*3);Di.set(t);for(let e=0;e<r;e++)i[e*3]=Di.r,i[e*3+1]=Di.g,i[e*3+2]=Di.b;n.setAttribute(`color`,new R(i,3));for(let e of[`uv`,`uv1`,`uv2`,`uv3`,`tangent`])n.getAttribute(e)&&n.deleteAttribute(e);return n}function Pi(e){let[t,n,r]=e.at??[0,0,0],[i,a,o]=e.rot??[0,0,0],[s,c,l]=e.scale??[1,1,1];return Ai.set(i,a,o),ki.setFromEuler(Ai),Oi.compose(ji.set(t,n,r),ki,Mi.set(s,c,l)).clone()}var X=class{parts=[];add(e,t,n){let r=Ni(e,t);return n&&r.applyMatrix4(Pi(n)),this.parts.push(r),this}append(e,t){let n=e.index?e.toNonIndexed():e.clone();if(!n.getAttribute(`color`))throw Error(`append() needs a vertex-coloured geometry`);return t&&n.applyMatrix4(Pi(t)),this.parts.push(n),this}box(e,t,n,r){return this.add(new je(e[0],e[1],e[2]),n,{at:t,rot:r})}cylinder(e,t,n,r,i,a,o){return this.add(new me(e,t,n,r),a,{at:i,rot:o})}cone(e,t,n,r,i,a){return this.add(new He(e,t,n),i,{at:r,rot:a})}ico(e,t,n,r,i,a){return this.add(new D(e,t),r,{at:n,scale:i,rot:a})}sphere(e,t,n,r,i=10){return this.add(new Te(e,i,Math.max(4,i/2)),n,{at:t,scale:r})}plane(e,t,n,r,i){return this.add(new Ze(e,t),r,{at:n,rot:i??[-Math.PI/2,0,0]})}disc(e,t,n,r){return this.add(new Ie(e,t),r,{at:n,rot:[-Math.PI/2,0,0]})}torus(e,t,n,r,i){return this.add(new he(e,t,6,20),r,{at:n,rot:i??[-Math.PI/2,0,0]})}build(){if(this.parts.length===0)return new Ve;let e=0;for(let t of this.parts)e+=t.getAttribute(`position`).count;let t=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e*3),i=0;for(let e of this.parts){let a=e.getAttribute(`position`);t.set(a.array,i*3),n.set(e.getAttribute(`normal`).array,i*3),r.set(e.getAttribute(`color`).array,i*3),i+=a.count,e.dispose()}let a=new Ve;return a.setAttribute(`position`,new R(t,3)),a.setAttribute(`normal`,new R(n,3)),a.setAttribute(`color`,new R(r,3)),a.computeBoundingSphere(),a.computeBoundingBox(),a}};function Fi(e,t,n,r){let i=e/2,a=r/2,o=new Float32Array([-i,t,a,i,t,a,0,n,a,i,t,-a,-i,t,-a,0,n,-a]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1]),c=new Ve;return c.setAttribute(`position`,new R(o,3)),c.setAttribute(`normal`,new R(s,3)),c}function Ii(e,t,n,r,i,a,o){e.cylinder(.13*i,.2*i,2.4*i,6,[t,n+1.2*i,r],9067061);for(let[s,c]of[{r:1.12,y:3.1,sx:1.05,sz:1},{r:.92,y:3.9,sx:.95,sz:.95},{r:.7,y:4.55,sx:.85,sz:.85}].entries()){let l=a+s*1.7;e.ico(c.r*i,0,[t+Math.cos(l)*.16*i,n+c.y*i,r+Math.sin(l)*.16*i],o,[c.sx,1,c.sz],[0,l,0])}}var Z={sky:{zenith:4165600,horizon:14150911,sun:16774364,sunDir:new V(.55,.78,.32).normalize()},fog:14150911,sunLight:16774111,hemiSky:14676479,hemiGround:8161882,asphalt:4935768,asphaltSpeckle:5659749,paint:15921126,sidewalk:13617597,sidewalkEdge:11775391,lawn:7187282,lawnDark:5738307,plaza:13221289,plazaJoint:14866889,plazaBorder:11773326,parkingLot:6251885,yardGravel:9931640,yardRut:8155487,marketPaving:14201998,marketJoint:15654340,path:13548437,water:6211816,waterDeep:3844303,stone:12169892,trunk:9067061,foliage:[5217858,6533709,4164670,7781720,5810250],flowers:[16739210,16765286,15921906,11898111,16752453],car:[15026253,4099831,16103231,4700289,15921906,10134450,9067775,3095372],carDark:2435891,carGlass:3100003,crateWood:12618318,stallWood:8016434,stallCanopy:15026253,stallCanopyLight:16774368,produce:[7127114,16752453,15026253,16765286],crateDark:7293480,barrel:13653823,barrelBand:5988198,bin:5204823,binLid:3821890,fence:15789540,metal:7239297,trafficLight:3093562,trafficRed:16734810,trafficYellow:16765286,trafficGreen:6543754,wall:11117203,wallTop:8354414,roofHouse:[12604735,10246714,5597306,4161390,11880506,8014388],roofShop:[5464430,4161402,7035466],roofTower:[5069414,3951190,6318965],roofWall:[8354414],houseWalls:[16182488,15982016,15389614,16246964,14478281,15259886,15911347,14477812,16447212],shopWalls:[15980964,15714720,15262676,14280658,15781828],towerWalls:[15660023,14674418,15331057,14017518],wallWalls:[13222578],tankEnemy:[5219327,16739179,10320895,4180362,16752453,5621974],tankTrack:2830134,tankMetal:9147811,tankGlass:3100003,bullet:16769162,bulletCore:16774864,bulletT2:16762967,bulletT3:16751164,bulletT4:16738860,bulletDim:12083740,pickup:6279306,pickupGolden:16763196,pickupDark:2767663,pickupGoldenDark:9067008,heliBody:3228506,heliStripe:15921906,heliGlass:7910616,heliRotor:11187908,heliLight:16734810,fire:16747069,fireHot:16765286,smoke:7170662,dust:14207922,spark:16770723};function Li(e,t){let n=e[(Math.floor(t)%e.length+e.length)%e.length];if(n===void 0)throw Error(`empty palette`);return n}function Ri(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var zi={house_small:{style:0,wallTop:.78,cell:[2.7,2.9],walls:Z.houseWalls,roofs:Z.roofHouse,roughness:.88,metalness:0},house_large:{style:0,wallTop:.8,cell:[3.1,3.3],walls:Z.houseWalls,roofs:Z.roofHouse,roughness:.86,metalness:0},shop:{style:1,wallTop:.92,cell:[3.5,3.4],walls:Z.shopWalls,roofs:Z.roofShop,roughness:.8,metalness:.04},tower:{style:2,wallTop:.94,cell:[2.5,3.1],walls:Z.towerWalls,roofs:Z.roofTower,roughness:.55,metalness:.22},wall:{style:3,wallTop:1,cell:[4,3],walls:Z.wallWalls,roofs:Z.roofWall,roughness:1,metalness:0}},Bi=zi.house_small;function Vi(e){return zi[e]??Bi}function Hi(e,t){let n=e.wallTop,r=new X;r.box([1,n,1],[0,n/2,0],16777215),r.add(Fi(1,n,1,1),16777215);let i=new X,a=16777215;i.box([1.04,.03,1.04],[0,.015,0],a),i.box([1.03,.035,1.03],[0,n,0],a);let o=1-n,s=.5,c=Math.atan2(o,s),l=Math.hypot(s,o)+.07;i.box([l,.04,1.07],[.25,n+o/2,0],a,[0,0,-c]),i.box([l,.04,1.07],[-.25,n+o/2,0],a,[0,0,c]),i.box([.08,.05,1.09],[0,1,0],a);for(let e=0;e<15;e++){let t=-.47+e/14*.94;i.box([l*.98,.052,.012],[.25,n+o/2,t],9408399,[0,0,-c]),i.box([l*.98,.052,.012],[-.25,n+o/2,t],9408399,[0,0,c])}for(let e of[-.3,.02,.36])i.box([.045,.2,.028],[.17,.94,e],a),i.box([.065,.03,.042],[.17,1.05,e],a);for(let[e,t]of[[.25,.2],[-.25,.32],[.24,-.3]]){let r=e>0?-c:c;i.box([.17,.02,.05],[e,n+o*(1-Math.abs(e)/.5)+.035,t],2505288,[0,0,r])}return i.box([.04,.07,.026],[-.14,.92,.1],10134445),t&&i.box([1.02,.03,.06],[0,.5,.51],a),{body:r.build(),trim:i.build(),look:e}}function Ui(e){let t=new X;t.box([1,.94,1],[0,.47,0],16777215);let n=new X,r=16777215;n.box([1.04,.03,1.04],[0,.015,0],r),n.box([1.05,.045,1.05],[0,.95,0],r),n.box([1.04,.055,.05],[0,.985,.5],r),n.box([1.04,.055,.05],[0,.985,-.5],r),n.box([.05,.055,1.04],[.5,.985,0],r),n.box([.05,.055,1.04],[-.5,.985,0],r),n.box([.18,.08,.045],[.22,1.02,.16],14673128),n.box([.06,.13,.035],[-.24,1.04,-.2],14673128),n.box([.44,.09,.02],[-.16,1.07,.34],r);for(let[e,t]of[[-.12,.2],[.05,-.14],[-.28,.34]])n.box([.14,.02,.035],[e,.975,t],3823979);for(let e=0;e<18;e++){let t=-.45+e/17*.9;n.box([1,.004,.008],[0,.973,t],12172995)}return n.box([.1,.05,.035],[.12,.995,-.34],13226712),n.box([.5,.02,.02],[.1,.996,.06],12174282),{body:t.build(),trim:n.build(),look:e}}function Wi(e){let t=new X;t.box([1,.95,1],[0,.475,0],16777215);let n=new X,r=16777215;n.box([1.035,.02,1.035],[0,.01,0],r);for(let[e,t]of[[-.49,-.49],[.49,-.49],[-.49,.49],[.49,.49]])n.box([.025,.95,.025],[e,.475,t],r);return n.box([1.03,.03,1.03],[0,.955,0],r),n.box([1.04,.05,.05],[0,.985,.5],r),n.box([1.04,.05,.05],[0,.985,-.5],r),n.box([.05,.05,1.04],[.5,.985,0],r),n.box([.05,.05,1.04],[-.5,.985,0],r),n.box([.3,.07,.1],[.08,1,-.06],15001834),n.box([.11,.1,.05],[-.28,1.015,.24],15001834),n.cylinder(.004,.006,.16,5,[.34,1.08,.34],15265522),{body:t.build(),trim:n.build(),look:e}}function Gi(e){let t=new X;t.box([1,1,1],[0,.5,0],16777215);let n=new X;return n.box([1.02,.025,1.02],[0,1,0],16777215),{body:t.build(),trim:n.build(),look:e}}function Ki(e){let t=Vi(e);switch(e){case`house_large`:return Hi(t,!0);case`house_small`:return Hi(t,!1);case`shop`:return Ui(t);case`tower`:return Wi(t);case`wall`:return Gi(t);default:return Hi(t,!1)}}function qi(e){let t=new K({color:16777215,roughness:e.roughness,metalness:e.metalness});return t.onBeforeCompile=t=>{t.uniforms.uWallTop={value:e.wallTop},t.uniforms.uCell={value:new l(e.cell[0],e.cell[1])},t.uniforms.uStyle={value:e.style},t.uniforms.uFrame={value:new z(16447212)},t.uniforms.uGlass={value:new z(2573660)},t.uniforms.uSky={value:new z(Z.sky.horizon)},t.uniforms.uDoor={value:new z(5913124)},t.uniforms.uAwningA={value:new z(14043199)},t.uniforms.uAwningB={value:new z(16249316)},t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
        varying vec3 vFacadePos;
        varying vec3 vFacadeNormal;
        varying vec3 vInstanceOrigin;
        varying vec3 vInstanceSize;`).replace(`#include <project_vertex>`,`#include <project_vertex>
        #ifdef USE_INSTANCING
          vec4 facadeInstance = instanceMatrix * vec4(transformed, 1.0);
          vFacadePos = (modelMatrix * facadeInstance).xyz;
          vFacadeNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
          vInstanceOrigin = (modelMatrix * vec4(instanceMatrix[3].xyz, 1.0)).xyz;
          vInstanceSize = vec3(
            length(instanceMatrix[0].xyz),
            length(instanceMatrix[1].xyz),
            length(instanceMatrix[2].xyz)
          );
        #else
          vFacadePos = (modelMatrix * vec4(transformed, 1.0)).xyz;
          vFacadeNormal = normalize(mat3(modelMatrix) * objectNormal);
          vInstanceOrigin = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          vInstanceSize = vec3(1.0, 1.0, 1.0);
        #endif`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vFacadePos;
        varying vec3 vFacadeNormal;
        varying vec3 vInstanceOrigin;
        varying vec3 vInstanceSize;
        uniform float uWallTop;
        uniform vec2 uCell;
        uniform float uStyle;
        uniform vec3 uFrame;
        uniform vec3 uGlass;
        uniform vec3 uSky;
        uniform vec3 uDoor;
        uniform vec3 uAwningA;
        uniform vec3 uAwningB;
        float facadeHash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float facadeGlass = 0.0;
        vec3 fN = normalize(vFacadeNormal);
        if (abs(fN.y) < 0.55) {
          float fFacingZ = step(0.5, abs(fN.z));
          // A z-facing wall runs along x (and vice versa): fU is the horizontal facade axis.
          float fU = mix(vFacadePos.z, vFacadePos.x, fFacingZ);
          float fAlongMin = mix(
            vInstanceOrigin.z - vInstanceSize.z * 0.5,
            vInstanceOrigin.x - vInstanceSize.x * 0.5,
            fFacingZ
          );
          float fAlongLen = mix(vInstanceSize.z, vInstanceSize.x, fFacingZ);
          float fSeed = facadeHash(vInstanceOrigin.xz);
          float fWallTop = vInstanceSize.y * uWallTop;
          float fUu = fU + fSeed * uCell.x;
          vec2 fCellUv = vec2(fUu / uCell.x, vFacadePos.y / uCell.y);
          vec2 fUv = fract(fCellUv);
          float fRnd = facadeHash(floor(fCellUv) + vec2(fSeed * 19.0, fSeed * 7.0));
          float fBelowTop = step(vFacadePos.y, fWallTop - 0.12);
          float fAboveBase = step(0.58, vFacadePos.y);
          float fEdge = min(fU - fAlongMin, fAlongMin + fAlongLen - fU);
          float fFresnel = pow(
            1.0 - clamp(dot(fN, normalize(cameraPosition - vFacadePos)), 0.0, 1.0),
            2.0
          );

          if (uStyle < 0.5) {
            // House: small punched windows with white surrounds.
            float fWin = step(abs(fUv.x - 0.5), 0.29) * step(abs(fUv.y - 0.5), 0.27);
            float fFrame = step(abs(fUv.x - 0.5), 0.35) * step(abs(fUv.y - 0.5), 0.33);
            fWin *= fBelowTop * fAboveBase * step(0.55, fEdge);
            fFrame *= fBelowTop * fAboveBase * step(0.35, fEdge);
            vec3 fGlassColor = mix(uGlass, uSky, 0.3 + 0.45 * fRnd + 0.35 * fFresnel);
            diffuseColor.rgb = mix(diffuseColor.rgb, uFrame, fFrame * 0.92);
            diffuseColor.rgb = mix(diffuseColor.rgb, fGlassColor, fWin);
            facadeGlass = fWin;

            // Flower boxes under most windows: a cheap, cheerful facade detail.
            float fBox = step(abs(fUv.y - 0.19), 0.045) * step(abs(fUv.x - 0.5), 0.32);
            fBox *= fBelowTop * fAboveBase * step(1.1, vFacadePos.y) * step(fRnd, 0.62);
            float fFlower = fBox * step(0.55, fract(fU * 4.0 + fSeed * 9.0));
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.32, 0.21, 0.12), fBox);
            diffuseColor.rgb = mix(
              diffuseColor.rgb,
              mix(uAwningA, vec3(0.95, 0.84, 0.32), step(0.5, fRnd)),
              fFlower
            );

            // Front door on one long face, always at street level.
            float fDoorSide = fSeed > 0.5 ? 1.0 : -1.0;
            float fOnDoorFace = step(0.5, fN.z * fDoorSide);
            float fDoorCenter = fAlongMin + fAlongLen * (0.5 + (fSeed - 0.5) * 0.4);
            float fDu = abs(fU - fDoorCenter);
            float fDoorFrame = fOnDoorFace * step(fDu, 0.82) * step(vFacadePos.y, 2.2);
            float fDoor = fOnDoorFace * step(fDu, 0.68) * step(vFacadePos.y, 2.02) * step(0.12, vFacadePos.y);
            diffuseColor.rgb = mix(diffuseColor.rgb, uFrame, fDoorFrame * 0.85);
            diffuseColor.rgb = mix(diffuseColor.rgb, uDoor, fDoor);

            // Stone plinth.
            diffuseColor.rgb = mix(
              diffuseColor.rgb,
              diffuseColor.rgb * 0.78,
              1.0 - step(0.55, vFacadePos.y)
            );
          } else if (uStyle < 1.5) {
            // Shop: full-height storefront glazing, striped awning, homes above.
            float fPane = step(abs(fUv.x - 0.5), 0.44);
            float fStore = step(0.9, vFacadePos.y) * step(vFacadePos.y, 3.0) * fPane;
            float fMullion = 1.0 - fPane;
            vec3 fGlassColor = mix(uGlass, uSky, 0.4 + 0.4 * fRnd + 0.3 * fFresnel);
            diffuseColor.rgb = mix(diffuseColor.rgb, uFrame, fMullion * step(vFacadePos.y, 3.0) * step(0.9, vFacadePos.y));
            diffuseColor.rgb = mix(diffuseColor.rgb, fGlassColor, fStore);
            facadeGlass = max(facadeGlass, fStore);

            float fAwning = step(3.0, vFacadePos.y) * step(vFacadePos.y, 3.62);
            float fStripe = step(0.5, fract(fUu / 1.35));
            vec3 fAwningColor = mix(uAwningA, uAwningB, fStripe);
            diffuseColor.rgb = mix(diffuseColor.rgb, fAwningColor, fAwning);

            float fWin = step(abs(fUv.x - 0.5), 0.27) * step(abs(fUv.y - 0.5), 0.25);
            float fFrame = step(abs(fUv.x - 0.5), 0.32) * step(abs(fUv.y - 0.5), 0.3);
            fWin *= fBelowTop * step(3.9, vFacadePos.y) * step(0.6, fEdge);
            fFrame *= fBelowTop * step(3.9, vFacadePos.y) * step(0.4, fEdge);
            vec3 fUpGlass = mix(uGlass, uSky, 0.35 + 0.4 * fRnd + 0.3 * fFresnel);
            diffuseColor.rgb = mix(diffuseColor.rgb, uFrame, fFrame * 0.9);
            diffuseColor.rgb = mix(diffuseColor.rgb, fUpGlass, fWin);
            facadeGlass = max(facadeGlass, fWin);

            // Fascia sign above the awning: pale border, teal panel, block "lettering".
            float fSignBorder = step(3.68, vFacadePos.y) * step(vFacadePos.y, 4.44);
            float fSign = step(3.74, vFacadePos.y) * step(vFacadePos.y, 4.38);
            float fSignText =
              step(3.86, vFacadePos.y) *
              step(vFacadePos.y, 4.26) *
              step(abs(fract((fU + fSeed * 2.0) / 0.82) - 0.5), 0.27);
            diffuseColor.rgb = mix(diffuseColor.rgb, uFrame, fSignBorder * 0.8);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.27, 0.33), fSign);
            diffuseColor.rgb = mix(diffuseColor.rgb, uAwningB, fSignText * 0.9);
          } else if (uStyle < 2.5) {
            // Tower: glass curtain wall on a metal grid.
            float fGlassPane = step(abs(fUv.x - 0.5), 0.43) * step(abs(fUv.y - 0.5), 0.37);
            float fFloorBand = step(fUv.y, 0.13);
            vec3 fGlassColor = mix(vec3(0.17, 0.32, 0.45), uSky, 0.3 + 0.4 * fRnd + 0.35 * fFresnel);
            fGlassPane *= fBelowTop * fAboveBase;
            float fSpandrel = fFloorBand * fBelowTop * fAboveBase;
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.72, fSpandrel);
            diffuseColor.rgb = mix(diffuseColor.rgb, fGlassColor, fGlassPane);
            facadeGlass = max(facadeGlass, fGlassPane);
          } else {
            // Boundary wall: concrete seams only.
            float fSeam = step(0.5, fract(vFacadePos.y / 2.4));
            diffuseColor.rgb *= 0.94 + 0.06 * fSeam;
          }
        }`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.16, clamp(facadeGlass, 0.0, 1.0));`)},t.customProgramCacheKey=()=>`facade-${e.style}-${e.cell[0]}-${e.cell[1]}`,t}function Ji(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Yi(e,t){return e>>t&255}function Xi(e,t,n=128,r=7,i=1){let a=Ji(r),o=new Uint8Array(n*n*4),s=Yi(e,16),c=Yi(e,8),l=Yi(e,0);for(let e=0;e<n*n;e++){let n=(a()-.5)*t,r=a()<.035?-t*1.6:0;o[e*4]=Math.max(0,Math.min(255,s+n+r)),o[e*4+1]=Math.max(0,Math.min(255,c+n+r)),o[e*4+2]=Math.max(0,Math.min(255,l+n+r)),o[e*4+3]=255}let u=new _e(o,n,n,$e);return u.wrapS=Ce,u.wrapT=Ce,u.repeat.set(i,i),u.colorSpace=qe,u.magFilter=N,u.minFilter=le,u.generateMipmaps=!0,u.needsUpdate=!0,u}var Zi=n.MAP_SIZE,Qi=.08,$i=.1,ea=.112;function ta(e,t=.01){let n=[...e].sort((e,t)=>e-t),r=[];for(let e of n)(r.length===0||e-r[r.length-1]>t)&&r.push(e);return r}function na(e,t,n){return e>=n.x&&e<=n.x+n.width&&t>=n.y&&t<=n.y+n.height}function ra(e,t,n){let r=new z(e),i=1+(n()-.5)*t;return r.multiplyScalar(i),r.getHex()}function ia(e,t,n,r,i){let a=new X,o=10119996,s=4870232;a.box([1.9,.09,.52],[0,.52,0],o),a.box([1.9,.44,.08],[0,.8,-.25],o);for(let e of[-.72,.72])a.box([.09,.5,.44],[e,.26,0],s),a.box([.07,.42,.07],[e,.62,-.24],s);e.append(a.build(),{at:[t,n,r],rot:[0,i,0]})}function aa(e,t,n,r,i){let a=new X,o=5067868;a.cylinder(.15,.2,.24,8,[0,.12,0],o),a.cylinder(.06,.08,4.1,8,[0,2.1,0],o),a.box([.9,.07,.07],[.42,4.12,0],o),a.box([.44,.14,.3],[.86,4.04,0],4146766),a.box([.38,.08,.24],[.86,4.11,0],16773828),e.append(a.build(),{at:[t,n,r],rot:[0,i,0]})}function oa(e,t,n,r){let i=new X;i.cylinder(.15,.18,.5,8,[0,.27,0],14172986),i.cylinder(.19,.19,.07,8,[0,.54,0],11875631),i.cylinder(.06,.06,.16,6,[0,.65,0],11875631),i.box([.36,.09,.12],[0,.36,0],11875631),e.append(i.build(),{at:[t,n,r]})}function sa(e,t,n,r){let i=Z.stone;e.cylinder(3.5,3.7,.5,20,[t,.33,n],i),e.cylinder(3.05,3.05,.06,20,[t,.6,n],Z.water),e.cylinder(3.1,3.1,.1,20,[t,.58,n],9419201),e.cylinder(.42,.62,1.15,10,[t,1.1,n],i),e.cylinder(1.15,.5,.18,14,[t,1.76,n],i),e.cylinder(1.05,1.05,.05,14,[t,1.86,n],Z.water);for(let i=0;i<6;i++){let a=i/6*Math.PI*2+r()*.2,o=2.2+r()*.7;e.cylinder(.035,.05,.55,5,[t+Math.cos(a)*o,1.02,n+Math.sin(a)*o],15268863),e.ico(.12,0,[t+Math.cos(a)*o,1.32,n+Math.sin(a)*o],16777215)}}function ca(e,t,n){let r=Z.stone;e.box([1.9,.4,1.9],[t,.3,n],r),e.box([1.3,1.3,1.3],[t,1.1,n],r),e.box([1.05,.18,1.05],[t,1.84,n],9340794),e.cylinder(.34,.42,1.5,8,[t,2.65,n],7175014),e.sphere(.38,[t,3.55,n],7175014,[1,1.1,1]),e.box([.9,.1,.12],[t+.2,3.15,n],7175014,[0,0,-.4])}function la(e,t,n,r){e.disc(4.2,20,[t,.128,n],8018748),e.torus(4.2,.18,[t,.14200000000000002,n],Z.stone);for(let i=0;i<26;i++){let a=r()*Math.PI*2,o=Math.sqrt(r())*3.5,s=Li(Z.flowers,i);e.ico(.18,0,[t+Math.cos(a)*o,.302,n+Math.sin(a)*o],s)}}function ua(e,t,n,r){e.box([12,.02,9.5],[t,.122,n],14930856);let i=t-3.1,a=n-1.4;e.box([2.1,.14,2.1],[i,1.85,a],15909198),e.box([.16,1.8,.16],[i-.85,.95,a-.85],14172986),e.box([.16,1.8,.16],[i+.85,.95,a-.85],14172986),e.box([.16,1.8,.16],[i-.85,.95,a+.85],14172986),e.box([.16,1.8,.16],[i+.85,.95,a+.85],14172986),e.box([.55,.1,2.6],[i+1.35,1.15,a+.1],4891616,[0,0,-.55]),e.box([2.1,.1,.35],[i,1.78,a+1.28],15909198);let o=t+3.3,s=n+.4;for(let t of[-1.9,1.9])e.box([.14,2.3,.14],[o-1.2,1.2,s+t],4891616,[.32,0,0]),e.box([.14,2.3,.14],[o+1.2,1.2,s+t],4891616,[-.32,0,0]);e.box([.16,.16,4.2],[o,2.32,s],4891616);for(let t of[-.45,.45])e.box([.04,1.45,.04],[o+t,1.58,s],7831432),e.box([.5,.07,.28],[o+t,.88,s],14172986);e.cylinder(.09,.12,.4,6,[t+.2,.4,n+3.1],7831432),e.ico(.42,0,[t+.2,.78,n+3.1],Li(Z.flowers,Math.floor(r()*5))),e.box([.5,.5,.5],[t-4.8,.4,n+3.2],15909198,[.2,r(),.1])}function da(e,t,n,r){e.disc(4.7,24,[t,.122,n],Z.waterDeep),e.disc(4.25,24,[t,.126,n],Z.water),e.torus(4.75,.26,[t,.14200000000000002,n],Z.stone);for(let i=0;i<5;i++){let i=r()*Math.PI*2,a=1.2+r()*2.4;e.disc(.28+r()*.2,8,[t+Math.cos(i)*a,.134,n+Math.sin(i)*a],5941322)}}function fa(e,t,n){let r=4.4,i=t.width-5.2,a=Math.floor((t.height-5.2)/r);for(let o=0;o<a;o++){let a=t.y+2.6+r/2+o*r,s=ra(o%2==0?Z.lawn:6726732,.03,n);e.box([i,.004,4.340000000000001],[t.x+t.width/2,.116,a],s)}}function pa(e,t,n){let r=ra(5212734,.12,n),i=.114,a=2.2,o=.24;e.box([t.width-a*2,.006,o],[t.x+t.width/2,i,t.y+a],r),e.box([t.width-a*2,.006,o],[t.x+t.width/2,i,t.y+t.height-a],r),e.box([o,.006,t.height-a*2],[t.x+a,i,t.y+t.height/2],r),e.box([o,.006,t.height-a*2],[t.x+t.width-a,i,t.y+t.height/2],r)}function ma(e,t,n,r){let{rect:i,cx:a,cz:o}=t,s=i.width/2-2.2,c=i.height/2-2.2;e.box([s*2-4,.016,3.6],[a,ea,o],Z.path),e.box([3.6,.016,c*2-4],[a,ea,o],Z.path),e.disc(6.6,24,[a,.126,o],Z.path),e.torus(6.6,.22,[a,.138,o],12825236);let l=12035975;for(let t=-s+6;t<s-5;t+=2.8)e.box([.08,.004,3.6],[a+t,.122,o],l),e.box([3.6,.004,.08],[a,.122,o+t],l);let u=[{x:a,z:o,r:8}],d=n%5;d===0||d===2?sa(e,a,o,r):d===1?ca(e,a,o):la(e,a,o,r);for(let t=0;t<4;t++){let n=t/4*Math.PI*2+.4;ia(e,a+Math.cos(n)*8.9,ea,o+Math.sin(n)*8.9,-n+Math.PI/2)}for(let t=0;t<4;t++){let n=t/4*Math.PI*2+1.1;aa(e,a+Math.cos(n)*9.7,$i,o+Math.sin(n)*9.7,-n)}let f=i.x+12.5,p=i.y+12.5;if(n%3==0)ua(e,f+1.5,p+1.5,r),u.push({x:f+1.5,z:p+1.5,r:9.5});else if(n%3==1){let t=i.x+i.width-13,n=i.y+13;da(e,t,n,r),u.push({x:t,z:n,r:7.5})}let m=[];for(let e of[4.6,8.8,13])m.push({x:i.x+e,z:i.y+5.4}),m.push({x:i.x+e,z:i.y+i.height-5.4}),m.push({x:i.x+5.4,z:i.y+e}),m.push({x:i.x+i.width-5.4,z:i.y+e}),m.push({x:i.x+i.width-e,z:i.y+5.4}),m.push({x:i.x+i.width-e,z:i.y+i.height-5.4}),m.push({x:i.x+5.4,z:i.y+i.height-e}),m.push({x:i.x+i.width-5.4,z:i.y+i.height-e});for(let t of m){if(r()<.28||Math.abs(t.x-a)<3.8||Math.abs(t.z-o)<3.8)continue;let n=!1;for(let e of u)if(Math.hypot(t.x-e.x,t.z-e.z)<e.r+1.4){n=!0;break}n||Ii(e,t.x+(r()-.5)*1.2,$i,t.z+(r()-.5)*1.2,1.12+r()*.55,r()*Math.PI*2,Li(Z.foliage,Math.floor(r()*5)))}for(let t=0;t<110;t++){let n=i.x+4+r()*(i.width-8),s=i.y+4+r()*(i.height-8);Math.abs(n-a)<3.4||Math.abs(s-o)<3.4||Math.hypot(n-a,s-o)<7.6||e.cone(.16+r()*.12,.34+r()*.2,4,[n,.26,s],Li(Z.foliage,t+2))}for(let t=0;t<4;t++){let n=t/4*Math.PI*2+r(),i=a+Math.cos(n)*15.5,s=o+Math.sin(n)*15.5;u.some(e=>Math.hypot(i-e.x,s-e.z)<e.r+1)||(e.ico(.75,0,[i,.65,s],Li(Z.foliage,t+1),[1.1,.7,1.1]),e.ico(.55,0,[i+.6,.52,s+.3],Li(Z.foliage,t+3),[1,.65,1]))}for(let t=0;t<4;t++){let n=t/4*Math.PI*2+.8,i=a+Math.cos(n)*12.5,s=o+Math.sin(n)*12.5;if(!u.some(e=>Math.hypot(i-e.x,s-e.z)<e.r+2)){e.disc(1.1+r()*.6,10,[i,_a(),s],7180106);for(let t=0;t<5;t++)e.ico(.14,0,[i+(r()-.5)*2,_a()+.15,s+(r()-.5)*2],Li(Z.flowers,t))}}}function ha(t,n,r){let{rect:i}=n,a=i.x+i.width/2,o=i.y+i.height/2,s=e=>t.box([i.width-.6,.03,i.height-.6],[a,.115,o],e);if(n.kind===`parking`){s(ra(Z.parkingLot,.06,r));let n=Z.paint;for(let r of e(i))if(r.width>=r.height)for(let e of[r.y,r.y+r.height])t.box([r.width,.006,.12],[r.x+r.width/2,.133,e],n);else for(let e of[r.x,r.x+r.width])t.box([.12,.006,r.height],[e,.133,r.y+r.height/2],n);return}if(n.kind===`yard`){s(ra(Z.yardGravel,.08,r));let e=i.width>i.height,n=(e?i.width:i.height)-2;for(let r of[-.9,.9]){let i=e?[n,.006,.45]:[.45,.006,n],s=e?[a,.133,o+r]:[a+r,.133,o];t.box(i,s,Z.yardRut)}for(let e=0;e<4;e++){let e=1.5+r()*2.5,n=1.2+r()*2;t.box([e,.005,n],[i.x+1+e/2+r()*Math.max(0,i.width-e-2),.132,i.y+1+n/2+r()*Math.max(0,i.height-n-2)],Z.yardRut)}return}s(ra(Z.marketPaving,.06,r));let c=Z.marketJoint;for(let e=i.x+2;e<i.x+i.width-.5;e+=2)t.box([.07,.005,i.height-.6],[e,.133,o],c);for(let e=i.y+2;e<i.y+i.height-.5;e+=2)t.box([i.width-.6,.005,.07],[a,.133,e],c)}function ga(e,t){let n=4.4,r=t.x+t.width/2,i=t.y+t.height/2,a=t.width-n;for(let o=5.2;o<t.width-n/2-1;o+=3)e.box([.08,.004,a],[t.x+o,.114,i],Z.plazaJoint),e.box([a,.004,.08],[r,.114,t.y+o],Z.plazaJoint);for(let t of[-1,1])e.box([a,.005,.5],[r,.115,i+t*(a/2-.25)],Z.plazaBorder),e.box([.5,.005,a],[r+t*(a/2-.25),.115,i],Z.plazaBorder)}function _a(){return .12000000000000001}function va(e,t,n){if(e.length===0)return;let r=ta(e.map(e=>e.x)),i=ta(e.map(e=>e.y)),a=e[0]?.width??60,o=[];for(let e=0;e<r.length-1;e++){let t=r[e]+a,n=r[e+1];n-t>4&&o.push((t+n)/2)}let s=[];for(let e=0;e<i.length-1;e++){let t=i[e]+a,n=i[e+1];n-t>4&&s.push((t+n)/2)}let c=Z.paint;for(let e of o)for(let n of s){for(let r=e-5.1;r<=e+5.1;r+=1.15)t.box([.56,.014,3.3],[r,.014,n-8.3],c),t.box([.56,.014,3.3],[r,.014,n+8.3],c);for(let r=n-5.1;r<=n+5.1;r+=1.15)t.box([3.3,.014,.56],[e-8.3,.014,r],c),t.box([3.3,.014,.56],[e+8.3,.014,r],c);t.box([10.6,.014,.42],[e,.014,n-10.6],c),t.box([10.6,.014,.42],[e,.014,n+10.6],c),t.box([.42,.014,10.6],[e-10.6,.014,n],c),t.box([.42,.014,10.6],[e+10.6,.014,n],c),t.disc(.52,12,[e+3.1,.008,n+2.6],3817028),t.disc(.38,10,[e-2.7,.008,n-3.2],4212043)}let l=(e,t)=>t.some(t=>Math.abs(e-t)<14.5);for(let e of o)for(let n=8;n<Zi-8;n+=9.2)l(n,s)||t.box([.24,.012,3],[e,.012,n],c);for(let e of s)for(let n=8;n<Zi-8;n+=9.2)l(n,o)||t.box([3,.012,.24],[n,.012,e],c);for(let e=0;e<18;e++){let r=Li(o.length?o:[12],e),i=24+n()*(Zi-48);t.box([.7,.01,.34],[r+5.6,.012,i],3093562)}}function ya(e,t,n,r=[]){let i=Ri(1337),a=new L(new Ze(Zi+40,Zi+40),new K({map:Xi(Z.asphalt,26,128,11,100),roughness:1,metalness:0}));a.rotation.x=-Math.PI/2,a.position.set(Zi/2,0,Zi/2),a.receiveShadow=!0,e.add(a);let o=new L(new Ze(Zi*8,Zi*8),new K({color:Z.lawn,roughness:1,metalness:0}));if(o.rotation.x=-Math.PI/2,o.position.set(Zi/2,-.03,Zi/2),e.add(o),t.length===0)return;let s=t.map(e=>({rect:e,cx:e.x+e.width/2,cz:e.y+e.height/2,built:!1,plaza:!1}));for(let e of n){if(e.kind===`wall`)continue;let t=e.rect.x+e.rect.width/2,n=e.rect.y+e.rect.height/2;for(let r of s)if(na(t,n,r.rect)){e.tier>=3&&(r.built=!0),e.tier>=4&&(r.plaza=!0);break}}let c=new X,l=new X;for(let[e,t]of s.entries()){let{rect:n,cx:r,cz:a}=t,o=ra(Z.sidewalk,.09,i),s=ra(Z.lawn,.14,i);c.box([n.width,Qi,n.height],[r,Qi/2,a],o);let l=ra(Z.sidewalkEdge,.08,i),u=.115;c.box([n.width,.07,.26],[r,u,n.y+.13],l),c.box([n.width,.07,.26],[r,u,n.y+n.height-.13],l),c.box([.26,.07,n.height],[n.x+.13,u,a],l),c.box([.26,.07,n.height],[n.x+n.width-.13,u,a],l);let d=ra(12433064,.04,i);for(let e=4;e<n.width-3;e+=6)c.box([.06,.004,2],[n.x+e,.082,n.y+1.1],d),c.box([.06,.004,2],[n.x+e,.082,n.y+n.height-1.1],d),c.box([2,.004,.06],[n.x+1.1,.082,n.y+e],d),c.box([2,.004,.06],[n.x+n.width-1.1,.082,n.y+e],d);if(!t.built)c.box([n.width-4.4,.024,n.height-4.4],[r,$i,a],s),fa(c,n,i),pa(c,n,i),ma(c,t,e,i);else{let o=t.plaza?ra(Z.plaza,.08,i):s;c.box([n.width-4.4,.024,n.height-4.4],[r,$i,a],o),t.plaza?ga(c,n):pa(c,n,i);let l=[[n.x+1.25,n.y+1.25],[n.x+n.width-1.25,n.y+1.25],[n.x+1.25,n.y+n.height-1.25],[n.x+n.width-1.25,n.y+n.height-1.25]];for(let[t,n]of l.entries())i()<.55?Ii(c,n[0],$i,n[1],.58+i()*.22,i()*Math.PI*2,Li(Z.foliage,Math.floor(i()*5))):(t===0||i()<.5)&&aa(c,n[0],$i,n[1],(e+t)%4*(Math.PI/2));for(let e of[0,1])i()>.55||Ii(c,n.x+n.width*(.28+i()*.44),$i,e===0?n.y+1.05:n.y+n.height-1.05,.5+i()*.16,i()*Math.PI*2,Li(Z.foliage,Math.floor(i()*5)));e%3==0&&oa(c,n.x+2,Qi,n.y+n.height/2)}}for(let e of r)ha(c,e,i);va(t,l,i);let u=new L(c.build(),new K({vertexColors:!0,roughness:.94,metalness:.02}));u.castShadow=!0,u.receiveShadow=!0,e.add(u);let d=new L(l.build(),new ae({vertexColors:!0,toneMapped:!0}));d.receiveShadow=!1,e.add(d)}var ba={crate:{width:1.2,depth:1.2,height:1.2},barrel:{width:1.1,depth:1.1,height:1.2},bin:{width:1,depth:1,height:1},fence:{width:4,depth:.4,height:1.2},car:{width:4.2,depth:2,height:1.5},tree:{width:2.2,depth:2.2,height:5.4},traffic_light:{width:.8,depth:.8,height:4},stall:{width:2.6,depth:2.2,height:2.6}},xa={width:1,depth:1,height:1};function Sa(){let e=new X;e.box([1.14,1.02,1.14],[0,.54,0],Z.crateWood),e.box([1.18,.1,1.18],[0,.12,0],Z.crateDark),e.box([1.18,.1,1.18],[0,.96,0],Z.crateDark),e.box([1.2,.07,1.2],[0,1.09,0],14196831);for(let t of[-.56,.56])e.box([.07,1.02,.07],[t,.54,.56],Z.crateDark),e.box([.07,1.02,.07],[t,.54,-.56],Z.crateDark);return e.box([.06,1.02,.06],[.56,.54,0],Z.crateDark),e.box([.06,1.02,.06],[-.56,.54,0],Z.crateDark),e.box([1.16,.07,.04],[0,.55,.58],Z.crateDark,[0,0,.68]),e.box([1.16,.07,.04],[0,.55,-.58],Z.crateDark,[0,0,-.68]),e.build()}function Ca(){let e=new X;return e.cylinder(.5,.5,1.12,12,[0,.58,0],Z.barrel),e.cylinder(.52,.52,.09,12,[0,.3,0],Z.barrelBand),e.cylinder(.52,.52,.09,12,[0,.86,0],Z.barrelBand),e.cylinder(.47,.47,.05,12,[0,1.15,0],10370863),e.cylinder(.08,.08,.06,8,[.16,1.19,0],Z.barrelBand),e.build()}function wa(){let e=new X;return e.box([.9,.9,.9],[0,.47,0],Z.bin),e.box([.98,.09,.98],[0,.96,0],Z.binLid),e.box([.3,.06,.12],[0,1.02,0],3031094),e.box([.82,.07,.03],[0,.55,.46],4019013),e.build()}function Ta(){let e=new X;for(let t of[-1.92,1.92])e.box([.14,1.24,.14],[t,.62,0],Z.fence);for(let t of[.38,.86])e.box([3.84,.1,.09],[0,t,0],Z.fence);for(let t=0;t<8;t++){let n=-1.68+t*.48;e.box([.16,1.02,.06],[n,.6,0],Z.fence),e.cone(.11,.16,4,[n,1.19,0],Z.fence)}return e.build()}function Ea(){let e=new X,t=16777215,n=Z.carDark;for(let t of[-1.32,1.32])for(let r of[-.92,.92])e.cylinder(.36,.36,.26,8,[t,.37,r],n,[Math.PI/2,0,0]),e.cylinder(.19,.19,.28,6,[t,.37,r],10134450,[Math.PI/2,0,0]);e.box([3.94,.48,1.86],[0,.62,0],t),e.box([3.64,.16,1.94],[0,.9,0],t),e.box([1.94,.5,1.66],[.06,1.08,0],t),e.box([1.8,.07,1.6],[.05,1.36,0],t),e.box([1.56,.32,.05],[.04,1.1,.84],Z.carGlass),e.box([1.56,.32,.05],[.04,1.1,-.84],Z.carGlass),e.box([.05,.32,1.5],[1.03,1.1,0],Z.carGlass),e.box([.05,.32,1.5],[-.97,1.1,0],Z.carGlass),e.box([.18,.2,1.7],[1.96,.55,0],n),e.box([.18,.2,1.7],[-1.96,.55,0],n);for(let t of[-.62,.62])e.box([.06,.16,.28],[2.02,.67,t],16773828),e.box([.06,.16,.26],[-2.02,.67,t],16734810);return e.box([.06,.2,.26],[1.99,.92,.94],Z.carDark),e.box([.06,.2,.26],[1.99,.92,-.94],Z.carDark),e.build()}function Da(){let e=new X,t=Z.stallWood;for(let n of[-1.2,1.2])for(let r of[-.98,.98])e.box([.1,2.22,.1],[n,1.11,r],t);e.box([2.3,.82,1.1],[0,.41,0],Z.crateWood),e.box([2.34,.1,1.16],[0,.85,0],t);let n=Z.produce;for(let t=0;t<4;t++)e.box([.46,.16,.76],[-.84+t*.56,.98,0],Li(n,t));let r=2.7/4;for(let t=0;t<4;t++){let n=-1.35+r*(t+.5),i=t%2==0?Z.stallCanopy:Z.stallCanopyLight;e.box([r,.06,1.26],[n,2.36,.56],i,[.38,0,0]),e.box([r,.06,1.26],[n,2.36,-.56],i,[-.38,0,0])}return e.box([2.72,.08,.1],[0,2.6,0],t),e.build()}function Oa(){let e=new X;return Ii(e,0,0,0,1,.6,Li(Z.foliage,0)),e.build()}function ka(){let e=new X,t=Z.trafficLight;e.cylinder(.16,.2,.16,8,[0,.08,0],3949130),e.cylinder(.06,.07,3.5,8,[0,1.75,0],t),e.box([.9,.08,.08],[.45,3.45,0],t),e.box([.3,.86,.3],[.88,3.05,0],2238252);let n=[[3.36,Z.trafficRed],[3.05,Z.trafficYellow],[2.74,Z.trafficGreen]];for(let[t,r]of n)for(let n of[-.16,.16])e.cylinder(.1,.1,.02,8,[.88,t,n],r,[Math.PI/2,0,0]);return e.build()}function Aa(e){switch(e){case`car`:return Ea();case`tree`:return Oa();case`barrel`:return Ca();case`bin`:return wa();case`fence`:return Ta();case`traffic_light`:return ka();case`stall`:return Da();default:return Sa()}}function ja(e,t){let n=Math.floor(t);return e===`car`?new z(Li(Z.car,n*7+3)):e===`tree`?new z(Li([15267805,16056296,14676946,16120294],n)):e===`crate`?new z(Li([15983311,16773858,15324863],n)):e===`barrel`?new z(Li([16771298,15916760,16773354],n)):e===`stall`?new z(Li([16777215,14280959,16773314,14480854,16769258],n)):new z(16777215)}var Ma=.08,Na=.02,Pa=.118,Fa=new z(7100995),Ia=1.4,La=.22,Ra=.08,za=new Set([`car`,`fence`,`stall`]);function Ba(e){return za.has(e.kind)&&e.rect.height>e.rect.width}function Va(e){let{rect:t,spec:n}=e;return Ba(e)?[t.height/n.width,t.width/n.depth]:[t.width/n.width,t.height/n.depth]}function Ha(){return new F().makeScale(0,0,0)}function Ua(e,t,n,r,i,a,o){return new F().compose(new V(e,t,n),new Ee().setFromAxisAngle(new V(0,1,0),r),new V(i,a,o))}function Wa(){let e=new X,t=Ri(90210),n=[16777215,15130061,13814200,16117731];for(let r=0;r<14;r++){let i=t()*Math.PI*2,a=t()*.34;e.ico(.09+t()*.16,0,[Math.cos(i)*a,.08+t()*.12,Math.sin(i)*a],Li(n,r),[1,.55,1],[0,t()*Math.PI,0])}for(let n=0;n<7;n++)e.box([.28+t()*.34,.04,.08],[(t()-.5)*.7,.04+n*.028,(t()-.5)*.7],12102290,[0,t()*Math.PI,0]);return e.build()}var Ga=class{records=new Map;batches=new Map;ghosted=new Map;cutaways=new Map;destroyed=new Set;collapsing=new Map;rebuilding=new Map;rubble;scorch;rubbleCount=0;scorchCount=0;lastOcclusionCheck=0;occludedNow=!1;blocks;constructor(e,t,n=[],r=[]){this.blocks=n,ya(e,n,t,r);let i=new Map;for(let e of t){let t=i.get(e.kind)??[];t.push(e),i.set(e.kind,t)}for(let[t,n]of i){let r=t in zi,i={kind:t,instanced:[],isBuilding:r,freeGhostSlots:[]};if(r){let r=Ki(t),a=Vi(t),o=new A(r.body,qi(a),n.length);o.castShadow=!0,o.receiveShadow=!0,o.instanceMatrix.setUsage(M);let s=new K({vertexColors:!0,roughness:a.roughness,metalness:a.metalness}),c=new A(r.trim,s,n.length);c.castShadow=!0,c.receiveShadow=!0,c.instanceMatrix.setUsage(M);let l=new K({color:16054527,transparent:!0,opacity:Ra,depthWrite:!1,roughness:.7,metalness:.1}),u=new A(r.body,l,n.length);u.instanceMatrix.setUsage(M),u.count=0,u.renderOrder=2,u.frustumCulled=!1,i.ghost=u,i.freeGhostSlots=Array.from({length:n.length},(e,t)=>n.length-1-t),n.forEach((e,t)=>{let n=this.createRecord(e,t,!0);n.matrix=Ua(e.rect.x+e.rect.width/2,Ma,e.rect.y+e.rect.height/2,0,e.rect.width,e.height,e.rect.height),this.records.set(e.id,n),o.setMatrixAt(t,n.matrix),c.setMatrixAt(t,n.matrix),o.setColorAt(t,new z(Li(a.walls,t*11+e.rect.x))),c.setColorAt(t,new z(Li(a.roofs,t*5+e.rect.y)))}),o.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),c.instanceColor&&(c.instanceColor.needsUpdate=!0),o.computeBoundingSphere(),c.computeBoundingSphere(),e.add(o,c,u),i.instanced.push(o,c)}else{let r=ba[t]??xa,a=Aa(t),o=new K({vertexColors:!0,roughness:t===`car`?.42:.9,metalness:t===`car`?.16:.03}),s=new A(a,o,n.length);s.castShadow=!0,s.receiveShadow=!0,s.instanceMatrix.setUsage(M),n.forEach((e,n)=>{let i=this.createRecord(e,n,!1);i.spec=r,i.matrix=this.propMatrix(i),this.records.set(e.id,i),s.setMatrixAt(n,i.matrix),s.setColorAt(n,ja(t,n+e.rect.x+e.rect.y))}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.computeBoundingSphere(),e.add(s),i.instanced.push(s)}this.batches.set(t,i)}let a=new K({vertexColors:!0,roughness:.98});this.rubble=new A(Wa(),a,Math.max(t.length,1)),this.rubble.instanceMatrix.setUsage(M),this.rubble.count=0,this.rubble.castShadow=!0,this.rubble.receiveShadow=!0,this.rubble.frustumCulled=!1,e.add(this.rubble);let o=new Ze(1,1);o.rotateX(-Math.PI/2),this.scorch=new A(o,new K({roughness:1,metalness:0}),Math.max(t.length,1)),this.scorch.instanceMatrix.setUsage(M),this.scorch.count=0,this.scorch.receiveShadow=!0,this.scorch.frustumCulled=!1,e.add(this.scorch)}createRecord(e,t,n){let r=Vi(e.kind),i=t*11+e.rect.x,a=n?new z(Li(r.walls,i)).lerp(new z(Li(r.roofs,i+3)),.55).multiplyScalar(.82).getHex():ja(e.kind,t+e.rect.x+e.rect.y).getHex();return{id:e.id,kind:e.kind,index:t,tier:e.tier,height:e.height,rect:e.rect,debrisColor:a,isBuilding:n,angle:this.propAngle(e),spec:ba[e.kind]??xa,matrix:new F}}propAngle(e){if(Ba(e))return Math.PI/2;let t=e.rect.x+e.rect.width/2;return e.kind===`car`?this.blocks.some(e=>t>=e.x&&t<=e.x+e.width)?0:Math.PI/2:e.kind===`tree`?(e.rect.x*.37+e.rect.y*.61)%(Math.PI*2):e.kind===`fence`||e.kind===`stall`?0:Math.abs(Math.floor(e.rect.x*13+e.rect.y*7))%4*(Math.PI/2)}propMatrix(e){let[t,n]=Va(e),r=e.height/e.spec.height;return Ua(e.rect.x+e.rect.width/2,Na,e.rect.y+e.rect.height/2,e.angle,t,r,n)}setMatrix(e,t){let n=this.batches.get(e.kind);if(!n)return;let r=n.instanced[0];if(r&&(r.setMatrixAt(e.index,t),r.instanceMatrix.needsUpdate=!0),n.isBuilding){let r=n.instanced[1];r&&(r.setMatrixAt(e.index,t),r.instanceMatrix.needsUpdate=!0)}}applyCollapse(e,t){let n=e.rect.x+e.rect.width/2,r=e.rect.y+e.rect.height/2;if(e.isBuilding){let i=Ua(n,Ma,r,0,e.rect.width,e.height*t,e.rect.height);this.setMatrix(e,i)}else{let[i,a]=Va(e),o=i*t,s=e.height/e.spec.height*t,c=a*t,l=Ua(n,Na,r,e.angle,o,s,c);this.setMatrix(e,l)}}hide(e){let t=Ha(),n=this.batches.get(e.kind);if(n)for(let r of n.instanced)r.setMatrixAt(e.index,t),r.instanceMatrix.needsUpdate=!0}restore(e){this.setMatrix(e,e.matrix)}get rubbleInstances(){return this.rubbleCount}positionOf(e){let t=this.records.get(e);return t?{x:t.rect.x+t.rect.width/2,z:t.rect.y+t.rect.height/2}:null}infoOf(e){let t=this.records.get(e);return t?{kind:t.kind,tier:t.tier,centre:{x:t.rect.x+t.rect.width/2,z:t.rect.y+t.rect.height/2},size:{width:t.rect.width,depth:t.rect.height,height:t.height},color:t.debrisColor}:null}update(e,t){let n=new Set(t);for(let e of n){if(this.destroyed.has(e)||this.collapsing.has(e))continue;let t=this.records.get(e);t&&(this.unghost(e),this.cutaways.delete(e),this.collapsing.set(e,{record:t,elapsed:0}))}this.animateCutaways(e);for(let[t,n]of this.collapsing){n.elapsed+=e;let r=Math.min(1,n.elapsed/(n.record.isBuilding?.36:.2));this.applyCollapse(n.record,1-r),r>=1&&(this.hide(n.record),this.collapsing.delete(t),this.writeRubble())}for(let e of this.destroyed){if(n.has(e))continue;let t=this.records.get(e);t&&this.rebuilding.set(e,{record:t,elapsed:0})}for(let[t,n]of this.rebuilding){n.elapsed+=e;let r=Math.min(1,n.elapsed/1.5);this.applyCollapse(n.record,r),r>=1&&(this.restore(n.record),this.rebuilding.delete(t))}if(n.size!==this.destroyed.size||[...n].some(e=>!this.destroyed.has(e))){this.destroyed.clear();for(let e of n)this.destroyed.add(e);this.writeRubble()}}writeRubble(){this.rubbleCount=0,this.scorchCount=0;for(let e of this.destroyed){if(this.rebuilding.has(e)||this.collapsing.has(e))continue;let t=this.records.get(e);if(!t)continue;let{width:n,height:r}=t.rect,i=t.isBuilding?Math.max(1,Math.min(10,Math.round(Math.max(n,r)/7))):1,a=Math.max(t.isBuilding?2.2:1,Math.min(t.isBuilding?9:3,Math.min(n,r)*.72)),o=t.isBuilding?.85:.4,s=new z(t.debrisColor).multiplyScalar(.7),c=Ua(t.rect.x+n/2,t.isBuilding?Pa:.012,t.rect.y+r/2,0,n*1.01,1,r*1.01);this.scorch.setMatrixAt(this.scorchCount,c),this.scorch.setColorAt(this.scorchCount,Fa),this.scorchCount+=1;for(let e=0;e<i;e++){let c=(e+.5)/i,l=Ua(n>=r?t.rect.x+n*c:t.rect.x+n/2,Ma,n>=r?t.rect.y+r/2:t.rect.y+r*c,t.angle+e*.61,a,o,a);this.rubble.setMatrixAt(this.rubbleCount,l),this.rubble.setColorAt(this.rubbleCount,s),this.rubbleCount+=1}}this.rubble.count=this.rubbleCount,this.rubble.instanceMatrix.needsUpdate=!0,this.rubble.instanceColor&&(this.rubble.instanceColor.needsUpdate=!0),this.scorch.count=this.scorchCount,this.scorch.instanceMatrix.needsUpdate=!0,this.scorch.instanceColor&&(this.scorch.instanceColor.needsUpdate=!0),this.scorchCount=0}ghost(e){let t=this.records.get(e);if(!t||this.destroyed.has(e)||!t.isBuilding)return;let n=this.batches.get(t.kind);if(!n?.ghost)return;let r=n.freeGhostSlots.pop();if(r===void 0)return;n.ghost.setMatrixAt(r,t.matrix),n.ghost.count=Math.max(n.ghost.count,r+1),n.ghost.instanceMatrix.needsUpdate=!0,this.ghosted.set(e,{kind:t.kind,slot:r});let i=this.cutaways.get(e);i?i.target=1:this.cutaways.set(e,{record:t,t:0,target:1})}unghost(e){let t=this.ghosted.get(e);if(!t)return;let n=this.batches.get(t.kind);n?.ghost&&(n.ghost.setMatrixAt(t.slot,Ha()),n.ghost.instanceMatrix.needsUpdate=!0),n?.freeGhostSlots.push(t.slot),this.ghosted.delete(e);let r=this.cutaways.get(e);r&&(r.target=0)}animateCutaways(e){let t=e/La;for(let[e,n]of this.cutaways)this.destroyed.has(e)||this.collapsing.has(e)||this.rebuilding.has(e)?this.cutaways.delete(e):(n.t=n.target===1?Math.min(1,n.t+t):Math.max(0,n.t-t),n.t===0&&n.target===0?(this.restore(n.record),this.cutaways.delete(e)):this.applyCutaway(n.record,n.t))}applyCutaway(e,t){let n=t*t*(3-2*t),r=Math.min(e.height,Ia),i=e.height+(r-e.height)*n,a=Ua(e.rect.x+e.rect.width/2,Ma,e.rect.y+e.rect.height/2,0,e.rect.width,i,e.rect.height),[o,s]=this.batches.get(e.kind)?.instanced??[];o?.setMatrixAt(e.index,a),o&&(o.instanceMatrix.needsUpdate=!0),s?.setMatrixAt(e.index,t>.4?Ha():a),s&&(s.instanceMatrix.needsUpdate=!0)}drawnHeight(e){let t=this.records.get(e);if(!t)return null;let n=this.cutaways.get(e);if(!n)return t.height;let r=n.t*n.t*(3-2*n.t),i=Math.min(t.height,Ia);return t.height+(i-t.height)*r}updateOcclusion(e,t,n){if(e-this.lastOcclusionCheck<100)return this.occludedNow;this.lastOcclusionCheck=e;let r=n.x-t.x,i=n.z-t.z,a=r*r+i*i,o=new Set;if(a>1)for(let[e,r]of this.records)this.destroyed.has(e)||!r.isBuilding||r.height<3||Ei(r.rect,r.height,t,n,2)&&o.add(e);for(let e of this.ghosted.keys())o.has(e)||this.unghost(e);for(let e of o)this.ghosted.has(e)||this.ghost(e);return this.occludedNow=o.size>0,this.occludedNow}};function Ka(){let e=new X,t=16777215,n=Z.tankTrack,r=Z.tankMetal;for(let t of[-.64,.64]){e.box([2.2,.46,.36],[0,.28,t],n);for(let n=0;n<4;n++)e.cylinder(.16,.16,.39,8,[-.72+n*.48,.25,t],3817544,[Math.PI/2,0,0]);e.box([2.24,.1,.4],[0,.5,t],5594214)}e.box([1.78,.46,1.12],[0,.56,0],t),e.box([.34,.5,1.1],[.86,.53,0],t,[0,0,.5]),e.box([.26,.46,1.1],[-.88,.55,0],t,[0,0,-.35]),e.box([2.1,.08,1.28],[0,.79,0],t);for(let n of[-.78,.78])e.box([2.24,.08,.18],[0,.62,n],t);for(let t of[-.38,.38])e.box([.06,.14,.22],[1.04,.6,t],16773828),e.box([.04,.1,.1],[-1.02,.6,t],16734810);e.box([.18,.12,.18],[-.9,.82,.28],r),e.box([.84,.08,.08],[1.02,.3,0],r),e.box([.7,.05,.9],[-.46,.82,0],4015180);for(let t=0;t<4;t++)e.box([.58,.015,.035],[-.46,.852,-.28+t*.19],6450037);e.box([.46,.012,.12],[.14,.845,.05],2106151),e.box([.42,.012,.08],[.32,.848,-.2],2106151),e.box([.5,.06,.16],[.18,.85,.42],5989228),e.box([.34,.1,.1],[-.2,.68,.76],5989228),e.box([.26,.1,.1],[-.2,.68,-.76],5989228),e.cylinder(.13,.15,.04,8,[.46,.82,-.3],6450037);for(let t of[-.94,.94])e.box([.12,.08,.2],[t,.48,0],5002333);return e.build()}function qa(){let e=new X,t=16777215,n=Z.tankMetal;e.cylinder(.46,.52,.34,10,[0,.17,0],t),e.box([.5,.3,.54],[.34,.2,0],t),e.box([.3,.24,.68],[-.16,.26,0],t),e.cylinder(.13,.17,.05,8,[-.08,.36,0],n),e.cylinder(.11,.11,.05,8,[-.08,.4,0],14212579),e.cylinder(.105,.09,.42,8,[.56,.2,0],n,[0,0,Math.PI/2]),e.cylinder(.06,.072,1.1,8,[1.18,.2,0],7173761,[0,0,Math.PI/2]),e.box([.2,.17,.2],[1.72,.2,0],5857643),e.cylinder(.17,.19,.1,8,[-.08,.42,0],n),e.cylinder(.13,.13,.03,8,[-.08,.48,0],14212579),e.cylinder(.025,.03,.5,5,[.05,.5,.2],2830134,[0,0,Math.PI/2]),e.box([.12,.06,.08],[.33,.5,.2],4015180);for(let t of[-.34,-.18,.18,.34])e.cylinder(.05,.05,.16,6,[.2,.38,t],5002333,[0,0,.5]);return e.cylinder(.008,.012,.65,4,[-.3,.6,.22],2830134),e.box([.28,.12,.16],[-.26,.3,-.34],6055536),e.box([.22,.1,.12],[-.3,.3,.32],6055536),e.build()}function Ja(){let e=new X;return e.box([.78,.56,.78],[0,0,0],16777215),e.box([.82,.09,.82],[0,-.1,0],7306086),e.box([.82,.09,.82],[0,.1,0],7306086),e.box([.34,.62,.34],[0,0,0],16777215),e.box([.86,.05,.1],[0,.29,0],15921906),e.box([.86,.05,.1],[0,-.29,0],15921906),e.box([.1,.05,.86],[0,.29,0],15921906),e.box([.1,.05,.86],[0,-.29,0],15921906),e.build()}function Ya(){return new W(.55,.86,20)}function Xa(e){return e>=4?eo():e===3?$a():e===2?Qa():Za()}function Za(){let e=new X;return e.cylinder(.07,.07,.9,6,[0,.05,0],16765286),e.sphere(.14,[0,.5,0],16774864,void 0,8),e.sphere(.08,[0,-.4,0],16757575,void 0,6),e.build()}function Qa(){let e=new X;return e.cylinder(.09,.11,1.02,6,[0,0,0],Z.bulletT2),e.cone(.12,.28,8,[0,.65,0],Z.bulletCore),e.cylinder(.13,.13,.08,8,[0,.24,0],Z.bulletDim),e.sphere(.08,[0,-.54,0],Z.bullet,void 0,6),e.build()}function $a(){let e=new X;e.cylinder(.14,.17,1.38,8,[0,0,0],Z.bulletT3),e.cone(.18,.34,8,[0,.86,0],Z.bulletCore),e.cylinder(.19,.19,.1,8,[0,.4,0],Z.bulletDim),e.torus(.19,.025,[0,.28,0],Z.bulletCore);for(let t of[-.22,.22])e.box([.06,.5,.24],[0,-.58,t],Z.bulletDim);return e.sphere(.11,[0,-.78,0],Z.bullet,void 0,6),e.build()}function eo(){let e=new X;e.cylinder(.18,.23,1.78,8,[0,0,0],Z.bulletT4),e.cone(.24,.42,8,[0,1.1,0],Z.bulletCore),e.cylinder(.25,.25,.12,8,[0,.64,0],Z.bulletDim),e.torus(.25,.035,[0,.38,0],Z.bulletCore);for(let t=0;t<4;t++){let n=t*Math.PI/2;e.box([.09,.58,.34],[Math.cos(n)*.25,-.75,Math.sin(n)*.25],Z.bulletDim,[0,-n,0])}return e.sphere(.19,[0,-.98,0],Z.bullet,void 0,8),e.sphere(.09,[0,-1.08,0],Z.bulletCore,void 0,6),e.build()}function to(){let e=new X,t=Z.heliBody,n=Z.heliStripe,r=Z.heliGlass;e.box([2.2,1,1.5],[0,0,0],t),e.box([.6,.7,1.2],[1.25,.05,0],t),e.box([2.3,.16,1.54],[0,.06,0],n),e.box([2,.55,1],[.35,.62,0],t),e.box([.9,.5,1.15],[1.32,.55,0],r),e.box([.06,.5,1.2],[1.78,.5,0],r),e.box([2.2,.26,.26],[-2,.18,0],t),e.box([.22,.9,.14],[-3,.52,0],t),e.box([.5,.08,.9],[-2.55,.28,0],t),e.box([.16,.16,.16],[-3,.98,0],Z.heliLight);for(let t of[-.72,.72])e.box([1.9,.1,.12],[.05,-.82,t],2830134),e.box([.1,.42,.1],[.7,-.6,t],2830134),e.box([.1,.42,.1],[-.6,-.6,t],2830134);return e.cylinder(.09,.11,.4,6,[.1,.82,0],3752524),e.box([.24,.22,.24],[1.55,-.15,0],2830134),e.box([.12,.12,.12],[.1,.2,.8],Z.heliLight),e.box([.12,.12,.12],[.1,.2,-.8],6543754),e.build()}function no(){let e=new X;return e.box([5.6,.05,.22],[0,0,0],2830134),e.box([.22,.05,5.6],[0,0,0],2830134),e.cylinder(.16,.16,.12,8,[0,0,0],5594214),e.build()}function ro(){return new Ie(2.7,24)}var io={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},ao=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},oo=new Je(-1,1,1,-1,0,1),so=new class extends Ve{constructor(){super(),this.setAttribute(`position`,new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Pe([0,2,0,0,2,0],2))}},co=class{constructor(e){this._mesh=new L(so,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oo)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},lo=class extends ao{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof q?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rt.clone(e.uniforms),this.material=new q({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new co(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},uo=class extends ao{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},fo=class extends ao{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},po=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new l);this._width=n.width,this._height=n.height,t=new ie(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lo(io),this.copyPass.material.blending=0,this.timer=new Oe}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}uo!==void 0&&(r instanceof uo?n=!0:r instanceof fo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new l);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},mo={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ho=class extends ao{constructor(){super(),this.isOutputPass=!0,this.uniforms=rt.clone(mo.uniforms),this.material=new pe({name:mo.name,uniforms:this.uniforms,vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader}),this._fsQuad=new co(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},B.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},go=class extends ao{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new z}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},_o={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new z(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},vo=class e extends ao{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new l(256,256):new l(e.x,e.y),this.clearColor=new z(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ie(i,a,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new ie(i,a,{type:_,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new ie(i,a,{type:_,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=_o;this.highPassUniforms=rt.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new q({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new l(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rt.clone(io.uniforms),this.blendMaterial=new q({uniforms:this.copyUniforms,vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new z,this._oldClearAlpha=1,this._basic=new ae,this._fsQuad=new co(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new l(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new q({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new l(.5,.5)},direction:{value:new l(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new q({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};vo.BlurDirectionX=new l(1,0),vo.BlurDirectionY=new l(0,1);var Q={fov:45,pitch:w.degToRad(44),yaw:w.degToRad(35),minDistance:56,maxDistance:200,distancePerRadius:2.5,portraitReferenceAspect:1.25,portraitMaxZoom:1.7,followLerp:.12,chase:{fov:62,speedFovKick:9,speedFovStart:16.5,speedForFullKick:25,pitch:w.degToRad(19),minDistance:13,maxDistance:62,distancePerRadius:3.6,lookAhead:7,lookAheadPerRadius:1.4,lookHeightPerRadius:.9,yawRate:7,positionRate:11,distanceRate:3,fovRate:4,fogDensity:.0042,shadowLead:.55},shadowSize:82,shadowMapSize:2048,sunDistance:300,fogDensity:.00165,bloom:{strength:.26,radius:.38,threshold:1.02}};function yo(e){return!(e>0)||e>=Q.portraitReferenceAspect?1:Math.min(Q.portraitMaxZoom,Math.sqrt(Q.portraitReferenceAspect/e))}var bo=Q.chase,xo=Math.PI*2;function So(e,t){return t>0?1-Math.exp(-e*t):0}function Co(e,t){let n=(t-e)%xo;return n>Math.PI&&(n-=xo),n<=-Math.PI&&(n+=xo),n}function wo(e,t,n,r){return e+Co(e,t)*So(n,r)}function To(e){return Math.min(bo.maxDistance,bo.minDistance+Math.max(0,e)*bo.distancePerRadius)}function Eo(e){let t=(e-bo.speedFovStart)/(bo.speedForFullKick-bo.speedFovStart),n=Math.min(1,Math.max(0,t));return bo.fov+bo.speedFovKick*n*n*(3-2*n)}function Do(e,t,n,r,i){let a=Math.cos(r),o=Math.sin(r),s=Math.max(1.2,n*bo.lookHeightPerRadius),c=Math.cos(bo.pitch)*i,l=bo.lookAhead+n*bo.lookAheadPerRadius;return{position:{x:e-a*c,y:s+Math.sin(bo.pitch)*i,z:t-o*c},lookAt:{x:e+a*l,y:s,z:t+o*l}}}var Oo=class{scene=new H;camera;renderer;target=new V(300,0,300);lookAt=new V(300,0,300);lookGoal=new V;distance=Q.minDistance;forcedDistance=null;trauma=0;zoomOffset=0;aspectZoom=1;offset;sun;sunOffset;sky;composer;bloomRequested;screenShake;currentQuality;orbitEnabled=!1;mode=`classic`;chaseHeading=0;chaseYaw=0;chaseSnap=!0;chaseSpeed=0;lastFollow={x:0,z:0};chasePosition=new V;shadowCentre=new V(300,0,300);frameDt=0;orbitElapsed=0;sizedWidth=0;sizedHeight=0;onResize=()=>this.resize();constructor(e,t={}){let n=t.quality??`high`,a=r(n);this.currentQuality=n,this.screenShake=t.screenShake??!0,this.renderer=new Ti({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(i(n,window.devicePixelRatio)),this.renderer.shadowMap.enabled=a.shadows,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=qe,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1.02,this.renderer.setClearColor(Z.sky.horizon),this.scene.fog=new Ne(Z.fog,Q.fogDensity),this.camera=new xe(Q.fov,1,.5,2400),this.offset=new V(Math.sin(Q.yaw)*Math.cos(Q.pitch),Math.sin(Q.pitch),Math.cos(Q.yaw)*Math.cos(Q.pitch)),this.sky=this.createSky(),this.scene.add(this.sky);let o=new S(Z.hemiSky,Z.hemiGround,.58);this.scene.add(o);let s=new Be(16777215,.12);this.scene.add(s),this.sun=new et(Z.sunLight,3.5),this.sun.castShadow=a.shadows,this.sun.shadow.mapSize.set(a.shadowMapSize,a.shadowMapSize),this.sun.shadow.camera.left=-Q.shadowSize,this.sun.shadow.camera.right=Q.shadowSize,this.sun.shadow.camera.top=Q.shadowSize,this.sun.shadow.camera.bottom=-Q.shadowSize,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=420,this.sun.shadow.bias=0,this.sun.shadow.normalBias=.05,this.sun.shadow.camera.updateProjectionMatrix(),this.sunOffset=new V(Z.sky.sunDir.x*Q.sunDistance,Z.sky.sunDir.y*Q.sunDistance,Z.sky.sunDir.z*Q.sunDistance),this.scene.add(this.sun),this.scene.add(this.sun.target);let c=new et(13625599,.32);c.position.set(-160,90,-120),this.scene.add(c),this.bloomRequested=new URLSearchParams(window.location.search).get(`bloom`)!==`0`,this.composer=this.createComposer(),this.resize(),window.addEventListener(`resize`,this.onResize)}applyQuality(e){if(e===this.currentQuality)return;this.currentQuality=e;let t=r(e);this.renderer.setPixelRatio(i(e,window.devicePixelRatio)),this.renderer.shadowMap.enabled=t.shadows,this.sun.castShadow=t.shadows,this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.sun.shadow.mapSize.set(t.shadowMapSize,t.shadowMapSize),this.sun.shadow.camera.updateProjectionMatrix(),this.sun.shadow.needsUpdate=!0;let n=this.bloomRequested&&t.bloom;n!==!!this.composer&&(this.composer?.dispose(),this.composer=n?this.createComposer():null),this.resize(),this.updateSun()}createComposer(){if(!this.bloomRequested||!r(this.currentQuality).bloom)return null;try{let e=new po(this.renderer);return e.setPixelRatio(this.renderer.getPixelRatio()),e.setSize(window.innerWidth,window.innerHeight),e.addPass(new go(this.scene,this.camera)),e.addPass(new vo(new l(window.innerWidth,window.innerHeight),Q.bloom.strength,Q.bloom.radius,Q.bloom.threshold)),e.addPass(new ho),e}catch(e){return console.warn(`Bloom unavailable; rendering without post-processing.`,e),null}}createSky(){let e=new q({side:1,depthWrite:!1,fog:!1,uniforms:{uZenith:{value:new z(Z.sky.zenith)},uHorizon:{value:new z(Z.sky.horizon)},uSunColor:{value:new z(Z.sky.sun)},uSunDir:{value:Z.sky.sunDir.clone()}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uZenith;
        uniform vec3 uHorizon;
        uniform vec3 uSunColor;
        uniform vec3 uSunDir;
        varying vec3 vWorld;
        void main() {
          vec3 dir = normalize(vWorld - cameraPosition);
          float h = clamp(dir.y, 0.0, 1.0);
          vec3 color = mix(uHorizon, uZenith, pow(h, 0.55));
          color = mix(uHorizon, color, smoothstep(-0.05, 0.14, dir.y));
          float sun = max(dot(dir, uSunDir), 0.0);
          color += uSunColor * (pow(sun, 900.0) * 2.2 + pow(sun, 16.0) * 0.16);
          gl_FragColor = vec4(color, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}),t=new L(new Te(1700,32,20),e);return t.frustumCulled=!1,t.renderOrder=-10,t}addTrauma(e){this.screenShake&&(this.trauma=Math.min(1,this.trauma+e))}setOrbit(e){this.orbitEnabled=e,e&&(this.orbitElapsed=0)}orbit(e,t,n=190){this.orbitElapsed+=e;let r=this.orbitElapsed*.035+.7;this.target.set(t.x,0,t.z),this.camera.position.set(t.x+Math.cos(r)*n,n*.4,t.z+Math.sin(r)*n),this.lookAt.set(t.x,0,t.z),this.camera.lookAt(this.lookAt),this.sky.position.copy(this.camera.position),this.shadowCentre.copy(this.target),this.updateSun()}punchZoom(e){this.zoomOffset+=e}setDistance(e){this.forcedDistance=e}clearDistance(){this.forcedDistance=null}setCameraMode(e){e!==this.mode&&(this.mode=e,this.chaseSnap=!0,this.scene.fog instanceof Ne&&(this.scene.fog.density=e===`chase`?Q.chase.fogDensity:Q.fogDensity),this.setFov(e===`chase`?Q.chase.fov:Q.fov))}get cameraMode(){return this.mode}setChaseHeading(e){Number.isFinite(e)&&(this.chaseHeading=e)}setFov(e){Math.abs(this.camera.fov-e)<.01||(this.camera.fov=e,this.camera.updateProjectionMatrix())}update(e){this.frameDt=e,this.trauma=Math.max(0,this.trauma-e*1.7),this.zoomOffset*=.92}follow(e,t,n,r=!1){if(this.orbitEnabled)return;if(this.mode===`chase`){this.followChase(e,t,n,r);return}this.target.x+=(e-this.target.x)*(r?1:Q.followLerp),this.target.z+=(t-this.target.z)*(r?1:Q.followLerp);let i=this.forcedDistance??Math.min(Q.maxDistance,Q.minDistance+n*Q.distancePerRadius)*this.aspectZoom*(1+this.zoomOffset);this.distance+=(i-this.distance)*(r?1:.08);let a=this.trauma*this.trauma*1.6;this.camera.position.set(this.target.x+this.offset.x*this.distance+(Math.random()-.5)*a,this.offset.y*this.distance+(Math.random()-.5)*a*.4,this.target.z+this.offset.z*this.distance+(Math.random()-.5)*a),this.lookGoal.set(this.target.x,0,this.target.z),this.lookAt.lerp(this.lookGoal,r?1:.16),this.camera.lookAt(this.lookAt),this.sky.position.copy(this.camera.position),this.shadowCentre.copy(this.target),this.updateSun()}followChase(e,t,n,r){let i=Q.chase,a=this.frameDt,o=r||this.chaseSnap||!(a>0);this.chaseSnap=!1;let s=o?0:Math.hypot(e-this.lastFollow.x,t-this.lastFollow.z)/a;this.lastFollow.x=e,this.lastFollow.z=t,s<80&&(this.chaseSpeed+=(s-this.chaseSpeed)*So(5,a)),this.chaseYaw=o?this.chaseHeading:wo(this.chaseYaw,this.chaseHeading,i.yawRate,a);let c=1+(this.aspectZoom-1)*.5,l=(this.forcedDistance??To(n))*c*(1+this.zoomOffset);this.distance=o?l:this.distance+(l-this.distance)*So(i.distanceRate,a);let u=Do(e,t,n,this.chaseYaw,this.distance),d=o?1:So(i.positionRate,a);this.chasePosition.x+=(u.position.x-this.chasePosition.x)*d,this.chasePosition.y+=(u.position.y-this.chasePosition.y)*d,this.chasePosition.z+=(u.position.z-this.chasePosition.z)*d,this.lookGoal.set(u.lookAt.x,u.lookAt.y,u.lookAt.z),o?this.lookAt.copy(this.lookGoal):this.lookAt.lerp(this.lookGoal,d);let f=this.trauma*this.trauma*.9;this.camera.position.set(this.chasePosition.x+(Math.random()-.5)*f,this.chasePosition.y+(Math.random()-.5)*f*.5,this.chasePosition.z+(Math.random()-.5)*f),this.camera.lookAt(this.lookAt);let p=Eo(this.chaseSpeed);this.setFov(o?p:this.camera.fov+(p-this.camera.fov)*So(i.fovRate,a)),this.target.set(e,0,t);let m=Q.shadowSize*i.shadowLead;this.shadowCentre.set(e+Math.cos(this.chaseYaw)*m,0,t+Math.sin(this.chaseYaw)*m),this.sky.position.copy(this.camera.position),this.updateSun()}updateSun(){let e=this.sun.shadow.mapSize.x||Q.shadowMapSize,t=Q.shadowSize*2/e,n=Math.round(this.shadowCentre.x/t)*t,r=Math.round(this.shadowCentre.z/t)*t;this.sun.target.position.set(n,0,r),this.sun.position.set(n+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld()}resize(){let e=window.innerWidth,t=window.innerHeight;this.sizedWidth=e,this.sizedHeight=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.aspectZoom=yo(e/t),this.composer?.setPixelRatio(this.renderer.getPixelRatio()),this.composer?.setSize(e,t)}render(){(window.innerWidth!==this.sizedWidth||window.innerHeight!==this.sizedHeight)&&this.resize(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener(`resize`,this.onResize),this.composer?.dispose(),this.renderer.dispose()}};function ko(e,n){return n===null?`even`:t(e,n)?`danger`:t(n,e)?`prey`:`even`}var Ao={self:`#ffc53d`,danger:`#ff4d4d`,prey:`#4ade80`},jo=64,Mo=.015,No=new z(16777215),Po=16777215,Fo=[`stripe`,`checker`,`chevron`,`camo`],Io=[`flag`,`antenna`,`horns`,`crown`],Lo=class{scene;hulls;turrets;patterns=new Map;accessories=new Map;actors=new Map;matrix=new F;zero=new F().makeScale(0,0,0);position=new V;quaternion=new Ee;scale=new V;axis=new V(0,1,0);tint=new z;markers;chase=!1;localRing;constructor(e,t={}){this.markers=t.markers??!0,this.scene=e;let n=new K({vertexColors:!0,roughness:.52,metalness:.22});this.hulls=new A(Ka(),n,jo),this.hulls.castShadow=!0,this.hulls.receiveShadow=!0,this.hulls.frustumCulled=!1,this.hulls.instanceMatrix.setUsage(M),this.hulls.count=0;let r=new K({vertexColors:!0,roughness:.48,metalness:.26});this.turrets=new A(qa(),r,jo),this.turrets.castShadow=!0,this.turrets.receiveShadow=!0,this.turrets.frustumCulled=!1,this.turrets.instanceMatrix.setUsage(M),this.turrets.count=0,e.add(this.hulls,this.turrets),this.localRing=new L(new W(1.25,1.55,40),new ae({color:16762173,transparent:!0,opacity:.85,depthWrite:!1})),this.localRing.rotation.x=-Math.PI/2,this.localRing.renderOrder=2,this.localRing.visible=!1,e.add(this.localRing);for(let t of Fo){let n=this.decorMesh(Ro(t),!1);this.patterns.set(t,n),e.add(n)}for(let t of Io){let n=this.decorMesh(zo(t),!0);this.accessories.set(t,n),e.add(n)}}decorMesh(e,t){let n=new K({vertexColors:!0,roughness:.55,metalness:.18}),r=new A(e,n,jo);return r.castShadow=t,r.receiveShadow=!1,r.frustumCulled=!1,r.instanceMatrix.setUsage(M),r.count=0,r}setChaseView(e){this.chase=e}sync(e,t,n){let r=new Set,i=e.slice(0,jo);this.hulls.count=i.length,this.turrets.count=i.length;let a=t?i.find(e=>e.id===t):void 0,o=a?a.mass:null;this.localRing.visible=this.markers&&a!==void 0,a&&(this.localRing.position.set(a.x,.16,a.z),this.localRing.scale.setScalar(a.radius*(1+Math.sin(n*.25)*.04))),i.forEach((e,i)=>{r.add(e.id);let a=this.actors.get(e.id);a||(a=this.createActor(e,i,e.id===t),this.actors.set(e.id,a)),a.index=i;let s=e.id===t?`self`:ko(e.mass,o);s!==a.relation&&(a.relation=s,this.drawLabel(a)),a.recoil*=.8,a.flash*=.84;let c=n<e.protectedUntilTick;a.shield.visible=c,c&&(a.shield.position.set(e.x,.45*e.radius,e.z),a.shield.scale.setScalar(e.radius*1.5+Math.sin(n*.4)*.15)),this.tint.copy(a.body),c&&this.tint.lerp(No,.35),a.flash>.01&&this.tint.lerp(No,Math.min(.8,a.flash)),this.hulls.setColorAt(i,this.tint),this.tint.copy(a.accent),c&&this.tint.lerp(No,.28),a.flash>.01&&this.tint.lerp(No,Math.min(.8,a.flash)),this.turrets.setColorAt(i,this.tint);for(let e of this.patterns.values())e.setColorAt(i,a.accent);for(let e of this.accessories.values())e.setColorAt(i,a.accent);this.position.set(e.x,Mo,e.z),this.quaternion.setFromAxisAngle(this.axis,-e.angle),this.scale.setScalar(e.radius),this.matrix.compose(this.position,this.quaternion,this.scale),this.hulls.setMatrixAt(i,this.matrix);let l=a.recoil*.3*e.radius;this.position.set(e.x-Math.cos(e.aim)*l,Mo+.78*e.radius,e.z-Math.sin(e.aim)*l),this.quaternion.setFromAxisAngle(this.axis,-e.aim),this.matrix.compose(this.position,this.quaternion,this.scale),this.turrets.setMatrixAt(i,this.matrix);let u=Math.min(13,5.4+e.radius*.45)*(this.chase?.62:1);a.label.position.set(e.x,e.radius*(this.chase?1.7:2.1)+(this.chase?2.2:3.4),e.z),a.label.scale.set(u,u/3.6,1),a.label.visible=this.markers&&!(this.chase&&e.id===t)}),this.syncDecor(i);for(let[e,t]of this.actors)r.has(e)||(this.scene.remove(t.label,t.shield),Bo(t.label),Bo(t.shield),this.actors.delete(e));this.hulls.instanceMatrix.needsUpdate=!0,this.turrets.instanceMatrix.needsUpdate=!0,this.hulls.instanceColor&&(this.hulls.instanceColor.needsUpdate=!0),this.turrets.instanceColor&&(this.turrets.instanceColor.needsUpdate=!0);for(let e of this.patterns.values())e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0);for(let e of this.accessories.values())e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}syncDecor(e){let t=e=>(this.position.set(e.x,Mo,e.z),this.quaternion.setFromAxisAngle(this.axis,-e.angle),this.scale.setScalar(e.radius),this.matrix.compose(this.position,this.quaternion,this.scale));for(let[n,r]of this.patterns)r.count=e.length,e.forEach((e,i)=>{let a=this.actors.get(e.id);r.setMatrixAt(i,a&&a.pattern===n?t(e):this.zero)});for(let[n,r]of this.accessories)r.count=e.length,e.forEach((e,i)=>{let a=this.actors.get(e.id);r.setMatrixAt(i,a&&a.accessory===n?t(e):this.zero)})}shot(e){let t=this.actors.get(e);t&&(t.recoil=1)}hit(e){let t=this.actors.get(e);t&&(t.flash=.9)}createActor(e,t,n){let r=a(e.skin);this.hulls.setColorAt(t,new z(r.body)),this.turrets.setColorAt(t,new z(r.accent));for(let e of this.patterns.values())e.setColorAt(t,new z(r.accent));for(let e of this.accessories.values())e.setColorAt(t,new z(r.accent));let i=document.createElement(`canvas`);i.width=512,i.height=144;let o=new ye(i);o.colorSpace=qe,o.minFilter=N;let s=new Ue(new ze({map:o,depthTest:!1,transparent:!0}));s.renderOrder=12,this.scene.add(s);let c=new L(new Te(1,20,14),new ae({color:10479871,transparent:!0,opacity:.2,depthWrite:!1,side:2}));c.visible=!1,this.scene.add(c);let l={id:e.id,label:s,labelCanvas:i,name:e.name,relation:n?`self`:`even`,shield:c,index:t,body:new z(r.body),accent:new z(r.accent),skinId:r.id,pattern:r.pattern,accessory:r.accessory,flash:0,recoil:0};return this.drawLabel(l),l}drawLabel(e){let t=e.labelCanvas,n=t.getContext(`2d`);if(!n)return;let r=e.relation===`even`?`#`+e.accent.getHex().toString(16).padStart(6,`0`):Ao[e.relation];n.clearRect(0,0,t.width,t.height),n.fillStyle=e.relation===`danger`?`rgba(58, 12, 16, 0.88)`:`rgba(12, 18, 26, 0.82)`,n.beginPath(),n.roundRect(10,10,492,108,32),n.fill(),n.strokeStyle=r,n.lineWidth=e.relation===`danger`||e.relation===`prey`?8:4,n.stroke(),n.fillStyle=r,n.beginPath(),n.arc(52,64,12,0,Math.PI*2),n.fill(),n.font=`700 46px ui-sans-serif, system-ui, sans-serif`,n.fillStyle=`#f4f8ff`,n.textAlign=`center`,n.textBaseline=`middle`;let i=e.name,a=i.length>14?i.slice(0,13)+`…`:i;n.fillText(a,288,66);let o=e.label.material;o.map&&(o.map.needsUpdate=!0)}};function Ro(e){let t=new X,n=Po;if(e===`stripe`)for(let e of[-.36,.2])t.box([.22,.02,1.2],[e,.872,0],n);else if(e===`checker`)for(let e of[-.4,.16])for(let r of[-.34,.22])t.box([.3,.02,.3],[e,.872,r],n);else if(e===`chevron`)for(let e=0;e<3;e++){let r=-.5+e*.35;t.box([.16,.02,.8],[r,.872,-.22],n,[0,.55,0]),t.box([.16,.02,.8],[r,.872,.22],n,[0,-.55,0])}else for(let[e,r,i]of[[.36,.28,.34],[-.28,-.34,.28],[.08,-.05,.24],[-.48,.3,.2]])t.ico(i,0,[e,.872,r],n,[1.15,.1,.85]);return t.build()}function zo(e){let t=new X,n=Po;if(e===`flag`)t.cylinder(.035,.04,1,6,[-.76,.5,.18],n),t.box([.46,.34,.02],[-.98,.82,.18],n);else if(e===`antenna`)t.cylinder(.02,.03,1.05,5,[-.58,.55,.28],n),t.sphere(.09,[-.58,1.08,.28],n,void 0,6);else if(e===`horns`)t.cone(.11,.42,6,[.42,1.02,.32],n,[.32,0,0]),t.cone(.11,.42,6,[.42,1.02,-.32],n,[-.32,0,0]);else{t.cylinder(.22,.24,.16,8,[-.05,.98,0],n);for(let e of[-.22,0,.22])t.cone(.08,.26,5,[e,1.16,0],n)}return t.build()}function Bo(e){e.traverse(e=>{if(e instanceof L){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}e instanceof Ue&&(e.material.map?.dispose(),e.material.dispose())})}var $={maxParticles:1400,gravity:-14,drag:1.6,colors:{muzzle:16770723,hit:16756874,kill:16742954,crush:14207922,pickup:10354623,tier:16765286},muzzle:{count:12,speed:16,life:.18,trauma:.05},hit:{count:22,speed:11,life:.35,trauma:.12},kill:{count:90,speed:18,life:.95,trauma:.55},crush:{count:18,speed:6,life:.65,trauma:.08},pickup:{count:8,speed:7,life:.32,trauma:0},tier:{trauma:.4,count:70,speed:15,life:.9}},Vo=class{points;particles=[];positions;colors;sizes;alphas;geometry;cursor=0;busy=!1;constructor(e){this.positions=new Float32Array(e.count*3),this.colors=new Float32Array(e.count*3),this.sizes=new Float32Array(e.count),this.alphas=new Float32Array(e.count);for(let t=0;t<e.count;t++)this.positions[t*3+1]=-1e3,this.particles.push({active:!1,x:0,y:-1e3,z:0,vx:0,vy:0,vz:0,life:0,maxLife:1,size:1,grow:0,gravity:0,drag:0,color:new z(16777215)});this.geometry=new Ve,this.geometry.setAttribute(`position`,new R(this.positions,3)),this.geometry.setAttribute(`aColor`,new R(this.colors,3)),this.geometry.setAttribute(`aSize`,new R(this.sizes,1)),this.geometry.setAttribute(`aAlpha`,new R(this.alphas,1));let t=new q({uniforms:{uScale:{value:e.scale}},transparent:!0,depthWrite:!1,blending:e.additive?2:1,vertexShader:`
        attribute float aSize;
        attribute float aAlpha;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uScale;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (uScale / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float a = smoothstep(0.5, 0.06, d) * vAlpha * ${e.baseAlpha.toFixed(2)};
          if (a < 0.004) discard;
          gl_FragColor = vec4(vColor, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.points=new Se(this.geometry,t),this.points.frustumCulled=!1,this.points.renderOrder=6}spawn(e,t,n,r,i,a,o,s={}){let c=s.spread??1;for(let l=0;l<r;l++){let r=this.cursor;this.cursor=(this.cursor+1)%this.particles.length;let l=this.particles[r];if(!l)continue;let u=Math.random()*Math.PI*2,d=i*(.35+Math.random()*.9)*c;l.active=!0,l.x=e+(Math.random()-.5)*.8*c,l.y=t+(Math.random()-.5)*.4,l.z=n+(Math.random()-.5)*.8*c,l.vx=Math.cos(u)*d*.8,l.vz=Math.sin(u)*d*.8,l.vy=d*(s.lift??.55)+Math.random()*i*.25,l.life=a*(.7+Math.random()*.6),l.maxLife=l.life,l.size=(s.size??1)*(.7+Math.random()*.8),l.grow=s.grow??0,l.gravity=s.gravity??$.gravity,l.drag=s.drag??$.drag,l.color.setHex(o),this.busy=!0}}update(e){if(!this.busy)return;let t=!1;for(let n=0;n<this.particles.length;n++){let r=this.particles[n];if(!r)continue;if(!r.active){this.alphas[n]=0;continue}if(r.life-=e,r.life<=0){r.active=!1,this.alphas[n]=0,this.positions[n*3+1]=-1e3;continue}t=!0;let i=Math.max(0,1-r.drag*e);r.vx*=i,r.vz*=i,r.vy+=r.gravity*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.08&&(r.y=.08,r.vy*=-.28,r.vx*=.7,r.vz*=.7);let a=1-r.life/r.maxLife,o=Math.max(0,r.life/r.maxLife);this.positions[n*3]=r.x,this.positions[n*3+1]=r.y,this.positions[n*3+2]=r.z,this.colors[n*3]=r.color.r,this.colors[n*3+1]=r.color.g,this.colors[n*3+2]=r.color.b,this.sizes[n]=r.size*(1+r.grow*a),this.alphas[n]=o*o}this.geometry.getAttribute(`position`).needsUpdate=!0,this.geometry.getAttribute(`aColor`).needsUpdate=!0,this.geometry.getAttribute(`aSize`).needsUpdate=!0,this.geometry.getAttribute(`aAlpha`).needsUpdate=!0,this.busy=t}},Ho=3,Uo=96/256*Ho,Wo=class{sparks;smoke;rings=[];ringCursor=0;flashes=[];flashCursor=0;tracers=[];tracerCursor=0;tracerFrom=new V;tracerTo=new V;texts=[];textCursor=0;constructor(e){let t=Math.min(typeof window>`u`?1:window.devicePixelRatio||1,2);this.sparks=new Vo({count:Math.floor($.maxParticles*.65),additive:!0,baseAlpha:1,scale:620*t}),this.smoke=new Vo({count:Math.floor($.maxParticles*.35),additive:!1,baseAlpha:.42,scale:900*t}),e.add(this.smoke.points,this.sparks.points);for(let t=0;t<10;t++){let t=new L(new W(.82,1,44),new ae({color:16777215,transparent:!0,opacity:0,side:2,depthWrite:!1,blending:2,toneMapped:!1}));t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=5,e.add(t),this.rings.push({mesh:t,life:0,maxLife:.5,radius:6})}let n=this.glowTexture();for(let t=0;t<10;t++){let t=new Ue(new ze({map:n,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}));t.visible=!1,t.renderOrder=7,e.add(t),this.flashes.push({sprite:t,life:0,maxLife:1,size:1})}let r=new me(.11,.11,1,6,1,!0);r.rotateX(Math.PI/2),r.translate(0,0,.5);for(let t=0;t<6;t++){let t=new L(r,new ae({color:16769162,transparent:!0,opacity:0,depthWrite:!1,blending:2,toneMapped:!1}));t.visible=!1,t.frustumCulled=!1,t.renderOrder=6,e.add(t),this.tracers.push({mesh:t,life:0,maxLife:.16})}for(let t=0;t<26;t++){let t=document.createElement(`canvas`);t.width=256,t.height=96;let n=t.getContext(`2d`),r=new ye(t);r.colorSpace=qe,r.minFilter=N;let i=new Ue(new ze({map:r,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,fog:!1}));i.visible=!1,i.renderOrder=16,e.add(i),this.texts.push({sprite:i,canvas:t,ctx:n,texture:r,life:0,maxLife:1,startY:0,width:0})}}floatingText(e,t,n,r=16777215,i=1,a=2.15){let o=this.texts[this.textCursor];if(this.textCursor=(this.textCursor+1)%this.texts.length,!o?.ctx)return;let s=o.ctx;s.clearRect(0,0,256,96),s.fillStyle=`rgba(14, 17, 26, 0.8)`,s.beginPath(),s.roundRect(6,8,244,80,26),s.fill(),s.strokeStyle=`rgba(255, 255, 255, 0.16)`,s.lineWidth=2,s.stroke(),s.font=`800 48px ui-rounded, system-ui, sans-serif`,s.textAlign=`center`,s.textBaseline=`middle`,s.fillStyle=`#`+r.toString(16).padStart(6,`0`),s.fillText(n,128,51),o.texture.needsUpdate=!0,o.startY=a,o.width=Ho*i,o.sprite.visible=!0,o.sprite.position.set(e+(Math.random()-.5)*.6,o.startY,t+(Math.random()-.5)*.6),o.sprite.scale.set(o.width,o.width*(96/256),1),o.sprite.material.opacity=1,o.life=.95,o.maxLife=.95}glowTexture(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);if(t){let e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,`rgba(255,255,255,1)`),e.addColorStop(.22,`rgba(255,240,190,1)`),e.addColorStop(.5,`rgba(255,150,60,0.8)`),e.addColorStop(1,`rgba(255,80,20,0)`),t.fillStyle=e,t.fillRect(0,0,128,128)}let n=new ye(e);return n.colorSpace=qe,n}flash(e,t,n,r,i,a){let o=this.flashes[this.flashCursor];this.flashCursor=(this.flashCursor+1)%this.flashes.length,o&&(o.sprite.visible=!0,o.sprite.position.set(e,t,n),o.sprite.scale.setScalar(r),o.sprite.material.color.setHex(i),o.sprite.material.opacity=1,o.size=r,o.life=a,o.maxLife=a)}spawn(e,t,n,r,i,a,o,s=1){this.sparks.spawn(e,t,n,r,i,a,o,{spread:s,size:1.1})}ring(e,t,n,r,i=.5){let a=this.rings[this.ringCursor];this.ringCursor=(this.ringCursor+1)%this.rings.length,a&&(a.mesh.position.set(e,.16,t),a.mesh.scale.setScalar(1),a.mesh.visible=!0,a.radius=n,a.maxLife=i,a.life=i,a.mesh.material.color.setHex(r),a.mesh.material.opacity=.9)}update(e){let t=Math.min(e,.05);this.sparks.update(t),this.smoke.update(t);for(let e of this.rings){if(e.life<=0)continue;e.life-=t;let n=1-Math.max(0,e.life)/e.maxLife;e.mesh.scale.setScalar(1+n*e.radius),e.mesh.position.y=.17;let r=e.mesh.material;r.opacity=Math.max(0,.85*(1-n)*(1-n)),e.life<=0&&(e.mesh.visible=!1)}for(let e of this.tracers){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}let n=e.life/e.maxLife;e.mesh.material.opacity=n,e.mesh.scale.x=e.mesh.scale.y=.4+n*.8}for(let e of this.flashes){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}let n=1-e.life/e.maxLife;e.sprite.scale.setScalar(e.size*(1+n*1.4)),e.sprite.material.opacity=(1-n)**1.6}for(let e of this.texts){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}let n=1-e.life/e.maxLife;e.sprite.position.y=e.startY+n*1.5,e.sprite.scale.set(e.width*(1+n*.12),e.width*(1+n*.12)*(96/256),1),e.sprite.material.opacity=1-n*n}}muzzle(e,t){this.flash(e,.95,t,1.9,16770723,.09),this.sparks.spawn(e,.95,t,$.muzzle.count,$.muzzle.speed,$.muzzle.life,$.colors.muzzle,{spread:.5,size:1.4,lift:.5}),this.sparks.spawn(e,.95,t,3,5,.12,16777215,{spread:.3,size:2.6,lift:.2}),this.smoke.spawn(e,1,t,2,1.2,.6,13617342,{spread:.5,size:1.3,grow:2.2,gravity:.6})}tracer(e,t,n,r,i,a){let o=this.tracers[this.tracerCursor];this.tracerCursor=(this.tracerCursor+1)%this.tracers.length,o&&(this.tracerFrom.set(e,t,n),this.tracerTo.set(r,i,a),o.mesh.position.copy(this.tracerFrom),o.mesh.lookAt(this.tracerTo),o.mesh.scale.set(1.2,1.2,this.tracerFrom.distanceTo(this.tracerTo)),o.mesh.visible=!0,o.mesh.material.opacity=1,o.life=o.maxLife)}heliShot(e,t,n,r,i,a){this.flash(e,t,n,2.4,16770723,.1),this.sparks.spawn(e,t,n,6,6,.18,$.colors.muzzle,{spread:.4,size:1.3}),this.tracer(e,t,n,r,1,i),this.impact(r,i,a)}impact(e,t,n){let r=n?$.colors.hit:$.colors.crush;this.flash(e,1,t,2,n?16756874:15260870,.12),this.sparks.spawn(e,1,t,$.hit.count,$.hit.speed,$.hit.life,r,{spread:.7,size:1.1}),this.smoke.spawn(e,1,t,n?4:6,2.5,.75,n?9405816:14207922,{spread:.8,size:1.5,grow:2.6,gravity:.8}),this.ring(e,t,2.5,r,.35)}explosion(e,t,n){let r=Math.min(1.8,.6+n/180),i=Math.round($.kill.count*r);this.flash(e,2.1,t,14*r,16769696,.32),this.flash(e+1.2,2.6,t-.8,9*r,16747069,.5),this.sparks.spawn(e,1.2,t,i,$.kill.speed,$.kill.life,$.colors.kill,{spread:1.1,size:1.6,lift:.65}),this.sparks.spawn(e,1,t,Math.round(i*.4),$.kill.speed*1.25,.6,16773296,{spread:.8,size:2.2,lift:.8}),this.smoke.spawn(e,1.4,t,Math.round(16+18*r),4.5,1.8,3814706,{spread:1.5,size:3.2,grow:3.8,gravity:1.1,drag:1.1}),this.smoke.spawn(e,1.2,t,Math.round(12*r),2.4,.6,16742954,{spread:1.1,size:4.2,grow:2,gravity:1.7}),this.smoke.spawn(e,1.1,t,Math.round(6*r),1.6,.35,16765286,{spread:.8,size:3.4,grow:1.4,gravity:2.2}),this.ring(e,t,5+n/55,$.colors.kill,.6),this.ring(e,t,3+n/90,16773296,.35)}crush(e,t){this.sparks.spawn(e,.7,t,$.crush.count,$.crush.speed,$.crush.life,$.colors.crush,{spread:.9,size:1.2}),this.smoke.spawn(e,.8,t,6,3,1,13615786,{spread:1.2,size:1.8,grow:3.2,gravity:.6}),this.ring(e,t,2.2,14207922,.4)}poof(e,t){this.flash(e,.55,t,.9,16770723,.12),this.smoke.spawn(e,.55,t,5,1.8,.55,14207922,{spread:.6,size:1,grow:2.2,gravity:.7}),this.sparks.spawn(e,.55,t,4,3.5,.2,15260870,{spread:.4,size:.8})}pickupPop(e,t){this.flash(e,.9,t,1.1,10354623,.14),this.sparks.spawn(e,.9,t,$.pickup.count,$.pickup.speed,$.pickup.life,$.colors.pickup,{spread:.5,size:1.1}),this.ring(e,t,1.1,$.colors.pickup,.3)}tierUp(e,t){this.flash(e,1.4,t,7,16765286,.5),this.sparks.spawn(e,1,t,$.tier.count,$.tier.speed,$.tier.life,$.colors.tier,{spread:1.2,size:1.8,lift:1.5,gravity:-3}),this.smoke.spawn(e,1.2,t,8,2,1.2,16773568,{spread:1,size:2.4,grow:3,gravity:1.2}),this.ring(e,t,8,$.colors.tier,.9),this.ring(e,t,4.2,16777215,.55)}};export{X as S,Aa as _,zo as a,Ri as b,Xa as c,no as d,Ja as f,Ga as g,qa as h,Lo as i,to as l,Ka as m,$ as n,Ro as o,Ya as p,Wo as r,Oo as s,Uo as t,ro as u,ja as v,Li as x,Z as y};