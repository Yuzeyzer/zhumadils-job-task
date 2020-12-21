import React from 'react';
import Time from 'react-time';
import { columns } from './const';
import { DataGrid } from '@material-ui/data-grid';

const TableData = ({ usersData }) => {
  const result = [...usersData];

  const countLength = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let separator = '.';
    return usersData.map((item, index) => {
      return usersData[index].dateOfRegistry.length !== 0
        ? item.dateOfRegistry
        : (result[index].dateOfRegistry = `${date}${separator}${
            month < 10 ? `0${month}` : `${month}`
          }${separator}${year}`);
    });
  };
  countLength();
  return (
    <React.Fragment>
      <DataGrid rows={result} columns={columns} pageSize={20} checkboxSelection />
    </React.Fragment>
  );
};

export default TableData;
