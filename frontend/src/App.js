import './App.css';
import { useState } from 'react'
import axios from "axios"
function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("first", title, desc)
    const data = {
      title,
      desc
    }
    const resp= await axios.post("http://localhost:5000/todo/add", data)
    alert(resp.message)
    // fetch("http://localhost:5000/todo/add", {
    //   method: "POST",
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="title">title:</label><br />
      <input type="text" id="title" name="title" onChange={(e) => settitle(e.target.value)} /><br />
      <label for="desc">desc:</label><br />
      <input type="text" id="desc" name="desc" onChange={(e) => setdesc(e.target.value)} /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
