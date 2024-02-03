# Interactivity Plan

## PixelBox: White

```
execution starts here
move left
flip switch
move right
move right
flip switch
move left
flip switch
execution ends here
```


## PixelBox: Magenta

```
execution starts here
move left
flip switch
move right
move right
flip switch
execution ends here
```


## Rotate Images

```
execution starts here
repeat for all six images (
rotate clockwise )
execution ends here
```


## Rotate & Transform Images

```
execution starts here
repeat for all six images (
decrease contrast by 20%
resize to 100 x 100
apply grayscale )
execution ends here
```


## Form Control Validation Criteria
> For each form control you should specify the input validation criteria.

1. Name:

    - component: <input type="text">
    - required/optional: required
    - reasoning: we must know who the tickets are for so as to verify their identity.

2. Email:

    - component: <input type="email">
    - required/optional: required
    - reasoning: they must put their email to receive the confirmation and receipt; having a "paper trail" is really important and is for the protection of the customer, but also the vendor.

3. Number of Tickets:

    - component:<input type="number">
    - required/optional: required
    - reasoning: in order for the purpose of this form to be fulfilled, they must specify the nymber of ticks.

4. Pickup Location:

    - component: <input type="radio">
    - required/optional: required
    - reasoning: if there is more than one pickup location, then they must specify where they would like to pick the tickets up. There is more than one pickup location.


## Design Form Feedback
> Include a sketch of your form feedback.

![form feedback sketch(es) ](sketch.jpg)


## Pseudocode Validation and Feedback Plan
> Write out the plan for your form validation code.

```
Name:
When the user submits the form:
  If the age's HTML5 validation criteria has not been met:
    Show a feedback message to "*Required: please complete this item to successfully submit the preorder request.*"
    Do not submit the form.
  Otherwise,
    Hide age's feedback message.
    Show a feedback message to "Success"
    Send form data to the server.

Email:
When the user submits the form:
  If the age's HTML5 validation criteria has not been met:
    Show a feedback message to "*Required: please complete this item to successfully submit the preorder request.*"
    Do not submit the form.
  Otherwise,
    Hide age's feedback message.
    Show a feedback message to "Success"
    Send form data to the server.


Number of Tickets:
When the user submits the form:
  If the age's HTML5 validation criteria has not been met:
    Show a feedback message to "*Required: please complete this item to successfully submit the preorder request.*"
    Do not submit the form.
  Otherwise,
    Hide age's feedback message.
    Show a feedback message to "Success"
    Send form data to the server.

Pickup Location
When the user submits the form:
  If the age's HTML5 validation criteria has not been met:
    Show a feedback message to "*Required: please complete this item to successfully submit the preorder request.*"
    Do not submit the form.
  Otherwise,
    Hide age's feedback message.
    Show a feedback message to "Success"
    Send form data to the server


* I'm not sure how to specify this but if all of the validation criteria I would like a message to pop up on the screen saying "success"
```
