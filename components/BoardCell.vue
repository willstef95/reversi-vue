<template>
    <div class="cell" @click="handleClick">
        <GameStone v-if="stone" :color="stone" />
    </div>
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

const handleClick = () => {
    const currentBoard = JSON.parse(JSON.stringify(gameStore.board));
    gameStore.makeMove(props.row, props.col);

    // Simuliere das Senden der Daten an den Server
    console.log({
        board: currentBoard,
        clickedRow: props.row,
        clickedCol: props.col,
        currentPlayer: gameStore.currentPlayer,
    });
};
</script>

<style>
.cell {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgreen;
}
</style>