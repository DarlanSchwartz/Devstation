/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_APP_NAME: string;
    VITE_APP_VERSION: string;
    VITE_APP_DESCRIPTION: string;
    VITE_APP_AUTHOR: string;
    VITE_APP_LICENSE: string;
    VITE_APP_REPOSITORY: string;
    VITE_APP_API_URL: string;
    VITE_API_TIMEOUT: string;
}

declare global {
    namespace NodeJS {
        interface ImportMeta {
            env: ImportMetaEnv;
        }
    }
}