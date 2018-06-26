<template>
    <div class="card-header form-inline p-0">
        <ul class="navbar navbar-light bg-light mr-auto p-0 m-0">
            <li data-step="1" class="complete nav-link">Start
                <span class="chevron"></span>
            </li>
            <li data-step="2" class="active nav-link">Opleiding
                <span class="chevron"></span>
            </li>
            <li data-step="3" class="nav-link">Indruk
                <span class="chevron"></span>
            </li>
            <li data-step="4" class="nav-link">Bijzonderheden
                <span class="chevron"></span>
            </li>
            <li data-step="5" class="nav-link">Uw gegevens
                <span class="chevron"></span>
            </li>
        </ul>
        <div class="actions">
            <button type="button" class="btn btn-xs btn-prev btn-secondary">
                <i class="icon mdi mdi-chevron-left"></i> Prev</button>
            <button type="button" data-last="Finish" class="btn btn-xs btn-next btn-secondary">Next
                <i class="icon mdi mdi-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

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
</style>
