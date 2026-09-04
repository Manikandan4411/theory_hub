import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/java-learning-hub/",
  plugins: [react()],
  assetsInclude: ["**/*.md"], // 👈 Add this line
});
