const TrackList = ({tracks, title, handleDelete}) => {
    
    return ( 
        <div className="track-list">
            <h2>{ title }</h2>
            {tracks.map((track) => (
                <div className="track-preview" key={track.id}>                    
                    <h2>{track.title}</h2>
                    <p>Album: {track.body}</p>
                    <p>Artist: {track.author}</p>
                    <button onClick={() => handleDelete(track.id)}>Delete list</button>
                </div>
            ))}
        </div>
     );
}
 
export default TrackList;