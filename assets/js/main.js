$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('nav').toggleClass('active');
    $('.titlebox').toggleClass('active');
    $('.question').toggleClass('active');
    $('.result-info').toggleClass('active');
    $('.game-result-info').toggleClass('active');

    $('.result16').toggleClass('active');
    $('.result16-1').toggleClass('active');
    $('.game16').toggleClass('active');
  });
});



var num = 1;

var q = {
  1: {
    "q-title": "<span class='q-number'>Q1</span><br>게임을 플레이 할 때. 나는", "type": "EI",
    "A": "친구들과 함께 게임 하는 것이 재미있다.",
    "B": "혼자서 조용히 게임에 몰두 하는 것이 재미있다."
  },


  2: {
    "q-title": "<span class='q-number'>Q2</span><br>일찍 출근을 해야되는데 게임이 너무 재미있다. 나는", "type": "JP",
    "A": "아무리 재미있어도 내일의 나를 위해 아쉽지만 자러 간다.",
    "B": "내일은 내일의 내가 알아서 할 꺼다, 오늘의 나는 즐기자."
  },

  3: {
    "q-title": "<span class='q-number'>Q3</span><br>우연히 재미있어 보이는 게임을 발견했다. 나는", "type": "SN",
    "A": "리뷰를 꼼꼼히 살펴보며, 게임에 대한 정보들을 찾아본다.",
    "B": "리뷰를 신경쓰지 않으며, 재미있어 보이니 플레이 해본다."
  },

  4: {
    "q-title": "<span class='q-number'>Q4</span><br>현질요소가 있는 게임을 할때 나는", "type": "JP",
    "A": "예산을 정하고, 예산을 넘어서면 아무리 좋아보여도 사지 않는다.",
    "B": "예산을 정하지 않는다, 갖고 싶은 것이 있으면 충동적으로 구매한다."
  },

  5: {
    "q-title": "<span class='q-number'>Q5</span><br>친구가 내가 자주하는 게임이 어떤지 묻는다. 나는", "type": "SN",
    "A": '객관적으로 어떠한 게임인지, 게임의 장단점등 상세히 설명해준다.',
    "B": '주관적으로 게임에 대한 나의 느낌을 말해주고, 같이 할 것을 권한다.'
  },

  6: {
    "q-title": "<span class='q-number'>Q6</span><br>PC방에 갈때 나는", "type": "EI",
    "A": "친구들이랑 함께 가서, 다같이 게임 하는 것이 좋다.",
    "B": "혼자서 조용히 게임하는 것이 편한다."
  },

  7: {
    "q-title": "<span class='q-number'>Q7</span><br>게임을 플레이 할 시간을 정할때, 나는 ", "type": "JP",
    "A": "하루의 일과를 끝내고, 내가 계획한 시간에 게임을 플레이 한다.",
    "B": "정해진 시간없이 내가 게임을 하고 싶을때 플레이 한다."
  },

  8: {
    "q-title": "<span class='q-number'>Q8</span><br>팀 게임을 하고 있는데, 팀원이 트롤링을 한다. 나는", "type": "EI",
    "A": "곧 바로 트롤링을 멈추라고 하며 일침을 가한다.",
    "B": "한숨을 쉬며, 참을 만큼 참다가 차단한다."
  },

  9: {
    "q-title": "<span class='q-number'>Q9</span><br>게임을 플레이 할 캐릭터를 고를때, 나는", "type": "TF",
    "A": "외형이 마음에 안들더라도, 가장 강력한 캐릭터를 고른다.",
    "B": "강력한 캐릭터가 아니어도, 외형적으로 가장 마음에 드는 캐릭터를 고른다."
  },

  10: {
    "q-title": "<span class='q-number'>Q10</span><br>전략적 게임을 플레이 할때 나는", "type": "JP",
    "A": "어떠한 플레이를 할지 전략을 세우며 계획적으로 플레이 한다.",
    "B": "그때 그때 상황에 맞추어서 즉흥적으로 유연하게 플레이 한다."
  },

  11: {
    "q-title": "<span class='q-number'>Q11</span><br>요즘 게임 관련 인터넷 방송과 유튜브가 핫하다. 나는", "type": "SN",
    "A": "게임을 직접 플레이 하는 것을 즐기지만, 굳이 방송을 챙겨 보지는 않는다. ",
    "B": "게임을 플레이 하는 만큼, 게임 방송이나 영상들을 보는 것을 즐긴다."
  },

  12: {
    "q-title": "<span class='q-number'>Q12</span><br>게임내에서 소통이 필요로 할때,나는", "type": "EI",
    "A": "음성 채팅이 편하다.",
    "B": "타자로 채팅을 하는 것이 편하다."
  },

  13: {
    "q-title": "<span class='q-number'>Q13</span><br>친구의 게임 점수가 많이 떨어졌다 나는", "type": "TF",
    "A": "플레이에 문제점들을 파악해주고, 객관적인 조언을 해준다.",
    "B": "친구의 억울함을 들어주며, 위로 해준다."
  },

  14: {
    "q-title": "<span class='q-number'>Q14</span><br>난이도가 높은 보스를 클리어 하기위해 나는", "type": "SN",
    "A": "기존에 있는 공략들을 찾아 보며, 최대한 빠르게 클리어 한다.",
    "B": "다양한 시도들을 해보며, 나만의 공략법을 찾아 클리어 한다."
  },

  15: {
    "q-title": "<span class='q-number'>Q15</span><br>랭크 게임을 하는데 점수가 자꾸만 떨어진다 나는", "type": "TF",
    "A": "나의 플레이를 분석하고 나서 다시 플레이 한다.",
    "B": "화가난다. 이 게임은 망겜이 분명하다. 이길 때까지 주구장창 게임을 돌린다."
  },

  16: {
    "q-title": "<span class='q-number'>Q16</span><br>오랜만에 여가 시간이 생겼다. 나는", "type": "EI",
    "A": "친구들과 밖에서 놀거나, 사교 모임에 참석하는 것이 좋다.",
    "B": "집에서 게임, 영화, 인터넷등을 보며 쉬는 것이 좋다."
  },

  17: {
    "q-title": "<span class='q-number'>Q17</span><br>게임을 플레이할 캐릭터를 고를때, 나는", "type": "SN",
    "A": "후반에는 포텐이 떨어지지만, 초중반에 강력한 캐릭터로 스노우볼을 굴린다.",
    "B": "초중반에는 약하지만, 포텐이 높은 후반에 강력한 캐릭터로 왕귀 한다."
  },

  18: {
    "q-title": "<span class='q-number'>Q18</span><br>가입할 게임 길드를 찾을 때, 나는", "type": "TF",
    "A": "랭커를 지향하는 클랜이 좋다.",
    "B": "친목을 지향하는 클랜이 좋다."
  },

  19: {
    "q-title": "<span class='q-number'>Q19</span><br>가입할 길드를 정하기 위해 규칙을 살펴 보고 있다. 나는", "type": "JP",
    "A": "규칙들이 명확하고 엄격한 목표 지향적인 길드가 좋다.",
    "B": "최소한의 규칙으로 자유분방한 분위기의 길드가 좋다."
  },

  20: {
    "q-title": "<span class='q-number'>Q20</span><br>게임을 같이 할 파트너를 고를 때, 나는", "type": "TF",
    "A": "친하지 않더라도, 게임을 잘하며 나를 캐리해줄 파트너와 같이 한다.",
    "B": "게임을 잘 못 하더라도, 나와 친한 파트너와 같이한다."
  },
};


