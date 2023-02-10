<script>
import ActorItem from '../../../components/actor/ActorItem.vue';
import ActorDetail from '../../../components/actor/ActorDetail.vue';
import ActorProfile from '../../../components/actor/ActorProfile.vue';
import AuditionItem from '../../../components/autidtion/AuditionItem.vue';


export default {
    name: "production-audition-manage",
    data() {
        return {
            openedProductionList: [],
            subMenu: 'a',
            isProfileDetailVisible: false,
            selectedProfile: {}
        };
    },
    computed: {
        // activeKey: {
        //     get() {
        //         return this.$route.query.type;
        //     }
        // }
        scrapList() {
            return this.$store.state.auditionList.filter(v => v.isScrap);
        },
        myProductionList() {
            return this.$store.state.productionList.filter(v => v.isLiked);
        },
        myOfferedProductionList() {
            const productionList = this.$store.state.productionList.filter(v => v.auditionList.filter(e => e.isOffered));
            return productionList;
        }
    },
    watch: {
        "$route.query": {
            immediate: true,
            handler: function (route) {
                this.activeKey = this.$route.query.type;
            }
        }
    },
    methods: {
        handleTabClick(val) {
            this.$router.replace("/production/audition/manage?type=" + val);
        },
        handleClickProfileDetail(profile) {
            this.selectedProfile = profile;
            this.isProfileDetailVisible = true;
        }
    },
    mounted() {
        console.log("mounted");
    },
    components: { AuditionItem, ActorItem, ActorProfile, ActorDetail }
}
</script>
<template>
    <div class="production-audition-manage container">

        <a-tabs v-model:activeKey="activeKey" size="large" :tabBarStyle="{ 'font-weight': '700' }"
            @tabClick="handleTabClick">
            <a-tab-pane key="ongoing" :tab="`진행중인 오디션`">
                <div class="container__title">
                    진행중인 오디션({{ $store.state.production.detail.auditionList.length }})
                </div>
                <div class="tab-panel">
                    <AuditionItem v-bind="$store.state.production.detail.auditionList[0]" :only-view="true"
                        :no-border="true"></AuditionItem>
                </div>
                <div style="margin-bottom:20px;">
                    <a-radio-group v-model:value="subMenu" button-style="solid" size="large">
                        <a-radio-button value="a">지원자 16</a-radio-button>
                        <a-radio-button value="b">프로필합격 6</a-radio-button>
                        <a-radio-button value="c">불합격 5</a-radio-button>
                        <a-radio-button value="d">보류 0</a-radio-button>
                        <a-radio-button value="e">미확인 5</a-radio-button>
                    </a-radio-group>
                </div>
                <div class="container__title" style="margin-bottom:20px;">
                    지원자
                </div>
                <div class="tab-panel">
                    <ul class="applicant">
                        <li class="applicant__item" v-for="(actor, index) in $store.state.production.findActorList"
                            :key="index" @click="handleClickProfileDetail(actor)">
                            <ActorItem v-bind="actor" :index="index"></ActorItem>
                        </li>
                    </ul>
                </div>
            </a-tab-pane>
            <a-tab-pane key="closed" tab="마감된 오디션" force-render>

            </a-tab-pane>
        </a-tabs>

        <a-modal v-model:visible="isProfileDetailVisible" title="프로필 상세" width="1200px" cancelText="취소" okText="확인">
            <div>
                <ActorDetail></ActorDetail>
            </div>
        </a-modal>

        <RouterLink class="btn" to="/production/audition/create">
            <a-button type="primary" size="large">오디션 등록</a-button>
        </RouterLink>
    </div>
</template>
<style lang="scss" scoped>
.production-audition-manage {
    min-height: calc(100vh - 300px);
    position: relative;

    .panel {
        &__content {
            background-color: rgb(246, 244, 255);
            color: rgb(135, 135, 135);
            box-shadow: none;
            font-weight: 400;
            font-size: 20px;
        }
    }

    .btn {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .applicant {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #dadada;

        &__item {
            flex: 50%;

            &:hover {
                cursor: pointer;
                box-shadow: 0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%);
            }
        }
    }
}
</style>