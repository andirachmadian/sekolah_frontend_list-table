import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const UserDetail = (props) => {
  const [userDataDetail, setUserDataDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const getUserDetail = async (userId) => {
    try {
      setLoading(true);
      const resp = await axios.get(`https://reqres.in/api/users/${userId}`);
      setUserDataDetail(resp.data.data);
      setLoading(false);
      console.log(resp);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetail(props.match.params.id);
    console.log(props.match.params.id);
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
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <td className='has-text-centered' colSpan='4'>
              <span className='icon'>
                <i className='fa fa-spinner fa-pulse'></i>
                loading ....
              </span>
            </td>
          ) : (
            <tr key='id'>
              <td>{userDataDetail.email}</td>
              <td>{userDataDetail.first_name}</td>
              <td>{userDataDetail.last_name}</td>
              <td>
                <img src={userDataDetail.avatar} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(UserDetail);
