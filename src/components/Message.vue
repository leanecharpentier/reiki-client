<script setup>
    defineProps({
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        sendAt: {
            type: String,
            required: true
        },

    })
</script>

<template>
    <div class="message">
        <p>{{ name }} {{ firstName }}</p>
        <p>Envoyé le : {{ sendAt }}</p>
        <p>Message : {{ message }}</p>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.message {
    @include flex-col;
}
</style>