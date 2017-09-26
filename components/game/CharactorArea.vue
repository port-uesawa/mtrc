<template>
  <div class='l-charactor-area'>
    <ul class='c-charactor-list'>
      <li v-for="item in chars" class='c-charactor-list__imageWrapper'>
        <img class='c-charactor-list__image' v-bind:src='item' />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'charactorArea',
    props: ['chars'],
    data () {
      return {
        menuContents: [

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
    z-index: 30001;
    width:100%;
    height:100%;

    .c-charactor-list{
      width:100%;
      display:flex;
      justify-content: space-around;


      &__imageWrapper{
        width:200px;
        height:700px;
        display:flex;
        justify-content: center;
        align-items: baseline;
      }
      &__image{
        width:800px;
      }
    }
  }
</style>
