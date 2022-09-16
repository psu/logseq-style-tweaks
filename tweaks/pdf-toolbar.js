const style = `
#pdf-layout-container .extensions__pdf-toolbar,
#pdf-layout-container[data-theme=light] .extensions__pdf-toolbar,
#pdf-layout-container[data-theme=warm] .extensions__pdf-toolbar,
#pdf-layout-container[data-theme=dark] .extensions__pdf-toolbar {
  background: transparent;
  background-image: none;
  top: calc(var(--ls-scrollbar-width) + 0.7rem);
  right: calc(var(--ls-scrollbar-width) + 0.7rem);
  width: unset;
  height: unset;
  padding: 0;
  font-weight: 400;
}
#pdf-layout-container .extensions__pdf-toolbar .buttons,
#pdf-layout-container[data-theme=light] .extensions__pdf-toolbar .buttons {
  flex-direction: column-reverse;
  align-items: center;
  border-radius: 2px;
  background-color: rgb(249,249,249); /* #00000006 */
  color: black;
}
#pdf-layout-container[data-theme=warm] .extensions__pdf-toolbar .buttons {
  background-color: rgb(252,247,238); /* #ffffff6a */
  color: #50270a;
}
#pdf-layout-container[data-theme=dark] .extensions__pdf-toolbar .buttons {
  background-color: rgb(25,61,72); /* #cccccc16 */
  color: white
}
#pdf-layout-container .extensions__pdf-toolbar a.button svg {
  color: unset;
}
#pdf-layout-container .extensions__pdf-toolbar>.inner>.r a.button {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0px;
}
#pdf-layout-container .extensions__pdf-toolbar a.button {
  height: 2rem;
  opacity: 0.7;
  color: black;
  padding: 2px 6px;
}
#pdf-layout-container .extensions__pdf-toolbar .buttons>a.button:last-child {
  padding: 0;
  height: 1.8em;
}
#pdf-layout-container .extensions__pdf-toolbar .buttons>div a.button {
  height: 1.6rem;
  padding: 0;
}
#pdf-layout-container[data-theme=dark] .extensions__pdf-toolbar a.button {
  color: white;
}
#pdf-layout-container[data-theme=warm] .extensions__pdf-toolbar a.button {
  color: #50270a;
}
#pdf-layout-container .extensions__pdf-toolbar a.button:hover {
  opacity: 0.9;
}
#pdf-layout-container .extensions__pdf-toolbar a.button.is-active {
  border: none;
  border-radius: 6px;
  background-color: #0001;
  opacity: 1;
}
#pdf-layout-container[data-theme=dark] .extensions__pdf-toolbar a.button.is-active {
  background-color: #fff2;
}
#pdf-layout-container .extensions__pdf-toolbar .buttons > .pager {
  flex-direction: column;
}
#pdf-layout-container .extensions__pdf-toolbar .ml-1 {
  margin: 0;
}
#pdf-layout-container .extensions__pdf-toolbar>.inner .pager>.nu {
  padding: 4px 2px;
}
#pdf-layout-container .extensions__pdf-toolbar>.inner .pager>.nu input {
  width: 1.5em;
  font-size: small;
  line-height: 1em;
  text-align: center;
  border-radius: 2px;
  padding: 0;
  background-color: #0001;
  color: black;
}
#pdf-layout-container[data-theme=warm] .extensions__pdf-toolbar>.inner .pager>.nu input {
  color: #50270a;
  background-color: #0001;
}
#pdf-layout-container[data-theme=dark] .extensions__pdf-toolbar>.inner .pager>.nu input {
  color: white;
  background-color: #fff2;
}
#pdf-layout-container .hls-popup-wrap {
  top: 12px;
}
#pdf-layout-container .extensions__pdf-outline {
  right: 4em;
}
#pdf-layout-container .extensions__pdf-settings-inner.hls-popup-box {
  top: 19em;
  right: 4em;
}
#pdf-layout-container .extensions__pdf-outline,
#pdf-layout-container .extensions__pdf-settings {
  color: #000d;
}
`
export default style
