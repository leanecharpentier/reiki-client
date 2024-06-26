import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Seances from '../views/Seances.vue';
import APropos from '../views/APropos.vue';
import Contact from '../views/Contact.vue';
import Appointment from '../views/Appointment.vue';
import Confirmation from '../views/Confirmation.vue';
import Admin from '../views/Admin.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/seances',
    name: 'Séances',
    component: Seances
  },
  {
    path: '/a-propos',
    name: 'A Propos',
    component: APropos
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/rendez-vous',
    name: 'Rendez-vous',
    component: Appointment
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  },
  {
    path: '/rendez-vous',
    name: 'Rendez-vous',
    component: Appointment
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
];

const router = createRouter({
  history: createWebHistory(""),
  routes
});

export default router;
