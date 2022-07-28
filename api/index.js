
const app = require('./src/app.js'); // importo el app

const PORT = process.env.PORT || 3001; // defino el puerto

app.listen(PORT, async () => { // inicio el servidor
    console.log(`Server listening at port ${PORT}`) // muestro en consola que se esta escuchando en el puerto
});