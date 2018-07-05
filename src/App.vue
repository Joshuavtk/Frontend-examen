<template>
    <div id="app">
        <Wrapper>
            <Tabs>
                <Tab title="Gegevens van de leerling." name="Begin" :selected="true">
                    <div class="form-group row">
                        <label :class="labelClass">Naam leerling</label>
                        <div :class="inputWrapper">
                            <input type="text" placeholder="Naam..." class="form-control">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label :class="labelClass">Geboortedatum</label>
                        <div :class="inputWrapper">
                            <input type="date" class="form-control">
                        </div>
                    </div>
                </Tab>
                <Tab title="Welke opleiding volgt de leerling?" name="Opleiding">
                    <Education/>
                </Tab>
                <Tab title="Hoe is uw indruk op school over de leerling?" name="Indruk">
                    <Impression/>
                </Tab>
                <Tab title="Bijzonderheden (i.v.m. de mogelijkheden tot extra begeleiding)" name="Bijzonderheden">
                    <Exceptions/>
                </Tab>
                <Tab title="Uw persoonlijke gegevens." name="Uw gegevens">
                    <PersonalInfo/>
                </Tab>
            </Tabs>
        </Wrapper>
    </div>
</template>

<script>
import Wrapper from './components/Wrapper';
import Education from './components/Education';
import Impression from './components/Impression';
import Exceptions from './components/Exceptions';
import PersonalInfo from './components/PersonalInfo';
import Tab from './components/Tab';
import Tabs from './components/Tabs';

export default {
    name: 'App',
    components: {
        Wrapper,
        Education,
        Impression,
        Exceptions,
        PersonalInfo,
        Tab,
        Tabs,
    },
};
</script>

<style lang="scss">
$primary: #ff008c;

@import '../node_modules/bootstrap/scss/bootstrap.scss';

html {
    background-color: black;
    background-image: url('assets/ma.svg');
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    height: 100%;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ff008c;
    margin: 60px 0;
    background-color: black;
}
</style>
