import './MainSlider.css';
import './SliderItem.css';
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import SlideButton from './SlideButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


//img 위아래 잘리는 부분
//text 위에 올리는 부분 
//이동하는 점 

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function MainSlider({banner}) {
    //console.log(banner.bannerItem,"배너 아이템 배열")  //매인페이지에서 통신 후,  패치배너에 넣어주면됨. 
    const dispatch = useDispatch();





    const navigate = useNavigate();
    const [windowWidth, windowHeight] = useWindowSize();
    // const items = ['https://youtube.com/embed/wxz2T3aGqZM','https://youtube.com/embed/3_GGaLgZfU8', 'https://youtube.com/embed/uh-NLfcVSnc',];
    // const items = [
    //         'https://velog.velcdn.com/images/beablessing/post/32bb1526-1538-4a61-929d-51c6733814b6/image.png',
    //         'https://velog.velcdn.com/images/beablessing/post/849e2e8c-dcfa-4e6e-a1c5-229f417c4736/image.png',
    //         'https://velog.velcdn.com/images/beablessing/post/7424044e-5e3a-47ed-8161-caf8ab8c1405/image.png',
    // ];
    const itemSize = banner.bannerItem.length;  //3 
    const sliderPadding = 40;  
    const sliderPaddingStyle = `0 ${sliderPadding}px`;
    const newItemWidth = getNewItemWidth();
    const transitionTime = 500;
    const transitionStyle = `transform ${transitionTime}ms ease 0s`;
    const 양끝에_추가될_데이터수 = 2;
    const [currentIndex, setCurrentIndex] = useState(양끝에_추가될_데이터수)
    const [slideTransition, setTransition] = useState(transitionStyle);
    const [isSwiping, setIsSwiping] = useState(false);
    const [slideX, setSlideX] = useState(null);
    const [prevSlideX, setPrevSlideX] = useState(false);
    let isResizing = useRef(false);

    let slides = setSlides();
    
    function setSlides() {
        let addedFront = [];
        let addedLast = [];
        var index = 0;
        while (index < 양끝에_추가될_데이터수) {
            addedLast.push(banner.bannerItem[index % banner.bannerItem.length])
            addedFront.unshift(banner.bannerItem[banner.bannerItem.length - 1 - index % banner.bannerItem.length])
            index++;
        }
        return [...addedFront, ...banner.bannerItem, ...addedLast];
    }

    function getNewItemWidth() {
        let itemWidth = windowWidth * 0.9 - (sliderPadding * 2)
        itemWidth = itemWidth > 1060 ? 1060 : itemWidth;
        return itemWidth;
    }

    useEffect(() => {
        isResizing.current = true;
        setIsSwiping(true);
        setTransition('')
        setTimeout(() => {
            isResizing.current = false;
            if (!isResizing.current)
                setIsSwiping(false)
        }, 3000);
    }, [windowWidth])

    // useInterval(() => {
    //     handleSlide(currentIndex + 1)
    // }, !isSwiping && !prevSlideX ? 2000 : null)

    function replaceSlide(index) {
        setTimeout(() => {
            setTransition('');
            setCurrentIndex(index);
        }, transitionTime)
    }

    function handleSlide(index) {
        setCurrentIndex(index);
        if (index - 양끝에_추가될_데이터수 < 0) {
            index += itemSize;
            replaceSlide(index)
        }
        else if (index - 양끝에_추가될_데이터수 >= itemSize) {
            index -= itemSize;
            replaceSlide(index)
        }
        setTransition(transitionStyle);
    }

    function handleSwipe(direction) {
        setIsSwiping(true);
        handleSlide(currentIndex + direction)
    }

    function getItemIndex(index) {
        index -= 양끝에_추가될_데이터수;
        if (index < 0) {
            index += itemSize;
        }
        else if (index >= itemSize) {
            index -= itemSize;
        }
        return index;
    }

    function getClientX(event) {
        return event._reactName === "onTouchStart" ? event.touches[0].clientX :
            event._reactName === "onTouchMove" || event._reactName === "onTouchEnd" ? event.changedTouches[0].clientX : event.clientX;
    }

    function handleTouchStart(e) {
        setPrevSlideX(prevSlideX => getClientX(e))
    }

    function handleTouchMove(e) {
        if (prevSlideX) {
            setSlideX(slideX => getClientX(e) - prevSlideX);
        }
    }

    function handleMouseSwipe(e) {
        if (slideX) {
            const currentTouchX = getClientX(e);
            if (prevSlideX > currentTouchX + 100) {
                handleSlide(currentIndex + 1)
            }
            else if (prevSlideX < currentTouchX - 100) {
                handleSlide(currentIndex - 1)
            }
            setSlideX(slideX => null)
        }
        setPrevSlideX(prevSlideX => null)
    }

    return (
        <div className="slider-area">
            <div className="slider">
                <SlideButton direction="prev" onClick={() => handleSwipe(-1)} />
                <SlideButton direction="next" onClick={() => handleSwipe(1)} />
                <div className="slider-list" style={{ padding: sliderPaddingStyle }}>
                    <div className="slider-track"
                        onMouseOver={() => setIsSwiping(true)}
                        onMouseOut={() => setIsSwiping(false)}
                        style={{
                            transform: `translateX(calc(${(-100 / slides.length) * (0.5 + currentIndex)}% + ${slideX || 0}px))`,
                            transition: slideTransition
                        }}>
                        {
                            slides.map((slide, slideIndex) => {
                                //console.log(slide,slideIndex,"###")
                                const itemIndex = getItemIndex(slideIndex);
                                return (
                                    <div key={slideIndex} className={`slider-item ${currentIndex === slideIndex ? 'current-slide' : ''}`}
                                        style={{ width: newItemWidth || 'auto' }}
                                        onMouseDown={handleTouchStart}
                                        onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onMouseMove={handleTouchMove}
                                        onMouseUp={handleMouseSwipe}
                                        onTouchEnd={handleMouseSwipe}
                                        onMouseLeave={handleMouseSwipe}
                                    >
                                    {/* <iframe 
                                    onClick={()=> navigate('/')}
                                    src={items[itemIndex]} 
                                    //alt={`banner${itemIndex}`} 
                                    title="registerVideo"
                                    width="857"
                                    height="412"
                                    frameBorder="0" 
                                    ></iframe> */}
                                    <img
                                    onClick={()=> navigate(`/vdetail/${itemIndex +1}`)}
                                        className='imgclass'
                                        src={banner.bannerItem[itemIndex]} 
                                        alt="imgslider"
                                    >
                                    </img>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </div >
    );


}

export default MainSlider;