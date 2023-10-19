import {createRouter, createWebHistory} from "vue-router";
import StartComponent from "../public/pages/start.component.vue";
import SearchParkingComponent from  "../public/pages/searchParking.component.vue"
import FrequentQuestionsComponent from "../public/pages/frequentQuestions.component.vue"
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";
import ProfileComponent from "../public/pages/profile.component.vue";
import ParkingDetailsComponent from "../public/pages/parking-details.component.vue";
import PayParkingComponent from "../public/pages/pay-parking.component.vue";

const router=createRouter({

    history: createWebHistory(),
    routes:[
        {path: '/start', component:StartComponent , meta: {title:'Start' }},
        {path:'/searchParking', component:SearchParkingComponent, meta: {title:'SearchParking'}},
        {path:'/frequentQuestions', component:FrequentQuestionsComponent, meta: {title:'FrequentQuestions'}},
        {path:'/profile',component:ProfileComponent, meta:{title: 'Profile'}},
        {path: '/', redirect:'/start'},
        {path: '/:pathMatch(.*)',component: PageNotFoundComponent },

        {
            path: '/parking/:id',
            name: 'ParkingDetails',
            component: ParkingDetailsComponent, // Utiliza el nombre correcto del componente
            meta: { title: 'Parking Details' },
        },

        {
            path: '/pay-parking',
            name: 'PayParking', // Nombre de la ruta
            component: PayParkingComponent, // El componente de pago que has importado
            meta: { title: 'Pagar Estacionamiento' }, // Opcional: Metadatos de la ruta
        },


    ]
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'ParkEasy';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})
export default router;
