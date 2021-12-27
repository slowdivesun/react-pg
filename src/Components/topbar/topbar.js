import './topbar.css'

const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-logo">BOTSPOT AI</div>
            <div className="topbar-icons">
                <i className="topbar-icon phone fas fa-phone"></i>
                <i className="topbar-icon search fas fa-search"></i>
                <i className="topbar-icon fas fa-bars"></i>
            </div>
        </div>
    )
}

export default Topbar