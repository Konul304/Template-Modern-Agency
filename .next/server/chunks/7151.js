"use strict";
exports.id = 7151;
exports.ids = [7151];
exports.modules = {

/***/ 7151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Blogs_BlogStanderd)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4006);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/blogs1.json
const blogs1_namespaceObject = JSON.parse('[{"id":1,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b2.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Blogs/BlogStanderd.jsx

 //= Static Data



const BlogStanderd = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-pg section-padding pt-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-11",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "posts",
                        children: [
                            blogs1_namespaceObject.map((blogItem, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `item ${index === blogs1_namespaceObject.length - 1 ? "" : "mb-80"}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/blog-details/blog-details-dark`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: blogItem.image,
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "content",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row justify-content-center",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "col-10",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: `/blog/blog-dark`,
                                                            className: "date",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "num",
                                                                    children: blogItem.date.day
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: blogItem.date.month
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "tags",
                                                            children: blogItem.tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog/blog-dark",
                                                                    children: tag
                                                                }, index))
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: `/blog-details/blog-details-dark`,
                                                                children: blogItem.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: blogItem.content
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/blog-details/blog-details-dark`,
                                                            className: "butn bord curve mt-30",
                                                            children: "Read More"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
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
/* harmony default export */ const Blogs_BlogStanderd = (BlogStanderd);


/***/ })

};
;