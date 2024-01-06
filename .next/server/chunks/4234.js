"use strict";
exports.id = 4234;
exports.ids = [4234];
exports.modules = {

/***/ 4234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Blogs_BlogList)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4006);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/blogs2.json
const blogs2_namespaceObject = JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Blogs/BlogList.jsx

 //= Static Data



const BlogList = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-pg blog-list section-padding pt-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-11",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "posts mt-80",
                        children: [
                            blogs2_namespaceObject.map((blogItem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item mb-80 wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6 valign",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img md-mb50",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: blogItem.image,
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-lg-6 valign",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cont",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "info",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog/blog-dark",
                                                                        className: "date",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    children: blogItem.date.day
                                                                                }),
                                                                                blogItem.date.month
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "/"
                                                                    }),
                                                                    blogItem.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/blog/blog-dark",
                                                                            className: "tag",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: tag
                                                                            })
                                                                        }, index))
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-details/blog-details-dark",
                                                                    children: blogItem.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "mt-10",
                                                                children: blogItem.content.substr(0, 146) + "..."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "btn-more mt-30",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-details/blog-details-dark",
                                                                    className: "simple-btn",
                                                                    children: "Read More"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }, blogItem.id)),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "pagination",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "active",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/blog/blog-dark`,
                                            children: "1"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/blog/blog-dark`,
                                            children: "2"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/blog/blog-dark`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-angle-right"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Blogs_BlogList = (BlogList);


/***/ })

};
;