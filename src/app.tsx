import React from 'react'
import styles from './app.scss'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App
