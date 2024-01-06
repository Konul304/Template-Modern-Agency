exports.id = 4640;
exports.ids = [4640];
exports.modules = {

/***/ 1527:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1320));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7005))

/***/ }),

/***/ 7005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Showcases_ShowcaseFullscreen)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(6265);
// EXTERNAL MODULE: ./src/common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(3509);
;// CONCATENATED MODULE: ./src/data/showcase1.json
const showcase1_namespaceObject = JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/3.jpg","sub":"Design"}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Showcases/ShowcaseFullscreen.jsx
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

 //= Modules

 //= Scripts
 //= Static Data



const swiperOptions = {
    modules: [
        swiper_esm/* Parallax */.VS,
        swiper_esm/* Navigation */.W_,
        swiper_esm/* Mousewheel */.Gk
    ],
    speed: 1000,
    slidesPerView: 1,
    mousewheel: true,
    parallax: true,
    navigation: {
        prevEl: ".txt-botm .swiper-button-prev",
        nextEl: ".txt-botm .swiper-button-next"
    },
    onSwiper: (swiper)=>{
        setTimeout(()=>{
            for(var i = 0; i < swiper.slides.length; i++){
                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
            }
        });
    }
};
function ShowcaseFullscreen() {
    (0,react_.useEffect)(()=>{
        (0,removeSlashpagination/* default */.Z)();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "slider showcase-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, _objectSpread(_objectSpread({}, swiperOptions), {}, {
                    className: "swiper-wrapper",
                    children: showcase1_namespaceObject.map((slide)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "caption",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "/project-details2/project-details2-dark",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "stroke",
                                                                        "data-swiper-parallax": "-2000",
                                                                        children: slide.title.first
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        "data-swiper-parallax": "-5000",
                                                                        children: slide.title.second
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "bord"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "discover",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/project-details2/project-details2-dark",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    "Explore ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " More"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id))
                })),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "txt-botm",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Next Slide"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-chevron-right"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-chevron-left"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Prev Slide"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "swiper-pagination dots"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Showcases_ShowcaseFullscreen = (ShowcaseFullscreen);


/***/ }),

/***/ 6463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Showcases\ShowcaseFullscreen.jsx`)

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