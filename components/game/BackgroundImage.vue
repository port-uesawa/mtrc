<template>
  <div class='l-background-image'></div>
</template>

<script>
  export default {
    data () {
      return {
        menuContents: [
          {content: 'TOP'},
          {content: 'ABOUT'},
          {content: 'CONTENTS'},
          {content: 'CONTACT'}
        ]
      }
    },
    head () {
      return {
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ],
        link: [
          // { rel: 'stylesheet', href: '/assets/stylesheets/components/common/overlay_header.scss', lang: 'scss' }
          { rel: 'stylesheet', href: '/assets/overlay_header.css' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .l-background-image {
    position: absolute;
    z-index: 1;
    width:100%;
    height:100%;
    background-image: url('/assets/resources/bgi/03.machi.jpg');
  }
</style>
