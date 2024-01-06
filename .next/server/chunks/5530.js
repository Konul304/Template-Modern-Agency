"use strict";
exports.id = 5530;
exports.ids = [5530];
exports.modules = {

/***/ 4054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ModalVideo({ videoId, channel, isOpen, onClose, autoplay }) {
    const closeBtn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { 0: fullVideoUrl, 1: setFullVideoUrl } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (channel === "youtube") {
            setFullVideoUrl(getYoutubeUrl(videoId));
        } else if (channel === "vimeo") {
            setFullVideoUrl(getVimeoUrl(videoId));
        }
    }, [
        channel,
        videoId
    ]);
    function getYoutubeUrl(videoId) {
        return "//www.youtube.com/embed/" + videoId;
    }
    function getVimeoUrl(videoId) {
        return "//player.vimeo.com/video/" + videoId;
    }
    return isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "modal-video",
        tabIndex: "-1",
        role: "dialog",
        "aria-label": "video",
        onClick: onClose,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "modal-video-body",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "modal-video-inner",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
                        className: "modal-video-close-btn",
                        "aria-label": "video",
                        ref: closeBtn,
                        onClick: onClose
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                        className: "modal-video-movie-wrap",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("iframe", {
                            width: "460",
                            height: "230",
                            src: fullVideoUrl,
                            allowFullScreen: "allowFullScreen",
                            autoPlay: autoplay || false,
                            tabIndex: "-1"
                        })
                    })
                ]
            })
        })
    }) : null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalVideo);


/***/ })

};
;