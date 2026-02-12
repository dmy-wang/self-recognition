# 大五人格测试 - 部署指南

## 项目概述

这是一个基于Web的大五人格测试系统，包含用户认证和访问控制功能，确保只有付费用户才能访问测试内容。

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **认证系统**: Firebase Authentication
- **数据库**: Firebase Firestore
- **部署平台**: Vercel

## 部署步骤

### 1. Firebase 配置

#### 1.1 创建 Firebase 项目

1. 访问 [Firebase 控制台](https://console.firebase.google.com/)
2. 点击 "添加项目"
3. 输入项目名称（例如："big-five-test"）
4. 启用 Google Analytics（可选）
5. 点击 "创建项目"

#### 1.2 配置认证服务

1. 在 Firebase 控制台中，点击 "认证"
2. 点击 "登录方法"
3. 启用 "电子邮件/密码" 登录方式
4. 点击 "保存"

#### 1.3 配置 Firestore 数据库

1. 在 Firebase 控制台中，点击 "Firestore 数据库"
2. 点击 "创建数据库"
3. 选择 "测试模式"（生产环境请使用安全规则）
4. 选择最近的位置
5. 点击 "启用"

#### 1.4 获取 Firebase 配置

1. 在 Firebase 控制台中，点击 "项目设置"
2. 在 "常规" 选项卡中，向下滚动到 "您的应用"
3. 点击 "添加应用" → "Web"
4. 输入应用名称（例如："big-five-test-app"）
5. 点击 "注册应用"
6. 复制生成的 Firebase 配置代码

### 2. 代码配置

#### 2.1 配置 Firebase 信息

1. 打开 `login.html` 文件
2. 找到 Firebase 配置部分，替换为您的 Firebase 配置：

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. 同样，打开 `bigFive/bigfive.html` 文件，替换 Firebase 配置

### 3. Vercel 部署

#### 3.1 导入项目到 Vercel

1. 访问 [Vercel 控制台](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择您的 GitHub 仓库
4. 点击 "Import"

#### 3.2 配置 Vercel 项目

1. **Framework Preset**: 选择 "Static HTML"
2. **Root Directory**: 留空（使用默认值）
3. **Build Command**: 留空（不需要构建）
4. **Output Directory**: 留空（使用默认值）
5. **Install Command**: 留空（不需要安装依赖）
6. 点击 "Deploy"

### 4. 数据库安全规则

#### 4.1 配置 Firestore 安全规则

在 Firebase 控制台中，点击 "Firestore 数据库" → "规则"，替换为以下规则：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 用户只能访问自己的信息
    match /users/{userId} {
      allow read, update: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
    
    // 用户只能访问自己的测试结果
    match /testResults/{resultId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

### 5. 用户管理

#### 5.1 添加用户

用户可以通过注册页面自行注册账号。作为管理员，您也可以在 Firebase 控制台中手动添加用户：

1. 在 Firebase 控制台中，点击 "认证"
2. 点击 "添加用户"
3. 输入邮箱和密码
4. 点击 "添加用户"

#### 5.2 管理用户权限

目前系统采用简单的付费模式，所有注册用户都可以访问测试功能。您可以根据需要扩展为不同的会员等级：

1. 在 `users` 集合中添加 `membershipLevel` 字段
2. 在前端代码中检查用户的会员等级
3. 根据会员等级控制测试次数和功能访问权限

### 6. 测试数据管理

#### 6.1 查看测试结果

在 Firebase 控制台中，点击 "Firestore 数据库" → "testResults" 集合，您可以查看所有用户的测试结果。

#### 6.2 导出测试数据

1. 在 Firebase 控制台中，点击 "Firestore 数据库"
2. 点击 "导出"
3. 选择导出格式和存储位置
4. 点击 "导出"

### 7. 访问控制验证

#### 7.1 测试未登录用户访问

1. 打开部署后的网站
2. 直接访问测试页面 URL（例如：`https://your-domain.com/bigFive/bigfive.html`）
3. 系统应该自动重定向到登录页面

#### 7.2 测试登录用户访问

1. 打开部署后的网站
2. 点击 "注册" 创建账号
3. 登录账号
4. 开始测试
5. 完成测试后查看结果
6. 点击 "退出" 按钮
7. 系统应该重定向到登录页面

### 8. 故障排除

#### 8.1 Firebase 配置错误

- 检查 `firebaseConfig` 中的 API 密钥和其他配置是否正确
- 确保 Firebase 项目已启用认证和 Firestore 服务

#### 8.2 权限错误

- 检查 Firestore 安全规则是否正确配置
- 确保用户已登录且 UID 与数据库中的一致

#### 8.3 部署错误

- 确保 Vercel 部署配置正确
- 检查项目文件结构是否符合要求

### 9. 扩展功能

#### 9.1 添加支付系统

您可以集成 Stripe 或其他支付系统，实现付费会员功能：

1. 创建 Stripe 账号
2. 集成 Stripe Checkout
3. 在用户支付后更新其会员等级

#### 9.2 添加数据分析

您可以使用 Firebase Analytics 或 Google Analytics，跟踪用户行为和测试结果：

1. 在 Firebase 控制台中启用 Analytics
2. 集成 Analytics SDK 到前端代码
3. 配置事件追踪

#### 9.3 添加更多测试类型

您可以扩展系统，添加其他类型的心理测试：

1. 创建新的测试页面和问题集合
2. 添加测试类型到用户界面
3. 扩展数据库结构以支持多种测试结果

## 总结

通过以上步骤，您可以成功部署一个具有用户认证和访问控制功能的大五人格测试系统。系统确保只有付费用户才能访问测试内容，并且每个用户只能看到自己的测试结果，保护用户隐私的同时实现商业化运营。