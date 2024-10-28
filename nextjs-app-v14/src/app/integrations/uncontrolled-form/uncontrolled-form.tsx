'use client';

import React from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTextInput } from '@justeattakeaway/pie-text-input/dist/index.js';
import { createComponent } from '@lit/react';


import '@/styles/form.scss';

const ReactPieTextInput = createComponent({
    tagName: 'pie-text-input',
    elementClass: PieTextInput,
    react: React,
    events: {
      onchange: 'change',
    },
  });

export default function UnControlledForm() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData.get('first-name'))
        console.log(formData.get('last-name'))
    };

    return (
        <NavigationLayout title="Uncontrolled Form Test Page">
            <form className="form" id="testForm" onSubmit={handleSubmit}>

                {/* importing the element directly  */}
                <pie-text-input
                    placeholder="First name"
                    name="first-name">
                </pie-text-input>

                <hr />

                {/* importing the React element */}
                <ReactPieTextInput
                    placeholder='Last Name'
                    name="last-name">
                </ReactPieTextInput>
                

                <div className='form-btns'>
                    <PieButton className="form-btn" data-test-id="reset-btn" variant="secondary" type="reset">Reset</PieButton>
                    <PieButton className="form-btn" data-test-id="submit-btn" type="submit">Submit</PieButton>
                </div>
            </form>
        </NavigationLayout>
    );
}
