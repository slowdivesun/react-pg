import Message from '../message/message'
import './topPage.css'

const TopPage = () => {
    return (
        <div className="toppage-container">
            <p className="toppage-heading">THE SOUL OF THE WORLD</p>
            <p className='toppage-para'>A SIMPLE SOLUTION</p>
            <div className="toppage-mirror"></div>
            <p className='toppage-para'>
                For businesses and organizations - you can build communities
                and engage audiences with one easy-to-use mobile
                app platform.
            </p>
            <div className="toppage-buttons">
                <button>Know More</button>
                <button>Contact Us</button>
            </div>
            <Message />
        </div>
    )
}

export default TopPage