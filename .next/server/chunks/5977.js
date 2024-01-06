exports.id = 5977;
exports.ids = [5977];
exports.modules = {

/***/ 2253:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6603));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9210));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3042));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3414));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2575));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2352));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9943))

/***/ }),

/***/ 3509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelectorAll(".swiper-pagination")) {
        document.querySelectorAll(".swiper-pagination").forEach((item)=>{
            item.innerHTML = item.innerHTML.replace(" / ", "");
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 5624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ AboutUs_AboutUs2)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: ./src/components/Common/Split.jsx
var Split = __webpack_require__(6711);
;// CONCATENATED MODULE: ./src/data/sections/about-us2.json
const about_us2_namespaceObject = JSON.parse('{"wp":"/img/intro/1.jpg","Lx":"/img/intro/3.jpg","_g":"/img/intro/2.jpg","bH":"About Us","TN":{"P":"We are more than just","E":"a digital agency."},"kQ":"We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, id gravida mi purus sit amet erat. Ut dictum nisi masvitp","R2":[{"id":1,"icon":"gleam","name":{"first":"Pixel","second":"Perfect"},"wowDelay":".3s"},{"id":2,"icon":"paint-bucket","name":{"first":"Creative","second":"Design"},"wowDelay":".5s"},{"id":3,"icon":"medal","name":{"first":"Heigh","second":"Perfomance"},"wowDelay":".8s"}]}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/AboutUs/AboutUs2.jsx
 //= Components
 //= Static Data



const AboutUs2 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "about section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-mons sm-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-5 cmd-padding valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img1 wow imago",
                                            "data-wow-delay": ".5s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us2_namespaceObject.wp,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-7 cmd-padding",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img2 wow imago",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us2_namespaceObject.Lx,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img3 wow imago",
                                                "data-wow-delay": ".8s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us2_namespaceObject._g,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "container",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-md-6"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "col-md-6"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sub-title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        children: about_us2_namespaceObject.bH
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.ZP, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "words chars splitting main-title wow",
                                        "data-splitting": true,
                                        children: [
                                            about_us2_namespaceObject.TN.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " ",
                                            about_us2_namespaceObject.TN.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.ZP, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "words chars splitting wow txt",
                                        "data-splitting": true,
                                        children: about_us2_namespaceObject.kQ
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ftbox mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: about_us2_namespaceObject.R2.map((feature)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `wow fadeIn ${feature.id == 2 ? "space" : ""}`,
                                                "data-wow-delay": feature.wowDelay,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `icon color-font pe-7s-${feature.icon}`
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        children: [
                                                            feature.name.first,
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " ",
                                                            feature.name.second
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "dots",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                        ]
                                                    })
                                                ]
                                            }, feature.id))
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const AboutUs_AboutUs2 = (AboutUs2);


/***/ }),

/***/ 6564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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



function Clients2({ theme }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
        className: "clients sub-bg pt-50 pb-50",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
                style: {
                    display: "none"
                },
                children: "\xa0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                            className: "row",
                            children: _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 4).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                    className: "col-lg-3 brands",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                                        className: "item no-bord wow fadeIn",
                                        "data-wow-delay": ".3s",
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
                    })
                })
            })
        ]
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients2);


/***/ })

};
;