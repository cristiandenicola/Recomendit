const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var cors = require('cors');

const neo4j = require('neo4j-driver');
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "12345678"), { disableLosslessIntegers: true });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));


app.post("/buscarFilm", function(req, res) {
    //var termino = req.body.termino;

    const session = driver.session();

    //var query = "MATCH (s:Song) WHERE toLower(s.title) CONTAINS '" + termino + 
    //"' OR toLower(s.artist) CONTAINS '" + termino + "' RETURN s.id, s.title, s.artist, toInteger(s.bpm), s.genre, s.cover, s.preview LIMIT 5";

    var query = "MATCH (f:Film)-[:ES_GENERO_DE]->(g:Genre{genre:'Horror'}) return f.title, f.id, f.original_language"

    const resultPromise = session.run(query);
    resultPromise
        .then(result =>{
            if(result.records.length == 0){
                res.json({msg: 'Vuoto'});
            }else{
                var respuesta = [];

                for(var i=0; i<result.records.length; i++){
                    var film = {
                        title: result.records[i]._fields[0],
                        id: result.records[i]._fields[1],
                        original_language: result.records[i]._fields[2]
                    };
    
                    respuesta.push(film);
                }

                res.send(respuesta);
            }
        })
        .catch( error => {
            res.json({msg: 'Error'});
            console.log(error);
        })
        .then(() => session.close());
})

app.listen(3000, function() {
    console.log("Backend escuchando en el puerto 3000");
})