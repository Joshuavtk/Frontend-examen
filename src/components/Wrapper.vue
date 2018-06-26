<template>
    <div class="main-content container-fluid">
        <div class="row">
            <div class="col">
                <div id="wizard1" class="card">
                    <Header/>
                    <div class="step-content">
                        <Start/>
                        <Education/>
                        <Impression/>
                        <Exceptions/>
                        <PersonalInfo/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header';
import Start from './Start';
import Education from './Education';
import Impression from './Impression';
import Exceptions from './Exceptions';
import PersonalInfo from './PersonalInfo';

export default {
    name: 'HelloWorld',
    components: {
        Header,
        Start,
        Education,
        Impression,
        Exceptions,
        PersonalInfo,
    },
    data() {
        return {
            msg: 'Formulier',
        };
    },
};
</script>

<style scoped>
.card {
    border: unset;
    border-radius: 0;
}
</style>