var result = {

  "INTJ": {
    "game": "발더스 게이트 3",
    "desc": "치밀한 전략가",
    "mbti-type": "INTJ",
    "genre1": "추천 장르:",
    "genre": "CRPG, 턴제 전략, 시뮬레이션",
    "game-rec1": "추천 게임:",
    "game-rec": "문명 6, 하츠 오브 아이언, 팀 파이트 매니저, 심시티, 롤토체스",
    "explain1": '<i id=quote>“모든 선택에는 그에 걸맞은 대가가 따른다.”</i> - 발더스 게이트 3<br><br> <span class="highlight">치밀한 전략가</span>는 뛰어난 <span class="highlight">전략적 사고</span>와 <span class="highlight">상상력</span>을 바탕으로 머릿속에서 시뮬레이션을 돌릴 수 있는 뛰어난 안목을 가지고 있습니다. 그리고 게임 디자인부터 플레이까지 자신이 하면 더욱 잘 할 수 있다고 믿습니다. 때로는 다른 유형의 사람들과 함께 게임을 할 때 우월감을 느끼는 동시에 답답해하기도 합니다. 게임 전 공략을 찾아 볼 때가 많으며 <span class="highlight">자신의 플레이 하나 하나에 의미를 부여</span>합니다. 그래서 자신이 세운 전략의 한계와 실용성을 시험해 볼 수 있는 전략게임이 가장 잘 맞습니다.<br><br> 치밀한 전략가에게는 <span class="highlight">발더스 게이트 3</span>를 추천드립니다. 방대한 세계관 속에서 수만 가지의 선택지를 바탕으로 자신만의 서사를 치밀하게 설계하고 이끌어나가는 게임입니다. 단순히 전투뿐만 아니라 대화, 지형지물, 마법의 조합 등 <span class="highlight">압도적인 자유도</span>와 변수가 존재하기 때문에, 정해진 길을 가는 일반적인 RPG와는 차원이 다른 전략적 재미를 느낄 수 있을 것입니다. 당신의 선택 하나 하나가 동료들의 운명과 세상의 <span class="highlight">‘인과관계’</span>를 뒤바꾼다는 것을 기억하세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">하츠 오브 아이언</span>,<span class="highlight">팀 파이트 매니저</span>, <span class="highlight">심시티</span>를, 축구를 좋아하신다면 <span class="highlight">Football Manager 2021</span>을, 카드게임을 좋아하신다면 <span class="highlight">롤토체스</span>를 추천 드립니다.',
    "img": "image/Baldurs.jpg",
    "other-game1": "치밀한 전략가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", "img2": "image/starcraft1.jpg", "img3": "image/lostark.jpg", "img4": "image/final1.jpg", "img5": "image/dongmul.jpg"
  },

  "INTP": {
    "game": "리그 오브 레전드",
    "desc": "논리적인 혁신가",
    "mbti-type": "INTP",
    "genre1": "추천 장르:",
    "genre": "MOBA, 오픈월드, 전략, FPS",
    "game-rec1": "추천 게임:",
    "game-rec": "로스트아크, 스카이림, GTA V, 위쳐 3, 에이펙스 레전드",
    "explain1": '<i id=quote>“논리는 당신을 A에서 B로 안내하지만, 상상력은 당신을 어디로든 데려갈 것이다.”</i> - Albert Einstein<br><br> <span class="highlight">논리적인 혁신가</span>는 끊임없이 분석하고 수만 가지의 변수를 계산하는 것을 즐깁니다. 독특한 관점으로 문제를 해결하며, 남들이 보지 못하는 전략적인 허점을 찾아내는 데 천재적입니다. 흥미로운 주제나 시스템에 사로잡힐 때 누구보다 열정적이며, 복잡한 메커니즘을 가진 게임일수록 이들의 탐구 욕구를 자극합니다.<br><br> 이런 성향을 가진 논리적인 혁신가에게는 <span class="highlight">리그 오브 레전드</span>를 추천합니다. 수백 개의 챔피언과 아이템 빌드, 실시간으로 변하는 전황을 분석하여 승리 플랜을 짜는 과정은 당신에게 최적의 유희가 될 것입니다. 단순한 피지컬 싸움을 넘어 상대의 수를 읽고 판을 짜는 <span class="highlight">뇌지컬의 정점</span>을 경험해보세요. 당신의 분석력이 팀을 승리로 이끄는 가장 강력한 무기가 될 것입니다!<br><br> 이와 비슷한 게임으로는 <span class="highlight">로스트아크</span>, <span class="highlight">스카이림</span>, <span class="highlight">위쳐 3</span>를 추천드리며, 극강의 자유도를 원하신다면 <span class="highlight">GTA V</span>를 추천드립니다.',
    "img": "image/leagueoflegends1.png",
    "other-game1": "논리적인 혁신가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", "img2": "image/starcraft1.jpg", "img3": "image/final1.jpg", "img4": "image/dongmul.jpg", "img5": "image/ringfit1.jpg"
  },

  "ENTJ": {
    "game": "발로란트",
    "explain1": '<i id=quote>“내 사전에 불가능이란 단어는 없다.”</i> - Napoléon Bonaparte<br><br> <span class="highlight">천재적인 사령관</span>은 넘치는 카리스마로 공동의 목표를 달성하기 위해 진두지휘합니다. 또 대를 위한 소의 희생을 아끼지 않는 <span class="highlight">냉철한 판단력</span>을 바탕으로 획기적인 전략을 짤 수 있는 능력을 가졌습니다. 보통 사람이라면 포기할 만한 일이라도 끝까지 포기하지 않는 <span class="highlight">강한 의지의 소유자</span>이기도 합니다. <br><br> 이런 성향을 가진 천재적인 사령관에게는 "<span class="highlight">발로란트</span>"를 추천합니다. 정교한 전술과 요원들의 고유 스킬을 활용하여 승리를 쟁취하는 하이퍼 FPS 게임입니다. 찰나의 순간에 내리는 당신의 오더가 팀의 승패를 결정짓는 핵심이 됩니다. 단순히 사격 실력만을 겨루는 것이 아니라, 상대의 심리를 읽고 자금을 관리하며 스킬을 조합하는 <span class="highlight">판짜기 능력</span>이 당신을 승리로 이끌 것입니다. <span class="highlight">나무를 보기보다 숲을 보는 안목</span>으로 전장을 지배하세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">토탈 워 : 삼국지</span>와 <span class="highlight">에이지 오브 엠파이어 2</span>, <span class="highlight">하츠 오브 아이언</span>을 추천드리며 모바일 게임으로는 <span class="highlight">클래쉬 오브 클랜</span>과 <span class="highlight">라이즈 오브 킹덤</span>을 추천드립니다. 또 팀플레이를 선호하신다면<span class="highlight"> 리그 오브 레전드</span>와 같은 MOBA 게임에서 오더를 담당하는 것도 좋을 것입니다.',

    "desc": "천재적인 사령관",
    "mbti-type": "ENTJ",
    "genre1": "추천 장르:",
    "genre": "실시간 전략게임, MOBA, 시뮬레이션",
    "game-rec1": "추천 게임:",
    "game-rec": "발로란트, 토탈워:삼국, 클래쉬 오브 클랜, 라이즈 오브 킹덤, 리그 오브 레전드 ",
    "img": "image/Valorant.jpg",
    "other-game1": "천재적인 사령관들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/lostark.jpg",
    "img3": "image/final1.jpg",
    "img4": "image/dongmul.jpg",
    "img5": "image/ringfit1.jpg",
  },


  "ENTP": {
    "game": "마인크래프트",
    "desc": "유쾌한 혁명가",
    "mbti-type": "ENTP",
    "genre1": "추천 장르:",
    "genre": "샌드박스, 오픈월드, 파티 게임",
    "game-rec1": "추천 게임:",
    "game-rec": "폴 가이즈, GTA V, 아크 서바이벌, 리그 오브 레전드, 테라리아",
    "explain1": '<i id=quote>“가시밭길이더라도 자주적 사고를 하는 이의 길을 가십시오.”</i> - Thomas J. Watson<br><br> <span class="highlight">유쾌한 혁명가</span>는 고정관념에 얽매이지 않고 새로운 가능성을 실험하는 것을 즐깁니다. 정해진 규칙대로 게임을 하기보다 "이렇게 하면 어떻게 될까?"라는 호기심으로 시스템을 비틀어보는 개척정신이 강합니다. 때로는 엉뚱한 실험으로 팀원들을 당황하게 만들기도 하지만, 그 창의적인 발상이 불가능해 보이던 상황을 반전시키기도 합니다.<br><br> 이런 성향의 유쾌한 혁명가에게는 <span class="highlight">마인크래프트</span>를 추천합니다. 정해진 목적지 없이 무한한 세상에서 당신이 상상하는 모든 것을 구현할 수 있는 게임입니다. 복잡한 회로 기술인 레드스톤을 활용해 자신만의 시스템을 구축하거나, 누구도 생각지 못한 건축물을 지으며 <span class="highlight">창의적 자유</span>를 만끽해보세요. 이 무한한 모래상자 안에서 당신의 혁명적인 아이디어는 곧 법이 됩니다!<br><br> 이와 비슷한 게임으로는 <span class="highlight">폴 가이즈</span>, <span class="highlight">아크 서바이벌</span>, <span class="highlight">GTA V</span>를 추천드립니다. 경쟁을 즐기신다면 <span class="highlight">리그 오브 레전드</span>에서 새로운 메타를 창시해보는 것도 좋습니다.',
    "img": "image/minecraft1.jpg",
    "other-game1": "유쾌한 혁명가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", "img2": "image/starcraft1.jpg", "img3": "image/lostark.jpg", "img4": "image/final1.jpg", "img5": "image/ringfit1.jpg"
  },

  "INFJ": {
    "game": "파이널 판타지",
    "explain1": '<i id=quote>"모든 인간은 창의적인 이타주의의 빛 속을 걸을 것인지, 아니면 파괴적인 이기주의의 노선을 걸을 것인지 중 하나를 선택해야 합니다."</i> - Martin Luther King<br><br> <span class="highlight">선의의 선지자</span>는 다소 내향적이나 감성적입니다. 미래에 대한 상상을 좋아하며 다른 사람의 내면을 꿰뚫어보는 재능이 있습니다. 전 세계에 1% 밖에 없는 인류애 넘치는 유형이지만 <span class="highlight">외유내강</span>(外柔內剛) 겉은 부드러워 보이나 안은 누구보다 강인하며, <span class="highlight">질풍경초</span> (疾風勁草) 자신의 신념 앞에서는 모진 바람에도 꺾이지 않는 풀처럼 끝까지 투쟁합니다.<br><br> 이런 성향을 가진 선의의 선지자에게는 <span class="highlight">파이널 판타지</span>를 추천드립니다. 플레이어와 게임 캐릭터 간의 유대관계가 뛰어난 RPG게임입니다. 비디오 게임에서 가장 많은 OST를 가진 게임으로 기네스에 오르기도 한 만큼 플레이어의 귀를 즐겁게 해주며 탄탄한 스토리와 뛰어난 그래픽은 <span class="highlight">실제 판타지 세계에 온 듯한 느낌</span>을 선사합니다. 파이널 판타지에서 현실에선 구현되기 힘들어 꿈꿔 오기만 했던 당신의 <span class="highlight">이상</span>을 이뤄보세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">메이플 스토리</span>와 <span class="highlight">위쳐 3</span>을 추천드리고, 스토리 요소에 좀 더 집중하고 싶으시다면 <span class="highlight">디트로이트: 비컴 휴먼</span>, <span class="highlight">투 더 문</span>, <span class="highlight">더 라스트 오브 어스</span>를 추천드립니다.',

    "desc": "선의의 선지자",
    "mbti-type": "INFJ",
    "genre1": "추천 장르:",
    "genre": "MMORPG, 시뮬레이션, 어드벤쳐, 인디",
    "game-rec1": "추천 게임:",
    "game-rec": "파이널 판타지, 메이플스토리, 위쳐 3, 디트로이트: 비컴 휴먼, 투더문, 라스트 오브 어스",
    "img": "image/final1.jpg",
    "other-game1": "선의의 선지자들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/dongmul.jpg",
    "img5": "image/ringfit1.jpg",
  },

  "INFP": {
    "game": "스타듀밸리",
    "explain1": '<i id=quote>“논리는 A에서 B로 갈 수 있게 한다. 상상력은 어디든지 갈 수 있게 한다.”</i> - Albert Einstein<br><br> <span class="highlight">낭만적인 이상주의자</span>는 긍정적이고 상냥한 성격의 이타주의자입니다. 겉으로는 조용하지만 타인을 생각하는 <span class="highlight">배려심</span>이 깊어 남을 지배하거나 경쟁하는 것을 좋아하지 않는 반면, 자유로운 것을 좋아해 상상력이 뛰어나고 <span class="highlight">자신이 하는 일에 의미</span>를 찾고자 하는 경향이 강합니다.<br><br> 이런 성향의 낭만적인 이상주의자에게는 귀농 힐링 게임인 <span class="highlight">스타듀밸리</span>를 추천드립니다. 삭막한 도시를 떠나 자신만의 농장을 가꾸며 마을 주민들과 따뜻한 교감을 나눌 수 있는 게임입니다. 타인과의 경쟁보다는 <span class="highlight">자신만의 속도와 방식</span>으로 평화로운 일상을 만들어가며 정서적 안정을 찾을 수 있습니다. 마을 곳곳에 숨겨진 이야기들을 발견하고 소중한 인연들과 <span class="highlight">깊은 유대감</span>을 쌓으며 당신의 감성을 충전해보세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">썸썸 편의점</span>, <span class="highlight">워킹데드</span>, <span class="highlight">디트로이트:비컴 휴먼</span>, <span class="highlight">더 라스트 오브 어스</span>를 추천드립니다. RPG 요소와 좀 더 많은 상호작용을 원하신다면 <span class="highlight">돈 스타브</span>를 추천드립니다.',

    "desc": "낭만적인 이상주의자",
    "mbti-type": "INFP",
    "genre1": "추천 장르:",
    "genre": "어드벤처, 인디, 캐주얼, MMORPG, ",
    "game-rec1": "추천 게임:",
    "game-rec": "스타듀밸리, 언더테일, 스타듀밸리, 썸썸 편의점, 워킹데드",
    "img1": "image/civilization1.jpg",
    "img2": "image/lostark.jpg",
    "img3": "image/final1.jpg",
    "img4": "image/dongmul.jpg",
    "img5": "image/ringfit1.jpg",
  },


  "ENTP": {
    "game": "마인크래프트",
    "desc": "유쾌한 혁명가",
    "mbti-type": "ENTP",
    "genre1": "추천 장르:",
    "genre": "샌드박스, 오픈월드, 파티 게임",
    "game-rec1": "추천 게임:",
    "game-rec": "폴 가이즈, GTA V, 아크 서바이벌, 리그 오브 레전드, 테라리아",
    "explain1": '<i id=quote>“가시밭길이더라도 자주적 사고를 하는 이의 길을 가십시오.”</i> - Thomas J. Watson<br><br> <span class="highlight">유쾌한 혁명가</span>는 고정관념에 얽매이지 않고 새로운 가능성을 실험하는 것을 즐깁니다. 정해진 규칙대로 게임을 하기보다 "이렇게 하면 어떻게 될까?"라는 호기심으로 시스템을 비틀어보는 개척정신이 강합니다. 때로는 엉뚱한 실험으로 팀원들을 당황하게 만들기도 하지만, 그 창의적인 발상이 불가능해 보이던 상황을 반전시키기도 합니다.<br><br> 이런 성향의 유쾌한 혁명가에게는 <span class="highlight">마인크래프트</span>를 추천합니다. 정해진 목적지 없이 무한한 세상에서 당신이 상상하는 모든 것을 구현할 수 있는 게임입니다. 복잡한 회로 기술인 레드스톤을 활용해 자신만의 시스템을 구축하거나, 누구도 생각지 못한 건축물을 지으며 <span class="highlight">창의적 자유</span>를 만끽해보세요. 이 무한한 모래상자 안에서 당신의 혁명적인 아이디어는 곧 법이 됩니다!<br><br> 이와 비슷한 게임으로는 <span class="highlight">폴 가이즈</span>, <span class="highlight">아크 서바이벌</span>, <span class="highlight">GTA V</span>를 추천드립니다. 경쟁을 즐기신다면 <span class="highlight">리그 오브 레전드</span>에서 새로운 메타를 창시해보는 것도 좋습니다.',
    "img": "image/minecraft1.jpg",
    "other-game1": "유쾌한 혁명가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", "img2": "image/starcraft1.jpg", "img3": "image/lostark.jpg", "img4": "image/final1.jpg", "img5": "image/ringfit1.jpg"
  },

  "INFJ": {
    "game": "파이널 판타지",
    "explain1": '<i id=quote>"모든 인간은 창의적인 이타주의의 빛 속을 걸을 것인지, 아니면 파괴적인 이기주의의 노선을 걸을 것인지 중 하나를 선택해야 합니다."</i> - Martin Luther King<br><br> <span class="highlight">선의의 선지자</span>는 다소 내향적이나 감성적입니다. 미래에 대한 상상을 좋아하며 다른 사람의 내면을 꿰뚫어보는 재능이 있습니다. 전 세계에 1% 밖에 없는 인류애 넘치는 유형이지만 <span class="highlight">외유내강</span>(外柔內剛) 겉은 부드러워 보이나 안은 누구보다 강인하며, <span class="highlight">질풍경초</span> (疾風勁草) 자신의 신념 앞에서는 모진 바람에도 꺾이지 않는 풀처럼 끝까지 투쟁합니다.<br><br> 이런 성향을 가진 선의의 선지자에게는 <span class="highlight">파이널 판타지</span>를 추천드립니다. 플레이어와 게임 캐릭터 간의 유대관계가 뛰어난 RPG게임입니다. 비디오 게임에서 가장 많은 OST를 가진 게임으로 기네스에 오르기도 한 만큼 플레이어의 귀를 즐겁게 해주며 탄탄한 스토리와 뛰어난 그래픽은 <span class="highlight">실제 판타지 세계에 온 듯한 느낌</span>을 선사합니다. 파이널 판타지에서 현실에선 구현되기 힘들어 꿈꿔 오기만 했던 당신의 <span class="highlight">이상</span>을 이뤄보세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">메이플 스토리</span>와 <span class="highlight">위쳐 3</span>을 추천드리고, 스토리 요소에 좀 더 집중하고 싶으시다면 <span class="highlight">디트로이트: 비컴 휴먼</span>, <span class="highlight">투 더 문</span>, <span class="highlight">더 라스트 오브 어스</span>를 추천드립니다.',

    "desc": "선의의 선지자",
    "mbti-type": "INFJ",
    "genre1": "추천 장르:",
    "genre": "MMORPG, 시뮬레이션, 어드벤쳐, 인디",
    "game-rec1": "추천 게임:",
    "game-rec": "파이널 판타지, 메이플스토리, 위쳐 3, 디트로이트: 비컴 휴먼, 투더문, 라스트 오브 어스",
    "img": "image/final1.jpg",
    "other-game1": "선의의 선지자들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/dongmul.jpg",
    "img5": "image/ringfit1.jpg",
  },

  "INFP": {
    "game": "스타듀밸리",
    "explain1": '<i id=quote>“논리는 A에서 B로 갈 수 있게 한다. 상상력은 어디든지 갈 수 있게 한다.”</i> - Albert Einstein<br><br> <span class="highlight">낭만적인 이상주의자</span>는 긍정적이고 상냥한 성격의 이타주의자입니다. 겉으로는 조용하지만 타인을 생각하는 <span class="highlight">배려심</span>이 깊어 남을 지배하거나 경쟁하는 것을 좋아하지 않는 반면, 자유로운 것을 좋아해 상상력이 뛰어나고 <span class="highlight">자신이 하는 일에 의미</span>를 찾고자 하는 경향이 강합니다.<br><br> 이런 성향의 낭만적인 이상주의자에게는 귀농 힐링 게임인 <span class="highlight">스타듀밸리</span>를 추천드립니다. 삭막한 도시를 떠나 자신만의 농장을 가꾸며 마을 주민들과 따뜻한 교감을 나눌 수 있는 게임입니다. 타인과의 경쟁보다는 <span class="highlight">자신만의 속도와 방식</span>으로 평화로운 일상을 만들어가며 정서적 안정을 찾을 수 있습니다. 마을 곳곳에 숨겨진 이야기들을 발견하고 소중한 인연들과 <span class="highlight">깊은 유대감</span>을 쌓으며 당신의 감성을 충전해보세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">썸썸 편의점</span>, <span class="highlight">워킹데드</span>, <span class="highlight">디트로이트:비컴 휴먼</span>, <span class="highlight">더 라스트 오브 어스</span>를 추천드립니다. RPG 요소와 좀 더 많은 상호작용을 원하신다면 <span class="highlight">돈 스타브</span>를 추천드립니다.',

    "desc": "낭만적인 이상주의자",
    "mbti-type": "INFP",
    "genre1": "추천 장르:",
    "genre": "어드벤처, 인디, 캐주얼, MMORPG, ",
    "game-rec1": "추천 게임:",
    "game-rec": "스타듀밸리, 언더테일, 스타듀밸리, 썸썸 편의점, 워킹데드, 디트로이트:비컴 휴먼, 더 라스트 오브 어스",
    "img": "image/stardew.png",
    "other-game1": "낭만적인 이상주의자들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/final1.jpg",
    "img4": "image/dongmul.jpg",
    "img5": "image/ringfit1.jpg",
  },

  "ENFJ": {
    "game": "잇 테이크 투",
    "explain1": '<i id=quote>“나는 애정을 받을 엄청난 욕구와, 그것을 베풀 엄청난 욕구를 타고났다.”</i>  - Audrey Hepburn<br><br> <span class="highlight">정의로운 주인공</span>은 인화를 중시하는 진정한 리더입니다. 사람들을 좋아하고 사회성이 뛰어나 항상 주변에 자신을 따르는 사람들에게 둘러 쌓인 <span class="highlight">만화영화의 주인공</span>과 같은 유형입니다. 공감능력이 매우 뛰어나 동정심이 많고 타인의 이야기를 진정으로 들어주지만 정이 너무 많아서 상처를 받고 가슴앓이를 하기도 합니다. 남들에게는 관대하지만 본인에게는 엄격하여 책임감이 강한 스타일이며 여러분야에 관심이 많고 뭐든 직접 해봐야 직성이 풀리기 때문에 <span class="highlight">추진력이 강합니다</span>. 그래서 그룹 내에서 자연스럽게 리더 역할을 맡을 때가 많습니다.<br><br> 이런 성향을 가진 정의로운 주인공에게는 <span class="highlight">잇 테이크 투</span>를 추천드립니다. 두 명의 플레이어가 서로를 믿고 의지하며 난관을 극복해나가는 협동 게임의 정석입니다. 상대방과의 <span class="highlight">긴밀한 소통과 협력</span>이 필수적이며, 갈등을 해결하고 관계를 회복해가는 감동적인 서사는 타인과의 유대를 소중히 여기는 당신에게 최고의 경험을 선사할 것입니다. 뛰어난 공감 능력을 발휘하여 파트너와 함께 <span class="highlight">환상적인 팀워크</span>를 보여주세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">디트로이트:비컴 휴먼</span>, <span class="highlight">더 라스트 오브 어스</span>, <span class="highlight">워킹데드</span>, <span class="highlight">스파이더맨: 뉴 유니버스</span>를 추천드립니다.',
    "desc": "정의로운 주인공",
    "mbti-type": "ENFJ",
    "genre1": "추천 장르:",
    "genre": "eSports, AOS, MMORPG, 소셜, 액션",
    "game-rec1": "추천 게임:",
    "game-rec": "잇 테이크 투, 디트로이트:비컴 휴먼, 더 라스트 오브 어스, 워킹데드, 스파이더맨: 뉴 유니버스",
    "img": "image/takestwo.jpg",
    "other-game1": "정의로운 주인공들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/dongmul.jpg",
  },

  "ENFP": {
    "game": "팰월드",
    "explain1": '<i id=quote>“방황하는 자들이 모두 길을 잃은 것은 아니다.”</i> - J.R.R. Tolkien<br><br> <span class="highlight">즉흥적인 이상가</span>는 사람들과 어울리기를 좋아하며 다양한 분야에 관심이 많습니다. 기존의 것에 얽매이지 않는 <span class="highlight">자유로운 영혼</span>으로 어떠한 환경에서도 쉽게 적응 할 수 있으나 집중력이 부족하고 <span class="highlight">쉽게 질려하는 경향</span>이 있습니다. 또 변화를 두려워하지 않기 때문에 <span class="highlight">위기대처능력</span>이 뛰어납니다. 가끔은 혼자만의 시간을 필요로 해 갑작스럽게 잠수를 타기도 합니다.<br><br> 이런 성향을 가진 즉흥적인 이상가에게는 <span class="highlight">펠월드</span>를 추천드립니다. 드넓은 오픈월드에서 탐험, 건축, 전투, 그리고 수집까지 당신이 원하는 것을 <span class="highlight">그때그때 자유롭게</span> 즐길 수 있는 게임입니다. 정해진 틀 없이 100여 종이 넘는 매력적인 팰들을 포획하고 활용하며, 매 순간 마주하는 새로운 환경에 적응해나가는 재미가 있어 질릴 틈이 없을 것입니다. 변화무쌍한 펠월드에서 당신의 <span class="highlight">즉흥적인 열정</span>을 마음껏 발휘해보세요!<br><br> MMORPG를 선호하신다면 <span class="highlight">메이플스토리</span>를, 위기대처 능력을 시험해보고 싶다면 전략게임인 <span class="highlight">문명VI</span>를, 오픈월드 게임을 선호하신다면 <span class="highlight">GTA V</span>와 <span class="highlight">마인크래프트</span>를, 축구를 좋아 하신다면 <span class="highlight">Football Manager 2021</span>을 추천드립니다.',

    "desc": "즉흥적인 이상가",
    "mbti-type": "ENFP",
    "genre1": "추천 장르:",
    "genre": "MMORPG, eSports, 전략게임",
    "game-rec1": "추천 게임:",
    "game-rec": "팰월드, GTA V, 풋볼 매니저, 문명, 젤다의 전설, 메이플스토리",
    "img": "image/pal.jpg",
    "other-game1": "즉흥적인 이상가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/dongmul.jpg",
  },

  "ISTJ": {
    "game": "메이플스토리",
    "explain1": '<i id=quote>“가치 있는 것을 성취하기 위한 가장 큰 필수 핵심 세 가지는 첫째로, 열심히 일하기; 둘째, 끈기; 셋째, 상식을 갖추는 것이다.”</i> - Thomas A. Edison<br><br> <span class="highlight">소리없는 영웅</span>은 대한민국에 가장 많이 분포되어있는 유형으로, 체계적이고 정확하며 책임감이 뛰어나 맡은 일을 끝까지 해내는 조직에 꼭 필요한 사람입니다. <span class="highlight">집중력과 끈기, 노력</span>이 요구되는 반복적인 작업을 잘 하고 원리원칙주의자로서 <span class="highlight">사실에 근거하여 사고</span>합니다.<br><br> 이런 성향을 가진 소리없는 영웅에게는 <span class="highlight">메이플스토리</span>를 추천드립니다. 성장을 위해 꾸준함이 요구되는 RPG 장르로, 목표를 달성하기 위한 당신의 <span class="highlight">성실함과 인내심</span>이 가장 빛을 발할 수 있는 게임입니다. 수많은 지역을 탐험하며 캐릭터를 육성하고, 치밀한 보스 패턴 분석을 통해 난관을 극복하며 자신만의 스펙을 쌓아가는 성취감을 느껴보세요. <span class="highlight">차근차근 쌓아 올린 노력</span>이 강력한 힘으로 증명될 것입니다!<br><br> 이와 비슷한 게임으로는 극악의 난이도를 자랑하는 <span class="highlight">아이워너비더보시</span>를 추천드리며, 모바일 게임으로는 <span class="highlight">퍼즐 게임류</span>와 <span class="highlight">타워 디펜스류</span>의 게임을 추천드립니다.',

    "desc": "소리 없는 영웅",
    "mbti-type": "ISTJ",
    "genre1": "추천 장르:",
    "genre": "MMORPG, RPG",
    "game-rec1": "추천 게임:",
    "game-rec": "메이플스토리, 아이워너비더보시, 오리와 도깨비불 슈퍼마리오 오디세이, 셀레스트",
    "img": "image/maple.jpg",
    "other-game1": "소리 없는 영웅들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/ringfit1.jpg",

  },

  "ISFJ": {
    "game": "동물의 숲",
    "desc": "진정한 동반자",
    "mbti-type": "ISFJ",
    "genre1": "추천 장르:",
    "genre": "시뮬레이션, 힐링, 소셜, 캐주얼",
    "game-rec1": "추천 게임:",
    "game-rec": "젤다의 전설, 스타듀 밸리, 심즈 4, 투 더 문, 포켓몬",
    "explain1": '<i id=quote>“꽃을 주는 사람의 손에는 항상 향기가 남아 있다.”</i><br><br> <span class="highlight">진정한 동반자</span>는 주변을 따뜻하게 가꾸고 소중한 인연들과의 조화를 중요하게 생각합니다. 갈등과 경쟁보다는 평화로운 환경에서 누군가를 돕고 안정감을 느끼는 것에 행복을 느낍니다. 세심하고 꼼꼼한 성격 덕분에 작은 디테일도 놓치지 않고 자신만의 아늑한 공간을 만들어가는 데 탁월한 재능이 있습니다.<br><br> 이런 성향의 진정한 동반자에게는 <span class="highlight">동물의 숲</span>을 추천드립니다. 경쟁이나 시간 제한 없이 나만의 섬을 가꾸고 이웃 동물들과 교감하며 힐링할 수 있는 게임입니다. 계절에 따라 변하는 풍경을 즐기고, 정성껏 마을을 꾸미며 얻는 소소한 행복은 당신의 마음을 따뜻하게 채워줄 것입니다. <span class="highlight">안정적인 힐링</span>과 온화한 공동체 생활이 기다리는 당신만의 숲으로 떠나보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">젤다의 전설: 야생의 숨결</span>, <span class="highlight">스타듀 밸리</span>를 추천드리며 감성적인 스토리를 원하신다면 <span class="highlight">투 더 문</span>을 추천드립니다.',
    "img": "image/dongmul.jpg",
    "other-game1": "진정한 동반자들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", "img2": "image/starcraft1.jpg", "img3": "image/lostark.jpg", "img4": "image/final1.jpg", "img5": "image/battleground1.png"
  },

  "ESTJ": {
    "game": "배틀그라운드",
    "explain1": '<i id=quote>“야망이 없다면 아무것도 시작하지 못한다. 행하지 않으면 아무것도 끝내지 못한다. 보상은 우리에게 주어지는 것이 아니라 우리가 획득해야 한다.”</i> - Ralph Waldo Emerson<br><br> <span class="highlight">철저한 관리자</span>는 실질적이고 현실감각이 뛰어나 일을 계획하고 추진시키는 능력이 뛰어납니다. <span class="highlight">자기관리가 철저</span>하고 의미없는 시간을 보내는 것을 싫어하기 때문에 게임을 ‘시간낭비’라며 비효율적으로 바라보는 경향이 있어 모든 유형들 중 가장 게임에 시간을 할애하지 않습니다.<br><br> 이런 성향의 철저한 관리자에게는 <span class="highlight">배틀그라운드</span>를 추천드립니다. 100명의 플레이어가 한 게임에 참여하여 마지막까지 살아남는 게임으로, <span class="highlight">전략과 기술</span>이 요구되는 게임입니다. 배틀그라운드에서 <span class="highlight">자신의 전략을 실현</span>해보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">오버워치</span>, <span class="highlight">리그 오브 레전드</span>, <span class="highlight">포켓몬 Go</span>를 추천드리며, 스포츠를 좋아하신다면 <span class="highlight">FIFA 21</span>을, 두뇌 게임을 선호하신다면 2048</span>, <span class="highlight">루모시티</span>를 추천드립니다.',

    "desc": "철저한 관리자",
    "mbti-type": "ESTJ",
    "genre1": "추천 장르:",
    "genre": "스포츠, 액션, 전략",
    "game-rec1": "추천 게임:",
    "game-rec": "배틀 그라운드, Wii Fit, 2048, 루모시티, 포켓몬Go",
    "img": "image/battleground1.png",
    "other-game1": "철저한 관리자들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/dongmul.jpg",

  },

  "ESFJ": {
    "game": "오버워치 2",
    "desc": "활발한 사교가",
    "mbti-type": "ESFJ",
    "genre1": "추천 장르:",
    "genre": "하이퍼 FPS, 팀 기반 액션, 파티 게임",
    "game-rec1": "추천 게임:",
    "game-rec": "리그 오브 레전드, 배틀그라운드, 피파 21, 저스트 댄스, 마리오 파티",
    "explain1": '<i id=quote>“서로 용기를 북돋아 주고 치켜세우며 힘이 되어주세요. 한 사람이 받은 긍정의 에너지가 곧 모든 이에게 전달될 테니까요.”</i> - Deborah Day<br><br> <span class="highlight">활발한 사교가</span>는 마음씨가 따뜻하고 공감 능력이 뛰어난 집단의 분위기 메이커입니다. 혼자 게임을 즐기기보다 여럿이 모여 시끌벅적하게 소통할 때 진정한 에너지를 얻으며, 동료들이 제 실력을 발휘할 수 있도록 돕는 역할에서 큰 보람을 느낍니다. <span class="highlight">타인과의 상호작용</span>을 즐기는 당신은 팀의 결속력을 다지는 최고의 팀플레이어입니다.<br><br> 이런 성향의 활발한 사교가에게는 <span class="highlight">오버워치 2</span>를 추천합니다. 각기 다른 개성을 가진 영웅들이 모여 하나의 목표를 위해 긴밀하게 협력해야 하는 팀 기반 전술 게임입니다. 당신의 뛰어난 소통 능력과 팀을 위하는 마음은 난전 속에서도 승리의 발판이 될 것입니다. 동료들과 음성 채팅으로 전략을 나누고 서로를 격려하며 <span class="highlight">하이텐션의 즐거움</span>을 만끽해보세요! 당신이 리드하는 팀워크는 그 어떤 피지컬보다 강력한 무기가 될 것입니다.<br><br> 이와 비슷한 게임으로는 <span class="highlight">리그 오브 레전드</span>와 <span class="highlight">배틀그라운드</span>를 추천드리며, 파티 분위기를 좋아하신다면 <span class="highlight">저스트 댄스</span>와 <span class="highlight">마리오 파티</span>를 추천드립니다.',
    "img": "image/overwatch.jpg",
    "other-game1": "활발한 사교가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", 
    "img2": "image/starcraft1.jpg", 
    "img3": "image/ringfit1.jpg", 
    "img4": "image/minecraft1.jpg", 
    "img5": "image/battleground1.png"
  },

  "ISTP": {
    "game": "엘든 링",
    "explain1": '<i id=quote>“바람을 조정할 수는 없지만, 돛은 조정할 수 있습니다.”</i> - Thomas S. Monson <br><br> <span class="highlight">도전적인 완벽주의자</span>는 <span class="highlight">객관적</span>이고 <span class="highlight">효율을 중시</span>하는 원리원칙주의자입니다. 언뜻 보면 기계처럼 느껴질 수 있지만 역설적이게도 호기심이 많고 <span class="highlight">창의력</span>이 뛰어나며 <span class="highlight">한계에 도전하는 것</span>을 좋아하기 때문에 장인이 많습니다. 대체로 과묵하고 직설적이어서 사람들이 다가가기 힘들어하기도 합니다. <br><br> 이런 성향의 도전적인 완벽주의자에게는 <span class="highlight">엘든 링</span>을 추천합니다. 압도적인 난이도의 강적들을 상대로 자신만의 전술과 컨트롤을 연마하여 정복해나가는 소울라이크 게임입니다. 수많은 시행착오 끝에 적의 패턴을 완벽히 파악하고, <span class="highlight">자신만의 공략법</span>으로 한계를 돌파하는 과정에서 짜릿한 희열을 느낄 수 있습니다. 정교한 조작과 <span class="highlight">철저한 장인 정신</span>으로 틈새의 땅을 지배해보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">스카이라인</span>, <span class="highlight">마인크래프트</span>를 추천드리며 축구를 좋아하신다면 <span class="highlight">풋볼매니저 2021</span>을, 자신의 한계를 시험해 보고싶다면 <span class="highlight">아이워너비더보시</span>와 <span class="highlight">항아리 게임</span>을 추천드립니다.',
    "desc": "도전적인 완벽주의자",
    "mbti-type": "ISTP",
    "genre1": "추천 장르:",
    "genre": "오픈월드",
    "game-rec1": "추천 게임:",
    "game-rec": "플래닛 코스터, 마인크래프트, 풋볼 매니저, 아이워너비더보시, 항아리 게임",
    "img": "image/eldenring1.png",
    "other-game1": "도전적인 완벽주의자들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/dongmul.jpg",
  },

  "ISFP": {
    "game": "언더테일",
    "explain1": '<i id=quote>“꽃은 옆에 있는 꽃과의 경쟁을 생각하지 않습니다. 꽃은 그저 피어날 뿐입니다.”</i> - Zen Shin<br><br> <span class="highlight">감각적인 예술가</span>는 물 흐르듯이 살며 현재의 삶을 있는 그대로 즐기는 <span class="highlight">YOLO 정신</span>을 가지고 있는 유형입니다. 얽매이는 것을 싫어하고 스스로 <span class="highlight">한계점을 정의하지 않아</span> 무궁무진한 <span class="highlight">가능성</span>이 있습니다. 경쟁보다는 화합과 협업을 선호하는 경향이 있으며 기존의 것을 재해석하고 새로운 것을 발견하는데에 재능이 있습니다.<br><br> 이런 성향의 감각적인 예술가에게는 가장 대표적인 샌드박스 게임인 <span class="highlight">언더테일</span>을 추천드립니다. 샌드박스 게임이란 말그대로 ‘모래 상자’ 즉 놀이터를 의미하며 창작의 자유도가 무한합니다. 정육면체 블록들과 도구들로 자신이 <span class="highlight">상상하고 원하는 것을 무엇이든지 창조</span>해보세요!<br><br> 이와 비슷한 오픈 월드 게임으로는<span class="highlight">GTA V</span>, <span class="highlight">젤다의 전설</span>을 추천드리며 액션을 좋아하신다면 <span class="highlight">데빌 메이 크라이</span>를, 리듬게임을 선호하신다면 <span class="highlight">Just Shape & Beats</span>와 <span class="highlight">DEEMO</span>를 추천드립니다.',

    "desc": "감각적인 예술가",
    "mbti-type": "ISFP",
    "genre1": "추천 장르:",
    "genre": "샌드박스",
    "game-rec1": "추천 게임:",
    "game-rec": "언더테일, GTA, 어쌔신 크리드, 스카이림",
    "img": "image/undertail.jpg",
    "other-game1": "감각적인 예술가들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/battleground1.png",
  },

  "ESTP": {
    "game": "브롤스타즈",
    "desc": "화끈한 도박사",
    "mbti-type": "ESTP",
    "genre1": "추천 장르:",
    "genre": "액션, 캐주얼 슈팅, 대전, 스포츠",
    "game-rec1": "추천 게임:",
    "game-rec": "레프트 4 데드 2, 배틀그라운드, GTA V, 갓 오브 워, 니드 포 스피드",
    "explain1": '<i id=quote>“인생이란 대담한 모험이거나 아무것도 아니다.”</i> - Helen Keller<br><br> <span class="highlight">화끈한 도박사</span>는 지루한 이론보다 직접 부딪히고 느끼는 실전에서 생동감을 얻습니다. 뛰어난 적응력과 유머 감각으로 전장의 분위기를 주도하며, <span class="highlight">즉각적인 반응</span>과 빠른 승부가 주는 아드레날린을 즐깁니다. 복잡한 계산보다는 직관적인 판단으로 승부를 결정짓는 벼랑 끝의 스릴을 즐기는 모험가 타입입니다.<br><br> 이런 성향의 화끈한 도박사에게는 <span class="highlight">브롤스타즈</span>를 추천드립니다. 짧고 강렬한 한 판 승부 속에서 당신의 반사신경과 전투 센스를 마음껏 뽐낼 수 있는 게임입니다. 시시각각 변하는 상황에 맞춰 즉흥적으로 대응하며 상대를 제압하는 쾌감은 당신의 에너지를 폭발시킬 것입니다. <span class="highlight">즉각적인 피드백</span>과 화끈한 타격감이 넘치는 승부의 세계를 경험해보세요!<br><br> 이와 비슷한 게임으로 좀비 스릴러 <span class="highlight">레프트 4 데드 2</span>와 슈팅 게임 <span class="highlight">배틀그라운드</span>를 추천드리며, 레이싱의 속도감을 즐긴다면 <span class="highlight">니드 포 스피드</span>를 추천드립니다.',
    "img": "image/brawl.jpg",
    "other-game1": "화끈한 도박사들의 <br>인생 게임",
    "img1": "image/civilization1.jpg", "img2": "image/starcraft1.jpg", "img3": "image/lostark.jpg", "img4": "image/final1.jpg", "img5": "image/dongmul.jpg"
  },


  "ESFP": {
    "game": "폴 가이즈",
    "explain1": '<i id=quote>“내일은 내일의 태양이 뜬다.”</i> - Margaret Mitchell<br><br> <span class="highlight">최고의 엔터테이너</span>는 사람들의 관심을 한 몸에 받는 것을 즐기며 미래를 생각하기보다 <span class="highlight">매 순간 즐거움</span>을 찾는 단순한 면모를 가지고 있습니다. 계산된 행동이 아닌 순수한 호감으로 사람들에게 다가가기 때문에 주변 사람들에게 인기가 많습니다. 또 경쟁보다는 모두가 어우러져 서로를 응원하고 즐기는 <span class="highlight">밝은 분위기</span>를 좋아합니다.<br><br> 이런 성향을 가진 최고의 엔터테이너에게는 파티게임인 <span class="highlight">폴 가이즈</span>를 추천드립니다. 폴가이즈는 무료 크로스 플랫폼, 대규모 멀티플레이어 파티 로얄 게임입니다. 친구들과 함께 우스꽝스러운 장애물 코스에서 어설프게 경쟁하거나 엄청나게 혼란스러운 나만의 코스를 만들어 커뮤니티와 공유할 수 있습니다. <br><br> 온라인에서 즐길 수 있는 파티형 게임으로는 <span class="highlight">어몽어스</span>와 <span class="highlight">폴가이즈</span>를 추천드리며 가볍게 즐길 수 있는 게임을 선호하신다면 <span class="highlight">슈퍼 스매시 브라더스</span>와 <span class="highlight">마리오 파티</span>를, 슈팅 게임을 좋아하신다면 <span class="highlight">콜 오브 듀티</span>를 추천드립니다.',

    "desc": "최고의 엔터테이너",
    "mbti-type": "ESFP",
    "genre1": "추천 장르:",
    "genre": "파티, 댄스, 리듬, 슈팅",
    "game-rec1": "추천 게임:",
    "game-rec": "어몽어스, 폴가이즈, 슈퍼 스매시 브라더스, 마리오 파티, 콜오브듀티",
    "img": "image/fallguys.jpg",
    "other-game1": "최고의 엔터테이너들의 <br>인생 게임",
    "img1": "image/civilization1.jpg",
    "img2": "image/starcraft1.jpg",
    "img3": "image/lostark.jpg",
    "img4": "image/final1.jpg",
    "img5": "image/ringfit1.jpg",
  },

};

