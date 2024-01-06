"use strict";
exports.id = 2706;
exports.ids = [2706];
exports.modules = {

/***/ 8462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7628);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function SkillsCircle({ from, theme }) {
    const cpStyle = {
        path: {
            stroke: "rgb(18, 194, 233)"
        },
        trail: {
            stroke: theme ? theme == "dark" ? "#0f1013" : "#e5e5e5" : ""
        },
        text: {
            fill: theme ? theme == "dark" ? "#ffffff" : "#4e4e4e" : "",
            fontSize: "16px"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
        className: `skills-circle pt-50 pb-50 ${from ? from === "aboutPage" ? "sub-bg" : "" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "col-lg-7",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                        className: "item wow fadeInLeft",
                                        "data-wow-delay": ".6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                                className: "skill",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__/* .CircularProgressbar */ .Ip, {
                                                    value: 90,
                                                    strokeWidth: 2,
                                                    text: `${90}%`,
                                                    styles: cpStyle
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                        children: "Project"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                                                        children: "Consulting"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                        className: "item wow fadeInLeft",
                                        "data-wow-delay": ".3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                                className: "skill",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__/* .CircularProgressbar */ .Ip, {
                                                    value: 75,
                                                    strokeWidth: 2,
                                                    text: `${75}%`,
                                                    styles: cpStyle
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                        children: "App"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                                                        children: "Development"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsCircle);


/***/ }),

/***/ 615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7175);
/* harmony import */ var _components_Common_Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6711);
/* harmony import */ var _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7043);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
 //= Components
 //= Static Data



function Clients({ theme }) {
    const first = _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.length / 2);
    const second = _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.slice(4, _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.length);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
        className: "clients section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "col-lg-4 valign md-mb50",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            className: "sec-head mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "Best Features"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                                    className: "wow mb-20 color-font",
                                    children: "Our Clients"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                                    children: "Our area of practice is quite wide: design, graphics, branding, development."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                    className: "row bord",
                                    children: first.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                            className: "col-md-3 col-6 brands",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                                                            src: item.darkImage,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Common_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                    className: "row",
                                    children: second.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                            className: `${item.id == 5 ? "col-md-3 col-6 brands sm-mb30" : item.id == 6 ? "col-md-3 col-6 brands sm-mb30" : item.id == 7 ? "col-md-3 col-6 brands" : item.id == 8 ? "col-md-3 col-6 brands" : ""}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? ".4" : item.id == 2 ? ".7" : item.id == 3 ? ".5" : item.id == 4 ? ".3" : ""}s`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                                                            src: item.darkImage,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Common_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id))
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);


/***/ }),

/***/ 6055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Skills\SkillsCircle.jsx`)

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