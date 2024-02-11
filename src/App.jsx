import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Di bawah merupakan contoh penggunaan component di React

function Image() {
  return (
    <img src="https://akcdn.detik.net.id/visual/2020/08/13/darth-vader_43.jpeg?w=650&q=90" alt="Gambar Darth Vader" />
  )
}

function Gallery() {
  return (
    <section>
      <h1>Selamat Datang di Gallery Kami</h1>
      <Image/>
    </section>
  )
}

function App() {
  return (
    <Gallery/>
  )
}

export default App
