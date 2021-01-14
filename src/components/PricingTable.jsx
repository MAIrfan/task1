import React, { Component } from 'react';

class PricingTable extends Component {
    render() { 
        return (
            <div class="row mt-5">
                <div class="col-4">
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <h3 class="title">Stater</h3>
                            <span class="currency">$</span>
                            <span class="price-value">0</span>
                            <span class="month">Per user, per month</span>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>Centralized teams</li>
                                <li>Version history</li>
                                <li>Plugin administration</li>
                                <li class="disable">Facebook & Instagram Ads</li>
                                <li class="disable">Design System Analytics</li>
                                <li class="disable">Unlimited cloud storage</li>
                            </ul>
                            <a class="pricingTable-signup" href="pass">Go Starter</a>
                        </div>
                    </div>
                </div>
         
                <div class="col-4">
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <h3 class="title">Professional</h3>
                            <span class="currency">$</span>
                            <span class="price-value">25</span>
                            <span class="month">Per user, per month</span>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>Centralized teams</li>
                                <li>Version history</li>
                                <li>Plugin administration</li>
                                <li>Facebook & Instagram Ads</li>
                                <li class="disable">Design System Analytics</li>
                                <li class="disable">Unlimited cloud storage</li>
                            </ul>
                            <a class="pricingTable-signup" href="pass">Go Professional</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <h3 class="title">Organization</h3>
                            <span class="currency">$</span>
                            <span class="price-value">50</span>
                            <span class="month">Per user, per month</span>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>Centralized teams</li>
                                <li>Version history</li>
                                <li>Plugin administration</li>
                                <li>Facebook & Instagram Ads</li>
                                <li>Design System Analytics</li>
                                <li>Unlimited cloud storage</li>
                            </ul>
                            <a class="pricingTable-signup" href="pass">Go Organization</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PricingTable;