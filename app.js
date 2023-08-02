const express = require("express");
const cors = require("cors"); // пакет, який вирішує проблему CORS
const logger = require("morgan"); // Middleware, яка виводить в консоль інформацію про запит

const contactsRouter = require("./routes/api/contacts"); // імпортування "сторінки записної книжки"

const app = express(); // app - це веб-сервер

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors()); //  Middleware, яке робить маніпуляції із заголовками для вирішення проблеми CORS
app.use(express.json());

app.use("/api/contacts", contactsRouter); // Middleware, яке вказує де шукати обробник на запит

// обробка запитів на адреси, яких немає
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
