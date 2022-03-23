import React from 'react';
import ResumePDF from '../../assets/Arnecke-Resume.pdf';

export default function Resume() {
  return (
    <div id="Resume">
        <h2>Resume</h2>

        <embed src={ResumePDF} 
        width="500" 
        height="375" 
        type="application/pdf" />

    </div>
  );
}
