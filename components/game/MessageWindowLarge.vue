<template>
  <div class="c-message-window-large">
    <div class="p-window"></div>
    <div class="p-window-cover">
      <div class="p-window-cover__face" v-if="face">
        <div class="p-window-cover__face--image"></div>
      </div>
      <div class="p-window-cover__message">
        <p class="p-window-cover__title">{{title}}</p>
        <p class="p-window-cover__text">{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data (context) {
      return {
        face: true, // true -> Faceあり false-> Faceなし
        faceImage: 0 // this.message.faceImage
      }
    },
    props: ['title', 'text'],
    head () {
      return {
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    created () {
      // console.log(this)
      // this.name = this.message.title
      // this.text = this.message.text
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'rounded-mgenplus-2m-medium';
    src: url('/assets/resources/font/rounded-mgenplus-2m-medium.ttf') format('truetype');
  }
  .c-message-window-large {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 32%;
    z-index: 2;
  }

  .p-window {
    position: absolute;
    width: 98%;
    height: 93%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    z-index: 3;
    filter: blur(2px);
  }

  .p-window-cover {
    position: absolute;
    display:flex;
    width: 98%;
    height: 93%;
    z-index: 4;
    color: #FFF;

    &__face {
      // display: none;
      position: relative;
      display: flex;
      align-items: center;
      bottom: 0;
      width: 20%;
      height: 100%;
      margin-left: 2%;

      &--image {
        width: 250px;
        height: 400px;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('/assets/resources/char/face/Elf-A-01.png');
      }
    }

    &__message {
      font-family: 'rounded-mgenplus-2m-medium';
      width: 98%;
      margin: 1% 2%;
    }

    &__title {
      font-family: 'rounded-mgenplus-2m-medium';
      font-size: 180%;
    }

    &__text {
      font-family: 'rounded-mgenplus-2m-medium';
      font-size: 200%;
      margin-top: 1%;
      line-height: 1.56em;
    }
  }
</style>
