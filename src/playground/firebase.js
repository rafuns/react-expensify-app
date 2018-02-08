import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCqgOBP4BpB-XUlVCtbpr3_SJbuXR3CBLc",
    authDomain: "expensify-5eff0.firebaseapp.com",
    databaseURL: "https://expensify-5eff0.firebaseio.com",
    projectId: "expensify-5eff0",
    storageBucket: "expensify-5eff0.appspot.com",
    messagingSenderId: "656076874571"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

database.ref('expenses').push({
    description: 'This is an expense',
    note: '',
    amount: 45.23,
    createdAt: 0
});

// database.ref('notes/-L4gZMdoSxisBeUXAff_').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Theo Iorga',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Bucharest',
//         country: 'Romania'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) =>{
//     console.log('This failed!', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove()
// .then(() => {
//     console.log('Item removed correctly!');
// }).catch((err) => {
//     console.log('Item was not removed.', err);
// });
