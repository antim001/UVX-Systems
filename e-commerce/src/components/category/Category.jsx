
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'Safety equipments'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'Educational models'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'Water purification system'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'Laboratory equipments'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'Meter and timers'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'Laboratory glassware'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'Laboratory consumble'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Laboratory chemicals & reagent'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Office equipment'
    }
]

const Category = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-4">
                                    {/* Image  */}
                                    <div 
                                    onClick={()=>navigate(`/category/${item.name}`)}
                                    className=" w-16 h-16 lg:w-24 lg:h-20  max-w-80 rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;