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
      count: 0
    },
    methods: {
      // 攻撃ボタンをクリックしたときのハンドラ
      doAttack: function (index) {
        this.list[index].hp -= 10 // HPを減らす
        this.count += 10 //必殺技ゲージカウンタ
        if (this.list[index].hp <= 0) {
          this.result = false
        }
      },
      deathBlow: function (index) {
        this.list[index].hp -= 50
        this.count = 0 //必殺技ゲージをリセット
        if (this.list[index].hp <=0) {
          this.result = false
        }
      }
    }
  })

});
