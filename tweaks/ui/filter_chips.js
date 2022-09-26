const style = `
.ls-filters .ui__button[intent=border-link] {
  border: none;
  background-color: var(--ls-border-color);
  opacity: .6;
}
.ls-filters .ui__button[intent=border-link]:hover {
  opacity: .8;
  color: var(--ls-primary-text-color);
}
.ls-filters .cp__filters .ui__button[intent=border-link] {
  border: 1px solid var(--ls-primary-text-color);
  opacity: .75;
}
.ls-filters .cp__filters .ui__button[intent=border-link]:hover {
  opacity: .9;
}
`
export default style
