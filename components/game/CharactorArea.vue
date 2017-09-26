<template>
  <div class='l-charactor-area'></div>
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
        ]
      }
    }
  }
</script>

<style lang="scss">
  .l-charactor-area {
    position: absolute;
    z-index: 1;
    width:100%;
    height:100%;
  }
</style>
