const MobileAppTesting = require("../pageobjects/page");
describe('Mobile App Testing', () => {
    it.skip('Explore_Bookmarks',async() => {
        await MobileAppTesting.Explore_Bookmarks();
    });
    
    it.skip('Verifying_Deleting_Bookmarks', async() => {
        await MobileAppTesting.Verifying_Deleting_Bookmarks();
    });
       
    it.skip('Video_recentLesson', async() => {
        await MobileAppTesting.Video_recentLesson();
    });
    it('Settings', async() => {
        await MobileAppTesting.Settings();
    });
    it('Arts_humanities', async() => {
        await MobileAppTesting.Arts_humanities();
    });
    it('AppSwith', async() => {
        await MobileAppTesting.AppSwith();
    });
    it.skip('Closing', async() => {
        await MobileAppTesting.Closing();
    });
});


