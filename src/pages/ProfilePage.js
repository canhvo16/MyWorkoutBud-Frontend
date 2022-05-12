

const ProfilePage = ({ user, editor, showEditor }) => {
  let img
  let profileBox

  if (user) {
    if (user.photo) {
      img = user.photo
    } else {
      img =
        'https://www.pngitem.com/pimgs/m/121-1210928_bodybuilding-and-dumbbells-vector-image-illustration-transparent-background.png'
    }
    profileBox = (
      <div>
        <img src={img} alt="profile"></img>
        <h1>{user.name}</h1>
      </div>
    )
  }

  editorBox = editor ? 

  return <div>{profileBox}</div>
}

export default ProfilePage
