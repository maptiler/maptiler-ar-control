import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  mode: "development",
  build: {
    outDir: "./demos/js",
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/maptiler-ar-control.ts'),
      name: 'maptilerarcontrol',
      fileName: (format, entryName) => [
        entryName,
        format,
        'js',
      ]
        .filter(Boolean)
        .join('.'),
      formats: ['umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [
        "@maptiler/sdk",
      ],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          "@maptiler/sdk": "maptilersdk",
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [],
});
