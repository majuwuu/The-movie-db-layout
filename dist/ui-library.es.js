import ie, { useState as C } from "react";
var T = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function oe() {
  if (Z) return b;
  Z = 1;
  var l = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(s, i, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      c = {};
      for (var h in i)
        h !== "key" && (c[h] = i[h]);
    } else c = i;
    return i = c.ref, {
      $$typeof: l,
      type: s,
      key: d,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return b.Fragment = n, b.jsx = a, b.jsxs = a, b;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function ce() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && function() {
    function l(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === te ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case S:
          return "Fragment";
        case H:
          return "Profiler";
        case J:
          return "StrictMode";
        case ee:
          return "Suspense";
        case re:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case _:
            return "Portal";
          case Q:
            return (r.displayName || "Context") + ".Provider";
          case X:
            return (r._context.displayName || "Context") + ".Consumer";
          case K:
            var t = r.render;
            return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case se:
            return t = r.displayName || null, t !== null ? t : l(r.type) || "Memo";
          case B:
            t = r._payload, r = r._init;
            try {
              return l(r(t));
            } catch {
            }
        }
      return null;
    }
    function n(r) {
      return "" + r;
    }
    function a(r) {
      try {
        n(r);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, x = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), n(r);
      }
    }
    function s(r) {
      if (r === S) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === B)
        return "<...>";
      try {
        var t = l(r);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = A.A;
      return r === null ? null : r.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function d(r) {
      if (L.call(r, "key")) {
        var t = Object.getOwnPropertyDescriptor(r, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function h(r, t) {
      function o() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: o,
        configurable: !0
      });
    }
    function p() {
      var r = l(this.type);
      return $[r] || ($[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function k(r, t, o, x, w, m, O, F) {
      return o = m.ref, r = {
        $$typeof: y,
        type: r,
        key: t,
        props: m,
        _owner: w
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function v(r, t, o, x, w, m, O, F) {
      var f = t.children;
      if (f !== void 0)
        if (x)
          if (ne(f)) {
            for (x = 0; x < f.length; x++)
              E(f[x]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(f);
      if (L.call(t, "key")) {
        f = l(r);
        var g = Object.keys(t).filter(function(ae) {
          return ae !== "key";
        });
        x = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", U[f + x] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          f,
          g,
          f
        ), U[f + x] = !0);
      }
      if (f = null, o !== void 0 && (a(o), f = "" + o), d(t) && (a(t.key), f = "" + t.key), "key" in t) {
        o = {};
        for (var M in t)
          M !== "key" && (o[M] = t[M]);
      } else o = t;
      return f && h(
        o,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), k(
        r,
        f,
        m,
        w,
        i(),
        o,
        O,
        F
      );
    }
    function E(r) {
      typeof r == "object" && r !== null && r.$$typeof === y && r._store && (r._store.validated = 1);
    }
    var j = ie, y = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), A = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, ne = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var Y, $ = {}, D = j["react-stack-bottom-frame"].bind(
      j,
      c
    )(), W = P(s(c)), U = {};
    N.Fragment = S, N.jsx = function(r, t, o, x, w) {
      var m = 1e4 > A.recentlyCreatedOwnerStacks++;
      return v(
        r,
        t,
        o,
        !1,
        x,
        w,
        m ? Error("react-stack-top-frame") : D,
        m ? P(s(r)) : W
      );
    }, N.jsxs = function(r, t, o, x, w) {
      var m = 1e4 > A.recentlyCreatedOwnerStacks++;
      return v(
        r,
        t,
        o,
        !0,
        x,
        w,
        m ? Error("react-stack-top-frame") : D,
        m ? P(s(r)) : W
      );
    };
  }()), N;
}
var G;
function de() {
  return G || (G = 1, process.env.NODE_ENV === "production" ? T.exports = oe() : T.exports = ce()), T.exports;
}
var e = de();
const ue = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M19 19L14.7501 14.7425L19 19ZM17.1053 9.05263C17.1053 11.1883 16.2569 13.2365 14.7467 14.7467C13.2365 16.2569 11.1883 17.1053 9.05263 17.1053C6.91694 17.1053 4.86872 16.2569 3.35856 14.7467C1.8484 13.2365 1 11.1883 1 9.05263C1 6.91694 1.8484 4.86872 3.35856 3.35856C4.86872 1.8484 6.91694 1 9.05263 1C11.1883 1 13.2365 1.8484 14.7467 3.35856C16.2569 4.86872 17.1053 6.91694 17.1053 9.05263V9.05263Z",
        stroke: "white",
        "stroke-width": "2",
        "stroke-linecap": "round"
      }
    )
  }
), xe = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "19",
    height: "20",
    viewBox: "0 0 19 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "9.5", cy: "10", r: "8.5", stroke: "white", "stroke-width": "2" }),
      /* @__PURE__ */ e.jsx("circle", { cx: "15.6471", cy: "3.85294", r: "3.35294", fill: "#F36F45" })
    ]
  }
), fe = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "17",
    height: "18",
    viewBox: "0 0 17 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "3.4", cy: "3.9", r: "2.9", stroke: "white" }),
      /* @__PURE__ */ e.jsx("circle", { cx: "13.6", cy: "3.9", r: "2.9", stroke: "white" }),
      /* @__PURE__ */ e.jsx("circle", { cx: "13.6", cy: "14.1", r: "2.9", stroke: "white" }),
      /* @__PURE__ */ e.jsx("circle", { cx: "3.4", cy: "14.1", r: "2.9", stroke: "white" })
    ]
  }
), me = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx("path", { d: "M1 1L5 5L9 1", stroke: "#C4C4C4", "stroke-linecap": "round" })
  }
), z = ({ children: l }) => /* @__PURE__ */ e.jsx("div", { children: l }), he = ({ imageSrc: l }) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: `bg-[#17171B] w-9 h-5 flex cursor-pointer justify-between\r
		 items-center`,
    children: [
      /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx("img", { src: l, alt: "Profile Picture" }) }),
      /* @__PURE__ */ e.jsx("div", { className: "", children: /* @__PURE__ */ e.jsx(me, {}) })
    ]
  }
), pe = ({ userData: l }) => /* @__PURE__ */ e.jsxs("nav", { className: "bg-[#17171B] w-min flex relative space-x-6 py-4 px-6 cursor-pointer", children: [
  /* @__PURE__ */ e.jsx(ue, {}),
  /* @__PURE__ */ e.jsx(xe, {}),
  /* @__PURE__ */ e.jsx(fe, {}),
  /* @__PURE__ */ e.jsx(he, { imageSrc: l[0].imageSrc })
] }), u = ({
  label: l,
  size: n,
  weigth: a,
  color: s
}) => /* @__PURE__ */ e.jsx("div", { className: "m-0 p-0", children: /* @__PURE__ */ e.jsx(
  "span",
  {
    style: {
      fontSize: n,
      fontFamily: "quicksand, sans-serif",
      fontWeight: a,
      color: s || "#fff"
    },
    className: "m-0 p-0 select-none text-white ",
    children: l
  }
) }), we = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "51",
    height: "10",
    viewBox: "0 0 51 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M21 1.78118C8 8.39774 4.5 8.78118 0 9.78118H50.5C45.7 9.78118 37.5 5.16092 32 1.78118C28 -0.676808 25.5 -0.50917 21 1.78118Z",
        fill: "#F36F45"
      }
    )
  }
), je = ({ navItems: l }) => {
  const [n, a] = C("Movies");
  return /* @__PURE__ */ e.jsx("nav", { className: "bg-[#17171B] w-min flex relative sm:gap-2 lg:gap-13 py-4 px-6 cursor-pointer", children: l.map((s) => /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "relative bg-red flex flex-col items-center",
      onClick: () => a(s.title),
      children: [
        /* @__PURE__ */ e.jsx("a", { className: " whitespace-nowrap", children: /* @__PURE__ */ e.jsx(
          u,
          {
            label: s.title,
            size: "12px",
            weigth: s.title === n ? "bold" : "normal",
            color: s.title !== n ? "#606265" : void 0
          }
        ) }),
        s.title === n && /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-9 mt-1 transition-all duration-100 ease-in-out", children: /* @__PURE__ */ e.jsx(we, {}) })
      ]
    },
    s.title
  )) });
}, Pe = ({ navItems: l, userData: n }) => /* @__PURE__ */ e.jsxs("header", { className: "bg-[#17171B] flex flex-col-reverse md:flex-row md items-center justify-between min-h-24 p-1 xl:p-4 border-b border-[#323232]", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start", children: /* @__PURE__ */ e.jsx(je, { navItems: l }) }),
  /* @__PURE__ */ e.jsx("div", { className: "w-full md:w-auto flex justify-center md:justify-end", children: /* @__PURE__ */ e.jsx(pe, { userData: n }) })
] }), ge = ({
  imageSrc: l,
  title: n,
  description: a,
  onHoverChange: s,
  genre: i
}) => {
  const [c, d] = C(!1), h = () => {
    d(!0), s == null || s(!0);
  }, p = () => {
    d(!1), s == null || s(!1);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full overflow-hidden rounded-[20px] shadow-lg",
      onMouseEnter: h,
      onMouseLeave: p,
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            className: "w-full h-full max-h-[204px] object-cover",
            src: l,
            alt: "Preview"
          }
        ),
        c && a && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out", children: /* @__PURE__ */ e.jsxs("div", { className: "pt-3 pl-3", children: [
          /* @__PURE__ */ e.jsx(u, { size: "14px", weigth: "bold", label: n ?? "" }),
          /* @__PURE__ */ e.jsx(u, { size: "10px", weigth: "normal", label: i ?? "" }),
          /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden text-ellipsis line-clamp-2 max-h-full", children: /* @__PURE__ */ e.jsx(
            u,
            {
              size: "12px",
              weigth: "normal",
              label: a ?? ""
            }
          ) })
        ] }) })
      ]
    }
  );
}, ve = () => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "auto",
    height: "auto",
    viewBox: "0 0 10 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M8.85705 5.06748C9.05455 5.32581 9.05455 5.67456 8.85705 5.93248C8.23496 6.74456 6.74246 8.41665 4.99996 8.41665C3.25746 8.41665 1.76496 6.74456 1.14288 5.93248C1.04679 5.80879 0.994629 5.65661 0.994629 5.49998C0.994629 5.34335 1.04679 5.19117 1.14288 5.06748C1.76496 4.2554 3.25746 2.58331 4.99996 2.58331C6.74246 2.58331 8.23496 4.2554 8.85705 5.06748V5.06748Z",
          stroke: "white",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M5 6.75C5.69036 6.75 6.25 6.19036 6.25 5.5C6.25 4.80964 5.69036 4.25 5 4.25C4.30964 4.25 3.75 4.80964 3.75 5.5C3.75 6.19036 4.30964 6.75 5 6.75Z",
          stroke: "white",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      )
    ]
  }
) }), be = ({ viewers: l }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center w-full h-full ", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-2.5 mt-1 mx-2", children: /* @__PURE__ */ e.jsx(ve, {}) }),
  /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(u, { size: "10px", weigth: "normal", label: l }) })
] }), I = ({ label: l, color: n }) => /* @__PURE__ */ e.jsx("div", { className: "rounded-sm", children: /* @__PURE__ */ e.jsx(
  "p",
  {
    style: { backgroundColor: n },
    className: " text-[10px] py-1  px-3 rounded-[20px] text-[#2C383B] w-min whitespace-nowrap ",
    children: l
  }
) }), Ne = () => /* @__PURE__ */ e.jsx("div", { className: " w-full h-full ", children: /* @__PURE__ */ e.jsx(I, { label: "#1 Trending 🔥", color: "#FFFFFF" }) }), Ce = ({ currentViewers: l }) => /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center h-full", children: [
  /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx("img", { src: l[0].imageSrc }) }) }, l[0].id),
  /* @__PURE__ */ e.jsx("div", { className: "-ml-3 mr-3", children: /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsx("img", { src: l[1].imageSrc }) }) }, l[1].id),
  /* @__PURE__ */ e.jsx("div", { className: "-mt-1", children: /* @__PURE__ */ e.jsx(
    u,
    {
      size: "10px",
      weigth: "normal",
      label: `${l.length}+ friends are watching`
    }
  ) })
] }), ke = ({ label: l, size: n, weight: a }) => /* @__PURE__ */ e.jsx("button", { className: "appearance-none", children: /* @__PURE__ */ e.jsx(u, { size: "10px", label: l, weigth: "normal" }) }), V = () => /* @__PURE__ */ e.jsx("div", { className: "w-auto h-auto flex justify-center items-center rounded-full bg-[#C4C4C4]", children: /* @__PURE__ */ e.jsx("div", { className: "w-full p-1 h-full", children: /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "auto",
    height: "auto",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M2.6386 1.9083V10.1583C2.63886 10.2418 2.6619 10.3237 2.70524 10.3951C2.74857 10.4665 2.81055 10.5248 2.88452 10.5636C2.95849 10.6024 3.04164 10.6203 3.12502 10.6153C3.20841 10.6104 3.28886 10.5828 3.35773 10.5355L9.31606 6.41051C9.5631 6.23955 9.5631 5.82797 9.31606 5.65655L3.35773 1.53155C3.289 1.48381 3.20851 1.45581 3.12499 1.4506C3.04147 1.44538 2.95812 1.46316 2.88399 1.502C2.80987 1.54083 2.7478 1.59924 2.70454 1.67087C2.66128 1.7425 2.63847 1.82462 2.6386 1.9083Z",
        fill: "white"
      }
    )
  }
) }) }), Ee = () => /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row items-center justify-center w-25 h-8 rounded-[5px] bg-[#F36F45] cursor-pointer", children: [
  /* @__PURE__ */ e.jsx("div", { className: " opacity-75 w-5 mx-2 -ml-2 ", children: /* @__PURE__ */ e.jsx(V, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "h-full flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "-mt-1", children: /* @__PURE__ */ e.jsx(ke, { label: "Watch Now", size: "10px", weight: "normal" }) }) })
] }), R = ({
  title: l,
  secondaryTitle: n,
  link: a,
  thirdTitle: s,
  duration: i,
  imageSrc: c,
  views: d,
  stars: h,
  currentViewers: p,
  trend: k,
  description: v,
  genre: E
}) => {
  const [j, y] = C(!1);
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full h-full relative rounded-[20px] overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      (p == null ? void 0 : p.length) && !k && /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 left-0 mx-2", children: /* @__PURE__ */ e.jsx(Ce, { currentViewers: p }) }),
      l === "" && /* @__PURE__ */ e.jsx("div", { className: "absolute cursor-pointer -bottom-22 lg:-bottom-24  w-full h-full left-0 ml-6", children: /* @__PURE__ */ e.jsx(Ee, {}) }),
      k && /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 lg:-bottom-24  left-0 ml-2", children: /* @__PURE__ */ e.jsx(Ne, {}) }),
      d && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 mx-2", children: /* @__PURE__ */ e.jsx(be, { viewers: d }) }),
      /* @__PURE__ */ e.jsx(
        ge,
        {
          imageSrc: c,
          title: l,
          description: v,
          genre: E,
          onHoverChange: (_) => {
            v && y(_);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 bottom-0 w-full", children: l && !j && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute left-0 bottom-0 w-full transition-opacity duration-300 ${j ? "opacity-0 pointer-events-none" : "opacity-100"}`
      }
    ) })
  ] });
}, Oe = ({
  bannerPromo: l,
  continueWatching: n,
  popular: a
}) => /* @__PURE__ */ e.jsxs("main", { className: "bg-[#17171B] lg:max-w-min p-6 sm:p-10 lg:pt-10 2xl:pl-24 max-w-full", children: [
  /* @__PURE__ */ e.jsx("section", { className: "lg:block lg:h-[134px] lg:w-[834px] relative", children: /* @__PURE__ */ e.jsx(
    R,
    {
      title: "",
      thirdTitle: "",
      secondaryTitle: "",
      link: "",
      duration: "",
      views: "",
      imageSrc: l.imageSrc,
      currentViewers: l.currentViewers,
      genre: l.genre,
      description: l.description
    }
  ) }),
  /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "py-4 flex justify-between w-full flex-wrap", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-4", children: [
        /* @__PURE__ */ e.jsx(u, { label: "Continue watching", size: "18px", weigth: "bold" }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            label: "|",
            size: "12px",
            weigth: "normal",
            color: "#606265"
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            label: `${n.length} Movies`,
            size: "12px",
            weigth: "normal",
            color: "#606265"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "pr-14 cursor-pointer", children: /* @__PURE__ */ e.jsx(
        u,
        {
          label: "All Movies >",
          size: "12px",
          weigth: "normal",
          color: "#606265"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-6 py-4 w-full sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-6", children: n.map((s, i) => /* @__PURE__ */ e.jsx("article", { className: "w-full lg:w-[402px] lg:h-[170px]", children: /* @__PURE__ */ e.jsx(
      R,
      {
        title: s.title,
        secondaryTitle: s.secondaryTitle,
        link: s.link,
        duration: s.duration,
        imageSrc: s.imageSrc,
        genre: s.genre,
        description: s.description,
        currentViewers: l.currentViewers,
        trend: s.trend
      }
    ) }, i)) })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { className: "mt-8", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "py-4 flex justify-between w-full flex-wrap", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex lg:flex-wrap items-center gap-2 sm:gap-4", children: [
        /* @__PURE__ */ e.jsx(
          u,
          {
            label: "Popular movies 2021",
            size: "18px",
            weigth: "bold"
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            label: "|",
            size: "12px",
            weigth: "normal",
            color: "#606265"
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            label: `${a.length} Movies`,
            size: "12px",
            weigth: "normal",
            color: "#606265"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(
        u,
        {
          label: "All Movies >",
          size: "12px",
          weigth: "normal",
          color: "#606265"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-6 py-4 w-full sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-6", children: a.map((s, i) => /* @__PURE__ */ e.jsx("article", { className: "w-full lg:w-[258px] lg:h-[139px]", children: /* @__PURE__ */ e.jsx(
      R,
      {
        title: s.title,
        secondaryTitle: s.secondaryTitle,
        link: s.link,
        duration: s.duration,
        imageSrc: s.imageSrc,
        stars: s.stars,
        genre: s.genre,
        description: s.description
      }
    ) }, i)) })
  ] })
] }), ye = ({ category: l }) => {
  const n = ["#F36F45", "#8769FF", "#61D1EA"];
  let a = null;
  const s = () => {
    const i = n.filter((d) => d !== a), c = i[Math.floor(Math.random() * i.length)];
    return a = c, c;
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bg-[#1E1E21] w-full h-full px-6 lg:px-12 ", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pb-6 pt-6", children: /* @__PURE__ */ e.jsx(u, { size: "18px", label: "Favourite Genres", weigth: "bold" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-5 w-58 pb-4 ", children: l.allCategories.map((i, c) => /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(I, { color: s(), label: i }, c) })) })
  ] });
}, Te = () => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "6", cy: "6", r: "6", fill: "#C4C4C4" }),
      /* @__PURE__ */ e.jsx("path", { d: "M6 3V6M6 9V6M6 6H3H9", stroke: "black" })
    ]
  }
) }), Re = ({ category: l }) => /* @__PURE__ */ e.jsxs("div", { className: "bg-[#1E1E21] w-full h-full px-6 lg:px-12  ", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "pb-6 gap-1 flex items-center", children: [
    /* @__PURE__ */ e.jsx(Te, {}),
    /* @__PURE__ */ e.jsx(
      u,
      {
        size: "11px",
        label: "Add your favourite genres",
        weigth: "thin"
      }
    )
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-5 w-58 pb-8 ", children: l.favouriteCategorie.map((n, a) => /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(I, { label: n, color: "#FFFFFF" }, a) })) })
] }), _e = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "6",
    height: "13",
    viewBox: "0 0 6 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M0.749991 4.75003H5.24999C5.29555 4.74988 5.34021 4.73732 5.37916 4.71368C5.41811 4.69005 5.44988 4.65623 5.47104 4.61589C5.4922 4.57554 5.50196 4.53019 5.49927 4.4847C5.49657 4.43922 5.48152 4.39534 5.45574 4.35778L3.20574 1.10778C3.11249 0.973026 2.88799 0.973026 2.79449 1.10778L0.544491 4.35778C0.518447 4.39526 0.503174 4.43917 0.500332 4.48472C0.49749 4.53028 0.507187 4.57575 0.528369 4.61618C0.549552 4.65661 0.58141 4.69046 0.620482 4.71406C0.659554 4.73766 0.704346 4.7501 0.749991 4.75003Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M0.749991 8.24997H5.24999C5.29555 8.25012 5.34021 8.26268 5.37916 8.28632C5.41811 8.30995 5.44988 8.34377 5.47104 8.38411C5.4922 8.42446 5.50196 8.46981 5.49927 8.5153C5.49657 8.56078 5.48152 8.60466 5.45574 8.64222L3.20574 11.8922C3.11249 12.027 2.88799 12.027 2.79449 11.8922L0.544491 8.64222C0.518447 8.60474 0.503174 8.56083 0.500332 8.51528C0.49749 8.46972 0.507187 8.42425 0.528369 8.38382C0.549552 8.34339 0.58141 8.30954 0.620482 8.28594C0.659554 8.26234 0.704346 8.2499 0.749991 8.24997Z",
          fill: "white"
        }
      )
    ]
  }
), Se = ({ category: l }) => {
  const [n, a] = C(!1), [s, i] = C("Today"), c = (d) => {
    i(d), a(!1);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex w-full h-full items-center px-12 relative cursor-pointer",
      onClick: () => a((d) => !d),
      children: [
        /* @__PURE__ */ e.jsx(u, { label: "Sort by/", weigth: "normal", size: "12px" }),
        /* @__PURE__ */ e.jsxs("div", { className: "ml-2 mr-1  relative", children: [
          /* @__PURE__ */ e.jsx(
            u,
            {
              label: s,
              weigth: "normal",
              size: "12px",
              color: "#606265"
            }
          ),
          n && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 mt-1 bg-white border rounded shadow z-10 min-w-full", children: l.allCategories.map((d) => /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "px-4 py-2 hover:bg-gray-100 ",
              onClick: () => c(d),
              children: d
            },
            d
          )) })
        ] }),
        /* @__PURE__ */ e.jsx(_e, {})
      ]
    }
  );
}, Fe = ({
  videos: l,
  category: n,
  onCloseSideBar: a
}) => /* @__PURE__ */ e.jsxs("aside", { className: "bg-[#17171B] relative w-full lg:w-[450px] pt-8 items-center min-h-screen flex flex-col m-0 p-0 border-r border-[#323232]", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex w-full justify-between items-center px-6 sm:px-10 mb-4 whitespace-nowrap", children: [
    /* @__PURE__ */ e.jsx(u, { size: "18px", label: "New trailers", weigth: "bold" }),
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-between items-center w-auto", children: /* @__PURE__ */ e.jsx(Se, { category: n }) })
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-6 w-full items-center px-4 sm:px-6", children: l.map((s, i) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "w-full max-w-sm sm:max-w-md md:max-w-lg rounded-3xl overflow-hidden",
      children: /* @__PURE__ */ e.jsx(
        R,
        {
          title: s.title,
          secondaryTitle: s.secondaryTitle,
          link: s.link,
          thirdTitle: s.thirdTitle,
          duration: s.duration,
          views: s.views,
          imageSrc: s.imageSrc,
          genre: s.genre,
          description: s.description
        }
      )
    },
    i
  )) }),
  /* @__PURE__ */ e.jsxs("div", { className: "w-full mt-8", children: [
    /* @__PURE__ */ e.jsx(ye, { category: n }),
    /* @__PURE__ */ e.jsx(Re, { category: n })
  ] }),
  /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute cursor-pointer right-0 top-0 lg:top-1/12  lg:-right-4.5 transform rotate-180 w-7 lg:block",
      onClick: a,
      children: /* @__PURE__ */ e.jsx(V, {})
    }
  )
] });
export {
  Pe as Header,
  Oe as Main,
  V as PlayItem,
  Fe as SideBar
};
