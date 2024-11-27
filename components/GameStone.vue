<template>
    <div :class="`stone ${color}`"></div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true,
        validator: (value) => ['black', 'white'].includes(value),
    },
});
</script>

<style>
.stone {
    width: 80%;
    height: 80%;
    border-radius: 50%;
}

.stone.black {
    background-color: black;
}

.stone.white {
    background-color: white;
    border: 2px solid black;
}
</style>