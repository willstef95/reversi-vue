<template>
    <div class="game-page">
        <h1>Reversi</h1>
        <p>Spieler 1: {{ player1 }}</p>
        <p>Spieler 2: {{ player2 }}</p>
        <!-- Hier wird das Spielbrett später hinzugefügt -->
    </div>
</template>

<script setup>
import { useGameStore } from '~/stores/game';

const gameStore = useGameStore();

// Spielernamen aus dem Store abrufen
const player1 = gameStore.player1;
const player2 = gameStore.player2;
</script>

<style>
.game-page {
    text-align: center;
    margin-top: 50px;
}
</style>