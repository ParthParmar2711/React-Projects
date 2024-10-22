// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
const FormValidate = () => {

  let [formdata, setFormData] = useState({
    required: "",
    minlegth: "",
    maxlegth: "",
    valuelength: "",
    minrange: "",
    maxrange: "",
    rangevalue: "",
    password: "",
    confirmpass: ""
  })

  let { required, minlegth, maxlegth, valuelength, minrange, maxrange, rangevalue, password, confirmpass } = formdata;

  //!store all erros
  let [errors, setErrors] = useState({})

  //!event( onChange)-->SBE
  let handleChange = (event) => {
    let { name, value } = event.target
    setFormData({ ...formdata, [name]: value })
  }

  //!event(onSubmit)-->SBE
  let handleSubmit = (event) => {
    event.preventDefault()

    let validate = {}

    if (required === "") {
      validate.required = "This field is mandatory!"
    }

    if (minlegth === "") {
      validate.minlegth = "Please Enter the value"
    } else if (minlegth.length < 6) {
      validate.minlegth = "Content should have minum 6 characters"
    }

    if (maxlegth === "") {
      validate.maxlegth = "Please Enter the value";
    } else if (maxlegth.length > 6) {
      validate.maxlegth = "Content should have maximum 6 characters";
    }

    if (valuelength === "") {
      validate.valuelength = "Please Enter the value";
    } else if (valuelength.length < 6 || valuelength.length > 20) {
      validate.valuelength = "Content legth should be between 6-20 characters"
    }

    if (minrange === "") {
      validate.minrange = "Please Enter the value"
    } else if (minrange < 6) {
      validate.minrange = "Range should be minimum 6"
    }

    if (maxrange === "") {
      validate.maxrange = "Please Enter the value"
    } else if (maxrange > 10) {
      validate.maxrange = "Range should be maximum 10"
    }

    if (rangevalue === "") {
      validate.rangevalue = "Please Enter the value"
    } else if (rangevalue < 6 || rangevalue > 10) {
      validate.rangevalue = "Range should be between 6-20"
    }

    if (password === "") {
      validate.password = "Please Enter a Password"
    }

    if (confirmpass === "") {
      validate.confirmpass = "Please Confirm the Password"
    } else if (confirmpass !== password) {
      validate.confirmpass = "Invalid Password"
    }

    console.log("validate onj", validate);
    setErrors(validate);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/3 ml-20 border-2 border-black px-10 py-10 rounded-lg mt-6 mb-8 ml-[500px]">
        <legend className="text-2xl text-red-600 border-b-[3px] border-b-red-800 text-center font-extrabold" >FORM VALIDATION</legend>
        <section className="mt-3">
          <label htmlFor="req" className="pt-4 font-semibold">REQUIRED : </label>
          <div>
            <input
              type="text"
              name="required"
              id="req"
              placeholder="please enter"
              value={required}
              onChange={handleChange}
              className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]"
            />
          </div>
          <div className="text-red-500">{errors.required && <span>{errors.required}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="minval" className="pt-4 font-semibold">MIN LENGTH : </label>
          <div>
            <input
              type="text"
              name="minlegth"
              id="minval"
              value={minlegth}
              onChange={handleChange}
              className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]"
            />
          </div>
          <div className="text-red-500">{errors.minlegth && <span>{errors.minlegth}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="maxval" className="pt-4 font-semibold">MAX LENGTH :</label>
          <div>
            <input
              type="text"
              name="maxlegth"
              id="maxval"
              value={maxlegth}
              onChange={handleChange}
              className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]"
            />
          </div>
          <div className="text-red-500">{errors.maxlegth && <span>{errors.maxlegth}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="vallen" className="pt-4 font-semibold">VALUE LENGTH :</label>
          <div>
            <input
              type="text"
              id="vallen"
              name="valuelength"
              value={valuelength}
              onChange={handleChange}
              className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]"
            />
          </div>
          <div className="text-red-500">{errors.valuelength && <span>{errors.valuelength}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="minrange" className="pt-4 font-semibold">MIN RANGE : </label>
          <div>
            <input type="number" name='minrange' value={minrange} id="minrange" onChange={handleChange} className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]"/>
          </div>
          <div className="text-red-500">{errors.minrange && <span>{errors.minrange}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="maxrange" className="pt-4 font-semibold">MAX RANGE : </label>
          <div>
            <input type="number" name='maxrange' value={maxrange} id="maxrange" onChange={handleChange} className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]"/>
          </div>
          <div className="text-red-500">{errors.maxrange && <span>{errors.maxrange}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="rangevalue" className="pt-4 font-semibold">RANGE VALUE : </label>
          <div>
            <input type="number" name='rangevalue' value={rangevalue} id="rangevalue" onChange={handleChange} className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]" />
          </div>
          <div className="text-red-500">{errors.rangevalue && <span>{errors.rangevalue}</span>}</div>
        </section>
        <section className="mt-3">
          <label htmlFor="" className="pt-4 font-semibold">PASSWORD :</label>
          <div>
            <input type="password" placeholder="Enter your password" value={password} name="password" onChange={handleChange} className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]" />
          </div>
          <div className="text-red-500">{errors.password && <span>{errors.password}</span>}</div>
          <div>
            <input type="confirmpass" placeholder="Confirm your password" value={confirmpass} name="confirmpass" onChange={handleChange} className="border-2 bg-slate-200 mt-1 w-[425px] h-[35px] rounded-lg pl-[10px]" />
          </div>
          <div className="text-red-500">{errors.confirmpass && <span>{errors.confirmpass}</span>}</div>
        </section>
        <div>
          <button className="ml-[175px] mt-[30px] border-2 bg-slate-900 text-red-500 w-[100px] h-[38px] rounded-lg font-bold">SUBMIT</button>
        </div>
      </form>
    </>
  );
}
export default FormValidate