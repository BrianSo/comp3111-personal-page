import './work.scss';
import React from 'react';

var GalleryModal = React.createClass({
    render: function() {
        return (

            <div className="modal fade modal-gallery" id="work" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">My Work</h4>
                        </div>
                        <div className="modal-body modal-spa">
                            <div className="gallery">
                                <div className="gallery-row">
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g1.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                                <img src="/public/images/g1.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g2.jpg" data-lightbox="example-set" data-title="Sed ut perspiciatis unde omnis iste natus error sit">
                                                <img src="/public/images/g2.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g3.jpg" data-lightbox="example-set" data-title="Eaque ipsa quae ab illo inventore veritatis et quasi">
                                                <img src="/public/images/g3.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g4.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                                <img src="/public/images/g4.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g5.jpg" data-lightbox="example-set" data-title="Sed ut perspiciatis unde omnis iste natus error sit">
                                                <img src="/public/images/g5.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g6.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                                <img src="/public/images/g6.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g3.jpg" data-lightbox="example-set" data-title="Sed ut perspiciatis unde omnis iste natus error sit">
                                                <img src="/public/images/g3.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g1.jpg" data-lightbox="example-set" data-title="Eaque ipsa quae ab illo inventore veritatis et quasi">
                                                <img src="/public/images/g1.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 gallery-grids">
                                        <div className="gallery-w3ls-hover">
                                            <a href="/public/images/g2.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                                <img src="/public/images/g2.jpg" className="img-responsive zoom-img" alt />
                                                <div className="view-caption">
                                                    <h5>View+</h5>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default GalleryModal;