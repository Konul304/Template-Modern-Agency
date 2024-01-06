exports.id = 1993;
exports.ids = [1993];
exports.modules = {

/***/ 7388:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 408));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1951))

/***/ }),

/***/ 1951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FAQ)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/handleAccordion.js
const handleAccordion = (container)=>{
    document.querySelectorAll(".accordion .item").forEach((item)=>{
        item.classList.remove("active");
    });
    document.querySelectorAll(".accordion-info").forEach((item)=>{
        item.classList.remove("active");
    });
    container.closest(".item").classList.add("active");
    /** Slide down. */ if (!container.classList.contains("active")) {
        /** Show the container. */ container.classList.add("active");
        container.style.height = "auto";
        /** Get the computed height of the container. */ var height = container.clientHeight + "px";
        /** Set the height of the content as 0px, */ /** so we can trigger the slide down animation. */ container.style.height = "0px";
        /** Do this after the 0px has applied. */ /** It's like a delay or something. MAGIC! */ setTimeout(()=>{
            container.style.height = height;
        }, 0);
    /** Slide up. */ } else {
        /** Set the height as 0px to trigger the slide up animation. */ container.style.height = "0px";
        /** Remove the `active` class when the animation ends. */ container.addEventListener("transitionend", ()=>{
            container.classList.remove("active");
        }, {
            once: true
        });
    }
};
/* harmony default export */ const common_handleAccordion = (handleAccordion);

;// CONCATENATED MODULE: ./src/data/mobile-app/faq.json
const faq_namespaceObject = JSON.parse('[{"question":"Everything You Want Know About Creating ?","answer":"But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer","active":false},{"question":"Frameworks Solve And Without Them ?","answer":"But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer","active":true},{"question":"Getting Started With CSS Cascade Layers ?","answer":"But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer","active":false},{"question":"Designing Better Links Websites Guideline ?","answer":"But must explain you how all this mistaken idea denouncing pleasure and praising pain was born and I will give you complete the system and expound the actual teachings of the great explorer","active":false}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Mobile-app/FAQ.jsx
/* __next_internal_client_entry_do_not_use__ default auto */  //= Scripts
 //= Static Data



function Faq() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "app-faq section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content md-mb50",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "stit mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "left"
                                        }),
                                        " Faqs"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "mb-30",
                                    children: "Have Any Questions on Minds? Frequently Asked Questions"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Sed perspiciatis unde omnis natus error sit voluptatem accus doloremque laudantium totarem aperiam eaqupsa quae abillo inventore veritatis quasi architecto"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#0",
                                    className: "butn-bord-red rounded buton mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Get Free 7 Days Trial"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "accordion shadwo",
                                children: faq_namespaceObject.map((question, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `item ${question.active ? "active" : ""} ${idx !== faq_namespaceObject.length - 1 ? "mb-30" : ""}`,
                                        onClick: (e)=>common_handleAccordion(e.currentTarget.querySelector(".accordion-info")),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "title",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        question.question,
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon pe-7s-angle-right"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `accordion-info ${question.active ? "active" : ""}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: question.answer
                                                })
                                            })
                                        ]
                                    }, idx))
                            })
                        })
                    })
                ]
            })
        })
    });
}
;
/* harmony default export */ const FAQ = (Faq);


/***/ }),

/***/ 7784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Mobile-app\FAQ.jsx`)

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