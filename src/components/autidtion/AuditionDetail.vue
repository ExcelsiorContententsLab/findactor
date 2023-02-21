<script>
export default {
  name: 'AuditionDetail',
  props: [],
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<template>
    <div class="apply-container">
      <a-button
        type="primary"
        size="large"
      >
        지원하기
      </a-button>
    </div>
      <div class="header">
          <div class="header__thumb">
              <img class="thumb" src="@/assets/tour/profile.jpeg" />
          </div>
          <div class="header__title">
              <span class="production-name item">엑셀시오르콘텐츠랩</span>
              <span class="title-name item">반드시 너와 함께 </span>
          </div>
      </div>
      <div class="content">
          <div class="sub-title">
              작품 소개
          </div>
          <div class="article">
              어릴적 불의의 사고로 아버지를 잃은 여름은 무럭무럭 자라 어느덧 고등학생이 된다.<br /><br />
              매년 같이 여행을 다녀왔던 친구들과 이번에도 여행을 가기로 한다.
          </div>
          <div class="sub-title">
              제작사 소개
          </div>
          <div class="article">
              숭실대학교 대학언론인 인터넷 방송국 씨즌넷에서 제작하는 단편영화에 출연하실 배우 1명을 모집합니다. <br /><br />
              해당 단편영화는 3월에 있을 숭실대학교 영상제에 상영되고, 인터넷 방송국 유튜브에 업로드될 예정입니다.<br /><br />
              <p style="margin-bottom:20px;">
                  &lt;모집 배역 캐릭터&gt;
              </p>
              <p style="margin-bottom:10px;">
                  이름: 권민수 (미정
              </p>
              <p style="margin-bottom:10px;">
                  나이: 저승사자 역 (젊은 아버지 느낌)
              </p>
              <p style="margin-bottom:10px;">
                  성별: 남성
              </p>
              <p style="margin-bottom:10px;">
                  역할: 주인공의 아버지로 주인공의 행복한 기억을 찾아주는 저승사자 역할
              </p>
              <p style="margin-bottom:20px;">
                  착장: 정장
              </p>
              <p style="margin-bottom:20px;">
                  {{ `<촬영 정보>` }}
              </p>
              <p style="margin-bottom:10px;">
                  장소: 인천 월미도, 숭실대학교
              </p>
              <p style="margin-bottom:10px;">
                  촬영 날짜: 1/12, 1/15 (추가촬영 있을 수 있음)
              </p>
              <p style="margin-bottom:20px;">
                  페이: 12만원 (제작 여건 상 많은 페이를 드릴 수 없는 점 양해 바랍니다)
              </p>
              <p style="margin-bottom:20px;">
                  {{`<지원양식>`}}
              </p>
              <p style="margin-bottom:10px;">
                  메일 주소: songsy9573@naver.com
              </p>
              <p style="margin-bottom:10px;">
                  -이메일에 프로필과 포트폴리오(연기영상) 첨부 부탁드립니다.
              </p>
              <p style="margin-bottom:10px;">
                  -연기영상(독백이나 출연영상)이 없는 경우 첨부된 대본을 이용해 자유롭게 연기하신 영상 부탁드립니다.
              </p>
              <p style="margin-bottom:10px;">
                  문의 사항은 이메일로 보내주시면 답변드리겠습니다.
              </p>
          </div>
          <div class="sub-title">
              제작사 필모그라피
          </div>
          <div class="article">
              <div class="filmo-list">
                  <Swiper :modules="modules" :slides-per-view="5" :space-between="20" navigation>
                      <SwiperSlide
                        v-for="(movieProfile, index) in $store.state.profile.movieList"
                        :key="index"
                      >
                          <ThumbCard
                            v-bind="movieProfile"
                            cardType="filmo"
                            :index="index"
                            :update="status === 'update'" @remove="handleRemoveThumbCard">
                          </ThumbCard>
                      </SwiperSlide>
                  </Swiper>
              </div>
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

</style>
