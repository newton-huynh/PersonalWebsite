import React, {useState} from 'react';
import logo from '/Users/newtonhuynh/Desktop/Coding/my-app/src/NewtonHuynhWillRice.JPG';
import './App.css';

function App() {

  const[count,setcount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p> <font size="20" font face="Impact">Newton Huynh</font> </p>
          <p> <font size="5" color="red" font face="cursive"> Will Rice College</font> </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          woahhh 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/newton-huynh-53623b178/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for LinkedIn Profile 
        </a>
        <p> You have clicked me {count} times</p>

        <button className="App-button" onClick={()=>
          {
          if (count===4)
            {window.open("https://www.youtube.com/watch?v=hHW1oY26kxQ")
            {setcount(0)}}
          else
            {setcount(count + 1)}
          }
        }>
          Click me five times for study music :)
        </button>

        <button onClick={()=>{window.open("http://www.cutestpaw.com/tag/dogs/</header>")}}>
          Click me for cute dog photos 
        </button>

       

      </header>
    </div>
  );
}

export default App;
