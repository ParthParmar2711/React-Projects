// eslint-disable-next-line no-unused-vars
import React, { useContext, Fragment } from 'react'
import { TaskApi } from './context/TaskContext';
import Spinner from "./Spinner"
const DisplayNotes = () => {

  let c = useContext(TaskApi);
  console.log("DisplayNotes", c);

  let { selected, handleSelectedCategory, multiTask, handleEdit, handleDelete } = c;
  let { selectedCategory } = selected;

  return (
    <>
      <main className="notesContainer">
        <h1>DISPLAY NOTES</h1>
        <div value={selectedCategory} onChange={handleSelectedCategory} className="radio" >
          <input type="radio" id="all" name="selectedCategory" value="all" /> 
          <label htmlFor="all" className="custom-radio-label" style={{width:"150px"}}>All</label>
          <input type="radio" id="general" name="selectedCategory" value="general" /> 
          <label htmlFor="general" className="custom-radio-label"  style={{width:"150px"}}>General</label>
          <input type="radio" id="official" name="selectedCategory" value="official" />
          <label htmlFor="official" className="custom-radio-label"  style={{width:"150px"}}>Official</label>
          <input type="radio" id="technical" name="selectedCategory" value="technical" />
          <label htmlFor="technical" className="custom-radio-label"  style={{width:"150px"}}>Technical</label>
        </div>

        {/* iterating over multiTask to display notes*/}
        <section>
          <article>
            {multiTask.length === 0 ? <Spinner /> : multiTask.map((val) => {
              if (selectedCategory === "all" || selectedCategory === val.category) {
                if (val.title === "") return null; 
                return (
                  <Fragment key={val.id}>
                    <div id="note-container">
                      <div style={{ marginTop: "36px" }} className='note-card'>
                        <h2 style={{ color: "#6aaf08" }}>TITLE : {val.title}</h2>
                        <h3 >CATEGORY : {val.category}</h3>
                        <h3 >DESCRIPTION : {val.description}</h3>
                        <div className='button-container'>
                          <button onClick={() => handleEdit(val.id)} style={{ width: "110px", height: "50px", border: "none", borderRadius: "10px", background: "rgb(89,89,224)", color: "black", cursor: "pointer", fontSize: "18px", fontWeight: "bolder", marginLeft: "155px", marginTop: "20px", position: "relative", right: "-20px" }}>EDIT</button>
                          <button onClick={() => handleDelete(val.id)} style={{ width: "110px", height: "50px", border: "none", borderRadius: "10px", background: "rgb(233,93,93)", color: "black", cursor: "pointer", fontSize: "18px", fontWeight: "bolder", marginLeft: "210px", position: "relative", right: "171px" }}>DELETE</button>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              }
              return null; 
            })}
          </article>
        </section>
      </main>
    </>
  )
}

export default DisplayNotes

//! When we provide multiple input options for the user value attribute, onChange should be given to immediate parent tag of input options.
//? checkbox, drop down, radio btn