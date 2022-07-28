const app = require('../src/app'); // importo el router de la aplicacion

const request = require('supertest'); // importo supertest para hacer las pruebas


describe('GET /', () => { // describe es una funcion que recibe un string y una funcion
    it('responde con una cadena de bienvenida', (done) => { // done es una funcion que se ejecuta cuando termina la prueba
        request(app) // hago una peticion a la aplicacion
            .get('/') // hago una peticion get a la ruta /
            .expect(200) // espero que la respuesta sea 200
            .expect('Bienvenido a la api') // espero que la respuesta sea 200 y que el body sea 'Bienvenido a la api'
            .end(done); // termina la prueba
    }
    );
});

describe('POST /iecho', () => { // describe es una funcion que recibe un string y una funcion
    it('Responde con un status 404', (done) => { // done es una funcion que se ejecuta cuando termina la prueba
        request(app) // hago una peticion a la aplicacion
            .post('/iecho') // hago una peticion post a la ruta /iecho
            .expect(404); // espero que la respuesta sea 404
        done(); // termina la prueba
    });

    it('Responde con un status 200', (done) => {
        request(app) // hago una peticion a la aplicacion
            .post('/iecho?text=hola') // hago una peticion post a la ruta /iecho?text=hola
            .expect(200, { // espero que la respuesta sea 200 y que el body sea {text: 'aloh', palindrome: false}
                text: 'aloh',
                palindrome: false 
            }, done); // termina la prueba
    });

    it('Responde con palindrome en true', (done) => {
        request(app) // hago una peticion a la aplicacion
            
            .post('/iecho?text=neuquen') // hago una peticion post a la ruta /iecho?text=neuquen
            .expect(200, { // espero que la respuesta sea 200 y que el body sea {text: 'neuquen', palindrome: true}
                text: 'neuquen',
                palindrome: true
            }, done); // termina la prueba
    });
});

