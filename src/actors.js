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
        title: ' Liberatoe',
        year: '2022',
        kind: ' ',
        role: '기타리스트 역',
      },
      {
        title: '이희문',
        year: '2022',
        kind: ' ',
        role: '화가 역',
      },
      {
        title: 'Sonny Zero, hevel, DASU',
        year: '2022',
        kind: '',
        role: '범죄자 여자친구 역',
      },
      {
        title: '프랑스의 <Antigone>',
        year: '2017',
        kind: '',
        role: 'Ismene 역',
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

  {
    name: '권영채',
    gender: 'male',
    age: '68',
    height: '171',
    weight: '70',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A06%3A07.785Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%AF%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A21.jpg',
    birthDate: '1955',
    email: 'dwkyc@daum.net',
    phone: '010-8737-8581',
    skills: '부산사투리 | 노래 | 복싱',
    sns: {
      instaglam: 'https://www.instagram.com/youngchai55',
    },
    movieProfileList: [
      {
        title: '유령',
        url: 'https://www.youtube.com/watch?v=lxErowqI7DI',
        imgSrc: '',
        role: '<유령>설경구 일본인 아버지역 출연. 2023년',
        year: '',
      },
    ],

    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A06%3A07.785Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%AF%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A21.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A06%3A33.344Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%AF%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A22.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A06%3A55.965Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%AF%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A23.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A07%3A20.007Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%AF%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A24.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '엔씨소프트 프로 야구 H3 광고 tvcf.',
        year: '2022',
        kind: '',
        role: '',
      },
      {
        title: '메이플 스튜디오 홍보 cf.',
        year: '2022',
        kind: '',
        role: '',
      },
      {
        title: 'MBN tv 생생 정보마당 664회 <인생 2막 청춘> 출연',
        year: '2022',
        kind: '',
        role: '',
      },
      {
        title: 'KBS tv 아침마당 출연-시니어 모델 권영채의 집콕 운동법',
        year: '2017',
        kind: '',
        role: '',
      },
    ],
  },
  {
    name: '양진선',
    gender: 'female',
    age: '51',
    height: '157',
    weight: '47',
    imgSrc: ' https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A50%3A11.176Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%AB1.jpg',
    birthDate: '1972',
    email: ' 1129jinseon@naver.com',
    phone: '',
    skills: '판소리 | 전라도사투리 | 코믹연기',
    sns: {
      instagram: '',
    },
    movieProfileList: [
      {
        title: '공작',
        url: 'https://youtu.be/XyEJxOfKaCw',
        imgSrc: '',
        role: '출국장 에서 맞이하는 부부 역',
        year: '2018',
      },
      {
        title: '킹덤 시즌 1',
        url: ' https://youtu.be/x-YJTJsVQ_0',
        imgSrc: '',
        role: '시즌1 (환자역 고정) 넷플릭스 ',
        year: '2019',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A50%3A11.176Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%AB1.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A50%3A35.535Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%AB2.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A04%3A41.345Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB3.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A52%3A22.298Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%AB4.jpg ',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: ' tvn"작은 아씨들"',
        year: '2022',
        kind: ' ',
        role: ' 부유층 학부모역 ',
      },
      {
        title: 'tvn "빅마우스"',
        year: '2022',
        kind: ' ',
        role: '편의점 손님역',
      },
      {
        title: 'jtbc 서른,아홉',
        year: '2021',
        kind: ' ',
        role: '강남사모님역',
      },
      {
        title: 'kbs"한번 다녀왔습니다"',
        year: '2020',
        kind: ' ',
        role: '까페 방문하는 중년 역',
      },
    ],
  },

  {
    name: '강정호',
    gender: 'male',
    age: '55',
    height: '175',
    weight: '72',
    imgSrc: ' https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A47%3A49.094Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A91.jpg',
    birthDate: '1968',
    email: 'eongho5869@naver.com',
    phone: '',
    skills: '영어 | 태권도 | 운전',
    sns: {
      instagram: '',
    },
    movieProfileList: [
      {
        title: '아수라',
        url: 'https://youtu.be/2HIZT4ZFejE',
        imgSrc: '',
        role: '은충호 유가족역',
        year: '2016',
      },
      {
        title: '브로커',
        url: 'https://youtu.be/DpVAb7Bi5UQ',
        imgSrc: '',
        role: '국선 변호사역',
        year: '2022',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A47%3A49.094Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A91.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A48%3A10.115Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A92.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A48%3A39.975Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A93.png',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '아수라',
        year: '2016',
        kind: '',
        role: '은충호 유가족역',
      },
      {
        title: '머니백',
        year: '2017',
        kind: '',
        role: '과거 편의점 점장역',
      },
    ],
  },

  {
    name: '아이보',
    gender: 'male',
    age: '35',
    height: '177',
    weight: '84',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A45%3A25.613Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A91.jpg',
    birthDate: '1988',
    email: 'ivojackson88@gmail.com',
    phone: '010-9676-9620',
    skills: '옛법택견 | 복싱 | 프랑스어(모국어)',
    sns: {
      instagram: ' https://instagram.com/koolnjoy88?utm_medium=copy_link',
    },
    movieProfileList: [
      {
        title: '연기영상',
        url: 'https://youtu.be/A5dtzgWGdiU',
        imgSrc: '',
        role: '',
        year: '',
      },
      {
        title: '연기영상',
        url: 'https://youtu.be/f7a5jectfC4',
        imgSrc: '',
        role: '',
        year: '',
      },
      {
        title: '연기영상',
        url: 'https://youtu.be/CTnZx2vW2Rc',
        imgSrc: '',
        role: '',
        year: '',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A45%3A25.613Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A91.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A45%3A47.816Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A92.jpg ',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A46%3A11.675Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A1%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A93.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '수리남',
        year: '2021',
        kind: '',
        role: '엑스트라',
      },
      {
        title: '지금 헤어지는 중이야',
        year: '2021',
        kind: '',
        role: '엑스트라',
      },
    ],
  },

  {
    name: '왕준형',
    gender: 'male',
    age: '25',
    height: '171',
    weight: '56',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A33%3A50.901Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC1.jpg',
    birthDate: '1998',
    email: 'gangch980306@naver.com',
    phone: '',
    skills: '춤 | 피아노 | 노래',
    sns: {
      instagram: 'https://www.instagram.com/jjoon_98/',
    },
    movieProfileList: [
      {
        title: '연기영상',
        url: 'https://youtu.be/wt6f7chhibc',
        imgSrc: '',
        role: '',
        year: '',
      },
      {
        title: '연기영상',
        url: 'https://youtu.be/R1EccCL1ri0',
        imgSrc: '',
        role: '',
        year: '',
      },
      {
        title: '연기영상',
        url: 'https://youtu.be/Xvf2kadr6Hk',
        imgSrc: '',
        role: '',
        year: '',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A33%3A50.901Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC1.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A34%3A16.520Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC2.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A34%3A41.977Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC3.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A35%3A08.436Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC4.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '단편 <Cloth To You>',
        year: '2022',
        kind: '',
        role: '밴드 보컬, 에녹 역 (주연)',
      },
      {
        title: '단편 <영웅이 필요해>',
        year: '2022',
        kind: '',
        role: '드랙퀸, 연재 역 (주연)',
      },
      {
        title: '단편 <뛰지 않아도 바람은 부는데>',
        year: '2022',
        kind: '',
        role: '신비한 남자, 청산 역 (주조연)',
      },
    ],
  },
  {
    name: '임서은',
    gender: 'female',
    age: '36',
    height: '165',
    weight: '49',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A03%3A49.323Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB1.jpg',
    birthDate: '1987',
    email: 'ise0121@naver.com',
    phone: '',
    skills: '전라도사투리 | 운전 | 노래',
    sns: { instagram: '' },
    movieProfileList: [
      {
        title: '카지노',
        url: 'https://www.youtube.com/watch?v=-uFz1u6W8uM',
        imgSrc: '',
        role: '박원용 아내 역 (미용실 원장)',
        year: '2022',
      },
      {
        title: '도굴',
        url: 'https://www.youtube.com/watch?v=HHXyQiCGgKw',
        imgSrc: '',
        role: '카페사장역',
        year: '2020',
      },
      {
        title: '내 남자친구를 소개합니다',
        url: 'https://www.youtube.com/watch?v=QXxEd_GbEAU',
        imgSrc: '',
        role: '소현역(무속인)',
        year: '2019',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A03%3A49.323Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB1.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A04%3A16.444Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB2.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A04%3A41.345Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB3.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      { imgSrc: '', kind: '상업드라마', role: '단역 가나다역' },
    ],
    filmoList: [
      {
        title: '크리스마스 캐럴.', year: '2022', kind: '', role: '사회 복지사 역',
      },
      {
        title: '넷플리스 도시괴담 8화', year: '2020', kind: '', role: '세우니 엄마 역',
      },
      {
        title: '나를 기억해', year: '2018', kind: '', role: '윤형사 역',
      },
      {
        title: '대립군', year: '2017', kind: '', role: '궁녀 역',
      },
    ],
  },

  {
    name: '박서진',
    gender: 'female',
    age: '10',
    height: '140',
    weight: '29',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A01%3A01.261Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%AB1.jpg',
    birthDate: '2013',
    email: 'leesanga0930@naver.com',
    phone: '',
    skills: '표정연기 | 눈웃음 | 율동',
    sns: { instaglam: 'http://www.instagram.com/lovely_s.h_mom' },
    movieProfileList: [
      {
        title: '티티체리 완구 tvcf',
        url: 'https://youtu.be/VLmo9BGUTYY',
        imgSrc: '',
        role: '',
        year: '2022',
      },
      {
        title: '골프버디 레이저 거리측정기 바이럴 광고',
        url: 'https://www.youtube.com/watch?v=2OIQw6X_uCo',
        imgSrc: '',
        role: '',
        year: '2021',
      },
      {
        title: '통계청 2020년 인구주택총조사 tvcf',
        url: 'https://youtu.be/i0jKH58Ei18',
        imgSrc: '',
        role: '소현역(무속인)',
        year: '2020',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A01%3A01.261Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%AB1.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A01%3A25.764Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%AB2.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A01%3A53.062Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%AB3.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T03%3A02%3A19.464Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%AB4.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: 'NH농협 <용돈올머니>촬영', year: '2023', kind: '', role: '',
      },
      {
        title: '독서대,자세교정장치 촬영', year: '2022', kind: '', role: '',
      },
      {
        title: '웅진 스마트올 소셜컨텐츠 촬영',
        year: '2022',
        kind: '',
        role: '윤형사 역',
      },
      {
        title: '캥거루타운 생활용품 바이럴광고', year: '2021', kind: '', role: '',
      },
    ],
  },

  {
    name: '홍율아',
    gender: 'female',
    age: '7',
    height: '120',
    weight: '23',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A58%3A14.481Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A11.jpg',
    birthDate: '2016',
    email: 'lje1005@naver.com',
    phone: '010-6593-5289',
    skills: '동요 | 발레 | 율동',
    sns: { instagram: 'http://www.instagram.com/yulart_5' },
    movieProfileList: [
      {
        title: 'MSG워너비 M.O.M 뮤직비디오',
        url: 'https://youtu.be/MxbAJ0UpgCM',
        imgSrc: '',
        role: '',
        year: '2023',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A58%3A14.481Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A11.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A58%3A40.680Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A12.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A59%3A06.161Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A13.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A59%3A37.901Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A14.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: 'MSG워너비 M.O.M 뮤직비디오', year: '2023', kind: '', role: '',
      },
      {
        title: '캐리비안베이 광고촬영', year: '2022', kind: '', role: '',
      },
      {
        title: '행정안전부 어린이안전교육 공익광고',
        year: '2022',
        kind: '',
        role: '윤형사 역',
      },
      {
        title: 'KDO전국실용무용대회 "금상"', year: '2021', kind: '', role: '',
      },
    ],
  },

  {
    name: '은유',
    gender: 'female',
    age: '25',
    height: '156',
    weight: '42',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A27%3A48.489Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B71.jpg',
    birthDate: '1998',
    email: 'gejb514@hanmail.net',
    phone: '',
    skills: '즉흥연기 | 성대모사 | 춤',
    sns: { instagram: 'https://www.instagram.com/binip/' },
    movieProfileList: [
      {
        title: '수색자',
        url: 'https://www.youtube.com/watch?v=3NBqFGzQa9M',
        imgSrc: '',
        role: '기자 역',
        year: '2021',
      },
      {
        title: '내안의 그놈',
        url: 'https://www.youtube.com/watch?v=Zy2Ht5gehsQ',
        imgSrc: '',
        role: '민우 친구역',
        year: '2019',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A27%3A48.489Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B71.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A29%3A51.606Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B22.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A28%3A50.846Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T02%3A31%3A46.181Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B23.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '수색자', year: '2021', kind: '', role: '기자 역',
      },
      {
        title: '내 안의 그놈', year: '2019', kind: '', role: '민우 친구역',
      },
      {
        title: 'KBS드라마 "연모"', year: '2021', kind: '', role: '궁녀역',
      },
      {
        title: 'OCN “번외수사”', year: '2020', kind: '', role: '기자역',
      },
    ],
  },

  {
    name: '김상욱',
    gender: 'male',
    age: '55',
    height: '181',
    weight: '80',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A23%3A35.914Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A8.jpeg',
    birthDate: '1968',
    email: 'woogi1255@naver.com',
    phone: '010-8903-8926',
    skills: '보컬 | 피아노 | 춤',
    sns: { instagram: '' },
    movieProfileList: [
      {
        title: '올빼미',
        url: 'https://youtu.be/eRX5_KUyx7c',
        imgSrc: '',
        role: '침맞는 내관 역',
        year: '2022',
      },
      {
        title: '유령',
        url: 'https://youtu.be/RKrmJANgzvs',
        imgSrc: '',
        role: '일본 고위부처장역',
        year: '2022',
      },
      {
        title: '범죄도시 2',
        url: 'https://youtu.be/aw9j_23nORs',
        imgSrc: '',
        role: '공항택시역',
        year: '2022',
      },
      {
        title: '자백',
        url: 'https://youtu.be/M-OsBtkztpQ',
        imgSrc: '',
        role: '개관식 VIP역',
        year: '2022',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A23%3A35.914Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A8.jpeg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A24%3A01.953Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A81.jpeg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A24%3A23.553Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A83.jpeg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A24%3A43.092Z-%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%B7%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A82.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '올빼미', year: '2022', kind: '', role: '침맞는 내원역',
      },
      {
        title: '유령', year: '2022', kind: '', role: '일본 고위부처장역',
      },
      {
        title: '범죄도시2', year: '2022', kind: '', role: '공항택시가역',
      },
      {
        title: '자백', year: '2022', kind: '', role: '개관식VIP역',
      },
    ],
  },

  {
    name: '윤영숙',
    gender: 'female',
    age: '66',
    height: '167',
    weight: '63',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A37%3A52.087Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A8.jpg',
    birthDate: '1957',
    email: 'luen430@daum.net',
    phone: '',
    skills: '헤어스타일링 | 볼링 | 춤',
    sns: { instagram: '' },
    movieProfileList: [
      {
        title: '두근두근 내인생',
        url: 'https://youtu.be/f4HFSlYNujk',
        imgSrc: '',
        role: '피부과 전문의역',
        year: '',
      },
      {
        title: '판도라',
        url: 'https://youtu.be/iEZEtmfkf0E',
        imgSrc: '',
        role: '마을주민역',
        year: '',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A37%3A52.087Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A8.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A38%3A18.789Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A81.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A38%3A43.589Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A82.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: '두근두근 내인생', year: '', kind: '', role: '피부과 전문의역',
      },
      {
        title: '판도라', year: '', kind: '', role: '마을주민역',
      },
      {
        title: 'jtbc 공작도시', year: '', kind: '', role: '미용실원장역',
      },
      {
        title: '쿠팡플레이 어느날', year: '', kind: '', role: '배심원역',
      },
    ],
  },

  {
    name: '황진희',
    gender: 'female',
    age: '14',
    height: '158',
    weight: '46',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A14%3A22.023Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%B4.jpg',
    birthDate: '2009',
    email: 'kgd2939@hanmail.net',
    phone: '010-7942-0347',
    skills: '보컬 | 댄스 | 피아노',
    sns: { instagram: 'http://www.instagram.com/zzinirang1004' },
    movieProfileList: [
      {
        title: 'TVN 드라마 - 슬기로운 감빵생활',
        url: 'https://youtu.be/3hxJeGl00zI',
        imgSrc: '',
        role: '학생역',
        year: '',
      },
      {
        title: '애플 TV 드라마 - 파친코',
        url: 'https://youtu.be/HOZg-ZdY2tY',
        imgSrc: '',
        role: '국제학교 학생역',
        year: '',
      },
      {
        title: 'SBS 드라마 – 녹두꽃',
        url: 'https://youtu.be/Ai1ude2wDKs',
        imgSrc: '',
        role: '마을아이역',
        year: '',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A14%3A22.023Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%B4.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A15%3A09.404Z-%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AA%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%B42.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A38%3A43.589Z-%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%B2%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A7%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%AE%C3%A1%C2%86%C2%A82.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: 'TVN 드라마 - 슬기로운 감빵생활', year: '', kind: '', role: '학생역',
      },
      {
        title: '애플 TV 드라마 - 파친코', year: '', kind: '', role: '국제학교 학생역',
      },
      {
        title: 'SBS 드라마 - 녹두꽃', year: '', kind: '', role: '마을아이역',
      },
    ],
  },

  {
    name: '최미혜',
    gender: 'female',
    age: '47',
    height: '168',
    weight: '53',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A54%3A33.287Z-%C3%A1%C2%84%C2%8E%C3%A1%C2%85%C2%AC%C3%A1%C2%84%C2%86%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A8.jpg',
    birthDate: '1976',
    email: 'mihye7676@naver.com',
    phone: '',
    skills: '가야금 | 댄스 |',
    sns: { instagram: '' },
    movieProfileList: [
      {
        title: 'SBS드라마 "법쩐"',
        url: 'https://youtu.be/H_dqUlQPOko',
        imgSrc: '',
        role: '전관변호사역',
        year: '2023',
      },
      {
        title: 'MBC드라마 "내일"',
        url: 'https://youtu.be/YBJdI6O2znI',
        imgSrc: '',
        role: '저잣거리사람 역',
        year: '2022',
      },
      {
        title: 'SBS드라마 "모범택시2"',
        url: 'https://youtu.be/fpHbYO7ugNk',
        imgSrc: '',
        role: '부동산강연회 고객역',
        year: '2023',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A54%3A33.287Z-%C3%A1%C2%84%C2%8E%C3%A1%C2%85%C2%AC%C3%A1%C2%84%C2%86%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A8.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A54%3A56.785Z-%C3%A1%C2%84%C2%8E%C3%A1%C2%85%C2%AC%C3%A1%C2%84%C2%86%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A81.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T08%3A55%3A30.964Z-%C3%A1%C2%84%C2%8E%C3%A1%C2%85%C2%AC%C3%A1%C2%84%C2%86%C3%A1%C2%85%C2%B5%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%A82.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      { imgSrc: '', kind: '상업드라마', role: '단역 가나다역' },
    ],
    filmoList: [
      {
        title: 'SBS드라마 "법쩐"', year: '2023', kind: '', role: '전관변호사역',
      },
      {
        title: 'SBS드라마 "모범택시2"',
        year: '2023',
        kind: '',
        role: '국제학교 학생역',
      },
      {
        title: 'MBC드라마 "내일"', year: '2022', kind: '', role: '저잣거리사람역',
      },
    ],
  },

  {
    name: '박슬우',
    gender: 'male',
    age: '5',
    height: '118',
    weight: '22',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T09%3A03%3A10.975Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE.jpg',
    birthDate: '2017',
    email: 'ebboonee7661@naver.com',
    phone: '',
    skills: '율동 | 노래 |',
    sns: { instagram: 'https://www.instagram.com/seulwoostar' },
    movieProfileList: [
      {
        title: '소방관옆경찰서',
        url: 'https://youtu.be/H_dqUlQPOko',
        imgSrc: '',
        role: '',
        year: '2022',
      },
      {
        title: '2022 mbc드라마 금수저',
        url: 'https://youtu.be/KznVkCx1lHA',
        imgSrc: '',
        role: '',
        year: '2022',
      },
    ],
    imageProfileList: [
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T09%3A03%3A10.975Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T09%3A03%3A32.335Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE1.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T09%3A03%3A54.475Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE2.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
      {
        imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-24T09%3A04%3A17.154Z-%C3%A1%C2%84%C2%87%C3%A1%C2%85%C2%A1%C3%A1%C2%86%C2%A8%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%86%C2%AF%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%AE3.jpg',
        kind: '상업드라마',
        role: '단역 가나다역',
      },
    ],
    filmoList: [
      {
        title: 'MBC그남자의기억법', year: '', kind: '', role: '주인공아역',
      },
      {
        title: '단편영화 <선택>', year: '', kind: '', role: '아역주연',
      },
      {
        title: '오로라키즈모델선발대회', year: '', kind: '', role: '은상수상',
      },
    ],
  },
];

export default actors;
