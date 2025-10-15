import AllRoutes from "./PageRouting/AllRoutes"
import React, { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);
  return (
    <>
      <AllRoutes />
      {/* {loading ? <div className="preloader" /> : <AllRoutes />} */}

    </>
  )
}

export default App
