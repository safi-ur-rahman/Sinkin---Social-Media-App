import { useNavigate } from 'react-router-dom';
import './homepage.css';

function Homepage() {
  const navigate = useNavigate();

	const handleClick = (evt) => {
		navigate('/profile');
	};

  return (
    <div>
      <div className="header">
        <div> <img className="logo" src={require('./Images/logo.png')} alt="sinkin-logo"/> </div>
        
        <div className="search">
          <div>
              <input type="text" placeholder="Search"/>
          </div>
          <div>
              <button>
                  <img src={require('./Images/search-light.png')} alt="search"/>
              </button>
          </div>
        </div>
        
        <div className="header-buttons">
          <div><img className="message-icon" src={require('./Images/dm-light.png')} alt="message-icon"/></div>
          <div className="profile-icon" onClick={handleClick}>
              <p>Safi</p>
              <img className="profile-pic" src={require('./Images/profile-pic.jfif')} alt="profile-pic"/>
          </div>
        </div>
      </div>


      <div className="comms-icons">
        <div><p>Comms: </p></div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>
        <div className="comm-info">
          <img className="comm-icon" src={require('./Images/profile-pic.jfif')} alt="comm-icon"/>
        </div>  
      </div>


      <div className="body-grid">
        <div className="feed">
            <h3>Feed</h3>
            <div className='feed-post'>
              <div className='post-flex'>
                <div><img className='post-img' src={require('./Images/profile-pic.jfif')} alt='post'/></div>
                <div className='post-info'>
                  <div className='poster-profile'>
                    <img className='poster-profile-pic' src={require('./Images/profile-pic.jfif')} alt='profilr-pic'/>
                    <h4>Safi ur Rahman</h4>
                  </div>
                  <p className='post-loc'>Lahore, Pakistan</p>
                  <p>lorem ipsum sdajkj jhasdkjhbjh sjadklnjksnad jskandjknsdjk iocsjdoicjslk kndsxnsjkdn
                    sjdancjk sndjkcns kj
                    dasc jnjk sdncj ksndc jknsjka dnlksack lsnj
                  </p>
                  <p className='post-time'>3:28 PM, 26th Feb, 2023</p>
                  <div className='line'></div>

                  <div className='people-tagged'>
                    <h6>Tagged People:</h6>
                    <p>Ali Ahmad, Moaz</p>
                  </div>
                  <div className='line'></div>

                  <div className='post-reaction-buttons'>
                    <button>Like</button>
                    <button>Comment</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='feed-post'>
              <div className='post-flex'>
                <div><img className='post-img' src={require('./Images/profile-pic.jfif')} alt='post'/></div>
                <div className='post-info'>
                  <div className='poster-profile'>
                    <img className='poster-profile-pic' src={require('./Images/profile-pic.jfif')} alt='profilr-pic'/>
                    <h4>Safi ur Rahman</h4>
                  </div>
                  <p className='post-loc'>Lahore, Pakistan</p>
                  <p>lorem ipsum sdajkj jhasdkjhbjh sjadklnjksnad jskandjknsdjk iocsjdoicjslk kndsxnsjkdn
                    sjdancjk sndjkcns kj
                    dasc jnjk sdncj ksndc jknsjka dnlksack lsnj
                  </p>
                  <p className='post-time'>3:28 PM, 26th Feb, 2023</p>
                  <div className='line'></div>

                  <div className='people-tagged'>
                    <h6>Tagged People:</h6>
                    <p>Ali Ahmad, Moaz</p>
                  </div>
                  <div className='line'></div>

                  <div className='post-reaction-buttons'>
                    <button>Like</button>
                    <button>Comment</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='feed-post'>
              <div className='post-flex'>
                <div><img className='post-img' src={require('./Images/profile-pic.jfif')} alt='post'/></div>
                <div className='post-info'>
                  <div className='poster-profile'>
                    <img className='poster-profile-pic' src={require('./Images/profile-pic.jfif')} alt='profilr-pic'/>
                    <h4>Safi ur Rahman</h4>
                  </div>
                  <p className='post-loc'>Lahore, Pakistan</p>
                  <p>lorem ipsum sdajkj jhasdkjhbjh sjadklnjksnad jskandjknsdjk iocsjdoicjslk kndsxnsjkdn
                    sjdancjk sndjkcns kj
                    dasc jnjk sdncj ksndc jknsjka dnlksack lsnj
                  </p>
                  <p className='post-time'>3:28 PM, 26th Feb, 2023</p>
                  <div className='line'></div>

                  <div className='people-tagged'>
                    <h6>Tagged People:</h6>
                    <p>Ali Ahmad, Moaz</p>
                  </div>
                  <div className='line'></div>

                  <div className='post-reaction-buttons'>
                    <button>Like</button>
                    <button>Comment</button>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="create-post">
            <h3>Create Post</h3>
            <div className='center-align'>
              <div className='preview'>
                <span>Preview</span>
              </div>
              <div className='post-media'>
                  <button className='post-media-button'>Add Photo</button>
                  <button className='post-media-button'>Add Video</button>
              </div>
              <div><button className='post-tag-button'>Tag People</button></div>
              <div><button className='post-tag-button'>Add Place</button></div>
              <div><button className='post-button'>Post</button></div>
            </div>
        </div>

        <div className="create-comm">
            <h3>Your Comms</h3>
            <div className='created-comms'>
                <div className='your-comm-info'>
                  <div><img className='comm-pic' src={require('./Images/profile-pic.jfif')} alt='comm-pic'/></div>
                  <div><p >Comm 1</p></div>
                </div>
                <div className='your-comm-info'>
                  <div><img className='comm-pic' src={require('./Images/profile-pic.jfif')} alt='comm-pic'/></div>
                  <div><p >Comm 2</p></div>
                </div>
                <div className='your-comm-info'>
                  <div><img className='comm-pic' src={require('./Images/profile-pic.jfif')} alt='comm-pic'/></div>
                  <div><p >Comm 3</p></div>
                </div>
                <div className='your-comm-info'>
                  <div><img className='comm-pic' src={require('./Images/profile-pic.jfif')} alt='comm-pic'/></div>
                  <div><p >Comm 4</p></div>
                </div>
                <div className='your-comm-info'>
                  <div><img className='comm-pic' src={require('./Images/profile-pic.jfif')} alt='comm-pic'/></div>
                  <div><p >Comm 5</p></div>
                </div>
                <div className='your-comm-info'>
                  <div><img className='comm-pic' src={require('./Images/profile-pic.jfif')} alt='comm-pic'/></div>
                  <div><p >Comm 6</p></div>
                </div>
            </div>
            <div className='center-align'><button className='create-comm-button'>Create New Comm</button></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;