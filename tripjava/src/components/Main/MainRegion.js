const regions = [
  { region: '강원특별자치도 강릉시', lat: 37.7227768, lng: 128.8519236 },
  { region: '강원특별자치도 고성군', lat: 38.3773762, lng: 128.3997526 },
  { region: '강원특별자치도 동해시', lat: 37.506773, lng: 129.055604 },
  { region: '강원특별자치도 삼척시', lat: 37.2773968, lng: 129.1220028 },
  { region: '강원특별자치도 속초시', lat: 38.17601, lng: 128.5194615 },
  { region: '강원특별자치도 양구군', lat: 38.178176, lng: 128.001272 },
  { region: '강원특별자치도 양양군', lat: 38.0045219, lng: 128.5950959 },
  { region: '강원특별자치도 영월군', lat: 37.2039413, lng: 128.500649 },
  { region: '강원특별자치도 원주시', lat: 37.3082307, lng: 127.9294889 },
  { region: '강원특별자치도 인제군', lat: 38.0688048, lng: 128.263324 },
  //   { region: '강원특별자치도 정선군', lat: , lng:  },
  //   { region: '강원특별자치도 철원군', lat: , lng:  },
  //   { region: '강원특별자치도 춘천시', lat: , lng:  },
  //   { region: '강원특별자치도 태백시', lat: , lng:  },
  //   { region: '강원특별자치도 평창군', lat: , lng:  },
  //   { region: '강원특별자치도 홍천군', lat: , lng:  },
  //   { region: '강원특별자치도 화천군', lat: , lng:  },
  //   { region: '강원특별자치도 횡성군', lat: , lng:  },
  //   { region: '경기도 가평군',lat: , lng: },
  //   { region: '경기도 고양시',lat:,lng:},
  //   { region: '경기도 과천시',lat:,lng:},
  //   { region: '경기도 광명시',lat:,lng:},
  //   { region: '경기도 광주시',lat:,lng:},
  //   { region: '경기도 구리시',lat:,lng:},
  //   { region: '경기도 군포시',lat:,lng:},
  //   { region: '경기도 김포시',lat:,lng:},
  //   { region: '경기도 남양주시'lat:,lng:},
  //   { region: '경기도 동두천시'lat:,lng:},
  //   { region: '경기도 부천시',lat:,lng:},
  //   { region: '경기도 성남시',lat:,lng:},
  //   { region: '경기도 수원시',lat:,lng:},
  //   { region: '경기도 시흥시',lat:,lng:},
  //   { region: '경기도 안산시',lat:,lng:},
  //   { region: '경기도 안성시',lat:,lng:},
  //   { region: '경기도 안양시',lat:,lng:},
  //   { region: '경기도 양주시',lat:,lng:},
  //   { region: '경기도 양평군',lat:,lng:},
  //   { region: '경기도 여주시',lat:,lng:},
  //   { region: '경기도 연천군',lat:,lng:},
  //   { region: '경기도 오산시',lat:,lng:},
  //   { region: '경기도 용인시',lat:,lng:},
  //   { region: '경기도 의왕시',lat:,lng:},
  //   { region: '경기도 의정부시'lat:,lng:},,
  //   { region: '경기도 이천시',lat:,lng:},
  //   { region: '경기도 파주시',lat:,lng:},
  //   { region: '경기도 평택시',lat:,lng:},
  //   { region: '경기도 포천시',lat:,lng:},
  //   { region: '경기도 하남시',lat:,lng:},
  //   { region: '경기도 화성시',lat:,lng:},
  //   { region: '경상남도 거제시'lat:,lng:},
  //   { region: '경상남도 거창군'lat:,lng:},
  //   { region: '경상남도 고성군'lat:,lng:},
  //   { region: '경상남도 김해시'lat:,lng:},
  //   { region: '경상남도 남해군'lat:,lng:},
  //   { region: '경상남도 밀양시'lat:,lng:},
  //   { region: '경상남도 사천시'lat:,lng:},
  //   { region: '경상남도 산청군'lat:,lng:},
  //   { region: '경상남도 양산시'lat:,lng:},
  //   { region: '경상남도 의령군'lat:,lng:},
  //   { region: '경상남도 진주시'lat:,lng:},
  //   { region: '경상남도 창녕군'lat:,lng:},
  //   { region: '경상남도 창원시'lat:,lng:},
  //   { region: '경상남도 통영시'lat:,lng:},
  //   { region: '경상남도 하동군'lat:,lng:},
  //   { region: '경상남도 함안군'lat:,lng:},
  //   { region: '경상남도 함양군'lat:,lng:},
  //   { region: '경상남도 합천군'lat:,lng:},
  //   { region: '경상북도 경산시'lat:,lng:},
  //   { region: '경상북도 경주시'lat:,lng:},
  //   { region: '경상북도 고령군'lat:,lng:},
  //   { region: '경상북도 구미시'lat:,lng:},
  //   { region: '경상북도 김천시'lat:,lng:},
  //   { region: '경상북도 문경시'lat:,lng:},
  //   { region: '경상북도 봉화군'lat:,lng:},
  //   { region: '경상북도 상주시'lat:,lng:},
  //   { region: '경상북도 성주군'lat:,lng:},
  //   { region: '경상북도 안동시'lat:,lng:},
  //   { region: '경상북도 영덕군'lat:,lng:},
  //   { region: '경상북도 영양군'lat:,lng:},
  //   { region: '경상북도 영주시'lat:,lng:},
  //   { region: '경상북도 영천시'lat:,lng:},
  //   { region: '경상북도 예천군'lat:,lng:},
  //   { region: '경상북도 울릉군'lat:,lng:},
  //   { region: '경상북도 울진군'lat:,lng:},
  //   { region: '경상북도 의성군'lat:,lng:},
  //   { region: '경상북도 청도군'lat:,lng:},
  //   { region: '경상북도 청송군'lat:,lng:},
  //   { region: '경상북도 칠곡군'lat:,lng:},
  //   { region: '경상북도 포항시'lat:,lng:},
  { region: '광주광역시 광산구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 남구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 동구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 북구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 서구', lat: 35.1557358, lng: 126.8354271 },
  { region: '대구광역시 군위군', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 남구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 달서구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 달성군', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 동구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 북구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 서구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 수성구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 중구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대전광역시 대덕구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 동구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 서구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 유성구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 중구', lat: 36.3398175, lng: 127.3940486 },
  { region: '부산광역시 강서구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 금정구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 기장군', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 남구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 동구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 동래구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 부산진구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 북구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 사상구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 사하구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 서구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 수영구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 연제구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 영도구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 중구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 해운대구', lat: 35.2100142, lng: 129.0688702 },
  { region: '서울특별시 강남구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 강동구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 강북구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 강서구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 관악구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 광진구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 구로구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 금천구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 노원구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 도봉구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 동대문구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 동작구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 마포구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 서대문구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 서초구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 성동구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 성북구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 송파구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 양천구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 영등포구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 용산구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 은평구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 종로구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 중구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 중랑구', lat: 37.5518911, lng: 126.9917937 },
  { region: '울산광역시 남구', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 동구', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 북구', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 울주군', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 중구', lat: 35.5537228, lng: 129.2380554 },
  { region: '인천광역시 강화군', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 계양구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 남동구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 동구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 미추홀구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 부평구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 서구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 연수구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 옹진군', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 중구', lat: 37.4562557, lng: 126.7052062 },
  //   {region : '전라남도 강진군',
  //   {region : '전라남도 고흥군',
  //   {region : '전라남도 곡성군',
  //   {region : '전라남도 광양시',
  //   {region : '전라남도 구례군',
  //   {region : '전라남도 나주시',
  //   {region : '전라남도 담양군',
  //   {region : '전라남도 목포시',
  //   {region : '전라남도 무안군',
  //   {region : '전라남도 보성군',
  //   {region : '전라남도 순천시',
  //   {region : '전라남도 신안군',
  //   {region : '전라남도 여수시',
  //   {region : '전라남도 영광군',
  //   {region : '전라남도 영암군',
  //   {region : '전라남도 완도군',
  //   {region : '전라남도 장성군',
  //   {region : '전라남도 장흥군',
  //   {region : '전라남도 진도군',
  //   {region : '전라남도 함평군',
  //   {region : '전라남도 해남군',
  //   {region : '전라남도 화순군',
  //   {region : '전라북도 고창군',
  //   {region : '전라북도 군산시',
  //   {region : '전라북도 김제시',
  //   {region : '전라북도 남원시',
  //   {region : '전라북도 무주군',
  //   {region : '전라북도 부안군',
  //   {region : '전라북도 순창군',
  //   {region : '전라북도 완주군',
  //   {region : '전라북도 익산시',
  //   {region : '전라북도 임실군',
  //   {region : '전라북도 장수군',
  //   {region : '전라북도 전주시',
  //   {region : '전라북도 정읍시',
  //   {region : '전라북도 진안군',
  //  {region : '충청남도 계룡시',
  //  {region : '충청남도 공주시',
  //  {region : '충청남도 금산군',
  //  {region : '충청남도 논산시',
  //  {region : '충청남도 당진시',
  //  {region : '충청남도 보령시',
  //  {region : '충청남도 부여군',
  //  {region : '충청남도 서산시',
  //  {region : '충청남도 서천군',
  //  {region : '충청남도 아산시',
  //  {region : '충청남도 예산군',
  //  {region : '충청남도 천안시',
  //  {region : '충청남도 청양군',
  //  {region : '충청남도 태안군',
  //  {region : '충청남도 홍성군',
  //  {region : '충청북도 괴산군',
  //  {region : '충청북도 단양군',
  //  {region : '충청북도 보은군',
  //  {region : '충청북도 영동군',
  //  {region : '충청북도 옥천군',
  //  {region : '충청북도 음성군',
  //  {region : '충청북도 제천시',
  //  {region : '충청북도 증평군',
  //  {region : '충청북도 진천군',
  //  {region : '충청북도 청주시',
  //  {region : '충청북도 충주시',
  { region: '제주도 제주시', lat: 33.3846216, lng: 126.5534925 },
  { region: '제주도 서귀포시', lat: 33.3846216, lng: 126.5534925 },
];

// const test = [
//   '강원특별자치도 강릉시',
//   '강원특별자치도 고성군',
//   '강원특별자치도 동해시',
//   '강원특별자치도 삼척시',
//   '강원특별자치도 속초시',
//   '강원특별자치도 양구군',
//   '강원특별자치도 양양군',
//   '강원특별자치도 영월군',
//   '강원특별자치도 원주시',
//   '강원특별자치도 인제군',
//   '강원특별자치도 정선군',
//   '강원특별자치도 철원군',
//   '강원특별자치도 춘천시',
//   '강원특별자치도 태백시',
//   '강원특별자치도 평창군',
//   '강원특별자치도 홍천군',
//   '강원특별자치도 화천군',
//   '강원특별자치도 횡성군',
//   '경기도 가평군',
//   '경기도 고양시',
//   '경기도 과천시',
//   '경기도 광명시',
//   '경기도 광주시',
//   '경기도 구리시',
//   '경기도 군포시',
//   '경기도 김포시',
//   '경기도 남양주시',
//   '경기도 동두천시',
//   '경기도 부천시',
//   '경기도 성남시',
//   '경기도 수원시',
//   '경기도 시흥시',
//   '경기도 안산시',
//   '경기도 안성시',
//   '경기도 안양시',
//   '경기도 양주시',
//   '경기도 양평군',
//   '경기도 여주시',
//   '경기도 연천군',
//   '경기도 오산시',
//   '경기도 용인시',
//   '경기도 의왕시',
//   '경기도 의정부시',
//   '경기도 이천시',
//   '경기도 파주시',
//   '경기도 평택시',
//   '경기도 포천시',
//   '경기도 하남시',
//   '경기도 화성시',
//   '경상남도 거제시',
//   '경상남도 거창군',
//   '경상남도 고성군',
//   '경상남도 김해시',
//   '경상남도 남해군',
//   '경상남도 밀양시',
//   '경상남도 사천시',
//   '경상남도 산청군',
//   '경상남도 양산시',
//   '경상남도 의령군',
//   '경상남도 진주시',
//   '경상남도 창녕군',
//   '경상남도 창원시',
//   '경상남도 통영시',
//   '경상남도 하동군',
//   '경상남도 함안군',
//   '경상남도 함양군',
//   '경상남도 합천군',
//   '경상북도 경산시',
//   '경상북도 경주시',
//   '경상북도 고령군',
//   '경상북도 구미시',
//   '경상북도 김천시',
//   '경상북도 문경시',
//   '경상북도 봉화군',
//   '경상북도 상주시',
//   '경상북도 성주군',
//   '경상북도 안동시',
//   '경상북도 영덕군',
//   '경상북도 영양군',
//   '경상북도 영주시',
//   '경상북도 영천시',
//   '경상북도 예천군',
//   '경상북도 울릉군',
//   '경상북도 울진군',
//   '경상북도 의성군',
//   '경상북도 청도군',
//   '경상북도 청송군',
//   '경상북도 칠곡군',
//   '경상북도 포항시',
//   '광주광역시 광산구',
//   '광주광역시 남구',
//   '광주광역시 동구',
//   '광주광역시 북구',
//   '광주광역시 서구',
//   '대구광역시 군위군',
//   '대구광역시 남구',
//   '대구광역시 달서구',
//   '대구광역시 달성군',
//   '대구광역시 동구',
//   '대구광역시 북구',
//   '대구광역시 서구',
//   '대구광역시 수성구',
//   '대구광역시 중구',
//   '대전광역시 대덕구',
//   '대전광역시 동구',
//   '대전광역시 서구',
//   '대전광역시 유성구',
//   '대전광역시 중구',
//   '부산광역시 강서구',
//   '부산광역시 금정구',
//   '부산광역시 기장군',
//   '부산광역시 남구',
//   '부산광역시 동구',
//   '부산광역시 동래구',
//   '부산광역시 부산진구',
//   '부산광역시 북구',
//   '부산광역시 사상구',
//   '부산광역시 사하구',
//   '부산광역시 서구',
//   '부산광역시 수영구',
//   '부산광역시 연제구',
//   '부산광역시 영도구',
//   '부산광역시 중구',
//   '부산광역시 해운대구',
//   '서울특별시 강남구',
//   '서울특별시 강동구',
//   '서울특별시 강북구',
//   '서울특별시 강서구',
//   '서울특별시 관악구',
//   '서울특별시 광진구',
//   '서울특별시 구로구',
//   '서울특별시 금천구',
//   '서울특별시 노원구',
//   '서울특별시 도봉구',
//   '서울특별시 동대문구',
//   '서울특별시 동작구',
//   '서울특별시 마포구',
//   '서울특별시 서대문구',
//   '서울특별시 서초구',
//   '서울특별시 성동구',
//   '서울특별시 성북구',
//   '서울특별시 송파구',
//   '서울특별시 양천구',
//   '서울특별시 영등포구',
//   '서울특별시 용산구',
//   '서울특별시 은평구',
//   '서울특별시 종로구',
//   '서울특별시 중구',
//   '서울특별시 중랑구',
//   '울산광역시 남구',
//   '울산광역시 동구',
//   '울산광역시 북구',
//   '울산광역시 울주군',
//   '울산광역시 중구',
//   '인천광역시 강화군',
//   '인천광역시 계양구',
//   '인천광역시 남동구',
//   '인천광역시 동구',
//   '인천광역시 미추홀구',
//   '인천광역시 부평구',
//   '인천광역시 서구',
//   '인천광역시 연수구',
//   '인천광역시 옹진군',
//   '인천광역시 중구',
//   '전라남도 강진군',
//   '전라남도 고흥군',
//   '전라남도 곡성군',
//   '전라남도 광양시',
//   '전라남도 구례군',
//   '전라남도 나주시',
//   '전라남도 담양군',
//   '전라남도 목포시',
//   '전라남도 무안군',
//   '전라남도 보성군',
//   '전라남도 순천시',
//   '전라남도 신안군',
//   '전라남도 여수시',
//   '전라남도 영광군',
//   '전라남도 영암군',
//   '전라남도 완도군',
//   '전라남도 장성군',
//   '전라남도 장흥군',
//   '전라남도 진도군',
//   '전라남도 함평군',
//   '전라남도 해남군',
//   '전라남도 화순군',
//   '전라북도 고창군',
//   '전라북도 군산시',
//   '전라북도 김제시',
//   '전라북도 남원시',
//   '전라북도 무주군',
//   '전라북도 부안군',
//   '전라북도 순창군',
//   '전라북도 완주군',
//   '전라북도 익산시',
//   '전라북도 임실군',
//   '전라북도 장수군',
//   '전라북도 전주시',
//   '전라북도 정읍시',
//   '전라북도 진안군',
//   '충청남도 계룡시',
//   '충청남도 공주시',
//   '충청남도 금산군',
//   '충청남도 논산시',
//   '충청남도 당진시',
//   '충청남도 보령시',
//   '충청남도 부여군',
//   '충청남도 서산시',
//   '충청남도 서천군',
//   '충청남도 아산시',
//   '충청남도 예산군',
//   '충청남도 천안시',
//   '충청남도 청양군',
//   '충청남도 태안군',
//   '충청남도 홍성군',
//   '충청북도 괴산군',
//   '충청북도 단양군',
//   '충청북도 보은군',
//   '충청북도 영동군',
//   '충청북도 옥천군',
//   '충청북도 음성군',
//   '충청북도 제천시',
//   '충청북도 증평군',
//   '충청북도 진천군',
//   '충청북도 청주시',
//   '충청북도 충주시',
//   '제주도 제주시',
//   '제주도 서귀포시',
// ];

export default regions;
