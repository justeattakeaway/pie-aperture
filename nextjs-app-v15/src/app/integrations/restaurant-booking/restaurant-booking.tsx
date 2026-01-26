'use client';

import React, { useState, useCallback } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
import { PieSelect, SelectProps } from '@justeattakeaway/pie-webc/react/select.js';
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';
import { PieRadioGroup } from '@justeattakeaway/pie-webc/react/radio-group.js';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieCheckboxGroup } from '@justeattakeaway/pie-webc/react/checkbox-group.js';
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import { IconEmail } from '@justeattakeaway/pie-icons-webc/dist/react/IconEmail.js';
import { IconUser } from '@justeattakeaway/pie-icons-webc/dist/react/IconUser.js';
import '@/styles/form.scss';

// Time slot options
const timeSlotOptions: SelectProps['options'] = [
    { tag: 'option', text: 'Select a time', value: '' },
    { tag: 'optgroup', label: 'Lunch', options: [
        { tag: 'option', text: '12:00 PM', value: '12:00' },
        { tag: 'option', text: '12:30 PM', value: '12:30' },
        { tag: 'option', text: '1:00 PM', value: '13:00' },
        { tag: 'option', text: '1:30 PM', value: '13:30' },
        { tag: 'option', text: '2:00 PM', value: '14:00' },
    ]},
    { tag: 'optgroup', label: 'Dinner', options: [
        { tag: 'option', text: '6:00 PM', value: '18:00' },
        { tag: 'option', text: '6:30 PM', value: '18:30' },
        { tag: 'option', text: '7:00 PM', value: '19:00' },
        { tag: 'option', text: '7:30 PM', value: '19:30' },
        { tag: 'option', text: '8:00 PM', value: '20:00' },
        { tag: 'option', text: '8:30 PM', value: '20:30' },
        { tag: 'option', text: '9:00 PM', value: '21:00' },
    ]},
];

// Party size options
const partySizeOptions: SelectProps['options'] = [
    { tag: 'option', text: 'Select party size', value: '' },
    { tag: 'option', text: '1 person', value: '1' },
    { tag: 'option', text: '2 people', value: '2' },
    { tag: 'option', text: '3 people', value: '3' },
    { tag: 'option', text: '4 people', value: '4' },
    { tag: 'option', text: '5 people', value: '5' },
    { tag: 'option', text: '6 people', value: '6' },
    { tag: 'option', text: '7+ people (Large party)', value: '7+' },
];

