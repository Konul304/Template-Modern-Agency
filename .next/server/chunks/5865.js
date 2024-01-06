exports.id = 5865;
exports.ids = [5865];
exports.modules = {

/***/ 1212:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1320));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1580))

/***/ }),

/***/ 1042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = (element)=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (element) {
            element.forEach((item)=>{
                item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                item.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 1580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3509);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1042);
/* harmony import */ var _data_fullScreen_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6634);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Parallax */ .VS,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .tl,
        swiper__WEBPACK_IMPORTED_MODULE_3__/* .Autoplay */ .pt
    ],
    speed: 1000,
    mousewheel: true,
    parallax: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: true,
    spaceBetween: 500,
    navigation: {
        prevEl: ".txt-botm .swiper-button-prev",
        nextEl: ".txt-botm .swiper-button-next"
    },
    breakpoints: {
        0: {
            spaceBetween: 0
        },
        640: {
            spaceBetween: 0
        },
        768: {
            spaceBetween: 30
        },
        1024: {
            spaceBetween: 500
        }
    },
    onSwiper: (swiper)=>{
        setTimeout(()=>{
            for(var i = 0; i < swiper.slides.length; i++){
                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
            }
        });
    }
};
function ShowcaseCircleSide() {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (0,_common_removeSlashpagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(document.querySelectorAll(".fixed-slider .caption"));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("header", {
        className: "slider circle-slide showcase-carus",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                id: "content-carousel-container-unq-1",
                className: "swiper-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, _objectSpread(_objectSpread({}, swiperOptions), {}, {
                    className: "swiper-wrapper",
                    children: _data_fullScreen_json__WEBPACK_IMPORTED_MODULE_4__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                            className: "SwiperSlide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                className: "full-width",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                                    className: "bg-img valign",
                                    style: {
                                        backgroundImage: `url(${slide.image})`
                                    },
                                    "data-overlay-dark": "1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                            className: "caption ontop valign",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                                className: "o-hidden",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                                                    "data-swiper-parallax": "-2000",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/project-details2/project-details2-dark",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                                                className: "stroke",
                                                                children: slide.title.first
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                                                                children: slide.title.second
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                            className: "copy-cap valign",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                                className: "cap",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
                                                    "data-swiper-parallax": "-2000",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/project-details2/project-details2-dark",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                                                className: "stroke",
                                                                children: slide.title.first
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                                                                children: slide.title.second
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, slide.id))
                }))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "txt-botm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                                    children: "Next Slide"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
                                    className: "fas fa-chevron-left"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                                    children: "Prev Slide"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowcaseCircleSide);


/***/ }),

/***/ 1673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Showcases\ShowcaseCircleSide.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 6634:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]');

/***/ })

};
;