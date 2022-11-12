import './index.css'

const TabItem = props => {
  const {
    tabDetails: {tabId, displayText},
    isActive,
    changeActiveTab,
  } = props
  const activeBtn = isActive ? 'active-btn' : ''

  const changeTab = () => {
    changeActiveTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
