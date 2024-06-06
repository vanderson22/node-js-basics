const fs = require('fs');
const path = require('path');

const products = [];
const rootFolder = path.dirname(require.main.filename);
const dataFolder = path.join(rootFolder, 'data', 'products.json');

const getProductsFromFile = callback => {

    fs.readFile(dataFolder, 'utf8', (err, fileContent) => {

        if (err)
            callback([]);
        else
            callback(JSON.parse(fileContent));
    });

};

console.log(`dirname : ${rootFolder}`);
class Product {

    constructor(title) {
        this.title = title;
    }

    save() {

        getProductsFromFile(products => {
            products.push(this);
            const updatedContent = JSON.stringify(products, null, 2);
            fs.writeFile(path.join(rootFolder, 'data', 'products.json'), updatedContent, 'utf8', writeErr => {
                if (writeErr) {
                    console.error('Erro ao escrever no arquivo:', writeErr);
                } else {
                    console.log('Arquivo atualizado com sucesso!');
                }
            });

        });
    }

    //importante para tratar assincronismo. (precisa mexer no chamador também.)
    static fetchAll(callback) {
        Product.fetchAllMinus(callback); // sem return ??? 
    }

    //esta segunda função foi chamada de forma redundante apenas
    // para fins educativos.
    static fetchAllMinus(callback) {
        getProductsFromFile(callback); 
   }
}


module.exports = Product