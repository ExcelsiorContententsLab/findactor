<script>
import useLocalStorage from '../../utils/useLocalStorage';

const accessToken = useLocalStorage('accessToken');

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // TODO: Actor 정보로 대체
      if (this.username === 'testactor120@gmail.com' && this.password === '1234') {
        this.$router.push('/actor');
        accessToken.value = 'ACTOR-1234';
        return;
      }

      // TODO: Production 정보로 대체
      if (this.username === 'testproduction120@gmail.com' && this.password === '5678') {
        this.$router.push('/production');
        accessToken.value = 'PRODUCTION-1234';
        return;
      }

      alert('아이디 또는 비밀번호를 확인하세요!');
    },
  },
};
</script>
<template>
  <div class="login-container">
    <h1>
      <img
        src="https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-18T05%3A27%3A45.842Z-login-logo-cropped.png"
        alt="로그인 이미지 로고"
      >
    </h1>
    <h2>로그인</h2>
    <form>
      <input
        id="username"
        v-model="username"
        class="login-input"
        type="text"
        placeholder="아이디(이메일주소)"
      />
      <input
        id="password"
        v-model="password"
        class="login-input"
        type="password"
        placeholder="비밀번호"
      />
      <button
        class="login-button"
        type="button"
        @click="login"
      >
        로그인
      </button>
      <div class="login-check-field">
        <input id="remember-me" type="checkbox" />
        <label for="remember-me">자동로그인</label>
      </div>
    </form>
    <div class="account-recovery">
      <h3>회원가입시 입력한 정보가 기억나지 않으시나요?</h3>
      <div class="account-recovery-button-box">
        <button class="find">아이디 찾기</button>
        <button class="find">비밀번호 찾기</button>
        <button id="account-recovery-signup" class="find">회원가입</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  border-radius: 15px;
  width: 510px;
  padding: 50px 60px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgb(0 0 0 / 10%);
}

h1 {
  margin-bottom: 1.5em;
}

h1 img {
  height: 1.8em;
}

h2 {
  font-size: 1.2em;
  margin-bottom: 2em;
  font-family: "Pretendard-Regular";
  color: #767D83;
}

.login-input {
  display: block;
  margin-bottom: 0.8em;
  width: 100%;
  padding: 9px 15px;
  border: 1px solid #ECECEC;
  border-radius: 10px;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  color: #1A1E27;
  background-color: #FFFFFF;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  line-height: 20px;
  background: transparent;
  outline-width: 0.1px;
}

.login-input::placeholder {
  opacity: 0.6;
}

.login-button {
  display: block;
  width: 100%;
  border: 0;
  cursor: pointer;
  font-size: 15px;
  margin-top: 2em;
  padding: 20px 20px;
  border-radius: 10px;
  background-color: #5E43F8;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  color: #FFFFFF;
  cursor: pointer;
  line-height: 20px;
  appearance: none;
  -webkit-appearance: none;
}

.login-check-field {
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 0.8em;
  margin-top: 1em;
  text-align: right;
  gap: 0.3em;
}

.account-recovery {
  margin-top: 2.5em;
}

.account-recovery h3 {
  color: #767D83;
  text-align: center;
  font-weight: 200;
}

.account-recovery-button-box {
  display: flex;
  margin-top: 1.3em;
  justify-content: center;
}

.account-recovery button {
  font-size: 0.8em;
  border: 0;
  outline: none;
  color: #AAAAAA;
  background: transparent;
  cursor: pointer;
}

#account-recovery-signup {
  color: #5E43F8;
}

</style>
