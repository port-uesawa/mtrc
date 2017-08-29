<template>
  <nav id="overray_header">
    <i class="header_logo"></i>
    <ul data-overray-list>
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
        ]
      }
    }
  }
</script>
