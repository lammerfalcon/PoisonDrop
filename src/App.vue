<template>
  <div id="app">
    <div class="content">
      <div class="personal-info">
        <div class="form-title">
          <h3>{{ $store.state.module }}</h3>
        </div>
        <div class="form-group">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
