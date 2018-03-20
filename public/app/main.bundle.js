webpackJsonp(["main"],{

/***/ "./ang_src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ang_src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ang_src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__episodes_episode_component__ = __webpack_require__("./ang_src/app/episodes/episode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__episodes_episode_service__ = __webpack_require__("./ang_src/app/episodes/episode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__episodes_pipes_module__ = __webpack_require__("./ang_src/app/episodes/pipes.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__episodes_pipes_module__["a" /* PipesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientXsrfModule */].withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__episodes_episode_component__["a" /* EpisodeComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__episodes_episode_service__["a" /* EpisodeService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__episodes_episode_component__["a" /* EpisodeComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ang_src/app/episodes/common.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorTextPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorTextPipe = /** @class */ (function () {
    function ErrorTextPipe() {
    }
    ErrorTextPipe.prototype.transform = function (error, args) {
        if (typeof error !== "undefined") {
            // MonGO DB Duplicate Key error
            var regEx = /duplicate key error/;
            if (error.toString().match(regEx)) {
                return "Duplicate Key Error. Please enter a unique number.";
            }
            else {
                return error;
            }
        }
        else {
            return error;
        }
    };
    ErrorTextPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({ name: 'errorText' })
    ], ErrorTextPipe);
    return ErrorTextPipe;
}());

var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    FilterArrayPipe.prototype.transform = function (value, args) {
        if (!args[0]) {
            return value;
        }
        else if (value) {
            return value.filter(function (item) {
                for (var key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String) &&
                        (item[key].indexOf(args[0]) !== -1)) {
                        return true;
                    }
                }
            });
        }
    };
    FilterArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({ name: 'filter' })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());



/***/ }),

