"use strict";
exports.id = 9677;
exports.ids = [9677];
exports.modules = {

/***/ 3394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thumparallaxDown);


/***/ }),

/***/ 2352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3210);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6265);
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3509);
/* harmony import */ var _common_thumparallaxDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3394);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}



 //= Scripts




const swiperImageOptions = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .tl,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Parallax */ .VS,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .EffectFade */ .xW
    ],
    speed: 800,
    effect: "fade",
    spaceBetween: 0,
    loop: true,
    parallax: true,
    slidesPerView: 1,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    pagination: {
        type: "fraction",
        clickable: true,
        el: ".swiper-pagination"
    },
    onSwiper: (swiper)=>{
        for(var i = 0; i < swiper.slides.length; i++){
            let img = swiper.slides[i].childNodes[0].childNodes[0].childNodes[0];
            img.setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
    }
};
const swiperTextOptions = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .tl,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_
    ],
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        prevEl: ".controls .swiper-button-prev",
        nextEl: ".controls .swiper-button-next"
    },
    pagination: {
        type: "fraction",
        clickable: true,
        el: ".controls .swiper-pagination"
    }
};
function Blogs4() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
        (0,_common_thumparallaxDown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
        className: "blog-crv sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "stories",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                className: "col-lg-6 no-padding",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, _objectSpread(_objectSpread({
                                    className: "swiper-wrapper swiper-container swiper-img"
                                }, swiperImageOptions), {}, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            className: "SwiperSlide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                                                        className: "thumparallax",
                                                        src: "/img/blog/1.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            className: "SwiperSlide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                                                        className: "thumparallax",
                                                        src: "/img/blog/2.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            className: "SwiperSlide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                                                        className: "thumparallax",
                                                        src: "/img/blog/3.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }))
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                className: "col-lg-6 no-padding valign",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, _objectSpread(_objectSpread({
                                    className: "swiper-wrapper swiper-container swiper-content"
                                }, swiperTextOptions), {}, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            className: "SwiperSlide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                                    className: "content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "tags",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                href: "#0",
                                                                children: "Trending"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                                                                    href: "#0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                                                                            className: "far fa-clock"
                                                                        }),
                                                                        "06 Aug 2023"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                    href: "#0",
                                                                    children: "by Alex Morgan"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                    href: "#0",
                                                                    children: "Create The Lifestyle You Really Desire This World"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                                                                children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "more",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "Read More"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                                    className: "content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "tags",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                href: "#0",
                                                                children: "Trending"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                                                                    href: "#0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                                                                            className: "far fa-clock"
                                                                        }),
                                                                        "06 Aug 2023"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                    href: "#0",
                                                                    children: "by Alex Morgan"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                    href: "#0",
                                                                    children: "List of The Best Investment Projects"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                                                                children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "more",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "Read More"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                                    className: "content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "tags",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                href: "#0",
                                                                children: "Trending"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                                                                    href: "#0",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                                                                            className: "far fa-clock"
                                                                        }),
                                                                        "06 Aug 2023"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                    href: "#0",
                                                                    children: "by Alex Morgan"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                                                                    href: "#0",
                                                                    children: "World Best Business Website Company"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                                                                children: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                                            className: "more",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                href: "/blog-details/blog-details-dark",
                                                                children: "Read More"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "controls",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                                    className: "fas fa-caret-up"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
                                    className: "fas fa-caret-down"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                                className: "swiper-pagination"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs4);


/***/ }),

/***/ 8739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Blogs\Blogs4.jsx`)

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