/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
}

:root{
    --project-container-height: 20rem;
    --project-cross-btn-container-height: 2.7rem;
}

#header{
    text-align: center;
}

h1{
    text-decoration: underline;
    font-size: 2.5rem;
}

#projects{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-auto-rows: var(--project-container-height);
    row-gap: 2vw;
    column-gap: 2vw;
}

.project{
    background-color: antiquewhite;
    border: solid;
    border-radius: 0.6rem;
}


.project-cross-btn-container, .task-cross-btn-container{
    text-align: right;
    height: var(--project-cross-btn-container-height);
}

.project-cross-btn, .task-cross-btn{
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
}

.task-cross-btn{
    margin-right: 0rem;
    margin-top: 0rem;
}

.project-cross-btn:hover, .task-cross-btn:hover{
    background-color: rgb(255, 73, 73);
}

.project-inside-btn-container{
    height: calc(var(--project-container-height) - var(--project-cross-btn-container-height));
    padding: 1rem;
}

.project-inside-btn{
    height: 100%;
    width: 100%;
    background-color: antiquewhite;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: underline;
}

.project-inside-btn:hover{
    background-color:rgb(255, 222, 181);
}



.project-inside-btn:active{
    background-color:rgb(255, 216, 169);
}





#project-add-round-btn{
    position:fixed;
    right: 1rem;
    bottom: 1rem;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background-color: rgb(29, 162, 29);
    border: solid 0.2em;
}

#project-add-round-btn:hover{
    background-color: rgb(0, 137, 0);
}

#project-add-round-btn:active{
    background-color: rgb(0, 109, 0);
}


.project-tasks-page-header-container{
    display: flex;
    justify-content: space-between;
}

.back-btn{
    height: 2.1rem;
    width: 2.1rem;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
    background-color: rgb(255, 230, 87);
}

.back-btn:hover{
    background-color: rgb(255, 243, 175);
}




#project-add-task-btn{
    position:fixed;
    right: 1rem;
    bottom: 1rem;
    height: 4rem;
    width: 6rem;
    border-radius: 30%;
    background-color: rgb(29, 162, 29);
    border: solid 0.2em;
}

#project-add-task-btn:hover{
    background-color: rgb(0, 137, 0);
}

#project-add-task-btn:active{
    background-color: rgb(0, 109, 0);
}




.task-form-container{
    --widthh: 15rem;
    --heightt: 12rem;
    border: solid;
    position: absolute;
    top: calc(50% - 0.5*var(--heightt));
    left: calc(50% - 0.5*var(--widthh));
    display: none;
    background-color:rgb(255, 216, 169);
    padding: 1rem;
    width: var(--widthh);
    height: var(--heightt);
}

.submit-button{
    width: 4rem;
    height: 2rem;
    border: solid;
    border-radius: 1rem;
    background-color:rgb(29, 162, 29);
}

.submit-button:hover{
    background-color:rgb(0, 137, 0);
}

.submit-button:active{
    background-color:rgb(0, 109, 0);
}




.tasks-container{
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    row-gap: 0.5rem;
    padding-top: 1rem;
}