/***/ "./ang_src/app/episodes/episode.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{pageTitle}}</h1>\r\n<br />\r\n<p>\r\n    This is a RESTful example of pulling a list of data from MongoDB and \r\n    showing it on the page. You can add or remove items from the list as well \r\n    using the included form.\r\n</p>\r\n<br />\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <table class=\"table table-bordered table-striped\" *ngIf=\"episodes.length > 0\" >\r\n                <tr>\r\n                    <th>No.</th>\r\n                    <th>Title</th>\r\n                    <th>Directed by</th>\r\n                    <th>Written by</th>\r\n                    <th>Air date</th>\r\n                    <th>Tools</th>\r\n                </tr>\r\n                <tr *ngFor=\"let ep of episodes\">\r\n                    <td class=\"centered\">{{ ep.number }}</td>\r\n                    <td>{{ ep.title }}</td>\r\n                    <td>{{ ep.director }}</td>\r\n                    <td>{{ ep.writer }}</td>\r\n                    <td class=\"centered\">{{ ep.airDate }}</td>\r\n                    <td>\r\n                        <button (click)=\"editEpisode(ep)\"><span class=\"ion-edit\"></span></button>\r\n                        <button (click)=\"deleteEpisode(ep._id)\"><span class=\"ion-trash-a\"></span></button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div *ngIf=\"episodes.length === 0\">\r\n                <b>No episodes were found. Why not add one now?</b>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\r\n            <form class=\"form-horizontal\" autocomplete=\"off\" [formGroup]=\"myform\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\" for=\"number\">Episode No.</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"number\" class=\"form-control input-small\" formControlName=\"number\" id=\"number\" required min=\"1\" max=\"100\" [ngClass]=\"{ 'has-danger': number.invalid && number.dirty, 'has-success': number.valid && number.dirty }\" />\r\n                        <div class=\"form-control-feedback\" *ngIf=\"number.invalid && number.dirty\"> \r\n                            Field is invalid\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\" for=\"title\">Title:</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" maxlength=\"150\" required placeholder=\"Episode Title\" [ngClass]=\"{ 'has-danger': title.invalid && title.dirty, 'has-success': title.valid && title.dirty }\" />\r\n                        <div class=\"form-control-feedback\" *ngIf=\"title.invalid && title.dirty\"> \r\n                            Field is invalid\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\" for=\"director\">Directed By:</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"director\" id=\"director\" maxlength=\"150\" required placeholder=\"Director\" [ngClass]=\"{ 'has-danger': director.invalid && director.dirty, 'has-success': director.valid && director.dirty }\"  />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\" for=\"writer\">Written By:</label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input class=\"form-control\" type=\"text\" formControlName=\"writer\" id=\"writer\" maxlength=\"150\" required placeholder=\"Writer\" [ngClass]=\"{ 'has-danger': writer.invalid && writer.dirty, 'has-success': writer.valid && writer.dirty }\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\" for=\"airDate\">Air Date:</label>\r\n                    <div class=\"col-md-8\">\r\n                        <p class=\"input-group\">\r\n                            <my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"selDate\"\r\n                    formControlName=\"airDate\" (dateChanged)=\"onDateChanged($event)\"></my-date-picker>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-2 col-sm-offset-9 btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"resetForm()\"><span class=\"ion-refresh\">Reset</span></button> &nbsp;\r\n                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"postEpisode()\"><span class=\"ion-paper-airplane\">Send</span></button>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <input type=\"hidden\" name=\"_id\" id=\"_id\" formControlName=\"_id\">\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ang_src/app/episodes/episode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__episode__ = __webpack_require__("./ang_src/app/episodes/episode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__episode_service__ = __webpack_require__("./ang_src/app/episodes/episode.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EpisodeComponent = /** @class */ (function () {
    function EpisodeComponent(_episodeService, changeDetector) {
        this._episodeService = _episodeService;
        this.changeDetector = changeDetector;
        this.episodes = [];
        this.mode = 'add';
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            firstDayOfWeek: 'su',
            inline: false,
            width: "200px"
        };
        this.createFormControls = function () {
            this._id = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
            this.number = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
            this.title = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)
            ]);
            this.director = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)
            ]);
            this.writer = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)
            ]);
            this.airDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
        };
        this.createForm = function () {
            this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                _id: this._id,
                number: this.number,
                title: this.title,
                director: this.director,
                writer: this.writer,
                airDate: this.airDate
            });
        };
        this.getEpisodes = function () {
            var _this = this;
            this.searching = true;
            this._episodeService.getEpisodes()
                .subscribe(function (episodes) { return _this._update(episodes); }, function (error) { return _this.errorMessage = error; });
        };
        this.postEpisode = function () {
            var _this = this;
            this._submitting();
            this._episodeService.saveEpisode(this.myform.value, this.mode)
                .subscribe(function (episodes) { return _this._resetForm(episodes); }, function (error) { return _this.errorMessage = error; });
        };
        this.editEpisode = function (episode) {
            this.mode = 'edit';
            this.myform.patchValue({
                _id: episode._id,
                number: episode.number,
                title: episode.title,
                director: episode.director,
                writer: episode.writer,
                airDate: episode.airDate
            });
            this.setDate(episode.airDate);
            this.changeDetector.detectChanges();
        };
        this.deleteEpisode = function (id) {
            var _this = this;
            this.searching = true;
            this._episodeService.deleteEpisode(id)
                .subscribe(function (episodes) { return _this._update(episodes); }, function (error) { return _this.errorMessage = error; });
        };
        /*-----------------------------------------------------------------
        /    mydatepicker functions
        /----------------------------------------------------------------*/
        /**
         * onDateChanged
         * @param event: IMyDateModel
         * event properties are: event.date, event.jsdate, event.formatted and event.epoc
         */
        this.onDateChanged = function (event) {
            var newdate = event.jsdate;
            this.myform.patchValue({ airDate: newdate });
        };
        /**
         * setDate
         * @param date: IMyDate
         * Set date using the patchValue function
         */
        this.setDate = function (date) {
            var d = new Date(date);
            this.selDate = { year: d.getFullYear(),
                month: d.getMonth() + 1,
                day: d.getDate() };
            this.myform.patchValue({ airDate: this.selDate });
        };
        /**
         * clearDate
         * Clear the date using the patchValue function
         */
        this.clearDate = function () {
            this.myform.patchValue({ airDate: null });
        };
        /*-----------------------------------------------------------------
        /  PRIVATE FUNCTIONS
        /----------------------------------------------------------------*/
        this._handleResult = function (data) {
            this.episodes = data.episodes;
            this.changeDetector.detectChanges();
            this.searching = false;
            this.result = true;
            this.sortProp = 'number';
        };
        this._resetForm = function (episodes) {
            this.mode = 'add';
            this.myform.reset();
            this.changeDetector.detectChanges();
            if (typeof episodes !== "undefined")
                this._update(episodes);
        };
        this._submitting = function () {
            this.result = false;
            this.searching = true;
            this.errors = false;
        };
        this._update = function (data) {
            this.episodes = [];
            this.searching = false;
            if (typeof data.status !== "undefined" && data.status === 200) {
                this._handleResult(data);
            }
            else {
                this.errors = true;
                if (typeof data.errors !== "undefined" && typeof data.errors.err !== "undefined")
                    this.errorMessage = data.errors.err;
            }
        };
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]({ enableLongStackTrace: false });
        this.episode = new __WEBPACK_IMPORTED_MODULE_2__episode__["a" /* Episode */]();
        this.searching = false;
        this.selDate = { year: 0, month: 0, day: 0 };
        this.pageTitle = 'Episodes';
        this.errorMessage = '';
    }
    EpisodeComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
        this.getEpisodes();
    };
    EpisodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ang_src/app/episodes/episode.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__episode_service__["a" /* EpisodeService */]]
        })
        /**
         * EPISODE COMPONENT
         *
         * The main component that renders a list of episodes stored in MongoDB and a form to
         * created, edit and delete episodes.
         *
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__episode_service__["a" /* EpisodeService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], EpisodeComponent);
    return EpisodeComponent;
}());



/***/ }),

