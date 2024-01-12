"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports 
const express_1 = __importDefault(require("express"));
//routes
const fileRoutes_1 = __importDefault(require("./routes/fileRoutes"));
// errorHandler
const errorHandler_1 = require("./utils/errorHandler");
// cors , helmet and express-session for Open Worldwide Application Security Project(OWASP)
const cors_1 = __importDefault(require("cors")); // For Request origins
const helmet_1 = __importDefault(require("helmet")); // For domain security in https
const express_session_1 = __importDefault(require("express-session")); // To maintain specific user session
require("dotenv/config"); // to store env variables
// created express app
const app = (0, express_1.default)();
// utilizing env variables
const PORT = process.env.PORT || 8000;
const SECRET_KEY = process.env.SESSION_SECRET || '';
// configuring helpment
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
// prefix route
app.use("/api/files", fileRoutes_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
