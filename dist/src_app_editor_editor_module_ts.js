"use strict";
(self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_editor_editor_module_ts"],{

/***/ 5596:
/*!*************************************************************!*\
  !*** ./src/app/editor/editable-article-resolver.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditableArticleResolver": () => (/* binding */ EditableArticleResolver)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 7345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);






class EditableArticleResolver {
    constructor(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    resolve(route, state) {
        return this.articlesService.get(route.params['slug'])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(article => {
            if (this.userService.getCurrentUser().username === article.author.username) {
                return article;
            }
            else {
                this.router.navigateByUrl('/');
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((err) => this.router.navigateByUrl('/')));
    }
}
EditableArticleResolver.ɵfac = function EditableArticleResolver_Factory(t) { return new (t || EditableArticleResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
EditableArticleResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EditableArticleResolver, factory: EditableArticleResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3966:
/*!*************************************************!*\
  !*** ./src/app/editor/editor-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorRoutingModule": () => (/* binding */ EditorRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.component */ 3643);
/* harmony import */ var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editable-article-resolver.service */ 5596);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    {
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent,
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    },
    {
        path: ':slug',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent,
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        resolve: {
            article: _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_1__.EditableArticleResolver
        }
    }
];
class EditorRoutingModule {
}
EditorRoutingModule.ɵfac = function EditorRoutingModule_Factory(t) { return new (t || EditorRoutingModule)(); };
EditorRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EditorRoutingModule });
EditorRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 3643:
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 7345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/list-errors.component */ 7891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);










function EditorComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditorComponent_span_17_Template_i_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const tag_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.removeTag(tag_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
} }
class EditorComponent {
    constructor(articlesService, route, router, fb, cd) {
        this.articlesService = articlesService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.article = {};
        this.tagField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.errors = {};
        this.isSubmitting = false;
        // use the FormBuilder to create a form group
        this.articleForm = this.fb.group({
            title: '',
            description: '',
            body: ''
        });
        // Initialized tagList as empty array
        this.article.tagList = [];
        // Optional: subscribe to value changes on the form
        // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
    }
    ngOnInit() {
        // If there's an article prefetched, load it
        this.route.data.subscribe((data) => {
            if (data.article) {
                this.article = data.article;
                this.articleForm.patchValue(data.article);
                this.cd.markForCheck();
            }
        });
    }
    trackByFn(index, item) {
        return index;
    }
    addTag() {
        // retrieve tag control
        const tag = this.tagField.value;
        // only add tag if it does not exist yet
        if (this.article.tagList.indexOf(tag) < 0) {
            this.article.tagList.push(tag);
        }
        // clear the input
        this.tagField.reset('');
    }
    removeTag(tagName) {
        this.article.tagList = this.article.tagList.filter(tag => tag !== tagName);
    }
    submitForm() {
        this.isSubmitting = true;
        // update the model
        this.updateArticle(this.articleForm.value);
        // post the changes
        this.articlesService.save(this.article).subscribe(article => {
            this.router.navigateByUrl('/article/' + article.slug);
            this.cd.markForCheck();
        }, err => {
            this.errors = err;
            this.isSubmitting = false;
            this.cd.markForCheck();
        });
    }
    updateArticle(values) {
        Object.assign(this.article, values);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
EditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor-page"]], decls: 20, vars: 6, consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-xs-12"], [3, "errors"], [3, "formGroup"], [3, "disabled"], [1, "form-group"], ["formControlName", "title", "type", "text", "placeholder", "Article Title", 1, "form-control", "form-control-lg"], ["formControlName", "description", "type", "text", "placeholder", "What's this article about?", 1, "form-control"], ["formControlName", "body", "rows", "8", "placeholder", "Write your article (in markdown)", 1, "form-control"], ["type", "text", "placeholder", "Enter tags", 1, "form-control", 3, "formControl", "keyup.enter"], [1, "tag-list"], ["class", "tag-default tag-pill", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "button", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "click"], [1, "tag-default", "tag-pill"], [1, "ion-close-round", 3, "click"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-list-errors", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function EditorComponent_Template_input_keyup_enter_15_listener() { return ctx.addTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EditorComponent_span_17_Template, 3, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_18_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Publish Article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errors", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.articleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.tagField);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.article.tagList)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__.ListErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 7303:
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.component */ 3643);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 1265);
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-routing.module */ 3966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




class EditorModule {
}
EditorModule.ɵfac = function EditorModule_Factory(t) { return new (t || EditorModule)(); };
EditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__.EditorRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__.EditorRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_editor_editor_module_ts.js.map