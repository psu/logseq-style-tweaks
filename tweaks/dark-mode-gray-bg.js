const style = `
.dark-theme,
html[data-theme='dark'] {
  --ls-primary-background-color: #1e2022;
  --ls-secondary-background-color: #242424;
  --ls-tertiary-background-color: #2c2d2f;
  --ls-quaternary-background-color: #363839
  --ls-table-tr-even-background-color: #393a3c;
  --ls-search-background-color: linear-gradient(
    to right,
    #021c23 0,
    #021b21 200px,
    #002b36 100%
  );
  --ls-border-color: #151617;
  --ls-secondary-border-color: #1e2022;
  --ls-tertiary-border-color: #0001;
  --ls-guideline-color: #0b4a5a;
  --ls-block-bullet-border-color: #0f4958;
  --ls-block-bullet-color: #608e91;
  --ls-block-highlight-color: #333;
  --ls-selection-background-color: #338fff;
  --ls-page-checkbox-color: #6093a0;
  --ls-scrollbar-foreground-color: #11505f;
  --ls-scrollbar-background-color: rgba(30, 60, 67, 0.1);
  --ls-scrollbar-thumb-hover-color: rgba(255, 255, 255, 0.2);
  --ls-head-text-color: var(--ls-link-text-color);
  --ls-right-sidebar-code-bg-color: #04303c;
  --color-level-4: #195d6c;
  --color-level-5: #266c7d;
  --color-level-6: #3a7e8e;
}
`
export default style
