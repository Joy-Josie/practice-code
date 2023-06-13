import { useState, useEffect } from 'react'
import './App.css'

type mineBlock = {
  mine: boolean
  value: number
  revealed: boolean
  flagged: boolean
}

const neighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

function generateGround(): mineBlock[][] {
  return Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => {
      return { mine: false, value: 0, revealed: false, flagged: false }
    })
  )
}

function generateMines(ground: mineBlock[][]) {
  for (const row of ground) {
    for (const block of row) {
      block.mine = Math.random() < 0.15
    }
  }
  return ground
}

function calculateValue(ground: mineBlock[][]) {
  ground.forEach((row, x) => {
    row.forEach((block, y) => {
      if (block.mine) {
        neighbors.forEach(([dx, dy]) => {
          const x2 = x + dx
          const y2 = y + dy
          if (
            x2 < 0 ||
            x2 >= ground.length ||
            y2 < 0 ||
            y2 >= ground[0].length
          ) {
            return
          }
          ground[x2][y2].value++
        })
      }
    })
  })
}

function initAll() {
  const initialGround = generateGround()
  generateMines(initialGround)
  calculateValue(initialGround)
  return initialGround
}

function App() {
  const [ground, setGround] = useState(initAll())

  function handleRestart() {
    setGround(initAll())
  }

  function handleOver() {
    for (const row of ground) {
      for (const block of row) {
        block.revealed = true
      }
    }
    setGround([...ground])
  }

  function handleReveal(x: number, y: number) {
    const block = ground[x][y]
    if (block.revealed) {
      return
    }
    block.revealed = true
    if (block.value !== 0) {
      return
    }
    neighbors.forEach(([dx, dy]) => {
      const x2 = x + dx
      const y2 = y + dy
      if (x2 < 0 || x2 >= ground.length || y2 < 0 || y2 >= ground[0].length) {
        return
      }
      const block = ground[x2][y2]
      if (!block.mine) {
        if (block.value === 0) {
          handleReveal(x2, y2)
        } else {
          block.revealed = true
        }
      }
    })
  }

  function handleClick(
    x: number,
    y: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    const block = ground[x][y]
    if (e.button === 2) {
      block.flagged = !block.flagged
    }
    if (e.button === 0) {
      if (block.revealed) {
        return
      }
      if (block.mine) {
        handleOver()
        return
      }
      handleReveal(x, y)
    }
    setGround([...ground])
  }

  useEffect(() => {
    const win = ground.every(row => {
      return row.every(block => {
        return block.revealed && (!block.mine || block.flagged)
      })
    })
    if (win) {
      window.alert('You win!')
    }
  })

  return (
    <div
      onContextMenu={e => e.preventDefault()}
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <button onClick={handleRestart} className="mb-4">
        Restart
      </button>
      {ground.map((row, i) => {
        return (
          <div className="flex" key={i}>
            {row.map((block, j) => {
              return (
                <button
                  key={`${i}-${j}`}
                  className="h-10 w-10 p-0 !outline-0 m-0.2"
                  onMouseDown={handleClick.bind(null, i, j)}
                  style={{ background: block.revealed ? '#aaa' : '#000' }}
                  border="1 gray-400/10 !rd-0"
                >
                  {block.flagged
                    ? 'F'
                    : block.revealed
                    ? block.mine
                      ? 'X'
                      : block.value || ''
                    : ''}
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default App
