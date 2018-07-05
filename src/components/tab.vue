<template>
    <div v-show="isActive">
        <div class="form-group row">
            <div class="col-12">
                <h3 v-text="title"></h3>
            </div>
        </div>
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
        title: {
            required: true,
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

<style scoped>
h3 {
    color: #ff008c;
}
</style>
