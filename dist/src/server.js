"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var serverless = __importStar(require("aws-serverless-express"));
var app = (0, express_1.default)();
// Create a new router
var router = express_1.default.Router();
// Load Swagger document from JSON file
var swaggerDocument = require('./swagger.json');
// Use the router for your Swagger UI setup
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
// Use the router in your app with the /dev prefix
app.use('/', router);
// Create a serverless Express server
var server = serverless.createServer(app);
var handler = function (event, context) {
    // Pass AWS Lambda event and context to serverless Express server
    return serverless.proxy(server, event, context);
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCwwRUFBMkM7QUFFM0MsaUVBQXFEO0FBR3JELElBQU0sR0FBRyxHQUFZLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBRS9CLHNCQUFzQjtBQUN0QixJQUFNLE1BQU0sR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXhDLHVDQUF1QztBQUN2QyxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCwyQ0FBMkM7QUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLEVBQUUsNEJBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUUzRSxrREFBa0Q7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFckIscUNBQXFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFckMsSUFBTSxPQUFPLEdBQUcsVUFBQyxLQUFVLEVBQUUsT0FBWTtJQUM5QyxpRUFBaUU7SUFDakUsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEQsQ0FBQyxDQUFDO0FBSFcsUUFBQSxPQUFPLFdBR2xCIn0=