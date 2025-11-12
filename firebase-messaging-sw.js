// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyCUMZeyadunl1jx8tVDQKpramtVxGLN7CY",
  authDomain: "pwa-fcm-36b61.firebaseapp.com",
  projectId: "pwa-fcm-36b61",
  storageBucket: "pwa-fcm-36b61.firebasestorage.app",
  messagingSenderId: "569530461255",
  appId: "1:569530461255:web:8193396411dbaa29615562"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});