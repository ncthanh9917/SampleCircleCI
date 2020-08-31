"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
gondolajs_1.TestModule("Untitled Test Module");
gondolajs_1.TestCase("Untitled Test Case", async () => {
    let result = await gondolajs_1.gondola.sendGetRequest("https://www.bettycrocker.com/", "");
    await gondolajs_1.gondola.checkResponseStatus(result, 200);
});
//# sourceMappingURL=apiSample.js.map