.task{
    background-color:rgb(255, 216, 169);
    border: solid;
    padding: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,4CAA4C;AAChD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,+CAA+C;IAC/C,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,qBAAqB;AACzB;;;AAGA;IACI,iBAAiB;IACjB,iDAAiD;AACrD;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,yFAAyF;IACzF,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,mCAAmC;AACvC;;;;AAIA;IACI,mCAAmC;AACvC;;;;;;AAMA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;;AAGA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;;;;AAKA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;;;;AAKA;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,mCAAmC;IACnC,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;;;;AAKA;IACI,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;IACnC,aAAa;IACb,aAAa;AACjB","sourcesContent":["*{\n    box-sizing: border-box;\n}\n\n:root{\n    --project-container-height: 20rem;\n    --project-cross-btn-container-height: 2.7rem;\n}\n\n#header{\n    text-align: center;\n}\n\nh1{\n    text-decoration: underline;\n    font-size: 2.5rem;\n}\n\n#projects{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    grid-auto-rows: var(--project-container-height);\n    row-gap: 2vw;\n    column-gap: 2vw;\n}\n\n.project{\n    background-color: antiquewhite;\n    border: solid;\n    border-radius: 0.6rem;\n}\n\n\n.project-cross-btn-container, .task-cross-btn-container{\n    text-align: right;\n    height: var(--project-cross-btn-container-height);\n}\n\n.project-cross-btn, .task-cross-btn{\n    height: 2rem;\n    width: 2rem;\n    margin-right: 0.5rem;\n    margin-top: 0.3rem;\n}\n\n.task-cross-btn{\n    margin-right: 0rem;\n    margin-top: 0rem;\n}\n\n.project-cross-btn:hover, .task-cross-btn:hover{\n    background-color: rgb(255, 73, 73);\n}\n\n.project-inside-btn-container{\n    height: calc(var(--project-container-height) - var(--project-cross-btn-container-height));\n    padding: 1rem;\n}\n\n.project-inside-btn{\n    height: 100%;\n    width: 100%;\n    background-color: antiquewhite;\n    border: none;\n    font-size: 1.6rem;\n    font-weight: 700;\n    text-decoration: underline;\n}\n\n.project-inside-btn:hover{\n    background-color:rgb(255, 222, 181);\n}\n\n\n\n.project-inside-btn:active{\n    background-color:rgb(255, 216, 169);\n}\n\n\n\n\n\n#project-add-round-btn{\n    position:fixed;\n    right: 1rem;\n    bottom: 1rem;\n    height: 4rem;\n    width: 4rem;\n    border-radius: 50%;\n    background-color: rgb(29, 162, 29);\n    border: solid 0.2em;\n}\n\n#project-add-round-btn:hover{\n    background-color: rgb(0, 137, 0);\n}\n\n#project-add-round-btn:active{\n    background-color: rgb(0, 109, 0);\n}\n\n\n.project-tasks-page-header-container{\n    display: flex;\n    justify-content: space-between;\n}\n\n.back-btn{\n    height: 2.1rem;\n    width: 2.1rem;\n    margin-right: 0.5rem;\n    margin-top: 0.3rem;\n    background-color: rgb(255, 230, 87);\n}\n\n.back-btn:hover{\n    background-color: rgb(255, 243, 175);\n}\n\n\n\n\n#project-add-task-btn{\n    position:fixed;\n    right: 1rem;\n    bottom: 1rem;\n    height: 4rem;\n    width: 6rem;\n    border-radius: 30%;\n    background-color: rgb(29, 162, 29);\n    border: solid 0.2em;\n}\n\n#project-add-task-btn:hover{\n    background-color: rgb(0, 137, 0);\n}\n\n#project-add-task-btn:active{\n    background-color: rgb(0, 109, 0);\n}\n\n\n\n\n.task-form-container{\n    --widthh: 15rem;\n    --heightt: 12rem;\n    border: solid;\n    position: absolute;\n    top: calc(50% - 0.5*var(--heightt));\n    left: calc(50% - 0.5*var(--widthh));\n    display: none;\n    background-color:rgb(255, 216, 169);\n    padding: 1rem;\n    width: var(--widthh);\n    height: var(--heightt);\n}\n\n.submit-button{\n    width: 4rem;\n    height: 2rem;\n    border: solid;\n    border-radius: 1rem;\n    background-color:rgb(29, 162, 29);\n}\n\n.submit-button:hover{\n    background-color:rgb(0, 137, 0);\n}\n\n.submit-button:active{\n    background-color:rgb(0, 109, 0);\n}\n\n\n\n\n.tasks-container{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-rows: auto;\n    row-gap: 0.5rem;\n    padding-top: 1rem;\n}\n\n.task{\n    background-color:rgb(255, 216, 169);\n    border: solid;\n    padding: 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectDOM: () => (/* binding */ createProjectDOM),
/* harmony export */   openProjectDOM: () => (/* binding */ openProjectDOM),
/* harmony export */   renderProjectsPage: () => (/* binding */ renderProjectsPage)
/* harmony export */ });
/* harmony import */ var _OpenProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenProject */ "./src/OpenProject.js");
/* harmony import */ var _projectCreateAndRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreateAndRemove */ "./src/projectCreateAndRemove.js");
/* harmony import */ var _taskCreateAndRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskCreateAndRemove */ "./src/taskCreateAndRemove.js");




function createProjectDOM(projectName){
    
    const projectDiv = document.createElement("div");
    projectDiv.classList = "project";
    projectDiv.setAttribute("myid", projectName);

    const projectCrossBtnContainer = document.createElement("div");
    projectCrossBtnContainer.classList = "project-cross-btn-container";
    const projectCrossBtn = document.createElement("button");
    projectCrossBtn.classList = "project-cross-btn";
    projectCrossBtn.textContent = "X";
    projectCrossBtn.addEventListener("click", _projectCreateAndRemove__WEBPACK_IMPORTED_MODULE_1__.removeProject);
    projectCrossBtnContainer.appendChild(projectCrossBtn);
    projectDiv.appendChild(projectCrossBtnContainer);

    const projectInsideBtnContainer = document.createElement("div");
    projectInsideBtnContainer.classList = "project-inside-btn-container";
    const projectInsideBtn = document.createElement("button");
    projectInsideBtn.classList = "project-inside-btn";
    projectInsideBtn.textContent = projectName;
    projectInsideBtn.addEventListener("click", _OpenProject__WEBPACK_IMPORTED_MODULE_0__.openProject);
    projectInsideBtnContainer.appendChild(projectInsideBtn);
    projectDiv.appendChild(projectInsideBtnContainer);

    // append project to DOM
    const projectsContainer = document.querySelector("#projects");
    projectsContainer.appendChild(projectDiv);
}


function renderProjectsPage(){
    //clearing body
    const mainBody = document.querySelector("body");
    mainBody.textContent = "";
    
    // adding header
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");
    const hdr = document.createElement("h1");
    hdr.textContent = "To-Do List";
    headerDiv.appendChild(hdr);
    mainBody.appendChild(headerDiv);

    // adding div for projects
    const projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("id", "projects");
    mainBody.appendChild(projectsDiv);

    // adding projects to it one-by-one
    // getting array of all projects
    const allProjectsArray = JSON.parse(localStorage.getItem("ProjectsStorageArray"));
    
    // making DOM projects one by one from array
    for (let i=0; i<allProjectsArray.length; i++){
        createProjectDOM(allProjectsArray[i]);
    }
    
    
    // project add btn container and add button
    const projectAddBtnContainer = document.createElement("div");
    projectAddBtnContainer.setAttribute("id", "project-add-btn-container");
    const projectAddBtn = document.createElement("button");
    projectAddBtn.textContent = "+";
    projectAddBtn.setAttribute("id", "project-add-round-btn");
    projectAddBtn.addEventListener("click", _projectCreateAndRemove__WEBPACK_IMPORTED_MODULE_1__.createProject);
    projectAddBtnContainer.appendChild(projectAddBtn);
    mainBody.appendChild(projectAddBtnContainer);
}






