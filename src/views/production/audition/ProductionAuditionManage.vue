<script>
import ActorItem from '../../../components/actor/ActorItem.vue';
import ActorDetail from '../../../components/actor/ActorDetail.vue';

import { loadAuditions } from '../../../service/auditions';

import actors from '../../../actors';

export default {
  name: 'production-audition-manage',
  data() {
    return {
      openedProductionList: [],
      subMenu: 'applicant',
      isProfileDetailVisible: false,
      selectedProfile: {},
      auditions: [],
      closedAuditions: [],
      currentAudition: null,
      actors,
    };
  },
  computed: {
    scrapList() {
      return this.$store.state.auditionList.filter((v) => v.isScrap);
    },
    myProductionList() {
      return this.$store.state.productionList.filter((v) => v.isLiked);
    },
    myOfferedProductionList() {
      const productionList = this.$store.state.productionList
        .filter((v) => v.auditionList.filter((e) => e.isOffered));
      return productionList;
    },
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(route) {
        this.activeKey = this.$route.query.type;
      },
    },
  },
  methods: {
    handleTabClick(val) {
      this.$router.replace(`/production/audition/manage?type=${val}`);
    },
    handleClickProfileDetail(profile) {
      this.selectedProfile = profile;
      this.isProfileDetailVisible = true;
    },
    handleManageApplicant() {
      loadAuditions({ productionName: '(주)엑셀시오르콘텐츠랩' })
        .then((data) => {
          this.auditions = data.filter(({ isClosed }) => !isClosed);
          this.closedAuditions = data.filter(({ isClosed }) => isClosed);
          this.isProfileDetailVisible = false;
          this.currentAudition = this.auditions
            .find(({ title }) => title === this.currentAudition.title);
        });
    },
  },
  mounted() {
    loadAuditions({ productionName: '(주)엑셀시오르콘텐츠랩' })
      .then((data) => {
        // TODO: delete this
        this.auditions = data.filter(({ isClosed }) => !isClosed);
        this.closedAuditions = data.filter(({ isClosed }) => isClosed);
        this.isProfileDetailVisible = false;
      });
  },
  components: {
    ActorItem, ActorDetail,
  },
};
</script>
<template>
    <div class="production-audition-manage container">

        <a-tabs v-model:activeKey="activeKey" size="large" :tabBarStyle="{ 'font-weight': '700' }"
            @tabClick="handleTabClick">
            <a-tab-pane key="ongoing" :tab="`진행중인 오디션 (${auditions.length})`">
                <div class="container__title">
                  진행중인 오디션
                </div>
                <div style="margin-bottom:20px;">
                    <a-radio-group
                      v-model:value="currentAudition"
                      button-style="solid"
                      size="large"
                    >
                        <a-radio-button
                          v-for="audition in auditions"
                          :value="audition"
                          :key="audition.title"
                        >
                          {{ audition.title }}
                        </a-radio-button>
                    </a-radio-group>
                </div>
                <div v-if="currentAudition">
                  <div class="container__title" style="margin-bottom:20px;">
                      지원자 관리
                  </div>
                  <div style="margin-bottom:20px;">
                      <a-radio-group v-model:value="subMenu" button-style="solid" size="large">
                          <a-radio-button value="applicant">
                            지원자 ({{ currentAudition.appliedAuditionees.length }})
                          </a-radio-button>
                          <a-radio-button value="passed">
                            프로필합격 ({{ currentAudition.passedAuditionees.length }})
                          </a-radio-button>
                          <a-radio-button value="rejected">
                            불합격 ({{ currentAudition.rejectedAuditionees.length }})
                          </a-radio-button>
                          <a-radio-button value="pending">
                            보류 ({{ currentAudition.pendingAuditionees.length }})
                          </a-radio-button>
                      </a-radio-group>
                  </div>
                  <div class="tab-panel">
                      <ul v-if="subMenu === 'applicant'" class="applicant">
                          <li
                            class="applicant__item"
                            v-for="(actor, index) in currentAudition.appliedAuditionees"
                            :key="index" @click="handleClickProfileDetail(actor)"
                          >
                            <ActorItem v-bind="actor" :index="index"></ActorItem>
                          </li>
                      </ul>
                      <ul v-if="subMenu === 'passed'" class="applicant">
                          <li
                            class="applicant__item"
                            v-for="(actor, index) in currentAudition.passedAuditionees"
                            :key="index" @click="handleClickProfileDetail(actor)"
                          >
                            <ActorItem v-bind="actor" :index="index"></ActorItem>
                          </li>
                      </ul>
                      <ul v-if="subMenu === 'rejected'" class="applicant">
                          <li
                            class="applicant__item"
                            v-for="(actor, index) in currentAudition.rejectedAuditionees"
                            :key="index" @click="handleClickProfileDetail(actor)"
                          >
                            <ActorItem v-bind="actor" :index="index"></ActorItem>
                          </li>
                      </ul>
                      <ul v-if="subMenu === 'pending'" class="applicant">
                          <li
                            class="applicant__item"
                            v-for="(actor, index) in currentAudition.pendingAuditionees"
                            :key="index" @click="handleClickProfileDetail(actor)"
                          >
                            <ActorItem v-bind="actor" :index="index"></ActorItem>
                          </li>
                      </ul>
                  </div>
                </div>
            </a-tab-pane>
            <a-tab-pane key="closed" :tab="`마감된 오디션 (${closedAuditions.length})`" force-render>
              <ul >
                <li
                  v-for="audition in closedAuditions"
                  :key="audition.title"
                  class="closed-audition"
                >
                  - {{ audition.title }}
                </li>
              </ul>
            </a-tab-pane>
        </a-tabs>

        <a-modal
          v-model:visible="isProfileDetailVisible"
          title="프로필 상세"
          width="1200px"
          cancelText="취소"
          okText="확인"
        >
            <div>
                <ActorDetail
                  operationType="manage"
                  :audition="currentAudition"
                  @manageApplicant="handleManageApplicant"
                  :actor="actors[1]"
                ></ActorDetail>
            </div>
        </a-modal>

        <RouterLink class="btn" to="/production/audition/create">
            <a-button type="primary" size="large">오디션 등록</a-button>
        </RouterLink>
    </div>
</template>
<style lang="scss" scoped>
.closed-audition {
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: dotted;
}

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
