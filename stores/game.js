import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        player1: '',
        player2: '',
        currentPlayer: 'black', // 'black' oder 'white'
        board: Array(8).fill(null).map(() => Array(8).fill(null)), // 8x8 Spielfeld
    }),
    actions: {
        setPlayers(player1, player2) {
            this.player1 = player1;
            this.player2 = player2;
        },
        initializeBoard() {
            // Starte mit der Grundstellung für Reversi
            this.board[3][3] = 'white';
            this.board[3][4] = 'black';
            this.board[4][3] = 'black';
            this.board[4][4] = 'white';
        },
        makeMove(row, col) {
            if (this.board[row][col] !== null) return; // Feld ist schon belegt
            this.board[row][col] = this.currentPlayer; // Setze den Stein
            this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black'; // Spieler wechseln
        },
    },
});
