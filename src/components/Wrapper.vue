<template>
    <div class="main-content container-fluid">
        <div class="row wizard-row">
            <div class="col-md-12 fuelux">
                <div class="block-wizard">
                    <div id="wizard1" class="card">
                        <div class="card-header form-inline p-0">
                            <ul class="navbar navbar-light bg-light mr-auto p-0 m-0">
                                <li data-step="1" class="active nav-link">Start
                                    <span class="chevron"></span>
                                </li>
                                <li data-step="2" class="nav-link">Opleiding
                                    <span class="chevron"></span>
                                </li>
                                <li data-step="3" class="nav-link">Indruk
                                    <span class="chevron"></span>
                                </li>
                                <li data-step="4" class="nav-link">Bijzonderheden
                                    <span class="chevron"></span>
                                </li>
                                <li data-step="4" class="nav-link">Uw gegevens
                                    <span class="chevron"></span>
                                </li>
                            </ul>
                            <div class="actions">
                                <button type="button" class="btn btn-xs btn-prev btn-secondary">
                                    <i class="icon mdi mdi-chevron-left"></i> Prev</button>
                                <button type="button" data-last="Finish"
                                class="btn btn-xs btn-next btn-secondary">Next
                                    <i class="icon mdi mdi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
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
    </div>
</template>

<script>
import Start from "./Start";
import Education from "./Education";
import Impression from "./Impression";
import Exceptions from "./Exceptions";
import PersonalInfo from "./PersonalInfo";

export default {
  name: "HelloWorld",
  components: {
    Start,
    Education,
    Impression,
    Exceptions,
    PersonalInfo
  },
  data() {
    return {
      msg: "Formulier"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chevron::before {
  /* -moz-transform: scale(0.9999); */
  border-left: 14px solid #ffffff;
  border: 24px solid transparent;
  /* border-right-width: 24px;
        border-left-width: 24px;
        border-right-style: solid;
        border-left-style: solid; */
  /* border-right-color: transparent;
        border-left-color: transparent; */
  border-left: 14px solid #ededed;
  border-right: 0;
  content: "";
  display: block;
  position: absolute;
  right: 1px;
  top: -24px;
}
.chevron {
  border: 24px solid transparent;
  /* border-right-width: 24px;
        border-left-width: 24px;
        border-right-style: solid;
        border-left-style: solid;
        border-right-color: transparent;
        border-left-color: transparent; */
  border-left: 14px solid #d4d4d4;
  border-left-color: rgb(212, 212, 212);
  border-right: 0;
  display: block;
  position: absolute;
  right: -14px;
  top: 0;
  z-index: 1;
}
li {
  padding: 0 20px 0 30px;
  height: 48px;
  line-height: 46px;
  position: relative;
  background: #ededed;
  color: #999999;
}
li.active {
  background: #ffffff;
  color: #4285f4;
}
li.active > .chevron::before {
  border-left: 14px solid #ffffff;
}
</style>
