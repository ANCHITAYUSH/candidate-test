import React, { useState } from 'react';
import { EuiFieldText, EuiButton, EuiFormRow } from '@elastic/eui';

/** 
 * Props for the Form component.
 */
interface FormProps {
    /** 
     * Function to close the flyout when form is submitted.
     */
    closeFlyout: () => void;
}

/**
 * A reusable form component with two input fields and a submit button.
 *
 * @component
 * @param {FormProps} props - Props passed to the component
 * @returns {JSX.Element} The rendered Form component
 */
const Form: React.FC<FormProps> = ({ closeFlyout }) => {

//#region State

const [formData, setFormData] = useState({ field1: '', field2: '' });

//#endregion

//#region Handlers

/**
 * Handles input field changes.
 *
 * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
 */
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

/**
 * Handles form submission.
 *
 * @param {React.FormEvent} e - The form submit event
 */
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    closeFlyout(); 
};

//#endregion

//#region Render

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

//#endregion

};

export default Form;
