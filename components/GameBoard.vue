<script setup>
import { useGameStore } from '~/stores/game';
import BoardCell from '~/components/BoardCell.vue';

const gameStore = useGameStore();
const board = computed(() => gameStore.board);

// Flatten the 2D array for easier rendering in grid
const flattenedBoard = computed(() => board.value.flat());
</script>

<template>
    <v-container class="d-flex justify-center align-center">
        <v-sheet elevation="4" class="board">
            <div class="board-grid">
                <BoardCell v-for="(cell, index) in flattenedBoard" :key="`cell-${index}`" :row="Math.floor(index / 8)"
                    :col="index % 8" :stone="cell" />
            </div>
        </v-sheet>
    </v-container>
</template>


<style scoped>
.board {
    aspect-ratio: 1;
    width: 95vw;
    max-width: 500px;
    border: 2px solid black;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.board-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 1.5px;
    width: 100%;
    height: 100%;
}
</style>
