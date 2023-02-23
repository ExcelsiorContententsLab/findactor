<script>
import axios from 'axios';

import koKr from 'ant-design-vue/es/locale/ko_KR';

import dayjs from 'dayjs';

import { registerAudition } from '../../../service/productions';

export default {
  name: 'production-audition-create',
  data() {
    return {
      locale: koKr,
      auditionDetail: {
        title: '',
        genre: '',
        productionName: '',
        director: '',
        role: '',
        gender: '',
        detailInfo: '',
        dateRange: [],
        ageRange: [10, 50],
        heightRange: [140, 180],
        weightRange: [30, 200],
        inCharge: { name: '' },
        prefer: [],
      },
      genreList: [
        { text: '영화', id: 'movie' },
        { text: '드라마', id: 'drama' },
        { text: 'OTT시리즈', id: 'ott' },
        { text: '웹시리즈', id: 'web' },
        { text: '광고', id: 'ad' },
      ],
      genderList: [{ text: '남성', id: 'male' }, { text: '여성', id: 'female' }],
      roleList: [{ text: '주연', id: '1' }, { text: '조연', id: '2' }, { text: '단역', id: '3' }],
      MAP: [
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
      tags: [],
    };
  },
  methods: {
    handleCheckboxChange(tags) {
      this.tags = tags;
    },
    handleClickCreateAudition() {
      const audition = {
        ...this.auditionDetail,
        startDate: dayjs(this.auditionDetail.dateRange[0]).format('YYYY.MM.DD (ddd)'),
        endDate: dayjs(this.auditionDetail.dateRange[1]).format('YYYY.MM.DD (ddd)'),
        prefer: this.tags,
      };

      axios.post('https://findactor.shop/auditions', audition)
        .then(() => {
          registerAudition(audition);
          this.$router.push('/production');
        });
    },
  },
};
</script>
<template>
    <div class="audition-create container">
        <div class="audition-create__item">
            <div class="title">
                작품명
            </div>
            <div class="content">
                <a-input v-model:value="auditionDetail.title" placeholder="작품명" size="large" />
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                장르
            </div>
            <div class="content content--border">
                <a-radio-group v-model:value="auditionDetail.genre" name="radioGroup">
                    <template v-for="elem in genreList" :key="elem.id">
                        <a-radio :value="elem.id" class="radio">{{ elem.text }}</a-radio>
                    </template>
                </a-radio-group>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                제작사명
            </div>
            <div class="content">
                <a-input
                  v-model:value="auditionDetail.productionName"
                  placeholder="제작사명을 입력해주세요" size="large"
                />
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                감독명
            </div>
            <div class="content">
                <a-input
                  v-model:value="auditionDetail.director"
                  placeholder="감독명을 입력해주세요" size="large"
                />
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                성별
            </div>
            <div class="content content--border">
                <a-radio-group v-model:value="auditionDetail.gender" name="radioGroup">
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
                <a-radio-group v-model:value="auditionDetail.role" name="radioGroup">
                    <template v-for="elem in roleList" :key="elem.id">
                        <a-radio :value="elem.id" class="radio">{{ elem.text }}</a-radio>
                    </template>
                </a-radio-group>
            </div>
        </div>
        <div class="audition-create__item audition-create__item--flex">
            <div class="wrapper">
                <div class="title">
                    나이
                </div>
                <div class="content content--border" style="width:400px;">
                    <a-slider v-model:value="auditionDetail.ageRange" range :min="15" :max="100" />
                </div>
            </div>
            <div class="wrapper">
                <div class="title">
                    신장
                </div>
                <div class="content content--border" style="width:400px;">
                    <a-slider
                      v-model:value="auditionDetail.heightRange"
                      range :min="140"
                      :max="200"
                    />
                </div>
            </div>
            <div class="wrapper">
                <div class="title">
                    체중
                </div>
                <div class="content content--border" style="width:400px;">
                    <a-slider
                      v-model:value="auditionDetail.weightRange"
                      range :min="30"
                      :max="200"
                    />
                </div>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                특기
            </div>
            <div class="content content--border content--bottom">
                <template v-for="(tag, index) in this.tags" :key="index">
                    <a-tooltip :title="MAP.find(v => v.id === tag).value">
                        <a-tag
                          color="#6044F8"
                          style="font-size:20px;"
                          closable @close="handleClose(tag)"
                        >
                            {{ MAP.find(v => v.id === tag).value }}
                        </a-tag>
                    </a-tooltip>
                </template>
            </div>
            <div class="content">
                <a-checkbox-group v-model:value="this.tags" style="width: 100%"
                    @change="handleCheckboxChange">
                    <a-row :gutter="[0, 40]">
                        <template v-for="box in MAP" :key="box.id">
                            <a-col :span="5">
                                <a-checkbox :value="box.id">{{ box.value }}</a-checkbox>
                            </a-col>
                        </template>
                    </a-row>
                </a-checkbox-group>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                일정
            </div>
            <div class="content">
                <a-space direction="vertical" :size="12">
                    <a-range-picker
                      v-model:value="auditionDetail.dateRange"
                      style="width: 400px"
                      format="YYYY/MM/DD (ddd)"
                      :locale="locale" size="large"
                    />
                </a-space>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                담당자 정보
            </div>
            <div class="content content--flex">
                <div class="content__item">
                    <span class="label">
                        이름
                    </span>
                    <a-input
                      v-model:value="auditionDetail.inCharge.name"
                      placeholder="담당자 명" style="width: 280px;margin-left:20px;"
                    />
                </div>
                <div class="content__item">
                    <span class="label">
                        연락처
                    </span>
                    <a-input v-model:value="auditionDetail.inCharge.contact" placeholder="연락처"
                        style="width: 280px;margin-left:20px;" />
                </div>
                <div class="content__item">
                    <span class="label">
                        이메일
                    </span>
                    <a-input
                      v-model:value="auditionDetail.inCharge.email"
                      placeholder="이메일"
                      style="width: 280px;margin-left:20px;"
                    />
                </div>
            </div>
        </div>
        <div class="audition-create__item">
            <div class="title">
                세부정보
            </div>
            <div class="content">
                <a-textarea
                  v-model:value="auditionDetail.detailInfo"
                  :rows="4"
                  placeholder="세부정보를 입력해주세요"
                />
            </div>
        </div>
        <div class="footer">
            <div class="footer__wrapper">
                <div class="right">
                    <RouterLink to="/production">
                        <a-button size="large">
                            취소
                        </a-button>
                    </RouterLink>
                    <a>
                        <a-button
                          type="primary"
                          size="large"
                          style="margin-left:12px;"
                          @click="handleClickCreateAudition"
                        >
                            등록하기
                        </a-button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.audition-create {
    &__item {
        margin-bottom: 40px;

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
</style>
