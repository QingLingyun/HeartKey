'use strict';
//扇形

//检测是否可行
console.log(echarts);
console.log('echarts.init exists?', typeof echarts.init); // 应该输出 "function"

//设置基础配置
var pieChartOptions= {
    responsive: false,
    maintainAspectRatio: false,
    layout:{padding:0},
    center:['50%','55%'],
    
//各饼图详细内容
pie1:{
        title: {
text: '消极', // 中心文字内容
left: 'center',
top: '43%',   // 垂直居中微调
textStyle: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily:'SimSum, 宋体, sams-serif',
 }
},
    series:[{
                type:'pie',
                color: ['#aac2e5', '#b3cbe8', '#bcd4eb', '#c5ddf3', '#cbe6f4', '#d1e8f5', '#d7eaf5', '#e0edf4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                   // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "难",
        "value": 121
    },
    {
        "name": "班",
        "value": 254
    },
    {
        "name": "钱",
        "value":110

    },
    {
       "name": "失",
        "value": 128

    },
   {
       "name": "离",
        "value": 89

    },
   {
       "name": "压",
        "value": 118

    },
   {
       "name": "耗",
        "value": 120

    },
   {
       "name": "辞",
        "value": 90

    },],
    //形状与旋转角度
    startAngle: 75,  // 90度 = 1/4圆
                endAngle: -75,      // 从斜45度方向开始
                //内外半径
                 radius:['40%','90%']
            }],
            //鼠标悬浮显示数据
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie2:{
    title: {
        text: '积极', // 中心文字内容
        left: 'center',
        top: '43%',   // 垂直居中微调
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color: ['#fbdfe4', '#fcc0cd', '#f9bcc8', '#f5b9c4', '#f0b6c0', '#ebb3bc', '#e6b0b8', '#e1aeb4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                 // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "能",
        "value": 279
    },
    {
        "name": "成",
        "value": 366
    },
    {
        "name": "信",
        "value":111
    },
    {
       "name": "会",
        "value": 260
    },
   {
       "name": "进",
        "value": 97
    },
   {
       "name": "升",
        "value": 59
    },
   {
       "name": "值",
        "value": 52
    },
   {
       "name": "发",
        "value": 134
    },],startAngle: -105,  // 90度 = 1/4圆
                endAngle: 105,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie3:{
    title: {
        text: '消极', // 中心文字内容
        left: 'center',
        top: '43%',   // 垂直居中微调
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color: ['#aac2e5', '#b3cbe8', '#bcd4eb', '#c5ddf3', '#cbe6f4', '#d1e8f5', '#d7eaf5', '#e0edf4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                  // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "朋",
        "value":158
    },
    {
        "name": "卑",
        "value": 146
    },
    {
        "name": "敏",
        "value":135
    },
    {
       "name": "惧",
        "value": 163
    },
   {
       "name": "评",
        "value": 106
    },
   {
       "name": "尬",
        "value": 58
    },
   {
       "name": "避",
        "value":92
    },
   {
       "name": "疑",
        "value":51
    },],startAngle: 75,  // 90度 = 1/4圆
                endAngle: -75,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie4:{
    title: {
        text: '积极', // 中心文字内容
        left: 'center',
        top: '43%',   // 垂直居中微调
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color: ['#fbdfe4', '#fcc0cd', '#f9bcc8', '#f5b9c4', '#f0b6c0', '#ebb3bc', '#e6b0b8', '#e1aeb4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                  // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "谊",
        "value": 366
    },
    {
        "name": "帮",
        "value":132
    },
    {
        "name": "爱",
        "value":173
    },
    {
       "name": "尊",
        "value": 88
    },
   {
       "name": "理",
        "value":223
    },
   {
       "name": "玩",
        "value":94
    },
   {
       "name": "伴",
        "value":85
    },
   {
       "name": "感",
        "value":391
    },],startAngle: -105,  // 90度 = 1/4圆
                endAngle: 105,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie5:{
    title: {
        text: '消极', // 中心文字内容
        left: 'center',
        top: '43%',   // 垂直居中微调
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color: ['#aac2e5', '#b3cbe8', '#bcd4eb', '#c5ddf3', '#cbe6f4', '#d1e8f5', '#d7eaf5', '#e0edf4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                   // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "绩",
        "value": 222
    },
    {
        "name": "学",
        "value": 551
    },
    {
        "name": "题",
        "value": 324
    },
    {
       "name": "师",
        "value": 202
    },
    {
       "name": "时",
        "value":738
    },
    {
       "name": "校",
        "value":278
    },
    {
       "name": "教",
        "value":288
    },
    {
       "name": "试",
        "value": 145
    },],startAngle: 75,  // 90度 = 1/4圆
                endAngle: -75,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie6:{
    title: {
        text: '积极', // 中心文字内容
        left: 'center',
        top: '43%',   // 垂直居中微调
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color:['#fbdfe4', '#fcc0cd', '#f9bcc8', '#f5b9c4', '#f0b6c0', '#ebb3bc', '#e6b0b8', '#e1aeb4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                   // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "效",
        "value": 192
    },
    {
        "name": "标",
        "value": 154
    },
    {
        "name": "动",
        "value": 163
    },
    {
       "name": "达",
        "value": 96
    },
    {
       "name": "进",
        "value":458
    },
    {
       "name": "岸",
        "value":309
    },
    {
       "name": "努",
        "value":200
    },
    {
       "name": "积",
        "value": 177
    },],startAngle: -105,  // 90度 = 1/4圆
                endAngle: 105,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie7:{
    title: {
        text: '消极', // 中心文字内容
        left: 'center',
        top: '43%',   // 垂直居中微调
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color: ['#aac2e5', '#b3cbe8', '#bcd4eb', '#c5ddf3', '#cbe6f4', '#d1e8f5', '#d7eaf5', '#e0edf4'],
                itemStyle: {
                borderColor: '#7a4c42',  // 边缘颜色
                borderWidth: 1,          // 边缘宽度
                borderType: 'solid',     // 边缘样式（可选）
                borderRadius: 0,         // 边缘圆角（设为0保持直角）
                gap: 1                   // 区块之间的间隙（单位px）
            },
                data:[{
        "name": "病",
        "value": 730
    },
    {
        "name": "痛",
        "value": 702
    },
    {
        "name": "折",
        "value":259
    },
    {
       "name": "苦",
        "value": 311
    },
   {
       "name": "难",
        "value": 258
    },
   {
       "name": "医",
        "value": 448
    },
   {
       "name": "癌",
        "value": 188
    },
   {
       "name": "命",
        "value": 324
    },],startAngle: 75,  // 90度 = 1/4圆
                endAngle: -75,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 14
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}},
pie8:{
    title: {
        text: '积极', 
        left: 'center',
        top: '43%',   
        textStyle: {
            color: '#333',
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily:'SimSum, 宋体, sams-serif',
        }
    },
    series:[{
                type:'pie',
                color: ['#fbdfe4', '#fcc0cd', '#f9bcc8', '#f5b9c4', '#f0b6c0', '#ebb3bc', '#e6b0b8', '#e1aeb4'],
                itemStyle: {
                borderColor: '#7a4c42', 
                borderWidth: 1,      
                borderType: 'solid', 
                borderRadius: 0,        
                gap: 1 ,             
            },
                data:[{
        "name": "安",
        "value":196
    },
    {
        "name": "养",
        "value":299
    },
    {
        "name": "健",
        "value":149
    },
    {
       "name": "持",
        "value": 209
    },
   {
       "name": "愿",
        "value": 106
    },
   {
       "name": "食",
        "value":264
    },
   {
       "name": "福",
        "value":124
    },
   {
       "name": "量",
        "value":230
    },],startAngle: -105,  // 90度 = 1/4圆
                endAngle: 105,      // 从斜45度方向开始
                radius:['40%','90%']
            }],
            tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderColor: '#555',
    textStyle: { 
        color: '#fff',
        fontSize: 20,
        fontFamily:'SimSum, 宋体, sams-serif',
    },
    // 使用formatter自定义显示，这里简单显示数据
    formatter: '{b}: {c}'
}}
            
    
    };

window.currentPieCharts = null;
// 初始化函数（通用）
function initChart(containerId, options) {
  const dom = document.getElementById(containerId);
  if (!dom) {
    console.error('容器未找到：', containerId);
    return null;
  }

  const chart = echarts.init(dom);
 // 动态适应容器尺寸
  chart.resize({ 
    width: dom.clientWidth,
    height: dom.clientHeight
  });
  
  chart.setOption(options);
  return chart;
}

// 导出图表组切换函数
 window.showChartGroup = function(groupNum) {
  // 销毁旧图表（如果存在）
  if (window.currentPieCharts) {
    window.currentPieCharts.forEach(chart => chart.dispose());
  }

  // 根据组号初始化新图表
  const charts = [];
  switch (groupNum) {
    case 1:
    charts.push(initChart('pie-container-left', pieChartOptions.pie1));
    charts.push(initChart('pie-container-right', pieChartOptions.pie2));
    break;
    case 2:
    charts.push(initChart('pie-container-left', pieChartOptions.pie3));
    charts.push(initChart('pie-container-right', pieChartOptions.pie4));
    break;
    case 3:
    charts.push(initChart('pie-container-left', pieChartOptions.pie5));
    charts.push(initChart('pie-container-right', pieChartOptions.pie6));
    break;
    case 4:
    charts.push(initChart('pie-container-left', pieChartOptions.pie7));
    charts.push(initChart('pie-container-right', pieChartOptions.pie8));
  }

  // 存储当前图表引用
  window.currentPieCharts = charts;
}