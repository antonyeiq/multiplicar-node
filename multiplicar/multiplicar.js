const fs = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número.`);
        }
        if (!Number(limite)) {
            reject(`El límite introducido ${limite} no es un número`);
        }
        let content = `tabla de multiplicar del ${colors.green(base)}\n`;
        for (let i = 1; i <= limite; i++) {
            content += `${base} * ${ i } = ${base * i}\n`;
        }



        resolve(content);
    });
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un número.`);
            return;
        }
        let content = "";
        for (let i = 1; i <= limite; i++) {
            content += `${base} * ${ i } = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(content));
        let file = `tablas/tabla-${base}-al-${limite}.txt`;
        fs.writeFile(file, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(file);
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}