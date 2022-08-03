import * as icons from '@jupyterlab/ui-components/lib/icon/iconimports'
import { Stack, Grid, Clamp, Breakout } from '@christiankaindl/lyts'

import '@christiankaindl/lyts/style.css'
import './App.css'

// https://github.com/jupyterlab/jupyterlab/blob/v3.2.5/packages/ui-components/src/icon/iconimports.ts#L91
// Namespace import: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import

const ICON_SIZE = `${16 * 5}px`

function App() {
  return (
    <div className="App">
      {/* https://tailwindcss.com/docs/container */}
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#description */}
      {/* https://www.merriam-webster.com/dictionary/double-click */}
      {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code */}
      <Clamp clamp="1024px" gap={ICON_SIZE}>
        <Breakout xAlign="center">
          <h1>@jupyterlab/ui-components@3.2.5</h1>
          <p>
            Double-click to copy an icon's <code>import</code> declaration
          </p>
        </Breakout>

        <Grid gridItemMinWidth={ICON_SIZE} gap={ICON_SIZE}>
          {Object.entries(icons).map(([iconName, icon], index) => {
            // console.log(icon)

            return (
              <Stack
                key={icon.name}
                xAlign="center"
                onDoubleClick={() => console.log(iconName)}
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
      </Clamp>
    </div>
  )
}

export default App
