<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            required: true,
        },
        selected: {
            default: false,
        },
    },
    computed: {
        href() {
            return `#${this.name.toLowerCase().replace(' ', '-')}`;
        },
    },

    data() {
        return {
            isActive: false,
            completed: false,
        };
    },
    mounted() {
        this.isActive = this.selected;
    },
};
</script>
