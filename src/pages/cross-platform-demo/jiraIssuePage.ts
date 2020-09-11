import { gondola, locator, page, action } from "gondolajs";

@page
export class JiraIssuePage {
    @locator public txtSumary = `//h1`;
    @locator public headerIssue = `//div[@id="jira-issue-header"]`;
    @locator public tbComment = `//div[@class="sc-glwGys jUyUEO"]/div`;
    @locator public btnSaveComment = `//button[.="Save"]`;

    @action("check issue page display", "check issue page display")
    public async checkIssuePageDisplay() {
        await gondola.waitForElement(this.headerIssue, 30);
        await gondola.checkControlExist(this.headerIssue);
    }

    @action("check issue info display", "check issue page display")
    public async checkIssueInfoDisplay(issue:any) {
        await gondola.waitForElement(this.txtSumary, 10);
        await gondola.checkControlProperty(this.txtSumary, "text", issue.body.fields.summary);
        await gondola.checkControlExist(`//div[@id="jira-issue-header"]//a/span[.="${issue.body.key}"]`)
    }

    @action("add comment", "add comment")
    public async addComment(comment:string) {
        await gondola.waitForElement(this.tbComment, 10);
        await gondola.click(this.tbComment);
        await gondola.pressKey(Array.from(comment));
        await gondola.click(this.btnSaveComment);
    }
}

export default new JiraIssuePage();
