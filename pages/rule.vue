<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToGame = () => {
    router.push('/game'); // Navigiere zur Game-Seite
};
</script>

<template>
    <div class="rules-page">
        <div class="content">
            <!-- Header -->
            <div class="header-container">
                <h1>Rules</h1>
            </div>

            <!-- Inhalt in zwei Spalten -->
            <div class="rules-container">
                <!-- Objective -->
                <div class="cell">
                    <h2>Objective</h2>
                    <p>
                        The object of the game is to place your discs on the board so as to outflank your opponent's
                        discs, flipping them over to your color. The player who has the most discs on the board at the
                        end of the game wins.
                    </p>
                </div>

                <!-- Setup -->
                <div class="cell">
                    <h2>Setup</h2>
                    <p>
                        Reversi is played on an 8x8 board. Each player chooses a color: black or white. The game starts
                        with four discs placed in the center of the board in a square of alternating colors.
                    </p>
                </div>

                <!-- Gameplay -->
                <div class="cell">
                    <h2>Gameplay</h2>
                    <ul>
                        <li>Players take turns making moves. A move consists of placing a disc on the board such that it
                            outflanks one or more of the opponent's discs.</li>
                        <li>Outflanking means trapping one or more opponent's discs between two of your own along a
                            horizontal, vertical, or diagonal line.</li>
                        <li>All outflanked opponent's discs are flipped to your color.</li>
                        <li>If a player cannot make a legal move, they must pass their turn.</li>
                        <li>The game ends when neither player can make a legal move, usually when the board is full.
                        </li>
                        <li>The player with the most discs of their color on the board wins. The game is a draw if both
                            players have the same number of discs.</li>
                    </ul>
                </div>

                <!-- Example -->
                <div class="cell">
                    <h2>Example</h2>
                    <p>
                        If Black plays first and places a disc at C4, it flips White's disc at D4. White then plays and
                        may place a disc at C3, C5, or E3.
                    </p>
                </div>

                <!-- Strategy Tips -->
                <div class="cell">
                    <h2>Strategy Tips</h2>
                    <p>
                        Try to control the corners and edges, as these positions are less likely to be flipped by your
                        opponent. Maintaining flexibility and mobility can give you more options for strategic moves
                        throughout the game.
                    </p>
                </div>

                <!-- Links -->
                <div class="cell">
                    <h2>Links</h2>
                    <p>
                        <a href="https://github.com/marc1107/Reversi-Play-Server" target="_blank">View Project on
                            GitHub</a>
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped>
/* Allgemeine Seite */
.rules-page {
    text-align: center;
    font-family: Calibri, sans-serif;
    /* background: radial-gradient(at center, rgba(186, 187, 186, 1.0), rgba(145, 252, 148, 1.0)); */
    padding: 20px;
}

/* Header */
.header-container h1 {
    margin: 20px 0;
    color: black;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

/* Layout */
.content {
    padding: 20px;
}

.rules-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* Zwei Spalten */
    gap: 20px;
    /* Abstand zwischen Zellen */
}

@media (max-width: 768px) {
    .rules-container {
        grid-template-columns: 1fr;
        /* Eine Spalte bei kleinen Bildschirmen */
    }
}

/* Zellen */
.cell {
    display: flex;
    /* Flexbox aktivieren */
    flex-direction: column;
    /* Vertikale Anordnung */
    justify-content: center;
    /* Vertikale Zentrierung */
    align-items: center;
    /* Horizontale Zentrierung */
    border: 1px solid #000;
    border-radius: 15px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    /* Text innerhalb der Zelle zentrieren */
}

h2 {
    margin: 0 0 10px;
    /* Kein Abstand oben, nur unten */
    padding: 0;
    /* Sicherheitshalber Padding entfernen */
}


p,
ul {
    margin: 0;
    text-align: center;
    /* Text innerhalb von p und ul zentrieren */
}

ul {
    padding-left: 20px;
    list-style: disc;
}
</style>
