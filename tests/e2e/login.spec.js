const { test } = require('@serenity-js/playwright-test');
const { Ensure, equals } = require('@serenity-js/assertions');
const { Click, Enter, Navigate, Page, Text, PageElement, By } = require('@serenity-js/web');

test.describe('Login page', () => {

    test('should login successfully with valid credentials', async ({ actor }) => {
        await actor.attemptsTo(
            Navigate.to('/'),
            Enter.theValue('admin').into(PageElement.located(By.id('username'))),
            Enter.theValue('password123').into(PageElement.located(By.id('password'))),
            Click.on(PageElement.located(By.css('button[type="submit"]'))),
            Ensure.that(Text.of(PageElement.located(By.id('message'))), equals('Login successful')),
        );
    });

    test('should show error message with invalid credentials', async ({ actor }) => {
        await actor.attemptsTo(
            Navigate.to('/'),
            Enter.theValue('wrong').into(PageElement.located(By.id('username'))),
            Enter.theValue('wrong').into(PageElement.located(By.id('password'))),
            Click.on(PageElement.located(By.css('button[type="submit"]'))),
            Ensure.that(Text.of(PageElement.located(By.id('message'))), equals('Invalid username or password')),
        );
    });
});
