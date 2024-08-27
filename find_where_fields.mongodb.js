/* NOME DO BANCO DE DADOS: */
const database = 'BD3-GABRIEL-AULA';

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

db[collection].find({"categoria":"Ficção Científica"},
                    {"_id":0, "codigo":0, "descricao":0}
                    );

// seria trágico se não fosse cômico e vice-versa