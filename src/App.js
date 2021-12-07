import './App.css';
import {useState} from "react";

function App() {
    const baseUrl = "http://localhost:8080/"
    const [inputValue,setInputValue] = useState({
        title: "",
        content: "",
        image:"",
        creator: {name: "Ehsan Khaleghian"},
    })

    const uploadFiles= () => {
        const form = new FormData();
        form.append("title",inputValue.title);
        form.append("content",inputValue.content);
        form.append("image",inputValue.image);
        fetch(baseUrl+"feed/post",{
            method: "POST",
            body: form
        })
            .then(response => console.log("RESPONSE:::", response))
            .catch(err => console.log(" ERROR IN UPLOADING IMAGE:::",err))
    }

  return (
    <div className="App">
        <label>Enter title</label>
        <br/>
        <input type="text" value={inputValue.title} onChange={(e) =>  setInputValue(prev => ({...prev, title:e.target.value}))}/>
        <br/>
        <br/>
        <label>Enter Content</label>
        <br/>
        <input type="text" value={inputValue.content} onChange={(e) => setInputValue(prev => ({...prev, content: e.target.value})) }/>
        <br/>
        <br/>
        <label>Upload the images</label>
        <br/>
        <input type="file"  onChange={(e) => setInputValue(prev => ({...prev, content: e.target.files}))}/>
        <br/>
        <br/>
        <button onClick={uploadFiles}>Submit</button>
    </div>
  );
}

export default App;
