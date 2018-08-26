var setupPanelID = 0;
var dashPanelID = 0;

function newPanel() {
    var panel = '<div id="setupPanel' + setupPanelID + '" class="setupPanel"><div id="dashPanelHeader" class="dashPanelHeader">Setup<a id="closeButton" onclick="removePanel(`setupPanel'+ setupPanelID +'`)">🗙</a></div><div class="row"><span><input class="balloon" id="panelTitle' + setupPanelID + '" type="text" placeholder="Panel name"><label for="panelTitle">Title</label></span><span><input class="balloon" id="embed' + setupPanelID + '" type="text" placeholder="Paste HTML here"><label for="embed">Embed</label></span><a id="acceptButton" class="button" onclick="addPanel(document.getElementById(`panelTitle' + setupPanelID + '`).value, document.getElementById(`embed' + setupPanelID + '`).value, `setupPanel' + setupPanelID + '`);">add</a></div></div>'
    $("#newPanel").before(panel);
    setupPanelID += 1;
}

function addPanel(title, embed, panelId) {
    var panel = '<div id="dashPanel' + dashPanelID + '" class="dashPanel"><div id="dashPanelHeader" class="dashPanelHeader">' + title + '<a id="closeButton" onclick="removePanel(`dashPanel'+ dashPanelID +'`)">🗙</a></div><div id="dashPanelMain" class="dashPanelMain">' + embed + '</div><div id="dashPanelFooter" class="dashPanelFooter"></div></div>'
    $("#" + panelId).replaceWith(panel);
    dashPanelID += 1;
}

function removePanel(panelId) {
    $("#" + panelId).remove();
}