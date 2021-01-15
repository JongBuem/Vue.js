
Vue.component('top-menu', {
    template: `
        <div>
            <div class="header" v-if="number==2"> 
                <div class="header_log">
                    <i class="fab fa-youtube"></i>{{text}} 
                </div> 
                <div>
                    <i class="fas fa-search" @click="serch"></i>
                    <i class="fas fa-ellipsis-v" @click="hamburgeropen"></i> 
                </div>
            </div>
            <div class="serchHeader" v-else-if="number==1"> 
                <i class="fas fa-arrow-left" @click="back" ></i> 
                <input type="text" :placeholder="text+'검색'"> 
                <i class="fas fa-search fafa"></i>
            </div>
            <div class="hamburger_btn" v-if="False==true"> 
                <div><button>설정</button></div>
                <div><button>재생 설정</button></div>
                <div><button>YouTube의 내 데이터</button></div>
                <div><button>의견보내기</button></div>
                <div><button>도움말</button></div>
                <div><button>신고</button></div>
                <div><button @click="hamburgerClose">취소</button></div> 
            </div>
        </div>
    `,
    data: function () {
        return {
            count: 0,
            text : 'YouTube',
            number: 2,
            False: false,
        }
    },
    methods : {
        serch(){  // 검색이미지 클릭시
            this.number=1;
        },
        back(){  // 뒤로가기이미지 클릭시
            this.number=2; 
        },
        hamburgeropen(){ // 햄버거 버튼 클릭시
            this.False =true;
        },
        hamburgerClose(){ // 햄버거 메뉴 '취소' 클릭시
            this.False =false;
        },
    }
})

Vue.component('video-play', {
    template: `
        <div class="play">
            <video controls :src="play"></video>
        </div>
    `,
    data: function () {
        return {
            play: 'video/IMG_0788.MOV',
            False: false,
        }
    },
})

Vue.component('video-title', {
    template: `
            <div>
                <div class="data">
                    <ul class="hash">
                        <li> #이게 언제야</li>
                        <li> #허창무</li>
                        <li> #구승휴</li>
                        <li> #서주원</li>
                    </ul>
                    <div class="title">
                        <span @click="titleClass" :class="{text:False}">
                            {{text}} 
                        </span>
                        <i class="fas fa-caret-down" @click="titleClass" ></i>
                    </div>
                        <div class="views">
                            <span>조회수 12.7만회</span>
                        </div>
                </div>
                <div class="info">
                    <ul class="actions">
                        <i class="fas fa-thumbs-up" @click="goodButton" :style="{color:color}">{{count}}</i>
                        <i class="fas fa-thumbs-down" @click="badButton" :style="{color:color}">{{count}}</i>
                        <i class="fas fa-share">공유</i>
                        <i class="fas fa-plus">저장</i>
                        <i class="fab fa-font-awesome-flag">신고</i>
                    </ul>
                    <div class="channer">
                        <div class="channer_data">           
                                <img src="img/my.jpg" alt="">
                            <div class="channer_info">
                                <span class="chenner_title">8전트</span>
                                <span class="chenner_titi">구독자 43.8만명</span>
                            </div>
                        </div>
                        <div class="gudokButton">
                            <span v-if="True" :style="{color : Gray}" @click="gudokButoon">구독</span>
                            <span v-else="True" :style="{color : Red}" @click="gudokClose">구독중</span>
                        </div>
                    </div>
                </div>
            </div>
    `,      
    data: function () {
        return {
            False:false,
            True:true,
            Gray:'gray', 
            Red:'red', 
            count:0,
            color:'gray', 
            text: '승모씨와 임모씨가 술먹고?? 화제의 인물! 저기 누어있는 사람은 누구?!! 올해 주모상, 8전트 월드베스트 인간 제조기',      
        }
    },methods : {
        titleClass(){ // 제목과 화살표 버튼 클릭시
            this.False = !this.False;   
        },
        gudokButoon(){ // 구독할시
            this.True=!this.True; // True 변경으로 '구독중' 노출
        },
        gudokClose(){ // 구독을 취소할시                                  
            if (confirm("구독을 취소 하시겠습니까?")==true) {//팝업창으로 true와 false을 부여
                this.True = true;                       
            } else {
                this.True = false;     
            }
        },
        goodButton(){
            this.good.count++;
            this.good.color='blue';
        },
        badButton(){
            this.bad.count++;
            this.bad.color='blue';
        },
    }
}) 


Vue.component('auto-play', {
    template: `
    <div>
        <section class="last">  
            <div class="last_title">
                <span> 다음동영상 </span>   
                <div>
                    자동재생
                    <button :class="{ last_btn : True , rightMove: False }  "  @click="player">
                        <div class="last_btnsub">aa</div>
                    </button>
                </div>
            </div>
            <video-list></video-list>
        </section>
    <div>
    `,
    data: function () {
        return {
            True : true,
            False: false,
        }
    },
    methods : {
        player (){ // 자동재생 버튼클릭할시
            this.False=!this.False;
        },
    }
})



Vue.component('video-list', {
    template: `
    <div>
        <ul v-for="item in playlist" :key="playlist.imge">
            <li class="item">
                <div class="item_img"><img :src="item.imge"alt=""></div>
                <div class="item_text">
                    <span class="item_title">{{item.title}}</span>
                    <span class="item_content">{{item.text}}</span>
                    <span class="item_titi">{{item.count}}</span>          
                </div>
            </li>
        </ul>
    </div>    
    `,
    data: function () {
        return {
            playlist:[
            {imge: 'img/1.JPG', title:'[아시아최초] 눈싸움 기계 이것만 있으면 1인자', text:'최고다윽박EUGBAK', count:'조회수 10.3만회' },
            {imge: 'img/2.JPG', title:'쇼미더머니 파이널 무대', text:'Ment Tv', count:'조회수 321.5만회' },
            {imge: 'img/3.JPG', title:'대한민국 최초 푸스카스!!!!', text:'축박공', count:'조회수 13.9만회' },
            {imge: 'img/4.JPG', title:'죄송합니다 여러분', text:'보겸보겸', count:'조회수 3.9만회' },
            {imge: 'img/5.JPG', title:'아스날 VS 애버튼 14R', text:'SPOTV', count:'조회수 50.1만회' },
            {imge: 'img/6.JPG', title:'장삐쭈 단편', text:'장삐쭈', count:'조회수 123.3만회' },
            ],
        }
    },
})





const vm = new Vue({			
    el: '#app',			
    data: {		
        head:{// 상위 헤더메뉴
            text : 'YouTube',
            number: 2, 
        },
        video:{// 비디오
            play: 'video/IMG_0788.MOV',
        },
        hamburger:{// 햄버거 메뉴
            False: false,
        },
        title:{// 비디오 제목
            False: false,
            text: '승모씨와 임모씨가 술먹고?? 화제의 인물! 저기 누어있는 사람은 누구?!! 올해 주모상, 8전트 월드베스트 인간 제조기',     
        },
        gudok:{// 구독버튼
            True:true,  
            Gray:'gray', 
            Red:'red', 
        },
        autoPlay:{// 자동재생 버튼
            classObject: {
                'last_btn' : true,
                rightMove: false,
            },
        },
        playlist:[// 비디오 리스트
            {imge: 'img/1.JPG', title:'[아시아최초] 눈싸움 기계 이것만 있으면 1인자', text:'최고다윽박EUGBAK', count:'조회수 10.3만회' },
            {imge: 'img/2.JPG', title:'쇼미더머니 파이널 무대', text:'Ment Tv', count:'조회수 321.5만회' },
            {imge: 'img/3.JPG', title:'대한민국 최초 푸스카스!!!!', text:'축박공', count:'조회수 13.9만회' },
            {imge: 'img/4.JPG', title:'죄송합니다 여러분', text:'보겸보겸', count:'조회수 3.9만회' },
            {imge: 'img/5.JPG', title:'아스날 VS 애버튼 14R', text:'SPOTV', count:'조회수 50.1만회' },
            {imge: 'img/6.JPG', title:'장삐쭈 단편', text:'장삐쭈', count:'조회수 123.3만회' },
        ],
        good:{ // 미완료
            count:0,
            color:'gray'
        },
        bad:{ // 미완료
            count:0,
            color:'gray'
        },
    },
    methods : {
            serch(){  // 검색이미지 클릭시
                this.head.number=1;
            },
            back(){  // 뒤로가기이미지 클릭시
                this.head.number=2; 
            },
            hamburgerOpen(){ // 햄버거 버튼 클릭시
                this.hamburger.False =true;
            },
            hamburgerClose(){ // 햄버거 메뉴 '취소' 클릭시
                this.hamburger.False =false;
            },
            titleClass(){ // 제목과 화살표 버튼 클릭시
                this.title.False = !this.title.False;   
            },
            gudokButoon(){ // 구독할시
                this.gudok.True=!this.gudok.True; // True 변경으로 '구독중' 노출
            },
            gudokClose(){ // 구독을 취소할시                                  
                if (confirm("구독을 취소 하시겠습니까?")==true) {//팝업창으로 true와 false을 부여
                    this.gudok.True = true;                       
                } else {
                    this.gudok.True = false;     
                }
            },
            player (){ // 자동재생 버튼클릭할시
                this.autoPlay.classObject.rightMove=!this.autoPlay.classObject.rightMove;
            },
            goodButton(){
                this.good.count++;
                this.good.color='blue';
            },
            badButton(){
                this.bad.count++;
                this.bad.color='blue';
            },
        },
})