// GitHub Pages 환경에서 이미지 경로 자동 처리
(function fixImagePaths() {
  for (var mbti in result) {
    if (result[mbti].img && !result[mbti].img.startsWith('./')) {
      result[mbti].img = result[mbti].img.replace('image/', './assets/images/');
    }
    for (var i = 1; i <= 5; i++) {
      var imgKey = 'img' + i;
      if (result[mbti][imgKey] && !result[mbti][imgKey].startsWith('./')) {
        result[mbti][imgKey] = result[mbti][imgKey].replace('image/', './assets/images/');
      }
    }
  }
})();

function start() {
  $(".start").hide();
  $(".result16").hide();

  $(".question").show();
  next();

}

$("#A").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  setTimeout(function () {
    $("#" + type).val(parseInt(preValue) + 1);

    next();
  }, 0);
});

$("#B").click(function () {
  setTimeout(function () {

    next();
  }, 0);
});

function gaReload() {
  window.location.reload();
  $(this).scrollTop(0);
}

window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100); //100ms for example
};

/*jshint -W030 */
function next() {
  if (num == 21) {
    var mbti = "", desc = "";
    ($("#EI").val() < 3) ? (mbti += "I", desc += "I") : (mbti += "E", desc += "E");
    ($("#SN").val() < 3) ? (mbti += "N", desc += "N") : (mbti += "S", desc += "S");
    ($("#TF").val() < 3) ? (mbti += "F", desc += "F") : (mbti += "T", desc += "T");
    ($("#JP").val() < 3) ? (mbti += "P", desc += "P") : (mbti += "J", desc += "J");

    // 결과를 localStorage에 저장
    console.log("MBTI 저장:", mbti);
    localStorage.setItem("mbti", mbti);
    localStorage.setItem("ei", $("#EI").val());
    localStorage.setItem("sn", $("#SN").val());
    localStorage.setItem("tf", $("#TF").val());
    localStorage.setItem("jp", $("#JP").val());

    // result 데이터 전체를 localStorage에 저장 (이미지 경로 수정)
    if (result && result[mbti]) {
      var resultDataWithFixedPath = JSON.parse(JSON.stringify(result[mbti]));
      resultDataWithFixedPath.img = resultDataWithFixedPath.img.replace("image/", "./assets/images/");
      resultDataWithFixedPath.img1 = resultDataWithFixedPath.img1.replace("image/", "./assets/images/");
      resultDataWithFixedPath.img2 = resultDataWithFixedPath.img2.replace("image/", "./assets/images/");
      resultDataWithFixedPath.img3 = resultDataWithFixedPath.img3.replace("image/", "./assets/images/");
      resultDataWithFixedPath.img4 = resultDataWithFixedPath.img4.replace("image/", "./assets/images/");
      resultDataWithFixedPath.img5 = resultDataWithFixedPath.img5.replace("image/", "./assets/images/");

      localStorage.setItem("resultData", JSON.stringify(resultDataWithFixedPath));
      console.log("result 데이터 저장됨 (경로 수정 완료)");
    }

    console.log("localStorage에 저장된 MBTI:", localStorage.getItem("mbti"));

    // result.html로 이동
    location.href = "./result.html";
  } else {
    $(".progress-bar").attr('style', 'width: calc(100/20*' + num + '%)');
    $("#q-title").html(q[num]["q-title"]);
    $("#type").val(q[num].type);
    $("#A").text(q[num].A);
    $("#B").text(q[num].B);

    num++;
  }
}



