<template>
    <Form
     :schema="schema"
     :rules="rules"
     label-position="top"
     hide-required-asterisk
     size="large"
     @register="register"
    />
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const schema = reactive<FormSchema[]>([
    {
        field: 'title',
        colProps: {
            span: 24
        }
    },
    {
        field: 'username',
        label: 'login.username',
        value: 'Input',
        colProps: {
            span: 24
        }
    }
])
</script>

<style scoped>

</style>
