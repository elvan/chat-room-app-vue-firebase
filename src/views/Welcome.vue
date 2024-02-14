<template>
  <div class="welcome container">
    <p>welcome</p>
    <!-- <SignupForm /> -->
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

export default {
  components: { SignupForm, LoginForm },
};
</script>

<style>
.welcome {
  padding: 20px 0;
  text-align: center;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 20px;
  outline: none;
  color: #999;
}
</style>
