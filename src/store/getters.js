const getters = {
    name: (state) => state.user.name,
    more20Age: (state) => state.user.ages.filter((item) => item > 20),
    more20AgeNum: (state, getters, rootState) => {
        // getters: 代表当前仓库内的getters
        // rootState: 代表根仓库内的state
        return getters.more20Age.length
    },
    defineAge(state) {
        // 回调函数
        return function(age) {
            return state.user.ages.filter((item) => item > age)
        }
    },
}

export default getters