function result16() {
  location.href = './all-results.html';
}



function gameDetail() {
  var mbti = "";
  ($("#EI").val() < 3) ? (mbti += "I", desc += "I") : (mbti += "E", desc += "E");
  ($("#SN").val() < 3) ? (mbti += "N", desc += "N") : (mbti += "S", desc += "S");
  ($("#TF").val() < 3) ? (mbti += "F", desc += "F") : (mbti += "T", desc += "T");
  ($("#JP").val() < 3) ? (mbti += "P", desc += "P") : (mbti += "J", desc += "J");
  if ([mbti] == "INTJ") {
    window.location.href = '/INTJ';
  }
  else if ([mbti] == "INTP") {
    window.location.href = '/INTP';
  }
  else if ([mbti] == "ENTJ") {
    window.location.href = '/ENTJ';
  }
  else if ([mbti] == "ENTP") {
    window.location.href = '/ENTP';
  }
  else if ([mbti] == "INFJ") {
    window.location.href = '/INFJ';
  }
  else if ([mbti] == "INFP") {
    window.location.href = '/INFP';
  }
  else if ([mbti] == "ENFJ") {
    window.location.href = '/ENFJ';
  }
  else if ([mbti] == "ENFP") {
    window.location.href = '/ENFP';
  }
  else if ([mbti] == "ISTJ") {
    window.location.href = '/ISTJ';
  }
  else if ([mbti] == "ISFJ") {
    window.location.href = '/ISFJ';
  }
  else if ([mbti] == "ESTJ") {
    window.location.href = '/ESTJ';
  }
  else if ([mbti] == "ESFJ") {
    window.location.href = '/ESFJ';
  }
  else if ([mbti] == "ISTP") {
    window.location.href = '/ISTP';
  }
  else if ([mbti] == "ISFP") {
    window.location.href = '/ISFP';
  }
  else if ([mbti] == "ESTP") {
    window.location.href = '/ESTP';
  }
  else if ([mbti] == "ESFP") {
    window.location.href = '/ESFP';
  }
}

