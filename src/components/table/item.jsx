import React from 'react';

const Item = ({ users }) => {
  return (
    <React.Fragment>
      {users.map((item) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.dateOfRegistry}</td>
            <td>{item.fullName}</td>
            <td>{item.position}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.phone}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default Item;
