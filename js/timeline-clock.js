
    'use strict'

    //时钟时间轴
    class TimelineClock {
      constructor(options) {
        // 默认配置
        this.config = {
          containerSelector: '.timeline-clock-container',
          data: [
            {
              year: '2019.7.9',
              title: '健康中国行动推进委员会|《健康中国行动（2019-2030）》',
              content: '希望到2030年，我国不仅需减缓失眠现患率、焦虑障碍患病率、抑郁症患病率上升趋势，还应提升居民心理健康素养水平到20%和30%，同时建立精神卫生医疗机构、社区康复机构及社会组织、家庭相互衔接的精神障碍社区康复服务体系。'
            },
            {
              year: '2021.4.29',
              title: '山东省教育厅、省卫生健康委|《关于加快推进全省大中小学心理健康教育体系建设的意见》',
              content: '要求健全课程体系，做到课程全覆盖心理健康相关规划、大中小学分阶段达成心理调节学习能力目标；利用多种宣传方式传播心理健康知识，鼓励学生开展朋辈互动；强化咨询干预体系，完善危机干预和转介机制。'
            },
            {
              year: '2021.9.9',
              title: '河南省教育厅|《关于加强中小学生心理危机识别和干预工作的通知》',
              content: '要求各地教育行政部门要设立或依托相关专业机构，对本区域中小学开展心理健康测评；各学校要将心理健康课列入必修课内容，同时注重安排形式多样的生命教育、挫折教育，做好常态化心理服务工作。'
            },
            {
              year: '2023.5',
              title: '教育部等十七部门|《全面加强和改进新时代学生心理健康工作专项行动计划》',
              content: '构建"健康教育、监测预警、咨询服务、干预处置"四位一体工作体系；规范心理健康检测，要求中小学每年至少开展一次心理测评，高校新生入学需测评；要求2025年95%以上学校配备专职心理健康教师，60%家庭教育指导沾点开展心理健康教育。'
            },
            {
              year: '2024.1',
              title: '重庆市政府|《精神卫生体系建设三年行动计划（2023-2025年）》',
              content: '希望2025年居民心理健康素养水平≥30%，每10万人配6名精神科医师；二级以上公立医院设精神科比例超70%，40%基层卫生院设心理门诊。'
            },
            {
              year: '2024.2',
              title: '四川省教育厅等十八部门|《全面加强和改进新时代学生心理健康工作实施方案》',
              content: '提出"六个全覆盖"：2025年实现大中小学生心理教育、心理测评、教师培训、校校有心理教师、校校建心理辅导室、县区建心理辅导中心全覆盖。'
            },
            {
              year: '2024.5.10',
              title: '陕西省教育厅等十七部门|《全面加强和改进新时代陕西省学生心理健康工作专项行动计划》',
              content: '明确到2025年全省各级各类学校心理健康专（兼）职教师配备达到100%，并定期开展学生心理健康测评；全省80%的二级以上精神专科医院设立学生心理门诊，50%的儿童专科医院、二级及以上综合医院和妇幼保健院开设精神（心理）门诊。'
            },
            {
              year: '2025.4',
              title: '广东省卫健委等|《"精神卫生服务年"行动实施方案（2025-2027年）》',
              content: '2025年底阶段目标：30万以上人口县区消除公立精神科床位空白，妇幼机构儿童心理门诊开设率≥60%；2027年底阶段目标：市级精神专科医院达三级标准，儿童心理门诊开设率≥70%'
            },
            {
              year: '2025.7',
              title: '江西省政府|《儿童青少年心理健康促进方案（2025-2027年）》',
              content: '构建"三级心理健康守门人"体系（班主任/辅导员→专兼职心理教师→精神科医师），加强"12335"青少年热线能力，建立心理危机个案帮扶和医疗转介机制。'
            },
          ],
          clockBg: 'three-hares.png',
          startYear: '2019.7.9',
          clockColor: '#9fa76d',
          borderColor: '#ff9214',
          animationDuration: 800
        };
        
        // 合并配置
        Object.assign(this.config, options);
        this.config.totalItems = this.config.data.length;
        
        // 初始化状态
        this.currentIndex = 0;
        this.isAnimating = false;
        this.domElements = {};
        
        // 安全初始化
        this.init();
      }
      
      init() {
        this.setupContainer();
        this.createStructure();
        this.cacheElements();
        this.generateContent();
        this.bindEvents();
        this.updateDisplay();
      }
      
      setupContainer() {
        this.container = document.querySelector(this.config.containerSelector);
        if (!this.container) {
          console.error('Container not found');
          return false;
        }
        return true;
      }
      
      createStructure() {
        if (this.container.querySelector('.timeline-clock-main')) return;
        
        this.container.innerHTML = `
          <div class="left-window-pattern"></div>
          <div class="left-bamboo-decoration"></div>
          <div class="timeline-clock-main">
            <div class="timeline-clock-controls">
              <button class="timeline-clock-up-btn"></button>
              <button class="timeline-clock-down-btn"></button>
            </div>
            <div class="timeline-clock-content"></div>
            <div class="timeline-clock">
              <img src="${this.config.clockBg}" class="clock-bg-image" alt="三兔共耳">
              <div class="timeline-clock-table"></div>
            </div>
          </div>
        `;
      }
      
      cacheElements() {
        this.domElements = {
          main: this.container.querySelector('.timeline-clock-main'),
          content: this.container.querySelector('.timeline-clock-content'),
          clock: this.container.querySelector('.timeline-clock-table'),
          upBtn: this.container.querySelector('.timeline-clock-up-btn'),
          downBtn: this.container.querySelector('.timeline-clock-down-btn'),
          clockBg: this.container.querySelector('.clock-bg-image'),
          clockVisual: this.container.querySelector('.timeline-clock')
        };
      }
      
      generateContent() {
        this.generateCards();
        this.generateClockScales();
      }
      
      generateCards() {
        this.domElements.content.innerHTML = this.config.data
          .map(item => `
            <div class="timeline-clock-card">
              <div class="timeline-clock-time">${item.year}</div>
              <div class="timeline-clock-title">${item.title.replace(/\|/g,'<br>')}</div>
              <div class="timeline-clock-passage">${item.content}</div>
            </div>
          `)
          .join('');
        
        this.cards = Array.from(this.domElements.content.querySelectorAll('.timeline-clock-card'));
      }
      
      generateClockScales() {
        this.domElements.clock.innerHTML = '';
        const totalYears = this.config.data.length; // 9个年份
        const degreePerYear = 360 / totalYears; // 40度每个年份
        
        // 生成主刻度（年份标签）
        this.config.data.forEach((item, index) => {
          const angle = index * degreePerYear; // 0, 40, 80...320
          
          const scale = document.createElement('div');
          scale.className = 'timeline-clock-scale';
          scale.style.transform = `rotate(${angle}deg)`;
          
          const marker = document.createElement('div');
          marker.className = 'timeline-clock-marker';
          marker.dataset.index = index;
          
          const yearLabel = document.createElement('span');
          yearLabel.className = 'timeline-clock-year';
          yearLabel.textContent = item.year;
          
          marker.appendChild(yearLabel);
          scale.appendChild(marker);
          this.domElements.clock.appendChild(scale);
        });
        
        // 生成细刻度（每个主刻度之间添加3个细刻度）
        const smallStep = degreePerYear / 4; // 每10度一个细刻度
        for (let angle = smallStep; angle < 360; angle += smallStep) {
          // 跳过主刻度位置（每40度）
          if (angle % degreePerYear === 0) continue;
          
          const scale = document.createElement('div');
          scale.className = 'timeline-clock-scale';
          scale.style.transform = `rotate(${angle}deg)`;
          
          const thinMarker = document.createElement('div');
          thinMarker.className = 'timeline-clock-thin-marker';
          scale.appendChild(thinMarker);
          
          this.domElements.clock.appendChild(scale);
        }
      }
      
      bindEvents() {
        // 按钮事件
        this.domElements.upBtn.addEventListener('click', () => this.prevItem());
        this.domElements.downBtn.addEventListener('click', () => this.nextItem());
        
        // 时钟点击事件
        this.domElements.clock.querySelectorAll('.timeline-clock-marker').forEach(marker => {
          marker.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            this.goToItem(index);
          });
        });
        
        // 鼠标滚轮事件
        this.container.addEventListener('wheel', (e) => {
          if (this.isAnimating) return;
          e.preventDefault();
          e.deltaY > 0 ? this.nextItem() : this.prevItem();
        }, { passive: false });
      }
      
      prevItem() {
        if (this.isAnimating) return;
        const newIndex = (this.currentIndex - 1 + this.config.totalItems) % this.config.totalItems;
        this.goToItem(newIndex);
      }
      
      nextItem() {
        if (this.isAnimating) return;
        const newIndex = (this.currentIndex + 1) % this.config.totalItems;
        this.goToItem(newIndex);
      }
      
      goToItem(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        
        this.isAnimating = true;
        this.currentIndex = index;
        
        this.updateDisplay();
        
        setTimeout(() => {
          this.isAnimating = false;
        }, this.config.animationDuration);
      }
      
      updateDisplay() {
        // 更新卡片位置
        this.cards.forEach((card, index) => {
          const isActive = index === this.currentIndex;
          card.style.transform = `translateY(${(index - this.currentIndex) * 100}%)`;
          card.style.opacity = isActive ? '1' : '0';
          card.style.pointerEvents = isActive ? 'auto' : 'none';
          card.style.position = isActive ? 'relative' : 'absolute';
        });
        
        // 更新时钟旋转 - 修复旋转角度计算
        const degreeStep = 360 / this.config.totalItems;
        const targetAngle = -this.currentIndex * degreeStep;
        this.domElements.clock.style.transform = `rotate(${targetAngle}deg)`;
        
        // 强制重绘以解决显示问题
        this.domElements.clock.style.display = 'none';
        this.domElements.clock.offsetHeight; // 触发重绘
        this.domElements.clock.style.display = '';
      }
    }
    
    // 初始化
    document.addEventListener('DOMContentLoaded', () => {
      new TimelineClock();
    });
