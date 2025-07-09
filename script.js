// 메시지 데이터 - 여기에 새로운 메시지를 추가하세요!
const messages = [
    {
        author: "김선민",
        content: "강사님 6개월동안 정말 고생 많으셨습니다. 강사님 덕분에 정말 아무것도 모르던 제가 프로젝트도 진행하고 많이 성장했습니다. 항상 딸처럼 따뜻하게 챙겨주셔서 감사하고 조언이 필요할땐 현실적으로 잘 조언해주셔서 감사합니다. 앞으로도 좋은 인연으로 이어나가요 감사합니당!",
        date: "2025.07.08",
        icon: "💝",
        style: "special-pink"
    },
    {
        author: "박건희",
        content: "웹페이지를 만들고 배포하면서  아, 개발이 이렇게 재밌는 거였지 하고 다시 느꼈습니다! 자바 기본기도 많이 탄탄해졌고, 다양한 프레임워크도 배워서  앞으로는 아이디어만 있으면 혼자서도 서비스 하나쯤은 만들어볼 자신이 생겼어요. 그리고 무엇보다 항상 저희에게 따뜻하게 관심 가져주시고 신경 써주신 게  정말 큰 힘이 됐습니다. 감사합니다!",
        date: "2025.07.08",
        icon: "🌟",
        style: "special-blue"
    },
    {
        author: "정유진",
        content: "초반에 계속 상담을 신청하던 제가, 강사님의 따뜻한 격려 덕분에 점점 자신감을 얻고 마지막 프로젝트까지 완성하며 한 걸음씩 성장할 수 있었습니다.강사님의 진심 어린 응원과 조언이 없었다면 지금의 저는 없었을 거예요. 항상 건강하시고, 다시 한 번 진심으로 감사드립니다!",
        date: "2025.07.08",
        icon: "🚀",
        style: "special-green"
    },
    {
        author: "신민혁",
        content: "6개월동안 감사했습니다.앞으로도 좋은 인연으로 이어나가면 좋을거같습니다.",
        date: "2025.07.08",
        icon: "🌟",
        style: "special-yellow"
    },
    {
        author: "김성준",
        content: "강사님 6개월 동안 고생 많으셨습니다. 앞으로도 종종 연락드리겠습니다!",
        date: "2025.07.08",
        icon: "🌟",
        style: "special-purple"
    },
    {
        author: "방민영",
        content: "강사님, 지난 6개월 동안 많이 배우고 성장할 수 있게 해 주셔서 진심으로 감사드립니다.항상 친절하고 열정적으로 가르쳐 주시는 모습에 많은 것을 느꼈습니다.앞으로 더 노력해서 강사님께 배운 것들을 잘 살리겠습니다.늘 건강하시고 행복하세요. 감사합니다!",
        date: "2025.07.08",
        icon: "📚",
        style: "special-yellow"
    },
    {
        author: "서민성",
        content: "강사님 덕분에 6개월이 알차게 지나간 것 같습니다. 늘 긍정적인 에너지로 수업을 이끌어주셔서 매일 배우는 시간이 즐거웠고, 큰 힘이 되었습니다. 진심으로 감사드립니다.",
        date: "2025.07.08",
        icon: "📚",
        style: "special-yellow"
    },
    {
        author: "김병곤",
        content: "강사님 안녕하세요! 병고니입니다. 강사님을 만난건 엄청난 행운이 아닐까 싶습니다. 단순히 수업을 들은게 아니라 뭐랄까 자세랑 공부하는 법 등등 을 배운거 같아요 취직하면 밥 맛난거 거하게 한번 쏘겠습니다 강사님도 너무 고생하셨어용 아프지마시구 건강 챙기세요 아자아자!!!",
        date: "2025.07.08",
        icon: "💝",
        style: "special-yellow"
    },
    {
        author: "이정수",
        content: "강사님, 6개월 동안 지도해주셔서 진심으로 감사합니다.처음에는 개발 기초 지식이 부족해 막막했지만, 강사님의 세심한 지도로 한 단계씩 성장할 수 있었습니다. 특히 프로젝트에서 막힐 때마다 포기하지 않고 문제를 해결하는 방법을 알려주신 점이 가장 기억에 남습니다. 코딩 기술뿐만 아니라 개발자로서의 사고방식과 문제 해결 능력을 기를 수 있었습니다.",
        date: "2025.07.08",
        icon: "📚",
        style: "special-yellow"
    },
    {
            author: "강창선",
            content: "길다면 길고 짧다면 짧은 기간이었지만 이번 6개월동안 개발자로서도 사람으로서도 많이 배우고 갑니다 감사합니다!",
            date: "2025.07.08",
            icon: "💪",
            style: "special-purple"
        },
        {
            author: "최문규",
            content: "6개월 교육 과정 동안 개발 내용 뿐만 아니라 신입 개발자로서 가져야 할 마음가짐, 사람을 대하는 태도, 일을 처리하는 프로세스 등 많은 것을 배울 수 있었습니다. 항상 건강하시고 행복하세요 감사합니다!",
            date: "2025.07.08",
            icon: "💝",
            style: "special-purple"
        },
        {
            author: "정태연",
            content: "안녕하세요 서유미 강사님 정태연 입니다 부트캠프를 계속 할지에 대한 고민부터 개인적으로 힘들때 조언을 해주셔서 정말 감사 했습니다 그리고 장난 잘 받아주셔서 재밌었습니다",
            date: "2025.07.08",
            icon: "💪",
            style: "special-purple"
        },
        {
            author: "이정섭",
            content: "지난 6개월동안 강사가 아닌 스승의 마음으로 가르쳐 주셔서 감사합니다. 좋은 인생의 선배를 만났던 시간이였습니다. 넓은 시야 갖게 해 주셔서 감사합니다! 항상 건강하세요!",
            date: "2025.07.08",
            icon: "🌟",
            style: "special-blue"
        },
        {
            author: "고윤아",
            content: "강사님 덕분에 길고도 쉽지 않았던 이번 과정을 무사히 마칠 수 있었습니다. 처음엔 낯설고 어렵게 느껴졌던 부분들도 강사님의 꼼꼼한 설명과 따뜻한 격려 덕분에 하나씩 이해해 나갈 수 있었고, 끝까지 포기하지 않고 따라올 수 있었던 것 같습니다. 때로는 실수하고 헤매기도 했지만, 그럴 때마다 방향을 잡아주시고 도와주셔서 정말 많은 힘이 됐어요. 진심으로 감사드리고, 앞으로도 배운 것들을 바탕으로 더 성장하는 모습 보여드릴 수 있도록 노력하겠습니다. 고생 많으셨고, 다시 한 번 감사드립니다!",
            date: "2025.07.08",
            icon: "🌟",
            style: "special-blue"
        },
        {
            author: "정난희",
            content: "강사님 6개월 동안 정말 감사했습니다! 캐나다에서 연락 종종 드리겠습니다",
            date: "2025.07.08",
            icon: "💝",
            style: "special-purple"
        }
    
  
   
];

