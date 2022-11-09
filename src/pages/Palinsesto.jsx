import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Alert, AlertTitle, Box } from "@mui/material";
import axios from "axios";

// const validatedate = (date) => {
//   const re =
//     /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
//   return re.test(String(date).toLowerCase());
// };

export default function Palinsesto() {
  const [film, setFilm] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  let columns = [
    { title: "Titolo", field: "film.titolo" },
    { title: "Sala", field: "sala.numero_sala" },
    // { title: "Data", field: "sala" },
     { title: "Prezzo", field: "prezzo" }
  ];

  useEffect(() => {
    axios
      .get(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/1/spettacoli`)
      .then((res) => {
        const films = res.data;
        setFilm(films);
        console.log(films);
      });
  }, []);

  //function for updating the existing row details
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validating the data inputs
    let errorList = [];
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field");
    }
    if (newData.duration === "") {
      errorList.push("Try Again, You didn't enter the duration field");
    }
    // if (newData.date === "" || validatedate(newData.date) === false) {
    //   errorList.push("Oops!!! Please enter a valid date");
    // }
    if (newData.hall === "") {
      errorList.push("Try Again, hall number field can't be blank");
    }
    if (newData.cinema === "") {
      errorList.push("Try Again, Enter cinema url before submitting");
    }

    if (errorList.length < 1) {
      axios
        .post(
          `https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/spettacolo/${newData.id}`,
          newData
        )
        .then((response) => {
          const updatefilm = [...film];
          const index = oldData.tableData.id;
          updatefilm[index] = newData;
          setFilm([...updatefilm]);
          resolve();
          setIserror(false);
          setErrorMessages([]);
        })
        .catch((error) => {
          setErrorMessages(["Update failed! Server error"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  //function for deleting a row
  const handleRowDelete = (oldData, resolve) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/films/${oldData.id}`)
      .then((response) => {
        const dataDelete = [...film];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setFilm([...dataDelete]);
        resolve();
      })
      .catch((error) => {
        setErrorMessages(["Delete failed! Server error"]);
        setIserror(true);
        resolve();
      });
  };

  //function for adding a new row to the table
  const handleRowAdd = (newData, resolve) => {
    //validating the data inputs
    let errorList = [];
    if (newData.name === "") {
      errorList.push("Try Again, You didn't enter the name field");
    }
    if (newData.duration === "") {
      errorList.push("Try Again, You didn't enter the duration field");
    }
    // if (newData.date === "" || validatedate(newData.date) === false) {
    //   errorList.push("Oops!!! Please enter a valid date");
    // }
    if (newData.hall === "") {
      errorList.push("Try Again, hall number field can't be blank");
    }
    if (newData.cinema === "") {
      errorList.push("Try Again, Enter cinema url before submitting");
    }

    if (errorList.length < 1) {
      axios
        .post(`https://0ptix34dk9.execute-api.eu-central-1.amazonaws.com/spettacolo`, newData)
        .then((response) => {
          let newfilmdata = [...film];
          newfilmdata.push(newData);
          setFilm(newfilmdata);
          resolve();
          setErrorMessages([]);
          setIserror(false);
        })
        .catch((error) => {
          setErrorMessages(["Cannot add data. Server error!"]);
          setIserror(true);
          resolve();
        });
    } else {
      setErrorMessages(errorList);
      setIserror(true);
      resolve();
    }
  };

  return (

    <Box sx={{ width: "70%", ml: "25%", mt: "5%" }}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <MaterialTable
          title="film Details"
          columns={columns}
          data={film}
          options={{
            actionsColumnIndex: -1,
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleRowUpdate(newData, oldData, resolve);
              }),
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                handleRowDelete(oldData, resolve);
              }),
          }}
        />

        {iserror && (
          <Alert severity="error">
            <AlertTitle>ERROR</AlertTitle>
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>;
            })}
          </Alert>
        )}
    </Box>
  );
}
