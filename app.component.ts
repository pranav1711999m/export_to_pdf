import { Component, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';

import 'jspdf-autotable';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'exp';
  @ViewChild('TABLE', { static: false })
  TABLE!: ElementRef;

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'state.xlsx');
  }
  generatePdf() {
    var pdf = new jsPDF();
    pdf.text('States Data', 11, 8);
    pdf.setFontSize(12);
    pdf.setTextColor(99);


    (pdf as any).autoTable({

      head: this.header,
        body: this.states ,
    didDrawCell: (data: { column: { index: any; }; }) => {
        console.log(data.column.index)
    }
    })
    pdf.save('state.pdf');
}


header = [['Sno', 'State', 'population in %', 'National share']]

states = [
    [1, 'kerela', '3', '2.76'],
    [2, 'Tamil nadu', '7.2', '5.96'],
    [3, 'Karnataka', '6', '5.05'],
    [4, 'goa', '1.8', '0.12'],
    [5, 'Maharashtra', '11', '9.28'],
    [6, 'Telengana', '3.5', '2.869'],
    [7,  'Andrapradesh','4.9','4.1'],
    [8, 'West Bengal', '9', '7.54']
]

  state: any = [{

    Sno: 1,
    state: 'kerela',
    population: 3,
    ns: 2.76

  }, {
    Sno: 2,
    state: 'Tamil nadu',
    population: 7.2,
    ns: 5.96

  },
  {
    Sno: 3,
    state: 'karnataka',
    population: 6,
    ns: 5.05


  },
  {
    Sno: 4,
    state: 'goa',
    population:
    1.8,
    ns: 0.12

  },
  {
    Sno: 5,
    state: 'Maharashtra',
    population: 11,
    ns:
    9.28
  },
  {
    Sno: 6,
    state: 'Telengana',
    population: 3.5,
    ns: 2.869
  },
  {
    Sno: 7,
    state: 'Andrapradesh',
    population: 4.9,
    ns: 4.1
  },
  {
    Sno: 8,
    state: ' west bengal  ',
    population: 9,
    ns: 7.54

  }
  ];
}



