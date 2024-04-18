/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAbout: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

function render(){
    const $main=document.createElement("main");
    const $welcome=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["cursive","golden"],"welcome");
    const $title=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1",null,["gray"],"About Us");
    const $hr=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("hr");
    const content="We are the best of the best. Collecting cuisines from around the world and bringing them to Your plate is What we excel at. So please give us the please and be our guest for a one of a king experience. We guarantee to make the visit memorable .";
    const $p=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["menu-item"],content);
    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($p);
    _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($main);


};


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

function render(){
    const $footer=document.createElement("footer");
    const $p=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["golden"],"Developed by jet_black_ninja as part of The Odin Project.");
    $footer.appendChild($p);
    _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($footer);

};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $content: () => (/* binding */ $content),
/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _main_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-home */ "./src/main-home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-menu */ "./src/main-menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");






const $content =document.getElementById("content");

function createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
  
    if (content) element.innerText = content;
  
    return element;
  }
function home(){
    $content.innerHTML= "";
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_main_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();

}
function menu(){
    $content.innerHTML= "";
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_main_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}
function about(){
    $content.innerHTML= "";
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_about__WEBPACK_IMPORTED_MODULE_4__.renderAbout)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}
home();
document.addEventListener("click",(e)=>{
    const target=e.target.innerText;

    if(target==="HOME")home();
    if(target==="MENU" || target ==="VIEW THE MENU")menu();
    if(target==="ABOUT")about();

});


/***/ }),

/***/ "./src/main-home.js":
/*!**************************!*\
  !*** ./src/main-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHome: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

function render(){
    const $main=document.createElement("main");
    const $welcome=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["cursive","golden"],"welcome");
    const $title=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h1",null,["white"],"The Bakery");
    const $hr=document.createElement("hr");
    const $subtitle=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["text-center","white"],"Have A taste of the finest of Dining World!");
    const $button=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("button",null,null,"View The Menu");
    

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);
    _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($main);
}



/***/ }),

