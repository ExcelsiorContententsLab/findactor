<script>
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import ThumbCard from '@/components/thumb/ThumbCard.vue';
import { RouterLink } from 'vue-router';
import { message } from 'ant-design-vue';
export default {
    name: 'ActorDetail',
    components: {
        Swiper,
        SwiperSlide,
        RouterLink
    },
    props: {
        status: {
            type: String,
            default: ''
        }
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
                    imgSrc: '/src/assets/thumb1.jpg',
                    title: '구르미 그린 달빛',
                    role: '단역 가나단역',
                    year: 2021,
                },
                {
                    imgSrc: '/src/assets/thumb1.jpg',
                    title: '구르미 그린 달빛',
                    role: '단역 가나단역',
                    year: 2021,
                },
                {
                    imgSrc: '/src/assets/thumb1.jpg',
                    title: '구르미 그린 달빛',
                    role: '단역 가나단역',
                    year: 2021,
                },
                {
                    imgSrc: '/src/assets/thumb1.jpg',
                    title: '구르미 그린 달빛',
                    role: '단역 가나단역',
                    year: 2021,
                },
                {
                    imgSrc: '/src/assets/thumb1.jpg',
                    title: '구르미 그린 달빛',
                    role: '단역 가나단역',
                    year: 2021,
                },
                {
                    imgSrc: '/src/assets/thumb1.jpg',
                    title: '구르미 그린 달빛',
                    role: '단역 가나단역',
                    year: 2021,
                }
            ],
            imageProfileList: [
                {
                    imgSrc: '/src/assets/imageProfile/1.jpg',
                    kind: '상업드라마',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/2.jpg',
                    kind: '상업드라마',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/3.jpg',
                    kind: '상업드라마',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/4.jpg',
                    kind: '상업드라마',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/5.jpg',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/6.jpg',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/7.jpg',
                    role: '단역 가나다역'
                },
                {
                    imgSrc: '/src/assets/imageProfile/8.jpg',
                    role: '단역 가나다역'
                },
            ],
            filmoList: [
                {
                    title: '강철비2 정상회담',
                    year: '2020',
                    kind: '상업드라마',
                    role: '백두호 - 조타사역'
                },
                {
                    title: '가장 보통의 연애',
                    year: '2019',
                    kind: '상업드라마',
                    role: '이자카야 매니저 - 단역'
                },
                {
                    title: '마약왕',
                    year: '2018',
                    kind: '상업드라마',
                    role: '단역 - 다방 앞 의원 의사역'
                },
                {
                    title: '밤의 문이 열린다',
                    year: '2019',
                    kind: '상업드라마',
                    role: '조연 - 이민성역'
                },
            ]

        }
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
        }
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
        // 영상 디테일 
        handleInputMovieProfileDetailURL(event) {
            const value = event.target.value;
            const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
            const match = regex.exec(value);
            if (match) {
                const youtubeId = match[3];
                this.movieProfileDetail.imgSrc = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
            } else {
                this.movieProfileDetail.imgSrc = null;
            }
            // if(match)
            // const youtubeId = regex.exec(value)[3];
            // console.log(youtubeId);
        }

    },
    mounted() {
        console.log(this.status);
    },
}
</script>
<template>
    <div class="actor-portfolio">
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    프로필
                </span>
                <p class="btn-group" style="margin-left:auto;">
                    <a-button type='primary' size="large">제안하기</a-button>
                    <a-button size="large" style="margin-left:10px;">스크랩</a-button>
                </p>
            </div>
            <div class="panel__content">
                <div class="detail-info">
                    <div class="left">
                        <p class="name">이승찬</p>
                        <p class="info">
                            <span class="info__item">남자</span>
                            <span class="info__item">29세</span>
                            <span class="info__item">176cm</span>
                            <span class="info__item">72kg</span>
                        </p>
                        <p class="info2">
                            <span class="label">생년월일</span>
                            <span class="text">1994.11.04</span>
                        </p>
                        <p class="info2">
                            <span class="label">이메일</span>
                            <span class="text">zoonyfil@nate.com</span>
                        </p>
                        <p class="info2">
                            <span class="label">연락처</span>
                            <span class="text">010-6714-0130</span>
                        </p>
                    </div>
                    <div class="right">
                        <div class="info3">
                            <span class="label">특기</span>
                            <p class="info">
                                <span class="info__item">액션</span>
                                <span class="info__item">사투리연기</span>
                                <span class="info__item">운전</span>
                            </p>
                        </div>
                        <div class="info3">
                            <span class="label">SNS</span>
                            <p class="sns">
                                <img class="icon" src="@/assets/kakao_icon.svg" />
                                <span class="text">zoonyfil</span>
                            </p>
                            <p class="sns">
                                <img src="@/assets/youtube_icon.svg" />
                                <span class="text">http://www.youtube.com/zoonyfil</span>
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
                <swiper :modules="modules" :slides-per-view="isUpdate ? 5 : 4" :space-between="20" navigation>
                    <swiper-slide v-for="(movieProfile, index) in $store.state.profile.movieList" :key="index">
                        <ThumbCard v-bind="movieProfile" :index="index" :update="status === 'update'"
                            @remove="handleRemoveThumbCard"></ThumbCard>
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
                    <swiper-slide v-for="(imageProfile, index) in imageProfileList" :key="index">
                        <ThumbImage v-bind="imageProfile" :update="status === 'update'"></ThumbImage>
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
                <a-list item-layout="horizontal" :data-source="filmoList">
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
        <a-modal v-model:visible="isAddMovieProfileVisible" title="영상 프로필 추가" @ok="handleConfirmAddMovieProfile"
            cancelText="취소" okText="확인">
            <a-form class="movie-profile-edit" :label-col="{ style: { width: '100px' } }" :wapper-col="{ span: 6 }"
                autocomplete="off">
                <a-form-item label="영상 URL" :rules="[{ required: true, message: '연기 영상은 필수 입력값 입니다.' }]">
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