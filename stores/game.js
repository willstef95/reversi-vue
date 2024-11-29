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
                // Backend-Route mit Port 9000 aufrufen
                const url = `http://localhost:9000/playerNames/${player1}/${player2}`;
                const response = await fetch(url, {
                    method: 'GET',
                });
                console.log('Response:', response);
                // Prüfen, ob die Antwort erfolgreich war
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Antwort als JSON konvertieren
                const data = await response.json();

                // Spielernamen aus der Antwort setzen
                this.player1 = player1;
                this.player2 = player2;

                const responseString = JSON.stringify(data, null, 2); // Schön formatiert mit Einrückungen

                // Ausgabe der Antwort in der Konsole
                console.log('Server Response (String):', responseString);
                console.log('Server Response:', data);
            } catch (error) {
                console.error('Error calling backend:', error);
            }
        },
        async initializeBoard(player1, player2) {
            // Spieler abrufen
            await this.fetchPlayerNames(player1, player2);

            // Spielfeld initialisieren
            // this.board = Array(8).fill(null).map(() => Array(8).fill('EMPTY'));
            this.board[3][3] = 'white';
            this.board[3][4] = 'black';
            this.board[4][3] = 'black';
            this.board[4][4] = 'white';

            // this.currentPlayer = 'B'; // Schwarz beginnt

            console.log('Board initialized:', this.board);
        },
        updateBoard(data) {
            const { cells: newBoardCells, playerState } = data.newBoard;

            // Spielfeld aktualisieren
            this.board = newBoardCells.map(row =>
                row.map(cell => {
                    if (cell === 'B') return 'black';
                    if (cell === 'W') return 'white';
                    return null;
                })
            );

            // Aktuellen Spieler setzen
            this.currentPlayer = playerState === 'B' ? 'black' : 'white';

            // Debugging
            console.log('Updated Board:', this.board);
            console.log('Current Player:', this.currentPlayer);
        }


    },
});
