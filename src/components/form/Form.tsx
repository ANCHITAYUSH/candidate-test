import React, { useState } from 'react';
import { EuiFieldText, EuiButton, EuiFormRow } from '@elastic/eui';

interface FormProps {
  closeFlyout: () => void;
}

const Form: React.FC<FormProps> = ({ closeFlyout }) => {
  const [formData, setFormData] = useState({ field1: '', field2: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    closeFlyout(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <EuiFormRow label="Field 1" fullWidth>
        <EuiFieldText
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          fullWidth
          required
        />
      </EuiFormRow>
      <EuiFormRow label="Field 2" fullWidth>
        <EuiFieldText
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          fullWidth
          required
        />
      </EuiFormRow>
      <EuiButton type="submit" fill>
        Submit
      </EuiButton>
    </form>
  );
};

export default Form;
