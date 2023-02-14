<script>
import moment from 'moment';

export default {
  name: 'AuditionItem',
  props: ['title', 'role', 'ageRange', 'productionName', 'prefer', 'genre', 'isScrap', 'tags', 'index', 'dueDate', 'gender', 'onlyView', 'noBorder'],
  data() {
    return {
      ROLE_MAP: {
        1: '주연',
        2: '조연',
        3: '단역',
      },
      PREFER_MAP: [
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
      GENRE_MAP: [{ text: '전체', id: 'all' },
        { text: '영화', id: 'movie' },
        { text: '드라마', id: 'drama' },
        { text: 'OTT시리즈', id: 'ott' },
        { text: '웹시리즈', id: 'web' },
        { text: '광고', id: 'ad' }],
    };
  },
  methods: {
    handleClickAddFavorite() {
      this.$emit('favorite', this.index);
    },
  },
  computed: {
    getDDay() {
      const now = moment();
      return moment.duration(moment(this.dueDate, 'YYYY-MM-DD').diff(now, 'days'), 'days').asDays();
    },
  },

};
</script>
<template>
    <div class="audition-item" :class="{ 'audition-item--no-border': noBorder }">
        <div class="audition-item__header">
            <span class="tag tag--main">
                {{ GENRE_MAP.find(v => v.id === genre).text }}
            </span>
            <span class="tag">
                {{ gender=== '1' ? '남자' : '여자' }}
            </span>

        </div>
        <div class="audition-item__info">
            <span class="info">{{ title }}</span>
            <span class="info">{{ ROLE_MAP[role] }}</span>
            <span class="info">{{ `${ageRange[0]}-${ageRange[1]}` }}</span>
        </div>
        <div class="audition-item__sub-info">
            <span class="info">{{ productionName }}</span>
            <span class="info" v-if="prefer">{{ PREFER_MAP.find(v => v.id === prefer)?.value }}</span>
        </div>
        <span class="flag" :class="{ 'flag--urge': getDDay <= 10 }">
            마감 D-{{ getDDay }}
        </span>
        <img v-if="!onlyView" class="icon"
            :src="isScrap ? '/assets/icon/diamond-true.svg' : '/assets/icon/diamond-false.svg'"
            @click="handleClickAddFavorite" />
    </div>
</template>
<style lang="scss" scoped>
.audition-item {
    position: relative;
    border: 1px solid #dadada;
    width: 100%;
    padding: 40px 30px;

    &--no-border {
        border: 0;
    }

    .tag {
        display: inline-block;
        font-weight: 700;
        font-size: 18px;
        padding: 10px 20px;
        border: 3px solid;
        border-radius: 20px;
        border-color: #878787;
        color: #878787;

        &:not(:first-child) {
            margin-left: 18px;
        }

        &--main {
            color: #5F43F8;
            border-color: #5F43F8;
        }
    }

    .icon {
        width: 48px;
        position: absolute;
        top: 46px;
        right: 30px;

        &:hover {
            cursor: pointer;
        }
    }

    &__header {
        position: relative;
        margin-bottom: 10px;

    }

    &__info {
        color: #000000;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 20px;

        .info {
            &:not(:last-child) {
                &::after {
                    content: "";
                    display: inline-block;
                    width: 4px;
                    height: 30px;
                    background: #000000;
                    margin: -2px 20px;
                }
            }
        }
    }

    &__sub-info {
        display: flex;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #878787;

        .info {
            &:not(:last-child) {
                &::after {
                    content: "/";
                    display: inline-block;
                    margin: -2px 10px;
                }
            }
        }

    }

    .flag {
        margin-left: auto;
        position: absolute;
        bottom: 40px;
        right: 40px;
        color: #878787;
        font-weight: 700;
        font-size: 20px;

        &--urge {
            color: #E20000;
        }
    }
}
</style>
