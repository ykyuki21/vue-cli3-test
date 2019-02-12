<template>
  <div class="about2">
    <myheader/>
    <h1>This is an about page 2</h1>
  </div>
</template>


<script>
// @ is an alias to /src
import myheader from '@/components/myheader.vue'

export default {
  name: 'about2',
  components: {
    myheader
  }
}
</script>
