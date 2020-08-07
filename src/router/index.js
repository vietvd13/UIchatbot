import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'
import Overall from '../components/Overall.vue'
import Individual from '../components/Individual.vue'
import QnAMaker from '../components/QnAMaker.vue'
import QuestionsList from '../components/QuestionsList.vue'
import ExampleCode from '../components/ExampleCode.vue'
import Quizzes from '../components/Quizzes.vue'
import TestResult from '../components/TestResult.vue'
import Setting from '../components/Setting.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/dashboard',
        redirect: '/dashboard/qna-maker',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard - EduChat'
        },
        children: [
            {
                path: 'overall',
                name: 'Overall',
                component: Overall,
                meta: {
                    title: 'Overall - EduChat'
                }
            },
            {
                path: 'individual',
                name: 'Individual',
                component: Individual,
                meta: {
                    title: 'Individual - EduChat'
                }
            },
            {
                path: 'qna-maker',
                name: 'QnAMaker',
                component: QnAMaker,
                meta: {
                    title: 'QnA Maker - EduChat'
                }
            },
            {
                path: 'questions-list',
                name: 'QuestionsList',
                component: QuestionsList,
                meta: {
                    title: 'Questions List - EduChat'
                }
            },
            {
                path: 'example-code',
                name: 'ExampleCode',
                component: ExampleCode,
                meta: {
                    title: 'ExampleCode - EduChat'
                }
            },
            {
                path: 'quizzes',
                name: 'Quizzes',
                component: Quizzes,
                meta: {
                    title: 'Quizzes - EduChat'
                }
            },
            {
                path: 'test-result',
                name: 'TestResult',
                component: TestResult,
                meta: {
                    title: 'Test Result - EduChat'
                }
                
            },
            {
                path: 'setting',
                name: 'Setting',
                component: Setting,
                meta: {
                    title: 'Setting - EduChat'
                }
            }
        ]
    },
    {
        path: '/dashboard',
        redirect: '/dashboard/qna-maker',
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login - EduChat'
        }
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 - Page Not Found'
        }
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {

    if (to.meta.title) {
      document.title = to.meta.title;
    }

    next();

});

export default router