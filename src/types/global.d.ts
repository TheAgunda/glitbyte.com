export { };

declare global {
    interface Window {
        turnstile?: {
            render: (
                container: string | HTMLElement,
                options: {
                    sitekey: string;
                    callback?: (token: string) => void;
                }
            ) => void;
            reset?: (widgetId?: string) => void;
            remove?: (widgetId?: string) => void;
        };
    }
}