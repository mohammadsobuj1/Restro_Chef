import { FaCameraRetro, FaPhotoVideo } from 'react-icons/fa';
import './Gallarey.css'

const Gallarey = () => {
    return (
        <div className='body py-32'>
            <div className="flex justify-center gap-4">

                <FaPhotoVideo className='text-3xl md:text-5xl text-orange-400 ' />
                <h1 className=' text-3xl md:text-5xl  font-italic font-bold uppercase underline text-red-500'> Super Hero's galarey</h1>
                <FaCameraRetro className='text-3xl md:text-5xl text-orange-400 ' ></FaCameraRetro>
            </div>
            <div className="gallery w-[100%] mx-auto mt-16">
                <span style={{ '--i': 1 }}><img src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFydmVsJTIwc3VwZXIlMjBoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></span>
                <span style={{ '--i': 2 }}><img src="https://img.freepik.com/premium-vector/spiderman-vector-illustration_677433-78.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=sph" alt="" /></span>

                <span style={{ '--i': 3 }}><img src="https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnZlbCUyMHN1cGVyJTIwaGVyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></span>

                <span style={{ '--i': 4 }}><img src="https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>


                <span style={{ '--i': 5 }}><img src="https://img.freepik.com/free-vector/superman_1284-17082.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 6 }}><img src="https://img.freepik.com/free-vector/red-superhero-pop-art-poster_603843-516.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais" alt="" /></span>

                <span style={{ '--i': 7 }}><img src="https://img.freepik.com/premium-vector/spiderman-vector-illustration_677433-78.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=sph" alt="" /></span>

                <span style={{ '--i': 8 }}><img src="https://img.freepik.com/premium-vector/spiderman-vector-illustration_677433-78.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=sph" alt="" /></span>

            </div>



        </div>
    );
};

export default Gallarey;