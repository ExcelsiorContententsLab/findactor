import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';

import useLocalStorage from '../utils/useLocalStorage';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 로그인
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },

    // 배우용
    {
      path: '/actor',
      name: 'home',
      meta: {
        layout: 'ActorLayout',
        title: '내 프로필',
      },
      component: HomeView,
    },
    {
      path: '/profile/update',
      name: 'profile-update',
      meta: {
        layout: 'ActorLayout',
        title: '프로필 수정',
      },
      component: () => import('../views/profile/ProfileUpdate.vue'),
    },
    {
      path: '/profile/interest',
      name: 'profile-interest',
      meta: {
        layout: 'ActorLayout',
        title: 'MY 관심',
      },
      component: () => import('../views/profile/ProfileInterest.vue'),
    },
    {
      path: '/portfolio/update',
      name: 'portfolio-update',
      meta: {
        layout: 'ActorLayout',
        title: '포트폴리오 수정',
      },
      component: () => import('../views/portfolio/PortfolioUpdate.vue'),
    },
    {
      path: '/audition/find',
      name: 'audition-find',
      meta: {
        layout: 'ActorLayout',
        title: '오디션 찾기',
      },
      component: () => import('../views/audition/AuditionFind.vue'),
    },
    {
      path: '/profile/tour',
      name: 'profile-tour',
      meta: {
        layout: 'ActorLayout',
        title: '프로필 투어',
      },
      component: () => import('../views/profile/ProfileTourDetail.vue'),
    },
    {
      path: '/profile/tour/detail',
      name: 'profile-tour-detail',
      meta: {
        layout: 'ActorLayout',
        title: '',
      },
      component: () => import('../views/profile/ProfileTourDetail.vue'),
    },

    // 제작사용
    {
      path: '/production',
      name: 'production-main',
      meta: {
        layout: 'ProductionLayout',
        title: 'MY 제작사',
      },
      component: () => import('../views/production/ProductionMain.vue'),
    },
    {
      path: '/production/find/actor',
      name: 'production-find-actor',
      meta: {
        layout: 'ProductionLayout',
        title: '',
      },
      component: () => import('../views/production/find/ProductionFindActor.vue'),
    },
    {
      path: '/production/audition/create',
      name: 'production-audition-create',
      meta: {
        layout: 'ProductionLayout',
        title: '오디션 등록',
      },
      component: () => import('../views/production/audition/ProductionAuditionCreate.vue'),
    },
    {
      path: '/production/audition/manage',
      name: 'production-audition-manage',
      meta: {
        layout: 'ProductionLayout',
        title: '오디션 관리',
      },
      component: () => import('../views/production/audition/ProductionAuditionManage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { value: accessToken } = useLocalStorage('accessToken');
  const isAuthenticated = accessToken;

  const isActor = accessToken.startsWith('ACTOR');
  const isProduction = accessToken.startsWith('PRODUCTION');

  if (to.path !== '/' && !isAuthenticated) {
    alert('로그인 해주세요');
    next({ path: '/' });
    return;
  }

  if (to.path === '/' && isAuthenticated && isActor) {
    next({ path: '/actor' });
    return;
  }

  if (to.path === '/' && isAuthenticated && isProduction) {
    next({ path: '/production' });
    return;
  }

  next();
});

export default router;
