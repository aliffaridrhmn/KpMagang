<script setup>
import { useLowongan } from "../state/lowongan";
import { useIsLoading } from "../state/isLoading";
import { asyncGetLowongan } from "../state";
import CardLowongan from "../components/CardLowongan.vue";

const lowonganStore = useLowongan();
const loadingStore = useIsLoading();

async function fetchData() {
  try {
    await asyncGetLowongan();
    console.log("Data berhasil");
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}

fetchData();
</script>

<template>
  <div class="Lowongan">
    <div v-if="loadingStore.isLoading">Loading...</div>

    <div v-else>
      <CardLowongan v-for="data in lowonganStore.lowongan" :key="data.id" :data="data" />
    </div>
  </div>
</template>

<style>
.Lowongan {
  height: 100vh;
}
</style>
