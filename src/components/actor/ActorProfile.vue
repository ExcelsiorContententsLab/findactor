<script>
import { loadActorProfile, loadActorScrappedAutions } from '../../service/actors';
import { loadRequestedAuditions } from '../../service/auditions';

export default {
  data() {
    return {
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
      profile: {
        name: '',
        email: '',
        age: '',
        height: '',
        weight: '',
        genre: '',
        gender: '',
        tags: [],
      },
      scrapCount: 0,
      requestCount: 0,
    };
  },
  mounted() {
    this.profile = loadActorProfile();
    // TODO: 스크랩 카운트 읽어오기
    loadActorScrappedAutions().then((data) => {
      this.scrapCount = data.length;
    });
    loadRequestedAuditions({ actorEmail: 'zoonyfil@nate.com' }).then(({ data }) => {
      this.requestCount = data.length;
    });
  },
};
</script>
<template>
    <div class="actor-profile">
        <div class="actor-profile__wrapper">
            <div class="box">
                <div class="image">
                    <img class="avatar" src="@/assets/myProfile.jpg">
                </div>
                <div class="name">
                    {{ profile.name }}
                </div>
                <div class="info">
                    <p class="info__item">
                        <a class="item" href="mailto:find@naver.com">
                            {{ profile.email }}
                        </a>
                    </p>
                    <p class="info__item">
                        <span class="item">{{ profile.age }}세</span>
                        <span class="item">{{ profile.height }}cm</span>
                        <span class="item">{{ profile.weight }}kg</span>
                    </p>
                </div>
                <router-link to="/profile/update">
                    <a-button shape="round" size="large">
                        프로필 정보 수정
                    </a-button>
                </router-link>
            </div>
            <div class="box box--left-align">
                <div class="title">
                    <p>
                        특기
                    </p>
                </div>
                <template v-for="tag in profile.tags">
                    <a-button class="tag" shape="round" size="large">{{ PREFER_MAP.find(v => v.id === tag).value }}</a-button>
                </template>
            </div>
            <div class="box">
                <ul class="info-list">
                    <li class="info-list__item">
                        <span class="label">스크랩</span>
                        <router-link class="text" tag="span" to="/profile/interest?type=scrap">
                            {{ scrapCount }}
                        </router-link>
                    </li>
                    <li class="info-list__item">
                        <span class="label">열람</span>
                        <router-link
                            class="text"
                            tag="span"
                            to=""
                          >
                            15
                        </router-link>
                    </li>
                    <li class="info-list__item">
                        <span class="label">받은 제안</span>
                        <router-link class="text" tag="span" to="/profile/interest?type=offer">
                            {{ requestCount }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.actor-profile {
    text-align: center;
    background-color: #fff;
    width: 400px;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);

    &__wrapper {
        padding: 36px 0;

        .box {
            &:not(:last-child) {
                border-bottom: 2px solid #dadada;
            }

            padding: 36px;

            &--left-align {
                text-align: left;
            }
        }

        .image {
            margin-bottom: 20px;

            .avatar {
                width: 180px;
                height: 180px;
                border-radius: 50%;
                border: 4px solid #FFFFFF;
                box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
            }

        }

        .name {
            color: black;
            font-weight: 900;
            font-size: 32px;
            margin-bottom: 30px;
        }

        .title {
            color: #000000;
            font-weight: 900 !important;
            font-size: 22px !important;
            margin-bottom: 14px;
        }

        .tag {
            margin-bottom: 6px;
            margin-right: 6px;
        }

        .info {
            margin-bottom: 30px;

            &__item {

                margin-bottom: 2px;
                height: 30px;
                line-height: 30px;

                .item {
                    color: #878787;
                    font-weight: 400;
                    font-size: 20px;

                    &:not(:last-child) {
                        &::after {
                            content: "";
                            display: inline-block;
                            width: 2px;
                            height: 14px;
                            background: #aaa;
                            margin: 0 6px;
                        }
                    }

                }
            }
        }

        .info-list {

            &__item {
                display: flex;
                font-size: 20px;
                color: #000000;
                margin-bottom: 30px;

                .label {
                    font-weight: 400;
                }

                .text {
                    font-weight: 700;
                    margin-left: auto;

                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
