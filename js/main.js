$(function(){
  'use strict'

  new Vue({
    el: '#tabBox',
    data: {
      isActive: '0',
      result: true,
      list: [
        { id: 1, name: 'スライム', hp: 100, maxhp: 100, imgpath: './img/slime.png' },
        { id: 2, name: 'デビル', hp: 200, maxhp: 200, imgpath: './img/devil.png' },
        { id: 3, name: 'ドラゴン', hp: 500, maxhp: 500, imgpath: './img/dragon.png' }
      ],
      count: 0,
      //タイマー関連
      min: 0,
      sec: 30,
      timerOn: false,
      timerObj: null,
      isStart: false
    },
    methods: {
      // 攻撃ボタンをクリックしたときのハンドラ
      doAttack: function (index) {
        this.list[index].hp -= 10 // HPを減らす
        this.count += 10 //必殺技ゲージカウンタ
        if (this.list[index].hp <= 0) {
          this.result = false
          clearInterval(this.timerObj) //敵を倒したらタイマークリア
        }
      },
      deathBlow: function (index) {
        this.list[index].hp -= 50
        this.count = 0 //必殺技ゲージをリセット
        if (this.list[index].hp <=0) {
          this.result = false
          clearInterval(this.timerObj) //敵を倒したらタイマークリア
        }
      },
      //タイマー関連
      countTimer: function() {
        if (this.sec <= 0 && this.min >= 1) {
          this.min --;
          this.sec = 59;
        } else if(this.sec <= 0 && this.min <= 0) {
          this.complete();
        } else {
          this.sec --;
        }
      },
      start: function() {
        let self = this;
        this.timerObj = setInterval(function() {self.countTimer()}, 1000)
        this.timerOn = true; //timerがOFFであることを状態として保持
        this.isStart = true;
      },
      stop: function() {
        clearInterval(this.timerObj);
        this.timerOn = false; //timerがOFFであることを状態として保持
        this.isStart = false;
      },
      complete: function() {
        clearInterval(this.timerObj)
      }
    },
    computed: {
      formatTime: function() {
        let timeStrings = [
          this.min.toString(),
          this.sec.toString()
        ].map(function(str) {
          if (str.length < 2) {
            return "0" + str
          } else {
            return str
          }
        })
        return timeStrings[0] + ":" + timeStrings[1]
      }
    }
  })

});
