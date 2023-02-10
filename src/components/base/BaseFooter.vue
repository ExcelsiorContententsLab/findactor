<script>
export default {
    components: {
    }
}
</script>
<template>
    <div class="footer">
        <img src="@/assets/footerLogo.png">
        <div>
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>회사소개</span>
            <span>공지사항</span>
        </div>
    </div>
</template>


<style scoped lang="scss">
.footer {
    background: #1b1b1b;
    height: 222px;
    padding: 76px 0px 0px 180px;
}

.footer span {
    color: #ffffff;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    padding-right: 40px;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
}

.footer__button__box {
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 20px 20px;
    height: 116px;
    padding: 0px 82px 0px 100px;
    background: white;
}

.footer__button__box--side {
    margin-left: -47px;
    margin-right: -47px;
}

.footer__button__box--position {
    width: 1480px;
    position: relative;
    left: -120px;
}

.footer__button__box--position2 {
    position: relative;
    left: -120px;
    width: 1320px;
}

.footer__button {
    position: relative;
    top: 26px;
    width: 174px;
    height: 64px;
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
}

.footer__button--pending {
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button--fail {
    color: #5f43f8;
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button--suggest {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
    background: #5f43f8;
    margin-left: 22px;
}

.footer__button--large {
    width: 1500px;
    border: 1px solid red;
}

.footer__button2 {
    top: 26px;
    width: 174px;
    height: 64px;
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
}

.footer__button2--pending {
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button2--fail {
    color: #5f43f8;
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button2--suggest {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
    background: #5f43f8;
    margin-left: 22px;
}

.footer__button2--large {
    width: 1500px;
    border: 1px solid red;
}

.footer span {
    color: #ffffff;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    padding-right: 40px;
}

.footer__button__box {
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 20px 20px;
    height: 116px;
    padding: 0px 82px 0px 100px;
    background: white;
}

.footer__button__box--side {
    margin-left: -47px;
    margin-right: -47px;
}

.footer__button__box--position {
    width: 1480px;
    position: relative;
    left: -120px;
}

.footer__button__box--position2 {
    position: relative;
    left: -120px;
    width: 1320px;
}

.footer__button {
    position: relative;
    top: 26px;
    width: 174px;
    height: 64px;
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
}

.footer__button--pending {
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button--fail {
    color: #5f43f8;
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button--suggest {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
    background: #5f43f8;
    margin-left: 22px;
}

.footer__button--large {
    width: 1500px;
    border: 1px solid red;
}

.footer__button2 {
    top: 26px;
    width: 174px;
    height: 64px;
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
}

.footer__button2--pending {
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button2--fail {
    color: #5f43f8;
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: white;
}

.footer__button2--suggest {
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
    color: #ffffff;
    border: 1px solid #dadada;
    border-radius: 10px;
    background: #5f43f8;
    margin-left: 22px;
}

.footer__button2--large {
    width: 1500px;
    border: 1px solid red;
}
</style>