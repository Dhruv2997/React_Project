function Actions(props) {
    function deleteButton() { }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteButton}>Delete</button>
            </div>
        </div>
    );
}

export default Actions;