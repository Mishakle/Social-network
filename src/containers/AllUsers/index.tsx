import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserCard from '../../components/UserCard';
import { getAllUsersActionCreator } from '../../redux/actions/actions';
import { User } from '../../api/interfaces';
import { getUsers } from '../../redux/selectors/socialData';

const AllUsers: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersActionCreator());
  }, []);
  const usersData = useSelector(getUsers);
  const users = usersData.map((user: User) => (
    <UserCard
      key={user._id}
      userId={user._id}
      picture={user.profileImage}
      username={user.username}
    />
  ));
  return <div>{users}</div>;
};

export default AllUsers;
