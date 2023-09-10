import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

// Create CV Data
export const createCvData = async (cvData) => {
  try {
    const cvCollectionRef = collection(db, 'cv');
    const docRef = await addDoc(cvCollectionRef, cvData);
    console.log('CV data added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding CV data: ', error);
    throw error;
  }
};


// Read (Fetch) CV Data
export const fetchCvData = async () => {
  try {
    const cvCollectionRef = collection(db, 'cv');
    const cvDataSnapshot = await getDocs(cvCollectionRef);
    console.log('FetchCvData ', cvDataSnapshot.docs);
    const cvData = cvDataSnapshot?.docs.map((doc) => {
      const data = doc.data();
      return {
        nameExp: data.nameExp || '',
        occupation: data.occupation || '',
        workExperiences: data.workExperiences || [],
        educations: data.educations || [],
        email: data.email || '',
        phone: data.phone || '',
        aboutMe: data.aboutMe || '',
        keyTechnicalSkills: data.keyTechnicalSkills || [],
        keySoftSkills: data.keySoftSkills || [],
        languages: data.languages || [],
      };
    });

    return cvData; // Return the retrieved CV data
  } catch (error) {
    console.error('Error fetching CV data: ', error);
    throw error;
  }
};



  // Fetch CV Data by ID
export const fetchCvDataById = async (cvId) => {
  try {
    const cvDocRef = doc(db, 'cv', cvId);
    const docSnapshot = await getDoc(cvDocRef);
    if (docSnapshot.exists()) {
      console.log('fetchById', docSnapshot.data());
      return docSnapshot.data();
    } else {
      throw new Error('CV data not found');
    }
  } catch (error) {
    console.error('Error fetching CV data by ID: ', error);
    throw error;
  }
};


// Update CV Data
export const updateCvData = async (cvId, updatedCvData) => {
  try {
    const cvDocRef = doc(db, 'cv', cvId);
    await updateDoc(cvDocRef, updatedCvData);
    console.log('CV data updated successfully');
  } catch (error) {
    console.error('Error updating CV data: ', error);
    throw error;
  }
};

// Delete CV Data
export const deleteCvData = async (cvId) => {
  try {
    const cvDocRef = doc(db, 'cv', cvId);
    await deleteDoc(cvDocRef);
    console.log('CV data deleted successfully');
  } catch (error) {
    console.error('Error deleting CV data: ', error);
    throw error;
  }
};