export default function RestaurantBooking() {
    // Form state
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [partySize, setPartySize] = useState('');
    const [seatingPreference, setSeatingPreference] = useState('no-preference');
    const [specialRequests, setSpecialRequests] = useState('');
    
    // Dietary requirements (checkboxes)
    const [vegetarian, setVegetarian] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [nutAllergy, setNutAllergy] = useState(false);
    const [halal, setHalal] = useState(false);
    
    // Other options
    const [isSpecialOccasion, setIsSpecialOccasion] = useState(false);
    const [occasionType, setOccasionType] = useState('');
    const [smsReminder, setSmsReminder] = useState(true);
    
    // Validation state
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    // Modal state
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [bookingRef, setBookingRef] = useState('');

    // Generate min date (today)
    const today = new Date().toISOString().split('T')[0];

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
        if (errors.date && value) {
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

    const handlePartySizeChange = useCallback((event: CustomEvent) => {
        const value = (event.target as HTMLSelectElement).value;
        setPartySize(value);
        if (errors.partySize && value) {
            setErrors(prev => ({ ...prev, partySize: '' }));
        }
    }, [errors.partySize]);

    const handleSeatingPreferenceChange = useCallback((event: CustomEvent) => {
        setSeatingPreference((event.target as HTMLInputElement).value);
    }, []);

    const handleSpecialRequestsInput = useCallback((event: InputEvent) => {
        setSpecialRequests((event.target as HTMLTextAreaElement).value);
    }, []);

    const handleSpecialOccasionChange = useCallback(() => {
        setIsSpecialOccasion(prev => !prev);
    }, []);

    const handleOccasionTypeChange = useCallback((event: CustomEvent) => {
        setOccasionType((event.target as HTMLInputElement).value);
    }, []);

    const handleSmsReminderChange = useCallback(() => {
        setSmsReminder(prev => !prev);
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
        }
        if (!date) {
            newErrors.date = 'Please select a date';
        }
        if (!time) {
            newErrors.time = 'Please select a time slot';
        }
        if (!partySize) {
            newErrors.partySize = 'Please select party size';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (validateForm()) {
            // Generate booking reference
            const ref = `BK-${Date.now().toString(36).toUpperCase().slice(-6)}`;
            setBookingRef(ref);
            setIsConfirmationOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsConfirmationOpen(false);
    };

    // Format date for display
    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        return new Date(dateStr).toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Format time for display
    const formatTime = (timeStr: string) => {
        if (!timeStr) return '';
        const [hours, minutes] = timeStr.split(':');
        const hour = parseInt(hours, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:${minutes} ${period}`;
    };

    return (
        <NavigationLayout title="Book a Table">
            <div style={{ 
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {/* Restaurant Info Card */}
                <PieCard padding="d" style={{ marginBottom: 'var(--dt-spacing-e)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dt-spacing-b)' }}>
                        <h2 style={{ margin: 0 }}>La Bella Italia 🍝</h2>
                        <p style={{ margin: 0, color: 'var(--dt-color-content-subdued)' }}>
                            Authentic Italian cuisine in the heart of the city. Fresh pasta, wood-fired pizzas, and an extensive wine selection.
                        </p>
                        <div style={{ display: 'flex', gap: 'var(--dt-spacing-d)', flexWrap: 'wrap' }}>
                            <span>📍 123 High Street, London EC1A 1BB</span>
                            <span>⭐ 4.8 (324 reviews)</span>
                        </div>
                    </div>
                </PieCard>

                <PieNotification
                    variant="info"
                    heading="Booking Policy"
                    isCompact
                    style={{ marginBottom: 'var(--dt-spacing-e)' }}
                >
                    We hold reservations for 15 minutes. For parties of 7+, please call us directly.
                </PieNotification>

                <form className="form" onSubmit={handleSubmit}>
                    <h3 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Reservation Details</h3>
                    
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: 'var(--dt-spacing-d)',
                        marginBottom: 'var(--dt-spacing-d)'
                    }}>
                        <div>
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
                                required
                                placeholder="YYYY-MM-DD"
                                status={errors.date ? 'error' : 'default'}
                                assistiveText={errors.date || `Select your preferred date (${today} or later)`}
                            />
                        </div>
                        
                        <div>
                            <PieFormLabel for="time">
                                Time
                            </PieFormLabel>
                            <PieSelect
                                className="form-field"
                                id="time"
                                name="time"
                                options={timeSlotOptions}
                                value={time}
                                onChange={handleTimeChange}
                                status={errors.time ? 'error' : 'default'}
                                assistiveText={errors.time}
                            />
                        </div>
                        
                        <div>
                            <PieFormLabel for="partySize">
                                Party Size
                            </PieFormLabel>
                            <PieSelect
                                className="form-field"
                                id="partySize"
                                name="partySize"
                                options={partySizeOptions}
                                value={partySize}
                                onChange={handlePartySizeChange}
                                status={errors.partySize ? 'error' : 'default'}
                                assistiveText={errors.partySize}
                            />
                        </div>
                    </div>

                    <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                    <h3 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Contact Information</h3>
                    
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
                        assistiveText={errors.email || 'Confirmation will be sent to this email'}
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

                    <h3 style={{ marginBottom: 'var(--dt-spacing-d)' }}>Preferences</h3>

                    <div className="form-controls">
                        <PieRadioGroup 
                            name="seatingPreference" 
                            value={seatingPreference}
                            onChange={handleSeatingPreferenceChange}
                        >
                            <PieFormLabel slot="label">Seating Preference</PieFormLabel>
                            <PieRadio value="no-preference" defaultChecked>No preference</PieRadio>
                            <PieRadio value="indoor">Indoor</PieRadio>
                            <PieRadio value="outdoor">Outdoor / Terrace</PieRadio>
                            <PieRadio value="window">Window seat</PieRadio>
                            <PieRadio value="booth">Booth</PieRadio>
                        </PieRadioGroup>

                        <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                        <PieCheckboxGroup>
                            <PieFormLabel slot="label">Dietary Requirements (select all that apply)</PieFormLabel>
                            <PieCheckbox
                                name="vegetarian"
                                checked={vegetarian}
                                onChange={() => setVegetarian(prev => !prev)}
                            >
                                Vegetarian
                            </PieCheckbox>
                            <PieCheckbox
                                name="vegan"
                                checked={vegan}
                                onChange={() => setVegan(prev => !prev)}
                            >
                                Vegan
                            </PieCheckbox>
                            <PieCheckbox
                                name="glutenFree"
                                checked={glutenFree}
                                onChange={() => setGlutenFree(prev => !prev)}
                            >
                                Gluten-free
                            </PieCheckbox>
                            <PieCheckbox
                                name="nutAllergy"
                                checked={nutAllergy}
                                onChange={() => setNutAllergy(prev => !prev)}
                            >
                                Nut allergy
                            </PieCheckbox>
                            <PieCheckbox
                                name="halal"
                                checked={halal}
                                onChange={() => setHalal(prev => !prev)}
                            >
                                Halal
                            </PieCheckbox>
                        </PieCheckboxGroup>

                        <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                        <PieCheckbox
                            name="isSpecialOccasion"
                            checked={isSpecialOccasion}
                            onChange={handleSpecialOccasionChange}
                        >
                            This is a special occasion
                        </PieCheckbox>

                        {isSpecialOccasion && (
                            <PieRadioGroup 
                                name="occasionType" 
                                value={occasionType}
                                onChange={handleOccasionTypeChange}
                                style={{ marginTop: 'var(--dt-spacing-c)', marginLeft: 'var(--dt-spacing-e)' }}
                            >
                                <PieFormLabel slot="label">Type of occasion</PieFormLabel>
                                <PieRadio value="birthday">Birthday</PieRadio>
                                <PieRadio value="anniversary">Anniversary</PieRadio>
                                <PieRadio value="engagement">Engagement</PieRadio>
                                <PieRadio value="business">Business dinner</PieRadio>
                                <PieRadio value="other">Other celebration</PieRadio>
                            </PieRadioGroup>
                        )}

                        <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                        <PieFormLabel for="specialRequests" optional="(Optional)">
                            Special Requests or Notes
                        </PieFormLabel>
                        <PieTextarea
                            className="form-field"
                            id="specialRequests"
                            name="specialRequests"
                            value={specialRequests}
                            onInput={handleSpecialRequestsInput}
                            placeholder="e.g., High chair needed, wheelchair access required, specific wine preferences..."
                        />

                        <PieDivider style={{ margin: 'var(--dt-spacing-d) 0' }} />

                        <PieCheckbox
                            name="smsReminder"
                            checked={smsReminder}
                            onChange={handleSmsReminderChange}
                        >
                            Send me an SMS reminder on the day of the booking
                        </PieCheckbox>
                    </div>

                    <div className="form-btns" style={{ marginTop: 'var(--dt-spacing-e)' }}>
                        <PieButton 
                            variant="secondary" 
                            type="reset"
                        >
                            Clear Form
                        </PieButton>
                        <PieButton 
                            variant="primary" 
                            size="large" 
                            type="submit"
                        >
                            Confirm Reservation
                        </PieButton>
                    </div>
                </form>
            </div>

            {/* Booking Confirmation Modal */}
            <PieModal
                heading="Reservation Confirmed! 🎉"
                headingLevel="h2"
                isOpen={isConfirmationOpen}
                isDismissible
                size="medium"
                leadingAction={{
                    text: 'Add to Calendar',
                    variant: 'primary'
                }}
                supportingAction={{
                    text: 'Done',
                    variant: 'ghost'
                }}
                onPieModalClose={handleModalClose}
            >
                <div style={{ padding: 'var(--dt-spacing-d)' }}>
                    <PieNotification 
                        variant="success" 
                        isCompact 
                        style={{ marginBottom: 'var(--dt-spacing-d)' }}
                    >
                        A confirmation email has been sent to {email}
                    </PieNotification>
                    
                    <div style={{ 
                        background: 'var(--dt-color-container-subtle)', 
                        padding: 'var(--dt-spacing-d)',
                        borderRadius: 'var(--dt-radius-rounded-c)'
                    }}>
                        <h3 style={{ marginTop: 0 }}>Booking Details</h3>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dt-spacing-b)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--dt-color-content-subdued)' }}>Reference:</span>
                                <strong>{bookingRef}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--dt-color-content-subdued)' }}>Name:</span>
                                <span>{fullName}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--dt-color-content-subdued)' }}>Date:</span>
                                <span>{formatDate(date)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--dt-color-content-subdued)' }}>Time:</span>
                                <span>{formatTime(time)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: 'var(--dt-color-content-subdued)' }}>Party Size:</span>
                                <span>{partySize} {parseInt(partySize) === 1 ? 'person' : 'people'}</span>
                            </div>
                            {seatingPreference !== 'no-preference' && (
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'var(--dt-color-content-subdued)' }}>Seating:</span>
                                    <span style={{ textTransform: 'capitalize' }}>{seatingPreference}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <p style={{ 
                        marginTop: 'var(--dt-spacing-d)', 
                        color: 'var(--dt-color-content-subdued)',
                        fontSize: '0.875rem'
                    }}>
                        Please arrive 5-10 minutes before your reservation time. If you need to cancel or modify your booking, please contact us at least 2 hours in advance.
                    </p>
                </div>
            </PieModal>
        </NavigationLayout>
    );
}
