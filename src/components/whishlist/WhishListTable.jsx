import React from "react";

const WhishListTable = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">المنتج</th>
          <th>الكمية</th>
          <th>السعر</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WhishListTable;
