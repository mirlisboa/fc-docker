const faker = require('faker');

const express = require('express');
const app = express();
const port = 3000;

/** Conecta o banco e manipula a tabela people */
const mariadb = require('mariadb');
const config = {
    host: 'db',
    user: 'appusr',
    password: '2A94v9rICYb7',
    database: 'appdb',
    connectionLimit: 5
};
let names = [];
mariadb.createConnection(config)
.then(conn => {
    const result = conn.query("INSERT INTO people(name) values(?)",[faker.name.firstName() + ' ' + faker.name.lastName()]);

    conn.query("SELECT name FROM people")
    .then((rows) => {
        rows.forEach(element => {
            names.push(element.name);
        });
    })
    .catch(err => {
        console.log(err);
        conn.end();
    })
}).catch(err => {
    console.log(err);
});

app.get('/', (request, response) => {
    let lista = '<ul>';
    names.forEach(element => {
        lista += `<li>${element}</li>`;
    })
    lista += '</ul>';
    response.send('<h1>Full Cycle!</h1><br/>'+lista);
})

app.listen(port, () => {
    console.log('Rodando na porta '+port)
})