import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation between pages
import api from "../api"; // Importing the API module for making HTTP requests
import back_b from "../images/backbutton.jpg" // Importing back button image
import edit_b from "../images/editbutton.png" // Importing edit button image
import "../styls/profile.css" // Importing the CSS styles for the profile page


export default function ProfilePic() {
    // Setting up state to store the profile picture URL
    const [image, SetImage] = React.useState(null);
    const navigate = useNavigate() // Initializing the navigation hook

    // Function to fetch profile data from the API
    const fetchProfile = async () => {
        try {
            const res = await api.get("/profile/"); // Sending a GET request to fetch profile data
            setProfileData(res.data); // Setting the profile data to the response received
        } catch (error) {
            console.error("Error fetching profile:", error); // Log error to console if request fails
        }
    };

    // Using useEffect to fetch profile data when the component mounts
    React.useEffect(() => {
        fetchProfile();
    }, []); // Empty dependency array to ensure it only runs once on mount

    // Function to navigate back to the profile page
    function HandleBack(){
        navigate("/profile")
    }

    // Function to navigate to the profile update page
    function HandleEdit(){
        navigate("/profile/update")
    }

    return(
        <div>
            {/* Back button to go back to the profile page */}
            <button type="button" className="back-button" onClick={HandleBack}>
                <img src={back_b} alt="Back Button" /> {/* Displaying the back button image */}
            </button>
            {/* Profile picture */}
            <img src={image} className="profile-picture-full" alt="Profile" />
            {/* Edit button to go to the profile update page */}
            <button type="button" className="edit-button" onClick={HandleEdit}>
                <img src={edit_b} alt="Edit Button" /> {/* Displaying the edit button image */}
            </button>
        </div>
    )
}
