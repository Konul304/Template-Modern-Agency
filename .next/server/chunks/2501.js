"use strict";
exports.id = 2501;
exports.ids = [2501];
exports.modules = {

/***/ 2501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Blogs_BlogGrid)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7175);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4006);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/blogs3.json
const blogs3_namespaceObject = JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":5,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":6,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]');
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/Blogs/BlogGrid.jsx

 //= Static Data



const BlogGrid = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-pg blog section-padding pt-0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "posts",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        blogs3_namespaceObject.map((blogItem)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "item mb-80 wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: blogItem.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
                                                                    href: "/blog/blog-dark/",
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
                                                            children: blogItem.title.substr(0, 55) + "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "btn-more",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
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
                                        href: `/blog/blog-dark}`,
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
    });
};
/* harmony default export */ const Blogs_BlogGrid = (BlogGrid);


/***/ })

};
;