// 메시지 카드 생성 함수
function createMessageCard(message, index) {
    const card = document.createElement('div');
    card.className = `message-card ${message.style}`;
    card.style.animationDelay = `${index * 0.2}s`;
    
    card.innerHTML = `
        <div class="message-header">
            <span class="message-icon">${message.icon}</span>
            <span class="message-author">${message.author}</span>
        </div>
        <div class="message-content">${message.content}</div>
        <div class="message-date">${message.date}</div>
    `;
    
    return card;
}

// 메시지들을 화면에 렌더링
function renderMessages() {
    const messagesGrid = document.getElementById('messagesGrid');
    
    // 메시지들을 섞어서 랜덤하게 배치
    const shuffledMessages = [...messages].sort(() => Math.random() - 0.5);
    
    shuffledMessages.forEach((message, index) => {
        const card = createMessageCard(message, index);
        messagesGrid.appendChild(card);
    });
}

// 새로운 메시지 추가 함수 (필요시 사용)
function addMessage(author, content, icon = "💌", style = "special-pink") {
    const newMessage = {
        author: author,
        content: content,
        date: new Date().toLocaleDateString('ko-KR'),
        icon: icon,
        style: style
    };
    
    messages.push(newMessage);
    
    // 화면 업데이트
    const messagesGrid = document.getElementById('messagesGrid');
    messagesGrid.innerHTML = '';
    renderMessages();
}

// 스크롤 애니메이션 효과
function handleScrollAnimation() {
    const cards = document.querySelectorAll('.message-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 메시지 렌더링
    renderMessages();
    
    // 스크롤 애니메이션 설정
    setTimeout(() => {
        handleScrollAnimation();
    }, 100);
    
    // 타이틀 애니메이션 효과
    const title = document.querySelector('.main-title');
    if (title) {
        title.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // 카드 호버 시 특별 효과
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.message-card')) {
            const card = e.target.closest('.message-card');
            const icon = card.querySelector('.message-icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(15deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.message-card')) {
            const card = e.target.closest('.message-card');
            const icon = card.querySelector('.message-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        }
    });
    
    // 배경 하트 클릭 이벤트 (숨겨진 재미 요소)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('floating-heart') || 
            e.target.classList.contains('floating-star') || 
            e.target.classList.contains('floating-flower')) {
            
            // 클릭한 요소에 특별 효과
            e.target.style.animation = 'none';
            e.target.style.transform = 'scale(2)';
            e.target.style.opacity = '1';
            
            setTimeout(() => {
                e.target.style.animation = 'float 6s ease-in-out infinite';
                e.target.style.transform = '';
                e.target.style.opacity = '0.3';
            }, 1000);
        }
    });
    
    console.log('🌸 롤링페이퍼가 로드되었습니다! 🌸');
    console.log('💡 새로운 메시지를 추가하려면 messages 배열에 객체를 추가하거나');
    console.log('💡 addMessage("이름", "메시지내용", "아이콘", "스타일") 함수를 사용하세요!');
});

// 메시지 추가 예시 (개발자 콘솔에서 사용 가능)
// addMessage("홍길동", "새로운 메시지입니다!", "🎉", "special-purple");

/*
새로운 메시지 추가 방법:

1. messages 배열에 직접 추가:
messages.push({
    author: "이름",
    content: "메시지 내용",
    date: "2024.01.23",
    icon: "🎊",
    style: "special-green"
});

2. addMessage 함수 사용:
addMessage("이름", "메시지 내용", "🎊", "special-green");

사용 가능한 스타일:
- special-pink (분홍색)
- special-blue (파란색)
- special-green (초록색)
- special-yellow (노란색)
- special-purple (보라색)

추천 아이콘:
💝 🌟 🚀 📚 💪 🌈 ⚡ ✨ 🎉 🎊 💖 🌸 🌺 🌼 💕 💌 🎀 🦋
*/ 