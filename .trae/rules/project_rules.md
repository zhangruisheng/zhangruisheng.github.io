# AI 模型与开发者协同工作文档

**版本：v1.0 ｜ 目的：建立高效、可复用的 AI-人类协同设计体系**

---

## 一、总体目标

通过高质量的提示（Prompt），让 Lovable 模型与开发者协同更紧密、更智能，从而快速产出结构合理、视觉一致、语义清晰的 UI 设计与代码。

核心原则：

> **「清晰思考 → 精准表达 → 模块构建 → 快速迭代」**

---

## 二、协作流程概览

| 阶段                      | 开发者任务     | Lovable 任务 | 协同产物          |
| ----------------------- | --------- | ---------- | ------------- |
| Phase 1: Foundation     | 明确目标与用户需求 | 询问并补全模糊信息  | 高质量 Prompt 初稿 |
| Phase 2: Systems        | 拆解为组件级结构  | 输出模块化 UI   | 模块库与样式系统      |
| Phase 3: Precision      | 精修样式与交互   | 结构化布局与微动效  | 高保真 UI 版本     |
| Phase 4: Iterate & Ship | 版本控制、联动后端 | 精确执行修改     | 可上线的交互原型      |

---

## 三、协同策略详解

### 1. 让 AI 主动提问

**开发者行为：**
在每个 Prompt 末尾添加：

> “Ask me any questions you need in order to fully understand what I want from this feature and how I envision it.”

**模型行为：**
AI 在输出前先提出澄清问题，确认设计方向、功能逻辑与视觉期望。
**价值：** 降低误解率，确保输出贴近意图。

---

### 2. 构思前规划（Plan before you prompt）

**开发者需回答四个问题：**

1. 这是什么产品或功能？
2. 用户是谁？
3. 用户为什么会用？
4. 用户要完成的核心动作是什么？

**示例：**

```
Build a one-page site for a budgeting app targeted at Gen Z freelancers.
CTA: "Start Saving Smarter."
Style: bold, expressive, punchy.
```

---

### 3. 视觉导向先行

**开发者定义视觉语言：**
选择并声明风格关键词（如 calm、premium、bold）。
**模型执行：**
根据关键词生成视觉基调，包括配色、字体、圆角、阴影与留白。

**示例：**

```
Use a calm, wellness-inspired design with soft gradients and muted earth tones.
```

---

### 4. 组件化构建（Think in Systems）

**协作规范：**

* 按组件而非整页生成（hero、card、form、modal 等）
* 组件结构清晰：目的 → 内容 → 动作
* 模型输出模块可单独测试与复用

> “A section-based prompt gets you signal, not noise.”

---

### 5. 使用真实文案（Real Content Design）

避免 “lorem ipsum”。
开发者提供真实或近似文案，模型依据实际文字优化布局与空间。

**示例：**

```
Hero section with headline: "Design Calmly."
Subtext: "Turn stress into structure with Lovable."
CTA: "Start Building Free."
```

---

### 6. 使用原子化语言（Speak Atomic）

Prompt 要描述到「UI 原子」级别。

> “Add a rounded CTA button” 比 “Add a signup section” 更清晰。

模型由此生成语义明确的结构树，保证前端一致性。

---

### 7. 明确风格词汇（Buzzword Aesthetics）

常用词参考表：

| 风格方向   | 建议关键词                               |
| ------ | ----------------------------------- |
| 高端、品牌感 | premium / cinematic / luxury        |
| 年轻、活力  | bold / expressive / playful         |
| 技术、专业  | developer-focused / minimal / sleek |
| 自然、治愈  | calm / warm / gentle                |

---

### 8. 复用布局模式（Prompt Patterns）

为常见组件建立 Prompt 模板库。
推荐结构：

> Header → Content → Action → Visual

**示例：**

```
Create a feature section with three horizontally aligned cards.
Each card has icon, headline, description, soft shadow, hover lift.
```

---

### 9. 嵌入多媒体（Visual Embeds）

