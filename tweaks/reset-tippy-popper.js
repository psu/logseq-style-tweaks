const style = `
.tippy-wrapper {
	background-color: var(--ls-secondary-background-color);
	color: var(--ls-primary-text-color);
	font-weight: 400!important;
  font-size: 0.9rem;
  border-radius: 6px;
}
.tippy-tooltip {
	border-top: 1px solid var(--ls-secondary-border-color);
	border-right: 1px solid var(--ls-secondary-border-color);
	border-bottom: 1px solid var(--ls-secondary-border-color);
	border-left: 1px solid var(--ls-secondary-border-color);
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
	--webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.tippy-tooltip h2 {
  font-weight: 600;
}
`
export default style
