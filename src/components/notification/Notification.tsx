// Notification.tsx
import React, { useEffect } from 'react';
import { EuiToast } from '@elastic/eui';

interface NotificationProps {
  closeToast: () => void;
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ closeToast, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast(); // Close toast after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [closeToast]);

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
};

export default Notification;
