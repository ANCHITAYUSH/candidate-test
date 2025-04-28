import React, { useState } from 'react';
import { EuiFieldText, EuiButton, EuiFormRow, EuiSelect, EuiSpacer, EuiText } from '@elastic/eui';
import './Form.scss'; 

interface FormProps {
  closeFlyout: () => void;
}

const sexOption = [
  { value: 'na', text: 'Prefer not to disclose' },
  { value: 'male', text: 'Male' },
  { value: 'female', text: 'Female' },
];

const Form: React.FC<FormProps> = ({ closeFlyout }) => {
  const [formData, setFormData] = useState({ fullName: '', sex: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    closeFlyout();
  };

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

      {/* Optional: Add a success or error message */}
      <EuiText color="subdued">
        <p>By submitting this form, you agree to our terms and conditions.</p>
      </EuiText>
    </form>
  );
};

export default Form;
