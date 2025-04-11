// src/firebase/classService.js
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

export const getClasses = async () => {
  const db = getFirestore();
  const classCollection = collection(db, 'class');
  const classQuery = query(classCollection, orderBy('description'));
  const snapshot = await getDocs(classQuery);

  const classes = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.active === "1") {
      classes.push({ id: doc.id, ...data });
    }
  });

  return classes;
};
