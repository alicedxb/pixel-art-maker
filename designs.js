// Starting color
let pixelColor = "#000";

// When size is submitted by the user, call makeGrid()
$(function() {
	const inputSubmit = $("#sizePicker");
    inputSubmit.submit(makeGrid)
})

// Creates table based on user input
function makeGrid() {
	const td = $("td");
	const tr = $("tr");
    let gridHeight = $("#input_height").val();
    let gridWidth= $("#input_width").val();
    const table = $("#pixel_canvas");
    // Removes old grid
    if (td.length !== 0) {
        td.remove()
    }
    if (tr.length !== 0) {
        tr.remove()
    }
    for (let i = 0; i < gridHeight; i++) {
    	table.prepend("<tr></tr>");
    	for (let y = 0; y < gridWidth; y++) {
    		let row = table.children().first()
    		row.append("<td></td>")
            }    
        }   return false;
    }

// Allows user to select color from palette
$("#colorPicker").change(function() {
        $("#colorPicker").attr("value", $(this).val());
        pixelColor = $("#colorPicker").attr("value");
    });

    //td EventListener to color the pixels
    $("#pixel_canvas").on("click", "td", function() {
        $(this).css('background-color', pixelColor);
    });

makeGrid();
