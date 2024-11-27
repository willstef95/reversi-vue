<template>
    <div class="game-container">
        <div class="player-info">
            <div :class="`stone ${currentPlayer}`"></div>
            <p>{{ currentPlayer === 'black' ? player1 : player2 }} ist am Zug</p>
        </div>
        <GameBoard />
    </div>
</template>

<script setup>
import { useGameStore } from '~/stores/game';
import GameBoard from '~/components/GameBoard.vue';

const gameStore = useGameStore();
const currentPlayer = computed(() => gameStore.currentPlayer);
const player1 = computed(() => gameStore.player1);
const player2 = computed(() => gameStore.player2);
</script>

<style>
.game-container {
    text-align: center;
}

.player-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.stone {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
}

.stone.black {
    background-color: black;
}

.stone.white {
    background-color: white;
}
</style>