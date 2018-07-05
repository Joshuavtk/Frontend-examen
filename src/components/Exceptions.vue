<template>
    <div>
        <div class="form-group row">
            <label for="condition" :class="labelClass">
                Heeft de leerling een aandoening en/of beperking die van
                invloed op de studie is of kan zijn?
            </label>
            <div :class="inputWrapper">
                <textarea class="form-control" id="condition" rows="3"></textarea>
            </div>
        </div>

        <ButtonRadio v-for="(object, index) in objects" :identifier="index" :title="object[0]"
            :key="index" :description="object[1]"/>

        <ButtonRadio identifier="otherCare" @specialCare="showSpecialCare" :title="otherCare"/>

        <div class="form-group row" v-show="specialCareVisible">
            <label for="special_care" :class="labelClass">
                Zoja, welke zorg?
            </label>
            <div :class="inputWrapper">
                <textarea class="form-control" id="special_care" rows="1"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label for="personal_state" :class="labelClass">Zijn er andere bijzondere
                persoonlijk omstandigheden waarvan de school op de hoogte moet zijn?*
            </label>
            <div :class="inputWrapper">
                <textarea class="form-control" id="personal_state" rows="3"></textarea>
            </div>
            <p class="text-info col-12 col-lg-10">
                *Hieronder verstaat het Mediacollege Amsterdam
                bijzonderheden/beperkingen die van invloed kunnen zijn op het succesvol
                volgen van de opleiding zoals o.a. epilepsie, slechthorendheid, ADHD,
                suikerziekte etc.
            </p>
        </div>

    </div>
</template>

<script>
import ButtonRadio from './ButtonRadio';

export default {
    components: {
        ButtonRadio,
    },
    data() {
        return {
            objects: {
                specialEducation: ['Volgt de leerling speciaal onderwijs?'],
                dyslect: [
                    'Heeft de leerling dyslexie?',
                    '(bij plaatsing inleveren dyslexieverklaring verplicht)',
                ],
                dyscalculia: [
                    'Heeft de leerling dyscalculie?',
                    '(bij plaatsing inleveren dyscalculieverklaring verplicht)',
                ],
                talkedAbout: [
                    'Is de leerling recent besproken in het extern zorg- en adviesteam (ZAT)',
                ],
            },
            otherCare: 'Ontvangt de leerling nog andere zorg?',
            specialCareVisible: false,
        };
    },
    methods: {
        showSpecialCare() {
            this.specialCareVisible = document.querySelector('#othercare_1').checked;
        },
    },
};
</script>
