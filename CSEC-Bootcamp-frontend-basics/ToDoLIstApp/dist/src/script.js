"use strict";
var _a;
const add_note = document.querySelector("#new_note_content");
const add_btn = (_a = document.querySelector(".add_btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    if (add_note != null)
        add_note.style.display = "block";
});
