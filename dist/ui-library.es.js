import oe, { useState as R } from "react";
var S = { exports: {} }, k = {};
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
function xe() {
  if (Z) return k;
  Z = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function i(s, a, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      c = {};
      for (var m in a)
        m !== "key" && (c[m] = a[m]);
    } else c = a;
    return a = c.ref, {
      $$typeof: r,
      type: s,
      key: d,
      ref: a !== void 0 ? a : null,
      props: c
    };
  }
  return k.Fragment = t, k.jsx = i, k.jsxs = i, k;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function de() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && function() {
    function r(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === ie ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case y:
          return "Fragment";
        case Q:
          return "Profiler";
        case X:
          return "StrictMode";
        case se:
          return "Suspense";
        case re:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case z:
            return "Portal";
          case ee:
            return (l.displayName || "Context") + ".Provider";
          case K:
            return (l._context.displayName || "Context") + ".Consumer";
          case le:
            var n = l.render;
            return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case te:
            return n = l.displayName || null, n !== null ? n : r(l.type) || "Memo";
          case I:
            n = l._payload, l = l._init;
            try {
              return r(l(n));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function i(l) {
      try {
        t(l);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var x = n.error, u = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return x.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), t(l);
      }
    }
    function s(l) {
      if (l === y) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === I)
        return "<...>";
      try {
        var n = r(l);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = M.A;
      return l === null ? null : l.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function d(l) {
      if (Y.call(l, "key")) {
        var n = Object.getOwnPropertyDescriptor(l, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function m(l, n) {
      function x() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: x,
        configurable: !0
      });
    }
    function b() {
      var l = r(this.type);
      return V[l] || (V[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function w(l, n, x, u, p, f, P, O) {
      return x = f.ref, l = {
        $$typeof: E,
        type: l,
        key: n,
        props: f,
        _owner: p
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function N(l, n, x, u, p, f, P, O) {
      var h = n.children;
      if (h !== void 0)
        if (u)
          if (ae(h)) {
            for (u = 0; u < h.length; u++)
              C(h[u]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else C(h);
      if (Y.call(n, "key")) {
        h = r(l);
        var v = Object.keys(n).filter(function(ce) {
          return ce !== "key";
        });
        u = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", U[h + u] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          h,
          v,
          h
        ), U[h + u] = !0);
      }
      if (h = null, x !== void 0 && (i(x), h = "" + x), d(n) && (i(n.key), h = "" + n.key), "key" in n) {
        x = {};
        for (var B in n)
          B !== "key" && (x[B] = n[B]);
      } else x = n;
      return h && m(
        x,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), w(
        l,
        h,
        f,
        p,
        a(),
        x,
        P,
        O
      );
    }
    function C(l) {
      typeof l == "object" && l !== null && l.$$typeof === E && l._store && (l._store.validated = 1);
    }
    var g = oe, E = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), K = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), ie = Symbol.for("react.client.reference"), M = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, ae = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(l) {
        return l();
      }
    };
    var $, V = {}, W = g["react-stack-bottom-frame"].bind(
      g,
      c
    )(), H = A(s(c)), U = {};
    T.Fragment = y, T.jsx = function(l, n, x, u, p) {
      var f = 1e4 > M.recentlyCreatedOwnerStacks++;
      return N(
        l,
        n,
        x,
        !1,
        u,
        p,
        f ? Error("react-stack-top-frame") : W,
        f ? A(s(l)) : H
      );
    }, T.jsxs = function(l, n, x, u, p) {
      var f = 1e4 > M.recentlyCreatedOwnerStacks++;
      return N(
        l,
        n,
        x,
        !0,
        u,
        p,
        f ? Error("react-stack-top-frame") : W,
        f ? A(s(l)) : H
      );
    };
  }()), T;
}
var q;
function ue() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? S.exports = xe() : S.exports = de()), S.exports;
}
var e = ue();
const he = () => /* @__PURE__ */ e.jsx(
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
), me = () => /* @__PURE__ */ e.jsxs(
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
), pe = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx("path", { d: "M1 1L5 5L9 1", stroke: "#C4C4C4", "stroke-linecap": "round" })
  }
), D = ({ children: r }) => /* @__PURE__ */ e.jsx("div", { children: r }), je = ({ imageSrc: r }) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: `bg-[#17171B] w-9 h-5 flex cursor-pointer justify-between\r
		 items-center`,
    children: [
      /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx("img", { src: r, alt: "Profile Picture" }) }),
      /* @__PURE__ */ e.jsx("div", { className: "", children: /* @__PURE__ */ e.jsx(pe, {}) })
    ]
  }
), we = ({ userData: r }) => /* @__PURE__ */ e.jsxs("nav", { className: "bg-[#17171B] w-min flex relative gap-5.5 pt-10.5 px-6 cursor-pointer", children: [
  /* @__PURE__ */ e.jsx(he, {}),
  /* @__PURE__ */ e.jsx(me, {}),
  /* @__PURE__ */ e.jsx(fe, {}),
  /* @__PURE__ */ e.jsx(je, { imageSrc: r[0].imageSrc })
] }), o = ({ label: r, size: t, weigth: i, color: s }) => /* @__PURE__ */ e.jsx("div", { className: "m-0 p-0", children: /* @__PURE__ */ e.jsx(
  "span",
  {
    style: {
      fontSize: t,
      fontFamily: "quicksand, sans-serif",
      fontWeight: i,
      color: s || "#fff"
    },
    className: "m-0 p-0 select-none text-white ",
    children: r
  }
) }), ge = () => /* @__PURE__ */ e.jsx(
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
), ve = ({ navItems: r }) => {
  const [t, i] = R("Movies");
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      className: `bg-[#17171B] w-min flex relative gap-2\r
		 lg:gap-15 pt-9.5 px-6 cursor-pointer lg:ml-[226px]`,
      children: r.map((s) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "relative bg-red flex flex-col items-center",
          onClick: () => i(s.title),
          children: [
            /* @__PURE__ */ e.jsx("a", { className: " whitespace-nowrap", children: /* @__PURE__ */ e.jsx(
              o,
              {
                label: s.title,
                size: "12px",
                weigth: s.title === t ? "bold" : "normal",
                color: s.title !== t ? "#606265" : void 0
              }
            ) }),
            s.title === t && /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-7 sm:-bottom-2 sm:pb-1 xl:-bottom-5  transition-all duration-100 ease-in-out", children: /* @__PURE__ */ e.jsx(ge, {}) })
          ]
        },
        s.title
      ))
    }
  );
}, Ie = ({ navItems: r, userData: t }) => /* @__PURE__ */ e.jsxs("header", { className: "  header-gradient-border bg-[#17171B] lg:pl-[40px] flex flex-col-reverse md:flex-row justify-between min-h-22 p-1 xl:p-4 ", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-full md:w-auto mb-6 md:mb-0 flex justify-center md:justify-start", children: /* @__PURE__ */ e.jsx(ve, { navItems: r }) }),
  /* @__PURE__ */ e.jsx("div", { className: "w-full md:w-auto flex justify-center md:justify-end", children: /* @__PURE__ */ e.jsx(we, { userData: t }) })
] }), be = ({
  imageSrc: r,
  title: t,
  description: i,
  onHoverChange: s,
  genre: a
}) => {
  const [c, d] = R(!1), m = () => {
    d(!0), s == null || s(!0);
  }, b = () => {
    d(!1), s == null || s(!1);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "w-full h-full overflow-hidden rounded-[20px] shadow-lg",
      onMouseEnter: m,
      onMouseLeave: b,
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            className: "w-full h-full max-h-[150px] object-cover",
            src: r,
            alt: "Preview"
          }
        ),
        c && i && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out", children: /* @__PURE__ */ e.jsxs("div", { className: "py-5.5 px-6.5", children: [
          /* @__PURE__ */ e.jsx(o, { size: "14px", weigth: "bold", label: t ?? "" }),
          /* @__PURE__ */ e.jsx(o, { size: "10px", weigth: "normal", label: a ?? "" }),
          /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden text-ellipsis line-clamp-2 max-h-full", children: /* @__PURE__ */ e.jsx(
            o,
            {
              size: "12px",
              weigth: "normal",
              label: i ?? ""
            }
          ) })
        ] }) })
      ]
    }
  );
}, L = () => /* @__PURE__ */ e.jsx("div", { className: "w-auto h-auto flex justify-center items-center rounded-full bg-[#C4C4C4]", children: /* @__PURE__ */ e.jsx("div", { className: "w-full p-1 h-full", children: /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "100%",
    height: "100%",
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
) }) }), _ = ({ label: r, color: t }) => /* @__PURE__ */ e.jsx("div", { className: "rounded-sm", children: /* @__PURE__ */ e.jsx(
  "p",
  {
    style: { backgroundColor: t },
    className: " text-[10px] py-1 px-2.5 rounded-[20px] text-[#2C383B] w-min whitespace-nowrap ",
    children: r
  }
) }), Ne = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: "100%",
    height: "100%",
    viewBox: "0 0 11 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M5.16366 0.78461C5.25346 0.508216 5.64449 0.508216 5.73429 0.784609L6.7287 3.8451C6.76887 3.9687 6.88405 4.05239 7.01402 4.05239H10.232C10.5226 4.05239 10.6435 4.42428 10.4083 4.5951L7.80494 6.48658C7.69979 6.56298 7.65579 6.69839 7.69596 6.82199L8.69037 9.88248C8.78017 10.1589 8.46383 10.3887 8.22872 10.2179L5.62531 8.32641C5.52016 8.25001 5.37779 8.25001 5.27264 8.32641L2.66923 10.2179C2.43412 10.3887 2.11777 10.1589 2.20758 9.88248L3.20199 6.82199C3.24216 6.69839 3.19816 6.56298 3.09301 6.48658L0.489605 4.5951C0.254491 4.42428 0.375324 4.05239 0.665941 4.05239H3.88393C4.0139 4.05239 4.12908 3.9687 4.16924 3.8451L5.16366 0.78461Z",
        fill: "white"
      }
    )
  }
), Ce = ({ rate: r }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center w-full h-full ", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-2.5 mt-2 mb-5  mx-0.5", children: /* @__PURE__ */ e.jsx(Ne, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "mb-5 ", children: /* @__PURE__ */ e.jsx(o, { size: "10px", weigth: "normal", label: r }) })
] }), Ee = ({
  title: r,
  secondaryTitle: t,
  link: i,
  thirdTitle: s,
  duration: a,
  stars: c
}) => /* @__PURE__ */ e.jsxs(
  "div",
  {
    className: `w-full bg-black/40 minx-h-[60px]\r
			rounded-b-xl rounded-t-xl backdrop-blur-[5px] \r
		 relative\r
		 cursor-pointer\r
		 `,
    children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `absolute w-full \r
			h-full z-0 text-white `
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex  justify-between px-4.5 items-center  relative z-10", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex pt-3", children: [
          /* @__PURE__ */ e.jsx("div", { className: " w-7 h-12 flex flex-col justify-start mx-2", children: /* @__PURE__ */ e.jsx(L, {}) }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex -mt-1 ml-1 flex-col leading-[13px]", children: [
            /* @__PURE__ */ e.jsx("div", { title: r, children: /* @__PURE__ */ e.jsx(o, { size: "11px", weigth: "bold", label: r }) }),
            /* @__PURE__ */ e.jsx(o, { size: "10px", weigth: "thin", label: t }),
            s && /* @__PURE__ */ e.jsx(o, { size: "10px", weigth: "thin", label: s })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex ", children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-1 h-8 mr-4 bg-gradient-to-b from-white/20 backdrop-blur-xl via-white/50 to-white/20" }),
          /* @__PURE__ */ e.jsx("div", { className: "mr-2", children: c ? /* @__PURE__ */ e.jsx(Ce, { rate: c }) : /* @__PURE__ */ e.jsx(_, { label: a, color: "#FFFFFF" }) })
        ] })
      ] })
    ]
  }
), ye = () => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "100%",
    height: "100%",
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
) }), ke = ({ viewers: r }) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center w-full h-full ", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-2.5 mt-1 mx-2", children: /* @__PURE__ */ e.jsx(ye, {}) }),
  /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(o, { size: "10px", weigth: "normal", label: r }) })
] }), Te = () => /* @__PURE__ */ e.jsx("div", { className: " w-full h-full  ", children: /* @__PURE__ */ e.jsx(_, { label: "#1 Trending 🔥", color: "#FFFFFF" }) }), Re = ({ currentViewers: r }) => /* @__PURE__ */ e.jsxs("div", { className: "w-full flex items-center h-full", children: [
  /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx("img", { src: r[0].imageSrc }) }) }, r[0].id),
  /* @__PURE__ */ e.jsx("div", { className: "-ml-3 mr-3", children: /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx("img", { src: r[1].imageSrc }) }) }, r[1].id),
  /* @__PURE__ */ e.jsx("div", { className: "-mt-1", children: /* @__PURE__ */ e.jsx(
    o,
    {
      size: "10px",
      weigth: "normal",
      label: `${r.length}+ friends are watching`
    }
  ) })
] }), J = ({ label: r, size: t, weight: i, onClick: s }) => /* @__PURE__ */ e.jsx("button", { className: "appearance-none", children: /* @__PURE__ */ e.jsx(o, { size: "10px", label: r, weigth: "normal" }) }), Se = () => /* @__PURE__ */ e.jsxs("div", { className: "flex flex-row items-center justify-center w-25 h-8 rounded-[5px] bg-[#F36F45] cursor-pointer", children: [
  /* @__PURE__ */ e.jsx("div", { className: " opacity-75 w-5 mx-2 -ml-2 ", children: /* @__PURE__ */ e.jsx(L, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "h-full flex items-center", children: /* @__PURE__ */ e.jsx("div", { className: "-mt-1", children: /* @__PURE__ */ e.jsx(J, { label: "Watch Now", size: "10px", weight: "normal" }) }) })
] }), F = ({
  id: r,
  title: t,
  secondaryTitle: i,
  link: s,
  thirdTitle: a,
  duration: c,
  imageSrc: d,
  views: m,
  stars: b,
  currentViewers: w,
  trend: N,
  description: C,
  genre: g
}) => {
  const [E, z] = R(!1);
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full h-full relative rounded-[20px] overflow-hidden", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      (w == null ? void 0 : w.length) && !N && /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 left-0 mx-2", children: /* @__PURE__ */ e.jsx(Re, { currentViewers: w }) }),
      t === "" && /* @__PURE__ */ e.jsx("div", { className: "absolute cursor-pointer -bottom-22 lg:-bottom-20.5  w-full h-full left-0 ml-6", children: /* @__PURE__ */ e.jsx(Se, {}) }),
      N && /* @__PURE__ */ e.jsx("div", { className: "absolute top-2 lg:-bottom-24 left-0 ml-2", children: /* @__PURE__ */ e.jsx(Te, {}) }),
      m && /* @__PURE__ */ e.jsx("div", { className: "absolute top-0 right-0 mx-2", children: /* @__PURE__ */ e.jsx(ke, { viewers: m }) }),
      /* @__PURE__ */ e.jsx(
        be,
        {
          imageSrc: d,
          title: t,
          description: C,
          genre: g,
          onHoverChange: (y) => {
            C && z(y);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 bottom-0 w-full", children: t && !E && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `absolute left-0 bottom-0 w-full transition-opacity duration-300 ${E ? "opacity-0 pointer-events-none" : "opacity-100"}`,
        children: /* @__PURE__ */ e.jsx(
          Ee,
          {
            title: t,
            secondaryTitle: i,
            link: s,
            thirdTitle: a,
            duration: c,
            stars: b
          }
        )
      }
    ) })
  ] });
}, j = () => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full bg-gray-500 animate-pulse rounded-[20px]" }), Fe = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-full lg:w-[258px] lg:h-[139px]", children: /* @__PURE__ */ e.jsx(j, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "w-full lg:w-[258px] lg:h-[139px]", children: /* @__PURE__ */ e.jsx(j, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "w-full lg:w-[258px] lg:h-[139px]", children: /* @__PURE__ */ e.jsx(j, {}) })
] }), _e = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("div", { className: "-full lg:w-[402px] lg:h-[170px]", children: /* @__PURE__ */ e.jsx(j, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "-full lg:w-[402px] lg:h-[170px]", children: /* @__PURE__ */ e.jsx(j, {}) })
] }), Ye = ({ bannerPromo: r, continueWatching: t, popular: i }) => /* @__PURE__ */ e.jsxs("main", { className: "bg-[#17171B] px-4 sm:pl-9 sm:pr-7 lg:max-w-min pb-4.5 xs:p-10 lg:pt-8.5 2xl:pl-24 max-w-full", children: [
  /* @__PURE__ */ e.jsx("section", { className: "lg:block lg:h-[134px] lg:w-[834px] relative", children: r ? /* @__PURE__ */ e.jsx(
    F,
    {
      id: r.id,
      title: "",
      thirdTitle: "",
      secondaryTitle: "",
      link: "",
      duration: "",
      views: "",
      imageSrc: r.imageSrc,
      currentViewers: r.currentViewers,
      genre: r.genre,
      description: r.description
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ e.jsx(j, {}) }) }),
  /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "pt-9.5 pb-5.5 flex justify-between w-full flex-wrap", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 sm:gap-5", children: [
        /* @__PURE__ */ e.jsx(o, { label: "Continue watching", size: "18px", weigth: "bold" }),
        /* @__PURE__ */ e.jsx(
          o,
          {
            label: "|",
            size: "12px",
            weigth: "normal",
            color: "#606265"
          }
        ),
        /* @__PURE__ */ e.jsx(
          o,
          {
            label: `${t.length} Movies`,
            size: "12px",
            weigth: "normal",
            color: "#606265"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(
        o,
        {
          label: "All Movies >",
          size: "12px",
          weigth: "normal",
          color: "#606265"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-6  w-full sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-8", children: t.length === 0 ? /* @__PURE__ */ e.jsx(_e, {}) : t.map((s) => /* @__PURE__ */ e.jsx(
      "article",
      {
        className: "w-full lg:w-[402px] lg:h-[170px]",
        children: /* @__PURE__ */ e.jsx(
          F,
          {
            id: s.id,
            title: s.title,
            secondaryTitle: s.secondaryTitle,
            link: s.link,
            duration: s.duration,
            imageSrc: s.imageSrc,
            genre: s.genre,
            description: s.description,
            currentViewers: r.currentViewers,
            trend: s.trend
          }
        )
      },
      s.id
    )) })
  ] }),
  /* @__PURE__ */ e.jsxs("section", { className: "pt-9.5", children: [
    /* @__PURE__ */ e.jsxs("div", { className: " flex justify-between w-full flex-wrap  pb-4.5", children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex lg:flex-wrap items-center gap-2 sm:gap-4", children: /* @__PURE__ */ e.jsx(
        o,
        {
          label: "Popular movies 2021",
          size: "18px",
          weigth: "bold"
        }
      ) }),
      /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(
        o,
        {
          label: "All Movies >",
          size: "12px",
          weigth: "normal",
          color: "#606265"
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-6 pb-6  w-full sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-7.5", children: i.length === 0 ? /* @__PURE__ */ e.jsx(Fe, {}) : i.map((s) => /* @__PURE__ */ e.jsx(
      "article",
      {
        className: "w-full lg:w-[258px] lg:h-[139px]",
        children: /* @__PURE__ */ e.jsx(
          F,
          {
            id: s.id,
            title: s.title,
            secondaryTitle: s.secondaryTitle,
            link: s.link,
            duration: s.duration,
            imageSrc: s.imageSrc,
            stars: s.stars,
            genre: s.genre,
            description: s.description
          }
        )
      },
      s.id
    )) })
  ] })
] }), ze = ({ category: r }) => {
  const t = ["#F36F45", "#8769FF", "#61D1EA"];
  let i = null;
  const s = () => {
    const a = t.filter((d) => d !== i), c = a[Math.floor(Math.random() * a.length)];
    return i = c, c;
  };
  return /* @__PURE__ */ e.jsxs("div", { className: " w-full px-6 lg:px-12.5 ", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pb-7.5 pt-6", children: /* @__PURE__ */ e.jsx(o, { size: "18px", label: "Favourite Genres", weigth: "bold" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-5 w-58  ", children: r.allCategories.map((a, c) => /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(_, { color: s(), label: a }, c) })) })
  ] });
}, Me = () => /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(
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
) }), Ae = ({ category: r }) => /* @__PURE__ */ e.jsxs("div", { className: " w-full px-6 lg:px-12.5 lg:pb-6  ", children: [
  /* @__PURE__ */ e.jsxs("div", { className: " py-5 gap-2 flex items-center", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pt-1 h-4", children: /* @__PURE__ */ e.jsx(Me, {}) }),
    /* @__PURE__ */ e.jsx(
      o,
      {
        size: "11px",
        label: "Add your favourite genres",
        weigth: "thin"
      }
    )
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-5 w-58 pb-4.5 ", children: r.favouriteCategorie.map((t, i) => /* @__PURE__ */ e.jsx("div", { className: "cursor-pointer", children: /* @__PURE__ */ e.jsx(_, { label: t, color: "#FFFFFF" }, i) })) })
] }), Pe = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: "12",
    height: "12",
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
), Oe = ({ category: r }) => {
  const [t, i] = R(!1), [s, a] = R("Today"), c = (d) => {
    a(d), i(!1);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "flex w-full h-full items-center  relative cursor-pointer",
      onClick: () => i((d) => !d),
      children: [
        /* @__PURE__ */ e.jsx(o, { label: "Sort by", weigth: "normal", size: "12px" }),
        /* @__PURE__ */ e.jsxs("div", { className: "ml-3.5 mr-1  relative", children: [
          /* @__PURE__ */ e.jsx(
            o,
            {
              label: s,
              weigth: "normal",
              size: "12px",
              color: "#606265"
            }
          ),
          t && /* @__PURE__ */ e.jsx("div", { className: "absolute left-0 mt-1 bg-white border rounded shadow z-10 min-w-full", children: r.allCategories.map((d) => /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "px-4 py-2 hover:bg-gray-100 ",
              onClick: () => c(d),
              children: d
            },
            d
          )) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "pt-1", children: /* @__PURE__ */ e.jsx(Pe, {}) })
      ]
    }
  );
}, Be = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx("div", { className: "-full lg:w-[402px] lg:h-[170px]", children: /* @__PURE__ */ e.jsx(j, {}) }),
  /* @__PURE__ */ e.jsx("div", { className: "-full lg:w-[402px] lg:h-[170px]", children: /* @__PURE__ */ e.jsx(j, {}) })
] }), $e = ({ videos: r, category: t, onCloseSideBar: i }) => /* @__PURE__ */ e.jsxs("aside", { className: "bg-[#17171B] relative w-full lg:w-[450px] pt-8.5  items-center xs:min-h-screen flex flex-col 2xl:h-screen m-0 p-0 border-r border-[#323232]", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "flex w-full justify-between items-center px-6  lg:px-12.5 sm:px-6 whitespace-nowrap", children: [
    /* @__PURE__ */ e.jsx(o, { size: "18px", label: "New trailers", weigth: "bold" }),
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-between items-center w-auto", children: /* @__PURE__ */ e.jsx(Oe, { category: t }) })
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "flex flex-col pt-5.5 pb-5 sm:px-6.5 gap-5.5 w-full items-center ", children: r.length === 0 ? /* @__PURE__ */ e.jsx(Be, {}) : r.map((s) => /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "w-full max-h-[150px]  px-6 max-w-sm sm:max-w-md md:max-w-lg rounded-3xl overflow-hidden",
      children: /* @__PURE__ */ e.jsx(
        F,
        {
          id: s.id,
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
    s.id
  )) }),
  /* @__PURE__ */ e.jsxs("div", { className: " bg-[#1E1E21] 2xl:h-screen w-full", children: [
    /* @__PURE__ */ e.jsx(ze, { category: t }),
    /* @__PURE__ */ e.jsx(Ae, { category: t })
  ] }),
  /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "absolute cursor-pointer top-2 -right-3 xs:top-0 lg:top-1/12  lg:-right-4.5 transform rotate-180 w-7 lg:block",
      onClick: i,
      children: /* @__PURE__ */ e.jsx(L, {})
    }
  )
] }), Ve = ({ label: r }) => /* @__PURE__ */ e.jsx("div", { className: "bg-[#17171B] max-w-min whitespace-nowrap p-3 rounded-[20px] text-white", children: r }), De = () => /* @__PURE__ */ e.jsx("div", { className: "w-full h-full", children: /* @__PURE__ */ e.jsxs(
  "svg",
  {
    height: "100%",
    width: "100%",
    viewBox: "0 0 496.2 496.2",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": "Popcorn",
    children: [
      /* @__PURE__ */ e.jsx("circle", { fill: "#334D5C", cx: "248.1", cy: "248.1", r: "248.1" }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#E2BA13",
          d: `M188.4,94c-8.9,10.3-8.1,25.6,1.7,34c4,3.4,8.8,5.2,13.7,5.5c1.3,2.9,3.3,5.5,5.8,7.7\r
						c9.8,8.5,25,7,33.9-3.3c4.2-4.9,6.3-11,6.2-16.9c2.2-1.4,4.3-3.1,6.2-5.2c8.9-10.3,8.1-25.6-1.7-34s-25-7-33.9,3.3\r
						c-0.8,0.9-1.4,1.8-2.1,2.7C208.6,82.7,196.1,85,188.4,94z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EDC92F",
          d: `M267.1,82.5c-10.8,0.7-19,9.6-18.4,19.9c0.3,4.1,1.9,7.9,4.5,10.8c-0.9,2.4-1.3,4.9-1.2,7.6\r
						c0.6,10.3,9.9,18.1,20.7,17.4c5.2-0.3,9.7-2.5,13-5.8c2,0.5,4.2,0.7,6.4,0.6c10.8-0.7,19-9.6,18.4-19.9s-9.9-18.1-20.7-17.4\r
						c-0.9,0.1-1.8,0.2-2.7,0.4C284.7,87.7,276.5,81.9,267.1,82.5z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M174.7,145.6c0-10.8-8.4-19.6-18.7-19.6c-4.2,0-8,1.4-11.1,3.8c-2.3-1.1-4.8-1.6-7.5-1.6\r
						c-10.3,0-18.7,8.8-18.7,19.6c0,5.2,1.9,9.9,5,13.4c-0.6,2-1,4.1-1,6.3c0,10.8,8.4,19.6,18.7,19.6s18.7-8.8,18.7-19.6\r
						c0-0.9-0.1-1.8-0.2-2.7C168.4,162.8,174.7,155,174.7,145.6z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#F9E595",
          d: `M195.7,155.9c10.8-0.6,19.1-9.5,18.5-19.8c-0.2-4.2-1.9-7.9-4.5-10.9c0.9-2.4,1.4-4.9,1.2-7.6\r
						c-0.6-10.3-9.8-18.1-20.6-17.5c-5.2,0.3-9.7,2.5-13,5.8c-2-0.5-4.2-0.8-6.4-0.6c-10.8,0.6-19.1,9.5-18.5,19.8s9.8,18.1,20.6,17.5\r
						c0.9-0.1,1.8-0.2,2.7-0.3C178.1,150.5,186.3,156.4,195.7,155.9z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M359.7,177.7c10.8-0.6,19.1-9.5,18.5-19.8c-0.2-4.2-1.9-7.9-4.5-10.9c0.9-2.4,1.4-4.9,1.2-7.6\r
						c-0.6-10.3-9.8-18.1-20.6-17.5c-5.2,0.3-9.7,2.5-13,5.8c-2-0.5-4.2-0.8-6.4-0.6c-10.8,0.6-19.1,9.5-18.5,19.8s9.8,18.1,20.6,17.5\r
						c0.9-0.1,1.8-0.2,2.7-0.3C342.1,172.4,350.3,178.3,359.7,177.7z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M204.2,174.1c10.8-0.6,19.1-9.5,18.5-19.8c-0.2-4.2-1.9-7.9-4.5-10.9c0.9-2.4,1.4-4.9,1.2-7.6\r
						c-0.6-10.3-9.8-18.1-20.6-17.5c-5.2,0.3-9.7,2.5-13,5.8c-2-0.5-4.2-0.8-6.4-0.6c-10.8,0.6-19.1,9.5-18.5,19.8s9.8,18.1,20.6,17.5\r
						c0.9-0.1,1.8-0.2,2.7-0.3C186.6,168.8,194.8,174.6,204.2,174.1z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M249.1,152.2c10.8-0.6,19.1-9.5,18.5-19.8c-0.2-4.1-1.9-7.9-4.5-10.9c0.9-2.4,1.4-4.9,1.2-7.6\r
						c-0.6-10.3-9.8-18.1-20.6-17.5c-5.2,0.3-9.7,2.5-13,5.8c-2-0.5-4.2-0.8-6.4-0.6c-10.8,0.6-19.1,9.5-18.5,19.8s9.8,18.1,20.6,17.5\r
						c0.9-0.1,1.8-0.2,2.7-0.3C231.5,146.9,239.7,152.8,249.1,152.2z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M343.9,141.2c6.1-8.9,4.2-20.9-4.2-26.7c-3.4-2.4-7.4-3.4-11.3-3.1c-1.3-2.2-3-4.1-5.2-5.6\r
						c-8.5-5.9-20.4-3.4-26.5,5.5c-2.9,4.2-4,9.2-3.4,13.8c-1.7,1.3-3.2,2.8-4.4,4.6c-6.1,8.9-4.2,20.9,4.3,26.7\r
						c8.5,5.9,20.4,3.4,26.5-5.5c0.5-0.8,1-1.5,1.4-2.3C328.9,151.8,338.6,149,343.9,141.2z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M258.2,145.6c1.3-10.7-6-20.4-16.2-21.7c-4.1-0.5-8.1,0.5-11.5,2.5c-2.2-1.3-4.6-2.2-7.2-2.5\r
						c-10.2-1.2-19.6,6.5-20.9,17.2c-0.6,5.1,0.7,10,3.4,13.9c-0.9,1.9-1.5,4-1.8,6.2c-1.3,10.7,6,20.4,16.2,21.7\r
						c10.2,1.2,19.6-6.5,20.9-17.2c0.1-0.9,0.2-1.8,0.1-2.7C249.8,162,257.1,155,258.2,145.6z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#F9E595",
          d: `M231.1,161.3c-1.3,12.2,7.1,23,18.7,24.3c4.7,0.5,9.2-0.6,12.9-3c2.5,1.5,5.2,2.4,8.2,2.8\r
						c11.6,1.2,22-7.6,23.3-19.8c0.6-5.8-1-11.3-4-15.6c1-2.2,1.6-4.5,1.9-7c1.3-12.2-7.1-23-18.6-24.3c-11.6-1.2-22,7.6-23.3,19.8\r
						c-0.1,1-0.1,2.1-0.1,3.1C240.3,142.6,232.2,150.7,231.1,161.3z`
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fill: "#EFD35B",
          d: `M330.2,161.7c6.3-8.8,4.5-20.8-3.9-26.8c-3.4-2.4-7.3-3.5-11.3-3.3c-1.3-2.2-3-4.1-5.2-5.7\r
						c-8.4-6-20.3-3.6-26.6,5.2c-3,4.2-4.1,9.1-3.6,13.8c-1.7,1.2-3.2,2.8-4.5,4.6c-6.2,8.8-4.5,20.8,3.9,26.8s20.3,3.6,26.6-5.2\r
						c0.5-0.8,1-1.5,1.4-2.3C315,172.1,324.7,169.3,330.2,161.7z`
        }
      ),
      /* @__PURE__ */ e.jsxs("g", { children: [
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "#E5DDD7",
            d: `M383.2,143.9c-0.7-0.7-1.7-1-2.7-0.8l-15.2-6.7l-16.9,13.5l-19.1-5.9l-14.8,13.1l-17.2-6.3\r
							L281.9,164l-16-6.5l-17.8,13.7l-19.3-14l-14.4,6.9l-18-13.8l-15.3,6.7l-16.8-13.5L148,150l-16.1-13.4l-16.1,6.5\r
							c-1-0.2-2,0.1-2.7,0.8s-1,1.7-0.9,2.7l40.6,243.7c0.2,1.1,1,2,2.1,2.4l92.4,28.2c0,0,0,0,0.1,0l0,0h0.1c0.1,0,0.2,0.1,0.3,0.1\r
							s0.2,0,0.3,0h0.1l0,0l0,0h0.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3-0.1h0.1l0,0c0,0,0,0,0.1,0l92.4-28.2c1.1-0.3,1.9-1.3,2.1-2.4\r
							l40.5-243.8C384.2,145.6,383.9,144.6,383.2,143.9z`
          }
        ),
        /* @__PURE__ */ e.jsx("polygon", { fill: "#E5DDD7", points: "248.1,418 248.1,418 248.1,418" }),
        /* @__PURE__ */ e.jsx("polygon", { fill: "#E5DDD7", points: "248.1,418 248.1,418 248.1,418" }),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#E5DDD7",
            points: "248.1,174.3 248.1,174.3 248.1,418 248.1,418 248.1,418"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("g", { children: [
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#EA4949",
            points: "122.5,147.6 160.8,391.3 175.5,395.8 143.6,152.1 132.8,141.4"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#EA4949",
            points: "154.8,154.5 183.3,398.2 197.9,402.6 175.9,159 165.9,148.4"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#EA4949",
            points: "187.1,161.3 205.7,405 220.4,409.5 208.2,165.8 196.3,154.9"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#EA4949",
            points: "219.4,168.2 228.2,411.9 242.8,416.3 240.5,172.7 229.3,161.9"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("g", { children: [
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#BF1717",
            points: "256.7,172.5 254.1,416.1 268.8,411.6 277.8,168 265.9,162.1"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#BF1717",
            points: "289,165.6 276.5,409.3 291.2,404.8 310.1,161.1 298.5,155.2"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#BF1717",
            points: "321.3,158.7 299,402.4 313.7,397.9 342.4,154.3 330.9,148.3"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "polygon",
          {
            fill: "#BF1717",
            points: "353.6,151.9 321.4,395.6 336.1,391.1 374.7,147.4 362.8,141.5"
          }
        )
      ] })
    ]
  }
) }), We = ({ onClickEvent: r }) => /* @__PURE__ */ e.jsxs("div", { className: "h-screen bg-[#17171B] flex justify-center flex-col items-center w-full", children: [
  /* @__PURE__ */ e.jsx("div", { className: "w-54 h-54", children: /* @__PURE__ */ e.jsx(De, {}) }),
  /* @__PURE__ */ e.jsxs("div", { className: "text-center mt-4", children: [
    /* @__PURE__ */ e.jsx(o, { size: "18px", weigth: "bold", label: "OOPS!" }),
    /* @__PURE__ */ e.jsx(
      o,
      {
        size: "18px",
        weigth: "bold",
        label: "The page you are looking for doesn't exists."
      }
    )
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: "mt-3", children: /* @__PURE__ */ e.jsx(
    J,
    {
      size: "18px",
      label: "Go Back",
      onClick: r,
      weight: "Bold"
    }
  ) })
] }), He = ({ active: r }) => /* @__PURE__ */ e.jsx("div", { className: " flex justify-center items-center bg-gray-600 h-screen w-screen ", children: /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "50%",
    height: "50%",
    className: r ? "active" : "",
    children: [
      /* @__PURE__ */ e.jsx(
        "polygon",
        {
          points: "14.06 7.201 14.059 7.201 12.092 4.699 11.727 4.699 11.727 10.484 12.88 10.484 12.88 7.304 14.06 8.835 15.241 7.304 15.233 10.484 16.386 10.484 16.386 4.699 16.027 4.699",
          className: "svg-elem-1"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M16.5,13.191c0.023-1.004-0.605-1.729-1.614-1.729h-2.251v5.706h2.251c0.928-0.008,1.677-0.763,1.678-1.694v-0.028c0-0.466-0.23-0.878-0.584-1.127l-0.004-0.003l-0.001-0.001C16.332,14.068,16.484,13.626,16.5,13.191z M15.312,13.174c0.001,0.012,0.002,0.027,0.002,0.041c0,0.292-0.236,0.53-0.526,0.533h-1.011v-1.147h1.01C15.113,12.601,15.312,12.856,15.312,13.174z M15.358,15.462c0,0.313-0.252,0.566-0.565,0.566h-0.001h-0.006h-1.011v-1.139H14.8c0.308,0,0.558,0.25,0.558,0.559V15.462z",
          className: "svg-elem-2"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M23,3.531C23,1.425,21.579,0,19.476,0H4.524C2.422,0,1,1.424,1,3.531V24l1.805-2.101V3.531c0.001-0.949,0.768-1.718,1.716-1.719h14.952c0.947,0.002,1.715,0.77,1.716,1.719v14.837c-0.001,0.949-0.768,1.718-1.716,1.719H6.93l-1.792,1.798l14.338,0.014c2.102,0,3.524-1.424,3.524-3.531V3.531z",
          className: "svg-elem-3"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "polygon",
        {
          points: "7.047 5.83 8.463 5.83 8.463 10.389 9.6 10.389 9.6 5.83 11.015 5.83 11.015 4.699 7.047 4.699",
          className: "svg-elem-4"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M8.794,11.466H7.1v5.698h1.694C12.579,17.164,12.579,11.466,8.794,11.466z M8.794,16.024L8.794,16.024l-0.55,0.001v-3.419h0.55C11.004,12.606,11.004,16.024,8.794,16.024z",
          className: "svg-elem-5"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "polygon",
        {
          points: "5.132 21.899 5.146 21.885 5.121 21.885",
          className: "svg-elem-6"
        }
      )
    ]
  }
) });
export {
  J as Button,
  Ie as Header,
  Ye as Main,
  We as NotFound,
  L as PlayItem,
  $e as SideBar,
  He as SvgTMDB,
  Ve as Toast
};
