(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="174",ru=0,mc=1,ou=2,$l=1,Jl=2,Bn=3,Wn=0,Qt=1,zt=2,oi=0,Wi=1,gc=2,_c=3,vc=4,au=5,Mi=100,cu=101,lu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,zo=204,Go=205,gu=206,_u=207,vu=208,xu=209,yu=210,Mu=211,Su=212,bu=213,Tu=214,Ho=0,Vo=1,Wo=2,Zi=3,Xo=4,qo=5,Ko=6,Yo=7,Ql=0,wu=1,Eu=2,ai=0,Au=1,Ru=2,Cu=3,ks=4,Pu=5,Iu=6,Lu=7,xc="attached",Du="detached",eh=300,ji=301,$i=302,Zo=303,jo=304,zr=306,jt=1e3,ii=1001,Dr=1002,Xt=1003,th=1004,Ms=1005,$t=1006,Tr=1007,Gn=1008,Xn=1009,nh=1010,ih=1011,Ps=1012,Ua=1013,bi=1014,Mn=1015,zs=1016,Fa=1017,Oa=1018,Ji=1020,sh=35902,rh=1021,oh=1022,hn=1023,ah=1024,ch=1025,Xi=1026,Qi=1027,Ba=1028,ka=1029,lh=1030,za=1031,Ga=1033,wr=33776,Er=33777,Ar=33778,Rr=33779,$o=35840,Jo=35841,Qo=35842,ea=35843,ta=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,ca=37812,la=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,Cr=36492,va=36494,xa=36495,hh=36283,ya=36284,Ma=36285,Sa=36286,Is=2300,Ls=2301,jr=2302,yc=2400,Mc=2401,Sc=2402,Nu=2500,Uu=0,uh=1,ba=2,Fu=3200,Ou=3201,dh=0,Bu=1,ei="",Ut="srgb",Kt="srgb-linear",Nr="linear",ut="srgb",Ai=7680,bc=519,ku=512,zu=513,Gu=514,fh=515,Hu=516,Vu=517,Wu=518,Xu=519,Ta=35044,Tc="300 es",Hn=2e3,Ur=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const bs=Math.PI/180,es=180/Math.PI;function un(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function Ha(r,e){return(r%e+e)%e}function qu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ku(r,e,t){return r!==e?(t-r)/(e-r):0}function Ts(r,e,t){return(1-t)*r+t*e}function Yu(r,e,t,n){return Ts(r,e,1-Math.exp(-t*n))}function Zu(r,e=1){return e-Math.abs(Ha(r,e*2)-e)}function ju(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function $u(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ju(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Qu(r,e){return r+Math.random()*(e-r)}function ed(r){return r*(.5-Math.random())}function td(r){r!==void 0&&(wc=r);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(r){return r*bs}function id(r){return r*es}function sd(r){return(r&r-1)===0&&r!==0}function rd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function od(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ad(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const qi={DEG2RAD:bs,RAD2DEG:es,generateUUID:un,clamp:Ye,euclideanModulo:Ha,mapLinear:qu,inverseLerp:Ku,lerp:Ts,damp:Yu,pingpong:Zu,smoothstep:ju,smootherstep:$u,randInt:Ju,randFloat:Qu,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:od,setQuaternionFromProperEuler:ad,normalize:ct,denormalize:xn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,o,a,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],T=i[1],M=i[4],v=i[7],L=i[2],I=i[5],A=i[8];return s[0]=o*_+a*T+c*L,s[3]=o*p+a*M+c*I,s[6]=o*m+a*v+c*A,s[1]=l*_+h*T+u*L,s[4]=l*p+h*M+u*I,s[7]=l*m+h*v+u*A,s[2]=d*_+f*T+g*L,s[5]=d*p+f*M+g*I,s[8]=d*m+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new qe;function ph(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cd(){const r=Ds("canvas");return r.style.display="block",r}const Ec={};function vi(r){r in Ec||(Ec[r]=!0,console.warn(r))}function ld(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function hd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ud(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ac=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){const r={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Nr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Kt]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),r}const Qe=dd();function Vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ki(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ri;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Ds("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pd=0;class Va{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Jr(i[o].image)):s.push(Jr(i[o]))}else s=Jr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Rt extends os{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=ii,i=ii,s=$t,o=Gn,a=hn,c=Xn,l=Rt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=un(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jt:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jt:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=eh;Rt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(f+1)/2,L=(m+1)/2,I=(h+d)/4,A=(u+_)/4,P=(g+p)/4;return M>v&&M>L?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=I/n,s=A/n):v>L?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=I/i,s=P/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=P/s),this.set(n,i,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Va(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends gd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let p=1-a;const m=c*d+l*f+h*g+u*_,T=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),I=Math.atan2(L,m*T);p=Math.sin(p*I)/L,a=Math.sin(a*I)/L}const v=a*T;if(c=c*p+d*v,l=l*p+f*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new E,Cc=new dn;class pt{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Ys.subVectors(this.max,ds),Ci.subVectors(e.a,ds),Pi.subVectors(e.b,ds),Ii.subVectors(e.c,ds),qn.subVectors(Pi,Ci),Kn.subVectors(Ii,Pi),ui.subVectors(Ci,Ii);let t=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-ui.y,ui.x,0];return!eo(t,Ci,Pi,Ii,Ys)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,Ci,Pi,Ii,Ys))?!1:(Zs.crossVectors(qn,Kn),t=[Zs.x,Zs.y,Zs.z],eo(t,Ci,Pi,Ii,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new E,new E,new E,new E,new E,new E,new E,new E],mn=new E,Ks=new pt,Ci=new E,Pi=new E,Ii=new E,qn=new E,Kn=new E,ui=new E,ds=new E,Ys=new E,Zs=new E,di=new E;function eo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){di.fromArray(r,s);const a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const vd=new pt,fs=new E,to=new E;class En{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(to)),this.expandByPoint(fs.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new E,no=new E,js=new E,Yn=new E,io=new E,$s=new E,so=new E;class Gs{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){no.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=Yn.dot(this.direction),c=-Yn.dot(js),l=Yn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(no).addScaledVector(js,d),f}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,i,s){io.subVectors(t,e),$s.subVectors(n,e),so.crossVectors(io,$s);let o=this.direction.dot(so),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const c=a*this.direction.dot($s.crossVectors(Yn,$s));if(c<0)return null;const l=a*this.direction.dot(io.cross(Yn));if(l<0||c+l>o)return null;const h=-a*Yn.dot(so);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,p){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,p)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,yd)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Zn.crossVectors(n,nn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Zn.crossVectors(n,nn)),Zn.normalize(),Js.crossVectors(nn,Zn),i[0]=Zn.x,i[4]=Js.x,i[8]=nn.x,i[1]=Zn.y,i[5]=Js.y,i[9]=nn.y,i[2]=Zn.z,i[6]=Js.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],T=n[3],M=n[7],v=n[11],L=n[15],I=i[0],A=i[4],P=i[8],b=i[12],S=i[1],U=i[5],W=i[9],G=i[13],Z=i[2],ee=i[6],Y=i[10],ie=i[14],X=i[3],de=i[7],D=i[11],C=i[15];return s[0]=o*I+a*S+c*Z+l*X,s[4]=o*A+a*U+c*ee+l*de,s[8]=o*P+a*W+c*Y+l*D,s[12]=o*b+a*G+c*ie+l*C,s[1]=h*I+u*S+d*Z+f*X,s[5]=h*A+u*U+d*ee+f*de,s[9]=h*P+u*W+d*Y+f*D,s[13]=h*b+u*G+d*ie+f*C,s[2]=g*I+_*S+p*Z+m*X,s[6]=g*A+_*U+p*ee+m*de,s[10]=g*P+_*W+p*Y+m*D,s[14]=g*b+_*G+p*ie+m*C,s[3]=T*I+M*S+v*Z+L*X,s[7]=T*A+M*U+v*ee+L*de,s[11]=T*P+M*W+v*Y+L*D,s[15]=T*b+M*G+v*ie+L*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+p*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],T=u*p*l-_*d*l+_*c*f-a*p*f-u*c*m+a*d*m,M=g*d*l-h*p*l-g*c*f+o*p*f+h*c*m-o*d*m,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*m+o*u*m,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*p-o*u*p,I=t*T+n*M+i*v+s*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/I;return e[0]=T*A,e[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*A,e[2]=(a*p*s-_*c*s+_*i*l-n*p*l-a*i*m+n*c*m)*A,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=M*A,e[5]=(h*p*s-g*d*s+g*i*f-t*p*f-h*i*m+t*d*m)*A,e[6]=(g*c*s-o*p*s-g*i*l+t*p*l+o*i*m-t*c*m)*A,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=v*A,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*m-t*u*m)*A,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*m+t*a*m)*A,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=L*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*p+t*u*p)*A,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*p-t*a*p)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,p=o*u,m=a*u,T=c*l,M=c*h,v=c*u,L=n.x,I=n.y,A=n.z;return i[0]=(1-(_+m))*L,i[1]=(f+v)*L,i[2]=(g-M)*L,i[3]=0,i[4]=(f-v)*I,i[5]=(1-(d+m))*I,i[6]=(p+T)*I,i[7]=0,i[8]=(g+M)*A,i[9]=(p-T)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const l=1/s,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Hn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Hn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ur)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Hn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===Hn)g=(o+s)*u,_=-2*u;else if(a===Ur)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new E,gn=new ze,xd=new E(0,0,0),yd=new E(1,1,1),Zn=new E,Js=new E,nn=new E,Pc=new ze,Ic=new dn;class bn{constructor(e=0,t=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const Lc=new E,Di=new dn,Dn=new ze,Qs=new E,ps=new E,Sd=new E,bd=new dn,Dc=new E(1,0,0),Nc=new E(0,1,0),Uc=new E(0,0,1),Fc={type:"added"},Td={type:"removed"},Ni={type:"childadded",child:null},ro={type:"childremoved",child:null};class mt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new E,t=new bn,n=new dn,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new qe}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ps,Qs,this.up):Dn.lookAt(Qs,ps,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Dn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),ro.child=e,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new E(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new E,Nn=new E,oo=new E,Un=new E,Ui=new E,Fi=new E,Oc=new E,ao=new E,co=new E,lo=new E,ho=new it,uo=new it,fo=new it;class yn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),Nn.subVectors(n,t),oo.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Nn),c=_n.dot(oo),l=Nn.dot(Nn),h=Nn.dot(oo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return ho.setScalar(0),uo.setScalar(0),fo.setScalar(0),ho.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),fo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ho,s.x),o.addScaledVector(uo,s.y),o.addScaledVector(fo,s.z),o}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Nn.subVectors(e,t),_n.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),_n.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ui.subVectors(i,n),Fi.subVectors(s,n),ao.subVectors(e,n);const c=Ui.dot(ao),l=Fi.dot(ao);if(c<=0&&l<=0)return t.copy(n);co.subVectors(e,i);const h=Ui.dot(co),u=Fi.dot(co);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ui,o);lo.subVectors(e,s);const f=Ui.dot(lo),g=Fi.dot(lo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Fi,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Oc.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Oc,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ui,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},er={h:0,s:0,l:0};function po(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Ha(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=po(o,s,e+1/3),this.g=po(o,s,e),this.b=po(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ye(Bt.r*255,0,255))*65536+Math.round(Ye(Bt.g*255,0,255))*256+Math.round(Ye(Bt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ut){Qe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(er);const n=Ts(jn.h,er.h,t),i=Ts(jn.s,er.s,t),s=Ts(jn.l,er.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ge;Ge.NAMES=gh;let wd=0;class wn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=un(),this.name="",this.type="Material",this.blending=Wi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Go,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Go&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new E,tr=new we;let Ed=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class _h extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vh extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ad=0;const an=new ze,mo=new mt,Oi=new E,sn=new pt,ms=new pt,It=new E;class en extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?vh:_h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(sn.min,ms.min),sn.expandByPoint(It),It.addVectors(sn.max,ms.max),sn.expandByPoint(It)):(sn.expandByPoint(ms.min),sn.expandByPoint(ms.max))}sn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)It.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(e,l),It.add(Oi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new E,c[P]=new E;const l=new E,h=new E,u=new E,d=new we,f=new we,g=new we,_=new E,p=new E;function m(P,b,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[P].add(_),a[b].add(_),a[S].add(_),c[P].add(p),c[b].add(p),c[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,b=T.length;P<b;++P){const S=T[P],U=S.start,W=S.count;for(let G=U,Z=U+W;G<Z;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const M=new E,v=new E,L=new E,I=new E;function A(P){L.fromBufferAttribute(i,P),I.copy(L);const b=a[P];M.copy(b),M.sub(L.multiplyScalar(L.dot(b))).normalize(),v.crossVectors(I,b);const U=v.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,U)}for(let P=0,b=T.length;P<b;++P){const S=T[P],U=S.start,W=S.count;for(let G=U,Z=U+W;G<Z;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new ze,fi=new Gs,nr=new En,kc=new E,ir=new E,sr=new E,rr=new E,go=new E,or=new E,zc=new E,ar=new E;class Pe extends mt{constructor(e=new en,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){or.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(go.fromBufferAttribute(u,e),o?or.addScaledVector(go,h):or.addScaledVector(go.sub(t),h))}t.add(or)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(nr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(nr,kc)===null||fi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),fi.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],T=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=T,L=M;v<L;v+=3){const I=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);i=cr(this,m,e,n,l,h,u,I,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const T=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);i=cr(this,o,e,n,l,h,u,T,M,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],T=Math.max(p.start,f.start),M=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=T,L=M;v<L;v+=3){const I=v,A=v+1,P=v+2;i=cr(this,m,e,n,l,h,u,I,A,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const T=p,M=p+1,v=p+2;i=cr(this,o,e,n,l,h,u,T,M,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Rd(r,e,t,n,i,s,o,a){let c;if(e.side===Qt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Wn,a),c===null)return null;ar.copy(a),ar.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:r}}function cr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,ir),r.getVertexPosition(c,sr),r.getVertexPosition(l,rr);const h=Rd(r,e,t,n,ir,sr,rr,zc);if(h){const u=new E;yn.getBarycoord(zc,ir,sr,rr,u),i&&(h.uv=yn.getInterpolatedAttribute(i,a,c,l,u,new we)),s&&(h.uv1=yn.getInterpolatedAttribute(s,a,c,l,u,new we)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new E,materialIndex:0};yn.getNormal(ir,sr,rr,d.normal),h.face=d,h.barycoord=u}return h}class Le extends en{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(_,p,m,T,M,v,L,I,A,P,b){const S=v/A,U=L/P,W=v/2,G=L/2,Z=I/2,ee=A+1,Y=P+1;let ie=0,X=0;const de=new E;for(let D=0;D<Y;D++){const C=D*U-G;for(let oe=0;oe<ee;oe++){const me=oe*S-W;de[_]=me*T,de[p]=C*M,de[m]=Z,l.push(de.x,de.y,de.z),de[_]=0,de[p]=0,de[m]=I>0?1:-1,h.push(de.x,de.y,de.z),u.push(oe/A),u.push(1-D/P),ie+=1}}for(let D=0;D<P;D++)for(let C=0;C<A;C++){const oe=d+C+ee*D,me=d+C+ee*(D+1),k=d+(C+1)+ee*(D+1),K=d+(C+1)+ee*D;c.push(oe,me,K),c.push(me,k,K),X+=6}a.addGroup(f,X,b),f+=X,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=ts(r[t]);for(const i in n)e[i]=n[i]}return e}function Cd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Pd={clone:ts,merge:Vt};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yh extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new E,Gc=new we,Hc=new we;class Dt extends yh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Gc,Hc),t.subVectors(Hc,Gc)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,ki=1;class Dd extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(Bi,ki,e,t);i.layers=this.layers,this.add(i);const s=new Dt(Bi,ki,e,t);s.layers=this.layers,this.add(s);const o=new Dt(Bi,ki,e,t);o.layers=this.layers,this.add(o);const a=new Dt(Bi,ki,e,t);a.layers=this.layers,this.add(a);const c=new Dt(Bi,ki,e,t);c.layers=this.layers,this.add(c);const l=new Dt(Bi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mh extends Rt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nd extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Le(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:oi});s.uniforms.tEquirect.value=t;const o=new Pe(i,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=$t),new Dd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Je extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Xa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gr extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new E;class qa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vc=new E,Wc=new it,Xc=new it,Od=new E,qc=new ze,lr=new E,vo=new En,Kc=new ze,xo=new Gs;class Bd extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xc,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lr),this.boundingBox.expandByPoint(lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lr),this.boundingSphere.expandByPoint(lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(i),e.ray.intersectsSphere(vo)!==!1&&(Kc.copy(i).invert(),xo.copy(e.ray).applyMatrix4(Kc),!(this.boundingBox!==null&&xo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Du?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wc.fromBufferAttribute(i.attributes.skinIndex,e),Xc.fromBufferAttribute(i.attributes.skinWeight,e),Vc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Xc.getComponent(s);if(o!==0){const a=Wc.getComponent(s);qc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Od.copy(Vc).applyMatrix4(qc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sh extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bh extends Rt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Xt,h=Xt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=new ze,kd=new ze;class Ka{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:kd;Yc.multiplyMatrices(a,t[s]),Yc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ka(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bh(t,e,e,hn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sh),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wa extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zi=new ze,Zc=new ze,hr=[],jc=new pt,zd=new ze,gs=new Pe,_s=new En;class Gd extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),jc.copy(e.boundingBox).applyMatrix4(zi),this.boundingBox.union(jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zi),_s.copy(e.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zi),Zc.multiplyMatrices(n,zi),gs.matrixWorld=Zc,gs.raycast(e,hr);for(let o=0,a=hr.length;o<a;o++){const c=hr[o];c.instanceId=s,c.object=this,t.push(c)}hr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bh(new Float32Array(i*this.count),i,this.count,Ba,Mn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yo=new E,Hd=new E,Vd=new qe;class Qn{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yo.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vd.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new En,ur=new E;class Ya{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,s=new Qn,o=new Qn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],T=i[13],M=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,p-f,v-m).normalize(),n[1].setComponents(c+s,d+l,p+f,v+m).normalize(),n[2].setComponents(c+o,d+h,p+g,v+T).normalize(),n[3].setComponents(c-o,d-h,p-g,v-T).normalize(),n[4].setComponents(c-a,d-u,p-_,v-M).normalize(),t===Hn)n[5].setComponents(c+a,d+u,p+_,v+M).normalize();else if(t===Ur)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ur.x=i.normal.x>0?e.max.x:e.min.x,ur.y=i.normal.y>0?e.max.y:e.min.y,ur.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Th extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fr=new E,Or=new E,$c=new ze,vs=new Gs,dr=new En,Mo=new E,Jc=new E;class Za extends mt{constructor(e=new en,t=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fr.fromBufferAttribute(t,i-1),Or.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fr.distanceTo(Or);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=s,e.ray.intersectsSphere(dr)===!1)return;$c.copy(i).invert(),vs.copy(e.ray).applyMatrix4($c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=h.getX(_),T=h.getX(_+1),M=fr(this,e,vs,c,m,T,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=fr(this,e,vs,c,_,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=fr(this,e,vs,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=fr(this,e,vs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Fr.fromBufferAttribute(a,i),Or.fromBufferAttribute(a,s),t.distanceSqToSegment(Fr,Or,Mo,Jc)>n)return;Mo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Mo);if(!(l<e.near||l>e.far))return{distance:l,point:Jc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Qc=new E,el=new E;class Wd extends Za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qc.fromBufferAttribute(t,i),el.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(el);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends Za{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wh extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tl=new ze,Ea=new Gs,pr=new En,mr=new E;class qd extends mt{constructor(e=new en,t=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;tl.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(tl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);mr.fromBufferAttribute(u,p),nl(mr,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)mr.fromBufferAttribute(u,g),nl(mr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nl(r,e,t,n,i,s,o){const a=Ea.distanceSqToPoint(r);if(a<t){const c=new E;Ea.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xi extends Rt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eh extends Rt{constructor(e,t,n,i,s,o,a,c,l,h=Xi){if(h!==Xi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=bi),n===void 0&&h===Qi&&(n=Ji),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new we:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new E,i=[],s=[],o=[],a=new E,c=new ze;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new E)}s[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ye(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ja extends An{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new we){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kd extends ja{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const gr=new E,So=new $a,bo=new $a,To=new $a;class Yd extends An{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(gr.subVectors(i[0],i[1]).add(i[0]),l=gr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(gr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),So.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,p),bo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,p),To.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(So.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),bo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),To.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(So.calc(c),bo.calc(c),To.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function il(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function Zd(r,e){const t=1-r;return t*t*e}function jd(r,e){return 2*(1-r)*r*e}function $d(r,e){return r*r*e}function ws(r,e,t,n){return Zd(r,e)+jd(r,t)+$d(r,n)}function Jd(r,e){const t=1-r;return t*t*t*e}function Qd(r,e){const t=1-r;return 3*t*t*r*e}function ef(r,e){return 3*(1-r)*r*r*e}function tf(r,e){return r*r*r*e}function Es(r,e,t,n,i){return Jd(r,e)+Qd(r,t)+ef(r,n)+tf(r,i)}class Ah extends An{constructor(e=new we,t=new we,n=new we,i=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new we){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(e,i.x,s.x,o.x,a.x),Es(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nf extends An{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(e,i.x,s.x,o.x,a.x),Es(e,i.y,s.y,o.y,a.y),Es(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rh extends An{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sf extends An{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends An{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ws(e,i.x,s.x,o.x),ws(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rf extends An{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ws(e,i.x,s.x,o.x),ws(e,i.y,s.y,o.y),ws(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(il(a,c.x,l.x,h.x,u.x),il(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new we().fromArray(i))}return this}}var sl=Object.freeze({__proto__:null,ArcCurve:Kd,CatmullRomCurve3:Yd,CubicBezierCurve:Ah,CubicBezierCurve3:nf,EllipseCurve:ja,LineCurve:Rh,LineCurve3:sf,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:rf,SplineCurve:Ph});class of extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new sl[i.type]().fromJSON(i))}return this}}class Aa extends of{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rh(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ch(this.currentPoint.clone(),new we(e,t),new we(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Ah(this.currentPoint.clone(),new we(e,t),new we(n,i),new we(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ph(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new ja(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class As extends en{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new E,h=new we;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(a,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class kt extends en{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;T(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function T(){const v=new E,L=new E;let I=0;const A=(t-e)/n;for(let P=0;P<=s;P++){const b=[],S=P/s,U=S*(t-e)+e;for(let W=0;W<=i;W++){const G=W/i,Z=G*c+a,ee=Math.sin(Z),Y=Math.cos(Z);L.x=U*ee,L.y=-S*n+p,L.z=U*Y,u.push(L.x,L.y,L.z),v.set(ee,A,Y).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-S),b.push(g++)}_.push(b)}for(let P=0;P<i;P++)for(let b=0;b<s;b++){const S=_[b][P],U=_[b+1][P],W=_[b+1][P+1],G=_[b][P+1];(e>0||b!==0)&&(h.push(S,U,G),I+=3),(t>0||b!==s-1)&&(h.push(U,W,G),I+=3)}l.addGroup(m,I,0),m+=I}function M(v){const L=g,I=new we,A=new E;let P=0;const b=v===!0?e:t,S=v===!0?1:-1;for(let W=1;W<=i;W++)u.push(0,p*S,0),d.push(0,S,0),f.push(.5,.5),g++;const U=g;for(let W=0;W<=i;W++){const Z=W/i*c+a,ee=Math.cos(Z),Y=Math.sin(Z);A.x=b*Y,A.y=p*S,A.z=b*ee,u.push(A.x,A.y,A.z),d.push(0,S,0),I.x=ee*.5+.5,I.y=Y*.5*S+.5,f.push(I.x,I.y),g++}for(let W=0;W<i;W++){const G=L+W,Z=U+W;v===!0?h.push(Z,Z+1,G):h.push(Z+1,Z,G),P+=3}l.addGroup(m,P,v===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ih extends Aa{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Aa().fromJSON(i))}return this}}class af{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let o=Lh(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,u,d,f,g;if(i&&(o=df(e,t,o,n)),e.length>80*n){c=h=e[0],l=u=e[1];for(let _=n;_<s;_+=n)d=e[_],f=e[_+1],d<c&&(c=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f);g=Math.max(h-c,u-l),g=g!==0?32767/g:0}return Ns(o,a,n,c,l,g,0),a}}function Lh(r,e,t,n,i){let s,o;if(i===bf(r,e,t,n)>0)for(s=e;s<t;s+=n)o=rl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=rl(s,r[s],r[s+1],o);return o&&Hr(o,o.next)&&(Fs(o),o=o.next),o}function wi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Hr(t,t.next)||_t(t.prev,t,t.next)===0)){if(Fs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ns(r,e,t,n,i,s,o){if(!r)return;!o&&s&&_f(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?lf(r,n,i,s):cf(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Fs(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=hf(wi(r),e,t),Ns(r,e,t,n,i,s,2)):o===2&&uf(r,e,t,n,i,s):Ns(wi(r),e,t,n,i,s,1);break}}}function cf(r){const e=r.prev,t=r,n=r.next;if(_t(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Hi(i,a,s,c,o,l,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lf(r,e,t,n){const i=r.prev,s=r,o=r.next;if(_t(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,m=Ra(f,g,e,t,n),T=Ra(_,p,e,t,n);let M=r.prevZ,v=r.nextZ;for(;M&&M.z>=m&&v&&v.z<=T;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Hi(a,h,c,u,l,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Hi(a,h,c,u,l,d,v.x,v.y)&&_t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Hi(a,h,c,u,l,d,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=T;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Hi(a,h,c,u,l,d,v.x,v.y)&&_t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hf(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Hr(i,s)&&Dh(i,n,n.next,s)&&Us(i,s)&&Us(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Fs(n),Fs(n.next),n=r=s),n=n.next}while(n!==r);return wi(n)}function uf(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yf(o,a)){let c=Nh(o,a);o=wi(o,o.next),c=wi(c,c.next),Ns(o,e,t,n,i,s,0),Ns(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function df(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=Lh(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(xf(l));for(i.sort(ff),s=0;s<i.length;s++)t=pf(i[s],t);return t}function ff(r,e){return r.x-e.x}function pf(r,e){const t=mf(r,e);if(!t)return e;const n=Nh(t,r);return wi(n,n.next),wi(t,t.next)}function mf(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&Hi(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Us(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&gf(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function gf(r,e){return _t(r.prev,r,e.prev)<0&&_t(e.next,r,r.next)<0}function _f(r,e,t,n){let i=r;do i.z===0&&(i.z=Ra(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,vf(i)}function vf(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function Ra(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function xf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hi(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function yf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Mf(r,e)&&(Us(r,e)&&Us(e,r)&&Sf(r,e)&&(_t(r.prev,r,e.prev)||_t(r,e.prev,e))||Hr(r,e)&&_t(r.prev,r,r.next)>0&&_t(e.prev,e,e.next)>0)}function _t(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Hr(r,e){return r.x===e.x&&r.y===e.y}function Dh(r,e,t,n){const i=vr(_t(r,e,t)),s=vr(_t(r,e,n)),o=vr(_t(t,n,r)),a=vr(_t(t,n,e));return!!(i!==s&&o!==a||i===0&&_r(r,t,e)||s===0&&_r(r,n,e)||o===0&&_r(t,r,n)||a===0&&_r(t,e,n))}function _r(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function vr(r){return r>0?1:r<0?-1:0}function Mf(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Dh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Us(r,e){return _t(r.prev,r,r.next)<0?_t(r,e,r.next)>=0&&_t(r,r.prev,e)>=0:_t(r,e,r.prev)<0||_t(r,r.next,e)<0}function Sf(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Nh(r,e){const t=new Ca(r.i,r.x,r.y),n=new Ca(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function rl(r,e,t,n){const i=new Ca(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ca(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bf(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Rs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Rs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ol(e),al(n,e);let o=e.length;t.forEach(ol);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,al(n,t[c]);const a=af.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function ol(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function al(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Lt extends en{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const T=m*d-o;for(let M=0;M<l;M++){const v=M*u-s;g.push(v,-T,0),_.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let T=0;T<a;T++){const M=T+l*m,v=T+l*(m+1),L=T+1+l*(m+1),I=T+1+l*m;f.push(M,v,I),f.push(v,L,I)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ja extends en{constructor(e=new Ih([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Mt(i,3)),this.setAttribute("normal",new Mt(s,3)),this.setAttribute("uv",new Mt(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Rs.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const T=g[p];Rs.isClockWise(T)===!0&&(g[p]=T.reverse())}const _=Rs.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const T=g[p];f=f.concat(T)}for(let p=0,m=f.length;p<m;p++){const T=f[p];i.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let p=0,m=_.length;p<m;p++){const T=_[p],M=T[0]+u,v=T[1]+u,L=T[2]+u;n.push(M,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Tf(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Ja(n,e.curveSegments)}}function Tf(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class si extends en{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,T=(i+1)*f+g;o.push(_,p,T),o.push(p,m,T)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ht extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rn extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wf extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function xr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Af(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Rf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function cl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Uh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Hs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cf extends Hs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mc:s=e,a=2*t-n;break;case Sc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mc:o=e,c=2*n-t;break;case Sc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,T=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*_+.5*g,v=f*p-f*_;for(let L=0;L!==a;++L)s[L]=m*o[h+L]+T*o[l+L]+M*o[c+L]+v*o[u+L];return s}}class Pf extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class If extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xr(t,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xr(e.times,Array),values:xr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new If(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Af(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ls;class as extends Cn{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Is;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class Fh extends Cn{}Fh.prototype.ValueTypeName="color";class ns extends Cn{}ns.prototype.ValueTypeName="number";class Lf extends Hs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)dn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class is extends Cn{InterpolantFactoryMethodLinear(e){return new Lf(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends Cn{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Is;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends Cn{}ss.prototype.ValueTypeName="vector";class Df{constructor(e="",t=-1,n=[],i=Nu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Uf(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Cn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Rf(c);c=cl(c,1,h),l=cl(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ns(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];Uh(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let T=0;T!==d[g].morphTargets.length;++T){const M=d[g];p.push(M.time),m.push(M.morphTarget===_?1:0)}i.push(new ns(".morphTargetInfluence["+_+"]",p,m))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(ss,f+".position",d,"pos",i),n(is,f+".quaternion",d,"rot",i),n(ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Nf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Fh;case"quaternion":return is;case"bool":case"boolean":return as;case"string":return cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Uf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nf(r.type);if(r.times===void 0){const t=[],n=[];Uh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ri={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ff{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Of=new Ff;class ls{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Bf extends Error{constructor(e,t){super(e),this.response=t}}class Oh extends ls{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ri.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Fn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){T();function T(){u.read().then(({done:M,value:v})=>{if(M)m.close();else{_+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let I=0,A=h.length;I<A;I++){const P=h[I];P.onProgress&&P.onProgress(L)}m.enqueue(v),T()}},M=>{m.error(M)})}}});return new Response(p)}else throw new Bf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ri.add(e,l);const h=Fn[e];delete Fn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Fn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kf extends ls{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ri.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ds("img");function c(){h(),ri.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zf extends ls{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,o=new kf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vs extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gf extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wo=new ze,ll=new E,hl=new E;class Qa{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hf extends Qa{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vf extends Vs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ul=new ze,xs=new E,Eo=new E;class Wf extends Qa{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(xs),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),i.makeTranslation(-xs.x,-xs.y,-xs.z),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul)}}class ec extends Vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tc extends yh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xf extends Qa{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sn extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vr extends Vs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class qf extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ri.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ri.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ri.add(e,c),s.manager.itemStart(e)}}class Kf extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Yf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dl(){return performance.now()}const nc="\\[\\]\\.:\\/",Zf=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",jf="[^"+nc.replace("\\.","")+"]",$f=/((?:WC+[\/:])*)/.source.replace("WC",ic),Jf=/(WCOD+)?/.source.replace("WCOD",jf),Qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),tp=new RegExp("^"+$f+Jf+Qf+ep+"$"),np=["material","materials","bones","map"];class ip{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zf,"")}static parseTrackName(e){const t=tp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);np.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=ip;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const fl=new ze;class Bh{constructor(e,t,n=0,i=1/0){this.ray=new Gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fl),this}intersectObject(e,t=!0,n=[]){return Pa(e,this,n,t),n.sort(pl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Pa(e[i],this,n,t);return n.sort(pl),n}}function pl(r,e){return r.distance-e.distance}function Pa(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Pa(s[o],e,t,!0)}}function ml(r,e,t,n){const i=sp(n);switch(t){case rh:return r*e;case ah:return r*e;case ch:return r*e*2;case Ba:return r*e/i.components*i.byteLength;case ka:return r*e/i.components*i.byteLength;case lh:return r*e*2/i.components*i.byteLength;case za:return r*e*2/i.components*i.byteLength;case oh:return r*e*3/i.components*i.byteLength;case hn:return r*e*4/i.components*i.byteLength;case Ga:return r*e*4/i.components*i.byteLength;case wr:case Er:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jo:case ea:return Math.max(r,16)*Math.max(e,8)/4;case $o:case Qo:return Math.max(r,8)*Math.max(e,8)/2;case ta:case na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ca:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ha:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ua:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case fa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ma:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ga:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _a:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cr:case va:case xa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hh:case ya:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ma:case Sa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sp(r){switch(r){case Xn:case nh:return{byteLength:1,components:1};case Ps:case ih:case zs:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case bi:case Ua:case Mn:return{byteLength:4,components:1};case sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rp(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,bg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ig=`#define TOON
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
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dg=`uniform float size;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Og=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:cp,alphamap_pars_fragment:lp,alphatest_fragment:hp,alphatest_pars_fragment:up,aomap_fragment:dp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Tp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Ap,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:kp,envmap_pars_fragment:zp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Jp,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:jp,lights_pars_begin:$p,lights_toon_fragment:Qp,lights_toon_pars_fragment:em,lights_phong_fragment:tm,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:bm,normal_fragment_maps:Tm,normal_pars_fragment:wm,normal_pars_vertex:Em,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Nm,premultiplied_alpha_fragment:Um,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:km,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Km,skinnormal_vertex:Ym,specularmap_fragment:Zm,specularmap_pars_fragment:jm,tonemapping_fragment:$m,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:cg,cube_vert:lg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:yg,meshlambert_vert:Mg,meshlambert_frag:Sg,meshmatcap_vert:bg,meshmatcap_frag:Tg,meshnormal_vert:wg,meshnormal_frag:Eg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Ig,meshtoon_frag:Lg,points_vert:Dg,points_frag:Ng,shadow_vert:Ug,shadow_frag:Fg,sprite_vert:Og,sprite_frag:Bg},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Tn={basic:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vt([_e.common,_e.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vt([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Tn.physical={uniforms:Vt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const yr={r:0,b:0,g:0},mi=new bn,kg=new ze;function zg(r,e,t,n,i,s,o){const a=new Ge(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const L=g(M);L===null?m(a,c):L&&L.isColor&&(m(L,1),v=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,v){const L=g(v);L&&(L.isCubeTexture||L.mapping===zr)?(h===void 0&&(h=new Pe(new Le(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ts(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(mi)),h.material.toneMapped=Qe.getTransfer(L.colorSpace)!==ut,(u!==L||d!==L.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Pe(new Lt(2,2),new ci({name:"BackgroundMaterial",uniforms:ts(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(L.colorSpace)!==ut,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,f=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB(yr,xh(r)),n.buffers.color.setClear(yr.r,yr.g,yr.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:_,addToRenderList:p,dispose:T}}function Gg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,U,W,G,Z){let ee=!1;const Y=u(G,W,U);s!==Y&&(s=Y,l(s.object)),ee=f(S,G,W,Z),ee&&g(S,G,W,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(S,U,W,G),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,U,W){const G=W.wireframe===!0;let Z=n[S.id];Z===void 0&&(Z={},n[S.id]=Z);let ee=Z[U.id];ee===void 0&&(ee={},Z[U.id]=ee);let Y=ee[G];return Y===void 0&&(Y=d(c()),ee[G]=Y),Y}function d(S){const U=[],W=[],G=[];for(let Z=0;Z<t;Z++)U[Z]=0,W[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,U,W,G){const Z=s.attributes,ee=U.attributes;let Y=0;const ie=W.getAttributes();for(const X in ie)if(ie[X].location>=0){const D=Z[X];let C=ee[X];if(C===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(C=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(C=S.instanceColor)),D===void 0||D.attribute!==C||C&&D.data!==C.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function g(S,U,W,G){const Z={},ee=U.attributes;let Y=0;const ie=W.getAttributes();for(const X in ie)if(ie[X].location>=0){let D=ee[X];D===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(D=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(D=S.instanceColor));const C={};C.attribute=D,D&&D.data&&(C.data=D.data),Z[X]=C,Y++}s.attributes=Z,s.attributesNum=Y,s.index=G}function _(){const S=s.newAttributes;for(let U=0,W=S.length;U<W;U++)S[U]=0}function p(S){m(S,0)}function m(S,U){const W=s.newAttributes,G=s.enabledAttributes,Z=s.attributeDivisors;W[S]=1,G[S]===0&&(r.enableVertexAttribArray(S),G[S]=1),Z[S]!==U&&(r.vertexAttribDivisor(S,U),Z[S]=U)}function T(){const S=s.newAttributes,U=s.enabledAttributes;for(let W=0,G=U.length;W<G;W++)U[W]!==S[W]&&(r.disableVertexAttribArray(W),U[W]=0)}function M(S,U,W,G,Z,ee,Y){Y===!0?r.vertexAttribIPointer(S,U,W,Z,ee):r.vertexAttribPointer(S,U,W,G,Z,ee)}function v(S,U,W,G){_();const Z=G.attributes,ee=W.getAttributes(),Y=U.defaultAttributeValues;for(const ie in ee){const X=ee[ie];if(X.location>=0){let de=Z[ie];if(de===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const D=de.normalized,C=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const me=oe.buffer,k=oe.type,K=oe.bytesPerElement,se=k===r.INT||k===r.UNSIGNED_INT||de.gpuType===Ua;if(de.isInterleavedBufferAttribute){const q=de.data,ae=q.stride,xe=de.offset;if(q.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge,q.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ge=0;ge<X.locationSize;ge++)M(X.location+ge,C/X.locationSize,k,D,ae*K,(xe+C/X.locationSize*ge)*K,se)}else{if(de.isInstancedBufferAttribute){for(let q=0;q<X.locationSize;q++)m(X.location+q,de.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let q=0;q<X.locationSize;q++)p(X.location+q);r.bindBuffer(r.ARRAY_BUFFER,me);for(let q=0;q<X.locationSize;q++)M(X.location+q,C/X.locationSize,k,D,C*K,C/X.locationSize*q*K,se)}}else if(Y!==void 0){const D=Y[ie];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(X.location,D);break;case 3:r.vertexAttrib3fv(X.location,D);break;case 4:r.vertexAttrib4fv(X.location,D);break;default:r.vertexAttrib1fv(X.location,D)}}}}T()}function L(){P();for(const S in n){const U=n[S];for(const W in U){const G=U[W];for(const Z in G)h(G[Z].object),delete G[Z];delete U[W]}delete n[S]}}function I(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const W in U){const G=U[W];for(const Z in G)h(G[Z].object),delete G[Z];delete U[W]}delete n[S.id]}function A(S){for(const U in n){const W=n[U];if(W[S.id]===void 0)continue;const G=W[S.id];for(const Z in G)h(G[Z].object),delete G[Z];delete W[S.id]}}function P(){b(),o=!0,s!==i&&(s=i,l(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Hg(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==hn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!P)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:L,maxSamples:I}}function Wg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Qn,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const T=s?0:n,M=T*4;let v=m.clippingState||null;c.value=v,v=h(g,d,M,f);for(let L=0;L!==M;++L)v[L]=t[L];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(T,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Xg(r){let e=new WeakMap;function t(o,a){return a===Zo?o.mapping=ji:a===jo&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zo||a===jo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nd(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Vi=4,gl=[.125,.215,.35,.446,.526,.582],Si=20,Ao=new tc,_l=new Ge;let Ro=null,Co=0,Po=0,Io=!1;const yi=(1+Math.sqrt(5))/2,Gi=1/yi,vl=[new E(-yi,Gi,0),new E(yi,Gi,0),new E(-Gi,0,yi),new E(Gi,0,yi),new E(0,yi,-Gi),new E(0,yi,Gi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],qg=new E;class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=qg}=s;Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,Co,Po),this._renderer.xr.enabled=Io,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:zs,format:hn,colorSpace:Kt,depthBuffer:!1},i=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(s)),this._blurMaterial=Yg(s,e,t)}return i}_compileMaterial(e){const t=new Pe(this._lodPlanes[0],e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,n,i,s){const c=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(_l),u.toneMapping=ai,u.autoClear=!1;const g=new Wt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Pe(new Le,g);let p=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,p=!0):(g.color.copy(_l),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):M===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const v=this._cubeSize;Mr(i,M*v,T>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(_,c),u.render(e,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ji||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Mr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vl[(i-s-1)%vl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pe(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Si-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Si;p>Si&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const m=[];let T=0;for(let A=0;A<Si;++A){const P=A/_,b=Math.exp(-P*P/2);m.push(b),A===0?T+=b:A<p&&(T+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],L=3*v*(i>M-Vi?i-M+Vi:0),I=4*(this._cubeSize-v);Mr(t,L,I,3*v,2*v),c.setRenderTarget(t),c.render(u,Ao)}}function Kg(r){const e=[],t=[],n=[];let i=r;const s=r-Vi+1+gl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Vi?c=gl[o-r+Vi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,T=new Float32Array(_*g*f),M=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let I=0;I<f;I++){const A=I%3*2/3-1,P=I>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(b,_*g*I),M.set(d,p*g*I);const S=[I,I,I,I,I,I];v.set(S,m*g*I)}const L=new en;L.setAttribute("position",new qt(T,_)),L.setAttribute("uv",new qt(M,p)),L.setAttribute("faceIndex",new qt(v,m)),e.push(L),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yl(r,e,t){const n=new Ti(r,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Yg(r,e,t){const n=new Float32Array(Si),i=new E(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ml(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Sl(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zo||c===jo,h=c===ji||c===$i;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new xl(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new xl(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $g(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let M=0,v=T.length;M<v;M+=3){const L=T[M+0],I=T[M+1],A=T[M+2];d.push(L,I,I,A,A,L)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,v=T.length/3-1;M<v;M+=3){const L=M+0,I=M+1,A=M+2;d.push(L,I,I,A,A,L)}}else return;const p=new(ph(d)?vh:_h)(d,1);p.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jg(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let T=0;T<g;T++)m+=f[T]*_[T];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function e0(r,e,t){const n=new WeakMap,i=new it;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let L=a.attributes.position.count*v,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*I*4*u),P=new mh(A,L,I,u);P.type=Mn,P.needsUpdate=!0;const b=v*4;for(let U=0;U<u;U++){const W=m[U],G=T[U],Z=M[U],ee=L*I*4*U;for(let Y=0;Y<W.count;Y++){const ie=Y*b;g===!0&&(i.fromBufferAttribute(W,Y),A[ee+ie+0]=i.x,A[ee+ie+1]=i.y,A[ee+ie+2]=i.z,A[ee+ie+3]=0),_===!0&&(i.fromBufferAttribute(G,Y),A[ee+ie+4]=i.x,A[ee+ie+5]=i.y,A[ee+ie+6]=i.z,A[ee+ie+7]=0),p===!0&&(i.fromBufferAttribute(Z,Y),A[ee+ie+8]=i.x,A[ee+ie+9]=i.y,A[ee+ie+10]=i.z,A[ee+ie+11]=Z.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new we(L,I)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function t0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const zh=new Rt,bl=new Eh(1,1),Gh=new mh,Hh=new _d,Vh=new Mh,Tl=[],wl=[],El=new Float32Array(16),Al=new Float32Array(9),Rl=new Float32Array(4);function hs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wr(r,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function n0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function i0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function s0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function r0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function o0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Rl.set(n),r.uniformMatrix2fv(this.addr,!1,Rl),Pt(t,n)}}function a0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Al.set(n),r.uniformMatrix3fv(this.addr,!1,Al),Pt(t,n)}}function c0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;El.set(n),r.uniformMatrix4fv(this.addr,!1,El),Pt(t,n)}}function l0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function h0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function f0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function p0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function g0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function _0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bl.compareFunction=fh,s=bl):s=zh,t.setTexture2D(e||s,i)}function v0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hh,i)}function x0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vh,i)}function y0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gh,i)}function M0(r){switch(r){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}function S0(r,e){r.uniform1fv(this.addr,e)}function b0(r,e){const t=hs(e,this.size,2);r.uniform2fv(this.addr,t)}function T0(r,e){const t=hs(e,this.size,3);r.uniform3fv(this.addr,t)}function w0(r,e){const t=hs(e,this.size,4);r.uniform4fv(this.addr,t)}function E0(r,e){const t=hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function A0(r,e){const t=hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function R0(r,e){const t=hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function C0(r,e){r.uniform1iv(this.addr,e)}function P0(r,e){r.uniform2iv(this.addr,e)}function I0(r,e){r.uniform3iv(this.addr,e)}function L0(r,e){r.uniform4iv(this.addr,e)}function D0(r,e){r.uniform1uiv(this.addr,e)}function N0(r,e){r.uniform2uiv(this.addr,e)}function U0(r,e){r.uniform3uiv(this.addr,e)}function F0(r,e){r.uniform4uiv(this.addr,e)}function O0(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||zh,s[o])}function B0(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hh,s[o])}function k0(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vh,s[o])}function z0(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gh,s[o])}function G0(r){switch(r){case 5126:return S0;case 35664:return b0;case 35665:return T0;case 35666:return w0;case 35674:return E0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return I0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return N0;case 36295:return U0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return z0}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Cl(r,e){r.seq.push(e),r.map[e.id]=e}function X0(r,e,t){const n=r.name,i=n.length;for(Lo.lastIndex=0;;){const s=Lo.exec(n),o=Lo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Cl(t,l===void 0?new H0(a,r,e):new V0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new W0(a),Cl(t,u)),t=u}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);X0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Pl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const q0=37297;let K0=0;function Y0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Il=new qe;function Z0(r){Qe._getMatrix(Il,Qe.workingColorSpace,r);const e=`mat3( ${Il.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(r)){case Nr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ll(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Y0(r.getShaderSource(e),o)}else return i}function j0(r,e){const t=Z0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $0(r,e){let t;switch(e){case Au:t="Linear";break;case Ru:t="Reinhard";break;case Cu:t="Cineon";break;case ks:t="ACESFilmic";break;case Iu:t="AgX";break;case Lu:t="Neutral";break;case Pu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new E;function J0(){Qe.getLuminanceCoefficients(Sr);const r=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function e_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ss(r){return r!==""}function Dl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(r){return r.replace(n_,s_)}const i_=new Map;function s_(r,e){let t=Ke[e];if(t===void 0){const n=i_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(r){return r.replace(r_,o_)}function o_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function c_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ji:case $i:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function h_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case wu:e="ENVMAP_BLENDING_MIX";break;case Eu:e="ENVMAP_BLENDING_ADD";break}return e}function u_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function d_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=a_(t),l=c_(t),h=l_(t),u=h_(t),d=u_(t),f=Q0(t),g=e_(s),_=i.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ai?$0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,j0("linearToOutputTexel",t.outputColorSpace),J0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Ia(o),o=Dl(o,t),o=Nl(o,t),a=Ia(a),a=Dl(a,t),a=Nl(a,t),o=Ul(o),a=Ul(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=T+p+o,v=T+m+a,L=Pl(i,i.VERTEX_SHADER,M),I=Pl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,L),i.attachShader(_,I),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(U){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(L).trim(),Z=i.getShaderInfoLog(I).trim();let ee=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,I);else{const ie=Ll(i,L,"vertex"),X=Ll(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+ie+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Z==="")&&(Y=!1);Y&&(U.diagnostics={runnable:ee,programLog:W,vertexShader:{log:G,prefix:p},fragmentShader:{log:Z,prefix:m}})}i.deleteShader(L),i.deleteShader(I),P=new Pr(i,_),b=t_(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,q0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=I,this}let f_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new m_(e),t.set(e,n)),n}}class m_{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}}function g_(r,e,t,n,i,s,o){const a=new Wa,c=new p_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,S,U,W,G){const Z=W.fog,ee=G.geometry,Y=b.isMeshStandardMaterial?W.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),X=ie&&ie.mapping===zr?ie.image.height:null,de=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const D=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,C=D!==void 0?D.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let me,k,K,se;if(de){const at=Tn[de];me=at.vertexShader,k=at.fragmentShader}else me=b.vertexShader,k=b.fragmentShader,c.update(b),K=c.getVertexShaderID(b),se=c.getFragmentShaderID(b);const q=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),xe=G.isInstancedMesh===!0,ge=G.isBatchedMesh===!0,De=!!b.map,Fe=!!b.matcap,Re=!!ie,R=!!b.aoMap,st=!!b.lightMap,Oe=!!b.bumpMap,Be=!!b.normalMap,Me=!!b.displacementMap,Ze=!!b.emissiveMap,ne=!!b.metalnessMap,w=!!b.roughnessMap,x=b.anisotropy>0,B=b.clearcoat>0,te=b.dispersion>0,Q=b.iridescence>0,j=b.sheen>0,Ce=b.transmission>0,fe=x&&!!b.anisotropyMap,Se=B&&!!b.clearcoatMap,je=B&&!!b.clearcoatNormalMap,re=B&&!!b.clearcoatRoughnessMap,ve=Q&&!!b.iridescenceMap,Ne=Q&&!!b.iridescenceThicknessMap,ke=j&&!!b.sheenColorMap,J=j&&!!b.sheenRoughnessMap,pe=!!b.specularMap,be=!!b.specularColorMap,Ee=!!b.specularIntensityMap,N=Ce&&!!b.transmissionMap,le=Ce&&!!b.thicknessMap,V=!!b.gradientMap,$=!!b.alphaMap,ue=b.alphaTest>0,he=!!b.alphaHash,He=!!b.extensions;let vt=ai;b.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(vt=r.toneMapping);const Ft={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:me,fragmentShader:k,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ge,batchingColor:ge&&G._colorsTexture!==null,instancing:xe,instancingColor:xe&&G.instanceColor!==null,instancingMorph:xe&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Kt,alphaToCoverage:!!b.alphaToCoverage,map:De,matcap:Fe,envMap:Re,envMapMode:Re&&ie.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:st,bumpMap:Oe,normalMap:Be,displacementMap:d&&Me,emissiveMap:Ze,normalMapObjectSpace:Be&&b.normalMapType===Bu,normalMapTangentSpace:Be&&b.normalMapType===dh,metalnessMap:ne,roughnessMap:w,anisotropy:x,anisotropyMap:fe,clearcoat:B,clearcoatMap:Se,clearcoatNormalMap:je,clearcoatRoughnessMap:re,dispersion:te,iridescence:Q,iridescenceMap:ve,iridescenceThicknessMap:Ne,sheen:j,sheenColorMap:ke,sheenRoughnessMap:J,specularMap:pe,specularColorMap:be,specularIntensityMap:Ee,transmission:Ce,transmissionMap:N,thicknessMap:le,gradientMap:V,opaque:b.transparent===!1&&b.blending===Wi&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:ue,alphaHash:he,combine:b.combine,mapUv:De&&_(b.map.channel),aoMapUv:R&&_(b.aoMap.channel),lightMapUv:st&&_(b.lightMap.channel),bumpMapUv:Oe&&_(b.bumpMap.channel),normalMapUv:Be&&_(b.normalMap.channel),displacementMapUv:Me&&_(b.displacementMap.channel),emissiveMapUv:Ze&&_(b.emissiveMap.channel),metalnessMapUv:ne&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:fe&&_(b.anisotropyMap.channel),clearcoatMapUv:Se&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:J&&_(b.sheenRoughnessMap.channel),specularMapUv:pe&&_(b.specularMap.channel),specularColorMapUv:be&&_(b.specularColorMap.channel),specularIntensityMapUv:Ee&&_(b.specularIntensityMap.channel),transmissionMapUv:N&&_(b.transmissionMap.channel),thicknessMapUv:le&&_(b.thicknessMap.channel),alphaMapUv:$&&_(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Be||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(De||$),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ae,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:vt,decodeVideoTexture:De&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:Ze&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zt,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)S.push(U),S.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(T(S,b),M(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=g[b.type];let U;if(S){const W=Tn[S];U=Pd.clone(W.uniforms)}else U=b.uniforms;return U}function L(b,S){let U;for(let W=0,G=h.length;W<G;W++){const Z=h[W];if(Z.cacheKey===S){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new d_(r,S,b,s),h.push(U)),U}function I(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:L,releaseProgram:I,releaseShaderCache:A,programs:h,dispose:P}}function __(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function v_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ol(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||v_),n.length>1&&n.sort(d||Ol),i.length>1&&i.sort(d||Ol)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function x_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Bl,r.set(n,[o])):i>=s.length?(o=new Bl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function y_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Ge};break;case"SpotLight":t={position:new E,direction:new E,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function M_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S_=0;function b_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function T_(r){const e=new y_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,s=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,T=0,M=0,v=0,L=0,I=0,A=0;l.sort(b_);for(let b=0,S=l.length;b<S;b++){const U=l[b],W=U.color,G=U.intensity,Z=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=W.r*G,u+=W.g*G,d+=W.b*G;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],G);A++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ie=U.shadow,X=t.get(U);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=ee,n.directionalShadowMatrix[f]=U.shadow.matrix,T++}n.directional[f]=Y,f++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(W).multiplyScalar(G),Y.distance=Z,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[_]=Y;const ie=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,ie.updateMatrices(U),U.castShadow&&I++),n.spotLightMatrix[_]=ie.matrix,U.castShadow){const X=t.get(U);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=ee,v++}_++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(W).multiplyScalar(G),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=Y,p++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const ie=U.shadow,X=t.get(U);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,X.shadowCameraNear=ie.camera.near,X.shadowCameraFar=ie.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=U.shadow.matrix,M++}n.point[g]=Y,g++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(G),Y.groundColor.copy(U.groundColor).multiplyScalar(G),n.hemi[m]=Y,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==T||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+L-I,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=T,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=A,n.version=S_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,T=l.length;m<T;m++){const M=l[m];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function kl(r){const e=new T_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function w_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new kl(r),e.set(i,[a])):s>=o.length?(a=new kl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(r,e,t){let n=new Ya;const i=new we,s=new we,o=new it,a=new wf({depthPacking:Ou}),c=new Ef,l={},h=t.maxTextureSize,u={[Wn]:Qt,[Qt]:Wn,[zt]:zt},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:E_,fragmentShader:A_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new en;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let m=this.type;this.render=function(I,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),W=r.state;W.setBlending(oi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=m!==Bn&&this.type===Bn,Z=m===Bn&&this.type!==Bn;for(let ee=0,Y=I.length;ee<Y;ee++){const ie=I[ee],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const de=X.getFrameExtents();if(i.multiply(de),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/de.x),i.x=s.x*de.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/de.y),i.y=s.y*de.y,X.mapSize.y=s.y)),X.map===null||G===!0||Z===!0){const C=this.type!==Bn?{minFilter:Xt,magFilter:Xt}:{};X.map!==null&&X.map.dispose(),X.map=new Ti(i.x,i.y,C),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const D=X.getViewportCount();for(let C=0;C<D;C++){const oe=X.getViewport(C);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),W.viewport(o),X.updateMatrices(ie,C),n=X.getFrustum(),v(A,P,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===Bn&&T(X,P),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(b,S,U)};function T(I,A){const P=e.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ti(i.x,i.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(A,null,P,f,_,null)}function M(I,A,P,b){let S=null;const U=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)S=U;else if(S=P.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=S.uuid,G=A.uuid;let Z=l[W];Z===void 0&&(Z={},l[W]=Z);let ee=Z[G];ee===void 0&&(ee=S.clone(),Z[G]=ee,A.addEventListener("dispose",L)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Bn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=r.properties.get(S);W.light=P}return S}function v(I,A,P,b,S){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===Bn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);const G=e.update(I),Z=I.material;if(Array.isArray(Z)){const ee=G.groups;for(let Y=0,ie=ee.length;Y<ie;Y++){const X=ee[Y],de=Z[X.materialIndex];if(de&&de.visible){const D=M(I,de,b,S);I.onBeforeShadow(r,I,A,P,G,D,X),r.renderBufferDirect(P,null,G,D,I,X),I.onAfterShadow(r,I,A,P,G,D,X)}}}else if(Z.visible){const ee=M(I,Z,b,S);I.onBeforeShadow(r,I,A,P,G,ee,null),r.renderBufferDirect(P,null,G,ee,I,null),I.onAfterShadow(r,I,A,P,G,ee,null)}}const W=I.children;for(let G=0,Z=W.length;G<Z;G++)v(W[G],A,P,b,S)}function L(I){I.target.removeEventListener("dispose",L);for(const P in l){const b=l[P],S=I.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const C_={[Ho]:Vo,[Wo]:Ko,[Xo]:Yo,[Zi]:qo,[Vo]:Ho,[Ko]:Wo,[Yo]:Xo,[qo]:Zi};function P_(r,e){function t(){let N=!1;const le=new it;let V=null;const $=new it(0,0,0,0);return{setMask:function(ue){V!==ue&&!N&&(r.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){N=ue},setClear:function(ue,he,He,vt,Ft){Ft===!0&&(ue*=vt,he*=vt,He*=vt),le.set(ue,he,He,vt),$.equals(le)===!1&&(r.clearColor(ue,he,He,vt),$.copy(le))},reset:function(){N=!1,V=null,$.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,V=null,$=null,ue=null;return{setReversed:function(he){if(le!==he){const He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const vt=ue;ue=null,this.setClear(vt)}le=he},getReversed:function(){return le},setTest:function(he){he?q(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(he){V!==he&&!N&&(r.depthMask(he),V=he)},setFunc:function(he){if(le&&(he=C_[he]),$!==he){switch(he){case Ho:r.depthFunc(r.NEVER);break;case Vo:r.depthFunc(r.ALWAYS);break;case Wo:r.depthFunc(r.LESS);break;case Zi:r.depthFunc(r.LEQUAL);break;case Xo:r.depthFunc(r.EQUAL);break;case qo:r.depthFunc(r.GEQUAL);break;case Ko:r.depthFunc(r.GREATER);break;case Yo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=he}},setLocked:function(he){N=he},setClear:function(he){ue!==he&&(le&&(he=1-he),r.clearDepth(he),ue=he)},reset:function(){N=!1,V=null,$=null,ue=null,le=!1}}}function i(){let N=!1,le=null,V=null,$=null,ue=null,he=null,He=null,vt=null,Ft=null;return{setTest:function(at){N||(at?q(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(at){le!==at&&!N&&(r.stencilMask(at),le=at)},setFunc:function(at,fn,Pn){(V!==at||$!==fn||ue!==Pn)&&(r.stencilFunc(at,fn,Pn),V=at,$=fn,ue=Pn)},setOp:function(at,fn,Pn){(he!==at||He!==fn||vt!==Pn)&&(r.stencilOp(at,fn,Pn),he=at,He=fn,vt=Pn)},setLocked:function(at){N=at},setClear:function(at){Ft!==at&&(r.clearStencil(at),Ft=at)},reset:function(){N=!1,le=null,V=null,$=null,ue=null,he=null,He=null,vt=null,Ft=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,T=null,M=null,v=null,L=null,I=null,A=new Ge(0,0,0),P=0,b=!1,S=null,U=null,W=null,G=null,Z=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ie=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=ie>=2);let de=null,D={};const C=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),me=new it().fromArray(C),k=new it().fromArray(oe);function K(N,le,V,$){const ue=new Uint8Array(4),he=r.createTexture();r.bindTexture(N,he),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<V;He++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return he}const se={};se[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(r.DEPTH_TEST),o.setFunc(Zi),Oe(!1),Be(mc),q(r.CULL_FACE),R(oi);function q(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function ae(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function xe(N,le){return u[N]!==le?(r.bindFramebuffer(N,le),u[N]=le,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(N,le){let V=f,$=!1;if(N){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const ue=N.textures;if(V.length!==ue.length||V[0]!==r.COLOR_ATTACHMENT0){for(let he=0,He=ue.length;he<He;he++)V[he]=r.COLOR_ATTACHMENT0+he;V.length=ue.length,$=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,$=!0);$&&r.drawBuffers(V)}function De(N){return g!==N?(r.useProgram(N),g=N,!0):!1}const Fe={[Mi]:r.FUNC_ADD,[cu]:r.FUNC_SUBTRACT,[lu]:r.FUNC_REVERSE_SUBTRACT};Fe[hu]=r.MIN,Fe[uu]=r.MAX;const Re={[du]:r.ZERO,[fu]:r.ONE,[pu]:r.SRC_COLOR,[zo]:r.SRC_ALPHA,[yu]:r.SRC_ALPHA_SATURATE,[vu]:r.DST_COLOR,[gu]:r.DST_ALPHA,[mu]:r.ONE_MINUS_SRC_COLOR,[Go]:r.ONE_MINUS_SRC_ALPHA,[xu]:r.ONE_MINUS_DST_COLOR,[_u]:r.ONE_MINUS_DST_ALPHA,[Mu]:r.CONSTANT_COLOR,[Su]:r.ONE_MINUS_CONSTANT_COLOR,[bu]:r.CONSTANT_ALPHA,[Tu]:r.ONE_MINUS_CONSTANT_ALPHA};function R(N,le,V,$,ue,he,He,vt,Ft,at){if(N===oi){_===!0&&(ae(r.BLEND),_=!1);return}if(_===!1&&(q(r.BLEND),_=!0),N!==au){if(N!==p||at!==b){if((m!==Mi||v!==Mi)&&(r.blendEquation(r.FUNC_ADD),m=Mi,v=Mi),at)switch(N){case Wi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.ONE,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,M=null,L=null,I=null,A.set(0,0,0),P=0,p=N,b=at}return}ue=ue||le,he=he||V,He=He||$,(le!==m||ue!==v)&&(r.blendEquationSeparate(Fe[le],Fe[ue]),m=le,v=ue),(V!==T||$!==M||he!==L||He!==I)&&(r.blendFuncSeparate(Re[V],Re[$],Re[he],Re[He]),T=V,M=$,L=he,I=He),(vt.equals(A)===!1||Ft!==P)&&(r.blendColor(vt.r,vt.g,vt.b,Ft),A.copy(vt),P=Ft),p=N,b=!1}function st(N,le){N.side===zt?ae(r.CULL_FACE):q(r.CULL_FACE);let V=N.side===Qt;le&&(V=!V),Oe(V),N.blending===Wi&&N.transparent===!1?R(oi):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){S!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),S=N)}function Be(N){N!==ru?(q(r.CULL_FACE),N!==U&&(N===mc?r.cullFace(r.BACK):N===ou?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),U=N}function Me(N){N!==W&&(Y&&r.lineWidth(N),W=N)}function Ze(N,le,V){N?(q(r.POLYGON_OFFSET_FILL),(G!==le||Z!==V)&&(r.polygonOffset(le,V),G=le,Z=V)):ae(r.POLYGON_OFFSET_FILL)}function ne(N){N?q(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function w(N){N===void 0&&(N=r.TEXTURE0+ee-1),de!==N&&(r.activeTexture(N),de=N)}function x(N,le,V){V===void 0&&(de===null?V=r.TEXTURE0+ee-1:V=de);let $=D[V];$===void 0&&($={type:void 0,texture:void 0},D[V]=$),($.type!==N||$.texture!==le)&&(de!==V&&(r.activeTexture(V),de=V),r.bindTexture(N,le||se[N]),$.type=N,$.texture=le)}function B(){const N=D[de];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{r.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{r.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{r.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{r.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{r.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{r.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){me.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),me.copy(N))}function J(N){k.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function pe(N,le){let V=l.get(le);V===void 0&&(V=new WeakMap,l.set(le,V));let $=V.get(N);$===void 0&&($=r.getUniformBlockIndex(le,N.name),V.set(N,$))}function be(N,le){const $=l.get(le).get(N);c.get(le)!==$&&(r.uniformBlockBinding(le,$,N.__bindingPointIndex),c.set(le,$))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},de=null,D={},u={},d=new WeakMap,f=[],g=null,_=!1,p=null,m=null,T=null,M=null,v=null,L=null,I=null,A=new Ge(0,0,0),P=0,b=!1,S=null,U=null,W=null,G=null,Z=null,me.set(0,0,r.canvas.width,r.canvas.height),k.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:q,disable:ae,bindFramebuffer:xe,drawBuffers:ge,useProgram:De,setBlending:R,setMaterial:st,setFlipSided:Oe,setCullFace:Be,setLineWidth:Me,setPolygonOffset:Ze,setScissorTest:ne,activeTexture:w,bindTexture:x,unbindTexture:B,compressedTexImage2D:te,compressedTexImage3D:Q,texImage2D:ve,texImage3D:Ne,updateUBOMapping:pe,uniformBlockBinding:be,texStorage2D:je,texStorage3D:re,texSubImage2D:j,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:ke,viewport:J,reset:Ee}}function I_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):Ds("canvas")}function _(w,x,B){let te=1;const Q=ne(w);if((Q.width>B||Q.height>B)&&(te=B/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(te*Q.width),Ce=Math.floor(te*Q.height);u===void 0&&(u=g(j,Ce));const fe=x?g(j,Ce):u;return fe.width=j,fe.height=Ce,fe.getContext("2d").drawImage(w,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Ce+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){r.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(w,x,B,te,Q=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=x;if(x===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),x===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RG8UI),B===r.UNSIGNED_SHORT&&(j=r.RG16UI),B===r.UNSIGNED_INT&&(j=r.RG32UI),B===r.BYTE&&(j=r.RG8I),B===r.SHORT&&(j=r.RG16I),B===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGB8UI),B===r.UNSIGNED_SHORT&&(j=r.RGB16UI),B===r.UNSIGNED_INT&&(j=r.RGB32UI),B===r.BYTE&&(j=r.RGB8I),B===r.SHORT&&(j=r.RGB16I),B===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),B===r.UNSIGNED_INT&&(j=r.RGBA32UI),B===r.BYTE&&(j=r.RGBA8I),B===r.SHORT&&(j=r.RGBA16I),B===r.INT&&(j=r.RGBA32I)),x===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),x===r.RGBA){const Ce=Q?Nr:Qe.getTransfer(te);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=Ce===ut?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(w,x){let B;return w?x===null||x===bi||x===Ji?B=r.DEPTH24_STENCIL8:x===Mn?B=r.DEPTH32F_STENCIL8:x===Ps&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bi||x===Ji?B=r.DEPTH_COMPONENT24:x===Mn?B=r.DEPTH_COMPONENT32F:x===Ps&&(B=r.DEPTH_COMPONENT16),B}function L(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Xt&&w.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function I(w){const x=w.target;x.removeEventListener("dispose",I),P(x),x.isVideoTexture&&h.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),S(x)}function P(w){const x=n.get(w);if(x.__webglInit===void 0)return;const B=w.source,te=d.get(B);if(te){const Q=te[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys(te).length===0&&d.delete(B)}n.remove(w)}function b(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const B=w.source,te=d.get(B);delete te[x.__cacheKey],o.memory.textures--}function S(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let Q=0;Q<x.__webglFramebuffer[te].length;Q++)r.deleteFramebuffer(x.__webglFramebuffer[te][Q]);else r.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)r.deleteFramebuffer(x.__webglFramebuffer[te]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=w.textures;for(let te=0,Q=B.length;te<Q;te++){const j=n.get(B[te]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[te])}n.remove(w)}let U=0;function W(){U=0}function G(){const w=U;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),U+=1,w}function Z(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function ee(w,x){const B=n.get(w);if(w.isVideoTexture&&Me(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(B,w,x);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function Y(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){k(B,w,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function ie(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){k(B,w,x);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function X(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}const de={[jt]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[Dr]:r.MIRRORED_REPEAT},D={[Xt]:r.NEAREST,[th]:r.NEAREST_MIPMAP_NEAREST,[Ms]:r.NEAREST_MIPMAP_LINEAR,[$t]:r.LINEAR,[Tr]:r.LINEAR_MIPMAP_NEAREST,[Gn]:r.LINEAR_MIPMAP_LINEAR},C={[ku]:r.NEVER,[Xu]:r.ALWAYS,[zu]:r.LESS,[fh]:r.LEQUAL,[Gu]:r.EQUAL,[Wu]:r.GEQUAL,[Hu]:r.GREATER,[Vu]:r.NOTEQUAL};function oe(w,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===$t||x.magFilter===Tr||x.magFilter===Ms||x.magFilter===Gn||x.minFilter===$t||x.minFilter===Tr||x.minFilter===Ms||x.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,de[x.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,de[x.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,de[x.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,D[x.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,D[x.minFilter]),x.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,C[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Ms&&x.minFilter!==Gn||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function me(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",I));const te=x.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const j=Z(x);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[j].usedTimes++;const Ce=Q[w.__cacheKey];Ce!==void 0&&(Q[w.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(x)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return B}function k(w,x,B){let te=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=r.TEXTURE_3D);const Q=me(w,x),j=x.source;t.bindTexture(te,w.__webglTexture,r.TEXTURE0+B);const Ce=n.get(j);if(j.version!==Ce.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const fe=Qe.getPrimaries(Qe.workingColorSpace),Se=x.colorSpace===ei?null:Qe.getPrimaries(x.colorSpace),je=x.colorSpace===ei||fe===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let re=_(x.image,!1,i.maxTextureSize);re=Ze(x,re);const ve=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let ke=M(x.internalFormat,ve,Ne,x.colorSpace,x.isVideoTexture);oe(te,x);let J;const pe=x.mipmaps,be=x.isVideoTexture!==!0,Ee=Ce.__version===void 0||Q===!0,N=j.dataReady,le=L(x,re);if(x.isDepthTexture)ke=v(x.format===Qi,x.type),Ee&&(be?t.texStorage2D(r.TEXTURE_2D,1,ke,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,ke,re.width,re.height,0,ve,Ne,null));else if(x.isDataTexture)if(pe.length>0){be&&Ee&&t.texStorage2D(r.TEXTURE_2D,le,ke,pe[0].width,pe[0].height);for(let V=0,$=pe.length;V<$;V++)J=pe[V],be?N&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,J.width,J.height,ve,Ne,J.data):t.texImage2D(r.TEXTURE_2D,V,ke,J.width,J.height,0,ve,Ne,J.data);x.generateMipmaps=!1}else be?(Ee&&t.texStorage2D(r.TEXTURE_2D,le,ke,re.width,re.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,ve,Ne,re.data)):t.texImage2D(r.TEXTURE_2D,0,ke,re.width,re.height,0,ve,Ne,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){be&&Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ke,pe[0].width,pe[0].height,re.depth);for(let V=0,$=pe.length;V<$;V++)if(J=pe[V],x.format!==hn)if(ve!==null)if(be){if(N)if(x.layerUpdates.size>0){const ue=ml(J.width,J.height,x.format,x.type);for(const he of x.layerUpdates){const He=J.data.subarray(he*ue/J.data.BYTES_PER_ELEMENT,(he+1)*ue/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,he,J.width,J.height,1,ve,He)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,J.width,J.height,re.depth,ve,J.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,ke,J.width,J.height,re.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,J.width,J.height,re.depth,ve,Ne,J.data):t.texImage3D(r.TEXTURE_2D_ARRAY,V,ke,J.width,J.height,re.depth,0,ve,Ne,J.data)}else{be&&Ee&&t.texStorage2D(r.TEXTURE_2D,le,ke,pe[0].width,pe[0].height);for(let V=0,$=pe.length;V<$;V++)J=pe[V],x.format!==hn?ve!==null?be?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,J.width,J.height,ve,J.data):t.compressedTexImage2D(r.TEXTURE_2D,V,ke,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?N&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,J.width,J.height,ve,Ne,J.data):t.texImage2D(r.TEXTURE_2D,V,ke,J.width,J.height,0,ve,Ne,J.data)}else if(x.isDataArrayTexture)if(be){if(Ee&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ke,re.width,re.height,re.depth),N)if(x.layerUpdates.size>0){const V=ml(re.width,re.height,x.format,x.type);for(const $ of x.layerUpdates){const ue=re.data.subarray($*V/re.data.BYTES_PER_ELEMENT,($+1)*V/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,ve,Ne,ue)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Ne,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,re.width,re.height,re.depth,0,ve,Ne,re.data);else if(x.isData3DTexture)be?(Ee&&t.texStorage3D(r.TEXTURE_3D,le,ke,re.width,re.height,re.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Ne,re.data)):t.texImage3D(r.TEXTURE_3D,0,ke,re.width,re.height,re.depth,0,ve,Ne,re.data);else if(x.isFramebufferTexture){if(Ee)if(be)t.texStorage2D(r.TEXTURE_2D,le,ke,re.width,re.height);else{let V=re.width,$=re.height;for(let ue=0;ue<le;ue++)t.texImage2D(r.TEXTURE_2D,ue,ke,V,$,0,ve,Ne,null),V>>=1,$>>=1}}else if(pe.length>0){if(be&&Ee){const V=ne(pe[0]);t.texStorage2D(r.TEXTURE_2D,le,ke,V.width,V.height)}for(let V=0,$=pe.length;V<$;V++)J=pe[V],be?N&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,ve,Ne,J):t.texImage2D(r.TEXTURE_2D,V,ke,ve,Ne,J);x.generateMipmaps=!1}else if(be){if(Ee){const V=ne(re);t.texStorage2D(r.TEXTURE_2D,le,ke,V.width,V.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ne,re)}else t.texImage2D(r.TEXTURE_2D,0,ke,ve,Ne,re);p(x)&&m(te),Ce.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function K(w,x,B){if(x.image.length!==6)return;const te=me(w,x),Q=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+B);const j=n.get(Q);if(Q.version!==j.__version||te===!0){t.activeTexture(r.TEXTURE0+B);const Ce=Qe.getPrimaries(Qe.workingColorSpace),fe=x.colorSpace===ei?null:Qe.getPrimaries(x.colorSpace),Se=x.colorSpace===ei||Ce===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let $=0;$<6;$++)!je&&!re?ve[$]=_(x.image[$],!0,i.maxCubemapSize):ve[$]=re?x.image[$].image:x.image[$],ve[$]=Ze(x,ve[$]);const Ne=ve[0],ke=s.convert(x.format,x.colorSpace),J=s.convert(x.type),pe=M(x.internalFormat,ke,J,x.colorSpace),be=x.isVideoTexture!==!0,Ee=j.__version===void 0||te===!0,N=Q.dataReady;let le=L(x,Ne);oe(r.TEXTURE_CUBE_MAP,x);let V;if(je){be&&Ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,pe,Ne.width,Ne.height);for(let $=0;$<6;$++){V=ve[$].mipmaps;for(let ue=0;ue<V.length;ue++){const he=V[ue];x.format!==hn?ke!==null?be?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,he.width,he.height,ke,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,he.width,he.height,ke,J,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,pe,he.width,he.height,0,ke,J,he.data)}}}else{if(V=x.mipmaps,be&&Ee){V.length>0&&le++;const $=ne(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,pe,$.width,$.height)}for(let $=0;$<6;$++)if(re){be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve[$].width,ve[$].height,ke,J,ve[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,ve[$].width,ve[$].height,0,ke,J,ve[$].data);for(let ue=0;ue<V.length;ue++){const He=V[ue].image[$].image;be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,He.width,He.height,ke,J,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,pe,He.width,He.height,0,ke,J,He.data)}}else{be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ke,J,ve[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pe,ke,J,ve[$]);for(let ue=0;ue<V.length;ue++){const he=V[ue];be?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,ke,J,he.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,pe,ke,J,he.image[$])}}}p(x)&&m(r.TEXTURE_CUBE_MAP),j.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function se(w,x,B,te,Q,j){const Ce=s.convert(B.format,B.colorSpace),fe=s.convert(B.type),Se=M(B.internalFormat,Ce,fe,B.colorSpace),je=n.get(x),re=n.get(B);if(re.__renderTarget=x,!je.__hasExternalTextures){const ve=Math.max(1,x.width>>j),Ne=Math.max(1,x.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Se,ve,Ne,x.depth,0,Ce,fe,null):t.texImage2D(Q,j,Se,ve,Ne,0,Ce,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Be(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Q,re.__webglTexture,0,Oe(x)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,Q,re.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(w,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,w),x.depthBuffer){const te=x.depthTexture,Q=te&&te.isDepthTexture?te.type:null,j=v(x.stencilBuffer,Q),Ce=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=Oe(x);Be(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,j,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,w)}else{const te=x.textures;for(let Q=0;Q<te.length;Q++){const j=te[Q],Ce=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),Se=M(j.internalFormat,Ce,fe,j.colorSpace),je=Oe(x);B&&Be(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,Se,x.width,x.height):Be(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,Se,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Se,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(x.depthTexture);te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const Q=te.__webglTexture,j=Oe(x);if(x.depthTexture.format===Xi)Be(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Qi)Be(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function xe(w){const x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ae(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=r.createRenderbuffer(),q(x.__webglDepthbuffer[te],w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),q(x.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ge(w,x,B){const te=n.get(w);x!==void 0&&se(te.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&xe(w)}function De(w){const x=w.texture,B=n.get(w),te=n.get(x);w.addEventListener("dispose",A);const Q=w.textures,j=w.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=x.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let Se=0;Se<x.mipmaps.length;Se++)B.__webglFramebuffer[fe][Se]=r.createFramebuffer()}else B.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)B.__webglFramebuffer[fe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let fe=0,Se=Q.length;fe<Se;fe++){const je=n.get(Q[fe]);je.__webglTexture===void 0&&(je.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&Be(w)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const Se=Q[fe];B.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const je=s.convert(Se.format,Se.colorSpace),re=s.convert(Se.type),ve=M(Se.internalFormat,je,re,Se.colorSpace,w.isXRRenderTarget===!0),Ne=Oe(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ve,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),q(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),oe(r.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)se(B.__webglFramebuffer[fe][Se],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Se);else se(B.__webglFramebuffer[fe],w,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(x)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,Se=Q.length;fe<Se;fe++){const je=Q[fe],re=n.get(je);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),oe(r.TEXTURE_2D,je),se(B.__webglFramebuffer,w,je,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),p(je)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),oe(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)se(B.__webglFramebuffer[Se],w,x,r.COLOR_ATTACHMENT0,fe,Se);else se(B.__webglFramebuffer,w,x,r.COLOR_ATTACHMENT0,fe,0);p(x)&&m(fe),t.unbindTexture()}w.depthBuffer&&xe(w)}function Fe(w){const x=w.textures;for(let B=0,te=x.length;B<te;B++){const Q=x[B];if(p(Q)){const j=T(w),Ce=n.get(Q).__webglTexture;t.bindTexture(j,Ce),m(j),t.unbindTexture()}}}const Re=[],R=[];function st(w){if(w.samples>0){if(Be(w)===!1){const x=w.textures,B=w.width,te=w.height;let Q=r.COLOR_BUFFER_BIT;const j=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=n.get(w),fe=x.length>1;if(fe)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const je=n.get(x[Se]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,B,te,0,0,B,te,Q,r.NEAREST),c===!0&&(Re.length=0,R.length=0,Re.push(r.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Re.push(j),R.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,R)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const je=n.get(x[Se]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Oe(w){return Math.min(i.maxSamples,w.samples)}function Be(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ze(w,x){const B=w.colorSpace,te=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Kt&&B!==ei&&(Qe.getTransfer(B)===ut?(te!==hn||Q!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=X,this.rebindTextures=ge,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Be}function L_(r,e){function t(n,i=ei){let s;const o=Qe.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===Fa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return r.BYTE;if(n===ih)return r.SHORT;if(n===Ps)return r.UNSIGNED_SHORT;if(n===Ua)return r.INT;if(n===bi)return r.UNSIGNED_INT;if(n===Mn)return r.FLOAT;if(n===zs)return r.HALF_FLOAT;if(n===rh)return r.ALPHA;if(n===oh)return r.RGB;if(n===hn)return r.RGBA;if(n===ah)return r.LUMINANCE;if(n===ch)return r.LUMINANCE_ALPHA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===Qi)return r.DEPTH_STENCIL;if(n===Ba)return r.RED;if(n===ka)return r.RED_INTEGER;if(n===lh)return r.RG;if(n===za)return r.RG_INTEGER;if(n===Ga)return r.RGBA_INTEGER;if(n===wr||n===Er||n===Ar||n===Rr)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Jo||n===Qo||n===ea)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ta||n===na||n===ia)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ta||n===na)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===va||n===xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Cr)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===ya||n===Ma||n===Sa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:D_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends os{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new U_,p=t.getContextAttributes();let m=null,T=null;const M=[],v=[],L=new we;let I=null;const A=new Dt;A.viewport=new it;const P=new Dt;P.viewport=new it;const b=[A,P],S=new Kf;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=M[k];return K===void 0&&(K=new _o,M[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=M[k];return K===void 0&&(K=new _o,M[k]=K),K.getGripSpace()},this.getHand=function(k){let K=M[k];return K===void 0&&(K=new _o,M[k]=K),K.getHandSpace()};function G(k){const K=v.indexOf(k.inputSource);if(K===-1)return;const se=M[K];se!==void 0&&(se.update(k.inputSource,k.frame,l||o),se.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ee);for(let k=0;k<M.length;k++){const K=v[k];K!==null&&(v[k]=null,M[k].disconnect(K))}U=null,W=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,T=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,q=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?Qi:Xi,q=p.stencil?Ji:bi);const xe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ti(d.textureWidth,d.textureHeight,{format:hn,type:Xn,depthTexture:new Eh(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Ti(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(k){for(let K=0;K<k.removed.length;K++){const se=k.removed[K],q=v.indexOf(se);q>=0&&(v[q]=null,M[q].disconnect(se))}for(let K=0;K<k.added.length;K++){const se=k.added[K];let q=v.indexOf(se);if(q===-1){for(let xe=0;xe<M.length;xe++)if(xe>=v.length){v.push(se),q=xe;break}else if(v[xe]===null){v[xe]=se,q=xe;break}if(q===-1)break}const ae=M[q];ae&&ae.connect(se)}}const Y=new E,ie=new E;function X(k,K,se){Y.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(se.matrixWorld);const q=Y.distanceTo(ie),ae=K.projectionMatrix.elements,xe=se.projectionMatrix.elements,ge=ae[14]/(ae[10]-1),De=ae[14]/(ae[10]+1),Fe=(ae[9]+1)/ae[5],Re=(ae[9]-1)/ae[5],R=(ae[8]-1)/ae[0],st=(xe[8]+1)/xe[0],Oe=ge*R,Be=ge*st,Me=q/(-R+st),Ze=Me*-R;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ze),k.translateZ(Me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ae[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ne=ge+Me,w=De+Me,x=Oe-Ze,B=Be+(q-Ze),te=Fe*De/w*ne,Q=Re*De/w*ne;k.projectionMatrix.makePerspective(x,B,te,Q,ne,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function de(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let K=k.near,se=k.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(se=_.depthFar)),S.near=P.near=A.near=K,S.far=P.far=A.far=se,(U!==S.near||W!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,W=S.far),A.layers.mask=k.layers.mask|2,P.layers.mask=k.layers.mask|4,S.layers.mask=A.layers.mask|P.layers.mask;const q=k.parent,ae=S.cameras;de(S,q);for(let xe=0;xe<ae.length;xe++)de(ae[xe],q);ae.length===2?X(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),D(k,S,q)};function D(k,K,se){se===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=es*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let C=null;function oe(k,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let q=!1;se.length!==S.cameras.length&&(S.cameras.length=0,q=!0);for(let ge=0;ge<se.length;ge++){const De=se[ge];let Fe=null;if(f!==null)Fe=f.getViewport(De);else{const R=u.getViewSubImage(d,De);Fe=R.viewport,ge===0&&(e.setRenderTargetTextures(T,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(T))}let Re=b[ge];Re===void 0&&(Re=new Dt,Re.layers.enable(ge),Re.viewport=new it,b[ge]=Re),Re.matrix.fromArray(De.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(De.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),ge===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),q===!0&&S.cameras.push(Re)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const ge=u.getDepthInformation(se[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,i.renderState)}}for(let se=0;se<M.length;se++){const q=v[se],ae=M[se];q!==null&&ae!==void 0&&ae.update(q,K,l||o)}C&&C(k,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const me=new kh;me.setAnimationLoop(oe),this.setAnimationLoop=function(k){C=k},this.dispose=function(){}}}const gi=new bn,O_=new ze;function B_(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,T,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m),M=T.envMap,v=T.envMapRotation;M&&(p.envMap.value=M,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(gi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,T,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const v=M.program;n.uniformBlockBinding(T,v)}function l(T,M){let v=i[T.id];v===void 0&&(g(T),v=h(T),i[T.id]=v,T.addEventListener("dispose",p));const L=M.program;n.updateUBOMapping(T,L);const I=e.render.frame;s[T.id]!==I&&(d(T),s[T.id]=I)}function h(T){const M=u();T.__bindingPointIndex=M;const v=r.createBuffer(),L=T.__size,I=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,L,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const M=i[T.id],v=T.uniforms,L=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let I=0,A=v.length;I<A;I++){const P=Array.isArray(v[I])?v[I]:[v[I]];for(let b=0,S=P.length;b<S;b++){const U=P[b];if(f(U,I,b,L)===!0){const W=U.__offset,G=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let ee=0;ee<G.length;ee++){const Y=G[ee],ie=_(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,W+Z,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,Z),Z+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,M,v,L){const I=T.value,A=M+"_"+v;if(L[A]===void 0)return typeof I=="number"||typeof I=="boolean"?L[A]=I:L[A]=I.clone(),!0;{const P=L[A];if(typeof I=="number"||typeof I=="boolean"){if(P!==I)return L[A]=I,!0}else if(P.equals(I)===!1)return P.copy(I),!0}return!1}function g(T){const M=T.uniforms;let v=0;const L=16;for(let A=0,P=M.length;A<P;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,U=b.length;S<U;S++){const W=b[S],G=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,ee=G.length;Z<ee;Z++){const Y=G[Z],ie=_(Y),X=v%L,de=X%ie.boundary,D=X+de;v+=de,D!==0&&L-D<ie.storage&&(v+=L-D),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=ie.storage}}}const I=v%L;return I>0&&(v+=L-I),T.__size=v,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}class Xr{constructor(e={}){const{canvas:t=cd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const T=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let L=!1,I=0,A=0,P=null,b=-1,S=null;const U=new it,W=new it;let G=null;const Z=new Ge(0);let ee=0,Y=t.width,ie=t.height,X=1,de=null,D=null;const C=new it(0,0,Y,ie),oe=new it(0,0,Y,ie);let me=!1;const k=new Ya;let K=!1,se=!1;this.transmissionResolutionScale=1;const q=new ze,ae=new ze,xe=new E,ge=new it,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Re(){return P===null?X:1}let R=n;function st(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){const F="webgl2";if(R=st(F,y),R===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Oe,Be,Me,Ze,ne,w,x,B,te,Q,j,Ce,fe,Se,je,re,ve,Ne,ke,J,pe,be,Ee,N;function le(){Oe=new jg(R),Oe.init(),be=new L_(R,Oe),Be=new Vg(R,Oe,e,be),Me=new P_(R,Oe),Be.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Ze=new Qg(R),ne=new __,w=new I_(R,Oe,Me,ne,Be,be,Ze),x=new Xg(v),B=new Zg(v),te=new rp(R),Ee=new Gg(R,te),Q=new $g(R,te,Ze,Ee),j=new t0(R,Q,te,Ze),ke=new e0(R,Be,w),re=new Wg(ne),Ce=new g_(v,x,B,Oe,Be,Ee,re),fe=new B_(v,ne),Se=new x_,je=new w_(Oe),Ne=new zg(v,x,B,Me,j,f,c),ve=new R_(v,j,Be),N=new k_(R,Ze,Be,Me),J=new Hg(R,Oe,Ze),pe=new Jg(R,Oe,Ze),Ze.programs=Ce.programs,v.capabilities=Be,v.extensions=Oe,v.properties=ne,v.renderLists=Se,v.shadowMap=ve,v.state=Me,v.info=Ze}le();const V=new F_(v,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(Y,ie,!1))},this.getSize=function(y){return y.set(Y,ie)},this.setSize=function(y,F,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,ie=F,t.width=Math.floor(y*X),t.height=Math.floor(F*X),z===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(Y*X,ie*X).floor()},this.setDrawingBufferSize=function(y,F,z){Y=y,ie=F,X=z,t.width=Math.floor(y*z),t.height=Math.floor(F*z),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(C)},this.setViewport=function(y,F,z,H){y.isVector4?C.set(y.x,y.y,y.z,y.w):C.set(y,F,z,H),Me.viewport(U.copy(C).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(oe)},this.setScissor=function(y,F,z,H){y.isVector4?oe.set(y.x,y.y,y.z,y.w):oe.set(y,F,z,H),Me.scissor(W.copy(oe).multiplyScalar(X).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){Me.setScissorTest(me=y)},this.setOpaqueSort=function(y){de=y},this.setTransparentSort=function(y){D=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,z=!0){let H=0;if(y){let O=!1;if(P!==null){const ce=P.texture.format;O=ce===Ga||ce===za||ce===ka}if(O){const ce=P.texture.type,ye=ce===Xn||ce===bi||ce===Ps||ce===Ji||ce===Fa||ce===Oa,Te=Ne.getClearColor(),Ae=Ne.getClearAlpha(),Ve=Te.r,We=Te.g,Ie=Te.b;ye?(g[0]=Ve,g[1]=We,g[2]=Ie,g[3]=Ae,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ve,_[1]=We,_[2]=Ie,_[3]=Ae,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}F&&(H|=R.DEPTH_BUFFER_BIT),z&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ne.dispose(),Se.dispose(),je.dispose(),ne.dispose(),x.dispose(),B.dispose(),j.dispose(),Ee.dispose(),N.dispose(),Ce.dispose(),V.dispose(),V.removeEventListener("sessionstart",cc),V.removeEventListener("sessionend",lc),li.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Ze.autoReset,F=ve.enabled,z=ve.autoUpdate,H=ve.needsUpdate,O=ve.type;le(),Ze.autoReset=y,ve.enabled=F,ve.autoUpdate=z,ve.needsUpdate=H,ve.type=O}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function He(y){const F=y.target;F.removeEventListener("dispose",He),vt(F)}function vt(y){Ft(y),ne.remove(y)}function Ft(y){const F=ne.get(y).programs;F!==void 0&&(F.forEach(function(z){Ce.releaseProgram(z)}),y.isShaderMaterial&&Ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,z,H,O,ce){F===null&&(F=De);const ye=O.isMesh&&O.matrixWorld.determinant()<0,Te=Qh(y,F,z,H,O);Me.setMaterial(H,ye);let Ae=z.index,Ve=1;if(H.wireframe===!0){if(Ae=Q.getWireframeAttribute(z),Ae===void 0)return;Ve=2}const We=z.drawRange,Ie=z.attributes.position;let et=We.start*Ve,rt=(We.start+We.count)*Ve;ce!==null&&(et=Math.max(et,ce.start*Ve),rt=Math.min(rt,(ce.start+ce.count)*Ve)),Ae!==null?(et=Math.max(et,0),rt=Math.min(rt,Ae.count)):Ie!=null&&(et=Math.max(et,0),rt=Math.min(rt,Ie.count));const St=rt-et;if(St<0||St===1/0)return;Ee.setup(O,H,Te,z,Ae);let xt,tt=J;if(Ae!==null&&(xt=te.get(Ae),tt=pe,tt.setIndex(xt)),O.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*Re()),tt.setMode(R.LINES)):tt.setMode(R.TRIANGLES);else if(O.isLine){let Ue=H.linewidth;Ue===void 0&&(Ue=1),Me.setLineWidth(Ue*Re()),O.isLineSegments?tt.setMode(R.LINES):O.isLineLoop?tt.setMode(R.LINE_LOOP):tt.setMode(R.LINE_STRIP)}else O.isPoints?tt.setMode(R.POINTS):O.isSprite&&tt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,Nt=O._multiDrawCounts,ot=O._multiDrawCount,pn=Ae?te.get(Ae).bytesPerElement:1,Ei=ne.get(H).currentProgram.getUniforms();for(let tn=0;tn<ot;tn++)Ei.setValue(R,"_gl_DrawID",tn),tt.render(Ue[tn]/pn,Nt[tn])}else if(O.isInstancedMesh)tt.renderInstances(et,St,O.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Nt=Math.min(z.instanceCount,Ue);tt.renderInstances(et,St,Nt)}else tt.render(et,St)};function at(y,F,z){y.transparent===!0&&y.side===zt&&y.forceSinglePass===!1?(y.side=Qt,y.needsUpdate=!0,qs(y,F,z),y.side=Wn,y.needsUpdate=!0,qs(y,F,z),y.side=zt):qs(y,F,z)}this.compile=function(y,F,z=null){z===null&&(z=y),m=je.get(z),m.init(F),M.push(m),z.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),y!==z&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const H=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Te=ce[ye];at(Te,z,O),H.add(Te)}else at(ce,z,O),H.add(ce)}),m=M.pop(),H},this.compileAsync=function(y,F,z=null){const H=this.compile(y,F,z);return new Promise(O=>{function ce(){if(H.forEach(function(ye){ne.get(ye).currentProgram.isReady()&&H.delete(ye)}),H.size===0){O(y);return}setTimeout(ce,10)}Oe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let fn=null;function Pn(y){fn&&fn(y)}function cc(){li.stop()}function lc(){li.start()}const li=new kh;li.setAnimationLoop(Pn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(y){fn=y,V.setAnimationLoop(y),y===null?li.stop():li.start()},V.addEventListener("sessionstart",cc),V.addEventListener("sessionend",lc),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(F),F=V.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,P),m=je.get(y,M.length),m.init(F),M.push(m),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(ae),se=this.localClippingEnabled,K=re.init(this.clippingPlanes,se),p=Se.get(y,T.length),p.init(),T.push(p),V.enabled===!0&&V.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Yr(ce,F,-1/0,v.sortObjects)}Yr(y,F,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(de,D),Fe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Fe&&Ne.addToRenderList(p,y),this.info.render.frame++,K===!0&&re.beginShadows();const z=m.state.shadowsArray;ve.render(z,y,F),K===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,O=p.transmissive;if(m.setupLights(),F.isArrayCamera){const ce=F.cameras;if(O.length>0)for(let ye=0,Te=ce.length;ye<Te;ye++){const Ae=ce[ye];uc(H,O,y,Ae)}Fe&&Ne.render(y);for(let ye=0,Te=ce.length;ye<Te;ye++){const Ae=ce[ye];hc(p,y,Ae,Ae.viewport)}}else O.length>0&&uc(H,O,y,F),Fe&&Ne.render(y),hc(p,y,F);P!==null&&A===0&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,F),Ee.resetDefaultState(),b=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],K===!0&&re.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Yr(y,F,z,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){H&&ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ae);const ye=j.update(y),Te=y.material;Te.visible&&p.push(y,ye,Te,z,ge.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){const ye=j.update(y),Te=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ge.copy(y.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ge.copy(ye.boundingSphere.center)),ge.applyMatrix4(y.matrixWorld).applyMatrix4(ae)),Array.isArray(Te)){const Ae=ye.groups;for(let Ve=0,We=Ae.length;Ve<We;Ve++){const Ie=Ae[Ve],et=Te[Ie.materialIndex];et&&et.visible&&p.push(y,ye,et,z,ge.z,Ie)}}else Te.visible&&p.push(y,ye,Te,z,ge.z,null)}}const ce=y.children;for(let ye=0,Te=ce.length;ye<Te;ye++)Yr(ce[ye],F,z,H)}function hc(y,F,z,H){const O=y.opaque,ce=y.transmissive,ye=y.transparent;m.setupLightsView(z),K===!0&&re.setGlobalState(v.clippingPlanes,z),H&&Me.viewport(U.copy(H)),O.length>0&&Xs(O,F,z),ce.length>0&&Xs(ce,F,z),ye.length>0&&Xs(ye,F,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function uc(y,F,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Ti(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?zs:Xn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ce=m.state.transmissionRenderTarget[H.id],ye=H.viewport||U;ce.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Te=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(Z),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&Ne.render(z);const Ae=v.toneMapping;v.toneMapping=ai;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),K===!0&&re.setGlobalState(v.clippingPlanes,H),Xs(y,z,H),w.updateMultisampleRenderTarget(ce),w.updateRenderTargetMipmap(ce),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ie=0,et=F.length;Ie<et;Ie++){const rt=F[Ie],St=rt.object,xt=rt.geometry,tt=rt.material,Ue=rt.group;if(tt.side===zt&&St.layers.test(H.layers)){const Nt=tt.side;tt.side=Qt,tt.needsUpdate=!0,dc(St,z,H,xt,tt,Ue),tt.side=Nt,tt.needsUpdate=!0,We=!0}}We===!0&&(w.updateMultisampleRenderTarget(ce),w.updateRenderTargetMipmap(ce))}v.setRenderTarget(Te),v.setClearColor(Z,ee),Ve!==void 0&&(H.viewport=Ve),v.toneMapping=Ae}function Xs(y,F,z){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=y.length;O<ce;O++){const ye=y[O],Te=ye.object,Ae=ye.geometry,Ve=H===null?ye.material:H,We=ye.group;Te.layers.test(z.layers)&&dc(Te,F,z,Ae,Ve,We)}}function dc(y,F,z,H,O,ce){y.onBeforeRender(v,F,z,H,O,ce),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(v,F,z,H,y,ce),O.transparent===!0&&O.side===zt&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,v.renderBufferDirect(z,F,H,O,y,ce),O.side=Wn,O.needsUpdate=!0,v.renderBufferDirect(z,F,H,O,y,ce),O.side=zt):v.renderBufferDirect(z,F,H,O,y,ce),y.onAfterRender(v,F,z,H,O,ce)}function qs(y,F,z){F.isScene!==!0&&(F=De);const H=ne.get(y),O=m.state.lights,ce=m.state.shadowsArray,ye=O.state.version,Te=Ce.getParameters(y,O.state,ce,F,z),Ae=Ce.getProgramCacheKey(Te);let Ve=H.programs;H.environment=y.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",He),Ve=new Map,H.programs=Ve);let We=Ve.get(Ae);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===ye)return pc(y,Te),We}else Te.uniforms=Ce.getUniforms(y),y.onBeforeCompile(Te,v),We=Ce.acquireProgram(Te,Ae),Ve.set(Ae,We),H.uniforms=Te.uniforms;const Ie=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=re.uniform),pc(y,Te),H.needsLights=tu(y),H.lightsStateVersion=ye,H.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=We,H.uniformsList=null,We}function fc(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Pr.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function pc(y,F){const z=ne.get(y);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function Qh(y,F,z,H,O){F.isScene!==!0&&(F=De),w.resetTextureUnits();const ce=F.fog,ye=H.isMeshStandardMaterial?F.environment:null,Te=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Kt,Ae=(H.isMeshStandardMaterial?B:x).get(H.envMap||ye),Ve=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,We=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let St=ai;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=v.toneMapping);const xt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=xt!==void 0?xt.length:0,Ue=ne.get(H),Nt=m.state.lights;if(K===!0&&(se===!0||y!==S)){const Gt=y===S&&H.id===b;re.setState(H,y,Gt)}let ot=!1;H.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Nt.state.version||Ue.outputColorSpace!==Te||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==Ae||H.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==We||Ue.morphTargets!==Ie||Ue.morphNormals!==et||Ue.morphColors!==rt||Ue.toneMapping!==St||Ue.morphTargetsCount!==tt)&&(ot=!0):(ot=!0,Ue.__version=H.version);let pn=Ue.currentProgram;ot===!0&&(pn=qs(H,F,O));let Ei=!1,tn=!1,us=!1;const ft=pn.getUniforms(),rn=Ue.uniforms;if(Me.useProgram(pn.program)&&(Ei=!0,tn=!0,us=!0),H.id!==b&&(b=H.id,tn=!0),Ei||S!==y){Me.buffers.depth.getReversed()?(q.copy(y.projectionMatrix),hd(q),ud(q),ft.setValue(R,"projectionMatrix",q)):ft.setValue(R,"projectionMatrix",y.projectionMatrix),ft.setValue(R,"viewMatrix",y.matrixWorldInverse);const Yt=ft.map.cameraPosition;Yt!==void 0&&Yt.setValue(R,xe.setFromMatrixPosition(y.matrixWorld)),Be.logarithmicDepthBuffer&&ft.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,tn=!0,us=!0)}if(O.isSkinnedMesh){ft.setOptional(R,O,"bindMatrix"),ft.setOptional(R,O,"bindMatrixInverse");const Gt=O.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ft.setValue(R,"boneTexture",Gt.boneTexture,w))}O.isBatchedMesh&&(ft.setOptional(R,O,"batchingTexture"),ft.setValue(R,"batchingTexture",O._matricesTexture,w),ft.setOptional(R,O,"batchingIdTexture"),ft.setValue(R,"batchingIdTexture",O._indirectTexture,w),ft.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(R,"batchingColorTexture",O._colorsTexture,w));const on=z.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&ke.update(O,z,pn),(tn||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,ft.setValue(R,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(rn.envMap.value=Ae,rn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),tn&&(ft.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&eu(rn,us),ce&&H.fog===!0&&fe.refreshFogUniforms(rn,ce),fe.refreshMaterialUniforms(rn,H,X,ie,m.state.transmissionRenderTarget[y.id]),Pr.upload(R,fc(Ue),rn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Pr.upload(R,fc(Ue),rn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(R,"center",O.center),ft.setValue(R,"modelViewMatrix",O.modelViewMatrix),ft.setValue(R,"normalMatrix",O.normalMatrix),ft.setValue(R,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Gt=H.uniformsGroups;for(let Yt=0,Zr=Gt.length;Yt<Zr;Yt++){const hi=Gt[Yt];N.update(hi,pn),N.bind(hi,pn)}}return pn}function eu(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function tu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,F,z){ne.get(y.texture).__webglTexture=F,ne.get(y.depthTexture).__webglTexture=z;const H=ne.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const z=ne.get(y);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const nu=R.createFramebuffer();this.setRenderTarget=function(y,F=0,z=0){P=y,I=F,A=z;let H=!0,O=null,ce=!1,ye=!1;if(y){const Ae=ne.get(y);if(Ae.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Ae.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(Ae.__hasExternalTextures)w.rebindTextures(y,ne.get(y.texture).__webglTexture,ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(Ae.__boundDepthTexture!==Ie){if(Ie!==null&&ne.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ye=!0);const We=ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(We[F])?O=We[F][z]:O=We[F],ce=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?O=ne.get(y).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[z]:O=We,U.copy(y.viewport),W.copy(y.scissor),G=y.scissorTest}else U.copy(C).multiplyScalar(X).floor(),W.copy(oe).multiplyScalar(X).floor(),G=me;if(z!==0&&(O=nu),Me.bindFramebuffer(R.FRAMEBUFFER,O)&&H&&Me.drawBuffers(y,O),Me.viewport(U),Me.scissor(W),Me.setScissorTest(G),ce){const Ae=ne.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,z)}else if(ye){const Ae=ne.get(y.texture),Ve=F;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ae.__webglTexture,z,Ve)}else if(y!==null&&z!==0){const Ae=ne.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ae.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(y,F,z,H,O,ce,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){Me.bindFramebuffer(R.FRAMEBUFFER,Te);try{const Ae=y.texture,Ve=Ae.format,We=Ae.type;if(!Be.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&z>=0&&z<=y.height-O&&R.readPixels(F,z,H,O,be.convert(Ve),be.convert(We),ce)}finally{const Ae=P!==null?ne.get(P).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,F,z,H,O,ce,ye){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){const Ae=y.texture,Ve=Ae.format,We=Ae.type;if(!Be.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-H&&z>=0&&z<=y.height-O){Me.bindFramebuffer(R.FRAMEBUFFER,Te);const Ie=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ie),R.bufferData(R.PIXEL_PACK_BUFFER,ce.byteLength,R.STREAM_READ),R.readPixels(F,z,H,O,be.convert(Ve),be.convert(We),0);const et=P!==null?ne.get(P).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,et);const rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ld(R,rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ie),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ce),R.deleteBuffer(Ie),R.deleteSync(rt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,z=0){y.isTexture!==!0&&(vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-z),O=Math.floor(y.image.width*H),ce=Math.floor(y.image.height*H),ye=F!==null?F.x:0,Te=F!==null?F.y:0;w.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ye,Te,O,ce),Me.unbindTexture()};const iu=R.createFramebuffer(),su=R.createFramebuffer();this.copyTextureToTexture=function(y,F,z=null,H=null,O=0,ce=null){y.isTexture!==!0&&(vi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],F=arguments[2],ce=arguments[3]||0,z=null),ce===null&&(O!==0?(vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=O,O=0):ce=0);let ye,Te,Ae,Ve,We,Ie,et,rt,St;const xt=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(z!==null)ye=z.max.x-z.min.x,Te=z.max.y-z.min.y,Ae=z.isBox3?z.max.z-z.min.z:1,Ve=z.min.x,We=z.min.y,Ie=z.isBox3?z.min.z:0;else{const on=Math.pow(2,-O);ye=Math.floor(xt.width*on),Te=Math.floor(xt.height*on),y.isDataArrayTexture?Ae=xt.depth:y.isData3DTexture?Ae=Math.floor(xt.depth*on):Ae=1,Ve=0,We=0,Ie=0}H!==null?(et=H.x,rt=H.y,St=H.z):(et=0,rt=0,St=0);const tt=be.convert(F.format),Ue=be.convert(F.type);let Nt;F.isData3DTexture?(w.setTexture3D(F,0),Nt=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Nt=R.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Nt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=R.getParameter(R.UNPACK_ROW_LENGTH),pn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ei=R.getParameter(R.UNPACK_SKIP_PIXELS),tn=R.getParameter(R.UNPACK_SKIP_ROWS),us=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ie);const ft=y.isDataArrayTexture||y.isData3DTexture,rn=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const on=ne.get(y),Gt=ne.get(F),Yt=ne.get(on.__renderTarget),Zr=ne.get(Gt.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let hi=0;hi<Ae;hi++)ft&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.get(y).__webglTexture,O,Ie+hi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.get(F).__webglTexture,ce,St+hi)),R.blitFramebuffer(Ve,We,ye,Te,et,rt,ye,Te,R.DEPTH_BUFFER_BIT,R.NEAREST);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||ne.has(y)){const on=ne.get(y),Gt=ne.get(F);Me.bindFramebuffer(R.READ_FRAMEBUFFER,iu),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,su);for(let Yt=0;Yt<Ae;Yt++)ft?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,on.__webglTexture,O,Ie+Yt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,on.__webglTexture,O),rn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,ce,St+Yt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gt.__webglTexture,ce),O!==0?R.blitFramebuffer(Ve,We,ye,Te,et,rt,ye,Te,R.COLOR_BUFFER_BIT,R.NEAREST):rn?R.copyTexSubImage3D(Nt,ce,et,rt,St+Yt,Ve,We,ye,Te):R.copyTexSubImage2D(Nt,ce,et,rt,Ve,We,ye,Te);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else rn?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Nt,ce,et,rt,St,ye,Te,Ae,tt,Ue,xt.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Nt,ce,et,rt,St,ye,Te,Ae,tt,xt.data):R.texSubImage3D(Nt,ce,et,rt,St,ye,Te,Ae,tt,Ue,xt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ce,et,rt,ye,Te,tt,Ue,xt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ce,et,rt,xt.width,xt.height,tt,xt.data):R.texSubImage2D(R.TEXTURE_2D,ce,et,rt,ye,Te,tt,Ue,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ei),R.pixelStorei(R.UNPACK_SKIP_ROWS,tn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,us),ce===0&&F.generateMipmaps&&R.generateMipmap(Nt),Me.unbindTexture()},this.copyTextureToTexture3D=function(y,F,z=null,H=null,O=0){return y.isTexture!==!0&&(vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,y=arguments[2],F=arguments[3],O=arguments[4]||0),vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,z,H,O)},this.initRenderTarget=function(y){ne.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){I=0,A=0,P=null,Me.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const nt={MOTHERBOARD:"Motherboard",CPU:"CPU",COOLER:"CPU Cooler",RAM:"RAM",GPU:"GPU",STORAGE:"Storage",PSU:"Power Supply"},z_={motherboard:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="52" height="52" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <rect x="14" y="14" width="16" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="18" y="18" width="8" height="8" fill="#fbbf24"/>
      <rect x="36" y="14" width="4" height="24" rx="1" fill="#38bdf8"/>
      <rect x="44" y="14" width="4" height="24" rx="1" fill="#38bdf8"/>
      <rect x="14" y="38" width="34" height="6" rx="1" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" rx="1" fill="#a855f7"/>
    </svg>`,cpu:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="36" height="36" rx="3" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
      <rect x="20" y="20" width="24" height="24" rx="2" fill="#334155" stroke="#94a3b8" stroke-width="1"/>
      <path d="M20 14v-4M28 14v-4M36 14v-4M44 14v-4M20 50v4M28 50v4M36 50v4M44 50v4" stroke="#fde68a" stroke-width="2"/>
      <path d="M14 26l-4 6 4 6M50 26l4 6-4 6" stroke="#fbbf24" stroke-width="2" fill="none"/>
    </svg>`,cooler:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="10" width="28" height="30" rx="3" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="32" cy="25" r="11" stroke="#e2e8f0" stroke-width="2"/>
      <circle cx="32" cy="25" r="3" fill="#94a3b8"/>
      <path d="M32 14v6M32 30v6M21 25h6M37 25h6" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="16" y="40" width="32" height="6" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M20 52h8M36 52h8" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
    </svg>`,ram:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="22" width="52" height="20" rx="2" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
      <rect x="10" y="16" width="44" height="6" rx="3" fill="#c084fc"/>
      <rect x="12" y="26" width="10" height="12" fill="#1e293b"/>
      <rect x="28" y="26" width="10" height="12" fill="#1e293b"/>
      <rect x="44" y="26" width="8" height="12" fill="#1e293b"/>
      <path d="M10 42v4M20 42v4M30 42v4M40 42v4M50 42v4" stroke="#fbbf24" stroke-width="2"/>
    </svg>`,ssd:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="20" width="48" height="24" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <rect x="12" y="24" width="26" height="16" rx="2" fill="#0ea5e9"/>
      <path d="M44 28h8M44 34h8" stroke="#94a3b8" stroke-width="2"/>
      <path d="M14 14h36v6H14z" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    </svg>`,psu:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="44" height="40" rx="4" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
      <circle cx="32" cy="32" r="14" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="32" cy="32" r="4" fill="#f97316"/>
      <rect x="14" y="16" width="6" height="4" fill="#ef4444"/>
      <path d="M46 16v12M50 16v12" stroke="#fbbf24" stroke-width="1.5"/>
    </svg>`,gpu:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="32" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <circle cx="22" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="22" cy="32" r="3" fill="#22c55e"/>
      <circle cx="44" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="44" cy="32" r="3" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" fill="#fbbf24"/>
      <rect x="4" y="12" width="3" height="40" fill="#94a3b8"/>
    </svg>`,"pc case":`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8h24a4 4 0 014 4v44H20z" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <path d="M24 12h20v40H24z" fill="#0ea5e9" opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="44" cy="14" r="2" fill="#22c55e"/>
      <path d="M28 30h12M28 38h12M28 46h8" stroke="#64748b" stroke-width="2"/>
    </svg>`},wt=r=>z_[r],G_=[{id:"mb_msi_b550_tomahawk",name:"MSI MAG B550 Tomahawk",category:nt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/motherboard_am4.glb",brand:"MSI",price:"3,290,000 đ",realSize:.305,footprint:{length:.305,depth:.252},iconSvg:wt("motherboard"),specs:[{label:"Socket",value:"AM4 (AMD Ryzen 1000-5000)"},{label:"Chipset",value:"AMD B550"},{label:"Kích thước Form Factor",value:"ATX (30.5 cm x 24.4 cm)"},{label:"Khe RAM",value:"4x DDR4 DIMM (Tối đa 128GB, 4400MHz OC)"},{label:"Khe PCIe",value:"2x PCIe 4.0 x16, 1x PCIe 3.0 x16"},{label:"Cổng M.2 & SATA",value:"2x M.2 NVMe/SATA, 6x SATA III"},{label:"Kết nối mạng",value:"Realtek 2.5G LAN"}],description:"Bo mạch AM4 phổ thông cho dòng Ryzen, nền tảng dễ nâng cấp lên thế hệ Zen 3.",beginnerTip:"💡 Board AM4 chỉ nhận CPU kiểu AM4. Kiểm tra khe RAM DDR4 (không phải DDR5) trước khi mua CPU."},{id:"mb_asus_prime_b450",name:"ASUS PRIME B450M-A",category:nt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/motherboard.glb",brand:"ASUS",price:"1,890,000 đ",realSize:.244,footprint:{length:.244,depth:.244},iconSvg:wt("motherboard"),specs:[{label:"Socket",value:"AM4"},{label:"Chipset",value:"AMD B450"},{label:"Kích thước Form Factor",value:"Micro-ATX (24.4 cm x 24.4 cm)"},{label:"Khe RAM",value:"4x DDR4 DIMM (Tối đa 64GB)"},{label:"Khe PCIe",value:"1x PCIe 3.0 x16, 1x PCIe 3.0 x1"},{label:"Cổng M.2 & SATA",value:"1x M.2, 4x SATA III"}],description:"Bo mATX gọn nhẹ, vừa khít với các thùng case mini mà vẫn đủ 4 khe RAM.",beginnerTip:"💡 Bo Micro-ATX nhỏ hơn ATX nhưng vẫn dùng chung hệ chân ốc 9 lỗ như mọi bo ATX thông thường."},{id:"mb_asrock_z690",name:"ASRock Z690M Pro RS",category:nt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/simple_motherboard.glb",brand:"ASRock",price:"4,150,000 đ",realSize:.305,footprint:{length:.305,depth:.252},iconSvg:wt("motherboard"),specs:[{label:"Socket",value:"LGA 1700 (Intel 12th Gen)"},{label:"Chipset",value:"Intel Z690"},{label:"Kích thước Form Factor",value:"Micro-ATX (30.5 cm x 24.4 cm)"},{label:"Khe RAM",value:"4x DDR5 DIMM (Tối đa 128GB)"},{label:"Khe PCIe",value:"1x PCIe 5.0 x16, 1x PCIe 4.0 x16"},{label:"Cổng M.2 & SATA",value:"2x M.2 NVMe, 4x SATA III"}],description:"Bo thế hệ mới nhất hỗ trợ PCIe 5.0, sẵn sàng cho card đồ họa và SSD tốc độ cao.",beginnerTip:"💡 Board Z690 đi kèm CPU thế hệ 12, khe RAM là DDR5 - khác hẳn DDR4 về vị trí khe cắm."},{id:"mb_generic_atx",name:"ATX Motherboard (Generic Components)",category:nt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/motherboard-components.glb",brand:"Generic",price:"890,000 đ",realSize:.305,footprint:{length:.305,depth:.252},iconSvg:wt("motherboard"),specs:[{label:"Socket",value:"AM4 / LGA 1151 (tùy phiên bản)"},{label:"Chipset",value:"Generic"},{label:"Kích thước Form Factor",value:"ATX (30.5 cm x 24.4 cm)"},{label:"Khe RAM",value:"4x DDR4 DIMM"},{label:"Khe PCIe",value:"1x PCIe 3.0 x16"}],description:"Bo mạch chủ ATX tiêu chuẩn dùng để dạy hình dạng linh kiện và các cổng kết nối.",beginnerTip:"💡 Đây là board trình diễn: tập trung vào cách nhận biết khe RAM, khe PCIe và cụm cổng I/O ở mép trên."},{id:"mb_gigabyte_h61",name:"Gigabyte H61M-HD3",category:nt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/motherbard.glb",brand:"Gigabyte",price:"1,190,000 đ",realSize:.244,footprint:{length:.244,depth:.244},iconSvg:wt("motherboard"),specs:[{label:"Socket",value:"LGA 1155 (Intel 2nd Gen)"},{label:"Chipset",value:"Intel H61"},{label:"Kích thước Form Factor",value:"Micro-ATX (24.4 cm x 24.4 cm)"},{label:"Khe RAM",value:"2x DDR3 DIMM"},{label:"Cổng M.2 & SATA",value:"0x M.2, 4x SATA II"}],description:"Bo mATX thế hệ cũ dùng DDR3, chạy ổn cho dàn máy văn phòng tiết kiệm điện.",beginnerTip:"💡 Board DDR3 không tương thích với RAM DDR4. Luôn kiểm tra thế hệ RAM trước khi nâng cấp máy."},{id:"cpu_intel_i5_10400",name:"Intel Core i5-10400",category:nt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/intel_cpu (1).glb",brand:"Intel",price:"2,790,000 đ",realSize:.0375,footprint:{length:.0375,depth:.0375},iconSvg:wt("cpu"),specs:[{label:"Socket",value:"LGA 1200"},{label:"Kiến trúc",value:"Comet Lake 6 nhân 12 luồng"},{label:"Xung nhịp",value:"2.9 GHz tăng tốc 4.7 GHz"},{label:"Bộ nhớ đệm",value:"12 MB Smart Cache"},{label:"TDP",value:"65W"}],description:"CPU 6 nhân giá rẻ, đủ sức cho game eSports và văn phòng nặng.",beginnerTip:"💡 Nắp lưng phẳng là mặt tiếp keo tản nhiệt. Đừng chạm tay vào các chân nhỏ bên dưới."},{id:"cpu_intel_i7_11700",name:"Intel Core i7-11700",category:nt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/free_intel_cpu.glb",brand:"Intel",price:"7,490,000 đ",realSize:.0375,footprint:{length:.0375,depth:.0375},iconSvg:wt("cpu"),specs:[{label:"Socket",value:"LGA 1200"},{label:"Kiến trúc",value:"Rocket Lake 8 nhân 16 luồng"},{label:"Xung nhịp",value:"2.5 GHz tăng tốc 4.9 GHz"},{label:"Bộ nhớ đệm",value:"16 MB Smart Cache"},{label:"TDP",value:"65W"}],description:"8 nhân cho dựng hình, render và chơi game 1440p cùng lúc.",beginnerTip:"💡 CPU không có chân cắm, nó dùng hàng chân phẳng. Cắm đúng chiều là nhìn dấu tam giác ở một góc."},{id:"cpu_ryzen_9_9920g",name:"AMD Ryzen 9 9950X3D (AM5)",category:nt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/free__cpu_3d_model_hyper_9_9920g.glb",brand:"AMD",price:"18,900,000 đ",realSize:.04,footprint:{length:.04,depth:.04},iconSvg:wt("cpu"),specs:[{label:"Socket",value:"AM5 (LGA 1718)"},{label:"Kiến trúc",value:"Zen 5 16 nhân 32 luồng"},{label:"Xung nhịp",value:"Tăng tốc 5.7 GHz"},{label:"Bộ nhớ đệm",value:"144 MB 3D V-Cache"},{label:"TDP",value:"170W"}],description:"CPU cao cấp gắn cache 3D, mạnh nhất cho game nhờ ưu tiên cache L3.",beginnerTip:"💡 TDP cao nghĩa là tản khí phải to và cần cả tản khí CPU + ốc + sơn hợp lý. Sức nóng không tự truyền ra vỏ ốc."},{id:"cpu_ryzen_3_3200g",name:"AMD Ryzen 3 3200G",category:nt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/am4_cpu__free.glb",brand:"AMD",price:"1,150,000 đ",realSize:.04,footprint:{length:.04,depth:.04},iconSvg:wt("cpu"),specs:[{label:"Socket",value:"AM4"},{label:"Kiến trúc",value:"Zen+ 2 nhân 4 luồng, tích hợp Vega 8"},{label:"Xung nhịp",value:"3.6 GHz tăng tốc 4.0 GHz"},{label:"Đồ họa tích hợp",value:"Vega 8 (không cần card rời)"},{label:"TDP",value:"65W"}],description:"CPU có VGA on-board, chạy được game nhẹ mà không cần cắm card đồ họa rời.",beginnerTip:"💡 Có đồ họa tích hợp nên máy vẫn hiện hình qua cổng của bo mạch chủ ngay cả khi chưa có card rời."},{id:"cooler_noctua_nh_c12",name:"Noctua NH-C12 Low Profile",category:nt.COOLER,categoryKey:"cooler",tag:"CPU Cooler",modelPath:"/models/CPU_Cooler_model/cpu_cooler.glb",brand:"Noctua",price:"2,650,000 đ",realSize:.124,footprint:{length:.124,depth:.124},iconSvg:wt("cooler"),specs:[{label:"Loại tản",value:"Tháp tản nhiệt thấp (down-draft)"},{label:"Chiều cao",value:"66 mm - vừa thùng mini"},{label:"Quạt",value:"2x 92mm Noctua NF-A12x15"},{label:"Tương thích",value:"Intel LGA1700/1200, AMD AM4/AM5"}],description:"Tản thấp cho thùng mini, quạt hướng xuống giúp luồng khí qua bo mạch.",beginnerTip:"💡 Tản thấp lùi được cả tản case trên cao, đổi lại hiệu năng mát kém hơn tản tháp cao."},{id:"cooler_deepcool_ak400",name:"DeepCool AK400",category:nt.COOLER,categoryKey:"cooler",tag:"CPU Cooler",modelPath:"/models/CPU_Cooler_model/cpu_cooler (1).glb",brand:"DeepCool",price:"790,000 đ",realSize:.155,footprint:{length:.155,depth:.11},iconSvg:wt("cooler"),specs:[{label:"Loại tản",value:"Tản khí 1 ống đồng"},{label:"Chiều cao",value:"155 mm"},{label:"Quạt",value:"1x 120mm (tối đa 2200 RPM)"},{label:"Tương thích",value:"Intel LGA1700/1200, AMD AM4/AM5"}],description:"Tản khí phổ thông, đủ mát cho CPU TDP 180W với giá rẻ.",beginnerTip:"💡 4 ốc siết theo hình chữ X giúp áp lực đều, tránh làm lệch tản khỏi nắp lưng CPU."},{id:"ram_kingston_fury_black",name:"Kingston FURY Beast DDR4 16GB",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/kingston_hyperx_fury_black_ram_module.glb",brand:"Kingston",price:"890,000 đ",realSize:.1334,footprint:{length:.1334,depth:.045},iconSvg:wt("ram"),specs:[{label:"Dung lượng",value:"16GB (1 thanh 2x8GB)"},{label:"Loại",value:"DDR4 DIMM không ECC"},{label:"Bus",value:"3200 MHz (PC4-25600)"},{label:"Điện áp",value:"1.35V"}],description:"DIMM DDR4 đen không đèn, tiêu tốn điện thấp và tương thích rộng.",beginnerTip:"💡 Khoảnh khắc mở giữa hai cắt khía trên module là vị trí chống lắp ngược - luôn cắm cho khớp lẹm."},{id:"ram_crucial_8gb",name:"Crucial 8GB DDR4 2133",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/crucial_8_gb_ddr4_2133_ram.glb",brand:"Crucial",price:"520,000 đ",realSize:.1334,footprint:{length:.1334,depth:.032},iconSvg:wt("ram"),specs:[{label:"Dung lượng",value:"8GB (1 thanh 1x8GB)"},{label:"Loại",value:"DDR4 DIMM không ECC"},{label:"Bus",value:"2133 MHz (JEDEC chuẩn)"}],description:"Thanh RAM DDR4 tiêu chuẩn, chạy bus mặc định an toàn cho mainboard phổ thông.",beginnerTip:"💡 Bus cao hơn bo mạch không chạy được - CPU và bo phải hỗ trợ bus đó thì mới tự ép xung lên."},{id:"ram_generic_ddr4",name:"Generic DDR4 SODIMM 8GB",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/random_access_memory_ram_ddr4.glb",brand:"Generic",price:"430,000 đ",realSize:.1334,footprint:{length:.1334,depth:.032},iconSvg:wt("ram"),specs:[{label:"Dung lượng",value:"8GB"},{label:"Loại",value:"DDR4"},{label:"Bus",value:"2666 MHz"}],description:"Module DDR4 dùng để so sánh hình dáng đầu nối và vị trí khe cắm.",beginnerTip:"💡 Khe cắm của DDR4 rộng và có nẹp khóa hai bên. Cắm lệch một răng là mainboard không nhận."},{id:"ssd_sandisk_870",name:"SanDisk SSD 870 EVO 1TB",category:nt.STORAGE,categoryKey:"storage",tag:"Storage",modelPath:"/models/SSD_model/ssd_solid_state_drive.glb",brand:"SanDisk",price:"2,450,000 đ",realSize:.1,footprint:{length:.1,depth:.07},iconSvg:wt("ssd"),specs:[{label:"Dung lượng",value:"1 TB"},{label:"Giao diện",value:"SATA III 6 Gb/s"},{label:"Tốc độ đọc",value:"560 MB/s"},{label:"Dạng",value:"2.5 inch, 7mm"}],description:'Ổ SATA 2.5" kinh điển, cắm cùng cổng với ổ cơ nên không cần cáp riêng.',beginnerTip:'💡 Ổ 2.5" không có chốt chống rung như ổ 3.5", nên chỉ cần cáp SATA dữ liệu và cáp nguồn nhỏ.'},{id:"ssd_kingston_a400",name:"Kingston A400 480GB",category:nt.STORAGE,categoryKey:"storage",tag:"Storage",modelPath:"/models/SSD_model/ssd_solid-state_drive.glb",brand:"Kingston",price:"890,000 đ",realSize:.1,footprint:{length:.1,depth:.07},iconSvg:wt("ssd"),specs:[{label:"Dung lượng",value:"480 GB"},{label:"Giao diện",value:"SATA III 6 Gb/s"},{label:"Tốc độ đọc",value:"500 MB/s"},{label:"Dạng",value:"2.5 inch"}],description:"Ổ SSD giá rẻ nhất trong bộ sưu tập, đủ dùng cho ổ hệ thống và tài liệu.",beginnerTip:"💡 Ổ rẻ thường chậm hơn khi ghi nhiều, nhưng vẫn nhanh hơn hàng trăm lần so với ổ cơ HDD."},{id:"psu_corsair_rm550",name:"Corsair RM550 550W 80 Plus Gold",category:nt.PSU,categoryKey:"psu",tag:"Power Supply",modelPath:"/models/PSU_model/psu.glb",brand:"Corsair",price:"2,190,000 đ",realSize:.15,footprint:{length:.15,depth:.15},iconSvg:wt("psu"),specs:[{label:"Công suất",value:"550 Watts"},{label:"Chứng nhận",value:"80 PLUS Gold (> 90%)"},{label:"Dạng cáp",value:"Fully Modular"},{label:"Quạt",value:"135mm Zero RPM"}],description:"Nguồn vàng full-modular, chỉ cắm đúng những cáp cần dùng nên thùng gọn sạch.",beginnerTip:"💡 Nguồn full-modular có đầu cắm riêng cho từng dây. Bỏ sót cáp 8-pin CPU là máy không lên nguồn."},{id:"psu_aerocool_kcas500",name:"Aerocool KCAS 500W 80 Plus Bronze",category:nt.PSU,categoryKey:"psu",tag:"Power Supply",modelPath:"/models/PSU_model/power_supply_aerocool_kcas_500w_atx.glb",brand:"Aerocool",price:"990,000 đ",realSize:.15,footprint:{length:.15,depth:.15},iconSvg:wt("psu"),specs:[{label:"Công suất",value:"500 Watts"},{label:"Chứng nhận",value:"80 PLUS Bronze"},{label:"Dạng cáp",value:"Non-Modular"},{label:"Đầu cấp nguồn",value:"1x 24-Pin ATX, 1x 8-Pin CPU, 1x 8-Pin PCIe"}],description:"Nguồn ATX tiêu chuẩn, cáp gộp liền, dễ dùng cho dàn máy tầm trung.",beginnerTip:"💡 Tổng công suất nguồn nên gấp khoảng 1.5 lần tổng TDP của CPU và GPU để dự phòng đỉnh điện."},{id:"gpu_gold_edition",name:"Generic Gold Edition Graphics Card",category:nt.GPU,categoryKey:"gpu",tag:"GPU",modelPath:"/models/GPU_model/gold_graphics_card.glb",brand:"Generic",price:"5,490,000 đ",realSize:.28,footprint:{length:.28,depth:.13},iconSvg:wt("gpu"),specs:[{label:"Dung lượng VRAM",value:"8GB"},{label:"Giao diện",value:"PCIe 3.0 x16"},{label:"Chiều dài",value:"280 mm"},{label:"Cổng xuất hình",value:"1x HDMI, 2x DisplayPort"}],description:"Card đồ họa bản mạ vàng dùng để so sánh kích thước với card đồ họa cao cấp.",beginnerTip:"💡 Card dài hơn 28 cm thường không vừa khe PCIe của thùng mini. Đo trước khoảng trống từ khay ổ cứng."}],H_=[{id:"mb_asus_z370",name:"ASUS ROG STRIX Z370-E GAMING",category:nt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/rog_strix_z370-e_gaming_motherboard_3d_model.glb",brand:"ASUS Republic of Gamers",price:"4,890,000 đ",realSize:.305,footprint:{length:.305,depth:.252},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="52" height="52" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <rect x="14" y="14" width="16" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="18" y="18" width="8" height="8" fill="#fbbf24"/>
      <rect x="36" y="14" width="4" height="24" rx="1" fill="#38bdf8"/>
      <rect x="44" y="14" width="4" height="24" rx="1" fill="#38bdf8"/>
      <rect x="14" y="38" width="34" height="6" rx="1" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" rx="1" fill="#a855f7"/>
    </svg>`,specs:[{label:"Socket",value:"LGA 1151 (Intel Core Gen 8/9)"},{label:"Chipset",value:"Intel Z370 Express Chipset"},{label:"Kích thước Form Factor",value:"ATX (30.5 cm x 24.4 cm)"},{label:"Khe RAM",value:"4x DDR4 DIMM (Tối đa 64GB, 4000MHz OC)"},{label:"Khe PCIe",value:"2x PCIe 3.0 x16 SafeSlot, 4x PCIe x1"},{label:"Cổng M.2 & SATA",value:"2x M.2 NVMe PCIe 3.0 x4, 6x SATA III 6Gb/s"},{label:"Âm thanh",value:"ROG SupremeFX S1220A 8-Channel HD Audio"},{label:"Kết nối mạng",value:"Intel I219-V Gigabit LAN & Wi-Fi 802.11ac"},{label:"LED RGB",value:"ASUS Aura Sync RGB Header"}],description:"Bo mạch chủ chuẩn Gaming cao cấp trang bị tản nhiệt VRM dày bản, tích hợp Wi-Fi AC và âm thanh SupremeFX S1220A chuyên nghiệp.",beginnerTip:"💡 Bo mạch chủ là nền móng kết nối tất cả linh kiện. Lắp CPU, RAM và SSD M.2 lên bo mạch chủ trước khi gắn vào thùng case để dễ thao tác nhất!"},{id:"cpu_ryzen_3600",name:"AMD Ryzen 5 3600 Processor",category:nt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/cpu_ryzen_5_3600.glb",brand:"AMD",price:"3,290,000 đ",realSize:.04,footprint:{length:.04,depth:.04},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="44" height="44" rx="4" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
      <rect x="18" y="18" width="28" height="28" rx="3" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="23" cy="23" r="2" fill="#fbbf24"/>
      <text x="32" y="35" font-size="7" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">RYZEN</text>
      <path d="M10 16h-4M10 24h-4M10 32h-4M10 40h-4M10 48h-4" stroke="#fbbf24" stroke-width="2"/>
      <path d="M54 16h4M54 24h4M54 32h4M54 40h4M54 48h4" stroke="#fbbf24" stroke-width="2"/>
    </svg>`,specs:[{label:"Số nhân / Số luồng",value:"6 Nhân / 12 Luồng (Zen 2)"},{label:"Xung nhịp cơ bản",value:"3.6 GHz (Tăng tốc tối đa 4.2 GHz)"},{label:"Tiến trình chế tạo",value:"TSMC 7nm FinFET"},{label:"Bộ nhớ đệm L3",value:"32MB GameCache"},{label:"Điện năng tiêu thụ (TDP)",value:"65 Watts"},{label:"Chuẩn Socket",value:"AMD Socket AM4"},{label:"Phiên bản PCIe",value:"PCIe 4.0 x16 Ready"},{label:"Hỗ trợ RAM",value:"DDR4 Dual-Channel lên tới 3200MHz"}],description:"Bộ vi xử lý quốc dân với hiệu năng đa nhân vượt trội, cân bằng hoàn hảo giữa chơi game eSports và làm việc đồ họa mượt mà.",beginnerTip:"💡 Khi lắp CPU, hãy tìm biểu tượng tam giác vàng ở góc con chip và căn trùng khớp với dấu tam giác trên socket. Nhẹ nhàng đặt xuống, tuyệt đối không dùng lực đè mạnh!"},{id:"cpu_intel",name:"Intel Core i7-9700K Processor",category:nt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/intel_cpu.glb",brand:"Intel",price:"4,190,000 đ",realSize:.0375,footprint:{length:.0375,depth:.0375},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="44" height="44" rx="4" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
      <rect x="18" y="18" width="28" height="28" rx="3" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <text x="32" y="35" font-size="7" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">INTEL</text>
    </svg>`,specs:[{label:"Cores/Threads",value:"8 Cores / 8 Threads"},{label:"Socket",value:"LGA 1151"}],description:"Bộ vi xử lý hiệu năng cao từ Intel.",beginnerTip:"💡 Đặt cẩn thận vào socket."},{id:"cooler_master_212",name:"Cooler Master Hyper Black Edition",category:nt.COOLER,categoryKey:"cooler",tag:"CPU Cooler",modelPath:"/models/CPU_Cooler_model/cooler_master_cpu_cooler.glb",brand:"Cooler Master",price:"890,000 đ",realSize:.154,footprint:{length:.154,depth:.12},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="10" width="36" height="38" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
      <circle cx="32" cy="29" r="13" stroke="#c084fc" stroke-width="2"/>
      <circle cx="32" cy="29" r="3.5" fill="#fbbf24"/>
      <path d="M32 16v8M32 34v8M19 29h8M37 29h8" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 48v8M28 48v8M36 48v8M44 48v8" stroke="#f97316" stroke-width="2.5"/>
    </svg>`,specs:[{label:"Dạng tản nhiệt",value:"Tháp tản nhiệt khí (Single Tower Heatsink)"},{label:"Ống dẫn nhiệt (Heatpipes)",value:"4 ống đồng Direct Contact 6mm mạ niken"},{label:"Kích thước quạt",value:"120 x 120 x 25 mm Silencio FP"},{label:"Tốc độ quay quạt",value:"650 - 2,000 RPM (PWM) ± 10%"},{label:"Lưu lượng gió tối đa",value:"59 CFM, Áp suất khí 2.1 mmH2O"},{label:"Độ ồn hoạt động",value:"8 - 30 dBA (Vận hành cực êm)"},{label:"Socket tương thích",value:"Intel LGA 1700/1200/115x & AMD AM4/AM5"}],description:"Giải pháp làm mát khí kinh điển với các lá tản nhiệt nhôm mạ niken tối ưu khí động học và cụm tiếp xúc 4 ống đồng nguyên chất.",beginnerTip:"💡 Đừng quên bôi một lượng keo tản nhiệt (cỡ hạt đậu) lên giữa nắp lưng CPU trước khi siết ốc tản nhiệt để truyền nhiệt tốt nhất!"},{id:"ram_gskill_tridentz_16gb",name:"G.SKILL Trident Z RGB 16GB (2x8GB) DDR4",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb",brand:"G.SKILL",price:"1,750,000 đ",realSize:.1334,footprint:{length:.1334,depth:.051},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="48" height="28" rx="3" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
      <rect x="10" y="20" width="44" height="6" rx="2" fill="url(#rgbGrad)"/>
      <rect x="14" y="30" width="8" height="10" fill="#334155"/>
      <rect x="26" y="30" width="8" height="10" fill="#334155"/>
      <rect x="38" y="30" width="8" height="10" fill="#334155"/>
      <path d="M12 46v4M16 46v4M20 46v4M24 46v4M36 46v4M40 46v4M44 46v4M48 46v4" stroke="#fbbf24" stroke-width="1.5"/>
      <defs>
        <linearGradient id="rgbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#ec4899"/>
          <stop offset="100%" stop-color="#fbbf24"/>
        </linearGradient>
      </defs>
    </svg>`,specs:[{label:"Dung lượng bộ nhớ",value:"16GB (Kit 2 thanh x 8GB)"},{label:"Chuẩn RAM",value:"DDR4 Unbuffered DIMM"},{label:"Tốc độ Bus RAM",value:"3200 MHz (PC4-25600)"},{label:"Độ trễ Timing (CAS)",value:"CL16-18-18-38"},{label:"Điện áp danh định",value:"1.35V"},{label:"Cấu hình ép xung",value:"Intel XMP 2.0 (Extreme Memory Profile)"},{label:"Hiệu ứng ánh sáng",value:"LED RGB Dynamic Flow 5 vùng sáng"},{label:"Chất liệu tản nhiệt",value:"Hợp kim nhôm xước hairline cao cấp"}],description:"Thanh RAM cao cấp hàng đầu thế giới với dải LED RGB cầu vồng sống động cùng IC được tuyển chọn kỹ lưỡng cho khả năng ép xung tối đa.",beginnerTip:"💡 Khi cắm 2 thanh RAM trên bo mạch chủ có 4 khe, hãy cắm vào khe 2 và khe 4 (khe DIMM A2 & B2) để kích hoạt chế độ Kênh Đôi (Dual-Channel) giúp tăng gấp đôi băng thông nhớ!"},{id:"ram_corsair_dominator",name:"Corsair Dominator Platinum RGB 16GB",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/corsair_dominator_rgb_ram.glb",brand:"Corsair",price:"2,150,000 đ",realSize:.1334,footprint:{length:.1334,depth:.06},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="48" height="28" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    </svg>`,specs:[{label:"Dung lượng",value:"16GB DDR4"},{label:"Bus",value:"3600MHz"}],description:"Thanh RAM cao cấp tản nhiệt nhôm độc quyền.",beginnerTip:"💡 Cắm chặt vào khe DIMM."},{id:"ram_gskill_tridentz_16gb_b",name:"G.SKILL Trident Z RGB 16GB (2x8GB) DDR4 - Kit B",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb",brand:"G.SKILL",price:"1,750,000 đ",realSize:.1334,footprint:{length:.1334,depth:.051},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="48" height="28" rx="3" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
      <rect x="10" y="20" width="44" height="6" rx="2" fill="#38bdf8"/>
      <rect x="14" y="30" width="8" height="10" fill="#334155"/>
      <rect x="26" y="30" width="8" height="10" fill="#334155"/>
      <rect x="38" y="30" width="8" height="10" fill="#334155"/>
      <path d="M12 46v4M16 46v4M20 46v4M24 46v4M36 46v4M40 46v4M44 46v4M48 46v4" stroke="#fbbf24" stroke-width="1.5"/>
    </svg>`,specs:[{label:"Dung lượng bộ nhớ",value:"16GB (Kit 2 thanh x 8GB)"},{label:"Chuẩn RAM",value:"DDR4 Unbuffered DIMM"},{label:"Tốc độ Bus RAM",value:"3200 MHz (PC4-25600)"},{label:"Độ trễ Timing (CAS)",value:"CL16-18-18-38"},{label:"Hiệu ứng ánh sáng",value:"LED RGB Dynamic Flow 5 vùng sáng"}],description:"Kit RAM DDR4 thứ hai cùng series để ghép thành cặp kênh đôi hoàn chỉnh trong cùng một bộ máy.",beginnerTip:"💡 Nên dùng hai thanh cùng brand, cùng bus, cùng timing để kênh đôi chạy ổn định nhất."},{id:"ram_corsair_dominator_b",name:"Corsair Dominator Platinum RGB 16GB - Kit B",category:nt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/corsair_dominator_rgb_ram.glb",brand:"Corsair",price:"2,150,000 đ",realSize:.1334,footprint:{length:.1334,depth:.06},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="48" height="28" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <rect x="10" y="20" width="44" height="6" rx="2" fill="#fbbf24"/>
    </svg>`,specs:[{label:"Dung lượng",value:"16GB DDR4"},{label:"Bus",value:"3600MHz"}],description:"Kit RAM Corsair Dominator Platinum thứ hai, dành cho người muốn ghép cặp DIMM high-end.",beginnerTip:"💡 Lắp vào khe DIMM A2 và B2 để kích hoạt kênh đôi."},{id:"ssd_samsung_860",name:'Samsung 860 EVO 500GB 2.5" SATA III',category:nt.STORAGE,categoryKey:"storage",tag:"Storage",modelPath:"/models/SSD_model/samsung_ssd_2.5in_-_dirty.glb",brand:"Samsung",price:"1,450,000 đ",realSize:.1,footprint:{length:.1,depth:.07},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="40" height="44" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
      <rect x="26" y="24" width="12" height="12" fill="#f97316"/>
      <text x="32" y="44" font-size="6" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">SAMSUNG</text>
      <rect x="20" y="10" width="24" height="3" fill="#fbbf24"/>
    </svg>`,specs:[{label:"Dung lượng lưu trữ",value:"500 GB"},{label:"Kích thước Form Factor",value:"2.5 inch (Độ dày 6.8 mm)"},{label:"Giao tiếp kết nối",value:"SATA III 6Gb/s"},{label:"Tốc độ đọc tuần tự",value:"Lên tới 550 MB/s"},{label:"Tốc độ ghi tuần tự",value:"Lên tới 520 MB/s"},{label:"Công nghệ NAND Flash",value:"Samsung V-NAND 3-bit MLC (3D TLC)"},{label:"Bộ điều khiển Controller",value:"Samsung MJX Controller"},{label:"Độ bền ghi (TBW)",value:"300 TBW (Bảo hành 5 năm)"}],description:"Ổ cứng SSD thể rắn huyền thoại từ Samsung đem lại độ bền bỉ phi thường, khởi động hệ điều hành và tải ứng dụng chỉ trong chớp mắt.",beginnerTip:"💡 Ổ cứng SSD không có bộ phận chuyển động cơ học nên chống sốc cực tốt và hoàn toàn im lặng. Kết nối cáp dữ liệu SATA từ ổ cứng vào bo mạch chủ và cáp nguồn từ PSU!"},{id:"psu_aerocool_650w",name:"Aerocool MasterWatt 650W 80 Plus Bronze",category:nt.PSU,categoryKey:"psu",tag:"Power Supply",modelPath:"/models/PSU_model/psu_power_supply_unit.glb",brand:"Cooler Master / Aerocool",price:"1,590,000 đ",realSize:.15,footprint:{length:.15,depth:.15},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="44" height="40" rx="4" fill="#0f172a" stroke="#f97316" stroke-width="2"/>
      <circle cx="32" cy="32" r="14" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="32" cy="32" r="4" fill="#f97316"/>
      <rect x="14" y="16" width="6" height="4" fill="#ef4444"/>
      <path d="M46 16v12M50 16v12" stroke="#fbbf24" stroke-width="1.5"/>
    </svg>`,specs:[{label:"Công suất thực định mức",value:"650 Watts liên tục"},{label:"Chứng nhận hiệu suất",value:"80 PLUS Bronze (Hiệu suất đạt > 85%)"},{label:"Dạng cáp nguồn",value:"Semi-Modular (Cáp dẹt đen chống rối)"},{label:"Quạt làm mát",value:"120mm Silent LDB Fan điều tốc tự động"},{label:"Các chế độ bảo vệ",value:"OVP, OPP, SCP, OCP, UVP, OTP"},{label:"Đầu cấp nguồn (Connectors)",value:"1x 24-Pin ATX, 1x 8-Pin CPU EPS, 2x 8-Pin PCIe, 6x SATA"},{label:"Đường điện 12V",value:"Single Rail 12V 54A công suất tối đa"}],description:"Trái tim cấp năng lượng bền bỉ cho toàn bộ dàn máy với tụ điện thể rắn cao cấp chịu nhiệt 105°C và đường 12V Single Rail công suất cao.",beginnerTip:"💡 Luôn lắp nguồn với quạt hút hướng xuống lưới lọc bụi dưới đáy thùng máy để hút không khí mát từ bên ngoài phòng vào làm mát linh kiện nguồn!"},{id:"gpu_rtx_3090",name:"NVIDIA GeForce RTX 3090 Founders Edition",category:nt.GPU,categoryKey:"gpu",tag:"GPU",modelPath:"/models/GPU_model/nvidia_geforce_rtx_3090_-_gpu.glb",brand:"NVIDIA",price:"34,900,000 đ",realSize:.313,footprint:{length:.313,depth:.15},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="32" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <circle cx="22" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="22" cy="32" r="3" fill="#22c55e"/>
      <circle cx="44" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="44" cy="32" r="3" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" fill="#fbbf24"/>
      <rect x="4" y="12" width="3" height="40" fill="#94a3b8"/>
    </svg>`,specs:[{label:"Nhân đồ họa CUDA",value:"10,496 CUDA Cores"},{label:"Bộ nhớ VRAM",value:"24 GB GDDR6X (Băng thông 936 GB/s)"},{label:"Độ rộng băng thông bus",value:"384-bit"},{label:"Xung nhịp Boost Clock",value:"1.70 GHz"},{label:"Công nghệ AI & Ray Tracing",value:"RT Cores Gen 2 & Tensor Cores Gen 3 (DLSS)"},{label:"Công suất tiêu thụ TDP",value:"350 Watts"},{label:"Nguồn phụ yêu cầu",value:"2x 8-Pin PCIe (Khuyến nghị nguồn > 750W)"},{label:"Cổng xuất hình",value:"1x HDMI 2.1, 3x DisplayPort 1.4a"}],description:"Quái thú đồ họa (BFGPU) đỉnh cao nhất thế giới cho phép trải nghiệm game mượt mà ở độ phân giải 8K HDR và dựng hình 3D, Render video chuyên nghiệp.",beginnerTip:"💡 Card đồ họa rất nặng và tiêu thụ nhiều điện. Hãy lắp vào khe PCIe x16 trên cùng gần CPU nhất để đạt tốc độ tối đa, siết chặt ốc giữ ở thành case và cắm đủ nguồn 8-Pin PCIe!"},{id:"gpu_rx_480",name:"AMD Radeon RX 480 8GB GDDR5",category:nt.GPU,categoryKey:"gpu",tag:"GPU",modelPath:"/models/GPU_model/rx_480_gpu.glb",brand:"AMD",price:"2,990,000 đ",realSize:.24,footprint:{length:.24,depth:.135},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="32" rx="4" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
    </svg>`,specs:[{label:"VRAM",value:"8GB GDDR5"},{label:"Bus",value:"256-bit"}],description:"Card đồ họa tầm trung bền bỉ.",beginnerTip:"💡 Lắp vào khe PCIe x16."}],Br=[...H_,...G_],yt={x:3.3,z:0,minWidth:.72,minLength:2.1,maxWidth:1.3,height:.86,topHeight:.82,topThickness:.045,legSize:.07,shelfHeight:.3,shelfThickness:.03,tierHeights:[.82],tierSurfaces:[.82],edgeMargin:.14,sideMargin:.12,maxGap:.05,rowGap:.05};function V_(r){const e=yt.maxWidth-yt.sideMargin*2,t=r+yt.rowGap;return Math.max(1,Math.min(3,Math.floor((e+yt.rowGap)/t)))}function W_(r,e,t,n){const i=Array.from({length:t},()=>[]);[...r].sort((c,l)=>l.footprint.length-c.footprint.length).forEach(c=>{let l=0;for(let h=1;h<t;h++)i[h].reduce((u,d)=>u+d.footprint.length,0)<i[l].reduce((u,d)=>u+d.footprint.length,0)&&(l=h);i[l].push(c)});const o=e+yt.rowGap,a=n-yt.edgeMargin*2;return i.forEach((c,l)=>{const h=yt.x+(l-(t-1)/2)*o;c.sort((_,p)=>p.footprint.length-_.footprint.length);const u=c.reduce((_,p)=>_+p.footprint.length,0),d=c.length>1?Math.min(yt.maxGap,Math.max(0,(a-u)/(c.length-1))):0,f=u+d*(c.length-1);let g=-f/2;c.forEach(_=>{_.position={x:h,y:yt.tierSurfaces[0],z:yt.z+g+_.footprint.length/2},_.row=l,g+=_.footprint.length+d}),c.totalLength=f}),i}function X_(){const r=Br.filter(l=>l.footprint).map(l=>({item:l,footprint:l.footprint})),e=r.reduce((l,h)=>Math.max(l,h.footprint.depth),0),t=V_(e),i=r.reduce((l,h)=>l+h.footprint.length,0)/t,s=yt.maxGap*(r.length/t-1),o=Math.max(yt.minLength,i+s+yt.edgeMargin*2),a=Math.max(yt.minWidth,t*(e+yt.rowGap)-yt.rowGap+yt.sideMargin*2),c=W_(r,e,t,o);return{table:{...yt,width:a,length:o,rows:t,rowPitch:e+yt.rowGap,maxPartDepth:e},tiers:[{index:0,height:yt.tierHeights[0],surface:yt.tierSurfaces[0],rows:c,entries:r}]}}let Do=null;function kr(){return Do||(Do=X_()),Do}function q_(){const{table:r}=kr(),e=.15;return{minX:r.x-r.width/2-e,maxX:r.x+r.width/2+e,minZ:r.z-r.length/2-e,maxZ:r.z+r.length/2+e}}const ti={width:.21,height:.46,depth:.45,feet:.018,sheet:.009,glass:.004},{width:At,height:Tt,depth:ln,feet:Os,sheet:Et,glass:Ir}=ti,Jt={yFloor:Os+Et,yTop:Os+Tt,zRear:-ln/2,zFront:ln/2,xGlassOuter:At/2,xGlassInner:At/2-Ir,xPlainInner:-At/2+Et},Bs=Jt.zRear+.03,rc=.244,oc=.305,rs=Jt.yTop-.05,ni={z0:Bs,z1:Bs+rc,top:rs,bottom:rs-oc,get centreY(){return(this.top+this.bottom)/2},get centreZ(){return(this.z0+this.z1)/2}},Xe={x:-.05,thickness:.008,get face(){return this.x+this.thickness/2},get back(){return this.x-this.thickness/2},z0:ni.z0-.007,z1:ni.z1+.012,y0:.122,y1:Jt.yTop-.012,rearTop:.36,rearTopStrip:.46,cutSize:.078,cutY:rs-.05,cutZ:Bs+.115,get cutY0(){return this.cutY-this.cutSize/2},get cutY1(){return this.cutY+this.cutSize/2},get cutZ0(){return this.cutZ-this.cutSize/2},get cutZ1(){return this.cutZ+this.cutSize/2}},zn={top:.122,x0:Jt.xPlainInner,x1:.048,z0:Jt.zRear+.006,z1:.14,get depth(){return this.z1-this.z0},get width(){return this.x1-this.x0},get midZ(){return(this.z0+this.z1)/2},get midX(){return(this.x0+this.x1)/2}},dt={plane:Jt.zRear+Et/2,centreY:Os+Tt/2,halfW:(At-.004)/2,halfH:(Tt-.008)/2,fan:{x:-.012,y:.409,r:.057},io:{y:.326},slots:{x:-.012,top:.2865,pitch:.0203,span:.145},psu:{x:-.024,w:.14,h:.086,y:Jt.yFloor+.043}};dt.slots.y=dt.slots.top-dt.slots.span/2;dt.toLocalY=r=>r-dt.centreY;const vn={fan:{x:0,z:.045,r:.07},io:{x:-.02,z:Jt.zFront-.05}};function Wh(){return[[Xe.y0,Xe.rearTop,Xe.z0,Xe.cutZ0],[Xe.rearTopStrip,Xe.y1,Xe.z0,Xe.cutZ0],[Xe.y0,Xe.cutY0,Xe.cutZ0,Xe.cutZ1],[Xe.cutY1,Xe.y1,Xe.cutZ0,Xe.cutZ1],[Xe.y0,Xe.y1,Xe.cutZ1,Xe.z1]]}function K_(r,e){return Wh().some(([t,n,i,s])=>r>=t&&r<=n&&e>=i&&e<=s)}const Xh=[[.011,.006],[.011,.075],[.011,.144],[.101,.006],[.101,.144],[.191,.006],[.191,.075],[.191,.144],[.101,.222]].map(([r,e])=>({y:rs-e,z:Bs+r})),zl=Xh.filter(r=>K_(r.y,r.z)),Gl=(rs+(rs-oc))/2,Hl=Bs+rc/2,Zt={glass:{label:"Nắp kính cường lực",anchor:[Jt.xGlassOuter,Os+Tt/2,0],size:[.02,Tt-.012,ln-.012],mount:{long:[0,1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.008,screws:4,screwPts:[[-.17,-.17],[-.17,.17],[.17,-.17],[.17,.17]]},motherboard:{label:"Vị trí bo mạch chủ ATX",anchor:[Xe.face+.002,Gl,Hl],size:[.006,oc,rc],mount:{long:[0,1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.014,screws:zl.length,screwPts:zl.map(r=>[r.y-Gl,r.z-Hl])},cpu:{label:"Socket CPU",anchor:[Xe.face+.003,Xe.cutY,Xe.cutZ],size:[.01,.042,.042],mount:{long:[0,1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.008,screws:0},cooler:{label:"Tản nhiệt khí trên socket",anchor:[Xe.face+.072,Xe.cutY+.015,Xe.cutZ],size:[.14,.16,.12],mount:{long:[0,1,0],thin:[0,0,1]},face:[1,0,0],faceLift:.15,screws:4,screwPts:[[-.033,-.033],[-.033,.033],[.033,-.033],[.033,.033]]},ram:{label:"Khe RAM DDR4 (cắm khe 2 & 4)",anchor:[Xe.face+.008,ni.bottom+.1,ni.z1-.045],size:[.014,.05,.132],mount:{long:[0,1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.012,screws:0},ssd:{label:'Khay ổ cứng 2.5" trên tấm che nguồn',anchor:[-.01,zn.top+.005,.05],size:[.1,.008,.07],mount:{long:[1,0,0],thin:[0,1,0]},face:[0,1,0],faceLift:.01,screws:2,screwPts:[[0,-.03],[0,.03]]},psu:{label:"Hộc nguồn ATX dưới đáy",anchor:[zn.midX,Jt.yFloor+.043,zn.z0+.075],size:[zn.width-.01,.086,.15],mount:{long:[1,0,0],thin:[0,1,0]},face:[1,0,0],faceLift:.085,screws:4,screwPts:[[-.03,-.06],[-.03,.06],[.03,-.06],[.03,.06]]},gpu:{label:"Khe PCIe x16",anchor:[Xe.face+.062,dt.slots.top-.009,ni.z0+.157],size:[.112,.05,.313],mount:{long:[0,0,1],thin:[1,0,0]},face:[0,1,0],faceLift:.032,screws:2,screwPts:[[-.12,-.05],[-.12,.05]]},cables:{label:"Dây nguồn 24-pin & 8-pin CPU",anchor:[Xe.back-.012,ni.centreY,ni.centreZ],size:[.03,.14,.12],face:[-1,0,0],faceLift:.01,screws:0},display:{label:"Cổng xuất hình DisplayPort",anchor:[-.03,dt.io.y,Jt.zRear+.012],size:[.05,.05,.02],face:[0,0,-1],faceLift:.006,screws:0},power:{label:"Nút nguồn trên nắp trên",anchor:[vn.io.x,Jt.yTop+.004,vn.io.z],size:[.022,.012,.022],face:[0,1,0],faceLift:.004,screws:0}};function Vl(r){const e=r.mount;if(!e)return null;const t=e.edges?{x:new E(...e.edges.long).normalize(),y:new E(...e.edges.thin).normalize(),z:new E(...e.edges.width).normalize()}:{x:new E(...e.long).normalize(),y:new E(...e.thin).normalize(),z:new E().crossVectors(new E(...e.long),new E(...e.thin)).normalize()},n=new ze().makeBasis(t.x,t.y,t.z);return Math.abs(n.determinant())<1e-6?null:new dn().setFromRotationMatrix(n)}const Wl={min:[-At/2,0,-ln/2],max:[At/2,Os+Tt,ln/2]};class Y_{constructor(e){this.scene=e,this.group=new Je,this.colliders=[],this.surfaces=[],this.interactables=[],this.monitorTexture=null,this.monitorCanvas=null,this.monitorContext=null,this.monitorScreenMesh=null,this.monitorState="OFF",this.postProgress=0,this.rgbTime=0,this.createRoom(),this.createWorkbench(),this.createPartsTable(),this.createComputerCasePlaceholder(),this.createMonitor(),this.createPeripherals(),this.createDecorations(),this.scene.add(this.group)}createRoom(){const i=document.createElement("canvas");i.width=512,i.height=512;const s=i.getContext("2d");s.fillStyle="#e5e0d8",s.fillRect(0,0,512,512),s.strokeStyle="#d0cac0",s.lineWidth=3;for(let A=0;A<=512;A+=64)s.beginPath(),s.moveTo(0,A),s.lineTo(512,A),s.stroke();for(let A=0;A<512;A+=64){const P=A/64%2===0?0:128;for(let b=P;b<=512;b+=256)s.beginPath(),s.moveTo(b,A),s.lineTo(b,A+64),s.stroke()}const o=new xi(i);o.wrapS=jt,o.wrapT=jt,o.repeat.set(6,5);const a=new ht({map:o,roughness:.45,metalness:.05}),c=new Pe(new Lt(12,10),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.userData={isFloor:!0},this.group.add(c),this.surfaces.push(c);const l=new ht({color:16448250,roughness:.9}),h=new Pe(new Lt(12,10),l);h.rotation.x=Math.PI/2,h.position.y=4.2,this.group.add(h);const u=new ht({color:16053232,roughness:.8}),d=new ht({color:15263457,roughness:.7}),f=new Pe(new Lt(12,4.2),d);f.position.set(0,4.2/2,-10/2),f.receiveShadow=!0,this.group.add(f);const g=new Pe(new Lt(12,4.2),u);g.rotation.y=Math.PI,g.position.set(0,4.2/2,10/2),this.group.add(g);const _=new Pe(new Lt(10,4.2),u);_.rotation.y=Math.PI/2,_.position.set(-12/2,4.2/2,0),this.group.add(_);const p=new ht({color:2236962,roughness:.3}),m=new Pe(new Le(.1,2.4,5),p);m.position.set(-12/2+.05,2.2,0),this.group.add(m);const T=new Wt({color:14545151,transparent:!0,opacity:.85}),M=new Pe(new Le(.05,2.2,4.8),T);M.position.set(-12/2+.05,2.2,0),this.group.add(M);const v=new Pe(new Lt(10,4.2),u);v.rotation.y=-Math.PI/2,v.position.set(12/2,4.2/2,0),v.receiveShadow=!0,this.group.add(v);const L=new ht({color:16777215,roughness:.4}),I=new Pe(new Le(12,.15,.04),L);I.position.set(0,.075,-10/2+.02),this.group.add(I)}createWorkbench(){const s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle="#6b4724",o.fillRect(0,0,512,512);for(let T=0;T<50;T++){const M=Math.random()*512;o.strokeStyle=Math.random()>.5?"#553617":"#7d542d",o.lineWidth=2+Math.random()*4,o.beginPath(),o.moveTo(0,M),o.bezierCurveTo(150,M+(Math.random()-.5)*20,350,M+(Math.random()-.5)*20,512,M),o.stroke()}const a=new xi(s);a.wrapS=jt,a.wrapT=jt,a.repeat.set(2,1);const c=new ht({map:a,roughness:.35,metalness:.05}),l=new Pe(new Le(2.6,.06,1.2),c);l.position.set(0,.82-.06/2,0),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.surfaces.push(l);const h=new ht({color:2040358,roughness:.4,metalness:.8}),u=.82-.06;[[-2.6/2+.1,u/2,-1.2/2+.1],[2.6/2-.1,u/2,-1.2/2+.1],[-2.6/2+.1,u/2,1.2/2-.1],[2.6/2-.1,u/2,1.2/2-.1]].forEach(([T,M,v])=>{const L=new Pe(new Le(.08,u,.08),h);L.position.set(T,M,v),L.castShadow=!0,L.receiveShadow=!0,this.group.add(L)});const f=new Pe(new Le(2.6-.2,.05,.05),h);f.position.set(0,.25,-1.2/2+.1),this.group.add(f),this.colliders.push({minX:-2.6/2-.2,maxX:2.6/2+.2,minZ:-1.2/2-.2,maxZ:1.2/2+.2});const g=new ht({color:1712432,roughness:.6,metalness:.1}),_=new Pe(new Le(1.4,.005,.8),g);_.position.set(-.25,.82+.003,0),_.receiveShadow=!0,this.group.add(_),this.surfaces.push(_);const p=new Wt({color:3900150}),m=new Pe(new Le(1.38,.006,.01),p);m.position.set(-.25,.82+.004,-.39),this.group.add(m)}createPartsTable(){const{table:e}=kr(),t=e.x,n=e.z,i=e.width,s=e.length,o=e.legSize,a=document.createElement("canvas");a.width=256,a.height=256;const c=a.getContext("2d");c.fillStyle="#f4f1ea",c.fillRect(0,0,256,256);for(let A=0;A<70;A++){const P=Math.random()*256;c.strokeStyle=`rgba(190, 182, 168, ${.1+Math.random()*.22})`,c.lineWidth=1+Math.random()*2.5,c.beginPath(),c.moveTo(0,P),c.bezierCurveTo(70,P+(Math.random()-.5)*8,180,P+(Math.random()-.5)*8,256,P),c.stroke()}const l=new xi(a);l.wrapS=jt,l.wrapT=jt,l.repeat.set(2,Math.max(2,Math.round(s*1.4)));const h=new ht({map:l,color:16777215,roughness:.42,metalness:.03}),u=new ht({color:15328732,roughness:.55,metalness:.04}),d=new ht({color:14078406,roughness:.6,metalness:.05}),f=new Pe(new Le(i,e.topThickness,s),h);f.position.set(t,e.topHeight-e.topThickness/2,n),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),this.surfaces.push(f);const g=new Pe(new Le(.02,e.topThickness+.008,s),d);g.position.set(t-i/2-.008,e.topHeight-e.topThickness/2-.002,n),g.castShadow=!0,this.group.add(g),e.tierSurfaces.slice(1).forEach(A=>{const P=new Pe(new Le(i-.06,e.shelfThickness,s-.1),h);P.position.set(t,A-e.shelfThickness/2,n),P.castShadow=!0,P.receiveShadow=!0,this.group.add(P),this.surfaces.push(P)});const _=e.height-e.topThickness,p=new Le(o,_,o),m=.09;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([A,P])=>{const b=new Pe(p,u);b.position.set(t+A*(i/2-m),_/2,n+P*(s/2-m)),b.castShadow=!0,b.receiveShadow=!0,this.group.add(b)}),[-1,1].forEach(A=>{const P=new Pe(new Le(o,_,o),u);P.position.set(t,_/2,n+A*(s/2-m)),P.castShadow=!0,this.group.add(P)});const T=d;[-1,1].forEach(A=>{const P=new Pe(new Le(i-m*2,.07,.025),T);P.position.set(t,e.topHeight-e.topThickness-.05,n+A*(s/2-m)),P.castShadow=!0,this.group.add(P)}),[-1,1].forEach(A=>{const P=new Pe(new Le(.025,.05,s-m*2),T);P.position.set(t+A*(i/2-m),e.shelfHeight-.05,n),P.castShadow=!0,this.group.add(P)});const M=document.createElement("canvas");M.width=1024,M.height=128;const v=M.getContext("2d");v.fillStyle="#e8e3d8",v.fillRect(0,0,1024,128),v.strokeStyle="#9aa4b2",v.lineWidth=4,v.strokeRect(6,6,1012,116),v.font='bold 52px "Segoe UI", sans-serif',v.fillStyle="#475569",v.textAlign="center",v.textBaseline="middle",v.fillText("B� LINH KI?N PH?N C?NG",512,66);const L=new xi(M),I=new Pe(new Lt(1.15,.144),new ht({map:L,roughness:.5}));I.position.set(t-i/2-.019,e.topHeight-.12,n),I.rotation.y=-Math.PI/2,this.group.add(I),this.colliders.push({minX:t-i/2-.2,maxX:t+i/2+.2,minZ:n-s/2-.2,maxZ:n+s/2+.2})}createMonitor(){const i=new ht({color:1118999,roughness:.3,metalness:.8}),s=new Pe(new Le(.35,.015,.24),i);s.position.set(.75,.82+.01,-.2),s.receiveShadow=!0,this.group.add(s);const o=new Pe(new Le(.05,.35,.05),i);o.position.set(.75,.82+.18,-.2-.06),o.rotation.x=-.1,this.group.add(o);const a=.68,c=.4,l=new Pe(new Le(a,c,.03),i);l.position.set(.75,.82+.34,-.2),l.rotation.y=-.25,this.group.add(l),this.monitorCanvas=document.createElement("canvas"),this.monitorCanvas.width=1024,this.monitorCanvas.height=576,this.monitorContext=this.monitorCanvas.getContext("2d"),this.monitorTexture=new xi(this.monitorCanvas),this.monitorTexture.minFilter=$t,this.renderMonitorScreen();const h=new Wt({map:this.monitorTexture});this.monitorScreenMesh=new Pe(new Lt(a-.02,c-.02),h),this.monitorScreenMesh.position.set(0,0,.016),l.add(this.monitorScreenMesh),l.userData={type:"monitor"},this.interactables.push(l)}createPeripherals(){const t=new ht({color:1974825,roughness:.5}),n=new Pe(new Le(.44,.02,.15),t);n.position.set(.45,.82+.01,.22),n.rotation.y=-.15,this.group.add(n);const i=new Wt({color:65535}),s=new Pe(new Le(.42,.005,.01),i);s.position.set(.45,.82+.022,.29),s.rotation.y=-.15,this.group.add(s);const o=new ht({color:2237998,roughness:.4}),a=new Pe(new Le(.07,.03,.12),o);a.position.set(.82,.82+.015,.2),a.rotation.y=-.1,this.group.add(a);const c=new ht({color:3900150,roughness:.3,metalness:.7}),l=new Pe(new kt(.012,.012,.2),c);l.rotation.z=Math.PI/2,l.position.set(-.95,.82+.015,.25),this.group.add(l);const h=new ht({color:9741240,roughness:.3}),u=new Pe(new kt(.008,.008,.12),h);u.rotation.z=Math.PI/2,u.rotation.y=.4,u.position.set(-.92,.82+.01,.1),this.group.add(u)}createComputerCasePlaceholder(){const{caseGroup:e,interactables:t}=qh();e.position.set(-.25,.825,-.05),e.rotation.y=-Math.PI/4,e.name="benchCasePlaceholder",t.forEach(n=>{n.userData={type:"computerCase",isCasePlaceholder:!0}}),this.group.add(e),this.casePlaceholder=e,this.interactables.push(...t)}createDecorations(){const e=(i,s,o,a,c)=>{const l=document.createElement("canvas");l.width=512,l.height=720;const h=l.getContext("2d");h.fillStyle="#090d16",h.fillRect(0,0,512,720),h.strokeStyle=o,h.lineWidth=12,h.strokeRect(16,16,480,688),h.strokeStyle="rgba(255,255,255,0.1)",h.lineWidth=2;for(let f=0;f<720;f+=40)h.beginPath(),h.moveTo(30,f),h.lineTo(480,f),h.stroke();h.fillStyle=o,h.font='bold 52px "Segoe UI", sans-serif',h.textAlign="center",h.fillText(i,256,320),h.font='28px "Segoe UI", sans-serif',h.fillStyle="#cbd5e1",h.fillText(s,256,380);const u=new xi(l),d=new Pe(new Lt(1.2,1.7),new ht({map:u,roughness:.4}));d.position.set(a,c,-4.95),this.group.add(d)};e("PC MASTER RACE","BUILD � OPTIMIZE � GAME","#38bdf8",-2.8,2.5),e("STAY COOL","HIGH AIRFLOW & LOW TEMPS","#a855f7",0,2.5);const t=new ht({color:2236962}),n=new Wt({color:16777215});for(let i=-3;i<=3;i+=3){const s=new Pe(new Le(.2,.08,4),t);s.position.set(i,4.16,0),this.group.add(s);const o=new Pe(new Le(.12,.01,3.8),n);o.position.set(i,4.11,0),this.group.add(o)}}setMonitorState(e){this.monitorState=e,this.renderMonitorScreen()}renderMonitorScreen(){const e=this.monitorContext;if(!e)return;const t=this.monitorCanvas.width,n=this.monitorCanvas.height;if(e.clearRect(0,0,t,n),this.monitorState==="OFF")e.fillStyle="#05070a",e.fillRect(0,0,t,n);else if(this.monitorState==="NO_SIGNAL")e.fillStyle="#090d16",e.fillRect(0,0,t,n),e.fillStyle="#ef4444",e.font='bold 44px "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("NO SIGNAL",t/2,n/2-30),e.fillStyle="#94a3b8",e.font='26px "Segoe UI", sans-serif',e.fillText("Vui l�ng k?t n?i c�p DisplayPort / HDMI t? Card d? h?a",t/2,n/2+30);else if(this.monitorState==="POST")e.fillStyle="#000000",e.fillRect(0,0,t,n),e.fillStyle="#38bdf8",e.font="bold 32px monospace",e.textAlign="left",e.fillText("AMERICAN MEGATRENDS / PC BUILDER BIOS v3.80",50,70),e.fillStyle="#f8fafc",e.font="22px monospace",e.fillText("Main Processor : AMD Ryzen 5 3600 6-Core Processor @ 3.60GHz",50,140),e.fillText("Memory Testing : 16384KB OK (Dual-Channel DDR4 3200MHz)",50,180),e.fillText("Primary Storage: Samsung SSD 860 EVO 500GB (SATA 6Gb/s)",50,220),e.fillText("Display Adapter: NVIDIA GeForce RTX 3090 (24576MB VRAM)",50,260),e.fillText("Power Supply   : 650W ATX Power Good Signal Detected [OK]",50,300),e.fillStyle="#22c55e",e.font="bold 26px monospace",e.fillText(">>> POWER-ON SELF-TEST COMPLETED SUCCESSFULLY!",50,380),e.fillText(">>> BOOTING SYSTEM...",50,420),e.fillStyle="#1e293b",e.fillRect(50,480,t-100,24),e.fillStyle="#38bdf8",e.fillRect(50,480,(t-100)*Math.min(1,this.postProgress),24);else if(this.monitorState==="OS"){const i=e.createLinearGradient(0,0,t,n);i.addColorStop(0,"#0f172a"),i.addColorStop(.5,"#1e1b4b"),i.addColorStop(1,"#0284c7"),e.fillStyle=i,e.fillRect(0,0,t,n),e.strokeStyle="rgba(255, 255, 255, 0.06)";for(let o=0;o<t;o+=64)e.beginPath(),e.moveTo(o,0),e.lineTo(o,n),e.stroke();e.fillStyle="#ffffff",e.font='bold 46px "Segoe UI", sans-serif',e.textAlign="center",e.fillText("?? CH�C M?NG B?N �� L?P R�P TH�NH C�NG!",t/2,130),e.fillStyle="#38bdf8",e.font='26px "Segoe UI", sans-serif',e.fillText("PC BUILDER OS � H? TH?NG HO?T �?NG HO�N H?O",t/2,180),e.fillStyle="rgba(15, 23, 42, 0.75)",e.strokeStyle="#38bdf8",e.lineWidth=2,e.roundRect(140,220,t-280,260,16),e.fill(),e.stroke(),e.font='22px "Segoe UI", sans-serif',e.textAlign="left",e.fillStyle="#e2e8f0",["? CPU : AMD Ryzen 5 3600 (6 Cores / 12 Threads) - Nhi?t d?: 38�C [M�t m?]","?? GPU : NVIDIA GeForce RTX 3090 24GB GDDR6X - Driver v551.86 Ready","?? RAM : 16GB Dual-Channel G.SKILL Trident Z RGB @ 3200MHz","?? SSD : Samsung 860 EVO 500GB - T?c d? d?c: 550 MB/s","?? COOL: T?n nhi?t Cooler Master ho?t d?ng �m �i, RGB d?ng b? Aura Sync","?? PSU : Ngu?n MasterWatt 650W Bronze c?p d�ng di?n c?c k? ?n d?nh"].forEach((o,a)=>{e.fillText(o,170,270+a*34)}),e.fillStyle="rgba(15, 23, 42, 0.95)",e.fillRect(0,n-50,t,50),e.fillStyle="#38bdf8",e.font='bold 20px "Segoe UI", sans-serif',e.fillText("?? PC Builder Menu",30,n-18),e.fillStyle="#94a3b8",e.fillText("100% Ready � All Components Verified",t-380,n-18)}this.monitorTexture.needsUpdate=!0}update(e){this.monitorState==="POST"&&(this.postProgress+=e*.4,this.renderMonitorScreen(),this.postProgress>=1&&this.setMonitorState("OS"))}hideCasePlaceholder(){this.casePlaceholder&&(this.casePlaceholder.visible=!1)}get partsTableSurfaceY(){return kr().table.topHeight}}function qh(r={}){const{xray:e=!1}=r,t=new Je,{yFloor:n,yTop:i,zRear:s,zFront:o,xGlassOuter:a,xGlassInner:c,xPlainInner:l}=Jt,h=ti.feet,u=Xe.x,d=Xe.thickness,f=Xe.face,g=Xe.z1,_=Xe.y0,p=Xe.y1;Xe.cutY0,Xe.cutY1,Xe.cutZ0;const m=Xe.cutZ1,T=zn.top,M=T-n,v=zn.width,L=zn.depth,I=zn.midZ,A=zn.midX,P=dt.fan.x,b=dt.fan.y,S=dt.fan.r,U=dt.io.y,W=dt.slots.x,G=dt.slots.top,Z=dt.slots.pitch,ee=dt.slots.span,Y=dt.slots.y,ie=dt.psu.x,X=dt.psu.w,de=dt.psu.h,D=dt.psu.y,C=dt.plane,oe=dt.halfW,me=dt.halfH,k=dt.centreY,K=dt.toLocalY,se=vn.fan.x,q=vn.fan.z,ae=vn.fan.r,xe=J=>{const pe=new ht(J);return e&&(pe.transparent=!0,pe.opacity=.5,pe.depthWrite=!1),pe},ge=xe({color:1514274,roughness:.42,metalness:.88}),De=xe({color:1514274,roughness:.42,metalness:.88});De.side=zt;const Fe=xe({color:1975084,roughness:.55,metalness:.72}),Re=xe({color:2830909,roughness:.3,metalness:.9}),R=xe({color:658448,roughness:.95,metalness:.1}),st=xe({color:790034,roughness:1,metalness:0}),Oe=xe({color:3718648,emissive:876416,emissiveIntensity:1.5,roughness:.4}),Be=xe({color:10475775,transparent:!0,opacity:e?.22:.14,roughness:.03,metalness:.35,side:zt,depthWrite:!1}),Me=(J,pe)=>{const be=document.createElement("canvas");be.width=64,be.height=64;const Ee=be.getContext("2d");Ee.fillStyle="#000",Ee.fillRect(0,0,64,64),Ee.fillStyle="#fff";for(let V=0;V<8;V++)for(let $=0;$<8;$++){const ue=V%2*4;Ee.beginPath(),Ee.arc($*8+ue,V*8,2.6,0,Math.PI*2),Ee.fill()}const N=new xi(be);N.wrapS=jt,N.wrapT=jt,N.repeat.set(J,pe);const le=new ht({color:1843755,alphaMap:N,alphaTest:.5,side:zt,roughness:.6,metalness:.55});return e&&(le.transparent=!0,le.opacity=.5,le.depthWrite=!1),le},Ze=[],ne=(J,pe,be,Ee={})=>{const N=new Pe(J,pe);return N.position.set(be[0],be[1],be[2]),Ee.rotation&&N.rotation.set(Ee.rotation[0],Ee.rotation[1],Ee.rotation[2]),N.castShadow=Ee.cast!==!1,N.receiveShadow=!0,Ee.name&&(N.name=Ee.name),Ee.interactive&&Ze.push(N),t.add(N),N},w=(J,pe,be)=>{const Ee=new Ih;return Ee.moveTo(-J,-pe),Ee.lineTo(J,-pe),Ee.lineTo(J,pe),Ee.lineTo(-J,pe),Ee.closePath(),be.forEach(({x:N,y:le,w:V,h:$,r:ue})=>{const he=new Aa;ue!==void 0?he.absarc(N,le,ue,0,Math.PI*2,!0):(he.moveTo(N-V/2,le-$/2),he.lineTo(N+V/2,le-$/2),he.lineTo(N+V/2,le+$/2),he.lineTo(N-V/2,le+$/2),he.closePath()),Ee.holes.push(he)}),new Ja(Ee,26)},x=(J,pe,be=7)=>{const Ee=new Je,N=new Pe(new si(J-.007,.007,8,28),Re);N.castShadow=!0,Ee.add(N);const le=new Pe(new As(J-.008,28),xe({color:856085,roughness:.8,side:zt}));le.position.z=-pe/2,Ee.add(le);const V=new Pe(new kt(.017,.017,pe*.7,14),xe({color:658448,roughness:.95,metalness:.1}));V.rotation.x=Math.PI/2,Ee.add(V);const $=xe({color:1777704,roughness:.5,metalness:.6,side:zt});for(let ue=0;ue<be;ue++){const he=ue/be*Math.PI*2,He=new Pe(new Le(J*.46,.0015,pe*.55),$);He.position.set(Math.cos(he)*J*.5,Math.sin(he)*J*.5,0),He.rotation.z=he+.5,Ee.add(He)}return Ee};[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([J,pe])=>{ne(new kt(.017,.02,h,14),st,[J*(At/2-.026),h/2,pe*(ln/2-.033)],{cast:!1})}),ne(new Le(At,Et,ln),ge,[0,n-Et/2,0],{interactive:!0,name:"caseBottom"}),ne(new Lt(At-.04,.16),Me(7,4),[A,n-Et/2-5e-4,D-.06],{rotation:[Math.PI/2,0,0],cast:!1}),ne(w((At-.004)/2,(ln-.004)/2,[{x:se,y:q,r:ae}]),De,[0,i-Et/2,0],{rotation:[Math.PI/2,0,0],interactive:!0,name:"caseTop"}),ne(new As(ae-.006,30),Me(7,7),[se,i-Et/2-8e-4,q],{rotation:[-Math.PI/2,0,0],cast:!1}),ne(new si(ae,.004,8,30),Re,[se,i-Et/2,q],{rotation:[Math.PI/2,0,0],cast:!1});const B=x(ae-.004,.025);B.rotation.x=-Math.PI/2,B.position.set(se,i-Et-.014,q),t.add(B),ne(new Lt(At-.05,.085),Me(8,3),[0,i+6e-4,-.16],{rotation:[-Math.PI/2,0,0],cast:!1}),ne(new Le(.075,.002,.032),Re,[0,i+.001,o-.05]),ne(new kt(.007,.007,.004,16),Oe,[vn.io.x,i+.003,vn.io.z],{cast:!1}),ne(new kt(.003,.003,.004,12),R,[vn.io.x-.011,i+.003,vn.io.z],{cast:!1}),ne(new kt(.0035,.0035,.004,12),R,[vn.io.x+.025,i+.003,vn.io.z],{cast:!1}),[-.012,.012].forEach(J=>{ne(new Le(.013,.004,.008),R,[J,i+.003,o-.05],{cast:!1})});const te=o-.007,Q=.02,j=[[At-.004,Q,0,h+Tt-Q/2],[At-.004,Q,0,h+Q/2],[Q,Tt-.004-2*Q,-.206/2+Q/2,h+Tt/2],[Q,Tt-.004-2*Q,(At-.004)/2-Q/2,h+Tt/2]];let Ce=null;j.forEach(([J,pe,be,Ee])=>{const N=ne(new Le(J,pe,.014),ge,[be,Ee,te],{interactive:!0,name:"frontPanel"});Ce||(Ce=N)}),ne(new Lt(At-.004-2*Q,Tt-.004-2*Q),Me(9,22),[0,h+Tt/2,te+.001],{rotation:[0,Math.PI,0],cast:!1}),ne(new Le(At-.06,.005,.002),Oe,[0,h+Q/2,o-.001],{cast:!1}),ne(new Le(.05,.008,.002),Re,[0,h+Tt-Q/2,o-.001],{cast:!1}),[.135,.275].forEach(J=>{const pe=x(.07,.025);pe.position.set(0,J,o-.03),t.add(pe)}),ne(new Le(At-.02,.32,Et),Fe,[0,.205,o-.048],{cast:!1}),ne(w(oe,me,[{x:P,y:K(b),r:S},{x:0,y:K(U),w:.159,h:.042},{x:W,y:K(Y),w:.122,h:ee},{x:ie,y:K(D),w:X,h:de}]),De,[0,k,C],{interactive:!0,name:"caseRear"}),ne(new kt(S-.001,S-.007,.026,26,1,!0),xe({color:856085,roughness:.8,metalness:.4,side:zt}),[P,b,s+Et+.013],{rotation:[Math.PI/2,0,0],cast:!1}),ne(new si(S,.004,8,28),Re,[P,b,C],{cast:!1}),ne(new As(S-.005,26),Me(6,6),[P,b,C-.001],{cast:!1});const fe=x(S-.007,.02);fe.rotation.y=Math.PI,fe.position.set(P,b,s+Et+.02),t.add(fe),ne(new Le(.122,ee,.004),R,[W,Y,C+.006],{cast:!1});for(let J=0;J<7;J++)ne(new Le(.12,.0175,.002),J===0?Re:Fe,[W,G-.00875-J*Z,C],{cast:!1});ne(new Le(.159,.042,.005),R,[0,U,C+.006],{cast:!1}),[[-.056,1920728],[-.042,1920728],[-.026,3359061],[.018,3359061],[.038,3359061]].forEach(([J,pe])=>{ne(new Le(.012,.007,.008),xe({color:pe,roughness:.4,metalness:.6}),[J,U+.004,C+.012],{cast:!1})}),[.058,.068].forEach(J=>{ne(new kt(.003,.003,.008,10),R,[J,U+.004,C+.012],{rotation:[Math.PI/2,0,0],cast:!1})}),ne(new Le(X,de,.006),R,[ie,D,C+.006],{cast:!1}),ne(new Lt(X-.004,de-.004),Me(9,5),[ie,D,C+.0028],{cast:!1}),ne(new kt(.008,.008,.008,14),R,[ie-.045,D+.02,C+.002],{rotation:[Math.PI/2,0,0],cast:!1}),ne(new Le(.02,.012,.008),R,[ie-.045,D-.026,C+.002],{cast:!1});const Se=Wh(),je=(J,pe)=>Se.some(([be,Ee,N,le])=>J>=be&&J<=Ee&&pe>=N&&pe<=le);Se.forEach(([J,pe,be,Ee])=>{ne(new Le(d,pe-J,Ee-be),Fe,[u,(J+pe)/2,(be+Ee)/2],{interactive:!0,name:"motherboardTray"})}),ne(new Le(.03,p-_,Et),ge,[u-.012,(_+p)/2,g-Et/2],{cast:!1}),[.16,.26,.36].forEach(J=>{ne(new Le(.006,.014,Et+.001),R,[f+.003,J,g-Et/2],{cast:!1})});let re=0;Xh.forEach(({y:J,z:pe})=>{je(J,pe)&&(re++,ne(new kt(.0035,.0035,.006,8),Re,[f+.003,J,pe],{rotation:[0,0,Math.PI/2],cast:!1}))}),[[_+.04,m-.02],[p-.06,m-.02]].forEach(([J,pe])=>{ne(new si(.012,.0035,6,16),st,[f+.002,J,pe],{rotation:[0,Math.PI/2,0],cast:!1})}),ne(new Le(v,M,L),ge,[A,n+M/2,I],{interactive:!0,name:"psuShroud"}),ne(new Lt(v-.03,L-.06),Me(7,9),[A,T+6e-4,I],{rotation:[-Math.PI/2,0,0],cast:!1}),ne(new Le(.102,.006,.072),Re,[-.01,T+.003,.05],{cast:!1}),[-.03,.03].forEach(J=>{[-.012,.012].forEach(pe=>{ne(new kt(.0028,.0028,.004,8),R,[-.01+J,T+.007,.05+pe],{cast:!1})})}),ne(new Le(Et,Tt-.008,ln-.008),ge,[-At/2+Et/2,h+Tt/2,0],{interactive:!0,name:"caseSide"});const ve=new Pe(new Le(Ir,Tt-.012,ln-.012),Be);ve.name="sideGlass",ve.position.set(a-Ir/2,h+Tt/2,0),ve.castShadow=!1,ve.receiveShadow=!1,t.add(ve),Ze.push(ve),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([J,pe])=>{const be=new Pe(new kt(.005,.005,.012,10),Re);be.rotation.z=Math.PI/2,be.position.set(Ir/2,J*((Tt-.012)/2-.026),pe*((ln-.012)/2-.026)),ve.add(be)});const Ne=Ze.find(J=>J.name==="motherboardTray"),ke={shell:{width:At,height:Tt+h,depth:ln},coolerClearance:c-f,cableChannel:u-d/2-l,boardBottomToShroud:ni.bottom-T,standoffs:re,trayNotch:{from:Xe.rearTop,to:Xe.rearTopStrip},rearFan:{x:P,y:b,radius:S},roofFan:{z:q,radius:ae},psuChamber:{width:v,depth:L,height:M}};return{caseGroup:t,sideGlass:ve,chassis:Ne,frontPanel:Ce,interactables:Ze,metrics:ke}}const Z_=[new E(1,0,0),new E(0,1,0),new E(0,0,1)],Xl=1e-4;function Kh(r){r.updateMatrixWorld(!0);const e=new pt().setFromObject(r);return{box:e,size:e.getSize(new E),center:e.getCenter(new E)}}function Yh(r){const e=Z_.map((o,a)=>({vector:o,index:a,length:r.getComponent(a)})).sort((o,a)=>o.length-a.length),t=e[0],n=e[1],i=e[2];let s=null;for(const o of[1,-1])for(const a of[1,-1]){const c=new E(1,0,0).multiplyScalar(o),l=new E(0,1,0).multiplyScalar(a),h=new E().crossVectors(c,l),u=new Array(3);u[i.index]=c,u[t.index]=l,u[n.index]=h,new ze().makeBasis(u[0],u[1],u[2]).determinant()<0&&(u[n.index]=h.negate());const d=new dn().setFromRotationMatrix(new ze().makeBasis(u[0],u[1],u[2])),f=2*Math.acos(Math.min(1,Math.abs(d.w))),g=u[1];let _;g.y>.9?_=0:g.z>.9?_=1:g.x>.9?_=2:_=3,(s===null||f<s.angle-Xl||Math.abs(f-s.angle)<=Xl&&_<s.facing)&&(s={quaternion:d,angle:f,facing:_})}return s?s.quaternion:new dn}function Ws(r,e={}){const{realSize:t=.15,realDims:n=null,minSize:i=0,maxSize:s=Number.POSITIVE_INFINITY,flat:o=!0}=e,{size:a,center:c}=Kh(r),l=Math.max(a.x,a.y,a.z)||1,u=Math.min(Math.max(t,i),s)/l;r.position.set(-c.x,-c.y,-c.z);const d=new Je;o&&d.quaternion.copy(Yh(a)),d.add(r);const f=new Je;f.add(d);let g=u;if(n){f.updateMatrixWorld(!0);const M=new pt().setFromObject(d).getSize(new E),v=[n.length??M.x,n.height??n.thickness??M.y,n.width??M.z],L=[v[0]/(M.x||1),v[1]/(M.y||1),v[2]/(M.z||1)];f.scale.set(L[0],L[1],L[2]),g=L[0]}else f.scale.setScalar(u);f.updateMatrixWorld(!0);const _=new pt().setFromObject(f),p=_.getSize(new E),m=new Je;m.add(f),m.position.set(-_.min.x-p.x/2,-_.min.y,-_.min.z-p.z/2),m.updateMatrixWorld(!0);const T=new pt().setFromObject(m);return{group:m,box:T,size:T.getSize(new E),scale:g}}const j_={motherboard:{length:.305,width:.244,height:.045,mount:{length:[0,1,0],width:[0,0,1],height:[1,0,0]}},cpu:{length:.04,width:.04,height:.005,mount:{length:[0,0,1],width:[0,1,0],height:[1,0,0]}},cooler:{length:.155,width:.12,height:.11,mount:{length:[0,1,0],width:[0,0,1],height:[1,0,0]}},ram:{length:.1334,width:.045,height:.007,mount:{length:[0,1,0],width:[0,0,1],height:[1,0,0]}},storage:{length:.1,width:.07,height:.007,mount:{length:[0,0,1],width:[1,0,0],height:[0,1,0]}},psu:{length:.15,width:.15,height:.086,mount:{length:[0,0,1],width:[1,0,0],height:[0,1,0]}},gpu:{length:.313,width:.13,height:.052,mount:{length:[0,0,1],width:[0,1,0],height:[1,0,0]}}},$_={gpu_rx_480:{length:.24,width:.115,height:.03},gpu_gold_edition:{length:.28,width:.12,height:.04},cooler_noctua_nh_c12:{length:.124,width:.12,height:.065},mb_asus_prime_b450:{length:.244,width:.244,height:.045},mb_gigabyte_h61:{length:.244,width:.244,height:.045},ram_crucial_8gb:{width:.031},ram_generic_ddr4:{width:.031},ram_kingston_fury_black:{width:.034}};function qr(r){const e=j_[r.categoryKey];if(!e)return null;const t=$_[r.id];if(!t)return{...e};const n={...e,...t};return n.mount=e.mount,n}function ql(r,e){if(e===Uu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ba||e===uh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ba)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Zh extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new tv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Cs.extractUrlBase(e);o=Cs.resolveURL(l,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Oh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===jh){try{o[$e.KHR_BINARY_GLTF]=new _v(e)}catch(u){i&&i(u);return}s=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Pv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new ev;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new vv(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new xv;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new yv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function J_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Q_{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Kt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ec(h),l.distance=u;break;case"spot":l=new Vf(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class ev{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ut))}return Promise.all(i)}}class tv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class nv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(s)}}class iv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class sv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class rv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ov{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class av{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],Kt),Promise.all(s)}}class cv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class lv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(s)}}class hv{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class uv{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class dv{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class fv{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pv{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class mv{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class gv{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==cn.TRIANGLES&&l.mode!==cn.TRIANGLE_STRIP&&l.mode!==cn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new ze,p=new E,m=new dn,T=new E(1,1,1),M=new Gd(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,v),c.SCALE&&T.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,_.compose(p,m,T));for(const v in c)if(v==="_COLOR_0"){const L=c[v];M.instanceColor=new wa(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const jh="glTF",ys=12,Kl={JSON:1313821514,BIN:5130562};class _v{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ys,s=new DataView(e,ys);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Kl.JSON){const l=new Uint8Array(e,ys+o,a);this.content=n.decode(l)}else if(c===Kl.BIN){const l=ys+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=La[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=La[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Yi[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(f)},a,l,Kt,d)})})}}class xv{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yv{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class $h extends Hs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,T=1-p,M=m-d+u;for(let v=0;v!==a;v++){const L=o[_+v+a],I=o[_+v+c]*h,A=o[g+v+a],P=o[g+v]*h;s[v]=T*L+M*I+p*A+m*P}return s}}const Mv=new dn;class Sv extends $h{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Mv.fromArray(s).normalize().toArray(s),s}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yl={9728:Xt,9729:$t,9984:th,9985:Tr,9986:Ms,9987:Gn},Zl={33071:ii,33648:Dr,10497:jt},No={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},La={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bv={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Is},Uo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),r.DefaultMaterial}function _i(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Ev(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Av(r){let e;const t=r.extensions&&r.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fo(t.attributes):e=r.indices+":"+Fo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Fo(r.targets[n]);return e}function Fo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Da(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Cv=new ze;class Pv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new J_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new zf(this.options.manager):this.textureLoader=new qf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _i(s,a,i),kn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Cs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=No[i.type],a=Yi[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new qt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=No[i.type],l=Yi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let M=t.cache.get(T);M||(_=new l(a,m*f,i.count*f/h),M=new Fd(_,f/h),t.cache.add(T,M)),p=new qa(M,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),p=new qt(_,c,g);if(i.sparse!==void 0){const m=No.SCALAR,T=Yi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,L=new T(o[1],M,i.sparse.count*m),I=new l(o[2],v,i.sparse.count*c);a!==null&&(p=new qt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,P=L.length;A<P;A++){const b=L[A];if(p.setX(b,I[A*c]),c>=2&&p.setY(b,I[A*c+1]),c>=3&&p.setZ(b,I[A*c+2]),c>=4&&p.setW(b,I[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Yl[d.magFilter]||$t,h.minFilter=Yl[d.minFilter]||Gn,h.wrapS=Zl[d.wrapS]||jt,h.wrapT=Zl[d.wrapT]||jt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==$t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Rt(_);p.needsUpdate=!0,d(p)}),t.load(Cs.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),kn(u,o),u.userData.mimeType=o.mimeType||Rv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new wh,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Th,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ht}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=zt);const h=s.alphaMode||Uo.OPAQUE;if(h===Uo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Wt){const u=s.emissiveFactor;a.emissive=new Ge().setRGB(u[0],u[1],u[2],Kt)}return s.emissiveTexture!==void 0&&o!==Wt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ut)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),kn(u,s),t.associations.set(u,{materials:e}),s.extensions&&_i(i,u,s),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return jl(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Av(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=jl(new en,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Tv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=o[f];let m;const T=l[f];if(p.mode===cn.TRIANGLES||p.mode===cn.TRIANGLE_STRIP||p.mode===cn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Bd(_,T):new Pe(_,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===cn.TRIANGLE_STRIP?m.geometry=ql(m.geometry,uh):p.mode===cn.TRIANGLE_FAN&&(m.geometry=ql(m.geometry,ba));else if(p.mode===cn.LINES)m=new Wd(_,T);else if(p.mode===cn.LINE_STRIP)m=new Za(_,T);else if(p.mode===cn.LINE_LOOP)m=new Xd(_,T);else if(p.mode===cn.POINTS)m=new qd(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ev(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),kn(m,s),p.extensions&&_i(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&_i(i,u[0],s),u[0];const d=new Je;s.extensions&&_i(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ze;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ka(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",T)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let T=0,M=d.length;T<M;T++){const v=d[T],L=f[T],I=g[T],A=_[T],P=p[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,L,I,A,P);if(b)for(let S=0;S<b.length;S++)m.push(b[S])}return new Df(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Cv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Sh:l.length>1?h=new Je:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),kn(h,s),s.extensions&&_i(n,h,s),s.matrix!==void 0){const u=new ze;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Je;n.name&&(s.name=i.createUniqueName(n.name)),kn(s,n),n.extensions&&_i(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof Rt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Jn[s.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Jn[s.path]){case Jn.weights:l=ns;break;case Jn.rotation:l=is;break;case Jn.position:case Jn.scale:l=ss;break;default:switch(n.itemSize){case 1:l=ns;break;case 2:case 3:default:l=ss;break}break}const h=i.interpolation!==void 0?bv[i.interpolation]:Ls,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Jn[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Da(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof is?Sv:$h;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Iv(r,e,t){const n=e.attributes,i=new pt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){const h=Da(Yi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new E,c=new E;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Da(Yi[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new En;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function jl(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=La[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),kn(r,e),Iv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wv(r,e.targets,t):r})}const Lv=new Zh,Oo=new Map,Dv=new Map;function Jh(r){if(Oo.has(r))return Oo.get(r);const e=new Promise(t=>{Lv.load(r,n=>{const i=n.scene;i.updateMatrixWorld(!0),Dv.set(r,i),t(i)},void 0,n=>{console.warn(`Could not load model ${r}:`,n),t(null)})});return Oo.set(r,e),e}async function Kr(r){const e=await Jh(r);return e?e.clone(!0):null}function Nv(r,e,t={}){const{perFrame:n=3,onDone:i}=t,s=[...r],o=[];let a=0,c=!1;const l=()=>{if(c)return;const h=s.splice(0,n);if(!h.length){Promise.all(o).then(()=>{c||i==null||i()});return}const u=h.map(d=>{const f=Jh(d).then(g=>{a++,g&&!c&&e(d,g)}).catch(()=>{a++});return o.push(f),f});return c||Promise.resolve().then(()=>setTimeout(l,0)),u};return l(),{cancel(){c=!0},get loaded(){return a},get total(){return r.length}}}const Uv=5e-4;class Fv{constructor(e,t={}){this.scene=e,this.group=new Je,this.items=[...Br],this.shelfMeshes=new Map,this.placeholders=new Map,this.interactables=[],this.layout=kr(),this.onProgress=t.onProgress||null,this.onReady=t.onReady||null,this.ready=new Promise(i=>{this._resolveReady=i}),this.scene.add(this.group);const n=[...new Set(this.items.map(i=>i.modelPath))];this.stream=Nv(n,(i,s)=>this.addItem(i,s),{perFrame:t.perFrame??4,onDone:()=>{var i,s;(i=this._resolveReady)==null||i.call(this),(s=this.onReady)==null||s.call(this)}})}_makePlaceholder(e){var i;const t=new Le(Math.max(e.realSize,.02),Math.max(e.realSize*.12,.008),Math.max(((i=e.footprint)==null?void 0:i.depth)||e.realSize*.4,.02));return new Pe(t,new ht({color:13358561,roughness:.85,metalness:.05,transparent:!0,opacity:.55}))}_place(e,t,n){e.position.set(t.position.x,t.position.y+Uv,t.position.z),e.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.userData={itemId:n.id,itemName:n.name,isPlaceholder:!!i.userData.isPlaceholder})}),e.userData={itemId:n.id,itemName:n.name},this.shelfMeshes.set(n.id,e),this.interactables.push(e),this.group.add(e)}addItem(e,t){var n;this.items.filter(i=>i.modelPath===e).forEach(i=>this._swapIn(i,t)),(n=this.onProgress)==null||n.call(this,this.stream.loaded,this.stream.total)}_swapIn(e,t){const n=this.layout.tiers.flatMap(l=>l.entries).find(l=>l.item.id===e.id);if(!n)return;const i=t.clone(!0),{group:s}=Ws(i,{realSize:e.realSize,realDims:qr(e),flat:!0}),o=new Je;o.rotation.y=-Math.PI/2,o.add(s);const a=new Je;a.add(o);const c=this.placeholders.get(e.id);if(c){this.group.remove(c),this.placeholders.delete(e.id);const l=this.interactables.indexOf(c);l>=0&&this.interactables.splice(l,1),c.traverse(h=>{var u,d,f,g;h.isMesh&&((d=(u=h.geometry)==null?void 0:u.dispose)==null||d.call(u),(g=(f=h.material)==null?void 0:f.dispose)==null||g.call(f))})}this._place(a,n,e)}seedPlaceholders(){const e=new Map(this.layout.tiers.flatMap(t=>t.entries).map(t=>[t.item.id,t]));this.items.forEach(t=>{const n=e.get(t.id);if(!n)return;const i=this._makePlaceholder(t);i.userData.isPlaceholder=!0,this._place(i,n,t),this.placeholders.set(t.id,i)})}hideItem(e){const t=this.shelfMeshes.get(e);t&&(t.visible=!1)}showItem(e){const t=this.shelfMeshes.get(e);t&&(t.visible=!0)}}class Ov{constructor(){this.ctx=null,this.enabled=!0,this.fanSource=null,this.fanGain=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),t.gain.setValueAtTime(.15,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playPickup(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(260,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(520,this.ctx.currentTime+.12),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.12)}playDrop(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(90,e+.12),n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.12);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(1400,e),i.frequency.exponentialRampToValueAtTime(320,e+.05),s.gain.setValueAtTime(.1,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.05)}playEquip(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(520,e),t.frequency.exponentialRampToValueAtTime(240,e+.1),n.gain.setValueAtTime(.16,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.1)}playSnap(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(1800,e),t.frequency.exponentialRampToValueAtTime(250,e+.08),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(e+.08);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(220,e+.02),i.frequency.exponentialRampToValueAtTime(60,e+.14),s.gain.setValueAtTime(.35,e+.02),s.gain.exponentialRampToValueAtTime(.001,e+.14),i.connect(s),s.connect(this.ctx.destination),i.start(e+.02),i.stop(e+.14)}playScrew(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;for(let t=0;t<3;t++){const n=e+t*.04,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(900+t*150,n),s.gain.setValueAtTime(.12,n),s.gain.exponentialRampToValueAtTime(.001,n+.025),i.connect(s),s.connect(this.ctx.destination),i.start(n),i.stop(n+.025)}}playPowerSwitch(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(80,e+.06),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.06),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.06)}playPostBeep(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,e),n.gain.setValueAtTime(.25,e),n.gain.setValueAtTime(.25,e+.12),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.15)}startFanHum(){if(!this.enabled||this.fanSource||(this.init(),!this.ctx))return;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);let i=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;i=(i+.02*c)/1.02,n[a]=i*3.5}const s=this.ctx.createBufferSource();s.buffer=t,s.loop=!0;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(450,this.ctx.currentTime),o.Q.setValueAtTime(1.5,this.ctx.currentTime),this.fanGain=this.ctx.createGain(),this.fanGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.fanGain.gain.linearRampToValueAtTime(.18,this.ctx.currentTime+2),s.connect(o),o.connect(this.fanGain),this.fanGain.connect(this.ctx.destination),s.start(),this.fanSource=s}playVictoryFanfare(){if(!this.enabled||(this.init(),!this.ctx))return;const e=[{f:523.25,dur:.15,d:0},{f:659.25,dur:.15,d:.15},{f:783.99,dur:.15,d:.3},{f:1046.5,dur:.5,d:.45}],t=this.ctx.currentTime;e.forEach(n=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(n.f,t+n.d),s.gain.setValueAtTime(.2,t+n.d),s.gain.exponentialRampToValueAtTime(.001,t+n.d+n.dur),i.connect(s),s.connect(this.ctx.destination),i.start(t+n.d),i.stop(t+n.d+n.dur)})}}const gt=new Ov;class Bv{constructor(e){this.scene=e,this.group=new Je,this.loader=new Zh,this.placedItems=new Map,this.interactables=[],this.scene.add(this.group)}placeItemAt(e,t){gt.playDrop(),this.loader.load(e.modelPath,n=>{const{group:i}=Ws(n.scene,{realSize:e.realSize,flat:!0}),s=new Je;s.rotation.y=-Math.PI/2,s.add(i);const o=new Je;o.add(s),o.position.set(t.x,t.y+.002,t.z),o.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData={itemId:e.id,itemName:e.name,isPlaced:!0})}),o.userData={itemId:e.id,itemName:e.name,isPlaced:!0},this.group.add(o),this.placedItems.set(e.id,o),this.interactables.push(o)},void 0,n=>console.warn(`Error placing ${e.name}:`,n))}removeItem(e){const t=this.placedItems.get(e);if(t){this.group.remove(t),this.placedItems.delete(e);const n=this.interactables.indexOf(t);n!==-1&&this.interactables.splice(n,1)}}}class kv{constructor(e){this.canvas=e,this.scene=new Gr,this.camera=new Dt(45,1,.01,100),this.camera.position.set(0,0,1.7),this.camera.lookAt(0,0,0),this.renderer=new Xr({canvas:this.canvas,antialias:!0,alpha:!0}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e.clientWidth||360,e.clientHeight||360,!1),this.renderer.toneMapping=ks,this.renderer.toneMappingExposure=1.2,this.currentModel=null,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.autoRotate=!0,this.viewTilt=.26,this.framedAspect=null,this.setupLighting(),this.setupControls()}setupLighting(){const e=new Vr(16777215,.9);this.scene.add(e);const t=new Sn(16777215,2);t.position.set(2,4,3),this.scene.add(t);const n=new Sn(3718648,1.8);n.position.set(-2,-1,-2),this.scene.add(n);const i=new Sn(11032055,.8);i.position.set(-2,2,2),this.scene.add(i)}setupControls(){this.canvas.addEventListener("mousedown",e=>{this.isDragging=!0,this.autoRotate=!1,this.previousMousePosition={x:e.clientX,y:e.clientY}}),window.addEventListener("mousemove",e=>{if(!this.isDragging||!this.currentModel)return;const t=e.clientX-this.previousMousePosition.x,n=e.clientY-this.previousMousePosition.y;this.currentModel.rotation.y+=t*.01,this.currentModel.rotation.x+=n*.01,this.previousMousePosition={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),this.canvas.addEventListener("touchstart",e=>{e.touches.length===1&&(this.isDragging=!0,this.autoRotate=!1,this.previousMousePosition={x:e.touches[0].clientX,y:e.touches[0].clientY})}),window.addEventListener("touchmove",e=>{if(!this.isDragging||!this.currentModel||e.touches.length!==1)return;const t=e.touches[0].clientX-this.previousMousePosition.x,n=e.touches[0].clientY-this.previousMousePosition.y;this.currentModel.rotation.y+=t*.01,this.currentModel.rotation.x+=n*.01,this.previousMousePosition={x:e.touches[0].clientX,y:e.touches[0].clientY}}),window.addEventListener("touchend",()=>{this.isDragging=!1})}loadItemModel(e,t={}){this.currentModel&&(this.scene.remove(this.currentModel),this.currentModel=null),Kr(e).then(n=>{n&&this.setModel(n,t)})}setModel(e,t={}){const{alignFlat:n=!0,autoFit:i=.95,tilt:s=this.viewTilt}=t;this.resize();const{size:o}=Kh(e),a=Math.max(o.x,o.y,o.z)||1,c=new Je;c.add(e),n&&c.quaternion.copy(Yh(o)),c.updateMatrixWorld(!0);const h=new pt().setFromObject(c).getCenter(new E);c.position.set(-h.x,-h.y,-h.z);const u=new Je;u.scale.setScalar(i/a),u.add(c);const d=new Je;d.rotation.x=s,d.add(u),this.currentModel=d,this.scene.add(this.currentModel),this.autoRotate=!0,this.frameModel()}frameModel(){if(!this.currentModel)return;this.currentModel.updateMatrixWorld(!0);const t=new pt().setFromObject(this.currentModel).getSize(new E).multiplyScalar(.5),n=this.camera,i=Math.tan(qi.degToRad(n.fov)/2),s=i*n.aspect,a=Math.max(t.y/i,t.x/s)*1.1+t.z;n.position.set(0,0,a),n.lookAt(0,0,0),n.near=Math.max(.01,a-t.z*2-.05),n.far=a+t.z*2+10,n.updateProjectionMatrix(),this.framedAspect=n.aspect}resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;const n=Math.floor(e*this.pixelRatio),i=Math.floor(t*this.pixelRatio);(this.canvas.width!==n||this.canvas.height!==i)&&this.renderer.setSize(e,t,!1);const s=e/t;Math.abs(s-this.camera.aspect)<1e-6||(this.camera.aspect=s,this.camera.updateProjectionMatrix(),this.frameModel())}render(){this.resize(),this.currentModel&&this.autoRotate&&!this.isDragging&&(this.currentModel.rotation.y+=.008),this.renderer.render(this.scene,this.camera)}}class zv{constructor(e,t,n){this.camera=e,this.scene=t,this.playerControls=n,this.heldItemData=null,this.heldObjectGroup=new Je,this.camera.add(this.heldObjectGroup),this.rotationPivot=new Je,this.heldObjectGroup.add(this.rotationPivot),this.defaultPos=new E(.35,-.28,-.65),this.centerPos=new E(0,-.02,-.52),this.currentPos=this.defaultPos.clone(),this.heldObjectGroup.position.copy(this.currentPos),this.isInspecting=!1,this.itemRotation={x:0,y:0,z:0},this.setupMouseEvents()}setPlayerControls(e){this.playerControls=e}setupMouseEvents(){window.addEventListener("mousedown",e=>{e.button===2&&this.heldItemData&&(this.isInspecting=!0,this.playerControls&&(this.playerControls.isLookLocked=!0),this.showInspectHint(!0))}),window.addEventListener("mouseup",e=>{e.button===2&&this.isInspecting&&(this.isInspecting=!1,this.playerControls&&(this.playerControls.isLookLocked=!1),this.showInspectHint(!1))}),window.addEventListener("contextmenu",e=>{e.preventDefault()}),window.addEventListener("mousemove",e=>{if(this.isInspecting&&this.heldItemData){const t=e.movementX||0,n=e.movementY||0;this.itemRotation.y+=t*.009,this.itemRotation.x+=n*.009,this.heldItemData.noTilt&&(this.itemRotation.x=0),this.rotationPivot.rotation.x=this.itemRotation.x,this.rotationPivot.rotation.y=this.itemRotation.y,this.rotationPivot.rotation.z=this.itemRotation.z}}),window.addEventListener("wheel",e=>{if(!this.isInspecting||!this.heldItemData)return;e.preventDefault();const t=this.heldItemData.noTilt?0:-Math.sign(e.deltaY)*.12;this.itemRotation.z+=t,this.rotationPivot.rotation.set(this.itemRotation.x,this.itemRotation.y,this.itemRotation.z)},{passive:!1})}showInspectHint(e){let t=document.getElementById("inspect-hint");t||(t=document.createElement("div"),t.id="inspect-hint",document.body.appendChild(t)),e&&this.heldItemData?(t.textContent=this.heldItemData.noTilt?`🔍 Đang quan sát ${this.heldItemData.name} • Rê chuột để xoay 360°`:`🔍 Đang quan sát ${this.heldItemData.name} • Rê chuột để xoay • Lăn chuột để xoay ngang`,t.classList.add("active")):t.classList.remove("active")}holdItem(e){this.clearHeldItem(),this.heldItemData=e,gt.playPickup();const t=n=>{const{group:i,size:s}=Ws(n,{realSize:e.realSize,realDims:qr(e),minSize:.05,maxSize:.34,flat:!0});i.position.y-=s.y/2,this.rotationPivot.add(i),this.setDefaultPose()};if(e.prebuilt){const n=new Je;n.add(e.prebuilt),e.prebuilt.position.set(0,0,0),e.prebuilt.rotation.set(0,0,0),n.position.y=-e.prebuiltSizeY/2||0,this.rotationPivot.add(n),this.setDefaultPose(),e.pose&&(this.itemRotation={...e.pose},this.rotationPivot.rotation.set(this.itemRotation.x,this.itemRotation.y,this.itemRotation.z));return}Kr(e.modelPath).then(n=>{n&&t(n)})}setDefaultPose(){var e;this.itemRotation={x:(e=this.heldItemData)!=null&&e.noTilt?0:.15,y:-.35,z:0},this.rotationPivot.rotation.set(this.itemRotation.x,this.itemRotation.y,0)}clearHeldItem(){for(this.showInspectHint(!1),this.isInspecting&&this.playerControls&&(this.playerControls.isLookLocked=!1),this.isInspecting=!1;this.rotationPivot.children.length>0;)this.rotationPivot.remove(this.rotationPivot.children[0]);const e=this.heldItemData;return this.heldItemData=null,this.rotationPivot.rotation.set(0,0,0),e}getHeldItem(){return this.heldItemData}update(e,t){if(!this.heldItemData)return;const n=this.isInspecting?this.centerPos:this.defaultPos,i=Math.min(1,14*e);if(this.currentPos.lerp(n,i),this.isInspecting)this.heldObjectGroup.position.copy(this.currentPos);else{const s=Math.sin(t*2.2)*.005,o=Math.cos(t*1.6)*.003;this.heldObjectGroup.position.set(this.currentPos.x+o,this.currentPos.y+s,this.currentPos.z)}}}function Gv(r){for(let e=r;e;e=e.parent)if(!e.visible)return!1;return!0}class Hv{constructor(e,t,n,i,s){var o;this.camera=e,this.domElement=t,this.onInteract=n,this.onStow=i,this.onToggleInventory=s,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.velocity=new E(0,0,0),this.isLocked=!1,this.isLookLocked=!1,this.pitch=0,this.yaw=0,this._forward=new E,this._right=new E,this._moveDir=new E,this.bounds={minX:-5.4,maxX:5.4,minZ:-4.4,maxZ:4.4},this.obstacles=[{minX:-1.35,maxX:1.35,minZ:-.75,maxZ:.75},q_()],this.raycaster=new Bh,this.center=new we(0,0),this.hoveredObject=null,this.lastRaycastHit=null,this.lastRayPos=new E(NaN,NaN,NaN),this.lastRayQuat=new dn(NaN,NaN,NaN,NaN),this.rayDirty=!0,this.hud={crosshair:document.getElementById("crosshair"),prompt:document.getElementById("hud-prompt"),promptText:((o=document.getElementById("hud-prompt"))==null?void 0:o.querySelector(".prompt-text"))||null},this.lastPromptText=null,this.lastPromptShown=!1,this.lastHighlighted=!1,this.setupPointerLock(),this.setupKeyboard(),this.setupMouse()}markRaycastDirty(){this.rayDirty=!0}setupPointerLock(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("shiftlock-status");e&&(e.textContent=this.isLocked?"Shift-Lock: BẬT (Khóa tâm)":"Shift-Lock: TẮT (Tự do chuột)",e.className=this.isLocked?"active":"inactive");const t=document.getElementById("crosshair");t&&t.classList.toggle("unlocked",!this.isLocked)}),this.domElement.addEventListener("click",()=>{const e=document.getElementById("inventory-modal"),t=e&&e.classList.contains("active");!this.isLocked&&!t&&this.lockPointer()})}lockPointer(){try{this.domElement.requestPointerLock()}catch(e){console.warn("Pointer lock error:",e)}}unlockPointer(){try{document.exitPointerLock()}catch(e){console.warn("Pointer unlock error:",e)}}toggleShiftLock(){this.isLocked?this.unlockPointer():this.lockPointer()}setupKeyboard(){window.addEventListener("keydown",e=>{if(e.key==="Shift"){e.preventDefault(),this.toggleShiftLock();return}if(e.code==="KeyE"){this.onStow&&this.onStow();return}if(e.code==="KeyR"){this.onToggleInventory&&this.onToggleInventory();return}switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break}}),window.addEventListener("keyup",e=>{switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break}})}setupMouse(){window.addEventListener("mousemove",e=>{if(!this.isLocked||this.isLookLocked)return;const t=e.movementX||0,n=e.movementY||0;this.yaw-=t*.0022,this.pitch-=n*.0022,this.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.pitch));const i=new bn(0,0,0,"YXZ");i.x=this.pitch,i.y=this.yaw,this.camera.quaternion.setFromEuler(i)}),window.addEventListener("mousedown",e=>{e.button===0&&this.isLocked&&this.onInteract&&this.onInteract(this.hoveredObject,this.lastRaycastHit)})}checkCollision(e,t){if(e<this.bounds.minX||e>this.bounds.maxX||t<this.bounds.minZ||t>this.bounds.maxZ)return!0;for(const n of this.obstacles)if(e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ)return!0;return!1}rayMoved(){const e=this.camera.position,t=this.camera.quaternion;return e.x!==this.lastRayPos.x||e.y!==this.lastRayPos.y||e.z!==this.lastRayPos.z||t.x!==this.lastRayQuat.x||t.y!==this.lastRayQuat.y||t.z!==this.lastRayQuat.z||t.w!==this.lastRayQuat.w}update(e,t=[]){var g,_,p,m,T,M;const n=(this.moveForward?1:0)-(this.moveBackward?1:0),i=(this.moveRight?1:0)-(this.moveLeft?1:0),s=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=this._moveDir.set(0,0,0);(n!==0||i!==0)&&(a.addScaledVector(s,n),a.addScaledVector(o,i),a.normalize());const c=4.2,l=a.x*c,h=a.z*c,u=Math.min(1,12*e);this.velocity.x+=(l-this.velocity.x)*u,this.velocity.z+=(h-this.velocity.z)*u;const d=this.camera.position.x+this.velocity.x*e,f=this.camera.position.z+this.velocity.z*e;if(this.checkCollision(d,this.camera.position.z)||(this.camera.position.x=d),this.checkCollision(this.camera.position.x,f)||(this.camera.position.z=f),this.camera.position.y=1.65,!this.isLocked){this.hoveredObject=null,this.lastRaycastHit=null,this.setHighlight(!1),this.setPrompt(null),this.lastRayPos.copy(this.camera.position),this.lastRayQuat.copy(this.camera.quaternion),this.rayDirty=!1;return}if(this.rayDirty||this.rayMoved()){this.lastRayPos.copy(this.camera.position),this.lastRayQuat.copy(this.camera.quaternion),this.rayDirty=!1,this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.center,this.camera);const v=this.raycaster.intersectObjects(t,!0);let L=null,I=null;for(const A of v){if(A.distance>=4)break;if(!Gv(A.object))continue;let P=A.object;for(;P&&!((g=P.userData)!=null&&g.type)&&!((_=P.userData)!=null&&_.snapType)&&!((p=P.userData)!=null&&p.itemId)&&P.parent;)P=P.parent;if(P&&((m=P.userData)!=null&&m.type||(T=P.userData)!=null&&T.snapType||(M=P.userData)!=null&&M.itemId)){L=P,I=A;break}!I&&(A.object.isMesh||A.point)&&(I=A)}this.hoveredObject=L,this.lastRaycastHit=I,this.setHighlight(!!L),this.setPrompt(L)}}setHighlight(e){var t;e!==this.lastHighlighted&&(this.lastHighlighted=e,(t=this.hud.crosshair)==null||t.classList.toggle("highlight",e))}setPrompt(e){const t=e?this.promptTextFor(e.userData):null;if(t===this.lastPromptText&&!!t===this.lastPromptShown)return;this.lastPromptText=t,this.lastPromptShown=!!t;const n=this.hud.prompt;n&&(n.style.display=t?"flex":"none",t&&this.hud.promptText&&(this.hud.promptText.textContent=t))}promptTextFor(e={}){return e.itemId?`[Chuột trái] Nhặt ${e.itemName||"Linh kiện"}`:e.type==="glass_side"?"[Chuột trái] Tháo / Lắp Nắp kính thùng máy":e.type==="power_button"?"[Chuột trái] BẬT NGUỒN MÁY TÍNH":e.type==="cables"?"[Chuột trái] Cắm Dây nguồn & Cáp tín hiệu":e.snapType?`[Chuột trái] Lắp ráp: ${e.snapType.toUpperCase()}`:e.type==="computerCase"?"[Chuột trái] Mở Menu Thùng Máy":e.type==="monitor"?"[Chuột trái] Cắm cáp màn hình":null}}class Vv{constructor(e,t,n,i,s){this.previewScene=e,this.onEquipItem=t,this.onInstallItem=n,this.onDropItem=i,this.onRequestLock=s,this.isOpen=!1,this.maxSlots=24,this.slots=new Array(this.maxSlots).fill(null),this.selectedSlotIndex=null,this.selectedItem=null,this.slots=new Array(this.maxSlots).fill(null),this.modalEl=document.getElementById("inventory-modal"),this.setupDOM()}setupDOM(){const e=document.getElementById("btn-close-inventory");e&&e.addEventListener("click",()=>{gt.playClick(),this.close()});const t=document.getElementById("btn-inv-equip");t&&t.addEventListener("click",()=>{if(!this.selectedItem)return;gt.playClick();const i=this.selectedItem,s=this.selectedSlotIndex;this.slots[s]=null,this.deselect(),this.renderGrid(),this.onEquipItem&&this.onEquipItem(i),this.close()});const n=document.getElementById("btn-inv-drop");n&&n.addEventListener("click",()=>{this.dropCurrentSelectedItem()}),window.addEventListener("keydown",i=>{if(this.isOpen){if(i.code==="KeyR"||i.code==="Escape"){i.preventDefault(),gt.playClick(),this.close();return}i.code==="KeyE"&&this.selectedItem&&this.selectedSlotIndex!==null&&(i.preventDefault(),this.dropCurrentSelectedItem())}})}dropCurrentSelectedItem(){if(!this.selectedItem||this.selectedSlotIndex===null)return;gt.playDrop();const e=this.selectedItem,t=this.selectedSlotIndex;this.slots[t]=null,this.deselect(),this.renderGrid(),this.onDropItem&&this.onDropItem(e)}open(e=null){this.isOpen=!0,gt.playClick(),this.modalEl.classList.add("active"),this.deselect(),this.renderGrid()}close(){this.isOpen=!1,this.modalEl.classList.remove("active"),this.deselect(),this.onRequestLock&&this.onRequestLock()}toggle(e=null){this.isOpen?this.close():this.open(e)}selectSlot(e){const t=this.slots[e];if(t){if(gt.playClick(),this.selectedSlotIndex===e){this.deselect(),this.renderGrid();return}this.selectedSlotIndex=e,this.selectedItem=t,this.renderGrid(),this.showDetailPanel(t),this.previewScene&&this.previewScene.loadItemModel(t.modelPath)}}deselect(){this.selectedSlotIndex=null,this.selectedItem=null,this.hideDetailPanel()}showDetailPanel(e){const t=document.getElementById("inv-empty-detail"),n=document.getElementById("inv-active-detail");t&&(t.style.display="none"),n&&(n.style.display="flex");const i=document.getElementById("inv-item-tag");i&&(i.textContent=`Tag: ${e.tag}`,i.className=`inv-tag tag-${e.categoryKey}`);const s=document.getElementById("inv-item-name");s&&(s.textContent=e.name);const o=document.getElementById("inv-item-brand");o&&(o.textContent=`${e.brand} • ${e.price}`);const a=document.getElementById("inv-specs-list");a&&(a.innerHTML="",e.specs.forEach(l=>{const h=document.createElement("div");h.className="spec-row",h.innerHTML=`
          <span class="spec-label">${l.label}:</span>
          <span class="spec-value">${l.value}</span>
        `,a.appendChild(h)}));const c=document.getElementById("inv-item-tip");c&&(c.textContent=e.beginnerTip)}hideDetailPanel(){const e=document.getElementById("inv-empty-detail"),t=document.getElementById("inv-active-detail");e&&(e.style.display="flex"),t&&(t.style.display="none")}renderGrid(){const e=document.getElementById("inventory-grid");if(!e)return;e.innerHTML="";let t=0;for(let i=0;i<this.maxSlots;i++){const s=this.slots[i],o=this.selectedSlotIndex===i,a=document.createElement("div");a.className=`inv-slot ${s?"occupied":"empty"} ${o?"selected":""}`,a.dataset.slotIndex=i,s?(t++,a.innerHTML=`
          <div class="slot-image-wrap">
            ${s.iconSvg||'<div class="slot-emoji">📦</div>'}
          </div>
          <div class="slot-name-label">${s.name}</div>
          <div class="slot-tag-badge">${s.tag}</div>
        `,a.addEventListener("click",()=>{this.selectSlot(i)})):a.innerHTML=`
          <div class="slot-empty-cross">+</div>
          <div class="slot-empty-num">${i+1}</div>
        `,e.appendChild(a)}const n=document.getElementById("inv-capacity-badge");n&&(n.textContent=`${t} / ${this.maxSlots} Ô CHỨA`)}addItem(e){const t=this.slots.findIndex(n=>n===null);return t===-1?!1:(this.slots[t]=e,this.isOpen&&this.renderGrid(),!0)}removeItem(e){const t=this.slots.findIndex(n=>n&&n.id===e);return t!==-1?(this.slots[t]=null,this.selectedSlotIndex===t&&this.deselect(),this.isOpen&&this.renderGrid(),!0):!1}hasItem(e){return this.slots.some(t=>t&&t.id===e)}}var ac={};(function r(e,t,n,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),C=D.getContext("2d");C.fillRect(0,0,1,1);var oe=D.transferToImageBitmap();C.createPattern(oe,"no-repeat")}catch{return!1}return!0})();function c(){}function l(D){var C=t.exports.Promise,oe=C!==void 0?C:e.Promise;return typeof oe=="function"?new oe(D):(D(c,c),null)}var h=(function(D,C){return{transform:function(oe){if(D)return oe;if(C.has(oe))return C.get(oe);var me=new OffscreenCanvas(oe.width,oe.height),k=me.getContext("2d");return k.drawImage(oe,0,0),C.set(oe,me),me},clear:function(){C.clear()}}})(a,new Map),u=(function(){var D=Math.floor(16.666666666666668),C,oe,me={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(K){var se=Math.random();return me[se]=requestAnimationFrame(function q(ae){k===ae||k+D-1<ae?(k=ae,delete me[se],K()):me[se]=requestAnimationFrame(q)}),se},oe=function(K){me[K]&&cancelAnimationFrame(me[K])}):(C=function(K){return setTimeout(K,D)},oe=function(K){return clearTimeout(K)}),{frame:C,cancel:oe}})(),d=(function(){var D,C,oe={};function me(k){function K(se,q){k.postMessage({options:se||{},callback:q})}k.init=function(q){var ae=q.transferControlToOffscreen();k.postMessage({canvas:ae},[ae])},k.fire=function(q,ae,xe){if(C)return K(q,null),C;var ge=Math.random().toString(36).slice(2);return C=l(function(De){function Fe(Re){Re.data.callback===ge&&(delete oe[ge],k.removeEventListener("message",Fe),C=null,h.clear(),xe(),De())}k.addEventListener("message",Fe),K(q,ge),oe[ge]=Fe.bind(null,{data:{callback:ge}})}),C},k.reset=function(){k.postMessage({reset:!0});for(var q in oe)oe[q](),delete oe[q]}}return function(){if(D)return D;if(!n&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([k])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}me(D)}return D}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(D,C){return C?C(D):D}function _(D){return D!=null}function p(D,C,oe){return g(D&&_(D[C])?D[C]:f[C],oe)}function m(D){return D<0?0:Math.floor(D)}function T(D,C){return Math.floor(Math.random()*(C-D))+D}function M(D){return parseInt(D,16)}function v(D){return D.map(L)}function L(D){var C=String(D).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:M(C.substring(0,2)),g:M(C.substring(2,4)),b:M(C.substring(4,6))}}function I(D){var C=p(D,"origin",Object);return C.x=p(C,"x",Number),C.y=p(C,"y",Number),C}function A(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function P(D){var C=D.getBoundingClientRect();D.width=C.width,D.height=C.height}function b(D){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=D,C}function S(D,C,oe,me,k,K,se,q,ae){D.save(),D.translate(C,oe),D.rotate(K),D.scale(me,k),D.arc(0,0,1,se,q,ae),D.restore()}function U(D){var C=D.angle*(Math.PI/180),oe=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-C+(.5*oe-Math.random()*oe),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function W(D,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var oe=C.tick++/C.totalTicks,me=C.x+C.random*C.tiltCos,k=C.y+C.random*C.tiltSin,K=C.wobbleX+C.random*C.tiltCos,se=C.wobbleY+C.random*C.tiltSin;if(D.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-oe)+")",D.beginPath(),o&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))D.fill(ie(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(K-me)*.1,Math.abs(se-k)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var q=Math.PI/10*C.wobble,ae=Math.abs(K-me)*.1,xe=Math.abs(se-k)*.1,ge=C.shape.bitmap.width*C.scalar,De=C.shape.bitmap.height*C.scalar,Fe=new DOMMatrix([Math.cos(q)*ae,Math.sin(q)*ae,-Math.sin(q)*xe,Math.cos(q)*xe,C.x,C.y]);Fe.multiplySelf(new DOMMatrix(C.shape.matrix));var Re=D.createPattern(h.transform(C.shape.bitmap),"no-repeat");Re.setTransform(Fe),D.globalAlpha=1-oe,D.fillStyle=Re,D.fillRect(C.x-ge/2,C.y-De/2,ge,De),D.globalAlpha=1}else if(C.shape==="circle")D.ellipse?D.ellipse(C.x,C.y,Math.abs(K-me)*C.ovalScalar,Math.abs(se-k)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):S(D,C.x,C.y,Math.abs(K-me)*C.ovalScalar,Math.abs(se-k)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var R=Math.PI/2*3,st=4*C.scalar,Oe=8*C.scalar,Be=C.x,Me=C.y,Ze=5,ne=Math.PI/Ze;Ze--;)Be=C.x+Math.cos(R)*Oe,Me=C.y+Math.sin(R)*Oe,D.lineTo(Be,Me),R+=ne,Be=C.x+Math.cos(R)*st,Me=C.y+Math.sin(R)*st,D.lineTo(Be,Me),R+=ne;else D.moveTo(Math.floor(C.x),Math.floor(C.y)),D.lineTo(Math.floor(C.wobbleX),Math.floor(k)),D.lineTo(Math.floor(K),Math.floor(se)),D.lineTo(Math.floor(me),Math.floor(C.wobbleY));return D.closePath(),D.fill(),C.tick<C.totalTicks}function G(D,C,oe,me,k){var K=C.slice(),se=D.getContext("2d"),q,ae,xe=l(function(ge){function De(){q=ae=null,se.clearRect(0,0,me.width,me.height),h.clear(),k(),ge()}function Fe(){n&&!(me.width===i.width&&me.height===i.height)&&(me.width=D.width=i.width,me.height=D.height=i.height),!me.width&&!me.height&&(oe(D),me.width=D.width,me.height=D.height),se.clearRect(0,0,me.width,me.height),K=K.filter(function(Re){return W(se,Re)}),K.length?q=u.frame(Fe):De()}q=u.frame(Fe),ae=De});return{addFettis:function(ge){return K=K.concat(ge),xe},canvas:D,promise:xe,reset:function(){q&&u.cancel(q),ae&&ae()}}}function Z(D,C){var oe=!D,me=!!p(C||{},"resize"),k=!1,K=p(C,"disableForReducedMotion",Boolean),se=s&&!!p(C||{},"useWorker"),q=se?d():null,ae=oe?A:P,xe=D&&q?!!D.__confetti_initialized:!1,ge=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,De;function Fe(R,st,Oe){for(var Be=p(R,"particleCount",m),Me=p(R,"angle",Number),Ze=p(R,"spread",Number),ne=p(R,"startVelocity",Number),w=p(R,"decay",Number),x=p(R,"gravity",Number),B=p(R,"drift",Number),te=p(R,"colors",v),Q=p(R,"ticks",Number),j=p(R,"shapes"),Ce=p(R,"scalar"),fe=!!p(R,"flat"),Se=I(R),je=Be,re=[],ve=D.width*Se.x,Ne=D.height*Se.y;je--;)re.push(U({x:ve,y:Ne,angle:Me,spread:Ze,startVelocity:ne,color:te[je%te.length],shape:j[T(0,j.length)],ticks:Q,decay:w,gravity:x,drift:B,scalar:Ce,flat:fe}));return De?De.addFettis(re):(De=G(D,re,ae,st,Oe),De.promise)}function Re(R){var st=K||p(R,"disableForReducedMotion",Boolean),Oe=p(R,"zIndex",Number);if(st&&ge)return l(function(ne){ne()});oe&&De?D=De.canvas:oe&&!D&&(D=b(Oe),document.body.appendChild(D)),me&&!xe&&ae(D);var Be={width:D.width,height:D.height};q&&!xe&&q.init(D),xe=!0,q&&(D.__confetti_initialized=!0);function Me(){if(q){var ne={getBoundingClientRect:function(){if(!oe)return D.getBoundingClientRect()}};ae(ne),q.postMessage({resize:{width:ne.width,height:ne.height}});return}Be.width=Be.height=null}function Ze(){De=null,me&&(k=!1,e.removeEventListener("resize",Me)),oe&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,xe=!1)}return me&&!k&&(k=!0,e.addEventListener("resize",Me,!1)),q?q.fire(R,Be,Ze):Fe(R,Be,Ze)}return Re.reset=function(){q&&q.reset(),De&&De.reset()},Re}var ee;function Y(){return ee||(ee=Z(null,{useWorker:!0,resize:!0})),ee}function ie(D,C,oe,me,k,K,se){var q=new Path2D(D),ae=new Path2D;ae.addPath(q,new DOMMatrix(C));var xe=new Path2D;return xe.addPath(ae,new DOMMatrix([Math.cos(se)*k,Math.sin(se)*k,-Math.sin(se)*K,Math.cos(se)*K,oe,me])),xe}function X(D){if(!o)throw new Error("path confetti are not supported in this browser");var C,oe;typeof D=="string"?C=D:(C=D.path,oe=D.matrix);var me=new Path2D(C),k=document.createElement("canvas"),K=k.getContext("2d");if(!oe){for(var se=1e3,q=se,ae=se,xe=0,ge=0,De,Fe,Re=0;Re<se;Re+=2)for(var R=0;R<se;R+=2)K.isPointInPath(me,Re,R,"nonzero")&&(q=Math.min(q,Re),ae=Math.min(ae,R),xe=Math.max(xe,Re),ge=Math.max(ge,R));De=xe-q,Fe=ge-ae;var st=10,Oe=Math.min(st/De,st/Fe);oe=[Oe,0,0,Oe,-Math.round(De/2+q)*Oe,-Math.round(Fe/2+ae)*Oe]}return{type:"path",path:C,matrix:oe}}function de(D){var C,oe=1,me="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?C=D:(C=D.text,oe="scalar"in D?D.scalar:oe,k="fontFamily"in D?D.fontFamily:k,me="color"in D?D.color:me);var K=10*oe,se=""+K+"px "+k,q=new OffscreenCanvas(K,K),ae=q.getContext("2d");ae.font=se;var xe=ae.measureText(C),ge=Math.ceil(xe.actualBoundingBoxRight+xe.actualBoundingBoxLeft),De=Math.ceil(xe.actualBoundingBoxAscent+xe.actualBoundingBoxDescent),Fe=2,Re=xe.actualBoundingBoxLeft+Fe,R=xe.actualBoundingBoxAscent+Fe;ge+=Fe+Fe,De+=Fe+Fe,q=new OffscreenCanvas(ge,De),ae=q.getContext("2d"),ae.font=se,ae.fillStyle=me,ae.fillText(C,Re,R);var st=1/oe;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[st,0,0,st,-ge*st/2,-De*st/2]}}t.exports=function(){return Y().apply(this,arguments)},t.exports.reset=function(){Y().reset()},t.exports.create=Z,t.exports.shapeFromPath=X,t.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ac,!1);const Bo=ac.exports;ac.exports.create;const ko={active:3718648,locked:2278750,hint:16498468},Wv=Jt.xGlassOuter-ti.glass/2,Xv=.26,qv=.35,Kv=3.2;class Yv{constructor(e){this.canvas=e,this.disposed=!1,this.scene=new Gr,this.camera=new Dt(38,1,.01,100),this.camera.position.set(0,0,1.2),this.renderer=new Xr({canvas:e,antialias:!0,alpha:!0}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.toneMapping=ks,this.renderer.toneMappingExposure=1.15,this.raycaster=new Bh,this.pointerNdc=new we,this.pointerInside=!1,this.pointerPlane=new Qn,this.caseGroup=null,this.sideGlass=null,this.glassOn=!0,this.glassT=1,this.glassGoal=1,this.zoneMeshes=new Map,this.zoneList=[],this.screwGroups=new Map,this.placedParts=new Map,this.ghost=null,this.activeZone=null,this.lockedZone=null,this.powered=!1,this._lastFocusZone=null,this.zoom=1,this.screwHolders=[],this.cableHolders=[],this.pivot=new Je,this.scene.add(this.pivot),this.caseRoot=new Je,this.caseRoot.rotation.y=-Math.PI/2,this.caseRoot.position.set(0,-.018,0),this.pivot.add(this.caseRoot),this.cameraGoal=new E,this.lookGoal=new E,this.cameraMoving=!1,this._v1=new E,this._v2=new E,this._half=new E,this._centre=new E,this._hit=new E,this._screwAxis={x:new E(1,0,0),y:new E(0,1,0)},this.setupLights(),this.buildCase()}setupLights(){this.scene.add(new Vr(15857145,.75));const e=new Sn(16777215,1.9);e.position.set(1.4,2.4,2.6),this.scene.add(e);const t=new Sn(8246268,1);t.position.set(-2.4,.6,1.2),this.scene.add(t);const n=new Sn(11032055,.9);n.position.set(.4,1.6,-2.4),this.scene.add(n),this.powerLight=new ec(3718648,0,.6),this.powerLight.position.set(...Zt.power.anchor),this.caseRoot.add(this.powerLight)}buildCase(){const e=qh({xray:!0});this.caseGroup=e.caseGroup,this.sideGlass=e.sideGlass,this.caseGroup.position.set(0,0,0),this.caseGroup.quaternion.identity(),this.caseGroup.scale.set(1,1,1),this.caseRoot.add(this.caseGroup),this.pivot.updateMatrixWorld(!0),this.caseGroup.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1)}),this.buildZoneMarkers(),this.setGlass(!0,!0),this.focusCase(),this.snapCamera()}buildZoneMarkers(){const e=new Le(1,1,1);Object.entries(Zt).forEach(([t,n])=>{const i=new Pe(e,new Wt({color:ko.hint,transparent:!0,opacity:0,depthWrite:!1}));i.position.set(...n.anchor),i.scale.set(Math.max(n.size[0],.022),Math.max(n.size[1],.022),Math.max(n.size[2],.022)),i.visible=!1,i.renderOrder=5,i.userData.zoneId=t,this.caseRoot.add(i),this.zoneMeshes.set(t,i),this.zoneList.push(i)})}setGlass(e,t=!1){this.glassOn=e,this.glassGoal=e?1:0,t&&(this.glassT=this.glassGoal,this.applyGlass())}applyGlass(){this.sideGlass&&(this.sideGlass.visible=this.glassT>.02,this.sideGlass.position.x=Wv+(1-this.glassT)*Xv)}focusCase(){this._lastFocusZone=null,this.frameBox(new pt(new E(...Wl.min),new E(...Wl.max)),1.18)}focusZone(e){const t=Zt[e];if(!t)return this.focusCase();this._lastFocusZone=e;const n=.05,i=new E(Math.max(t.size[0],.03)/2+n,Math.max(t.size[1],.03)/2+n,Math.max(t.size[2],.03)/2+n),s=new E(...t.anchor);this.frameBox(new pt(s.clone().sub(i),s.clone().add(i)),1.35)}setFocusZone(e){e?this.focusZone(e):this.focusCase()}frameBox(e,t){this.caseRoot.updateMatrixWorld(!0);const n=new pt;for(let l=0;l<8;l++)n.expandByPoint(this._v1.set(l&1?e.max.x:e.min.x,l&2?e.max.y:e.min.y,l&4?e.max.z:e.min.z).applyMatrix4(this.caseRoot.matrixWorld));const i=n.getSize(new E),s=n.getCenter(new E),o=Math.tan(qi.degToRad(this.camera.fov)/2),a=o*Math.max(this.camera.aspect,.2),c=(Math.max(i.y/2/o,i.x/2/a)*t+i.z/2)/this.zoom;this.lookGoal.copy(s),this.cameraGoal.set(s.x,s.y,s.z+c),this.cameraMoving=!0}zoomBy(e){const t=qi.clamp(this.zoom*Math.pow(1.15,-e),qv,Kv);return Math.abs(t-this.zoom)<1e-4?this.zoom:(this.zoom=t,this._refocus(),this.zoom)}resetZoom(){this.zoom=1,this._refocus()}_refocus(){this._lastFocusZone?this.focusZone(this._lastFocusZone):this.focusCase(),this.snapCamera()}snapCamera(){this.camera.position.copy(this.cameraGoal),this.camera.lookAt(this.lookGoal),this.cameraMoving=!1}setPointer(e,t){const n=this.canvas.getBoundingClientRect();return!n.width||!n.height?!1:(this.pointerNdc.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),this.pointerInside=e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom,this.pointerInside)}clearPointer(){this.pointerInside=!1}pointerWorld(){this.raycaster.setFromCamera(this.pointerNdc,this.camera);const e=this._v2.set(0,0,1).applyQuaternion(this.camera.quaternion).negate();return this.pointerPlane.setFromNormalAndCoplanarPoint(e,this.lookGoal),this.raycaster.ray.intersectPlane(this.pointerPlane,this._hit)?(this.caseRoot.updateMatrixWorld(!0),this.caseRoot.worldToLocal(this._hit.clone())):null}isOverZone(e,t=24){const n=Zt[e],i=this.zoneMeshes.get(e);if(!n||!i||!this.pointerInside)return!1;this.pivot.updateMatrixWorld(!0),i.updateMatrixWorld(!0);const s=this.canvas.getBoundingClientRect();if(!s.width||!s.height)return!1;const o=p=>{const m=p.clone().project(this.camera);return[(m.x+1)/2*s.width,(-m.y+1)/2*s.height,m.z]},a=new E;i.getWorldPosition(a);const[c,l,h]=o(a);if(!Number.isFinite(c)||!Number.isFinite(l)||h>1)return!1;const u=(this.pointerNdc.x+1)/2*s.width,d=(-this.pointerNdc.y+1)/2*s.height,f=new E(Math.max(n.size[0],.03)/2,Math.max(n.size[1],.03)/2,Math.max(n.size[2],.03)/2);let g=0,_=0;for(let p=0;p<8;p++){const[m,T]=o(this._v1.set(a.x+(p&1?f.x:-f.x),a.y+(p&2?f.y:-f.y),a.z+(p&4?f.z:-f.z)));g=Math.max(g,Math.abs(m-c)),_=Math.max(_,Math.abs(T-l))}return g=Math.max(g,12),_=Math.max(_,12),Math.abs(u-c)<=g+t&&Math.abs(d-l)<=_+t}get caseInterior(){if(!this._interior){const e=ti.sheet+.004;this._interior=new pt(new E(-.21/2+e,e,-.45/2+e),new E(ti.width/2-e,ti.feet+ti.height-e,ti.depth/2-e))}return this._interior}setGhostItem(e){return this.clearGhost(),e?this._loadFitted(e).then(t=>{if(!t||this.disposed)return!1;const n=new Je;return n.add(t),n.visible=!1,this.caseRoot.add(n),this.ghost={item:e,group:n,zoneId:null,mountZone:null,bounds:null,centreOffset:new E,half:new E},!0}):Promise.resolve(!1)}clearGhost(){this.ghost&&(this.caseRoot.remove(this.ghost.group),this.ghost=null),this.activeZone&&this.setZoneState(this.activeZone,"active")}get ghostOverTarget(){return!!(this.ghost&&this.ghost.zoneId)}_applyGhostMount(e,t){const n=this.ghost;if(n.mountZone===e)return;const i=Vl(t);i&&n.group.quaternion.copy(i),n.group.position.set(0,0,0),n.group.updateMatrixWorld(!0);const s=new pt().setFromObject(n.group),o=new ze().copy(n.group.parent.matrixWorld).invert(),a=new pt;for(let c=0;c<8;c++)a.expandByPoint(this._v1.set(c&1?s.max.x:s.min.x,c&2?s.max.y:s.min.y,c&4?s.max.z:s.min.z).applyMatrix4(o));n.bounds=a,n.centreOffset.copy(a.getCenter(this._centre)),n.half.copy(a.getSize(this._half)).multiplyScalar(.5),n.mountZone=e}updateGhost(e,t=!0){if(!this.ghost)return;if(!t||!e||!this.pointerInside){this.ghost.group.visible=!1,this.ghost.zoneId=null;return}const n=this.pointerWorld();if(!n)return;const i=Zt[e],s=this.isOverZone(e);this.ghost.group.visible=!0,this._applyGhostMount(e,i),s?(this.ghost.group.position.set(...i.anchor).sub(this.ghost.centreOffset),this.ghost.zoneId=e,this.setZoneState(e,"active")):(this.ghost.group.position.copy(n),this.ghost.group.position.lerp(this._v1.fromArray(i.anchor),.16),this.ghost.zoneId=null,this.setZoneState(e,"hint")),this.clampGhostInside()}clampGhostInside(){if(!this.ghost)return;const e=this.caseInterior,{centre:t,half:n}=this._mountedExtents(),i=this.ghost.group.position,s=(o,a,c)=>a>c?(a+c)/2:qi.clamp(o,a,c);i.x=s(i.x,e.min.x-t.x+n.x,e.max.x-t.x-n.x),i.y=s(i.y,e.min.y-t.y+n.y,e.max.y-t.y-n.y),i.z=s(i.z,e.min.z-t.z+n.z,e.max.z-t.z-n.z)}_mountedExtents(){const e=this.ghost;return{centre:(e==null?void 0:e.centreOffset)||this._centre.set(0,0,0),half:(e==null?void 0:e.half)||this._half.set(0,0,0)}}_centreOnAnchor(e,t){e.position.set(0,0,0),e.updateMatrixWorld(!0);const n=new pt().setFromObject(e).getCenter(new E);e.position.set(...t).sub(n)}_mountedHalfExtent(){return this._mountedExtents().half}setZoneState(e,t){Object.entries(this.zoneMeshes).forEach(([n,i])=>{const s=this.lockedZone===n,o=n===e;i.material.color.setHex(s?ko.locked:o?ko[t]:16777215),i.visible=s||o})}clearZoneStates(){this.zoneMeshes.forEach(e=>{e.visible=!1,e.material.opacity=0})}showScrews(e,t){this.hideScrews();const n=Zt[e];if(!n||!t)return;const i=n.face||[1,0,0],s=n.faceLift??.008,o=Math.abs(i[1])>.5,a=i[2]<-.5,c=new Je,l=new ht({color:16498468,emissive:8016384,emissiveIntensity:1.3,roughness:.35,metalness:.85}),h=new Wt({color:16498468,transparent:!0,opacity:.65,depthWrite:!1}),u=new kt(.008,.007,.005,14),d=new si(.014,.0022,8,22),f=(n.screwPts||this._gridPoints(n,t)).slice(0,t);f.forEach(([g,_])=>{const p=[...n.anchor];o?(p[1]+=s,p[2]+=g,p[0]+=_):a?(p[2]-=s,p[0]+=g,p[1]+=_):(p[0]+=i[0]*s,p[1]+=g,p[2]+=_);const m=new Je,T=new Pe(u,l),M=new Pe(d,h);o?(M.rotation.x=Math.PI/2,M.position.y=8e-4):a?(T.rotation.x=Math.PI/2,M.position.z=-8e-4):(T.rotation.z=Math.PI/2,M.rotation.y=Math.PI/2,M.position.x=8e-4*Math.sign(i[0]||1)),m.add(T,M),m.position.set(...p),m.userData.screwAxis=o?this._screwAxis.y:this._screwAxis.x,c.add(m),this.screwHolders.push(m)}),this.caseRoot.add(c),this.screwGroups.set(e,{group:c,remaining:Math.min(t,f.length),total:t})}_gridPoints(e,t){const n=[],i=Math.ceil(Math.sqrt(t));for(let s=0;s<t;s++){const o=s%i,a=Math.floor(s/i),c=Math.ceil(t/i);n.push([c===1?0:(a/(c-1)-.5)*e.size[1]*.7,i===1?0:(o/(i-1)-.5)*e.size[2]*.7])}return n}hideScrews(e){(e?[e]:[...this.screwGroups.keys()]).forEach(n=>{const i=this.screwGroups.get(n);i&&this.caseRoot.remove(i.group),this.screwGroups.delete(n)}),this.screwHolders=[]}get screwsRemaining(){let e=0;return this.screwGroups.forEach(t=>{e+=t.remaining}),e}screwsFor(e){const t=this.screwGroups.get(e);return t?t.remaining:0}hitScrew(e,t,n){const i=this.screwGroups.get(n);if(!i||i.remaining===0)return"none";const s=this.canvas.getBoundingClientRect();if(!s.width||!s.height)return"miss";const o=e-s.left,a=t-s.top;let c=null,l=1/0;if(i.group.children.forEach(u=>{if(u.userData.driven)return;const d=new E;u.getWorldPosition(d);const f=d.project(this.camera);if(f.z>1)return;const g=(f.x+1)/2*s.width,_=(-f.y+1)/2*s.height,p=Math.hypot(g-o,_-a);p<l&&(l=p,c=u)}),!c)return"none";const h=i.remaining===1?90:36;return l>h?"miss":(c.userData.driven=!0,c.userData.driving=1e-4,i.remaining--,i.remaining===0&&this.hideScrews(n),"tightened")}showCableTargets(e,t){this.hideCableTargets();const n=Zt[t];if(!n||!e.length)return;const i=new Je,s=new ht({color:16347926,emissive:8138002,emissiveIntensity:1.5,roughness:.4,metalness:.3}),o=new Wt({color:16486972,transparent:!0,opacity:.45,depthWrite:!1}),a=new Le(.014,.011,.022),c=new si(.015,.0018,6,20);e.forEach(l=>{const h=new Je,u=new Pe(a,s),d=new Pe(c,o);d.rotation.y=Math.PI/2,h.add(u,d),h.position.set(n.anchor[0]+l.offset[0],n.anchor[1]+l.offset[1],n.anchor[2]+l.offset[2]),h.userData.cableId=l.id,i.add(h),this.cableHolders.push(h)}),this.caseRoot.add(i),this.cableGroup=i}markCableDone(e){this.cableGroup&&this.cableGroup.children.forEach(t=>{t.userData.cableId===e&&(t.userData.done=!0,t.children.forEach(n=>{n.material&&n.material.color&&(n.material.color.setHex(2278750),n.material.emissive&&n.material.emissive.setHex(1332013))}))})}hideCableTargets(){this.cableGroup&&this.caseRoot.remove(this.cableGroup),this.cableGroup=null,this.cableHolders=[]}placePart(e,t,n){const i=Zt[t];return i?this._loadFitted(e).then(s=>{if(!s||this.disposed)return!1;s.traverse(c=>{c.isMesh&&(c.castShadow=!1,c.receiveShadow=!1)});const o=Vl(i);o&&s.quaternion.copy(o);const a=new Je;return a.add(s),this._centreOnAnchor(a,i.anchor),this.caseRoot.add(a),this.placedParts.set(n,{item:e,zoneId:t,group:a}),this.lockedZone=t,this.setZoneState(t,"locked"),!0}):Promise.resolve(!1)}_loadFitted(e){return Kr(e.modelPath).then(t=>{if(!t)return console.warn(`Build zone could not load ${e.name}`),null;const{group:n}=Ws(t,{realSize:e.realSize,realDims:qr(e),flat:!0});return n})}hasPart(e){return this.placedParts.has(e)}partAt(e){for(const[t,n]of this.placedParts)if(n.zoneId===e)return t;return null}removePart(e){const t=this.placedParts.get(e);return t?(this.caseRoot.remove(t.group),this.placedParts.delete(e),this.lockedZone===t.zoneId&&(this.lockedZone=null),!0):!1}clearParts(){[...this.placedParts.keys()].forEach(e=>this.removePart(e))}flashZone(e){const t=this.zoneMeshes.get(e);t&&(t.userData.flash=.55)}setPower(e){this.powered=e,e||(this.powerLight.intensity=0)}resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;const n=Math.floor(e*this.pixelRatio),i=Math.floor(t*this.pixelRatio);(this.canvas.width!==n||this.canvas.height!==i)&&this.renderer.setSize(e,t,!1);const s=e/t;Math.abs(s-this.camera.aspect)>1e-6&&(this.camera.aspect=s,this.camera.updateProjectionMatrix(),this.cameraMoving||this._refocus())}setFocusZone(e){e?this.focusZone(e):this.focusCase()}update(e,t){var i;if(this.resize(),Math.abs(this.glassT-this.glassGoal)>.001&&(this.glassT+=(this.glassGoal-this.glassT)*Math.min(1,e*6),this.applyGlass()),this.cameraMoving){const s=Math.min(1,e*5.5);this.camera.position.lerp(this.cameraGoal,s),this.camera.position.distanceTo(this.cameraGoal)<.004?this.snapCamera():this.camera.lookAt(this.lookGoal)}for(let s=0;s<this.screwHolders.length;s++){const o=this.screwHolders[s],a=o.userData;a.driving===void 0||a.driving>=1||(a.driving=Math.min(1,a.driving+e*4.5),a.screwAxis&&o.rotateOnAxis(a.screwAxis,e*30),o.scale.setScalar(1-a.driving*.2),a.driving>=1&&(delete a.driving,o.scale.setScalar(.55),o.children[1]&&(o.children[1].visible=!1)))}const n=.5+.5*Math.sin(t*.005);for(let s=0;s<this.zoneList.length;s++){const o=this.zoneList[s];if(!o.visible)continue;let a=o.userData.zoneId===this.lockedZone?.26:.18;o.userData.zoneId===this.activeZone&&(a=.2+n*.1),o.userData.flash>0&&(o.userData.flash=Math.max(0,o.userData.flash-e),a=Math.max(a,.55)),o.material.opacity=a}this.powered&&(this.powerLight.intensity=1.1+Math.sin(t*.004)*.3);for(let s=0;s<this.cableHolders.length;s++){const o=this.cableHolders[s];o.userData.done||(i=o.children[1])==null||i.scale.setScalar(1+Math.sin(t*.006+s)*.12)}this.renderer.render(this.scene,this.camera)}finalize(){this.hideScrews(),this.hideCableTargets(),this.clearZoneStates(),this.clearGhost(),this.setGlass(!0,!0),this.setPower(!0),this.caseRoot.updateMatrixWorld(!0);const e=new Je;e.name="assembledPC",e.position.copy(this.caseRoot.position),e.quaternion.copy(this.caseRoot.quaternion),e.scale.copy(this.caseRoot.scale);const t=this.caseGroup.clone(!0);t.position.copy(this.caseGroup.position),t.quaternion.copy(this.caseGroup.quaternion),t.scale.copy(this.caseGroup.scale),t.traverse(s=>{if(!s.isMesh)return;(Array.isArray(s.material)?s.material:[s.material]).forEach(a=>{a&&a.opacity>=.9&&(a.transparent=!1,a.depthWrite=!0)}),s.castShadow=!0,s.receiveShadow=!0}),t.name="assembledCase",e.add(t);const n=[];this.placedParts.forEach((s,o)=>{const a=s.group.clone(!0);a.position.copy(s.group.position),a.quaternion.copy(s.group.quaternion),a.scale.copy(s.group.scale),a.name="installedPart",e.add(a),n.push({key:o,item:s.item,zoneId:s.zoneId}),this.caseRoot.remove(s.group)}),this.placedParts.clear(),this.lockedZone=null;const i=t.getObjectByName("sideGlass")||null;return{group:e,parts:n,glass:i}}dispose(){this.disposed=!0,this.clearGhost(),this.clearParts(),this.hideScrews(),this.hideCableTargets(),this.caseRoot&&this.pivot.remove(this.caseRoot),this.renderer.dispose(),this.renderer.forceContextLoss&&this.renderer.forceContextLoss()}}class Zv{constructor({size:e=128}={}){this.size=e,this.cache=new Map,this.pending=new Map,this.renderer=null,this.scene=null,this.camera=null,this.unavailable=!1}_ensureContext(){if(this.renderer||this.disposed)return!!this.renderer;try{this.renderer=new Xr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(this.size,this.size,!1),this.renderer.setClearColor(0,0),this.renderer.toneMapping=ks,this.renderer.toneMappingExposure=1.15}catch(n){return this.renderer=null,this.unavailable=!0,console.warn("Thumbnail context unavailable:",n),!1}this.scene=new Gr,this.camera=new Dt(35,1,.01,100);const e=new Sn(16777215,2.4);e.position.set(2,4,3),this.scene.add(e);const t=new Sn(3718648,1.6);return t.position.set(-3,-1,-2),this.scene.add(t),this.scene.add(new Vr(16777215,.85)),!0}get(e){if(!e||this.disposed||this.unavailable)return Promise.resolve(null);if(this.cache.has(e.id))return Promise.resolve(this.cache.get(e.id));if(this.pending.has(e.id))return this.pending.get(e.id);const t=new Promise(n=>{let i=!1;const s=o=>{i||(i=!0,n(o))};try{if(!this._ensureContext())return s(null)}catch(o){return console.warn(`Thumbnail context failed for ${e.name}:`,o),s(null)}Kr(e.modelPath).then(o=>{if(!o)return s(null);try{const{group:a,size:c}=Ws(o,{realSize:e.realSize,realDims:qr(e),flat:!0}),l=Math.max(...c.toArray())||1,h=new Je;h.rotation.x=.28;const u=new Je;u.scale.setScalar(this.size*.78/(l*1.9)),u.add(a),h.add(u),this.scene.add(h),this.scene.updateMatrixWorld(!0);const f=new pt().setFromObject(h).getSize(new E).multiplyScalar(.5),g=Math.tan(qi.degToRad(this.camera.fov)/2),_=Math.max(f.y/g,f.x/g)*1.12+f.z;this.camera.position.set(0,0,_),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera);const p=this.renderer.domElement.toDataURL("image/png");this.scene.remove(h),this.cache.set(e.id,p),s(p)}catch(a){console.warn(`Thumbnail failed for ${e.name}:`,a),s(null)}}).catch(()=>s(null))});return this.pending.set(e.id,t),t.then(()=>this.pending.delete(e.id),()=>this.pending.delete(e.id)),t}prime(e){e.forEach(t=>this.get(t))}dispose(){this.disposed=!0,this.cache.clear(),this.pending.clear(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss&&this.renderer.forceContextLoss(),this.renderer=null),this.scene=null,this.camera=null}}const Lr=[{step:1,zone:"glass",action:"glass",shortName:"Tháo nắp kính cường lực",title:"Bước 1 · Tháo nắp kính cường lực",instruction:"Nới 4 núm vặn ở góc rồi kéo nắp kính ra khỏi thùng. Thùng máy đang hiển thị ở chế độ trong suốt 50% để bạn nhìn thấy toàn bộ ruột thùng.",tip:"Bấm nút THÁO NẮP KÍNH, hoặc bấm trực tiếp vào tấm kính bên trong khung Build Zone.",accepts:[],need:0},{step:2,zone:"motherboard",action:"screw",accepts:["tag:Motherboard"],need:1,shortName:"Lắp bo mạch chủ vào chân ốc đồng",title:"Bước 2 · Lắp bo mạch chủ",instruction:"Đặt bo mạch chủ ATX lên các chân ốc đồng phía trong khay bo mạch, vuông vồn theo các lỗ khoan, rồi siết chặt từng con ốc để cố định.",tip:"Lấy bo mạch ra khỏi kho, rê chuột vào Build Zone cho model theo con trỏ, rồi bấm chuột trái khi vị trí đã khớp vùng màu xanh. Số ốc sẽ hiện đúng bằng số chân ốc thực sự có trên khay.",shortHint:"Chọn bo mạch chủ → đặt vào khay → siết hết ốc"},{step:3,zone:"cpu",action:"seat",accepts:["tag:CPU"],need:1,shortName:"Lắp CPU vào socket",title:"Bước 3 · Lắp bộ vi xử lý",instruction:"Nhận CPU theo góc tam giác vàng, hạ nhẹ xuống socket rồi đóng khóa lưỡi cài. Tuyệt đối không dùng lực ép mạnh xuống socket.",tip:"Bấm chuột trái một lần nữa khi model đã nằm đúng vị trí để ấn CPU xuống socket và khóa lại.",shortHint:"Ghép đúng góc tam giác vàng rồi ấn xuống"},{step:4,zone:"cooler",action:"paste",accepts:["tag:CPU Cooler"],need:1,shortName:"Bôi keo và lắp tản nhiệt",title:"Bước 4 · Bôi keo tản nhiệt & lắp tản khí",instruction:"Bôi một lượng keo tản nhiệt cỡ hạt đậu lên nắp lưng CPU, đặt tản nhiệt lên socket rồi siết 4 ốc theo hình chữ X để ép đều.",tip:"Quạt tản nhiệt phải hướng về phía quạt trước case để hút khí mát từ ngoài vào.",shortHint:"Bôi keo → đặt tản → siết 4 ốc hình chữ X"},{step:5,zone:"ram",action:"seat",accepts:["tag:RAM"],need:2,shortName:"Cắm thanh RAM vào khe Dual-Channel",title:"Bước 5 · Cắm thanh RAM",instruction:"Cắm 2 thanh RAM vào khe số 2 và khe số 4 (DIMM A2 & B2) để kích hoạt kênh đôi, rồi ấn hai đầu khe xuống cho tới khi cả hai bên khớp vào.",tip:"Khe DIMM nằm sát mép bo mạch về phía tấm che nguồn. Phải 2 thanh cho kênh đôi.",shortHint:"2 thanh vào khe A2 & B2"},{step:6,zone:"ssd",action:"screw",accepts:["tag:Storage"],need:1,shortName:'Lắp ổ cứng SSD 2.5"',title:"Bước 6 · Lắp ổ cứng thể rắn",instruction:'Đặt SSD 2.5" vào khay đĩa cứng trên tấm che nguồn, cắm cáp SATA vào đầu nối rồi siết 2 ốc phía đuôi ổ.',tip:"SSD không có đầu đọc đầu, nên có thể cắm theo cả hai chiều mà không sợ hỏng.",shortHint:"Đặt vào khay → cắm SATA → siết 2 ốc"},{step:7,zone:"psu",action:"screw",accepts:["tag:Power Supply"],need:1,shortName:"Lắp bộ nguồn vào hộc đáy",title:"Bước 7 · Lắp bộ nguồn",instruction:"Lắp nguồn ATX vào hộc dưới đáy với quạt hướng xuống lưới lọc bụi, cắm dây nguồn AC vào mặt sau rồi siết 4 ốc vào thùng.",tip:"Nguồn nên lắp ở chế độ semi-modular: chỉ cắm những dây thật sự cần để gọn gàng trong thùng.",shortHint:"Quạt hướng xuống → siết 4 ốc"},{step:8,zone:"gpu",action:"screw",accepts:["tag:GPU"],need:1,shortName:"Lắp card đồ họa vào khe PCIe x16",title:"Bước 8 · Lắp card đồ họa",instruction:"Rút chân chốt khe PCIe x16, cắm card đồ họa vào khe gần CPU nhất, ấn card xuống hết đáy rồi siết 2 ốc vào thanh chốt phía sau thùng.",tip:"Card đồ họa rất nặng, giữ cả hai tay khi ấn và luôn kiểm tra mọi đầu cắm đã chặt trước khi đóng thùng.",shortHint:"Cắm khe PCIe x16 → siết chốt giữ card"},{step:9,zone:"cables",action:"cable",accepts:[],need:0,shortName:"Cắm hệ thống dây nguồn",title:"Bước 9 · Cắm dây nguồn",instruction:"Cắm cáp 24-pin ATX vào cạnh bo mạch chủ, cáp 8-pin CPU ở góc trên cùng, cáp 8-pin PCIe vào đầu card đồ họa và cáp SATA vào ổ cứng.",tip:"Khay ghim dây (grommet) cao su ở mép khay bo mạch giúp luồn cáp gọn gàng thay vì kẹp ngang qua linh kiện.",shortHint:"24-pin + 8-pin CPU + 8-pin PCIe + SATA"},{step:10,zone:"glass",action:"glass",accepts:[],need:0,shortName:"Đóng nắp kính bảo vệ",title:"Bước 10 · Đóng nắp kính",instruction:"Đặt nắp kính cường lực lại đúng vị trí rồi siết 4 núm vặn ở góc để chốt chặt.",tip:"Kiểm tra không còn khe hở giữa kính và khung thùng trước khi bật nguồn.",shortHint:"Đặt lại kính → siết 4 núm"},{step:11,zone:"display",action:"display",accepts:[],need:0,shortName:"Cắm cáp màn hình và dây nguồn AC",title:"Bước 11 · Kết nối màn hình",instruction:"Cắm cáp DisplayPort từ card đồ họa ra cổng màn hình và cắm dây nguồn AC vào bộ nguồn. Bật công tắc nguồn trên thùng.",tip:"Đầu cắm DisplayPort có móc chốt, phải ấn mạnh một chút mới vào được đến khít.",shortHint:"DisplayPort → dây AC → bật công tắc"},{step:12,zone:"power",action:"power",accepts:[],need:0,shortName:"Bật nguồn khởi động máy",title:"Bước 12 · Bật nguồn",instruction:"Nhấn nút nguồn trên nắp trên của thùng. Quạt quay, đèn RGB sáng lên, tiếng bíp POST vang lên và màn hình khởi động.",tip:"Mất khoảng 5-10 giây cho POST. Nếu không lên, hãy quay lại kiểm tra cáp 24-pin và CPU đã ngồi đúng chưa.",shortHint:"Nhấn nút nguồn và chờ POST"}],On=Lr.length;function br(r,e){return!r||!e?!1:r.accepts.some(t=>{if(t.startsWith("tag:")){const n=t.slice(4).toLowerCase();return(e.tag||"").toLowerCase()===n}return t===e.id})}function jv(r,e){if(!r||!e)return[];const t=[];for(const n of r.accepts||[]){const i=e.filter(a=>n.startsWith("tag:")?(a.tag||"").toLowerCase()===n.slice(4).toLowerCase():n===a.id);if(!i.length)continue;const s=i[0].tag,o=r.need||1;t.push({name:i[0].name,tag:s,count:o,label:o>1?`${i[0].name} × ${o}`:i[0].name,variants:i.length})}return t}const $v=[{at:900,state:"NO_SIGNAL",text:"Chưa có tín hiệu — đang chờ cáp màn hình"},{at:2400,state:"POST",text:"POST: đang nhận diện CPU, RAM, ổ cứng"},{at:5600,state:"OS",text:"POST thành công — hệ thống đã khởi động"}],Jv={motherboard:"▦",cpu:"▣",cooler:"✳",ram:"▤",gpu:"▭",storage:"▬",psu:"◫"};class Qv{constructor({inventoryUI:e,room:t,onRequestLock:n,onAssembled:i}){this.inventoryUI=e,this.room=t,this.onRequestLock=n,this.onAssembled=i,this.isOpen=!1,this.completed=new Set,this.currentStep=1,this.selectedItem=null,this.pendingPress=null,this.pasteApplied=!1,this.cableTargets=[],this.postTimers=[],this.isFinished=!1,this._v=new E,this.thumbnails=new Zv({size:144}),this.dom={modal:document.getElementById("build-mode-modal"),canvas:document.getElementById("build-case-canvas"),close:document.getElementById("btn-close-build-mode"),stepBadge:document.getElementById("build-step-badge"),stepTitle:document.getElementById("build-step-title"),stepDesc:document.getElementById("build-step-desc"),stepTip:document.getElementById("build-step-tip"),stepParts:document.getElementById("build-step-parts"),stepHint:document.getElementById("build-step-hint"),progress:document.getElementById("build-progress-fill"),checklist:document.getElementById("build-checklist"),list:document.getElementById("build-slot-list"),listEmpty:document.getElementById("build-slot-empty"),glassBtn:document.getElementById("btn-toggle-glass"),glassTag:document.getElementById("glass-status-tag"),zoomTag:document.getElementById("build-zoom-tag"),hint:document.getElementById("build-zone-hint"),toast:document.getElementById("build-toast"),actionBar:document.getElementById("build-action-bar"),resetBtn:document.getElementById("btn-build-reset"),finishBtn:document.getElementById("btn-build-finish")},this.scene=this.dom.canvas?new Yv(this.dom.canvas):null,this.setupDOM()}setupDOM(){const{close:e,glassBtn:t,resetBtn:n,finishBtn:i,canvas:s,modal:o}=this.dom;o&&(e==null||e.addEventListener("click",()=>this.close()),t==null||t.addEventListener("click",()=>this.toggleGlass()),n==null||n.addEventListener("click",()=>this.reset()),i==null||i.addEventListener("click",()=>this.finishBuild()),o.addEventListener("click",a=>{a.target===o&&this.close()}),window.addEventListener("keydown",a=>{this.isOpen&&a.code==="Escape"&&(a.preventDefault(),this.close())}),s&&(s.addEventListener("pointermove",a=>this.onPointerMove(a)),s.addEventListener("pointerenter",a=>this.onPointerMove(a)),s.addEventListener("pointerleave",()=>this.onPointerLeave()),s.addEventListener("pointerdown",a=>this.onPointerDown(a)),s.addEventListener("contextmenu",a=>a.preventDefault()),s.addEventListener("wheel",a=>{a.preventDefault(),this.scene&&(this.scene.zoomBy(a.deltaY/100),this.setZoomBadge())},{passive:!1})))}setZoomBadge(){const e=this.dom.zoomTag;!e||!this.scene||(e.textContent=`🔍 Thu phóng ${Math.round(this.scene.zoom*100)}%`)}open(){var e,t;this.dom.modal&&(this.dom.modal.classList.add("active"),this.isOpen=!0,gt.playClick(),this.renderStep(),this.renderChecklist(),this.renderSlots(),this.scene&&(this.scene.resize(),this.scene.setFocusZone(((e=this.activeStep())==null?void 0:e.zone)||null),this.scene.snapCamera(),this.scene.setZoneState(((t=this.activeStep())==null?void 0:t.zone)||null,"active")),this.updateGlassUi(),this.warnIfHardwareMissing())}warnIfHardwareMissing(){const e=this.activeStep();if(!e||!e.accepts.length)return;const t=this.availableItems(),n=[];for(const i of e.accepts)(i.startsWith("tag:")?t.find(o=>(o.tag||"").toLowerCase()===i.slice(4).toLowerCase()):t.find(o=>o.id===i))||n.push(i.startsWith("tag:")?i.slice(4):i);n.length&&this.setToast(`Bước ${e.step} cần ${n.join(" / ")} — hãy nhặt từ bàn linh kiện và bỏ vào túi (phím E) trước đã.`,"warn")}close(){var e,t,n;this.dom.modal&&(this.clearPostTimers(),this.dom.modal.classList.remove("active"),this.isOpen=!1,(e=this.scene)==null||e.clearPointer(),(t=this.scene)==null||t.clearGhost(),this.setZoneHint(null),this.setToast(null),(n=this.onRequestLock)==null||n.call(this))}reset(){var e;this.completed.clear(),this.currentStep=1,this.isFinished=!1,this.pendingPress=null,this.pasteApplied=!1,this.cableTargets=[],this.clearPostTimers(),this.scene&&(this.returnPartsToBackpack(),this.scene.hideScrews(),this.scene.hideCableTargets(),this.scene.setPower(!1),this.scene.lockedZone=null,this.scene.setGlass(!0,!0),this.scene.setFocusZone(((e=this.activeStep())==null?void 0:e.zone)||null),this.scene.snapCamera()),this.selectedItem=null,this.room.setMonitorState("OFF"),this.renderStep(),this.renderChecklist(),this.renderSlots(),this.updateGlassUi(),this.setToast("Đã đặt lại toàn bộ quy trình lắp ráp.","info")}returnPartsToBackpack(){if(!this.scene)return 0;const e=[...this.scene.placedParts.values()].map(t=>t.item);return e.forEach(t=>this.inventoryUI.addItem(t)),this.scene.clearParts(),e.length}finishBuild(){if(!this.scene||this.isFinished)return null;if(this.completed.size<On)return this.setToast(`Còn ${On-this.completed.size} bước chưa hoàn thành.`,"warn"),null;if(!this.scene.placedParts.size)return this.setToast("Chưa có linh kiện nào nằm trong thùng.","warn"),null;gt.playSnap();const e=this.scene.finalize();return this.isFinished=!0,this.scene.clearZoneStates(),this.dom.finishBtn&&(this.dom.finishBtn.style.display="none"),this.dom.resetBtn&&(this.dom.resetBtn.style.display="none"),this.dom.glassBtn&&(this.dom.glassBtn.style.display="none"),this.setZoneHint(null),this.setToast("Đã vặn nắp kính. Máy tính của bạn đã sẵn sàng!","ok"),this.renderStep(),this.renderActionBar(),this.close(),this.onAssembled&&this.onAssembled(e),e}activeStep(){return Lr.find(e=>e.step===this.currentStep)||null}isStepDone(e){return this.completed.has(e)}get allDone(){return this.completed.size>=On}completeStep(e,t){var n,i,s;if(!this.completed.has(e)){if(this.completed.add(e),this.pendingPress=null,this.pasteApplied=!1,gt.playSnap(),this.setToast(t||`Hoàn thành bước ${e}.`,"ok"),this.renderStep(),this.renderChecklist(),this.renderSlots(),this.completed.size>=On){this.currentStep=On,this.onPowered();return}this.currentStep=Math.max(this.currentStep,e+1),e===9&&(this.cableTargets=[],(n=this.scene)==null||n.hideCableTargets()),(s=this.scene)==null||s.setFocusZone(((i=this.activeStep())==null?void 0:i.zone)||null),this.updateGhostItem()}}ensureCableTargets(){var e,t;return this.cableTargets.length||(this.cableTargets=this.buildCableTargets()),(t=this.scene)==null||t.showCableTargets(this.cableTargets,((e=this.activeStep())==null?void 0:e.zone)||"cables"),this.cableTargets}pressedCount(e){var n;let t=0;return(n=this.scene)==null||n.placedParts.forEach(i=>{i.zoneId===e&&i.pressed&&t++}),t}get ghostArmed(){if(!this.selectedItem)return!1;const e=this.activeStep();return!(!e||!e.need||this.scene.screwsFor(e.zone)>0||this.pendingPress)}onPointerMove(e){var t;this.scene&&(this.scene.setPointer(e.clientX,e.clientY),this.scene.updateGhost((t=this.activeStep())==null?void 0:t.zone,this.ghostArmed),this.updateCursorHint())}onPointerLeave(){var e;this.scene&&(this.scene.clearPointer(),this.scene.updateGhost((e=this.activeStep())==null?void 0:e.zone,this.ghostArmed),this.setZoneHint(null))}async onPointerDown(e){if(!this.scene||e.button!==0)return;this.scene.setPointer(e.clientX,e.clientY);const t=this.activeStep();if(!t)return;const n=t.zone;if(this.scene.screwsFor(n)>0){this.scene.hitScrew(e.clientX,e.clientY,n)==="tightened"?(gt.playScrew(),this.renderActionBar(),this.updateCursorHint(),this.scene.screwsFor(n)===0&&this.finishScrewStep(t)):this.setToast("Bấm đúng vào đầu ốc màu vàng để siết.","warn");return}if(t.action==="paste"&&this.pendingPress&&!this.pasteApplied){this.scene.isOverZone("cpu")?(this.pasteApplied=!0,this.scene.flashZone("cpu"),gt.playClick(),this.setToast("Đã bôi keo tản nhiệt lên nắp lưng CPU. Giờ siết 4 ốc của tản khí.","ok"),this.startScrewStep(t)):this.setToast("Bấm vào vị trí CPU trên bo mạch để bôi keo tản nhiệt.","warn");return}if(t.action==="seat"&&this.pendingPress){if(this.scene.isOverZone(n)){const i=this.scene.placedParts.get(this.pendingPress);i&&(i.pressed=!0),this.scene.flashZone(n),gt.playSnap();const s=this.pressedCount(n);s>=t.need?(this.pendingPress=null,this.completeStep(t.step,s>1?`Đã cắm đủ ${s} thanh và kích hoạt kênh đôi.`:"Đã lắp và ấn khít vào socket.")):(this.pendingPress=null,this.setToast(`Đã lắp ${s}/${t.need}. Chọn thanh tiếp theo trong danh sách.`,"info"),this.updateGhostItem()),this.renderActionBar()}else this.setToast(`Bấm vào ${Zt[n].label.toLowerCase()} để ấn linh kiện xuống cho khít.`,"warn");return}if(t.need===0){this.handleActionStep(t,e);return}if(!this.selectedItem){this.setToast("Chọn linh kiện ở danh sách bên phải trước đã.","warn");return}if(!br(t,this.selectedItem)){this.setToast(`${this.selectedItem.name} không dùng được cho bước này.`,"warn");return}if(!this.scene.ghostOverTarget){this.setToast(`Đưa model tới ${Zt[n].label.toLowerCase()} rồi bấm chuột trái.`,"warn");return}await this.seatPart(t)}async seatPart(e){const t=this.selectedItem,n=e.zone,i=`${n}:${t.id}:${this.pressedCount(n)}`;if(this.scene.placedParts.size&&this.scene.partAt(n)&&[...this.scene.placedParts.values()].filter(o=>o.zoneId===n).length>=e.need){this.setToast("Vị trí này đã đủ linh kiện rồi.","warn");return}if(this.scene.clearGhost(),!await this.scene.placePart(t,n,i)){this.setToast("Không tải được model linh kiện này.","warn"),this.updateGhostItem();return}if(this.scene.flashZone(n),gt.playClick(),this.moveToBackpack(t),this.scene.setFocusZone(n),this.renderActionBar(),e.action==="paste"||e.action==="seat"){this.pendingPress=i,this.setToast(e.action==="paste"?"Tản khí đã đặt lên socket. Bấm vào CPU để bôi keo tản nhiệt.":"Bấm chuột trái lần nữa vào vị trí này để ấn linh kiện xuống cho khít.","info"),this.updateGhostItem();return}this.startScrewStep(e)}startScrewStep(e){var n;const t=e.screws??((n=Zt[e.zone])==null?void 0:n.screws)??0;if(!t){this.completeStep(e.step);return}this.scene.showScrews(e.zone,t),this.scene.setFocusZone(e.zone),this.setToast(`Còn ${t} ốc. Bấm vào từng đầu ốc màu vàng để siết chặt.`,"info"),this.renderActionBar(),this.updateGhostItem(),this.updateCursorHint()}finishScrewStep(e){this.scene.hideScrews(e.zone),this.renderActionBar(),this.updateCursorHint(),this.completeStep(e.step,e.action==="paste"?"Keo tản nhiệt đã bôi và tản khí đã siết chặt.":"Đã siết đủ ốc, linh kiện cố định trong thùng.")}handleActionStep(e,t){const n=e.zone;if(e.action==="glass"){const i=e.step===10;this.scene.glassOn!==i?this.toggleGlass():this.setToast(i?"Nắp kính đã được lắp lại. Bấm nút để tháo ra nếu cần.":"Nắp kính đã tháo rồi.","info");return}if(e.action==="cable"){this.ensureCableTargets();const i=this.pickCable(t);i?this.connectCable(i):this.setToast("Bấm vào từng đầu cáp màu cam để cắm dây nguồn.","warn");return}if(e.action==="display"){this.scene.isOverZone(n)?(this.scene.flashZone(n),gt.playSnap(),this.completeStep(e.step,"Đã cắm DisplayPort từ card đồ họa ra màn hình.")):this.setToast("Bấm vào cổng DisplayPort ở mặt sau thùng.","warn");return}e.action==="power"&&(this.scene.isOverZone(n)?(this.scene.setPower(!0),this.scene.flashZone(n),gt.playPowerSwitch(),this.room.setMonitorState("NO_SIGNAL"),this.completeStep(e.step,"Đã bật nguồn. Hệ thống đang chạy POST..."),this.schedulePost()):this.setToast("Bấm vào nút nguồn trên nắp trên của thùng.","warn"))}buildCableTargets(){return[{id:"atx24",label:"cáp 24-pin ATX",offset:[0,.085,.11],done:!1},{id:"eps8",label:"cáp 8-pin CPU",offset:[-.055,.145,-.155],done:!1},{id:"pcie8",label:"cáp 8-pin PCIe",offset:[.05,-.03,.135],done:!1},{id:"sata",label:"cáp SATA",offset:[-.035,-.115,.05],done:!1}]}cableWorldPosition(e){const t=Zt.cables;return this._v.set(t.anchor[0]+e.offset[0],t.anchor[1]+e.offset[1],t.anchor[2]+e.offset[2])}pickCable(e){const t=this.scene.canvas.getBoundingClientRect();if(!t.width||!t.height)return null;const n=e.clientX-t.left,i=e.clientY-t.top;let s=null,o=1/0;return this.scene.pivot.updateMatrixWorld(!0),this.cableTargets.forEach(a=>{if(a.done)return;const c=this.cableWorldPosition(a).clone();this.scene.pivot.localToWorld(c);const l=c.project(this.scene.camera);if(l.z>1)return;const h=(l.x+1)/2*t.width,u=(-l.y+1)/2*t.height,d=Math.hypot(h-n,u-i);d<o&&(o=d,s=a)}),o<52?s:null}connectCable(e){var n,i;e.done=!0,gt.playSnap(),(n=this.scene)==null||n.markCableDone(e.id);const t=this.cableTargets.filter(s=>!s.done).length;this.renderActionBar(),this.updateCursorHint(),t===0?((i=this.scene)==null||i.flashZone("cables"),this.completeStep(this.currentStep,"Đã cắm đủ cáp 24-pin, 8-pin CPU, 8-pin PCIe và SATA.")):this.setToast(`Đã cắm ${e.label}. Còn ${t} dây nữa.`,"info")}schedulePost(){this.clearPostTimers(),$v.forEach(e=>{this.postTimers.push(setTimeout(()=>{this.room.setMonitorState(e.state),this.setToast(e.text,"info")},e.at))})}clearPostTimers(){this.postTimers.forEach(e=>clearTimeout(e)),this.postTimers=[]}onPowered(){this.setToast("Chúc mừng! Bạn đã lắp ráp thành công đủ 12 bước.","ok"),this.renderStep(),this.renderChecklist();try{Bo({particleCount:140,spread:80,origin:{y:.6}}),setTimeout(()=>{Bo({particleCount:90,angle:60,spread:55,origin:{x:0}}),Bo({particleCount:90,angle:120,spread:55,origin:{x:1}})},400)}catch(e){console.warn("Confetti unavailable:",e)}}moveToBackpack(e){this.inventoryUI.removeItem(e.id),this.selectedItem=null,this.renderSlots()}availableItems(){return this.inventoryUI.slots.filter(Boolean)}renderSlots(){const{list:e,listEmpty:t}=this.dom;if(!e)return;const n=this.activeStep();e.innerHTML="";const i=this.availableItems();t&&(t.style.display=i.length?"none":"flex"),i.forEach(o=>{var d;const a=n?br(n,o):!1,c=((d=this.selectedItem)==null?void 0:d.id)===o.id,l=document.createElement("div");l.className="build-slot"+(a?" usable":"")+(c?" selected":""),l.innerHTML=`
        <div class="build-slot-thumb">
          <img alt="" />
          <span class="build-slot-fallback">${Jv[o.categoryKey]||"▧"}</span>
        </div>
        <div class="build-slot-text">
          <div class="build-slot-name">${o.name}</div>
          <div class="build-slot-tag tag-${o.categoryKey}">${o.tag}</div>
        </div>
        <div class="build-slot-state">${a?"Dùng được":""}</div>
      `,l.addEventListener("click",()=>this.selectSlotItem(o)),e.appendChild(l);const h=l.querySelector("img"),u=this.thumbnails.cache.get(o.id);u?(h.src=u,h.classList.add("ready")):a&&this.thumbnails.get(o).then(f=>{!f||!h.isConnected||(h.src=f,h.classList.add("ready"))}).catch(()=>{})});const s=Lr.find(o=>{var a;return o.step===(((a=this.activeStep())==null?void 0:a.step)||0)+1});s&&this.thumbnails.prime(i.filter(o=>br(s,o)))}async selectSlotItem(e){const t=this.activeStep();if(gt.playClick(),t&&!br(t,e)){this.setToast(`${e.name} không dùng được cho bước ${t.step}.`,"warn");return}this.selectedItem=e,this.renderSlots(),await this.updateGhostItem(e),this.setToast(`Đã cầm ${e.name}. Rê chuột trong Build Zone rồi bấm chuột trái để lắp.`,"info")}async updateGhostItem(e){if(!this.scene)return;if(!e){this.scene.clearGhost(),this.setZoneHint(null);return}const t=this.activeStep();t&&(await this.scene.setGhostItem(e),this.scene.setZoneState(t.zone,"active"),this.scene.updateGhost(t.zone,this.ghostArmed))}updateCursorHint(){if(!this.scene)return;const e=this.activeStep();if(!e)return this.setZoneHint(null);const t=e.zone;if(this.scene.screwsFor(t)>0)return this.setZoneHint("🔩 Bấm vào đầu ốc vàng để siết chặt","action");if(e.action==="paste"&&this.pendingPress&&!this.pasteApplied)return this.setZoneHint("🌡️ Bấm vào CPU để bôi keo tản nhiệt","action");if(e.action==="seat"&&this.pendingPress)return this.setZoneHint("⬇️ Bấm vào linh kiện để ấn xuống cho khít","action");if(e.need===0){const n={glass:"🪟 Dùng nút THÁO / ĐÓNG NẮP KÍNH",cable:"🔌 Bấm vào từng đầu cáp màu cam",display:"🖥️ Bấm vào cổng DisplayPort phía sau thùng",power:"⏻ Bấm nút nguồn trên nắp trên"};return e.action==="cable"&&this.ensureCableTargets(),this.setZoneHint(n[e.action]||"","action")}return this.selectedItem?this.scene.ghostOverTarget?this.setZoneHint(`✅ ${Zt[t].label} — bấm chuột trái để lắp`,"ready"):this.setZoneHint(`🎯 Đưa tới ${Zt[t].label}`,"idle"):this.setZoneHint("👆 Chọn linh kiện ở danh sách bên phải","idle")}setZoneHint(e,t){const n=this.dom.hint;n&&(n.textContent=e||"",n.className="build-zone-hint"+(e?` show ${t||"idle"}`:""))}renderStep(){const{stepBadge:e,stepTitle:t,stepDesc:n,stepTip:i,stepHint:s,stepParts:o,progress:a}=this.dom,c=this.activeStep();c&&(e&&(e.textContent=`BƯỚC ${c.step} / ${On}`),t&&(t.textContent=c.title),n&&(n.textContent=c.instruction),i&&(i.innerHTML=`<strong>💡 Mẹo thực tế:</strong> ${c.tip}`),s&&(s.textContent=c.shortHint||""),a&&(a.style.width=`${this.completed.size/On*100}%`),this.renderStepParts(c),this.updateGlassUi(),this.renderActionBar())}renderStepParts(e){var s;const t=this.dom.stepParts;if(!t)return;const n=((s=this.inventoryUI)==null?void 0:s.slots.filter(Boolean))||[],i=jv(e,n);if(!i.length){t.innerHTML="",t.style.display="none";return}t.style.display="",t.innerHTML=['<div class="build-step-parts-label">🔎 Linh kiện cần chuẩn bị</div>',...i.map(o=>`
        <div class="build-step-part-row">
          <span class="build-step-part-tag">${o.tag}</span>
          <span class="build-step-part-name">${o.label}</span>
          ${o.variants>1?`<span class="build-step-part-alt">${o.variants} lựa chọn</span>`:""}
        </div>`)].join("")}updateGlassUi(){var i;const{glassTag:e,glassBtn:t}=this.dom,n=(i=this.scene)==null?void 0:i.glassOn;e&&(e.textContent=n?"🛡️ Nắp kính: Đang lắp":"🔓 Nắp kính: Đã tháo"),t&&(t.textContent=n?"🔓 Tháo Nắp Kính":"🔒 Lắp Lại Nắp Kính")}toggleGlass(){if(!this.scene)return;const e=!this.scene.glassOn;this.scene.setGlass(e),gt.playSnap(),this.updateGlassUi();const t=this.activeStep();if((t==null?void 0:t.action)==="glass"){const n=t.step===10;this.scene.glassOn===n&&this.completeStep(t.step,n?"Đã đóng nắp kính và siết 4 núm vặn.":"Đã tháo nắp kính, ruột thùng đang mở.")}}renderActionBar(){const e=this.dom.actionBar;if(!e)return;const t=this.activeStep();if(!t){e.innerHTML="";return}const n=[],i=this.scene?this.scene.screwsFor(t.zone):0;if(i>0&&n.push(`<div class="build-chip amber">🔩 Còn ${i} ốc chưa siết</div>`),t.action==="paste"&&this.pendingPress&&!this.pasteApplied&&n.push('<div class="build-chip cyan">🌡️ Cần bôi keo tản nhiệt</div>'),t.action==="seat"&&this.pendingPress&&n.push('<div class="build-chip cyan">⬇️ Cần ấn linh kiện xuống</div>'),t.action==="cable"&&this.cableTargets.length){const s=this.cableTargets.filter(o=>!o.done).length;s&&n.push(`<div class="build-chip amber">🔌 Còn ${s} dây nguồn</div>`)}if(this.completed.size>=On&&n.push('<div class="build-chip green">🎉 Đã hoàn thành cả 12 bước</div>'),this.dom.finishBtn){const s=this.completed.size>=On&&!this.isFinished;this.dom.finishBtn.style.display=s?"":"none",this.dom.finishBtn.disabled=!s}e.innerHTML=n.join("")}renderChecklist(){const e=this.dom.checklist;e&&(e.innerHTML=Lr.map(t=>{const n=this.completed.has(t.step),i=t.step===this.currentStep&&!n;return`
        <div class="build-check${n?" done":""}${i?" current":""}">
          <span class="build-check-num">${n?"✓":t.step}</span>
          <span class="build-check-name">${t.shortName}</span>
        </div>
      `}).join(""))}setToast(e,t="info"){const n=this.dom.toast;n&&(n.textContent=e||"",n.className="build-toast"+(e?` show ${t}`:""),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{n.className="build-toast"},4600))}update(e,t){!this.isOpen||!this.scene||this.scene.update(e,t)}}const ex=.06,tx=4;class nx{constructor(){this.canvas=document.getElementById("webgl-canvas"),this.clock=new Yf,this.initRenderer(),this.initScene(),this.initLighting();const e=document.getElementById("item-preview-canvas");this.previewScene=new kv(e),this.room=new Y_(this.scene),this.placedItems=new Bv(this.scene),this.loadingBarFill=document.getElementById("loading-bar-fill"),this.loadingText=document.getElementById("loading-text"),this.shelf=new Fv(this.scene,{perFrame:4,onProgress:(t,n)=>this.setLoadingProgress(t,n),onReady:()=>this.setLoadingProgress(1,1)}),this.shelf.seedPlaceholders(),this.heldItemManager=new zv(this.camera,this.scene,null),this.inventoryUI=new Vv(this.previewScene,t=>{this.placedItems.removeItem(t.id),this.shelf.hideItem(t.id);const n=this.heldItemManager.getHeldItem();n&&this.inventoryUI.addItem(n),this.heldItemManager.holdItem(t)},t=>{},t=>{this.dropItemAtCrosshair(t)},()=>{this.controls.lockPointer()}),this.controls=new Hv(this.camera,this.canvas,(t,n)=>this.handleWorldInteract(t,n),()=>this.handleStowItem(),()=>{this.inventoryUI.toggle(this.heldItemManager.getHeldItem()),this.inventoryUI.isOpen&&this.controls.unlockPointer()}),this.heldItemManager.setPlayerControls(this.controls),this.buildModeUI=new Qv({inventoryUI:this.inventoryUI,room:this.room,onRequestLock:()=>this.controls.lockPointer(),onAssembled:t=>this.adoptAssembledPC(t)}),this.camera.position.set(0,1.65,1.8),this.controls.pitch=-.2,this.controls.yaw=0,this.loadingDone=!1,this.setLoadingProgress(0,this.shelf.stream.total),this.setupWindowEvents(),this.animate()}setLoadingProgress(e,t){const i=Math.min(1,e/(t||1));this.loadingBarFill&&(this.loadingBarFill.style.width=`${Math.round(i*100)}%`),this.loadingText&&(this.loadingText.textContent=`Đang tải mô hình linh kiện... ${Math.round(i*100)}%`),(i>.12||this.loadingDone)&&this.dismissLoadingScreen()}dismissLoadingScreen(){if(this.loadingDone)return;this.loadingDone=!0;const e=document.getElementById("loading-screen");e&&(e.classList.add("hidden"),setTimeout(()=>e.remove(),600))}initRenderer(){this.renderer=new Xr({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=ks,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jl,this.renderer.shadowMap.autoUpdate=!1,this.shadowDirty=!0}initScene(){this.scene=new Gr,this.scene.background=new Ge(922655),this.scene.fog=new Xa(922655,.035),this.camera=new Dt(65,window.innerWidth/window.innerHeight,.1,100),this.scene.add(this.camera)}initLighting(){const e=new Vr(15857145,.7);this.scene.add(e);const t=new Gf(14870768,3359061,.5);this.scene.add(t);const n=new Sn(16776171,1.6);n.position.set(-6,5,2),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=16,n.shadow.camera.left=-4,n.shadow.camera.right=4,n.shadow.camera.top=4,n.shadow.camera.bottom=-4,n.shadow.bias=-5e-4,this.scene.add(n);const i=new Sn(14412542,.9);i.position.set(2,4,3),this.scene.add(i);const s=new ec(3718648,1.5,6);s.position.set(3,2.8,0),this.scene.add(s)}dropItemAtCrosshair(e){let t=null;if(this.controls.lastRaycastHit&&this.controls.lastRaycastHit.point)t=this.controls.lastRaycastHit.point.clone();else{const n=new E;this.camera.getWorldDirection(n),n.y=0,n.normalize(),t=this.camera.position.clone().add(n.multiplyScalar(1.3)),t.y=.85}if(t.y=Math.max(.02,t.y),this.touchesFloor(t,this.controls.lastRaycastHit)){this.returnToTable(e);return}this.placedItems.placeItemAt(e,t),this.markWorldChanged()}touchesFloor(e,t){if(e.y<=ex)return!0;let n=(t==null?void 0:t.object)||null;for(;n;){if(n.userData&&n.userData.isFloor)return!0;n=n.parent}return!1}returnToTable(e){this.placedItems.removeItem(e.id),this.shelf.showItem(e.id),this.markWorldChanged(),gt.playClick(),this.showToast(`↩️ ${e.name} đã được trả về bàn linh kiện.`)}adoptAssembledPC(e){if(!e||!e.group)return;const t=this.room.casePlaceholder?this.room.casePlaceholder.position.clone():new E(-.25,.825,-.05),n=this.room.casePlaceholder?this.room.casePlaceholder.rotation.y:-Math.PI/4,i=e.group;i.position.set(t.x,t.y,t.z),i.rotation.y=n,i.updateMatrixWorld(!0),this.scene.add(i),this.room.hideCasePlaceholder();const s=new pt().setFromObject(i).getSize(new E);this.assembledPC={id:"assembled_pc",name:"Máy tính đã lắp ráp",brand:"PC Builder",price:"—",tag:"Assembled PC",categoryKey:"motherboard",isAssembled:!0,realSize:Math.max(s.y,.2),prebuilt:i,prebuiltSizeY:s.y,installedParts:e.parts,home:{position:t.clone(),yaw:n},pose:{x:0,y:n,z:0}};const o={type:"assembledPC",itemId:"assembled_pc",itemName:this.assembledPC.name};i.userData={...o},i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData={...o})}),this.showToast("🎉 Máy tính của bạn đã sẵn sàng! Cầm lên và xoay thoải mái nhé."),this.markWorldChanged()}parkAssembledPC(e){if(!e)return;const t=e.prebuilt;t.parent!==this.scene&&this.scene.add(t),t.visible=!0,t.position.copy(e.home.position);const n=e.pose||e.home;t.rotation.set(n.x||0,n.y??e.home.yaw,n.z||0),t.updateMatrixWorld(!0),this.assembledPC=e,this.markWorldChanged()}rememberAssembledPose(e){var n;if(!(e!=null&&e.prebuilt))return;const t=(n=this.heldItemManager)==null?void 0:n.itemRotation;if(t)e.pose={x:t.x||0,y:t.y||0,z:t.z||0};else{const i=e.prebuilt.rotation;e.pose={x:i.x,y:i.y,z:i.z}}}handleWorldInteract(e,t){var o,a;const n=this.heldItemManager.getHeldItem();let i=e;for(;i&&!((o=i.userData)!=null&&o.type)&&!((a=i.userData)!=null&&a.itemId);)i=i.parent;const s=(i==null?void 0:i.userData)||{};if(n){if(t&&t.point){if(n.isAssembled){this.rememberAssembledPose(n),this.parkAssembledPC(n),this.heldItemManager.clearHeldItem();return}if(this.touchesFloor(t.point,t)){this.heldItemManager.clearHeldItem(),this.returnToTable(n);return}this.placedItems.placeItemAt(n,t.point),this.heldItemManager.clearHeldItem(),this.markWorldChanged()}return}if(s.type==="assembledPC"){const c=this.assembledPC;if(!c)return;this.assembledPC=null,c.prebuilt.visible=!1,c.prebuilt.parent&&c.prebuilt.parent.remove(c.prebuilt),this.heldItemManager.holdItem(c),this.markWorldChanged();return}if(s.type==="computerCase"){this.buildModeUI.open(),this.controls.unlockPointer();return}if(s.isPlaced&&s.itemId){const c=Br.find(l=>l.id===s.itemId);c&&(this.placedItems.removeItem(c.id),this.heldItemManager.holdItem(c),this.markWorldChanged());return}if(s.itemId){const c=Br.find(l=>l.id===s.itemId);c&&(this.shelf.hideItem(c.id),this.heldItemManager.holdItem(c),this.markWorldChanged())}}handleStowItem(){const e=this.heldItemManager.getHeldItem();if(e!=null&&e.isAssembled){this.rememberAssembledPose(e),this.parkAssembledPC(e),this.heldItemManager.clearHeldItem(),this.showToast("Máy tính đã lắp ráp được đặt lại lên bàn.");return}if(this.inventoryUI.isOpen){this.inventoryUI.selectedItem&&this.inventoryUI.dropCurrentSelectedItem();return}const t=this.heldItemManager.getHeldItem();t&&this.inventoryUI.addItem(t)&&(this.heldItemManager.clearHeldItem(),this.markWorldChanged(),gt.playDrop())}setupWindowEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}animate(){var i;requestAnimationFrame(()=>this.animate());const e=performance.now(),t=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();if((i=this.buildModeUI)!=null&&i.isOpen){this.buildModeUI.update(t,e);return}this.controls.update(t,this.getRaycastTargets()),this.heldItemManager.update(t,n),this.room.update(t),this.inventoryUI.isOpen&&this.inventoryUI.selectedItem&&this.previewScene.render(),this.frame=(this.frame||0)+1,(this.shadowDirty||this.frame%tx===0)&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowDirty=!1),this.renderer.render(this.scene,this.camera)}getRaycastTargets(){this.raycastList||(this.raycastSources=[this.shelf.interactables,this.placedItems.interactables,this.room.interactables,this.room.surfaces],this.raycastList=[]);const e=this.raycastList;e.length=0;for(const t of this.raycastSources)for(let n=0;n<t.length;n++)e.push(t[n]);return e}markWorldChanged(){var e;(e=this.controls)==null||e.markRaycastDirty(),this.shadowDirty=!0}showToast(e){const t=document.querySelector(".hud-toast");t&&t.remove();const n=document.createElement("div");n.className="hud-toast",n.innerHTML=`<span>${e}</span>`,document.body.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),300)},3e3)}}window.addEventListener("DOMContentLoaded",()=>{const r=()=>{gt.init(),window.removeEventListener("click",r),window.removeEventListener("keydown",r)};window.addEventListener("click",r),window.addEventListener("keydown",r);const e=new nx;window.pcBuilderGame=e});
