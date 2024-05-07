"use strict";
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const readline = require("readline-sync");
async function main() {
    // Setting default values to connecting to Mongo DB 
    const url = "mongodb://localhost:27017";
    const database = 'Restaurante';
    const collection = 'Recetas';
    /*
        This function creates the connection to Mongo DB
        Returns -> The client of Mongo DB
    */
    async function connectToMongo() {
        let client = null;
        try {
            const config = { useNewUrlParser: true, useUnifiedTopology: true };
            client = new MongoClient(url, config);
            await client.connect();
        }
        catch (error) {
            console.log(`Error connecting to database: ${error}`);
        }
        return client;
    }
    /*
        This function closes the connection to Mongo DB
        Returns -> void
    */
    async function closeConnection(client) {
        await client.close();
    }
    // ____________________________________________________________________________________ //
    /*
        This function executes the queries into Mongo DB
        using the client in the parameter
        Returns -> void
        */
    async function restaurante(client) {
        try {
            // Main menu 
            console.log(`1. Buscar recetas o ingredientes`);
            console.log(`2. Actualizar informacion del recetario o los ingredientes`);
            console.log(`3. Eliminar recetas o ingredientes`);
            console.log(`4. Marcar como hecha una receta`);
            let choice = parseInt(readline.question("Elige la opcion que desees: "));
            console.log(`\n`);
            switch (choice) {
                case 1:
                    await find(client);
                    break;
                case 2:
                    await update(client);
                    break;
                case 3:
                    await deleteDocument(client);
                    break;
                case 4:
                    await reduceStock(client);
                    break;
                default:
                    console.log(`Esta opcion no esta disponible`);
                    break;
            }
        }
        catch (error) {
            console.log(`Error executing queries: ${error}`);
        }
    }
    /*
        This function executes 'find' in Mongo DB, depending on
        the user's choice
        Returns -> void
    */
    async function find(client) {
        console.log(`1. Ver el catalogo de recetas completo`);
        console.log(`2. Filtrar recetas por nombre`);
        console.log(`3. Filtrar recetas por categoria`);
        console.log(`4. Filtrar recetas por dificultad`);
        console.log(`5. Buscar un ingredientes de una receta`);
        let choice = parseInt(readline.question("Elige la opcion que desees: "));
        // Connnecting to database & default collection 
        const myDatabase = client.db(database);
        let myCollection = myDatabase.collection(collection);
        let result, filtro;
        switch (choice) {
            case 1:
                result = await myCollection.find({}).toArray();
                break;
            case 2:
                filtro = readline.question(`Escribe el nombre de la receta: `);
                result = await myCollection.find({ nombre: filtro }).toArray();
                break;
            case 3:
                filtro = readline.question(`Escribe el nombre de la categoria: `);
                result = await myCollection.find({ categoria: filtro }).toArray();
                break;
            case 4:
                // Creates a dictionary to better manipulation of user's choice 
                const dificultades = {
                    1: 'Fácil',
                    2: 'Media',
                    3: 'Dificil'
                };
                console.log(`1. Facil`);
                console.log(`2. Media`);
                console.log(`3. Dificil`);
                const dificultad = parseInt(readline.question(`Escribe el numero de la dificultad: `));
                result = await myCollection.find({ dificultad: dificultades[dificultad] }).toArray();
                break;
            case 5:
                const receta = readline.question(`Escribe el nombre de la receta a buscar: `);
                // Gets the original recipe
                result = await myCollection.find({ nombre: receta }).toArray();
                // Creates an array of ingredients, based on its id
                const ingredientes = [];
                for (let ingrediente of result[0].ingredientes) {
                    ingredientes.push(new ObjectId(ingrediente._id.$oid));
                }
                // Changes the main collection to search all the ingredients
                myCollection = myDatabase.collection(`Ingredientes`);
                result = await myCollection.find({ _id: { $in: ingredientes } }).toArray();
                break;
            default:
                console.log(`Esta opcion no esta disponible`);
                break;
        }
        // Shows the result 
        console.log(result);
    }
    /*
        This function updates the content in 'Recetas' & 'Ingredientes'
        Returns -> void
    */
    async function update(client) {
        // Connecting to database & collection 
        const myDatabase = client.db(database);
        let myCollection = myDatabase.collection(collection);
        console.log(`1. Actualizar recetas`);
        console.log(`2. Actualizar ingredientes`);
        let choice = parseInt(readline.question(`Escribe el numero de la opcion a realizar: `));
        if (choice === 1) {
            const receta = readline.question(`Escribe el nombre del platillo a actualizar: `);
            // Creates a menu of choices 
            const recetasMenu = {
                1: 'nombre',
                2: 'categoria',
                3: 'dificultad',
                4: 'calificacion'
            };
            console.log(`1. Nombre`);
            console.log(`2. Categoria`);
            console.log(`3. Dificultad`);
            console.log(`4. Calificacion`);
            choice = parseInt(readline.question(`Escribe el numero del campo a actualizar: `));
            const newFieldValue = readline.question(`Escribe el nuevo valor para ${recetasMenu[choice]}: `);
            // Updates a document, based on its 'nombre' field, setting the previous value with the key stored in 'recetasMenu'
            await myCollection.updateOne({ nombre: receta }, { $set: { [recetasMenu[choice]]: newFieldValue } });
        }
        else {
            // Changes the default collection 
            myCollection = myDatabase.collection(`Ingredientes`);
            const ingrediente = readline.question(`Escribe el nombre del ingrediente a modificar: `);
            const ingredientesMenu = {
                1: 'nombre',
                2: 'categoria',
                3: 'descripcion',
                4: 'stock',
                5: 'peso'
            };
            console.log(`1. Nombre`);
            console.log(`2. Categoria`);
            console.log(`3. Descripcion`);
            console.log(`4. Stock`);
            console.log(`5. Peso promedio`);
            choice = parseInt(readline.question(`Escribe el numero del campo a actualizar: `));
            const newFieldValue = readline.question(`Escribe el nuevo valor para ${ingredientesMenu[choice]}: `);
            // Updates a document, based on 'nombre' as key, setting the value as the previous question and its key as the 'ingredientesMenu' value
            await myCollection.updateOne({ nombre: ingrediente }, { $set: { [ingredientesMenu[choice]]: newFieldValue } });
        }
    }
    /*
        This function deletes documents in the collection 'Ingredientes' & 'Recetas'
        Returns -> void
    */
    async function deleteDocument(client) {
        // Connecting to database
        const myDatabase = client.db(database);
        let myCollection = myDatabase.collection(collection);
        console.log(`1. Eliminar recetas`);
        console.log(`2. Eliminar ingredientes`);
        let choice = parseInt(readline.question(`Escribe el numero de la opcion a realizar: `));
        if (choice === 1) {
            // Deletes a document, based on its name  
            const documentToDelete = readline.question(`Escribe el nombre de la receta a eliminar: `);
            await myCollection.deleteOne({ nombre: documentToDelete });
        }
        else {
            const documentToDelete = readline.question(`Escribe el nombre del ingrediente a eliminar: `);
            // Changes the default collection 
            myCollection = myDatabase.collection(`Ingredientes`);
            // Finds the document and retrieves its id 
            const document = await myCollection.find({ nombre: documentToDelete }).toArray();
            const id = document[0]._id.toString();
            // Deletes the document inside of 'Ingredientes' with the previous id
            await myCollection.deleteOne({ _id: id });
            // Changes the collection to the default 
            myCollection = myDatabase.collection(collection);
            // Deletes the field with the id of all the 'Ingredientes' array inside of each document in 'Recetas' collection 
            await myCollection.updateMany({}, { $pull: { ingredientes: { '_id.$oid': id } } });
        }
    }
    async function reduceStock(client) {
        const myDatabase = client.db(database);
        let myCollection = myDatabase.collection(collection);
        const recipe = readline.question(`Escribe el nombre de la receta que fue hecha: `);
        let result = await myCollection.find({ nombre: recipe }).toArray();
        myCollection = myDatabase.collection('Ingredientes');
        let id;
        const ingredientes = [];
        let ingredient;
        for (let document of result) {
            for (let ingredienteEnReceta of document.ingredientes) {
                id = ingredienteEnReceta._id.$oid;
                ingredient = await myCollection.find({ _id: new ObjectId(id) }).toArray();
                ingredient = ingredient[0];
                ingredient.stock = +(ingredient.stock - 1);
                await myCollection.updateOne({ _id: new ObjectId(id) }, { $set: ingredient });
            }
        }
    }
    // Calling the functions
    const client = await connectToMongo();
    console.log(`\n`);
    await restaurante(client);
    await closeConnection(client);
}
// Calling the app main
main();
