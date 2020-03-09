<template>
  <div>
    <h2>Users</h2>
    <hr />
    <h1>User No. {{ id }}</h1>
    <router-link
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1}, query: {lang: 'ja', page: 2}, hash: '#next-user' }"
    >次のユーザ</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link
      id="next-user"
      :to="{ name: 'users-id-profile', params: { id: Number(id) + 1}, query: {lang: 'ja', page: 2} }"
    >次のユーザ</router-link>
    <div style="height: 700px;"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    const isLeace = window.confirm("本当にこのページを離れますか？");
    if (isLeace) {
      next();
    } else {
      next(false);
    }
  }
};
</script>