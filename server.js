// 1. 引入依赖
const express = require("express");
const path = require("path");
const cors = require("cors");

// 2. 创建 Express 应用
const app = express();
const PORT = 3000; // 你可以自定义端口号

// 3. 使用中间件
app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析JSON格式的请求体

// 4. 托管前端静态文件 (核心！)
// 这行代码告诉Express，当有请求时，去'frontend'文件夹里查找匹配的文件
app.use(express.static(path.join(__dirname, "frontend")));

// ------------------- API 路由定义 -------------------

// 这是一个示例API，用于获取媒体文件列表
// 将来你可以通过读取服务器上的文件目录来动态生成这个列表
app.get("/api/media", (req, res) => {
  // 暂时返回一些模拟数据
  const mediaData = [
    { id: 1, type: "video", title: "我的旅行视频.mp4", tags: ["旅行", "风景"] },
    { id: 2, type: "audio", title: "轻松的背景音乐.mp3", tags: ["音乐"] },
    { id: 3, type: "image", title: "家庭聚会照片.jpg", tags: ["家庭"] },
  ];
  res.json(mediaData);
});

// 你可以根据需要添加更多API，例如处理文件上传、标签管理等

// ------------------- 启动服务器 -------------------

app.listen(PORT, () => {
  console.log(`服务器已启动，正在监听 http://localhost:${PORT}`);
});
