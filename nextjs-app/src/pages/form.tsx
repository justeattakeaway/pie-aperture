import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function Form() {
    return (
        <>
            <h1>PIE Form Integration Test Page</h1>
            <p>This page is designed for testing our PIE web components inside of HTML forms.</p>

            <hr />
            <h2>Payment form</h2>
            <form method="post" className="c-testForm">
                <p>Required fields are followed by <strong><span aria-label="required">*</span></strong>.</p>
                <section>
                    <h2>Contact information</h2>
                    <fieldset>
                        <legend>Title</legend>
                        <ul>
                            <li>
                                <label htmlFor="title_1">
                                    <input type="radio" id="title_1" name="title" value="A" />
                                    Ace
                                </label>
                            </li>
                            <li>
                                <label htmlFor="title_2">
                                    <input type="radio" id="title_2" name="title" value="K" />
                                    King
                                </label>
                            </li>
                            <li>
                                <label htmlFor="title_3">
                                    <input type="radio" id="title_3" name="title" value="Q" />
                                    Queen
                                </label>
                            </li>
                        </ul>
                    </fieldset>
                    <p>
                        <label htmlFor="name">
                            <span>Name: </span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="text" id="name" name="username" required />
                    </p>
                    <p>
                        <label htmlFor="mail">
                            <span>E-mail: </span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="email" id="mail" name="usermail" required />
                    </p>
                    <p>
                        <label htmlFor="pwd">
                            <span>Password: </span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="password" id="pwd" name="password" required />
                    </p>
                </section>
                <section>
                    <h2>Payment information</h2>
                    <p>
                        <label htmlFor="card">
                            <span>Card type:</span>
                        </label>
                        <select id="card" name="usercard">
                            <option value="visa">Visa</option>
                            <option value="mc">Mastercard</option>
                            <option value="amex">American Express</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="number">
                            <span>Card number:</span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="tel" id="number" name="cardnumber" required />
                    </p>
                    <p>
                        <label htmlFor="expiration">
                            <span>Expiration date:</span>
                            <strong><span aria-label="required">*</span></strong>
                        </label>
                        <input type="text" id="expiration" required placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" />
                    </p>
                </section>
                <section>
                    <PieButton>Validate the payment</PieButton>
                </section>
            </form>
        </>
    )
}
