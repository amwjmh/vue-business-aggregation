<template>
    <div
    :class="prefixCls"
    class=""
    >
    <div>
        <div>
            <LoginForm v-if="isLogin"/>
            <RegisterForm v-else/>
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { LoginForm, RegisterForm } from './components'
import { ref } from 'vue'
const isLogin = ref(true)
const toRegister = () => {
    isLogin.value = false
}
const toLogin = () => {
    isLogin.value = true
}

</script>

<style scoped></style>
