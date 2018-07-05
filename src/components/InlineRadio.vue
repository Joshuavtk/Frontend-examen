<template>
    <div class="form-group row">
        <p :class="labelClass">{{title}}</p>
        <div :class="inputWrapper">
            <div class="custom-control custom-radio custom-control-inline"
                v-for="(item, index) in array" :key="index">
                <input type="radio" :name="name" class="custom-control-input"
                    :id="name + '_' + index" :value="item">
                <label class="custom-control-label" :for="name + '_' + index">
                    {{item}}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
        },
        array: {
            required: true,
        },
    },
    data() {
        return {
            name: '',
        };
    },
    mounted() {
        this.name = this.title.toLowerCase().replace(' ', '-');
    },
};
</script>
