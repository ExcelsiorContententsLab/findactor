<script>
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { RouterLink } from 'vue-router';
import { message } from 'ant-design-vue';
import ThumbCard from '@/components/thumb/ThumbCard.vue';

import {
  loadActorPhilmography,
  loadActorAvatars,
  saveActorAvatars,
  saveActorPhilmography,
} from '../../service/actors';

export default {
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
      isAddMovieProfileVisible: false,
      isAddImageProfileVisible: false,
      movieProfileDetail: {
        title: '',
        url: '',
        role: '',
        year: '',
        imgSrc: '',
        posters: [],
      },
      imageProfileDetail: {
        uploadingImages: [],
        imageSrc: '',
      },
      movieProfileList: [],
      imageProfileList: [],
    };
  },
  setup() {
    const onSwiper = () => {
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
    handleRemoveMovieProfile(index) {
      this.movieProfileList.splice(index, 1);
    },
    handleClickAddMovieProfile() {
      this.isAddMovieProfileVisible = true;
    },
    handleConfirmAddMovieProfile() {
      this.movieProfileList.push({
        ...this.movieProfileDetail,
      });
      this.clearWritingMovieProfile();
      this.isAddMovieProfileVisible = false;
    },
    clearWritingMovieProfile() {
      this.movieProfileDetail.imgSrc = '';
      this.movieProfileDetail.title = '';
      this.movieProfileDetail.role = '';
      this.movieProfileDetail.year = '';
      this.movieProfileDetail.posters = [];
    },
    handleRemoveImage(index) {
      this.imageProfileList = [
        ...this.imageProfileList.slice(0, index),
        ...this.imageProfileList.slice(index + 1),
      ];
    },
    // 영상 디테일
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
    handleChangePoster(event) {
      const { file } = event;
      const { status, response } = file;

      if (status === 'done') {
        const { message: imageUrl } = response;
        this.movieProfileDetail.imgSrc = imageUrl;
      }

      const { posters } = this.movieProfileDetail;
      if (status === 'done' && posters.length > 1) {
        posters.shift();
      }
    },
    handleAddImageProfile() {
      this.isAddImageProfileVisible = true;
    },
    handleChangeImage(event) {
      const { file } = event;
      const { status, response } = file;

      if (status === 'done') {
        const { message: imageUrl } = response;
        this.imageProfileDetail.imageSrc = imageUrl;
      }

      const { uploadingImages } = this.imageProfileDetail;
      if (status === 'done' && uploadingImages.length > 1) {
        uploadingImages.shift();
      }
    },
    handleConfirmAddImageProfile() {
      this.imageProfileList.push({
        imgSrc: this.imageProfileDetail.imageSrc,
      });
      this.clearWritingImageProfile();
      this.isAddImageProfileVisible = false;
    },
    clearWritingImageProfile() {
      this.imageProfileDetail.imageSrc = '';
      this.imageProfileDetail.uploadingImages = [];
    },
    handleSubmit() {
      saveActorPhilmography(this.movieProfileList);
      saveActorAvatars(this.imageProfileList);
    },
  },
  mounted() {
    this.movieProfileList = loadActorPhilmography();
    this.imageProfileList = loadActorAvatars();
  },
};
</script>
<template>
    <div class="actor-portfolio container">
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    영상 프로필
                </span>
                <span v-if="!isUpdate" class="btn btn--right">
                    <RouterLink to="/portfolio/update">
                        <span class="text">
                            포트폴리오 수정
                        </span>
                        <img class="more__icon" src="@/assets/Vector.svg" />
                    </RouterLink>
                </span>

                <span v-else
                  class="btn btn--right btn--fill"
                  @click="handleClickAddMovieProfile"
                >
                    <span class="text btn-add">추가하기</span>
                </span>
            </div>
            <div class="panel__content">
                <swiper
                  :modules="modules"
                  :slides-per-view="isUpdate ? 5 : 4"
                  :space-between="20"
                  navigation
                >
                    <swiper-slide
                      v-for="(movieProfile, index) in this.movieProfileList"
                      :key="index"
                    >
                        <ThumbCard
                          v-bind="movieProfile"
                          :index="index"
                          :update="status === 'update'"
                          @remove="handleRemoveMovieProfile">
                        </ThumbCard>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    이미지 프로필
                </span>
                <span v-if="isUpdate" class="btn btn--right btn--fill">
                    <span
                      class="text btn-add"
                      @click="handleAddImageProfile"
                    >
                      추가하기
                    </span>
                </span>
            </div>
            <div class="panel__content">
                <swiper :modules="modules" :slides-per-view="'auto'" :space-between="10" navigation
                    class="image-profile">
                    <swiper-slide
                      v-for="(imageProfile, index) in this.imageProfileList" :key="index"
                    >
                        <ThumbImage
                          v-bind="imageProfile"
                          :update="status === 'update'"
                          @remove="() => handleRemoveImage(index)">
                        </ThumbImage>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <a-modal
          v-model:visible="isAddMovieProfileVisible"
          title="영상 프로필 추가"
          @ok="handleConfirmAddMovieProfile"
          cancelText="취소"
          okText="확인"
        >
            <a-form
              class="movie-profile-edit"
              :label-col="{ style: { width: '100px' } }"
              :wapper-col="{ span: 6 }"
              autocomplete="off"
            >
                <a-form-item label="영상 URL" :rules="[{ required: true, message: '연기 영상은 필수 입력값 입니다.' }]">
                    <a-input v-model:value="movieProfileDetail.url" placeholder="연기 영상 링크"
                        @input="handleInputMovieProfileDetailURL" />
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
                <a-form-item label="포스터">
                  <a-upload
                    name="file"
                    v-model:file-list="this.movieProfileDetail.posters"
                    action="https://9shbrlwx14.execute-api.ap-northeast-1.amazonaws.com/default/uploadImage"
                    @change="handleChangePoster"
                  >
                    <a-button>
                      <a-icon type="upload" /> Click to Upload
                    </a-button>
                  </a-upload>
                </a-form-item>
                <a-form-item v-if="movieProfileDetail.imgSrc">
                    <div class="movie-profile-edit__thumb">
                        <img class="image" :src="movieProfileDetail.imgSrc" />
                    </div>
                </a-form-item>
            </a-form>
        </a-modal>

        <a-modal
          v-model:visible="isAddImageProfileVisible"
          title="이미지 프로필 추가"
          @ok="handleConfirmAddImageProfile"
          cancelText="취소"
          okText="확인"
        >
            <a-form
              class="movie-profile-edit"
              :label-col="{ style: { width: '100px' } }"
              :wapper-col="{ span: 6 }"
              autocomplete="off"
            >
                <a-form-item label="이미지">
                  <a-upload
                    name="file"
                    v-model:file-list="this.imageProfileDetail.uploadingImages"
                    action="https://9shbrlwx14.execute-api.ap-northeast-1.amazonaws.com/default/uploadImage"
                    @change="handleChangeImage"
                  >
                    <a-button>
                      <a-icon type="upload" /> Click to Upload
                    </a-button>
                  </a-upload>
                </a-form-item>
                <a-form-item v-if="imageProfileDetail.imageSrc">
                    <div class="movie-profile-edit__thumb">
                        <img class="image" :src="imageProfileDetail.imageSrc" />
                    </div>
                </a-form-item>
            </a-form>
        </a-modal>

        <div v-if="isUpdate" class="footer">
            <div class="footer__wrapper">
                <div class="right">
                    <RouterLink to="/actor">
                        <a-button size="large">
                            취소
                        </a-button>
                    </RouterLink>
                    <RouterLink to="/actor">
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

.actor-portfolio {
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
