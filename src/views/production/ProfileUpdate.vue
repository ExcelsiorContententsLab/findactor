<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ThumbCard from '@/components/thumb/ThumbCard.vue';

import { loadProfile, updateProfile } from '../../service/productions';

export default {
  name: 'production-profile-update',
  components: {
    Swiper, SwiperSlide, ThumbCard,
  },
  data() {
    return {
      isAddPhilmographyVisible: false,
      introduction: '',
      philmography: [
        {
          title: '좋아서만든영화',
          url: 'assets/movie/movie1.png',
          imgSrc: '/assets/production/detail/movie1.jpg',
          year: '2009',
        },
      ],
      philmographyDetail: {
        title: '',
        year: '',
        imgSrc: '',
        posters: [],
      },
    };
  },
  methods: {
    handleClickAddPhilmography() {
      this.isAddPhilmographyVisible = true;
    },
    handleChangePoster(event) {
      const { file } = event;
      const { status, response } = file;

      if (status === 'done') {
        const { message: imageUrl } = response;
        this.philmographyDetail.imgSrc = imageUrl;
      }

      const { posters } = this.philmographyDetail;
      if (status === 'done' && posters.length > 1) {
        posters.shift();
      }
    },
    handleConfirmAddPhilmography() {
      const { title, imgSrc, year } = this.philmographyDetail;

      if (!title || !imgSrc || !year) {
        return;
      }

      this.philmography = [
        ...this.philmography,
        { ...this.philmographyDetail },
      ];
      this.isAddPhilmographyVisible = false;
    },
    handleSubmit() {
      updateProfile({
        introduction: this.introduction,
        philmography: this.philmography,
      });
    },
  },
  mounted() {
    const { philmography, introduction } = loadProfile();

    this.philmography = philmography;
    this.introduction = introduction;
  },
};
</script>
<template>
    <div class="actor-portfolio container">
        <div class="panel">
          <div class="panel__title">
            <span class="title">
              제작사 소개
            </span>
          </div>
          <div class="panel__content">
            <a-textarea
              v-model:value="this.introduction"
              :rows="4"
              placeholder="제작사 소개를 입력해주세요"
            />
          </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title philmography-title">
                  필모그라피
                </span>
                <span
                  class="btn btn--right btn--fill"
                >
                    <span
                      class="text btn-add"
                      @click="handleClickAddPhilmography"
                    >
                      추가하기
                    </span>
                </span>
            </div>
            <div class="panel__content">
                <swiper
                  :modules="modules"
                  :slides-per-view="5"
                  :space-between="20"
                  navigation
                >
                    <swiper-slide
                      v-for="(movieProfile, index) in this.philmography"
                      :key="index"
                    >
                        <ThumbCard
                          v-bind="movieProfile"
                          :index="index"
                          :update="status === 'update'"
                          @remove="handleRemovePhilmography">
                        </ThumbCard>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <a-modal
          v-model:visible="isAddPhilmographyVisible"
          title="영상 프로필 추가"
          @ok="handleConfirmAddPhilmography"
          cancelText="취소"
          okText="확인"
        >
            <a-form
              class="movie-profile-edit"
              :label-col="{ style: { width: '100px' } }"
              :wapper-col="{ span: 6 }"
              autocomplete="off"
            >
                <a-form-item label="작품명">
                    <a-input v-model:value="philmographyDetail.title" placeholder="작품명" />
                </a-form-item>
                <a-form-item label="연도" :wrapper-col="{ span: 8 }">
                    <a-input v-model:value="philmographyDetail.year" placeholder="작품 연도" />
                </a-form-item>

                <a-form-item label="포스터">
                  <a-upload
                    name="file"
                    v-model:file-list="philmographyDetail.posters"
                    action="https://9shbrlwx14.execute-api.ap-northeast-1.amazonaws.com/default/uploadImage"
                    @change="handleChangePoster"
                  >
                    <a-button>
                      <a-icon type="upload" /> Click to Upload
                    </a-button>
                  </a-upload>
                </a-form-item>
                <a-form-item v-if="philmographyDetail.imgSrc">
                    <div class="movie-profile-edit__thumb">
                        <img class="image" :src="philmographyDetail.imgSrc" />
                    </div>
                </a-form-item>
            </a-form>
        </a-modal>

        <div class="footer">
            <div class="footer__wrapper">
                <div class="right">
                    <RouterLink to="/production">
                        <a-button size="large">
                            취소
                        </a-button>
                    </RouterLink>
                    <RouterLink to="/production">
                        <a-button
                          type="primary"
                          size="large"
                          style="margin-left:12px;"
                          @click="handleSubmit"
                        >
                            등록하기
                        </a-button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
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
    .panel {
        &__title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .title {
                font-weight: 900;
                font-size: 1.8em;
                color: #000000;
            }

            .btn {
                margin-top: 3em;
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

    .btn-add {
      font-size: 1em;
      padding: .9em 1.3em;
      font-weight: bold;
      letter-spacing: 2px;
      display: block;
    }

    .footer {
        position: relative;
        margin-top: 8em;
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
