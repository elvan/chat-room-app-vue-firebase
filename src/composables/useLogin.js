import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref('');

const login = async (email, password) => {
  error.value = '';

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = '';
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = 'Incorrect login credentials';
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
