import React, {memo} from 'react'
import Banner from '../banner/Banner'

const Categories = () => {
  return (
    <div className='categories-secrion'>
        <div className="container">
            <div className="categories-section__content">
                <Banner title={"Mobile & Computing"} list={["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy Book4 Ultra", "Galaxy Tab S9 Series", "Galaxy Watch6 Series"]} bg={"./images/bg1.avif"} name={"Ultra performance, boosted by AI"} desc={"Get $500 off select Galaxy Book4 Ultra and more."} btn={"Buy now"} isFirst={true}/>
                <Banner title={"TV & Audio"} list={["The Frame", "The Freestyle 2nd Gen", "Music Frame"]} bg={"./images/bg2.avif"} name={"Buy. Bezel. Beauty."} desc={"Buy the Frame, get a Customizable Bezel on us."} btn={"Buy now"}/>
                <Banner title={"Home Appliances"} list={["Bespoke AI", "Bespoke Refrigerator", "Bespoke Laundry"]} bg={"./images/bg3.avif"} name={"New Bespoke AI Appliances"} desc={"Pre-order and save up to $1,200 on our latest technology."} btn={"Pre-order"}/>
                <Banner title={"Sustainability"} list={["Certified Re-Newed", "How to recycle"]} bg={"./images/bg4.webp"} name={"New phone, less waste"} desc={"Get a refurbished Certified Re-Newed smartphone with the features you love."} btn={"Learn more"} isLast={true}/>
            </div>
        </div>
    </div>
  )
}

export default memo(Categories)