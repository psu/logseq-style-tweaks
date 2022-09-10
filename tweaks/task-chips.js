const style = `
.todo input,
.doing input,
.done input,
.waiting input,
.now input,
.later input {
  height: 1.1rem;
  width: 1.1rem;
  border-radius: .2rem 0 0 .2rem;
  margin: .15rem .5rem 0 0 !important;
  z-index: 99;
  font-size: .7rem;
  opacity: 1;
}
.todo .block-marker,
.doing .block-marker,
.done .block-marker,
.waiting .block-marker,
.now .block-marker,
.later .block-marker {
  background-color: var(--ls-selection-background-color);
  color: var(--ls-primary-text-color);
  opacity: 1;
  margin-left: -1.6rem;
  margin-right: .4rem;
  padding-left: 1.5rem;
  padding-right: .4rem;
  padding-top: .07rem;
  padding-bottom: .09rem;
  border-radius: .2rem;
  font-weight: 700;
  font-size: .7rem;
  box-shadow: 
}
.doing .block-marker::before,
.now .block-marker::before {
  content: "◢";
  font-size: 1.15rem;
  position: absolute;
  left: -.05rem;
  top: 0rem;
  z-index: 101;
  color: #fff5;
}
.done input {
  border-radius: .15rem;
}
.waiting .block-marker {
  opacity: 0.7;
}
.waiting input {
  opacity: 0.3;
}
.block-marker {
  border: 0.07rem solid #00000005;
}
.dark-theme .block-marker {
  border-color: #ffffff09;
}
`
export default style
