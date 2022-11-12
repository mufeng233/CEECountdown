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
        <v-btn
          v-if="theme.global.current.value.dark"
          icon="mdi-brightness-5"
          variant="icon"
          @click="toggleTheme()"
        ></v-btn>
        <v-btn
          v-else
          icon="mdi-brightness-4"
          variant="icon"
          @click="toggleTheme()"
        ></v-btn>
        <v-btn
          icon="mdi-github"
          variant="icon"
          href="https://github.com/mufeng233/CEECountdown"
          target="_BLANK"
        >
        </v-btn>
        <v-dialog
          v-model="dialog"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-cog" v-bind="props" variant="icon"></v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="primary" elevation="5">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>设置</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn variant="text" @click="dialog = false"> 保存 </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-container>
              <div class="text-h2">开发中...</div>
              <v-slider
                v-model="fontSize"
                prepend-icon="mdi-font"
                color="primary"
              >
                <template v-slot:prepend>
                  <div class="text-h6">字体大小</div>
                </template></v-slider
              >
            </v-container>
          </v-card>
        </v-dialog>
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
      </v-main>
    </v-app>
  </UseFullscreen>
</template>

<script setup>
import moment from "moment";
import { ref } from "vue";
import Container from "@/components/Container.vue";
import { UseFullscreen } from "@vueuse/components";
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

let dialog = ref(false);
let fontSize = ref(0);

let now = ref(new Date());
setInterval(() => {
  now.value = new Date();
}, 1000);
</script>

<style></style>
