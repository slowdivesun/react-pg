import './tab.css'

const Tab = (props) => {
    const { msg } = props
    return (
        <div className="tab-container">
            {msg}
        </div>
    )
}

export default Tab;