/* GAME FUNCTIOM */
/* INTJ */
function civilization() {
  window.location.href = '/INTJ/civilization';
}

function heartsofiron() {
  window.location.href = '/INTJ/heartsofiron';
}

function simcity() {
  window.location.href = '/INTJ/simcity';
}

function teamfighttactic() {
  window.location.href = '/INTJ/teamfighttactic';
}

function teamfightmanager() {
  window.location.href = '/INTJ/teamfightmanager';
}

function footballmanager() {
  window.location.href = '/INTJ/footballmanager';
}

function ageofhistory() {
  window.location.href = '/INTJ/ageofhistory';
}

function hearthstone() {
  window.location.href = '/INTJ/hearthstone';
}

function threekingdomINTJ() {
  window.location.href = '/INTJ/threekingdom';
}

function mountandbladeINTJ() {
  window.location.href = '/INTJ/mountandblade';
}

function plagueINTJ() {
  window.location.href = '/INTJ/plague';
}

function stellarisINTJ() {
  window.location.href = '/INTJ/stellaris';
}

/* ENFJ */
function battleground() {
  window.location.href = '/ENFJ/battleground';
}

function overwatch() {
  window.location.href = '/ENFJ/overwatch';
}

function leagueoflegendENFJ() {
  window.location.href = '/ENFJ/leagueoflegend';
}

