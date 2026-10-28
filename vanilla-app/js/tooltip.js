import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-webc/components/tooltip.js';
import '@justeattakeaway/pie-icons-webc/dist/IconInfoCircle.js';
import './utils/navigation.js';
import './shared.js';

const instructionList = 'list-style: disc; padding-inline-start: 1.5rem;';

document.querySelector('#app').innerHTML = `
    <p>
        <strong>Note:</strong> pie-tooltip is a controlled component - the consumer owns
        <code> isOpen</code> and responds to the <code>pie-tooltip-open</code> and <code>pie-tooltip-close</code> events.
    </p>

    <h2>Testing with VoiceOver (macOS)</h2>
    <p>
        Turn VoiceOver on with <kbd>Cmd</kbd> + <kbd>F5</kbd> (on Macs with Touch ID, hold <kbd>Cmd</kbd> and
        press Touch ID three times). Turn it off the same way. Below, <kbd>VO</kbd> means
        <kbd>Control</kbd> + <kbd>Option</kbd>.
    </p>
    <ul style="${instructionList}">
        <li><strong>Read the next / previous item:</strong> <kbd>VO</kbd> + <kbd>Right Arrow</kbd> / <kbd>VO</kbd> + <kbd>Left Arrow</kbd>. This reads everything, including text that cannot be focused.</li>
        <li><strong>Move focus between controls:</strong> <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd>.</li>
        <li><strong>Activate the focused control:</strong> <kbd>VO</kbd> + <kbd>Space</kbd>.</li>
        <li><strong>Interact with a container such as a dialog:</strong> <kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Down Arrow</kbd>. Stop with <kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Up Arrow</kbd>.</li>
        <li><strong>Escape dismisses any open panel whose <code>triggers</code> are configured</strong> (all of the sections below with an interaction), including tooltip-mode panels.</li>
    </ul>
    <p>
        VoiceOver wording varies slightly between macOS versions. What matters is the name, role and state you
        hear, not the exact phrasing. Every scenario is shown twice - with a <code>pie-icon-button</code>
        trigger and a <code>pie-button</code> trigger - because the wiring differs per trigger type: the
        icon-only trigger names itself, while the text button is named by its visible text.
    </p>

    <pie-divider></pie-divider>

    <h2>Tooltip mode - supplementary info (hover and focus)</h2>
    <p>
        The panel carries short supplementary content: it is opened by hover and focus, never takes focus
        itself, and the role &ldquo;tooltip&rdquo; is not announced on its own. Nothing is toggled, so no
        trigger declares <code>expanded</code>. What differs per trigger is how the panel's text is
        attached.
    </p>
    <p><strong>How to test:</strong></p>
    <ol style="${instructionList}">
        <li>Turn VoiceOver on.</li>
        <li>Press <kbd>Tab</kbd> to each of the two triggers below. Listen to the announcement, then move focus away with <kbd>Tab</kbd>.</li>
        <li>Hover each trigger with a pointer and confirm the panel appears for pointer users too.</li>
    </ol>

    <h3>Icon button trigger</h3>
    <p>
        The icon-only trigger supplies its own short name via <code>aria.label</code>; the panel's text
        rides in <code>aria.description</code>, rendered as an <code>aria-description</code> attribute on the
        trigger's internal element. An <code>id</code> reference cannot cross the shadow boundary.
    </p>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li>On focus: &ldquo;Delivery times, button, Orders placed before 6pm arrive today.&rdquo; The name is short; the tooltip text is the accessible description.</li>
        <li>You do <strong>not</strong> hear the word &ldquo;tooltip&rdquo; - the panel is a visual affordance, not a separate stop. Sighted keyboard users see it appear on focus.</li>
        <li>You do <strong>not</strong> hear &ldquo;expanded&rdquo; or &ldquo;collapsed&rdquo;, because nothing is toggled.</li>
    </ul>
    <pie-icon-button id="hover-icon-trigger" variant="outline">
        <icon-info-circle></icon-info-circle>
    </pie-icon-button>
    <pie-tooltip id="hover-icon-panel" trigger="hover-icon-trigger" type="icon">
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <h3>PIE button trigger</h3>
    <p>
        The visible text names the button, and the panel's text travels in
        <code>aria.description</code> the same way - a string crosses the shadow boundary where an IDREF
        cannot.
    </p>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li>On focus: &ldquo;Delivery info, button, Orders placed before 6pm arrive today.&rdquo; The name comes from the visible text; the text of the panel is the description.</li>
        <li>As with the icon trigger, no &ldquo;tooltip&rdquo; role and no expanded state are announced.</li>
    </ul>
    <pie-button id="hover-pie-trigger">Delivery info</pie-button>
    <pie-tooltip id="hover-pie-panel" trigger="hover-pie-trigger">
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <pie-divider></pie-divider>

    <h2>Tooltip mode - with a visual heading (hover and focus)</h2>
    <p>
        The <code>heading</code> attribute renders a visual heading inside the panel, but with the
        <code>action</code> slot empty the panel is still <code>role="tooltip"</code> - the heading
        does <strong>not</strong> name the panel or make it a dialog. The description wiring is exactly as in
        the previous section.
    </p>
    <p><strong>How to test:</strong></p>
    <ol style="${instructionList}">
        <li>With VoiceOver on, press <kbd>Tab</kbd> to each of the two triggers below. Listen to the announcement, then move focus away with <kbd>Tab</kbd>.</li>
    </ol>

    <h3>Icon button trigger</h3>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li>On focus: &ldquo;Delivery times, button, Orders placed before 6pm arrive today.&rdquo; The heading is visual only, so it is <strong>not</strong> part of the description.</li>
        <li>Reading onto the visible panel with <kbd>VO</kbd> + arrows reads the heading text and the content, but no role or level is announced for the heading.</li>
        <li>You do <strong>not</strong> hear &ldquo;dialog&rdquo; - only the <code>action</code> slot (or <code>isDismissible</code>) promotes the panel to a dialog.</li>
    </ul>
    <pie-icon-button id="heading-icon-trigger" variant="outline">
        <icon-info-circle></icon-info-circle>
    </pie-icon-button>
    <pie-tooltip id="heading-icon-panel" trigger="heading-icon-trigger" heading="Delivery times">
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <h3>PIE button trigger</h3>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li>On focus: &ldquo;Delivery info, button, Orders placed before 6pm arrive today.&rdquo; The heading is visual only, so it is <strong>not</strong> part of the description.</li>
        <li>Reading onto the visible panel with <kbd>VO</kbd> + arrows reads the heading text and the content, but no role or level is announced for the heading.</li>
        <li>You do <strong>not</strong> hear &ldquo;dialog&rdquo; - only the <code>action</code> slot (or <code>isDismissible</code>) promotes the panel to a dialog.</li>
    </ul>
    <pie-button id="heading-pie-trigger">Delivery info</pie-button>
    <pie-tooltip id="heading-pie-panel" trigger="heading-pie-trigger" heading="Delivery times">
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <pie-divider></pie-divider>

    <h2>Dialog mode - click toggle with action button</h2>
    <p>
        Filling the <code>action</code> slot switches the panel to a non-modal <code>role="dialog"</code>,
        which needs an accessible name - here from <code>heading</code>. The panel carries no
        <code>aria-describedby</code>: its content is announced by the focus move on open, not by a description.
        Every trigger declares <code>haspopup="dialog"</code> and <code>expanded</code> - through the
        <code>aria</code> object on PIE components, as attributes on the native button. On open,
        <code>focusPanel()</code> moves focus to the panel's content; on close, focus returns to the
        trigger, but only if focus was still inside the panel. Escape, the close button and the action button
        all route through the same close handler.
    </p>
    <p><strong>How to test:</strong></p>
    <ol style="${instructionList}">
        <li>With VoiceOver on, press <kbd>Tab</kbd> to each trigger and listen to the closed-state announcement.</li>
        <li>Press <kbd>VO</kbd> + <kbd>Space</kbd> to open. Listen to the open announcement and note where focus lands.</li>
        <li>Press <kbd>VO</kbd> + <kbd>Right Arrow</kbd> to read through the panel, then <kbd>Tab</kbd> between the two buttons inside it.</li>
        <li>Press <kbd>Escape</kbd> (or activate &ldquo;Close&rdquo;, or &ldquo;Got it&rdquo;). Listen as the panel closes and focus returns.</li>
    </ol>

    <h3>Icon button trigger</h3>
    <p>
        The icon-only trigger must supply its own name via <code>aria.label</code>;
        <code>haspopup</code> and <code>expanded</code> ride along on the same object.
    </p>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo; This comes from <code>aria-haspopup="dialog"</code> plus <code>aria-expanded="false"</code> on the button inside the icon button.</li>
        <li><strong>After opening:</strong> focus moves to the panel's content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;. It is non-modal, so focus is not trapped.</li>
        <li><strong>After closing:</strong> the panel is hidden, the trigger is announced again as &ldquo;Delivery times, pop up button, collapsed&rdquo;, and focus has returned to it.</li>
    </ul>
    <pie-icon-button id="dialog-icon-trigger" variant="outline">
        <icon-info-circle></icon-info-circle>
    </pie-icon-button>
    <pie-tooltip id="dialog-icon-panel" trigger="dialog-icon-trigger" heading="Delivery times" isDismissible>
        <span slot="content">Orders placed before 6pm arrive today.</span>
        <pie-button slot="action" size="xsmall" id="dialog-icon-action">Got it</pie-button>
    </pie-tooltip>

    <h3>PIE button trigger</h3>
    <p>
        The visible text names the button; <code>haspopup</code> and <code>expanded</code> are set through the
        <code>aria</code> object.
    </p>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo;</li>
        <li><strong>After opening:</strong> focus moves to the panel's content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
        <li><strong>After closing:</strong> the trigger is announced again as &ldquo;Delivery times, pop up button, collapsed&rdquo;, and focus has returned to it.</li>
    </ul>
    <pie-button id="dialog-pie-trigger">Delivery times</pie-button>
    <pie-tooltip id="dialog-pie-panel" trigger="dialog-pie-trigger" heading="Delivery times" isDismissible>
        <span slot="content">Orders placed before 6pm arrive today.</span>
        <pie-button slot="action" size="xsmall" id="dialog-pie-action">Got it</pie-button>
    </pie-tooltip>

    <pie-divider></pie-divider>

    <h2>Dialog mode - dismissible, no action slot</h2>
    <p>
        The close button alone promotes the panel to a non-modal <code>role="dialog"</code> - no
        <code>action</code> button is needed. The <code>heading</code> names the dialog, and the panel carries
        no <code>aria-describedby</code>: its content is announced by the focus move on open. As above, every
        trigger declares <code>haspopup="dialog"</code> and <code>expanded</code>, and the focus
        contract is the same.
    </p>
    <p><strong>How to test:</strong></p>
    <ol style="${instructionList}">
        <li>With VoiceOver on, press <kbd>Tab</kbd> to each trigger and listen to the closed-state announcement.</li>
        <li>Press <kbd>VO</kbd> + <kbd>Space</kbd> to open. Listen to the open announcement and note where focus lands.</li>
        <li>Press <kbd>Tab</kbd> - &ldquo;Close&rdquo; is the only stop inside the panel.</li>
        <li>Press <kbd>Escape</kbd> (or activate &ldquo;Close&rdquo;). Listen as the panel closes and focus returns.</li>
    </ol>

    <h3>Icon button trigger</h3>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo;</li>
        <li><strong>After opening:</strong> focus moves to the panel's content - &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
        <li><strong>Tab inside the panel:</strong> &ldquo;Close, button.&rdquo; It is the only focusable element, so the next <kbd>Tab</kbd> leaves the panel.</li>
        <li><strong>After closing:</strong> focus has returned to the trigger.</li>
    </ul>
    <pie-icon-button id="dismissible-icon-trigger" variant="outline">
        <icon-info-circle></icon-info-circle>
    </pie-icon-button>
    <pie-tooltip id="dismissible-icon-panel" trigger="dismissible-icon-trigger" heading="Delivery times" isDismissible>
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <h3>PIE button trigger</h3>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo;</li>
        <li><strong>After opening:</strong> focus moves to the panel's content - &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
        <li><strong>Tab inside the panel:</strong> &ldquo;Close, button.&rdquo; It is the only focusable element, so the next <kbd>Tab</kbd> leaves the panel.</li>
        <li><strong>After closing:</strong> focus has returned to the trigger.</li>
    </ul>
    <pie-button id="dismissible-pie-trigger">Delivery times</pie-button>
    <pie-tooltip id="dismissible-pie-panel" trigger="dismissible-pie-trigger" heading="Delivery times" isDismissible>
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <pie-divider></pie-divider>

    <h2>Dialog mode - driven programmatically (no triggers)</h2>
    <p>
        With no <code>triggers</code> configured the panel is opened by another control, like a step in an
        onboarding tour. Nothing is watched, so <strong>Escape is not wired up</strong> - use the close or
        action button. The trigger carries no <code>haspopup</code> or <code>expanded</code>: the panel's
        timing is not an interaction with the trigger, and <code>pie-tooltip-open</code> never fires. Focus is
        still moved into the panel on open with <code>focusPanel()</code> and returned on close.
    </p>
    <p><strong>How to test:</strong></p>
    <ol style="${instructionList}">
        <li>With VoiceOver on, press <kbd>Tab</kbd> to a &ldquo;Start tour&rdquo; trigger and press <kbd>VO</kbd> + <kbd>Space</kbd>.</li>
        <li>Listen as focus moves to the panel's content, then press <kbd>Escape</kbd> to confirm it does <strong>not</strong> close.</li>
        <li>Activate &ldquo;Next&rdquo; (or &ldquo;Close&rdquo;) with <kbd>VO</kbd> + <kbd>Space</kbd> and listen as focus returns to &ldquo;Start tour&rdquo;.</li>
    </ol>

    <h3>Icon button trigger</h3>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li><strong>On open:</strong> focus moves to the panel's content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
        <li><strong>Escape:</strong> nothing happens - no trigger is configured, so Escape is not handled. Use &ldquo;Next&rdquo; or &ldquo;Close&rdquo;.</li>
        <li><strong>On close:</strong> the panel hides and focus returns to the trigger: &ldquo;Start tour, button.&rdquo;</li>
    </ul>
    <pie-icon-button id="tour-icon-trigger" variant="outline">
        <icon-info-circle></icon-info-circle>
    </pie-icon-button>
    <pie-tooltip id="tour-icon-panel" trigger="tour-icon-trigger" heading="Delivery times" isDismissible>
        <span slot="content">Orders placed before 6pm arrive today.</span>
        <pie-button slot="action" size="xsmall" id="tour-icon-action">Next</pie-button>
    </pie-tooltip>

    <h3>PIE button trigger</h3>
    <p><strong>Expected VoiceOver output:</strong></p>
    <ul style="${instructionList}">
        <li><strong>On open:</strong> focus moves to the panel's content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
        <li><strong>Escape:</strong> nothing happens - no trigger is configured, so Escape is not handled. Use &ldquo;Next&rdquo; or &ldquo;Close&rdquo;.</li>
        <li><strong>On close:</strong> the panel hides and focus returns to the trigger: &ldquo;Start tour, button.&rdquo;</li>
    </ul>
    <pie-button id="tour-pie-trigger">Start tour</pie-button>
    <pie-tooltip id="tour-pie-panel" trigger="tour-pie-trigger" heading="Delivery times" isDismissible>
        <span slot="content">Orders placed before 6pm arrive today.</span>
        <pie-button slot="action" size="xsmall" id="tour-pie-action">Next</pie-button>
    </pie-tooltip>

    <pie-divider></pie-divider>

    <h2>Always open (visual regression)</h2>
    <p>
        These two panels are rendered open on load for the visual regression screenshots. They are never
        wired to close, so tooltip mode and dialog mode are captured in their open state without any
        interaction.
    </p>

    <h3>Tooltip mode</h3>
    <pie-icon-button id="open-tooltip-trigger" variant="outline" style="margin-block-end: 64px;">
        <icon-info-circle></icon-info-circle>
    </pie-icon-button>
    <pie-tooltip id="open-tooltip-panel" trigger="open-tooltip-trigger" type="icon" position="bottom-start">
        <span slot="content">Orders placed before 6pm arrive today.</span>
    </pie-tooltip>

    <h3>Dialog mode</h3>
    <pie-button id="open-dialog-trigger" style="margin-block-end: 280px;">Delivery times</pie-button>
    <pie-tooltip id="open-dialog-panel" trigger="open-dialog-trigger" heading="Delivery times" isDismissible position="bottom-start">
        <span slot="content">Orders placed before 6pm arrive today.</span>
        <pie-button slot="action" size="xsmall">Got it</pie-button>
    </pie-tooltip>`;

