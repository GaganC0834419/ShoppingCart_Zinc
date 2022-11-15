// import {
//     collection,
//     query,
//     where,
//     onSnapshot,
//     doc,
//     getDocs,
//     setDoc,
//     getDoc,
//     deleteDoc
// } from 'firebase';
import firestore from '../firebaseCOnfig';

export const getProducts = async (model) => {

    return new Promise((resolve, reject) => {
    firestore.collection("products").get()
        .then((snapshot) => {
        var data = snapshot.docs.map(d => {
            //console.log(d.data())
            return d.data();
        });
        resolve(data);
    })
    
    })
}

export const getOrders = async (id) => {
return new Promise((resolve, reject) => {
    firestore.collection("order").doc(id).collection(id).get()
        .then((snapshot) => {
          //   console.log(snapshot.data());
          var data = snapshot.docs.map(d => {
            //console.log(d.data())
            return d.data();
        });

        resolve(data);        
    })
   
    })
}

export const setProduct = (model) => {
        firestore.collection("products").doc(model.id).set({...model})
        .then((docRef) => {
    })
    
}

export const setOrder = (data, clId) => {
    console.log(clId);
    console.log(data);
    firestore.collection("order").doc(clId).collection(clId).doc(data.id).set({...data})
    .then((docRef) => {
    })

}

export const delProduct = (model) => {
    firestore.collection("products").doc(model).delete()
    .then((docRef) => {
})

} 



