<template>
    <div>
        <div class="form-group row">
            <div class="col-sm-6">
                <label class="col-form-label">Buy Credits:
                    <span id="credits">$30</span>
                </label>
                <p>This option allow you to buy an amount of credits.</p>
                <input id="credit_slider" type="text" value="30" class="bslider form-control">
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
                <input id="rate_slider" data-slider-min="0" data-slider-max="100"
                type="text" value="5" class="bslider form-control">
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
    </div>
</template>
