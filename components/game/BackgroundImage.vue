<template>
  <div class='l-background-image' :style="style"></div>
</template>

<script>
  export default {
    name: 'backgroundArea',
    data () {
      return {
        styleObject: {
          backgroundImage: ''
        }
      }
    },
    props: ['image', 'color'],
    computed: {
      style () {
        return [
          'background-color: ' + this.color + ';',
          'background-image: url(' + this.image + ');'
        ].join().replace(',', '')
      }
    },
    head () {
      return {
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .l-background-image {
    position: absolute;
    z-index: 20001;
    width:100%;
    height:100%;
    background-size: cover;
  }
</style>
