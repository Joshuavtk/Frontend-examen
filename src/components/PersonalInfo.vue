<template>
    <div data-step="4" class="step-pane">
        <form action="#" data-parsley-namespace="data-parsley-"
        data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
            <div class="form-group row">
                <div class="col-sm-7">
                    <h3 class="wizard-title">Uw gegevens</h3>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <label class="col-form-label">Naam:</label>
                    <input type="text" value="Naam..." class="form-control">
                </div>
                <div class="col-sm-6">
                    <label class="col-form-label">Geslacht:</label><br>
                    <label class="col-form-label">Man
                    <input type="radio" name="gender" value="Man"></label>
                    <label class="col-form-label">Vrouw
                    <input type="radio" name="gender" value="Vrouw"></label>
                </div>
                <div class="col-sm-6">
                    <label class="col-form-label">Change Plan</label>
                    <p>Change your plan many times as you want.</p>
                    <select class="select2">
                        <optgroup label="Personal">
                            <option value="p1">Basic</option>
                            <option value="p2">Medium</option>
                        </optgroup>
                        <optgroup label="Company">
                            <option value="p3">Standard</option>
                            <option value="p4">Silver</option>
                            <option value="p5">Gold</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <label class="col-form-label">Payment Rate:
                        <span id="rate">5%</span>
                    </label>
                    <p>Choose your payment rate to calculate how much money you will recieve.</p>
                    <input id="rate_slider" data-slider-min="0" data-slider-max="100" type="text"
                    value="5" class="bslider form-control">
                </div>
                <div class="col-sm-6">
                    <label class="col-form-label">Keywords</label>
                    <p>Write your keywords to do a successful SEO with web search engines.</p>
                    <select multiple="" class="tags">
                        <option value="1">Twitter</option>
                        <option value="2">Google</option>
                        <option value="3">Facebook</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-12">
                    <button data-wizard="#wizard1"
                    class="btn btn-secondary btn-space wizard-previous">Previous</button>
                    <button data-wizard="#wizard1"
                    class="btn btn-success btn-space wizard-next">Complete</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>
