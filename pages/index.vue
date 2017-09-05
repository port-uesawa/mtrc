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
    }
  }
</script>

<style lang="scss">
  .l-main {
    width:1280px;
    display:flex;
    p {
      font-weight: 300;
    }
  }
</style>
