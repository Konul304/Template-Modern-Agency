"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 3509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Works_Works1)
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
;// CONCATENATED MODULE: ./src/data/works1.json
const works1_namespaceObject = JSON.parse('[{"id":1,"title":"art & illustration","secTex":"Innovation and Crafts","image":"/img/portfolio/metro/01.jpg","slug":"/project-details2/project-details2-dark"},{"id":2,"title":"art & illustration","secTex":"Inspiring new space","image":"/img/portfolio/metro/02.jpg","slug":"/project-details2/project-details2-dark"},{"id":3,"title":"art & illustration","secTex":"Natural plus modern","image":"/img/portfolio/metro/03.jpg","slug":"/project-details2/project-details2-dark"},{"id":4,"title":"art & illustration","secTex":"Innovation and Crafts","image":"/img/portfolio/metro/04.jpg","slug":"/project-details2/project-details2-dark"},{"id":5,"title":"art & illustration","secTex":"Natural plus modern","image":"/img/portfolio/metro/05.jpg","slug":"/project-details2/project-details2-dark"}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Works/Works1.jsx
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
        swiper_esm/* Autoplay */.pt,
        swiper_esm/* Navigation */.W_
    ],
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    slidesPerView: 2,
    centeredSlides: true,
    autoPlay: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 1000,
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
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false
        },
        991: {
            slidesPerView: 2
        }
    }
};
function Works1() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "work-carousel metro position-re",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-12 no-padding",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "swiper-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, _objectSpread(_objectSpread({}, swiperOptions), {}, {
                                className: "swiper-wrapper",
                                children: works1_namespaceObject.map((slide)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "content wow noraidus fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "item-img bg-img wow imago",
                                                    style: {
                                                        backgroundImage: `url(${slide.image})`
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "color-font",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: slide.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/project-details2/project-details2-dark",
                                                                children: slide.secTex
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, slide.id))
                            })),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "simple-btn right",
                                    children: "Next"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "simple-btn",
                                    children: "Prev"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Works_Works1 = (Works1);


/***/ }),

/***/ 8900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ AboutUs_AboutUs1)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
;// CONCATENATED MODULE: ./src/data/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"bH":"About Us","TN":"Our Comapny","kQ":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.","BH":"/img/feat.jpg","i7":[{"id":1,"number":"3","letter":"K","statusName":"Happy Clients"},{"id":2,"number":"14","letter":"K","statusName":"Success Projects"}]}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/AboutUs/AboutUs1.jsx
 //= Static Data



function AboutUs1() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "about-us section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 valign md-mb50",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "fw-100 text-u ls10 mb-10",
                                    children: about_us1_namespaceObject.bH
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "fw-600 text-u ls1 mb-30 color-font",
                                    children: about_us1_namespaceObject.TN
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: about_us1_namespaceObject.kQ
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    className: "butn bord curve mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Read More"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-7 img",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: about_us1_namespaceObject.BH,
                                alt: about_us1_namespaceObject.TN
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "stauts",
                                children: about_us1_namespaceObject.i7.map((stat)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    stat.number,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: stat.letter
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: stat.statusName
                                            })
                                        ]
                                    }, stat.id))
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const AboutUs_AboutUs1 = (AboutUs1);


/***/ }),

/***/ 1869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7175);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4006);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Blogs1 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
        className: "blog section-padding sub-bg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "col-lg-8 col-md-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                            className: "sec-head  text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "RECENT ARTICLES"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                                    className: "wow color-font",
                                    children: "From our blogs."
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                className: "item md-mb50 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                                            src: "/img/blog/1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/blog/blog-dark",
                                                            className: "date",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                                                                        children: "06"
                                                                    }),
                                                                    " August"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/blog/blog-dark",
                                                            className: "tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/blog-details/blog-details-dark",
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                                    className: "btn-more",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/blog-details/blog-details-dark",
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                className: "item md-mb50 wow fadeInUp",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                                            src: "/img/blog/2.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/blog/blog-dark",
                                                            className: "date",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
                                                                        children: "06"
                                                                    }),
                                                                    " August"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/blog/blog-dark",
                                                            className: "tag",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                                                                children: "WordPress"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/blog-details/blog-details-dark",
                                                        children: "How to use solid color combine with simple furnitures."
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                                                    className: "btn-more",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/blog-details/blog-details-dark",
                                                        className: "simple-btn",
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        })
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs1);


/***/ }),

/***/ 514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Works\Works1.jsx`)

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