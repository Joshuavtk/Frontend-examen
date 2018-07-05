<template>
    <div>

        <div class="form-group row">
            <label :class="labelClass" for="name">Naam</label>
            <div :class="inputWrapper">
                <input type="text" class="form-control" id="name" placeholder="Naam...">
            </div>
        </div>

        <InlineRadio title="Geslacht" :array="['Man', 'Vrouw']" />

        <div class="form-group row">
            <label :class="labelClass" for="function">Functie</label>
            <div :class="inputWrapper">
                <input type="text" class="form-control" id="function" placeholder="Functie...">
            </div>
        </div>

        <div class="form-group row">
            <label :class="labelClass" for="e-mail">E-mail</label>
            <div :class="inputWrapper">
                <input type="email" class="form-control" id="e-mail" placeholder="E-mail...">
            </div>
        </div>

        <div class="form-group row">
            <label :class="labelClass" for="school">Naam school</label>
            <div :class="inputWrapper">
                <input type="text" class="form-control" id="school" placeholder="School...">
            </div>
        </div>

        <div class="form-group row">
            <label :class="labelClass" for="location">Plaats</label>
            <div :class="inputWrapper">
                <input type="text" class="form-control" id="location" placeholder="Plaats...">
            </div>
        </div>

        <div class="form-group row">
            <label :class="labelClass" for="telephone">Telefoon</label>
            <div :class="inputWrapper">
                <input type="text" class="form-control" id="telephone" placeholder="Telefoon...">
            </div>
        </div>

        <ButtonRadio title="Telefonisch contact gewenst" identifier="call-me"/>

    </div>
</template>

<script>
import ButtonRadio from './ButtonRadio';
import InlineRadio from './InlineRadio';

export default {
    components: {
        ButtonRadio,
        InlineRadio,
    },
};
</script>
