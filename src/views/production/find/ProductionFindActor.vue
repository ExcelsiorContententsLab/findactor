<script>
import { DownOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { number } from 'vue-types';
import AuditionItem from '../../../components/autidtion/AuditionItem.vue';
import ActorItem from '../../../components/actor/ActorItem.vue';
import { loadAuditions } from '../../../service/auditions';

import actors from '../../../actors';

export default {
  name: 'production-find-actor',
  setup() {
    const ageRange = ref([15, 100]);
    return {
      ageRange,
    };
  },
  data() {
    return {
      selectedProfile: {},
      isProfileDetailVisible: false,
      visible: [],
      sort: '1',
      selectedPrefer: [],
      filterList: [
        { text: '성별', id: 'gender' },
        { text: '나이', id: 'age' },
        { text: '신장', id: 'height' },
        { text: '특기', id: 'specialty' },
      ], // 내게 맞는 오디션
      MAP: [
        { id: 'A', value: '영어' },
        { id: 'B', value: '중국어' },
        { id: 'C', value: '일본어' },
        { id: 'D', value: '프랑스어' },
        { id: 'E', value: '독일어' },
        { id: 'F', value: '경상도 사투리' },
        { id: 'G', value: '전라도 사투리' },
        { id: 'G1', value: '충청도 사투리' },
        { id: 'H', value: '평양 사투리' },
        { id: 'I', value: '강원도 사투리' },
        { id: 'J', value: '제주도 사투리' },
        { id: 'K', value: '스포츠댄스' },
        { id: 'L', value: '발레' },
        { id: 'M', value: '현대무용' },
        { id: 'N', value: '한국무용' },
        { id: 'O', value: '방송댄스' },
        { id: 'P', value: '액션' },
        { id: 'Q', value: '운전' },
      ],
      selectedCurationList: [],
      selectedAgeRange: null,
      selectedHeightRange: null,
      selectedGender: null,
      openAuditions: [],
    };
  },
  methods: {
    handleClickProfileDetail(profile) {
      console.log(profile);
      this.selectedProfile = profile;
      this.isProfileDetailVisible = true;
    },
    handleButtonClick() {
    },
    handleMenuClick() {
    },
    handleToggleFavorite(index) {
      this.$store.state.auditionList[index].isScrap = !this.$store.state.auditionList[index].isScrap;
    },

    handleClickSearchClear() {
      this.selectedAgeRange = null;
      this.selectedGender = null;
      this.selectedHeightRange = null;
      this.selectedPrefer = [];
    },
    handleClickOverlay(index) {
    },
    handleAgeRangeChange(value) {
      this.selectedAgeRange = value;
    },
    handleHeightRangeChange(value) {
      this.selectedHeightRange = value;
    },
    handleClickGenderChange(value) {
      this.selectedGender = value;
    },
  },
  computed: {
    computedCurationList() {
      const list = [];
      if (this.selectedAgeRange) list.push('age');
      if (this.selectedGender) list.push('gender');
      if (this.selectedHeightRange) list.push('height');
      if (this.selectedPrefer.length > 0) list.push('specialty');
      return list;
    },
    filteredActorList() {
      let origin = actors;
      if (this.selectedGender) { origin = origin.filter((v) => v.gender === this.selectedGender); }
      if (this.selectedAgeRange) { origin = origin.filter((v) => parseInt(v.age) >= this.selectedAgeRange[0] && parseInt(v.age) <= this.selectedAgeRange[1]); }
      if (this.selectedHeightRange) { origin = origin.filter((v) => parseInt(v.height) >= this.selectedHeightRange[0] && parseInt(v.height) <= this.selectedHeightRange[1]); }
      // if (this.selectedPrefer.length > 0) {
      //     origin = origin.filter(v => this.selectedPrefer.includes(v.prefer));
      // }
      return origin;
    },
  },
  components: {
    DownOutlined, SearchOutlined, AuditionItem, ReloadOutlined, AuditionItem, ActorItem,
  },
  created() {
    loadAuditions({ productionName: '(주)엑셀시오르콘텐츠랩' })
      .then((data) => {
        this.openAuditions = data.filter(({ isClosed }) => !isClosed);
      });
  },
};
</script>

<template>
    <div class="production-find-actor">
        <div class="production-find-actor__header">
            <ul class="search-group">
                <li class="search-group__item" v-for="(curation, index) in filterList" :key="curation.id">
                    <a-dropdown-button shape="round" v-model:visible="visible[index]"
                        :type="computedCurationList.includes(curation.id) ? 'primary' : 'default'" size="large"
                        :open="true" placement="bottom" :trigger="['click']" arrow
                        @click="handleClickGenreGroup(curation)">{{
                            curation.text
                        }}
                        <template #icon>
                            <DownOutlined></DownOutlined>
                        </template>
                        <template #overlay>
                            <div class="overlay" @click="handleClickOverlay(index)">
                                <p class="overlay__title">
                                    {{ curation.text + ' 선택' }}
                                </p>
                                <div class="overlay__content">
                                    <template v-if="curation.id === 'gender'">
                                        <a-button size="large" class="btn"
                                            :type="selectedGender === 'male' ? 'primary' : 'default'"
                                            @click="handleClickGenderChange('male')">남자</a-button>
                                        <a-button size="large" class="btn"
                                            :type="selectedGender === 'female' ? 'primary' : 'default'"
                                            @click="handleClickGenderChange('female')">여자</a-button>
                                    </template>
                                    <template v-else-if="curation.id === 'age'">
                                        <a-slider v-model:value="ageRange" range :min="15" :max="100"
                                            @change="handleAgeRangeChange" />
                                    </template>
                                    <template v-else-if="curation.id === 'height'">
                                        <a-slider v-model:value="heightRange" range :min="130" :max="200"
                                            @change="handleHeightRangeChange" />
                                    </template>
                                    <template v-else>
                                        <a-checkbox-group v-model:value="selectedPrefer" style="width: 100%"
                                            @change="handleCheckboxChange">
                                            <a-row :gutter="[0, 20]">
                                                <template v-for="box in MAP" :key="box.id">
                                                    <a-col :span="10">
                                                        <a-checkbox :value="box.id">{{ box.value }}</a-checkbox>
                                                    </a-col>
                                                </template>
                                            </a-row>
                                        </a-checkbox-group>
                                    </template>
                                </div>
                            </div>

                        </template>
                    </a-dropdown-button>
                </li>
            </ul>
            <div class="btn">

                <a-button type="dashed" @click="handleClickSearchClear">
                    <ReloadOutlined class="icon"></ReloadOutlined>
                    검색 필터 초기화
                </a-button>
            </div>

            <a-input class="item" size="large" style="width:240px; margin-left:auto;" placeholder="검색">
                <template #addonBefore>
                    <SearchOutlined />
                </template>
            </a-input>
        </div>
        <div class="production-find-actor__sub-header">

        </div>
        <div class="production-find-actor__content container">
            <div class="header">
                <a-select disabled v-model:value="sort" class="sort" style="width: 140px;" @focus="focus" size="large"
                    @change="handleChange">
                    <a-select-option value="1">인기순</a-select-option>
                </a-select>
            </div>
            <ul class="applicant">
                <li class="applicant__item" v-for="(actor, index) in filteredActorList" :key="index"
                    @click="handleClickProfileDetail(actor)">
                    <ActorItem v-bind="actor" :index="index"></ActorItem>
                </li>
            </ul>
        </div>

        <a-modal
          v-model:visible="isProfileDetailVisible"
          title="프로필 상세"
          width="1200px"
          cancelText="취소"
          okText="확인"
        >
            <div>
                <ActorDetail
                  :actor="selectedProfile"
                  :openAuditions="openAuditions"></ActorDetail>
            </div>
        </a-modal>

    </div>
</template>

<style lang="scss" scoped>
.production-find-actor {
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        &:deep(.ant-radio-button-wrapper) {
            &:not(:first-child) {
                margin-left: 20px;
            }
        }

        .search-group {

            &__item {
                display: inline-block;

                &:not(:first-child) {
                    margin-left: 12px;
                }
            }
        }

        .btn {
            display: flex;
            align-items: center;
            height: 40px;
            margin-left: 20px;

            .icon {}

            .text {}
        }
    }

    &__sub-header {
        margin-bottom: 20px;

    }

    &__content {

        .header {
            display: flex;

            .sort {
                margin-left: auto;
                margin-bottom: 20px;
            }
        }
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

.modalStyle .ant-modal-title {
  font-size: 3em !important;
  font-weight: 700 !important;
  color: red !important;
}

.overlay {
    background: #fff;
    padding: 20px 24px;
    border-radius: 4px;

    &__title {
        font-weight: 700;
        color: #000;
        font-size: 16px;
        margin-bottom: 14px;
    }

    &__content {
        min-width: 200px;
        max-width: 280px;

        .btn {
            margin-left: 24px;
        }
    }
}
</style>