function animalforest() {
  window.location.href = '/ENFJ/animalforest';
}

function tombraider() {
  window.location.href = '/ENFJ/tombraider';
}

function mafia() {
  window.location.href = '/ENFJ/mafia42';
}

function left4dead2ENFJ() {
  window.location.href = '/ENFJ/left4dead2';
}

function teamfighttacticENFJ() {
  window.location.href = '/ENFJ/teamfighttactic';
}

/* ENFP */
function leagueoflegendENFP() {
  window.location.href = '/ENFP/leagueoflegend';
}

function gtaVENFP() {
  window.location.href = '/ENFP/gtaV';
}

function footballmanagerENFP() {
  window.location.href = '/ENFP/footballmanager';
}

function civilizationENFP() {
  window.location.href = '/ENFP/civiliation';
}

function teamfightmanagerENFP() {
  window.location.href = '/ENFP/teamfightmanager';
}

function zeldaENFP() {
  window.location.href = '/ENFP/zelda';
}

function maplestoryENFP() {
  window.location.href = '/ENFP/maplestory';
}

function gransagaENFP() {
  window.location.href = '/ENFP/gransaga';
}

/* ENTJ */
function starcraft() {
  window.location.href = '/ENTJ/starcraft';
}

function threekingdom() {
  window.location.href = '/ENTJ/threekingdom';
}

function clash() {
  window.location.href = '/ENTJ/clash';
}

function leagueoflegendENTJ() {
  window.location.href = '/ENTJ/leagueoflegend';
}

function teamfightmanagerENTJ() {
  window.location.href = '/ENTJ/teamfightmanager';
}

function riseofkingdom() {
  window.location.href = '/ENTJ/zelda';
}

function companyofheroes() {
  window.location.href = '/ENTJ/companyofheroes';
}

function battlegroundENTJ() {
  window.location.href = '/ENTJ/battleground';
}


/* ENTP */
function fallguys() {
  window.location.href = '/ENTP/fallguys';
}

function arksurvival() {
  window.location.href = '/ENTP/arksurvival';
}

function gtaVENTP() {
  window.location.href = '/ENTP/gtaV';
}

function minecraftENTP() {
  window.location.href = '/ENTP/minecraft';
}

function leagueoflegendENTP() {
  window.location.href = '/ENTP/leagueoflegend';
}

function maplestoryENTP() {
  window.location.href = '/ENTP/maplestory';
}

function eve() {
  window.location.href = '/ENTP/eveonline';
}

function zeldaENTP() {
  window.location.href = '/ENTP/zelda';
}

/* ESFJ */
function leagueoflegendESFJ() {
  window.location.href = '/ESFJ/leagueoflegend';
}

function battlegroundESFJ() {
  window.location.href = '/ESFJ/battleground';
}

function overwatchESFJ() {
  window.location.href = '/ESFJ/overwatch';
}

function fifa21() {
  window.location.href = '/ESFJ/fifa21';
}

function justdanceESFJ() {
  window.location.href = '/ESFJ/justdance';
}

function margiopartyESFJ() {
  window.location.href = '/ESFJ/marioparty';
}

function amongusESFJ() {
  window.location.href = '/ESFJ/amongus';
}

function fallguysESFJ() {
  window.location.href = '/ESFJ/fallguys';
}



/* ESFP */
function justdanceESFP() {
  window.location.href = '/ESFP/fallguys';
}

function amongusESFP() {
  window.location.href = '/ESFP/amongus';
}

function supersmashbrosESFP() {
  window.location.href = '/ESFP/supersmash';
}

function mariopartyESFP() {
  window.location.href = '/ESFP/marioparty';
}

function callofdutyESFP() {
  window.location.href = '/ESFP/callofduty';
}

function fallguysESFP() {
  window.location.href = '/ESFP/fallguys';
}

function mafiaESFP() {
  window.location.href = '/ESFP/mafia42';
}

function humanfallflatESFP() {
  window.location.href = '/ESFP/humanfallflat';
}


/* ESTJ */
function ringfit() {
  window.location.href = '/ESTJ/ringfit';
}

function wii() {
  window.location.href = '/ESTJ/wiifit';
}

function justanceESTJ() {
  window.location.href = '/ESTJ/justdance';
}

function two048() {
  window.location.href = '/ESTJ/2048';
}

function pokemongoESTJ() {
  window.location.href = '/ESTJ/pokemongo';
}

function lumocity() {
  window.location.href = '/ESTJ/lumocity';
}

function civilizationESTJ() {
  window.location.href = '/ESTJ/civilization';
}

function planetcoasterESTJ() {
  window.location.href = '/ESTJ/planetcoaster';
}

/* ESTP */
function left4dead2ESTP() {
  window.location.href = '/ESTP/left4dead2';
}

function gtaVESTP() {
  window.location.href = '/ESTP/gtaV';
}

function godofwar() {
  window.location.href = '/ESTP/godofwar';
}

function needforspeed() {
  window.location.href = '/ESTP/needforspeed';
}

function amnesia() {
  window.location.href = '/ESTP/amnesia';
}

function battlegroundESTP() {
  window.location.href = '/ESTP/battleground';
}

function outlast() {
  window.location.href = '/ESTP/outlast';
}

function deadbydaylight() {
  window.location.href = '/ESTP/deadbydaylight';
}

/* INFJ */
function finalINFJ() {
  window.location.href = '/INFJ/finalfantasy';
}

function witcherINFJ() {
  window.location.href = '/INFJ/witcher3';
}

function detroitINFJ() {
  window.location.href = '/INFJ/detroit';
}

function moonINFJ() {
  window.location.href = '/INFJ/tothemoon';
}

function lastofusINFJ() {
  window.location.href = '/INFJ/lastofus';
}

function zeldaINFJ() {
  window.location.href = '/INFJ/thelegendofzelda';
}

function lifeisstrange() {
  window.location.href = '/INFJ/lifeisstrange';
}

function likedragon() {
  window.location.href = '/INFJ/likedragon';
}

/* INFP */
function moonINFP() {
  window.location.href = '/INFP/tothemoon';
}

function sumsum() {
  window.location.href = '/INFP/sumsum';
}

function detroitINFJ() {
  window.location.href = '/INFP/detroit';
}

function walkingdeadINFP() {
  window.location.href = '/INFP/walkingdead';
}

function lastofusINFP() {
  window.location.href = '/INFP/lastofus';
}

function dontstartveINFP() {
  window.location.href = '/INFP/dontstarve';
}

function tombraiderINFP() {
  window.location.href = '/INFP/tombraider';
}

function bioshock() {
  window.location.href = '/INFP/bioshock';
}

/* INTP */
function skyrimINTP() {
  window.location.href = '/INTP/skyrim';
}

function gtaVINTP() {
  window.location.href = '/INTP/gtav';
}

function minecraftINTP() {
  window.location.href = '/INTP/minecraft';
}

function mapelstoryINTP() {
  window.location.href = '/INTP/maplestory';
}

function witcherINTP() {
  window.location.href = '/INTP/witcher';
}

function leagueoflegendINTP() {
  window.location.href = '/INTP/leagueoflegend';
}

function monsterhunterINTP() {
  window.location.href = '/INTP/monsterhunter';
}

function blackdesert() {
  window.location.href = '/INTP/blackdesert';
}

/* ISFJ */
function zeldaISFJ() {
  window.location.href = '/ISFJ/zelda';
}

function moonISFJ() {
  window.location.href = '/ISFJ/tothemonn';
}

function pokemonISFJ() {
  window.location.href = '/ISFJ/pokemon';
}

function mario() {
  window.location.href = '/ISFJ/mario';
}

function gransagaISFJ() {
  window.location.href = '/ISFJ/gransaga';
}

function teamfighttacticISFJ() {
  window.location.href = '/ISFJ/tft';
}

function stardewvalleyISFJ() {
  window.location.href = '/ISFJ/stardewvalley';
}

function undertaleISFJ() {
  window.location.href = '/ISFJ/undertale';
}

/* ISFP */
function minecraftISFP() {
  window.location.href = '/ISFP/minecraft';
}

function gtaVISFP() {
  window.location.href = '/ISFP/gtaV';
}

function devilmaycry() {
  window.location.href = '/ISFP/devilmaycry';
}

function justshapes() {
  window.location.href = '/ISFP/justshapes';
}

function deemo() {
  window.location.href = '/ISFP/deemo';
}

function zeldaISFP() {
  window.location.href = '/ISFP/zelda';
}

function stardewvalleyISFJ() {
  window.location.href = '/ISFP/stardewvalley';
}

function undertaleISFJ() {
  window.location.href = '/ISFP/undertale';
}


/* ISTJ */
function portal2ISTJ() {
  window.location.href = '/ISTJ/minecraft';
}

function boshy() {
  window.location.href = '/ISTJ/boshy';
}

function ori() {
  window.location.href = '/ISTJ/ori';
}

function marioISTJ() {
  window.location.href = '/ISTJ/mario';
}

function fallguysISTJ() {
  window.location.href = '/ISTJ/fallguys';
}

function celeste() {
  window.location.href = '/ISTJ/celeste';
}

function littlenightmare() {
  window.location.href = '/ISTJ/littlenightmareII';
}

function hollowknight() {
  window.location.href = '/ISTJ/hollowknight';
}

/* ISTP */
function citiesISTP() {
  window.location.href = '/ISTP/skyline';
}

function planetcoasterISTP() {
  window.location.href = '/ISTP/planetcoaster';
}

function minecraftISTP() {
  window.location.href = '/ISTP/minecraft';
}

