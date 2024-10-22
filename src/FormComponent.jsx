// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useContext } from 'react';
import { TaskApi } from './context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = () => {

    //todo Step 3: Consumer Part
    let consumer=useContext(TaskApi)
    console.log("FormComponent", consumer); 
    let {inputData, handleChange, multiTask, setMultiTask, setInputData, handleAddOrUpdateNote}=consumer;
    let {title, category, description}=inputData;
    let handleSubmit = (e) => {
        e.preventDefault();
        //! pass data into multiTaskstate variable
        setMultiTask([...multiTask,inputData]);
        setInputData({
            title:"",
            description:"",
            category:"",
            id: uuidv4()   //? to generate new id for next data 
        })
    }
     
    return (
        <>
            <main className="formContainer">
                <h1 style={{marginBottom:"14px", marginTop:"25px"}}>TAKE NOTES BELOW</h1>
                <form onSubmit={handleSubmit} className='formBlock'>
                    <section style={{marginTop:"8px"}}>
                        <label htmlFor="" style={{marginLeft:"27px", fontSize:"22px", fontWeight:"bold"}}>TITLE</label>
                        <div>
                            <input type="text" placeholder='Please give title for notes' value={title} onChange={handleChange} name='title' style={{width:"480px", marginLeft:"25px", height:"40px", marginTop:"10px", border:"none", borderRadius:"8px", paddingLeft:"15px"}}/>
                        </div>
                    </section>
                    <section>
                        <label htmlFor="" style={{marginLeft:"27px", fontSize:"22px"}}>DESCRIPTION</label>
                        <div>
                            <textarea name="description" id="" rows={10} cols={30} placeholder='Please write your notes here..' value={description} onChange={handleChange} style={{width:"480px", marginLeft:"25px", height:"100px", marginTop:"10px", border:"none", borderRadius:"8px", padding:"15px"}}></textarea>
                        </div>
                    </section>
                    <section>
                        <label htmlFor=""  style={{marginLeft:"27px", fontSize:"22px"}}>CATEGORY</label>
                        <div>
                            <select name="category" id="" value={category} onChange={handleChange} style={{width:"480px", marginLeft:"25px", height:"40px", marginTop:"10px", border:"none", borderRadius:"8px", paddingLeft:"200px", fontWeight:"bold", fontSize:"16px", paddingRight:"5px"}}>
                                <option value="" style={{fontWeight:"bold"}}>---Select---</option>
                                <option value="general" style={{fontWeight:"bold"}}>GENERAL</option>
                                <option value="official" style={{fontWeight:"bold"}}>OFFICIAL</option>
                                <option value="technical" style={{fontWeight:"bold"}}>TECHNICAL</option>
                            </select>
                        </div>
                    </section>
                    <section>
                        <button onClick={handleAddOrUpdateNote} style={{width:"110px", height:"50px", border:"none", borderRadius:"10px", background:"rgba(225, 202, 75, 0.856)", color:"black", cursor:"pointer", fontSize:"17px", fontWeight:"bolder", marginLeft:"210px"}}>SUBMIT</button>
                    </section>
                </form>
            </main>

        </>
    )
}

export default FormComponent

//! When we provide multiple input options for the user value attribute, onChange should be given to immediate parent tag of input options.
//? checkbox, drop down