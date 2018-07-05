<template>
    <div class="form-group row">
        <label :class="labelClass">
            {{title}}
            <p class="text-info" v-show="description">{{description}}</p>
        </label>
        <div :class="inputWrapper">
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn" :class="{'btn-outline-primary active': isSelected[0],
                'btn-outline-secondary': !isSelected[0] }">
                    <input type="radio" :name="name" @click="activateButton"
                        :id="name + '_1'" autocomplete="off" :value="0"> Ja
                </label>
                <label class="btn" :class="{'btn-outline-primary active': isSelected[1],
                'btn-outline-secondary': !isSelected[1] }">
                    <input type="radio" :name="name" @click="activateButton"
                        :id="name + '_2'" autocomplete="off" :value="1"> Nee
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        activateButton(el) {
            this.$emit('specialCare');
            this.isSelected = [false, false];
            this.isSelected[el.target.value] = true;
        },
    },
    props: {
        title: {
            required: true,
        },
        description: {
            default: false,
        },
        identifier: {
            required: true,
        },
    },
    data() {
        return {
            name: '',
            isSelected: [false, false],
        };
    },
    mounted() {
        this.name = this.identifier.toLowerCase().replace(' ', '-');
    },
};
</script>
