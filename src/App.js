import './App.css';
import React, { useState } from 'react';
function App() {
const [value, setValue] = useState("");
const [results, setResults] = useState([]);
const fetchImages = () => {
fetch(`https://api.unsplash.com/search/photos?client_id=asmcHEmXuqtpv8v9b2da9-wmxo359cV7qe5XgRzBTIw&query=${value}&orientation=squarish`)
.then(res => res.json())
.then(data => {
console.log(data)
setResults(data.results)
})
}
return (
<>
<h1 className="unsp">UNSPLASH API</h1>
<div className="App">
<div className="myDiv">
<span className="sear">Search here <span style={{marginLeft:"30px", fontSize:"20px"}}> &#8594;</span></span> 
<input className= "typee"
style={{ width: "60%", height: "30px", border:"3px solid black" }}
type="text"
value={value}
onChange={(e) => setValue(e.target.value)}
/>
<button className="btn" onClick={() => fetchImages()}>Send</button>
</div>
<div className="gallery">
{
results.map((item) => {
return <img className="item" key={item.id} src={item.urls.regular} />
})
}
</div>
</div>
</>
);
}
export default App;