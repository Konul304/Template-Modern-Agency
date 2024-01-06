exports.id = 8630;
exports.ids = [8630];
exports.modules = {

/***/ 185:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 408));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1663));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8596));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9916))

/***/ }),

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mobile_app_Screenshots)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(6265);
;// CONCATENATED MODULE: ./src/data/mobile-app/screen-shots.json
const screen_shots_namespaceObject = JSON.parse('["/mobile-app/img/screenshots/1.png","/mobile-app/img/screenshots/2.png","/mobile-app/img/screenshots/3.png","/mobile-app/img/screenshots/4.png","/mobile-app/img/screenshots/5.png","/mobile-app/img/screenshots/3.png"]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Screenshots.jsx
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

 //= Static Data



const swiperOptions = {
    modules: [
        swiper_esm/* Pagination */.tl
    ],
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    parallax: false,
    slidesPerView: 5,
    pagination: {
        type: "bullets",
        clickable: true,
        el: ".secreen-shots .swiper-pagination"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 3,
            centeredSlides: false
        },
        991: {
            slidesPerView: 5
        }
    }
};
function Screenshots() {
    (0,react_.useEffect)(()=>{
        let swiperContainer = document.querySelector(".secreen-shots .swiper-container");
        let swiperPagination = document.querySelector(".secreen-shots .swiper-pagination");
        if (swiperContainer) {
            swiperContainer.appendChild(swiperPagination);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "secreen-shots section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        " Apps Screenshot ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "Right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Amazing Designer Create Our Application Let’s See"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, _objectSpread(_objectSpread({}, swiperOptions), {}, {
                                children: screen_shots_namespaceObject.map((screenshot, index)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                        className: "SwiperSlide",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: screenshot,
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }, index))
                            })),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-pagination"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Mobile_app_Screenshots = (Screenshots);


/***/ }),

/***/ 9916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Common_ModalVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4054);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */  //= Components



function VideoWithTeam() {
    const { 0: isOpen, 1: setOpen } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    function openVideo(e) {
        e.preventDefault();
        setOpen(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        className: "team-vid section-padding bg-dark pt-0",
        "data-overlay-dark": "0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "row mb-20",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                className: "vid-img bg-img",
                                style: {
                                    backgroundImage: "url(/img/mobile-app/bg-vid.jpg)"
                                },
                                "data-overlay-dark": "2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_Common_ModalVideo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        channel: "vimeo",
                                        autoplay: true,
                                        isOpen: isOpen,
                                        videoId: "127203262",
                                        onClose: ()=>setOpen(false)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                                        href: "https://vimeo.com/127203262",
                                        className: "vid valign",
                                        onClick: openVideo,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 384 512",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("path", {
                                                d: "M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "row justify-content-center mt-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                            className: "col-lg-7 col-md-10",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                className: "s-head text-center mb-80",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h6", {
                                        className: "stit mb-30",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                className: "left"
                                            }),
                                            " Meet Our Team",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                className: "right"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
                                        children: "We’ve Experience Team Member to Provide Solutions"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                    className: "item text-center md-mb50",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                                                src: "/img/mobile-app/team/1.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                                                    children: "Eddie E. Moseley"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                                                    children: "CEO & Founder"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                    className: "item text-center md-mb50",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                                                src: "/img/mobile-app/team/2.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                                                    children: "John J. Schreffler"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                                                    children: "Apps Designer"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                    className: "item text-center sm-mb50",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                                                src: "/img/mobile-app/team/3.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                                                    children: "Venessa M. Meister"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                                                    children: "Web Developer"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                className: "col-lg-3 col-md-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                    className: "item text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                                                src: "/img/mobile-app/team/4.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                                                    children: "Joel R. Funkhouser"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                                                    children: "Senior Manager"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "circle-blur"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "circle-blur two"
            })
        ]
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoWithTeam);


/***/ }),

