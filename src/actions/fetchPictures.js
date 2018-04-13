export default function fetchPictures() {
    return async function(dispatch,getState) {
        dispatch({
            type:'PICTURES_LOADING',
            loading:true,
        });

        try {
            const state = getState(),
                quantity = getQuantity();
            let response;
            if(!state.pictures.next)
                response = await fetch(`/api/recent/?limit=${encodeURIComponent(quantity)}&format=json`, {credentials: 'same-origin'});
            else
                response = await fetch(state.pictures.next+`?limit=${encodeURIComponent(quantity)}&format=json`,{credentials: 'same-origin'});
            let json = await response.json(),
                pictures = json && json.entries,
                next = json && json.links && json.links.next && json.links.next.split('ru')[1].split('?')[0];
            dispatch({
                type:'PICTURES_LOADED',
                pictures,
                next,
                number:pictures.length,
            });

        }catch (error){
            dispatch({
                type:'PICTURES_LOAD_ERROR',
                error,
            });

        }finally {
            dispatch({
                type:'PICTURES_LOADING',
                loading:false,
            })
        }
    }
}

function getQuantity(){
    const width =  window.screen.width;
    if(width>5000)
        return 40;
    else if(width>3000)
        return 30;
    else if(width>2000)
        return 20;
    else return 10;
}