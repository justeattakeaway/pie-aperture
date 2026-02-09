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
import { PieSelect, SelectProps } from '@justeattakeaway/pie-webc/react/select.js';
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser.js';
import { IconEmail } from '@justeattakeaway/pie-icons-webc/dist/react/IconEmail.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import '@/styles/form.scss';

// Time slot options
const timeOptions: SelectProps['options'] = [
    { tag: 'option', text: 'Select a time', value: '' },
    { tag: 'option', text: '12:00', value: '12:00' },
    { tag: 'option', text: '12:30', value: '12:30' },
    { tag: 'option', text: '13:00', value: '13:00' },
    { tag: 'option', text: '13:30', value: '13:30' },
    { tag: 'option', text: '14:00', value: '14:00' },
    { tag: 'option', text: '18:00', value: '18:00' },
    { tag: 'option', text: '18:30', value: '18:30' },
    { tag: 'option', text: '19:00', value: '19:00' },
    { tag: 'option', text: '19:30', value: '19:30' },
    { tag: 'option', text: '20:00', value: '20:00' },
    { tag: 'option', text: '20:30', value: '20:30' },
    { tag: 'option', text: '21:00', value: '21:00' },
];

// Guest count options
const guestOptions: SelectProps['options'] = [
    { tag: 'option', text: 'Select number of guests', value: '' },
    { tag: 'option', text: '1 guest', value: '1' },
    { tag: 'option', text: '2 guests', value: '2' },
    { tag: 'option', text: '3 guests', value: '3' },
    { tag: 'option', text: '4 guests', value: '4' },
    { tag: 'option', text: '5 guests', value: '5' },
    { tag: 'option', text: '6 guests', value: '6' },
    { tag: 'option', text: '7 guests', value: '7' },
    { tag: 'option', text: '8 guests', value: '8' },
];

