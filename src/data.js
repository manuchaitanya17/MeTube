export const API_KEY = "AIzaSyAM6ADbbXL48HnhVx0F8qz6oygFdSw1o0k";   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}