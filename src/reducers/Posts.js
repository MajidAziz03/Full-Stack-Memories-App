// hum wese to state use krtay hai for reducer yahan post likh detay hai kuch b likh sktay hai 
// wese to ese hota hai  const reducer = (state, action) => {
// ab krengay isko state ki jaga post 




export default (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return posts;

        case "CREATE":
            return posts;
        default: return posts;
    }
}