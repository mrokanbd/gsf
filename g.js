function ajaxCallback(e, n, o) { let { dataType: r = "json", ...s } = n; apex.server.process(e, { ...s }, { dataType: r, beforeSend: function () { showSpanner() }, success: function (e) { o && o(e) }, error: function (e) { console.warn(e) }, complete: function () { hideSpanner() } }) }
function regionPageItems(e) { const n = apex.region(e); return n ? n.element.find(":input").map((function () { const e = this.name; return e && apex.item(e) ? e : null })).get().filter(Boolean) : (console.error("Region not found:", e), []) }

function clearPageItems(pItemsName) {
    for (let i = 0; i < pItemsName.length; i++) {
        $s(`${pItemsName[i]}`, '');
    };
};