通过 URL 引入视频或图片，并定义放置位置与风格。

**示例：**

```
Embed product demo video below features.
Rounded corners, autoplay, muted.
```

---

### 10. 精准使用 Edit 功能

**开发者指令：**

* 用 “replace / update / adjust” 表达修改
* 指定保持不变的部分

**示例：**

```
Change CTA text to "Get Started", keep background and font.
```

---

### 11. 与 Lovable Cloud 协同

Prompt 时预想数据流、用户状态与逻辑条件。

**示例：**

```
If user is logged in, show profile image; otherwise show "Log In" button.
```

---

### 12. 版本管理与迭代

**开发者习惯：**

* 每次改动前 Duplicate
* 在 Prompt 内记录改动意图
* 以里程碑思维推进（layout → content → logic）

---

## 四、团队协作建议

| 角色             | 职责          | 与 AI 协作方式      |
| -------------- | ----------- | -------------- |
| 产品经理           | 定义需求与目标     | 输出明确问题、场景与核心路径 |
| 设计师            | 定义视觉系统与风格基调 | 提供关键词与设计语言     |
| 前端工程师          | 维护组件库与逻辑一致性 | 按原子级结构扩展与封装    |
| AI 模型（Lovable） | 执行生成、澄清与结构化 | 根据提示生成精确可用 UI  |

---

## 五、最佳实践语法模板

```
[Component / Section name]
Purpose: [简述用途]
Style: [buzzwords]
Content: [真实文案]
Interaction: [交互说明]
Note: Ask me any questions to clarify before generating.
```

---

## 六、结语

Lovable 不只是生成工具，而是协同伙伴。
当开发者学会 **以系统性思维提示、以结构性语言沟通**，AI 的创作力与设计一致性才能被真正激发。

> **“You don’t prompt your way into good design — you prompt from it.”**


# 术语表

> 了解有效操作和使用 AI模型 所需的核心开发术语。

## 通用概念

