/* Smart HTML Elements v7.3.0 (2020-Apr) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!(function (e) {
    var t = {};
    function i(s) {
        if (t[s]) return t[s].exports;
        var n = (t[s] = { i: s, l: !1, exports: {} });
        return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    (i.m = e),
        (i.c = t),
        (i.d = function (e, t, s) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if ((i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    i.d(
                        s,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return s;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ""),
        i((i.s = 42));
})({
    42: function (e, t) {
        Smart(
            "smart-gantt-chart",
            class extends Smart.ScrollViewer {
                static get properties() {
                    return {
                        autoSchedule: { value: !1, type: "boolean" },
                        autoScheduleStrictMode: { value: !1, type: "boolean" },
                        autoScrollStep: { value: 5, type: "number" },
                        dataExport: {
                            value: {
                                header: { value: !0, type: "boolean" },
                                style: { value: null, type: "object" },
                                itemType: { value: "task", type: "string" },
                                fileName: { value: "smartGanttChart", type: "string?" },
                                pageOrientation: { value: "portrait", type: "string" },
                                expandChar: { value: "+", type: "string" },
                                collapseChar: { value: "-", type: "string" },
                            },
                            type: "object",
                        },
                        dataSource: { value: [], type: "any", reflectToAttribute: !1 },
                        dayFormat: { value: "short", allowedValues: ["2-digit", "numeric", "long", "short", "narrow"], type: "string" },
                        dateEnd: { value: "", type: "any", validator: "_dateValidator" },
                        dateStart: { value: "", type: "any", validator: "_dateValidator" },
                        disableAutoScroll: { value: !1, type: "boolean" },
                        disableTaskDrag: { value: !1, type: "boolean" },
                        disableTaskProgressChange: { value: !1, type: "boolean" },
                        disableTaskResize: { value: !1, type: "boolean" },
                        disableSelection: { value: !1, type: "boolean" },
                        disableWindowEditor: { value: !1, type: "boolean" },
                        durationUnit: { value: "milisecond", allowedValues: ["day", "week", "hour", "minute", "second", "milisecond"], type: "string" },
                        headerTemplate: { value: null, type: "any" },
                        hourFormat: { value: "default", allowedValues: ["default", "2-digit", "numeric"], type: "string" },
                        hideResourcePanel: { value: !1, type: "boolean" },
                        inverted: { value: !1, type: "boolean" },
                        messages: {
                            extend: !0,
                            value: {
                                en: {
                                    invalidValue: "{{elementType}}: Invalid {{property}} value. {{property}} should be of type {{typeOne}} or {{typeTwo}}.",
                                    incorrectArgument: "{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.",
                                    outOfBounds: "{{elementType}}: Out of bounds argument {{argumentName}} in method {{methodName}}.",
                                    missingReference: "{{elementType}}: Missing reference to {{file}} in method {{methodName}}.",
                                    noId: "smartGanttChart requires an id in order to save/load/clear a state.",
                                    ok: "Ok",
                                    cancel: "Cancel",
                                    delete: "Delete",
                                    confirm: "{{componentName}} will be deleted permanently, <b>are you sure? </b>",
                                    taskColumnLabel: "Task Name",
                                    resourceColumnLabel: "Resource Name",
                                    deleteLink: "Delete link",
                                    unassigned: "Unassigned",
                                },
                            },
                            type: "object",
                        },
                        monthFormat: { value: "short", allowedValues: ["2-digit", "numeric", "long", "short", "narrow"], type: "string" },
                        max: { value: new Date(2100, 0, 1), type: "any", validator: "_dateValidator" },
                        min: { value: new Date(1900, 0, 1), type: "any", validator: "_dateValidator" },
                        nonworkingDays: { value: [], type: "array" },
                        nonworkingHours: { value: [], type: "array" },
                        popupWindowCustomizationFunction: { value: null, reflectToAttribute: !1, type: "function?" },
                        resizeHandlesVisibility: { allowedValues: ["auto", "hidden", "visible"], value: "auto", type: "string" },
                        resourceColumns: { value: [{ label: "resourceColumnLabel", value: "label" }], type: "array", reflectToAttribute: !1 },
                        resourcePanelHeaderTemplate: { value: null, type: "any" },
                        resourcePanelMin: { value: 100, type: "any" },
                        resourcePanelSize: { value: "", type: "any" },
                        resourcePanelRefreshRate: { value: 0, reflectToAttribute: !1, type: "number" },
                        resourceTimelineFormatFunction: { value: null, reflectToAttribute: !1, type: "function?" },
                        resourceTimelineMode: { allowedValues: ["diagram", "histogram", "custom"], value: "diagram", type: "string" },
                        resourceTimelineView: { allowedValues: ["hours", "tasks", "custom"], value: "hours", type: "string" },
                        selectedIndexes: { value: [], type: "array" },
                        snapToNearest: { value: !1, type: "boolean" },
                        taskColumns: { value: [{ label: "taskColumnLabel", value: "label" }], type: "array", reflectToAttribute: !1 },
                        taskPanelMin: { value: 200, type: "any" },
                        taskPanelSize: { value: "", type: "any" },
                        timelineMin: { value: 200, type: "any" },
                        treeMin: { value: 100, type: "any" },
                        treeSize: { value: "20%", type: "any" },
                        timelineHeaderFormatFunction: { value: null, reflectToAttribute: !1, type: "function?" },
                        verticalScrollBarVisibility: { type: "string", value: "auto", allowedValues: ["auto", "disabled", "hidden", "visible"] },
                        view: { value: "year", allowedValues: ["day", "week", "month", "year", "resource"], type: "any" },
                        yearFormat: { value: "numeric", allowedValues: ["2-digit", "numeric"], type: "string" },
                        weekFormat: { value: "long", allowedValues: ["long", "numeric"], type: "string" },
                    };
                }
                template() {
                    return '<div id="container" role="presentation">\n                    <smart-splitter id="mainSplitter" auto-fit-mode="end" keep-proportions-on-resize right-to-left="[[rightToLeft]]" animation="[[animation]]" orientation="horizontal">\n                        <smart-splitter-item id="taskSplitterItem" class="smart-task-splitter-item">\n                            <div id="taskSplitterItemHeader" class="smart-task-panel-header"></div>\n                            <smart-splitter id="taskSplitter" class="smart-task-splitter" auto-fit-mode="end" right-to-left="[[rightToLeft]]" animation="[[animation]]">\n                                 <smart-splitter-item id="treeSplitterItem" min="[[treeMin]]">\n                                    <smart-splitter id="taskTreeSplitter" auto-fit-mode="end" class="smart-tree-splitter" unfocusable right-to-left="[[rightToLeft]]" animation="[[animation]]">\n                                        <smart-splitter-item id="taskTreeSplitterItem">\n                                            <div class="smart-task-tree-header"></div>\n                                            <div class="smart-task-tree-content">\n                                                <smart-tree id="taskTree" selection-mode="zeroOrOne" overflow="hidden" toggle-mode="arrow" animation="[[animation]]"\n                                                    aria-controls="[[id]]" right-to-left="[[rightToLeft]]">\n                                                </smart-tree>\n                                            </div>\n                                        </smart-splitter-item>                               \n                                    <smart-splitter>\n                                </smart-splitter-item>\n                                <smart-splitter-item id="timelineSplitterItem" class="smart-timeline-splitter-item" min="[[timelineMin]]">\n                                        <div id="timeline" class="smart-timeline">\n                                            <div id="timelineContainer" class="smart-timeline-container" role="presentation">\n                                                <div id="timelineHeader" class="smart-timeline-header" role="rowgroup">\n                                                    <div class="smart-timeline-view-details" id="timelineViewDetails" role="row"></div>\n                                                    <div class="smart-timeline-view-cells" id="timelineViewCells" role="row"></div>\n                                                </div>\n                                                <div id="timelineContent" class="smart-timeline-content">\n                                                    <div id="taskTimelineCellsContainer" class="smart-timeline-cells-container" aria-hidden="true"></div>\n                                                    <div id="timelineConnectionsContainer" class="smart-timeline-connections-container" role="group"></div>\n                                                    <div id="timelineTasksContainer" class="smart-timeline-tasks-container" role="group"></div>\n                                                </div>\n                                                <div id="timelineAnimationContainer" class="smart-timeline-animation-container smart-visibility-hidden" aria-hidden="true">\n                                                    <div class="smart-timeline-animation-inner-container">\n                                                        <div><div></div><div></div></div><div><div></div><div></div></div><div><div></div><div></div></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <smart-scroll-bar id="verticalScrollBar" class="smart-timeline-scroll-bar" orientation="vertical" \n                                                right-to-left="[[rightToLeft]]" aria-controls="[[id]]" animation="[[animation]]">\n                                        </smart-scroll-bar>\n                                </smart-splitter-item>\n                            </smart-splitter>\n                        </smart-splitter-item>\n                        <smart-splitter-item id="resourceSplitterItem" class="smart-resource-splitter-item">\n                            <div id="resourceSplitterItemHeader" class="smart-resource-panel-header"></div>\n                            <smart-splitter id="resourceSplitter" class="smart-resource-splitter" auto-fit-mode="end" right-to-left="[[rightToLeft]]" animation="[[animation]]">\n                                <smart-splitter-item id="resourceTreeItem">\n                                    <smart-splitter id="resourceTreeSplitter" class="smart-tree-splitter" auto-fit-mode="end" unfocusable right-to-left="[[rightToLeft]]" animation="[[animation]]">\n                                        <smart-splitter-item id="resourceTreeSplitterItem">\n                                            <div class="smart-resource-tree-header"></div>\n                                            <div class="smart-resource-tree-content">\n                                                <smart-tree id="resourceTree" selection-mode="zeroOrOne" overflow="hidden" toggle-mode="arrow" animation="[[animation]]"\n                                                    aria-controls="[[id]]" right-to-left="[[rightToLeft]]">\n                                                </smart-tree>\n                                            </div>\n                                        </smart-splitter-item>\n                                    </smart-splitter>\n                                </smart-splitter-item>\n                                <smart-splitter-item id="resourceTimelineSplitterItem" class="smart-timeline-splitter-item">\n                                    <div id="resourceTimeline" class="smart-timeline">\n                                        <div class="smart-timeline-container" role="presentation">\n                                            <div id="resourceTimelineHeader" class="smart-timeline-header" role="rowgroup">\n                                                <div class="smart-timeline-view-cells" id="resourceTimelineViewCells" role="row"></div>\n                                            </div>\n                                            <div id="resourceTimelineContent" class="smart-timeline-content" role="rowgroup">\n                                                <div id="resourceTimelineCellsContainer" class="smart-timeline-cells-container" aria-hidden="true"></div>\n                                            </div>\n                                            <div id="resourceTimelineAnimationContainer" class="smart-timeline-animation-container smart-visibility-hidden" aria-hidden="true">\n                                                <div class="smart-timeline-animation-inner-container">\n                                                    <div><div></div><div></div></div><div><div></div><div></div></div><div><div></div><div></div></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                     <smart-scroll-bar id="resourceVerticalScrollBar" class="smart-timeline-scroll-bar smart-resource-scroll-bar" orientation="vertical"\n                                            right-to-left="[[rightToLeft]]" aria-controls="[[id]]" animation="[[animation]]">\n                                     </smart-scroll-bar>\n                                </smart-splitter-item>\n                            </smart-splitter>\n                        </smart-splitter-item>\n                    </smart-splitter>\n                    <smart-scroll-bar wait right-to-left="[[rightToLeft]]" animation="[[animation]]" id="horizontalScrollBar" class="smart-timeline-scroll-bar"></smart-scroll-bar>\n                </div>';
                }
                static get listeners() {
                    return {
                        down: "_downHandler",
                        "document.move": "_documentMoveHandler",
                        "document.up": "_documentUpHandler",
                        "document.dragstart": "_dragStartHandler",
                        "container.wheel": "_mouseWheelandler",
                        "horizontalScrollBar.change": "_horizontalScrollbarHandler",
                        "verticalScrollBar.change": "_verticalScrollbarHandler",
                        "resourceVerticalScrollBar.change": "_verticalScrollbarHandler",
                        "mainSplitter.resizeEnd": "_resizeEventHandler",
                        "mainSplitter.resize": "_resizeEventHandler",
                        move: "_moveHandler",
                        "taskTree.change": "_taskTreeChangeHandler",
                        "taskTree.collapse": "_taskTreeExpandHandler",
                        "taskTree.expand": "_taskTreeExpandHandler",
                        "taskTree.blur": "_treeBlurHandler",
                        "timelineAnimationContainer.transitionend": "_timelineAnimationContainerTransitionendHandler",
                    };
                }
                static get styleUrls() {
                    return ["smart.ganttchart.css"];
                }
                attached() {
                    const e = this;
                    super.attached(),
                        e._scrollView || (e._scrollView = new Smart.Utilities.Scroll(e.$.taskSplitterItem, e.$.horizontalScrollBar, e.$.verticalScrollBar)),
                        !e._resourceScrollView &&
                            e.$.mainSplitter.contains(e.$.resourceSplitter) &&
                            (e._handleResourceTreeEvents(!0), (e._resourceScrollView = new Smart.Utilities.Scroll(e.$.resourceSplitterItem, e.$.horizontalScrollBar, e.$.resourceVerticalScrollBar)));
                    const t = ["taskPopupWindow", "connectionPopupWindow", "confirmPopupWindow"];
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        e.$[s] &&
                            e.$[s].opened &&
                            (e._handleModal(!0),
                            e["$" + s].listen("close", e._popupWindowCloseHandler.bind(e)),
                            e["$" + s].listen("closing", e._popupWindowClosingHandler.bind(e)),
                            e["$" + s].listen("open", e._popupWindowOpenHandler.bind(e)),
                            e["$" + s].listen("click", e._popupWindowClickHandler.bind(e)),
                            e["$" + s].listen("transitionend", e._popupWindowTransitionendHandler.bind(e)),
                            document.body.appendChild(e.$[s]));
                    }
                }
                detached() {
                    const e = this;
                    super.detached(), e._scrollView && (e._scrollView.unlisten(), delete e._scrollView), e._resourceScrollView && (e._handleResourceTreeEvents(), e._resourceScrollView.unlisten(), delete e._resourceScrollView);
                    const t = ["taskPopupWindow", "connectionPopupWindow", "confirmPopupWindow"];
                    e._handleModal();
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        e.$[s] && e.$[s].parentElement && e.$[s].parentElement.removeChild(e.$[s]),
                            e["$" + s] && (e["$" + s].unlisten("open"), e["$" + s].unlisten("close"), e["$" + s].unlisten("closing"), e["$" + s].unlisten("transitionend"));
                    }
                }
                propertyChangedHandler(e, t, i) {
                    const s = this;
                    switch (e) {
                        case "animation":
                            s.$.resourceTree.animation = s.$.taskTree.animation = i;
                            break;
                        case "autoSchedule":
                            i ? s._autoSchedule() : s._autoScheduleRestore();
                            break;
                        case "autoScheduleStrictMode":
                            i && (s._autoSchedule(), s._refreshTimeline(s.view));
                            break;
                        case "dataSource":
                            s._createTasks(), s._createTreeColumns(s.$.taskTreeSplitter), s._createTimeline(), s._createResourceTimeline(), s._setAriaControls(), s._refresh();
                            break;
                        case "disableSelection":
                            i
                                ? ((s.$.taskTree.selectionMode = "none"), (s.$.resourceTree.selectionMode = "none"), s._unselectAll("task"), s._unselectAll("resource"))
                                : ((s.$.taskTree.selectionMode = "zeroOrOne"), (s.$.resourceTree.selectionMode = "zeroOrOne"));
                            break;
                        case "durationUnit":
                            for (let e = 0; e < s._tasks.length; e++) {
                                const t = s._tasks[e];
                                s._validateTaskProperties(t, t.project);
                            }
                            s._createTimelineCells();
                            for (let e = 0; e < s._tasks.length; e++) {
                                const t = s._tasks[e];
                                s._setTimelineTaskBar(t, !0), s._refreshTaskConnections(t);
                            }
                            break;
                        case "headerTemplate":
                            s._handleHeaderTemplate();
                            break;
                        case "inverted":
                            s._handleInverted(), s.scrollLeft && (s.$.timeline.scrollLeft = s._getScrollLeft(s.scrollLeft));
                            break;
                        case "rightToLeft":
                            Array.from(s.querySelectorAll("smart-splitter, smart-tree, smart-scroll-bar")).forEach((t) => (t[e] = i)),
                                s.closeWindow(),
                                s._handleInverted(),
                                s._refreshTimeline(),
                                s._tasks.forEach((e) => s._setTaskBarProgress(e)),
                                (s.$.taskTree.toggleElementPosition = i ? "far" : "near");
                            break;
                        case "dateStart":
                        case "dateEnd":
                        case "nonworkingDays":
                        case "nonworkingHours":
                            s._refreshTimeline();
                            break;
                        case "messages":
                        case "locale":
                        case "dayFormat":
                        case "hourFormat":
                        case "timelineHeaderFormatFunction":
                        case "monthFormat":
                        case "yearFormat":
                            s._refreshHeaderDate(), s._refreshColumnsHeaders();
                            break;
                        case "hideResourcePanel":
                            s._createResourceTimeline(), s.$.taskTree.refresh(), s._refresh();
                            break;
                        case "selectedIndexes":
                            s._applySelection(t);
                            break;
                        case "resourceColumns":
                            s._createTreeColumns(s.$.resourceTreeSplitter), s._highlightAssignedItem("task", s.selectedIndexes[0]);
                            break;
                        case "resourcePanelHeaderTemplate":
                            s._handleHeaderTemplate("resource");
                            break;
                        case "resourceTimelineView":
                        case "resourceTimelineMode":
                        case "resourceTimelineFormatFunction":
                            s.$.mainSplitter.contains(s.$.resourceSplitter) && s._resources.forEach((e) => s._refreshResourceTimelineContent(e));
                            break;
                        case "taskColumns": {
                            const e = s.selectedIndexes.slice(0);
                            s._createTreeColumns(s.$.taskTreeSplitter), s.set("selectedIndexes", e), s._applySelection();
                            break;
                        }
                        case "timelineMin":
                            (s.$.timelineSplitterItem.min = i), s.$.taskTreeSplitter.refresh();
                            break;
                        case "treeMin":
                        case "treeSize": {
                            const t = e.toLowerCase().indexOf("size") > -1 ? "size" : "min";
                            (s.$.treeSplitterItem[t] = i), s.$.taskSplitter.refresh(), s.$.mainSplitter.contains(s.$.resourceSplitter) && ((s.$.resourceTreeItem[t] = i), s.$.resourceTreeItem.refresh());
                            break;
                        }
                        case "taskPanelMin":
                        case "taskPanelSize":
                        case "resourcePanelSize":
                        case "resourcePanelMin": {
                            const t = e.indexOf("Min") > -1 ? "min" : "size",
                                n = e.indexOf("resource") > -1 ? "resource" : "task";
                            s.$.mainSplitter.contains(s.$.resourceSplitter) && ((s.$[`${n}SplitterItem`][t] = i), s.$.taskSplitterItem._setSize("size", s.taskPanelSize), s.refresh());
                            break;
                        }
                        case "unfocusable":
                            s._setFocusable();
                            break;
                        case "view":
                            s._refreshTimeline(t);
                            break;
                        default:
                            super.propertyChangedHandler(e, t, i);
                    }
                }
                _predefPropertyGetter(e) {
                    const t = this;
                    Object.defineProperty(t, e, {
                        get: function () {
                            switch (e) {
                                case "dateStart":
                                case "dateEnd": {
                                    const i = t._timelineCells;
                                    if (i.length) return new Date("dateStart" === e ? i[0].date : i[i.length - 1].date);
                                    break;
                                }
                                case "view":
                                    return t.context === document ? t.properties[e].value : t._view || t.properties[e].value;
                                default:
                                    return t.properties[e].value;
                            }
                        },
                        set(i) {
                            "view" === e && "resource" === i ? (t._view = t._properties[e].value) : delete t._view, t.updateProperty(t, t._properties[e], i);
                        },
                    });
                }
                ready() {
                    (this._customScrollView = !0), super.ready();
                }
                render() {
                    const e = this;
                    e.setAttribute("role", "treegrid"),
                        e._predefPropertyGetter("dateStart"),
                        e._predefPropertyGetter("dateEnd"),
                        e._predefPropertyGetter("view"),
                        e.shadowRoot
                            ? requestAnimationFrame(() => {
                                  (e.$.treeSplitterItem.size = e.treeSize), (e.$.resourceTreeSplitterItem.size = e.treeSize);
                              })
                            : ((e.$.treeSplitterItem.size = e.treeSize), (e.$.resourceTreeSplitterItem.size = e.treeSize)),
                        e.rightToLeft
                            ? ((e.$.taskTree.toggleElementPosition = "far"), (e.$.resourceTree.toggleElementPosition = "far"))
                            : (e.$.verticalScrollBar.removeAttribute("right-to-left"), (e.$.taskTree.toggleElementPosition = "near"), (e.$.resourceTree.toggleElementPosition = "near")),
                        e.$.taskTree.setAttribute("disable-hover", ""),
                        e.$.resourceTree.setAttribute("disable-hover", ""),
                        (e.$.taskTree._ensureVisibleCallback = e._ensureVisible.bind(e)),
                        (e.$.taskTree._hoverViaKeyboardCallback = e._hoverViaKeyboardCallback.bind(e)),
                        (e.$.resourceTree._ensureVisibleCallback = e._ensureVisible.bind(e)),
                        (e.$.resourceTree._hoverViaKeyboardCallback = e._hoverViaKeyboardCallback.bind(e)),
                        (e.$.taskTree._waitAnimation = !0),
                        (e.$.resourceTree._waitAnimation = !0),
                        (e.$.taskTree.$.scrollViewer._scrollView.disableSwipeScroll = !0),
                        (e.$.taskTree.$.scrollViewer.disabled = !0),
                        (e.$.resourceTree.$.scrollViewer._scrollView.disableSwipeScroll = !0),
                        (e.$.resourceTree.$.scrollViewer.disabled = !0),
                        e.disableSelection && ((e.$.taskTree.selectionMode = "none"), (e.$.resourceTree.selectionMode = "none"), e._unselectAll("task"), e._unselectAll("resource")),
                        (e.$.taskSplitterItem.min = e.taskPanelMin),
                        (e.$.resourceSplitterItem.min = e.resourcePanelMin),
                        (e.$.resourceSplitterItem.size = e.resourcePanelSize),
                        e._setScrollBars(),
                        e.$.taskTreeSplitter.refresh(),
                        "resource" === e.view && (e._view = e._properties.view.defaultValue),
                        e._handleHeaderTemplate(),
                        e._handleInverted(!0),
                        e._createTasks(),
                        e._createTimeline(),
                        e._createTreeColumns(e.$.taskTreeSplitter),
                        e._createResourceTimeline(),
                        e._applySelection(),
                        e._setAriaControls(),
                        e._setFocusable(),
                        e.checkLicense(),
                        e.$.taskSplitterItem._setSize("size", e.taskPanelSize),
                        e.shadowRoot && requestAnimationFrame(() => e.refresh()),
                        super.render();
                }
                refresh(e) {
                    const t = this;
                    if (e) return t._refreshTimeline(t.view, !0), t._createTreeColumns(t.$.taskTreeSplitter), t._createResourceTimeline(), t._applySelection(), void t._createResourceTimeline();
                    t._resizeEventHandler();
                }
                clearSelection() {
                    this._unselectAll("task"), this._unselectAll("resource");
                }
                static get requires() {
                    return { "Smart.Splitter": "smart.splitter.js", "Smart.Tree": "smart.tree.js", "Smart.Window": "smart.window.js" };
                }
                ensureVisible(e, t = "task") {
                    const i = this,
                        s = i[`_${t}s`];
                    if (null != e && s.length) {
                        if ("number" == typeof e) e = s[Math.max(0, Math.min(e, s.length - 1))];
                        else if ("string" == typeof e) (e = s.find((t) => t.id && t.id.toString() === e)) || (e = i._getItemByTreeIndex("task", arguments[0]));
                        else {
                            if ("object" != typeof e) return;
                            e = s[i._getItemIndex(e, t)];
                        }
                        e && (i._ensureVisible(e, t), i._scrollTo(e.dateStart, !0));
                    }
                }
                removeAllConnections() {
                    this.isCompleted && ((this.$.timelineConnectionsContainer.innerHTML = ""), this._tasks.map((e) => (e.connections = [])));
                }
                removeConnection() {
                    const e = this;
                    if (!e.isCompleted) return;
                    let t;
                    if (1 === arguments.length) {
                        if ("string" == typeof arguments[0]) {
                            const e = document.getElementById(arguments[0]);
                            e && (t = e.getAttribute("connection-id"));
                        }
                        t || ((t = (arguments[0] + "").split("-")), (t = e._getValidConnectionId(t[0], t[1], t[2], "removeConnection")));
                    } else 3 === arguments.length && (t = e._getValidConnectionId(arguments[0], arguments[1], arguments[2], "removeConnection"));
                    t && e._removeConnection(t);
                }
                removeTaskConnection(e, t) {
                    const i = this;
                    if (i.isCompleted) {
                        if ((e += "").indexOf("-") > -1 && !t) {
                            const i = e.split("-");
                            (t = i[1]), (e = i[0]);
                        }
                        (e = i._getTaskIndexById(e)),
                            (t = i._getTaskIndexById(t)),
                            isNaN(e)
                                ? i.error(i.localize("incorrectArgument", { elementType: i.nodeName.toLowerCase(), methodName: "removeTaskConnection", argumentName: "taskEndIndex" }))
                                : ((i._removeAllTaskConnections = !0), i._removeConnection("" + e + (isNaN(t) ? "" : t)), delete i._removeAllTaskConnections);
                    }
                }
                beginUpdate() {
                    this._isUpdating = { started: !0, type: {} };
                }
                endUpdate() {
                    const e = this;
                    function t() {
                        e._createTreeColumns(e.$.taskTreeSplitter),
                            delete e._hoveredTimelineTask,
                            (e.$.taskTimelineCellsContainer.innerHTML = ""),
                            (e.$.timelineConnectionsContainer.innerHTML = ""),
                            (e.$.timelineTasksContainer.innerHTML = ""),
                            e._createTimeline(),
                            e._setAriaControls(),
                            e._applySelection();
                        const t = e._resources;
                        for (let i = 0; i < t.length; i++) e._refreshTreeColumnsData(t[i], void 0, "resource");
                    }
                    function i() {
                        e._createResourceTimeline();
                        const t = e._tasks;
                        for (let i = 0; i < t.length; i++) e._refreshTreeColumnsData(t[i]);
                    }
                    if (!e._isUpdating) return;
                    const s = 1 === Object.keys(e._isUpdating.type).length ? Object.keys(e._isUpdating.type)[0] : void 0;
                    switch ((delete e._isUpdating, s)) {
                        case "task":
                            t();
                            break;
                        case "resource":
                            i();
                            break;
                        default:
                            t(), i();
                    }
                }
                clearTasks() {
                    const e = this;
                    (e._tasks = []),
                        (e._timelineCells = []),
                        (e._timelineHeaderCells = []),
                        (e.$.timelineContent.style.width = e.$.timelineAnimationContainer.style.width = ""),
                        e.$.container.style.removeProperty("--smart-gantt-chart-task-timeline-content-height"),
                        (e.$.timelineViewDetails.innerHTML = ""),
                        (e.$.timelineViewCells.innerHTML = ""),
                        (e.$.taskTimelineCellsContainer.innerHTML = ""),
                        (e.$.timelineConnectionsContainer.innerHTML = ""),
                        (e.$.timelineTasksContainer.innerHTML = ""),
                        delete e._hoveredTimelineTask;
                    const t = e.$.taskTreeSplitter._items;
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        if (s === e.$.taskTreeSplitterItem) e.$.taskTree.dataSource = [];
                        else {
                            const e = s.getElementsByClassName("smart-task-tree-content")[0];
                            e && (e.innerHTML = "");
                        }
                    }
                    e._refresh();
                }
                clearResources() {
                    const e = this;
                    e._unselectAll("resource");
                    const t = e.$.resourceTreeSplitter._items;
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        if (s === e.$.resourceTreeSplitterItem) e.$.resourceTree.dataSource = [];
                        else {
                            const e = s.getElementsByClassName("smart-resource-tree-content")[0];
                            e && (e.innerHTML = "");
                        }
                    }
                    (e._resources = []),
                        (e.$.resourceTimelineCellsContainer.innerHTML = ""),
                        e._tasks.forEach((t) => {
                            (t.resources = []), e._refreshTreeColumnsData(t, ["resources"]);
                        }),
                        e._refreshTimeline(),
                        e._createResourceTimeline();
                }
                createConnection() {
                    const e = this._tasks;
                    let t;
                    this.isCompleted &&
                        0 !== e.length &&
                        (1 === arguments.length ? (t = (arguments[0] + "").split("-")) : 3 === arguments.length && (t = arguments), (t = this._getValidConnectionId(t[0], t[1], t[2], "createConnection")), t && this._connectTask(t));
                }
                collapse(e) {
                    const t = this;
                    "number" == typeof e && (e = t.$.taskTree.querySelectorAll("smart-tree-item, smart-tree-items-group")[e]),
                        void 0 !== e
                            ? t.$.taskTree.collapseItem(e instanceof Smart.TreeItemsGroup ? e : e.parentItem)
                            : t.error(t.localize("incorrectArgument", { elementType: t.nodeName.toLowerCase(), methodName: "collapse", argumentName: "taskIndex" }));
                }
                expand(e) {
                    const t = this;
                    "number" == typeof e && (e = t.$.taskTree.querySelectorAll("smart-tree-item, smart-tree-items-group")[e]),
                        void 0 !== e
                            ? t.$.taskTree.expandItem(e instanceof Smart.TreeItemsGroup ? e : e.parentItem)
                            : t.error(t.localize("incorrectArgument", { elementType: t.nodeName.toLowerCase(), methodName: "expand", argumentName: "taskIndex" }));
                }
                exportData(e, t) {
                    const i = this;
                    function s(e) {
                        function t(e) {
                            const t = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
                            return isNaN(e) ? "00" : t[(e - (e % 16)) / 16] + t[e % 16];
                        }
                        return (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + t(e[1]) + t(e[2]) + t(e[3]).toUpperCase() : "#ffffff";
                    }
                    function n(e) {
                        let t = {};
                        for (let i = 0; i < o.length; i++) {
                            const s = o[i];
                            e ? ((t[s.value] = e[s.value]), (t._keyDataField = a.indexOf(e)), e.tasks && (t._expanded = !!e.expanded), e.project && (t._parentDataField = a.indexOf(e.project))) : (t[s.value] = s.label);
                        }
                        return t;
                    }
                    if (!Smart.Utilities.DataExporter) return void i.error(i.localize("missingReference", { elementType: i.nodeName.toLowerCase(), methodName: "exportData", file: "smart.export.js" }));
                    try {
                        new JSZip();
                    } catch (e) {
                        return void i.error(i.localize("missingReference", { elementType: i.nodeName.toLowerCase(), methodName: "exportData", file: "jszip.min.js" }));
                    }
                    if ("pdf" === e && !window.pdfMake) return void i.error(i.localize("missingReference", { elementType: i.nodeName.toLowerCase(), methodName: "exportData", file: "pdfMake.min.js" }));
                    const r = i.dataExport.itemType,
                        a = i[`_${r}s`],
                        o = i[`${r}Columns`];
                    if (!a || !a.length || !o.length) return;
                    const l = new Smart.Utilities.DataExporter({
                            collapseChar: i.dataExport.collapseChar,
                            exportHeader: i.dataExport.header,
                            expandChar: i.dataExport.expandChar,
                            hierarchical: !0,
                            pageOrientation: i.dataExport.pageOrientation,
                            style: i.dataExport.style,
                        }),
                        d = n();
                    let c = { columns: [] };
                    for (let e in d) c.columns.push({ label: d[e], dataField: e });
                    if (((l.header = c), !l.style)) {
                        const t = window.getComputedStyle(i),
                            n = window.getComputedStyle(i.$.timelineHeader),
                            a = {
                                height: i.$[`${r}TreeSplitter`].querySelector(`.smart-${r}-tree-header`).offsetHeight + "px",
                                border: "1px solid " + s(n.borderRightColor),
                                fontFamily: "Helvetica",
                                fontSize: n.fontSize,
                                color: s(n.color),
                                backgroundColor: s(n.backgroundColor),
                                fontWeight: "400",
                            },
                            d = { border: "1px solid " + s(t.borderColor), fontFamily: t.fontFamily, fontSize: t.fontSize },
                            m = c.columns,
                            h = i.$[`${r}TreeSplitter`].items,
                            u = (t) => ("pdf" === e ? (100 * t.offsetWidth) / i.$[`${r}TreeSplitter`].offsetWidth + "%" : t.offsetWidth + "px");
                        for (let e = 0; e < m.length; e++) {
                            const t = m[e],
                                i = o.find((e) => e.value === t.dataField),
                                s = h[e].querySelector(".smart-tree-item-label-container") || h[e].querySelector(`.smart-${r}-label-container`);
                            let l;
                            (a[t.dataField] = { textAlign: n.textAlign, width: u(h[e]) }),
                                s && (l = getComputedStyle(s).justifyContent || getComputedStyle(s).textAlign),
                                (d[t.dataField] = { textAlign: ["left", "center", "right", "justify"].indexOf(l) < 0 ? "start" : l, format: i.exportFormat || (t.dataField.indexOf("date") > -1 ? "d" : "") });
                        }
                        l.style = { border: "1px solid " + s(t.borderColor), borderCollapse: "collapse", header: a, columns: d, rows: { height: (parseFloat(t.getPropertyValue("--smart-gantt-chart-task-default-height")) || 0) + "px" } };
                    }
                    let m = [];
                    for (let e = 0; e < a.length; e++) m.push(n(a[e]));
                    return l.exportData(m, e, i.dataExport.fileName, t);
                }
                print() {
                    const e = this.dataExport.fileName;
                    this.dataExport.fileName = null;
                    const t = this.exportData("html"),
                        i = window.open("", "", "width=800,height=500"),
                        s = i.document.open(),
                        n = '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>' + e + "</title></head><body>" + t + "</body></html>";
                    try {
                        s.write(n),
                            s.close(),
                            setTimeout(function () {
                                i.print(), i.close();
                            }, 100);
                    } catch (e) {}
                    this.dataExport.fileName = e;
                }
                getState() {
                    const e = this._getTasksJSON("resource" !== this.view && void 0 !== this._view) || [];
                    return { tasks: JSON.parse(JSON.stringify(e)), selectedIndexes: this.selectedIndexes.slice(0), resources: JSON.parse(JSON.stringify(this._resources.slice(0))) };
                }
                get tasks() {
                    const e = this,
                        t = e._tasks;
                    if (e.isReady && t && t.length)
                        return e._tasks.map(function (i) {
                            return {
                                id: i.id,
                                class: i.class,
                                index: t.indexOf(i),
                                label: i.label,
                                value: i.value,
                                connections: i.connections.slice(0),
                                resources: i.resources,
                                type: i.type,
                                expanded: i.expanded,
                                dateStart: i.dateStart,
                                dateEnd: i.dateEnd,
                                duration: i.duration,
                                synchronized: i.synchronized,
                                disableResize: i.disableResize,
                                disableDrag: i.disableDrag,
                                disableResources: i.disableResources,
                                progress: i.progress,
                                assignedTo: i.project ? { id: i.project.id, index: e._tasks.indexOf(i.project), label: i.project.label } : void 0,
                                path: e._getItemPath(i),
                            };
                        });
                }
                get resources() {
                    const e = this._tasks,
                        t = this._resources;
                    function i(t) {
                        let i = [];
                        if (e) {
                            for (let s = 0; s < e.length; s++) {
                                const n = e[s];
                                !n.disableResources && n.resources.find((e) => e === t.id) && i.push({ id: n.id, index: e.indexOf(n), label: n.label });
                            }
                            return i;
                        }
                    }
                    return this.isReady && t && t.length
                        ? this._resources.map(function (e) {
                              return {
                                  id: e.id,
                                  class: e.class,
                                  assignedTo: i(e),
                                  label: e.label,
                                  value: e.value,
                                  type: e.type,
                                  hidden: e.hidden,
                                  capacity: e.capacity,
                                  maxCapactiy: e.maxCapacity,
                                  minCapacity: e.minCapacity,
                                  progress: e.progress,
                                  workload: e.workload,
                              };
                          })
                        : [];
                }
                getTaskIndex(e) {
                    return this._getItemIndex(e, "task");
                }
                getResourceIndex(e) {
                    return this._getItemIndex(e, "resource");
                }
                _getItemIndex(e, t) {
                    const i = this;
                    if (e instanceof Smart.TreeItem || e instanceof Smart.TreeItemsGroup) return [].slice.call(i.$.taskTree.querySelectorAll("smart-tree-item, smart-tree-items-group")).indexOf(e);
                    t || (t = "task");
                    const s = i[`_${t}s`];
                    if (e instanceof HTMLElement && e.classList.contains("smart-timeline-task")) return s.index(e[`_${t}`]);
                    const n = "resource" === t ? ["id", "label", "value", "progress"] : ["id", "type", "class", "dateStart", "dateEnd", "resources", "connections"];
                    if ("object" == typeof e)
                        for (let t = 0; t < s.length; t++)
                            if (n.every((i) => (Array.isArray(e[i]) ? JSON.stringify(e[i]) === JSON.stringify(s[t][i]) : i.indexOf("date") > -1 ? new Date(e[i]).getTime() === new Date(s[t][i]).getTime() : e[i] === s[t][i])))
                                return s.indexOf(s[t]);
                    return -1;
                }
                getTaskPath(e) {
                    const t = this;
                    if (e instanceof Smart.TreeItem || e instanceof Smart.TreeItemsGroup) return t.$.taskTree.contains(e) ? e.path : -1;
                    const i = t._tasks;
                    return e instanceof HTMLElement && e.classList.contains("smart-timeline-task") && t.$.mainSplitter.contains(e)
                        ? t._getItemPath(e._task)
                        : ("object" == typeof e &&
                              (e = i.find(
                                  (t) =>
                                      (e.id && t.id && t.id === e.id) ||
                                      (e.type === t.type &&
                                          e.label === t.label &&
                                          e.class === t.class &&
                                          e.dateStart &&
                                          new Date(e.dateStart).getTime() === new Date(t.dateStart).getTime() &&
                                          e.dateEnd &&
                                          new Date(e.dateEnd).getTime() === new Date(t.dateEnd).getTime() &&
                                          e.resources.every((e) => t.resources.includes(e)))
                              )),
                          t._getItemPath(e));
                }
                _getItemPath(e, t = "task") {
                    const i = this[`_${t}s`];
                    if (!i || !i.length) return;
                    if (!e) return "";
                    if (!e.project)
                        return i
                            .filter((e) => !e.project)
                            .indexOf(e)
                            .toString();
                    let s = e.project,
                        n = [];
                    for (; s; )
                        n.push(
                            s.tasks
                                .filter((e) => e.project === s)
                                .indexOf(e)
                                .toString()
                        ),
                            (s = (e = s).project);
                    return (
                        n.push(
                            i
                                .filter((e) => e.project === s)
                                .indexOf(e)
                                .toString()
                        ),
                        n.reverse().join(".")
                    );
                }
                clearState() {
                    const e = this;
                    e.id ? window.localStorage.removeItem("smartGanttChart" + e.id) : e.warn(e.localize("noId"));
                }
                loadState(e) {
                    const t = this;
                    if (!e) {
                        if (!t.id) return;
                        e = JSON.parse(window.localStorage.getItem("smartGanttChart" + t.id));
                    }
                    if (!e) return;
                    const i = JSON.parse(JSON.stringify(e.tasks)),
                        s = JSON.parse(JSON.stringify(e.selectedIndexes)),
                        n = JSON.parse(JSON.stringify(e.resources));
                    if (((t._noChangeEvent = !0), Array.isArray(i) && (t._createTasks(i), t.set("dataSource", i)), Array.isArray(n))) {
                        let e = n;
                        for (let i = 0; i < e.length; i++) {
                            const e = n[i];
                            let s = t._resources.find((t) => t.id && t.id.toString() === e.id.toString()) || {};
                            t._setResource(s, e), Object.values(s).length && !t._resources.includes(s) && t._resources.push(s);
                        }
                    }
                    t._createTimeline(), t._createTreeColumns(t.$.taskTreeSplitter), t._createResourceTimeline(), Array.isArray(s) && (t.set("selectedIndexes", s), t._applySelection()), delete t._noChangeEvent;
                }
                saveState() {
                    const e = this;
                    e.id ? window.localStorage.setItem("smartGanttChart" + e.id, JSON.stringify(e.getState())) : e.warn(e.localize("noId"));
                }
                insertTask(e, t) {
                    const i = this;
                    if ((1 === arguments.length && (t = arguments[0]), "object" != typeof t))
                        return void i.error(i.localize("incorrectArgument", { elementType: i.nodeName.toLowerCase(), methodName: "insertTask", argumentName: "newTask" }));
                    if (!i._tasks) return;
                    const s = i._tasks.slice(0);
                    let n, r, a;
                    "string" == typeof e
                        ? ((n = s.find((e) => e.id && e.id.toString() === arguments[0].toString())),
                          n || ((n = i._getItemByTreeIndex("task", e)), n && "project" === n.type && "resource" !== i.view && !i._view && ((a = i._getItemPath(n)), (r = e !== a))),
                          (e = r ? s.indexOf(n.tasks.length ? n.tasks[n.tasks.length - 1] : n) + 1 : s.indexOf(n)))
                        : "number" == typeof e
                        ? (n = s[e])
                        : "object" == typeof e && ((n = s[i._getItemIndex(e)]), (e = s.indexOf(n))),
                        n || (e = i._tasks.length);
                    const o = i._createTasks([t], !0);
                    if (o.length) {
                        if (n && n.project) {
                            o[0].project = n.project;
                            let e = n.project;
                            for (; e; ) {
                                const t = r && n.tasks && n.tasks.length ? n.tasks[n.tasks.length - 1] : n;
                                e.tasks.splice.apply(e.tasks, [e.tasks.indexOf(t) + (r ? 1 : 0), 0].concat(o)), (e = e.project);
                            }
                        }
                        if ((i._handleTreeItemHover(), i._unfocusTreeItems(i.$.taskTreeSplitter), r)) {
                            o[0].project = n;
                            for (let e = 0; e < o.length; e++) n.tasks.push(o[e]);
                        }
                        if ("resource" !== i.view && void 0 !== i._view) {
                            for (let e = 0; e < o.length; e++) i.__tasks.push(o[e]);
                            return (
                                i.__tasks.forEach((e) => e.connections.forEach((e) => (e.target = i.__tasks.indexOf(i._tasks[i._getTaskIndexById(e.target)])))),
                                i._isUpdating ? ((i._isUpdating.type.task = !0), void (i._isUpdating.type.resource = !0)) : (i._refreshTimeline(), void i._refreshTaskResources(n))
                            );
                        }
                        i.$.timelineConnectionsContainer.innerHTML = "";
                        for (let t = 0; t < s.length; t++) {
                            const i = s[t];
                            if (i.connections)
                                for (let t = 0; t < i.connections.length; t++) {
                                    const s = i.connections[t];
                                    "number" == typeof s.target && s.target >= e && (s.target += o.length);
                                }
                        }
                        if ((s.splice.apply(s, [e, 0].concat(o)), (i._tasks = s), i._isUpdating)) return (i._isUpdating.type.task = !0), void (i._isUpdating.type.resource = !0);
                        (i._taskAPIManipulation = !0), i._insertNewTreeItem(e, t, r, "task"), i._autoSchedule(o), (i._noAnimation = !0);
                        for (let t = 0; t < o.length; t++) {
                            const s = o[t];
                            i._createTimelineTask(s, e + t), i._setTaskBarProgress(s), i._setTaskBarLabel(s), i._expandTask(s), i._handleResources(s), i._refreshTaskResources(s);
                        }
                        delete i._noAnimation,
                            "project" === n.type ? i._refreshProject(n) : i._refreshProject(n.project),
                            i._refreshTimeline(i.view),
                            i.$.container.style.setProperty("--smart-gantt-chart-task-timeline-content-height", i.$.taskTimelineCellsContainer.offsetHeight + "px"),
                            i._select("task", o[0]),
                            delete i._taskAPIManipulation,
                            i._refreshTaskResources(i._refreshTaskResources(n));
                    }
                }
                openWindow(e) {
                    const t = this;
                    if (t.disableWindowEditor) return;
                    if ("string" == typeof e) {
                        if (e.indexOf(".") > -1) return void t._openPopupWindow(t.$.timelineTasksContainer.children[t._getTaskIndexById(t._getItemByTreeIndex("task", e))]);
                        if (e.indexOf("-") > -1) {
                            let e = (arguments[0] + "").split("-");
                            if (((e = t._getValidConnectionId(e[0], e[1], e[2], "openEditor")), e)) return void t._openPopupWindow(t.$.timelineConnectionsContainer.querySelector('.smart-task-connection[connection-id^="' + e + '"]'));
                        }
                    }
                    const i = t._getTaskIndexById(e);
                    i > -1 && t._openPopupWindow(t.$.timelineTasksContainer.children[i]);
                }
                closeWindow() {
                    const e = this,
                        t = ["confirm", "task", "connection"];
                    for (let i = 0; i < t.length; i++) {
                        const s = e.$[t[i] + "PopupWindow"];
                        s && (s.close(), delete s._target);
                    }
                }
                addTaskTo(e, t) {
                    const i = this,
                        s = i._tasks;
                    if (s.length) {
                        if ("string" == typeof t) (t = s.find((e) => e.id && e.id.toString() === t.toString())) || (t = i._getItemByTreeIndex("task", t));
                        else {
                            if ("number" != typeof t) return;
                            t = s[t];
                        }
                        t && i.insertTask(i._getItemPath(t) + "." + t.tasks.length, e);
                    }
                }
                updateTask(e, t) {
                    const i = this,
                        s = i._tasks;
                    let n;
                    if (null == e || !s || !s.length) return;
                    if (
                        ("string" == typeof e && ((n = s.find((e) => e.id && e.id.toString() === arguments[0].toString())), n ? (e = s.indexOf(n)) : ((e = i._tasks.indexOf(i._getItemByTreeIndex("task", e))), (n = s[e]))),
                        "number" == typeof e ? (n = s[e] || s.find((t) => t.id && t.id.toString() === e.toString())) : "object" == typeof e && ((n = s[i._getItemIndex(e)]), (e = s.indexOf(n))),
                        "object" != typeof t)
                    )
                        return;
                    if (void 0 === n || e < 0) return;
                    const r = i.$.taskPopupWindow;
                    r && r._target && r._target._task === n && r.close(), (e = Math.max(0, Math.min(s.length - 1, e)));
                    const a = i.$.timelineTasksContainer.children[e];
                    let o = i._getTaskResources(n, !0);
                    for (let r in t) {
                        let l = n[r],
                            d = t[r];
                        if (!((d instanceof Date && d.getTime() === new Date(l).getTime()) || d === l)) {
                            if ((a && "class" === r && (a.classList.remove(n.class), d && a.classList.add(d)), "type" === r && n.type !== t[r] && ["task", "project", "milestone"].indexOf(t[r]) > -1)) {
                                let a;
                                if ("project" === n.type) {
                                    if ("resource" !== i.view && i._view) continue;
                                    const e = n.tasks,
                                        t = s.slice(0);
                                    for (let n = e.length - 1; n > -1; n--) {
                                        const r = t.indexOf(e[n]);
                                        i._isUpdating ||
                                            (i._removeConnectionsToTask(r, t, e),
                                            i._removeConnection(r),
                                            i.$.timelineTasksContainer.removeChild(i.$.timelineTasksContainer.children[r]),
                                            i.$.taskTimelineCellsContainer.removeChild(i.$.taskTimelineCellsContainer.children[r])),
                                            s.splice(r, 1);
                                    }
                                    for (let e = 0; e < s.length; e++) {
                                        const i = s[e];
                                        i.connections && i.connections.forEach((e) => (e.target = s.indexOf(t[e.target])));
                                    }
                                    if (!i._isUpdating && n.project && n.tasks && n.tasks.length) {
                                        let e = n.project;
                                        for (; e; ) e.tasks.splice.apply(e.tasks, [e.tasks.indexOf(n.tasks[0]), n.tasks.length]), i._refreshProject(e), (e = e.project);
                                    }
                                    (a = !0), delete n.tasks;
                                } else "project" === t[r] && (n.tasks || (n.tasks = []), delete n.expanded, (a = !0));
                                if (!i._isUpdating) {
                                    if (a) {
                                        (i._taskAPIManipulation = !0), i._handleTreeItemHover(), i._unfocusTreeItems(i.$.taskTreeSplitter);
                                        const s = i.$.taskTreeSplitter._items;
                                        for (let a = 0; a < s.length; a++) {
                                            const o = s[a];
                                            if (i.$.taskTreeSplitterItem === o) {
                                                const e = i._getItemPath(n);
                                                let t = Object.assign({}, n);
                                                i.$.taskTree.selectedIndexes.includes(e) && (t.selected = !0), i.$.taskTree.removeItem(e), i.$.taskTree.insert(t, e);
                                            } else {
                                                const i = o.getElementsByClassName("smart-task-tree-content")[0];
                                                if (!i) continue;
                                                const s = i.getElementsByClassName("smart-task-item")[e];
                                                if ("project" !== t[r] || s.lastElementChild.classList.contains("smart-task-drop-down")) s.lastElementChild.classList.contains("smart-task-drop-down") && s.lastElementChild.remove();
                                                else {
                                                    const e = document.createElement("div");
                                                    e.classList.add("smart-task-drop-down", "smart-visibility-hidden"), s.appendChild(e);
                                                }
                                            }
                                        }
                                        delete i._taskAPIManipulation;
                                    }
                                    const s = i.$.timelineTasksContainer.children[e];
                                    ("milestone" !== t[r] && "milestone" !== n.type) || ((s.style.width = ""), (s.innerHTML = i._createTaskBar(t[r]).innerHTML)), s.classList.remove(n.type), s.classList.add(t[r]);
                                }
                            }
                            ("project" === n.type && n.synchronized && (r.toLowerCase().indexOf("date") > -1 || r.toLowerCase().indexOf("duration") > -1)) ||
                                ("dateEnd" === r && (n.duration = void 0),
                                (n[r] = d),
                                "resources" === r &&
                                    (i._handleResources(n),
                                    (o = o.concat(i._getTaskResources(n, !0))),
                                    (o = o.filter((e, t) => o.indexOf(e) === t)),
                                    !i._isUpdating && i.$.mainSplitter.contains(i.$.resourceSplitter) && i._highlightAssignedItem("resource", i.$.resourceTree.selectedIndexes[0])),
                                "milestone" !== n.type || ("dateStart" !== r && "dateEnd" !== r) || (n.dateEnd = n.dateStart = d));
                        }
                    }
                    if ((i._validateTaskProperties(n, n.project), "resource" !== i.view && void 0 !== i._view))
                        return (
                            i.__tasks.forEach((e) => e.connections.forEach((e) => (e.target = i.__tasks.indexOf(i._tasks[i._getTaskIndexById(e.target)])))),
                            i._isUpdating ? void (i._isUpdating.type.task = !0) : (i._refreshTimeline(), void i._refreshTaskResources(n, o))
                        );
                    i._isUpdating
                        ? (i._isUpdating.type.task = !0)
                        : (i._setTaskBarProgress(n),
                          i._setTaskBarLabel(n),
                          i._refreshTimeline(i.view),
                          i._refreshTreeColumnsData(n),
                          i._refreshTaskConnections(n),
                          i._autoSchedule(),
                          i.selectedIndexes.includes(e) || ((i._taskAPIManipulation = !0), i._select("task", n), delete i._taskAPIManipulation),
                          i._refreshTaskResources(n, o));
                }
                removeTask(e) {
                    const t = this;
                    let i,
                        s = t._tasks.slice(0);
                    if ("string" == typeof e) {
                        if (((i = s.find((e) => e.id && e.id.toString() === arguments[0].toString())), !i && ((i = t._getItemByTreeIndex("task", e)), e !== t._getItemPath(i)))) return;
                        e = s.indexOf(i);
                    } else if ("number" == typeof e) i = s[e] || s.find((t) => t.id && t.id.toString() === e.toString());
                    else {
                        if ("object" != typeof e) return void t.error(t.localize("incorrectArgument", { elementType: t.nodeName.toLowerCase(), methodName: "insertTask", argumentName: "index" }));
                        i = s[t._getItemIndex(e)];
                    }
                    if (!i) return;
                    e = s.indexOf(i);
                    const n = t.$.taskPopupWindow;
                    if ((n && n._target === i && n.close(), t.selectedIndexes.indexOf(e) > -1 && (t._select("task", i, !0), t._highlightAssignedItem("task")), "resource" !== t.view && void 0 !== t._view)) {
                        s = t.__tasks;
                        const e = function (e) {
                            for (let i = 0; i < s.length; i++) {
                                const n = s[i];
                                if (n.connections)
                                    for (let i = 0; i < n.connections.length; i++) {
                                        let r = n.connections[i];
                                        t._getTaskIndexById(r.target, s) >= e && "number" == typeof r.target && (r.target -= 1);
                                    }
                            }
                        };
                        if ("project" === i.type) {
                            i.tasks.forEach((e) => {
                                t._removeConnectionsToTask(t._tasks.indexOf(e), t._tasks, i.tasks), t._refreshTaskResources(t._tasks.indexOf(e));
                            }),
                                s.forEach((e) => e.connections.forEach((e) => (e.target = s.indexOf(t._tasks[t._getTaskIndexById(e.target)]))));
                            for (let t = 0; t < i.tasks.length; t++) {
                                const n = s.indexOf(i.tasks[t]);
                                e(n), s.splice(n, 1);
                            }
                        } else
                            t._removeConnectionsToTask(t._tasks.indexOf(i), t._tasks, [i]),
                                s.forEach((e) => e.connections.forEach((e) => (e.target = s.indexOf(t._tasks[t._getTaskIndexById(e.target)])))),
                                e(s.indexOf(i)),
                                s.splice(s.indexOf(i), 1);
                        return (
                            i._project && i._project.tasks.splice(i._project.tasks.indexOf(i), 1 + (i.tasks ? i.tasks.length : 0)),
                            t._isUpdating ? ((t._isUpdating.type.task = !0), void (t._isUpdating.type.resource = !0)) : (t._refreshTimeline(), void t._refreshTaskResources(i))
                        );
                    }
                    (t._taskAPIManipulation = !0), t._removeConnection(e), t._removeConnectionsToTask(e, s);
                    let r = 1;
                    if ("project" === i.type) {
                        const e = i.tasks,
                            n = s.slice(0);
                        for (let i = e.length - 1; i > -1; i--) {
                            const a = n.indexOf(e[i]);
                            t._removeConnectionsToTask(a, n, e),
                                t._removeConnection(a),
                                t._refreshTaskResources(n[a]),
                                t.$.timelineTasksContainer.removeChild(t.$.timelineTasksContainer.children[a]),
                                t.$.taskTimelineCellsContainer.removeChild(t.$.taskTimelineCellsContainer.children[a]),
                                s.splice(a, 1),
                                e.splice(a, 1),
                                r++;
                        }
                    }
                    if (i.project) {
                        let e = i.project;
                        for (; e; ) e.tasks.splice.apply(e.tasks, [e.tasks.indexOf(i), 1 + (i.tasks ? i.tasks.length : 0)]), (e = e.project);
                        t._refreshProject(i.project);
                    }
                    s.splice(s.indexOf(i), 1), t.$.timelineTasksContainer.removeChild(t.$.timelineTasksContainer.children[e]), t.$.taskTimelineCellsContainer.removeChild(t.$.taskTimelineCellsContainer.children[e]), t._removeTreeItem(e);
                    for (let i = 0; i < s.length; i++) {
                        const n = s[i];
                        if (n.connections)
                            for (let s = 0; s < n.connections.length; s++) {
                                const a = n.connections[s],
                                    o = t._getTaskIndexById(a.target);
                                if (o >= e) {
                                    const s = t.$.timelineConnectionsContainer,
                                        n = s.querySelectorAll('.smart-task-connection[connection-id^="' + (i >= e ? i + r : i) + "-" + o + '"]');
                                    for (let e = 0; e < n.length; e++) s.removeChild(n[e]);
                                    "number" == typeof a.target && (a.target -= r);
                                }
                            }
                    }
                    if ((t.$.container.style.setProperty("--smart-gantt-chart-task-timeline-content-height", t.$.taskTimelineCellsContainer.offsetHeight + "px"), (t._tasks = s), t._isUpdating))
                        return delete t._taskAPIManipulation, (t._isUpdating.type.task = !0), void (t._isUpdating.type.resource = !0);
                    t._refreshTimeline(t.view), t.$.taskTreeSplitter.refresh();
                    const a = t.$.taskTree.selectedIndexes[0];
                    a && t._select("task", t._getItemByTreeIndex("task", a)), delete t._taskAPIManipulation, t._refreshTaskResources(i);
                }
                _getValidConnectionId(e, t, i, s) {
                    const n = this,
                        r = n._tasks,
                        a = 0 === s.indexOf("_");
                    let o;
                    if (
                        ("string" == typeof e && ((o = n._getTaskIndexById(e)), o >= 0 && (e = o)),
                        "string" == typeof t && ((o = n._getTaskIndexById(t)), o >= 0 && (t = o)),
                        (e = parseInt(e)),
                        (t = parseInt(t)),
                        (i = parseInt(i)),
                        isNaN(e) || isNaN(t) || e === t)
                    )
                        a || n.error(n.localize("incorrectArgument", { elementType: n.nodeName.toLowerCase(), methodName: s, argumentName: "taskIndex" }));
                    else if (e >= r.length || e < 0 || t >= r.length || t < 0) a || n.error(n.localize("outOfBounds", { elementType: n.nodeName.toLowerCase(), methodName: s, argumentName: "taskIndex" }));
                    else {
                        if (!(isNaN(i) || i < 0 || i > 3)) return a ? [e, t, i] : e + "-" + t + "-" + i;
                        a || n.error(n.localize("incorrectArgument", { elementType: n.nodeName.toLowerCase(), methodName: s, argumentName: "connectionType" }));
                    }
                }
                _applySelection(e) {
                    const t = this,
                        i = t.selectedIndexes.slice(0);
                    if (!t._tasks || !t._tasks.length) return void t.set("selectedIndexes", []);
                    let s = [];
                    e && e.length > 0 && (s = e.filter((e) => t._tasks[e])), (t._taskAPIManipulation = !0);
                    for (let e = 0; e < i.length; e++) {
                        let n = i[e];
                        (n = "string" == typeof n && n.indexOf(".") > -1 ? t._getItemByTreeIndex("task", n) : t._tasks[n]), n && s.indexOf(n) < 0 && t._select("task", n);
                    }
                    i.length || t._select("task"), delete t._taskAPIManipulation, e && !t._noChangeEvent && t.$.fireEvent("change", { value: i, oldValue: e });
                }
                _autoSchedule(e) {
                    const t = this,
                        i = t._tasks;
                    if (t.autoSchedule) {
                        e ? Array.isArray(e) || (e = [e]) : (e = i);
                        for (let i = 0; i < e.length; i++) {
                            const s = e[i];
                            ("project" === s.type && s.synchronized) || ((s.minDateStart = s.minDateEnd = void 0), t._autoScheduleTasks(s));
                        }
                        if (t._isUpdateRequired) {
                            t._createTimelineCells();
                            for (let e = 0; e < i.length; e++) {
                                const s = i[e];
                                t._setTimelineTaskBar(s, !0), t._refreshTaskConnections(s), t._refreshTreeColumnsData(s);
                            }
                            delete t._isUpdateRequired;
                        }
                    }
                }
                _autoScheduleTasks(e) {
                    const t = this,
                        i = t._tasks,
                        s = i.indexOf(e),
                        n = e.connections;
                    for (let s = 0; s < n.length; s++) t._isAutoScheduled({ _task: e }, { _task: i[t._getTaskIndexById(n[s].target)] }, !0);
                    const r = t._getConnectedTasks(s);
                    let a, o, l;
                    for (let i = 0; i < r.length; i++) {
                        const n = r[i],
                            d = n.connections.find((e) => t._getTaskIndexById(e.target) === s),
                            c = d.type,
                            m = d.lag || 0;
                        ("project" === n.type && n.synchronized) ||
                            (0 === c || 1 === c
                                ? ((l = new Date((0 === c ? n.dateStart : n.dateEnd).getTime() + m)),
                                  (e.minDateStart = new Date(e.minDateStart ? Math.max(e.minDateStart.getTime(), l.getTime()) : l)),
                                  (o = e.minDateStart.getTime() - e.dateStart.getTime()),
                                  (a = new Date(e.dateEnd.getTime() + (t.autoScheduleStrictMode ? o : Math.max(0, o)))),
                                  a.getTime() !== e.dateEnd.getTime() && ((e.dateEnd = a), (t._isUpdateRequired = !0)),
                                  t.autoScheduleStrictMode && e.minDateStart.getTime() !== e.dateStart.getTime() && ((e.dateStart = e.minDateStart), (t._isUpdateRequired = !0)))
                                : ((l = new Date((2 === c ? n.dateEnd : n.dateStart).getTime() + m)),
                                  (e.minDateEnd = new Date(e.minDateEnd ? Math.min(e.minDateEnd.getTime(), l.getTime()) : l)),
                                  (o = e.minDateEnd.getTime() - e.dateEnd.getTime()),
                                  (a = new Date(e.dateStart.getTime() + (t.autoScheduleStrictMode ? o : Math.max(0, o)))),
                                  a.getTime() !== e.dateStart.getTime() && ((e.dateStart = a), (t._isUpdateRequired = !0)),
                                  t.autoScheduleStrictMode && e.minDateEnd.getTime() !== e.dateEnd.getTime() && ((e.dateEnd = e.minDateEnd), (t._isUpdateRequired = !0))),
                            t._validateTaskProperties(e, e.project));
                    }
                    for (let e = 0; e < n.length; e++) {
                        const s = i[n[e].target];
                        !s || ("project" === s.type && s.synchronized) || ((s.minDateStart = s.minDateEnd = void 0), t._autoScheduleTasks(s));
                    }
                }
                _getConnectedTasks(e) {
                    const t = this._tasks;
                    if (!t || 0 === t.length) return;
                    let i = [];
                    for (let s = 0; s < t.length; s++) {
                        const n = t[s],
                            r = n.connections;
                        if (r) for (let t = 0; t < r.length; t++) r[t].target === e && i.push(n);
                    }
                    return i;
                }
                _autoScheduleRestore(e, t) {
                    const i = this._tasks;
                    e || (e = i), Array.isArray(e) || (e = [e]);
                    for (let s = 0; s < e.length; s++) {
                        const n = e[s];
                        i.indexOf(e[s]) > -1 && (t ? (0 === t || 1 === t ? (n.minDateStart = void 0) : (n.minDateEnd = void 0)) : (n.minDateStart = n.minDateEnd = void 0));
                    }
                }
                _autoScroll(e) {
                    const t = this;
                    function i(i, s) {
                        if (!t._dragDetails) return clearInterval(t._scrollInterval), (t._scrollInterval = void 0), void delete t._autoScrolling;
                        (t._autoScrolling = !0),
                            s
                                ? ((t.scrollTop -= t.autoScrollStep * i), (t._dragDetails.coordinates.y += t.autoScrollStep * i))
                                : ((t.scrollLeft -= (t.rightToLeft ? -1 : 1) * t.autoScrollStep * i), (t._dragDetails.coordinates.x += t.autoScrollStep * i)),
                            t.hasAttribute("dragged") ? t._handleTaskBarDrag(e) : t.hasAttribute("resized") && t._handleTaskBarResize(e);
                    }
                    if (t.disableAutoScroll || !e || (!t.hasAttribute("dragged") && !t.hasAttribute("resized") && !t.hasAttribute("connecting-task"))) return;
                    const s = t.$.timeline.getBoundingClientRect();
                    t._scrollInterval && clearInterval(t._scrollInterval),
                        (t._scrollInterval = setInterval(function () {
                            (t.scrollLeft || t.rightToLeft) && e.clientX <= s.left + 20
                                ? i(1)
                                : t.scrollLeft !== (t.rightToLeft ? 0 : t.scrollWidth) && e.clientX >= s.left + s.width - 20
                                ? i(-1)
                                : t.scrollTop && e.clientY <= s.top + 20
                                ? i(1, !0)
                                : t.scrollTop !== t.scrollHeight && e.clientY >= s.top + s.height - 20
                                ? i(-1, !0)
                                : (clearInterval(t._scrollInterval), (t._scrollInterval = void 0), delete t._autoScrolling);
                        }, 1));
                }
                _checkTaskBarResizability(e) {
                    const t = this;
                    let i = e.originalEvent.target;
                    t.shadowRoot && i === t && (i = e.originalEvent.composedPath()[0]);
                    const s = t.$.timeline;
                    let n,
                        r = i.closest(".smart-timeline-task-cell") || i.closest(".smart-timeline-task");
                    if (t.disabled || t.disableTaskResize || !r || !s.contains(r)) return void s.removeAttribute("task-bar-hovered");
                    if (
                        (r.classList.contains("smart-timeline-task-cell")
                            ? (n = t.$.timelineTasksContainer.children[t._tasks.indexOf(r._task)])
                            : r.classList.contains("smart-timeline-task") && ((n = r), (r = t.$.taskTimelineCellsContainer.children[t._tasks.indexOf(r._task)])),
                        !n || n.classList.contains("milestone") || n._task.synchronized || n._task.disableResize)
                    )
                        return;
                    if (i.classList && i.classList.contains("smart-task-connection-point")) return void s.removeAttribute("task-bar-hovered");
                    const a = e.pageX - window.pageXOffset,
                        o = "visible" === t.resizeHandlesVisibility || Smart.Utilities.Core.isMobile ? 20 : 5,
                        l = n.getBoundingClientRect(),
                        d = r.getBoundingClientRect(),
                        c = Math.min(o, a - d.left),
                        m = Math.min(o, d.left + d.width - a);
                    Math.round(l.left) + c >= a && Math.round(l.left) - c <= a
                        ? s.setAttribute("task-bar-hovered", "left")
                        : Math.round(l.left + l.width) + m >= a && Math.round(l.left + l.width) - m <= a
                        ? s.setAttribute("task-bar-hovered", "right")
                        : s.removeAttribute("task-bar-hovered");
                }
                _onShadowDomLoaded(e, t, i) {
                    requestAnimationFrame(function s() {
                        const n = (e.shadowRoot || e.getRootNode()).querySelectorAll("link");
                        for (let e = 0; e < n.length; e++) if (-1 !== n[e].href.indexOf(t)) return void i();
                        requestAnimationFrame(s);
                    });
                }
                _openPopupWindow(e, t) {
                    const i = this;
                    function s() {
                        function t() {
                            const e = i.getBoundingClientRect();
                            (r.style.left = Math.max(e.left + window.pageXOffset, e.left + window.pageXOffset + e.width / 2 - r.offsetWidth / 2) + "px"),
                                (r.style.top = Math.max(e.top + window.pageYOffset, e.top + window.pageYOffset + e.height / 2 - r.offsetHeight / 2) + "px"),
                                r.opened ? (r.bringToFront(), r._handleActiveState()) : r.open();
                        }
                        if (
                            (i.popupWindowCustomizationFunction && i.popupWindowCustomizationFunction(r, n, e.classList.contains("smart-task-connection") ? e.getAttribute("connection-id") : i._tasks.indexOf(e._task)),
                            i._setPopupWindowTemplate("header", n, e),
                            i._setPopupWindowTemplate("footer", n, e),
                            i._setPopupWindowTemplate("content", n, e),
                            !i._popupWindow[n + "PopupWindow"])
                        ) {
                            const e = i["$" + n + "PopupWindow"];
                            e.unlisten("transitionend"),
                                e.unlisten("open"),
                                e.unlisten("close"),
                                e.unlisten("closing"),
                                e.unlisten("click"),
                                e.listen("transitionend", i._popupWindowTransitionendHandler.bind(i)),
                                e.listen("open", i._popupWindowOpenHandler.bind(i)),
                                e.listen("close", i._popupWindowCloseHandler.bind(i)),
                                e.listen("closing", i._popupWindowClosingHandler.bind(i)),
                                e.listen("click", i._popupWindowClickHandler.bind(i));
                        }
                        r.shadowRoot ? (r.importStyle(Smart.Utilities.Core.getScriptLocation() + Smart.StyleBaseUrl.replace("/scoped/", "/smart.textbox.css")), i._onShadowDomLoaded(r, "smart.window.css", t)) : t();
                        const s = (i.getAttribute("aria-owns") || "") + " " + r.id;
                        i.setAttribute("aria-owns", s.trim()), (i._popupWindow[n + "PopupWindow"] = r);
                    }
                    if (!e) return;
                    const n = t ? "confirm" : e.classList.contains("smart-task-connection") ? "connection" : "task",
                        r = i._createPopupWindow(n);
                    if (!t) {
                        if (i.$.fireEvent("opening", { target: r, type: n }).defaultPrevented) return;
                    }
                    (r._target = e), i._popupWindow || (i._popupWindow = {}), r.parentElement || document.body.appendChild(r), r.isCompleted ? s() : r.whenReady(() => s());
                }
                _createPopupWindow(e) {
                    const t = this,
                        i = e + "PopupWindow";
                    if (t.$[i]) return t.$[i];
                    const s = document.createElement("smart-window");
                    return (
                        s.classList.add("smart-" + e + "-popup-window"),
                        s.classList.add("smart-gantt-chart-popup-window"),
                        s.setAttribute("smart-id", i),
                        (t.$[i] = s),
                        (t["$" + i] = Smart.Utilities.Extend(s)),
                        (s.rightToLeft = t.rightToLeft),
                        (s.theme = t.theme),
                        (s.animation = t.animation),
                        (s.disableSnap = !0),
                        (s.headerButtons = ["close"]),
                        s
                    );
                }
                _popupWindowOpenHandler(e) {
                    const t = this,
                        i = t["$" + e.target.getAttribute("smart-id")];
                    i && (t._handleModal(!0), t.$.fireEvent(e.type, e.detail), i.unlisten("open"));
                }
                _popupWindowClosingHandler(e) {
                    const t = this["$" + e.target.getAttribute("smart-id")];
                    if (!t) return;
                    const i = e.target.classList.contains("smart-confirm-popup-window") ? "confirm" : e.target.classList.contains("smart-connection-popup-window") ? "connection" : "task";
                    this.$.fireEvent(e.type, { target: e.target, type: i }).defaultPrevented ? e.preventDefault() : t.unlisten(e.type);
                }
                _popupWindowCloseHandler(e) {
                    const t = this,
                        i = e.target.getAttribute("smart-id"),
                        s = t["$" + i];
                    if (s) {
                        if ((t._handleModal(), t.$.fireEvent(e.type, e.detail), s.unlisten("close"), s.unlisten("click"), t.hasAttribute("aria-owns"))) {
                            const e = t.getAttribute("aria-owns").replace(t._popupWindow[i].id, "").trim();
                            e ? t.setAttribute("aria-owns", e) : t.removeAttribute("aria-owns");
                        }
                        delete t._popupWindow[i];
                        const n = Object.keys(t._popupWindow);
                        if (1 === n.length && t._popupWindow.confirmPopupWindow) return delete t._popupWindow.confirmPopupWindow._target, void t._popupWindow.confirmPopupWindow.close();
                        "confirmPopupWindow" === i &&
                            n.length &&
                            requestAnimationFrame(() => {
                                const e = t._popupWindow[n[n.length - 1]];
                                e && e.focus();
                            });
                    }
                }
                _popupWindowTransitionendHandler(e) {
                    const t = this,
                        i = e.target;
                    i instanceof Smart.Window && !i.opened && "visibility" === e.propertyName && (t["$" + i.getAttribute("smart-id")].unlisten("transitionend"), i.parentElement && i.parentElement.removeChild(i));
                }
                _handleModal(e) {
                    const t = this;
                    let i = (t.shadowRoot || t).querySelector(".smart-popup-window-modal");
                    e
                        ? (i || ((i = document.createElement("div")), i.classList.add("smart-popup-window-modal")), i.parentElement || (t.$.container.appendChild(i), t.setAttribute("modal", "")))
                        : i && i.parentElement && Object.keys(t._popupWindow).length < 2 && (i.parentElement.removeChild(i), t.removeAttribute("modal"));
                }
                _createTaskEditor(e, t, i) {
                    const s = this,
                        n = e.value,
                        r = t[e.value];
                    let a,
                        o,
                        l = i.find((e) => e._label === n);
                    if (l) (a = l.firstElementChild), (o = l.lastElementChild);
                    else {
                        if (((l = document.createElement("div")), l.classList.add("smart-gantt-chart-popup-window-editor"), (l._label = n), e.customEditor)) return l.appendChild(e.customEditor(n, r)), l;
                        if (
                            ((a = document.createElement("label")),
                            a.id ||
                                (a.id =
                                    "editorLabel" +
                                    Math.floor(65536 * (1 + Math.random()))
                                        .toString(16)
                                        .substring(1)),
                            "number" == typeof r || "string" == typeof r)
                        )
                            (o = document.createElement("input")), o.classList.add("smart-input");
                        else if (r instanceof Date)
                            Smart.DateTimePicker
                                ? ((o = document.createElement("smart-date-time-picker")),
                                  (o.locale = s.locale),
                                  (o.dropDownAppendTo = "body"),
                                  (o.calendarButton = !0),
                                  (o.dropDownDisplayMode = "auto"),
                                  (o.enableMouseWheelAction = !0),
                                  (o.formatString = "yyyy-MMM-dd HH:mm:ss"))
                                : ((o = document.createElement("input")), (o.type = "datetime-local"));
                        else if (Array.isArray(r))
                            if (Smart.DropDownList) (o = document.createElement("smart-drop-down-list")), (o.virtualized = !0), (o.dropDownAppendTo = "body"), (o.selectionMode = "zeroOrMany");
                            else {
                                (o = document.createElement("input")), o.classList.add("smart-input");
                                const e = document.createElement("datalist");
                                (e.id = "resourceList"), o.setAttribute("list", e.id), l.appendChild(e);
                            }
                        o && o.setAttribute("aria-labelledby", a.id);
                    }
                    if (!l.parentElement) return l.appendChild(a), l.appendChild(o), l;
                    s._setPopupWindowEditors(e, t, l);
                }
                _setAriaControls(e) {
                    const t = this;
                    function i(i) {
                        const s = t.$.timelineTasksContainer.children;
                        for (let n = 0; n < i.length; n++) {
                            let r,
                                a = i[n];
                            a.path ? (r = s[t._tasks.indexOf(t._getItemByTreeIndex(e, a.path))]) : ((r = s[t._getTreeItemIndex(a)]), (a = a.parentElement)),
                                r && (a.setAttribute("aria-controls", r.id), r.setAttribute("aria-controls", ((r.getAttribute("aria-controls") || "") + " " + (a.id || "")).trim()));
                        }
                    }
                    e || (e = "task");
                    const s = t.$[`${e}TreeSplitter`]._items;
                    for (let n = 0; n < s.length; n++) {
                        const r = s[n];
                        let a;
                        if (t.$.taskTreeSplitterItem === r) a = t.$.taskTree.querySelectorAll("smart-tree-item, smart-tree-items-group");
                        else {
                            const t = r.querySelector(`.smart-${e}-tree-content`);
                            if (!t) continue;
                            a = t.querySelectorAll(`.smart-${e}-label-container`);
                        }
                        i(a);
                    }
                }
                _setPopupWindowEditors(e, t, i) {
                    const s = this,
                        n = i.firstElementChild,
                        r = i.lastElementChild,
                        a = (e.value + "").split(/(?=[A-Z])/).join(" "),
                        o = t[e.value];
                    if (e.customEditor) e.setCustomEditorValue && e.setCustomEditorValue(i, a, o);
                    else {
                        if (((n.innerHTML = s.localize(e.value) || a.charAt(0).toUpperCase() + a.slice(1)), "number" == typeof o)) r.value = parseFloat(o.toFixed(2));
                        else if ("string" == typeof o) r.value = o;
                        else if (o instanceof Date) r.value = new Date(o);
                        else if (Array.isArray(o)) {
                            const e = s._resources;
                            if (((r.placeholder = s.localize("unassigned")), Smart.DropDownList && r instanceof Smart.DropDownList))
                                (r.dataSource = e.map((e) => ({ label: e.label, value: e.id }))), (r.selectedValues = t.disableResources ? [] : t.resources.map((e) => e.toString()));
                            else {
                                let s = i.querySelector("datalist"),
                                    n = document.createDocumentFragment();
                                s.innerHTML = "";
                                for (let t = 0; t < e.length; t++) {
                                    const i = e[t],
                                        s = document.createElement("option");
                                    (s.value = i.id), (s.innerHTML = i.label), n.appendChild(s);
                                }
                                (r.value = t.resources.toString()), s.appendChild(n);
                            }
                        }
                        ("project" === t.type && t.synchronized && (a.toLowerCase().indexOf("date") > -1 || a.toLowerCase().indexOf("duration") > -1)) || ("resources" === a && t.disableResources) ? (r.disabled = !0) : (r.disabled = !1),
                            (r.rightToLeft = s.rightToLeft),
                            (r.animation = s.animation),
                            (r.theme = s.theme);
                    }
                }
                _setPopupWindowContent(e, t) {
                    const i = this,
                        s = i.$[e + "PopupWindow"],
                        n = t._task,
                        r = [].slice.call(s.getElementsByClassName("smart-gantt-chart-popup-window-editor"));
                    if (s.content && (!s.content.innerHTML || r.length))
                        if ("task" === e && n) {
                            const e = i.taskColumns;
                            for (let t = 0; t < e.length; t++) {
                                const a = e[t];
                                if (!n[a.value]) continue;
                                const o = i._createTaskEditor(a, n, r);
                                o && (s.appendChild(o), i._setPopupWindowEditors(a, n, o));
                            }
                            t.id && s.setAttribute("aria-controls", t.id);
                        } else if ("confirm" === e) {
                            if (((s.innerHTML = '<div class="smart-gantt-chart-popup-window-editor">' + i.localize("confirm", { componentName: "The task" }) + "</div >"), i._popupWindow)) {
                                const e = Object.keys(i._popupWindow);
                                s.setAttribute("aria-controls", i._popupWindow[e[e.length - 1]].id);
                            }
                        } else {
                            const e = t.getAttribute("connection-id").split("-"),
                                n = i._tasks[e[0]],
                                r = i._tasks[e[1]];
                            s.innerHTML = '<div class="smart-gantt-chart-popup-window-editor">' + i.localize("deleteLink") + "<b> " + n.label + " - " + r.label + "?</b></div>";
                        }
                }
                _setPopupWindowTemplate(e, t, i) {
                    const s = this,
                        n = s.$[t + "PopupWindow"];
                    if ("content" !== e) {
                        if ((n[e + "Template"] || (n[e + "Template"] = s._createPopupWindowTemplate(e, t, i)), "header" === e && i && i._task)) {
                            const e = (n.shadowRoot || n).querySelector(".smart-popup-window-label");
                            e && (e.innerHTML = i._task.label);
                        } else if ("footer" === e) {
                            const e = (n.shadowRoot || n).querySelectorAll(".smart-popup-window-button");
                            for (let i = 0; i < e.length; i++) {
                                const n = e[i];
                                (n.innerHTML = "task" === t ? '<span class="smart-icon"></span>' : ""),
                                    (n.theme = s.theme),
                                    (n.rightToLeft = s.rightToLeft),
                                    (n.animation = s.animation),
                                    n.classList.contains("ok")
                                        ? ((n.innerHTML += s.localize("ok")), n.setAttribute("aria-label", "ok"))
                                        : n.classList.contains("cancel")
                                        ? ((n.innerHTML += s.localize("cancel")), n.setAttribute("aria-label", "cancel"))
                                        : n.classList.contains("delete") && ((n.innerHTML += s.localize("delete")), n.setAttribute("aria-label", "delete"));
                                const r = n.querySelector(".smart-ripple");
                                r && r.parentElement.removeChild(r);
                            }
                        }
                    } else s._setPopupWindowContent(t, i);
                }
                _createPopupWindowTemplate(e, t) {
                    const i = this,
                        s = document.createElement("template");
                    if ("footer" === e)
                        switch (t) {
                            case "task":
                                s.innerHTML = `<smart-button class="smart-popup-window-button ok primary" \n                            animation="${i.animation}" theme="${i.theme}" ${
                                    i.rightToLeft ? "right-to-left" : ""
                                }>\n                        </smart-button>\n                        <smart-button class="smart-popup-window-button cancel" \n                            animation="${i.animation}" theme="${i.theme}" ${
                                    i.rightToLeft ? "right-to-left" : ""
                                }>\n                        </smart-button>\n                        <smart-button class="smart-popup-window-button delete secondary"  \n                            animation="${i.animation}" theme="${
                                    i.theme
                                }" ${i.rightToLeft ? "right-to-left" : ""}>\n                        </smart-button>`;
                                break;
                            case "connection":
                            case "confirm":
                                s.innerHTML = `<smart-button class="smart-popup-window-button ok primary"  \n                            animation="${i.animation}" theme="${i.theme}" ${
                                    i.rightToLeft ? "right-to-left" : ""
                                }>\n                        </smart-button>\n                    <smart-button class="smart-popup-window-button cancel"\n                        animation="${i.animation}" theme="${i.theme}" ${
                                    i.rightToLeft ? "right-to-left" : ""
                                }>\n                    </smart-button>`;
                        }
                    else "header" !== e || ("task" !== t && "confirm" !== t) || (s.innerHTML = '<span class="smart-popup-window-label"></span>');
                    return s;
                }
                
                _popupWindowClickHandler(e) {
                    const t = this;
                    let i = (e.originalEvent || e).target;
                    i.shadowRoot && (i = (e.originalEvent || e).composedPath()[0]);
                    const s = i.closest("smart-window") || (i.getRootNode() && i.getRootNode().host ? i.getRootNode().host : void 0),
                        n = s._target;
                    if (i.closest(".smart-popup-window-button.cancel"))
                        return t._popupWindow && t._popupWindow.confirmPopupWindow && s !== t._popupWindow.confirmPopupWindow && t._popupWindow.confirmPopupWindow.close(), s.close(), void delete s._target;
                    if (i.closest(".smart-popup-window-button.ok")) {
                        if (s === t.$.connectionPopupWindow && n.classList.contains("smart-task-connection")) t._removeConnection(n);
                        else if (s === t.$.confirmPopupWindow)
                            void 0 !== n._task._resourceId ? t.removeResource(n._task._resourceId) : t.removeTask(t._tasks.indexOf(n._task)), s.close(), t.$.taskPopupWindow && t.$.taskPopupWindow.close(), delete s._target;
                        else {
                            const e = (s.shadowRoot || s).querySelectorAll(".smart-gantt-chart-popup-window-editor");
                            let i = {};
                            for (let s = 0; s < e.length; s++) {
                                const n = e[s]._label,
                                    r = t.taskColumns.find((e) => e.value === n);
                                if (r.customEditor) i[n] = r.getCustomEditorValue(e[s]);
                                else {
                                    const t = e[s].lastElementChild;
                                    let r;
                                    (r =
                                        Smart.DateTimePicker && t instanceof Smart.DateTimePicker
                                            ? t.value.toDate()
                                            : t instanceof HTMLInputElement && "datetime-local" === t.type
                                            ? new Date(t.value)
                                            : Smart.DropDownList && t instanceof Smart.DropDownList
                                            ? t.selectedValues.slice(0)
                                            : t.hasAttribute("list")
                                            ? t.value.split(",").map((e) => e.trim())
                                            : t.value),
                                        r instanceof Date && isNaN(r.getTime()) && (r = void 0),
                                        null != r && (i[n] = r);
                                }
                            }
                            void 0 !== n._task._resourceId ? t.updateResource(n._task._resourceId, i) : t.updateTask(t._tasks.indexOf(n._task), i);
                        }
                        return t._popupWindow && t._popupWindow.confirmPopupWindow && s !== t._popupWindow.confirmPopupWindow && t._popupWindow.confirmPopupWindow.close(), s.close(), void delete s._target;
                    }
                    i.closest(".smart-popup-window-button.delete") && t._openPopupWindow(s._target, !0);
                }
                _createTasks(e, t) {
                    const i = this;
                    t || i.clearTasks();
                    let s = [];
                    if (
                        ((function e(t, n) {
                            let r = [];
                            if (0 !== t.length) {
                                for (let a = 0; a < t.length; a++) {
                                    let o = t[a];
                                    "object" == typeof o &&
                                        ((o = i._validateTaskProperties(o, n)),
                                        o &&
                                            ((o.project = n),
                                            o.tasks instanceof Array &&
                                                o.tasks.length > 0 &&
                                                (o.synchronized && ((o.dateStart = o.minDateStart = o.maxDateStart = void 0), (o.dateEnd = o.minDateEnd = o.maxDateEnd = void 0)),
                                                (o.type = "project"),
                                                (o.tasks = e(o.tasks, o)),
                                                0 === o.tasks.length && delete o.tasks),
                                            (!o.type || ["project", "task", "milestone"].indexOf(o.type) < 0) && (o.type = "task"),
                                            n && "project" === o.type && o.tasks.length > 0
                                                ? (r.push(o), (r = r.concat(o.tasks)))
                                                : (n || (o.dateStart && o.dateEnd && !isNaN(o.dateStart.getTime()) && !isNaN(o.dateEnd.getTime()) && s.push(o), o.tasks && (s = s.concat(o.tasks))), r.push(o))));
                                }
                                return r;
                            }
                        })(e || i.dataSource),
                        t)
                    )
                        return s.slice(0);
                    (i._tasks = s.slice(0)), i._handleResources();
                }
                _createTimeline() {
                    this._tasks && 0 !== this._tasks.length && (delete this.__tasks, this._autoSchedule(), this._createTimelineCells(), this._prepareViewTasks(!0), this._resetTimeline(), this._insertTimelineTasks(this._tasks));
                }
                _insertNewTreeItem() {
                    const e = this,
                        [t, i, s, n] = [...arguments],
                        r = e.$[`${n}TreeSplitter`]._items,
                        a = e.$[`${n}Tree`];
                    for (let o = 0; o < r.length; o++) {
                        const l = r[o];
                        if (l.contains(a)) s ? a.insert(i, e._getItemPath(i, n)) : a.insert(i, "number" == typeof t ? a.querySelectorAll("smart-tree-item, smart-tree-items-group")[t] : t);
                        else {
                            const r = l.getElementsByClassName(`smart-${n}-tree-content`)[0],
                                a = e[`${n}Columns`][o];
                            if (!r || !a || !a.value) continue;
                            let d;
                            if (s) {
                                (d = r.getElementsByClassName(`smart-${n}-item`)[t]), d.lastElementChild.appendChild(e._createTreeItemContainers([i], a, n));
                                continue;
                            }
                            (d = r.getElementsByClassName(`smart-${n}-item`)[t]), d ? d.parentElement.insertBefore(e._createTreeItemContainers([i], a, n), d) : r.appendChild(e._createTreeItemContainers([i], a, n));
                        }
                    }
                }
                _insertTimelineTasks(e, t, i) {
                    const s = this,
                        n = function (e) {
                            let t = e.project;
                            for (; t; ) {
                                if (!t.expanded) return !1;
                                t = t.project;
                            }
                            return !0;
                        };
                    let r = {};
                    for (let a = 0; a < e.length; a++) {
                        const o = e[a],
                            l = o.connections;
                        if ((s._createTimelineTask(o, t ? t + a : void 0), s._setTimelineTaskBar(o), s._setTaskBarProgress(o), s._setTaskBarLabel(o), !i && (s._expandTask(o), n(o)))) {
                            for (let t = 0; t < l.length; t++) {
                                let i = l[t].target;
                                if ("string" == typeof i) {
                                    let e = s._getTaskIndexById(i);
                                    i = void 0 !== e ? e : parseInt(i);
                                }
                                if (null == i || isNaN(i) || i < 0 || i >= e.length || i === a) {
                                    l.splice(l.indexOf(l[t]), 1);
                                    continue;
                                }
                                const n = a + "-" + i + "-" + l[t].type;
                                i > a ? (r[i] || (r[i] = []), r[i].indexOf(n) < 0 && r[i].push(n)) : s._connectTask(n);
                            }
                            if (r[a]) {
                                for (let e = 0; e < r[a].length; e++) s._connectTask(r[a][e]);
                                delete r[a];
                            }
                        }
                    }
                    s._refresh(),
                        s.$.timelineViewCells.setAttribute("no-transition", ""),
                        s.$.container.style.setProperty("--smart-gantt-chart-task-timeline-content-height", s.$.taskTimelineCellsContainer.offsetHeight + "px"),
                        requestAnimationFrame(() => s.$.timelineViewCells.removeAttribute("no-transition"));
                }
                _ensureVisible(e, t) {
                    const i = this;
                    if (i._isEnsureVisibleCalled) return void delete i._isEnsureVisibleCalled;
                    if (null == e) return;
                    const s = i[`_${t}s`];
                    let n, r, a, o, l, d, c;
                    if (e instanceof HTMLElement) (n = e.menu || e.closest("smart-tree")), (a = e);
                    else if (!s || !s.length) return;
                    if ((n || (n = i.$[`${t}Tree`]), s && (r = s.indexOf(e)), n)) {
                        const t = Array.from(n.querySelectorAll("smart-tree-item, smart-tree-items-group"));
                        t.length && ("number" == typeof e && (a = t[Math.min(Math.max(0, e), t.length - 1)]), a || (a = "object" == typeof e ? t[r] : e), (i._isEnsureVisibleCalled = !0), n.ensureVisible(a), r || (r = t.indexOf(a))),
                            delete i._isEnsureVisibleCalled;
                    }
                    n === i.$.taskTree
                        ? (([d, l] = [i, i.$.timelineContent]), ([o, c] = [i.$.taskTimelineCellsContainer, "scrollTop"]))
                        : (([d, l] = [i.$.resourceVerticalScrollBar, i.$.resourceTimelineContent]), ([o, c] = [i.$.resourceTimelineCellsContainer, "value"]));
                    const m = o.children[r];
                    m && (m.offsetTop + m.offsetHeight > d[c] + l.offsetHeight ? (d[c] = Math.max(0, m.offsetTop + m.offsetHeight - l.offsetHeight)) : m.offsetTop < d[c] && (d[c] = Math.max(0, m.offsetTop)), (l.scrollTop = d[c]));
                }
                _expandTask(e, t) {
                    const i = this;
                    if (!e) return !0;
                    const s = "project" === e.type ? e : e.project;
                    return (
                        !(s && s.tasks && s.tasks.length) ||
                        ((i.$.timelineContent.style.minHeight = ""),
                        (i.$.timelineContent.style.maxHeight = ""),
                        void 0 !== t
                            ? i._isTaskExpanded(s)
                                ? void i._animateTimelineExpanding(s, t)
                                : (i._handleTaskItemExpanding(s, t), void (s.expanded = t))
                            : !(!(t = s.expanded) || t !== s.expanded) || (i._handleExpanding(s, t), s.expanded))
                    );
                }
                _handleExpanding(e, t) {
                    const i = this,
                        s = i._tasks,
                        n = i.$.timelineConnectionsContainer,
                        r = [].slice.call(n.children),
                        a = i.$.taskTimelineCellsContainer.children,
                        o = i.$.timelineTasksContainer.children,
                        l = e.tasks,
                        d = parseFloat(window.getComputedStyle(i).getPropertyValue("--smart-gantt-chart-task-default-height")) || 0;
                    let c = i.$.taskTimelineCellsContainer.offsetHeight,
                        m = 0;
                    i._handleTaskItemExpanding(e, t);
                    for (let h = 0; h < l.length; h++) {
                        m = s.indexOf(l[h]);
                        const u = o[m],
                            f = a[m];
                        if (u) {
                            for (let e = 0; e < r.length; e++) {
                                const t = r[e],
                                    i = t.getAttribute("connection-id").split("-");
                                (parseInt(i[1]) !== m && parseInt(i[0]) !== m) || !t.parentElement || n.removeChild(t);
                            }
                            if (t) {
                                if (!u.classList.contains("smart-visibility-hidden")) continue;
                                const t = u._task.project;
                                if (t && t !== e && !i._isTaskExpanded(u._task, e)) continue;
                                u.classList.remove("smart-visibility-hidden"),
                                    f.classList.remove("smart-visibility-hidden"),
                                    (c += d),
                                    i.$.container.style.setProperty("--smart-gantt-chart-task-timeline-content-height", c + "px"),
                                    i._refreshTaskConnections(u);
                            } else {
                                if (u.classList.contains("smart-visibility-hidden")) continue;
                                u.classList.add("smart-visibility-hidden"), f.classList.add("smart-visibility-hidden"), (c -= d), i.$.container.style.setProperty("--smart-gantt-chart-task-timeline-content-height", c + "px");
                            }
                        }
                    }
                    for (let t = s.indexOf(e) + 1; t < o.length; t++) {
                        const e = o[t];
                        (e.style.top = a[t].offsetTop + "px"), i._refreshTaskConnections(e);
                    }
                    (e.expanded = t), i._refresh();
                }
                _handleTaskItemExpanding(e, t) {
                    const i = this,
                        s = i._tasks.indexOf(e),
                        n = i.$.taskTreeSplitter._items,
                        r = i._isTaskExpanded(e);
                    function a(e) {
                        "visibility" !== e.propertyName && ((this.style.height = ""), this.removeEventListener("transitionend", a));
                    }
                    for (let e = 0; e < n.length; e++) {
                        if (n[e] === i.$.taskTreeSplitterItem) continue;
                        const o = n[e].getElementsByClassName("smart-task-item");
                        if (!o.length || !o[s]) continue;
                        const l = o[s].lastElementChild;
                        !i._noAnimation && i.hasAnimation && r
                            ? requestAnimationFrame(function () {
                                  let e = 0;
                                  for (let t = 0; t < l.children.length; t++) e += l.children[t].offsetHeight;
                                  (l.style.height = e + "px"),
                                      l.addEventListener("transitionend", a),
                                      t
                                          ? l.classList.remove("smart-visibility-hidden")
                                          : (l.classList.add("smart-visibility-hidden"),
                                            requestAnimationFrame(function () {
                                                l.style.height = "0";
                                            }));
                              })
                            : t
                            ? l.classList.remove("smart-visibility-hidden")
                            : l.classList.add("smart-visibility-hidden");
                    }
                }
                _isTaskExpanded(e, t) {
                    if (!e) return;
                    let i,
                        s = e.project;
                    if (!s) return !0;
                    for (; s; ) {
                        if (((i = s.expanded), !i)) return;
                        if (((s = s.project), s === t)) break;
                    }
                    return i;
                }
                _hoverViaKeyboardCallback(e) {
                    const t = this;
                    if ((t._unfocusTreeItems(), !e)) return;
                    const i = e.menu || e.closest("smart-splitter");
                    let s, n, r, a;
                    i === t.$.taskTree
                        ? (([s, n] = [t.$.taskTimelineCellsContainer, t.$.timelineAnimationContainer]), ([r, a] = [t.$.taskTreeSplitter, "task"]))
                        : (([s, n] = [t.$.resourceTimelineCellsContainer, t.$.resourceTimelineAnimationContainer]), ([r, a] = [t.$.resourceTreeSplitter, "resource"]));
                    const o = Array.from(i.querySelectorAll("smart-tree-item, smart-tree-items-group")).indexOf(e),
                        l = s.children[o];
                    if ((l && l.setAttribute("focus", ""), !n.classList.contains("smart-visibility-hidden") && "task" === a)) {
                        const e = n.getElementsByClassName(`smart-timeline-${a}`);
                        for (let i = 0; i < e.length; i++) {
                            const s = e[i];
                            if (t._tasks.indexOf(s._task) === o) {
                                s.setAttribute("focus", "");
                                break;
                            }
                        }
                    }
                    const d = r._items;
                    for (let e = 0; e < d.length; e++) {
                        const i = d[e];
                        if (i !== t.$[a + "TreeSplitterItem"]) {
                            const e = i.getElementsByClassName(`smart-${a}-label-container`)[o];
                            e && e.setAttribute("focus", "");
                        }
                    }
                    t._focusedItem = o;
                }
                _unfocusTreeItems(e) {
                    const t = this;
                    function i(e) {
                        if (!t.$.mainSplitter.contains(e)) return;
                        const i = e._items,
                            [s, n] = e === t.$.taskTreeSplitter ? ["task", t.$.taskTimelineCellsContainer] : ["resource", t.$.resourceTimelineCellsContainer];
                        for (let e = 0; e < i.length; e++) {
                            const n = i[e];
                            if (n !== t.$[s + "TreeSplitterItem"]) {
                                const e = n.getElementsByClassName(`smart-${s}-label-container`);
                                for (let t = 0; t < e.length; t++) e[t].removeAttribute("focus");
                            }
                        }
                        const r = n.children;
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e];
                            t.hasAttribute("focus") && t.removeAttribute("focus");
                        }
                        "task" === s && delete t._focusedItem;
                    }
                    e ? i(e) : (i(t.$.taskTreeSplitter), i(t.$.resourceTreeSplitter));
                }
                _emptyAnimationContainer() {
                    const e = this.$.timelineAnimationContainer.firstElementChild.children;
                    for (let t = 0; t < e.length; t++) (e[t].firstElementChild.innerHTML = ""), (e[t].lastElementChild.innerHTML = "");
                }
                _animateTimelineExpanding(e, t) {
                    const i = this,
                        s = i.$.timelineAnimationContainer,
                        n = s.firstElementChild,
                        r = n.children[0],
                        a = n.children[1],
                        o = n.children[2];
                    if ("none" === i.animation) return s.classList.add("smart-visibility-hidden"), i._emptyAnimationContainer(), void i._handleExpanding(e, t);
                    const l = i._tasks,
                        d = i.$.timelineTasksContainer.children,
                        c = i.$.timelineConnectionsContainer.children,
                        m = function (t) {
                            let i = t.project;
                            for (; i; ) {
                                if (i === e) return !0;
                                i = i.project;
                            }
                        },
                        h = e.tasks.filter((t) => t.project === e || i._isTaskExpanded(t, e));
                    let u = l.indexOf(e);
                    const f = d[u].offsetHeight,
                        g = i.$.timelineContent.offsetTop;
                    i._emptyAnimationContainer(), t ? a.classList.add("animate") : a.classList.remove("animate");
                    let p,
                        _ = [],
                        T = [],
                        k = [],
                        y = 0;
                    for (let t = 0; t < d.length; t++) {
                        const s = d[t],
                            n = s.cloneNode(!0),
                            c = l.indexOf(s._task),
                            h = s._task.project;
                        (h && h !== e && !i._isTaskExpanded(s._task, e)) ||
                            ((n.style["margin" + (i.rightToLeft ? "Right" : "Left")] = n.style[i.rightToLeft ? "right" : "left"]),
                            n.classList.remove("smart-visibility-hidden"),
                            c <= u ? (r.lastElementChild.appendChild(n), _.push(c)) : m(s._task) ? (a.lastElementChild.appendChild(n), T.push(c), (y += n.offsetHeight)) : (o.lastElementChild.appendChild(n), k.push(c)),
                            void 0 !== i._focusedItem && i._focusedItem === u && c === u && n.setAttribute("focus", ""));
                    }
                    (a.style.transition = "none"), t && i._handleExpanding(e, t);
                    for (let e = 0; e < c.length; e++) {
                        const t = c[e].cloneNode(),
                            i = t.getAttribute("connection-id").split("-");
                        _.indexOf(parseInt(i[0])) > -1 && _.indexOf(parseInt(i[1])) > -1
                            ? r.firstElementChild.appendChild(t)
                            : T.indexOf(parseInt(i[0])) > -1 && T.indexOf(parseInt(i[1])) > -1
                            ? a.firstElementChild.appendChild(t)
                            : k.indexOf(parseInt(i[0])) > -1 && k.indexOf(parseInt(i[1])) > -1 && o.firstElementChild.appendChild(t);
                    }
                    (a.firstElementChild.style.transform = "translateY(-" + r.offsetHeight + "px)"),
                        (o.firstElementChild.style.transform = "translateY(-" + (y + r.offsetHeight) + "px)"),
                        t || i._handleExpanding(e, t),
                        (i.$.timelineContent._scrollTop = i.$.timelineContent.scrollTop),
                        (p = i.$.timelineContent.offsetHeight),
                        p !== n.offsetHeight && (i.$.timelineContent.style[(t ? "max" : "min") + "Height"] = n.offsetHeight + "px"),
                        (s.style.top = g + "px"),
                        (n.style.top = -i.scrollTop + "px"),
                        s.classList.remove("smart-visibility-hidden"),
                        i.$.timelineContent.classList.add("smart-visibility-hidden"),
                        requestAnimationFrame(function () {
                            (a.style.height = h.length * f + "px"),
                                (a.style.transition = ""),
                                t
                                    ? (a.classList.remove("animate"), (i.$.timelineContent.style.maxHeight = p + "px"))
                                    : (a.classList.add("animate"),
                                      requestAnimationFrame(function () {
                                          (a.style.height = "0"), (i.$.timelineContent.style.minHeight = p + "px");
                                      }));
                        });
                }
                _timelineAnimationContainerTransitionendHandler(e) {
                    const t = this;
                    if ("height" === e.propertyName) {
                        const e = t.$.timelineAnimationContainer;
                        e.classList.add("smart-visibility-hidden"),
                            t.$.timelineContent.classList.remove("smart-visibility-hidden"),
                            t._emptyAnimationContainer(),
                            (t.$.timelineContent.style.minHeight = ""),
                            (t.$.timelineContent.style.maxHeight = ""),
                            t.$.timelineContent._scrollTop && ((t.$.timelineContent.scrollTop = t.$.timelineContent._scrollTop), delete t.$.timelineContent._scrollTop),
                            (e.firstElementChild.children[1].style.height = "");
                    }
                }
                _getItemByTreeIndex(e, t, i) {
                    if (!t) return;
                    const s = t.split(".");
                    let n = this[`_${e}s`].filter((e) => !e.hidden && !e.project)[t.split(".")[0]];
                    if (n) {
                        if (!n[`${e}s`] || !n[`${e}s`].length) return i ? null : n;
                        for (let t = 1; t < s.length; t++) {
                            const r = n[`${e}s`].filter((e) => !e.hidden && e.project === n)[s[t]];
                            if (!r || (i && "project" !== r.type)) break;
                            if (((n = r), "project" !== n.type)) break;
                        }
                        return i ? (n && "project" === n.type ? n : void 0) : n;
                    }
                }
                _treeBlurHandler(e) {
                    this._unfocusTreeItems(e.target === this.$.taskTree ? this.$.taskTreeSplitter : this.$.resourceTreeSplitter);
                }
                _taskTreeChangeHandler(e) {
                    const t = e.target === this.$.taskTree ? "task" : "resource";
                    e.stopPropagation(),
                        this[`_${t}APIManipulation`] ||
                            (this._itemClickedDetails && this._itemClickedDetails.type === t) ||
                            this._dragDetails ||
                            ((this[`_${t}TreeChangeEventFired`] = !0), this._select(t, this._getItemByTreeIndex(t, e.detail.selectedIndexes[0])), delete this[`_${t}TreeChangeEventFired`]);
                }
                _taskTreeExpandHandler(e) {
                    const t = this,
                        i = e.target === t.$.taskTree ? "task" : "resource";
                    if (!t[`${i}s`] || !t[`${i}s`].length) return;
                    const s = e.detail.item.path,
                        n = t._getItemByTreeIndex(i, s, !0);
                    n && ("collapse" === e.type ? t._expandTask(n, !1) : t._expandTask(n, !0));
                }
                _resetTimeline() {
                    this.$.taskTimelineCellsContainer.innerHTML = "";
                    const e = this.$.timelineTasksContainer.children;
                    for (let t = 0; t < e.length; t++) delete e[t]._cellStart, delete e[t]._cellEnd;
                }
                _refreshTimeline(e, t) {
                    const i = this;
                    e || (e = i.view);
                    const s = i._getDateFromCell(i.scrollLeft, i._getFirstCellObjInView(), e),
                        n = i._view || void 0 !== i.__tasks;
                    if ((t || i._prepareViewTasks(), (i.scrollLeft = 0), i._resetTimeline(), i._createTimelineCells(), n))
                        (i.$.timelineTasksContainer.innerHTML = ""), delete i._hoveredTimelineTask, (i.$.timelineConnectionsContainer.innerHTML = ""), i._autoSchedule(), i._insertTimelineTasks(i._tasks);
                    else {
                        const e = i._tasks;
                        for (let t = 0; t < e.length; t++) {
                            const s = e[t],
                                n = s.dateStart,
                                r = s.dateEnd;
                            i._createTimelineTaskCells(s),
                                i._setTimelineTaskBar(s),
                                i._refreshTaskConnections(s),
                                i.selectedIndexes.includes(t) && i.$.taskTimelineCellsContainer.children[t].setAttribute("selected", ""),
                                (n.getTime() === s.dateStart.getTime() && r.getTime() === s.dateEnd.getTime()) || i._refreshTreeColumnsData(s);
                        }
                        i.$.mainSplitter.contains(i.$.resourceSplitter) && i._refreshResourceTimeline(), i._refresh();
                    }
                    i._scrollTo(s);
                }
                _prepareViewTasks(e) {
                    const t = this;
                    function i(e) {
                        for (let t in r) if (r[t].includes(e)) return t;
                        return "";
                    }
                    function s() {
                        const e = t.taskColumns,
                            i = t.$.taskTreeSplitter.items,
                            s = t._getTasksJSON();
                        if (i.length !== e.length) t._createTreeColumns(t.$.taskTreeSplitter);
                        else for (let n = 0; n < e.length; n++) t._createTreeColumnsData(i[n].closest("smart-splitter-item"), e[n], s);
                    }
                    if (!t._view && !t.__tasks) return;
                    if ("resource" !== t.view && !t._view && t.__tasks) {
                        if (t.__tasks) {
                            let e = [];
                            const i = t._tasks;
                            for (let s = 0; s < t.__tasks.length; s++) {
                                const n = t.__tasks[s];
                                (i.includes(n) || n.disableResources) && e.push(n);
                            }
                            for (let s = 0; s < i.length; s++) {
                                const n = i[s];
                                void 0 !== n._resourceId || t.__tasks.includes(n) || e.push(n), n._project ? (n.project = n._project) : delete n.project, delete n._project;
                            }
                            for (let s = 0; s < e.length; s++) {
                                const n = e[s];
                                n.disableResources ||
                                    (e[s].connections = e[s].connections.filter((s) => {
                                        const n = e.indexOf(i[t._getTaskIndexById(s.target)]);
                                        return !(n < 0) && ((s.target = n), !0);
                                    })),
                                    t._refreshProject(e[s].project),
                                    n._connections && (n.connections.push.apply(n.connections, n._connections), delete n._connections);
                            }
                            (t._tasks = e), delete t.__tasks, s();
                        }
                        return;
                    }
                    t.__tasks || (t.__tasks = t._tasks);
                    let n = t.__tasks,
                        r = {},
                        a = [];
                    for (let e = 0; e < n.length; e++) {
                        const s = n[e];
                        s.disableResources ||
                            (s.project && void 0 === s.project._resourceId && (s._project = s.project),
                            s.resources.length
                                ? s.resources.forEach(function (e) {
                                      const n = i(s);
                                      if (t._resources.find((t) => t.id === e + "")) {
                                          let t = e;
                                          n && (r[n].splice(r[n].indexOf(s), 1), (t = []), t.push(n), t.push(e), (t = t.sort().join(","))), r[t] ? r[t].push(s) : (r[t] = [s]);
                                      } else n || (r.unassigned ? r.unassigned.push(s) : (r.unassigned = [s]));
                                  })
                                : r.unassigned
                                ? r.unassigned.push(s)
                                : (r.unassigned = [s]));
                    }
                    let o = Array.from(Object.keys(r));
                    o.sort((e, t) => e.localeCompare(t));
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e];
                        if (!r[i].length) continue;
                        let s;
                        if ("unassigned" !== i) {
                            const e = i.split(",");
                            s = [];
                            for (let i = 0; i < e.length; i++) {
                                const n = t._resources.find((t) => t.id && t.id.toString() === e[i].toString());
                                n && s.push(n.label);
                            }
                            s = s
                                .sort((e, t) => e.localeCompare(t))
                                .join(", ")
                                .trim();
                        }
                        const n = t._createTasks([{ label: s || t.localize("unassigned"), expanded: !0, synchronized: !0, disableResources: !0, type: "project", _resourceId: i }], !0)[0];
                        (n.tasks = r[i]),
                            a.push(n),
                            r[i].forEach((e) => {
                                (e.project = n), a.push(e), t._synchronizeProjectDates(n, e);
                            });
                    }
                    for (let e = 0; e < a.length; e++)
                        a[e].connections = a[e].connections.filter((i) => {
                            const s = t.__tasks[t._getTaskIndexById(i.target)],
                                n = a.indexOf(s);
                            return n < 0 ? (a[e]._connections ? a[e]._connections.push(Object.assing({}, i)) : (a[e]._connections = [Object.assign({}, i)]), !1) : ((i.target = n), !0);
                        });
                    (t._tasks = a), e || s();
                }
                _scrollTo(e, t) {
                    const i = this,
                        s = i._timelineCells;
                    let n;
                    if (void 0 !== e && !isNaN(new Date(e).getTime()))
                        for (let r = 0; r < s.length; r++) {
                            const a = s[r],
                                o = a.date;
                            switch (i.view) {
                                case "year":
                                    if (o.getFullYear() === e.getFullYear() && o.getMonth() === e.getMonth()) {
                                        if (t) {
                                            n = a.left;
                                            break;
                                        }
                                        let i = new Date(e);
                                        i.setMonth(e.getMonth() + 1), i.setDate(0), (i = i.getDate()), (n = a.left + ((e.getDate() - 1) / i) * a.width);
                                    }
                                    break;
                                case "month": {
                                    let i = new Date(o),
                                        s = new Date(o);
                                    i.setDate(i.getDate() - i.getDay()),
                                        s.setDate(s.getDate() + (6 - s.getDay()) + 1),
                                        s.setMilliseconds(s.getMilliseconds() - 1),
                                        e.getTime() >= i.getTime() && e.getTime() <= s.getTime() && (n = a.left + (t || t ? 0 : (e.getDay() / 7) * a.width));
                                    break;
                                }
                                case "week":
                                    o.getFullYear() === e.getFullYear() && o.getMonth() === e.getMonth() && o.getDate() === e.getDate() && (n = a.left + (parseFloat(e.getHours() + "." + e.getMinutes() + e.getSeconds()) / 24) * a.width);
                                    break;
                                case "day":
                                    o.getFullYear() === e.getFullYear() &&
                                        o.getMonth() === e.getMonth() &&
                                        o.getDate() === e.getDate() &&
                                        o.getHours() === e.getHours() &&
                                        (n = a.left + (t ? 0 : (parseFloat(e.getMinutes() + e.getSeconds()) / 60) * a.width));
                            }
                            if (void 0 !== n) return void (i.scrollLeft = n);
                        }
                }
                _updateConnection(e, t) {
                    const i = this;
                    function s(e, i, s) {
                        const r = e.connections;
                        let a;
                        for (let e = 0; e < r.length; e++) {
                            let o = r[e].target;
                            if ("string" == typeof o) {
                                let e = n.indexOf(n.find((e) => e.id === o));
                                e >= 0 && (o = e);
                            }
                            if (o === i) {
                                if (!t && void 0 !== s && r[e].type === s && !a) {
                                    a = !0;
                                    continue;
                                }
                                r.splice(e, 1);
                            }
                        }
                        return a;
                    }
                    e = (e += "").split("-");
                    const n = i._tasks,
                        r = parseInt(e[0]),
                        a = parseInt(e[1]),
                        o = parseInt(e[2]),
                        l = n[r],
                        d = n[a];
                    if (!l) return;
                    if (!d) return (l.connections = []), void (i._removeAllTaskConnections && delete l._connections);
                    if (void 0 === o) return;
                    const c = s(l, a, o);
                    if ((s(n[a], r), t || c)) return;
                    l.connections.push({ target: a, type: o });
                    const m = d.connections.find((e) => i._getTaskIndexById(e.target) === r && e.type === o);
                    m && d.connections.splice(d.connections.indexOf(m), 1);
                }
                _createTimelineCells() {
                    const e = this._tasks,
                        t = this.properties.dateStart.value,
                        i = this.properties.dateEnd.value;
                    let s, n;
                    if ((t && (s = t), i && (n = i), e.length > 0)) {
                        let t = e[0].dateStart,
                            i = e[0].dateEnd;
                        for (let s = 0; s < e.length; s++)
                            e[s].dateStart && e[s].dateEnd && (t || (t = e[s].dateStart), i || (i = e[s].dateEnd), t.getTime() > e[s].dateStart.getTime() && (t = e[s].dateStart), i.getTime() < e[s].dateEnd.getTime() && (i = e[s].dateEnd));
                        (!s || s.getTime() > t.getTime()) && (s = t), (!n || n.getTime() < i.getTime()) && (n = i);
                    }
                    s && n && ((s = this._minMaxDateValidator(s)), (n = this._minMaxDateValidator(n)), this._createTimelineHeader(s, this._getCellsCount(s, n)));
                }
                _getCellsCount(e, t, i) {
                    let s,
                        n,
                        r,
                        a,
                        o,
                        l,
                        d = new Date(e),
                        c = new Date(t);
                    const m = t.getFullYear() - e.getFullYear();
                    if (((n = s = Math.round(m) + 1), "year" === i)) return { year: n };
                    if ((d.setHours(d.getHours(), 0, 0, 0), c.setHours(c.getHours(), 0, 0, 0), (l = Math.floor((t.getTime() - e.getTime()) / 36e5)), l > 0)) {
                        let e = new Date(d);
                        if (((l = 1), d.getFullYear() !== c.getFullYear())) {
                            let t = new Date(d.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
                            for (; e.getTime() !== t.getTime(); ) {
                                const t = e.getTime();
                                e.setHours(e.getHours() + 1), e.getTime() === t && e.setHours(e.getHours() + 2), l++;
                            }
                            const i = c.getFullYear() - t.getFullYear();
                            for (let t = 0; t < i; t++) {
                                const t = e.getFullYear();
                                (l += 24 * ((t % 100 == 0 ? t % 400 == 0 : t % 4 == 0) ? 366 : 365) - 1), e.setFullYear(t + 1);
                            }
                        }
                        for (; e.getTime() !== c.getTime(); ) {
                            const t = e.getTime();
                            e.setHours(e.getHours() + 1), e.getTime() === t && e.setHours(e.getHours() + 2), l++;
                        }
                    }
                    if ("hour" === i) return { hour: l };
                    if ((d.setHours(0, 0, 0, 0), c.setHours(23, 59, 59, 999), (o = s = Math.round((c.getTime() - d.getTime()) / 864e5)), "day" === i)) return { day: o };
                    if ((d.setDate(d.getDate() - d.getDay()), c.setDate(c.getDate() + 6 - c.getDay()), (a = s = Math.round((c.getTime() - d.getTime()) / 6048e5)), "week" === i)) return { week: a };
                    if (
                        ("month" === this.view && (0 !== e.getDay() && (e = new Date(e.setDate(e.getDate() - e.getDay()))), 6 !== t.getDay() && (t = new Date(t.setDate(t.getDate() + 6 - t.getDay())))), e.getFullYear() !== t.getFullYear())
                    ) {
                        s = 12 - e.getMonth();
                        const i = t.getFullYear();
                        for (let n = e.getFullYear() + 1; n <= i; n++) s += n === t.getFullYear() ? t.getMonth() + 1 : 12;
                    } else s = t.getMonth() - e.getMonth() + 1;
                    return (r = Math.ceil(s)), "months" === i ? { month: r } : { year: n, month: r, week: a, day: o, hour: l };
                }
                _createTimelineTask(e, t) {
                    const i = this._createTaskBar(e.type),
                        s = "project" === e.type && e.synchronized;
                    e.disableDrag || (s && !e.dragProject) ? i.setAttribute("disable-drag", "") : i.removeAttribute("disable-drag"),
                        e.disableResize || s ? i.setAttribute("disable-resize", "") : i.removeAttribute("disable-resize"),
                        e.id
                            ? (i.id = e.id)
                            : (i.id =
                                  "ganttTask" +
                                  Math.floor(65536 * (1 + Math.random()))
                                      .toString(16)
                                      .substring(1)),
                        this._createTimelineTaskCells(e, t),
                        (i._task = e),
                        i.classList.add("smart-timeline-task"),
                        e.class && i.classList.add(e.class);
                    const n = (e) => e.getFullYear() + "-" + (e.getMonth() < 10 ? "0" + e.getMonth() : e.getMonth()) + "-" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate());
                    i.setAttribute("aria-label", e.label + " Start date: " + n(e.dateStart) + ", End date: " + n(e.dateEnd)),
                        i.setAttribute("aria-selected", "false"),
                        this.$.timelineTasksContainer.insertBefore(i, this.$.timelineTasksContainer.children[t]);
                }
                _createTimelineTaskCells(e, t) {
                    const i = document.createElement("div");
                    e.project && !this._isTaskExpanded(e) && i.classList.add("smart-visibility-hidden"),
                        (i._task = e),
                        i.classList.add("smart-timeline-task-cell"),
                        this.$.taskTimelineCellsContainer.insertBefore(i, this.$.taskTimelineCellsContainer.children[t]);
                }
                _createCells(e) {
                    let t,
                        i = document.createDocumentFragment();
                    for (let s = 0; s < e; s++) (t = document.createElement("div")), t.classList.add("smart-timeline-view-cell"), t.setAttribute("role", "columnheader"), i.appendChild(t);
                    return i;
                }
                _getTimelineVisibleCellsCount() {
                    const e = this._timelineCells;
                    if (!e) return;
                    const t = this._getFirstCellObjInView(),
                        i = 1 - (t.left + t.width - this.scrollLeft) / e[0].width;
                    return Math.ceil(parseFloat((this.$.timeline.offsetWidth / t.width).toFixed(2)) + i);
                }
                _getHeaderVisibleCellsCount() {
                    if (!this._timelineHeaderCells) return;
                    const e = Math.abs(this.scrollLeft),
                        t = this.$.timeline.parentElement.offsetWidth,
                        i = this._timelineHeaderCells;
                    let s = 0;
                    for (let n = 0; n < i.length; n++) {
                        const r = i[n];
                        r.left + r.width > e && r.left < t + e && s++;
                    }
                    return s;
                }
                _refreshHeaderDate() {
                    const e = this,
                        t = e._getCellsViewType(),
                        i = e.scrollLeft,
                        s = e.$.timelineViewCells.children,
                        n = e._timelineCells;
                    let r;
                    e._refreshHeaderDetailsDate();
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e];
                        if (i <= t.left + t.width) {
                            r = e;
                            break;
                        }
                    }
                    for (let i = 0; i < s.length; i++) {
                        const a = s[i],
                            o = n[r];
                        if (!o) break;
                        const l = o.date;
                        (a._date = new Date(l)),
                            (a.innerHTML = `<div>${e._getDateString(new Date(l), t)}</div>`),
                            (a.style.width = o.width + "px"),
                            (a.style[e.rightToLeft ? "right" : "left"] = o.left + "px"),
                            o.weekend ? a.setAttribute("weekend", "") : a.removeAttribute("weekend"),
                            o.nonworking ? a.setAttribute("nonworking", "") : a.removeAttribute("nonworking"),
                            r++;
                    }
                }
                _getDateString(e, t, i) {
                    const s = this,
                        n = ["2-digit", "numeric"][s.dayFormat] || "numeric";
                    return s.timelineHeaderFormatFunction
                        ? s.timelineHeaderFormatFunction(e, t, i)
                        : "year" === t
                        ? e.toLocaleDateString(s.locale, { year: s.yearFormat })
                        : "month" === t
                        ? e.toLocaleDateString(s.locale, { month: s.monthFormat })
                        : "week" === t
                        ? "numeric" !== s.weekFormat && i
                            ? e.toLocaleDateString(s.locale, { day: n, month: s.monthFormat, year: s.yearFormat })
                            : s._getWeekNumber(e)
                        : "day" === t
                        ? e.toLocaleDateString(s.locale, "day" === s.view ? { day: n, month: s.monthFormat, year: s.yearFormat } : ["long", "short", "narrow"].indexOf(s.dayFormat) > -1 ? { weekday: s.dayFormat } : { day: s.dayFormat })
                        : "hour" === t
                        ? "default" === s.hourFormat
                            ? e.toLocaleTimeString(s.locale, { hour12: !1 })
                            : e.toLocaleDateString(s.locale, { hour: s.hourFormat })
                        : void 0;
                }
                _refreshHeaderDetailsDate() {
                    const e = this,
                        t = e.view,
                        i = e.scrollLeft,
                        s = e.$.timelineViewDetails.children,
                        n = e._timelineHeaderCells;
                    let r;
                    for (let e = 0; e < n.length; e++) {
                        const t = n[e];
                        if (i <= t.left + t.width) {
                            r = e;
                            break;
                        }
                    }
                    for (let i = 0; i < s.length; i++) {
                        const a = n[r],
                            o = s[i];
                        let l = new Date(a.date);
                        "week" === e.view && l.setDate(l.getDate() - l.getDay()),
                            (l = new Date(Math.max(a.date.getTime(), l.getTime()))),
                            (o._date = l),
                            (o.innerHTML = `<div>${e._getDateString(l, t, !0)}</div>`),
                            (o.style[e.rightToLeft ? "right" : "left"] = a.left + "px"),
                            (o.style.width = a.width + "px"),
                            r++;
                    }
                }
                _getWeekNumber(e) {
                    let t,
                        i = new Date(e.getFullYear(), 0, 1),
                        s = Math.round((e.getTime() - i.getTime() - 6e4 * (e.getTimezoneOffset() - i.getTimezoneOffset())) / 864e5) + 1,
                        n = i.getDay();
                    return (
                        (n = n >= 0 ? n : n + 7),
                        n < 4 ? ((t = Math.floor((s + n - 1) / 7) + 1), t > 52 && ((i = new Date(e.getFullYear() + 1, 0, 1)), (n = i.getDay()), (n = n >= 0 ? n : n + 7), (t = n < 4 ? 1 : 53))) : (t = Math.round((s + n - 1) / 7)),
                        t
                    );
                }
                _convertDuration(e, t) {
                    if (!e) return 0;
                    let i;
                    switch (this.durationUnit) {
                        case "day":
                            i = 864e5;
                            break;
                        case "hour":
                            i = 36e5;
                            break;
                        case "minute":
                            i = 6e4;
                            break;
                        case "second":
                            i = 1e3;
                            break;
                        case "milisecond":
                            return e;
                        case "week":
                            i = 6048e5;
                    }
                    return t ? e / i : e * i;
                }
                _createTaskBar(e) {
                    const t = document.createElement("div");
                    return (
                        t.classList.add("smart-timeline-task"),
                        t.classList.add(e),
                        (t.innerHTML =
                            "milestone" === e
                                ? '<div class="smart-task-container" aria-hidden="true">\n                <div class="smart-task-connection-point start"></div>\n                <div class="smart-timeline-task-fill"></div>\n                <div class="smart-task-connection-point end"></div>\n            </div>'
                                : '<div class="smart-task-container" aria-hidden="true">\n                <div class="smart-task-connection-point start"></div>\n                <div class="smart-timeline-task-fill">\n                    <div class="smart-timeline-task-progress"></div>\n                </div>\n                <div class="smart-timeline-task-progress-thumb"></div>\n                <div class="smart-timeline-task-label"></div> \n                <div class="smart-task-connection-point end"></div>\n            </div>'),
                        t
                    );
                }
                _createTimelineHeader(e, t) {
                    const i = this,
                        s = i._getCellsViewType();
                    if (!e) {
                        const t = i.$.timelineViewCells.children;
                        if (0 === t.length) return;
                        e = t[0]._date;
                    }
                    "day" !== i.view && e.setHours(0, 0, 0, 0),
                        i.$.timelineContent.offsetWidth === i.$.timeline.offsetWidth && i._timelineCells && i._timelineCells[0] && i._timelineCells[0].date.getTime() === e.getTime() && i._timelineCells.length === t[i._getCellsViewType()]
                            ? i._refresh()
                            : ((i.$.timelineContent.style.width = i.$.timelineAnimationContainer.style.width = ""),
                              i._createTimelineCellsObj(e, t),
                              i._createTimelineHeaderCellsObj(e, t),
                              (i.$.timelineViewDetails.innerHTML = ""),
                              i.$.timelineViewDetails.appendChild(i._createCells(i._getHeaderVisibleCellsCount())),
                              (i.$.timelineViewCells.innerHTML = ""),
                              i.$.timelineViewCells.appendChild(i._createCells(i._getTimelineVisibleCellsCount())),
                              i._refreshHeaderDate(),
                              (i.$.timelineContent.style.width = i.$.timelineAnimationContainer.style.width = Math.max(t[s] * i._timelineCells[0].width, i.$.timeline.parentElement.offsetWidth) + "px"),
                              i._refresh(),
                              i.scrollLeft && (i.$.timeline.scrollLeft = i._getScrollLeft(i.scrollLeft)),
                              i.scrollTop && (i.$.timelineContent.scrollTop = i.scrollTop));
                }
                _getCellsViewType() {
                    switch (this.view) {
                        case "year":
                            return "month";
                        case "month":
                            return "week";
                        case "week":
                            return "day";
                        case "day":
                            return "hour";
                    }
                }
                _createTimelineCellsObj(e, t) {
                    const i = this,
                        s = i._getCellsViewType();
                    t = t[s];
                    const n = window.getComputedStyle(i),
                        r = i.$.timeline.parentElement.offsetWidth;
                    let a = Math.max(parseFloat(n.getPropertyValue("--smart-gantt-chart-timeline-cell-size")) || 0, parseFloat(n.getPropertyValue("--smart-gantt-chart-timeline-cell-min-size") || 0)),
                        o = 0,
                        l = new Date(e);
                    t * a < r && (a = r / t), (a = parseFloat(a.toFixed(2))), (i._timelineCells = []);
                    for (let e = 0; e < t; e++) {
                        const e = { left: o, width: a };
                        if ("year" === s) l.setMonth(0), (e.date = new Date(l)), l.setFullYear(l.getFullYear() + 1);
                        else if ("month" === s) l.setDate(1), (e.date = new Date(l)), l.setMonth(l.getMonth() + 1);
                        else if ("week" === s) l.setHours(0, 0, 0, 0), l.setDate(l.getDate() - l.getDay()), (e.date = new Date(l)), l.setDate(l.getDate() + 7);
                        else if ("day" === s)
                            i.nonworkingDays.indexOf(l.getDay()) > -1 && (e.nonworking = !0), l.setHours(0, 0, 0, 0), (e.date = new Date(l)), l.setDate(l.getDate() + 1), (e.weekend = 0 === e.date.getDay() || 6 === e.date.getDay());
                        else if ("hour" === s) {
                            (i.nonworkingHours.indexOf(l.getHours()) > -1 || i.nonworkingDays.indexOf(l.getDay()) > -1) && (e.nonworking = !0), l.setHours(l.getHours(), 0, 0, 0), (e.date = new Date(l));
                            const t = l.getTime();
                            l.setHours(l.getHours() + 1), t === l.getTime() && l.setHours(l.getHours() + 2), (e.weekend = 0 === e.date.getDay() || 6 === e.date.getDay());
                        }
                        i._timelineCells.push(e), (o = parseFloat((o + a).toFixed(2)));
                    }
                }
                _createTimelineHeaderCellsObj(e, t) {
                    const i = this,
                        s = i.view;
                    let n = 0,
                        r = new Date(e);
                    (t = t[s]), (i._timelineHeaderCells = []);
                    for (let e = 0; e < t; e++) {
                        const t = {};
                        switch (((t.date = new Date(r)), s)) {
                            case "year":
                                r.setFullYear(r.getFullYear() + 1);
                                break;
                            case "month":
                                r.setDate(1), r.setMonth(r.getMonth() + 1);
                                break;
                            case "week":
                                r.setDate(r.getDate() + 7);
                                break;
                            case "day":
                                r.setDate(r.getDate() + 1);
                        }
                        (n = i._refreshViewDetailCell(t, n, e)), i._timelineHeaderCells.push(t);
                    }
                }
                _minMaxDateValidator(e) {
                    if (!e || isNaN(e.getTime())) return e;
                    const t = new Date(this.min),
                        i = new Date(this.max);
                    return t && (e = new Date(Math.max(t.getTime(), e.getTime()))), i && (e = new Date(Math.min(i.getTime(), e.getTime()))), e;
                }
                _dateValidator(e, t) {
                    const i = this;
                    if (t instanceof Date) return i._minMaxDateValidator(t);
                    if (Smart.Utilities.DateTime && t instanceof Smart.Utilities.DateTime) return i._minMaxDateValidator(t.toDate());
                    if ("string" != typeof t) return i._minMaxDateValidator(e);
                    {
                        if ("new Date()" === t.trim() || "new Smart.Utilities.DateTime()" === t.trim()) return i._minMaxDateValidator(new Date());
                        let e,
                            s = /(\d+[,-.\/]{1}\s*\d+[,-.\/]{1}\s*\d+)/;
                        if (s.test(t)) {
                            const i = s
                                .exec(t)[0]
                                .replace(/[,-.\/]/g, ",")
                                .split(",");
                            if (3 === i.length) {
                                if (((e = new Date(parseInt(i[0]), parseInt(i[1]) - 1, parseInt(i[2]))), (s = /\d+:\d+:\d+/), s.test(t))) {
                                    const i = s.exec(t)[0].split(":");
                                    e.setHours(i[0] || 0, i[1] || 0, i[2] || 0);
                                }
                                t = e;
                            }
                        }
                    }
                    return i._minMaxDateValidator(new Date(t));
                }
                _getTaskBarPositionLimits(e, t) {
                    const i = this;
                    function s(t) {
                        const s = i._getTimelineTaskCellByDate(e, t);
                        if (s) return s.left + i._getTimelineTaskOffset(s, t) || 0;
                    }
                    return { min: s(e._task["min" + t]), max: s(e._task["max" + t]) };
                }
                _getTimelineTaskOffset(e, t) {
                    if (!e) return;
                    let i, s;
                    switch (this.view) {
                        case "year": {
                            const n = t.getHours() / 24 + t.getMinutes() / 1440 + t.getSeconds() / 86400;
                            (i = new Date(e.date.getFullYear(), e.date.getMonth() + 1, 0)), (s = ((t.getDate() - 1 + n) / i.getDate()) * e.width);
                            break;
                        }
                        case "month":
                            s = (t.getDay() / 7) * e.width;
                            break;
                        case "week":
                            s = (parseFloat(t.getHours() + t.getMinutes() / 60 + t.getSeconds() / 3600) / 24) * e.width;
                            break;
                        case "day":
                            s = (parseFloat(t.getMinutes() + t.getSeconds() / 60) / 60) * e.width;
                    }
                    return s;
                }
                _getTaskBarSizeLimits(e, t) {
                    const i = this,
                        s = i._getTaskBarDateRange(e);
                    let n,
                        r = 0,
                        a = i._convertDuration(e._task.minDuration) || i._getMinDuration(e, t),
                        o = i._convertDuration(e._task.maxDuration);
                    function l(n, r) {
                        if (!n) return;
                        let a, o;
                        ("left" === t && !i.rightToLeft) || ("right" === t && i.rightToLeft) ? ((n *= -1), (o = s.dateEnd)) : (o = s.dateStart), r && Math.abs(a) === Math.abs(n) && (a = 0);
                        let l = i._getTaskWorkingDateEnd({ dateStart: o }, n);
                        const d = l.getTime() + 60 * (l.getTimezoneOffset() - o.getTimezoneOffset()) * 1e3,
                            c = i._getTimelineTaskCellByDate(e, new Date(d));
                        if (!c) return;
                        const m = i._getTimelineTaskOffset(c, new Date(d));
                        return i.rightToLeft
                            ? "left" === t
                                ? m - (i.$.timelineContent.offsetWidth - e.offsetLeft - e.offsetWidth - c.left)
                                : i.$.timelineContent.offsetWidth - e.offsetLeft - c.left - m
                            : "left" === t
                            ? e.offsetLeft + e.offsetWidth - c.left - m
                            : c.left - e.offsetLeft + m;
                    }
                    if (("left" === t && !i.rightToLeft) || ("right" === t && i.rightToLeft)) {
                        const t = e._task.maxDateStart,
                            i = e._task.minDateStart;
                        i && ((r = 60 * (i.getTimezoneOffset() - s.dateEnd.getTimezoneOffset()) * 1e3), (n = Math.abs(i.getTime() - s.dateEnd.getTime()) + r), (o = o ? Math.min(n, o) : n)),
                            t && ((r = 60 * (t.getTimezoneOffset() - s.dateEnd.getTimezoneOffset()) * 1e3), (n = Math.abs(t.getTime() - s.dateEnd.getTime()) + r), (a = a ? Math.max(n, a) : n));
                    } else {
                        const t = e._task.maxDateEnd,
                            i = e._task.minDateEnd;
                        i && ((r = 60 * (i.getTimezoneOffset() - s.dateStart.getTimezoneOffset()) * 1e3), (n = Math.abs(i.getTime() - s.dateStart.getTime()) + r), (a = a ? Math.max(n, a) : n)),
                            t && ((r = 60 * (t.getTimezoneOffset() - s.dateStart.getTimezoneOffset()) * 1e3), (n = Math.abs(t.getTime() - s.dateStart.getTime()) + r), (o = o ? Math.min(n, o) : n));
                    }
                    return o && (a = Math.min(a, o)), { min: l(a, !0), max: l(o) };
                }
                _getMinDuration(e, t) {
                    const i = this,
                        s = parseFloat(getComputedStyle(i).getPropertyValue("--smart-gantt-chart-timeline-task-min-width")) || 0;
                    if (!s || !i._timelineCells || 0 === i._timelineCells.length) return;
                    const n = e._task;
                    let r,
                        a,
                        o = 1;
                    (a = i.rightToLeft ? parseFloat(e.style.right) || i.$.timelineContent.offsetWidth - e.offsetLeft - e.offsetWidth : parseFloat(e.style.left) || e.offsetLeft),
                        "left" === t ? ((r = n.dateEnd), (a += parseFloat(e.style.width) || e.offsetWidth), (o = -1)) : (r = n.dateStart);
                    const l = a + o * s;
                    let d;
                    for (let e = 0; e < i._timelineCells.length; e++) {
                        const t = i._timelineCells[e];
                        if (l < t.left) break;
                        d = t;
                    }
                    const c = i._getDateFromCell(l, d);
                    return c ? Math.abs(r.getTime() - c.getTime()) : void 0;
                }
                _createDelimiter(e, t) {
                    const i = this,
                        s = e.slice(0, 3),
                        n = document.createElement("div");
                    if ((n.classList.add("smart-task-bar-limitter-" + e), e.indexOf("date") > -1)) {
                        if (!this._dragDetails[s].left) return;
                        const e = i._dragDetails.timelineTask,
                            t = i.$.taskTimelineCellsContainer.children[i._tasks.indexOf(e._task)];
                        s.indexOf("max") > -1 ? (n.style.width = t.offsetWidth - i._dragDetails[s].left - e.offsetWidth + "px") : (n.style.width = i._dragDetails[s].left + "px");
                    } else {
                        if (!this._dragDetails[s].width) return;
                        n.style["left" === t ? "right" : "left"] = i._dragDetails[s].width + "px";
                    }
                    return n;
                }
                _doubleClickHandler(e) {
                    const t = this;
                    let i = e.target;
                    if (t.disabled || t.disableWindowEditor) return;
                    t.shadowRoot && i === t && (i = e.composedPath()[0]);
                    let s = i.closest ? i.closest(".smart-task-connection") : void 0;
                    s
                        ? t._openPopupWindow(s)
                        : ((s = i.closest(".smart-timeline-task") || i.closest(".smart-task-label-container") || i.closest(".smart-tree-item-label-container")),
                          s && t.$.taskSplitter.contains(s) && (s.classList.contains("smart-timeline-task") ? t._openPopupWindow(s) : t._openPopupWindow(t.$.timelineTasksContainer.children[t._getTreeItemIndex(s)])));
                }
                _checkDoubleClick(e) {
                    const t = this;
                    let i = e.target;
                    if (
                        (t.shadowRoot && i === t && (i = e.composedPath()[0]),
                        void 0 === t._dblClickDetails && (t._dblClickDetails = { clicks: 0 }),
                        clearTimeout(t._dblClickDetails.timeOut),
                        i !== t._dblClickDetails.target && (t._dblClickDetails.clicks = 0),
                        (t._dblClickDetails.target = i),
                        t._dblClickDetails.clicks++,
                        (t._dblClickDetails.timeOut = setTimeout(function () {
                            t._dblClickDetails && (t._dblClickDetails.clicks = 0);
                        }, 300)),
                        2 === t._dblClickDetails.clicks)
                    )
                        return t._doubleClickHandler(e), (t._dblClickDetails.clicks = 0), !0;
                }
                _downHandler(e) {
                    const t = this,
                        i = e.originalEvent,
                        s = t.shadowRoot || t.isInShadowDOM ? i.composedPath()[0] : i.target,
                        n = s.closest ? s.closest(".smart-timeline-task-cell") || s.closest(".smart-timeline-task") : null;
                    if ((e.stopPropagation(), t._dragDetails)) return delete t._dragDetails, void t._setConnectionFeedback();
                    const r = t.$.resourceSplitter.contains(s) ? "resource" : "task";
                    if (((s.closest(".smart-timeline-content") || s.closest(`.smart-${r}-tree-content`)) && requestAnimationFrame(() => t.$[`${r}Tree`].focus({ preventScroll: !0 })), !Smart.Utilities.Core.isMobile && 0 !== e.button))
                        return;
                    if (!n) {
                        if (s.classList.contains("smart-popup-window-modal")) {
                            if (t._popupWindow) {
                                const e = Object.keys(t._popupWindow);
                                requestAnimationFrame(() => t._popupWindow[e[e.length - 1]].focus());
                            }
                            return;
                        }
                        if (((s.closest(".smart-tree-item-label-container") && !s.classList.contains("smart-arrow-down")) || s.closest(".smart-task-connection") || s.closest(".smart-task-label-container")) && t._checkDoubleClick(i)) return;
                        if (!s.closest(".smart-tree-item-label-container") && !s.closest("smart-scroll-bar")) {
                            const e = t._getTreeItemIndex(s);
                            if (void 0 !== e) (t._itemClickedDetails = { index: e, type: r }), t._select(r, t[`_${r}s`][t._itemClickedDetails.index]);
                            else {
                                const e = s.closest(".smart-timeline-resource-cell");
                                e && (t._dragDetails = { target: e });
                            }
                        }
                        return;
                    }
                    if (s.closest(".smart-resource-timeline-view-cell") || t.disabled) return;
                    const a = t.$.timelineTasksContainer.children[t._tasks.indexOf(n._task)],
                        o = a._task;
                    if (o && (a.getElementsByClassName("smart-timeline-task-fill")[0] || t.$.timeline.hasAttribute("task-bar-hovered"))) {
                        if ((s.closest(".smart-timeline-task-fill") || (a.classList.contains("milestone") && s.closest(".smart-task-container"))) && t._checkDoubleClick(i)) return;
                        const n = s.closest(".smart-timeline-task-progress-thumb"),
                            r = e.pageX - window.pageXOffset,
                            l = e.pageY - window.pageYOffset;
                        (t._dragDetails = {}), (t._dragDetails.target = n || s), (t._dragDetails.timelineTask = a), (t._dragDetails.coordinates = { x: r, y: l });
                        const d = (n || a).getBoundingClientRect();
                        if (((t._dragDetails.offset = { x: r - d.left, y: l - d.top }), n || (!n && "project" === o.type && o.synchronized && !o.dragProject)))
                            return void (s.closest(".smart-task-connection-point") && ((t._dragDetails.timelineTask = void 0), (t._dragDetails.relatedConnections = {})));
                        ("visible" === t.resizeHandlesVisibility || (Smart.Utilities.Core.isMobile && "auto" === t.resizeHandlesVisibility)) &&
                            (s.closest(".smart-timeline-task-fill") ? t._checkTaskBarResizability(e) : t.$.timeline.removeAttribute("task-bar-hovered")),
                            t.rightToLeft
                                ? (t._dragDetails.originalPosition = { x: t.$.timelineContent.offsetWidth - (a.offsetLeft + a.offsetWidth), y: a.offsetTop })
                                : (t._dragDetails.originalPosition = { x: a.offsetLeft, y: a.offsetTop }),
                            (t._dragDetails.originalSize = { width: a.offsetWidth, height: a.offsetHeight }),
                            (t._dragDetails.min = {}),
                            (t._dragDetails.max = {}),
                            t._setDragLimits(s);
                    }
                }
                _documentMoveHandler(e) {
                    const t = this;
                    if (!t._dragDetails || !t._dragDetails.target) {
                        let i = e.originalEvent.target;
                        return (
                            t.shadowRoot && i === t && (i = e.originalEvent.composedPath()[0]),
                            t._handleTreeItemHover(t._getTreeItemIndex(i), i),
                            void 0 === t._hoveredItemDetails && t._handleTimelineHover(e),
                            void t._checkTaskBarResizability(e)
                        );
                    }
                    if (t._dragDetails.target.classList.contains("smart-task-connection-point")) return t._setConnectionFeedback(e), t._handleTimelineHover(e), void t._autoScroll(e);
                    t._dragDetails.target.classList.contains("smart-timeline-task-progress-thumb")
                        ? t._handleTaskProgressChange(e)
                        : (t._autoScroll(e),
                          t._autoScrolling ||
                              (t.$.timeline.hasAttribute("task-bar-hovered")
                                  ? t._handleTaskBarResize(e)
                                  : t._dragDetails.target.closest(".smart-timeline-task-fill") && t._dragDetails.timelineTask && !t._dragDetails.timelineTask.hasAttribute("disable-drag") && t._handleTaskBarDrag(e)));
                }
                _documentUpHandler(e) {
                    const t = this,
                        i = e.originalEvent;
                    let s,
                        n = i.target;
                    if ((t._upHandler(), void 0 !== t._itemClickedDetails)) return void (t._itemClickedDetails = void 0);
                    if (!t._dragDetails) return;
                    t.shadowRoot && n === t && (n = i.composedPath()[0]);
                    const r = t._dragDetails.timelineTask;
                    if ((r && (s = t.$.taskTimelineCellsContainer.children[t._tasks.indexOf(r._task)]), t.hasAttribute("dragged"))) {
                        t._snapToNearest(r), t._checkWorkingDays(r), t._refreshProject(s._task.project);
                        const e = s.getElementsByClassName("smart-task-bar-limitter-min-date")[0],
                            i = s.getElementsByClassName("smart-task-bar-limitter-max-date")[0];
                        e && e.parentElement.removeChild(e),
                            i && i.parentElement.removeChild(i),
                            t._autoSchedule(r._task),
                            t._resourceTreeRefreshTimeout
                                ? (clearTimeout(t._resourceTreeRefreshTimeout), delete t._resourceTreeRefreshTimeout, t._refreshAssignedResources(s._task))
                                : (t.snapToNearest || t.nonworkingDays.length > 0 || t.nonworkingHours.length > 0) && t._refreshAssignedResources(s._task),
                            t.removeAttribute("dragged"),
                            t.$.fireEvent("dragEnd", { index: t._tasks.indexOf(s._task), dateStart: new Date(s._task.dateStart), dateEnd: new Date(s._task.dateEnd) });
                    } else if (t.hasAttribute("progress-change"))
                        t._resourceTreeRefreshTimeout && (clearTimeout(t._resourceTreeRefreshTimeout), delete t._resourceTreeRefreshTimeout, t._refreshAssignedResources(s._task, ["progress"])),
                            t.removeAttribute("progress-change"),
                            t.$.fireEvent("progressChangeEnd", { index: t._tasks.indexOf(s._task), progress: s._task.progress || 0 });
                    else if (t.hasAttribute("resized"))
                        t._snapToNearest(r),
                            t._refreshProject(s._task.project),
                            t._resourceTreeRefreshTimeout
                                ? (clearTimeout(t._resourceTreeRefreshTimeout), delete t._resourceTreeRefreshTimeout, t._refreshAssignedResources(s._task, ["workload"]))
                                : t.snapToNearest && t._refreshAssignedResources(s._task, ["workload"]),
                            t.removeAttribute("resized"),
                            t.$.fireEvent("resizeEnd", { index: t._tasks.indexOf(s._task), dateStart: s._task.dateStart, dateEnd: s._task.dateEnd }),
                            t._autoSchedule(r._task);
                    else if (t.hasAttribute("connecting-task")) {
                        const i = t._connectTask(e),
                            s = t._tasks;
                        t._setConnectionFeedback(),
                            i && (t.$.fireEvent("connectionEnd", { startIndex: s.indexOf(i.taskStart), endIndex: s.indexOf(i.target), type: i.type }), t._autoSchedule(i.taskStart._task)),
                            Smart.Utilities.Core.isMobile && (t._handleTimelineHover(e, !0), (t._scrollView.disableSwipeScroll = !1));
                    } else {
                        n.closest(".smart-timeline-task") === r && t._select("task", s._task, !0);
                    }
                    if (r) {
                        const e = r.getElementsByClassName("smart-task-bar-limitter-max")[0],
                            t = r.getElementsByClassName("smart-task-bar-limitter-min")[0];
                        e && e.parentElement.removeChild(e), t && t.parentElement.removeChild(t);
                    }
                    delete t._dragDetails, (t._scrollView.disableSwipeScroll = !1);
                }
                _moveHandler(e) {
                    Smart.Utilities.Core.isMobile || e.stopPropagation(), (this.hasAttribute("dragged") || this.hasAttribute("progress-change")) && "touchmove" === e.originalEvent.type && e.originalEvent.preventDefault();
                }
                _getTreeItemIndex(e) {
                    if (!e || !e.closest || !(this.shadowRoot || this).contains(e)) return;
                    let t,
                        i = e.closest(".smart-task-label-container") || e.closest(".smart-resource-label-container");
                    return i
                        ? ((t = i.classList.contains("smart-resource-label-container") ? "resource" : "task"), [].slice.call(i.closest("smart-splitter-item").getElementsByClassName(`smart-${t}-label-container`)).indexOf(i))
                        : ((i = e.closest(".smart-tree-item-label-container")), i ? [].slice.call(i.closest("smart-tree").getElementsByClassName("smart-tree-item-label-container")).indexOf(i) : void 0);
                }
                _handleTreeItemHover(e, t) {
                    const i = this;
                    let s;
                    if ((t && (s = i.$.taskSplitter.contains(t) ? i.$.taskTreeSplitter : i.$.resourceTreeSplitter), i._hoveredItemDetails && i._hoveredItemDetails.index === e && i._hoveredItemDetails.splitter === s)) return;
                    const n = i.$.mainSplitter.querySelectorAll("smart-tree-item[hover], smart-tree-items-group[hover], .smart-task-label-container[hover], .smart-resource-label-container[hover]");
                    for (let e = 0; e < n.length; e++) n[e].removeAttribute("hover");
                    if (void 0 === e || e < 0) return (i._hoveredItemDetails = void 0), void i._handleTimelineHover({ target: i });
                    const r = s === i.$.taskTreeSplitter ? "task" : "resource";
                    if (Smart.Utilities.Core.isMobile || !i[r + "Columns"].length) return;
                    const a = s._items;
                    for (let t = 0; t < a.length; t++) {
                        const s = a[t];
                        let n;
                        (n = s === i.$[r + "TreeSplitterItem"] ? [].slice.call(s.querySelectorAll("smart-tree-item, smart-tree-items-group")) : [].slice.call(s.getElementsByClassName(`smart-${r}-label-container`))),
                            n[e] && n[e].setAttribute("hover", "");
                    }
                    (i._hoveredItemDetails = { index: e, splitter: s }), i._handleTimelineHover({ target: i.$["task" === r ? "timelineTasksContainer" : "resourceTimelineCellsContainer"].children[e] });
                }
                _checkWorkingDays(e) {
                    const t = this;
                    if ((t._dragDetails._taskDuration || t._timelineCells.length) && e instanceof HTMLElement && e.classList.contains("smart-timeline-task") && t.hasAttribute("dragged")) {
                        if ((0 === t.nonworkingDays.length && 0 === t.nonworkingHours.length) || !t._dragDetails._taskDuration) return;
                        const i = e._task,
                            s = t._getTaskWorkingDateEnd(i);
                        let n = new Date(t._timelineCells[t._timelineCells.length - 1].date);
                        "year" === t.view
                            ? (n.setMonth(n.getMonth() + 1), n.setDate(0), n.setHours(23, 59, 59, 999))
                            : "month" === t.view
                            ? (n.setDate(n.getDate() + 6 - n.getDay()), n.setHours(23, 59, 59, 999))
                            : "week" === t.view
                            ? n.setHours(23, 59, 59, 999)
                            : n.setHours(n.getHours(), 59, 59, 999),
                            (i.dateEnd = i.maxDateEnd ? new Date(Math.min(s.getTime(), i.maxDateEnd.getTime())) : s),
                            (i.dateEnd = new Date(Math.min(n.getTime(), i.dateEnd.getTime()))),
                            (i.duration = t._convertDuration(t.nonworkingDays.length > 0 || t.nonworkingHours.length > 0 ? t._getWorkingTime(i.dateStart, i.dateEnd) : i.dateEnd.getTime() - i.dateStart.getTime(), !0)),
                            t._setTimelineTaskBar(e._task, !0),
                            t._refreshTaskConnections(e._task),
                            t._refreshTreeColumnsData(i, ["dateEnd", "duration"]);
                    }
                }
                _getTaskWorkingDateEnd(e, t) {
                    if (!e || !e.dateStart) return;
                    const i = this;
                    let s,
                        n,
                        r = new Date(e.dateStart);
                    t || (t = i._dragDetails ? i._dragDetails._taskDuration : i._getWorkingTime(e.dateStart, e.dateEnd));
                    const a = t < 0 ? -1 : 1;
                    for (t = Math.abs(t); t > 0; ) {
                        const e = Math.min(t, 36e5 - (60 * r.getMinutes() * 1e3 + 1e3 * r.getSeconds() + r.getMilliseconds()));
                        if (i.nonworkingDays.indexOf(r.getDay()) > -1) (n = new Date(r)), n.setHours(0, 0, 0, 0), n.setDate(r.getDate() + 1 * a), (s = Math.min(e, n.getTime() - r.getTime())), (r = new Date(r.getTime() + s));
                        else if (i.nonworkingHours.indexOf(r.getHours()) > -1) {
                            n = new Date(r);
                            const t = n.getTime();
                            n.setHours(r.getHours() + 1 * a, 0, 0, 0), t === n.getTime() && n.setHours(r.getHours() + 2 * a, 0, 0, 0), (s = Math.min(e, n.getTime() - r.getTime())), (r = new Date(r.getTime() + s));
                        } else (t -= e), (r = new Date(r.getTime() + a * e));
                    }
                    return r;
                }
                _createConnectingElement(e, t, i, s, n) {
                    const r = this;
                    if (!r._connectionDetails || !r._connectionDetails.start) return;
                    const a = r._connectionDetails,
                        o = a.type,
                        l = r.$.timelineConnectionsContainer;
                    let d = a.connections.shift();
                    d || ((d = document.createElement("div")), d.classList.add("smart-task-connection")),
                        (d.style.width = d.style.width = ""),
                        "horizontal" === s ? ((d.style.width = Math.abs(i) + "px"), (d.style.height = "")) : ((d.style.width = ""), (d.style.height = Math.abs(i) + "px")),
                        (d.style[r.rightToLeft ? "left" : "right"] = ""),
                        (d.style[r.rightToLeft ? "right" : "left"] = e + "px"),
                        (d.style.top = t + "px"),
                        d.setAttribute("connection-id", a.id);
                    const c = a.start.task._task.label,
                        m = 0 === o || 3 === o ? "start" : "end",
                        h = a.end.task._task.label,
                        u = 0 === o || 1 === o ? "start" : "end";
                    if ((d.setAttribute("aria-label", "Connection between " + c + " (" + m + ") and " + h + " (" + u + ")"), n)) {
                        let e = 0 === o || 1 === o ? "right" : "left";
                        r.rightToLeft && (e = "left" === e ? "right" : "left"), d.setAttribute("arrow-direction", e);
                    } else d.removeAttribute("arrow-direction");
                    d.parentElement || l.appendChild(d);
                }
                _getConnectionType(e, t) {
                    if (!e || !t) return;
                    let i = !e.classList.contains("end"),
                        s = t.classList.contains("end");
                    return i && !s ? 0 : i || s ? (!i && s ? 2 : i && s ? 3 : void 0) : 1;
                }
                _setConnectionFeedback(e) {
                    const t = this;
                    if (!t._dragDetails || !t._dragDetails.target || !e)
                        return (
                            t._connectionFeedback &&
                                t._connectionFeedback.parentElement &&
                                (t._connectionFeedback.closest(".smart-timeline-task").removeAttribute("connection-point"), t._connectionFeedback.parentElement.removeChild(t._connectionFeedback)),
                            t.removeAttribute("connecting-task"),
                            void delete t._connectionFeedback
                        );
                    if (!t._dragDetails.target || !t._dragDetails.target.classList.contains("smart-task-connection-point")) return;
                    const i = t._dragDetails.target.closest(".smart-timeline-task");
                    if (!i) return;
                    if (!t.hasAttribute("connecting-task")) {
                        if (t.$.fireEvent("connectionStart", { startIndex: t._tasks.indexOf(i._task) }).defaultPrevented) return void delete t._dragDetails.target;
                        t.setAttribute("connecting-task", ""), Smart.Utilities.Core.isMobile && (t._scrollView.disableSwipeScroll = !0);
                    }
                    const s = i.classList.contains("milestone");
                    let n = s ? (-1 * i.offsetHeight) / 2 : 0;
                    t._dragDetails.target.classList.contains("end") && (i.setAttribute("connection-point", "end"), (n = s ? -1 * n : i.offsetWidth)),
                        t._connectionFeedback || ((t._connectionFeedback = document.createElement("div")), t._connectionFeedback.classList.add("smart-task-connection-feedback"));
                    const r = t._dragDetails.coordinates.x + (t.rightToLeft ? -1 : 1) * n,
                        a = t._dragDetails.coordinates.y,
                        o = t._dragDetails.offset.x - (t.rightToLeft ? i.offsetWidth : 0),
                        l = t._dragDetails.offset.y,
                        d = e.pageX - window.pageXOffset + o,
                        c = e.pageY - window.pageYOffset + l - i.offsetHeight / 2;
                    (t._connectionFeedback.style.width = Math.sqrt(Math.pow(Math.abs(d - r), 2) + Math.pow(Math.abs(c - a), 2)) + "px"),
                        (t._connectionFeedback.style.transform = t.rightToLeft ? "rotate(" + (180 * (Math.atan2(a - c, r - d) || 0)) / Math.PI + "deg)" : "rotate(" + (180 * (Math.atan2(c - a, d - r) || 0)) / Math.PI + "deg)"),
                        t._connectionFeedback.parentElement || i.firstElementChild.appendChild(t._connectionFeedback);
                }
                _connectTask(e) {
                    const t = this;
                    let i, s, n, r, a;
                    if (e.originalEvent) {
                        const a = e.originalEvent;
                        let o = Smart.Utilities.Core.isMobile ? document.elementFromPoint(a.pageX - window.pageXOffset, a.pageY - window.pageYOffset) : a.target;
                        if (!(t._dragDetails && t._dragDetails.target && o && o.classList)) return;
                        if (
                            (t.shadowRoot && o === t && (o = Smart.Utilities.Core.isMobile ? t.shadowRoot.elementFromPoint(a.pageX - window.pageXOffset, a.pageY - window.pageYOffset) : a.composedPath()[0]),
                            (i = t._dragDetails.target.classList.contains("smart-task-connection-point") ? t._dragDetails.target : void 0),
                            (s = o.classList.contains("smart-task-connection-point") ? o : void 0),
                            i && (n = i.closest(".smart-timeline-task")),
                            s)
                        )
                            r = s.closest(".smart-timeline-task");
                        else if (Smart.Utilities.Core.isMobile && o.classList.contains("smart-timeline-task-fill") && ((r = o.closest(".smart-timeline-task")), r)) {
                            const e = a.pageX - window.pageXOffset - r.getBoundingClientRect().left;
                            s = r.querySelector(".smart-task-connection-point." + (e >= r.offsetWidth / 2 ? "end" : "start"));
                        }
                    } else {
                        if (!e || e.length < 3) return;
                        if (((e = (e + "").split("-")), void 0 === (e = t._getValidConnectionId(e[0], e[1], e[2], "_connectTask")))) return;
                        const o = t.$.timelineTasksContainer.children;
                        (n = o[parseInt(e[0])]),
                            (r = o[parseInt(e[1])]),
                            (a = parseInt(e[2])),
                            n && r && ((i = n.querySelector(".smart-task-connection-point." + (0 === a || 3 === a ? "start" : "end"))), (s = r.querySelector(".smart-task-connection-point." + (0 === a || 1 === a ? "start" : "end"))));
                    }
                    if (i && s && n && r && n !== r && !n.classList.contains("smart-visibility-hidden") && !r.classList.contains("smart-visibility-hidden") && !t._isAutoScheduled(n, r))
                        return (
                            void 0 === a && (a = t._getConnectionType(i, s)),
                            (t._connectionDetails = { start: { point: i }, end: { point: s }, type: a }),
                            t._setConnectionDetails(),
                            t._createTaskConnection(),
                            t.hasAttribute("dragged") || t.hasAttribute("resized") || t._updateConnection(t._tasks.indexOf(n._task) + "-" + t._tasks.indexOf(r._task) + "-" + t._connectionDetails.type),
                            delete t._connectionDetails,
                            n.setAttribute("connected", ""),
                            r.setAttribute("connected", ""),
                            { taskStart: n, taskEnd: r, type: a }
                        );
                }
                _isAutoScheduled(e, t, i) {
                    const s = this,
                        n = s._tasks;
                    let r = {};
                    if (s.autoSchedule)
                        return (function e(t, a) {
                            const o = t.connections,
                                l = n.indexOf(t);
                            r[l] = !0;
                            for (let t = 0; t < o.length; t++) {
                                const d = o[t],
                                    c = s._getTaskIndexById(d.target);
                                if (c === a) return i && s._removeConnection(l + "-" + c + "-" + d.type, !0), !0;
                                if (!r[c] && e(n[c], a)) return !0;
                            }
                        })(t._task, n.indexOf(e._task));
                }
                _setConnectionDetails() {
                    const e = this;
                    if (!e._connectionDetails) return;
                    const t = e._connectionDetails,
                        i = t.start.point,
                        s = t.end.point,
                        n = t.type;
                    if (!i || !s) return;
                    let r,
                        a = i.closest(".smart-timeline-task"),
                        o = s.closest(".smart-timeline-task"),
                        l = a.offsetWidth,
                        d = o.offsetWidth,
                        c = a.offsetLeft,
                        m = o.offsetLeft,
                        h = a.offsetTop,
                        u = o.offsetTop,
                        f = i.offsetLeft,
                        g = s.offsetLeft;
                    const p = a.classList.contains("milestone"),
                        _ = o.classList.contains("milestone"),
                        T = [].slice.call(e.$.timelineTasksContainer.children),
                        k = T.indexOf(a),
                        y = T.indexOf(o);
                    if (e.rightToLeft) {
                        const t = e.$.timelineContent.offsetWidth;
                        (c = t - (c + l)), (m = t - (m + d));
                    }
                    if (
                        ((t.id = k + "-" + y + "-" + n),
                        p ? ((l = a.offsetHeight), (c -= l / 2)) : _ && ((d = o.offsetHeight), (m -= d / 2)),
                        (t.connectionStartOffset && t.connectionEndOffset) ||
                            (0 === n
                                ? e.rightToLeft
                                    ? ((f -= p ? l / 2 : l), (g -= _ ? d / 2 : d))
                                    : ((f = Math.abs(f) - i.offsetWidth - (p ? l / 2 : 0)), (g = Math.abs(g) - s.offsetWidth - (_ ? d / 2 : 0)))
                                : 1 === n
                                ? e.rightToLeft
                                    ? ((f = Math.abs(f) - i.offsetWidth - (p ? l / 2 : 0)), (g -= _ ? d / 2 : d))
                                    : ((f -= p ? l / 2 : l), (g = Math.abs(g) - s.offsetWidth - (_ ? d / 2 : 0)))
                                : 2 === n
                                ? e.rightToLeft
                                    ? ((f = Math.abs(f) - i.offsetWidth - (p ? l / 2 : 0)), (g = Math.abs(g) - s.offsetWidth - (_ ? d / 2 : 0)))
                                    : ((f -= p ? l / 2 : l), (g -= _ ? d / 2 : d))
                                : e.rightToLeft
                                ? ((f -= p ? l / 2 : l), (g = Math.abs(g) - s.offsetWidth - (_ ? d / 2 : 0)))
                                : ((f = Math.abs(f) - i.offsetWidth - (p ? l / 2 : 0)), (g -= _ ? d / 2 : d)),
                            (t.start.offset = f += i.offsetWidth / 2),
                            (t.end.offset = g += s.offsetWidth / 2)),
                        (0 === n && c > m) || (1 === n && c + l + f > m - g && u > h) || (2 === n && m + d > c + l) || (3 === n && ((c - f < m + d + g && u > h) || (c - f > m + d + g && h > u))))
                    ) {
                        r = !0;
                        let e = a;
                        (a = o), (o = e), (e = f), (f = g), (g = e), (e = l), (l = d), (d = e), (e = c), (c = m), (m = e), (e = h), (h = u), (u = e);
                    }
                    let v = c,
                        C = m;
                    (!r && 1 === n) || (r && 3 === n) ? (v += l) : (!r && 3 === n) || (r && 1 === n) ? (C += d) : 2 === n && ((v += l), (C += d));
                    let w = e.$.timelineConnectionsContainer.querySelectorAll('.smart-task-connection[connection-id^="' + k + "-" + y + '-"]');
                    0 === w.length && (w = e.$.timelineConnectionsContainer.querySelectorAll('.smart-task-connection[connection-id^="' + y + "-" + k + '"]')),
                        (t.connections = [].slice.call(w)),
                        (t.start.x = v),
                        (t.start.y = h + i.offsetTop),
                        (t.start.task = a),
                        (t.end.x = C),
                        (t.end.y = u + s.offsetTop),
                        (t.end.task = o),
                        (t.type = n),
                        (t.inverted = r);
                }
                _createTaskConnection() {
                    const e = this,
                        t = e._connectionDetails;
                    if (!t) return;
                    const i = 2 * (parseFloat(getComputedStyle(e).getPropertyValue("--smart-gantt-chart-timeline-task-connection-width")) || 1),
                        s = t.start.x,
                        n = t.start.y,
                        r = t.start.offset,
                        a = t.start.point.offsetTop,
                        o = t.end.x,
                        l = t.end.y,
                        d = t.end.offset,
                        c = t.type,
                        m = t.inverted,
                        h = (!m && 3 === c) || (m && 1 === c),
                        u = (!m && 1 === c) || (m && 3 === c);
                    let f,
                        g,
                        p,
                        _ = s,
                        T = o;
                    h ? ((_ = s - d), (T = o + d)) : u && ((_ = s + r), (T = o - d));
                    const k = _ <= T && h,
                        y = _ >= T && u,
                        v = 2 === c || u;
                    !(function d(h) {
                        f !== o &&
                            (h
                                ? "horizontal" === h
                                    ? ((p = f - o + (k ? -1 : 1) * r), (f = _ > T ? f - Math.abs(p) : f), e._createConnectingElement(f, g, (_ === T ? 0 : Math.abs(p)) + (v ? i : 0), "horizontal"), (f = _ < T ? f - p : f), d("vertical"))
                                    : ((p = Math.abs(g - l)), (g += n < l ? 0 : -1 * p), (f -= (m && 1 === c) || (!m && 3 === c && n > l) ? i : 0), e._createConnectingElement(f, g, p, "vertical"), d())
                                : (f
                                      ? ((p = Math.abs(f - o)), f >= o && ((f += -1 * p), (p += i)), e._createConnectingElement(f, g + (n < l ? Math.abs(g - l) : 0), p, "horizontal", !t.inverted), (f = o))
                                      : ((f = s),
                                        (g = n),
                                        (0 === c || (!m && 3 === c) || (m && 1 === c)) && (f -= r),
                                        e._createConnectingElement(f, g, r, "horizontal", t.inverted),
                                        v && (f += r - i),
                                        k || y ? (e._createConnectingElement(f, (g -= n > l ? a : 0), a, "vertical"), (g += n < l ? a : 0)) : d("vertical")),
                                  d("horizontal")));
                    })(),
                        t.connections.map((e) => e.parentElement.removeChild(e));
                }
                _getTaskIndexById(e, t) {
                    if ("number" == typeof e) return e;
                    if ((t || (t = this._tasks), "object" == typeof e)) return t.indexOf(e);
                    if ("string" == typeof e) {
                        for (let i = 0; i < t.length; i++) {
                            if (t[i].id === e) return i;
                        }
                        return isNaN(parseInt(e)) ? -1 : parseInt(e);
                    }
                }
                _refreshTaskConnections(e) {
                    const t = this,
                        i = e instanceof HTMLElement ? e._task : e,
                        s = t._tasks.indexOf(i);
                    if (void 0 === s || (e.classList && e.classList.contains("smart-visibility-hidden"))) return;
                    let n;
                    if ((t._dragDetails && (n = t._dragDetails.relatedConnections[s]), !n)) {
                        n = {};
                        const e = t._tasks;
                        for (let i = 0; i < e.length; i++) {
                            const r = e[i].connections.filter((e) => t._getTaskIndexById(e.target) === s);
                            r.length > 0 && (n[i] = r);
                        }
                        t._dragDetails && (t._dragDetails.relatedConnections[s] = n);
                    }
                    const r = i.connections;
                    for (let e = 0; e < r.length; e++) {
                        const i = r[e];
                        t._connectTask(s + "-" + t._getTaskIndexById(i.target) + "-" + i.type);
                    }
                    if (Object.keys(n).length > 0)
                        for (const e in n) {
                            const i = n[e];
                            for (let s = 0; s < i.length; s++) t._connectTask(e + "-" + t._getTaskIndexById(i[s].target) + "-" + i[s].type);
                        }
                }
                _dragStartHandler(e) {
                    const t = e.target.closest;
                    (this._dragDetails || (t && t.call(this, "smart-gantt-chart") === this)) && e.preventDefault();
                }
                _getFirstCellObjInView(e) {
                    const t = this;
                    if ((e || (e = t._timelineCells), !e)) return;
                    const i = Math.abs(t.scrollLeft);
                    let s, n;
                    for (let t = 0; t < e.length; t++) {
                        const r = e[t];
                        if (r.left + r.width > i) {
                            s = r;
                            break;
                        }
                        n = r;
                    }
                    return !s && n && (s = i > n.left ? n : e[0]), s;
                }
                _getSubTaskLimits(e) {
                    const t = this;
                    if (!e) return;
                    const i = e._task,
                        s = i.tasks;
                    let n, r;
                    if (!i.tasks || 0 === i.tasks.length) return;
                    let a = s[0],
                        o = s[0];
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        s[e].dateEnd && s[e].dateStart && (a.dateStart || (a = t[e]), o.dateEnd || (o = t[e]), s[e].dateEnd.getTime() > o.dateEnd.getTime() && (o = s[e]), s[e].dateStart.getTime() < a.dateStart.getTime() && (a = s[e]));
                    }
                    const l = t.$.timelineTasksContainer.children,
                        d = t.$.timelineContent.offsetWidth;
                    let c;
                    if (
                        (a && ((c = l[t._tasks.indexOf(a)]), c && (n = Math.max(0, t.rightToLeft ? d - e.offsetLeft - e.offsetWidth - (d - c.offsetLeft - c.offsetWidth) : e.offsetLeft - c.offsetLeft))),
                        o && ((c = l[t._tasks.indexOf(o)]), c))
                    ) {
                        const i = t.$.taskTimelineCellsContainer.children[t._tasks.indexOf(o)];
                        if (t.rightToLeft) {
                            const t = d - e.offsetLeft - e.offsetWidth;
                            r = Math.max(t, t + i.offsetWidth - (d - c.offsetLeft));
                        } else r = Math.max(e.offsetLeft, e.offsetLeft + i.offsetWidth - (c.offsetLeft + c.offsetWidth));
                    }
                    return { min: n, max: r };
                }
                _getTaskDragLimits(e) {
                    const t = this._getTaskBarPositionLimits(e, "DateStart"),
                        i = this._getTaskBarPositionLimits(e, "DateEnd"),
                        s = this._dragDetails.timelineTask;
                    let n = {};
                    return (t.min || i.min) && (n.min = Math.max(t.min || 0, Math.max(0, (i.min || 0) - s.offsetWidth))), i.max && (n.max = Math.max(0, i.max - s.offsetWidth)), t.max && (n.max = n.max ? Math.min(t.max, n.max) : t.max), n;
                }
                _getTaskBarDateRange(e) {
                    if (!e) return;
                    const t = this.rightToLeft ? parseFloat(e.style.right) || this.$.timelineContent.offsetWidth - e.offsetLeft - e.offsetWidth : parseFloat(e.style.left) || e.offsetLeft,
                        i = parseFloat(e.style.width) || e.offsetWidth,
                        s = e._cellStart,
                        n = e._cellEnd,
                        r = e._task,
                        a = r.minDateStart,
                        o = r.maxDateEnd;
                    let l, d;
                    return (
                        (l = this._getDateFromCell(t, s)),
                        !a || ("project" === e._task.type && e._task.synchronized) || (l = new Date(Math.max(a.getTime(), l.getTime()))),
                        (d = this._getDateFromCell(t + i, n)),
                        !o || ("project" === e._task.type && e._task.synchronized) || (d = new Date(Math.min(o.getTime(), d.getTime()))),
                        { dateStart: l, dateEnd: d }
                    );
                }
                _getTaskBarDetails(e) {
                    const t = this;
                    if (!e.classList || !e.classList.contains("smart-timeline-task")) return;
                    const i = t.$.taskTimelineCellsContainer.children[t._tasks.indexOf(e._task)];
                    if (!i) return;
                    let s = new Date(i._task.dateStart);
                    const n = new Date(i._task.dateEnd),
                        r = e._cellStart,
                        a = e._cellEnd;
                    if (!r || !a) return void e.classList.add("smart-visibility-hidden");
                    if (t.snapToNearest) {
                        let s,
                            n,
                            o = e._task.dateStart,
                            l = e._task.dateEnd;
                        const d = new Date(r.date),
                            c = t._getDateFromCell(r.left + r.width, r),
                            m = new Date(a.date),
                            h = t._getDateFromCell(a.left + a.width, a);
                        return (
                            c.getTime() - o.getTime() >= c.getTime() - d.getTime() ? ((o = d), (s = r.left)) : ((o = c), (s = r.left + r.width)),
                            "milestone" !== e._task.type && (h.getTime() - l.getTime() >= l.getTime() - m.getTime() ? ((l = m), (n = a.left - s)) : ((l = h), (n = a.left - s + a.width))),
                            (e._task.dateEnd = l),
                            l.getTime() < o.getTime() && (o = new Date(l)),
                            (e._task.dateStart = o),
                            { left: s, width: n, top: i.offsetTop }
                        );
                    }
                    let o, l, d, c, m, h;
                    switch (t.view) {
                        case "year": {
                            (d = new Date(s.getFullYear(), s.getMonth() + 1, 0).getDate()), (c = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate());
                            const e = s.getHours() / 24 + s.getMinutes() / 1440 + s.getSeconds() / 86400,
                                t = n.getHours() / 24 + n.getMinutes() / 1440 + n.getSeconds() / 86400;
                            (o = r.left + ((s.getDate() - 1 + e) / d) * r.width), (l = a.left + ((n.getDate() - 1 + t) / c) * a.width - o);
                            break;
                        }
                        case "month":
                            (m = (parseFloat(s.getHours() + "." + s.getMinutes() + s.getSeconds()) / 24) * (r.width / 7)),
                                (h = (parseFloat(n.getHours() + "." + n.getMinutes() + n.getSeconds()) / 24) * (r.width / 7)),
                                (o = r.left + (s.getDay() / 7) * r.width + m),
                                (l = a.left + (n.getDay() / 7) * a.width - o + h);
                            break;
                        case "week":
                            (m = (parseFloat(s.getHours() + "." + s.getMinutes() + s.getSeconds()) / 24) * r.width),
                                (h = (parseFloat(n.getHours() + "." + n.getMinutes() + n.getSeconds()) / 24) * r.width),
                                (o = r.left + m),
                                (l = a.left + (h - m) - r.left);
                            break;
                        case "day":
                            (m = (parseFloat(s.getMinutes() + s.getSeconds() / 60) / 60) * r.width), (h = (parseFloat(n.getMinutes() + n.getSeconds() / 60) / 60) * r.width), (o = r.left + m), (l = a.left + (h - m) - r.left);
                    }
                    return { width: "milestone" === i._task.type ? "" : l, left: o, top: i.offsetTop };
                }
                _getTimelineTaskCellByDate(e, t) {
                    if (!t || !e) return;
                    const i = this;
                    e.classList && e.classList.contains("smart-timeline-task") && (e = i.$.taskTimelineCellsContainer.children[i._tasks.indexOf(e._task)]);
                    const s = i._timelineCells;
                    let n;
                    e: for (let e = 0; e < s.length; e++) {
                        const r = s[e];
                        switch (i.view) {
                            case "year":
                                if (r.date.getYear() === t.getYear() && r.date.getMonth() === t.getMonth()) {
                                    n = s[e];
                                    break e;
                                }
                                break;
                            case "month": {
                                let i = new Date(r.date);
                                if ((i.setDate(i.getDate() + (6 - i.getDay()) + 1), i.setMilliseconds(i.getMilliseconds() - 1), t.getTime() >= r.date.getTime() && t.getTime() <= i.getTime())) {
                                    n = s[e];
                                    break e;
                                }
                                break;
                            }
                            case "week":
                                if (r.date.getYear() === t.getYear() && r.date.getMonth() === t.getMonth() && r.date.getDate() === t.getDate()) {
                                    n = s[e];
                                    break e;
                                }
                                break;
                            case "day":
                                if (r.date.getYear() === t.getYear() && r.date.getMonth() === t.getMonth() && r.date.getDate() === t.getDate() && r.date.getHours() === t.getHours()) {
                                    n = s[e];
                                    break e;
                                }
                        }
                    }
                    return n;
                }
                _handleInverted(e) {
                    const t = this;
                    function i(e) {
                        e || (e = "task");
                        const i = t.$[`${e}Splitter`],
                            [s, n, r, a, o] =
                                "task" === e
                                    ? [t.$.treeSplitterItem, t.$.timelineSplitterItem, t, t.$.timelineContent, "scrollTop"]
                                    : [t.$.resourceTreeItem, t.$.resourceTimelineSplitterItem, t.$.resourceVerticalScrollBar, t.$.resourceTimelineContent, "value"],
                            l = t.treeSize !== s.size ? s.style[i._measurements.dimension] : t.treeSize;
                        (s.size = ""), i.removeChild(n), (t.inverted && !t.rightToLeft) || (!t.inverted && t.rightToLeft) ? i.insertBefore(n, s) : i.appendChild(n), (s.size = l), (a.scrollTop = r[o]);
                    }
                    (!e || t.inverted || t.rightToLeft) && (i("task"), i("resource"));
                }
                _createResourceTimeline() {
                    const e = this,
                        t = e._resources.filter((e) => !e.hidden);
                    if ((e._handleResourcePanelVisibility(), !e.$.mainSplitter.contains(e.$.resourceSplitterItem))) return;
                    const i = e.$.resourceSplitterItemHeader.innerHTML;
                    ((e.resourcePanelHeaderTemplate && !i) || (!e.resourcePanelHeaderTemplate && i)) && e._handleHeaderTemplate("resource"), e._recycleResourceHeaderCells(), (e.$.resourceTimelineCellsContainer.innerHTML = "");
                    for (let i = 0; i < t.length; i++) {
                        const s = document.createElement("div");
                        s.classList.add("smart-timeline-resource-cell"), (s._resource = t[i]), e._refreshResourceTimeline(s), e.$.resourceTimelineCellsContainer.appendChild(s);
                    }
                    e.$.container.style.setProperty("--smart-gantt-chart-resource-timeline-content-height", e.$.resourceTimelineCellsContainer.offsetHeight + "px"),
                        (e.$.resourceTimelineContent.style.width = e.$.timelineContent.style.width),
                        e._synchronizeSplitters(e.$.taskSplitter, e.$.resourceSplitter),
                        (e.$.resourceTimeline.scrollLeft = e.$.timeline.scrollLeft),
                        e._createTreeColumns(e.$.resourceTreeSplitter),
                        e.$.resourceTree.refresh(),
                        e._refresh(),
                        e._highlightAssignedItem("task", e.selectedIndexes[0]);
                }
                _handleResourcePanelVisibility() {
                    const e = this,
                        t = e._resources.filter((e) => !e.hidden),
                        i = e.$.mainSplitter,
                        s = e.$.resourceSplitterItem,
                        n = e.$.taskSplitterItem;
                    if (!t || !t.length || e.hideResourcePanel)
                        return (
                            s.size || (s._size = s.style[i._measurements.dimension]),
                            e._resourceScrollView && (e._resourceScrollView.unlisten(), delete e._resourceScrollView),
                            e._handleResourceTreeEvents(),
                            i.contains(s) && (i.removeChild(s), e._refresh()),
                            (n.size = ""),
                            void (n.min = "")
                        );
                    i.contains(s) ||
                        ((s.size = s._size || e.resourcePanelSize),
                        e._handleResourceTreeEvents(!0),
                        i.appendChild(s),
                        e.$.taskSplitterItem._setSize("size", e.taskPanelSize),
                        (e._resourceScrollView = new Smart.Utilities.Scroll(e.$.resourceSplitterItem, e.$.horizontalScrollBar, e.$.resourceVerticalScrollBar)));
                }
                _refreshResourceTimeline(e) {
                    const t = this,
                        i = t._resources.filter((e) => !e.hidden);
                    !t.hideResourcePanel && i.length && (e ? t._refreshResourceTimelineContent(e._resource, e) : (t._recycleResourceHeaderCells(), (t.$.resourceTimelineContent.style.width = t.$.timelineContent.style.width)));
                }
                _refreshResourceTimelineContent(e, t) {
                    const i = this,
                        s = i._resources.indexOf(e);
                    if (s < 0) return;
                    const n = i.$.timelineTasksContainer.children,
                        r = i.$.resourceTimelineCellsContainer,
                        a = i._getResourceTasks(e, !0);
                    function o() {
                        const t = r.children;
                        for (let i = 0; i < t.length; i++) if (t[i]._resource === e) return t[i];
                    }
                    if (!n.length) {
                        const e = r.children;
                        for (let t = 0; t < e.length; t++) e[t].innerHTML = "";
                        return;
                    }
                    if (!a.length || e.hidden) {
                        const e = o();
                        return void (e && (e.innerHTML = ""));
                    }
                    if (!t && !(t = o())) return;
                    let l = t.children;
                    if (!l) return;
                    const d = i.$.timelineViewCells.children,
                        c = d.length;
                    let m;
                    if (l.length !== c) {
                        for (m = document.createDocumentFragment(); l.length; ) m.appendChild(t.firstElementChild);
                        if (((l = m.children), l.length > c)) for (; l.length && l.length !== c; ) m.removeChild(m.firstElementChild);
                        else if (l.length < c) for (; l.length !== c; ) m.appendChild(d[0].cloneNode());
                        i.hasAnimation && (t.appendChild(m), (l = t.children));
                    }
                    for (let t = 0; t < l.length; t++) {
                        const i = l[t],
                            s = d[t];
                        i.classList.remove("hide-left-border", "hide-right-border"),
                            i.classList.add("smart-resource-timeline-view-cell"),
                            (i.style.width = s.style.width),
                            (i.style.left = s.style.left),
                            (i.style.right = s.style.right),
                            i.removeAttribute("load"),
                            (i.style.height = ""),
                            (i.innerHTML = ""),
                            e.class && i.classList.add(e.class);
                    }
                    function h(e, t) {
                        const s = e.dateStart,
                            n = e.dateEnd,
                            r = t._date,
                            a = ((e) => {
                                switch (i.view) {
                                    case "year":
                                        return new Date(e.getFullYear(), e.getMonth() + 1, 0, 23, 59, 59, 999);
                                    case "month":
                                        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 6 - e.getDay(), 23, 59, 59, 999);
                                    case "week":
                                        return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
                                    case "day":
                                        return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), 59, 59, 999);
                                }
                            })(r),
                            o = e.dateStart.getTime() < r.getTime() ? r : s,
                            l = n.getTime() > a.getTime() ? a : n,
                            d = Math.round(i._getWorkingTime(o, l) / 36e5);
                        return { value: d, max: o.getTime() === r.getTime() && l.getTime() === a.getTime() ? d : Math.round(i._getWorkingTime(r, a) / 36e5) };
                    }
                    let u = {};
                    for (let t = 0; t < a.length; t++) {
                        const r = a[t],
                            o = i._tasks.indexOf(r),
                            c = n[o],
                            m = c._cellStart.date,
                            f = c._cellEnd.date;
                        for (let t = 0; t < d.length; t++) {
                            let n,
                                a,
                                c = d[t],
                                g = c._date;
                            if (g.getTime() < m.getTime() || g.getTime() > f.getTime() || r.dateEnd.getTime() === g.getTime()) continue;
                            if ((u[t] && u[t].indexOf(o) < 0 ? u[t].push(o) : u[c] || (u[t] = [o]), "custom" === i.resourceTimelineMode)) {
                                if (!i.resourceTimelineFormatFunction) continue;
                                (c = l[t]), (c.innerHTML = i.resourceTimelineFormatFunction.call(i, u[t] || [], s, new Date(g)) || "");
                                continue;
                            }
                            if ("tasks" === i.resourceTimelineView) (n = 1), (a = e.maxCapacity);
                            else if ("hours" === i.resourceTimelineView) {
                                const t = h(r, c),
                                    i = t.max / 24;
                                (n = Math.round((t.value / t.max) * e.capacity * i)), (a = Math.min(t.max, Math.round(e.maxCapacity * i)));
                            } else {
                                if (!i.resourceTimelineFormatFunction) continue;
                                let e = i.resourceTimelineFormatFunction.call(i, u[t] || [], s, new Date(g));
                                if (((c = l[t]), null != e))
                                    if (((e = "object" != typeof e ? [e] : Object.values(e)), 2 === e.length)) (n = parseFloat(e[0]) || 0), (a = parseFloat(e[1]) || 0);
                                    else if (1 === e.length) {
                                        c.setAttribute("load", e[0]);
                                        continue;
                                    }
                            }
                            c = l[t];
                            const p = (parseFloat(c.getAttribute("load")) || 0) + (n || 0);
                            if ((p > a ? c.classList.add("warning") : c.classList.remove("warning"), "histogram" !== i.resourceTimelineMode)) p && c.setAttribute("load", p);
                            else {
                                const e = Math.min(100, 100 * parseFloat((p / a).toFixed(2))),
                                    t = c.previousElementSibling;
                                if (t) {
                                    const i = parseFloat(t.style.height) || 0;
                                    e
                                        ? i === e
                                            ? (c.classList.add("hide-left-border"), t.classList.add("hide-right-border"))
                                            : i > e
                                            ? (c.classList.add("hide-left-border"), t.classList.remove("hide-right-border"))
                                            : i < e && (c.classList.remove("hide-left-border"), t.classList.add("hide-right-border"))
                                        : (c.classList.remove("hide-left-border"), t.classList.remove("hide-right-border"));
                                }
                                (c.style.height = e + "%"), p && c.setAttribute("load", p + "/" + a);
                            }
                        }
                    }
                    !i.hasAnimation && m && t.appendChild(m);
                }
                _handleResourceTreeEvents(e) {
                    const t = this;
                    if (e) {
                        if (t._isResourceTreeListening) return;
                        t.$resourceTree.listen("blur", t._treeBlurHandler.bind(t)), t.$resourceTree.listen("change", t._taskTreeChangeHandler.bind(t)), (t._isResourceTreeListening = !0);
                    } else t.$resourceTree.unlisten("blur"), t.$resourceTree.unlisten("change"), delete t._isResourceTreeListening;
                }
                _recycleResourceHeaderCells() {
                    const e = this;
                    if (!e.$.mainSplitter.contains(e.$.resourceSplitterItem)) return;
                    const t = e.$.resourceTimelineViewCells,
                        i = t.children,
                        s = e.$.timelineViewCells.children;
                    let n = document.createDocumentFragment();
                    if (s.length === i.length) {
                        for (; i.length; ) n.appendChild(t.firstElementChild);
                        for (let e = 0; e < s.length; e++) {
                            const t = s[e],
                                i = n.children[e];
                            (i.style.left = t.style.left),
                                (i.style.right = t.style.right),
                                (i.style.width = t.style.width),
                                (i.innerHTML = t.innerHTML),
                                t.hasAttribute("weekend") ? i.setAttribute("weekend", "") : i.removeAttribute("weekend"),
                                t.hasAttribute("nonworking") ? i.setAttribute("nonworking", "") : i.removeAttribute("nonworking", "");
                        }
                    } else {
                        t.innerHTML = "";
                        for (let e = 0; e < s.length; e++) n.appendChild(s[e].cloneNode(!0));
                    }
                    t.appendChild(n), e.$.resourceTimelineCellsContainer.children.length && e._resources.forEach((t) => e._refreshResourceTimelineContent(t));
                }
                _refreshResourceScrollBar() {
                    const e = this,
                        t = e.$.resourceVerticalScrollBar;
                    if (!e.$.mainSplitter.contains(e.$.resourceSplitter)) return;
                    const i = e.$.resourceTimelineCellsContainer.offsetHeight - e.$.resourceTimelineContent.offsetHeight;
                    0 === i && "visible" === e.verticalScrollBarVisibility ? (t.max = 1) : (t.max = i),
                        (t.disabled = "disabled" === e.verticalScrollBarVisibility || e.disabled || i <= 0),
                        !e.$.container.classList.contains("vscroll") && t.disabled
                            ? t.classList.add("smart-hidden")
                            : (t.classList.remove("smart-hidden"),
                              t.refresh(),
                              e.$.container.classList.contains("hscroll") ? e.$.horizontalScrollBar.classList.add("bottom-corner") : e.$.container.classList.contains("vscroll") || e.$.horizontalScrollBar.classList.remove("bottom-corner"));
                }
                _handleResources(e) {
                    const t = this,
                        i = e ? [e] : t._tasks;
                    t._resources || (t._resources = []);
                    for (let e = 0; e < i.length; e++) {
                        let s = i[e].resources;
                        Array.isArray(s) || (s = [s].reduce((e, t) => e.concat(t), []));
                        for (let n = 0; n < s.length; n++) {
                            let r = s[n];
                            if ("object" != typeof r || !r || void 0 === r.id || null === r.id) {
                                "number" == typeof r && (s[n] = r + "");
                                continue;
                            }
                            let a = t._resources.find((e) => e.id && e.id.toString() === r.id.toString()) || {};
                            t._setResource(a, r, i[e]), (s[n] = a.id), Object.values(a).length && !t._resources.includes(a) && (t._resources.push(a), t._refreshResource(a));
                        }
                    }
                }
                _refreshAssignedResources(e, t = []) {
                    const i = this;
                    if (!e || i._tasks.indexOf(e) < 0) return;
                    const s = i._getTaskResources(e, !0);
                    for (let e = 0; e < s.length; e++) {
                        const n = s[e];
                        let r = [];
                        i.resourceColumns.forEach((e) => {
                            void 0 !== e.formatFunction && r.push(e.value);
                        }),
                            r.concat(t),
                            i._refreshResourceTimelineContent(n),
                            t.includes("workload") ? i._refreshResource(n, "workload") : t.includes("progress") && i._refreshResource(n, "progress"),
                            r.length && i._refreshTreeColumnsData(n, r, "resource");
                    }
                }
                _refreshResource(e, t) {
                    const i = this;
                    if (!i._resources.length) return;
                    const s = i._getResourceTasks(e, !0);
                    switch (t) {
                        case "progress":
                            e.progress = parseFloat((s.reduce((e, t) => e + t.progress, 0) / s.length).toFixed(2));
                            break;
                        case "workload":
                            e.workload = parseFloat(((i._convertDuration(s.reduce((e, t) => e + t.duration, 0)) / 864e5) * e.maxCapacity).toFixed(2));
                            break;
                        default:
                            (e.progress = parseFloat((s.reduce((e, t) => e + t.progress, 0) / s.length).toFixed(2))),
                                (e.workload = parseFloat(((i._convertDuration(s.reduce((e, t) => e + t.duration, 0)) / 864e5) * e.maxCapacity).toFixed(2)));
                    }
                    i._refreshResourceTimelineContent(e);
                }
                _setResource(e, t) {
                    if (t && "object" == typeof t)
                        return (
                            e.id ? (e.id = e.id.trim()) : (e.id = (t.id + "").trim()),
                            (e.class = t.class || e.class),
                            (e.minCapacity = t.minCapacity || e.minCapacity || 0),
                            (e.maxCapacity = t.maxCapacity || e.maxCapacity || 24),
                            (e.progress = t.progress || e.progress || 0),
                            (e.capacity = t.capacity || e.capacity || 8),
                            (e.type = t.type || e.type),
                            (e.hidden = !!("boolean" == typeof t.hidden ? t.hidden : e.hidden)),
                            t.label ? (e.label = t.label) : void 0 === e.label && (e.label = ""),
                            t.value && (e.value = t.value),
                            e
                        );
                }
                insertResource(e, t) {
                    const i = this,
                        s = i._resources;
                    if ((1 === arguments.length && (t = arguments[0]), "object" != typeof t))
                        return void i.error(i.localize("incorrectArgument", { elementType: i.nodeName.toLowerCase(), methodName: "insertResources", argumentName: "resource" }));
                    if (t.id && s.find((e) => e.id && e.id.toString() === t.id.toString())) return void i.updateResource(t.id, t);
                    let n, r, a;
                    if ((t.assignedTo && (n = [t.assignedTo].reduce((e, t) => e.concat(t, []))), !(t = i._setResource({}, t)))) return;
                    "number" != typeof e || isNaN(e)
                        ? "string" == typeof e
                            ? ((r = s.find((t) => t.id && t.id.toString() === e.toString())), r || ((r = i._getItemByTreeIndex("resource", e)), r && (a = e !== i._getItemPath(r, "resource"))))
                            : "object" == typeof e && (r = s[i._getItemIndex(e, "resource")])
                        : (r = s[e]);
                    const o = s.slice(0);
                    (e = s.indexOf(r)) < 0 ? s.push(t) : s.splice(e, 0, t);
                    const l = i._tasks;
                    if (l.length) {
                        if (void 0 !== n) {
                            let e = [];
                            Array.isArray(n) || (n = [n]),
                                n.forEach((t) => {
                                    "number" == typeof t ? e.push(l[t]) : (e = e.concat(l.filter((e) => e.id && t.toString() === e.id.toString())));
                                });
                            for (let i = 0; i < e.length; i++) {
                                const s = e[i];
                                s.disableResources || s.resources.includes(t.id.toString()) || s.resources.push(t.id);
                            }
                            if (i._isUpdating) return void (i._isUpdating.type.resource = !0);
                            i._highlightAssignedItem("task", i.selectedIndexes[0]);
                        }
                        if (i.taskColumns.find((e) => "resources" === e.value)) {
                            if (i._isUpdating) return (i._isUpdating.type.resource = !0), void (i._isUpdating.type.task = !0);
                            if ("resource" !== i.view && i._view) i._refreshTimeline();
                            else {
                                const e = i._tasks.filter((e) => e.resources.includes(t.id));
                                for (let t = 0; t < e.length; t++) i._refreshTreeColumnsData(e[t], ["resources"]);
                            }
                        }
                    }
                    if (i._isUpdating) i._isUpdating.type.resource = !0;
                    else if ((i._handleResourcePanelVisibility(), i.$.mainSplitter.contains(i.$.resourceSplitter) && !t.hidden)) {
                        if (r && r.hidden)
                            for (let t = e; t < o.length; t++) {
                                const e = o[t];
                                if (!e.hidden) {
                                    r = e;
                                    break;
                                }
                            }
                        i._insertTimelineResource(o.filter((e) => !e.hidden).indexOf(r), t, a);
                    }
                }
                _insertTimelineResource(e, t, i) {
                    const s = this.$.resourceTimelineCellsContainer,
                        n = document.createElement("div");
                    n.classList.add("smart-timeline-resource-cell"),
                        (n._resource = t),
                        this._refreshResourceTimelineContent(t, n),
                        this.$.resourceTimelineCellsContainer.insertBefore(n, e > -1 ? s.children[e] : void 0),
                        this.$.container.style.setProperty("--smart-gantt-chart-resource-timeline-content-height", s.offsetHeight + "px"),
                        this._refreshResourceScrollBar(),
                        this._insertNewTreeItem(e, t, i, "resource"),
                        this.$.resourceTree.refresh(),
                        this._highlightAssignedItem("task", this.selectedIndexes[0]);
                }
                updateResource(e, t) {
                    const i = this,
                        s = i._resources;
                    if (void 0 === e) return;
                    let n;
                    if (
                        ("number" != typeof e || isNaN(e)
                            ? "string" == typeof e
                                ? ((n = s.find((t) => t.id && t.id.toString() === e.toString())), n || (n = i._getItemByTreeIndex("resource", e)))
                                : "object" == typeof e && (n = s[i._getItemIndex(e, "resource")])
                            : (n = s[e]),
                        !n)
                    )
                        return;
                    const r = n.hidden;
                    if ((i._setResource(n, t), i._isUpdating)) return void (i._isUpdating.type.resource = !0);
                    if (i.taskColumns.find((e) => "resources" === e.value))
                        if ("resource" !== i.view && i._view) i._refreshTimeline();
                        else {
                            const e = i._tasks.filter((e) => e.resources.includes(n.id));
                            for (let t = 0; t < e.length; t++) i._refreshTreeColumnsData(e[t], ["resources"]);
                        }
                    if (r !== n.hidden) {
                        const e = i.$.resourceTimelineCellsContainer;
                        if (n.hidden)
                            for (let t = 0; t < e.children.length; t++) {
                                const s = e.children[t];
                                if (s._resource === n) {
                                    e.removeChild(s), i._removeTreeItem(t, "resource"), i.$.container.style.setProperty("--smart-gantt-chart-resource-timeline-content-height", i.$.resourceTimelineCellsContainer.offsetHeight + "px");
                                    break;
                                }
                            }
                        else i._insertTimelineResource(s.filter((e) => !e.hidden).indexOf(n), n);
                        return i._refresh(), void i._handleResourcePanelVisibility();
                    }
                    i._refreshTreeColumnsData(n, void 0, "resource");
                    const a = i.$.resourceTimelineCellsContainer.children;
                    for (let e = 0; e < a.length; e++) {
                        const t = a[e];
                        t._resource === n && i._refreshResourceTimelineContent(n, t);
                    }
                }
                removeResource(e) {
                    const t = this,
                        i = t._resources;
                    if (void 0 === e) return;
                    let s;
                    if (
                        ("number" != typeof e || isNaN(e)
                            ? "string" == typeof e
                                ? ((s = i.find((t) => t.id && t.id.toString() === e.toString())), s || (s = t._getItemByTreeIndex("resource", e)))
                                : "object" == typeof e && (s = i[t._getItemIndex(e, "resource")])
                            : (s = i[e]),
                        !s)
                    )
                        return;
                    const n = i.indexOf(s);
                    if (t._isUpdating) return i.splice(i.indexOf(s), 1), (t._isUpdating.type.resource = !0), void (t._isUpdating.type.task = !0);
                    if ((i.splice(i.indexOf(s), 1), t.taskColumns.find((e) => "resources" === e.value)))
                        if ("resource" !== t.view && t._view) t._refreshTimeline();
                        else {
                            const e = t._tasks.filter((e) => e.resources.includes(s.id));
                            for (let i = 0; i < e.length; i++) t._refreshTreeColumnsData(e[i], ["resources"]);
                        }
                    i.filter((e) => !e.hidden).length
                        ? t.$.mainSplitter.contains(t.$.resourceSplitter) &&
                          (t._removeTreeItem(n, "resource"),
                          t.$.resourceTimelineCellsContainer.removeChild(t.$.resourceTimelineCellsContainer.children[n]),
                          t.$.container.style.setProperty("--smart-gantt-chart-resource-timeline-content-height", t.$.resourceTimelineCellsContainer.offsetHeight + "px"),
                          t._refreshResourceScrollBar())
                        : t._createResourceTimeline();
                }
                _getResourceTasks(e, t) {
                    const i = this._resources,
                        s = this._tasks;
                    if (!i.length || !s.length) return;
                    let n;
                    if (("object" == typeof e ? (n = i.find((t) => t.id && t.id.toString() === e.id.toString())) : ("string" != typeof e && "number" != typeof e) || (n = i.find((t) => t.id && t.id.toString() === e.toString()) || i[e]), !n))
                        return;
                    let r = [];
                    for (let e = 0; e < s.length; e++) {
                        if (!s[e].resources.includes(n.id)) continue;
                        const i = s[e];
                        r.push(t ? i : { id: i.id, index: s.indexOf(i), label: i.label, type: i.type, hidde: i.hidden, expanded: i.expanded, dateStart: i.dateStart, dateEnd: i.dateEnd, progress: i.progress, duration: i.duration });
                    }
                    return r;
                }
                _getTaskResources(e, t) {
                    const i = this,
                        s = i._tasks;
                    let n;
                    if (null == e || !s || !s.length) return [];
                    if (
                        ("string" == typeof e
                            ? ((n = s.find((e) => e.id && e.id.toString() === arguments[0].toString())), n || (n = s[i._tasks.indexOf(i._getItemByTreeIndex("task", e))]))
                            : "number" == typeof e
                            ? (n = s[e])
                            : "object" == typeof e && (n = s[i._getItemIndex(e, "task")]),
                        void 0 === n)
                    )
                        return [];
                    const r = [n.resources].reduce((e, t) => e.concat(t), []);
                    let a = [],
                        o = i._resources.filter((e) => !e.hidden);
                    for (let e = 0; e < r.length; e++) {
                        const s = i._resources.find((t) => t.id && t.id.toString() === r[e].toString());
                        s &&
                            a.push(
                                t
                                    ? s
                                    : {
                                          id: s.id,
                                          index: o.indexOf(s),
                                          label: s.label,
                                          value: s.value,
                                          hidden: s.hidden,
                                          type: s.type,
                                          capacity: s.capacity,
                                          maxCapacity: s.maxCapacity,
                                          minCapacity: s.minCapacity,
                                          progress: s.progress,
                                          formatFunction: s.formatFunction,
                                      }
                            );
                    }
                    return a;
                }
                _resourceValidator(e, t) {
                    return Array.isArray(t) || t instanceof Smart.ObservableArray || "number" == typeof t || "string" == typeof t || null == t
                        ? t
                        : (this.error(this.localize("invalidValue", { elementType: this.nodeName.toLowerCase(), property: "resources", typeOne: "array", typeTwo: "number" })), null);
                }
                _handleTaskProgressChange(e) {
                    const t = this,
                        i = t._dragDetails.target,
                        s = i.closest(".smart-timeline-task");
                    if (t.disableTaskProgressChange) return;
                    if (!t.hasAttribute("progress-change")) {
                        if (t.$.fireEvent("progressChangeStart", { index: t._tasks.indexOf(s._task), progress: s._task.progress || 0 }).defaultPrevented) return void delete t._dragDetails.target;
                        t.setAttribute("progress-change", ""), (t._scrollView.disableSwipeScroll = !0);
                    }
                    const n = s.querySelector(".smart-timeline-task-progress"),
                        r = n.parentElement,
                        a = r.getBoundingClientRect().left,
                        o = r.offsetWidth,
                        l = e.pageX - window.pageXOffset;
                    t._dragDetails.progress || (t._dragDetails.progress = n.offsetWidth), (t._dragDetails.progress = Math.max(0, Math.min(o, t._dragDetails.progress + (t.rightToLeft ? -1 : 1) * (l - t._dragDetails.coordinates.x))));
                    const d = (t._dragDetails.timelineTask._task.progress = (t._dragDetails.progress / o) * 100);
                    (t._dragDetails.coordinates.x = Math.max(a + t._dragDetails.offset.x, Math.min(a + o + t._dragDetails.offset.x, l))),
                        (i.style[t.rightToLeft ? "left" : "right"] = ""),
                        (i.style[t.rightToLeft ? "right" : "left"] = n.style.width = d + "%");
                    const c = t._dragDetails.timelineTask._task;
                    (c.progress = parseFloat(d.toFixed(2))),
                        t._refreshTreeColumnsData(c, ["progress"]),
                        t._resourceTreeRefreshTimeout && clearTimeout(t._resourceTreeRefreshTimeout),
                        (t._resourceTreeRefreshTimeout = setTimeout(function () {
                            t._refreshAssignedResources(c, ["progress"]), delete t._resourceTreeRefreshTimeout;
                        }, t.resourcePanelRefreshRate));
                }
                _handleTaskBarDrag(e) {
                    const t = this;
                    if (t.disableTaskDrag) return;
                    if (Math.abs(e.pageX - t._dragDetails.coordinates.x) <= 5) return void (t._scrollView.disableSwipeScroll = !0);
                    const i = t._dragDetails.timelineTask,
                        s = t.$.taskTimelineCellsContainer.children[t._tasks.indexOf(i._task)];
                    if (!t.hasAttribute("dragged")) {
                        if (t.$.fireEvent("dragStart", { index: t._tasks.indexOf(i._task), dateStart: i._task.dateStart, dateEnd: i._task.dateEnd }).defaultPrevented) return void delete t._dragDetails.timelineTask;
                        t.setAttribute("dragged", "");
                        const e = t._createDelimiter("min-date"),
                            n = t._createDelimiter("max-date");
                        e && s.appendChild(e), n && s.appendChild(n);
                    }
                    t._dragDetails.position || (t._dragDetails.position = { x: t._dragDetails.originalPosition.x, y: t._dragDetails.originalPosition.y });
                    const n = s.getBoundingClientRect().left,
                        r = s.offsetWidth,
                        a = i.offsetWidth,
                        o = t._dragDetails.min.left || 0,
                        l = t._dragDetails.max.left,
                        d = e.pageX - window.pageXOffset;
                    let c = 0;
                    (t._dragDetails.position.x = Math.max(o, Math.min(r - a, t._dragDetails.position.x + (t.rightToLeft ? -1 : 1) * (d - t._dragDetails.coordinates.x)))),
                        void 0 !== l && ((t._dragDetails.position.x = Math.min(l, t._dragDetails.position.x)), (c = r - a - l)),
                        t.rightToLeft
                            ? (t._dragDetails.coordinates.x = Math.max(n + t._dragDetails.offset.x + c, Math.min(n + r - (a - t._dragDetails.offset.x + o), d)))
                            : (t._dragDetails.coordinates.x = Math.max(n + t._dragDetails.offset.x + o, Math.min(n + r - (a - t._dragDetails.offset.x + c), d)));
                    const m = t._dragDetails.position.x - (t.rightToLeft ? s.offsetWidth - i.offsetLeft - i.offsetWidth : i.offsetLeft);
                    (i.style[t.rightToLeft ? "right" : "left"] = t._dragDetails.position.x + "px"),
                        t._refreshTask(i),
                        t._refreshProject(i._task.project),
                        "project" === i._task.type && i._task.dragProject && t._refreshProjectTasks(s, m),
                        t.$.mainSplitter.contains(t.$.resourceSplitter) &&
                            (t._resourceTreeRefreshTimeout && clearTimeout(t._resourceTreeRefreshTimeout),
                            (t._resourceTreeRefreshTimeout = setTimeout(function () {
                                t._refreshAssignedResources(i._task), delete t._resourceTreeRefreshTimeout;
                            }, t.resourcePanelRefreshRate)));
                }
                _handleTaskBarResize(e) {
                    const t = this;
                    if (t.disableTaskResize) return;
                    const i = t._dragDetails.timelineTask,
                        s = t.$.taskTimelineCellsContainer.children[t._tasks.indexOf(i._task)];
                    if (!t.hasAttribute("resized")) {
                        if (t.$.fireEvent("resizeStart", { index: t._tasks.indexOf(i._task), dateStart: i._task.dateStart, dateEnd: i._task.dateEnd }).defaultPrevented) return void t.$.timeline.removeAttribute("task-bar-hovered");
                        t.setAttribute("resized", ""), (t._scrollView.disableSwipeScroll = !0);
                    }
                    t._dragDetails.position || (t._dragDetails.position = { x: t._dragDetails.originalPosition.x, y: t._dragDetails.originalPosition.y }),
                        t._dragDetails.size || (t._dragDetails.size = { width: t._dragDetails.originalSize.width });
                    const n = t.$.timeline.getAttribute("task-bar-hovered"),
                        r = s.getBoundingClientRect().left,
                        a = t._dragDetails.min.width || 0,
                        o = t._dragDetails.max.width,
                        l = e.pageX - window.pageXOffset;
                    let d = t._dragDetails.size.width,
                        c = "object" == typeof e ? l - t._dragDetails.coordinates.x : e;
                    if (("left" === n && !t.rightToLeft) || ("right" === n && t.rightToLeft))
                        if (t.rightToLeft) {
                            c < 0 ? (c = -1 * Math.min(Math.abs(c), d - (a || 0))) : void 0 !== o && (c = Math.min(o - d, Math.abs(c))), (d = t._dragDetails.size.width = Math.max(a, Math.min(s.offsetWidth - i.offsetLeft, d + c)));
                            const e = i.offsetLeft;
                            (i.style.left = ""),
                                (i.style.right = Math.max(0, (parseFloat(i.style.right) || s.offsetWidth - i.offsetLeft - i.offsetWidth) - c) + "px"),
                                (t._dragDetails.coordinates.x = Math.max(r + i.offsetLeft + a, Math.min(r + e + d, l)));
                        } else
                            c > 0 ? (c = Math.min(c, d - (a || 0))) : void 0 !== o && (c = -1 * Math.min(o - d, Math.abs(c))),
                                (d = t._dragDetails.size.width = Math.max(a, Math.min(i.offsetLeft + d, d - c))),
                                (i.style.right = ""),
                                (i.style.left = Math.max(0, (parseFloat(i.style.left) || i.offsetLeft) + c) + "px"),
                                (t._dragDetails.coordinates.x = Math.max(r + i.offsetLeft, Math.min(r + i.offsetLeft + d - a, l)));
                    else
                        t.rightToLeft
                            ? (c < 0 && void 0 !== o && (c = -1 * Math.min(o - d, Math.abs(c))),
                              (d = t._dragDetails.size.width = Math.max(a, Math.min(i.offsetLeft + i.offsetWidth, d - c))),
                              (i.style.width = t._dragDetails.size.width + "px"),
                              (t._dragDetails.coordinates.x = Math.max(r + i.offsetLeft, Math.min(r + i.offsetLeft + d - a, l))))
                            : (c > 0 && void 0 !== o && (c = Math.min(o - d, c)),
                              (d = t._dragDetails.size.width = Math.max(a, Math.min(s.offsetWidth - i.offsetLeft, d + c))),
                              (t._dragDetails.coordinates.x = Math.max(r + i.offsetLeft + a, Math.min(r + i.offsetLeft + (o || d), l))));
                    (i.style.width = t._dragDetails.size.width + "px"),
                        t._refreshTask(i),
                        t._refreshProject(i._task.project),
                        t._resourceTreeRefreshTimeout && clearTimeout(t._resourceTreeRefreshTimeout),
                        (t._resourceTreeRefreshTimeout = setTimeout(function () {
                            t._refreshAssignedResources(i._task, ["workload"]), delete t._resourceTreeRefreshTimeout;
                        }, t.resourcePanelRefreshRate));
                }
                _handleTimelineConnectionHover(e) {
                    const t = this;
                    if (!(t.shadowRoot || t).contains(e)) return;
                    const i = t.$.timelineConnectionsContainer.children,
                        s = e.closest(".smart-task-connection");
                    if (s || !t.$.timelineConnectionsContainer.querySelector(".smart-task-connection[hover]")) {
                        if (s) {
                            const e = s.getAttribute("connection-id");
                            for (let t = 0; t < i.length; t++) {
                                const s = i[t];
                                s.getAttribute("connection-id") === e ? s.setAttribute("hover", "") : s.removeAttribute("hover");
                            }
                            t._hoveredConnectionTasks = s.tasks;
                        }
                    } else for (let e = 0; e < i.length; e++) i[e].removeAttribute("hover");
                }
                _handleTimelineHover(e, t) {
                    const i = this,
                        s = e.originalEvent || e;
                    let n = s.pageX && Smart.Utilities.Core.isMobile ? document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) : s.target;
                    function r() {
                        if (i._hoveredTimelineTask) {
                            const e = i._tasks.indexOf(i._hoveredTimelineTask._task);
                            e > -1 && i.$.taskTimelineCellsContainer.children[e].removeAttribute("hover"), i._hoveredTimelineTask.removeAttribute("hover"), i.$.timeline.removeAttribute("task-bar-hovered"), delete i._hoveredTimelineTask;
                        }
                    }
                    if (
                        (s.pageX && i.shadowRoot && n === i && (n = s.pageX && Smart.Utilities.Core.isMobile ? i.shadowRoot.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) : s.composedPath()[0]),
                        !n || !n.closest)
                    )
                        return;
                    if (n === i) return r(), void i._handleResourceTimelineHover(n, !0);
                    if (i.$.resourceSplitter.contains(n)) return void i._handleResourceTimelineHover(n, t);
                    i._handleTimelineConnectionHover(n);
                    let a = n.closest(".smart-timeline-task-cell") || n.closest(".smart-timeline-task");
                    if (t || !a || !(i.shadowRoot || i).contains(a)) return void r();
                    const o = i._tasks.indexOf(a._task),
                        l = a && i._connectionFeedback && a.contains(i._connectionFeedback);
                    if ((a.classList.contains("smart-timeline-task-cell") && (a = i.$.timelineTasksContainer.children[o]), !i._hoveredTimelineTask || i._hoveredTimelineTask !== a)) {
                        if (((a !== i._hoveredTimelineTask || (l && i._hoveredTimelineTask === a)) && r(), a && !l)) {
                            if (((i._hoveredTimelineTask = a), l)) return;
                            a.setAttribute("hover", ""), i.$.taskTimelineCellsContainer.children[o].setAttribute("hover", "");
                        }
                        a && i._handleTreeItemHover(i._tasks.indexOf(a._task), n);
                    }
                }
                _handleResourceTimelineHover(e, t) {
                    const i = this;
                    function s() {
                        i._hoveredTimelineResource && (i._hoveredTimelineResource.removeAttribute("hover"), delete i._hoveredTimelineResource);
                    }
                    let n = e.closest(".smart-timeline-resource-cell");
                    !t && n && (i.shadowRoot || i).contains(n)
                        ? (i._hoveredTimelineResource && i._hoveredTimelineResource === n) ||
                          (s(), (i._hoveredTimelineResource = n), n.setAttribute("hover", ""), i._handleTreeItemHover(i._resources.filter((e) => !e.hidden).indexOf(n._resource), e))
                        : s();
                }
                _getScrollLeft(e, t) {
                    const i = this;
                    return i.rightToLeft ? (Smart.Utilities.Core.Browser.Chrome ? (t || (t = i.scrollWidth), (e = t - e)) : (e *= -1), e) : e;
                }
                _synchronizeSplitters(e, t) {
                    if (this.$.mainSplitter.contains(this.$.resourceSplitter)) {
                        const i = e._measurements,
                            s = e.items,
                            n = t.items,
                            [r, a, o] = [i.dimension, i.minDimension, i.maxDimension],
                            [l, d] = [n[0], s[0]],
                            [c, m] = [n[1], s[1]];
                        (t.keepProportionsOnResize = !0),
                            t.setAttribute("orientation-change", ""),
                            [a, o, r].forEach((e) => {
                                const t = e === r ? "size" : e === a ? "min" : "max";
                                (l[t] = d.style[e]), (c[t] = m.style[e]);
                            }),
                            t.removeAttribute("orientation-change"),
                            (t.keepProportionsOnResize = !1);
                    }
                }
                _resizeEventHandler(e) {
                    const t = this,
                        i = t.$.taskSplitter;
                    function s(e) {
                        (e.keepProportionsOnResize = !0), e.refresh(), (e.keepProportionsOnResize = !1), e === i && (s(t.$.taskTreeSplitter), t._synchronizeSplitters(i, t.$.resourceSplitter));
                    }
                    if (e && "resizeEnd" === e.type) {
                        if (e.target === t.$.taskTreeSplitter || e.target === t.$.resourceTreeSplitter) return void s(e.target);
                        e.target === t.$.resourceSplitter && t._synchronizeSplitters(t.$.resourceSplitter, i);
                    }
                    const n = t.$.taskTimelineCellsContainer.children,
                        r = t.offsetWidth !== t.$.timeline.offsetWidth;
                    if (t._timelineCells) {
                        r ? (t.$.mainSplitter.refresh(), s(i), t._createTimelineCells()) : t._refresh(), t._recycle();
                        for (let e = 0; e < n.length; e++) t._setTimelineTaskBar(n[e]._task, r), t._refreshTaskConnections(n[e]._task);
                        (t.$.timeline.scrollLeft = t._getScrollLeft(t.scrollLeft)),
                            (t.$.timelineContent.scrollTop = t.scrollTop),
                            t.$.taskTree.refresh(),
                            s(t.$.taskTreeSplitter),
                            s(t.$.resourceSplitter),
                            s(t.$.resourceTreeSplitter),
                            t.$.resourceTree.refresh(),
                            t.$.mainSplitter.refresh(),
                            t._refreshTreeSplitterScrollTop(t.$.taskTreeSplitter),
                            t._refreshTreeSplitterScrollTop(t.$.resourceTreeSplitter);
                    } else t._refresh();
                }
                _recycle(e) {
                    const t = this;
                    if (!e || "horizontal" === e.context.orientation) return t._recycleHeaderCells(t.$.timelineViewCells), t._recycleHeaderCells(t.$.timelineViewDetails), void t._recycleResourceHeaderCells();
                    const i = Math.round(e.detail.value);
                    t.$.mainSplitter.contains(t.$.resourceSplitter) && e.target === t.$.resourceVerticalScrollBar
                        ? t._refreshTreeSplitterScrollTop(t.$.resourceTreeSplitter, i)
                        : (e || t._refreshTreeSplitterScrollTop(t.$.resourceTreeSplitter, i), t._refreshTreeSplitterScrollTop(t.$.taskTreeSplitter, i));
                }
                _refreshTreeSplitterScrollTop(e, t) {
                    const i = this;
                    if (!i.$.mainSplitter.contains(e)) return;
                    const s = e._items,
                        n = e === i.$.taskTreeSplitter ? "task" : "resource";
                    void 0 === t && (t = i.$[n + "Tree"].$.scrollViewer.scrollTop);
                    for (let e = 0; e < s.length; e++) {
                        const r = s[e];
                        if (r === i.$[n + "TreeSplitterItem"]) i.$[n + "Tree"].$.scrollViewer.scrollTop = t;
                        else {
                            r.getElementsByClassName(`smart-${n}-tree-content`)[0].scrollTop = t;
                        }
                    }
                }
                _recycleHeaderCells(e) {
                    const t = this,
                        i = e.children,
                        s = t.scrollLeft,
                        n = e === t.$.timelineViewCells,
                        r = n ? t._timelineCells : t._timelineHeaderCells;
                    if (!r.length) return;
                    let a = document.createDocumentFragment();
                    for (; i.length; ) a.appendChild(e.firstElementChild);
                    const o = t._getFirstCellObjInView(r),
                        l = 1 - (o.left + o.width - Math.abs(s)) / r[0].width,
                        d = a.children.length,
                        c = n ? Math.ceil((parseFloat((t.$.timeline.offsetWidth / o.width).toFixed(2)) + l).toFixed(2)) : t._getHeaderVisibleCellsCount();
                    if (d > c) for (; a.children.length && a.children.length !== c; ) a.removeChild(a.firstElementChild);
                    else if (d < c) {
                        const e = t._createCells(c - d);
                        for (; e.children.length; ) a.appendChild(e.firstElementChild);
                    }
                    const m = n ? t._getCellsViewType() : t.view;
                    let h = r.indexOf(o);
                    for (let e = 0; e < a.children.length; e++) {
                        const i = a.children[e],
                            s = r[h];
                        if (!s) break;
                        let o = new Date(s.date);
                        n || "week" !== t.view || (o.setDate(o.getDate() - o.getDay()), (o = new Date(Math.max(s.date.getTime(), o.getTime())))),
                            (i.style[t.rightToLeft ? "right" : "left"] = s.left + "px"),
                            (i.style.width = s.width + "px"),
                            (i._date = o),
                            (i.innerHTML = `<div>${t._getDateString(o, m, !n)}</div>`),
                            s.weekend ? i.setAttribute("weekend", "") : i.removeAttribute("weekend"),
                            s.nonworking ? i.setAttribute("nonworking", "") : i.removeAttribute("nonworking"),
                            h++;
                    }
                    e.appendChild(a);
                }
                _refresh() {
                    const e = this;
                    function t() {
                        const t = e.$.taskTimelineCellsContainer.offsetWidth - e.$.timeline.offsetWidth;
                        return (t > 0 && "hidden" !== e.horizontalScrollBarVisibility) || "visible" === e.horizontalScrollBarVisibility ? e.$container.addClass("hscroll") : e.$container.removeClass("hscroll"), t;
                    }
                    function i() {
                        const t = e.$.taskTimelineCellsContainer.offsetHeight - e.$.timelineContent.offsetHeight;
                        return (t > 0 && "hidden" !== e.verticalScrollBarVisibility) || "visible" === e.verticalScrollBarVisibility ? e.$container.addClass("vscroll") : e.$container.removeClass("vscroll"), t;
                    }
                    const s = e.scrollWidth,
                        n = e.scrollHeight;
                    let r = t(),
                        a = i();
                    (a && n === a) || (r = t()),
                        (r && s === r) || (a = i()),
                        (e.scrollWidth = r),
                        (e.scrollHeight = a),
                        e.$.horizontalScrollBar.refresh(),
                        e.$.verticalScrollBar.refresh(),
                        e.$.mainSplitter.contains(e.$.resourceSplitter) && (e._refreshResourceScrollBar(), e._refreshTreeSplitterScrollTop(e.$.resourceTreeSplitter));
                }
                _refreshProjectTasks(e, t) {
                    const i = this,
                        s = e._task;
                    if (!s.tasks || (s.tasks instanceof Array && 0 === s.tasks.length)) return;
                    const n = s.tasks;
                    for (let e = 0; e < n.length; e++) {
                        const s = i.$.timelineTasksContainer.children[i._tasks.indexOf(n[e])];
                        s && (i.rightToLeft ? (s.style.right = i.$.timelineContent.offsetWidth - (s.offsetLeft + s.offsetWidth - t) + "px") : (s.style.left = s.offsetLeft + t + "px"), i._refreshTask(s));
                    }
                }
                _refreshProject(e) {
                    const t = this;
                    if (e)
                        if (e.synchronized)
                            for (; e && e.synchronized; ) {
                                const i = e.tasks;
                                let s = i[0],
                                    n = i[0];
                                for (let e = 0; e < i.length; e++) s.dateStart.getTime() >= i[e].dateStart.getTime() && (s = i[e]), n.dateEnd.getTime() <= i[e].dateEnd.getTime() && (n = i[e]);
                                const r = t.$.timelineTasksContainer.children[t._tasks.indexOf(e)],
                                    a = t.$.timelineTasksContainer.children[t._tasks.indexOf(s)],
                                    o = t.$.timelineTasksContainer.children[t._tasks.indexOf(n)],
                                    l = t.$.timelineContent.offsetWidth;
                                r
                                    ? (a &&
                                          ((e.dateStart = s.dateStart),
                                          t.rightToLeft
                                              ? ((r.style.width = r.offsetWidth - (l - a.offsetLeft - a.offsetWidth - (l - r.offsetLeft - r.offsetWidth)) + "px"), (r.style.right = a.style.right))
                                              : ((r.style.width = r.offsetWidth - (a.offsetLeft - r.offsetLeft) + "px"), (r.style.left = a.style.left))),
                                      o &&
                                          ((e.dateEnd = n.dateEnd),
                                          t.rightToLeft
                                              ? (r.style.width = r.offsetWidth - (l - r.offsetLeft - (l - o.offsetLeft)) + "px")
                                              : (r.style.width = r.offsetWidth - (r.offsetLeft + r.offsetWidth - (o.offsetLeft + o.offsetWidth)) + "px")),
                                      t._refreshTask(r),
                                      (e = e.project))
                                    : (a && (e.dateStart = s.dateStart), o && (e.dateEnd = n.dateEnd), (e = e.project));
                            }
                        else t._refreshProject(e.project);
                }
                _refreshTask(e) {
                    const t = this._getTaskBarCellRange(e),
                        i = t.cellStart,
                        s = t.cellEnd;
                    if (!t || !i || !s) return;
                    (e._cellStart = i), (e._cellEnd = s);
                    const n = this._getTaskBarDateRange(e);
                    if (!n) return;
                    const r = e._task,
                        a = this._tasks.indexOf(r),
                        o = this.$.taskTimelineCellsContainer.children[a];
                    if (!o) return;
                    (o._task.dateStart = r.dateStart = n.dateStart),
                        (o._task.dateEnd = r.dateEnd = n.dateEnd),
                        (o._task.duration = r.duration = this._convertDuration(
                            this.nonworkingDays.length > 0 || this.nonworkingHours.length > 0 ? this._getWorkingTime(r.dateStart, r.dateEnd) : r.dateEnd.getTime() - r.dateStart.getTime(),
                            !0
                        ));
                    const l = (e) => e.getFullYear() + "-" + (e.getMonth() < 10 ? "0" + e.getMonth() : e.getMonth()) + "-" + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate());
                    e.setAttribute("aria-label", r.label + " Start date: " + l(r.dateStart) + ", End date: " + l(r.dateEnd)), this._refreshTaskConnections(e), this._refreshTreeColumnsData(r, ["dateStart", "dateEnd", "duration"]);
                }
                _refreshTaskResources(e, t = []) {
                    const i = this;
                    if (e && (t || (t = i._getTaskResources(e, !0)), t.length))
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            i._refreshResource(s), i._refreshTreeColumnsData(s, void 0, "resource");
                        }
                }
                _refreshTreeColumnsData(e, t, i) {
                    const s = this;
                    i || (i = "task");
                    const n = s[`${i}Columns`];
                    function r(e) {
                        for (let t = 0; t < n.length; t++) if (n[t].value === e) return t;
                    }
                    if (!e) return;
                    const a = s.$[`${i}TreeSplitter`];
                    if (!s.$.mainSplitter.contains(a)) return;
                    const o = s[`_${i}s`].indexOf(e);
                    let l = [];
                    if (t)
                        for (let e = 0; e < t.length; e++) {
                            const i = r(t[e]);
                            void 0 !== i && l.push(i);
                        }
                    else l = n.map((e, t) => t);
                    for (let t = 0; t < l.length; t++) {
                        const r = a._items[l[t]],
                            d = n[l[t]];
                        let c;
                        r &&
                            (r === s.$[`${i}TreeSplitterItem`]
                                ? ((c = r.querySelectorAll("smart-tree-item, smart-tree-items-group")[o]), c && (c.label = s._formatColumnData(e, d, !0)))
                                : ((c = r.getElementsByClassName(`smart-${i}-label-container`)[o]), (c.innerHTML = s._formatColumnData(e, d))));
                    }
                    s.$[`${i}TreeSplitter`].refresh();
                }
                _removeTreeItem(e, t = "task") {
                    const i = this;
                    if (void 0 === e) return;
                    const s = i.$[`${t}TreeSplitter`]._items,
                        n = i.$[`${t}Tree`];
                    for (let r = 0; r < s.length; r++) {
                        const a = s[r];
                        if (a.contains(n)) n.removeItem(n.querySelectorAll("smart-tree-item, smart-tree-items-group")[e]);
                        else {
                            const s = a.getElementsByClassName(`smart-${t}-tree-content`)[0],
                                n = i[`${t}Columns`][r];
                            if (!s || !n || !n.value) continue;
                            const o = s.getElementsByClassName(`smart-${t}-item`)[e];
                            o && o.parentElement.removeChild(o);
                        }
                    }
                }
                _removeConnection(e, t) {
                    const i = this,
                        s = i.$.timelineConnectionsContainer;
                    if ((e.classList && e.classList.contains("smart-task-connection") ? (e = e.getAttribute("connection-id")) : (e += ""), void 0 === e)) return;
                    const n = s.querySelectorAll('.smart-task-connection[connection-id^="' + e + (e.indexOf("-") < 0 ? "-" : "") + '"]'),
                        r = i._tasks,
                        a = i.$.timelineTasksContainer.children,
                        o = e.split("-"),
                        l = parseInt(o[0]),
                        d = parseInt(o[1]);
                    for (let e = 0; e < n.length; e++) s.removeChild(n[e]);
                    i._updateConnection(e, !0),
                        a[l] && 0 === r[l].connections.length && !r.find((e) => e.connections.find((e) => i._getTaskIndexById(e.target) === l)) && a[l].removeAttribute("connected"),
                        a[d] && 0 === r[d].connections.length && !r.find((e) => e.connections.find((e) => i._getTaskIndexById(e.target) === d)) && a[d].removeAttribute("connected"),
                        !t && i.autoSchedule && (i._autoScheduleRestore(r[d], parseInt(o[2])), i._autoSchedule(r[d]));
                }
                _removeConnectionsToTask(e, t, i) {
                    const s = this;
                    if (e) {
                        t || (t = s._tasks);
                        for (let n = 0; n < t.length; n++) {
                            const r = t[n];
                            if (!r.connections || !r.connections.length || (i && i.indexOf(r) > -1)) continue;
                            const a = r.connections;
                            for (let t = 0; t < a.length; t++) a[t].target === e && s._removeConnection(n, e);
                        }
                    }
                }
                _setConnectionPoints(e) {
                    const t = this;
                    let i;
                    if (e && t._hoveredTimelineTask === e) {
                        i = e.getElementsByClassName("smart-task-connection-point");
                        for (let e = 0; e < i.length; e++) i[e].classList.remove("smart-visibility-hidden");
                    } else {
                        const e = t.$.taskTimelineCellsContainer.children;
                        for (let t = 0; t < e.length; t++) {
                            const s = e[t];
                            if (s && !s.hasAttribute("selected")) {
                                i = s.getElementsByClassName("smart-task-connection-point");
                                for (let e = 0; e < i.length; e++) i[e].classList.add("smart-visibility-hidden");
                            }
                        }
                    }
                }
                _select(e = "task", t, i) {
                    const s = this;
                    if (s.disableSelection) return void s._unselectAll(e);
                    const n = s[`_${e}s`].filter((e) => !e.hidden).indexOf(t);
                    if (n < 0) return void s._unselectAll(e);
                    const r = s.$[e + "TimelineCellsContainer"].children[n],
                        a = s.$.timelineTasksContainer.children[n];
                    if (r && r.hasAttribute("selected")) return void s._unselectAll(e);
                    const o = s.selectedIndexes.slice(0);
                    s._unselectAll(e, !0), r && r.setAttribute("selected", ""), "task" === e && a && (a.setAttribute("selected", ""), a.setAttribute("aria-selected", "true"));
                    const l = document.scrollingElement || document.documentElement,
                        d = l.scrollLeft,
                        c = l.scrollTop;
                    s.$[`${e}Tree`].focus({ preventScroll: !0 }), window.scrollTo(d, c), s.$[`${e}Tree`].select(s.$[`${e}Tree`].querySelectorAll("smart-tree-item, smart-tree-items-group")[n]);
                    const m = s.$[`${e}TreeSplitter`]._items;
                    for (let t = 0; t < m.length; t++) {
                        const i = m[t];
                        let r;
                        i !== s.$[`${e}TreeSplitterItem`] && ((r = [].slice.call(i.getElementsByClassName(`smart-${e}-label-container`))), r[n] && r[n].setAttribute("selected", ""));
                    }
                    if ((s._highlightAssignedItem(e, n), "resource" !== e)) {
                        if (!i) {
                            const e = a._cellStart;
                            if (s.scrollLeft > e.left || e.left + a.offsetWidth > s.scrollLeft + s.$.timeline.offsetWidth) {
                                const t = s._timelineCells.indexOf(e);
                                s._scrollTo((s._timelineCells[t - 1] ? s._timelineCells[t - 1] : e).date);
                            }
                        }
                        o[0] !== n && ((s.selectedIndexes = [n]), s._noChangeEvent || s.$.fireEvent("change", { value: [n], oldValue: o }));
                    }
                }
                _highlightAssignedItem(e, t) {
                    const i = this[`_${e}s`],
                        s = "task" === e ? "resource" : "task",
                        n = this.$[`${s}TreeSplitterItem`];
                    let r;
                    r = Array.from(this.$.mainSplitter.querySelectorAll(`.smart-timeline-${s}-cell[assigned], .smart-${s}-label-container[assigned], \n                                  .smart-timeline-${s}[assigned]`)).concat(
                        Array.from(n.querySelectorAll(".smart-tree-item[assigned], smart-tree-items-group[assigned]"))
                    );
                    for (let e = 0; e < r.length; e++) r[e].removeAttribute("assigned");
                    if (!i.length || this.hideResourcePanel) return;
                    const a = i.filter((e) => !e.hidden)[t];
                    if (!a || a.hidden) return;
                    const o = this.$[`${s}TreeSplitter`]._items,
                        l = this.$[`${s}TimelineCellsContainer`].children,
                        d = this.$.timelineTasksContainer.children;
                    if (l.length) {
                        (r = this["resource" === e ? "_getResourceTasks" : "_getTaskResources"](a)
                            .filter((e) => !e.hidden)
                            .map((e) => e.index)),
                            r.forEach((t) => {
                                if ((l[t] && l[t].setAttribute("assigned", ""), "resource" === e)) {
                                    const e = d[t];
                                    e && e.setAttribute("assigned", "");
                                }
                            });
                        for (let e = 0; e < o.length; e++) {
                            const t = o[e];
                            let i;
                            i = t === n ? t.querySelectorAll("smart-tree-item, smart-tree-items-group") : t.getElementsByClassName(`smart-${s}-label-container`);
                            for (let e = 0; e < r.length; e++) i[r[e]].setAttribute("assigned", "");
                        }
                    }
                }
                _selectResource(e) {
                    const t = this,
                        i = t._resources.indexOf(e);
                    if (i < 0) return void t._unselectAll("resource");
                    const s = t.$.resourceTimelineCellsContainer.children[i];
                    s && s.hasAttribute("selected") ? t._unselectAllTasks() : t.$.resourceTree.focus({ preventScroll: !0 });
                }
                _snapToNearest(e) {
                    const t = this;
                    if (e instanceof HTMLElement && e.classList.contains("smart-timeline-task") && t.snapToNearest) {
                        const i = t._getTaskBarCellRange(e);
                        if (!i) return;
                        const s = i.cellStart,
                            n = i.cellEnd;
                        let r = parseFloat(e.style.width) || e.offsetWidth,
                            a = parseFloat(e.style[t.rightToLeft ? "right" : "left"]) || e.offsetLeft;
                        if (t.hasAttribute("dragged")) {
                            const i = n.width - (a + r - n.left);
                            a - s.left <= i ? (e.style[t.rightToLeft ? "right" : "left"] = s.left + "px") : (e.style[t.rightToLeft ? "right" : "left"] = a + i + "px");
                        } else if (t.hasAttribute("resized")) {
                            const i = (s === n && parseFloat(getComputedStyle(t).getPropertyValue("--smart-gantt-chart-timeline-task-min-width"))) || 0;
                            let o;
                            "left" === t.$.timeline.getAttribute("task-bar-hovered")
                                ? ((o = a - s.left),
                                  (o -= o >= s.width / 2 ? s.width - i : 0),
                                  (e.style[t.rightToLeft ? "right" : "left"] = (a -= o) + "px"),
                                  (o = a + r > n.left + n.width / 2 ? n.left + n.width - (a + r) : n.left - (a + r)),
                                  (e.style.width = Math.max(i, r + o) + "px"))
                                : (a > s.left + s.width / 2 ? (e.style[t.rightToLeft ? "right" : "left"] = s.left + s.width + "px") : (e.style[t.rightToLeft ? "right" : "left"] = s.left + "px"),
                                  (a = parseFloat(e.style[t.rightToLeft ? "right" : "left"]) || e.offsetLeft),
                                  (o = a + r - n.left),
                                  (o = -1 * (o - (o >= s.width / 2 ? n.width : i))),
                                  (e.style.width = r + o + "px"));
                        }
                        t._refreshTask(e);
                        const o = e._task;
                        if ("project" !== o.type || !o.dragProject) return;
                        const l = o.tasks;
                        if (!l || !Array.isArray(l)) return;
                        for (let e = 0; e < l.length; e++) {
                            const i = t.$.timelineTasksContainer.children[t._tasks.indexOf(l[e])];
                            i && t._snapToNearest(i);
                        }
                    }
                }
                _setDragLimits(e) {
                    const t = this;
                    if (!t._dragDetails) return;
                    const i = t._dragDetails.timelineTask;
                    if (!i || !e) return;
                    const s = t.$.timeline.getAttribute("task-bar-hovered"),
                        n = i._task;
                    if (s) {
                        if (n.disableResize) return void delete t._dragDetails;
                        const e = t._getTaskBarSizeLimits(i, s);
                        (t._dragDetails.min.width = e.min), (t._dragDetails.max.width = e.max);
                        const r = t._createDelimiter("min", s),
                            a = t._createDelimiter("max", s);
                        r && i.appendChild(r), a && i.appendChild(a);
                    } else if (e.closest(".smart-task-connection-point")) t._dragDetails.timelineTask = void 0;
                    else if (e.closest(".smart-timeline-task") === i) {
                        if (n.disableDrag || (i.hasAttribute("connected") && t.autoSchedule && t.autoScheduleStrictMode)) return void delete t._dragDetails.target;
                        (t._dragDetails._taskDuration = t._getWorkingTime(n.dateStart, n.dateEnd)), i.classList.contains("milestone") && (t._dragDetails.target = i.getElementsByClassName("smart-timeline-task-fill")[0]);
                        const e = t._getTaskDragLimits(i),
                            s = t.rightToLeft ? t.$.timelineContent.offsetWidth - i.offsetLeft - i.offsetWidth : i.offsetLeft;
                        if (
                            (void 0 !== e.min && ((t._dragDetails.min.left = e.min), "project" === i._task.type && e.min > s && (t._dragDetails.min.left = s)),
                            void 0 !== e.max && ((t._dragDetails.max.left = e.max), "project" === i._task.type && e.max < s && (t._dragDetails.max.left = s)),
                            "project" === n.type && n.dragProject && !t.synchronized)
                        ) {
                            const e = t._getSubTaskLimits(i);
                            void 0 !== e.min && (t._dragDetails.min.left = t._dragDetails.min.left ? Math.max(t._dragDetails.min.left, e.min) : e.min),
                                void 0 !== e.max && (t._dragDetails.max.left = t._dragDetails.max.left ? Math.min(t._dragDetails.max.left, e.max) : e.max);
                        } else "milestone" === n.type && (t._dragDetails.target = i.getElementsByClassName("smart-timeline-task-fill")[0]);
                    } else t._dragDetails.timelineTask = void 0;
                    t._dragDetails.relatedConnections = {};
                }
                _setScrollBars() {
                    const e = this;
                    e._scrollView || (e._scrollView = new Smart.Utilities.Scroll(e.$.taskSplitterItem, e.$.horizontalScrollBar, e.$.verticalScrollBar));
                    const t = e._scrollView.vScrollBar,
                        i = e._scrollView.hScrollBar,
                        s = e.$.resourceVerticalScrollBar;
                    i.$.addClass("smart-hidden"),
                        t.$.addClass("smart-hidden"),
                        s.$.addClass("smart-hidden"),
                        (t.hasStyleObserver = !1),
                        (i.hasStyleObserver = !1),
                        (s.hasStyleObserver = !1),
                        (t.hasResizeObserver = !1),
                        (i.hasResizeObserver = !1),
                        (s.hasResizeObserver = !1),
                        (i.wait = !1),
                        e._refresh();
                }
                _getWorkingTime(e, t) {
                    if (!e || !t) return;
                    const i = this;
                    function s(e, t) {
                        let s,
                            n,
                            r = t.getTime() - e.getTime(),
                            a = new Date(e),
                            o = 0;
                        for (; r > 0; ) {
                            const e = Math.min(r, 36e5 - (60 * a.getMinutes() * 1e3 + 1e3 * a.getSeconds() + a.getMilliseconds()));
                            if (i.nonworkingDays.indexOf(a.getDay()) > -1) (n = new Date(a)), n.setHours(0, 0, 0, 0), n.setDate(a.getDate() + 1), (s = Math.min(e, n.getTime() - a.getTime())), (a = new Date(a.getTime() + s)), (r -= s);
                            else if (i.nonworkingHours.indexOf(a.getHours()) > -1) {
                                n = new Date(a);
                                const t = n.getTime();
                                n.setHours(a.getHours() + 1, 0, 0, 0), t === n.getTime() && n.setHours(a.getHours() + 2, 0, 0, 0), (s = Math.min(e, n.getTime() - a.getTime())), (a = new Date(a.getTime() + s)), (r -= s);
                            } else (o += e), (r -= e), (a = new Date(a.getTime() + e));
                        }
                        return o;
                    }
                    if (e.getFullYear() === t.getFullYear()) return s(e, t);
                    let n = new Date(e.getFullYear() + 1, 0, 1, 0, 0, 0, 0),
                        r = s(e, n);
                    if (t.getFullYear() > n.getFullYear()) {
                        const e = Math.max(0, t.getFullYear() - n.getFullYear());
                        for (let t = 0; t < e; t++) {
                            let e = i._getWorkingDaysBetweenDays(n);
                            (r += 60 * (24 * e - e * i.nonworkingHours.length) * 60 * 1e3), n.setFullYear(n.getFullYear() + 1);
                        }
                    }
                    return (r += s(n, t)), r;
                }
                _getWorkingDaysBetweenDays(e) {
                    const t = this,
                        i = e.getFullYear(),
                        s = (i % 100 == 0 ? i % 400 == 0 : i % 4 == 0) ? 366 : 365;
                    let n = new Date(e),
                        r = 0;
                    for (let e = 0; e < s; e++) t.nonworkingDays.indexOf(n.getDay()) < 0 && r++, n.setDate(n.getDate() + 1);
                    return r;
                }
                _setFocusable() {
                    const e = this;
                    e.disabled || e.unfocusable ? (e.tabIndex = -1) : (e.tabIndex = e.tabIndex > 0 ? e.tabIndex : 0);
                }
                _setTaskBarLabel(e, t) {
                    const i = (this.shadowRoot || this).querySelectorAll(".smart-timeline-task")[this._tasks.indexOf(e)];
                    if (!i) return;
                    const s = i.getElementsByClassName("smart-timeline-task-label")[0];
                    s && (s.innerHTML = e.formatFunction ? e.formatFunction(e.label, this._tasks.indexOf(e)) || "" : t || e.label);
                }
                _setTaskBarProgress(e) {
                    const t = (this.shadowRoot || this).querySelectorAll(".smart-timeline-task")[this._tasks.indexOf(e)];
                    if (!t) return;
                    let i = e.progress;
                    const s = t.querySelector(".smart-timeline-task-progress"),
                        n = t.querySelector(".smart-timeline-task-progress-thumb");
                    s && ((n.style[this.rightToLeft ? "left" : "right"] = ""), (n.style[this.rightToLeft ? "right" : "left"] = s.style.width = (Math.min(100, Math.max(0, i)) || 0) + "%"));
                }
                _setTimelineTaskBar(e, t) {
                    const i = this,
                        s = i._tasks.indexOf(e),
                        n = i.$.timelineTasksContainer.children,
                        r = n[s];
                    let a, o;
                    if (0 === n.length || !r) return;
                    (a = (!t && r._cellStart) || i._getTimelineCellByDate(e.dateStart instanceof Date ? e.dateStart : new Date(e.dateStart))),
                        (o = (!t && r._cellEnd) || i._getTimelineCellByDate(e.dateEnd instanceof Date ? e.dateEnd : new Date(e.dateEnd))),
                        (r._cellStart = a),
                        (r._cellEnd = o);
                    const l = i._getTaskBarDetails(r);
                    l && ((r.style.top = l.top + "px"), (r.style[i.rightToLeft ? "left" : "right"] = ""), (r.style[i.rightToLeft ? "right" : "left"] = l.left + "px"), (r.style.width = l.width + "px")),
                        e.project && !i._isTaskExpanded(e) ? r.classList.add("smart-visibility-hidden") : r.classList.remove("smart-visibility-hidden");
                }
                _getTimelineCellByDate(e) {
                    const t = this,
                        i = t._timelineCells;
                    if (i && 0 !== i.length)
                        for (let s = 0; s < i.length; s++) {
                            const n = i[s],
                                r = n.date;
                            switch (t.view) {
                                case "year":
                                    if (r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth()) return n;
                                    break;
                                case "month": {
                                    const t = new Date(r);
                                    let i = new Date(r);
                                    if ((i.setDate(i.getDate() + (6 - i.getDay()) + 1), i.setMilliseconds(i.getMilliseconds() - 1), e.getTime() >= t.getTime() && e.getTime() <= i.getTime())) return n;
                                    break;
                                }
                                case "week":
                                    if (r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth() && r.getDate() === e.getDate()) return n;
                                    break;
                                case "day":
                                    if (r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth() && r.getDate() === e.getDate() && r.getHours() === e.getHours()) return n;
                            }
                        }
                }
                _refreshViewDetailCell(e, t, i) {
                    const s = this,
                        n = s._timelineCells,
                        r = e.date;
                    let a = 0,
                        o = 0 === i ? 0 : void 0;
                    for (void 0 === t && (t = 0); t < n.length; t++) {
                        const e = n[t],
                            i = s._getCellWidth(e, r);
                        if (i) void 0 === o && (o = e.left + e.width - i), (a += i);
                        else if (e.date.getTime() > r.getTime()) break;
                    }
                    return s._isLastWeekCellNotFull && (delete s._isLastWeekCellNotFull, t--), (e.width = a), (e.left = o), t;
                }
                _getCellWidth(e, t) {
                    const i = this,
                        s = e.date,
                        n = (e, t) => e.getFullYear() === t.getFullYear(),
                        r = (e, t) => e.getMonth() === t.getMonth(),
                        a = e.width;
                    switch (i.view) {
                        case "month": {
                            let e = new Date(s),
                                o = new Date(e),
                                l = 0;
                            for (o.setDate(o.getDate() + (6 - e.getDay()) + 1), o.setMilliseconds(o.getMilliseconds() - 1); e.getTime() <= o.getTime(); ) n(e, t) && r(e, t) && l++, e.setDate(e.getDate() + 1);
                            if (0 === l) return;
                            return (i._isLastWeekCellNotFull = l / 7 != 1), (a * l) / 7;
                        }
                        case "year":
                            if (n(s, t)) return a;
                            break;
                        case "week": {
                            const e = new Date(t),
                                i = new Date(t);
                            if ((e.setDate(t.getDate() - t.getDay()), i.setDate(t.getDate() + (6 - t.getDay())), s.getTime() >= e.getTime() && s.getTime() <= i.getTime())) return a;
                            break;
                        }
                        case "day":
                            if (n(s, t) && r(s, t) && s.getDate() === t.getDate()) return a;
                    }
                }
                _getCellByOffsetLeft(e) {
                    const t = this._timelineCells;
                    if (!e) return;
                    let i;
                    for (let s = 0; s < t.length && !(t[s].left >= e); s++) i = t[s];
                    return i;
                }
                _unselectAll(e, t) {
                    const i = this,
                        s = i.$[`${e}TimelineCellsContainer`].querySelectorAll(`.smart-timeline-${e}-cell[selected]`);
                    for (let e = 0; e < s.length; e++) s[e].removeAttribute("selected");
                    if ("task" === e) {
                        const e = i.$.timelineTasksContainer.querySelectorAll(".smart-timeline-task[selected]");
                        for (let t = 0; t < e.length; t++) e[t].removeAttribute("selected"), e[t].setAttribute("aria-selected", "false");
                    }
                    i[`_${e}TreeChangeEventFired`] || i.$[e + "Tree"].clearSelection();
                    const n = i.$[`${e}TreeSplitter`].getElementsByClassName(`smart-${e}-label-container`);
                    for (let e = 0; e < n.length; e++) n[e].removeAttribute("selected");
                    if ((i._highlightAssignedItem(e), t || "task" !== e)) return;
                    const r = i.selectedIndexes.slice(0);
                    r.length && ((i.selectedIndexes = []), i._noChangeEvent || i.$.fireEvent("change", { value: [], oldValue: r, type: e }));
                }
                _getTaskBarCellRange(e) {
                    if (!e.classList || !e.classList.contains("smart-timeline-task")) return;
                    let t = parseFloat(e.style.width) || e.offsetWidth;
                    const i = this._timelineCells,
                        s = this.$.timelineContent,
                        n = parseFloat(e.style[this.rightToLeft ? "right" : "left"]) || (this.rightToLeft ? (parseFloat(s.style.width) || s.offsetWidth) - (e.offsetLeft + e.offsetWidth) : e.offsetLeft);
                    let r, a;
                    !t && e.classList.contains("milestone") && (t = e.offsetHeight / 2);
                    for (let e = 0; e < i.length; e++) {
                        const s = i[e],
                            o = s.left,
                            l = s.width,
                            d = parseFloat((o + l).toFixed(2)),
                            c = parseFloat((n + t).toFixed(2));
                        if ((n >= o && n <= d && (r = s), !a && c > o && c <= d && (a = s), r && a)) break;
                    }
                    return r || (r = e.classList.contains("milestone") && a ? a : i[0]), a || (a = i[i.length - 1]), { cellStart: r, cellEnd: a };
                }
                _getDateFromCell(e, t, i) {
                    if (!t) return new Date();
                    const s = this,
                        n = new Date(t.date);
                    let r,
                        a = 0,
                        o = 0;
                    switch ((i || (i = s.view), i)) {
                        case "year":
                            (r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate()), (a = 1);
                            break;
                        case "month":
                            (a = n.getDate()), (r = 7);
                            break;
                        case "week":
                            (r = 1), (a = n.getDate());
                            break;
                        case "day":
                            (r = 1 / 24), (a = n.getDate()), (o = n.getHours());
                    }
                    const l = parseFloat((((e - t.left) / t.width) * r).toFixed(12)),
                        d = Math.min(r, Math.floor(l)),
                        c = (l % 1) * 24,
                        m = Math.floor(c),
                        h = 60 * Math.abs(c - m),
                        u = Math.floor(h),
                        f = 60 * Math.abs(h - u),
                        g = Math.floor(f),
                        p = 1e3 * Math.abs(f - g),
                        _ = Math.floor(p);
                    return new Date(n.getFullYear(), n.getMonth(), a + d, o + m, u, g, _);
                }
                _createTreeTasks(e, t) {
                    if (!e) return [];
                    let i = [];
                    for (let s = 0; s < e.length; s++) {
                        const n = {};
                        (n.label = e[s][t]), e[s].tasks && (n.items = this._createTreeTasks(e[s].tasks, t)), i.push(n);
                    }
                    return i;
                }
                _getTasksJSON(e) {
                    const t = this;
                    let i = t._tasks,
                        s = "project";
                    function n(e) {
                        let t = {};
                        for (let i in e) {
                            let s = e[i];
                            "project" !== i && "_project" !== i && (t[i] = s instanceof Date ? s.toISOString() : s);
                        }
                        return delete t.project, delete t._project, t;
                    }
                    return (
                        e && ((s = "_project"), (i = t.__tasks)),
                        (function i(r, a) {
                            if (!r) return;
                            let o = [];
                            for (let l = 0; l < r.length; l++) {
                                const d = r[l];
                                let c;
                                ((d[s] || a) && d[s] !== a) ||
                                    ((c = n(d)),
                                    (c.tasks = i(d.tasks, d)),
                                    e &&
                                        (d.disableResources || ((c.connections = c.connections.map((e) => Object.assign({}, e))), c.connections.forEach((e) => (e.target = t.__tasks.indexOf(t._tasks[t._getTaskIndexById(e.target)])))),
                                        c._connections && (c.connections.push.apply(c.connections, c._connections), delete c._connections)),
                                    o.push(c));
                            }
                            return o;
                        })(i)
                    );
                }
                _createTreeColumns(e) {
                    const t = this,
                        [i, s, n] = e === t.$.taskTreeSplitter ? [t._getTasksJSON(), t.taskColumns, "task"] : [t._resources.map((e) => Object.assign({}, e)), t.resourceColumns, "resource"],
                        r = e.getElementsByClassName(`smart-${n}-tree-header`);
                    if (!t.contains(e)) return;
                    if (s.length > r.length)
                        for (; s.length > r.length; ) {
                            const t = document.createElement("smart-splitter-item");
                            (t.innerHTML = `<div class="smart-${n}-tree-header"></div><div class="smart-${n}-tree-content">`), e.appendChild(t);
                        }
                    else for (; r.length > s.length && 1 !== r.length; ) e.removeChild(e.lastElementChild);
                    if (!s.length) return (t.$[n + "Tree"].dataSource = []), void (r[0].innerHTML = "");
                    const a = s.find((e) => !0 === e.root),
                        o = s.indexOf(a),
                        l = e._items,
                        d = l.find((e) => e.contains(t.$.taskTree) || e.contains(t.$.resourceTree));
                    a && l.indexOf(d) !== o ? e.insert(o, d) : a || 0 === l.indexOf(d) || e.insert(0, d);
                    const c = s.length,
                        m = parseFloat(getComputedStyle(t).getPropertyValue("--smart-gantt-chart-timeline-cell-min-size") || 0);
                    for (let e = 0; e < c; e++) {
                        const a = s[e],
                            o = r[e],
                            l = o.closest("smart-splitter-item");
                        (o.innerHTML = t.localize(a.label) || a.label),
                            l && (a.size && (t.shadowRoot ? requestAnimationFrame(() => (l.size = a.size)) : (l.size = a.size)), (l.min = a.min ? a.min : m), (l.max = a.max ? a.max : l.max)),
                            t._createTreeColumnsData(
                                l,
                                a,
                                i.filter((e) => !e.hidden),
                                n
                            );
                    }
                    const h = e.closest("smart-splitter");
                    h.isCompleted && h.refresh(), t._refresh();
                }
                _refreshColumnsHeaders(e) {
                    const t = this;
                    e || (e = "task");
                    const i = t[`${e}Columns`],
                        s = t.$[`${e}TreeSplitter`].getElementsByClassName(`smart-${e}-tree-header`);
                    for (let e = 0; e < s.length; e++) s[e].innerHTML = t.localize(i[e].label) || i[e].label;
                    !arguments.length && t.$.mainSplitter.contains(t.$.resourceSplitter) && t._refreshColumnsHeaders("resources");
                }
                _createTreeColumnsData(e, t, i, s) {
                    const n = this;
                    if (!e) return;
                    s || (s = "task");
                    const r = t.value,
                        a = e.querySelector("smart-tree");
                    if (a)
                        return void (r
                            ? ((a.itemsMember = s + "s"),
                              (a.displayMember = t.value),
                              (a.dataSource = i.map((e) =>
                                  (function e(i, s) {
                                      if ((i.tasks && i.tasks.forEach((t) => e(t)), (i[t.value] = n._formatColumnData(i, t, !0)), s)) return i;
                                  })(e, !0)
                              )),
                              n._unfocusTreeItems(a === n.$.taskTree ? n.$.taskTreeSplitter : n.$.resourceTreeSplitter))
                            : (a.dataSource = []));
                    const o = e.getElementsByClassName(`smart-${s}-tree-content`)[0];
                    o && ((o.innerHTML = ""), r && o.appendChild(n._createTreeItemContainers(i, t, s)));
                }
                _createTreeItemContainers(e, t, i) {
                    const s = this,
                        n = document.createDocumentFragment();
                    for (let r = 0; r < e.length; r++) {
                        const a = e[r],
                            o = document.createElement("div");
                        (o.innerHTML = `<div class="smart-${i}-label-container"></div>`),
                            (o.firstElementChild.innerHTML = s._formatColumnData(a, t)),
                            a.tasks &&
                                a.tasks.length > 0 &&
                                (o.setAttribute("group", ""),
                                (o.innerHTML += `<div class="smart-${i}-drop-down ${a.expanded ? "" : "smart-visibility-hidden"}"></div>`),
                                o.lastElementChild.appendChild(s._createTreeItemContainers(a.tasks, t, i))),
                            o.classList.add(`smart-${i}-item`),
                            o.id ||
                                o.setAttribute(
                                    "id",
                                    `${i}Item` +
                                        Math.floor(65536 * (1 + Math.random()))
                                            .toString(16)
                                            .substring(1)
                                ),
                            n.appendChild(o);
                    }
                    return n;
                }
                _formatColumnData(e, t, i) {
                    const s = this,
                        n = s.taskColumns.includes(t) ? "task" : "resource";
                    let r = e[t.value];
                    function a(e) {
                        return i ? e : "<span>" + e + "</span>";
                    }
                    if ("function" == typeof t.formatFunction) return t.formatFunction.call(s, t.value.toLowerCase().indexOf("date") > -1 ? new Date(r) : r, s._getItemIndex(e, n));
                    if (t.value) {
                        const i = (t.value + "").toLowerCase();
                        if (i.indexOf("date") > -1) {
                            const e = Date.parse(r);
                            if (!isNaN(e)) return a(new Date(e).toLocaleDateString(s.locale, { year: "numeric", month: "2-digit", day: "numeric" }));
                        } else {
                            if (i.indexOf("duration") > -1) return a(parseFloat(r.toFixed(1)));
                            if ("resources" === i) {
                                if (e.disableResources) return "";
                                Array.isArray(r) || (r = [r].reduce((e, t) => e.concat(t), []));
                                let t = [];
                                for (let e = 0; e < r.length; e++) {
                                    const i = s._resources.find((t) => t.id && t.id.toString() === r[e].toString());
                                    i && void 0 !== i.label && t.push(i.label);
                                }
                                r = t.length ? t : void 0;
                            }
                        }
                    }
                    return a(void 0 !== r ? r.toString() : s.localize("unassigned"));
                }
                _validateTaskProperties(e, t) {
                    const i = this;
                    function s(e, t) {
                        return (e[t] = i._dateValidator(void 0, e[t])), (e[t] && !isNaN(e[t].getTime())) || (e[t] = void 0), e[t];
                    }
                    void 0 === e.id && delete e.id, delete e.assignedTo, delete e.index;
                    let n = i._convertDuration(parseInt(e.duration)) || 0,
                        r = i._convertDuration(parseInt(e.minDuration)) || 0,
                        a = i._convertDuration(parseInt(e.maxDuration)) || 0;
                    if (
                        (r && a && (a = Math.max(r, a)),
                        n && (r ? (n = Math.max(r, n)) : a && (n = Math.min(n, a))),
                        void 0 === e.resources ? (e.resources = []) : (e.resources = [e.resources].reduce((e, t) => e.concat(t), [])),
                        (e.duration = i._convertDuration(n, !0)),
                        (e.minDuration = i._convertDuration(r, !0)),
                        (e.maxDuration = i._convertDuration(a, !0)),
                        (e.minDateStart = s(e, "minDateStart")),
                        (e.maxDateStart = s(e, "maxDateStart")),
                        e.minDateStart && e.maxDateStart && (e.maxDateStart = new Date(Math.max(e.minDateStart.getTime(), e.maxDateStart.getTime()))),
                        (e.minDateEnd = s(e, "minDateEnd")),
                        (e.maxDateEnd = s(e, "maxDateEnd")),
                        e.minDateEnd && e.maxDateEnd && (e.maxDateEnd = new Date(Math.max(e.minDateEnd.getTime(), e.maxDateEnd.getTime()))),
                        (e.dateStart = s(e, "dateStart")),
                        (e.dateEnd = s(e, "dateEnd")),
                        e.dateStart || (e.minDateStart ? (e.dateStart = e.minDateStart) : e.maxDateStart ? (e.dateStart = e.maxDateStart) : (e.dateStart = i.dateStart)),
                        e.dateEnd || (e.minDateEnd ? (e.dateEnd = e.minDateEnd) : e.maxDateEnd && (e.dateEnd = e.maxDateEnd)),
                        e.minDateStart && (e.dateStart = new Date(Math.max(e.minDateStart.getTime(), e.dateStart.getTime()))),
                        e.maxDateStart && (e.dateStart = new Date(Math.min(e.maxDateStart.getTime(), e.dateStart.getTime()))),
                        e.minDateEnd && (e.dateEnd = new Date(Math.max(e.minDateEnd.getTime(), e.dateEnd.getTime()))),
                        e.maxDateEnd && (e.dateEnd = new Date(Math.min(e.maxDateEnd.getTime(), e.dateEnd.getTime()))),
                        e.dateStart && (i.min && (n = Math.min(e.dateStart.getTime() - i.min.getTime(), n)), i.max && (n = Math.min(i.max.getTime() - e.dateStart.getTime(), n))),
                        !e.dateStart && n && e.dateEnd && (e.dateStart = new Date(e.dateEnd.getTime() - n)),
                        "task" !== e.type || (e.dateStart && !isNaN(e.dateStart.getTime())) || !t || (e.dateStart = new Date(t.dateStart)),
                        r && e.dateStart)
                    )
                        if (i.nonworkingDays.length > 0 || i.nonworkingHours.length > 0) {
                            const t = i._getTaskWorkingDateEnd(e, r);
                            e.dateEnd = new Date(Math.max(e.dateEnd ? e.dateEnd.getTime() : 0, t.getTime()));
                        } else e.dateEnd = new Date(Math.max(e.dateEnd ? e.dateEnd.getTime() : 0, e.dateStart.getTime() + n));
                    if ((n && e.dateStart && (e.dateEnd = i.nonworkingDays.length > 0 || i.nonworkingHours.length > 0 ? i._getTaskWorkingDateEnd(e, n) : new Date(e.dateStart.getTime() + n)), n || a)) {
                        let t;
                        (t = i.nonworkingDays.length > 0 || i.nonworkingHours.length > 0 ? i._getTaskWorkingDateEnd(e, Math.max(n, a)) : new Date(e.dateStart.getTime() + Math.max(n, a))),
                            e.dateEnd.getTime() > t.getTime() && (e.dateEnd = t);
                    }
                    if (
                        ("task" === e.type && !e.dateEnd && t && (e.dateEnd = new Date(t.dateEnd)),
                        (e.dateStart = i._minMaxDateValidator(e.dateStart)),
                        (e.dateEnd = i._minMaxDateValidator(e.dateEnd)),
                        "milestone" === e.type &&
                            ((e.dateStart = s(e, "dateStart")), (e.dateEnd = s(e, "dateEnd")), (e.dateStart = e.dateEnd = new Date(Math.max(e.dateStart ? e.dateStart.getTime() : 0, e.dateEnd ? e.dateEnd.getTime() : 0)))),
                        t && i._synchronizeProjectDates(t, e),
                        (e.progress = Math.min(Math.max(0, parseFloat(e.progress) || 0), 100)),
                        !e.dateStart && !e.dateEnd && "project" === e.type && !e.synchronized)
                    )
                        return;
                    "milestone" !== e.type && e.dateStart && ((e.dateEnd && e.dateStart.getTime() > e.dateEnd.getTime()) || !e.dateEnd) && (e.dateEnd = new Date(e.dateStart.getTime() + 36e5 * ("day" === i.view ? 1 : 24))),
                        e.dateStart &&
                            e.dateEnd &&
                            (e.duration = i._convertDuration(i.nonworkingDays.length > 0 || i.nonworkingHours.length > 0 ? i._getWorkingTime(e.dateStart, e.dateEnd) : e.dateEnd.getTime() - e.dateStart.getTime(), !0));
                    const o = e.connections;
                    if (o instanceof Array) {
                        for (let e = 0; e < o.length; e++) {
                            const t = o[e],
                                i = (t.target = "string" == typeof t.target ? t.target : parseInt(t.target)),
                                s = (t.type = parseInt(t.type));
                            null == i || ("number" == typeof i && isNaN(i)) || isNaN(s) ? (o.splice(o.indexOf(t), 1), e--) : (t.lag = parseInt(t.lag) || 0);
                        }
                        e.connections = e.connections.map((e) => Object.assign({}, e));
                    } else e.connections = [];
                    return (e.class = e.class ? e.class + "" : ""), (e.class = void 0 !== e.class && null !== e.class ? e.class : ""), e;
                }
                _synchronizeProjectDates(e, t) {
                    function i(i, s) {
                        const n = e.tasks;
                        let r = t[i];
                        if (n) for (let t = 0; t < n.length; t++) n[t].project === e && n[t][i] && (r = new Date(Math[s](n[t][i].getTime(), r.getTime())));
                        return new Date(r);
                    }
                    e.synchronized &&
                        (t.dateStart && (e.dateStart = i("dateStart", "min")),
                        t.dateEnd && (e.dateEnd = i("dateEnd", "max")),
                        t.minDateStart && (e.minDateStart = i("minDateStart", "max")),
                        t.maxDateStart && (e.maxDateStart = i("maxDateStart", "min")),
                        t.minDateEnd && (e.minDateEnd = i("minDateEnd", "max")),
                        t.maxDateEnd && (e.maxDateEnd = i("maxDateEnd", "min")),
                        e.dateStart && e.dateEnd && (e.duration = this._convertDuration(e.dateEnd.getTime() - e.dateStart.getTime(), !0))),
                        e.project && this._synchronizeProjectDates(e.project, t);
                }
                _mouseWheelandler(e) {
                    const t = this,
                        i = (t.shadowRoot || t).querySelector(".smart-task-popup-window");
                    if (i && i.modal && i.opened) return void e.stopPropagation();
                    let s;
                    if (!t.disabled) {
                        if (t.$.resourceSplitterItem.contains(e.target)) {
                            const i = t.$.resourceVerticalScrollBar;
                            if (i.classList.contains("smart-hidden")) return;
                            return (
                                (s = i.value), (0 === s && e.deltaY < 0) || (s === i.max && e.deltaY > 0) ? void e.stopPropagation() : (e.preventDefault(), void t._resourceScrollView.scrollTo(s + t._getScrollCoefficient(e, t.offsetHeight)))
                            );
                        }
                        if (t.$.taskSplitterItem.contains(e.target) && t.computedVerticalScrollBarVisibility) {
                            if (((s = t.scrollTop), (0 === s && e.deltaY < 0) || (s === t.scrollHeight && e.deltaY > 0))) return;
                            e.stopPropagation(), e.preventDefault(), t.scrollTo(s + t._getScrollCoefficient(e, t.offsetHeight));
                        }
                    }
                }
                _handleHeaderTemplate(e = "task") {
                    const t = this;
                    if (!("content" in document.createElement("template"))) return void t.error(t.localize("htmlTemplateNotSuported", { elementType: t.nodeName.toLowerCase() }));
                    const i = t.$[`${e}SplitterItemHeader`],
                        s = t.$[`${e}SplitterItem`],
                        n = "task" === e ? "headerTemplate" : "resourcePanelHeaderTemplate";
                    let r = t[n];
                    if ((s.removeAttribute("show-header"), (i.innerHTML = ""), !r)) return;
                    if ("function" == typeof r) return r(i, {}), void (i.innerHTML ? s.setAttribute("show-header", "") : s.removeAttribute("show-header"));
                    if (("string" == typeof r && (r = document.getElementById(r)), null === r || !("content" in r))) return void t.error(t.localize("invalidTemplate", { elementType: t.nodeName.toLowerCase(), property: n }));
                    let a = document.importNode(r.content, !0);
                    if ((s.setAttribute("show-header", ""), t.shadowRoot)) return (i.innerHTML = "<slot></slot>"), void t.appendChild(a);
                    i.appendChild(a);
                }
                _horizontalScrollbarHandler(e) {
                    e.stopPropagation(), (this.$.timeline.scrollLeft = this.$.resourceTimeline.scrollLeft = this._getScrollLeft(e.detail.value)), this._recycle(e);
                }
                _verticalScrollbarHandler(e) {
                    const t = this;
                    e.stopPropagation(),
                        e.target === t.$.resourceVerticalScrollBar ? (t.$.resourceTimelineContent.scrollTop = Math.round(e.detail.value)) : (t.$.timelineContent.scrollTop = Math.round(e.detail.value)),
                        t._recycle(e),
                        e.context.max !== e.context.value ? e.context.min === e.context.value && t.$.fireEvent("scrollTopReached") : t.$.fireEvent("scrollBottomReached");
                }
            }
        );
    },
});
