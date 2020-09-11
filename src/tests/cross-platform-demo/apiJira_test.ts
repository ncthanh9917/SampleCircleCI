import { Data, TestCase, TestModule, gondola, importData } from "gondolajs";
import jiraLoginPage from "../../pages/cross-platform-demo/jiraLoginPage";
import jiraIssuePage from "../../pages/cross-platform-demo/jiraIssuePage";
TestModule("Jira API Test");

/*Data(importData("./data/issues.json")).TestCase("Jira API create new issue", async (current: any) => {
    let result = await gondola.sendPostRequest("https://support9917.atlassian.net/rest/api/3/issue", current.body, current.header);
    await gondola.checkResponseStatus(result, 201);
});*/

Data(importData("./data/issues.json")).TestCase("Jira verify new issue", async (current: any) => {
    let url = "https://support9917.atlassian.net/browse/" + current.body.key;
    await gondola.navigate(url);
    await jiraLoginPage.login();
    await jiraIssuePage.checkIssuePageDisplay();
    await jiraIssuePage.checkIssueInfoDisplay(current);
    await jiraIssuePage.addComment("comment");
});