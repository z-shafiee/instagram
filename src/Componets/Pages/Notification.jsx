import React from 'react';
import NotificationList from '../components/Notifications/NotificationList';

function Notifications() {
  const notifications = [
    // Sample notifications data
    { id: 1, message: 'User1 liked your post', timestamp: '2 hours ago' },
    { id: 2, message: 'User2 commented on your post', timestamp: '3 hours ago' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default Notifications;
