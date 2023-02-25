const actors = [
  {
    name: '클라라',
    gender: 'female',
    age: '68',
    height: '168',
    weight: '50',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A08%3A56.407Z-%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A11.jpg',
    birthDate: '1995',
    email: 'clara.delort@gmail.com',
    phone: '010-6771-9523',
    skills: '불어 | 영어 | 한국어',
    sns: {
      instagram: 'http://www.alphatv.kr/?c=1/11&uid=51',
    },
    movieProfileList: [
      {
        title: 'Sonny Zero, hevel, DASU - Cadenza',
        url: 'https://www.youtube.com/watch?v=sajk_uVY7i0',
        imgSrc: '',
        role: '연기영상',
        year: '',
      },
      {
        title: '[이방인 : 낯선 반가움] 3편',
        url: 'https://www.youtube.com/watch?v=CN8QAidCY_E',
        imgSrc: '',
        role: '연기영상',
        year: '',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A08%3A56.407Z-%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A11.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A09%3A20.249Z-%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A12.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A09%3A47.428Z-%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A13.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A10%3A13.106Z-%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%A14.jpg',
        kind: '상업드라마',
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
  },

  {
    name: '이승찬',
    gender: 'male',
    age: 29,
    height: 176,
    weight: 72,
    email: 'zoonyfil@nate.com',
    imgSrc: 'https://www.findactor.kr/assets/findActor/7.jpg',
    birthDate: '1995',
    phone: '010-6714-0130',
    skills: '액션 | 사투리연기 | 운전',
    sns: {
      kakao: 'zoonyfil',
      youtube: 'http://www.youtube.com/zoonyfil',
    },
    movieProfileList: [
      {
        title: '강철비2: 정상회담',
        url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=188909',
        imgSrc: '/assets/movie/movie1.jpg',
        role: '백두호 조타사 역',
        year: '2020',
      },
      {
        title: '가장 보통의 연애',
        url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=182205',
        imgSrc: '/assets/movie/movie2.jpg',
        role: '단역 이자카야 매니저',
        year: '2019',
      },
      {
        title: '마약왕',
        url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=157297',
        imgSrc: '/assets/movie/movie3.jpg',
        role: '단역-다방 앞 의원 의사역',
        year: '2018',
      },
      {
        title: '밤의 문이 열린다',
        url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=176625',
        imgSrc: '/assets/movie/movie4.jpg',
        role: '조연 - 이민성 역',
        year: '2019',
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
  },
];

export default actors;
