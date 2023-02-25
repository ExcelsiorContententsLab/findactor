<script>
import { loadRequests } from '../../service/auditions';

import storedActors from '../../actors';

import ActorItem from '../../components/actor/ActorItem.vue';

export default {
  name: 'ProductionProfileInterest',
  data() {
    return {
      requests: [],
      actors: {},
      isProfileDetailVisible: false,
      selectedActor: {},
    };
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler() {
        this.activeKey = this.$route.query.type;
      },
    },
    requests() {
      this.requests.forEach((request) => {
        if (!this.actors[request.auditionTitle]) {
          this.actors[request.auditionTitle] = [];
        }

        const actor = storedActors.find(({ email }) => email === request.actorEmail);

        this.actors[request.auditionTitle].push(actor);
      });
    },
  },
  methods: {
    handleTabClick(val) {
      this.$router.replace(`/production/profile/interest?type=${val}`);
    },
    handleClickActor(actor) {
      this.selectedActor = actor;
      this.isProfileDetailVisible = true;
    },
  },
  mounted() {
    loadRequests({ productionName: '(주)엑셀시오르콘텐츠랩' }).then((requests) => {
      this.requests = requests;
    });
  },
  components: { ActorItem },
};
</script>
<template>
    <div class="profile-interest container">

        <a-tabs v-model:activeKey="activeKey" size="large" :tabBarStyle="{ 'font-weight': '700' }"
            @tabClick="handleTabClick">
            <a-tab-pane key="scrap" :tab="`스크랩`">
            </a-tab-pane>

            <a-tab-pane key="open" tab="열람" disabled force-render>
            </a-tab-pane>

            <a-tab-pane key="offer" tab="보낸 제안">
              <div
                class="audition-request"
                :key="auditionTitle"
                v-for="auditionTitle in Object.keys(this.actors)"
              >
                <h1>{{ auditionTitle }} ({{ actors[auditionTitle].length }})</h1>
                <ul>
                    <li
                      class="applicant__item"
                      v-for="(actor, index) in actors[auditionTitle]"
                      :key="index"
                      @click="() => handleClickActor(actor)"
                    >
                      <ActorItem v-bind="actor" :index="index"></ActorItem>
                    </li>
                </ul>
              </div>
            </a-tab-pane>

        </a-tabs>

        <a-modal
          v-model:visible="isProfileDetailVisible"
          title="프로필 상세"
          width="1200px"
          cancelText="취소"
          okText="확인"
        >
          <ActorDetail
            :actor="selectedActor"
          ></ActorDetail>
        </a-modal>
    </div>
</template>
<style lang="scss" scoped>
.audition-request {
  margin-block: 1em;
}

.audition-request h1 {
  font-size: 1.4em;
  margin-bottom: 1em;
  font-weight: bold;
}

.profile-interest {
    min-height: calc(100vh - 300px);
}

.audition-list,
.production-list {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #dadada;
    margin-bottom: 20px;

    &__item {
        flex: 50%;
    }
}
</style>
