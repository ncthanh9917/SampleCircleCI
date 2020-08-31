import { TestCase, TestModule, gondola } from "gondolajs";
TestModule("Untitled Test Module");

TestCase("Untitled Test Case", async () => {
    let result = await gondola.sendGetRequest("https://www.bettycrocker.com/", "");
    await gondola.checkResponseStatus(result, 200);
});
