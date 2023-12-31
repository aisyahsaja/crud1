import React,{useState} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";

const AddUser = () => {
const [title,setTitle] = useState("");
const[body, setBody]= useState("");
const navigate = useNavigate();

const saveUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('https://jsonplaceholder.typicode.com/posts/',{
            title,
            body
        });
        navigate("/");
    }catch(error){
        console.log(error);
     
    }
}
    
    return (
        <div className="columns my-5 is-centered">
           <div className="columns is-half">
                <form onSubmit={saveUser}>
                <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input type="text"
                              className="input"
                             onChange={(e) => setTitle (e.target.value)}
                             placeholder="Title"
                             />
                            </div> 
                           </div> 
                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <input type="text"
                              className="input"
                             onChange={(e) => setBody (e.target.value)}
                             placeholder="Body"
                             />

                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="button is-success">
                        save
                    </button>
                </div>
            </form>
          </div>
        </div>  
    
 )
 }
export default AddUser;