<template>
    <div class="filmOTM">
        <div :class="'filmOTM-inner ' + filmOTM.color">
            <div class="filmOTM-text-wrap">
                <h2 class="bg-text">{{ filmOTM.bgtext }}</h2>
            </div>
            <div class="filmOTM-image-wrap">
                <img :src="filmOTM.src" class="image" />
            </div>
            <div class="filmOTM-detail">
                <h2>{{ filmOTM.title }}</h2>
                <p>{{ filmOTM.plot }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
  name: 'filmOTM',
  props: ['filmOTM']
}
</script>

<style>

    p {
        margin-top: 5px;
    }

    .filmOTM {
        flex: 1 1 33.333%;
        width: 600px;
        height: 600px;
        padding: 25px; 
        align-items: center;
    }

    .filmOTM-inner {
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        perspective: 500px;
        border-radius: 0.25em;
    }

    .filmOTM-inner.blue {
        background-image: linear-gradient(to bottom right, #458CBB, #AA66B8);
    }

    .filmOTM-inner.gray {
        background-image: linear-gradient(to bottom right, #DDEFF2, #2496AC); 
    }

    .filmOTM-inner.yellow {
        background-image: linear-gradient(to bottom right, #F8EE9C, #D84623);
    }
    .filmOTM-inner.purple {
        background-image: linear-gradient(to bottom right, #8983F4, #FFB757);
    }

    .filmOTM-text-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        perspective: 500px;
    }

    .filmOTM-text-wrap h2 {
        color: #313131;
        font-size: 80px;
        font-weight: 900;
        opacity: 0.2;
        transform-origin: center;
    }

    .filmOTM-image-wrap {
        position: relative;
        z-index: 1;
        transform-origin: center;
    }

    .filmOTM-image-wrap .image {
        width: 100%;
        filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
    }
</style>