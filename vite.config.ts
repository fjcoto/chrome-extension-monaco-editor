import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'node_modules/monaco-editor/min/vs', dest: '.' },
        { src: 'public/worker-loader-proxy.js', dest: '.' },
        { src: 'public/editor.html', dest: '.' },
        { src: 'public/editor.js', dest: '.' },
        {
          src: 'public/manifest.json',
          dest: '.',
        }
      ],
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
        content: './src/content.ts'
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
  },
});