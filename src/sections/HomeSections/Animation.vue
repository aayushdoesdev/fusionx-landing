<template>
    <div class="outer-container">
      <div class="card">
        <div 
          class="content" 
          ref="contentRef"
          
        >
          <div class="container-full">
            <div class="animated hue"></div>
            <img class="backgroundImage" :src="backgroundImage" alt="Background"> 
            <img class="boyImage hidden lg:block" :src="boyImage" alt="Foreground">
            
            <div class="container">
              <div class="cube">
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face left text"><p v-html="formattedText"></p></div>
                <div class="face right text"><p v-html="formattedText"></p></div>
                <div class="face front"></div>
                <div class="face back text"><p v-html="formattedText"></p></div>
              </div>
            </div>
            
            <div class="container-reflect">
              <div class="cube">
                <div class="face top"></div>
                <div class="face bottom"></div>
                <div class="face left text"><p v-html="formattedText"></p></div>
                <div class="face right text"><p v-html="formattedText"></p></div>
                <div class="face front"></div>
                <div class="face back text"><p v-html="formattedText"></p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  // Poem text - using the original Kipling poem
  const kiplingPoem = `The Future of Investing Is Automated. Are You Ready? <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span> <span>The Future of Investing Is Automated. Are You Ready?</span>`;
  
  // Define props
  const props = defineProps({
    backgroundImage: {
      type: String,
      default: "/images/animation-bg.png"
    },
    boyImage: {
      type: String,
      default: "/images/boy.png"
    },
    width: {
      type: Number,
      default: 1000
    },
    height: {
      type: Number,
      default: 562
    }
  });
  
  const contentRef = ref(null);
  
  // Use the full poem directly
  const formattedText = computed(() => {
    return kiplingPoem;
  });
  
  // Responsive scaling
  const adjustContentSize = () => {
    if (!contentRef.value) return;
    
    const viewportWidth = window.innerWidth;
    const baseWidth = props.width;
    const scaleFactor = viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 2.5 : 1;
    
    contentRef.value.style.transform = `scale(${scaleFactor})`;
  };
  
  onMounted(() => {
    adjustContentSize();
    window.addEventListener('resize', adjustContentSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', adjustContentSize);
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  
  .outer-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  
  .card {
    width: 100%;
    
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .content {
    overflow: hidden;
    animation: 200s linear infinite brightness;
    transform-origin: center;
  }
  
  .container {
    width: 100vw;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container-full {
    width: 100vw;
    height: 562px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0;
    justify-content: center;
    transform: scale(1);
    /* animation: 200s linear infinite zoom-in; */
  }
  
  .backgroundImage {
    position: absolute;
    width: 100vw;
    height: 100%;
  }
  
  .boyImage {
    position: absolute;
    width: 1000px;
    z-index: 2;
    animation: 200s linear infinite blur;
  }
  
  .cube, .face {
    width: 870px;
    height: 190px;
  }
  
  .cube {
    position: relative;
    transform-style: preserve-3d;
    perspective: 500px;
    transform-style: preserve-3d;
    perspective-origin: 51% 70%;
  }
  
  .face {
    position: absolute;
    background: transparent;
    border: 0 solid #000;
    opacity: 0.5;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  
  .bottom, .top {
    width: 870px;
    height: 870px;
  }
  
  /* Fix font size to be much larger */
  p {
    white-space: nowrap;
    overflow: hidden;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-size: calc(6em + (190px / 10) * 0.7); /* Using the original font size calculation */
    padding-top: 20px;
    color: #fff;
    margin: 0;
    line-height: 1;
  }
  
  span {
    color: red;
  }
  
  .front {
    transform: translateZ(435px);
    display: none;
  }
  
  .back {
    transform: translateZ(-435px) rotateY(180deg) scaleX(-1);
  }
  
  .left {
    transform: translateX(-435px) rotateY(-90deg) scaleX(-1);
  }
  
  .right {
    transform: translateX(435px) rotateY(90deg) scaleX(-1);
  }
  
  .top {
    transform: translateY(-435px) rotateX(90deg) scaleY(-1);
  }
  
  .bottom {
    transform: translateY(-245px) rotateX(-90deg) scaleY(-1);
  }
  
  /* Fix the animations to match original */
  .left p {
    margin-left: 480px;
    animation: 200s linear infinite left;
  }
  
  .back p {
    margin-left: -390px;
    animation: 200s linear infinite back;
  }
  
  .right p {
    margin-left: -1260px;
    animation: 200s linear infinite right;
  }
  
  @keyframes left {
    0% {
      margin-left: 480px;
    }
    100% {
      margin-left: -54000px;
    }
  }
  
  @keyframes back {
    0% {
      margin-left: -390px;
    }
    100% {
      margin-left: -54870px;
    }
  }
  
  @keyframes right {
    0% {
      margin-left: -1260px;
    }
    100% {
      margin-left: -55740px;
    }
  }
  
  .hue {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    mix-blend-mode: overlay;
    background: #1e5799;
    background: radial-gradient(ellipse at center, #1e5799 0, #7db9e8 100%);
    opacity: 1;
  }
  
  .hue.animated {
    animation: 8s infinite filter-animation;
  }
  
  .container-reflect {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 380px;
    filter: blur(10px);
  }
  
  .container-reflect .cube {
    perspective-origin: 51% -30%;
  }
  
  .container-reflect .back {
    transform: translateZ(-435px) rotateY(180deg) scaleX(-1) scaleY(-1);
  }
  
  .container-reflect .left {
    transform: translateX(-435px) rotateY(-90deg) scaleX(-1) scaleY(-1);
  }
  
  .container-reflect .right {
    transform: translateX(435px) rotateY(90deg) scaleX(-1) scaleY(-1);
  }
  
  .container-reflect p {
    transform: scaleY(70%);
  }
  
  @keyframes filter-animation {
    0%, 100% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(100deg);
    }
  }
  
  @keyframes zoom-in {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(2.5);
    }
  }
  
  @keyframes blur {
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur(3px);
    }
  }
  
  @keyframes brightness {
    0% {
      filter: brightness(1) contrast(1);
    }
    100% {
      filter: brightness(0.8) contrast(1.3);
    }
  }
  </style>