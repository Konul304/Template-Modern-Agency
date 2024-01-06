exports.id = 5074;
exports.ids = [5074];
exports.modules = {

/***/ 2273:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 408));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9814))

/***/ }),

/***/ 9814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ShopSidebar = ()=>{
    const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const setValue = (range)=>{
        const newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
        const newPosition = 16 - newValue * 0.32;
        tooltipRef.current.innerHTML = `<span>${range.value}</span>`;
        tooltipRef.current.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
        let a = range.value;
        range.value = a;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setValue(document.querySelector("#range"));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "sidebar md-mb50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                    className: "col-lg-12 col-md-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                        className: "search mb-30",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("form", {
                            action: "",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
                                        type: "text",
                                        name: "shop-search",
                                        placeholder: "Search"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                            className: "icon pe-7s-search"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                    className: "col-lg-12 col-md-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "box gat mb-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                                className: "title mb-30",
                                children: "Category"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                "App Design ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                                    children: "05"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                "Development ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                                    children: "03"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                "Web Design ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                                    children: "07"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                "Dashboard ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                                    children: "04"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                "Logo Design ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                                    children: "09"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                "Branding ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                                    children: "14"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                    className: "col-lg-12 col-md-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "box filter-price mb-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                                className: "title mb-30",
                                children: "Filter By Price"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                className: "range-slider mb-30",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                                        id: "tooltip",
                                        ref: tooltipRef
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
                                        onInput: (e)=>setValue(e.currentTarget),
                                        id: "range",
                                        type: "range",
                                        step: "10",
                                        min: "5",
                                        max: "800"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                                        className: "start-pointe",
                                        children: "$ 5"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                    className: "col-lg-12 col-md-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "box tags",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                                className: "title mb-30",
                                children: "Popular Tags"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                                        href: "#0",
                                        children: "Apps"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                                        href: "#0",
                                        children: "Design"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                                        href: "#0",
                                        children: "Branding"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                                        href: "#0",
                                        children: "Software"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                                        href: "#0",
                                        children: "Development"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                                        href: "#0",
                                        children: "Web"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopSidebar);


/***/ }),

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Mobile_app_Shop)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(7176);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Shop/ShopSidebar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Mobile-app\Shop\ShopSidebar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ShopSidebar = (__default__);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Shop/ShopStore.jsx



function ShopStore() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "store",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-area",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 valign",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "result-text",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Showing 1 - 12 of 30 Results"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 d-flex justify-content-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filter-select",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                    className: "form-select",
                                    "aria-label": "Default select example",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            defaultValue: true,
                                            children: "Open this select menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "1",
                                            children: "One"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "2",
                                            children: "Two"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: "3",
                                            children: "Three"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/1.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/2.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/3.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/4.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/5.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/6.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/7.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/8.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/mobile-app/shop/9.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "tag",
                                            children: "Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "add",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#0",
                                                children: [
                                                    "Add To Cart ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "pe-7s-angle-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Mobile Apps Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "$1253"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
;
/* harmony default export */ const Shop_ShopStore = (ShopStore);

;// CONCATENATED MODULE: ./src/components/Mobile-app/Shop/index.jsx
 //= Components




function Shop() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "shop section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ShopSidebar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-9",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Shop_ShopStore, {})
                    })
                ]
            })
        })
    });
}
;
/* harmony default export */ const Mobile_app_Shop = (Shop);


/***/ })

};
;