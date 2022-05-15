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
  minusDay,
  goalTrackerForm,
  showGoalTrackerForm,
  goalBody,
  onChangeGoal,
  onSubmitGoal
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
        <img className="profileImg" src={img} alt="profile" width="500px"></img>
        <h1 className="name">{user.name}</h1>
        <div className="button-container">
          <button className="editButton" onClick={showEditor}>
            {infoText}
          </button>
          <button className="editButton" onClick={showPasswordForm}>
            {passwordText}
          </button>
          <button className="editButton" onClick={destroyAccount}>
            DELETE ACCOUNT
          </button>
        </div>
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

  let goalForm = goalTrackerForm ? (
    <CreateGoal
      goalBody={goalBody}
      onChangeGoal={onChangeGoal}
      onSubmitGoal={onSubmitGoal}
    />
  ) : null

  return (
    <div className="profile">
      <div className="info">
        <div>{profileBox}</div>
        <div>{editorBox}</div>
        <div>{passwordBox}</div>
      </div>
      <div className="goal-box">
        <div>
          <button className="editButton" onClick={showGoalTrackerForm}>
            Add A Goal Tracker
          </button>
          {goalForm}
        </div>
        <div>
          <h2 className="goalTitle">Ongoing Goals</h2>
          {goalTrackers}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
