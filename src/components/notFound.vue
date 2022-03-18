<template>
  <div>redirect</div>
</template>

<script>
export default {
  name: "notFound",
  created: function () {
    window.location.href = "/";
  },
};
</script>

<style scoped></style>
