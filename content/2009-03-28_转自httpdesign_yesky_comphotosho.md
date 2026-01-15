---
title: "转自httpdesign.yesky.comphotoshop3062192306."
date: 2009-03-28 12:00:00
tags: [杂谈]
published: true
hideInList: false
feature: 
---
用Photoshop通道将模糊肖像照片清晰化

2005-11-13 09:52作者：放鸽子出处：pscn责任编辑：Shiny

照片中的人物有些模糊主要是因为拍照时对焦不准形成，如果直接用USM滤镜锐化，不能识别图像的真正轮廓，而只是靠识别像素间的反差来辨别，所以需要通道来帮忙！

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)  
调整前模糊的照片  
  
![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)  
调整后清晰的照片

1、按F7，选择通道面板，观察RGB三个通道，发现红色通道中的信息比较丰富，质量较高，决定用红色通道工作。复制红色通道为红色通道副本。执行滤镜-风格化-
照亮边缘，参数如图：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

对红色通道执行“滤镜-风格化-照亮边缘”

2、对红通道副本使用高斯模糊滤镜，如图：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

对红通道副本高斯模糊

3、用色阶命令对红通道副本进行调整，参数如图：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

用色阶命令对红通道副本进行调整

4、设置前景色为黑色，选择合适的笔刷工具把不需要锐化的部分涂掉，如远景等：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

用笔刷工具把不需要锐化的部分涂掉

5、选区已经做出来了，然后把红副本通道作为选区载入，回到图层面板，将背景复制一层，不要取消选区。执行滤镜-艺术效果-绘画涂抹，参数如图：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

对复制图层执行“滤镜-艺术效果-绘画涂抹”

6、再将背景副本复制为背景副本1，将背景副本1移动到背景副本之下，将背景副本1的透明度改为30%，将背景副本改为滤色，目的是将画面稍微调亮：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

复制背景副本并适当调整

调整后的图片效果：

![天极设计在线 照片处理
清晰化](https://simg.sinajs.cn/blog7style/images/common/sg_trans.gif)

调整后的清晰照片
