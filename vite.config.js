import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/future-tech/',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        blog: path.resolve(__dirname, 'src/blog.html'),
        contacts: path.resolve(__dirname, 'src/contacts.html'),
        news: path.resolve(__dirname, 'src/news.html'),
        podcasts: path.resolve(__dirname, 'src/podcasts.html'),
        resources: path.resolve(__dirname, 'src/resources.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
