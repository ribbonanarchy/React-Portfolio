import React from 'react';

export default function Contact() {
  return (
    <div id="ContactMe">
        <h2>Contact Me</h2>
        <form>
            <label>
                Name: <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email: <input type="email" name="email" />
            </label>
            <br />
            <label for="comment">Comment:</label>
            <br />
            <textarea id="comment" name="comment" rows="5" cols="50">

            </textarea>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}
