<template>
    <div>
        <div v-for="(sub_categories, index) in categories" :key="index">
            <h4>{{index}}</h4>
            <InlineRadio v-for="(category, index) in sub_categories" :key="index" :title="category" :array="results"/>
        </div>
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
            categories: {
                'Werkhouding': [
                    'Concentratie',
                    'Werktempo',
                    'Zelfstandig werken in klas',
                ],
                'Instelling': ['Motivatie', 'Doorzettingsvermogen'],
                'Vaardigheden': [
                    'Communicatieve vaardigheden',
                    'Sociale vaardigheden',
                ],
            },
            results: ['Goed', 'Voldoende', 'Zwak', 'Onvoldoende'],
        };
    },
};
</script>
