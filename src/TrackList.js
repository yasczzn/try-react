const TrackList = ({tracks, title}) => {

    return ( 
        <div className="track-list">
            <h2>{ title }</h2>
            {tracks.map((track) => (
                <div className="track-preview" key={track.id}>                    <h2>{track.title}</h2>
                    <p>Album: {track.body}</p>
                    <p>Artist: {track.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default TrackList;