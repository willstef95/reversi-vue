<template>
    <q-page class="rules-page">
        <q-page-container>

            <!-- Header -->
            <div class="header-container">
                <h1>Rules</h1>
            </div>

            <!-- Inhalt -->
            <q-layout-view>
                <!-- Erste Reihe -->
                <q-row>
                    <!-- Objective -->
                    <q-col cols="12" md="6" class="mb-3">
                        <q-card>
                            <q-card-section>
                                <h2>Objective</h2>
                                <p>
                                    The object of the game is to place your discs on the board so as to outflank your
                                    opponent's discs,
                                    flipping them over to your color. The player who has the most discs on the board at
                                    the end of the
                                    game wins.
                                </p>
                            </q-card-section>
                        </q-card>
                    </q-col>

                    <!-- Setup -->
                    <q-col cols="12" md="6" class="mb-3">
                        <q-card>
                            <q-card-section>
                                <h2>Setup</h2>
                                <p>
                                    Reversi is played on an 8x8 board. Each player chooses a color: black or white. The
                                    game starts with
                                    four discs placed in the center of the board in a square of alternating colors.
                                </p>
                            </q-card-section>
                        </q-card>
                    </q-col>
                </q-row>

                <!-- Zweite Reihe -->
                <q-row>
                    <!-- Gameplay -->
                    <q-col cols="12" md="6" class="mb-3">
                        <q-card>
                            <q-card-section>
                                <h2>Gameplay</h2>
                                <ul>
                                    <li>
                                        Players take turns making moves. A move consists of placing a disc on the board
                                        such that it outflanks
                                        one or more of the opponent's discs.
                                    </li>
                                    <li>Outflanking means trapping one or more opponent's discs between two of your own
                                        along a horizontal, vertical, or diagonal line.</li>
                                    <li>All outflanked opponent's discs are flipped to your color.</li>
                                    <li>If a player cannot make a legal move, they must pass their turn.</li>
                                    <li>
                                        The game ends when neither player can make a legal move, usually when the board
                                        is full.
                                    </li>
                                    <li>
                                        The player with the most discs of their color on the board wins. The game is a
                                        draw if both players
                                        have the same number of discs.
                                    </li>
                                </ul>
                            </q-card-section>
                        </q-card>
                    </q-col>

                    <!-- Example -->
                    <q-col cols="12" md="6" class="mb-3">
                        <q-card>
                            <q-card-section>
                                <h2>Example</h2>
                                <p>
                                    If Black plays first and places a disc at C4, it flips White's disc at D4. White
                                    then plays and may
                                    place a disc at C3, C5, or E3.
                                </p>
                            </q-card-section>
                        </q-card>
                    </q-col>
                </q-row>

                <!-- Dritte Reihe -->
                <q-row>
                    <!-- Strategy Tips -->
                    <q-col cols="12" md="6" class="mb-3">
                        <q-card>
                            <q-card-section>
                                <h2>Strategy Tips</h2>
                                <p>
                                    Try to control the corners and edges, as these positions are less likely to be
                                    flipped by your opponent.
                                    Maintaining flexibility and mobility can give you more options for strategic moves
                                    throughout the game.
                                </p>
                            </q-card-section>
                        </q-card>
                    </q-col>

                    <!-- Links -->
                    <q-col cols="12" md="6" class="mb-3">
                        <q-card>
                            <q-card-section>
                                <h2>Links</h2>
                                <p>
                                    <q-btn outline color="primary" label="View Project on GitHub" icon="code"
                                        href="https://github.com/marc1107/Reversi-Play-Server" target="_blank" />
                                </p>
                            </q-card-section>
                        </q-card>
                    </q-col>
                </q-row>
            </q-layout-view>

            <!-- Play Button -->
            <div class="play-container">
                <q-btn label="Play!" color="primary" unelevated to="/game" class="q-mt-lg" />
            </div>

        </q-page-container>
    </q-page>
</template>

<script setup>
// Keine spezifische Logik hier notwendig
</script>

<style>
.rules-page {
    text-align: center;
    padding: 20px;
}

.header-container h1 {
    margin-bottom: 30px;
}

.play-container {
    text-align: center;
    margin-top: 30px;
}
</style>