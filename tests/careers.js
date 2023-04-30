describe('Decemberlabs Page', function() {

    before(async (browser, done) => browser
        .navigateTo(process.env.CAREERS_URL)
        .resizeWindow(1280,720,done)
    );
  
    after(async (browser) => browser.quit());
  
    it('Validate December Labs carrers page', function(browser) {
        var careers = browser.page.careersPage();

        careers
          //Validate form displays and title
          .click('@applyNowBtn')
          .assert.elementPresent('@applyForm')
          .assert.textContains('@formTitle', 'Join Our Team')

          //Validate that the fields display in red when it is not completed
          .click('@sendFormBtn')
          .assert.hasClass('@nameInput','wpforms-error')
          .assert.hasClass('@emailInput','wpforms-error')
          .assert.hasClass('@linkedinInput','wpforms-error')
          .assert.hasClass('@commentsInput','wpforms-error')

          //Validate that the field stops displaying red when it is completed
          .sendKeys('@nameInput','Name Test')
          .assert.not.hasClass('@nameInput','wpforms-error')
          .sendKeys('@emailInput','email_test@mail.com')
          .assert.not.hasClass('@emailInput','wpforms-error')
          .sendKeys('@linkedinInput','https://linkedin.com/in/usertest')
          .assert.not.hasClass('@linkedinInput','wpforms-error')
          .sendKeys('@commentsInput','This is an Automated Test')
          .assert.not.hasClass('@commentsInput','wpforms-error')
      });
  });
  