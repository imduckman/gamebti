$(document).ready(function(){
  $('.menu-toggle').click(function(){
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
  1: {"q-title": "<span class='q-number'>Q1</span><br>게임을 플레이 할 때. 나는", "type": "EI", 
  "A":"친구들과 함께 게임 하는 것이 재미있다.", 
  "B":"혼자서 조용히 게임에 몰두 하는 것이 재미있다."},


  2: {"q-title": "<span class='q-number'>Q2</span><br>일찍 출근을 해야되는데 게임이 너무 재미있다. 나는", "type": "JP", 
  "A":"아무리 재미있어도 내일의 나를 위해 아쉽지만 자러 간다.", 
  "B":"내일은 내일의 내가 알아서 할 꺼다, 오늘의 나는 즐기자."},

  3: {"q-title": "<span class='q-number'>Q3</span><br>우연히 재미있어 보이는 게임을 발견했다. 나는", "type": "SN", 
  "A":"리뷰를 꼼꼼히 살펴보며, 게임에 대한 정보들을 찾아본다.", 
  "B":"리뷰를 신경쓰지 않으며, 재미있어 보이니 플레이 해본다."},

  4: {"q-title": "<span class='q-number'>Q4</span><br>현질요소가 있는 게임을 할때 나는", "type": "JP", 
  "A":"예산을 정하고, 예산을 넘어서면 아무리 좋아보여도 사지 않는다.", 
  "B":"예산을 정하지 않는다, 갖고 싶은 것이 있으면 충동적으로 구매한다."},

  5: {"q-title": "<span class='q-number'>Q5</span><br>친구가 내가 자주하는 게임이 어떤지 묻는다. 나는", "type": "SN", 
  "A":'객관적으로 어떠한 게임인지, 게임의 장단점등 상세히 설명해준다.', 
  "B":'주관적으로 게임에 대한 나의 느낌을 말해주고, 같이 할 것을 권한다.'},

  6: {"q-title": "<span class='q-number'>Q6</span><br>PC방에 갈때 나는", "type": "EI", 
  "A":"친구들이랑 함께 가서, 다같이 게임 하는 것이 좋다.", 
  "B":"혼자서 조용히 게임하는 것이 편한다."},

  7: {"q-title": "<span class='q-number'>Q7</span><br>게임을 플레이 할 시간을 정할때, 나는 ", "type": "JP", 
  "A":"하루의 일과를 끝내고, 내가 계획한 시간에 게임을 플레이 한다.", 
  "B":"정해진 시간없이 내가 게임을 하고 싶을때 플레이 한다."},

  8: {"q-title": "<span class='q-number'>Q8</span><br>팀 게임을 하고 있는데, 팀원이 트롤링을 한다. 나는", "type": "EI", 
  "A":"곧 바로 트롤링을 멈추라고 하며 일침을 가한다.", 
  "B":"한숨을 쉬며, 참을 만큼 참다가 차단한다."},

  9: {"q-title": "<span class='q-number'>Q9</span><br>게임을 플레이 할 캐릭터를 고를때, 나는", "type": "TF", 
  "A":"외형이 마음에 안들더라도, 가장 강력한 캐릭터를 고른다.", 
  "B":"강력한 캐릭터가 아니어도, 외형적으로 가장 마음에 드는 캐릭터를 고른다."},

  10: {"q-title": "<span class='q-number'>Q10</span><br>전략적 게임을 플레이 할때 나는", "type": "JP", 
  "A":"어떠한 플레이를 할지 전략을 세우며 계획적으로 플레이 한다.", 
  "B":"그때 그때 상황에 맞추어서 즉흥적으로 유연하게 플레이 한다."},

  11: {"q-title": "<span class='q-number'>Q11</span><br>요즘 게임 관련 인터넷 방송과 유튜브가 핫하다. 나는", "type": "SN", 
  "A":"게임을 직접 플레이 하는 것을 즐기지만, 굳이 방송을 챙겨 보지는 않는다. ", 
  "B":"게임을 플레이 하는 만큼, 게임 방송이나 영상들을 보는 것을 즐긴다."},

  12: {"q-title": "<span class='q-number'>Q12</span><br>게임내에서 소통이 필요로 할때,나는", "type": "EI", 
  "A":"음성 채팅이 편하다.", 
  "B":"타자로 채팅을 하는 것이 편하다."},

  13: {"q-title": "<span class='q-number'>Q13</span><br>친구의 게임 점수가 많이 떨어졌다 나는", "type": "TF", 
  "A":"플레이에 문제점들을 파악해주고, 객관적인 조언을 해준다.", 
  "B":"친구의 억울함을 들어주며, 위로 해준다."},

  14: {"q-title": "<span class='q-number'>Q14</span><br>난이도가 높은 보스를 클리어 하기위해 나는", "type": "SN", 
  "A":"기존에 있는 공략들을 찾아 보며, 최대한 빠르게 클리어 한다.", 
  "B":"다양한 시도들을 해보며, 나만의 공략법을 찾아 클리어 한다."},

  15: {"q-title": "<span class='q-number'>Q15</span><br>랭크 게임을 하는데 점수가 자꾸만 떨어진다 나는", "type": "TF", 
  "A":"나의 플레이를 분석하고 나서 다시 플레이 한다.", 
  "B":"화가난다. 이 게임은 망겜이 분명하다. 이길 때까지 주구장창 게임을 돌린다."},

  16: {"q-title": "<span class='q-number'>Q16</span><br>오랜만에 여가 시간이 생겼다. 나는", "type": "EI", 
  "A":"친구들과 밖에서 놀거나, 사교 모임에 참석하는 것이 좋다.", 
  "B":"집에서 게임, 영화, 인터넷등을 보며 쉬는 것이 좋다."},

  17: {"q-title": "<span class='q-number'>Q17</span><br>게임을 플레이할 캐릭터를 고를때, 나는", "type": "SN", 
  "A":"후반에는 포텐이 떨어지지만, 초중반에 강력한 캐릭터로 스노우볼을 굴린다.", 
  "B":"초중반에는 약하지만, 포텐이 높은 후반에 강력한 캐릭터로 왕귀 한다."},

  18: {"q-title": "<span class='q-number'>Q18</span><br>가입할 게임 길드를 찾을 때, 나는", "type": "TF", 
  "A":"랭커를 지향하는 클랜이 좋다.", 
  "B":"친목을 지향하는 클랜이 좋다."},

  19: {"q-title": "<span class='q-number'>Q19</span><br>가입할 길드를 정하기 위해 규칙을 살펴 보고 있다. 나는", "type": "JP", 
  "A":"규칙들이 명확하고 엄격한 목표 지향적인 길드가 좋다.", 
  "B":"최소한의 규칙으로 자유분방한 분위기의 길드가 좋다."},

  20: {"q-title": "<span class='q-number'>Q20</span><br>게임을 같이 할 파트너를 고를 때, 나는", "type": "TF", 
  "A":"친하지 않더라도, 게임을 잘하며 나를 캐리해줄 파트너와 같이 한다.", 
  "B":"게임을 잘 못 하더라도, 나와 친한 파트너와 같이한다."},
};


var result = {

  "INTJ": {"game":"문명 VI", 
          "explain1":'<i id=quote>“게임은 흥미로운 선택의 연속이다.”</i> - Sid Mier<br><br> <span class="highlight">치밀한 전략가</span>는 뛰어난 <span class="highlight">전략적 사고</span>와 <span class="highlight">상상력</span>을 바탕으로 머릿속에서 시뮬레이션을 돌릴 수 있는 뛰어난 안목을 가지고 있습니다. 그리고 게임 디자인부터 플레이까지 자신이 하면 더욱 잘 할 수 있다고 믿습니다. 때로는 다른 유형의 사람들과 함께 게임을 할 때 우월감을 느끼는 동시에 답답해하기도 합니다. 게임 전 공략을 찾아 볼 때가 많으며 <span class="highlight">자신의 플레이 하나 하나에 의미를 부여</span>합니다. 그래서 자신이 세운 전략의 한계와 실용성을 시험해 볼 수 있는 전략게임이 가장 잘 맞습니다.<br><br> 치밀한 전략가에게는 <span class="highlight">문명VI</span>를 추천드립니다. 자신의 문명을 선택하고 다양한 전략을 바탕으로 다른 문명들과 경쟁하여 자신의 문명을 승리로 이끄는 게임입니다. 시대와 국가를 바탕으로 수많은 문명들이 등장하며 문명을 발전시키기 위한 100여가지의 테크트리로 <span class="highlight">다양한 승리 조건</span>이 존재하기 때문에 다른 땅따먹기 전략게임들과는 다른 재미를 느낄 수 있을 것입니다. 당신의 선택 하나 하나가 당신의 문명의 <span class="highlight">‘흥망성쇠’</span>를 좌지우지한다는 것을 기억하세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">하츠 오브 아이언</span>,<span class="highlight">팀 파이트 매니저</span>, <span class="highlight">심시티</span>를, 축구를 좋아하신다면 <span class="highlight">Football Manager 2021</span>을, 카드게임을 좋아하신다면 <span class="highlight">롤토체스</span>를 추천 드립니다.',
  
          "desc": "치밀한 전략가",
          "mbti-type":"INTJ",  
          "genre1":"추천 장르:",  
          "genre": "턴제 게임, 전략 시뮬레이션, 카드, MMORPG", 
          "game-rec1":"추천 게임:",  
          "game-rec": "풋볼매니저, 심시티, 하츠오브 아이언, 롤토체스, 팀 파이트 매니저",
          "img": "image/civilization1.jpg",
          "other-game1": "치밀한 전략가들의 <br>인생 게임",
          "img1": "image/starcraft1.jpg",
          "img2": "image/lostark.jpg",
          "img3": "image/final1.jpg",
          "img4": "image/zelda1.jpg",
          "img5": "image/ringfit1.jpg",
  },

  "INTP": {"game":"로스트아크", 
          "explain1":'<i id=quote>“지식을 많이 가지게 된다고 해서 경이감이나 신비감이 사라지는 것은 아니다. 언제나 그 이상의 신비가 존재한다.”</i> - Anais Nin<br><br> <span class="highlight">논리적인 혁신가</span>는 논리적이고 사고적이어서 <span class="highlight">생각이 많은 타입</span>이지만 대체로 설명을 잘하는 편은 아닙니다. 평범함을 거부하며 어떠한 난재를 마주하더라도 이들만의 <span class="highlight">독특한 관점</span>으로 해결합니다. 그래서 이들은 인류 역사의 수많은 철학적/과학적 발전을 이끌기도 했습니다. 흥미로운 주제에 사로잡힐 때에는 누구보다 <span class="highlight">열정적</span>이지만 이로 인해 다른 것들이 전부 하찮아 보일 때도 있습니다.<br><br> 이런 성향을 가진 논리적인 혁신가에게는 <span class="highlight">로스트아크</span>를 추천합니다. 대한민국 게임 대상을 받은 대한민국 최고의 MMORPG 중 하나인 로스트아크는 <span class="highlight">거대한 세계관</span>, 뛰어난 <span class="highlight">시네마틱 연출</span>, 그리고 <span class="highlight">방대한 볼륨</span>을 자랑하는 콘텐츠를 바탕으로 하나의 판타지 영화속에 빠져든 느낌을 선사합니다. 로스트아크에서 당신의 <span class="highlight">특별한 창의력</span>과 <span class="highlight">탐험정신</span>을 마음껏 발휘해보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">GTA V</span> 와 <span class="highlight">스카이림</span> 그리고 <span class="highlight">위쳐3</span>를 추천드리며, 승리에 희열을 느끼는 타입이라면 <span class="highlight">리그오브레전드</span>를 추천드립니다.',
          
          "desc": "논리적인 혁신가",  
          "mbti-type":"INTP",  
          "genre1":"추천 장르:",  
          "genre": "오픈월드, MMORPG, MOBA, 전략", 
          "game-rec1":"추천 게임:", 
          "game-rec": "로스트아크, 스카이림, GTA V, 리그오브레전드, 위쳐3",
          "img": "image/lostark.jpg",
          "other-game1": "논리적인 혁신가들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/final1.jpg",
          "img4": "image/zelda1.jpg",
          "img5": "image/ringfit1.jpg",
  },

  "ENTJ": {"game":"스타크래프트", 
          "explain1":'<i id=quote>“내 사전에 불가능이란 단어는 없다.”</i> - Napoléon Bonaparte<br><br> <span class="highlight">천재적인 사령관</span>은 넘치는 카리스마로 공동의 목표를 달성하기 위해 진두지휘합니다. 또 대를 위한 소의 희생을 아끼지 않는 <span class="highlight">냉철한 판단력</span>을 바탕으로 획기적인 전략을 짤 수 있는 능력을 가졌습니다. 보통 사람이라면 포기할 만한 일이라도 끝까지 포기하지 않는 <span class="highlight">강한 의지의 소유자</span>이기도 합니다. <br><br> 이런 성향을 가진 천재적인 사령관에게는 "<span class="highlight">스타크래프트</span>"를 추천합니다. 실시간 전략 게임(RTS)을 대표하는 게임으로, 게임 역사상 최고의 명작으로 꼽힙니다. 플레이어는 세 가지의 종족중 하나를 선택하여 자원과 유닛, 건물들을 이용해 상대진영을 정복하면서 실시간으로 무엇을 희생시키고 취할 것인지의 선택지에 놓이게 됩니다. <span class="highlight">나무를 보기보다 숲을 보는 안목</span>이 당신을 승리로 이끌 것입니다!<br><br> 이와 비슷한 게임으로는 <span class="highlight">토탈 워 : 삼국지</span>와 <span class="highlight">에이지 오브 엠파이어 2</span>, <span class="highlight">하츠 오브 아이언</span>을 추천드리며 모바일 게임으로는 <span class="highlight">클래쉬 오브 클랜</span>과 <span class="highlight">라이즈 오브 킹덤</span>을 추천드립니다. 또 팀플레이를 선호하신다면<span class="highlight"> 리그 오브 레전드</span>와 같은 MOBA 게임에서 오더를 담당하는 것도 좋을 것입니다.', 
        
          "desc": "천재적인 사령관", 
          "mbti-type":"ENTJ",  
          "genre1":"추천 장르:",
          "genre": "실시간 전략게임, MOBA, 시뮬레이션", 
          "game-rec1":"추천 게임:", 
          "game-rec": "스타크래프트, 토탈워:삼국, 클래쉬 오브 클랜, 라이즈 오브 킹덤, 리그 오브 레전드 ",
          "img": "image/starcraft1.jpg",
          "other-game1": "천재적인 사령관들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/lostark.jpg",
          "img3": "image/final1.jpg",
          "img4": "image/zelda1.jpg",
          "img5": "image/ringfit1.jpg",
  },

  
  "ENTP": {"game":"폴 가이즈", 
          "explain1":'<i id=quote>“가시밭길이더라도 자주적 사고를 하는 이의 길을 가십시오. 비판과 논란에 맞서서 당신의 생각을 당당히 밝히십시오."</i> - Thomas J. Watson<br><br> <span class="highlight">유쾌한 혁명가</span>는 불합리한 전통을 거부하고 기존의 틀을 깨부수곤 합니다. 또 재치 있는 입담과 이를 지탱하는 풍부한 지식을 바탕으로 항상 논쟁의 중심에 있는 경우가 많으며 남들이 별다른 의구심을 품지 않을 때 “왜?” 라고 말할 수 있는 <span class="highlight">개척정신</span>을 가지고 있습니다. 이 때문에 게임 내에서 가장 "<span class="highlight">트롤링</span>"을 많이 하는 유형이지만 창의력이 넘치는 이들이 있기에 새로운 메타들이 나오는 것은 명백한 사실입니다.<br><br> 이런 성향을 가진 유쾌한 혁명가에게는 <span class="highlight">폴가이즈</span>를 추천합니다. 다양한 미니게임들을 모아 서바이벌 형태로 경쟁하여 최후의 1인이 남는 대규모 멀티플레이어 파티게임입니다. 플레이어들끼리 서로 잡고 밀며 방해 할 수 있는 <span class="highlight">합법적 트롤링</span>이 가능한 폴가이즈에서 마음껏 다른 플레이어를 창의적으로 괴롭혀보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">아크 서바이벌</span>, <span class="highlight">GTA V</span>, <span class="highlight">마인 크래프트</span>를 추천드립니다. MOBA 장르를 좋아하신다면 <span class="highlight">리그 오브 레전드</span>에서 뉴메타를 창시하시길 바라며, MMORPG를 좋아하신다면 <span class="highlight">메이플스토리</span> 처럼 유저가 많은 주류 게임을 추천드립니다.', 
      
          "desc": "유쾌한 혁명가", 
          "mbti-type":"ENTP",  
          "genre1":"추천 장르:",
          "genre": "MMOG, MMORPG, MOBA", 
          "game-rec1":"추천 게임:", 
          "game-rec": "폴 가이즈, GTA V, 아크 서바이벌, 리그오브레전드, EVE 온라인",
          "img": "image/fallguys.jpg",
          "other-game1": "유쾌한 혁명가들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/ringfit1.jpg",
  },    

  "INFJ": {"game":"파이널 판타지", 
          "explain1":'<i id=quote>"모든 인간은 창의적인 이타주의의 빛 속을 걸을 것인지, 아니면 파괴적인 이기주의의 노선을 걸을 것인지 중 하나를 선택해야 합니다."</i> - Martin Luther King<br><br> <span class="highlight">선의의 선지자</span>는 다소 내향적이나 감성적입니다. 미래에 대한 상상을 좋아하며 다른 사람의 내면을 꿰뚫어보는 재능이 있습니다. 전 세계에 1% 밖에 없는 인류애 넘치는 유형이지만 <span class="highlight">외유내강</span>(外柔內剛) 겉은 부드러워 보이나 안은 누구보다 강인하며, <span class="highlight">질풍경초</span> (疾風勁草) 자신의 신념 앞에서는 모진 바람에도 꺾이지 않는 풀처럼 끝까지 투쟁합니다.<br><br> 이런 성향을 가진 선의의 선지자에게는 <span class="highlight">파이널 판타지</span>를 추천드립니다. 플레이어와 게임 캐릭터 간의 유대관계가 뛰어난 RPG게임입니다. 비디오 게임에서 가장 많은 OST를 가진 게임으로 기네스에 오르기도 한 만큼 플레이어의 귀를 즐겁게 해주며 탄탄한 스토리와 뛰어난 그래픽은 <span class="highlight">실제 판타지 세계에 온 듯한 느낌</span>을 선사합니다. 파이널 판타지에서 현실에선 구현되기 힘들어 꿈꿔 오기만 했던 당신의 <span class="highlight">이상</span>을 이뤄보세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">메이플 스토리</span>와 <span class="highlight">위쳐 3</span>을 추천드리고, 스토리 요소에 좀 더 집중하고 싶으시다면 <span class="highlight">디트로이트: 비컴 휴먼</span>, <span class="highlight">투 더 문</span>, <span class="highlight">더 라스트 오브 어스</span>를 추천드립니다.', 
    
          "desc": "선의의 선지자", 
          "mbti-type":"INFJ",  
          "genre1":"추천 장르:",
          "genre": "MMORPG, 시뮬레이션, 어드벤쳐, 인디", 
          "game-rec1":"추천 게임:",
          "game-rec": "파이널 판타지, 메이플스토리, 위쳐 3, 디트로이트: 비컴 휴먼, 투더문, 라스트 오브 어스",
          "img": "image/final1.jpg",
          "other-game1": "선의의 선지자들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/zelda1.jpg",
          "img5": "image/ringfit1.jpg",
  },

  "INFP": {"game":"투 더 문", 
          "explain1":'<i id=quote>“논리는 A에서 B로 갈 수 있게 한다. 상상력은 어디든지 갈 수 있게 한다.”</i> - Albert Einstein<br><br> <span class="highlight">낭만적인 이상주의자</span>는 긍정적이고 상냥한 성격의 이타주이자입니다. 겉으로는 조용하지만 타인을 생각하는 <span class="highlight">배려심</span>이 깊어 남을 지배하거나 경쟁하는 것을 좋아하지 않는 반면, 자유로운 것을 좋아해 상상력이 뛰어나고 <span class="highlight">자신이 하는 일에 의미</span>를 찾고자 하는 경향이 강합니다.<br><br> 이런 성향의 낭만적인 이상주의자에게는 인디 어드벤처 게임인 <span class="highlight">투 더 문</span>을 추천드립니다. 플레이어가 직접 개입하고 조작하는 영역은 적지만 높은 완성도의 스토리가 <span class="highlight">마치 한 편의 영화</span> 같을 것입니다. 경쟁류 게임보다는 자신의 페이스에 맞춰 진정으로 게임을 즐기시길 바라며, 투 더 문에서 캐릭터와 유대관계를 쌓으며 <span class="highlight">감성을 자극</span>해보세요!<br><br> 이와 비슷한 게임으로 <span class="highlight">썸썸 편의점</span>, <span class="highlight">워킹데드</span>, <span class="highlight">디트로이트:비컴 휴먼</span>, <span class="highlight">더 라스트 오브 어스</span>를 추천드립니다. RPG 요소와 좀 더 많은 상호작용을 원하신다면 <span class="highlight">돈 스타브</span>를 추천드립니다.',
          
          "desc": "낭만적인 이상주의자", 
          "mbti-type":"INFP",  
          "genre1":"추천 장르:", 
          "genre": "어드벤처, 인디, 캐주얼, MMORPG, ", 
          "game-rec1":"추천 게임:",
          "game-rec": "투 더 문, 언더테일, 스타듀벨리, 썸썸 편의점, 워킹데드, 디트로이트:비컴 휴먼, 더 라스트 오브 어스",
          "img": "image/moon1.jpg",
          "other-game1": "낭만적인 이상주의자들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/final1.jpg",
          "img4": "image/zelda1.jpg",
          "img5": "image/ringfit1.jpg",
  },

  "ENFJ": {"game":"배틀 그라운드", 
          "explain1":'<i id=quote>“나는 애정을 받을 엄청난 욕구와, 그것을 베풀 엄청난 욕구를 타고났다.”</i>  - Audrey Hepburn<br><br> <span class="highlight">정의로운 주인공</span>은 인화를 중시하는 진정한 리더입니다. 사람들을 좋아하고 사회성이 뛰어나 항상 주변에 자신을 따르는 사람들에게 둘러 쌓인 <span class="highlight">만화영화의 주인공</span>과 같은 유형입니다. 공감능력이 매우 뛰어나 동정심이 많고 타인의 이야기를 진정으로 들어주지만 정이 너무 많아서 상처를 받고 가슴앓이를 하기도 합니다. 남들에게는 관대하지만 본인에게는 엄격하여 책임감이 강한 스타일이며 여러분야에 관심이 많고 뭐든 직접 해봐야 직성이 풀리기 때문에 <span class="highlight">추진력이 강합니다</span>. 그래서 그룹 내에서 자연스럽게 리더 역할을 맡을 때가 많습니다.<br><br> 이런 성향을 가진 정의로운 주인공에게는 <span class="highlight">배틀그라운드</span>를 추천드립니다. 일반 FPS 게임과는 다르게 서바이벌 형태로 진행되는데 100명의 플레이어 중 최후의 1인이 남습니다. 싱글 플레이 보다는 듀오나 스쿼드를 추천드리며 <span class="highlight">다양한 전략과 끊임없는 소통, 협동심을 발휘하여</span> 최후의 1팀이 되어보세요!<br><br> 이와 비슷한 게임으로 팀플레이를 할 수 있는 게임인 <span class="highlight">오버워치</span>, <span class="highlight">리그오브레전드</span>, <span class="highlight">마피아게임</span>을 추천드립니다. <span class="highlight">리그오브레전드</span>에서의 포지션은 오더 역할을 담당하는 <span class="highlight">정글과 서폿</span>을 추천드리며 MMORPG를 선호하신다면 <span class="highlight">메이플 스토리</span>와 <span class="highlight">동물의 숲</span>을 추천드립니다.', 
          
          "desc": "정의로운 주인공", 
          "mbti-type":"ENFJ",  
          "genre1":"추천 장르:", 
          "genre": "eSports, AOS, MMORPG, 소셜, 액션", 
          "game-rec1":"추천 게임:",
          "game-rec": "배틀그라운드, 오버워치, 리그오브레전드, 마피아 게임, 동물의 숲, 툼 레이더",
          "img": "image/battleground1.jpg",
          "other-game1": "정의로운 주인공들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/zelda1.jpg",
  },

  "ENFP": {"game":"리그 오브 레전드", 
          "explain1":'<i id=quote>“방황하는 자들이 모두 길을 잃은 것은 아니다.”</i> - J.R.R. Tolkien<br><br> <span class="highlight">즉흥적인 이상가</span>는 사람들과 어울리기를 좋아하며 다양한 분야에 관심이 많습니다. 기존의 것에 얽매이지 않는 <span class="highlight">자유로운 영혼</span>으로 어떠한 환경에서도 쉽게 적응 할 수 있으나 집중력이 부족하고 <span class="highlight">쉽게 질려하는 경향</span>이 있습니다. 또 변화를 두려워하지 않기 때문에 <span class="highlight">위기대처능력</span>이 뛰어납니다. 가끔은 혼자만의 시간을 필요로 해 갑작스럽게 잠수를 타기도 합니다.<br><br> 이런 성향을 가진 즉흥적인 이상가에게는 <span class="highlight">리그 오브 레전드를 추천</span>드립니다. 다른 사람들과 함께 즐기는 <span class="highlight">멀티플레이게임</span>이며 매 게임마다 다른 챔피언을 <span class="highlight">자유롭게 선택</span>할 수 있고 그 수가 150여개나 되기 때문에 질릴 틈이 없을 것입니다. 변화가 끊이지 않는 리그 오브 레전드에서 당신의 즉흥적인 열정을 채워보세요!<br><br> MMORPG를 선호하신다면 <span class="highlight">메이플스토리</span>를, 위기대처 능력을 시험해보고 싶다면 전략게임인 <span class="highlight">문명VI</span>를, 오픈월드 게임을 선호하신다면 <span class="highlight">GTA V</span>와 <span class="highlight">마인크래프트</span>를, 축구를 좋아 하신다면 <span class="highlight">Football Manager 2021</span>을 추천드립니다.', 

          "desc": "즉흥적인 이상가",          
          "mbti-type":"ENFP",  
          "genre1":"추천 장르:", 
          "genre": "MMORPG, eSports, 전략게임",
          "game-rec1":"추천 게임:", 
          "game-rec": "리그오브레전드, GTA V, 풋볼 매니저, 문명, 젤다의 전설, 메이플스토리",
          "img": "image/leagueoflegends1.jpg",
          "other-game1": "즉흥적인 이상가들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/zelda1.jpg",
  },

  "ISTJ": {"game": "포탈 2", 
          "explain1":'<i id=quote>“가치 있는 것을 성취하기 위한 가장 큰 필수 핵심 세 가지는 첫째로, 열심히 일하기; 둘째, 끈기; 셋째, 상식을 갖추는 것이다.”</i> - Thomas A. Edison<br><br>  <span class="highlight">소리없는 영웅</span>은 대한민국에 가장 많이 분포되어있는 유형으로, 체계적이고 정확하며 책임감이 뛰어나 맡은 일을 끝까지 해내는 조직에 꼭 필요한 사람입니다. <span class="highlight">집중력과 끈기, 노력</span>이 요구되는 반복적인 작업을 잘 하고 원리원칙주의자로서 <span class="highlight">사실에 근거하여 사고</span>합니다.<br><br> 이런 성향을 가진 소리없는 영웅에게는 <span class="highlight">포탈2</span>를 추천드립니다. 자칫 보면 단순하고 쉬워보이는 플랫폼 장르이지만 중력이나 관성과 같은 물리학적인 요소가 접목되어 있어 장애물을 효율적으로 통과하기 위한 <span class="highlight">논리적 사고</span>가 필요합니다. <span class="highlight">미로속에서 포탈을 생성</span>하며 갈수록 어려워지는 장애물을 통과하고 목적지에 도달해보세요!<br><br> 이와 비슷한 게임으로는 극악의 난이도를 자랑하는 <span class="highlight">아이워너비더보시</span>를 추천드리며, 모바일 게임으로는 <span class="highlight">퍼즐 게임류</span>와 <span class="highlight">타워 디펜스류</span>의 게임을 추천드립니다.',

          "desc": "소리 없는 영웅",
          "mbti-type":"ISTJ",  
          "genre1":"추천 장르:", 
          "genre": "플랫폼, 퍼즐, 어드벤처", 
          "game-rec1":"추천 게임:", 
          "game-rec": "포탈2, 아이워너비더보시, 오리와 도깨비불 슈퍼마리오 오디세이, 셀레스트",  
          "img": "image/portal21.jpg",
          "other-game1": "소리 없는 영웅들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/ringfit1.jpg",
  
  },

  "ISFJ": {"game":"젤다의 전설", 
          "explain1":'<i id=quote>"아직 이 세상엔 선이 남아 있다는 믿음이겠죠. 그리고 그건 싸울 가치가 있는 것이고요."</i> - Sam(반지의 제왕)<br><br> <span class="highlight">진정한 동반자</span>는 주변사람을 한결같이 아껴주는 사람입니다. <span class="highlight">상대방의 이야기에 경청</span>하며 은혜를 잊지 않는 의리파이지만 <span class="highlight">본인의 고민이나 감정을 잘 드러내지 않아</span> 남 모르게 스트레스를 받곤 합니다. 소중한 사람을 위해서라면 희생을 마다하지 않으며 혹여 자신이 피해를 입더라도 갈등을 피하기 위해 양보를 많이 합니다.<br><br> 이런 성향을 가진 진정한 동반자에게는 <span class="highlight">젤다의 전설:야생의 숨결</span>을 추천드립니다. “에이 설마 이런 것도 될까?” 하는 웬만한 것들은 다 될 정도로 자유도가 굉장히 높아 <span class="highlight">직접 모험을 떠나는 것 같은 몰입감</span>이 특징입니다. 젤다의 전설:야생의 숨결에서 경쟁에 스트레스 받지 않고 본인만의 페이스로 <span class="highlight">자유로운 모험</span>을 즐겨보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">마리오 오디세이</span>를, 모바일 게임으로는 <span class="highlight">그랑사가</span>를 추천드립니다. 카드 게임을 좋아하신다면 <span class="highlight">롤토체스</span>와 <span class="highlight">하스스톤</span>을 추천드리며 스토리에 더욱 몰입하고 싶으시다면 <span class="highlight">투 더 문</span>을 추천드립니다.', 

          "desc": "진정한 동반자", 
          "mbti-type":"ISFJ",  
          "genre1":"추천 장르:", 
          "genre": "어드벤처, 캐쥬얼, 퍼즐, RPG, 싱글플레이", 
          "game-rec1":"추천 게임:", 
          "game-rec": "젤다의 전설: 야생의 숨결, 포켓몬, 원신, 롤토체스, 투 더 문",
          "img": "image/zelda1.jpg",
          "other-game1": "진정한 동반자들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/battleground1.jpg",
  },      

  "ESTJ": {"game":"링 피트 어드벤처", 
          "explain1":'<i id=quote>“야망이 없다면 아무것도 시작하지 못한다. 행하지 않으면 아무것도 끝내지 못한다. 보상은 우리에게 주어지는 것이 아니라 우리가 획득해야 한다.”</i> - Ralph Waldo Emerson<br><br> <span class="highlight">철저한 관리자</span>는 실질적이고 현실감각이 뛰어나 일을 계획하고 추진시키는 능력이 뛰어납니다. <span class="highlight">자기관리가 철저</span>하고 의미없는 시간을 보내는 것을 싫어하기 때문에 게임을 ‘시간낭비’라며 비효율적으로 바라보는 경향이 있어 모든 유형들 중 가장 게임에 시간을 할애하지 않습니다.<br><br> 이런 성향의 철저한 관리자에게는 닌텐도의 <span class="highlight">링 피트 어드벤처</span>를 추천드립니다. ‘링콘’이라는 컨트롤러를 통해 신체부위의 움직임을 게임에 반영하여 실제로 걷거나 뛰어서 플레이하는 게임으로서 미니게임 뿐만 아니라 <span class="highlight">운동도 할 수 있는 1석2조의 게임</span>입니다. 링 피트 어드벤처에서 <span class="highlight">40종류 이상의 운동 동작</span>들을 게임으로 즐겨보세요!<br><br> 이와 비슷한 피트니스 게임으로는 <span class="highlight">저스트 댄스</span>, <span class="highlight">피트니스 복싱</span>을, 슈팅게임을 좋아하신다면 <span class="highlight">발로란트</span>를 추천 합니다. 모바일 게임으로는 <span class="highlight">포켓몬 Go</span>를, 두뇌 게임을 선호하신다면 2048</span>, <span class="highlight">루모시티</span>를 추천드립니다.',
          
          "desc": "철저한 관리자",
          "mbti-type":"ESTJ",  
          "genre1":"추천 장르:",  
          "genre": "스포츠, 액션, 전략", 
          "game-rec1":"추천 게임:", 
          "game-rec": "링 피트 어드벤처, Wii Fit, 2048, 루모시티, 포켓몬Go",
          "img": "image/ringfit1.jpg",
          "other-game1": "철저한 관리자들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/zelda1.jpg",
          
  },

  "ESFJ": {"game":"리그 오브 레전드", 
          "explain1":'<i id=quote>“서로 용기를 북돋아 주고 치켜세우며 힘이 되어주세요. 한 사람이 받은 긍정의 에너지가 곧 모든 이에게 전달될 테니까요.”</i> - Deborah Day<br><br> <span class="highlight">활발한 사교가</span>는 마음씨가 따뜻하고 공감능력이 뛰어납니다. <span class="highlight">모든 유형들 중 가장 외향적</span>이고 사교성이 뛰어나 <span class="highlight">인싸중에 인싸로</span> 인기가 많습니다. 혼자 있을 때보다 여럿이 같이 있을 때 에너지를 얻는 유형입니다. 개인의 이익보다 집단의 이익을 중요하게 생각하며 <span class="highlight">타인의 시선에 매우 민감</span>해 SNS를 수시로 확인하곤 합니다.<br><br> 이런 성향의 활발한 사교가에게는 <span class="highlight">주류게임</span>인 동시에 사람들과 같이 할 수 있는 <span class="highlight">멀티플레이게임</span>인 <span class="highlight">리그 오브 레전드</span>를 추천합니다. 5V5 두 팀으로 나뉘어 대결하는 MOBA 게임으로, PC방에서 친구들과 함께 게임을 하는 사람들을 보면 대부분 LOL을 플레이하고 있는 것을 쉽게 볼 수 있습니다. 동료들과 함께 <span class="highlight">전 세계에서 가장 인기 있는 게임</span>인 리그 오브 레전드를 플레이해보세요!<br><br> 이와 비슷한 게임으로는 <span class="highlight">배틀그라운드</span>와 <span class="highlight">오버워치</span>를 추천드리며, 스포츠를 좋아하신다면 <span class="highlight">FIFA 21</span>을, 액티비티를 좋아하신다면 파티게임 <span class="highlight">저스트 댄스</span>와 <span class="highlight">마리오 파티</span>를 추천드립니다.',
          
          "desc": "활발한 사교가",  
          "mbti-type":"ESFJ",  
          "genre1":"추천 장르:",  
          "genre": "MOBA, eSports, 파티", 
          "game-rec1":"추천 게임:", 
          "game-rec": "리그오브레전드, 배틀그라운드, 오버워치, 피파21, 저스트 댄스, 마리오 파티",
          "img": "image/leagueoflegends1.jpg",
          "other-game1": "활발한 사교가들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/ringfit1.jpg",
          "img4": "image/justdance1.jpg",
          "img5": "image/battleground1.jpg",
  
  },
    
  "ISTP": {"game":"시티즈: 스카이라인", 
          "explain1":'<i id=quote>“바람을 조정할 수는 없지만, 돛은 조정할 수 있습니다.”</i> - Thomas S. Monson <br><br> <span class="highlight">도전적인 완벽주의자</span>는 <span class="highlight">객관적</span>이고 <span class="highlight">효율을 중시</span>하는 원리원칙주의자입니다. 언뜻 보면 기계처럼 느껴질 수 있지만 역설적이게도 호기심이 많고 <span class="highlight">창의력</span>이 뛰어나며 <span class="highlight">한계에 도전하는 것</span>을 좋아하기 때문에 장인이 많습니다. 대체로 과묵하고 직설적이어서 사람들이 다가가기 힘들어하기도 합니다. <br><br> 이런 성향의 도전적인 완벽주의자에게는 <span class="highlight">시티즈:스카이라인</span>을 추천합니다. 도시 경영 시뮬레이션 게임으로 자유도가 높은 만큼 게임 난이도가 높은 편이지만 원리를 이해한다면 창의력을 마음껏 발휘 할 수 있을 것입니다. 시티즈:스카이라인에서 <span class="highlight">당신만의 멋진 도시를 건설</span> 해 보세요!<br><br> 이와 비슷한 시뮬레이션 게임으로는 <span class="highlight">플래닛 코스터</span>와 <span class="highlight">마인크래프트</span>를 추천드리며 축구를 좋아하신다면 <span class="highlight">풋볼매니저 2021</span>을, 자신의 한계를 시험해 보고싶다면 <span class="highlight">아이워너비더보시</span>와 <span class="highlight">항아리 게임</span>을 추천드립니다.',

          "desc": "도전적인 완벽주의자",
          "mbti-type":"ISTP",  
          "genre1":"추천 장르:",  
          "genre": "시뮬레이션, 타이쿤, 전략", 
          "game-rec1":"추천 게임:", 
          "game-rec": "플래닛 코스터, 마인크래프트, 풋볼 매니저, 아이워너비더보시, 항아리 게임",            
          "img": "image/cities1.jpg",
          "other-game1": "도전적인 완벽주의자들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/zelda1.jpg",
  },

  "ISFP": {"game":"마인크래프트", 
          "explain1":'<i id=quote>“꽃은 옆에 있는 꽃과의 경쟁을 생각하지 않습니다. 꽃은 그저 피어날 뿐입니다.”</i> - Zen Shin<br><br> <span class="highlight">감각적인 예술가</span>는 물 흐르듯이 살며 현재의 삶을 있는 그대로 즐기는 <span class="highlight">YOLO 정신</span>을 가지고 있는 유형입니다. 얽매이는 것을 싫어하고 스스로 <span class="highlight">한계점을 정의하지 않아</span> 무궁무진한 <span class="highlight">가능성</span>이 있습니다. 경쟁보다는 화합과 협업을 선호하는 경향이 있으며 기존의 것을 재해석하고 새로운 것을 발견하는데에 재능이 있습니다.<br><br> 이런 성향의 감각적인 예술가에게는 가장 대표적인 샌드박스 게임인 <span class="highlight">마인크래프트</span>를 추천드립니다. 샌드박스 게임이란 말그대로 ‘모래 상자’ 즉 놀이터를 의미하며 창작의 자유도가 무한합니다. 정육면체 블록들과 도구들로 자신이 <span class="highlight">상상하고 원하는 것을 무엇이든지 창조</span>해보세요!<br><br> 이와 비슷한 오픈 월드 게임으로는<span class="highlight">GTA V</span>, <span class="highlight">젤다의 전설</span>을 추천드리며 액션을 좋아하신다면 <span class="highlight">데빌 메이 크라이</span>를, 리듬게임을 선호하신다면 <span class="highlight">Just Shape & Beats</span>와 <span class="highlight">DEEMO</span>를 추천드립니다.',
          
          "desc": "감각적인 예술가",  
          "mbti-type":"ISFP",  
          "genre1":"추천 장르:",  
          "genre": "오픈 월드, 샌드박스, 어드밴처", 
          "game-rec1":"추천 게임:", 
          "game-rec": "마인크래프트, GTA, 어쌔신 크리드, 스카이림",
          "img": "image/minecraft1.jpg",
          "other-game1": "감각적인 예술가들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/battleground1.jpg",
  }, 

  "ESTP": {"game":"레프트 4 데드 2", 
          "explain1":'<i id=quote>“인생이란 대담한 모험이거나 아무것도 아니다.”</i> - Helen, Keller<br><br> <span class="highlight">화끈한 도박사</span>는 어디서든 적응을 잘하고 유머러스하여 어디서든 <span class="highlight">분위기 메이커</span>입니다. 직접 경험하고 행동하는 것을 좋아하며 <span class="highlight">스릴있는 것과 자극적인 것</span>을 좋아해 즉흥성이 높고 <span class="highlight">경쟁</span>하는 것을 즐깁니다. 반면 효율성을 중요시하여 복잡하거나 간접적인 것을 좋아하지 않습니다. 반복되는 일상과 업무에 쉽게 싫증을 느끼기도 합니다.<br><br> 이런 성향을 가진 화끈한 도박사에게는 FPS 1인칭 슈팅게임인 <span class="highlight">레프트 4 데드 2</span>를 추천드립니다. 네 명이 팀을 이뤄 다양한 <span class="highlight">좀비들과 싸우는 게임</span>으로 잔혹한 연출과 그래픽, 긴장감 있는 사운드 이펙트가 당신을 매료시킬 것입니다. 몰려오는 좀비들 속에서 각종 미션들을 클리어하면서 <span class="highlight">벼랑 끝의 아슬아슬한 스릴</span>을 즐겨보세요!<br><br> 이와 비슷한 게임으로 서바이벌 슈팅게임 <span class="highlight">배틀 그라운드</span>를 추천드리며 액션게임을 선호하신다면<span class="highlight"> GTA V</span>와 갓 오브 워를, 레이싱 게임을 선호하신다면 <span class="highlight">니드 포 스피드</span>를, 강력한 스릴을 느끼고 싶다면 <span class="highlight">암네시아</span>를 추천드립니다. (<span class="highlight"><i class="fas fa-exclamation-triangle"></i></span> 정말 무섭습니다.)',
          
          "desc": "화끈한 도박사",  
          "mbti-type":"ESTP",  
          "genre1":"추천 장르:",  
          "genre": "FPS, 배틀로얄, 액션, 격투, 호러, 스포츠", 
          "game-rec1":"추천 게임:", 
          "game-rec": "배틀그라운드, GTA V, 갓 오브 워, 암네시아, Need for Speed",
          "img": "image/left4dead21.jpg",
          "other-game1": "화끈한 도박사들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/zelda1.jpg",
  },

 
  "ESFP": {"game":"저스트 댄스", 
          "explain1":'<i id=quote>“내일은 내일의 태양이 뜬다.”</i> - Margaret Mitchell<br><br> <span class="highlight">최고의 엔터테이너</span>는 사람들의 관심을 한 몸에 받는 것을 즐기며 미래를 생각하기보다 <span class="highlight">매 순간 즐거움</span>을 찾는 단순한 면모를 가지고 있습니다. 계산된 행동이 아닌 순수한 호감으로 사람들에게 다가가기 때문에 주변 사람들에게 인기가 많습니다. 또 경쟁보다는 모두가 어우러져 서로를 응원하고 즐기는 <span class="highlight">밝은 분위기</span>를 좋아합니다.<br><br> 이런 성향을 가진 최고의 엔터테이너에게는 파티게임인 <span class="highlight">저스트 댄스</span>를 추천드립니다. 곡을 선택 한 후 자신이 선택한 댄서의 동작을 보며 따라하는 댄스게임으로 파티게임 중 가장 인기가 많은 게임입니다. 친구들과 함께 모인 자리에서 <span class="highlight">분위기를 업</span> 시켜 <span class="highlight">끼와 매력</span>을 마음껏 발산시켜보세요!<br><br> 온라인에서 즐길 수 있는 파티형 게임으로는 <span class="highlight">어몽어스</span>와 <span class="highlight">폴가이즈</span>를 추천드리며 가볍게 즐길 수 있는 게임을 선호하신다면 <span class="highlight">슈퍼 스매시 브라더스</span>와 <span class="highlight">마리오 파티</span>를, 슈팅 게임을 좋아하신다면 <span class="highlight">콜 오브 듀티</span>를 추천드립니다.', 

          "desc": "최고의 엔터테이너",
          "mbti-type":"ESFP",  
          "genre1":"추천 장르:",  
          "genre": "파티, 댄스, 리듬, 슈팅", 
          "game-rec1":"추천 게임:", 
          "game-rec": "어몽어스, 폴가이즈, 슈퍼 스매시 브라더스, 마리오 파티, 콜오브듀티",
          "img": "image/justdance1.jpg",
          "other-game1": "최고의 엔터테이너들의 <br>인생 게임",
          "img1": "image/civilization1.jpg",
          "img2": "image/starcraft1.jpg",
          "img3": "image/lostark.jpg",
          "img4": "image/final1.jpg",
          "img5": "image/ringfit1.jpg",
  },

};

function start() {
  $(".start").hide();
  $(".result16").hide();
  
  $(".question").show();
  next();
  
}

$("#A").click(function(){
  var type = $("#type").val();
  var preValue = $("#"+type).val();
  setTimeout(function (){
  $("#"+type).val(parseInt(preValue)+1);
  
  next();
}, 0);
});

$("#B").click(function(){
  setTimeout(function (){
  
  next();
  }, 0);
} );

function gaReload() {
  window.location.reload();
  $(this).scrollTop(0);
}

window.onload = function() {
  setTimeout (function () {
   scrollTo(0,0);
  }, 100); //100ms for example
 };

/*jshint -W030 */
function next() {
  if (num == 21) {
    var mbti = "", desc = "";
    ($("#EI").val() < 3) ? (mbti+="I", desc+="I") : (mbti+="E",  desc+="E");
    ($("#SN").val() < 3) ? (mbti+="N", desc+="N") : (mbti+="S",  desc+="S");
    ($("#TF").val() < 3) ? (mbti+="F", desc+="F") : (mbti+="T",  desc+="T");
    ($("#JP").val() < 3) ? (mbti+="P", desc+="P") : (mbti+="J",  desc+="J");
   
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
    return;
 
 // style 분석형 
if ([mbti] == "INTJ") {
  $("#game").css('color','#ff3b7f');
  $("#desc").css('color','#ff3b7f');
  $("#mbti-type").css('color','#ff87b1');
  $("#genre1").css('color','#ff3b7f');
  $("#game-rec1").css('color','#ff3b7f');
  $("#quote").css('color','white');
  $(".highlight").css('color','#ff3b7f');
  $("#other-game1").css('color','#ff3b7f');
  $(".game-detail").css('color','#ff3b7f');

}

else if ([mbti] == "INTP") {
  $("#game").css('color','#ff3b7f');
  $("#desc").css('color','#ff3b7f');
  $("#mbti-type").css('color','#ff87b1');
  $("#genre1").css('color','#ff3b7f');
  $("#game-rec1").css('color','#ff3b7f');
  $("#quote").css('color','white');
  $(".highlight").css('color','#ff3b7f');
  $("#other-game1").css('color','#ff3b7f');
  $(".game-detail").css('color','#ff3b7f');
}

else if ([mbti] == "ENTJ") {
  $("#game").css('color','#ff3b7f');
  $("#desc").css('color','#ff3b7f');
  $("#mbti-type").css('color','#ff87b1');
  $("#genre1").css('color','#ff3b7f');
  $("#game-rec1").css('color','#ff3b7f');
  $("#quote").css('color','white');
  $(".highlight").css('color','#ff3b7f');
  $("#other-game1").css('color','#ff3b7f');
  $(".game-detail").css('color','#ff3b7f');
}

else if  ([mbti] == "ENTP") {
  $("#game").css('color','#ff3b7f');
  $("#desc").css('color','#ff3b7f');
  $("#mbti-type").css('color','#ff87b1');
  $("#genre1").css('color','#ff3b7f');
  $("#game-rec1").css('color','#ff3b7f');
  $("#quote").css('color','white');
  $(".highlight").css('color','#ff3b7f');
  $("#other-game1").css('color','#ff3b7f');
  $(".game-detail").css('color','#ff3b7f');
}

//style 외교형

else if  ([mbti] == "INFJ") {
  $("#game").css('color','#92ff4f');
  $("#desc").css('color','#a2ff69');
  $("#mbti-type").css('color','#d1ffb5');
  $("#genre1").css('color','#a2ff69');
  $("#game-rec1").css('color','#a2ff69');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#a2ff69');
  $("#other-game1").css('color','#a2ff69');
  $(".game-detail").css('color','#a2ff69');
}

else if  ([mbti] == "INFP") {
  $("#game").css('color','#92ff4f');
  $("#desc").css('color','#a2ff69');
  $("#mbti-type").css('color','#d1ffb5');
  $("#genre1").css('color','#a2ff69');
  $("#game-rec1").css('color','#a2ff69');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#a2ff69');
  $("#other-game1").css('color','#a2ff69');
  $(".game-detail").css('color','#a2ff69');
}

else if  ([mbti] == "ENFJ") {
  $("#game").css('color','#92ff4f');
  $("#desc").css('color','#a2ff69');
  $("#mbti-type").css('color','#d1ffb5');
  $("#genre1").css('color','#a2ff69');
  $("#game-rec1").css('color','#a2ff69');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#a2ff69');
  $("#other-game1").css('color','#a2ff69');
  $(".game-detail").css('color','#a2ff69');
}

else if  ([mbti] == "ENFP") {
  $("#game").css('color','#92ff4f');
  $("#desc").css('color','#a2ff69');
  $("#mbti-type").css('color','#d1ffb5');
  $("#genre1").css('color','#a2ff69');
  $("#game-rec1").css('color','#a2ff69');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#a2ff69');
  $("#other-game1").css('color','#a2ff69');
  $(".game-detail").css('color','#a2ff69');
}

//Style 관리자형

else if  ([mbti] == "ISTJ") {
  $("#game").css('color','#70bfff');
  $("#desc").css('color','#70bfff');
  $("#mbti-type").css('color','#bde1ff');
  $("#genre1").css('color','#70bfff');
  $("#game-rec1").css('color','#70bfff');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#70bfff');
  $("#other-game1").css('color','#70bfff');
  $(".game-detail").css('color','#70bfff');
}

else if  ([mbti] == "ISFJ") {
  $("#game").css('color','#70bfff');
  $("#desc").css('color','#70bfff');
  $("#mbti-type").css('color','#bde1ff');
  $("#genre1").css('color','#70bfff');
  $("#game-rec1").css('color','#70bfff');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#70bfff');
  $("#other-game1").css('color','#70bfff');
  $(".game-detail").css('color','#70bfff');
}

else if  ([mbti] == "ESTJ") {
  $("#game").css('color','#70bfff');
  $("#desc").css('color','#70bfff');
  $("#mbti-type").css('color','#bde1ff');
  $("#genre1").css('color','#70bfff');
  $("#game-rec1").css('color','#70bfff');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#70bfff');
  $("#other-game1").css('color','#70bfff');  
  $(".game-detail").css('color','#70bfff');
}

else if  ([mbti] == "ESFJ") {
  $("#game").css('color','#70bfff');
  $("#desc").css('color','#70bfff');
  $("#mbti-type").css('color','#bde1ff');
  $("#genre1").css('color','#70bfff');
  $("#game-rec1").css('color','#70bfff');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#70bfff');
  $("#other-game1").css('color','#70bfff');
  $(".game-detail").css('color','#70bfff');
}

//Style 탐험가형 

else if  ([mbti] == "ISTP") {
  $("#game").css('color','#ffeb3b');
  $("#desc").css('color','#ffee54');
  $("#mbti-type").css('color','#fff387');
  $("#genre1").css('color','#ffee54');
  $("#game-rec1").css('color','#ffee54');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#ffee54');
  $("#other-game1").css('color','#ffee54');
  $(".game-detail").css('color','#ffee54');
}

else if  ([mbti] == "ISFP") {
  $("#game").css('color','#ffeb3b');
  $("#desc").css('color','#ffee54');
  $("#mbti-type").css('color','#fff387');
  $("#genre1").css('color','#ffee54');
  $("#game-rec1").css('color','#ffee54');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#ffee54');
  $("#other-game1").css('color','#ffee54');
  $(".game-detail").css('color','#ffee54');

}

else if  ([mbti] == "ESTP") {
  $("#game").css('color','#ffeb3b');
  $("#desc").css('color','#ffee54');
  $("#mbti-type").css('color','#fff387');
  $("#genre1").css('color','#ffee54');
  $("#game-rec1").css('color','#ffee54');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#ffee54');
  $("#other-game1").css('color','#ffee54');
  $(".game-detail").css('color','#ffee54');

}

else if  ([mbti] == "ESFP") {
  $("#game").css('color','#ffeb3b');
  $("#desc").css('color','#ffee54');
  $("#mbti-type").css('color','#fff387');
  $("#genre1").css('color','#ffee54');
  $("#game-rec1").css('color','#ffee54');
  $("#quote").css('color','white');  
  $(".highlight").css('color','#ffee54');
  $("#other-game1").css('color','#ffee54');
  $(".game-detail").css('color','#ffee54');

}


  setTimeout(function(){
      $(".question").hide();
      $(".result16").hide();
      $(".result").show();
  }, 1000);
  setTimeout(function(){
      $(".se-pre-con").fadeIn(500);

      $('body').css({'overflow':'hidden'});
      $(document).bind('scroll',function () { 
          window.scrollTo(0,0); 
      });
  }, 500);

  setTimeout(function(){
      $(".se-pre-con").fadeOut(1000);
      $(document).unbind('scroll'); 
      $('body').css({'overflow':'visible'});
  }, 3000);

  } else {
    $(".progress-bar").attr('style','width: calc(100/20*'+num+'%)');
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
  ($("#EI").val() < 3) ? (mbti+="I", desc+="I") : (mbti+="E",  desc+="E");
  ($("#SN").val() < 3) ? (mbti+="N", desc+="N") : (mbti+="S",  desc+="S");
  ($("#TF").val() < 3) ? (mbti+="F", desc+="F") : (mbti+="T",  desc+="T");
  ($("#JP").val() < 3) ? (mbti+="P", desc+="P") : (mbti+="J",  desc+="J");
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
  window.location.href = '/ESFP/justdance'; 
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
    $("#intj-img").attr("src",result[mbti].img);
    $("#intj-game").html(result[mbti].game);
    $("#intj-desc").html(result[mbti].desc);
    $("#intj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#intj-genre1").html(result[mbti].genre1);
    $("#intj-genre").html(result[mbti].genre);
    $("#intj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#intj-game-rec").html(result[mbti]["game-rec"]);
    $("#intj-explain1").html(result[mbti].explain1);
    $("#intj-other-game1").html(result[mbti]["other-game1"]);
    $("#intj-img1").attr("src",result[mbti].img1);
    $("#intj-img2").attr("src",result[mbti].img2);
    $("#intj-img3").attr("src",result[mbti].img3);
    $("#intj-img4").attr("src",result[mbti].img4);
    $("#intj-img5").attr("src",result[mbti].img5);
    $("#intj-game").css('color','#ff3b7f');
    $("#intj-desc").css('color','#ff3b7f');
    $("#intj-mbti-type").css('color','#ff87b1');
    $("#intj-genre1").css('color','#ff3b7f');
    $("#intj-game-rec1").css('color','#ff3b7f');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ff3b7f');
    $("#intj-other-game1").css('color','#ff3b7f');
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
    $("#intp-img").attr("src",result[mbti].img);
    $("#intp-game").html(result[mbti].game);
    $("#intp-desc").html(result[mbti].desc);
    $("#intp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#intp-genre1").html(result[mbti].genre1);
    $("#intp-genre").html(result[mbti].genre);
    $("#intp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#intp-game-rec").html(result[mbti]["game-rec"]);
    $("#intp-explain1").html(result[mbti].explain1);
    $("#intp-other-game1").html(result[mbti]["other-game1"]);
    $("#intp-img1").attr("src",result[mbti].img1);
    $("#intp-img2").attr("src",result[mbti].img2);
    $("#intp-img3").attr("src",result[mbti].img3);
    $("#intp-img4").attr("src",result[mbti].img4);
    $("#intp-img5").attr("src",result[mbti].img5);
    $("#intp-game").css('color','#ff3b7f');
    $("#intp-desc").css('color','#ff3b7f');
    $("#intp-mbti-type").css('color','#ff87b1');
    $("#intp-genre1").css('color','#ff3b7f');
    $("#intp-game-rec1").css('color','#ff3b7f');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ff3b7f');
    $("#intp-other-game1").css('color','#ff3b7f');
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
    $("#entj-img").attr("src",result[mbti].img);
    $("#entj-game").html(result[mbti].game);
    $("#entj-desc").html(result[mbti].desc);
    $("#entj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#entj-genre1").html(result[mbti].genre1);
    $("#entj-genre").html(result[mbti].genre);
    $("#entj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#entj-game-rec").html(result[mbti]["game-rec"]);
    $("#entj-explain1").html(result[mbti].explain1);
    $("#entj-other-game1").html(result[mbti]["other-game1"]);
    $("#entj-img1").attr("src",result[mbti].img1);
    $("#entj-img2").attr("src",result[mbti].img2);
    $("#entj-img3").attr("src",result[mbti].img3);
    $("#entj-img4").attr("src",result[mbti].img4);
    $("#entj-img5").attr("src",result[mbti].img5);
    $("#entj-game").css('color','#ff3b7f');
    $("#entj-desc").css('color','#ff3b7f');
    $("#entj-mbti-type").css('color','#ff87b1');
    $("#entj-genre1").css('color','#ff3b7f');
    $("#entj-game-rec1").css('color','#ff3b7f');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ff3b7f');
    $("#entj-other-game1").css('color','#ff3b7f');
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
    $("#entp-img").attr("src",result[mbti].img);
    $("#entp-game").html(result[mbti].game);
    $("#entp-desc").html(result[mbti].desc);
    $("#entp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#entp-genre1").html(result[mbti].genre1);
    $("#entp-genre").html(result[mbti].genre);
    $("#entp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#entp-game-rec").html(result[mbti]["game-rec"]);
    $("#entp-explain1").html(result[mbti].explain1);
    $("#entp-other-game1").html(result[mbti]["other-game1"]);
    $("#entp-img1").attr("src",result[mbti].img1);
    $("#entp-img2").attr("src",result[mbti].img2);
    $("#entp-img3").attr("src",result[mbti].img3);
    $("#entp-img4").attr("src",result[mbti].img4);
    $("#entp-img5").attr("src",result[mbti].img5);
    $("#entp-game").css('color','#ff3b7f');
    $("#entp-desc").css('color','#ff3b7f');
    $("#entp-mbti-type").css('color','#ff87b1');
    $("#entp-genre1").css('color','#ff3b7f');
    $("#entp-game-rec1").css('color','#ff3b7f');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ff3b7f');
    $("#entp-other-game1").css('color','#ff3b7f');
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
    $("#infj-img").attr("src",result[mbti].img);
    $("#infj-game").html(result[mbti].game);
    $("#infj-desc").html(result[mbti].desc);
    $("#infj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#infj-genre1").html(result[mbti].genre1);
    $("#infj-genre").html(result[mbti].genre);
    $("#infj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#infj-game-rec").html(result[mbti]["game-rec"]);
    $("#infj-explain1").html(result[mbti].explain1);
    $("#infj-other-game1").html(result[mbti]["other-game1"]);
    $("#infj-img1").attr("src",result[mbti].img1);
    $("#infj-img2").attr("src",result[mbti].img2);
    $("#infj-img3").attr("src",result[mbti].img3);
    $("#infj-img4").attr("src",result[mbti].img4);
    $("#infj-img5").attr("src",result[mbti].img5);
    $("#infj-game").css('color','#92ff4f');
    $("#infj-desc").css('color','#a2ff69');
    $("#infj-mbti-type").css('color','#d1ffb5');
    $("#infj-genre1").css('color','#a2ff69');
    $("#infj-game-rec1").css('color','#a2ff69');
    $("#quote").css('color','white');
    $(".highlight").css('color','#a2ff69');
    $("#infj-other-game1").css('color','#a2ff69');
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
    $("#infp-img").attr("src",result[mbti].img);
    $("#infp-game").html(result[mbti].game);
    $("#infp-desc").html(result[mbti].desc);
    $("#infp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#infp-genre1").html(result[mbti].genre1);
    $("#infp-genre").html(result[mbti].genre);
    $("#infp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#infp-game-rec").html(result[mbti]["game-rec"]);
    $("#infp-explain1").html(result[mbti].explain1);
    $("#infp-other-game1").html(result[mbti]["other-game1"]);
    $("#infp-img1").attr("src",result[mbti].img1);
    $("#infp-img2").attr("src",result[mbti].img2);
    $("#infp-img3").attr("src",result[mbti].img3);
    $("#infp-img4").attr("src",result[mbti].img4);
    $("#infp-img5").attr("src",result[mbti].img5);
    $("#infp-game").css('color','#92ff4f');
    $("#infp-desc").css('color','#a2ff69');
    $("#infp-mbti-type").css('color','#d1ffb5');
    $("#infp-genre1").css('color','#a2ff69');
    $("#infp-game-rec1").css('color','#a2ff69');
    $("#quote").css('color','white');
    $(".highlight").css('color','#a2ff69');
    $("#infp-other-game1").css('color','#a2ff69');
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
    $("#enfj-img").attr("src",result[mbti].img);
    $("#enfj-game").html(result[mbti].game);
    $("#enfj-desc").html(result[mbti].desc);
    $("#enfj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#enfj-genre1").html(result[mbti].genre1);
    $("#enfj-genre").html(result[mbti].genre);
    $("#enfj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#enfj-game-rec").html(result[mbti]["game-rec"]);
    $("#enfj-explain1").html(result[mbti].explain1);
    $("#enfj-other-game1").html(result[mbti]["other-game1"]);
    $("#enfj-img1").attr("src",result[mbti].img1);
    $("#enfj-img2").attr("src",result[mbti].img2);
    $("#enfj-img3").attr("src",result[mbti].img3);
    $("#enfj-img4").attr("src",result[mbti].img4);
    $("#enfj-img5").attr("src",result[mbti].img5);
    $("#enfj-game").css('color','#92ff4f');
    $("#enfj-desc").css('color','#a2ff69');
    $("#enfj-mbti-type").css('color','#d1ffb5');
    $("#enfj-genre1").css('color','#a2ff69');
    $("#enfj-game-rec1").css('color','#a2ff69');
    $("#quote").css('color','white');
    $(".highlight").css('color','#a2ff69');
    $("#enfj-other-game1").css('color','#a2ff69');
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
    $("#enfp-img").attr("src",result[mbti].img);
    $("#enfp-game").html(result[mbti].game);
    $("#enfp-desc").html(result[mbti].desc);
    $("#enfp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#enfp-genre1").html(result[mbti].genre1);
    $("#enfp-genre").html(result[mbti].genre);
    $("#enfp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#enfp-game-rec").html(result[mbti]["game-rec"]);
    $("#enfp-explain1").html(result[mbti].explain1);
    $("#enfp-other-game1").html(result[mbti]["other-game1"]);
    $("#enfp-img1").attr("src",result[mbti].img1);
    $("#enfp-img2").attr("src",result[mbti].img2);
    $("#enfp-img3").attr("src",result[mbti].img3);
    $("#enfp-img4").attr("src",result[mbti].img4);
    $("#enfp-img5").attr("src",result[mbti].img5);
    $("#enfp-game").css('color','#92ff4f');
    $("#enfp-desc").css('color','#a2ff69');
    $("#enfp-mbti-type").css('color','#d1ffb5');
    $("#enfp-genre1").css('color','#a2ff69');
    $("#enfp-game-rec1").css('color','#a2ff69');
    $("#quote").css('color','white');
    $(".highlight").css('color','#a2ff69');
    $("#enfp-other-game1").css('color','#a2ff69');
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
    $("#istj-img").attr("src",result[mbti].img);
    $("#istj-game").html(result[mbti].game);
    $("#istj-desc").html(result[mbti].desc);
    $("#istj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#istj-genre1").html(result[mbti].genre1);
    $("#istj-genre").html(result[mbti].genre);
    $("#istj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#istj-game-rec").html(result[mbti]["game-rec"]);
    $("#istj-explain1").html(result[mbti].explain1);
    $("#istj-other-game1").html(result[mbti]["other-game1"]);
    $("#istj-img1").attr("src",result[mbti].img1);
    $("#istj-img2").attr("src",result[mbti].img2);
    $("#istj-img3").attr("src",result[mbti].img3);
    $("#istj-img4").attr("src",result[mbti].img4);
    $("#istj-img5").attr("src",result[mbti].img5);
    $("#istj-game").css('color','#70bfff');
    $("#istj-desc").css('color','#70bfff');
    $("#istj-mbti-type").css('color','#bde1ff');
    $("#istj-genre1").css('color','#70bfff');
    $("#istj-game-rec1").css('color','#70bfff');
    $("#quote").css('color','white');
    $(".highlight").css('color','#70bfff');
    $("#istj-other-game1").css('color','#70bfff');
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
    $("#isfj-img").attr("src",result[mbti].img);
    $("#isfj-game").html(result[mbti].game);
    $("#isfj-desc").html(result[mbti].desc);
    $("#isfj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#isfj-genre1").html(result[mbti].genre1);
    $("#isfj-genre").html(result[mbti].genre);
    $("#isfj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#isfj-game-rec").html(result[mbti]["game-rec"]);
    $("#isfj-explain1").html(result[mbti].explain1);
    $("#isfj-other-game1").html(result[mbti]["other-game1"]);
    $("#isfj-img1").attr("src",result[mbti].img1);
    $("#isfj-img2").attr("src",result[mbti].img2);
    $("#isfj-img3").attr("src",result[mbti].img3);
    $("#isfj-img4").attr("src",result[mbti].img4);
    $("#isfj-img5").attr("src",result[mbti].img5);
    $("#isfj-game").css('color','#70bfff');
    $("#isfj-desc").css('color','#70bfff');
    $("#isfj-mbti-type").css('color','#bde1ff');
    $("#isfj-genre1").css('color','#70bfff');
    $("#isfj-game-rec1").css('color','#70bfff');
    $("#quote").css('color','white');
    $(".highlight").css('color','#70bfff');
    $("#isfj-other-game1").css('color','#70bfff');
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
    $("#estj-img").attr("src",result[mbti].img);
    $("#estj-game").html(result[mbti].game);
    $("#estj-desc").html(result[mbti].desc);
    $("#estj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#estj-genre1").html(result[mbti].genre1);
    $("#estj-genre").html(result[mbti].genre);
    $("#estj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#estj-game-rec").html(result[mbti]["game-rec"]);
    $("#estj-explain1").html(result[mbti].explain1);
    $("#estj-other-game1").html(result[mbti]["other-game1"]);
    $("#estj-img1").attr("src",result[mbti].img1);
    $("#estj-img2").attr("src",result[mbti].img2);
    $("#estj-img3").attr("src",result[mbti].img3);
    $("#estj-img4").attr("src",result[mbti].img4);
    $("#estj-img5").attr("src",result[mbti].img5);
    $("#estj-game").css('color','#70bfff');
    $("#estj-desc").css('color','#70bfff');
    $("#estj-mbti-type").css('color','#bde1ff');
    $("#estj-genre1").css('color','#70bfff');
    $("#estj-game-rec1").css('color','#70bfff');
    $("#quote").css('color','white');
    $(".highlight").css('color','#70bfff');
    $("#estj-other-game1").css('color','#70bfff');
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
    $("#esfj-img").attr("src",result[mbti].img);
    $("#esfj-game").html(result[mbti].game);
    $("#esfj-desc").html(result[mbti].desc);
    $("#esfj-mbti-type").html(result[mbti]["mbti-type"]);
    $("#esfj-genre1").html(result[mbti].genre1);
    $("#esfj-genre").html(result[mbti].genre);
    $("#esfj-game-rec1").html(result[mbti]["game-rec1"]);
    $("#esfj-game-rec").html(result[mbti]["game-rec"]);
    $("#esfj-explain1").html(result[mbti].explain1);
    $("#esfj-other-game1").html(result[mbti]["other-game1"]);
    $("#esfj-img1").attr("src",result[mbti].img1);
    $("#esfj-img2").attr("src",result[mbti].img2);
    $("#esfj-img3").attr("src",result[mbti].img3);
    $("#esfj-img4").attr("src",result[mbti].img4);
    $("#esfj-img5").attr("src",result[mbti].img5);
    $("#esfj-game").css('color','#70bfff');
    $("#esfj-desc").css('color','#70bfff');
    $("#esfj-mbti-type").css('color','#bde1ff');
    $("#esfj-genre1").css('color','#70bfff');
    $("#esfj-game-rec1").css('color','#70bfff');
    $("#quote").css('color','white');
    $(".highlight").css('color','#70bfff');
    $("#esfj-other-game1").css('color','#70bfff');
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
    $("#istp-img").attr("src",result[mbti].img);
    $("#istp-game").html(result[mbti].game);
    $("#istp-desc").html(result[mbti].desc);
    $("#istp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#istp-genre1").html(result[mbti].genre1);
    $("#istp-genre").html(result[mbti].genre);
    $("#istp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#istp-game-rec").html(result[mbti]["game-rec"]);
    $("#istp-explain1").html(result[mbti].explain1);
    $("#istp-other-game1").html(result[mbti]["other-game1"]);
    $("#istp-img1").attr("src",result[mbti].img1);
    $("#istp-img2").attr("src",result[mbti].img2);
    $("#istp-img3").attr("src",result[mbti].img3);
    $("#istp-img4").attr("src",result[mbti].img4);
    $("#istp-img5").attr("src",result[mbti].img5);
    $("#istp-game").css('color','#ffeb3b');
    $("#istp-desc").css('color','#ffee54');
    $("#istp-mbti-type").css('color','#fff387');
    $("#istp-genre1").css('color','#ffee54');
    $("#istp-game-rec1").css('color','#ffee54');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ffee54');
    $("#istp-other-game1").css('color','#ffee54');
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
    $("#isfp-img").attr("src",result[mbti].img);
    $("#isfp-game").html(result[mbti].game);
    $("#isfp-desc").html(result[mbti].desc);
    $("#isfp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#isfp-genre1").html(result[mbti].genre1);
    $("#isfp-genre").html(result[mbti].genre);
    $("#isfp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#isfp-game-rec").html(result[mbti]["game-rec"]);
    $("#isfp-explain1").html(result[mbti].explain1);
    $("#isfp-other-game1").html(result[mbti]["other-game1"]);
    $("#isfp-img1").attr("src",result[mbti].img1);
    $("#isfp-img2").attr("src",result[mbti].img2);
    $("#isfp-img3").attr("src",result[mbti].img3);
    $("#isfp-img4").attr("src",result[mbti].img4);
    $("#isfp-img5").attr("src",result[mbti].img5);
    $("#isfp-game").css('color','#ffeb3b');
    $("#isfp-desc").css('color','#ffee54');
    $("#isfp-mbti-type").css('color','#fff387');
    $("#isfp-genre1").css('color','#ffee54');
    $("#isfp-game-rec1").css('color','#ffee54');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ffee54');
    $("#isfp-other-game1").css('color','#ffee54');
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
    $("#estp-img").attr("src",result[mbti].img);
    $("#estp-game").html(result[mbti].game);
    $("#estp-desc").html(result[mbti].desc);
    $("#estp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#estp-genre1").html(result[mbti].genre1);
    $("#estp-genre").html(result[mbti].genre);
    $("#estp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#estp-game-rec").html(result[mbti]["game-rec"]);
    $("#estp-explain1").html(result[mbti].explain1);
    $("#estp-other-game1").html(result[mbti]["other-game1"]);
    $("#estp-img1").attr("src",result[mbti].img1);
    $("#estp-img2").attr("src",result[mbti].img2);
    $("#estp-img3").attr("src",result[mbti].img3);
    $("#estp-img4").attr("src",result[mbti].img4);
    $("#estp-img5").attr("src",result[mbti].img5);
    $("#estp-game").css('color','#ffeb3b');
    $("#estp-desc").css('color','#ffee54');
    $("#estp-mbti-type").css('color','#fff387');
    $("#estp-genre1").css('color','#ffee54');
    $("#estp-game-rec1").css('color','#ffee54');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ffee54');
    $("#estp-other-game1").css('color','#ffee54');
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
    $("#esfp-img").attr("src",result[mbti].img);
    $("#esfp-game").html(result[mbti].game);
    $("#esfp-desc").html(result[mbti].desc);
    $("#esfp-mbti-type").html(result[mbti]["mbti-type"]);
    $("#esfp-genre1").html(result[mbti].genre1);
    $("#esfp-genre").html(result[mbti].genre);
    $("#esfp-game-rec1").html(result[mbti]["game-rec1"]);
    $("#esfp-game-rec").html(result[mbti]["game-rec"]);
    $("#esfp-explain1").html(result[mbti].explain1);
    $("#esfp-other-game1").html(result[mbti]["other-game1"]);
    $("#esfp-img1").attr("src",result[mbti].img1);
    $("#esfp-img2").attr("src",result[mbti].img2);
    $("#esfp-img3").attr("src",result[mbti].img3);
    $("#esfp-img4").attr("src",result[mbti].img4);
    $("#esfp-img5").attr("src",result[mbti].img5);
    $("#esfp-game").css('color','#ffeb3b');
    $("#esfp-desc").css('color','#ffee54');
    $("#esfp-mbti-type").css('color','#fff387');
    $("#esfp-genre1").css('color','#ffee54');
    $("#esfp-game-rec1").css('color','#ffee54');
    $("#quote").css('color','white');
    $(".highlight").css('color','#ffee54');
    $("#esfp-other-game1").css('color','#ffee54');
    $(this).scrollTop(0);
  }
}


 