/***/ "./ang_src/app/episodes/episode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * EPISODE SERVICE
 *
 * Class that contains all service calls used by the Episodes Component.
 *
 */
var EpisodeService = /** @class */ (function () {
    /*---------------------------------------------------
    /	C'TOR
    /-------------------------------------------------- */
    function EpisodeService(http) {
        this.http = http;
        this._episodesUrl = '/api/episodes'; // URL to web api
        this._episodeUrl = '/api/episode/'; // URL to web api
        this._deleteUrl = this._episodeUrl + 'delete/'; // URL to web api
    }
    EpisodeService.prototype.getEpisodes = function () {
        return this.http.get(this._episodesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EpisodeService.prototype.saveEpisode = function (postVars, mode) {
        var body = JSON.stringify(postVars);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (typeof postVars._id === "undefined")
            postVars._id = -1;
        if (mode === "add") {
            return this.http.post(this._episodesUrl, body, options)
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.http.put(this._episodeUrl + postVars._id, body, options)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    EpisodeService.prototype.deleteEpisode = function (id) {
        return this.http.get(this._deleteUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /*--------------------------------------------------
    /	PRIVATE FUNCTIONS
    /-------------------------------------------------*/
    EpisodeService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            this.handleError(res.statusText);
        }
        var body = res.json();
        return body || {};
    };
    EpisodeService.prototype.handleError = function (errors) {
        var errMsg = errors.statusText || 'Server error';
        console.error("An error occured! " + errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(errMsg);
    };
    EpisodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EpisodeService);
    return EpisodeService;
}());



/***/ }),

/***/ "./ang_src/app/episodes/episode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Episode; });
var Episode = /** @class */ (function () {
    function Episode() {
    }
    return Episode;
}());



/***/ }),

/***/ "./ang_src/app/episodes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_pipes__ = __webpack_require__("./ang_src/app/episodes/common.pipes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule_1 = PipesModule;
    PipesModule.forRoot = function () {
        return {
            ngModule: PipesModule_1,
            providers: [],
        };
    };
    PipesModule = PipesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__common_pipes__["a" /* ErrorTextPipe */], __WEBPACK_IMPORTED_MODULE_2__common_pipes__["b" /* FilterArrayPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__common_pipes__["a" /* ErrorTextPipe */], __WEBPACK_IMPORTED_MODULE_2__common_pipes__["b" /* FilterArrayPipe */]],
        })
    ], PipesModule);
    return PipesModule;
    var PipesModule_1;
}());



/***/ }),

/***/ "./ang_src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./ang_src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./ang_src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ang_src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ang_src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map