import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";

// Since Vite 5, dynamic imports for conditional plugins need to be handled differently.
// The async configuration function is recommended for conditional plugin imports.

export default defineConfig(async ({ command }) => {
    // Starting with Vite 5, use the "command" parameter in defineConfig for environment checks.
    const plugins = [
        laravel([
            "resources/scss/main.scss",
            "resources/css/main.css",
            "resources/js/main.js",
        ]),
        Vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ];

    // In Vite 5, importing plugins conditionally should be done inside an async function.
    if (command === "serve") {
        // 'serve' is used for development mode in Vite 5.
        const VueDevtools = await import("vite-plugin-vue-devtools");
        plugins.push(VueDevtools.default()); // Ensure to use the .default() if the module uses ESM exports.
    }

    return {
        define: {
            __VUE_I18N_FULL_INSTALL__: true,
            __VUE_I18N_LEGACY_API__: false,
            __INTLIFY_PROD_DEVTOOLS__: false,
        },
        plugins,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./resources/js"),
            },
            // In Vite 5, the "extensions" option is no longer needed in the resolve.alias configuration,
            // as Vite will automatically resolve these extensions.
        },
    };
});
