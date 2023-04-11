import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/admin/**',
                'resources/js/admin/**',
            ],
            refresh: true,
        }),
    ],
    // resolve: {
    //     alias: {
    //         '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    //     }
    // },
});
