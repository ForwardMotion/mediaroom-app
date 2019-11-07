import Landing from './landing.page'
import ArticleView from './article.page'

export default [
    {
        path: '/',
        name: 'LandingPage',
        component: Landing
    },
    {
        path: '/blog/view/:id',
        component: ArticleView
    },
];
