'use strict';

const _baseAngle = Math.PI / 360,
      R = 200;

let speed = 0.5,
    angleX = speed * _baseAngle,
    angleY = -speed * _baseAngle,
    _focalLength = R * 1.5;


const colorConfig = {
  // 低频词颜色 (data-value < 100) - 12种蓝色
  lowFreqColors: [
   '#F8FDFF', '#E6F7FF',  '#D4F1FF', '#C1EAFF', '#A9E2FF',
   '#96DBFF', '#82D4FF',  '#6ECCFF', '#5BC5FF', '#48BEFF',
   '#3CB7FF', '#2EB0FF'  
  ],
  
  // 中频词颜色 (100 <= data-value < 500) - 12种黄色
  midFreqColors: [
    '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B',
    '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFD600',
    '#FFC400', '#FFAB00'
  ],
  
  // 高频词颜色 (data-value >= 500) - 12种橙色/红色
  highFreqColors: [
    '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00',
    '#F57C00', '#FF7043', '#FF5722', '#F4511E', '#E64A19',
    '#D84315', '#BF360C'
  ],
  
  // 最高频词强调色 (data-value >= 800)
  highlightColor: '#FF1744'
};

function Initialization(options) {
  this.options = options;
  this.container = options.container;
  this.dataArr = options.data;
  this.init();
}

Initialization.prototype.init = function(){
  let len = this.dataArr.length;
  let newTags = [];

  // 找出最大最小值用于归一化
  let maxValue = 0, minValue = Infinity;
  for(let i = 0; i < len; i++) {
    let val = parseInt(this.dataArr[i].getAttribute('data-value'));
    if(val > maxValue) maxValue = val;
    if(val < minValue) minValue = val;
  }
  let valueRange = maxValue - minValue;

  for(let i = 0; i < len; i++){
     var angleA = Math.acos((2*(i+1)-1)/len -1);
     var angleB = angleA * Math.sqrt(len * Math.PI);
     var z = R * Math.cos(angleA);
     var y = R * Math.sin(angleA) * Math.sin(angleB);
     var x = R * Math.sin(angleA) * Math.cos(angleB);
     
     // 根据词频设置颜色 - 修改后的颜色选择逻辑
     var dataValue = parseInt(this.dataArr[i].getAttribute('data-value'));
     var normalizedValue = (dataValue - minValue) / valueRange;
      var color;
    if(dataValue >= 800) {
      color = colorConfig.highlightColor;
    } 
    else {
      // 混合颜色选择逻辑，增加随机性
      let colorPool;
      if(dataValue >= 500) {
        colorPool = [...colorConfig.highFreqColors];
        // 10%几率使用中频颜色增加变化
        if(Math.random() < 0.1) colorPool = colorPool.concat(colorConfig.midFreqColors);
      }
      else if(dataValue >= 100) {
        colorPool = [...colorConfig.midFreqColors];
        // 15%几率使用低频或高频颜色
        if(Math.random() < 0.15) {
          colorPool = colorPool.concat(Math.random() < 0.5 ? colorConfig.lowFreqColors : colorConfig.highFreqColors);
        }
      }
      else {
        colorPool = [...colorConfig.lowFreqColors];
        // 20%几率使用中频颜色
        if(Math.random() < 0.2) colorPool = colorPool.concat(colorConfig.midFreqColors);
      }
      
      // 在选定的颜色池中随机选择
      let index = Math.floor(Math.random() * colorPool.length);
      color = colorPool[index];
    }
     
     this.dataArr[i].style.color = color;
     
     var newtag = new Tag(this.dataArr[i], x, y, z, this.options);
     newtag.move();
     newTags.push(newtag);
     this.animate();
  }

  this.newTags = newTags;
}

Initialization.prototype.rotateX = function() {
    let cos = Math.cos(angleX),
        sin = Math.sin(angleX);
    this.newTags.forEach((tag) => {
      let y = tag.y * cos - tag.z * sin,
          z = tag.z * cos + tag.y * sin;
      tag.y = y;
      tag.z = z;    
    });
}

Initialization.prototype.rotateY = function() {
   let cos = Math.cos(angleY),
       sin = Math.sin(angleY);
   this.newTags.forEach((tag) => {
    let x = tag.x * cos - tag.z * sin,
        z = tag.z * cos + tag.x * sin;
    tag.x = x;
    tag.z = z;
   });
}

Initialization.prototype.animate = function() {
   var that = this;
   setInterval(function() {
       that.rotateX();
       that.rotateY();
       that.newTags.forEach((tag) => {
          tag.move();
       })
    },20);
}

function Tag(data, x, y, z, options) {
   this.options = options;
   this.dataArr = options.data;
   this.data = data;
   this.data.setAttribute('data-value', this.data.textContent+':'+this.data.getAttribute('data-value'));
   this.x = x;
   this.y = y;
   this.z = z;
}

Tag.prototype.move = function() {
   var len = this.dataArr.length;
   var scale = _focalLength /(_focalLength - this.z);
   var alpha = (this.z + R)/(2 * R);
   var containerCenterX = this.options.container.offsetWidth / 2;
   var containerCenterY = this.options.container.offsetHeight / 2;
   
   this.data.style.left = (this.x + containerCenterX) + 'px';
   this.data.style.top = (this.y + containerCenterY) + 'px';
   this.data.style.fontSize = 14 * scale + 'px';
   this.data.style.opacity = alpha + 0.5;
   this.data.style.transform = 'translate(-50%, -50%)';
   this.data.style.zIndex = Math.floor(this.z + R);
}

window.onload = function() {
   let tags = document.querySelectorAll('#wrap .tag');
   let wrap = document.getElementById('wrap');
   let options = {
       data: tags,
       container: wrap
   }
   let tagCloud = new Initialization(options);
   
   document.addEventListener('mousemove',function(e) {
    angleY = (e.clientX/window.innerWidth- 0.5) * speed * _baseAngle;
    angleX = (e.clientY/window.innerHeight- 0.5) * speed * _baseAngle;
   })
}