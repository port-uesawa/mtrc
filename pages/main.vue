<template>
  <section class="l-game-wrapper" v-on:click="goNuxt">
    <!-- <core/> -->
    <debugWindow v-bind:status="script" />
    <backgroundImage v-if="config.layer.backgroundImage" />
    <messageWindowLarge v-if="config.layer.messageWindow.large" v-bind:title="tacking.message.title" v-bind:text="tacking.message.text" />
    <!-- <CharactorArea/> -->
    <!-- <overlayheader/> -->
    <!-- <overlayheader/> -->

  </section>
</template>

<script>
  import DebugWindow from '~/components/game/DebugWindow.vue'
  import MessageWindowLarge from '~/components/game/MessageWindowLarge.vue'
  import BackgroundImage from '~/components/game/BackgroundImage.vue'
  import axios from 'axios'
  import 'babel-polyfill'
  export default {
    layout: 'gaming',
    components: {
      DebugWindow,
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
          name: '',
          count: 0,
          current: '',
          list: [],
          message: {
            inProgress: false
          }
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
      this.receiveScript('/scripts/01.start.mtrc')
      // this.goNuxt() // 初回は手動で実行
    },
    methods: {
      goNuxt () { // クリック時次の処理の実行
        // this.tacking.message.text = this.script.list[this.script.count][1]
        this.script.current = this.script.list[this.script.count].join()
        switch (this.script.list[this.script.count][0]) {
          case 'T':
            this.runMessage()
            break
          case 'L':
            this.loadScript()
            break
        }
      },
      loadScript () {
        let array = this.script.list[this.script.count]
        this.script.count = 0
        this.receiveScript(array[1])
      },
      receiveScript (src) {
        this.script.name = src
        this.connectSource(src)
      },
      scriptizeData (data) {
        const re = [/\n/, ':']
        const newLine = data.split(re[0])
        let array = []
        newLine.forEach((e, i) => {
          array[i] = []
          e.split(re[1]).forEach((n) => {
            array[i].push(n)
          })
        })
        this.script.list = array
        this.goNuxt()
      },
      connectSource (src) {
        axios.get(src).then(hoge => this.scriptizeData(hoge.data))
      },
      runMessage () { // テキスト関連処理
        let array = this.script.list[this.script.count]
        if (!this.script.message.inProgress) {
          this.script.message.inProgress = true
          this.tacking.message.title = array[1] // title挿入
          this.tacking.message.text = '' // text初期化
          for (let i = 0; i < array[2].length; i++) {
            setTimeout(() => {
              this.tacking.message.text += array[2][i]
            }, 40 * i)
          }
          this.script.count++ // count 進行
        } else {
          this.tacking.message.text = array[2]
        }
        this.script.message.inProgress = false
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
