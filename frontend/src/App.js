import React from "react";
import ReactToExcel from "react-html-table-to-excel";
import "./App.css";

function App() {
  return (
    <div className="container">
      <table className="tftable" id="table-to-xls" border="1">
        <tr>
          <th>NAME</th>
          <th>ADDRESS</th>
          <th>PHONE</th>
          <th>AGE</th>
          <th>RESULT</th>
        </tr>
        <tr>
          <td>BIRAJ HALDER</td>
          <td>RADHAKANTAPUR</td>
          <td>9732257714</td>
          <td>26</td>
          <td>PASS</td>
        </tr>
        <tr>
          <td>ANU HALDER</td>
          <td>RADHAKANTAPUR</td>
          <td>9732257124</td>
          <td>16</td>
          <td>PASS</td>
        </tr>
        <tr>
          <td>TONI HALDER</td>
          <td>KOLKATA</td>
          <td>9732257714</td>
          <td>26</td>
          <td>PASS</td>
        </tr>
        <tr>
          <td>BILTU HALDER</td>
          <td>RADHAKANTAPUR</td>
          <td>9732257714</td>
          <td>6</td>
          <td>FAIL</td>
        </tr>
        <tr>
          <td>BARSHA HALDER</td>
          <td>RADHAKANTAPUR</td>
          <td>9732257714</td>
          <td>9</td>
          <td>PASS</td>
        </tr>
        <tr>
          <td>BABLU HALDER</td>
          <td>MATHURAPUR</td>
          <td>9732257714</td>
          <td>36</td>
          <td>FAIL</td>
        </tr>
      </table>

      <ReactToExcel
        className="btn"
        table="table-to-xls"
        filename="excelFile"
        sheet="sheet 1"
        buttonText="Excel File"
      />
    </div>
  );
}

export default App;
