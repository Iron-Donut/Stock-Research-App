import React from 'react';
import { useSelector } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProfileDisplay from './ProfileDisplayDictionary';

function CompanyProfile() {
  const profile = useSelector(state => state.stockInfo.profileInfo);

  const displayRows = () => {
    return (
      ProfileDisplay.map(item => (
        <TableRow>
        <TableCell>{item.displayName}</TableCell>
        <TableCell>{profile[item.name]}</TableCell>
        </TableRow>
      )
      )
    )
  }

  return (
    <div style={{ width: '25%' }}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="company-profile">
          <TableBody>
            {displayRows()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompanyProfile;