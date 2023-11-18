import { Container } from 'react-bootstrap';
import '../Brands/Brands.css'
import ListGroup from 'react-bootstrap/ListGroup';
import brand1 from '../../assets/images/Brand1.svg';
import brand2 from '../../assets/images/Brand2.svg';
import brand3 from '../../assets/images/Brand3.svg';
import brand4 from '../../assets/images/Brand4.svg';
import brand5 from '../../assets/images/Brand5.svg';

function Brands() {

    return (
        <div className='lolo1'>
            <ListGroup horizontal className='lolo2'>
                <list-item>
                    <div className='lol'>
                        <img src={brand1} className='lol' ></img>
                    </div>
                </list-item>
                <list-item>
                    <div className='lol'>
                        <img src={brand2} className='lol'></img>
                    </div>
                </list-item>
                <list-item>
                    <div className='lol'>
                        <img src={brand3} className='lol'></img>
                    </div>
                </list-item>
                <list-item>
                    <div className='lol'>
                        <img src={brand4} className='lol'></img>
                    </div>
                </list-item>

                <list-item>
                    <div className='lol'>
                        <img src={brand5} className='lol'></img>
                    </div>
                </list-item>

            </ListGroup>
        </div>

    )
}

export default Brands;