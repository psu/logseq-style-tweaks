const style = `
.light-theme,
.white-theme,
html[data-theme='light'],
.dark-theme,
html[data-theme='dark'] {
  --ls-scrollbar-background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: var(--ls-scrollbar-width);
}
`
export default style
