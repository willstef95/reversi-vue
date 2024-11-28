<script setup>
import { useGameStore } from '~/stores/game';
import { navigateTo } from '#app';
import { ref } from 'vue';

const gameStore = useGameStore(); // Pinia Store verwenden

// Lokale States für die Eingabe
const player1 = ref('');
const player2 = ref('');

// Funktion zum Starten des Spiels
const startGame = () => {
    // Spielernamen im Store speichern
    gameStore.setPlayers(player1.value, player2.value);

    gameStore.initializeBoard();

    // Serverseitiges Redirect
    navigateTo('/game');
};
</script>

<template>
    <v-app>
        <v-main>
            <!-- Landing Page Container -->
            <v-container fluid class="landing-page">
                <v-row justify="center" class="text-center">
                    <v-col cols="12">
                        <h1 class="main-header">Reversi</h1>
                    </v-col>
                </v-row>

                <v-row justify="center">
                    <v-col cols="12" sm="12" md="8">
                        <!-- Spielerformular -->
                        <v-card elevation="5" class="form-card">
                            <v-card-title class="form-title">Enter Player Names</v-card-title>
                            <v-card-text>
                                <v-form @submit.prevent="startGame">
                                    <v-text-field label="Name Spieler 1" v-model="player1" outlined
                                        required></v-text-field>
                                    <v-text-field label="Name Spieler 2" v-model="player2" outlined
                                        required></v-text-field>
                                    <v-btn color="primary" block type="submit" class="start-btn">
                                        Spiel starten
                                    </v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
.landing-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4caf50;
}

.main-header {
    font-size: 48px;
    font-weight: bold;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    color: #333;
}

.form-card {
    border-radius: 15px;
    padding: 20px;
}

.form-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
}

.start-btn {
    margin-top: 20px;
}
</style>