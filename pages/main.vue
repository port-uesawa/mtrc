<template>
  <section class="l-game-wrapper" v-on:click="goNuxt">
    <!-- <core/> -->
    <!-- <debugWindow/> -->
    <backgroundImage v-if="config.layer.backgroundImage" />
    <messageWindowLarge v-if="config.layer.messageWindow.large" v-bind:title="tacking.message.title" v-bind:text="tacking.message.text" />
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
    },
    data (context) {
      return {
        config: {
          layer: {
            messageWindow: {
              large: true,
              small: false
            },
            backgroundImage: true
          }
        },
        script: {
          count: 0,
          list: []
        },
        tacking: {
          message: {
            title: '',
            text: ''
          }
        }

      }
    },
    created () {
      // 外部からScriptデータを取得してthis.scriptに展開
      // this.goNuxt() // 初回は手動で実行
    },
    methods: {
      goNuxt () { // クリック時次の処理の実行
        this.script.count++ // count 進行
        // this.tacking.message.text = this.script.list[this.script.count][1]
        // if (0 === 0) { // メッセージ関連
        this.runMessage()
        // }
      },
      runMessage () { // テキスト関連処理
        let array = this.script.list[this.script.count]
        this.tacking.message.title = array[0] // title挿入
        this.tacking.message.text = '' // text初期化
        for (let i = 0; i < array[1].length; i++) {
          setTimeout(() => {
            this.tacking.message.text += array[1][i]
          }, 40 * i)
        }
      }
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
