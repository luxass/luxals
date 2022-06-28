import { defineConfig } from "tsup";

export default defineConfig({
  name: "random",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  clean: true,
  splitting: false,
  dts: true
});