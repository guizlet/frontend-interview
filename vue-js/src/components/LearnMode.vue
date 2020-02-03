<script>
export default {
  name: 'LearnMode',
  props: ['terms']
}
</script>

<template>
  <div class="LearnMode">
    <h1 class="LearnMode-prompt">{{terms[0].word}}</h1>
    <form class="LearnMode-form">
      <input auto="{true}" class="LearnMode-input" type="text" />
      <button class="LearnMode-submit" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
  .LearnMode {
    padding: 20px;
  }

  .LearnMode-prompt {
    margin: 0 0 16px;
  }

  .LearnMode-input {
    border-radius: 2px;
    border: 2px solid #d9dfe2;
    display: inline-block;
    font-size: 15px;
    line-height: 1.35;
    margin-right: 5px;
    outline: 0 none;
    padding: 8px;
    resize: none;
  }

  .LearnMode-submit {
    background: #1f6fd9;
    border-radius: 2px;
    border: 1px solid #1d66c8;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 2.14;
    outline: 0 none;
    padding: 0 20px;
    text-align: center;
  }

</style>
