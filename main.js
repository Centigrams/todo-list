/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --side-panel-color: #eee;\n    --side-panel-right-border: rgb(185, 185, 185);\n    --side-panel-text-color: black;\n    --main-panel-color: #f7f7f7;\n    --side-panel-size: 17rem;\n    --roboto-font: 'Roboto', sans-serif;\n}\n\n#app {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas: 'header' 'main';\n}\n\n#app header {\n    grid-area: header;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    height: 2.5rem;\n    background-color: wheat;\n}\n\n#app header h1 {\n    margin-left: 1rem;\n    font-family: 'Roboto', sans-serif;\n}\n\n#app main {\n    grid-area: main;\n    display: grid;\n    grid-template-columns: var(--side-panel-size) auto;\n    grid-template-rows: 1fr;\n    grid-template-areas: 'side-panel' 'main-panel';\n}\n\n#side-panel {\n    grid-area: side-panel;\n    background: var(--side-panel-color);\n    padding: 1.25rem 0 0.625rem 0.625rem;\n    border-right: 0.1rem solid var(--side-panel-right-border);\n    width: var(--side-panel-size);\n    overflow: hidden;\n}\n\n#side-panel .project {\n    list-style: none;\n    padding: 0.938rem 0 0.938rem 0.938rem;\n    color: black;\n    margin-bottom: 0.625rem;\n    position: relative;\n    border-top-left-radius: 1.25rem;\n    border-bottom-left-radius: 1.25rem;\n    font-family: var(--roboto-font);\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n#side-panel .delete-button-container {\n    display: inline-flex;\n    margin-right: 1rem;\n}\n\n.project-delete-button {\n    height: 1.2rem;\n    width: 1.2rem;\n    display: flex;\n    align-self: center;\n}\n\n.project-delete-button:hover {\n    cursor: pointer;\n}\n\n#side-panel .active-project {\n    border: 0.1rem solid gray;\n    width: 101%;\n}\n\n.new-project {\n    padding: 0.938rem 0 0.938rem 0.938rem;\n    color: black;\n    margin-bottom: 0.625rem;\n    cursor: pointer;\n    position: relative;\n    border-top-left-radius: 1.25rem;\n    border-bottom-left-radius: 1.25rem;\n    font-family: var(--roboto-font);\n    font-size: 1.2rem;\n    background: transparent;\n    border: none;\n}\n\n.new-project:focus {\n    outline: none;\n}\n\n\n.new-project:hover {\n    transition: 0s;\n    background: rgb(221, 221, 221);\n}\n\n.project:hover {\n    transition: 0s;\n    background: rgb(221, 221, 221);\n}\n\n#side-panel #side-panel-hr {\n    width: 15rem;\n    opacity: 0.5;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    margin-left: 0.5rem;\n}\n\nmain #main-panel {\n    background-color: var(--main-panel-color);\n    display: grid;\n    grid-template-rows: 4rem auto;\n    grid-template-areas: 'project-header' 'todo-list-container';\n}\n\n#project-header {\n    display: grid;\n    grid-area: project-header;\n    font-family: 'Roboto', sans-serif;\n    background-color: var(--main-panel-color);\n}\n\n#project-header #project-title-container {\n    display: grid;\n    align-items: center;\n}\n\n#project-title-container #project-title {\n    margin-left: 1rem;\n    font-size: 2.5rem;\n}\n\n#main-container {\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    grid-template-columns: auto 20rem;\n}\n\n#todo-information-container {\n    background-color: cadetblue;\n}\n\n#todo-list-container {\n    background-color: var(--main-panel-color);\n}\n\n#todo-list {\n    width: 80rem;\n    margin: 2.5rem auto;\n    overflow-y: scroll;\n    height: 45rem;\n}\n\n#todo-list::-webkit-scrollbar {\n    display: none;\n}\n\n.todo {\n    margin: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 0.1rem solid blue;\n    border-bottom: 0.1rem solid blue;\n    background-color: var(--main-panel-color);\n    height: 2.5rem;\n}\n\n.todo .left-container {\n    display: flex;\n    width: 100%;\n}\n\n.todo .checkbox {\n    margin-right: 1rem;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n}\n\n.todo .task {\n    font-size: 1.1rem;\n    display: flex;\n    align-items: center;\n}\n\n.todo .right-container {\n    display: flex;\n    width: 20rem;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-important-star {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.right-container .edit-delete-container {\n    display: flex;\n    justify-content: space-evenly;\n    width: 10.5rem;\n}\n\n.edit-delete-container .task-edit {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem; \n}\n\n.edit-delete-container .task-delete {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.add-todo {\n    margin: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: none;\n    width: 98.75%;\n    /* border-top: 0.1rem solid blue; */\n    /* border-bottom: 0.1rem solid blue; */\n    background-color: var(--main-panel-color);\n    height: 2.5rem;\n    font-size: inherit;\n}\n\n.add-todo:focus {\n    outline: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --side-panel-color: #eee;\n    --side-panel-right-border: rgb(185, 185, 185);\n    --side-panel-text-color: black;\n    --main-panel-color: #f7f7f7;\n    --side-panel-size: 17rem;\n    --roboto-font: 'Roboto', sans-serif;\n}\n\n#app {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas: 'header' 'main';\n}\n\n#app header {\n    grid-area: header;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    height: 2.5rem;\n    background-color: wheat;\n}\n\n#app header h1 {\n    margin-left: 1rem;\n    font-family: 'Roboto', sans-serif;\n}\n\n#app main {\n    grid-area: main;\n    display: grid;\n    grid-template-columns: var(--side-panel-size) auto;\n    grid-template-rows: 1fr;\n    grid-template-areas: 'side-panel' 'main-panel';\n}\n\n#side-panel {\n    grid-area: side-panel;\n    background: var(--side-panel-color);\n    padding: 1.25rem 0 0.625rem 0.625rem;\n    border-right: 0.1rem solid var(--side-panel-right-border);\n    width: var(--side-panel-size);\n    overflow: hidden;\n}\n\n#side-panel .project {\n    list-style: none;\n    padding: 0.938rem 0 0.938rem 0.938rem;\n    color: black;\n    margin-bottom: 0.625rem;\n    position: relative;\n    border-top-left-radius: 1.25rem;\n    border-bottom-left-radius: 1.25rem;\n    font-family: var(--roboto-font);\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: space-between;\n}\n\n#side-panel .delete-button-container {\n    display: inline-flex;\n    margin-right: 1rem;\n}\n\n.project-delete-button {\n    height: 1.2rem;\n    width: 1.2rem;\n    display: flex;\n    align-self: center;\n}\n\n.project-delete-button:hover {\n    cursor: pointer;\n}\n\n#side-panel .active-project {\n    border: 0.1rem solid gray;\n    width: 101%;\n}\n\n.new-project {\n    padding: 0.938rem 0 0.938rem 0.938rem;\n    color: black;\n    margin-bottom: 0.625rem;\n    cursor: pointer;\n    position: relative;\n    border-top-left-radius: 1.25rem;\n    border-bottom-left-radius: 1.25rem;\n    font-family: var(--roboto-font);\n    font-size: 1.2rem;\n    background: transparent;\n    border: none;\n}\n\n.new-project:focus {\n    outline: none;\n}\n\n\n.new-project:hover {\n    transition: 0s;\n    background: rgb(221, 221, 221);\n}\n\n.project:hover {\n    transition: 0s;\n    background: rgb(221, 221, 221);\n}\n\n#side-panel #side-panel-hr {\n    width: 15rem;\n    opacity: 0.5;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    margin-left: 0.5rem;\n}\n\nmain #main-panel {\n    background-color: var(--main-panel-color);\n    display: grid;\n    grid-template-rows: 4rem auto;\n    grid-template-areas: 'project-header' 'todo-list-container';\n}\n\n#project-header {\n    display: grid;\n    grid-area: project-header;\n    font-family: 'Roboto', sans-serif;\n    background-color: var(--main-panel-color);\n}\n\n#project-header #project-title-container {\n    display: grid;\n    align-items: center;\n}\n\n#project-title-container #project-title {\n    margin-left: 1rem;\n    font-size: 2.5rem;\n}\n\n#main-container {\n    font-family: 'Roboto', sans-serif;\n    display: grid;\n    grid-template-columns: auto 20rem;\n}\n\n#todo-information-container {\n    background-color: cadetblue;\n}\n\n#todo-list-container {\n    background-color: var(--main-panel-color);\n}\n\n#todo-list {\n    width: 80rem;\n    margin: 2.5rem auto;\n    overflow-y: scroll;\n    height: 45rem;\n}\n\n#todo-list::-webkit-scrollbar {\n    display: none;\n}\n\n.todo {\n    margin: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 0.1rem solid blue;\n    border-bottom: 0.1rem solid blue;\n    background-color: var(--main-panel-color);\n    height: 2.5rem;\n}\n\n.todo .left-container {\n    display: flex;\n    width: 100%;\n}\n\n.todo .checkbox {\n    margin-right: 1rem;\n    align-self: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n}\n\n.todo .task {\n    font-size: 1.1rem;\n    display: flex;\n    align-items: center;\n}\n\n.todo .right-container {\n    display: flex;\n    width: 20rem;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-important-star {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.right-container .edit-delete-container {\n    display: flex;\n    justify-content: space-evenly;\n    width: 10.5rem;\n}\n\n.edit-delete-container .task-edit {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem; \n}\n\n.edit-delete-container .task-delete {\n    cursor: pointer;\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.add-todo {\n    margin: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: none;\n    width: 98.75%;\n    /* border-top: 0.1rem solid blue; */\n    /* border-bottom: 0.1rem solid blue; */\n    background-color: var(--main-panel-color);\n    height: 2.5rem;\n    font-size: inherit;\n}\n\n.add-todo:focus {\n    outline: none;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/scripts/modules/edit-mode.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/edit-mode.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectEditMode": () => (/* binding */ projectEditMode),
/* harmony export */   "todoEditMode": () => (/* binding */ todoEditMode)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/scripts/modules/projects.js");


