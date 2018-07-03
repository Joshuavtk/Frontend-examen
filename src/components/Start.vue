<template>
    <div>
        <div class="form-group row">
            <label :class="labelClass">Naam leerling</label>
            <div :class="inputWrapper">
                <input type="text" placeholder="User name" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <label :class="labelClass">Geboortedatum</label>
            <div :class="inputWrapper">
                <input type="text" placeholder="User E-Mail" class="form-control">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelClass:
                'col-12 col-sm-3 col-form-label text-left text-sm-right',
            inputWrapper: 'col-12 col-sm-8 col-lg-6',
        };
    },
};
</script>
