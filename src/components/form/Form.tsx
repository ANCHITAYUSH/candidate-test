import React, { useState } from 'react';
import { EuiFieldText, EuiButton, EuiFormRow, EuiSelect, EuiSpacer, EuiText } from '@elastic/eui';
import './Form.scss'; 

// #region Interfaces

// Interface for Form component props
interface FormProps {
  closeFlyout: () => void;  // Function to close the form
}

// #endregion

// #region Constants

// Sex options for the select dropdown
const sexOption = [
  { value: 'na', text: 'Prefer not to disclose' },
  { value: 'male', text: 'Male' },
  { value: 'female', text: 'Female' },
];

//#endregion

// #region Form Component

const Form: React.FC<FormProps> = ({ closeFlyout }) => {

  // #region States

  const [formData, setFormData] = useState({ fullName: '', sex: '' });

  // #endregion

  // #region Handlers

  // Handle changes in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    closeFlyout();
  };

  // #endregion

  // #region Render
  
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <EuiFormRow label="Full Name" fullWidth>
        <EuiFieldText
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          required
          placeholder="Enter your full name"
        />
      </EuiFormRow>

      <EuiFormRow label="Sex" fullWidth>
        <EuiSelect
          name="sex"
          options={sexOption}
          value={formData.sex}
          onChange={handleChange}
          fullWidth
          required
        />
      </EuiFormRow>

      <EuiSpacer size="l" />

      <EuiButton type="submit" fill className="submit-button">
        Submit
      </EuiButton>

      <EuiSpacer size="m" />

      <EuiText color="subdued">
        <p>By submitting this form, you agree to our terms and conditions.</p>
      </EuiText>
    </form>
  );

  // #endregion

};

// #endregion

export default Form;
