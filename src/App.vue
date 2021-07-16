<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
 * { touch-action: none; } 
</style>