export default function RestaurantBooking() {
    // Form state
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [seatingPreference, setSeatingPreference] = useState('no-preference');
    const [specialRequests, setSpecialRequests] = useState('');
    const [marketingConsent, setMarketingConsent] = useState(false);

    // Validation state
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Modal state
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [bookingReference, setBookingReference] = useState('');

    // Input handlers
    const handleFullNameInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setFullName(value);
        if (errors.fullName && value.trim()) {
            setErrors(prev => ({ ...prev, fullName: '' }));
        }
    }, [errors.fullName]);

    const handleEmailInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setEmail(value);
        if (errors.email && value.trim()) {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    }, [errors.email]);

    const handlePhoneInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setPhone(value);
        if (errors.phone && value.trim()) {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    }, [errors.phone]);

    const handleDateInput = useCallback((event: InputEvent) => {
        const value = (event.target as HTMLInputElement).value;
        setDate(value);
        if (errors.date && value.trim()) {
            setErrors(prev => ({ ...prev, date: '' }));
        }
    }, [errors.date]);

    const handleTimeChange = useCallback((event: CustomEvent) => {
        const value = (event.target as HTMLSelectElement).value;
        setTime(value);
        if (errors.time && value) {
            setErrors(prev => ({ ...prev, time: '' }));
        }
    }, [errors.time]);

    const handleGuestsChange = useCallback((event: CustomEvent) => {
        const value = (event.target as HTMLSelectElement).value;
        setGuests(value);
        if (errors.guests && value) {
            setErrors(prev => ({ ...prev, guests: '' }));
        }
    }, [errors.guests]);

    const handleSeatingPreferenceChange = useCallback((event: CustomEvent) => {
        setSeatingPreference((event.target as HTMLInputElement).value);
    }, []);

    const handleSpecialRequestsInput = useCallback((event: InputEvent) => {
        setSpecialRequests((event.target as HTMLTextAreaElement).value);
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
        if (!email.trim()) {
            newErrors.email = 'Please enter your email address';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!phone.trim()) {
            newErrors.phone = 'Please enter your phone number';
        } else if (!/^[\d\s+()-]+$/.test(phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!date) {
            newErrors.date = 'Please select a date';
        } else {
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                newErrors.date = 'Please select a date in the future';
            }
        }
        if (!time) {
            newErrors.time = 'Please select a time';
        }
        if (!guests) {
            newErrors.guests = 'Please select the number of guests';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validateForm()) {
            const newReference = `RES-${Date.now().toString(36).toUpperCase()}`;
            setBookingReference(newReference);
            setIsConfirmationOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsConfirmationOpen(false);
    };

    const seatingLabel = seatingPreference === 'indoor' ? 'Indoor'
        : seatingPreference === 'outdoor' ? 'Outdoor'
        : 'No preference';

    return (
        <NavigationLayout title="Restaurant Booking">
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--dt-spacing-e)',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Info Notification */}
                <PieNotification
                    variant="info"
                    heading="Book your table"
                    isCompact
                >
                    Reserve a table at our restaurant. All bookings are confirmed instantly.
                </PieNotification>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'var(--dt-spacing-e)',
                    alignItems: 'start'
                }}>
                    {/* Booking Form */}
                    <form className="form" onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Your Details</h2>

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

                        <PieFormLabel for="email">
                            Email Address
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="email"
                            name="email"
                            value={email}
                            onInput={handleEmailInput}
                            type="email"
                            required
                            status={errors.email ? 'error' : 'default'}
                            assistiveText={errors.email}
                            autocomplete="email"
                        >
                            <IconEmail slot="leadingIcon" />
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

                        <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                        <h2 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Booking Details</h2>

                        <PieFormLabel for="date">
                            Date
                        </PieFormLabel>
                        <PieTextInput
                            className="form-field"
                            id="date"
                            name="date"
                            value={date}
                            onInput={handleDateInput}
                            type="text"
                            placeholder="YYYY-MM-DD"
                            required
                            status={errors.date ? 'error' : 'default'}
                            assistiveText={errors.date}
                        />

                        <PieFormLabel for="time">
                            Time
                        </PieFormLabel>
                        <PieSelect
                            className="form-field"
                            id="time"
                            name="time"
                            options={timeOptions}
                            value={time}
                            onChange={handleTimeChange}
                            status={errors.time ? 'error' : 'default'}
                            assistiveText={errors.time}
                        />

                        <PieFormLabel for="guests">
                            Number of Guests
                        </PieFormLabel>
                        <PieSelect
                            className="form-field"
                            id="guests"
                            name="guests"
                            options={guestOptions}
                            value={guests}
                            onChange={handleGuestsChange}
                            status={errors.guests ? 'error' : 'default'}
                            assistiveText={errors.guests}
                        />

                        <div className="form-controls">
                            <PieRadioGroup
                                name="seatingPreference"
                                value={seatingPreference}
                                onChange={handleSeatingPreferenceChange}
                            >
                                <PieFormLabel slot="label">Seating Preference</PieFormLabel>
                                <PieRadio value="indoor">Indoor</PieRadio>
                                <PieRadio value="outdoor">Outdoor</PieRadio>
                                <PieRadio value="no-preference" defaultChecked>No preference</PieRadio>
                            </PieRadioGroup>

                            <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                            <PieFormLabel for="specialRequests" optional="(Optional)">
                                Special Requests
                            </PieFormLabel>
                            <PieTextarea
                                className="form-field"
                                id="specialRequests"
                                name="specialRequests"
                                value={specialRequests}
                                onInput={handleSpecialRequestsInput}
                                placeholder="e.g., Allergies, high chair needed, birthday celebration..."
                            />

                            <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                            <PieCheckbox
                                name="marketingConsent"
                                checked={marketingConsent}
                                onChange={handleMarketingConsentChange}
                            >
                                Send me special offers and event updates via email
                            </PieCheckbox>
                        </div>

                        <div className="form-btns" style={{ marginTop: 'var(--dt-spacing-e)' }}>
                            <PieButton
                                variant="primary"
                                size="large"
                                type="submit"
                                isFullWidth
                            >
                                Confirm Booking
                            </PieButton>
                        </div>
                    </form>

                    {/* Booking Summary Card */}
                    <div>
                        <h2 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Booking Summary</h2>
                        <PieCard padding="d">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dt-spacing-c)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Name</span>
                                    <span style={{ fontWeight: 500 }}>{fullName || '—'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Email</span>
                                    <span style={{ fontWeight: 500 }}>{email || '—'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Phone</span>
                                    <span style={{ fontWeight: 500 }}>{phone || '—'}</span>
                                </div>

                                <PieDivider />

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Date</span>
                                    <span style={{ fontWeight: 500 }}>{date || '—'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Time</span>
                                    <span style={{ fontWeight: 500 }}>{time || '—'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Guests</span>
                                    <span style={{ fontWeight: 500 }}>{guests ? `${guests} guest${guests === '1' ? '' : 's'}` : '—'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Seating</span>
                                    <span style={{ fontWeight: 500 }}>{seatingLabel}</span>
                                </div>

                                {specialRequests && (
                                    <>
                                        <PieDivider />
                                        <div>
                                            <span style={{ color: 'var(--dt-color-content-subdued)', display: 'block', marginBottom: 'var(--dt-spacing-a)' }}>Special Requests</span>
                                            <span style={{ fontWeight: 500 }}>{specialRequests}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </PieCard>
                    </div>
                </div>
            </div>

            {/* Booking Confirmation Modal */}
            <PieModal
                heading="Booking Confirmed!"
                headingLevel="h2"
                isOpen={isConfirmationOpen}
                isDismissible
                size="medium"
                leadingAction={{
                    text: 'Done',
                    variant: 'primary'
                }}
                onPieModalClose={handleModalClose}
            >
                <div style={{ textAlign: 'center', padding: 'var(--dt-spacing-d)' }}>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--dt-spacing-d)' }}>
                        Thank you, {fullName || 'valued guest'}!
                    </p>
                    <p style={{ marginBottom: 'var(--dt-spacing-c)' }}>
                        Your booking reference is:
                    </p>
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--dt-color-content-brand)',
                        marginBottom: 'var(--dt-spacing-d)'
                    }}>
                        {bookingReference}
                    </p>

                    <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 'var(--dt-spacing-b)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--dt-color-content-subdued)' }}>Date</span>
                            <span style={{ fontWeight: 500 }}>{date}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--dt-color-content-subdued)' }}>Time</span>
                            <span style={{ fontWeight: 500 }}>{time}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--dt-color-content-subdued)' }}>Guests</span>
                            <span style={{ fontWeight: 500 }}>{guests} guest{guests === '1' ? '' : 's'}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: 'var(--dt-color-content-subdued)' }}>Seating</span>
                            <span style={{ fontWeight: 500 }}>{seatingLabel}</span>
                        </div>
                    </div>

                    <p style={{ color: 'var(--dt-color-content-subdued)', marginTop: 'var(--dt-spacing-d)' }}>
                        A confirmation email has been sent to {email}.
                    </p>
                </div>
            </PieModal>
        </NavigationLayout>
    );
}
