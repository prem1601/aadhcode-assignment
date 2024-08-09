import { useState } from "react";
import { FaLink } from "react-icons/fa6";

import PrimaryButton from "./PrimaryButton";
import { imageToBase64 } from "./imagetobase64";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    workEmail: "",
    contact: "",
    message: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFileChange = async (e) => {
    const file = await imageToBase64(e.target.files[0]);
    setData({ ...data, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit form action.", data);
    alert("Sent successfully..!");
    setData({ name: "", workEmail: "", contact: "", message: "", file: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="d-grid gap-4">
        <div>
          <p className="mb-1 fw-bold">I’m interested in...</p>
          <div className="d-flex flex-wrap gap-3">
            <p className="border border-black rounded-pill p-1 px-3 mb-0 mb-md-2">
              Development
            </p>
            <p className="border border-black rounded-pill p-1 px-3 mb-0 mb-md-2">
              Web/Product Design
            </p>
            <p className="border border-black rounded-pill p-1 px-3 mb-0 mb-md-2">
              E-Commerce
            </p>
          </div>
        </div>
        <div>
          <label className="mb-1" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            value={data.name}
            type="text"
            name="name"
            id="name"
            className="form-control"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-between gap-4 gap-md-0">
          <div className="col-md-6 col-12 pe-md-2">
            <label className="mb-1" htmlFor="workEmail">
              Work E-mail
            </label>
            <input
              onChange={handleChange}
              value={data.workEmail}
              type="text"
              name="workEmail"
              id="workEmail"
              className="form-control"
            />
          </div>
          <div className="col-md-6 col-12 ps-md-2">
            <label className="mb-1" htmlFor="contact">
              Contact
            </label>
            <input
              onChange={handleChange}
              value={data.contact}
              type="number"
              name="contact"
              id="contact"
              className="form-control"
            />
          </div>
        </div>
        <div>
          <label className="mb-1" htmlFor="message">
            Tell us about your project
          </label>
          <textarea
            onChange={handleChange}
            value={data.message}
            name="message"
            id="message"
            className="form-control"
            rows={5}
          />
          <div className="mt-3">
            <label htmlFor="file" className="cursor-pointer">
              <FaLink color="var(--primary-color)" size={20} />{" "}
              <span className="text-decoration-underline">Add attachment</span>
            </label>
            <input
              onChange={handleFileChange}
              value={data.file}
              type="file"
              name="file"
              id="file"
              className="form-control d-none"
            />
          </div>
        </div>
        <div>
          <PrimaryButton type="submit" name={"Submit"} />
        </div>
      </div>
    </form>
  );
};

export default Form;
