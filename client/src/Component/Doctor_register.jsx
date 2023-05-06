import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";

const Doctor_Register = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    middle_name: "",
    surname: "",
    specialization: "",
    age: "",
    username: "",
    password: "",
    email: ""
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/doctor/register/",
        inputs
      );
      navigate("/dashboard/view");
      console.log(res);
      toast.success(res.data.Status);
    } catch (error) {
      //console.log(error);
      setError(error.response.data);
    }
  };

  console.log(inputs);

  return (
    <div className="conatiner p-5 m-5">
      <Link to="/dashboard/view" className="px-0"><button className="btn btn-sm btn-lg btn-primary">BACK</button></Link>
        <div className="col-12">
              <form className="form text-center">
                <h1 className="login mb-3">Doctor Registration Form</h1>
                {error && toast.error(error)}
                <div className="row mb-5">
                  <div className="col-6">
                    <label for="first_name" className="form-label fw-bold">First Name:</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="first_name"
                      name="first_name"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label for="middle_name" className="form-label fw-bold">Midlle Name:</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="middle_name"
                      name="middle_name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-5">
                <div className="col-6">
                    <label for="surname" className="form-label fw-bold">Surname:</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="surname"
                      name="surname"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                  <label for="age" className="form-label fw-bold">Age:</label>
                    <input
                      type="number"
                      min={0}
                      className="form-control text-center"
                      name="age"
                      id="age"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-6">
                  <label for="gender" className="form-label fw-bold">Gender:</label>
                    <select className="form-select text-center" id="gender" required>
                      <option selected defaultValue={"Uknown"} disabled>
                        Select Here
                      </option>
                      <option value={"M"}>MALE</option>
                      <option value={"F"}>FEMALE</option>
                    </select>
                  </div>

                  <div className="col-6">
                  <label for="phone_no" className="form-label fw-bold">Phone Number:</label>
                    <input
                      type="text"
                      placeholder="eg. 075444.."
                      className="form-control text-center"
                      id="phone_no"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-6">
                  <label for="specialization" className="form-label fw-bold">Specialization:</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="specialization"
                      name="specialization"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                  <label for="email" className="form-label fw-bold">Email:</label>
                    <input
                      type="email"
                      className="form-control text-center"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                  <label for="username" className="form-label fw-bold">Username:</label>
                    <input
                      type="text"
                      className="form-control text-center"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                  <label for="password" className="form-label fw-bold">Password:</label>
                    <input
                      type="password"
                      className="form-control text-center"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  className="btn btn-outline-success btn-lg fw-bold mt-4"
                  onClick={handleSubmit}
                >
                  Register
                </button>

                <button
                  className="btn btn-outline-secondary ms-5 btn-lg fw-bold mt-4"
                  onClick={handlePrint}
                >
                  <i className="bi bi-printer-fill"></i>
                </button>
              </form>

        </div>
    </div>
  );
};

export default Doctor_Register;
