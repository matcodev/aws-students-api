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
    __decorate([
        (0, tsoa_1.Post)(),
        (0, tsoa_1.SuccessResponse)('201', 'Created') // This is for the swagger
        ,
        __param(0, (0, tsoa_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], StudentsController.prototype, "createStudent", null);
    StudentsController = __decorate([
        (0, tsoa_1.Route)('students')
    ], StudentsController);
    return StudentsController;
}());
exports.StudentsController = StudentsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R1ZGVudHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL1N0dWRlbnRzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBMEI7QUFDMUIsb0RBQTBCO0FBQzFCLDZCQUEwRDtBQW1CMUQ7SUFBQTtJQTRCQSxDQUFDO0lBekJjLDBDQUFhLEdBQWIsVUFBc0IsV0FBbUM7Ozs7Ozt3QkFDOUQsUUFBUSxHQUFHLElBQUksaUJBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRTNDLElBQUksR0FBMkIsV0FBVyxLQUF0QyxFQUFFLFFBQVEsR0FBaUIsV0FBVyxTQUE1QixFQUFFLEdBQUcsR0FBWSxXQUFXLElBQXZCLEVBQUUsS0FBSyxHQUFLLFdBQVcsTUFBaEIsQ0FBaUI7d0JBQzdDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUN0QyxFQUFFLEdBQUcsSUFBQSxTQUFFLEdBQUUsQ0FBQzt3QkFFVixVQUFVLEdBQVk7NEJBQzFCLEVBQUUsSUFBQTs0QkFDRixJQUFJLE1BQUE7NEJBQ0osUUFBUSxVQUFBOzRCQUNSLEdBQUcsS0FBQTs0QkFDSCxLQUFLLE9BQUE7NEJBQ0wsU0FBUyxXQUFBO3lCQUNWLENBQUM7d0JBRUYscUJBQU0sUUFBUTtpQ0FDWCxHQUFHLENBQUM7Z0NBQ0gsU0FBUyxFQUFFLFVBQVU7Z0NBQ3JCLElBQUksRUFBRSxVQUFVOzZCQUNqQixDQUFDO2lDQUNELE9BQU8sRUFBRSxFQUFBOzt3QkFMWixTQUtZLENBQUM7d0JBRWIsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ25CO0lBeEJZO1FBRlosSUFBQSxXQUFJLEdBQUU7UUFDTixJQUFBLHNCQUFlLEVBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLDBCQUEwQjs7UUFDakMsV0FBQSxJQUFBLFdBQUksR0FBRSxDQUFBOzs7OzJEQXdCakM7SUEzQlUsa0JBQWtCO1FBRDlCLElBQUEsWUFBSyxFQUFDLFVBQVUsQ0FBQztPQUNMLGtCQUFrQixDQTRCOUI7SUFBRCx5QkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGdEQUFrQiJ9