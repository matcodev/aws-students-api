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
exports.updateStudent = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var dynamoDB = new aws_sdk_1.default.DynamoDB.DocumentClient();
var updateStudent = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var id, studentData, params, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = event.pathParameters.id;
                studentData = JSON.parse(event.body);
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
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, {
                        statusCode: 500,
                        body: JSON.stringify({ message: 'Internal Server Error' }),
                    }];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateStudent = updateStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGVTdHVkZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUEwQjtBQWdCMUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVuRCxJQUFNLGFBQWEsR0FBRyxVQUFPLEtBQVk7Ozs7O2dCQUMvQixFQUFFLEdBQUssS0FBSyxDQUFDLGNBQWMsR0FBekIsQ0FBMEI7Z0JBQzlCLFdBQVcsR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWxELE1BQU0sR0FBRztvQkFDYixTQUFTLEVBQUUsVUFBVTtvQkFDckIsR0FBRyxFQUFFO3dCQUNILEVBQUUsSUFBQTtxQkFDSDtvQkFDRCx3QkFBd0IsRUFBRTt3QkFDeEIsT0FBTyxFQUFFLE1BQU07d0JBQ2YsV0FBVyxFQUFFLFVBQVU7d0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO3dCQUNiLFFBQVEsRUFBRSxPQUFPO3FCQUNsQjtvQkFDRCx5QkFBeUIsRUFBRTt3QkFDekIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJO3dCQUN6QixXQUFXLEVBQUUsV0FBVyxDQUFDLFFBQVE7d0JBQ2pDLE1BQU0sRUFBRSxXQUFXLENBQUMsR0FBRzt3QkFDdkIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxLQUFLO3FCQUM1QjtvQkFDRCxnQkFBZ0IsRUFBRSx3RUFBd0U7b0JBQzFGLFlBQVksRUFBRSxTQUFTO2lCQUN4QixDQUFDOzs7O2dCQUdhLHFCQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dCQUE5QyxJQUFJLEdBQUcsU0FBdUM7Z0JBQ3BELHNCQUFPO3dCQUNMLFVBQVUsRUFBRSxHQUFHO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7cUJBQ3hFLEVBQUM7OztnQkFFRixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUNyQixzQkFBTzt3QkFDTCxVQUFVLEVBQUUsR0FBRzt3QkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO3FCQUMzRCxFQUFDOzs7O0tBRUwsQ0FBQztBQUVPLHNDQUFhIn0=