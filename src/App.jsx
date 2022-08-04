import { Breakout, Clamp, Grid, Stack } from '@christiankaindl/lyts'
import * as icons from '@jupyterlab/ui-components/lib/icon/iconimports'
import { useCopyToClipboard } from 'usehooks-ts'
import { isMacOs, isDesktop } from 'react-device-detect'

import '@christiankaindl/lyts/style.css'
import './App.css'

// https://github.com/duskload/react-device-detect/blob/master/src/lib/selectors.js

// https://github.com/jupyterlab/jupyterlab/blob/v3.2.5/packages/ui-components/src/icon/iconimports.ts#L91
// Namespace import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import

const ICON_SIZE = `${16 * 5}px`

function App() {
  // https://www.samanthaming.com/tidbits/13-skip-values-in-destructuring/
  // https://usehooks-ts.com/react-hook/use-copy-to-clipboard
  const [, copy] = useCopyToClipboard()

  return (
    <div className="App">
      {/* https://tailwindcss.com/docs/container */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#description */}
      {/* https://www.merriam-webster.com/dictionary/double-click */}
      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code */}
      <Clamp clamp="1024px" gap={ICON_SIZE}>
        <Breakout>
          <h1 className="text-center">
            @jupyterlab/ui-components
            <span style={{ color: '#545775' }}>@3.2.5</span>
          </h1>
          <p className="text-center">
            Double-click to copy an icon name to import.
            {isMacOs && (
              <span>
                {' '}
                Double-click while holding <kbd>⌥ Option</kbd> to copy an icon's{' '}
                <code>import</code> declaration.
              </span>
            )}
            {isDesktop && !isMacOs && (
              <span>
                {' '}
                Double-click while holding <kbd>Alt</kbd> to copy an icon's{' '}
                <code>import</code> declaration.
              </span>
            )}
          </p>
        </Breakout>

        <Grid gridItemMinWidth={ICON_SIZE} gap={ICON_SIZE}>
          {Object.entries(icons).map(([iconName, icon], index) => {
            // console.log(icon)
            return (
              <Stack
                key={icon.name}
                xAlign="center"
                // https://reactjs.org/docs/events.html#mouse-events
                // alt or option key: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey
                onDoubleClick={({ altKey }) => {
                  const msg = altKey
                    ? `import { ${iconName} } from "@jupyterlab/ui-components";`
                    : iconName

                  copy(msg)
                }}
                style={{ cursor: 'copy' }}>
                <img
                  alt={icon.name}
                  src={icon.svgstr}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                />

                <p className="truncate text-center">
                  {index + 1}. {iconName}
                </p>
              </Stack>
            )
          })}
        </Grid>

        <Breakout xAlign="center">
          <footer>
            <a
              href="https://github.com/joaopalmeiro/jupyterlab-icons-viewer"
              target="_blank">
              Source →
            </a>
          </footer>
        </Breakout>
      </Clamp>
    </div>
  )
}

export default App
