<template>
    <div class="film">
        <div :class="'film-inner ' + film.color">
            <div class="film-text-wrap">
                <h2 class="bg-text">{{ film.bgtext }}</h2>
            </div>
            <div class="film-image-wrap">
                <img :src="film.src" class="image" />
            </div>
            <div class="film-detail">
                <h2>{{ film.title }}</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eligendi sed cupiditate eius dolores consequatur explicabo dignissimos magnam amet eveniet!</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
  name: 'film',
  props: ['film']
}
</script>

<style>
    .film {
        flex: 1 1 33.333%;
        width: 100%;
        height: 100%;
        padding: 25px; 
    }

    .film-inner {
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        perspective: 500px;
        border-radius: 0.25em;
    }

    .film-inner.blue {
        background-image: linear-gradient(to bottom right, #458CBB, #AA66B8);
    }

    .film-inner.gray {
        background-image: linear-gradient(to bottom right, #DDEFF2, #2496AC); 
    }

    .film-inner.yellow {
        background-image: linear-gradient(to bottom right, #F8EE9C, #D84623);
    }

    .film-text-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        perspective: 500px;
    }

    .film-text-wrap h2 {
        color: #313131;
        font-size: 80px;
        font-weight: 900;
        opacity: 0.2;
        transform-origin: center;
    }

    .film-image-wrap {
        position: relative;
        z-index: 1;
        transform-origin: center;
    }

    .film-image-wrap .image {
        width: 100%;
        filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
    }

</style>