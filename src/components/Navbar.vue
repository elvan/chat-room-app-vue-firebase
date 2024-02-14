<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import getUser from '../composables/getUser';
import useLogout from '../composables/useLogout';

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
    };

    return { handleClick, user };
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
nav p {
  margin: 2px auto;
  color: #444;
  font-size: 16px;
}
nav p.email {
  color: #999;
  font-size: 14px;
}
</style>