const projectEditMode = (function () {
  // Avoids returning to "All" if the project isn't deleted
  const checkIfSelectedProjectIsDeleted = (project) => {
    if (project.parentNode.parentNode.classList.contains('active-project')) {
      _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.setAllProjectAsDefault();
    }
  };

  const deleteProject = (project) => {
    const projectContainer = document.querySelector('[data-projects]')
    // Convert the children of the projectContainer into an array using the spread [...] operator then get the index of the selected list
    const index = [...projectContainer.children].indexOf(project.parentNode.parentNode);
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.projectsArray.splice(index, 1);
    checkIfSelectedProjectIsDeleted(project);
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
  };

  return {
    deleteProject,
  }
}());

const todoEditMode = (function() {
  const deleteTodo = (todo) => {
    const todoContainer = document.querySelector('[data-todos]');
    const todoDeleted = todo.parentNode.parentNode.parentNode;
    const index = [...todoContainer.children].indexOf(todoDeleted);
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoDeleted.id) {
          project.tasks.splice(index, 1);
          _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
        }
      });
    })
  };

  const toggleImportantStatus = (todo) => {
    const todoMarkedAsImportant = todo.parentNode.parentNode.parentNode;
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoMarkedAsImportant.id) {
          if (todo.important) {
            todo.important = false;
            _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
          } else {
            todo.important = true;
            _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
          }
        }
      });
    });
  };

  const toggleTodoCheckbox = (todo) => {
    const todoCompleted = todo.parentNode.parentNode;
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.id === todoCompleted.id) {
          if (todo.completed) {
            todo.completed = false;
            _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
          } else {
            todo.completed = true;
            _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
          }
        }
      });
    });
  };

  return {
    deleteTodo,
    toggleImportantStatus,
    toggleTodoCheckbox
  }
}());




/***/ }),

/***/ "./src/scripts/modules/event-listeners.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/event-listeners.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventListeners": () => (/* binding */ eventListeners)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/modules/projects.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/scripts/modules/todos.js");
/* harmony import */ var _edit_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-mode.js */ "./src/scripts/modules/edit-mode.js");




const eventListeners = (function () {
  const initiateEventListeners = () => {
    const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
    newProjectInputForm.addEventListener('submit', e => {
      e.preventDefault();
      _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.addNewProject();
    });

    const sidePanel = document.getElementById('side-panel');
    sidePanel.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'li') {
        _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.selectProject(e.target);
        _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
      }
    });

    const projectsContainer = document.querySelector('[data-projects]');
    projectsContainer.addEventListener('click', e => {
      const deleteButton = e.target.dataset.project;
      const listElement = e.target.parentNode.parentNode.id
      if (deleteButton === listElement) {
        _edit_mode_js__WEBPACK_IMPORTED_MODULE_2__.projectEditMode.deleteProject(e.target);
      }
    });

    const newTodoInputForm = document.querySelector('[data-new-todo-input-form]');
    newTodoInputForm.addEventListener('submit', e => {
      e.preventDefault();
      _todos_js__WEBPACK_IMPORTED_MODULE_1__.todosHandler.addNewTodo();
    });

    const todosContainer = document.querySelector('[data-todos]');
    todosContainer.addEventListener('click', e => {
      const deleteButton = e.target.dataset.todoDeleteButtonId;
      const todoDiv = e.target.parentNode.parentNode.parentNode.id;
      if (deleteButton === todoDiv) {
        _edit_mode_js__WEBPACK_IMPORTED_MODULE_2__.todoEditMode.deleteTodo(e.target);
      }
    });

    todosContainer.addEventListener('click', e => {
      const importantStar = e.target.dataset.todoImportantId;
      const todoDiv = e.target.parentNode.parentNode.parentNode.id;
      if (importantStar === todoDiv) {
        _edit_mode_js__WEBPACK_IMPORTED_MODULE_2__.todoEditMode.toggleImportantStatus(e.target);
      }
    });

    todosContainer.addEventListener('click', e => {
      const todoCheckbox = e.target.dataset.checkboxId
      const todoDiv = e.target.parentNode.parentNode.id;
      if (todoCheckbox === todoDiv) {
        _edit_mode_js__WEBPACK_IMPORTED_MODULE_2__.todoEditMode.toggleTodoCheckbox(e.target);
      }
    });
  };

  return {
    initiateEventListeners,
  }
}());




