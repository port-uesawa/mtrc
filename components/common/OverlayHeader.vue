<template>
  <nav class="l-overlay_header">
    <i class="header_logo">ろご</i>
    <ul data-overlay-list>
      <li v-for="item in menuContents">{{item.content}}</li>
    </ul>
  </nav>
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
          { rel: 'stylesheet', href: '~/assets/stylesheets/components/common/overlay_header.scss', lang: 'sass' }
        ]
      }
    }
  }
</script>
