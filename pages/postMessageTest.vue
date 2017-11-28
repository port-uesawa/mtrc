<template>

  <section class="l-main">
    <p>test</p>
    <input type='button' value='yahooにジャンプ' v-on:click="this.postMsg" />
  </section>
</template>

<script>
  export default {
    methods: {
      postMsg () {
        parent.postMessage('https://www.yahoo.co.jp/', 'https://fiddle.jshell.net/')
      }
    }
  }
</script>

<style lang="scss">
    p{
        color: white
    }
</style>
