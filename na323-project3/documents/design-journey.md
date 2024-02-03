# Project 3: Design Journey

**For milestones, complete only the sections that are labeled with that milestone.**

Be clear and concise in your writing. Bullets points are encouraged.

**Everything, including images, must be visible in Markdown Preview.** If it's not visible in Markdown Preview, then we won't grade it. We won't give you partial credit either.

**Make the case for your decisions using concepts from class, as well as other design principles, theories, examples, and cases from outside of class.**

You can use bullet points and lists, or full paragraphs, or a combination, whichever is appropriate. The writing should be solid draft quality but doesn't have to be fancy.

## Project 1 or Project 2
> Which project will you add a form to?

I will add a form to project 1.

## Audience (Milestone 1)
> Who is your site's target audience? This should be the original audience from Project 1 or Project 2. You may adjust the audience if necessary. Just make sure you explain your rationale for doing so here.

My Applefest website's target audience are Cornell students who live in Collegetown and are from outside of the U.S.

## Audience's Needs (Milestone 1)
> List the audience's needs that you identified in Project 1 or 2. Just list each need. No need to include the "Design Ideas and Choices", etc. You may adjust the needs if necessary. However, any changes you make to the needs for this project should be clearly identified and justified.

- Understanding what Applefest is (and understanding why/in what capacity it is culturally important in the United States)
- Knowing what will be at Applefest
- Knowing the date/time of Applefest
- Understanding how to participate in Applefest
- Understanding what types of apple-derived foods/drinks will be available at Applefest
- Understanding how to get to Applefest


## HTML Form + User Needs Brainstorming (Milestone 1)
> Using the audience needs you identified, brainstorm possible options for an HTML form for the site. List each idea and provide a brief rationale for how the HTML form addresses that need.

- A form on planning how to get to Applefest
  - This helps meet the need of understanding how to get to Applefest by encouraging the user to consider how they would go about this process in real-life.
- A feedback form on their experience at Applefest (Probably would include a section on how useful they found the site)
  - This doesn't meet any of the needs specifically, since it would happen after the users went to Applefest, but it would be helpful in getting feedback on the event and for improving it in the future.
- A raffle form to win a free apple cider and donut.
  - The apple cider and apple donuts are a big part of Applefest; this would incentivize my audience to attend Applefest and would also help immerse them in the cultural aspect of Applefest.
- A form on planning one's Applefest itinerary (will probably use this one for my proposal).
  - Meets the need of understanding how to get to Applefest. My audience will have a clearer idea of how to get to Applefest and how to participate in it, if they plan their itinerary and it's emailed to them. Also will provide the planners of Applefest with useful information.


## HTML Form Proposal & Rationale (Milestone 1)
> Make a decision about your site's form. Describe the purpose of your proposed form for your Project 1 or 2 site. Provide a brief rationale explaining how your proposed form meets the needs of your site's audience.
> Note: If your form is a contact form, we expect to see a thorough justification explaining how a contact form addresses the user's _actual_ needs. In your justification explain how a contact form better suits the needs of your user compared to the alternatives (e.g. sending you an email using your email address).

This is what I responded for Milestone 1:

Form Proposal: I propose that my form I will include will be a form that lets my target audience plan their itinerary. They are incentivized to submit this form and provide the users of Applefest with helpful information because by submitting the form, they will be able to enter a raffle to win an apple cider and  apple donut.

User Needs Rationale: This meets my users' needs of understanding how to get to applefest, since they will need to consider this aspect while filling out the form. It will also improve their understanding of what Applefest consists of because they will need to select which activities they plan to partake in. Also, it will have the potential to help culturally immerse them because by submitting the form, they will have the choice to enter a raffle and win some tasty food.

This is the feedback I received:
 > - Good job making sure you include the minimum number of components as well as variety of components.
> - I'm not sure how helpful submitting a form like this/including a raffle would be to incentivize culture immersion. This doesn't seem helpful information for organizer of the event to be collecting. It may be better to ask for what events the target audience intend on going to; this will help the organizer gauge headcount AND help the audience look through events to plan their itinerary.

Moving forward, this is how I plan to edit this part of my design journey:

