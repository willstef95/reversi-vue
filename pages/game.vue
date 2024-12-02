<script setup>
import { useGameStore } from '~/stores/game';
import GameBoard from '~/components/GameBoard.vue';

const gameStore = useGameStore();
const currentPlayer = computed(() => gameStore.currentPlayer);
const player1 = computed(() => gameStore.player1);
const player2 = computed(() => gameStore.player2);
</script>

<template>
    <div class="game-container">
        <div class="player-info">
            <div :class="`stone ${currentPlayer}`"></div>
            <p>{{ currentPlayer === 'black' ? player1 : player2 }}</p>
            <div :class="`stone ${currentPlayer}`"></div>
        </div>
        <GameBoard />
    </div>
</template>



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

.player-info p {
    margin: 0;
    font-size: 16px;
    line-height: 30px;
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