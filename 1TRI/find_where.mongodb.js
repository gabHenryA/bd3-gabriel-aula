/* NOME DO BANCO DE DADOS: */
const database = 'BD3-GABRIEL-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

db[collection].find({"autor":"Isaac Asimov"});

// seria trágico se não fosse cômico e vice-versa