<template>
    <div data-step="1" class="step-pane active">
        <div class="container p-0">
            <form action="#" data-parsley-namespace="data-parsley-"
            data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                <div class="form-group row">
                    <div class="col-sm-7">
                        <h3 class="wizard-title">User Info</h3>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-12 col-sm-3 col-form-label text-left text-sm-right">
                        User Name</label>
                    <div class="col-12 col-sm-8 col-lg-6">
                        <input type="text" placeholder="User name" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-12 col-sm-3 col-form-label text-left text-sm-right">
                        E-Mail</label>
                    <div class="col-12 col-sm-8 col-lg-6">
                        <input type="text" placeholder="User E-Mail" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-12 col-sm-3 col-form-label text-left text-sm-right">
                        Password</label>
                    <div class="col-12 col-sm-8 col-lg-6">
                        <input type="password" placeholder="Enter your password"
                        class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-12 col-sm-3 col-form-label text-left text-sm-right">
                        Verify Password</label>
                    <div class="col-12 col-sm-8 col-lg-6">
                        <input type="password" placeholder="Enter your password again"
                        class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                        <button class="btn btn-secondary btn-space">Cancel</button>
                        <button data-wizard="#wizard1"
                        class="btn btn-primary btn-space wizard-next">Next Step</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
