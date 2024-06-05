"use strict";
// const AWS = require('aws-sdk');
// const dynamo = new AWS.DynamoDB.DocumentClient();
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
exports.getStudents = void 0;
// const getStudents = async (event) => {
//   const params = {
//     TableName: 'Students',
//   };
//   try {
//     const data = await dynamo.scan(params).promise();
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data.Items),
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: 'Internal Server Error' }),
//     };
//   }
// };
// module.exports = {
//     getStudents
// }
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var dynamo = new aws_sdk_1.default.DynamoDB.DocumentClient();
var getStudents = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var params, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = {
                    TableName: 'Students',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, dynamo.scan(params).promise()];
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
}); };
exports.getStudents = getStudents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2V0U3R1ZGVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtDQUFrQztBQUNsQyxvREFBb0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCx5Q0FBeUM7QUFDekMscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixPQUFPO0FBRVAsVUFBVTtBQUNWLHdEQUF3RDtBQUN4RCxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLDBDQUEwQztBQUMxQyxTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QixlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLG9FQUFvRTtBQUNwRSxTQUFTO0FBQ1QsTUFBTTtBQUNOLEtBQUs7QUFFTCxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLElBQUk7QUFDSixvREFBMEI7QUFFMUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVqRCxJQUFNLFdBQVcsR0FBRyxVQUFPLEtBQVU7Ozs7O2dCQUM3QixNQUFNLEdBQUc7b0JBQ2IsU0FBUyxFQUFFLFVBQVU7aUJBQ3RCLENBQUM7Ozs7Z0JBR2EscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7Z0JBQTFDLElBQUksR0FBRyxTQUFtQztnQkFDaEQsc0JBQU87d0JBQ0wsVUFBVSxFQUFFLEdBQUc7d0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztxQkFDakMsRUFBQzs7O2dCQUVGLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ3JCLHNCQUFPO3dCQUNMLFVBQVUsRUFBRSxHQUFHO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7cUJBQzNELEVBQUM7Ozs7S0FFTCxDQUFDO0FBRU8sa0NBQVcifQ==