const hoverIconTrigger = document.querySelector('#hover-icon-trigger');
const hoverIconPanel = document.querySelector('#hover-icon-panel');
const hoverPieTrigger = document.querySelector('#hover-pie-trigger');
const hoverPiePanel = document.querySelector('#hover-pie-panel');

const headingIconTrigger = document.querySelector('#heading-icon-trigger');
const headingIconPanel = document.querySelector('#heading-icon-panel');
const headingPieTrigger = document.querySelector('#heading-pie-trigger');
const headingPiePanel = document.querySelector('#heading-pie-panel');

const dialogIconTrigger = document.querySelector('#dialog-icon-trigger');
const dialogIconPanel = document.querySelector('#dialog-icon-panel');
const dialogIconAction = document.querySelector('#dialog-icon-action');
const dialogPieTrigger = document.querySelector('#dialog-pie-trigger');
const dialogPiePanel = document.querySelector('#dialog-pie-panel');
const dialogPieAction = document.querySelector('#dialog-pie-action');

const dismissibleIconTrigger = document.querySelector('#dismissible-icon-trigger');
const dismissibleIconPanel = document.querySelector('#dismissible-icon-panel');
const dismissiblePieTrigger = document.querySelector('#dismissible-pie-trigger');
const dismissiblePiePanel = document.querySelector('#dismissible-pie-panel');

