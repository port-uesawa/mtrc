<template>
  <div class='l-debug-window'>
    <h4 class='c-debug-heading'>◆　DebugWindow　◆</h4>
    <div class='c-switch-list' v-if="switchFlag">
      <h6 class='p-switch-heading'>Switch list------------------------------------------------------</h6>
      <ul class='p-switch-contents'>
        <li class='p-switch-contents__list'>001:true</li>
        <li>002:true</li>
        <li>003:true</li>
        <li>004:true</li>
        <li>005:true</li>
        <li>006:true</li>
        <li>007:true</li>
      </ul>
    </div>
    <h6 class='p-switch-heading'>Script status------------------------------------------------------</h6>
    <ul class='c-param-list'>
      <li class='p-param-contents'>ScriptName:{{status.name}}</li>
      <li class='p-param-contents'>ScriptCount:{{status.count}}</li>
      <li class='p-param-contents'>ScriptRunning:{{status.current}}</li>
      <li class='p-param-contents'>BGM:</li>
      <li class='p-param-contents'>SE:</li>
      <li class='p-param-contents'>BGI:{{status.images.background}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'debugWindow',
    props: ['status'],
    data (context) {
      return {
        switchFlag: false,
        debugContents: [
          {isSwitch: true}
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
  .l-debug-window {
    position: absolute;
    top:0;
    z-index: 90001;
    width:100%;
    background-color: rgba(0, 0, 0, 0.5);
    color:#FFF;

    .c-switch-list {
      height: 200px;
      width: 100%;

      .p-switch-heading{
        display: flex;
        align-items: center;
        height: 20px;
      }

      .p-switch-contents,{
        display: flex;
        height: 180px;
        width: 100%;
        flex-flow: column wrap;
      }
    }

    .c-param-list {
      height: 50px;
      width: 100%;
      display: flex;
      flex-flow: column wrap;
    }
  }
</style>
