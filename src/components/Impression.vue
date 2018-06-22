<template>
    <div data-step="2" class="step-pane">
        <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate=""
        novalidate="" class="group-border-dashed">
            <div class="form-group row">
                <div class="col-sm-7">
                    <h3 class="wizard-title">Notifications</h3>
                </div>
            </div>
            <div class="form-group row align-items-center">
                <div class="col-sm-7">
                    <label class="col-form-label">E-Mail Notifications</label>
                    <p>This option allow you to recieve email notifications by us.</p>
                </div>
                <div class="col-sm-3">
                    <div class="switch-button">
                        <input type="checkbox" checked="" name="swt1" id="swt1">
                        <span>
                            <label for="swt1"></label>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center">
                <div class="col-sm-7">
                    <label class="col-form-label">Phone Notifications</label>
                    <p>Allow us to send phone notifications to your cell phone.</p>
                </div>
                <div class="col-sm-3">
                    <div class="switch-button">
                        <input type="checkbox" checked="" name="swt2" id="swt2">
                        <span>
                            <label for="swt2"></label>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group row align-items-center">
                <div class="col-sm-7">
                    <label class="col-form-label">Global Notifications</label>
                    <p>Allow us to send notifications to your dashboard.</p>
                </div>
                <div class="col-sm-3">
                    <div class="switch-button">
                        <input type="checkbox" checked="" name="swt3" id="swt3">
                        <span>
                            <label for="swt3"></label>
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                    <button data-wizard="#wizard1"
                    class="btn btn-secondary btn-space wizard-previous">Previous</button>
                    <button data-wizard="#wizard1"
                    class="btn btn-primary btn-space wizard-next">Next Step</button>
                </div>
            </div>
        </form>
    </div>
</template>
