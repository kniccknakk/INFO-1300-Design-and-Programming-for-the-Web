# Project 3, Final Submission Grade

100 points

Your final grade for Project 3 is based on grading the main learning outcomes in each milestone and on the final submission.


# Design Process & Planning

NetID: na323

**Grader Instructions:** Grade in Atom's Markdown Preview. No credit for content not visible in Markdown Preview. Student must demonstrate they have internalize the requirements and put forward a reasonable approach for implementing the assignment.

## Form Design Planning (Milestone 1)
_full, half, or no credit_

- (2 / 2) Student clearly presents the form proposal.
- (2 / 2) Sketches show location of form on website for mobile and desktop versions.
- (2 / 2) Sketches clearly communicate both the mobile and desktop design.

> Explanation for points lost:


**Form Design Planning Total: (6 / 6)**

## Form Validation Planning (Milestone 1, Final)
_full, half, or no credit_

- (2 / 2) Specifies appropriate validation criteria (component type, required/optional, etc.) for **each** form component.
- (2 / 2) Provides appropriate reasoning for validation criteria decisions.
- (2 / 2) Includes mobile and desktop sketches of the form with feedback.
- (2 / 2) Includes thoughtful pseudocode plan with validation checks for **each required** form component and indicates whether the form should be sent to the server or not.

> Explanation for points lost:


**Form Validation Planning Total: (8 / 8)**

## Design Process (Milestone 1, Final)
_full, half, or no credit_

- (2 / 2) Design process and design evolution are thoroughly documented in design journey.
- (2 / 2) Sketches clearly communicate the design and layout of the forms so that another 1300 student could implement the forms (wireframes and mock-ups prohibited).
- (2 / 2) Design Journey communicates the student's reasoning and thoughts behind their design decisions. Design Journey does **not** just state what they did.
- (2 / 2) Responses are thorough and thoughtful. Writing is clear and concise.
- (2 / 2) Self-reflection is thoughtfully written.

> Explanation for points lost:


**Design Process Total: (10 / 10)**

## Deductions
_full, half, or no deduction_

- (0 / -2) _(Deduction)_ Target audience is inappropriate. Audience is arbitrary.
- (0 / -2) _(Deduction)_ Contact form justification is **not** detailed, thorough, and rigorous.
- (0 / -2) _(Deduction)_ Pseudocode is written as actual JavaScript code.

> **Specific** explanation for points deducted:


**Deductions Total: (-0)**

## Overall _Design Process & Planning_ Total

**Design Process & Planning _Total_: (24 / 24)**

> What did the student do well?
really good job documenting your design process and showing your alternatives and how your design evolved after receiving feedback!


# Design

NetID: na323

**Grader Instructions:** Grade in **FireFox** with _normal_ desktop resolution. Student must demonstrate effective use of visual design principles and care towards meeting the needs of the website's audience. **Only grade the form; ignore all other content from Project 1 or 2.**

## Form Design
_full, half, or no credit_

- (4 / 4) Form serves actual user needs and is relevant to the target audience.
- (2 / 2) Audience would understand what is required of them to complete the form successfully (components should be clearly marked for a mix of required/optional components).
- (2/ 2) Form is well integrated into the existing site's design (form is not "tacked" on).
- (4 / 4) Form design (mobile & desktop) is aesthetically pleasing and employs visual design principles: color, contrast, proximity, alignment, hierarchy, and repetition & consistency.

- (4 / 4) Design supports scanning/arching pattern for both mobile and desktop.
- (2 / 2) Form is polished, professional, and complete.

> Explanation for points lost:


**Form Design Total: (18 / 18)**

## Responsive Design
_full, half, or no credit_

Grader Instructions: Resize the browser window to a "mobile" and a "desktop" size to evaluate the responsive design **of _only_ the form**. Do **not** use responsive design mode in the Developer Tools. Do **not** evaluate the responsiveness of any other part of the site.

- (4 / 4) Form design is fully responsive for **desktop** and **mobile** devices.
- (6 / 6) Responsive design _"fits"_ the content and makes effective use of the screen space regardless of screen size. (Example: label to left of component on desktop, label on top of component on mobile.)

> Explanation for points lost:


**Responsive Design Total: (10 / 10)**

## Feedback Design
_full, half, or no credit_

