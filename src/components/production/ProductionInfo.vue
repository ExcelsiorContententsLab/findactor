<script>
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { RouterLink } from 'vue-router';
import { message } from 'ant-design-vue';
import ThumbCard from '@/components/thumb/ThumbCard.vue';

import {
  loadProfile,
} from '../../service/productions';

import { loadAuditions, closeAudition } from '../../service/auditions';
import { load } from '../../persistence/storage';

export default {
  name: 'production-info',
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedAudition: null,
      ROLE_MAP: {
        1: '주연',
        2: '조연',
        3: '단역',
      },
      isAuditionVisible: false,
      movieProfileDetail: {
        title: '',
        url: '',
        role: '',
        year: '',
        imgSrc: null,
      },
      movieProfileList: [
        {
          imgSrc: '/assets/thumb1.jpg',
          title: '구르미 그린 달빛',
          role: '단역 가나단역',
          year: 2021,
        },
        {
          imgSrc: '/assets/thumb1.jpg',
          title: '구르미 그린 달빛',
          role: '단역 가나단역',
          year: 2021,
        },
        {
          imgSrc: '/assets/thumb1.jpg',
          title: '구르미 그린 달빛',
          role: '단역 가나단역',
          year: 2021,
        },
        {
          imgSrc: '/assets/thumb1.jpg',
          title: '구르미 그린 달빛',
          role: '단역 가나단역',
          year: 2021,
        },
        {
          imgSrc: '/assets/thumb1.jpg',
          title: '구르미 그린 달빛',
          role: '단역 가나단역',
          year: 2021,
        },
        {
          imgSrc: '/assets/thumb1.jpg',
          title: '구르미 그린 달빛',
          role: '단역 가나단역',
          year: 2021,
        },
      ],
      imageProfileList: [
        {
          imgSrc: '/assets/image1.png',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/image2.png',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/image3.png',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/image4.png',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/image5.png',
          role: '단역 가나다역',
        },
      ],
      profile: {
        introduction: '',
        philmography: [],
      },
      productAuditions: [],
    };
  },
  setup() {
    const swiper = useSwiper();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const success = () => {
      message.success(
        '임시저장 되었습니다.',
        2,
      );
    };
    return {
      success,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Scrollbar, A11y],
    };
  },
  computed: {
    isUpdate() {
      return this.status === 'update';
    },
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      console.log(111);
      loadAuditions({ productionName: '(주)엑셀시오르콘텐츠랩' })
        .then((data) => {
          this.productAuditions = data.filter(({ isClosed }) => !isClosed);
        });
    },
    handleClickAddMovieProfile() {
      this.isAddMovieProfileVisible = true;
    },
    handleConfirmAddMovieProfile() {

    },
    handleRemoveThumbCard(index) {
      this.$store.state.profile.movieList.splice(index, 1);
      this.$store.commit('saveLocal');
    },
    handleInputMovieProfileDetailURL(event) {
      const { value } = event.target;
      const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
      const match = regex.exec(value);
      if (match) {
        const youtubeId = match[3];
        this.movieProfileDetail.imgSrc = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
      } else {
        this.movieProfileDetail.imgSrc = null;
      }
    },
    handleClickModifyAudition(audition) {
      this.selectedAudition = audition;
      this.isAuditionVisible = true;
    },
    handleAuditionModifyOk() {
      this.isAuditionVisible = false;
    },
    handleCloseAudition(auditionTitle) {
      closeAudition({ auditionTitle })
        .then(() => {
          this.isAuditionVisible = false;
          this.load();
        });
    },
    handleClickAuditionees() {
      this.$router.push({ path: '/production/audition/manage' });
    },
  },
  mounted() {
    console.log(this.status);
    this.profile = loadProfile();
  },
};
</script>
<template>
    <div class="production-info container">
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    제작사 소개
                </span>
                <span v-if="!isUpdate" class="btn btn--right">
                    <RouterLink to="/production/profile/update">
                        <span class="text">
                            제작사 정보 수정
                        </span>
                        <img class="more__icon" src="@/assets/Vector.svg" />
                    </RouterLink>
                </span>

                <span v-else class="btn btn--right btn--fill" @click="handleClickAddMovieProfile">
                    <span class="text">추가하기</span>
                </span>
            </div>
            <div class="panel__content">
                <div
                  class="container"
                  style="background-color:#F6F4FF;color:#878787; box-shadow:none; font-weight: 400; font-size: 20px;"
                >
                    <!-- 남들과는 다르게, 누구보다 높이, 한국형 판타지 전문 제작사 (주)엑셀시오르콘텐츠랩입니다.<br />
                    <br />
                    현재 OTT시리즈 &lt;반드시 너와 함께 내일 아침 떠오르는 찬란한 태양을 보고 싶다&gt; 프리프로덕션 진행 중입니다.<br />
                    <br />
                    이외에 영화 &lt;Cross Fire&gt;를 기획개발 중 입니다.
 -->
                    {{ profile.introduction }}
                </div>

            </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    제작사 필모그라피
                </span>
                <span v-if="isUpdate" class="btn btn--right btn--fill">
                    <span class="text">추가하기</span>
                </span>
            </div>
            <div class="panel__content">
                <swiper
                  :modules="modules"
                  :slides-per-view="isUpdate ? 5 : 4"
                  :space-between="20" navigation
                >
                    <swiper-slide
                      v-for="(movieProfile, index) in profile.philmography"
                      :key="index"
                    >
                        <ThumbCard
                          v-bind="movieProfile"
                          :index="index"
                          :update="status === 'update'"
                          cardType="filmo"
                          @remove="handleRemoveThumbCard">
                        </ThumbCard>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    진행중인 오디션
                </span>

            </div>

            <div class="panel__content">
                <ul class="audition-list">
                    <template v-for="(audition, index) in productAuditions" :key="index">
                        <li class="audition-list__elem">
                            <div class="header">
                                <p class="date date--start">
                                    <span class="label">게시일</span>
                                    <span class="text">{{ audition.startDate }}</span>
                                </p>
                                <p class="date date--end">
                                    <span class="label">마감일</span>
                                    <span class="text">{{ audition.endDate }}</span>
                                </p>
                            </div>
                            <div class="btn">
                                <a-button
                                  size="large"
                                  shape="round"
                                  @click="handleClickModifyAudition(audition)">
                                    오디션 수정
                                </a-button>
                            </div>
                            <div class="content">
                                <span class="title">{{ audition.title }}</span>
                                <span class="role">{{ ROLE_MAP[audition.role] }}</span>
                            </div>
                            <div class="info">
                                <p class="info__elem" @click="handleClickAuditionees">
                                    <span class="label">지원자</span>
                                    <span class="count">(
                                      {{ (audition.appliedAuditionees.length +
                                         audition.passedAuditionees.length +
                                         audition.pendingAuditionees.length +
                                         audition.rejectedAuditionees.length) }}
                                    )</span>
                                </p>
                                <p disabled class="info__elem">
                                    <span class="label">응답완료</span>
                                    <span class="count">(
                                      {{ (
                                          audition.passedAuditionees.length +
                                         audition.pendingAuditionees.length +
                                         audition.rejectedAuditionees.length)
                                      }}
                                    )</span>
                                </p>
                                <p disabled class="info__elem">
                                    <span class="label">미응답</span>
                                    <span class="count">(
                                      {{
                                        audition.appliedAuditionees.length
                                      }}
                                    )</span>
                                </p>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <a-modal
          v-model:visible="isAuditionVisible"
          title="오디션 정보 수정"
          @ok="handleAuditionModifyOk"
          width="1000px"
          cancelText="취소" okText="확인"
        >
            <div style="display:flex; gap: 30px;">
                <div>
                    <span>오디션 등록일</span>
                    <a-calendar v-model:value="selectedAudition.startDate" :fullscreen="false"
                        valueFormat="YYYY-MM-DD" />
                </div>
                <div>
                    <span>오디션 마감일</span>
                    <a-calendar
                      v-model:value="selectedAudition.endDate"
                      :fullscreen="false"
                      valueFormat="YYYY-MM-DD"
                    />
                </div>
            </div>
            <div style="text-align:right">
                <a-button
                  size="large"
                  type="primary"
                  @click="() => handleCloseAudition(selectedAudition.title)"
                >오디션 조기마감 하기</a-button>
            </div>
        </a-modal>
    </div>
