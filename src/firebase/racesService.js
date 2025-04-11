// src/firebase/classService.js
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

export const getRaces = async () => {
  const db = getFirestore();
  const racesCollection = collection(db, 'races');
  const racesQuery = query(racesCollection, orderBy('description'));
  const snapshot = await getDocs(racesQuery);

  const races = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.active === "1") {
      races.push({ id: doc.id, ...data });
    }
  });

  return races;
};
