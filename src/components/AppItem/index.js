import './index.css'

const AppItem = props => {
  const {
    appDetails: {appName, imageUrl},
  } = props

  return (
    <li className="apps">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
