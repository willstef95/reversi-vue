<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <v-app>
        <v-main>
            <!-- Hintergrund und Header -->
            <v-container fluid class="rules-page">
                <v-row>
                    <v-col>
                        <h1 class="main-header">Reversi Rules</h1>
                    </v-col>
                </v-row>

                <!-- Grid für die Regeln -->
                <v-row dense align="stretch">
                    <!-- Objective -->
                    <v-col cols="12" sm="6" class="d-flex">
                        <v-card class="rule-card" elevation="5">
                            <v-card-title class="card-title">Objective</v-card-title>
                            <v-card-text class="card-text">
                                The object of the game is to place your discs on the board so as to outflank your
                                opponent's discs,
                                flipping them over to your color. The player who has the most discs on the board at the
                                end of the game
                                wins.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Setup -->
                    <v-col cols="12" sm="6" class="d-flex">
                        <v-card class="rule-card" elevation="5">
                            <v-card-title class="card-title">Setup</v-card-title>
                            <v-card-text class="card-text">
                                Reversi is played on an 8x8 board. Each player chooses a color: black or white. The game
                                starts with
                                four discs placed in the center of the board in a square of alternating colors.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Gameplay -->
                    <v-col cols="12" sm="6" class="d-flex">
                        <v-card class="rule-card" elevation="5">
                            <v-card-title class="card-title">Gameplay</v-card-title>
                            <v-card-text class="card-text">
                                <ul>
                                    <li>Players take turns making moves. A move consists of placing a disc on the board
                                        such that it
                                        outflanks one or more of the opponent's discs.</li>
                                    <li>Outflanking means trapping one or more opponent's discs between two of your own
                                        along a
                                        horizontal, vertical, or diagonal line.</li>
                                    <li>All outflanked opponent's discs are flipped to your color.</li>
                                    <li>If a player cannot make a legal move, they must pass their turn.</li>
                                    <li>The game ends when neither player can make a legal move, usually when the board
                                        is full.</li>
                                    <li>The player with the most discs of their color on the board wins. The game is a
                                        draw if both
                                        players have the same number of discs.</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Example -->
                    <v-col cols="12" sm="6" class="d-flex">
                        <v-card class="rule-card" elevation="5">
                            <v-card-title class="card-title">Example</v-card-title>
                            <v-card-text class="card-text">
                                If Black plays first and places a disc at C4, it flips White's disc at D4. White then
                                plays and may
                                place a disc at C3, C5, or E3.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Strategy Tips -->
                    <v-col cols="12" sm="6" class="d-flex">
                        <v-card class="rule-card" elevation="5">
                            <v-card-title class="card-title">Strategy Tips</v-card-title>
                            <v-card-text class="card-text">
                                Try to control the corners and edges, as these positions are less likely to be flipped
                                by your
                                opponent. Maintaining flexibility and mobility can give you more options for strategic
                                moves
                                throughout the game.
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- Links -->
                    <v-col cols="12" sm="6" class="d-flex">
                        <v-card class="rule-card" elevation="5">
                            <v-card-title class="card-title">Links</v-card-title>
                            <v-card-text class="card-text">
                                <a href="https://github.com/marc1107/Reversi-Play-Server" target="_blank">View Project
                                    on GitHub</a>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
s

<style scoped>
.rules-page {
    background: #4caf50;
    min-height: 100vh;
    padding: 20px;
}

.main-header {
    font-size: 48px;
    text-align: center;
    /* Zentriert die Überschrift horizontal */
    margin-bottom: 40px;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    color: #333;
}

.rule-card {
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    /* Zentriert den Text in der Karte */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Vertikale Zentrierung */
    height: 100%;
    /* Karte nimmt die volle Höhe des Containers ein */
    width: 100%;
    /* Verhindert, dass Karten unterschiedliche Breiten haben */
}

.card-title {
    font-size: 24px;
    text-align: center;
    /* Zentriert die Überschrift innerhalb der Karte */
    margin-bottom: 15px;
}

.card-text {
    text-align: center;
    /* Zentriert den Text */
    margin: auto;
    /* Vertikale Zentrierung durch Auto-Margin */
}

ul {
    padding-left: 20px;
    list-style: disc;
}
</style>
