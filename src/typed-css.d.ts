// scss
declare module '*.scss' {
  const content: {[key: string]: any}
  export = content
}
// less
declare module '*.less' {
  const content: { [key: string]: any }
  export default content
}