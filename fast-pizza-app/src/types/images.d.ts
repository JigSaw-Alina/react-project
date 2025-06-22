type ImageModule = string;

declare module '*.jpg' {
  const content: ImageModule;
  export default content;
}

declare module '*.jpeg' {
  const content: ImageModule;
  export default content;
}

declare module '*.png' {
  const content: ImageModule;
  export default content;
}

declare module '*.svg' {
  const content: ImageModule;
  export default content;
}
