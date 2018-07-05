<template>
    <div>

        <div class="form-group row">
            <label for="educationSelector" :class="labelClass">Opleiding</label>
            <div :class="inputWrapper">
                <select class="custom-select my-1 mr-sm-2" id="educationSelector"
                    @change="selectEducation">
                    <option selected>Kies...</option>
                    <option v-for="(education, index) in educations"
                        :key="index" :value="education" v-text="education"></option>
                </select>
            </div>
        </div>

        <InlineRadio title="Niveau" :array="educationLevels"
            v-show="isEducationSelected(['VMBO'])" />

        <InlineRadio title="Sector" :array="sectors" v-show="isEducationSelected(['VMBO'])" />

        <div class="form-group row" v-show="isEducationSelected(['VMBO'])">
            <p :class="labelClass">
                De leerling heeft een keuzevak MVI gedaan
            </p>
            <div :class="inputWrapper">

                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" name="has_done_mvi" class="custom-control-input"
                        id="has_done_mvi_1" :value="true" @change="getMviValue">
                    <label class="custom-control-label" for="has_done_mvi_1">
                        Ja
                    </label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" name="has_done_mvi" class="custom-control-input"
                        id="has_done_mvi_2" :value="false" @change="getMviValue">
                    <label class="custom-control-label" for="has_done_mvi_2">
                        Nee
                    </label>
                </div>

                <div class="row mt-2" v-show="mviValue">
                    <label :class="labelClass" for="which_mvi">Zo ja, welke?</label>
                    <div :class="inputWrapper">
                        <input type="text" class="form-control" id="which_mvi">
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group row" v-show="isEducationSelected(['VMBO', 'HAVO', 'VWO'])">
            <label :class="labelClass" for="degree_date">Diploma behaald / te behalen op:</label>
            <div :class="inputWrapper">
                <input type="date" class="form-control" id="degree_date">
            </div>
        </div>

        <div class="form-group row" v-show="isEducationSelected(['HAVO', 'VWO'])">
            <label :class="labelClass">Overgangsbewijs van leerjaar</label>
            <div :class="inputWrapper">
                <div class="row">
                    <div class="col-sm-4">
                        <input type="number" class="form-control">
                    </div>
                    <label class="col-sm-4">naar leerjaar</label>
                    <div class="col-sm-4">
                        <input type="number" class="form-control">
                    </div>
                </div>
            </div>
        </div>

        <InlineRadio title="Opleidingsniveau" :array="levels"
            v-show="isEducationSelected(['MBO'])"/>

        <InlineRadio title="Leerweg" :array="learnPaths"
            v-show="isEducationSelected(['MBO'])"/>

    </div>
</template>

<script>
import InlineRadio from './InlineRadio';

export default {
    components: {
        InlineRadio,
    },
    data() {
        return {
            educations: ['VMBO', 'HAVO', 'VWO', 'MBO', 'ANDERS'],
            educationLevels: ['BB', 'KB', 'GL', 'TL', 'LWT', 'LWOO'],
            sectors: ['Economie', 'Landbouw', 'Techniek', 'Zorg & Welzijn'],
            selectedEducation: '',
            mviValue: false,
            levels: [1, 2, 3, 4],
            learnPaths: ['BBL', 'BOL'],
        };
    },
    methods: {
        selectEducation(el) {
            this.selectedEducation = el.target.selectedOptions[0].value;
        },
        isEducationSelected(educations) {
            return educations.includes(this.selectedEducation);
        },
        getMviValue(el) {
            this.mviValue = el.target.value === 'true';
        },
    },
};
</script>
