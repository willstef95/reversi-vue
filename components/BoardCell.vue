<template>
    <div class="cell" @click="handleClick">
        <GameStone v-if="stone" :color="stone" />
    </div>
</template>

<script setup>
import GameStone from '~/components/GameStone.vue';
import { useGameStore } from '~/stores/game';

const props = defineProps({
    row: Number,
    col: Number,
    stone: String,
});

const gameStore = useGameStore();

const handleClick = async () => {
    try {
        const url = `http://localhost:9000/makeMoveAjax/${props.row + 1}/${props.col + 1}`;
        const response = await fetch(url, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const responseString = JSON.stringify(data, null, 2);

        console.log('Server Response (String):', responseString);
        console.log('Server Response:', data);

        gameStore.updateBoard(data);

    } catch (error) {
        console.error('Error calling backend:', error);
    }
};
</script>

<style>
.cell {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgreen;
    cursor: pointer;
}
</style>
