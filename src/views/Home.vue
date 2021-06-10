<template>
    <div class="home">
        {{name}}
        {{more20Age}}
        {{more20AgeNum}}
        <!-- 相当于调用函数传值 -->
        {{$store.getters.defineAge(10)}}
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data () {
        return {
            age: 18,
            message: 123123
        }
    },
    mounted () {
        console.log(a)

        this.$store.dispatch('user/setName').then(res => {
            // 获取返回到的数据
            console.log(res)
        })
    },
    computed: {
        ...mapState({
            name: state => state.user.name
        }),
        ...mapGetters(['name', 'more20Age', 'more20AgeNum'])
    },
    methods: {
        add () {
            request({
                baseConfig: {

                },
                success: function () {

                },
                failure: function () {

                }
            })
        }
    }
}
</script>
