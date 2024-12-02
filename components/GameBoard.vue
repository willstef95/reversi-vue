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
            <!-- Spielfeld-Raster -->
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
    width: 90vw;
    /* Nimmt bis zu 90% der Bildschirmbreite ein */
    max-width: 500px;
    /* Begrenzung auf eine maximale Breite */
    border: 2px solid black;
    /* Schwarzer Rahmen */
    background-color: transparent;
    /* Kein Hintergrund */
    display: flex;
    justify-content: center;
    align-items: center;
}

.board-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    /* 8 gleich große Spalten */
    grid-template-rows: repeat(8, 1fr);
    /* 8 gleich große Zeilen */
    gap: 2px;
    /* Abstand zwischen den Zellen */
    width: 100%;
    /* Passt sich an die Breite des Boards an */
    height: 100%;
    /* Passt sich an die Höhe des Boards an */
}
</style>
