function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app\">\r\n  <app-header class=\"layout\"></app-header>\r\n  <div class=\"img-display\">\r\n    <div class=\"main-container\">\r\n      <app-intro></app-intro>\r\n      <app-section-container></app-section-container>\r\n      <app-comment-container></app-comment-container>\r\n    </div>\r\n    <app-footer class=\"layout\"></app-footer>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-container/comment-container.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-container/comment-container.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentContainerCommentContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"comment-container\">\r\n  <div *ngIf=\"this.propertiesArray.length; else emptyCommentBlock\">\r\n    <app-comment\r\n      *ngFor=\"let commentProperties of this.propertiesArray;\"\r\n      [properties]=\"commentProperties\">\r\n    </app-comment>\r\n  </div>\r\n  <ng-template #emptyCommentBlock>\r\n    <h1 class=\"emptyComment\">Be the first to add a comment !</h1>\r\n  </ng-template>\r\n  <app-comment-form></app-comment-form>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-form/comment-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-form/comment-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentFormCommentFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"comment-form\">\r\n  <header>\r\n    <h3>Add a comment !</h3>\r\n    <mat-divider style=\"margin-bottom:5px;\"></mat-divider>\r\n  </header>\r\n  <form\r\n    [formGroup]=\"this.form\"\r\n    (ngSubmit)=\"this.onSubmit(form.value)\">\r\n\r\n    <mat-form-field>\r\n      <mat-label for=\"authorName\">Your name</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        name=\"authorName\"\r\n        formControlName=\"authorName\"/>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <mat-label>Your email</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        name=\"email\"\r\n        formControlName=\"email\"/>\r\n    </mat-form-field>\r\n    <mat-checkbox\r\n      matInput\r\n      name=\"isEmailPublic\"\r\n      formControlName=\"isEmailPublic\">I agree displaying this email on this website</mat-checkbox>\r\n    <br>\r\n    <mat-form-field>\r\n      <mat-label for=\"label\">Your comment's title</mat-label>\r\n      <input\r\n        matInput\r\n        type=\"text\"\r\n        name=\"label\"\r\n        formControlName=\"label\"/>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <label for=\"content\">Your comment</label>\r\n      <textarea\r\n        [class.content-invalid]=\"this.form.get('content').hasError()\"\r\n        matInput\r\n        type=\"text\"\r\n        name=\"content\"\r\n        formControlName=\"content\"></textarea>\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button type=\"submit\" [disabled]=\"!form.valid\">Send comment</button>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommentCommentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"comment\">\r\n  <h3 class=\"mat-h3\"> {{ this.properties.label }}</h3>\r\n  <mat-divider></mat-divider>\r\n  <h4 class=\"mat-h4 comment-subtitle\">{{ this.properties.authorName }} |\r\n    <span *ngIf=\"this.isEmailDisplayed() && this.properties.email\" >\r\n      <span class=\"comment-email\">{{ this.properties.email }}</span>\r\n       | </span>\r\n    <span class=\"comment-date\">{{ this.properties.date | date }}</span>\r\n  </h4>\r\n  <p>{{ this.properties.content }}</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar-row class=\"contact\">\r\n  <div class=\"contact-item\" matTooltip=\"Email\" matTooltipPosition=\"left\">\r\n    <mat-icon class=\"contact-item-icon\">email</mat-icon>\r\n    <p> baptiste.mahe@centrale-marseille.fr</p>\r\n  </div>\r\n  <div class=\"contact-item\" matTooltip=\"Phone\" matTooltipPosition=\"left\">\r\n    <mat-icon class=\"contact-item-icon\">phone</mat-icon>\r\n    <p> +336 82 31 87 05</p>\r\n  </div>\r\n</mat-toolbar-row>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"footer\">\r\n  <app-link\r\n    *ngFor=\"let linkProperties of this.linkPropertiesArray;\"\r\n    [properties]=\"linkProperties\">\r\n  </app-link>\r\n  <div class=\"fill-space citation\">\r\n    <!--\r\n      <img class=\"citation-img\" src=\"../../../assets/clean-code.jpg\">\r\n      <span class=\"citation-text\">Writing clean code is what you must do in order to call yourself a professional. There is no reasonable excuse for doing anything less than your best.</span>\r\n    -->\r\n  </div>\r\n  <app-contact>\r\n  </app-contact>\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar role=\"heading\" class=\"header\" [ngClass]=\"this.state\">\r\n  <img class=\"profile-picture\" src=\"../../../assets/profile-picture.png\">\r\n  <span class=\"fill-space\"></span>\r\n  <h1>{{ this.properties.title }}</h1>\r\n  <span class=\"fill-space\"></span>\r\n  <button id=\"englishButton\"\r\n    class=\"language-button\"\r\n    mat-button\r\n    matTooltip=\"English\"><img src=\"../../../assets/united-kingdom.png\"/></button>\r\n  <button id=\"frenchButton\"\r\n    class=\"language-button\"\r\n    mat-button\r\n    matTooltip=\"Français\"><img src=\"../../../assets/france.png\"/></button>\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"intro\">\r\n  <h2>{{this.properties.label}}</h2>\r\n  <img [src]=\"this.properties.imageUrl\"/>\r\n<p *ngFor=\"let content of this.properties.content\">{{content.paragraph}}</p>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/link/link.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/link/link.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLinkLinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar-row class=\"link\" [matTooltip]=\"this.properties.label\">\r\n  <a [href]=\"properties.address\">\r\n    <div class=\"image\">\r\n      <img [src]=\"properties.imageUrl\"/>\r\n    </div>\r\n  </a>\r\n</mat-toolbar-row>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-container/section-container.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-container/section-container.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSectionContainerSectionContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-accordion>\r\n  <app-section\r\n    *ngFor=\"let sectionProperties of this.propertiesArray;\"\r\n    [properties]=\"sectionProperties\">\r\n  </app-section>\r\n</mat-accordion>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSectionSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-expansion-panel class=\"section\" (click)=\"this.onClick($event)\">\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>\r\n        {{ this.properties.label }}\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n  <mat-panel-description>\r\n    <img [src]=\"this.properties.imageUrl\"/>\r\n    <p *ngFor=\"let content of this.properties.content\">{{ content.paragraph }}</p>\r\n  </mat-panel-description>\r\n</mat-expansion-panel>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-container {\n  margin-bottom: 70px;\n  padding-top: 120px;\n  margin-left: 8%;\n  margin-right: 8%;\n  background-color: #303030;\n  color: white;\n  border-radius: 10px 10px 10px 10px;\n}\n\n.img-display {\n  background-image: url('wall-paper.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  padding-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYWhlYlxcRGVza3RvcFxcQ29kZVxcbXlTaXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcbWFoZWJcXERlc2t0b3BcXENvZGVcXG15U2l0ZS9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQ0dlO0VERmYsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDSlU7RURLVixZQUFBO0VBQ0Esa0NBQUE7QUVERjs7QUZJQTtFQUNFLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgcGFkZGluZy10b3A6ICRoZWFkZXJCYXNlU2l6ZTtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4uaW1nLWRpc3BsYXkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy93YWxsLXBhcGVyLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuIiwiXHJcbi8vIENPTE9SIFRIRU1FXHJcbiRwcmltYXJ5OiAjOWMyN2IwO1xyXG4kc2Vjb25kYXJ5OiAjMzAzMDMwO1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbi8vR0VORVJBTCBTSVpJTkdcclxuJGhlYWRlckJhc2VTaXplOiAxMjBweDtcclxuXHJcbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBtYXJnaW4tcmlnaHQ6IDglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5pbWctZGlzcGxheSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy93YWxsLXBhcGVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'my-site';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/material.module */
    "./src/app/modules/material.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/section-container/section-container.component */
    "./src/app/components/section-container/section-container.component.ts");
    /* harmony import */


    var _components_section_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/section/section.component */
    "./src/app/components/section/section.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/intro/intro.component */
    "./src/app/components/intro/intro.component.ts");
    /* harmony import */


    var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/comment/comment.component */
    "./src/app/components/comment/comment.component.ts");
    /* harmony import */


    var _components_link_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/link/link.component */
    "./src/app/components/link/link.component.ts");
    /* harmony import */


    var _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/comment-form/comment-form.component */
    "./src/app/components/comment-form/comment-form.component.ts");
    /* harmony import */


    var _components_comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/comment-container/comment-container.component */
    "./src/app/components/comment-container/comment-container.component.ts");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _services_comment_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/comment.service */
    "./src/app/services/comment.service.ts");

    var config = {
      url: 'http://127.0.0.1:10411',
      options: {}
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_section_container_section_container_component__WEBPACK_IMPORTED_MODULE_9__["SectionContainerComponent"], _components_section_section_component__WEBPACK_IMPORTED_MODULE_10__["SectionComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_13__["IntroComponent"], _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__["CommentComponent"], _components_link_link_component__WEBPACK_IMPORTED_MODULE_15__["LinkComponent"], _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_16__["CommentFormComponent"], _components_comment_container_comment_container_component__WEBPACK_IMPORTED_MODULE_17__["CommentContainerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["SocketIoModule"].forRoot(config)],
      providers: [_services_comment_service__WEBPACK_IMPORTED_MODULE_19__["CommentService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/comment-container/comment-container.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/comment-container/comment-container.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommentContainerCommentContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comment-container {\n  margin-top: 40px;\n  margin-right: 30px;\n  margin-left: 30px;\n}\n\n.emptyComment {\n  text-align: center;\n  text-shadow: 3px 3px 5px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LWNvbnRhaW5lci9DOlxcVXNlcnNcXG1haGViXFxEZXNrdG9wXFxDb2RlXFxteVNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1lbnQtY29udGFpbmVyXFxjb21tZW50LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LWNvbnRhaW5lci9jb21tZW50LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LWNvbnRhaW5lci9jb21tZW50LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5lbXB0eUNvbW1lbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDtcclxufVxyXG4iLCIuY29tbWVudC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uZW1wdHlDb21tZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/comment-container/comment-container.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/comment-container/comment-container.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CommentContainerComponent */

  /***/
  function srcAppComponentsCommentContainerCommentContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentContainerComponent", function () {
      return CommentContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/comment.service */
    "./src/app/services/comment.service.ts");

    var CommentContainerComponent = /*#__PURE__*/function () {
      function CommentContainerComponent(commentService) {
        _classCallCheck(this, CommentContainerComponent);

        this.commentService = commentService;
        this.propertiesArray = [];
      }

      _createClass(CommentContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commentObs = this.commentService.getCommentObservable();
          this.commentObs.subscribe(function (comments) {
            _this.propertiesArray = comments;
          });
        }
      }]);

      return CommentContainerComponent;
    }();

    CommentContainerComponent.ctorParameters = function () {
      return [{
        type: _services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]
      }];
    };

    CommentContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-container/comment-container.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment-container.component.scss */
      "./src/app/components/comment-container/comment-container.component.scss"))["default"]]
    })], CommentContainerComponent);
    /***/
  },

  /***/
  "./src/app/components/comment-form/comment-form.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/comment-form/comment-form.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommentFormCommentFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comment-form {\n  padding-bottom: 10px;\n  margin-top: 30px;\n}\n\nh3 {\n  text-shadow: 2px 2px 5px #000000;\n  margin-bottom: 10px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-label {\n  color: white;\n}\n\ninput {\n  caret-color: white;\n}\n\ntextarea {\n  height: 80px;\n  border-radius: 5px;\n  border-style: double;\n  margin-top: 2px !important;\n  padding: 5px !important;\n  caret-color: white;\n}\n\ntextarea .content-invalid {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LWZvcm0vQzpcXFVzZXJzXFxtYWhlYlxcRGVza3RvcFxcQ29kZVxcbXlTaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb21tZW50LWZvcm1cXGNvbW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50LWZvcm0vY29tbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnQtZm9ybSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuaDMge1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAjMDAwMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGNhcmV0LWNvbG9yOndoaXRlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICBtYXJnaW4tdG9wOiAycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBjYXJldC1jb2xvcjp3aGl0ZTtcclxuXHJcbiAgLmNvbnRlbnQtaW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG59XHJcbiIsIi5jb21tZW50LWZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaDMge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dCB7XG4gIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbn1cblxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgY2FyZXQtY29sb3I6IHdoaXRlO1xufVxudGV4dGFyZWEgLmNvbnRlbnQtaW52YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/comment-form/comment-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/comment-form/comment-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CommentFormComponent */

  /***/
  function srcAppComponentsCommentFormCommentFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function () {
      return CommentFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/comment.service */
    "./src/app/services/comment.service.ts");

    var CommentFormComponent = /*#__PURE__*/function () {
      function CommentFormComponent(commentService) {
        _classCallCheck(this, CommentFormComponent);

        this.commentService = commentService;
        this.nameRegEx = '[\\w\\-\\s\\/]+';
      }

      _createClass(CommentFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            authorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.nameRegEx)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            isEmailPublic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true),
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]))
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(inputtedProperties) {
          var propertiesWithDate = this.addDate(inputtedProperties);
          this.commentService.sendCommentProperties(propertiesWithDate);
          this.form.reset(); // add little message box
        }
      }, {
        key: "addDate",
        value: function addDate(properties) {
          var enrichedProperties = properties;
          enrichedProperties.date = new Date().toDateString();
          return enrichedProperties;
        }
      }]);

      return CommentFormComponent;
    }();

    CommentFormComponent.ctorParameters = function () {
      return [{
        type: _services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]
      }];
    };

    CommentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment-form/comment-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment-form.component.scss */
      "./src/app/components/comment-form/comment-form.component.scss"))["default"]]
    })], CommentFormComponent);
    /***/
  },

  /***/
  "./src/app/components/comment/comment.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/comment/comment.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommentCommentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  margin: 0px;\n}\n\nh3 {\n  font-size: 28px;\n  margin-bottom: 5px;\n  margin-top: 12px;\n  text-align: center;\n  text-shadow: 3px 3px 5px #000000;\n}\n\nh4 {\n  margin-top: 8px;\n  margin-bottom: 10px;\n}\n\n.comment-subtitle {\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 5px;\n}\n\n.comment-subtitle .comment-email {\n  font-weight: normal;\n  text-decoration: underline;\n  font-size: 18px;\n}\n\n.comment-subtitle .comment-date {\n  font-weight: normal;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L0M6XFxVc2Vyc1xcbWFoZWJcXERlc2t0b3BcXENvZGVcXG15U2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tbWVudFxcY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FER0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBRElFO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaCB7XHJcbiAgJjMge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDVweCAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgJjQge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb21tZW50LXN1YnRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICAuY29tbWVudC1lbWFpbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAuY29tbWVudC1kYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiIsInAge1xuICBtYXJnaW46IDBweDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA1cHggIzAwMDAwMDtcbn1cbmg0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29tbWVudC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb21tZW50LXN1YnRpdGxlIC5jb21tZW50LWVtYWlsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jb21tZW50LXN1YnRpdGxlIC5jb21tZW50LWRhdGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/comment/comment.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/comment/comment.component.ts ***!
    \*********************************************************/

  /*! exports provided: CommentComponent */

  /***/
  function srcAppComponentsCommentCommentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentComponent", function () {
      return CommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommentComponent = /*#__PURE__*/function () {
      function CommentComponent() {
        _classCallCheck(this, CommentComponent);
      }

      _createClass(CommentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isEmailDisplayed",
        value: function isEmailDisplayed() {
          return this.properties.email && this.properties.isEmailPublic;
        }
      }]);

      return CommentComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CommentComponent.prototype, "properties", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/comment/comment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment.component.scss */
      "./src/app/components/comment/comment.component.scss"))["default"]]
    })], CommentComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/contact/contact.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact {\n  display: block;\n}\n.contact-item {\n  display: flex;\n}\n.contact-item p {\n  margin: 0px;\n}\n.contact-item-icon {\n  line-height: 1.4;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcbWFoZWJcXERlc2t0b3BcXENvZGVcXG15U2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7QUNESjtBREdJO0VBQ0UsV0FBQTtBQ0ROO0FESUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5jb250YWN0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAmLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29udGFjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFjdC1pdGVtIHAge1xuICBtYXJnaW46IDBweDtcbn1cbi5jb250YWN0LWl0ZW0taWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-contact {\n  font-size: 1rem;\n}\n\n.footer {\n  border-radius: 15px 15px 0px 0px;\n  color: #ffffff;\n  background-color: #9c27b0;\n}\n\n.fill-space {\n  flex: auto;\n}\n\n.citation {\n  display: flex;\n}\n\n.citation-img {\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxtYWhlYlxcRGVza3RvcFxcQ29kZVxcbXlTaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXG1haGViXFxEZXNrdG9wXFxDb2RlXFxteVNpdGUvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGdDQUFBO0VBQ0EsY0VKVztFRktYLHlCRVBRO0FETVY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5hcHAtY29udGFjdCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbn1cclxuXHJcbi5maWxsLXNwYWNlIHtcclxuICBmbGV4OiBhdXRvO1xyXG59XHJcblxyXG4uY2l0YXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICYtaW1nIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcblxyXG4gICYtdGV4dCB7XHJcblxyXG4gIH1cclxufVxyXG4iLCJhcHAtY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmZvb3RlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbn1cblxuLmZpbGwtc3BhY2Uge1xuICBmbGV4OiBhdXRvO1xufVxuXG4uY2l0YXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNpdGF0aW9uLWltZyB7XG4gIGhlaWdodDogODBweDtcbn0iLCJcclxuLy8gQ09MT1IgVEhFTUVcclxuJHByaW1hcnk6ICM5YzI3YjA7XHJcbiRzZWNvbmRhcnk6ICMzMDMwMzA7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuLy9HRU5FUkFMIFNJWklOR1xyXG4kaGVhZGVyQmFzZVNpemU6IDEyMHB4O1xyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_static_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/static-content.service */
    "./src/app/services/static-content.service.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(staticContentService) {
        _classCallCheck(this, FooterComponent);

        this.staticContentService = staticContentService;
        this.linkPropertiesArray = [];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.languageObs = this.staticContentService.getLanguageObs();
          this.languageObs.subscribe(function (language) {
            _this2.linkPropertiesArray = _this2.staticContentService.getLinksProperties(language);
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _services_static_content_service__WEBPACK_IMPORTED_MODULE_2__["StaticContentService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n  font-size: 40px;\n  text-shadow: 5px 5px 5px #000000;\n}\n\nmat-toolbar {\n  position: fixed;\n  z-index: 1;\n}\n\n.header {\n  border-radius: 0px 0px 15px 15px;\n  box-shadow: 3px 3px 10px #000000;\n  transition: 0.4s;\n  color: #ffffff;\n  background-color: #9c27b0;\n}\n\n.fill-space {\n  flex: auto;\n}\n\n.top {\n  height: 120px;\n}\n\n.up {\n  height: 70px;\n}\n\n.up .profile-picture {\n  height: 50px;\n}\n\n.down {\n  height: 0px;\n}\n\n.down h1 {\n  margin-bottom: 70px;\n}\n\n.down .language-button {\n  margin-bottom: 70px;\n}\n\n.down .profile-picture {\n  margin-bottom: 110px;\n  height: 50px;\n}\n\n.profile-picture {\n  margin-left: 50px;\n  height: 90px;\n  border-radius: 5px;\n  border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxtYWhlYlxcRGVza3RvcFxcQ29kZVxcbXlTaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXG1haGViXFxEZXNrdG9wXFxDb2RlXFxteVNpdGUvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0ViVztFRmNYLHlCRWhCUTtBRGVWOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsYUVuQmU7QURrQmpCOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBREdFO0VBQ0UsWUFBQTtBQ0RKOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBRElFO0VBQ0UsbUJBQUE7QUNGSjs7QURJRTtFQUNFLG1CQUFBO0FDRko7O0FESUU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDVweCAjMDAwMDAwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjMDAwMDAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcblxyXG4uZmlsbC1zcGFjZSB7XHJcbiAgZmxleDogYXV0bztcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyQmFzZVNpemU7XHJcbn1cclxuXHJcbi51cCB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG5cclxuICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kb3duIHtcclxuICBoZWlnaHQ6IDBweDtcclxuXHJcbiAgaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gIH1cclxuICAubGFuZ3VhZ2UtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgfVxyXG4gIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZmlsZS1waWN0dXJlIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuIiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggNXB4ICMwMDAwMDA7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbn1cblxuLmZpbGwtc3BhY2Uge1xuICBmbGV4OiBhdXRvO1xufVxuXG4udG9wIHtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnVwIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLnVwIC5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5kb3duIHtcbiAgaGVpZ2h0OiAwcHg7XG59XG4uZG93biBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG4uZG93biAubGFuZ3VhZ2UtYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5kb3duIC5wcm9maWxlLXBpY3R1cmUge1xuICBtYXJnaW4tYm90dG9tOiAxMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufSIsIlxyXG4vLyBDT0xPUiBUSEVNRVxyXG4kcHJpbWFyeTogIzljMjdiMDtcclxuJHNlY29uZGFyeTogIzMwMzAzMDtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4vL0dFTkVSQUwgU0laSU5HXHJcbiRoZWFkZXJCYXNlU2l6ZTogMTIwcHg7XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_static_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/static-content.service */
    "./src/app/services/static-content.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(staticContentService) {
        _classCallCheck(this, HeaderComponent);

        this.staticContentService = staticContentService;
        this.state = State.Top;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.scrollObs = this.createScrollObs();
          this.scrollObs.subscribe(function (state) {
            _this3.state = state;
          });
          this.languageObs = this.createLanguageObs();
          this.staticContentService.setLanguageObs(this.languageObs);
          this.languageObs.subscribe(function (language) {
            _this3.properties = _this3.staticContentService.getHeaderProperties(language);
          });
        }
      }, {
        key: "createScrollObs",
        value: function createScrollObs() {
          var _this4 = this;

          var scrollObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return window.pageYOffset;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                yPosBefore = _ref2[0],
                yPosAfter = _ref2[1];

            return _this4.computeState(yPosBefore, yPosAfter);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
          return scrollObs;
        }
      }, {
        key: "createLanguageObs",
        value: function createLanguageObs() {
          var englishObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.querySelector('#englishButton'), 'click');
          var frenchObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.querySelector('#frenchButton'), 'click');
          var mergedObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(englishObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('english')), frenchObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])('french')));
          return mergedObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('english'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
      }, {
        key: "computeState",
        value: function computeState(yPosBefore, yPosAfter) {
          if (yPosAfter === 0) {
            return State.Top;
          } else if (yPosAfter <= yPosBefore) {
            return State.Up;
          } else {
            return State.Down;
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_static_content_service__WEBPACK_IMPORTED_MODULE_4__["StaticContentService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    var State;

    (function (State) {
      State["Top"] = "top";
      State["Up"] = "up";
      State["Down"] = "down";
    })(State || (State = {}));
    /***/

  },

  /***/
  "./src/app/components/intro/intro.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/intro/intro.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsIntroIntroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  margin: 0px;\n}\n\n.intro {\n  padding: 1%;\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9DOlxcVXNlcnNcXG1haGViXFxEZXNrdG9wXFxDb2RlXFxteVNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGludHJvXFxpbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIG1hcmdpbjowcHg7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgcGFkZGluZzoxJTtcclxuICBtYXJnaW46IDElO1xyXG59XHJcbiIsImgyIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pbnRybyB7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/intro/intro.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/intro/intro.component.ts ***!
    \*****************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppComponentsIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_static_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/static-content.service */
    "./src/app/services/static-content.service.ts");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent(staticContentService) {
        _classCallCheck(this, IntroComponent);

        this.staticContentService = staticContentService;
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.languageObs = this.staticContentService.getLanguageObs();
          this.languageObs.subscribe(function (language) {
            _this5.properties = _this5.staticContentService.getIntroProperties(language);
          });
        }
      }]);

      return IntroComponent;
    }();

    IntroComponent.ctorParameters = function () {
      return [{
        type: _services_static_content_service__WEBPACK_IMPORTED_MODULE_2__["StaticContentService"]
      }];
    };

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/intro/intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.scss */
      "./src/app/components/intro/intro.component.scss"))["default"]]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/components/link/link.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/link/link.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLinkLinkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  background-color: #9c27b0;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\nmat-divider {\n  background-color: grey;\n  position: center;\n}\n.image :hover {\n  background-color: #9c10a1;\n  border-radius: 5px 5px 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saW5rL0M6XFxVc2Vyc1xcbWFoZWJcXERlc2t0b3BcXENvZGVcXG15U2l0ZS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpbmsvQzpcXFVzZXJzXFxtYWhlYlxcRGVza3RvcFxcQ29kZVxcbXlTaXRlL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGluay9saW5rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xpbmsvQzpcXFVzZXJzXFxtYWhlYlxcRGVza3RvcFxcQ29kZVxcbXlTaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsaW5rXFxsaW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBR0E7RUFDRSxZQUFBO0VBQ0EseUJDSFE7QUNFVjtBRklBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0FFREY7QUZJQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUVERjtBQ1hFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBRGNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saW5rL2xpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5tYXQtZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbiIsIlxyXG4vLyBDT0xPUiBUSEVNRVxyXG4kcHJpbWFyeTogIzljMjdiMDtcclxuJHNlY29uZGFyeTogIzMwMzAzMDtcclxuJHRleHQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4vL0dFTkVSQUwgU0laSU5HXHJcbiRoZWFkZXJCYXNlU2l6ZTogMTIwcHg7XHJcblxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmltYWdlIDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzEwYTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4uaW1hZ2Uge1xyXG4gIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMxMGExO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/link/link.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/link/link.component.ts ***!
    \***************************************************/

  /*! exports provided: LinkComponent */

  /***/
  function srcAppComponentsLinkLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkComponent", function () {
      return LinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LinkComponent = /*#__PURE__*/function () {
      function LinkComponent() {
        _classCallCheck(this, LinkComponent);
      }

      _createClass(LinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LinkComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LinkComponent.prototype, "properties", void 0);
    LinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-link',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./link.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/link/link.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./link.component.scss */
      "./src/app/components/link/link.component.scss"))["default"]]
    })], LinkComponent);
    /***/
  },

  /***/
  "./src/app/components/section-container/section-container.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/section-container/section-container.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSectionContainerSectionContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi1jb250YWluZXIvc2VjdGlvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/section-container/section-container.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/section-container/section-container.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SectionContainerComponent */

  /***/
  function srcAppComponentsSectionContainerSectionContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionContainerComponent", function () {
      return SectionContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_static_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/static-content.service */
    "./src/app/services/static-content.service.ts");

    var SectionContainerComponent = /*#__PURE__*/function () {
      function SectionContainerComponent(staticContentService) {
        _classCallCheck(this, SectionContainerComponent);

        this.staticContentService = staticContentService;
        this.propertiesArray = [];
      }

      _createClass(SectionContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.languageObs = this.staticContentService.getLanguageObs();
          this.languageObs.subscribe(function (language) {
            _this6.propertiesArray = _this6.staticContentService.getSectionsProperties(language);
          });
        }
      }]);

      return SectionContainerComponent;
    }();

    SectionContainerComponent.ctorParameters = function () {
      return [{
        type: _services_static_content_service__WEBPACK_IMPORTED_MODULE_2__["StaticContentService"]
      }];
    };

    SectionContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-section-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./section-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section-container/section-container.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./section-container.component.scss */
      "./src/app/components/section-container/section-container.component.scss"))["default"]]
    })], SectionContainerComponent);
    /***/
  },

  /***/
  "./src/app/components/section/section.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/section/section.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSectionSectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\n  display: block;\n}\n\n.section {\n  color: #ffffff !important;\n  background-color: #9c27b0;\n  box-shadow: 0px 5px 10px black;\n}\n\n.mat-expansion-panel-spacing {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL0M6XFxVc2Vyc1xcbWFoZWJcXERlc2t0b3BcXENvZGVcXG15U2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VjdGlvblxcc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdGlvbi9DOlxcVXNlcnNcXG1haGViXFxEZXNrdG9wXFxDb2RlXFxteVNpdGUvc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EseUJFTlE7RUZPUiw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsU0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5wIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCBibGFjaztcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsInAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlY3Rpb24ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggYmxhY2s7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmcge1xuICBtYXJnaW46IDA7XG59IiwiXHJcbi8vIENPTE9SIFRIRU1FXHJcbiRwcmltYXJ5OiAjOWMyN2IwO1xyXG4kc2Vjb25kYXJ5OiAjMzAzMDMwO1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbi8vR0VORVJBTCBTSVpJTkdcclxuJGhlYWRlckJhc2VTaXplOiAxMjBweDtcclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/section/section.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/section/section.component.ts ***!
    \*********************************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppComponentsSectionSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent() {
        _classCallCheck(this, SectionComponent);
      }

      _createClass(SectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick(event) {
          console.log(event);
        }
      }]);

      return SectionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SectionComponent.prototype, "properties", void 0);
    SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-section',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/section/section.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./section.component.scss */
      "./src/app/components/section/section.component.scss"))["default"]]
    })], SectionComponent);
    /***/
  },

  /***/
  "./src/app/modules/material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/modules/material.module.ts ***!
    \********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppModulesMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/services/comment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/comment.service.ts ***!
    \*********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppServicesCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CommentService = /*#__PURE__*/function () {
      function CommentService(socket) {
        _classCallCheck(this, CommentService);

        this.socket = socket;
        this.commentArray = [];
        this.commentObs = this.createCommentObs();
      }

      _createClass(CommentService, [{
        key: "getCommentObservable",
        value: function getCommentObservable() {
          return this.commentObs;
        }
      }, {
        key: "sendCommentProperties",
        value: function sendCommentProperties(commentProperties) {
          this.socket.emit('newComment', commentProperties);
        }
      }, {
        key: "createCommentObs",
        value: function createCommentObs() {
          var connectionObs = this.createConnectionObs();
          var addCommentObs = this.createAddCommentObs();
          var deleteCommentObs = this.createDeleteCommentObs();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(connectionObs, addCommentObs, deleteCommentObs);
        }
      }, {
        key: "createConnectionObs",
        value: function createConnectionObs() {
          var _this7 = this;

          var connectionObs = this.createSocketObservableFrom('connection').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (commentProperties) {
            commentProperties.forEach(function (commentProperty) {
              _this7.addCommentToArray(commentProperty);
            });
            return _this7.commentArray;
          }));
          return connectionObs;
        }
      }, {
        key: "createAddCommentObs",
        value: function createAddCommentObs() {
          var _this8 = this;

          var addCommentObs = this.createSocketObservableFrom('addComment').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (newCommentProperty) {
            _this8.addCommentToArray(newCommentProperty);

            return _this8.commentArray;
          }));
          return addCommentObs;
        }
      }, {
        key: "createDeleteCommentObs",
        value: function createDeleteCommentObs() {
          var _this9 = this;

          var deleteCommentObs = this.createSocketObservableFrom('deleteComment').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (commentPropertyToDelete) {
            _this9.deleteCommentFromArray(commentPropertyToDelete);

            return _this9.commentArray;
          }));
          return deleteCommentObs;
        }
      }, {
        key: "createSocketObservableFrom",
        value: function createSocketObservableFrom(eventName) {
          return this.socket.fromEvent(eventName);
        }
      }, {
        key: "addCommentToArray",
        value: function addCommentToArray(commentProperties) {
          this.commentArray.push(commentProperties);
        }
      }, {
        key: "deleteCommentFromArray",
        value: function deleteCommentFromArray(commentProperties) {
          var commentIndex = this.commentArray.indexOf(commentProperties);

          if (commentIndex > -1) {
            this.commentArray.slice(commentIndex, 1);
          } else {
            console.error('Wrong deleteComment query received : No such comment in commentArray', commentProperties);
          }
        }
      }]);

      return CommentService;
    }();

    CommentService.ctorParameters = function () {
      return [{
        type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
      }];
    };

    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommentService);
    /***/
  },

  /***/
  "./src/app/services/static-content.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/static-content.service.ts ***!
    \****************************************************/

  /*! exports provided: StaticContentService */

  /***/
  function srcAppServicesStaticContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticContentService", function () {
      return StaticContentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_english_content_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/english-content.json */
    "./src/assets/english-content.json");

    var _assets_english_content_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/english-content.json */
    "./src/assets/english-content.json", 1);
    /* harmony import */


    var _assets_french_content_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../assets/french-content.json */
    "./src/assets/french-content.json");

    var _assets_french_content_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/french-content.json */
    "./src/assets/french-content.json", 1);

    var StaticContentService = /*#__PURE__*/function () {
      function StaticContentService() {
        _classCallCheck(this, StaticContentService);

        this.content = {
          english: _assets_english_content_json__WEBPACK_IMPORTED_MODULE_2__,
          french: _assets_french_content_json__WEBPACK_IMPORTED_MODULE_3__
        };
      }

      _createClass(StaticContentService, [{
        key: "setLanguageObs",
        value: function setLanguageObs(languageObs) {
          this.languageObs = languageObs;
        }
      }, {
        key: "getLanguageObs",
        value: function getLanguageObs() {
          return this.languageObs;
        }
      }, {
        key: "getHeaderProperties",
        value: function getHeaderProperties(language) {
          return this.content[language].header;
        }
      }, {
        key: "getIntroProperties",
        value: function getIntroProperties(language) {
          return this.content[language].intro;
        }
      }, {
        key: "getSectionsProperties",
        value: function getSectionsProperties(language) {
          return this.content[language].sections;
        }
      }, {
        key: "getLinksProperties",
        value: function getLinksProperties(language) {
          return this.content[language].links;
        }
      }]);

      return StaticContentService;
    }();

    StaticContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StaticContentService);
    /***/
  },

  /***/
  "./src/assets/english-content.json":
  /*!*****************************************!*\
    !*** ./src/assets/english-content.json ***!
    \*****************************************/

  /*! exports provided: header, sections, links, intro, default */

  /***/
  function srcAssetsEnglishContentJson(module) {
    module.exports = JSON.parse("{\"header\":{\"title\":\"My Angular Resume\"},\"sections\":[{\"label\":\"Label0\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label1\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label2\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label3\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label4\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]}],\"links\":[{\"label\":\"GitHub\",\"imageUrl\":\"../../assets/github.png\",\"address\":\"https://github.com/BaptisteMahe\"},{\"label\":\"LinkedIn\",\"imageUrl\":\"../../assets/linkedin.png\",\"address\":\"https://www.linkedin.com/in/baptiste-mah%C3%A9-95b425180/\"},{\"label\":\"Resume\",\"imageUrl\":\"../../assets/download.png\",\"address\":\"../../assets/resume.pdf\"}],\"intro\":{\"label\":\"INTRODUCTION IN ENGLISH\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]}}");
    /***/
  },

  /***/
  "./src/assets/french-content.json":
  /*!****************************************!*\
    !*** ./src/assets/french-content.json ***!
    \****************************************/

  /*! exports provided: header, sections, links, intro, default */

  /***/
  function srcAssetsFrenchContentJson(module) {
    module.exports = JSON.parse("{\"header\":{\"title\":\"Mon CV Angular\"},\"sections\":[{\"label\":\"Label0\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label1\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label2\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label3\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]},{\"label\":\"Label4\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]}],\"links\":[{\"label\":\"GitHub\",\"imageUrl\":\"../../assets/github.png\",\"address\":\"https://github.com/BaptisteMahe\"},{\"label\":\"LinkedIn\",\"imageUrl\":\"../../assets/linkedin.png\",\"address\":\"https://www.linkedin.com/in/baptiste-mah%C3%A9-95b425180/\"},{\"label\":\"Resume\",\"imageUrl\":\"../../assets/download.png\",\"address\":\"../../assets/resume.pdf\"}],\"intro\":{\"label\":\"INTRODUCTION EN FRANÇAIS\",\"imageUrl\":\"../../assets/img-example.png\",\"content\":[{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"},{\"paragraph\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ut sapien ac porttitor.\"}]}}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\maheb\Desktop\Code\mySite\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map