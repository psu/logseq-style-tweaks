// ui tweaks
const tweaks = [
  {
    key: '1',
    file: 'tag-chips',
    title: 'Tags as rounded chips',
    description:
      'Display tags as chips with rounded sides, background color, and uppercase.',
    type: 'boolean',
    default: false,
  },
  {
    key: '2',
    file: 'smaller-headings',
    title: 'Smaller headings',
    description: 'Display page title and headings in smaller sizes.',
    type: 'boolean',
    default: false,
  },
  {
    key: '3',
    file: 'system-font',
    title: 'System default font family',
    description:
      'Replace the font family for text and UI with the system default.',
    type: 'boolean',
    default: false,
  },
  {
    key: '4',
    file: 'left-sidebar-bear-style',
    title: 'Left sidebar always dark',
    description:
      'Use a dark left sidebar for both light and dark themes, in the style of Bear editor.',
    type: 'boolean',
    default: false,
  },
  {
    key: '5',
    file: 'codemirror-use-standard-colors',
    title: 'Fix code block background',
    description:
      'Make code blocks use standard variables for background colors.',
    type: 'boolean',
    default: false,
  },
  {
    key: '6',
    file: 'header-icons-color',
    title: 'Harmonise header icons color',
    description: 'Make all header icons have the same color.',
    type: 'boolean',
    default: false,
  },
  {
    key: '7',
    file: 'close-button-color',
    title: 'Close button color',
    description: 'Make the close buttons less eye-catching.',
    type: 'boolean',
    default: false,
  },
  {
    key: '8',
    file: 'resize-left-sidebar',
    title: 'Resize left sidebar',
    description: 'Widen the left sidebars a bit.',
    type: 'boolean',
    default: false,
  },
  {
    key: '9',
    file: 'harmonise-meta-headings',
    title: 'Harmonise "meta" headings',
    description:
      'Set the same font for references, hierarchy, and custom query titles.',
    type: 'boolean',
    default: false,
  },
  {
    key: '10',
    file: 'task-chips',
    title: 'Tasks as chips',
    description: 'Display tasks as a chip togheter with its label.',
    type: 'boolean',
    default: false,
  },
  {
    key: '11',
    file: 'at-tag-chips',
    title: '@-tags as rounded chips',
    description:
      'Display tags starging with at "@" as chips with a rounded border and capitalised.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'a',
    title: 'All style tweaks',
    description: 'Merged CSS for all active style tweaks.',
    type: 'string',
    default: '',
  },
]

// entry
const main = () => {
  logseq.useSettingsSchema(tweaks)
  parse_tweaks()
}

// parse tweaks and update style
const parse_tweaks = async () => {
  let style_concat = ''
  for (setting in logseq.settings) {
    if (typeof Number(setting) != 'number') continue
    if (logseq.settings[setting] === true) {
      const filename = tweaks.find(x => x.key == setting).file
      try {
        const { default: tweak_style } = await import(`./tweaks/${filename}.js`)
        style_concat = style_concat + tweak_style
      } catch (err) {
        console.log(`Error loading tweak file (${filename}): ${err}`)
      }
    }
  }
  logseq.provideStyle(style_concat)
  logseq.updateSettings({ a: style_concat })
}

// bootstrap
logseq.ready(main).catch(console.error)
