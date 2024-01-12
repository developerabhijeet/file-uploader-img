// imports 
import express from "express";
//routes
import fileRoutes from "./routes/fileRoutes";
// errorHandler
import { errorHandler } from "./utils/errorHandler";
// cors , helmet and express-session for Open Worldwide Application Security Project(OWASP)
import cors from "cors"; // For Request origins
import helmet from "helmet"; // For domain security in https
import session from "express-session"; // To maintain specific user session
import 'dotenv/config'// to store env variables

// created express app
const app = express();

// utilizing env variables
const PORT = process.env.PORT || 8000;
const SECRET_KEY = process.env.SESSION_SECRET || '';

// configuring helpment
app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
// prefix route
app.use("/api/files", fileRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
