"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let ProductPage = class ProductPage {
    constructor() {
        this.elmItems = `//div[@class='item']`;
        this.btnAddItemToCard = `//div[@class='item' and ./p[text()='%s']]/button`;
        this.lblPageTitle = `//main[@class='capsule']//h1`;
        this.lnkTopMenuWomen = `//div[@class='navarea']//ul/a[.="Women's"]`;
        this.lnkTopMenuSale = `//div[@class='navarea']//ul/a[.="Sale"]`;
        this.lnkTopMenuShoppingCart = `//div[@class='navarea']//a[@href='/cart']`;
        this.lblCartCount = `//div[@class='cartcount']`;
    }
    async addToCart(productName, cartCount = 1) {
        let realLocator = this.btnAddItemToCard.replace('%s', productName);
        await gondolajs_1.gondola.waitForElement(realLocator);
        await gondolajs_1.gondola.click(realLocator);
        await gondolajs_1.gondola.waitForElementProperty(this.lblCartCount, "innerText", cartCount.toString(), 5);
    }
    async checkSalePageTitleDisplayed() {
        await gondolajs_1.gondola.checkControlExist(this.lblPageTitle);
        await gondolajs_1.gondola.checkControlProperty(this.lblPageTitle, "innerText", "Sale");
    }
    async checkAllSaleLabelsDisplayed() {
        let count = await gondolajs_1.gondola.getElementCount(this.elmItems);
        while (--count > 0) {
            await gondolajs_1.gondola.checkControlExist(`${this.elmItems}[${count}]//span[text()='Sale']`);
        }
    }
    async openShoppingCart() {
        await gondolajs_1.gondola.waitForElement(this.lnkTopMenuShoppingCart);
        await gondolajs_1.gondola.click(this.lnkTopMenuShoppingCart);
    }
};
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "elmItems", void 0);
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "btnAddItemToCard", void 0);
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "lblPageTitle", void 0);
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "lnkTopMenuWomen", void 0);
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "lnkTopMenuSale", void 0);
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "lnkTopMenuShoppingCart", void 0);
__decorate([
    gondolajs_1.locator
], ProductPage.prototype, "lblCartCount", void 0);
__decorate([
    gondolajs_1.action("add item to cart", "Add product to cart")
], ProductPage.prototype, "addToCart", null);
__decorate([
    gondolajs_1.action("check page title displayed", "Check 'Sale' page title is displayed")
], ProductPage.prototype, "checkSalePageTitleDisplayed", null);
__decorate([
    gondolajs_1.action("check all sale labels exist", "Check 'Sale' label displayed in all products")
], ProductPage.prototype, "checkAllSaleLabelsDisplayed", null);
__decorate([
    gondolajs_1.action("open shopping cart", "Open shopping cart by clicking on cart menu on the top")
], ProductPage.prototype, "openShoppingCart", null);
ProductPage = __decorate([
    gondolajs_1.page
], ProductPage);
exports.ProductPage = ProductPage;
exports.default = new ProductPage();
//# sourceMappingURL=productPage.js.map