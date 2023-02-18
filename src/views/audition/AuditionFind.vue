<script>
import { ref } from 'vue';

import {
  DownOutlined,
  ReloadOutlined,
  SearchOutlined,
} from '@ant-design/icons-vue';

import AuditionItem from '../../components/autidtion/AuditionItem.vue';
import { isScrappedAudition } from '../../service/actors';

function isOverlapped(range1, range2) {
  return Math.min(range1[1], range2[1]) >= Math.max(range1[0], range2[0]);
}

export default {
  name: 'audition-find',
  setup() {
    const ageRange = ref([15, 100]);
    return {
      ageRange,
    };
  },
  data() {
    return {
      visible: [],
      sort: '1',
      kind: '1',
      heightRange: [130, 200],
      SKILLS: [
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
      genreList: [
        { text: '전체', id: 'all' },
        { text: '영화', id: 'movie' },
        { text: '드라마', id: 'drama' },
        { text: 'OTT시리즈', id: 'ott' },
        { text: '웹시리즈', id: 'web' },
        { text: '광고', id: 'ad' },
      ], // 장르별
      curatedList: [
        { text: '성별', id: 'gender' },
        { text: '나이', id: 'age' },
        { text: '신장', id: 'height' },
        { text: '특기', id: 'specialty' },
      ], // 내게 맞는 오디션
      selectedGenreList: ['all'],
      selectedCurationList: [],
      selectedAgeRange: null,
      selectedHeightRange: null,
      selectedGender: null,
      selectedPrefer: [],
      searchKeyword: '',
    };
  },
  methods: {
    handleButtonClick() {
    },
    handleMenuClick() {
    },
    handleToggleFavorite(index) {
      const { auditionList } = this.$store.state;
      const audition = auditionList[index];
      audition.isScrap = !audition.isScrap;
    },
    handleClickGenreGroup(genre) {
      const { id: genreId } = genre;

      if (genreId === 'all') {
        this.selectedGenreList = ['all'];
        return;
      }

      if (this.selectedGenreList.includes('all')) {
        this.selectedGenreList = this.selectedGenreList
          .filter((v) => v !== 'all');
      }

      this.selectedGenreList = this.selectedGenreList.includes(genreId)
        ? this.selectedGenreList.filter((v) => v !== genreId)
        : [...this.selectedGenreList, genreId];
    },
    handleClickShowAll() {
      this.searchClear();
    },
    handleClickSearchClear() {
      this.searchClear();
    },
    searchClear() {
      this.selectedGenreList = ['all'];
      this.kind = '1';
      this.selectedAgeRange = null;
      this.selectedGender = null;
      this.selectedHeightRange = null;
      this.selectedPrefer = [];
      this.searchKeyword = '';
    },
    handleClickOverlay() {
    },
    handleAgeRangeChange(range) {
      this.selectedAgeRange = range;
    },
    handleHeightRangeChange(value) {
      this.selectedHeightRange = value;
    },
    handleClickGenderChange(value) {
      this.selectedGender = value;
    },
    handleSearchText() {
      const auditions = JSON.parse(
        JSON.stringify(this.$store.state.auditionList),
      );

      this.filteredAuditionList = this.applyFilters({
        target: auditions,
        filters: [
        ],
      });
    },
    applyFilters({ target, filters }) {
      if (filters.length === 0) {
        return target;
      }

      const { condition, filter } = filters[0];
      if (!condition) {
        return this.applyFilters({ target, filters: filters.slice(1) });
      }

      return this.applyFilters({
        target: target.filter(filter),
        filters: filters.slice(1),
      });
    },
  },
  mounted() {
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
    filteredAuditionList() {
      const auditions = JSON.parse(
        JSON.stringify(this.$store.state.auditionList),
      );

      const filterSkill = (audition) => this.selectedPrefer.includes(audition.prefer);

      const filterAge = (audition) => {
        const selectedRange = Object.values(this.selectedAgeRange);
        return isOverlapped(audition.ageRange, selectedRange);
      };

      const filterHeight = (audition) => {
        const selectedHeightRange = Object.values(this.selectedHeightRange);
        return isOverlapped(audition.heightRange, selectedHeightRange);
      };

      const filterGender = (audition) => {
        const selectedGender = { male: '1', female: '2' }[this.selectedGender];
        return audition.gender === selectedGender;
      };

      const filterGenres = (audition) => (
        this.selectedGenreList.includes('all') || this.selectedGenreList.includes(audition.genre)
      );

      const filterKeyword = ({ title, productionName }) => (
        title.includes(this.searchKeyword) || productionName.includes(this.searchKeyword)
      );

      return this.applyFilters({
        target: auditions,
        filters: [
          { condition: this.selectedPrefer.length > 0, filter: filterSkill },
          { condition: this.selectedGender, filter: filterGender },
          { condition: this.selectedAgeRange, filter: filterAge },
          { condition: this.selectedHeightRange, filter: filterHeight },
          { condition: this.selectedGenreList.length > 0, filter: filterGenres },
          { condition: this.searchKeyword, filter: filterKeyword },
        ],
      });
    },
  },
  components: {
    DownOutlined, SearchOutlined, AuditionItem, ReloadOutlined,
  },
};
</script>

<template>
    <div class="audition-find">
        <div class="audition-find__header">
            <a-radio-group v-model:value="kind" size="large">
                <a-radio-button size="large" value="1" @click="handleClickShowAll">
                  전체 오디션
                </a-radio-button>
                <a-radio-button value="2">장르별 보기
                    <DownOutlined />
                </a-radio-button>
                <a-radio-button value="3">내게 맞는 오디션 찾기
                    <DownOutlined />
                </a-radio-button>
            </a-radio-group>
            <div class="btn">
                <a-button type="dashed" @click="handleClickSearchClear">
                    <ReloadOutlined class="icon"></ReloadOutlined>
                    검색 필터 초기화
                </a-button>
            </div>

            <a-input
              class="item"
              size="large"
              v-model:value="searchKeyword"
              v-on:keyup.enter="handleSearchText"
              style="width:240px; margin-left:auto;" placeholder="검색"
            >
                <template #addonBefore>
                    <SearchOutlined />
                </template>
            </a-input>
        </div>

        <div class="audition-find__sub-header">
            <template v-if="kind === '2'">
                <ul class="search-group">
                    <li class="search-group__item" v-for="genre in genreList" :key="genre.id">
                        <a-button
                          shape="round"
                          :type="selectedGenreList.includes(genre.id) ? 'primary' : 'default'"
                          size="large"
                          @click="handleClickGenreGroup(genre)">{{ genre.text }}
                        </a-button>
                    </li>
                </ul>
            </template>
            <template v-else-if="kind === '3'">
                <ul class="search-group">
                    <li
                      class="search-group__item"
                      v-for="(curation, index) in curatedList"
                      :key="curation.id"
                    >
                        <a-dropdown-button
                          shape="round" v-model:visible="visible[index]"
                          :type="computedCurationList.includes(curation.id) ? 'primary' : 'default'"
                          size="large"
                          :open="true" placement="bottom" :trigger="['click']" arrow
                          @click="handleClickGenreGroup(curation)"
                        >{{curation.text}}
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
                                            <a-button
                                                size="large"
                                                class="btn"
                                                :type="selectedGender === 'male'
                                                  ? 'primary' : 'default'"
                                                @click="handleClickGenderChange('male')"
                                              >
                                                남자
                                            </a-button>
                                            <a-button
                                              size="large" class="btn"
                                              :type="selectedGender === 'female'
                                                ? 'primary' : 'default'"
                                              @click="handleClickGenderChange('female')"
                                            >
                                              여자
                                            </a-button>
                                        </template>
                                        <template v-else-if="curation.id === 'age'">
                                            <a-slider
                                              v-model:value="ageRange"
                                              range :min="15"
                                              :max="100"
                                              @change="handleAgeRangeChange" />
                                        </template>
                                        <template v-else-if="curation.id === 'height'">
                                            <a-slider
                                              v-model:value="heightRange"
                                              range :min="130" :max="200"
                                              @change="handleHeightRangeChange"
                                            />
                                        </template>
                                        <template v-else>
                                            <a-checkbox-group
                                              v-model:value="selectedPrefer"
                                              style="width: 100%"
                                              @change="handleCheckboxChange"
                                            >
                                                <a-row :gutter="[0, 20]">
                                                    <template v-for="box in SKILLS" :key="box.id">
                                                        <a-col :span="10">
                                                            <a-checkbox :value="box.id">
                                                              {{ box.value }}
                                                            </a-checkbox>
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
            </template>
        </div>
        <div class="audition-find__content container">
            <div class="header">
                <a-select
                  v-model:value="sort"
                  class="sort"
                  style="width: 140px;"
                  @focus="focus"
                  size="large"
                  @change="handleChange"
                >
                    <a-select-option value="1">마감일 순</a-select-option>
                    <a-select-option value="2">최신등록일 순</a-select-option>
                </a-select>
            </div>
            <ul class="audition-list">
                <li
                  class="audition-list__item"
                  v-for="(audition, index) in filteredAuditionList" :key="index"
                >
                    <AuditionItem
                      :index="index"
                      v-bind="audition"
                      @favorite="handleToggleFavorite"
                    ></AuditionItem>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.audition-find {
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        &:deep(.ant-radio-button-wrapper) {
            &:not(:first-child) {
                margin-left: 20px;
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

        .search-group {

            &__item {
                display: inline-block;

                &:not(:first-child) {
                    margin-left: 12px;
                }
            }
        }

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

    .audition-list {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid #dadada;

        &__item {
            flex: 50%;
        }
    }

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
