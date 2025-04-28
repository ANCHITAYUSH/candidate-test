import React, { useEffect, useRef } from 'react';
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiToast } from '@elastic/eui';
import './Notification.scss';

interface NotificationProps {
    closeToast: () => void;
    message: string;
  }
  
const Notification: React.FC<NotificationProps> = ({ closeToast, message }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            closeToast();
        }, 3000);

        return () => clearTimeout(timer);
    }, [closeToast]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
            closeToast(); 
        }
    };

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
};

export default Notification;