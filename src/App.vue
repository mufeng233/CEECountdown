<template>
  <UseFullscreen v-slot="{ toggle, isFullscreen }">
    <v-app>
      <v-system-bar>
        <v-btn
          v-if="!isFullscreen"
          icon="mdi-fullscreen"
          variant="icon"
          @click="toggle"
        ></v-btn>
        <v-btn
          v-else
          icon="mdi-fullscreen-exit"
          variant="icon"
          @click="toggle"
        ></v-btn>

        <v-spacer></v-spacer>
        <v-icon icon="mdi-wifi-strength-4"></v-icon>
        <v-icon icon="mdi-signal" class="ml-2"></v-icon>
        <v-icon icon="mdi-battery" class="ml-2"></v-icon>

        <span class="ml-2">
          {{ moment(now).format("ddd HH:mm:ss") }}
        </span>
      </v-system-bar>
      <v-main>
        <Container />
      </v-main> </v-app
  ></UseFullscreen>
</template>

<script setup>
import moment from "moment";
import { ref } from "vue";
import Container from "@/components/Container.vue";
import { UseFullscreen } from "@vueuse/components";

let now = ref(new Date());
setInterval(() => {
  now.value = new Date();
}, 1000);
</script>

<style></style>