function createTaskDOM(taskObj){

    const taskContainer = document.querySelector(".tasks-container");
    
    const task = document.createElement("div");
    task.classList = "task";
    
    const crossBtnContainer = document.createElement("div");
    crossBtnContainer.classList = "task-cross-btn-container";

    const crossBtn = document.createElement("button");
    crossBtn.classList = "task-cross-btn";
    crossBtn.textContent = "X";
    crossBtn.addEventListener("click", _taskCreateAndRemove__WEBPACK_IMPORTED_MODULE_2__.removeTask);

    crossBtnContainer.appendChild(crossBtn);
    task.appendChild(crossBtnContainer);

    const taskObject = JSON.parse(taskObj);
    
    const p12 = document.createElement("p");
    p12.textContent = taskObject["title"];
    p12.style.textDecoration = "underline";
    p12.style.fontWeight = "700";
    p12.style.fontSize = "1.4rem";
    task.appendChild(p12);
    
    
    const p22 = document.createElement("p");
    p22.textContent = taskObject["description"];
    p22.style.fontSize = "1.2rem";
    task.appendChild(p22);

    taskContainer.appendChild(task);
}


function openProjectDOM(projectName){
    
    // clear body
    const mainBody = document.querySelector("body");
    mainBody.textContent = "";
    ///////////////////////////////////////////////////////////////////////
    // TASK FORM (hidden)
    const taskFormContainer = document.createElement("div");
    taskFormContainer.classList = "task-form-container";
    const taskForm = document.createElement("form");
    taskForm.classList = "task-form";
    
    // title
    const labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "title");
    labelTitle.textContent = "Title:";
    const breakEle = document.createElement("br");
    taskForm.appendChild(labelTitle);
    taskForm.appendChild(document.createElement("br"));
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "title");
    inputTitle.setAttribute("id", "title");
    taskForm.appendChild(inputTitle);
    taskForm.appendChild(document.createElement("br"));
    taskForm.appendChild(document.createElement("br"));

    // description
    const labelDescription = document.createElement("label");
    labelDescription.setAttribute("for", "description");
    labelDescription.textContent = "Description:";
    taskForm.appendChild(labelDescription);
    taskForm.appendChild(document.createElement("br"));
    const inputDescription = document.createElement("input");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("name", "description");
    inputDescription.setAttribute("id", "description");
    taskForm.appendChild(inputDescription);
    taskForm.appendChild(document.createElement("br"));
    taskForm.appendChild(document.createElement("br"));

    // button (submit)
    const submitButton = document.createElement("button");
    submitButton.classList = "submit-button";
    submitButton.setAttribute("type", "button");
    submitButton.textContent = "Add";
    submitButton.addEventListener("click", _taskCreateAndRemove__WEBPACK_IMPORTED_MODULE_2__.createTask);
    taskForm.appendChild(submitButton);

    // button (cancel)
    const cancelButton = document.createElement("button");
    cancelButton.classList = "submit-button";
    cancelButton.setAttribute("type", "button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", _OpenProject__WEBPACK_IMPORTED_MODULE_0__.hideTaskForm);
    taskForm.appendChild(cancelButton);

    taskFormContainer.appendChild(taskForm);
    mainBody.appendChild(taskFormContainer);
    ///////////////////////////////////////////////////////////////////////
    
    
    
    // create headerDiv
    const headerDiv = document.createElement("div");
    headerDiv.classList = "project-tasks-page-header-container";
    const backBtn = document.createElement("button");
    backBtn.classList = "back-btn";
    backBtn.textContent = "<--";
    backBtn.addEventListener("click", renderProjectsPage);
    const headerTitle = document.createElement("h1");
    headerTitle.classList = "project-tasks-page-header";
    headerTitle.textContent = projectName;
    headerDiv.appendChild(backBtn);
    headerDiv.appendChild(headerTitle);
    headerDiv.style.borderBottom = "solid";
    mainBody.appendChild(headerDiv);


    // tasks container
    const tasksContainer = document.createElement("div");
    tasksContainer.classList = "tasks-container";
    mainBody.appendChild(tasksContainer);


    // tasks (append from array of tasks of that project, laod from localStorage)
    
    const taskList = JSON.parse(localStorage.getItem(projectName));
    
    // making DOM tasks one by one from array
    for (let i=0; i<taskList.length; i++){
        createTaskDOM(taskList[i]);
    }


    
    // task-add-button
    const taskAddBtn = document.createElement("button");
    taskAddBtn.setAttribute("id", "project-add-task-btn");
    taskAddBtn.textContent = "Add Task";
    taskAddBtn.addEventListener("click", _OpenProject__WEBPACK_IMPORTED_MODULE_0__.showTaskForm);
    mainBody.appendChild(taskAddBtn);
}




/***/ }),

/***/ "./src/OpenProject.js":
/*!****************************!*\
  !*** ./src/OpenProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideTaskForm: () => (/* binding */ hideTaskForm),
/* harmony export */   openProject: () => (/* binding */ openProject),
/* harmony export */   showTaskForm: () => (/* binding */ showTaskForm)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


function openProject(){
    const prj = this.parentNode.parentNode;
    const title = prj.getAttribute("myid");
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.openProjectDOM)(title);
}


function showTaskForm(){
    const taskForm = document.querySelector(".task-form-container");
    taskForm.style.display = "inline-block";
}

function hideTaskForm(){
    const taskForm = document.querySelector(".task-form-container");
    taskForm.style.display = "none";
}



/***/ }),

/***/ "./src/localStorageManagement.js":
/*!***************************************!*\
  !*** ./src/localStorageManagement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeProjectFromLocalStorage: () => (/* binding */ removeProjectFromLocalStorage),
