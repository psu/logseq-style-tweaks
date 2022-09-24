const style = `
.light-theme,
.white-theme,
html[data-theme='light'],
.dark-theme,
html[data-theme='dark'] {
  --ls-tag-text-opacity: 1;
}
a.tag[data-ref^="@"],
.dark-theme a.tag[data-ref^="@"] {
	border-radius: 15px;
	font-size: 0.7rem;
  padding-left: 0.4rem;
  padding-right: 0.5rem;
  opacity: 0.7;
  border: 1px solid var(--ls-link-text-color);
  background-color: transparent !important;
  color: var(--ls-link-ref-text-color);
	font-weight: 700;
  text-transform: capitalize;
  line-height: 0.9rem;
}
a.tag:hover[data-ref^="@"],
.dark-theme a.tag:hover[data-ref^="@"] {
  border-color: var(--ls-link-ref-text-hover-color);
  color: var(--ls-link-ref-text-hover-color);
  opacity: 0.7;
}
`
export default style
