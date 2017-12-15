<template>
  <input type="text" :placeholder="placeholder">
</template>

<script>
export default {
    props:['placeholder']
}
</script>

<style lang="scss">
    input{
        height: 42px;
        width: 100%;
        padding-left:10px;
        border:none;
        outline: none;
        background-color:#f5f5f5;
        color:#b5b5b5;
        font-size:16px;
        border-radius: 5px;
        box-sizing: border-box;
    }
</style>
