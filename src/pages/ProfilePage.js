import UserInfoEditor from '../components/UserInfoEditor'
import PasswordEditor from '../components/PasswordEditor'
import Goals from '../components/Goals'
import CreateGoal from '../components/CreateGoal'

const ProfilePage = ({
  user,
  editor,
  showEditor,
  userEditor,
  onChangeUserInfo,
  onSubmitUserInfo,
  passwordForm,
  showPasswordForm,
  passwordEditor,
  onChangePassword,
  onSubmitPassword,
  destroyAccount,
  goals,
  addDay,
  minusDay
}) => {
  let img
  let profileBox
  let infoText = editor ? 'HIDE' : 'EDIT INFO'
  let passwordText = passwordForm ? 'HIDE' : 'CHANGE PASSWORD'

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
        <button onClick={showEditor}>{infoText}</button>
        <button onClick={showPasswordForm}>{passwordText}</button>
        <button onClick={destroyAccount}>DELETE ACCOUNT</button>
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

  let passwordBox = passwordForm ? (
    <PasswordEditor
      passwordEditor={passwordEditor}
      onChangePassword={onChangePassword}
      onSubmitPassword={onSubmitPassword}
    />
  ) : null

  let goalTrackers = goals ? (
    goals.map((goal) => (
      <Goals key={goal.id} goal={goal} addDay={addDay} minusDay={minusDay} />
    ))
  ) : (
    <h2>You have no goals currently!</h2>
  )

  return (
    <div>
      <div>
        <div>{profileBox}</div>
        <div>{editorBox}</div>
        <div>{passwordBox}</div>
      </div>
      <div>
        <div>
          <button>Add A Goal Tracker</button>
        </div>
        <div>{goalTrackers}</div>
      </div>
    </div>
  )
}

export default ProfilePage
