import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase-config'; // ou ajuste o path conforme necessário

export const getClasses = async () => {
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
