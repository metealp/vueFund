<template>
  <button :style="{background, color}" :disabled="disabled">
      Button
  </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String
        },
        background: {
            type: String
        },
        disabled: {
            type: Boolean,
        }
    }

}
</script>

<style scoped>
    button {
        background: none;
        color: black;
        border: none;
        border-radius: 5px;
        padding: 10px 40px;
        font-size: 16px;
        cursor: pointer;
        margin: 5px;
    }
    button:hover {
        filter: brightness(125%);
    }
    button:disabled {
        opacity: 0.5;
    }

</style>