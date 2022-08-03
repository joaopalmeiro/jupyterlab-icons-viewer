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
      <Clamp clamp="1024px" gap={ICON_SIZE}>
        <Breakout xAlign="center">
          <h1>@jupyterlab/ui-components@3.2.5</h1>
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