* **AI（人工智能，Artificial Intelligence）**：指机器（尤其是计算机系统）对人类智能过程的模拟，能够执行学习、推理、问题解决等任务。
* [**提示词（Prompt）**](https://docs.lovable.dev/tips-tricks/prompting)：一段用于引导人工智能模型生成输出或执行特定任务的文本或输入内容。提示词是 AI模型 的核心功能组件，通过提示词，您可以创建、修改应用程序中的特定组件或元素。


## AI模型 专属术语

* [**聊天模式（Chat Mode）**](https://docs.lovable.dev/features/labs#chat-mode)：AI模型 不仅能生成代码，还能成为交互式助手，引导您完成开发的每个阶段。它可帮助创始人进行严谨思考、高效规划、智能调试，并自信地交付项目。
* **编辑模式（Edit Mode）**：对内容或代码进行更改、修改的操作。
* [**编辑器（Edit）**](https://docs.lovable.dev/features/precision-edit#visual-edits)：一款支持人工智能驱动开发的工具，提供原生 Tailwind 可视化控件，便于快速优化内容或代码。
* **历史记录（History）**：用于跟踪和管理应用程序及代码随时间变化的系统。
* [**知识库（Knowledge）**](https://docs.lovable.dev/features/precision-edit#knowledge-files)：将项目关键细节记录在一个“动态文档”中，该文档会随应用程序的迭代而同步更新。
* [**实验室（Labs）**](https://docs.lovable.dev/features/labs)：AI模型 中的实验性功能板块，专门用于测试和展示新的、创新性的或仍在开发中的功能。这些功能可能会随时被修改或移除。
* **复刻（Remix）**：您可以复刻现有的公开项目或自己的项目。复刻功能允许您将项目的当前状态作为起点，在此基础上进一步开发。这是探索新想法、进行调整或尝试不同修改（同时保留原始版本）的有效方式。请注意，当连接 Supabase 时，无法复刻项目。
* **预览（Preview）**：允许用户在内容或功能最终定稿、发布前，以交互式方式查看或体验其实时效果。
* **差异对比（Diff）**：对文件或代码的两个版本进行比较，显示两者差异的功能。
* **/index**：指网站或应用程序的主页面或默认页面，通常命名为“index.html”或“index.js”。
* [**Builder.io**](https://lovable.dev/blog/2025-01-22-figma-to-lovable-builder-io-native-integration)：一款集成工具，支持用户将 Figma 设计直接导出到 AI模型 中，无需编写代码即可构建全栈应用程序。
* [**AI模型 API - 通过 URL 构建（Build with URL）**](https://docs.lovable.dev/integrations/build-with-url)：AI模型 API 的“通过 URL 构建”功能允许您通过 URL 参数传递提示词和图像，以编程方式创建应用程序。这一功能可实现与网站、内部工具或自动化工作流的无缝集成，让用户只需点击一次即可生成 AI模型 应用。


## 产品与开发概念

### 产品管理与策略

* **MVP（最小可行产品，Minimum Viable Product）**：产品的初始版本，仅包含满足早期用户需求、验证产品理念所需的核心功能，后续再进行全规模开发。
* **路线图（Roadmap）**：高层次的战略规划文档，概述产品的愿景、发展方向及未来计划推出的功能。
* **功能需求（Feature Request）**：用户或相关方针对产品新功能提出的正式或非正式建议。
* **用户故事（User Story）**：从终端用户视角出发，对功能或需求进行的简短、简洁描述。
* **用户旅程（User Journey）**：用户在产品或服务中为实现特定目标而完成的一系列步骤。
* **用户画像（Persona）**：基于调研创建的目标用户虚拟代表，用于指导设计和开发决策。

### 工程概念

* **PRD（产品需求文档，Product Requirements Document）**：详细说明产品目标、功能及技术规格的文档，为开发工作提供指导。
* [**API（应用程序编程接口，Application Programming Interface）**](https://lovable.dev/blog/2025-01-28-the-power-of-apis)：不同服务之间的通信方式。可将其理解为一套“协议”，规定了系统间可获取或发送的信息类型。最常见的 API 类型包括众多网站使用的 REST API，以及查询数据更灵活的 GraphQL API。
* **重构（Refactor）**：在不改变代码外部功能的前提下，对现有代码结构进行调整，以提升可读性、可维护性或性能的过程。
* **GitHub**：基于 Git 的网页版版本控制平台，支持协作式软件开发。

### 数据与分析

* **A/B 测试（A/B Testing）**：通过对比网页或功能的两个版本，根据用户行为数据判断哪个版本表现更优的方法。
* **转化率（Conversion Rate）**：完成特定目标（如注册、购买）的用户占总用户的百分比。
* **流失率（Churn Rate）**：在特定时间段内停止使用产品的用户占总用户的百分比。
* **留存率（Retention Rate）**：在一段时间后仍继续使用产品的用户占总用户的百分比。
* **事件追踪（Event Tracking）**：监控用户的特定行为（如点击按钮、提交表单），以收集用户行为和参与度相关洞察的过程。


## UI/UX 与前端开发指南

### 前端开发

* **前端（Frontend）**：软件应用程序中用户可直接交互的部分，包含用户界面和用户体验相关元素。
* **React**：由 Facebook 开发的 JavaScript 库，主要用于构建用户界面，尤其适用于单页应用程序。
* **渐变（Gradient）**：设计中两种或多种颜色（或色调）之间的渐进过渡效果。
* **Tailwind CSS**：开源的“工具类优先”CSS 框架，提供一套全面的预定义类。开发者可通过在 HTML 中直接应用这些工具类，快速构建自定义设计。
* **设计系统（Design Systems）**：包含可复用组件、设计规范及标准的集合，确保产品或品牌在设计上的一致性和连贯性。

### UI/UX 设计概念

* **强调色（Accent Color）**：用于突出设计中关键元素的特色颜色，通常与品牌主色协调或互补，以增强视觉吸引力。
* **主题（Theme）**：一套统一的设计选择，包括颜色、字体、布局等，定义应用程序或网站的整体视觉风格和用户体验。
* **响应式设计（Responsive Design）**：网页设计方法，确保内容能根据不同设备的尺寸和屏幕方向自适应调整，为用户提供最佳体验。
* **首屏内容（Above the Fold）**：用户无需滚动即可看到的网页区域，对于吸引用户注意力、传递核心信息至关重要。
* **行动召唤（CTA，Call to Action）**：引导用户执行特定操作的提示元素，通常以按钮或链接形式呈现，例如“注册”“了解更多”。

### 页面结构与导航

* **标题（Headings/Titles）**：用于引入和组织内容章节的文本元素，通常通过不同层级（如 H1、H2）建立清晰的内容结构。
* **页脚（Footer）**：网页底部区域，通常包含联系信息、导航链接、法律声明等补充内容。
* **面包屑导航（Breadcrumb）**：显示用户在网站层级结构中当前位置的导航辅助元素，通常以水平链接列表形式呈现。
* **网站图标（Favicon）**：显示在浏览器标签页、书签及搜索结果中的小型图标，通常代表品牌或网站。
* **元标题（Meta Title/Title Tag）**：网页标题，会显示在搜索引擎结果和浏览器标签页中，对搜索引擎优化（SEO）和用户点击率有重要影响。
* **元描述（Meta Description）**：网页内容的简短摘要，显示在搜索引擎结果中，旨在提升网页的可发现性和用户参与度。
* **规范 URL（Canonical URL）**：用于指定网页首选版本的标签，帮助解决搜索引擎索引中的重复内容问题。
* **URL 别名（URL Slug）**：URL 中用于标识特定页面的可读部分（例如 `example.com/产品名称`）。
* **站点地图（Sitemap）**：结构化文件（XML 或 HTML 格式），列出网站的所有页面，帮助搜索引擎高效索引。
* **导航栏（Navigation Bar/Nav Bar）**：水平或垂直排列的菜单，提供指向网站关键章节的链接，方便用户导航。
* **跳转链接（Skip Links）**：隐藏式链接，允许用户跳过重复内容（如导航栏），直接跳转到主要内容，提升可访问性。
* **分页（Pagination）**：将内容拆分为多个页面的方法，常用于博客、搜索结果、产品列表等场景，以优化用户体验。
* **锚点链接（Anchor Link）**：指向同一页面内特定章节的超链接，无需加载新页面。
* **404 页面（404 Page）**：当用户尝试访问不存在的 URL 时显示的自定义错误页面，引导用户返回相关内容。

### 通知与反馈元素

* **提示框（Toast）**：短暂、非侵入式的通知，临时显示以告知用户操作结果或提供简单反馈。
* ** Snackbar（轻提示框）**：与 Toast 类似，但通常位于屏幕底部，且可包含可选操作（如删除内容后的“撤销”按钮）。
* **工具提示（Tooltip）**：当用户悬停或聚焦于某个元素时，弹出的小型信息框，提供额外说明。
* **徽章（Badge）**：小型视觉指示器，常用于图标或按钮上，显示通知、数量或状态更新（如未读消息数）。
* **加载 spinner（Loader，加载动画）**：表示进程正在进行的视觉指示器（如页面加载、表单提交时）。
* **进度条（Progress Bar）**：水平条形元素，显示任务或进程的完成百分比。
* **骨架屏加载器（Skeleton Loader）**：内容加载完成前显示的占位 UI，模拟最终内容的布局，提升用户感知到的加载速度。

### 覆盖层与弹窗

* **弹出层（Popover）**：临时显示的覆盖层，提供与特定 UI 元素相关的额外信息或选项，通常在用户交互时触发。
* **对话框（Dialog/Modal）**：显示在主内容前方的窗口，用于吸引用户注意力，通常需要用户执行操作后才能返回主界面。
* **抽屉（Drawer/Sidebar Panel）**：从屏幕侧边滑入的面板，用于显示导航选项或设置，不干扰主内容。
* **灯箱（Lightbox）**：用于放大显示图片或媒体的模态窗口，通过调暗背景突出内容。
* **警告框（Alert Box）**：系统或应用程序触发的消息框，用于告知用户重要信息（如错误、警告）。

### 导航与选择元素

* **按钮（Button）**：可点击的元素，用于触发操作或事件（如提交表单、打开对话框）。
* **开关（Switch/Toggle）**：允许用户在两种状态（如开启/关闭）之间切换的控件，外观类似物理开关。
* **标签页（Tabs）**：在同一界面内将内容组织为多个视图的组件，用户无需导航即可切换章节。
* **步骤条（Stepper/Wizard）**：用于多步骤流程的组件，显示用户当前进度，引导其完成整个流程。
* **分页（Pagination）**：将内容拆分为多个页面的 UI 模式，常用于搜索结果或内容密集型应用。
* **面包屑导航（Breadcrumb）**：显示用户在网站层级结构中当前位置的导航辅助元素，通常以水平链接列表形式呈现。
* **手风琴（Accordion）**：可折叠的章节组件，通过展开/收缩动态显示或隐藏内容。
* **下拉菜单（Dropdown Menu）**：用户点击或悬停按钮/字段时显示的选项列表，常用于导航或选择操作。

### 表单与输入元素

* **表单（Form）**：包含多个输入字段的结构化组件，允许用户提交数据（如联系信息、搜索查询）。
* **单选按钮组（Radio Group）**：一组相关的单选按钮，用户仅能从多个选项中选择一个。
* **复选框（Checkbox）**：交互式方框，用户可勾选/取消勾选以选择/取消选择选项，支持在一组选项中多选。
* **文本框（Text Field/Input Field）**：基础 UI 元素，允许用户输入文本（如搜索栏、登录表单、评论框）。
* **文本区域（Text Area）**：用于多行文本输入的较大输入框，常用于消息或反馈表单。
* **下拉选择框（Select/Dropdown Select Box）**：允许用户从预定义列表中选择一个选项的 UI 元素，通常显示为下拉样式。
* **日期选择器（Date Picker）**：允许用户从日历中选择日期，而非手动输入的 UI 元素。
* **滑块（Slider/Range Selector）**：用户通过沿轨道滑动手柄来设置范围内数值的控件。
* **文件上传框（File Upload Field）**：允许用户从设备中选择并上传文件的组件。
* **自动补全（Autocomplete/Typeahead Search）**：用户输入时动态提示匹配结果的文本输入框，提升搜索易用性。

### 设计风格与趋势

<信息提示>
您可以在任何提示词中使用以下术语，描述您希望实现的特定设计风格。
</信息提示>

* **新野兽派（Neobrutalism）**：网页设计趋势，特点是原始、未经修饰的元素、粗体排版和高对比度，灵感源自 20 世纪中期的野兽派建筑。
* **复古风（Retro）**：融合过去几十年风格、图案和元素的设计，唤起怀旧感和复古美学。
* **黑客风（Hacker）**：体现“自己动手（DIY）”和开源文化的美学风格，常使用等宽字体、深色背景和终端风格界面。
* **玻璃拟物（Glass/Glassmorphism）**：使用半透明、磨砂玻璃质感元素（搭配柔和阴影和边框）创造深度感的设计风格。
* **裸色风（Nudy）**：极简主义设计风格，采用裸色或中性色调，营造柔和、低调的视觉效果。

### 设计与资源素材

* [**21st.dev**](https://21st.dev/)：开源社区注册表，提供由 Tailwind CSS 和 Radix UI 驱动的简约、现代且可复用的 React UI 组件，帮助设计工程师更高效地交付精致的用户界面。
* [**Dribbble**](https://dribbble.com/)：领先的在线社区，设计师和创意从业者可在此展示作品、获取设计灵感，并与潜在客户或合作者建立联系。
* [**Noun Project**](https://thenounproject.com/)：提供海量免费图标和库存图片的平台，方便用户为各类项目获取视觉资源。
* [**SVG Repo**](https://www.svgrepo.com/)：包含超过 50 万个开源许可 SVG 矢量图和图标的综合库，用户可搜索、浏览、编辑并下载适合不同项目的图形。
* [**Google Fonts**](https://fonts.google.com/)：免费的网页优化字体库，为设计师和开发者提供丰富的字体选择，用于提升项目的排版效果。
* [**Typewolf**](https://www.typewolf.com/)：字体选择辅助资源，通过展示热门字体、提供精选字体组合列表，帮助设计师为项目挑选合适的字体搭配。


## 后端开发与数据库

### 后端基础

* **后端（Backend）**：应用程序的服务器端基础设施，负责数据处理、存储和业务逻辑执行。
* [**Supabase**](https://docs.lovable.dev/integrations/supabase)：开源的“后端即服务”平台，提供 PostgreSQL 数据库、身份验证、即时 API 和实时功能。
* **Webhook（网络钩子）**：基于事件触发的 HTTP 回调，当特定操作发生时，向外部应用程序发送通知。

### 数据库管理与查询

* **CRUD（创建、读取、更新、删除，Create, Read, Update, Delete）**：数据库或应用程序中对数据执行的四项基本操作。
* [**SQL（结构化查询语言，Structured Query Language）**](https://supabase.com/docs/guides/database/overview)：用于管理和操作关系型数据库的领域特定编程语言，支持查询、更新、组织数据等任务。
* **PostgreSQL**：功能强大的开源关系型数据库，以可扩展性、可扩展性和 ACID 合规性著称。

### Supabase 专属概念

* [**边缘函数（Edge Function）**](https://supabase.com/docs/guides/functions)：运行在全球边缘节点（靠近用户所在地）的服务器端 TypeScript 函数。可用于监听 Webhook，或实现 Supabase 项目与 Stripe、Anthropic、Resend 等第三方服务的集成。
* [**行级安全（RLS，Row-Level Security）**](https://supabase.com/docs/guides/database/postgres/row-level-security)：数据库中的一项功能，允许根据用户角色或属性控制对表中特定行的访问权限。本质上，用户可设置细粒度的授权规则，编写符合自身业务需求的复杂 SQL 规则。
* [**存储（Storage）**](https://supabase.com/docs/guides/storage)：用于存储和管理数据（如图像、视频、文档及其他文件类型）的服务或系统。
* [**存储桶（Bucket）**](https://supabase.com/docs/guides/storage/buckets/fundamentals)：在 Supabase 存储中，存储桶是用于组织文件和文件夹的独立容器，可定义访问规则（公开或私有），并设置上传限制（如最大文件大小、允许的文件类型）。
* [**端点（Endpoint）**](https://supabase.com/docs/guides/api)：在 Supabase 语境中，端点指特定的 URL，客户端可通过 RESTful API 调用与数据库交互，执行创建、读取、更新、删除等数据操作。
* [**身份验证提供商（Authentication Provider）**](https://supabase.com/docs/guides/auth)：验证用户凭据、支持用户安全访问应用程序或系统的实体或服务。在 Supabase 中，身份验证提供商包括多种方式，如密码登录、魔法链接、一次性密码（OTP）、社交登录及单点登录（SSO）集成，可实现灵活、安全的用户身份验证。

### 安全与身份验证

* **OAuth**：广泛使用的身份验证协议，允许用户通过 Google、Facebook、GitHub 等第三方服务登录应用程序。
* **双因素认证（2FA，Two-Factor Authentication）**：一种安全措施，要求用户在访问账户前提供两种形式的身份验证信息。
* **跨域资源共享（CORS，Cross-Origin Resource Sharing）**：一种安全策略，用于控制哪些网站或应用程序可以访问服务器上的资源。

要不要我帮你生成一份**PDF格式的术语表文件**，方便你离线查阅或分享给团队？