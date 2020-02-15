<template>
    <div>
        <p>{{$store.state.count}}</p>
        <button @click="$store.commit('add')">+1</button>
        <hr />
        <p>{{$store.state.bobo.count2}}</p>
        <button @click="$store.commit('bobo/add2')">+2</button>
    </div>
</template>

<script>
export default {
    mounted () {
        console.log('$store.state:', this.$store.state)
    }
}
</script>