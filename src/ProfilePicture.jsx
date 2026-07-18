


function ProfilePicture(){
    const imageUrl="./src/assets/dazai.jpg";
    const handleClick =(e)=> e.target.style.display="none";


    return(<img className="profile-pic" onClick={(e)=>handleClick(e)} src={imageUrl} alt="Profile Picture"></img>)
}

export default ProfilePicture;