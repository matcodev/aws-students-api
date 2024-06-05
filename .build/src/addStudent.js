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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = void 0;
var uuid_1 = require("uuid");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var addStudent = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var dynamoDB, _a, name_1, lastName, age, grade, createdAt, id, newStudent, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
                _a = JSON.parse(event.body), name_1 = _a.name, lastName = _a.lastName, age = _a.age, grade = _a.grade;
                createdAt = new Date().toDateString();
                id = (0, uuid_1.v4)();
                newStudent = {
                    id: id,
                    name: name_1,
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
                _b.sent();
                return [2 /*return*/, {
                        statusCode: 200,
                        body: JSON.stringify({
                            message: 'Student added successfully',
                            id: newStudent.id,
                            name: newStudent.name,
                        })
                    }];
            case 2:
                error_1 = _b.sent();
                console.log(error_1);
                if (error_1 instanceof Error) {
                    return [2 /*return*/, {
                            statusCode: 500,
                            body: JSON.stringify({
                                message: error_1.message,
                            })
                        }];
                }
                else {
                    return [2 /*return*/, {
                            statusCode: 500,
                            body: JSON.stringify({
                                message: 'An unknown error occurred',
                            })
                        }];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addStudent = addStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGRTdHVkZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUEwQjtBQUMxQixvREFBMEI7QUFlMUIsSUFBTSxVQUFVLEdBQUcsVUFBTyxLQUFZOzs7Ozs7Z0JBRTVCLFFBQVEsR0FBRyxJQUFJLGlCQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUU3QyxLQUFpQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBckQsZ0JBQUksRUFBRSxRQUFRLGNBQUEsRUFBRSxHQUFHLFNBQUEsRUFBRSxLQUFLLFdBQUEsQ0FBNEI7Z0JBQ3hELFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN0QyxFQUFFLEdBQUcsSUFBQSxTQUFFLEdBQUUsQ0FBQztnQkFFVixVQUFVLEdBQVk7b0JBQzFCLEVBQUUsSUFBQTtvQkFDRixJQUFJLFFBQUE7b0JBQ0osUUFBUSxVQUFBO29CQUNSLEdBQUcsS0FBQTtvQkFDSCxLQUFLLE9BQUE7b0JBQ0wsU0FBUyxXQUFBO2lCQUNWLENBQUM7Z0JBRUYscUJBQU0sUUFBUTt5QkFDWCxHQUFHLENBQUM7d0JBQ0gsU0FBUyxFQUFFLFVBQVU7d0JBQ3JCLElBQUksRUFBRSxVQUFVO3FCQUNqQixDQUFDO3lCQUNELE9BQU8sRUFBRSxFQUFBOztnQkFMWixTQUtZLENBQUM7Z0JBRWIsc0JBQU87d0JBQ0wsVUFBVSxFQUFFLEdBQUc7d0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQ25CLE9BQU8sRUFBRSw0QkFBNEI7NEJBQ3JDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRTs0QkFDakIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO3lCQUN0QixDQUFDO3FCQUNILEVBQUM7OztnQkFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUNuQixJQUFJLE9BQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztvQkFDM0Isc0JBQU87NEJBQ0wsVUFBVSxFQUFFLEdBQUc7NEJBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0NBQ25CLE9BQU8sRUFBRSxPQUFLLENBQUMsT0FBTzs2QkFDdkIsQ0FBQzt5QkFDSCxFQUFDO2dCQUNKLENBQUM7cUJBQU0sQ0FBQztvQkFDTixzQkFBTzs0QkFDTCxVQUFVLEVBQUUsR0FBRzs0QkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQ0FDbkIsT0FBTyxFQUFFLDJCQUEyQjs2QkFDckMsQ0FBQzt5QkFDSCxFQUFDO2dCQUNKLENBQUM7Ozs7O0tBRUosQ0FBQztBQUVPLGdDQUFVIn0=