(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\portd\Documents\Prueba-Kubbo\tracking-service-master\tracking-web\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(translateService) {
          _classCallCheck(this, HeaderComponent);

          this.translateService = translateService;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLang",
          value: function changeLang(lang) {
            this.translateService.use(lang);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 0,
        consts: [[1, "header_container"], [1, "image_container"], ["href", "https://kubbo.io"], ["src", "https://kubbo.io/wp-content/uploads/2019/08/logo-140.svg", "alt", "logo"], [1, "select"], [3, "change"], ["lang", ""], ["value", "en"], ["value", "es"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              return ctx.changeLang(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " en ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " es ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        styles: [".header_container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: var(--primary-color);\n  height: 54px;\n}\n\n.image_container[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n\n.select[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbn1cclxuXHJcbi5pbWFnZV9jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7SbY":
    /*!********************************************!*\
      !*** ./src/app/services/stocks.service.ts ***!
      \********************************************/

    /*! exports provided: StocksService */

    /***/
    function SbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StocksService", function () {
        return StocksService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configuration_Properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../configuration/Properties */
      "q2XK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StocksService = /*#__PURE__*/function () {
        function StocksService(http) {
          _classCallCheck(this, StocksService);

          this.http = http;
        }

        _createClass(StocksService, [{
          key: "getStocks",
          value: function getStocks(idProduct) {
            return this.http.get(_configuration_Properties__WEBPACK_IMPORTED_MODULE_1__["stocksUrl"] + '?idProduct=' + idProduct);
          }
        }, {
          key: "createStock",
          value: function createStock(stock) {
            return this.http.post(_configuration_Properties__WEBPACK_IMPORTED_MODULE_1__["stocksUrl"], stock);
          }
        }]);

        return StocksService;
      }();

      StocksService.ɵfac = function StocksService_Factory(t) {
        return new (t || StocksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      StocksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StocksService,
        factory: StocksService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StocksService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "A0PU":
    /*!************************************************!*\
      !*** ./src/app/services/warehouses.service.ts ***!
      \************************************************/

    /*! exports provided: WarehousesService */

    /***/
    function A0PU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarehousesService", function () {
        return WarehousesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configuration_Properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../configuration/Properties */
      "q2XK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var WarehousesService = /*#__PURE__*/function () {
        function WarehousesService(http) {
          _classCallCheck(this, WarehousesService);

          this.http = http;
        }

        _createClass(WarehousesService, [{
          key: "getWarehouses",
          value: function getWarehouses() {
            return this.http.get(_configuration_Properties__WEBPACK_IMPORTED_MODULE_1__["warehousesUrl"]);
          }
        }]);

        return WarehousesService;
      }();

      WarehousesService.ɵfac = function WarehousesService_Factory(t) {
        return new (t || WarehousesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      WarehousesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WarehousesService,
        factory: WarehousesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarehousesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ay6/":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/views/product-details/product-details.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function Ay6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../model/product */
      "q0+M");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/storage.service */
      "n90K");
      /* harmony import */


      var _services_stocks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/stocks.service */
      "7SbY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ProductDetailsComponent_mat_table_23_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "productDetails.idStock"), " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13._id, " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "productDetails.quantity"), " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14._quantity, " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "productDetails.status"), " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15._status, " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "productDetails.warehouse"), " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16._nameWarehouse, " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "productDetails.city"), " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17._cityWarehouse, " ");
        }
      }

      function ProductDetailsComponent_mat_table_23_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      function ProductDetailsComponent_mat_table_23_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
        }
      }

      function ProductDetailsComponent_mat_table_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-table", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_mat_table_23_th_2_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_mat_table_23_td_3_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailsComponent_mat_table_23_th_5_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailsComponent_mat_table_23_td_6_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailsComponent_mat_table_23_th_8_Template, 3, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductDetailsComponent_mat_table_23_td_9_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductDetailsComponent_mat_table_23_th_11_Template, 4, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailsComponent_mat_table_23_td_12_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductDetailsComponent_mat_table_23_th_14_Template, 4, 3, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductDetailsComponent_mat_table_23_td_15_Template, 2, 1, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductDetailsComponent_mat_table_23_tr_16_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductDetailsComponent_mat_table_23_tr_17_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
        }
      }

      var _c0 = function _c0() {
        return ["/newStock"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(route, storageService, stockService, location) {
          _classCallCheck(this, ProductDetailsComponent);

          this.route = route;
          this.storageService = storageService;
          this.stockService = stockService;
          this.location = location;
          this.product = new _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
          this.idProduct = {};
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          this.displayedColumns = ['id', 'quantity', 'status', 'nameWarehouse', 'cityWarehouse'];
        }

        _createClass(ProductDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProduct();
            this.loadDataSource();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.queryParamsSubscriptor !== null && typeof this.queryParamsSubscriptor !== 'undefined') {
              this.queryParamsSubscriptor.unsubscribe();
            }

            if (this.stocksSubscription !== null && typeof this.stocksSubscription !== 'undefined') {
              this.stocksSubscription.unsubscribe();
            }
          }
        }, {
          key: "getProduct",
          value: function getProduct() {
            var _this = this;

            this.queryParamsSubscriptor = this.route.queryParams.subscribe(function (params) {
              var products = _this.storageService.products;

              if (params['id']) {
                for (var i = 0; i < products.length; i++) {
                  var product = products[i];

                  if (params['id'] == product._id) {
                    _this.product = product;
                    _this.idProduct = {
                      idProduct: product._id
                    };
                  }
                }
              }
            });
          }
        }, {
          key: "loadDataSource",
          value: function loadDataSource() {
            var _this2 = this;

            this.stocksSubscription = this.stockService.getStocks(this.product._id).subscribe(function (response) {
              if (response) {
                _this2.stocks = response;
                _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this2.stocks);
                _this2.dataSource.paginator = _this2.paginator;
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stocks_service__WEBPACK_IMPORTED_MODULE_6__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]));
      };

      ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        viewQuery: function ProductDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 25,
        vars: 23,
        consts: [[1, "example-card"], [1, "fa", "fa-arrow-left", 3, "click"], [1, "imageContainer"], ["mat-card-image", "", "alt", "Product photo", 3, "src"], [3, "routerLink", "queryParams"], [1, "mat-elevation-z8"], [3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "status"], ["matColumnDef", "nameWarehouse"], ["matColumnDef", "cityWarehouse"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "fa", "fa-warehouse"], [1, "fa", "fa-city"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_i_click_3_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductDetailsComponent_mat_table_23_Template, 18, 3, "mat-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-paginator", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product._name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product._image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, "productDetails.sku"), ": ", ctx.product._sku, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, "productDetails.barcode"), ": ", ctx.product._barcode, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, "productDetails.price"), ": ", ctx.product._price, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("queryParams", ctx.idProduct);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 19, "productDetails.addNew"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardImage"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: var(--primary-color);\n  margin: 1em;\n}\nmat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  cursor: pointer;\n}\nmat-card[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\nmat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\nmat-card[_ngcontent-%COMP%]   .imageContainer[_ngcontent-%COMP%] {\n  width: 25%;\n  padding: 2em;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\nmat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  display: table;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n  padding: 2em;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  margin: auto;\n  border: none;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin: auto;\n  border: none;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUVRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBQVo7QUFJSTtFQUNJLDJCQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBSFI7QUFNSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUhBQUE7RUFDQSxrQkFBQTtBQUpSO0FBVUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFQSjtBQVNJO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFQUjtBQVNRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFQWjtBQVVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFSWjtBQWFBO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0FBVkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcblxyXG4gICAgbWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlQ29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5tYXQtdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcblxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
          }, {
            type: _services_stocks_service__WEBPACK_IMPORTED_MODULE_6__["StocksService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "HhaY":
    /*!**********************************************************!*\
      !*** ./src/app/services/translation-resolver.service.ts ***!
      \**********************************************************/

    /*! exports provided: TranslationResolverService */

    /***/
    function HhaY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationResolverService", function () {
        return TranslationResolverService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TranslationResolverService = /*#__PURE__*/function () {
        function TranslationResolverService(translateService) {
          _classCallCheck(this, TranslationResolverService);

          this.translateService = translateService;
          this.lang = 'en';
        }

        _createClass(TranslationResolverService, [{
          key: "resolve",
          value: function resolve() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.translateService.setDefaultLang(this.lang);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setLang",
          value: function setLang(lang) {
            this.lang = lang;
            this.translateService.use(lang);
          }
        }]);

        return TranslationResolverService;
      }();

      TranslationResolverService.ɵfac = function TranslationResolverService_Factory(t) {
        return new (t || TranslationResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      };

      TranslationResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TranslationResolverService,
        factory: TranslationResolverService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslationResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "I2OZ":
    /*!*****************************************************************!*\
      !*** ./src/app/components/new-product/new-product.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NewProductComponent */

    /***/
    function I2OZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewProductComponent", function () {
        return NewProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../model/product */
      "q0+M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/products.service */
      "S3Px");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function NewProductComponent_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.error.name"));
        }
      }

      function NewProductComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.error.sku"));
        }
      }

      function NewProductComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.error.barcode"));
        }
      }

      function NewProductComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.error.price"));
        }
      }

      function NewProductComponent_mat_error_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.error.image"));
        }
      }

      var NewProductComponent = /*#__PURE__*/function () {
        function NewProductComponent(productsService, formBuilder, _snackBar) {
          _classCallCheck(this, NewProductComponent);

          this.productsService = productsService;
          this.formBuilder = formBuilder;
          this._snackBar = _snackBar;
          this.newProductAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(NewProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.productsSubscription !== null && typeof this.productsSubscription !== 'undefined') {
              this.productsSubscription.unsubscribe();
            }
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.formGroup = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              sku: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              barcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "addProduct",
          value: function addProduct(formValues) {
            var _this3 = this;

            var product = this.createProduct(formValues);
            this.productsSubscription = this.productsService.createProduct(product).subscribe(function (response) {
              if (response) {
                _this3.newProductAdded.emit();

                _this3.openSnackBar('Product Added', 'Close');
              }
            }, function (error) {
              _this3.openSnackBar('Error adding the product', 'Close');
            });
          }
        }, {
          key: "createProduct",
          value: function createProduct(formValues) {
            var product = new _model_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();

            if (formValues['name']) {
              product.name = formValues['name'];
            }

            if (formValues['sku']) {
              product.sku = formValues['sku'];
            }

            if (formValues['barcode']) {
              product.barcode = formValues['barcode'];
            }

            if (formValues['image']) {
              product.image = formValues['image'];
            }

            if (formValues['price']) {
              product.price = formValues['price'];
            }

            product.enabled = false;
            return product;
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "name",
          get: function get() {
            return this.formGroup.get('name');
          }
        }, {
          key: "sku",
          get: function get() {
            return this.formGroup.get('sku');
          }
        }, {
          key: "barcode",
          get: function get() {
            return this.formGroup.get('barcode');
          }
        }, {
          key: "image",
          get: function get() {
            return this.formGroup.get('image');
          }
        }, {
          key: "price",
          get: function get() {
            return this.formGroup.get('price');
          }
        }]);

        return NewProductComponent;
      }();

      NewProductComponent.ɵfac = function NewProductComponent_Factory(t) {
        return new (t || NewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
      };

      NewProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewProductComponent,
        selectors: [["app-new-product"]],
        outputs: {
          newProductAdded: "newProductAdded"
        },
        decls: 39,
        vars: 24,
        consts: [[3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "id", "name", "type", "text", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "id", "sku", "type", "text", "formControlName", "sku"], ["matInput", "", "id", "barcode", "type", "text", "formControlName", "barcode"], ["matInput", "", "id", "price", "type", "text", "formControlName", "price"], ["matInput", "", "id", "image", "type", "text", "formControlName", "image"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
        template: function NewProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewProductComponent_Template_form_ngSubmit_0_listener() {
              return ctx.addProduct(ctx.formGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewProductComponent_mat_error_7_Template, 3, 3, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewProductComponent_mat_error_14_Template, 3, 3, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NewProductComponent_mat_error_21_Template, 3, 3, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NewProductComponent_mat_error_28_Template, 3, 3, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NewProductComponent_mat_error_35_Template, 3, 3, "mat-error", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, "products.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "products.sku"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sku.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "products.barcode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.barcode.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, "products.price"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.price.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 20, "products.image"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 22, "products.addButton"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: ["form[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary-color) !important;\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n  padding: 2em;\n}\nform[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcHJvZHVjdC9uZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLDJCQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-product',
            templateUrl: './new-product.component.html',
            styleUrls: ['./new-product.component.scss']
          }]
        }], function () {
          return [{
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }];
        }, {
          newProductAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Pni8":
    /*!********************************!*\
      !*** ./src/app/model/stock.ts ***!
      \********************************/

    /*! exports provided: Stock */

    /***/
    function Pni8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Stock", function () {
        return Stock;
      });

      var Stock = /*#__PURE__*/function () {
        function Stock() {
          _classCallCheck(this, Stock);
        }

        _createClass(Stock, [{
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }, {
          key: "quantity",
          get: function get() {
            return this._quantity;
          },
          set: function set(quantity) {
            this._quantity = quantity;
          }
        }, {
          key: "status",
          get: function get() {
            return this._status;
          },
          set: function set(status) {
            this._status = status;
          }
        }, {
          key: "idProduct",
          get: function get() {
            return this._idProduct;
          },
          set: function set(idProduct) {
            this._idProduct = idProduct;
          }
        }, {
          key: "idWarehouse",
          get: function get() {
            return this._idWarehouse;
          },
          set: function set(idWarehouse) {
            this._idWarehouse = idWarehouse;
          }
        }, {
          key: "nameWarehouse",
          get: function get() {
            return this._nameWarehouse;
          },
          set: function set(nameWarehouse) {
            this._nameWarehouse = nameWarehouse;
          }
        }, {
          key: "cityWarehouse",
          get: function get() {
            return this._cityWarehouse;
          },
          set: function set(cityWarehouse) {
            this._cityWarehouse = cityWarehouse;
          }
        }]);

        return Stock;
      }();
      /***/

    },

    /***/
    "S3Px":
    /*!**********************************************!*\
      !*** ./src/app/services/products.service.ts ***!
      \**********************************************/

    /*! exports provided: ProductsService */

    /***/
    function S3Px(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _configuration_Properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../configuration/Properties */
      "q2XK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductsService = /*#__PURE__*/function () {
        function ProductsService(http) {
          _classCallCheck(this, ProductsService);

          this.http = http;
        }

        _createClass(ProductsService, [{
          key: "getProducts",
          value: function getProducts() {
            return this.http.get(_configuration_Properties__WEBPACK_IMPORTED_MODULE_1__["productsUrl"]);
          }
        }, {
          key: "createProduct",
          value: function createProduct(product) {
            return this.http.post(_configuration_Properties__WEBPACK_IMPORTED_MODULE_1__["productsUrl"], product);
          }
        }]);

        return ProductsService;
      }();

      ProductsService.ɵfac = function ProductsService_Factory(t) {
        return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductsService,
        factory: ProductsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "mat-app-background"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".kubbo-alert[_ngcontent-%COMP%] {\n    color: var(--primary-color);\n    border-color: var(--primary-color);\n    background-color: var(--secondary-color);\n}\n\nimg[_ngcontent-%COMP%] {\n    width: 3em;\n    height: auto;\n}\n\nh2[_ngcontent-%COMP%] {\n    color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua3ViYm8tYWxlcnQge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDNlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmgyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "TgNW":
    /*!*****************************************************************!*\
      !*** ./src/app/components/views/products/products.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function TgNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/animations */
      "xDih");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/products.service */
      "S3Px");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/storage.service */
      "n90K");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../new-product/new-product.component */
      "I2OZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ProductsComponent_mat_table_1_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.id"), " ");
        }
      }

      function ProductsComponent_mat_table_1_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15._id, " ");
        }
      }

      function ProductsComponent_mat_table_1_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.name"), " ");
        }
      }

      function ProductsComponent_mat_table_1_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16._name, " ");
        }
      }

      function ProductsComponent_mat_table_1_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.sku"), " ");
        }
      }

      function ProductsComponent_mat_table_1_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17._sku, " ");
        }
      }

      function ProductsComponent_mat_table_1_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.barcode"), " ");
        }
      }

      function ProductsComponent_mat_table_1_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18._barcode, " ");
        }
      }

      function ProductsComponent_mat_table_1_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "products.price"), " ");
        }
      }

      function ProductsComponent_mat_table_1_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19._price, " ");
        }
      }

      function ProductsComponent_mat_table_1_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
        }
      }

      var _c0 = function _c0() {
        return ["/productDetails"];
      };

      var _c1 = function _c1(a0) {
        return {
          id: a0
        };
      };

      function ProductsComponent_mat_table_1_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, element_r20._id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "products.seeDetails"));
        }
      }

      function ProductsComponent_mat_table_1_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      function ProductsComponent_mat_table_1_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function ProductsComponent_mat_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_mat_table_1_th_2_Template, 3, 3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsComponent_mat_table_1_td_3_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsComponent_mat_table_1_th_5_Template, 3, 3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsComponent_mat_table_1_td_6_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsComponent_mat_table_1_th_8_Template, 3, 3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductsComponent_mat_table_1_td_9_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductsComponent_mat_table_1_th_11_Template, 3, 3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductsComponent_mat_table_1_td_12_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductsComponent_mat_table_1_th_14_Template, 3, 3, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductsComponent_mat_table_1_td_15_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductsComponent_mat_table_1_th_17_Template, 1, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductsComponent_mat_table_1_td_18_Template, 4, 8, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductsComponent_mat_table_1_tr_19_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductsComponent_mat_table_1_tr_20_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
        }
      }

      var _c2 = function _c2() {
        return [5, 10, 20];
      };

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent(productsService, storageService) {
          _classCallCheck(this, ProductsComponent);

          this.productsService = productsService;
          this.storageService = storageService;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
          this.displayedColumns = ['id', 'name', 'sku', 'barcode', 'price', 'goToDetails'];
          this.showNewProduct = false;
          this.textShowHide = 'ADD NEW PRODUCT';
          this.state = 'default';
          this.stateHidden = 'hidden';
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDataSource();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.productsSubscription !== null && typeof this.productsSubscription !== 'undefined') {
              this.productsSubscription.unsubscribe();
            }
          }
        }, {
          key: "loadDataSource",
          value: function loadDataSource() {
            var _this4 = this;

            this.productsSubscription = this.productsService.getProducts().subscribe(function (response) {
              if (response) {
                _this4.products = response;
                _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this4.products);
                _this4.dataSource.paginator = _this4.paginator;
                _this4.storageService.products = response;
              }
            });
          }
        }, {
          key: "newProductAdded",
          value: function newProductAdded() {
            this.showHideNewProduct();
            this.loadDataSource();
          }
        }, {
          key: "showHideNewProduct",
          value: function showHideNewProduct() {
            this.rotateAndShow();
            this.showNewProduct = !this.showNewProduct;
          }
        }, {
          key: "rotateAndShow",
          value: function rotateAndShow() {
            this.state = this.state === 'default' ? 'rotated' : 'default';
            this.stateHidden = this.stateHidden === 'hidden' ? 'shown' : 'hidden';
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]));
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        viewQuery: function ProductsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 10,
        vars: 8,
        consts: [[1, "mat-elevation-z8"], [3, "dataSource", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "add-product", 3, "click"], [1, "fa", "fa-arrow-down"], [3, "newProductAdded"], [3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "sku"], ["matColumnDef", "barcode"], ["matColumnDef", "price"], ["matColumnDef", "goToDetails"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "routerLink", "queryParams"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_mat_table_1_Template, 21, 3, "mat-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-paginator", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_3_listener() {
              return ctx.showHideNewProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-new-product", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newProductAdded", function ProductsComponent_Template_app_new_product_newProductAdded_9_listener() {
              return ctx.newProductAdded();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "products.addNew"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rotatedState", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", ctx.stateHidden);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_7__["NewProductComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: ["mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  display: table;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n  padding: 2em;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n}\nmat-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\nmat-paginator[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n}\n.add-product[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  display: flex;\n  justify-content: flex-start;\n  height: 36px;\n  padding: 0.5em;\n  cursor: pointer;\n}\n.add-product[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f2f4f5;\n  line-height: 16px;\n}\n.add-product[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: auto 0 auto 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUVJO0VBQ0UsWUFBQTtBQUFOO0FBQ007RUFDRSwyQkFBQTtBQUNSO0FBS0E7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7QUFGRjtBQUtBO0VBQ0Usc0NBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFIRjtBQUtFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSEo7QUFNRTtFQUNFLHVCQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuXHJcbiAgdHIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmFkZC1wcm9kdWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogI2YyZjRmNTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDFlbTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"],
        data: {
          animation: [_utils_animations__WEBPACK_IMPORTED_MODULE_2__["Animations"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss'],
            animations: [_utils_animations__WEBPACK_IMPORTED_MODULE_2__["Animations"]]
          }]
        }], function () {
          return [{
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
          }, {
            type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _components_views_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/views/products/products.component */
      "TgNW");
      /* harmony import */


      var _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/new-product/new-product.component */
      "I2OZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/views/product-details/product-details.component */
      "Ay6/");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _components_views_new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/views/new-stock/new-stock.component */
      "aFxV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
            useFactory: function useFactory(http) {
              return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__["TranslateHttpLoader"](http);
            },
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_views_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__["NewProductComponent"], _components_views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _components_views_new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_16__["NewStockComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_views_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"], _components_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_8__["NewProductComponent"], _components_views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"], _components_views_new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_16__["NewStockComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
                useFactory: function useFactory(http) {
                  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__["TranslateHttpLoader"](http);
                },
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
              }
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aFxV":
    /*!*******************************************************************!*\
      !*** ./src/app/components/views/new-stock/new-stock.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NewStockComponent */

    /***/
    function aFxV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewStockComponent", function () {
        return NewStockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _model_stock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../model/stock */
      "Pni8");
      /* harmony import */


      var _services_stocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/stocks.service */
      "7SbY");
      /* harmony import */


      var _services_warehouses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/warehouses.service */
      "A0PU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function NewStockComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "addStock.error.quantity"));
        }
      }

      function NewStockComponent_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "addStock.error.status"));
        }
      }

      function NewStockComponent_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var warehouse_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", warehouse_r4._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", warehouse_r4._name, " ");
        }
      }

      function NewStockComponent_mat_error_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "addStock.error.warehouse"));
        }
      }

      var NewStockComponent = /*#__PURE__*/function () {
        function NewStockComponent(formBuilder, stocksService, warehouseService, route, location, _snackBar) {
          _classCallCheck(this, NewStockComponent);

          this.formBuilder = formBuilder;
          this.stocksService = stocksService;
          this.warehouseService = warehouseService;
          this.route = route;
          this.location = location;
          this._snackBar = _snackBar;
          this.warehouses = [];
        }

        _createClass(NewStockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.getWarehouses();
            this.initForm();
            this.queryParamsSubscriptor = this.route.queryParams.subscribe(function (params) {
              if (params['idProduct']) {
                _this5.idProduct = params['idProduct'];
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.stocksSubscription !== null && typeof this.stocksSubscription !== 'undefined') {
              this.stocksSubscription.unsubscribe();
            }

            if (this.queryParamsSubscriptor !== null && typeof this.queryParamsSubscriptor !== 'undefined') {
              this.queryParamsSubscriptor.unsubscribe();
            }

            if (this.warehousesSubscription !== null && typeof this.warehousesSubscription !== 'undefined') {
              this.warehousesSubscription.unsubscribe();
            }
          }
        }, {
          key: "getWarehouses",
          value: function getWarehouses() {
            var _this6 = this;

            this.warehousesSubscription = this.warehouseService.getWarehouses().subscribe(function (response) {
              if (response) {
                _this6.warehouses = response;
              }
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.formGroup = this.formBuilder.group({
              quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              warehouse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "addStock",
          value: function addStock(formValues) {
            var _this7 = this;

            var stock = this.createStock(formValues);
            this.stocksSubscription = this.stocksService.createStock(stock).subscribe(function (response) {
              if (response) {
                _this7.openSnackBar('Stock Added', 'Close');
              }
            }, function (error) {
              _this7.openSnackBar('Error adding the stock', 'Close');
            });
          }
        }, {
          key: "createStock",
          value: function createStock(formValues) {
            var stock = new _model_stock__WEBPACK_IMPORTED_MODULE_2__["Stock"]();

            if (formValues['quantity']) {
              stock.quantity = formValues['quantity'];
            }

            if (formValues['status']) {
              stock.status = formValues['status'];
            }

            if (formValues['warehouse']) {
              stock.idWarehouse = formValues['warehouse'];
            }

            stock.idProduct = this.idProduct;
            return stock;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 2000
            });
          }
        }, {
          key: "quantity",
          get: function get() {
            return this.formGroup.get('quantity');
          }
        }, {
          key: "status",
          get: function get() {
            return this.formGroup.get('status');
          }
        }, {
          key: "warehouse",
          get: function get() {
            return this.formGroup.get('warehouse');
          }
        }]);

        return NewStockComponent;
      }();

      NewStockComponent.ɵfac = function NewStockComponent_Factory(t) {
        return new (t || NewStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stocks_service__WEBPACK_IMPORTED_MODULE_3__["StocksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warehouses_service__WEBPACK_IMPORTED_MODULE_4__["WarehousesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
      };

      NewStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewStockComponent,
        selectors: [["app-new-stock"]],
        decls: 36,
        vars: 17,
        consts: [[1, "fa", "fa-arrow-left", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "id", "quantity", "type", "text", "formControlName", "quantity"], [4, "ngIf"], ["formControlName", "status"], ["value", "Available"], ["value", "Damaged"], ["value", "Sold"], ["formControlName", "warehouse"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [3, "value"]],
        template: function NewStockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewStockComponent_Template_i_click_1_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewStockComponent_Template_form_ngSubmit_5_listener() {
              return ctx.addStock(ctx.formGroup.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewStockComponent_mat_error_12_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Available ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Damaged ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sold ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewStockComponent_mat_error_25_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NewStockComponent_mat_option_32_Template, 2, 2, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NewStockComponent_mat_error_33_Template, 3, 3, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "addStock.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "addStock.quantity"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quantity.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "addStock.status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 15, "addStock.warehouse"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.warehouses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warehouse.invalid);
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n  font-size: 1.8rem;\n  padding: 1em;\n  margin: 0;\n}\nh1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  cursor: pointer;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: var(--secondary-color);\n  padding: 2em;\n}\n.mat-form-field-outline[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9uZXctc3RvY2svbmV3LXN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDUjtBQUdBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvbmV3LXN0b2NrL25ldy1zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewStockComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-new-stock',
            templateUrl: './new-stock.component.html',
            styleUrls: ['./new-stock.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_stocks_service__WEBPACK_IMPORTED_MODULE_3__["StocksService"]
          }, {
            type: _services_warehouses_service__WEBPACK_IMPORTED_MODULE_4__["WarehousesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "n90K":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function n90K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);

          this._products = [];
        }

        _createClass(StorageService, [{
          key: "products",
          get: function get() {
            var products = JSON.parse(sessionStorage.getItem('products'));
            return products;
          },
          set: function set(products) {
            this._products = products;
            sessionStorage.setItem('products', JSON.stringify(products));
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "q0+M":
    /*!**********************************!*\
      !*** ./src/app/model/product.ts ***!
      \**********************************/

    /*! exports provided: Product */

    /***/
    function q0M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Product", function () {
        return Product;
      });

      var Product = /*#__PURE__*/function () {
        function Product() {
          _classCallCheck(this, Product);
        }

        _createClass(Product, [{
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(id) {
            this._id = id;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "sku",
          get: function get() {
            return this._sku;
          },
          set: function set(sku) {
            this._sku = sku;
          }
        }, {
          key: "barcode",
          get: function get() {
            return this._barcode;
          },
          set: function set(barcode) {
            this._barcode = barcode;
          }
        }, {
          key: "image",
          get: function get() {
            return this._image;
          },
          set: function set(image) {
            this._image = image;
          }
        }, {
          key: "price",
          get: function get() {
            return this._price;
          },
          set: function set(price) {
            this._price = price;
          }
        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(enabled) {
            this._enabled = enabled;
          }
        }]);

        return Product;
      }();
      /***/

    },

    /***/
    "q2XK":
    /*!*********************************************!*\
      !*** ./src/app/configuration/Properties.ts ***!
      \*********************************************/

    /*! exports provided: baseUrl, productsUrl, stocksUrl, warehousesUrl */

    /***/
    function q2XK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "baseUrl", function () {
        return baseUrl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "productsUrl", function () {
        return productsUrl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stocksUrl", function () {
        return stocksUrl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "warehousesUrl", function () {
        return warehousesUrl;
      });

      var baseUrl = '/gui'; //export const baseUrl = 'http://localhost:8000/gui';

      var productsUrl = baseUrl + '/products';
      var stocksUrl = baseUrl + '/stocks';
      var warehousesUrl = baseUrl + '/warehouses';
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_views_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/views/products/products.component */
      "TgNW");
      /* harmony import */


      var _components_views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/views/product-details/product-details.component */
      "Ay6/");
      /* harmony import */


      var _components_views_new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/views/new-stock/new-stock.component */
      "aFxV");
      /* harmony import */


      var _services_translation_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/translation-resolver.service */
      "HhaY");

      var routes = [{
        path: '',
        resolve: {
          lang: _services_translation_resolver_service__WEBPACK_IMPORTED_MODULE_5__["TranslationResolverService"]
        },
        children: [{
          path: 'products',
          component: _components_views_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]
        }, {
          path: 'productDetails',
          component: _components_views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"]
        }, {
          path: 'newStock',
          component: _components_views_new_stock_new_stock_component__WEBPACK_IMPORTED_MODULE_4__["NewStockComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xDih":
    /*!*************************************!*\
      !*** ./src/app/utils/animations.ts ***!
      \*************************************/

    /*! exports provided: Animations */

    /***/
    function xDih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Animations", function () {
        return Animations;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var Animations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'rotate(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'rotate(-180deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': '1',
        'height': '*',
        'padding-top': '*',
        'padding-bottom': '*',
        'overflow': 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        'opacity': '0',
        'height': '0',
        'padding-top': '0',
        'padding-bottom': '0',
        'overflow': 'hidden',
        'margin-top': '0',
        'margin-bottom': '0'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease'))])];
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map