const tourIconTrigger = document.querySelector('#tour-icon-trigger');
const tourIconPanel = document.querySelector('#tour-icon-panel');
const tourIconAction = document.querySelector('#tour-icon-action');
const tourPieTrigger = document.querySelector('#tour-pie-trigger');
const tourPiePanel = document.querySelector('#tour-pie-panel');
const tourPieAction = document.querySelector('#tour-pie-action');

// Wires the controlled-component contract: the two events, focusPanel() on open, and focus back on close only when it was still inside the panel.
function wireTooltipPanel({ trigger = null, panel, setTriggerExpanded = null }) {
    function open() {
        panel.isOpen = true;
        if (setTriggerExpanded) setTriggerExpanded(true);
        // focusPanel() waits for the opening update to commit, then the content is announced with the dialog's name and role.
        panel.focusPanel();
    }

    function close() {
        // Only reclaim focus if it is still inside the panel.
        const panelHadFocus = document.activeElement?.closest('pie-tooltip');

        panel.isOpen = false;
        if (setTriggerExpanded) setTriggerExpanded(false);

        if (panelHadFocus && trigger) {
            trigger.focus({ preventScroll: true });
        }
    }

    panel.addEventListener('pie-tooltip-open', open);
    panel.addEventListener('pie-tooltip-close', close);

    return { open, close };
}