/***/ 8596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mobile_app_Testimonials)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(6265);
;// CONCATENATED MODULE: ./src/data/mobile-app/testimonials.json
const testimonials_namespaceObject = JSON.parse('[{"id":1,"icon-image":"/mobile-app/img/qoute.png","content":"unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.","author":{"name":"William Glenn","image":"/mobile-app/img/clients/1.png","position":"Senior Manager"}},{"id":2,"icon-image":"/mobile-app/img/qoute.png","content":"unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.","author":{"name":"John R. Gordon","image":"/mobile-app/img/clients/2.png","position":"Senior Manager"}},{"id":3,"icon-image":"/mobile-app/img/qoute.png","content":"unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.","author":{"name":"Josesr B. Rink","image":"/mobile-app/img/clients/3.png","position":"Senior Manager"}},{"id":4,"icon-image":"/mobile-app/img/qoute.png","content":"unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam eaqusa quae abillo inventore veritatis architect beatae vitae dicta ecabo.","author":{"name":"William Glenn","image":"/mobile-app/img/clients/1.png","position":"Senior Manager"}}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Testimonials.jsx
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

 //= Static Data



const swiperOptions = {
    modules: [
        swiper_esm/* Pagination */.tl
    ],
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    parallax: false,
    slidesPerView: 3,
    pagination: {
        type: "bullets",
        clickable: true,
        el: ".app-testim .swiper-pagination"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            centeredSlides: false
        },
        991: {
            slidesPerView: 3
        }
    }
};
function Testimonials() {
    (0,react_.useEffect)(()=>{
        let swiperContainer = document.querySelector(".app-testim .swiper-container");
        let swiperPagination = document.querySelector(".app-testim .swiper-pagination");
        if (swiperContainer) swiperContainer.appendChild(swiperPagination);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "app-testim section-padding bg-gray",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        " Clients Feedback ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "Right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Valuable Clinets Feedback About Our Services"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, _objectSpread(_objectSpread({}, swiperOptions), {}, {
                                children: testimonials_namespaceObject.map((testimonial)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon mb-50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: testimonial["icon-image"],
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: testimonial.content
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "img",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: testimonial.author.image,
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "cont",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: "mb-10",
                                                                    children: testimonial.author.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: testimonial.author.position
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, testimonial.id))
                            })),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-pagination"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Mobile_app_Testimonials = (Testimonials);


