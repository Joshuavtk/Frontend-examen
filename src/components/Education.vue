<template>
    <div>
        <div class="form-group row">
            <p :class="labelClass">Opleiding</p>
            <div :class="inputWrapper">
                <div class="form-check form-check-inline" v-for="(education, index) in educations" :key="index">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions"
                    :id="'education_' + index" :value="education">
                    <label class="form-check-label" :for="'education_' + index">{{education}}</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <p :class="labelClass">Niveau</p>
            <div :class="inputWrapper">
                <div class="form-check form-check-inline" v-for="(level, index) in educationLevels" :key="index">
                    <input class="form-check-input" type="radio" name="educationLevel"
                    :id="'level_' + index" :value="level">
                    <label class="form-check-label" :for="'level_' + index">{{level}}</label>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label :class="labelClass">Diploma behaald / te behalen op:</label>
            <div :class="inputWrapper">
                <input type="date" class="form-control">
            </div>
        </div>
    </div>
</template>
<script>
import App from '../App';

export default {
    extends: App,
    data() {
        return {
            educations: ['VMBO', 'HAVO', 'VWO', 'ANDERS'],
            educationLevels: ['BB', 'KB', 'GL', 'TL', 'LWT', 'LWOO'],
        };
    },
};
</script>
