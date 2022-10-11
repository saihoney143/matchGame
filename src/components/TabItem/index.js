import './index.css'

const TabItem = props => {
  const {TabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = TabDetails
  const activeTabClass = isActive ? 'activetab-para' : 'tab-para'

  const updateTabId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tablist-container" onClick={updateTabId}>
      <button type="button" className={`tab-para ${activeTabClass}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