// aria and triggers are set as properties, and the two handlers are the whole tooltip-mode contract.
hoverIconTrigger.aria = { label: 'Delivery times', description: 'Orders placed before 6pm arrive today.' };
hoverIconPanel.triggers = ['hover', 'focus'];
hoverIconPanel.addEventListener('pie-tooltip-open', () => { hoverIconPanel.isOpen = true; });
hoverIconPanel.addEventListener('pie-tooltip-close', () => { hoverIconPanel.isOpen = false; });
hoverPieTrigger.aria = { description: 'Orders placed before 6pm arrive today.' };
hoverPiePanel.triggers = ['hover', 'focus'];
hoverPiePanel.addEventListener('pie-tooltip-open', () => { hoverPiePanel.isOpen = true; });
hoverPiePanel.addEventListener('pie-tooltip-close', () => { hoverPiePanel.isOpen = false; });

headingIconTrigger.aria = { label: 'Delivery times', description: 'Orders placed before 6pm arrive today.' };
headingIconPanel.triggers = ['hover', 'focus'];
headingIconPanel.addEventListener('pie-tooltip-open', () => { headingIconPanel.isOpen = true; });
headingIconPanel.addEventListener('pie-tooltip-close', () => { headingIconPanel.isOpen = false; });
headingPieTrigger.aria = { description: 'Orders placed before 6pm arrive today.' };
headingPiePanel.triggers = ['hover', 'focus'];
headingPiePanel.addEventListener('pie-tooltip-open', () => { headingPiePanel.isOpen = true; });
headingPiePanel.addEventListener('pie-tooltip-close', () => { headingPiePanel.isOpen = false; });