/***/ }),

/***/ "./src/scripts/modules/factories/projects-factory.js":
/*!***********************************************************!*\
  !*** ./src/scripts/modules/factories/projects-factory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
function Project(name) {
  return {
    name,
    id: Date.now().toString(),
    tasks: [],
  }
}



/***/ }),

/***/ "./src/scripts/modules/factories/todos-factory.js":
/*!********************************************************!*\
  !*** ./src/scripts/modules/factories/todos-factory.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
function Todo(description) {
  return {
    completed: false,
    description,
    id: Date.now().toString(),
    important: false,
    date: 'No due date',
  }
}




/***/ }),

/***/ "./src/scripts/modules/projects.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsHandler": () => (/* binding */ projectsHandler)
/* harmony export */ });
/* harmony import */ var _factories_projects_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/projects-factory.js */ "./src/scripts/modules/factories/projects-factory.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/scripts/modules/todos.js");
/* harmony import */ var _src_images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/images/delete-button.png */ "./src/images/delete-button.png");




const projectsHandler = (function () {
  const projectsContainer = document.querySelector('[data-projects]');
  const newProjectInputField = document.querySelector('[data-add-new-projects-input]');
  const newProjectInputForm = document.querySelector('[data-add-new-projects-form]');
  // Namespace local storage key to avoid conflicting with other websites.
  const localStorageProjectsArrayKey = 'todo.projects';
  const localStorageSelectedProjectKey = 'todo.selectedProject';
  let projectsArray = JSON.parse(localStorage.getItem(localStorageProjectsArrayKey)) || [];
  let selectedProject = localStorage.getItem(localStorageSelectedProjectKey);

  // Only used to display project name in the project header.
  const displaySelectedProject = () => {
    const projectTitleHeader = document.getElementById('project-title');
    let activeProject = document.querySelector('.active-project');
    projectTitleHeader.textContent = activeProject.textContent;
  };

  /**
  * @param  {string} selectedProject - Refers to event listener's selected list at {@link eventListeners.sidePanel}
  * Highlight the selected project: remove previous active project style then add to current selected project
  */
  const highLightProject = (selectedProjectTarget) => {
    const sidePanelProjectButtons = document.querySelectorAll('.project');
    sidePanelProjectButtons.forEach((projectButton) => projectButton.classList.remove('active-project'));
    selectedProjectTarget.classList.add('active-project');
  };

  // Combine the two functions, initialize both at once in sidePanel's event listener. 
  const selectProject = (selectedProjectTarget) => {
    highLightProject(selectedProjectTarget);
    selectedProject = selectedProjectTarget.id;
    displaySelectedProject();
  };

  const saveSelectedProjectToLocalStorage = () => {
    localStorage.setItem(localStorageSelectedProjectKey, selectedProject);
  };

  const setAllProjectAsDefault = () => {
    const allProject = document.getElementById('all');
    selectProject(allProject);
    saveSelectedProjectToLocalStorage();
  };

  const initalizeSelectedProject = () => {
    /**
     * Higlight the selected project (refer to local storage) 
     * and display the selected project to the project header.
     */
    const allProjectsInSidePanel = document.querySelectorAll('.project');
    allProjectsInSidePanel.forEach((project) => {
      if (project.id === selectedProject) {
        project.classList.add('active-project');
      } else if (selectedProject === null) {
        setAllProjectAsDefault();
      }
    });
    displaySelectedProject();
  };

  // Create project elements in side panel excluding All, Scheduled, and Important
  const renderProjects = () => {
    projectsArray.forEach(project => {
      const listElement = document.createElement('li');
      listElement.setAttribute('id', project.id);
      listElement.classList.add('project');
      listElement.innerText = project.name;

      const deleteButtonContainer = document.createElement('div');
      deleteButtonContainer.classList.add('delete-button-container');

      const deleteButton = new Image();
      deleteButton.classList.add("project-delete-button");
      deleteButton.setAttribute('data-project', project.id);
      deleteButton.src = _src_images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__;

      listElement.appendChild(deleteButtonContainer);
      deleteButtonContainer.appendChild(deleteButton);
      projectsContainer.appendChild(listElement);
    });
  };

  const refreshProjectsList = () => {
    while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    }
  };

  const saveProjectsArrayToLocalStorage = () => {
    localStorage.setItem(localStorageProjectsArrayKey, JSON.stringify(projectsArray));
  };

  const saveToLocalStorageAndRender = () => {
    saveProjectsArrayToLocalStorage();
    saveSelectedProjectToLocalStorage();
  };

  const render = () => {
    refreshProjectsList();
    renderProjects();
    initalizeSelectedProject();
    _todos_js__WEBPACK_IMPORTED_MODULE_1__.todosHandler.render();
  };

  const persistToLocalStorage = () => {
    saveToLocalStorageAndRender();
    render();
  };

  // Function will only be called in event listeners.
  const addNewProject = () => {
    let inputValue = newProjectInputField.value;
    if (inputValue === '' || inputValue === null) return;
    const newProject = (0,_factories_projects_factory_js__WEBPACK_IMPORTED_MODULE_0__.Project)(inputValue);
    newProjectInputForm.reset();
    projectsArray.push(newProject);
    persistToLocalStorage();
  };

  return {
    render,
    addNewProject,
    selectProject,
    persistToLocalStorage,
    projectsArray,
    setAllProjectAsDefault,
  }
}());




/***/ }),

/***/ "./src/scripts/modules/todos.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/todos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todosHandler": () => (/* binding */ todosHandler)
/* harmony export */ });
/* harmony import */ var _factories_todos_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/todos-factory */ "./src/scripts/modules/factories/todos-factory.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/scripts/modules/projects.js");
/* harmony import */ var _src_images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/images/delete-button.png */ "./src/images/delete-button.png");
/* harmony import */ var _src_images_not_important_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/images/not-important.png */ "./src/images/not-important.png");
/* harmony import */ var _src_images_important_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/images/important.png */ "./src/images/important.png");
/* harmony import */ var _src_images_edit_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/images/edit-button.png */ "./src/images/edit-button.png");







