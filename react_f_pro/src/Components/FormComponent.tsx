import React, { useState } from 'react';

const FormComponent = () => {
  const [formState, setFormState] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    age: '',
    emailAddress: ''
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [formState.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      	<label>
      	  Name:
      	  <input type="text" name="name" onChange={handleChange} />
      	</label>
      </div>
      <div>
			<label>
			  Address:
			  <input type="text" name="address" onChange={handleChange} />
			</label>
		</div>
      <div>
			<label>
			  Phone Number:
			  <input type="tel" name="phoneNumber" onChange={handleChange} />
			</label>
		</div>
      <div>
			<label>
			  Age:
			  <input type="number" name="age" onChange={handleChange} />
			</label>
		</div>
      <div>
			<label>
			  Email Address:
			  <input type="email" name="emailAddress" onChange={handleChange} />
			</label>
		</div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormComponent;
