const { Router } = require('express'); // importo el router de express

const router = Router(); // crea una instancia de express

router.get('/', async (req, res) => {
    try {
        res.status(200).send("Bienvenido a la api"); // envio un mensaje de bienvenida
    } catch (error) {
        res.status(error.status).json({error: error.message}); // envio un mensaje de error
    }
})

router.post('/iecho', async (req, res) => {
    const { text } = req.query; // obtengo el texto que se quiere dar vuelta
    const textReverse = text.split('').reverse().join(''); // hago la vuelta del texto
    const isPalindromo = text === textReverse ? true : false; // verifico si es palindromo
    try {
        res.status(200).json({
            text: textReverse, // envio el texto revertido
            palindrome: isPalindromo // envio si es palindromo o no
        });
    } catch (error) {
        res.status(error.status).json({error: error.message}); // envio un mensaje de error
    }
});




module.exports = router; // exporto el router para que sea accesible desde afuera