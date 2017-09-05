<template>

  <section class="l-game-wrapper">
    <!-- <core/> -->
    <!-- <debugWindow/> -->
    <backgroundImage/>
    <messageWindowLarge/>
    <!-- <CharactorArea/> -->
    <!-- <overlayheader/> -->
    <!-- <overlayheader/> -->

  </section>
</template>

<script>
  import MessageWindowLarge from '~/components/game/MessageWindowLarge.vue'
  import BackgroundImage from '~/components/game/BackgroundImage.vue'
  export default {
    layout: 'gaming',
    components: {
      MessageWindowLarge,
      BackgroundImage

    }
  }
</script>

<style lang="scss">
  .l-game-wrapper {
    position: relative;
    width:1280px;
    height:720px;
  }
</style>
