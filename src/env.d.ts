declare module '@fontsource-variable/inter';

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string;
  readonly VITE_BASEURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
