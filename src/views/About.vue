<template>
    <div class="about">
        <!-- <h1>{{message.split('').reverse().join()}}</h1> -->
        <p v-html="rawHtml">{{message}}</p>
        <p @[eventName]="hanldeClick">点击我</p>

        <div>
            <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
            <label for="jack">jack</label>
            <input type="checkbox" id="john" value="john" v-model="checkedNames">
            <label for="john">john</label>
            <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
            <label for="mike">mike</label>
        </div>
        <div>
            {{content1}}
            <input v-model="content1">在“change”时而非“input”时更新<br />
            <input v-model.number="content2" type="number">自动将用户的输入值转为数值类型<br />
            <input v-model.trim="content3">自动过滤用户输入的首尾空白字符<br />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'abc',
            rawHtml: '<span style="color: red">this is should be red</span>',
            eventName: 'click',
            checkedNames: [],
            content1: '',
            content2: '',
            content3: '',
        }
    },
    mounted () {
        this.message = '123123'
    },
    methods: {
        hanldeClick () {
            // console.log(this.content2)
            // console.log(this.checkedNames)
            console.log(this)
        }
    }
}
</script>
