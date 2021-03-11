import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // allowed file types
  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    // if we have any files selected && if the selected types are included
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file: PNG or JPEG');
      // alert('Wrong type selected')
    }
  };

  useEffect(() => {});

  return (
    <div>
      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {/* if true && then output */}
          {error && <div className="error">{error}</div>}
          {file && <div> {file.name} </div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
}
