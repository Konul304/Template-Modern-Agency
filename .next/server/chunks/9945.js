"use strict";
exports.id = 9945;
exports.ids = [9945];
exports.modules = {

/***/ 5796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Numbers1)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-countup/build/index.js
var build = __webpack_require__(3658);
// EXTERNAL MODULE: ./src/components/Common/Split.jsx
var Split = __webpack_require__(2575);
;// CONCATENATED MODULE: ./src/data/sections/fun-fact.json
const fun_fact_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","content":"People who are commited to their management tasks.","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","content":"Signed projects that have been confirmed complete!","value":"133"},{"id":3,"icon":"pe-7s-medal","content":"International awards and cups for design projects.","value":"46"}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Numbers/Numbers1.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
 //= Components
 //= Static Data



const Numbers = ()=>{
    const { 0: renderCounters, 1: setRenderCounters } = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        let funFactsSection = document.querySelector(".number-sec");
        new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) {
                setRenderCounters(true);
            } else {
                setRenderCounters(false);
            }
        }).observe(funFactsSection);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "number-sec section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sec-head  text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "FUN FACTS"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow color-font",
                                    children: "Pleasure in the job puts perfection in the work."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: fun_fact_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item no-bord sm-mb50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `icon ${item.icon}`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        children: [
                                            "\xa0",
                                            renderCounters && /*#__PURE__*/ jsx_runtime_.jsx(build/* default */.ZP, {
                                                redraw: true,
                                                end: item.value,
                                                duration: "3",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "count"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Split["default"], {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "wow txt words chars splitting",
                                            "data-splitting": true,
                                            children: item.content
                                        })
                                    })
                                ]
                            })
                        }, item.id))
                })
            ]
        })
    });
};
/* harmony default export */ const Numbers1 = (Numbers);


/***/ }),

/***/ 6021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Numbers\Numbers1.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;