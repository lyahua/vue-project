<template>
  <div>
    <JwChat-index 
     :config="config" 
     :showRightBox='false' 
     scrollType="scroll"
     :taleList="taleList" 
     @enter="bindEnter" 
     @clickTalk="talkEvent" 
     v-model="inputMsg" 
     :toolConfig="tool" 
     :winBarConfig="winBarConfig" 
    />
  </div>
</template>

<script>
import {fetchGoodInfo} from "@/utils/api.js"
export default {
  data () {
    return {
      // 输入框内的字
      inputMsg: '',
      // 聊天框内的消息假数据
      taleList: [
        {
          "date": "2021/04/25 21:19:07",
          "text": { "text": "抱歉打扰了，我自己看了您的简历，觉得还蛮适合我们这边的，不知道有没有兴趣了解一下" },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": this.$img.logo2
        },
        {
          "date": "2021/04/25 21:19:07",
          "text": { "text": "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": this.$img.logo2
        },
        {
          "date": "2021/04/25 21:19:07",
          "text": { "text":"<img data-src='https://img.bosszhipin.com/beijin/upload/image/20191225/3f7fda0998317f22ec614bfc392848b9.jpg?x-oss-process=image/format,jpg'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": this.$img.logo2
        },
        {
          "date": "2021/04/16 21:19:07",
          "text": { "text": "对您这边的岗位有兴趣，能深入了解吗？" },
          "mine": true,
          "name": "student",
          "img": this.$img.logo1
        },
        {
          "date": "2021/03/02 13:14:21",
          "mine": false,
          "name": "只盼流星不盼雨",
          "img":this.$img.logo2,
          "text": {
            system: {
              title: '您这边方便发份简历过来吗？',
              // subtitle: '猜您想问:',
              content: [
                {
                  id: `system1`,
                  text: '简历投递'
                },
                {
                  id: `system2`,
                  text: '常用语'
                },
                {
                  id: 'system',
                  text: '交接微信'
                }
              ]
            }
          }
        }
      ],
      //工具栏配置
      tool: {
        // show: ['file', 'history', 'img', ['文件1', '', '美图']],
        // showEmoji: false,
        callback: this.toolEvent
      },
      // 组件配置
      config: {
        img: this.$img.logo1,
        name: 'JwChat',
        dept: '',
        callback: this.bindCover,
        historyConfig:{
          show: true,
          tip: '加载更多',
          callback: this.bindLoadHistory,
        },
        quickList: [
          {text: '这里是jwchat，您想了解什么问题。'},
          {text: 'jwchat是最好的聊天组件'},
          {text: '谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。'},
          {text: '长夏逝去。山野间的初秋悄然涉足。'},
          {text: '江南风骨，天水成碧，天教心愿与身违。'},
          {text: '总在不经意的年生。回首彼岸。纵然发现光景绵长。'},
          {text: '外面的烟花奋力的燃着，屋里的人激情的说着情话'},
          {text: '假如你是云，我就是雨，一生相伴，风风雨雨；'},
          {text: '即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。'},
          {text: ' 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。'},
        ]
      },
      // 多窗口配置
      winBarConfig: {
        active: 'win00',
        width: '160px',
        listHeight: '60px',
        list: [ 
        {
          id: 'win00',
          img: this.$img.logo2,
          name: '',
          dept: '最简单、最便捷',
          // readNum: 99
        },
        // {
        //   id: 'win01',
        //   img: this.$img.logo3,
        //   name: '阳光明媚爱万物',
        //   dept: '沙拉黑油',
        //   readNum: 12
        // },
        // {
        //   id: 'win02',
        //   img:  this.$img.logo3,
        //   name: '只盼流星不盼雨',
        //   dept: '最后说的话'
        // },
        // {
        //   id: 'win03',
        //   img:  this.$img.logo5,
        //   name: '留恋人间不羡仙',
        //   dept: '这里可以放万物'
        // },
        // {
        //   id: 'win04',
        //   img:  this.$img.logo4,
        //   name: '阳光明媚爱万物',
        //   dept: '官方客服'
        // }
          ],
        callback: this.bindWinBar,

      },
      // 当前是哪个用户登录
      role:""
    }
  },
  methods: {
    //输入框点击就发送或者回车触发的事件
    bindEnter () {
      const msg = this.inputMsg
      let dataTime=this.$moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      if (!msg) return;
      const msgObj = {
        "date": dataTime,
        "text": { "text": msg },
        "mine": true,
        "name": this.role,
        "img": this.$img.logo1
      }
      this.taleList.push(msgObj);
      // console.log(msgObj,">>>>>>")
    },
    /**
     * @description: 
     * @param {*} type 当前点击的按钮
     * @param {*} plyload 附加文件或者需要处理的数据
     * @return {*}
     */
    toolEvent (type, plyload) {
      console.log('tools', type, plyload)
    },
     /**
     * @description: 点击加载更多的回调函数
     * @param {*}
     * @return {*}
     */
    bindLoadHistory () {
      const history = new Array(3).fill().map((i, j) => {
        return {
          "date": "2020/05/20 23:19:07",
          "text": { "text": j + new Date() },
          "mine": false,
          "name": "JwChat",
          "img": "image/three.jpeg"
        }
      })
      let list = history.concat(this.list)
      this.list = list
      console.log('加载历史', list, history)
    },
    bindCover (type) {
      console.log('header', type)
    },
    bindWinBar (play = {}) {
      const {type, data={}} = play
      console.log(data);
      if(type==='winBar'){
        const { id, dept, name, img } = data
        this.winBarConfig.active = id
        console.log("id",id)
        console.log("dept",dept);
        console.log("name",name);
        console.log("img",img)
      }
    },
    // 
    talkEvent(){

    }
  },
  mounted(){
    this.role=localStorage.getItem("role")
    this.$nextTick(()=>{
      fetchGoodInfo({id:this.$route.params.id}).then(res=>{
        console.log("res",res)
        this.winBarConfig.list[0].name=res.name
        this.winBarConfig.list[0].img=this.$img.imgBaseUrl+res.img
        // console.log(this.winBarConfig,"this.winBarConfig")
      })
    })
    
  }
}
</script>

<style lang="css" scoped>
  .chatBox{
      position: relative;
      margin:12px;
      padding:5px 8px;
      word-break: break-all;
      background: #ffffff;
      border: 1px solid #989898;
      border-radius: 5px;
      max-width:180px;
  }
  .chatBox-left::before{
      content: '';
      position: absolute;
      width: 100px;
      height: 100px;
      border: 50px solid;
      border-color: #3B64BC #3B64BC #3B64BC #bc3b4a;

  }

</style>