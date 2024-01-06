"use strict";
exports.id = 2105;
exports.ids = [2105];
exports.modules = {

/***/ 1042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 9210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Headers_SliderHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(6265);
// EXTERNAL MODULE: ./src/common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(3509);
// EXTERNAL MODULE: ./src/common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(1042);
;// CONCATENATED MODULE: ./src/data/intro1.json
const intro1_namespaceObject = JSON.parse('[{"id":1,"title":"Original Solutions","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/02.jpg"},{"id":2,"title":"Digital Design Awards","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Headers/SliderHeader.jsx
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
        swiper_esm/* Pagination */.tl
    ],
    speed: 1000,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    parallax: true,
    pagination: {
        type: "fraction",
        clickable: true,
        el: ".swiper-pagination"
    },
    onSwiper: (swiper)=>{
        for(var i = 0; i < swiper.slides.length; i++){
            swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
    }
};
function SliderHeader() {
    const fixedSlider = (0,react_.useRef)();
    (0,react_.useEffect)(()=>{
        (0,removeSlashpagination/* default */.Z)();
        (0,fadeWhenScroll/* default */.Z)(document.querySelectorAll(".fixed-slider .caption"));
    }, []);
    (0,react_.useEffect)(()=>{
        if (fixedSlider.current) {
            const MainContent = document.querySelector(".main-content");
            const slideHeight = fixedSlider.current.offsetHeight;
            MainContent.style.marginTop = slideHeight + "px";
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "slider slider-prlx fixed-slider text-center",
        ref: fixedSlider,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, _objectSpread(_objectSpread({}, swiperOptions), {}, {
                    className: "swiper-wrapper",
                    children: intro1_namespaceObject.map((slide)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-8 col-md-10",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "caption center mt-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: "color-font",
                                                        children: slide.title
                                                    }),
                                                    slide.content && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: slide.content
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "butn bord curve mt-30",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "Look More"
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
                    className: "setone setwo",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "swiper-pagination top botm"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "social-icon",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-facebook-f"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-twitter"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-behance"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fab fa-pinterest-p"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Headers_SliderHeader = (SliderHeader);


/***/ }),

/***/ 3591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Headers\SliderHeader.jsx`)

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