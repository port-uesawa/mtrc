<template>

  <section class="l-main">
    <overlayheader/>
    <p>test</p>
  </section>
</template>

<script>
  import Overlayheader from '~/components/common/OverlayHeader.vue'
  export default {
    components: {
      Overlayheader
    },
    head: {
      // script: [
      //  { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      // ],
    }
  }
</script>

<style>
  .l-main {
    width:1280px;
    display:flex;


  }
</style>
