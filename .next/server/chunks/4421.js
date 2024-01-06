"use strict";
exports.id = 4421;
exports.ids = [4421];
exports.modules = {

/***/ 3414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Team1)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = ()=>{
    let teamSection = document.querySelector(".team-crv");
    if (teamSection) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (window.pageYOffset > teamSection.offsetTop - 200) {
                    item.style.width = myVal;
                }
            });
        });
    }
};
/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);

// EXTERNAL MODULE: ./src/common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(4158);
;// CONCATENATED MODULE: ./src/data/sections/team.json
const team_namespaceObject = JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Team/Team1.jsx
/* __next_internal_client_entry_do_not_use__ default auto */  //= Scripts

 //= Static Data



const Team = ()=>{
    (0,react_.useEffect)(()=>{
        common_teamSkillsProgress();
        setTimeout(()=>{
            (0,tooltipEffect/* default */.Z)();
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "team-crv section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content wow fadeInUp md-mb30",
                            "data-wow-delay": ".5s",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Our Staff"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "co-tit mb-15",
                                    children: "We help to create visual strategies."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "skills-box mt-40",
                                    children: team_namespaceObject.n.map((skill)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "skill-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "custom-font",
                                                    children: skill.text
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "skill-progress",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progres",
                                                        "data-value": skill.value
                                                    })
                                                })
                                            ]
                                        }, skill.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6 toright",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "full-width",
                                            children: team_namespaceObject.f.slice(0, 2).map((team, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(0, 2).length ? "mb-30" : null}`,
                                                        "data-tooltip-tit": team.title,
                                                        "data-tooltip-sub": team.sub,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: team.image,
                                                            alt: "",
                                                            className: "imago wow"
                                                        })
                                                    })
                                                }, team.id))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6 toleft valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "full-width text-left",
                                            children: team_namespaceObject.f.slice(2, 4).map((team, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `img sizxl ${index + 1 != team_namespaceObject.f.slice(2, 4).length ? "mb-30" : null}`,
                                                        "data-tooltip-tit": team.title,
                                                        "data-tooltip-sub": team.sub,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: team.image,
                                                            alt: "",
                                                            className: "imago wow"
                                                        })
                                                    })
                                                }, team.id))
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Team1 = (Team);


/***/ }),

/***/ 3929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7176);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Admin\Desktop\vie_nextjs_13\src\components\Team\Team1.jsx`)

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