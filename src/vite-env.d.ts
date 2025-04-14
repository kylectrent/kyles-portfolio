/// <reference types="vite/client" />

declare module '@fontsource/roboto';
declare module '@fontsource/outfit';

declare module '*.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