function footballmanagerISTP() {
  window.location.href = '/ISTP/footballmanager';
}

function boshyISTP() {
  window.location.href = '/ISTP/boshy';
}

function gettingover() {
  window.location.href = '/ISTP/gettingoverit';
}

function planetzoo() {
  window.location.href = '/ISTP/planetzoo';
}

function factorio() {
  window.location.href = '/ISTP/factorio';
}

/* mbti function */

function intj() {
  var mbti = "INTJ";
  if ([mbti] == "INTJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".intj").show();
    $("#intj-img").attr("src", result[mbti].img);
    $("#intj-game").html(result[mbti].game);
    $("#intj-desc").html(result[mbti].desc);
    $("#intj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#intj-genre1").html(result[mbti].genre1);
    $("#intj-genre").html(result[mbti].genre);
    $("#intj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#intj-game-rec").html(result[mbti]["game-rec"]);
    $("#intj-explain1").html(result[mbti].explain1);
    $("#intj-other-game1").html(result[mbti]["other-game1"]);
    $("#intj-img1").attr("src", result[mbti].img1);
    $("#intj-img2").attr("src", result[mbti].img2);
    $("#intj-img3").attr("src", result[mbti].img3);
    $("#intj-img4").attr("src", result[mbti].img4);
    $("#intj-img5").attr("src", result[mbti].img5);
    $("#intj-game").css('color', '#ff3b7f');
    $("#intj-desc").css('color', '#ff3b7f');
    $("#intj-mbti-type").css('color', '#ff87b1');
    $("#intj-genre1").css('color', '#ff3b7f');
    $("#intj-game-rec1").css('color', '#ff3b7f');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ff3b7f');
    $("#intj-other-game1").css('color', '#ff3b7f');
    $(this).scrollTop(0);
  }
}

function intp() {
  var mbti = "INTP";
  if ([mbti] == "INTP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".intp").show();
    $("#intp-img").attr("src", result[mbti].img);
    $("#intp-game").html(result[mbti].game);
    $("#intp-desc").html(result[mbti].desc);
    $("#intp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#intp-genre1").html(result[mbti].genre1);
    $("#intp-genre").html(result[mbti].genre);
    $("#intp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#intp-game-rec").html(result[mbti]["game-rec"]);
    $("#intp-explain1").html(result[mbti].explain1);
    $("#intp-other-game1").html(result[mbti]["other-game1"]);
    $("#intp-img1").attr("src", result[mbti].img1);
    $("#intp-img2").attr("src", result[mbti].img2);
    $("#intp-img3").attr("src", result[mbti].img3);
    $("#intp-img4").attr("src", result[mbti].img4);
    $("#intp-img5").attr("src", result[mbti].img5);
    $("#intp-game").css('color', '#ff3b7f');
    $("#intp-desc").css('color', '#ff3b7f');
    $("#intp-mbti-type").css('color', '#ff87b1');
    $("#intp-genre1").css('color', '#ff3b7f');
    $("#intp-game-rec1").css('color', '#ff3b7f');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ff3b7f');
    $("#intp-other-game1").css('color', '#ff3b7f');
    $(this).scrollTop(0);
  }
}

function entj() {
  var mbti = "ENTJ";
  if ([mbti] == "ENTJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".entj").show();
    $("#entj-img").attr("src", result[mbti].img);
    $("#entj-game").html(result[mbti].game);
    $("#entj-desc").html(result[mbti].desc);
    $("#entj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#entj-genre1").html(result[mbti].genre1);
    $("#entj-genre").html(result[mbti].genre);
    $("#entj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#entj-game-rec").html(result[mbti]["game-rec"]);
    $("#entj-explain1").html(result[mbti].explain1);
    $("#entj-other-game1").html(result[mbti]["other-game1"]);
    $("#entj-img1").attr("src", result[mbti].img1);
    $("#entj-img2").attr("src", result[mbti].img2);
    $("#entj-img3").attr("src", result[mbti].img3);
    $("#entj-img4").attr("src", result[mbti].img4);
    $("#entj-img5").attr("src", result[mbti].img5);
    $("#entj-game").css('color', '#ff3b7f');
    $("#entj-desc").css('color', '#ff3b7f');
    $("#entj-mbti-type").css('color', '#ff87b1');
    $("#entj-genre1").css('color', '#ff3b7f');
    $("#entj-game-rec1").css('color', '#ff3b7f');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ff3b7f');
    $("#entj-other-game1").css('color', '#ff3b7f');
    $(this).scrollTop(0);
  }
}

function entp() {
  var mbti = "ENTP";
  if ([mbti] == "ENTP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".entp").show();
    $("#entp-img").attr("src", result[mbti].img);
    $("#entp-game").html(result[mbti].game);
    $("#entp-desc").html(result[mbti].desc);
    $("#entp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#entp-genre1").html(result[mbti].genre1);
    $("#entp-genre").html(result[mbti].genre);
    $("#entp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#entp-game-rec").html(result[mbti]["game-rec"]);
    $("#entp-explain1").html(result[mbti].explain1);
    $("#entp-other-game1").html(result[mbti]["other-game1"]);
    $("#entp-img1").attr("src", result[mbti].img1);
    $("#entp-img2").attr("src", result[mbti].img2);
    $("#entp-img3").attr("src", result[mbti].img3);
    $("#entp-img4").attr("src", result[mbti].img4);
    $("#entp-img5").attr("src", result[mbti].img5);
    $("#entp-game").css('color', '#ff3b7f');
    $("#entp-desc").css('color', '#ff3b7f');
    $("#entp-mbti-type").css('color', '#ff87b1');
    $("#entp-genre1").css('color', '#ff3b7f');
    $("#entp-game-rec1").css('color', '#ff3b7f');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ff3b7f');
    $("#entp-other-game1").css('color', '#ff3b7f');
    $(this).scrollTop(0);
  }
}

function infj() {
  var mbti = "INFJ";
  if ([mbti] == "INFJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".infj").show();
    $("#infj-img").attr("src", result[mbti].img);
    $("#infj-game").html(result[mbti].game);
    $("#infj-desc").html(result[mbti].desc);
    $("#infj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#infj-genre1").html(result[mbti].genre1);
    $("#infj-genre").html(result[mbti].genre);
    $("#infj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#infj-game-rec").html(result[mbti]["game-rec"]);
    $("#infj-explain1").html(result[mbti].explain1);
    $("#infj-other-game1").html(result[mbti]["other-game1"]);
    $("#infj-img1").attr("src", result[mbti].img1);
    $("#infj-img2").attr("src", result[mbti].img2);
    $("#infj-img3").attr("src", result[mbti].img3);
    $("#infj-img4").attr("src", result[mbti].img4);
    $("#infj-img5").attr("src", result[mbti].img5);
    $("#infj-game").css('color', '#92ff4f');
    $("#infj-desc").css('color', '#a2ff69');
    $("#infj-mbti-type").css('color', '#d1ffb5');
    $("#infj-genre1").css('color', '#a2ff69');
    $("#infj-game-rec1").css('color', '#a2ff69');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#a2ff69');
    $("#infj-other-game1").css('color', '#a2ff69');
    $(this).scrollTop(0);
  }
}

function infp() {
  var mbti = "INFP";
  if ([mbti] == "INFP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".infp").show();
    $("#infp-img").attr("src", result[mbti].img);
    $("#infp-game").html(result[mbti].game);
    $("#infp-desc").html(result[mbti].desc);
    $("#infp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#infp-genre1").html(result[mbti].genre1);
    $("#infp-genre").html(result[mbti].genre);
    $("#infp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#infp-game-rec").html(result[mbti]["game-rec"]);
    $("#infp-explain1").html(result[mbti].explain1);
    $("#infp-other-game1").html(result[mbti]["other-game1"]);
    $("#infp-img1").attr("src", result[mbti].img1);
    $("#infp-img2").attr("src", result[mbti].img2);
    $("#infp-img3").attr("src", result[mbti].img3);
    $("#infp-img4").attr("src", result[mbti].img4);
    $("#infp-img5").attr("src", result[mbti].img5);
    $("#infp-game").css('color', '#92ff4f');
    $("#infp-desc").css('color', '#a2ff69');
    $("#infp-mbti-type").css('color', '#d1ffb5');
    $("#infp-genre1").css('color', '#a2ff69');
    $("#infp-game-rec1").css('color', '#a2ff69');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#a2ff69');
    $("#infp-other-game1").css('color', '#a2ff69');
    $(this).scrollTop(0);
  }
}

function enfj() {
  var mbti = "ENFJ";
  if ([mbti] == "ENFJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".enfj").show();
    $("#enfj-img").attr("src", result[mbti].img);
    $("#enfj-game").html(result[mbti].game);
    $("#enfj-desc").html(result[mbti].desc);
    $("#enfj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#enfj-genre1").html(result[mbti].genre1);
    $("#enfj-genre").html(result[mbti].genre);
    $("#enfj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#enfj-game-rec").html(result[mbti]["game-rec"]);
    $("#enfj-explain1").html(result[mbti].explain1);
    $("#enfj-other-game1").html(result[mbti]["other-game1"]);
    $("#enfj-img1").attr("src", result[mbti].img1);
    $("#enfj-img2").attr("src", result[mbti].img2);
    $("#enfj-img3").attr("src", result[mbti].img3);
    $("#enfj-img4").attr("src", result[mbti].img4);
    $("#enfj-img5").attr("src", result[mbti].img5);
    $("#enfj-game").css('color', '#92ff4f');
    $("#enfj-desc").css('color', '#a2ff69');
    $("#enfj-mbti-type").css('color', '#d1ffb5');
    $("#enfj-genre1").css('color', '#a2ff69');
    $("#enfj-game-rec1").css('color', '#a2ff69');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#a2ff69');
    $("#enfj-other-game1").css('color', '#a2ff69');
    $(this).scrollTop(0);
  }
}

function enfp() {
  var mbti = "ENFP";
  if ([mbti] == "ENFP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".enfp").show();
    $("#enfp-img").attr("src", result[mbti].img);
    $("#enfp-game").html(result[mbti].game);
    $("#enfp-desc").html(result[mbti].desc);
    $("#enfp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#enfp-genre1").html(result[mbti].genre1);
    $("#enfp-genre").html(result[mbti].genre);
    $("#enfp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#enfp-game-rec").html(result[mbti]["game-rec"]);
    $("#enfp-explain1").html(result[mbti].explain1);
    $("#enfp-other-game1").html(result[mbti]["other-game1"]);
    $("#enfp-img1").attr("src", result[mbti].img1);
    $("#enfp-img2").attr("src", result[mbti].img2);
    $("#enfp-img3").attr("src", result[mbti].img3);
    $("#enfp-img4").attr("src", result[mbti].img4);
    $("#enfp-img5").attr("src", result[mbti].img5);
    $("#enfp-game").css('color', '#92ff4f');
    $("#enfp-desc").css('color', '#a2ff69');
    $("#enfp-mbti-type").css('color', '#d1ffb5');
    $("#enfp-genre1").css('color', '#a2ff69');
    $("#enfp-game-rec1").css('color', '#a2ff69');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#a2ff69');
    $("#enfp-other-game1").css('color', '#a2ff69');
    $(this).scrollTop(0);
  }
}

