import React from 'react';

const NotificationList = ({ notifications }) => {
  return (
    <div className="p-4">
      {notifications.map((notification) => (
        <div key={notification.id} className="mb-2 p-2 border-b border-gray-200">
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
