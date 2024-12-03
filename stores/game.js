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
        async fetchPlayerNames(player1, player2) {
            try {
                const url = `http://localhost:9000/playerNames/${player1}/${player2}`;
                const response = await fetch(url, {
                    method: 'GET',
                });
                console.log('Response:', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                this.player1 = player1;
                this.player2 = player2;

                const responseString = JSON.stringify(data, null, 2);

            } catch (error) {
                console.error('Error calling backend:', error);
            }
        },
        async initializeBoard(player1, player2) {
            await this.fetchPlayerNames(player1, player2);

            this.board[3][3] = 'white';
            this.board[3][4] = 'black';
            this.board[4][3] = 'black';
            this.board[4][4] = 'white';

            // this.currentPlayer = 'B'; // Schwarz beginnt

            console.log('Board initialized:', this.board);
        },
        updateBoard(data) {
            const { cells: newBoardCells, playerState } = data.newBoard;

            this.board = newBoardCells.map(row =>
                row.map(cell => {
                    if (cell === 'B') return 'black';
                    if (cell === 'W') return 'white';
                    return null;
                })
            );

            this.currentPlayer = playerState === 'B' ? 'black' : 'white';

            console.log('Updated Board:', this.board);
            console.log('Current Player:', this.currentPlayer);
        }


    },
});
