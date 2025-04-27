import React, { useEffect } from 'react';
import { EuiToast } from '@elastic/eui';

/**
 * Props for the Notification component.
 */
interface NotificationProps {
    /**
     * Function to close the toast notification.
     */
    closeToast: () => void;
    /**
     * The message to display inside the toast.
     */
    message: string;
}

/**
 * A reusable notification toast component that displays a success message
 * and automatically disappears after 3 seconds.
 *
 * @component
 * @param {NotificationProps} props - Props passed to the component
 * @returns {JSX.Element} The rendered Notification component
 */
const Notification: React.FC<NotificationProps> = ({ closeToast, message }) => {

    //#region Effects

    useEffect(() => {
    const timer = setTimeout(() => {
        closeToast();
    }, 3000);

    return () => clearTimeout(timer);
    }, [closeToast]);

    //#endregion

    //#region Render
    
    return (
        <EuiToast
            title="Success"
            color="success"
            iconType="check"
            onClose={closeToast}
        >
            {message}
        </EuiToast>
    );

    //#endregion
};

export default Notification;
