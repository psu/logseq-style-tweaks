const style = `
.page-hierarchy h2::before {
  content: "Namespace pages ";
  color: var(--ls-primary-text-color);
}
.light-theme .page-hierarchy h2.font-bold.opacity-30 {
  color: #0000;
}
.dark-theme .page-hierarchy h2.font-bold.opacity-30 {
  color: #fff0;
}
`
export default style
