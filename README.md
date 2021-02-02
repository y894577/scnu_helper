# 寻觅 SCNU

## 简介

原先是名为“**SCNU南苑**”的面向南海校区的新生指引小程序，后经**SCNU南苑重构项目**（2020/8/29-2020/9/10）将补充并完善，使其面向群体拓宽至三校区乃至整个华南师范大学，并更名为“**寻觅SCNU**”。

"**寻觅SCNU**”是华南师范大学南海校区软件协会，为同学们开发的新生导览小程序，囊括三个校区和学校整体的信息，提供**新生攻略**、**校园导览**、**交通出行**三个功能，涵盖了生活，学习，娱乐等诸多方面的实用信息，希望帮助新生解决入学困惑，尽快熟悉校园学习生活环境。

- **新生攻略** 聚焦新生入学最关切的几方面内容，汇总整理了包括缴费，宿舍，餐饮等多方面的介绍信息，希望能够帮助新生解答困惑
- **校园导览** 解决了传统地图校内地点信息不全的问题，希望能够帮助新生熟悉校园环境。同时在入学前也能一览校园风光
- **交通出行** 提供了校区附近常去的地点信息以及公交线路，为同学提供出行指南。同时也提供了大家非常关心的校车时间表

## 项目结构

### 简要说明

**miniprogram**是小程序本地代码项目的文件夹，还有一个**cloudfunctions**是云开发的云函数文件夹，因为暂时没有云函数，所以没有加入代码仓库。

> 为方便查阅，预览视图中**黄色矩形**方块区域都是**待载入图片资源**的地方

**img**是本地图片资源文件夹，里面有所有的图片资源，图片资源都以特定的格式命名

>pages页面名\_所在区域名\_组件名
>
>例如`visit_tab_all`是visit页面里tab类组件中【全部】按钮的图片

**pages**里面有**index**、**shipai**、**daxuecheng**、**nanhai**、**university**、**about**共6个页面或文件夹

其中，**shipai**、**daxuecheng**、**nanhai**文件夹分别代表首页的“**石牌校区**”、“**大学城校区**”、“**南海校区**”，其中每个都包括了**index**、**book**、**visit**、**travel**4个页面

#### index

小程序首页

#### about

关于我们页面

#### university

学校相关信息页面

#### shipai/index

石牌校区首页

#### daxuecheng/index

大学城校区首页

#### nanhai/index

南海校区首页

> 以下“校区”为shipai、daxuecheng或nanhai

#### 校区/book

对应校区的新生攻略页面

#### 校区/visit

对应校区的校园导览页面

#### 校区/travel

对应校区的交通出行页面



小程序首页面分为五项，“**学校概况**”、“**石牌校区**”、“**大学城校区**”、“**南海校区**”、“**关于我们**”。

1. “学校概况”的内容：

   * 学校简介
   * 校徽校训校歌
   * 历史沿革
   * 机构设置
     - 教学科研机构
     - 党政职能部门
     - 群团组织
     - 教辅机构
     - 附属机构
     - 其它机构
   * 相关网站
   * 校历

2. 校区相关的三项每一项的内容：

   其囊括了三部分：“新生攻略”、“校园导览”、“交通出行”

   1. “新生攻略”内容：

      * 校园概况
        - 校园建筑
        - 学院
        - 校内设施
        - 校外设施
      * 报道流程
        - 报到地点及提交资料
        - 资料领取
        - 入住
        - 报到流程图
      * 学费缴纳
      * 网费缴纳
      * 一卡通充值
      * 宿舍介绍
        - 总述
        - 常见问题
        - 宿舍空间
        - 入住准备
        - 注意事项
      * 常用网站
      * 时间表
        - 上课时间表
        - 用餐时间表
        - 图书馆开放时间表
        - 宿舍相关时间表
        - 校车相关时间表
        - 快递站时间表
      * 军训相关
        - 关于军训
        - 军训注意事项
      * 快递相关
      * 校内餐饮
        - 地点
        - 简述
        - 时间
      * 社团相关
        - 社团系统概括
        - 社团细述
          + 社团简介
          + 社团特色活动
      * 组织相关
        - 组织简介
      * 常见问题

   2. “校园导览”内容：
      通过腾讯地图的API将该校区地图展现出来，并按类标注校内若干建筑

   3. “交通出行”内容：
      通过腾讯地图的API将该校区地图展现出来，并标注校区周围常用出行地点，并附有校车时间表

3. "关于我们"的内容：

   简述小程序功能和介绍团队，大部分可直接照搬原先SCNU南苑“关于我们”的内容


### 详细说明

略
