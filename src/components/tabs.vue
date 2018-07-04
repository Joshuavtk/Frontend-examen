<template>
    <div class="card">
        <div class="card-header form-inline p-0">
            <div class="form-group w-100 border-bottom text-center mb-0">
                <h3 class="form-title w-100">Inlichtingenformulier schooljaar 2018 - 2019</h3>
            </div>
            <ul class="navbar navbar-light bg-light mr-auto p-0 m-0">
                <li class="nav-link" v-for="tab in tabs" :key="tab.id" :class="{ 'active': tab.isActive, 'complete': tab.completed }">
                    {{tab.name}}
                    <span class="chevron"></span>
                </li>
            </ul>
            <div class="mr-1">
                <button type="button" class="btn btn-xs btn-prev btn-secondary" :disabled="!canGoBack" @click="previousTab">
                    ⬅ Terug</button>
                <button type="button" data-last="Finish" class="btn btn-xs btn-next btn-secondary" :disabled="!canGoFurther" @click="nextTab">Verder ➡
                </button>
            </div>
        </div>
        <div class="step-content">
            <div class="step-pane active">
                <div class="container p-0 mt-3">
                    <form action="#" class="form-horizontal group-border-dashed">
                        <slot></slot>
                        <div class="form-group row">
                            <div class="offset-sm-2 col-sm-10">
                                <button class="btn btn-secondary btn-space" :disabled="!canGoBack" @click="previousTab">
                                    Vorige stap
                                </button>
                                <button class="btn btn-primary btn-space" :disabled="!canGoFurther" @click="nextTab">
                                    Volgende stap
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                if (tab === selectedTab) {
                    tab.isActive = true;
                    this.canGoBack = tab !== this.tabs[0];
                    this.canGoFurther = tab !== this.tabs[this.tabs.length - 1];
                } else {
                    tab.isActive = false;
                }
            });
        },
        nextTab() {
            let nextTab = 0;
            this.tabs.forEach((tab, i) => {
                if (tab.isActive) {
                    tab.completed = true;
                    nextTab = i;
                }
            });
            this.selectTab(this.tabs[nextTab + 1]);
        },
        previousTab() {
            this.tabs.forEach((tab, i) => {
                if (tab.isActive) {
                    const previousTab = this.tabs[i - 1];
                    previousTab.completed = false;
                    this.selectTab(previousTab);
                }
            });
        },
    },

    data() {
        return {
            tabs: [],
            canGoBack: false,
            canGoFurther: true,
        };
    },

    created() {
        this.tabs = this.$children;
    },
};
</script>


<style scoped>
.chevron::before {
    border-left: 14px solid #ffffff;
    border: 24px solid transparent;
    border-left: 14px solid #ededed;
    border-right: 0;
    content: '';
    display: block;
    position: absolute;
    right: 1px;
    top: -24px;
}

.chevron {
    border: 24px solid transparent;
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
    color: #ff008c;
}

li.active > .chevron::before {
    border-left: 14px solid #ffffff;
}

li.complete {
    color: #ffffff;
    background: #ff008c;
}

li.complete > .chevron::before {
    border-left: 14px solid #ff008c;
}

.form-title {
    text-transform: uppercase;
    margin-top: 0.5rem;
}

.navbar {
    margin-left: -1px !important;
}

form {
    color: black;
}

@media (max-width: 650px) {
    .navbar {
        display: block;
    }
}
</style>
