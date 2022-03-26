/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    text,
    into,
    textBox,
    click,
    clear
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Open todo application", async function () {
    await goto('http://34.116.156.27:8090/');
});

step("Write a <item> to text box", async (item) => {
    await write(item, into(textBox({ id:'todo-input' })));
});

step("Click to <item> button", async function(item) {
	await click(text(item));
    await clear(textBox({ id:'todo-input' }))
});

step("I should see <message> item", async function (message) {
    assert.ok(await text(message).exists(0, 0));
});

step("Add todos <table>", async function (table) {
    for (var row of table.rows) {
        await write(row.cells[0], into(textBox({ id:'todo-input' })));
        await click(text('Save'));
        await clear(textBox({ id:'todo-input' }))
    }
});

step("Must have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(await text(row.cells[0]).exists());
    }
});

