import React, { useEffect, useRef } from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiToast } from '@elastic/eui';
import './Notification.scss';

// #region Interfaces

// Props for Notification component
interface NotificationProps {
    closeToast: () => void;     // Function to close the toast
    message: string;            // Message to display inside the toast
}

// #endregion
  
//#region Notification Component

const Notification: React.FC<NotificationProps> = ({ closeToast, message }) => {

    // #region References

    const popupRef = useRef<HTMLDivElement>(null);  // Reference to the popup to detect outside clicks

    // #endregion

    // #region Lifecycle Methods

    useEffect(() => {
        // Auto-close the toast after 3 seconds
        const timer = setTimeout(() => {
            closeToast();
        }, 3000);

        return () => clearTimeout(timer);   // Clear timer if component unmounts early
    }, [closeToast]);

    // #endregion

    // #region Handlers

    // Close toast if backdrop (outside popup) is clicked
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            closeToast(); 
        }
    };

    // #endregion

    // #region Render

    return (
        <div className="toastBackdrop" onClick={handleBackdropClick}>
            <div className="toastPopup" ref={popupRef}>
                <EuiToast
                title="Success"
                color="success"
                iconType="check"
                onClose={closeToast}
                className="customToast"
                >
                    {message}
                    <EuiFlexGroup justifyContent="flexEnd" gutterSize="s">
                        <EuiFlexItem grow={false}>
                            <EuiButton size="s" 
                            className='customCloseButton' 
                            onClick={closeToast}>
                                Close
                            </EuiButton>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiToast>
            </div>
        </div>
    );

    // #endregion
};

// #endregion

export default Notification;