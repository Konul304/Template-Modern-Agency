exports.id = 3364;
exports.ids = [3364];
exports.modules = {

/***/ 7610:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4104));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6603));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2575));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1701))

/***/ }),

/***/ 1701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact_ContactHeader)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/data/contact-header.json
const contact_header_namespaceObject = JSON.parse('{"T":{"P":"Let\'s talk","E":"about your project."},"k":"Feel free to ask me any question or let’s do to talk about our future collaboration."}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Contact/ContactHeader.jsx
/* __next_internal_client_entry_do_not_use__ default auto */  //= Static Data



function ContactHeader() {
    (0,react_.useEffect)(()=>{
        setTimeout(()=>{
            if (document.querySelector("#particles-js canvas")) {
                document.querySelector("#particles-js canvas").style.position = "unset";
            }
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "pages-header circle-bg valign position-re",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-9 col-md-11",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "capt",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "color-font mb-10 fw-700",
                                        children: [
                                            contact_header_namespaceObject.T.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            contact_header_namespaceObject.T.E
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: contact_header_namespaceObject.k
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "circle-color",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gradient-circle"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gradient-circle two"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Contact_ContactHeader = (ContactHeader);


/***/ }),

/***/ 341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Contact_ContactForm)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: ./src/components/Common/Split.jsx
var Split = __webpack_require__(6711);
;// CONCATENATED MODULE: ./src/data/contact-form.json
const contact_form_namespaceObject = JSON.parse('{"TN":"Let\'s Talk.","Do":"Email@example.com","m7":"+4.930.705.5448","xh":{"P":"295 Witting Streets Suite 666,","E":"Melbourne, Australia"}}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Contact/ContactForm.jsx
 //= Components
 //= Static Data



function ContactForm({ theme }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "contact section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form md-mb50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "fw-700 color-font mb-50",
                                    children: "Get In Touch."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    id: "contact-form",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "messages"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "controls",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "form_name",
                                                        type: "text",
                                                        name: "name",
                                                        placeholder: "Name",
                                                        required: "required"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "form_email",
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "Email",
                                                        required: "required"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        id: "form_message",
                                                        name: "message",
                                                        placeholder: "Message",
                                                        rows: "4",
                                                        required: "required"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    className: `butn ${theme === "light" ? "dark" : "bord"}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Send Message"
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
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont-info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "fw-700 color-font mb-50",
                                    children: "Contact Info."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.ZP, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "wow",
                                        "data-splitting": true,
                                        children: contact_form_namespaceObject.TN
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item mb-40",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#0",
                                                children: contact_form_namespaceObject.Do
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: contact_form_namespaceObject.m7
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.ZP, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "wow",
                                        "data-splitting": true,
                                        children: "Visit Us."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                        children: [
                                            contact_form_namespaceObject.xh.P,
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            contact_form_namespaceObject.xh.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social mt-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Contact_ContactForm = (ContactForm);


/***/ }),

/***/ 4703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Contact\ContactHeader.jsx`)

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