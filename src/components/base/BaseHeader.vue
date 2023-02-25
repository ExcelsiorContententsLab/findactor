<script>
import {
  BellOutlined, HeartOutlined, LogoutOutlined, SearchOutlined, SettingOutlined, UserOutlined,
} from '@ant-design/icons-vue';

import useLocalStorage from '../../utils/useLocalStorage';

const accessToken = useLocalStorage('accessToken');

export default {
  components: {
    SearchOutlined,
    SettingOutlined,
    BellOutlined,
    UserOutlined,
    HeartOutlined,
    LogoutOutlined,
  },
  methods: {
    logout() {
      alert('로그아웃 되었습니다');
      accessToken.value = '';
      this.$router.push({ path: '/login' });
    },
    handleClickSetup() {
      this.$router.push({ path: '/actor' });
    },
  },
};
</script>
<template>
    <div class="header">
        <div class="header__wrapper">
            <ul class="nav">
                <a class="nav__item nav__item--logo">
                    <RouterLink to="/">
                        <img class="logo" src="@/assets/findactor_logo.png">
                    </RouterLink>
                </a>
                <a class="nav__item">
                    <RouterLink class="navmenu" tag="div" to="/audition/find">
                        오디션 찾기
                    </RouterLink>
                </a>
                <a class="nav__item">
                    프로필 투어
                </a>
                <div class="info">
                    <a-dropdown placement="bottomRight" :trigger="['click']">
                        <div class="profile">
                            <img class="avatar" src="/assets/myProfile.jpg">
                            <div class="notification"><span class="">New</span></div>
                        </div>
                        <template #overlay>
                            <a-menu size="large">
                                <a-menu-item key="1"
                                    disabled
                                    style="font-size:18px; padding:8px 4px 14px 14px; width:140px; margin-bottom:4px; margin-left:4px;">
                                    <BellOutlined></BellOutlined>
                                    알림
                                </a-menu-item>
                                <RouterLink to="/profile/update">
                                    <a-menu-item key="2" title=""
                                        style="font-size:18px; padding:8px 4px 14px 14px; width:140px; margin-bottom:4px; margin-left:4px;">
                                        <UserOutlined></UserOutlined>
                                        프로필 수정
                                    </a-menu-item>
                                </RouterLink>
                                <RouterLink to="/production/profile/interest">
                                    <a-menu-item key="3" title=""
                                        style="font-size:18px; padding:8px 4px 14px 14px; width:140px; margin-bottom:4px; margin-left:4px;">
                                        <HeartOutlined></HeartOutlined>
                                        MY 관심
                                    </a-menu-item>
                                </RouterLink>
                                <a-menu-item key="4"
                                    @click="handleClickSetup"
                                    style="font-size:18px; padding:8px 4px 14px 14px; width:140px; margin-bottom:4px; margin-left:4px;">
                                    <SettingOutlined></SettingOutlined>
                                    설정
                                </a-menu-item>
                                <a-divider type="vertical" />
                                <a-menu-item key="5" @click="logout"
                                    style="font-size:18px; padding:8px 4px 14px 14px; width:140px; margin-bottom:4px; margin-left:4px;">
                                    <LogoutOutlined></LogoutOutlined>
                                    로그아웃
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    height: 90px;
    width: 100%;
    box-shadow: 0px 10px 10px rgb(0 0 0 / 20%);
    background-color: #fff;

    &__wrapper {
        width: 1500px;
        height: 100%;
        margin: 0 auto;
    }

    .nav {
        display: flex;

        &__item {

            display: flex;
            width: 150px;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            color: #878787;
            font-weight: 700;

            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }

            &--logo {
                width: 300px;
            }
        }
    }

    .info {
        width: 220px;
        display: flex;
        margin-left: auto;
        align-items: center;

        .icon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .profile {
            display: flex;
            background: #FFFFFF;
            border-radius: 50%;
            width: 64px;
            height: 64px;
            margin-left: auto;
            cursor: pointer;
            position: relative;

            .avatar {
                flex: 0 0 64px;
                border-radius: 50%;
                border: 1px solid #FFFFFF;
                box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
                width: 100%;
                height: 100%;
                object-fit: fill;
            }

            .notification {
                position: absolute;
                width: 40px;
                height: 18px;
                margin-left: auto;
                padding-left: 8px;
                padding-top: 4px;
                color: white;
                background-color: #6044f8;
                border-radius: 20px;
                font-weight: 700;
                font-size: 12px;
                right: -15px;
            }
        }
    }
}
</style>
