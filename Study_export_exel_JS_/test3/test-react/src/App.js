import './App.css';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// var XLSX = require('xlsx');

function App() {
  var excelHandler = {
    getExcelFileName: function () {
      return 'NameTesttable-test.xlsx';
    },
    getSheetName: function () {
      return 'Table Test Sheet';
    },
    getExcelData: function () {
      let buffer = document.getElementById('tableData');
      console.log('getExcelData buffer:', buffer);
      return buffer;
    },
    getWorksheet: function () {
      return XLSX.utils.table_to_sheet(this.getExcelData());
    },
  };
  console.log('linked? js');
  //공통
  // 참고 출처 : https://redstapler.co/sheetjs-tutorial-create-xlsx/
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
    return buf;
  }
  function exportExcel() {
    // step 1. workbook 생성
    console.log('step 1');
    var wb = XLSX.utils.book_new();
    console.log('wb:', wb);

    // step 2. 시트 만들기
    console.log('step 2');
    var newWorksheet = excelHandler.getWorksheet();
    console.log('newWorksheet:', newWorksheet);

    // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.
    console.log('step 3');
    XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());
    console.log('wb:', wb);

    // step 4. 엑셀 파일 만들기
    console.log('step 4');
    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    console.log('wbout:', wbout);

    // step 5. 엑셀 파일 내보내기
    saveAs(
      new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
      excelHandler.getExcelFileName()
    );
  }
  // $(document).ready(function () {
  //   $('#excelFileExport').click(function () {
  //     exportExcel();
  //   });
  // });

  return (
    <div className="App">
      <div className="test-center">
        'test'
        {/* <body> */}
        {/* <table id="tableData" style="border: 1px solid #dddddd"> */}
        <table id="tableData" style={{ border: '1px solid #dddddd' }}>
          <thead>
            <tr>
              <th>이름</th>
              <th>CP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>망나뇽</td>
              <td>4000</td>
            </tr>
            <tr>
              <td>마기라스</td>
              <td>3900</td>
            </tr>
            <tr>
              <td>해피너스</td>
              <td>3800</td>
            </tr>
          </tbody>
        </table>
        파일 내보내기(HTML TABLE) :
        <input
          type="button"
          id="excelFileExport"
          value="엑셀 파일 다운로드(TABLE)"
          onClick={exportExcel}
        />
        {/* </body> */}
      </div>
    </div>
  );
}

export default App;
