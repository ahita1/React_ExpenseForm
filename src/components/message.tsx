
let count = 0

const Message = () => {
    console.log("message call" , count);
    
    count ++
    return <div>message { count }</div>
}

export default Message