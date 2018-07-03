<template>
    <div id="app">
        <Wrapper>
            <tabs>
                <tab name="Begin" :selected="true">
                    <Start/>
                </tab>
                <tab name="Opleiding">
                    <Education/>
                </tab>
                <tab name="Indruk">
                    <Impression/>
                </tab>
                <tab name="Bijzonderheden">
                    <Exceptions/>
                </tab>
                <tab name="Uw gegevens">
                    <PersonalInfo/>
                </tab>
            </tabs>
        </Wrapper>
    </div>
</template>

<script>
import Wrapper from './components/Wrapper';
import Start from './components/Start';
import Education from './components/Education';
import Impression from './components/Impression';
import Exceptions from './components/Exceptions';
import PersonalInfo from './components/PersonalInfo';
import tab from './components/tab';
import tabs from './components/tabs';

export default {
    name: 'App',
    components: {
        Wrapper,
        Start,
        Education,
        Impression,
        Exceptions,
        PersonalInfo,
        tab,
        tabs,
    },
};
</script>

<style lang="scss">
$primary: #ff008c;

@import '../node_modules/bootstrap/scss/bootstrap.scss';

html {
    background-color: black;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ff008c;
    margin-top: 60px;
    background-color: black;
}
</style>
