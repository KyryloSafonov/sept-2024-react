/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL_API: string;
    readonly SEPARATE_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