/* harmony export */   removeTaskFromProject: () => (/* binding */ removeTaskFromProject),
/* harmony export */   saveProjectToLocalStorage: () => (/* binding */ saveProjectToLocalStorage),
/* harmony export */   saveTaskToProject: () => (/* binding */ saveTaskToProject)
/* harmony export */ });
function saveProjectToLocalStorage(title, ProjectsStorageArray){
    let projectList = JSON.parse(localStorage.getItem(ProjectsStorageArray));
    projectList.push(title);
    localStorage.setItem(ProjectsStorageArray, JSON.stringify(projectList));
}

function removeProjectFromLocalStorage(title, ProjectsStorageArray){
    let projectList = JSON.parse(localStorage.getItem(ProjectsStorageArray));
    let newProjectList = [];
    projectList.forEach(project => {
        if (title !== project){
            newProjectList.push(project);
        }
    })
    localStorage.setItem(ProjectsStorageArray, JSON.stringify(newProjectList));
}

function saveTaskToProject(taskObject, projectName){
    let taskList = JSON.parse(localStorage.getItem(projectName));
    taskList.push(taskObject);
    localStorage.setItem(projectName, JSON.stringify(taskList));
}

function removeTaskFromProject(taskTitle, projectName){
    let taskList = JSON.parse(localStorage.getItem(projectName));
    let newTaskList = [];

    for (let i=0;i<taskList.length;i++){
        if (taskTitle !== JSON.parse(taskList[i])["title"]){
            newTaskList.push(taskList[i]);
        }
    }
    localStorage.setItem(projectName, JSON.stringify(newTaskList));
}



/***/ }),

/***/ "./src/projectCreateAndRemove.js":
/*!***************************************!*\
  !*** ./src/projectCreateAndRemove.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   removeProject: () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _localStorageManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageManagement */ "./src/localStorageManagement.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



// name of the localStorage's key
const ProjectsStorageArray = "ProjectsStorageArray";


function createProject(){
    let title = prompt("Project Title: ");
    if (!title){
        alert("Please provide a title");
    }
    else{
        (0,_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage)(title, ProjectsStorageArray);
        createProjectTaskArray(title);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectsPage)();
    }
}

function removeProject(){
    const prj = this.parentNode.parentNode;
    const title = prj.getAttribute("myid");
    
    (0,_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__.removeProjectFromLocalStorage)(title, ProjectsStorageArray);
    removeProjectTaskArray(title);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectsPage)();
}

function createDefaultProject(defaultProjectName){
    (0,_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage)(defaultProjectName, ProjectsStorageArray);
    createProjectTaskArray(defaultProjectName);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.renderProjectsPage)();
}


function createProjectTaskArray(title){
    localStorage.setItem(title, JSON.stringify([]));
}

function removeProjectTaskArray(title){
    localStorage.removeItem(title);
}




/***/ }),

/***/ "./src/taskCreateAndRemove.js":
/*!************************************!*\
  !*** ./src/taskCreateAndRemove.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   removeTask: () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _localStorageManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageManagement */ "./src/localStorageManagement.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



function createTask(){
    const taskTitle = document.querySelector("#title");
    const taskDescription = document.querySelector("#description");
    const projectName = document.querySelector(".project-tasks-page-header").textContent;
    
    const taskObject = {};
    taskObject["title"] = taskTitle.value;
    taskObject["description"] = taskDescription.value;

    if (taskTitle.value !== "" && taskDescription.value !== ""){
        (0,_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__.saveTaskToProject)(JSON.stringify(taskObject), projectName);
    
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.openProjectDOM)(projectName);    // also, form automatically hides, as page re-renders from localStorage
    }
    else{
        // clear form fields
        taskTitle.value = "";
        taskDescription.value = "";
        alert("Please fill both fields!");
    }
}

function removeTask(){
    const taskDiv = this.parentNode.parentNode;
    const taskTitle = taskDiv.querySelector("p:first-of-type").textContent;
    
    const projectName = document.querySelector(".project-tasks-page-header").textContent;
    (0,_localStorageManagement__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromProject)(taskTitle, projectName);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.openProjectDOM)(projectName);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.css */ "./src/index.css");
/* harmony import */ var _projectCreateAndRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreateAndRemove */ "./src/projectCreateAndRemove.js");




// creating a localStorage key named "ProjectsStorageArray" for storing names of all projects
const ProjectsStorageArray = "ProjectsStorageArray";

// creating empty local storage for project
localStorage.setItem(ProjectsStorageArray, JSON.stringify([]));

