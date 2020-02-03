<template>
  <LearnMode :terms="terms" />
</template>

<script>
import LearnMode from './components/LearnMode.vue'

export default {
  name: 'app',
  components: {
    LearnMode
  },
  data() {
    return {
      terms: [
        {
          id: 1,
          word: 'Nebraska',
          definition: 'Lincoln',
        },
        {
          id: 2,
          word: 'Massachusetts',
          definition: 'Boston',
        },
        {
          id: 3,
          word: 'California',
          definition: 'Sacramento',
        },
      ]
    };
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  padding: 0;
}
</style>
