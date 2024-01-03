import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Caraso from './Caraso'
import Hero from './hero'
import Card from './Card'
import Cards from './Cards'
import Last from './Last'
import Footer from './Footer'
function App(){
 return <div>
<Navbar/>
<Caraso/>
<Hero/>
<Card/>
<Cards/>
<Last/>
<Footer/>
 </div>
}
export default App
