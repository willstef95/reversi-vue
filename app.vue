<template>
  <VitePwaManifest />
  <div id="app">
    <!-- Globale Navigation -->
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/game">Spiel</NuxtLink>
        <NuxtLink to="/rule">Regeln</NuxtLink>
      </nav>
    </header>

    <!-- Hauptinhalt (von den Seiten gerendert) -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <!-- <footer>
      <p>&copy; 2024 Reversi. Alle Rechte vorbehalten.</p>
    </footer> -->
  </div>
</template>

<script setup>
// Optional: Globale Logik hier einfügen
</script>

<style>
/* Einfaches Styling für die App */
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background: #4caf50;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

main {
  padding: 2rem;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
