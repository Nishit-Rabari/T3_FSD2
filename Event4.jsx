function Event4(){
    function handleSubmit(e){
        // e.preventDefault();
        alert('tou Clicked Submit Button');

    }
    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>

        </form>
    )
}
export default Event4