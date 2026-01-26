'use client';

import React, { useState, useCallback } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';
import { PieRadioGroup } from '@justeattakeaway/pie-webc/react/radio-group.js';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { IconLocationPinFood } from '@justeattakeaway/pie-icons-webc/dist/react/IconLocationPinFood.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser.js';
import '@/styles/form.scss';

// Order items for the summary
const orderItems = [
    { name: 'Margherita Pizza (Large)', quantity: 1, price: 12.99 },
    { name: 'Garlic Bread', quantity: 2, price: 3.50 },
    { name: 'Caesar Salad', quantity: 1, price: 7.99 },
    { name: 'Tiramisu', quantity: 2, price: 5.99 },
];

const deliveryFee = 2.99;

export default function CheckoutFlow() {
    // Form state
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [postcode, setPostcode] = useState('');
    const [deliveryInstructions, setDeliveryInstructions] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [tipAmount, setTipAmount] = useState('none');
    const [marketingConsent, setMarketingConsent] = useState(false);
    
    // Validation state
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    // Modal state
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');

    // Calculate totals
    const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tipValue = tipAmount === 'none' ? 0 : tipAmount === 'small' ? 1.00 : tipAmount === 'medium' ? 2.00 : 3.00;
    const total = subtotal + deliveryFee + tipValue;

    // Input handlers
    const handleFullNameInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setFullName(value);
        if (errors.fullName && value.trim()) {
            setErrors(prev => ({ ...prev, fullName: '' }));
        }
    }, [errors.fullName]);

    const handlePhoneInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setPhone(value);
        if (errors.phone && value.trim()) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    }, [errors.phone]);

    const handleAddressLine1Input = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setAddressLine1(value);
        if (errors.addressLine1 && value.trim()) {
            setErrors(prev => ({ ...prev, addressLine1: '' }));
        }
    }, [errors.addressLine1]);

    const handleAddressLine2Input = useCallback((event: InputEvent) => {
        setAddressLine2((event.target as HTMLInputElement).value);
    }, []);

    const handlePostcodeInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setPostcode(value);
        if (errors.postcode && value.trim()) {
            setErrors(prev => ({ ...prev, postcode: '' }));
        }
    }, [errors.postcode]);

    const handleDeliveryInstructionsInput = useCallback((event: InputEvent) => {
        setDeliveryInstructions((event.target as HTMLTextAreaElement).value);
    }, []);

    const handlePaymentMethodChange = useCallback((event: CustomEvent) => {
        setPaymentMethod((event.target as HTMLInputElement).value);
    }, []);

    const handleTipAmountChange = useCallback((event: CustomEvent) => {
        setTipAmount((event.target as HTMLInputElement).value);
    }, []);

    const handleMarketingConsentChange = useCallback(() => {
        setMarketingConsent(prev => !prev);
    }, []);

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        
        if (!fullName.trim()) {
            newErrors.fullName = 'Please enter your full name';
        }
        if (!phone.trim()) {
            newErrors.phone = 'Please enter your phone number';
        } else if (!/^[\d\s+()-]+$/.test(phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!addressLine1.trim()) {
            newErrors.addressLine1 = 'Please enter your address';
        }
        if (!postcode.trim()) {
            newErrors.postcode = 'Please enter your postcode';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (validateForm()) {
            // Generate order number
            const newOrderNumber = `JET-${Date.now().toString(36).toUpperCase()}`;
            setOrderNumber(newOrderNumber);
            setIsConfirmationOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsConfirmationOpen(false);
    };

    return (
        <NavigationLayout title="Checkout">
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr', 
                gap: 'var(--dt-spacing-e)',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Delivery Notification */}
                <PieNotification
                    variant="info"
                    heading="Estimated delivery: 30-45 minutes"
                    isCompact
                >
                    Your order will be prepared fresh and delivered to your door.
                </PieNotification>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: 'var(--dt-spacing-e)',
                    alignItems: 'start'
                }}>
                    {/* Delivery Details Form */}
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Delivery Details</h2>
                        
                        <PieFormLabel for="fullName">
                            Full Name
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onInput={handleFullNameInput}
                            type="text"
                            required
                            status={errors.fullName ? 'error' : 'default'}
                            assistiveText={errors.fullName}
                            autocomplete="name"
                        >
                            <IconUser slot="leadingIcon" />
                        </PieTextInput>

                        <PieFormLabel for="phone">
                            Phone Number
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="phone"
                            name="phone"
                            value={phone}
                            onInput={handlePhoneInput}
                            type="tel"
                            required
                            status={errors.phone ? 'error' : 'default'}
                            assistiveText={errors.phone}
                            autocomplete="tel"
                        >
                            <IconPhone slot="leadingIcon" />
                        </PieTextInput>

                        <PieFormLabel for="addressLine1">
                            Address Line 1
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="addressLine1"
                            name="addressLine1"
                            value={addressLine1}
                            onInput={handleAddressLine1Input}
                            type="text"
                            required
                            status={errors.addressLine1 ? 'error' : 'default'}
                            assistiveText={errors.addressLine1}
                            autocomplete="address-line1"
                        >
                            <IconLocationPinFood slot="leadingIcon" />
                        </PieTextInput>

                        <PieFormLabel for="addressLine2" optional="(Optional)">
                            Address Line 2
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="addressLine2"
                            name="addressLine2"
                            value={addressLine2}
                            onInput={handleAddressLine2Input}
                            type="text"
                            autocomplete="address-line2"
                        />

                        <PieFormLabel for="postcode">
                            Postcode
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="postcode"
                            name="postcode"
                            value={postcode}
                            onInput={handlePostcodeInput}
                            type="text"
                            required
                            status={errors.postcode ? 'error' : 'default'}
                            assistiveText={errors.postcode}
                            autocomplete="postal-code"
                        />

                        <PieFormLabel for="deliveryInstructions" optional="(Optional)">
                            Delivery Instructions
                        </PieFormLabel>
                        <PieTextarea
                            className="form-field"
                            id="deliveryInstructions"
                            name="deliveryInstructions"
                            value={deliveryInstructions}
                            onInput={handleDeliveryInstructionsInput}
                            placeholder="e.g., Ring doorbell twice, leave at door..."
                        />

                        <div className="form-controls">
                            <PieRadioGroup 
                                name="paymentMethod" 
                                value={paymentMethod}
                                onChange={handlePaymentMethodChange}
                            >
                                <PieFormLabel slot="label">Payment Method</PieFormLabel>
                                <PieRadio value="card" defaultChecked>Credit/Debit Card</PieRadio>
                                <PieRadio value="paypal">PayPal</PieRadio>
                                <PieRadio value="applepay">Apple Pay</PieRadio>
                                <PieRadio value="cash">Cash on Delivery</PieRadio>
                            </PieRadioGroup>

                            <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                            <PieRadioGroup 
                                name="tipAmount" 
                                value={tipAmount}
                                onChange={handleTipAmountChange}
                            >
                                <PieFormLabel slot="label">Add a tip for your driver</PieFormLabel>
                                <PieRadio value="none" defaultChecked>No tip</PieRadio>
                                <PieRadio value="small">£1.00</PieRadio>
                                <PieRadio value="medium">£2.00</PieRadio>
                                <PieRadio value="large">£3.00</PieRadio>
                            </PieRadioGroup>

                            <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                            <PieCheckbox
                                name="marketingConsent"
                                checked={marketingConsent}
                                onChange={handleMarketingConsentChange}
                            >
                                Send me exclusive offers and discounts via email
                            </PieCheckbox>
                        </div>

                        <div className="form-btns" style={{ marginTop: 'var(--dt-spacing-e)' }}>
                            <PieButton 
                                variant="primary" 
                                size="large" 
                                type="submit"
                                isFullWidth
                            >
                                Place Order - £{total.toFixed(2)}
                            </PieButton>
                        </div>
                    </form>

                    {/* Order Summary Card */}
                    <div>
                        <h2 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Order Summary</h2>
                        <PieCard padding="d">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dt-spacing-c)' }}>
                                {orderItems.map((item, index) => (
                                    <div key={index} style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start'
                                    }}>
                                        <div>
                                            <div style={{ fontWeight: 500 }}>{item.name}</div>
                                            <div style={{ 
                                                fontSize: '0.875rem', 
                                                color: 'var(--dt-color-content-subdued)' 
                                            }}>
                                                Qty: {item.quantity}
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: 500 }}>
                                            £{(item.price * item.quantity).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                                
                                <PieDivider />
                                
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Subtotal</span>
                                    <span>£{subtotal.toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Delivery fee</span>
                                    <span>£{deliveryFee.toFixed(2)}</span>
                                </div>
                                {tipValue > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Driver tip</span>
                                        <span>£{tipValue.toFixed(2)}</span>
                                    </div>
                                )}
                                
                                <PieDivider />
                                
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    fontWeight: 700,
                                    fontSize: '1.125rem'
                                }}>
                                    <span>Total</span>
                                    <span>£{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </PieCard>
                    </div>
                </div>
            </div>

            {/* Order Confirmation Modal */}
            <PieModal
                heading="Order Confirmed! 🎉"
                headingLevel="h2"
                isOpen={isConfirmationOpen}
                isDismissible
                size="medium"
                leadingAction={{
                    text: 'Track Order',
                    variant: 'primary'
                }}
                supportingAction={{
                    text: 'Back to Home',
                    variant: 'ghost'
                }}
                onPieModalClose={handleModalClose}
            >
                <div style={{ textAlign: 'center', padding: 'var(--dt-spacing-d)' }}>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--dt-spacing-d)' }}>
                        Thank you for your order, {fullName || 'valued customer'}!
                    </p>
                    <p style={{ marginBottom: 'var(--dt-spacing-c)' }}>
                        Your order number is:
                    </p>
                    <p style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 700,
                        color: 'var(--dt-color-content-brand)',
                        marginBottom: 'var(--dt-spacing-d)'
                    }}>
                        {orderNumber}
                    </p>
                    <p style={{ color: 'var(--dt-color-content-subdued)' }}>
                        You will receive a confirmation email shortly with tracking details.
                    </p>
                </div>
            </PieModal>
        </NavigationLayout>
    );
}
