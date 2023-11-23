import Vue from 'vue';
import Router from 'vue-router';
import BlogComp from '@/components/BlogComp.vue'
import IndexComp from '@/components/IndexComp.vue'
import ProjectDetailsComp from '@/components/ProjectDetailsComp.vue'
import OurProject from '@/components/OurProject.vue'
import BlogDetailsComp from '@/components/BlogDetailsComp.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/indexcomp',
            name: 'indexcomp',
            component: IndexComp
        },
        {
            path: '/projectdetailscomp',
            name: 'projectdetailscomp',
            component: ProjectDetailsComp
        },
        {
            path: '/blogcomp',
            name: 'blogcomp',
            component: BlogComp
        },
        {
            path: '/ourproject',
            name: 'OurProject',
            component: OurProject
        },
        {
            path: '/blogdetailscomp',
            name: 'BlogDetailsComp',
            component: BlogDetailsComp
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});