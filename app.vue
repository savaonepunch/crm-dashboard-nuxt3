<template>
  <div class="app">
    <Sidebar/>
    <NuxtPage/>
  </div>
</template>

<style lang="scss">
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: calc(6rem + 50px);
    }
  }
}
</style>