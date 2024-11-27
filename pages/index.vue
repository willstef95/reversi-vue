<script setup>
import { useGameStore } from '~/stores/game';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const gameStore = useGameStore(); // Pinia Store verwenden
const router = useRouter(); // Für das Routing

// Lokale States für die Eingabe
const player1 = ref('');
const player2 = ref('');

// Funktion zum Starten des Spiels
const startGame = () => {
    // Spielernamen im Store speichern
    gameStore.setPlayers(player1.value, player2.value);

    gameStore.initializeBoard()

    // Auf die Game-Seite routen
    router.push('/game');
};
</script>

<template>
    <div class="landing-page">
        <h1>Reversi</h1>
        <form @submit.prevent="startGame">
            <div>
                <label for="player1">Name Spieler 1:</label>
                <input id="player1" v-model="player1" placeholder="Spieler 1" required />
            </div>
            <div>
                <label for="player2">Name Spieler 2:</label>
                <input id="player2" v-model="player2" placeholder="Spieler 2" required />
            </div>
            <button type="submit">Spiel starten</button>
        </form>
    </div>
</template>



<style>
.landing-page {
    text-align: center;
    margin-top: 50px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: auto;
}

label {
    font-weight: bold;
}

button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>