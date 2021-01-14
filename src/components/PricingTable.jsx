import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PricingTable extends Component {
    render() { 
        return (
            <div class="row mt-5">
                <div class="col-4">
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <div className="price-value">
                                <div className="amount">$0</div>
                                <span class="month">Per month</span>
                            </div>
                            <h3 class="title">Stater</h3>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Centralized teams</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Version history</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Plugin administration</span></li>
                                <li><FontAwesomeIcon icon="times-circle"/><span>Facebook & Instagram Ads</span></li>
                                <li><FontAwesomeIcon icon="times-circle"/><span>Design System Analytics</span></li>
                                <li><FontAwesomeIcon icon="times-circle"/><span>Unlimited cloud storage</span></li>
                            </ul>
                            <a class="pricingTable-signup" href="pass">Go Starter</a>
                        </div>
                    </div>
                </div>
         
                <div class="col-4">
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <div className="price-value">
                                <div className="amount">$20</div>
                                <span class="month">Per month</span>
                            </div>
                            <h3 class="title">Professional</h3>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Centralized teams</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Version history</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Plugin administration</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Facebook & Instagram Ads</span></li>
                                <li><FontAwesomeIcon icon="times-circle"/><span>Design System Analytics</span></li>
                                <li><FontAwesomeIcon icon="times-circle"/><span>Unlimited cloud storage</span></li>
                            </ul>
                            <a class="pricingTable-signup" href="pass">Go Professional</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-4">
                    <div class="pricingTable">
                        <div class="pricingTable-header">
                            <div className="price-value">
                                <div className="amount">$50</div>
                                <span class="month">Per month</span>
                            </div>
                            <h3 class="title">Organization</h3>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Centralized teams</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Version history</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Plugin administration</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Facebook & Instagram Ads</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Design System Analytics</span></li>
                                <li><FontAwesomeIcon icon="check-circle"/><span>Unlimited cloud storage</span></li>
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