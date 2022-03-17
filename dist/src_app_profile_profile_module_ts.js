"use strict";
(self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6060:
/*!*******************************************************!*\
  !*** ./src/app/profile/profile-articles.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileArticlesComponent": () => (/* binding */ ProfileArticlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/article-helpers/article-list.component */ 8650);





class ProfileArticlesComponent {
    constructor(route, router, cd) {
        this.route = route;
        this.router = router;
        this.cd = cd;
        this.articlesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ngOnInit() {
        this.route.parent.data.subscribe((data) => {
            this.profile = data.profile;
            this.articlesConfig = {
                type: 'all',
                filters: {}
            }; // Only method I found to refresh article load on swap
            this.articlesConfig.filters.author = this.profile.username;
            this.cd.markForCheck();
        });
    }
}
ProfileArticlesComponent.ɵfac = function ProfileArticlesComponent_Factory(t) { return new (t || ProfileArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ProfileArticlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileArticlesComponent, selectors: [["app-profile-articles"]], decls: 1, vars: 2, consts: [[3, "limit", "config"]], template: function ProfileArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("config", ctx.articlesConfig);
    } }, directives: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 8068:
/*!********************************************************!*\
  !*** ./src/app/profile/profile-favorites.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileFavoritesComponent": () => (/* binding */ ProfileFavoritesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/article-helpers/article-list.component */ 8650);





class ProfileFavoritesComponent {
    constructor(route, cd) {
        this.route = route;
        this.cd = cd;
        this.favoritesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ngOnInit() {
        this.route.parent.data.subscribe((data) => {
            this.profile = data.profile;
            this.favoritesConfig = Object.assign({}, this.favoritesConfig);
            this.favoritesConfig.filters.favorited = this.profile.username;
            this.cd.markForCheck();
        });
    }
}
ProfileFavoritesComponent.ɵfac = function ProfileFavoritesComponent_Factory(t) { return new (t || ProfileFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
ProfileFavoritesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileFavoritesComponent, selectors: [["app-profile-favorites"]], decls: 1, vars: 2, consts: [[3, "limit", "config"]], template: function ProfileFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("config", ctx.favoritesConfig);
    } }, directives: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3679:
/*!*****************************************************!*\
  !*** ./src/app/profile/profile-resolver.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileResolver": () => (/* binding */ ProfileResolver)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 7345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






class ProfileResolver {
    constructor(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    resolve(route, state) {
        return this.profilesService.get(route.params['username'])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => this.router.navigateByUrl('/')));
    }
}
ProfileResolver.ɵfac = function ProfileResolver_Factory(t) { return new (t || ProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProfileResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProfileResolver, factory: ProfileResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4084:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-articles.component */ 6060);
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-favorites.component */ 8068);
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-resolver.service */ 3679);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ 3667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







const routes = [
    {
        path: ':username',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
        resolve: {
            profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_2__.ProfileResolver
        },
        children: [
            {
                path: '',
                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__.ProfileArticlesComponent
            },
            {
                path: 'favorites',
                component: _profile_favorites_component__WEBPACK_IMPORTED_MODULE_1__.ProfileFavoritesComponent
            }
        ]
    }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 3667:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 7345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/buttons/follow-button.component */ 6983);








const _c0 = function () { return ["/settings"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function (a1) { return ["/profile", a1]; };
const _c3 = function (a1) { return ["/profile", a1, "favorites"]; };
class ProfileComponent {
    constructor(route, userService, cd) {
        this.route = route;
        this.userService = userService;
        this.cd = cd;
    }
    ngOnInit() {
        this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)((data) => {
            this.profile = data.profile;
            // Load the current user's data.
            return this.userService.currentUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((userData) => {
                this.currentUser = userData;
                this.isUser = (this.currentUser.username === this.profile.username);
            }));
        })).subscribe((() => {
            this.cd.markForCheck();
        }));
    }
    onToggleFollowing(following) {
        this.profile.following = following;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile-page"]], decls: 26, vars: 18, consts: [[1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-md-10", "offset-md-1"], ["alt", "user image", 1, "user-img", 3, "src"], [3, "hidden", "profile", "toggle"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink", "hidden"], [1, "ion-gear-a"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "routerLink"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-follow-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("toggle", function ProfileComponent_Template_app_follow_button_toggle_10_listener($event) { return ctx.onToggleFollowing($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Edit Profile Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " My Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Favorited Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.profile.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profile.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profile.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.isUser)("profile", ctx.profile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0))("hidden", !ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c2, ctx.profile.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c3, ctx.profile.username));
    } }, directives: [_shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4404:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-articles.component */ 6060);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ 3667);
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-favorites.component */ 8068);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ 1265);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-routing.module */ 4084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);






class ProfileModule {
}
ProfileModule.ɵfac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__.ProfileRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_articles_component__WEBPACK_IMPORTED_MODULE_0__.ProfileArticlesComponent,
        _profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
        _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__.ProfileFavoritesComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__.ProfileRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map