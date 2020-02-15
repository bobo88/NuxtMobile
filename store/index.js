export const state = () => ({
    count: 1
})

export const mutations = {
    add (state) {
        state.count++
    }
}