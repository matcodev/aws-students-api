"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
var uuid_1 = require("uuid");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var tsoa_1 = require("tsoa");
var StudentsController = /** @class */ (function () {
    function StudentsController() {
    }
    StudentsController.prototype.createStudent = function (requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var dynamoDB, name, lastName, age, grade, createdAt, id, newStudent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
                        name = requestBody.name, lastName = requestBody.lastName, age = requestBody.age, grade = requestBody.grade;
                        createdAt = new Date().toDateString();
                        id = (0, uuid_1.v4)();
                        newStudent = {
                            id: id,
                            name: name,
                            lastName: lastName,
                            age: age,
                            grade: grade,
                            createdAt: createdAt
                        };
                        return [4 /*yield*/, dynamoDB
                                .put({
                                TableName: 'Students',
                                Item: newStudent
                            })
                                .promise()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, newStudent];
                }
            });
        });
    };
    StudentsController.prototype.getStudents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dynamoDB, params, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
                        params = {
                            TableName: 'Students',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDB.scan(params).promise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                body: JSON.stringify(data.Items),
                            }];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, {
                                statusCode: 500,
                                body: JSON.stringify({ message: 'Internal Server Error' }),
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentsController.prototype.getStudent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dynamoDB, result, student, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDB
                                .get({
                                TableName: "Students",
                                Key: {
                                    id: id,
                                },
                            })
                                .promise()];
                    case 2:
                        result = _a.sent();
                        student = result.Item;
                        return [2 /*return*/, {
                                statusCode: 200,
                                body: JSON.stringify(student),
                            }];
                    case 3:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, {
                                statusCode: 500,
                                body: JSON.stringify({ message: "Internal Server Error" }),
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentsController.prototype.updateStudent = function (id, requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var dynamoDB, studentData, params, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
                        studentData = requestBody;
                        params = {
                            TableName: 'Students',
                            Key: {
                                id: id
                            },
                            ExpressionAttributeNames: {
                                '#name': 'name',
                                '#lastName': 'lastName',
                                '#age': 'age',
                                '#grade': 'grade',
                            },
                            ExpressionAttributeValues: {
                                ':name': studentData.name,
                                ':lastName': studentData.lastName,
                                ':age': studentData.age,
                                ':grade': studentData.grade,
                            },
                            UpdateExpression: 'SET #name = :name, #lastName = :lastName, #age = :age, #grade = :grade',
                            ReturnValues: 'ALL_NEW',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDB.update(params).promise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                body: JSON.stringify({ message: 'Student updated successfully', data: data }),
                            }];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, {
                                statusCode: 500,
                                body: JSON.stringify({ message: 'Internal Server Error' }),
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentsController.prototype.deleteStudent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var dynamoDB, params, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
                        params = {
                            TableName: 'Students',
                            Key: {
                                id: id
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDB.delete(params).promise()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                body: JSON.stringify({ message: 'Student deleted successfully' }),
                            }];
                    case 3:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [2 /*return*/, {
                                statusCode: 500,
                                body: JSON.stringify({ message: 'Internal Server Error' }),
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, tsoa_1.Post)(),
        (0, tsoa_1.SuccessResponse)('201', 'Created') // This is for the swagger
        ,
        __param(0, (0, tsoa_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], StudentsController.prototype, "createStudent", null);
    __decorate([
        (0, tsoa_1.Get)('/'),
        (0, tsoa_1.Tags)('Students'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], StudentsController.prototype, "getStudents", null);
    __decorate([
        (0, tsoa_1.Get)('{id}'),
        (0, tsoa_1.Tags)('Students'),
        __param(0, (0, tsoa_1.Path)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], StudentsController.prototype, "getStudent", null);
    __decorate([
        (0, tsoa_1.Put)('{id}'),
        (0, tsoa_1.Tags)('Students'),
        __param(0, (0, tsoa_1.Path)()),
        __param(1, (0, tsoa_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], StudentsController.prototype, "updateStudent", null);
    __decorate([
        (0, tsoa_1.Delete)('{id}'),
        (0, tsoa_1.Tags)('Students'),
        __param(0, (0, tsoa_1.Path)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], StudentsController.prototype, "deleteStudent", null);
    StudentsController = __decorate([
        (0, tsoa_1.Route)('students')
    ], StudentsController);
    return StudentsController;
}());
exports.StudentsController = StudentsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R1ZGVudHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL1N0dWRlbnRzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBMEI7QUFDMUIsb0RBQTBCO0FBQzFCLDZCQUF3RjtBQTBCeEY7SUFBQTtJQXNKQSxDQUFDO0lBbkpjLDBDQUFhLEdBQWIsVUFBc0IsV0FBbUM7Ozs7Ozt3QkFDOUQsUUFBUSxHQUFHLElBQUksaUJBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRTNDLElBQUksR0FBMkIsV0FBVyxLQUF0QyxFQUFFLFFBQVEsR0FBaUIsV0FBVyxTQUE1QixFQUFFLEdBQUcsR0FBWSxXQUFXLElBQXZCLEVBQUUsS0FBSyxHQUFLLFdBQVcsTUFBaEIsQ0FBaUI7d0JBQzdDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUN0QyxFQUFFLEdBQUcsSUFBQSxTQUFFLEdBQUUsQ0FBQzt3QkFFVixVQUFVLEdBQVk7NEJBQzFCLEVBQUUsSUFBQTs0QkFDRixJQUFJLE1BQUE7NEJBQ0osUUFBUSxVQUFBOzRCQUNSLEdBQUcsS0FBQTs0QkFDSCxLQUFLLE9BQUE7NEJBQ0wsU0FBUyxXQUFBO3lCQUNWLENBQUM7d0JBRUYscUJBQU0sUUFBUTtpQ0FDWCxHQUFHLENBQUM7Z0NBQ0gsU0FBUyxFQUFFLFVBQVU7Z0NBQ3JCLElBQUksRUFBRSxVQUFVOzZCQUNqQixDQUFDO2lDQUNELE9BQU8sRUFBRSxFQUFBOzt3QkFMWixTQUtZLENBQUM7d0JBRWIsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ25CO0lBSVksd0NBQVcsR0FBWDs7Ozs7O3dCQUNMLFFBQVEsR0FBRyxJQUFJLGlCQUFHLENBQUMsUUFBUSxDQUFDLGNB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