<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true,
        validator: (value) => ['black', 'white'].includes(value),
    },
});
</script>

<template>
    <v-avatar size="80%" :color="color === 'black' ? 'black' : 'white'" class="stone"></v-avatar>
</template>

<style scoped>
.stone {
    border: 2px solid black;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