// Dialog mode - every trigger declares haspopup/expanded, and every panel takes `aria.close`.
dialogIconPanel.aria = { close: 'Close' };
dialogIconPanel.triggers = ['click'];
const dialogIcon = wireTooltipPanel({
    trigger: dialogIconTrigger,
    panel: dialogIconPanel,
    setTriggerExpanded: (expanded) => {
        dialogIconTrigger.aria = { label: 'Delivery times', haspopup: 'dialog', expanded };
    },
});
dialogIconAction.addEventListener('click', dialogIcon.close);

dialogPiePanel.aria = { close: 'Close' };
dialogPiePanel.triggers = ['click'];
const dialogPie = wireTooltipPanel({
    trigger: dialogPieTrigger,
    panel: dialogPiePanel,
    setTriggerExpanded: (expanded) => {
        dialogPieTrigger.aria = { haspopup: 'dialog', expanded };
    },
});
dialogPieAction.addEventListener('click', dialogPie.close);

// Dismissible dialogs without an action button - same contract, one control inside the panel.
dismissibleIconPanel.aria = { close: 'Close' };
dismissibleIconPanel.triggers = ['click'];
wireTooltipPanel({
    trigger: dismissibleIconTrigger,
    panel: dismissibleIconPanel,
    setTriggerExpanded: (expanded) => {
        dismissibleIconTrigger.aria = { label: 'Delivery times', haspopup: 'dialog', expanded };
    },
});

