import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {
  Table, TableBody, TableCell, TableContainer,
  TableRow, Paper, TableHead ,
} from '@material-ui/core';
import ProfileDisplay from './ProfileDisplayDictionary';
import DefinitionModal from './DefinitionModal';
import {
  dateToMMDDYYYYConverter, floatWithRounding, percentageConverter
} from '../../utils/stringConversions';
import './CompanyProfile.css';

function CompanyProfile() {
  const profile = useSelector(state => state.stockInfo.profileInfo);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ displayName: "", definition: ``, currency: false });

  const handleModal = (item) => {
    if (item.definition) {
      setModalInfo(item)
      setModalOpen(true);
    }
  }

  const displayValue = (item) => {
    const value = profile[item.name];
    if(item.currency){
      return floatWithRounding(value);
    }
    if (item.date) {
      return dateToMMDDYYYYConverter(value);
    }
    if (item.percentage) {
      return percentageConverter(value);
    }
    
    return value;
  }

  const displayRows = () => {
    return (
      ProfileDisplay.map((item, index) => (
        <TableRow className="profile-rows" onClick={() => handleModal(item)} key={index}>
          <TableCell>{item.displayName}</TableCell>
          <TableCell style={{ width: "25%" }}>{displayValue(item)}</TableCell>
        </TableRow>
      )
      )
    )
  }

  const displayHeader = () => {
    return (
      <TableHead>
        <TableRow className="profile-header-row">
          <TableCell style={{ color: '#ffffff'}}>Snapshot</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
    );
  };

  return (
    <div style={{ width: '20%' }}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="company-profile">
          {displayHeader()}
          <TableBody>
            {displayRows()}
          </TableBody>
        </Table>
      </TableContainer>
      <DefinitionModal open={modalOpen} setOpen={setModalOpen} info={modalInfo}/>
    </div>
  );
};

export default CompanyProfile;