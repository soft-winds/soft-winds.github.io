<template>
  <div class="home">
    <div class="hero">
      <!-- <div class="hero-imag">
        <img :src="heroImage" />
      </div> -->
      <p class="tagline">
        <TypeWriter :text="tagline" :speed="100" :delay="2000" :repeat="true" />
      </p>
      <div class="actions">
        <a class="action-button primary" href="/articles/"> 开始阅读 → </a>
        <a class="action-button secondary" href="/about/"> 关于我 </a>
      </div>
    </div>

    <div class="latest-posts">
      <h2>最新文章</h2>
      <div class="post-list">
        <div class="post-card" v-for="post in latestPosts" :key="post.path">
          <div class="post-header">
            <div class="post-emoji">{{ post.frontmatter.emoji || "📝" }}</div>
            <div class="h3">
              <router-link :to="post.path">{{ post.title }}</router-link>
            </div>
          </div>
          <p class="post-description">
            {{ post.frontmatter.description || "暂无描述" }}
          </p>
          <div class="post-meta">
            <span class="post-date">{{
              formatDate(post.frontmatter.date)
            }}</span>
            <span class="post-tags" v-if="post.frontmatter.tags">
              <span class="tag" v-for="tag in post.frontmatter.tags" :key="tag"
                >#{{ tag }}</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <h2 class="section-title">技术栈</h2>
    <div class="tech-stack">
      <div
        v-for="(tech, index) in techStack"
        :key="index"
        class="tech-item"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <img :src="tech.icon" :alt="tech.name" style="pointer-events: none" />
        <span>{{ tech.name }}</span>
      </div>
    </div>

    <h2 class="section-title">联系方式</h2>
    <div class="contact-info">
      <a
        v-for="(contact, index) in contacts"
        :key="index"
        :href="contact.link"
        :target="contact.target"
        class="contact-item"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <img :src="contact.icon" :alt="contact.name" />
        <span>{{ contact.name }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TypeWriter from "./TypeWriter.vue";

interface Post {
  path: string;
  title: string;
  frontmatter: {
    emoji?: string;
    description?: string;
    date?: string;
    tags?: string[];
  };
}

const heroImage =
  "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg";
const heroText = "技术探索者";
const tagline = "你以为有钱人很快乐吗？——是的，他们的快乐你根本想象不到。";

const techStack = ref([
  {
    name: "Vue3",
    icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
  },
  {
    name: "React",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "NestJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
  },
]);

const contacts = ref([
  {
    name: "GitHub",
    icon: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
    link: "https://gitee.com/its-liu-xiaodi_admin",
    target: "_blank",
  },
  {
    name: "Gitee",
    icon: "https://cdn.worldvectorlogo.com/logos/gitee.svg",
    link: "https://gitee.com/its-liu-xiaodi_admin",
    target: "_blank",
  },
  {
    name: "Email",
    icon: "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg",
    link: "mailto:xiaodi195815052@163.com?subject=《关于周五下午3点后大脑自动进入待机模式的说明》",
    target: "_self",
  },
]);

const latestPosts = ref<Post[]>([
  {
    path: "/article/vue3/vue3-photo/01-continuew-admin-analysis",
    title: "Vue3 组合式 API 最佳实践",
    frontmatter: {
      emoji: "🎯",
      description:
        "深入探讨 Vue3 组合式 API 的使用技巧和最佳实践，帮助你更好地组织代码...",
      date: "2025-03-20",
      tags: ["Vue3", "TypeScript"],
    },
  },
  {
    path: "/article/vue3/vue3-photo/01-continuew-admin-analysis",
    title: "TypeScript 高级类型详解",
    frontmatter: {
      emoji: "🚀",
      description:
        "TypeScript 高级类型系统详解，包括泛型、条件类型、映射类型等进阶内容...",
      date: "2025-03-18",
      tags: ["TypeScript"],
    },
  },
  {
    path: "/article/nestjs/nestjs-photo/01-nestjs-photo-service-init",
    title: "NestJS 企业级应用开发",
    frontmatter: {
      emoji: "⚡",
      description:
        "使用 NestJS 框架开发企业级应用，包括架构设计、模块化、依赖注入等...",
      date: "2025-03-15",
      tags: ["NestJS", "Node.js"],
    },
  },
]);

const formatDate = (date: string | undefined) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

.hero {
  text-align: center;
}

.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
  }
}

