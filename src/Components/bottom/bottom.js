import './bottom.css'
import Tab from '../tab/tab'

const Bottom = () => {
    return (
        <div className="bottom-container">
            <div className="bottom-wrapper">
                <p className="bottom-para">
                    Botsopot AI offers our customer a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any busness need. Our knowledge and experience transkate to added value and peace of mind for our customer.
                </p>
                <div className="bottom-tab">
                    Who We Serve
                </div>
                <p className="bottom-para">
                    Botspot AI serves businesses in all major sectors, providing exceptional software solutions for large corporation, mid-sized and startups. we use industry specific knowledge and custom tailor our products to each customer’s unique needs.
                </p>
            </div>
            <div className="bottom-tabs">
                <Tab msg={"Finance and Insurance"} />
                <Tab msg={"Healthcare"} />
                <Tab msg={"Construction"} />
                <Tab msg={"Wholesale and Retail"} />
                <Tab msg={"Education"} />
                <Tab msg={"Energy and Resources"} />
                <Tab msg={"Entertainment"} />
                <Tab msg={"Transportation"} />
            </div>
        </div>
    )
}

export default Bottom