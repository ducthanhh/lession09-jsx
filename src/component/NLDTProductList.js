import React, { Component } from 'react'

export default class NLDTProductList extends Component {
  render() {
    const { renderNLDTProductList } = this.props;
    console.log("Data:", renderNLDTProductList);
    let nldtElment = renderNLDTProductList.map((nldtStudent,index)=>{
        return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{tvcStudent.tvcId}</td>
              <td>{tvcStudent.tvcName}</td>
              <td>{tvcStudent.tvcAge}</td>
              <td>{tvcStudent.tvcPhone}</td>
              <td>{tvcStudent.tvcEmail}</td>
              <td>{tvcStudent.tvcStatus}</td>
              <td>
                Edit / Delete
              </td>
            </tr>
          );

    })

    return (
      <div>
        <h2>danh sach sinh vien</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ma sinh vien</th>
              <th scope="col">ho ten</th>
              <th scope="col">tuoi</th>
              <th scope="col">dien thoai</th>
              <th scope="col">email</th>
              <th scope="col">trang thai </th>
              <th scope="col">chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {renderNLDTProductList && renderNLDTProductList.map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.status}</td>
                <td>
                  {/* Add your CRUD functionality here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}