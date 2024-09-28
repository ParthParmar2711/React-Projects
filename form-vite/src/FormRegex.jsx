// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
const FormRegex = () => {

  let [formData, setFormData] = useState({
    email: "",
    url: "",
    digit: "",
    number: "",
    alphanum: ""
  })

  let { email, url, digit, number, alphanum } = formData

  //!store error in state
  let [errors, setErrors] = useState({})

  //!Pagination 
  let [currentPage, setCurrentPage] = useState(1)
  let totalPage = 3

  let handleSubmit = (event) => {
    event.preventDefault();

    let validate = {}; //?First store error in "validate obj" then pass and store it in "error state"

    //*In 1st page email and url
    if (currentPage === 1) {
      //!email validation
      let regexEmail = /\S+@\S+\.\S+/;
      if (email === "") {
        validate.email = "This field is mandatory!";
      } else if (!regexEmail.test(email)) {
        validate.email = "Pattern is not matching for email!";
      }

      //!url validation
      let regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      if (url === "") {
        validate.url = "This field is mandatory!";
      } else if (!regexUrl.test(url)) {
        validate.url = "Pattern is not matching for url!";
      }
    }

    //*In 2nd page digit and number
    if (currentPage === 2) {
      //!digit validation (decimal value is not allowed)
      let regexDigits = /^[0-9]+$/;
      if (digit === "") {
        validate.digit = "This field is mandatory!";
      } else if (!regexDigits.test(digit)) {
        validate.digit = "Pattern is not matching for digit!";
      }

      //!Number validation (decimal value is allowed)
      let regexNumber = /^-?\d+(?:\.\d+)?$/;
      if (number === "") {
        validate.number = "This field is mandatory!";
      } else if (!regexNumber.test(number)) {
        validate.number = "Pattern is not matching for number!";
      }
    }

    //*In 2nd page digit and number
    if (currentPage === 3) {
      //!Alpha numeric
      let regexAlpha = /^[a-zA-Z0-9\s]+$/;
      if (alphanum === "") {
        validate.alphanum = "This field is mandatory!";
      } else if (!regexAlpha.test(alphanum)) {
        validate.alphanum = "Pattern is not matching for alpha numeric!";
      }
    }

    //!Only when there is"no error" in current page , we have to move to nextpage
    if (Object.keys(validate).length === 0) {
      //? no error
      if (currentPage < totalPage) {
        //?If current page is not last page
        setCurrentPage(currentPage + 1);
      } else {
        //?If current page is  last page
        alert("Form submitted");
        console.log(formData, "submitted");
      }
    }

    setErrors(validate);
  }

  let handleRest = (event) => {
    event.preventDefault()
    setFormData({
      email: "",
      url: "",
      digit: "",
      number: "",
      alphanum: ""
    })
    setErrors({})
  }


  //! previous button
  let handlePrevious = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage - 1)
  }


  let handleChange = event => {
    console.log(event);
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-[#dcdbdb]"> </div>
      <form className="w-1/3 ml-20  px-10 py-10 mt-28 rounded-lg  mb-8 ml-[500px] h-[480px] bg-[#cfd1ef] drop-shadow-2xl absolute bottom-[85px]">
        <h1 className="text-[30px] text-[#484892] border-b-[3px] border-b-[#484892] text-center font-extrabold pb-3">FORM VALIDATION</h1>
        {/* CURRENT PAGE 1 display email and url input*/}
        {currentPage === 1 && (
          <>
            <section className="mt-8">
              <label htmlFor="uemail" className="text-[#484892] font-bold text-[21px]">EMAIL :</label>
              <input
                type="text"
                id="uemail"
                value={email}
                name="email"
                onChange={handleChange}
                className="border-2 bg-slate-200 mt-[6px] w-[435px] h-[41px] rounded-lg pl-[10px]"
              />
              <div>{errors.email && <span>{errors.email}</span>}</div>
            </section>
            <section className="mt-6">
              <label htmlFor="url" className=" font-bold text-[21px] text-[#484892]">URL : </label>
              <input
                type="text"
                id="url"
                value={url}
                name="url"
                onChange={handleChange}
                className="border-2 bg-slate-200 mt-[6px] w-[435px] h-[41px] rounded-lg pl-[10px]"
              />
              <div>{errors.url && <span>{errors.url}</span>}</div>
            </section>
          </>
        )}

        {/* CURRENT PAGE 2 display digit and number input*/}
        {currentPage === 2 && (
          <>
            <section  className="mt-8">
              <label htmlFor="dig" className="text-[#484892] font-bold text-[21px]">DIGITS : </label>
              <input
                type="text"
                id="dig"
                value={digit}
                name="digit"
                onChange={handleChange}
                 className="border-2 bg-slate-200 mt-[6px] w-[435px] h-[41px] rounded-lg pl-[10px]"
              />
              <div>{errors.digit && <span>{errors.digit}</span>}</div>
            </section>
            <section>
              <label htmlFor="num" className="text-[#484892] font-bold text-[21px]">NUMBER : </label>
              <input
                type="text"
                id="num"
                value={number}
                name="number"
                onChange={handleChange}
                className="border-2 bg-slate-200 mt-[6px] w-[435px] h-[41px] rounded-lg pl-[10px]"
              />
              <div>{errors.number && <span>{errors.number}</span>}</div>
            </section>
          </>
        )}

        {/* CURRENT PAGE 2 display alphanum input*/}
        {currentPage == 3 && (
          <>
            <section className="mt-8">
              <label htmlFor="alpha" className="text-[#484892] font-bold text-[21px]">ALPHANUMERIC : </label>
              <input
                type="text"
                id="alpha"
                value={alphanum}
                name="alphanum"
                onChange={handleChange}
                className="border-2 bg-slate-200 mt-[6px] w-[435px] h-[41px] rounded-lg pl-[10px]"
              />
              <div>{errors.alphanum && <span>{errors.alphanum}</span>}</div>
            </section>
          </>
        )}

        <section className="flex">
          {currentPage > 1 && <button onClick={handlePrevious}  className="ml-[5px] mt-[40px] border-2 bg-slate-200 text-[#484892] w-[120px] h-[42px] rounded-xl font-extrabold text-[19px]">PREVIOUS</button>}
          <button onClick={handleSubmit} className="ml-[77px] mt-[40px] border-2 bg-slate-200 text-[#484892] w-[120px] h-[42px] rounded-xl font-extrabold text-[19px]">{currentPage === totalPage ? "SUBMIT" : "NEXT"}</button>
          <button onClick={handleRest} className="ml-[30px] mt-[40px] border-2 bg-slate-200 text-[#484892] w-[120px] h-[42px] rounded-xl font-extrabold text-[19px]">RESET</button>
        </section>
      </form>


    </>
  );
}
export default FormRegex