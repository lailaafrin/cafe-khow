
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import SideCart from './components/SideCart'
import { useState } from 'react'

function App() {
  const [ bookmarks, setBookmarks ] = useState([]);
  const [ readingtime, setReadingtime ] = useState(0);

  const handleBookMark = blog => {
    const newBookmark = [ ...bookmarks, blog ];
    setBookmarks(newBookmark);
  }

  const handleReadTime = time => {
    const newReadingTime = readingtime + time;
    setReadingtime(newReadingTime);

    const previouseReanderingTime = JSON.parse(localStorage.getItem('watchTime'));
    
    if (previouseReanderingTime) {
      const sum = previouseReanderingTime + time;
      localStorage.setItem('watchTime', sum)

    }
    else {
      localStorage.setItem('watchTime',time)
    }
  }

  return (
    <>
      
      <Header></Header>
      
          <div className='md:flex max-w-6xl mx-auto'>
        <Home handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Home>
        <SideCart bookmarks={bookmarks} readingtime={readingtime}></SideCart>
          </div>
         
      
      <Contact></Contact>

    </>
  )
}

export default App
