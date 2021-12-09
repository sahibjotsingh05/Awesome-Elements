function closeMenu(){
    document.getElementById("menu-check").checked = false;
}
function printPeriodicTable(){
    var gridIndex = 1;
    var AtomicIndex = 0;
    for(var row = 1;row<=9;row++){ 
        if(row == 8){
            document.write('<div class="period lanthanide-row">');
        }
        else{
            document.write('<div class="period">');
        }
        for(var j = 0; j<18;j++){
            if(gridIndex == 1 || gridIndex == 18 || gridIndex == 19 || gridIndex == 20 || (gridIndex>=31 && gridIndex<=36) || gridIndex == 37 || gridIndex == 38 || (gridIndex>=49 && gridIndex<=54) || (gridIndex>=55 && gridIndex<=92)
             || (gridIndex>=130 && gridIndex<=144) || gridIndex > 147){
                document.write('<div class="element" id="atomic-index-'+AtomicIndex+'" onclick="showFacts('+AtomicIndex+');window.location.href=\'#facts-area\';">');
                document.write('<span class="element-info">'+(AtomicIndex+1)+'</span>');
                document.write('<span class="element-symbol">'+data["elements"][AtomicIndex]["symbol"]+'</span>');
                document.write('<span class="element-info">'+data["elements"][AtomicIndex]["name"]+'</span>');
                document.write('</div>');
                AtomicIndex++;
            }
            else{
                if(gridIndex == 93){
                    document.write('<div class="element" style="background-color:transparent;">');
                    document.write('<span class="element-info"></span>');
                    document.write('<span class="element-symbol">*</span>');
                    document.write('<span class="element-info"></span>');
                    document.write('</div>');
                }
                else{
                    if(gridIndex>=94 && gridIndex<=110){
                        document.write('<div class="element" id="atomic-index-'+(AtomicIndex+15)+'"  onclick="showFacts('+(AtomicIndex+15)+');window.location.href=\'#facts-area\';">');
                        document.write('<span class="element-info">'+(AtomicIndex+16)+'</span>');
                        document.write('<span class="element-symbol">'+data["elements"][AtomicIndex+15]["symbol"]+'</span>');
                        document.write('<span class="element-info">'+data["elements"][AtomicIndex+15]["name"]+'</span>');
                        document.write('</div>');
                        AtomicIndex++;
                    }
                    else{
                        if(gridIndex == 111){
                            document.write('<div class="element" style="background-color:transparent;">');
                            document.write('<span class="element-info"></span>');
                            document.write('<span class="element-symbol">**</span>');
                            document.write('<span class="element-info"></span>');
                            document.write('</div>');
                        }
                        else{
                            if(gridIndex>=112 && gridIndex<=126){
                                document.write('<div class="element" id="atomic-index-'+(AtomicIndex+30)+'"  onclick="showFacts('+(AtomicIndex+30)+');window.location.href=\'#facts-area\';">');
                                document.write('<span class="element-info">'+(AtomicIndex+31)+'</span>');
                                document.write('<span class="element-symbol">'+data["elements"][AtomicIndex+30]["symbol"]+'</span>');
                                document.write('<span class="element-info">'+data["elements"][AtomicIndex+30]["name"]+'</span>');
                                document.write('</div>');
                                AtomicIndex++;
                            }
                            else{
                                if(gridIndex == 129){
                                    document.write('<div class="element lanthanide-marker">');
                                    document.write('<span class="element-info"></span>');
                                    document.write('<span class="element-symbol">*</span>');
                                    document.write('<span class="element-info"></span>');
                                    document.write('</div>');
                                    AtomicIndex = 56;
                                }
                                else{
                                    if(gridIndex == 147){
                                        document.write('<div class="element lanthanide-marker">');
                                        document.write('<span class="element-info"></span>');
                                        document.write('<span class="element-symbol">**</span>');
                                        document.write('<span class="element-info"></span>');
                                        document.write('</div>');
                                        AtomicIndex = 88;
                                    }
                                    else{
                                        document.write('<div class="element null"></div>');
                                    }
                                }
                            }
                        }
                    }
                }
            }
            gridIndex++;
        }
        document.write('</div>');
    }
}
function showFacts(atomicIndex){
    document.getElementById("facts-area").style.display = "block";
    var table = document.getElementById("table-area");
    var html = "";
    html += "<table>";

    var keys = ["name","appearance","atomic_mass","period","xpos","color","boil","density","category","discovered_by","melt","molar_heat","named_by",
                    "electronic_configuration","electron_affinity","electronegativity_pauling","summary"];
    var keys_heading = ["NAME:","APPEARANCE:","ATOMIC MASS:","PERIOD:","GROUP NUMBER:","COLOR:","BOILING POINT(KELVIN):","DENSITY(g/L):","CATEGORY:","DISCOVERED BY:","MELTING POINT:","MOLAR HEAT:","NAMED BY:",
                    "ELECTRONIC CONFIGURATION:","ELECTRON AFFINITY:","ELECTRONEGATIVITY(PAULING'S SCALE):","SUMMARY:"];

    for(keyIndex = 0; keyIndex < keys.length; keyIndex++){
        if(data["elements"][atomicIndex][keys[keyIndex]] == null){
            continue;
        }
        html += '<tr>';
        html += '<td>'+keys_heading[keyIndex]+'</td>';
        html += '<td>';
        html += data["elements"][atomicIndex][keys[keyIndex]];
        html += '</td>';
        html += '</tr>';
    }
    html += "</table>";
    table.innerHTML = html;
    var heading = document.getElementById("facts-heading");
    var headingString = "Awesome Facts About "+data["elements"][atomicIndex]["name"]+"";
    heading.innerHTML = headingString;

    var ElementId = "atomic-index-"+atomicIndex+"";
    var colorOfElement = document.getElementById(ElementId).style.background;
    document.getElementById("card").style.background = colorOfElement;
    document.getElementById("card-number").innerHTML = data["elements"][atomicIndex]["number"];
    document.getElementById("card-symbol").innerHTML = data["elements"][atomicIndex]["symbol"];
    document.getElementById("card-name").innerHTML = data["elements"][atomicIndex]["name"];
}
function changeColor(type){
    if(type == "atomic_mass"){
        if(document.getElementById("block-info")){
            document.getElementById("block-info").style.display = "none";
        }
        //defining color range
        ColorStartRed = 200;
        ColorStartGreen = 245;
        ColorStartBlue = 255;

        ColorEndRed = 0;
        ColorEndGreen = 121;
        ColorEndBlue = 149;

        CommonDifferenceRed = -(ColorStartRed - ColorEndRed )/118;
        CommonDifferenceGreen = -(ColorStartGreen - ColorEndGreen )/118;
        CommonDifferenceBlue = -(ColorStartBlue - ColorEndBlue)/118;

        for(var atmIndex = 0,ColRed = ColorStartRed,ColGreen = ColorStartGreen,ColBlue = ColorStartBlue;atmIndex <= 117; atmIndex++,ColRed+= CommonDifferenceRed,ColGreen += CommonDifferenceGreen,ColBlue += CommonDifferenceBlue ){
            var elementId = "atomic-index-"+atmIndex+"";
            document.getElementById(elementId).style.background = "rgb("+ColRed+","+ColGreen+","+ColBlue+")";
        }
        document.getElementById("facts-area-gradient").style.display = "block";
        document.getElementById("bar-gradient").style.backgroundImage = "linear-gradient(to right, rgb("+ColorStartRed+","+ColorStartGreen+","+ColorStartBlue+") , rgb("+ColorEndRed+","+ColorEndGreen+","+ColorEndBlue+"))";
    }
    if(type=="ionization-energy"){
        if(document.getElementById("block-info")){
            document.getElementById("block-info").style.display = "none";
        }
        order_ionization = [54,86,36,18,10,88,55,87,2,70,58,59,57,56,60,61,62,37,48,64,90,65,94,12,95,30,66,93,67,80,19,63,68,91,96,38,69,92,97,89,98,99,20,100,39,101,22,40,23,71,21,41,42,82,49,43,81,24,44,72,46,27,11,28,74,73,26,31,25,13,4,45,83,75,50,77,76,47,51,78,84,3,29,33,32,15,79,52,14,85,5,34,53,16,0,7,35,6,17,8,9,1];
        ColorStartRed = 210;
        ColorStartGreen = 180;
        ColorStartBlue = 222;

        ColorEndRed = 108;
        ColorEndGreen = 52;
        ColorEndBlue = 131;

        CommonDifferenceRed = -(ColorStartRed - ColorEndRed )/118;
        CommonDifferenceGreen = -(ColorStartGreen - ColorEndGreen )/118;
        CommonDifferenceBlue = -(ColorStartBlue - ColorEndBlue)/118;

        for(var atmIndex = 0,ColRed = ColorStartRed,ColGreen = ColorStartGreen,ColBlue = ColorStartBlue;atmIndex < order_ionization.length; atmIndex++,ColRed+= CommonDifferenceRed,ColGreen += CommonDifferenceGreen,ColBlue += CommonDifferenceBlue ){
            var elementId = "atomic-index-"+order_ionization[atmIndex]+"";
            document.getElementById(elementId).style.background = "rgb("+ColRed+","+ColGreen+","+ColBlue+")";
        }
        for(var atmIndex = 102;atmIndex < 118;atmIndex++){
            var elementId = "atomic-index-"+atmIndex+"";
            document.getElementById(elementId).style.background = "rgba(241, 241, 241, 0.95)";
        }
        document.getElementById("facts-area-gradient").style.display = "block";
        document.getElementById("bar-gradient").style.backgroundImage = "linear-gradient(to right, rgb("+ColorStartRed+","+ColorStartGreen+","+ColorStartBlue+") , rgb("+ColorEndRed+","+ColorEndGreen+","+ColorEndBlue+"))";
        document.getElementById("label-gradient").innerHTML = "Ionization Energy";
    }
    if(type == "e_config"){
        document.getElementById("facts-area-gradient").style.display = "none";
        s_block_elements = [0,1,2,3,10,11,18,19,36,37,54,55,86,87];
        p_block_elements = [4,5,6,7,8,9,12,13,14,15,16,17,30,31,32,33,34,35,48,49,50,51,52,53,80,81,82,83,84,85,112,113,114,115,116,117];
        d_block_elements = [20,21,22,23,24,25,26,27,28,29,38,39,40,41,42,43,44,45,46,47,71,72,73,74,75,76,77,78,79,103,104,105,106,107,108,109,110,111];
        f_block_elements = [56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102];
        for(var i = 0; i < s_block_elements.length; i++){
            var elementId = "atomic-index-"+s_block_elements[i]+"";
            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.3))";
        }
        for(var i = 0; i < p_block_elements.length; i++){
            var elementId = "atomic-index-"+p_block_elements[i]+"";
            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0.3))";
        }
        for(var i = 0; i < d_block_elements.length; i++){
            var elementId = "atomic-index-"+d_block_elements[i]+"";
            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(255, 255, 0, 0.2), rgba(255, 255, 0, 0.3))";
        }
        for(var i = 0; i < f_block_elements.length; i++){
            var elementId = "atomic-index-"+f_block_elements[i]+"";
            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(0, 128, 255, 0.2), rgba(0, 128, 255, 0.3))";
        }
        document.getElementById("block-info").style.display = "flex";
    }
    if(type == "default"){
        if(document.getElementById("facts-area-gradient")){
            document.getElementById("facts-area-gradient").style.display = "none";
        }
        if(document.getElementById("block-info")){
            document.getElementById("block-info").style.display = "none";
        }
        for(var atmIndex = 0 ; atmIndex <= 117; atmIndex++){
            var elementId = "atomic-index-"+atmIndex+"";

            if(atmIndex == 0 || (atmIndex >= 5 && atmIndex <= 8) || (atmIndex >= 14 && atmIndex <= 16) || (atmIndex >= 33 && atmIndex <= 34) ||
            atmIndex == 52 || atmIndex == 84 || atmIndex == 116 ){
                document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(255, 255, 0, 0.2), rgba(255, 255, 0, 0.3))";
            }
            else{
                 if(atmIndex == 1 || atmIndex == 9  || atmIndex == 17 || atmIndex == 35 || atmIndex == 53 || atmIndex == 85 || atmIndex == 117){
                    document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(255, 152, 0, 0.2), rgba(255, 152, 0, 0.3))"; 
                }
                else{
                    if(atmIndex == 2 || atmIndex == 10 || atmIndex == 18 || atmIndex == 36 || atmIndex == 54  || atmIndex == 86){
                        document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.25))";
                    }
                    else{
                        if(atmIndex == 3 || atmIndex == 11 || atmIndex == 19 || atmIndex == 37 || atmIndex == 55 || atmIndex == 87){
                            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(64, 64, 255, 0.2), rgba(64, 64, 255, 0.25))";
                        }
                        else{
                            if(atmIndex == 4 || atmIndex == 13 || atmIndex == 31 || atmIndex == 32 || atmIndex == 50 || atmIndex == 51 || atmIndex == 83){
                                document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(140, 190, 0, 0.2), rgba(140, 190, 0, 0.3))";
                            }
                            else{
                                if(atmIndex == 12 || (atmIndex >= 112 && atmIndex <= 115) || (atmIndex >= 80 && atmIndex <= 82) || atmIndex == 30 || atmIndex == 49 || atmIndex == 48 ){
                                    document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0.3))";
                                }
                                else{
                                    if(atmIndex >= 56 && atmIndex <= 70){
                                        document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(0, 255, 255, 0.25), rgba(0, 255, 255, 0.35))";
                                    }
                                    else{
                                        if(atmIndex >= 88 && atmIndex <= 102){
                                            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(64, 255, 192, 0.25), rgba(64, 255, 192, 0.35))";
                                        }
                                        else{
                                            document.getElementById(elementId).style.background = "linear-gradient(110deg, rgba(0, 128, 255, 0.2), rgba(0, 128, 255, 0.3))";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}