/***/ }),

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Mobile_app_Blog)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
;// CONCATENATED MODULE: ./src/data/mobile-app/blog.json
const blog_namespaceObject = JSON.parse('[{"id":1,"image":"/mobile-app/img/blog/1.jpg","tag":"Design & Arts","title":"Everything You Want Know About Creating Voice Interfaces","author":"Lisa A. Cowles","comments":5},{"id":2,"image":"/mobile-app/img/blog/2.jpg","tag":"Design & Arts","title":"Everything You Want Know About Creating Voice Interfaces","author":"Lisa A. Cowles","comments":5}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Blog.jsx
 //= Static Data




function Blog() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "app-blog section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-7 col-md-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        " Blog and News ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "Right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Read Latest Artices and Tips Latest News & Blog"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blog_namespaceObject.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `item ${index !== blog_namespaceObject.length - 1 ? "md-mb50" : ""}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: blog.image,
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-7 valign",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "cont",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "full-width",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "tag",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                to: "#0",
                                                                children: blog.tag
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: blog.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    to: "#0",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Post By :"
                                                                        }),
                                                                        blog.author
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    to: "#0",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Comments :"
                                                                        }),
                                                                        blog.comments < 10 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                            children: [
                                                                                "(0",
                                                                                blog.comments,
                                                                                ")"
                                                                            ]
                                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                            children: [
                                                                                "(",
                                                                                blog.comments,
                                                                                ")"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            to: "#0",
                                                            className: "butn-bord-red rounded buton",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "Read More"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, blog.id))
                })
            ]
        })
    });
}
/* harmony default export */ const Mobile_app_Blog = (Blog);


/***/ }),

/***/ 7365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Mobile_app_Brands)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
;// CONCATENATED MODULE: ./src/data/mobile-app/brands.json
const brands_namespaceObject = JSON.parse('{"B":"/mobile-app/img/shapes/border.png","Y":[{"id":1,"image":"/mobile-app/img/brands/l1.png"},{"id":2,"image":"/mobile-app/img/brands/l2.png"},{"id":3,"image":"/mobile-app/img/brands/l3.png"},{"id":4,"image":"/mobile-app/img/brands/l4.png"},{"id":5,"image":"/mobile-app/img/brands/l5.png"},{"id":6,"image":"/mobile-app/img/brands/l5.png"},{"id":7,"image":"/mobile-app/img/brands/l4.png"},{"id":8,"image":"/mobile-app/img/brands/l3.png"},{"id":9,"image":"/mobile-app/img/brands/l2.png"},{"id":10,"image":"/mobile-app/img/brands/l1.png"}]}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Brands.jsx
 //= Static Data



function Brands() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "brands pt-80 pb-80 bg-dark",
        "data-overlay-dark": "0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "head mb-60 text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 col-md-9",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                "We’ve ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "154+ ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: brands_namespaceObject.B,
                                                            alt: "",
                                                            className: "bord-gr"
                                                        })
                                                    ]
                                                }),
                                                " Global Partners"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "mt-10",
                                            children: "Professional Design Agency to provide solutions"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: brands_namespaceObject.Y.map((brand, index)=>index < 5 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `col-lg ${index !== 4 ? "col-sm-3" : "lg-hide"}`,
                                "v-if": "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: brand.image,
                                                    alt: "",
                                                    className: "front"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: brand.image,
                                                    alt: "",
                                                    className: "back"
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, brand.id) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: brand.image,
                                                    alt: "",
                                                    className: "front"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: brand.image,
                                                    alt: "",
                                                    className: "back"
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, brand.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row lg-hide"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur"
            })
        ]
    });
}
/* harmony default export */ const Mobile_app_Brands = (Brands);


/***/ }),

/***/ 8106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Mobile_app_Header)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
;// CONCATENATED MODULE: ./src/data/mobile-app/header.json
const header_namespaceObject = JSON.parse('{"BH":"/mobile-app/img/header-img.png","TN":"Let’s Build Amazing Mobile Apps Together","Wx":"Sit amet consectetur adipiscing elit, sed do eiusmod tempor idunte ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan"}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Header.jsx
 //= Static Data



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "mobile-app valign",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "caption",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "mb-20",
                                    children: header_namespaceObject.TN
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: header_namespaceObject.Wx
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "butons mt-40",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#0",
                                            className: "butn-gr rounded buton",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Apple Store"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 384 512",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#0",
                                            className: "butn-bord-dark rounded buton",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Google Play"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 512 512",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 offset-lg-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: header_namespaceObject.BH,
                                alt: ""
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Mobile_app_Header = (Header);


/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7175);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Progress = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
        className: "app-process section-padding pt-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                        className: "col-lg-7 col-md-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                            className: "s-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                            className: "left"
                                        }),
                                        " Working Process",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                            className: "right"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h2", {
                                    children: "3 Step to Compalte Projects"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                className: "item text-center md-mb50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                        className: "icon pe-7s-cloud-download"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
                                        children: "Download Apps"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                        className: "step-number",
                                        children: "Step 01"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                                        children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                className: "item text-center md-mb50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                        className: "icon pe-7s-user"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
                                        children: "Create Account"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                        className: "step-number",
                                        children: "Step 02"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                                        children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                                className: "item text-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                        className: "icon pe-7s-phone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
                                        children: "Got Results"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                                        className: "step-number",
                                        children: "Step 03"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                                        children: "Sorem ipsum dolor sit amet consectetur adipiscing elit seddo eiusmod tempor incididunt"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);


/***/ }),

/***/ 4851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Mobile-app\Screenshots.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Mobile_app_Services)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/Services/SectionLeft.jsx



function SectionLeft({ theme }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "serv-img md-mb50",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: theme === "light" ? "/mobile-app/img/app-img/s1-light.png" : "/mobile-app/img/app-img/s1.png",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 offset-lg-1 valign",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                            className: "stit mb-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "left"
                                }),
                                " Custimize Application"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mb-30",
                            children: "We Tackle Your Most Ambitious Goals"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim ipsam voluptatem quia voluptas aspernatur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "butons mt-40",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#0",
                                    className: "butn-gr rounded buton",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Get Free 7 Days Trial"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 384 512",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#0",
                                    className: "butn-more",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Read More"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 320 512",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "list-feat mt-40",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                className: "icon",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 448 512",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            " Unique Design & Development"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                className: "icon",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 448 512",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            " Experience Team Members"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                                className: "icon",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 448 512",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            " Powerfull Applications"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const Services_SectionLeft = (SectionLeft);

;// CONCATENATED MODULE: ./src/components/Mobile-app/Services/SectionRight.jsx



function SectionRight({ theme }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row mt-80",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-6 valign",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content md-mb50",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                            className: "stit mb-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "left"
                                }),
                                " Core Features"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mb-30",
                            children: "Links, Content & Community. One Online Homepages. Save and Organise Ideas"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "butons mt-40",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#0",
                                    className: "butn-bord-red rounded buton",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Get Free 7 Days Trial"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 384 512",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#0",
                                    className: "butn-more",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Read More"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 320 512",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-5 offset-lg-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "serv-img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: theme === "light" ? "/mobile-app/img/app-img/s2-light.png" : "/mobile-app/img/app-img/s2.png",
                        alt: ""
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const Services_SectionRight = (SectionRight);

;// CONCATENATED MODULE: ./src/components/Mobile-app/Services/index.jsx
 //= Components




function Services({ theme }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "serv-block section-padding",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Services_SectionLeft, {
                        theme: theme
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Services_SectionRight, {
                        theme: theme
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "circle-blur two"
            })
        ]
    });
}
/* harmony default export */ const Mobile_app_Services = (Services);


/***/ }),

/***/ 9489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Mobile-app\TeamWithVideo.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Mobile-app\Testimonials.jsx`)

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