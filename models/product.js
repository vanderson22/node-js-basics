const fs = require('fs');
const path = require('path');

const products = [];
const rootFolder = path.dirname(require.main.filename);

console.log(`dirname : ${rootFolder}`);
class Product {

    constructor(title) {
        this.title = title;
    }

    save() {

        fs.readFile(path.join(rootFolder, 'data', 'products.json'), 'utf8', (err, fileContent) => {

            let products = [];
            if (!err) {
                try {

                    products = JSON.parse(fileContent);
                } catch (parseErr) {
                    console.error('Erro ao parsear o JSON:', parseErr);
                }

                products.push(this);

                const updatedContent = JSON.stringify(products, null, 2);
                fs.writeFile(path.join(rootFolder, 'data', 'products.json'), updatedContent, 'utf8', writeErr => {
                    if (writeErr) {
                        console.error('Erro ao escrever no arquivo:', writeErr);
                    } else {
                        console.log('Arquivo atualizado com sucesso!');
                    }
                });
            }


        });

    }

    //importante para tratar assincronismo. (precisa mexer no chamador também.)
    static fetchAll(callback) {

        fs.readFile(path.join(rootFolder, 'data', 'products.json'), 'utf8', (err, fileContent) => {

            if (err)
                callback( []);
                //  return [];
            callback( JSON.parse(fileContent));
            // return JSON.parse(fileContent);
        });

    }
}


module.exports = Product