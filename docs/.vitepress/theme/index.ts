import DefaultTheme from "vitepress/theme";
import './hapticColors.css'

export default {
    ...DefaultTheme,
    async enhanceApp({ app }: any) {
        if (!import.meta.env.SSR) {
            const plugin = await import("./tailwind.js");
            app.use(plugin.default ?? plugin, {
                clientId: import.meta.env.VITE_SOME_ENV,
            });
        }
    },
};