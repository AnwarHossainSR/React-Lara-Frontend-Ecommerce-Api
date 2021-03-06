import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Table } from "react-bootstrap";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Header from "./Header";
import Swal from "sweetalert2";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function editProduct(id){
    let result = await fetch("http://localhost:8000/api/productget/"+id);
    result = await result.json();
    setData(result);
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  async function deleteProduct(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        successMessage(id);
      }
    });
  }

  async function successMessage(id) {
    await fetch("http://127.0.0.1:8000/api/productdelete/" + id, {
      method: "DELETE",
    });
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getData();
  }

  async function getData() {
    let result = await fetch("http://localhost:8000/api/productlist");
    result = await result.json();
    setData(result);
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  return (
    <div>
      <Header />
      {localStorage.getItem("user-info") ? (
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-1">
              <h1 className="text-center text-primary py-3">All Products</h1>
              <Table id="example" striped hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.description}</td>
                      <td>
                        <img
                          src={"http://127.0.0.1:8000/" + item.file_path}
                          width="120"
                          height="120"
                        />
                      </td>
                      <td>
                        <Link to={"update/"+item.id} key={item.id}>
                          <i className="fa fa-2x fa-edit text-primary"/>
                        </Link>
                        <i
                          className="ml-2 fa fa-2x fa-trash text-danger mr-2"
                          onClick={() => deleteProduct(item.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      ) : (
        <h2>Please Login first</h2>
      )}
    </div>
  );
};

export default Home;