</template>

<style scoped lang="scss">
.movie-profile-edit {
    &__thumb {
        display: flex;
        align-items: center;
        justify-content: center;

        .image {

            width: 240px;
            height: 240px;
            object-fit: cover;
        }
    }
}

.audition-list {
    &__elem {
        border: 1px solid #DADADA;
        padding: 18px 22px;
        margin-bottom: 10px;
        position: relative;

        .header {
            display: flex;
            margin-bottom: 20px;

            .date {
                .label {
                    margin-right: 14px;
                }

                &--start {
                    .label {
                        color: #878787;
                    }
                }

                &--end {
                    .label {
                        color: #E20000;
                    }

                    margin-left: auto;
                }
            }
        }

        .btn {
            position: absolute;
            right: 22px;

        }

        .content {

            font-weight: 700;
            font-size: 24px;
            color: #000000;
            margin-bottom: 20px;

            .title {
                &::after {
                    content: "";
                    display: inline-block;
                    width: 2px;
                    height: 22px;
                    background: #000000;
                    margin: -2px 14px;
                }
            }
        }

        .info {
            display: flex;

            >* {
                cursor: pointer;
            }

            &__elem {
                font-weight: 400;
                font-size: 20px;

                &:not(:last-child) {
                    &::after {
                        content: "";
                        display: inline-block;
                        width: 2px;
                        height: 22px;
                        background: #000000;
                        margin: -2px 14px;
                    }
                }

                .label {
                    color: #343434;
                }

                .count {
                    color: #5F43F8;
                    margin-left: 8px;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}

.production-info {
    .panel {
        &__title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .title {
                font-weight: 900;
                font-size: 22px;
                color: #000000;
            }

            .btn {
                cursor: pointer;
                display: flex;
                align-items: center;

                .text {
                    color: #6044F8;
                    margin-right: 4px;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                &--fill {
                    background-color: #eeeeee;
                    border-radius: 4px;
                    padding: 4px 8px;

                    &:hover {
                        background-color: #dadada;
                    }

                    .text {
                        color: #000000;
                        margin: 0;

                        &:hover {
                            text-decoration: none;
                        }

                    }
                }

                &--right {
                    margin-left: auto;
                }
            }
        }

        &__content {
            padding: 10px 0 20px 0;
            line-height: 2.0;
            white-space: pre-wrap;

            &:deep(.swiper) {
                padding: 10px;
            }

            .image-profile {
                &:deep(.swiper-wrapper) {
                    .swiper-slide {
                        width: auto !important;

                    }
                }
            }

            .profile-filemo {
                .title {
                    font-weight: 700;
                }

                .year {
                    font-weight: 500;
                }

                .kind {
                    color: #878787;
                    margin-left: 10px;
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
