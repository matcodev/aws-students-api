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
var getStudent_1 = require("../src/getStudent");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var aws_sdk_mock_1 = __importDefault(require("aws-sdk-mock"));
aws_sdk_mock_1.default.setSDKInstance(aws_sdk_1.default);
describe('getStudent', function () {
    beforeEach(function () {
        aws_sdk_mock_1.default.mock('DynamoDB.DocumentClient', 'get', function (params, callback) {
            callback(null, { Item: { id: '1', name: 'John', lastName: 'Doe', age: '20', grade: 'A' } });
        });
    });
    afterEach(function () {
        aws_sdk_mock_1.default.restore('DynamoDB.DocumentClient');
    });
    it('should get a student', function () { return __awaiter(void 0, void 0, void 0, function () {
        var event, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event = {
                        pathParameters: {
                            id: '1',
                        },
                    };
                    return [4 /*yield*/, (0, getStudent_1.getStudent)(event)];
                case 1:
                    response = _a.sent();
                    expect(response).toHaveProperty('statusCode', 200);
                    expect(JSON.parse(response.body)).toEqual({ id: '1', name: 'John', lastName: 'Doe', age: '20', grade: 'A' });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9nZXRTdHVkZW50LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBK0M7QUFDL0Msb0RBQTBCO0FBQzFCLDhEQUFtQztBQUVuQyxzQkFBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBRyxDQUFDLENBQUM7QUFFNUIsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUNyQixVQUFVLENBQUM7UUFDVCxzQkFBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsVUFBQyxNQUFNLEVBQUUsUUFBUTtZQUM5RCxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUM7UUFDUixzQkFBTyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNCQUFzQixFQUFFOzs7OztvQkFDbkIsS0FBSyxHQUFHO3dCQUNaLGNBQWMsRUFBRTs0QkFDZCxFQUFFLEVBQUUsR0FBRzt5QkFDUjtxQkFDRixDQUFDO29CQUVlLHFCQUFNLElBQUEsdUJBQVUsRUFBQyxLQUFLLENBQUMsRUFBQTs7b0JBQWxDLFFBQVEsR0FBRyxTQUF1QjtvQkFDeEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Ozs7U0FDOUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==