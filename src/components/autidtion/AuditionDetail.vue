<script>
import { applyAudition, checkApplied } from '../../service/auditions';

export default {
  name: 'AuditionDetail',
  props: ['audition'],
  data() {
    return {
      genreList: [
        { text: '영화', id: 'movie' },
        { text: '드라마', id: 'drama' },
        { text: 'OTT시리즈', id: 'ott' },
        { text: '웹시리즈', id: 'web' },
        { text: '광고', id: 'ad' },
      ],
      genderList: [{ text: '남성', id: 'male' }, { text: '여성', id: 'female' }],
      roleList: [{ text: '주연', id: '1' }, { text: '조연', id: '2' }, { text: '단역', id: '3' }],
      SKILLS: [
        { id: 'A', value: '영어' },
        { id: 'B', value: '중국어' },
        { id: 'C', value: '일본어' },
        { id: 'D', value: '프랑스어' },
        { id: 'E', value: '독일어' },
        { id: 'F', value: '경상도 사투리' },
        { id: 'G', value: '전라도 사투리' },
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
      isApplied: false,
    };
  },
  methods: {
    handleApply() {
      applyAudition({ auditionTitle: this.audition.title });
      this.isApplied = true;
    },
  },
  mounted() {
    checkApplied({ auditionTitle: this.audition.title }).then(({ data }) => {
      console.log({ 지원됨: data });
      this.isApplied = data;
    });
  },
};
</script>
<template>
    <div class="apply-container">
      <a-button
        v-if="!isApplied"
        type="primary"
        size="large"
        @click="handleApply"
      >
        지원하기
      </a-button>
      <a-button
        v-else
        type="primary"
        size="large"
        disabled
      >
        지원됨
      </a-button>
    </div>
      <div class="header">
          <div class="header__title">
              <span class="production-name item">{{ audition.productionName }}</span>
              <span class="title-name item">&lt;{{ audition.title }}&gt;</span>
          </div>
      </div>
      <div class="audition-create__item">
        <div class="title">
          장르
        </div>
        <div class="content content--border">
          <a-radio-group :value="audition.genre" name="radioGroup">
            <template v-for="elem in genreList" :key="elem.id">
              <a-radio :value="elem.id" class="radio">{{ elem.text }}</a-radio>
            </template>
          </a-radio-group>
        </div>
      </div>
      <div class="audition-create__item">
        <div class="title">
          감독명
        </div>
        <div class="content">
          {{ audition.director }}
        </div>
    </div>
    <div class="audition-create__item">
      <div class="title">
          성별
      </div>
      <div class="content content--border">
          <a-radio-group :value="audition.gender" name="radioGroup">
              <template v-for="elem in genderList" :key="elem.id">
                  <a-radio :value="elem.id" class="radio">{{ elem.text }}</a-radio>
              </template>
          </a-radio-group>
      </div>
    </div>
    <div class="audition-create__item">
      <div class="title">
        역할
      </div>
      <div class="content content--border">
        <a-radio-group :value="audition.role" name="radioGroup">
          <template v-for="elem in roleList" :key="elem.id">
            <a-radio :value="elem.id" class="radio">{{ elem.text }}</a-radio>
          </template>
        </a-radio-group>
      </div>
    </div>
    <div class="audition-create__item">
            <div class="title">
                특기
            </div>
            <div class="content content--border content--bottom">
                <template v-for="(tag, index) in audition.prefer" :key="index">
                    <a-tooltip :title="SKILLS.find(v => v.id === tag).value">
                        <a-tag
                          color="#6044F8"
                          style="font-size:20px;"
                        >
                            {{ SKILLS.find(v => v.id === tag).value }}
                        </a-tag>
                    </a-tooltip>
                </template>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
              나이
            </div>
            <div class="content">
              {{ audition.ageRange[0] }} ~ {{ audition.ageRange[1] }} 세
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
              신장
            </div>
            <div class="content">
              {{ audition.heightRange[0] }} ~ {{ audition.heightRange[1] }} cm
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
              체중
            </div>
            <div class="content">
              {{ audition.weightRange[0] }} ~ {{ audition.weightRange[1] }} kg
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                오디션 일정
            </div>
            <div class="content">
              {{ audition.startDate  }} ~ {{ audition.endDate }}
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                담당자
            </div>
            <div class="content content--flex">
                <div class="content__item">
                    <span class="label">
                        이름:
                    </span>
                    {{ audition.inCharge.name }}
                </div>
                <div class="content__item">
                    <span class="label">
                        연락처:
                    </span>
                    {{ audition.inCharge.contact }}
                </div>
                <div class="content__item">
                    <span class="label">
                        이메일:
                    </span>
                    {{ audition.inCharge.email }}
                </div>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                세부정보
            </div>
            <div class="content information">
              {{ audition.detailInfo }}
            </div>
        </div>
</template>
<style lang="scss" scoped>
.apply-container {
  display: flex;
  justify-content: end;
}

.header {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 3em;
}

.thumb {
  width: 6em;
}
.header__title {
  font-size: 3em;
  font-weight: bold;

  span {
    display: block;
  }
}

.sub-title {
  font-size: 2em;
  margin-block: 1.2em;
  font-weight: bold;
}

.audition-create {
    &__item {
        margin-top: 2.5em;

        &--flex {
            display: flex;
            justify-content: space-between;
        }

        .title {
            font-weight: 700;
            font-size: 22px;
            margin-bottom: 20px;
        }

        .content {
            font-size: 1.2em;
            padding-inline: 1em;
            &--flex {
                display: flex;
                justify-content: space-between;
            }

            &--bottom {
                margin-bottom: 20px;
            }

            &--border {
                border: 1px solid #d9d9d9;
                border-radius: 2px;
                padding: 14px 18px;
            }

            &:deep(.ant-input) {
                padding: 14px 18px;

            }

            .radio {
                &:not(:first-child) {
                    margin-left: 120px;
                }
            }
        }
    }

    .footer {
        position: relative;
        margin-top: 20px;
        width: 100%;
        height: 60px;

        &__wrapper {
            position: absolute;
            bottom: 40px;
            right: 0;
            display: flex;

            .right {
                margin-left: auto;
            }

        }
    }
}

.information {
  font-size: 1.2em;
  min-height: 10em;
  border: 1px solid black;
  border-radius: 0.5em;
  padding: 1em;
}

</style>
