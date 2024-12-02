<script setup>
import { useGameStore } from '~/stores/game';
import BoardCell from '~/components/BoardCell.vue';

const gameStore = useGameStore();
const board = computed(() => gameStore.board);
</script>


<template>
    <div class="board">
        <div class="row" v-for="(row, rowIndex) in board" :key="`row-${rowIndex}`">
            <BoardCell v-for="(cell, colIndex) in row" :key="`cell-${rowIndex}-${colIndex}`" :row="rowIndex"
                :col="colIndex" :stone="cell" />
        </div>
    </div>
</template>



<style>
.board {
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    gap: 0;
    margin: auto;
    border: 2px solid black;
    background-color: green;
    width: 400px;
    height: 400px;
}

.row {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}
</style>