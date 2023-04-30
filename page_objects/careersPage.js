//Page objects for the Carrers December Labs page

module.exports = {
  
    elements: {
        applyNowBtn: { selector: 'body > main > section.row.content_culture > article > div > a'},
        applyForm: { selector: '#wpforms-form-870'},
        formTitle: { selector: 'body > main > section.row.content_what_we_offer > div > div > div.start-project-form.content_form > h3'},
        sendFormBtn: { selector: '#wpforms-submit-870'},
        nameInput: { selector: '#wpforms-870-field_0'},
        emailInput: { selector: '#wpforms-870-field_1'},
        linkedinInput: { selector: '#wpforms-870-field_20'},
        commentsInput: { selector: '#wpforms-870-field_2'}
    }
  };