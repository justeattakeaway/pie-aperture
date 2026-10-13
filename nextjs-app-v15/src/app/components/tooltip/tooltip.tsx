'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { PieTooltip } from '@justeattakeaway/pie-webc/react/tooltip.js';
import { IconInfoCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconInfoCircle.js';
import { type ComponentRef, useRef, useState } from "react";

// The wrappers' public ref types don't expose HTMLElement methods, so the ref carries a focus member.
type FocusableRef<T> = T & { focus: (options?: FocusOptions) => void };

// Wires the controlled-component contract: the two events, focusPanel() on open, and focus back on close only when it was still inside the panel.
function useTooltipPanel<T>() {
    const [isOpen, setOpen] = useState(false);
    const triggerRef = useRef<FocusableRef<T> | null>(null);
    const panelRef = useRef<ComponentRef<typeof PieTooltip>>(null);

    const open = () => {
        setOpen(true);
        // focusPanel() waits for the opening update to commit, then the content is announced with the dialog's name and role.
        panelRef.current?.focusPanel();
    };

    const close = () => {
        // Only reclaim focus if it is still inside the panel.
        const panelHadFocus = document.activeElement?.closest('pie-tooltip');

        setOpen(false);

        if (panelHadFocus) {
            triggerRef.current?.focus({ preventScroll: true });
        }
    };

    return { isOpen, setOpen, open, close, triggerRef, panelRef };
}

// The apps reset ul list styles globally, so the instruction lists below opt back into bullets.
const instructionList = { listStyle: 'disc', paddingInlineStart: '1.5rem' } as const;

export default function Tooltip() {
    const hoverIcon = useTooltipPanel<ComponentRef<typeof PieIconButton>>();
    const hoverPie = useTooltipPanel<ComponentRef<typeof PieButton>>();

    const headingIcon = useTooltipPanel<ComponentRef<typeof PieIconButton>>();
    const headingPie = useTooltipPanel<ComponentRef<typeof PieButton>>();

    const dialogIcon = useTooltipPanel<ComponentRef<typeof PieIconButton>>();
    const dialogPie = useTooltipPanel<ComponentRef<typeof PieButton>>();

    const dismissibleIcon = useTooltipPanel<ComponentRef<typeof PieIconButton>>();
    const dismissiblePie = useTooltipPanel<ComponentRef<typeof PieButton>>();

    const tourIcon = useTooltipPanel<ComponentRef<typeof PieIconButton>>();
    const tourPie = useTooltipPanel<ComponentRef<typeof PieButton>>();

    return (
        <NavigationLayout title="Tooltip">
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
        <ul style={instructionList}>
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

        <PieDivider />

        <h2>Tooltip mode - supplementary info (hover and focus)</h2>
        <p>
            The panel carries short supplementary content: it is opened by hover and focus, never takes focus
            itself, and the role &ldquo;tooltip&rdquo; is not announced on its own. Nothing is toggled, so no
            trigger declares <code>expanded</code>. What differs per trigger is how the panel&apos;s text is
            attached.
        </p>
        <p><strong>How to test:</strong></p>
        <ol>
            <li>Turn VoiceOver on.</li>
            <li>Press <kbd>Tab</kbd> to each of the two triggers below. Listen to the announcement, then move focus away with <kbd>Tab</kbd>.</li>
            <li>Hover each trigger with a pointer and confirm the panel appears for pointer users too.</li>
        </ol>

        <h3>Icon button trigger</h3>
        <p>
            The icon-only trigger supplies its own short name via <code>aria.label</code>; the panel&apos;s text
            rides in <code>aria.description</code>, rendered as an <code>aria-description</code> attribute on the
            trigger&apos;s internal element. An <code>id</code> reference cannot cross the shadow boundary.
        </p>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li>On focus: &ldquo;Delivery times, button, Orders placed before 6pm arrive today.&rdquo; The name is short; the tooltip text is the accessible description.</li>
            <li>You do <strong>not</strong> hear the word &ldquo;tooltip&rdquo; - the panel is a visual affordance, not a separate stop. Sighted keyboard users see it appear on focus.</li>
            <li>You do <strong>not</strong> hear &ldquo;expanded&rdquo; or &ldquo;collapsed&rdquo;, because nothing is toggled.</li>
        </ul>
        <PieIconButton
            id="hover-icon-trigger"
            variant="outline"
            aria={{ label: 'Delivery times', description: 'Orders placed before 6pm arrive today.' }}
        >
            <IconInfoCircle />
        </PieIconButton>
        <PieTooltip
            id="hover-icon-panel"
            trigger="hover-icon-trigger"
            type="icon"
            isOpen={hoverIcon.isOpen}
            triggers={['hover', 'focus']}
            onPieTooltipOpen={() => hoverIcon.setOpen(true)}
            onPieTooltipClose={() => hoverIcon.setOpen(false)}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </PieTooltip>

        <h3>PIE button trigger</h3>
        <p>
            The visible text names the button, and the panel&apos;s text travels in
            <code> aria.description</code> the same way - a string crosses the shadow boundary where an IDREF
            cannot.
        </p>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li>On focus: &ldquo;Delivery info, button, Orders placed before 6pm arrive today.&rdquo; The name comes from the visible text; the text of the panel is the description.</li>
            <li>As with the icon trigger, no &ldquo;tooltip&rdquo; role and no expanded state are announced.</li>
        </ul>
        <PieButton
            id="hover-pie-trigger"
            ref={hoverPie.triggerRef}
            aria={{ description: 'Orders placed before 6pm arrive today.' }}
        >
            Delivery info
        </PieButton>
        <PieTooltip
            id="hover-pie-panel"
            trigger="hover-pie-trigger"
            isOpen={hoverPie.isOpen}
            triggers={['hover', 'focus']}
            onPieTooltipOpen={() => hoverPie.setOpen(true)}
            onPieTooltipClose={() => hoverPie.setOpen(false)}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </PieTooltip>

        <PieDivider />

        <h2>Tooltip mode - with a visual heading (hover and focus)</h2>
        <p>
            The <code>heading</code> attribute renders a visual heading inside the panel, but with the
            <code> action</code> slot empty the panel is still <code>role=&quot;tooltip&quot;</code> - the heading
            does <strong>not</strong> name the panel or make it a dialog. The description wiring is exactly as in
            the previous section.
        </p>
        <p><strong>How to test:</strong></p>
        <ol>
            <li>With VoiceOver on, press <kbd>Tab</kbd> to each of the two triggers below. Listen to the announcement, then move focus away with <kbd>Tab</kbd>.</li>
        </ol>

        <h3>Icon button trigger</h3>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li>On focus: &ldquo;Delivery times, button, Orders placed before 6pm arrive today.&rdquo; The heading is visual only, so it is <strong>not</strong> part of the description.</li>
            <li>Reading onto the visible panel with <kbd>VO</kbd> + arrows reads the heading text and the content, but no role or level is announced for the heading.</li>
            <li>You do <strong>not</strong> hear &ldquo;dialog&rdquo; - only the <code>action</code> slot (or <code>isDismissible</code>) promotes the panel to a dialog.</li>
        </ul>
        <PieIconButton
            id="heading-icon-trigger"
            variant="outline"
            aria={{ label: 'Delivery times', description: 'Orders placed before 6pm arrive today.' }}
        >
            <IconInfoCircle />
        </PieIconButton>
        <PieTooltip
            id="heading-icon-panel"
            trigger="heading-icon-trigger"
            heading="Delivery times"
            isOpen={headingIcon.isOpen}
            triggers={['hover', 'focus']}
            onPieTooltipOpen={() => headingIcon.setOpen(true)}
            onPieTooltipClose={() => headingIcon.setOpen(false)}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </PieTooltip>

        <h3>PIE button trigger</h3>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li>On focus: &ldquo;Delivery info, button, Orders placed before 6pm arrive today.&rdquo; The heading is visual only, so it is <strong>not</strong> part of the description.</li>
            <li>Reading onto the visible panel with <kbd>VO</kbd> + arrows reads the heading text and the content, but no role or level is announced for the heading.</li>
            <li>You do <strong>not</strong> hear &ldquo;dialog&rdquo; - only the <code>action</code> slot (or <code>isDismissible</code>) promotes the panel to a dialog.</li>
        </ul>
        <PieButton
            id="heading-pie-trigger"
            ref={headingPie.triggerRef}
            aria={{ description: 'Orders placed before 6pm arrive today.' }}
        >
            Delivery info
        </PieButton>
        <PieTooltip
            id="heading-pie-panel"
            trigger="heading-pie-trigger"
            heading="Delivery times"
            isOpen={headingPie.isOpen}
            triggers={['hover', 'focus']}
            onPieTooltipOpen={() => headingPie.setOpen(true)}
            onPieTooltipClose={() => headingPie.setOpen(false)}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </PieTooltip>

        <PieDivider />

        <h2>Dialog mode - click toggle with action button</h2>
        <p>
            Filling the <code>action</code> slot switches the panel to a non-modal <code>role=&quot;dialog&quot;</code>,
            which needs an accessible name - here from <code>heading</code>. The panel carries no
            <code> aria-describedby</code>: its content is announced by the focus move on open, not by a description.
            Every trigger declares <code>haspopup=&quot;dialog&quot;</code> and <code>expanded</code> through the
            <code> aria</code> object. On open,
            <code> focusPanel()</code> moves focus to the panel&apos;s content; on close, focus returns to the
            trigger, but only if focus was still inside the panel. Escape, the close button and the action button
            all route through the same close handler.
        </p>
        <p><strong>How to test:</strong></p>
        <ol>
            <li>With VoiceOver on, press <kbd>Tab</kbd> to each trigger and listen to the closed-state announcement.</li>
            <li>Press <kbd>VO</kbd> + <kbd>Space</kbd> to open. Listen to the open announcement and note where focus lands.</li>
            <li>Press <kbd>VO</kbd> + <kbd>Right Arrow</kbd> to read through the panel, then <kbd>Tab</kbd> between the two buttons inside it.</li>
            <li>Press <kbd>Escape</kbd> (or activate &ldquo;Close&rdquo;, or &ldquo;Got it&rdquo;). Listen as the panel closes and focus returns.</li>
        </ol>

        <h3>Icon button trigger</h3>
        <p>
            The icon-only trigger must supply its own name via <code>aria.label</code>;
            <code> haspopup</code> and <code>expanded</code> ride along on the same object.
        </p>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo; This comes from <code>aria-haspopup=&quot;dialog&quot;</code> plus <code>aria-expanded=&quot;false&quot;</code> on the button inside the icon button.</li>
            <li><strong>After opening:</strong> focus moves to the panel&apos;s content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;. It is non-modal, so focus is not trapped.</li>
            <li><strong>After closing:</strong> the panel is hidden, the trigger is announced again as &ldquo;Delivery times, pop up button, collapsed&rdquo;, and focus has returned to it.</li>
        </ul>
        <PieIconButton
            id="dialog-icon-trigger"
            ref={dialogIcon.triggerRef}
            variant="outline"
            aria={{ label: 'Delivery times', haspopup: 'dialog', expanded: dialogIcon.isOpen }}
        >
            <IconInfoCircle />
        </PieIconButton>
        <PieTooltip
            id="dialog-icon-panel"
            ref={dialogIcon.panelRef}
            trigger="dialog-icon-trigger"
            heading="Delivery times"
            isOpen={dialogIcon.isOpen}
            isDismissible
            aria={{ close: 'Close' }}
            triggers={['click']}
            onPieTooltipOpen={dialogIcon.open}
            onPieTooltipClose={dialogIcon.close}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
            <PieButton slot="action" size="xsmall" onClick={dialogIcon.close}>
                Got it
            </PieButton>
        </PieTooltip>

        <h3>PIE button trigger</h3>
        <p>
            The visible text names the button; <code>haspopup</code> and <code>expanded</code> are set through the
            <code> aria</code> object.
        </p>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo;</li>
            <li><strong>After opening:</strong> focus moves to the panel&apos;s content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
            <li><strong>After closing:</strong> the trigger is announced again as &ldquo;Delivery times, pop up button, collapsed&rdquo;, and focus has returned to it.</li>
        </ul>
        <PieButton
            id="dialog-pie-trigger"
            ref={dialogPie.triggerRef}
            aria={{ haspopup: 'dialog', expanded: dialogPie.isOpen }}
        >
            Delivery times
        </PieButton>
        <PieTooltip
            id="dialog-pie-panel"
            ref={dialogPie.panelRef}
            trigger="dialog-pie-trigger"
            heading="Delivery times"
            isOpen={dialogPie.isOpen}
            isDismissible
            aria={{ close: 'Close' }}
            triggers={['click']}
            onPieTooltipOpen={dialogPie.open}
            onPieTooltipClose={dialogPie.close}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
            <PieButton slot="action" size="xsmall" onClick={dialogPie.close}>
                Got it
            </PieButton>
        </PieTooltip>

        <PieDivider />

        <h2>Dialog mode - dismissible, no action slot</h2>
        <p>
            The close button alone promotes the panel to a non-modal <code>role=&quot;dialog&quot;</code> - no
            <code> action</code> button is needed. The <code>heading</code> names the dialog, and the panel carries
            no <code>aria-describedby</code>: its content is announced by the focus move on open. As above, every
            trigger declares <code>haspopup=&quot;dialog&quot;</code> and <code>expanded</code>, and the focus
            contract is the same.
        </p>
        <p><strong>How to test:</strong></p>
        <ol>
            <li>With VoiceOver on, press <kbd>Tab</kbd> to each trigger and listen to the closed-state announcement.</li>
            <li>Press <kbd>VO</kbd> + <kbd>Space</kbd> to open. Listen to the open announcement and note where focus lands.</li>
            <li>Press <kbd>Tab</kbd> - &ldquo;Close&rdquo; is the only stop inside the panel.</li>
            <li>Press <kbd>Escape</kbd> (or activate &ldquo;Close&rdquo;). Listen as the panel closes and focus returns.</li>
        </ol>

        <h3>Icon button trigger</h3>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo;</li>
            <li><strong>After opening:</strong> focus moves to the panel&apos;s content - &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
            <li><strong>Tab inside the panel:</strong> &ldquo;Close, button.&rdquo; It is the only focusable element, so the next <kbd>Tab</kbd> leaves the panel.</li>
            <li><strong>After closing:</strong> focus has returned to the trigger.</li>
        </ul>
        <PieIconButton
            id="dismissible-icon-trigger"
            ref={dismissibleIcon.triggerRef}
            variant="outline"
            aria={{ label: 'Delivery times', haspopup: 'dialog', expanded: dismissibleIcon.isOpen }}
        >
            <IconInfoCircle />
        </PieIconButton>
        <PieTooltip
            id="dismissible-icon-panel"
            ref={dismissibleIcon.panelRef}
            trigger="dismissible-icon-trigger"
            heading="Delivery times"
            isOpen={dismissibleIcon.isOpen}
            isDismissible
            aria={{ close: 'Close' }}
            triggers={['click']}
            onPieTooltipOpen={dismissibleIcon.open}
            onPieTooltipClose={dismissibleIcon.close}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </PieTooltip>

        <h3>PIE button trigger</h3>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li><strong>Closed trigger:</strong> &ldquo;Delivery times, pop up button, collapsed.&rdquo;</li>
            <li><strong>After opening:</strong> focus moves to the panel&apos;s content - &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
            <li><strong>Tab inside the panel:</strong> &ldquo;Close, button.&rdquo; It is the only focusable element, so the next <kbd>Tab</kbd> leaves the panel.</li>
            <li><strong>After closing:</strong> focus has returned to the trigger.</li>
        </ul>
        <PieButton
            id="dismissible-pie-trigger"
            ref={dismissiblePie.triggerRef}
            aria={{ haspopup: 'dialog', expanded: dismissiblePie.isOpen }}
        >
            Delivery times
        </PieButton>
        <PieTooltip
            id="dismissible-pie-panel"
            ref={dismissiblePie.panelRef}
            trigger="dismissible-pie-trigger"
            heading="Delivery times"
            isOpen={dismissiblePie.isOpen}
            isDismissible
            aria={{ close: 'Close' }}
            triggers={['click']}
            onPieTooltipOpen={dismissiblePie.open}
            onPieTooltipClose={dismissiblePie.close}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
        </PieTooltip>

        <PieDivider />

        <h2>Dialog mode - driven programmatically (no triggers)</h2>
        <p>
            With no <code>triggers</code> configured the panel is opened by another control, like a step in an
            onboarding tour. Nothing is watched, so <strong>Escape is not wired up</strong> - use the close or
            action button. The trigger carries no <code>haspopup</code> or <code>expanded</code>: the panel&apos;s
            timing is not an interaction with the trigger, and <code>pie-tooltip-open</code> never fires. Focus is
            still moved into the panel on open with <code>focusPanel()</code> and returned on close.
        </p>
        <p><strong>How to test:</strong></p>
        <ol>
            <li>With VoiceOver on, press <kbd>Tab</kbd> to a &ldquo;Start tour&rdquo; trigger and press <kbd>VO</kbd> + <kbd>Space</kbd>.</li>
            <li>Listen as focus moves to the panel&apos;s content, then press <kbd>Escape</kbd> to confirm it does <strong>not</strong> close.</li>
            <li>Activate &ldquo;Next&rdquo; (or &ldquo;Close&rdquo;) with <kbd>VO</kbd> + <kbd>Space</kbd> and listen as focus returns to &ldquo;Start tour&rdquo;.</li>
        </ol>

        <h3>Icon button trigger</h3>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li><strong>On open:</strong> focus moves to the panel&apos;s content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
            <li><strong>Escape:</strong> nothing happens - no trigger is configured, so Escape is not handled. Use &ldquo;Next&rdquo; or &ldquo;Close&rdquo;.</li>
            <li><strong>On close:</strong> the panel hides and focus returns to the trigger: &ldquo;Start tour, button.&rdquo;</li>
        </ul>
        <PieIconButton
            id="tour-icon-trigger"
            ref={tourIcon.triggerRef}
            variant="outline"
            aria={{ label: 'Start tour' }}
            onClick={tourIcon.open}
        >
            <IconInfoCircle />
        </PieIconButton>
        <PieTooltip
            id="tour-icon-panel"
            ref={tourIcon.panelRef}
            trigger="tour-icon-trigger"
            heading="Delivery times"
            isOpen={tourIcon.isOpen}
            isDismissible
            aria={{ close: 'Close' }}
            onPieTooltipClose={tourIcon.close}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
            <PieButton slot="action" size="xsmall" onClick={tourIcon.close}>
                Next
            </PieButton>
        </PieTooltip>

        <h3>PIE button trigger</h3>
        <p><strong>Expected VoiceOver output:</strong></p>
        <ul style={instructionList}>
            <li><strong>On open:</strong> focus moves to the panel&apos;s content, so you hear &ldquo;Orders placed before 6pm arrive today.&rdquo; followed by &ldquo;Delivery times, dialog&rdquo;.</li>
            <li><strong>Escape:</strong> nothing happens - no trigger is configured, so Escape is not handled. Use &ldquo;Next&rdquo; or &ldquo;Close&rdquo;.</li>
            <li><strong>On close:</strong> the panel hides and focus returns to the trigger: &ldquo;Start tour, button.&rdquo;</li>
        </ul>
        <PieButton
            id="tour-pie-trigger"
            ref={tourPie.triggerRef}
            onClick={tourPie.open}
        >
            Start tour
        </PieButton>
        <PieTooltip
            id="tour-pie-panel"
            ref={tourPie.panelRef}
            trigger="tour-pie-trigger"
            heading="Delivery times"
            isOpen={tourPie.isOpen}
            isDismissible
            aria={{ close: 'Close' }}
            onPieTooltipClose={tourPie.close}
        >
            <span slot="content">Orders placed before 6pm arrive today.</span>
            <PieButton slot="action" size="xsmall" onClick={tourPie.close}>
                Next
            </PieButton>
        </PieTooltip>

        </NavigationLayout>
    );
}