dismissiblePiePanel.aria = { close: 'Close' };
dismissiblePiePanel.triggers = ['click'];
wireTooltipPanel({
    trigger: dismissiblePieTrigger,
    panel: dismissiblePiePanel,
    setTriggerExpanded: (expanded) => {
        dismissiblePieTrigger.aria = { haspopup: 'dialog', expanded };
    },
});

// Programmatic - opened from another control, no triggers, no Escape handling, no expanded state.
tourIconPanel.aria = { close: 'Close' };
const tourIcon = wireTooltipPanel({ trigger: tourIconTrigger, panel: tourIconPanel });
tourIconTrigger.addEventListener('click', tourIcon.open);
tourIconAction.addEventListener('click', tourIcon.close);

tourPiePanel.aria = { close: 'Close' };
const tourPie = wireTooltipPanel({ trigger: tourPieTrigger, panel: tourPiePanel });
tourPieTrigger.addEventListener('click', tourPie.open);
tourPieAction.addEventListener('click', tourPie.close);

// Always open - rendered open for the visual regression screenshots. No triggers and no close
// handlers, so the panels stay open regardless of hover, focus, Escape or the close button.
const openTooltipTrigger = document.querySelector('#open-tooltip-trigger');
const openTooltipPanel = document.querySelector('#open-tooltip-panel');
const openDialogTrigger = document.querySelector('#open-dialog-trigger');
const openDialogPanel = document.querySelector('#open-dialog-panel');

openTooltipTrigger.aria = { label: 'Delivery times' };
openTooltipPanel.isOpen = true;

openDialogTrigger.aria = { haspopup: 'dialog', expanded: true };
openDialogPanel.aria = { close: 'Close' };
openDialogPanel.isOpen = true;
