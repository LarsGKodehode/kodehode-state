import { useState } from 'react'

import styles from './counter.module.css'

function Counter() {
  // Modifying this is not going to update the returned JSX (HTML)
  // let someCount = 0

  // Call useState with the initial value
  // and use Array destrucutring for renaming what we get back
  const [ count, setCount ] = useState(0)

  function setExcplicitValue() {
    // This is fine when setting to an explict value
    setCount(10)
  }

  function incrementCount() {
    // We do this when we want to use the previous value
    setCount(
      (previousState) => previousState + 1
    )
  }

  return (
    <div className={styles.counter}>

      <h1>{count}</h1>

      <button onClick={setExcplicitValue} >Set to 10</button>
      <button onClick={incrementCount} >Increment</button>

    </div>
  )
}

export default Counter