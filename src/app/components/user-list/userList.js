import React, { useState, useEffect } from "react";
import "./userList.scss";

import axios from "axios"

import { UserCard} from "app/components";

function UserList({users}) {

  return (
    <div>
      <div className="user-list">
        {users.map(function (user, index) {
          return <UserCard user={user} key={index} number={index}/>;
        })}
      </div>
    </div>
  );
}

export default UserList;
