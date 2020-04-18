import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [dataUser, setDataUser] = useState([]);

  const getUserData = async () => {
    await axios
      .get('https://reqres.in/api/users/')
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // component didMount
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>

        {dataUser.map((e) => {
          return (
            <tbody>
              <tr key='id'>
                <td>{e.email}</td>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>
                  <img src={e.avatar} />
                </td>
                <td>
                  <button className='button is-primary'>detail</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
