<template>
    <div class="hello">
        <input @input="$emit('input', $event.target.value)" v-model="msg" />
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            user: {
                firstName: '张',
                lastName: '三',
            },
            msg: ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
