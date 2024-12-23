/*!
 Select for DataTables 1.2.2
 2015-2016 SpryMedia Ltd - datatables.net/license/mit
*/
(function (e) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (j) { return e(j, window, document) }) : "object" === typeof exports ? module.exports = function (j, m) { j || (j = window); if (!m || !m.fn.dataTable) m = require("datatables.net")(j, m).$; return e(m, j, j.document) } : e(jQuery, window, document) })(function (e, j, m, h) {
	function v(b, c, a) {
		var d; d = function (a, c) { if (a > c) var d = c, c = a, a = d; var f = !1; return b.columns(":visible").indexes().filter(function (b) { b === a && (f = !0); return b === c ? (f = !1, !0) : f }) }; var f =
		function (a, c) { var d = b.rows({ search: "applied" }).indexes(); if (d.indexOf(a) > d.indexOf(c)) var f = c, c = a, a = f; var e = !1; return d.filter(function (b) { b === a && (e = !0); return b === c ? (e = !1, !0) : e }) }; !b.cells({ selected: !0 }).any() && !a ? (d = d(0, c.column), a = f(0, c.row)) : (d = d(a.column, c.column), a = f(a.row, c.row)); a = b.cells(a, d).flatten(); b.cells(c, { selected: !0 }).any() ? b.cells(a).deselect() : b.cells(a).select()
	} function r(b) {
		var c = b.settings()[0]._select.selector; e(b.table().container()).off("mousedown.dtSelect", c).off("mouseup.dtSelect",
		c).off("click.dtSelect", c); e("body").off("click.dtSelect" + b.table().node().id)
	} function x(b) {
		var c = e(b.table().container()), a = b.settings()[0], d = a._select.selector; c.on("mousedown.dtSelect", d, function (a) { if (a.shiftKey || a.metaKey || a.ctrlKey) c.css("-moz-user-select", "none").one("selectstart.dtSelect", d, function () { return !1 }) }).on("mouseup.dtSelect", d, function () { c.css("-moz-user-select", "") }).on("click.dtSelect", d, function (a) {
			var c = b.select.items(); if (!j.getSelection || !e.trim(j.getSelection().toString())) {
				var d =
				b.settings()[0]; if (e(a.target).closest("div.dataTables_wrapper")[0] == b.table().container()) { var k = b.cell(e(a.target).closest("td, th")); if (k.any()) { var g = e.Event("user-select.dt"); i(b, g, [c, k, a]); g.isDefaultPrevented() || (g = k.index(), "row" === c ? (c = g.row, s(a, b, d, "row", c)) : "column" === c ? (c = k.index().column, s(a, b, d, "column", c)) : "cell" === c && (c = k.index(), s(a, b, d, "cell", c)), d._select_lastCell = g) } }
			}
		}); e("body").on("click.dtSelect" + b.table().node().id, function (c) {
			a._select.blurable && !e(c.target).parents().filter(b.table().container()).length &&
			(c.target.getRootNode() === m && !e(c.target).parents("div.DTE").length) && p(a, !0)
		})
	} function i(b, c, a, d) { if (!d || b.flatten().length) "string" === typeof c && (c += ".dt"), a.unshift(b), e(b.table().node()).trigger(c, a) } function y(b) {
		var c = b.settings()[0]; if (c._select.info && c.aanFeatures.i) {
			var a = b.rows({ selected: !0 }).flatten().length, d = b.columns({ selected: !0 }).flatten().length, f = b.cells({ selected: !0 }).flatten().length, l = function (a, c, d) {
				a.append(e('<span class="select-item"/>').append(b.i18n("select." + c + "s", {
					_: "%d " +
					c + "s selected", "0": "", 1: "1 " + c + " selected"
				}, d)))
			}; e.each(c.aanFeatures.i, function (c, b) { var b = e(b), g = e('<span class="select-info"/>'); l(g, "row", a); l(g, "column", d); l(g, "cell", f); var h = b.children("span.select-info"); h.length && h.remove(); "" !== g.text() && b.append(g) })
		}
	} function z(b, c, a, d) {
		var f = b[c + "s"]({ search: "applied" }).indexes(), d = e.inArray(d, f), l = e.inArray(a, f); if (!b[c + "s"]({ selected: !0 }).any() && -1 === d) f.splice(e.inArray(a, f) + 1, f.length); else {
			if (d > l) var g = l, l = d, d = g; f.splice(l + 1, f.length); f.splice(0,
			d)
		} b[c](a, { selected: !0 }).any() ? (f.splice(e.inArray(a, f), 1), b[c + "s"](f).deselect()) : b[c + "s"](f).select()
	} function p(b, c) { if (c || "single" === b._select.style) { var a = new g.Api(b); a.rows({ selected: !0 }).deselect(); a.columns({ selected: !0 }).deselect(); a.cells({ selected: !0 }).deselect() } } function s(b, c, a, d, f) {
		var e = c.select.style(), g = c[d](f, { selected: !0 }).any(); "os" === e ? b.ctrlKey || b.metaKey ? c[d](f).select(!g) : b.shiftKey ? "cell" === d ? v(c, f, a._select_lastCell || null) : z(c, d, f, a._select_lastCell ? a._select_lastCell[d] :
		null) : (b = c[d + "s"]({ selected: !0 }), g && 1 === b.flatten().length ? c[d](f).deselect() : (b.deselect(), c[d](f).select())) : "multi+shift" == e ? b.shiftKey ? "cell" === d ? v(c, f, a._select_lastCell || null) : z(c, d, f, a._select_lastCell ? a._select_lastCell[d] : null) : c[d](f).select(!g) : c[d](f).select(!g)
	} function q(b, c) { return function (a) { return a.i18n("buttons." + b, c) } } function t(b) { b = b._eventNamespace; return "draw.dt.DT" + b + " select.dt.DT" + b + " deselect.dt.DT" + b } var g = e.fn.dataTable; g.select = {}; g.select.version = "1.2.2"; g.select.init =
	function (b) {
		var c = b.settings()[0], a = c.oInit.select, d = g.defaults.select, a = a === h ? d : a, d = "row", f = "api", l = !1, w = !0, k = "td, th", j = "selected", i = !1; c._select = {}; if (!0 === a) f = "os", i = !0; else if ("string" === typeof a) f = a, i = !0; else if (e.isPlainObject(a) && (a.blurable !== h && (l = a.blurable), a.info !== h && (w = a.info), a.items !== h && (d = a.items), a.style !== h && (f = a.style, i = !0), a.selector !== h && (k = a.selector), a.className !== h)) j = a.className; b.select.selector(k); b.select.items(d); b.select.style(f); b.select.blurable(l); b.select.info(w);
		c._select.className = j; e.fn.dataTable.ext.order["select-checkbox"] = function (a, c) { return this.api().column(c, { order: "index" }).nodes().map(function (c) { return "row" === a._select.items ? e(c).parent().hasClass(a._select.className) : "cell" === a._select.items ? e(c).hasClass(a._select.className) : !1 }) }; !i && e(b.table().node()).hasClass("selectable") && b.select.style("os")
	}; e.each([{ type: "row", prop: "aoData" }, { type: "column", prop: "aoColumns" }], function (b, c) {
		g.ext.selector[c.type].push(function (a, b, f) {
			var b = b.selected,
			e, g = []; if (b === h) return f; for (var k = 0, i = f.length; k < i; k++) e = a[c.prop][f[k]], (!0 === b && !0 === e._select_selected || !1 === b && !e._select_selected) && g.push(f[k]); return g
		})
	}); g.ext.selector.cell.push(function (b, c, a) { var c = c.selected, d, f = []; if (c === h) return a; for (var e = 0, g = a.length; e < g; e++) d = b.aoData[a[e].row], (!0 === c && d._selected_cells && !0 === d._selected_cells[a[e].column] || !1 === c && (!d._selected_cells || !d._selected_cells[a[e].column])) && f.push(a[e]); return f }); var n = g.Api.register, o = g.Api.registerPlural; n("select()",
	function () { return this.iterator("table", function (b) { g.select.init(new g.Api(b)) }) }); n("select.blurable()", function (b) { return b === h ? this.context[0]._select.blurable : this.iterator("table", function (c) { c._select.blurable = b }) }); n("select.info()", function (b) { return y === h ? this.context[0]._select.info : this.iterator("table", function (c) { c._select.info = b }) }); n("select.items()", function (b) {
		return b === h ? this.context[0]._select.items : this.iterator("table", function (c) {
			c._select.items = b; i(new g.Api(c), "selectItems",
			[b])
		})
	}); n("select.style()", function (b) {
		return b === h ? this.context[0]._select.style : this.iterator("table", function (c) {
			c._select.style = b; if (!c._select_init) {
				var a = new g.Api(c); c.aoRowCreatedCallback.push({ fn: function (a, b, d) { b = c.aoData[d]; b._select_selected && e(a).addClass(c._select.className); a = 0; for (d = c.aoColumns.length; a < d; a++) (c.aoColumns[a]._select_selected || b._selected_cells && b._selected_cells[a]) && e(b.anCells[a]).addClass(c._select.className) }, sName: "select-deferRender" }); a.on("preXhr.dt.dtSelect",
				function () { var c = a.rows({ selected: !0 }).ids(!0).filter(function (a) { return a !== h }), b = a.cells({ selected: !0 }).eq(0).map(function (c) { var b = a.row(c.row).id(!0); return b ? { row: b, column: c.column } : h }).filter(function (a) { return a !== h }); a.one("draw.dt.dtSelect", function () { a.rows(c).select(); b.any() && b.each(function (c) { a.cells(c.row, c.column).select() }) }) }); a.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function () { y(a) }); a.on("destroy.dtSelect", function () { r(a); a.off(".dtSelect") })
			} var d =
			new g.Api(c); r(d); "api" !== b && x(d); i(new g.Api(c), "selectStyle", [b])
		})
	}); n("select.selector()", function (b) { return b === h ? this.context[0]._select.selector : this.iterator("table", function (c) { r(new g.Api(c)); c._select.selector = b; "api" !== c._select.style && x(new g.Api(c)) }) }); o("rows().select()", "row().select()", function (b) {
		var c = this; if (!1 === b) return this.deselect(); this.iterator("row", function (a, c) { p(a); a.aoData[c]._select_selected = !0; e(a.aoData[c].nTr).addClass(a._select.className) }); this.iterator("table",
		function (a, b) { i(c, "select", ["row", c[b]], !0) }); return this
	}); o("columns().select()", "column().select()", function (b) { var c = this; if (!1 === b) return this.deselect(); this.iterator("column", function (a, c) { p(a); a.aoColumns[c]._select_selected = !0; var b = (new g.Api(a)).column(c); e(b.header()).addClass(a._select.className); e(b.footer()).addClass(a._select.className); b.nodes().to$().addClass(a._select.className) }); this.iterator("table", function (a, b) { i(c, "select", ["column", c[b]], !0) }); return this }); o("cells().select()",
	"cell().select()", function (b) { var c = this; if (!1 === b) return this.deselect(); this.iterator("cell", function (a, c, b) { p(a); c = a.aoData[c]; c._selected_cells === h && (c._selected_cells = []); c._selected_cells[b] = !0; c.anCells && e(c.anCells[b]).addClass(a._select.className) }); this.iterator("table", function (a, b) { i(c, "select", ["cell", c[b]], !0) }); return this }); o("rows().deselect()", "row().deselect()", function () {
		var b = this; this.iterator("row", function (c, a) { c.aoData[a]._select_selected = !1; e(c.aoData[a].nTr).removeClass(c._select.className) });
		this.iterator("table", function (c, a) { i(b, "deselect", ["row", b[a]], !0) }); return this
	}); o("columns().deselect()", "column().deselect()", function () {
		var b = this; this.iterator("column", function (c, a) { c.aoColumns[a]._select_selected = !1; var b = new g.Api(c), f = b.column(a); e(f.header()).removeClass(c._select.className); e(f.footer()).removeClass(c._select.className); b.cells(null, a).indexes().each(function (a) { var b = c.aoData[a.row], d = b._selected_cells; b.anCells && (!d || !d[a.column]) && e(b.anCells[a.column]).removeClass(c._select.className) }) });
		this.iterator("table", function (c, a) { i(b, "deselect", ["column", b[a]], !0) }); return this
	}); o("cells().deselect()", "cell().deselect()", function () { var b = this; this.iterator("cell", function (c, a, b) { a = c.aoData[a]; a._selected_cells[b] = !1; a.anCells && !c.aoColumns[b]._select_selected && e(a.anCells[b]).removeClass(c._select.className) }); this.iterator("table", function (c, a) { i(b, "deselect", ["cell", b[a]], !0) }); return this }); var u = 0; e.extend(g.ext.buttons, {
		selected: {
			text: q("selected", "Selected"), className: "buttons-selected",
			init: function (b, c, a) { var d = this; a._eventNamespace = ".select" + u++; b.on(t(a), function () { var a = d.rows({ selected: !0 }).any() || d.columns({ selected: !0 }).any() || d.cells({ selected: !0 }).any(); d.enable(a) }); this.disable() }, destroy: function (b, c, a) { b.off(a._eventNamespace) }
		}, selectedSingle: {
			text: q("selectedSingle", "Selected single"), className: "buttons-selected-single", init: function (b, c, a) {
				var d = this; a._eventNamespace = ".select" + u++; b.on(t(a), function () {
					var a = b.rows({ selected: !0 }).flatten().length + b.columns({ selected: !0 }).flatten().length +
					b.cells({ selected: !0 }).flatten().length; d.enable(1 === a)
				}); this.disable()
			}, destroy: function (b, c, a) { b.off(a._eventNamespace) }
		}, selectAll: { text: q("selectAll", "Select all"), className: "buttons-select-all", action: function () { this[this.select.items() + "s"]().select() } }, selectNone: {
			text: q("selectNone", "Deselect all"), className: "buttons-select-none", action: function () { p(this.settings()[0], !0) }, init: function (b, c, a) {
				var d = this; a._eventNamespace = ".select" + u++; b.on(t(a), function () {
					var a = b.rows({ selected: !0 }).flatten().length +
					b.columns({ selected: !0 }).flatten().length + b.cells({ selected: !0 }).flatten().length; d.enable(0 < a)
				}); this.disable()
			}, destroy: function (b, c, a) { b.off(a._eventNamespace) }
		}
	}); e.each(["Row", "Column", "Cell"], function (b, c) { var a = c.toLowerCase(); g.ext.buttons["select" + c + "s"] = { text: q("select" + c + "s", "Select " + a + "s"), className: "buttons-select-" + a + "s", action: function () { this.select.items(a) }, init: function (b) { var c = this; b.on("selectItems.dt.DT", function (b, d, e) { c.active(e === a) }) } } }); e(m).on("preInit.dt.dtSelect", function (b,
	c) { "dt" === b.namespace && g.select.init(new g.Api(c)) }); return g.select
});