- (2 / 2) Feedback clearly indicates that the form submission was not successful with more than color (i.e. text).
- (4 / 4) Feedback message are user appropriate and helpful; message do not blame the user ("You did not...").
- (2 / 2) Form **feedback** follows visual design principles, especially alignment.

> Explanation for points lost:


**Feedback Design Total: (8 / 8)**

## Deductions
_full deduction; no partial deductions_

**Grader Instructions:** If design journey is empty or mostly empty, do not deduct for "design first, then code." This deduction is for students that planned one thing but implemented another.

- ( / -10) _(Deduction)_ Implementation differs substantially compared to plan in design journey. "Design first, then code" not practiced.

> **Specific** explanation for points deducted:


**Deductions Total: (-0)**

## Overall _Design_ Total

**Design _Total_: (36 / 36)**

> What did the student do well?
- Good job with the form design!

# Implementation

NetID: na323

**Grader Instructions:** Review code in **Atom**. View site in **Chrome/Chromium**. Student must demonstrate correctly defining content's structure in HTML, applying styling in CSS, adding interactivity with JavaScript, and employing web development best practices. **Only grade the form; ignore all other code from Project 1 or 2.**

## Form Implementation
_full, half, or no credit_

- ( 4 / 4) At least 5 form components (no file uploads).
- ( 4 / 4) Form components are at least 3 distinct types.
- ( 2 / 2) Form is accessible. All controls have explicitly referenced labels. Placeholders are not a substitute.
- ( 2 / 2) Form is responsive; implemented with CSS media queries.
- ( 4 / 4) Form, feedback, and related code is well-coded and generally follows best practices.
  - Form HTML and CSS related files validate.
  - JavaScript contains 0 errors (check in developer console). _warnings are acceptable_
  - (form only) HTML, CSS & JavaScript code is readable and well formatted.
  - All JavaScript files are located inside the **scripts** (lowercase) folder; inline or internal JavaScript is strictly prohibited.

> Explanation for points lost:


**Form Implementation Total: ( 16 / 16)**

## Form Validation
_full, half, or no credit_

- ( 2 / 2) Specify all form validation criteria using HTML5 form validation attributes ("and/or" checks in JavaScript are acceptable).
- ( 4 / 4) Form validation check is handled using JavaScript and jQuery events.
- ( 4 / 4) Checks validation criteria by querying the control. (i.e. `$(...).prop("validity").valid`)
- ( 4 / 4) Form only submits when validation criteria is met.

> Explanation for points lost:


**Form Validation Total: ( 14 / 14)**

## Form Feedback
_full, half, or no credit_

- ( 4 / 4) Feedback is only shown when the validation criteria from design journey is not met.
- ( 2 / 2) Feedback messages are coded in HTML & styled with CSS (minimum of 3 feedback messages).
- ( 4 / 4) Dynamically changes element styling using JavaScript (i.e. `addClass()`, `removeClass()`)

> Explanation for points lost:


**Form Feedback Total: ( 10 / 10)**

## Deductions
_full, half, or no deduction_

**Grader Instructions:** For plagiarism notify info1300-prof@cornell.edu; do not deduct points. Instructor will deduct points/hold academic misconduct hearing, etc. upon review.

- (_0 credit for "Form Validation" & "Form Feedback" sections_) _(Deduction)_ Default HTML validation used; `<form novalidate>` is omitted.
- ( / -4) _(Deduction)_ Uses HTML in JavaScript code (`innerHTML()`, `text()`, `html()`).
- ( / -4) _(Deduction)_ Uses CSS in JavaScript code (`css()`).

- (0 / ?) _(Deduction)_ Plagiarism/Academic Integrity: includes code that is not the student's own work (includes code copied from lectures and labs).
- ( / -2 for each citation infringement up to -10) _(Deduction)_ Citations: Content is not cited according to course policy.

> **Specific** explanation for points deducted:

**Deductions Total: (-0)**

## Overall _Implementation_ Total

**Implementation _Total_: ( 40 / 40)**

> What did the student do well?
nice job with the javascript!


# Final Grade

| Learning Outcome          | Grade        |
| ------------------------- | ------------ |
| Design Process & Planning | + (24 / 24)  |
| Design                    | + (36 / 36)  |
| Implementation            | + (40 / 40)  |
| **Total**                 | = (100 / 100) |