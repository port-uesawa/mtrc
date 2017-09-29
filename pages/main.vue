<template>
  <section class="l-game-wrapper" v-on:click="goNuxt">
    <!-- <core/> -->
    <debugWindow v-bind:status="script" />
    <backgroundImage v-if="config.layer.backgroundImage" v-bind:color="images.backgroundColor" v-bind:image="images.backgroundImage" />
    <messageWindowLarge v-if="config.layer.messageWindow.large" v-bind:title="tacking.message.title" v-bind:text="tacking.message.text" />
    <charactorArea v-bind:chars="images.stand" />
    <!-- <overlayheader/> -->
    <!-- <overlayheader/> -->

  </section>
</template>

<script>
  import DebugWindow from '~/components/game/DebugWindow.vue' // 90000
  import BackgroundImage from '~/components/game/BackgroundImage.vue' // 20000
  import CharactorArea from '~/components/game/CharactorArea.vue' // 30000
  import MessageWindowLarge from '~/components/game/MessageWindowLarge.vue' // 40000
  import axios from 'axios'
  import 'babel-polyfill'

  export default {
    head () {
      return {
        link: [
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ],
        script: [
          { src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js' }
        ]
      }
    },
    name: 'main',
    layout: 'gaming',
    components: {
      DebugWindow,
      MessageWindowLarge,
      BackgroundImage,
      CharactorArea
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
          },
          images: {
            background: ''
          }
        },
        tacking: {
          message: {
            title: '',
            text: ''
          }
        },
        images: {
          stand: [],
          backgroundColor: '#FFF',
          backgroundImage: '/bgi/rougoku.jpg'
        }
      }
    },
    mounted () {
      let OneSignal = window.OneSignal || []
      OneSignal.push(['init', {
        appId: 'da85beae-c659-421f-9b3a-56291eebb438',
        autoRegister: false,
        notifyButton: {
          enable: true /* Set to false to hide */
        }
      }])
    },
    created () {
      this.receiveScript('/scripts/03.uchimemo.mtrc')
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
          case 'B':
            this.changeBgi()
            break
          case 'C':
            this.changeCharactor()
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
      },
      changeBgi () {
        let array = this.script.list[this.script.count]
        this.images.backgroundImage = array[1]
        this.script.images.background = array[1]
        this.script.count++ // count 進行
        this.goNuxt()
      },
      changeCharactor () {
        this.images.stand = []
        let array = this.script.list[this.script.count]
        console.log(array)
        array.forEach((e, i) => {
          if (i > 0) {
            this.images.stand.push(e)
          }
        })
        this.script.count++ // count 進行
        this.goNuxt()
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
