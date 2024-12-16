<script setup>
defineProps({
  data: Object, // Mengambil data dari parent
});
</script>

<template>
  <div class="card">
    <h1>{{ data.nama_posisi }}</h1>
    <h3>{{ data.kuota_posisi }}</h3>
    <h3>{{ data.durasi_waktu }}</h3>
  </div>
  <div>
    <button onclick="">Lamar sekarang</button>
  </div>
</template>
