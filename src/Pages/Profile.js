import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Profile = () => {
  let navigate = useNavigate();
  let {username} = useParams();
  // best practice to use ID's for the sake of the API

  return (
    <div>
        This is {username}'s page
        <button onClick={() => {
            navigate("/about")
        }}>
        Change to about page
        </button>
    </div>
  )
}
