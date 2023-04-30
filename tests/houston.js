describe('Decemberlabs Houston Page', function() {

    before(async (browser, done) => browser
        .navigateTo(process.env.BASE_URL)
        .resizeWindow(1280,720,done)
    );
  
    after(async (browser) => browser.quit());
  
    it('Validate Houston page', function(browser) {
      var home = browser.page.homePage();
      var houston = browser.page.houstonPage();

      home
        //Validate title and main menu and then navigate to Houston page
        .assert.titleEquals('December Labs: UX/UI Design and Mobile App & Web Development')
        .click('@mainMenuBtn')
        .assert.elementPresent('@mainMenu')
        .click('@closeMainMenu')
        .click('@houstonPageLink');
      houston
        //Validate Houston page title and url
        .assert.titleEquals('Houston Web & App Developers | December Labs')
        .assert.urlEquals('https://inhouse.decemberlabs.com/locations/houston/')

        //Validate "Schedule free consultation" form opens and closes
        .click('@scheduleBtn')
        .waitForElementVisible('@scheduleForm')
        .click('@closeScheduleFormBtn')
        .waitForElementNotVisible('@scheduleForm')
    });
  });
  