"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var StudentsController_1 = require("./../controllers/StudentsController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var models = {
    "Student": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "lastName": { "dataType": "string", "required": true },
            "age": { "dataType": "string", "required": true },
            "grade": { "dataType": "string", "required": true },
            "createdAt": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StudentCreationRequest": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "lastName": { "dataType": "string", "required": true },
            "age": { "dataType": "string", "required": true },
            "grade": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StudentUpdateRequest": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "lastName": { "dataType": "string", "required": true },
            "age": { "dataType": "double", "required": true },
            "grade": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
var templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post.apply(app, __spreadArray(__spreadArray(__spreadArray(['/students'], ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController)), false), ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController.prototype.createStudent)), false), [function StudentsController_createStudent(request, response, next) {
            return __awaiter(this, void 0, void 0, function () {
                var args, validatedArgs, controller, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            args = {
                                requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "StudentCreationRequest" },
                            };
                            validatedArgs = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            validatedArgs = templateService.getValidatedArgs({ args: args, request: request, response: response });
                            controller = new StudentsController_1.StudentsController();
                            return [4 /*yield*/, templateService.apiHandler({
                                    methodName: 'createStudent',
                                    controller: controller,
                                    response: response,
                                    next: next,
                                    validatedArgs: validatedArgs,
                                    successStatus: 201,
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            return [2 /*return*/, next(err_1)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/students'], ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController)), false), ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController.prototype.getStudents)), false), [function StudentsController_getStudents(request, response, next) {
            return __awaiter(this, void 0, void 0, function () {
                var args, validatedArgs, controller, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            args = {};
                            validatedArgs = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            validatedArgs = templateService.getValidatedArgs({ args: args, request: request, response: response });
                            controller = new StudentsController_1.StudentsController();
                            return [4 /*yield*/, templateService.apiHandler({
                                    methodName: 'getStudents',
                                    controller: controller,
                                    response: response,
                                    next: next,
                                    validatedArgs: validatedArgs,
                                    successStatus: undefined,
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_2 = _a.sent();
                            return [2 /*return*/, next(err_2)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/students/:id'], ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController)), false), ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController.prototype.getStudent)), false), [function StudentsController_getStudent(request, response, next) {
            return __awaiter(this, void 0, void 0, function () {
                var args, validatedArgs, controller, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            args = {
                                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                            };
                            validatedArgs = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            validatedArgs = templateService.getValidatedArgs({ args: args, request: request, response: response });
                            controller = new StudentsController_1.StudentsController();
                            return [4 /*yield*/, templateService.apiHandler({
                                    methodName: 'getStudent',
                                    controller: controller,
                                    response: response,
                                    next: next,
                                    validatedArgs: validatedArgs,
                                    successStatus: undefined,
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_3 = _a.sent();
                            return [2 /*return*/, next(err_3)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put.apply(app, __spreadArray(__spreadArray(__spreadArray(['/students/:id'], ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController)), false), ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController.prototype.updateStudent)), false), [function StudentsController_updateStudent(request, response, next) {
            return __awaiter(this, void 0, void 0, function () {
                var args, validatedArgs, controller, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            args = {
                                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                                requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "StudentUpdateRequest" },
                            };
                            validatedArgs = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            validatedArgs = templateService.getValidatedArgs({ args: args, request: request, response: response });
                            controller = new StudentsController_1.StudentsController();
                            return [4 /*yield*/, templateService.apiHandler({
                                    methodName: 'updateStudent',
                                    controller: controller,
                                    response: response,
                                    next: next,
                                    validatedArgs: validatedArgs,
                                    successStatus: undefined,
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_4 = _a.sent();
                            return [2 /*return*/, next(err_4)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete.apply(app, __spreadArray(__spreadArray(__spreadArray(['/students/:id'], ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController)), false), ((0, runtime_1.fetchMiddlewares)(StudentsController_1.StudentsController.prototype.deleteStudent)), false), [function StudentsController_deleteStudent(request, response, next) {
            return __awaiter(this, void 0, void 0, function () {
                var args, validatedArgs, controller, err_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            args = {
                                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
                            };
                            validatedArgs = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            validatedArgs = templateService.getValidatedArgs({ args: args, request: request, response: response });
                            controller = new StudentsController_1.StudentsController();
                            return [4 /*yield*/, templateService.apiHandler({
                                    methodName: 'deleteStudent',
                                    controller: controller,
                                    response: response,
                                    next: next,
                                    validatedArgs: validatedArgs,
                                    successStatus: undefined,
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_5 = _a.sent();
                            return [2 /*return*/, next(err_5)];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvSkFBb0o7QUFDcEoseUNBQW9GO0FBQ3BGLG9KQUFvSjtBQUNwSiwwRUFBeUU7QUFLekUsb0pBQW9KO0FBRXBKLElBQU0sTUFBTSxHQUFxQjtJQUM3QixTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsV0FBVztRQUN2QixZQUFZLEVBQUU7WUFDVixJQUFJLEVBQUUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUM7WUFDM0MsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDO1lBQzdDLFVBQVUsRUFBRSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQztZQUNqRCxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUM7WUFDNUMsT0FBTyxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDO1lBQzlDLFdBQVcsRUFBRSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQztTQUNyRDtRQUNELHNCQUFzQixFQUFFLEtBQUs7S0FDaEM7SUFDRCxvSkFBb0o7SUFDcEosd0JBQXdCLEVBQUU7UUFDdEIsVUFBVSxFQUFFLFdBQVc7UUFDdkIsWUFBWSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDO1lBQzdDLFVBQVUsRUFBRSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxF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