const todosHandler = (function () {
  const todosContainer = document.querySelector('[data-todos]');
  const newTodoInputField = document.querySelector('[data-new-todo-input-field]');
  const newTodoInputForm = document.querySelector('[data-new-todo-input-form]');
  const allTodos = document.querySelector('#all');
  const scheduledTodos = document.querySelector('#scheduled');
  const importantTodos = document.querySelector('#important');

  const createTodos = (todoCompleted, todoDescription, todoId, todoImportant, todoDate) => {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    todoDiv.setAttribute('id', todoId);
    todosContainer.appendChild(todoDiv);

    const leftContainerDiv = document.createElement('div')
    leftContainerDiv.classList.add('left-container');
    todoDiv.appendChild(leftContainerDiv);

    const checkBox = document.createElement('input')
    checkBox.classList.add('checkbox');
    checkBox.setAttribute('data-checkbox-id', todoId);
    checkBox.setAttribute('type', 'checkbox');
    if (todoCompleted) {
      checkBox.checked = true;
    } else {
      checkBox.checked = false;
    }
    leftContainerDiv.appendChild(checkBox);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task');
    taskDescription.textContent = todoDescription;
    leftContainerDiv.appendChild(taskDescription);

    const rightContainerDiv = document.createElement('div')
    rightContainerDiv.classList.add('right-container');
    todoDiv.appendChild(rightContainerDiv);
    
    const dueDate = document.createElement('p');
    dueDate.classList.add('task-date');
    dueDate.textContent = todoDate;
    rightContainerDiv.appendChild(dueDate);

    const editDeleteContainerDiv = document.createElement('div');
    editDeleteContainerDiv.classList.add('edit-delete-container')
    rightContainerDiv.appendChild(editDeleteContainerDiv);

    const importantStar = new Image();
    importantStar.classList.add('task-important-star');
    importantStar.setAttribute('data-todo-important', todoImportant);
    importantStar.setAttribute('data-todo-important-id', todoId);
    if (todoImportant === false) {
      importantStar.src = _src_images_not_important_png__WEBPACK_IMPORTED_MODULE_3__; 
    } else {
      importantStar.src = _src_images_important_png__WEBPACK_IMPORTED_MODULE_4__;
    }
    editDeleteContainerDiv.appendChild(importantStar);

    const editButton = new Image();
    editButton.classList.add('task-edit');
    editButton.setAttribute('data-todo-edit-button-id', todoId);
    editButton.src = _src_images_edit_button_png__WEBPACK_IMPORTED_MODULE_5__;
    editDeleteContainerDiv.appendChild(editButton);

    const deleteButton = new Image();
    deleteButton.classList.add('task-delete');
    deleteButton.setAttribute('data-todo-delete-button-id', todoId);
    deleteButton.src = _src_images_delete_button_png__WEBPACK_IMPORTED_MODULE_2__;
    editDeleteContainerDiv.appendChild(deleteButton);
  };

  const renderAllTodos = () => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        createTodos(todo.completed, todo.description, todo.id, todo.important, todo.date);
      });
    });
  };

  const renderScheduledTodos = () => {
    console.log("Scheduled")
  };

  const renderImportantTodos = () => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsHandler.projectsArray.forEach(project => {
      project.tasks.forEach(todo => {
        if (todo.important) {
          createTodos(todo.completed, todo.description, todo.id, todo.important, todo.date);
        }
      });
    });
  };

  const renderTodosInSelectedProject = (selectedProject) => {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsHandler.projectsArray.forEach(project => {
      if (selectedProject.id === project.id) {
        project.tasks.forEach(todo => {
          createTodos(todo.completed, todo.description, todo.id, todo.important, todo.date);
        });
      }
    });
  };

  const renderTodos = () => {
    let activeProject = document.querySelector('.active-project');
    // If All is selected display all todos for each project
    if (allTodos.id === activeProject.id) {
      renderAllTodos();
    } else if (scheduledTodos.id === activeProject.id) {
      renderScheduledTodos();
    } else if (importantTodos.id === activeProject.id) {
      renderImportantTodos();
    } else {
      renderTodosInSelectedProject(activeProject);
    }
  };

  const pushNewTodoInProject = (newTodoInput) => {
    let activeProject = document.querySelector('.active-project');
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsHandler.projectsArray.forEach(project => {
      if (project.id === activeProject.id) {
        project.tasks.push(newTodoInput);
      }
    });
  };

  const addNewTodo = () => {
    let inputValue = newTodoInputField.value;
    if (inputValue === null || inputValue === '') return;
    const newTodo = (0,_factories_todos_factory__WEBPACK_IMPORTED_MODULE_0__.Todo)(inputValue);
    newTodoInputForm.reset();
    pushNewTodoInProject(newTodo);
    render();
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectsHandler.persistToLocalStorage();
  };

  const refreshTodoList = () => {
    while (todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  };

  const render = () => {
    refreshTodoList();
    renderTodos();
  };

  return {
    render,
    addNewTodo,
  }
}());




/***/ }),

/***/ "./src/images/delete-button.png":
/*!**************************************!*\
  !*** ./src/images/delete-button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "844422facd5817519dc2.png";

/***/ }),

/***/ "./src/images/edit-button.png":
/*!************************************!*\
  !*** ./src/images/edit-button.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3e0d329f5794a155589.png";

/***/ }),

/***/ "./src/images/important.png":
/*!**********************************!*\
  !*** ./src/images/important.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "558949b97fe3fc1cc623.png";

/***/ }),

/***/ "./src/images/not-important.png":
/*!**************************************!*\
  !*** ./src/images/not-important.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01dec949425c4bed6dda.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/style.css */ "./src/style.css");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects.js */ "./src/scripts/modules/projects.js");
/* harmony import */ var _modules_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/event-listeners.js */ "./src/scripts/modules/event-listeners.js");




