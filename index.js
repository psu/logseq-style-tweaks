const tweaks = [
  // content tweaks
  {
    key: 'content/tag',
    title: 'Tags as rounded chips',
    description:
      'Display tags as chips with rounded sides, background color, and uppercase.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'content/tag_at',
    title: '@-tags as hollow, rounded chips',
    description:
      'Display tags starting with at "@" as chips with a rounded border and capitalised.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'content/task',
    title: 'Tasks as chips',
    description: 'Display tasks as a chip togheter with its label.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'content/code',
    title: 'Code background',
    description: 'Use standard background colors for code blocks.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'content/tippy',
    title: 'Tippy window',
    description:
      'Make the tippy/hover window look more like the rest of the content.',
    type: 'boolean',
    default: false,
  },

  // font tweaks
  {
    key: 'font/system',
    title: 'System font',
    description: "Use the system's default font family for text and UI.",
    type: 'boolean',
    default: false,
  },
  {
    key: 'font/header',
    title: 'Smaller headings',
    description: 'Display page title and headings with smaller font size.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'font/body',
    title: 'Thinner text',
    description:
      'Change the regular text to font weight 300, and bold text to 500.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'font/color',
    title: 'Font color',
    description:
      'Use black or white color for the default font, to increase contrast.',
    type: 'boolean',
    default: false,
  },

  // logseq ui tweaks
  {
    key: 'ui/left_bear',
    title: 'Always dark sidebar',
    description:
      'Use a dark left sidebar for both light and dark themes, in the style of the Bear app.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/left_size',
    title: 'Sidebar width',
    description: 'Set the with of the left sidebar to 280 px.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/icon',
    title: 'Icons color',
    description: 'Make all header icons have the same color.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/header',
    title: 'UI headings',
    description:
      'Set the same font for References, Hierarchy, and Custom query titles.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/close',
    title: 'Close button color',
    description: 'Make the close buttons less eye-catching.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/element',
    title: 'UI toggle color',
    description: 'Make UI toggles use the standard variable for checkboxes.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/scroll',
    title: 'iOS style scrollbars',
    description: 'Scrollbars with no background and rounded corners.',
    type: 'boolean',
    default: false,
  },
  {
    key: 'ui/pdf',
    title: 'PDF view toolbar',
    description:
      'Restyle the PDF view toolbar: icons more protruding, vertical toolbar direction.',
    type: 'boolean',
    default: false,
  },
  // feature
  {
    key: 'all',
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
    if (setting.indexOf('/') == -1) continue
    if (logseq.settings[setting] === true) {
      //const filename = tweaks.find(x => x.key == setting).key
      try {
        const { default: tweak_style } = await import(`./tweaks/${setting}.js`)
        style_concat = style_concat + tweak_style
      } catch (err) {
        console.log(`Error loading tweak file (${setting}): ${err}`)
      }
    }
  }
  logseq.provideStyle(style_concat)
  logseq.updateSettings({ all: style_concat })
}

// bootstrap
logseq.ready(main).catch(console.error)