function istj() {
  var mbti = "ISTJ";
  if ([mbti] == "ISTJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".istj").show();
    $("#istj-img").attr("src", result[mbti].img);
    $("#istj-game").html(result[mbti].game);
    $("#istj-desc").html(result[mbti].desc);
    $("#istj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#istj-genre1").html(result[mbti].genre1);
    $("#istj-genre").html(result[mbti].genre);
    $("#istj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#istj-game-rec").html(result[mbti]["game-rec"]);
    $("#istj-explain1").html(result[mbti].explain1);
    $("#istj-other-game1").html(result[mbti]["other-game1"]);
    $("#istj-img1").attr("src", result[mbti].img1);
    $("#istj-img2").attr("src", result[mbti].img2);
    $("#istj-img3").attr("src", result[mbti].img3);
    $("#istj-img4").attr("src", result[mbti].img4);
    $("#istj-img5").attr("src", result[mbti].img5);
    $("#istj-game").css('color', '#70bfff');
    $("#istj-desc").css('color', '#70bfff');
    $("#istj-mbti-type").css('color', '#bde1ff');
    $("#istj-genre1").css('color', '#70bfff');
    $("#istj-game-rec1").css('color', '#70bfff');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#70bfff');
    $("#istj-other-game1").css('color', '#70bfff');
    $(this).scrollTop(0);
  }
}

function isfj() {
  var mbti = "ISFJ";
  if ([mbti] == "ISFJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".isfj").show();
    $("#isfj-img").attr("src", result[mbti].img);
    $("#isfj-game").html(result[mbti].game);
    $("#isfj-desc").html(result[mbti].desc);
    $("#isfj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#isfj-genre1").html(result[mbti].genre1);
    $("#isfj-genre").html(result[mbti].genre);
    $("#isfj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#isfj-game-rec").html(result[mbti]["game-rec"]);
    $("#isfj-explain1").html(result[mbti].explain1);
    $("#isfj-other-game1").html(result[mbti]["other-game1"]);
    $("#isfj-img1").attr("src", result[mbti].img1);
    $("#isfj-img2").attr("src", result[mbti].img2);
    $("#isfj-img3").attr("src", result[mbti].img3);
    $("#isfj-img4").attr("src", result[mbti].img4);
    $("#isfj-img5").attr("src", result[mbti].img5);
    $("#isfj-game").css('color', '#70bfff');
    $("#isfj-desc").css('color', '#70bfff');
    $("#isfj-mbti-type").css('color', '#bde1ff');
    $("#isfj-genre1").css('color', '#70bfff');
    $("#isfj-game-rec1").css('color', '#70bfff');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#70bfff');
    $("#isfj-other-game1").css('color', '#70bfff');
    $(this).scrollTop(0);
  }
}

function estj() {
  var mbti = "ESTJ";
  if ([mbti] == "ESTJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".estj").show();
    $("#estj-img").attr("src", result[mbti].img);
    $("#estj-game").html(result[mbti].game);
    $("#estj-desc").html(result[mbti].desc);
    $("#estj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#estj-genre1").html(result[mbti].genre1);
    $("#estj-genre").html(result[mbti].genre);
    $("#estj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#estj-game-rec").html(result[mbti]["game-rec"]);
    $("#estj-explain1").html(result[mbti].explain1);
    $("#estj-other-game1").html(result[mbti]["other-game1"]);
    $("#estj-img1").attr("src", result[mbti].img1);
    $("#estj-img2").attr("src", result[mbti].img2);
    $("#estj-img3").attr("src", result[mbti].img3);
    $("#estj-img4").attr("src", result[mbti].img4);
    $("#estj-img5").attr("src", result[mbti].img5);
    $("#estj-game").css('color', '#70bfff');
    $("#estj-desc").css('color', '#70bfff');
    $("#estj-mbti-type").css('color', '#bde1ff');
    $("#estj-genre1").css('color', '#70bfff');
    $("#estj-game-rec1").css('color', '#70bfff');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#70bfff');
    $("#estj-other-game1").css('color', '#70bfff');
    $(this).scrollTop(0);
  }
}

function esfj() {
  var mbti = "ESFJ";
  if ([mbti] == "ESFJ") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".esfj").show();
    $("#esfj-img").attr("src", result[mbti].img);
    $("#esfj-game").html(result[mbti].game);
    $("#esfj-desc").html(result[mbti].desc);
    $("#esfj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#esfj-genre1").html(result[mbti].genre1);
    $("#esfj-genre").html(result[mbti].genre);
    $("#esfj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#esfj-game-rec").html(result[mbti]["game-rec"]);
    $("#esfj-explain1").html(result[mbti].explain1);
    $("#esfj-other-game1").html(result[mbti]["other-game1"]);
    $("#esfj-img1").attr("src", result[mbti].img1);
    $("#esfj-img2").attr("src", result[mbti].img2);
    $("#esfj-img3").attr("src", result[mbti].img3);
    $("#esfj-img4").attr("src", result[mbti].img4);
    $("#esfj-img5").attr("src", result[mbti].img5);
    $("#esfj-game").css('color', '#70bfff');
    $("#esfj-desc").css('color', '#70bfff');
    $("#esfj-mbti-type").css('color', '#bde1ff');
    $("#esfj-genre1").css('color', '#70bfff');
    $("#esfj-game-rec1").css('color', '#70bfff');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#70bfff');
    $("#esfj-other-game1").css('color', '#70bfff');
    $(this).scrollTop(0);
  }
}

function istp() {
  var mbti = "ISTP";
  if ([mbti] == "ISTP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".istp").show();
    $("#istp-img").attr("src", result[mbti].img);
    $("#istp-game").html(result[mbti].game);
    $("#istp-desc").html(result[mbti].desc);
    $("#istp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#istp-genre1").html(result[mbti].genre1);
    $("#istp-genre").html(result[mbti].genre);
    $("#istp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#istp-game-rec").html(result[mbti]["game-rec"]);
    $("#istp-explain1").html(result[mbti].explain1);
    $("#istp-other-game1").html(result[mbti]["other-game1"]);
    $("#istp-img1").attr("src", result[mbti].img1);
    $("#istp-img2").attr("src", result[mbti].img2);
    $("#istp-img3").attr("src", result[mbti].img3);
    $("#istp-img4").attr("src", result[mbti].img4);
    $("#istp-img5").attr("src", result[mbti].img5);
    $("#istp-game").css('color', '#ffeb3b');
    $("#istp-desc").css('color', '#ffee54');
    $("#istp-mbti-type").css('color', '#fff387');
    $("#istp-genre1").css('color', '#ffee54');
    $("#istp-game-rec1").css('color', '#ffee54');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ffee54');
    $("#istp-other-game1").css('color', '#ffee54');
    $(this).scrollTop(0);
  }
}

function isfp() {
  var mbti = "ISFP";
  if ([mbti] == "ISFP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".estp").hide();
    $(".esfp").hide();
    $(".isfp").show();
    $("#isfp-img").attr("src", result[mbti].img);
    $("#isfp-game").html(result[mbti].game);
    $("#isfp-desc").html(result[mbti].desc);
    $("#isfp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#isfp-genre1").html(result[mbti].genre1);
    $("#isfp-genre").html(result[mbti].genre);
    $("#isfp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#isfp-game-rec").html(result[mbti]["game-rec"]);
    $("#isfp-explain1").html(result[mbti].explain1);
    $("#isfp-other-game1").html(result[mbti]["other-game1"]);
    $("#isfp-img1").attr("src", result[mbti].img1);
    $("#isfp-img2").attr("src", result[mbti].img2);
    $("#isfp-img3").attr("src", result[mbti].img3);
    $("#isfp-img4").attr("src", result[mbti].img4);
    $("#isfp-img5").attr("src", result[mbti].img5);
    $("#isfp-game").css('color', '#ffeb3b');
    $("#isfp-desc").css('color', '#ffee54');
    $("#isfp-mbti-type").css('color', '#fff387');
    $("#isfp-genre1").css('color', '#ffee54');
    $("#isfp-game-rec1").css('color', '#ffee54');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ffee54');
    $("#isfp-other-game1").css('color', '#ffee54');
    $(this).scrollTop(0);
  }
}

function estp() {
  var mbti = "ESTP";
  if ([mbti] == "ESTP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".esfp").hide();
    $(".estp").show();
    $("#estp-img").attr("src", result[mbti].img);
    $("#estp-game").html(result[mbti].game);
    $("#estp-desc").html(result[mbti].desc);
    $("#estp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#estp-genre1").html(result[mbti].genre1);
    $("#estp-genre").html(result[mbti].genre);
    $("#estp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#estp-game-rec").html(result[mbti]["game-rec"]);
    $("#estp-explain1").html(result[mbti].explain1);
    $("#estp-other-game1").html(result[mbti]["other-game1"]);
    $("#estp-img1").attr("src", result[mbti].img1);
    $("#estp-img2").attr("src", result[mbti].img2);
    $("#estp-img3").attr("src", result[mbti].img3);
    $("#estp-img4").attr("src", result[mbti].img4);
    $("#estp-img5").attr("src", result[mbti].img5);
    $("#estp-game").css('color', '#ffeb3b');
    $("#estp-desc").css('color', '#ffee54');
    $("#estp-mbti-type").css('color', '#fff387');
    $("#estp-genre1").css('color', '#ffee54');
    $("#estp-game-rec1").css('color', '#ffee54');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ffee54');
    $("#estp-other-game1").css('color', '#ffee54');
    $(this).scrollTop(0);
  }
}

function esfp() {
  var mbti = "ESFP";
  if ([mbti] == "ESFP") {
    $(".result16").hide();
    $('.result-info').removeClass('active');
    $(".intp").hide();
    $(".intj").hide();
    $(".entj").hide();
    $(".entp").hide();
    $(".infj").hide();
    $(".infp").hide();
    $(".enfj").hide();
    $(".enfp").hide();
    $(".istj").hide();
    $(".isfj").hide();
    $(".estj").hide();
    $(".esfj").hide();
    $(".istp").hide();
    $(".isfp").hide();
    $(".estp").hide();
    $(".esfp").show();
    $("#esfp-img").attr("src", result[mbti].img);
    $("#esfp-game").html(result[mbti].game);
    $("#esfp-desc").html(result[mbti].desc);
    $("#esfp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#esfp-genre1").html(result[mbti].genre1);
    $("#esfp-genre").html(result[mbti].genre);
    $("#esfp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#esfp-game-rec").html(result[mbti]["game-rec"]);
    $("#esfp-explain1").html(result[mbti].explain1);
    $("#esfp-other-game1").html(result[mbti]["other-game1"]);
    $("#esfp-img1").attr("src", result[mbti].img1);
    $("#esfp-img2").attr("src", result[mbti].img2);
    $("#esfp-img3").attr("src", result[mbti].img3);
    $("#esfp-img4").attr("src", result[mbti].img4);
    $("#esfp-img5").attr("src", result[mbti].img5);
    $("#esfp-game").css('color', '#ffeb3b');
    $("#esfp-desc").css('color', '#ffee54');
    $("#esfp-mbti-type").css('color', '#fff387');
    $("#esfp-genre1").css('color', '#ffee54');
    $("#esfp-game-rec1").css('color', '#ffee54');
    $("#quote").css('color', 'white');
    $(".highlight").css('color', '#ffee54');
    $("#esfp-other-game1").css('color', '#ffee54');
    $(this).scrollTop(0);
  }
}


