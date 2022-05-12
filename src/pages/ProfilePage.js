import UserInfoEditor from '../components/UserInfoEditor'

const ProfilePage = ({
  user,
  editor,
  showEditor,
  userEditor,
  onChangeUserInfo,
  onSubmitUserInfo
}) => {
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
        <img src={img} alt="profile" width="500px"></img>
        <h1>{user.name}</h1>
        <button onClick={showEditor}>Edit Info</button>
      </div>
    )
  }

  let editorBox = editor ? (
    <UserInfoEditor
      userEditor={userEditor}
      onChangeUserInfo={onChangeUserInfo}
      onSubmitUserInfo={onSubmitUserInfo}
    />
  ) : null

  return (
    <div>
      <div>{profileBox}</div>
      <div>{editorBox}</div>
    </div>
  )
}

export default ProfilePage
