<template><div><Home /><div class="site-info">
  <div class="site-info-content">
    <div class="site-info-icon">✨</div>
    <div class="site-info-text">
      <p>本站使用 VuePress 2.x 搭建，采用 Vue 3 + TypeScript 技术栈</p>
      <p>主要用于分享技术文章、学习笔记和生活随笔</p>
    </div>
  </div>
</div>
</div></template>



<style>
.site-info {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2.5rem;
  background: linear-gradient(135deg, var(--c-bg-soft) 0%, rgba(66, 184, 131, 0.1) 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(66, 184, 131, 0.1);
}

.site-info-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.site-info-icon {
  font-size: 2.8rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: sparkle 2s ease-in-out infinite;
}

.site-info-text {
  flex: 1;
}

.site-info-text p {
  margin: 0.6rem 0;
  color: var(--c-text);
  font-size: 1.15rem;
  line-height: 1.7;
  letter-spacing: 0.3px;
}

@keyframes sparkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.95);
  }
}

@media (max-width: 768px) {
  .site-info {
    margin: 2rem 1rem;
    padding: 2rem;
  }
  
  .site-info-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .site-info-text p {
    font-size: 1.1rem;
  }
}
</style>