# Holistic by Cora — Official Website

官方網站原始碼：[holisticbycora.com](https://holisticbycora.com)

## 檔案結構

```
holisticbycora/
├── index.html          # 主頁面
├── css/
│   └── style.css       # 全站樣式
├── js/
│   └── main.js         # 互動功能
├── images/             # 放置你的照片（見下方說明）
└── README.md
```

## GitHub Pages 部署步驟

1. 在 GitHub 建立 repository，命名為 `holisticbycora`（或任何名稱）
2. 將所有檔案 push 到 `main` branch
3. 進入 repository → **Settings** → **Pages**
4. Source 選擇 **Deploy from a branch** → `main` / `/ (root)`
5. 儲存後約 2–5 分鐘，網站就會在 `https://yourusername.github.io/holisticbycora/` 上線

## 自訂網域（holisticbycora.com）

1. 在 GitHub Pages 設定中，「Custom domain」填入 `holisticbycora.com`
2. 到 Namecheap DNS 設定，新增以下 A records：
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. 新增 CNAME record：`www` → `yourusername.github.io`
4. 勾選 **Enforce HTTPS**

## 個人化修改清單

### 照片
- 在 `images/` 資料夾放入你的照片
- 在 `index.html` 找到 `.about__img-placeholder` 這個 div，將 `<div class="about__img-placeholder">` 替換為：
  ```html
  <img src="images/cora.jpg" alt="Cora" class="about__photo" />
  ```

### 預約連結
- 搜尋 `calendly.com/holisticbycora`，替換為你的實際 Calendly 連結

### Instagram 連結
- 搜尋 `instagram.com/holisticbycora`，確認帳號名稱正確

### 文案調整
- 見證分享的客戶名稱與內容可依實際回饋修改
- 服務項目的定價可在 `service-card` 中加入

## 技術規格

- 純 HTML / CSS / JS，無框架依賴
- Google Fonts（Cormorant Garamond + Jost + Noto Serif TC）
- 完全 RWD 響應式設計
- SEO meta tags 已設定
- 無障礙 aria-label 已設定

---
*Built for Holistic by Cora · Taipei, Taiwan*
