import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridApi,
  GridColDef,
  GridEditCellValueParams,
} from "@mui/x-data-grid";
import Loader from "../../../components/loader";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "right",
  color: theme.palette.text.secondary,
  height: "700px",
}));

interface UserData {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  emailConfirmed: boolean,
  lockedOut: string,
  role: string,
}

const AllUsers = () => {
  const { GetAllUsers } = useActions();
  const { DeleteUser } = useActions();
  const { EditUser } = useActions();
  const { loading, allUsers } = useTypedSelector((state) => state.UserReducer);

  let rows: any[] = allUsers;
  const [isRedirect, setIsRedirect] = useState(false);



  useEffect(() => {
    GetAllUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (isRedirect) {
    return <Navigate to="/dashboard/userDetails" />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">FirstName</TableCell>
            <TableCell align="center">LastName</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">EmailConfirmed</TableCell>
            <TableCell align="center">LockedOut</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Delete</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((user: UserData) => (
            <TableRow key={user.id}>
              <TableCell align="center">{user.firstName}</TableCell>
              <TableCell align="center">{user.lastName}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.emailConfirmed ? 'true' : 'false'}</TableCell>
              <TableCell align="center">{user.lockedOut ? user.lockedOut : '-'}</TableCell>
              <TableCell align="center">{user.role}</TableCell>
              <TableCell align="center"><Button onClick={() => DeleteUser(user.id)}>Delete</Button></TableCell>
              <TableCell align="center"><Button onClick={() => EditUser(user)}>Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;