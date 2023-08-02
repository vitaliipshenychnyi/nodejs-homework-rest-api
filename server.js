const app = require('./app')

// запуск серверу
app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})