/***/ "./src/main-menu.js":
/*!**************************!*\
  !*** ./src/main-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const menu=[
    {
        name:"Arrabiata Pasta",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"$20",
    },
    {
        name:"Korean Fried Chicken",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"$45",
    },
    {
        name:"Chilaquiles",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price:"$20",
    },
];
function render(){
    const $main=document.createElement("main");
    $main.classList.add("main");
    const $welcome=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["cursive","golden"],"welcome");
    const $title=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("H1",null,["gray"],"Menu");
    const $hr=document.createElement("hr");
    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    menu.forEach((item)=>{
        const $div=document.createElement("div",null,["menu-item"],null);
        const $name=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h2",null,["golden"],item.name);
        const $description=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("p",null,["gray"],item.description);
        const $price=(0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("h2",null,["golden"],item.price);
        const $hr=document.createElement("hr",null,["menu-hr"],null);

        $div.appendChild($name);
        $div.appendChild($description);
        $div.appendChild($price);
        $div.appendChild($hr);
        $main.appendChild($div);
    });
    _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($main);
};



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderNav: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

function render(){
    const navItems=["home","menu","about"];
    const $ul=document.createElement("ul");
    navItems.forEach((item)=>
    $ul.appendChild((0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)("li",null,null,item)));
    const $nav=document.createElement("nav");
    $nav.appendChild($ul);
    _index__WEBPACK_IMPORTED_MODULE_0__.$content.appendChild($nav);

}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNsRDtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFpQjtBQUNwQyxpQkFBaUIseURBQWlCO0FBQ2xDLGNBQWMseURBQWlCO0FBQy9CO0FBQ0EsYUFBYSx5REFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFRO0FBQ1o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm9EO0FBQ3BEO0FBQ0E7QUFDQSxhQUFhLHlEQUFpQjtBQUM5QjtBQUNBLElBQUksNENBQVE7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQb0M7QUFDRztBQUNEO0FBQ0M7QUFDSDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxzREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxzREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUztBQUNiLElBQUksbURBQVc7QUFDZixJQUFJLHFEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q21EO0FBQ3BEO0FBQ0E7QUFDQSxtQkFBbUIseURBQWlCO0FBQ3BDLGlCQUFpQix5REFBaUI7QUFDbEM7QUFDQSxvQkFBb0IseURBQWlCO0FBQ3JDLGtCQUFrQix5REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFRO0FBQ1o7QUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQndCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBaUI7QUFDcEMsaUJBQWlCLHlEQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWlCO0FBQ3JDLDJCQUEyQix5REFBaUI7QUFDNUMscUJBQXFCLHlEQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLDRDQUFRO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWlCO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJLDRDQUFRO0FBQ1o7QUFDQTs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLWhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4tbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyRjb250ZW50LGNyZWF0ZUh0bWxFbGVtZW50fWZyb20gXCIuL2luZGV4XCI7XHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgY29uc3QgJG1haW49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICBjb25zdCAkd2VsY29tZT1jcmVhdGVIdG1sRWxlbWVudChcInBcIixudWxsLFtcImN1cnNpdmVcIixcImdvbGRlblwiXSxcIndlbGNvbWVcIik7XHJcbiAgICBjb25zdCAkdGl0bGU9Y3JlYXRlSHRtbEVsZW1lbnQoXCJoMVwiLG51bGwsW1wiZ3JheVwiXSxcIkFib3V0IFVzXCIpO1xyXG4gICAgY29uc3QgJGhyPWNyZWF0ZUh0bWxFbGVtZW50KFwiaHJcIik7XHJcbiAgICBjb25zdCBjb250ZW50PVwiV2UgYXJlIHRoZSBiZXN0IG9mIHRoZSBiZXN0LiBDb2xsZWN0aW5nIGN1aXNpbmVzIGZyb20gYXJvdW5kIHRoZSB3b3JsZCBhbmQgYnJpbmdpbmcgdGhlbSB0byBZb3VyIHBsYXRlIGlzIFdoYXQgd2UgZXhjZWwgYXQuIFNvIHBsZWFzZSBnaXZlIHVzIHRoZSBwbGVhc2UgYW5kIGJlIG91ciBndWVzdCBmb3IgYSBvbmUgb2YgYSBraW5nIGV4cGVyaWVuY2UuIFdlIGd1YXJhbnRlZSB0byBtYWtlIHRoZSB2aXNpdCBtZW1vcmFibGUgLlwiO1xyXG4gICAgY29uc3QgJHA9Y3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsbnVsbCxbXCJtZW51LWl0ZW1cIl0sY29udGVudCk7XHJcbiAgICAkbWFpbi5hcHBlbmRDaGlsZCgkd2VsY29tZSk7XHJcbiAgICAkbWFpbi5hcHBlbmRDaGlsZCgkdGl0bGUpO1xyXG4gICAgJG1haW4uYXBwZW5kQ2hpbGQoJGhyKTtcclxuICAgICRtYWluLmFwcGVuZENoaWxkKCRwKTtcclxuICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRtYWluKTtcclxuXHJcblxyXG59O1xyXG5leHBvcnR7cmVuZGVyIGFzIHJlbmRlckFib3V0fTsiLCJpbXBvcnQgeyRjb250ZW50ICxjcmVhdGVIdG1sRWxlbWVudH0gZnJvbSAnLi9pbmRleCc7XHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgY29uc3QgJGZvb3Rlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgY29uc3QgJHA9Y3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsbnVsbCxbXCJnb2xkZW5cIl0sXCJEZXZlbG9wZWQgYnkgamV0X2JsYWNrX25pbmphIGFzIHBhcnQgb2YgVGhlIE9kaW4gUHJvamVjdC5cIik7XHJcbiAgICAkZm9vdGVyLmFwcGVuZENoaWxkKCRwKTtcclxuICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRmb290ZXIpO1xyXG5cclxufTtcclxuZXhwb3J0IHtyZW5kZXIgYXMgcmVuZGVyRm9vdGVyfTsiLCJpbXBvcnQge3JlbmRlck5hdiB9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQge3JlbmRlckhvbWV9IGZyb20gXCIuL21haW4taG9tZVwiO1xyXG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7cmVuZGVyTWVudX0gZnJvbSBcIi4vbWFpbi1tZW51XCI7XHJcbmltcG9ydCB7cmVuZGVyQWJvdXR9IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5jb25zdCAkY29udGVudCA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHRtbEVsZW1lbnQodHlwZSwgaWQsIGFycmF5Q2xhc3NlcywgY29udGVudCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcclxuICAgIGlmIChhcnJheUNsYXNzZXMpXHJcbiAgICAgIGFycmF5Q2xhc3Nlcy5mb3JFYWNoKChteUNsYXNzKSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQobXlDbGFzcykpO1xyXG4gIFxyXG4gICAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJUZXh0ID0gY29udGVudDtcclxuICBcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuZnVuY3Rpb24gaG9tZSgpe1xyXG4gICAgJGNvbnRlbnQuaW5uZXJIVE1MPSBcIlwiO1xyXG4gICAgcmVuZGVyTmF2KCk7XHJcbiAgICByZW5kZXJIb21lKCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxuXHJcbn1cclxuZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgJGNvbnRlbnQuaW5uZXJIVE1MPSBcIlwiO1xyXG4gICAgcmVuZGVyTmF2KCk7XHJcbiAgICByZW5kZXJNZW51KCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxufVxyXG5mdW5jdGlvbiBhYm91dCgpe1xyXG4gICAgJGNvbnRlbnQuaW5uZXJIVE1MPSBcIlwiO1xyXG4gICAgcmVuZGVyTmF2KCk7XHJcbiAgICByZW5kZXJBYm91dCgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuaG9tZSgpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSk9PntcclxuICAgIGNvbnN0IHRhcmdldD1lLnRhcmdldC5pbm5lclRleHQ7XHJcblxyXG4gICAgaWYodGFyZ2V0PT09XCJIT01FXCIpaG9tZSgpO1xyXG4gICAgaWYodGFyZ2V0PT09XCJNRU5VXCIgfHwgdGFyZ2V0ID09PVwiVklFVyBUSEUgTUVOVVwiKW1lbnUoKTtcclxuICAgIGlmKHRhcmdldD09PVwiQUJPVVRcIilhYm91dCgpO1xyXG5cclxufSk7XHJcbmV4cG9ydCB7Y3JlYXRlSHRtbEVsZW1lbnQsJGNvbnRlbnR9OyIsImltcG9ydCB7JGNvbnRlbnQsIGNyZWF0ZUh0bWxFbGVtZW50fSBmcm9tICcuL2luZGV4JztcclxuZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICBjb25zdCAkbWFpbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICAgIGNvbnN0ICR3ZWxjb21lPWNyZWF0ZUh0bWxFbGVtZW50KFwicFwiLG51bGwsW1wiY3Vyc2l2ZVwiLFwiZ29sZGVuXCJdLFwid2VsY29tZVwiKTtcclxuICAgIGNvbnN0ICR0aXRsZT1jcmVhdGVIdG1sRWxlbWVudChcImgxXCIsbnVsbCxbXCJ3aGl0ZVwiXSxcIlRoZSBCYWtlcnlcIik7XHJcbiAgICBjb25zdCAkaHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgY29uc3QgJHN1YnRpdGxlPWNyZWF0ZUh0bWxFbGVtZW50KFwicFwiLG51bGwsW1widGV4dC1jZW50ZXJcIixcIndoaXRlXCJdLFwiSGF2ZSBBIHRhc3RlIG9mIHRoZSBmaW5lc3Qgb2YgRGluaW5nIFdvcmxkIVwiKTtcclxuICAgIGNvbnN0ICRidXR0b249Y3JlYXRlSHRtbEVsZW1lbnQoXCJidXR0b25cIixudWxsLG51bGwsXCJWaWV3IFRoZSBNZW51XCIpO1xyXG4gICAgXHJcblxyXG4gICAgJG1haW4uYXBwZW5kQ2hpbGQoJHdlbGNvbWUpO1xyXG4gICAgJG1haW4uYXBwZW5kQ2hpbGQoJHRpdGxlKTtcclxuICAgICRtYWluLmFwcGVuZENoaWxkKCRocik7XHJcbiAgICAkbWFpbi5hcHBlbmRDaGlsZCgkc3VidGl0bGUpO1xyXG4gICAgJG1haW4uYXBwZW5kQ2hpbGQoJGJ1dHRvbik7XHJcbiAgICAkY29udGVudC5hcHBlbmRDaGlsZCgkbWFpbik7XHJcbn1cclxuZXhwb3J0IHtyZW5kZXIgYXMgcmVuZGVySG9tZX07XHJcbiIsImltcG9ydCB7JGNvbnRlbnQgLCBjcmVhdGVIdG1sRWxlbWVudCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBtZW51PVtcclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiQXJyYWJpYXRhIFBhc3RhXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldFwiLFxyXG4gICAgICAgIHByaWNlOlwiJDIwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6XCJLb3JlYW4gRnJpZWQgQ2hpY2tlblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXRcIixcclxuICAgICAgICBwcmljZTpcIiQ0NVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOlwiQ2hpbGFxdWlsZXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0XCIsXHJcbiAgICAgICAgcHJpY2U6XCIkMjBcIixcclxuICAgIH0sXHJcbl07XHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgY29uc3QgJG1haW49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcbiAgICAkbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcclxuICAgIGNvbnN0ICR3ZWxjb21lPWNyZWF0ZUh0bWxFbGVtZW50KFwicFwiLG51bGwsW1wiY3Vyc2l2ZVwiLFwiZ29sZGVuXCJdLFwid2VsY29tZVwiKTtcclxuICAgIGNvbnN0ICR0aXRsZT1jcmVhdGVIdG1sRWxlbWVudChcIkgxXCIsbnVsbCxbXCJncmF5XCJdLFwiTWVudVwiKTtcclxuICAgIGNvbnN0ICRocj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XHJcbiAgICAkbWFpbi5hcHBlbmRDaGlsZCgkd2VsY29tZSk7XHJcbiAgICAkbWFpbi5hcHBlbmRDaGlsZCgkdGl0bGUpO1xyXG4gICAgJG1haW4uYXBwZW5kQ2hpbGQoJGhyKTtcclxuICAgIG1lbnUuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICBjb25zdCAkZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLFtcIm1lbnUtaXRlbVwiXSxudWxsKTtcclxuICAgICAgICBjb25zdCAkbmFtZT1jcmVhdGVIdG1sRWxlbWVudChcImgyXCIsbnVsbCxbXCJnb2xkZW5cIl0saXRlbS5uYW1lKTtcclxuICAgICAgICBjb25zdCAkZGVzY3JpcHRpb249Y3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsbnVsbCxbXCJncmF5XCJdLGl0ZW0uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0ICRwcmljZT1jcmVhdGVIdG1sRWxlbWVudChcImgyXCIsbnVsbCxbXCJnb2xkZW5cIl0saXRlbS5wcmljZSk7XHJcbiAgICAgICAgY29uc3QgJGhyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiLG51bGwsW1wibWVudS1oclwiXSxudWxsKTtcclxuXHJcbiAgICAgICAgJGRpdi5hcHBlbmRDaGlsZCgkbmFtZSk7XHJcbiAgICAgICAgJGRpdi5hcHBlbmRDaGlsZCgkZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICRkaXYuYXBwZW5kQ2hpbGQoJHByaWNlKTtcclxuICAgICAgICAkZGl2LmFwcGVuZENoaWxkKCRocik7XHJcbiAgICAgICAgJG1haW4uYXBwZW5kQ2hpbGQoJGRpdik7XHJcbiAgICB9KTtcclxuICAgICRjb250ZW50LmFwcGVuZENoaWxkKCRtYWluKTtcclxufTtcclxuXHJcbmV4cG9ydCB7cmVuZGVyIGFzIHJlbmRlck1lbnV9OyIsImltcG9ydHskY29udGVudCxjcmVhdGVIdG1sRWxlbWVudH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICBjb25zdCBuYXZJdGVtcz1bXCJob21lXCIsXCJtZW51XCIsXCJhYm91dFwiXTtcclxuICAgIGNvbnN0ICR1bD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKT0+XHJcbiAgICAkdWwuYXBwZW5kQ2hpbGQoY3JlYXRlSHRtbEVsZW1lbnQoXCJsaVwiLG51bGwsbnVsbCxpdGVtKSkpO1xyXG4gICAgY29uc3QgJG5hdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gICAgJG5hdi5hcHBlbmRDaGlsZCgkdWwpO1xyXG4gICAgJGNvbnRlbnQuYXBwZW5kQ2hpbGQoJG5hdik7XHJcblxyXG59XHJcbmV4cG9ydCB7cmVuZGVyIGFzIHJlbmRlck5hdn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==