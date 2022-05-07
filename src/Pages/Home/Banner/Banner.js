import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel className='h-5'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-dark'>Apple Laptop</h3>
                    <p className='text-dark'>All categoery of apple product is here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://www.cnet.com/a/img/resize/3b5d94446c426b4f4ef7517affb099e12fa6bfb1/2022/02/11/c11efe1e-1083-4fea-9167-8ecbdaace682/samsung-s22-plus-hands-on-002.jpg?auto=webp&fit=crop&height=528&width=940"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className='text-white'>Moblie Phones</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s.studiobinder.com/wp-content/uploads/2019/11/Different-Types-of-Cameras-Featured-StudioBinder-min.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className='text-warning'>Camera Bands</h3>
                    <p className='text-warning'>All type of camera is here</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.cnet.com/a/img/resize/3b5d94446c426b4f4ef7517affb099e12fa6bfb1/2022/02/11/c11efe1e-1083-4fea-9167-8ecbdaace682/samsung-s22-plus-hands-on-002.jpg?auto=webp&fit=crop&height=528&width=940"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s.studiobinder.com/wp-content/uploads/2019/11/Different-Types-of-Cameras-Featured-StudioBinder-min.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </div>
    );
};

export default Banner;