import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
    state: () => ({
        player1: '',
        player2: '',
    }),
    actions: {
        setPlayers(player1, player2) {
            this.player1 = player1;
            this.player2 = player2;
        },
    },
});
