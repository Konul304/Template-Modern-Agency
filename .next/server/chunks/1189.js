exports.id = 1189;
exports.ids = [1189];
exports.modules = {

/***/ 2717:
/***/ (() => {



/***/ }),

/***/ 5323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Common_Cursor)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/mouseEffect.js
const mouseEffect = ()=>{
    function mousecursor() {
        const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
        let n, i = 0, o = !1;
        window.onmousemove = function(s) {
            o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
        };
        if (document.querySelector(".cursor-pointer")) {
            document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
            document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
        }
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
        });
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            });
        }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }
    mousecursor();
};
/* harmony default export */ const common_mouseEffect = (mouseEffect);

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Common/Cursor.jsx
/* __next_internal_client_entry_do_not_use__ default auto */  //= Scripts




function Cursor() {
    (0,react_.useEffect)(()=>{
        common_mouseEffect();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    });
}
;
/* harmony default export */ const Common_Cursor = (Cursor);


/***/ }),

/***/ 4104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Loader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    Pace.on("start", function() {
        document.querySelector("#preloader").classList.remove("isdone");
        document.querySelector(".loading").classList.remove("isdone");
    });
    Pace.on("done", function() {
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
    }
    window.addEventListener("load", ()=>{
        document.querySelector("#preloader").classList.add("isdone");
        document.querySelector(".loading").classList.add("isdone");
        if (document.querySelector(".pace-running.pace-running")) {
            document.querySelector(".pace-running.pace-running").classList.remove("pace-running");
        }
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Common/Loader.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function LoadingScreen() {
    (0,react_.useEffect)(()=>{
        setTimeout(()=>{
            if (typeof Pace !== "undefined") common_loadingPace();
        }, 1000);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hideX",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "loading",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "L"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "o"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "a"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "d"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "i"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "g"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "preloader"
            })
        ]
    });
}
;
/* harmony default export */ const Loader = (LoadingScreen);


/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Common_ProgressScroll)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/scrollToTop.js
const scrollToTop = ()=>{
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    const updateProgress = function() {
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    let progressWrap = document.querySelector(".progress-wrap");
    let offset = 150;
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > offset) {
            progressWrap.classList.add("active-progress");
        } else {
            document.querySelector(".progress-wrap").classList.remove("active-progress");
        }
    });
    progressWrap.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        return false;
    });
};
/* harmony default export */ const common_scrollToTop = (scrollToTop);

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Common/ProgressScroll.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ProgressScroll() {
    (0,react_.useEffect)(()=>{
        common_scrollToTop();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    });
}
;
/* harmony default export */ const Common_ProgressScroll = (ProgressScroll);


/***/ }),

/***/ 6254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7471);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_preloader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4276);
/* harmony import */ var _styles_preloader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_preloader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_modal_video_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3374);
/* harmony import */ var _styles_modal_video_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_video_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9437);
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(148);
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
//= Global Styles






const metadata = {
    title: "Vie",
    description: "Vie - Multi-Purpose React.js Next.js Template",
    keywords: [
        "HTML5",
        "Template",
        "Vie",
        "Multi-Purpose",
        "themeforest"
    ],
    icons: {
        icon: "/assets/imgs/favicon.ico",
        shortcut: "/assets/imgs/favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ generateStylesheetObject)
/* harmony export */ });
function generateStylesheetObject(stylesheets) {
    return stylesheets.map((stylesheet)=>({
            rel: "stylesheet",
            url: stylesheet,
            precedence: "default"
        }));
}


/***/ }),

/***/ 7598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Common\Cursor.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Common\Loader.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Common\ProgressScroll.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7471:
/***/ (() => {



/***/ }),

/***/ 3374:
/***/ (() => {



/***/ }),

/***/ 4276:
/***/ (() => {



/***/ })

};
;