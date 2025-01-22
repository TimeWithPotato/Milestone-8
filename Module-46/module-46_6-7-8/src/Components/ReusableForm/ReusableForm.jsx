import { useState } from "react";

const ReusableForm = ({ formTitle, submitBtnTxt = "submit", handleSubmit }) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleLocalSubmit = e => {
        e.preventDefault();
        handleSubmit(formData);
        setFormData({ name: "", email: "", password: "" });
    }
  return (
      <div>
          <h2>{formTitle}</h2>
      <form className="form" onSubmit={handleLocalSubmit}>
        <label htmlFor="name">Name: </label>
        <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" />
        <br />
        <label htmlFor="email">Email: </label>
        <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" />
        <br />
        <input type="submit" value={submitBtnTxt} />
      </form>
    </div>
  );
};

export default ReusableForm;
