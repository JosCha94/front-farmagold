import { useState } from 'react';

export default function Contador() {
  const [count2, setCount] = useState(0)
  return(
    <button onClick={() => setCount((count2) => count2 + 1)}>
    count is {count2}
  </button>

  )
}

