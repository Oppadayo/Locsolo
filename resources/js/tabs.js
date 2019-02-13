var tabButtons=document.querySelectorAll(".section-equipamentos .btn-tab button");
var tabPanels=document.querySelectorAll(".section-equipamentos .content");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
   
}
showPanel(0,'#0BA360');