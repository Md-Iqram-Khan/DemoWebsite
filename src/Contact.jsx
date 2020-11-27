import React,{useState} from "react";

const Contact = () => {

  const [data, setData] = useState({
      name: "",
      number: "",
      eamil: "",
      message: ""
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal => {
      return{
        ...preVal,
        [name]: value,
      }
    }))
  }

  const formSubmit = (e) => {
      e.preventDeafult();
      alert(
        `My name is ${data.name}`
      )
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-6 col-10 mx-auto">
              <form onSubmit={formSubmit} >
                <div className="form-group">
                  <label >Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={data.name}
                    onChange={InputEvent}
                   placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone: </label>
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    value={data.number}
                    onChange={InputEvent}
                   placeholder="Enter your Phone"
                  />
                </div>

                <div className="form-group">
                  <label >Email: </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={data.eamil}
                    onChange={InputEvent}
                   placeholder="Enter your Email"
                  />
                </div>

                <div className="form-group">
                  <label >Message: </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="textarea"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  />
                </div>
                <div className="col-12 mt-3">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
