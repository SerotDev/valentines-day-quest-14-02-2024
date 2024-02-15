// ------------------------------------------------------------------------------------------------------
// Author: Sergi Rodriguez Utge (SerotDev)
// Description: Project Valentines Day Quest - Developed by SerotDev (https://github.com/SerotDev)
// Version: 1.0
// Copyright (c) 2024 SerotDev
// ------------------------------------------------------------------------------------------------------

// jQuery event handler for the click event on the element with the ID 'downloadPDF'
$('#downloadPDF').click(function () {
    // Use domtoimage to convert the content of the element with ID 'to-img-pdf' to a PNG image
    domtoimage.toPng(document.getElementById('to-img-pdf'))
        .then(function (blob) {
             // Create a new jsPDF object with landscape orientation, points as units, and dimensions based on the width and height of the 'to-img-pdf' element
            var pdf = new jsPDF('l', 'pt', [$('#to-img-pdf').width(), $('#to-img-pdf').height()]);

            // Add the PNG image as a page to the PDF at coordinates (0, 0) with dimensions matching the 'to-img-pdf' element
            pdf.addImage(blob, 'PNG', 0, 0, $('#to-img-pdf').width(), $('#to-img-pdf').height());

            // Save the PDF file with the name 'tarjeta-rasca.pdf'
            pdf.save("tarjeta-rasca.pdf");
        });
});