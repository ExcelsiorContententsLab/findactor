<script>
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { RouterLink } from 'vue-router';
import { message } from 'ant-design-vue';

import ThumbCard from '../thumb/ThumbCard.vue';

import { manageApplicant, request, isRequested } from '../../service/auditions';

export default {
  name: 'ActorDetail',
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
    ThumbCard,
  },
  props: {
    status: {
      type: String,
      default: '',
    },
    operationType: {
      type: String,
      default: 'request',
    },
    audition: {
      default: null,
    },
    openAuditions: {
      default: [],
    },
    actor: {
      default: {
        name: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
        imgSrc: '',
        birthDate: '',
        email: '',
        phone: '',
        skills: '',
        sns: {},
        movieProfileList: [
          {
            title: '',
            url: '',
            imgSrc: '',
            role: '',
            year: '',
          },
        ],
        imageProfileList: [
          {
            imgSrc: '',
            kind: '',
            role: '',
          },
        ],
      },
    },
  },
  data() {
    return {
      isAddMovieProfileVisible: false,
      movieProfileDetail: {
        title: '',
        url: '',
        role: '',
        year: '',
        imgSrc: null,
      },
      movieProfileList: [
        {
          imgSrc: 'https://www.youtube.com/watch?v=Zy2Ht5gehsQ ',
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
          imgSrc: 'https://www.youtube.com/watch?v=Zy2Ht5gehsQ',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/2.jpg',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/3.jpg',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/4.jpg',
          kind: '상업드라마',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/5.jpg',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/6.jpg',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/7.jpg',
          role: '단역 가나다역',
        },
        {
          imgSrc: '/assets/imageProfile/8.jpg',
          role: '단역 가나다역',
        },
      ],
      filmoList: [
        {
          title: '강철비2 정상회담',
          year: '2020',
          kind: '상업드라마',
          role: '백두호 - 조타사역',
        },
        {
          title: '가장 보통의 연애',
          year: '2019',
          kind: '상업드라마',
          role: '이자카야 매니저 - 단역',
        },
        {
          title: '마약왕',
          year: '2018',
          kind: '상업드라마',
          role: '단역 - 다방 앞 의원 의사역',
        },
        {
          title: '밤의 문이 열린다',
          year: '2019',
          kind: '상업드라마',
          role: '조연 - 이민성역',
        },
      ],
      isAuditionRequested: {},
    };
  },
  setup() {
    const swiper = useSwiper();
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
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
  methods: {
    handleRemoveThumbCard(index) {
      this.$store.state.profile.movieList.splice(index, 1);
      this.$store.commit('saveLocal');
    },
    handleClickAddMovieProfile() {
      this.isAddMovieProfileVisible = true;
    },
    handleConfirmAddMovieProfile() {

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
    handleClickManage(operationType) {
      manageApplicant({
        operationType,
        actorEmail: this.actor.email,
        auditionTitle: this.audition.title,
      }).then(() => {
        this.$emit('manageApplicant');
      });
    },
    handleClickRequest(audition) {
      request({
        actorEmail: this.actor.email, // TODO: 각 배우의 이메일로 변경
        audition,
      }).then(() => {
        isRequested({
          actorEmail: this.actor.email,
          auditionTitle: audition.title,
        }).then(({ data }) => {
          console.log(data);
          this.isAuditionRequested[audition.title] = data;
        });
      }); // TODO: 호출 후에 해당 오디션이 해당 배우로 등록 되었는지 확인
    },
    extractThumbnail(url) {
      const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
      const match = regex.exec(url);

      if (!match) {
        return url;
      }

      const youtubeId = match[3];
      return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    },
  },
  watch: {
    actor() {
      this.openAuditions.forEach((a) => {
        console.log({ email: this.actor.email });
        isRequested({
          auditionTitle: a.title,
          actorEmail: this.actor.email,
        }).then(({ data }) => {
          this.isAuditionRequested[a.title] = data;
        });
      });

      // eslint-disable-next-line vue/no-mutating-props
      this.actor.movieProfileList = this.actor.movieProfileList
        .map((profile) => ({
          ...profile,
          imgSrc: profile.imgSrc || this.extractThumbnail(profile.url),
        }));
    },
  },
  mounted() {
    this.openAuditions.forEach((a) => {
      console.log({ email: this.actor.email });
      isRequested({
        auditionTitle: a.title,
        actorEmail: this.actor.email,
      }).then(({ data }) => {
        this.isAuditionRequested[a.title] = data;
      });
    });

    // eslint-disable-next-line vue/no-mutating-props
    this.actor.movieProfileList = this.actor.movieProfileList
      .map((profile) => ({
        ...profile,
        imgSrc: profile.imgSrc || this.extractThumbnail(profile.url),
      }));
  },
};
</script>
<template>
    <div class="actor-portfolio">
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    프로필
                </span>
                <p v-if="operationType === 'request'" class="btn-group" style="margin-left:auto;">
                  <a-button
                    type='primary'
                    size="large"
                    v-for="openAudition in openAuditions"
                    :key="openAudition.title"
                    @click="() => handleClickRequest(openAudition)"
                    :disabled="isAuditionRequested[openAudition.title]"
                  >
                    &lt;{{ openAudition.title }}&gt;
                    오디션 {{ isAuditionRequested[openAudition.title] ? '제안됨' : '제안하기' }}
                  </a-button>
                </p>

                <p v-if="operationType === 'manage'" class="btn-group" style="margin-left:auto;">
                    <a-button
                      type='primary'
                      size="large"
                      @click="() => handleClickManage('accept')"
                    >
                      합격
                    </a-button>
                    <a-button
                      type='primary'
                      size="large"
                      @click="() => handleClickManage('reject')"
                    >
                      불합격
                    </a-button>
                    <a-button
                      type='primary'
                      size="large"
                      @click="() => handleClickManage('postpone')"
                    >
                      보류
                    </a-button>
                </p>

            </div>
            <div class="panel__content">
                <div class="detail-info">
                    <div class="left">
                        <p class="name">{{ actor.name }}</p>
                        <p class="info">
                            <span class="info__item">{{ actor.gender }}</span>
                            <span class="info__item">{{ actor.age }} 세</span>
                            <span class="info__item">{{ actor.height }} cm</span>
                            <span class="info__item">{{ actor.weight }} kg</span>
                        </p>
                        <p class="info2">
                            <span class="label">생년월일</span>
                            <span class="text">{{ actor.birthDate }}</span>
                        </p>
                        <p class="info2">
                            <span class="label">이메일</span>
                            <span class="text">{{ actor.email }}</span>
                        </p>
                        <p class="info2">
                            <span class="label">연락처</span>
                            <span class="text">{{ actor.phone }}</span>
                        </p>
                    </div>
                    <div class="right">
                        <div class="info3">
                            <span class="label">특기</span>
                            <p class="info">
                                <span class="info__item">{{ actor.skills }}</span>
                            </p>
                        </div>
                        <div class="info3">
                            <span class="label">SNS</span>
                            <p v-if="actor.sns.kakao" class="sns">
                                <img class="icon" src="@/assets/kakao_icon.svg" />
                                <span class="text">{{ actor.sns.kakao }}</span>
                            </p>
                            <p v-if="actor.sns.youtube" class="sns">
                                <img src="@/assets/youtube_icon.svg" />
                                <span class="text">{{ actor.sns.youtube }}</span>
                            </p>
                            <p v-if="actor.sns.instagram" class="sns">
                                <img src="@/assets/instagram-icon.png" />
                                <span class="text">{{ actor.sns.instagram }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    영상 프로필
                </span>
            </div>
            <div class="panel__content">
                <swiper
                  :modules="modules"
                  :slides-per-view="isUpdate ? 5 : 4"
                  :space-between="20" navigation
                >
                    <swiper-slide
                      v-for="(movieProfile, index) in actor.movieProfileList"
                      :key="index"
                    >
                        <ThumbCard
                          v-bind="movieProfile"
                          :index="index"
                          :update="status === 'update'"
                          @remove="handleRemoveThumbCard"
                        ></ThumbCard>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    이미지 프로필
                </span>
            </div>
            <div class="panel__content">
                <swiper :modules="modules" :slides-per-view="'auto'" :space-between="10" navigation
                    class="image-profile">
                    <swiper-slide
                      v-for="(imageProfile, index) in actor.imageProfileList"
                      :key="index"
                    >
                        <ThumbImage
                          v-bind="imageProfile"
                          :update="status === 'update'"
                        ></ThumbImage>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    작품경력
                </span>

            </div>
            <div class="panel__content">
                <a-list item-layout="horizontal" :data-source="actor.filmoList">
                    <template #renderItem="{ item }">
                        <a-list-item class="profile-filemo">
                            <a-list-item-meta :description="item.role">
                                <template #title>
                                    <span class="title">{{ item.title }}</span>
                                    <span class="year"> ({{ item.year }})</span>
                                    <span class="kind"> {{ item.kind }}</span>
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
            </div>
        </div>
        <a-modal
          v-model:visible="isAddMovieProfileVisible"
          title="영상 프로필 추가"
          @ok="handleConfirmAddMovieProfile"
          cancelText="취소" okText="확인"
        >
            <a-form
              class="movie-profile-edit"
              :label-col="{ style: { width: '100px' } }"
              :wapper-col="{ span: 6 }"
              autocomplete="off">
                <a-form-item
                  label="영상 URL"
                  :rules="[{ required: true, message: '연기 영상은 필수 입력값 입니다.' }]"
                  >
                    <a-input v-model:value="movieProfileDetail.url" placeholder="연기 영상 링크"
                        @input="handleInputMovieProfileDetailURL" />
                </a-form-item>
                <a-form-item label="썸네일 이미지" v-if="movieProfileDetail.imgSrc">
                    <div class="movie-profile-edit__thumb">
                        <img class="image" :src="movieProfileDetail.imgSrc" />
                    </div>
                </a-form-item>
                <a-form-item label="작품명">
                    <a-input v-model:value="movieProfileDetail.title" placeholder="작품명" />
                </a-form-item>
                <a-form-item label="역할">
                    <a-input v-model:value="movieProfileDetail.role" placeholder="역할" />
                </a-form-item>
                <a-form-item label="연도" :wrapper-col="{ span: 8 }">
                    <a-input v-model:value="movieProfileDetail.year" placeholder="작품 연도" />
                </a-form-item>
            </a-form>
        </a-modal>

        <div v-if="isUpdate" class="footer">
            <div class="footer__wrapper">
                <div class="right">
                    <RouterLink to="/">
                        <a-button size="large">
                            취소
                        </a-button>
                    </RouterLink>
                    <a-button size="large" style="margin-left:12px;" @click="success">
                        임시저장
                    </a-button>

                    <RouterLink to="/">
                        <a-button type="primary" size="large" style="margin-left:12px;">
                            등록하기
                        </a-button>
                    </RouterLink>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.sns img {
  width: 50px;
}

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

.actor-portfolio {
    .detail-info {
        display: flex;
        background: #F6F4FF;
        border-radius: 20px;
        width: 100%;
        padding: 20px 40px;

        div {
            flex: 0 0 50%;

            .name {
                font-weight: 700;
                font-size: 28px;
                margin-bottom: 20px;
            }

            .info {
                display: flex;
                margin-bottom: 20px;

                &__item {
                    font-weight: 500;
                    font-size: 18px;
                    color: #878787;

                    &:not(:last-child) {
                        &::after {
                            content: "";
                            display: inline-block;
                            width: 2px;
                            height: 16px;
                            background: #878787;
                            margin: -2px 20px;
                        }
                    }
                }
            }

            .info2 {
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                .label {
                    flex: 0 0 100px;
                    color: #343434;
                    font-weight: 500;
                    font-size: 18px;
                }

                .text {
                    color: #878787;
                    font-weight: 500;
                    font-size: 18px;
                }
            }

            .info3 {
                font-weight: 700;
                font-size: 24px;
                color: #000000;

                .sns {
                    display: flex;
                    align-items: center;
                    margin-bottom: 4px;

                    .text {
                        margin-left: 4px;
                        font-weight: 500;
                        font-size: 22px;
                        color: #878787;
                    }
                }
            }
        }
    }

    .panel {
        &__title {
            display: flex;
            justify-content: space-between;
            gap: 1em;
            align-items: center;
            margin-bottom: 20px;

            .title {
                flex: 1;
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

.btn-group {
  display: flex;
  gap: 1em;
}
</style>
