const style = `
  #app-container {
    font-weight: 300;
  }
  b, strong {
    font-weight: 600;
  }
  .pre-block .opacity-50,
  ul.namespaces,
  .breadcrumb,
  .breadcrumb b,
  .references .foldable-title *:not(h2),
  .references .initial li,
  .block-properties {
    font-size: 0.9rem;
    font-weight: 400;
  }
  :not(pre)>code {
    font-size: 0.8rem;
  }
  .references h2 {
    font-size: 1rem;
  }
`
export default style
