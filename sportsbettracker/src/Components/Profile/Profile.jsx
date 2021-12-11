import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';
import './Profile.css';


const Profile = (props) => {
    const[profiles, setProfiles] = useState([])
    const[searchProfile, setSearchProfile]= useState("");
    const[profit, setProfit]= useState("")
    const[username, setUsername] = useState("")
    const[currentProfile, setCurrentProfile]= useState({})
    const[allBets, setAllBets]= useState([])


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
        getBets()
        console.log(allBets)
    },[])

    const getBets = async () => {
        try{
            let jwt = localStorage.getItem('token')
            let response = await axios.get("http://127.0.0.1:8000/bets/", { headers: {Authorization: 'Bearer ' + jwt}})
            setAllBets(response.data)
            console.log(response.data)
            } catch (err) {
                console.log("Error with bets call", err)
            }
    }


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
                            <p onClick={()=> setCurrentProfile(val)}>@{val.username}</p>
                        </div>
                    );
                })}
            </div>
            <div className="profile">
                <h1>@{currentProfile.username}</h1>
                <h3>unit_profitability: {currentProfile.unit_profitability}</h3>
            </div>
            <div className="profile">
                <h1>Active Bets</h1>
                {allBets.map((bet)=>{
                    if(currentProfile.id === bet.user_id){
                        return(
                                <p>{bet.team}</p>
                            
                        )
                    }
                })}
            </div>
    
        
        </Fragment>
    )
}
export default Profile;