import React from 'react';

const BlogStanderd = () => {
  const services = [
    {
      title: 'Build a Beautiful Blog With Ease',
      description:
        'My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.',
    },
    {
      title: 'Build a Beautiful Blog With Ease',
      description:
        'My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.',
    },
    {
      title: 'Build a Beautiful Blog With Ease',
      description:
        'My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.',
    },
  ];
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {services?.map((item, index) => {
                return (
                  <div key={index} className={`item mb-80`}>
                    <div className="content">
                      <div className="row justify-content-center">
                        <div className="col-10">
                          <h4 className="title">
                            <div>{item?.title}</div>
                          </h4>
                          <p>{item?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
