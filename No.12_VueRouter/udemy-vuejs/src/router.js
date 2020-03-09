import Vue from 'vue';
import Router from 'vue-router';
// import Home from "./views/Home.vue";
// import HeaderHome from "./views/HeaderHome.vue";
// import Users from "./views/Users.vue";
// import HeaderUsers from "./views/HeaderUsers.vue";
// import UsersPosts from "./views/UsersPosts.vue";
// import UsersProfile from "./views/UsersProfile.vue";

const Home = () =>
    import(/* webpackChunkName: "Home" */ "./views/Home.vue");
const HeaderHome = () =>
    import(/* webpackChunkName: "HeaderHome" */ "./views/HeaderHome.vue");
const Users = () =>
    import(/* webpackChunkName: "Users" */ "./views/Users.vue");
const HeaderUsers = () =>
    import(/* webpackChunkName: "HeaderUsers" */ "./views/HeaderUsers.vue");
const UsersPosts = () =>
    import(/* webpackChunkName: "UsersPosts" */ "./views/UsersPosts.vue");
const UsersProfile = () =>
    import(/* webpackChunkName: "UsersProfile" */ "./views/UsersProfile.vue");

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            components: {
                default: Home,
                header: HeaderHome
            },
            beforeEnter(to, from, next) {
                next();
            }
        },
        {
            path: '/users/:id',
            components: {
                default: Users,
                header: HeaderUsers
            },
            props: {
                default: true
            },
            children: [{
                path: 'posts',
                component: UsersPosts
            }, {
                path: 'profile',
                component: UsersProfile,
                name: "users-id-profile"
            }]
        },
        {
            path: '*',
            redirect: {
                path: '/'
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            this.app.$root.$once('triggerScroll', () => {
                let position = {
                    x: 0,
                    y: 100
                }

                if (savedPosition) {
                    position = savedPosition
                }

                if (to.hash) {
                    position = {
                        selector: '#next-user',
                        offset: {
                            x: 0,
                            y: 300
                        }
                    }
                }

                resolve(position)

            })
        })



    }
})