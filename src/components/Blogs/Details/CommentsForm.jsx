import React from 'react';

function CommentsForm({ theme }) {
  return (
    <div className="comment-form">
      <h5>Add Comment :</h5>
      <div className="form">
        <form action="">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea placeholder="Your Comment"></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group text-center">
                <a href="#0" className={`butn ${theme ? (theme === 'light' ? 'dark' : '') : 'light'} curve full-width`}>
                  Comment
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CommentsForm