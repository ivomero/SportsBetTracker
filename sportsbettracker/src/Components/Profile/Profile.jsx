import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';
import './Profile.css';


const Profile = (props) => {
    const[profiles, setProfiles] = useState([])
    const[searchProfile, setSearchProfile]= useState("");


    const getProfiles = async () => {
        try{
        let jwt = localStorage.getItem('token')
        let response = await axios.get("http://127.0.0.1:8000/api/auth/profile/", { headers: {Authorization: 'Bearer ' + jwt}})
        setProfiles(response.data)
        console.log(response.data)
        } catch (err) {
            console.log("Error with API profile call", err)
        }
    }
    useEffect(()=> {
        getProfiles()
    },[])

    return(
        <Fragment>
            <div className='Search'>
                <input type="text" placeholder="Search..." onChange={(event)=>{
                    setSearchProfile(event.target.value);
                }} />
                {profiles.filter((val)=>{
                    if (searchProfile === ""){
                        return val
                    } else if (val.username.toLowerCase().includes(searchProfile.toLowerCase())){
                        return val
                    }
                }).map((val, key)=> {
                    return(
                        <div className='Profiles' key={key}>
                            <p>@{val.username}</p>
                        </div>
                    );
                })}
            
            </div>
        
        </Fragment>
    )
}
export default Profile;