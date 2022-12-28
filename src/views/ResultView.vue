<template>
    <h1>ciaooooo</h1>

    <div id="texto-busqueda" @click="buscarFilm">Prueba a buscar algún jugador.</div>

</template>

<script>
    import axios from 'axios'

    export default {
      data(){
        return {
          totalFilm : 0,

          dialog: false,
          busqueda: null,
          resultadosBusqueda: null,

          /*Variables relacionadas con la snackbar*/
          snackbar: false,
          textoSnackbar: ""
        }
      },
      methods: {
        buscarFilm(){
            axios
                .post('http://localhost:3000/buscarFilm' , {
                    termino: this.busqueda
                })
                .then(response => {
                    this.resultadosBusqueda = response.data;
                    this.totalFilm = response.length;

                    if(this.totalFilm != 0) {
                      document.getElementById('texto-busqueda').innerHTML = 'Resultados totales: '+this.totalFilm;
                    }
                })
                .catch(error => {
                    this.textoSnackbar = "Ocurió un error. Intenta buscar de nuevo";
                    this.snackbar = true;
                    console.log(error);
                })
        },
      }
    }

    
</script>

<style>
    #texto-busqueda {
        color:white;
    }
</style>