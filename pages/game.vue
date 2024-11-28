<script setup>
import { useGameStore } from '~/stores/game';
import GameBoard from '~/components/GameBoard.vue';

const gameStore = useGameStore();
const currentPlayer = computed(() => gameStore.currentPlayer);
const player1 = computed(() => gameStore.player1);
const player2 = computed(() => gameStore.player2);

// Bestimme die Farbe des aktuellen Spielers
const currentPlayerColor = computed(() =>
    currentPlayer.value === 'black' ? 'black' : 'white'
);
</script>
<template>
    <v-container class="game-container" fluid>
        <!-- Spieler-Info -->
        <v-row justify="center" align="center" class="player-info">
            <v-col cols="auto" class="text-center">
                <v-avatar :color="currentPlayerColor" size="40" :class="currentPlayer === 'white' ? 'border' : ''">
                    <!-- Stein wird dynamisch angezeigt -->
                </v-avatar>
            </v-col>
            <v-col cols="auto" class="text-center">
                <p>{{ currentPlayer === 'black' ? player1 : player2 }}</p>
            </v-col>
            <v-col cols="auto" class="text-center">
                <v-avatar :color="currentPlayerColor" size="40" :class="currentPlayer === 'white' ? 'border' : ''">
                    <!-- Stein wird dynamisch angezeigt -->
                </v-avatar>
            </v-col>
        </v-row>

        <!-- Spielfeld -->
        <GameBoard />
    </v-container>
</template>


<style scoped>
.game-container {
    text-align: center;
}

.player-info {
    margin-bottom: 20px;
}

.border {
    border: 10px solid black;
    /* Schwarze Umrandung für den weißen Stein */
    border-radius: 50%;
    /* Runde Form sicherstellen */
    /* box-sizing: border-box; */
    /* Verhindert, dass die Größe durch die Border verändert wird */
}
</style>
