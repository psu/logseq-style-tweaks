const style = `
:root {
  --ls-page-title-size: 2.2rem;
}
h1.title {
  font-weight: 500;
  line-height: 1.3;
}
.editor-inner .multiline-block:is(.h1,.h2,.h3,.h4)::first-line, 
.editor-inner .uniline-block:is(.h1,.h2,.h3,.h4), 
.ls-block :is(h1,h2,h3,h4) {
  font-weight: 500;  
}
*:is(h1, h2, h3, h4, h5, h6) input {
  font-weight: inherit !important;
}
*:is(.editor-inner .uniline-block.h1:not(.block-ref *), 
.editor-inner .h1:not(.block-ref *), 
.ls-block h1:not(.block-ref *)) {
  font-size: 1.8rem;
  line-height: 1.3;
}
*:is(.editor-inner .uniline-block.h2:not(.block-ref *), 
.editor-inner .h2:not(.block-ref *), 
.ls-block h2:not(.block-ref *)) {
  font-size: 1.65rem;
  line-height: 1.3;
}
*:is(.editor-inner .uniline-block.h3:not(.block-ref *), 
.editor-inner .h3:not(.block-ref *), 
.ls-block h3:not(.block-ref *)) {
  font-size: 1.4rem;
  line-height: 1.3;
}
*:is(.editor-inner .uniline-block.h4:not(.block-ref *), 
.editor-inner .h4:not(.block-ref *), 
.ls-block h4:not(.block-ref *)) {
  font-size: 1.2rem;
  line-height: 1.3;
}
*:is(.editor-inner .uniline-block.h5:not(.block-ref *), 
.editor-inner .h5:not(.block-ref *), 
.ls-block h5:not(.block-ref *)) {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
}
*:is(.editor-inner .uniline-block.h6:not(.block-ref *), 
.editor-inner .h6:not(.block-ref *), 
.ls-block h6:not(.block-ref *)) {
  font-size: 1rem;
  line-height: 1.3;
}
.editor-inner .uniline-block:is(.h1,.h2), 
.ls-block :is(h1,h2) {
  border-bottom: none;
}
`
export default style
