import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: "less" })],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.jsx$/],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "font-family": "Noto Sans KR",
          "primary-color": "#6044F8",
          "tag-font-size": "20px",
          "tag-line-height": "40px",
        },
        javascriptEnabled: true,
      },
      scss: {
        additionalData: '@import "@/assets/styles/style.scss";',
      },
    },
  },
});
