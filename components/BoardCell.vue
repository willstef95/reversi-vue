<template>
    <v-card class="cell" :style="{ background: '#4caf50' }" outlined @click="handleClick">
        <GameStone v-if="stone" :color="stone" />
    </v-card>
</template>

<script setup>
import GameStone from '~/components/GameStone.vue';
import { useGameStore } from '~/stores/game';

const props = defineProps({
    row: Number,
    col: Number,
    stone: String,
});

const gameStore = useGameStore();

const handleClick = async () => {
    try {
        const url = `http://localhost:9000/makeMoveAjax/${props.row + 1}/${props.col + 1}`;
        const response = await fetch(url, { method: 'GET' });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        gameStore.updateBoard(data);
    } catch (error) {
        console.error('Error calling backend:', error);
    }
};
</script>

<style scoped>
.cell {
    width: 100%;
    /* Nutzt die Größe der Zelle aus dem Grid */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #4caf50;
    ;
}
</style>