.hero-text {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(
    120deg,
    var(--c-brand) 0%,
    var(--c-brand-light) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}

.tagline {
  font-size: 1.8rem;
  color: var(--c-text-light);
  margin-bottom: 20px;
  font-weight: 500;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.action-button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.action-button.primary {
  background: linear-gradient(
    120deg,
    var(--c-brand) 0%,
    var(--c-brand-light) 100%
  );
}

.action-button.secondary {
  background: linear-gradient(120deg, #f6f8fd 0%, #e8f0fe 100%);
  color: var(--c-text);
  border: 1px solid rgba(66, 153, 225, 0.1);
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.action-button.primary:hover {
  background: linear-gradient(
    120deg,
    var(--c-brand-light) 0%,
    var(--c-brand) 100%
  );
}

.action-button.secondary:hover {
  background: linear-gradient(120deg, #e8f0fe 0%, #f6f8fd 100%);
}

.latest-posts {
  text-align: center;
}

.latest-posts h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(
    120deg,
    var(--c-brand) 0%,
    var(--c-brand-light) 100%
  );
  letter-spacing: -0.5px;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  padding: 0 20px;
}

.post-card {
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 180px;
  display: flex;
  flex-direction: column;
}

.post-card:nth-child(1) {
  background: linear-gradient(135deg, #f6f8fd 0%, #e8f0fe 100%);
  border: 1px solid rgba(66, 153, 225, 0.1);
}

.post-card:nth-child(2) {
  background: linear-gradient(135deg, #fdf6f0 0%, #fef3e6 100%);
  border: 1px solid rgba(237, 137, 54, 0.1);
}

.post-card:nth-child(3) {
  background: linear-gradient(135deg, #f0fdf4 0%, #e6fef0 100%);
  border: 1px solid rgba(72, 187, 120, 0.1);
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.post-emoji {
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.8);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.post-card .h3 {
  font-size: 1.2rem;
  font-weight: 600;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
a {
  text-decoration: none !important;
  &::after {
    display: none !important;
  }
}
.post-description {
  color: var(--c-text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  flex: 1;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
  color: var(--c-text-lighter);
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
}

.post-date {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--c-text-light);
  font-size: 0.85rem;
}

.post-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.tag {
  color: var(--c-brand);
  font-size: 0.8rem;
  padding: 2px 8px;
  background: rgba(66, 153, 225, 0.1);
  border-radius: 4px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin: 20px 0;
  font-weight: 700;
  background: linear-gradient(
    120deg,
    var(--c-brand) 0%,
    var(--c-brand-light) 100%
  );
  letter-spacing: -0.5px;
}

.tech-stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  padding: 0 20px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.tech-item:hover {
  transform: scale(1.1);
}

.tech-item img {
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
}

.tech-item span {
  font-size: 0.9rem;
  color: var(--c-text-light);
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--c-text);
  transition: transform 0.3s ease;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.contact-item:hover {
  transform: translateY(-5px);
}

.contact-item img {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
}

.contact-item span {
  font-size: 0.9rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1440px) {
  .home {
    max-width: 1200px;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 20px;
  }

  .hero-text {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.4rem;
  }

  .latest-posts h2,
  .section-title {
    font-size: 2rem;
  }

  .post-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .post-card {
    padding: 20px;
  }

  .tech-stack,
  .contact-info {
    gap: 20px;
  }
}
</style>
