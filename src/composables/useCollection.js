import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way

const useCollection = (collection) => {
  let error = ref('');

  const addDoc = async (doc) => {
    error.value = '';

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = 'could not send the message';
    }
  };

  return { error, addDoc };
};

export default useCollection;