// creating and adding a default project "My Project" as first value to key
(0,_projectCreateAndRemove__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)("My Project");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGlzdC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9PcGVuUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlTWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENyZWF0ZUFuZFJlbW92ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0NyZWF0ZUFuZFJlbW92ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3R7XG4gICAgLS1wcm9qZWN0LWNvbnRhaW5lci1oZWlnaHQ6IDIwcmVtO1xuICAgIC0tcHJvamVjdC1jcm9zcy1idG4tY29udGFpbmVyLWhlaWdodDogMi43cmVtO1xufVxuXG4jaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbiNwcm9qZWN0c3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xuICAgIGdyaWQtYXV0by1yb3dzOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1oZWlnaHQpO1xuICAgIHJvdy1nYXA6IDJ2dztcbiAgICBjb2x1bW4tZ2FwOiAydnc7XG59XG5cbi5wcm9qZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbn1cblxuXG4ucHJvamVjdC1jcm9zcy1idG4tY29udGFpbmVyLCAudGFzay1jcm9zcy1idG4tY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1jcm9zcy1idG4tY29udGFpbmVyLWhlaWdodCk7XG59XG5cbi5wcm9qZWN0LWNyb3NzLWJ0biwgLnRhc2stY3Jvc3MtYnRue1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG59XG5cbi50YXNrLWNyb3NzLWJ0bntcbiAgICBtYXJnaW4tcmlnaHQ6IDByZW07XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbn1cblxuLnByb2plY3QtY3Jvc3MtYnRuOmhvdmVyLCAudGFzay1jcm9zcy1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzMsIDczKTtcbn1cblxuLnByb2plY3QtaW5zaWRlLWJ0bi1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXByb2plY3QtY29udGFpbmVyLWhlaWdodCkgLSB2YXIoLS1wcm9qZWN0LWNyb3NzLWJ0bi1jb250YWluZXItaGVpZ2h0KSk7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnByb2plY3QtaW5zaWRlLWJ0bntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvamVjdC1pbnNpZGUtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjIyLCAxODEpO1xufVxuXG5cblxuLnByb2plY3QtaW5zaWRlLWJ0bjphY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyMTYsIDE2OSk7XG59XG5cblxuXG5cblxuI3Byb2plY3QtYWRkLXJvdW5kLWJ0bntcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICByaWdodDogMXJlbTtcbiAgICBib3R0b206IDFyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE2MiwgMjkpO1xuICAgIGJvcmRlcjogc29saWQgMC4yZW07XG59XG5cbiNwcm9qZWN0LWFkZC1yb3VuZC1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzNywgMCk7XG59XG5cbiNwcm9qZWN0LWFkZC1yb3VuZC1idG46YWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDksIDApO1xufVxuXG5cbi5wcm9qZWN0LXRhc2tzLXBhZ2UtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJhY2stYnRue1xuICAgIGhlaWdodDogMi4xcmVtO1xuICAgIHdpZHRoOiAyLjFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzMCwgODcpO1xufVxuXG4uYmFjay1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQzLCAxNzUpO1xufVxuXG5cblxuXG4jcHJvamVjdC1hZGQtdGFzay1idG57XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxNjIsIDI5KTtcbiAgICBib3JkZXI6IHNvbGlkIDAuMmVtO1xufVxuXG4jcHJvamVjdC1hZGQtdGFzay1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzNywgMCk7XG59XG5cbiNwcm9qZWN0LWFkZC10YXNrLWJ0bjphY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwOSwgMCk7XG59XG5cblxuXG5cbi50YXNrLWZvcm0tY29udGFpbmVye1xuICAgIC0td2lkdGhoOiAxNXJlbTtcbiAgICAtLWhlaWdodHQ6IDEycmVtO1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjUqdmFyKC0taGVpZ2h0dCkpO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMC41KnZhcigtLXdpZHRoaCkpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyMTYsIDE2OSk7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB3aWR0aDogdmFyKC0td2lkdGhoKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodHQpO1xufVxuXG4uc3VibWl0LWJ1dHRvbntcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI5LCAxNjIsIDI5KTtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwgMTM3LCAwKTtcbn1cblxuLnN1Ym1pdC1idXR0b246YWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDEwOSwgMCk7XG59XG5cblxuXG5cbi50YXNrcy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgICByb3ctZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi50YXNre1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjE2LCAxNjkpO1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgcGFkZGluZzogMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsK0NBQStDO0lBQy9DLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5RkFBeUY7SUFDekYsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7OztBQUlBO0lBQ0ksbUNBQW1DO0FBQ3ZDOzs7Ozs7QUFNQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7Ozs7O0FBS0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOzs7OztBQUtBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWhlaWdodDogMjByZW07XFxuICAgIC0tcHJvamVjdC1jcm9zcy1idG4tY29udGFpbmVyLWhlaWdodDogMi43cmVtO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNwcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1oZWlnaHQpO1xcbiAgICByb3ctZ2FwOiAydnc7XFxuICAgIGNvbHVtbi1nYXA6IDJ2dztcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jcm9zcy1idG4tY29udGFpbmVyLCAudGFzay1jcm9zcy1idG4tY29udGFpbmVye1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWNyb3NzLWJ0bi1jb250YWluZXItaGVpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtY3Jvc3MtYnRuLCAudGFzay1jcm9zcy1idG57XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbi50YXNrLWNyb3NzLWJ0bntcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jcm9zcy1idG46aG92ZXIsIC50YXNrLWNyb3NzLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzMsIDczKTtcXG59XFxuXFxuLnByb2plY3QtaW5zaWRlLWJ0bi1jb250YWluZXJ7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1oZWlnaHQpIC0gdmFyKC0tcHJvamVjdC1jcm9zcy1idG4tY29udGFpbmVyLWhlaWdodCkpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pbnNpZGUtYnRue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucHJvamVjdC1pbnNpZGUtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDIyMiwgMTgxKTtcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtaW5zaWRlLWJ0bjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjE2LCAxNjkpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4jcHJvamVjdC1hZGQtcm91bmQtYnRue1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIGJvdHRvbTogMXJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE2MiwgMjkpO1xcbiAgICBib3JkZXI6IHNvbGlkIDAuMmVtO1xcbn1cXG5cXG4jcHJvamVjdC1hZGQtcm91bmQtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTM3LCAwKTtcXG59XFxuXFxuI3Byb2plY3QtYWRkLXJvdW5kLWJ0bjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDksIDApO1xcbn1cXG5cXG5cXG4ucHJvamVjdC10YXNrcy1wYWdlLWhlYWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJhY2stYnRue1xcbiAgICBoZWlnaHQ6IDIuMXJlbTtcXG4gICAgd2lkdGg6IDIuMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjMwLCA4Nyk7XFxufVxcblxcbi5iYWNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQzLCAxNzUpO1xcbn1cXG5cXG5cXG5cXG5cXG4jcHJvamVjdC1hZGQtdGFzay1idG57XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgYm90dG9tOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTYyLCAyOSk7XFxuICAgIGJvcmRlcjogc29saWQgMC4yZW07XFxufVxcblxcbiNwcm9qZWN0LWFkZC10YXNrLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEzNywgMCk7XFxufVxcblxcbiNwcm9qZWN0LWFkZC10YXNrLWJ0bjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDksIDApO1xcbn1cXG5cXG5cXG5cXG5cXG4udGFzay1mb3JtLWNvbnRhaW5lcntcXG4gICAgLS13aWR0aGg6IDE1cmVtO1xcbiAgICAtLWhlaWdodHQ6IDEycmVtO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAwLjUqdmFyKC0taGVpZ2h0dCkpO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDAuNSp2YXIoLS13aWR0aGgpKTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyMTYsIDE2OSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOiB2YXIoLS13aWR0aGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodHQpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbntcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjksIDE2MiwgMjkpO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwgMTM3LCAwKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxMDksIDApO1xcbn1cXG5cXG5cXG5cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi50YXNre1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDIxNiwgMTY5KTtcXG4gICAgYm9yZGVyOiBzb2xpZDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG9wZW5Qcm9qZWN0ICwgc2hvd1Rhc2tGb3JtICwgaGlkZVRhc2tGb3JtIH0gZnJvbSBcIi4vT3BlblByb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0Q3JlYXRlQW5kUmVtb3ZlXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrICwgcmVtb3ZlVGFza30gZnJvbSBcIi4vdGFza0NyZWF0ZUFuZFJlbW92ZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3ROYW1lKXtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdCA9IFwicHJvamVjdFwiO1xuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwibXlpZFwiLCBwcm9qZWN0TmFtZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q3Jvc3NCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDcm9zc0J0bkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcInByb2plY3QtY3Jvc3MtYnRuLWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IHByb2plY3RDcm9zc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdENyb3NzQnRuLmNsYXNzTGlzdCA9IFwicHJvamVjdC1jcm9zcy1idG5cIjtcbiAgICBwcm9qZWN0Q3Jvc3NCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBwcm9qZWN0Q3Jvc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVByb2plY3QpO1xuICAgIHByb2plY3RDcm9zc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q3Jvc3NCdG4pO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdENyb3NzQnRuQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHByb2plY3RJbnNpZGVCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJbnNpZGVCdG5Db250YWluZXIuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LWluc2lkZS1idG4tY29udGFpbmVyXCI7XG4gICAgY29uc3QgcHJvamVjdEluc2lkZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdEluc2lkZUJ0bi5jbGFzc0xpc3QgPSBcInByb2plY3QtaW5zaWRlLWJ0blwiO1xuICAgIHByb2plY3RJbnNpZGVCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0SW5zaWRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdCk7XG4gICAgcHJvamVjdEluc2lkZUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5zaWRlQnRuKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbnNpZGVCdG5Db250YWluZXIpO1xuXG4gICAgLy8gYXBwZW5kIHByb2plY3QgdG8gRE9NXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzUGFnZSgpe1xuICAgIC8vY2xlYXJpbmcgYm9keVxuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbWFpbkJvZHkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIFxuICAgIC8vIGFkZGluZyBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGRyLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhkcik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIC8vIGFkZGluZyBkaXYgZm9yIHByb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNcIik7XG4gICAgbWFpbkJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gICAgLy8gYWRkaW5nIHByb2plY3RzIHRvIGl0IG9uZS1ieS1vbmVcbiAgICAvLyBnZXR0aW5nIGFycmF5IG9mIGFsbCBwcm9qZWN0c1xuICAgIGNvbnN0IGFsbFByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdHNTdG9yYWdlQXJyYXlcIikpO1xuICAgIFxuICAgIC8vIG1ha2luZyBET00gcHJvamVjdHMgb25lIGJ5IG9uZSBmcm9tIGFycmF5XG4gICAgZm9yIChsZXQgaT0wOyBpPGFsbFByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBjcmVhdGVQcm9qZWN0RE9NKGFsbFByb2plY3RzQXJyYXlbaV0pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvLyBwcm9qZWN0IGFkZCBidG4gY29udGFpbmVyIGFuZCBhZGQgYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZEJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtYWRkLWJ0bi1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdEFkZEJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIHByb2plY3RBZGRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWFkZC1yb3VuZC1idG5cIik7XG4gICAgcHJvamVjdEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG4gICAgcHJvamVjdEFkZEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuQ29udGFpbmVyKTtcbn1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tET00odGFza09iail7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG4gICAgXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QgPSBcInRhc2tcIjtcbiAgICBcbiAgICBjb25zdCBjcm9zc0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3Jvc3NCdG5Db250YWluZXIuY2xhc3NMaXN0ID0gXCJ0YXNrLWNyb3NzLWJ0bi1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGNyb3NzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcm9zc0J0bi5jbGFzc0xpc3QgPSBcInRhc2stY3Jvc3MtYnRuXCI7XG4gICAgY3Jvc3NCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBjcm9zc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG5cbiAgICBjcm9zc0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcm9zc0J0bik7XG4gICAgdGFzay5hcHBlbmRDaGlsZChjcm9zc0J0bkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0YXNrT2JqZWN0ID0gSlNPTi5wYXJzZSh0YXNrT2JqKTtcbiAgICBcbiAgICBjb25zdCBwMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMTIudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0W1widGl0bGVcIl07XG4gICAgcDEyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICBwMTIuc3R5bGUuZm9udFdlaWdodCA9IFwiNzAwXCI7XG4gICAgcDEyLnN0eWxlLmZvbnRTaXplID0gXCIxLjRyZW1cIjtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHAxMik7XG4gICAgXG4gICAgXG4gICAgY29uc3QgcDIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIyLnRleHRDb250ZW50ID0gdGFza09iamVjdFtcImRlc2NyaXB0aW9uXCJdO1xuICAgIHAyMi5zdHlsZS5mb250U2l6ZSA9IFwiMS4ycmVtXCI7XG4gICAgdGFzay5hcHBlbmRDaGlsZChwMjIpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcbn1cblxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdERPTShwcm9qZWN0TmFtZSl7XG4gICAgXG4gICAgLy8gY2xlYXIgYm9keVxuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgbWFpbkJvZHkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVEFTSyBGT1JNIChoaWRkZW4pXG4gICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwidGFzay1mb3JtLWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0ID0gXCJ0YXNrLWZvcm1cIjtcbiAgICBcbiAgICAvLyB0aXRsZVxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgICBsYWJlbFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgICBjb25zdCBicmVha0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBjb25zdCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgbGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFiZWxEZXNjcmlwdGlvbik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgIC8vIGJ1dHRvbiAoc3VibWl0KVxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdCA9IFwic3VibWl0LWJ1dHRvblwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgLy8gYnV0dG9uIChjYW5jZWwpXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0ID0gXCJzdWJtaXQtYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrRm9ybSk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrRm9ybUNvbnRhaW5lcik7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBcbiAgICBcbiAgICBcbiAgICAvLyBjcmVhdGUgaGVhZGVyRGl2XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LXRhc2tzLXBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJhY2tCdG4uY2xhc3NMaXN0ID0gXCJiYWNrLWJ0blwiO1xuICAgIGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIjwtLVwiO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclByb2plY3RzUGFnZSk7XG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0ID0gXCJwcm9qZWN0LXRhc2tzLXBhZ2UtaGVhZGVyXCI7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgICBoZWFkZXJEaXYuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZFwiO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cblxuICAgIC8vIHRhc2tzIGNvbnRhaW5lclxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QgPSBcInRhc2tzLWNvbnRhaW5lclwiO1xuICAgIG1haW5Cb2R5LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcblxuXG4gICAgLy8gdGFza3MgKGFwcGVuZCBmcm9tIGFycmF5IG9mIHRhc2tzIG9mIHRoYXQgcHJvamVjdCwgbGFvZCBmcm9tIGxvY2FsU3RvcmFnZSlcbiAgICBcbiAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICBcbiAgICAvLyBtYWtpbmcgRE9NIHRhc2tzIG9uZSBieSBvbmUgZnJvbSBhcnJheVxuICAgIGZvciAobGV0IGk9MDsgaTx0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNyZWF0ZVRhc2tET00odGFza0xpc3RbaV0pO1xuICAgIH1cblxuXG4gICAgXG4gICAgLy8gdGFzay1hZGQtYnV0dG9uXG4gICAgY29uc3QgdGFza0FkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGFza0FkZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtYWRkLXRhc2stYnRuXCIpO1xuICAgIHRhc2tBZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgdGFza0FkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Rhc2tGb3JtKTtcbiAgICBtYWluQm9keS5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuKTtcbn1cblxuXG5leHBvcnQge2NyZWF0ZVByb2plY3RET00sIHJlbmRlclByb2plY3RzUGFnZSwgb3BlblByb2plY3RET019OyIsImltcG9ydCB7IG9wZW5Qcm9qZWN0RE9NIH0gZnJvbSBcIi4vRE9NXCI7XG5cbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0KCl7XG4gICAgY29uc3QgcHJqID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGl0bGUgPSBwcmouZ2V0QXR0cmlidXRlKFwibXlpZFwiKTtcbiAgICBvcGVuUHJvamVjdERPTSh0aXRsZSk7XG59XG5cblxuZnVuY3Rpb24gc2hvd1Rhc2tGb3JtKCl7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS1jb250YWluZXJcIik7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGhpZGVUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHtvcGVuUHJvamVjdCAsIHNob3dUYXNrRm9ybSAsaGlkZVRhc2tGb3JtfTsiLCJmdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHRpdGxlLCBQcm9qZWN0c1N0b3JhZ2VBcnJheSl7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShQcm9qZWN0c1N0b3JhZ2VBcnJheSkpO1xuICAgIHByb2plY3RMaXN0LnB1c2godGl0bGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFByb2plY3RzU3RvcmFnZUFycmF5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSh0aXRsZSwgUHJvamVjdHNTdG9yYWdlQXJyYXkpe1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oUHJvamVjdHNTdG9yYWdlQXJyYXkpKTtcbiAgICBsZXQgbmV3UHJvamVjdExpc3QgPSBbXTtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAodGl0bGUgIT09IHByb2plY3Qpe1xuICAgICAgICAgICAgbmV3UHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUHJvamVjdHNTdG9yYWdlQXJyYXksIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3RMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUYXNrVG9Qcm9qZWN0KHRhc2tPYmplY3QsIHByb2plY3ROYW1lKXtcbiAgICBsZXQgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrT2JqZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHRhc2tUaXRsZSwgcHJvamVjdE5hbWUpe1xuICAgIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICBsZXQgbmV3VGFza0xpc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGk9MDtpPHRhc2tMaXN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBpZiAodGFza1RpdGxlICE9PSBKU09OLnBhcnNlKHRhc2tMaXN0W2ldKVtcInRpdGxlXCJdKXtcbiAgICAgICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGFza0xpc3RbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShuZXdUYXNrTGlzdCkpO1xufVxuXG5leHBvcnQge3NhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UsIHJlbW92ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlLCBzYXZlVGFza1RvUHJvamVjdCwgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0fTsiLCJpbXBvcnQgeyBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlICwgcmVtb3ZlUHJvamVjdEZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gXCIuL2xvY2FsU3RvcmFnZU1hbmFnZW1lbnRcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzUGFnZSB9IGZyb20gXCIuL0RPTVwiO1xuXG4vLyBuYW1lIG9mIHRoZSBsb2NhbFN0b3JhZ2UncyBrZXlcbmNvbnN0IFByb2plY3RzU3RvcmFnZUFycmF5ID0gXCJQcm9qZWN0c1N0b3JhZ2VBcnJheVwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKXtcbiAgICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJQcm9qZWN0IFRpdGxlOiBcIik7XG4gICAgaWYgKCF0aXRsZSl7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYSB0aXRsZVwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSh0aXRsZSwgUHJvamVjdHNTdG9yYWdlQXJyYXkpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0VGFza0FycmF5KHRpdGxlKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHNQYWdlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJqID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGl0bGUgPSBwcmouZ2V0QXR0cmlidXRlKFwibXlpZFwiKTtcbiAgICBcbiAgICByZW1vdmVQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSh0aXRsZSwgUHJvamVjdHNTdG9yYWdlQXJyYXkpO1xuICAgIHJlbW92ZVByb2plY3RUYXNrQXJyYXkodGl0bGUpO1xuICAgIHJlbmRlclByb2plY3RzUGFnZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdChkZWZhdWx0UHJvamVjdE5hbWUpe1xuICAgIHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UoZGVmYXVsdFByb2plY3ROYW1lLCBQcm9qZWN0c1N0b3JhZ2VBcnJheSk7XG4gICAgY3JlYXRlUHJvamVjdFRhc2tBcnJheShkZWZhdWx0UHJvamVjdE5hbWUpO1xuICAgIHJlbmRlclByb2plY3RzUGFnZSgpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RUYXNrQXJyYXkodGl0bGUpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRpdGxlLCBKU09OLnN0cmluZ2lmeShbXSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0VGFza0FycmF5KHRpdGxlKXtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aXRsZSk7XG59XG5cblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBjcmVhdGVEZWZhdWx0UHJvamVjdH07IiwiaW1wb3J0IHsgc2F2ZVRhc2tUb1Byb2plY3QgLCByZW1vdmVUYXNrRnJvbVByb2plY3R9IGZyb20gXCIuL2xvY2FsU3RvcmFnZU1hbmFnZW1lbnRcIjtcbmltcG9ydCB7IG9wZW5Qcm9qZWN0RE9NIH0gZnJvbSBcIi4vRE9NXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKXtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGFza3MtcGFnZS1oZWFkZXJcIikudGV4dENvbnRlbnQ7XG4gICAgXG4gICAgY29uc3QgdGFza09iamVjdCA9IHt9O1xuICAgIHRhc2tPYmplY3RbXCJ0aXRsZVwiXSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICB0YXNrT2JqZWN0W1wiZGVzY3JpcHRpb25cIl0gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG5cbiAgICBpZiAodGFza1RpdGxlLnZhbHVlICE9PSBcIlwiICYmIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSAhPT0gXCJcIil7XG4gICAgICAgIHNhdmVUYXNrVG9Qcm9qZWN0KEpTT04uc3RyaW5naWZ5KHRhc2tPYmplY3QpLCBwcm9qZWN0TmFtZSk7XG4gICAgXG4gICAgICAgIG9wZW5Qcm9qZWN0RE9NKHByb2plY3ROYW1lKTsgICAgLy8gYWxzbywgZm9ybSBhdXRvbWF0aWNhbGx5IGhpZGVzLCBhcyBwYWdlIHJlLXJlbmRlcnMgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgLy8gY2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBib3RoIGZpZWxkcyFcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKCl7XG4gICAgY29uc3QgdGFza0RpdiA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcihcInA6Zmlyc3Qtb2YtdHlwZVwiKS50ZXh0Q29udGVudDtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10YXNrcy1wYWdlLWhlYWRlclwiKS50ZXh0Q29udGVudDtcbiAgICByZW1vdmVUYXNrRnJvbVByb2plY3QodGFza1RpdGxlLCBwcm9qZWN0TmFtZSk7XG4gICAgb3BlblByb2plY3RET00ocHJvamVjdE5hbWUpO1xufVxuXG5leHBvcnQge2NyZWF0ZVRhc2ssIHJlbW92ZVRhc2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3JjL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVEZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdENyZWF0ZUFuZFJlbW92ZSc7XG5cblxuLy8gY3JlYXRpbmcgYSBsb2NhbFN0b3JhZ2Uga2V5IG5hbWVkIFwiUHJvamVjdHNTdG9yYWdlQXJyYXlcIiBmb3Igc3RvcmluZyBuYW1lcyBvZiBhbGwgcHJvamVjdHNcbmNvbnN0IFByb2plY3RzU3RvcmFnZUFycmF5ID0gXCJQcm9qZWN0c1N0b3JhZ2VBcnJheVwiO1xuXG4vLyBjcmVhdGluZyBlbXB0eSBsb2NhbCBzdG9yYWdlIGZvciBwcm9qZWN0XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQcm9qZWN0c1N0b3JhZ2VBcnJheSwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuLy8gY3JlYXRpbmcgYW5kIGFkZGluZyBhIGRlZmF1bHQgcHJvamVjdCBcIk15IFByb2plY3RcIiBhcyBmaXJzdCB2YWx1ZSB0byBrZXlcbmNyZWF0ZURlZmF1bHRQcm9qZWN0KFwiTXkgUHJvamVjdFwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==