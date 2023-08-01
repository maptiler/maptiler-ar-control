import { LngLat } from '@maptiler/sdk';
import * as THREE from 'three';
import { Quaternion, Matrix4, RGBAFormat, RGBA_ASTC_4x4_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT5_Format, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, Texture as Texture$1, Vector3, Color, Vector2, PerspectiveCamera, MeshBasicMaterial, PlaneGeometry, Matrix3, Triangle, Raycaster, Loader, FileLoader, SRGBColorSpace, LinearSRGBColorSpace, BufferGeometry, BufferAttribute, CompressedArrayTexture, UnsignedByteType, CompressedTexture, LinearFilter, LinearMipmapLinearFilter, NoColorSpace, EventDispatcher, WebGLRenderer, NoToneMapping, LoaderUtils, SpotLight, PointLight, DirectionalLight, MeshPhysicalMaterial, InstancedMesh, Object3D, TextureLoader, ImageBitmapLoader, InterleavedBuffer, InterleavedBufferAttribute, RepeatWrapping, PointsMaterial, Material as Material$1, LineBasicMaterial, MeshStandardMaterial, DoubleSide, PropertyBinding, SkinnedMesh, Mesh, LineSegments, Line, LineLoop, Points, Group, MathUtils, OrthographicCamera, Skeleton, InterpolateLinear, AnimationClip, Bone, FloatType, HalfFloatType, DataTexture, Data3DTexture, Spherical, Euler, ShaderMaterial, Scene, WebGLRenderTarget, Sphere, FrontSide, EquirectangularReflectionMapping, sRGBEncoding, WebGLCubeRenderTarget, CubeCamera, BoxGeometry, NoBlending, BackSide, VideoTexture, CanvasTexture, LoopPingPong, LoopOnce, LoopRepeat, TrianglesDrawMode, TriangleFanDrawMode, TriangleStripDrawMode, NearestFilter, NearestMipmapNearestFilter, LinearMipmapNearestFilter, NearestMipmapLinearFilter, ClampToEdgeWrapping, MirroredRepeatWrapping, InterpolateDiscrete, VectorKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, Box3, RGFormat, RedFormat, LightProbe, Float32BufferAttribute, DataTextureLoader, AnimationMixer, Interpolant, Source, DataUtils, MeshDepthMaterial, LinearEncoding } from 'three';
import EventEmitter from 'events';
import { GLTFExporter as GLTFExporter$1 } from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as fflate from 'three/examples/jsm/libs/fflate.module.js';

var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __reflectGet = Reflect.get;
var __pow = Math.pow;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b2)) {
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var __async$2 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2 = (i, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues$1({}, e2), {
  finisher(n2) {
    n2.createProperty(e2.key, i);
  }
}) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: e2.key,
  initializer() {
    "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
  },
  finisher(n2) {
    n2.createProperty(e2.key, i);
  }
};
function e$3(e2) {
  return (n2, t2) => void 0 !== t2 ? ((i, e3, n3) => {
    e3.constructor.createProperty(n3, i);
  })(e2, n2, t2) : i$2(e2, n2);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n$5;
null != (null === (n$5 = window.HTMLSlotElement) || void 0 === n$5 ? void 0 : n$5.prototype.assignedElements) ? (o2, n2) => o2.assignedElements(n2) : (o2, n2) => o2.assignedNodes(n2).filter((o3) => o3.nodeType === Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = window, e$2 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), n$4 = /* @__PURE__ */ new WeakMap();
class o$3 {
  constructor(t2, e2, n2) {
    if (this._$cssResult$ = true, n2 !== s$3)
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$2 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = n$4.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$4.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
}
const r$2 = (t2) => new o$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$3), S$1 = (s2, n2) => {
  e$2 ? s2.adoptedStyleSheets = n2.map(
    (t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet
  ) : n2.forEach((e2) => {
    const n3 = document.createElement("style"), o2 = t$2.litNonce;
    void 0 !== o2 && n3.setAttribute("nonce", o2), n3.textContent = e2.cssText, s2.appendChild(n3);
  });
}, c$2 = e$2 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules)
    e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$1 = window, r$1 = e$1.trustedTypes, h$1 = r$1 ? r$1.emptyScript : "", o$2 = e$1.reactiveElementPolyfillSupport, n$3 = {
  toAttribute(t2, i) {
    switch (i) {
      case Boolean:
        t2 = t2 ? h$1 : null;
        break;
      case Object:
      case Array:
        t2 = null == t2 ? t2 : JSON.stringify(t2);
    }
    return t2;
  },
  fromAttribute(t2, i) {
    let s2 = t2;
    switch (i) {
      case Boolean:
        s2 = null !== t2;
        break;
      case Number:
        s2 = null === t2 ? null : Number(t2);
        break;
      case Object:
      case Array:
        try {
          s2 = JSON.parse(t2);
        } catch (t3) {
          s2 = null;
        }
    }
    return s2;
  }
}, a$2 = (t2, i) => i !== t2 && (i == i || t2 == t2), l$2 = {
  attribute: true,
  type: String,
  converter: n$3,
  reflect: false,
  hasChanged: a$2
};
class d$1 extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
  }
  static addInitializer(t2) {
    var i;
    this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i, s2) => {
      const e2 = this._$Ep(s2, i);
      void 0 !== e2 && (this._$Ev.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i = l$2) {
    if (i.state && (i.attribute = false), this.finalize(), this.elementProperties.set(t2, i), !i.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i);
      void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i, s2) {
    return {
      get() {
        return this[i];
      },
      set(e2) {
        const r2 = this[t2];
        this[i] = e2, this.requestUpdate(t2, r2, s2);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$2;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i = [
        ...Object.getOwnPropertyNames(t3),
        ...Object.getOwnPropertySymbols(t3)
      ];
      for (const s2 of i)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i) {
    const s2 = [];
    if (Array.isArray(i)) {
      const e2 = new Set(i.flat(1 / 0).reverse());
      for (const i2 of e2)
        s2.unshift(c$2(i2));
    } else
      void 0 !== i && s2.push(c$2(i));
    return s2;
  }
  static _$Ep(t2, i) {
    const s2 = i.attribute;
    return false === s2 ? void 0 : "string" == typeof s2 ? s2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  u() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i, s2;
    (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s2 = t2.hostConnected) || void 0 === s2 || s2.call(t2));
  }
  removeController(t2) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i) => {
      this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i;
      return null === (i = t3.hostConnected) || void 0 === i ? void 0 : i.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i;
      return null === (i = t3.hostDisconnected) || void 0 === i ? void 0 : i.call(t3);
    });
  }
  attributeChangedCallback(t2, i, s2) {
    this._$AK(t2, s2);
  }
  _$EO(t2, i, s2 = l$2) {
    var e2;
    const r2 = this.constructor._$Ep(t2, s2);
    if (void 0 !== r2 && true === s2.reflect) {
      const h2 = (void 0 !== (null === (e2 = s2.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s2.converter : n$3).toAttribute(i, s2.type);
      this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
    }
  }
  _$AK(t2, i) {
    var s2;
    const e2 = this.constructor, r2 = e2._$Ev.get(t2);
    if (void 0 !== r2 && this._$El !== r2) {
      const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s2 = t3.converter) || void 0 === s2 ? void 0 : s2.fromAttribute) ? t3.converter : n$3;
      this._$El = r2, this[r2] = h2.fromAttribute(i, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i, s2) {
    let e2 = true;
    void 0 !== t2 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || a$2)(
      this[t2],
      i
    ) ? (this._$AL.has(t2) || this._$AL.set(t2, i), true === s2.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  _$Ej() {
    return __async$2(this, null, function* () {
      this.isUpdatePending = true;
      try {
        yield this._$E_;
      } catch (t3) {
        Promise.reject(t3);
      }
      const t2 = this.scheduleUpdate();
      return null != t2 && (yield t2), !this.isUpdatePending;
    });
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i2) => this[i2] = t3), this._$Ei = void 0);
    let i = false;
    const s2 = this._$AL;
    try {
      i = this.shouldUpdate(s2), i ? (this.willUpdate(s2), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i2;
        return null === (i2 = t3.hostUpdate) || void 0 === i2 ? void 0 : i2.call(t3);
      }), this.update(s2)) : this._$Ek();
    } catch (t3) {
      throw i = false, this._$Ek(), t3;
    }
    i && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i;
    null === (i = this._$ES) || void 0 === i || i.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostUpdated) || void 0 === i2 ? void 0 : i2.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    void 0 !== this._$EC && (this._$EC.forEach((t3, i) => this._$EO(i, this[i], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
d$1.finalized = true, d$1.elementProperties = /* @__PURE__ */ new Map(), d$1.elementStyles = [], d$1.shadowRootOptions = { mode: "open" }, null == o$2 || o$2({ ReactiveElement: d$1 }), (null !== (s$2 = e$1.reactiveElementVersions) && void 0 !== s$2 ? s$2 : e$1.reactiveElementVersions = []).push("1.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;
const i$1 = window, s$1 = i$1.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$1 = "$lit$", n$2 = `lit$${(Math.random() + "").slice(9)}$`, l$1 = "?" + n$2, h = `<${l$1}>`, r = document, d = () => r.createComment(""), u = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, c$1 = Array.isArray, v = (t2) => c$1(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), a$1 = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p$1 = RegExp(
  `>|${a$1}(?:([^\\s"'>=/]+)(${a$1}*=${a$1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
  "g"
), g$1 = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t2) => (i, ...s2) => ({ _$litType$: t2, strings: i, values: s2 }), x$2 = w(1), T = Symbol.for("lit-noChange"), A$1 = Symbol.for("lit-nothing"), E = /* @__PURE__ */ new WeakMap(), C$1 = r.createTreeWalker(r, 129, null, false), P = (t2, i) => {
  const s2 = t2.length - 1, l2 = [];
  let r2, d2 = 2 === i ? "<svg>" : "", u2 = f;
  for (let i2 = 0; i2 < s2; i2++) {
    const s3 = t2[i2];
    let e2, c3, v2 = -1, a2 = 0;
    for (; a2 < s3.length && (u2.lastIndex = a2, c3 = u2.exec(s3), null !== c3); )
      a2 = u2.lastIndex, u2 === f ? "!--" === c3[1] ? u2 = _ : void 0 !== c3[1] ? u2 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (r2 = RegExp("</" + c3[2], "g")), u2 = p$1) : void 0 !== c3[3] && (u2 = p$1) : u2 === p$1 ? ">" === c3[0] ? (u2 = null != r2 ? r2 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u2.lastIndex - c3[2].length, e2 = c3[1], u2 = void 0 === c3[3] ? p$1 : '"' === c3[3] ? $ : g$1) : u2 === $ || u2 === g$1 ? u2 = p$1 : u2 === _ || u2 === m ? u2 = f : (u2 = p$1, r2 = void 0);
    const w2 = u2 === p$1 && t2[i2 + 1].startsWith("/>") ? " " : "";
    d2 += u2 === f ? s3 + h : v2 >= 0 ? (l2.push(e2), s3.slice(0, v2) + o$1 + s3.slice(v2) + n$2 + w2) : s3 + n$2 + (-2 === v2 ? (l2.push(void 0), i2) : w2);
  }
  const c2 = d2 + (t2[s2] || "<?>") + (2 === i ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [void 0 !== e ? e.createHTML(c2) : c2, l2];
};
class V {
  constructor({ strings: t2, _$litType$: i }, e2) {
    let h2;
    this.parts = [];
    let r2 = 0, u2 = 0;
    const c2 = t2.length - 1, v2 = this.parts, [a2, f2] = P(t2, i);
    if (this.el = V.createElement(a2, e2), C$1.currentNode = this.el.content, 2 === i) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; null !== (h2 = C$1.nextNode()) && v2.length < c2; ) {
      if (1 === h2.nodeType) {
        if (h2.hasAttributes()) {
          const t3 = [];
          for (const i2 of h2.getAttributeNames())
            if (i2.endsWith(o$1) || i2.startsWith(n$2)) {
              const s2 = f2[u2++];
              if (t3.push(i2), void 0 !== s2) {
                const t4 = h2.getAttribute(s2.toLowerCase() + o$1).split(n$2), i3 = /([.?@])?(.*)/.exec(s2);
                v2.push({
                  type: 1,
                  index: r2,
                  name: i3[2],
                  strings: t4,
                  ctor: "." === i3[1] ? k : "?" === i3[1] ? I$1 : "@" === i3[1] ? L : R
                });
              } else
                v2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            h2.removeAttribute(i2);
        }
        if (y.test(h2.tagName)) {
          const t3 = h2.textContent.split(n$2), i2 = t3.length - 1;
          if (i2 > 0) {
            h2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i2; s2++)
              h2.append(t3[s2], d()), C$1.nextNode(), v2.push({ type: 2, index: ++r2 });
            h2.append(t3[i2], d());
          }
        }
      } else if (8 === h2.nodeType)
        if (h2.data === l$1)
          v2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = h2.data.indexOf(n$2, t3 + 1)); )
            v2.push({ type: 7, index: r2 }), t3 += n$2.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i) {
    const s2 = r.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function N(t2, i, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i === T)
    return i;
  let r2 = void 0 !== e2 ? null === (o2 = s2._$Co) || void 0 === o2 ? void 0 : o2[e2] : s2._$Cl;
  const d2 = u(i) ? void 0 : i._$litDirective$;
  return (null == r2 ? void 0 : r2.constructor) !== d2 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === d2 ? r2 = void 0 : (r2 = new d2(t2), r2._$AT(t2, s2, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s2)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), void 0 !== r2 && (i = N(t2, r2._$AS(t2, i.values), r2, e2)), i;
}
class S {
  constructor(t2, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var i;
    const {
      el: { content: s2 },
      parts: e2
    } = this._$AD, o2 = (null !== (i = null == t2 ? void 0 : t2.creationScope) && void 0 !== i ? i : r).importNode(s2, true);
    C$1.currentNode = o2;
    let n2 = C$1.nextNode(), l2 = 0, h2 = 0, d2 = e2[0];
    for (; void 0 !== d2; ) {
      if (l2 === d2.index) {
        let i2;
        2 === d2.type ? i2 = new M(n2, n2.nextSibling, this, t2) : 1 === d2.type ? i2 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : 6 === d2.type && (i2 = new z(n2, this, t2)), this._$AV.push(i2), d2 = e2[++h2];
      }
      l2 !== (null == d2 ? void 0 : d2.index) && (n2 = C$1.nextNode(), l2++);
    }
    return o2;
  }
  v(t2) {
    let i = 0;
    for (const s2 of this._$AV)
      void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i), i += s2.strings.length - 2) : s2._$AI(t2[i])), i++;
  }
}
class M {
  constructor(t2, i, s2, e2) {
    var o2;
    this.type = 2, this._$AH = A$1, this._$AN = void 0, this._$AA = t2, this._$AB = i, this._$AM = s2, this.options = e2, this._$Cp = null === (o2 = null == e2 ? void 0 : e2.isConnected) || void 0 === o2 || o2;
  }
  get _$AU() {
    var t2, i;
    return null !== (i = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i ? i : this._$Cp;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i = this._$AM;
    return void 0 !== i && 11 === (null == t2 ? void 0 : t2.nodeType) && (t2 = i.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i = this) {
    t2 = N(this, t2, i), u(t2) ? t2 === A$1 || null == t2 || "" === t2 ? (this._$AH !== A$1 && this._$AR(), this._$AH = A$1) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.g(t2) : void 0 !== t2.nodeType ? this.$(t2) : v(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== A$1 && u(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    var i;
    const { values: s2, _$litType$: e2 } = t2, o2 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = V.createElement(e2.h, this.options)), e2);
    if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o2)
      this._$AH.v(s2);
    else {
      const t3 = new S(o2, this), i2 = t3.u(this.options);
      t3.v(s2), this.$(i2), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i = E.get(t2.strings);
    return void 0 === i && E.set(t2.strings, i = new V(t2)), i;
  }
  T(t2) {
    c$1(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i.length ? i.push(s2 = new M(this.k(d()), this.k(d()), this, this.options)) : s2 = i[e2], s2._$AI(o2), e2++;
    e2 < i.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i) {
    var s2;
    for (null === (s2 = this._$AP) || void 0 === s2 || s2.call(this, false, true, i); t2 && t2 !== this._$AB; ) {
      const i2 = t2.nextSibling;
      t2.remove(), t2 = i2;
    }
  }
  setConnected(t2) {
    var i;
    void 0 === this._$AM && (this._$Cp = t2, null === (i = this._$AP) || void 0 === i || i.call(this, t2));
  }
}
class R {
  constructor(t2, i, s2, e2, o2) {
    this.type = 1, this._$AH = A$1, this._$AN = void 0, this.element = t2, this.name = i, this._$AM = e2, this.options = o2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A$1;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (void 0 === o2)
      t2 = N(this, t2, i, 0), n2 = !u(t2) || t2 !== this._$AH && t2 !== T, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = N(this, e3[s2 + l2], i, l2), h2 === T && (h2 = this._$AH[l2]), n2 || (n2 = !u(h2) || h2 !== this._$AH[l2]), h2 === A$1 ? t2 = A$1 : t2 !== A$1 && (t2 += (null != h2 ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A$1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A$1 ? void 0 : t2;
  }
}
const H = s$1 ? s$1.emptyScript : "";
class I$1 extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== A$1 ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
  }
}
class L extends R {
  constructor(t2, i, s2, e2, o2) {
    super(t2, i, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i = this) {
    var s2;
    if ((t2 = null !== (s2 = N(this, t2, i, 0)) && void 0 !== s2 ? s2 : A$1) === T)
      return;
    const e2 = this._$AH, o2 = t2 === A$1 && e2 !== A$1 || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== A$1 && (e2 === A$1 || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i, s2;
    "function" == typeof this._$AH ? this._$AH.call(
      null !== (s2 = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s2 ? s2 : this.element,
      t2
    ) : this._$AH.handleEvent(t2);
  }
}
class z {
  constructor(t2, i, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    N(this, t2);
  }
}
const j = i$1.litHtmlPolyfillSupport;
null == j || j(V, M), (null !== (t$1 = i$1.litHtmlVersions) && void 0 !== t$1 ? t$1 : i$1.litHtmlVersions = []).push("2.7.3");
const B$1 = (t2, i, s2) => {
  var e2, o2;
  const n2 = null !== (e2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e2 ? e2 : i;
  let l2 = n2._$litPart$;
  if (void 0 === l2) {
    const t3 = null !== (o2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o2 ? o2 : null;
    n2._$litPart$ = l2 = new M(
      i.insertBefore(d(), t3),
      t3,
      void 0,
      null != s2 ? s2 : {}
    );
  }
  return l2._$AI(t2), l2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o;
class s extends d$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i = super.createRenderRoot();
    return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i.firstChild), i;
  }
  update(t2) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B$1(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
  }
  render() {
    return T;
  }
}
s.finalized = true, s._$litElement$ = true, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, { LitElement: s });
const n$1 = globalThis.litElementPolyfillSupport;
null == n$1 || n$1({ LitElement: s });
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.2");
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const HAS_WEBXR_DEVICE_API = navigator.xr != null && self.XRSession != null && navigator.xr.isSessionSupported != null;
const HAS_WEBXR_HIT_TEST_API = HAS_WEBXR_DEVICE_API && self.XRSession.prototype.requestHitTestSource != null;
const HAS_RESIZE_OBSERVER = self.ResizeObserver != null;
const HAS_INTERSECTION_OBSERVER = self.IntersectionObserver != null;
const IS_WEBXR_AR_CANDIDATE = HAS_WEBXR_HIT_TEST_API;
(() => {
  const userAgent = navigator.userAgent || navigator.vendor || self.opera;
  let check = false;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    userAgent
  ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    userAgent.substr(0, 4)
  )) {
    check = true;
  }
  return check;
})();
/\bCrOS\b/.test(navigator.userAgent);
const IS_ANDROID = /android/i.test(navigator.userAgent);
const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
/Safari\//.test(navigator.userAgent);
const IS_FIREFOX = /firefox/i.test(navigator.userAgent);
const IS_OCULUS = /OculusBrowser/.test(navigator.userAgent);
IS_IOS && /CriOS\//.test(navigator.userAgent);
const IS_SCENEVIEWER_CANDIDATE = IS_ANDROID && !IS_FIREFOX && !IS_OCULUS;
const IS_WKWEBVIEW = Boolean(window.webkit && window.webkit.messageHandlers);
const IS_AR_QUICKLOOK_CANDIDATE = (() => {
  if (IS_IOS) {
    if (!IS_WKWEBVIEW) {
      const tempAnchor = document.createElement("a");
      return Boolean(
        tempAnchor.relList && tempAnchor.relList.supports && tempAnchor.relList.supports("ar")
      );
    } else {
      return Boolean(
        /CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent)
      );
    }
  } else {
    return false;
  }
})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const deserializeUrl = (url) => !!url && url !== "null" ? toFullUrl(url) : null;
const assertIsArCandidate = () => {
  if (IS_WEBXR_AR_CANDIDATE) {
    return;
  }
  const missingApis = [];
  if (!HAS_WEBXR_DEVICE_API) {
    missingApis.push("WebXR Device API");
  }
  if (!HAS_WEBXR_HIT_TEST_API) {
    missingApis.push("WebXR Hit Test API");
  }
  throw new Error(
    `The following APIs are required for AR, but are missing in this browser: ${missingApis.join(
      ", "
    )}`
  );
};
const toFullUrl = (partialUrl) => {
  const url = new URL(partialUrl, window.location.toString());
  return url.toString();
};
const throttle = (fn, ms) => {
  let timer = null;
  const throttled = (...args) => {
    if (timer != null) {
      return;
    }
    fn(...args);
    timer = self.setTimeout(() => timer = null, ms);
  };
  throttled.flush = () => {
    if (timer != null) {
      self.clearTimeout(timer);
      timer = null;
    }
  };
  return throttled;
};
const debounce = (fn, ms) => {
  let timer = null;
  return (...args) => {
    if (timer != null) {
      self.clearTimeout(timer);
    }
    timer = self.setTimeout(() => {
      timer = null;
      fn(...args);
    }, ms);
  };
};
const clamp = (value, lowerLimit, upperLimit) => Math.max(lowerLimit, Math.min(upperLimit, value));
const CAPPED_DEVICE_PIXEL_RATIO = 1;
const resolveDpr = (() => {
  const HAS_META_VIEWPORT_TAG = (() => {
    var _a2;
    if ((_a2 = document.documentElement.getAttribute("itemtype")) === null || _a2 === void 0 ? void 0 : _a2.includes("schema.org/SearchResultsPage")) {
      return true;
    }
    const metas = document.head != null ? Array.from(document.head.querySelectorAll("meta")) : [];
    for (const meta of metas) {
      if (meta.name === "viewport") {
        return true;
      }
    }
    return false;
  })();
  if (!HAS_META_VIEWPORT_TAG) {
    console.warn(
      'No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'
    );
  }
  return () => HAS_META_VIEWPORT_TAG ? window.devicePixelRatio : CAPPED_DEVICE_PIXEL_RATIO;
})();
const isDebugMode = (() => {
  const debugQueryParameterName = "model-viewer-debug-mode";
  const debugQueryParameter = new RegExp(`[?&]${debugQueryParameterName}(&|$)`);
  return () => self.ModelViewerElement && self.ModelViewerElement.debugMode || self.location && self.location.search && self.location.search.match(debugQueryParameter);
})();
const timePasses = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
const waitForEvent = (target2, eventName, predicate = null) => new Promise((resolve) => {
  function handler(event) {
    if (!predicate || predicate(event)) {
      resolve(event);
      target2.removeEventListener(eventName, handler);
    }
  }
  target2.addEventListener(eventName, handler);
});
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$7 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
const BASE_OPACITY = 0.5;
const DEFAULT_SHADOW_INTENSITY = 0;
const DEFAULT_SHADOW_SOFTNESS = 1;
const DEFAULT_EXPOSURE = 1;
const $currentEnvironmentMap = Symbol("currentEnvironmentMap");
const $currentBackground = Symbol("currentBackground");
const $updateEnvironment = Symbol("updateEnvironment");
const $cancelEnvironmentUpdate = Symbol("cancelEnvironmentUpdate");
const EnvironmentMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2;
  class EnvironmentModelViewerElement extends ModelViewerElement2 {
    constructor() {
      super(...arguments);
      this.environmentImage = null;
      this.skyboxImage = null;
      this.shadowIntensity = DEFAULT_SHADOW_INTENSITY;
      this.shadowSoftness = DEFAULT_SHADOW_SOFTNESS;
      this.exposure = DEFAULT_EXPOSURE;
      this[_a2] = null;
      this[_b2] = null;
      this[_c2] = null;
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has("shadowIntensity")) {
        this[$scene].setShadowIntensity(this.shadowIntensity * BASE_OPACITY);
        this[$needsRender]();
      }
      if (changedProperties.has("shadowSoftness")) {
        this[$scene].setShadowSoftness(this.shadowSoftness);
        this[$needsRender]();
      }
      if (changedProperties.has("exposure")) {
        this[$scene].exposure = this.exposure;
        this[$needsRender]();
      }
      if ((changedProperties.has("environmentImage") || changedProperties.has("skyboxImage")) && this[$shouldAttemptPreload]()) {
        this[$updateEnvironment]();
      }
    }
    hasBakedShadow() {
      return this[$scene].bakedShadows.size > 0;
    }
    [(_a2 = $currentEnvironmentMap, _b2 = $currentBackground, _c2 = $cancelEnvironmentUpdate, $updateEnvironment)]() {
      return __async$2(this, null, function* () {
        const { skyboxImage, environmentImage } = this;
        if (this[$cancelEnvironmentUpdate] != null) {
          this[$cancelEnvironmentUpdate]();
          this[$cancelEnvironmentUpdate] = null;
        }
        const { textureUtils } = this[$renderer];
        if (textureUtils == null) {
          return;
        }
        const updateEnvProgress = this[$progressTracker].beginActivity();
        try {
          const { environmentMap, skybox } = yield textureUtils.generateEnvironmentMapAndSkybox(
            deserializeUrl(skyboxImage),
            environmentImage,
            (progress) => updateEnvProgress(clamp(progress, 0, 1))
          );
          if (this[$currentEnvironmentMap] !== environmentMap) {
            this[$currentEnvironmentMap] = environmentMap;
            this.dispatchEvent(new CustomEvent("environment-change"));
          }
          if (skybox != null) {
            this[$currentBackground] = skybox.name === environmentMap.name ? environmentMap : skybox;
          } else {
            this[$currentBackground] = null;
          }
          this[$scene].setEnvironmentAndSkybox(
            this[$currentEnvironmentMap],
            this[$currentBackground]
          );
          this[$scene].dispatchEvent({ type: "envmap-update" });
        } catch (errorOrPromise) {
          if (errorOrPromise instanceof Error) {
            this[$scene].setEnvironmentAndSkybox(null, null);
            throw errorOrPromise;
          }
        } finally {
          updateEnvProgress(1);
        }
      });
    }
  }
  __decorate$7(
    [e$3({ type: String, attribute: "environment-image" })],
    EnvironmentModelViewerElement.prototype,
    "environmentImage",
    void 0
  );
  __decorate$7(
    [e$3({ type: String, attribute: "skybox-image" })],
    EnvironmentModelViewerElement.prototype,
    "skyboxImage",
    void 0
  );
  __decorate$7(
    [e$3({ type: Number, attribute: "shadow-intensity" })],
    EnvironmentModelViewerElement.prototype,
    "shadowIntensity",
    void 0
  );
  __decorate$7(
    [e$3({ type: Number, attribute: "shadow-softness" })],
    EnvironmentModelViewerElement.prototype,
    "shadowSoftness",
    void 0
  );
  __decorate$7(
    [
      e$3({
        type: Number
      })
    ],
    EnvironmentModelViewerElement.prototype,
    "exposure",
    void 0
  );
  return EnvironmentModelViewerElement;
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var CloseIcon = x$2`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ControlsPrompt = x$2`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ARGlyph = x$2`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const templateResult = x$2`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${ARGlyph}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${ControlsPrompt}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${CloseIcon}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`;
const makeTemplate = (shadowRoot) => {
  B$1(templateResult, shadowRoot);
};
const _taskCache$1 = /* @__PURE__ */ new WeakMap();
class DRACOLoader extends Loader {
  constructor(manager) {
    super(manager);
    this.decoderPath = "";
    this.decoderConfig = {};
    this.decoderBinary = null;
    this.decoderPending = null;
    this.workerLimit = 4;
    this.workerPool = [];
    this.workerNextTaskID = 1;
    this.workerSourceURL = "";
    this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    };
    this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(path) {
    this.decoderPath = path;
    return this;
  }
  setDecoderConfig(config) {
    this.decoderConfig = config;
    return this;
  }
  setWorkerLimit(workerLimit) {
    this.workerLimit = workerLimit;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(
      url,
      (buffer) => {
        this.parse(buffer, onLoad, onError);
      },
      onProgress,
      onError
    );
  }
  parse(buffer, onLoad, onError) {
    this.decodeDracoFile(buffer, onLoad, null, null, SRGBColorSpace).catch(
      onError
    );
  }
  decodeDracoFile(buffer, callback, attributeIDs, attributeTypes, vertexColorSpace = LinearSRGBColorSpace) {
    const taskConfig = {
      attributeIDs: attributeIDs || this.defaultAttributeIDs,
      attributeTypes: attributeTypes || this.defaultAttributeTypes,
      useUniqueIDs: !!attributeIDs,
      vertexColorSpace
    };
    return this.decodeGeometry(buffer, taskConfig).then(callback);
  }
  decodeGeometry(buffer, taskConfig) {
    const taskKey = JSON.stringify(taskConfig);
    if (_taskCache$1.has(buffer)) {
      const cachedTask = _taskCache$1.get(buffer);
      if (cachedTask.key === taskKey) {
        return cachedTask.promise;
      } else if (buffer.byteLength === 0) {
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
      }
    }
    let worker;
    const taskID = this.workerNextTaskID++;
    const taskCost = buffer.byteLength;
    const geometryPending = this._getWorker(taskID, taskCost).then((_worker) => {
      worker = _worker;
      return new Promise((resolve, reject) => {
        worker._callbacks[taskID] = { resolve, reject };
        worker.postMessage(
          { type: "decode", id: taskID, taskConfig, buffer },
          [buffer]
        );
      });
    }).then((message) => this._createGeometry(message.geometry));
    geometryPending.catch(() => true).then(() => {
      if (worker && taskID) {
        this._releaseTask(worker, taskID);
      }
    });
    _taskCache$1.set(buffer, {
      key: taskKey,
      promise: geometryPending
    });
    return geometryPending;
  }
  _createGeometry(geometryData) {
    const geometry = new BufferGeometry();
    if (geometryData.index) {
      geometry.setIndex(new BufferAttribute(geometryData.index.array, 1));
    }
    for (let i = 0; i < geometryData.attributes.length; i++) {
      const result = geometryData.attributes[i];
      const name = result.name;
      const array = result.array;
      const itemSize = result.itemSize;
      const attribute = new BufferAttribute(array, itemSize);
      if (name === "color") {
        this._assignVertexColorSpace(attribute, result.vertexColorSpace);
      }
      geometry.setAttribute(name, attribute);
    }
    return geometry;
  }
  _assignVertexColorSpace(attribute, inputColorSpace) {
    if (inputColorSpace !== SRGBColorSpace)
      return;
    const _color = new Color();
    for (let i = 0, il = attribute.count; i < il; i++) {
      _color.fromBufferAttribute(attribute, i).convertSRGBToLinear();
      attribute.setXYZ(i, _color.r, _color.g, _color.b);
    }
  }
  _loadLibrary(url, responseType) {
    const loader = new FileLoader(this.manager);
    loader.setPath(this.decoderPath);
    loader.setResponseType(responseType);
    loader.setWithCredentials(this.withCredentials);
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, void 0, reject);
    });
  }
  preload() {
    this._initDecoder();
    return this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const useJS = typeof WebAssembly !== "object" || this.decoderConfig.type === "js";
    const librariesPending = [];
    if (useJS) {
      librariesPending.push(this._loadLibrary("draco_decoder.js", "text"));
    } else {
      librariesPending.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
      librariesPending.push(
        this._loadLibrary("draco_decoder.wasm", "arraybuffer")
      );
    }
    this.decoderPending = Promise.all(librariesPending).then((libraries) => {
      const jsContent = libraries[0];
      if (!useJS) {
        this.decoderConfig.wasmBinary = libraries[1];
      }
      const fn = DRACOWorker.toString();
      const body = [
        "/* draco decoder */",
        jsContent,
        "",
        "/* worker */",
        fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
      ].join("\n");
      this.workerSourceURL = URL.createObjectURL(new Blob([body]));
    });
    return this.decoderPending;
  }
  _getWorker(taskID, taskCost) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const worker2 = new Worker(this.workerSourceURL);
        worker2._callbacks = {};
        worker2._taskCosts = {};
        worker2._taskLoad = 0;
        worker2.postMessage({ type: "init", decoderConfig: this.decoderConfig });
        worker2.onmessage = function(e2) {
          const message = e2.data;
          switch (message.type) {
            case "decode":
              worker2._callbacks[message.id].resolve(message);
              break;
            case "error":
              worker2._callbacks[message.id].reject(message);
              break;
            default:
              console.error(
                'THREE.DRACOLoader: Unexpected message, "' + message.type + '"'
              );
          }
        };
        this.workerPool.push(worker2);
      } else {
        this.workerPool.sort(function(a2, b2) {
          return a2._taskLoad > b2._taskLoad ? -1 : 1;
        });
      }
      const worker = this.workerPool[this.workerPool.length - 1];
      worker._taskCosts[taskID] = taskCost;
      worker._taskLoad += taskCost;
      return worker;
    });
  }
  _releaseTask(worker, taskID) {
    worker._taskLoad -= worker._taskCosts[taskID];
    delete worker._callbacks[taskID];
    delete worker._taskCosts[taskID];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((worker) => worker._taskLoad)
    );
  }
  dispose() {
    for (let i = 0; i < this.workerPool.length; ++i) {
      this.workerPool[i].terminate();
    }
    this.workerPool.length = 0;
    if (this.workerSourceURL !== "") {
      URL.revokeObjectURL(this.workerSourceURL);
    }
    return this;
  }
}
function DRACOWorker() {
  let decoderConfig;
  let decoderPending;
  onmessage = function(e2) {
    const message = e2.data;
    switch (message.type) {
      case "init":
        decoderConfig = message.decoderConfig;
        decoderPending = new Promise(function(resolve) {
          decoderConfig.onModuleLoaded = function(draco) {
            resolve({ draco });
          };
          DracoDecoderModule(decoderConfig);
        });
        break;
      case "decode":
        const buffer = message.buffer;
        const taskConfig = message.taskConfig;
        decoderPending.then((module) => {
          const draco = module.draco;
          const decoder = new draco.Decoder();
          try {
            const geometry = decodeGeometry(
              draco,
              decoder,
              new Int8Array(buffer),
              taskConfig
            );
            const buffers = geometry.attributes.map(
              (attr) => attr.array.buffer
            );
            if (geometry.index)
              buffers.push(geometry.index.array.buffer);
            self.postMessage(
              { type: "decode", id: message.id, geometry },
              buffers
            );
          } catch (error) {
            console.error(error);
            self.postMessage({
              type: "error",
              id: message.id,
              error: error.message
            });
          } finally {
            draco.destroy(decoder);
          }
        });
        break;
    }
  };
  function decodeGeometry(draco, decoder, array, taskConfig) {
    const attributeIDs = taskConfig.attributeIDs;
    const attributeTypes = taskConfig.attributeTypes;
    let dracoGeometry;
    let decodingStatus;
    const geometryType = decoder.GetEncodedGeometryType(array);
    if (geometryType === draco.TRIANGULAR_MESH) {
      dracoGeometry = new draco.Mesh();
      decodingStatus = decoder.DecodeArrayToMesh(
        array,
        array.byteLength,
        dracoGeometry
      );
    } else if (geometryType === draco.POINT_CLOUD) {
      dracoGeometry = new draco.PointCloud();
      decodingStatus = decoder.DecodeArrayToPointCloud(
        array,
        array.byteLength,
        dracoGeometry
      );
    } else {
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    }
    if (!decodingStatus.ok() || dracoGeometry.ptr === 0) {
      throw new Error(
        "THREE.DRACOLoader: Decoding failed: " + decodingStatus.error_msg()
      );
    }
    const geometry = { index: null, attributes: [] };
    for (const attributeName in attributeIDs) {
      const attributeType = self[attributeTypes[attributeName]];
      let attribute;
      let attributeID;
      if (taskConfig.useUniqueIDs) {
        attributeID = attributeIDs[attributeName];
        attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
      } else {
        attributeID = decoder.GetAttributeId(
          dracoGeometry,
          draco[attributeIDs[attributeName]]
        );
        if (attributeID === -1)
          continue;
        attribute = decoder.GetAttribute(dracoGeometry, attributeID);
      }
      const attributeResult = decodeAttribute(
        draco,
        decoder,
        dracoGeometry,
        attributeName,
        attributeType,
        attribute
      );
      if (attributeName === "color") {
        attributeResult.vertexColorSpace = taskConfig.vertexColorSpace;
      }
      geometry.attributes.push(attributeResult);
    }
    if (geometryType === draco.TRIANGULAR_MESH) {
      geometry.index = decodeIndex(draco, decoder, dracoGeometry);
    }
    draco.destroy(dracoGeometry);
    return geometry;
  }
  function decodeIndex(draco, decoder, dracoGeometry) {
    const numFaces = dracoGeometry.num_faces();
    const numIndices = numFaces * 3;
    const byteLength = numIndices * 4;
    const ptr = draco._malloc(byteLength);
    decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
    const index = new Uint32Array(
      draco.HEAPF32.buffer,
      ptr,
      numIndices
    ).slice();
    draco._free(ptr);
    return { array: index, itemSize: 1 };
  }
  function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute) {
    const numComponents = attribute.num_components();
    const numPoints = dracoGeometry.num_points();
    const numValues = numPoints * numComponents;
    const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
    const dataType = getDracoDataType(draco, attributeType);
    const ptr = draco._malloc(byteLength);
    decoder.GetAttributeDataArrayForAllPoints(
      dracoGeometry,
      attribute,
      dataType,
      byteLength,
      ptr
    );
    const array = new attributeType(
      draco.HEAPF32.buffer,
      ptr,
      numValues
    ).slice();
    draco._free(ptr);
    return {
      name: attributeName,
      array,
      itemSize: numComponents
    };
  }
  function getDracoDataType(draco, attributeType) {
    switch (attributeType) {
      case Float32Array:
        return draco.DT_FLOAT32;
      case Int8Array:
        return draco.DT_INT8;
      case Int16Array:
        return draco.DT_INT16;
      case Int32Array:
        return draco.DT_INT32;
      case Uint8Array:
        return draco.DT_UINT8;
      case Uint16Array:
        return draco.DT_UINT16;
      case Uint32Array:
        return draco.DT_UINT32;
    }
  }
}
function toTrianglesDrawMode(geometry, drawMode) {
  if (drawMode === TrianglesDrawMode) {
    console.warn(
      "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
    );
    return geometry;
  }
  if (drawMode === TriangleFanDrawMode || drawMode === TriangleStripDrawMode) {
    let index = geometry.getIndex();
    if (index === null) {
      const indices = [];
      const position = geometry.getAttribute("position");
      if (position !== void 0) {
        for (let i = 0; i < position.count; i++) {
          indices.push(i);
        }
        geometry.setIndex(indices);
        index = geometry.getIndex();
      } else {
        console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        );
        return geometry;
      }
    }
    const numberOfTriangles = index.count - 2;
    const newIndices = [];
    if (drawMode === TriangleFanDrawMode) {
      for (let i = 1; i <= numberOfTriangles; i++) {
        newIndices.push(index.getX(0));
        newIndices.push(index.getX(i));
        newIndices.push(index.getX(i + 1));
      }
    } else {
      for (let i = 0; i < numberOfTriangles; i++) {
        if (i % 2 === 0) {
          newIndices.push(index.getX(i));
          newIndices.push(index.getX(i + 1));
          newIndices.push(index.getX(i + 2));
        } else {
          newIndices.push(index.getX(i + 2));
          newIndices.push(index.getX(i + 1));
          newIndices.push(index.getX(i));
        }
      }
    }
    if (newIndices.length / 3 !== numberOfTriangles) {
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    }
    const newGeometry = geometry.clone();
    newGeometry.setIndex(newIndices);
    newGeometry.clearGroups();
    return newGeometry;
  } else {
    console.error(
      "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
      drawMode
    );
    return geometry;
  }
}
class GLTFLoader extends Loader {
  constructor(manager) {
    super(manager);
    this.dracoLoader = null;
    this.ktx2Loader = null;
    this.meshoptDecoder = null;
    this.pluginCallbacks = [];
    this.register(function(parser) {
      return new GLTFMaterialsClearcoatExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureBasisUExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureWebPExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFTextureAVIFExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsSheenExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsTransmissionExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsVolumeExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsIorExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsEmissiveStrengthExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsSpecularExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFMaterialsIridescenceExtension$1(parser);
    });
    this.register(function(parser) {
      return new GLTFLightsExtension(parser);
    });
    this.register(function(parser) {
      return new GLTFMeshoptCompression(parser);
    });
    this.register(function(parser) {
      return new GLTFMeshGpuInstancing(parser);
    });
  }
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    let resourcePath;
    if (this.resourcePath !== "") {
      resourcePath = this.resourcePath;
    } else if (this.path !== "") {
      resourcePath = this.path;
    } else {
      resourcePath = LoaderUtils.extractUrlBase(url);
    }
    this.manager.itemStart(url);
    const _onError = function(e2) {
      if (onError) {
        onError(e2);
      } else {
        console.error(e2);
      }
      scope.manager.itemError(url);
      scope.manager.itemEnd(url);
    };
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setResponseType("arraybuffer");
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.load(
      url,
      function(data) {
        try {
          scope.parse(
            data,
            resourcePath,
            function(gltf) {
              onLoad(gltf);
              scope.manager.itemEnd(url);
            },
            _onError
          );
        } catch (e2) {
          _onError(e2);
        }
      },
      onProgress,
      _onError
    );
  }
  setDRACOLoader(dracoLoader2) {
    this.dracoLoader = dracoLoader2;
    return this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(ktx2Loader2) {
    this.ktx2Loader = ktx2Loader2;
    return this;
  }
  setMeshoptDecoder(meshoptDecoder2) {
    this.meshoptDecoder = meshoptDecoder2;
    return this;
  }
  register(callback) {
    if (this.pluginCallbacks.indexOf(callback) === -1) {
      this.pluginCallbacks.push(callback);
    }
    return this;
  }
  unregister(callback) {
    if (this.pluginCallbacks.indexOf(callback) !== -1) {
      this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
    }
    return this;
  }
  parse(data, path, onLoad, onError) {
    let json;
    const extensions = {};
    const plugins = {};
    const textDecoder = new TextDecoder();
    if (typeof data === "string") {
      json = JSON.parse(data);
    } else if (data instanceof ArrayBuffer) {
      const magic = textDecoder.decode(new Uint8Array(data, 0, 4));
      if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
        try {
          extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(
            data
          );
        } catch (error) {
          if (onError)
            onError(error);
          return;
        }
        json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
      } else {
        json = JSON.parse(textDecoder.decode(data));
      }
    } else {
      json = data;
    }
    if (json.asset === void 0 || json.asset.version[0] < 2) {
      if (onError)
        onError(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const parser = new GLTFParser(json, {
      path: path || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    parser.fileLoader.setRequestHeader(this.requestHeader);
    for (let i = 0; i < this.pluginCallbacks.length; i++) {
      const plugin = this.pluginCallbacks[i](parser);
      plugins[plugin.name] = plugin;
      extensions[plugin.name] = true;
    }
    if (json.extensionsUsed) {
      for (let i = 0; i < json.extensionsUsed.length; ++i) {
        const extensionName = json.extensionsUsed[i];
        const extensionsRequired = json.extensionsRequired || [];
        switch (extensionName) {
          case EXTENSIONS.KHR_MATERIALS_UNLIT:
            extensions[extensionName] = new GLTFMaterialsUnlitExtension$1();
            break;
          case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
            extensions[extensionName] = new GLTFDracoMeshCompressionExtension(
              json,
              this.dracoLoader
            );
            break;
          case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
            extensions[extensionName] = new GLTFTextureTransformExtension();
            break;
          case EXTENSIONS.KHR_MESH_QUANTIZATION:
            extensions[extensionName] = new GLTFMeshQuantizationExtension();
            break;
          default:
            if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === void 0) {
              console.warn(
                'THREE.GLTFLoader: Unknown extension "' + extensionName + '".'
              );
            }
        }
      }
    }
    parser.setExtensions(extensions);
    parser.setPlugins(plugins);
    parser.parse(onLoad, onError);
  }
  parseAsync(data, path) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.parse(data, path, resolve, reject);
    });
  }
}
function GLTFRegistry() {
  let objects = {};
  return {
    get: function(key) {
      return objects[key];
    },
    add: function(key, object) {
      objects[key] = object;
    },
    remove: function(key) {
      delete objects[key];
    },
    removeAll: function() {
      objects = {};
    }
  };
}
const EXTENSIONS = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class GLTFLightsExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
    this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const parser = this.parser;
    const nodeDefs = this.parser.json.nodes || [];
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      const nodeDef = nodeDefs[nodeIndex];
      if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== void 0) {
        parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
      }
    }
  }
  _loadLight(lightIndex) {
    const parser = this.parser;
    const cacheKey = "light:" + lightIndex;
    let dependency = parser.cache.get(cacheKey);
    if (dependency)
      return dependency;
    const json = parser.json;
    const extensions = json.extensions && json.extensions[this.name] || {};
    const lightDefs = extensions.lights || [];
    const lightDef = lightDefs[lightIndex];
    let lightNode;
    const color = new Color(16777215);
    if (lightDef.color !== void 0)
      color.fromArray(lightDef.color);
    const range = lightDef.range !== void 0 ? lightDef.range : 0;
    switch (lightDef.type) {
      case "directional":
        lightNode = new DirectionalLight(color);
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;
      case "point":
        lightNode = new PointLight(color);
        lightNode.distance = range;
        break;
      case "spot":
        lightNode = new SpotLight(color);
        lightNode.distance = range;
        lightDef.spot = lightDef.spot || {};
        lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== void 0 ? lightDef.spot.innerConeAngle : 0;
        lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== void 0 ? lightDef.spot.outerConeAngle : Math.PI / 4;
        lightNode.angle = lightDef.spot.outerConeAngle;
        lightNode.penumbra = 1 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
        lightNode.target.position.set(0, 0, -1);
        lightNode.add(lightNode.target);
        break;
      default:
        throw new Error(
          "THREE.GLTFLoader: Unexpected light type: " + lightDef.type
        );
    }
    lightNode.position.set(0, 0, 0);
    lightNode.decay = 2;
    assignExtrasToUserData(lightNode, lightDef);
    if (lightDef.intensity !== void 0)
      lightNode.intensity = lightDef.intensity;
    lightNode.name = parser.createUniqueName(
      lightDef.name || "light_" + lightIndex
    );
    dependency = Promise.resolve(lightNode);
    parser.cache.add(cacheKey, dependency);
    return dependency;
  }
  getDependency(type, index) {
    if (type !== "light")
      return;
    return this._loadLight(index);
  }
  createNodeAttachment(nodeIndex) {
    const self2 = this;
    const parser = this.parser;
    const json = parser.json;
    const nodeDef = json.nodes[nodeIndex];
    const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
    const lightIndex = lightDef.light;
    if (lightIndex === void 0)
      return null;
    return this._loadLight(lightIndex).then(function(light) {
      return parser._getNodeRef(self2.cache, lightIndex, light);
    });
  }
}
class GLTFMaterialsUnlitExtension$1 {
  constructor() {
    this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return MeshBasicMaterial;
  }
  extendParams(materialParams, materialDef, parser) {
    const pending = [];
    materialParams.color = new Color(1, 1, 1);
    materialParams.opacity = 1;
    const metallicRoughness = materialDef.pbrMetallicRoughness;
    if (metallicRoughness) {
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        const array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array);
        materialParams.opacity = array[3];
      }
      if (metallicRoughness.baseColorTexture !== void 0) {
        pending.push(
          parser.assignTexture(
            materialParams,
            "map",
            metallicRoughness.baseColorTexture,
            SRGBColorSpace
          )
        );
      }
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsEmissiveStrengthExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
    if (emissiveStrength !== void 0) {
      materialParams.emissiveIntensity = emissiveStrength;
    }
    return Promise.resolve();
  }
}
class GLTFMaterialsClearcoatExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.clearcoatFactor !== void 0) {
      materialParams.clearcoat = extension.clearcoatFactor;
    }
    if (extension.clearcoatTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "clearcoatMap",
          extension.clearcoatTexture
        )
      );
    }
    if (extension.clearcoatRoughnessFactor !== void 0) {
      materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
    }
    if (extension.clearcoatRoughnessTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "clearcoatRoughnessMap",
          extension.clearcoatRoughnessTexture
        )
      );
    }
    if (extension.clearcoatNormalTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "clearcoatNormalMap",
          extension.clearcoatNormalTexture
        )
      );
      if (extension.clearcoatNormalTexture.scale !== void 0) {
        const scale = extension.clearcoatNormalTexture.scale;
        materialParams.clearcoatNormalScale = new Vector2(scale, scale);
      }
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsIridescenceExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.iridescenceFactor !== void 0) {
      materialParams.iridescence = extension.iridescenceFactor;
    }
    if (extension.iridescenceTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "iridescenceMap",
          extension.iridescenceTexture
        )
      );
    }
    if (extension.iridescenceIor !== void 0) {
      materialParams.iridescenceIOR = extension.iridescenceIor;
    }
    if (materialParams.iridescenceThicknessRange === void 0) {
      materialParams.iridescenceThicknessRange = [100, 400];
    }
    if (extension.iridescenceThicknessMinimum !== void 0) {
      materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
    }
    if (extension.iridescenceThicknessMaximum !== void 0) {
      materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
    }
    if (extension.iridescenceThicknessTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "iridescenceThicknessMap",
          extension.iridescenceThicknessTexture
        )
      );
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsSheenExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    materialParams.sheenColor = new Color(0, 0, 0);
    materialParams.sheenRoughness = 0;
    materialParams.sheen = 1;
    const extension = materialDef.extensions[this.name];
    if (extension.sheenColorFactor !== void 0) {
      materialParams.sheenColor.fromArray(extension.sheenColorFactor);
    }
    if (extension.sheenRoughnessFactor !== void 0) {
      materialParams.sheenRoughness = extension.sheenRoughnessFactor;
    }
    if (extension.sheenColorTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "sheenColorMap",
          extension.sheenColorTexture,
          SRGBColorSpace
        )
      );
    }
    if (extension.sheenRoughnessTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "sheenRoughnessMap",
          extension.sheenRoughnessTexture
        )
      );
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsTransmissionExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    if (extension.transmissionFactor !== void 0) {
      materialParams.transmission = extension.transmissionFactor;
    }
    if (extension.transmissionTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "transmissionMap",
          extension.transmissionTexture
        )
      );
    }
    return Promise.all(pending);
  }
}
class GLTFMaterialsVolumeExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.thickness = extension.thicknessFactor !== void 0 ? extension.thicknessFactor : 0;
    if (extension.thicknessTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "thicknessMap",
          extension.thicknessTexture
        )
      );
    }
    materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
    const colorArray = extension.attenuationColor || [1, 1, 1];
    materialParams.attenuationColor = new Color(
      colorArray[0],
      colorArray[1],
      colorArray[2]
    );
    return Promise.all(pending);
  }
}
class GLTFMaterialsIorExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_IOR;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const extension = materialDef.extensions[this.name];
    materialParams.ior = extension.ior !== void 0 ? extension.ior : 1.5;
    return Promise.resolve();
  }
}
class GLTFMaterialsSpecularExtension$1 {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(materialIndex) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name])
      return null;
    return MeshPhysicalMaterial;
  }
  extendMaterialParams(materialIndex, materialParams) {
    const parser = this.parser;
    const materialDef = parser.json.materials[materialIndex];
    if (!materialDef.extensions || !materialDef.extensions[this.name]) {
      return Promise.resolve();
    }
    const pending = [];
    const extension = materialDef.extensions[this.name];
    materialParams.specularIntensity = extension.specularFactor !== void 0 ? extension.specularFactor : 1;
    if (extension.specularTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "specularIntensityMap",
          extension.specularTexture
        )
      );
    }
    const colorArray = extension.specularColorFactor || [1, 1, 1];
    materialParams.specularColor = new Color(
      colorArray[0],
      colorArray[1],
      colorArray[2]
    );
    if (extension.specularColorTexture !== void 0) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "specularColorMap",
          extension.specularColorTexture,
          SRGBColorSpace
        )
      );
    }
    return Promise.all(pending);
  }
}
class GLTFTextureBasisUExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
  }
  loadTexture(textureIndex) {
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[this.name]) {
      return null;
    }
    const extension = textureDef.extensions[this.name];
    const loader = parser.options.ktx2Loader;
    if (!loader) {
      if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      } else {
        return null;
      }
    }
    return parser.loadTextureImage(textureIndex, extension.source, loader);
  }
}
class GLTFTextureWebPExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
    this.isSupported = null;
  }
  loadTexture(textureIndex) {
    const name = this.name;
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[name]) {
      return null;
    }
    const extension = textureDef.extensions[name];
    const source = json.images[extension.source];
    let loader = parser.textureLoader;
    if (source.uri) {
      const handler = parser.options.manager.getHandler(source.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.detectSupport().then(function(isSupported) {
      if (isSupported)
        return parser.loadTextureImage(textureIndex, extension.source, loader);
      if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      }
      return parser.loadTexture(textureIndex);
    });
  }
  detectSupport() {
    if (!this.isSupported) {
      this.isSupported = new Promise(function(resolve) {
        const image = new Image();
        image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
        image.onload = image.onerror = function() {
          resolve(image.height === 1);
        };
      });
    }
    return this.isSupported;
  }
}
class GLTFTextureAVIFExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = EXTENSIONS.EXT_TEXTURE_AVIF;
    this.isSupported = null;
  }
  loadTexture(textureIndex) {
    const name = this.name;
    const parser = this.parser;
    const json = parser.json;
    const textureDef = json.textures[textureIndex];
    if (!textureDef.extensions || !textureDef.extensions[name]) {
      return null;
    }
    const extension = textureDef.extensions[name];
    const source = json.images[extension.source];
    let loader = parser.textureLoader;
    if (source.uri) {
      const handler = parser.options.manager.getHandler(source.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.detectSupport().then(function(isSupported) {
      if (isSupported)
        return parser.loadTextureImage(textureIndex, extension.source, loader);
      if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) {
        throw new Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported."
        );
      }
      return parser.loadTexture(textureIndex);
    });
  }
  detectSupport() {
    if (!this.isSupported) {
      this.isSupported = new Promise(function(resolve) {
        const image = new Image();
        image.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=";
        image.onload = image.onerror = function() {
          resolve(image.height === 1);
        };
      });
    }
    return this.isSupported;
  }
}
class GLTFMeshoptCompression {
  constructor(parser) {
    this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
    this.parser = parser;
  }
  loadBufferView(index) {
    const json = this.parser.json;
    const bufferView = json.bufferViews[index];
    if (bufferView.extensions && bufferView.extensions[this.name]) {
      const extensionDef = bufferView.extensions[this.name];
      const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
      const decoder = this.parser.options.meshoptDecoder;
      if (!decoder || !decoder.supported) {
        if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) {
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        } else {
          return null;
        }
      }
      return buffer.then(function(res) {
        const byteOffset = extensionDef.byteOffset || 0;
        const byteLength = extensionDef.byteLength || 0;
        const count = extensionDef.count;
        const stride = extensionDef.byteStride;
        const source = new Uint8Array(res, byteOffset, byteLength);
        if (decoder.decodeGltfBufferAsync) {
          return decoder.decodeGltfBufferAsync(
            count,
            stride,
            source,
            extensionDef.mode,
            extensionDef.filter
          ).then(function(res2) {
            return res2.buffer;
          });
        } else {
          return decoder.ready.then(function() {
            const result = new ArrayBuffer(count * stride);
            decoder.decodeGltfBuffer(
              new Uint8Array(result),
              count,
              stride,
              source,
              extensionDef.mode,
              extensionDef.filter
            );
            return result;
          });
        }
      });
    } else {
      return null;
    }
  }
}
class GLTFMeshGpuInstancing {
  constructor(parser) {
    this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
    this.parser = parser;
  }
  createNodeMesh(nodeIndex) {
    const json = this.parser.json;
    const nodeDef = json.nodes[nodeIndex];
    if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === void 0) {
      return null;
    }
    const meshDef = json.meshes[nodeDef.mesh];
    for (const primitive of meshDef.primitives) {
      if (primitive.mode !== WEBGL_CONSTANTS$1.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS$1.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS$1.TRIANGLE_FAN && primitive.mode !== void 0) {
        return null;
      }
    }
    const extensionDef = nodeDef.extensions[this.name];
    const attributesDef = extensionDef.attributes;
    const pending = [];
    const attributes = {};
    for (const key in attributesDef) {
      pending.push(
        this.parser.getDependency("accessor", attributesDef[key]).then((accessor) => {
          attributes[key] = accessor;
          return attributes[key];
        })
      );
    }
    if (pending.length < 1) {
      return null;
    }
    pending.push(this.parser.createNodeMesh(nodeIndex));
    return Promise.all(pending).then((results) => {
      const nodeObject = results.pop();
      const meshes = nodeObject.isGroup ? nodeObject.children : [nodeObject];
      const count = results[0].count;
      const instancedMeshes = [];
      for (const mesh of meshes) {
        const m2 = new Matrix4();
        const p2 = new Vector3();
        const q = new Quaternion();
        const s2 = new Vector3(1, 1, 1);
        const instancedMesh = new InstancedMesh(
          mesh.geometry,
          mesh.material,
          count
        );
        for (let i = 0; i < count; i++) {
          if (attributes.TRANSLATION) {
            p2.fromBufferAttribute(attributes.TRANSLATION, i);
          }
          if (attributes.ROTATION) {
            q.fromBufferAttribute(attributes.ROTATION, i);
          }
          if (attributes.SCALE) {
            s2.fromBufferAttribute(attributes.SCALE, i);
          }
          instancedMesh.setMatrixAt(i, m2.compose(p2, q, s2));
        }
        for (const attributeName in attributes) {
          if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") {
            mesh.geometry.setAttribute(
              attributeName,
              attributes[attributeName]
            );
          }
        }
        Object3D.prototype.copy.call(instancedMesh, mesh);
        this.parser.assignFinalMaterial(instancedMesh);
        instancedMeshes.push(instancedMesh);
      }
      if (nodeObject.isGroup) {
        nodeObject.clear();
        nodeObject.add(...instancedMeshes);
        return nodeObject;
      }
      return instancedMeshes[0];
    });
  }
}
const BINARY_EXTENSION_HEADER_MAGIC = "glTF";
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 1313821514, BIN: 5130562 };
class GLTFBinaryExtension {
  constructor(data) {
    this.name = EXTENSIONS.KHR_BINARY_GLTF;
    this.content = null;
    this.body = null;
    const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
    const textDecoder = new TextDecoder();
    this.header = {
      magic: textDecoder.decode(new Uint8Array(data.slice(0, 4))),
      version: headerView.getUint32(4, true),
      length: headerView.getUint32(8, true)
    };
    if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) {
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    } else if (this.header.version < 2) {
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    }
    const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
    const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
    let chunkIndex = 0;
    while (chunkIndex < chunkContentsLength) {
      const chunkLength = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      const chunkType = chunkView.getUint32(chunkIndex, true);
      chunkIndex += 4;
      if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
        const contentArray = new Uint8Array(
          data,
          BINARY_EXTENSION_HEADER_LENGTH + chunkIndex,
          chunkLength
        );
        this.content = textDecoder.decode(contentArray);
      } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
        const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
        this.body = data.slice(byteOffset, byteOffset + chunkLength);
      }
      chunkIndex += chunkLength;
    }
    if (this.content === null) {
      throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
}
class GLTFDracoMeshCompressionExtension {
  constructor(json, dracoLoader2) {
    if (!dracoLoader2) {
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    }
    this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
    this.json = json;
    this.dracoLoader = dracoLoader2;
    this.dracoLoader.preload();
  }
  decodePrimitive(primitive, parser) {
    const json = this.json;
    const dracoLoader2 = this.dracoLoader;
    const bufferViewIndex = primitive.extensions[this.name].bufferView;
    const gltfAttributeMap = primitive.extensions[this.name].attributes;
    const threeAttributeMap = {};
    const attributeNormalizedMap = {};
    const attributeTypeMap = {};
    for (const attributeName in gltfAttributeMap) {
      const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
    }
    for (const attributeName in primitive.attributes) {
      const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
      if (gltfAttributeMap[attributeName] !== void 0) {
        const accessorDef = json.accessors[primitive.attributes[attributeName]];
        const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
        attributeTypeMap[threeAttributeName] = componentType.name;
        attributeNormalizedMap[threeAttributeName] = accessorDef.normalized === true;
      }
    }
    return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
      return new Promise(function(resolve) {
        dracoLoader2.decodeDracoFile(
          bufferView,
          function(geometry) {
            for (const attributeName in geometry.attributes) {
              const attribute = geometry.attributes[attributeName];
              const normalized = attributeNormalizedMap[attributeName];
              if (normalized !== void 0)
                attribute.normalized = normalized;
            }
            resolve(geometry);
          },
          threeAttributeMap,
          attributeTypeMap
        );
      });
    });
  }
}
class GLTFTextureTransformExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(texture, transform) {
    if ((transform.texCoord === void 0 || transform.texCoord === texture.channel) && transform.offset === void 0 && transform.rotation === void 0 && transform.scale === void 0) {
      return texture;
    }
    texture = texture.clone();
    if (transform.texCoord !== void 0) {
      texture.channel = transform.texCoord;
    }
    if (transform.offset !== void 0) {
      texture.offset.fromArray(transform.offset);
    }
    if (transform.rotation !== void 0) {
      texture.rotation = transform.rotation;
    }
    if (transform.scale !== void 0) {
      texture.repeat.fromArray(transform.scale);
    }
    texture.needsUpdate = true;
    return texture;
  }
}
class GLTFMeshQuantizationExtension {
  constructor() {
    this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
  }
}
class GLTFCubicSplineInterpolant extends Interpolant {
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
    for (let i = 0; i !== valueSize; i++) {
      result[i] = values[offset + i];
    }
    return result;
  }
  interpolate_(i1, t0, t2, t1) {
    const result = this.resultBuffer;
    const values = this.sampleValues;
    const stride = this.valueSize;
    const stride2 = stride * 2;
    const stride3 = stride * 3;
    const td2 = t1 - t0;
    const p2 = (t2 - t0) / td2;
    const pp = p2 * p2;
    const ppp = pp * p2;
    const offset1 = i1 * stride3;
    const offset0 = offset1 - stride3;
    const s2 = -2 * ppp + 3 * pp;
    const s3 = ppp - pp;
    const s0 = 1 - s2;
    const s1 = s3 - pp + p2;
    for (let i = 0; i !== stride; i++) {
      const p0 = values[offset0 + i + stride];
      const m0 = values[offset0 + i + stride2] * td2;
      const p1 = values[offset1 + i + stride];
      const m1 = values[offset1 + i] * td2;
      result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
    }
    return result;
  }
}
const _q = new Quaternion();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
  interpolate_(i1, t0, t2, t1) {
    const result = super.interpolate_(i1, t0, t2, t1);
    _q.fromArray(result).normalize().toArray(result);
    return result;
  }
}
const WEBGL_CONSTANTS$1 = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
};
const WEBGL_COMPONENT_TYPES = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
const WEBGL_FILTERS = {
  9728: NearestFilter,
  9729: LinearFilter,
  9984: NearestMipmapNearestFilter,
  9985: LinearMipmapNearestFilter,
  9986: NearestMipmapLinearFilter,
  9987: LinearMipmapLinearFilter
};
const WEBGL_WRAPPINGS = {
  33071: ClampToEdgeWrapping,
  33648: MirroredRepeatWrapping,
  10497: RepeatWrapping
};
const WEBGL_TYPE_SIZES = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
const ATTRIBUTES = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
};
const PATH_PROPERTIES$1 = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
};
const INTERPOLATION = {
  CUBICSPLINE: void 0,
  LINEAR: InterpolateLinear,
  STEP: InterpolateDiscrete
};
const ALPHA_MODES = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function createDefaultMaterial(cache2) {
  if (cache2["DefaultMaterial"] === void 0) {
    cache2["DefaultMaterial"] = new MeshStandardMaterial({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: FrontSide
    });
  }
  return cache2["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
  for (const name in objectDef.extensions) {
    if (knownExtensions[name] === void 0) {
      object.userData.gltfExtensions = object.userData.gltfExtensions || {};
      object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
  }
}
function assignExtrasToUserData(object, gltfDef) {
  if (gltfDef.extras !== void 0) {
    if (typeof gltfDef.extras === "object") {
      Object.assign(object.userData, gltfDef.extras);
    } else {
      console.warn(
        "THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras
      );
    }
  }
}
function addMorphTargets(geometry, targets, parser) {
  let hasMorphPosition = false;
  let hasMorphNormal = false;
  let hasMorphColor = false;
  for (let i = 0, il = targets.length; i < il; i++) {
    const target2 = targets[i];
    if (target2.POSITION !== void 0)
      hasMorphPosition = true;
    if (target2.NORMAL !== void 0)
      hasMorphNormal = true;
    if (target2.COLOR_0 !== void 0)
      hasMorphColor = true;
    if (hasMorphPosition && hasMorphNormal && hasMorphColor)
      break;
  }
  if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor)
    return Promise.resolve(geometry);
  const pendingPositionAccessors = [];
  const pendingNormalAccessors = [];
  const pendingColorAccessors = [];
  for (let i = 0, il = targets.length; i < il; i++) {
    const target2 = targets[i];
    if (hasMorphPosition) {
      const pendingAccessor = target2.POSITION !== void 0 ? parser.getDependency("accessor", target2.POSITION) : geometry.attributes.position;
      pendingPositionAccessors.push(pendingAccessor);
    }
    if (hasMorphNormal) {
      const pendingAccessor = target2.NORMAL !== void 0 ? parser.getDependency("accessor", target2.NORMAL) : geometry.attributes.normal;
      pendingNormalAccessors.push(pendingAccessor);
    }
    if (hasMorphColor) {
      const pendingAccessor = target2.COLOR_0 !== void 0 ? parser.getDependency("accessor", target2.COLOR_0) : geometry.attributes.color;
      pendingColorAccessors.push(pendingAccessor);
    }
  }
  return Promise.all([
    Promise.all(pendingPositionAccessors),
    Promise.all(pendingNormalAccessors),
    Promise.all(pendingColorAccessors)
  ]).then(function(accessors) {
    const morphPositions = accessors[0];
    const morphNormals = accessors[1];
    const morphColors = accessors[2];
    if (hasMorphPosition)
      geometry.morphAttributes.position = morphPositions;
    if (hasMorphNormal)
      geometry.morphAttributes.normal = morphNormals;
    if (hasMorphColor)
      geometry.morphAttributes.color = morphColors;
    geometry.morphTargetsRelative = true;
    return geometry;
  });
}
function updateMorphTargets(mesh, meshDef) {
  mesh.updateMorphTargets();
  if (meshDef.weights !== void 0) {
    for (let i = 0, il = meshDef.weights.length; i < il; i++) {
      mesh.morphTargetInfluences[i] = meshDef.weights[i];
    }
  }
  if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
    const targetNames = meshDef.extras.targetNames;
    if (mesh.morphTargetInfluences.length === targetNames.length) {
      mesh.morphTargetDictionary = {};
      for (let i = 0, il = targetNames.length; i < il; i++) {
        mesh.morphTargetDictionary[targetNames[i]] = i;
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
    }
  }
}
function createPrimitiveKey(primitiveDef) {
  const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
  let geometryKey;
  if (dracoExtension) {
    geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
  } else {
    geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
  }
  return geometryKey;
}
function createAttributesKey(attributes) {
  let attributesKey = "";
  const keys = Object.keys(attributes).sort();
  for (let i = 0, il = keys.length; i < il; i++) {
    attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
  }
  return attributesKey;
}
function getNormalizedComponentScale(constructor) {
  switch (constructor) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function getImageURIMimeType(uri) {
  if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0)
    return "image/jpeg";
  if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0)
    return "image/webp";
  return "image/png";
}
const _identityMatrix = new Matrix4();
class GLTFParser {
  constructor(json = {}, options = {}) {
    this.json = json;
    this.extensions = {};
    this.plugins = {};
    this.options = options;
    this.cache = new GLTFRegistry();
    this.associations = /* @__PURE__ */ new Map();
    this.primitiveCache = {};
    this.nodeCache = {};
    this.meshCache = { refs: {}, uses: {} };
    this.cameraCache = { refs: {}, uses: {} };
    this.lightCache = { refs: {}, uses: {} };
    this.sourceCache = {};
    this.textureCache = {};
    this.nodeNamesUsed = {};
    let isSafari = false;
    let isFirefox = false;
    let firefoxVersion = -1;
    if (typeof navigator !== "undefined") {
      isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
      isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
      firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) {
      this.textureLoader = new TextureLoader(this.options.manager);
    } else {
      this.textureLoader = new ImageBitmapLoader(this.options.manager);
    }
    this.textureLoader.setCrossOrigin(this.options.crossOrigin);
    this.textureLoader.setRequestHeader(this.options.requestHeader);
    this.fileLoader = new FileLoader(this.options.manager);
    this.fileLoader.setResponseType("arraybuffer");
    if (this.options.crossOrigin === "use-credentials") {
      this.fileLoader.setWithCredentials(true);
    }
  }
  setExtensions(extensions) {
    this.extensions = extensions;
  }
  setPlugins(plugins) {
    this.plugins = plugins;
  }
  parse(onLoad, onError) {
    const parser = this;
    const json = this.json;
    const extensions = this.extensions;
    this.cache.removeAll();
    this.nodeCache = {};
    this._invokeAll(function(ext) {
      return ext._markDefs && ext._markDefs();
    });
    Promise.all(
      this._invokeAll(function(ext) {
        return ext.beforeRoot && ext.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        parser.getDependencies("scene"),
        parser.getDependencies("animation"),
        parser.getDependencies("camera")
      ]);
    }).then(function(dependencies) {
      const result = {
        scene: dependencies[0][json.scene || 0],
        scenes: dependencies[0],
        animations: dependencies[1],
        cameras: dependencies[2],
        asset: json.asset,
        parser,
        userData: {}
      };
      addUnknownExtensionsToUserData(extensions, result, json);
      assignExtrasToUserData(result, json);
      Promise.all(
        parser._invokeAll(function(ext) {
          return ext.afterRoot && ext.afterRoot(result);
        })
      ).then(function() {
        onLoad(result);
      });
    }).catch(onError);
  }
  _markDefs() {
    const nodeDefs = this.json.nodes || [];
    const skinDefs = this.json.skins || [];
    const meshDefs = this.json.meshes || [];
    for (let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++) {
      const joints = skinDefs[skinIndex].joints;
      for (let i = 0, il = joints.length; i < il; i++) {
        nodeDefs[joints[i]].isBone = true;
      }
    }
    for (let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++) {
      const nodeDef = nodeDefs[nodeIndex];
      if (nodeDef.mesh !== void 0) {
        this._addNodeRef(this.meshCache, nodeDef.mesh);
        if (nodeDef.skin !== void 0) {
          meshDefs[nodeDef.mesh].isSkinnedMesh = true;
        }
      }
      if (nodeDef.camera !== void 0) {
        this._addNodeRef(this.cameraCache, nodeDef.camera);
      }
    }
  }
  _addNodeRef(cache2, index) {
    if (index === void 0)
      return;
    if (cache2.refs[index] === void 0) {
      cache2.refs[index] = cache2.uses[index] = 0;
    }
    cache2.refs[index]++;
  }
  _getNodeRef(cache2, index, object) {
    if (cache2.refs[index] <= 1)
      return object;
    const ref = object.clone();
    const updateMappings = (original, clone2) => {
      const mappings = this.associations.get(original);
      if (mappings != null) {
        this.associations.set(clone2, mappings);
      }
      for (const [i, child] of original.children.entries()) {
        updateMappings(child, clone2.children[i]);
      }
    };
    updateMappings(object, ref);
    ref.name += "_instance_" + cache2.uses[index]++;
    return ref;
  }
  _invokeOne(func) {
    const extensions = Object.values(this.plugins);
    extensions.push(this);
    for (let i = 0; i < extensions.length; i++) {
      const result = func(extensions[i]);
      if (result)
        return result;
    }
    return null;
  }
  _invokeAll(func) {
    const extensions = Object.values(this.plugins);
    extensions.unshift(this);
    const pending = [];
    for (let i = 0; i < extensions.length; i++) {
      const result = func(extensions[i]);
      if (result)
        pending.push(result);
    }
    return pending;
  }
  getDependency(type, index) {
    const cacheKey = type + ":" + index;
    let dependency = this.cache.get(cacheKey);
    if (!dependency) {
      switch (type) {
        case "scene":
          dependency = this.loadScene(index);
          break;
        case "node":
          dependency = this._invokeOne(function(ext) {
            return ext.loadNode && ext.loadNode(index);
          });
          break;
        case "mesh":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMesh && ext.loadMesh(index);
          });
          break;
        case "accessor":
          dependency = this.loadAccessor(index);
          break;
        case "bufferView":
          dependency = this._invokeOne(function(ext) {
            return ext.loadBufferView && ext.loadBufferView(index);
          });
          break;
        case "buffer":
          dependency = this.loadBuffer(index);
          break;
        case "material":
          dependency = this._invokeOne(function(ext) {
            return ext.loadMaterial && ext.loadMaterial(index);
          });
          break;
        case "texture":
          dependency = this._invokeOne(function(ext) {
            return ext.loadTexture && ext.loadTexture(index);
          });
          break;
        case "skin":
          dependency = this.loadSkin(index);
          break;
        case "animation":
          dependency = this._invokeOne(function(ext) {
            return ext.loadAnimation && ext.loadAnimation(index);
          });
          break;
        case "camera":
          dependency = this.loadCamera(index);
          break;
        default:
          dependency = this._invokeOne(function(ext) {
            return ext != this && ext.getDependency && ext.getDependency(type, index);
          });
          if (!dependency) {
            throw new Error("Unknown type: " + type);
          }
          break;
      }
      this.cache.add(cacheKey, dependency);
    }
    return dependency;
  }
  getDependencies(type) {
    let dependencies = this.cache.get(type);
    if (!dependencies) {
      const parser = this;
      const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
      dependencies = Promise.all(
        defs.map(function(def, index) {
          return parser.getDependency(type, index);
        })
      );
      this.cache.add(type, dependencies);
    }
    return dependencies;
  }
  loadBuffer(bufferIndex) {
    const bufferDef = this.json.buffers[bufferIndex];
    const loader = this.fileLoader;
    if (bufferDef.type && bufferDef.type !== "arraybuffer") {
      throw new Error(
        "THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported."
      );
    }
    if (bufferDef.uri === void 0 && bufferIndex === 0) {
      return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
    }
    const options = this.options;
    return new Promise(function(resolve, reject) {
      loader.load(
        LoaderUtils.resolveURL(bufferDef.uri, options.path),
        resolve,
        void 0,
        function() {
          reject(
            new Error(
              'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'
            )
          );
        }
      );
    });
  }
  loadBufferView(bufferViewIndex) {
    const bufferViewDef = this.json.bufferViews[bufferViewIndex];
    return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
      const byteLength = bufferViewDef.byteLength || 0;
      const byteOffset = bufferViewDef.byteOffset || 0;
      return buffer.slice(byteOffset, byteOffset + byteLength);
    });
  }
  loadAccessor(accessorIndex) {
    const parser = this;
    const json = this.json;
    const accessorDef = this.json.accessors[accessorIndex];
    if (accessorDef.bufferView === void 0 && accessorDef.sparse === void 0) {
      const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
      const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
      const normalized = accessorDef.normalized === true;
      const array = new TypedArray(accessorDef.count * itemSize);
      return Promise.resolve(new BufferAttribute(array, itemSize, normalized));
    }
    const pendingBufferViews = [];
    if (accessorDef.bufferView !== void 0) {
      pendingBufferViews.push(
        this.getDependency("bufferView", accessorDef.bufferView)
      );
    } else {
      pendingBufferViews.push(null);
    }
    if (accessorDef.sparse !== void 0) {
      pendingBufferViews.push(
        this.getDependency("bufferView", accessorDef.sparse.indices.bufferView)
      );
      pendingBufferViews.push(
        this.getDependency("bufferView", accessorDef.sparse.values.bufferView)
      );
    }
    return Promise.all(pendingBufferViews).then(function(bufferViews) {
      const bufferView = bufferViews[0];
      const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
      const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
      const elementBytes = TypedArray.BYTES_PER_ELEMENT;
      const itemBytes = elementBytes * itemSize;
      const byteOffset = accessorDef.byteOffset || 0;
      const byteStride = accessorDef.bufferView !== void 0 ? json.bufferViews[accessorDef.bufferView].byteStride : void 0;
      const normalized = accessorDef.normalized === true;
      let array, bufferAttribute;
      if (byteStride && byteStride !== itemBytes) {
        const ibSlice = Math.floor(byteOffset / byteStride);
        const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
        let ib = parser.cache.get(ibCacheKey);
        if (!ib) {
          array = new TypedArray(
            bufferView,
            ibSlice * byteStride,
            accessorDef.count * byteStride / elementBytes
          );
          ib = new InterleavedBuffer(array, byteStride / elementBytes);
          parser.cache.add(ibCacheKey, ib);
        }
        bufferAttribute = new InterleavedBufferAttribute(
          ib,
          itemSize,
          byteOffset % byteStride / elementBytes,
          normalized
        );
      } else {
        if (bufferView === null) {
          array = new TypedArray(accessorDef.count * itemSize);
        } else {
          array = new TypedArray(
            bufferView,
            byteOffset,
            accessorDef.count * itemSize
          );
        }
        bufferAttribute = new BufferAttribute(array, itemSize, normalized);
      }
      if (accessorDef.sparse !== void 0) {
        const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
        const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
        const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
        const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
        const sparseIndices = new TypedArrayIndices(
          bufferViews[1],
          byteOffsetIndices,
          accessorDef.sparse.count * itemSizeIndices
        );
        const sparseValues = new TypedArray(
          bufferViews[2],
          byteOffsetValues,
          accessorDef.sparse.count * itemSize
        );
        if (bufferView !== null) {
          bufferAttribute = new BufferAttribute(
            bufferAttribute.array.slice(),
            bufferAttribute.itemSize,
            bufferAttribute.normalized
          );
        }
        for (let i = 0, il = sparseIndices.length; i < il; i++) {
          const index = sparseIndices[i];
          bufferAttribute.setX(index, sparseValues[i * itemSize]);
          if (itemSize >= 2)
            bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
          if (itemSize >= 3)
            bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
          if (itemSize >= 4)
            bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
          if (itemSize >= 5)
            throw new Error(
              "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
            );
        }
      }
      return bufferAttribute;
    });
  }
  loadTexture(textureIndex) {
    const json = this.json;
    const options = this.options;
    const textureDef = json.textures[textureIndex];
    const sourceIndex = textureDef.source;
    const sourceDef = json.images[sourceIndex];
    let loader = this.textureLoader;
    if (sourceDef.uri) {
      const handler = options.manager.getHandler(sourceDef.uri);
      if (handler !== null)
        loader = handler;
    }
    return this.loadTextureImage(textureIndex, sourceIndex, loader);
  }
  loadTextureImage(textureIndex, sourceIndex, loader) {
    const parser = this;
    const json = this.json;
    const textureDef = json.textures[textureIndex];
    const sourceDef = json.images[sourceIndex];
    const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
    if (this.textureCache[cacheKey]) {
      return this.textureCache[cacheKey];
    }
    const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
      texture.flipY = false;
      texture.name = textureDef.name || sourceDef.name || "";
      if (texture.name === "" && typeof sourceDef.uri === "string" && sourceDef.uri.startsWith("data:image/") === false) {
        texture.name = sourceDef.uri;
      }
      const samplers = json.samplers || {};
      const sampler = samplers[textureDef.sampler] || {};
      texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || LinearFilter;
      texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || LinearMipmapLinearFilter;
      texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || RepeatWrapping;
      texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || RepeatWrapping;
      parser.associations.set(texture, { textures: textureIndex });
      return texture;
    }).catch(function() {
      return null;
    });
    this.textureCache[cacheKey] = promise;
    return promise;
  }
  loadImageSource(sourceIndex, loader) {
    const parser = this;
    const json = this.json;
    const options = this.options;
    if (this.sourceCache[sourceIndex] !== void 0) {
      return this.sourceCache[sourceIndex].then((texture) => texture.clone());
    }
    const sourceDef = json.images[sourceIndex];
    const URL2 = self.URL || self.webkitURL;
    let sourceURI = sourceDef.uri || "";
    let isObjectURL = false;
    if (sourceDef.bufferView !== void 0) {
      sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
        isObjectURL = true;
        const blob = new Blob([bufferView], { type: sourceDef.mimeType });
        sourceURI = URL2.createObjectURL(blob);
        return sourceURI;
      });
    } else if (sourceDef.uri === void 0) {
      throw new Error(
        "THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView"
      );
    }
    const promise = Promise.resolve(sourceURI).then(function(sourceURI2) {
      return new Promise(function(resolve, reject) {
        let onLoad = resolve;
        if (loader.isImageBitmapLoader === true) {
          onLoad = function(imageBitmap) {
            const texture = new Texture$1(imageBitmap);
            texture.needsUpdate = true;
            resolve(texture);
          };
        }
        loader.load(
          LoaderUtils.resolveURL(sourceURI2, options.path),
          onLoad,
          void 0,
          reject
        );
      });
    }).then(function(texture) {
      if (isObjectURL === true) {
        URL2.revokeObjectURL(sourceURI);
      }
      texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
      return texture;
    }).catch(function(error) {
      console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
      throw error;
    });
    this.sourceCache[sourceIndex] = promise;
    return promise;
  }
  assignTexture(materialParams, mapName, mapDef, colorSpace) {
    const parser = this;
    return this.getDependency("texture", mapDef.index).then(function(texture) {
      if (!texture)
        return null;
      if (mapDef.texCoord !== void 0 && mapDef.texCoord > 0) {
        texture = texture.clone();
        texture.channel = mapDef.texCoord;
      }
      if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
        const transform = mapDef.extensions !== void 0 ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : void 0;
        if (transform) {
          const gltfReference = parser.associations.get(texture);
          texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
          parser.associations.set(texture, gltfReference);
        }
      }
      if (colorSpace !== void 0) {
        texture.colorSpace = colorSpace;
      }
      materialParams[mapName] = texture;
      return texture;
    });
  }
  assignFinalMaterial(mesh) {
    const geometry = mesh.geometry;
    let material = mesh.material;
    const useDerivativeTangents = geometry.attributes.tangent === void 0;
    const useVertexColors = geometry.attributes.color !== void 0;
    const useFlatShading = geometry.attributes.normal === void 0;
    if (mesh.isPoints) {
      const cacheKey = "PointsMaterial:" + material.uuid;
      let pointsMaterial = this.cache.get(cacheKey);
      if (!pointsMaterial) {
        pointsMaterial = new PointsMaterial();
        Material$1.prototype.copy.call(pointsMaterial, material);
        pointsMaterial.color.copy(material.color);
        pointsMaterial.map = material.map;
        pointsMaterial.sizeAttenuation = false;
        this.cache.add(cacheKey, pointsMaterial);
      }
      material = pointsMaterial;
    } else if (mesh.isLine) {
      const cacheKey = "LineBasicMaterial:" + material.uuid;
      let lineMaterial = this.cache.get(cacheKey);
      if (!lineMaterial) {
        lineMaterial = new LineBasicMaterial();
        Material$1.prototype.copy.call(lineMaterial, material);
        lineMaterial.color.copy(material.color);
        lineMaterial.map = material.map;
        this.cache.add(cacheKey, lineMaterial);
      }
      material = lineMaterial;
    }
    if (useDerivativeTangents || useVertexColors || useFlatShading) {
      let cacheKey = "ClonedMaterial:" + material.uuid + ":";
      if (useDerivativeTangents)
        cacheKey += "derivative-tangents:";
      if (useVertexColors)
        cacheKey += "vertex-colors:";
      if (useFlatShading)
        cacheKey += "flat-shading:";
      let cachedMaterial = this.cache.get(cacheKey);
      if (!cachedMaterial) {
        cachedMaterial = material.clone();
        if (useVertexColors)
          cachedMaterial.vertexColors = true;
        if (useFlatShading)
          cachedMaterial.flatShading = true;
        if (useDerivativeTangents) {
          if (cachedMaterial.normalScale)
            cachedMaterial.normalScale.y *= -1;
          if (cachedMaterial.clearcoatNormalScale)
            cachedMaterial.clearcoatNormalScale.y *= -1;
        }
        this.cache.add(cacheKey, cachedMaterial);
        this.associations.set(cachedMaterial, this.associations.get(material));
      }
      material = cachedMaterial;
    }
    mesh.material = material;
  }
  getMaterialType() {
    return MeshStandardMaterial;
  }
  loadMaterial(materialIndex) {
    const parser = this;
    const json = this.json;
    const extensions = this.extensions;
    const materialDef = json.materials[materialIndex];
    let materialType;
    const materialParams = {};
    const materialExtensions = materialDef.extensions || {};
    const pending = [];
    if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
      const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
      materialType = kmuExtension.getMaterialType();
      pending.push(
        kmuExtension.extendParams(materialParams, materialDef, parser)
      );
    } else {
      const metallicRoughness = materialDef.pbrMetallicRoughness || {};
      materialParams.color = new Color(1, 1, 1);
      materialParams.opacity = 1;
      if (Array.isArray(metallicRoughness.baseColorFactor)) {
        const array = metallicRoughness.baseColorFactor;
        materialParams.color.fromArray(array);
        materialParams.opacity = array[3];
      }
      if (metallicRoughness.baseColorTexture !== void 0) {
        pending.push(
          parser.assignTexture(
            materialParams,
            "map",
            metallicRoughness.baseColorTexture,
            SRGBColorSpace
          )
        );
      }
      materialParams.metalness = metallicRoughness.metallicFactor !== void 0 ? metallicRoughness.metallicFactor : 1;
      materialParams.roughness = metallicRoughness.roughnessFactor !== void 0 ? metallicRoughness.roughnessFactor : 1;
      if (metallicRoughness.metallicRoughnessTexture !== void 0) {
        pending.push(
          parser.assignTexture(
            materialParams,
            "metalnessMap",
            metallicRoughness.metallicRoughnessTexture
          )
        );
        pending.push(
          parser.assignTexture(
            materialParams,
            "roughnessMap",
            metallicRoughness.metallicRoughnessTexture
          )
        );
      }
      materialType = this._invokeOne(function(ext) {
        return ext.getMaterialType && ext.getMaterialType(materialIndex);
      });
      pending.push(
        Promise.all(
          this._invokeAll(function(ext) {
            return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
          })
        )
      );
    }
    if (materialDef.doubleSided === true) {
      materialParams.side = DoubleSide;
    }
    const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
    if (alphaMode === ALPHA_MODES.BLEND) {
      materialParams.transparent = true;
      materialParams.depthWrite = false;
    } else {
      materialParams.transparent = false;
      if (alphaMode === ALPHA_MODES.MASK) {
        materialParams.alphaTest = materialDef.alphaCutoff !== void 0 ? materialDef.alphaCutoff : 0.5;
      }
    }
    if (materialDef.normalTexture !== void 0 && materialType !== MeshBasicMaterial) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "normalMap",
          materialDef.normalTexture
        )
      );
      materialParams.normalScale = new Vector2(1, 1);
      if (materialDef.normalTexture.scale !== void 0) {
        const scale = materialDef.normalTexture.scale;
        materialParams.normalScale.set(scale, scale);
      }
    }
    if (materialDef.occlusionTexture !== void 0 && materialType !== MeshBasicMaterial) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "aoMap",
          materialDef.occlusionTexture
        )
      );
      if (materialDef.occlusionTexture.strength !== void 0) {
        materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
      }
    }
    if (materialDef.emissiveFactor !== void 0 && materialType !== MeshBasicMaterial) {
      materialParams.emissive = new Color().fromArray(
        materialDef.emissiveFactor
      );
    }
    if (materialDef.emissiveTexture !== void 0 && materialType !== MeshBasicMaterial) {
      pending.push(
        parser.assignTexture(
          materialParams,
          "emissiveMap",
          materialDef.emissiveTexture,
          SRGBColorSpace
        )
      );
    }
    return Promise.all(pending).then(function() {
      const material = new materialType(materialParams);
      if (materialDef.name)
        material.name = materialDef.name;
      assignExtrasToUserData(material, materialDef);
      parser.associations.set(material, { materials: materialIndex });
      if (materialDef.extensions)
        addUnknownExtensionsToUserData(extensions, material, materialDef);
      return material;
    });
  }
  createUniqueName(originalName) {
    const sanitizedName = PropertyBinding.sanitizeNodeName(originalName || "");
    let name = sanitizedName;
    for (let i = 1; this.nodeNamesUsed[name]; ++i) {
      name = sanitizedName + "_" + i;
    }
    this.nodeNamesUsed[name] = true;
    return name;
  }
  loadGeometries(primitives) {
    const parser = this;
    const extensions = this.extensions;
    const cache2 = this.primitiveCache;
    function createDracoPrimitive(primitive) {
      return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
        return addPrimitiveAttributes(geometry, primitive, parser);
      });
    }
    const pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      const primitive = primitives[i];
      const cacheKey = createPrimitiveKey(primitive);
      const cached = cache2[cacheKey];
      if (cached) {
        pending.push(cached.promise);
      } else {
        let geometryPromise;
        if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
          geometryPromise = createDracoPrimitive(primitive);
        } else {
          geometryPromise = addPrimitiveAttributes(
            new BufferGeometry(),
            primitive,
            parser
          );
        }
        cache2[cacheKey] = { primitive, promise: geometryPromise };
        pending.push(geometryPromise);
      }
    }
    return Promise.all(pending);
  }
  loadMesh(meshIndex) {
    const parser = this;
    const json = this.json;
    const extensions = this.extensions;
    const meshDef = json.meshes[meshIndex];
    const primitives = meshDef.primitives;
    const pending = [];
    for (let i = 0, il = primitives.length; i < il; i++) {
      const material = primitives[i].material === void 0 ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
      pending.push(material);
    }
    pending.push(parser.loadGeometries(primitives));
    return Promise.all(pending).then(function(results) {
      const materials = results.slice(0, results.length - 1);
      const geometries = results[results.length - 1];
      const meshes = [];
      for (let i = 0, il = geometries.length; i < il; i++) {
        const geometry = geometries[i];
        const primitive = primitives[i];
        let mesh;
        const material = materials[i];
        if (primitive.mode === WEBGL_CONSTANTS$1.TRIANGLES || primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_FAN || primitive.mode === void 0) {
          mesh = meshDef.isSkinnedMesh === true ? new SkinnedMesh(geometry, material) : new Mesh(geometry, material);
          if (mesh.isSkinnedMesh === true) {
            mesh.normalizeSkinWeights();
          }
          if (primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_STRIP) {
            mesh.geometry = toTrianglesDrawMode(
              mesh.geometry,
              TriangleStripDrawMode
            );
          } else if (primitive.mode === WEBGL_CONSTANTS$1.TRIANGLE_FAN) {
            mesh.geometry = toTrianglesDrawMode(
              mesh.geometry,
              TriangleFanDrawMode
            );
          }
        } else if (primitive.mode === WEBGL_CONSTANTS$1.LINES) {
          mesh = new LineSegments(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS$1.LINE_STRIP) {
          mesh = new Line(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS$1.LINE_LOOP) {
          mesh = new LineLoop(geometry, material);
        } else if (primitive.mode === WEBGL_CONSTANTS$1.POINTS) {
          mesh = new Points(geometry, material);
        } else {
          throw new Error(
            "THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode
          );
        }
        if (Object.keys(mesh.geometry.morphAttributes).length > 0) {
          updateMorphTargets(mesh, meshDef);
        }
        mesh.name = parser.createUniqueName(
          meshDef.name || "mesh_" + meshIndex
        );
        assignExtrasToUserData(mesh, meshDef);
        if (primitive.extensions)
          addUnknownExtensionsToUserData(extensions, mesh, primitive);
        parser.assignFinalMaterial(mesh);
        meshes.push(mesh);
      }
      for (let i = 0, il = meshes.length; i < il; i++) {
        parser.associations.set(meshes[i], {
          meshes: meshIndex,
          primitives: i
        });
      }
      if (meshes.length === 1) {
        return meshes[0];
      }
      const group = new Group();
      parser.associations.set(group, { meshes: meshIndex });
      for (let i = 0, il = meshes.length; i < il; i++) {
        group.add(meshes[i]);
      }
      return group;
    });
  }
  loadCamera(cameraIndex) {
    let camera2;
    const cameraDef = this.json.cameras[cameraIndex];
    const params = cameraDef[cameraDef.type];
    if (!params) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    if (cameraDef.type === "perspective") {
      camera2 = new PerspectiveCamera(
        MathUtils.radToDeg(params.yfov),
        params.aspectRatio || 1,
        params.znear || 1,
        params.zfar || 2e6
      );
    } else if (cameraDef.type === "orthographic") {
      camera2 = new OrthographicCamera(
        -params.xmag,
        params.xmag,
        params.ymag,
        -params.ymag,
        params.znear,
        params.zfar
      );
    }
    if (cameraDef.name)
      camera2.name = this.createUniqueName(cameraDef.name);
    assignExtrasToUserData(camera2, cameraDef);
    return Promise.resolve(camera2);
  }
  loadSkin(skinIndex) {
    const skinDef = this.json.skins[skinIndex];
    const pending = [];
    for (let i = 0, il = skinDef.joints.length; i < il; i++) {
      pending.push(this._loadNodeShallow(skinDef.joints[i]));
    }
    if (skinDef.inverseBindMatrices !== void 0) {
      pending.push(this.getDependency("accessor", skinDef.inverseBindMatrices));
    } else {
      pending.push(null);
    }
    return Promise.all(pending).then(function(results) {
      const inverseBindMatrices = results.pop();
      const jointNodes = results;
      const bones = [];
      const boneInverses = [];
      for (let i = 0, il = jointNodes.length; i < il; i++) {
        const jointNode = jointNodes[i];
        if (jointNode) {
          bones.push(jointNode);
          const mat2 = new Matrix4();
          if (inverseBindMatrices !== null) {
            mat2.fromArray(inverseBindMatrices.array, i * 16);
          }
          boneInverses.push(mat2);
        } else {
          console.warn(
            'THREE.GLTFLoader: Joint "%s" could not be found.',
            skinDef.joints[i]
          );
        }
      }
      return new Skeleton(bones, boneInverses);
    });
  }
  loadAnimation(animationIndex) {
    const json = this.json;
    const animationDef = json.animations[animationIndex];
    const animationName = animationDef.name ? animationDef.name : "animation_" + animationIndex;
    const pendingNodes = [];
    const pendingInputAccessors = [];
    const pendingOutputAccessors = [];
    const pendingSamplers = [];
    const pendingTargets = [];
    for (let i = 0, il = animationDef.channels.length; i < il; i++) {
      const channel = animationDef.channels[i];
      const sampler = animationDef.samplers[channel.sampler];
      const target2 = channel.target;
      const name = target2.node;
      const input = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.input] : sampler.input;
      const output = animationDef.parameters !== void 0 ? animationDef.parameters[sampler.output] : sampler.output;
      if (target2.node === void 0)
        continue;
      pendingNodes.push(this.getDependency("node", name));
      pendingInputAccessors.push(this.getDependency("accessor", input));
      pendingOutputAccessors.push(this.getDependency("accessor", output));
      pendingSamplers.push(sampler);
      pendingTargets.push(target2);
    }
    return Promise.all([
      Promise.all(pendingNodes),
      Promise.all(pendingInputAccessors),
      Promise.all(pendingOutputAccessors),
      Promise.all(pendingSamplers),
      Promise.all(pendingTargets)
    ]).then(function(dependencies) {
      const nodes = dependencies[0];
      const inputAccessors = dependencies[1];
      const outputAccessors = dependencies[2];
      const samplers = dependencies[3];
      const targets = dependencies[4];
      const tracks = [];
      for (let i = 0, il = nodes.length; i < il; i++) {
        const node = nodes[i];
        const inputAccessor = inputAccessors[i];
        const outputAccessor = outputAccessors[i];
        const sampler = samplers[i];
        const target2 = targets[i];
        if (node === void 0)
          continue;
        node.updateMatrix();
        let TypedKeyframeTrack;
        switch (PATH_PROPERTIES$1[target2.path]) {
          case PATH_PROPERTIES$1.weights:
            TypedKeyframeTrack = NumberKeyframeTrack;
            break;
          case PATH_PROPERTIES$1.rotation:
            TypedKeyframeTrack = QuaternionKeyframeTrack;
            break;
          case PATH_PROPERTIES$1.position:
          case PATH_PROPERTIES$1.scale:
          default:
            TypedKeyframeTrack = VectorKeyframeTrack;
            break;
        }
        const targetName = node.name ? node.name : node.uuid;
        const interpolation = sampler.interpolation !== void 0 ? INTERPOLATION[sampler.interpolation] : InterpolateLinear;
        const targetNames = [];
        if (PATH_PROPERTIES$1[target2.path] === PATH_PROPERTIES$1.weights) {
          node.traverse(function(object) {
            if (object.morphTargetInfluences) {
              targetNames.push(object.name ? object.name : object.uuid);
            }
          });
        } else {
          targetNames.push(targetName);
        }
        let outputArray = outputAccessor.array;
        if (outputAccessor.normalized) {
          const scale = getNormalizedComponentScale(outputArray.constructor);
          const scaled = new Float32Array(outputArray.length);
          for (let j2 = 0, jl = outputArray.length; j2 < jl; j2++) {
            scaled[j2] = outputArray[j2] * scale;
          }
          outputArray = scaled;
        }
        for (let j2 = 0, jl = targetNames.length; j2 < jl; j2++) {
          const track = new TypedKeyframeTrack(
            targetNames[j2] + "." + PATH_PROPERTIES$1[target2.path],
            inputAccessor.array,
            outputArray,
            interpolation
          );
          if (sampler.interpolation === "CUBICSPLINE") {
            track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
              const interpolantType = this instanceof QuaternionKeyframeTrack ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
              return new interpolantType(
                this.times,
                this.values,
                this.getValueSize() / 3,
                result
              );
            };
            track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
          }
          tracks.push(track);
        }
      }
      return new AnimationClip(animationName, void 0, tracks);
    });
  }
  createNodeMesh(nodeIndex) {
    const json = this.json;
    const parser = this;
    const nodeDef = json.nodes[nodeIndex];
    if (nodeDef.mesh === void 0)
      return null;
    return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
      const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
      if (nodeDef.weights !== void 0) {
        node.traverse(function(o2) {
          if (!o2.isMesh)
            return;
          for (let i = 0, il = nodeDef.weights.length; i < il; i++) {
            o2.morphTargetInfluences[i] = nodeDef.weights[i];
          }
        });
      }
      return node;
    });
  }
  loadNode(nodeIndex) {
    const json = this.json;
    const parser = this;
    const nodeDef = json.nodes[nodeIndex];
    const nodePending = parser._loadNodeShallow(nodeIndex);
    const childPending = [];
    const childrenDef = nodeDef.children || [];
    for (let i = 0, il = childrenDef.length; i < il; i++) {
      childPending.push(parser.getDependency("node", childrenDef[i]));
    }
    const skeletonPending = nodeDef.skin === void 0 ? Promise.resolve(null) : parser.getDependency("skin", nodeDef.skin);
    return Promise.all([
      nodePending,
      Promise.all(childPending),
      skeletonPending
    ]).then(function(results) {
      const node = results[0];
      const children = results[1];
      const skeleton = results[2];
      if (skeleton !== null) {
        node.traverse(function(mesh) {
          if (!mesh.isSkinnedMesh)
            return;
          mesh.bind(skeleton, _identityMatrix);
        });
      }
      for (let i = 0, il = children.length; i < il; i++) {
        node.add(children[i]);
      }
      return node;
    });
  }
  _loadNodeShallow(nodeIndex) {
    const json = this.json;
    const extensions = this.extensions;
    const parser = this;
    if (this.nodeCache[nodeIndex] !== void 0) {
      return this.nodeCache[nodeIndex];
    }
    const nodeDef = json.nodes[nodeIndex];
    const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
    const pending = [];
    const meshPromise = parser._invokeOne(function(ext) {
      return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
    });
    if (meshPromise) {
      pending.push(meshPromise);
    }
    if (nodeDef.camera !== void 0) {
      pending.push(
        parser.getDependency("camera", nodeDef.camera).then(function(camera2) {
          return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera2);
        })
      );
    }
    parser._invokeAll(function(ext) {
      return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
    }).forEach(function(promise) {
      pending.push(promise);
    });
    this.nodeCache[nodeIndex] = Promise.all(pending).then(function(objects) {
      let node;
      if (nodeDef.isBone === true) {
        node = new Bone();
      } else if (objects.length > 1) {
        node = new Group();
      } else if (objects.length === 1) {
        node = objects[0];
      } else {
        node = new Object3D();
      }
      if (node !== objects[0]) {
        for (let i = 0, il = objects.length; i < il; i++) {
          node.add(objects[i]);
        }
      }
      if (nodeDef.name) {
        node.userData.name = nodeDef.name;
        node.name = nodeName;
      }
      assignExtrasToUserData(node, nodeDef);
      if (nodeDef.extensions)
        addUnknownExtensionsToUserData(extensions, node, nodeDef);
      if (nodeDef.matrix !== void 0) {
        const matrix = new Matrix4();
        matrix.fromArray(nodeDef.matrix);
        node.applyMatrix4(matrix);
      } else {
        if (nodeDef.translation !== void 0) {
          node.position.fromArray(nodeDef.translation);
        }
        if (nodeDef.rotation !== void 0) {
          node.quaternion.fromArray(nodeDef.rotation);
        }
        if (nodeDef.scale !== void 0) {
          node.scale.fromArray(nodeDef.scale);
        }
      }
      if (!parser.associations.has(node)) {
        parser.associations.set(node, {});
      }
      parser.associations.get(node).nodes = nodeIndex;
      return node;
    });
    return this.nodeCache[nodeIndex];
  }
  loadScene(sceneIndex) {
    const extensions = this.extensions;
    const sceneDef = this.json.scenes[sceneIndex];
    const parser = this;
    const scene = new Group();
    if (sceneDef.name)
      scene.name = parser.createUniqueName(sceneDef.name);
    assignExtrasToUserData(scene, sceneDef);
    if (sceneDef.extensions)
      addUnknownExtensionsToUserData(extensions, scene, sceneDef);
    const nodeIds = sceneDef.nodes || [];
    const pending = [];
    for (let i = 0, il = nodeIds.length; i < il; i++) {
      pending.push(parser.getDependency("node", nodeIds[i]));
    }
    return Promise.all(pending).then(function(nodes) {
      for (let i = 0, il = nodes.length; i < il; i++) {
        scene.add(nodes[i]);
      }
      const reduceAssociations = (node) => {
        const reducedAssociations = /* @__PURE__ */ new Map();
        for (const [key, value] of parser.associations) {
          if (key instanceof Material$1 || key instanceof Texture$1) {
            reducedAssociations.set(key, value);
          }
        }
        node.traverse((node2) => {
          const mappings = parser.associations.get(node2);
          if (mappings != null) {
            reducedAssociations.set(node2, mappings);
          }
        });
        return reducedAssociations;
      };
      parser.associations = reduceAssociations(scene);
      return scene;
    });
  }
}
function computeBounds(geometry, primitiveDef, parser) {
  const attributes = primitiveDef.attributes;
  const box = new Box3();
  if (attributes.POSITION !== void 0) {
    const accessor = parser.json.accessors[attributes.POSITION];
    const min = accessor.min;
    const max = accessor.max;
    if (min !== void 0 && max !== void 0) {
      box.set(
        new Vector3(min[0], min[1], min[2]),
        new Vector3(max[0], max[1], max[2])
      );
      if (accessor.normalized) {
        const boxScale = getNormalizedComponentScale(
          WEBGL_COMPONENT_TYPES[accessor.componentType]
        );
        box.min.multiplyScalar(boxScale);
        box.max.multiplyScalar(boxScale);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else {
    return;
  }
  const targets = primitiveDef.targets;
  if (targets !== void 0) {
    const maxDisplacement = new Vector3();
    const vector = new Vector3();
    for (let i = 0, il = targets.length; i < il; i++) {
      const target2 = targets[i];
      if (target2.POSITION !== void 0) {
        const accessor = parser.json.accessors[target2.POSITION];
        const min = accessor.min;
        const max = accessor.max;
        if (min !== void 0 && max !== void 0) {
          vector.setX(Math.max(Math.abs(min[0]), Math.abs(max[0])));
          vector.setY(Math.max(Math.abs(min[1]), Math.abs(max[1])));
          vector.setZ(Math.max(Math.abs(min[2]), Math.abs(max[2])));
          if (accessor.normalized) {
            const boxScale = getNormalizedComponentScale(
              WEBGL_COMPONENT_TYPES[accessor.componentType]
            );
            vector.multiplyScalar(boxScale);
          }
          maxDisplacement.max(vector);
        } else {
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
        }
      }
    }
    box.expandByVector(maxDisplacement);
  }
  geometry.boundingBox = box;
  const sphere = new Sphere();
  box.getCenter(sphere.center);
  sphere.radius = box.min.distanceTo(box.max) / 2;
  geometry.boundingSphere = sphere;
}
function addPrimitiveAttributes(geometry, primitiveDef, parser) {
  const attributes = primitiveDef.attributes;
  const pending = [];
  function assignAttributeAccessor(accessorIndex, attributeName) {
    return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
      geometry.setAttribute(attributeName, accessor);
    });
  }
  for (const gltfAttributeName in attributes) {
    const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
    if (threeAttributeName in geometry.attributes)
      continue;
    pending.push(
      assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName)
    );
  }
  if (primitiveDef.indices !== void 0 && !geometry.index) {
    const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor2) {
      geometry.setIndex(accessor2);
    });
    pending.push(accessor);
  }
  assignExtrasToUserData(geometry, primitiveDef);
  computeBounds(geometry, primitiveDef, parser);
  return Promise.all(pending).then(function() {
    return primitiveDef.targets !== void 0 ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
  });
}
class WorkerPool {
  constructor(pool = 4) {
    this.pool = pool;
    this.queue = [];
    this.workers = [];
    this.workersResolve = [];
    this.workerStatus = 0;
  }
  _initWorker(workerId) {
    if (!this.workers[workerId]) {
      const worker = this.workerCreator();
      worker.addEventListener("message", this._onMessage.bind(this, workerId));
      this.workers[workerId] = worker;
    }
  }
  _getIdleWorker() {
    for (let i = 0; i < this.pool; i++)
      if (!(this.workerStatus & 1 << i))
        return i;
    return -1;
  }
  _onMessage(workerId, msg) {
    const resolve = this.workersResolve[workerId];
    resolve && resolve(msg);
    if (this.queue.length) {
      const { resolve: resolve2, msg: msg2, transfer } = this.queue.shift();
      this.workersResolve[workerId] = resolve2;
      this.workers[workerId].postMessage(msg2, transfer);
    } else {
      this.workerStatus ^= 1 << workerId;
    }
  }
  setWorkerCreator(workerCreator) {
    this.workerCreator = workerCreator;
  }
  setWorkerLimit(pool) {
    this.pool = pool;
  }
  postMessage(msg, transfer) {
    return new Promise((resolve) => {
      const workerId = this._getIdleWorker();
      if (workerId !== -1) {
        this._initWorker(workerId);
        this.workerStatus |= 1 << workerId;
        this.workersResolve[workerId] = resolve;
        this.workers[workerId].postMessage(msg, transfer);
      } else {
        this.queue.push({ resolve, msg, transfer });
      }
    });
  }
  dispose() {
    this.workers.forEach((worker) => worker.terminate());
    this.workersResolve.length = 0;
    this.workers.length = 0;
    this.queue.length = 0;
    this.workerStatus = 0;
  }
}
const t = 0, n = 2, p = 1, x$1 = 2, nt = 0, ct = 9, gt = 15, yt = 16, dt = 22, Ot = 37, Ft = 43, $t = 76, se = 83, pe = 97, xe = 100, de = 103, Ae = 109;
class Si {
  constructor() {
    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [
      {
        vendorId: 0,
        descriptorType: 0,
        descriptorBlockSize: 0,
        versionNumber: 2,
        colorModel: 0,
        colorPrimaries: 1,
        transferFunction: 2,
        flags: 0,
        texelBlockDimension: [0, 0, 0, 0],
        bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
        samples: []
      }
    ], this.keyValue = {}, this.globalData = null;
  }
}
class Ii {
  constructor(t2, e2, n2, i) {
    this._dataView = new DataView(t2.buffer, t2.byteOffset + e2, n2), this._littleEndian = i, this._offset = 0;
  }
  _nextUint8() {
    const t2 = this._dataView.getUint8(this._offset);
    return this._offset += 1, t2;
  }
  _nextUint16() {
    const t2 = this._dataView.getUint16(this._offset, this._littleEndian);
    return this._offset += 2, t2;
  }
  _nextUint32() {
    const t2 = this._dataView.getUint32(this._offset, this._littleEndian);
    return this._offset += 4, t2;
  }
  _nextUint64() {
    const t2 = this._dataView.getUint32(this._offset, this._littleEndian) + __pow(2, 32) * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return this._offset += 8, t2;
  }
  _nextInt32() {
    const t2 = this._dataView.getInt32(this._offset, this._littleEndian);
    return this._offset += 4, t2;
  }
  _skip(t2) {
    return this._offset += t2, this;
  }
  _scan(t2, e2 = 0) {
    const n2 = this._offset;
    let i = 0;
    for (; this._dataView.getUint8(this._offset) !== e2 && i < t2; )
      i++, this._offset++;
    return i < t2 && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n2, i);
  }
}
const Ti = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function Ei(t2) {
  return "undefined" != typeof TextDecoder ? new TextDecoder().decode(t2) : Buffer.from(t2).toString("utf8");
}
function Pi(t2) {
  const e2 = new Uint8Array(t2.buffer, t2.byteOffset, Ti.length);
  if (e2[0] !== Ti[0] || e2[1] !== Ti[1] || e2[2] !== Ti[2] || e2[3] !== Ti[3] || e2[4] !== Ti[4] || e2[5] !== Ti[5] || e2[6] !== Ti[6] || e2[7] !== Ti[7] || e2[8] !== Ti[8] || e2[9] !== Ti[9] || e2[10] !== Ti[10] || e2[11] !== Ti[11])
    throw new Error("Missing KTX 2.0 identifier.");
  const n2 = new Si(), i = 17 * Uint32Array.BYTES_PER_ELEMENT, s2 = new Ii(t2, Ti.length, i, true);
  n2.vkFormat = s2._nextUint32(), n2.typeSize = s2._nextUint32(), n2.pixelWidth = s2._nextUint32(), n2.pixelHeight = s2._nextUint32(), n2.pixelDepth = s2._nextUint32(), n2.layerCount = s2._nextUint32(), n2.faceCount = s2._nextUint32();
  const a2 = s2._nextUint32();
  n2.supercompressionScheme = s2._nextUint32();
  const r2 = s2._nextUint32(), o2 = s2._nextUint32(), l2 = s2._nextUint32(), f2 = s2._nextUint32(), U = s2._nextUint64(), c2 = s2._nextUint64(), h2 = new Ii(t2, Ti.length + i, 3 * a2 * 8, true);
  for (let e3 = 0; e3 < a2; e3++)
    n2.levels.push({
      levelData: new Uint8Array(
        t2.buffer,
        t2.byteOffset + h2._nextUint64(),
        h2._nextUint64()
      ),
      uncompressedByteLength: h2._nextUint64()
    });
  const _2 = new Ii(t2, r2, o2, true), p2 = {
    vendorId: _2._skip(4)._nextUint16(),
    descriptorType: _2._nextUint16(),
    versionNumber: _2._nextUint16(),
    descriptorBlockSize: _2._nextUint16(),
    colorModel: _2._nextUint8(),
    colorPrimaries: _2._nextUint8(),
    transferFunction: _2._nextUint8(),
    flags: _2._nextUint8(),
    texelBlockDimension: [
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8()
    ],
    bytesPlane: [
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8(),
      _2._nextUint8()
    ],
    samples: []
  }, g2 = (p2.descriptorBlockSize / 4 - 6) / 4;
  for (let t3 = 0; t3 < g2; t3++) {
    const e3 = {
      bitOffset: _2._nextUint16(),
      bitLength: _2._nextUint8(),
      channelType: _2._nextUint8(),
      samplePosition: [
        _2._nextUint8(),
        _2._nextUint8(),
        _2._nextUint8(),
        _2._nextUint8()
      ],
      sampleLower: -Infinity,
      sampleUpper: Infinity
    };
    64 & e3.channelType ? (e3.sampleLower = _2._nextInt32(), e3.sampleUpper = _2._nextInt32()) : (e3.sampleLower = _2._nextUint32(), e3.sampleUpper = _2._nextUint32()), p2.samples[t3] = e3;
  }
  n2.dataFormatDescriptor.length = 0, n2.dataFormatDescriptor.push(p2);
  const y2 = new Ii(t2, l2, f2, true);
  for (; y2._offset < f2; ) {
    const t3 = y2._nextUint32(), e3 = y2._scan(t3), i2 = Ei(e3), s3 = y2._scan(t3 - e3.byteLength);
    n2.keyValue[i2] = i2.match(/^ktx/i) ? Ei(s3) : s3, y2._offset % 4 && y2._skip(4 - y2._offset % 4);
  }
  if (c2 <= 0)
    return n2;
  const x = new Ii(t2, U, c2, true), u2 = x._nextUint16(), b2 = x._nextUint16(), d2 = x._nextUint32(), m2 = x._nextUint32(), w2 = x._nextUint32(), D = x._nextUint32(), B2 = [];
  for (let t3 = 0; t3 < a2; t3++)
    B2.push({
      imageFlags: x._nextUint32(),
      rgbSliceByteOffset: x._nextUint32(),
      rgbSliceByteLength: x._nextUint32(),
      alphaSliceByteOffset: x._nextUint32(),
      alphaSliceByteLength: x._nextUint32()
    });
  const L2 = U + x._offset, A2 = L2 + d2, k2 = A2 + m2, v2 = k2 + w2, S2 = new Uint8Array(t2.buffer, t2.byteOffset + L2, d2), I2 = new Uint8Array(t2.buffer, t2.byteOffset + A2, m2), O = new Uint8Array(t2.buffer, t2.byteOffset + k2, w2), T2 = new Uint8Array(t2.buffer, t2.byteOffset + v2, D);
  return n2.globalData = {
    endpointCount: u2,
    selectorCount: b2,
    imageDescs: B2,
    endpointsData: S2,
    selectorsData: I2,
    tablesData: O,
    extendedData: T2
  }, n2;
}
let A, I, B;
const g = {
  env: {
    emscripten_notify_memory_growth: function(A2) {
      B = new Uint8Array(I.exports.memory.buffer);
    }
  }
};
class Q {
  init() {
    return A || (A = "undefined" != typeof fetch ? fetch("data:application/wasm;base64," + C).then((A2) => A2.arrayBuffer()).then((A2) => WebAssembly.instantiate(A2, g)).then(this._init) : WebAssembly.instantiate(Buffer.from(C, "base64"), g).then(
      this._init
    ), A);
  }
  _init(A2) {
    I = A2.instance, g.env.emscripten_notify_memory_growth(0);
  }
  decode(A2, g2 = 0) {
    if (!I)
      throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const Q2 = A2.byteLength, C2 = I.exports.malloc(Q2);
    B.set(A2, C2), g2 = g2 || Number(I.exports.ZSTD_findDecompressedSize(C2, Q2));
    const E2 = I.exports.malloc(g2), i = I.exports.ZSTD_decompress(E2, g2, C2, Q2), D = B.slice(E2, E2 + i);
    return I.exports.free(C2), I.exports.free(E2), D;
  }
}
const C = "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ";
const _taskCache = /* @__PURE__ */ new WeakMap();
let _activeLoaders = 0;
let _zstd;
class KTX2Loader extends Loader {
  constructor(manager) {
    super(manager);
    this.transcoderPath = "";
    this.transcoderBinary = null;
    this.transcoderPending = null;
    this.workerPool = new WorkerPool();
    this.workerSourceURL = "";
    this.workerConfig = null;
    if (typeof MSC_TRANSCODER !== "undefined") {
      console.warn(
        'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
      );
    }
  }
  setTranscoderPath(path) {
    this.transcoderPath = path;
    return this;
  }
  setWorkerLimit(num) {
    this.workerPool.setWorkerLimit(num);
    return this;
  }
  detectSupport(renderer) {
    if (renderer.isWebGPURenderer === true) {
      this.workerConfig = {
        astcSupported: renderer.hasFeature("texture-compression-astc"),
        etc1Supported: false,
        etc2Supported: renderer.hasFeature("texture-compression-etc2"),
        dxtSupported: renderer.hasFeature("texture-compression-bc"),
        bptcSupported: false,
        pvrtcSupported: false
      };
    } else {
      this.workerConfig = {
        astcSupported: renderer.extensions.has("WEBGL_compressed_texture_astc"),
        etc1Supported: renderer.extensions.has("WEBGL_compressed_texture_etc1"),
        etc2Supported: renderer.extensions.has("WEBGL_compressed_texture_etc"),
        dxtSupported: renderer.extensions.has("WEBGL_compressed_texture_s3tc"),
        bptcSupported: renderer.extensions.has("EXT_texture_compression_bptc"),
        pvrtcSupported: renderer.extensions.has("WEBGL_compressed_texture_pvrtc") || renderer.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")
      };
      if (renderer.capabilities.isWebGL2) {
        this.workerConfig.etc1Supported = false;
      }
    }
    return this;
  }
  init() {
    if (!this.transcoderPending) {
      const jsLoader = new FileLoader(this.manager);
      jsLoader.setPath(this.transcoderPath);
      jsLoader.setWithCredentials(this.withCredentials);
      const jsContent = jsLoader.loadAsync("basis_transcoder.js");
      const binaryLoader = new FileLoader(this.manager);
      binaryLoader.setPath(this.transcoderPath);
      binaryLoader.setResponseType("arraybuffer");
      binaryLoader.setWithCredentials(this.withCredentials);
      const binaryContent = binaryLoader.loadAsync("basis_transcoder.wasm");
      this.transcoderPending = Promise.all([jsContent, binaryContent]).then(
        ([jsContent2, binaryContent2]) => {
          const fn = KTX2Loader.BasisWorker.toString();
          const body = [
            "/* constants */",
            "let _EngineFormat = " + JSON.stringify(KTX2Loader.EngineFormat),
            "let _TranscoderFormat = " + JSON.stringify(KTX2Loader.TranscoderFormat),
            "let _BasisFormat = " + JSON.stringify(KTX2Loader.BasisFormat),
            "/* basis_transcoder.js */",
            jsContent2,
            "/* worker */",
            fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
          ].join("\n");
          this.workerSourceURL = URL.createObjectURL(new Blob([body]));
          this.transcoderBinary = binaryContent2;
          this.workerPool.setWorkerCreator(() => {
            const worker = new Worker(this.workerSourceURL);
            const transcoderBinary = this.transcoderBinary.slice(0);
            worker.postMessage(
              { type: "init", config: this.workerConfig, transcoderBinary },
              [transcoderBinary]
            );
            return worker;
          });
        }
      );
      if (_activeLoaders > 0) {
        console.warn(
          "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
        );
      }
      _activeLoaders++;
    }
    return this.transcoderPending;
  }
  load(url, onLoad, onProgress, onError) {
    if (this.workerConfig === null) {
      throw new Error(
        "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`."
      );
    }
    const loader = new FileLoader(this.manager);
    loader.setResponseType("arraybuffer");
    loader.setWithCredentials(this.withCredentials);
    loader.load(
      url,
      (buffer) => {
        if (_taskCache.has(buffer)) {
          const cachedTask = _taskCache.get(buffer);
          return cachedTask.promise.then(onLoad).catch(onError);
        }
        this._createTexture(buffer).then((texture) => onLoad ? onLoad(texture) : null).catch(onError);
      },
      onProgress,
      onError
    );
  }
  _createTextureFrom(transcodeResult, container) {
    const {
      mipmaps,
      width,
      height,
      format,
      type,
      error,
      dfdTransferFn,
      dfdFlags
    } = transcodeResult;
    if (type === "error")
      return Promise.reject(error);
    const texture = container.layerCount > 1 ? new CompressedArrayTexture(
      mipmaps,
      width,
      height,
      container.layerCount,
      format,
      UnsignedByteType
    ) : new CompressedTexture(
      mipmaps,
      width,
      height,
      format,
      UnsignedByteType
    );
    texture.minFilter = mipmaps.length === 1 ? LinearFilter : LinearMipmapLinearFilter;
    texture.magFilter = LinearFilter;
    texture.generateMipmaps = false;
    texture.needsUpdate = true;
    texture.colorSpace = dfdTransferFn === x$1 ? SRGBColorSpace : NoColorSpace;
    texture.premultiplyAlpha = !!(dfdFlags & p);
    return texture;
  }
  _createTexture(_0) {
    return __async$2(this, arguments, function* (buffer, config = {}) {
      const container = Pi(new Uint8Array(buffer));
      if (container.vkFormat !== nt) {
        return createDataTexture(container);
      }
      const taskConfig = config;
      const texturePending = this.init().then(() => {
        return this.workerPool.postMessage(
          { type: "transcode", buffer, taskConfig },
          [buffer]
        );
      }).then((e2) => this._createTextureFrom(e2.data, container));
      _taskCache.set(buffer, { promise: texturePending });
      return texturePending;
    });
  }
  dispose() {
    this.workerPool.dispose();
    if (this.workerSourceURL)
      URL.revokeObjectURL(this.workerSourceURL);
    _activeLoaders--;
    return this;
  }
}
KTX2Loader.BasisFormat = {
  ETC1S: 0,
  UASTC_4x4: 1
};
KTX2Loader.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16
};
KTX2Loader.EngineFormat = {
  RGBAFormat,
  RGBA_ASTC_4x4_Format,
  RGBA_BPTC_Format,
  RGBA_ETC2_EAC_Format,
  RGBA_PVRTC_4BPPV1_Format,
  RGBA_S3TC_DXT5_Format,
  RGB_ETC1_Format,
  RGB_ETC2_Format,
  RGB_PVRTC_4BPPV1_Format,
  RGB_S3TC_DXT1_Format
};
KTX2Loader.BasisWorker = function() {
  let config;
  let transcoderPending;
  let BasisModule;
  const EngineFormat = _EngineFormat;
  const TranscoderFormat = _TranscoderFormat;
  const BasisFormat = _BasisFormat;
  self.addEventListener("message", function(e2) {
    const message = e2.data;
    switch (message.type) {
      case "init":
        config = message.config;
        init(message.transcoderBinary);
        break;
      case "transcode":
        transcoderPending.then(() => {
          try {
            const {
              width,
              height,
              hasAlpha,
              mipmaps,
              format,
              dfdTransferFn,
              dfdFlags
            } = transcode(message.buffer);
            const buffers = [];
            for (let i = 0; i < mipmaps.length; ++i) {
              buffers.push(mipmaps[i].data.buffer);
            }
            self.postMessage(
              {
                type: "transcode",
                id: message.id,
                width,
                height,
                hasAlpha,
                mipmaps,
                format,
                dfdTransferFn,
                dfdFlags
              },
              buffers
            );
          } catch (error) {
            console.error(error);
            self.postMessage({
              type: "error",
              id: message.id,
              error: error.message
            });
          }
        });
        break;
    }
  });
  function init(wasmBinary) {
    transcoderPending = new Promise((resolve) => {
      BasisModule = { wasmBinary, onRuntimeInitialized: resolve };
      BASIS(BasisModule);
    }).then(() => {
      BasisModule.initializeBasis();
      if (BasisModule.KTX2File === void 0) {
        console.warn(
          "THREE.KTX2Loader: Please update Basis Universal transcoder."
        );
      }
    });
  }
  function transcode(buffer) {
    const ktx2File = new BasisModule.KTX2File(new Uint8Array(buffer));
    function cleanup() {
      ktx2File.close();
      ktx2File.delete();
    }
    if (!ktx2File.isValid()) {
      cleanup();
      throw new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");
    }
    const basisFormat = ktx2File.isUASTC() ? BasisFormat.UASTC_4x4 : BasisFormat.ETC1S;
    const width = ktx2File.getWidth();
    const height = ktx2File.getHeight();
    const layers = ktx2File.getLayers() || 1;
    const levels = ktx2File.getLevels();
    const hasAlpha = ktx2File.getHasAlpha();
    const dfdTransferFn = ktx2File.getDFDTransferFunc();
    const dfdFlags = ktx2File.getDFDFlags();
    const { transcoderFormat, engineFormat } = getTranscoderFormat(
      basisFormat,
      width,
      height,
      hasAlpha
    );
    if (!width || !height || !levels) {
      cleanup();
      throw new Error("THREE.KTX2Loader:	Invalid texture");
    }
    if (!ktx2File.startTranscoding()) {
      cleanup();
      throw new Error("THREE.KTX2Loader: .startTranscoding failed");
    }
    const mipmaps = [];
    for (let mip = 0; mip < levels; mip++) {
      const layerMips = [];
      let mipWidth, mipHeight;
      for (let layer = 0; layer < layers; layer++) {
        const levelInfo = ktx2File.getImageLevelInfo(mip, layer, 0);
        mipWidth = levelInfo.origWidth < 4 ? levelInfo.origWidth : levelInfo.width;
        mipHeight = levelInfo.origHeight < 4 ? levelInfo.origHeight : levelInfo.height;
        const dst = new Uint8Array(
          ktx2File.getImageTranscodedSizeInBytes(
            mip,
            layer,
            0,
            transcoderFormat
          )
        );
        const status = ktx2File.transcodeImage(
          dst,
          mip,
          layer,
          0,
          transcoderFormat,
          0,
          -1,
          -1
        );
        if (!status) {
          cleanup();
          throw new Error("THREE.KTX2Loader: .transcodeImage failed.");
        }
        layerMips.push(dst);
      }
      mipmaps.push({
        data: concat(layerMips),
        width: mipWidth,
        height: mipHeight
      });
    }
    cleanup();
    return {
      width,
      height,
      hasAlpha,
      mipmaps,
      format: engineFormat,
      dfdTransferFn,
      dfdFlags
    };
  }
  const FORMAT_OPTIONS = [
    {
      if: "astcSupported",
      basisFormat: [BasisFormat.UASTC_4x4],
      transcoderFormat: [TranscoderFormat.ASTC_4x4, TranscoderFormat.ASTC_4x4],
      engineFormat: [
        EngineFormat.RGBA_ASTC_4x4_Format,
        EngineFormat.RGBA_ASTC_4x4_Format
      ],
      priorityETC1S: Infinity,
      priorityUASTC: 1,
      needsPowerOfTwo: false
    },
    {
      if: "bptcSupported",
      basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC_4x4],
      transcoderFormat: [TranscoderFormat.BC7_M5, TranscoderFormat.BC7_M5],
      engineFormat: [
        EngineFormat.RGBA_BPTC_Format,
        EngineFormat.RGBA_BPTC_Format
      ],
      priorityETC1S: 3,
      priorityUASTC: 2,
      needsPowerOfTwo: false
    },
    {
      if: "dxtSupported",
      basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC_4x4],
      transcoderFormat: [TranscoderFormat.BC1, TranscoderFormat.BC3],
      engineFormat: [
        EngineFormat.RGB_S3TC_DXT1_Format,
        EngineFormat.RGBA_S3TC_DXT5_Format
      ],
      priorityETC1S: 4,
      priorityUASTC: 5,
      needsPowerOfTwo: false
    },
    {
      if: "etc2Supported",
      basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC_4x4],
      transcoderFormat: [TranscoderFormat.ETC1, TranscoderFormat.ETC2],
      engineFormat: [
        EngineFormat.RGB_ETC2_Format,
        EngineFormat.RGBA_ETC2_EAC_Format
      ],
      priorityETC1S: 1,
      priorityUASTC: 3,
      needsPowerOfTwo: false
    },
    {
      if: "etc1Supported",
      basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC_4x4],
      transcoderFormat: [TranscoderFormat.ETC1],
      engineFormat: [EngineFormat.RGB_ETC1_Format],
      priorityETC1S: 2,
      priorityUASTC: 4,
      needsPowerOfTwo: false
    },
    {
      if: "pvrtcSupported",
      basisFormat: [BasisFormat.ETC1S, BasisFormat.UASTC_4x4],
      transcoderFormat: [
        TranscoderFormat.PVRTC1_4_RGB,
        TranscoderFormat.PVRTC1_4_RGBA
      ],
      engineFormat: [
        EngineFormat.RGB_PVRTC_4BPPV1_Format,
        EngineFormat.RGBA_PVRTC_4BPPV1_Format
      ],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: true
    }
  ];
  const ETC1S_OPTIONS = FORMAT_OPTIONS.sort(function(a2, b2) {
    return a2.priorityETC1S - b2.priorityETC1S;
  });
  const UASTC_OPTIONS = FORMAT_OPTIONS.sort(function(a2, b2) {
    return a2.priorityUASTC - b2.priorityUASTC;
  });
  function getTranscoderFormat(basisFormat, width, height, hasAlpha) {
    let transcoderFormat;
    let engineFormat;
    const options = basisFormat === BasisFormat.ETC1S ? ETC1S_OPTIONS : UASTC_OPTIONS;
    for (let i = 0; i < options.length; i++) {
      const opt = options[i];
      if (!config[opt.if])
        continue;
      if (!opt.basisFormat.includes(basisFormat))
        continue;
      if (hasAlpha && opt.transcoderFormat.length < 2)
        continue;
      if (opt.needsPowerOfTwo && !(isPowerOfTwo(width) && isPowerOfTwo(height)))
        continue;
      transcoderFormat = opt.transcoderFormat[hasAlpha ? 1 : 0];
      engineFormat = opt.engineFormat[hasAlpha ? 1 : 0];
      return { transcoderFormat, engineFormat };
    }
    console.warn(
      "THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."
    );
    transcoderFormat = TranscoderFormat.RGBA32;
    engineFormat = EngineFormat.RGBAFormat;
    return { transcoderFormat, engineFormat };
  }
  function isPowerOfTwo(value) {
    if (value <= 2)
      return true;
    return (value & value - 1) === 0 && value !== 0;
  }
  function concat(arrays) {
    let totalByteLength = 0;
    for (let i = 0; i < arrays.length; i++) {
      const array = arrays[i];
      totalByteLength += array.byteLength;
    }
    const result = new Uint8Array(totalByteLength);
    let byteOffset = 0;
    for (let i = 0; i < arrays.length; i++) {
      const array = arrays[i];
      result.set(array, byteOffset);
      byteOffset += array.byteLength;
    }
    return result;
  }
};
const FORMAT_MAP = {
  [Ae]: RGBAFormat,
  [pe]: RGBAFormat,
  [Ot]: RGBAFormat,
  [Ft]: RGBAFormat,
  [de]: RGFormat,
  [se]: RGFormat,
  [yt]: RGFormat,
  [dt]: RGFormat,
  [xe]: RedFormat,
  [$t]: RedFormat,
  [gt]: RedFormat,
  [ct]: RedFormat
};
const TYPE_MAP = {
  [Ae]: FloatType,
  [pe]: HalfFloatType,
  [Ot]: UnsignedByteType,
  [Ft]: UnsignedByteType,
  [de]: FloatType,
  [se]: HalfFloatType,
  [yt]: UnsignedByteType,
  [dt]: UnsignedByteType,
  [xe]: FloatType,
  [$t]: HalfFloatType,
  [gt]: UnsignedByteType,
  [ct]: UnsignedByteType
};
const COLOR_SPACE_MAP = {
  [Ft]: SRGBColorSpace,
  [dt]: SRGBColorSpace,
  [gt]: SRGBColorSpace
};
function createDataTexture(container) {
  return __async$2(this, null, function* () {
    const { vkFormat, pixelWidth, pixelHeight, pixelDepth } = container;
    if (FORMAT_MAP[vkFormat] === void 0) {
      throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
    }
    const level = container.levels[0];
    let levelData;
    let view2;
    if (container.supercompressionScheme === t) {
      levelData = level.levelData;
    } else if (container.supercompressionScheme === n) {
      if (!_zstd) {
        _zstd = new Promise((resolve) => __async$2(this, null, function* () {
          const zstd = new Q();
          yield zstd.init();
          resolve(zstd);
        }));
      }
      levelData = (yield _zstd).decode(
        level.levelData,
        level.uncompressedByteLength
      );
    } else {
      throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    }
    if (TYPE_MAP[vkFormat] === FloatType) {
      view2 = new Float32Array(
        levelData.buffer,
        levelData.byteOffset,
        levelData.byteLength / Float32Array.BYTES_PER_ELEMENT
      );
    } else if (TYPE_MAP[vkFormat] === HalfFloatType) {
      view2 = new Uint16Array(
        levelData.buffer,
        levelData.byteOffset,
        levelData.byteLength / Uint16Array.BYTES_PER_ELEMENT
      );
    } else {
      view2 = levelData;
    }
    const texture = pixelDepth === 0 ? new DataTexture(view2, pixelWidth, pixelHeight) : new Data3DTexture(view2, pixelWidth, pixelHeight, pixelDepth);
    texture.type = TYPE_MAP[vkFormat];
    texture.format = FORMAT_MAP[vkFormat];
    texture.colorSpace = COLOR_SPACE_MAP[vkFormat] || NoColorSpace;
    texture.needsUpdate = true;
    return Promise.resolve(texture);
  });
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$9, _b$8;
const $retainerCount = Symbol("retainerCount");
const $recentlyUsed = Symbol("recentlyUsed");
const $evict = Symbol("evict");
const $evictionThreshold = Symbol("evictionThreshold");
const $cache = Symbol("cache");
class CacheEvictionPolicy {
  constructor(cache2, evictionThreshold = 5) {
    this[_a$9] = /* @__PURE__ */ new Map();
    this[_b$8] = [];
    this[$cache] = cache2;
    this[$evictionThreshold] = evictionThreshold;
  }
  set evictionThreshold(value) {
    this[$evictionThreshold] = value;
    this[$evict]();
  }
  get evictionThreshold() {
    return this[$evictionThreshold];
  }
  get cache() {
    return this[$cache];
  }
  retainerCount(key) {
    return this[$retainerCount].get(key) || 0;
  }
  reset() {
    this[$retainerCount].clear();
    this[$recentlyUsed] = [];
  }
  retain(key) {
    if (!this[$retainerCount].has(key)) {
      this[$retainerCount].set(key, 0);
    }
    this[$retainerCount].set(key, this[$retainerCount].get(key) + 1);
    const recentlyUsedIndex = this[$recentlyUsed].indexOf(key);
    if (recentlyUsedIndex !== -1) {
      this[$recentlyUsed].splice(recentlyUsedIndex, 1);
    }
    this[$recentlyUsed].unshift(key);
    this[$evict]();
  }
  release(key) {
    if (this[$retainerCount].has(key)) {
      this[$retainerCount].set(
        key,
        Math.max(this[$retainerCount].get(key) - 1, 0)
      );
    }
    this[$evict]();
  }
  [(_a$9 = $retainerCount, _b$8 = $recentlyUsed, $evict)]() {
    if (this[$recentlyUsed].length < this[$evictionThreshold]) {
      return;
    }
    for (let i = this[$recentlyUsed].length - 1; i >= this[$evictionThreshold]; --i) {
      const key = this[$recentlyUsed][i];
      const retainerCount = this[$retainerCount].get(key);
      if (retainerCount === 0) {
        this[$cache].delete(key);
        this[$recentlyUsed].splice(i, 1);
      }
    }
  }
}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ensureUniqueNames = (variantNames) => {
  const uniqueNames = [];
  const knownNames = /* @__PURE__ */ new Set();
  for (const name of variantNames) {
    let uniqueName = name;
    let suffix = 0;
    while (knownNames.has(uniqueName)) {
      uniqueName = name + "." + ++suffix;
    }
    knownNames.add(uniqueName);
    uniqueNames.push(uniqueName);
  }
  return uniqueNames;
};
const mappingsArrayToTable = (extensionDef) => {
  const table = /* @__PURE__ */ new Map();
  for (const mapping of extensionDef.mappings) {
    for (const variant of mapping.variants) {
      table.set(variant, {
        material: null,
        gltfMaterialIndex: mapping.material
      });
    }
  }
  return table;
};
class GLTFMaterialsVariantsExtension {
  constructor(parser) {
    this.parser = parser;
    this.name = "KHR_materials_variants";
  }
  afterRoot(gltf) {
    const parser = this.parser;
    const json = parser.json;
    if (json.extensions === void 0 || json.extensions[this.name] === void 0) {
      return null;
    }
    const extensionDef = json.extensions[this.name];
    const variantsDef = extensionDef.variants || [];
    const variants = ensureUniqueNames(variantsDef.map((v2) => v2.name));
    for (const scene of gltf.scenes) {
      scene.traverse((object) => {
        const mesh = object;
        if (!mesh.material) {
          return;
        }
        const association = parser.associations.get(mesh);
        if (association == null || association.meshes == null || association.primitives == null) {
          return;
        }
        const meshDef = json.meshes[association.meshes];
        const primitivesDef = meshDef.primitives;
        const primitiveDef = primitivesDef[association.primitives];
        const extensionsDef = primitiveDef.extensions;
        if (!extensionsDef || !extensionsDef[this.name]) {
          return;
        }
        mesh.userData.variantMaterials = mappingsArrayToTable(
          extensionsDef[this.name]
        );
      });
    }
    gltf.userData.variants = variants;
    return Promise.resolve();
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$8, _b$7;
Texture$1.DEFAULT_ANISOTROPY = 4;
const loadWithLoader = (url, loader, progressCallback = () => {
}) => {
  const onProgress = (event) => {
    const fraction = event.loaded / event.total;
    progressCallback(
      Math.max(0, Math.min(1, isFinite(fraction) ? fraction : 1))
    );
  };
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, onProgress, reject);
  });
};
const fetchScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    document.body.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = src;
  });
};
const cache = /* @__PURE__ */ new Map();
const preloaded = /* @__PURE__ */ new Map();
let dracoDecoderLocation;
const dracoLoader = new DRACOLoader();
let ktx2TranscoderLocation;
const ktx2Loader = new KTX2Loader();
let meshoptDecoderLocation;
let meshoptDecoder;
const $loader = Symbol("loader");
const $evictionPolicy = Symbol("evictionPolicy");
const $GLTFInstance = Symbol("GLTFInstance");
class CachingGLTFLoader extends EventDispatcher {
  constructor(GLTFInstance2) {
    super();
    this[_b$7] = new GLTFLoader().register(
      (parser) => new GLTFMaterialsVariantsExtension(parser)
    );
    this[$GLTFInstance] = GLTFInstance2;
    this[$loader].setDRACOLoader(dracoLoader);
    this[$loader].setKTX2Loader(ktx2Loader);
  }
  static setDRACODecoderLocation(url) {
    dracoDecoderLocation = url;
    dracoLoader.setDecoderPath(url);
  }
  static getDRACODecoderLocation() {
    return dracoDecoderLocation;
  }
  static setKTX2TranscoderLocation(url) {
    ktx2TranscoderLocation = url;
    ktx2Loader.setTranscoderPath(url);
  }
  static getKTX2TranscoderLocation() {
    return ktx2TranscoderLocation;
  }
  static setMeshoptDecoderLocation(url) {
    if (meshoptDecoderLocation !== url) {
      meshoptDecoderLocation = url;
      meshoptDecoder = fetchScript(url).then(() => MeshoptDecoder.ready).then(() => MeshoptDecoder);
    }
  }
  static getMeshoptDecoderLocation() {
    return meshoptDecoderLocation;
  }
  static initializeKTX2Loader(renderer) {
    ktx2Loader.detectSupport(renderer);
  }
  static get cache() {
    return cache;
  }
  static clearCache() {
    cache.forEach((_value, url) => {
      this.delete(url);
    });
    this[$evictionPolicy].reset();
  }
  static has(url) {
    return cache.has(url);
  }
  static delete(url) {
    return __async$2(this, null, function* () {
      if (!this.has(url)) {
        return;
      }
      const gltfLoads = cache.get(url);
      preloaded.delete(url);
      cache.delete(url);
      const gltf = yield gltfLoads;
      gltf.dispose();
    });
  }
  static hasFinishedLoading(url) {
    return !!preloaded.get(url);
  }
  get [(_a$8 = $evictionPolicy, _b$7 = $loader, $evictionPolicy)]() {
    return this.constructor[$evictionPolicy];
  }
  preload(url, element, progressCallback = () => {
  }) {
    return __async$2(this, null, function* () {
      this[$loader].setWithCredentials(CachingGLTFLoader.withCredentials);
      this.dispatchEvent({ type: "preload", element, src: url });
      if (!cache.has(url)) {
        if (meshoptDecoder != null) {
          this[$loader].setMeshoptDecoder(yield meshoptDecoder);
        }
        const rawGLTFLoads = loadWithLoader(url, this[$loader], (progress) => {
          progressCallback(progress * 0.8);
        });
        const GLTFInstance2 = this[$GLTFInstance];
        const gltfInstanceLoads = rawGLTFLoads.then((rawGLTF) => {
          return GLTFInstance2.prepare(rawGLTF);
        }).then((preparedGLTF) => {
          progressCallback(0.9);
          return new GLTFInstance2(preparedGLTF);
        }).catch((reason) => {
          console.error(reason);
          return new GLTFInstance2();
        });
        cache.set(url, gltfInstanceLoads);
      }
      yield cache.get(url);
      preloaded.set(url, true);
      if (progressCallback) {
        progressCallback(1);
      }
    });
  }
  load(url, element, progressCallback = () => {
  }) {
    return __async$2(this, null, function* () {
      yield this.preload(url, element, progressCallback);
      const gltf = yield cache.get(url);
      const clone2 = yield gltf.clone();
      this[$evictionPolicy].retain(url);
      clone2.dispose = () => {
        this[$evictionPolicy].release(url);
      };
      return clone2;
    });
  }
}
CachingGLTFLoader[_a$8] = new CacheEvictionPolicy(CachingGLTFLoader);
class CSS2DObject extends Object3D {
  constructor(element = document.createElement("div")) {
    super();
    this.isCSS2DObject = true;
    this.element = element;
    this.element.style.position = "absolute";
    this.element.style.userSelect = "none";
    this.element.setAttribute("draggable", false);
    this.center = new Vector2(0.5, 0.5);
    this.addEventListener("removed", function() {
      this.traverse(function(object) {
        if (object.element instanceof Element && object.element.parentNode !== null) {
          object.element.parentNode.removeChild(object.element);
        }
      });
    });
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    this.element = source.element.cloneNode(true);
    this.center = source.center;
    return this;
  }
}
const _vector = new Vector3();
const _viewMatrix = new Matrix4();
const _viewProjectionMatrix = new Matrix4();
const _a$7 = new Vector3();
const _b$6 = new Vector3();
class CSS2DRenderer {
  constructor(parameters = {}) {
    const _this = this;
    let _width, _height;
    let _widthHalf, _heightHalf;
    const cache2 = {
      objects: /* @__PURE__ */ new WeakMap()
    };
    const domElement = parameters.element !== void 0 ? parameters.element : document.createElement("div");
    domElement.style.overflow = "hidden";
    this.domElement = domElement;
    this.getSize = function() {
      return {
        width: _width,
        height: _height
      };
    };
    this.render = function(scene, camera2) {
      if (scene.matrixWorldAutoUpdate === true)
        scene.updateMatrixWorld();
      if (camera2.parent === null && camera2.matrixWorldAutoUpdate === true)
        camera2.updateMatrixWorld();
      _viewMatrix.copy(camera2.matrixWorldInverse);
      _viewProjectionMatrix.multiplyMatrices(
        camera2.projectionMatrix,
        _viewMatrix
      );
      renderObject(scene, scene, camera2);
      zOrder(scene);
    };
    this.setSize = function(width, height) {
      _width = width;
      _height = height;
      _widthHalf = _width / 2;
      _heightHalf = _height / 2;
      domElement.style.width = width + "px";
      domElement.style.height = height + "px";
    };
    function renderObject(object, scene, camera2) {
      if (object.isCSS2DObject) {
        _vector.setFromMatrixPosition(object.matrixWorld);
        _vector.applyMatrix4(_viewProjectionMatrix);
        const visible = object.visible === true && _vector.z >= -1 && _vector.z <= 1 && object.layers.test(camera2.layers) === true;
        object.element.style.display = visible === true ? "" : "none";
        if (visible === true) {
          object.onBeforeRender(_this, scene, camera2);
          const element = object.element;
          element.style.transform = "translate(" + -100 * object.center.x + "%," + -100 * object.center.y + "%)translate(" + (_vector.x * _widthHalf + _widthHalf) + "px," + (-_vector.y * _heightHalf + _heightHalf) + "px)";
          if (element.parentNode !== domElement) {
            domElement.appendChild(element);
          }
          object.onAfterRender(_this, scene, camera2);
        }
        const objectData = {
          distanceToCameraSquared: getDistanceToSquared(camera2, object)
        };
        cache2.objects.set(object, objectData);
      }
      for (let i = 0, l2 = object.children.length; i < l2; i++) {
        renderObject(object.children[i], scene, camera2);
      }
    }
    function getDistanceToSquared(object1, object2) {
      _a$7.setFromMatrixPosition(object1.matrixWorld);
      _b$6.setFromMatrixPosition(object2.matrixWorld);
      return _a$7.distanceToSquared(_b$6);
    }
    function filterAndFlatten(scene) {
      const result = [];
      scene.traverse(function(object) {
        if (object.isCSS2DObject)
          result.push(object);
      });
      return result;
    }
    function zOrder(scene) {
      const sorted = filterAndFlatten(scene).sort(function(a2, b2) {
        if (a2.renderOrder !== b2.renderOrder) {
          return b2.renderOrder - a2.renderOrder;
        }
        const distanceA = cache2.objects.get(a2).distanceToCameraSquared;
        const distanceB = cache2.objects.get(b2).distanceToCameraSquared;
        return distanceA - distanceB;
      });
      const zMax = sorted.length;
      for (let i = 0, l2 = sorted.length; i < l2; i++) {
        sorted[i].element.style.zIndex = zMax - i;
      }
    }
  }
}
function reduceVertices(object, func, initialValue) {
  let value = initialValue;
  const vertex = new Vector3();
  object.updateWorldMatrix(true, true);
  object.traverseVisible((child) => {
    const { geometry } = child;
    if (geometry !== void 0) {
      const { position } = geometry.attributes;
      if (position !== void 0) {
        for (let i = 0, l2 = position.count; i < l2; i++) {
          if (child.isMesh) {
            child.getVertexPosition(i, vertex);
          } else {
            vertex.fromBufferAttribute(position, i);
          }
          if (!child.isSkinnedMesh) {
            vertex.applyMatrix4(child.matrixWorld);
          }
          value = func(value, vertex);
        }
      }
    }
  });
  return value;
}
const KHR_mesh_quantization_ExtraAttrTypes = {
  POSITION: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "unsigned byte normalized",
    "short",
    "short normalized",
    "unsigned short",
    "unsigned short normalized"
  ],
  NORMAL: ["byte normalized", "short normalized"],
  TANGENT: ["byte normalized", "short normalized"],
  TEXCOORD: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "short",
    "short normalized",
    "unsigned short"
  ]
};
class GLTFExporter {
  constructor() {
    this.pluginCallbacks = [];
    this.register(function(writer) {
      return new GLTFLightExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsUnlitExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsTransmissionExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsVolumeExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsIorExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsSpecularExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsClearcoatExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsIridescenceExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsSheenExtension(writer);
    });
    this.register(function(writer) {
      return new GLTFMaterialsEmissiveStrengthExtension(writer);
    });
  }
  register(callback) {
    if (this.pluginCallbacks.indexOf(callback) === -1) {
      this.pluginCallbacks.push(callback);
    }
    return this;
  }
  unregister(callback) {
    if (this.pluginCallbacks.indexOf(callback) !== -1) {
      this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
    }
    return this;
  }
  parse(input, onDone, onError, options) {
    const writer = new GLTFWriter();
    const plugins = [];
    for (let i = 0, il = this.pluginCallbacks.length; i < il; i++) {
      plugins.push(this.pluginCallbacks[i](writer));
    }
    writer.setPlugins(plugins);
    writer.write(input, onDone, options).catch(onError);
  }
  parseAsync(input, options) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.parse(input, resolve, reject, options);
    });
  }
}
const WEBGL_CONSTANTS = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  ARRAY_BUFFER: 34962,
  ELEMENT_ARRAY_BUFFER: 34963,
  NEAREST: 9728,
  LINEAR: 9729,
  NEAREST_MIPMAP_NEAREST: 9984,
  LINEAR_MIPMAP_NEAREST: 9985,
  NEAREST_MIPMAP_LINEAR: 9986,
  LINEAR_MIPMAP_LINEAR: 9987,
  CLAMP_TO_EDGE: 33071,
  MIRRORED_REPEAT: 33648,
  REPEAT: 10497
};
const KHR_MESH_QUANTIZATION = "KHR_mesh_quantization";
const THREE_TO_WEBGL = {};
THREE_TO_WEBGL[NearestFilter] = WEBGL_CONSTANTS.NEAREST;
THREE_TO_WEBGL[NearestMipmapNearestFilter] = WEBGL_CONSTANTS.NEAREST_MIPMAP_NEAREST;
THREE_TO_WEBGL[NearestMipmapLinearFilter] = WEBGL_CONSTANTS.NEAREST_MIPMAP_LINEAR;
THREE_TO_WEBGL[LinearFilter] = WEBGL_CONSTANTS.LINEAR;
THREE_TO_WEBGL[LinearMipmapNearestFilter] = WEBGL_CONSTANTS.LINEAR_MIPMAP_NEAREST;
THREE_TO_WEBGL[LinearMipmapLinearFilter] = WEBGL_CONSTANTS.LINEAR_MIPMAP_LINEAR;
THREE_TO_WEBGL[ClampToEdgeWrapping] = WEBGL_CONSTANTS.CLAMP_TO_EDGE;
THREE_TO_WEBGL[RepeatWrapping] = WEBGL_CONSTANTS.REPEAT;
THREE_TO_WEBGL[MirroredRepeatWrapping] = WEBGL_CONSTANTS.MIRRORED_REPEAT;
const PATH_PROPERTIES = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
};
const DEFAULT_SPECULAR_COLOR = new Color();
const GLB_HEADER_BYTES = 12;
const GLB_HEADER_MAGIC = 1179937895;
const GLB_VERSION = 2;
const GLB_CHUNK_PREFIX_BYTES = 8;
const GLB_CHUNK_TYPE_JSON = 1313821514;
const GLB_CHUNK_TYPE_BIN = 5130562;
function equalArray(array1, array2) {
  return array1.length === array2.length && array1.every(function(element, index) {
    return element === array2[index];
  });
}
function stringToArrayBuffer(text) {
  return new TextEncoder().encode(text).buffer;
}
function isIdentityMatrix(matrix) {
  return equalArray(
    matrix.elements,
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  );
}
function getMinMax(attribute, start, count) {
  const output = {
    min: new Array(attribute.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(attribute.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let i = start; i < start + count; i++) {
    for (let a2 = 0; a2 < attribute.itemSize; a2++) {
      let value;
      if (attribute.itemSize > 4) {
        value = attribute.array[i * attribute.itemSize + a2];
      } else {
        if (a2 === 0)
          value = attribute.getX(i);
        else if (a2 === 1)
          value = attribute.getY(i);
        else if (a2 === 2)
          value = attribute.getZ(i);
        else if (a2 === 3)
          value = attribute.getW(i);
        if (attribute.normalized === true) {
          value = MathUtils.normalize(value, attribute.array);
        }
      }
      output.min[a2] = Math.min(output.min[a2], value);
      output.max[a2] = Math.max(output.max[a2], value);
    }
  }
  return output;
}
function getPaddedBufferSize(bufferSize) {
  return Math.ceil(bufferSize / 4) * 4;
}
function getPaddedArrayBuffer(arrayBuffer, paddingByte = 0) {
  const paddedLength = getPaddedBufferSize(arrayBuffer.byteLength);
  if (paddedLength !== arrayBuffer.byteLength) {
    const array = new Uint8Array(paddedLength);
    array.set(new Uint8Array(arrayBuffer));
    if (paddingByte !== 0) {
      for (let i = arrayBuffer.byteLength; i < paddedLength; i++) {
        array[i] = paddingByte;
      }
    }
    return array.buffer;
  }
  return arrayBuffer;
}
function getCanvas() {
  if (typeof document === "undefined" && typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(1, 1);
  }
  return document.createElement("canvas");
}
function getToBlobPromise(canvas, mimeType) {
  if (canvas.toBlob !== void 0) {
    return new Promise((resolve) => canvas.toBlob(resolve, mimeType));
  }
  let quality;
  if (mimeType === "image/jpeg") {
    quality = 0.92;
  } else if (mimeType === "image/webp") {
    quality = 0.8;
  }
  return canvas.convertToBlob({
    type: mimeType,
    quality
  });
}
class GLTFWriter {
  constructor() {
    this.plugins = [];
    this.options = {};
    this.pending = [];
    this.buffers = [];
    this.byteOffset = 0;
    this.buffers = [];
    this.nodeMap = /* @__PURE__ */ new Map();
    this.skins = [];
    this.extensionsUsed = {};
    this.extensionsRequired = {};
    this.uids = /* @__PURE__ */ new Map();
    this.uid = 0;
    this.json = {
      asset: {
        version: "2.0",
        generator: "THREE.GLTFExporter"
      }
    };
    this.cache = {
      meshes: /* @__PURE__ */ new Map(),
      attributes: /* @__PURE__ */ new Map(),
      attributesNormalized: /* @__PURE__ */ new Map(),
      materials: /* @__PURE__ */ new Map(),
      textures: /* @__PURE__ */ new Map(),
      images: /* @__PURE__ */ new Map()
    };
  }
  setPlugins(plugins) {
    this.plugins = plugins;
  }
  write(_0, _1) {
    return __async$2(this, arguments, function* (input, onDone, options = {}) {
      this.options = Object.assign(
        {
          binary: false,
          trs: false,
          onlyVisible: true,
          maxTextureSize: Infinity,
          animations: [],
          includeCustomExtensions: false
        },
        options
      );
      if (this.options.animations.length > 0) {
        this.options.trs = true;
      }
      this.processInput(input);
      yield Promise.all(this.pending);
      const writer = this;
      const buffers = writer.buffers;
      const json = writer.json;
      options = writer.options;
      const extensionsUsed = writer.extensionsUsed;
      const extensionsRequired = writer.extensionsRequired;
      const blob = new Blob(buffers, { type: "application/octet-stream" });
      const extensionsUsedList = Object.keys(extensionsUsed);
      const extensionsRequiredList = Object.keys(extensionsRequired);
      if (extensionsUsedList.length > 0)
        json.extensionsUsed = extensionsUsedList;
      if (extensionsRequiredList.length > 0)
        json.extensionsRequired = extensionsRequiredList;
      if (json.buffers && json.buffers.length > 0)
        json.buffers[0].byteLength = blob.size;
      if (options.binary === true) {
        const reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onloadend = function() {
          const binaryChunk = getPaddedArrayBuffer(reader.result);
          const binaryChunkPrefix = new DataView(
            new ArrayBuffer(GLB_CHUNK_PREFIX_BYTES)
          );
          binaryChunkPrefix.setUint32(0, binaryChunk.byteLength, true);
          binaryChunkPrefix.setUint32(4, GLB_CHUNK_TYPE_BIN, true);
          const jsonChunk = getPaddedArrayBuffer(
            stringToArrayBuffer(JSON.stringify(json)),
            32
          );
          const jsonChunkPrefix = new DataView(
            new ArrayBuffer(GLB_CHUNK_PREFIX_BYTES)
          );
          jsonChunkPrefix.setUint32(0, jsonChunk.byteLength, true);
          jsonChunkPrefix.setUint32(4, GLB_CHUNK_TYPE_JSON, true);
          const header = new ArrayBuffer(GLB_HEADER_BYTES);
          const headerView = new DataView(header);
          headerView.setUint32(0, GLB_HEADER_MAGIC, true);
          headerView.setUint32(4, GLB_VERSION, true);
          const totalByteLength = GLB_HEADER_BYTES + jsonChunkPrefix.byteLength + jsonChunk.byteLength + binaryChunkPrefix.byteLength + binaryChunk.byteLength;
          headerView.setUint32(8, totalByteLength, true);
          const glbBlob = new Blob(
            [header, jsonChunkPrefix, jsonChunk, binaryChunkPrefix, binaryChunk],
            { type: "application/octet-stream" }
          );
          const glbReader = new FileReader();
          glbReader.readAsArrayBuffer(glbBlob);
          glbReader.onloadend = function() {
            onDone(glbReader.result);
          };
        };
      } else {
        if (json.buffers && json.buffers.length > 0) {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function() {
            const base64data = reader.result;
            json.buffers[0].uri = base64data;
            onDone(json);
          };
        } else {
          onDone(json);
        }
      }
    });
  }
  serializeUserData(object, objectDef) {
    if (Object.keys(object.userData).length === 0)
      return;
    const options = this.options;
    const extensionsUsed = this.extensionsUsed;
    try {
      const json = JSON.parse(JSON.stringify(object.userData));
      if (options.includeCustomExtensions && json.gltfExtensions) {
        if (objectDef.extensions === void 0)
          objectDef.extensions = {};
        for (const extensionName in json.gltfExtensions) {
          objectDef.extensions[extensionName] = json.gltfExtensions[extensionName];
          extensionsUsed[extensionName] = true;
        }
        delete json.gltfExtensions;
      }
      if (Object.keys(json).length > 0)
        objectDef.extras = json;
    } catch (error) {
      console.warn(
        "THREE.GLTFExporter: userData of '" + object.name + "' won't be serialized because of JSON.stringify error - " + error.message
      );
    }
  }
  getUID(attribute, isRelativeCopy = false) {
    if (this.uids.has(attribute) === false) {
      const uids2 = /* @__PURE__ */ new Map();
      uids2.set(true, this.uid++);
      uids2.set(false, this.uid++);
      this.uids.set(attribute, uids2);
    }
    const uids = this.uids.get(attribute);
    return uids.get(isRelativeCopy);
  }
  isNormalizedNormalAttribute(normal) {
    const cache2 = this.cache;
    if (cache2.attributesNormalized.has(normal))
      return false;
    const v2 = new Vector3();
    for (let i = 0, il = normal.count; i < il; i++) {
      if (Math.abs(v2.fromBufferAttribute(normal, i).length() - 1) > 5e-4)
        return false;
    }
    return true;
  }
  createNormalizedNormalAttribute(normal) {
    const cache2 = this.cache;
    if (cache2.attributesNormalized.has(normal))
      return cache2.attributesNormalized.get(normal);
    const attribute = normal.clone();
    const v2 = new Vector3();
    for (let i = 0, il = attribute.count; i < il; i++) {
      v2.fromBufferAttribute(attribute, i);
      if (v2.x === 0 && v2.y === 0 && v2.z === 0) {
        v2.setX(1);
      } else {
        v2.normalize();
      }
      attribute.setXYZ(i, v2.x, v2.y, v2.z);
    }
    cache2.attributesNormalized.set(normal, attribute);
    return attribute;
  }
  applyTextureTransform(mapDef, texture) {
    let didTransform = false;
    const transformDef = {};
    if (texture.offset.x !== 0 || texture.offset.y !== 0) {
      transformDef.offset = texture.offset.toArray();
      didTransform = true;
    }
    if (texture.rotation !== 0) {
      transformDef.rotation = texture.rotation;
      didTransform = true;
    }
    if (texture.repeat.x !== 1 || texture.repeat.y !== 1) {
      transformDef.scale = texture.repeat.toArray();
      didTransform = true;
    }
    if (didTransform) {
      mapDef.extensions = mapDef.extensions || {};
      mapDef.extensions["KHR_texture_transform"] = transformDef;
      this.extensionsUsed["KHR_texture_transform"] = true;
    }
  }
  buildMetalRoughTexture(metalnessMap, roughnessMap) {
    if (metalnessMap === roughnessMap)
      return metalnessMap;
    function getEncodingConversion(map) {
      if (map.colorSpace === SRGBColorSpace) {
        return function SRGBToLinear(c2) {
          return c2 < 0.04045 ? c2 * 0.0773993808 : Math.pow(c2 * 0.9478672986 + 0.0521327014, 2.4);
        };
      }
      return function LinearToLinear(c2) {
        return c2;
      };
    }
    console.warn(
      "THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."
    );
    const metalness = metalnessMap ? metalnessMap.image : null;
    const roughness = roughnessMap ? roughnessMap.image : null;
    const width = Math.max(
      metalness ? metalness.width : 0,
      roughness ? roughness.width : 0
    );
    const height = Math.max(
      metalness ? metalness.height : 0,
      roughness ? roughness.height : 0
    );
    const canvas = getCanvas();
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.fillStyle = "#00ffff";
    context.fillRect(0, 0, width, height);
    const composite = context.getImageData(0, 0, width, height);
    if (metalness) {
      context.drawImage(metalness, 0, 0, width, height);
      const convert = getEncodingConversion(metalnessMap);
      const data = context.getImageData(0, 0, width, height).data;
      for (let i = 2; i < data.length; i += 4) {
        composite.data[i] = convert(data[i] / 256) * 256;
      }
    }
    if (roughness) {
      context.drawImage(roughness, 0, 0, width, height);
      const convert = getEncodingConversion(roughnessMap);
      const data = context.getImageData(0, 0, width, height).data;
      for (let i = 1; i < data.length; i += 4) {
        composite.data[i] = convert(data[i] / 256) * 256;
      }
    }
    context.putImageData(composite, 0, 0);
    const reference = metalnessMap || roughnessMap;
    const texture = reference.clone();
    texture.source = new Source(canvas);
    texture.colorSpace = NoColorSpace;
    texture.channel = (metalnessMap || roughnessMap).channel;
    if (metalnessMap && roughnessMap && metalnessMap.channel !== roughnessMap.channel) {
      console.warn(
        "THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."
      );
    }
    return texture;
  }
  processBuffer(buffer) {
    const json = this.json;
    const buffers = this.buffers;
    if (!json.buffers)
      json.buffers = [{ byteLength: 0 }];
    buffers.push(buffer);
    return 0;
  }
  processBufferView(attribute, componentType, start, count, target2) {
    const json = this.json;
    if (!json.bufferViews)
      json.bufferViews = [];
    let componentSize;
    switch (componentType) {
      case WEBGL_CONSTANTS.BYTE:
      case WEBGL_CONSTANTS.UNSIGNED_BYTE:
        componentSize = 1;
        break;
      case WEBGL_CONSTANTS.SHORT:
      case WEBGL_CONSTANTS.UNSIGNED_SHORT:
        componentSize = 2;
        break;
      default:
        componentSize = 4;
    }
    const byteLength = getPaddedBufferSize(
      count * attribute.itemSize * componentSize
    );
    const dataView = new DataView(new ArrayBuffer(byteLength));
    let offset = 0;
    for (let i = start; i < start + count; i++) {
      for (let a2 = 0; a2 < attribute.itemSize; a2++) {
        let value;
        if (attribute.itemSize > 4) {
          value = attribute.array[i * attribute.itemSize + a2];
        } else {
          if (a2 === 0)
            value = attribute.getX(i);
          else if (a2 === 1)
            value = attribute.getY(i);
          else if (a2 === 2)
            value = attribute.getZ(i);
          else if (a2 === 3)
            value = attribute.getW(i);
          if (attribute.normalized === true) {
            value = MathUtils.normalize(value, attribute.array);
          }
        }
        if (componentType === WEBGL_CONSTANTS.FLOAT) {
          dataView.setFloat32(offset, value, true);
        } else if (componentType === WEBGL_CONSTANTS.INT) {
          dataView.setInt32(offset, value, true);
        } else if (componentType === WEBGL_CONSTANTS.UNSIGNED_INT) {
          dataView.setUint32(offset, value, true);
        } else if (componentType === WEBGL_CONSTANTS.SHORT) {
          dataView.setInt16(offset, value, true);
        } else if (componentType === WEBGL_CONSTANTS.UNSIGNED_SHORT) {
          dataView.setUint16(offset, value, true);
        } else if (componentType === WEBGL_CONSTANTS.BYTE) {
          dataView.setInt8(offset, value);
        } else if (componentType === WEBGL_CONSTANTS.UNSIGNED_BYTE) {
          dataView.setUint8(offset, value);
        }
        offset += componentSize;
      }
    }
    const bufferViewDef = {
      buffer: this.processBuffer(dataView.buffer),
      byteOffset: this.byteOffset,
      byteLength
    };
    if (target2 !== void 0)
      bufferViewDef.target = target2;
    if (target2 === WEBGL_CONSTANTS.ARRAY_BUFFER) {
      bufferViewDef.byteStride = attribute.itemSize * componentSize;
    }
    this.byteOffset += byteLength;
    json.bufferViews.push(bufferViewDef);
    const output = {
      id: json.bufferViews.length - 1,
      byteLength: 0
    };
    return output;
  }
  processBufferViewImage(blob) {
    const writer = this;
    const json = writer.json;
    if (!json.bufferViews)
      json.bufferViews = [];
    return new Promise(function(resolve) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      reader.onloadend = function() {
        const buffer = getPaddedArrayBuffer(reader.result);
        const bufferViewDef = {
          buffer: writer.processBuffer(buffer),
          byteOffset: writer.byteOffset,
          byteLength: buffer.byteLength
        };
        writer.byteOffset += buffer.byteLength;
        resolve(json.bufferViews.push(bufferViewDef) - 1);
      };
    });
  }
  processAccessor(attribute, geometry, start, count) {
    const json = this.json;
    const types = {
      1: "SCALAR",
      2: "VEC2",
      3: "VEC3",
      4: "VEC4",
      9: "MAT3",
      16: "MAT4"
    };
    let componentType;
    if (attribute.array.constructor === Float32Array) {
      componentType = WEBGL_CONSTANTS.FLOAT;
    } else if (attribute.array.constructor === Int32Array) {
      componentType = WEBGL_CONSTANTS.INT;
    } else if (attribute.array.constructor === Uint32Array) {
      componentType = WEBGL_CONSTANTS.UNSIGNED_INT;
    } else if (attribute.array.constructor === Int16Array) {
      componentType = WEBGL_CONSTANTS.SHORT;
    } else if (attribute.array.constructor === Uint16Array) {
      componentType = WEBGL_CONSTANTS.UNSIGNED_SHORT;
    } else if (attribute.array.constructor === Int8Array) {
      componentType = WEBGL_CONSTANTS.BYTE;
    } else if (attribute.array.constructor === Uint8Array) {
      componentType = WEBGL_CONSTANTS.UNSIGNED_BYTE;
    } else {
      throw new Error(
        "THREE.GLTFExporter: Unsupported bufferAttribute component type."
      );
    }
    if (start === void 0)
      start = 0;
    if (count === void 0)
      count = attribute.count;
    if (count === 0)
      return null;
    const minMax = getMinMax(attribute, start, count);
    let bufferViewTarget;
    if (geometry !== void 0) {
      bufferViewTarget = attribute === geometry.index ? WEBGL_CONSTANTS.ELEMENT_ARRAY_BUFFER : WEBGL_CONSTANTS.ARRAY_BUFFER;
    }
    const bufferView = this.processBufferView(
      attribute,
      componentType,
      start,
      count,
      bufferViewTarget
    );
    const accessorDef = {
      bufferView: bufferView.id,
      byteOffset: bufferView.byteOffset,
      componentType,
      count,
      max: minMax.max,
      min: minMax.min,
      type: types[attribute.itemSize]
    };
    if (attribute.normalized === true)
      accessorDef.normalized = true;
    if (!json.accessors)
      json.accessors = [];
    return json.accessors.push(accessorDef) - 1;
  }
  processImage(image, format, flipY, mimeType = "image/png") {
    if (image !== null) {
      const writer = this;
      const cache2 = writer.cache;
      const json = writer.json;
      const options = writer.options;
      const pending = writer.pending;
      if (!cache2.images.has(image))
        cache2.images.set(image, {});
      const cachedImages = cache2.images.get(image);
      const key = mimeType + ":flipY/" + flipY.toString();
      if (cachedImages[key] !== void 0)
        return cachedImages[key];
      if (!json.images)
        json.images = [];
      const imageDef = { mimeType };
      const canvas = getCanvas();
      canvas.width = Math.min(image.width, options.maxTextureSize);
      canvas.height = Math.min(image.height, options.maxTextureSize);
      const ctx = canvas.getContext("2d");
      if (flipY === true) {
        ctx.translate(0, canvas.height);
        ctx.scale(1, -1);
      }
      if (image.data !== void 0) {
        if (format !== RGBAFormat) {
          console.error("GLTFExporter: Only RGBAFormat is supported.");
        }
        if (image.width > options.maxTextureSize || image.height > options.maxTextureSize) {
          console.warn(
            "GLTFExporter: Image size is bigger than maxTextureSize",
            image
          );
        }
        const data = new Uint8ClampedArray(image.height * image.width * 4);
        for (let i = 0; i < data.length; i += 4) {
          data[i + 0] = image.data[i + 0];
          data[i + 1] = image.data[i + 1];
          data[i + 2] = image.data[i + 2];
          data[i + 3] = image.data[i + 3];
        }
        ctx.putImageData(new ImageData(data, image.width, image.height), 0, 0);
      } else {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
      if (options.binary === true) {
        pending.push(
          getToBlobPromise(canvas, mimeType).then((blob) => writer.processBufferViewImage(blob)).then((bufferViewIndex) => {
            imageDef.bufferView = bufferViewIndex;
          })
        );
      } else {
        if (canvas.toDataURL !== void 0) {
          imageDef.uri = canvas.toDataURL(mimeType);
        } else {
          pending.push(
            getToBlobPromise(canvas, mimeType).then((blob) => new FileReader().readAsDataURL(blob)).then((dataURL) => {
              imageDef.uri = dataURL;
            })
          );
        }
      }
      const index = json.images.push(imageDef) - 1;
      cachedImages[key] = index;
      return index;
    } else {
      throw new Error(
        "THREE.GLTFExporter: No valid image data found. Unable to process texture."
      );
    }
  }
  processSampler(map) {
    const json = this.json;
    if (!json.samplers)
      json.samplers = [];
    const samplerDef = {
      magFilter: THREE_TO_WEBGL[map.magFilter],
      minFilter: THREE_TO_WEBGL[map.minFilter],
      wrapS: THREE_TO_WEBGL[map.wrapS],
      wrapT: THREE_TO_WEBGL[map.wrapT]
    };
    return json.samplers.push(samplerDef) - 1;
  }
  processTexture(map) {
    const cache2 = this.cache;
    const json = this.json;
    if (cache2.textures.has(map))
      return cache2.textures.get(map);
    if (!json.textures)
      json.textures = [];
    let mimeType = map.userData.mimeType;
    if (mimeType === "image/webp")
      mimeType = "image/png";
    const textureDef = {
      sampler: this.processSampler(map),
      source: this.processImage(map.image, map.format, map.flipY, mimeType)
    };
    if (map.name)
      textureDef.name = map.name;
    this._invokeAll(function(ext) {
      ext.writeTexture && ext.writeTexture(map, textureDef);
    });
    const index = json.textures.push(textureDef) - 1;
    cache2.textures.set(map, index);
    return index;
  }
  processMaterial(material) {
    const cache2 = this.cache;
    const json = this.json;
    if (cache2.materials.has(material))
      return cache2.materials.get(material);
    if (material.isShaderMaterial) {
      console.warn("GLTFExporter: THREE.ShaderMaterial not supported.");
      return null;
    }
    if (!json.materials)
      json.materials = [];
    const materialDef = { pbrMetallicRoughness: {} };
    if (material.isMeshStandardMaterial !== true && material.isMeshBasicMaterial !== true) {
      console.warn(
        "GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results."
      );
    }
    const color = material.color.toArray().concat([material.opacity]);
    if (!equalArray(color, [1, 1, 1, 1])) {
      materialDef.pbrMetallicRoughness.baseColorFactor = color;
    }
    if (material.isMeshStandardMaterial) {
      materialDef.pbrMetallicRoughness.metallicFactor = material.metalness;
      materialDef.pbrMetallicRoughness.roughnessFactor = material.roughness;
    } else {
      materialDef.pbrMetallicRoughness.metallicFactor = 0.5;
      materialDef.pbrMetallicRoughness.roughnessFactor = 0.5;
    }
    if (material.metalnessMap || material.roughnessMap) {
      const metalRoughTexture = this.buildMetalRoughTexture(
        material.metalnessMap,
        material.roughnessMap
      );
      const metalRoughMapDef = {
        index: this.processTexture(metalRoughTexture),
        channel: metalRoughTexture.channel
      };
      this.applyTextureTransform(metalRoughMapDef, metalRoughTexture);
      materialDef.pbrMetallicRoughness.metallicRoughnessTexture = metalRoughMapDef;
    }
    if (material.map) {
      const baseColorMapDef = {
        index: this.processTexture(material.map),
        texCoord: material.map.channel
      };
      this.applyTextureTransform(baseColorMapDef, material.map);
      materialDef.pbrMetallicRoughness.baseColorTexture = baseColorMapDef;
    }
    if (material.emissive) {
      const emissive = material.emissive;
      const maxEmissiveComponent = Math.max(emissive.r, emissive.g, emissive.b);
      if (maxEmissiveComponent > 0) {
        materialDef.emissiveFactor = material.emissive.toArray();
      }
      if (material.emissiveMap) {
        const emissiveMapDef = {
          index: this.processTexture(material.emissiveMap),
          texCoord: material.emissiveMap.channel
        };
        this.applyTextureTransform(emissiveMapDef, material.emissiveMap);
        materialDef.emissiveTexture = emissiveMapDef;
      }
    }
    if (material.normalMap) {
      const normalMapDef = {
        index: this.processTexture(material.normalMap),
        texCoord: material.normalMap.channel
      };
      if (material.normalScale && material.normalScale.x !== 1) {
        normalMapDef.scale = material.normalScale.x;
      }
      this.applyTextureTransform(normalMapDef, material.normalMap);
      materialDef.normalTexture = normalMapDef;
    }
    if (material.aoMap) {
      const occlusionMapDef = {
        index: this.processTexture(material.aoMap),
        texCoord: material.aoMap.channel
      };
      if (material.aoMapIntensity !== 1) {
        occlusionMapDef.strength = material.aoMapIntensity;
      }
      this.applyTextureTransform(occlusionMapDef, material.aoMap);
      materialDef.occlusionTexture = occlusionMapDef;
    }
    if (material.transparent) {
      materialDef.alphaMode = "BLEND";
    } else {
      if (material.alphaTest > 0) {
        materialDef.alphaMode = "MASK";
        materialDef.alphaCutoff = material.alphaTest;
      }
    }
    if (material.side === DoubleSide)
      materialDef.doubleSided = true;
    if (material.name !== "")
      materialDef.name = material.name;
    this.serializeUserData(material, materialDef);
    this._invokeAll(function(ext) {
      ext.writeMaterial && ext.writeMaterial(material, materialDef);
    });
    const index = json.materials.push(materialDef) - 1;
    cache2.materials.set(material, index);
    return index;
  }
  processMesh(mesh) {
    const cache2 = this.cache;
    const json = this.json;
    const meshCacheKeyParts = [mesh.geometry.uuid];
    if (Array.isArray(mesh.material)) {
      for (let i = 0, l2 = mesh.material.length; i < l2; i++) {
        meshCacheKeyParts.push(mesh.material[i].uuid);
      }
    } else {
      meshCacheKeyParts.push(mesh.material.uuid);
    }
    const meshCacheKey = meshCacheKeyParts.join(":");
    if (cache2.meshes.has(meshCacheKey))
      return cache2.meshes.get(meshCacheKey);
    const geometry = mesh.geometry;
    let mode;
    if (mesh.isLineSegments) {
      mode = WEBGL_CONSTANTS.LINES;
    } else if (mesh.isLineLoop) {
      mode = WEBGL_CONSTANTS.LINE_LOOP;
    } else if (mesh.isLine) {
      mode = WEBGL_CONSTANTS.LINE_STRIP;
    } else if (mesh.isPoints) {
      mode = WEBGL_CONSTANTS.POINTS;
    } else {
      mode = mesh.material.wireframe ? WEBGL_CONSTANTS.LINES : WEBGL_CONSTANTS.TRIANGLES;
    }
    const meshDef = {};
    const attributes = {};
    const primitives = [];
    const targets = [];
    const nameConversion = {
      uv: "TEXCOORD_0",
      uv1: "TEXCOORD_1",
      color: "COLOR_0",
      skinWeight: "WEIGHTS_0",
      skinIndex: "JOINTS_0"
    };
    const originalNormal = geometry.getAttribute("normal");
    if (originalNormal !== void 0 && !this.isNormalizedNormalAttribute(originalNormal)) {
      console.warn(
        "THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."
      );
      geometry.setAttribute(
        "normal",
        this.createNormalizedNormalAttribute(originalNormal)
      );
    }
    let modifiedAttribute = null;
    for (let attributeName in geometry.attributes) {
      if (attributeName.slice(0, 5) === "morph")
        continue;
      const attribute = geometry.attributes[attributeName];
      attributeName = nameConversion[attributeName] || attributeName.toUpperCase();
      const validVertexAttributes = /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/;
      if (!validVertexAttributes.test(attributeName))
        attributeName = "_" + attributeName;
      if (cache2.attributes.has(this.getUID(attribute))) {
        attributes[attributeName] = cache2.attributes.get(
          this.getUID(attribute)
        );
        continue;
      }
      modifiedAttribute = null;
      const array = attribute.array;
      if (attributeName === "JOINTS_0" && !(array instanceof Uint16Array) && !(array instanceof Uint8Array)) {
        console.warn(
          'GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'
        );
        modifiedAttribute = new BufferAttribute(
          new Uint16Array(array),
          attribute.itemSize,
          attribute.normalized
        );
      }
      const accessor = this.processAccessor(
        modifiedAttribute || attribute,
        geometry
      );
      if (accessor !== null) {
        if (!attributeName.startsWith("_")) {
          this.detectMeshQuantization(attributeName, attribute);
        }
        attributes[attributeName] = accessor;
        cache2.attributes.set(this.getUID(attribute), accessor);
      }
    }
    if (originalNormal !== void 0)
      geometry.setAttribute("normal", originalNormal);
    if (Object.keys(attributes).length === 0)
      return null;
    if (mesh.morphTargetInfluences !== void 0 && mesh.morphTargetInfluences.length > 0) {
      const weights = [];
      const targetNames = [];
      const reverseDictionary = {};
      if (mesh.morphTargetDictionary !== void 0) {
        for (const key in mesh.morphTargetDictionary) {
          reverseDictionary[mesh.morphTargetDictionary[key]] = key;
        }
      }
      for (let i = 0; i < mesh.morphTargetInfluences.length; ++i) {
        const target2 = {};
        let warned = false;
        for (const attributeName in geometry.morphAttributes) {
          if (attributeName !== "position" && attributeName !== "normal") {
            if (!warned) {
              console.warn(
                "GLTFExporter: Only POSITION and NORMAL morph are supported."
              );
              warned = true;
            }
            continue;
          }
          const attribute = geometry.morphAttributes[attributeName][i];
          const gltfAttributeName = attributeName.toUpperCase();
          const baseAttribute = geometry.attributes[attributeName];
          if (cache2.attributes.has(this.getUID(attribute, true))) {
            target2[gltfAttributeName] = cache2.attributes.get(
              this.getUID(attribute, true)
            );
            continue;
          }
          const relativeAttribute = attribute.clone();
          if (!geometry.morphTargetsRelative) {
            for (let j2 = 0, jl = attribute.count; j2 < jl; j2++) {
              for (let a2 = 0; a2 < attribute.itemSize; a2++) {
                if (a2 === 0)
                  relativeAttribute.setX(
                    j2,
                    attribute.getX(j2) - baseAttribute.getX(j2)
                  );
                if (a2 === 1)
                  relativeAttribute.setY(
                    j2,
                    attribute.getY(j2) - baseAttribute.getY(j2)
                  );
                if (a2 === 2)
                  relativeAttribute.setZ(
                    j2,
                    attribute.getZ(j2) - baseAttribute.getZ(j2)
                  );
                if (a2 === 3)
                  relativeAttribute.setW(
                    j2,
                    attribute.getW(j2) - baseAttribute.getW(j2)
                  );
              }
            }
          }
          target2[gltfAttributeName] = this.processAccessor(
            relativeAttribute,
            geometry
          );
          cache2.attributes.set(
            this.getUID(baseAttribute, true),
            target2[gltfAttributeName]
          );
        }
        targets.push(target2);
        weights.push(mesh.morphTargetInfluences[i]);
        if (mesh.morphTargetDictionary !== void 0)
          targetNames.push(reverseDictionary[i]);
      }
      meshDef.weights = weights;
      if (targetNames.length > 0) {
        meshDef.extras = {};
        meshDef.extras.targetNames = targetNames;
      }
    }
    const isMultiMaterial = Array.isArray(mesh.material);
    if (isMultiMaterial && geometry.groups.length === 0)
      return null;
    const materials = isMultiMaterial ? mesh.material : [mesh.material];
    const groups = isMultiMaterial ? geometry.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let i = 0, il = groups.length; i < il; i++) {
      const primitive = {
        mode,
        attributes
      };
      this.serializeUserData(geometry, primitive);
      if (targets.length > 0)
        primitive.targets = targets;
      if (geometry.index !== null) {
        let cacheKey = this.getUID(geometry.index);
        if (groups[i].start !== void 0 || groups[i].count !== void 0) {
          cacheKey += ":" + groups[i].start + ":" + groups[i].count;
        }
        if (cache2.attributes.has(cacheKey)) {
          primitive.indices = cache2.attributes.get(cacheKey);
        } else {
          primitive.indices = this.processAccessor(
            geometry.index,
            geometry,
            groups[i].start,
            groups[i].count
          );
          cache2.attributes.set(cacheKey, primitive.indices);
        }
        if (primitive.indices === null)
          delete primitive.indices;
      }
      const material = this.processMaterial(materials[groups[i].materialIndex]);
      if (material !== null)
        primitive.material = material;
      primitives.push(primitive);
    }
    meshDef.primitives = primitives;
    if (!json.meshes)
      json.meshes = [];
    this._invokeAll(function(ext) {
      ext.writeMesh && ext.writeMesh(mesh, meshDef);
    });
    const index = json.meshes.push(meshDef) - 1;
    cache2.meshes.set(meshCacheKey, index);
    return index;
  }
  detectMeshQuantization(attributeName, attribute) {
    if (this.extensionsUsed[KHR_MESH_QUANTIZATION])
      return;
    let attrType = void 0;
    switch (attribute.array.constructor) {
      case Int8Array:
        attrType = "byte";
        break;
      case Uint8Array:
        attrType = "unsigned byte";
        break;
      case Int16Array:
        attrType = "short";
        break;
      case Uint16Array:
        attrType = "unsigned short";
        break;
      default:
        return;
    }
    if (attribute.normalized)
      attrType += " normalized";
    const attrNamePrefix = attributeName.split("_", 1)[0];
    if (KHR_mesh_quantization_ExtraAttrTypes[attrNamePrefix] && KHR_mesh_quantization_ExtraAttrTypes[attrNamePrefix].includes(attrType)) {
      this.extensionsUsed[KHR_MESH_QUANTIZATION] = true;
      this.extensionsRequired[KHR_MESH_QUANTIZATION] = true;
    }
  }
  processCamera(camera2) {
    const json = this.json;
    if (!json.cameras)
      json.cameras = [];
    const isOrtho = camera2.isOrthographicCamera;
    const cameraDef = {
      type: isOrtho ? "orthographic" : "perspective"
    };
    if (isOrtho) {
      cameraDef.orthographic = {
        xmag: camera2.right * 2,
        ymag: camera2.top * 2,
        zfar: camera2.far <= 0 ? 1e-3 : camera2.far,
        znear: camera2.near < 0 ? 0 : camera2.near
      };
    } else {
      cameraDef.perspective = {
        aspectRatio: camera2.aspect,
        yfov: MathUtils.degToRad(camera2.fov),
        zfar: camera2.far <= 0 ? 1e-3 : camera2.far,
        znear: camera2.near < 0 ? 0 : camera2.near
      };
    }
    if (camera2.name !== "")
      cameraDef.name = camera2.type;
    return json.cameras.push(cameraDef) - 1;
  }
  processAnimation(clip, root) {
    const json = this.json;
    const nodeMap = this.nodeMap;
    if (!json.animations)
      json.animations = [];
    clip = GLTFExporter.Utils.mergeMorphTargetTracks(clip.clone(), root);
    const tracks = clip.tracks;
    const channels = [];
    const samplers = [];
    for (let i = 0; i < tracks.length; ++i) {
      const track = tracks[i];
      const trackBinding = PropertyBinding.parseTrackName(track.name);
      let trackNode = PropertyBinding.findNode(root, trackBinding.nodeName);
      const trackProperty = PATH_PROPERTIES[trackBinding.propertyName];
      if (trackBinding.objectName === "bones") {
        if (trackNode.isSkinnedMesh === true) {
          trackNode = trackNode.skeleton.getBoneByName(
            trackBinding.objectIndex
          );
        } else {
          trackNode = void 0;
        }
      }
      if (!trackNode || !trackProperty) {
        console.warn(
          'THREE.GLTFExporter: Could not export animation track "%s".',
          track.name
        );
        return null;
      }
      const inputItemSize = 1;
      let outputItemSize = track.values.length / track.times.length;
      if (trackProperty === PATH_PROPERTIES.morphTargetInfluences) {
        outputItemSize /= trackNode.morphTargetInfluences.length;
      }
      let interpolation;
      if (track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true) {
        interpolation = "CUBICSPLINE";
        outputItemSize /= 3;
      } else if (track.getInterpolation() === InterpolateDiscrete) {
        interpolation = "STEP";
      } else {
        interpolation = "LINEAR";
      }
      samplers.push({
        input: this.processAccessor(
          new BufferAttribute(track.times, inputItemSize)
        ),
        output: this.processAccessor(
          new BufferAttribute(track.values, outputItemSize)
        ),
        interpolation
      });
      channels.push({
        sampler: samplers.length - 1,
        target: {
          node: nodeMap.get(trackNode),
          path: trackProperty
        }
      });
    }
    json.animations.push({
      name: clip.name || "clip_" + json.animations.length,
      samplers,
      channels
    });
    return json.animations.length - 1;
  }
  processSkin(object) {
    const json = this.json;
    const nodeMap = this.nodeMap;
    const node = json.nodes[nodeMap.get(object)];
    const skeleton = object.skeleton;
    if (skeleton === void 0)
      return null;
    const rootJoint = object.skeleton.bones[0];
    if (rootJoint === void 0)
      return null;
    const joints = [];
    const inverseBindMatrices = new Float32Array(skeleton.bones.length * 16);
    const temporaryBoneInverse = new Matrix4();
    for (let i = 0; i < skeleton.bones.length; ++i) {
      joints.push(nodeMap.get(skeleton.bones[i]));
      temporaryBoneInverse.copy(skeleton.boneInverses[i]);
      temporaryBoneInverse.multiply(object.bindMatrix).toArray(inverseBindMatrices, i * 16);
    }
    if (json.skins === void 0)
      json.skins = [];
    json.skins.push({
      inverseBindMatrices: this.processAccessor(
        new BufferAttribute(inverseBindMatrices, 16)
      ),
      joints,
      skeleton: nodeMap.get(rootJoint)
    });
    const skinIndex = node.skin = json.skins.length - 1;
    return skinIndex;
  }
  processNode(object) {
    const json = this.json;
    const options = this.options;
    const nodeMap = this.nodeMap;
    if (!json.nodes)
      json.nodes = [];
    const nodeDef = {};
    if (options.trs) {
      const rotation = object.quaternion.toArray();
      const position = object.position.toArray();
      const scale = object.scale.toArray();
      if (!equalArray(rotation, [0, 0, 0, 1])) {
        nodeDef.rotation = rotation;
      }
      if (!equalArray(position, [0, 0, 0])) {
        nodeDef.translation = position;
      }
      if (!equalArray(scale, [1, 1, 1])) {
        nodeDef.scale = scale;
      }
    } else {
      if (object.matrixAutoUpdate) {
        object.updateMatrix();
      }
      if (isIdentityMatrix(object.matrix) === false) {
        nodeDef.matrix = object.matrix.elements;
      }
    }
    if (object.name !== "")
      nodeDef.name = String(object.name);
    this.serializeUserData(object, nodeDef);
    if (object.isMesh || object.isLine || object.isPoints) {
      const meshIndex = this.processMesh(object);
      if (meshIndex !== null)
        nodeDef.mesh = meshIndex;
    } else if (object.isCamera) {
      nodeDef.camera = this.processCamera(object);
    }
    if (object.isSkinnedMesh)
      this.skins.push(object);
    if (object.children.length > 0) {
      const children = [];
      for (let i = 0, l2 = object.children.length; i < l2; i++) {
        const child = object.children[i];
        if (child.visible || options.onlyVisible === false) {
          const nodeIndex2 = this.processNode(child);
          if (nodeIndex2 !== null)
            children.push(nodeIndex2);
        }
      }
      if (children.length > 0)
        nodeDef.children = children;
    }
    this._invokeAll(function(ext) {
      ext.writeNode && ext.writeNode(object, nodeDef);
    });
    const nodeIndex = json.nodes.push(nodeDef) - 1;
    nodeMap.set(object, nodeIndex);
    return nodeIndex;
  }
  processScene(scene) {
    const json = this.json;
    const options = this.options;
    if (!json.scenes) {
      json.scenes = [];
      json.scene = 0;
    }
    const sceneDef = {};
    if (scene.name !== "")
      sceneDef.name = scene.name;
    json.scenes.push(sceneDef);
    const nodes = [];
    for (let i = 0, l2 = scene.children.length; i < l2; i++) {
      const child = scene.children[i];
      if (child.visible || options.onlyVisible === false) {
        const nodeIndex = this.processNode(child);
        if (nodeIndex !== null)
          nodes.push(nodeIndex);
      }
    }
    if (nodes.length > 0)
      sceneDef.nodes = nodes;
    this.serializeUserData(scene, sceneDef);
  }
  processObjects(objects) {
    const scene = new Scene();
    scene.name = "AuxScene";
    for (let i = 0; i < objects.length; i++) {
      scene.children.push(objects[i]);
    }
    this.processScene(scene);
  }
  processInput(input) {
    const options = this.options;
    input = input instanceof Array ? input : [input];
    this._invokeAll(function(ext) {
      ext.beforeParse && ext.beforeParse(input);
    });
    const objectsWithoutScene = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] instanceof Scene) {
        this.processScene(input[i]);
      } else {
        objectsWithoutScene.push(input[i]);
      }
    }
    if (objectsWithoutScene.length > 0)
      this.processObjects(objectsWithoutScene);
    for (let i = 0; i < this.skins.length; ++i) {
      this.processSkin(this.skins[i]);
    }
    for (let i = 0; i < options.animations.length; ++i) {
      this.processAnimation(options.animations[i], input[0]);
    }
    this._invokeAll(function(ext) {
      ext.afterParse && ext.afterParse(input);
    });
  }
  _invokeAll(func) {
    for (let i = 0, il = this.plugins.length; i < il; i++) {
      func(this.plugins[i]);
    }
  }
}
class GLTFLightExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_lights_punctual";
  }
  writeNode(light, nodeDef) {
    if (!light.isLight)
      return;
    if (!light.isDirectionalLight && !light.isPointLight && !light.isSpotLight) {
      console.warn(
        "THREE.GLTFExporter: Only directional, point, and spot lights are supported.",
        light
      );
      return;
    }
    const writer = this.writer;
    const json = writer.json;
    const extensionsUsed = writer.extensionsUsed;
    const lightDef = {};
    if (light.name)
      lightDef.name = light.name;
    lightDef.color = light.color.toArray();
    lightDef.intensity = light.intensity;
    if (light.isDirectionalLight) {
      lightDef.type = "directional";
    } else if (light.isPointLight) {
      lightDef.type = "point";
      if (light.distance > 0)
        lightDef.range = light.distance;
    } else if (light.isSpotLight) {
      lightDef.type = "spot";
      if (light.distance > 0)
        lightDef.range = light.distance;
      lightDef.spot = {};
      lightDef.spot.innerConeAngle = (light.penumbra - 1) * light.angle * -1;
      lightDef.spot.outerConeAngle = light.angle;
    }
    if (light.decay !== void 0 && light.decay !== 2) {
      console.warn(
        "THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."
      );
    }
    if (light.target && (light.target.parent !== light || light.target.position.x !== 0 || light.target.position.y !== 0 || light.target.position.z !== -1)) {
      console.warn(
        "THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."
      );
    }
    if (!extensionsUsed[this.name]) {
      json.extensions = json.extensions || {};
      json.extensions[this.name] = { lights: [] };
      extensionsUsed[this.name] = true;
    }
    const lights = json.extensions[this.name].lights;
    lights.push(lightDef);
    nodeDef.extensions = nodeDef.extensions || {};
    nodeDef.extensions[this.name] = { light: lights.length - 1 };
  }
}
class GLTFMaterialsUnlitExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_unlit";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshBasicMaterial)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = {};
    extensionsUsed[this.name] = true;
    materialDef.pbrMetallicRoughness.metallicFactor = 0;
    materialDef.pbrMetallicRoughness.roughnessFactor = 0.9;
  }
}
class GLTFMaterialsClearcoatExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_clearcoat";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.clearcoat === 0)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    extensionDef.clearcoatFactor = material.clearcoat;
    if (material.clearcoatMap) {
      const clearcoatMapDef = {
        index: writer.processTexture(material.clearcoatMap),
        texCoord: material.clearcoatMap.channel
      };
      writer.applyTextureTransform(clearcoatMapDef, material.clearcoatMap);
      extensionDef.clearcoatTexture = clearcoatMapDef;
    }
    extensionDef.clearcoatRoughnessFactor = material.clearcoatRoughness;
    if (material.clearcoatRoughnessMap) {
      const clearcoatRoughnessMapDef = {
        index: writer.processTexture(material.clearcoatRoughnessMap),
        texCoord: material.clearcoatRoughnessMap.channel
      };
      writer.applyTextureTransform(
        clearcoatRoughnessMapDef,
        material.clearcoatRoughnessMap
      );
      extensionDef.clearcoatRoughnessTexture = clearcoatRoughnessMapDef;
    }
    if (material.clearcoatNormalMap) {
      const clearcoatNormalMapDef = {
        index: writer.processTexture(material.clearcoatNormalMap),
        texCoord: material.clearcoatNormalMap.channel
      };
      writer.applyTextureTransform(
        clearcoatNormalMapDef,
        material.clearcoatNormalMap
      );
      extensionDef.clearcoatNormalTexture = clearcoatNormalMapDef;
    }
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsIridescenceExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_iridescence";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.iridescence === 0)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    extensionDef.iridescenceFactor = material.iridescence;
    if (material.iridescenceMap) {
      const iridescenceMapDef = {
        index: writer.processTexture(material.iridescenceMap),
        texCoord: material.iridescenceMap.channel
      };
      writer.applyTextureTransform(iridescenceMapDef, material.iridescenceMap);
      extensionDef.iridescenceTexture = iridescenceMapDef;
    }
    extensionDef.iridescenceIor = material.iridescenceIOR;
    extensionDef.iridescenceThicknessMinimum = material.iridescenceThicknessRange[0];
    extensionDef.iridescenceThicknessMaximum = material.iridescenceThicknessRange[1];
    if (material.iridescenceThicknessMap) {
      const iridescenceThicknessMapDef = {
        index: writer.processTexture(material.iridescenceThicknessMap),
        texCoord: material.iridescenceThicknessMap.channel
      };
      writer.applyTextureTransform(
        iridescenceThicknessMapDef,
        material.iridescenceThicknessMap
      );
      extensionDef.iridescenceThicknessTexture = iridescenceThicknessMapDef;
    }
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsTransmissionExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_transmission";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.transmission === 0)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    extensionDef.transmissionFactor = material.transmission;
    if (material.transmissionMap) {
      const transmissionMapDef = {
        index: writer.processTexture(material.transmissionMap),
        texCoord: material.transmissionMap.channel
      };
      writer.applyTextureTransform(
        transmissionMapDef,
        material.transmissionMap
      );
      extensionDef.transmissionTexture = transmissionMapDef;
    }
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsVolumeExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_volume";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.transmission === 0)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    extensionDef.thicknessFactor = material.thickness;
    if (material.thicknessMap) {
      const thicknessMapDef = {
        index: writer.processTexture(material.thicknessMap),
        texCoord: material.thicknessMap.channel
      };
      writer.applyTextureTransform(thicknessMapDef, material.thicknessMap);
      extensionDef.thicknessTexture = thicknessMapDef;
    }
    extensionDef.attenuationDistance = material.attenuationDistance;
    extensionDef.attenuationColor = material.attenuationColor.toArray();
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsIorExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_ior";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.ior === 1.5)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    extensionDef.ior = material.ior;
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsSpecularExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_specular";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.specularIntensity === 1 && material.specularColor.equals(DEFAULT_SPECULAR_COLOR) && !material.specularIntensityMap && !material.specularColorTexture)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    if (material.specularIntensityMap) {
      const specularIntensityMapDef = {
        index: writer.processTexture(material.specularIntensityMap),
        texCoord: material.specularIntensityMap.channel
      };
      writer.applyTextureTransform(
        specularIntensityMapDef,
        material.specularIntensityMap
      );
      extensionDef.specularTexture = specularIntensityMapDef;
    }
    if (material.specularColorMap) {
      const specularColorMapDef = {
        index: writer.processTexture(material.specularColorMap),
        texCoord: material.specularColorMap.channel
      };
      writer.applyTextureTransform(
        specularColorMapDef,
        material.specularColorMap
      );
      extensionDef.specularColorTexture = specularColorMapDef;
    }
    extensionDef.specularFactor = material.specularIntensity;
    extensionDef.specularColorFactor = material.specularColor.toArray();
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsSheenExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_sheen";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshPhysicalMaterial || material.sheen == 0)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    if (material.sheenRoughnessMap) {
      const sheenRoughnessMapDef = {
        index: writer.processTexture(material.sheenRoughnessMap),
        texCoord: material.sheenRoughnessMap.channel
      };
      writer.applyTextureTransform(
        sheenRoughnessMapDef,
        material.sheenRoughnessMap
      );
      extensionDef.sheenRoughnessTexture = sheenRoughnessMapDef;
    }
    if (material.sheenColorMap) {
      const sheenColorMapDef = {
        index: writer.processTexture(material.sheenColorMap),
        texCoord: material.sheenColorMap.channel
      };
      writer.applyTextureTransform(sheenColorMapDef, material.sheenColorMap);
      extensionDef.sheenColorTexture = sheenColorMapDef;
    }
    extensionDef.sheenRoughnessFactor = material.sheenRoughness;
    extensionDef.sheenColorFactor = material.sheenColor.toArray();
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
class GLTFMaterialsEmissiveStrengthExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_emissive_strength";
  }
  writeMaterial(material, materialDef) {
    if (!material.isMeshStandardMaterial || material.emissiveIntensity === 1)
      return;
    const writer = this.writer;
    const extensionsUsed = writer.extensionsUsed;
    const extensionDef = {};
    extensionDef.emissiveStrength = material.emissiveIntensity;
    materialDef.extensions = materialDef.extensions || {};
    materialDef.extensions[this.name] = extensionDef;
    extensionsUsed[this.name] = true;
  }
}
GLTFExporter.Utils = {
  insertKeyframe: function(track, time) {
    const tolerance = 1e-3;
    const valueSize = track.getValueSize();
    const times = new track.TimeBufferType(track.times.length + 1);
    const values = new track.ValueBufferType(track.values.length + valueSize);
    const interpolant = track.createInterpolant(
      new track.ValueBufferType(valueSize)
    );
    let index;
    if (track.times.length === 0) {
      times[0] = time;
      for (let i = 0; i < valueSize; i++) {
        values[i] = 0;
      }
      index = 0;
    } else if (time < track.times[0]) {
      if (Math.abs(track.times[0] - time) < tolerance)
        return 0;
      times[0] = time;
      times.set(track.times, 1);
      values.set(interpolant.evaluate(time), 0);
      values.set(track.values, valueSize);
      index = 0;
    } else if (time > track.times[track.times.length - 1]) {
      if (Math.abs(track.times[track.times.length - 1] - time) < tolerance) {
        return track.times.length - 1;
      }
      times[times.length - 1] = time;
      times.set(track.times, 0);
      values.set(track.values, 0);
      values.set(interpolant.evaluate(time), track.values.length);
      index = times.length - 1;
    } else {
      for (let i = 0; i < track.times.length; i++) {
        if (Math.abs(track.times[i] - time) < tolerance)
          return i;
        if (track.times[i] < time && track.times[i + 1] > time) {
          times.set(track.times.slice(0, i + 1), 0);
          times[i + 1] = time;
          times.set(track.times.slice(i + 1), i + 2);
          values.set(track.values.slice(0, (i + 1) * valueSize), 0);
          values.set(interpolant.evaluate(time), (i + 1) * valueSize);
          values.set(
            track.values.slice((i + 1) * valueSize),
            (i + 2) * valueSize
          );
          index = i + 1;
          break;
        }
      }
    }
    track.times = times;
    track.values = values;
    return index;
  },
  mergeMorphTargetTracks: function(clip, root) {
    const tracks = [];
    const mergedTracks = {};
    const sourceTracks = clip.tracks;
    for (let i = 0; i < sourceTracks.length; ++i) {
      let sourceTrack = sourceTracks[i];
      const sourceTrackBinding = PropertyBinding.parseTrackName(
        sourceTrack.name
      );
      const sourceTrackNode = PropertyBinding.findNode(
        root,
        sourceTrackBinding.nodeName
      );
      if (sourceTrackBinding.propertyName !== "morphTargetInfluences" || sourceTrackBinding.propertyIndex === void 0) {
        tracks.push(sourceTrack);
        continue;
      }
      if (sourceTrack.createInterpolant !== sourceTrack.InterpolantFactoryMethodDiscrete && sourceTrack.createInterpolant !== sourceTrack.InterpolantFactoryMethodLinear) {
        if (sourceTrack.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
          throw new Error(
            "THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation."
          );
        }
        console.warn(
          "THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."
        );
        sourceTrack = sourceTrack.clone();
        sourceTrack.setInterpolation(InterpolateLinear);
      }
      const targetCount = sourceTrackNode.morphTargetInfluences.length;
      const targetIndex = sourceTrackNode.morphTargetDictionary[sourceTrackBinding.propertyIndex];
      if (targetIndex === void 0) {
        throw new Error(
          "THREE.GLTFExporter: Morph target name not found: " + sourceTrackBinding.propertyIndex
        );
      }
      let mergedTrack;
      if (mergedTracks[sourceTrackNode.uuid] === void 0) {
        mergedTrack = sourceTrack.clone();
        const values = new mergedTrack.ValueBufferType(
          targetCount * mergedTrack.times.length
        );
        for (let j2 = 0; j2 < mergedTrack.times.length; j2++) {
          values[j2 * targetCount + targetIndex] = mergedTrack.values[j2];
        }
        mergedTrack.name = (sourceTrackBinding.nodeName || "") + ".morphTargetInfluences";
        mergedTrack.values = values;
        mergedTracks[sourceTrackNode.uuid] = mergedTrack;
        tracks.push(mergedTrack);
        continue;
      }
      const sourceInterpolant = sourceTrack.createInterpolant(
        new sourceTrack.ValueBufferType(1)
      );
      mergedTrack = mergedTracks[sourceTrackNode.uuid];
      for (let j2 = 0; j2 < mergedTrack.times.length; j2++) {
        mergedTrack.values[j2 * targetCount + targetIndex] = sourceInterpolant.evaluate(mergedTrack.times[j2]);
      }
      for (let j2 = 0; j2 < sourceTrack.times.length; j2++) {
        const keyframeIndex = this.insertKeyframe(
          mergedTrack,
          sourceTrack.times[j2]
        );
        mergedTrack.values[keyframeIndex * targetCount + targetIndex] = sourceTrack.values[j2];
      }
    }
    clip.tracks = tracks;
    return clip;
  }
};
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const compatibleObject = (object) => {
  return object.material !== void 0 && object.userData && object.userData.variantMaterials && !!Array.from(object.userData.variantMaterials.values()).filter(
    (m2) => compatibleMaterial(m2.material)
  );
};
const compatibleMaterial = (material) => {
  return material && material.isMaterial && !Array.isArray(material);
};
class GLTFExporterMaterialsVariantsExtension {
  constructor(writer) {
    this.writer = writer;
    this.name = "KHR_materials_variants";
    this.variantNames = [];
  }
  beforeParse(objects) {
    const variantNameSet = /* @__PURE__ */ new Set();
    for (const object of objects) {
      object.traverse((o2) => {
        if (!compatibleObject(o2)) {
          return;
        }
        const variantMaterials = o2.userData.variantMaterials;
        const variantDataMap = o2.userData.variantData;
        for (const [variantName, variantData] of variantDataMap) {
          const variantMaterial = variantMaterials.get(variantData.index);
          if (variantMaterial && compatibleMaterial(variantMaterial.material)) {
            variantNameSet.add(variantName);
          }
        }
      });
    }
    variantNameSet.forEach((name) => this.variantNames.push(name));
  }
  writeMesh(mesh, meshDef) {
    if (!compatibleObject(mesh)) {
      return;
    }
    const userData = mesh.userData;
    const variantMaterials = userData.variantMaterials;
    const variantDataMap = userData.variantData;
    const mappingTable = /* @__PURE__ */ new Map();
    const reIndexedVariants = /* @__PURE__ */ new Map();
    const variants = Array.from(variantDataMap.values()).sort((a2, b2) => {
      return a2.index - b2.index;
    });
    for (const [i, variantData] of variants.entries()) {
      reIndexedVariants.set(variantData.index, i);
    }
    for (const variantData of variantDataMap.values()) {
      const variantInstance = variantMaterials.get(variantData.index);
      if (!variantInstance || !compatibleMaterial(variantInstance.material)) {
        continue;
      }
      const materialIndex = this.writer.processMaterial(
        variantInstance.material
      );
      if (!mappingTable.has(materialIndex)) {
        mappingTable.set(materialIndex, {
          material: materialIndex,
          variants: []
        });
      }
      mappingTable.get(materialIndex).variants.push(reIndexedVariants.get(variantData.index));
    }
    const mappingsDef = Array.from(mappingTable.values()).map((m2) => {
      return m2.variants.sort((a2, b2) => a2 - b2) && m2;
    }).sort((a2, b2) => a2.material - b2.material);
    if (mappingsDef.length === 0) {
      return;
    }
    const originalMaterialIndex = compatibleMaterial(userData.originalMaterial) ? this.writer.processMaterial(userData.originalMaterial) : -1;
    for (const primitiveDef of meshDef.primitives) {
      if (originalMaterialIndex >= 0) {
        primitiveDef.material = originalMaterialIndex;
      }
      primitiveDef.extensions = primitiveDef.extensions || {};
      primitiveDef.extensions[this.name] = { mappings: mappingsDef };
    }
  }
  afterParse() {
    if (this.variantNames.length === 0) {
      return;
    }
    const root = this.writer.json;
    root.extensions = root.extensions || {};
    const variantsDef = this.variantNames.map((n2) => {
      return { name: n2 };
    });
    root.extensions[this.name] = { variants: variantsDef };
    this.writer.extensionsUsed[this.name] = true;
  }
}
class SessionLightProbe {
  constructor(xrLight, renderer, lightProbe, environmentEstimation, estimationStartCallback) {
    this.xrLight = xrLight;
    this.renderer = renderer;
    this.lightProbe = lightProbe;
    this.xrWebGLBinding = null;
    this.estimationStartCallback = estimationStartCallback;
    this.frameCallback = this.onXRFrame.bind(this);
    const session = renderer.xr.getSession();
    if (environmentEstimation && "XRWebGLBinding" in window) {
      const cubeRenderTarget = new WebGLCubeRenderTarget(16);
      xrLight.environment = cubeRenderTarget.texture;
      const gl = renderer.getContext();
      switch (session.preferredReflectionFormat) {
        case "srgba8":
          gl.getExtension("EXT_sRGB");
          break;
        case "rgba16f":
          gl.getExtension("OES_texture_half_float");
          break;
      }
      this.xrWebGLBinding = new XRWebGLBinding(session, gl);
      this.lightProbe.addEventListener("reflectionchange", () => {
        this.updateReflection();
      });
    }
    session.requestAnimationFrame(this.frameCallback);
  }
  updateReflection() {
    const textureProperties = this.renderer.properties.get(
      this.xrLight.environment
    );
    if (textureProperties) {
      const cubeMap = this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);
      if (cubeMap) {
        textureProperties.__webglTexture = cubeMap;
        this.xrLight.environment.needsPMREMUpdate = true;
      }
    }
  }
  onXRFrame(time, xrFrame) {
    if (!this.xrLight) {
      return;
    }
    const session = xrFrame.session;
    session.requestAnimationFrame(this.frameCallback);
    const lightEstimate = xrFrame.getLightEstimate(this.lightProbe);
    if (lightEstimate) {
      this.xrLight.lightProbe.sh.fromArray(
        lightEstimate.sphericalHarmonicsCoefficients
      );
      this.xrLight.lightProbe.intensity = 1;
      const intensityScalar = Math.max(
        1,
        Math.max(
          lightEstimate.primaryLightIntensity.x,
          Math.max(
            lightEstimate.primaryLightIntensity.y,
            lightEstimate.primaryLightIntensity.z
          )
        )
      );
      this.xrLight.directionalLight.color.setRGB(
        lightEstimate.primaryLightIntensity.x / intensityScalar,
        lightEstimate.primaryLightIntensity.y / intensityScalar,
        lightEstimate.primaryLightIntensity.z / intensityScalar
      );
      this.xrLight.directionalLight.intensity = intensityScalar;
      this.xrLight.directionalLight.position.copy(
        lightEstimate.primaryLightDirection
      );
      if (this.estimationStartCallback) {
        this.estimationStartCallback();
        this.estimationStartCallback = null;
      }
    }
  }
  dispose() {
    this.xrLight = null;
    this.renderer = null;
    this.lightProbe = null;
    this.xrWebGLBinding = null;
  }
}
class XREstimatedLight extends Group {
  constructor(renderer, environmentEstimation = true) {
    super();
    this.lightProbe = new LightProbe();
    this.lightProbe.intensity = 0;
    this.add(this.lightProbe);
    this.directionalLight = new DirectionalLight();
    this.directionalLight.intensity = 0;
    this.add(this.directionalLight);
    this.environment = null;
    let sessionLightProbe = null;
    let estimationStarted = false;
    renderer.xr.addEventListener("sessionstart", () => {
      const session = renderer.xr.getSession();
      if ("requestLightProbe" in session) {
        session.requestLightProbe({
          reflectionFormat: session.preferredReflectionFormat
        }).then((probe) => {
          sessionLightProbe = new SessionLightProbe(
            this,
            renderer,
            probe,
            environmentEstimation,
            () => {
              estimationStarted = true;
              this.dispatchEvent({ type: "estimationstart" });
            }
          );
        });
      }
    });
    renderer.xr.addEventListener("sessionend", () => {
      if (sessionLightProbe) {
        sessionLightProbe.dispose();
        sessionLightProbe = null;
      }
      if (estimationStarted) {
        this.dispatchEvent({ type: "estimationend" });
      }
    });
    this.dispose = () => {
      if (sessionLightProbe) {
        sessionLightProbe.dispose();
        sessionLightProbe = null;
      }
      this.remove(this.lightProbe);
      this.lightProbe = null;
      this.remove(this.directionalLight);
      this.directionalLight = null;
      this.environment = null;
    };
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SETTLING_TIME = 1e4;
const MIN_DECAY_MILLISECONDS = 1e-3;
const DECAY_MILLISECONDS = 50;
class Damper {
  constructor(decayMilliseconds = DECAY_MILLISECONDS) {
    this.velocity = 0;
    this.naturalFrequency = 0;
    this.setDecayTime(decayMilliseconds);
  }
  setDecayTime(decayMilliseconds) {
    this.naturalFrequency = 1 / Math.max(MIN_DECAY_MILLISECONDS, decayMilliseconds);
  }
  update(x, xGoal, timeStepMilliseconds, xNormalization) {
    const nilSpeed = 2e-4 * this.naturalFrequency;
    if (x == null || xNormalization === 0) {
      return xGoal;
    }
    if (x === xGoal && this.velocity === 0) {
      return xGoal;
    }
    if (timeStepMilliseconds < 0) {
      return x;
    }
    const deltaX = x - xGoal;
    const intermediateVelocity = this.velocity + this.naturalFrequency * deltaX;
    const intermediateX = deltaX + timeStepMilliseconds * intermediateVelocity;
    const decay = Math.exp(-this.naturalFrequency * timeStepMilliseconds);
    const newVelocity = (intermediateVelocity - this.naturalFrequency * intermediateX) * decay;
    const acceleration = -this.naturalFrequency * (newVelocity + intermediateVelocity * decay);
    if (Math.abs(newVelocity) < nilSpeed * Math.abs(xNormalization) && acceleration * deltaX >= 0) {
      this.velocity = 0;
      return xGoal;
    } else {
      this.velocity = newVelocity;
      return xGoal + intermediateX * decay;
    }
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const RADIUS = 0.2;
const LINE_WIDTH = 0.03;
const MAX_OPACITY = 0.75;
const SEGMENTS = 12;
const DELTA_PHI = Math.PI / (2 * SEGMENTS);
const vector2$1 = new Vector2();
const addCorner = (vertices, cornerX, cornerY) => {
  let phi = cornerX > 0 ? cornerY > 0 ? 0 : -Math.PI / 2 : cornerY > 0 ? Math.PI / 2 : Math.PI;
  for (let i = 0; i <= SEGMENTS; ++i) {
    vertices.push(
      cornerX + (RADIUS - LINE_WIDTH) * Math.cos(phi),
      cornerY + (RADIUS - LINE_WIDTH) * Math.sin(phi),
      0,
      cornerX + RADIUS * Math.cos(phi),
      cornerY + RADIUS * Math.sin(phi),
      0
    );
    phi += DELTA_PHI;
  }
};
class PlacementBox extends Mesh {
  constructor(scene, side) {
    const geometry = new BufferGeometry();
    const triangles = [];
    const vertices = [];
    const { size, boundingBox } = scene;
    const x = size.x / 2;
    const y2 = (side === "back" ? size.y : size.z) / 2;
    addCorner(vertices, x, y2);
    addCorner(vertices, -x, y2);
    addCorner(vertices, -x, -y2);
    addCorner(vertices, x, -y2);
    const numVertices = vertices.length / 3;
    for (let i2 = 0; i2 < numVertices - 2; i2 += 2) {
      triangles.push(i2, i2 + 1, i2 + 3, i2, i2 + 3, i2 + 2);
    }
    const i = numVertices - 2;
    triangles.push(i, i + 1, 1, i, 1, 0);
    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    geometry.setIndex(triangles);
    super(geometry);
    this.side = side;
    const material = this.material;
    material.side = DoubleSide;
    material.transparent = true;
    material.opacity = 0;
    this.goalOpacity = 0;
    this.opacityDamper = new Damper();
    this.hitPlane = new Mesh(
      new PlaneGeometry(2 * (x + RADIUS), 2 * (y2 + RADIUS))
    );
    this.hitPlane.visible = false;
    this.hitPlane.material.side = DoubleSide;
    this.add(this.hitPlane);
    boundingBox.getCenter(this.position);
    switch (side) {
      case "bottom":
        this.rotateX(-Math.PI / 2);
        this.shadowHeight = boundingBox.min.y;
        this.position.y = this.shadowHeight;
        break;
      case "back":
        this.shadowHeight = boundingBox.min.z;
        this.position.z = this.shadowHeight;
    }
    scene.target.add(this);
    this.offsetHeight = 0;
  }
  getHit(scene, screenX, screenY) {
    vector2$1.set(screenX, -screenY);
    this.hitPlane.visible = true;
    const hitResult = scene.positionAndNormalFromPoint(
      vector2$1,
      this.hitPlane
    );
    this.hitPlane.visible = false;
    return hitResult == null ? null : hitResult.position;
  }
  getExpandedHit(scene, screenX, screenY) {
    this.hitPlane.scale.set(1e3, 1e3, 1e3);
    this.hitPlane.updateMatrixWorld();
    const hitResult = this.getHit(scene, screenX, screenY);
    this.hitPlane.scale.set(1, 1, 1);
    return hitResult;
  }
  set offsetHeight(offset) {
    offset -= 1e-3;
    if (this.side === "back") {
      this.position.z = this.shadowHeight + offset;
    } else {
      this.position.y = this.shadowHeight + offset;
    }
  }
  get offsetHeight() {
    if (this.side === "back") {
      return this.position.z - this.shadowHeight;
    } else {
      return this.position.y - this.shadowHeight;
    }
  }
  set show(visible) {
    this.goalOpacity = visible ? MAX_OPACITY : 0;
  }
  updateOpacity(delta) {
    const material = this.material;
    material.opacity = this.opacityDamper.update(
      material.opacity,
      this.goalOpacity,
      delta,
      1
    );
    this.visible = material.opacity > 0;
  }
  dispose() {
    var _a2;
    const { geometry, material } = this.hitPlane;
    geometry.dispose();
    material.dispose();
    this.geometry.dispose();
    this.material.dispose();
    (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const numberNode = (value, unit) => ({ type: "number", number: value, unit });
const parseExpressions = (() => {
  const cache2 = {};
  const MAX_PARSE_ITERATIONS = 1e3;
  return (inputString) => {
    const cacheKey = inputString;
    if (cacheKey in cache2) {
      return cache2[cacheKey];
    }
    const expressions = [];
    let parseIterations = 0;
    while (inputString) {
      if (++parseIterations > MAX_PARSE_ITERATIONS) {
        inputString = "";
        break;
      }
      const expressionParseResult = parseExpression(inputString);
      const expression = expressionParseResult.nodes[0];
      if (expression == null || expression.terms.length === 0) {
        break;
      }
      expressions.push(expression);
      inputString = expressionParseResult.remainingInput;
    }
    return cache2[cacheKey] = expressions;
  };
})();
const parseExpression = (() => {
  const IS_IDENT_RE = /^(\-\-|[a-z\u0240-\uffff])/i;
  const IS_OPERATOR_RE = /^([\*\+\/]|[\-]\s)/i;
  const IS_EXPRESSION_END_RE = /^[\),]/;
  const FUNCTION_ARGUMENTS_FIRST_TOKEN = "(";
  const HEX_FIRST_TOKEN = "#";
  return (inputString) => {
    const terms = [];
    while (inputString.length) {
      inputString = inputString.trim();
      if (IS_EXPRESSION_END_RE.test(inputString)) {
        break;
      } else if (inputString[0] === FUNCTION_ARGUMENTS_FIRST_TOKEN) {
        const { nodes, remainingInput } = parseFunctionArguments(inputString);
        inputString = remainingInput;
        terms.push({
          type: "function",
          name: { type: "ident", value: "calc" },
          arguments: nodes
        });
      } else if (IS_IDENT_RE.test(inputString)) {
        const identParseResult = parseIdent(inputString);
        const identNode = identParseResult.nodes[0];
        inputString = identParseResult.remainingInput;
        if (inputString[0] === FUNCTION_ARGUMENTS_FIRST_TOKEN) {
          const { nodes, remainingInput } = parseFunctionArguments(inputString);
          terms.push({ type: "function", name: identNode, arguments: nodes });
          inputString = remainingInput;
        } else {
          terms.push(identNode);
        }
      } else if (IS_OPERATOR_RE.test(inputString)) {
        terms.push({ type: "operator", value: inputString[0] });
        inputString = inputString.slice(1);
      } else {
        const { nodes, remainingInput } = inputString[0] === HEX_FIRST_TOKEN ? parseHex(inputString) : parseNumber(inputString);
        if (nodes.length === 0) {
          break;
        }
        terms.push(nodes[0]);
        inputString = remainingInput;
      }
    }
    return {
      nodes: [{ type: "expression", terms }],
      remainingInput: inputString
    };
  };
})();
const parseIdent = (() => {
  const NOT_IDENT_RE = /[^a-z0-9_\-\u0240-\uffff]/i;
  return (inputString) => {
    const match = inputString.match(NOT_IDENT_RE);
    const ident = match == null ? inputString : inputString.substr(0, match.index);
    const remainingInput = match == null ? "" : inputString.substr(match.index);
    return { nodes: [{ type: "ident", value: ident }], remainingInput };
  };
})();
const parseNumber = (() => {
  const VALUE_RE = /[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/;
  const UNIT_RE = /^[a-z%]+/i;
  const ALLOWED_UNITS = /^(m|mm|cm|rad|deg|[%])$/;
  return (inputString) => {
    const valueMatch = inputString.match(VALUE_RE);
    const value = valueMatch == null ? "0" : valueMatch[0];
    inputString = value == null ? inputString : inputString.slice(value.length);
    const unitMatch = inputString.match(UNIT_RE);
    let unit = unitMatch != null && unitMatch[0] !== "" ? unitMatch[0] : null;
    const remainingInput = unitMatch == null ? inputString : inputString.slice(unit.length);
    if (unit != null && !ALLOWED_UNITS.test(unit)) {
      unit = null;
    }
    return {
      nodes: [
        {
          type: "number",
          number: parseFloat(value) || 0,
          unit
        }
      ],
      remainingInput
    };
  };
})();
const parseHex = (() => {
  const HEX_RE = /^[a-f0-9]*/i;
  return (inputString) => {
    inputString = inputString.slice(1).trim();
    const hexMatch = inputString.match(HEX_RE);
    const nodes = hexMatch == null ? [] : [{ type: "hex", value: hexMatch[0] }];
    return {
      nodes,
      remainingInput: hexMatch == null ? inputString : inputString.slice(hexMatch[0].length)
    };
  };
})();
const parseFunctionArguments = (inputString) => {
  const expressionNodes = [];
  inputString = inputString.slice(1).trim();
  while (inputString.length) {
    const expressionParseResult = parseExpression(inputString);
    expressionNodes.push(expressionParseResult.nodes[0]);
    inputString = expressionParseResult.remainingInput.trim();
    if (inputString[0] === ",") {
      inputString = inputString.slice(1).trim();
    } else if (inputString[0] === ")") {
      inputString = inputString.slice(1);
      break;
    }
  }
  return { nodes: expressionNodes, remainingInput: inputString };
};
const $visitedTypes = Symbol("visitedTypes");
class ASTWalker {
  constructor(visitedTypes) {
    this[$visitedTypes] = visitedTypes;
  }
  walk(ast, callback) {
    const remaining = ast.slice();
    while (remaining.length) {
      const next = remaining.shift();
      if (this[$visitedTypes].indexOf(next.type) > -1) {
        callback(next);
      }
      switch (next.type) {
        case "expression":
          remaining.unshift(...next.terms);
          break;
        case "function":
          remaining.unshift(next.name, ...next.arguments);
          break;
      }
    }
  }
}
const ZERO = Object.freeze({ type: "number", number: 0, unit: null });
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const degreesToRadians = (numberNode2, fallbackRadianValue = 0) => {
  let { number, unit } = numberNode2;
  if (!isFinite(number)) {
    number = fallbackRadianValue;
    unit = "rad";
  } else if (numberNode2.unit === "rad" || numberNode2.unit == null) {
    return numberNode2;
  }
  const valueIsDegrees = unit === "deg" && number != null;
  const value = valueIsDegrees ? number : 0;
  const radians = value * Math.PI / 180;
  return { type: "number", number: radians, unit: "rad" };
};
const lengthToBaseMeters = (numberNode2, fallbackMeterValue = 0) => {
  let { number, unit } = numberNode2;
  if (!isFinite(number)) {
    number = fallbackMeterValue;
    unit = "m";
  } else if (numberNode2.unit === "m") {
    return numberNode2;
  }
  let scale;
  switch (unit) {
    default:
      scale = 1;
      break;
    case "cm":
      scale = 1 / 100;
      break;
    case "mm":
      scale = 1 / 1e3;
      break;
  }
  const value = scale * number;
  return { type: "number", number: value, unit: "m" };
};
const normalizeUnit = (() => {
  const identity = (node) => node;
  const unitNormalizers = {
    rad: identity,
    deg: degreesToRadians,
    m: identity,
    mm: lengthToBaseMeters,
    cm: lengthToBaseMeters
  };
  return (node, fallback = ZERO) => {
    if (!isFinite(node.number)) {
      node.number = fallback.number;
      node.unit = fallback.unit;
    }
    const { unit } = node;
    if (unit == null) {
      return node;
    }
    const normalize = unitNormalizers[unit];
    if (normalize == null) {
      return fallback;
    }
    return normalize(node);
  };
})();
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$6, _b$5, _c$4;
const $evaluate = Symbol("evaluate");
const $lastValue = Symbol("lastValue");
class Evaluator {
  constructor() {
    this[_a$6] = null;
  }
  static evaluatableFor(node, basis = ZERO) {
    if (node instanceof Evaluator) {
      return node;
    }
    if (node.type === "number") {
      if (node.unit === "%") {
        return new PercentageEvaluator(node, basis);
      }
      return node;
    }
    switch (node.name.value) {
      case "calc":
        return new CalcEvaluator(node, basis);
      case "env":
        return new EnvEvaluator(node);
    }
    return ZERO;
  }
  static evaluate(evaluatable) {
    if (evaluatable instanceof Evaluator) {
      return evaluatable.evaluate();
    }
    return evaluatable;
  }
  static isConstant(evaluatable) {
    if (evaluatable instanceof Evaluator) {
      return evaluatable.isConstant;
    }
    return true;
  }
  static applyIntrinsics(evaluated, intrinsics) {
    const { basis, keywords } = intrinsics;
    const { auto } = keywords;
    return basis.map((basisNode, index) => {
      const autoSubstituteNode = auto[index] == null ? basisNode : auto[index];
      let evaluatedNode = evaluated[index] ? evaluated[index] : autoSubstituteNode;
      if (evaluatedNode.type === "ident") {
        const keyword = evaluatedNode.value;
        if (keyword in keywords) {
          evaluatedNode = keywords[keyword][index];
        }
      }
      if (evaluatedNode == null || evaluatedNode.type === "ident") {
        evaluatedNode = autoSubstituteNode;
      }
      if (evaluatedNode.unit === "%") {
        return numberNode(
          evaluatedNode.number / 100 * basisNode.number,
          basisNode.unit
        );
      }
      evaluatedNode = normalizeUnit(evaluatedNode, basisNode);
      if (evaluatedNode.unit !== basisNode.unit) {
        return basisNode;
      }
      return evaluatedNode;
    });
  }
  get isConstant() {
    return false;
  }
  evaluate() {
    if (!this.isConstant || this[$lastValue] == null) {
      this[$lastValue] = this[$evaluate]();
    }
    return this[$lastValue];
  }
}
_a$6 = $lastValue;
const $percentage = Symbol("percentage");
const $basis = Symbol("basis");
class PercentageEvaluator extends Evaluator {
  constructor(percentage, basis) {
    super();
    this[$percentage] = percentage;
    this[$basis] = basis;
  }
  get isConstant() {
    return true;
  }
  [$evaluate]() {
    return numberNode(
      this[$percentage].number / 100 * this[$basis].number,
      this[$basis].unit
    );
  }
}
const $identNode = Symbol("identNode");
class EnvEvaluator extends Evaluator {
  constructor(envFunction) {
    super();
    this[_b$5] = null;
    const identNode = envFunction.arguments.length ? envFunction.arguments[0].terms[0] : null;
    if (identNode != null && identNode.type === "ident") {
      this[$identNode] = identNode;
    }
  }
  get isConstant() {
    return false;
  }
  [(_b$5 = $identNode, $evaluate)]() {
    if (this[$identNode] != null) {
      switch (this[$identNode].value) {
        case "window-scroll-y":
          const verticalScrollPosition = window.pageYOffset;
          const verticalScrollMax = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          );
          const scrollY = verticalScrollPosition / (verticalScrollMax - window.innerHeight) || 0;
          return { type: "number", number: scrollY, unit: null };
      }
    }
    return ZERO;
  }
}
const IS_MULTIPLICATION_RE = /[\*\/]/;
const $evaluator = Symbol("evaluator");
class CalcEvaluator extends Evaluator {
  constructor(calcFunction, basis = ZERO) {
    super();
    this[_c$4] = null;
    if (calcFunction.arguments.length !== 1) {
      return;
    }
    const terms = calcFunction.arguments[0].terms.slice();
    const secondOrderTerms = [];
    while (terms.length) {
      const term = terms.shift();
      if (secondOrderTerms.length > 0) {
        const previousTerm = secondOrderTerms[secondOrderTerms.length - 1];
        if (previousTerm.type === "operator" && IS_MULTIPLICATION_RE.test(previousTerm.value)) {
          const operator = secondOrderTerms.pop();
          const leftValue = secondOrderTerms.pop();
          if (leftValue == null) {
            return;
          }
          secondOrderTerms.push(
            new OperatorEvaluator(
              operator,
              Evaluator.evaluatableFor(leftValue, basis),
              Evaluator.evaluatableFor(term, basis)
            )
          );
          continue;
        }
      }
      secondOrderTerms.push(
        term.type === "operator" ? term : Evaluator.evaluatableFor(term, basis)
      );
    }
    while (secondOrderTerms.length > 2) {
      const [left, operator, right] = secondOrderTerms.splice(0, 3);
      if (operator.type !== "operator") {
        return;
      }
      secondOrderTerms.unshift(
        new OperatorEvaluator(
          operator,
          Evaluator.evaluatableFor(left, basis),
          Evaluator.evaluatableFor(right, basis)
        )
      );
    }
    if (secondOrderTerms.length === 1) {
      this[$evaluator] = secondOrderTerms[0];
    }
  }
  get isConstant() {
    return this[$evaluator] == null || Evaluator.isConstant(this[$evaluator]);
  }
  [(_c$4 = $evaluator, $evaluate)]() {
    return this[$evaluator] != null ? Evaluator.evaluate(this[$evaluator]) : ZERO;
  }
}
const $operator = Symbol("operator");
const $left = Symbol("left");
const $right = Symbol("right");
class OperatorEvaluator extends Evaluator {
  constructor(operator, left, right) {
    super();
    this[$operator] = operator;
    this[$left] = left;
    this[$right] = right;
  }
  get isConstant() {
    return Evaluator.isConstant(this[$left]) && Evaluator.isConstant(this[$right]);
  }
  [$evaluate]() {
    const leftNode = normalizeUnit(Evaluator.evaluate(this[$left]));
    const rightNode = normalizeUnit(Evaluator.evaluate(this[$right]));
    const { number: leftValue, unit: leftUnit } = leftNode;
    const { number: rightValue, unit: rightUnit } = rightNode;
    if (rightUnit != null && leftUnit != null && rightUnit != leftUnit) {
      return ZERO;
    }
    const unit = leftUnit || rightUnit;
    let value;
    switch (this[$operator].value) {
      case "+":
        value = leftValue + rightValue;
        break;
      case "-":
        value = leftValue - rightValue;
        break;
      case "/":
        value = leftValue / rightValue;
        break;
      case "*":
        value = leftValue * rightValue;
        break;
      default:
        return ZERO;
    }
    return { type: "number", number: value, unit };
  }
}
const $evaluatables = Symbol("evaluatables");
const $intrinsics = Symbol("intrinsics");
class StyleEvaluator extends Evaluator {
  constructor(expressions, intrinsics) {
    super();
    this[$intrinsics] = intrinsics;
    const firstExpression = expressions[0];
    const terms = firstExpression != null ? firstExpression.terms : [];
    this[$evaluatables] = intrinsics.basis.map((basisNode, index) => {
      const term = terms[index];
      if (term == null) {
        return { type: "ident", value: "auto" };
      }
      if (term.type === "ident") {
        return term;
      }
      return Evaluator.evaluatableFor(term, basisNode);
    });
  }
  get isConstant() {
    for (const evaluatable of this[$evaluatables]) {
      if (!Evaluator.isConstant(evaluatable)) {
        return false;
      }
    }
    return true;
  }
  [$evaluate]() {
    const evaluated = this[$evaluatables].map(
      (evaluatable) => Evaluator.evaluate(evaluatable)
    );
    return Evaluator.applyIntrinsics(evaluated, this[$intrinsics]).map(
      (numberNode2) => numberNode2.number
    );
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$5, _b$4, _c$3, _d$2;
const $instances = Symbol("instances");
const $activateListener = Symbol("activateListener");
const $deactivateListener = Symbol("deactivateListener");
const $notifyInstances = Symbol("notifyInstances");
const $notify = Symbol("notify");
const $scrollCallback = Symbol("callback");
class ScrollObserver {
  constructor(callback) {
    this[$scrollCallback] = callback;
  }
  static [$notifyInstances]() {
    for (const instance of ScrollObserver[$instances]) {
      instance[$notify]();
    }
  }
  static [(_a$5 = $instances, $activateListener)]() {
    window.addEventListener("scroll", this[$notifyInstances], {
      passive: true
    });
  }
  static [$deactivateListener]() {
    window.removeEventListener("scroll", this[$notifyInstances]);
  }
  observe() {
    if (ScrollObserver[$instances].size === 0) {
      ScrollObserver[$activateListener]();
    }
    ScrollObserver[$instances].add(this);
  }
  disconnect() {
    ScrollObserver[$instances].delete(this);
    if (ScrollObserver[$instances].size === 0) {
      ScrollObserver[$deactivateListener]();
    }
  }
  [$notify]() {
    this[$scrollCallback]();
  }
}
ScrollObserver[_a$5] = /* @__PURE__ */ new Set();
const $computeStyleCallback = Symbol("computeStyleCallback");
const $astWalker = Symbol("astWalker");
const $dependencies = Symbol("dependencies");
const $onScroll = Symbol("onScroll");
class StyleEffector {
  constructor(callback) {
    this[_b$4] = {};
    this[_c$3] = new ASTWalker(["function"]);
    this[_d$2] = () => {
      this[$computeStyleCallback]({ relatedState: "window-scroll" });
    };
    this[$computeStyleCallback] = callback;
  }
  observeEffectsFor(ast) {
    const newDependencies = {};
    const oldDependencies = this[$dependencies];
    this[$astWalker].walk(ast, (functionNode) => {
      const { name } = functionNode;
      const firstArgument = functionNode.arguments[0];
      const firstTerm = firstArgument.terms[0];
      if (name.value !== "env" || firstTerm == null || firstTerm.type !== "ident") {
        return;
      }
      switch (firstTerm.value) {
        case "window-scroll-y":
          if (newDependencies["window-scroll"] == null) {
            const observer = "window-scroll" in oldDependencies ? oldDependencies["window-scroll"] : new ScrollObserver(this[$onScroll]);
            observer.observe();
            delete oldDependencies["window-scroll"];
            newDependencies["window-scroll"] = observer;
          }
          break;
      }
    });
    for (const environmentState in oldDependencies) {
      const observer = oldDependencies[environmentState];
      observer.disconnect();
    }
    this[$dependencies] = newDependencies;
  }
  dispose() {
    for (const environmentState in this[$dependencies]) {
      const observer = this[$dependencies][environmentState];
      observer.disconnect();
    }
  }
}
_b$4 = $dependencies, _c$3 = $astWalker, _d$2 = $onScroll;
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const style = (config) => {
  const observeEffects = config.observeEffects || false;
  const getIntrinsics = config.intrinsics instanceof Function ? config.intrinsics : () => config.intrinsics;
  return (proto, propertyName) => {
    const originalUpdated = proto.updated;
    const originalConnectedCallback = proto.connectedCallback;
    const originalDisconnectedCallback = proto.disconnectedCallback;
    const $styleEffector = Symbol(`${propertyName}StyleEffector`);
    const $styleEvaluator = Symbol(`${propertyName}StyleEvaluator`);
    const $updateEvaluator = Symbol(`${propertyName}UpdateEvaluator`);
    const $evaluateAndSync = Symbol(`${propertyName}EvaluateAndSync`);
    Object.defineProperties(proto, {
      [$styleEffector]: { value: null, writable: true },
      [$styleEvaluator]: { value: null, writable: true },
      [$updateEvaluator]: {
        value: function() {
          const ast = parseExpressions(this[propertyName]);
          this[$styleEvaluator] = new StyleEvaluator(ast, getIntrinsics(this));
          if (this[$styleEffector] == null && observeEffects) {
            this[$styleEffector] = new StyleEffector(
              () => this[$evaluateAndSync]()
            );
          }
          if (this[$styleEffector] != null) {
            this[$styleEffector].observeEffectsFor(ast);
          }
        }
      },
      [$evaluateAndSync]: {
        value: function() {
          if (this[$styleEvaluator] == null) {
            return;
          }
          const result = this[$styleEvaluator].evaluate();
          this[config.updateHandler](result);
        }
      },
      updated: {
        value: function(changedProperties) {
          if (changedProperties.has(propertyName)) {
            this[$updateEvaluator]();
            this[$evaluateAndSync]();
          }
          originalUpdated.call(this, changedProperties);
        }
      },
      connectedCallback: {
        value: function() {
          originalConnectedCallback.call(this);
          this.requestUpdate(propertyName, this[propertyName]);
        }
      },
      disconnectedCallback: {
        value: function() {
          originalDisconnectedCallback.call(this);
          if (this[$styleEffector] != null) {
            this[$styleEffector].dispose();
            this[$styleEffector] = null;
          }
        }
      }
    });
  };
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const easeInOutQuad = (t2) => t2 < 0.5 ? 2 * t2 * t2 : -1 + (4 - 2 * t2) * t2;
const interpolate = (start, end, ease = easeInOutQuad) => (time) => start + (end - start) * ease(time);
const sequence = (tracks, weights) => {
  const cumulativeSum = (sum) => (value) => sum += value;
  const times = weights.map(cumulativeSum(0));
  return (time) => {
    time = clamp(time, 0, 1);
    time *= times[times.length - 1];
    const i = times.findIndex((val) => val >= time);
    const start = i < 1 ? 0 : times[i - 1];
    const end = times[i];
    return tracks[i]((time - start) / (end - start));
  };
};
const timeline = (path) => {
  const tracks = [];
  const weights = [];
  let lastValue = path.initialValue;
  for (let i = 0; i < path.keyframes.length; ++i) {
    const keyframe = path.keyframes[i];
    const { value, frames } = keyframe;
    const ease = keyframe.ease || easeInOutQuad;
    const track = interpolate(lastValue, value, ease);
    tracks.push(track);
    weights.push(frames);
    lastValue = value;
  }
  return sequence(tracks, weights);
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$6 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
const PROMPT_ANIMATION_TIME = 5e3;
const wiggle = timeline({
  initialValue: 0,
  keyframes: [
    { frames: 5, value: -1 },
    { frames: 1, value: -1 },
    { frames: 8, value: 1 },
    { frames: 1, value: 1 },
    { frames: 5, value: 0 },
    { frames: 18, value: 0 }
  ]
});
const fade = timeline({
  initialValue: 0,
  keyframes: [
    { frames: 1, value: 1 },
    { frames: 5, value: 1 },
    { frames: 1, value: 0 },
    { frames: 6, value: 0 }
  ]
});
const DEFAULT_FOV_DEG = 30;
const DEFAULT_MIN_FOV_DEG = 12;
const DEFAULT_CAMERA_ORBIT = "0deg 75deg 105%";
const DEFAULT_CAMERA_TARGET = "auto auto auto";
const DEFAULT_FIELD_OF_VIEW = "auto";
const MINIMUM_RADIUS_RATIO = 2.2;
const AZIMUTHAL_QUADRANT_LABELS = ["front", "right", "back", "left"];
const POLAR_TRIENT_LABELS = ["upper-", "", "lower-"];
const DEFAULT_INTERACTION_PROMPT_THRESHOLD = 3e3;
const INTERACTION_PROMPT = ". Use mouse, touch or arrow keys to move.";
const InteractionPromptStrategy = {
  AUTO: "auto",
  NONE: "none"
};
const InteractionPromptStyle = {
  BASIC: "basic",
  WIGGLE: "wiggle"
};
const TouchAction = {
  PAN_Y: "pan-y",
  PAN_X: "pan-x",
  NONE: "none"
};
const fieldOfViewIntrinsics = () => {
  return {
    basis: [degreesToRadians(numberNode(DEFAULT_FOV_DEG, "deg"))],
    keywords: { auto: [null] }
  };
};
const minFieldOfViewIntrinsics = () => {
  return {
    basis: [degreesToRadians(numberNode(DEFAULT_MIN_FOV_DEG, "deg"))],
    keywords: { auto: [null] }
  };
};
const cameraOrbitIntrinsics = (() => {
  const defaultTerms = parseExpressions(DEFAULT_CAMERA_ORBIT)[0].terms;
  const theta = normalizeUnit(defaultTerms[0]);
  const phi = normalizeUnit(defaultTerms[1]);
  return (element) => {
    const radius = element[$scene].idealCameraDistance();
    return {
      basis: [theta, phi, numberNode(radius, "m")],
      keywords: { auto: [null, null, numberNode(105, "%")] }
    };
  };
})();
const minCameraOrbitIntrinsics = (element) => {
  const radius = MINIMUM_RADIUS_RATIO * element[$scene].boundingSphere.radius;
  return {
    basis: [
      numberNode(-Infinity, "rad"),
      numberNode(Math.PI / 8, "rad"),
      numberNode(radius, "m")
    ],
    keywords: { auto: [null, null, null] }
  };
};
const maxCameraOrbitIntrinsics = (element) => {
  const orbitIntrinsics = cameraOrbitIntrinsics(element);
  const evaluator = new StyleEvaluator([], orbitIntrinsics);
  const defaultRadius = evaluator.evaluate()[2];
  return {
    basis: [
      numberNode(Infinity, "rad"),
      numberNode(Math.PI - Math.PI / 8, "rad"),
      numberNode(defaultRadius, "m")
    ],
    keywords: { auto: [null, null, null] }
  };
};
const cameraTargetIntrinsics = (element) => {
  const center = element[$scene].boundingBox.getCenter(new Vector3());
  return {
    basis: [
      numberNode(center.x, "m"),
      numberNode(center.y, "m"),
      numberNode(center.z, "m")
    ],
    keywords: { auto: [null, null, null] }
  };
};
const HALF_PI = Math.PI / 2;
const THIRD_PI = Math.PI / 3;
const QUARTER_PI = HALF_PI / 2;
const TAU = 2 * Math.PI;
const $controls = Symbol("controls");
const $panElement = Symbol("panElement");
const $promptElement = Symbol("promptElement");
const $promptAnimatedContainer = Symbol("promptAnimatedContainer");
const $fingerAnimatedContainers = Symbol("fingerAnimatedContainers");
const $deferInteractionPrompt = Symbol("deferInteractionPrompt");
const $updateAria = Symbol("updateAria");
const $updateCameraForRadius = Symbol("updateCameraForRadius");
const $cancelPrompts = Symbol("cancelPrompts");
const $onChange = Symbol("onChange");
const $onPointerChange = Symbol("onPointerChange");
const $waitingToPromptUser = Symbol("waitingToPromptUser");
const $userHasInteracted = Symbol("userHasInteracted");
const $promptElementVisibleTime = Symbol("promptElementVisibleTime");
const $lastPromptOffset = Symbol("lastPromptOffset");
const $cancellationSource = Symbol("cancellationSource");
const $lastSpherical = Symbol("lastSpherical");
const $jumpCamera = Symbol("jumpCamera");
const $initialized = Symbol("initialized");
const $maintainThetaPhi = Symbol("maintainThetaPhi");
const $syncCameraOrbit = Symbol("syncCameraOrbit");
const $syncFieldOfView = Symbol("syncFieldOfView");
const $syncCameraTarget = Symbol("syncCameraTarget");
const $syncMinCameraOrbit = Symbol("syncMinCameraOrbit");
const $syncMaxCameraOrbit = Symbol("syncMaxCameraOrbit");
const $syncMinFieldOfView = Symbol("syncMinFieldOfView");
const $syncMaxFieldOfView = Symbol("syncMaxFieldOfView");
const ControlsMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _j2, _k2, _l2, _m2, _o2, _p, _q2, _r, _s;
  class ControlsModelViewerElement extends ModelViewerElement2 {
    constructor() {
      super(...arguments);
      this.cameraControls = false;
      this.cameraOrbit = DEFAULT_CAMERA_ORBIT;
      this.cameraTarget = DEFAULT_CAMERA_TARGET;
      this.fieldOfView = DEFAULT_FIELD_OF_VIEW;
      this.minCameraOrbit = "auto";
      this.maxCameraOrbit = "auto";
      this.minFieldOfView = "auto";
      this.maxFieldOfView = "auto";
      this.interactionPromptThreshold = DEFAULT_INTERACTION_PROMPT_THRESHOLD;
      this.interactionPrompt = InteractionPromptStrategy.AUTO;
      this.interactionPromptStyle = InteractionPromptStyle.WIGGLE;
      this.orbitSensitivity = 1;
      this.touchAction = TouchAction.NONE;
      this.disableZoom = false;
      this.disablePan = false;
      this.disableTap = false;
      this.interpolationDecay = DECAY_MILLISECONDS;
      this[_a2] = this.shadowRoot.querySelector(".interaction-prompt");
      this[_b2] = this.shadowRoot.querySelector("#prompt");
      this[_c2] = [
        this.shadowRoot.querySelector("#finger0"),
        this.shadowRoot.querySelector("#finger1")
      ];
      this[_d2] = this.shadowRoot.querySelector(".pan-target");
      this[_e2] = 0;
      this[_f2] = Infinity;
      this[_g2] = false;
      this[_h2] = false;
      this[_j2] = ChangeSource.AUTOMATIC;
      this[_k2] = new SmoothControls(
        this[$scene].camera,
        this[$userInputElement],
        this[$scene]
      );
      this[_l2] = new Spherical();
      this[_m2] = false;
      this[_o2] = false;
      this[_p] = false;
      this[_q2] = () => {
        const source = this[$controls].changeSource;
        this[$cancellationSource] = source;
        if (source === ChangeSource.USER_INTERACTION) {
          this[$userHasInteracted] = true;
          this[$deferInteractionPrompt]();
        }
      };
      this[_r] = () => {
        this[$updateAria]();
        this[$needsRender]();
        const source = this[$controls].changeSource;
        this.dispatchEvent(
          new CustomEvent("camera-change", { detail: { source } })
        );
      };
      this[_s] = (event) => {
        if (event.type === "pointer-change-start") {
          this[$container].classList.add("pointer-tumbling");
        } else {
          this[$container].classList.remove("pointer-tumbling");
        }
      };
    }
    get inputSensitivity() {
      return this[$controls].inputSensitivity;
    }
    set inputSensitivity(value) {
      this[$controls].inputSensitivity = value;
    }
    getCameraOrbit() {
      const { theta, phi, radius } = this[$lastSpherical];
      return {
        theta,
        phi,
        radius,
        toString() {
          return `${this.theta}rad ${this.phi}rad ${this.radius}m`;
        }
      };
    }
    getCameraTarget() {
      return toVector3D(
        this[$renderer].isPresenting ? this[$renderer].arRenderer.target : this[$scene].getTarget()
      );
    }
    getFieldOfView() {
      return this[$controls].getFieldOfView();
    }
    getMinimumFieldOfView() {
      return this[$controls].options.minimumFieldOfView;
    }
    getMaximumFieldOfView() {
      return this[$controls].options.maximumFieldOfView;
    }
    getIdealAspect() {
      return this[$scene].idealAspect;
    }
    jumpCameraToGoal() {
      this[$jumpCamera] = true;
      this.requestUpdate($jumpCamera, false);
    }
    resetInteractionPrompt() {
      this[$lastPromptOffset] = 0;
      this[$promptElementVisibleTime] = Infinity;
      this[$userHasInteracted] = false;
      this[$waitingToPromptUser] = this.interactionPrompt === InteractionPromptStrategy.AUTO && this.cameraControls;
    }
    zoom(keyPresses) {
      const event = new WheelEvent("wheel", { deltaY: -30 * keyPresses });
      this[$userInputElement].dispatchEvent(event);
    }
    connectedCallback() {
      super.connectedCallback();
      this[$controls].addEventListener(
        "user-interaction",
        this[$cancelPrompts]
      );
      this[$controls].addEventListener(
        "pointer-change-start",
        this[$onPointerChange]
      );
      this[$controls].addEventListener(
        "pointer-change-end",
        this[$onPointerChange]
      );
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this[$controls].removeEventListener(
        "user-interaction",
        this[$cancelPrompts]
      );
      this[$controls].removeEventListener(
        "pointer-change-start",
        this[$onPointerChange]
      );
      this[$controls].removeEventListener(
        "pointer-change-end",
        this[$onPointerChange]
      );
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      const controls = this[$controls];
      const scene = this[$scene];
      if (changedProperties.has("cameraControls")) {
        if (this.cameraControls) {
          controls.enableInteraction();
          if (this.interactionPrompt === InteractionPromptStrategy.AUTO) {
            this[$waitingToPromptUser] = true;
          }
        } else {
          controls.disableInteraction();
          this[$deferInteractionPrompt]();
        }
        this[$userInputElement].setAttribute("aria-label", this[$ariaLabel]);
      }
      if (changedProperties.has("disableZoom")) {
        controls.disableZoom = this.disableZoom;
      }
      if (changedProperties.has("disablePan")) {
        controls.enablePan = !this.disablePan;
      }
      if (changedProperties.has("disableTap")) {
        controls.enableTap = !this.disableTap;
      }
      if (changedProperties.has("interactionPrompt") || changedProperties.has("cameraControls") || changedProperties.has("src")) {
        if (this.interactionPrompt === InteractionPromptStrategy.AUTO && this.cameraControls && !this[$userHasInteracted]) {
          this[$waitingToPromptUser] = true;
        } else {
          this[$deferInteractionPrompt]();
        }
      }
      if (changedProperties.has("interactionPromptStyle")) {
        this[$promptAnimatedContainer].style.opacity = this.interactionPromptStyle == InteractionPromptStyle.BASIC ? "1" : "0";
      }
      if (changedProperties.has("touchAction")) {
        const touchAction = this.touchAction;
        controls.applyOptions({ touchAction });
        controls.updateTouchActionStyle();
      }
      if (changedProperties.has("orbitSensitivity")) {
        controls.orbitSensitivity = this.orbitSensitivity;
      }
      if (changedProperties.has("interpolationDecay")) {
        controls.setDamperDecayTime(this.interpolationDecay);
        scene.setTargetDamperDecayTime(this.interpolationDecay);
      }
      if (this[$jumpCamera] === true) {
        Promise.resolve().then(() => {
          controls.jumpToGoal();
          scene.jumpToGoal();
          this[$onChange]();
          this[$jumpCamera] = false;
        });
      }
    }
    updateFraming() {
      return __async$2(this, null, function* () {
        const scene = this[$scene];
        const oldFramedFoV = scene.adjustedFoV(scene.framedFoVDeg);
        yield scene.updateFraming();
        const newFramedFoV = scene.adjustedFoV(scene.framedFoVDeg);
        const zoom = this[$controls].getFieldOfView() / oldFramedFoV;
        this[$controls].setFieldOfView(newFramedFoV * zoom);
        this[$maintainThetaPhi] = true;
        this.requestUpdate("maxFieldOfView");
        this.requestUpdate("fieldOfView");
        this.requestUpdate("minCameraOrbit");
        this.requestUpdate("maxCameraOrbit");
        this.requestUpdate("cameraOrbit");
        yield this.updateComplete;
      });
    }
    interact(duration, finger0, finger1) {
      const inputElement = this[$userInputElement];
      const fingerElements = this[$fingerAnimatedContainers];
      if (fingerElements[0].style.opacity === "1") {
        console.warn(
          "interact() failed because an existing interaction is running."
        );
        return;
      }
      const xy = [];
      xy.push({ x: timeline(finger0.x), y: timeline(finger0.y) });
      const positions = [{ x: xy[0].x(0), y: xy[0].y(0) }];
      if (finger1 != null) {
        xy.push({ x: timeline(finger1.x), y: timeline(finger1.y) });
        positions.push({ x: xy[1].x(0), y: xy[1].y(0) });
      }
      let startTime = performance.now();
      const { width, height } = this[$scene];
      const rect = this.getBoundingClientRect();
      const dispatchTouches = (type) => {
        for (const [i, position] of positions.entries()) {
          const { style: style2 } = fingerElements[i];
          style2.transform = `translateX(${width * position.x}px) translateY(${height * position.y}px)`;
          if (type === "pointerdown") {
            style2.opacity = "1";
          } else if (type === "pointerup") {
            style2.opacity = "0";
          }
          const init = {
            pointerId: i - 5678,
            pointerType: "touch",
            target: inputElement,
            clientX: width * position.x + rect.x,
            clientY: height * position.y + rect.y,
            altKey: true
          };
          inputElement.dispatchEvent(new PointerEvent(type, init));
        }
      };
      const moveTouches = () => {
        const changeSource = this[$cancellationSource];
        if (changeSource !== ChangeSource.AUTOMATIC || !inputElement.isConnected) {
          for (const fingerElement of this[$fingerAnimatedContainers]) {
            fingerElement.style.opacity = "0";
          }
          dispatchTouches("pointercancel");
          this.dispatchEvent(
            new CustomEvent("interact-stopped", {
              detail: { source: changeSource }
            })
          );
          document.removeEventListener("visibilitychange", onVisibilityChange);
          return;
        }
        const time = Math.min(1, (performance.now() - startTime) / duration);
        for (const [i, position] of positions.entries()) {
          position.x = xy[i].x(time);
          position.y = xy[i].y(time);
        }
        dispatchTouches("pointermove");
        if (time < 1) {
          requestAnimationFrame(moveTouches);
        } else {
          dispatchTouches("pointerup");
          this.dispatchEvent(
            new CustomEvent("interact-stopped", {
              detail: { source: ChangeSource.AUTOMATIC }
            })
          );
          document.removeEventListener("visibilitychange", onVisibilityChange);
        }
      };
      const onVisibilityChange = () => {
        let elapsed = 0;
        if (document.visibilityState === "hidden") {
          elapsed = performance.now() - startTime;
        } else {
          startTime = performance.now() - elapsed;
        }
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      dispatchTouches("pointerdown");
      this[$cancellationSource] = ChangeSource.AUTOMATIC;
      requestAnimationFrame(moveTouches);
    }
    [(_a2 = $promptElement, _b2 = $promptAnimatedContainer, _c2 = $fingerAnimatedContainers, _d2 = $panElement, _e2 = $lastPromptOffset, _f2 = $promptElementVisibleTime, _g2 = $userHasInteracted, _h2 = $waitingToPromptUser, _j2 = $cancellationSource, _k2 = $controls, _l2 = $lastSpherical, _m2 = $jumpCamera, _o2 = $initialized, _p = $maintainThetaPhi, $syncFieldOfView)](style2) {
      const controls = this[$controls];
      const scene = this[$scene];
      scene.framedFoVDeg = style2[0] * 180 / Math.PI;
      controls.changeSource = ChangeSource.NONE;
      controls.setFieldOfView(scene.adjustedFoV(scene.framedFoVDeg));
      this[$cancelPrompts]();
    }
    [$syncCameraOrbit](style2) {
      const controls = this[$controls];
      if (this[$maintainThetaPhi]) {
        const { theta, phi } = this.getCameraOrbit();
        style2[0] = theta;
        style2[1] = phi;
        this[$maintainThetaPhi] = false;
      }
      controls.changeSource = ChangeSource.NONE;
      controls.setOrbit(style2[0], style2[1], style2[2]);
      this[$cancelPrompts]();
    }
    [$syncMinCameraOrbit](style2) {
      this[$controls].applyOptions({
        minimumAzimuthalAngle: style2[0],
        minimumPolarAngle: style2[1],
        minimumRadius: style2[2]
      });
      this.jumpCameraToGoal();
    }
    [$syncMaxCameraOrbit](style2) {
      this[$controls].applyOptions({
        maximumAzimuthalAngle: style2[0],
        maximumPolarAngle: style2[1],
        maximumRadius: style2[2]
      });
      this[$updateCameraForRadius](style2[2]);
      this.jumpCameraToGoal();
    }
    [$syncMinFieldOfView](style2) {
      this[$controls].applyOptions({
        minimumFieldOfView: style2[0] * 180 / Math.PI
      });
      this.jumpCameraToGoal();
    }
    [$syncMaxFieldOfView](style2) {
      const fov = this[$scene].adjustedFoV(style2[0] * 180 / Math.PI);
      this[$controls].applyOptions({ maximumFieldOfView: fov });
      this.jumpCameraToGoal();
    }
    [$syncCameraTarget](style2) {
      const [x, y2, z2] = style2;
      if (!this[$renderer].arRenderer.isPresenting) {
        this[$scene].setTarget(x, y2, z2);
      }
      this[$controls].changeSource = ChangeSource.NONE;
      this[$renderer].arRenderer.updateTarget();
      this[$cancelPrompts]();
    }
    [$tick](time, delta) {
      super[$tick](time, delta);
      if (this[$renderer].isPresenting || !this[$getModelIsVisible]()) {
        return;
      }
      const controls = this[$controls];
      const scene = this[$scene];
      const now = performance.now();
      if (this[$waitingToPromptUser]) {
        if (this.loaded && now > this[$loadedTime] + this.interactionPromptThreshold) {
          this[$waitingToPromptUser] = false;
          this[$promptElementVisibleTime] = now;
          this[$promptElement].classList.add("visible");
        }
      }
      if (isFinite(this[$promptElementVisibleTime]) && this.interactionPromptStyle === InteractionPromptStyle.WIGGLE) {
        const animationTime = (now - this[$promptElementVisibleTime]) / PROMPT_ANIMATION_TIME % 1;
        const offset = wiggle(animationTime);
        const opacity = fade(animationTime);
        this[$promptAnimatedContainer].style.opacity = `${opacity}`;
        if (offset !== this[$lastPromptOffset]) {
          const xOffset = offset * scene.width * 0.05;
          const deltaTheta = (offset - this[$lastPromptOffset]) * Math.PI / 16;
          this[$promptAnimatedContainer].style.transform = `translateX(${xOffset}px)`;
          controls.changeSource = ChangeSource.AUTOMATIC;
          controls.adjustOrbit(deltaTheta, 0, 0);
          this[$lastPromptOffset] = offset;
        }
      }
      const cameraMoved = controls.update(time, delta);
      const targetMoved = scene.updateTarget(delta);
      if (cameraMoved || targetMoved) {
        this[$onChange]();
      }
    }
    [$deferInteractionPrompt]() {
      this[$waitingToPromptUser] = false;
      this[$promptElement].classList.remove("visible");
      this[$promptElementVisibleTime] = Infinity;
    }
    [$updateCameraForRadius](radius) {
      const maximumRadius = Math.max(
        this[$scene].boundingSphere.radius,
        radius
      );
      const near = 0;
      const far = Math.abs(2 * maximumRadius);
      this[$controls].updateNearFar(near, far);
    }
    [$updateAria]() {
      const { theta, phi } = this[$controls].getCameraSpherical(
        this[$lastSpherical]
      );
      const azimuthalQuadrant = (4 + Math.floor((theta % TAU + QUARTER_PI) / HALF_PI)) % 4;
      const polarTrient = Math.floor(phi / THIRD_PI);
      const azimuthalQuadrantLabel = AZIMUTHAL_QUADRANT_LABELS[azimuthalQuadrant];
      const polarTrientLabel = POLAR_TRIENT_LABELS[polarTrient];
      this[$updateStatus](
        `View from stage ${polarTrientLabel}${azimuthalQuadrantLabel}`
      );
    }
    get [$ariaLabel]() {
      return super[$ariaLabel].replace(/\.$/, "") + (this.cameraControls ? INTERACTION_PROMPT : "");
    }
    [$onResize](event) {
      return __async$2(this, null, function* () {
        const controls = this[$controls];
        const scene = this[$scene];
        const oldFramedFoV = scene.adjustedFoV(scene.framedFoVDeg);
        __superGet(ControlsModelViewerElement.prototype, this, $onResize).call(this, event);
        const fovRatio = scene.adjustedFoV(scene.framedFoVDeg) / oldFramedFoV;
        const fov = controls.getFieldOfView() * (isFinite(fovRatio) ? fovRatio : 1);
        controls.updateAspect(this[$scene].aspect);
        this.requestUpdate("maxFieldOfView", this.maxFieldOfView);
        yield this.updateComplete;
        this[$controls].setFieldOfView(fov);
        this.jumpCameraToGoal();
      });
    }
    [$onModelLoad]() {
      super[$onModelLoad]();
      if (this[$initialized]) {
        this[$maintainThetaPhi] = true;
      } else {
        this[$initialized] = true;
      }
      this.requestUpdate("maxFieldOfView", this.maxFieldOfView);
      this.requestUpdate("fieldOfView", this.fieldOfView);
      this.requestUpdate("minCameraOrbit", this.minCameraOrbit);
      this.requestUpdate("maxCameraOrbit", this.maxCameraOrbit);
      this.requestUpdate("cameraOrbit", this.cameraOrbit);
      this.requestUpdate("cameraTarget", this.cameraTarget);
      this.jumpCameraToGoal();
    }
  }
  _q2 = $cancelPrompts, _r = $onChange, _s = $onPointerChange;
  __decorate$6(
    [e$3({ type: Boolean, attribute: "camera-controls" })],
    ControlsModelViewerElement.prototype,
    "cameraControls",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: cameraOrbitIntrinsics,
        observeEffects: true,
        updateHandler: $syncCameraOrbit
      }),
      e$3({ type: String, attribute: "camera-orbit", hasChanged: () => true })
    ],
    ControlsModelViewerElement.prototype,
    "cameraOrbit",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: cameraTargetIntrinsics,
        observeEffects: true,
        updateHandler: $syncCameraTarget
      }),
      e$3({ type: String, attribute: "camera-target", hasChanged: () => true })
    ],
    ControlsModelViewerElement.prototype,
    "cameraTarget",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: fieldOfViewIntrinsics,
        observeEffects: true,
        updateHandler: $syncFieldOfView
      }),
      e$3({ type: String, attribute: "field-of-view", hasChanged: () => true })
    ],
    ControlsModelViewerElement.prototype,
    "fieldOfView",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: minCameraOrbitIntrinsics,
        updateHandler: $syncMinCameraOrbit
      }),
      e$3({
        type: String,
        attribute: "min-camera-orbit",
        hasChanged: () => true
      })
    ],
    ControlsModelViewerElement.prototype,
    "minCameraOrbit",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: maxCameraOrbitIntrinsics,
        updateHandler: $syncMaxCameraOrbit
      }),
      e$3({
        type: String,
        attribute: "max-camera-orbit",
        hasChanged: () => true
      })
    ],
    ControlsModelViewerElement.prototype,
    "maxCameraOrbit",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: minFieldOfViewIntrinsics,
        updateHandler: $syncMinFieldOfView
      }),
      e$3({
        type: String,
        attribute: "min-field-of-view",
        hasChanged: () => true
      })
    ],
    ControlsModelViewerElement.prototype,
    "minFieldOfView",
    void 0
  );
  __decorate$6(
    [
      style({
        intrinsics: fieldOfViewIntrinsics,
        updateHandler: $syncMaxFieldOfView
      }),
      e$3({
        type: String,
        attribute: "max-field-of-view",
        hasChanged: () => true
      })
    ],
    ControlsModelViewerElement.prototype,
    "maxFieldOfView",
    void 0
  );
  __decorate$6(
    [e$3({ type: Number, attribute: "interaction-prompt-threshold" })],
    ControlsModelViewerElement.prototype,
    "interactionPromptThreshold",
    void 0
  );
  __decorate$6(
    [e$3({ type: String, attribute: "interaction-prompt" })],
    ControlsModelViewerElement.prototype,
    "interactionPrompt",
    void 0
  );
  __decorate$6(
    [e$3({ type: String, attribute: "interaction-prompt-style" })],
    ControlsModelViewerElement.prototype,
    "interactionPromptStyle",
    void 0
  );
  __decorate$6(
    [e$3({ type: Number, attribute: "orbit-sensitivity" })],
    ControlsModelViewerElement.prototype,
    "orbitSensitivity",
    void 0
  );
  __decorate$6(
    [e$3({ type: String, attribute: "touch-action" })],
    ControlsModelViewerElement.prototype,
    "touchAction",
    void 0
  );
  __decorate$6(
    [e$3({ type: Boolean, attribute: "disable-zoom" })],
    ControlsModelViewerElement.prototype,
    "disableZoom",
    void 0
  );
  __decorate$6(
    [e$3({ type: Boolean, attribute: "disable-pan" })],
    ControlsModelViewerElement.prototype,
    "disablePan",
    void 0
  );
  __decorate$6(
    [e$3({ type: Boolean, attribute: "disable-tap" })],
    ControlsModelViewerElement.prototype,
    "disableTap",
    void 0
  );
  __decorate$6(
    [e$3({ type: Number, attribute: "interpolation-decay" })],
    ControlsModelViewerElement.prototype,
    "interpolationDecay",
    void 0
  );
  return ControlsModelViewerElement;
};
/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PAN_SENSITIVITY = 0.018;
const TAP_DISTANCE = 2;
const TAP_MS = 300;
const vector2 = new Vector2();
const vector3$2 = new Vector3();
const DEFAULT_OPTIONS = Object.freeze({
  minimumRadius: 0,
  maximumRadius: Infinity,
  minimumPolarAngle: Math.PI / 8,
  maximumPolarAngle: Math.PI - Math.PI / 8,
  minimumAzimuthalAngle: -Infinity,
  maximumAzimuthalAngle: Infinity,
  minimumFieldOfView: 10,
  maximumFieldOfView: 45,
  touchAction: "none"
});
const KEYBOARD_ORBIT_INCREMENT = Math.PI / 8;
const ZOOM_SENSITIVITY = 0.04;
const PAN_KEY_INCREMENT = 10;
const ChangeSource = {
  USER_INTERACTION: "user-interaction",
  NONE: "none",
  AUTOMATIC: "automatic"
};
class SmoothControls extends EventDispatcher {
  constructor(camera2, element, scene) {
    super();
    this.camera = camera2;
    this.element = element;
    this.scene = scene;
    this.orbitSensitivity = 1;
    this.inputSensitivity = 1;
    this.changeSource = ChangeSource.NONE;
    this._interactionEnabled = false;
    this._disableZoom = false;
    this.isUserPointing = false;
    this.enablePan = true;
    this.enableTap = true;
    this.panProjection = new Matrix3();
    this.panPerPixel = 0;
    this.spherical = new Spherical();
    this.goalSpherical = new Spherical();
    this.thetaDamper = new Damper();
    this.phiDamper = new Damper();
    this.radiusDamper = new Damper();
    this.logFov = Math.log(DEFAULT_OPTIONS.maximumFieldOfView);
    this.goalLogFov = this.logFov;
    this.fovDamper = new Damper();
    this.touchMode = null;
    this.pointers = [];
    this.startTime = 0;
    this.startPointerPosition = { clientX: 0, clientY: 0 };
    this.lastSeparation = 0;
    this.touchDecided = false;
    this.onContext = (event) => {
      if (this.enablePan) {
        event.preventDefault();
      } else {
        for (const pointer of this.pointers) {
          this.onPointerUp(
            new PointerEvent(
              "pointercancel",
              Object.assign(Object.assign({}, this.startPointerPosition), {
                pointerId: pointer.id
              })
            )
          );
        }
      }
    };
    this.touchModeZoom = (dx, dy) => {
      if (!this._disableZoom) {
        const touchDistance = this.twoTouchDistance(
          this.pointers[0],
          this.pointers[1]
        );
        const deltaZoom = ZOOM_SENSITIVITY * (this.lastSeparation - touchDistance) * 50 / this.scene.height;
        this.lastSeparation = touchDistance;
        this.userAdjustOrbit(0, 0, deltaZoom);
      }
      if (this.panPerPixel > 0) {
        this.movePan(dx, dy);
      }
    };
    this.disableScroll = (event) => {
      event.preventDefault();
    };
    this.touchModeRotate = (dx, dy) => {
      const { touchAction } = this._options;
      if (!this.touchDecided && touchAction !== "none") {
        this.touchDecided = true;
        const dxMag = Math.abs(dx);
        const dyMag = Math.abs(dy);
        if (this.changeSource === ChangeSource.USER_INTERACTION && (touchAction === "pan-y" && dyMag > dxMag || touchAction === "pan-x" && dxMag > dyMag)) {
          this.touchMode = null;
          return;
        } else {
          this.element.addEventListener("touchmove", this.disableScroll, {
            passive: false
          });
        }
      }
      this.handleSinglePointerMove(dx, dy);
    };
    this.onPointerDown = (event) => {
      if (this.pointers.length > 2) {
        return;
      }
      const { element: element2 } = this;
      if (this.pointers.length === 0) {
        element2.addEventListener("pointermove", this.onPointerMove);
        element2.addEventListener("pointerup", this.onPointerUp);
        this.touchMode = null;
        this.touchDecided = false;
        this.startPointerPosition.clientX = event.clientX;
        this.startPointerPosition.clientY = event.clientY;
        this.startTime = performance.now();
      }
      try {
        element2.setPointerCapture(event.pointerId);
      } catch (_a2) {
      }
      this.pointers.push({
        clientX: event.clientX,
        clientY: event.clientY,
        id: event.pointerId
      });
      this.isUserPointing = false;
      if (event.pointerType === "touch") {
        this.changeSource = event.altKey ? ChangeSource.AUTOMATIC : ChangeSource.USER_INTERACTION;
        this.onTouchChange(event);
      } else {
        this.changeSource = ChangeSource.USER_INTERACTION;
        this.onMouseDown(event);
      }
      if (this.changeSource === ChangeSource.USER_INTERACTION) {
        this.dispatchEvent({ type: "user-interaction" });
      }
    };
    this.onPointerMove = (event) => {
      const pointer = this.pointers.find(
        (pointer2) => pointer2.id === event.pointerId
      );
      if (pointer == null) {
        return;
      }
      if (event.pointerType === "mouse" && event.buttons === 0) {
        this.onPointerUp(event);
        return;
      }
      const numTouches = this.pointers.length;
      const dx = (event.clientX - pointer.clientX) / numTouches;
      const dy = (event.clientY - pointer.clientY) / numTouches;
      if (dx === 0 && dy === 0) {
        return;
      }
      pointer.clientX = event.clientX;
      pointer.clientY = event.clientY;
      if (event.pointerType === "touch") {
        this.changeSource = event.altKey ? ChangeSource.AUTOMATIC : ChangeSource.USER_INTERACTION;
        if (this.touchMode !== null) {
          this.touchMode(dx, dy);
        }
      } else {
        this.changeSource = ChangeSource.USER_INTERACTION;
        if (this.panPerPixel > 0) {
          this.movePan(dx, dy);
        } else {
          this.handleSinglePointerMove(dx, dy);
        }
      }
    };
    this.onPointerUp = (event) => {
      const { element: element2 } = this;
      const index = this.pointers.findIndex(
        (pointer) => pointer.id === event.pointerId
      );
      if (index !== -1) {
        this.pointers.splice(index, 1);
      }
      if (this.panPerPixel > 0 && !event.altKey) {
        this.resetRadius();
      }
      if (this.pointers.length === 0) {
        element2.removeEventListener("pointermove", this.onPointerMove);
        element2.removeEventListener("pointerup", this.onPointerUp);
        element2.removeEventListener("touchmove", this.disableScroll);
        if (this.enablePan && this.enableTap) {
          this.recenter(event);
        }
      } else if (this.touchMode !== null) {
        this.onTouchChange(event);
      }
      this.scene.element[$panElement].style.opacity = 0;
      element2.style.cursor = "grab";
      this.panPerPixel = 0;
      if (this.isUserPointing) {
        this.dispatchEvent({ type: "pointer-change-end" });
      }
    };
    this.onWheel = (event) => {
      this.changeSource = ChangeSource.USER_INTERACTION;
      const deltaZoom = event.deltaY * (event.deltaMode == 1 ? 18 : 1) * ZOOM_SENSITIVITY / 30;
      this.userAdjustOrbit(0, 0, deltaZoom);
      event.preventDefault();
      this.dispatchEvent({ type: "user-interaction" });
    };
    this.onKeyDown = (event) => {
      const { changeSource } = this;
      this.changeSource = ChangeSource.USER_INTERACTION;
      const relevantKey = event.shiftKey && this.enablePan ? this.panKeyCodeHandler(event) : this.orbitZoomKeyCodeHandler(event);
      if (relevantKey) {
        event.preventDefault();
        this.dispatchEvent({ type: "user-interaction" });
      } else {
        this.changeSource = changeSource;
      }
    };
    this._options = Object.assign({}, DEFAULT_OPTIONS);
    this.setOrbit(0, Math.PI / 2, 1);
    this.setFieldOfView(100);
    this.jumpToGoal();
  }
  get interactionEnabled() {
    return this._interactionEnabled;
  }
  enableInteraction() {
    if (this._interactionEnabled === false) {
      const { element } = this;
      element.addEventListener("pointerdown", this.onPointerDown);
      element.addEventListener("pointercancel", this.onPointerUp);
      if (!this._disableZoom) {
        element.addEventListener("wheel", this.onWheel);
      }
      element.addEventListener("keydown", this.onKeyDown);
      element.addEventListener("touchmove", () => {
      }, { passive: false });
      element.addEventListener("contextmenu", this.onContext);
      this.element.style.cursor = "grab";
      this._interactionEnabled = true;
      this.updateTouchActionStyle();
    }
  }
  disableInteraction() {
    if (this._interactionEnabled === true) {
      const { element } = this;
      element.removeEventListener("pointerdown", this.onPointerDown);
      element.removeEventListener("pointermove", this.onPointerMove);
      element.removeEventListener("pointerup", this.onPointerUp);
      element.removeEventListener("pointercancel", this.onPointerUp);
      element.removeEventListener("wheel", this.onWheel);
      element.removeEventListener("keydown", this.onKeyDown);
      element.removeEventListener("contextmenu", this.onContext);
      element.style.cursor = "";
      this.touchMode = null;
      this._interactionEnabled = false;
      this.updateTouchActionStyle();
    }
  }
  get options() {
    return this._options;
  }
  set disableZoom(disable) {
    if (this._disableZoom != disable) {
      this._disableZoom = disable;
      if (disable === true) {
        this.element.removeEventListener("wheel", this.onWheel);
      } else {
        this.element.addEventListener("wheel", this.onWheel);
      }
      this.updateTouchActionStyle();
    }
  }
  getCameraSpherical(target2 = new Spherical()) {
    return target2.copy(this.spherical);
  }
  getFieldOfView() {
    return this.camera.fov;
  }
  applyOptions(_options) {
    Object.assign(this._options, _options);
    this.setOrbit();
    this.setFieldOfView(Math.exp(this.goalLogFov));
  }
  updateNearFar(nearPlane, farPlane) {
    this.camera.far = farPlane === 0 ? 2 : farPlane;
    this.camera.near = Math.max(nearPlane, this.camera.far / 1e3);
    this.camera.updateProjectionMatrix();
  }
  updateAspect(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
  setOrbit(goalTheta = this.goalSpherical.theta, goalPhi = this.goalSpherical.phi, goalRadius = this.goalSpherical.radius) {
    const {
      minimumAzimuthalAngle,
      maximumAzimuthalAngle,
      minimumPolarAngle,
      maximumPolarAngle,
      minimumRadius,
      maximumRadius
    } = this._options;
    const { theta, phi, radius } = this.goalSpherical;
    const nextTheta = clamp(
      goalTheta,
      minimumAzimuthalAngle,
      maximumAzimuthalAngle
    );
    if (!isFinite(minimumAzimuthalAngle) && !isFinite(maximumAzimuthalAngle)) {
      this.spherical.theta = this.wrapAngle(this.spherical.theta - nextTheta) + nextTheta;
    }
    const nextPhi = clamp(goalPhi, minimumPolarAngle, maximumPolarAngle);
    const nextRadius = clamp(goalRadius, minimumRadius, maximumRadius);
    if (nextTheta === theta && nextPhi === phi && nextRadius === radius) {
      return false;
    }
    if (!isFinite(nextTheta) || !isFinite(nextPhi) || !isFinite(nextRadius)) {
      return false;
    }
    this.goalSpherical.theta = nextTheta;
    this.goalSpherical.phi = nextPhi;
    this.goalSpherical.radius = nextRadius;
    this.goalSpherical.makeSafe();
    return true;
  }
  setRadius(radius) {
    this.goalSpherical.radius = radius;
    this.setOrbit();
  }
  setFieldOfView(fov) {
    const { minimumFieldOfView, maximumFieldOfView } = this._options;
    fov = clamp(fov, minimumFieldOfView, maximumFieldOfView);
    this.goalLogFov = Math.log(fov);
  }
  setDamperDecayTime(decayMilliseconds) {
    this.thetaDamper.setDecayTime(decayMilliseconds);
    this.phiDamper.setDecayTime(decayMilliseconds);
    this.radiusDamper.setDecayTime(decayMilliseconds);
    this.fovDamper.setDecayTime(decayMilliseconds);
  }
  adjustOrbit(deltaTheta, deltaPhi, deltaZoom) {
    const { theta, phi, radius } = this.goalSpherical;
    const {
      minimumRadius,
      maximumRadius,
      minimumFieldOfView,
      maximumFieldOfView
    } = this._options;
    const dTheta = this.spherical.theta - theta;
    const dThetaLimit = Math.PI - 1e-3;
    const goalTheta = theta - clamp(deltaTheta, -dThetaLimit - dTheta, dThetaLimit - dTheta);
    const goalPhi = phi - deltaPhi;
    const deltaRatio = deltaZoom === 0 ? 0 : ((deltaZoom > 0 ? maximumRadius : minimumRadius) - radius) / (Math.log(deltaZoom > 0 ? maximumFieldOfView : minimumFieldOfView) - this.goalLogFov);
    const goalRadius = radius + deltaZoom * (isFinite(deltaRatio) ? deltaRatio : (maximumRadius - minimumRadius) * 2);
    this.setOrbit(goalTheta, goalPhi, goalRadius);
    if (deltaZoom !== 0) {
      const goalLogFov = this.goalLogFov + deltaZoom;
      this.setFieldOfView(Math.exp(goalLogFov));
    }
  }
  jumpToGoal() {
    this.update(0, SETTLING_TIME);
  }
  update(_time, delta) {
    if (this.isStationary()) {
      return false;
    }
    const { maximumPolarAngle, maximumRadius } = this._options;
    const dTheta = this.spherical.theta - this.goalSpherical.theta;
    if (Math.abs(dTheta) > Math.PI && !isFinite(this._options.minimumAzimuthalAngle) && !isFinite(this._options.maximumAzimuthalAngle)) {
      this.spherical.theta -= Math.sign(dTheta) * 2 * Math.PI;
    }
    this.spherical.theta = this.thetaDamper.update(
      this.spherical.theta,
      this.goalSpherical.theta,
      delta,
      Math.PI
    );
    this.spherical.phi = this.phiDamper.update(
      this.spherical.phi,
      this.goalSpherical.phi,
      delta,
      maximumPolarAngle
    );
    this.spherical.radius = this.radiusDamper.update(
      this.spherical.radius,
      this.goalSpherical.radius,
      delta,
      maximumRadius
    );
    this.logFov = this.fovDamper.update(this.logFov, this.goalLogFov, delta, 1);
    this.moveCamera();
    return true;
  }
  updateTouchActionStyle() {
    const { style: style2 } = this.element;
    if (this._interactionEnabled) {
      const { touchAction } = this._options;
      if (this._disableZoom && touchAction !== "none") {
        style2.touchAction = "manipulation";
      } else {
        style2.touchAction = touchAction;
      }
    } else {
      style2.touchAction = "";
    }
  }
  isStationary() {
    return this.goalSpherical.theta === this.spherical.theta && this.goalSpherical.phi === this.spherical.phi && this.goalSpherical.radius === this.spherical.radius && this.goalLogFov === this.logFov;
  }
  moveCamera() {
    this.spherical.makeSafe();
    this.camera.position.setFromSpherical(this.spherical);
    this.camera.setRotationFromEuler(
      new Euler(
        this.spherical.phi - Math.PI / 2,
        this.spherical.theta,
        0,
        "YXZ"
      )
    );
    if (this.camera.fov !== Math.exp(this.logFov)) {
      this.camera.fov = Math.exp(this.logFov);
      this.camera.updateProjectionMatrix();
    }
  }
  userAdjustOrbit(deltaTheta, deltaPhi, deltaZoom) {
    this.adjustOrbit(
      deltaTheta * this.orbitSensitivity * this.inputSensitivity,
      deltaPhi * this.orbitSensitivity * this.inputSensitivity,
      deltaZoom * this.inputSensitivity
    );
  }
  wrapAngle(radians) {
    const normalized = (radians + Math.PI) / (2 * Math.PI);
    const wrapped = normalized - Math.floor(normalized);
    return wrapped * 2 * Math.PI - Math.PI;
  }
  pixelLengthToSphericalAngle(pixelLength) {
    return 2 * Math.PI * pixelLength / this.scene.height;
  }
  twoTouchDistance(touchOne, touchTwo) {
    const { clientX: xOne, clientY: yOne } = touchOne;
    const { clientX: xTwo, clientY: yTwo } = touchTwo;
    const xDelta = xTwo - xOne;
    const yDelta = yTwo - yOne;
    return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
  }
  handleSinglePointerMove(dx, dy) {
    const deltaTheta = this.pixelLengthToSphericalAngle(dx);
    const deltaPhi = this.pixelLengthToSphericalAngle(dy);
    if (this.isUserPointing === false) {
      this.isUserPointing = true;
      this.dispatchEvent({ type: "pointer-change-start" });
    }
    this.userAdjustOrbit(deltaTheta, deltaPhi, 0);
  }
  initializePan() {
    const { theta, phi } = this.spherical;
    const psi = theta - this.scene.yaw;
    this.panPerPixel = PAN_SENSITIVITY / this.scene.height;
    this.panProjection.set(
      -Math.cos(psi),
      -Math.cos(phi) * Math.sin(psi),
      0,
      0,
      Math.sin(phi),
      0,
      Math.sin(psi),
      -Math.cos(phi) * Math.cos(psi),
      0
    );
  }
  movePan(dx, dy) {
    const { scene } = this;
    const dxy = vector3$2.set(dx, dy, 0).multiplyScalar(this.inputSensitivity);
    const metersPerPixel = this.spherical.radius * Math.exp(this.logFov) * this.panPerPixel;
    dxy.multiplyScalar(metersPerPixel);
    const target2 = scene.getTarget();
    target2.add(dxy.applyMatrix3(this.panProjection));
    scene.boundingSphere.clampPoint(target2, target2);
    scene.setTarget(target2.x, target2.y, target2.z);
  }
  recenter(pointer) {
    if (performance.now() > this.startTime + TAP_MS || Math.abs(pointer.clientX - this.startPointerPosition.clientX) > TAP_DISTANCE || Math.abs(pointer.clientY - this.startPointerPosition.clientY) > TAP_DISTANCE) {
      return;
    }
    const { scene } = this;
    const hit = scene.positionAndNormalFromPoint(
      scene.getNDC(pointer.clientX, pointer.clientY)
    );
    if (hit == null) {
      const { cameraTarget } = scene.element;
      scene.element.cameraTarget = "";
      scene.element.cameraTarget = cameraTarget;
      this.userAdjustOrbit(0, 0, 1);
    } else {
      scene.target.worldToLocal(hit.position);
      scene.setTarget(hit.position.x, hit.position.y, hit.position.z);
    }
  }
  resetRadius() {
    const { scene } = this;
    const hit = scene.positionAndNormalFromPoint(vector2.set(0, 0));
    if (hit == null) {
      return;
    }
    scene.target.worldToLocal(hit.position);
    const goalTarget = scene.getTarget();
    const { theta, phi } = this.spherical;
    const psi = theta - scene.yaw;
    const n2 = vector3$2.set(
      Math.sin(phi) * Math.sin(psi),
      Math.cos(phi),
      Math.sin(phi) * Math.cos(psi)
    );
    const dr = n2.dot(hit.position.sub(goalTarget));
    goalTarget.add(n2.multiplyScalar(dr));
    scene.setTarget(goalTarget.x, goalTarget.y, goalTarget.z);
    this.setOrbit(void 0, void 0, this.goalSpherical.radius - dr);
  }
  onTouchChange(event) {
    if (this.pointers.length === 1) {
      this.touchMode = this.touchModeRotate;
    } else {
      if (this._disableZoom) {
        this.touchMode = null;
        this.element.removeEventListener("touchmove", this.disableScroll);
        return;
      }
      this.touchMode = this.touchDecided && this.touchMode === null ? null : this.touchModeZoom;
      this.touchDecided = true;
      this.element.addEventListener("touchmove", this.disableScroll, {
        passive: false
      });
      this.lastSeparation = this.twoTouchDistance(
        this.pointers[0],
        this.pointers[1]
      );
      if (this.enablePan && this.touchMode != null) {
        this.initializePan();
        if (!event.altKey) {
          this.scene.element[$panElement].style.opacity = 1;
        }
      }
    }
  }
  onMouseDown(event) {
    this.panPerPixel = 0;
    if (this.enablePan && (event.button === 2 || event.ctrlKey || event.metaKey || event.shiftKey)) {
      this.initializePan();
      this.scene.element[$panElement].style.opacity = 1;
    }
    this.element.style.cursor = "grabbing";
  }
  orbitZoomKeyCodeHandler(event) {
    let relevantKey = true;
    switch (event.key) {
      case "PageUp":
        this.userAdjustOrbit(0, 0, ZOOM_SENSITIVITY);
        break;
      case "PageDown":
        this.userAdjustOrbit(0, 0, -1 * ZOOM_SENSITIVITY);
        break;
      case "ArrowUp":
        this.userAdjustOrbit(0, -KEYBOARD_ORBIT_INCREMENT, 0);
        break;
      case "ArrowDown":
        this.userAdjustOrbit(0, KEYBOARD_ORBIT_INCREMENT, 0);
        break;
      case "ArrowLeft":
        this.userAdjustOrbit(-KEYBOARD_ORBIT_INCREMENT, 0, 0);
        break;
      case "ArrowRight":
        this.userAdjustOrbit(KEYBOARD_ORBIT_INCREMENT, 0, 0);
        break;
      default:
        relevantKey = false;
        break;
    }
    return relevantKey;
  }
  panKeyCodeHandler(event) {
    this.initializePan();
    let relevantKey = true;
    switch (event.key) {
      case "ArrowUp":
        this.movePan(0, -1 * PAN_KEY_INCREMENT);
        break;
      case "ArrowDown":
        this.movePan(0, PAN_KEY_INCREMENT);
        break;
      case "ArrowLeft":
        this.movePan(-1 * PAN_KEY_INCREMENT, 0);
        break;
      case "ArrowRight":
        this.movePan(PAN_KEY_INCREMENT, 0);
        break;
      default:
        relevantKey = false;
        break;
    }
    return relevantKey;
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INIT_FRAMES = 30;
const AR_SHADOW_INTENSITY = 0.8;
const ROTATION_RATE = 1.5;
const HIT_ANGLE_DEG = 20;
const SCALE_SNAP_HIGH = 1.3;
const SCALE_SNAP_LOW = 1 / SCALE_SNAP_HIGH;
const MIN_VIEWPORT_SCALE = 0.25;
const MAX_DISTANCE = 10;
const ARStatus = {
  NOT_PRESENTING: "not-presenting",
  SESSION_STARTED: "session-started",
  OBJECT_PLACED: "object-placed",
  FAILED: "failed"
};
const ARTracking = {
  TRACKING: "tracking",
  NOT_TRACKING: "not-tracking"
};
const vector3$1 = new Vector3();
const matrix4 = new Matrix4();
const hitPosition = new Vector3();
const camera = new PerspectiveCamera(45, 1, 0.1, 100);
class ARRenderer extends EventDispatcher {
  constructor(renderer) {
    super();
    this.renderer = renderer;
    this.currentSession = null;
    this.placeOnWall = false;
    this.placementBox = null;
    this.lastTick = null;
    this.turntableRotation = null;
    this.oldShadowIntensity = null;
    this.frame = null;
    this.initialHitSource = null;
    this.transientHitTestSource = null;
    this.inputSource = null;
    this._presentedScene = null;
    this.resolveCleanup = null;
    this.exitWebXRButtonContainer = null;
    this.overlay = null;
    this.xrLight = null;
    this.tracking = true;
    this.frames = 0;
    this.initialized = false;
    this.oldTarget = new Vector3();
    this.placementComplete = false;
    this.isTranslating = false;
    this.isRotating = false;
    this.isTwoFingering = false;
    this.lastDragPosition = new Vector3();
    this.firstRatio = 0;
    this.lastAngle = 0;
    this.goalPosition = new Vector3();
    this.goalYaw = 0;
    this.goalScale = 1;
    this.xDamper = new Damper();
    this.yDamper = new Damper();
    this.zDamper = new Damper();
    this.yawDamper = new Damper();
    this.scaleDamper = new Damper();
    this.onExitWebXRButtonContainerClick = () => this.stopPresenting();
    this.onUpdateScene = () => {
      if (this.placementBox != null && this.isPresenting) {
        this.placementBox.dispose();
        this.placementBox = new PlacementBox(
          this.presentedScene,
          this.placeOnWall ? "back" : "bottom"
        );
      }
    };
    this.onSelectStart = (event) => {
      const hitSource = this.transientHitTestSource;
      if (hitSource == null) {
        return;
      }
      const fingers = this.frame.getHitTestResultsForTransientInput(hitSource);
      const scene = this.presentedScene;
      const box = this.placementBox;
      if (fingers.length === 1) {
        this.inputSource = event.inputSource;
        const { axes } = this.inputSource.gamepad;
        const hitPosition2 = box.getHit(this.presentedScene, axes[0], axes[1]);
        box.show = true;
        if (hitPosition2 != null) {
          this.isTranslating = true;
          this.lastDragPosition.copy(hitPosition2);
        } else if (this.placeOnWall === false) {
          this.isRotating = true;
          this.lastAngle = axes[0] * ROTATION_RATE;
        }
      } else if (fingers.length === 2) {
        box.show = true;
        this.isTwoFingering = true;
        const { separation } = this.fingerPolar(fingers);
        this.firstRatio = separation / scene.scale.x;
      }
    };
    this.onSelectEnd = () => {
      this.isTranslating = false;
      this.isRotating = false;
      this.isTwoFingering = false;
      this.inputSource = null;
      this.goalPosition.y += this.placementBox.offsetHeight * this.presentedScene.scale.x;
      this.placementBox.show = false;
    };
    this.threeRenderer = renderer.threeRenderer;
    this.threeRenderer.xr.enabled = true;
  }
  resolveARSession() {
    return __async$2(this, null, function* () {
      assertIsArCandidate();
      const session = yield navigator.xr.requestSession("immersive-ar", {
        requiredFeatures: ["hit-test"],
        optionalFeatures: ["dom-overlay", "light-estimation"],
        domOverlay: this.overlay ? { root: this.overlay } : void 0
      });
      this.threeRenderer.xr.setReferenceSpaceType("local");
      yield this.threeRenderer.xr.setSession(session);
      this.threeRenderer.xr.cameraAutoUpdate = false;
      return session;
    });
  }
  get presentedScene() {
    return this._presentedScene;
  }
  supportsPresentation() {
    return __async$2(this, null, function* () {
      try {
        assertIsArCandidate();
        return yield navigator.xr.isSessionSupported("immersive-ar");
      } catch (error) {
        console.warn("Request to present in WebXR denied:");
        console.warn(error);
        console.warn("Falling back to next ar-mode");
        return false;
      }
    });
  }
  present(scene, environmentEstimation = false) {
    return __async$2(this, null, function* () {
      if (this.isPresenting) {
        console.warn("Cannot present while a model is already presenting");
      }
      let waitForAnimationFrame = new Promise((resolve, _reject) => {
        requestAnimationFrame(() => resolve());
      });
      scene.setHotspotsVisibility(false);
      scene.queueRender();
      yield waitForAnimationFrame;
      this._presentedScene = scene;
      this.overlay = scene.element.shadowRoot.querySelector("div.default");
      if (environmentEstimation === true) {
        this.xrLight = new XREstimatedLight(this.threeRenderer);
        this.xrLight.addEventListener("estimationstart", () => {
          if (!this.isPresenting || this.xrLight == null) {
            return;
          }
          const scene2 = this.presentedScene;
          scene2.add(this.xrLight);
          scene2.environment = this.xrLight.environment;
        });
      }
      const currentSession = yield this.resolveARSession();
      currentSession.addEventListener(
        "end",
        () => {
          this.postSessionCleanup();
        },
        { once: true }
      );
      const exitButton = scene.element.shadowRoot.querySelector(
        ".slot.exit-webxr-ar-button"
      );
      exitButton.classList.add("enabled");
      exitButton.addEventListener("click", this.onExitWebXRButtonContainerClick);
      this.exitWebXRButtonContainer = exitButton;
      const viewerRefSpace = yield currentSession.requestReferenceSpace("viewer");
      this.tracking = true;
      this.frames = 0;
      this.initialized = false;
      this.turntableRotation = scene.yaw;
      this.goalYaw = scene.yaw;
      this.goalScale = 1;
      scene.background = null;
      this.oldShadowIntensity = scene.shadowIntensity;
      scene.setShadowIntensity(0.01);
      this.oldTarget.copy(scene.getTarget());
      scene.element.addEventListener("load", this.onUpdateScene);
      const radians = HIT_ANGLE_DEG * Math.PI / 180;
      const ray = this.placeOnWall === true ? void 0 : new XRRay(new DOMPoint(0, 0, 0), {
        x: 0,
        y: -Math.sin(radians),
        z: -Math.cos(radians)
      });
      currentSession.requestHitTestSource({ space: viewerRefSpace, offsetRay: ray }).then((hitTestSource) => {
        this.initialHitSource = hitTestSource;
      });
      this.currentSession = currentSession;
      this.placementBox = new PlacementBox(
        scene,
        this.placeOnWall ? "back" : "bottom"
      );
      this.placementComplete = false;
      this.lastTick = performance.now();
      this.dispatchEvent({ type: "status", status: ARStatus.SESSION_STARTED });
    });
  }
  stopPresenting() {
    return __async$2(this, null, function* () {
      if (!this.isPresenting) {
        return;
      }
      const cleanupPromise = new Promise((resolve) => {
        this.resolveCleanup = resolve;
      });
      try {
        yield this.currentSession.end();
        yield cleanupPromise;
      } catch (error) {
        console.warn("Error while trying to end WebXR AR session");
        console.warn(error);
        this.postSessionCleanup();
      }
    });
  }
  get isPresenting() {
    return this.presentedScene != null;
  }
  get target() {
    return this.oldTarget;
  }
  updateTarget() {
    const scene = this.presentedScene;
    if (scene != null) {
      const target2 = scene.getTarget();
      this.oldTarget.copy(target2);
      if (this.placeOnWall) {
        target2.z = scene.boundingBox.min.z;
      } else {
        target2.y = scene.boundingBox.min.y;
      }
      scene.setTarget(target2.x, target2.y, target2.z);
    }
  }
  postSessionCleanup() {
    const session = this.currentSession;
    if (session != null) {
      session.removeEventListener("selectstart", this.onSelectStart);
      session.removeEventListener("selectend", this.onSelectEnd);
      this.currentSession = null;
    }
    const scene = this.presentedScene;
    this._presentedScene = null;
    if (scene != null) {
      const { element } = scene;
      if (this.xrLight != null) {
        scene.remove(this.xrLight);
        this.xrLight.dispose();
        this.xrLight = null;
      }
      scene.position.set(0, 0, 0);
      scene.scale.set(1, 1, 1);
      scene.setShadowOffset(0);
      const yaw = this.turntableRotation;
      if (yaw != null) {
        scene.yaw = yaw;
      }
      const intensity = this.oldShadowIntensity;
      if (intensity != null) {
        scene.setShadowIntensity(intensity);
      }
      scene.setEnvironmentAndSkybox(
        element[$currentEnvironmentMap],
        element[$currentBackground]
      );
      const point = this.oldTarget;
      scene.setTarget(point.x, point.y, point.z);
      scene.xrCamera = null;
      scene.element.removeEventListener("load", this.onUpdateScene);
      scene.orientHotspots(0);
      element.requestUpdate("cameraTarget");
      element.requestUpdate("maxCameraOrbit");
      element[$onResize](element.getBoundingClientRect());
      requestAnimationFrame(() => {
        scene.element.dispatchEvent(
          new CustomEvent("camera-change", {
            detail: { source: ChangeSource.NONE }
          })
        );
      });
    }
    this.renderer.height = 0;
    const exitButton = this.exitWebXRButtonContainer;
    if (exitButton != null) {
      exitButton.classList.remove("enabled");
      exitButton.removeEventListener(
        "click",
        this.onExitWebXRButtonContainerClick
      );
      this.exitWebXRButtonContainer = null;
    }
    const hitSource = this.transientHitTestSource;
    if (hitSource != null) {
      hitSource.cancel();
      this.transientHitTestSource = null;
    }
    const hitSourceInitial = this.initialHitSource;
    if (hitSourceInitial != null) {
      hitSourceInitial.cancel();
      this.initialHitSource = null;
    }
    if (this.placementBox != null) {
      this.placementBox.dispose();
      this.placementBox = null;
    }
    this.lastTick = null;
    this.turntableRotation = null;
    this.oldShadowIntensity = null;
    this.frame = null;
    this.inputSource = null;
    this.overlay = null;
    if (this.resolveCleanup != null) {
      this.resolveCleanup();
    }
    this.dispatchEvent({ type: "status", status: ARStatus.NOT_PRESENTING });
  }
  updateView(view2) {
    const scene = this.presentedScene;
    const xr = this.threeRenderer.xr;
    xr.updateCamera(camera);
    scene.xrCamera = xr.getCamera();
    const { elements } = scene.getCamera().matrixWorld;
    scene.orientHotspots(Math.atan2(elements[1], elements[5]));
    if (!this.initialized) {
      this.placeInitially();
      this.initialized = true;
    }
    if (view2.requestViewportScale && view2.recommendedViewportScale) {
      const scale = view2.recommendedViewportScale;
      view2.requestViewportScale(Math.max(scale, MIN_VIEWPORT_SCALE));
    }
    const layer = xr.getBaseLayer();
    if (layer != null) {
      const viewport = layer instanceof XRWebGLLayer ? layer.getViewport(view2) : xr.getBinding().getViewSubImage(layer, view2).viewport;
      this.threeRenderer.setViewport(
        viewport.x,
        viewport.y,
        viewport.width,
        viewport.height
      );
    }
  }
  placeInitially() {
    const scene = this.presentedScene;
    const { position, element } = scene;
    const xrCamera = scene.getCamera();
    const { width, height } = this.overlay.getBoundingClientRect();
    scene.setSize(width, height);
    xrCamera.projectionMatrixInverse.copy(xrCamera.projectionMatrix).invert();
    const { theta, radius } = element.getCameraOrbit();
    const cameraDirection = xrCamera.getWorldDirection(vector3$1);
    scene.yaw = Math.atan2(-cameraDirection.x, -cameraDirection.z) - theta;
    this.goalYaw = scene.yaw;
    position.copy(xrCamera.position).add(cameraDirection.multiplyScalar(radius));
    this.updateTarget();
    const target2 = scene.getTarget();
    position.add(target2).sub(this.oldTarget);
    this.goalPosition.copy(position);
    scene.setHotspotsVisibility(true);
    const { session } = this.frame;
    session.addEventListener("selectstart", this.onSelectStart);
    session.addEventListener("selectend", this.onSelectEnd);
    session.requestHitTestSourceForTransientInput({ profile: "generic-touchscreen" }).then((hitTestSource) => {
      this.transientHitTestSource = hitTestSource;
    });
  }
  getTouchLocation() {
    const { axes } = this.inputSource.gamepad;
    let location = this.placementBox.getExpandedHit(
      this.presentedScene,
      axes[0],
      axes[1]
    );
    if (location != null) {
      vector3$1.copy(location).sub(this.presentedScene.getCamera().position);
      if (vector3$1.length() > MAX_DISTANCE)
        return null;
    }
    return location;
  }
  getHitPoint(hitResult) {
    const refSpace = this.threeRenderer.xr.getReferenceSpace();
    const pose = hitResult.getPose(refSpace);
    if (pose == null) {
      return null;
    }
    const hitMatrix = matrix4.fromArray(pose.transform.matrix);
    if (this.placeOnWall === true) {
      this.goalYaw = Math.atan2(hitMatrix.elements[4], hitMatrix.elements[6]);
    }
    return hitMatrix.elements[5] > 0.75 !== this.placeOnWall ? hitPosition.setFromMatrixPosition(hitMatrix) : null;
  }
  moveToFloor(frame) {
    const hitSource = this.initialHitSource;
    if (hitSource == null) {
      return;
    }
    const hitTestResults = frame.getHitTestResults(hitSource);
    if (hitTestResults.length == 0) {
      return;
    }
    const hit = hitTestResults[0];
    const hitPoint = this.getHitPoint(hit);
    if (hitPoint == null) {
      return;
    }
    this.placementBox.show = true;
    if (!this.isTranslating) {
      if (this.placeOnWall) {
        this.goalPosition.copy(hitPoint);
      } else {
        this.goalPosition.y = hitPoint.y;
      }
    }
    hitSource.cancel();
    this.initialHitSource = null;
    this.dispatchEvent({ type: "status", status: ARStatus.OBJECT_PLACED });
  }
  fingerPolar(fingers) {
    const fingerOne = fingers[0].inputSource.gamepad.axes;
    const fingerTwo = fingers[1].inputSource.gamepad.axes;
    const deltaX = fingerTwo[0] - fingerOne[0];
    const deltaY = fingerTwo[1] - fingerOne[1];
    const angle = Math.atan2(deltaY, deltaX);
    let deltaYaw = this.lastAngle - angle;
    if (deltaYaw > Math.PI) {
      deltaYaw -= 2 * Math.PI;
    } else if (deltaYaw < -Math.PI) {
      deltaYaw += 2 * Math.PI;
    }
    this.lastAngle = angle;
    return {
      separation: Math.sqrt(deltaX * deltaX + deltaY * deltaY),
      deltaYaw
    };
  }
  processInput(frame) {
    const hitSource = this.transientHitTestSource;
    if (hitSource == null) {
      return;
    }
    if (!this.isTranslating && !this.isTwoFingering && !this.isRotating) {
      return;
    }
    const fingers = frame.getHitTestResultsForTransientInput(hitSource);
    const scene = this.presentedScene;
    const scale = scene.scale.x;
    if (this.isTwoFingering) {
      if (fingers.length < 2) {
        this.isTwoFingering = false;
      } else {
        const { separation, deltaYaw } = this.fingerPolar(fingers);
        if (this.placeOnWall === false) {
          this.goalYaw += deltaYaw;
        }
        if (scene.canScale) {
          const scale2 = separation / this.firstRatio;
          this.goalScale = scale2 < SCALE_SNAP_HIGH && scale2 > SCALE_SNAP_LOW ? 1 : scale2;
        }
      }
      return;
    } else if (fingers.length === 2) {
      this.isTranslating = false;
      this.isRotating = false;
      this.isTwoFingering = true;
      const { separation } = this.fingerPolar(fingers);
      this.firstRatio = separation / scale;
      return;
    }
    if (this.isRotating) {
      const angle = this.inputSource.gamepad.axes[0] * ROTATION_RATE;
      this.goalYaw += angle - this.lastAngle;
      this.lastAngle = angle;
    } else if (this.isTranslating) {
      fingers.forEach((finger) => {
        if (finger.inputSource !== this.inputSource) {
          return;
        }
        let hit = null;
        if (finger.results.length > 0) {
          hit = this.getHitPoint(finger.results[0]);
        }
        if (hit == null) {
          hit = this.getTouchLocation();
        }
        if (hit == null) {
          return;
        }
        this.goalPosition.sub(this.lastDragPosition);
        if (this.placeOnWall === false) {
          const offset = hit.y - this.lastDragPosition.y;
          if (offset < 0) {
            this.placementBox.offsetHeight = offset / scale;
            this.presentedScene.setShadowOffset(offset);
            const cameraPosition = vector3$1.copy(scene.getCamera().position);
            const alpha = -offset / (cameraPosition.y - hit.y);
            cameraPosition.multiplyScalar(alpha);
            hit.multiplyScalar(1 - alpha).add(cameraPosition);
          }
        }
        this.goalPosition.add(hit);
        this.lastDragPosition.copy(hit);
      });
    }
  }
  moveScene(delta) {
    const scene = this.presentedScene;
    const { position, yaw } = scene;
    const boundingRadius = scene.boundingSphere.radius;
    const goal = this.goalPosition;
    const oldScale = scene.scale.x;
    const box = this.placementBox;
    let source = ChangeSource.NONE;
    if (!goal.equals(position) || this.goalScale !== oldScale) {
      source = ChangeSource.USER_INTERACTION;
      let { x, y: y2, z: z2 } = position;
      x = this.xDamper.update(x, goal.x, delta, boundingRadius);
      y2 = this.yDamper.update(y2, goal.y, delta, boundingRadius);
      z2 = this.zDamper.update(z2, goal.z, delta, boundingRadius);
      position.set(x, y2, z2);
      const newScale = this.scaleDamper.update(
        oldScale,
        this.goalScale,
        delta,
        1
      );
      scene.scale.set(newScale, newScale, newScale);
      if (!this.isTranslating) {
        const offset = goal.y - y2;
        if (this.placementComplete && this.placeOnWall === false) {
          box.offsetHeight = offset / newScale;
          scene.setShadowOffset(offset);
        } else if (offset === 0) {
          this.placementComplete = true;
          box.show = false;
          scene.setShadowIntensity(AR_SHADOW_INTENSITY);
        }
      }
    }
    box.updateOpacity(delta);
    scene.updateTarget(delta);
    scene.yaw = this.yawDamper.update(yaw, this.goalYaw, delta, Math.PI);
    scene.element.dispatchEvent(
      new CustomEvent("camera-change", { detail: { source } })
    );
  }
  onWebXRFrame(time, frame) {
    this.frame = frame;
    ++this.frames;
    const refSpace = this.threeRenderer.xr.getReferenceSpace();
    const pose = frame.getViewerPose(refSpace);
    if (pose == null && this.tracking === true && this.frames > INIT_FRAMES) {
      this.tracking = false;
      this.dispatchEvent({ type: "tracking", status: ARTracking.NOT_TRACKING });
    }
    const scene = this.presentedScene;
    if (pose == null || scene == null || !scene.element.loaded) {
      this.threeRenderer.clear();
      return;
    }
    if (this.tracking === false) {
      this.tracking = true;
      this.dispatchEvent({ type: "tracking", status: ARTracking.TRACKING });
    }
    let isFirstView = true;
    for (const view2 of pose.views) {
      this.updateView(view2);
      if (isFirstView) {
        this.moveToFloor(frame);
        this.processInput(frame);
        const delta = time - this.lastTick;
        this.moveScene(delta);
        this.renderer.preRender(scene, time, delta);
        this.lastTick = time;
        scene.renderShadow(this.threeRenderer);
      }
      this.threeRenderer.render(scene, scene.getCamera());
      isFirstView = false;
    }
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Debugger {
  constructor(renderer) {
    renderer.threeRenderer.debug = { checkShaderErrors: true };
    Promise.resolve().then(() => {
      self.dispatchEvent(
        new CustomEvent("model-viewer-renderer-debug", {
          detail: {
            renderer,
            THREE: {
              ShaderMaterial,
              Texture: Texture$1,
              Mesh,
              Scene,
              PlaneGeometry,
              OrthographicCamera,
              WebGLRenderTarget
            }
          }
        })
      );
    });
  }
  addScene(scene) {
    self.dispatchEvent(
      new CustomEvent("model-viewer-scene-added-debug", { detail: { scene } })
    );
  }
  removeScene(scene) {
    self.dispatchEvent(
      new CustomEvent("model-viewer-scene-removed-debug", { detail: { scene } })
    );
  }
}
function clone(source) {
  const sourceLookup = /* @__PURE__ */ new Map();
  const cloneLookup = /* @__PURE__ */ new Map();
  const clone2 = source.clone();
  parallelTraverse(source, clone2, function(sourceNode, clonedNode) {
    sourceLookup.set(clonedNode, sourceNode);
    cloneLookup.set(sourceNode, clonedNode);
  });
  clone2.traverse(function(node) {
    if (!node.isSkinnedMesh)
      return;
    const clonedMesh = node;
    const sourceMesh = sourceLookup.get(node);
    const sourceBones = sourceMesh.skeleton.bones;
    clonedMesh.skeleton = sourceMesh.skeleton.clone();
    clonedMesh.bindMatrix.copy(sourceMesh.bindMatrix);
    clonedMesh.skeleton.bones = sourceBones.map(function(bone) {
      return cloneLookup.get(bone);
    });
    clonedMesh.bind(clonedMesh.skeleton, clonedMesh.bindMatrix);
  });
  return clone2;
}
function parallelTraverse(a2, b2, callback) {
  callback(a2, b2);
  for (let i = 0; i < a2.children.length; i++) {
    parallelTraverse(a2.children[i], b2.children[i], callback);
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $prepared = Symbol("prepared");
const $prepare = Symbol("prepare");
const $preparedGLTF = Symbol("preparedGLTF");
const $clone = Symbol("clone");
class GLTFInstance {
  constructor(preparedGLTF) {
    this[$preparedGLTF] = preparedGLTF;
  }
  static prepare(source) {
    if (source.scene == null) {
      throw new Error("Model does not have a scene");
    }
    if (source[$prepared]) {
      return source;
    }
    const prepared = this[$prepare](source);
    prepared[$prepared] = true;
    return prepared;
  }
  static [$prepare](source) {
    const { scene } = source;
    const scenes = [scene];
    return Object.assign(Object.assign({}, source), { scene, scenes });
  }
  get parser() {
    return this[$preparedGLTF].parser;
  }
  get animations() {
    return this[$preparedGLTF].animations;
  }
  get scene() {
    return this[$preparedGLTF].scene;
  }
  get scenes() {
    return this[$preparedGLTF].scenes;
  }
  get cameras() {
    return this[$preparedGLTF].cameras;
  }
  get asset() {
    return this[$preparedGLTF].asset;
  }
  get userData() {
    return this[$preparedGLTF].userData;
  }
  clone() {
    const GLTFInstanceConstructor = this.constructor;
    const clonedGLTF = this[$clone]();
    return new GLTFInstanceConstructor(clonedGLTF);
  }
  dispose() {
    this.scenes.forEach((scene) => {
      scene.traverse((object) => {
        const mesh = object;
        if (!mesh.material) {
          return;
        }
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((material) => {
          for (const propertyName in material) {
            const texture = material[propertyName];
            if (texture instanceof Texture$1) {
              const image = texture.source.data;
              if (image.close != null) {
                image.close();
              }
              texture.dispose();
            }
          }
          material.dispose();
        });
        mesh.geometry.dispose();
      });
    });
  }
  [$clone]() {
    const source = this[$preparedGLTF];
    const scene = clone(this.scene);
    cloneVariantMaterials(scene, this.scene);
    const scenes = [scene];
    const userData = source.userData ? Object.assign({}, source.userData) : {};
    return Object.assign(Object.assign({}, source), {
      scene,
      scenes,
      userData
    });
  }
}
const cloneVariantMaterials = (dst, src) => {
  traversePair(dst, src, (dst2, src2) => {
    if (src2.userData.variantMaterials !== void 0) {
      dst2.userData.variantMaterials = new Map(src2.userData.variantMaterials);
    }
    if (src2.userData.variantData !== void 0) {
      dst2.userData.variantData = src2.userData.variantData;
    }
    if (src2.userData.originalMaterial !== void 0) {
      dst2.userData.originalMaterial = src2.userData.originalMaterial;
    }
  });
};
const traversePair = (obj1, obj2, callback) => {
  callback(obj1, obj2);
  for (let i = 0; i < obj1.children.length; i++) {
    traversePair(obj1.children[i], obj2.children[i], callback);
  }
};
const $threeGLTF = Symbol("threeGLTF");
const $gltf = Symbol("gltf");
const $gltfElementMap = Symbol("gltfElementMap");
const $threeObjectMap = Symbol("threeObjectMap");
const $parallelTraverseThreeScene = Symbol("parallelTraverseThreeScene");
const $correlateOriginalThreeGLTF = Symbol("correlateOriginalThreeGLTF");
const $correlateCloneThreeGLTF = Symbol("correlateCloneThreeGLTF");
class CorrelatedSceneGraph {
  constructor(threeGLTF, gltf, threeObjectMap, gltfElementMap) {
    this[$threeGLTF] = threeGLTF;
    this[$gltf] = gltf;
    this[$gltfElementMap] = gltfElementMap;
    this[$threeObjectMap] = threeObjectMap;
  }
  static from(threeGLTF, upstreamCorrelatedSceneGraph) {
    if (upstreamCorrelatedSceneGraph != null) {
      return this[$correlateCloneThreeGLTF](
        threeGLTF,
        upstreamCorrelatedSceneGraph
      );
    } else {
      return this[$correlateOriginalThreeGLTF](threeGLTF);
    }
  }
  static [$correlateOriginalThreeGLTF](threeGLTF) {
    const gltf = threeGLTF.parser.json;
    const associations = threeGLTF.parser.associations;
    const gltfElementMap = /* @__PURE__ */ new Map();
    const defaultMaterial = { name: "Default" };
    const defaultReference = { type: "materials", index: -1 };
    for (const threeMaterial of associations.keys()) {
      if (threeMaterial instanceof Material$1 && associations.get(threeMaterial) == null) {
        if (defaultReference.index < 0) {
          if (gltf.materials == null) {
            gltf.materials = [];
          }
          defaultReference.index = gltf.materials.length;
          gltf.materials.push(defaultMaterial);
        }
        threeMaterial.name = defaultMaterial.name;
        associations.set(threeMaterial, { materials: defaultReference.index });
      }
    }
    for (const [threeObject, gltfMappings] of associations) {
      if (gltfMappings) {
        const objWithUserData = threeObject;
        objWithUserData.userData = objWithUserData.userData || {};
        objWithUserData.userData.associations = gltfMappings;
      }
      for (const mapping in gltfMappings) {
        if (mapping != null && mapping !== "primitives") {
          const type = mapping;
          const elementArray = gltf[type] || [];
          const gltfElement = elementArray[gltfMappings[type]];
          if (gltfElement == null) {
            continue;
          }
          let threeObjects = gltfElementMap.get(gltfElement);
          if (threeObjects == null) {
            threeObjects = /* @__PURE__ */ new Set();
            gltfElementMap.set(gltfElement, threeObjects);
          }
          threeObjects.add(threeObject);
        }
      }
    }
    return new CorrelatedSceneGraph(
      threeGLTF,
      gltf,
      associations,
      gltfElementMap
    );
  }
  static [$correlateCloneThreeGLTF](cloneThreeGLTF, upstreamCorrelatedSceneGraph) {
    const originalThreeGLTF = upstreamCorrelatedSceneGraph.threeGLTF;
    const originalGLTF = upstreamCorrelatedSceneGraph.gltf;
    const cloneGLTF = JSON.parse(JSON.stringify(originalGLTF));
    const cloneThreeObjectMap = /* @__PURE__ */ new Map();
    const cloneGLTFElementMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < originalThreeGLTF.scenes.length; i++) {
      this[$parallelTraverseThreeScene](
        originalThreeGLTF.scenes[i],
        cloneThreeGLTF.scenes[i],
        (object, cloneObject) => {
          const elementReference = upstreamCorrelatedSceneGraph.threeObjectMap.get(object);
          if (elementReference == null) {
            return;
          }
          for (const mapping in elementReference) {
            if (mapping != null && mapping !== "primitives") {
              const type = mapping;
              const index = elementReference[type];
              const cloneElement = cloneGLTF[type][index];
              const mappings = cloneThreeObjectMap.get(cloneObject) || {};
              mappings[type] = index;
              cloneThreeObjectMap.set(cloneObject, mappings);
              const cloneObjects = cloneGLTFElementMap.get(cloneElement) || /* @__PURE__ */ new Set();
              cloneObjects.add(cloneObject);
              cloneGLTFElementMap.set(cloneElement, cloneObjects);
            }
          }
        }
      );
    }
    return new CorrelatedSceneGraph(
      cloneThreeGLTF,
      cloneGLTF,
      cloneThreeObjectMap,
      cloneGLTFElementMap
    );
  }
  static [$parallelTraverseThreeScene](sceneOne, sceneTwo, callback) {
    const traverse = (a2, b2) => {
      callback(a2, b2);
      if (a2.isObject3D) {
        const meshA = a2;
        const meshB = b2;
        if (meshA.material) {
          if (Array.isArray(meshA.material)) {
            for (let i = 0; i < meshA.material.length; ++i) {
              callback(meshA.material[i], meshB.material[i]);
            }
          } else {
            callback(meshA.material, meshB.material);
          }
        }
        for (let i = 0; i < a2.children.length; ++i) {
          traverse(a2.children[i], b2.children[i]);
        }
      }
    };
    traverse(sceneOne, sceneTwo);
  }
  get threeGLTF() {
    return this[$threeGLTF];
  }
  get gltf() {
    return this[$gltf];
  }
  get gltfElementMap() {
    return this[$gltfElementMap];
  }
  get threeObjectMap() {
    return this[$threeObjectMap];
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $correlatedSceneGraph$1 = Symbol("correlatedSceneGraph");
class ModelViewerGLTFInstance extends GLTFInstance {
  static [$prepare](source) {
    const prepared = super[$prepare](source);
    if (prepared[$correlatedSceneGraph$1] == null) {
      prepared[$correlatedSceneGraph$1] = CorrelatedSceneGraph.from(prepared);
    }
    const { scene } = prepared;
    const nullSphere = new Sphere(void 0, Infinity);
    scene.traverse((node) => {
      node.renderOrder = 1e3;
      node.frustumCulled = false;
      if (!node.name) {
        node.name = node.uuid;
      }
      const mesh = node;
      if (mesh.material) {
        const { geometry } = mesh;
        mesh.castShadow = true;
        if (mesh.isSkinnedMesh) {
          geometry.boundingSphere = nullSphere;
          geometry.boundingBox = null;
        }
        const material = mesh.material;
        if (material.isMeshBasicMaterial === true) {
          material.toneMapped = false;
        }
        material.shadowSide = FrontSide;
        if (material.aoMap) {
          const { gltf, threeObjectMap } = prepared[$correlatedSceneGraph$1];
          const gltfRef = threeObjectMap.get(material);
          if (gltf.materials != null && gltfRef != null && gltfRef.materials != null) {
            const gltfMaterial = gltf.materials[gltfRef.materials];
            if (gltfMaterial.occlusionTexture && gltfMaterial.occlusionTexture.texCoord === 0 && geometry.attributes.uv != null) {
              geometry.setAttribute("uv2", geometry.attributes.uv);
            }
          }
        }
      }
    });
    return prepared;
  }
  get correlatedSceneGraph() {
    return this[$preparedGLTF][$correlatedSceneGraph$1];
  }
  [$clone]() {
    const clone2 = super[$clone]();
    const sourceUUIDToClonedMaterial = /* @__PURE__ */ new Map();
    clone2.scene.traverse((node) => {
      const mesh = node;
      if (mesh.material) {
        const material = mesh.material;
        if (material != null) {
          if (sourceUUIDToClonedMaterial.has(material.uuid)) {
            mesh.material = sourceUUIDToClonedMaterial.get(material.uuid);
            return;
          }
          mesh.material = material.clone();
          sourceUUIDToClonedMaterial.set(material.uuid, mesh.material);
        }
      }
    });
    clone2[$correlatedSceneGraph$1] = CorrelatedSceneGraph.from(
      clone2,
      this.correlatedSceneGraph
    );
    return clone2;
  }
}
class RGBELoader extends DataTextureLoader {
  constructor(manager) {
    super(manager);
    this.type = HalfFloatType;
  }
  parse(buffer) {
    const RGBE_RETURN_FAILURE = -1, rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
      switch (rgbe_error_code) {
        case rgbe_read_error:
          console.error("THREE.RGBELoader Read Error: " + (msg || ""));
          break;
        case rgbe_write_error:
          console.error("THREE.RGBELoader Write Error: " + (msg || ""));
          break;
        case rgbe_format_error:
          console.error("THREE.RGBELoader Bad File Format: " + (msg || ""));
          break;
        default:
        case rgbe_memory_error:
          console.error("THREE.RGBELoader: Error: " + (msg || ""));
      }
      return RGBE_RETURN_FAILURE;
    }, RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer2, lineLimit, consume) {
      const chunkSize = 128;
      lineLimit = !lineLimit ? 1024 : lineLimit;
      let p2 = buffer2.pos, i = -1, len = 0, s2 = "", chunk = String.fromCharCode.apply(
        null,
        new Uint16Array(buffer2.subarray(p2, p2 + chunkSize))
      );
      while (0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p2 < buffer2.byteLength) {
        s2 += chunk;
        len += chunk.length;
        p2 += chunkSize;
        chunk += String.fromCharCode.apply(
          null,
          new Uint16Array(buffer2.subarray(p2, p2 + chunkSize))
        );
      }
      if (-1 < i) {
        if (false !== consume)
          buffer2.pos += len + i + 1;
        return s2 + chunk.slice(0, i);
      }
      return false;
    }, RGBE_ReadHeader = function(buffer2) {
      const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, header = {
        valid: 0,
        string: "",
        comments: "",
        programtype: "RGBE",
        format: "",
        gamma: 1,
        exposure: 1,
        width: 0,
        height: 0
      };
      let line, match;
      if (buffer2.pos >= buffer2.byteLength || !(line = fgets(buffer2))) {
        return rgbe_error(rgbe_read_error, "no header found");
      }
      if (!(match = line.match(magic_token_re))) {
        return rgbe_error(rgbe_format_error, "bad initial token");
      }
      header.valid |= RGBE_VALID_PROGRAMTYPE;
      header.programtype = match[1];
      header.string += line + "\n";
      while (true) {
        line = fgets(buffer2);
        if (false === line)
          break;
        header.string += line + "\n";
        if ("#" === line.charAt(0)) {
          header.comments += line + "\n";
          continue;
        }
        if (match = line.match(gamma_re)) {
          header.gamma = parseFloat(match[1]);
        }
        if (match = line.match(exposure_re)) {
          header.exposure = parseFloat(match[1]);
        }
        if (match = line.match(format_re)) {
          header.valid |= RGBE_VALID_FORMAT;
          header.format = match[1];
        }
        if (match = line.match(dimensions_re)) {
          header.valid |= RGBE_VALID_DIMENSIONS;
          header.height = parseInt(match[1], 10);
          header.width = parseInt(match[2], 10);
        }
        if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS)
          break;
      }
      if (!(header.valid & RGBE_VALID_FORMAT)) {
        return rgbe_error(rgbe_format_error, "missing format specifier");
      }
      if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
        return rgbe_error(rgbe_format_error, "missing image size specifier");
      }
      return header;
    }, RGBE_ReadPixels_RLE = function(buffer2, w2, h2) {
      const scanline_width = w2;
      if (scanline_width < 8 || scanline_width > 32767 || 2 !== buffer2[0] || 2 !== buffer2[1] || buffer2[2] & 128) {
        return new Uint8Array(buffer2);
      }
      if (scanline_width !== (buffer2[2] << 8 | buffer2[3])) {
        return rgbe_error(rgbe_format_error, "wrong scanline width");
      }
      const data_rgba = new Uint8Array(4 * w2 * h2);
      if (!data_rgba.length) {
        return rgbe_error(
          rgbe_memory_error,
          "unable to allocate buffer space"
        );
      }
      let offset = 0, pos = 0;
      const ptr_end = 4 * scanline_width;
      const rgbeStart = new Uint8Array(4);
      const scanline_buffer = new Uint8Array(ptr_end);
      let num_scanlines = h2;
      while (num_scanlines > 0 && pos < buffer2.byteLength) {
        if (pos + 4 > buffer2.byteLength) {
          return rgbe_error(rgbe_read_error);
        }
        rgbeStart[0] = buffer2[pos++];
        rgbeStart[1] = buffer2[pos++];
        rgbeStart[2] = buffer2[pos++];
        rgbeStart[3] = buffer2[pos++];
        if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) {
          return rgbe_error(rgbe_format_error, "bad rgbe scanline format");
        }
        let ptr = 0, count;
        while (ptr < ptr_end && pos < buffer2.byteLength) {
          count = buffer2[pos++];
          const isEncodedRun = count > 128;
          if (isEncodedRun)
            count -= 128;
          if (0 === count || ptr + count > ptr_end) {
            return rgbe_error(rgbe_format_error, "bad scanline data");
          }
          if (isEncodedRun) {
            const byteValue = buffer2[pos++];
            for (let i = 0; i < count; i++) {
              scanline_buffer[ptr++] = byteValue;
            }
          } else {
            scanline_buffer.set(buffer2.subarray(pos, pos + count), ptr);
            ptr += count;
            pos += count;
          }
        }
        const l2 = scanline_width;
        for (let i = 0; i < l2; i++) {
          let off = 0;
          data_rgba[offset] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 1] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 2] = scanline_buffer[i + off];
          off += scanline_width;
          data_rgba[offset + 3] = scanline_buffer[i + off];
          offset += 4;
        }
        num_scanlines--;
      }
      return data_rgba;
    };
    const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e2 = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e2 - 128) / 255;
      destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
      destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
      destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
      destArray[destOffset + 3] = 1;
    };
    const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
      const e2 = sourceArray[sourceOffset + 3];
      const scale = Math.pow(2, e2 - 128) / 255;
      destArray[destOffset + 0] = DataUtils.toHalfFloat(
        Math.min(sourceArray[sourceOffset + 0] * scale, 65504)
      );
      destArray[destOffset + 1] = DataUtils.toHalfFloat(
        Math.min(sourceArray[sourceOffset + 1] * scale, 65504)
      );
      destArray[destOffset + 2] = DataUtils.toHalfFloat(
        Math.min(sourceArray[sourceOffset + 2] * scale, 65504)
      );
      destArray[destOffset + 3] = DataUtils.toHalfFloat(1);
    };
    const byteArray = new Uint8Array(buffer);
    byteArray.pos = 0;
    const rgbe_header_info = RGBE_ReadHeader(byteArray);
    if (RGBE_RETURN_FAILURE !== rgbe_header_info) {
      const w2 = rgbe_header_info.width, h2 = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(
        byteArray.subarray(byteArray.pos),
        w2,
        h2
      );
      if (RGBE_RETURN_FAILURE !== image_rgba_data) {
        let data, type;
        let numElements;
        switch (this.type) {
          case FloatType:
            numElements = image_rgba_data.length / 4;
            const floatArray = new Float32Array(numElements * 4);
            for (let j2 = 0; j2 < numElements; j2++) {
              RGBEByteToRGBFloat(image_rgba_data, j2 * 4, floatArray, j2 * 4);
            }
            data = floatArray;
            type = FloatType;
            break;
          case HalfFloatType:
            numElements = image_rgba_data.length / 4;
            const halfArray = new Uint16Array(numElements * 4);
            for (let j2 = 0; j2 < numElements; j2++) {
              RGBEByteToRGBHalf(image_rgba_data, j2 * 4, halfArray, j2 * 4);
            }
            data = halfArray;
            type = HalfFloatType;
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
            break;
        }
        return {
          width: w2,
          height: h2,
          data,
          header: rgbe_header_info.string,
          gamma: rgbe_header_info.gamma,
          exposure: rgbe_header_info.exposure,
          type
        };
      }
    }
    return null;
  }
  setDataType(value) {
    this.type = value;
    return this;
  }
  load(url, onLoad, onProgress, onError) {
    function onLoadCallback(texture, texData) {
      switch (texture.type) {
        case FloatType:
        case HalfFloatType:
          texture.colorSpace = LinearSRGBColorSpace;
          texture.minFilter = LinearFilter;
          texture.magFilter = LinearFilter;
          texture.generateMipmaps = false;
          texture.flipY = true;
          break;
      }
      if (onLoad)
        onLoad(texture, texData);
    }
    return super.load(url, onLoadCallback, onProgress, onError);
  }
}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EnvironmentScene extends Scene {
  constructor() {
    super();
    this.position.y = -3.5;
    const geometry = new BoxGeometry();
    geometry.deleteAttribute("uv");
    const roomMaterial = new MeshStandardMaterial({
      metalness: 0,
      side: BackSide
    });
    const boxMaterial = new MeshStandardMaterial({ metalness: 0 });
    const mainLight = new PointLight(16777215, 500, 28, 2);
    mainLight.position.set(0.418, 16.199, 0.3);
    this.add(mainLight);
    const room = new Mesh(geometry, roomMaterial);
    room.position.set(-0.757, 13.219, 0.717);
    room.scale.set(31.713, 28.305, 28.591);
    this.add(room);
    const box1 = new Mesh(geometry, boxMaterial);
    box1.position.set(-10.906, 2.009, 1.846);
    box1.rotation.set(0, -0.195, 0);
    box1.scale.set(2.328, 7.905, 4.651);
    this.add(box1);
    const box2 = new Mesh(geometry, boxMaterial);
    box2.position.set(-5.607, -0.754, -0.758);
    box2.rotation.set(0, 0.994, 0);
    box2.scale.set(1.97, 1.534, 3.955);
    this.add(box2);
    const box3 = new Mesh(geometry, boxMaterial);
    box3.position.set(6.167, 0.857, 7.803);
    box3.rotation.set(0, 0.561, 0);
    box3.scale.set(3.927, 6.285, 3.687);
    this.add(box3);
    const box4 = new Mesh(geometry, boxMaterial);
    box4.position.set(-2.017, 0.018, 6.124);
    box4.rotation.set(0, 0.333, 0);
    box4.scale.set(2.002, 4.566, 2.064);
    this.add(box4);
    const box5 = new Mesh(geometry, boxMaterial);
    box5.position.set(2.291, -0.756, -2.621);
    box5.rotation.set(0, -0.286, 0);
    box5.scale.set(1.546, 1.552, 1.496);
    this.add(box5);
    const box6 = new Mesh(geometry, boxMaterial);
    box6.position.set(-2.193, -0.369, -5.547);
    box6.rotation.set(0, 0.516, 0);
    box6.scale.set(3.875, 3.487, 2.986);
    this.add(box6);
    const light1 = new Mesh(geometry, this.createAreaLightMaterial(50));
    light1.position.set(-16.116, 14.37, 8.208);
    light1.scale.set(0.1, 2.428, 2.739);
    this.add(light1);
    const light2 = new Mesh(geometry, this.createAreaLightMaterial(50));
    light2.position.set(-16.109, 18.021, -8.207);
    light2.scale.set(0.1, 2.425, 2.751);
    this.add(light2);
    const light3 = new Mesh(geometry, this.createAreaLightMaterial(17));
    light3.position.set(14.904, 12.198, -1.832);
    light3.scale.set(0.15, 4.265, 6.331);
    this.add(light3);
    const light4 = new Mesh(geometry, this.createAreaLightMaterial(43));
    light4.position.set(-0.462, 8.89, 14.52);
    light4.scale.set(4.38, 5.441, 0.088);
    this.add(light4);
    const light5 = new Mesh(geometry, this.createAreaLightMaterial(20));
    light5.position.set(3.235, 11.486, -12.541);
    light5.scale.set(2.5, 2, 0.1);
    this.add(light5);
    const light6 = new Mesh(geometry, this.createAreaLightMaterial(100));
    light6.position.set(0, 20, 0);
    light6.scale.set(1, 0.1, 1);
    this.add(light6);
  }
  createAreaLightMaterial(intensity) {
    const material = new MeshBasicMaterial();
    material.color.setScalar(intensity);
    return material;
  }
}
/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EnvironmentSceneAlt extends Scene {
  constructor() {
    super();
    this.position.y = -3.5;
    const geometry = new BoxGeometry();
    geometry.deleteAttribute("uv");
    const roomMaterial = new MeshStandardMaterial({
      metalness: 0,
      side: BackSide
    });
    const boxMaterial = new MeshStandardMaterial({ metalness: 0 });
    const mainLight = new PointLight(16777215, 400, 28, 2);
    mainLight.position.set(0.5, 14, 0.5);
    this.add(mainLight);
    const room = new Mesh(geometry, roomMaterial);
    room.position.set(0, 13.2, 0);
    room.scale.set(31.5, 28.5, 31.5);
    this.add(room);
    const box1 = new Mesh(geometry, boxMaterial);
    box1.position.set(-10.906, -1, 1.846);
    box1.rotation.set(0, -0.195, 0);
    box1.scale.set(2.328, 7.905, 4.651);
    this.add(box1);
    const box2 = new Mesh(geometry, boxMaterial);
    box2.position.set(-5.607, -0.754, -0.758);
    box2.rotation.set(0, 0.994, 0);
    box2.scale.set(1.97, 1.534, 3.955);
    this.add(box2);
    const box3 = new Mesh(geometry, boxMaterial);
    box3.position.set(6.167, -0.16, 7.803);
    box3.rotation.set(0, 0.561, 0);
    box3.scale.set(3.927, 6.285, 3.687);
    this.add(box3);
    const box4 = new Mesh(geometry, boxMaterial);
    box4.position.set(-2.017, 0.018, 6.124);
    box4.rotation.set(0, 0.333, 0);
    box4.scale.set(2.002, 4.566, 2.064);
    this.add(box4);
    const box5 = new Mesh(geometry, boxMaterial);
    box5.position.set(2.291, -0.756, -2.621);
    box5.rotation.set(0, -0.286, 0);
    box5.scale.set(1.546, 1.552, 1.496);
    this.add(box5);
    const box6 = new Mesh(geometry, boxMaterial);
    box6.position.set(-2.193, -0.369, -5.547);
    box6.rotation.set(0, 0.516, 0);
    box6.scale.set(3.875, 3.487, 2.986);
    this.add(box6);
    const light1 = new Mesh(geometry, this.createAreaLightMaterial(80));
    light1.position.set(-14, 10, 8);
    light1.scale.set(0.1, 2.5, 2.5);
    this.add(light1);
    const light2 = new Mesh(geometry, this.createAreaLightMaterial(80));
    light2.position.set(-14, 14, -4);
    light2.scale.set(0.1, 2.5, 2.5);
    this.add(light2);
    const light3 = new Mesh(geometry, this.createAreaLightMaterial(23));
    light3.position.set(14, 12, 0);
    light3.scale.set(0.1, 5, 5);
    this.add(light3);
    const light4 = new Mesh(geometry, this.createAreaLightMaterial(16));
    light4.position.set(0, 9, 14);
    light4.scale.set(5, 5, 0.1);
    this.add(light4);
    const light5 = new Mesh(geometry, this.createAreaLightMaterial(80));
    light5.position.set(7, 8, -14);
    light5.scale.set(2.5, 2.5, 0.1);
    this.add(light5);
    const light6 = new Mesh(geometry, this.createAreaLightMaterial(80));
    light6.position.set(-7, 16, -14);
    light6.scale.set(2.5, 2.5, 0.1);
    this.add(light6);
    const light7 = new Mesh(geometry, this.createAreaLightMaterial(1));
    light7.position.set(0, 20, 0);
    light7.scale.set(0.1, 0.1, 0.1);
    this.add(light7);
  }
  createAreaLightMaterial(intensity) {
    const material = new MeshBasicMaterial();
    material.color.setScalar(intensity);
    return material;
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const GENERATED_SIGMA = 0.04;
const MAX_SAMPLES = 20;
const HDR_FILE_RE = /\.hdr(\.js)?$/;
class TextureUtils extends EventDispatcher {
  constructor(threeRenderer) {
    super();
    this.threeRenderer = threeRenderer;
    this.lottieLoaderUrl = "";
    this.withCredentials = false;
    this._ldrLoader = null;
    this._hdrLoader = null;
    this._lottieLoader = null;
    this.generatedEnvironmentMap = null;
    this.generatedEnvironmentMapAlt = null;
    this.skyboxCache = /* @__PURE__ */ new Map();
    this.blurMaterial = null;
    this.blurScene = null;
  }
  get ldrLoader() {
    if (this._ldrLoader == null) {
      this._ldrLoader = new TextureLoader();
    }
    this._ldrLoader.setWithCredentials(this.withCredentials);
    return this._ldrLoader;
  }
  get hdrLoader() {
    if (this._hdrLoader == null) {
      this._hdrLoader = new RGBELoader();
      this._hdrLoader.setDataType(HalfFloatType);
    }
    this._hdrLoader.setWithCredentials(this.withCredentials);
    return this._hdrLoader;
  }
  getLottieLoader() {
    return __async$2(this, null, function* () {
    });
  }
  loadImage(url) {
    return __async$2(this, null, function* () {
      const texture = yield new Promise(
        (resolve, reject) => this.ldrLoader.load(url, resolve, () => {
        }, reject)
      );
      texture.name = url;
      texture.flipY = false;
      return texture;
    });
  }
  loadLottie(url, quality) {
    return __async$2(this, null, function* () {
      const loader = yield this.getLottieLoader();
      loader.setQuality(quality);
      const texture = yield new Promise(
        (resolve, reject) => loader.load(url, resolve, () => {
        }, reject)
      );
      texture.name = url;
      return texture;
    });
  }
  loadEquirect(url, progressCallback = () => {
  }) {
    return __async$2(this, null, function* () {
      try {
        const isHDR = HDR_FILE_RE.test(url);
        const loader = isHDR ? this.hdrLoader : this.ldrLoader;
        const texture = yield new Promise(
          (resolve, reject) => loader.load(
            url,
            resolve,
            (event) => {
              progressCallback(event.loaded / event.total * 0.9);
            },
            reject
          )
        );
        progressCallback(1);
        texture.name = url;
        texture.mapping = EquirectangularReflectionMapping;
        if (!isHDR) {
          texture.encoding = sRGBEncoding;
        }
        return texture;
      } finally {
        if (progressCallback) {
          progressCallback(1);
        }
      }
    });
  }
  generateEnvironmentMapAndSkybox(skyboxUrl = null, environmentMapUrl = null, progressCallback = () => {
  }) {
    return __async$2(this, null, function* () {
      const useAltEnvironment = environmentMapUrl !== "legacy";
      if (environmentMapUrl === "legacy" || environmentMapUrl === "neutral") {
        environmentMapUrl = null;
      }
      environmentMapUrl = deserializeUrl(environmentMapUrl);
      let skyboxLoads = Promise.resolve(null);
      let environmentMapLoads;
      if (skyboxUrl) {
        skyboxLoads = this.loadEquirectFromUrl(skyboxUrl, progressCallback);
      }
      if (environmentMapUrl) {
        environmentMapLoads = this.loadEquirectFromUrl(
          environmentMapUrl,
          progressCallback
        );
      } else if (skyboxUrl) {
        environmentMapLoads = this.loadEquirectFromUrl(
          skyboxUrl,
          progressCallback
        );
      } else {
        environmentMapLoads = useAltEnvironment ? this.loadGeneratedEnvironmentMapAlt() : this.loadGeneratedEnvironmentMap();
      }
      const [environmentMap, skybox] = yield Promise.all([
        environmentMapLoads,
        skyboxLoads
      ]);
      if (environmentMap == null) {
        throw new Error("Failed to load environment map.");
      }
      return { environmentMap, skybox };
    });
  }
  loadEquirectFromUrl(url, progressCallback) {
    return __async$2(this, null, function* () {
      if (!this.skyboxCache.has(url)) {
        const skyboxMapLoads = this.loadEquirect(url, progressCallback);
        this.skyboxCache.set(url, skyboxMapLoads);
      }
      return this.skyboxCache.get(url);
    });
  }
  GenerateEnvironmentMap(scene, name) {
    return __async$2(this, null, function* () {
      yield timePasses();
      const renderer = this.threeRenderer;
      const cubeTarget = new WebGLCubeRenderTarget(256, {
        generateMipmaps: false,
        type: HalfFloatType,
        format: RGBAFormat,
        encoding: LinearSRGBColorSpace,
        depthBuffer: true
      });
      const cubeCamera = new CubeCamera(0.1, 100, cubeTarget);
      const generatedEnvironmentMap = cubeCamera.renderTarget.texture;
      generatedEnvironmentMap.name = name;
      const outputEncoding = renderer.outputEncoding;
      const toneMapping = renderer.toneMapping;
      renderer.toneMapping = NoToneMapping;
      renderer.outputEncoding = LinearSRGBColorSpace;
      cubeCamera.update(renderer, scene);
      this.blurCubemap(cubeTarget, GENERATED_SIGMA);
      renderer.toneMapping = toneMapping;
      renderer.outputEncoding = outputEncoding;
      return generatedEnvironmentMap;
    });
  }
  loadGeneratedEnvironmentMap() {
    return __async$2(this, null, function* () {
      if (this.generatedEnvironmentMap == null) {
        this.generatedEnvironmentMap = this.GenerateEnvironmentMap(
          new EnvironmentScene(),
          "legacy"
        );
      }
      return this.generatedEnvironmentMap;
    });
  }
  loadGeneratedEnvironmentMapAlt() {
    return __async$2(this, null, function* () {
      if (this.generatedEnvironmentMapAlt == null) {
        this.generatedEnvironmentMapAlt = this.GenerateEnvironmentMap(
          new EnvironmentSceneAlt(),
          "neutral"
        );
      }
      return this.generatedEnvironmentMapAlt;
    });
  }
  blurCubemap(cubeTarget, sigma) {
    if (this.blurMaterial == null) {
      this.blurMaterial = this.getBlurShader(MAX_SAMPLES);
      const box = new BoxGeometry();
      const blurMesh = new Mesh(box, this.blurMaterial);
      this.blurScene = new Scene();
      this.blurScene.add(blurMesh);
    }
    const tempTarget = cubeTarget.clone();
    this.halfblur(cubeTarget, tempTarget, sigma, "latitudinal");
    this.halfblur(tempTarget, cubeTarget, sigma, "longitudinal");
  }
  halfblur(targetIn, targetOut, sigmaRadians, direction) {
    const STANDARD_DEVIATIONS = 3;
    const pixels = targetIn.width;
    const radiansPerPixel = isFinite(sigmaRadians) ? Math.PI / (2 * pixels) : 2 * Math.PI / (2 * MAX_SAMPLES - 1);
    const sigmaPixels = sigmaRadians / radiansPerPixel;
    const samples = isFinite(sigmaRadians) ? 1 + Math.floor(STANDARD_DEVIATIONS * sigmaPixels) : MAX_SAMPLES;
    if (samples > MAX_SAMPLES) {
      console.warn(
        `sigmaRadians, ${sigmaRadians}, is too large and will clip, as it requested ${samples} samples when the maximum is set to ${MAX_SAMPLES}`
      );
    }
    const weights = [];
    let sum = 0;
    for (let i = 0; i < MAX_SAMPLES; ++i) {
      const x = i / sigmaPixels;
      const weight = Math.exp(-x * x / 2);
      weights.push(weight);
      if (i == 0) {
        sum += weight;
      } else if (i < samples) {
        sum += 2 * weight;
      }
    }
    for (let i = 0; i < weights.length; i++) {
      weights[i] = weights[i] / sum;
    }
    const blurUniforms = this.blurMaterial.uniforms;
    blurUniforms["envMap"].value = targetIn.texture;
    blurUniforms["samples"].value = samples;
    blurUniforms["weights"].value = weights;
    blurUniforms["latitudinal"].value = direction === "latitudinal";
    blurUniforms["dTheta"].value = radiansPerPixel;
    const cubeCamera = new CubeCamera(0.1, 100, targetOut);
    cubeCamera.update(this.threeRenderer, this.blurScene);
  }
  getBlurShader(maxSamples) {
    const weights = new Float32Array(maxSamples);
    const poleAxis = new Vector3(0, 1, 0);
    const shaderMaterial = new ShaderMaterial({
      name: "SphericalGaussianBlur",
      defines: { n: maxSamples },
      uniforms: {
        envMap: { value: null },
        samples: { value: 1 },
        weights: { value: weights },
        latitudinal: { value: false },
        dTheta: { value: 0 },
        poleAxis: { value: poleAxis }
      },
      vertexShader: `
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,
      fragmentShader: `
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
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
      `,
      blending: NoBlending,
      depthTest: false,
      depthWrite: false,
      side: BackSide
    });
    return shaderMaterial;
  }
  dispose() {
    return __async$2(this, null, function* () {
      for (const [, promise] of this.skyboxCache) {
        const skybox = yield promise;
        skybox.dispose();
      }
      if (this.generatedEnvironmentMap != null) {
        (yield this.generatedEnvironmentMap).dispose();
        this.generatedEnvironmentMap = null;
      }
      if (this.generatedEnvironmentMapAlt != null) {
        (yield this.generatedEnvironmentMapAlt).dispose();
        this.generatedEnvironmentMapAlt = null;
      }
      if (this.blurMaterial != null) {
        this.blurMaterial.dispose();
      }
    });
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DURATION_DECAY = 0.2;
const LOW_FRAME_DURATION_MS = 40;
const HIGH_FRAME_DURATION_MS = 60;
const MAX_AVG_CHANGE_MS = 5;
const SCALE_STEPS = [1, 0.79, 0.62, 0.5, 0.4, 0.31, 0.25];
const DEFAULT_LAST_STEP = 3;
const DEFAULT_POWER_PREFERENCE = "high-performance";
class Renderer extends EventDispatcher {
  constructor(options) {
    super();
    this.loader = new CachingGLTFLoader(ModelViewerGLTFInstance);
    this.width = 0;
    this.height = 0;
    this.dpr = 1;
    this.debugger = null;
    this.scenes = /* @__PURE__ */ new Set();
    this.multipleScenesVisible = false;
    this.lastTick = performance.now();
    this.renderedLastFrame = false;
    this.scaleStep = 0;
    this.lastStep = DEFAULT_LAST_STEP;
    this.avgFrameDuration = (HIGH_FRAME_DURATION_MS + LOW_FRAME_DURATION_MS) / 2;
    this.onWebGLContextLost = (event) => {
      this.dispatchEvent({ type: "contextlost", sourceEvent: event });
    };
    this.onWebGLContextRestored = () => {
      var _a2;
      (_a2 = this.textureUtils) === null || _a2 === void 0 ? void 0 : _a2.dispose();
      this.textureUtils = new TextureUtils(this.threeRenderer);
      for (const scene of this.scenes) {
        scene.element[$updateEnvironment]();
      }
    };
    this.dpr = resolveDpr();
    this.canvas3D = document.createElement("canvas");
    this.canvas3D.id = "webgl-canvas";
    this.canvas3D.classList.add("show");
    try {
      this.threeRenderer = new WebGLRenderer({
        canvas: this.canvas3D,
        alpha: true,
        antialias: true,
        powerPreference: options.powerPreference,
        preserveDrawingBuffer: true
      });
      this.threeRenderer.autoClear = true;
      this.threeRenderer.outputColorSpace = SRGBColorSpace;
      this.threeRenderer.useLegacyLights = false;
      this.threeRenderer.setPixelRatio(1);
      this.debugger = options.debug ? new Debugger(this) : null;
      this.threeRenderer.debug = { checkShaderErrors: !!this.debugger };
      this.threeRenderer.toneMapping = NoToneMapping;
    } catch (error) {
      console.warn(error);
    }
    this.arRenderer = new ARRenderer(this);
    this.textureUtils = this.canRender ? new TextureUtils(this.threeRenderer) : null;
    CachingGLTFLoader.initializeKTX2Loader(this.threeRenderer);
    this.canvas3D.addEventListener("webglcontextlost", this.onWebGLContextLost);
    this.canvas3D.addEventListener(
      "webglcontextrestored",
      this.onWebGLContextRestored
    );
    this.updateRendererSize();
  }
  static get singleton() {
    return this._singleton;
  }
  static resetSingleton() {
    const elements = this._singleton.dispose();
    for (const element of elements) {
      element.disconnectedCallback();
    }
    this._singleton = new Renderer({
      powerPreference: (self.ModelViewerElement || {}).powerPreference || DEFAULT_POWER_PREFERENCE,
      debug: isDebugMode()
    });
    for (const element of elements) {
      element.connectedCallback();
    }
  }
  get canRender() {
    return this.threeRenderer != null;
  }
  get scaleFactor() {
    return SCALE_STEPS[this.scaleStep];
  }
  set minScale(scale) {
    let i = 1;
    while (i < SCALE_STEPS.length) {
      if (SCALE_STEPS[i] < scale) {
        break;
      }
      ++i;
    }
    this.lastStep = i - 1;
  }
  registerScene(scene) {
    this.scenes.add(scene);
    scene.forceRescale();
    const size = new Vector2();
    this.threeRenderer.getSize(size);
    scene.canvas.width = size.x;
    scene.canvas.height = size.y;
    if (this.canRender && this.scenes.size > 0) {
      this.threeRenderer.setAnimationLoop(
        (time, frame) => this.render(time, frame)
      );
    }
    if (this.debugger != null) {
      this.debugger.addScene(scene);
    }
  }
  unregisterScene(scene) {
    this.scenes.delete(scene);
    if (this.canvas3D.parentElement === scene.canvas.parentElement) {
      scene.canvas.parentElement.removeChild(this.canvas3D);
    }
    if (this.canRender && this.scenes.size === 0) {
      this.threeRenderer.setAnimationLoop(null);
    }
    if (this.debugger != null) {
      this.debugger.removeScene(scene);
    }
  }
  displayCanvas(scene) {
    return this.multipleScenesVisible ? scene.element[$canvas] : this.canvas3D;
  }
  countVisibleScenes() {
    const { canvas3D } = this;
    let visibleScenes = 0;
    let canvas3DScene = null;
    for (const scene of this.scenes) {
      const { element } = scene;
      if (element.modelIsVisible && scene.externalRenderer == null) {
        ++visibleScenes;
      }
      if (canvas3D.parentElement === scene.canvas.parentElement) {
        canvas3DScene = scene;
      }
    }
    const multipleScenesVisible = visibleScenes > 1;
    if (canvas3DScene != null) {
      const newlyMultiple = multipleScenesVisible && !this.multipleScenesVisible;
      const disappearing = !canvas3DScene.element.modelIsVisible;
      if (newlyMultiple || disappearing) {
        const { width, height } = this.sceneSize(canvas3DScene);
        this.copyPixels(canvas3DScene, width, height);
        canvas3D.parentElement.removeChild(canvas3D);
      }
    }
    this.multipleScenesVisible = multipleScenesVisible;
  }
  updateRendererSize() {
    var _a2;
    const dpr = resolveDpr();
    if (dpr !== this.dpr) {
      for (const scene of this.scenes) {
        const { element } = scene;
        element[$updateSize](element.getBoundingClientRect());
      }
    }
    let width = 0;
    let height = 0;
    for (const scene of this.scenes) {
      width = Math.max(width, scene.width);
      height = Math.max(height, scene.height);
    }
    if (width === this.width && height === this.height && dpr === this.dpr) {
      return;
    }
    this.width = width;
    this.height = height;
    this.dpr = dpr;
    width = Math.ceil(width * dpr);
    height = Math.ceil(height * dpr);
    if (this.canRender) {
      this.threeRenderer.setSize(width, height, false);
    }
    for (const scene of this.scenes) {
      const { canvas } = scene;
      canvas.width = width;
      canvas.height = height;
      scene.forceRescale();
      (_a2 = scene.effectRenderer) === null || _a2 === void 0 ? void 0 : _a2.setSize(width, height);
    }
  }
  updateRendererScale(delta) {
    const scaleStep = this.scaleStep;
    this.avgFrameDuration += clamp(
      DURATION_DECAY * (delta - this.avgFrameDuration),
      -MAX_AVG_CHANGE_MS,
      MAX_AVG_CHANGE_MS
    );
    if (this.avgFrameDuration > HIGH_FRAME_DURATION_MS) {
      ++this.scaleStep;
    } else if (this.avgFrameDuration < LOW_FRAME_DURATION_MS && this.scaleStep > 0) {
      --this.scaleStep;
    }
    this.scaleStep = Math.min(this.scaleStep, this.lastStep);
    if (scaleStep !== this.scaleStep) {
      this.avgFrameDuration = (HIGH_FRAME_DURATION_MS + LOW_FRAME_DURATION_MS) / 2;
    }
  }
  shouldRender(scene) {
    if (!scene.shouldRender()) {
      if (scene.scaleStep != 0) {
        scene.scaleStep = 0;
        this.rescaleCanvas(scene);
      } else {
        return false;
      }
    } else if (scene.scaleStep != this.scaleStep) {
      scene.scaleStep = this.scaleStep;
      this.rescaleCanvas(scene);
    }
    return true;
  }
  rescaleCanvas(scene) {
    const scale = SCALE_STEPS[scene.scaleStep];
    const width = Math.ceil(this.width / scale);
    const height = Math.ceil(this.height / scale);
    const { style: style2 } = scene.canvas;
    style2.width = `${width}px`;
    style2.height = `${height}px`;
    this.canvas3D.style.width = `${width}px`;
    this.canvas3D.style.height = `${height}px`;
    const renderedDpr = this.dpr * scale;
    const reason = scale < 1 ? "GPU throttling" : this.dpr !== window.devicePixelRatio ? "No meta viewport tag" : "";
    scene.element.dispatchEvent(
      new CustomEvent("render-scale", {
        detail: {
          reportedDpr: window.devicePixelRatio,
          renderedDpr,
          minimumDpr: this.dpr * SCALE_STEPS[this.lastStep],
          pixelWidth: Math.ceil(scene.width * renderedDpr),
          pixelHeight: Math.ceil(scene.height * renderedDpr),
          reason
        }
      })
    );
  }
  sceneSize(scene) {
    const { dpr } = this;
    const scaleFactor = SCALE_STEPS[scene.scaleStep];
    const width = Math.min(
      Math.ceil(scene.width * scaleFactor * dpr),
      this.canvas3D.width
    );
    const height = Math.min(
      Math.ceil(scene.height * scaleFactor * dpr),
      this.canvas3D.height
    );
    return { width, height };
  }
  copyPixels(scene, width, height) {
    const context2D = scene.context;
    if (context2D == null) {
      console.log("could not acquire 2d context");
      return;
    }
    context2D.clearRect(0, 0, width, height);
    context2D.drawImage(
      this.canvas3D,
      0,
      0,
      width,
      height,
      0,
      0,
      width,
      height
    );
    scene.canvas.classList.add("show");
  }
  orderedScenes() {
    const scenes = [];
    for (const visible of [false, true]) {
      for (const scene of this.scenes) {
        if (scene.element.modelIsVisible === visible) {
          scenes.push(scene);
        }
      }
    }
    return scenes;
  }
  get isPresenting() {
    return this.arRenderer.isPresenting;
  }
  preRender(scene, t2, delta) {
    const { element, exposure } = scene;
    element[$tick](t2, delta);
    const exposureIsNumber = typeof exposure === "number" && !Number.isNaN(exposure);
    this.threeRenderer.toneMappingExposure = exposureIsNumber ? exposure : 1;
  }
  render(t2, frame) {
    if (frame != null) {
      this.arRenderer.onWebXRFrame(t2, frame);
      return;
    }
    const delta = t2 - this.lastTick;
    this.lastTick = t2;
    if (!this.canRender || this.isPresenting) {
      return;
    }
    this.countVisibleScenes();
    this.updateRendererSize();
    if (this.renderedLastFrame) {
      this.updateRendererScale(delta);
      this.renderedLastFrame = false;
    }
    const { canvas3D } = this;
    for (const scene of this.orderedScenes()) {
      const { element } = scene;
      if (!element.loaded || !element.modelIsVisible && scene.renderCount > 0) {
        continue;
      }
      this.preRender(scene, t2, delta);
      if (!this.shouldRender(scene)) {
        continue;
      }
      if (scene.externalRenderer != null) {
        const camera2 = scene.getCamera();
        camera2.updateMatrix();
        const { matrix, projectionMatrix } = camera2;
        const viewMatrix = matrix.elements.slice();
        const target2 = scene.getTarget();
        viewMatrix[12] += target2.x;
        viewMatrix[13] += target2.y;
        viewMatrix[14] += target2.z;
        scene.externalRenderer.render({
          viewMatrix,
          projectionMatrix: projectionMatrix.elements
        });
        continue;
      }
      if (!element.modelIsVisible && !this.multipleScenesVisible) {
        for (const visibleScene of this.scenes) {
          if (visibleScene.element.modelIsVisible) {
            visibleScene.queueRender();
          }
        }
      }
      const { width, height } = this.sceneSize(scene);
      scene.renderShadow(this.threeRenderer);
      this.threeRenderer.setRenderTarget(null);
      this.threeRenderer.setViewport(
        0,
        Math.ceil(this.height * this.dpr) - height,
        width,
        height
      );
      if (scene.effectRenderer != null) {
        scene.effectRenderer.render(delta);
      } else {
        this.threeRenderer.autoClear = true;
        this.threeRenderer.render(scene, scene.camera);
      }
      if (this.multipleScenesVisible || !scene.element.modelIsVisible && scene.renderCount === 0) {
        this.copyPixels(scene, width, height);
      } else if (canvas3D.parentElement !== scene.canvas.parentElement) {
        scene.canvas.parentElement.appendChild(canvas3D);
        scene.canvas.classList.remove("show");
      }
      scene.hasRendered();
      ++scene.renderCount;
      this.renderedLastFrame = true;
    }
  }
  dispose() {
    if (this.textureUtils != null) {
      this.textureUtils.dispose();
    }
    if (this.threeRenderer != null) {
      this.threeRenderer.dispose();
    }
    this.textureUtils = null;
    this.threeRenderer = null;
    const elements = [];
    for (const scene of this.scenes) {
      elements.push(scene.element);
    }
    this.canvas3D.removeEventListener(
      "webglcontextlost",
      this.onWebGLContextLost
    );
    this.canvas3D.removeEventListener(
      "webglcontextrestored",
      this.onWebGLContextRestored
    );
    return elements;
  }
}
Renderer._singleton = new Renderer({
  powerPreference: (self.ModelViewerElement || {}).powerPreference || DEFAULT_POWER_PREFERENCE,
  debug: isDebugMode()
});
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $correlatedObjects = Symbol("correlatedObjects");
const $sourceObject = Symbol("sourceObject");
const $onUpdate$1 = Symbol("onUpdate");
class ThreeDOMElement {
  constructor(onUpdate, element, correlatedObjects = null) {
    this[$onUpdate$1] = onUpdate;
    this[$sourceObject] = element;
    this[$correlatedObjects] = correlatedObjects;
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const quadMaterial = new MeshBasicMaterial();
const quad = new PlaneGeometry(2, 2);
let adhocNum = 0;
const $threeTexture$1 = Symbol("threeTexture");
class Image$1 extends ThreeDOMElement {
  get [$threeTexture$1]() {
    var _a2;
    console.assert(
      this[$correlatedObjects] != null && this[$correlatedObjects].size > 0,
      "Image correlated object is undefined"
    );
    return (_a2 = this[$correlatedObjects]) === null || _a2 === void 0 ? void 0 : _a2.values().next().value;
  }
  constructor(onUpdate, texture, gltfImage) {
    gltfImage = gltfImage !== null && gltfImage !== void 0 ? gltfImage : {
      name: texture && texture.image && texture.image.src ? texture.image.src.split("/").pop() : "adhoc_image",
      uri: texture && texture.image && texture.image.src ? texture.image.src : "adhoc_image" + adhocNum++
    };
    super(onUpdate, gltfImage, new Set(texture ? [texture] : []));
  }
  get name() {
    return this[$sourceObject].name || "";
  }
  get uri() {
    return this[$sourceObject].uri;
  }
  get bufferView() {
    return this[$sourceObject].bufferView;
  }
  get element() {
    const texture = this[$threeTexture$1];
    if (texture && (texture.isCanvasTexture || texture.isVideoTexture)) {
      return texture.image;
    }
    return;
  }
  get animation() {
    const texture = this[$threeTexture$1];
    if (texture && texture.isCanvasTexture && texture.animation) {
      return texture.animation;
    }
    return;
  }
  get type() {
    return this.uri != null ? "external" : "embedded";
  }
  set name(name) {
    this[$sourceObject].name = name;
  }
  update() {
    const texture = this[$threeTexture$1];
    if (texture && texture.isCanvasTexture && !texture.animation) {
      this[$threeTexture$1].needsUpdate = true;
      this[$onUpdate$1]();
    }
  }
  createThumbnail(width, height) {
    return __async$2(this, null, function* () {
      const scene = new Scene();
      quadMaterial.map = this[$threeTexture$1];
      const mesh = new Mesh(quad, quadMaterial);
      scene.add(mesh);
      const camera2 = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const { threeRenderer } = Renderer.singleton;
      const renderTarget = new WebGLRenderTarget(width, height);
      threeRenderer.setRenderTarget(renderTarget);
      threeRenderer.render(scene, camera2);
      threeRenderer.setRenderTarget(null);
      const buffer = new Uint8Array(width * height * 4);
      threeRenderer.readRenderTargetPixels(
        renderTarget,
        0,
        0,
        width,
        height,
        buffer
      );
      blobCanvas.width = width;
      blobCanvas.height = height;
      const blobContext = blobCanvas.getContext("2d");
      const imageData = blobContext.createImageData(width, height);
      imageData.data.set(buffer);
      blobContext.putImageData(imageData, 0, 0);
      return new Promise((resolve, reject) => __async$2(this, null, function* () {
        blobCanvas.toBlob((blob) => {
          if (!blob) {
            return reject("Failed to capture thumbnail.");
          }
          resolve(URL.createObjectURL(blob));
        }, "image/png");
      }));
    });
  }
}
var Filter;
(function(Filter2) {
  Filter2[Filter2["Nearest"] = 9728] = "Nearest";
  Filter2[Filter2["Linear"] = 9729] = "Linear";
  Filter2[Filter2["NearestMipmapNearest"] = 9984] = "NearestMipmapNearest";
  Filter2[Filter2["LinearMipmapNearest"] = 9985] = "LinearMipmapNearest";
  Filter2[Filter2["NearestMipmapLinear"] = 9986] = "NearestMipmapLinear";
  Filter2[Filter2["LinearMipmapLinear"] = 9987] = "LinearMipmapLinear";
})(Filter || (Filter = {}));
var Wrap;
(function(Wrap2) {
  Wrap2[Wrap2["ClampToEdge"] = 33071] = "ClampToEdge";
  Wrap2[Wrap2["MirroredRepeat"] = 33648] = "MirroredRepeat";
  Wrap2[Wrap2["Repeat"] = 10497] = "Repeat";
})(Wrap || (Wrap = {}));
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const isMinFilter = (() => {
  const minFilterValues = [
    Filter.Nearest,
    Filter.Linear,
    Filter.NearestMipmapNearest,
    Filter.LinearMipmapLinear,
    Filter.NearestMipmapLinear,
    Filter.LinearMipmapLinear
  ];
  return (value) => minFilterValues.indexOf(value) > -1;
})();
const isMagFilter = (() => {
  const magFilterValues = [Filter.Nearest, Filter.Linear];
  return (value) => magFilterValues.indexOf(value) > -1;
})();
const isWrapMode = (() => {
  const wrapModes = [Wrap.ClampToEdge, Wrap.MirroredRepeat, Wrap.Repeat];
  return (value) => wrapModes.indexOf(value) > -1;
})();
const isValidSamplerValue = (property, value) => {
  switch (property) {
    case "minFilter":
      return isMinFilter(value);
    case "magFilter":
      return isMagFilter(value);
    case "wrapS":
    case "wrapT":
      return isWrapMode(value);
    case "rotation":
    case "repeat":
    case "offset":
      return true;
    default:
      throw new Error(`Cannot configure property "${property}" on Sampler`);
  }
};
const $threeTexture = Symbol("threeTexture");
const $threeTextures = Symbol("threeTextures");
const $setProperty = Symbol("setProperty");
const $sourceSampler = Symbol("sourceSampler");
class Sampler extends ThreeDOMElement {
  get [$threeTexture]() {
    var _a2;
    console.assert(
      this[$correlatedObjects] != null && this[$correlatedObjects].size > 0,
      "Sampler correlated object is undefined"
    );
    return (_a2 = this[$correlatedObjects]) === null || _a2 === void 0 ? void 0 : _a2.values().next().value;
  }
  get [$threeTextures]() {
    console.assert(
      this[$correlatedObjects] != null && this[$correlatedObjects].size > 0,
      "Sampler correlated object is undefined"
    );
    return this[$correlatedObjects];
  }
  get [$sourceSampler]() {
    console.assert(this[$sourceObject] != null, "Sampler source is undefined");
    return this[$sourceObject];
  }
  constructor(onUpdate, texture, gltfSampler) {
    gltfSampler = gltfSampler !== null && gltfSampler !== void 0 ? gltfSampler : {};
    if (gltfSampler.minFilter == null) {
      gltfSampler.minFilter = texture ? texture.minFilter : Filter.LinearMipmapLinear;
    }
    if (gltfSampler.magFilter == null) {
      gltfSampler.magFilter = texture ? texture.magFilter : Filter.Linear;
    }
    if (gltfSampler.wrapS == null) {
      gltfSampler.wrapS = texture ? texture.wrapS : Wrap.Repeat;
    }
    if (gltfSampler.wrapT == null) {
      gltfSampler.wrapT = texture ? texture.wrapT : Wrap.Repeat;
    }
    super(onUpdate, gltfSampler, new Set(texture ? [texture] : []));
  }
  get name() {
    return this[$sourceObject].name || "";
  }
  get minFilter() {
    return this[$sourceSampler].minFilter;
  }
  get magFilter() {
    return this[$sourceSampler].magFilter;
  }
  get wrapS() {
    return this[$sourceSampler].wrapS;
  }
  get wrapT() {
    return this[$sourceSampler].wrapT;
  }
  get rotation() {
    return this[$threeTexture].rotation;
  }
  get scale() {
    return this[$threeTexture].repeat;
  }
  get offset() {
    return this[$threeTexture].offset;
  }
  setMinFilter(filter) {
    this[$setProperty]("minFilter", filter);
  }
  setMagFilter(filter) {
    this[$setProperty]("magFilter", filter);
  }
  setWrapS(mode) {
    this[$setProperty]("wrapS", mode);
  }
  setWrapT(mode) {
    this[$setProperty]("wrapT", mode);
  }
  setRotation(rotation) {
    if (rotation == null) {
      rotation = 0;
    }
    this[$setProperty]("rotation", rotation);
  }
  setScale(scale) {
    if (scale == null) {
      scale = new Vector2(1, 1);
    }
    this[$setProperty]("repeat", scale);
  }
  setOffset(offset) {
    if (offset == null) {
      offset = new Vector2(0, 0);
    }
    this[$setProperty]("offset", offset);
  }
  [$setProperty](property, value) {
    const sampler = this[$sourceSampler];
    if (sampler != null) {
      if (isValidSamplerValue(property, value)) {
        if (property !== "rotation" && property !== "repeat" && property !== "offset") {
          sampler[property] = value;
        }
        for (const texture of this[$threeTextures]) {
          texture[property] = value;
          texture.needsUpdate = true;
        }
      }
      this[$onUpdate$1]();
    }
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $image = Symbol("image");
const $sampler = Symbol("sampler");
class Texture extends ThreeDOMElement {
  constructor(onUpdate, threeTexture, gltfTexture = null, gltfSampler = null, gltfImage = null) {
    super(
      onUpdate,
      gltfTexture ? gltfTexture : {},
      new Set(threeTexture ? [threeTexture] : [])
    );
    this[$sampler] = new Sampler(onUpdate, threeTexture, gltfSampler);
    this[$image] = new Image$1(onUpdate, threeTexture, gltfImage);
  }
  get name() {
    return this[$sourceObject].name || "";
  }
  set name(name) {
    this[$sourceObject].name = name;
  }
  get sampler() {
    return this[$sampler];
  }
  get source() {
    return this[$image];
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$4, _b$3, _c$2;
const $texture = Symbol("texture");
const $transform = Symbol("transform");
const $materials$1 = Symbol("materials");
const $usage = Symbol("usage");
const $onUpdate = Symbol("onUpdate");
const $activeVideo = Symbol("activeVideo");
var TextureUsage;
(function(TextureUsage2) {
  TextureUsage2[TextureUsage2["Base"] = 0] = "Base";
  TextureUsage2[TextureUsage2["MetallicRoughness"] = 1] = "MetallicRoughness";
  TextureUsage2[TextureUsage2["Normal"] = 2] = "Normal";
  TextureUsage2[TextureUsage2["Occlusion"] = 3] = "Occlusion";
  TextureUsage2[TextureUsage2["Emissive"] = 4] = "Emissive";
})(TextureUsage || (TextureUsage = {}));
class TextureInfo {
  constructor(onUpdate, usage, threeTexture, material, gltf, gltfTextureInfo) {
    this[_a$4] = null;
    this[_b$3] = {
      rotation: 0,
      scale: new Vector2(1, 1),
      offset: new Vector2(0, 0)
    };
    this[_c$2] = false;
    if (gltfTextureInfo && threeTexture) {
      const gltfTexture = gltf.textures ? gltf.textures[gltfTextureInfo.index] : null;
      const sampler = gltfTexture ? gltf.samplers ? gltf.samplers[gltfTexture.sampler] : null : null;
      const image = gltfTexture ? gltf.images ? gltf.images[gltfTexture.source] : null : null;
      this[$transform].rotation = threeTexture.rotation;
      this[$transform].scale.copy(threeTexture.repeat);
      this[$transform].offset.copy(threeTexture.offset);
      this[$texture] = new Texture(
        onUpdate,
        threeTexture,
        gltfTexture,
        sampler,
        image
      );
    }
    this[$onUpdate] = onUpdate;
    this[$materials$1] = material;
    this[$usage] = usage;
  }
  get texture() {
    return this[$texture];
  }
  setTexture(texture) {
    var _d2, _e2;
    const threeTexture = texture != null ? texture.source[$threeTexture$1] : null;
    const oldTexture = (_d2 = this[$texture]) === null || _d2 === void 0 ? void 0 : _d2.source[$threeTexture$1];
    if (oldTexture != null && oldTexture.isVideoTexture) {
      this[$activeVideo] = false;
    } else if ((_e2 = this[$texture]) === null || _e2 === void 0 ? void 0 : _e2.source.animation) {
      this[$texture].source.animation.removeEventListener(
        "enterFrame",
        this[$onUpdate]
      );
    }
    this[$texture] = texture;
    if (threeTexture != null && threeTexture.isVideoTexture) {
      const element = threeTexture.image;
      this[$activeVideo] = true;
      if (element.requestVideoFrameCallback != null) {
        const update = () => {
          if (!this[$activeVideo]) {
            return;
          }
          this[$onUpdate]();
          element.requestVideoFrameCallback(update);
        };
        element.requestVideoFrameCallback(update);
      } else {
        const update = () => {
          if (!this[$activeVideo]) {
            return;
          }
          this[$onUpdate]();
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    } else if ((texture === null || texture === void 0 ? void 0 : texture.source.animation) != null) {
      texture.source.animation.addEventListener("enterFrame", this[$onUpdate]);
    }
    let encoding = sRGBEncoding;
    if (this[$materials$1]) {
      for (const material of this[$materials$1]) {
        switch (this[$usage]) {
          case TextureUsage.Base:
            material.map = threeTexture;
            break;
          case TextureUsage.MetallicRoughness:
            encoding = LinearEncoding;
            material.metalnessMap = threeTexture;
            material.roughnessMap = threeTexture;
            break;
          case TextureUsage.Normal:
            encoding = LinearEncoding;
            material.normalMap = threeTexture;
            break;
          case TextureUsage.Occlusion:
            encoding = LinearEncoding;
            material.aoMap = threeTexture;
            break;
          case TextureUsage.Emissive:
            material.emissiveMap = threeTexture;
            break;
        }
        material.needsUpdate = true;
      }
    }
    if (threeTexture) {
      threeTexture.encoding = encoding;
      threeTexture.rotation = this[$transform].rotation;
      threeTexture.repeat = this[$transform].scale;
      threeTexture.offset = this[$transform].offset;
    }
    this[$onUpdate]();
  }
}
_a$4 = $texture, _b$3 = $transform, _c$2 = $activeVideo;
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $threeMaterials = Symbol("threeMaterials");
const $baseColorTexture = Symbol("baseColorTexture");
const $metallicRoughnessTexture = Symbol("metallicRoughnessTexture");
class PBRMetallicRoughness extends ThreeDOMElement {
  constructor(onUpdate, gltf, pbrMetallicRoughness, correlatedMaterials) {
    super(onUpdate, pbrMetallicRoughness, correlatedMaterials);
    if (pbrMetallicRoughness.baseColorFactor == null) {
      pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1];
    }
    if (pbrMetallicRoughness.roughnessFactor == null) {
      pbrMetallicRoughness.roughnessFactor = 1;
    }
    if (pbrMetallicRoughness.metallicFactor == null) {
      pbrMetallicRoughness.metallicFactor = 1;
    }
    const {
      baseColorTexture: gltfBaseColorTexture,
      metallicRoughnessTexture: gltfMetallicRoughnessTexture
    } = pbrMetallicRoughness;
    const { map, metalnessMap } = correlatedMaterials.values().next().value;
    this[$baseColorTexture] = new TextureInfo(
      onUpdate,
      TextureUsage.Base,
      map,
      correlatedMaterials,
      gltf,
      gltfBaseColorTexture ? gltfBaseColorTexture : null
    );
    this[$metallicRoughnessTexture] = new TextureInfo(
      onUpdate,
      TextureUsage.MetallicRoughness,
      metalnessMap,
      correlatedMaterials,
      gltf,
      gltfMetallicRoughnessTexture ? gltfMetallicRoughnessTexture : null
    );
  }
  get [$threeMaterials]() {
    return this[$correlatedObjects];
  }
  get baseColorFactor() {
    return this[$sourceObject].baseColorFactor;
  }
  get metallicFactor() {
    return this[$sourceObject].metallicFactor;
  }
  get roughnessFactor() {
    return this[$sourceObject].roughnessFactor;
  }
  get baseColorTexture() {
    return this[$baseColorTexture];
  }
  get metallicRoughnessTexture() {
    return this[$metallicRoughnessTexture];
  }
  setBaseColorFactor(rgba) {
    const color = new Color();
    if (rgba instanceof Array) {
      color.fromArray(rgba);
    } else {
      color.set(rgba);
    }
    for (const material of this[$threeMaterials]) {
      material.color.set(color);
      if (rgba instanceof Array) {
        material.opacity = rgba[3];
      } else {
        rgba = [0, 0, 0, material.opacity];
        color.toArray(rgba);
      }
    }
    const pbrMetallicRoughness = this[$sourceObject];
    pbrMetallicRoughness.baseColorFactor = rgba;
    this[$onUpdate$1]();
  }
  setMetallicFactor(value) {
    for (const material of this[$threeMaterials]) {
      material.metalness = value;
    }
    const pbrMetallicRoughness = this[$sourceObject];
    pbrMetallicRoughness.metallicFactor = value;
    this[$onUpdate$1]();
  }
  setRoughnessFactor(value) {
    for (const material of this[$threeMaterials]) {
      material.roughness = value;
    }
    const pbrMetallicRoughness = this[$sourceObject];
    pbrMetallicRoughness.roughnessFactor = value;
    this[$onUpdate$1]();
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$3;
const $pbrMetallicRoughness = Symbol("pbrMetallicRoughness");
const $normalTexture = Symbol("normalTexture");
const $occlusionTexture = Symbol("occlusionTexture");
const $emissiveTexture = Symbol("emissiveTexture");
const $backingThreeMaterial = Symbol("backingThreeMaterial");
const $applyAlphaCutoff = Symbol("applyAlphaCutoff");
const $lazyLoadGLTFInfo = Symbol("lazyLoadGLTFInfo");
const $initialize = Symbol("initialize");
const $getLoadedMaterial = Symbol("getLoadedMaterial");
const $ensureMaterialIsLoaded = Symbol("ensureMaterialIsLoaded");
const $gltfIndex = Symbol("gltfIndex");
const $setActive = Symbol("setActive");
const $variantIndices = Symbol("variantIndices");
const $isActive = Symbol("isActive");
const $variantSet = Symbol("variantSet");
const $modelVariants = Symbol("modelVariants");
class Material extends ThreeDOMElement {
  constructor(onUpdate, gltf, gltfMaterial, gltfIndex, isActive, modelVariants, correlatedMaterials, lazyLoadInfo = void 0) {
    super(onUpdate, gltfMaterial, correlatedMaterials);
    this[_a$3] = /* @__PURE__ */ new Set();
    this[$gltfIndex] = gltfIndex;
    this[$isActive] = isActive;
    this[$modelVariants] = modelVariants;
    if (lazyLoadInfo == null) {
      this[$initialize](gltf);
    } else {
      this[$lazyLoadGLTFInfo] = lazyLoadInfo;
    }
  }
  get [(_a$3 = $variantSet, $backingThreeMaterial)]() {
    return this[$correlatedObjects].values().next().value;
  }
  [$initialize](gltf) {
    const onUpdate = this[$onUpdate$1];
    const gltfMaterial = this[$sourceObject];
    const correlatedMaterials = this[$correlatedObjects];
    if (gltfMaterial.extensions && gltfMaterial.extensions["KHR_materials_pbrSpecularGlossiness"]) {
      console.warn(`Material ${gltfMaterial.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          no longer supported; to convert to metal-rough, see 
          https://www.donmccurdy.com/2022/11/28/converting-gltf-pbr-materials-from-specgloss-to-metalrough/.`);
    }
    if (gltfMaterial.pbrMetallicRoughness == null) {
      gltfMaterial.pbrMetallicRoughness = {};
    }
    this[$pbrMetallicRoughness] = new PBRMetallicRoughness(
      onUpdate,
      gltf,
      gltfMaterial.pbrMetallicRoughness,
      correlatedMaterials
    );
    if (gltfMaterial.emissiveFactor == null) {
      gltfMaterial.emissiveFactor = [0, 0, 0];
    }
    if (gltfMaterial.doubleSided == null) {
      gltfMaterial.doubleSided = false;
    }
    if (gltfMaterial.alphaMode == null) {
      gltfMaterial.alphaMode = "OPAQUE";
    }
    if (gltfMaterial.alphaCutoff == null) {
      gltfMaterial.alphaCutoff = 0.5;
    }
    const {
      normalTexture: gltfNormalTexture,
      occlusionTexture: gltfOcclusionTexture,
      emissiveTexture: gltfEmissiveTexture
    } = gltfMaterial;
    const { normalMap, aoMap, emissiveMap } = correlatedMaterials.values().next().value;
    this[$normalTexture] = new TextureInfo(
      onUpdate,
      TextureUsage.Normal,
      normalMap,
      correlatedMaterials,
      gltf,
      gltfNormalTexture ? gltfNormalTexture : null
    );
    this[$occlusionTexture] = new TextureInfo(
      onUpdate,
      TextureUsage.Occlusion,
      aoMap,
      correlatedMaterials,
      gltf,
      gltfOcclusionTexture ? gltfOcclusionTexture : null
    );
    this[$emissiveTexture] = new TextureInfo(
      onUpdate,
      TextureUsage.Emissive,
      emissiveMap,
      correlatedMaterials,
      gltf,
      gltfEmissiveTexture ? gltfEmissiveTexture : null
    );
  }
  [$getLoadedMaterial]() {
    return __async$2(this, null, function* () {
      if (this[$lazyLoadGLTFInfo] != null) {
        const { set, material } = yield this[$lazyLoadGLTFInfo].doLazyLoad();
        this[$correlatedObjects] = set;
        this[$initialize](this[$lazyLoadGLTFInfo].gltf);
        this[$lazyLoadGLTFInfo] = void 0;
        this.ensureLoaded = () => __async$2(this, null, function* () {
        });
        return material;
      }
      return this[$correlatedObjects].values().next().value;
    });
  }
  [$ensureMaterialIsLoaded]() {
    if (this[$lazyLoadGLTFInfo] == null) {
      return;
    }
    throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`);
  }
  ensureLoaded() {
    return __async$2(this, null, function* () {
      yield this[$getLoadedMaterial]();
    });
  }
  get isLoaded() {
    return this[$lazyLoadGLTFInfo] == null;
  }
  get isActive() {
    return this[$isActive];
  }
  [$setActive](isActive) {
    this[$isActive] = isActive;
  }
  get name() {
    return this[$sourceObject].name;
  }
  set name(name) {
    const sourceMaterial = this[$sourceObject];
    if (sourceMaterial != null) {
      sourceMaterial.name = name;
    }
    if (this[$correlatedObjects] != null) {
      for (const threeMaterial of this[$correlatedObjects]) {
        threeMaterial.name = name;
      }
    }
  }
  get pbrMetallicRoughness() {
    this[$ensureMaterialIsLoaded]();
    return this[$pbrMetallicRoughness];
  }
  get normalTexture() {
    this[$ensureMaterialIsLoaded]();
    return this[$normalTexture];
  }
  get occlusionTexture() {
    this[$ensureMaterialIsLoaded]();
    return this[$occlusionTexture];
  }
  get emissiveTexture() {
    this[$ensureMaterialIsLoaded]();
    return this[$emissiveTexture];
  }
  get emissiveFactor() {
    this[$ensureMaterialIsLoaded]();
    return this[$sourceObject].emissiveFactor;
  }
  get index() {
    return this[$gltfIndex];
  }
  [$variantIndices]() {
    return this[$variantSet];
  }
  hasVariant(name) {
    const variantData = this[$modelVariants].get(name);
    return variantData != null && this[$variantSet].has(variantData.index);
  }
  setEmissiveFactor(rgb) {
    this[$ensureMaterialIsLoaded]();
    const color = new Color();
    if (rgb instanceof Array) {
      color.fromArray(rgb);
    } else {
      color.set(rgb);
    }
    for (const material of this[$correlatedObjects]) {
      material.emissive.set(color);
    }
    this[$sourceObject].emissiveFactor = color.toArray();
    this[$onUpdate$1]();
  }
  [$applyAlphaCutoff]() {
    this[$ensureMaterialIsLoaded]();
    const gltfMaterial = this[$sourceObject];
    for (const material of this[$correlatedObjects]) {
      if (this[$sourceObject].alphaMode === "MASK") {
        material.alphaTest = gltfMaterial.alphaCutoff;
      } else {
        material.alphaTest = void 0;
      }
      material.needsUpdate = true;
    }
  }
  setAlphaCutoff(cutoff) {
    this[$ensureMaterialIsLoaded]();
    this[$sourceObject].alphaCutoff = cutoff;
    this[$applyAlphaCutoff]();
    this[$onUpdate$1]();
  }
  getAlphaCutoff() {
    this[$ensureMaterialIsLoaded]();
    return this[$sourceObject].alphaCutoff;
  }
  setDoubleSided(doubleSided) {
    this[$ensureMaterialIsLoaded]();
    for (const material of this[$correlatedObjects]) {
      material.side = doubleSided ? DoubleSide : FrontSide;
      material.needsUpdate = true;
    }
    this[$sourceObject].doubleSided = doubleSided;
    this[$onUpdate$1]();
  }
  getDoubleSided() {
    this[$ensureMaterialIsLoaded]();
    return this[$sourceObject].doubleSided;
  }
  setAlphaMode(alphaMode) {
    this[$ensureMaterialIsLoaded]();
    const enableTransparency = (material, enabled) => {
      material.transparent = enabled;
      material.depthWrite = !enabled;
    };
    this[$sourceObject].alphaMode = alphaMode;
    for (const material of this[$correlatedObjects]) {
      enableTransparency(material, alphaMode === "BLEND");
      this[$applyAlphaCutoff]();
      material.needsUpdate = true;
    }
    this[$onUpdate$1]();
  }
  getAlphaMode() {
    this[$ensureMaterialIsLoaded]();
    return this[$sourceObject].alphaMode;
  }
}
class Node$1 {
  constructor(name) {
    this.name = "";
    this.children = [];
    this.name = name;
  }
}
class PrimitiveNode extends Node$1 {
  constructor(mesh, mvMaterials, modelVariants, correlatedSceneGraph) {
    super(mesh.name);
    this.materials = /* @__PURE__ */ new Map();
    this.variantToMaterialMap = /* @__PURE__ */ new Map();
    this.initialMaterialIdx = 0;
    this.activeMaterialIdx = 0;
    this.mesh = mesh;
    const { gltf, threeGLTF, threeObjectMap } = correlatedSceneGraph;
    this.modelVariants = modelVariants;
    this.mesh.userData.variantData = modelVariants;
    const materialMappings = threeObjectMap.get(mesh.material);
    if (materialMappings.materials != null) {
      this.initialMaterialIdx = this.activeMaterialIdx = materialMappings.materials;
    } else {
      console.error(
        `Primitive (${mesh.name}) missing initial material reference.`
      );
    }
    const associations = mesh.userData.associations || {};
    if (associations.meshes == null) {
      console.error("Mesh is missing primitive index association");
      return;
    }
    const meshElementArray = gltf["meshes"] || [];
    const gltfPrimitives = meshElementArray[associations.meshes].primitives || [];
    const gltfPrimitive = gltfPrimitives[associations.primitives];
    if (gltfPrimitive == null) {
      console.error("Mesh primitive definition is missing.");
      return;
    }
    if (gltfPrimitive.material != null) {
      this.materials.set(
        gltfPrimitive.material,
        mvMaterials[gltfPrimitive.material]
      );
    } else {
      const defaultIdx = mvMaterials.findIndex((mat2) => {
        return mat2.name === "Default";
      });
      if (defaultIdx >= 0) {
        this.materials.set(defaultIdx, mvMaterials[defaultIdx]);
      } else {
        console.warn("gltfPrimitive has no material!");
      }
    }
    if (gltfPrimitive.extensions && gltfPrimitive.extensions["KHR_materials_variants"]) {
      const variantsExtension = gltfPrimitive.extensions["KHR_materials_variants"];
      const extensions = threeGLTF.parser.json.extensions;
      const variantNames = extensions["KHR_materials_variants"].variants;
      for (const mapping of variantsExtension.mappings) {
        const mvMaterial = mvMaterials[mapping.material];
        this.materials.set(mapping.material, mvMaterial);
        for (const variant of mapping.variants) {
          const { name } = variantNames[variant];
          this.variantToMaterialMap.set(variant, mvMaterial);
          mvMaterial[$variantIndices]().add(variant);
          if (!modelVariants.has(name)) {
            modelVariants.set(name, { name, index: variant });
          }
        }
      }
    }
  }
  setActiveMaterial(material) {
    return __async$2(this, null, function* () {
      const mvMaterial = this.materials.get(material);
      if (mvMaterial != null) {
        this.mesh.material = yield mvMaterial[$getLoadedMaterial]();
        this.activeMaterialIdx = material;
      }
      return this.mesh.material;
    });
  }
  getActiveMaterial() {
    return this.materials.get(this.activeMaterialIdx);
  }
  getMaterial(index) {
    return this.materials.get(index);
  }
  enableVariant(name) {
    return __async$2(this, null, function* () {
      if (name == null) {
        return this.setActiveMaterial(this.initialMaterialIdx);
      }
      if (this.variantToMaterialMap != null && this.modelVariants.has(name)) {
        const modelVariants = this.modelVariants.get(name);
        return this.enableVariantHelper(modelVariants.index);
      }
      return null;
    });
  }
  enableVariantHelper(index) {
    return __async$2(this, null, function* () {
      if (this.variantToMaterialMap != null && index != null) {
        const material = this.variantToMaterialMap.get(index);
        if (material != null) {
          return this.setActiveMaterial(material.index);
        }
      }
      return null;
    });
  }
  instantiateVariants() {
    return __async$2(this, null, function* () {
      if (this.variantToMaterialMap == null) {
        return;
      }
      for (const index of this.variantToMaterialMap.keys()) {
        const variantMaterial = this.mesh.userData.variantMaterials.get(index);
        if (variantMaterial.material != null) {
          continue;
        }
        const threeMaterial = yield this.enableVariantHelper(index);
        if (threeMaterial != null) {
          variantMaterial.material = threeMaterial;
        }
      }
    });
  }
  get variantInfo() {
    return this.variantToMaterialMap;
  }
  addVariant(materialVariant, variantName) {
    if (!this.ensureVariantIsUnused(variantName)) {
      return false;
    }
    if (!this.modelVariants.has(variantName)) {
      this.modelVariants.set(variantName, {
        name: variantName,
        index: this.modelVariants.size
      });
    }
    const modelVariantData = this.modelVariants.get(variantName);
    const variantIndex = modelVariantData.index;
    materialVariant[$variantIndices]().add(variantIndex);
    this.variantToMaterialMap.set(variantIndex, materialVariant);
    this.materials.set(materialVariant.index, materialVariant);
    this.updateVariantUserData(variantIndex, materialVariant);
    return true;
  }
  deleteVariant(variantIndex) {
    if (this.variantInfo.has(variantIndex)) {
      this.variantInfo.delete(variantIndex);
      const userDataMap = this.mesh.userData.variantMaterials;
      if (userDataMap != null) {
        userDataMap.delete(variantIndex);
      }
    }
  }
  updateVariantUserData(variantIndex, materialVariant) {
    materialVariant[$variantIndices]().add(variantIndex);
    this.mesh.userData.variantData = this.modelVariants;
    this.mesh.userData.variantMaterials = this.mesh.userData.variantMaterials || /* @__PURE__ */ new Map();
    const map = this.mesh.userData.variantMaterials;
    map.set(variantIndex, {
      material: materialVariant[$correlatedObjects].values().next().value,
      gltfMaterialIndex: materialVariant.index
    });
  }
  ensureVariantIsUnused(variantName) {
    const modelVariants = this.modelVariants.get(variantName);
    if (modelVariants != null && this.variantInfo.has(modelVariants.index)) {
      console.warn(
        `Primitive cannot add variant '${variantName}' for this material, it already exists.`
      );
      return false;
    }
    return true;
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$2, _b$2, _c$1, _d$1, _e$1, _f$1;
const $materials = Symbol("materials");
const $hierarchy = Symbol("hierarchy");
const $roots = Symbol("roots");
const $primitivesList = Symbol("primitives");
const $correlatedSceneGraph = Symbol("correlatedSceneGraph");
const $prepareVariantsForExport = Symbol("prepareVariantsForExport");
const $switchVariant = Symbol("switchVariant");
const $materialFromPoint = Symbol("materialFromPoint");
const $nodeFromPoint = Symbol("nodeFromPoint");
const $nodeFromIndex = Symbol("nodeFromIndex");
const $variantData = Symbol("variantData");
const $availableVariants = Symbol("availableVariants");
const $modelOnUpdate = Symbol("modelOnUpdate");
const $cloneMaterial = Symbol("cloneMaterial");
class LazyLoader {
  constructor(gltf, gltfElementMap, mapKey, doLazyLoad) {
    this.gltf = gltf;
    this.gltfElementMap = gltfElementMap;
    this.mapKey = mapKey;
    this.doLazyLoad = doLazyLoad;
  }
}
class Model {
  constructor(correlatedSceneGraph, onUpdate = () => {
  }) {
    this[_a$2] = [];
    this[_b$2] = [];
    this[_c$1] = [];
    this[_d$1] = [];
    this[_e$1] = () => {
    };
    this[_f$1] = /* @__PURE__ */ new Map();
    this[$modelOnUpdate] = onUpdate;
    this[$correlatedSceneGraph] = correlatedSceneGraph;
    const { gltf, threeGLTF, gltfElementMap } = correlatedSceneGraph;
    for (const [i, material] of gltf.materials.entries()) {
      const correlatedMaterial = gltfElementMap.get(material);
      if (correlatedMaterial != null) {
        this[$materials].push(
          new Material(
            onUpdate,
            gltf,
            material,
            i,
            true,
            this[$variantData],
            correlatedMaterial
          )
        );
      } else {
        const elementArray = gltf["materials"] || [];
        const gltfMaterialDef = elementArray[i];
        const capturedMatIndex = i;
        const materialLoadCallback = () => __async$2(this, null, function* () {
          const threeMaterial = yield threeGLTF.parser.getDependency(
            "material",
            capturedMatIndex
          );
          const threeMaterialSet = /* @__PURE__ */ new Set();
          gltfElementMap.set(gltfMaterialDef, threeMaterialSet);
          threeMaterialSet.add(threeMaterial);
          return { set: threeMaterialSet, material: threeMaterial };
        });
        this[$materials].push(
          new Material(
            onUpdate,
            gltf,
            gltfMaterialDef,
            i,
            false,
            this[$variantData],
            correlatedMaterial,
            new LazyLoader(
              gltf,
              gltfElementMap,
              gltfMaterialDef,
              materialLoadCallback
            )
          )
        );
      }
    }
    const parentMap = /* @__PURE__ */ new Map();
    const nodeStack = [];
    for (const object of threeGLTF.scene.children) {
      nodeStack.push(object);
    }
    while (nodeStack.length > 0) {
      const object = nodeStack.pop();
      let node = null;
      if (object instanceof Mesh) {
        node = new PrimitiveNode(
          object,
          this.materials,
          this[$variantData],
          correlatedSceneGraph
        );
        this[$primitivesList].push(node);
      } else {
        node = new Node$1(object.name);
      }
      const parent = parentMap.get(object);
      if (parent != null) {
        parent.children.push(node);
      } else {
        this[$roots].push(node);
      }
      this[$hierarchy].push(node);
      for (const child of object.children) {
        nodeStack.push(child);
        parentMap.set(object, node);
      }
    }
  }
  get materials() {
    return this[$materials];
  }
  [(_a$2 = $materials, _b$2 = $hierarchy, _c$1 = $roots, _d$1 = $primitivesList, _e$1 = $modelOnUpdate, _f$1 = $variantData, $availableVariants)]() {
    const variants = Array.from(this[$variantData].values());
    variants.sort((a2, b2) => {
      return a2.index - b2.index;
    });
    return variants.map((data) => {
      return data.name;
    });
  }
  getMaterialByName(name) {
    const matches = this[$materials].filter((material) => {
      return material.name === name;
    });
    if (matches.length > 0) {
      return matches[0];
    }
    return null;
  }
  [$nodeFromIndex](mesh, primitive) {
    const found = this[$hierarchy].find((node) => {
      if (node instanceof PrimitiveNode) {
        const { meshes, primitives } = node.mesh.userData.associations;
        if (meshes == mesh && primitives == primitive) {
          return true;
        }
      }
      return false;
    });
    return found == null ? null : found;
  }
  [$nodeFromPoint](hit) {
    return this[$hierarchy].find((node) => {
      if (node instanceof PrimitiveNode) {
        const primitive = node;
        if (primitive.mesh === hit.object) {
          return true;
        }
      }
      return false;
    });
  }
  [$materialFromPoint](hit) {
    return this[$nodeFromPoint](hit).getActiveMaterial();
  }
  [$switchVariant](variantName) {
    return __async$2(this, null, function* () {
      for (const primitive of this[$primitivesList]) {
        yield primitive.enableVariant(variantName);
      }
      for (const material of this.materials) {
        material[$setActive](false);
      }
      for (const primitive of this[$primitivesList]) {
        this.materials[primitive.getActiveMaterial().index][$setActive](true);
      }
    });
  }
  [$prepareVariantsForExport]() {
    return __async$2(this, null, function* () {
      const promises = [];
      for (const primitive of this[$primitivesList]) {
        promises.push(primitive.instantiateVariants());
      }
      yield Promise.all(promises);
    });
  }
  [$cloneMaterial](index, newMaterialName) {
    const material = this.materials[index];
    if (!material.isLoaded) {
      console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);
    }
    const threeMaterialSet = material[$correlatedObjects];
    const gltfSourceMaterial = JSON.parse(
      JSON.stringify(material[$sourceObject])
    );
    gltfSourceMaterial.name = newMaterialName;
    const gltf = this[$correlatedSceneGraph].gltf;
    gltf.materials.push(gltfSourceMaterial);
    const clonedSet = /* @__PURE__ */ new Set();
    for (const [i, threeMaterial] of threeMaterialSet.entries()) {
      const clone2 = threeMaterial.clone();
      clone2.name = newMaterialName + (threeMaterialSet.size > 1 ? "_inst" + i : "");
      clonedSet.add(clone2);
    }
    const clonedMaterial = new Material(
      this[$modelOnUpdate],
      this[$correlatedSceneGraph].gltf,
      gltfSourceMaterial,
      this[$materials].length,
      false,
      this[$variantData],
      clonedSet
    );
    this[$materials].push(clonedMaterial);
    return clonedMaterial;
  }
  createMaterialInstanceForVariant(originalMaterialIndex, newMaterialName, variantName, activateVariant = true) {
    let variantMaterialInstance = null;
    for (const primitive of this[$primitivesList]) {
      const variantData = this[$variantData].get(variantName);
      if (variantData != null && primitive.variantInfo.has(variantData.index)) {
        continue;
      }
      if (primitive.getMaterial(originalMaterialIndex) == null) {
        continue;
      }
      if (!this.hasVariant(variantName)) {
        this.createVariant(variantName);
      }
      if (variantMaterialInstance == null) {
        variantMaterialInstance = this[$cloneMaterial](
          originalMaterialIndex,
          newMaterialName
        );
      }
      primitive.addVariant(variantMaterialInstance, variantName);
    }
    if (activateVariant && variantMaterialInstance != null) {
      variantMaterialInstance[$setActive](true);
      this.materials[originalMaterialIndex][$setActive](false);
      for (const primitive of this[$primitivesList]) {
        primitive.enableVariant(variantName);
      }
    }
    return variantMaterialInstance;
  }
  createVariant(variantName) {
    if (!this[$variantData].has(variantName)) {
      this[$variantData].set(variantName, {
        name: variantName,
        index: this[$variantData].size
      });
    } else {
      console.warn(`Variant '${variantName}'' already exists`);
    }
  }
  hasVariant(variantName) {
    return this[$variantData].has(variantName);
  }
  setMaterialToVariant(materialIndex, targetVariantName) {
    if (this[$availableVariants]().find((name) => name === targetVariantName) == null) {
      console.warn(
        `Can't add material to '${targetVariantName}', the variant does not exist.'`
      );
      return;
    }
    if (materialIndex < 0 || materialIndex >= this.materials.length) {
      console.error(`setMaterialToVariant(): materialIndex is out of bounds.`);
      return;
    }
    for (const primitive of this[$primitivesList]) {
      const material = primitive.getMaterial(materialIndex);
      if (material != null) {
        primitive.addVariant(material, targetVariantName);
      }
    }
  }
  updateVariantName(currentName, newName) {
    const variantData = this[$variantData].get(currentName);
    if (variantData == null) {
      return;
    }
    variantData.name = newName;
    this[$variantData].set(newName, variantData);
    this[$variantData].delete(currentName);
  }
  deleteVariant(variantName) {
    const variant = this[$variantData].get(variantName);
    if (variant == null) {
      return;
    }
    for (const material of this.materials) {
      if (material.hasVariant(variantName)) {
        material[$variantSet].delete(variant.index);
      }
    }
    for (const primitive of this[$primitivesList]) {
      primitive.deleteVariant(variant.index);
    }
    this[$variantData].delete(variantName);
  }
}
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$5 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
const $currentGLTF = Symbol("currentGLTF");
const $originalGltfJson = Symbol("originalGltfJson");
const $model = Symbol("model");
const $getOnUpdateMethod = Symbol("getOnUpdateMethod");
const $buildTexture = Symbol("buildTexture");
const SceneGraphMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2;
  class SceneGraphModelViewerElement extends ModelViewerElement2 {
    constructor() {
      super(...arguments);
      this[_a2] = void 0;
      this[_b2] = null;
      this[_c2] = null;
      this.variantName = null;
      this.orientation = "0 0 0";
      this.scale = "1 1 1";
    }
    get model() {
      return this[$model];
    }
    get availableVariants() {
      return this.model ? this.model[$availableVariants]() : [];
    }
    get originalGltfJson() {
      return this[$originalGltfJson];
    }
    [(_a2 = $model, _b2 = $currentGLTF, _c2 = $originalGltfJson, $getOnUpdateMethod)]() {
      return () => {
        this[$needsRender]();
      };
    }
    [$buildTexture](texture) {
      texture.encoding = sRGBEncoding;
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      return new Texture(this[$getOnUpdateMethod](), texture);
    }
    createTexture(uri, type = "image/png") {
      return __async$2(this, null, function* () {
        const { textureUtils } = this[$renderer];
        const texture = yield textureUtils.loadImage(uri);
        texture.userData.mimeType = type;
        return this[$buildTexture](texture);
      });
    }
    createLottieTexture(uri, quality = 1) {
      return __async$2(this, null, function* () {
        const { textureUtils } = this[$renderer];
        const texture = yield textureUtils.loadLottie(uri, quality);
        return this[$buildTexture](texture);
      });
    }
    createVideoTexture(uri) {
      const video = document.createElement("video");
      video.src = uri;
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.play();
      const texture = new VideoTexture(video);
      return this[$buildTexture](texture);
    }
    createCanvasTexture() {
      const canvas = document.createElement("canvas");
      const texture = new CanvasTexture(canvas);
      return this[$buildTexture](texture);
    }
    updated(changedProperties) {
      return __async$2(this, null, function* () {
        __superGet(SceneGraphModelViewerElement.prototype, this, "updated").call(this, changedProperties);
        if (changedProperties.has("variantName")) {
          const updateVariantProgress = this[$progressTracker].beginActivity();
          updateVariantProgress(0.1);
          const model = this[$model];
          const { variantName } = this;
          if (model != null) {
            yield model[$switchVariant](variantName);
            this[$needsRender]();
            this.dispatchEvent(new CustomEvent("variant-applied"));
          }
          updateVariantProgress(1);
        }
        if (changedProperties.has("orientation") || changedProperties.has("scale")) {
          if (!this.loaded) {
            return;
          }
          const scene = this[$scene];
          scene.applyTransform();
          scene.updateBoundingBox();
          scene.updateShadow();
          this[$renderer].arRenderer.onUpdateScene();
          this[$needsRender]();
        }
      });
    }
    [$onModelLoad]() {
      super[$onModelLoad]();
      const { currentGLTF } = this[$scene];
      if (currentGLTF != null) {
        const { correlatedSceneGraph } = currentGLTF;
        if (correlatedSceneGraph != null && currentGLTF !== this[$currentGLTF]) {
          this[$model] = new Model(
            correlatedSceneGraph,
            this[$getOnUpdateMethod]()
          );
          this[$originalGltfJson] = JSON.parse(
            JSON.stringify(correlatedSceneGraph.gltf)
          );
        }
        if ("variants" in currentGLTF.userData) {
          this.requestUpdate("variantName");
        }
      }
      this[$currentGLTF] = currentGLTF;
    }
    exportScene(options) {
      return __async$2(this, null, function* () {
        const scene = this[$scene];
        return new Promise((resolve, reject) => __async$2(this, null, function* () {
          const opts = {
            binary: true,
            onlyVisible: true,
            maxTextureSize: Infinity,
            includeCustomExtensions: false,
            forceIndices: false
          };
          Object.assign(opts, options);
          opts.animations = scene.animations;
          opts.truncateDrawRange = true;
          const shadow = scene.shadow;
          let visible = false;
          if (shadow != null) {
            visible = shadow.visible;
            shadow.visible = false;
          }
          yield this[$model][$prepareVariantsForExport]();
          const exporter = new GLTFExporter().register(
            (writer) => new GLTFExporterMaterialsVariantsExtension(writer)
          );
          exporter.parse(
            scene.model,
            (gltf) => {
              return resolve(
                new Blob([opts.binary ? gltf : JSON.stringify(gltf)], {
                  type: opts.binary ? "application/octet-stream" : "application/json"
                })
              );
            },
            () => {
              return reject("glTF export failed");
            },
            opts
          );
          if (shadow != null) {
            shadow.visible = visible;
          }
        }));
      });
    }
    materialFromPoint(pixelX, pixelY) {
      const model = this[$model];
      if (model == null) {
        return null;
      }
      const scene = this[$scene];
      const ndcCoords = scene.getNDC(pixelX, pixelY);
      const hit = scene.hitFromPoint(ndcCoords);
      if (hit == null || hit.face == null) {
        return null;
      }
      return model[$materialFromPoint](hit);
    }
  }
  __decorate$5(
    [e$3({ type: String, attribute: "variant-name" })],
    SceneGraphModelViewerElement.prototype,
    "variantName",
    void 0
  );
  __decorate$5(
    [e$3({ type: String, attribute: "orientation" })],
    SceneGraphModelViewerElement.prototype,
    "orientation",
    void 0
  );
  __decorate$5(
    [e$3({ type: String, attribute: "scale" })],
    SceneGraphModelViewerElement.prototype,
    "scale",
    void 0
  );
  return SceneGraphModelViewerElement;
};
/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a = new Vector3();
const b = new Vector3();
const c = new Vector3();
const mat = new Matrix3();
const triangle = new Triangle();
const quat = new Quaternion();
class Hotspot extends CSS2DObject {
  constructor(config) {
    super(document.createElement("div"));
    this.normal = new Vector3(0, 1, 0);
    this.initialized = false;
    this.referenceCount = 1;
    this.pivot = document.createElement("div");
    this.slot = document.createElement("slot");
    this.element.classList.add("annotation-wrapper");
    this.slot.name = config.name;
    this.element.appendChild(this.pivot);
    this.pivot.appendChild(this.slot);
    this.updatePosition(config.position);
    this.updateNormal(config.normal);
    this.surface = config.surface;
  }
  get facingCamera() {
    return !this.element.classList.contains("hide");
  }
  show() {
    if (!this.facingCamera || !this.initialized) {
      this.updateVisibility(true);
    }
  }
  hide() {
    if (this.facingCamera || !this.initialized) {
      this.updateVisibility(false);
    }
  }
  increment() {
    this.referenceCount++;
  }
  decrement() {
    if (this.referenceCount > 0) {
      --this.referenceCount;
    }
    return this.referenceCount === 0;
  }
  updatePosition(position) {
    if (position == null)
      return;
    const positionNodes = parseExpressions(position)[0].terms;
    for (let i = 0; i < 3; ++i) {
      this.position.setComponent(i, normalizeUnit(positionNodes[i]).number);
    }
    this.updateMatrixWorld();
  }
  updateNormal(normal) {
    if (normal == null)
      return;
    const normalNodes = parseExpressions(normal)[0].terms;
    for (let i = 0; i < 3; ++i) {
      this.normal.setComponent(i, normalNodes[i].number);
    }
  }
  updateSurface(forceUpdate) {
    if (!forceUpdate && this.initialized) {
      return;
    }
    const { mesh, tri, bary } = this;
    if (mesh == null || tri == null || bary == null) {
      return;
    }
    mesh.getVertexPosition(tri.x, a);
    mesh.getVertexPosition(tri.y, b);
    mesh.getVertexPosition(tri.z, c);
    a.toArray(mat.elements, 0);
    b.toArray(mat.elements, 3);
    c.toArray(mat.elements, 6);
    this.position.copy(bary).applyMatrix3(mat);
    const target2 = this.parent;
    target2.worldToLocal(mesh.localToWorld(this.position));
    triangle.set(a, b, c);
    triangle.getNormal(this.normal).transformDirection(mesh.matrixWorld);
    const scene = target2.parent;
    quat.setFromAxisAngle(a.set(0, 1, 0), -scene.yaw);
    this.normal.applyQuaternion(quat);
  }
  orient(radians) {
    this.pivot.style.transform = `rotate(${radians}rad)`;
  }
  updateVisibility(show) {
    if (show) {
      this.element.classList.remove("hide");
    } else {
      this.element.classList.add("hide");
    }
    this.slot.assignedNodes().forEach((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      const element = node;
      const visibilityAttribute = element.dataset.visibilityAttribute;
      if (visibilityAttribute != null) {
        const attributeName = `data-${visibilityAttribute}`;
        if (show) {
          element.setAttribute(attributeName, "");
        } else {
          element.removeAttribute(attributeName);
        }
      }
      element.dispatchEvent(
        new CustomEvent("hotspot-visibility", {
          detail: {
            visible: show
          }
        })
      );
    });
    this.initialized = true;
  }
}
const HorizontalBlurShader = {
  uniforms: {
    tDiffuse: { value: null },
    h: { value: 1 / 512 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`
};
const VerticalBlurShader = {
  uniforms: {
    tDiffuse: { value: null },
    v: { value: 1 / 512 }
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`
};
function lerp(x, y2, t2) {
  return (1 - t2) * x + t2 * y2;
}
/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const LOG_MAX_RESOLUTION = 9;
const LOG_MIN_RESOLUTION = 6;
const ANIMATION_SCALING = 2;
const DEFAULT_HARD_INTENSITY = 0.3;
class Shadow extends Object3D {
  constructor(scene, softness, side) {
    super();
    this.camera = new OrthographicCamera();
    this.renderTarget = null;
    this.renderTargetBlur = null;
    this.depthMaterial = new MeshDepthMaterial();
    this.horizontalBlurMaterial = new ShaderMaterial(HorizontalBlurShader);
    this.verticalBlurMaterial = new ShaderMaterial(VerticalBlurShader);
    this.intensity = 0;
    this.softness = 1;
    this.boundingBox = new Box3();
    this.size = new Vector3();
    this.maxDimension = 0;
    this.isAnimated = false;
    this.needsUpdate = false;
    const { camera: camera2 } = this;
    camera2.rotation.x = Math.PI / 2;
    camera2.left = -0.5;
    camera2.right = 0.5;
    camera2.bottom = -0.5;
    camera2.top = 0.5;
    this.add(camera2);
    const plane = new PlaneGeometry();
    const shadowMaterial = new MeshBasicMaterial({
      opacity: 1,
      transparent: true,
      side: BackSide
    });
    this.floor = new Mesh(plane, shadowMaterial);
    this.floor.userData.shadow = true;
    camera2.add(this.floor);
    this.blurPlane = new Mesh(plane);
    this.blurPlane.visible = false;
    camera2.add(this.blurPlane);
    scene.target.add(this);
    this.depthMaterial.onBeforeCompile = function(shader) {
      shader.fragmentShader = shader.fragmentShader.replace(
        "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
        "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );"
      );
    };
    this.horizontalBlurMaterial.depthTest = false;
    this.verticalBlurMaterial.depthTest = false;
    this.setScene(scene, softness, side);
  }
  setScene(scene, softness, side) {
    const { boundingBox, size, rotation, position } = this;
    this.isAnimated = scene.animationNames.length > 0;
    this.boundingBox.copy(scene.boundingBox);
    this.size.copy(scene.size);
    this.maxDimension = Math.max(size.x, size.y, size.z) * (this.isAnimated ? ANIMATION_SCALING : 1);
    this.boundingBox.getCenter(position);
    if (side === "back") {
      const { min, max } = boundingBox;
      [min.y, min.z] = [min.z, min.y];
      [max.y, max.z] = [max.z, max.y];
      [size.y, size.z] = [size.z, size.y];
      rotation.x = Math.PI / 2;
      rotation.y = Math.PI;
    } else {
      rotation.x = 0;
      rotation.y = 0;
    }
    if (this.isAnimated) {
      const minY = boundingBox.min.y;
      const maxY = boundingBox.max.y;
      size.y = this.maxDimension;
      boundingBox.expandByVector(
        size.subScalar(this.maxDimension).multiplyScalar(-0.5)
      );
      boundingBox.min.y = minY;
      boundingBox.max.y = maxY;
      size.set(this.maxDimension, maxY - minY, this.maxDimension);
    }
    if (side === "bottom") {
      position.y = boundingBox.min.y;
    } else {
      position.z = boundingBox.min.y;
    }
    this.setSoftness(softness);
  }
  setSoftness(softness) {
    this.softness = softness;
    const { size, camera: camera2 } = this;
    const scaleY = this.isAnimated ? ANIMATION_SCALING : 1;
    const resolution = scaleY * Math.pow(
      2,
      LOG_MAX_RESOLUTION - softness * (LOG_MAX_RESOLUTION - LOG_MIN_RESOLUTION)
    );
    this.setMapSize(resolution);
    const softFar = size.y / 2;
    const hardFar = size.y * scaleY;
    camera2.near = 0;
    camera2.far = lerp(hardFar, softFar, softness);
    this.depthMaterial.opacity = 1 / softness;
    camera2.updateProjectionMatrix();
    this.setIntensity(this.intensity);
    this.setOffset(0);
  }
  setMapSize(maxMapSize) {
    const { size } = this;
    if (this.isAnimated) {
      maxMapSize *= ANIMATION_SCALING;
    }
    const baseWidth = Math.floor(
      size.x > size.z ? maxMapSize : maxMapSize * size.x / size.z
    );
    const baseHeight = Math.floor(
      size.x > size.z ? maxMapSize * size.z / size.x : maxMapSize
    );
    const TAP_WIDTH = 10;
    const width = TAP_WIDTH + baseWidth;
    const height = TAP_WIDTH + baseHeight;
    if (this.renderTarget != null && (this.renderTarget.width !== width || this.renderTarget.height !== height)) {
      this.renderTarget.dispose();
      this.renderTarget = null;
      this.renderTargetBlur.dispose();
      this.renderTargetBlur = null;
    }
    if (this.renderTarget == null) {
      const params = { format: RGBAFormat };
      this.renderTarget = new WebGLRenderTarget(width, height, params);
      this.renderTargetBlur = new WebGLRenderTarget(width, height, params);
      this.floor.material.map = this.renderTarget.texture;
    }
    this.camera.scale.set(
      size.x * (1 + TAP_WIDTH / baseWidth),
      size.z * (1 + TAP_WIDTH / baseHeight),
      1
    );
    this.needsUpdate = true;
  }
  setIntensity(intensity) {
    this.intensity = intensity;
    if (intensity > 0) {
      this.visible = true;
      this.floor.visible = true;
      this.floor.material.opacity = intensity * lerp(DEFAULT_HARD_INTENSITY, 1, this.softness * this.softness);
    } else {
      this.visible = false;
      this.floor.visible = false;
    }
  }
  getIntensity() {
    return this.intensity;
  }
  setOffset(offset) {
    this.floor.position.z = -offset + 1e-3 * this.maxDimension;
  }
  render(renderer, scene) {
    scene.overrideMaterial = this.depthMaterial;
    const initialClearAlpha = renderer.getClearAlpha();
    renderer.setClearAlpha(0);
    this.floor.visible = false;
    const xrEnabled = renderer.xr.enabled;
    renderer.xr.enabled = false;
    const oldRenderTarget = renderer.getRenderTarget();
    renderer.setRenderTarget(this.renderTarget);
    renderer.render(scene, this.camera);
    scene.overrideMaterial = null;
    this.floor.visible = true;
    this.blurShadow(renderer);
    renderer.xr.enabled = xrEnabled;
    renderer.setRenderTarget(oldRenderTarget);
    renderer.setClearAlpha(initialClearAlpha);
  }
  blurShadow(renderer) {
    const {
      camera: camera2,
      horizontalBlurMaterial,
      verticalBlurMaterial,
      renderTarget,
      renderTargetBlur,
      blurPlane
    } = this;
    blurPlane.visible = true;
    blurPlane.material = horizontalBlurMaterial;
    horizontalBlurMaterial.uniforms.h.value = 1 / this.renderTarget.width;
    horizontalBlurMaterial.uniforms.tDiffuse.value = this.renderTarget.texture;
    renderer.setRenderTarget(renderTargetBlur);
    renderer.render(blurPlane, camera2);
    blurPlane.material = verticalBlurMaterial;
    verticalBlurMaterial.uniforms.v.value = 1 / this.renderTarget.height;
    verticalBlurMaterial.uniforms.tDiffuse.value = this.renderTargetBlur.texture;
    renderer.setRenderTarget(renderTarget);
    renderer.render(blurPlane, camera2);
    blurPlane.visible = false;
  }
  dispose() {
    if (this.renderTarget != null) {
      this.renderTarget.dispose();
    }
    if (this.renderTargetBlur != null) {
      this.renderTargetBlur.dispose();
    }
    this.depthMaterial.dispose();
    this.horizontalBlurMaterial.dispose();
    this.verticalBlurMaterial.dispose();
    this.floor.material.dispose();
    this.floor.geometry.dispose();
    this.blurPlane.geometry.dispose();
    this.removeFromParent();
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MIN_SHADOW_RATIO = 100;
const view = new Vector3();
const target = new Vector3();
const normalWorld = new Vector3();
const raycaster = new Raycaster();
const vector3 = new Vector3();
const ndc = new Vector2();
class ModelScene extends Scene {
  constructor({ canvas, element, width, height }) {
    super();
    this.annotationRenderer = new CSS2DRenderer();
    this.effectRenderer = null;
    this.schemaElement = document.createElement("script");
    this.width = 1;
    this.height = 1;
    this.aspect = 1;
    this.scaleStep = 0;
    this.renderCount = 0;
    this.externalRenderer = null;
    this.camera = new PerspectiveCamera(45, 1, 0.1, 100);
    this.xrCamera = null;
    this.url = null;
    this.target = new Object3D();
    this.animationNames = [];
    this.boundingBox = new Box3();
    this.boundingSphere = new Sphere();
    this.size = new Vector3();
    this.idealAspect = 0;
    this.framedFoVDeg = 0;
    this.shadow = null;
    this.shadowIntensity = 0;
    this.shadowSoftness = 1;
    this.bakedShadows = /* @__PURE__ */ new Set();
    this.exposure = 1;
    this.canScale = true;
    this.isDirty = false;
    this.goalTarget = new Vector3();
    this.targetDamperX = new Damper();
    this.targetDamperY = new Damper();
    this.targetDamperZ = new Damper();
    this._currentGLTF = null;
    this._model = null;
    this.cancelPendingSourceChange = null;
    this.animationsByName = /* @__PURE__ */ new Map();
    this.currentAnimationAction = null;
    this.name = "ModelScene";
    this.element = element;
    this.canvas = canvas;
    this.camera = new PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.name = "MainCamera";
    this.add(this.target);
    this.setSize(width, height);
    this.target.name = "Target";
    this.mixer = new AnimationMixer(this.target);
    const { domElement } = this.annotationRenderer;
    const { style: style2 } = domElement;
    style2.display = "none";
    style2.pointerEvents = "none";
    style2.position = "absolute";
    style2.top = "0";
    this.element.shadowRoot.querySelector(".default").appendChild(domElement);
    this.schemaElement.setAttribute("type", "application/ld+json");
  }
  get context() {
    return this.canvas.getContext("2d");
  }
  getCamera() {
    return this.xrCamera != null ? this.xrCamera : this.camera;
  }
  queueRender() {
    this.isDirty = true;
  }
  shouldRender() {
    return this.isDirty;
  }
  hasRendered() {
    this.isDirty = false;
  }
  forceRescale() {
    this.scaleStep = -1;
    this.queueRender();
  }
  setObject(model) {
    return __async$2(this, null, function* () {
      this.reset();
      this._model = model;
      this.target.add(model);
      yield this.setupScene();
    });
  }
  setSource(url, progressCallback = () => {
  }) {
    return __async$2(this, null, function* () {
      if (!url || url === this.url) {
        progressCallback(1);
        return;
      }
      this.reset();
      this.url = url;
      if (this.externalRenderer != null) {
        const framingInfo = yield this.externalRenderer.load(progressCallback);
        this.boundingSphere.radius = framingInfo.framedRadius;
        this.idealAspect = framingInfo.fieldOfViewAspect;
        return;
      }
      if (this.cancelPendingSourceChange != null) {
        this.cancelPendingSourceChange();
        this.cancelPendingSourceChange = null;
      }
      let gltf;
      try {
        gltf = yield new Promise((resolve, reject) => __async$2(this, null, function* () {
          this.cancelPendingSourceChange = () => reject();
          try {
            const result = yield this.element[$renderer].loader.load(
              url,
              this.element,
              progressCallback
            );
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }));
      } catch (error) {
        if (error == null) {
          return;
        }
        throw error;
      }
      this.cancelPendingSourceChange = null;
      this.reset();
      this.url = url;
      this._currentGLTF = gltf;
      if (gltf != null) {
        this._model = gltf.scene;
        this.target.add(gltf.scene);
      }
      const { animations } = gltf;
      const animationsByName = /* @__PURE__ */ new Map();
      const animationNames = [];
      for (const animation of animations) {
        animationsByName.set(animation.name, animation);
        animationNames.push(animation.name);
      }
      this.animations = animations;
      this.animationsByName = animationsByName;
      this.animationNames = animationNames;
      yield this.setupScene();
    });
  }
  setupScene() {
    return __async$2(this, null, function* () {
      this.applyTransform();
      this.updateBoundingBox();
      yield this.updateFraming();
      this.updateShadow();
      this.setShadowIntensity(this.shadowIntensity);
    });
  }
  reset() {
    this.url = null;
    this.renderCount = 0;
    this.queueRender();
    if (this.shadow != null) {
      this.shadow.setIntensity(0);
    }
    this.bakedShadows.clear();
    const { _model } = this;
    if (_model != null) {
      _model.removeFromParent();
      this._model = null;
    }
    const gltf = this._currentGLTF;
    if (gltf != null) {
      gltf.dispose();
      this._currentGLTF = null;
    }
    if (this.currentAnimationAction != null) {
      this.currentAnimationAction.stop();
      this.currentAnimationAction = null;
    }
    this.mixer.stopAllAction();
    this.mixer.uncacheRoot(this);
  }
  dispose() {
    this.reset();
    if (this.shadow != null) {
      this.shadow.dispose();
      this.shadow = null;
    }
    this.element[$currentGLTF] = null;
    this.element[$originalGltfJson] = null;
    this.element[$model] = null;
  }
  get currentGLTF() {
    return this._currentGLTF;
  }
  setSize(width, height) {
    if (this.width === width && this.height === height) {
      return;
    }
    this.width = Math.max(width, 1);
    this.height = Math.max(height, 1);
    this.annotationRenderer.setSize(width, height);
    this.aspect = this.width / this.height;
    if (this.externalRenderer != null) {
      const dpr = resolveDpr();
      this.externalRenderer.resize(width * dpr, height * dpr);
    }
    this.queueRender();
  }
  markBakedShadow(mesh) {
    mesh.userData.shadow = true;
    this.bakedShadows.add(mesh);
  }
  unmarkBakedShadow(mesh) {
    mesh.userData.shadow = false;
    mesh.visible = true;
    this.bakedShadows.delete(mesh);
    this.boundingBox.expandByObject(mesh);
  }
  findBakedShadows(group) {
    const boundingBox = new Box3();
    group.traverse((object) => {
      const mesh = object;
      if (!mesh.material) {
        return;
      }
      const material = mesh.material;
      if (!material.transparent) {
        return;
      }
      boundingBox.setFromObject(mesh);
      const size = boundingBox.getSize(vector3);
      const minDim = Math.min(size.x, size.y, size.z);
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim < MIN_SHADOW_RATIO * minDim) {
        return;
      }
      this.markBakedShadow(mesh);
    });
  }
  checkBakedShadows() {
    const { min, max } = this.boundingBox;
    const shadowBox = new Box3();
    this.boundingBox.getSize(this.size);
    for (const mesh of this.bakedShadows) {
      shadowBox.setFromObject(mesh);
      if (shadowBox.min.y < min.y + this.size.y / MIN_SHADOW_RATIO && shadowBox.min.x <= min.x && shadowBox.max.x >= max.x && shadowBox.min.z <= min.z && shadowBox.max.z >= max.z) {
        continue;
      }
      if (shadowBox.min.z < min.z + this.size.z / MIN_SHADOW_RATIO && shadowBox.min.x <= min.x && shadowBox.max.x >= max.x && shadowBox.min.y <= min.y && shadowBox.max.y >= max.y) {
        continue;
      }
      this.unmarkBakedShadow(mesh);
    }
  }
  applyTransform() {
    const { model } = this;
    if (model == null) {
      return;
    }
    const orientation = parseExpressions(this.element.orientation)[0].terms;
    const roll = normalizeUnit(orientation[0]).number;
    const pitch = normalizeUnit(orientation[1]).number;
    const yaw = normalizeUnit(orientation[2]).number;
    model.quaternion.setFromEuler(new Euler(pitch, yaw, roll, "YXZ"));
    const scale = parseExpressions(this.element.scale)[0].terms;
    model.scale.set(scale[0].number, scale[1].number, scale[2].number);
  }
  updateBoundingBox() {
    const { model } = this;
    if (model == null) {
      return;
    }
    this.target.remove(model);
    this.findBakedShadows(model);
    const bound = (box, vertex) => {
      return box.expandByPoint(vertex);
    };
    this.setBakedShadowVisibility(false);
    this.boundingBox = reduceVertices(model, bound, new Box3());
    if (this.boundingBox.isEmpty()) {
      this.setBakedShadowVisibility(true);
      this.bakedShadows.forEach((mesh) => this.unmarkBakedShadow(mesh));
      this.boundingBox = reduceVertices(model, bound, new Box3());
    }
    this.checkBakedShadows();
    this.setBakedShadowVisibility();
    this.boundingBox.getSize(this.size);
    this.target.add(model);
  }
  updateFraming() {
    return __async$2(this, null, function* () {
      const { model } = this;
      if (model == null) {
        return;
      }
      this.target.remove(model);
      this.setBakedShadowVisibility(false);
      const { center } = this.boundingSphere;
      this.element.requestUpdate("cameraTarget");
      yield this.element.updateComplete;
      center.copy(this.getTarget());
      const radiusSquared = (value, vertex) => {
        return Math.max(value, center.distanceToSquared(vertex));
      };
      this.boundingSphere.radius = Math.sqrt(
        reduceVertices(model, radiusSquared, 0)
      );
      const horizontalTanFov = (value, vertex) => {
        vertex.sub(center);
        const radiusXZ = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z);
        return Math.max(
          value,
          radiusXZ / (this.idealCameraDistance() - Math.abs(vertex.y))
        );
      };
      this.idealAspect = reduceVertices(model, horizontalTanFov, 0) / Math.tan(this.framedFoVDeg / 2 * Math.PI / 180);
      this.setBakedShadowVisibility();
      this.target.add(model);
    });
  }
  setBakedShadowVisibility(visible = this.shadowIntensity <= 0) {
    for (const shadow of this.bakedShadows) {
      shadow.visible = visible;
    }
  }
  idealCameraDistance() {
    const halfFovRad = this.framedFoVDeg / 2 * Math.PI / 180;
    return this.boundingSphere.radius / Math.sin(halfFovRad);
  }
  adjustedFoV(fovDeg) {
    const vertical = Math.tan(fovDeg / 2 * Math.PI / 180) * Math.max(1, this.idealAspect / this.aspect);
    return 2 * Math.atan(vertical) * 180 / Math.PI;
  }
  getNDC(clientX, clientY) {
    if (this.xrCamera != null) {
      ndc.set(clientX / window.screen.width, clientY / window.screen.height);
    } else {
      const rect = this.element.getBoundingClientRect();
      ndc.set(
        (clientX - rect.x) / this.width,
        (clientY - rect.y) / this.height
      );
    }
    ndc.multiplyScalar(2).subScalar(1);
    ndc.y *= -1;
    return ndc;
  }
  getSize() {
    return { width: this.width, height: this.height };
  }
  setEnvironmentAndSkybox(environment, skybox) {
    if (this.element[$renderer].arRenderer.presentedScene === this) {
      return;
    }
    this.environment = environment;
    this.background = skybox;
    this.queueRender();
  }
  setTarget(modelX, modelY, modelZ) {
    this.goalTarget.set(-modelX, -modelY, -modelZ);
  }
  setTargetDamperDecayTime(decayMilliseconds) {
    this.targetDamperX.setDecayTime(decayMilliseconds);
    this.targetDamperY.setDecayTime(decayMilliseconds);
    this.targetDamperZ.setDecayTime(decayMilliseconds);
  }
  getTarget() {
    return this.goalTarget.clone().multiplyScalar(-1);
  }
  jumpToGoal() {
    this.updateTarget(SETTLING_TIME);
  }
  updateTarget(delta) {
    const goal = this.goalTarget;
    const target2 = this.target.position;
    if (!goal.equals(target2)) {
      const normalization = this.boundingSphere.radius / 10;
      let { x, y: y2, z: z2 } = target2;
      x = this.targetDamperX.update(x, goal.x, delta, normalization);
      y2 = this.targetDamperY.update(y2, goal.y, delta, normalization);
      z2 = this.targetDamperZ.update(z2, goal.z, delta, normalization);
      this.target.position.set(x, y2, z2);
      this.target.updateMatrixWorld();
      this.queueRender();
      return true;
    } else {
      return false;
    }
  }
  pointTowards(worldX, worldZ) {
    const { x, z: z2 } = this.position;
    this.yaw = Math.atan2(worldX - x, worldZ - z2);
  }
  get model() {
    return this._model;
  }
  set yaw(radiansY) {
    this.rotation.y = radiansY;
    this.queueRender();
  }
  get yaw() {
    return this.rotation.y;
  }
  set animationTime(value) {
    this.mixer.setTime(value);
    this.queueShadowRender();
  }
  get animationTime() {
    if (this.currentAnimationAction != null) {
      const loopCount = Math.max(this.currentAnimationAction._loopCount, 0);
      if (this.currentAnimationAction.loop === LoopPingPong && (loopCount & 1) === 1) {
        return this.duration - this.currentAnimationAction.time;
      } else {
        return this.currentAnimationAction.time;
      }
    }
    return 0;
  }
  set animationTimeScale(value) {
    this.mixer.timeScale = value;
  }
  get animationTimeScale() {
    return this.mixer.timeScale;
  }
  get duration() {
    if (this.currentAnimationAction != null && this.currentAnimationAction.getClip()) {
      return this.currentAnimationAction.getClip().duration;
    }
    return 0;
  }
  get hasActiveAnimation() {
    return this.currentAnimationAction != null;
  }
  playAnimation(name = null, crossfadeTime = 0, loopMode = LoopRepeat, repetitionCount = Infinity) {
    if (this._currentGLTF == null) {
      return;
    }
    const { animations } = this;
    if (animations == null || animations.length === 0) {
      return;
    }
    let animationClip = null;
    if (name != null) {
      animationClip = this.animationsByName.get(name);
      if (animationClip == null) {
        const parsedAnimationIndex = parseInt(name);
        if (!isNaN(parsedAnimationIndex) && parsedAnimationIndex >= 0 && parsedAnimationIndex < animations.length) {
          animationClip = animations[parsedAnimationIndex];
        }
      }
    }
    if (animationClip == null) {
      animationClip = animations[0];
    }
    try {
      const { currentAnimationAction: lastAnimationAction } = this;
      const action = this.mixer.clipAction(animationClip, this);
      this.currentAnimationAction = action;
      if (this.element.paused) {
        this.mixer.stopAllAction();
      } else {
        action.paused = false;
        if (lastAnimationAction != null && action !== lastAnimationAction) {
          action.crossFadeFrom(lastAnimationAction, crossfadeTime, false);
        } else if (this.animationTimeScale > 0 && this.animationTime == this.duration) {
          this.animationTime = 0;
        }
      }
      action.setLoop(loopMode, repetitionCount);
      action.enabled = true;
      action.clampWhenFinished = true;
      action.play();
    } catch (error) {
      console.error(error);
    }
  }
  stopAnimation() {
    this.currentAnimationAction = null;
    this.mixer.stopAllAction();
  }
  updateAnimation(step) {
    this.mixer.update(step);
    this.queueShadowRender();
  }
  subscribeMixerEvent(event, callback) {
    this.mixer.addEventListener(event, callback);
  }
  updateShadow() {
    const shadow = this.shadow;
    if (shadow != null) {
      const side = this.element.arPlacement === "wall" ? "back" : "bottom";
      shadow.setScene(this, this.shadowSoftness, side);
      shadow.needsUpdate = true;
    }
  }
  renderShadow(renderer) {
    const shadow = this.shadow;
    if (shadow != null && shadow.needsUpdate == true) {
      shadow.render(renderer, this);
      shadow.needsUpdate = false;
    }
  }
  queueShadowRender() {
    if (this.shadow != null) {
      this.shadow.needsUpdate = true;
    }
  }
  setShadowIntensity(shadowIntensity) {
    this.shadowIntensity = shadowIntensity;
    if (this._currentGLTF == null) {
      return;
    }
    this.setBakedShadowVisibility();
    if (shadowIntensity <= 0 && this.shadow == null) {
      return;
    }
    if (this.shadow == null) {
      const side = this.element.arPlacement === "wall" ? "back" : "bottom";
      this.shadow = new Shadow(this, this.shadowSoftness, side);
    }
    this.shadow.setIntensity(shadowIntensity);
  }
  setShadowSoftness(softness) {
    this.shadowSoftness = softness;
    const shadow = this.shadow;
    if (shadow != null) {
      shadow.setSoftness(softness);
    }
  }
  setShadowOffset(offset) {
    const shadow = this.shadow;
    if (shadow != null) {
      shadow.setOffset(offset);
    }
  }
  hitFromPoint(ndcPosition, object = this) {
    raycaster.setFromCamera(ndcPosition, this.getCamera());
    const hits = raycaster.intersectObject(object, true);
    return hits.find(
      (hit) => hit.object.visible && !hit.object.userData.shadow
    );
  }
  positionAndNormalFromPoint(ndcPosition, object = this) {
    var _a2;
    const hit = this.hitFromPoint(ndcPosition, object);
    if (hit == null) {
      return null;
    }
    const position = hit.point;
    const normal = hit.face != null ? hit.face.normal.clone().applyNormalMatrix(
      new Matrix3().getNormalMatrix(hit.object.matrixWorld)
    ) : raycaster.ray.direction.clone().multiplyScalar(-1);
    const uv = (_a2 = hit.uv) !== null && _a2 !== void 0 ? _a2 : null;
    return { position, normal, uv };
  }
  surfaceFromPoint(ndcPosition, object = this) {
    const model = this.element.model;
    if (model == null) {
      return null;
    }
    const hit = this.hitFromPoint(ndcPosition, object);
    if (hit == null || hit.face == null) {
      return null;
    }
    const node = model[$nodeFromPoint](hit);
    const { meshes, primitives } = node.mesh.userData.associations;
    const va = new Vector3();
    const vb = new Vector3();
    const vc = new Vector3();
    const { a: a2, b: b2, c: c2 } = hit.face;
    const mesh = hit.object;
    mesh.getVertexPosition(a2, va);
    mesh.getVertexPosition(b2, vb);
    mesh.getVertexPosition(c2, vc);
    const tri = new Triangle(va, vb, vc);
    const uvw = new Vector3();
    tri.getBarycoord(mesh.worldToLocal(hit.point), uvw);
    return `${meshes} ${primitives} ${a2} ${b2} ${c2} ${uvw.x.toFixed(
      3
    )} ${uvw.y.toFixed(3)} ${uvw.z.toFixed(3)}`;
  }
  addHotspot(hotspot) {
    this.target.add(hotspot);
    this.annotationRenderer.domElement.appendChild(hotspot.element);
  }
  removeHotspot(hotspot) {
    this.target.remove(hotspot);
  }
  forHotspots(func) {
    const { children } = this.target;
    for (let i = 0, l2 = children.length; i < l2; i++) {
      const hotspot = children[i];
      if (hotspot instanceof Hotspot) {
        func(hotspot);
      }
    }
  }
  initializeSurface(hotspot) {
    if (hotspot.surface != null && hotspot.mesh == null) {
      const nodes = parseExpressions(hotspot.surface)[0].terms;
      if (nodes.length != 8) {
        console.warn(hotspot.surface + " does not have exactly 8 numbers.");
        return;
      }
      const primitiveNode = this.element.model[$nodeFromIndex](
        nodes[0].number,
        nodes[1].number
      );
      const tri = new Vector3(
        nodes[2].number,
        nodes[3].number,
        nodes[4].number
      );
      if (primitiveNode == null) {
        console.warn(
          hotspot.surface + " does not match a node/primitive in this glTF! Skipping this hotspot."
        );
        return;
      }
      const numVert = primitiveNode.mesh.geometry.attributes.position.count;
      if (tri.x >= numVert || tri.y >= numVert || tri.z >= numVert) {
        console.warn(
          hotspot.surface + " vertex indices out of range in this glTF! Skipping this hotspot."
        );
        return;
      }
      const bary = new Vector3(
        nodes[5].number,
        nodes[6].number,
        nodes[7].number
      );
      hotspot.mesh = primitiveNode.mesh;
      hotspot.tri = tri;
      hotspot.bary = bary;
    }
  }
  updateSurfaceHotspots() {
    const forceUpdate = !this.element.paused;
    this.forHotspots((hotspot) => {
      this.initializeSurface(hotspot);
      hotspot.updateSurface(forceUpdate);
    });
  }
  updateHotspotsVisibility(viewerPosition) {
    this.forHotspots((hotspot) => {
      view.copy(viewerPosition);
      target.setFromMatrixPosition(hotspot.matrixWorld);
      view.sub(target);
      normalWorld.copy(hotspot.normal).transformDirection(this.target.matrixWorld);
      if (view.dot(normalWorld) < 0) {
        hotspot.hide();
      } else {
        hotspot.show();
      }
    });
  }
  orientHotspots(radians) {
    this.forHotspots((hotspot) => {
      hotspot.orient(radians);
    });
  }
  setHotspotsVisibility(visible) {
    this.forHotspots((hotspot) => {
      hotspot.visible = visible;
    });
  }
  updateSchema(src) {
    var _a2;
    const { schemaElement, element } = this;
    const { alt, poster, iosSrc } = element;
    if (src != null) {
      const encoding = [
        {
          "@type": "MediaObject",
          contentUrl: src,
          encodingFormat: ((_a2 = src.split(".").pop()) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase()) === "gltf" ? "model/gltf+json" : "model/gltf-binary"
        }
      ];
      if (iosSrc) {
        encoding.push({
          "@type": "MediaObject",
          contentUrl: iosSrc,
          encodingFormat: "model/vnd.usdz+zip"
        });
      }
      const structuredData = {
        "@context": "http://schema.org/",
        "@type": "3DModel",
        image: poster !== null && poster !== void 0 ? poster : void 0,
        name: alt !== null && alt !== void 0 ? alt : void 0,
        encoding
      };
      schemaElement.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schemaElement);
    } else if (schemaElement.parentElement != null) {
      schemaElement.parentElement.removeChild(schemaElement);
    }
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ProgressTracker extends EventTarget {
  constructor() {
    super(...arguments);
    this.ongoingActivities = /* @__PURE__ */ new Set();
    this.totalProgress = 0;
  }
  get ongoingActivityCount() {
    return this.ongoingActivities.size;
  }
  beginActivity() {
    const activity = { progress: 0, completed: false };
    this.ongoingActivities.add(activity);
    if (this.ongoingActivityCount === 1) {
      this.announceTotalProgress(activity, 0);
    }
    return (progress) => {
      let nextProgress;
      nextProgress = Math.max(clamp(progress, 0, 1), activity.progress);
      if (nextProgress !== activity.progress) {
        this.announceTotalProgress(activity, nextProgress);
      }
      return activity.progress;
    };
  }
  announceTotalProgress(updatedActivity, nextProgress) {
    let progressLeft = 0;
    let completedActivities = 0;
    if (nextProgress == 1)
      updatedActivity.completed = true;
    for (const activity of this.ongoingActivities) {
      const { progress } = activity;
      progressLeft += 1 - progress;
      if (activity.completed === true) {
        completedActivities++;
      }
    }
    const lastProgress = updatedActivity.progress;
    updatedActivity.progress = nextProgress;
    this.totalProgress += (nextProgress - lastProgress) * (1 - this.totalProgress) / progressLeft;
    const totalProgress = completedActivities === this.ongoingActivityCount ? 1 : this.totalProgress;
    this.dispatchEvent(
      new CustomEvent("progress", { detail: { totalProgress } })
    );
    if (completedActivities === this.ongoingActivityCount) {
      this.totalProgress = 0;
      this.ongoingActivities.clear();
    }
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$4 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
var _a$1, _b$1, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
const CLEAR_MODEL_TIMEOUT_MS = 10;
const FALLBACK_SIZE_UPDATE_THRESHOLD_MS = 50;
const ANNOUNCE_MODEL_VISIBILITY_DEBOUNCE_THRESHOLD = 0;
const UNSIZED_MEDIA_WIDTH = 300;
const UNSIZED_MEDIA_HEIGHT = 150;
const blobCanvas = document.createElement("canvas");
const $fallbackResizeHandler = Symbol("fallbackResizeHandler");
const $defaultAriaLabel = Symbol("defaultAriaLabel");
const $resizeObserver = Symbol("resizeObserver");
const $clearModelTimeout = Symbol("clearModelTimeout");
const $onContextLost = Symbol("onContextLost");
const $loaded = Symbol("loaded");
const $status = Symbol("status");
const $onFocus = Symbol("onFocus");
const $onBlur = Symbol("onBlur");
const $updateSize = Symbol("updateSize");
const $intersectionObserver = Symbol("intersectionObserver");
const $isElementInViewport = Symbol("isElementInViewport");
const $announceModelVisibility = Symbol("announceModelVisibility");
const $ariaLabel = Symbol("ariaLabel");
const $altDefaulted = Symbol("altDefaulted");
const $statusElement = Symbol("statusElement");
const $updateStatus = Symbol("updateStatus");
const $loadedTime = Symbol("loadedTime");
const $updateSource = Symbol("updateSource");
const $markLoaded = Symbol("markLoaded");
const $container = Symbol("container");
const $userInputElement = Symbol("input");
const $canvas = Symbol("canvas");
const $scene = Symbol("scene");
const $needsRender = Symbol("needsRender");
const $tick = Symbol("tick");
const $onModelLoad = Symbol("onModelLoad");
const $onResize = Symbol("onResize");
const $renderer = Symbol("renderer");
const $progressTracker = Symbol("progressTracker");
const $getLoaded = Symbol("getLoaded");
const $getModelIsVisible = Symbol("getModelIsVisible");
const $shouldAttemptPreload = Symbol("shouldAttemptPreload");
const toVector3D = (v2) => {
  return {
    x: v2.x,
    y: v2.y,
    z: v2.z,
    toString() {
      return `${this.x}m ${this.y}m ${this.z}m`;
    }
  };
};
const toVector2D = (v2) => {
  return {
    u: v2.x,
    v: v2.y,
    toString() {
      return `${this.u} ${this.v}`;
    }
  };
};
class ModelViewerElementBase extends d$1 {
  constructor() {
    super();
    this.alt = null;
    this.src = null;
    this.withCredentials = false;
    this.generateSchema = false;
    this[_a$1] = false;
    this[_b$1] = false;
    this[_c] = 0;
    this[_d] = "";
    this[_e] = null;
    this[_f] = debounce(() => {
      const boundingRect = this.getBoundingClientRect();
      this[$updateSize](boundingRect);
    }, FALLBACK_SIZE_UPDATE_THRESHOLD_MS);
    this[_g] = debounce((oldVisibility) => {
      const newVisibility = this.modelIsVisible;
      if (newVisibility !== oldVisibility) {
        this.dispatchEvent(
          new CustomEvent("model-visibility", {
            detail: { visible: newVisibility }
          })
        );
      }
    }, ANNOUNCE_MODEL_VISIBILITY_DEBOUNCE_THRESHOLD);
    this[_h] = null;
    this[_j] = null;
    this[_k] = new ProgressTracker();
    this[_l] = () => {
      this[$statusElement].textContent = this[$status];
    };
    this[_m] = () => {
      this[$statusElement].textContent = "";
    };
    this[_o] = (event) => {
      this.dispatchEvent(
        new CustomEvent("error", {
          detail: { type: "webglcontextlost", sourceError: event.sourceEvent }
        })
      );
    };
    this.attachShadow({ mode: "open" });
    const shadowRoot = this.shadowRoot;
    makeTemplate(shadowRoot);
    this[$container] = shadowRoot.querySelector(".container");
    this[$userInputElement] = shadowRoot.querySelector(".userInput");
    this[$canvas] = shadowRoot.querySelector("canvas");
    this[$statusElement] = shadowRoot.querySelector("#status");
    this[$defaultAriaLabel] = this[$userInputElement].getAttribute("aria-label");
    let width, height;
    if (this.isConnected) {
      const rect = this.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
    } else {
      width = UNSIZED_MEDIA_WIDTH;
      height = UNSIZED_MEDIA_HEIGHT;
    }
    this[$scene] = new ModelScene({
      canvas: this[$canvas],
      element: this,
      width,
      height
    });
    Promise.resolve().then(() => {
      this[$updateSize](this.getBoundingClientRect());
    });
    if (HAS_RESIZE_OBSERVER) {
      this[$resizeObserver] = new ResizeObserver((entries) => {
        if (this[$renderer].isPresenting) {
          return;
        }
        for (let entry of entries) {
          if (entry.target === this) {
            this[$updateSize](entry.contentRect);
          }
        }
      });
    }
    if (HAS_INTERSECTION_OBSERVER) {
      this[$intersectionObserver] = new IntersectionObserver(
        (entries) => {
          for (let entry of entries) {
            if (entry.target === this) {
              const oldVisibility = this.modelIsVisible;
              this[$isElementInViewport] = entry.isIntersecting;
              this[$announceModelVisibility](oldVisibility);
              if (this[$isElementInViewport] && !this.loaded) {
                this[$updateSource]();
              }
            }
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1e-5
        }
      );
    } else {
      this[$isElementInViewport] = true;
    }
  }
  static get is() {
    return "model-viewer";
  }
  static set modelCacheSize(value) {
    CachingGLTFLoader[$evictionPolicy].evictionThreshold = value;
  }
  static get modelCacheSize() {
    return CachingGLTFLoader[$evictionPolicy].evictionThreshold;
  }
  static set minimumRenderScale(value) {
    if (value > 1) {
      console.warn(
        "<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."
      );
    }
    if (value <= 0) {
      console.warn(
        "<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."
      );
    }
    Renderer.singleton.minScale = value;
  }
  static get minimumRenderScale() {
    return Renderer.singleton.minScale;
  }
  get loaded() {
    return this[$getLoaded]();
  }
  get [(_a$1 = $isElementInViewport, _b$1 = $loaded, _c = $loadedTime, _d = $status, _e = $clearModelTimeout, _f = $fallbackResizeHandler, _g = $announceModelVisibility, _h = $resizeObserver, _j = $intersectionObserver, _k = $progressTracker, $renderer)]() {
    return Renderer.singleton;
  }
  get modelIsVisible() {
    return this[$getModelIsVisible]();
  }
  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    if (HAS_RESIZE_OBSERVER) {
      this[$resizeObserver].observe(this);
    } else {
      self.addEventListener("resize", this[$fallbackResizeHandler]);
    }
    if (HAS_INTERSECTION_OBSERVER) {
      this[$intersectionObserver].observe(this);
    }
    this.addEventListener("focus", this[$onFocus]);
    this.addEventListener("blur", this[$onBlur]);
    const renderer = this[$renderer];
    renderer.addEventListener("contextlost", this[$onContextLost]);
    renderer.registerScene(this[$scene]);
    if (this[$clearModelTimeout] != null) {
      self.clearTimeout(this[$clearModelTimeout]);
      this[$clearModelTimeout] = null;
      this.requestUpdate("src", null);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback && super.disconnectedCallback();
    if (HAS_RESIZE_OBSERVER) {
      this[$resizeObserver].unobserve(this);
    } else {
      self.removeEventListener("resize", this[$fallbackResizeHandler]);
    }
    if (HAS_INTERSECTION_OBSERVER) {
      this[$intersectionObserver].unobserve(this);
    }
    this.removeEventListener("focus", this[$onFocus]);
    this.removeEventListener("blur", this[$onBlur]);
    const renderer = this[$renderer];
    renderer.removeEventListener("contextlost", this[$onContextLost]);
    renderer.unregisterScene(this[$scene]);
    this[$clearModelTimeout] = self.setTimeout(() => {
      this[$scene].dispose();
      this[$clearModelTimeout] = null;
    }, CLEAR_MODEL_TIMEOUT_MS);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("src")) {
      if (this.src == null) {
        this[$loaded] = false;
        this[$loadedTime] = 0;
        this[$scene].reset();
      } else if (this.src !== this[$scene].url) {
        this[$loaded] = false;
        this[$loadedTime] = 0;
        this[$updateSource]();
      }
    }
    if (changedProperties.has("alt")) {
      this[$userInputElement].setAttribute("aria-label", this[$ariaLabel]);
    }
    if (changedProperties.has("withCredentials")) {
      CachingGLTFLoader.withCredentials = this.withCredentials;
      this[$renderer].textureUtils.withCredentials = this.withCredentials;
    }
    if (changedProperties.has("generateSchema")) {
      if (this.generateSchema) {
        this[$scene].updateSchema(this.src);
      } else {
        this[$scene].updateSchema(null);
      }
    }
  }
  toDataURL(type, encoderOptions) {
    return this[$renderer].displayCanvas(this[$scene]).toDataURL(type, encoderOptions);
  }
  toBlob(options) {
    return __async$2(this, null, function* () {
      const mimeType = options ? options.mimeType : void 0;
      const qualityArgument = options ? options.qualityArgument : void 0;
      const useIdealAspect = options ? options.idealAspect : void 0;
      const { width, height, idealAspect, aspect } = this[$scene];
      const { dpr, scaleFactor } = this[$renderer];
      let outputWidth = width * scaleFactor * dpr;
      let outputHeight = height * scaleFactor * dpr;
      let offsetX = 0;
      let offsetY = 0;
      if (useIdealAspect === true) {
        if (idealAspect > aspect) {
          const oldHeight = outputHeight;
          outputHeight = Math.round(outputWidth / idealAspect);
          offsetY = (oldHeight - outputHeight) / 2;
        } else {
          const oldWidth = outputWidth;
          outputWidth = Math.round(outputHeight * idealAspect);
          offsetX = (oldWidth - outputWidth) / 2;
        }
      }
      blobCanvas.width = outputWidth;
      blobCanvas.height = outputHeight;
      try {
        return new Promise((resolve, reject) => __async$2(this, null, function* () {
          blobCanvas.getContext("2d").drawImage(
            this[$renderer].displayCanvas(this[$scene]),
            offsetX,
            offsetY,
            outputWidth,
            outputHeight,
            0,
            0,
            outputWidth,
            outputHeight
          );
          blobCanvas.toBlob(
            (blob) => {
              if (!blob) {
                return reject(new Error("Unable to retrieve canvas blob"));
              }
              resolve(blob);
            },
            mimeType,
            qualityArgument
          );
        }));
      } finally {
        this[$updateSize]({ width, height });
      }
    });
  }
  registerEffectComposer(effectComposer) {
    effectComposer.setRenderer(this[$renderer].threeRenderer);
    effectComposer.setMainCamera(this[$scene].getCamera());
    effectComposer.setMainScene(this[$scene]);
    this[$scene].effectRenderer = effectComposer;
  }
  unregisterEffectComposer() {
    this[$scene].effectRenderer = null;
  }
  registerRenderer(renderer) {
    this[$scene].externalRenderer = renderer;
  }
  unregisterRenderer() {
    this[$scene].externalRenderer = null;
  }
  get [$ariaLabel]() {
    return this[$altDefaulted];
  }
  get [$altDefaulted]() {
    return this.alt == null || this.alt === "null" ? this[$defaultAriaLabel] : this.alt;
  }
  [$getLoaded]() {
    return this[$loaded];
  }
  [$getModelIsVisible]() {
    return this.loaded && this[$isElementInViewport];
  }
  [$shouldAttemptPreload]() {
    return !!this.src && this[$isElementInViewport];
  }
  [$updateSize]({ width, height }) {
    if (width === 0 || height === 0) {
      return;
    }
    this[$container].style.width = `${width}px`;
    this[$container].style.height = `${height}px`;
    this[$onResize]({ width, height });
  }
  [$tick](time, delta) {
    var _p;
    (_p = this[$scene].effectRenderer) === null || _p === void 0 ? void 0 : _p.beforeRender(time, delta);
  }
  [$markLoaded]() {
    if (this[$loaded]) {
      return;
    }
    this[$loaded] = true;
    this[$loadedTime] = performance.now();
  }
  [$needsRender]() {
    this[$scene].queueRender();
  }
  [$onModelLoad]() {
  }
  [$updateStatus](status) {
    this[$status] = status;
    const rootNode = this.getRootNode();
    if (rootNode != null && rootNode.activeElement === this && this[$statusElement].textContent != status) {
      this[$statusElement].textContent = status;
    }
  }
  [(_l = $onFocus, _m = $onBlur, $onResize)](e2) {
    this[$scene].setSize(e2.width, e2.height);
  }
  [(_o = $onContextLost, $updateSource)]() {
    return __async$2(this, null, function* () {
      const scene = this[$scene];
      if (this.loaded || !this[$shouldAttemptPreload]() || this.src === scene.url) {
        return;
      }
      if (this.generateSchema) {
        scene.updateSchema(this.src);
      }
      this[$updateStatus]("Loading");
      scene.stopAnimation();
      const updateSourceProgress = this[$progressTracker].beginActivity();
      const source = this.src;
      try {
        const srcUpdated = scene.setSource(
          source,
          (progress) => updateSourceProgress(clamp(progress, 0, 1) * 0.95)
        );
        const envUpdated = this[$updateEnvironment]();
        yield Promise.all([srcUpdated, envUpdated]);
        this[$markLoaded]();
        this[$onModelLoad]();
        this.updateComplete.then(() => {
          this.dispatchEvent(new CustomEvent("before-render"));
        });
        yield new Promise((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.dispatchEvent(
                new CustomEvent("load", { detail: { url: source } })
              );
              resolve();
            });
          });
        });
      } catch (error) {
        this.dispatchEvent(
          new CustomEvent("error", {
            detail: { type: "loadfailure", sourceError: error }
          })
        );
      } finally {
        updateSourceProgress(1);
      }
    });
  }
}
__decorate$4(
  [e$3({ type: String })],
  ModelViewerElementBase.prototype,
  "alt",
  void 0
);
__decorate$4(
  [e$3({ type: String })],
  ModelViewerElementBase.prototype,
  "src",
  void 0
);
__decorate$4(
  [e$3({ type: Boolean, attribute: "with-credentials" })],
  ModelViewerElementBase.prototype,
  "withCredentials",
  void 0
);
__decorate$4(
  [e$3({ type: Boolean, attribute: "generate-schema" })],
  ModelViewerElementBase.prototype,
  "generateSchema",
  void 0
);
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$3 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
const MILLISECONDS_PER_SECOND = 1e3;
const $changeAnimation = Symbol("changeAnimation");
const $paused = Symbol("paused");
const DEFAULT_PLAY_OPTIONS = {
  repetitions: Infinity,
  pingpong: false
};
const AnimationMixin = (ModelViewerElement2) => {
  var _a2;
  class AnimationModelViewerElement extends ModelViewerElement2 {
    constructor(...args) {
      super(args);
      this.autoplay = false;
      this.animationName = void 0;
      this.animationCrossfadeDuration = 300;
      this[_a2] = true;
      this[$scene].subscribeMixerEvent("loop", (e2) => {
        const count = e2.action._loopCount;
        this.dispatchEvent(new CustomEvent("loop", { detail: { count } }));
      });
      this[$scene].subscribeMixerEvent("finished", () => {
        this[$paused] = true;
        this.dispatchEvent(new CustomEvent("finished"));
      });
    }
    get availableAnimations() {
      if (this.loaded) {
        return this[$scene].animationNames;
      }
      return [];
    }
    get duration() {
      return this[$scene].duration;
    }
    get paused() {
      return this[$paused];
    }
    get currentTime() {
      return this[$scene].animationTime;
    }
    set currentTime(value) {
      this[$scene].animationTime = value;
      this[$needsRender]();
    }
    get timeScale() {
      return this[$scene].animationTimeScale;
    }
    set timeScale(value) {
      this[$scene].animationTimeScale = value;
    }
    pause() {
      if (this[$paused]) {
        return;
      }
      this[$paused] = true;
      this.dispatchEvent(new CustomEvent("pause"));
    }
    play(options) {
      if (this.availableAnimations.length > 0) {
        this[$paused] = false;
        this[$changeAnimation](options);
        this.dispatchEvent(new CustomEvent("play"));
      }
    }
    [(_a2 = $paused, $onModelLoad)]() {
      super[$onModelLoad]();
      this[$paused] = true;
      if (this.animationName != null) {
        this[$changeAnimation]();
      }
      if (this.autoplay) {
        this.play();
      }
    }
    [$tick](_time, delta) {
      super[$tick](_time, delta);
      if (this[$paused] || !this[$getModelIsVisible]() && !this[$renderer].isPresenting) {
        return;
      }
      this[$scene].updateAnimation(delta / MILLISECONDS_PER_SECOND);
      this[$needsRender]();
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has("autoplay") && this.autoplay) {
        this.play();
      }
      if (changedProperties.has("animationName")) {
        this[$changeAnimation]();
      }
    }
    [$changeAnimation](options = DEFAULT_PLAY_OPTIONS) {
      var _b2;
      const repetitions = (_b2 = options.repetitions) !== null && _b2 !== void 0 ? _b2 : Infinity;
      const mode = options.pingpong ? LoopPingPong : repetitions === 1 ? LoopOnce : LoopRepeat;
      this[$scene].playAnimation(
        this.animationName,
        this.animationCrossfadeDuration / MILLISECONDS_PER_SECOND,
        mode,
        repetitions
      );
      if (this[$paused]) {
        this[$scene].updateAnimation(0);
        this[$needsRender]();
      }
    }
  }
  __decorate$3(
    [e$3({ type: Boolean })],
    AnimationModelViewerElement.prototype,
    "autoplay",
    void 0
  );
  __decorate$3(
    [e$3({ type: String, attribute: "animation-name" })],
    AnimationModelViewerElement.prototype,
    "animationName",
    void 0
  );
  __decorate$3(
    [e$3({ type: Number, attribute: "animation-crossfade-duration" })],
    AnimationModelViewerElement.prototype,
    "animationCrossfadeDuration",
    void 0
  );
  return AnimationModelViewerElement;
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $hotspotMap = Symbol("hotspotMap");
const $mutationCallback = Symbol("mutationCallback");
const $observer = Symbol("observer");
const $addHotspot = Symbol("addHotspot");
const $removeHotspot = Symbol("removeHotspot");
const worldToModel = new Matrix4();
const AnnotationMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2;
  class AnnotationModelViewerElement extends ModelViewerElement2 {
    constructor() {
      super(...arguments);
      this[_a2] = /* @__PURE__ */ new Map();
      this[_b2] = (mutations) => {
        mutations.forEach((mutation) => {
          if (!(mutation instanceof MutationRecord) || mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              this[$addHotspot](node);
            });
            mutation.removedNodes.forEach((node) => {
              this[$removeHotspot](node);
            });
            this[$needsRender]();
          }
        });
      };
      this[_c2] = new MutationObserver(this[$mutationCallback]);
    }
    connectedCallback() {
      super.connectedCallback();
      for (let i = 0; i < this.children.length; ++i) {
        this[$addHotspot](this.children[i]);
      }
      const { ShadyDOM } = self;
      if (ShadyDOM == null) {
        this[$observer].observe(this, { childList: true });
      } else {
        this[$observer] = ShadyDOM.observeChildren(
          this,
          this[$mutationCallback]
        );
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      const { ShadyDOM } = self;
      if (ShadyDOM == null) {
        this[$observer].disconnect();
      } else {
        ShadyDOM.unobserveChildren(this[$observer]);
      }
    }
    [(_a2 = $hotspotMap, _b2 = $mutationCallback, _c2 = $observer, $tick)](time, delta) {
      super[$tick](time, delta);
      const scene = this[$scene];
      const { annotationRenderer } = scene;
      const camera2 = scene.getCamera();
      if (scene.shouldRender()) {
        scene.updateSurfaceHotspots();
        scene.updateHotspotsVisibility(camera2.position);
        annotationRenderer.domElement.style.display = "";
        annotationRenderer.render(scene, camera2);
      }
    }
    updateHotspot(config) {
      const hotspot = this[$hotspotMap].get(config.name);
      if (hotspot == null) {
        return;
      }
      hotspot.updatePosition(config.position);
      hotspot.updateNormal(config.normal);
      hotspot.surface = config.surface;
      this[$needsRender]();
    }
    queryHotspot(name) {
      const hotspot = this[$hotspotMap].get(name);
      if (hotspot == null) {
        return null;
      }
      const position = toVector3D(hotspot.position);
      const normal = toVector3D(hotspot.normal);
      const facingCamera = hotspot.facingCamera;
      const scene = this[$scene];
      const camera2 = scene.getCamera();
      const vector = new Vector3();
      vector.setFromMatrixPosition(hotspot.matrixWorld);
      vector.project(camera2);
      const widthHalf = scene.width / 2;
      const heightHalf = scene.height / 2;
      vector.x = vector.x * widthHalf + widthHalf;
      vector.y = -(vector.y * heightHalf) + heightHalf;
      const canvasPosition = toVector3D(
        new Vector3(vector.x, vector.y, vector.z)
      );
      if (!Number.isFinite(canvasPosition.x) || !Number.isFinite(canvasPosition.y)) {
        return null;
      }
      return { position, normal, canvasPosition, facingCamera };
    }
    positionAndNormalFromPoint(pixelX, pixelY) {
      const scene = this[$scene];
      const ndcPosition = scene.getNDC(pixelX, pixelY);
      const hit = scene.positionAndNormalFromPoint(ndcPosition);
      if (hit == null) {
        return null;
      }
      worldToModel.copy(scene.target.matrixWorld).invert();
      const position = toVector3D(hit.position.applyMatrix4(worldToModel));
      const normal = toVector3D(hit.normal.transformDirection(worldToModel));
      let uv = null;
      if (hit.uv != null) {
        uv = toVector2D(hit.uv);
      }
      return { position, normal, uv };
    }
    surfaceFromPoint(pixelX, pixelY) {
      const scene = this[$scene];
      const ndcPosition = scene.getNDC(pixelX, pixelY);
      return scene.surfaceFromPoint(ndcPosition);
    }
    [$addHotspot](node) {
      if (!(node instanceof HTMLElement && node.slot.indexOf("hotspot") === 0)) {
        return;
      }
      let hotspot = this[$hotspotMap].get(node.slot);
      if (hotspot != null) {
        hotspot.increment();
      } else {
        hotspot = new Hotspot({
          name: node.slot,
          position: node.dataset.position,
          normal: node.dataset.normal,
          surface: node.dataset.surface
        });
        this[$hotspotMap].set(node.slot, hotspot);
        this[$scene].addHotspot(hotspot);
      }
      this[$scene].queueRender();
    }
    [$removeHotspot](node) {
      if (!(node instanceof HTMLElement)) {
        return;
      }
      const hotspot = this[$hotspotMap].get(node.slot);
      if (!hotspot) {
        return;
      }
      if (hotspot.decrement()) {
        this[$scene].removeHotspot(hotspot);
        this[$hotspotMap].delete(node.slot);
      }
      this[$scene].queueRender();
    }
  }
  return AnnotationModelViewerElement;
};
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var durl = function(c2) {
  return URL.createObjectURL(new Blob([c2], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(durl(""));
} catch (e2) {
  durl = function(c2) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(c2);
  };
}
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  0,
  0,
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  0,
  0
]);
var clim = new u8([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b2[i] = start += 1 << eb[i - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j2 = b2[i]; j2 < b2[i + 1]; ++j2) {
      r2[j2] = j2 - b2[i] << 5 | i;
    }
  }
  return [b2, r2];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), revfd = _b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  var x = (i & 43690) >>> 1 | (i & 21845) << 1;
  x = (x & 52428) >>> 2 | (x & 13107) << 2;
  x = (x & 61680) >>> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i = 0;
  var l2 = new u16(mb);
  for (; i < s2; ++i)
    ++l2[cd[i] - 1];
  var le = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l2[i - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s2; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v2 = le[cd[i] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i = 0; i < s2; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
  flt[i] = 8;
for (var i = 144; i < 256; ++i)
  flt[i] = 9;
for (var i = 256; i < 280; ++i)
  flt[i] = 7;
for (var i = 280; i < 288; ++i)
  flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
  fdt[i] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var shft = function(p2) {
  return (p2 / 8 | 0) + (p2 & 7 && 1);
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2 instanceof u16 ? u16 : v2 instanceof u32 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var wbits = function(d2, p2, v2) {
  v2 <<= p2 & 7;
  var o2 = p2 / 8 | 0;
  d2[o2] |= v2;
  d2[o2 + 1] |= v2 >>> 8;
};
var wbits16 = function(d2, p2, v2) {
  v2 <<= p2 & 7;
  var o2 = p2 / 8 | 0;
  d2[o2] |= v2;
  d2[o2 + 1] |= v2 >>> 8;
  d2[o2 + 2] |= v2 >>> 16;
};
var hTree = function(d2, mb) {
  var t2 = [];
  for (var i = 0; i < d2.length; ++i) {
    if (d2[i])
      t2.push({ s: i, f: d2[i] });
  }
  var s2 = t2.length;
  var t22 = t2.slice();
  if (!s2)
    return [et, 0];
  if (s2 == 1) {
    var v2 = new u8(t2[0].s + 1);
    v2[t2[0].s] = 1;
    return [v2, 1];
  }
  t2.sort(function(a2, b2) {
    return a2.f - b2.f;
  });
  t2.push({ s: -1, f: 25001 });
  var l2 = t2[0], r2 = t2[1], i0 = 0, i1 = 1, i2 = 2;
  t2[0] = { s: -1, f: l2.f + r2.f, l: l2, r: r2 };
  while (i1 != s2 - 1) {
    l2 = t2[t2[i0].f < t2[i2].f ? i0++ : i2++];
    r2 = t2[i0 != i1 && t2[i0].f < t2[i2].f ? i0++ : i2++];
    t2[i1++] = { s: -1, f: l2.f + r2.f, l: l2, r: r2 };
  }
  var maxSym = t22[0].s;
  for (var i = 1; i < s2; ++i) {
    if (t22[i].s > maxSym)
      maxSym = t22[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t2[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt2 = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t22.sort(function(a2, b2) {
      return tr[b2.s] - tr[a2.s] || a2.f - b2.f;
    });
    for (; i < s2; ++i) {
      var i2_1 = t22[i].s;
      if (tr[i2_1] > mb) {
        dt2 += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt2 >>>= lft;
    while (dt2 > 0) {
      var i2_2 = t22[i].s;
      if (tr[i2_2] < mb)
        dt2 -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt2; --i) {
      var i2_3 = t22[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt2;
      }
    }
    mbt = mb;
  }
  return [new u8(tr), mbt];
};
var ln = function(n2, l2, d2) {
  return n2.s == -1 ? Math.max(ln(n2.l, l2, d2 + 1), ln(n2.r, l2, d2 + 1)) : l2[n2.s] = d2;
};
var lc = function(c2) {
  var s2 = c2.length;
  while (s2 && !c2[--s2])
    ;
  var cl = new u16(++s2);
  var cli = 0, cln = c2[0], cls = 1;
  var w2 = function(v2) {
    cl[cli++] = v2;
  };
  for (var i = 1; i <= s2; ++i) {
    if (c2[i] == cln && i != s2)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w2(32754);
        if (cls > 2) {
          w2(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w2(cln), --cls;
        for (; cls > 6; cls -= 6)
          w2(8304);
        if (cls > 2)
          w2(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w2(cln);
      cls = 1;
      cln = c2[i];
    }
  }
  return [cl.subarray(0, cli), s2];
};
var clen = function(cf, cl) {
  var l2 = 0;
  for (var i = 0; i < cl.length; ++i)
    l2 += cf[i] * cl[i];
  return l2;
};
var wfblk = function(out, pos, dat) {
  var s2 = dat.length;
  var o2 = shft(pos + 2);
  out[o2] = s2 & 255;
  out[o2 + 1] = s2 >>> 8;
  out[o2 + 2] = out[o2] ^ 255;
  out[o2 + 3] = out[o2 + 1] ^ 255;
  for (var i = 0; i < s2; ++i)
    out[o2 + i + 4] = dat[i];
  return (o2 + 4 + s2) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p2) {
  wbits(out, p2++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2[0], mlb = _a2[1];
  var _b2 = hTree(df, 15), ddt = _b2[0], mdb = _b2[1];
  var _c2 = lc(dlt), lclt = _c2[0], nlc = _c2[1];
  var _d2 = lc(ddt), lcdt = _d2[0], ndc2 = _d2[1];
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    lcfreq[lclt[i] & 31]++;
  for (var i = 0; i < lcdt.length; ++i)
    lcfreq[lcdt[i] & 31]++;
  var _e2 = hTree(lcfreq, 7), lct = _e2[0], mlcb = _e2[1];
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen)
    return wfblk(out, p2, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p2, 1 + (dtlen < ftlen)), p2 += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p2, nlc - 257);
    wbits(out, p2 + 5, ndc2 - 1);
    wbits(out, p2 + 10, nlcc - 4);
    p2 += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p2 + 3 * i, lct[clim[i]]);
    p2 += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p2, llm[len]), p2 += lct[len];
        if (len > 15)
          wbits(out, p2, clct[i] >>> 5 & 127), p2 += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p2, lm[len + 257]), p2 += ll[len + 257];
      if (len > 7)
        wbits(out, p2, syms[i] >>> 23 & 31), p2 += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p2, dm[dst]), p2 += dl[dst];
      if (dst > 3)
        wbits16(out, p2, syms[i] >>> 5 & 8191), p2 += fdeb[dst];
    } else {
      wbits16(out, p2, lm[syms[i]]), p2 += ll[syms[i]];
    }
  }
  wbits16(out, p2, lm[256]);
  return p2 + ll[256];
};
var deo = /* @__PURE__ */ new u32([
  65540,
  131080,
  131088,
  131104,
  262176,
  1048704,
  1048832,
  2114560,
  2117632
]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, lst) {
  var s2 = dat.length;
  var o2 = new u8(pre + s2 + 5 * (1 + Math.ceil(s2 / 7e3)) + post);
  var w2 = o2.subarray(pre, o2.length - post);
  var pos = 0;
  if (!lvl || s2 < 8) {
    for (var i = 0; i <= s2; i += 65535) {
      var e2 = i + 65535;
      if (e2 < s2) {
        pos = wfblk(w2, pos, dat.subarray(i, e2));
      } else {
        w2[i] = lst;
        pos = wfblk(w2, pos, dat.subarray(i, s2));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n2 = opt >>> 13, c2 = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = new u16(32768), head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new u32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
    for (; i < s2; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s2 - i;
        if ((lc_1 > 7e3 || li > 24576) && rem > 423) {
          pos = wblk(dat, w2, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j2 = 0; j2 < 286; ++j2)
            lf[j2] = 0;
          for (var j2 = 0; j2 < 30; ++j2)
            df[j2] = 0;
        }
        var l2 = 2, d2 = 0, ch_1 = c2, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n2, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l2] == dat[i + l2 - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l2) {
                l2 = nl, d2 = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j2 = 0; j2 < mmd; ++j2) {
                  var ti = i - dif + j2 + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        }
        if (d2) {
          syms[li++] = 268435456 | revfl[l2] << 18 | revfd[d2];
          var lin = revfl[l2] & 31, din = revfd[d2] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l2;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    pos = wblk(dat, w2, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst && pos & 7)
      pos = wfblk(w2, pos + 1, et);
  }
  return slc(o2, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ function() {
  var t2 = new u32(256);
  for (var i = 0; i < 256; ++i) {
    var c2 = i, k2 = 9;
    while (--k2)
      c2 = (c2 & 1 && 3988292384) ^ c2 >>> 1;
    t2[i] = c2;
  }
  return t2;
}();
var crc = function() {
  var c2 = -1;
  return {
    p: function(d2) {
      var cr = c2;
      for (var i = 0; i < d2.length; ++i)
        cr = crct[cr & 255 ^ d2[i]] ^ cr >>> 8;
      c2 = cr;
    },
    d: function() {
      return ~c2;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  return dflt(
    dat,
    opt.level == null ? 6 : opt.level,
    opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem,
    pre,
    post,
    !st
  );
};
var mrg = function(a2, b2) {
  var o2 = {};
  for (var k2 in a2)
    o2[k2] = a2[k2];
  for (var k2 in b2)
    o2[k2] = b2[k2];
  return o2;
};
var wbytes = function(d2, b2, v2) {
  for (; v2; ++b2)
    d2[b2] = v2, v2 >>>= 8;
};
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
var fltn = function(d2, p2, t2, o2) {
  for (var k2 in d2) {
    var val = d2[k2], n2 = p2 + k2;
    if (val instanceof u8)
      t2[n2] = [val, o2];
    else if (Array.isArray(val))
      t2[n2] = [val[0], mrg(o2, val[1])];
    else
      fltn(val, n2 + "/", t2, o2);
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i = 0; i < l2; ++i) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k2 in ex) {
      var l2 = ex[k2].length;
      if (l2 > 65535)
        throw "extra field too long";
      le += l2 + 4;
    }
  }
  return le;
};
var wzh = function(d2, b2, f2, fn, u2, c2, ce, co) {
  var fl2 = fn.length, ex = f2.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d2, b2, ce != null ? 33639248 : 67324752), b2 += 4;
  if (ce != null)
    d2[b2++] = 20, d2[b2++] = f2.os;
  d2[b2] = 20, b2 += 2;
  d2[b2++] = f2.flag << 1 | (c2 == null && 8), d2[b2++] = u2 && 8;
  d2[b2++] = f2.compression & 255, d2[b2++] = f2.compression >> 8;
  var dt2 = new Date(f2.mtime == null ? Date.now() : f2.mtime), y2 = dt2.getFullYear() - 1980;
  if (y2 < 0 || y2 > 119)
    throw "date not in range 1980-2099";
  wbytes(
    d2,
    b2,
    y2 << 25 | dt2.getMonth() + 1 << 21 | dt2.getDate() << 16 | dt2.getHours() << 11 | dt2.getMinutes() << 5 | dt2.getSeconds() >>> 1
  ), b2 += 4;
  if (c2 != null) {
    wbytes(d2, b2, f2.crc);
    wbytes(d2, b2 + 4, c2);
    wbytes(d2, b2 + 8, f2.size);
  }
  wbytes(d2, b2 + 12, fl2);
  wbytes(d2, b2 + 14, exl), b2 += 16;
  if (ce != null) {
    wbytes(d2, b2, col);
    wbytes(d2, b2 + 6, f2.attrs);
    wbytes(d2, b2 + 10, ce), b2 += 14;
  }
  d2.set(fn, b2);
  b2 += fl2;
  if (exl) {
    for (var k2 in ex) {
      var exf = ex[k2], l2 = exf.length;
      wbytes(d2, b2, +k2);
      wbytes(d2, b2 + 2, l2);
      d2.set(exf, b2 + 4), b2 += 4 + l2;
    }
  }
  if (col)
    d2.set(co, b2), b2 += col;
  return b2;
};
var wzf = function(o2, b2, c2, d2, e2) {
  wbytes(o2, b2, 101010256);
  wbytes(o2, b2 + 8, c2);
  wbytes(o2, b2 + 10, c2);
  wbytes(o2, b2 + 12, d2);
  wbytes(o2, b2 + 16, e2);
};
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r2 = {};
  var files = [];
  fltn(data, "", r2, opts);
  var o2 = 0;
  var tot = 0;
  for (var fn in r2) {
    var _a2 = r2[fn], file = _a2[0], p2 = _a2[1];
    var compression = p2.level == 0 ? 0 : 8;
    var f2 = strToU8(fn), s2 = f2.length;
    var com = p2.comment, m2 = com && strToU8(com), ms = m2 && m2.length;
    var exl = exfl(p2.extra);
    if (s2 > 65535)
      throw "filename too long";
    var d2 = compression ? deflateSync(file, p2) : file, l2 = d2.length;
    var c2 = crc();
    c2.p(file);
    files.push(
      mrg(p2, {
        size: file.length,
        crc: c2.d(),
        c: d2,
        f: f2,
        m: m2,
        u: s2 != fn.length || m2 && com.length != ms,
        o: o2,
        compression
      })
    );
    o2 += 30 + s2 + exl + l2;
    tot += 76 + 2 * (s2 + exl) + (ms || 0) + l2;
  }
  var out = new u8(tot + 22), oe = o2, cdl = tot - o2;
  for (var i = 0; i < files.length; ++i) {
    var f2 = files[i];
    wzh(out, f2.o, f2, f2.f, f2.u, f2.c.length);
    var badd = 30 + f2.f.length + exfl(f2.extra);
    out.set(f2.c, f2.o + badd);
    wzh(out, o2, f2, f2.f, f2.u, f2.c.length, f2.o, f2.m), o2 += 16 + badd + (f2.m ? f2.m.length : 0);
  }
  wzf(out, o2, files.length, cdl, oe);
  return out;
}
class USDZExporter$1 {
  parse(_0) {
    return __async$2(this, arguments, function* (scene, options = {}) {
      options = Object.assign(
        {
          ar: {
            anchoring: { type: "plane" },
            planeAnchoring: { alignment: "horizontal" }
          }
        },
        options
      );
      const files = {};
      const modelFileName = "model.usda";
      files[modelFileName] = null;
      let output = buildHeader$1();
      output += buildSceneStart$1(options);
      const materials = {};
      const textures = {};
      scene.traverseVisible((object) => {
        if (object.isMesh) {
          const geometry = object.geometry;
          const material = object.material;
          if (material.isMeshStandardMaterial) {
            const geometryFileName = "geometries/Geometry_" + geometry.id + ".usd";
            if (!(geometryFileName in files)) {
              const meshObject = buildMeshObject$1(geometry);
              files[geometryFileName] = buildUSDFileAsString$1(meshObject);
            }
            if (!(material.uuid in materials)) {
              materials[material.uuid] = material;
            }
            output += buildXform$1(object, geometry, material);
          } else {
            console.warn(
              "THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",
              object
            );
          }
        } else if (object.isCamera) {
          output += buildCamera$1(object);
        }
      });
      output += buildSceneEnd$1();
      output += buildMaterials$1(materials, textures);
      files[modelFileName] = strToU8(output);
      output = null;
      for (const id in textures) {
        const texture = textures[id];
        const color = id.split("_")[1];
        const isRGBA = texture.format === 1023;
        const canvas = imageToCanvas$1(texture.image, color, texture.flipY);
        const blob = yield new Promise(
          (resolve) => canvas.toBlob(resolve, isRGBA ? "image/png" : "image/jpeg", 1)
        );
        files[`textures/Texture_${id}.${isRGBA ? "png" : "jpg"}`] = new Uint8Array(yield blob.arrayBuffer());
      }
      let offset = 0;
      for (const filename in files) {
        const file = files[filename];
        const headerSize = 34 + filename.length;
        offset += headerSize;
        const offsetMod64 = offset & 63;
        if (offsetMod64 !== 4) {
          const padLength = 64 - offsetMod64;
          const padding = new Uint8Array(padLength);
          files[filename] = [file, { extra: { 12345: padding } }];
        }
        offset = file.length;
      }
      return zipSync(files, { level: 0 });
    });
  }
}
function imageToCanvas$1(image, color, flipY) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && image instanceof OffscreenCanvas || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    if (flipY === true) {
      context.translate(0, canvas.height);
      context.scale(1, -1);
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    if (color !== void 0) {
      const hex = parseInt(color, 16);
      const r2 = (hex >> 16 & 255) / 255;
      const g2 = (hex >> 8 & 255) / 255;
      const b2 = (hex & 255) / 255;
      const imagedata = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imagedata.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i + 0] = data[i + 0] * r2;
        data[i + 1] = data[i + 1] * g2;
        data[i + 2] = data[i + 2] * b2;
      }
      context.putImageData(imagedata, 0, 0);
    }
    return canvas;
  } else {
    throw new Error(
      "THREE.USDZExporter: No valid image data found. Unable to process texture."
    );
  }
}
const PRECISION$1 = 7;
function buildHeader$1() {
  return `#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`;
}
function buildSceneStart$1(options) {
  return `def Xform "Root"
{
    def Scope "Scenes" (
        kind = "sceneLibrary"
    )
    {
        def Xform "Scene" (
            customData = {
                bool preliminary_collidesWithEnvironment = 0
                string sceneName = "Scene"
            }
            sceneName = "Scene"
        )
        {
        token preliminary:anchoring:type = "${options.ar.anchoring.type}"
        token preliminary:planeAnchoring:alignment = "${options.ar.planeAnchoring.alignment}"

`;
}
function buildSceneEnd$1() {
  return `
        }
    }
}

`;
}
function buildUSDFileAsString$1(dataToInsert) {
  let output = buildHeader$1();
  output += dataToInsert;
  return strToU8(output);
}
function buildXform$1(object, geometry, material) {
  const name = "Object_" + object.id;
  const transform = buildMatrix$1(object.matrixWorld);
  if (object.matrixWorld.determinant() < 0) {
    console.warn(
      "THREE.USDZExporter: USDZ does not support negative scales",
      object
    );
  }
  return `def Xform "${name}" (
    prepend references = @./geometries/Geometry_${geometry.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${transform}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${material.id}>
}

`;
}
function buildMatrix$1(matrix) {
  const array = matrix.elements;
  return `( ${buildMatrixRow$1(array, 0)}, ${buildMatrixRow$1(
    array,
    4
  )}, ${buildMatrixRow$1(array, 8)}, ${buildMatrixRow$1(array, 12)} )`;
}
function buildMatrixRow$1(array, offset) {
  return `(${array[offset + 0]}, ${array[offset + 1]}, ${array[offset + 2]}, ${array[offset + 3]})`;
}
function buildMeshObject$1(geometry) {
  const mesh = buildMesh$1(geometry);
  return `
def "Geometry"
{
  ${mesh}
}
`;
}
function buildMesh$1(geometry) {
  const name = "Geometry";
  const attributes = geometry.attributes;
  const count = attributes.position.count;
  return `
    def Mesh "${name}"
    {
        int[] faceVertexCounts = [${buildMeshVertexCount$1(geometry)}]
        int[] faceVertexIndices = [${buildMeshVertexIndices$1(geometry)}]
        normal3f[] normals = [${buildVector3Array$1(attributes.normal, count)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${buildVector3Array$1(attributes.position, count)}]
        float2[] primvars:st = [${buildVector2Array$1(attributes.uv, count)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`;
}
function buildMeshVertexCount$1(geometry) {
  const count = geometry.index !== null ? geometry.index.count : geometry.attributes.position.count;
  return Array(count / 3).fill(3).join(", ");
}
function buildMeshVertexIndices$1(geometry) {
  const index = geometry.index;
  const array = [];
  if (index !== null) {
    for (let i = 0; i < index.count; i++) {
      array.push(index.getX(i));
    }
  } else {
    const length = geometry.attributes.position.count;
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
  }
  return array.join(", ");
}
function buildVector3Array$1(attribute, count) {
  if (attribute === void 0) {
    console.warn("USDZExporter: Normals missing.");
    return Array(count).fill("(0, 0, 0)").join(", ");
  }
  const array = [];
  for (let i = 0; i < attribute.count; i++) {
    const x = attribute.getX(i);
    const y2 = attribute.getY(i);
    const z2 = attribute.getZ(i);
    array.push(
      `(${x.toPrecision(PRECISION$1)}, ${y2.toPrecision(
        PRECISION$1
      )}, ${z2.toPrecision(PRECISION$1)})`
    );
  }
  return array.join(", ");
}
function buildVector2Array$1(attribute, count) {
  if (attribute === void 0) {
    console.warn("USDZExporter: UVs missing.");
    return Array(count).fill("(0, 0)").join(", ");
  }
  const array = [];
  for (let i = 0; i < attribute.count; i++) {
    const x = attribute.getX(i);
    const y2 = attribute.getY(i);
    array.push(
      `(${x.toPrecision(PRECISION$1)}, ${1 - y2.toPrecision(PRECISION$1)})`
    );
  }
  return array.join(", ");
}
function buildMaterials$1(materials, textures) {
  const array = [];
  for (const uuid in materials) {
    const material = materials[uuid];
    array.push(buildMaterial$1(material, textures));
  }
  return `def "Materials"
{
${array.join("")}
}

`;
}
function buildMaterial$1(material, textures) {
  const pad = "            ";
  const inputs = [];
  const samplers = [];
  function buildTexture(texture, mapType, color) {
    const id = texture.id + (color ? "_" + color.getHexString() : "");
    const isRGBA = texture.format === 1023;
    textures[id] = texture;
    return `
        def Shader "Transform2d_${mapType}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${material.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${buildVector2$1(texture.repeat)}
            float2 inputs:translation = ${buildVector2$1(texture.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${texture.id}_${mapType}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${id}.${isRGBA ? "png" : "jpg"}@
            float2 inputs:st.connect = </Materials/Material_${material.id}/Transform2d_${mapType}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
            ${material.transparent || material.alphaTest > 0 ? "float outputs:a" : ""}
        }`;
  }
  if (material.side === DoubleSide) {
    console.warn(
      "THREE.USDZExporter: USDZ does not support double sided materials",
      material
    );
  }
  if (material.map !== null) {
    inputs.push(
      `${pad}color3f inputs:diffuseColor.connect = </Materials/Material_${material.id}/Texture_${material.map.id}_diffuse.outputs:rgb>`
    );
    if (material.transparent) {
      inputs.push(
        `${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.map.id}_diffuse.outputs:a>`
      );
    } else if (material.alphaTest > 0) {
      inputs.push(
        `${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.map.id}_diffuse.outputs:a>`
      );
      inputs.push(
        `${pad}float inputs:opacityThreshold = ${material.alphaTest}`
      );
    }
    samplers.push(buildTexture(material.map, "diffuse", material.color));
  } else {
    inputs.push(
      `${pad}color3f inputs:diffuseColor = ${buildColor$1(material.color)}`
    );
  }
  if (material.emissiveMap !== null) {
    inputs.push(
      `${pad}color3f inputs:emissiveColor.connect = </Materials/Material_${material.id}/Texture_${material.emissiveMap.id}_emissive.outputs:rgb>`
    );
    samplers.push(buildTexture(material.emissiveMap, "emissive"));
  } else if (material.emissive.getHex() > 0) {
    inputs.push(
      `${pad}color3f inputs:emissiveColor = ${buildColor$1(material.emissive)}`
    );
  }
  if (material.normalMap !== null) {
    inputs.push(
      `${pad}normal3f inputs:normal.connect = </Materials/Material_${material.id}/Texture_${material.normalMap.id}_normal.outputs:rgb>`
    );
    samplers.push(buildTexture(material.normalMap, "normal"));
  }
  if (material.aoMap !== null) {
    inputs.push(
      `${pad}float inputs:occlusion.connect = </Materials/Material_${material.id}/Texture_${material.aoMap.id}_occlusion.outputs:r>`
    );
    samplers.push(buildTexture(material.aoMap, "occlusion"));
  }
  if (material.roughnessMap !== null && material.roughness === 1) {
    inputs.push(
      `${pad}float inputs:roughness.connect = </Materials/Material_${material.id}/Texture_${material.roughnessMap.id}_roughness.outputs:g>`
    );
    samplers.push(buildTexture(material.roughnessMap, "roughness"));
  } else {
    inputs.push(`${pad}float inputs:roughness = ${material.roughness}`);
  }
  if (material.metalnessMap !== null && material.metalness === 1) {
    inputs.push(
      `${pad}float inputs:metallic.connect = </Materials/Material_${material.id}/Texture_${material.metalnessMap.id}_metallic.outputs:b>`
    );
    samplers.push(buildTexture(material.metalnessMap, "metallic"));
  } else {
    inputs.push(`${pad}float inputs:metallic = ${material.metalness}`);
  }
  if (material.alphaMap !== null) {
    inputs.push(
      `${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.alphaMap.id}_opacity.outputs:r>`
    );
    inputs.push(`${pad}float inputs:opacityThreshold = 0.0001`);
    samplers.push(buildTexture(material.alphaMap, "opacity"));
  } else {
    inputs.push(`${pad}float inputs:opacity = ${material.opacity}`);
  }
  if (material.isMeshPhysicalMaterial) {
    inputs.push(`${pad}float inputs:clearcoat = ${material.clearcoat}`);
    inputs.push(
      `${pad}float inputs:clearcoatRoughness = ${material.clearcoatRoughness}`
    );
    inputs.push(`${pad}float inputs:ior = ${material.ior}`);
  }
  return `
    def Material "Material_${material.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${inputs.join("\n")}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${material.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${material.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${samplers.join("\n")}

    }
`;
}
function buildColor$1(color) {
  return `(${color.r}, ${color.g}, ${color.b})`;
}
function buildVector2$1(vector) {
  return `(${vector.x}, ${vector.y})`;
}
function buildCamera$1(camera2) {
  const name = camera2.name ? camera2.name : "Camera_" + camera2.id;
  const transform = buildMatrix$1(camera2.matrixWorld);
  if (camera2.matrixWorld.determinant() < 0) {
    console.warn(
      "THREE.USDZExporter: USDZ does not support negative scales",
      camera2
    );
  }
  if (camera2.isOrthographicCamera) {
    return `def Camera "${name}"
		{
			matrix4d xformOp:transform = ${transform}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${camera2.near.toPrecision(
      PRECISION$1
    )}, ${camera2.far.toPrecision(PRECISION$1)})
			float horizontalAperture = ${((Math.abs(camera2.left) + Math.abs(camera2.right)) * 10).toPrecision(PRECISION$1)}
			float verticalAperture = ${((Math.abs(camera2.top) + Math.abs(camera2.bottom)) * 10).toPrecision(PRECISION$1)}
			token projection = "orthographic"
		}
	
	`;
  } else {
    return `def Camera "${name}"
		{
			matrix4d xformOp:transform = ${transform}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${camera2.near.toPrecision(
      PRECISION$1
    )}, ${camera2.far.toPrecision(PRECISION$1)})
			float focalLength = ${camera2.getFocalLength().toPrecision(PRECISION$1)}
			float focusDistance = ${camera2.focus.toPrecision(PRECISION$1)}
			float horizontalAperture = ${camera2.getFilmWidth().toPrecision(PRECISION$1)}
			token projection = "perspective"
			float verticalAperture = ${camera2.getFilmHeight().toPrecision(PRECISION$1)}
		}
	
	`;
  }
}
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const enumerationDeserializer = (allowedNames) => (valueString) => {
  try {
    const expressions = parseExpressions(valueString);
    const names = (expressions.length ? expressions[0].terms : []).filter((valueNode) => valueNode && valueNode.type === "ident").map((valueNode) => valueNode.value).filter((name) => allowedNames.indexOf(name) > -1);
    const result = /* @__PURE__ */ new Set();
    for (const name of names) {
      result.add(name);
    }
    return result;
  } catch (_error) {
  }
  return /* @__PURE__ */ new Set();
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$2 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
let isWebXRBlocked = false;
let isSceneViewerBlocked = false;
const noArViewerSigil = "#model-viewer-no-ar-fallback";
const deserializeARModes = enumerationDeserializer([
  "quick-look",
  "scene-viewer",
  "webxr",
  "none"
]);
const DEFAULT_AR_MODES = "webxr scene-viewer quick-look";
const ARMode = {
  QUICK_LOOK: "quick-look",
  SCENE_VIEWER: "scene-viewer",
  WEBXR: "webxr",
  NONE: "none"
};
const $arButtonContainer = Symbol("arButtonContainer");
const $enterARWithWebXR = Symbol("enterARWithWebXR");
const $openSceneViewer = Symbol("openSceneViewer");
const $openIOSARQuickLook = Symbol("openIOSARQuickLook");
const $canActivateAR = Symbol("canActivateAR");
const $arMode = Symbol("arMode");
const $arModes = Symbol("arModes");
const $arAnchor = Symbol("arAnchor");
const $preload = Symbol("preload");
const $onARButtonContainerClick = Symbol("onARButtonContainerClick");
const $onARStatus = Symbol("onARStatus");
const $onARTracking = Symbol("onARTracking");
const $onARTap = Symbol("onARTap");
const $selectARMode = Symbol("selectARMode");
const $triggerLoad = Symbol("triggerLoad");
const ARMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _j2, _k2;
  class ARModelViewerElement extends ModelViewerElement2 {
    constructor() {
      super(...arguments);
      this.ar = false;
      this.arScale = "auto";
      this.arPlacement = "floor";
      this.arModes = DEFAULT_AR_MODES;
      this.iosSrc = null;
      this.xrEnvironment = false;
      this[_a2] = false;
      this[_b2] = this.shadowRoot.querySelector(".ar-button");
      this[_c2] = document.createElement("a");
      this[_d2] = /* @__PURE__ */ new Set();
      this[_e2] = ARMode.NONE;
      this[_f2] = false;
      this[_g2] = (event) => {
        event.preventDefault();
        this.activateAR();
      };
      this[_h2] = ({ status }) => {
        if (status === ARStatus.NOT_PRESENTING || this[$renderer].arRenderer.presentedScene === this[$scene]) {
          this.setAttribute("ar-status", status);
          this.dispatchEvent(
            new CustomEvent("ar-status", { detail: { status } })
          );
          if (status === ARStatus.NOT_PRESENTING) {
            this.removeAttribute("ar-tracking");
          } else if (status === ARStatus.SESSION_STARTED) {
            this.setAttribute("ar-tracking", ARTracking.TRACKING);
          }
        }
      };
      this[_j2] = ({ status }) => {
        this.setAttribute("ar-tracking", status);
        this.dispatchEvent(
          new CustomEvent("ar-tracking", { detail: { status } })
        );
      };
      this[_k2] = (event) => {
        if (event.data == "_apple_ar_quicklook_button_tapped") {
          this.dispatchEvent(new CustomEvent("quick-look-button-tapped"));
        }
      };
    }
    get canActivateAR() {
      return this[$arMode] !== ARMode.NONE;
    }
    connectedCallback() {
      super.connectedCallback();
      this[$renderer].arRenderer.addEventListener("status", this[$onARStatus]);
      this.setAttribute("ar-status", ARStatus.NOT_PRESENTING);
      this[$renderer].arRenderer.addEventListener(
        "tracking",
        this[$onARTracking]
      );
      this[$arAnchor].addEventListener("message", this[$onARTap]);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this[$renderer].arRenderer.removeEventListener(
        "status",
        this[$onARStatus]
      );
      this[$renderer].arRenderer.removeEventListener(
        "tracking",
        this[$onARTracking]
      );
      this[$arAnchor].removeEventListener("message", this[$onARTap]);
    }
    update(changedProperties) {
      super.update(changedProperties);
      if (changedProperties.has("arScale")) {
        this[$scene].canScale = this.arScale !== "fixed";
      }
      if (changedProperties.has("arPlacement")) {
        this[$scene].updateShadow();
        this[$needsRender]();
      }
      if (changedProperties.has("arModes")) {
        this[$arModes] = deserializeARModes(this.arModes);
      }
      if (changedProperties.has("ar") || changedProperties.has("arModes") || changedProperties.has("src") || changedProperties.has("iosSrc")) {
        this[$selectARMode]();
      }
    }
    activateAR() {
      return __async$2(this, null, function* () {
        switch (this[$arMode]) {
          case ARMode.QUICK_LOOK:
            this[$openIOSARQuickLook]();
            break;
          case ARMode.WEBXR:
            yield this[$enterARWithWebXR]();
            break;
          case ARMode.SCENE_VIEWER:
            this[$openSceneViewer]();
            break;
          default:
            console.warn(
              "No AR Mode can be activated. This is probably due to missing configuration or device capabilities"
            );
            break;
        }
      });
    }
    [(_a2 = $canActivateAR, _b2 = $arButtonContainer, _c2 = $arAnchor, _d2 = $arModes, _e2 = $arMode, _f2 = $preload, _g2 = $onARButtonContainerClick, _h2 = $onARStatus, _j2 = $onARTracking, _k2 = $onARTap, $selectARMode)]() {
      return __async$2(this, null, function* () {
        let arMode = ARMode.NONE;
        if (this.ar) {
          if (this.src != null) {
            for (const value of this[$arModes]) {
              if (value === "webxr" && IS_WEBXR_AR_CANDIDATE && !isWebXRBlocked && (yield this[$renderer].arRenderer.supportsPresentation())) {
                arMode = ARMode.WEBXR;
                break;
              }
              if (value === "scene-viewer" && IS_SCENEVIEWER_CANDIDATE && !isSceneViewerBlocked) {
                arMode = ARMode.SCENE_VIEWER;
                break;
              }
              if (value === "quick-look" && IS_AR_QUICKLOOK_CANDIDATE) {
                arMode = ARMode.QUICK_LOOK;
                break;
              }
            }
          }
          if (arMode === ARMode.NONE && this.iosSrc != null && IS_AR_QUICKLOOK_CANDIDATE) {
            arMode = ARMode.QUICK_LOOK;
          }
        }
        if (arMode !== ARMode.NONE) {
          this[$arButtonContainer].classList.add("enabled");
          this[$arButtonContainer].addEventListener(
            "click",
            this[$onARButtonContainerClick]
          );
        } else if (this[$arButtonContainer].classList.contains("enabled")) {
          this[$arButtonContainer].removeEventListener(
            "click",
            this[$onARButtonContainerClick]
          );
          this[$arButtonContainer].classList.remove("enabled");
          const status = ARStatus.FAILED;
          this.setAttribute("ar-status", status);
          this.dispatchEvent(
            new CustomEvent("ar-status", { detail: { status } })
          );
        }
        this[$arMode] = arMode;
      });
    }
    [$enterARWithWebXR]() {
      return __async$2(this, null, function* () {
        console.log("Attempting to present in AR with WebXR...");
        yield this[$triggerLoad]();
        try {
          this[$arButtonContainer].removeEventListener(
            "click",
            this[$onARButtonContainerClick]
          );
          const { arRenderer } = this[$renderer];
          arRenderer.placeOnWall = this.arPlacement === "wall";
          yield arRenderer.present(this[$scene], this.xrEnvironment);
        } catch (error) {
          console.warn("Error while trying to present in AR with WebXR");
          console.error(error);
          yield this[$renderer].arRenderer.stopPresenting();
          isWebXRBlocked = true;
          console.warn("Falling back to next ar-mode");
          yield this[$selectARMode]();
          this.activateAR();
        } finally {
          this[$selectARMode]();
        }
      });
    }
    [$triggerLoad]() {
      return __async$2(this, null, function* () {
        if (!this.loaded) {
          this[$preload] = true;
          this[$updateSource]();
          yield waitForEvent(this, "load");
          this[$preload] = false;
        }
      });
    }
    [$shouldAttemptPreload]() {
      return super[$shouldAttemptPreload]() || this[$preload];
    }
    [$openSceneViewer]() {
      const location = self.location.toString();
      const locationUrl = new URL(location);
      const modelUrl = new URL(this.src, location);
      if (modelUrl.hash)
        modelUrl.hash = "";
      const params = new URLSearchParams(modelUrl.search);
      locationUrl.hash = noArViewerSigil;
      params.set("mode", "ar_preferred");
      if (!params.has("disable_occlusion")) {
        params.set("disable_occlusion", "true");
      }
      if (this.arScale === "fixed") {
        params.set("resizable", "false");
      }
      if (this.arPlacement === "wall") {
        params.set("enable_vertical_placement", "true");
      }
      if (params.has("sound")) {
        const soundUrl = new URL(params.get("sound"), location);
        params.set("sound", soundUrl.toString());
      }
      if (params.has("link")) {
        const linkUrl = new URL(params.get("link"), location);
        params.set("link", linkUrl.toString());
      }
      const intent = `intent://arvr.google.com/scene-viewer/1.0?${params.toString() + "&file=" + encodeURIComponent(modelUrl.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(
        locationUrl.toString()
      )};end;`;
      const undoHashChange = () => {
        if (self.location.hash === noArViewerSigil) {
          isSceneViewerBlocked = true;
          self.history.back();
          console.warn("Error while trying to present in AR with Scene Viewer");
          console.warn("Falling back to next ar-mode");
          this[$selectARMode]();
        }
      };
      self.addEventListener("hashchange", undoHashChange, { once: true });
      this[$arAnchor].setAttribute("href", intent);
      console.log("Attempting to present in AR with Scene Viewer...");
      this[$arAnchor].click();
    }
    [$openIOSARQuickLook]() {
      return __async$2(this, null, function* () {
        const generateUsdz = !this.iosSrc;
        this[$arButtonContainer].classList.remove("enabled");
        const objectURL = generateUsdz ? yield this.prepareUSDZ() : this.iosSrc;
        const modelUrl = new URL(objectURL, self.location.toString());
        if (generateUsdz) {
          const location = self.location.toString();
          const locationUrl = new URL(location);
          const srcUrl = new URL(this.src, locationUrl);
          if (srcUrl.hash) {
            modelUrl.hash = srcUrl.hash;
          }
        }
        if (this.arScale === "fixed") {
          if (modelUrl.hash) {
            modelUrl.hash += "&";
          }
          modelUrl.hash += "allowsContentScaling=0";
        }
        const anchor = this[$arAnchor];
        anchor.setAttribute("rel", "ar");
        const img = document.createElement("img");
        anchor.appendChild(img);
        anchor.setAttribute("href", modelUrl.toString());
        if (generateUsdz) {
          anchor.setAttribute("download", "model.usdz");
        }
        anchor.style.display = "none";
        if (!anchor.isConnected)
          this.shadowRoot.appendChild(anchor);
        console.log("Attempting to present in AR with Quick Look...");
        anchor.click();
        anchor.removeChild(img);
        if (generateUsdz) {
          URL.revokeObjectURL(objectURL);
        }
        this[$arButtonContainer].classList.add("enabled");
      });
    }
    prepareUSDZ() {
      return __async$2(this, null, function* () {
        const updateSourceProgress = this[$progressTracker].beginActivity();
        yield this[$triggerLoad]();
        const { model, shadow } = this[$scene];
        if (model == null) {
          return "";
        }
        let visible = false;
        if (shadow != null) {
          visible = shadow.visible;
          shadow.visible = false;
        }
        updateSourceProgress(0.2);
        const exporter = new USDZExporter$1();
        const arraybuffer = yield exporter.parse(model);
        const blob = new Blob([arraybuffer], {
          type: "model/vnd.usdz+zip"
        });
        const url = URL.createObjectURL(blob);
        updateSourceProgress(1);
        if (shadow != null) {
          shadow.visible = visible;
        }
        return url;
      });
    }
  }
  __decorate$2(
    [e$3({ type: Boolean, attribute: "ar" })],
    ARModelViewerElement.prototype,
    "ar",
    void 0
  );
  __decorate$2(
    [e$3({ type: String, attribute: "ar-scale" })],
    ARModelViewerElement.prototype,
    "arScale",
    void 0
  );
  __decorate$2(
    [e$3({ type: String, attribute: "ar-placement" })],
    ARModelViewerElement.prototype,
    "arPlacement",
    void 0
  );
  __decorate$2(
    [e$3({ type: String, attribute: "ar-modes" })],
    ARModelViewerElement.prototype,
    "arModes",
    void 0
  );
  __decorate$2(
    [e$3({ type: String, attribute: "ios-src" })],
    ARModelViewerElement.prototype,
    "iosSrc",
    void 0
  );
  __decorate$2(
    [e$3({ type: Boolean, attribute: "xr-environment" })],
    ARModelViewerElement.prototype,
    "xrEnvironment",
    void 0
  );
  return ARModelViewerElement;
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate$1 = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
const PROGRESS_BAR_UPDATE_THRESHOLD = 100;
const DEFAULT_DRACO_DECODER_LOCATION = "https://www.gstatic.com/draco/versioned/decoders/1.5.6/";
const DEFAULT_KTX2_TRANSCODER_LOCATION = "https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";
const DEFAULT_LOTTIE_LOADER_LOCATION = "https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js";
const RevealStrategy = {
  AUTO: "auto",
  MANUAL: "manual"
};
const LoadingStrategy = {
  AUTO: "auto",
  LAZY: "lazy",
  EAGER: "eager"
};
const $defaultProgressBarElement = Symbol("defaultProgressBarElement");
const $posterContainerElement = Symbol("posterContainerElement");
const $defaultPosterElement = Symbol("defaultPosterElement");
const $shouldDismissPoster = Symbol("shouldDismissPoster");
const $hidePoster = Symbol("hidePoster");
const $modelIsRevealed = Symbol("modelIsRevealed");
const $updateProgressBar = Symbol("updateProgressBar");
const $ariaLabelCallToAction = Symbol("ariaLabelCallToAction");
const $onProgress = Symbol("onProgress");
const LoadingMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
  class LoadingModelViewerElement extends ModelViewerElement2 {
    constructor(...args) {
      super(...args);
      this.poster = null;
      this.reveal = RevealStrategy.AUTO;
      this.loading = LoadingStrategy.AUTO;
      this[_a2] = false;
      this[_b2] = false;
      this[_c2] = this.shadowRoot.querySelector(".slot.poster");
      this[_d2] = this.shadowRoot.querySelector("#default-poster");
      this[_e2] = this.shadowRoot.querySelector("#default-progress-bar > .bar");
      this[_f2] = this[$defaultPosterElement].getAttribute("aria-label");
      this[_g2] = throttle((progress) => {
        const parentNode = this[$defaultProgressBarElement].parentNode;
        requestAnimationFrame(() => {
          this[$defaultProgressBarElement].style.transform = `scaleX(${progress})`;
          if (progress === 0) {
            parentNode.removeChild(this[$defaultProgressBarElement]);
            parentNode.appendChild(this[$defaultProgressBarElement]);
          }
          if (progress === 1) {
            this[$defaultProgressBarElement].classList.add("hide");
          } else {
            this[$defaultProgressBarElement].classList.remove("hide");
          }
        });
      }, PROGRESS_BAR_UPDATE_THRESHOLD);
      this[_h2] = (event) => {
        const progress = event.detail.totalProgress;
        if (progress === 1) {
          this[$updateProgressBar].flush();
          if (this.loaded && (this[$shouldDismissPoster] || this.reveal === RevealStrategy.AUTO)) {
            this[$hidePoster]();
          }
        }
        this[$updateProgressBar](progress);
        this.dispatchEvent(
          new CustomEvent("progress", { detail: { totalProgress: progress } })
        );
      };
      const ModelViewerElement3 = self.ModelViewerElement || {};
      const dracoDecoderLocation2 = ModelViewerElement3.dracoDecoderLocation || DEFAULT_DRACO_DECODER_LOCATION;
      CachingGLTFLoader.setDRACODecoderLocation(dracoDecoderLocation2);
      const ktx2TranscoderLocation2 = ModelViewerElement3.ktx2TranscoderLocation || DEFAULT_KTX2_TRANSCODER_LOCATION;
      CachingGLTFLoader.setKTX2TranscoderLocation(ktx2TranscoderLocation2);
      if (ModelViewerElement3.meshoptDecoderLocation) {
        CachingGLTFLoader.setMeshoptDecoderLocation(
          ModelViewerElement3.meshoptDecoderLocation
        );
      }
      const lottieLoaderLocation = ModelViewerElement3.lottieLoaderLocation || DEFAULT_LOTTIE_LOADER_LOCATION;
      Renderer.singleton.textureUtils.lottieLoaderUrl = lottieLoaderLocation;
    }
    static set dracoDecoderLocation(value) {
      CachingGLTFLoader.setDRACODecoderLocation(value);
    }
    static get dracoDecoderLocation() {
      return CachingGLTFLoader.getDRACODecoderLocation();
    }
    static set ktx2TranscoderLocation(value) {
      CachingGLTFLoader.setKTX2TranscoderLocation(value);
    }
    static get ktx2TranscoderLocation() {
      return CachingGLTFLoader.getKTX2TranscoderLocation();
    }
    static set meshoptDecoderLocation(value) {
      CachingGLTFLoader.setMeshoptDecoderLocation(value);
    }
    static get meshoptDecoderLocation() {
      return CachingGLTFLoader.getMeshoptDecoderLocation();
    }
    static set lottieLoaderLocation(value) {
      Renderer.singleton.textureUtils.lottieLoaderUrl = value;
    }
    static get lottieLoaderLocation() {
      return Renderer.singleton.textureUtils.lottieLoaderUrl;
    }
    static mapURLs(callback) {
      Renderer.singleton.loader[$loader].manager.setURLModifier(callback);
    }
    dismissPoster() {
      if (this.loaded) {
        this[$hidePoster]();
      } else {
        this[$shouldDismissPoster] = true;
        this[$updateSource]();
      }
    }
    showPoster() {
      const posterContainerElement = this[$posterContainerElement];
      if (posterContainerElement.classList.contains("show")) {
        return;
      }
      posterContainerElement.classList.add("show");
      this[$userInputElement].classList.remove("show");
      const defaultPosterElement = this[$defaultPosterElement];
      defaultPosterElement.removeAttribute("tabindex");
      defaultPosterElement.removeAttribute("aria-hidden");
      const oldVisibility = this.modelIsVisible;
      this[$modelIsRevealed] = false;
      this[$announceModelVisibility](oldVisibility);
    }
    getDimensions() {
      return toVector3D(this[$scene].size);
    }
    getBoundingBoxCenter() {
      return toVector3D(this[$scene].boundingBox.getCenter(new Vector3()));
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.loaded) {
        this.showPoster();
      }
      this[$progressTracker].addEventListener("progress", this[$onProgress]);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this[$progressTracker].removeEventListener("progress", this[$onProgress]);
    }
    updated(changedProperties) {
      return __async$2(this, null, function* () {
        __superGet(LoadingModelViewerElement.prototype, this, "updated").call(this, changedProperties);
        if (changedProperties.has("poster") && this.poster != null) {
          this[$defaultPosterElement].style.backgroundImage = `url(${this.poster})`;
        }
        if (changedProperties.has("alt")) {
          this[$defaultPosterElement].setAttribute(
            "aria-label",
            this[$altDefaulted]
          );
        }
        if (changedProperties.has("reveal") || changedProperties.has("loading")) {
          this[$updateSource]();
        }
      });
    }
    [(_a2 = $modelIsRevealed, _b2 = $shouldDismissPoster, _c2 = $posterContainerElement, _d2 = $defaultPosterElement, _e2 = $defaultProgressBarElement, _f2 = $ariaLabelCallToAction, _g2 = $updateProgressBar, _h2 = $onProgress, $shouldAttemptPreload)]() {
      return !!this.src && (this[$shouldDismissPoster] || this.loading === LoadingStrategy.EAGER || this.reveal === RevealStrategy.AUTO && this[$isElementInViewport]);
    }
    [$hidePoster]() {
      this[$shouldDismissPoster] = false;
      const posterContainerElement = this[$posterContainerElement];
      if (!posterContainerElement.classList.contains("show")) {
        return;
      }
      posterContainerElement.classList.remove("show");
      this[$userInputElement].classList.add("show");
      const oldVisibility = this.modelIsVisible;
      this[$modelIsRevealed] = true;
      this[$announceModelVisibility](oldVisibility);
      const root = this.getRootNode();
      if (root && root.activeElement === this) {
        this[$userInputElement].focus();
      }
      const defaultPosterElement = this[$defaultPosterElement];
      defaultPosterElement.setAttribute("aria-hidden", "true");
      defaultPosterElement.tabIndex = -1;
      this.dispatchEvent(new CustomEvent("poster-dismissed"));
    }
    [$getModelIsVisible]() {
      return super[$getModelIsVisible]() && this[$modelIsRevealed];
    }
  }
  __decorate$1(
    [e$3({ type: String })],
    LoadingModelViewerElement.prototype,
    "poster",
    void 0
  );
  __decorate$1(
    [e$3({ type: String })],
    LoadingModelViewerElement.prototype,
    "reveal",
    void 0
  );
  __decorate$1(
    [e$3({ type: String })],
    LoadingModelViewerElement.prototype,
    "loading",
    void 0
  );
  return LoadingModelViewerElement;
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = function(decorators, target2, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d2;
  if (typeof Reflect === "object" && false)
    r2 = (void 0)(decorators, target2, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d2 = decorators[i])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target2, key, r2) : d2(target2, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target2, key, r2), r2;
};
const DEFAULT_ROTATION_SPEED = Math.PI / 32;
const AUTO_ROTATE_DELAY_DEFAULT = 3e3;
const rotationRateIntrinsics = {
  basis: [degreesToRadians(numberNode(DEFAULT_ROTATION_SPEED, "rad"))],
  keywords: { auto: [null] }
};
const $autoRotateStartTime = Symbol("autoRotateStartTime");
const $radiansPerSecond = Symbol("radiansPerSecond");
const $syncRotationRate = Symbol("syncRotationRate");
const $onCameraChange = Symbol("onCameraChange");
const StagingMixin = (ModelViewerElement2) => {
  var _a2, _b2, _c2;
  class StagingModelViewerElement extends ModelViewerElement2 {
    constructor() {
      super(...arguments);
      this.autoRotate = false;
      this.autoRotateDelay = AUTO_ROTATE_DELAY_DEFAULT;
      this.rotationPerSecond = "auto";
      this[_a2] = performance.now();
      this[_b2] = 0;
      this[_c2] = (event) => {
        if (!this.autoRotate) {
          return;
        }
        if (event.detail.source === "user-interaction") {
          this[$autoRotateStartTime] = performance.now();
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("camera-change", this[$onCameraChange]);
      this[$autoRotateStartTime] = performance.now();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("camera-change", this[$onCameraChange]);
      this[$autoRotateStartTime] = performance.now();
    }
    updated(changedProperties) {
      super.updated(changedProperties);
      if (changedProperties.has("autoRotate")) {
        this[$autoRotateStartTime] = performance.now();
      }
    }
    [(_a2 = $autoRotateStartTime, _b2 = $radiansPerSecond, $syncRotationRate)](style2) {
      this[$radiansPerSecond] = style2[0];
    }
    [$tick](time, delta) {
      super[$tick](time, delta);
      if (!this.autoRotate || !this[$getModelIsVisible]() || this[$renderer].isPresenting) {
        return;
      }
      const rotationDelta = Math.min(
        delta,
        time - this[$autoRotateStartTime] - this.autoRotateDelay
      );
      if (rotationDelta > 0) {
        this[$scene].yaw = this.turntableRotation + this[$radiansPerSecond] * rotationDelta * 1e-3;
      }
    }
    get turntableRotation() {
      return this[$scene].yaw;
    }
    resetTurntableRotation(theta = 0) {
      this[$scene].yaw = theta;
    }
  }
  _c2 = $onCameraChange;
  __decorate(
    [e$3({ type: Boolean, attribute: "auto-rotate" })],
    StagingModelViewerElement.prototype,
    "autoRotate",
    void 0
  );
  __decorate(
    [e$3({ type: Number, attribute: "auto-rotate-delay" })],
    StagingModelViewerElement.prototype,
    "autoRotateDelay",
    void 0
  );
  __decorate(
    [
      style({
        intrinsics: rotationRateIntrinsics,
        updateHandler: $syncRotationRate
      }),
      e$3({ type: String, attribute: "rotation-per-second" })
    ],
    StagingModelViewerElement.prototype,
    "rotationPerSecond",
    void 0
  );
  return StagingModelViewerElement;
};
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ModelViewerElement = AnnotationMixin(
  SceneGraphMixin(
    StagingMixin(
      EnvironmentMixin(
        ControlsMixin(
          ARMixin(LoadingMixin(AnimationMixin(ModelViewerElementBase)))
        )
      )
    )
  )
);
customElements.define("model-viewer", ModelViewerElement);

var __async$1 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
class USDZExporter {
  parse(_0) {
    return __async$1(this, arguments, function* (scene, options = {}) {
      options = Object.assign({
        ar: {
          anchoring: { type: "plane" },
          planeAnchoring: { alignment: "horizontal" }
        },
        quickLookCompatible: false
      }, options);
      const files = {};
      const modelFileName = "model.usda";
      files[modelFileName] = null;
      let output = buildHeader();
      output += buildSceneStart(options);
      const materials = {};
      const textures = {};
      scene.traverseVisible((object) => {
        if (object.isMesh) {
          const geometry = object.geometry;
          const material = object.material;
          if (material.isMeshStandardMaterial) {
            const geometryFileName = "geometries/Geometry_" + geometry.id + ".usda";
            if (!(geometryFileName in files)) {
              const meshObject = buildMeshObject(geometry);
              files[geometryFileName] = buildUSDFileAsString(meshObject);
            }
            if (!(material.uuid in materials)) {
              materials[material.uuid] = material;
            }
            output += buildXform(object, geometry, material);
          } else {
            console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)", object);
          }
        } else if (object.isCamera) {
          output += buildCamera(object);
        }
      });
      output += buildSceneEnd();
      output += buildMaterials(materials, textures, options.quickLookCompatible);
      files[modelFileName] = fflate.strToU8(output);
      output = null;
      for (const id in textures) {
        const texture = textures[id];
        const canvas = imageToCanvas(texture.image, texture.flipY);
        const blob = yield new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1));
        files[`textures/Texture_${id}.png`] = new Uint8Array(yield blob.arrayBuffer());
      }
      let offset = 0;
      for (const filename in files) {
        const file = files[filename];
        const headerSize = 34 + filename.length;
        offset += headerSize;
        const offsetMod64 = offset & 63;
        if (offsetMod64 !== 4) {
          const padLength = 64 - offsetMod64;
          const padding = new Uint8Array(padLength);
          files[filename] = [file, { extra: { 12345: padding } }];
        }
        offset = file.length;
      }
      return fflate.zipSync(files, { level: 0 });
    });
  }
}
function imageToCanvas(image, flipY) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && image instanceof OffscreenCanvas || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    if (flipY === true) {
      context.translate(0, canvas.height);
      context.scale(1, -1);
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  } else {
    throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.");
  }
}
const PRECISION = 7;
function buildHeader() {
  return `#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`;
}
function buildSceneStart(options) {
  return `def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${options.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${options.ar.planeAnchoring.alignment}"

`;
}
function buildSceneEnd() {
  return `
		}
	}
}

`;
}
function buildUSDFileAsString(dataToInsert) {
  let output = buildHeader();
  output += dataToInsert;
  return fflate.strToU8(output);
}
function buildXform(object, geometry, material) {
  const name = "Object_" + object.id;
  const transform = buildMatrix(object.matrixWorld);
  if (object.matrixWorld.determinant() < 0) {
    console.warn("THREE.USDZExporter: USDZ does not support negative scales", object);
  }
  return `def Xform "${name}" (
	prepend references = @./geometries/Geometry_${geometry.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${transform}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${material.id}>
}

`;
}
function buildMatrix(matrix) {
  const array = matrix.elements;
  return `( ${buildMatrixRow(array, 0)}, ${buildMatrixRow(array, 4)}, ${buildMatrixRow(array, 8)}, ${buildMatrixRow(array, 12)} )`;
}
function buildMatrixRow(array, offset) {
  return `(${array[offset + 0]}, ${array[offset + 1]}, ${array[offset + 2]}, ${array[offset + 3]})`;
}
function buildMeshObject(geometry) {
  const mesh = buildMesh(geometry);
  return `
def "Geometry"
{
${mesh}
}
`;
}
function buildMesh(geometry) {
  const name = "Geometry";
  const attributes = geometry.attributes;
  const count = attributes.position.count;
  return `
	def Mesh "${name}"
	{
		int[] faceVertexCounts = [${buildMeshVertexCount(geometry)}]
		int[] faceVertexIndices = [${buildMeshVertexIndices(geometry)}]
		normal3f[] normals = [${buildVector3Array(attributes.normal, count)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${buildVector3Array(attributes.position, count)}]
${buildPrimvars(attributes, count)}
		uniform token subdivisionScheme = "none"
	}
`;
}
function buildMeshVertexCount(geometry) {
  const count = geometry.index !== null ? geometry.index.count : geometry.attributes.position.count;
  return Array(count / 3).fill(3).join(", ");
}
function buildMeshVertexIndices(geometry) {
  const index = geometry.index;
  const array = [];
  if (index !== null) {
    for (let i = 0; i < index.count; i++) {
      array.push(index.getX(i));
    }
  } else {
    const length = geometry.attributes.position.count;
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
  }
  return array.join(", ");
}
function buildVector3Array(attribute, count) {
  if (attribute === void 0) {
    console.warn("USDZExporter: Normals missing.");
    return Array(count).fill("(0, 0, 0)").join(", ");
  }
  const array = [];
  for (let i = 0; i < attribute.count; i++) {
    const x = attribute.getX(i);
    const y = attribute.getY(i);
    const z = attribute.getZ(i);
    array.push(`(${x.toPrecision(PRECISION)}, ${y.toPrecision(PRECISION)}, ${z.toPrecision(PRECISION)})`);
  }
  return array.join(", ");
}
function buildVector2Array(attribute, count) {
  if (attribute === void 0) {
    console.warn("USDZExporter: UVs missing.");
    return Array(count).fill("(0, 0)").join(", ");
  }
  const array = [];
  for (let i = 0; i < attribute.count; i++) {
    const x = attribute.getX(i);
    const y = attribute.getY(i);
    array.push(`(${x.toPrecision(PRECISION)}, ${1 - y.toPrecision(PRECISION)})`);
  }
  return array.join(", ");
}
function buildPrimvars(attributes, count) {
  let string = "";
  for (let i = 0; i < 4; i++) {
    const id = i > 0 ? i : "";
    const attribute = attributes["uv" + id];
    if (attribute !== void 0) {
      string += `
		texCoord2f[] primvars:st${id} = [${buildVector2Array(attribute, count)}] (
			interpolation = "vertex"
		)`;
    }
  }
  return string;
}
function buildMaterials(materials, textures, quickLookCompatible = false) {
  const array = [];
  for (const uuid in materials) {
    const material = materials[uuid];
    array.push(buildMaterial(material, textures, quickLookCompatible));
  }
  return `def "Materials"
{
${array.join("")}
}

`;
}
function buildMaterial(material, textures, quickLookCompatible = false) {
  const pad = "			";
  const inputs = [];
  const samplers = [];
  function buildTexture(texture, mapType, color) {
    const id = texture.source.id + "_" + texture.flipY;
    textures[id] = texture;
    const uv = texture.channel > 0 ? "st" + texture.channel : "st";
    const WRAPPINGS = {
      1e3: "repeat",
      1001: "clamp",
      1002: "mirror"
    };
    const repeat = texture.repeat.clone();
    const offset = texture.offset.clone();
    const rotation = texture.rotation;
    const xRotationOffset = Math.sin(rotation);
    const yRotationOffset = Math.cos(rotation);
    offset.y = 1 - offset.y - repeat.y;
    if (quickLookCompatible) {
      offset.x = offset.x / repeat.x;
      offset.y = offset.y / repeat.y;
      offset.x += xRotationOffset / repeat.x;
      offset.y += yRotationOffset - 1;
    } else {
      offset.x += xRotationOffset * repeat.x;
      offset.y += (1 - yRotationOffset) * repeat.y;
    }
    return `
		def Shader "PrimvarReader_${mapType}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${uv}"
			float2 outputs:result
		}

		def Shader "Transform2d_${mapType}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${material.id}/PrimvarReader_${mapType}.outputs:result>
			float inputs:rotation = ${(rotation * (180 / Math.PI)).toFixed(PRECISION)}
			float2 inputs:scale = ${buildVector2(repeat)}
			float2 inputs:translation = ${buildVector2(offset)}
			float2 outputs:result
		}

		def Shader "Texture_${texture.id}_${mapType}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${id}.png@
			float2 inputs:st.connect = </Materials/Material_${material.id}/Transform2d_${mapType}.outputs:result>
			${color !== void 0 ? "float4 inputs:scale = " + buildColor4(color) : ""}
			token inputs:sourceColorSpace = "${texture.colorSpace === THREE.NoColorSpace ? "raw" : "sRGB"}"
			token inputs:wrapS = "${WRAPPINGS[texture.wrapS]}"
			token inputs:wrapT = "${WRAPPINGS[texture.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${material.transparent || material.alphaTest > 0 ? "float outputs:a" : ""}
		}`;
  }
  if (material.side === THREE.DoubleSide) {
    console.warn("THREE.USDZExporter: USDZ does not support double sided materials", material);
  }
  if (material.map !== null) {
    inputs.push(`${pad}color3f inputs:diffuseColor.connect = </Materials/Material_${material.id}/Texture_${material.map.id}_diffuse.outputs:rgb>`);
    if (material.transparent) {
      inputs.push(`${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.map.id}_diffuse.outputs:a>`);
    } else if (material.alphaTest > 0) {
      inputs.push(`${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.map.id}_diffuse.outputs:a>`);
      inputs.push(`${pad}float inputs:opacityThreshold = ${material.alphaTest}`);
    }
    samplers.push(buildTexture(material.map, "diffuse", material.color));
  } else {
    inputs.push(`${pad}color3f inputs:diffuseColor = ${buildColor(material.color)}`);
  }
  if (material.emissiveMap !== null) {
    inputs.push(`${pad}color3f inputs:emissiveColor.connect = </Materials/Material_${material.id}/Texture_${material.emissiveMap.id}_emissive.outputs:rgb>`);
    samplers.push(buildTexture(material.emissiveMap, "emissive"));
  } else if (material.emissive.getHex() > 0) {
    inputs.push(`${pad}color3f inputs:emissiveColor = ${buildColor(material.emissive)}`);
  }
  if (material.normalMap !== null) {
    inputs.push(`${pad}normal3f inputs:normal.connect = </Materials/Material_${material.id}/Texture_${material.normalMap.id}_normal.outputs:rgb>`);
    samplers.push(buildTexture(material.normalMap, "normal"));
  }
  if (material.aoMap !== null) {
    inputs.push(`${pad}float inputs:occlusion.connect = </Materials/Material_${material.id}/Texture_${material.aoMap.id}_occlusion.outputs:r>`);
    samplers.push(buildTexture(material.aoMap, "occlusion"));
  }
  if (material.roughnessMap !== null && material.roughness === 1) {
    inputs.push(`${pad}float inputs:roughness.connect = </Materials/Material_${material.id}/Texture_${material.roughnessMap.id}_roughness.outputs:g>`);
    samplers.push(buildTexture(material.roughnessMap, "roughness"));
  } else {
    inputs.push(`${pad}float inputs:roughness = ${material.roughness}`);
  }
  if (material.metalnessMap !== null && material.metalness === 1) {
    inputs.push(`${pad}float inputs:metallic.connect = </Materials/Material_${material.id}/Texture_${material.metalnessMap.id}_metallic.outputs:b>`);
    samplers.push(buildTexture(material.metalnessMap, "metallic"));
  } else {
    inputs.push(`${pad}float inputs:metallic = ${material.metalness}`);
  }
  if (material.alphaMap !== null) {
    inputs.push(`${pad}float inputs:opacity.connect = </Materials/Material_${material.id}/Texture_${material.alphaMap.id}_opacity.outputs:r>`);
    inputs.push(`${pad}float inputs:opacityThreshold = 0.0001`);
    samplers.push(buildTexture(material.alphaMap, "opacity"));
  } else {
    inputs.push(`${pad}float inputs:opacity = ${material.opacity}`);
  }
  if (material.isMeshPhysicalMaterial) {
    inputs.push(`${pad}float inputs:clearcoat = ${material.clearcoat}`);
    inputs.push(`${pad}float inputs:clearcoatRoughness = ${material.clearcoatRoughness}`);
    inputs.push(`${pad}float inputs:ior = ${material.ior}`);
  }
  return `
	def Material "Material_${material.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${inputs.join("\n")}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${material.id}/PreviewSurface.outputs:surface>

${samplers.join("\n")}

	}
`;
}
function buildColor(color) {
  return `(${color.r}, ${color.g}, ${color.b})`;
}
function buildColor4(color) {
  return `(${color.r}, ${color.g}, ${color.b}, 1.0)`;
}
function buildVector2(vector) {
  return `(${vector.x}, ${vector.y})`;
}
function buildCamera(camera) {
  const name = camera.name ? camera.name : "Camera_" + camera.id;
  const transform = buildMatrix(camera.matrixWorld);
  if (camera.matrixWorld.determinant() < 0) {
    console.warn("THREE.USDZExporter: USDZ does not support negative scales", camera);
  }
  if (camera.isOrthographicCamera) {
    return `def Camera "${name}"
		{
			matrix4d xformOp:transform = ${transform}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${camera.near.toPrecision(PRECISION)}, ${camera.far.toPrecision(PRECISION)})
			float horizontalAperture = ${((Math.abs(camera.left) + Math.abs(camera.right)) * 10).toPrecision(PRECISION)}
			float verticalAperture = ${((Math.abs(camera.top) + Math.abs(camera.bottom)) * 10).toPrecision(PRECISION)}
			token projection = "orthographic"
		}
	
	`;
  } else {
    return `def Camera "${name}"
		{
			matrix4d xformOp:transform = ${transform}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${camera.near.toPrecision(PRECISION)}, ${camera.far.toPrecision(PRECISION)})
			float focalLength = ${camera.getFocalLength().toPrecision(PRECISION)}
			float focusDistance = ${camera.focus.toPrecision(PRECISION)}
			float horizontalAperture = ${camera.getFilmWidth().toPrecision(PRECISION)}
			token projection = "perspective"
			float verticalAperture = ${camera.getFilmHeight().toPrecision(PRECISION)}
		}
	
	`;
  }
}

const sizeRatio = 64 / 256;
const logoSvg = `
<svg width="<WIDTH>px" height="<HEIGHT>px" viewBox="0 0 1024 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1.42378,0,0,-1.42378,37.8056,272.552)">
        <path d="M535.902,111.141L535.902,135.996L516.129,135.996L516.129,40.18L535.902,40.18L535.902,90.087C540.364,74.698 554.364,63.505 570.884,63.505C589.267,63.505 604.519,77.36 607.001,95.441L607.245,97.219L607.245,64.239L626.512,64.239L626.555,66.149C630.504,64.457 634.803,63.668 638.946,63.657C644.567,63.523 650.034,65.021 655.057,68.061L660.825,71.553L651.44,88.59L645.161,84.719C643.29,83.566 641.189,83.086 639.101,83.077C632.262,83.174 627.017,88.662 627.017,95.331L627.017,135.997L607.245,135.997L607.245,101.756L597.204,104.413L607.131,108.728L604.463,115.117C598.904,128.43 585.948,137.724 570.884,137.724C554.364,137.724 540.364,126.53 535.902,111.141ZM515.693,52.455C515.693,60.117 509.874,63.947 504.055,63.947C498.236,63.947 492.417,60.117 492.417,52.455C492.417,37.14 515.693,37.14 515.693,52.455ZM380.282,71.383L380.282,153.041C379.771,153.655 373.607,159.525 373.258,160.065L373.258,135.997L348.352,135.997L348.243,134.69C344.015,136.642 339.458,137.674 335.553,137.747L335.511,137.748C324.933,137.821 315.829,134.433 309.296,128.08C305.974,124.851 303.277,120.825 301.442,115.998L301.442,135.996L273.142,135.996L273.142,97.898C273.142,94.483 272.775,90.902 269.308,90.902C265.617,90.902 263.827,94.498 263.827,98.131L263.827,135.996L235.53,135.996L235.53,98.131C235.53,94.53 234.463,90.671 230.75,90.671C227.046,90.671 225.511,94.483 225.511,98.131L225.511,135.996L197.213,135.996L197.213,64.239L223.485,64.239L223.627,65.183C226.918,63.895 230.419,63.307 233.669,63.307C240.087,63.307 246.447,65.139 251.31,69.669C256.803,65.062 263.137,63.54 270.002,63.54C280.598,63.54 288.388,67.088 293.646,73.141C296.904,76.89 299.223,81.729 300.443,87.587C302.282,81.374 305.504,76.323 309.651,72.435C316.294,66.207 325.463,62.891 335.799,62.957C340.05,62.961 344.191,63.842 347.897,65.413L347.96,64.36L399.852,64.36L400.044,66C404.335,64.016 408.962,63.073 413.227,63.073C426.457,63.073 437.04,68.986 443.35,78.274L443.35,64.239L455.619,64.239L455.619,48.113L475.273,46.066L475.273,64.239L494.056,64.239L494.056,64.005L513.822,64.005L513.822,135.996L494.056,135.996L494.056,132.579L492.809,133.184C488.173,135.434 483.508,136.813 478.88,136.813C471.929,136.813 466.942,134.899 463.359,131.901C458.177,127.565 455.619,120.504 455.619,111.217L455.619,83.076L446.093,83.076C448.504,88.174 449.807,93.997 449.807,100.235C449.807,121.049 436.525,137.4 413.692,137.4C410.081,137.4 405.736,136.78 401.557,135.338L401.557,160.065L373.258,160.065C374.058,159.226 379.595,153.754 380.282,153.041L394.533,153.041L394.533,122.196C398.624,128.502 407.623,130.376 413.692,130.376C432.149,130.376 442.783,117.06 442.783,100.235C442.783,83.299 430.977,70.096 413.227,70.096C406.687,70.096 398.975,72.899 394.533,79.326L393.603,71.383L380.282,71.383ZM528.878,128.972L528.878,47.203L523.153,47.203L523.153,128.972L528.878,128.972ZM508.669,52.455C508.669,55.493 506.362,57.011 504.055,57.011C501.748,57.011 499.441,55.493 499.441,52.455C499.441,46.383 508.669,46.383 508.669,52.455ZM468.249,71.263L468.249,53.859L462.643,54.443L462.643,71.263L450.374,71.263L450.374,76.053L462.643,76.053L462.643,111.217C462.643,122.546 466.615,129.789 478.88,129.789C482.497,129.789 486.12,128.623 489.744,126.865L487.757,122.196C484.837,123.597 481.684,124.532 478.88,124.532C469.888,124.532 468.249,119.041 468.249,111.217L468.249,76.053L487.874,76.053L487.874,71.263L468.249,71.263ZM368.25,71.383L354.58,71.383L354.11,79.326C350.841,73.601 343.484,69.981 335.776,69.981C318.955,69.864 305.75,80.26 305.75,100.118C305.75,120.329 318.371,130.842 335.421,130.725C341.848,130.604 350.841,127.336 354.11,120.565L354.813,128.973L368.25,128.973L368.25,71.383ZM242.554,98.131L242.554,128.972L256.803,128.972L256.803,98.131C256.803,90.537 261.593,83.878 269.308,83.878C277.013,83.878 280.166,90.308 280.166,97.898L280.166,128.972L294.418,128.972L294.418,97.898C294.418,80.608 286.36,70.563 270.002,70.563C262.53,70.563 255.869,72.899 250.729,81.077C247.456,73.136 240.567,70.33 233.669,70.33C228.184,70.33 221.525,72.43 218.487,78.273L217.436,71.263L204.237,71.263L204.237,128.972L218.487,128.972L218.487,98.131C218.487,90.538 223.038,83.648 230.75,83.648C238.581,83.648 242.554,90.537 242.554,98.131ZM548.355,110.081C552.002,119.128 560.713,125.5 570.884,125.5C580.946,125.5 589.582,119.266 593.296,110.373L597.982,112.41C593.492,123.162 583.05,130.7 570.884,130.7C554.619,130.7 541.435,117.229 541.435,100.614C541.435,83.998 554.619,70.528 570.884,70.528C585.747,70.528 598.036,81.778 600.043,96.397L595.072,97.712L595.066,97.66L548.346,110.06C548.347,110.063 548.348,110.065 548.349,110.067C548.35,110.07 548.351,110.072 548.352,110.075L548.323,110.083L548.355,110.081ZM619.645,71.263L619.877,81.547C623.495,73.714 631.678,70.68 639.037,70.68C643.363,70.564 647.56,71.733 651.42,74.07L648.847,78.74C645.815,76.871 642.42,76.053 639.037,76.053C628.285,76.174 619.993,84.816 619.993,95.331L619.993,128.973L614.269,128.973L614.269,71.263L619.645,71.263ZM501.08,71.029L501.08,128.972L506.798,128.972L506.798,71.029L501.08,71.029ZM570.884,75.728C557.432,75.728 546.525,86.87 546.525,100.615C546.525,101.951 546.631,103.261 546.829,104.54L593.773,92.08C590.364,82.54 581.403,75.728 570.884,75.728ZM337.058,117.641C327.596,117.641 320.003,111.095 320.003,100.118C320.003,89.139 327.596,82.712 337.058,82.712C359.486,82.712 359.486,117.641 337.058,117.641ZM554.337,95.28L582.868,87.708C579.76,84.644 575.542,82.752 570.884,82.752C563.085,82.752 556.533,88.04 554.337,95.28ZM494.056,119.062L491.343,112.685L484.719,115.864C482.789,116.789 480.733,117.508 478.88,117.508C477.629,117.508 476.693,117.588 476.133,117.047C475.69,116.618 475.657,115.939 475.534,115.219C475.328,114.012 475.273,112.666 475.273,111.217L475.273,83.076L494.056,83.076L494.056,119.062ZM428.531,100.235C428.531,91.24 422.455,83.878 412.176,83.878C401.893,83.878 395.818,91.24 395.818,100.235C395.818,109.227 402.479,116.593 412.176,116.593C421.876,116.593 428.531,109.227 428.531,100.235ZM337.058,110.617C343.68,110.617 346.855,105.333 346.855,100.176C346.855,95.02 343.68,89.735 337.058,89.735C331.452,89.735 327.027,93.613 327.027,100.118C327.027,106.637 331.439,110.617 337.058,110.617ZM421.507,100.235C421.507,95.103 418.041,90.902 412.176,90.902C406.308,90.902 402.842,95.103 402.842,100.235C402.842,105.366 406.643,109.569 412.176,109.569C417.711,109.569 421.507,105.366 421.507,100.235ZM587.073,107.048L586.815,107.666C584.171,113.998 578.048,118.476 570.884,118.476C566.637,118.476 562.757,116.902 559.752,114.299L587.073,107.048Z" style="fill-opacity:0.3;"/>
    </g>
    <g transform="matrix(1.42378,0,0,-1.42378,28.8272,275.975)">
        <path d="M33.568,124.028C16.878,107.338 16.878,80.238 33.568,63.548L63.65,33.466C80.34,16.776 107.44,16.776 124.13,33.466L154.227,63.563C170.917,80.253 170.917,107.353 154.227,124.043L93.905,184.365L33.568,124.028ZM93.789,63.649L63.526,93.912L93.789,124.175L124.052,93.912L93.789,63.649Z" style="fill-opacity:0.3;"/>
        <path d="M28.601,128.994C9.171,109.563 9.171,78.013 28.601,58.582L58.684,28.5C78.114,9.069 109.665,9.069 129.096,28.5L159.193,58.597C178.624,78.028 178.624,109.578 159.193,129.009L93.905,194.298L28.601,128.994ZM33.568,124.028C16.878,107.338 16.878,80.238 33.568,63.548L63.65,33.466C80.34,16.776 107.44,16.776 124.13,33.466L154.227,63.563C170.917,80.253 170.917,107.353 154.227,124.043L93.905,184.365L33.568,124.028ZM93.789,63.649L63.526,93.912L93.789,124.175L124.052,93.912L93.789,63.649ZM93.789,73.582L73.459,93.912L93.789,114.242L114.119,93.912L93.789,73.582Z" style="fill-opacity:0.3;"/>
    </g>
    <g transform="matrix(1.42378,0,0,-1.42378,37.8056,272.552)">
        <path d="M528.878,128.972L528.878,47.203L523.153,47.203L523.153,128.972L528.878,128.972ZM508.669,52.455C508.669,58.53 499.441,58.53 499.441,52.455C499.441,46.383 508.669,46.383 508.669,52.455ZM501.08,71.029L501.08,128.972L506.798,128.972L506.798,71.029L501.08,71.029ZM468.249,71.263L468.249,53.859L462.643,54.443L462.643,71.263L450.374,71.263L450.374,76.053L462.643,76.053L462.643,111.217C462.643,122.546 466.615,129.789 478.88,129.789C482.497,129.789 486.12,128.623 489.744,126.865L487.757,122.196C484.837,123.597 481.684,124.532 478.88,124.532C469.888,124.532 468.249,119.041 468.249,111.217L468.249,76.053L487.874,76.053L487.874,71.263L468.249,71.263ZM368.25,71.383L354.58,71.383L354.11,79.326C350.841,73.601 343.484,69.981 335.776,69.981C318.955,69.864 305.75,80.26 305.75,100.118C305.75,120.329 318.371,130.842 335.421,130.725C341.848,130.604 350.841,127.336 354.11,120.565L354.813,128.973L368.25,128.973L368.25,71.383ZM337.058,117.641C327.596,117.641 320.003,111.095 320.003,100.118C320.003,89.139 327.596,82.712 337.058,82.712C359.486,82.712 359.486,117.641 337.058,117.641ZM242.554,98.131L242.554,128.972L256.803,128.972L256.803,98.131C256.803,90.537 261.593,83.878 269.308,83.878C277.013,83.878 280.166,90.308 280.166,97.898L280.166,128.972L294.418,128.972L294.418,97.898C294.418,80.608 286.36,70.563 270.002,70.563C262.53,70.563 255.869,72.899 250.729,81.077C247.456,73.136 240.567,70.33 233.669,70.33C228.184,70.33 221.525,72.43 218.487,78.273L217.436,71.263L204.237,71.263L204.237,128.972L218.487,128.972L218.487,98.131C218.487,90.538 223.038,83.648 230.75,83.648C238.581,83.648 242.554,90.537 242.554,98.131ZM380.282,153.041L380.282,71.383L393.603,71.383L394.533,79.326C398.975,72.899 406.687,70.096 413.227,70.096C430.977,70.096 442.783,83.299 442.783,100.235C442.783,117.06 432.149,130.376 413.692,130.376C407.623,130.376 398.624,128.502 394.533,122.196L394.533,153.041L380.282,153.041ZM428.531,100.235C428.531,91.24 422.455,83.878 412.176,83.878C401.893,83.878 395.818,91.24 395.818,100.235C395.818,109.227 402.479,116.593 412.176,116.593C421.876,116.593 428.531,109.227 428.531,100.235ZM619.645,71.263L619.877,81.547C623.495,73.714 631.678,70.68 639.037,70.68C643.363,70.564 647.56,71.733 651.42,74.07L648.847,78.74C645.815,76.871 642.42,76.053 639.037,76.053C628.285,76.174 619.993,84.816 619.993,95.331L619.993,128.973L614.269,128.973L614.269,71.263L619.645,71.263ZM548.355,110.081C552.002,119.128 560.713,125.5 570.884,125.5C580.946,125.5 589.582,119.266 593.296,110.373L597.982,112.41C593.492,123.162 583.05,130.7 570.884,130.7C554.619,130.7 541.435,117.229 541.435,100.614C541.435,83.998 554.619,70.528 570.884,70.528C585.747,70.528 598.036,81.778 600.043,96.397L595.072,97.712C595.07,97.7 595.069,97.689 595.068,97.677L595.066,97.66L548.346,110.06C548.347,110.063 548.348,110.065 548.349,110.067C548.35,110.07 548.351,110.072 548.352,110.075L548.323,110.083L548.355,110.081ZM570.884,75.728C557.432,75.728 546.525,86.87 546.525,100.615C546.525,101.951 546.631,103.261 546.829,104.54L593.773,92.08C590.364,82.54 581.403,75.728 570.884,75.728Z" style="fill:white;"/>
    </g>
    <g transform="matrix(1.42378,-1.58071e-16,-1.58071e-16,-1.42378,37.8056,272.552)">
        <path d="M57.423,151.586C65.597,159.758 87.354,181.938 87.344,181.96C87.265,182.105 108.959,160.323 117.599,151.688L87.459,121.55L57.423,151.586Z" style="fill:rgb(58,24,136);fill-rule:nonzero;"/>
        <path d="M87.459,121.55L117.598,151.688C117.643,151.638 117.698,151.581 117.747,151.536L147.857,121.424L117.72,91.287L87.459,121.55Z" style="fill:rgb(3,161,196);fill-rule:nonzero;"/>
        <path d="M147.857,121.424L147.935,121.346C164.591,104.692 164.604,77.7 147.985,61.025L117.721,91.287L147.857,121.424Z" style="fill:rgb(5,208,223);fill-rule:nonzero;"/>
        <path d="M57.195,91.287L27.164,121.317C27.173,121.328 27.178,121.338 27.189,121.347L57.373,151.536C57.39,151.552 57.408,151.568 57.423,151.586L87.459,121.55L57.195,91.287Z" style="fill:rgb(118,31,232);fill-rule:nonzero;"/>
        <path d="M87.459,61.023L117.72,91.287L147.984,61.025C147.96,61.008 147.951,60.991 147.934,60.974L117.747,30.787C117.74,30.779 117.729,30.77 117.72,30.762L87.459,61.023Z" style="fill:rgb(255,170,1);fill-rule:nonzero;"/>
        <path d="M27.037,61.129C10.529,77.804 10.571,104.696 27.164,121.318L57.195,91.288L27.037,61.129Z" style="fill:rgb(241,23,93);fill-rule:nonzero;"/>
        <path d="M87.458,61.023L57.298,30.863L27.188,60.973C27.136,61.025 27.089,61.08 27.036,61.128L57.195,91.287L87.458,61.023Z" style="fill:rgb(251,58,27);fill-rule:nonzero;"/>
        <path d="M117.722,30.761C101.046,14.116 74.039,14.125 57.374,30.787L57.3,30.863L87.46,61.023L117.722,30.761Z" style="fill:rgb(251,201,53);fill-rule:nonzero;"/>
    </g>
</svg>
`;
function addWatermarkToContext(ctx, distanceToSide, width = 256) {
  return new Promise((resolve) => {
    const height = width * sizeRatio;
    const resizedLogo = logoSvg.replace("<WIDTH>", width.toString()).replace("<HEIGHT>", height.toString());
    const img = new Image();
    const svg = new Blob([resizedLogo], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg);
    img.onload = function() {
      ctx.drawImage(img, distanceToSide, distanceToSide);
      URL.revokeObjectURL(url);
      resolve();
    };
    img.src = url;
  });
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
/iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
const MIN_TERRAIN_ZOOM = 12;
const TERRAIN_TILE_SIZE = 512;
function removeDomNode(node) {
  node.parentNode.removeChild(node);
}
function latLon2Tile(zoom, lon, lat, round = true) {
  const x = (lon + 180) / 360 * Math.pow(2, zoom);
  const y = (1 - Math.log(
    Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)
  ) / Math.PI) / 2 * Math.pow(2, zoom);
  if (round) {
    return {
      x: Math.floor(x),
      y: Math.floor(y)
    };
  } else {
    return {
      x,
      y
    };
  }
}
function mapTextureDataToCanvas(mtd) {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = mtd.width;
  textureCanvas.height = mtd.height;
  const ctx = textureCanvas.getContext("2d");
  if (!ctx)
    throw new Error("Unable to create a canvas with context.");
  const canvasImageData = ctx.getImageData(0, 0, mtd.width, mtd.height);
  canvasImageData.data.set(mtd.pixelData);
  ctx.putImageData(canvasImageData, 0, 0);
  return textureCanvas;
}
function createMosaic(tileIndexTopLeft, tileIndexBottomRight, zoom, tilesetURLs) {
  return __async(this, null, function* () {
    const nbTileX = tileIndexBottomRight.x - tileIndexTopLeft.x + 1;
    const nbTileY = tileIndexBottomRight.y - tileIndexTopLeft.y + 1;
    const canvas = document.createElement("canvas");
    canvas.width = nbTileX * TERRAIN_TILE_SIZE;
    canvas.height = nbTileY * TERRAIN_TILE_SIZE;
    const context = canvas.getContext("2d");
    if (!context)
      throw new Error("The context is invalid");
    let shiftX = 0;
    let shiftY = 0;
    const promises = [];
    for (let j = tileIndexTopLeft.y; j <= tileIndexBottomRight.y; j += 1) {
      for (let i = tileIndexTopLeft.x; i <= tileIndexBottomRight.x; i += 1) {
        const imageUrlPattern = tilesetURLs[~~(Math.random() * tilesetURLs.length)];
        const imageUrl = imageUrlPattern.replace("{x}", i.toString()).replace("{y}", j.toString()).replace("{z}", zoom.toString());
        promises.push(
          injectToContext(imageUrl, context, [
            shiftX * TERRAIN_TILE_SIZE,
            shiftY * TERRAIN_TILE_SIZE
          ])
        );
        shiftX++;
      }
      shiftX = 0;
      shiftY++;
    }
    yield Promise.all(promises);
    return canvas;
  });
}
function injectToContext(imageUrl, context, topLeftPosition) {
  return new Promise((resolve, _) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;
    image.onload = function() {
      context.drawImage(image, topLeftPosition[0], topLeftPosition[1]);
      resolve();
    };
    image.onerror = function() {
      resolve();
    };
  });
}
function cropCanvas(cropPosition, cropSize, inputCanvas) {
  var _a;
  const left = cropPosition[0];
  const top = cropPosition[1];
  const width = cropSize[0];
  const height = cropSize[1];
  const destCanvas = document.createElement("canvas");
  destCanvas.width = width;
  destCanvas.height = height;
  (_a = destCanvas.getContext("2d")) == null ? void 0 : _a.drawImage(
    inputCanvas,
    left,
    top,
    width,
    height,
    0,
    0,
    width,
    height
  );
  return destCanvas;
}
function idleAsync(map) {
  return new Promise(function(myResolve, myReject) {
    map.once("idle", () => {
      myResolve(true);
    });
  });
}
const defaultOptionValues = {
  showButton: true,
  background: "#FFFFFF",
  closeButtonClassName: "",
  arButtonClassName: "",
  closeButtonContent: `<svg width="100%" height="100%" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,16.6768,6.42373)">
          <path d="M7,13.75C6.737,13.75 6.509,13.653 6.315,13.46C6.122,13.266 6.025,13.038 6.025,12.775L6.025,8.225L1.475,8.225C1.212,8.225 0.984,8.128 0.79,7.935C0.597,7.741 0.5,7.513 0.5,7.25C0.5,6.987 0.597,6.759 0.79,6.565C0.984,6.372 1.212,6.275 1.475,6.275L6.025,6.275L6.025,1.725C6.025,1.462 6.122,1.234 6.315,1.04C6.509,0.847 6.737,0.75 7,0.75C7.263,0.75 7.491,0.847 7.685,1.04C7.878,1.234 7.975,1.462 7.975,1.725L7.975,6.275L12.525,6.275C12.788,6.275 13.016,6.372 13.21,6.565C13.403,6.759 13.5,6.987 13.5,7.25C13.5,7.513 13.403,7.741 13.21,7.935C13.016,8.128 12.788,8.225 12.525,8.225L7.975,8.225L7.975,12.775C7.975,13.038 7.878,13.266 7.685,13.46C7.491,13.653 7.263,13.75 7,13.75Z" style="fill:rgb(68,73,82);fill-rule:nonzero;"/>
      </g>
    </svg>`,
  arButtonContent: `
  <span>
    <svg width="33px" height="33px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2; vertical-align: middle;">
      <g transform="matrix(0.718295,0,0,0.718295,6.75661,6.76523)">
          <path d="M22.197,39.734L11.472,33.439C10.949,33.118 10.543,32.696 10.253,32.171C9.963,31.646 9.819,31.082 9.819,30.48L9.819,17.941C9.819,17.34 9.963,16.776 10.253,16.251C10.543,15.726 10.949,15.303 11.472,14.983L22.247,8.576C22.777,8.27 23.362,8.116 24,8.116C24.638,8.116 25.223,8.27 25.753,8.576L36.528,14.983C37.051,15.303 37.457,15.726 37.747,16.251C38.037,16.776 38.182,17.34 38.182,17.941L38.182,30.48C38.182,31.082 38.032,31.646 37.734,32.171C37.436,32.696 37.017,33.118 36.478,33.439L25.603,39.734C25.062,40.048 24.491,40.205 23.892,40.205C23.292,40.205 22.727,40.048 22.197,39.734ZM22.5,35.925L22.5,25.044L13.275,19.741L13.275,30.373L22.5,35.925ZM25.5,35.925L34.775,30.373L34.775,19.741L25.5,25.044L25.5,35.925ZM3.701,13.426L3.701,7.108C3.701,6.159 4.033,5.353 4.696,4.687C5.359,4.022 6.163,3.689 7.108,3.689L13.426,3.689L13.426,6.976L6.976,6.976L6.976,13.426L3.701,13.426ZM13.426,44.299L7.108,44.299C6.163,44.299 5.359,43.967 4.696,43.304C4.033,42.641 3.701,41.837 3.701,40.892L3.701,34.574L6.976,34.574L6.976,41.024L13.426,41.024L13.426,44.299ZM34.574,44.299L34.574,41.024L41.024,41.024L41.024,34.574L44.311,34.574L44.311,40.892C44.311,41.837 43.978,42.641 43.313,43.304C42.647,43.967 41.841,44.299 40.892,44.299L34.574,44.299ZM41.024,13.426L41.024,6.976L34.574,6.976L34.574,3.689L40.892,3.689C41.841,3.689 42.647,4.022 43.313,4.687C43.978,5.353 44.311,6.159 44.311,7.108L44.311,13.426L41.024,13.426ZM24,22.336L33.237,16.991L24,11.685L14.763,16.991L24,22.336Z" style="fill:rgb(36, 189, 240);fill-rule:nonzero;"/>
      </g>
    </svg>
    <span style="vertical-align: middle;">
    View in your space
    </span>
  </span>`,
  edgeColor: "#7b8487"
};
const defaultArButtonStyle = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "30px auto",
  fontSize: "1.4em",
  width: "fit-content",
  background: "#FFF",
  border: "1px solid #0000001a",
  borderRadius: "3px",
  padding: "2px 9px 2px 6px",
  color: "#727781",
  "box-shadow": "0 0 6px 2px rgb(0 0 0 / 8%)"
};
const defaultCloseButtonStyle = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px",
  padding: "0px",
  background: "#FFF",
  border: "none",
  borderRadius: "3px",
  width: "33px",
  height: "33px",
  "box-shadow": "0 0 6px 2px rgb(0 0 0 / 8%)"
};
class MaptilerARControl extends EventEmitter {
  constructor(options = {}) {
    super();
    this.colorData = null;
    this.landMaskData = null;
    this.terrainData = null;
    this.meterPerPixelCenter = 0;
    this.originalPixelRatio = 0;
    this.itemsToDispose = [];
    this.gltfExporter = new GLTFExporter$1();
    this.lock = false;
    this.arButton = null;
    this.closeButton = null;
    this.modelViewer = null;
    this.options = __spreadValues(__spreadValues({}, defaultOptionValues), options);
  }
  onAdd(map) {
    this.setMap(map);
    this.controlButtonContainer = window.document.createElement("div");
    if (this.options.showButton) {
      this.controlButtonContainer.className = "maplibregl-ctrl maplibregl-ctrl-group";
      this.controlButton = window.document.createElement("button");
      this.controlButton.className = "maptiler-ar-ctrl";
      this.controlButtonContainer.appendChild(this.controlButton);
      const iconSpan = window.document.createElement("span");
      iconSpan.className = "maplibregl-ctrl-icon";
      iconSpan.setAttribute("aria-hidden", "true");
      this.controlButton.appendChild(iconSpan);
      iconSpan.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
      </svg>
      `;
      this.controlButton.type = "button";
      this.controlButton.addEventListener("click", (evt) => __async(this, null, function* () {
        this.run();
      }));
    }
    this.init3DScene();
    return this.controlButtonContainer;
  }
  run() {
    return __async(this, null, function* () {
      try {
        this.close();
      } catch (e) {
      }
      if (this.lock)
        return;
      this.lock = true;
      this.emit("computeStart");
      yield this.computeTextures();
      const colorData = this.getColorData();
      const terrainData = this.getTerrainData();
      if (!colorData)
        return;
      if (!terrainData)
        return;
      yield this.buildMapModel();
      this.displayModal();
      this.lock = false;
    });
  }
  onRemove() {
    var _a;
    this.dispose();
    (_a = this.controlButtonContainer.parentNode) == null ? void 0 : _a.removeChild(
      this.controlButtonContainer
    );
  }
  setMap(m) {
    this.map = m;
  }
  getMeterPerPixelCenter() {
    return this.meterPerPixelCenter;
  }
  getColorData() {
    return this.colorData;
  }
  getLandMaskData() {
    return this.landMaskData;
  }
  getTerrainData() {
    return this.terrainData;
  }
  saveMapSettings() {
    this.cameraSettings = {
      center: this.map.getCenter(),
      zoom: this.map.getZoom(),
      pitch: this.map.getPitch(),
      bearing: this.map.getBearing()
    };
    this.terrainExaggeration = this.map.getTerrainExaggeration();
    this.hasTerrain = this.map.hasTerrain();
    this.originalPixelRatio = this.map.getPixelRatio();
    if (this.hasTerrain) {
      this.terrainSourceID = this.map.getTerrain().source;
    }
  }
  restoreMapSettings() {
    this.map.setPixelRatio(this.originalPixelRatio);
    this.map.triggerRepaint();
    if (this.hasTerrain) {
      this.map.setTerrain({
        source: this.terrainSourceID,
        exaggeration: this.terrainExaggeration
      });
    }
    this.map.jumpTo(this.cameraSettings);
  }
  enableTopView() {
    this.saveMapSettings();
    if (this.hasTerrain) {
      this.map.setTerrain(null);
    }
    this.map.setPixelRatio(4);
    this.map.triggerRepaint();
    const topViewCameraSettings = {
      center: this.cameraSettings.center,
      zoom: this.cameraSettings.zoom,
      pitch: 0,
      bearing: 0
    };
    this.map.jumpTo(topViewCameraSettings);
  }
  grabGlData() {
    const canvas = this.map.getCanvas();
    const gl = canvas.getContext("webgl2");
    if (!gl)
      throw new Error("The WebGL context of the map is undefined");
    const pixels = new Uint8Array(
      gl.drawingBufferWidth * gl.drawingBufferHeight * 4
    );
    gl.readPixels(
      0,
      0,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    );
    return {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
      pixelData: pixels,
      bounds: this.map.getBounds()
    };
  }
  computeColorData() {
    return __async(this, null, function* () {
      this.emit("startComputeColorData");
      yield idleAsync(this.map);
      this.colorData = this.grabGlData();
      this.emit("endComputeColorData", {});
    });
  }
  computeLandMaskData() {
    return __async(this, null, function* () {
      this.emit("startComputeLandMaskData", {});
      this.map.addSource("xr_module_global_blackout_source", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-180, -90],
                [-180, 90],
                [180, 90],
                [180, -90],
                [-180, -90]
              ]
            ]
          }
        }
      });
      this.map.addLayer({
        id: "xr_module_global_blackout_layer",
        type: "fill",
        source: "xr_module_global_blackout_source",
        layout: {},
        paint: {
          "fill-color": "#000",
          "fill-opacity": 1
        }
      });
      this.map.addSource("xr_module_land_source", {
        type: "vector",
        url: "https://api.maptiler.com/tiles/land/tiles.json?key=bod4IIn9bwK8mnZIk49v"
      });
      this.map.addLayer({
        id: "xr_module_land_layer",
        type: "fill",
        source: "xr_module_land_source",
        "source-layer": "land",
        layout: {},
        paint: {
          "fill-color": "#fff",
          "fill-opacity": 1
        }
      });
      yield idleAsync(this.map);
      this.landMaskData = this.grabGlData();
      this.map.removeLayer("xr_module_global_blackout_layer");
      this.map.removeLayer("xr_module_land_layer");
      this.map.removeSource("xr_module_global_blackout_source");
      this.map.removeSource("xr_module_land_source");
      yield idleAsync(this.map);
      this.emit("endComputeLandMaskData", {});
    });
  }
  computeTerrainData_VIEWPORT() {
    return __async(this, null, function* () {
      this.emit("startComputeTerrainData", {});
      this.map.addSource("xr_module_terrain_source", {
        type: "raster",
        url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json"
      });
      this.map.addLayer({
        id: "xr_module_terrain_layer",
        source: "xr_module_terrain_source",
        type: "raster",
        minzoom: 0,
        layout: {
          visibility: "visible"
        },
        paint: {
          "raster-opacity": 1
        },
        filter: ["all"]
      });
      yield idleAsync(this.map);
      this.terrainData = this.grabGlData();
      this.map.removeLayer("xr_module_terrain_layer");
      this.map.removeSource("xr_module_terrain_source");
      yield idleAsync(this.map);
      this.emit("endComputeTerrainData", {});
    });
  }
  computeTerrainData() {
    return __async(this, null, function* () {
      var _a;
      this.emit("startComputeTerrainData", {});
      const zoom = Math.min(Math.floor(this.map.getZoom()), MIN_TERRAIN_ZOOM);
      const bounds = this.map.getBounds();
      const north = bounds.getNorth();
      const south = bounds.getSouth();
      const east = bounds.getEast();
      const west = bounds.getWest();
      const tileIndexTopLeft = latLon2Tile(zoom, west, north, false);
      const tileIndexTopLeftFloored = {
        x: Math.floor(tileIndexTopLeft.x),
        y: Math.floor(tileIndexTopLeft.y)
      };
      const tileIndexBottomRight = latLon2Tile(zoom, east, south, false);
      const tileIndexBottomRightFloored = {
        x: Math.floor(tileIndexBottomRight.x),
        y: Math.floor(tileIndexBottomRight.y)
      };
      const sdkConfig = this.map.getSdkConfig();
      const mtsid = this.map.getMaptilerSessionId();
      const terrainCanvas = yield createMosaic(
        tileIndexTopLeftFloored,
        tileIndexBottomRightFloored,
        zoom,
        [
          `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${sdkConfig.apiKey}&mtsid=${mtsid}&module=xr`
        ]
      );
      const offset = [
        Math.floor(
          TERRAIN_TILE_SIZE * (tileIndexTopLeft.x - tileIndexTopLeftFloored.x)
        ),
        Math.floor(
          TERRAIN_TILE_SIZE * (tileIndexTopLeft.y - tileIndexTopLeftFloored.y)
        )
      ];
      const size = [
        Math.ceil(
          TERRAIN_TILE_SIZE * (tileIndexBottomRight.x - tileIndexTopLeft.x)
        ),
        Math.ceil(
          TERRAIN_TILE_SIZE * (tileIndexBottomRight.y - tileIndexTopLeft.y)
        )
      ];
      [
        tileIndexBottomRight.x - tileIndexTopLeft.x,
        tileIndexBottomRight.y - tileIndexTopLeft.y
      ];
      const croppedCanvas = cropCanvas(offset, size, terrainCanvas);
      const pixels = (_a = croppedCanvas.getContext("2d")) == null ? void 0 : _a.getImageData(0, 0, croppedCanvas.width, croppedCanvas.height).data;
      if (!pixels)
        throw new Error("Unable to extract terrain data.");
      this.terrainData = {
        width: croppedCanvas.width,
        height: croppedCanvas.height,
        pixelData: new Uint8Array(pixels.buffer),
        bounds
      };
      this.emit("endComputeTerrainData", {});
    });
  }
  computeTextures() {
    return __async(this, null, function* () {
      var _a;
      this.enableTopView();
      yield this.computeColorData();
      yield this.computeTerrainData();
      if (!this.colorData)
        throw new Error("The color texture is invalid.");
      this.mapCaptureBounds = this.map.getBounds();
      const center = this.mapCaptureBounds.getCenter();
      const middleWest = new LngLat(this.mapCaptureBounds.getWest(), center.lat);
      const middleEast = new LngLat(this.mapCaptureBounds.getEast(), center.lat);
      const distance = middleEast.distanceTo(middleWest);
      this.meterPerPixelCenter = distance / ((_a = this.colorData) == null ? void 0 : _a.width);
      this.restoreMapSettings();
      yield idleAsync(this.map);
    });
  }
  init3DScene() {
    this.threeSceneGLTF = new THREE.Scene();
    this.threeTileContainerGLTF = new THREE.Object3D();
    this.threeSceneGLTF.add(this.threeTileContainerGLTF);
    this.threeTileContainerGLTF.rotation.set(-Math.PI / 2, 0, 0);
    this.threeSceneUSDZ = new THREE.Scene();
    this.threeTileContainerUSDZ = new THREE.Object3D();
    this.threeSceneUSDZ.add(this.threeTileContainerUSDZ);
    this.threeTileContainerUSDZ.rotation.set(-Math.PI / 2, 0, 0);
  }
  buildMapModel() {
    return __async(this, null, function* () {
      if (!this.colorData)
        throw new Error("Color textures is not ready.");
      if (!this.terrainData)
        throw new Error("Terrain textures is not ready.");
      this.threeTileContainerGLTF.clear();
      this.threeTileContainerUSDZ.clear();
      this.dispose();
      const colorCanvas = mapTextureDataToCanvas(this.colorData);
      const ctx = colorCanvas.getContext("2d");
      if (!ctx)
        throw new Error("Color texture not available");
      const baseColor = new THREE.Color(this.options.edgeColor);
      const darkerColor = baseColor.clone().multiplyScalar(0.65);
      const evenDarkerColor = baseColor.clone().multiplyScalar(0.5);
      ctx.fillStyle = `#${baseColor.getHexString()}`;
      const thickness = Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;
      yield addWatermarkToContext(
        ctx,
        thickness * 2,
        Math.max(256, colorCanvas.width / 10)
      );
      ctx.fillRect(0, 0, colorCanvas.width - 1, thickness);
      ctx.fillRect(
        0,
        colorCanvas.height - 1 - thickness,
        colorCanvas.width - 1,
        colorCanvas.height - 1
      );
      ctx.fillStyle = `#${darkerColor.getHexString()}`;
      ctx.fillRect(0, 0, thickness, colorCanvas.height - 1);
      ctx.fillRect(
        colorCanvas.width - 1 - thickness,
        0,
        colorCanvas.width - 1,
        colorCanvas.height - 1
      );
      const mapTexture = new THREE.CanvasTexture(colorCanvas);
      mapTexture.flipY = false;
      mapTexture.colorSpace = THREE.SRGBColorSpace;
      mapTexture.encoding = THREE.sRGBEncoding;
      mapTexture.encoding = THREE.LinearEncoding;
      mapTexture.needsUpdate = true;
      this.itemsToDispose.push(mapTexture);
      this.gltfMaterial = new THREE.MeshStandardMaterial({
        map: mapTexture,
        color: 16777215
      });
      this.usdzMaterial = new THREE.MeshStandardMaterial({
        map: mapTexture
      });
      this.itemsToDispose.push(this.gltfMaterial);
      this.itemsToDispose.push(this.usdzMaterial);
      const bounds = this.mapCaptureBounds;
      const widthMeter = bounds.getSouthEast().distanceTo(bounds.getSouthWest());
      const heightMeter = bounds.getSouthEast().distanceTo(bounds.getNorthEast());
      const mapGeom = new THREE.PlaneGeometry(
        widthMeter,
        heightMeter,
        this.terrainData.width - 1,
        this.terrainData.height - 1
      );
      this.mapMeshGLTF = new THREE.Mesh(mapGeom, this.gltfMaterial);
      this.mapMeshUSDZ = new THREE.Mesh(mapGeom, this.usdzMaterial);
      const positionBuf = mapGeom.attributes.position.array;
      const w = this.terrainData.width;
      const h = this.terrainData.height;
      let minEle = Infinity;
      for (let i = 0; i < positionBuf.length / 3; i += 1) {
        const r = this.terrainData.pixelData[i * 4];
        const g = this.terrainData.pixelData[i * 4 + 1];
        const b = this.terrainData.pixelData[i * 4 + 2];
        const elevation = -1e4 + (r * 256 * 256 + g * 256 + b) * 0.1;
        if (elevation < minEle) {
          minEle = elevation;
        }
      }
      minEle = Math.max(0, ~~(minEle / 100) * 100 - 100);
      for (let i = 0; i < positionBuf.length / 3; i += 1) {
        const r = this.terrainData.pixelData[i * 4];
        const g = this.terrainData.pixelData[i * 4 + 1];
        const b = this.terrainData.pixelData[i * 4 + 2];
        let elevation = -1e4 + (r * 256 * 256 + g * 256 + b) * 0.1 - minEle;
        const xInput = i % w;
        const yInput = ~~(i / w);
        if (xInput === 0 || yInput === 0 || xInput === w - 1 || yInput === h - 1) {
          elevation = 0;
        }
        positionBuf[i * 3 + 2] = elevation;
      }
      mapGeom.computeVertexNormals();
      this.itemsToDispose.push(mapGeom);
      const bottomPlaneGeom = new THREE.PlaneGeometry(
        widthMeter,
        heightMeter,
        1,
        1
      );
      const bottomPlaneMat = new THREE.MeshStandardMaterial({
        color: evenDarkerColor
      });
      const bottomPlaneMeshGLTF = new THREE.Mesh(bottomPlaneGeom, bottomPlaneMat);
      bottomPlaneMeshGLTF.rotateX(-Math.PI);
      this.itemsToDispose.push(bottomPlaneGeom);
      this.itemsToDispose.push(bottomPlaneMat);
      const meshWidth = 1;
      const ratio = meshWidth * 1 / widthMeter;
      this.threeTileContainerGLTF.scale.x = ratio;
      this.threeTileContainerGLTF.scale.y = ratio;
      this.threeTileContainerGLTF.scale.z = ratio;
      this.threeTileContainerGLTF.add(this.mapMeshGLTF);
      this.threeTileContainerGLTF.add(bottomPlaneMeshGLTF);
      this.threeTileContainerUSDZ.scale.x = ratio;
      this.threeTileContainerUSDZ.scale.y = ratio;
      this.threeTileContainerUSDZ.scale.z = ratio;
      const bottomPlaneMeshUSDZ = bottomPlaneMeshGLTF.clone();
      this.threeTileContainerUSDZ.add(this.mapMeshUSDZ);
      this.threeTileContainerUSDZ.add(bottomPlaneMeshUSDZ);
    });
  }
  dispose() {
    while (this.itemsToDispose.length) {
      const itemToDispose = this.itemsToDispose.pop();
      itemToDispose == null ? void 0 : itemToDispose.dispose();
    }
  }
  downloadGLTF(binary = false) {
    this.threeTileContainerGLTF.updateMatrix();
    this.threeTileContainerGLTF.updateMatrixWorld();
    this.gltfExporter.parse(
      this.threeSceneGLTF,
      (gltfPayload) => {
        let gltfBlob;
        if (binary) {
          gltfBlob = new Blob([gltfPayload], {
            type: "application/octet-stream"
          });
        } else {
          const gltfJson = JSON.stringify(gltfPayload, null, 2);
          gltfBlob = new Blob([gltfJson], { type: "text/plain" });
        }
        const link = document.createElement("a");
        link.style.display = "none";
        document.body.appendChild(link);
        link.href = URL.createObjectURL(gltfBlob);
        link.download = `maptiler_scene.${binary ? "glb" : "gltf"}`;
        link.click();
      },
      (err) => {
        console.log("error:", err);
      },
      {
        binary,
        maxTextureSize: 8192
      }
    );
  }
  downloadUSDZ() {
    return __async(this, null, function* () {
      this.threeTileContainerUSDZ.updateMatrix();
      this.threeTileContainerUSDZ.updateMatrixWorld();
      const blob = yield this.getModelBlobUSDZ();
      const link = document.createElement("a");
      link.style.display = "none";
      document.body.appendChild(link);
      link.href = URL.createObjectURL(blob);
      link.download = "maptiler_scene.usdz";
      link.click();
    });
  }
  getModelBlobGLB() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.gltfExporter.parse(
          this.threeSceneGLTF,
          (gltfPayload) => {
            const gltfBlob = new Blob([gltfPayload], {
              type: "application/octet-stream"
            });
            resolve(gltfBlob);
          },
          (err) => {
            reject(err);
          },
          {
            binary: true,
            maxTextureSize: 8192
          }
        );
      });
    });
  }
  getModelBlobUSDZ() {
    return __async(this, null, function* () {
      const exporter = new USDZExporter();
      const arraybuffer = yield exporter.parse(this.threeSceneUSDZ);
      const blob = new Blob([arraybuffer], {
        type: "model/vnd.usdz+zip"
      });
      return blob;
    });
  }
  displayModal() {
    return __async(this, null, function* () {
      if (!typeof window)
        return;
      const container = this.map.getContainer();
      const modelBlobGLB = yield this.getModelBlobGLB();
      const modelObjectURLGLB = URL.createObjectURL(modelBlobGLB);
      this.emit("computeEnd");
      this.modelViewer = new ModelViewerElement();
      this.modelViewer.src = modelObjectURLGLB;
      this.modelViewer.setAttribute("ar", "true");
      this.modelViewer.setAttribute("ar-modes", "webxr quick-look");
      this.modelViewer.setAttribute("camera-controls", "true");
      this.modelViewer.setAttribute("shadow-intensity", "1");
      this.modelViewer.style.width = "100%";
      this.modelViewer.style.height = "100%";
      this.modelViewer.style.zIndex = "3";
      this.modelViewer.style.position = "absolute";
      this.modelViewer.style.background = this.options.background;
      container.appendChild(this.modelViewer);
      this.arButton = document.createElement("button");
      this.arButton.setAttribute("slot", "ar-button");
      this.arButton.id = "maptiler-ar-enable-button";
      if (this.options.arButtonClassName) {
        this.arButton.classList.add(this.options.arButtonClassName);
      } else {
        Object.keys(defaultArButtonStyle).forEach((el) => {
          this.arButton.style[el] = defaultArButtonStyle[el];
        });
      }
      if (typeof this.options.arButtonContent === "string") {
        this.arButton.innerHTML = this.options.arButtonContent;
      } else {
        this.arButton.appendChild(this.options.arButtonContent);
      }
      this.modelViewer.appendChild(this.arButton);
      this.closeButton = document.createElement("button");
      this.closeButton.id = "maptiler-ar-close-button";
      if (this.options.closeButtonClassName) {
        this.closeButton.classList.add(this.options.closeButtonClassName);
      } else {
        Object.keys(defaultCloseButtonStyle).forEach((el) => {
          this.closeButton.style[el] = defaultCloseButtonStyle[el];
        });
      }
      if (typeof this.options.closeButtonContent === "string") {
        this.closeButton.innerHTML = this.options.closeButtonContent;
      } else {
        this.closeButton.appendChild(this.options.closeButtonContent);
      }
      this.modelViewer.appendChild(this.closeButton);
      this.closeButton.addEventListener("click", (evt) => __async(this, null, function* () {
        this.close();
      }));
    });
  }
  close() {
    this.dispose();
    removeDomNode(this.arButton);
    removeDomNode(this.modelViewer);
    removeDomNode(this.closeButton);
  }
}

export { MaptilerARControl, mapTextureDataToCanvas };
//# sourceMappingURL=maptilerarcontrol.mjs.map
