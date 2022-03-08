import React from 'react';
// import { useLogInQuery } from '../services/authControllerApi';


const UserProfile = (props) => {

    
    // const { data: userInfo, isFetching, isLoading } = useLogInQuery(
    //     JSON.stringify({
    //         username: props.get('username'),
    //         password: props.get('password'),
    //       }),
    //       {
    //     pollingInterval: 3000,
    //     refetchOnMountOrArgChange: true,
    //     skip: false,
    //   }
    // );
    
    // if (isLoading) return <div>Loading...</div>

    return (
        <div>
            {/* {isFetching ? '...refetching' : ''}
            {userInfo && userInfo.map((user)=>{
            return <li key={user.id}>{user.username}</li>
            })} */}
        </div>
    );
}

export default UserProfile;