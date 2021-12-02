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
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.projectsArray.map(project => {
      project.tasks.map(todo => {
        if (todo.id === todoDeleted.id) {
          project.tasks.splice(index, 1);
          _projects__WEBPACK_IMPORTED_MODULE_0__.projectsHandler.persistToLocalStorage();
        }
      });
    })
  };

  return {
    deleteTodo,
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
    checkBox.setAttribute('type', 'checkbox');
    if (todoCompleted) {
      checkBox.checked;
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
    console.log("Important")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnVCO0FBQ2lDO0FBQ007O0FBRTlELHdFQUFzQjtBQUN0Qiw4RkFBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9lZGl0LW1vZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mYWN0b3JpZXMvcHJvamVjdHMtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2ZhY3Rvcmllcy90b2Rvcy1mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbW9kdWxlcy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNpZGUtcGFuZWwtY29sb3I6ICNlZWU7XFxuICAgIC0tc2lkZS1wYW5lbC1yaWdodC1ib3JkZXI6IHJnYigxODUsIDE4NSwgMTg1KTtcXG4gICAgLS1zaWRlLXBhbmVsLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLW1haW4tcGFuZWwtY29sb3I6ICNmN2Y3Zjc7XFxuICAgIC0tc2lkZS1wYW5lbC1zaXplOiAxN3JlbTtcXG4gICAgLS1yb2JvdG8tZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNhcHAge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlcicgJ21haW4nO1xcbn1cXG5cXG4jYXBwIGhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuI2FwcCBoZWFkZXIgaDEge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIG1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZS1wYW5lbC1zaXplKSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGUtcGFuZWwnICdtYWluLXBhbmVsJztcXG59XFxuXFxuI3NpZGUtcGFuZWwge1xcbiAgICBncmlkLWFyZWE6IHNpZGUtcGFuZWw7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGUtcGFuZWwtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDAgMC42MjVyZW0gMC42MjVyZW07XFxuICAgIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkIHZhcigtLXNpZGUtcGFuZWwtcmlnaHQtYm9yZGVyKTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGUtcGFuZWwtc2l6ZSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNzaWRlLXBhbmVsIC5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC45MzhyZW0gMCAwLjkzOHJlbSAwLjkzOHJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcm9ib3RvLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCAuZGVsZXRlLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGUtcGFuZWwgLmFjdGl2ZS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgZ3JheTtcXG4gICAgd2lkdGg6IDEwMSU7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDAuOTM4cmVtIDAgMC45MzhyZW0gMC45MzhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcm9ib3RvLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCAjc2lkZS1wYW5lbC1ociB7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG5tYWluICNtYWluLXBhbmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncHJvamVjdC1oZWFkZXInICd0b2RvLWxpc3QtY29udGFpbmVyJztcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0LWhlYWRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyICNwcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlLWNvbnRhaW5lciAjcHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMjByZW07XFxufVxcblxcbiN0b2RvLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuI3RvZG8tbGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICAgIHdpZHRoOiA4MHJlbTtcXG4gICAgbWFyZ2luOiAyLjVyZW0gYXV0bztcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbn1cXG5cXG4jdG9kby1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIGJsdWU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCBibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi50b2RvIC5sZWZ0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kbyAuY2hlY2tib3gge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLnJpZ2h0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtc3RhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5yaWdodC1jb250YWluZXIgLmVkaXQtZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAuNXJlbTtcXG59XFxuXFxuLmVkaXQtZGVsZXRlLWNvbnRhaW5lciAudGFzay1lZGl0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTsgXFxufVxcblxcbi5lZGl0LWRlbGV0ZS1jb250YWluZXIgLnRhc2stZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogOTguNzUlO1xcbiAgICAvKiBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgYmx1ZTsgKi9cXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIGJsdWU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcGFuZWwtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRvZG86Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNkNBQTZDO0lBQzdDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsdUJBQXVCO0lBQ3ZCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLHlEQUF5RDtJQUN6RCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyx5Q0FBeUM7SUFDekMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0Qyx5Q0FBeUM7SUFDekMsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNpZGUtcGFuZWwtY29sb3I6ICNlZWU7XFxuICAgIC0tc2lkZS1wYW5lbC1yaWdodC1ib3JkZXI6IHJnYigxODUsIDE4NSwgMTg1KTtcXG4gICAgLS1zaWRlLXBhbmVsLXRleHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLW1haW4tcGFuZWwtY29sb3I6ICNmN2Y3Zjc7XFxuICAgIC0tc2lkZS1wYW5lbC1zaXplOiAxN3JlbTtcXG4gICAgLS1yb2JvdG8tZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNhcHAge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2hlYWRlcicgJ21haW4nO1xcbn1cXG5cXG4jYXBwIGhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuI2FwcCBoZWFkZXIgaDEge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIG1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZS1wYW5lbC1zaXplKSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGUtcGFuZWwnICdtYWluLXBhbmVsJztcXG59XFxuXFxuI3NpZGUtcGFuZWwge1xcbiAgICBncmlkLWFyZWE6IHNpZGUtcGFuZWw7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGUtcGFuZWwtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDAgMC42MjVyZW0gMC42MjVyZW07XFxuICAgIGJvcmRlci1yaWdodDogMC4xcmVtIHNvbGlkIHZhcigtLXNpZGUtcGFuZWwtcmlnaHQtYm9yZGVyKTtcXG4gICAgd2lkdGg6IHZhcigtLXNpZGUtcGFuZWwtc2l6ZSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNzaWRlLXBhbmVsIC5wcm9qZWN0IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC45MzhyZW0gMCAwLjkzOHJlbSAwLjkzOHJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcm9ib3RvLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCAuZGVsZXRlLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGUtcGFuZWwgLmFjdGl2ZS1wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgZ3JheTtcXG4gICAgd2lkdGg6IDEwMSU7XFxufVxcblxcbi5uZXctcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDAuOTM4cmVtIDAgMC45MzhyZW0gMC45MzhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tcm9ib3RvLWZvbnQpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMHM7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwcztcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyMSwgMjIxLCAyMjEpO1xcbn1cXG5cXG4jc2lkZS1wYW5lbCAjc2lkZS1wYW5lbC1ociB7XFxuICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG5tYWluICNtYWluLXBhbmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1wYW5lbC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAncHJvamVjdC1oZWFkZXInICd0b2RvLWxpc3QtY29udGFpbmVyJztcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0LWhlYWRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyICNwcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlLWNvbnRhaW5lciAjcHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMjByZW07XFxufVxcblxcbiN0b2RvLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXFxuI3RvZG8tbGlzdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICAgIHdpZHRoOiA4MHJlbTtcXG4gICAgbWFyZ2luOiAyLjVyZW0gYXV0bztcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBoZWlnaHQ6IDQ1cmVtO1xcbn1cXG5cXG4jdG9kby1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIGJsdWU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCBibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLXBhbmVsLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi50b2RvIC5sZWZ0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kbyAuY2hlY2tib3gge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gLnRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLnJpZ2h0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQtc3RhciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5yaWdodC1jb250YWluZXIgLmVkaXQtZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAuNXJlbTtcXG59XFxuXFxuLmVkaXQtZGVsZXRlLWNvbnRhaW5lciAudGFzay1lZGl0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTsgXFxufVxcblxcbi5lZGl0LWRlbGV0ZS1jb250YWluZXIgLnRhc2stZGVsZXRlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogOTguNzUlO1xcbiAgICAvKiBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgYmx1ZTsgKi9cXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIGJsdWU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcGFuZWwtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLXRvZG86Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzSGFuZGxlciB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IHByb2plY3RFZGl0TW9kZSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIEF2b2lkcyByZXR1cm5pbmcgdG8gXCJBbGxcIiBpZiB0aGUgcHJvamVjdCBpc24ndCBkZWxldGVkXG4gIGNvbnN0IGNoZWNrSWZTZWxlY3RlZFByb2plY3RJc0RlbGV0ZWQgPSAocHJvamVjdCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcbiAgICAgIHByb2plY3RzSGFuZGxlci5zZXRBbGxQcm9qZWN0QXNEZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0c10nKVxuICAgIC8vIENvbnZlcnQgdGhlIGNoaWxkcmVuIG9mIHRoZSBwcm9qZWN0Q29udGFpbmVyIGludG8gYW4gYXJyYXkgdXNpbmcgdGhlIHNwcmVhZCBbLi4uXSBvcGVyYXRvciB0aGVuIGdldCB0aGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIGxpc3RcbiAgICBjb25zdCBpbmRleCA9IFsuLi5wcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuXS5pbmRleE9mKHByb2plY3QucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICBwcm9qZWN0c0hhbmRsZXIucHJvamVjdHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNoZWNrSWZTZWxlY3RlZFByb2plY3RJc0RlbGV0ZWQocHJvamVjdCk7XG4gICAgcHJvamVjdHNIYW5kbGVyLnBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGVsZXRlUHJvamVjdCxcbiAgfVxufSgpKTtcblxuY29uc3QgdG9kb0VkaXRNb2RlID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9kb3NdJyk7XG4gICAgY29uc3QgdG9kb0RlbGV0ZWQgPSB0b2RvLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGluZGV4ID0gWy4uLnRvZG9Db250YWluZXIuY2hpbGRyZW5dLmluZGV4T2YodG9kb0RlbGV0ZWQpO1xuICAgIHByb2plY3RzSGFuZGxlci5wcm9qZWN0c0FycmF5Lm1hcChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MubWFwKHRvZG8gPT4ge1xuICAgICAgICBpZiAodG9kby5pZCA9PT0gdG9kb0RlbGV0ZWQuaWQpIHtcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgcHJvamVjdHNIYW5kbGVyLnBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGVsZXRlVG9kbyxcbiAgfVxufSgpKTtcblxuZXhwb3J0IHsgcHJvamVjdEVkaXRNb2RlLCB0b2RvRWRpdE1vZGUgfTtcbiIsImltcG9ydCB7IHByb2plY3RzSGFuZGxlciB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgeyB0b2Rvc0hhbmRsZXIgfSBmcm9tIFwiLi90b2Rvcy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdEVkaXRNb2RlLCB0b2RvRWRpdE1vZGUgfSBmcm9tIFwiLi9lZGl0LW1vZGUuanNcIjtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbml0aWF0ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtbmV3LXByb2plY3RzLWZvcm1dJyk7XG4gICAgbmV3UHJvamVjdElucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHByb2plY3RzSGFuZGxlci5hZGROZXdQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaWRlUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZS1wYW5lbCcpO1xuICAgIHNpZGVQYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2xpJykge1xuICAgICAgICBwcm9qZWN0c0hhbmRsZXIuc2VsZWN0UHJvamVjdChlLnRhcmdldCk7XG4gICAgICAgIHByb2plY3RzSGFuZGxlci5wZXJzaXN0VG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdHNdJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICBpZiAoZGVsZXRlQnV0dG9uID09PSBsaXN0RWxlbWVudCkge1xuICAgICAgICBwcm9qZWN0RWRpdE1vZGUuZGVsZXRlUHJvamVjdChlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZXdUb2RvSW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRvZG8taW5wdXQtZm9ybV0nKTtcbiAgICBuZXdUb2RvSW5wdXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9kb3NIYW5kbGVyLmFkZE5ld1RvZG8oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9kb3NdJyk7XG4gICAgdG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGUudGFyZ2V0LmRhdGFzZXQudG9kb0RlbGV0ZUJ1dHRvbklkO1xuICAgICAgY29uc3QgdG9kb0RpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgICAgaWYgKGRlbGV0ZUJ1dHRvbiA9PT0gdG9kb0Rpdikge1xuICAgICAgICB0b2RvRWRpdE1vZGUuZGVsZXRlVG9kbyhlLnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIFxuICByZXR1cm4ge1xuICAgIGluaXRpYXRlRXZlbnRMaXN0ZW5lcnMsXG4gIH1cbn0oKSk7XG5cbmV4cG9ydCB7IGV2ZW50TGlzdGVuZXJzIH07XG4iLCJmdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgdGFza3M6IFtdLFxuICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfTsiLCJmdW5jdGlvbiBUb2RvKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiB7XG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIGltcG9ydGFudDogZmFsc2UsXG4gICAgZGF0ZTogJ05vIGR1ZSBkYXRlJyxcbiAgfVxufVxuXG5leHBvcnQgeyBUb2RvIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9mYWN0b3JpZXMvcHJvamVjdHMtZmFjdG9yeS5qcyc7XG5pbXBvcnQgeyB0b2Rvc0hhbmRsZXIgfSBmcm9tICcuL3RvZG9zLmpzJztcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnL3NyYy9pbWFnZXMvZGVsZXRlLWJ1dHRvbi5wbmcnO1xuXG5jb25zdCBwcm9qZWN0c0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzXScpO1xuICBjb25zdCBuZXdQcm9qZWN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1uZXctcHJvamVjdHMtaW5wdXRdJyk7XG4gIGNvbnN0IG5ld1Byb2plY3RJbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtbmV3LXByb2plY3RzLWZvcm1dJyk7XG4gIC8vIE5hbWVzcGFjZSBsb2NhbCBzdG9yYWdlIGtleSB0byBhdm9pZCBjb25mbGljdGluZyB3aXRoIG90aGVyIHdlYnNpdGVzLlxuICBjb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0c0FycmF5S2V5ID0gJ3RvZG8ucHJvamVjdHMnO1xuICBjb25zdCBsb2NhbFN0b3JhZ2VTZWxlY3RlZFByb2plY3RLZXkgPSAndG9kby5zZWxlY3RlZFByb2plY3QnO1xuICBsZXQgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlUHJvamVjdHNBcnJheUtleSkpIHx8IFtdO1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0S2V5KTtcblxuICAvLyBPbmx5IHVzZWQgdG8gZGlzcGxheSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3QgaGVhZGVyLlxuICBjb25zdCBkaXNwbGF5U2VsZWN0ZWRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QnKTtcbiAgICBwcm9qZWN0VGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBhY3RpdmVQcm9qZWN0LnRleHRDb250ZW50O1xuICB9O1xuXG4gIC8qKlxuICAqIEBwYXJhbSAge3N0cmluZ30gc2VsZWN0ZWRQcm9qZWN0IC0gUmVmZXJzIHRvIGV2ZW50IGxpc3RlbmVyJ3Mgc2VsZWN0ZWQgbGlzdCBhdCB7QGxpbmsgZXZlbnRMaXN0ZW5lcnMuc2lkZVBhbmVsfVxuICAqIEhpZ2hsaWdodCB0aGUgc2VsZWN0ZWQgcHJvamVjdDogcmVtb3ZlIHByZXZpb3VzIGFjdGl2ZSBwcm9qZWN0IHN0eWxlIHRoZW4gYWRkIHRvIGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdFxuICAqL1xuICBjb25zdCBoaWdoTGlnaHRQcm9qZWN0ID0gKHNlbGVjdGVkUHJvamVjdFRhcmdldCkgPT4ge1xuICAgIGNvbnN0IHNpZGVQYW5lbFByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICBzaWRlUGFuZWxQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChwcm9qZWN0QnV0dG9uKSA9PiBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0JykpO1xuICAgIHNlbGVjdGVkUHJvamVjdFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xuICB9O1xuXG4gIC8vIENvbWJpbmUgdGhlIHR3byBmdW5jdGlvbnMsIGluaXRpYWxpemUgYm90aCBhdCBvbmNlIGluIHNpZGVQYW5lbCdzIGV2ZW50IGxpc3RlbmVyLiBcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChzZWxlY3RlZFByb2plY3RUYXJnZXQpID0+IHtcbiAgICBoaWdoTGlnaHRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdFRhcmdldCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0ID0gc2VsZWN0ZWRQcm9qZWN0VGFyZ2V0LmlkO1xuICAgIGRpc3BsYXlTZWxlY3RlZFByb2plY3QoKTtcbiAgfTtcblxuICBjb25zdCBzYXZlU2VsZWN0ZWRQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0S2V5LCBzZWxlY3RlZFByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHNldEFsbFByb2plY3RBc0RlZmF1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwnKTtcbiAgICBzZWxlY3RQcm9qZWN0KGFsbFByb2plY3QpO1xuICAgIHNhdmVTZWxlY3RlZFByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRhbGl6ZVNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBIaWdsaWdodCB0aGUgc2VsZWN0ZWQgcHJvamVjdCAocmVmZXIgdG8gbG9jYWwgc3RvcmFnZSkgXG4gICAgICogYW5kIGRpc3BsYXkgdGhlIHNlbGVjdGVkIHByb2plY3QgdG8gdGhlIHByb2plY3QgaGVhZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IGFsbFByb2plY3RzSW5TaWRlUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIGFsbFByb2plY3RzSW5TaWRlUGFuZWwuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkUHJvamVjdCA9PT0gbnVsbCkge1xuICAgICAgICBzZXRBbGxQcm9qZWN0QXNEZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGlzcGxheVNlbGVjdGVkUHJvamVjdCgpO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBwcm9qZWN0IGVsZW1lbnRzIGluIHNpZGUgcGFuZWwgZXhjbHVkaW5nIEFsbCwgU2NoZWR1bGVkLCBhbmQgSW1wb3J0YW50XG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0LmlkKTtcbiAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZWxldGVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbi1jb250YWluZXInKTtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gbmV3IEltYWdlKCk7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3QuaWQpO1xuICAgICAgZGVsZXRlQnV0dG9uLnNyYyA9IERlbGV0ZUJ1dHRvbjtcblxuICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlZnJlc2hQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgd2hpbGUgKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzYXZlUHJvamVjdHNBcnJheVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZVByb2plY3RzQXJyYXlLZXksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgfTtcblxuICBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2VBbmRSZW5kZXIgPSAoKSA9PiB7XG4gICAgc2F2ZVByb2plY3RzQXJyYXlUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHNhdmVTZWxlY3RlZFByb2plY3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICByZWZyZXNoUHJvamVjdHNMaXN0KCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICBpbml0YWxpemVTZWxlY3RlZFByb2plY3QoKTtcbiAgICB0b2Rvc0hhbmRsZXIucmVuZGVyKCk7XG4gIH07XG5cbiAgY29uc3QgcGVyc2lzdFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZUFuZFJlbmRlcigpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHdpbGwgb25seSBiZSBjYWxsZWQgaW4gZXZlbnQgbGlzdGVuZXJzLlxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBpbnB1dFZhbHVlID0gbmV3UHJvamVjdElucHV0RmllbGQudmFsdWU7XG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnIHx8IGlucHV0VmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChpbnB1dFZhbHVlKTtcbiAgICBuZXdQcm9qZWN0SW5wdXRGb3JtLnJlc2V0KCk7XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIHBlcnNpc3RUb0xvY2FsU3RvcmFnZSgpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICAgIGFkZE5ld1Byb2plY3QsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgICBwZXJzaXN0VG9Mb2NhbFN0b3JhZ2UsXG4gICAgcHJvamVjdHNBcnJheSxcbiAgICBzZXRBbGxQcm9qZWN0QXNEZWZhdWx0LFxuICB9XG59KCkpO1xuXG5leHBvcnQgeyBwcm9qZWN0c0hhbmRsZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9mYWN0b3JpZXMvdG9kb3MtZmFjdG9yeVwiO1xuaW1wb3J0IHsgcHJvamVjdHNIYW5kbGVyIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnL3NyYy9pbWFnZXMvZGVsZXRlLWJ1dHRvbi5wbmcnO1xuaW1wb3J0IE5vdEltcG9ydGFudCBmcm9tICcvc3JjL2ltYWdlcy9ub3QtaW1wb3J0YW50LnBuZyc7XG5pbXBvcnQgSW1wb3J0YW50IGZyb20gJy9zcmMvaW1hZ2VzL2ltcG9ydGFudC5wbmcnXG5pbXBvcnQgRWRpdEJ1dHRvbiBmcm9tICcvc3JjL2ltYWdlcy9lZGl0LWJ1dHRvbi5wbmcnO1xuXG5jb25zdCB0b2Rvc0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZG9zXScpO1xuICBjb25zdCBuZXdUb2RvSW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy10b2RvLWlucHV0LWZpZWxkXScpO1xuICBjb25zdCBuZXdUb2RvSW5wdXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LXRvZG8taW5wdXQtZm9ybV0nKTtcbiAgY29uc3QgYWxsVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsJyk7XG4gIGNvbnN0IHNjaGVkdWxlZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlZCcpO1xuICBjb25zdCBpbXBvcnRhbnRUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbnQnKTtcblxuICBjb25zdCBjcmVhdGVUb2RvcyA9ICh0b2RvQ29tcGxldGVkLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9JZCwgdG9kb0ltcG9ydGFudCwgdG9kb0RhdGUpID0+IHtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCB0b2RvSWQpO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG4gICAgY29uc3QgbGVmdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGVmdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LWNvbnRhaW5lcicpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlmICh0b2RvQ29tcGxldGVkKSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkO1xuICAgIH1cbiAgICBsZWZ0Q29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgICBsZWZ0Q29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCByaWdodENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtY29udGFpbmVyJyk7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lckRpdik7XG4gICAgXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvRGF0ZTtcbiAgICByaWdodENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IGVkaXREZWxldGVDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0RGVsZXRlQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGVsZXRlLWNvbnRhaW5lcicpXG4gICAgcmlnaHRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZWRpdERlbGV0ZUNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRTdGFyID0gbmV3IEltYWdlKCk7XG4gICAgaW1wb3J0YW50U3Rhci5jbGFzc0xpc3QuYWRkKCd0YXNrLWltcG9ydGFudC1zdGFyJyk7XG4gICAgaW1wb3J0YW50U3Rhci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pbXBvcnRhbnQnLCB0b2RvSW1wb3J0YW50KTtcbiAgICBpbXBvcnRhbnRTdGFyLnNldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWltcG9ydGFudC1pZCcsIHRvZG9JZCk7XG4gICAgaWYgKHRvZG9JbXBvcnRhbnQgPT09IGZhbHNlKSB7XG4gICAgICBpbXBvcnRhbnRTdGFyLnNyYyA9IE5vdEltcG9ydGFudDsgXG4gICAgfSBlbHNlIHtcbiAgICAgIGltcG9ydGFudFN0YXIuc3JjID0gSW1wb3J0YW50O1xuICAgIH1cbiAgICBlZGl0RGVsZXRlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGltcG9ydGFudFN0YXIpO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0Jyk7XG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1lZGl0LWJ1dHRvbi1pZCcsIHRvZG9JZCk7XG4gICAgZWRpdEJ1dHRvbi5zcmMgPSBFZGl0QnV0dG9uO1xuICAgIGVkaXREZWxldGVDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUnKTtcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8tZGVsZXRlLWJ1dHRvbi1pZCcsIHRvZG9JZCk7XG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IERlbGV0ZUJ1dHRvbjtcbiAgICBlZGl0RGVsZXRlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQWxsVG9kb3MgPSAoKSA9PiB7XG4gICAgcHJvamVjdHNIYW5kbGVyLnByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY3JlYXRlVG9kb3ModG9kby5jb21wbGV0ZWQsIHRvZG8uZGVzY3JpcHRpb24sIHRvZG8uaWQsIHRvZG8uaW1wb3J0YW50LCB0b2RvLmRhdGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2NoZWR1bGVkVG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTY2hlZHVsZWRcIilcbiAgfTtcblxuICBjb25zdCByZW5kZXJJbXBvcnRhbnRUb2RvcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkltcG9ydGFudFwiKVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvZG9zSW5TZWxlY3RlZFByb2plY3QgPSAoc2VsZWN0ZWRQcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHNIYW5kbGVyLnByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZFByb2plY3QuaWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgIGNyZWF0ZVRvZG9zKHRvZG8uY29tcGxldGVkLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLmlkLCB0b2RvLmltcG9ydGFudCwgdG9kby5kYXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVG9kb3MgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QnKTtcbiAgICAvLyBJZiBBbGwgaXMgc2VsZWN0ZWQgZGlzcGxheSBhbGwgdG9kb3MgZm9yIGVhY2ggcHJvamVjdFxuICAgIGlmIChhbGxUb2Rvcy5pZCA9PT0gYWN0aXZlUHJvamVjdC5pZCkge1xuICAgICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgICB9IGVsc2UgaWYgKHNjaGVkdWxlZFRvZG9zLmlkID09PSBhY3RpdmVQcm9qZWN0LmlkKSB7XG4gICAgICByZW5kZXJTY2hlZHVsZWRUb2RvcygpO1xuICAgIH0gZWxzZSBpZiAoaW1wb3J0YW50VG9kb3MuaWQgPT09IGFjdGl2ZVByb2plY3QuaWQpIHtcbiAgICAgIHJlbmRlckltcG9ydGFudFRvZG9zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlclRvZG9zSW5TZWxlY3RlZFByb2plY3QoYWN0aXZlUHJvamVjdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHB1c2hOZXdUb2RvSW5Qcm9qZWN0ID0gKG5ld1RvZG9JbnB1dCkgPT4ge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgcHJvamVjdHNIYW5kbGVyLnByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmlkID09PSBhY3RpdmVQcm9qZWN0LmlkKSB7XG4gICAgICAgIHByb2plY3QudGFza3MucHVzaChuZXdUb2RvSW5wdXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1RvZG8gPSAoKSA9PiB7XG4gICAgbGV0IGlucHV0VmFsdWUgPSBuZXdUb2RvSW5wdXRGaWVsZC52YWx1ZTtcbiAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fCBpbnB1dFZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvKGlucHV0VmFsdWUpO1xuICAgIG5ld1RvZG9JbnB1dEZvcm0ucmVzZXQoKTtcbiAgICBwdXNoTmV3VG9kb0luUHJvamVjdChuZXdUb2RvKTtcbiAgICByZW5kZXIoKTtcbiAgICBwcm9qZWN0c0hhbmRsZXIucGVyc2lzdFRvTG9jYWxTdG9yYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgcmVmcmVzaFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgIHdoaWxlICh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICB0b2Rvc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJlZnJlc2hUb2RvTGlzdCgpO1xuICAgIHJlbmRlclRvZG9zKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgYWRkTmV3VG9kbyxcbiAgfVxufSgpKTtcblxuZXhwb3J0IHsgdG9kb3NIYW5kbGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnL3NyYy9zdHlsZS5jc3MnXG5pbXBvcnQgeyBwcm9qZWN0c0hhbmRsZXIgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuL21vZHVsZXMvZXZlbnQtbGlzdGVuZXJzLmpzJztcblxucHJvamVjdHNIYW5kbGVyLnJlbmRlcigpO1xuZXZlbnRMaXN0ZW5lcnMuaW5pdGlhdGVFdmVudExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9