This form include information that will help my audience look through the events in order for them to plan their itinerary. My TA grader made a good point, and I agree that the purpose of this form should be to help organizers estimate the headcount while also serving to help the audeince plan their itinerary (since in reality cultural immersion doesn't exactly make sense). I still would like there to be a raffle component since I think it is something fun for them to be able to participate in. So instead, this form will be based on the idea of "enter a raffle by planning your itinerary", where by planning their itinerary, they are able to enter the raffle. Moreover, I however believe that the questions I am asking are important information for the organizers to be collecting, since for example, if many people plan to be driving, then the organizers should therefore allocate extra resources for traffic management (cones,directions, people to help guide cars and rememdy street congestion). It's also a good idea for them to get information on which vendors potential attendees are interested in since that way they are able to improve for subsequent years.


## Form User Data (Milestone 1)
> Think through and plan the data you need to collect from the users. Do you need their name? Email address? etc.

- Name
- Email
- Number of people they plan to go with to applefest
- Their means of getting to Applefest
- Which Applefest events they plan to attend.
- If they have dietary restrictions or not
  - What their dietary restrictions are.
- The Submit button (Enter the raffle!)


## Form Components & Validation Criteria (Milestone 1)
> For each piece of data you plan to collect from the users, identify an appropriate HTML component to collect that data and decide the validation criteria (e.g. whether this data is _required_). Briefly explain your reasoning for the component choice and the validation criteria.

- Name (required): text field; `<input type="text">`
  - the form needs to collect your name so that we (Applefest) know who are.

- Email (required): text field;
`<input type="email">`
  - the form needs this information about you so as to contact you in the case that you are the raffle winner

- Number of people in your party (required): number;
`<input type="number">`
  - my audience has to specify the number of people in their party planning to attend Applefest because this is important demograph information and is very useful to the planners of Applefest.

- Means of getting to Applefest (required): radio; `<input type="radio">`
  -  This is required for my audience to fill out because it provides constructive information for the planners of Applefest. I will make sure to include an "other" option, in case none of the other options are represented

- Which vendors they plan to visit at Applefest (required): checkbox; `<input type="checkbox">`
  - This is required because it provides information that is helpful to the planners of Applefest.

- If they have dietary restrictions or not (required): radio; `<input type="radio">`
  - This is required because if this is a health concern because the raffle item might cause an allergic reaction or violate dietary beliefs.

- If they have a dietary restriction, what is this resctriction? (required): text area; `<input type="textarea">`
  - This section is required because if the user has allergies this poses a major health concern and they need to specify what their allergies are so that we (the organizers of Applefest) can make sure to find a prize that will not trigger their allergies. Also is very important to know if they are vegan and eating a type of pastry with milk would go against their belief.

- The Submit Button (required); submit; `<input type="submit">`
  - This is how they will submit the form to enter the raffle.


## Form Location (Milestone 1)
> Which HTML file will you place your form?

I will place it in my index.html file.

> Sketch the location of the form in that page. This sketch need not be fancy. You don't need to provide many details of the page or form. Just plan the location of the form on the page and communicate that to us. You can literally have a box that says "FORM HERE."

**Desktop Location**
*desktop sketch on the left
![sketch for desktop and mobile](1.jpg)

**Mobile Location**
![Sketch](1.jpg)


## Form Design (Milestone 1)
> Include sketches on your form below. Include sketches of your **mobile and desktop** versions without corrective feedback. Show us the evolution of your design and the alternatives you considered.

**Desktop Sketches**

**Mobile Sketches**

Both are here:
![form sketches](2.jpg)



This is the feedback I received:
> What did the student do well?
Good job indicating where you want to integrate your form.

> What needs improvement?
Please redraw distinct desktop and mobile designs. Current drawings could be neater so desktop and mobile sketches are more distinguishable.

Moving forward, these are my new sketches:
![first idea for desktop sketch](desktop1.jpg)
![2nd idea for desktop sketch](desktop2.jpg)
![3rd idea for desktop sketch](desktop3.jpg)
![4th idea for desktop sketch](desktop4.jpg)
I liked the fourth idea the most bc I feel tha it adheres best to how people scan a page for information.

Mobile designs (I only really had two of these, since I first started by drawing out my desktop designs)
![idea for mobile 1](mobile1.jpg)
![idea for mobile 2](mobile2.jpg)


## Form Feedback Design (Milestone 1)
> Include sketches of your **mobile and desktop** with _corrective feedback_. Show us the evolution of your design and the alternatives you considered.

**Desktop Feedback**


**Mobile Feedback**

sketches for both are here
![feedback sketches](3.jpg)

This is the feedback I received:
> What needs improvement?
Redraw feedback so that it is nicely visualized and well placed.

These are my new sketches moving forward:
I picked from my design sketches I liked the most, and debated between what color the feedback should be, but  chose red.
![ideas for desktop feedback](df.jpg)
![ideas for mobile feedback](mf.jpg)

## Form Implementation Planning (Milestone 1)
> What submission method will your form use? GET or POST. Explain your reasoning.

POST, because we are sending the data to the submit.php

> For your site's `<form>` element, plan all HTML attributes that you will need and their values. Hint: action=, method=, novalidate

- `method="post"`
- `action="https://www.cs.cornell.edu/courses/cs1300/2020fa/submit.php"`
- `novalidate`


## Additional Information (Milestone 1)
> (optional) Include any additional information, justifications, or comments we should be aware of.

While I was exploring different layouts for the desktop form, I realized that the form I liked the most also would work for the narrower mobile screen, with the adjustment of making the submit button below, rather than to the right.


## Plan Validation Pseudocode (Final Submission)
> Write your form validation pseudocode here.

- when 'no restrictions' is selected
  - hide restriction specifcation input
  - hide restriction specifcation's feedback message
  - hide restriction specifcation label
  - set restriction specifcation to be optional

- when 'I have dietary restrictions' is selected
  - show restriction specifcation input
  - show restriction specifcation label
  - set restriction specifcation to be required


- when the user submits the form
  - if the name component is valid
    - then hide name feedback
      - else
        - show name feedback

  - if the transport component is valid
    - then hide transport feedback
      - else
        - show transport feedback

  - if the vendor component is valid
    - then hide vendor feedback
      - else
        - show vendor feedback

  - if the party-size component is valid
    - then hide party-size feedback
      - else
        - show party-size feedback

  - if the dietary restriction component is valid
    - then hide restriction feedback
      - else
        - show dietary restriction feedback

  - if dietary restriction specification component is valid
    - then hide dietary restriction specification feedback
      - else
        - show dietary restriction specification feedback

- send form to server if formValid is true

## Additional Design Justifications (Final Submission)
> If you feel like you haven’t fully explained your design choices in the final submission, or you want to explain some functions in your site (e.g., if you feel like you make a special design choice which might not meet the final requirement), you can use the additional design justifications to justify your design choices. Remember, this is place for you to justify your design choices which you haven’t covered in the design journey. Use it wisely. However, you don’t need to fill out this section if you think all design choices have been well explained in the final submission design journey.

I want to use this section to just quickly reflect on my design choices for this form. I put a lot of thought into the layout of the form so that it was clean and followed people's scanning patterns, and so that's why the information isn't laid out perfectly vertically. For the mobile, because the screen is so small, I didn't have much choice but to arrange things vertically so that I could make the size bigger (because it's a touch screen which affords people less precision). I wanted to make the form aesthetic, but also functional. I tried my best to attain this balance by making the submit button purple, which is a calming color and goes nicely with the muted/leafy fall theme. It also has the benfit that purple contrasts with the green background, improving readability for the submit button. But I wanted to make the feedback clear, so I stuck with a classic red color that my audience could expect, as opposed to a blue color, which might convey the same urgency. The urgency is necessary for the feedback because of the health risks that failing to disclose dietary restrictions presents; red adheres better to the conventions of form feedback and is more distinct.

This is a form to enter a raffle, where my audience could win applefest themed food/drink, so I think the questions I asked are approprate, and that the form isn't too long. It makes sense for organizers to want to obtain information the audience's behavior and gauge a headcount, and it makes sense for people who want to attend applefest to plan out their itinerary. And so this form, to me, is a union of these two ideas, with the upside for users that when they take time to plan their itinerary and give the organizers information, they are componsated in the possibility of winning a fun raffle.

*I also reflected on certain choices in the photos of my sketches (I handwrote several side notes in my drawings), so if there is anything else in my design that doesn't make sense, please check there. But overall I think (and hope) that nothing is alarmingly amiss.


## Self-Reflection (Final Submission)
> This was the first project in this class where you coded some JavaScript. What did you learn from this experience?

I learned about how to use JS to improve form-design. By using JS, you are able to implement form feedback in order to guide your users when they fill out a form. While the forms in this class that we used JS for were shorter forms, and it could be easy to spot a missed section and understand that this is why your form isn't submitting, form feedback is necessary for forms of all length, especially when longer forms's failure to submit would be confusing to navigate without form feedback. I learned about jQuery too, and how CSS and JS work together to create a good type of form.


> Reflect on how HTML, CSS, and JavaScript together support client-side interactivity. If it's helpful, you can describe your mental model of client-side interactivity or explain how the general idea of showing and hiding content can be used to implement other forms of client-side interactivity beyond form validation and feedback.

I think HTML, CSS, and JS are all necessary to creating a website that people would want to use. HTML is the skeleton of the website, and is what the website is in the most basic sense, but CSS and JS are also needed in order to make the site nice to interact with, and make a site that people would actually enjoy using. CSS controls the visual layout of the site, and JS helps conrol interactivity. Not all sites have forms, but many sites have things like a drop-down menu, or expandable links to images; these are probably what I would most often use JS for when making a website, and is something that I come across when I use sites such as for online shopping for clothing, or looking through a website for a restaurant that I'm considering eating at.


> Take some time here to reflect on how much you've learned since you started this class. It's often easy to ignore our own progress. Take a moment and think about your accomplishments in this class. Hopefully you'll recognize that you've accomplished a lot and that you should be very proud of those accomplishments!

This was my first coding class, and I'm really proud of everything that I've learned. I feel that this class has given me a lot of necessary introductory information on web design, and has given me a strong understanding of that material. I still have a lot to learn, but I more or less feel less stressed and more excited? If that makes sense. I'm proud that I've consistently done pretty well on all of my projects and labs, and so I feel satisfied that my hard work has been overall accurately reflected in my grades.
