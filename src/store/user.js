const state = {
    name: '张三',
    sex: '男',
    ages: [10, 20, 30, 40, 50],
}

const mutations = {
    SET_NAME(state, name) {
        state.name = name
    },
    SET_SEX(state, sex) {
        state.sex = sex
    },
}

const actions = {
    setName(context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('SET_NAME', '李四')
                resolve('将接口请求到的数据返回出去')
            }, payload)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
