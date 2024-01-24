import React from 'react';
import Works from '@/components/Works/WorksStyle2';

const BlogStanderd = ({ services }) => {

	return (
		<section className="blog-pg section-padding pt-0">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-11">
						<div className="posts">
							{services?.map((item, index) => {
								const hasPresentations =
									item?.servicePresentations &&
									item.servicePresentations.length > 0;
								const hasVideos =
									item?.serviceVideos && item.serviceVideos.length > 0;

								return (
									<div id={`service-${item?.id}`} key={index} className={`item scroll-offset`}>
										<div className="content">
											<div className="row justify-content-center">
												<div className="col-10">
													<h4 className="title">
														<div>{item?.title}</div>
													</h4>
													<p>{item?.description}</p>
													{(hasPresentations || hasVideos) && (
														<Works
															id={item?.id}
															grid={3}
															presentations={item?.servicePresentations}
															videos={item?.serviceVideos}
															hideHeader={true}
															filterPosition="center"
														/>
													)}
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
