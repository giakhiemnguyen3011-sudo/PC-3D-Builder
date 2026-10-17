(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="174",bu=0,Cc=1,Tu=2,uh=1,dh=2,kn=3,qn=0,en=1,Ht=2,ai=0,Ki=1,Pc=2,Ic=3,Lc=4,wu=5,bi=100,Eu=101,Au=102,Ru=103,Cu=104,Pu=200,Iu=201,Lu=202,Du=203,qo=204,Yo=205,Nu=206,Uu=207,Fu=208,Ou=209,Bu=210,ku=211,zu=212,Hu=213,Gu=214,Ko=0,Zo=1,jo=2,Ji=3,$o=4,Jo=5,Qo=6,ea=7,fh=0,Vu=1,Wu=2,ci=0,Xu=1,qu=2,Yu=3,Vs=4,Ku=5,Zu=6,ju=7,Dc="attached",$u="detached",ph=300,Qi=301,es=302,ta=303,na=304,Yr=306,Jt=1e3,si=1001,Br=1002,Kt=1003,mh=1004,Ts=1005,Qt=1006,Cr=1007,Gn=1008,Yn=1009,gh=1010,_h=1011,Ds=1012,qa=1013,Ei=1014,bn=1015,Ws=1016,Ya=1017,Ka=1018,ts=1020,vh=35902,xh=1021,yh=1022,un=1023,Mh=1024,Sh=1025,Zi=1026,ns=1027,Za=1028,ja=1029,bh=1030,$a=1031,Ja=1033,Pr=33776,Ir=33777,Lr=33778,Dr=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,ca=37492,la=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,ya=37818,Ma=37819,Sa=37820,ba=37821,Nr=36492,Ta=36494,wa=36495,Th=36283,Ea=36284,Aa=36285,Ra=36286,Ns=2300,Us=2301,no=2302,Nc=2400,Uc=2401,Fc=2402,Ju=2500,Qu=0,wh=1,Ca=2,ed=3200,td=3201,Eh=0,nd=1,ni="",Ot="srgb",jt="srgb-linear",kr="linear",ht="srgb",Pi=7680,Oc=519,id=512,sd=513,rd=514,Ah=515,od=516,ad=517,cd=518,ld=519,Pa=35044,Bc="300 es",Vn=2e3,zr=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const Es=Math.PI/180,is=180/Math.PI;function dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[r&255]+kt[r>>8&255]+kt[r>>16&255]+kt[r>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function Qa(r,e){return(r%e+e)%e}function hd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ud(r,e,t){return r!==e?(t-r)/(e-r):0}function As(r,e,t){return(1-t)*r+t*e}function dd(r,e,t,n){return As(r,e,1-Math.exp(-t*n))}function fd(r,e=1){return e-Math.abs(Qa(r,e*2)-e)}function pd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function md(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _d(r,e){return r+Math.random()*(e-r)}function vd(r){return r*(.5-Math.random())}function xd(r){r!==void 0&&(kc=r);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(r){return r*Es}function Md(r){return r*is}function Sd(r){return(r&r-1)===0&&r!==0}function bd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Td(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ct(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ri={DEG2RAD:Es,RAD2DEG:is,generateUUID:dn,clamp:Ye,euclideanModulo:Qa,mapLinear:hd,inverseLerp:ud,lerp:As,damp:dd,pingpong:fd,smoothstep:pd,smootherstep:md,randInt:gd,randFloat:_d,randFloatSpread:vd,seededRandom:xd,degToRad:yd,radToDeg:Md,isPowerOfTwo:Sd,ceilPowerOfTwo:bd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:wd,normalize:ct,denormalize:Mn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,s,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],v=i[7],L=i[2],P=i[5],A=i[8];return s[0]=o*_+a*S+c*L,s[3]=o*m+a*x+c*P,s[6]=o*p+a*v+c*A,s[1]=l*_+h*S+u*L,s[4]=l*m+h*x+u*P,s[7]=l*p+h*v+u*A,s[2]=d*_+f*S+g*L,s[5]=d*m+f*x+g*P,s[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Xe;function Rh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ed(){const r=Fs("canvas");return r.style.display="block",r}const zc={};function yi(r){r in zc||(zc[r]=!0,console.warn(r))}function Ad(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Rd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const r={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?kr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[jt]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}const et=Pd();function Xn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ji(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ii;class Id{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Fs("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ld=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(so(i[o].image)):s.push(so(i[o]))}else s=so(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Id.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dd=0;class Ct extends ls{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=si,i=si,s=Qt,o=Gn,a=un,c=Yn,l=Ct.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=dn(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=ph;Ct.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,L=(p+1)/2,P=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return x>v&&x>L?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=P/n,s=A/n):v>L?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=P/i,s=I/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=A/s,i=I/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ch extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),P=Math.atan2(L,p*S);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const v=a*S;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new w,Vc=new fn;class gt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Qs.subVectors(this.max,ms),Li.subVectors(e.a,ms),Di.subVectors(e.b,ms),Ni.subVectors(e.c,ms),Kn.subVectors(Di,Li),Zn.subVectors(Ni,Di),di.subVectors(Li,Ni);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!oo(t,Li,Di,Ni,Qs)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Li,Di,Ni,Qs))?!1:(er.crossVectors(Kn,Zn),t=[er.x,er.y,er.z],oo(t,Li,Di,Ni,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,Js=new gt,Li=new w,Di=new w,Ni=new w,Kn=new w,Zn=new w,di=new w,ms=new w,Qs=new w,er=new w,fi=new w;function oo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){fi.fromArray(r,s);const a=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Fd=new gt,gs=new w,ao=new w;class Rn{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(ao)),this.expandByPoint(gs.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new w,co=new w,tr=new w,jn=new w,lo=new w,nr=new w,ho=new w;class Xs{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){co.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,o=-this.direction.dot(tr),a=jn.dot(this.direction),c=-jn.dot(tr),l=jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(co).addScaledVector(tr,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){lo.subVectors(t,e),nr.subVectors(n,e),ho.crossVectors(lo,nr);let o=this.direction.dot(ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,e);const c=a*this.direction.dot(nr.crossVectors(jn,nr));if(c<0)return null;const l=a*this.direction.dot(lo.cross(jn));if(l<0||c+l>o)return null;const h=-a*jn.dot(ho);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Bd)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),$n.crossVectors(n,nn),$n.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),$n.crossVectors(n,nn)),$n.normalize(),ir.crossVectors(nn,$n),i[0]=$n.x,i[4]=ir.x,i[8]=nn.x,i[1]=$n.y,i[5]=ir.y,i[9]=nn.y,i[2]=$n.z,i[6]=ir.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],L=n[15],P=i[0],A=i[4],I=i[8],T=i[12],b=i[1],U=i[5],V=i[9],z=i[13],Z=i[2],ee=i[6],K=i[10],ie=i[14],X=i[3],de=i[7],D=i[11],C=i[15];return s[0]=o*P+a*b+c*Z+l*X,s[4]=o*A+a*U+c*ee+l*de,s[8]=o*I+a*V+c*K+l*D,s[12]=o*T+a*z+c*ie+l*C,s[1]=h*P+u*b+d*Z+f*X,s[5]=h*A+u*U+d*ee+f*de,s[9]=h*I+u*V+d*K+f*D,s[13]=h*T+u*z+d*ie+f*C,s[2]=g*P+_*b+m*Z+p*X,s[6]=g*A+_*U+m*ee+p*de,s[10]=g*I+_*V+m*K+p*D,s[14]=g*T+_*z+m*ie+p*C,s[3]=S*P+x*b+v*Z+L*X,s[7]=S*A+x*U+v*ee+L*de,s[11]=S*I+x*V+v*K+L*D,s[15]=S*T+x*z+v*ie+L*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,P=t*S+n*x+i*v+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=S*A,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*A,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=x*A,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*A,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=v*A,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*A,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=L*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,S=c*l,x=c*h,v=c*u,L=n.x,P=n.y,A=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+v)*L,i[2]=(g-x)*L,i[3]=0,i[4]=(f-v)*P,i[5]=(1-(d+p))*P,i[6]=(m+S)*P,i[7]=0,i[8]=(g+x)*A,i[9]=(m-S)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ui.set(i[0],i[1],i[2]).length();const o=Ui.set(i[4],i[5],i[6]).length(),a=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const l=1/s,h=1/o,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Vn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Vn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===zr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Vn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===Vn)g=(o+s)*u,_=-2*u;else if(a===zr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new w,_n=new ke,Od=new w(0,0,0),Bd=new w(1,1,1),$n=new w,ir=new w,nn=new w,Wc=new ke,Xc=new fn;class wn{constructor(e=0,t=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kd=0;const qc=new w,Fi=new fn,Un=new ke,sr=new w,_s=new w,zd=new w,Hd=new fn,Yc=new w(1,0,0),Kc=new w(0,1,0),Zc=new w(0,0,1),jc={type:"added"},Gd={type:"removed"},Oi={type:"childadded",child:null},uo={type:"childremoved",child:null};class _t extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new w,t=new wn,n=new fn,i=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Xe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis(Kc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis(Kc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(_s,sr,this.up):Un.lookAt(sr,_s,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Un),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new w(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new w,Fn=new w,fo=new w,On=new w,Bi=new w,ki=new w,$c=new w,po=new w,mo=new w,go=new w,_o=new it,vo=new it,xo=new it;class Sn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vn.subVectors(i,t),Fn.subVectors(n,t),fo.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Fn),c=vn.dot(fo),l=Fn.dot(Fn),h=Fn.dot(fo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(o,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return _o.setScalar(0),vo.setScalar(0),xo.setScalar(0),_o.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),xo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(_o,s.x),o.addScaledVector(vo,s.y),o.addScaledVector(xo,s.z),o}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Fn.subVectors(e,t),vn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Bi.subVectors(i,n),ki.subVectors(s,n),po.subVectors(e,n);const c=Bi.dot(po),l=ki.dot(po);if(c<=0&&l<=0)return t.copy(n);mo.subVectors(e,i);const h=Bi.dot(mo),u=ki.dot(mo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Bi,o);go.subVectors(e,s);const f=Bi.dot(go),g=ki.dot(go);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return $c.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector($c,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},rr={h:0,s:0,l:0};function yo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Qa(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yo(o,s,e+1/3),this.g=yo(o,s,e),this.b=yo(o,s,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ye(zt.r*255,0,255))*65536+Math.round(Ye(zt.g*255,0,255))*256+Math.round(Ye(zt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,s=zt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ot){et.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(rr);const n=As(Jn.h,rr.h,t),i=As(Jn.s,rr.s,t),s=As(Jn.l,rr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new He;He.NAMES=Ph;let Vd=0;class An extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Ki,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class At extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new w,or=new Te;let Wd=0;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}}class Ih extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lh extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const cn=new ke,Mo=new _t,zi=new w,sn=new gt,vs=new gt,Lt=new w;class Gt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Lh:Ih)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(sn.min,vs.min),sn.expandByPoint(Lt),Lt.addVectors(sn.max,vs.max),sn.expandByPoint(Lt)):(sn.expandByPoint(vs.min),sn.expandByPoint(vs.max))}sn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Lt.fromBufferAttribute(a,l),c&&(zi.fromBufferAttribute(e,l),Lt.add(zi)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new w,c[I]=new w;const l=new w,h=new w,u=new w,d=new Te,f=new Te,g=new Te,_=new w,m=new w;function p(I,T,b){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[I].add(_),a[T].add(_),a[b].add(_),c[I].add(m),c[T].add(m),c[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,T=S.length;I<T;++I){const b=S[I],U=b.start,V=b.count;for(let z=U,Z=U+V;z<Z;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new w,v=new w,L=new w,P=new w;function A(I){L.fromBufferAttribute(i,I),P.copy(L);const T=a[I];x.copy(T),x.sub(L.multiplyScalar(L.dot(T))).normalize(),v.crossVectors(P,T);const U=v.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,U)}for(let I=0,T=S.length;I<T;++I){const b=S[I],U=b.start,V=b.count;for(let z=U,Z=U+V;z<Z;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,s=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new ke,pi=new Xs,ar=new Rn,Qc=new w,cr=new w,lr=new w,hr=new w,So=new w,ur=new w,el=new w,dr=new w;class xe extends _t{constructor(e=new Gt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ur.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(So.fromBufferAttribute(u,e),o?ur.addScaledVector(So,h):ur.addScaledVector(So.sub(t),h))}t.add(ur)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(ar.containsPoint(pi.origin)===!1&&(pi.intersectSphere(ar,Qc)===null||pi.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,L=x;v<L;v+=3){const P=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);i=fr(this,p,e,n,l,h,u,P,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=fr(this,o,e,n,l,h,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,L=x;v<L;v+=3){const P=v,A=v+1,I=v+2;i=fr(this,p,e,n,l,h,u,P,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;i=fr(this,o,e,n,l,h,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qd(r,e,t,n,i,s,o,a){let c;if(e.side===en?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===qn,a),c===null)return null;dr.copy(a),dr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(dr);return l<t.near||l>t.far?null:{distance:l,point:dr.clone(),object:r}}function fr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,cr),r.getVertexPosition(c,lr),r.getVertexPosition(l,hr);const h=qd(r,e,t,n,cr,lr,hr,el);if(h){const u=new w;Sn.getBarycoord(el,cr,lr,hr,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,a,c,l,u,new Te)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,a,c,l,u,new Te)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new w,materialIndex:0};Sn.getNormal(cr,lr,hr,d.normal),h.face=d,h.barycoord=u}return h}class Ie extends Gt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,p,S,x,v,L,P,A,I,T){const b=v/A,U=L/I,V=v/2,z=L/2,Z=P/2,ee=A+1,K=I+1;let ie=0,X=0;const de=new w;for(let D=0;D<K;D++){const C=D*U-z;for(let oe=0;oe<ee;oe++){const pe=oe*b-V;de[_]=pe*S,de[m]=C*x,de[p]=Z,l.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=P>0?1:-1,h.push(de.x,de.y,de.z),u.push(oe/A),u.push(1-D/I),ie+=1}}for(let D=0;D<I;D++)for(let C=0;C<A;C++){const oe=d+C+ee*D,pe=d+C+ee*(D+1),k=d+(C+1)+ee*(D+1),Y=d+(C+1)+ee*D;c.push(oe,pe,Y),c.push(pe,k,Y),X+=6}a.addGroup(f,X,T),f+=X,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(r){const e={};for(let t=0;t<r.length;t++){const n=ss(r[t]);for(const i in n)e[i]=n[i]}return e}function Yd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Kd={clone:ss,merge:Xt};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nh extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new w,tl=new Te,nl=new Te;class Nt extends Nh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Gi=1;class $d extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(Hi,Gi,e,t);i.layers=this.layers,this.add(i);const s=new Nt(Hi,Gi,e,t);s.layers=this.layers,this.add(s);const o=new Nt(Hi,Gi,e,t);o.layers=this.layers,this.add(o);const a=new Nt(Hi,Gi,e,t);a.layers=this.layers,this.add(a);const c=new Nt(Hi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new Nt(Hi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uh extends Ct{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ie(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ai});s.uniforms.tEquirect.value=t;const o=new xe(i,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Qt),new $d(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class $e extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qd={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kr extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ef{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new w;class ic{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ic(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const il=new w,sl=new it,rl=new it,tf=new w,ol=new ke,pr=new w,To=new Rn,al=new ke,wo=new Xs;class nf extends xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pr),this.boundingBox.expandByPoint(pr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pr),this.boundingSphere.expandByPoint(pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1&&(al.copy(i).invert(),wo.copy(e.ray).applyMatrix4(al),!(this.boundingBox!==null&&wo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,wo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$u?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sl.fromBufferAttribute(i.attributes.skinIndex,e),rl.fromBufferAttribute(i.attributes.skinWeight,e),il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=rl.getComponent(s);if(o!==0){const a=sl.getComponent(s);ol.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tf.copy(il).applyMatrix4(ol),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fh extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oh extends Ct{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Kt,h=Kt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cl=new ke,sf=new ke;class sc{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:sf;cl.multiplyMatrices(a,t[s]),cl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Oh(t,e,e,un,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Fh),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ia extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new ke,ll=new ke,mr=[],hl=new gt,rf=new ke,xs=new xe,ys=new Rn;class La extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),hl.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),ys.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),e.ray.intersectsSphere(ys)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vi),ll.multiplyMatrices(n,Vi),xs.matrixWorld=ll,xs.raycast(e,mr);for(let o=0,a=mr.length;o<a;o++){const c=mr[o];c.instanceId=s,c.object=this,t.push(c)}mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oh(new Float32Array(i*this.count),i,this.count,Za,bn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Eo=new w,of=new w,af=new Xe;class ti{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Eo.subVectors(n,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||af.getNormalMatrix(e),i=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Rn,gr=new w;class rc{constructor(e=new ti,t=new ti,n=new ti,i=new ti,s=new ti,o=new ti){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,m-f,v-p).normalize(),n[1].setComponents(c+s,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+S).normalize(),n[3].setComponents(c-o,d-h,m-g,v-S).normalize(),n[4].setComponents(c-a,d-u,m-_,v-x).normalize(),t===Vn)n[5].setComponents(c+a,d+u,m+_,v+x).normalize();else if(t===zr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(gr.x=i.normal.x>0?e.max.x:e.min.x,gr.y=i.normal.y>0?e.max.y:e.min.y,gr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hr=new w,Gr=new w,ul=new ke,Ms=new Xs,_r=new Rn,Ao=new w,dl=new w;class oc extends _t{constructor(e=new Gt,t=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Hr.fromBufferAttribute(t,i-1),Gr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hr.distanceTo(Gr);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(i),_r.radius+=s,e.ray.intersectsSphere(_r)===!1)return;ul.copy(i).invert(),Ms.copy(e.ray).applyMatrix4(ul);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),S=h.getX(_+1),x=vr(this,e,Ms,c,p,S,_);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=vr(this,e,Ms,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=vr(this,e,Ms,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=vr(this,e,Ms,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Hr.fromBufferAttribute(a,i),Gr.fromBufferAttribute(a,s),t.distanceSqToSegment(Hr,Gr,Ao,dl)>n)return;Ao.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ao);if(!(l<e.near||l>e.far))return{distance:l,point:dl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const fl=new w,pl=new w;class cf extends oc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)fl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lf extends oc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kh extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ml=new ke,Da=new Xs,xr=new Rn,yr=new w;class hf extends _t{constructor(e=new Gt,t=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,e.ray.intersectsSphere(xr)===!1)return;ml.copy(i).invert(),Da.copy(e.ray).applyMatrix4(ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);yr.fromBufferAttribute(u,m),gl(yr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)yr.fromBufferAttribute(u,g),gl(yr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gl(r,e,t,n,i,s,o){const a=Da.distanceSqToPoint(r);if(a<t){const c=new w;Da.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mi extends Ct{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zh extends Ct{constructor(e,t,n,i,s,o,a,c,l,h=Zi){if(h!==Zi&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Ei),n===void 0&&h===ns&&(n=ts),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=t||(o.isVector2?new Te:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new w,i=[],s=[],o=[],a=new w,c=new ke;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ye(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ye(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ac extends Cn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Te){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uf extends ac{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let r=0,e=0,t=0,n=0;function i(s,o,a,c){r=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Mr=new w,Ro=new cc,Co=new cc,Po=new cc;class Hh extends Cn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Mr.subVectors(i[0],i[1]).add(i[0]),l=Mr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Mr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ro.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Co.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Po.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Co.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Po.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ro.calc(c),Co.calc(c),Po.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _l(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,c=r*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*r+t}function df(r,e){const t=1-r;return t*t*e}function ff(r,e){return 2*(1-r)*r*e}function pf(r,e){return r*r*e}function Rs(r,e,t,n){return df(r,e)+ff(r,t)+pf(r,n)}function mf(r,e){const t=1-r;return t*t*t*e}function gf(r,e){const t=1-r;return 3*t*t*r*e}function _f(r,e){return 3*(1-r)*r*r*e}function vf(r,e){return r*r*r*e}function Cs(r,e,t,n,i){return mf(r,e)+gf(r,t)+_f(r,n)+vf(r,i)}class Gh extends Cn{constructor(e=new Te,t=new Te,n=new Te,i=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Te){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,i.x,s.x,o.x,a.x),Cs(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xf extends Cn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Cs(e,i.x,s.x,o.x,a.x),Cs(e,i.y,s.y,o.y,a.y),Cs(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vh extends Cn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yf extends Cn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends Cn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Rs(e,i.x,s.x,o.x),Rs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xh extends Cn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Rs(e,i.x,s.x,o.x),Rs(e,i.y,s.y,o.y),Rs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qh extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(_l(a,c.x,l.x,h.x,u.x),_l(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Te().fromArray(i))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:uf,CatmullRomCurve3:Hh,CubicBezierCurve:Gh,CubicBezierCurve3:xf,EllipseCurve:ac,LineCurve:Vh,LineCurve3:yf,QuadraticBezierCurve:Wh,QuadraticBezierCurve3:Xh,SplineCurve:qh});class Mf extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Na[i.type]().fromJSON(i))}return this}}class Vr extends Mf{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vh(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Wh(this.currentPoint.clone(),new Te(e,t),new Te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Gh(this.currentPoint.clone(),new Te(e,t),new Te(n,i),new Te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,o,a,c),this}absellipse(e,t,n,i,s,o,a,c){const l=new ac(e,t,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class lc extends Gt{constructor(e=[new Te(0,-.5),new Te(.5,0),new Te(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ye(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/t,u=new w,d=new Te,f=new w,g=new w,_=new w;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=t;S++){const x=n+S*h*i,v=Math.sin(x),L=Math.cos(x);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*v,u.y=e[P].y,u.z=e[P].x*L,o.push(u.x,u.y,u.z),d.x=S/t,d.y=P/(e.length-1),a.push(d.x,d.y);const A=c[3*P+0]*v,I=c[3*P+1],T=c[3*P+0]*L;l.push(A,I,T)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const v=x+S*e.length,L=v,P=v+e.length,A=v+e.length+1,I=v+1;s.push(L,P,I),s.push(A,I,P)}this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.points,e.segments,e.phiStart,e.phiLength)}}class hc extends lc{constructor(e=1,t=1,n=4,i=8){const s=new Vr;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new hc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ps extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new w,h=new Te;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ft extends Gt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function S(){const v=new w,L=new w;let P=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const T=[],b=I/s,U=b*(t-e)+e;for(let V=0;V<=i;V++){const z=V/i,Z=z*c+a,ee=Math.sin(Z),K=Math.cos(Z);L.x=U*ee,L.y=-b*n+m,L.z=U*K,u.push(L.x,L.y,L.z),v.set(ee,A,K).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-b),T.push(g++)}_.push(T)}for(let I=0;I<i;I++)for(let T=0;T<s;T++){const b=_[T][I],U=_[T+1][I],V=_[T+1][I+1],z=_[T][I+1];(e>0||T!==0)&&(h.push(b,U,z),P+=3),(t>0||T!==s-1)&&(h.push(U,V,z),P+=3)}l.addGroup(p,P,0),p+=P}function x(v){const L=g,P=new Te,A=new w;let I=0;const T=v===!0?e:t,b=v===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const U=g;for(let V=0;V<=i;V++){const Z=V/i*c+a,ee=Math.cos(Z),K=Math.sin(Z);A.x=T*K,A.y=m*b,A.z=T*ee,u.push(A.x,A.y,A.z),d.push(0,b,0),P.x=ee*.5+.5,P.y=K*.5*b+.5,f.push(P.x,P.y),g++}for(let V=0;V<i;V++){const z=L+V,Z=U+V;v===!0?h.push(Z,Z+1,z):h.push(Z+1,Z,z),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends Vr{constructor(e){super(e),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Vr().fromJSON(i))}return this}}class Sf{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let o=Kh(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let c,l,h,u,d,f,g;if(i&&(o=Af(e,t,o,n)),e.length>80*n){c=h=e[0],l=u=e[1];for(let _=n;_<s;_+=n)d=e[_],f=e[_+1],d<c&&(c=d),f<l&&(l=f),d>h&&(h=d),f>u&&(u=f);g=Math.max(h-c,u-l),g=g!==0?32767/g:0}return Os(o,a,n,c,l,g,0),a}}function Kh(r,e,t,n,i){let s,o;if(i===Bf(r,e,t,n)>0)for(s=e;s<t;s+=n)o=vl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=vl(s,r[s],r[s+1],o);return o&&Zr(o,o.next)&&(ks(o),o=o.next),o}function Ri(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Zr(t,t.next)||vt(t.prev,t,t.next)===0)){if(ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Os(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Lf(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Tf(r,n,i,s):bf(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ks(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=wf(Ri(r),e,t),Os(r,e,t,n,i,s,2)):o===2&&Ef(r,e,t,n,i,s):Os(Ri(r),e,t,n,i,s,1);break}}}function bf(r){const e=r.prev,t=r,n=r.next;if(vt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&qi(i,a,s,c,o,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tf(r,e,t,n){const i=r.prev,s=r,o=r.next;if(vt(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ua(f,g,e,t,n),S=Ua(_,m,e,t,n);let x=r.prevZ,v=r.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&qi(a,h,c,u,l,d,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&qi(a,h,c,u,l,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&qi(a,h,c,u,l,d,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&qi(a,h,c,u,l,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wf(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Zr(i,s)&&Zh(i,n,n.next,s)&&Bs(i,s)&&Bs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ks(n),ks(n.next),n=r=s),n=n.next}while(n!==r);return Ri(n)}function Ef(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uf(o,a)){let c=jh(o,a);o=Ri(o,o.next),c=Ri(c,c.next),Os(o,e,t,n,i,s,0),Os(c,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Af(r,e,t,n){const i=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:r.length,l=Kh(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Nf(l));for(i.sort(Rf),s=0;s<i.length;s++)t=Cf(i[s],t);return t}function Rf(r,e){return r.x-e.x}function Cf(r,e){const t=Pf(r,e);if(!t)return e;const n=jh(t,r);return Ri(n,n.next),Ri(t,t.next)}function Pf(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&qi(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Bs(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&If(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function If(r,e){return vt(r.prev,r,e.prev)<0&&vt(e.next,r,r.next)<0}function Lf(r,e,t,n){let i=r;do i.z===0&&(i.z=Ua(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Df(i)}function Df(r){let e,t,n,i,s,o,a,c,l=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(o>1);return r}function Ua(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Nf(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function qi(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Uf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Ff(r,e)&&(Bs(r,e)&&Bs(e,r)&&Of(r,e)&&(vt(r.prev,r,e.prev)||vt(r,e.prev,e))||Zr(r,e)&&vt(r.prev,r,r.next)>0&&vt(e.prev,e,e.next)>0)}function vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Zr(r,e){return r.x===e.x&&r.y===e.y}function Zh(r,e,t,n){const i=br(vt(r,e,t)),s=br(vt(r,e,n)),o=br(vt(t,n,r)),a=br(vt(t,n,e));return!!(i!==s&&o!==a||i===0&&Sr(r,t,e)||s===0&&Sr(r,n,e)||o===0&&Sr(t,r,n)||a===0&&Sr(t,e,n))}function Sr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function br(r){return r>0?1:r<0?-1:0}function Ff(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Zh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Bs(r,e){return vt(r.prev,r,r.next)<0?vt(r,e,r.next)>=0&&vt(r,r.prev,e)>=0:vt(r,e,r.prev)<0||vt(r,r.next,e)<0}function Of(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function jh(r,e){const t=new Fa(r.i,r.x,r.y),n=new Fa(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vl(r,e,t,n){const i=new Fa(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ks(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fa(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bf(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Is{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Is.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xl(e),yl(n,e);let o=e.length;t.forEach(xl);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,yl(n,t[c]);const a=Sf.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function xl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function yl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Rt extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let x=0;x<l;x++){const v=x*u-s;g.push(v,-S,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,v=S+l*(p+1),L=S+1+l*(p+1),P=S+1+l*p;f.push(x,v,P),f.push(v,L,P)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.widthSegments,e.heightSegments)}}class uc extends Gt{constructor(e=new Yh([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ut(i,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Is.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Is.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=Is.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];i.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],x=S[0]+u,v=S[1]+u,L=S[2]+u;n.push(x,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return kf(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new uc(n,e.curveSegments)}}function kf(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Wn extends Gt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,S=(i+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dc extends Gt{constructor(e=new Xh(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new Te;let h=new w;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),S(),p()}function m(x){h=e.getPointAt(x/t,h);const v=o.normals[x],L=o.binormals[x];for(let P=0;P<=i;P++){const A=P/i*Math.PI*2,I=Math.sin(A),T=-Math.cos(A);c.x=T*v.x+I*L.x,c.y=T*v.y+I*L.y,c.z=T*v.z+I*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){const L=(i+1)*(x-1)+(v-1),P=(i+1)*x+(v-1),A=(i+1)*x+v,I=(i+1)*(x-1)+v;g.push(L,P,I),g.push(P,A,I)}}function S(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)l.x=x/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new dc(new Na[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Qe extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zf extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Tr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Gf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ml(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function $h(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class qs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wf extends qs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uc:s=e,a=2*t-n;break;case Fc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uc:o=e,c=2*n-t;break;case Fc:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+S*o[l+L]+x*o[c+L]+v*o[u+L];return s}}class Xf extends qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class qf extends qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case no:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Gf(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Us;class hs extends In{constructor(e,t,n){super(e,t,n)}}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ns;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Jh extends In{}Jh.prototype.ValueTypeName="color";class rs extends In{}rs.prototype.ValueTypeName="number";class Yf extends qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class os extends In{InterpolantFactoryMethodLinear(e){return new Yf(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends In{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ns;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends In{}as.prototype.ValueTypeName="vector";class Kf{constructor(e="",t=-1,n=[],i=Ju){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jf(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(In.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Vf(c);c=Ml(c,1,h),l=Ml(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new rs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];$h(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new rs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(as,f+".position",d,"pos",i),n(os,f+".quaternion",d,"rot",i),n(as,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Jh;case"quaternion":return os;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function jf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zf(r.type);if(r.times===void 0){const t=[],n=[];$h(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const oi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $f{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Jf=new $f;class ds{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ds.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Qf extends Error{constructor(e,t){super(e),this.response=t}}class Qh extends ds{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=oi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let P=0,A=h.length;P<A;P++){const I=h[P];I.onProgress&&I.onProgress(L)}p.enqueue(v),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Qf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{oi.add(e,l);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ep extends ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=oi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Fs("img");function c(){h(),oi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tp extends ds{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,o=new ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ys extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class np extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new ke,Sl=new w,bl=new w;class fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sl),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ip extends fc{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sp extends Ys{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ip}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tl=new ke,Ss=new w,Lo=new w;class rp extends fc{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ss),Lo.copy(n.position),Lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lo),n.updateMatrixWorld(),i.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class pc extends Ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mc extends Nh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class op extends fc{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tn extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new op}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jr extends Ys{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ls{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ap extends ds{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=oi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return oi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),oi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});oi.add(e,c),s.manager.itemStart(e)}}class cp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class lp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wl(){return performance.now()}const gc="\\[\\]\\.:\\/",hp=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",up="[^"+gc.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",_c),fp=/(WCOD+)?/.source.replace("WCOD",up),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),gp=new RegExp("^"+dp+fp+pp+mp+"$"),_p=["material","materials","bones","map"];class vp{constructor(e,t,n){const i=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class lt{constructor(e,t,n){this.path=t,this.parsedPath=n||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,n):new lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hp,"")}static parseTrackName(e){const t=gp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);_p.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=vp;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const El=new ke;class eu{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return El.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(El),this}intersectObject(e,t=!0,n=[]){return Oa(e,this,n,t),n.sort(Al),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Oa(e[i],this,n,t);return n.sort(Al),n}}function Al(r,e){return r.distance-e.distance}function Oa(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Oa(s[o],e,t,!0)}}function Rl(r,e,t,n){const i=xp(n);switch(t){case xh:return r*e;case Mh:return r*e;case Sh:return r*e*2;case Za:return r*e/i.components*i.byteLength;case ja:return r*e/i.components*i.byteLength;case bh:return r*e*2/i.components*i.byteLength;case $a:return r*e*2/i.components*i.byteLength;case yh:return r*e*3/i.components*i.byteLength;case un:return r*e*4/i.components*i.byteLength;case Ja:return r*e*4/i.components*i.byteLength;case Pr:case Ir:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Dr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sa:case oa:return Math.max(r,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(r,8)*Math.max(e,8)/2;case aa:case ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nr:case Ta:case wa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Th:case Ea:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Aa:case Ra:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xp(r){switch(r){case Yn:case gh:return{byteLength:1,components:1};case Ds:case _h:case Ws:return{byteLength:2,components:1};case Ya:case Ka:return{byteLength:2,components:4};case Ei:case qa:case bn:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yp(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Up=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:bp,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:Ep,aomap_fragment:Ap,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Ip,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:Np,bumpmap_pars_fragment:Up,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:zp,color_pars_fragment:Hp,color_pars_vertex:Gp,color_vertex:Vp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Kp,emissivemap_fragment:Zp,emissivemap_pars_fragment:jp,colorspace_fragment:$p,colorspace_pars_fragment:Jp,envmap_fragment:Qp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:fm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:cm,lightmap_pars_fragment:lm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:_m,lights_physical_fragment:vm,lights_physical_pars_fragment:xm,lights_fragment_begin:ym,lights_fragment_maps:Mm,lights_fragment_end:Sm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Em,map_fragment:Am,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Nm,morphnormal_vertex:Um,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:zm,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Km,packing:Zm,premultiplied_alpha_fragment:jm,project_vertex:$m,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:cg,skinnormal_vertex:lg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:vg,worldpos_vertex:xg,background_vert:yg,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:bg,cube_vert:Tg,cube_frag:wg,depth_vert:Eg,depth_frag:Ag,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Lg,linedashed_frag:Dg,meshbasic_vert:Ng,meshbasic_frag:Ug,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:Bg,meshmatcap_frag:kg,meshnormal_vert:zg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Vg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:Kg,points_frag:Zg,shadow_vert:jg,shadow_frag:$g,sprite_vert:Jg,sprite_frag:Qg},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},En={basic:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Xt([ge.points,ge.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Xt([ge.common,ge.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Xt([ge.sprite,ge.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Xt([ge.common,ge.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Xt([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};En.physical={uniforms:Xt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const wr={r:0,b:0,g:0},gi=new wn,e0=new ke;function t0(r,e,t,n,i,s,o){const a=new He(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const L=g(x);L===null?p(a,c):L&&L.isColor&&(p(L,1),v=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const L=g(v);L&&(L.isCubeTexture||L.mapping===Yr)?(h===void 0&&(h=new xe(new Ie(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ss(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gi.copy(v.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(gi)),h.material.toneMapped=et.getTransfer(L.colorSpace)!==ht,(u!==L||d!==L.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new xe(new Rt(2,2),new li({name:"BackgroundMaterial",uniforms:ss(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(L.colorSpace)!==ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(wr,Dh(r)),n.buffers.color.setClear(wr.r,wr.g,wr.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:S}}function n0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(b,U,V,z,Z){let ee=!1;const K=u(z,V,U);s!==K&&(s=K,l(s.object)),ee=f(b,z,V,Z),ee&&g(b,z,V,Z),Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(b,U,V,z),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return r.createVertexArray()}function l(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,U,V){const z=V.wireframe===!0;let Z=n[b.id];Z===void 0&&(Z={},n[b.id]=Z);let ee=Z[U.id];ee===void 0&&(ee={},Z[U.id]=ee);let K=ee[z];return K===void 0&&(K=d(c()),ee[z]=K),K}function d(b){const U=[],V=[],z=[];for(let Z=0;Z<t;Z++)U[Z]=0,V[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,U,V,z){const Z=s.attributes,ee=U.attributes;let K=0;const ie=V.getAttributes();for(const X in ie)if(ie[X].location>=0){const D=Z[X];let C=ee[X];if(C===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(C=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(C=b.instanceColor)),D===void 0||D.attribute!==C||C&&D.data!==C.data)return!0;K++}return s.attributesNum!==K||s.index!==z}function g(b,U,V,z){const Z={},ee=U.attributes;let K=0;const ie=V.getAttributes();for(const X in ie)if(ie[X].location>=0){let D=ee[X];D===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(D=b.instanceColor));const C={};C.attribute=D,D&&D.data&&(C.data=D.data),Z[X]=C,K++}s.attributes=Z,s.attributesNum=K,s.index=z}function _(){const b=s.newAttributes;for(let U=0,V=b.length;U<V;U++)b[U]=0}function m(b){p(b,0)}function p(b,U){const V=s.newAttributes,z=s.enabledAttributes,Z=s.attributeDivisors;V[b]=1,z[b]===0&&(r.enableVertexAttribArray(b),z[b]=1),Z[b]!==U&&(r.vertexAttribDivisor(b,U),Z[b]=U)}function S(){const b=s.newAttributes,U=s.enabledAttributes;for(let V=0,z=U.length;V<z;V++)U[V]!==b[V]&&(r.disableVertexAttribArray(V),U[V]=0)}function x(b,U,V,z,Z,ee,K){K===!0?r.vertexAttribIPointer(b,U,V,Z,ee):r.vertexAttribPointer(b,U,V,z,Z,ee)}function v(b,U,V,z){_();const Z=z.attributes,ee=V.getAttributes(),K=U.defaultAttributeValues;for(const ie in ee){const X=ee[ie];if(X.location>=0){let de=Z[ie];if(de===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const D=de.normalized,C=de.itemSize,oe=e.get(de);if(oe===void 0)continue;const pe=oe.buffer,k=oe.type,Y=oe.bytesPerElement,se=k===r.INT||k===r.UNSIGNED_INT||de.gpuType===qa;if(de.isInterleavedBufferAttribute){const q=de.data,ae=q.stride,ye=de.offset;if(q.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)p(X.location+me,q.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let me=0;me<X.locationSize;me++)x(X.location+me,C/X.locationSize,k,D,ae*Y,(ye+C/X.locationSize*me)*Y,se)}else{if(de.isInstancedBufferAttribute){for(let q=0;q<X.locationSize;q++)p(X.location+q,de.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let q=0;q<X.locationSize;q++)m(X.location+q);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let q=0;q<X.locationSize;q++)x(X.location+q,C/X.locationSize,k,D,C*Y,C/X.locationSize*q*Y,se)}}else if(K!==void 0){const D=K[ie];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(X.location,D);break;case 3:r.vertexAttrib3fv(X.location,D);break;case 4:r.vertexAttrib4fv(X.location,D);break;default:r.vertexAttrib1fv(X.location,D)}}}}S()}function L(){I();for(const b in n){const U=n[b];for(const V in U){const z=U[V];for(const Z in z)h(z[Z].object),delete z[Z];delete U[V]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const V in U){const z=U[V];for(const Z in z)h(z[Z].object),delete z[Z];delete U[V]}delete n[b.id]}function A(b){for(const U in n){const V=n[U];if(V[b.id]===void 0)continue;const z=V[b.id];for(const Z in z)h(z[Z].object),delete z[Z];delete V[b.id]}}function I(){T(),o=!0,s!==i&&(s=i,l(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function i0(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function s0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==un&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Yn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==bn&&!I)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:P}}function r0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ti,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const S=s?0:n,x=S*4;let v=p.clippingState||null;c.value=v,v=h(g,d,x,f);for(let L=0;L!==x;++L)v[L]=t[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function o0(r){let e=new WeakMap;function t(o,a){return a===ta?o.mapping=Qi:a===na&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===na)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jd(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Yi=4,Cl=[.125,.215,.35,.446,.526,.582],Ti=20,Do=new mc,Pl=new He;let No=null,Uo=0,Fo=0,Oo=!1;const Si=(1+Math.sqrt(5))/2,Wi=1/Si,Il=[new w(-Si,Wi,0),new w(Si,Wi,0),new w(-Wi,0,Si),new w(Wi,0,Si),new w(0,Si,-Wi),new w(0,Si,Wi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],a0=new w;class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=a0}=s;No=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Uo,Fo),this._renderer.xr.enabled=Oo,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ws,format:un,colorSpace:jt,depthBuffer:!1},i=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c0(s)),this._blurMaterial=l0(s,e,t)}return i}_compileMaterial(e){const t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,n,i,s){const c=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Pl),u.toneMapping=ci,u.autoClear=!1;const g=new At({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new xe(new Ie,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Pl),m=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));const v=this._cubeSize;Er(i,x*v,S>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,c),u.render(e,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Er(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Do)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Il[(i-s-1)%Il.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xe(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let S=0;for(let A=0;A<Ti;++A){const I=A/_,T=Math.exp(-I*I/2);p.push(T),A===0?S+=T:A<m&&(S+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[i],L=3*v*(i>x-Yi?i-x+Yi:0),P=4*(this._cubeSize-v);Er(t,L,P,3*v,2*v),c.setRenderTarget(t),c.render(u,Do)}}function c0(r){const e=[],t=[],n=[];let i=r;const s=r-Yi+1+Cl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Yi?c=Cl[o-r+Yi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let P=0;P<f;P++){const A=P%3*2/3-1,I=P>2?0:-1,T=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];S.set(T,_*g*P),x.set(d,m*g*P);const b=[P,P,P,P,P,P];v.set(b,p*g*P)}const L=new Gt;L.setAttribute("position",new Zt(S,_)),L.setAttribute("uv",new Zt(x,m)),L.setAttribute("faceIndex",new Zt(v,p)),e.push(L),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(r,e,t){const n=new Ai(r,e,t);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function l0(r,e,t){const n=new Float32Array(Ti),i=new w(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Nl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ul(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function h0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===na,h=c===Qi||c===es;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ll(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ll(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function d0(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let x=0,v=S.length;x<v;x+=3){const L=S[x+0],P=S[x+1],A=S[x+2];d.push(L,P,P,A,A,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const L=x+0,P=x+1,A=x+2;d.push(L,P,P,A,A,L)}}else return;const m=new(Rh(d)?Lh:Ih)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function f0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function m0(r,e,t){const n=new WeakMap,i=new it;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*P*4*u),I=new Ch(A,L,P,u);I.type=bn,I.needsUpdate=!0;const T=v*4;for(let U=0;U<u;U++){const V=p[U],z=S[U],Z=x[U],ee=L*P*4*U;for(let K=0;K<V.count;K++){const ie=K*T;g===!0&&(i.fromBufferAttribute(V,K),A[ee+ie+0]=i.x,A[ee+ie+1]=i.y,A[ee+ie+2]=i.z,A[ee+ie+3]=0),_===!0&&(i.fromBufferAttribute(z,K),A[ee+ie+4]=i.x,A[ee+ie+5]=i.y,A[ee+ie+6]=i.z,A[ee+ie+7]=0),m===!0&&(i.fromBufferAttribute(Z,K),A[ee+ie+8]=i.x,A[ee+ie+9]=i.y,A[ee+ie+10]=i.z,A[ee+ie+11]=Z.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Te(L,P)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function g0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const nu=new Ct,Fl=new zh(1,1),iu=new Ch,su=new Ud,ru=new Uh,Ol=[],Bl=[],kl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function fs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ol[i];if(s===void 0&&(s=new Float32Array(i),Ol[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $r(r,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function v0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function x0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function M0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Hl.set(n),r.uniformMatrix2fv(this.addr,!1,Hl),It(t,n)}}function S0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;zl.set(n),r.uniformMatrix3fv(this.addr,!1,zl),It(t,n)}}function b0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;kl.set(n),r.uniformMatrix4fv(this.addr,!1,kl),It(t,n)}}function T0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function w0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function R0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function C0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function P0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function L0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Fl.compareFunction=Ah,s=Fl):s=nu,t.setTexture2D(e||s,i)}function D0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||su,i)}function N0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ru,i)}function U0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||iu,i)}function F0(r){switch(r){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return w0;case 35668:case 35672:return E0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return U0}}function O0(r,e){r.uniform1fv(this.addr,e)}function B0(r,e){const t=fs(e,this.size,2);r.uniform2fv(this.addr,t)}function k0(r,e){const t=fs(e,this.size,3);r.uniform3fv(this.addr,t)}function z0(r,e){const t=fs(e,this.size,4);r.uniform4fv(this.addr,t)}function H0(r,e){const t=fs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function G0(r,e){const t=fs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function V0(r,e){const t=fs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function W0(r,e){r.uniform1iv(this.addr,e)}function X0(r,e){r.uniform2iv(this.addr,e)}function q0(r,e){r.uniform3iv(this.addr,e)}function Y0(r,e){r.uniform4iv(this.addr,e)}function K0(r,e){r.uniform1uiv(this.addr,e)}function Z0(r,e){r.uniform2uiv(this.addr,e)}function j0(r,e){r.uniform3uiv(this.addr,e)}function $0(r,e){r.uniform4uiv(this.addr,e)}function J0(r,e,t){const n=this.cache,i=e.length,s=$r(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nu,s[o])}function Q0(r,e,t){const n=this.cache,i=e.length,s=$r(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||su,s[o])}function e_(r,e,t){const n=this.cache,i=e.length,s=$r(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ru,s[o])}function t_(r,e,t){const n=this.cache,i=e.length,s=$r(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||iu,s[o])}function n_(r){switch(r){case 5126:return O0;case 35664:return B0;case 35665:return k0;case 35666:return z0;case 35674:return H0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return K0;case 36294:return Z0;case 36295:return j0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}class i_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}}class s_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}}class r_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Gl(r,e){r.seq.push(e),r.map[e.id]=e}function o_(r,e,t){const n=r.name,i=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),o=Bo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Gl(t,l===void 0?new i_(a,r,e):new s_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new r_(a),Gl(t,u)),t=u}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);o_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const a_=37297;let c_=0;function l_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wl=new Xe;function h_(r){et._getMatrix(Wl,et.workingColorSpace,r);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case kr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+l_(r.getShaderSource(e),o)}else return i}function u_(r,e){const t=h_(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function d_(r,e){let t;switch(e){case Xu:t="Linear";break;case qu:t="Reinhard";break;case Yu:t="Cineon";break;case Vs:t="ACESFilmic";break;case Zu:t="AgX";break;case ju:t="Neutral";break;case Ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new w;function f_(){et.getLuminanceCoefficients(Ar);const r=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function m_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ws(r){return r!==""}function ql(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(r){return r.replace(__,x_)}const v_=new Map;function x_(r,e){let t=qe[e];if(t===void 0){const n=v_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(r){return r.replace(y_,M_)}function M_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zl(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function S_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===uh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function b_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case es:e="ENVMAP_TYPE_CUBE";break;case Yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function w_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Vu:e="ENVMAP_BLENDING_MIX";break;case Wu:e="ENVMAP_BLENDING_ADD";break}return e}function E_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function A_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=S_(t),l=b_(t),h=T_(t),u=w_(t),d=E_(t),f=p_(t),g=m_(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?qe.tonemapping_pars_fragment:"",t.toneMapping!==ci?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,u_("linearToOutputTexel",t.outputColorSpace),f_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=Ba(o),o=ql(o,t),o=Yl(o,t),a=Ba(a),a=ql(a,t),a=Yl(a,t),o=Kl(o),a=Kl(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,v=S+p+a,L=Vl(i,i.VERTEX_SHADER,x),P=Vl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,L),i.attachShader(_,P),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(U){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(L).trim(),Z=i.getShaderInfoLog(P).trim();let ee=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,P);else{const ie=Xl(i,L,"vertex"),X=Xl(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+ie+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Z==="")&&(K=!1);K&&(U.diagnostics={runnable:ee,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(L),i.deleteShader(P),I=new Ur(i,_),T=g_(i,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,a_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new P_(e),t.set(e,n)),n}}class P_{constructor(e){this.id=R_++,this.code=e,this.usedTimes=0}}function I_(r,e,t,n,i,s,o){const a=new tc,c=new C_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,b,U,V,z){const Z=V.fog,ee=z.geometry,K=T.isMeshStandardMaterial?V.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),X=ie&&ie.mapping===Yr?ie.image.height:null,de=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const D=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,C=D!==void 0?D.length:0;let oe=0;ee.morphAttributes.position!==void 0&&(oe=1),ee.morphAttributes.normal!==void 0&&(oe=2),ee.morphAttributes.color!==void 0&&(oe=3);let pe,k,Y,se;if(de){const at=En[de];pe=at.vertexShader,k=at.fragmentShader}else pe=T.vertexShader,k=T.fragmentShader,c.update(T),Y=c.getVertexShaderID(T),se=c.getFragmentShaderID(T);const q=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),ye=z.isInstancedMesh===!0,me=z.isBatchedMesh===!0,De=!!T.map,Fe=!!T.matcap,Ce=!!ie,R=!!T.aoMap,st=!!T.lightMap,Oe=!!T.bumpMap,Be=!!T.normalMap,Me=!!T.displacementMap,Ke=!!T.emissiveMap,ne=!!T.metalnessMap,E=!!T.roughnessMap,y=T.anisotropy>0,B=T.clearcoat>0,te=T.dispersion>0,Q=T.iridescence>0,j=T.sheen>0,Pe=T.transmission>0,fe=y&&!!T.anisotropyMap,be=B&&!!T.clearcoatMap,Ze=B&&!!T.clearcoatNormalMap,re=B&&!!T.clearcoatRoughnessMap,_e=Q&&!!T.iridescenceMap,Ne=Q&&!!T.iridescenceThicknessMap,ze=j&&!!T.sheenColorMap,J=j&&!!T.sheenRoughnessMap,Se=!!T.specularMap,we=!!T.specularColorMap,Ae=!!T.specularIntensityMap,N=Pe&&!!T.transmissionMap,le=Pe&&!!T.thicknessMap,W=!!T.gradientMap,$=!!T.alphaMap,ue=T.alphaTest>0,he=!!T.alphaHash,Ge=!!T.extensions;let xt=ci;T.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(xt=r.toneMapping);const Bt={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:k,defines:T.defines,customVertexShaderID:Y,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:me,batchingColor:me&&z._colorsTexture!==null,instancing:ye,instancingColor:ye&&z.instanceColor!==null,instancingMorph:ye&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:jt,alphaToCoverage:!!T.alphaToCoverage,map:De,matcap:Fe,envMap:Ce,envMapMode:Ce&&ie.mapping,envMapCubeUVHeight:X,aoMap:R,lightMap:st,bumpMap:Oe,normalMap:Be,displacementMap:d&&Me,emissiveMap:Ke,normalMapObjectSpace:Be&&T.normalMapType===nd,normalMapTangentSpace:Be&&T.normalMapType===Eh,metalnessMap:ne,roughnessMap:E,anisotropy:y,anisotropyMap:fe,clearcoat:B,clearcoatMap:be,clearcoatNormalMap:Ze,clearcoatRoughnessMap:re,dispersion:te,iridescence:Q,iridescenceMap:_e,iridescenceThicknessMap:Ne,sheen:j,sheenColorMap:ze,sheenRoughnessMap:J,specularMap:Se,specularColorMap:we,specularIntensityMap:Ae,transmission:Pe,transmissionMap:N,thicknessMap:le,gradientMap:W,opaque:T.transparent===!1&&T.blending===Ki&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:ue,alphaHash:he,combine:T.combine,mapUv:De&&_(T.map.channel),aoMapUv:R&&_(T.aoMap.channel),lightMapUv:st&&_(T.lightMap.channel),bumpMapUv:Oe&&_(T.bumpMap.channel),normalMapUv:Be&&_(T.normalMap.channel),displacementMapUv:Me&&_(T.displacementMap.channel),emissiveMapUv:Ke&&_(T.emissiveMap.channel),metalnessMapUv:ne&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:fe&&_(T.anisotropyMap.channel),clearcoatMapUv:be&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:J&&_(T.sheenRoughnessMap.channel),specularMapUv:Se&&_(T.specularMap.channel),specularColorMapUv:we&&_(T.specularColorMap.channel),specularIntensityMapUv:Ae&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:le&&_(T.thicknessMap.channel),alphaMapUv:$&&_(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Be||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(De||$),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ae,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:De&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:Ke&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ht,flipSided:T.side===en,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(S(b,T),x(b,T),b.push(r.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function S(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function x(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const b=g[T.type];let U;if(b){const V=En[b];U=Kd.clone(V.uniforms)}else U=T.uniforms;return U}function L(T,b){let U;for(let V=0,z=h.length;V<z;V++){const Z=h[V];if(Z.cacheKey===b){U=Z,++U.usedTimes;break}}return U===void 0&&(U=new A_(r,b,T,s),h.push(U)),U}function P(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function A(T){c.remove(T)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:P,releaseShaderCache:A,programs:h,dispose:I}}function L_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function D_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $l(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||D_),n.length>1&&n.sort(d||jl),i.length>1&&i.sort(d||jl)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function N_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $l,r.set(n,[o])):i>=s.length?(o=new $l,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function U_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new He};break;case"SpotLight":t={position:new w,direction:new w,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new w,halfWidth:new w,halfHeight:new w};break}return r[e.id]=t,t}}}function F_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let O_=0;function B_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function k_(r){const e=new U_,t=F_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const i=new w,s=new ke,o=new ke;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,L=0,P=0,A=0;l.sort(B_);for(let T=0,b=l.length;T<b;T++){const U=l[T],V=U.color,z=U.intensity,Z=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=V.r*z,u+=V.g*z,d+=V.b*z;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],z);A++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ie=U.shadow,X=t.get(U);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=ee,n.directionalShadowMatrix[f]=U.shadow.matrix,S++}n.directional[f]=K,f++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(V).multiplyScalar(z),K.distance=Z,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[_]=K;const ie=U.shadow;if(U.map&&(n.spotLightMap[L]=U.map,L++,ie.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[_]=ie.matrix,U.castShadow){const X=t.get(U);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=ee,v++}_++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(V).multiplyScalar(z),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=K,m++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const ie=U.shadow,X=t.get(U);X.shadowIntensity=ie.intensity,X.shadowBias=ie.bias,X.shadowNormalBias=ie.normalBias,X.shadowRadius=ie.radius,X.shadowMapSize=ie.mapSize,X.shadowCameraNear=ie.camera.near,X.shadowCameraFar=ie.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=U.shadow.matrix,x++}n.point[g]=K,g++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(z),K.groundColor.copy(U.groundColor).multiplyScalar(z),n.hemi[p]=K,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=L,I.numLightProbes=A,n.version=O_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Jl(r){const e=new k_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function z_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Jl(r),e.set(i,[a])):s>=o.length?(a=new Jl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function V_(r,e,t){let n=new rc;const i=new Te,s=new Te,o=new it,a=new zf({depthPacking:td}),c=new Hf,l={},h=t.maxTextureSize,u={[qn]:en,[en]:qn,[Ht]:Ht},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let p=this.type;this.render=function(P,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),V=r.state;V.setBlending(ai),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=p!==kn&&this.type===kn,Z=p===kn&&this.type!==kn;for(let ee=0,K=P.length;ee<K;ee++){const ie=P[ee],X=ie.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const de=X.getFrameExtents();if(i.multiply(de),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/de.x),i.x=s.x*de.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/de.y),i.y=s.y*de.y,X.mapSize.y=s.y)),X.map===null||z===!0||Z===!0){const C=this.type!==kn?{minFilter:Kt,magFilter:Kt}:{};X.map!==null&&X.map.dispose(),X.map=new Ai(i.x,i.y,C),X.map.texture.name=ie.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const D=X.getViewportCount();for(let C=0;C<D;C++){const oe=X.getViewport(C);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(o),X.updateMatrices(ie,C),n=X.getFrustum(),v(A,I,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===kn&&S(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,b,U)};function S(P,A){const I=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(A,null,I,f,_,null)}function x(P,A,I,T){let b=null;const U=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=b.uuid,z=A.uuid;let Z=l[V];Z===void 0&&(Z={},l[V]=Z);let ee=Z[z];ee===void 0&&(ee=b.clone(),Z[z]=ee,A.addEventListener("dispose",L)),b=ee}if(b.visible=A.visible,b.wireframe=A.wireframe,T===kn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=r.properties.get(b);V.light=I}return b}function v(P,A,I,T,b){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===kn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const z=e.update(P),Z=P.material;if(Array.isArray(Z)){const ee=z.groups;for(let K=0,ie=ee.length;K<ie;K++){const X=ee[K],de=Z[X.materialIndex];if(de&&de.visible){const D=x(P,de,T,b);P.onBeforeShadow(r,P,A,I,z,D,X),r.renderBufferDirect(I,null,z,D,P,X),P.onAfterShadow(r,P,A,I,z,D,X)}}}else if(Z.visible){const ee=x(P,Z,T,b);P.onBeforeShadow(r,P,A,I,z,ee,null),r.renderBufferDirect(I,null,z,ee,P,null),P.onAfterShadow(r,P,A,I,z,ee,null)}}const V=P.children;for(let z=0,Z=V.length;z<Z;z++)v(V[z],A,I,T,b)}function L(P){P.target.removeEventListener("dispose",L);for(const I in l){const T=l[I],b=P.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const W_={[Ko]:Zo,[jo]:Qo,[$o]:ea,[Ji]:Jo,[Zo]:Ko,[Qo]:jo,[ea]:$o,[Jo]:Ji};function X_(r,e){function t(){let N=!1;const le=new it;let W=null;const $=new it(0,0,0,0);return{setMask:function(ue){W!==ue&&!N&&(r.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){N=ue},setClear:function(ue,he,Ge,xt,Bt){Bt===!0&&(ue*=xt,he*=xt,Ge*=xt),le.set(ue,he,Ge,xt),$.equals(le)===!1&&(r.clearColor(ue,he,Ge,xt),$.copy(le))},reset:function(){N=!1,W=null,$.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,W=null,$=null,ue=null;return{setReversed:function(he){if(le!==he){const Ge=e.get("EXT_clip_control");le?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const xt=ue;ue=null,this.setClear(xt)}le=he},getReversed:function(){return le},setTest:function(he){he?q(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function(he){W!==he&&!N&&(r.depthMask(he),W=he)},setFunc:function(he){if(le&&(he=W_[he]),$!==he){switch(he){case Ko:r.depthFunc(r.NEVER);break;case Zo:r.depthFunc(r.ALWAYS);break;case jo:r.depthFunc(r.LESS);break;case Ji:r.depthFunc(r.LEQUAL);break;case $o:r.depthFunc(r.EQUAL);break;case Jo:r.depthFunc(r.GEQUAL);break;case Qo:r.depthFunc(r.GREATER);break;case ea:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=he}},setLocked:function(he){N=he},setClear:function(he){ue!==he&&(le&&(he=1-he),r.clearDepth(he),ue=he)},reset:function(){N=!1,W=null,$=null,ue=null,le=!1}}}function i(){let N=!1,le=null,W=null,$=null,ue=null,he=null,Ge=null,xt=null,Bt=null;return{setTest:function(at){N||(at?q(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(at){le!==at&&!N&&(r.stencilMask(at),le=at)},setFunc:function(at,pn,Ln){(W!==at||$!==pn||ue!==Ln)&&(r.stencilFunc(at,pn,Ln),W=at,$=pn,ue=Ln)},setOp:function(at,pn,Ln){(he!==at||Ge!==pn||xt!==Ln)&&(r.stencilOp(at,pn,Ln),he=at,Ge=pn,xt=Ln)},setLocked:function(at){N=at},setClear:function(at){Bt!==at&&(r.clearStencil(at),Bt=at)},reset:function(){N=!1,le=null,W=null,$=null,ue=null,he=null,Ge=null,xt=null,Bt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,L=null,P=null,A=new He(0,0,0),I=0,T=!1,b=null,U=null,V=null,z=null,Z=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=ie>=2);let de=null,D={};const C=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),pe=new it().fromArray(C),k=new it().fromArray(oe);function Y(N,le,W,$){const ue=new Uint8Array(4),he=r.createTexture();r.bindTexture(N,he),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<W;Ge++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(le+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return he}const se={};se[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(r.DEPTH_TEST),o.setFunc(Ji),Oe(!1),Be(Cc),q(r.CULL_FACE),R(ai);function q(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function ae(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function ye(N,le){return u[N]!==le?(r.bindFramebuffer(N,le),u[N]=le,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function me(N,le){let W=f,$=!1;if(N){W=d.get(le),W===void 0&&(W=[],d.set(le,W));const ue=N.textures;if(W.length!==ue.length||W[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Ge=ue.length;he<Ge;he++)W[he]=r.COLOR_ATTACHMENT0+he;W.length=ue.length,$=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,$=!0);$&&r.drawBuffers(W)}function De(N){return g!==N?(r.useProgram(N),g=N,!0):!1}const Fe={[bi]:r.FUNC_ADD,[Eu]:r.FUNC_SUBTRACT,[Au]:r.FUNC_REVERSE_SUBTRACT};Fe[Ru]=r.MIN,Fe[Cu]=r.MAX;const Ce={[Pu]:r.ZERO,[Iu]:r.ONE,[Lu]:r.SRC_COLOR,[qo]:r.SRC_ALPHA,[Bu]:r.SRC_ALPHA_SATURATE,[Fu]:r.DST_COLOR,[Nu]:r.DST_ALPHA,[Du]:r.ONE_MINUS_SRC_COLOR,[Yo]:r.ONE_MINUS_SRC_ALPHA,[Ou]:r.ONE_MINUS_DST_COLOR,[Uu]:r.ONE_MINUS_DST_ALPHA,[ku]:r.CONSTANT_COLOR,[zu]:r.ONE_MINUS_CONSTANT_COLOR,[Hu]:r.CONSTANT_ALPHA,[Gu]:r.ONE_MINUS_CONSTANT_ALPHA};function R(N,le,W,$,ue,he,Ge,xt,Bt,at){if(N===ai){_===!0&&(ae(r.BLEND),_=!1);return}if(_===!1&&(q(r.BLEND),_=!0),N!==wu){if(N!==m||at!==T){if((p!==bi||v!==bi)&&(r.blendEquation(r.FUNC_ADD),p=bi,v=bi),at)switch(N){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFunc(r.ONE,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,x=null,L=null,P=null,A.set(0,0,0),I=0,m=N,T=at}return}ue=ue||le,he=he||W,Ge=Ge||$,(le!==p||ue!==v)&&(r.blendEquationSeparate(Fe[le],Fe[ue]),p=le,v=ue),(W!==S||$!==x||he!==L||Ge!==P)&&(r.blendFuncSeparate(Ce[W],Ce[$],Ce[he],Ce[Ge]),S=W,x=$,L=he,P=Ge),(xt.equals(A)===!1||Bt!==I)&&(r.blendColor(xt.r,xt.g,xt.b,Bt),A.copy(xt),I=Bt),m=N,T=!1}function st(N,le){N.side===Ht?ae(r.CULL_FACE):q(r.CULL_FACE);let W=N.side===en;le&&(W=!W),Oe(W),N.blending===Ki&&N.transparent===!1?R(ai):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){b!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),b=N)}function Be(N){N!==bu?(q(r.CULL_FACE),N!==U&&(N===Cc?r.cullFace(r.BACK):N===Tu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),U=N}function Me(N){N!==V&&(K&&r.lineWidth(N),V=N)}function Ke(N,le,W){N?(q(r.POLYGON_OFFSET_FILL),(z!==le||Z!==W)&&(r.polygonOffset(le,W),z=le,Z=W)):ae(r.POLYGON_OFFSET_FILL)}function ne(N){N?q(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function E(N){N===void 0&&(N=r.TEXTURE0+ee-1),de!==N&&(r.activeTexture(N),de=N)}function y(N,le,W){W===void 0&&(de===null?W=r.TEXTURE0+ee-1:W=de);let $=D[W];$===void 0&&($={type:void 0,texture:void 0},D[W]=$),($.type!==N||$.texture!==le)&&(de!==W&&(r.activeTexture(W),de=W),r.bindTexture(N,le||se[N]),$.type=N,$.texture=le)}function B(){const N=D[de];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{r.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{r.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{r.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{r.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{r.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{r.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(N){pe.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),pe.copy(N))}function J(N){k.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),k.copy(N))}function Se(N,le){let W=l.get(le);W===void 0&&(W=new WeakMap,l.set(le,W));let $=W.get(N);$===void 0&&($=r.getUniformBlockIndex(le,N.name),W.set(N,$))}function we(N,le){const $=l.get(le).get(N);c.get(le)!==$&&(r.uniformBlockBinding(le,$,N.__bindingPointIndex),c.set(le,$))}function Ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},de=null,D={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,L=null,P=null,A=new He(0,0,0),I=0,T=!1,b=null,U=null,V=null,z=null,Z=null,pe.set(0,0,r.canvas.width,r.canvas.height),k.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:q,disable:ae,bindFramebuffer:ye,drawBuffers:me,useProgram:De,setBlending:R,setMaterial:st,setFlipSided:Oe,setCullFace:Be,setLineWidth:Me,setPolygonOffset:Ke,setScissorTest:ne,activeTexture:E,bindTexture:y,unbindTexture:B,compressedTexImage2D:te,compressedTexImage3D:Q,texImage2D:_e,texImage3D:Ne,updateUBOMapping:Se,uniformBlockBinding:we,texStorage2D:Ze,texStorage3D:re,texSubImage2D:j,texSubImage3D:Pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:ze,viewport:J,reset:Ae}}function q_(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Fs("canvas")}function _(E,y,B){let te=1;const Q=ne(E);if((Q.width>B||Q.height>B)&&(te=B/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(te*Q.width),Pe=Math.floor(te*Q.height);u===void 0&&(u=g(j,Pe));const fe=y?g(j,Pe):u;return fe.width=j,fe.height=Pe,fe.getContext("2d").drawImage(E,0,0,j,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Pe+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){r.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(E,y,B,te,Q=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8)),y===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),y===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8)),y===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RG8UI),B===r.UNSIGNED_SHORT&&(j=r.RG16UI),B===r.UNSIGNED_INT&&(j=r.RG32UI),B===r.BYTE&&(j=r.RG8I),B===r.SHORT&&(j=r.RG16I),B===r.INT&&(j=r.RG32I)),y===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGB8UI),B===r.UNSIGNED_SHORT&&(j=r.RGB16UI),B===r.UNSIGNED_INT&&(j=r.RGB32UI),B===r.BYTE&&(j=r.RGB8I),B===r.SHORT&&(j=r.RGB16I),B===r.INT&&(j=r.RGB32I)),y===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),B===r.UNSIGNED_INT&&(j=r.RGBA32UI),B===r.BYTE&&(j=r.RGBA8I),B===r.SHORT&&(j=r.RGBA16I),B===r.INT&&(j=r.RGBA32I)),y===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),y===r.RGBA){const Pe=Q?kr:et.getTransfer(te);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=Pe===ht?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(E,y){let B;return E?y===null||y===Ei||y===ts?B=r.DEPTH24_STENCIL8:y===bn?B=r.DEPTH32F_STENCIL8:y===Ds&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===ts?B=r.DEPTH_COMPONENT24:y===bn?B=r.DEPTH_COMPONENT32F:y===Ds&&(B=r.DEPTH_COMPONENT16),B}function L(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Kt&&E.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function P(E){const y=E.target;y.removeEventListener("dispose",P),I(y),y.isVideoTexture&&h.delete(y)}function A(E){const y=E.target;y.removeEventListener("dispose",A),b(y)}function I(E){const y=n.get(E);if(y.__webglInit===void 0)return;const B=E.source,te=d.get(B);if(te){const Q=te[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(te).length===0&&d.delete(B)}n.remove(E)}function T(E){const y=n.get(E);r.deleteTexture(y.__webglTexture);const B=E.source,te=d.get(B);delete te[y.__cacheKey],o.memory.textures--}function b(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let Q=0;Q<y.__webglFramebuffer[te].length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[te][Q]);else r.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)r.deleteFramebuffer(y.__webglFramebuffer[te]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=E.textures;for(let te=0,Q=B.length;te<Q;te++){const j=n.get(B[te]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[te])}n.remove(E)}let U=0;function V(){U=0}function z(){const E=U;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),U+=1,E}function Z(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function ee(E,y){const B=n.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(B,E,y);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+y)}function K(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){k(B,E,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+y)}function ie(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){k(B,E,y);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+y)}function X(E,y){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+y)}const de={[Jt]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[Br]:r.MIRRORED_REPEAT},D={[Kt]:r.NEAREST,[mh]:r.NEAREST_MIPMAP_NEAREST,[Ts]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[Cr]:r.LINEAR_MIPMAP_NEAREST,[Gn]:r.LINEAR_MIPMAP_LINEAR},C={[id]:r.NEVER,[ld]:r.ALWAYS,[sd]:r.LESS,[Ah]:r.LEQUAL,[rd]:r.EQUAL,[cd]:r.GEQUAL,[od]:r.GREATER,[ad]:r.NOTEQUAL};function oe(E,y){if(y.type===bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===Cr||y.magFilter===Ts||y.magFilter===Gn||y.minFilter===Qt||y.minFilter===Cr||y.minFilter===Ts||y.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,de[y.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,de[y.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,de[y.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,D[y.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,D[y.minFilter]),y.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,C[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==Ts&&y.minFilter!==Gn||y.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function pe(E,y){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",P));const te=y.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const j=Z(y);if(j!==E.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[j].usedTimes++;const Pe=Q[E.__cacheKey];Pe!==void 0&&(Q[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(y)),E.__cacheKey=j,E.__webglTexture=Q[j].texture}return B}function k(E,y,B){let te=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=r.TEXTURE_3D);const Q=pe(E,y),j=y.source;t.bindTexture(te,E.__webglTexture,r.TEXTURE0+B);const Pe=n.get(j);if(j.version!==Pe.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const fe=et.getPrimaries(et.workingColorSpace),be=y.colorSpace===ni?null:et.getPrimaries(y.colorSpace),Ze=y.colorSpace===ni||fe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let re=_(y.image,!1,i.maxTextureSize);re=Ke(y,re);const _e=s.convert(y.format,y.colorSpace),Ne=s.convert(y.type);let ze=x(y.internalFormat,_e,Ne,y.colorSpace,y.isVideoTexture);oe(te,y);let J;const Se=y.mipmaps,we=y.isVideoTexture!==!0,Ae=Pe.__version===void 0||Q===!0,N=j.dataReady,le=L(y,re);if(y.isDepthTexture)ze=v(y.format===ns,y.type),Ae&&(we?t.texStorage2D(r.TEXTURE_2D,1,ze,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,ze,re.width,re.height,0,_e,Ne,null));else if(y.isDataTexture)if(Se.length>0){we&&Ae&&t.texStorage2D(r.TEXTURE_2D,le,ze,Se[0].width,Se[0].height);for(let W=0,$=Se.length;W<$;W++)J=Se[W],we?N&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,J.width,J.height,_e,Ne,J.data):t.texImage2D(r.TEXTURE_2D,W,ze,J.width,J.height,0,_e,Ne,J.data);y.generateMipmaps=!1}else we?(Ae&&t.texStorage2D(r.TEXTURE_2D,le,ze,re.width,re.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,_e,Ne,re.data)):t.texImage2D(r.TEXTURE_2D,0,ze,re.width,re.height,0,_e,Ne,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){we&&Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ze,Se[0].width,Se[0].height,re.depth);for(let W=0,$=Se.length;W<$;W++)if(J=Se[W],y.format!==un)if(_e!==null)if(we){if(N)if(y.layerUpdates.size>0){const ue=Rl(J.width,J.height,y.format,y.type);for(const he of y.layerUpdates){const Ge=J.data.subarray(he*ue/J.data.BYTES_PER_ELEMENT,(he+1)*ue/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,he,J.width,J.height,1,_e,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,J.width,J.height,re.depth,_e,J.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,ze,J.width,J.height,re.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,J.width,J.height,re.depth,_e,Ne,J.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,ze,J.width,J.height,re.depth,0,_e,Ne,J.data)}else{we&&Ae&&t.texStorage2D(r.TEXTURE_2D,le,ze,Se[0].width,Se[0].height);for(let W=0,$=Se.length;W<$;W++)J=Se[W],y.format!==un?_e!==null?we?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,J.width,J.height,_e,J.data):t.compressedTexImage2D(r.TEXTURE_2D,W,ze,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?N&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,J.width,J.height,_e,Ne,J.data):t.texImage2D(r.TEXTURE_2D,W,ze,J.width,J.height,0,_e,Ne,J.data)}else if(y.isDataArrayTexture)if(we){if(Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,ze,re.width,re.height,re.depth),N)if(y.layerUpdates.size>0){const W=Rl(re.width,re.height,y.format,y.type);for(const $ of y.layerUpdates){const ue=re.data.subarray($*W/re.data.BYTES_PER_ELEMENT,($+1)*W/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,_e,Ne,ue)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Ne,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,re.width,re.height,re.depth,0,_e,Ne,re.data);else if(y.isData3DTexture)we?(Ae&&t.texStorage3D(r.TEXTURE_3D,le,ze,re.width,re.height,re.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Ne,re.data)):t.texImage3D(r.TEXTURE_3D,0,ze,re.width,re.height,re.depth,0,_e,Ne,re.data);else if(y.isFramebufferTexture){if(Ae)if(we)t.texStorage2D(r.TEXTURE_2D,le,ze,re.width,re.height);else{let W=re.width,$=re.height;for(let ue=0;ue<le;ue++)t.texImage2D(r.TEXTURE_2D,ue,ze,W,$,0,_e,Ne,null),W>>=1,$>>=1}}else if(Se.length>0){if(we&&Ae){const W=ne(Se[0]);t.texStorage2D(r.TEXTURE_2D,le,ze,W.width,W.height)}for(let W=0,$=Se.length;W<$;W++)J=Se[W],we?N&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,_e,Ne,J):t.texImage2D(r.TEXTURE_2D,W,ze,_e,Ne,J);y.generateMipmaps=!1}else if(we){if(Ae){const W=ne(re);t.texStorage2D(r.TEXTURE_2D,le,ze,W.width,W.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,Ne,re)}else t.texImage2D(r.TEXTURE_2D,0,ze,_e,Ne,re);m(y)&&p(te),Pe.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Y(E,y,B){if(y.image.length!==6)return;const te=pe(E,y),Q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+B);const j=n.get(Q);if(Q.version!==j.__version||te===!0){t.activeTexture(r.TEXTURE0+B);const Pe=et.getPrimaries(et.workingColorSpace),fe=y.colorSpace===ni?null:et.getPrimaries(y.colorSpace),be=y.colorSpace===ni||Pe===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ze=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let $=0;$<6;$++)!Ze&&!re?_e[$]=_(y.image[$],!0,i.maxCubemapSize):_e[$]=re?y.image[$].image:y.image[$],_e[$]=Ke(y,_e[$]);const Ne=_e[0],ze=s.convert(y.format,y.colorSpace),J=s.convert(y.type),Se=x(y.internalFormat,ze,J,y.colorSpace),we=y.isVideoTexture!==!0,Ae=j.__version===void 0||te===!0,N=Q.dataReady;let le=L(y,Ne);oe(r.TEXTURE_CUBE_MAP,y);let W;if(Ze){we&&Ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Se,Ne.width,Ne.height);for(let $=0;$<6;$++){W=_e[$].mipmaps;for(let ue=0;ue<W.length;ue++){const he=W[ue];y.format!==un?ze!==null?we?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,Se,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,0,0,he.width,he.height,ze,J,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue,Se,he.width,he.height,0,ze,J,he.data)}}}else{if(W=y.mipmaps,we&&Ae){W.length>0&&le++;const $=ne(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Se,$.width,$.height)}for(let $=0;$<6;$++)if(re){we?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e[$].width,_e[$].height,ze,J,_e[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Se,_e[$].width,_e[$].height,0,ze,J,_e[$].data);for(let ue=0;ue<W.length;ue++){const Ge=W[ue].image[$].image;we?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,Ge.width,Ge.height,ze,J,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,Se,Ge.width,Ge.height,0,ze,J,Ge.data)}}else{we?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ze,J,_e[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Se,ze,J,_e[$]);for(let ue=0;ue<W.length;ue++){const he=W[ue];we?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,0,0,ze,J,he.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue+1,Se,ze,J,he.image[$])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function se(E,y,B,te,Q,j){const Pe=s.convert(B.format,B.colorSpace),fe=s.convert(B.type),be=x(B.internalFormat,Pe,fe,B.colorSpace),Ze=n.get(y),re=n.get(B);if(re.__renderTarget=y,!Ze.__hasExternalTextures){const _e=Math.max(1,y.width>>j),Ne=Math.max(1,y.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,be,_e,Ne,y.depth,0,Pe,fe,null):t.texImage2D(Q,j,be,_e,Ne,0,Pe,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),Be(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Q,re.__webglTexture,0,Oe(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,Q,re.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function q(E,y,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),y.depthBuffer){const te=y.depthTexture,Q=te&&te.isDepthTexture?te.type:null,j=v(y.stencilBuffer,Q),Pe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=Oe(y);Be(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,y.width,y.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,E)}else{const te=y.textures;for(let Q=0;Q<te.length;Q++){const j=te[Q],Pe=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),be=x(j.internalFormat,Pe,fe,j.colorSpace),Ze=Oe(y);B&&Be(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,be,y.width,y.height):Be(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,be,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,be,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ae(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(y.depthTexture);te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee(y.depthTexture,0);const Q=te.__webglTexture,j=Oe(y);if(y.depthTexture.format===Zi)Be(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(y.depthTexture.format===ns)Be(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(E){const y=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const te=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=te}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ae(y.__webglFramebuffer,E)}else if(B){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=r.createRenderbuffer(),q(y.__webglDepthbuffer[te],E,!1);else{const Q=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),q(y.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(E,y,B){const te=n.get(E);y!==void 0&&se(te.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&ye(E)}function De(E){const y=E.texture,B=n.get(E),te=n.get(y);E.addEventListener("dispose",A);const Q=E.textures,j=E.isWebGLCubeRenderTarget===!0,Pe=Q.length>1;if(Pe||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=y.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let be=0;be<y.mipmaps.length;be++)B.__webglFramebuffer[fe][be]=r.createFramebuffer()}else B.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)B.__webglFramebuffer[fe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let fe=0,be=Q.length;fe<be;fe++){const Ze=n.get(Q[fe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),o.memory.textures++)}if(E.samples>0&&Be(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<Q.length;fe++){const be=Q[fe];B.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const Ze=s.convert(be.format,be.colorSpace),re=s.convert(be.type),_e=x(be.internalFormat,Ze,re,be.colorSpace,E.isXRRenderTarget===!0),Ne=Oe(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,_e,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),q(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),oe(r.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)se(B.__webglFramebuffer[fe][be],E,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else se(B.__webglFramebuffer[fe],E,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,be=Q.length;fe<be;fe++){const Ze=Q[fe],re=n.get(Ze);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),oe(r.TEXTURE_2D,Ze),se(B.__webglFramebuffer,E,Ze,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,0),m(Ze)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),oe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)se(B.__webglFramebuffer[be],E,y,r.COLOR_ATTACHMENT0,fe,be);else se(B.__webglFramebuffer,E,y,r.COLOR_ATTACHMENT0,fe,0);m(y)&&p(fe),t.unbindTexture()}E.depthBuffer&&ye(E)}function Fe(E){const y=E.textures;for(let B=0,te=y.length;B<te;B++){const Q=y[B];if(m(Q)){const j=S(E),Pe=n.get(Q).__webglTexture;t.bindTexture(j,Pe),p(j),t.unbindTexture()}}}const Ce=[],R=[];function st(E){if(E.samples>0){if(Be(E)===!1){const y=E.textures,B=E.width,te=E.height;let Q=r.COLOR_BUFFER_BIT;const j=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=n.get(E),fe=y.length>1;if(fe)for(let be=0;be<y.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let be=0;be<y.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[be]);const Ze=n.get(y[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,B,te,0,0,B,te,Q,r.NEAREST),c===!0&&(Ce.length=0,R.length=0,Ce.push(r.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ce.push(j),R.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,R)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<y.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[be]);const Ze=n.get(y[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Oe(E){return Math.min(i.maxSamples,E.samples)}function Be(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ke(E,y){const B=E.colorSpace,te=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==jt&&B!==ni&&(et.getTransfer(B)===ht?(te!==un||Q!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function ne(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=X,this.rebindTextures=me,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Be}function Y_(r,e){function t(n,i=ni){let s;const o=et.getTransfer(i);if(n===Yn)return r.UNSIGNED_BYTE;if(n===Ya)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return r.BYTE;if(n===_h)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===qa)return r.INT;if(n===Ei)return r.UNSIGNED_INT;if(n===bn)return r.FLOAT;if(n===Ws)return r.HALF_FLOAT;if(n===xh)return r.ALPHA;if(n===yh)return r.RGB;if(n===un)return r.RGBA;if(n===Mh)return r.LUMINANCE;if(n===Sh)return r.LUMINANCE_ALPHA;if(n===Zi)return r.DEPTH_COMPONENT;if(n===ns)return r.DEPTH_STENCIL;if(n===Za)return r.RED;if(n===ja)return r.RED_INTEGER;if(n===bh)return r.RG;if(n===$a)return r.RG_INTEGER;if(n===Ja)return r.RGBA_INTEGER;if(n===Pr||n===Ir||n===Lr||n===Dr)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===ca||n===la)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===aa||n===ca)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma||n===Sa||n===ba)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ha)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Ta||n===wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Nr)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Th||n===Ea||n===Aa||n===Ra)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
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

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new li({vertexShader:K_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $_ extends ls{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new j_,m=t.getContextAttributes();let p=null,S=null;const x=[],v=[],L=new Te;let P=null;const A=new Nt;A.viewport=new it;const I=new Nt;I.viewport=new it;const T=[A,I],b=new cp;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=x[k];return Y===void 0&&(Y=new bo,x[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=x[k];return Y===void 0&&(Y=new bo,x[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=x[k];return Y===void 0&&(Y=new bo,x[k]=Y),Y.getHandSpace()};function z(k){const Y=v.indexOf(k.inputSource);if(Y===-1)return;const se=x[Y];se!==void 0&&(se.update(k.inputSource,k.frame,l||o),se.dispatchEvent({type:k.type,data:k.inputSource}))}function Z(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",ee);for(let k=0;k<x.length;k++){const Y=v[k];Y!==null&&(v[k]=null,x[k].disconnect(Y))}U=null,V=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,q=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?ns:Zi,q=m.stencil?ts:Ei);const ye={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ai(d.textureWidth,d.textureHeight,{format:un,type:Yn,depthTexture:new zh(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ai(f.framebufferWidth,f.framebufferHeight,{format:un,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),pe.setContext(i),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(k){for(let Y=0;Y<k.removed.length;Y++){const se=k.removed[Y],q=v.indexOf(se);q>=0&&(v[q]=null,x[q].disconnect(se))}for(let Y=0;Y<k.added.length;Y++){const se=k.added[Y];let q=v.indexOf(se);if(q===-1){for(let ye=0;ye<x.length;ye++)if(ye>=v.length){v.push(se),q=ye;break}else if(v[ye]===null){v[ye]=se,q=ye;break}if(q===-1)break}const ae=x[q];ae&&ae.connect(se)}}const K=new w,ie=new w;function X(k,Y,se){K.setFromMatrixPosition(Y.matrixWorld),ie.setFromMatrixPosition(se.matrixWorld);const q=K.distanceTo(ie),ae=Y.projectionMatrix.elements,ye=se.projectionMatrix.elements,me=ae[14]/(ae[10]-1),De=ae[14]/(ae[10]+1),Fe=(ae[9]+1)/ae[5],Ce=(ae[9]-1)/ae[5],R=(ae[8]-1)/ae[0],st=(ye[8]+1)/ye[0],Oe=me*R,Be=me*st,Me=q/(-R+st),Ke=Me*-R;if(Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ke),k.translateZ(Me),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ae[10]===-1)k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ne=me+Me,E=De+Me,y=Oe-Ke,B=Be+(q-Ke),te=Fe*De/E*ne,Q=Ce*De/E*ne;k.projectionMatrix.makePerspective(y,B,te,Q,ne,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function de(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let Y=k.near,se=k.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(se=_.depthFar)),b.near=I.near=A.near=Y,b.far=I.far=A.far=se,(U!==b.near||V!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,V=b.far),A.layers.mask=k.layers.mask|2,I.layers.mask=k.layers.mask|4,b.layers.mask=A.layers.mask|I.layers.mask;const q=k.parent,ae=b.cameras;de(b,q);for(let ye=0;ye<ae.length;ye++)de(ae[ye],q);ae.length===2?X(b,A,I):b.projectionMatrix.copy(A.projectionMatrix),D(k,b,q)};function D(k,Y,se){se===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=is*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let C=null;function oe(k,Y){if(h=Y.getViewerPose(l||o),g=Y,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let q=!1;se.length!==b.cameras.length&&(b.cameras.length=0,q=!0);for(let me=0;me<se.length;me++){const De=se[me];let Fe=null;if(f!==null)Fe=f.getViewport(De);else{const R=u.getViewSubImage(d,De);Fe=R.viewport,me===0&&(e.setRenderTargetTextures(S,R.colorTexture,d.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(S))}let Ce=T[me];Ce===void 0&&(Ce=new Nt,Ce.layers.enable(me),Ce.viewport=new it,T[me]=Ce),Ce.matrix.fromArray(De.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(De.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&(b.matrix.copy(Ce.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),q===!0&&b.cameras.push(Ce)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const me=u.getDepthInformation(se[0]);me&&me.isValid&&me.texture&&_.init(e,me,i.renderState)}}for(let se=0;se<x.length;se++){const q=v[se],ae=x[se];q!==null&&ae!==void 0&&ae.update(q,Y,l||o)}C&&C(k,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const pe=new tu;pe.setAnimationLoop(oe),this.setAnimationLoop=function(k){C=k},this.dispose=function(){}}}const _i=new wn,J_=new ke;function Q_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(_i)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ev(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=i[S.id];v===void 0&&(g(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(S,L);const P=e.render.frame;s[S.id]!==P&&(d(S),s[S.id]=P)}function h(S){const x=u();S.__bindingPointIndex=x;const v=r.createBuffer(),L=S.__size,P=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,L,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],v=S.uniforms,L=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let P=0,A=v.length;P<A;P++){const I=Array.isArray(v[P])?v[P]:[v[P]];for(let T=0,b=I.length;T<b;T++){const U=I[T];if(f(U,P,T,L)===!0){const V=U.__offset,z=Array.isArray(U.value)?U.value:[U.value];let Z=0;for(let ee=0;ee<z.length;ee++){const K=z[ee],ie=_(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,V+Z,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,Z),Z+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,x,v,L){const P=S.value,A=x+"_"+v;if(L[A]===void 0)return typeof P=="number"||typeof P=="boolean"?L[A]=P:L[A]=P.clone(),!0;{const I=L[A];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return L[A]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(S){const x=S.uniforms;let v=0;const L=16;for(let A=0,I=x.length;A<I;A++){const T=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,U=T.length;b<U;b++){const V=T[b],z=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,ee=z.length;Z<ee;Z++){const K=z[Z],ie=_(K),X=v%L,de=X%ie.boundary,D=X+de;v+=de,D!==0&&L-D<ie.storage&&(v+=L-D),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=ie.storage}}}const P=v%L;return P>0&&(v+=L-P),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Jr{constructor(e={}){const{canvas:t=Ed(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=ci,this.toneMappingExposure=1;const v=this;let L=!1,P=0,A=0,I=null,T=-1,b=null;const U=new it,V=new it;let z=null;const Z=new He(0);let ee=0,K=t.width,ie=t.height,X=1,de=null,D=null;const C=new it(0,0,K,ie),oe=new it(0,0,K,ie);let pe=!1;const k=new rc;let Y=!1,se=!1;this.transmissionResolutionScale=1;const q=new ke,ae=new ke,ye=new w,me=new it,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ce(){return I===null?X:1}let R=n;function st(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){const F="webgl2";if(R=st(F,M),R===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,Be,Me,Ke,ne,E,y,B,te,Q,j,Pe,fe,be,Ze,re,_e,Ne,ze,J,Se,we,Ae,N;function le(){Oe=new u0(R),Oe.init(),we=new Y_(R,Oe),Be=new s0(R,Oe,e,we),Me=new X_(R,Oe),Be.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Ke=new p0(R),ne=new L_,E=new q_(R,Oe,Me,ne,Be,we,Ke),y=new o0(v),B=new h0(v),te=new yp(R),Ae=new n0(R,te),Q=new d0(R,te,Ke,Ae),j=new g0(R,Q,te,Ke),ze=new m0(R,Be,E),re=new r0(ne),Pe=new I_(v,y,B,Oe,Be,Ae,re),fe=new Q_(v,ne),be=new N_,Ze=new z_(Oe),Ne=new t0(v,y,B,Me,j,f,c),_e=new V_(v,j,Be),N=new ev(R,Ke,Be,Me),J=new i0(R,Oe,Ke),Se=new f0(R,Oe,Ke),Ke.programs=Pe.programs,v.capabilities=Be,v.extensions=Oe,v.properties=ne,v.renderLists=be,v.shadowMap=_e,v.state=Me,v.info=Ke}le();const W=new $_(v,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(K,ie,!1))},this.getSize=function(M){return M.set(K,ie)},this.setSize=function(M,F,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,ie=F,t.width=Math.floor(M*X),t.height=Math.floor(F*X),H===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(K*X,ie*X).floor()},this.setDrawingBufferSize=function(M,F,H){K=M,ie=F,X=H,t.width=Math.floor(M*H),t.height=Math.floor(F*H),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(C)},this.setViewport=function(M,F,H,G){M.isVector4?C.set(M.x,M.y,M.z,M.w):C.set(M,F,H,G),Me.viewport(U.copy(C).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,F,H,G){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,F,H,G),Me.scissor(V.copy(oe).multiplyScalar(X).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){Me.setScissorTest(pe=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){D=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,H=!0){let G=0;if(M){let O=!1;if(I!==null){const ce=I.texture.format;O=ce===Ja||ce===$a||ce===ja}if(O){const ce=I.texture.type,ve=ce===Yn||ce===Ei||ce===Ds||ce===ts||ce===Ya||ce===Ka,Ee=Ne.getClearColor(),Re=Ne.getClearAlpha(),Ve=Ee.r,We=Ee.g,Le=Ee.b;ve?(g[0]=Ve,g[1]=We,g[2]=Le,g[3]=Re,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ve,_[1]=We,_[2]=Le,_[3]=Re,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}F&&(G|=R.DEPTH_BUFFER_BIT),H&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ne.dispose(),be.dispose(),Ze.dispose(),ne.dispose(),y.dispose(),B.dispose(),j.dispose(),Ae.dispose(),N.dispose(),Pe.dispose(),W.dispose(),W.removeEventListener("sessionstart",Sc),W.removeEventListener("sessionend",bc),hi.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=Ke.autoReset,F=_e.enabled,H=_e.autoUpdate,G=_e.needsUpdate,O=_e.type;le(),Ke.autoReset=M,_e.enabled=F,_e.autoUpdate=H,_e.needsUpdate=G,_e.type=O}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ge(M){const F=M.target;F.removeEventListener("dispose",Ge),xt(F)}function xt(M){Bt(M),ne.remove(M)}function Bt(M){const F=ne.get(M).programs;F!==void 0&&(F.forEach(function(H){Pe.releaseProgram(H)}),M.isShaderMaterial&&Pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,H,G,O,ce){F===null&&(F=De);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Ee=_u(M,F,H,G,O);Me.setMaterial(G,ve);let Re=H.index,Ve=1;if(G.wireframe===!0){if(Re=Q.getWireframeAttribute(H),Re===void 0)return;Ve=2}const We=H.drawRange,Le=H.attributes.position;let tt=We.start*Ve,rt=(We.start+We.count)*Ve;ce!==null&&(tt=Math.max(tt,ce.start*Ve),rt=Math.min(rt,(ce.start+ce.count)*Ve)),Re!==null?(tt=Math.max(tt,0),rt=Math.min(rt,Re.count)):Le!=null&&(tt=Math.max(tt,0),rt=Math.min(rt,Le.count));const St=rt-tt;if(St<0||St===1/0)return;Ae.setup(O,G,Ee,H,Re);let yt,nt=J;if(Re!==null&&(yt=te.get(Re),nt=Se,nt.setIndex(yt)),O.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Ce()),nt.setMode(R.LINES)):nt.setMode(R.TRIANGLES);else if(O.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Me.setLineWidth(Ue*Ce()),O.isLineSegments?nt.setMode(R.LINES):O.isLineLoop?nt.setMode(R.LINE_LOOP):nt.setMode(R.LINE_STRIP)}else O.isPoints?nt.setMode(R.POINTS):O.isSprite&&nt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))nt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,Ut=O._multiDrawCounts,ot=O._multiDrawCount,mn=Re?te.get(Re).bytesPerElement:1,Ci=ne.get(G).currentProgram.getUniforms();for(let tn=0;tn<ot;tn++)Ci.setValue(R,"_gl_DrawID",tn),nt.render(Ue[tn]/mn,Ut[tn])}else if(O.isInstancedMesh)nt.renderInstances(tt,St,O.count);else if(H.isInstancedBufferGeometry){const Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ut=Math.min(H.instanceCount,Ue);nt.renderInstances(tt,St,Ut)}else nt.render(tt,St)};function at(M,F,H){M.transparent===!0&&M.side===Ht&&M.forceSinglePass===!1?(M.side=en,M.needsUpdate=!0,$s(M,F,H),M.side=qn,M.needsUpdate=!0,$s(M,F,H),M.side=Ht):$s(M,F,H)}this.compile=function(M,F,H=null){H===null&&(H=M),p=Ze.get(H),p.init(F),x.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==H&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Ee=ce[ve];at(Ee,H,O),G.add(Ee)}else at(ce,H,O),G.add(ce)}),p=x.pop(),G},this.compileAsync=function(M,F,H=null){const G=this.compile(M,F,H);return new Promise(O=>{function ce(){if(G.forEach(function(ve){ne.get(ve).currentProgram.isReady()&&G.delete(ve)}),G.size===0){O(M);return}setTimeout(ce,10)}Oe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let pn=null;function Ln(M){pn&&pn(M)}function Sc(){hi.stop()}function bc(){hi.start()}const hi=new tu;hi.setAnimationLoop(Ln),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(M){pn=M,W.setAnimationLoop(M),M===null?hi.stop():hi.start()},W.addEventListener("sessionstart",Sc),W.addEventListener("sessionend",bc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(F),F=W.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,F,I),p=Ze.get(M,x.length),p.init(F),x.push(p),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(ae),se=this.localClippingEnabled,Y=re.init(this.clippingPlanes,se),m=be.get(M,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&eo(ce,F,-1/0,v.sortObjects)}eo(M,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(de,D),Fe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Fe&&Ne.addToRenderList(m,M),this.info.render.frame++,Y===!0&&re.beginShadows();const H=p.state.shadowsArray;_e.render(H,M,F),Y===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ce=F.cameras;if(O.length>0)for(let ve=0,Ee=ce.length;ve<Ee;ve++){const Re=ce[ve];wc(G,O,M,Re)}Fe&&Ne.render(M);for(let ve=0,Ee=ce.length;ve<Ee;ve++){const Re=ce[ve];Tc(m,M,Re,Re.viewport)}}else O.length>0&&wc(G,O,M,F),Fe&&Ne.render(M),Tc(m,M,F);I!==null&&A===0&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(v,M,F),Ae.resetDefaultState(),T=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function eo(M,F,H,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){G&&me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ae);const ve=j.update(M),Ee=M.material;Ee.visible&&m.push(M,ve,Ee,H,me.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){const ve=j.update(M),Ee=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),me.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),me.copy(ve.boundingSphere.center)),me.applyMatrix4(M.matrixWorld).applyMatrix4(ae)),Array.isArray(Ee)){const Re=ve.groups;for(let Ve=0,We=Re.length;Ve<We;Ve++){const Le=Re[Ve],tt=Ee[Le.materialIndex];tt&&tt.visible&&m.push(M,ve,tt,H,me.z,Le)}}else Ee.visible&&m.push(M,ve,Ee,H,me.z,null)}}const ce=M.children;for(let ve=0,Ee=ce.length;ve<Ee;ve++)eo(ce[ve],F,H,G)}function Tc(M,F,H,G){const O=M.opaque,ce=M.transmissive,ve=M.transparent;p.setupLightsView(H),Y===!0&&re.setGlobalState(v.clippingPlanes,H),G&&Me.viewport(U.copy(G)),O.length>0&&js(O,F,H),ce.length>0&&js(ce,F,H),ve.length>0&&js(ve,F,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function wc(M,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ai(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ws:Yn,minFilter:Gn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ce=p.state.transmissionRenderTarget[G.id],ve=G.viewport||U;ce.setSize(ve.z*v.transmissionResolutionScale,ve.w*v.transmissionResolutionScale);const Ee=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(Z),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&Ne.render(H);const Re=v.toneMapping;v.toneMapping=ci;const Ve=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Y===!0&&re.setGlobalState(v.clippingPlanes,G),js(M,H,G),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Le=0,tt=F.length;Le<tt;Le++){const rt=F[Le],St=rt.object,yt=rt.geometry,nt=rt.material,Ue=rt.group;if(nt.side===Ht&&St.layers.test(G.layers)){const Ut=nt.side;nt.side=en,nt.needsUpdate=!0,Ec(St,H,G,yt,nt,Ue),nt.side=Ut,nt.needsUpdate=!0,We=!0}}We===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}v.setRenderTarget(Ee),v.setClearColor(Z,ee),Ve!==void 0&&(G.viewport=Ve),v.toneMapping=Re}function js(M,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=M.length;O<ce;O++){const ve=M[O],Ee=ve.object,Re=ve.geometry,Ve=G===null?ve.material:G,We=ve.group;Ee.layers.test(H.layers)&&Ec(Ee,F,H,Re,Ve,We)}}function Ec(M,F,H,G,O,ce){M.onBeforeRender(v,F,H,G,O,ce),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,F,H,G,M,ce),O.transparent===!0&&O.side===Ht&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,v.renderBufferDirect(H,F,G,O,M,ce),O.side=qn,O.needsUpdate=!0,v.renderBufferDirect(H,F,G,O,M,ce),O.side=Ht):v.renderBufferDirect(H,F,G,O,M,ce),M.onAfterRender(v,F,H,G,O,ce)}function $s(M,F,H){F.isScene!==!0&&(F=De);const G=ne.get(M),O=p.state.lights,ce=p.state.shadowsArray,ve=O.state.version,Ee=Pe.getParameters(M,O.state,ce,F,H),Re=Pe.getProgramCacheKey(Ee);let Ve=G.programs;G.environment=M.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(M.isMeshStandardMaterial?B:y).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ve===void 0&&(M.addEventListener("dispose",Ge),Ve=new Map,G.programs=Ve);let We=Ve.get(Re);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===ve)return Rc(M,Ee),We}else Ee.uniforms=Pe.getUniforms(M),M.onBeforeCompile(Ee,v),We=Pe.acquireProgram(Ee,Re),Ve.set(Re,We),G.uniforms=Ee.uniforms;const Le=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=re.uniform),Rc(M,Ee),G.needsLights=xu(M),G.lightsStateVersion=ve,G.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function Ac(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Ur.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Rc(M,F){const H=ne.get(M);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function _u(M,F,H,G,O){F.isScene!==!0&&(F=De),E.resetTextureUnits();const ce=F.fog,ve=G.isMeshStandardMaterial?F.environment:null,Ee=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:jt,Re=(G.isMeshStandardMaterial?B:y).get(G.envMap||ve),Ve=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,rt=!!H.morphAttributes.color;let St=ci;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(St=v.toneMapping);const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=yt!==void 0?yt.length:0,Ue=ne.get(G),Ut=p.state.lights;if(Y===!0&&(se===!0||M!==b)){const Vt=M===b&&G.id===T;re.setState(G,M,Vt)}let ot=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ut.state.version||Ue.outputColorSpace!==Ee||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==Re||G.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==We||Ue.morphTargets!==Le||Ue.morphNormals!==tt||Ue.morphColors!==rt||Ue.toneMapping!==St||Ue.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Ue.__version=G.version);let mn=Ue.currentProgram;ot===!0&&(mn=$s(G,F,O));let Ci=!1,tn=!1,ps=!1;const ft=mn.getUniforms(),on=Ue.uniforms;if(Me.useProgram(mn.program)&&(Ci=!0,tn=!0,ps=!0),G.id!==T&&(T=G.id,tn=!0),Ci||b!==M){Me.buffers.depth.getReversed()?(q.copy(M.projectionMatrix),Rd(q),Cd(q),ft.setValue(R,"projectionMatrix",q)):ft.setValue(R,"projectionMatrix",M.projectionMatrix),ft.setValue(R,"viewMatrix",M.matrixWorldInverse);const $t=ft.map.cameraPosition;$t!==void 0&&$t.setValue(R,ye.setFromMatrixPosition(M.matrixWorld)),Be.logarithmicDepthBuffer&&ft.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,tn=!0,ps=!0)}if(O.isSkinnedMesh){ft.setOptional(R,O,"bindMatrix"),ft.setOptional(R,O,"bindMatrixInverse");const Vt=O.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ft.setValue(R,"boneTexture",Vt.boneTexture,E))}O.isBatchedMesh&&(ft.setOptional(R,O,"batchingTexture"),ft.setValue(R,"batchingTexture",O._matricesTexture,E),ft.setOptional(R,O,"batchingIdTexture"),ft.setValue(R,"batchingIdTexture",O._indirectTexture,E),ft.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(R,"batchingColorTexture",O._colorsTexture,E));const an=H.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ze.update(O,H,mn),(tn||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,ft.setValue(R,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(on.envMap.value=Re,on.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),tn&&(ft.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&vu(on,ps),ce&&G.fog===!0&&fe.refreshFogUniforms(on,ce),fe.refreshMaterialUniforms(on,G,X,ie,p.state.transmissionRenderTarget[M.id]),Ur.upload(R,Ac(Ue),on,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ur.upload(R,Ac(Ue),on,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(R,"center",O.center),ft.setValue(R,"modelViewMatrix",O.modelViewMatrix),ft.setValue(R,"normalMatrix",O.normalMatrix),ft.setValue(R,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Vt=G.uniformsGroups;for(let $t=0,to=Vt.length;$t<to;$t++){const ui=Vt[$t];N.update(ui,mn),N.bind(ui,mn)}}return mn}function vu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function xu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,F,H){ne.get(M.texture).__webglTexture=F,ne.get(M.depthTexture).__webglTexture=H;const G=ne.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const H=ne.get(M);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const yu=R.createFramebuffer();this.setRenderTarget=function(M,F=0,H=0){I=M,P=F,A=H;let G=!0,O=null,ce=!1,ve=!1;if(M){const Re=ne.get(M);if(Re.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Re.__hasExternalTextures)E.rebindTextures(M,ne.get(M.texture).__webglTexture,ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&ne.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Ve=M.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ve=!0);const We=ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[F])?O=We[F][H]:O=We[F],ce=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?O=ne.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[H]:O=We,U.copy(M.viewport),V.copy(M.scissor),z=M.scissorTest}else U.copy(C).multiplyScalar(X).floor(),V.copy(oe).multiplyScalar(X).floor(),z=pe;if(H!==0&&(O=yu),Me.bindFramebuffer(R.FRAMEBUFFER,O)&&G&&Me.drawBuffers(M,O),Me.viewport(U),Me.scissor(V),Me.setScissorTest(z),ce){const Re=ne.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,H)}else if(ve){const Re=ne.get(M.texture),Ve=F;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Re.__webglTexture,H,Ve)}else if(M!==null&&H!==0){const Re=ne.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(M,F,H,G,O,ce,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Me.bindFramebuffer(R.FRAMEBUFFER,Ee);try{const Re=M.texture,Ve=Re.format,We=Re.type;if(!Be.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&H>=0&&H<=M.height-O&&R.readPixels(F,H,G,O,we.convert(Ve),we.convert(We),ce)}finally{const Re=I!==null?ne.get(I).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,F,H,G,O,ce,ve){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){const Re=M.texture,Ve=Re.format,We=Re.type;if(!Be.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-G&&H>=0&&H<=M.height-O){Me.bindFramebuffer(R.FRAMEBUFFER,Ee);const Le=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Le),R.bufferData(R.PIXEL_PACK_BUFFER,ce.byteLength,R.STREAM_READ),R.readPixels(F,H,G,O,we.convert(Ve),we.convert(We),0);const tt=I!==null?ne.get(I).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,tt);const rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Ad(R,rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Le),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ce),R.deleteBuffer(Le),R.deleteSync(rt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,H=0){M.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(M.image.width*G),ce=Math.floor(M.image.height*G),ve=F!==null?F.x:0,Ee=F!==null?F.y:0;E.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,ve,Ee,O,ce),Me.unbindTexture()};const Mu=R.createFramebuffer(),Su=R.createFramebuffer();this.copyTextureToTexture=function(M,F,H=null,G=null,O=0,ce=null){M.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],F=arguments[2],ce=arguments[3]||0,H=null),ce===null&&(O!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=O,O=0):ce=0);let ve,Ee,Re,Ve,We,Le,tt,rt,St;const yt=M.isCompressedTexture?M.mipmaps[ce]:M.image;if(H!==null)ve=H.max.x-H.min.x,Ee=H.max.y-H.min.y,Re=H.isBox3?H.max.z-H.min.z:1,Ve=H.min.x,We=H.min.y,Le=H.isBox3?H.min.z:0;else{const an=Math.pow(2,-O);ve=Math.floor(yt.width*an),Ee=Math.floor(yt.height*an),M.isDataArrayTexture?Re=yt.depth:M.isData3DTexture?Re=Math.floor(yt.depth*an):Re=1,Ve=0,We=0,Le=0}G!==null?(tt=G.x,rt=G.y,St=G.z):(tt=0,rt=0,St=0);const nt=we.convert(F.format),Ue=we.convert(F.type);let Ut;F.isData3DTexture?(E.setTexture3D(F,0),Ut=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),Ut=R.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),Ut=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=R.getParameter(R.UNPACK_ROW_LENGTH),mn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ci=R.getParameter(R.UNPACK_SKIP_PIXELS),tn=R.getParameter(R.UNPACK_SKIP_ROWS),ps=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Le);const ft=M.isDataArrayTexture||M.isData3DTexture,on=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const an=ne.get(M),Vt=ne.get(F),$t=ne.get(an.__renderTarget),to=ne.get(Vt.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,$t.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,to.__webglFramebuffer);for(let ui=0;ui<Re;ui++)ft&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.get(M).__webglTexture,O,Le+ui),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ne.get(F).__webglTexture,ce,St+ui)),R.blitFramebuffer(Ve,We,ve,Ee,tt,rt,ve,Ee,R.DEPTH_BUFFER_BIT,R.NEAREST);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||ne.has(M)){const an=ne.get(M),Vt=ne.get(F);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Mu),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Su);for(let $t=0;$t<Re;$t++)ft?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,an.__webglTexture,O,Le+$t):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,an.__webglTexture,O),on?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Vt.__webglTexture,ce,St+$t):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Vt.__webglTexture,ce),O!==0?R.blitFramebuffer(Ve,We,ve,Ee,tt,rt,ve,Ee,R.COLOR_BUFFER_BIT,R.NEAREST):on?R.copyTexSubImage3D(Ut,ce,tt,rt,St+$t,Ve,We,ve,Ee):R.copyTexSubImage2D(Ut,ce,tt,rt,Ve,We,ve,Ee);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Ut,ce,tt,rt,St,ve,Ee,Re,nt,Ue,yt.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Ut,ce,tt,rt,St,ve,Ee,Re,nt,yt.data):R.texSubImage3D(Ut,ce,tt,rt,St,ve,Ee,Re,nt,Ue,yt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ce,tt,rt,ve,Ee,nt,Ue,yt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ce,tt,rt,yt.width,yt.height,nt,yt.data):R.texSubImage2D(R.TEXTURE_2D,ce,tt,rt,ve,Ee,nt,Ue,yt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,mn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ci),R.pixelStorei(R.UNPACK_SKIP_ROWS,tn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ps),ce===0&&F.generateMipmaps&&R.generateMipmap(Ut),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,F,H=null,G=null,O=0){return M.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,M=arguments[2],F=arguments[3],O=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,H,G,O)},this.initRenderTarget=function(M){ne.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){P=0,A=0,I=null,Me.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const dt={MOTHERBOARD:"Motherboard",CPU:"CPU",COOLER:"CPU Cooler",RAM:"RAM",GPU:"GPU",STORAGE:"Storage",PSU:"Power Supply"},tv={motherboard:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},Dt=r=>tv[r],nv=[{id:"mb_msi_b550_tomahawk",name:"MSI MAG B550 Tomahawk",category:dt.MOTHERBOARD,categoryKey:"motherboard",tag:"Motherboard",modelPath:"/models/Motherboard_model/motherboard_am4.glb",brand:"MSI",price:"3,290,000 đ",realSize:.305,footprint:{length:.305,depth:.252},iconSvg:Dt("motherboard"),specs:[{label:"Socket",value:"AM4 (AMD Ryzen 1000-5000)"},{label:"Chipset",value:"AMD B550"},{label:"Kích thước Form Factor",value:"ATX (30.5 cm x 24.4 cm)"},{label:"Khe RAM",value:"4x DDR4 DIMM (Tối đa 128GB, 4400MHz OC)"},{label:"Khe PCIe",value:"2x PCIe 4.0 x16, 1x PCIe 3.0 x16"},{label:"Cổng M.2 & SATA",value:"2x M.2 NVMe/SATA, 6x SATA III"},{label:"Kết nối mạng",value:"Realtek 2.5G LAN"}],description:"Bo mạch AM4 phổ thông cho dòng Ryzen, nền tảng dễ nâng cấp lên thế hệ Zen 3.",beginnerTip:"💡 Board AM4 chỉ nhận CPU kiểu AM4. Kiểm tra khe RAM DDR4 (không phải DDR5) trước khi mua CPU."},{id:"cpu_intel_i5_10400",name:"Intel Core i5-10400",category:dt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/intel_cpu (1).glb",brand:"Intel",price:"2,790,000 đ",realSize:.0375,footprint:{length:.0375,depth:.0375},iconSvg:Dt("cpu"),specs:[{label:"Socket",value:"LGA 1200"},{label:"Kiến trúc",value:"Comet Lake 6 nhân 12 luồng"},{label:"Xung nhịp",value:"2.9 GHz tăng tốc 4.7 GHz"},{label:"Bộ nhớ đệm",value:"12 MB Smart Cache"},{label:"TDP",value:"65W"}],description:"CPU 6 nhân giá rẻ, đủ sức cho game eSports và văn phòng nặng.",beginnerTip:"💡 Nắp lưng phẳng là mặt tiếp keo tản nhiệt. Đừng chạm tay vào các chân nhỏ bên dưới."},{id:"cpu_intel_i7_11700",name:"Intel Core i7-11700",category:dt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/free_intel_cpu.glb",brand:"Intel",price:"7,490,000 đ",realSize:.0375,footprint:{length:.0375,depth:.0375},iconSvg:Dt("cpu"),specs:[{label:"Socket",value:"LGA 1200"},{label:"Kiến trúc",value:"Rocket Lake 8 nhân 16 luồng"},{label:"Xung nhịp",value:"2.5 GHz tăng tốc 4.9 GHz"},{label:"Bộ nhớ đệm",value:"16 MB Smart Cache"},{label:"TDP",value:"65W"}],description:"8 nhân cho dựng hình, render và chơi game 1440p cùng lúc.",beginnerTip:"💡 CPU không có chân cắm, nó dùng hàng chân phẳng. Cắm đúng chiều là nhìn dấu tam giác ở một góc."},{id:"cpu_ryzen_9_9920g",name:"AMD Ryzen 9 9950X3D (AM5)",category:dt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/free__cpu_3d_model_hyper_9_9920g.glb",brand:"AMD",price:"18,900,000 đ",realSize:.04,footprint:{length:.04,depth:.04},iconSvg:Dt("cpu"),specs:[{label:"Socket",value:"AM5 (LGA 1718)"},{label:"Kiến trúc",value:"Zen 5 16 nhân 32 luồng"},{label:"Xung nhịp",value:"Tăng tốc 5.7 GHz"},{label:"Bộ nhớ đệm",value:"144 MB 3D V-Cache"},{label:"TDP",value:"170W"}],description:"CPU cao cấp gắn cache 3D, mạnh nhất cho game nhờ ưu tiên cache L3.",beginnerTip:"💡 TDP cao nghĩa là tản khí phải to và cần cả tản khí CPU + ốc + sơn hợp lý. Sức nóng không tự truyền ra vỏ ốc."},{id:"cpu_ryzen_3_3200g",name:"AMD Ryzen 3 3200G",category:dt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/am4_cpu__free.glb",brand:"AMD",price:"1,150,000 đ",realSize:.04,footprint:{length:.04,depth:.04},iconSvg:Dt("cpu"),specs:[{label:"Socket",value:"AM4"},{label:"Kiến trúc",value:"Zen+ 2 nhân 4 luồng, tích hợp Vega 8"},{label:"Xung nhịp",value:"3.6 GHz tăng tốc 4.0 GHz"},{label:"Đồ họa tích hợp",value:"Vega 8 (không cần card rời)"},{label:"TDP",value:"65W"}],description:"CPU có VGA on-board, chạy được game nhẹ mà không cần cắm card đồ họa rời.",beginnerTip:"💡 Có đồ họa tích hợp nên máy vẫn hiện hình qua cổng của bo mạch chủ ngay cả khi chưa có card rời."},{id:"cooler_noctua_nh_c12",name:"Noctua NH-C12 Low Profile",category:dt.COOLER,categoryKey:"cooler",tag:"CPU Cooler",modelPath:"/models/CPU_Cooler_model/cpu_cooler.glb",brand:"Noctua",price:"2,650,000 đ",realSize:.124,footprint:{length:.124,depth:.124},iconSvg:Dt("cooler"),specs:[{label:"Loại tản",value:"Tháp tản nhiệt thấp (down-draft)"},{label:"Chiều cao",value:"66 mm - vừa thùng mini"},{label:"Quạt",value:"2x 92mm Noctua NF-A12x15"},{label:"Tương thích",value:"Intel LGA1700/1200, AMD AM4/AM5"}],description:"Tản thấp cho thùng mini, quạt hướng xuống giúp luồng khí qua bo mạch.",beginnerTip:"💡 Tản thấp lùi được cả tản case trên cao, đổi lại hiệu năng mát kém hơn tản tháp cao."},{id:"cooler_deepcool_ak400",name:"DeepCool AK400",category:dt.COOLER,categoryKey:"cooler",tag:"CPU Cooler",modelPath:"/models/CPU_Cooler_model/cpu_cooler (1).glb",brand:"DeepCool",price:"790,000 đ",realSize:.155,footprint:{length:.155,depth:.11},iconSvg:Dt("cooler"),specs:[{label:"Loại tản",value:"Tản khí 1 ống đồng"},{label:"Chiều cao",value:"155 mm"},{label:"Quạt",value:"1x 120mm (tối đa 2200 RPM)"},{label:"Tương thích",value:"Intel LGA1700/1200, AMD AM4/AM5"}],description:"Tản khí phổ thông, đủ mát cho CPU TDP 180W với giá rẻ.",beginnerTip:"💡 4 ốc siết theo hình chữ X giúp áp lực đều, tránh làm lệch tản khỏi nắp lưng CPU."},{id:"ram_kingston_fury_black",name:"Kingston FURY Beast DDR4 16GB",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/kingston_hyperx_fury_black_ram_module.glb",brand:"Kingston",price:"890,000 đ",realSize:.1334,footprint:{length:.1334,depth:.045},iconSvg:Dt("ram"),specs:[{label:"Dung lượng",value:"16GB (1 thanh 2x8GB)"},{label:"Loại",value:"DDR4 DIMM không ECC"},{label:"Bus",value:"3200 MHz (PC4-25600)"},{label:"Điện áp",value:"1.35V"}],description:"DIMM DDR4 đen không đèn, tiêu tốn điện thấp và tương thích rộng.",beginnerTip:"💡 Khoảnh khắc mở giữa hai cắt khía trên module là vị trí chống lắp ngược - luôn cắm cho khớp lẹm."},{id:"ram_kingston_fury_black_b",name:"Kingston FURY Beast DDR4 16GB - Kit B",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/kingston_hyperx_fury_black_ram_module.glb",brand:"Kingston",price:"890,000 đ",realSize:.1334,footprint:{length:.1334,depth:.045},iconSvg:Dt("ram"),specs:[{label:"Dung lượng",value:"16GB (1 thanh 2x8GB)"},{label:"Loại",value:"DDR4 DIMM không ECC"},{label:"Bus",value:"3200 MHz (PC4-25600)"}],description:"Thanh thứ hai của bộ Kingston FURY Beast, để ghép thành cặp kênh đôi.",beginnerTip:"💡 Cắm vào khe A2 và B2 để chạy dual channel."},{id:"ram_crucial_8gb",name:"Crucial 8GB DDR4 2133",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/crucial_8_gb_ddr4_2133_ram.glb",brand:"Crucial",price:"520,000 đ",realSize:.1334,footprint:{length:.1334,depth:.032},iconSvg:Dt("ram"),specs:[{label:"Dung lượng",value:"8GB (1 thanh 1x8GB)"},{label:"Loại",value:"DDR4 DIMM không ECC"},{label:"Bus",value:"2133 MHz (JEDEC chuẩn)"}],description:"Thanh RAM DDR4 tiêu chuẩn, chạy bus mặc định an toàn cho mainboard phổ thông.",beginnerTip:"💡 Bus cao hơn bo mạch không chạy được - CPU và bo phải hỗ trợ bus đó thì mới tự ép xung lên."},{id:"ram_crucial_8gb_b",name:"Crucial 8GB DDR4 2133 - Kit B",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/crucial_8_gb_ddr4_2133_ram.glb",brand:"Crucial",price:"520,000 đ",realSize:.1334,footprint:{length:.1334,depth:.032},iconSvg:Dt("ram"),specs:[{label:"Dung lượng",value:"8GB (1 thanh 1x8GB)"},{label:"Loại",value:"DDR4 DIMM không ECC"},{label:"Bus",value:"2133 MHz (JEDEC chuẩn)"}],description:"Thanh Crucial thứ hai, cùng bus để ghép cặp kênh đôi ở khe A2 và B2.",beginnerTip:"💡 Hai thanh cùng bus và cùng timing sẽ chạy ổn định nhất."},{id:"ram_generic_ddr4",name:"Generic DDR4 8GB",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/random_access_memory_ram_ddr4.glb",brand:"Generic",price:"430,000 đ",realSize:.1334,footprint:{length:.1334,depth:.032},iconSvg:Dt("ram"),specs:[{label:"Dung lượng",value:"8GB"},{label:"Loại",value:"DDR4"},{label:"Bus",value:"2666 MHz"}],description:"Module DDR4 dùng để so sánh hình dáng đầu nối và vị trí khe cắm.",beginnerTip:"💡 Khe cắm của DDR4 rộng và có nẹp khóa hai bên. Cắm lệch một răng là mainboard không nhận."},{id:"ram_generic_ddr4_b",name:"Generic DDR4 8GB - Kit B",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/random_access_memory_ram_ddr4.glb",brand:"Generic",price:"430,000 đ",realSize:.1334,footprint:{length:.1334,depth:.032},iconSvg:Dt("ram"),specs:[{label:"Dung lượng",value:"8GB"},{label:"Loại",value:"DDR4"},{label:"Bus",value:"2666 MHz"}],description:"Module DDR4 thứ hai cùng loại, để ghép cặp kênh đôi.",beginnerTip:"💡 Cắm cả hai thanh vào khe A2 và B2 để bật kênh đôi."},{id:"ssd_sandisk_870",name:"SanDisk SSD 870 EVO 1TB",category:dt.STORAGE,categoryKey:"storage",tag:"Storage",modelPath:"/models/SSD_model/ssd_solid_state_drive.glb",brand:"SanDisk",price:"2,450,000 đ",realSize:.1,footprint:{length:.1,depth:.07},iconSvg:Dt("ssd"),specs:[{label:"Dung lượng",value:"1 TB"},{label:"Giao diện",value:"SATA III 6 Gb/s"},{label:"Tốc độ đọc",value:"560 MB/s"},{label:"Dạng",value:"2.5 inch, 7mm"}],description:'Ổ SATA 2.5" kinh điển, cắm cùng cổng với ổ cơ nên không cần cáp riêng.',beginnerTip:'💡 Ổ 2.5" không có chốt chống rung như ổ 3.5", nên chỉ cần cáp SATA dữ liệu và cáp nguồn nhỏ.'},{id:"ssd_kingston_a400",name:"Kingston A400 480GB",category:dt.STORAGE,categoryKey:"storage",tag:"Storage",modelPath:"/models/SSD_model/ssd_solid-state_drive.glb",brand:"Kingston",price:"890,000 đ",realSize:.1,footprint:{length:.1,depth:.07},iconSvg:Dt("ssd"),specs:[{label:"Dung lượng",value:"480 GB"},{label:"Giao diện",value:"SATA III 6 Gb/s"},{label:"Tốc độ đọc",value:"500 MB/s"},{label:"Dạng",value:"2.5 inch"}],description:"Ổ SSD giá rẻ nhất trong bộ sưu tập, đủ dùng cho ổ hệ thống và tài liệu.",beginnerTip:"💡 Ổ rẻ thường chậm hơn khi ghi nhiều, nhưng vẫn nhanh hơn hàng trăm lần so với ổ cơ HDD."},{id:"psu_corsair_rm550",name:"Corsair RM550 550W 80 Plus Gold",category:dt.PSU,categoryKey:"psu",tag:"Power Supply",modelPath:"/models/PSU_model/psu.glb",brand:"Corsair",price:"2,190,000 đ",realSize:.15,footprint:{length:.15,depth:.15},iconSvg:Dt("psu"),specs:[{label:"Công suất",value:"550 Watts"},{label:"Chứng nhận",value:"80 PLUS Gold (> 90%)"},{label:"Dạng cáp",value:"Fully Modular"},{label:"Quạt",value:"135mm Zero RPM"}],description:"Nguồn vàng full-modular, chỉ cắm đúng những cáp cần dùng nên thùng gọn sạch.",beginnerTip:"💡 Nguồn full-modular có đầu cắm riêng cho từng dây. Bỏ sót cáp 8-pin CPU là máy không lên nguồn."},{id:"psu_aerocool_kcas500",name:"Aerocool KCAS 500W 80 Plus Bronze",category:dt.PSU,categoryKey:"psu",tag:"Power Supply",modelPath:"/models/PSU_model/power_supply_aerocool_kcas_500w_atx.glb",brand:"Aerocool",price:"990,000 đ",realSize:.15,footprint:{length:.15,depth:.15},iconSvg:Dt("psu"),specs:[{label:"Công suất",value:"500 Watts"},{label:"Chứng nhận",value:"80 PLUS Bronze"},{label:"Dạng cáp",value:"Non-Modular"},{label:"Đầu cấp nguồn",value:"1x 24-Pin ATX, 1x 8-Pin CPU, 1x 8-Pin PCIe"}],description:"Nguồn ATX tiêu chuẩn, cáp gộp liền, dễ dùng cho dàn máy tầm trung.",beginnerTip:"💡 Tổng công suất nguồn nên gấp khoảng 1.5 lần tổng TDP của CPU và GPU để dự phòng đỉnh điện."},{id:"gpu_gold_edition",name:"Generic Gold Edition Graphics Card",category:dt.GPU,categoryKey:"gpu",tag:"GPU",modelPath:"/models/GPU_model/gold_graphics_card.glb",brand:"Generic",price:"5,490,000 đ",realSize:.28,footprint:{length:.28,depth:.13},iconSvg:Dt("gpu"),specs:[{label:"Dung lượng VRAM",value:"8GB"},{label:"Giao diện",value:"PCIe 3.0 x16"},{label:"Chiều dài",value:"280 mm"},{label:"Cổng xuất hình",value:"1x HDMI, 2x DisplayPort"}],description:"Card đồ họa bản mạ vàng dùng để so sánh kích thước với card đồ họa cao cấp.",beginnerTip:"💡 Card dài hơn 28 cm thường không vừa khe PCIe của thùng mini. Đo trước khoảng trống từ khay ổ cứng."}],iv=[{id:"cpu_ryzen_3600",name:"AMD Ryzen 5 3600 Processor",category:dt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/cpu_ryzen_5_3600.glb",brand:"AMD",price:"3,290,000 đ",realSize:.04,footprint:{length:.04,depth:.04},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="44" height="44" rx="4" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
      <rect x="18" y="18" width="28" height="28" rx="3" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="23" cy="23" r="2" fill="#fbbf24"/>
      <text x="32" y="35" font-size="7" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">RYZEN</text>
      <path d="M10 16h-4M10 24h-4M10 32h-4M10 40h-4M10 48h-4" stroke="#fbbf24" stroke-width="2"/>
      <path d="M54 16h4M54 24h4M54 32h4M54 40h4M54 48h4" stroke="#fbbf24" stroke-width="2"/>
    </svg>`,specs:[{label:"Số nhân / Số luồng",value:"6 Nhân / 12 Luồng (Zen 2)"},{label:"Xung nhịp cơ bản",value:"3.6 GHz (Tăng tốc tối đa 4.2 GHz)"},{label:"Tiến trình chế tạo",value:"TSMC 7nm FinFET"},{label:"Bộ nhớ đệm L3",value:"32MB GameCache"},{label:"Điện năng tiêu thụ (TDP)",value:"65 Watts"},{label:"Chuẩn Socket",value:"AMD Socket AM4"},{label:"Phiên bản PCIe",value:"PCIe 4.0 x16 Ready"},{label:"Hỗ trợ RAM",value:"DDR4 Dual-Channel lên tới 3200MHz"}],description:"Bộ vi xử lý quốc dân với hiệu năng đa nhân vượt trội, cân bằng hoàn hảo giữa chơi game eSports và làm việc đồ họa mượt mà.",beginnerTip:"💡 Khi lắp CPU, hãy tìm biểu tượng tam giác vàng ở góc con chip và căn trùng khớp với dấu tam giác trên socket. Nhẹ nhàng đặt xuống, tuyệt đối không dùng lực đè mạnh!"},{id:"cpu_intel",name:"Intel Core i7-9700K Processor",category:dt.CPU,categoryKey:"cpu",tag:"CPU",modelPath:"/models/CPU_model/intel_cpu.glb",brand:"Intel",price:"4,190,000 đ",realSize:.0375,footprint:{length:.0375,depth:.0375},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="44" height="44" rx="4" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
      <rect x="18" y="18" width="28" height="28" rx="3" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <text x="32" y="35" font-size="7" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">INTEL</text>
    </svg>`,specs:[{label:"Cores/Threads",value:"8 Cores / 8 Threads"},{label:"Socket",value:"LGA 1151"}],description:"Bộ vi xử lý hiệu năng cao từ Intel.",beginnerTip:"💡 Đặt cẩn thận vào socket."},{id:"cooler_master_212",name:"Cooler Master Hyper Black Edition",category:dt.COOLER,categoryKey:"cooler",tag:"CPU Cooler",modelPath:"/models/CPU_Cooler_model/cooler_master_cpu_cooler.glb",brand:"Cooler Master",price:"890,000 đ",realSize:.154,footprint:{length:.154,depth:.12},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="10" width="36" height="38" rx="4" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
      <circle cx="32" cy="29" r="13" stroke="#c084fc" stroke-width="2"/>
      <circle cx="32" cy="29" r="3.5" fill="#fbbf24"/>
      <path d="M32 16v8M32 34v8M19 29h8M37 29h8" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 48v8M28 48v8M36 48v8M44 48v8" stroke="#f97316" stroke-width="2.5"/>
    </svg>`,specs:[{label:"Dạng tản nhiệt",value:"Tháp tản nhiệt khí (Single Tower Heatsink)"},{label:"Ống dẫn nhiệt (Heatpipes)",value:"4 ống đồng Direct Contact 6mm mạ niken"},{label:"Kích thước quạt",value:"120 x 120 x 25 mm Silencio FP"},{label:"Tốc độ quay quạt",value:"650 - 2,000 RPM (PWM) ± 10%"},{label:"Lưu lượng gió tối đa",value:"59 CFM, Áp suất khí 2.1 mmH2O"},{label:"Độ ồn hoạt động",value:"8 - 30 dBA (Vận hành cực êm)"},{label:"Socket tương thích",value:"Intel LGA 1700/1200/115x & AMD AM4/AM5"}],description:"Giải pháp làm mát khí kinh điển với các lá tản nhiệt nhôm mạ niken tối ưu khí động học và cụm tiếp xúc 4 ống đồng nguyên chất.",beginnerTip:"💡 Đừng quên bôi một lượng keo tản nhiệt (cỡ hạt đậu) lên giữa nắp lưng CPU trước khi siết ốc tản nhiệt để truyền nhiệt tốt nhất!"},{id:"ram_gskill_tridentz_16gb",name:"G.SKILL Trident Z RGB 16GB (2x8GB) DDR4",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb",brand:"G.SKILL",price:"1,750,000 đ",realSize:.1334,footprint:{length:.1334,depth:.051},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`,specs:[{label:"Dung lượng bộ nhớ",value:"16GB (Kit 2 thanh x 8GB)"},{label:"Chuẩn RAM",value:"DDR4 Unbuffered DIMM"},{label:"Tốc độ Bus RAM",value:"3200 MHz (PC4-25600)"},{label:"Độ trễ Timing (CAS)",value:"CL16-18-18-38"},{label:"Điện áp danh định",value:"1.35V"},{label:"Cấu hình ép xung",value:"Intel XMP 2.0 (Extreme Memory Profile)"},{label:"Hiệu ứng ánh sáng",value:"LED RGB Dynamic Flow 5 vùng sáng"},{label:"Chất liệu tản nhiệt",value:"Hợp kim nhôm xước hairline cao cấp"}],description:"Thanh RAM cao cấp hàng đầu thế giới với dải LED RGB cầu vồng sống động cùng IC được tuyển chọn kỹ lưỡng cho khả năng ép xung tối đa.",beginnerTip:"💡 Khi cắm 2 thanh RAM trên bo mạch chủ có 4 khe, hãy cắm vào khe 2 và khe 4 (khe DIMM A2 & B2) để kích hoạt chế độ Kênh Đôi (Dual-Channel) giúp tăng gấp đôi băng thông nhớ!"},{id:"ram_gskill_tridentz_16gb_b",name:"G.SKILL Trident Z RGB 16GB (2x8GB) DDR4 - Kit B",category:dt.RAM,categoryKey:"ram",tag:"RAM",modelPath:"/models/RAM_model/ram_ddr4_g.skill_trident_z_rgb.glb",brand:"G.SKILL",price:"1,750,000 đ",realSize:.1334,footprint:{length:.1334,depth:.051},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="18" width="48" height="28" rx="3" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
      <rect x="10" y="20" width="44" height="6" rx="2" fill="#38bdf8"/>
      <rect x="14" y="30" width="8" height="10" fill="#334155"/>
      <rect x="26" y="30" width="8" height="10" fill="#334155"/>
      <rect x="38" y="30" width="8" height="10" fill="#334155"/>
      <path d="M12 46v4M16 46v4M20 46v4M24 46v4M36 46v4M40 46v4M44 46v4M48 46v4" stroke="#fbbf24" stroke-width="1.5"/>
    </svg>`,specs:[{label:"Dung lượng bộ nhớ",value:"16GB (Kit 2 thanh x 8GB)"},{label:"Chuẩn RAM",value:"DDR4 Unbuffered DIMM"},{label:"Tốc độ Bus RAM",value:"3200 MHz (PC4-25600)"},{label:"Độ trễ Timing (CAS)",value:"CL16-18-18-38"},{label:"Hiệu ứng ánh sáng",value:"LED RGB Dynamic Flow 5 vùng sáng"}],description:"Kit RAM DDR4 thứ hai cùng series để ghép thành cặp kênh đôi hoàn chỉnh trong cùng một bộ máy.",beginnerTip:"💡 Nên dùng hai thanh cùng brand, cùng bus, cùng timing để kênh đôi chạy ổn định nhất."},{id:"ssd_samsung_860",name:'Samsung 860 EVO 500GB 2.5" SATA III',category:dt.STORAGE,categoryKey:"storage",tag:"Storage",modelPath:"/models/SSD_model/samsung_ssd_2.5in_-_dirty.glb",brand:"Samsung",price:"1,450,000 đ",realSize:.1,footprint:{length:.1,depth:.07},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="10" width="40" height="44" rx="4" fill="#1e293b" stroke="#0ea5e9" stroke-width="2"/>
      <rect x="26" y="24" width="12" height="12" fill="#f97316"/>
      <text x="32" y="44" font-size="6" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">SAMSUNG</text>
      <rect x="20" y="10" width="24" height="3" fill="#fbbf24"/>
    </svg>`,specs:[{label:"Dung lượng lưu trữ",value:"500 GB"},{label:"Kích thước Form Factor",value:"2.5 inch (Độ dày 6.8 mm)"},{label:"Giao tiếp kết nối",value:"SATA III 6Gb/s"},{label:"Tốc độ đọc tuần tự",value:"Lên tới 550 MB/s"},{label:"Tốc độ ghi tuần tự",value:"Lên tới 520 MB/s"},{label:"Công nghệ NAND Flash",value:"Samsung V-NAND 3-bit MLC (3D TLC)"},{label:"Bộ điều khiển Controller",value:"Samsung MJX Controller"},{label:"Độ bền ghi (TBW)",value:"300 TBW (Bảo hành 5 năm)"}],description:"Ổ cứng SSD thể rắn huyền thoại từ Samsung đem lại độ bền bỉ phi thường, khởi động hệ điều hành và tải ứng dụng chỉ trong chớp mắt.",beginnerTip:"💡 Ổ cứng SSD không có bộ phận chuyển động cơ học nên chống sốc cực tốt và hoàn toàn im lặng. Kết nối cáp dữ liệu SATA từ ổ cứng vào bo mạch chủ và cáp nguồn từ PSU!"},{id:"gpu_rtx_3090",name:"NVIDIA GeForce RTX 3090 Founders Edition",category:dt.GPU,categoryKey:"gpu",tag:"GPU",modelPath:"/models/GPU_model/nvidia_geforce_rtx_3090_-_gpu.glb",brand:"NVIDIA",price:"34,900,000 đ",realSize:.313,footprint:{length:.313,depth:.15},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="32" rx="4" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
      <circle cx="22" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="22" cy="32" r="3" fill="#22c55e"/>
      <circle cx="44" cy="32" r="10" stroke="#4ade80" stroke-width="2"/>
      <circle cx="44" cy="32" r="3" fill="#22c55e"/>
      <rect x="14" y="48" width="24" height="4" fill="#fbbf24"/>
      <rect x="4" y="12" width="3" height="40" fill="#94a3b8"/>
    </svg>`,specs:[{label:"Nhân đồ họa CUDA",value:"10,496 CUDA Cores"},{label:"Bộ nhớ VRAM",value:"24 GB GDDR6X (Băng thông 936 GB/s)"},{label:"Độ rộng băng thông bus",value:"384-bit"},{label:"Xung nhịp Boost Clock",value:"1.70 GHz"},{label:"Công nghệ AI & Ray Tracing",value:"RT Cores Gen 2 & Tensor Cores Gen 3 (DLSS)"},{label:"Công suất tiêu thụ TDP",value:"350 Watts"},{label:"Nguồn phụ yêu cầu",value:"2x 8-Pin PCIe (Khuyến nghị nguồn > 750W)"},{label:"Cổng xuất hình",value:"1x HDMI 2.1, 3x DisplayPort 1.4a"}],description:"Quái thú đồ họa (BFGPU) đỉnh cao nhất thế giới cho phép trải nghiệm game mượt mà ở độ phân giải 8K HDR và dựng hình 3D, Render video chuyên nghiệp.",beginnerTip:"💡 Card đồ họa rất nặng và tiêu thụ nhiều điện. Hãy lắp vào khe PCIe x16 trên cùng gần CPU nhất để đạt tốc độ tối đa, siết chặt ốc giữ ở thành case và cắm đủ nguồn 8-Pin PCIe!"},{id:"gpu_rx_480",name:"AMD Radeon RX 480 8GB GDDR5",category:dt.GPU,categoryKey:"gpu",tag:"GPU",modelPath:"/models/GPU_model/rx_480_gpu.glb",brand:"AMD",price:"2,990,000 đ",realSize:.24,footprint:{length:.24,depth:.135},iconSvg:`<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="16" width="52" height="32" rx="4" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
    </svg>`,specs:[{label:"VRAM",value:"8GB GDDR5"},{label:"Bus",value:"256-bit"}],description:"Card đồ họa tầm trung bền bỉ.",beginnerTip:"💡 Lắp vào khe PCIe x16."}],Wr=[...iv,...nv],Mt={x:3.3,z:0,minWidth:.72,minLength:2.1,maxWidth:1.3,height:.86,topHeight:.82,topThickness:.045,legSize:.07,shelfHeight:.3,shelfThickness:.03,tierHeights:[.82],tierSurfaces:[.82],edgeMargin:.14,sideMargin:.12,maxGap:.05,rowGap:.05};function sv(r){const e=Mt.maxWidth-Mt.sideMargin*2,t=r+Mt.rowGap;return Math.max(1,Math.min(3,Math.floor((e+Mt.rowGap)/t)))}function rv(r,e,t,n){const i=Array.from({length:t},()=>[]);[...r].sort((c,l)=>l.footprint.length-c.footprint.length).forEach(c=>{let l=0;for(let h=1;h<t;h++)i[h].reduce((u,d)=>u+d.footprint.length,0)<i[l].reduce((u,d)=>u+d.footprint.length,0)&&(l=h);i[l].push(c)});const o=e+Mt.rowGap,a=n-Mt.edgeMargin*2;return i.forEach((c,l)=>{const h=Mt.x+(l-(t-1)/2)*o;c.sort((_,m)=>m.footprint.length-_.footprint.length);const u=c.reduce((_,m)=>_+m.footprint.length,0),d=c.length>1?Math.min(Mt.maxGap,Math.max(0,(a-u)/(c.length-1))):0,f=u+d*(c.length-1);let g=-f/2;c.forEach(_=>{_.position={x:h,y:Mt.tierSurfaces[0],z:Mt.z+g+_.footprint.length/2},_.row=l,g+=_.footprint.length+d}),c.totalLength=f}),i}function ov(){const r=Wr.filter(l=>l.footprint).map(l=>({item:l,footprint:l.footprint})),e=r.reduce((l,h)=>Math.max(l,h.footprint.depth),0),t=sv(e),i=r.reduce((l,h)=>l+h.footprint.length,0)/t,s=Mt.maxGap*(r.length/t-1),o=Math.max(Mt.minLength,i+s+Mt.edgeMargin*2),a=Math.max(Mt.minWidth,t*(e+Mt.rowGap)-Mt.rowGap+Mt.sideMargin*2),c=rv(r,e,t,o);return{table:{...Mt,width:a,length:o,rows:t,rowPitch:e+Mt.rowGap,maxPartDepth:e},tiers:[{index:0,height:Mt.tierHeights[0],surface:Mt.tierSurfaces[0],rows:c,entries:r}]}}let ko=null;function Xr(){return ko||(ko=ov()),ko}function av(){const{table:r}=Xr(),e=.15;return{minX:r.x-r.width/2-e,maxX:r.x+r.width/2+e,minZ:r.z-r.length/2-e,maxZ:r.z+r.length/2+e}}const qt={motherboard:{length:.305,width:.244,height:.045,mount:{length:[0,1,0],width:[0,0,1],height:[1,0,0]}},cpu:{length:.04,width:.04,height:.005,mount:{length:[0,0,1],width:[0,1,0],height:[1,0,0]}},cooler:{length:.155,width:.12,height:.11,mount:{length:[0,1,0],width:[0,0,1],height:[1,0,0]}},ram:{length:.1334,width:.045,height:.007,mount:{length:[0,0,1],width:[0,1,0],height:[1,0,0]}},storage:{length:.1,width:.07,height:.007,mount:{length:[0,0,1],width:[1,0,0],height:[0,1,0]}},psu:{length:.15,width:.15,height:.086,mount:{length:[0,0,1],width:[1,0,0],height:[0,1,0]}},gpu:{length:.313,width:.13,height:.052,mount:{length:[0,0,1],width:[0,1,0],height:[1,0,0]}}},cv={gpu_rx_480:{length:.24,width:.115,height:.03},gpu_gold_edition:{length:.28,width:.12,height:.04},cooler_noctua_nh_c12:{length:.124,width:.12,height:.065},ram_crucial_8gb:{width:.031},ram_generic_ddr4:{width:.031},ram_kingston_fury_black:{width:.034}};function ou(r){const e=qt[r.categoryKey];if(!e)return null;const t=cv[r.id];if(!t)return{...e};const n={...e,...t};return n.mount=e.mount,n}const ii={width:.21,height:.46,depth:.45,feet:.018,sheet:.009,glass:.004},{width:Et,height:Tt,depth:hn,feet:zs,sheet:wt,glass:Fr}=ii,Yt={yFloor:zs+wt,yTop:zs+Tt,zRear:-hn/2,zFront:hn/2,xGlassOuter:Et/2,xGlassInner:Et/2-Fr,xPlainInner:-Et/2+wt},Hs=Yt.zRear+.03,xc=.244,yc=.305,cs=Yt.yTop-.05,wi={z0:Hs,z1:Hs+xc,top:cs,bottom:cs-yc,get centreY(){return(this.top+this.bottom)/2},get centreZ(){return(this.z0+this.z1)/2}},je={x:-.075,thickness:.008,get face(){return this.x+this.thickness/2},get back(){return this.x-this.thickness/2},z0:wi.z0-.007,z1:wi.z1+.012,y0:.122,y1:Yt.yTop-.012,rearTop:.36,rearTopStrip:.46,cutSize:.078,cutY:cs-.05,cutZ:Hs+.115,get cutY0(){return this.cutY-this.cutSize/2},get cutY1(){return this.cutY+this.cutSize/2},get cutZ0(){return this.cutZ-this.cutSize/2},get cutZ1(){return this.cutZ+this.cutSize/2}},lv=qt.motherboard.height,hv=je.face+lv/2,qr=(cs+(cs-yc))/2,ka=Hs+xc/2,au=qt.cpu.height,Ql=qt.ram.height,eh=qt.ram.length,uv=qt.gpu.height,dv=.0015,fv=.0081,pv=.0155,mv=.0145,gv=-.0485,_v=-.0217,vv=-.0497;je.face+dv;const Xi={x:je.face+fv+au/2,y:qr-gv,z:ka+_v},th=.0095,Gs=qr-vv,za=je.face+pv+qt.ram.width/2,Ha=wi.z1-.067,Ga={a2:[za,Gs,Ha+th],b2:[za,Gs,Ha+th*3]},vi={y0:Gs-eh/2,y1:Gs+eh/2,z0:Ha-Ql/2,z1:Ga.b2[2]+Ql/2},Hn={top:.122,x0:Yt.xPlainInner,x1:.048,z0:Yt.zRear+.006,z1:.14,get depth(){return this.z1-this.z0},get width(){return this.x1-this.x0},get midZ(){return(this.z0+this.z1)/2},get midX(){return(this.x0+this.x1)/2}},pt={plane:Yt.zRear+wt/2,centreY:zs+Tt/2,halfW:(Et-.004)/2,halfH:(Tt-.008)/2,fan:{x:-.012,y:.409,r:.057},io:{y:.326},slots:{x:-.012,top:.2865,pitch:.0203,span:.145},psu:{x:-.024,w:.14,h:.086,y:Yt.yFloor+.043}};pt.slots.y=pt.slots.top-pt.slots.span/2;pt.toLocalY=r=>r-pt.centreY;const yn={fan:{x:0,z:.045,r:.07},io:{x:-.02,z:Yt.zFront-.05}};function cu(){return[[je.y0,je.rearTop,je.z0,je.cutZ0],[je.rearTopStrip,je.y1,je.z0,je.cutZ0],[je.y0,je.cutY0,je.cutZ0,je.cutZ1],[je.cutY1,je.y1,je.cutZ0,je.cutZ1],[je.y0,je.y1,je.cutZ1,je.z1]]}function xv(r,e){return cu().some(([t,n,i,s])=>r>=t&&r<=n&&e>=i&&e<=s)}const lu=[[.011,.006],[.011,.075],[.011,.144],[.101,.006],[.101,.144],[.191,.006],[.191,.075],[.191,.144],[.101,.222]].map(([r,e])=>({y:cs-e,z:Hs+r})),nh=lu.filter(r=>xv(r.y,r.z)),rn={glass:{label:"Nắp kính cường lực",anchor:[Yt.xGlassOuter,zs+Tt/2,0],size:[.02,Tt-.012,hn-.012],mount:{long:[0,1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.008,screws:4,screwPts:[[-.17,-.17],[-.17,.17],[.17,-.17],[.17,.17]]},motherboard:{label:"Vị trí bo mạch chủ ATX",anchor:[hv,qr,ka],size:[.006,yc,xc],mount:{long:[0,-1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.014,screws:nh.length,screwPts:nh.map(r=>[r.y-qr,r.z-ka])},cpu:{label:"Socket CPU",anchor:[Xi.x,Xi.y,Xi.z],size:[.01,.042,.042],mount:{long:[0,1,0],thin:[1,0,0]},face:[1,0,0],faceLift:.008,screws:0},cooler:{label:"Tản nhiệt khí trên socket",anchor:[Math.min(Xi.x+au/2+qt.cooler.length/2,Yt.xGlassInner-qt.cooler.length/2-.002),Xi.y,Xi.z],size:[qt.cooler.length,qt.cooler.width,qt.cooler.height],mount:{long:[1,0,0],thin:[0,0,-1]},face:[1,0,0],faceLift:qt.cooler.length+.004,screws:4,screwPts:[[-.02,-.022],[.02,-.022],[.02,.022],[-.02,.022]]},ram:{label:"Khe RAM DDR4 (cắm khe 2 & 4)",anchor:[za,Gs,(vi.z0+vi.z1)/2],slots:[Ga.a2,Ga.b2],size:[qt.ram.width,vi.y1-vi.y0,vi.z1-vi.z0],mount:{long:[0,1,0],thin:[0,0,1]},face:[1,0,0],faceLift:.012,screws:0},ssd:{label:'Khay ổ cứng 2.5" trên tấm che nguồn',anchor:[-.01,Hn.top+.005,.05],size:[.1,.008,.07],mount:{long:[1,0,0],thin:[0,1,0]},face:[0,1,0],faceLift:.01,screws:2,screwPts:[[0,-.03],[0,.03]]},psu:{label:"Hộc nguồn ATX dưới đáy",anchor:[Hn.midX,Yt.yFloor+.043,Hn.z0+.075],size:[Hn.width-.01,.086,.15],mount:{long:[1,0,0],thin:[0,1,0]},face:[1,0,0],faceLift:.085,screws:4,screwPts:[[-.03,-.06],[-.03,.06],[.03,-.06],[.03,.06]]},gpu:{label:"Khe PCIe x16",anchor:[je.face+mv+uv/2,vi.y0-.006-qt.gpu.width/2,wi.z0+.157],size:[.112,.05,.313],mount:{long:[0,0,1],thin:[1,0,0]},face:[0,1,0],faceLift:.032,screws:2,screwPts:[[-.12,-.05],[-.12,.05]]},cables:{label:"Dây nguồn 24-pin & 8-pin CPU",anchor:[je.back-.012,wi.centreY,wi.centreZ],size:[.03,.14,.12],face:[-1,0,0],faceLift:.01,screws:0},display:{label:"Cổng xuất hình DisplayPort",anchor:[-.03,pt.io.y,Yt.zRear+.012],size:[.05,.05,.02],face:[0,0,-1],faceLift:.006,screws:0},power:{label:"Nút nguồn trên nắp trên",anchor:[yn.io.x,Yt.yTop+.004,yn.io.z],size:[.022,.012,.022],face:[0,1,0],faceLift:.004,screws:0}};function ih(r){const e=r.mount;if(!e)return null;const t=e.edges?{x:new w(...e.edges.long).normalize(),y:new w(...e.edges.thin).normalize(),z:new w(...e.edges.width).normalize()}:{x:new w(...e.long).normalize(),y:new w(...e.thin).normalize(),z:new w().crossVectors(new w(...e.long),new w(...e.thin)).normalize()},n=new ke().makeBasis(t.x,t.y,t.z);return Math.abs(n.determinant())<1e-6?null:new fn().setFromRotationMatrix(n)}const sh={min:[-Et/2,0,-hn/2],max:[Et/2,zs+Tt,hn/2]};class yv{constructor(e){this.scene=e,this.group=new $e,this.colliders=[],this.surfaces=[],this.interactables=[],this.monitorTexture=null,this.monitorCanvas=null,this.monitorContext=null,this.monitorScreenMesh=null,this.monitorState="OFF",this.postProgress=0,this.rgbTime=0,this.createRoom(),this.createWorkbench(),this.createPartsTable(),this.createComputerCasePlaceholder(),this.createMonitor(),this.createPeripherals(),this.createDecorations(),this.scene.add(this.group)}createRoom(){const i=document.createElement("canvas");i.width=512,i.height=512;const s=i.getContext("2d");s.fillStyle="#e5e0d8",s.fillRect(0,0,512,512),s.strokeStyle="#d0cac0",s.lineWidth=3;for(let A=0;A<=512;A+=64)s.beginPath(),s.moveTo(0,A),s.lineTo(512,A),s.stroke();for(let A=0;A<512;A+=64){const I=A/64%2===0?0:128;for(let T=I;T<=512;T+=256)s.beginPath(),s.moveTo(T,A),s.lineTo(T,A+64),s.stroke()}const o=new Mi(i);o.wrapS=Jt,o.wrapT=Jt,o.repeat.set(6,5);const a=new Qe({map:o,roughness:.45,metalness:.05}),c=new xe(new Rt(12,10),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,c.userData={isFloor:!0},this.group.add(c),this.surfaces.push(c);const l=new Qe({color:16448250,roughness:.9}),h=new xe(new Rt(12,10),l);h.rotation.x=Math.PI/2,h.position.y=4.2,this.group.add(h);const u=new Qe({color:16053232,roughness:.8}),d=new Qe({color:15263457,roughness:.7}),f=new xe(new Rt(12,4.2),d);f.position.set(0,4.2/2,-10/2),f.receiveShadow=!0,this.group.add(f);const g=new xe(new Rt(12,4.2),u);g.rotation.y=Math.PI,g.position.set(0,4.2/2,10/2),this.group.add(g);const _=new xe(new Rt(10,4.2),u);_.rotation.y=Math.PI/2,_.position.set(-12/2,4.2/2,0),this.group.add(_);const m=new Qe({color:2236962,roughness:.3}),p=new xe(new Ie(.1,2.4,5),m);p.position.set(-12/2+.05,2.2,0),this.group.add(p);const S=new At({color:14545151,transparent:!0,opacity:.85}),x=new xe(new Ie(.05,2.2,4.8),S);x.position.set(-12/2+.05,2.2,0),this.group.add(x);const v=new xe(new Rt(10,4.2),u);v.rotation.y=-Math.PI/2,v.position.set(12/2,4.2/2,0),v.receiveShadow=!0,this.group.add(v);const L=new Qe({color:16777215,roughness:.4}),P=new xe(new Ie(12,.15,.04),L);P.position.set(0,.075,-10/2+.02),this.group.add(P)}createWorkbench(){const s=document.createElement("canvas");s.width=512,s.height=512;const o=s.getContext("2d");o.fillStyle="#6b4724",o.fillRect(0,0,512,512);for(let S=0;S<50;S++){const x=Math.random()*512;o.strokeStyle=Math.random()>.5?"#553617":"#7d542d",o.lineWidth=2+Math.random()*4,o.beginPath(),o.moveTo(0,x),o.bezierCurveTo(150,x+(Math.random()-.5)*20,350,x+(Math.random()-.5)*20,512,x),o.stroke()}const a=new Mi(s);a.wrapS=Jt,a.wrapT=Jt,a.repeat.set(2,1);const c=new Qe({map:a,roughness:.35,metalness:.05}),l=new xe(new Ie(2.6,.06,1.2),c);l.position.set(0,.82-.06/2,0),l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),this.surfaces.push(l);const h=new Qe({color:2040358,roughness:.4,metalness:.8}),u=.82-.06;[[-2.6/2+.1,u/2,-1.2/2+.1],[2.6/2-.1,u/2,-1.2/2+.1],[-2.6/2+.1,u/2,1.2/2-.1],[2.6/2-.1,u/2,1.2/2-.1]].forEach(([S,x,v])=>{const L=new xe(new Ie(.08,u,.08),h);L.position.set(S,x,v),L.castShadow=!0,L.receiveShadow=!0,this.group.add(L)});const f=new xe(new Ie(2.6-.2,.05,.05),h);f.position.set(0,.25,-1.2/2+.1),this.group.add(f),this.colliders.push({minX:-2.6/2-.2,maxX:2.6/2+.2,minZ:-1.2/2-.2,maxZ:1.2/2+.2});const g=new Qe({color:1712432,roughness:.6,metalness:.1}),_=new xe(new Ie(1.4,.005,.8),g);_.position.set(-.25,.82+.003,0),_.receiveShadow=!0,this.group.add(_),this.surfaces.push(_);const m=new At({color:3900150}),p=new xe(new Ie(1.38,.006,.01),m);p.position.set(-.25,.82+.004,-.39),this.group.add(p)}createPartsTable(){const{table:e}=Xr(),t=e.x,n=e.z,i=e.width,s=e.length,o=e.legSize,a=document.createElement("canvas");a.width=256,a.height=256;const c=a.getContext("2d");c.fillStyle="#f4f1ea",c.fillRect(0,0,256,256);for(let A=0;A<70;A++){const I=Math.random()*256;c.strokeStyle=`rgba(190, 182, 168, ${.1+Math.random()*.22})`,c.lineWidth=1+Math.random()*2.5,c.beginPath(),c.moveTo(0,I),c.bezierCurveTo(70,I+(Math.random()-.5)*8,180,I+(Math.random()-.5)*8,256,I),c.stroke()}const l=new Mi(a);l.wrapS=Jt,l.wrapT=Jt,l.repeat.set(2,Math.max(2,Math.round(s*1.4)));const h=new Qe({map:l,color:16777215,roughness:.42,metalness:.03}),u=new Qe({color:15328732,roughness:.55,metalness:.04}),d=new Qe({color:14078406,roughness:.6,metalness:.05}),f=new xe(new Ie(i,e.topThickness,s),h);f.position.set(t,e.topHeight-e.topThickness/2,n),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),this.surfaces.push(f);const g=new xe(new Ie(.02,e.topThickness+.008,s),d);g.position.set(t-i/2-.008,e.topHeight-e.topThickness/2-.002,n),g.castShadow=!0,this.group.add(g),e.tierSurfaces.slice(1).forEach(A=>{const I=new xe(new Ie(i-.06,e.shelfThickness,s-.1),h);I.position.set(t,A-e.shelfThickness/2,n),I.castShadow=!0,I.receiveShadow=!0,this.group.add(I),this.surfaces.push(I)});const _=e.height-e.topThickness,m=new Ie(o,_,o),p=.09;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([A,I])=>{const T=new xe(m,u);T.position.set(t+A*(i/2-p),_/2,n+I*(s/2-p)),T.castShadow=!0,T.receiveShadow=!0,this.group.add(T)}),[-1,1].forEach(A=>{const I=new xe(new Ie(o,_,o),u);I.position.set(t,_/2,n+A*(s/2-p)),I.castShadow=!0,this.group.add(I)});const S=d;[-1,1].forEach(A=>{const I=new xe(new Ie(i-p*2,.07,.025),S);I.position.set(t,e.topHeight-e.topThickness-.05,n+A*(s/2-p)),I.castShadow=!0,this.group.add(I)}),[-1,1].forEach(A=>{const I=new xe(new Ie(.025,.05,s-p*2),S);I.position.set(t+A*(i/2-p),e.shelfHeight-.05,n),I.castShadow=!0,this.group.add(I)});const x=document.createElement("canvas");x.width=1024,x.height=128;const v=x.getContext("2d");v.fillStyle="#e8e3d8",v.fillRect(0,0,1024,128),v.strokeStyle="#9aa4b2",v.lineWidth=4,v.strokeRect(6,6,1012,116),v.font='bold 52px "Segoe UI", sans-serif',v.fillStyle="#475569",v.textAlign="center",v.textBaseline="middle",v.fillText("B� LINH KI?N PH?N C?NG",512,66);const L=new Mi(x),P=new xe(new Rt(1.15,.144),new Qe({map:L,roughness:.5}));P.position.set(t-i/2-.019,e.topHeight-.12,n),P.rotation.y=-Math.PI/2,this.group.add(P),this.colliders.push({minX:t-i/2-.2,maxX:t+i/2+.2,minZ:n-s/2-.2,maxZ:n+s/2+.2})}createMonitor(){const i=new $e;i.position.set(.75,.82,-.2),i.rotation.y=-.25,this.group.add(i),this.monitorBody=i;const s=new Qe({color:1316636,roughness:.44,metalness:.5}),o=new Qe({color:2830651,roughness:.28,metalness:.85}),a=new xe(new Ie(.3,.016,.22),o);a.position.set(0,.008,.012),i.add(a);const c=new xe(new Ie(.062,.27,.03),o);c.position.set(0,.155,-.05),c.rotation.x=.07,i.add(c);const l=new $e;l.position.set(0,.375,0),l.rotation.x=-.04,i.add(l),this.monitorPanel=l;const h=new xe(new Ie(.68,.4,.022),s);l.add(h);const u=new xe(new Ie(.68+.012,.05,.026),s);u.position.set(0,-.4/2+.005,.001),l.add(u);const d=new xe(new Ie(.016,.003,.002),new At({color:9741240}));d.position.set(.68/2-.05,-.4/2+.006,.0135),l.add(d),this.monitorLed=d,this.monitorCanvas=document.createElement("canvas"),this.monitorCanvas.width=1024,this.monitorCanvas.height=576,this.monitorContext=this.monitorCanvas.getContext("2d"),this.monitorTexture=new Mi(this.monitorCanvas),this.monitorTexture.minFilter=Qt,this.monitorTexture.anisotropy=4,this.renderMonitorScreen();const f=new At({map:this.monitorTexture});this.monitorScreenMesh=new xe(new Rt(.68-.03,.4-.036),f),this.monitorScreenMesh.position.set(0,.004,.0112),l.add(this.monitorScreenMesh);const g=new At({color:16777215,transparent:!0,opacity:.05,depthWrite:!1}),_=new xe(new Rt(.68-.03,.4-.036),g);_.position.set(0,.004,.0116),l.add(_);const m=new Qe({color:724240,roughness:.5,metalness:.4}),p=new xe(new Ie(.016,.006,.005),m);p.position.set(-.19,-.4/2+.012,-.014),p.rotation.x=.5,p.name="hdmiPortAnchor",p.userData={type:"monitorPort",portName:"HDMI"},l.add(p),this.interactables.push(p);const S=new xe(new Wn(.016,.0022,6,20),new At({color:3718648,transparent:!0,opacity:0,depthWrite:!1}));S.position.copy(p.position),S.rotation.copy(p.rotation),S.rotation.x+=Math.PI/2,l.add(S),this.monitorPortHalo=S;const x=new xe(new Ie(.68,.4,.03),s);x.position.set(0,0,-.02),l.add(x),x.userData={type:"monitor"},this.interactables.push(x),h.userData={type:"monitor"},this.interactables.push(h)}addVideoPortToMachine(e){if(!e)return null;const t=new xe(new Ie(.05,.016,.006),new Qe({color:724240,roughness:.5,metalness:.4}));t.position.set(-.012,.272,-.219),t.userData={type:"pcVideoPort",portName:"DisplayPort"},e.add(t);const n=new xe(new Wn(.026,.0026,6,20),new At({color:3718648,transparent:!0,opacity:.6,depthWrite:!1}));return n.position.copy(t.position),n.position.z-=.004,e.add(n),this.machinePort=t,this.machinePortHalo=n,this.registerMachinePort(t),t}registerMachinePort(e){e&&(this.interactables.includes(e)||this.interactables.push(e),this.machinePortHalo&&(this.machinePortHalo.visible=!0))}unregisterMachinePort(){if(this.machinePort){const e=this.interactables.indexOf(this.machinePort);e!==-1&&this.interactables.splice(e,1)}this.machinePortHalo&&(this.machinePortHalo.visible=!1)}setCableTaskArmed(e,t){this.monitorPortHalo&&(this.monitorPortHalo.material.opacity=e?.75:0),this.machinePortHalo&&(this.machinePortHalo.material.opacity=t?0:.6)}connectCable(){if(this.videoCable)return;const e=this.machinePort,t=this.monitorBody&&this.monitorBody.getObjectByName("hdmiPortAnchor");if(!e)return;const n=new w;e.getWorldPosition(n);const i=new w;t?t.getWorldPosition(i):i.set(.75,.9,-.2);const s=n.clone().lerp(i,.5);s.y=Math.min(n.y,i.y)-.16,s.z+=.08;const o=new Hh([n.clone(),n.clone().add(new w(.04,-.1,.06)),s,i.clone().add(new w(-.05,-.09,.05)),i.clone()]),a=new xe(new dc(o,42,.0042,8,!1),new Qe({color:1316378,roughness:.62,metalness:.1}));a.name="hdmiCable",a.castShadow=!1,this.scene.add(a),this.videoCable=a,this.monitorPortHalo&&(this.monitorPortHalo.material.opacity=0),this.machinePortHalo&&(this.machinePortHalo.material.opacity=0)}removeCable(){this.videoCable&&(this.scene.remove(this.videoCable),this.videoCable.geometry.dispose(),this.videoCable.material.dispose(),this.videoCable=null)}createPeripherals(){this.createKeyboard(.45,.82,.22,-.15),this.createMouse(.82,.82,.2,-.1);const t=new Qe({color:3900150,roughness:.3,metalness:.7}),n=new xe(new Ft(.012,.012,.2),t);n.rotation.z=Math.PI/2,n.position.set(-.95,.82+.015,.25),this.group.add(n);const i=new Qe({color:9741240,roughness:.3}),s=new xe(new Ft(.008,.008,.12),i);s.rotation.z=Math.PI/2,s.rotation.y=.4,s.position.set(-.92,.82+.01,.1),this.group.add(s)}createKeyboard(e,t,n,i){const s=new $e;s.position.set(e,t,n),s.rotation.y=i,this.group.add(s);const o=new Qe({color:1645860,roughness:.46,metalness:.35}),a=new Qe({color:2830392,roughness:.62,metalness:.05}),c=new Qe({color:3752269,roughness:.58}),l=.36,h=.135,u=new xe(new Ie(l,.018,h),o);u.position.y=.009,s.add(u);const d=new xe(new Ie(l+.004,.008,.012),o);d.position.set(0,.004,h/2-.004),s.add(d);const f=new xe(new Ie(l-.02,.003,.006),new At({color:2282478}));f.position.set(0,.005,h/2+.002),s.add(f);const g=.0185,_=.0016,m=[[[.5,1],[1.75,1],[3,1],[4.25,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14.25,1],[15.5,1]],[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,2]],[[.25,1.5],[1.75,1],[2.75,1],[3.75,1],[4.75,1],[5.75,1],[6.75,1],[7.75,1],[8.75,1],[9.75,1],[10.75,1],[11.75,1],[12.75,1.5],[14.5,1]],[[.5,1.75],[2.25,1],[3.25,1],[4.25,1],[5.25,1],[6.25,1],[7.25,1],[8.25,1],[9.25,1],[10.25,1],[11.25,1],[12.25,1],[13.25,2.75]],[[.75,2.25],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1.75],[13.75,1.25]],[[.25,1.25],[1.5,1.25],[2.75,6.25],[9,1.25],[10.25,1.25],[11.5,1.25],[12.75,1.25]]],p=new Ie(g-_,.009,g-_),S=m.reduce((I,T)=>I+T.length,0),x=new La(p,a,S);x.castShadow=!0,x.receiveShadow=!0,new La(p,c,0);const v=new ke,L=new He;let P=0;m.forEach((I,T)=>{const b=-h/2+.016+T*(g+_*1.6);I.forEach(([U,V])=>{const z=V*g-_;v.makeScale(V,1,1),v.setPosition(-l/2+.012+U*g+z/2-g/2,.0225+0,b),v.scale(new w(V,1,1)),x.setMatrixAt(P,v);const Z=T===0,ee=V>1.2;L.setHex(Z?2304048:ee?3752269:2830392),x.setColorAt(P,L),P++})}),x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),s.add(x);const A=new xe(new Ie(l-.04,.004,h-.04),o);A.position.y=.002,s.add(A)}createMouse(e,t,n,i){const s=new $e;s.position.set(e,t,n),s.rotation.y=i,this.group.add(s);const o=new Qe({color:1777446,roughness:.34,metalness:.2}),a=new Qe({color:2501685,roughness:.3,metalness:.25}),c=new Qe({color:724240,roughness:.7}),l=new xe(new hc(.026,.055,6,14),o);l.rotation.z=Math.PI/2,l.scale.set(1,1,.72),l.position.set(0,.026,.004),l.castShadow=!0,s.add(l),[-1,1].forEach(d=>{const f=new xe(new Ie(.021,.012,.05),a);f.position.set(d*.012,.035,-.036),f.rotation.z=d*.08,f.rotation.x=-.06,s.add(f)});const h=new xe(new Ft(.007,.007,.008,12),c);h.rotation.z=Math.PI/2,h.position.set(0,.042,-.03),s.add(h);const u=new xe(new Ie(.006,.002,.06),new At({color:2282478}));u.position.set(0,.004,.01),s.add(u)}createComputerCasePlaceholder(){const{caseGroup:e,interactables:t}=hu();e.position.set(-.25,.825,-.05),e.rotation.y=-Math.PI/4,e.name="benchCasePlaceholder",t.forEach(n=>{n.userData={type:"computerCase",isCasePlaceholder:!0}}),this.group.add(e),this.casePlaceholder=e,this.interactables.push(...t)}createDecorations(){const e=(i,s,o,a,c)=>{const l=document.createElement("canvas");l.width=512,l.height=720;const h=l.getContext("2d");h.fillStyle="#090d16",h.fillRect(0,0,512,720),h.strokeStyle=o,h.lineWidth=12,h.strokeRect(16,16,480,688),h.strokeStyle="rgba(255,255,255,0.1)",h.lineWidth=2;for(let f=0;f<720;f+=40)h.beginPath(),h.moveTo(30,f),h.lineTo(480,f),h.stroke();h.fillStyle=o,h.font='bold 52px "Segoe UI", sans-serif',h.textAlign="center",h.fillText(i,256,320),h.font='28px "Segoe UI", sans-serif',h.fillStyle="#cbd5e1",h.fillText(s,256,380);const u=new Mi(l),d=new xe(new Rt(1.2,1.7),new Qe({map:u,roughness:.4}));d.position.set(a,c,-4.95),this.group.add(d)};e("PC MASTER RACE","BUILD � OPTIMIZE � GAME","#38bdf8",-2.8,2.5),e("STAY COOL","HIGH AIRFLOW & LOW TEMPS","#a855f7",0,2.5);const t=new Qe({color:2236962}),n=new At({color:16777215});for(let i=-3;i<=3;i+=3){const s=new xe(new Ie(.2,.08,4),t);s.position.set(i,4.16,0),this.group.add(s);const o=new xe(new Ie(.12,.01,3.8),n);o.position.set(i,4.11,0),this.group.add(o)}}setMonitorState(e){this.monitorState=e,this.renderMonitorScreen()}renderMonitorScreen(){const e=this.monitorContext;if(!e)return;const t=this.monitorCanvas.width,n=this.monitorCanvas.height;if(e.clearRect(0,0,t,n),this.monitorState==="OFF")e.fillStyle="#05070a",e.fillRect(0,0,t,n);else if(this.monitorState==="NO_SIGNAL")e.fillStyle="#090d16",e.fillRect(0,0,t,n),e.fillStyle="#ef4444",e.font='bold 44px "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("NO SIGNAL",t/2,n/2-30),e.fillStyle="#94a3b8",e.font='26px "Segoe UI", sans-serif',e.fillText("Vui l�ng k?t n?i c�p DisplayPort / HDMI t? Card d? h?a",t/2,n/2+30);else if(this.monitorState==="POST")e.fillStyle="#000000",e.fillRect(0,0,t,n),e.fillStyle="#38bdf8",e.font="bold 32px monospace",e.textAlign="left",e.fillText("AMERICAN MEGATRENDS / PC BUILDER BIOS v3.80",50,70),e.fillStyle="#f8fafc",e.font="22px monospace",e.fillText("Main Processor : AMD Ryzen 5 3600 6-Core Processor @ 3.60GHz",50,140),e.fillText("Memory Testing : 16384KB OK (Dual-Channel DDR4 3200MHz)",50,180),e.fillText("Primary Storage: Samsung SSD 860 EVO 500GB (SATA 6Gb/s)",50,220),e.fillText("Display Adapter: NVIDIA GeForce RTX 3090 (24576MB VRAM)",50,260),e.fillText("Power Supply   : 650W ATX Power Good Signal Detected [OK]",50,300),e.fillStyle="#22c55e",e.font="bold 26px monospace",e.fillText(">>> POWER-ON SELF-TEST COMPLETED SUCCESSFULLY!",50,380),e.fillText(">>> BOOTING SYSTEM...",50,420),e.fillStyle="#1e293b",e.fillRect(50,480,t-100,24),e.fillStyle="#38bdf8",e.fillRect(50,480,(t-100)*Math.min(1,this.postProgress),24);else if(this.monitorState==="OS"){const i=e.createLinearGradient(0,0,t,n);i.addColorStop(0,"#0b1220"),i.addColorStop(.55,"#152a45"),i.addColorStop(1,"#0f766e"),e.fillStyle=i,e.fillRect(0,0,t,n),e.strokeStyle="rgba(148, 197, 255, 0.05)",e.lineWidth=1;for(let h=0;h<t;h+=48)e.beginPath(),e.moveTo(h,0),e.lineTo(h,n),e.stroke();for(let h=0;h<n;h+=48)e.beginPath(),e.moveTo(0,h),e.lineTo(t,h),e.stroke();e.fillStyle="rgba(8, 15, 28, 0.82)",e.fillRect(0,0,t,34),e.fillStyle="#e2e8f0",e.font='600 17px "Segoe UI", sans-serif',e.textAlign="left",e.textBaseline="middle",e.fillText("PC BUILDER OS",18,18),e.fillStyle="#7dd3fc",e.textAlign="right",e.fillText("build complete",t-18,18);const s=96,o=58,a=t-192,c=n-124;e.fillStyle="rgba(10, 18, 32, 0.93)",e.strokeStyle="rgba(56, 189, 248, 0.55)",e.lineWidth=2,e.beginPath(),e.roundRect(s,o,a,c,10),e.fill(),e.stroke(),e.fillStyle="rgba(56, 189, 248, 0.2)",e.beginPath(),e.roundRect(s,o,a,34,10),e.fill(),e.fillStyle="#e0f2fe",e.font='600 16px "Segoe UI", sans-serif',e.textAlign="left",e.textBaseline="middle",e.fillText("build-report.txt",s+16,o+18),e.fillStyle="#38bdf8",e.fillRect(s+a-56,o+12,12,12),e.fillStyle="#f87171",e.fillRect(s+a-34,o+12,12,12);const l=[["MOTHERBOARD","MSI MAG B550 Tomahawk - AM4 / DDR4"],["CPU","AMD Ryzen 5 3600 - 6C/12T - 38 C"],["RAM","16 GB dual channel DDR4-3200"],["SSD","Samsung 860 EVO 500 GB - 550 MB/s"],["GPU","NVIDIA GeForce RTX 3090 - 24 GB"],["COOLER","tower cooler, airflow front to back"],["PSU","650 W ATX, bronze"]];e.font='17px "Segoe UI", sans-serif',l.forEach(([h,u],d)=>{const f=o+66+d*29;e.fillStyle="#7dd3fc",e.textAlign="left",e.fillText(h,s+22,f),e.fillStyle="#cbd5e1",e.fillText(u,s+186,f)}),e.fillStyle="rgba(8, 15, 28, 0.92)",e.fillRect(0,n-40,t,40),e.fillStyle="rgba(56, 189, 248, 0.22)",e.beginPath(),e.roundRect(14,n-34,150,28,6),e.fill(),e.fillStyle="#e2e8f0",e.font='15px "Segoe UI", sans-serif',e.textAlign="left",e.fillText("Build Report",26,n-20),e.textAlign="right",e.fillStyle="#4ade80",e.fillText("all systems nominal",t-20,n-20)}}update(e){this.monitorState==="POST"&&(this.postProgress+=e*.4,this.renderMonitorScreen(),this.postProgress>=1&&this.setMonitorState("OS"))}hideCasePlaceholder(){this.casePlaceholder&&(this.casePlaceholder.visible=!1)}get partsTableSurfaceY(){return Xr().table.topHeight}}function hu(r={}){const{xray:e=!1}=r,t=new $e,{yFloor:n,yTop:i,zRear:s,zFront:o,xGlassOuter:a,xGlassInner:c,xPlainInner:l}=Yt,h=ii.feet,u=je.x,d=je.thickness,f=je.face,g=je.z1,_=je.y0,m=je.y1;je.cutY0,je.cutY1,je.cutZ0;const p=je.cutZ1,S=Hn.top,x=S-n,v=Hn.width,L=Hn.depth,P=Hn.midZ,A=Hn.midX,I=pt.fan.x,T=pt.fan.y,b=pt.fan.r,U=pt.io.y,V=pt.slots.x,z=pt.slots.top,Z=pt.slots.pitch,ee=pt.slots.span,K=pt.slots.y,ie=pt.psu.x,X=pt.psu.w,de=pt.psu.h,D=pt.psu.y,C=pt.plane,oe=pt.halfW,pe=pt.halfH,k=pt.centreY,Y=pt.toLocalY,se=yn.fan.x,q=yn.fan.z,ae=yn.fan.r,ye=J=>new Qe(J),me=ye({color:16119284,roughness:.42,metalness:.25}),De=ye({color:16119284,roughness:.42,metalness:.25});De.side=Ht;const Fe=ye({color:15197668,roughness:.55,metalness:.2}),Ce=ye({color:14078929,roughness:.3,metalness:.5}),R=ye({color:16119284,roughness:.95,metalness:.05}),st=ye({color:15197668,roughness:1,metalness:0}),Oe=ye({color:3718648,emissive:876416,emissiveIntensity:1.5,roughness:.4}),Be=new Qe({color:10475775,transparent:!0,opacity:e?.22:.14,roughness:.03,metalness:.35,side:Ht,depthWrite:!1}),Me=(J,Se)=>{const we=document.createElement("canvas");we.width=64,we.height=64;const Ae=we.getContext("2d");Ae.fillStyle="#000",Ae.fillRect(0,0,64,64),Ae.fillStyle="#fff";for(let W=0;W<8;W++)for(let $=0;$<8;$++){const ue=W%2*4;Ae.beginPath(),Ae.arc($*8+ue,W*8,2.6,0,Math.PI*2),Ae.fill()}const N=new Mi(we);return N.wrapS=Jt,N.wrapT=Jt,N.repeat.set(J,Se),new Qe({color:15197668,alphaMap:N,alphaTest:.5,side:Ht,roughness:.6,metalness:.55})},Ke=[],ne=(J,Se,we,Ae={})=>{const N=new xe(J,Se);return N.position.set(we[0],we[1],we[2]),Ae.rotation&&N.rotation.set(Ae.rotation[0],Ae.rotation[1],Ae.rotation[2]),N.castShadow=Ae.cast!==!1,N.receiveShadow=!0,Ae.name&&(N.name=Ae.name),Ae.interactive&&Ke.push(N),t.add(N),N},E=(J,Se,we)=>{const Ae=new Yh;return Ae.moveTo(-J,-Se),Ae.lineTo(J,-Se),Ae.lineTo(J,Se),Ae.lineTo(-J,Se),Ae.closePath(),we.forEach(({x:N,y:le,w:W,h:$,r:ue})=>{const he=new Vr;ue!==void 0?he.absarc(N,le,ue,0,Math.PI*2,!0):(he.moveTo(N-W/2,le-$/2),he.lineTo(N+W/2,le-$/2),he.lineTo(N+W/2,le+$/2),he.lineTo(N-W/2,le+$/2),he.closePath()),Ae.holes.push(he)}),new uc(Ae,26)},y=(J,Se,we=7)=>{const Ae=new $e,N=new xe(new Wn(J-.007,.007,8,28),Ce);N.castShadow=!0,Ae.add(N);const le=new xe(new Ps(J-.008,28),ye({color:14078929,roughness:.8,side:Ht}));le.position.z=-Se/2,Ae.add(le);const W=new xe(new Ft(.017,.017,Se*.7,14),ye({color:15197668,roughness:.95,metalness:.05}));W.rotation.x=Math.PI/2,Ae.add(W);const $=ye({color:13358561,roughness:.5,metalness:.15,side:Ht});for(let ue=0;ue<we;ue++){const he=ue/we*Math.PI*2,Ge=new xe(new Ie(J*.46,.0015,Se*.55),$);Ge.position.set(Math.cos(he)*J*.5,Math.sin(he)*J*.5,0),Ge.rotation.z=he+.5,Ae.add(Ge)}return Ae};[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([J,Se])=>{ne(new Ft(.017,.02,h,14),st,[J*(Et/2-.026),h/2,Se*(hn/2-.033)],{cast:!1})}),ne(new Ie(Et,wt,hn),me,[0,n-wt/2,0],{interactive:!0,name:"caseBottom"}),ne(new Rt(Et-.04,.16),Me(7,4),[A,n-wt/2-5e-4,D-.06],{rotation:[Math.PI/2,0,0],cast:!1}),ne(E((Et-.004)/2,(hn-.004)/2,[{x:se,y:q,r:ae}]),De,[0,i-wt/2,0],{rotation:[Math.PI/2,0,0],interactive:!0,name:"caseTop"}),ne(new Ps(ae-.006,30),Me(7,7),[se,i-wt/2-8e-4,q],{rotation:[-Math.PI/2,0,0],cast:!1}),ne(new Wn(ae,.004,8,30),Ce,[se,i-wt/2,q],{rotation:[Math.PI/2,0,0],cast:!1});const B=y(ae-.004,.025);B.rotation.x=-Math.PI/2,B.position.set(se,i-wt-.014,q),t.add(B),ne(new Rt(Et-.05,.085),Me(8,3),[0,i+6e-4,-.16],{rotation:[-Math.PI/2,0,0],cast:!1}),ne(new Ie(.075,.002,.032),Ce,[0,i+.001,o-.05]),ne(new Ft(.007,.007,.004,16),Oe,[yn.io.x,i+.003,yn.io.z],{cast:!1}),ne(new Ft(.003,.003,.004,12),R,[yn.io.x-.011,i+.003,yn.io.z],{cast:!1}),ne(new Ft(.0035,.0035,.004,12),R,[yn.io.x+.025,i+.003,yn.io.z],{cast:!1}),[-.012,.012].forEach(J=>{ne(new Ie(.013,.004,.008),R,[J,i+.003,o-.05],{cast:!1})});const te=o-.007,Q=.02,j=[[Et-.004,Q,0,h+Tt-Q/2],[Et-.004,Q,0,h+Q/2],[Q,Tt-.004-2*Q,-.206/2+Q/2,h+Tt/2],[Q,Tt-.004-2*Q,(Et-.004)/2-Q/2,h+Tt/2]];let Pe=null;j.forEach(([J,Se,we,Ae])=>{const N=ne(new Ie(J,Se,.014),me,[we,Ae,te],{interactive:!0,name:"frontPanel"});Pe||(Pe=N)}),ne(new Rt(Et-.004-2*Q,Tt-.004-2*Q),Me(9,22),[0,h+Tt/2,te+.001],{rotation:[0,Math.PI,0],cast:!1}),ne(new Ie(Et-.06,.005,.002),Oe,[0,h+Q/2,o-.001],{cast:!1}),ne(new Ie(.05,.008,.002),Ce,[0,h+Tt-Q/2,o-.001],{cast:!1}),[.135,.275].forEach(J=>{const Se=y(.07,.025);Se.position.set(0,J,o-.03),t.add(Se)}),ne(new Ie(Et-.02,.32,wt),Fe,[0,.205,o-.048],{cast:!1}),ne(E(oe,pe,[{x:I,y:Y(T),r:b},{x:0,y:Y(U),w:.159,h:.042},{x:V,y:Y(K),w:.122,h:ee},{x:ie,y:Y(D),w:X,h:de}]),De,[0,k,C],{interactive:!0,name:"caseRear"}),ne(new Ft(b-.001,b-.007,.026,26,1,!0),ye({color:15197668,roughness:.8,metalness:.2,side:Ht}),[I,T,s+wt+.013],{rotation:[Math.PI/2,0,0],cast:!1}),ne(new Wn(b,.004,8,28),Ce,[I,T,C],{cast:!1}),ne(new Ps(b-.005,26),Me(6,6),[I,T,C-.001],{cast:!1});const fe=y(b-.007,.02);fe.rotation.y=Math.PI,fe.position.set(I,T,s+wt+.02),t.add(fe),ne(new Ie(.122,ee,.004),R,[V,K,C+.006],{cast:!1});for(let J=0;J<7;J++)ne(new Ie(.12,.0175,.002),J===0?Ce:Fe,[V,z-.00875-J*Z,C],{cast:!1});ne(new Ie(.159,.042,.005),R,[0,U,C+.006],{cast:!1}),[[-.056,1920728],[-.042,1920728],[-.026,3359061],[.018,3359061],[.038,3359061]].forEach(([J,Se])=>{ne(new Ie(.012,.007,.008),ye({color:Se,roughness:.4,metalness:.6}),[J,U+.004,C+.012],{cast:!1})}),[.058,.068].forEach(J=>{ne(new Ft(.003,.003,.008,10),R,[J,U+.004,C+.012],{rotation:[Math.PI/2,0,0],cast:!1})}),ne(new Ie(X,de,.006),R,[ie,D,C+.006],{cast:!1}),ne(new Rt(X-.004,de-.004),Me(9,5),[ie,D,C+.0028],{cast:!1}),ne(new Ft(.008,.008,.008,14),R,[ie-.045,D+.02,C+.002],{rotation:[Math.PI/2,0,0],cast:!1}),ne(new Ie(.02,.012,.008),R,[ie-.045,D-.026,C+.002],{cast:!1});const be=cu(),Ze=(J,Se)=>be.some(([we,Ae,N,le])=>J>=we&&J<=Ae&&Se>=N&&Se<=le);be.forEach(([J,Se,we,Ae])=>{ne(new Ie(d,Se-J,Ae-we),Fe,[u,(J+Se)/2,(we+Ae)/2],{interactive:!0,name:"motherboardTray"})}),ne(new Ie(.03,m-_,wt),me,[u-.012,(_+m)/2,g-wt/2],{cast:!1}),[.16,.26,.36].forEach(J=>{ne(new Ie(.006,.014,wt+.001),R,[f+.003,J,g-wt/2],{cast:!1})});let re=0;lu.forEach(({y:J,z:Se})=>{Ze(J,Se)&&(re++,ne(new Ft(.0035,.0035,.006,8),Ce,[f+.003,J,Se],{rotation:[0,0,Math.PI/2],cast:!1}))}),[[_+.04,p-.02],[m-.06,p-.02]].forEach(([J,Se])=>{ne(new Wn(.012,.0035,6,16),st,[f+.002,J,Se],{rotation:[0,Math.PI/2,0],cast:!1})}),ne(new Ie(v,x,L),me,[A,n+x/2,P],{interactive:!0,name:"psuShroud"}),ne(new Rt(v-.03,L-.06),Me(7,9),[A,S+6e-4,P],{rotation:[-Math.PI/2,0,0],cast:!1}),ne(new Ie(.102,.006,.072),Ce,[-.01,S+.003,.05],{cast:!1}),[-.03,.03].forEach(J=>{[-.012,.012].forEach(Se=>{ne(new Ft(.0028,.0028,.004,8),R,[-.01+J,S+.007,.05+Se],{cast:!1})})}),ne(new Ie(wt,Tt-.008,hn-.008),me,[-Et/2+wt/2,h+Tt/2,0],{interactive:!0,name:"caseSide"});const _e=new xe(new Ie(Fr,Tt-.012,hn-.012),Be);_e.name="sideGlass",_e.position.set(a-Fr/2,h+Tt/2,0),_e.castShadow=!1,_e.receiveShadow=!1,t.add(_e),Ke.push(_e),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([J,Se])=>{const we=new xe(new Ft(.005,.005,.012,10),Ce);we.rotation.z=Math.PI/2,we.position.set(Fr/2,J*((Tt-.012)/2-.026),Se*((hn-.012)/2-.026)),_e.add(we)});const Ne=Ke.find(J=>J.name==="motherboardTray"),ze={shell:{width:Et,height:Tt+h,depth:hn},coolerClearance:c-f,cableChannel:u-d/2-l,boardBottomToShroud:wi.bottom-S,standoffs:re,trayNotch:{from:je.rearTop,to:je.rearTopStrip},rearFan:{x:I,y:T,radius:b},roofFan:{z:q,radius:ae},psuChamber:{width:v,depth:L,height:x}};return{caseGroup:t,sideGlass:_e,chassis:Ne,frontPanel:Pe,interactables:Ke,metrics:ze}}function Ks(r,e=null){const t={realSize:r.realSize,realDims:ou(r),flat:!0};return r.categoryKey==="cpu"&&(t.brighten=.42),e?{...t,...e}:t}function Mv(r,e=.42,t=.07){if(!r||!r.traverse)return r;const n={h:0,s:0,l:0};return r.traverse(i=>{if(!i.isMesh)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const o of s)o&&(o.color&&!o.map&&(o.color.getHSL(n),n.l<e&&o.color.setHSL(n.h,Math.min(n.s,.35),e)),o.emissive&&t>0&&(o.emissive.setScalar(t),o.emissiveIntensity===void 0&&(o.emissiveIntensity=1)))}),r}const Sv=[new w(1,0,0),new w(0,1,0),new w(0,0,1)],rh=1e-4;function uu(r){r.updateMatrixWorld(!0);const e=new gt().setFromObject(r);return{box:e,size:e.getSize(new w),center:e.getCenter(new w)}}function du(r){const e=Sv.map((o,a)=>({vector:o,index:a,length:r.getComponent(a)})).sort((o,a)=>o.length-a.length),t=e[0],n=e[1],i=e[2];let s=null;for(const o of[1,-1])for(const a of[1,-1]){const c=new w(1,0,0).multiplyScalar(o),l=new w(0,1,0).multiplyScalar(a),h=new w().crossVectors(c,l),u=new Array(3);u[i.index]=c,u[t.index]=l,u[n.index]=h,new ke().makeBasis(u[0],u[1],u[2]).determinant()<0&&(u[n.index]=h.negate());const d=new fn().setFromRotationMatrix(new ke().makeBasis(u[0],u[1],u[2])),f=2*Math.acos(Math.min(1,Math.abs(d.w))),g=u[1];let _;g.y>.9?_=0:g.z>.9?_=1:g.x>.9?_=2:_=3,(s===null||f<s.angle-rh||Math.abs(f-s.angle)<=rh&&_<s.facing)&&(s={quaternion:d,angle:f,facing:_})}return s?s.quaternion:new fn}function Zs(r,e={}){const{realSize:t=.15,realDims:n=null,minSize:i=0,maxSize:s=Number.POSITIVE_INFINITY,flat:o=!0,brighten:a=0}=e,{size:c,center:l}=uu(r),h=Math.max(c.x,c.y,c.z)||1,d=Math.min(Math.max(t,i),s)/h;r.position.set(-l.x,-l.y,-l.z);const f=new $e;o&&f.quaternion.copy(du(c)),f.add(r);const g=new $e;g.add(f);let _=d;if(n){g.updateMatrixWorld(!0);const v=new gt().setFromObject(f).getSize(new w),L=[n.length??v.x,n.height??n.thickness??v.y,n.width??v.z],P=[L[0]/(v.x||1),L[1]/(v.y||1),L[2]/(v.z||1)];g.scale.set(P[0],P[1],P[2]),_=P[0]}else g.scale.setScalar(d);g.updateMatrixWorld(!0);const m=new gt().setFromObject(g),p=m.getSize(new w),S=new $e;S.add(g),S.position.set(-m.min.x-p.x/2,-m.min.y,-m.min.z-p.z/2),S.updateMatrixWorld(!0);const x=new gt().setFromObject(S);return a>0&&Mv(S,a,Math.min(.09,a*.18)),{group:S,box:x,size:x.getSize(new w),scale:_}}function oh(r,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ca||e===wh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ca)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class fu extends ds{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Av(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Hv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ls.extractUrlBase(e);o=Ls.resolveURL(l,this.path)}else o=Ls.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Qh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===pu){try{o[Je.KHR_BINARY_GLTF]=new Gv(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new tx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new wv;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vv(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new Wv;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new Xv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function bv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tv{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new He(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Tn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new pc(h),l.distance=u;break;case"spot":l=new sp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class wv{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){const i=[];e.color=new He(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}}class Ev{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Av{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}}class Rv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Cv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Pv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Iv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Lv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],jt),Promise.all(s)}}class Dv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Nv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(s)}}class Uv{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Fv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ov{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Bv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zv{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Hv{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ln.TRIANGLES&&l.mode!==ln.TRIANGLE_STRIP&&l.mode!==ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new ke,m=new w,p=new fn,S=new w(1,1,1),x=new La(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&S.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,p,S));for(const v in c)if(v==="_COLOR_0"){const L=c[v];x.instanceColor=new Ia(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);_t.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const pu="glTF",bs=12,ah={JSON:1313821514,BIN:5130562};class Gv{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-bs,s=new DataView(e,bs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===ah.JSON){const l=new Uint8Array(e,bs+o,a);this.content=n.decode(l)}else if(c===ah.BIN){const l=bs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Vv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Va[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Va[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=$i[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,jt,d)})})}}class Wv{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Xv{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class mu extends qs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,x=p-d+u;for(let v=0;v!==a;v++){const L=o[_+v+a],P=o[_+v+c]*h,A=o[g+v+a],I=o[g+v]*h;s[v]=S*L+x*P+m*A+p*I}return s}}const qv=new fn;class Yv extends mu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return qv.fromArray(s).normalize().toArray(s),s}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ch={9728:Kt,9729:Qt,9984:mh,9985:Cr,9986:Ts,9987:Gn},lh={33071:si,33648:Br,10497:Jt},zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kv={CUBICSPLINE:void 0,LINEAR:Us,STEP:Ns},Ho={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),r.DefaultMaterial}function xi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function $v(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jv(r){let e;const t=r.extensions&&r.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Go(t.attributes):e=r.indices+":"+Go(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Go(r.targets[n]);return e}function Go(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Wa(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ex=new ke;class tx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new tp(this.options.manager):this.textureLoader=new ap(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xi(s,a,i),zn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ls.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=zo[i.type],a=$i[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Zt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=zo[i.type],l=$i[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(S);x||(_=new l(a,p*f,i.count*f/h),x=new ef(_,f/h),t.cache.add(S,x)),m=new ic(x,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Zt(_,c,g);if(i.sparse!==void 0){const p=zo.SCALAR,S=$i[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,L=new S(o[1],x,i.sparse.count*p),P=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,I=L.length;A<I;A++){const T=L[A];if(m.setX(T,P[A*c]),c>=2&&m.setY(T,P[A*c+1]),c>=3&&m.setZ(T,P[A*c+2]),c>=4&&m.setW(T,P[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=ch[d.magFilter]||Qt,h.minFilter=ch[d.minFilter]||Gn,h.wrapS=lh[d.wrapS]||Jt,h.wrapT=lh[d.wrapT]||Jt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Kt&&h.minFilter!==Qt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ct(_);m.needsUpdate=!0,d(m)}),t.load(Ls.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zn(u,o),u.userData.mimeType=o.mimeType||Qv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new kh,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Bh,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const u=i[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ot)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ht);const h=s.alphaMode||Ho.OPAQUE;if(h===Ho.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ho.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==At&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==At&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==At){const u=s.emissiveFactor;a.emissive=new He().setRGB(u[0],u[1],u[2],jt)}return s.emissiveTexture!==void 0&&o!==At&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),zn(u,s),t.associations.set(u,{materials:e}),s.extensions&&xi(i,u,s),u})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return hh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Jv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=hh(new Gt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Zv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const S=l[f];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new nf(_,S):new xe(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?p.geometry=oh(p.geometry,wh):m.mode===ln.TRIANGLE_FAN&&(p.geometry=oh(p.geometry,Ca));else if(m.mode===ln.LINES)p=new cf(_,S);else if(m.mode===ln.LINE_STRIP)p=new oc(_,S);else if(m.mode===ln.LINE_LOOP)p=new lf(_,S);else if(m.mode===ln.POINTS)p=new hf(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$v(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),zn(p,s),m.extensions&&xi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&xi(i,u[0],s),u[0];const d=new $e;s.extensions&&xi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(ri.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,x=d.length;S<x;S++){const v=d[S],L=f[S],P=g[S],A=_[S],I=m[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=n._createAnimationTracks(v,L,P,A,I);if(T)for(let b=0;b<T.length;b++)p.push(T[b])}return new Kf(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ex)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Fh:l.length>1?h=new $e:l.length===1?h=l[0]:h=new _t,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),zn(h,s),s.extensions&&xi(n,h,s),s.matrix!==void 0){const u=new ke;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new $e;n.name&&(s.name=i.createUniqueName(n.name)),zn(s,n),n.extensions&&xi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof An||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];ei[s.path]===ei.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ei[s.path]){case ei.weights:l=rs;break;case ei.rotation:l=os;break;case ei.position:case ei.scale:l=as;break;default:switch(n.itemSize){case 1:l=rs;break;case 2:case 3:default:l=as;break}break}const h=i.interpolation!==void 0?Kv[i.interpolation]:Us,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ei[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Wa(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof os?Yv:mu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nx(r,e,t){const n=e.attributes,i=new gt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){const h=Wa($i[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new w,c=new w;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Wa($i[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Rn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function hh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=Va[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return et.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),zn(r,e),nx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?jv(r,e.targets,t):r})}const ix=new fu,Vo=new Map,sx=new Map;function gu(r){if(Vo.has(r))return Vo.get(r);const e=new Promise(t=>{ix.load(r,n=>{const i=n.scene;i.updateMatrixWorld(!0),sx.set(r,i),t(i)},void 0,n=>{console.warn(`Could not load model ${r}:`,n),t(null)})});return Vo.set(r,e),e}async function Qr(r){const e=await gu(r);return e?e.clone(!0):null}function rx(r,e,t={}){const{perFrame:n=3,onDone:i}=t,s=[...r],o=[];let a=0,c=!1;const l=()=>{if(c)return;const h=s.splice(0,n);if(!h.length){Promise.all(o).then(()=>{c||i==null||i()});return}const u=h.map(d=>{const f=gu(d).then(g=>{a++,g&&!c&&e(d,g)}).catch(()=>{a++});return o.push(f),f});return c||Promise.resolve().then(()=>setTimeout(l,0)),u};return l(),{cancel(){c=!0},get loaded(){return a},get total(){return r.length}}}const ox=5e-4;class ax{constructor(e,t={}){this.scene=e,this.group=new $e,this.items=[...Wr],this.shelfMeshes=new Map,this.placeholders=new Map,this.interactables=[],this.layout=Xr(),this.onProgress=t.onProgress||null,this.onReady=t.onReady||null,this.ready=new Promise(i=>{this._resolveReady=i}),this.scene.add(this.group);const n=[...new Set(this.items.map(i=>i.modelPath))];this.stream=rx(n,(i,s)=>this.addItem(i,s),{perFrame:t.perFrame??4,onDone:()=>{var i,s;(i=this._resolveReady)==null||i.call(this),(s=this.onReady)==null||s.call(this)}})}_makePlaceholder(e){var i;const t=new Ie(Math.max(e.realSize,.02),Math.max(e.realSize*.12,.008),Math.max(((i=e.footprint)==null?void 0:i.depth)||e.realSize*.4,.02));return new xe(t,new Qe({color:13358561,roughness:.85,metalness:.05,transparent:!0,opacity:.55}))}_place(e,t,n){e.position.set(t.position.x,t.position.y+ox,t.position.z),e.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.userData={itemId:n.id,itemName:n.name,isPlaceholder:!!i.userData.isPlaceholder})}),e.userData={itemId:n.id,itemName:n.name},this.shelfMeshes.set(n.id,e),this.interactables.push(e),this.group.add(e)}addItem(e,t){var n;this.items.filter(i=>i.modelPath===e).forEach(i=>this._swapIn(i,t)),(n=this.onProgress)==null||n.call(this,this.stream.loaded,this.stream.total)}_swapIn(e,t){const n=this.layout.tiers.flatMap(l=>l.entries).find(l=>l.item.id===e.id);if(!n)return;const i=t.clone(!0),{group:s}=Zs(i,Ks(e)),o=new $e;o.rotation.y=-Math.PI/2,o.add(s);const a=new $e;a.add(o);const c=this.placeholders.get(e.id);if(c){this.group.remove(c),this.placeholders.delete(e.id);const l=this.interactables.indexOf(c);l>=0&&this.interactables.splice(l,1),c.traverse(h=>{var u,d,f,g;h.isMesh&&((d=(u=h.geometry)==null?void 0:u.dispose)==null||d.call(u),(g=(f=h.material)==null?void 0:f.dispose)==null||g.call(f))})}this._place(a,n,e)}seedPlaceholders(){const e=new Map(this.layout.tiers.flatMap(t=>t.entries).map(t=>[t.item.id,t]));this.items.forEach(t=>{const n=e.get(t.id);if(!n)return;const i=this._makePlaceholder(t);i.userData.isPlaceholder=!0,this._place(i,n,t),this.placeholders.set(t.id,i)})}hideItem(e){const t=this.shelfMeshes.get(e);t&&(t.visible=!1)}showItem(e){const t=this.shelfMeshes.get(e);t&&(t.visible=!0)}}class cx{constructor(){this.ctx=null,this.enabled=!0,this.fanSource=null,this.fanGain=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),t.gain.setValueAtTime(.15,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}playPickup(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(260,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(520,this.ctx.currentTime+.12),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.12),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.12)}playDrop(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(90,e+.12),n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.12);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(1400,e),i.frequency.exponentialRampToValueAtTime(320,e+.05),s.gain.setValueAtTime(.1,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.05)}playEquip(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(520,e),t.frequency.exponentialRampToValueAtTime(240,e+.1),n.gain.setValueAtTime(.16,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.1)}playSnap(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(1800,e),t.frequency.exponentialRampToValueAtTime(250,e+.08),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.ctx.destination),t.start(),t.stop(e+.08);const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(220,e+.02),i.frequency.exponentialRampToValueAtTime(60,e+.14),s.gain.setValueAtTime(.35,e+.02),s.gain.exponentialRampToValueAtTime(.001,e+.14),i.connect(s),s.connect(this.ctx.destination),i.start(e+.02),i.stop(e+.14)}playScrew(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;for(let t=0;t<3;t++){const n=e+t*.04,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(900+t*150,n),s.gain.setValueAtTime(.12,n),s.gain.exponentialRampToValueAtTime(.001,n+.025),i.connect(s),s.connect(this.ctx.destination),i.start(n),i.stop(n+.025)}}playPowerSwitch(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(80,e+.06),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.06),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.06)}playPostBeep(){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,e),n.gain.setValueAtTime(.25,e),n.gain.setValueAtTime(.25,e+.12),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.15)}startFanHum(){if(!this.enabled||this.fanSource||(this.init(),!this.ctx))return;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);let i=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;i=(i+.02*c)/1.02,n[a]=i*3.5}const s=this.ctx.createBufferSource();s.buffer=t,s.loop=!0;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(450,this.ctx.currentTime),o.Q.setValueAtTime(1.5,this.ctx.currentTime),this.fanGain=this.ctx.createGain(),this.fanGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.fanGain.gain.linearRampToValueAtTime(.18,this.ctx.currentTime+2),s.connect(o),o.connect(this.fanGain),this.fanGain.connect(this.ctx.destination),s.start(),this.fanSource=s}playVictoryFanfare(){if(!this.enabled||(this.init(),!this.ctx))return;const e=[{f:523.25,dur:.15,d:0},{f:659.25,dur:.15,d:.15},{f:783.99,dur:.15,d:.3},{f:1046.5,dur:.5,d:.45}],t=this.ctx.currentTime;e.forEach(n=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(n.f,t+n.d),s.gain.setValueAtTime(.2,t+n.d),s.gain.exponentialRampToValueAtTime(.001,t+n.d+n.dur),i.connect(s),s.connect(this.ctx.destination),i.start(t+n.d),i.stop(t+n.d+n.dur)})}}const mt=new cx;class lx{constructor(e){this.scene=e,this.group=new $e,this.loader=new fu,this.placedItems=new Map,this.interactables=[],this.scene.add(this.group)}placeItemAt(e,t){mt.playDrop(),this.loader.load(e.modelPath,n=>{const{group:i}=Zs(n.scene,Ks(e)),s=new $e;s.rotation.y=-Math.PI/2,s.add(i);const o=new $e;o.add(s),o.position.set(t.x,t.y+.002,t.z),o.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData={itemId:e.id,itemName:e.name,isPlaced:!0})}),o.userData={itemId:e.id,itemName:e.name,isPlaced:!0},this.group.add(o),this.placedItems.set(e.id,o),this.interactables.push(o)},void 0,n=>console.warn(`Error placing ${e.name}:`,n))}removeItem(e){const t=this.placedItems.get(e);if(t){this.group.remove(t),this.placedItems.delete(e);const n=this.interactables.indexOf(t);n!==-1&&this.interactables.splice(n,1)}}}class hx{constructor(e){this.canvas=e,this.scene=new Kr,this.camera=new Nt(45,1,.01,100),this.camera.position.set(0,0,1.7),this.camera.lookAt(0,0,0),this.renderer=new Jr({canvas:this.canvas,antialias:!0,alpha:!0}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e.clientWidth||360,e.clientHeight||360,!1),this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1.2,this.currentModel=null,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.autoRotate=!0,this.viewTilt=.26,this.framedAspect=null,this.setupLighting(),this.setupControls()}setupLighting(){const e=new jr(16777215,.9);this.scene.add(e);const t=new Tn(16777215,2);t.position.set(2,4,3),this.scene.add(t);const n=new Tn(3718648,1.8);n.position.set(-2,-1,-2),this.scene.add(n);const i=new Tn(11032055,.8);i.position.set(-2,2,2),this.scene.add(i)}setupControls(){this.canvas.addEventListener("mousedown",e=>{this.isDragging=!0,this.autoRotate=!1,this.previousMousePosition={x:e.clientX,y:e.clientY}}),window.addEventListener("mousemove",e=>{if(!this.isDragging||!this.currentModel)return;const t=e.clientX-this.previousMousePosition.x,n=e.clientY-this.previousMousePosition.y;this.currentModel.rotation.y+=t*.01,this.currentModel.rotation.x+=n*.01,this.previousMousePosition={x:e.clientX,y:e.clientY}}),window.addEventListener("mouseup",()=>{this.isDragging=!1}),this.canvas.addEventListener("touchstart",e=>{e.touches.length===1&&(this.isDragging=!0,this.autoRotate=!1,this.previousMousePosition={x:e.touches[0].clientX,y:e.touches[0].clientY})}),window.addEventListener("touchmove",e=>{if(!this.isDragging||!this.currentModel||e.touches.length!==1)return;const t=e.touches[0].clientX-this.previousMousePosition.x,n=e.touches[0].clientY-this.previousMousePosition.y;this.currentModel.rotation.y+=t*.01,this.currentModel.rotation.x+=n*.01,this.previousMousePosition={x:e.touches[0].clientX,y:e.touches[0].clientY}}),window.addEventListener("touchend",()=>{this.isDragging=!1})}loadItemModel(e,t={}){this.currentModel&&(this.scene.remove(this.currentModel),this.currentModel=null),Qr(e).then(n=>{n&&this.setModel(n,t)})}setModel(e,t={}){const{alignFlat:n=!0,autoFit:i=.95,tilt:s=this.viewTilt,realDims:o=null}=t;this.resize();const{size:a}=uu(e),c=Math.max(a.x,a.y,a.z)||1,l=new $e;l.add(e),n&&l.quaternion.copy(du(a)),l.updateMatrixWorld(!0);const h=new gt().setFromObject(l),u=h.getCenter(new w);l.position.set(-u.x,-u.y,-u.z);const d=new $e,f=i/c;if(o){const _=h.getSize(new w),m=[o.length??_.x,o.height??o.thickness??_.y,o.width??_.z],p=new w(m[0]/(_.x||1),m[1]/(_.y||1),m[2]/(_.z||1));d.scale.copy(p).multiplyScalar(f/Math.max(p.x,p.y,p.z,1e-9))}else d.scale.setScalar(f);d.add(l);const g=new $e;g.rotation.x=s,g.add(d),this.currentModel=g,this.scene.add(this.currentModel),this.autoRotate=!0,this.frameModel()}frameModel(){if(!this.currentModel)return;this.currentModel.updateMatrixWorld(!0);const t=new gt().setFromObject(this.currentModel).getSize(new w).multiplyScalar(.5),n=this.camera,i=Math.tan(ri.degToRad(n.fov)/2),s=i*n.aspect,a=Math.max(t.y/i,t.x/s)*1.1+t.z;n.position.set(0,0,a),n.lookAt(0,0,0),n.near=Math.max(.01,a-t.z*2-.05),n.far=a+t.z*2+10,n.updateProjectionMatrix(),this.framedAspect=n.aspect}resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;const n=Math.floor(e*this.pixelRatio),i=Math.floor(t*this.pixelRatio);(this.canvas.width!==n||this.canvas.height!==i)&&this.renderer.setSize(e,t,!1);const s=e/t;Math.abs(s-this.camera.aspect)<1e-6||(this.camera.aspect=s,this.camera.updateProjectionMatrix(),this.frameModel())}render(){this.resize(),this.currentModel&&this.autoRotate&&!this.isDragging&&(this.currentModel.rotation.y+=.008),this.renderer.render(this.scene,this.camera)}}class ux{constructor(e,t,n){this.camera=e,this.scene=t,this.playerControls=n,this.heldItemData=null,this.heldObjectGroup=new $e,this.camera.add(this.heldObjectGroup),this.rotationPivot=new $e,this.heldObjectGroup.add(this.rotationPivot),this.defaultPos=new w(.35,-.28,-.65),this.centerPos=new w(0,-.02,-.52),this.currentPos=this.defaultPos.clone(),this.heldObjectGroup.position.copy(this.currentPos),this.isInspecting=!1,this.itemRotation={x:0,y:0,z:0},this.setupMouseEvents()}setPlayerControls(e){this.playerControls=e}setupMouseEvents(){window.addEventListener("mousedown",e=>{e.button===2&&this.heldItemData&&(this.isInspecting=!0,this.playerControls&&(this.playerControls.isLookLocked=!0),this.showInspectHint(!0))}),window.addEventListener("mouseup",e=>{e.button===2&&this.isInspecting&&(this.isInspecting=!1,this.playerControls&&(this.playerControls.isLookLocked=!1),this.showInspectHint(!1))}),window.addEventListener("contextmenu",e=>{e.preventDefault()}),window.addEventListener("mousemove",e=>{if(this.isInspecting&&this.heldItemData){const t=e.movementX||0,n=e.movementY||0;this.itemRotation.y+=t*.009,this.itemRotation.x+=n*.009,this.heldItemData.noTilt&&(this.itemRotation.x=0),this.rotationPivot.rotation.x=this.itemRotation.x,this.rotationPivot.rotation.y=this.itemRotation.y,this.rotationPivot.rotation.z=this.itemRotation.z}}),window.addEventListener("wheel",e=>{if(!this.isInspecting||!this.heldItemData)return;e.preventDefault();const t=this.heldItemData.noTilt?0:-Math.sign(e.deltaY)*.12;this.itemRotation.z+=t,this.rotationPivot.rotation.set(this.itemRotation.x,this.itemRotation.y,this.itemRotation.z)},{passive:!1})}showInspectHint(e){let t=document.getElementById("inspect-hint");t||(t=document.createElement("div"),t.id="inspect-hint",document.body.appendChild(t)),e&&this.heldItemData?(t.textContent=this.heldItemData.noTilt?`🔍 Đang quan sát ${this.heldItemData.name} • Rê chuột để xoay 360°`:`🔍 Đang quan sát ${this.heldItemData.name} • Rê chuột để xoay • Lăn chuột để xoay ngang`,t.classList.add("active")):t.classList.remove("active")}holdItem(e){this.clearHeldItem(),this.heldItemData=e,mt.playPickup();const t=n=>{const{group:i,size:s}=Zs(n,Ks(e,{minSize:.05,maxSize:.34}));i.position.y-=s.y/2,this.rotationPivot.add(i),this.setDefaultPose()};if(e.prebuilt){const n=new $e;n.add(e.prebuilt),e.prebuilt.position.set(0,0,0),e.prebuilt.rotation.set(0,0,0),n.position.y=-e.prebuiltSizeY/2||0,this.rotationPivot.add(n),this.setDefaultPose(),e.pose&&(this.itemRotation={...e.pose},this.rotationPivot.rotation.set(this.itemRotation.x,this.itemRotation.y,this.itemRotation.z));return}Qr(e.modelPath).then(n=>{n&&t(n)})}setDefaultPose(){var e;this.itemRotation={x:(e=this.heldItemData)!=null&&e.noTilt?0:.15,y:-.35,z:0},this.rotationPivot.rotation.set(this.itemRotation.x,this.itemRotation.y,0)}clearHeldItem(){for(this.showInspectHint(!1),this.isInspecting&&this.playerControls&&(this.playerControls.isLookLocked=!1),this.isInspecting=!1;this.rotationPivot.children.length>0;)this.rotationPivot.remove(this.rotationPivot.children[0]);const e=this.heldItemData;return this.heldItemData=null,this.rotationPivot.rotation.set(0,0,0),e}getHeldItem(){return this.heldItemData}update(e,t){if(!this.heldItemData)return;const n=this.isInspecting?this.centerPos:this.defaultPos,i=Math.min(1,14*e);if(this.currentPos.lerp(n,i),this.isInspecting)this.heldObjectGroup.position.copy(this.currentPos);else{const s=Math.sin(t*2.2)*.005,o=Math.cos(t*1.6)*.003;this.heldObjectGroup.position.set(this.currentPos.x+o,this.currentPos.y+s,this.currentPos.z)}}}function dx(r){for(let e=r;e;e=e.parent)if(!e.visible)return!1;return!0}class fx{constructor(e,t,n,i,s){var o;this.camera=e,this.domElement=t,this.onInteract=n,this.onStow=i,this.onToggleInventory=s,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.velocity=new w(0,0,0),this.isLocked=!1,this.isLookLocked=!1,this.pitch=0,this.yaw=0,this._forward=new w,this._right=new w,this._moveDir=new w,this.bounds={minX:-5.4,maxX:5.4,minZ:-4.4,maxZ:4.4},this.obstacles=[{minX:-1.35,maxX:1.35,minZ:-.75,maxZ:.75},av()],this.raycaster=new eu,this.center=new Te(0,0),this.hoveredObject=null,this.lastRaycastHit=null,this.lastRayPos=new w(NaN,NaN,NaN),this.lastRayQuat=new fn(NaN,NaN,NaN,NaN),this.rayDirty=!0,this.hud={crosshair:document.getElementById("crosshair"),prompt:document.getElementById("hud-prompt"),promptText:((o=document.getElementById("hud-prompt"))==null?void 0:o.querySelector(".prompt-text"))||null},this.lastPromptText=null,this.lastPromptShown=!1,this.lastHighlighted=!1,this.setupPointerLock(),this.setupKeyboard(),this.setupMouse()}markRaycastDirty(){this.rayDirty=!0}setupPointerLock(){document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===this.domElement;const e=document.getElementById("shiftlock-status");e&&(e.textContent=this.isLocked?"Shift-Lock: BẬT (Khóa tâm)":"Shift-Lock: TẮT (Tự do chuột)",e.className=this.isLocked?"active":"inactive");const t=document.getElementById("crosshair");t&&t.classList.toggle("unlocked",!this.isLocked)}),this.domElement.addEventListener("click",()=>{const e=document.getElementById("inventory-modal"),t=e&&e.classList.contains("active");!this.isLocked&&!t&&this.lockPointer()})}lockPointer(){try{this.domElement.requestPointerLock()}catch(e){console.warn("Pointer lock error:",e)}}unlockPointer(){try{document.exitPointerLock()}catch(e){console.warn("Pointer unlock error:",e)}}toggleShiftLock(){this.isLocked?this.unlockPointer():this.lockPointer()}setupKeyboard(){window.addEventListener("keydown",e=>{if(e.key==="Shift"){e.preventDefault(),this.toggleShiftLock();return}if(e.code==="KeyE"){this.onStow&&this.onStow();return}if(e.code==="KeyR"){this.onToggleInventory&&this.onToggleInventory();return}switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break}}),window.addEventListener("keyup",e=>{switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break}})}setupMouse(){window.addEventListener("mousemove",e=>{if(!this.isLocked||this.isLookLocked)return;const t=e.movementX||0,n=e.movementY||0;this.yaw-=t*.0022,this.pitch-=n*.0022,this.pitch=Math.max(-Math.PI/2.1,Math.min(Math.PI/2.1,this.pitch));const i=new wn(0,0,0,"YXZ");i.x=this.pitch,i.y=this.yaw,this.camera.quaternion.setFromEuler(i)}),window.addEventListener("mousedown",e=>{e.button===0&&this.isLocked&&this.onInteract&&this.onInteract(this.hoveredObject,this.lastRaycastHit)})}checkCollision(e,t){if(e<this.bounds.minX||e>this.bounds.maxX||t<this.bounds.minZ||t>this.bounds.maxZ)return!0;for(const n of this.obstacles)if(e>=n.minX&&e<=n.maxX&&t>=n.minZ&&t<=n.maxZ)return!0;return!1}rayMoved(){const e=this.camera.position,t=this.camera.quaternion;return e.x!==this.lastRayPos.x||e.y!==this.lastRayPos.y||e.z!==this.lastRayPos.z||t.x!==this.lastRayQuat.x||t.y!==this.lastRayQuat.y||t.z!==this.lastRayQuat.z||t.w!==this.lastRayQuat.w}update(e,t=[]){var g,_,m,p,S,x;const n=(this.moveForward?1:0)-(this.moveBackward?1:0),i=(this.moveRight?1:0)-(this.moveLeft?1:0),s=this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),a=this._moveDir.set(0,0,0);(n!==0||i!==0)&&(a.addScaledVector(s,n),a.addScaledVector(o,i),a.normalize());const c=4.2,l=a.x*c,h=a.z*c,u=Math.min(1,12*e);this.velocity.x+=(l-this.velocity.x)*u,this.velocity.z+=(h-this.velocity.z)*u;const d=this.camera.position.x+this.velocity.x*e,f=this.camera.position.z+this.velocity.z*e;if(this.checkCollision(d,this.camera.position.z)||(this.camera.position.x=d),this.checkCollision(this.camera.position.x,f)||(this.camera.position.z=f),this.camera.position.y=1.65,!this.isLocked){this.hoveredObject=null,this.lastRaycastHit=null,this.setHighlight(!1),this.setPrompt(null),this.lastRayPos.copy(this.camera.position),this.lastRayQuat.copy(this.camera.quaternion),this.rayDirty=!1;return}if(this.rayDirty||this.rayMoved()){this.lastRayPos.copy(this.camera.position),this.lastRayQuat.copy(this.camera.quaternion),this.rayDirty=!1,this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.center,this.camera);const v=this.raycaster.intersectObjects(t,!0);let L=null,P=null;for(const A of v){if(A.distance>=4)break;if(!dx(A.object))continue;let I=A.object;for(;I&&!((g=I.userData)!=null&&g.type)&&!((_=I.userData)!=null&&_.snapType)&&!((m=I.userData)!=null&&m.itemId)&&I.parent;)I=I.parent;if(I&&((p=I.userData)!=null&&p.type||(S=I.userData)!=null&&S.snapType||(x=I.userData)!=null&&x.itemId)){L=I,P=A;break}!P&&(A.object.isMesh||A.point)&&(P=A)}this.hoveredObject=L,this.lastRaycastHit=P,this.setHighlight(!!L),this.setPrompt(L)}}setHighlight(e){var t;e!==this.lastHighlighted&&(this.lastHighlighted=e,(t=this.hud.crosshair)==null||t.classList.toggle("highlight",e))}setPrompt(e){const t=e?this.promptTextFor(e.userData):null;if(t===this.lastPromptText&&!!t===this.lastPromptShown)return;this.lastPromptText=t,this.lastPromptShown=!!t;const n=this.hud.prompt;n&&(n.style.display=t?"flex":"none",t&&this.hud.promptText&&(this.hud.promptText.textContent=t))}promptTextFor(e={}){return e.itemId?`[Chuột trái] Nhặt ${e.itemName||"Linh kiện"}`:e.type==="glass_side"?"[Chuột trái] Tháo / Lắp Nắp kính thùng máy":e.type==="power_button"?"[Chuột trái] BẬT NGUỒN MÁY TÍNH":e.type==="cables"?"[Chuột trái] Cắm Dây nguồn & Cáp tín hiệu":e.snapType?`[Chuột trái] Lắp ráp: ${e.snapType.toUpperCase()}`:e.type==="computerCase"?"[Chuột trái] Mở Menu Thùng Máy":e.type==="monitor"?"[Chuột trái] Cắm cáp màn hình":null}}class px{constructor(e,t,n,i,s){this.previewScene=e,this.onEquipItem=t,this.onInstallItem=n,this.onDropItem=i,this.onRequestLock=s,this.isOpen=!1,this.maxSlots=24,this.slots=new Array(this.maxSlots).fill(null),this.selectedSlotIndex=null,this.selectedItem=null,this.slots=new Array(this.maxSlots).fill(null),this.modalEl=document.getElementById("inventory-modal"),this.setupDOM()}setupDOM(){const e=document.getElementById("btn-close-inventory");e&&e.addEventListener("click",()=>{mt.playClick(),this.close()});const t=document.getElementById("btn-inv-equip");t&&t.addEventListener("click",()=>{if(!this.selectedItem)return;mt.playClick();const i=this.selectedItem,s=this.selectedSlotIndex;this.slots[s]=null,this.deselect(),this.renderGrid(),this.onEquipItem&&this.onEquipItem(i),this.close()});const n=document.getElementById("btn-inv-drop");n&&n.addEventListener("click",()=>{this.dropCurrentSelectedItem()}),window.addEventListener("keydown",i=>{if(this.isOpen){if(i.code==="KeyR"||i.code==="Escape"){i.preventDefault(),mt.playClick(),this.close();return}i.code==="KeyE"&&this.selectedItem&&this.selectedSlotIndex!==null&&(i.preventDefault(),this.dropCurrentSelectedItem())}})}dropCurrentSelectedItem(){if(!this.selectedItem||this.selectedSlotIndex===null)return;mt.playDrop();const e=this.selectedItem,t=this.selectedSlotIndex;this.slots[t]=null,this.deselect(),this.renderGrid(),this.onDropItem&&this.onDropItem(e)}open(e=null){this.isOpen=!0,mt.playClick(),this.modalEl.classList.add("active"),this.deselect(),this.renderGrid()}close(){this.isOpen=!1,this.modalEl.classList.remove("active"),this.deselect(),this.onRequestLock&&this.onRequestLock()}toggle(e=null){this.isOpen?this.close():this.open(e)}selectSlot(e){const t=this.slots[e];if(t){if(mt.playClick(),this.selectedSlotIndex===e){this.deselect(),this.renderGrid();return}this.selectedSlotIndex=e,this.selectedItem=t,this.renderGrid(),this.showDetailPanel(t),this.previewScene&&this.previewScene.loadItemModel(t.modelPath,{realDims:ou(t)})}}deselect(){this.selectedSlotIndex=null,this.selectedItem=null,this.hideDetailPanel()}showDetailPanel(e){const t=document.getElementById("inv-empty-detail"),n=document.getElementById("inv-active-detail");t&&(t.style.display="none"),n&&(n.style.display="flex");const i=document.getElementById("inv-item-tag");i&&(i.textContent=`Tag: ${e.tag}`,i.className=`inv-tag tag-${e.categoryKey}`);const s=document.getElementById("inv-item-name");s&&(s.textContent=e.name);const o=document.getElementById("inv-item-brand");o&&(o.textContent=`${e.brand} • ${e.price}`);const a=document.getElementById("inv-specs-list");a&&(a.innerHTML="",e.specs.forEach(l=>{const h=document.createElement("div");h.className="spec-row",h.innerHTML=`
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
        `,e.appendChild(a)}const n=document.getElementById("inv-capacity-badge");n&&(n.textContent=`${t} / ${this.maxSlots} Ô CHỨA`)}addItem(e){const t=this.slots.findIndex(n=>n===null);return t===-1?!1:(this.slots[t]=e,this.isOpen&&this.renderGrid(),!0)}removeItem(e){const t=this.slots.findIndex(n=>n&&n.id===e);return t!==-1?(this.slots[t]=null,this.selectedSlotIndex===t&&this.deselect(),this.isOpen&&this.renderGrid(),!0):!1}hasItem(e){return this.slots.some(t=>t&&t.id===e)}}var Mc={};(function r(e,t,n,i){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),C=D.getContext("2d");C.fillRect(0,0,1,1);var oe=D.transferToImageBitmap();C.createPattern(oe,"no-repeat")}catch{return!1}return!0})();function c(){}function l(D){var C=t.exports.Promise,oe=C!==void 0?C:e.Promise;return typeof oe=="function"?new oe(D):(D(c,c),null)}var h=(function(D,C){return{transform:function(oe){if(D)return oe;if(C.has(oe))return C.get(oe);var pe=new OffscreenCanvas(oe.width,oe.height),k=pe.getContext("2d");return k.drawImage(oe,0,0),C.set(oe,pe),pe},clear:function(){C.clear()}}})(a,new Map),u=(function(){var D=Math.floor(16.666666666666668),C,oe,pe={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(Y){var se=Math.random();return pe[se]=requestAnimationFrame(function q(ae){k===ae||k+D-1<ae?(k=ae,delete pe[se],Y()):pe[se]=requestAnimationFrame(q)}),se},oe=function(Y){pe[Y]&&cancelAnimationFrame(pe[Y])}):(C=function(Y){return setTimeout(Y,D)},oe=function(Y){return clearTimeout(Y)}),{frame:C,cancel:oe}})(),d=(function(){var D,C,oe={};function pe(k){function Y(se,q){k.postMessage({options:se||{},callback:q})}k.init=function(q){var ae=q.transferControlToOffscreen();k.postMessage({canvas:ae},[ae])},k.fire=function(q,ae,ye){if(C)return Y(q,null),C;var me=Math.random().toString(36).slice(2);return C=l(function(De){function Fe(Ce){Ce.data.callback===me&&(delete oe[me],k.removeEventListener("message",Fe),C=null,h.clear(),ye(),De())}k.addEventListener("message",Fe),Y(q,me),oe[me]=Fe.bind(null,{data:{callback:me}})}),C},k.reset=function(){k.postMessage({reset:!0});for(var q in oe)oe[q](),delete oe[q]}}return function(){if(D)return D;if(!n&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([k])))}catch(Y){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Y),null}pe(D)}return D}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(D,C){return C?C(D):D}function _(D){return D!=null}function m(D,C,oe){return g(D&&_(D[C])?D[C]:f[C],oe)}function p(D){return D<0?0:Math.floor(D)}function S(D,C){return Math.floor(Math.random()*(C-D))+D}function x(D){return parseInt(D,16)}function v(D){return D.map(L)}function L(D){var C=String(D).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:x(C.substring(0,2)),g:x(C.substring(2,4)),b:x(C.substring(4,6))}}function P(D){var C=m(D,"origin",Object);return C.x=m(C,"x",Number),C.y=m(C,"y",Number),C}function A(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function I(D){var C=D.getBoundingClientRect();D.width=C.width,D.height=C.height}function T(D){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=D,C}function b(D,C,oe,pe,k,Y,se,q,ae){D.save(),D.translate(C,oe),D.rotate(Y),D.scale(pe,k),D.arc(0,0,1,se,q,ae),D.restore()}function U(D){var C=D.angle*(Math.PI/180),oe=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-C+(.5*oe-Math.random()*oe),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function V(D,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var oe=C.tick++/C.totalTicks,pe=C.x+C.random*C.tiltCos,k=C.y+C.random*C.tiltSin,Y=C.wobbleX+C.random*C.tiltCos,se=C.wobbleY+C.random*C.tiltSin;if(D.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-oe)+")",D.beginPath(),o&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))D.fill(ie(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(Y-pe)*.1,Math.abs(se-k)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var q=Math.PI/10*C.wobble,ae=Math.abs(Y-pe)*.1,ye=Math.abs(se-k)*.1,me=C.shape.bitmap.width*C.scalar,De=C.shape.bitmap.height*C.scalar,Fe=new DOMMatrix([Math.cos(q)*ae,Math.sin(q)*ae,-Math.sin(q)*ye,Math.cos(q)*ye,C.x,C.y]);Fe.multiplySelf(new DOMMatrix(C.shape.matrix));var Ce=D.createPattern(h.transform(C.shape.bitmap),"no-repeat");Ce.setTransform(Fe),D.globalAlpha=1-oe,D.fillStyle=Ce,D.fillRect(C.x-me/2,C.y-De/2,me,De),D.globalAlpha=1}else if(C.shape==="circle")D.ellipse?D.ellipse(C.x,C.y,Math.abs(Y-pe)*C.ovalScalar,Math.abs(se-k)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):b(D,C.x,C.y,Math.abs(Y-pe)*C.ovalScalar,Math.abs(se-k)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var R=Math.PI/2*3,st=4*C.scalar,Oe=8*C.scalar,Be=C.x,Me=C.y,Ke=5,ne=Math.PI/Ke;Ke--;)Be=C.x+Math.cos(R)*Oe,Me=C.y+Math.sin(R)*Oe,D.lineTo(Be,Me),R+=ne,Be=C.x+Math.cos(R)*st,Me=C.y+Math.sin(R)*st,D.lineTo(Be,Me),R+=ne;else D.moveTo(Math.floor(C.x),Math.floor(C.y)),D.lineTo(Math.floor(C.wobbleX),Math.floor(k)),D.lineTo(Math.floor(Y),Math.floor(se)),D.lineTo(Math.floor(pe),Math.floor(C.wobbleY));return D.closePath(),D.fill(),C.tick<C.totalTicks}function z(D,C,oe,pe,k){var Y=C.slice(),se=D.getContext("2d"),q,ae,ye=l(function(me){function De(){q=ae=null,se.clearRect(0,0,pe.width,pe.height),h.clear(),k(),me()}function Fe(){n&&!(pe.width===i.width&&pe.height===i.height)&&(pe.width=D.width=i.width,pe.height=D.height=i.height),!pe.width&&!pe.height&&(oe(D),pe.width=D.width,pe.height=D.height),se.clearRect(0,0,pe.width,pe.height),Y=Y.filter(function(Ce){return V(se,Ce)}),Y.length?q=u.frame(Fe):De()}q=u.frame(Fe),ae=De});return{addFettis:function(me){return Y=Y.concat(me),ye},canvas:D,promise:ye,reset:function(){q&&u.cancel(q),ae&&ae()}}}function Z(D,C){var oe=!D,pe=!!m(C||{},"resize"),k=!1,Y=m(C,"disableForReducedMotion",Boolean),se=s&&!!m(C||{},"useWorker"),q=se?d():null,ae=oe?A:I,ye=D&&q?!!D.__confetti_initialized:!1,me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,De;function Fe(R,st,Oe){for(var Be=m(R,"particleCount",p),Me=m(R,"angle",Number),Ke=m(R,"spread",Number),ne=m(R,"startVelocity",Number),E=m(R,"decay",Number),y=m(R,"gravity",Number),B=m(R,"drift",Number),te=m(R,"colors",v),Q=m(R,"ticks",Number),j=m(R,"shapes"),Pe=m(R,"scalar"),fe=!!m(R,"flat"),be=P(R),Ze=Be,re=[],_e=D.width*be.x,Ne=D.height*be.y;Ze--;)re.push(U({x:_e,y:Ne,angle:Me,spread:Ke,startVelocity:ne,color:te[Ze%te.length],shape:j[S(0,j.length)],ticks:Q,decay:E,gravity:y,drift:B,scalar:Pe,flat:fe}));return De?De.addFettis(re):(De=z(D,re,ae,st,Oe),De.promise)}function Ce(R){var st=Y||m(R,"disableForReducedMotion",Boolean),Oe=m(R,"zIndex",Number);if(st&&me)return l(function(ne){ne()});oe&&De?D=De.canvas:oe&&!D&&(D=T(Oe),document.body.appendChild(D)),pe&&!ye&&ae(D);var Be={width:D.width,height:D.height};q&&!ye&&q.init(D),ye=!0,q&&(D.__confetti_initialized=!0);function Me(){if(q){var ne={getBoundingClientRect:function(){if(!oe)return D.getBoundingClientRect()}};ae(ne),q.postMessage({resize:{width:ne.width,height:ne.height}});return}Be.width=Be.height=null}function Ke(){De=null,pe&&(k=!1,e.removeEventListener("resize",Me)),oe&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,ye=!1)}return pe&&!k&&(k=!0,e.addEventListener("resize",Me,!1)),q?q.fire(R,Be,Ke):Fe(R,Be,Ke)}return Ce.reset=function(){q&&q.reset(),De&&De.reset()},Ce}var ee;function K(){return ee||(ee=Z(null,{useWorker:!0,resize:!0})),ee}function ie(D,C,oe,pe,k,Y,se){var q=new Path2D(D),ae=new Path2D;ae.addPath(q,new DOMMatrix(C));var ye=new Path2D;return ye.addPath(ae,new DOMMatrix([Math.cos(se)*k,Math.sin(se)*k,-Math.sin(se)*Y,Math.cos(se)*Y,oe,pe])),ye}function X(D){if(!o)throw new Error("path confetti are not supported in this browser");var C,oe;typeof D=="string"?C=D:(C=D.path,oe=D.matrix);var pe=new Path2D(C),k=document.createElement("canvas"),Y=k.getContext("2d");if(!oe){for(var se=1e3,q=se,ae=se,ye=0,me=0,De,Fe,Ce=0;Ce<se;Ce+=2)for(var R=0;R<se;R+=2)Y.isPointInPath(pe,Ce,R,"nonzero")&&(q=Math.min(q,Ce),ae=Math.min(ae,R),ye=Math.max(ye,Ce),me=Math.max(me,R));De=ye-q,Fe=me-ae;var st=10,Oe=Math.min(st/De,st/Fe);oe=[Oe,0,0,Oe,-Math.round(De/2+q)*Oe,-Math.round(Fe/2+ae)*Oe]}return{type:"path",path:C,matrix:oe}}function de(D){var C,oe=1,pe="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?C=D:(C=D.text,oe="scalar"in D?D.scalar:oe,k="fontFamily"in D?D.fontFamily:k,pe="color"in D?D.color:pe);var Y=10*oe,se=""+Y+"px "+k,q=new OffscreenCanvas(Y,Y),ae=q.getContext("2d");ae.font=se;var ye=ae.measureText(C),me=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),De=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),Fe=2,Ce=ye.actualBoundingBoxLeft+Fe,R=ye.actualBoundingBoxAscent+Fe;me+=Fe+Fe,De+=Fe+Fe,q=new OffscreenCanvas(me,De),ae=q.getContext("2d"),ae.font=se,ae.fillStyle=pe,ae.fillText(C,Ce,R);var st=1/oe;return{type:"bitmap",bitmap:q.transferToImageBitmap(),matrix:[st,0,0,st,-me*st/2,-De*st/2]}}t.exports=function(){return K().apply(this,arguments)},t.exports.reset=function(){K().reset()},t.exports.create=Z,t.exports.shapeFromPath=X,t.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Mc,!1);const Wo=Mc.exports;Mc.exports.create;const Xo={active:3718648,locked:2278750,hint:16498468},mx=Yt.xGlassOuter-ii.glass/2,gx=.26,_x=.35,vx=3.2;class xx{constructor(e){this.canvas=e,this.disposed=!1,this.scene=new Kr,this.camera=new Nt(38,1,.01,100),this.camera.position.set(0,0,1.2),this.renderer=new Jr({canvas:e,antialias:!0,alpha:!0}),this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1.15,this.raycaster=new eu,this.pointerNdc=new Te,this.pointerInside=!1,this.pointerPlane=new ti,this.caseGroup=null,this.sideGlass=null,this.glassOn=!0,this.glassT=1,this.glassGoal=1,this.zoneMeshes=new Map,this.zoneList=[],this.screwGroups=new Map,this.placedParts=new Map,this.ghost=null,this.activeZone=null,this.lockedZone=null,this.powered=!1,this._lastFocusZone=null,this.zoom=1,this.pivot=new $e,this.scene.add(this.pivot),this.orbitYaw=0,this.orbitPitch=0,this.orbiting=!1,this._orbitLast={x:0,y:0},this._orbitDist=1,this.caseRoot=new $e,this.caseRoot.rotation.y=-Math.PI/2,this.caseRoot.position.set(0,-.018,0),this.pivot.add(this.caseRoot),this.cameraGoal=new w,this.lookGoal=new w,this.cameraMoving=!1,this._v1=new w,this._v2=new w,this._half=new w,this._centre=new w,this._hit=new w,this._screwAxis={x:new w(1,0,0),y:new w(0,1,0)},this.setupLights(),this.buildCase()}setupLights(){this.scene.add(new jr(15857145,.75));const e=new Tn(16777215,1.9);e.position.set(1.4,2.4,2.6),this.scene.add(e);const t=new Tn(8246268,1);t.position.set(-2.4,.6,1.2),this.scene.add(t);const n=new Tn(11032055,.9);n.position.set(.4,1.6,-2.4),this.scene.add(n),this.powerLight=new pc(3718648,0,.6),this.powerLight.position.set(...rn.power.anchor),this.caseRoot.add(this.powerLight)}buildCase(){const e=hu({xray:!0});this.caseGroup=e.caseGroup,this.sideGlass=e.sideGlass,this.caseGroup.position.set(0,0,0),this.caseGroup.quaternion.identity(),this.caseGroup.scale.set(1,1,1),this.caseRoot.add(this.caseGroup),this.pivot.updateMatrixWorld(!0),this.caseGroup.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1)}),this.buildZoneMarkers(),this.setGlass(!0,!0),this.focusCase(),this.snapCamera()}buildZoneMarkers(){const e=new Ie(1,1,1);Object.entries(rn).forEach(([t,n])=>{const i=new xe(e,new At({color:Xo.hint,transparent:!0,opacity:0,depthWrite:!1}));i.position.set(...n.anchor),i.scale.set(Math.max(n.size[0],.022),Math.max(n.size[1],.022),Math.max(n.size[2],.022)),i.visible=!1,i.renderOrder=5,i.userData.zoneId=t,i.userData.placeholder=!0,this.caseRoot.add(i),this.zoneMeshes.set(t,i),this.zoneList.push(i)})}setGlass(e,t=!1){this.glassOn=e,this.glassGoal=e?1:0,t&&(this.glassT=this.glassGoal,this.applyGlass())}applyGlass(){this.sideGlass&&(this.sideGlass.visible=this.glassT>.02,this.sideGlass.position.x=mx+(1-this.glassT)*gx)}beginOrbit(e,t){this.orbiting=!0,this._orbitLast.x=e,this._orbitLast.y=t,this._orbitDist=this.camera.position.distanceTo(this.lookGoal),this.cameraMoving=!1}orbitBy(e,t){if(!this.orbiting)return;const n=.0075;this.orbitYaw-=e*n,this.orbitPitch=ri.clamp(this.orbitPitch-t*n,-1.2,1.2);const i=this._orbitDist,s=Math.cos(this.orbitPitch);this.camera.position.set(this.lookGoal.x+i*Math.sin(this.orbitYaw)*s,this.lookGoal.y+i*Math.sin(this.orbitPitch),this.lookGoal.z+i*Math.cos(this.orbitYaw)*s),this.camera.lookAt(this.lookGoal)}endOrbit(){this.orbiting=!1}get isOrbiting(){return this.orbiting}get isOrbitingOff(){return Math.abs(this.orbitYaw)>.03||Math.abs(this.orbitPitch)>.03}resetView(){this.orbitYaw=0,this.orbitPitch=0,this._refocus()}focusCase(){this._lastFocusZone=null,this.frameBox(new gt(new w(...sh.min),new w(...sh.max)),1.18)}focusZone(e){const t=rn[e];if(!t)return this.focusCase();this._lastFocusZone=e;const n=.05,i=new w(Math.max(t.size[0],.03)/2+n,Math.max(t.size[1],.03)/2+n,Math.max(t.size[2],.03)/2+n),s=new w(...t.anchor);this.frameBox(new gt(s.clone().sub(i),s.clone().add(i)),1.35)}setFocusZone(e){e?this.focusZone(e):this.focusCase()}frameBox(e,t){this.caseRoot.updateMatrixWorld(!0);const n=new gt;for(let h=0;h<8;h++)n.expandByPoint(this._v1.set(h&1?e.max.x:e.min.x,h&2?e.max.y:e.min.y,h&4?e.max.z:e.min.z).applyMatrix4(this.caseRoot.matrixWorld));const i=n.getSize(new w),s=n.getCenter(new w),o=Math.tan(ri.degToRad(this.camera.fov)/2),a=o*Math.max(this.camera.aspect,.2),c=(Math.max(i.y/2/o,i.x/2/a)*t+i.z/2)/this.zoom;this.lookGoal.copy(s);const l=Math.cos(this.orbitPitch);this.cameraGoal.set(s.x+c*Math.sin(this.orbitYaw)*l,s.y+c*Math.sin(this.orbitPitch),s.z+c*Math.cos(this.orbitYaw)*l),this.cameraMoving=!0}zoomBy(e){const t=ri.clamp(this.zoom*Math.pow(1.15,-e),_x,vx);return Math.abs(t-this.zoom)<1e-4?this.zoom:(this.zoom=t,this._refocus(),this.zoom)}resetZoom(){this.zoom=1,this._refocus()}_refocus(){this._lastFocusZone?this.focusZone(this._lastFocusZone):this.focusCase(),this.snapCamera()}snapCamera(){this.camera.position.copy(this.cameraGoal),this.camera.lookAt(this.lookGoal),this.cameraMoving=!1}setPointer(e,t){const n=this.canvas.getBoundingClientRect();return!n.width||!n.height?!1:(this.pointerNdc.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),this.pointerInside=e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom,this.pointerInside)}clearPointer(){this.pointerInside=!1}pointerWorld(){this.raycaster.setFromCamera(this.pointerNdc,this.camera);const e=this._v2.set(0,0,1).applyQuaternion(this.camera.quaternion).negate();return this.pointerPlane.setFromNormalAndCoplanarPoint(e,this.lookGoal),this.raycaster.ray.intersectPlane(this.pointerPlane,this._hit)?(this.caseRoot.updateMatrixWorld(!0),this.caseRoot.worldToLocal(this._hit.clone())):null}isOverZone(e,t=24){const n=rn[e],i=this.zoneMeshes.get(e);if(!n||!i||!this.pointerInside)return!1;this.pivot.updateMatrixWorld(!0),i.updateMatrixWorld(!0);const s=this.canvas.getBoundingClientRect();if(!s.width||!s.height)return!1;const o=m=>{const p=m.clone().project(this.camera);return[(p.x+1)/2*s.width,(-p.y+1)/2*s.height,p.z]},a=new w;i.getWorldPosition(a);const[c,l,h]=o(a);if(!Number.isFinite(c)||!Number.isFinite(l)||h>1)return!1;const u=(this.pointerNdc.x+1)/2*s.width,d=(-this.pointerNdc.y+1)/2*s.height,f=new w(Math.max(n.size[0],.03)/2,Math.max(n.size[1],.03)/2,Math.max(n.size[2],.03)/2);let g=0,_=0;for(let m=0;m<8;m++){const[p,S]=o(this._v1.set(a.x+(m&1?f.x:-f.x),a.y+(m&2?f.y:-f.y),a.z+(m&4?f.z:-f.z)));g=Math.max(g,Math.abs(p-c)),_=Math.max(_,Math.abs(S-l))}return g=Math.max(g,12),_=Math.max(_,12),Math.abs(u-c)<=g+t&&Math.abs(d-l)<=_+t}get caseInterior(){if(!this._interior){const e=ii.sheet+.004;this._interior=new gt(new w(-.21/2+e,e,-.45/2+e),new w(ii.width/2-e,ii.feet+ii.height-e,ii.depth/2-e))}return this._interior}setGhostItem(e){return this.clearGhost(),e?this._loadFitted(e).then(t=>{if(!t||this.disposed)return!1;const n=new $e;return n.add(t),n.visible=!1,this.caseRoot.add(n),this.ghost={item:e,group:n,zoneId:null,mountZone:null,bounds:null,centreOffset:new w,half:new w},!0}):Promise.resolve(!1)}clearGhost(){this.ghost&&(this.caseRoot.remove(this.ghost.group),this.ghost=null),this.activeZone&&this.setZoneState(this.activeZone,"active")}get ghostOverTarget(){return!!(this.ghost&&this.ghost.zoneId)}zoneAnchorFor(e){const t=rn[e];if(!t)return null;if(!t.slots||!t.slots.length)return t.anchor;let n=0;for(const i of this.placedParts.values())i.zoneId===e&&n++;return t.slots[Math.min(n,t.slots.length-1)]}_applyGhostMount(e,t){const n=this.ghost;if(n.mountZone===e)return;const i=ih(t);i&&n.group.quaternion.copy(i),n.group.position.set(0,0,0),n.group.updateMatrixWorld(!0);const s=new gt().setFromObject(n.group),o=new ke().copy(n.group.parent.matrixWorld).invert(),a=new gt;for(let c=0;c<8;c++)a.expandByPoint(this._v1.set(c&1?s.max.x:s.min.x,c&2?s.max.y:s.min.y,c&4?s.max.z:s.min.z).applyMatrix4(o));n.bounds=a,n.centreOffset.copy(a.getCenter(this._centre)),n.half.copy(a.getSize(this._half)).multiplyScalar(.5),n.mountZone=e}updateGhost(e,t=!0){if(!this.ghost)return;if(!t||!e||!this.pointerInside||this.orbiting){this.ghost.group.visible=!1,this.ghost.zoneId=null;return}const n=this.pointerWorld();if(!n)return;const i=rn[e],s=this.isOverZone(e);this.ghost.group.visible=!0;const o=this.zoneAnchorFor(e)||i.anchor;this._applyGhostMount(e,i),s?(this.ghost.group.position.set(...o).sub(this.ghost.centreOffset),this.ghost.zoneId=e,this.setZoneState(e,"active")):(this.ghost.group.position.copy(n),this.ghost.group.position.lerp(this._v1.fromArray(o),.16),this.ghost.zoneId=null,this.setZoneState(e,"hint")),this.clampGhostInside()}clampGhostInside(){if(!this.ghost)return;const e=this.caseInterior,{centre:t,half:n}=this._mountedExtents(),i=this.ghost.group.position,s=(o,a,c)=>a>c?(a+c)/2:ri.clamp(o,a,c);i.x=s(i.x,e.min.x-t.x+n.x,e.max.x-t.x-n.x),i.y=s(i.y,e.min.y-t.y+n.y,e.max.y-t.y-n.y),i.z=s(i.z,e.min.z-t.z+n.z,e.max.z-t.z-n.z)}_mountedExtents(){const e=this.ghost;return{centre:(e==null?void 0:e.centreOffset)||this._centre.set(0,0,0),half:(e==null?void 0:e.half)||this._half.set(0,0,0)}}_centreOnAnchor(e,t){e.position.set(0,0,0),e.updateMatrixWorld(!0);const n=new gt().setFromObject(e).getCenter(new w);e.position.set(...t).sub(n)}_mountedHalfExtent(){return this._mountedExtents().half}setZoneState(e,t){Object.entries(this.zoneMeshes).forEach(([n,i])=>{const s=this.lockedZone===n,o=n===e;i.material.color.setHex(s?Xo.locked:o?Xo[t]:16777215),i.visible=!1})}clearZoneStates(){this.zoneMeshes.forEach(e=>{e.visible=!1,e.material.opacity=0})}showScrews(e,t){this.hideScrews();const n=rn[e];if(!n||!t)return;const i=n.face||[1,0,0],s=n.faceLift??.008,o=Math.abs(i[1])>.5,a=i[2]<-.5,c=new $e,l=new Qe({color:16498468,emissive:8016384,emissiveIntensity:1.3,roughness:.35,metalness:.85}),h=new At({color:16498468,transparent:!0,opacity:.65,depthWrite:!1}),u=new Ft(.008,.007,.005,14),d=new Wn(.014,.0022,8,22),f=(n.screwPts||this._gridPoints(n,t)).slice(0,t);f.forEach(([g,_])=>{const m=[...n.anchor];o?(m[1]+=s,m[2]+=g,m[0]+=_):a?(m[2]-=s,m[0]+=g,m[1]+=_):(m[0]+=i[0]*s,m[1]+=g,m[2]+=_);const p=new $e,S=new xe(u,l),x=new xe(d,h);o?(x.rotation.x=Math.PI/2,x.position.y=8e-4):a?(S.rotation.x=Math.PI/2,x.position.z=-8e-4):(S.rotation.z=Math.PI/2,x.rotation.y=Math.PI/2,x.position.x=8e-4*Math.sign(i[0]||1)),p.add(S,x),p.position.set(...m),p.userData.screwAxis=o?this._screwAxis.y:this._screwAxis.x,c.add(p),this.screwHolders.push(p)}),this.caseRoot.add(c),this.screwGroups.set(e,{group:c,remaining:Math.min(t,f.length),total:t})}_gridPoints(e,t){const n=[],i=Math.ceil(Math.sqrt(t));for(let s=0;s<t;s++){const o=s%i,a=Math.floor(s/i),c=Math.ceil(t/i);n.push([c===1?0:(a/(c-1)-.5)*e.size[1]*.7,i===1?0:(o/(i-1)-.5)*e.size[2]*.7])}return n}hideScrews(e){(e?[e]:[...this.screwGroups.keys()]).forEach(n=>{const i=this.screwGroups.get(n);i&&this.caseRoot.remove(i.group),this.screwGroups.delete(n)}),this.screwHolders=[]}get screwsRemaining(){let e=0;return this.screwGroups.forEach(t=>{e+=t.remaining}),e}screwsFor(e){const t=this.screwGroups.get(e);return t?t.remaining:0}hitScrew(e,t,n){const i=this.screwGroups.get(n);if(!i||i.remaining===0)return"none";const s=this.canvas.getBoundingClientRect();if(!s.width||!s.height)return"miss";const o=e-s.left,a=t-s.top;let c=null,l=1/0;if(i.group.children.forEach(u=>{if(u.userData.driven)return;const d=new w;u.getWorldPosition(d);const f=d.project(this.camera);if(f.z>1)return;const g=(f.x+1)/2*s.width,_=(-f.y+1)/2*s.height,m=Math.hypot(g-o,_-a);m<l&&(l=m,c=u)}),!c)return"none";const h=i.remaining===1?90:36;return l>h?"miss":(c.userData.driven=!0,c.userData.driving=1e-4,i.remaining--,i.remaining===0&&this.hideScrews(n),"tightened")}placePart(e,t,n){const i=rn[t];return i?this._loadFitted(e).then(s=>{if(!s||this.disposed)return!1;s.traverse(c=>{c.isMesh&&(c.castShadow=!1,c.receiveShadow=!1)});const o=ih(i);o&&s.quaternion.copy(o);const a=new $e;return a.add(s),this._centreOnAnchor(a,this.zoneAnchorFor(t)),this.caseRoot.add(a),this.placedParts.set(n,{item:e,zoneId:t,group:a}),this.lockedZone=t,this.setZoneState(t,"locked"),!0}):Promise.resolve(!1)}_loadFitted(e){return Qr(e.modelPath).then(t=>{if(!t)return console.warn(`Build zone could not load ${e.name}`),null;const{group:n}=Zs(t,Ks(e));return n})}hasPart(e){return this.placedParts.has(e)}partAt(e){for(const[t,n]of this.placedParts)if(n.zoneId===e)return t;return null}removePart(e){const t=this.placedParts.get(e);return t?(this.caseRoot.remove(t.group),this.placedParts.delete(e),this.lockedZone===t.zoneId&&(this.lockedZone=null),!0):!1}clearParts(){[...this.placedParts.keys()].forEach(e=>this.removePart(e))}flashZone(e){const t=this.zoneMeshes.get(e);t&&(t.userData.flash=.55)}setPower(e){this.powered=e,e||(this.powerLight.intensity=0)}resize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;if(!e||!t)return;const n=Math.floor(e*this.pixelRatio),i=Math.floor(t*this.pixelRatio);(this.canvas.width!==n||this.canvas.height!==i)&&this.renderer.setSize(e,t,!1);const s=e/t;Math.abs(s-this.camera.aspect)>1e-6&&(this.camera.aspect=s,this.camera.updateProjectionMatrix(),this.cameraMoving||this._refocus())}setFocusZone(e){e?this.focusZone(e):this.focusCase()}update(e,t){if(Math.abs(this.glassT-this.glassGoal)>.001&&(this.glassT+=(this.glassGoal-this.glassT)*Math.min(1,e*6),this.applyGlass()),this.cameraMoving){const i=Math.min(1,e*5.5);this.camera.position.lerp(this.cameraGoal,i),this.camera.position.distanceTo(this.cameraGoal)<.004?this.snapCamera():this.camera.lookAt(this.lookGoal)}for(let i=0;i<this.screwHolders.length;i++){const s=this.screwHolders[i],o=s.userData;o.driving===void 0||o.driving>=1||(o.driving=Math.min(1,o.driving+e*4.5),o.screwAxis&&s.rotateOnAxis(o.screwAxis,e*30),s.scale.setScalar(1-o.driving*.2),o.driving>=1&&(delete o.driving,s.scale.setScalar(.55),s.children[1]&&(s.children[1].visible=!1)))}const n=.5+.5*Math.sin(t*.005);for(let i=0;i<this.zoneList.length;i++){const s=this.zoneList[i];if(!s.visible)continue;let o=s.userData.zoneId===this.lockedZone?.26:.18;s.userData.zoneId===this.activeZone&&(o=.2+n*.1),s.userData.flash>0&&(s.userData.flash=Math.max(0,s.userData.flash-e),o=Math.max(o,.55)),s.material.opacity=o}this.powered&&(this.powerLight.intensity=1.1+Math.sin(t*.004)*.3),this.renderer.render(this.scene,this.camera)}finalize(){this.hideScrews(),this.clearZoneStates(),this.clearGhost(),this.setGlass(!0,!0),this.setPower(!0),this.caseRoot.updateMatrixWorld(!0);const e=new $e;e.name="assembledPC",e.position.copy(this.caseRoot.position),e.quaternion.copy(this.caseRoot.quaternion),e.scale.copy(this.caseRoot.scale);const t=this.caseGroup.clone(!0);t.position.copy(this.caseGroup.position),t.quaternion.copy(this.caseGroup.quaternion),t.scale.copy(this.caseGroup.scale),t.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),t.name="assembledCase",e.add(t);const n=[];this.placedParts.forEach((s,o)=>{const a=s.group.clone(!0);a.position.copy(s.group.position),a.quaternion.copy(s.group.quaternion),a.scale.copy(s.group.scale),a.name="installedPart",e.add(a),n.push({key:o,item:s.item,zoneId:s.zoneId}),this.caseRoot.remove(s.group)}),this.placedParts.clear(),this.lockedZone=null;const i=t.getObjectByName("sideGlass")||null;return{group:e,parts:n,glass:i}}dispose(){this.disposed=!0,this.clearGhost(),this.clearParts(),this.hideScrews(),this.caseRoot&&this.pivot.remove(this.caseRoot),this.renderer.dispose(),this.renderer.forceContextLoss&&this.renderer.forceContextLoss()}}class yx{constructor({size:e=128}={}){this.size=e,this.cache=new Map,this.pending=new Map,this.renderer=null,this.scene=null,this.camera=null,this.unavailable=!1}_ensureContext(){if(this.renderer||this.disposed)return!!this.renderer;try{this.renderer=new Jr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(this.size,this.size,!1),this.renderer.setClearColor(0,0),this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1.15}catch(n){return this.renderer=null,this.unavailable=!0,console.warn("Thumbnail context unavailable:",n),!1}this.scene=new Kr,this.camera=new Nt(35,1,.01,100);const e=new Tn(16777215,2.4);e.position.set(2,4,3),this.scene.add(e);const t=new Tn(3718648,1.6);return t.position.set(-3,-1,-2),this.scene.add(t),this.scene.add(new jr(16777215,.85)),!0}get(e){if(!e||this.disposed||this.unavailable)return Promise.resolve(null);if(this.cache.has(e.id))return Promise.resolve(this.cache.get(e.id));if(this.pending.has(e.id))return this.pending.get(e.id);const t=new Promise(n=>{let i=!1;const s=o=>{i||(i=!0,n(o))};try{if(!this._ensureContext())return s(null)}catch(o){return console.warn(`Thumbnail context failed for ${e.name}:`,o),s(null)}Qr(e.modelPath).then(o=>{if(!o)return s(null);try{const{group:a,size:c}=Zs(o,Ks(e)),l=Math.max(...c.toArray())||1,h=new $e;h.rotation.x=.28;const u=new $e;u.scale.setScalar(this.size*.78/(l*1.9)),u.add(a),h.add(u),this.scene.add(h),this.scene.updateMatrixWorld(!0);const f=new gt().setFromObject(h).getSize(new w).multiplyScalar(.5),g=Math.tan(ri.degToRad(this.camera.fov)/2),_=Math.max(f.y/g,f.x/g)*1.12+f.z;this.camera.position.set(0,0,_),this.camera.lookAt(0,0,0),this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera);const m=this.renderer.domElement.toDataURL("image/png");this.scene.remove(h),this.cache.set(e.id,m),s(m)}catch(a){console.warn(`Thumbnail failed for ${e.name}:`,a),s(null)}}).catch(()=>s(null))});return this.pending.set(e.id,t),t.then(()=>this.pending.delete(e.id),()=>this.pending.delete(e.id)),t}prime(e){e.forEach(t=>this.get(t))}dispose(){this.disposed=!0,this.cache.clear(),this.pending.clear(),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss&&this.renderer.forceContextLoss(),this.renderer=null),this.scene=null,this.camera=null}}const Or=[{step:1,zone:"glass",action:"glass",shortName:"Tháo nắp kính cường lực",title:"Bước 1 · Tháo nắp kính cường lực",instruction:"Nới 4 núm vặn ở góc rồi kéo nắp kính ra khỏi thùng. Nhìn qua nắp kính bạn thấy toàn bộ ruột thùng — hãy tháo nó ra trước khi lắp linh kiện.",tip:"Bấm nút THÁO NẮP KÍNH, hoặc bấm trực tiếp vào tấm kính bên trong khung Build Zone.",accepts:[],need:0},{step:2,zone:"motherboard",action:"screw",accepts:["tag:Motherboard"],need:1,shortName:"Lắp bo mạch chủ vào chân ốc đồng",title:"Bước 2 · Lắp bo mạch chủ",instruction:"Đặt bo mạch chủ ATX lên các chân ốc đồng phía trong khay bo mạch, vuông vồn theo các lỗ khoan, rồi siết chặt từng con ốc để cố định.",tip:"Lấy bo mạch ra khỏi kho, rê chuột vào Build Zone cho model theo con trỏ, rồi bấm chuột trái khi vị trí đã khớp vùng màu xanh. Số ốc sẽ hiện đúng bằng số chân ốc thực sự có trên khay.",shortHint:"Chọn bo mạch chủ → đặt vào khay → siết hết ốc"},{step:3,zone:"cpu",action:"seat",accepts:["tag:CPU"],need:1,shortName:"Lắp CPU vào socket",title:"Bước 3 · Lắp bộ vi xử lý",instruction:"Nhận CPU theo góc tam giác vàng, hạ nhẹ xuống socket rồi đóng khóa lưỡi cài. Tuyệt đối không dùng lực ép mạnh xuống socket.",tip:"Bấm chuột trái một lần nữa khi model đã nằm đúng vị trí để ấn CPU xuống socket và khóa lại.",shortHint:"Ghép đúng góc tam giác vàng rồi ấn xuống"},{step:4,zone:"cooler",action:"paste",accepts:["tag:CPU Cooler"],need:1,shortName:"Bôi keo và lắp tản nhiệt",title:"Bước 4 · Bôi keo tản nhiệt & lắp tản khí",instruction:"Bôi một lượng keo tản nhiệt cỡ hạt đậu lên nắp lưng CPU, đặt tản nhiệt lên socket rồi siết 4 ốc theo hình chữ X để ép đều.",tip:"Quạt tản nhiệt phải hướng về phía quạt trước case để hút khí mát từ ngoài vào.",shortHint:"Bôi keo → đặt tản → siết 4 ốc hình chữ X"},{step:5,zone:"ram",action:"seat",accepts:["tag:RAM"],need:2,shortName:"Cắm thanh RAM vào khe Dual-Channel",title:"Bước 5 · Cắm thanh RAM",instruction:"Cắm 2 thanh RAM vào khe số 2 và khe số 4 (DIMM A2 & B2) để kích hoạt kênh đôi, rồi ấn hai đầu khe xuống cho tới khi cả hai bên khớp vào.",tip:"Khe DIMM nằm sát mép bo mạch về phía tấm che nguồn. Phải 2 thanh cho kênh đôi.",shortHint:"2 thanh vào khe A2 & B2"},{step:6,zone:"ssd",action:"screw",accepts:["tag:Storage"],need:1,shortName:'Lắp ổ cứng SSD 2.5"',title:"Bước 6 · Lắp ổ cứng thể rắn",instruction:'Đặt SSD 2.5" vào khay đĩa cứng trên tấm che nguồn, cắm cáp SATA vào đầu nối rồi siết 2 ốc phía đuôi ổ.',tip:"SSD không có đầu đọc đầu, nên có thể cắm theo cả hai chiều mà không sợ hỏng.",shortHint:"Đặt vào khay → cắm SATA → siết 2 ốc"},{step:7,zone:"psu",action:"screw",accepts:["tag:Power Supply"],need:1,shortName:"Lắp bộ nguồn vào hộc đáy",title:"Bước 7 · Lắp bộ nguồn",instruction:"Lắp nguồn ATX vào hộc dưới đáy với quạt hướng xuống lưới lọc bụi, cắm dây nguồn AC vào mặt sau rồi siết 4 ốc vào thùng.",tip:"Nguồn nên lắp ở chế độ semi-modular: chỉ cắm những dây thật sự cần để gọn gàng trong thùng.",shortHint:"Quạt hướng xuống → siết 4 ốc"},{step:8,zone:"gpu",action:"screw",accepts:["tag:GPU"],need:1,shortName:"Lắp card đồ họa vào khe PCIe x16",title:"Bước 8 · Lắp card đồ họa",instruction:"Rút chân chốt khe PCIe x16, cắm card đồ họa vào khe gần CPU nhất, ấn card xuống hết đáy rồi siết 2 ốc vào thanh chốt phía sau thùng.",tip:"Card đồ họa rất nặng, giữ cả hai tay khi ấn và luôn kiểm tra mọi đầu cắm đã chặt trước khi đóng thùng.",shortHint:"Cắm khe PCIe x16 → siết chốt giữ card"},{step:9,zone:"glass",action:"glass",accepts:[],need:0,shortName:"Đóng nắp kính bảo vệ",title:"Bước 9 · Đóng nắp kính",instruction:"Đặt nắp kính cường lực lại đúng vị trí rồi siết 4 núm vặn ở góc để chốt chặt.",tip:"Kiểm tra không còn khe hở giữa kính và khung thùng trước khi bật nguồn.",shortHint:"Đặt lại kính → siết 4 núm"}],xn=Or.length;function Rr(r,e){return!r||!e?!1:r.accepts.some(t=>{if(t.startsWith("tag:")){const n=t.slice(4).toLowerCase();return(e.tag||"").toLowerCase()===n}return t===e.id})}function Mx(r,e){if(!r||!e)return[];const t=[];for(const n of r.accepts||[]){const i=e.filter(a=>n.startsWith("tag:")?(a.tag||"").toLowerCase()===n.slice(4).toLowerCase():n===a.id);if(!i.length)continue;const s=i[0].tag,o=r.need||1;t.push({name:i[0].name,tag:s,count:o,label:o>1?`${i[0].name} × ${o}`:i[0].name,variants:i.length})}return t}const Sx=[{at:900,state:"NO_SIGNAL",text:"Chua c� t�n hi?u � dang ch? c�p m�n h�nh"},{at:2400,state:"POST",text:"POST: dang nh?n di?n CPU, RAM, ? c?ng"},{at:5600,state:"OS",text:"POST th�nh c�ng � h? th?ng d� kh?i d?ng"}],bx={motherboard:"?",cpu:"?",cooler:"?",ram:"?",gpu:"?",storage:"?",psu:"?"};class Tx{constructor({inventoryUI:e,room:t,onRequestLock:n,onAssembled:i}){this.inventoryUI=e,this.room=t,this.onRequestLock=n,this.onAssembled=i,this.isOpen=!1,this.completed=new Set,this.currentStep=1,this.selectedItem=null,this.pendingPress=null,this.orbiting=!1,this._orbitLast={x:0,y:0},this.pasteApplied=!1,this.postTimers=[],this.isFinished=!1,this._v=new w,this.thumbnails=new yx({size:144}),this.dom={modal:document.getElementById("build-mode-modal"),canvas:document.getElementById("build-case-canvas"),close:document.getElementById("btn-close-build-mode"),stepBadge:document.getElementById("build-step-badge"),stepTitle:document.getElementById("build-step-title"),stepDesc:document.getElementById("build-step-desc"),stepTip:document.getElementById("build-step-tip"),stepParts:document.getElementById("build-step-parts"),stepHint:document.getElementById("build-step-hint"),progress:document.getElementById("build-progress-fill"),checklist:document.getElementById("build-checklist"),list:document.getElementById("build-slot-list"),listEmpty:document.getElementById("build-slot-empty"),glassBtn:document.getElementById("btn-toggle-glass"),glassTag:document.getElementById("glass-status-tag"),zoomTag:document.getElementById("build-zoom-tag"),turnTag:document.getElementById("build-turn-tag"),hint:document.getElementById("build-zone-hint"),toast:document.getElementById("build-toast"),actionBar:document.getElementById("build-action-bar"),resetBtn:document.getElementById("btn-build-reset"),finishBtn:document.getElementById("btn-build-finish")},this.scene=this.dom.canvas?new xx(this.dom.canvas):null,this.setupDOM()}setupDOM(){const{close:e,glassBtn:t,resetBtn:n,finishBtn:i,canvas:s,modal:o}=this.dom;o&&(e==null||e.addEventListener("click",()=>this.close()),t==null||t.addEventListener("click",()=>this.toggleGlass()),n==null||n.addEventListener("click",()=>this.reset()),i==null||i.addEventListener("click",()=>this.finishBuild()),o.addEventListener("click",a=>{a.target===o&&this.close()}),window.addEventListener("keydown",a=>{if(this.isOpen){if(a.code==="Escape"){a.preventDefault(),this.close();return}a.code==="Home"&&(a.preventDefault(),this.resetView())}}),window.addEventListener("pointerup",()=>this.endOrbit()),window.addEventListener("pointercancel",()=>this.endOrbit()),window.addEventListener("blur",()=>this.endOrbit()),s&&(s.addEventListener("pointermove",a=>this.onPointerMove(a)),s.addEventListener("pointerenter",a=>this.onPointerMove(a)),s.addEventListener("pointerleave",()=>this.onPointerLeave()),s.addEventListener("pointerdown",a=>this.onPointerDown(a)),s.addEventListener("pointerup",a=>this.onPointerUp(a)),s.addEventListener("contextmenu",a=>a.preventDefault()),s.addEventListener("wheel",a=>{a.preventDefault(),this.scene&&(this.scene.zoomBy(a.deltaY/100),this.setZoomBadge())},{passive:!1})))}setZoomBadge(){const e=this.dom.zoomTag;!e||!this.scene||(e.textContent=`?? Thu ph�ng ${Math.round(this.scene.zoom*100)}%`)}setViewBadge(){const e=this.dom.turnTag;if(!e||!this.scene)return;const t=s=>Math.round(ri.radToDeg(s));if(!this.scene.isOrbitingOff){const s="?? Chu?t ph?i: xoay g�c nh�n";e.textContent!==s&&(e.textContent=s),e.classList.remove("turned");return}const i=`?? G�c nh�n  ?${t(this.scene.orbitYaw)}�  ?${t(this.scene.orbitPitch)}�`;e.textContent!==i&&(e.textContent=i),e.classList.add("turned")}open(){var e,t,n;this.dom.modal&&(this.dom.modal.classList.add("active"),this.isOpen=!0,mt.playClick(),(e=this.scene)==null||e.resetView(),this.setViewBadge(),this.renderStep(),this.renderChecklist(),this.renderSlots(),this.scene&&(this.scene.resize(),this.scene.setFocusZone(((t=this.activeStep())==null?void 0:t.zone)||null),this.scene.snapCamera(),this.scene.setZoneState(((n=this.activeStep())==null?void 0:n.zone)||null,"active")),this.updateGlassUi(),this.warnIfHardwareMissing())}warnIfHardwareMissing(){const e=this.activeStep();if(!e||!e.accepts.length)return;const t=this.availableItems(),n=[];for(const i of e.accepts)(i.startsWith("tag:")?t.find(o=>(o.tag||"").toLowerCase()===i.slice(4).toLowerCase()):t.find(o=>o.id===i))||n.push(i.startsWith("tag:")?i.slice(4):i);n.length&&this.setToast(`Bu?c ${e.step} c?n ${n.join(" / ")} � h�y nh?t t? b�n linh ki?n v� b? v�o t�i (ph�m E) tru?c d�.`,"warn")}close(){var e,t,n;this.dom.modal&&(this.clearPostTimers(),this.dom.modal.classList.remove("active"),this.isOpen=!1,this.endOrbit(),(e=this.scene)==null||e.clearPointer(),(t=this.scene)==null||t.clearGhost(),this.setZoneHint(null),this.setToast(null),(n=this.onRequestLock)==null||n.call(this))}reset(){var e;this.completed.clear(),this.currentStep=1,this.isFinished=!1,this.pendingPress=null,this.pasteApplied=!1,this.clearPostTimers(),this.scene&&(this.returnPartsToBackpack(),this.scene.hideScrews(),this.scene.setPower(!1),this.scene.lockedZone=null,this.scene.setGlass(!0,!0),this.scene.setFocusZone(((e=this.activeStep())==null?void 0:e.zone)||null),this.scene.snapCamera()),this.selectedItem=null,this.room.setMonitorState("OFF"),this.renderStep(),this.renderChecklist(),this.renderSlots(),this.updateGlassUi(),this.setToast("�� d?t l?i to�n b? quy tr�nh l?p r�p.","info")}returnPartsToBackpack(){if(!this.scene)return 0;const e=[...this.scene.placedParts.values()].map(t=>t.item);return e.forEach(t=>this.inventoryUI.addItem(t)),this.scene.clearParts(),e.length}finishBuild(){if(!this.scene||this.isFinished)return null;if(this.completed.size<xn)return this.setToast(`C�n ${xn-this.completed.size} bu?c chua ho�n th�nh.`,"warn"),null;if(!this.scene.placedParts.size)return this.setToast("Chua c� linh ki?n n�o n?m trong th�ng.","warn"),null;mt.playSnap();const e=this.scene.finalize();return this.isFinished=!0,this.scene.clearZoneStates(),this.dom.finishBtn&&(this.dom.finishBtn.style.display="none"),this.dom.resetBtn&&(this.dom.resetBtn.style.display="none"),this.dom.glassBtn&&(this.dom.glassBtn.style.display="none"),this.setZoneHint(null),this.setToast("�� v?n n?p k�nh. M�y t�nh c?a b?n d� s?n s�ng!","ok"),this.renderStep(),this.renderActionBar(),this.close(),this.onAssembled&&this.onAssembled(e),e}activeStep(){return Or.find(e=>e.step===this.currentStep)||null}isStepDone(e){return this.completed.has(e)}get allDone(){return this.completed.size>=xn}completeStep(e,t){var n,i;if(!this.completed.has(e)){if(this.completed.add(e),this.pendingPress=null,this.pasteApplied=!1,mt.playSnap(),this.setToast(t||`Ho�n th�nh bu?c ${e}.`,"ok"),this.renderStep(),this.renderChecklist(),this.renderSlots(),this.completed.size>=xn){this.currentStep=xn,this.onPowered();return}this.currentStep=Math.max(this.currentStep,e+1),(i=this.scene)==null||i.setFocusZone(((n=this.activeStep())==null?void 0:n.zone)||null),this.updateGhostItem()}}pressedCount(e){var n;let t=0;return(n=this.scene)==null||n.placedParts.forEach(i=>{i.zoneId===e&&i.pressed&&t++}),t}get ghostArmed(){if(!this.selectedItem)return!1;const e=this.activeStep();return!(!e||!e.need||this.scene.screwsFor(e.zone)>0||this.pendingPress)}onPointerMove(e){var t;if(this.scene){if(this.orbiting){const n=e.clientX-this._orbitLast.x,i=e.clientY-this._orbitLast.y;this._orbitLast.x=e.clientX,this._orbitLast.y=e.clientY,this.scene.orbitBy(n,i),this.setViewBadge();return}this.scene.setPointer(e.clientX,e.clientY),this.scene.updateGhost((t=this.activeStep())==null?void 0:t.zone,this.ghostArmed),this.updateCursorHint()}}onPointerLeave(){var e;this.scene&&(this.orbiting||(this.scene.clearPointer(),this.scene.updateGhost((e=this.activeStep())==null?void 0:e.zone,this.ghostArmed),this.setZoneHint(null)))}onPointerUp(e){e.button===2&&this.endOrbit()}resetView(){this.scene&&(this.endOrbit(),this.scene.resetView(),this.setViewBadge(),this.setToast("�� dua g�c nh�n th�ng m�y v? g�c m?c d?nh."),this.refreshGhost())}endOrbit(){this.orbiting&&(this.scene.setPointer(this._orbitLast.x,this._orbitLast.y),this.orbiting=!1,this.scene.endOrbit(),document.body.classList.remove("build-orbiting"),this.refreshGhost())}refreshGhost(){var e;this.scene&&(this.scene.updateGhost((e=this.activeStep())==null?void 0:e.zone,this.ghostArmed),this.updateCursorHint())}async onPointerDown(e){if(!this.scene)return;if(e.button===2){this.orbiting=!0,this._orbitLast={x:e.clientX,y:e.clientY},this.scene.beginOrbit(e.clientX,e.clientY),document.body.classList.add("build-orbiting");return}if(e.button!==0)return;this.scene.setPointer(e.clientX,e.clientY);const t=this.activeStep();if(!t)return;const n=t.zone;if(this.scene.screwsFor(n)>0){this.scene.hitScrew(e.clientX,e.clientY,n)==="tightened"?(mt.playScrew(),this.renderActionBar(),this.updateCursorHint(),this.scene.screwsFor(n)===0&&this.finishScrewStep(t)):this.setToast("B?m d�ng v�o d?u ?c m�u v�ng d? si?t.","warn");return}if(t.action==="paste"&&this.pendingPress&&!this.pasteApplied){this.scene.isOverZone("cpu")?(this.pasteApplied=!0,this.scene.flashZone("cpu"),mt.playClick(),this.setToast("�� b�i keo t?n nhi?t l�n n?p lung CPU. Gi? si?t 4 ?c c?a t?n kh�.","ok"),this.startScrewStep(t)):this.setToast("B?m v�o v? tr� CPU tr�n bo m?ch d? b�i keo t?n nhi?t.","warn");return}if(t.action==="seat"&&this.pendingPress){if(this.scene.isOverZone(n)){const i=this.scene.placedParts.get(this.pendingPress);i&&(i.pressed=!0),this.scene.flashZone(n),mt.playSnap();const s=this.pressedCount(n);s>=t.need?(this.pendingPress=null,this.completeStep(t.step,s>1?`�� c?m d? ${s} thanh v� k�ch ho?t k�nh d�i.`:"�� l?p v� ?n kh�t v�o socket.")):(this.pendingPress=null,this.setToast(`�� l?p ${s}/${t.need}. Ch?n thanh ti?p theo trong danh s�ch.`,"info"),this.updateGhostItem()),this.renderActionBar()}else this.setToast(`B?m v�o ${rn[n].label.toLowerCase()} d? ?n linh ki?n xu?ng cho kh�t.`,"warn");return}if(t.need===0){this.handleActionStep(t,e);return}if(!this.selectedItem){this.setToast("Ch?n linh ki?n ? danh s�ch b�n ph?i tru?c d�.","warn");return}if(!Rr(t,this.selectedItem)){this.setToast(`${this.selectedItem.name} kh�ng d�ng du?c cho bu?c n�y.`,"warn");return}if(!this.scene.ghostOverTarget){this.setToast(`�ua model t?i ${rn[n].label.toLowerCase()} r?i b?m chu?t tr�i.`,"warn");return}await this.seatPart(t)}async seatPart(e){const t=this.selectedItem,n=e.zone,i=`${n}:${t.id}:${this.pressedCount(n)}`;if(this.scene.placedParts.size&&this.scene.partAt(n)&&[...this.scene.placedParts.values()].filter(o=>o.zoneId===n).length>=e.need){this.setToast("V? tr� n�y d� d? linh ki?n r?i.","warn");return}if(this.scene.clearGhost(),!await this.scene.placePart(t,n,i)){this.setToast("Kh�ng t?i du?c model linh ki?n n�y.","warn"),this.updateGhostItem();return}if(this.scene.flashZone(n),mt.playClick(),this.moveToBackpack(t),this.scene.setFocusZone(n),this.renderActionBar(),e.action==="paste"||e.action==="seat"){this.pendingPress=i,this.setToast(e.action==="paste"?"T?n kh� d� d?t l�n socket. B?m v�o CPU d? b�i keo t?n nhi?t.":"B?m chu?t tr�i l?n n?a v�o v? tr� n�y d? ?n linh ki?n xu?ng cho kh�t.","info"),this.updateGhostItem();return}this.startScrewStep(e)}startScrewStep(e){var n;const t=e.screws??((n=rn[e.zone])==null?void 0:n.screws)??0;if(!t){this.completeStep(e.step);return}this.scene.showScrews(e.zone,t),this.scene.setFocusZone(e.zone),this.setToast(`C�n ${t} ?c. B?m v�o t?ng d?u ?c m�u v�ng d? si?t ch?t.`,"info"),this.renderActionBar(),this.updateGhostItem(),this.updateCursorHint()}finishScrewStep(e){this.scene.hideScrews(e.zone),this.renderActionBar(),this.updateCursorHint(),this.completeStep(e.step,e.action==="paste"?"Keo t?n nhi?t d� b�i v� t?n kh� d� si?t ch?t.":"�� si?t d? ?c, linh ki?n c? d?nh trong th�ng.")}handleActionStep(e,t){const n=e.zone;if(e.action==="glass"){const i=e.step===xn;this.scene.glassOn!==i?this.toggleGlass():this.setToast(i?"N?p k�nh d� du?c l?p l?i. B?m n�t d? th�o ra n?u c?n.":"N?p k�nh d� th�o r?i.","info");return}if(e.action==="display"){this.scene.isOverZone(n)?(this.scene.flashZone(n),mt.playSnap(),this.completeStep(e.step,"�� c?m DisplayPort t? card d? h?a ra m�n h�nh.")):this.setToast("B?m v�o c?ng DisplayPort ? m?t sau th�ng.","warn");return}e.action==="power"&&(this.scene.isOverZone(n)?(this.scene.setPower(!0),this.scene.flashZone(n),mt.playPowerSwitch(),this.room.setMonitorState("NO_SIGNAL"),this.completeStep(e.step,"�� b?t ngu?n. H? th?ng dang ch?y POST..."),this.schedulePost()):this.setToast("B?m v�o n�t ngu?n tr�n n?p tr�n c?a th�ng.","warn"))}schedulePost(){this.clearPostTimers(),Sx.forEach(e=>{this.postTimers.push(setTimeout(()=>{this.room.setMonitorState(e.state),this.setToast(e.text,"info")},e.at))})}clearPostTimers(){this.postTimers.forEach(e=>clearTimeout(e)),this.postTimers=[]}onPowered(){this.setToast("Ch�c m?ng! B?n d� l?p r�p th�nh c�ng d? 12 bu?c.","ok"),this.renderStep(),this.renderChecklist();try{Wo({particleCount:140,spread:80,origin:{y:.6}}),setTimeout(()=>{Wo({particleCount:90,angle:60,spread:55,origin:{x:0}}),Wo({particleCount:90,angle:120,spread:55,origin:{x:1}})},400)}catch(e){console.warn("Confetti unavailable:",e)}}moveToBackpack(e){this.inventoryUI.removeItem(e.id),this.selectedItem=null,this.renderSlots()}availableItems(){return this.inventoryUI.slots.filter(Boolean)}renderSlots(){const{list:e,listEmpty:t}=this.dom;if(!e)return;const n=this.activeStep();e.innerHTML="";const i=this.availableItems();t&&(t.style.display=i.length?"none":"flex"),i.forEach(o=>{var d;const a=n?Rr(n,o):!1,c=((d=this.selectedItem)==null?void 0:d.id)===o.id,l=document.createElement("div");l.className="build-slot"+(a?" usable":"")+(c?" selected":""),l.innerHTML=`
        <div class="build-slot-thumb">
          <img alt="" />
          <span class="build-slot-fallback">${bx[o.categoryKey]||"?"}</span>
        </div>
        <div class="build-slot-text">
          <div class="build-slot-name">${o.name}</div>
          <div class="build-slot-tag tag-${o.categoryKey}">${o.tag}</div>
        </div>
        <div class="build-slot-state">${a?"D�ng du?c":""}</div>
      `,l.addEventListener("click",()=>this.selectSlotItem(o)),e.appendChild(l);const h=l.querySelector("img"),u=this.thumbnails.cache.get(o.id);u?(h.src=u,h.classList.add("ready")):a&&this.thumbnails.get(o).then(f=>{!f||!h.isConnected||(h.src=f,h.classList.add("ready"))}).catch(()=>{})});const s=Or.find(o=>{var a;return o.step===(((a=this.activeStep())==null?void 0:a.step)||0)+1});s&&this.thumbnails.prime(i.filter(o=>Rr(s,o)))}async selectSlotItem(e){const t=this.activeStep();if(mt.playClick(),t&&!Rr(t,e)){this.setToast(`${e.name} kh�ng d�ng du?c cho bu?c ${t.step}.`,"warn");return}this.selectedItem=e,this.renderSlots(),await this.updateGhostItem(e),this.setToast(`�� c?m ${e.name}. R� chu?t trong Build Zone r?i b?m chu?t tr�i d? l?p.`,"info")}async updateGhostItem(e){if(!this.scene)return;if(!e){this.scene.clearGhost(),this.setZoneHint(null);return}const t=this.activeStep();t&&(await this.scene.setGhostItem(e),this.scene.setZoneState(t.zone,"active"),this.scene.updateGhost(t.zone,this.ghostArmed))}updateCursorHint(){if(!this.scene)return;const e=this.activeStep();if(!e)return this.setZoneHint(null);const t=e.zone;if(this.scene.screwsFor(t)>0)return this.setZoneHint("?? B?m v�o d?u ?c v�ng d? si?t ch?t","action");if(e.action==="paste"&&this.pendingPress&&!this.pasteApplied)return this.setZoneHint("??? B?m v�o CPU d? b�i keo t?n nhi?t","action");if(e.action==="seat"&&this.pendingPress)return this.setZoneHint("?? B?m v�o linh ki?n d? ?n xu?ng cho kh�t","action");if(e.need===0){const n={glass:"?? D�ng n�t TH�O / ��NG N?P K�NH",display:"??? B?m v�o c?ng DisplayPort ph�a sau th�ng",power:"? B?m n�t ngu?n tr�n n?p tr�n"};return this.setZoneHint(n[e.action]||"","action")}return this.selectedItem?this.scene.ghostOverTarget?this.setZoneHint(`? ${rn[t].label} � b?m chu?t tr�i d? l?p`,"ready"):this.setZoneHint(`?? �ua t?i ${rn[t].label}`,"idle"):this.setZoneHint("?? Ch?n linh ki?n ? danh s�ch b�n ph?i","idle")}setZoneHint(e,t){const n=this.dom.hint;n&&(n.textContent=e||"",n.className="build-zone-hint"+(e?` show ${t||"idle"}`:""))}renderStep(){const{stepBadge:e,stepTitle:t,stepDesc:n,stepTip:i,stepHint:s,stepParts:o,progress:a}=this.dom,c=this.activeStep();c&&(e&&(e.textContent=`BU?C ${c.step} / ${xn}`),t&&(t.textContent=c.title),n&&(n.textContent=c.instruction),i&&(i.innerHTML=`<strong>?? M?o th?c t?:</strong> ${c.tip}`),s&&(s.textContent=c.shortHint||""),a&&(a.style.width=`${this.completed.size/xn*100}%`),this.renderStepParts(c),this.updateGlassUi(),this.renderActionBar())}renderStepParts(e){var s;const t=this.dom.stepParts;if(!t)return;const n=((s=this.inventoryUI)==null?void 0:s.slots.filter(Boolean))||[],i=Mx(e,n);if(!i.length){t.innerHTML="",t.style.display="none";return}t.style.display="",t.innerHTML=['<div class="build-step-parts-label">?? Linh ki?n c?n chu?n b?</div>',...i.map(o=>`
        <div class="build-step-part-row">
          <span class="build-step-part-tag">${o.tag}</span>
          <span class="build-step-part-name">${o.label}</span>
          ${o.variants>1?`<span class="build-step-part-alt">${o.variants} l?a ch?n</span>`:""}
        </div>`)].join("")}updateGlassUi(){var i;const{glassTag:e,glassBtn:t}=this.dom,n=(i=this.scene)==null?void 0:i.glassOn;e&&(e.textContent=n?"??? N?p k�nh: �ang l?p":"?? N?p k�nh: �� th�o"),t&&(t.textContent=n?"?? Th�o N?p K�nh":"?? L?p L?i N?p K�nh")}toggleGlass(){if(!this.scene)return;const e=!this.scene.glassOn;this.scene.setGlass(e),mt.playSnap(),this.updateGlassUi();const t=this.activeStep();if((t==null?void 0:t.action)==="glass"){const n=t.step===xn;this.scene.glassOn===n&&this.completeStep(t.step,n?"�� d�ng n?p k�nh v� si?t 4 n�m v?n.":"�� th�o n?p k�nh, ru?t th�ng dang m?.")}}renderActionBar(){const e=this.dom.actionBar;if(!e)return;const t=this.activeStep();if(!t){e.innerHTML="";return}const n=[],i=this.scene?this.scene.screwsFor(t.zone):0;if(i>0&&n.push(`<div class="build-chip amber">?? C�n ${i} ?c chua si?t</div>`),t.action==="paste"&&this.pendingPress&&!this.pasteApplied&&n.push('<div class="build-chip cyan">??? C?n b�i keo t?n nhi?t</div>'),t.action==="seat"&&this.pendingPress&&n.push('<div class="build-chip cyan">?? C?n ?n linh ki?n xu?ng</div>'),this.completed.size>=xn&&n.push('<div class="build-chip green">?? �� ho�n th�nh c? 12 bu?c</div>'),this.dom.finishBtn){const s=this.completed.size>=xn&&!this.isFinished;this.dom.finishBtn.style.display=s?"":"none",this.dom.finishBtn.disabled=!s}e.innerHTML=n.join("")}renderChecklist(){const e=this.dom.checklist;e&&(e.innerHTML=Or.map(t=>{const n=this.completed.has(t.step),i=t.step===this.currentStep&&!n;return`
        <div class="build-check${n?" done":""}${i?" current":""}">
          <span class="build-check-num">${n?"?":t.step}</span>
          <span class="build-check-name">${t.shortName}</span>
        </div>
      `}).join(""))}setToast(e,t="info"){const n=this.dom.toast;n&&(n.textContent=e||"",n.className="build-toast"+(e?` show ${t}`:""),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{n.className="build-toast"},4600))}update(e,t){!this.isOpen||!this.scene||this.scene.update(e,t)}}const wx=.06,Ex=4;class Ax{constructor(){this.canvas=document.getElementById("webgl-canvas"),this.clock=new lp,this.initRenderer(),this.initScene(),this.initLighting();const e=document.getElementById("item-preview-canvas");this.previewScene=new hx(e),this.room=new yv(this.scene),this.placedItems=new lx(this.scene),this.loadingBarFill=document.getElementById("loading-bar-fill"),this.loadingText=document.getElementById("loading-text"),this.shelf=new ax(this.scene,{perFrame:4,onProgress:(t,n)=>this.setLoadingProgress(t,n),onReady:()=>this.setLoadingProgress(1,1)}),this.shelf.seedPlaceholders(),this.heldItemManager=new ux(this.camera,this.scene,null),this.inventoryUI=new px(this.previewScene,t=>{this.placedItems.removeItem(t.id),this.shelf.hideItem(t.id);const n=this.heldItemManager.getHeldItem();n&&this.inventoryUI.addItem(n),this.heldItemManager.holdItem(t)},t=>{},t=>{this.dropItemAtCrosshair(t)},()=>{this.controls.lockPointer()}),this.controls=new fx(this.camera,this.canvas,(t,n)=>this.handleWorldInteract(t,n),()=>this.handleStowItem(),()=>{this.inventoryUI.toggle(this.heldItemManager.getHeldItem()),this.inventoryUI.isOpen&&this.controls.unlockPointer()}),this.heldItemManager.setPlayerControls(this.controls),this.buildModeUI=new Tx({inventoryUI:this.inventoryUI,room:this.room,onRequestLock:()=>this.controls.lockPointer(),onAssembled:t=>this.adoptAssembledPC(t)}),this.camera.position.set(0,1.65,1.8),this.controls.pitch=-.2,this.controls.yaw=0,this.loadingDone=!1,this.setLoadingProgress(0,this.shelf.stream.total),this.setupWindowEvents(),this.animate()}setLoadingProgress(e,t){const i=Math.min(1,e/(t||1));this.loadingBarFill&&(this.loadingBarFill.style.width=`${Math.round(i*100)}%`),this.loadingText&&(this.loadingText.textContent=`Đang tải mô hình linh kiện... ${Math.round(i*100)}%`),(i>.12||this.loadingDone)&&this.dismissLoadingScreen()}dismissLoadingScreen(){if(this.loadingDone)return;this.loadingDone=!0;const e=document.getElementById("loading-screen");e&&(e.classList.add("hidden"),setTimeout(()=>e.remove(),600))}initRenderer(){this.renderer=new Jr({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Vs,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=dh,this.renderer.shadowMap.autoUpdate=!1,this.shadowDirty=!0}initScene(){this.scene=new Kr,this.scene.background=new He(922655),this.scene.fog=new nc(922655,.035),this.camera=new Nt(65,window.innerWidth/window.innerHeight,.1,100),this.scene.add(this.camera)}initLighting(){const e=new jr(15857145,.7);this.scene.add(e);const t=new np(14870768,3359061,.5);this.scene.add(t);const n=new Tn(16776171,1.6);n.position.set(-6,5,2),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=16,n.shadow.camera.left=-4,n.shadow.camera.right=4,n.shadow.camera.top=4,n.shadow.camera.bottom=-4,n.shadow.bias=-5e-4,this.scene.add(n);const i=new Tn(14412542,.9);i.position.set(2,4,3),this.scene.add(i);const s=new pc(3718648,1.5,6);s.position.set(3,2.8,0),this.scene.add(s)}dropItemAtCrosshair(e){let t=null;if(this.controls.lastRaycastHit&&this.controls.lastRaycastHit.point)t=this.controls.lastRaycastHit.point.clone();else{const n=new w;this.camera.getWorldDirection(n),n.y=0,n.normalize(),t=this.camera.position.clone().add(n.multiplyScalar(1.3)),t.y=.85}if(t.y=Math.max(.02,t.y),this.touchesFloor(t,this.controls.lastRaycastHit)){this.returnToTable(e);return}this.placedItems.placeItemAt(e,t),this.markWorldChanged()}touchesFloor(e,t){if(e.y<=wx)return!0;let n=(t==null?void 0:t.object)||null;for(;n;){if(n.userData&&n.userData.isFloor)return!0;n=n.parent}return!1}returnToTable(e){this.placedItems.removeItem(e.id),this.shelf.showItem(e.id),this.markWorldChanged(),mt.playClick(),this.showToast(`↩️ ${e.name} đã được trả về bàn linh kiện.`)}adoptAssembledPC(e){if(!e||!e.group)return;const t=this.room.casePlaceholder?this.room.casePlaceholder.position.clone():new w(-.25,.825,-.05),n=this.room.casePlaceholder?this.room.casePlaceholder.rotation.y:-Math.PI/4,i=e.group;i.position.set(t.x,t.y,t.z),i.rotation.y=n,i.updateMatrixWorld(!0),this.scene.add(i),this.room.hideCasePlaceholder();const s=new gt().setFromObject(i).getSize(new w);this.assembledPC={id:"assembled_pc",name:"Máy tính đã lắp ráp",brand:"PC Builder",price:"—",tag:"Assembled PC",categoryKey:"motherboard",isAssembled:!0,realSize:Math.max(s.y,.2),prebuilt:i,prebuiltSizeY:s.y,installedParts:e.parts,home:{position:t.clone(),yaw:n},pose:{x:0,y:n,z:0}};const o={type:"assembledPC",itemId:"assembled_pc",itemName:this.assembledPC.name};i.userData={...o},i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData={...o})}),this.room.addVideoPortToMachine(i),this.cableTask={armed:!1,connected:!1,timer:null},this.room.setCableTaskArmed(!1,!1),this.showToast("🎉 Máy tính của bạn đã sẵn sàng! Bấm vào cổng video phía sau thùng máy để nối sang màn hình."),this.markWorldChanged()}handleCableClick(e){var t;if((t=this.cableTask)!=null&&t.connected){this.showToast("Cáp đã nối rồi. Bấm nút nguồn trên thùng hoặc chờ máy khởi động.");return}if(!this.room.machinePort){this.showToast("Chưa có máy nào trên bàn để nối cáp.");return}if(e==="pc"){this.cableTask.armed=!0,this.room.setCableTaskArmed(!0,!1),mt.playSnap(),this.showToast("Đã cắm cáp vào card đồ họa. Giờ bấm vào cổng HDMI trên màn hình."),this.markWorldChanged();return}if(e==="monitor"){if(!this.cableTask.armed){this.showToast("Bấm vào cổng video phía sau thùng máy trước đã.");return}this.cableTask.armed=!1,this.cableTask.connected=!0,this.room.setCableTaskArmed(!1,!0),this.room.connectCable(),mt.playSnap(),this.showToast("🔌 Đã nối HDMI. Máy tính đang khởi động..."),this.room.setMonitorState("NO_SIGNAL"),this.cableTask.timer&&clearTimeout(this.cableTask.timer),this.cableTask.timer=setTimeout(()=>{this.room.postProgress=0,this.room.setMonitorState("POST")},900),this.markWorldChanged()}}parkAssembledPC(e){if(!e)return;const t=e.prebuilt;t.parent!==this.scene&&this.scene.add(t),t.visible=!0,t.position.copy(e.home.position);const n=e.pose||e.home;t.rotation.set(n.x||0,n.y??e.home.yaw,n.z||0),t.updateMatrixWorld(!0),this.assembledPC=e,this.room.registerMachinePort(this.room.machinePort),this.markWorldChanged()}rememberAssembledPose(e){var n;if(!(e!=null&&e.prebuilt))return;const t=(n=this.heldItemManager)==null?void 0:n.itemRotation;if(t)e.pose={x:t.x||0,y:t.y||0,z:t.z||0};else{const i=e.prebuilt.rotation;e.pose={x:i.x,y:i.y,z:i.z}}}handleWorldInteract(e,t){var o,a;const n=this.heldItemManager.getHeldItem();let i=e;for(;i&&!((o=i.userData)!=null&&o.type)&&!((a=i.userData)!=null&&a.itemId);)i=i.parent;const s=(i==null?void 0:i.userData)||{};if(n){if(t&&t.point){if(n.isAssembled){this.rememberAssembledPose(n),this.parkAssembledPC(n),this.heldItemManager.clearHeldItem();return}if(this.touchesFloor(t.point,t)){this.heldItemManager.clearHeldItem(),this.returnToTable(n);return}this.placedItems.placeItemAt(n,t.point),this.heldItemManager.clearHeldItem(),this.markWorldChanged()}return}if(s.type==="pcVideoPort"){this.handleCableClick("pc");return}if(s.type==="monitorPort"){this.handleCableClick("monitor");return}if(s.type==="assembledPC"){const c=this.assembledPC;if(!c)return;this.assembledPC=null,c.prebuilt.visible=!1,c.prebuilt.parent&&c.prebuilt.parent.remove(c.prebuilt),this.room.removeCable(),this.room.unregisterMachinePort(),this.room.setMonitorState("OFF"),this.cableTask&&(this.cableTask.timer&&clearTimeout(this.cableTask.timer),this.cableTask={armed:!1,connected:!1,timer:null}),this.heldItemManager.holdItem(c),this.markWorldChanged();return}if(s.type==="computerCase"){this.buildModeUI.open(),this.controls.unlockPointer();return}if(s.isPlaced&&s.itemId){const c=Wr.find(l=>l.id===s.itemId);c&&(this.placedItems.removeItem(c.id),this.heldItemManager.holdItem(c),this.markWorldChanged());return}if(s.itemId){const c=Wr.find(l=>l.id===s.itemId);c&&(this.shelf.hideItem(c.id),this.heldItemManager.holdItem(c),this.markWorldChanged())}}handleStowItem(){const e=this.heldItemManager.getHeldItem();if(e!=null&&e.isAssembled){this.rememberAssembledPose(e),this.parkAssembledPC(e),this.heldItemManager.clearHeldItem(),this.showToast("Máy tính đã lắp ráp được đặt lại lên bàn.");return}if(this.inventoryUI.isOpen){this.inventoryUI.selectedItem&&this.inventoryUI.dropCurrentSelectedItem();return}const t=this.heldItemManager.getHeldItem();t&&this.inventoryUI.addItem(t)&&(this.heldItemManager.clearHeldItem(),this.markWorldChanged(),mt.playDrop())}setupWindowEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}animate(){var i;requestAnimationFrame(()=>this.animate());const e=performance.now(),t=Math.min(this.clock.getDelta(),.1),n=this.clock.getElapsedTime();if((i=this.buildModeUI)!=null&&i.isOpen){this.buildModeUI.update(t,e);return}this.controls.update(t,this.getRaycastTargets()),this.heldItemManager.update(t,n),this.room.update(t),this.inventoryUI.isOpen&&this.inventoryUI.selectedItem&&this.previewScene.render(),this.frame=(this.frame||0)+1,(this.shadowDirty||this.frame%Ex===0)&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowDirty=!1),this.renderer.render(this.scene,this.camera)}getRaycastTargets(){this.raycastList||(this.raycastSources=[this.shelf.interactables,this.placedItems.interactables,this.room.interactables,this.room.surfaces],this.raycastList=[]);const e=this.raycastList;e.length=0;for(const t of this.raycastSources)for(let n=0;n<t.length;n++)e.push(t[n]);return e}markWorldChanged(){var e;(e=this.controls)==null||e.markRaycastDirty(),this.shadowDirty=!0}showToast(e){const t=document.querySelector(".hud-toast");t&&t.remove();const n=document.createElement("div");n.className="hud-toast",n.innerHTML=`<span>${e}</span>`,document.body.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),300)},3e3)}}window.addEventListener("DOMContentLoaded",()=>{const r=()=>{mt.init(),window.removeEventListener("click",r),window.removeEventListener("keydown",r)};window.addEventListener("click",r),window.addEventListener("keydown",r);const e=new Ax;window.pcBuilderGame=e});
