/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_APP_PATH: string
    readonly VITE_APP_LOCKED: boolean
    readonly VITE_APP_PASSWORD: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}