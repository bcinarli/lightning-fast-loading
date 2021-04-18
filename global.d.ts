declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png' {
  const value: any;
  export = value;
}

// webpack define plugin definitions
declare var API: string;
