    // Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBNyxIyXnlv6w1XpjitfHOn813Oqt7sUWA",
        authDomain: "flyacc-8ebe1.firebaseapp.com",
        databaseURL: "https://flyacc-8ebe1-default-rtdb.firebaseio.com/",
        projectId: "flyacc-8ebe1",
        storageBucket: "flyacc-8ebe1.appspot.com",
        messagingSenderId: "378745090408",
        appId: "1:378745090408:web:a68468807b1f0d869726dd"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.database();