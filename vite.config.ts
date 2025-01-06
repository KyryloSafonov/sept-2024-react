import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        svgr({ include: '**/*.svg' }),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint . --ext .ts,.tsx,.js,.jsx',
                dev: {
                    logLevel: ['error'],
                },
            },
        }),
    ],
});
