import React, { useRef, useState } from 'react'

export const App = () => {
  const [NameValidator, setNameValidator] = useState(false);
  const [EmailValidator, setEmailValidator] = useState(false);
  const [StateValidator, setStateValidator] = useState({
    state: false,
    content: ""
  });

  const [Genere, setGenere] = useState();

  const NameInput = useRef()
  const EmailInput = useRef()
  const StateInput = useRef()

  const [Bar, setBar] = useState(0);



  const changeName = () => {
    console.log(NameInput.current.value)
    let texto = NameInput.current.value
    texto = texto.replace(/\r?\n/g, " ");
    texto = texto.replace(/[ ]+/g, " ")
    texto = texto.replace(/^ /, "");
    texto = texto.replace(/ $/, "");
    texto = texto.split(" ");

    if (NameValidator == false) {
      if (texto.length >= 2) {
        setBar(Bar + 25)
        setNameValidator(true)
      }
    } else {
      if (texto.length < 2) {
        setBar(Bar - 25)
        setNameValidator(false)
      }
    }





  }


  const changeEmail = () => {
    const EMAIL_REGEX =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (EmailInput.current.value.match(EMAIL_REGEX)) {
      console.log("Valido")

    } else {

      console.log("Invalido")
    }



    if (EmailValidator == false) {
      if (EmailInput.current.value.match(EMAIL_REGEX)) {
        setBar(Bar + 25)
        setEmailValidator(true)

      }
    } else {
      if (EmailInput.current.value.match(EMAIL_REGEX)) {

      } else {
        setBar(Bar - 25)
        setEmailValidator(false)
      }
    }



  }



  const changeState = () => {
    console.log(StateInput.current.value)
    console.log(StateValidator)

    if (StateInput.current.value === "Choose") {
      console.log("Primera")
    } else {
      if (StateInput.current.value == "Maried") {

        if (StateValidator.state) {

        } else {

          if (StateValidator != "Maried") {

            setBar(Bar + 25)
            setStateValidator({
              state: true,
              contet: "Maried"
            })
          }
        }
      } else if (StateInput.current.value == "Single") {
        if (StateValidator.state) {

        } else {

          if (StateValidator != "Single") {

            setBar(Bar + 25)
            setStateValidator({
              state: true,
              contet: "Single"
            })
          }
        }
      }



    }

  }



  const changeGenere = (gen) => {
    console.log(Genere)
    console.log(gen)

    if (Genere === undefined) {
      setGenere(gen)
      setBar(Bar + 25)
    } else {
      setGenere(gen)
    }

  }




  return (
    <>




      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">First name</label>
          <input onChange={changeName} ref={NameInput} type="text" className="form-control" defaultValue="Mark" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={changeEmail} ref={EmailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">State</label>
          <select onClick={changeState} ref={StateInput} className="form-select" required>
            <option selected disabled value="Choose">Choose...</option>
            <option>Maried</option>
            <option>Single</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div>
          Genere <br />
          Male <input onClick={() => changeGenere("Male")} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue aria-label="..." />

          Female <input onClick={() => changeGenere("Female")} className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue aria-label="..." />
        </div>

        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={Bar} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{ width: Bar + "%" }} />
        </div>


        {
          Bar > 99 ?
            <div className="col-12">
              <button onClick={() => alert("SEND")} className="btn btn-primary" type="submit">Submit form</button>
            </div>
            :
            <div className="col-12">
              <button disabled="true" onClick={() => alert("SEND")} className="btn btn-primary" type="submit">Submit form</button>
            </div>
        }
      </form>






    </>
  )
}