_modules_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsHandler.render();
_modules_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__.eventListeners.initiateEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQSxJQUFJLDRFQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLElBQUksNEVBQXFDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoS3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Z1QjtBQUNpQztBQUNNOztBQUU5RCx3RUFBc0I7QUFDdEIsOEZBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvZWRpdC1tb2RlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvZXZlbnQtbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvZmFjdG9yaWVzL3Byb2plY3RzLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mYWN0b3JpZXMvdG9kb3MtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaWRlLXBhbmVsLWNvbG9yOiAjZWVlO1xcbiAgICAtLXNpZGUtcGFuZWwtcmlnaHQtYm9yZGVyOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxuICAgIC0tc2lkZS1wYW5lbC10ZXh0LWNvbG9yOiBibGFjaztcXG4gICAgLS1tYWluLXBhbmVsLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAtLXNpZGUtcGFuZWwtc2l6ZTogMTdyZW07XFxuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXInICdtYWluJztcXG59XFxuXFxuI2FwcCBoZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcbiNhcHAgaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2FwcCBtYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGUtcGFuZWwtc2l6ZSkgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlLXBhbmVsJyAnbWFpbi1wYW5lbCc7XFxufVxcblxcbiNzaWRlLXBhbmVsIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlLXBhbmVsO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlLXBhbmVsLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMS4yNXJlbSAwIDAuNjI1cmVtIDAuNjI1cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDAuMXJlbSBzb2xpZCB2YXIoLS1zaWRlLXBhbmVsLXJpZ2h0LWJvcmRlcik7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlLXBhbmVsLXNpemUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCAucHJvamVjdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuOTM4cmVtIDAgMC45MzhyZW0gMC45MzhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXJvYm90by1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NpZGUtcGFuZWwgLmRlbGV0ZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlLXBhbmVsIC5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGdyYXk7XFxuICAgIHdpZHRoOiAxMDElO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAwLjkzOHJlbSAwIDAuOTM4cmVtIDAuOTM4cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXJvYm90by1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uZXctcHJvamVjdDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDBzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuXFxuI3NpZGUtcGFuZWwgI3NpZGUtcGFuZWwtaHIge1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxubWFpbiAjbWFpbi1wYW5lbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcGFuZWwtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3Byb2plY3QtaGVhZGVyJyAndG9kby1saXN0LWNvbnRhaW5lcic7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdC1oZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciAjcHJvamVjdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS1jb250YWluZXIgI3Byb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDIwcmVtO1xcbn1cXG5cXG4jdG9kby1pbmZvcm1hdGlvbi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgICB3aWR0aDogODByZW07XFxuICAgIG1hcmdpbjogMi41cmVtIGF1dG87XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA0NXJlbTtcXG59XFxuXFxuI3RvZG8tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCBibHVlO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4udG9kbyAubGVmdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8gLmNoZWNrYm94IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIC50YXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5yaWdodC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LXN0YXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ucmlnaHQtY29udGFpbmVyIC5lZGl0LWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwLjVyZW07XFxufVxcblxcbi5lZGl0LWRlbGV0ZS1jb250YWluZXIgLnRhc2stZWRpdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxcbn1cXG5cXG4uZWRpdC1kZWxldGUtY29udGFpbmVyIC50YXNrLWRlbGV0ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDk4Ljc1JTtcXG4gICAgLyogYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIGJsdWU7ICovXFxuICAgIC8qIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCBibHVlOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC10b2RvOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJz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QUFZO0lBQ1osOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaWRlLXBhbmVsLWNvbG9yOiAjZWVlO1xcbiAgICAtLXNpZGUtcGFuZWwtcmlnaHQtYm9yZGVyOiByZ2IoMTg1LCAxODUsIDE4NSk7XFxuICAgIC0tc2lkZS1wYW5lbC10ZXh0LWNvbG9yOiBibGFjaztcXG4gICAgLS1tYWluLXBhbmVsLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICAtLXNpZGUtcGFuZWwtc2l6ZTogMTdyZW07XFxuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdoZWFkZXInICdtYWluJztcXG59XFxuXFxuI2FwcCBoZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcbiNhcHAgaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2FwcCBtYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGUtcGFuZWwtc2l6ZSkgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlLXBhbmVsJyAnbWFpbi1wYW5lbCc7XFxufVxcblxcbiNzaWRlLXBhbmVsIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlLXBhbmVsO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlLXBhbmVsLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMS4yNXJlbSAwIDAuNjI1cmVtIDAuNjI1cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDAuMXJlbSBzb2xpZCB2YXIoLS1zaWRlLXBhbmVsLXJpZ2h0LWJvcmRlcik7XFxuICAgIHdpZHRoOiB2YXIoLS1zaWRlLXBhbmVsLXNpemUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCAucHJvamVjdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuOTM4cmVtIDAgMC45MzhyZW0gMC45MzhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXJvYm90by1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3NpZGUtcGFuZWwgLmRlbGV0ZS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlLXBhbmVsIC5hY3RpdmUtcHJvamVjdCB7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGdyYXk7XFxuICAgIHdpZHRoOiAxMDElO1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAwLjkzOHJlbSAwIDAuOTM4cmVtIDAuOTM4cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXJvYm90by1mb250KTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5uZXctcHJvamVjdDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDBzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuXFxuI3NpZGUtcGFuZWwgI3NpZGUtcGFuZWwtaHIge1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxubWFpbiAjbWFpbi1wYW5lbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcGFuZWwtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3Byb2plY3QtaGVhZGVyJyAndG9kby1saXN0LWNvbnRhaW5lcic7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogcHJvamVjdC1oZWFkZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciAjcHJvamVjdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS1jb250YWluZXIgI3Byb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDIwcmVtO1xcbn1cXG5cXG4jdG9kby1pbmZvcm1hdGlvbi1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbiN0b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgICB3aWR0aDogODByZW07XFxuICAgIG1hcmdpbjogMi41cmVtIGF1dG87XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA0NXJlbTtcXG59XFxuXFxuI3RvZG8tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCBibHVlO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4udG9kbyAubGVmdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8gLmNoZWNrYm94IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIC50YXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5yaWdodC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50LXN0YXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ucmlnaHQtY29udGFpbmVyIC5lZGl0LWRlbGV0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwLjVyZW07XFxufVxcblxcbi5lZGl0LWRlbGV0ZS1jb250YWluZXIgLnRhc2stZWRpdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07IFxcbn1cXG5cXG4uZWRpdC1kZWxldGUtY29udGFpbmVyIC50YXNrLWRlbGV0ZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDk4Ljc1JTtcXG4gICAgLyogYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIGJsdWU7ICovXFxuICAgIC8qIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCBibHVlOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC10b2RvOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0c0hhbmRsZXIgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBwcm9qZWN0RWRpdE1vZGUgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBBdm9pZHMgcmV0dXJuaW5nIHRvIFwiQWxsXCIgaWYgdGhlIHByb2plY3QgaXNuJ3QgZGVsZXRlZFxuICBjb25zdCBjaGVja0lmU2VsZWN0ZWRQcm9qZWN0SXNEZWxldGVkID0gKHByb2plY3QpID0+IHtcbiAgICBpZiAocHJvamVjdC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XG4gICAgICBwcm9qZWN0c0hhbmRsZXIuc2V0QWxsUHJvamVjdEFzRGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHNdJylcbiAgICAvLyBDb252ZXJ0IHRoZSBjaGlsZHJlbiBvZiB0aGUgcHJvamVjdENvbnRhaW5lciBpbnRvIGFuIGFycmF5IHVzaW5nIHRoZSBzcHJlYWQgWy4uLl0gb3BlcmF0b3IgdGhlbiBnZXQgdGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBsaXN0XG4gICAgY29uc3QgaW5kZXggPSBbLi4ucHJvamVjdENvbnRhaW5lci5jaGlsZHJlbl0uaW5kZXhPZihwcm9qZWN0LnBhcmVudE5vZGUucGFyZW50Tm9kZSk7XG4gICAgcHJvamVjdHNIYW5kbGVyLnByb2plY3RzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBjaGVja0lmU2VsZWN0ZWRQcm9qZWN0SXNEZWxldGVkKHByb2plY3QpO1xuICAgIHByb2plY3RzSGFuZGxlci5wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRlbGV0ZVByb2plY3QsXG4gIH1cbn0oKSk7XG5cbmNvbnN0IHRvZG9FZGl0TW9kZSA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZG9zXScpO1xuICAgIGNvbnN0IHRvZG9EZWxldGVkID0gdG9kby5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBpbmRleCA9IFsuLi50b2RvQ29udGFpbmVyLmNoaWxkcmVuXS5pbmRleE9mKHRvZG9EZWxldGVkKTtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBpZiAodG9kby5pZCA9PT0gdG9kb0RlbGV0ZWQuaWQpIHtcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgcHJvamVjdHNIYW5kbGVyLnBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUltcG9ydGFudFN0YXR1cyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb01hcmtlZEFzSW1wb3J0YW50ID0gdG9kby5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBpZiAodG9kby5pZCA9PT0gdG9kb01hcmtlZEFzSW1wb3J0YW50LmlkKSB7XG4gICAgICAgICAgaWYgKHRvZG8uaW1wb3J0YW50KSB7XG4gICAgICAgICAgICB0b2RvLmltcG9ydGFudCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJvamVjdHNIYW5kbGVyLnBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvLmltcG9ydGFudCA9IHRydWU7XG4gICAgICAgICAgICBwcm9qZWN0c0hhbmRsZXIucGVyc2lzdFRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVUb2RvQ2hlY2tib3ggPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9Db21wbGV0ZWQgPSB0b2RvLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBpZiAodG9kby5pZCA9PT0gdG9kb0NvbXBsZXRlZC5pZCkge1xuICAgICAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHByb2plY3RzSGFuZGxlci5wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcHJvamVjdHNIYW5kbGVyLnBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkZWxldGVUb2RvLFxuICAgIHRvZ2dsZUltcG9ydGFudFN0YXR1cyxcbiAgICB0b2dnbGVUb2RvQ2hlY2tib3hcbiAgfVxufSgpKTtcblxuZXhwb3J0IHsgcHJvamVjdEVkaXRNb2RlLCB0b2RvRWRpdE1vZGUgfTtcbiIsImltcG9ydCB7IHByb2plY3RzSGFuZGxlciB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyB0b2Rvc0hhbmRsZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEVkaXRNb2RlLCB0b2RvRWRpdE1vZGUgfSBmcm9tIFwiLi9lZGl0LW1vZGUuanNcIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbml0aWF0ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtbmV3LXByb2plY3RzLWZvcm1dJyk7XG4gICAgbmV3UHJvamVjdElucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHByb2plY3RzSGFuZGxlci5hZGROZXdQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaWRlUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZS1wYW5lbCcpO1xuICAgIHNpZGVQYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykge1xuICAgICAgICBwcm9qZWN0c0hhbmRsZXIuc2VsZWN0UHJvamVjdChlLnRhcmdldCk7XG4gICAgICAgIHByb2plY3RzSGFuZGxlci5wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHNdJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICBpZiAoZGVsZXRlQnV0dG9uID09PSBsaXN0RWxlbWVudCkge1xuICAgICAgICBwcm9qZWN0RWRpdE1vZGUuZGVsZXRlUHJvamVjdChlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUb2RvSW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRvZG8taW5wdXQtZm9ybV0nKTtcbiAgICBuZXdUb2RvSW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9kb3NIYW5kbGVyLmFkZE5ld1RvZG8oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9kb3NdJyk7XG4gICAgdG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmRhdGFzZXQudG9kb0RlbGV0ZUJ1dHRvbklkO1xuICAgICAgY29uc3QgdG9kb0RpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgICAgaWYgKGRlbGV0ZUJ1dHRvbiA9PT0gdG9kb0Rpdikge1xuICAgICAgICB0b2RvRWRpdE1vZGUuZGVsZXRlVG9kbyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgaW1wb3J0YW50U3RhciA9IGUudGFyZ2V0LmRhdGFzZXQudG9kb0ltcG9ydGFudElkO1xuICAgICAgY29uc3QgdG9kb0RpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgICAgaWYgKGltcG9ydGFudFN0YXIgPT09IHRvZG9EaXYpIHtcbiAgICAgICAgdG9kb0VkaXRNb2RlLnRvZ2dsZUltcG9ydGFudFN0YXR1cyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgdG9kb0NoZWNrYm94ID0gZS50YXJnZXQuZGF0YXNldC5jaGVja2JveElkXG4gICAgICBjb25zdCB0b2RvRGl2ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgICAgaWYgKHRvZG9DaGVja2JveCA9PT0gdG9kb0Rpdikge1xuICAgICAgICB0b2RvRWRpdE1vZGUudG9nZ2xlVG9kb0NoZWNrYm94KGUudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRpYXRlRXZlbnRMaXN0ZW5lcnMsXG4gIH1cbn0oKSk7XG5cbmV4cG9ydCB7IGV2ZW50TGlzdGVuZXJzIH07XG4iLCJmdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgdGFza3M6IFtdLFxuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTsiLCJmdW5jdGlvbiBUb2RvKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIGltcG9ydGFudDogZmFsc2UsXG4gICAgZGF0ZTogJ05vIGR1ZSBkYXRlJyxcbiAgfVxufVxuXG5leHBvcnQgeyBUb2RvIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9mYWN0b3JpZXMvcHJvamVjdHMtZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyB0b2Rvc0hhbmRsZXIgfSBmcm9tICcuL3RvZG9zLmpzJztcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnL3NyYy9pbWFnZXMvZGVsZXRlLWJ1dHRvbi5wbmcnO1xuXG5jb25zdCBwcm9qZWN0c0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzXScpO1xuICBjb25zdCBuZXdQcm9qZWN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1uZXctcHJvamVjdHMtaW5wdXRdJyk7XG4gIGNvbnN0IG5ld1Byb2plY3RJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtbmV3LXByb2plY3RzLWZvcm1dJyk7XG4gIC8vIE5hbWVzcGFjZSBsb2NhbCBzdG9yYWdlIGtleSB0byBhdm9pZCBjb25mbGljdGluZyB3aXRoIG90aGVyIHdlYnNpdGVzLlxuICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0c0FycmF5S2V5ID0gJ3RvZG8ucHJvamVjdHMnO1xuICBjb25zdCBsb2NhbFN0b3JhZ2VTZWxlY3RlZFByb2plY3RLZXkgPSAndG9kby5zZWxlY3RlZFByb2plY3QnO1xuICBsZXQgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlUHJvamVjdHNBcnJheUtleSkpIHx8IFtdO1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0S2V5KTtcblxuICAvLyBPbmx5IHVzZWQgdG8gZGlzcGxheSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3QgaGVhZGVyLlxuICBjb25zdCBkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QnKTtcbiAgICBwcm9qZWN0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAqIEBwYXJhbSAge3N0cmluZ30gc2VsZWN0ZWRQcm9qZWN0IC0gUmVmZXJzIHRvIGV2ZW50IGxpc3RlbmVyJ3Mgc2VsZWN0ZWQgbGlzdCBhdCB7QGxpbmsgZXZlbnRMaXN0ZW5lcnMuc2lkZVBhbmVsfVxuICAqIEhpZ2hsaWdodCB0aGUgc2VsZWN0ZWQgcHJvamVjdDogcmVtb3ZlIHByZXZpb3VzIGFjdGl2ZSBwcm9qZWN0IHN0eWxlIHRoZW4gYWRkIHRvIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxuICAqL1xuICBjb25zdCBoaWdoTGlnaHRQcm9qZWN0ID0gKHNlbGVjdGVkUHJvamVjdFRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHNpZGVQYW5lbFByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBzaWRlUGFuZWxQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChwcm9qZWN0QnV0dG9uKSA9PiBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0JykpO1xuICAgIHNlbGVjdGVkUHJvamVjdFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICB9O1xuXG4gIC8vIENvbWJpbmUgdGhlIHR3byBmdW5jdGlvbnMsIGluaXRpYWxpemUgYm90aCBhdCBvbmNlIGluIHNpZGVQYW5lbCdzIGV2ZW50IGxpc3RlbmVyLiBcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChzZWxlY3RlZFByb2plY3RUYXJnZXQpID0+IHtcbiAgICBoaWdoTGlnaHRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdFRhcmdldCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRQcm9qZWN0VGFyZ2V0LmlkO1xuICAgIGRpc3BsYXlTZWxlY3RlZFByb2plY3QoKTtcbiAgfTtcblxuICBjb25zdCBzYXZlU2VsZWN0ZWRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0S2V5LCBzZWxlY3RlZFByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHNldEFsbFByb2plY3RBc0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwnKTtcbiAgICBzZWxlY3RQcm9qZWN0KGFsbFByb2plY3QpO1xuICAgIHNhdmVTZWxlY3RlZFByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRhbGl6ZVNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBIaWdsaWdodCB0aGUgc2VsZWN0ZWQgcHJvamVjdCAocmVmZXIgdG8gbG9jYWwgc3RvcmFnZSkgXG4gICAgICogYW5kIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHByb2plY3QgdG8gdGhlIHByb2plY3QgaGVhZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IGFsbFByb2plY3RzSW5TaWRlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGFsbFByb2plY3RzSW5TaWRlUGFuZWwuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRBbGxQcm9qZWN0QXNEZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlzcGxheVNlbGVjdGVkUHJvamVjdCgpO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGluIHNpZGUgcGFuZWwgZXhjbHVkaW5nIEFsbCwgU2NoZWR1bGVkLCBhbmQgSW1wb3J0YW50XG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0LmlkKTtcbiAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWxldGVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3QuaWQpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9IERlbGV0ZUJ1dHRvbjtcblxuICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNBcnJheVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZVByb2plY3RzQXJyYXlLZXksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgfTtcblxuICBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2VBbmRSZW5kZXIgPSAoKSA9PiB7XG4gICAgc2F2ZVByb2plY3RzQXJyYXlUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHNhdmVTZWxlY3RlZFByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICByZWZyZXNoUHJvamVjdHNMaXN0KCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICBpbml0YWxpemVTZWxlY3RlZFByb2plY3QoKTtcbiAgICB0b2Rvc0hhbmRsZXIucmVuZGVyKCk7XG4gIH07XG5cbiAgY29uc3QgcGVyc2lzdFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZUFuZFJlbmRlcigpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHdpbGwgb25seSBiZSBjYWxsZWQgaW4gZXZlbnQgbGlzdGVuZXJzLlxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBpbnB1dFZhbHVlID0gbmV3UHJvamVjdElucHV0RmllbGQudmFsdWU7XG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnIHx8IGlucHV0VmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChpbnB1dFZhbHVlKTtcbiAgICBuZXdQcm9qZWN0SW5wdXRGb3JtLnJlc2V0KCk7XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICAgIGFkZE5ld1Byb2plY3QsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgICBwZXJzaXN0VG9Mb2NhbFN0b3JhZ2UsXG4gICAgcHJvamVjdHNBcnJheSxcbiAgICBzZXRBbGxQcm9qZWN0QXNEZWZhdWx0LFxuICB9XG59KCkpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0hhbmRsZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9mYWN0b3JpZXMvdG9kb3MtZmFjdG9yeVwiO1xuaW1wb3J0IHsgcHJvamVjdHNIYW5kbGVyIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnL3NyYy9pbWFnZXMvZGVsZXRlLWJ1dHRvbi5wbmcnO1xuaW1wb3J0IE5vdEltcG9ydGFudCBmcm9tICcvc3JjL2ltYWdlcy9ub3QtaW1wb3J0YW50LnBuZyc7XG5pbXBvcnQgSW1wb3J0YW50IGZyb20gJy9zcmMvaW1hZ2VzL2ltcG9ydGFudC5wbmcnXG5pbXBvcnQgRWRpdEJ1dHRvbiBmcm9tICcvc3JjL2ltYWdlcy9lZGl0LWJ1dHRvbi5wbmcnO1xuXG5jb25zdCB0b2Rvc0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZG9zXScpO1xuICBjb25zdCBuZXdUb2RvSW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10b2RvLWlucHV0LWZpZWxkXScpO1xuICBjb25zdCBuZXdUb2RvSW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRvZG8taW5wdXQtZm9ybV0nKTtcbiAgY29uc3QgYWxsVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG4gIGNvbnN0IHNjaGVkdWxlZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlZCcpO1xuICBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbnQnKTtcblxuICBjb25zdCBjcmVhdGVUb2RvcyA9ICh0b2RvQ29tcGxldGVkLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9JZCwgdG9kb0ltcG9ydGFudCwgdG9kb0RhdGUpID0+IHtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0b2RvSWQpO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG4gICAgY29uc3QgbGVmdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGVmdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LWNvbnRhaW5lcicpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgnZGF0YS1jaGVja2JveC1pZCcsIHRvZG9JZCk7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgaWYgKHRvZG9Db21wbGV0ZWQpIHtcbiAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGxlZnRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIGxlZnRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByaWdodENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1jb250YWluZXInKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyRGl2KTtcbiAgICBcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9EYXRlO1xuICAgIHJpZ2h0Q29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3QgZWRpdERlbGV0ZUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXREZWxldGVDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdC1kZWxldGUtY29udGFpbmVyJylcbiAgICByaWdodENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChlZGl0RGVsZXRlQ29udGFpbmVyRGl2KTtcblxuICAgIGNvbnN0IGltcG9ydGFudFN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbXBvcnRhbnRTdGFyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW1wb3J0YW50LXN0YXInKTtcbiAgICBpbXBvcnRhbnRTdGFyLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWltcG9ydGFudCcsIHRvZG9JbXBvcnRhbnQpO1xuICAgIGltcG9ydGFudFN0YXIuc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW1wb3J0YW50LWlkJywgdG9kb0lkKTtcbiAgICBpZiAodG9kb0ltcG9ydGFudCA9PT0gZmFsc2UpIHtcbiAgICAgIGltcG9ydGFudFN0YXIuc3JjID0gTm90SW1wb3J0YW50OyBcbiAgICB9IGVsc2Uge1xuICAgICAgaW1wb3J0YW50U3Rhci5zcmMgPSBJbXBvcnRhbnQ7XG4gICAgfVxuICAgIGVkaXREZWxldGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW1wb3J0YW50U3Rhcik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQnKTtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWVkaXQtYnV0dG9uLWlkJywgdG9kb0lkKTtcbiAgICBlZGl0QnV0dG9uLnNyYyA9IEVkaXRCdXR0b247XG4gICAgZWRpdERlbGV0ZUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScpO1xuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1kZWxldGUtYnV0dG9uLWlkJywgdG9kb0lkKTtcbiAgICBkZWxldGVCdXR0b24uc3JjID0gRGVsZXRlQnV0dG9uO1xuICAgIGVkaXREZWxldGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJBbGxUb2RvcyA9ICgpID0+IHtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICBjcmVhdGVUb2Rvcyh0b2RvLmNvbXBsZXRlZCwgdG9kby5kZXNjcmlwdGlvbiwgdG9kby5pZCwgdG9kby5pbXBvcnRhbnQsIHRvZG8uZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJTY2hlZHVsZWRUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNjaGVkdWxlZFwiKVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckltcG9ydGFudFRvZG9zID0gKCkgPT4ge1xuICAgIHByb2plY3RzSGFuZGxlci5wcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgIGlmICh0b2RvLmltcG9ydGFudCkge1xuICAgICAgICAgIGNyZWF0ZVRvZG9zKHRvZG8uY29tcGxldGVkLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmlkLCB0b2RvLmltcG9ydGFudCwgdG9kby5kYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVG9kb3NJblNlbGVjdGVkUHJvamVjdCA9IChzZWxlY3RlZFByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkUHJvamVjdC5pZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgY3JlYXRlVG9kb3ModG9kby5jb21wbGV0ZWQsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uaWQsIHRvZG8uaW1wb3J0YW50LCB0b2RvLmRhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUb2RvcyA9ICgpID0+IHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcHJvamVjdCcpO1xuICAgIC8vIElmIEFsbCBpcyBzZWxlY3RlZCBkaXNwbGF5IGFsbCB0b2RvcyBmb3IgZWFjaCBwcm9qZWN0XG4gICAgaWYgKGFsbFRvZG9zLmlkID09PSBhY3RpdmVQcm9qZWN0LmlkKSB7XG4gICAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgIH0gZWxzZSBpZiAoc2NoZWR1bGVkVG9kb3MuaWQgPT09IGFjdGl2ZVByb2plY3QuaWQpIHtcbiAgICAgIHJlbmRlclNjaGVkdWxlZFRvZG9zKCk7XG4gICAgfSBlbHNlIGlmIChpbXBvcnRhbnRUb2Rvcy5pZCA9PT0gYWN0aXZlUHJvamVjdC5pZCkge1xuICAgICAgcmVuZGVySW1wb3J0YW50VG9kb3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyVG9kb3NJblNlbGVjdGVkUHJvamVjdChhY3RpdmVQcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHVzaE5ld1RvZG9JblByb2plY3QgPSAobmV3VG9kb0lucHV0KSA9PiB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QnKTtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgaWYgKHByb2plY3QuaWQgPT09IGFjdGl2ZVByb2plY3QuaWQpIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKG5ld1RvZG9JbnB1dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3VG9kbyA9ICgpID0+IHtcbiAgICBsZXQgaW5wdXRWYWx1ZSA9IG5ld1RvZG9JbnB1dEZpZWxkLnZhbHVlO1xuICAgIGlmIChpbnB1dFZhbHVlID09PSBudWxsIHx8IGlucHV0VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgY29uc3QgbmV3VG9kbyA9IFRvZG8oaW5wdXRWYWx1ZSk7XG4gICAgbmV3VG9kb0lucHV0Rm9ybS5yZXNldCgpO1xuICAgIHB1c2hOZXdUb2RvSW5Qcm9qZWN0KG5ld1RvZG8pO1xuICAgIHJlbmRlcigpO1xuICAgIHByb2plY3RzSGFuZGxlci5wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfTtcblxuICBjb25zdCByZWZyZXNoVG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHRvZG9zQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRvZG9zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9zQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgcmVmcmVzaFRvZG9MaXN0KCk7XG4gICAgcmVuZGVyVG9kb3MoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBhZGROZXdUb2RvLFxuICB9XG59KCkpO1xuXG5leHBvcnQgeyB0b2Rvc0hhbmRsZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcvc3JjL3N0eWxlLmNzcydcbmltcG9ydCB7IHByb2plY3RzSGFuZGxlciB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBldmVudExpc3RlbmVycyB9IGZyb20gJy4vbW9kdWxlcy9ldmVudC1saXN0ZW5lcnMuanMnO1xuXG5wcm9qZWN0c0hhbmRsZXIucmVuZGVyKCk7XG5ldmVudExpc3RlbmVycy5pbml0aWF0ZUV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=