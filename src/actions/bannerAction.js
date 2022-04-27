import axios from 'axios';

export const GET_BANNER_ITEM = "GET_BANNER_ITEM";





//actions creator functions 

export const getBannerItem = (item) => {
    return {
        //todo
        type: GET_BANNER_ITEM,
        payload: {
            bannerItem : item,
        } 
    }
}



//배너 get request!!!!
export const fetchBanner =  () => dispatch => {
    axios
    .get(`https://api.moverse.club/v1/banners`)
    .then((res)=> {
            //console.log(res.data.data.banners);
            //dispatch(getBannerItem(res.data.data.banners));
            const banner = [
                'https://velog.velcdn.com/images/beablessing/post/32bb1526-1538-4a61-929d-51c6733814b6/image.png',
                'https://velog.velcdn.com/images/beablessing/post/849e2e8c-dcfa-4e6e-a1c5-229f417c4736/image.png',
                'https://velog.velcdn.com/images/beablessing/post/7424044e-5e3a-47ed-8161-caf8ab8c1405/image.png'];
                dispatch(getBannerItem(banner));
            
    })
    .catch(err => console.log(err))
}
